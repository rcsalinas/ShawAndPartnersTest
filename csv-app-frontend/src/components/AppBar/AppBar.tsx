import * as React from 'react'
import Navbar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function AppBar() {
	return (
		<Navbar
			position="absolute"
			color="default"
			elevation={0}
			sx={{
				position: 'relative',
				borderBottom: (t) => `1px solid ${t.palette.divider}`,
			}}
		>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap>
					CSV Uploader
				</Typography>
			</Toolbar>
		</Navbar>
	)
}

export default AppBar
