let a = [1 , 2 , 3];

function sum(a , b){
      return a+b;
}
let reducedValue = a.reduce(sum);

console.log("original Reduce function: ");
console.log(a);
console.log(reducedValue);

// ------------------------------------------
// Create a replica of reduce
// myReduce

function myReduce(arr , fun){
      
      let ans = arr[0];

      for(let i = 1 ; i < arr.length ; i++){
            ans = fun(ans , arr[i]);
      }
      return ans;
}

console.log("Create Reduce function: ");
console.log(a);
console.log(myReduce(a , sum));
