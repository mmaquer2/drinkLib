 // api resource link
 // https://www.thecocktaildb.com/api.php 
 
 
 const disp = function() {
    const ingreds = {

        Alc: [ 'rum', 'whiskey', 'vodka', 'tequila' ] ,
        Mixer: ['cran juice', 'seltzer', 'tonic', 'beer', 'cola', 'OJ'] ,
        Fruit: ['lime', 'orange', 'cherry'],

        }
    
        //create sections for each ingredient category

        for(const prop in ingreds) {
            const sect = document.createElement('div')
            sect.innerHTML= prop;
          //create checkboxes for each item that the user has   

            const categories = document.createElement('input')
            categories.setAttribute('type', 'checkbox')

            categories.innerHTML = ingreds[prop]
            categories.appendChild(sect)

            document.body.appendChild(categories)
            document.body.appendChild(sect)
            console.log(ingreds[prop])
        }
         

        const searchBox = document.createElement('input')
        searchBox.setAttribute('type', 'text')
        searchBox.setAttribute('id', 'searchVal')
        searchBox.value = 'Enter Drink Type'
        document.body.appendChild(searchBox)

        var searchID = document.querySelector('#searchVal');

        const searchBtn = document.createElement('button')
         searchBtn.innerHTML = "Search for Drinks"
         document.body.appendChild(searchBtn)
        searchBtn.addEventListener('click', find(searchID))

    
}

//
// Search function of App
//

    async function find(searchVal) {
    //for each loop on each selected item in the ingreds object due to api restrictions
    const item = searchVal
    //forEach(i in item) 
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum"

    //searchUrl = (baseUrl + item)

    //const resp = await fetch(searchUrl)
    const resp = await fetch(baseUrl)
    const data = await resp.json()
    console.log(data)


    //include youtube video api based on keyword search on whole drink

    }



    //Results
    //
    //
    //////////

    //create a box or display format for each result found by the api

    const displayRes = function(){

    

        }


// run the application and display data
window.onload = function() {

    find();
    disp();
}





//actually display the items and results 







/*
    const cartTotal  = document.querySelector('#cartPriceLoc')
    const cart  = document.querySelector('#cartItemNum')
    var  itemNum = 0;
    var cartPrice = []
    var itemCartBtn = document.querySelector('#store');
    var totalOrder = []
    
    itemCartBtn.addEventListener('click', function (event) {
        var btnValu = event.target.value
       var price = Math.floor

*/


