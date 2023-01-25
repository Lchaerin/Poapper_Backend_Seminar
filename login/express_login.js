const express = require('express');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const { use } = require('../week6/food');

var db =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'cherry3944',
  database:'user'
});

const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded())


app.get('/', (req, res) => {
  console.log(req.cookies)
  res.sendFile(__dirname + "/view/index.html")
})

app.get('/secret', (req, res) => {
  const cookie_id = req.cookies.id;
  const cookie_pw = req.cookies.password;

  db.query(`SELECT * FROM user WHERE login_id='${cookie_id}'`, (err, data) =>{
    const dataset2= JSON.stringify(data)
   const users2=JSON.parse(dataset2)[0]
    if(users2!=undefined){
      if(users2.login_pw==cookie_pw){
      res.sendFile(__dirname + "/view/secret_file.html")
    }
  }else {
    res.redirect(301, "/");
  }
  });
})

app.post('/login', (req, res) => {
  const body = req.body;
  const query_id = body.id;
  const query_pw = body.password

  // 입력한 id와 pw가 동일해서 쿠키 발급
  db.query(`SELECT * FROM user WHERE login_id='${query_id}'`, (err, data) =>{
   const dataset= JSON.stringify(data)
   const users=JSON.parse(dataset)[0]
   console.log(users.login_pw)
    if(users.login_pw==query_pw){
      console.log("Login success")
    res.cookie('id', query_id);
    res.cookie('password', query_pw);
  }else {
    console.log("Login failed...")
  }
  res.redirect(301, "/secret");
  });
  
})

app.post('/signup', (req, res) => {
  const body = req.body;
  const query_id2 = body.id;
  const query_pw2 = body.password

  // 입력한 id와 pw가 동일해서 쿠키 발급
  db.query(`INSERT INTO user (login_id,login_pw) VALUES ('${query_id2}','${query_pw2}');`, (err, data) =>{
    res.cookie('id', query_id2);
    res.cookie('password', query_pw2);
    res.redirect(301, "/secret");
  });
  
})

app.listen(8080, () => console.log("Server is listening on 8080 port..."));