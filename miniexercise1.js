var button = document.getElementById("submitButton");
var input = document.getElementById("inputBar");
var gameList = document.getElementById("gameList");

//LETS DEFINE CREATING AN <li> ELEMENT
var adding = function(){
    var newelement = document.createElement("li");
    if (input.value === "") {
        alert("Please enter a valid text!");
        return null;
    }
    newelement.appendChild(document.createTextNode(input.value));
    gameList.appendChild(newelement);
}

button.addEventListener("click", adding);