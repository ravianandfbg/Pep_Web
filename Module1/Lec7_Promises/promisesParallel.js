//parallely read contents of f1 f2 and f3 using promised function

const fs = require("fs");

let f1kaPromise = fs.promises.readFile("./f1.txt");
let f2kaPromise = fs.promises.readFile("./f2.txt");
let f3kaPromise = fs.promises.readFile("./f3.txt");

f1kaPromise.then(function(data){
      console.log(data + "");
});

f2kaPromise.then(function(data){
      console.log(data + "");
});

f3kaPromise.then(function(data){
      console.log(data + "");
});