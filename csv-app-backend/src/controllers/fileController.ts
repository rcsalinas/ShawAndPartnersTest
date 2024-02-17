import type { Request, Response } from 'express'
import fs from 'fs'
import csvParser from 'csv-parser'
import type { CsvRow } from '../types/CsvRow'
import { csvData } from '../data/csvData'

const data: CsvRow[] = csvData as CsvRow[]

export const uploadFile = (req: Request, res: Response): Response => {
    const file = req.file
    if (file === null || file === undefined) {
        return res.status(500).json({ message: 'No file uploaded' })
    }

    fs.createReadStream(file.path)
        .pipe(csvParser())
        .on('data', (row: CsvRow) => {
            data.push(row)
        })
        .on('end', () => {
            console.log('CSV data:', data)
        })

    return res.status(200).json({
        message: 'The file was uploaded successfully',
    })
}
