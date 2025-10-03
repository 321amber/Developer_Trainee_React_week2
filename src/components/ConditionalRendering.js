function Profile({name, isPacked}){
    if(isPacked){
        return <h1>You are here: {name}</h1>
    }
    return <h1>You are not here: {name}</h1>
}


export const General = ()=>{
    return(
        <section>
            <Profile name={"Amit"} isPacked={true}/>
            <Profile name={'Ajay'} isPacked={true}/>
            <Profile name={'Ashutosh'} isPacked={false}/>
        </section>
    )
}