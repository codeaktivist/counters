import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import nodeReducer from './reducers/nodeReducer'
import reactReducer from './reducers/reactReducer'

const reducers = combineReducers({
    reactCounter: reactReducer,
    nodeCounter: nodeReducer
})

const store = createStore(reducers)
console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);