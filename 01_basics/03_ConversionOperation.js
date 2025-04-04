let score = "33abc" // value - NaN(Not a Number)

let score1 = null // value - 0

let score2 = undefined // value - NaN

let score3 = true // value - 1 and for false - 0

let score4 = "Pushpraj" // value - NaN

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1 // true
// let isLoggedIn = "" // false
let isLoggedIn = "Pushpraj" //true

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Pushpraj" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
