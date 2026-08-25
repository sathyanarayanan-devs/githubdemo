const button = document.getElementById("btn");
let h1 = document.getElementById("h1");

button.addEventListener("click", function(){
    h1.style.color = "blue";
    alert("button clicked");
})

let text = document.getElementById("Text");
const btn = document.getElementById("sBtn");
let key = document.getElementById("key");

btn.addEventListener("click", function() {
    text.textContent = key.value;
    key.value = "";
});