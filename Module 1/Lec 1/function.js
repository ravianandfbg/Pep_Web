//Function body / function statement

function fun(){
    console.log("fun says hii");
}

//function call / invoke
fun();

// In js , a function acts like a variable

// This is function expression

let sayHi = function(){
    console.log("sayHi fun says hii");
}

sayHi();


function callback(){
    console.log("I am passed as a argument");
    return 5;
}

function highOrderFunction( cb ){
    let value = cb(); // call cb
    console.log(value);
}


highOrderFunction( callback );

//Conclusion
// High Order Function => Function which accepts functions as a argument !!
// CallBack Function => Function which are passed as a argument in a function !!