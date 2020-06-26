import React, {Component} from 'react';

export default class EventBindingNew1 extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            message: "Hello guest"
        }
    }

    userLogin() {
        this.setState({
            message: "Hello Abhijeet"
        });
    }

    render() {
        return (
            <div>
                EventBindingNew1
                <div>{this.state.message}</div>
                <button onClick = {this.userLogin.bind(this)}> Log in </button>
                <hr/>
            </div>
        )
    }
}