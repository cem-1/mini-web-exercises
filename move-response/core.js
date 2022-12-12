var up = document.querySelector("#up");
var rg = document.querySelector("#rg");
var lf = document.querySelector("#lf");
var dw = document.querySelector("#dw");
var exe = document.querySelector("#exe");
var loglist = document.querySelector("#log-list");
var cacheMove;

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

exe.addEventListener("click",function(){
    execute(cacheMove);
    cacheMove = "";
},false);