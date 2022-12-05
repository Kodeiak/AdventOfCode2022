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
    let fullDupeCount = 0;
    let partialDupeCount = 0;

    console.log(arr);

    // In how many assignment pairs does one range fully contain the other?

    //loop through each pair
    // compare one to the other
    // if one assignment is completely enveloped by partner's assignment, increase count by 1

    // to compare to see if one assignment is encompassed in the other
        // either check to see if beginning and ending digits are >= <= other range
        // or count out numbers and compare full ranges

    for (let i = 0; i < arr.length; i++) {
        let pairs = arr[i].split(",");
        let leftElf = pairs[0].split("-");
        let rightElf = pairs[1].split("-");
        let rangeStartLeft = Number(leftElf[0]);
        let rangeEndLeft = Number(leftElf[1]);
        let rangeStartRight = Number(rightElf[0]);
        let rangeEndRight = Number(rightElf[1]);

        // console.log(rangeStartLeft, rangeEndLeft, rangeStartRight, rangeEndRight);
        // if rangeStartLeft >= rangeStartRight && rangeEndLeft <= rangeEndRight
        // else if rangeStartRight >= rangeStartLeft && rangeEndRight <= rangeEndLeft
        // count++
        if (rangeStartLeft >= rangeStartRight && rangeEndLeft <= rangeEndRight) {
            console.log("left in right", leftElf, rightElf, i);
            fullDupeCount++;
        } else if (rangeStartRight >= rangeStartLeft && rangeEndRight <= rangeEndLeft) {
            console.log("right in left", leftElf, rightElf, i);
            fullDupeCount++;
        }

        // ceck if any dupe
        // if start or end is <> oter start or end
        if ((rangeStartLeft >= rangeStartRight && rangeStartLeft <= rangeEndRight) ||
        (rangeEndLeft >= rangeStartRight && rangeEndLeft <= rangeEndRight) ||
        (rangeStartRight >= rangeStartLeft && rangeStartRight <= rangeEndLeft) ||
        (rangeEndRight >= rangeStartLeft && rangeEndRight <= rangeEndLeft)) {
            partialDupeCount++;
        }
    }

    console.log(fullDupeCount, partialDupeCount);

    return arr;
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    syncReadFile("input.txt");
});

module.exports = {
    syncReadFile
};