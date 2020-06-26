import React, { Component } from 'react'
import MyClassChildCmp1 from './MyClassChildCmp1';

export default class MyClassCmp1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: 'Hello World parent'
        }
        console.log("Constructor MyClassCmp1 Invokerd");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps MyClassCmp1 Invokerd");
        return null;
    }

    eventHandler1 = () => {
        this.setState({
            msg: 'Welcome to rect parent'
        })
    }

    componentDidMount() {
        console.log("componentDidMount MyClassCmp1 Invokerd");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount MyClassCmp1 Invokerd");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate MyClassCmp1 Invokerd");

        return null;
    }
    
    render() {
        console.log("Render MyClassCmp1 Invokerd")
        return (
            <div>
                <hr/>
                
                <MyClassChildCmp1></MyClassChildCmp1>
                <br/>
                { this.state.msg }
                <button onClick = { this.eventHandler1 }>Click1</button>
                <hr/>
            </div>
        )
    }
}
