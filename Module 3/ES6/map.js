let a = [1 , 2 , 3 , 4 , 5];

function double(x){
      return 2*x;
}

let ansArr = a.map(double);

console.log("Original Map Function: ");
console.log(a);
console.log(ansArr);

// ------------------------------------------
// Create a replica of map
// myMap

function myMap(arr , fun){
      
      let ans = [];

      for(let i = 0 ; i < arr.length ; i++){
            ans.push(fun(arr[i]));
      }
      return ans;
}

console.log("Create Map Function: ");
console.log(a);
console.log(myMap(a , double));
