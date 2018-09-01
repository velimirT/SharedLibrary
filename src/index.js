import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import StoreFactory from './store/StoreFactory.js';


const store = StoreFactory()

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	, document.getElementById('root'));
// registerServiceWorker();
