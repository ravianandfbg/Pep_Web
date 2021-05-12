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
//console.log(myDocument)


//document.querySelector("h1")

let h1KaData = myDocument("h1").text();
// console.log(h1KaData); element => heerio => object from me data
//console.log(h1KaData);

let secondTag= myDocument("p")["1"];

//console.log(myDocument(secondTag).text());


//Selector
// console.log(myDocument("ul p").text() );

//for a tag
// console.log(myDocument("a").text() );

//for a tag present in li and li is in ul. it means => ul -> li -> a
// console.log(myDocument("ul li a").text() );

//for only direct child
// console.log(myDocument("ul>a").text() );

//Classes and ids

//classes
//for classes we use => dot
// console.log(myDocument(".inside").text() );
console.log(myDocument(".inside.main").text() );

//ids
//for ids we use => #
console.log(myDocument("#main-heading").text() );

