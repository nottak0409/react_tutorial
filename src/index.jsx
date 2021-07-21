import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { GameContainer } from './containers';
import { configureStore } from '@reduxjs/toolkit'
import { app } from './reducers';
import './index.css';

const store = configureStore({
    reducer: {
        app: app
    }
});
ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('root')
);
