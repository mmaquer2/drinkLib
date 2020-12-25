
//Drink Library Protfolio Project by Mike Maquera
// Licensed under the MIT

//call the search function on click
const search_btn = document.querySelector("#btn");
search_btn.addEventListener("click", get_data)

    
//get the id of the result fields

drinkPhoto_field = document.querySelector('#drink_photo')
drinkName_field = document.querySelector('#res_name')
drinkIngred_field = docum.querySelector('#res_ingreds')
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

//process the data from the api request
function process_output(data){
    const drinkName = data.drinks[0].strDrink
    const drinkInstr = data.drinks[0].strInstructions
    const drink_image = data.drinks[0].strDrinkThumb
    const ingred_List = split_ingreds(data)
    
    const result_list = [drinkName,drinkInstr,ingred_List,drink_image]
   
    display_output(result_list)
}

//iterate through each of the ingredient steps
function split_ingreds(data) {
    ingred_list = []
    //loop through each of the ingredients in the object
    //stop the loop if there value is null
    
    data.drinks[0].strIngredient+i

    return ingred_list
}



//display result of the processed data
function display_output(result_list){
    
    //image of the drink
    drinkPhoto_field.innerHTML = result_list[2]

    //drink name
    drinkName_field.innerHTML = result_list[0]

    //ingredient list
    drinkIngred_field.innerHTML = result_[3]

    //instructions 
    drinkInstr_field.innerHTML = result_list[1]

    

}










