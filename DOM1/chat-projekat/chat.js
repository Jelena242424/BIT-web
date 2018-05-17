var button = document.querySelector('.first-button');
var chatInput = document.querySelector('.first-input');
var chatWindow = document.querySelector('.content-div');

function addMessage() {
    var chatMessage = document.createElement('p');
    chatMessage.textContent = chatInput.value;
    
    chatWindow.appendChild(chatMessage); 
    chatInput.value = "";
};

button.onclick = addMessage;