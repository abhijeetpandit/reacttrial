import React, { Component } from 'react'
import './../form.css';

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            roleAdmin: '',
            roleUser: '',
            check:''
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

    changeAdminRoleEventHandler = (event) => {
        this.setState({
            roleAdmin: event.target.value
        })
    }

    changeUserRoleEventHandler = (event) => {
        this.setState({
            roleUser: event.target.value
        })
    }

    fetchData = (event) => {
        if(this.state.username === 'admin' && this.state.password === 'admin123') {
            alert('Login success : ' + this.state.role)
        } else {
            alert('Login failed : ' + this.state.role)
        }
        event.preventDefault();
    }

    resetHandler = (event) => {
        this.setState({
            username: '',
            password: '',
            roleAdmin: '',
            roleUser: '',
            check:''
        })
    }

    render() {
        return (
            <div className="loginPage">
                this.state.roleAdmin : {this.state.roleAdmin}
                this.state.roleUser : {this.state.roleUser}
                <form onSubmit = {this.fetchData} onReset = {this.resetHandler}>
                    <div className="fieldContainer">
                        <label>Username: </label>
                        <input type="text" value={this.state.username} onChange={this.changeEventHandler}></input>
                    </div>
                    <div className="fieldContainer">
                        <label>Password: </label>
                        <input type="password" value={this.state.password} onChange={this.changeEventHandler2}></input>
                    </div>

                    <div className="fieldContainer">
                        <label>Role: </label>
                        Admin <input type="radio" value="admin" name="role"  value={this.state.roleAdmin}></input>
                        User <input type="radio" value="user" name="role"  value={this.state.roleUser}></input>
                    </div>
                    <div className="buttonsContainer">
                        <button type="submit">Login</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}
