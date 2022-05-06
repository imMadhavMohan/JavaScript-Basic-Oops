// Array clone
let arr1=[1,2,3,4]; // 1st way
let arr2=[1,2,3,4];
console.log("Clone array: ",arr1);
let ar = [8,9];
let arr3=[...arr2, ...ar, 7,8]; // spread operator 
console.log("Clone array: ",arr3); // 2nd way
let arr4=[].concat(arr3, [5,6]); // 3rd way

// traverse arr
let myArr=[];
for(let i=0; i<arr4.length; i++)
    myArr.push(arr4[i]); //myArr[i]=arr4[i];
console.log(myArr);

// Const array are recommended
myArr = [1.2, 3.4];
console.log(myArr); // rest element are removed above will be seen
const arrMy = [2,4,1,5,8];
// arrMy = [1.3]; // error
const arrM=[];
for(let i=0;i<arrMy.length;++i) 
    arrM.push(arrMy[i]);
for(let item of arrM)
    console.log(item);
console.log('\n')    ;
for(let index in arrM)
    console.log(arrM[index]);
let [v1, v2]  = arrM;
console.log(v1+" hello "+v2);

arr2.unshift("0"); // whatever change we do in arr2 won't b reflect in arr1
console.log(arr1,arr1===arr2); // aren't Pointing to same location(false)
