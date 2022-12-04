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

module.exports = Maria
