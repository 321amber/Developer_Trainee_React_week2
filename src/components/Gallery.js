const Profile = (prop)=>{
    const {name, age} = prop;
    return(
        <h1>My name is: {name} and age is {age}</h1>
    )
}

export const Gallery = ()=>{
    return(
        <>
          <Profile name={"Amber"} age={25}/>
          <Profile name={"Atul"} age={26}/>
          <Profile name={"Anil"} age={27}/>
        </>
    )
}