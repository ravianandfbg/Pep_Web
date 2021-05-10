//fs=> File System

const fs = require("fs");
// console.log(fs);

//utf-8 => format for plain text

let f1kaData = fs.readFileSync("./f1.txt");
console.log(f1kaData + " ");

fs.writeFileSync("index.txt", "Hello world!!!");