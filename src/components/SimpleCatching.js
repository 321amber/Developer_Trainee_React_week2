export const SimpleCatching = async ()=>{
    const url = "https://official-joke-api.appspot.com/random_joke";
    try {
        let response = await fetch(url);
        if(!response.ok){
            console.log("cant fetch the data");
        }

        let data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error.message);
        
    }
}