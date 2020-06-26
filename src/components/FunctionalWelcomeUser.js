import React from "react";

export const FunctionalWelcomeUser = (props) => {
    
    return (
        <div>
        <hr/>
                
         <h3>Functional Welcome {props.uname} from {props.city}</h3>
         { props.children }
    </div>
    )
    
}

FunctionalWelcomeUser.defaultProps = {
    uname: "uname",
    city: "city"
}