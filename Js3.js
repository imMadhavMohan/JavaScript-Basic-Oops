/* Datatype Primitive
 string-, number-, booleans-, undefined-, null-, Bigint-, symbol-, */
let age=23;
let father="RC SHARMA";
console.log(typeof father);
console.log(typeof age);

// convert num to string 
age=age+""; // 22--> "22"
age=age.toString();// or
let nums = 123;
nums = String(nums);
console.log(typeof nums);

// string to num just add + sign
let mobnum = +"23456888";
console.log(typeof mobnum);
let mmnum = "2339403";
mmnum= Number(mmnum);
console.log(typeof mmnum);

// add two string number
let a = "18";
let b = "19";
let c = (+a) + (+b); // covert to num & add
console.log(c);  // c = 37