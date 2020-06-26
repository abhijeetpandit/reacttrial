import React from "react";

export  const Hello = () => {
    return (
        React.createElement('div', null, React.createElement('h4', {className : 'myh1'}, 'Hello World without jsx'))
    )
}