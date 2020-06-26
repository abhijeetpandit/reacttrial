import React, { useState } from 'react'

function HookCmp2() {

    const[count, setCount] = useState(0);

    return (
        <div>
            <hr/>
            <button onClick= { () => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCmp2
