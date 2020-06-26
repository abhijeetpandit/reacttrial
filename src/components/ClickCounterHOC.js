import React, { Component } from 'react'
import UpdatedComponent2 from './WithCounter'

export default class ClickCounterHOC extends Component {
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
                <button onClick = { this.props.name}>Clicked {count} times </button>

            </div>
        )
    }
}

export default UpdatedComponent2(ClickCounterHOC)
