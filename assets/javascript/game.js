$(document).ready(function() {
var buttonOne = $("#btn1");
var buttonTwo = $("#btn2");
var buttonThree = $("#btn3");
var buttonFour = $("#btn4");
var buttonValue = [];
var guessTotal;
var wins = 0;
var losses = 0;
var selectedNum;


function newGame() {
guessTotal = 0;
    // selects random number from array, and pushes into the html
    selectedNum = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
    console.log(selectedNum);
    $("#number").empty().html("<h2>"+ selectedNum + "</h2>");

    buttonValue[0] = [Math.floor(Math.random() * (12) + 1)];
    buttonValue[1] = [Math.floor(Math.random() * (12) + 1)];
    buttonValue[2] = [Math.floor(Math.random() * (12) + 1)];
    buttonValue[3] = [Math.floor(Math.random() * (12) + 1)];

    console.log(buttonValue[0]);
    console.log(buttonValue[1]);
    console.log(buttonValue[2]);
    console.log(buttonValue[3]);

    buttonOne.attr("buttonvalue", buttonValue[0]);
    buttonTwo.attr("buttonvalue", buttonValue[1]);
    buttonThree.attr("buttonvalue", buttonValue[2]);
    buttonFour.attr("buttonvalue", buttonValue[3]);
   
}
newGame();
guessTotal = 0;
$("#wins").append( wins);
$("#losses").append( losses);

$(".button").on("click", function() {
    var buttonNum = $(this).attr("buttonValue");
   
    buttonNum = parseInt(buttonNum);
    console.log(buttonNum);

    guessTotal = guessTotal += buttonNum;
    $("#guess").empty().append( guessTotal);
    // guessTotal = parseInt(guessTotal);
    console.log("guessTotal " + guessTotal);

    if (guessTotal == selectedNum) {
        wins++;
        
        $("#wins").empty().append(wins);
        alert("You Win!");
        newGame();
    } 
    else if (guessTotal > selectedNum) {
        losses++;
        
        $("#losses").empty().append(losses);
        alert("You Lose!");
        newGame();
    }

    
});
});