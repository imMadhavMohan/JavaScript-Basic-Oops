// composite form of function(function Expression)
const say = function SayHi(){
    console.log("Hello Bro!");
}
const tell = function SayHi(){
    return "Hello dear!";
}
console.log(tell());
say();

const Odd = function(num){
    if((num&1)!=0)
      return "yes";
    return "no";
}

const isPrime = (num)=>{
    if(num==1 || num==0)
        return false;
    for(let i=2;i*i<=num;i++){
        for(let j=i;j*j<=num;j+=i){
            if(num%j==0)
              return false;
        }        
    }
    return true;
}

console.log(Odd(9));
console.log(isPrime(8));
console.log(isPrime(31));