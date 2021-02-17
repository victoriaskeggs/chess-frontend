import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * This script is the entry point to this web application and renders the application.
 */
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// Prints measurements of app performance to the console
reportWebVitals(console.log);
