import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import {AppState, User} from "./index";
import {connect} from 'react-redux';


class Home extends Component<{user: User}> {
    render() {
        const {user} = this.props;

        if (!user) {
            return null;
        }

        return <div>
            <Link to={'/'}>Go back</Link>
            <div>
                User logged: {this.props.user.name}
                <br/>
                Email: {this.props.user.email}
            </div>
        </div>
    }
}

export default connect(
    (state: AppState) => {
        return {
            user: state.user,
        }
    }
)(Home);