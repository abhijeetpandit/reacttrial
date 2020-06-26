import React, { Component } from 'react'

export default class MyClassChildCmp1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hello Child'
        }
        console.log("Constructor MyClassChildCmp1 Invokerd");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps MyClassChildCmp1 Invokerd");
        return null;
    }

    eventHandler = () => {
        this.setState({
            msg: 'Welcome to rect'
        })
    }

    componentDidMount() {
        console.log("componentDidMount MyClassChildCmp1 Invokerd");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount MyClassChildCmp1 Invokerd");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate MyClassChildCmp1 Invokerd");

        return null;
    }
    
    render() {
        console.log("Render MyClassChildCmp1 Invokerd")
        return (
            <div>
                { this.state.msg }
                <button onClick = { this.eventHandler }>Click1 clild</button>
            </div>
        )
    }
}
