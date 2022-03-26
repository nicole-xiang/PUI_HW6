class cartItem {
    constructor(title, flavor, quantity, itemPrice) {
      this.title = title; // string 
      this.flavor = flavor; // string
      this.quantity = quantity; // # boxes (int)  
      this.itemPrice = itemPrice; // single item price (int)
      this.total = this.quantity * this.itemPrice // item total (int)
    }

    // Methods 

  }
function setDrink(){
    // hard code all drink objects 
    // check which drink object it is based on name   
}

function changeImage(flavor,ele) {
    var source = "images/"+flavor+"Smoothie.png"
    document.getElementById("active_sel").src = source;
    var flavors = document.getElementsByClassName("f_option")
    if (flavors[ele-1].style.borderWidth == "") {
        // getting rid of previous selected 
        for (let i = 0; i<flavors.length; i++){
            flavors[i].style.border = "";
        }
        // set selected border 
        flavors[ele-1].style.border = "medium solid #FFBE0B";
    }
    else { // unclick to go back to original image 
        flavors[ele-1].style.border = "";
        document.getElementById("active_sel").src = "images/product_img.png";
    }
}

function cartAlert() {
    alert('Added item to cart!');
    return false;
}
function setDrinkCart(product){
    // update local storage
    let itemsInCart = localStorage.getItem('itemsInCart');
    // show item on cart page 
    // delete function 
}

function addItem(){
    // update number of items in cart logo
    console.log("setting quantity");
    setQuantity();  

    // update cart page 
    // make new drink object 
    title = document.getElementById("drinkTitle").innerHTML;
    quant = parseInt(document.getElementById('item_quant').value); 
    if (isNaN(quant)) {quant = 0;}
    if (document.getElementById("one_time").checked == true) {
        price = 43.99;
    } 
    else{
        price = 35.99; 
    }
    var flavors = document.getElementsByClassName("f_option");
    flavor = "Original";
    for (let i = 0; i<flavors.length; i++){
        if (flavors[i].style.border != ""){
            flavor = flavors[i].alt;
        }
    }
    product = new cartItem(title,flavor,quant,price);
    console.log(product);
    setDrinkCart(product); // add product to cart page 
    return false;
}
function onLoadCart(){
    console.log("loading cart")
    let num_products = localStorage.getItem('num_items');
    if (num_products){
        console.log(document.getElementById("num_items"));
        document.getElementById("num_items").innerHTML = num_products;
        console.log(document.getElementById("num_items").innerHTML);
    }
}

function setQuantity(){
    console.log("setting quantity")
    let num_products = localStorage.getItem('num_items');
    num_products = parseInt(num_products); // convert to int
    let quant = parseInt(document.getElementById('item_quant').value); 
    if (isNaN(quant)) {quant = 0;}
    console.log(quant);
    if (num_products){ // if exist product
        console.log("adding item to cart")
        localStorage.setItem('num_items',quant+num_products);
        document.getElementById("num_items").innerHTML = quant+num_products;
    }
    else{
        console.log("adding item to empty cart");
        localStorage.setItem('num_items',quant);
        document.getElementById("num_items").innerHTML = quant;
    }
    return false;
}
window.onload = onLoadCart();

