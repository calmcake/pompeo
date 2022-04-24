let burger = document.getElementById("burger");
let menu = document.getElementById("menu");
let body = document.getElementById("body");


burger.addEventListener("click", function(){
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("active");
})