
//Drink Library Protfolio Project by Mike Maquera
// Licensed under the MIT

//call the search function on click
const search_btn = document.querySelector("#btn");
search_btn.addEventListener("click", get_data)

    
//get the id of the result field
drinkName_field = document.querySelector('#res_name')
drinkInstr_field = document.querySelector('#res_instr')

function get_data(){
    var input_data = document.getElementById('search').value;
    console.log(input_data)
    search_drinks(input_data)
}

//get the input from the text box
async function search_drinks(input_data) {
    const lookup_item = input_data
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" 
    const searchUrl = (baseUrl + lookup_item)
    const resp = await fetch(searchUrl)
    const data = await resp.json()
    console.log(data)
    process_output(data)
}

//process the data from the api
function process_output(data){
    const drinkName = data.drinks[0].strDrink
    const drinkInstr = data.drinks[0].strInstructions
    const result_list = [drinkName,drinkInstr]
    display_output(result_list)
}


//display result of the processed data
function display_output(result_list){
    
    //image of the drink
    drinkName_field.innerHTML = result_list[0]
    drinkInstr_field.innerHTML = result_list[1]
    //ingredient list

}










