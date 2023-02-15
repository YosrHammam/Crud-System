var productNameInput=document.getElementById("productNameInput");
var productPriceInput=document.getElementById("productPriceInput")
var productCategoryInput=document.getElementById("productCategoryInput")
var productDescriptionInput=document.getElementById("productDescriptionInput");
var productContainer=[]
// var deleteBtn=document.getElementById('btnDeleted')
// deleteBtn.addEventListener('click',function(){
//     deleteProduct(3)})
if(localStorage.getItem("products")!=null){
productContainer=JSON.parse(localStorage.getItem("products")) 
display()

}
// localStorage.setItem("userName","yosr")
// localStorage.setItem("password","yosrea")
// localStorage.setItem("Name","yosr123")
// console.log(localStorage.getItem("userName"));
//localStorage.removeItem("userName")
// localStorage.clear()
//console.log(localStorage.length)
// sessionStorage.setItem("email","yosrhammam2000@gmail.com")



function add(){
if(validateProductName()==true)
{ var product={
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescriptionInput.value
    
        }
        productContainer.push(product);
        localStorage.setItem("products",JSON.stringify(productContainer))
        // console.log(productContainer);
        //clearForm()
        display()}
        else
        alert("invalid product name")

}


function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productDescriptionInput.value="";
    productCategoryInput.value=""
}
function display(){
    var cartoona=``;
    for(var i=0;i<productContainer.length;i++){
        //   
        cartoona+=`<tr>
<td>${i}</td>
<td>${productContainer[i].name}</td>
<td>${productContainer[i].price}</td>
<td>${productContainer[i].category}</td>
<td>${productContainer[i].desc}</td>
<td><button id="btnDeleted" onclick=deleteProduct(${i}) class=" btn btn-sm btn-outline-danger">Delete</button></td>
<td><button class="btn btn-sm btn-outline-warning">Update</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}
function deleteProduct(deleteIndex){
    productContainer.splice(deleteIndex,1)
    localStorage.setItem("products",JSON.stringify(productContainer))
    display()
}
function searchProduct(term){
    var temp="";
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
temp+=`<tr>
<td>${i}</td>
<td>${productContainer[i].name}</td>
<td>${productContainer[i].price}</td>
<td>${productContainer[i].category}</td>
<td>${productContainer[i].desc}</td>
<td><button id="btnDeleted" onclick=deleteProduct(${i}) class=" btn btn-sm btn-outline-danger">Delete</button></td>
<td><button class="btn btn-sm btn-outline-warning">Update</button></td>
    </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML=temp;
 

}
function validateProductName(){
var regex=/^[A-Z][a-z]{3,8}$/
if(regex.test(productNameInput.value)==true)
return true
else
return false
}