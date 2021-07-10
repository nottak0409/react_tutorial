import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { GameContainer } from './containers';
import { app } from './reducers';
import './index.css';

const store = createStore(app);
ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('root')
);
