const {readFileSync, promises: fsPromise} = require("fs");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});



function syncReadFile(filename) {
    const contents = readFileSync(filename, "utf-8");

    const arr = contents.split(/\n/g);

    console.log(arr);

    return arr;
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    syncReadFile("input.txt");
});
