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