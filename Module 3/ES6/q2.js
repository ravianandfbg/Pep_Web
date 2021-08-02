let O1  = {a:1 , b:2};
let O2 = {c:3};
let O3 = {...O1 , ...O2 , ...O1 , ...O2};

console.log(O3);