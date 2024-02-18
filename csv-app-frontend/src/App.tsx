import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from './components/AppBar/AppBar'
import Copyright from './components/Copyright/Copyright'
import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SearchPage from './pages/SearchPage/SearchPage'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<AppBar />
				<Container
					component="main"
					sx={{
						mb: 4,
						alignItems: 'center',
						width: '100%',
					}}
				>
					<SearchPage />
				</Container>
				<Copyright />
			</ThemeProvider>
		</React.Fragment>
	)
}

export default App
