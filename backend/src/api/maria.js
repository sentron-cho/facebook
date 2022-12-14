const mysql = require('mysql');

const conn = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234qwer',
    database: 'facebook',
};

const Maria = {};

const queryFunc = (sql) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(conn);
        connection.connect();

        connection.query(sql, (err, results) => {
            if (err) {
                console.trace(err);
                reject(err);
            } else {
                connection.end();
                console.log(results);
                resolve(results);
            }
        });
    });
};

Maria.findAccountid = (params) => {
    return new Promise(async (resolve, reject) => {
        const { email } = params;
        const sql = `select * from users where email='${email}';`;

        const result = await queryFunc(sql);
        resolve(result && result[0] ? result[0] : null);
    });
};

Maria.deleteUser = (params) => {
    return new Promise(async (resolve, reject) => {
        const { userid, email } = params;
        const sql = `delete from users where userid='${userid}' and email='${email}'`;

        const result = await queryFunc(sql);
        resolve(result && result.affectedRows > 0 ? true : false);
    });
};

Maria.checkUser = (params) => {
    return new Promise(async (resolve, reject) => {
        const { userid } = params;
        const sql = `select * from users where userid='${userid}';`;

        const result = await queryFunc(sql);
        resolve(result);
    });
};

Maria.insertUser = (params) => {
    return new Promise(async (resolve, reject) => {
        const { userid, password, email, year, month, day, gender } = params;
        const birthday = year + month + day;
        const sql = `insert into users (userid, password, email, birthday, 
            gender, updatetime, createtime)
            values ('${userid}', '${password}', '${email}', '${birthday}', 
            '${gender}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;

        const result = await queryFunc(sql);
        resolve(result);
    });
};

Maria.selectUsers = (param, callback) => {
    return new Promise(async (resolve) => {
        const sql = 'select * from users';
        const result = await queryFunc(sql);
        resolve(result);
    });
};

Maria['findUser'] = (params) => {
    return new Promise(async (resolve) => {
        const { userid, password } = params;

        const sql =
            ' select * from users where ' + ` userid = "${userid}" and password="${password}"; `;
        const result = await queryFunc(sql);
        resolve(result);
    });
};

Maria.selectHome = (params) => {
    return new Promise(async (resolve) => {
        const sql = `select * from home;`;
        const result = await queryFunc(sql);
        resolve(result);
    });
};

Maria.updateLike = (params) => {
    return new Promise(async (resolve) => {
        const { likecount, homeid } = params;
        const sql = `update home set likecount='${likecount + 1}' where homeid="${homeid}";`;
        const result = await queryFunc(sql);
        resolve(result);
    });
};

Maria.findHome = (params) => {
    return new Promise(async (resolve) => {
        const { homeid } = params;
        const sql = `select * from home where homeid="${homeid}"`;
        const result = await queryFunc(sql);
        resolve(result);
    });
};

// ?????? ?????? ??????
Maria.selectComment = (params) => {
    return new Promise(async (resolve) => {
        const { homeid } = params;
        const sql = `select * from comment where homeid="${homeid}"`;
        const result = await queryFunc(sql);
        resolve(result);
    });
}

// ?????? ??????
Maria.insertComment = (params) => {
    return new Promise(async (resolve) => {
        const { homeid, text } = params;
        const sql = `insert into comment (homeid, text) values('${homeid}', '${text}');`;
        const result = await queryFunc(sql);
        resolve(result);
    });
}

// ?????? ??????
Maria.deleteComment = (params) => {
    return new Promise(async (resolve) => {
        const { cmtid } = params;
        const sql = `delete from comment where cmtid="${cmtid}";`;
        const result = await queryFunc(sql);
        resolve(result);
    });
}

Maria.updateComment = (params) => {
    return new Promise(async (resolve) => {
        const { cmtid, text } = params;
        console.log(params)
        const sql = `update comment set text='${text}' where cmtid="${cmtid}";`;
        const result = await queryFunc(sql);
        resolve(result);
    });
}

module.exports = Maria;
