const express = require("express");
const router = express.Router();

// /api/login POST 데이터를 전달받는다.
router.post('/login', (req, res) => {
    console.log("===========> [POST]/api/login call!")

    const {userid, password} = req.body;

    console.log(userid, password)

    if(userid === "sentron" && password === "1234") {
        res.send({result: "success"})
    } else {
        res.send({result: "fail"})
    }
});

// /api/regist POST 데이터를 전달받는다.
router.post('/regist', (req, res) => {
    console.log("===========> [POST]/api/regist call!")

    const {name, userid, password, year, month, day, gender} = req.body;

    console.log(name, userid, password, year, month, day, gender)

    if(name && userid && password && year && month && day && gender) {
        res.send({result: "success"})
    } else {
        res.send({result: "fail"})
    }

    // res.send('로그인을 수행했습니다.'); 
});

// /api/identify GET 파라미터를 전달 받아 조회한다.
router.get('/identify', (req, res) => {
    console.log("===========> [GET]/api/identify call!")

    const { value } = req.query;

    console.log(req.query)

    if(value === "sentron@email.com") {
        res.send({result: "sentron"})
    } else if(value === "aaa@email.com") {
        res.send({result: "aaa123"})
    } else if(value === "bbb@email.com") {
        res.send({result: "bbb123"})
    } else {
        res.send({result: "fail", text: "계정이 존재하지 않습니다."})
    }
});


module.exports = router;