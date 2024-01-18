const user = {
    username: "Yash",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, Welcome`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) browser mai alag output aayega empty nahi

const chai =  () => {
    let username = "hitesh" // cannot use this in functions
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "yash"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
