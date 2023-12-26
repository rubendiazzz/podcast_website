import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';
import Sidebar from './components/sidebar';

const Container = styled.div`
	display: flex;
	background: ${({ theme }) => theme.bg};
	width: 100%;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: hidden;
`;

function App() {
	//Hooks
	const [darkmode, setDarkmode] = useState(true);

	return (
		<ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
			<Container className="App">
				<Sidebar></Sidebar>
				Podcast
			</Container>
		</ThemeProvider>
	);
}

export default App;
