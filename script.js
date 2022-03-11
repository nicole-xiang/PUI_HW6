function changeImage(flavor,ele) {
    var source = "images/"+flavor+"Smoothie.png"
    document.getElementById("active_sel").src = source;
    var flavors = document.getElementsByClassName("f_option")
    console.log(flavors[ele-1].style.borderWidth == "");
    if (flavors[ele-1].style.borderWidth == "") {
        flavors[ele-1].style.border = "thin solid #FFBE0B";
        console.log(flavors[ele-1].style.border)
    }
    else {
        console.log("unclickin")
        console.log(flavors[ele-1].style.border)
        flavors[ele-1].style.border = ""
    }
    
}
