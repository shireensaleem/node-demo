//fsmodule stream
const fs=require("node:fs")

const readableStream=fs.createReadStream('./file.txt',{
    encoding:"utf-8",
    highWaterMark:4

})
const writableStream=fs.createWriteStream('./file2.txt')

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writableStream.write(chunk)


})




//fs module promise



// const fs=require("node:fs/promise");

// console.log("first");

// fs.readFile("text.txt","utf-8")
// .then(data=>console.log(data))
// .catch((error)=>console.log(error)) 

// console.log("second");


// const fs = require("node:fs")
// console.log("first");

// const fileContents=fs.readFileSync('./file.txt',"utf-8")
// console.log(fileContents);
// console.log("second");


// const asyncFileContents =fs.readFile('./file.txt' , "utf-8",(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }

// })
// console.log("third");

// fs.writeFileSync('greet.txt',"hey greet shireen")
// fs.writeFile('greet.txt'," hey nisham" ,
// {flag:"a"},(err)=>{
//     console.log(err);
// })