//spam function
async function cool_function(){
        const endpoint = 'http://127.0.0.1:8080'
        const headers = new Headers()
        headers.append('Access-Control-Allow-Origin','*')
        const roptions = {
            method:'GET',
            headers: headers
        }
        try{
            const response = await fetch(endpoint, roptions)
            console.log(`Sent request. Response: ${response.status}`)
        } catch (error){
            console.error(error)
        }
    }
    

setInterval(cool_function, 1)