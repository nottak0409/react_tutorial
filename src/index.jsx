import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './components';
import { app } from './reducers';
import './index.css';

const store = createStore(app);
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
