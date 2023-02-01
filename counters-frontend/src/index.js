import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import nodeReducer from './reducers/nodeReducer'
import reactReducer from './reducers/reactReducer'

const store = configureStore({
    reducer: {
        react: reactReducer,
        node: nodeReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);