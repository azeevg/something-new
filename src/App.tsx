import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./Login";
import {Home} from "./Home";


class App extends Component {
    render() {
        // how to use withRouter instead of HashRouter ?
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Login}/>
                    <Route path={'/home'} component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;