function alertText() {
    var word = document.querySelector("li").textContent;
    alert(word);
};

alertText();

function newWord(msg) {
    document.querySelector("ul").lastElementChild.textContent = msg;
}

newWord("Products");




function createDropdown(content, parentElement) {
    var select = document.createElement("select");
    content.forEach(function (element) {
        option = document.createElement("option");
        option.value = element;
        option.textContent = element;

        select.appendChild(option);
    })
    parentElement.appendChild(select);
}
createDropdown(["flowers", "cactuses", "grass"], document.querySelector("div"));


function validateForm() {
    var inputs = document.querySelectorAll("input");
    
    inputs.forEach(function (input) {
        if (input.hasAttribute("required") && input.value === "") {
            input.classList.add("border");
        } else {
            input.classList.remove("border");
        }
    })
}

// validateForm();