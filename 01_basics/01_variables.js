const accountId = 144553
let accountEmail = "chandan123@google.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;

//accoutId= 2  //not allow
accountEmail = "hello@google.com"
accountPassword = "234433"
accountCity = "Bengaluru"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])