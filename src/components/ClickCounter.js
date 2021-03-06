import React, { Component } from 'react'

export default class ClickCounter extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0 
        }
    }

    incrementCount = () => {
        this.setState( prevState => {
            return {count: prevState.count + 1}
        }

        );
    }
    
    render() {
        const {count} =  this.state;
        return (
            <div>
                <hr/>
                <button onClick = { this.incrementCount}>Clicked {count} times </button>

            </div>
        )
    }
}
