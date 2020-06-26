import React, {useState} from 'react'

export default function HookCmp3(props) {
    
    const[count, setCount] = useState(0);
    console.log(useState('a')[1]);

    const[button1ClickCount, setButton1ClickCount] = useState(0);
    const[button2ClickCount, setButton2ClickCount] = useState(0);
    const[button3ClickCount, setButton3ClickCount] = useState(0);

    return (
        
        <div>
            <hr/>
           
            Count is {count}
            <button class="Hook3Button" onClick = { () => {
                setCount(0)
                setButton1ClickCount(button1ClickCount + 1)
            }}>Reset</button>
            <button class="Hook3Button" onClick = { () => {
                setCount(count + 1)
                setButton2ClickCount(button2ClickCount + 1)
            }}>Increment</button>
            <button class="Hook3Button" onClick = { () => {
                setCount(count - 1)
                setButton3ClickCount(button3ClickCount + 1)
            }}>Decrement</button>

            <div>
                {props.userName} has clicked Rest { button1ClickCount} times.
            </div>
            <div>
                {props.userName} has clicked Increment { button2ClickCount} times.
            </div>
            <div>
                {props.userName} has clicked Decrement { button3ClickCount} times.
            </div>

        </div>
    )
}
