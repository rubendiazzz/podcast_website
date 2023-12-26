import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';
import Sidebar from './components/sidebar'; // Ensure the file name matches the actual file
import Navbar from './components/Navbar'; // Ensure the file name matches the actual file
import { BrowserRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

function App() {
	// Hooks
	const [darkMode, setDarkMode] = useState(true); // Renamed to camelCase for consistency

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<BrowserRouter>
				<Container className="App">
					<Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
					<Sidebar />
				</Container>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;