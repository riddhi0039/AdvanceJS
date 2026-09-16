import http from 'http';
import { readFile } from 'fs';
import { readFileSync } from 'fs';

const data  =readFileSync("index.html", "utf-8");

//Create basic http server
const server = http.createServer((req, res) => {
    console.log('Hello World\n');
    const order ={
        orderid: 10987,
        des: "Delhi",
        source: "Ghaziabad",
        username: "Riddhi"
    }
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, {
        'Content-Type': 'application/json',
        "custom-header": "Hello ECE"
    });
    
    console.log(`${data}`);
   //  res.end(JSON.stringify(order));
})
server.listen(3000, "127.0.0.1", () => {     
    console.log('Server is running on port 3000');
})

// readFile("index.html", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(data);
//     }
// });

//const http = require('http');
// STATUS CODE
    // 200 - OK
    // 201 - Created
    // 400 - Bad Request
    // 401 - Unauthorized
    // 403 - Forbidden
    // 404 - Not Found
    // 500 - Internal Server Error