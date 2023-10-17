
async function get() {
    var result =await fetch('https://dummyjson.com/products');
    var data = await result.json();
    var response = data.products;
    var text = ""; 
    for(var i = 0 ; i<response.length; i++){
        var cartonna = `<div class="col-md-4 test text-center mb-3">
        <img src="${response[i].images[0]}" class = "img-fluid belal" >
        <h2>${response[i].id}</h2>
        <h4>${response[i].title}</h4>
       </div>`
       text = text + cartonna 
    }

    document.querySelector(".test").innerHTML=text;
    

   
}
get();