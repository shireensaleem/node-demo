const http =require("node:http")
const fs=require("node:fs")

const server=http.createServer((req,res)=>{
    // const superHero={
    //     firstname:"Shireen",
    //     lastname:"saleem"
    // }
    const name="shireen";
    res.writeHead(200,{
        "content-type" :"text/html"
    })
    //fs.createReadStream('./indexHttp.html').pipe(res)//performance
    let html=fs.readFileSync('./indexHttp.html','utf-8')
    html=html.replace("{{name}}",name)
    res.end(html);
    
})
server.listen(3000,()=>{
    console.log("server running at port 3000");
})




  