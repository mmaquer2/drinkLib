

//call the search function on click
const search_btn = document.querySelector("#btn");
search_btn.addEventListener("click", find_drinks)

//get the input from the text box
const saved_data = document.getElementById('search').value 

//get the id of the result field
result_field = document.querySelector('#res')

//search function
async function find_drinks(saved_data) {
        console.log(saved_data)
        const item = 'rum'
        const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + item

    //searchUrl = (baseUrl + item)
    //const resp = await fetch(searchUrl)
    const resp = await fetch(baseUrl)
    const data = await resp.json()
    console.log(data)
    process_output(data)
}
//process the data from the api
function process_output(data){

    display_output(data)
}


//display result of the processed data
function display_output(data){
    
    const result = data
    result_field.innerHTML = result

}










