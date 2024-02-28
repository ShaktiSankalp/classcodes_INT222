const fs = require("fs");

//create a readable stream with a smaller chunk eg 64 bytes
const readableStream = fs.createReadStream('example.txt',{encoding:'utf-8',highWaterMark: 64});

//listen for the data event which indicates that a chunk of data is available 
readableStream.on('data',(chunk)=>{
    console.log("Received chunk of data");
    console.log(chunk);
});

readableStream.on('end',()=>{
    console.log(('Finished reading data from the file'));
});

readableStream.on('error',()=>{
    console.log('Error reading data: ', err);
});