// singleton
// Object.create // Singleton made using constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Yash",
    "full name": "Yash Dubey",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "yash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "yashh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "yash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());