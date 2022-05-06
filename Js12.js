// Arrays functions 
// 1. forEach
const digits=[
    {name:"one", id:1},
    {name:"two", id:2},
    {name:"three", id:3}, 
];

for(let i=0;i<digits.length;i++) {
    console.log(digits[i].name+" : ",digits[i].id);
}

digits.forEach(function(num){
    console.log(num.name+" : ",num.id);
});

function mineFunc(num){
    console.log(num.id+" : ",num.name);
}

digits.forEach((nums, index)=>{
    console.log(nums.name+" "+nums.id+" "+index);
});

digits.forEach(mineFunc);
