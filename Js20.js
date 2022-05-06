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




