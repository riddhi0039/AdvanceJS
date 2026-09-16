const fs = require("fs");
// const watcher = fs.watchFile("intro.txt", (curr, prev) => {
//     console.log("Current ", curr);
//     console.log("Previous", prev);
// })

// const watcher = fs.watchFile("intro.txt", (curr, prev) => {
//     console.log("Current ", curr.birthtime.toISOString());
//     console.log("Previous", prev.birthtime.toISOString());
// });
const watcher = fs.watchFile("intro.txt", {interval: 500}, (curr, prev) => {
    console.log("Current ", curr.birthtime.toISOString());
    console.log("Previous", prev.birthtime.toISOString());
});
