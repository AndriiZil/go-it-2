const fs = require('fs');

// fs.writeFile('example.txt', 'New file', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });


// fs.appendFile('example.txt', ' New line added', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('DATA:', data);
// });

// fs.stat('example.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log('Stats:', data);
// });

fs.unlink('example.txt', (err) => {
    if (err) {
        console.log(err);
    }
});
