// 2. Array map() method
function sqrt(num,index){
    return `index + ${num*num}`;
}
let digit = [1,3,2,5,6];
const sqr = digit.map(sqrt);
console.log(sqr);
const sqr1 = digit.map(num=>{
    return num*num;
});
console.log(sqr1);

// 3. Array filter method
function isEven(num){
    return (num&1)===0;
}
const res = digit.filter(isEven);
console.log(res);
const res1 = digit.filter(num=>{
    return (num&1)===0;
});
console.log(res1);