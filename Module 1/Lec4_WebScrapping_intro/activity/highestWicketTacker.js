let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";


const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

//request is high order function

request(matchLink , cb)

// //cb => callBack
 function cb(error , response , data) {
//       // console.log("i got the data");

//       // console.log(data);

//       fs.writeFileSync("./match.html" , data);
        getHighestWicketTacker(data);
 }

// let htmlKaData = fs.readFileSync("./match.html" , "utf-8");

function getHighestWicketTacker(data){
let myDocument = cheerio.load(data);
let bothBolwingTables = myDocument(".table.bowler");
//fs.writeFileSync("./bowlingTable.html" , bothBolwingTables+"");
// console.log(bothBolwingTable);

// {
//       0 : {bowling table} ,
//       1 : {bowling table}
// }

let highestWicketTakenName;
let highestWicketTaken;
let economyOfHighestWicketTaker;

for(let i = 0; i < bothBolwingTables.length; i++){
      let bowlingTable = myDocument(bothBolwingTables[i]);
      let allTablesRows = bowlingTable.find("tbody tr");
      // {
      //       "0" : {tr},
      //       "1" : {tr},
      //       "2" : {tr};
      // }

      for(let j = 0; j < allTablesRows.length; j++){
            // wicket "4"
            // name  "0"
            // economy "5"
            let allTds = myDocument(allTablesRows[j]).find("td");
            // { 0 : {} , 1 : {} , 2 : {} , 3 : {} }
            if(i == 0 && j == 0){

                  highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                  highestWicketTaken = myDocument(allTds[4]).text();
                  economyOfHighestWicketTaker = myDocument(allTds[5]).text();
            }
            else{
                  let currentWickets = myDocument(allTds[4]).text();
                  let currentEconomy = myDocument(allTds[5]).text();
                  if(currentWickets > highestWicketTaken  || (currentWickets == highestWicketTaken && currentEconomy < economyOfHighestWicketTaker)){
                  //update if current bowler have high wickets !!

                  highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                  highestWicketTaken = myDocument(allTds[4]).text();
                  economyOfHighestWicketTaker = myDocument(allTds[5]).text();
                  }
            }
      }
}
    console.log("Name Of Highest Wicket Taker = " + highestWicketTakenName);
    console.log("Wickets Taken = " + highestWicketTaken)
    console.log("Economy = " + economyOfHighestWicketTaker)
}