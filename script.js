// Add to Display
function addToDisplay(value){
    document.getElementById("display").value += value;
}

//All Clear Display
function clearDisplay(){
    document.getElementById("display").value = "";
}

// Last Input Remove
function lastInputRemove(){
    document.getElementById("display").value = display.value.toString().slice(0, -1);
}

// Calculation
function calculate(){
    var value = document.getElementById("display").value;
    try{
        var result = eval(value);
        document.getElementById("display").value = result;
    }
    catch{
        document.getElementById("display").value = "Calculation error!"
    }
    /*
    // Same Code
    var value = document.getElementById("display").value
    try{
        document.getElementById("display").value = eval(value);
    }
    catch{
        document.getElementById("display").value = "Calculation error!";
    }
    */
}