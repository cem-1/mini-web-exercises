/*Firstly i select elements of HTML file. Caching them */
var button = document.getElementById("submitButton");
var button2 = document.getElementById("clearButton");
var input = document.getElementById("inputBar");
var gameList = document.getElementById("gameList");

/*Now i define my add function*/
var adding = function(){
    var newelement = document.createElement("li");
    /*--------------------BUTTON DEFINE ------------------*/
    /*Defining Buttons For newelement*/
    var donebutton = document.createElement("button");
    var deletebutton = document.createElement("button");
    /*Create Texts for Buttons*/
    donebutton.innerHTML = "Done";
    deletebutton.innerHTML = "Delete";
    /*Appending them to newelement*/
    newelement.appendChild(donebutton);
    newelement.appendChild(deletebutton);
    /*Styling Buttons*/
    donebutton.classList.add("donebutton");
    deletebutton.classList.add("deletebutton");
    /*Programming buttons*/
    donebutton.addEventListener("click", function(){
        newelement.classList.toggle("done");
    });
    deletebutton.addEventListener("click", function(){
        newelement.parentNode.removeChild(newelement);
    });
    /*--------------------END OF BUTTON DEFINE ------------------*/


    if (input.value === "") {
        alert("Please enter a valid text!");
        return null;
    }
    newelement.appendChild(document.createTextNode(input.value));
    gameList.appendChild(newelement);
    input.value = "";
}

/*Defining clear function*/
var clearing = function(){
    var childnode = gameList.lastElementChild;
    while(childnode){
    gameList.removeChild(childnode);
    childnode = gameList.lastElementChild;
    }
}

/*marking done list*/
var defineDone = function(task){
    if(task.target.tagName === "LI"){
        task.target.classList.toggle("done");
    }
}

/*And event listeners to user responsive.*/
button.addEventListener("click", adding);
input.addEventListener("keypress", function(event){
    if(event.key == 'Enter') adding();
});
button2.addEventListener("click",clearing);
