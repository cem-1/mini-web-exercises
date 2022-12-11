/* SELECTING AND CACHING ELEMENTS */
var code = document.querySelector("#backgroundcode")
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var backgroundy = document.querySelector(".exercise2");


/*CODING TO MODIFY CSS CONTENT*/
function setGradient(){
    backgroundy.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    code.textContent = backgroundy.style.background + ";";
}

/*LINKING COLOR INPUTS WITH OUR FUNCTION*/
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);