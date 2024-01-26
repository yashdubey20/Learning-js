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