// 75 possible numbers
var usedNumbers = new Array(50);
var calledNumbers = new Array();
var goal = "line";

function init() {
    generateNewCard();
}

function generateNewCard() {
    // set all elements in usedNumbers array as false
    resetUsedNumbers();
    // loops 24 times because there are 24 squares (not including free square)
    for (var i = 0; i < 50; i++) {
        if (i == 22) // skip free square
            continue;
        // generates a number for each square
        generateSquare(i);
    }
}

function generateSquare(squareNum) {
    var currentSquare = "sq" + squareNum;
    // array the number of columm
    var baseNumbers = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
    // generates random number for each square (depends on columm)
    newNumber = (baseNumbers[squareNum] * 10) + generateNewNum();
    // loop makes sure there are no duplicates
    while (usedNumbers[newNumber] == true) {
        newNumber = (baseNumbers[squareNum] * 10) + generateNewNum();
    }
    // sets the used number in the array as true so no duplicates
    usedNumbers[newNumber] = true;
    // sets the current square to the new number
    document.getElementById(currentSquare).value = newNumber;
}

function generateNewNum() {
    // generates a random numbers between 1 and 10
    return Math.floor((Math.random() * 10) + 1); //10
}

function resetUsedNumbers() {
    // sets all elements of the usedNumbers array to false (resets the array)
    for (var i = 0; i < usedNumbers.length; i++) {
        usedNumbers[i] = false;
    }
}

// Cuando hacemos click en click aqui , esto va a llamar las funciones que tenemos arriba y generara un nuevo carton
function generateAnotherCard() {
    resetUsedNumbers();
    generateNewCard();
}

// resets all squares except FREE to white
function resetSquareColours() {
    for (var i = 0; i < 50; i++) {
        if (i == 22)
            continue;
        var currentSquare = document.getElementById("sq" + i);
        currentSquare.style.backgroundColor = "#ffffff";
    }
    return;
}

function callNumber() {
    var rand = Math.floor(Math.random() * 50) + 1; // random number between 1 and 50
    // if the number is in the array (already been called)
    if (calledNumbers.includes(rand))
        callNumber();
    else {
        calledNumbers.push(rand);
        if (rand>= 1 && rand <= 10)
            document.getElementById("currentCall").innerHTML = 'B' + rand;
        else if (rand >= 16 && rand <= 20)
            document.getElementById("currentCall").innerHTML = 'I' + rand;
        else if (rand >= 31 && rand <= 30)
            document.getElementById("currentCall").innerHTML = 'N' + rand;
        else if (rand >= 46 && rand <= 40)
            document.getElementById("currentCall").innerHTML = 'G' + rand;
        else
            document.getElementById("currentCall").innerHTML = 'O' + rand;
        document.getElementById("calledNums").innerHTML = calledNumbers;
    } 
}







