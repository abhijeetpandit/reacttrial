import React, {Component} from 'react';

var self;

export default class EventBindingNew0 extends Component {


    constructor(props) {
        super(props);
        this.state =  {
            message: "Hello guest"
        }
        self = this;

    }

    userLogin() {
        self.setState({
            message: "Hello Abhijeet 0"
        });
    }

    render() {
        return (
            <div>
                EventBindingNew0
                <div>{this.state.message}</div>
                <button onClick = {this.userLogin}> Log in </button>
                <hr/>
            </div>
        )
    }
}