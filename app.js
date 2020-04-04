  
 const disp = function() {
    const ingreds = {

        Alc: " 'rum', 'whiskey', 'vodka', 'tequila",
        Mixer: "' cran juice', 'seltzer', 'tonic', 'beer, 'cola', 'OJ'",
        Fruit: "'lime', 'orange', 'cherry'",
        Ice: 'yes, no'

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
            document.body.appendChild(sect)
            console.log(ingreds[prop])
        }
         

        const searchBtn = document.createElement('button')
         searchBtn.innerHTML = "Search for Drinks"
         document.body.appendChild(searchBtn)
        //searchBtn.addEventListener('click', find())
         
        async function find(options) {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        
            const resp = await fetch(url)
            const data = await resp.json()
            console.log(data)
            //include youtube video api
        
        
        }

    
}

// run the actual search inside for the application


async function find() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
    //include youtube video api


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


