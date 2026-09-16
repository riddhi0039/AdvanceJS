import fs from 'fs'
const readStream = fs.createReadStream("input.txt",{encoding: "utf-8"});
readStream.on("data", (chunk) => {
    console.log("Data Received");
    console.log("Data: ", chunk)
})

readStream.on("end", () => {
    console.log("END");
})

readStream.on ("error", (error)=>{
    console.log("Error:", error.message)
})

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello World\n");

writeStream.on("finish", () => {
    console.log("data has been written");
})

writeStream.on("error", (error) => {
    console.log("Error: ", error.message);
})

readStream.pipe(writeStream);