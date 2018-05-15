function selectSecondList () {

   var list = document.querySelectorAll("ul");
   list[list.length-1].className="second";
}

function selectAllLi () {

    var allLi = document.querySelectorAll("li");
   allLi.forEach(function(el){
    el.className = "bojimoSveLi";
   })
}

function selectLastUl () {

    var lastLi = document.querySelectorAll("ul");
    var lastUl = lastLi[lastLi.length-1];
    var allLiElement = lastUl.querySelectorAll("li");
    allLiElement.forEach(function(element){
        element.className = "blue";
    })
}


function activeClass (){

    var active = document.querySelectorAll("ul");
    var active2 = active[active.length-1];
    var activ3 = active2.querySelectorAll("li");
    activ3[0].className = "active";
}


function removeClass () {
 var remove = document.querySelector(".active").className = "";

 var list = document.querySelector("div ul");
 var second = list[0];
 var activ4 = second.querySelectorAll("li");
 remove = activ4[0];

}