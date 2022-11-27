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


// /api/user DELETE 파라미터를 전달 받아 조회한다.
router.delete('/user', (req, res) => {
    const { email, userid } = req.query;

    console.log(req.query)

    if(email === "sentron@email.com" && userid === "sentron") {
        res.send({result: "success"})
    } else {
        res.send({result: "fail"})
    }
});

const array = [
    {
      no: 1,
      title: "에듀윌",
      subtitle: "🚨기간한정 특별 이벤트🚨 초시생 필수템, 만화입문서 무료배포!",
      tags: "#합격자수1위 #에듀윌 #공인중개사",
      url: "EDUWILL.NET",
      text: "입문교재 선착순 무료신청☞",
      image: "/images/game-1.jpg",
      like: 1,
      comment: ["안녕하세요"]
    },
    {
      no: 2,
      title: "코리아아이티",
      subtitle: "🚨기간한정 특별 이벤트🚨 우리 모두 화이팅합시!!!!",
      tags: "#대한민국 #강남구 #역삼동",
      url: "KOREAIT.NET",
      text: "동영상 무로 제공☞",
      image: "/images/game-2.jpg",
      like: 2,
      comment: ["반갑습니다."]
    }
]

// /api/user DELETE 파라미터를 전달 받아 조회한다.
router.get('/home', (req, res) => {
    // console.log(req.query)

    res.send({result: array})
});

router.put('/home/like', (req, res) => {
    console.log(req.body)
    const {no, like} = req.body

    // console.log(array)
    const item = array.find(a => a.no === no)
    item.like = item.like + like
    // console.log(item)

    res.send({result: item})
});

router.put('/home/comment', (req, res) => {
    console.log(req.body)
    const {no, comment} = req.body

    // console.log(array)
    const item = array.find(a => a.no === no)
    // console.log(item)

    item.comment.push(comment)
    // console.log(item)

    res.send({result: item})
});

router.delete('/home/comment', (req, res) => {
    console.log(req.query)
    const {no, index} = req.query

    // console.log(array)
    const item = array.find(a => a.no === Number(no))
    // console.log(item)
    
    item.comment.pop(index)
    // console.log(item)

    res.send({result: "success"})
});

module.exports = router;