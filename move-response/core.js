/*SELECTING HTML ITEMS*/
var up = document.querySelector("#up");
var rg = document.querySelector("#rg");
var lf = document.querySelector("#lf");
var dw = document.querySelector("#dw");
var exe = document.querySelector("#exe");
var loglist = document.querySelector("#log-list");
var cacheMove;

/*DEFINING MOVE TYPES*/
function upMove(){
    var newelement = document.createElement("li");
    newelement.appendChild(document.createTextNode("Moved Up!"));
    loglist.appendChild(newelement);
}

function rightMove(){
    var newelement = document.createElement("li");
    newelement.appendChild(document.createTextNode("Moved Right!"));
    loglist.appendChild(newelement);
}

function leftMove(){
    var newelement = document.createElement("li");
    newelement.appendChild(document.createTextNode("Moved Left!"));
    loglist.appendChild(newelement);
}

function downMove(){
    var newelement = document.createElement("li");
    newelement.appendChild(document.createTextNode("Moved Down!"));
    loglist.appendChild(newelement);
}

/*DEFINE EXECUTE FUNCTION WILL LOG THE MOVE ON BROWSER*/
function execute(cacheMove){
    switch(cacheMove){
        case "up": 
            upMove();
            break;
        case "left": 
            leftMove();
            break;
        case "right": 
            rightMove();
            break;
        case "down": 
            downMove();
            break;
        default: 
            alert("Please do your move first!");
    }
}

/*EVENT LISTENER FOR MOVE BUTTONS*/
up.addEventListener("click",function(){
    cacheMove = "up";
});
rg.addEventListener("click",function(){
    cacheMove = "right";
});
lf.addEventListener("click",function(){
    cacheMove = "left";
});
dw.addEventListener("click",function(){
    cacheMove = "down";
});

/*EVENT LISTENER FOR EXECUTE BUTTON*/
exe.addEventListener("click",function(){
    execute(cacheMove);
    cacheMove = "";
},false);