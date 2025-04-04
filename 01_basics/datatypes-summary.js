// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2344353843429332n

// Reference (Non-primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Pushpraj",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);  