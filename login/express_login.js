const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded())

const _id = 'poapper';
const _password = '1986' // 포항공대 개교 기념일입니다 :)

app.get('/', (req, res) => {
  console.log(req.cookies)
  res.sendFile(__dirname + "/view/index.html")
})

app.get('/secret', (req, res) => {
  const cookie_id = req.cookies.id;
  const cookie_pw = req.cookies.password;

  if(cookie_id == _id && cookie_pw == _password){
    res.sendFile(__dirname + "/view/secret_file.html")
  }else{
    res.redirect(301, "/");
  }
})

app.post('/login', (req, res) => {
  const body = req.body;
  const query_id = body.id;
  const query_pw = body.password

  // 입력한 id와 pw가 동일해서 쿠키 발급
  if(query_id == _id && query_pw == _password){
    console.log("Login success")
    res.cookie('id', _id);
    res.cookie('password', _password);
  }else {
    console.log("Login failed...")
  }
  res.redirect(301, "/");
})

app.listen(8080, () => console.log("Server is listening on 8080 port..."));