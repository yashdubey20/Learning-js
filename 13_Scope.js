//var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Yash";

    function two() {
        const lastname = "Dubey"
        console.log(username);
    }

    // console.log(lastname);

    two()
}

// one()

if (true) {
    const username = "yash"
    if (username === "yash") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}