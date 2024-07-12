import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import appStore from './components/utils/appStore.js';

console.log('Initial State:', appStore.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
