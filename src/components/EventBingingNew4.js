import React, {Component} from 'react';

export default class EventBindingNew4 extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            user: props.uname,
            message: "Hello user"
        }
       
    }

    eventHandler = () =>  {
        this.setState({
            message: "Hello => " + this.state.user
        });
        alert(this.props.uname);
    }

    render() {
        return (
            <div>
                EventBindingNew4
                <div>{this.state.message}</div>
                <button onClick = { this.eventHandler }> Log in </button>
                <hr/>
            </div>
        )
    }
}