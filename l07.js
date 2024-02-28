// const http = require('http');
// const fs = require('fs');

// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         const readableStream = fs.createReadStream('example.txt',{encoding:'utf-8',highWaterMark: 64});
//        let data = "";

//         readableStream.on('data',(chunk)=>{
//             data = data + chunk;
//             console.log('succesffuly recevied data');
            
            

            
//         })

//         readableStream.on('end',()=>{
//             const writeableStream = fs.createWriteStream('example2.txt');
//             writeableStream.write(data);
//             console.log('written successfully');
//             writeableStream.end();


//         })

       

//     }

// }).listen(4000,()=>{
//     console.log('server up and running on 4000');
// })

//above code is working fine but below is a better and more effecient method from faculty


const fs = require('fs');

const readableStream = fs.createReadStream('example.txt','utf-8');

const writableStream = fs.createWriteStream('example2.txt');

//Pipe the data from the readable stream to the writable stream

readableStream.pipe(writableStream);

//listen for the finsih event on the writeable stream

writableStream.on('finish',()=>{
    console.log('Data piped successfully from source to destination ');
});




