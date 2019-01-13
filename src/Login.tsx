import * as React from "react";
import {RouterProps} from "react-router";
import {AppState, User} from "./index";
import {connect} from "react-redux";
import {loginUser} from './index';

type Props = {
    loginUser: Function;
}

class Login extends React.Component<Props & RouterProps> {
    handleClick(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // user data fetched from a server
        const user = {
            name: 'Gleb',
            email: 'gleb@email.com'
        };

        this.props.loginUser(user);
        this.props.history.push('/home');
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginUser: (user: User) => dispatch(loginUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(Login);

