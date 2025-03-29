const accountId = 14453
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Vadodara"
let accountState;

// accountId = 2 // not allowed as constant

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengalaru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])