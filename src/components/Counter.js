import { useState } from "react";

export const Counter = ()=>{
    const [counter, setCounter] = useState(10);

    const increment = ()=>{
        setCounter(counter+1);
    }

    const Decrement = ()=>{
        setCounter(counter-1);
    }

    return (
        <>
            <p>Count: {counter}</p>

            <button
             onClick={increment}
            > 
                Increment
            </button>

            <button
             onClick={Decrement}
            > 
                Decrement
            </button>
        </>
    )
}