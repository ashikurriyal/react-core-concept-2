import { useState } from "react"



export default function Counter() {

    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    const handleSub = () => {
        const subCount = count -1
        setCount(subCount)
    }


    const [count, setCount] = useState(0)
    return (
        <div style={{border: '2px solid yellow', padding:'10px'}}>
            <h4>Counter: {count}</h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Remove</button>
        </div>
    )
}