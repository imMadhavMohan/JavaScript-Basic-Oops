let winNum = 19;
let userGuess = 19; // covert the user input to number

if(userGuess === winNum)
    console.log("You won!");
else if(userGuess < winNum)    
    console.log("You lost!"+"Too low!");
else if(userGuess > winNum)
    console.log("You lost!"+"Too high!");

// Nested if else if
let input= 34;
if(input<15) 
    console.log("cold!");
else if(input>15)
    console.log("mild cold!");
else if(input>25)
    console.log("cool summer")
else if(input>35)
    console.log("swim");
else if(input>45)
    console.log("Damn hot");
