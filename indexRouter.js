const http =require("node:http")

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{
            "content-type": "text/plain"
        })
        res.end("home page")
    }else if(req.url==='/about'){
        res.writeHead(200,{
            "content-type":"text/plain"
        })
        res.end("about page")
    }else if(req.url==='/api'){
        res.writeHead(200,{
            "content-type": "application/json"
        })
        res.end(JSON.stringify({
            fname:"shireen",
            lname:"nisham"
        }))
    }else{
        res.writeHead(404)
        res.end("page not found")
    }
})
server.listen(3000,()=>{
    console.log("server running");
})