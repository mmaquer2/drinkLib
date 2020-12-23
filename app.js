 // api resource link
 // https://www.thecocktaildb.com/api.php 
 


const search_btn = document.querySelector("#btn");
search_btn.addEventListener("click", test)

const saved_data = document.getElementById('search').value 


//actually display the items and results 
result_field = document.querySelector('#res')
//result_field.innerHTML = saved_data

function test(){

    console.log(saved_data)
    
}


// Search function
async function find_drinks(searchVal) {
        //for each loop on each selected item in the ingreds object due to api restrictions
        console.log(searchVal, 'THIS IS THE SEARCH Value')
        const item = 'rum'
        const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + item

    //searchUrl = (baseUrl + item)

    //const resp = await fetch(searchUrl)
        const resp = await fetch(baseUrl)
        const data = await resp.json()
        console.log(data)

    //create a result for name, ingredients, directions, and image
    //send data to the webpage
    //include youtube video api based on keyword search on whole drink

        }










