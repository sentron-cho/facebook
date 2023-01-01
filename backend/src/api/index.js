const express = require('express');
const router = express.Router();
const mysql = require('./maria');

// /api/login POST 데이터를 전달 받는다.
router.post('/login', async (req, res) => {
    console.log(req.body);

    const { userid, password } = req.body;

    const results = await mysql.findUser(req.body);
    console.log(results);

    if (results && results.length > 0) {
        res.send({ result: 'success' });
    } else {
        res.send({ result: 'fail' });
    }
});

// /api/login POST 데이터를 전달 받는다.
router.post('/regist', async (req, res) => {
    console.log(req.body);

    // 사용자 아이디 중복체크
    const user = await mysql.checkUser(req.body);
    console.log(user);

    // 중복되었으면 해당하는 코드를 보내자..
    if (user && user.length > 0) {
        res.send({ result: 'dup-userid' });
    } else {
        // 중복되지 않은 경우만 삽입한다.
        const result = await mysql.insertUser(req.body);
        console.log(result);

        if (result) {
            1;
            res.send({ result: 'success' });
        } else {
            res.send({ result: 'fail' });
        }
    }
});

router.get('/identify', async (req, res) => {
    console.log(req.query);

    const { email } = req.query;

    const user = await mysql.findAccountid({ email });
    console.log(user);

    if (user) {
        res.send({ result: user.userId });
    } else {
        res.send({ result: 'fail', text: '계정이 존재하지 않습니다.' });
    }
});

router.delete('/user', async (req, res) => {
    const { email, userid } = req.query;

    const result = await mysql.deleteUser(req.query);
    console.log(result);

    if (result) {
        res.send({ result: 'success' });
    } else {
        res.send({ result: 'fail' });
    }
});

// const array = [
//     {
//         no: 1,
//         title: '에듀윌',
//         subtitle: '🚨기간한정 특별 이벤트🚨 초시생 필수템, 만화입문서 무료배포!',
//         tags: '#합격자수1위 #에듀윌 #공인중개사',
//         url: 'EDUWILL.NET',
//         text: '입문교재 선착순 무료신청☞ 합격자 수 1위 에듀윌 공인중개사',
//         image: '/images/game-1.jpg',
//         likecount: 1,
//     },
//     {
//         no: 2,
//         title: '코리아아이티',
//         subtitle: '🚨기간한정 특별 이벤트🚨 프론트엔드 5개월차 수업!',
//         tags: '#합격자수1위 #코리아아이티 #프론트엔드',
//         url: 'KOREATIT.NET',
//         text: '녹화 동영상 무료 제공!☞ 합격자 수 1위 에듀윌 공인중개사',
//         image: '/images/game-2.jpg',
//         likecount: 2,
//     },
// ];

router.get('/home', async (req, res) => {
    console.log(req.query);

    const array = await mysql.selectHome();
    console.log(array);

    res.send({ result: array });
});

router.put('/home/like', async (req, res) => {
    console.log(req.body);

    // 1. 첫번째 likecount를 업데이트 하는 코드
    await mysql.updateLike(req.body);
    // 2. 업데이트한 데이터를 셀렉트(가져오는) 코드
    const item = await mysql.findHome(req.body);

    res.send({ result: item });
});

// 댓글 목록 가져오기
router.get("/home/comment", async (req, res) => {
    console.log(req.query);

    const array = await mysql.selectComment(req.query);
    res.send({result: array})
})

// 댓글 추가하기
router.post("/home/comment", async (req, res) => {
    console.log(req.body)

    await mysql.insertComment(req.body)
    res.send({result: "success"})
    // const item = await mysql.selectComment(req.body)
    // res.send({result: item})
})

// 댓글 삭제
router.delete("/home/comment", async (req, res) => {
    await mysql.deleteComment(req.query)
    res.send({result: "success"})
})

// 댓슬 편집
router.put("/home/comment", async (req, res) => {
    await mysql.updateComment(req.body)
    res.send({result: "success"})
})

module.exports = router;
