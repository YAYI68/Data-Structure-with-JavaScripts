const fs = require('fs');

// Asynchronous way of eading through files 
let w = fs.readFile('new2.txt', 'utf8',(err,data) => {
    console.log(data)
});

console.log("Reading files...")