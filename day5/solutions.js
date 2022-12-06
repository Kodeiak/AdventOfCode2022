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

    // follow input procedure to rearrange the crates
    // convert columns to arrays...
    // move items between arrays...
    // return last item of each array

    let i = 0;
    let cargoArray = [];
    let topLayer = [];
    // loop through each line
    // do ... treat as cargo ... while ... line != ""
    do {
        let cargoRow = arr[i].split(/\s{4}|\s/);
        for (let j = 0; j < cargoRow.length; j++) {
            // check if row exists in cargoArray
            if (!cargoArray[j]) {
                cargoArray.push([]);
            }
            if (cargoRow[j]) {
                cargoArray[j].unshift(cargoRow[j]);
            }
        }
        i++;
    } while (!arr[i].match(/^(\s[0-9])/));
    // console.log(cargoArray);
    i += 2;
    // then start moveCrates procedure
    do {
        let cargoMoveInput = arr[i].split(/\D+/g);
        let qty = cargoMoveInput[1];
        let from = cargoMoveInput[2] - 1;
        let to = cargoMoveInput[3] - 1;
        // console.log(cargoMoveInput, qty, from, to);
        // move qty
        // from from
            // slice qty from from 
        let cargoInTransit = cargoArray[from].splice(cargoArray[from].length - qty);
        let batchesInTransit = [];

        // console.log(cargoInTransit, cargoInTransit.slice(cargoInTransit.length-3, cargoInTransit.length));
        
        // // loop through cargoInTransit by 3 until all pieces are accounted for
        for (let k = cargoInTransit.length; k > 0; k -= 3) {
            let sliceStart;
            (k - 3) < 0 ?  sliceStart = 0 : sliceStart = k - 3;
            // console.log("sliceStart: ", sliceStart, "\ncargoLength: ", k);
            // console.log("batch in transit is ", cargoInTransit.slice(sliceStart, k));
            batchesInTransit.unshift(cargoInTransit.slice(sliceStart, k));
        }
        console.log(`step ${i} `, batchesInTransit);
        // batchesInTransit.reverse().forEach(item => console.log(item));
        // console.log(cargoArray[to]);
        // cargoArray[to].push(cargoArray[from].splice(cargoArray[from].length - qty + 1)[0]);
        // to to
            // push to to

        i++;
    } while (i < arr.length);
    console.log(cargoArray);
    // cargoArray.forEach(item => topLayer.push(item[item.length - 1][1]));
    // console.log(topLayer.join(""));
    return arr;
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    syncReadFile("input.txt");
});
