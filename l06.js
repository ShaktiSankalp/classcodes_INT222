//writing data

const fs = require('fs');

//create a writable stream to write data to a file
const writeableStream = fs.createWriteStream('output.txt');

const data = 'hello, world';

writeableStream.write(data);
//writeableStream.write(chunk);

//end the writableStream to indicate that no more data will be written
writeableStream.end();

