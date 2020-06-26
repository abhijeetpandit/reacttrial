import React from 'react';


export default function GreetUser(props) {
    return (
        <div>
            <hr/>
            Hello { props.name } you are from {props.city}
        </div>
    )
}