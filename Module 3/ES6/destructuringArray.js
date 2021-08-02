let a = [1 , 2 , 3 , 4 , 5];

// let[first , second , _ , fourth] = a;
//  or
//we can use underscore(_) or comma both
let[first , second ,,, fourth] = a;

console.log(first);
console.log(second);
console.log(fourth);