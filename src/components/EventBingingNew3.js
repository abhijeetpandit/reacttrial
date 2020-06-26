import React, {Component} from 'react';

export default class EventBindingNew3 extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            message: "Hello guest"
        }
        this.userLogin = this.userLogin.bind(this);
    }

    userLogin() {
        this.setState({
            message: "Hello Abhijeet"
        });
    }

    render() {
        return (
            <div>
                EventBindingNew3
                <div>{this.state.message}</div>
                <button onClick = { this.userLogin }> Log in </button>
                <hr/>
            </div>
        )
    }
}