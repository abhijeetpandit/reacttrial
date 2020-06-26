import React, { useState } from 'react'

export default function HookCmp1() {
    const[name, setName] = useState('Abhijeet');
    const[count, setCount] = useState(0);
    return (
        <div>
            <p>Hello, {name}</p>
            <p>Count is {count}</p>
        </div>
    )
}
