// Object literals
let obj = {};
console.log(typeof obj); // Object
console.log(Array.isArray(obj)); // false[ to Check whether it's an array or not]
let myObj = {name:"Madhav", age : 23, city: "Agra", race: "Asian"};
console.log(myObj);
myObj.gender = "Male"; // add new key-val
console.log(myObj); // DOt Notation
console.log(myObj.age);
console.log(myObj["gender"]); // sqr bracket Notation
console.log(myObj["age"]); //

const key = "email";
// myObj.key = "maddy@.com"; we want property name 'email'
myObj[key] = "maddy@.com";
console.log(myObj);

// iterate Object
for(let key in myObj) 
  console.log(key); // all keys will be printed

for(let key in myObj)
  console.log(key+":"+myObj[key]); // to Print all values
for(let key in myObj)
  console.log(`${key} : ${myObj[key]}`);

// Object of Keys
const var1 = Object.keys(myObj);
console.log(var1); // gives arr of Keys
console.log(Array.isArray(Object.keys(myObj))); // Yes true

for(let key of Object.keys(myObj))
  console.log(myObj[key]); //print all key's val from arr of keys