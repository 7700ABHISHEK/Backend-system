const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end("Welcome Home");
    } else if(req.url === "/about"){
        res.end("About Me");
    } else if(req.url === "/skills"){
        res.end("My skills");
    } else if(req.url === "/portfolio"){
        res.end("My Portfolio");
    } else if(req.url === "/journey"){
        res.end("My Journey");
    } else {
        res.end("See You Soon...");
    }

    let log = `Date: ${new Date().toLocaleString()} URL : ${req.url}\n`

    fs.appendFile("./logs.txt", log, (err) => {
        if(err){
            console.log(err);
        }
    })
})

const PORT = 8000;

server.listen(PORT, (err) => {
    console.log(`server is running on ${PORT}`);
})