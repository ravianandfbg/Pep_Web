const fs = require("fs");

// sync function
// async function \
// promisifed function

let pendingPromise = fs.promises.readFile("./f1.txt");
console.log(pendingPromise);

// promise ka object k pass 2 function then() catch() hote hai


//then function attaches a success callback to the pendingPromise
pendingPromise.then( function (data){
      console.log("Inside success call back");
      console.log(pendingPromise);
      console.log(data + "");
});


//catch function attaches a failure callback to the pendingPromise
pendingPromise.catch(function(error){
      console.log("Inside failure call back");
      console.log(error);
});