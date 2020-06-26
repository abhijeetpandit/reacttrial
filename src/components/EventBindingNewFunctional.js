import React from 'react';

function EventBindingNewFunctional() {
    var state = {
        name: "test"
    }
    function eventHandler() {
        alert("Funcctionallll" + state.name);
    }

    return (
        <div>
            {state.name}
            <button onClick={eventHandler}>Click</button>
        </div>
    )
}

export default EventBindingNewFunctional