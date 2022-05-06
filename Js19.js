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