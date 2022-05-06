const userMe = {
    is18: function() { 
        return this.age>=18;
    },
    sayName: function() {
        return this.name;
    },
    sing: function() {
        return 'la-la-la';
    }

};

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