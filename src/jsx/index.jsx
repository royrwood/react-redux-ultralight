import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, addUser } from './store.jsx';
import { App } from './app.jsx';


store.dispatch(addUser({ id:'chris', name: 'Chris'}));

const appContent = (
        <Provider store={store}>
            <App/>
        </Provider>
    );

render(appContent, document.querySelector("#app"));
