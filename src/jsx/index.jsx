import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store.jsx';
import { App } from './app.jsx';


const appContent = (
        <Provider store={store}>
            <App/>
        </Provider>
    );

render(appContent, document.querySelector("#app"));
