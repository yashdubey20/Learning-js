// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Semicolon very important

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Yash')