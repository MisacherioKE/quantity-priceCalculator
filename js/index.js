"use strict";
document.getElementById("select").onchange = function(){
    var town = document.getElementById("select").value;
    try {
        if(town == "") throw "empty field!";
        if(quantity =="") throw "empty field!";
    } catch (error) {
        document.getElementById("price").innerText = error;
    }

    if(town == "Kisumu"){
        var priceperKg = 500;
        document.getElementById("price").innerText =  priceperKg +" " + " Kshs per kg" 
    }
    else if(town == "Nairobi"){
        var priceperKg = 100;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    } else if(town == "Mombasa"){
        var priceperKg = 700;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Malindi"){
        var priceperKg = 900;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Lamu"){
        var priceperKg = 1000;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Kwale"){
        var priceperKg = 850;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Kakamega"){
        var priceperKg = 650;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Bungoma"){
        var priceperKg = 700;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Busia"){
        var priceperKg = 750;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }else if(town == "Thika"){
        var priceperKg = 200;
        document.getElementById("price").innerText =  priceperKg +" " + "Kshs per kg" 
    }
    // else{
    //     // document.getElementById("price").innerText = "Select the towns provided";
    // }
}

// CALCULATIONS

document.getElementById("totalPrice").onclick = function (){
    var town = document.getElementById("select").value;
    var quantity = document.getElementById("qty").value;

    try {
        if(town == "") throw "empty field!";
        if(quantity =="") throw "empty field!";
    } catch (error) {
        document.getElementById("price").innerText = error;
    }

if (town == "Kisumu") {
    var total = parseInt(quantity) * 500;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
} else if(town == "Nairobi") {
    var total = parseInt(quantity) * 100;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Mombasa") {
    var total = parseInt(quantity) * 700;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Malindi") {
    var total = parseInt(quantity) * 900;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Lamu") {
    var total = parseInt(quantity) * 1000;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Kwale") {
    var total = parseInt(quantity) * 850;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Kakamega") {
    var total = parseInt(quantity) * 650;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Bungoma") {
    var total = parseInt(quantity) * 700;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Busia") {
    var total = parseInt(quantity) * 750;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}else if(town == "Thika") {
    var total = parseInt(quantity) * 200;
    document.getElementById("price").innerText = "total price is" + " Kshs "+ total;
}
// else{
//     // document.getElementById("price").innerText = "Select the towns provided";
// }
}
