import type { Request, Response } from 'express'
import fs from 'fs'
import csvParser from 'csv-parser'
import type { CsvRow } from '../types/CsvRow'
import { csvData } from '../data/csvData'
import { deleteFiles } from '../utils/file_utils'

const data: CsvRow[] = csvData as CsvRow[]

export const uploadFile = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const file = req.file
    if (file === null || file === undefined) {
        return res.status(500).json({ message: 'No file uploaded' })
    }
    await processDataFromCSV(file, data)

    await deleteFiles('uploads')

    return res.status(200).json({
        message: 'The file was uploaded successfully',
    })
}

async function processDataFromCSV(
    file: { path: string },
    data: CsvRow[]
): Promise<void> {
    await new Promise<void>((resolve, reject) => {
        fs.createReadStream(file.path)
            .pipe(csvParser())
            .on('data', (row: CsvRow) => {
                const exists = data.some((existingRow) => {
                    return existingRow.name === row.name
                })
                if (!exists) {
                    data.push(row)
                }
            })
            .on('end', () => {
                console.log('CSV data:', data)
                resolve()
            })
            .on('error', (error) => {
                reject(error)
            })
    })
}
