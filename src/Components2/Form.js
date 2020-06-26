import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             address: 'ss',
             city: ''
        }
    }

    changeEventHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeEventHandler2 = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    selectEventHandler = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    addressEventHandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    fetchData = (event) => {
        alert(`${this.state.username} : ${this.state.password} : ${this.state.address} : ${this.state.city}`)
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.fetchData}>
                <div>
                    <label>Username: </label>
                    <input type="text" value = {this.state.username} onChange = {this.changeEventHandler}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value = {this.state.password} onChange = {this.changeEventHandler2}></input>
                </div>
                <div>
                    <label>Address: </label>
                    <textarea value={this.state.address} onChange = {this.addressEventHandler}/>
                </div>
                <div>
                    <select value={this.state.city} onChange = {this.selectEventHandler}>
                        <option></option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Delhi</option>
                        <option>Kolkata</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
