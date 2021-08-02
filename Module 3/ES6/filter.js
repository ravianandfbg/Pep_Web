let a = [1 , 2 , 3 , 4 , 5];

function isEven(x){
      return x % 2 == 0;
}

let FilterArr = a.map(isEven);

console.log("Original Filter Function: ");
console.log(a);
console.log(FilterArr);



// ------------------------------------------
// Create a replica of filter
// myFilter

function myFilter(arr , fun){
      
      let ans = [];

      for(let i = 0 ; i < arr.length ; i++){
            if(fun(arr[i]));{
                  ans.push(arr[i]);
            }
      }
      return ans;
}

console.log("Create Filter Function: ");

console.log(a);
console.log(myFilter(a , isEven));