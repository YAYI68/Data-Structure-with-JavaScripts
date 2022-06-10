const http = require('http')

const server = http.createServer((req, res)=>{
    const path = req.url
    if (path == '/' || path =='/home'){
        res.writeHead(200,{
            'Content-Type': 'text/html'
        })
        res.end(" <h1> hello world to the world! </h1>") 
        console.log(`${__dirname}`)
    }
    else{
        res.end("Page no Found")
    }
    
})

server.listen(8080,'127.0.0.1',()=>{
    console.log("listening to server")
})