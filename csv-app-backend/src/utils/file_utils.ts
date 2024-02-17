import * as fs from 'fs'

export const deleteFiles = async (directory: string): Promise<void> => {
    try {
        const files = await fs.promises.readdir(directory)

        for (const file of files) {
            await fs.promises.unlink(`${directory}/${file}`)
            console.log(`Deleted file: ${file}`)
        }
    } catch (err) {
        console.error('Error deleting files:', err)
    }
}
