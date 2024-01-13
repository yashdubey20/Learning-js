const accountId = 1445 // CANNOT BE CHANGED     
let accountEmail = "yash@google.com" // PREFERED 
var accountPassword = "12345" // DONT USE 
accountCity = "Mumbai" 
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])