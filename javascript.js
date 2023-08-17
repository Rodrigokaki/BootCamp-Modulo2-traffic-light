function changeLight(){
    if(document.getElementById("red").className === "ball red-light"){
        document.getElementById("red").className ="ball"
        document.getElementById("green").className ="ball green-light"
    }
    else if(document.getElementById("green").className === "ball green-light"){
        document.getElementById("green").className ="ball"
        document.getElementById("yellow").className ="ball yellow-light"
    }
    else{
        document.getElementById("yellow").className ="ball"
        document.getElementById("red").className ="ball red-light"
    }
}

