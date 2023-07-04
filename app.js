
var products;
var mainIndeex = 0
var addBtn = document.getElementById("addBtn")

if(localStorage.getItem("products") != null){
    products = JSON.parse(localStorage.getItem("products"))
    displayProducts()
}else{
    products =[]
}
    function addProduct(){
        var product = {
            name: document.getElementById("productNameInput").value,
            price: document.getElementById("productPriceInput").value,
            category: document.getElementById("productCategoryInput").value, 
            desc: document.getElementById("productDescInput").value,
            
        }
        if(addBtn.innerHTML == "Add Product"){
            
            products.push(product);
           
        }else{
            products.splice( mainIndeex,1,product)
        }
        displayProducts();
        localStorage.setItem("products", JSON.stringify(products) )
        clearform();
    }

function displayProducts()  {
    var contenar =""
    for(  var i =0 ; i < products.length ; i++ ){
        contenar +=   `<tr> 
        <td>${i}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td> <button onclick="upDateproduct(${i})" >UPdate</button></td> 
        <td><button Onclick="deleteProduct(${i})">Delete</button></td>
        </tr>
        `
    }
    document.getElementById("tabolBody").innerHTML =contenar
}

function deleteProduct(index){
 products.splice(index , 1)
 displayProducts()
 localStorage.setItem("products", JSON.stringify(products) )
//console.log(products[index])
//console.log('Hi')
}
function upDateproduct(index){

    mainIndeex = index

            productNameInput.value = products[index].name
            productPriceInput.value = products[index].price
            productCategoryInput.value = products[index].category
            productDescInput.value = products[index].desc 

            addBtn.innerHTML = "update Product"

}


function clearform(){
    
    productNameInput.value = ""
    productPriceInput.value = ""
    productCategoryInput.value = ""
    productDescInput.value = "" 

}

function search(term){
 // console.log("ghj".toLowerCase().includes(term.toLowerCase()));
 var wantedArray = ""
 var contenar =""
  for (var i = 0; i< products.length; i++){
    if ( products[i].name.toLowerCase().includes(term.toLowerCase()) ==term){
        console.log(products[i]);
        wantedArray.push(products[i])
    }
  
  else{
 
  for(  var i =0 ; i < wantedArray.length ; i++ ){
      contenar +=   `<tr> 
      <td>${i}</td>
      <td>${wantedArray[i].name}</td>
      <td>${wantedArray[i].price}</td>
      <td>${wantedArray[i].category}</td>
      <td>${wantedArray[i].desc}</td>
      <td> <button onclick="upDateproduct(${i})" >UPdate</button></td> 
      <td><button Onclick="deleteProduct(${i})">Delete</button></td>
      </tr>
      `
    }
  document.getElementById("tabolBody").innerHTML +=contenar
console.log(wantedArray)

  }
  }
}