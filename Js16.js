// 7. splice() method
// 1. insert()
digit.splice(2,0,-1); // just insert
console.log(digit);

// insert() + delete()
digit = [1,2,3,4,5,6];
digit.splice(2,2,-1); 
console.log(digit);

// delete
digit = [1,2,3,4,5,6];
val = digit.splice(2,2); // 3 & 4 will be removed & returned
console.log(digit, val);

// 7. reverse method of Arrray
digit = [1,2,3,4,5,6];
digit.reverse();
console.log(digit);

// 8. toString() method of Array is used to convert to string
digit = ["Maddy", "Mohan", "Agra", "282005"];
val = digit.toString();
console.log(val);


// Iterables: String & Arrays are iterable while Objects aren't
digit = [1,2,3,4,5,6];
for(let val of digit)
    console.log(val);

let str = "Hello Maddy"
for(let val of str)
    console.log(val);

// Set: "store unique element" in javascript
digit = [1,2,3,4,4,5,6]; // store unique element
const set = new Set(digit);
console.log(set);
// console.log(set.length); can't use
