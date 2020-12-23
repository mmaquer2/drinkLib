//
//Drink Library Protfolio Project by Mike Maquera
// Licensed under the MIT

//get the input from the text box
var input_data = document.getElementById('search').value

//get the id of the result field
result_field = document.querySelector('#res')

//call the search function on click
const search_btn = document.querySelector("#btn");
search_btn.addEventListener("click", async function() {
        console.log(input_data)
        const item = input_data
        const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + item

    //searchUrl = (baseUrl + item)
    //const resp = await fetch(searchUrl)
    const resp = await fetch(baseUrl)
    const data = await resp.json()
    console.log(data)
    process_output(data)
})

//process the data from the api
function process_output(data){

    display_output(data)
}


//display result of the processed data
function display_output(data){
    
    const result = data
    result_field.innerHTML = result

}










