import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';

class ClickHOC extends Component {
    render() {
        const {count, incC} = this.props;
        return (
            <div>
                Click hoc
                <h2 onMouseOver ={incC}> Hovered {count} times</h2>
            </div>
        )
    }
}


export default UpdatedComponent(ClickHOC)