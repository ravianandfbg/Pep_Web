let a = [1 , 2 , 3 , 4 , 5];

function isEven(x){
      return x % 2 == 0;
}

let FilterArr = a.map(isEven);

console.log(a);
console.log(FilterArr);