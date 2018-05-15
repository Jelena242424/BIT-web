function alertText() {
    var word = document.querySelector("li").textContent;
    alert(word);
};

alertText();

function newWord(msg) {
    document.querySelector("ul").lastElementChild.textContent = msg;
}

newWord("Products");
