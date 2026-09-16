import http from 'http';
import fs from 'fs';
const homePage = fs.readFileSync("home.html", "utf-8");
const server = http.createServer((req, res) => {
    console.log('Hello World\n');
    console.log(req.url)
    //res.end("Hello from server")
    if (req.url === "/") {
        res.end(homePage.replace("{{%content%}}", "Home page"))
    } else if (req.url === "/about") {
        res.end("Hello from about page")
    } else if (req.url === "/contact") {
        res.end("Hello from contact page")
    } else{
        res.end("Page Not Found")
    }
})

server.listen(3000, "127.0.0.1", () => {     
    console.log('Server is running on port 3000');
})