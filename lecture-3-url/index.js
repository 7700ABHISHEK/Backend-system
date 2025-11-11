const http = require("http");
// const url = require("url");


const server = http.createServer((req, res) => {
    // console.log(url);
    if (req.url === "/") {
        res.end("Hare Krsna");
    }
})

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`);
})