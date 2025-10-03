import { createContext } from "react"

export const newContext = createContext({})

export const ExampleContext = ({children})=>{
    
    const name = "Amber";
    const age = 23;
    const height = "5'11"

    return (
        <newContext.Provider value = {{name,age,height}}>
            {children}
        </newContext.Provider>
    )
}