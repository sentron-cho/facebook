const express = require('express');
const path = require('path');
const app = express();

app.use(express.static( path.join(__dirname, 'public')))
// app.use(express.static( path.join(__dirname, 'res')))

app.get('/',function(request, response){
  response.sendFile( path.join(__dirname, 'public/index.html'))
})

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// 미들웨어를 하나 만들어 보자
const moment = require('moment')
const logger = (req, res, next) => {
  req.reqtime = moment().format("YYYY-MM-DD HH:mm:ss.sss")
  // console.log(`===========> [${req.reqtime}][${req.method}]${req.url} call!`)

  // 콘솔창에 색상을 변경해주는 이스케이브 문자를 추가해보자(마지막엔 원래 상태로)
  console.log('\x1b[32m%s', `===========> [${req.reqtime}][${req.method}]${req.url} call!`, '\x1b[37m')
  req.query && Object.keys(req.query).length && console.log(`    ====> request query = `, req.query)
  req.body && Object.keys(req.body).length && console.log(`     ====> request body = `, req.body)
  // console.log(req)
  next()
}

app.use(logger)

const api = require("./src/api/index");
app.use("/api", api);

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
});