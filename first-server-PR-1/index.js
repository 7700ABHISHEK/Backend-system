const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("<h1>Welcome Home</h1>");
    } else if (req.url === "/about") {
        const about = "Myself Abhishek and i'm Full Stack Web Developer"
        res.end(`<h1>${about}</h1>`);
    } else if (req.url === "/skills") {
        const skills = "HTML, CSS, JS"
        res.end(`<h1>My skills are : ${skills}</h1>`);
    } else if (req.url === "/portfolio") {
        const port = "and Here are some of my works";
        res.end(`<h1>My Portfolio ${port}</h1>`);
    } else if (req.url === "/journey") {
        const journey = "Here is my coding journey how i learnt things";
        res.end(`<h1>${journey}</h1>`);
    } else {
        res.end("See You Soon...");
    }

    let log = `Date: ${new Date().toLocaleString()} URL : ${req.url}\n`

    fs.appendFile("./logs.txt", log, (err) => {
        if (err) {
            console.log(err);
        }
    })
})

const PORT = 8000;

server.listen(PORT, (err) => {
    console.log(`server is running on ${PORT}`);
})