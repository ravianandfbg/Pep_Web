
//CALLBACK => It is used toimplement async function

  
function getFirstName(fullName){
    // fullname = "STEVE ROGERS" => string
    fullName = fullName.split(" ");
    // ["STEVE","ROGERS"];
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}


function fun(fullName , cb){
    // millions of code
    let name = cb(fullName);
    console.log(name);
}



fun("Steve Rogers" , getFirstName);
fun("Iron Man" , getLastName);

// fun => highOrderFunction
// getFirstName , getLastName => callback functions 


// STEVE MAN

