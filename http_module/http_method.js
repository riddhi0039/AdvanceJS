import http from "http";
import fs from "fs";

const data = fs.readFileSync("config.json", "utf-8");

// parse and stringify
const server = http.createServer((req, res) => {
    console.log("server is created");
    console.log(req.url);
    if (req.url === "/") {
        res.end("Home page");
    }
    else if (req.url=="/config"){
        console.log('read data: ${data}');
        res.end(data);
    }else {
        res.end("Page does not exist")
    }
    // res.end(JSON.stringify({
    //     name: "Riddhi",
    //     age: 20
    // }));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    // res.writeHead(200,{
    //     "Content-Type": "text/plain",
    //     "custom-header": "Hello ECE"
    // })
    res.end("WWelcome")
});

server.listen(3000, "127.0.0.1", () => {
    console.log('Server is running on port 3000');
})
//GET Method: we will use this method to get data from the server
//POST Method: we will use this method to send data to the server
//PUT Method: we will use this method to update the data on the server
// PATCH Method: we will use this method to partially update the data on the server
// DELETE Method: we will use this method to delete the data from the server

