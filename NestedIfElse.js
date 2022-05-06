let winNum = 19;
let userGuess = 19; // covert the user input to number

if(userGuess === winNum)
    console.log("You won!");
else if(userGuess < winNum)    
    console.log("You lost!"+"Too low!");
else if(userGuess > winNum)
    console.log("You lost!"+"Too high!");

// Nested if else if
let input= 34;
if(input<15) 
    console.log("cold!");
else if(input>15)
    console.log("mild cold!");
else if(input>25)
    console.log("cool summer")
else if(input>35)
    console.log("swim");
else if(input>45)
    console.log("Damn hot");

// SwitchCase Stmnt

let day = 7;

switch(day){
    case 1:
        console.log("Monday"); break;
    case 2:
        console.log("Tuesday"); break;
    case 3:
        console.log("Wednesday"); break;
    case 4:
        console.log("Thursday"); break;
    case 5:
        console.log("Friday"); break;
    case 6:
        console.log("Saturday"); break;
    case 7:
        console.log("Sunday"); break;
    default:
         console.log("invalid");
}

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

// Array clone
let arr1=[1,2,3,4]; // 1st way
let arr2=[1,2,3,4];
console.log("Clone array: ",arr1);
let ar = [8,9];
let arr3=[...arr2, ...ar, 7,8]; // spread operator 
console.log("Clone array: ",arr3); // 2nd way
let arr4=[].concat(arr3, [5,6]); // 3rd way
// traverse arr
let myArr=[];
for(let i=0; i<arr4.length; i++)
    myArr.push(arr4[i]); //myArr[i]=arr4[i];
console.log(myArr);

// Const array are recommended
myArr = [1.2, 3.4];
console.log(myArr); // rest element are removed above will be seen
const arrMy = [2,4,1,5,8];
// arrMy = [1.3]; // error
const arrM=[];
for(let i=0;i<arrMy.length;++i) 
    arrM.push(arrMy[i]);
for(let item of arrM)
    console.log(item);
console.log('\n')    ;
for(let index in arrM)
    console.log(arrM[index]);
let [v1, v2]  = arrM;
console.log(v1+" hello "+v2);

arr2.unshift("0"); // whatever change we do in arr2 won't b reflect in arr1
console.log(arr1,arr1===arr2); // aren't Pointing to same location(false)

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

// Task
const key1 = "Obj1";
const key2 = "Obj2";

const val1 = "Myval1";
const val2 = "Myval2";

const myyObj = {[key1]: val1, [key2]:val2};
console.log(myyObj);

// Obj Destructure
const MyObj = {Name: "maddy", Age: 22, Hobbie : "Programming"};
const {Name, Age} = MyObj;
console.log(Name+" "+Age);
let {Name:MyName, Age:MyAge}=MyObj;
console.log(MyName+" "+MyAge);

// Spread Operator
let {Name:Mname, Age:MAge, ...rest}= MyObj;
console.log(Mname+" "+MAge+" "+rest);

// Array Of Object
const Info = [{id:1, name: "ram", age:11},{id:2, name: "sam", age:14},{id:3, name: "rocky", age:16}];
console.log(Info);

for(let student of Info){
    console.log(student.name, student.age);
}

const [user1, user2, user3]=Info;
console.log(user1); // all field of obj1 will appear
// we want specific field of arr's obj
const [{name}, {name:myname},{id}]=Info;
console.log(name+" ", myname, id);




