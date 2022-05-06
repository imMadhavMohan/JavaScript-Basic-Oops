var lname="Mohan";
console.log(fname+" "+lname);
fname="Mukund";
console.log('\n'+fname+" "+lname);


// String indexing(strings are immutable to make any  change explicitly assign val)
let naame=" Madhav Mohan   ";
console.log(naame[2]+" "+naame.length);

naame = naame.trim();
console.log(naame);
console.log(naame.toUpperCase());
let mob=291919;
console.log(mob.toString()[3]);
let slice=naame.slice(1,5);// can give arg
console.log(slice);
