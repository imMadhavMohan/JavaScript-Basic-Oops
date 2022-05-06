// do while
v=0;
do{
    console.log(v);
    v++;
}while(v<9)
console.log('\n');
// Break & Continue
v=0;
for(;v<9;v++)
{
    if(v===5) 
       continue;
    console.log(v);    
}

//Arrays in Js is treated as object
/*we can store mixed val in the Js arrays*/
let arr = ["Apple", 2, 3.4, "Maddy", null, undefined];
console.log(arr);
arr[2]=7.9;
console.log(arr);
console.log(typeof arr); // Object
console.log(Array.isArray(arr)); // true if arr is an array
// Array Methods
arr.push("Mango"); // insert at last position
console.log(arr);
console.log(arr.pop()); // delete last & return
delete arr[2]; // delete element at index=2
arr.unshift("Peanut"); // insert at begin
arr.shift(); // discard at begin