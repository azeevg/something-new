import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialData = [{userName: 'Glebster'}];

function storeHandler(state = initialData) {
    return state;
}

const store = createStore(storeHandler);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
