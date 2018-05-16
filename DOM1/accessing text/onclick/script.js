var interval;

function clickHandler(){
    var body = document.querySelector("body");
    interval = setInterval(function(){body.classList.toggle("main-color")}, 1000);  
};

    function stopFunction() {
        clearInterval(interval);
    }