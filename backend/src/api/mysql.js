const mysql = require('mysql')

const conn = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '1234qwer',
  database: 'facebook',
}

const Maria = {}

Maria.selectUsers = (params, callback) => {
  // 1. DB 커넥션 생성
  const connection = mysql.createConnection(conn)

  // 2. DB 접속 시작
  connection.connect()

  // 3. DB 쿼리(사용자 정보 가져오기)
  const sql = 'SELECT * FROM USERS'
  //   console.log(sql);

  connection.query(sql, (err, results, fields) => {
    if (err) {
      console.trace(err)
    }
    // console.log(results)

    // 4. DB 접속 종료
    callback(results)

    connection.end()
  })
}

// Maria.findUser = (params, callback) => {
//   // 1. DB 커넥션 생성
//   const connection = mysql.createConnection(conn)

//   // 2. DB 접속 시작
//   connection.connect()

//   // 3. DB 쿼리(사용자 정보 가져오기)
//   const { userid, password } = params
//   const sql =
//     ' SELECT * FROM USERS WHERE ' +
//     ` userid = '${userid}' and password = '${password}' `
//   console.log(sql)

//   connection.query(sql, (err, results, fields) => {
//     if (err) {
//       console.trace(err)
//     }
//     // console.log(results)

//     // 4. DB 접속 종료
//     callback(results)

//     connection.end()
//   })
// }

Maria.findUser = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { userid, password } = params
    const sql =
      ' SELECT * FROM USERS WHERE ' +
      ` userid = '${userid}' and password = '${password}' `
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results)
    })
  })
}

Maria.checkUser = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { userid } = params
    const sql = ` SELECT * FROM USERS WHERE userid = '${userid}' `
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results[0] ? userid : null)
    })
  })
}

Maria.insertUser = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { userid, password, email, year, month, day, gender } = params
    const birthday = year + month + day
    const sql =
      ` INSERT INTO USERS (userid, password, email, birthday, gender, createtime, updatetime) VALUES(` +
      ` '${userid}', '${password}', '${email}', '${birthday}', '${gender}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results)
    })
  })
}

Maria.findAccountid = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { email } = params
    const sql = ` SELECT * FROM USERS WHERE email = '${email}' `
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results[0] ? results[0] : null)
    })
  })
}

Maria.deleteUser = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { userid, email } = params
    const sql = ` DELETE FROM USERS WHERE userid = '${userid}' and email = '${email}' `
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      console.log(results)
      console.log(fields)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results.affectedRows === 1 ? true : false)
    })
  })
}

Maria.selectHome = (params, callback) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const sql = 'SELECT * FROM HOME'
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results)
    })
  })
}

Maria.updateLike = (params, callback) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    const {homeid, like} = params;
    // 3. DB 쿼리(사용자 정보 가져오기)
    const sql = `UPDATE home SET likecount='${like}' WHERE homeid='${homeid}'`
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results.affectedRows === 1 ? true : false)
    })
  })
}

Maria.findHome = (params, callback) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const {homeid} = params;
    const sql = `SELECT * FROM HOME WHERE homeid = '${homeid}'`
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results[0] ? results[0] : null)
    })
  })
}

Maria.insertComment = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { homeid, cmtid, text } = params
    const sql = ` INSERT INTO COMMENT (homeid, text) VALUES(` 
              + ` '${homeid}', '${text}') `
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results)
    })
  })
}

Maria.selectComment = (params, callback) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const {homeid} = params;
    const sql = `SELECT * FROM COMMENT WHERE homeid = '${homeid}'`
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      // console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results ? results : null)
    })
  })
}

Maria.deleteComment = (params) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    // 3. DB 쿼리(사용자 정보 가져오기)
    const { cmtid } = params
    const sql = ` DELETE FROM COMMENT WHERE cmtid = '${cmtid}' `
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      console.log(results)
      console.log(fields)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results.affectedRows === 1 ? true : false)
    })
  })
}

Maria.updateComment = (params, callback) => {
  return new Promise((resolve, reject) => {
    // 1. DB 커넥션 생성
    const connection = mysql.createConnection(conn)

    // 2. DB 접속 시작
    connection.connect()

    const {cmtid, text} = params;
    // 3. DB 쿼리(사용자 정보 가져오기)
    const sql = `UPDATE comment SET text='${text}' WHERE cmtid='${cmtid}'`
    console.log(sql)

    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.trace(err)
        reject(err)
      }
      console.log(results)

      // 4. DB 접속 종료
      connection.end()

      resolve(results && results.affectedRows === 1 ? true : false)
    })
  })
}

module.exports = Maria
