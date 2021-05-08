console.log("Hello world");


//DATA TYPES in JAVASCRIPT :-
//Number(int, float, double) , Boolean, String("" , '') , Undefined, Null, Object


//ES6 => Ecma Script 6
//Two keywords let and const

//Dynamic Casting
let a = 10; //you have declared a variable with name and initalized it with alue 10

//let keyword => block scoped

console.group(a);

if(true){
    let a = 20;
    console.log(a);
}
console.log(a);


//Const => Constant => block scoped and constant

//declare nd assign
const pi = 3.14;
console.log(pi);


//Arrays
let value = [1 , 2, 3 , 4 , 5 , 6, , 7];
console.log(value);

//add some data in values array
value.push("captain america");
console.log(value);
//we can use anything in array like function, object, string, int, boolean

value.pop();
console.log(value);

//Push => add at the end
//Pop => delete from the end

//Shift => delete an element from starting
//Unshift => add an element in the starting of the array

value.shift();
console.log(value);


//splice() => it is used to delete the element on a specific index (here 5 is index) 
value.splice(5,7);
console.log(value);


//objects => key values pair
//keys => unique

let obj = {
    "Full Name":"Steve Rogers",
    place:"Queens",
    movies:["captain america" , "winter soldier" , {
        bestie : "bucky",
        nickname:"wintersoldier",
        partner : "falcon",
        weaknes : ["brainwash"]
    }]
}

console.log(obj.movies[2].weaknes[0].substring(1,5))
 

//get a value of a key in object
//dot notation => literal check
console.log(obj.name);
console.log(obj.place);

let key = "college";
//console.log(obj.key); => output will be undefined

//square bracket notation
console.log(obj[key]);
console.log(obj["Full Name"]);

obj.skills = ["martial arts" , "taekwondo"];
obj.place = "New york";
// console.log(obj);

