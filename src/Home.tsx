import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import {User} from "./index";


export class Home extends Component<{user: User}> {
    // how to get user from Store ?
    render() {
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