const { json } = require("express")

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async function")
        resolve()
    },1000) // 1 sec
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject) {
    setTimeout(function() {
        console.log("Async Task-2")
        resolve()
    },1000)
}).then(function() {
    console.log("Promise consumed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Yash Dubey", email: "yash@yash.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true // if false then it wont give an error
        if (!error) {
            resolve({username:"Yash Dubey", password:"123"})
        } else {
            reject("There seems to be an error")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username)
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("Finally executed"))

const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true 
        if (!error) {
            resolve({username:"Js", password:"123"})
        } else {
            reject("There seems to be an error in js")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/yashdubey20')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}

getAllUsers()

fetch('https://api.github.com/users/yashdubey20')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))