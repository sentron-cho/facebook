const express = require("express");
const router = express.Router();
const mysql = require("./mysql")

// // /api/login POST 데이터를 전달받는다.
// router.post('/login', (req, res) => {
//     console.log("===========> [POST]/api/login call!")

//     const {userid, password} = req.body;

//     console.log(userid, password);

//     mysql.selectUsers("", (result) => {
//         console.log(result)
//     })

//     if(userid === "sentron" && password === "1234") {
//         res.send({result: "success"})
//     } else {
//         res.send({result: "fail"})
//     }
// });

// router.post('/login', (req, res) => {
//     console.log("===========> [POST]/api/login call!")

//     const {userid, password} = req.body;

//     console.log(userid, password);

//     mysql.findUser({userid, password}, (result) => {
//         console.log("================================")
//         console.log(result)
//         console.log("================================")

//         if(result && result.length > 0) {
//             res.send({result: "success"})
//         } else {
//             res.send({result: "fail"})
//         }
        
//     })
// });

router.post('/login', async (req, res) => {
    console.log("===========> [POST]/api/login call!")

    const {userid, password} = req.body;
    console.log(userid, password);

    const result = await mysql.findUser({userid, password})
    console.log("================================")
    console.log(result)
    console.log("================================")

    if(result && result.length > 0) {
        res.send({result: "success"})
    } else {
        res.send({result: "fail"})
    }
});

// /api/regist POST 데이터를 전달받는다.
router.post('/regist', async (req, res) => {
    console.log("===========> [POST]/api/regist call!")
    console.log(req.body)

    // 중복 체크를 먼저 하자
    const user = await mysql.checkUser(req.body)
    console.log(user)

    // 중복된 사용자면 중복방지를 위해 반환
    if(user) {
        res.send({result: "dup-userid"})
    } else {
        // 중복되지 않은 경우에 회원가입
        const result = await mysql.insertUser(req.body)
        console.log("================================")
        console.log(result)
        console.log("================================")
    
        if(result) {
            res.send({result: "success"})
        } else {
            res.send({result: "fail"})
        }    
    }
});

// /api/identify GET 파라미터를 전달 받아 조회한다.
router.get('/identify', async (req, res) => {
    const { value } = req.query;

    console.log(req.query)

    const user = await mysql.findAccountid({email: value})
    console.log(user)

    if(user) {
        const {userid} = user;
        res.send({result: userid})
    } else {
        res.send({result: "fail", text: "계정이 존재하지 않습니다."})
    }
});


// /api/user DELETE 파라미터를 전달 받아 조회한다.
router.delete('/user', async (req, res) => {
    const { email, userid } = req.query;
    console.log(req.query)

    const result = await mysql.deleteUser(req.query)
    console.log(result)

    if(result) {
        res.send({result: "success"})
    } else {
        res.send({result: "fail"})
    }
});

// /api/user DELETE 파라미터를 전달 받아 조회한다.
router.get('/home', async (req, res) => {
    // console.log(req.query)
    const array = await mysql.selectHome()
    for(let item of array) {
        const comment = await mysql.selectComment(item)
        item['comment'] = comment
    }
    // const list = array.map(async item => {
    //     const comment = await mysql.selectComment(item)
    //     item['comment'] = comment
    //     return item
    // })

    console.log(array)

    res.send({result: array})
});

router.put('/home/like', async (req, res) => {
    console.log(req.body)

    await mysql.updateLike(req.body)
    
    const item = await mysql.findComment(req.body)

    // console.log(item)

    res.send({result: item})
});

// /api/user DELETE 파라미터를 전달 받아 조회한다.
router.get('/home/comment', async (req, res) => {
    // console.log(req.query)
    const array = await mysql.selectComment()
    res.send({result: array})
});

router.put('/home/comment', async (req, res) => {
    console.log(req.body)

    await mysql.insertComment(req.body)
    
    const item = await mysql.selectComment(req.body)

    // console.log(item)

    res.send({result: item})
});

router.delete('/home/comment', async (req, res) => {
    console.log(req.query)

    await mysql.deleteComment(req.query)

    const array = await mysql.selectComment(req.body)
    console.log(array)

    res.send({result: array})
});

module.exports = router;