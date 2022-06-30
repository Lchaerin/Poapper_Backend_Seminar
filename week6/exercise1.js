const express = require('express')
const mysql = require('mysql')
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'cherry3944',
  database:'poapper_backend'
});

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Express!");
})

app.listen(8080, () => Console.log("Server is listening on 8080 port..."));

app.get("/book", (req, res) => {
    db.query(`SELECT * FROM books`, (err, data) => {
      if(err) throw err;
      res.write(JSON.stringify(data));
      res.end();
    });
  });