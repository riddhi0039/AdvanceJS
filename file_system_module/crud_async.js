const fs = require("fs")                               // callback based method

fs.writeFile("notes.txt", "ECE-A", (err) => {          // create a file and write data to it
    if (err) {
        console.error(err);
        return;
    }
    console.log("Data successfully written to the file notes.txt");
});

fs.readFile("notes.txt", (err, data) => {             // read the data from the file
    if (err) {
        console.error(err);
        return;
    }
    console.log(`read data: ${data}`);    // not using data instead of `read data: ${data}` because data is a buffer and will be converted to string automatically
});

fs.appendFile("notes.txt", " Hello Node.js", (err) => {    // append data to the file
    if (err) {
        console.error(err);
        return;
    }
    console.log("Data successfully appended to the file notes.txt");
})

// fs.rm("notes.txt", (err) => {                              // remove the file
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File notes.txt successfully removed");
// })