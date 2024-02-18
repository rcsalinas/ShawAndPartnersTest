import React, { ChangeEvent } from 'react'
import FileUploaderCard from '../../components/FileUploaderCard/FileUploaderCard'
import fetchUsers from '../../networking/endpoints/user/fetchUsers'
import Swal from 'sweetalert2'
import uploadFile from '../../networking/endpoints/files/uploadFile'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Box } from '@mui/material'

function SearchPage() {
	const [file, setFile] = React.useState<File | null>(null)
	const [query, setQuery] = React.useState('')
	const [successFullUpload, setSuccessFullUpload] = React.useState(false)

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		const selectedFile = e.target.files[0]
		setFile(selectedFile)
	}

	const handleFileUpload = async () => {
		const formData = new FormData()
		formData.append('file', file as Blob)
		try {
			await uploadFile(formData)
			setSuccessFullUpload(true)
		} catch (error: any) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.message,
			})
		}
	}

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await fetchUsers(query)
				const data = await users.data
				console.log('users', data)
			} catch (error: any) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: error.message,
				})
			}
		}
		fetchData()
	}, [successFullUpload, query])

	const handleFileRemove = () => {
		setFile(null)
	}
	return (
		<>
			{successFullUpload ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<SearchBar query={query} />
				</Box>
			) : (
				<FileUploaderCard
					handleFileUpload={handleFileUpload}
					file={file}
					handleFileChange={handleFileChange}
					handleFileRemove={handleFileRemove}
				/>
			)}
		</>
	)
}

export default SearchPage
