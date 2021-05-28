//async => it can be used before a function name !
//Await => it can only be used inside async function

// IIFE => Immediately Invoked Function Expressions !!

const fs = require("fs");

console.log("Start");

async function callMe(){
      try {
      console.log("Hello World");
      console.log("I am inside async function");
      // let f1KaData = await fs.promises.readFile("./f1.txt");
      // let f2KaData = await fs.promises.readFile("./f2.txt");
      // console.log(f1KaData+" ");
      // console.log(f2KaData+" ");

      let f1KaPP = fs.promises.readFile("./f1.txt" , "utf-8");
      let f2KaPP = fs.promises.readFile("./f2.txt" , "utf-8");
      let bothFilesData = await Promise.all([ f1KaPP , f2KaPP ]);
      console.log(bothFilesData); 
      }
      catch(err){
            console.log(err);
      }
}

callMe();

console.log("end");