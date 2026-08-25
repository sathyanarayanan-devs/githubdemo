const button = document.getElementById("btn");
const sub_btn = document.getElementById("submit");
let h1 = document.getElementById("h1");
let key = document.getElementById("key");

button.addEventListener("click", function(){
    h1.style.color = "blue";
    alert("button clicked");
})


sub_btn.addEventListener("click", function() {
    let text = document.getElementById("textArea");
    text.textContent = key.value;
    key.value = "";
})
