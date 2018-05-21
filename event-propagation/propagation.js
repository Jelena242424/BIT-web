"use strict";

var allPics = document.querySelectorAll("img");
allPics.forEach(function(element){
    element.addEventListener("click", redBorder);
});

function redBorder(event) {
    this.style.border = "1px solid red"; // moze event.target umesto this;
    
    if (this.width === 300) {
        event.stopPropagation();
    }
}

document.addEventListener('click', function(event) {
    console.log(event);
});