function sayHello(){
    console.log("Hello");
}

function sumTwonum(num1, num2){
    return num1+num2;
}

console.log(sumTwonum(4,6));

sayHello();

function isEven(num){
    if((num&1)==0)
      return "yes";
    return "no";
}

console.log(isEven(4));

function firstChar(MyName){
    return MyName[0];
}

console.log(firstChar("Maddy"));

const arr = [1, 3, 2, 56, 32];
let num1 = 32, num2 = 45;
function findAtom(arr, num){
    for(let val of arr)
      if(val==num)
        return "found";
    return "not found";
}
console.log(findAtom(arr, num1));
console.log(findAtom(arr, num2));