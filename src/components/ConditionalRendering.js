import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname: this.props.userName,
             pword: this.props.password
        }
        console.log('dd');
    }
    
    render() {
        /*if(this.state.isUserValid) {
            return <div>Welcome John</div>      
        } else {
            return <div>Welcome Guest</div>
        }*/
        
        /*let response;
        if(this.state.isUserValid) {
            response = 'Welcome John';
        } else {
            response = 'Welcome User';
        }
        return response;*/

        //return (this.state.isUserValid ? <div>Welcome John</div> : <div>Welcome Guest</div>)
        console.log('callllledddd')
        console.log('this.props.userName = ' + this.props.userName);
        console.log('this.props.password = ' + this.props.password);
        console.log(this.props.userName == 'admin');
        console.log(this.props.password == 'admin123');
        //return this.props.userName == 'admin' && this.props.password == 'admin123' ? <div>Welcome John</div> : <div>Invalid loginnnnn</div>
        return this.state.uname == 'admin' & this.state.pword == 'admin123' ? <div>Welcome John</div> : <div>Invalid loginnnnn</div>
    }
}
