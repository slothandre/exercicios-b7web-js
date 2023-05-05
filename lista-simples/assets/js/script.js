const input = document.querySelector("input");

input.addEventListener("keyup", function(event) {
    if(event.code == "Enter") {
        const list = document.querySelector("ul");
        const listItem = document.createElement("li");
    
        listItem.innerHTML = input.value;
        list.appendChild(listItem);
        input.value = ""
    }
});