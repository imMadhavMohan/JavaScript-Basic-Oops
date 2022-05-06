// JavaScript Hoisting
console.log(sayFriend());
function sayFriend() {
    return "hello Bro";
} // no error

// console.log(sayBye());  // cant call before initialization
// const sayBye = function(){
//     return  "Bye-Bye;"
// }

console.log(helloD); // Undefined, cant access as preDefined
var helloD  = "Hello Di";  // gives error , let, const flaw, without pre declaration
console.log(helloD);

// console.log(helloDi); //error as call before declaration
let helloDi  = "Hello Di";  // but give error for let , const flaw as called pre
console.log(helloDi);