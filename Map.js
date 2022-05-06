const number = [{nums:"1", val:"One"},{nums:"2", val:"Two"},{nums:"3", val:"Three"}];
console.log(number);

const map = new Map();
map.set('@maddy', {ph:0234,city:"up"});
map.set('@ram', {ph:0204,city:"uk"});
map.set('@mukul',{ph:0235,city:"us"});
map.set('@Chukul',{ph:02235,city:"ur"});
console.log(map.size); // size
console.log(typeof map);
// to retrieve a val using key
console.log(map.get('@maddy'));
console.log(map.has('@maddy')); // true
// to print all keys in map
console.log(map.keys());
// iterate:1
for(let val of map.keys())
 console.log(val);
// iterate:2
for(let [key, val] of map)
 console.log(key,':', val);
// iterate:3
for(let val of map.values()) 
    console.log(val);
// iterate:4
for(let [key,val] of map.entries())
    console.log(key,val);
// iterate using for each
map.forEach((key,val)=>{
    console.log(key,val);   
})

// Optional chaining
const user = {cat:{name:"Alice", id:2, sayName:function(){
    console.log(`my name is: ${this.name}`);
}}}

console.log(user?.cat?.dog); // undefined
console.log(user?.cat?.sayName());

// Window Object
"use strict"
console.log(this); // shows all window method & property
function SayName() {
    console.log('Maddy'); // added to windows function
}
SayName();
// window.SayName(); // work in browser
// this.SayName();

// to avoid mismatch of function names use "use strict"





