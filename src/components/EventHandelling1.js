import React, { Component } from "react";

export default class EventHandelling1 extends Component {
    constructor() {
        super();
        this.state = {
            messsage : "Hello World"
        };
    }

    eventHandler() {
        /*this.setState( {
            messsage : "Good bye"
        })*/
        console.log("Button is clikced");
    }

    render() {
        return (
            <div>
                
                <input type="button" onClick={this.eventHandler}>click me</input>
            </div>
        )
    }
}