import { useRef } from "react"

export const UseRef = ()=>{
    const counterRef = useRef(0);

    const handleIncrement = ()=>{
        console.log(`clicked counter value ${counterRef.current} times`);
        
    }

    return(
        <>
        <p>incrase the counter value and component will not re render</p>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}