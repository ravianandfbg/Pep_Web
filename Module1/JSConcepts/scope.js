//let is block scoped
//const is block scoped


//var => function scoped

var a = 20;

console.log(a);

if(true){
      var a = 50;
      console.log(a);
}

function callMe(){
      var a = 100;
      console.log("Inside call me");
      console.log(a);
}
callMe();

console.log(a);