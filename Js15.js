const mobile = [{name:"OppO", price:12000},
                {name:"Samsung", price:15000},
                {name:"Apple", price:25000}];
const clone = mobile.slice(0).sort((a,b)=>a.price - b.price); // Original arr won't change
console.log(clone); // low to high
const clone1 = mobile.slice(0).sort((a,b)=>b.price - a.price); // High to low
console.log(clone1); 

// 5. find() array method
digit = [11,15,19,23,35];
let val = digit.find((num)=>num>18); // return first occur where condition obeyed
console.log(val);
val = mobile.find(num=>num.price===12000);
console.log(val);

// 6. every() method of array give boolean true/false
val = mobile.every(num=>num.price>10000); // for each element
console.log(val);
digit = [1,2,3,4,5,6];
val = digit.every(num=>(num&1)==0);
console.log(val);