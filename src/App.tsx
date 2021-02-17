import { Box, StylesProvider } from '@material-ui/core';
import React from 'react';
import MenuBar from './components/menubar/MenuBar';
import "./styles.css";

const App = () => {
	return (
		<StylesProvider injectFirst>
			<Box className="App">
				<MenuBar />
			</Box>
		</StylesProvider>
	);
}

export default App;
