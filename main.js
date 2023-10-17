
async function get() {
    var result =await fetch('https://jsonplaceholder.typicode.com/photos');
    var data = await result.json();
    var text = ""; 
    for(var i = 0 ; i<data.length; i++){
        var cartonna = `<div class="col-md-4 test text-center mb-3">
        <img src="${data[i].url}" class = "img-fluid belal">
        <h2>${data[i].id}</h2>
        <h4>${data[i].title}</h4>
       </div>`
       text = text + cartonna 
    }

    document.querySelector(".test").innerHTML=text;
    

   
}
get();