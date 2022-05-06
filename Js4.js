// String Concat
let firstName="Madhav";
let secondName="Mohan";
let fullName= firstName+" "+secondName;
console.log(firstName.concat(secondName)); // good
console.log(fullName);



/*datatype is undefined (var, let) but const can't be left uninitialized
 when we don't assign any val to var so its */
let val ;
console.log(typeof val);
 
const myval = "hello"; // after initialization
console.log(typeof myval); 
console.log(myval, a ,b , c); // can print multiple values

/* null datatype (// returns Object that's a Bug in the javascript as it
 should return null but giving Object  so keep in mind)*/
let firstValue ;
firstValue = "HelloBro!";
console.log(typeof firstValue, firstValue);
console.log(typeof null); 

/*BigInt datatype*/
let muNum = 1234567981011233444;
let myNum = 123;
console.log(typeof muNum, muNum);
console.log(Number.MAX_SAFE_INTEGER); // Convert to BigInt
muNum = BigInt(1234567981011233444);
muNum = 1234567981011233444n; // convert to BgInt
console.log(muNum);
/*console.log(muNum+muNum);error two different type can't be added */