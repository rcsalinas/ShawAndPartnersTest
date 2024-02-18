import React, { ChangeEvent } from 'react'
import FileUploaderCard from '../../components/FileUploaderCard/FileUploaderCard'
import fetchUsers from '../../networking/endpoints/user/fetchUsers'
import Swal from 'sweetalert2'
import uploadFile from '../../networking/endpoints/files/uploadFile'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Box } from '@mui/material'
import InfoCard from '../../components/InfoCard/InfoCard'
import { user } from '../../types/types'

function SearchPage() {
	const [file, setFile] = React.useState<File | null>(null)
	const [query, setQuery] = React.useState('')
	const [successFullUpload, setSuccessFullUpload] = React.useState(false)
	const [users, setUsers] = React.useState<user[] | undefined>([])

	const getUsers = async (query: string): Promise<user[] | undefined> => {
		try {
			const response = await fetchUsers(query)
			const data = response.data
			return data.data
		} catch (error: any) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.message,
			})
		}
	}

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

	const handleQueryChange = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setQuery(e.target.value)
		const data = await getUsers(e.target.value)
		setUsers(data)
	}
	const handleFileRemove = () => {
		setFile(null)
	}
	return (
		<>
			{successFullUpload ? (
				<Box
					sx={{
						display: 'flex',
						padding: '40px 0',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						margin: 0,
						gap: 4,
					}}
				>
					<SearchBar
						query={query}
						handleQueryChange={handleQueryChange}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							gap: 4,
							width: '100%',
							flexWrap: 'wrap',
						}}
					>
						{users !== undefined &&
							users.map((user: any) => {
								console.log(user)
								return <InfoCard user={user} key={user.name} />
							})}
					</Box>
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
