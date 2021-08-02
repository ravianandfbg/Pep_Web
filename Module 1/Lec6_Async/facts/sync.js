const fs = require("fs");

console.log("start");

//sync
let f1kaContent = fs.readFileSync("./f1.txt");
console.log(f1kaContent+" ");

console.log("end");