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
    // let firstMarker = find first 4 consecutive characters where all 4 are unique
    // get count of last character of firstMarker

    // split array
    const splitChars = arr[0].split("");
    let startOfPacket;
    let startOfMessage;

    // loop through array looking foward to next 4 chars
    for (let i = 0; i <= splitChars.length; i++) {
        let possibleMarker = splitChars.slice(i, i+4);
        let regexUniqueChars = /^(?:([A-Za-z])(?!.*\1))*$/g
        
        // check against regex, if all unique chars, get current index + 4
         if (regexUniqueChars.test(possibleMarker.join(""))) {
            startOfPacket = i+4;
            break;
         }
    }

        // loop through array looking foward to next 4 chars
        for (let j = 0; j <= splitChars.length; j++) {
            let possibleMarker = splitChars.slice(j, j+14);
            let regexUniqueChars = /^(?:([A-Za-z])(?!.*\1))*$/g
            
            // check against regex, if all unique chars, get current index + 4
             if (regexUniqueChars.test(possibleMarker.join(""))) {
                startOfMessage = j+14;
                break;
             }
        }

    return console.log(startOfPacket, startOfMessage);
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    syncReadFile("input.txt");
});
