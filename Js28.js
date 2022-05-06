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