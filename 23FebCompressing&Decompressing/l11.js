const zlib = require('zlib');

//example data
const input = "Hello, World!"

//compress the data
zlib.gzip(input,(err,compressedData)=>{

    if(err){
        console.log("error compressing data: ",err);
        
        return;
    }
    console.log(compressedData);

    //decompressing data
    zlib.gunzip(compressedData,(err,decompressedData)=>{
        if(err){
            console.log("Error decompressing data: ",err);
            return;
        }
        console.log("Decompressed Data: ", decompressedData);
        console.log(decompressedData.toString());
    })
})