// Object creation

// const userMe = {
//     is18: function() { 
//         return this.age>=18;
//     },
//     sayName: function() {
//         return this.name;
//     },
//     sing: function() {
//         return 'la-la-la';
//     }

// };

function CreateUser(name, age, id, city){
    const obj = Object.create(CreateUser.prototype); // the js will check 
    obj.name = name; // functions in CreateUser prototype not in 
    obj.age = age; // userMe as it is commented, and we have also added the methods     
    obj.id = id;  // in prototype
    obj.city = city;
    return obj;    
}

let user1 = CreateUser("Mad", 22, 1, "Agra"); // here we don't use new keyword
let user2 = CreateUser("Ria", 21, 2, "Utr");
let user3 = CreateUser("Rocky", 23, 3, "Uk");

CreateUser.prototype.sing = function() {
        return 'la-la-la';
    };

CreateUser.prototype.sayName = function() {
        return this.name;
    };   

CreateUser.prototype.is18 = function(){
    return this.age>=18;
}

console.log(user1);
console.log(user2);
console.log(user3);

console.log(user1.is18());
console.log(user2.sing());
console.log(user3.sayName());
console.log(typeof __proto__);


// Make Object using new Keyword

function createMyUser(name, age, id, city){
    // const user = Object.create(user.prototype); isn't required
    this.name = name;
    this.age = age;
    this.id = id;
    this.city = city;
    // no need to return new keyword do it auto
}

createMyUser.prototype.singSng = function(){
    return "la-la-la";
};

createMyUser.prototype.myId = function(){
    return this.id;
};

user1 = new createMyUser("Mohit", 23, 13, "Uk");
user2 = new createMyUser("Sobit", 29, 8, "US");
user3 = new createMyUser("Ronak", 19, 4, "USR");

console.log(user1);
console.log(user2);
console.log(user3);
console.dir(user1);
console.log(user1.singSng());
console.log(user1.myId());

let nums = [1,2,3]; // arr is obj
console.dir(nums);
console.log(Array.prototype); // will show all the method declared in Array prototype
console.log(Object.getPrototypeOf(nums));
function about(){
    console.log("Hello");
}
console.log(about.prototype); // change prototype to Array object
about.prototype = [];
console.log(about.prototype);


// Class Keyword in Java
class Animal{
    constructor(age, name, speak){
        this.name = name;
        this.speak = speak;
        this.age = age;
    }
    isAge(){
        return this.age<18? "cutie pie":"oldy";
    }

    isSpeak(){
        return this.speak;
    }
}

const cat = new Animal("Amy", 3, "Meow-Meow");
console.log(cat.isSpeak());

// Inheritance in js
class dog extends Animal{
    // here, Animal class constructor is used as dog has no constructor but lets make constructor for it
    constructor(name, age, speak, speed, color){
        super(name,age,speak); // call parent class constructor
        this.speed = speed;
        this.color = color;
    }
} // all the method will be copied in dog class

const pouty = new dog("rout", 4, "Boo-Boo",21, "Black");
console.log(pouty.isAge());
console.log(pouty.isSpeak());
console.log(pouty.speed);
console.log(pouty.color);




