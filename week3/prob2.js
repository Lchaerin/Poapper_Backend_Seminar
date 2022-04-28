const http = require('http');
let result=0
let eqn=''

const server = http.createServer((req,res) => {
    var prsng1=req.url.indexOf('/',req.url.indexOf('/')+1 )
    var prsng2=req.url.indexOf('/',prsng1+1 )
    var operator=req.url.substring(1,prsng1)
    var num1=Number(req.url.substring(prsng1+1,prsng2))
    var num2=Number(req.url.substring(prsng2+1,))
    console.log(operator)
    //console.log
    if(operator=='add'){
        result=num1+num2
        eqn=num1+' + '+num2+' = '+result
    }
    else if(operator=='sub'){
        result=num1-num2
        eqn=num1+' - '+num2+' = '+result
    }
    else if(operator=='mul'){
        result=num1*num2
        eqn=num1+' * '+num2+' = '+result
    }
    else if(operator=='div'){
        result=num1/num2
        eqn=num1+' / '+num2+' = '+result
    } 
    else{
        eqn='error'
    }
    res.write('<p>'+eqn+'<p>')
    res.end
    console.log(num1)
    console.log(num2)
    console.log(result)
});
// url_prased=req.url.split('/')
// method=url_parased[1]

server.listen(8080)

server.on('listening',()=>{
    console.log("server running")
})

server.on('error',(error)=>{
    console.log("error!!",error)
})
