/* SELECTING AND CACHING ELEMENTS */
var code = document.querySelector("#backgroundcode")
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var backgroundy = document.querySelector(".exercise2");
var button = document.querySelector("#randombutton");


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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomize(){
    var c1 = getRandomColor();
    var c2 = getRandomColor();
    backgroundy.style.background = 
    "linear-gradient(to right, " 
    + c1
    + ", " 
    + c2 
    + ")";
    color1.value = c1;
    color2.value = c2;

    code.textContent = backgroundy.style.background + ";";
}

/*LINKING COLOR INPUTS WITH OUR FUNCTION*/
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomize);

/* test */

/* test2 */

/* test for branching */