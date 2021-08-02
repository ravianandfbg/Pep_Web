let a = [1 , 2 , 4 , 5];

//OUTPUT:- b = [1 , 2 , 3 , 4 , 5]

// let a.slice = [0 , 2];  // OUTPUT :-  [1,2]
// let a. slice = [2 , 4]; // OUTPUT :- [4 ,5]

let b = [...a.slice(0,2) , 3 , ...a.slice(2 , 4)];

console.log(b);