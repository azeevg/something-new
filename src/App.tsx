import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./Login";
import {Home} from "./Home";


export class App extends Component {
    state = {
        userName: '',
    }

    handleSubmit = (userName: string) => {
        this.setState({userName});
    }

    render() {
        // how to use withRouter instead of HashRouter ?
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        render={(props) => <Login {...props} onSubmit={this.handleSubmit} />}
                    />
                    <Route
                        path={'/home'}
                        render={(props) => <Home {...props} userName={this.state.userName} />}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
