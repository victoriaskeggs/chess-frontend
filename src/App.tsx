import { StylesProvider } from '@material-ui/core';
import React from 'react';
import { StartingChessboard } from './components/chessboard/Chessboard';
import MenuBar from './components/menubar/MenuBar';
import "./styles.css";

const App = () => {
	return (
		<StylesProvider injectFirst>
			<MenuBar />
			<StartingChessboard />
		</StylesProvider>
	);
}

export default App;
