import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export default class HoverCounterHOC extends Component {
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
                <button onMouseOver = { this.props.name}>Hovered {count} times </button>

            </div>
        )
    }
}

export default UpdatedComponent(HoverCounterHOC)