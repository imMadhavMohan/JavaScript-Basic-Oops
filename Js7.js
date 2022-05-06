// Apply()
let user4 = {
    info: (city,cnt)=>{
        console.log(this.firstName+" "+this.lastName+" "+city+" "+cnt);
    }
}
let user3 = {
    firstName : "Madhav",
    lastName: "Maddy"
};
let infoMe=user4.info.apply(user3,["agr","in"]);
console.log(infoMe);

// Bind()
function about(hobby){
  console.log(this.name, this.age,hobby);
  }
const myData ={
  name:"Maddy",
  age:23  
};

infoMe = myData.about.bind(myData);
console.log(infoMe);