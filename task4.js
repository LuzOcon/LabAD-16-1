const containerEL = document.getElementById("container");
const classSecondEL = document.querySelectorAll(".second");
const classThirdEl = document.querySelector("ol .third");

function step1(){
containerEL.textContent = "Hello!";
console.log(containerEL);
}

const divFooterEl = document.querySelector(".footer");

function step2(){
divFooterEl.classList.add("main")
console.log(divFooterEl);
}

function step3(){
divFooterEl.classList.remove("main")
console.log(divFooterEl);
}

const ulEl = document.querySelector("ul")
function step4(){
    ulEl.insertAdjacentHTML("beforeend", "<li> four </li>");
}