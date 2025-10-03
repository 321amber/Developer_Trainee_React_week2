import { useState } from "react"

export const UseStateHook = ()=>{
    const [count,setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(()=>count+1)
    }

    const handleDecrement = ()=>{
        setCount(count-1)
    }
    return (
        <>
            <p>count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
} 