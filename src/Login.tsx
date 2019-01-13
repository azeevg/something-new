import * as React from "react";
import {RouterProps} from "react-router";

export class Login extends React.Component<RouterProps> {
    handleClick(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.history.push('/home')
        // todo: Put userName into store
        // redirect to home
    };

    render() {
        return <div>
            <form onSubmit={this.handleClick.bind(this)}>
                <input name={'text'}/>
                <button>Login</button>
            </form>
        </div>
    }
}