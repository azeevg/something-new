import * as React from "react";
import {RouterProps} from "react-router";
import {AppState, User} from "./index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export class Login extends React.Component<RouterProps> {
    handleClick(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.history.push('/home');

        // user data fetched from a server
        let user = {
            name: 'Gleb',
            email: 'gleb@email.com'
        };
        // this.props.loginUser ???
        loginUser(user);
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


const loginUser = (user: User) => {
    return {
        action: 'LOGIN',
        user: user
    }
};

const mapStateToProps = (state: AppState) => ({
    user: state.user
});


const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({loginUser: loginUser}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

