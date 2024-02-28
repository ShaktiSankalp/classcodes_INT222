const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

// http.createServer((req,res)=>{
//     fs.readFile('text.txt',(err,data)=>{
//         if(err){
//             res.end(err);
//         }
//         res.writeHead(200,{'Content-Type': 'text/plain',
//                             'Content-Encoding': 'gzip'
    
//     });
//         zlib.gzip(data,(err,compressedData)=>{
//             if(err){
//                 res.end(err);
//             }else{
                
//                 res.write("success")
//                 res.end(compressedData)
//             }
//         })
//         // res.end()
//     })
// }).listen(3000,()=>{
//     console.log('server running on 3000');
// })






const server = http.createServer((req,res)=>{
    const filePath = 'text.txt';
    const readableStream = fs.createReadStream(filePath);
    res.writeHead(200,{'Content-Type': 'text/plain',
                            'Content-Encoding': 'gzip'
    
    });
    //compressing the file and piping it to the response stream
    readableStream.pipe(zlib.Gzip().pipe(res));

    readableStream.on('error',(err)=>{
        console.log('error reading file: ',err);
        res.statusCode = 500;
        res.end('Internal Server error');
    })
})
server.listen(3000,()=>{
    console.log('server running on 3000');
})