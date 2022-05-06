// function inside function
function myApp(){
    const v = 2;
    function inside(){ // Only run if explicitly called
        const v = 3;
        console.log("inside",v);
    }
    const add2num = function(a,b){
        return a+b;
    }
    const mul2num = (a,b) => a*b;
    inside();
    console.log(v);
    console.log(add2num(4,5));
    console.log(mul2num(4,5));
    console.log("bye");
    
}
myApp();

// Default parameter
function addNum(a,b,c){ // old way
    if(typeof c == "undefined")
      return a+b;
    return a+b+c;
}
console.log(addNum(4,5));

function add2Num(a,b,c=0){ // new way    
    return a+b+c;
}
console.log(add2Num(4,8));
console.log(add2Num(4,5,8));

// Callback function
function myName() {
    console.log("Inside myName");
}

function MeName(callFunc){
    console.log("Inside MeName");
    callFunc();
}

MeName(myName);

// function returning Function/ Array/ Object/ etc...
function callMe(){
    console.log("Inside CallMe");
    function Hello(){
        return "Hello World!";
    }
    return Hello;
}

const call = callMe(); // become a function
console.log(call());
