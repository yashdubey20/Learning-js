// console.log("Y");
// console.log("A");
// console.log("S");
// console.log("H");

function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

// addTwoNumbers(5, 10);

const result = addTwoNumbers(5, 10);

console.log(result);

function loginUser(username) { // can give value here
    if(!username){ // username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log("Yash"); wont work
// console.log(loginUser("Yash"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "yash",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));