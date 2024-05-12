//spam function
async function cool_function(){
    let i=0
    while (i < 10){
        const endpoint = "https://google.com"
        const roptions = {
            method:"GET"
        }
        try{
            const response = await fetch(endpoint, roptions)
            console.log(`Sent request. Response: ${response.status}`)
        } catch (error){
            console.error(error)
        }
        i++
    }
    
}