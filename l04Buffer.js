//creating a buffer
const buffer = Buffer.alloc(4)
console.log(buffer);


//writing data to the buffer
buffer.write('Hello','utf-8')

//reading data from the buffer
const data = buffer.toString('utf-8') //converting buffer to string
console.log(data);
console.log(buffer);

const buffer1 = Buffer.from('Hello','utf8')
const buffer2 = Buffer.from('world',"utf-8")

//concatenation of buffers
const concatedBuffer = Buffer.concat([buffer1,buffer2])
console.log(concatedBuffer.toString("utf-8")); //hello world
console.log(concatedBuffer);



