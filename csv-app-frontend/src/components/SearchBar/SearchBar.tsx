import { InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
	query: string
	handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ query, handleQueryChange }: SearchBarProps) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#333',
				borderRadius: 25,
				padding: '5px 10px',
				border: '2px solid #555',
				width: '60%',
			}}
		>
			<InputBase
				placeholder="Search..."
				inputProps={{ 'aria-label': 'search' }}
				sx={{ flexGrow: 1, ml: 1, color: '#fff' }}
				onChange={handleQueryChange}
				value={query}
			/>
			<IconButton aria-label="search" sx={{ p: 0, color: '#fff' }}>
				<SearchIcon />
			</IconButton>
		</div>
	)
}

export default SearchBar
