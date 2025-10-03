import { useContext } from "react"
import { newContext } from "./ExampleContext.js"

export const ContextUser = ()=>{
    const data = useContext(newContext);

    return(
        <>
            <p>my name is {data.name}</p>
            <p>my age is {data.age}</p>
            <p>my height is {data.height}</p>
        </>
    )
}