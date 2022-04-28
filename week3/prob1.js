const fs = require('fs');
const http = require('http');
const moment = require("moment");


const server = http.createServer((req,res) => {
    if(req.url == '/timer'){
        let date,time
        let now = moment();
        date = now.format('YYYY-MM-DD');
        time = now.format('hh:mm:ss')
        console.log(date+' '+time)
        res.write('<p>'+date+' '+time+'<p>')
        res.end
    }
    else{
        res.write('<p>hi<p>')
        res.end
    }
});
server.listen(8080)

server.on('listening',()=>{
    console.log("server running")
})

server.on('error',(error)=>{
    console.log("error!!",error)
})

// let date,time
// let now = moment();
// date = now.format('YYYY-MM-DD');
// time = now.format('hh:mm:ss')
// console.log(date+' '+time)