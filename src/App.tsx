import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./Login";
import {Home} from "./Home";


export class App extends Component {
    render() {
        // how to use withRouter instead of HashRouter ?
        return (
            <HashRouter>
                <Switch>
                    <Route path={'/'} component={Login}/>
                    <Route path={'/home'} component={Home}/>
                </Switch>
            </HashRouter>
        );
    }
}
