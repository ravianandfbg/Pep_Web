const fs = require("fs");
console.log("start");


fs.readFile("./f1.txt" , getdata);

function getdata(error , data){   //getdata ===>this is callback function
      console.log(data+"");
}

console.log("end");
