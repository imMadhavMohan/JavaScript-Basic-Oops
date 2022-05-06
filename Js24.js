// While loop 
let it=0, total=0;
while(it<=100)
    total+=(it++);    
// n*(n+1)/2
console.log(`current val of ${total}`);

// for loop 
for(let i=0; i<9; i++)
  console.log(i);
// console.log("let scope is within block"+ i); // error
for(var k=0; k<9; k++)
  console.log(k);
console.log("var scope is outside block "+ k); // no error

let v=0;
for(;v<9;v++) 
 console.log(v);
console.log("val of v is- "+v);
