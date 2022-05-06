// Call() method
const person = {
  fullName: function(city, country) {
    console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
  }
};

const person1 = {
  firstName:"John",
  lastName: "Doe"
};
person.fullName.call(person1,"agr","in"); // with arguements

// without arg
const user1 = { 
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}
const user2 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
user1.fullName.call(user2);
