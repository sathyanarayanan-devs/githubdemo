const button = document.getElementById("btn");
let h1 = document.getElementById("h1");

button.addEventListener("click", function(){
    h1.style.color = "blue";
    alert("button clicked");
})