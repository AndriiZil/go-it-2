const path = require('path');
const { promises: fsPromisses } = require('fs');

const pathToFile = '/root/dir/example.pdf';

// console.log(path.parse(__filename));

// console.log(path.extname(__filename)); // .js

// console.log(path.parse(pathToFile));

const jsonPath = path.join(__dirname, '../example.json');

async function readFiles(path) {
    try {
        const file = await fsPromisses.readFile(path, 'utf-8');

        console.log(file);
    } catch (err) {
        console.log(err);
    }
}

readFiles(jsonPath);
