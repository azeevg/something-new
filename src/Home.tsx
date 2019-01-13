import * as React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

type PropsType = {
    userName: String;
};

export class Home extends Component<PropsType> {
    // get userName from Store
    render() {
        return <div>
            <Link to={'/'}>Go back</Link>
            <div>
                User logged: {this.props.userName}
            </div>
        </div>
    }
}