import React, { Component } from 'react'

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome to reactjs"
        }
    }
    render() {
        return (
            <div>
                <hr/>
                <h4> { this.state.message } </h4>
            </div>
        )
    }
}
