import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

export type User = {
    name: string,
    email: string
}

type ActionType = {
    type: string,
    user: User
}

export type AppState = {
    isUserLogged: boolean,
    user: User,
    description: string
}

const initialData: AppState = {
    isUserLogged: false,
    user: {
        name: 'Unknown',
        email: 'empty'
    },
    description: 'User is not logged'
};

function userReducer(state: AppState = initialData, action: any) {
    if (action.type === 'LOGIN') {
        state.isUserLogged = true;
        state.user = action.payload;
    }
    return state;
}

const store = createStore(userReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
