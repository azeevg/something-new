import * as React from "react";
import {RouterProps} from "react-router";

type Props = {
    onSubmit: Function;
};

export class Login extends React.Component<Props & RouterProps> {
    state = {
        value: '',
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        this.setState({value: target.value});
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.props.onSubmit(this.state.value);

        this.props.history.push('/home');

        // todo: Put userName into store
        // redirect to home
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input name={'text'} value={this.state.value} onChange={this.handleChange} />
                <button>Login</button>
            </form>
        </div>
    }
}