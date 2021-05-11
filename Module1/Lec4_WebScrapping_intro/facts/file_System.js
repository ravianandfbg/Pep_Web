//Install in Pep_Web11 file
//Commands :-
// npm init -y => to create package.json file
// npm install cheerio



const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html" , "utf-8");

// console.log(htmlKaData); //we have a stringified html file!!

//html fileis loaded in cheerio 
let myDocument = cheerio.load(htmlKaData);
console.log(myDocument)


//document.querySelector("h1")

let h1KaData = myDocument("h1").text;
// console.log(h1KaData); element => heerio => object from me data
console.log(h1KaData);

