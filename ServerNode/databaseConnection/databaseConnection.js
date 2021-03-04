const { makeDb } = require('mysql-async-simple');
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql@2012',
    database: 'EmployeeDB',
    port: 3306,
    multipleStatements: true
});
const db = makeDb();

const myFun = async () => {
    await db.connect(connection);

}

const myquery = async (query) => {

    try {
        const users = await db.query(connection, query);
        return users
    } catch (e) {
        // handle exception
    }

}


module.exports = {
    myFun,
    db,
    myquery
}