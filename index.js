const path= require("node:path");

// console.log(path.join("folder1","folder2","index.html"));
// console.log(path.join("/folder1","folder2","index.html"));
// console.log(path.join("/folder1","//folder2","index.html"));
// console.log(path.join("/folder1","//folder2","../index.html"));
// console.log(path.join(__dirname,"data.json"));


console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"data.json"));
















// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));





























// const Superhero=require("./Super-hero")
// console.log(Superhero.getName);
// Superhero.setName("nisham")
// console.log(Superhero.getName());
// const myhero =require('./Super-hero')
// console.log(myhero.getName);
// const superher= require('./Super-hero');
// const batman=new superher ("winwin");
// console.log(batman.getName());

// const math =require('./math')
// const {add,sub} =math;
// console.log(add(5,6));
// console.log(sub(5,6));
// const data = require('./data.json')
// console.log(data.address.pin);
// console.log("hlo  there");

