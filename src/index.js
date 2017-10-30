import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux'; //provides the store to our App
import { HashRouter } from 'react-router-dom';
import store from './store'

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();

