import React from 'react';
import { render } from 'react-dom';
import './GlobalStyles.css';
import { App } from './components/App';
import * as serviceWorker from './utils/serviceWorker';

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

serviceWorker.register();
