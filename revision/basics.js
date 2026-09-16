// asynchronous 

// console.log("---asynchronous---");
// setTimeout(() => {
//     console.log("1. This is asynchronous");
// }, 2000); 
// console.log("---asynchronous end---");


//Execution order
console.log("Synchronous Code");
setTimeout(() => {
    console.log("Macrotask Queue");
},2000);

Promise.resolve().then(() => {
    console.log("Microtask Queue");
})

function greet(name){
    console.log(`Hello ${name}`);
}

