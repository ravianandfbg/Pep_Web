// let 
// var


// var => function scoped variable , redeclared , can access before decleration

var a;
console.log(a);   //OUTPUT => undefined
var a = 10;
console.log(a);   //OUTPUT => 10


// let => block scoped variable(i.e we can have same variable name in different blocks) , can not redeclared, can not acess before decleration

{
      let a = 10;
      console.log("1" , a);
}
{
      let a= 20;
      console.log("2" , a);
}
{
      let a = 30;
      console.log("3" , a);
}
