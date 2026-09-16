const fs = require("fs")
fs.writeFileSync("notes.txt", "ECE-A")      // creates a file and writes data to it

const data = fs.readFileSync("notes.txt")           // reads the data from the file
console.log(`read data: ${data}`)

fs.appendFileSync("notes.txt", " Hello Node.js")    // appends data to the file

fs.rmSync("notes.txt")                              // removes the file