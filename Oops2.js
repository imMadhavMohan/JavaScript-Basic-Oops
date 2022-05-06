class person{
    constructor(fname, lname, age, gender){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
    }    
    get isAge(){
        return this.age>18? "Mature":"im-mature";
    }
    sayHello(){
        return `hello! ${this.fname}`;
    }
    set fullname(name){
        const [fname,lname] = name.split(' '); // destructuring
        this.fname = fname;
        this.lname = lname;        
    }
}

class Madhav extends person{
    constructor(fname, lname, age, gender, quality){
        super(fname, lname, age, gender);
        this.quality = quality;
    }
    sayHello(){ // Overriding
        return `hello! ${this.fname} ${this.lname}`;
    }
    static sub = 'Java';
    static SayGd(){
        return this.name+" goodNight";
    }
}

const person1 = new person("Melody", "Murli", 21, "Male");
const person2 = new Madhav("Mohan", "Murli",22, "Male", "Runner");
console.log(person1);
console.log(person1.sayHello());

console.log(person2.sayHello());
console.log(person1.isAge);

person1.fullname = "Muku Mohan"; // Change val using setter 
console.log(person1.sayHello());

// the method we have used so far are bind to the class only but we want 
// to make the method that could be call without making the Object
// Static method 
console.log(Madhav.SayGd()); // no need to use obj
console.log(Madhav.sub);


function merePapa(){
    var papa = "MyPg";
    console.log(papa);
}

// console.log(papa); not accessible