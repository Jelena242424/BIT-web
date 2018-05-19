"use strict";

var football = document.querySelector(".football");
var player = document.querySelector(".player");
var stopButton = document.querySelector(".stop-player");

function move(event) {
    player.style.top = event.clientY + "px";
    player.style.left = event.clientX + "px";
}

football.addEventListener("click", move);

function stopPlay() {
    football.removeEventListener("click", move);
}

stopButton.addEventListener("click", stopPlay);



