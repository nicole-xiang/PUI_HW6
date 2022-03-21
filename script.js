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

function add_item(){
    // alert("added an item to cart")
    // document.getElementById("num_items").innerHTML = "I have changed!"
    // change cart logo status
    var num_items = document.getElementById("num_items");
    var quantity = document.getElementById("quantity").value;
    num_items.innerHTML = (parseInt(quantity) + parseInt(num_items.innerHTML));
    return false;

    // add item to cart page 

}
