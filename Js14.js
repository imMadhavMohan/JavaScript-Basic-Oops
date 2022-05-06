// 4. Array reduce method, give cumulative val or sum
const res2 = digit.reduce(addAll, 20); // 20 passed as base value
function addAll(total, num){
    return num+total;
}
console.log(res2);


// 5. Sort Array method
const digitM = [1201,409,304,234];
digitM.sort(); // Sorted in dictionary Order
console.log(digitM);

digitM.sort(function(a,b){ // anonymous function
    return a-b;
});
console.log(digitM); // Sorted like digits numbers

// we don't want to modify the digitM so we can clone it

const res3 = digitM.slice(0).sort((a,b)=>a-b); // Arrow function
console.log(res3);