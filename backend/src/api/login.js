const express = require("express");
const router = express.Router();

// 데이터 받아서 전송 예시 
router.post('/', (req, res) => {
    console.log("===========> [POST]/api/login call!")

    const {userid, password} = req.body;

    console.log(userid, password)

    if(userid === "sentron" && password === "1234") {
        res.send({result: "success"})
    } else {
        res.send({result: "fail"})
    }

    // res.send('로그인을 수행했습니다.'); 
});

module.exports = router;