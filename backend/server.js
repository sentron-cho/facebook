const express = require('express');
const path = require('path');
const app = express();

app.use(express.static( path.join(__dirname, 'public')))

app.get('/',function(request, response){
  response.sendFile( path.join(__dirname, 'public/index.html'))
})

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

const api = require("./src/api/index");
app.use("/api", api);

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
});