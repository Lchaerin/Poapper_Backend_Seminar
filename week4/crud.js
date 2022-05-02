const http =require('http');
let database= {};
let idx=0;

const server = http.createServer((req,res)=>{
    const url_prased = req.url.split('/');
    const method = req.method;
    
    console.log(method)
    console.log(url_prased)

    if(method == 'POST'){
        database[idx]=url_prased[1];
        idx += 1;
        res.end();
    }
    else if(method == 'GET'){
        if(url_prased[1]==''){
            res.write(JSON.stringify(database));
            res.end();
        }
        else{
            const url_idx=Number(url_prased[1]);
            res.write(database[url_idx]);
            res.end();
        }
    }
    else if(method == 'PUT'){
        const url_idx=Number(url_prased[1]);
        const url_data=url_prased[2];
        database[url_idx]= url_data;
        res.write("put success")
        res.end();
    }
    else if(method=='DELETE'){
        const url_idx=Number(url_prased[1]);
        database[url_idx]=undefined;
        res.write("delete success");
        res.end();
    }
    console.log("database:")
    console.log(database)
});

server.listen(8080)

server.on('listening',()=>{
    console.log("server running")
})

server.on('error',(error)=>{
    console.log("error!!",error)
})