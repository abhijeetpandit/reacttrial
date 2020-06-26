import React, {Component} from 'react';

export default class EventBindingNew2 extends Component {

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
                EventBindingNew2
                <div>{this.state.message}</div>
                <button onClick = {() => this.userLogin()}> Log in </button>
                <hr/>
            </div>
        )
    }
}