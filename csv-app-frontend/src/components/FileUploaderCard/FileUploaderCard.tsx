import React, { ChangeEvent } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { Box } from '@mui/material'

interface FileUploaderProps {
	handleFileUpload: () => void
	file: File | null
	handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
	handleFileRemove: () => void
}

function FileUploaderCard({
	handleFileUpload,
	file,
	handleFileChange,
	handleFileRemove,
}: FileUploaderProps): JSX.Element {
	return (
		<Paper
			variant="outlined"
			sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
		>
			<Typography component="h1" variant="h4" align="center">
				Upload your CSV
			</Typography>

			{!file && (
				<label htmlFor="file-input">
					<div
						style={{
							width: 100,
							height: 100,
							border: '1px solid #ccc',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: 'pointer',
							margin: '20px auto',
						}}
					>
						<input
							type="file"
							id="file-input"
							style={{ display: 'none' }}
							onChange={handleFileChange}
							accept=".csv"
						/>
						{!file && (
							<AddBoxOutlinedIcon
								color="primary"
								fontSize="large"
							/>
						)}
					</div>
				</label>
			)}
			{file && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 4,
						margin: '20px auto',
					}}
				>
					<Typography variant="h6" align="center">
						{file.name}
					</Typography>

					<Stack direction="row" spacing={2}>
						<Button
							variant="contained"
							color="success"
							onClick={handleFileUpload}
						>
							Upload
						</Button>
						<Button
							variant="outlined"
							color="error"
							onClick={handleFileRemove}
						>
							Remove
						</Button>
					</Stack>
				</Box>
			)}
		</Paper>
	)
}

export default FileUploaderCard
