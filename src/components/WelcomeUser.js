import React, { Component } from 'react';

class WelcomeUser extends Component {
    
    

    render() {
        return (
            <div>
            <hr/>
                    
             <h3>Welcome {this.props.uname} from {this.props.city}</h3>
             { this.props.children }
        </div>
        )
    }
}

WelcomeUser.defaultProps =  {
    uname: "uname",
    city: "city"
}

export default WelcomeUser;
