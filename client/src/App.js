import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/Themes';

const Container = styled.div`
	background: ${({ theme }) => theme.bg};
	width: 100%;
	height: 100vh;
`;

function App() {
	//Hooks
	const [darkmode, setDarkmode] = useState(false);

	return (
		<ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
			<Container className="App">
				Podcast
			</Container>
		</ThemeProvider>
	);
}

export default App;
