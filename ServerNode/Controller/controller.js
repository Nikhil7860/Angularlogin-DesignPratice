const response = require('../ResponseClass/response')
const { myquery } = require('../databaseConnection/databaseConnection')
const _ = require('lodash')

const validator = require('express-validator');
const { passwordby } = require('../passwordBycrypt/passwordbycrypt')
const { checkUser } = require('../passwordBycrypt/passwordbycrypt');
var bcrypt = require('bcrypt');

const { mail } = require('../Email/email')




const registerForLogin = async (req, res) => {
    try {
        var registerId
        registerId = _.pick(req.body, ["id", "firstname", "lastname", "email", "password", "phone"])
        let email = `select email from register where email ='${registerId.email}'`
        console.log(email)
        let check = await myquery(email)

        if (check.length > 0) {

            throw ('email already Registered');
        }
        let add = `Insert into register (firstname,lastname,email,password,phone) values ('${registerId.firstname}','${registerId.lastname}','${registerId.email}','${passwordby(registerId.password)}','${registerId.phone}')`
        let datas = await myquery(add);
        console.log(datas, 'here')

    }
    catch (e) {
        res.send(e);
    }
}


const login = async (req, res) => {


    var login
    login = _.pick(req.body, ["email", "password"]);
    let email = `select email from register where email ='${login.email}'`
    let pass = `select password from register where email ='${login.email}'`
    let check = await myquery(email);
    let check1 = await myquery(pass);
    let checkPassword = await checkUser(login.password, check1[0].password);
    res.send(checkPassword);

}
const select = async (req, res) => {

    let dataInRegisterTable = await myquery('SELECT * FROM register')
    res.send(dataInRegisterTable);
}


const update = async (req, res) => {
    console.log(req.body)
    var update
    update = _.pick(req.body, ["id", "firstname", "lastname", "email", "password", "phone"]);
    let updateQuery = `UPDATE register SET firstname='${update.firstname}', lastname='${update.lastname}', email='${update.email}',password='${passwordby(update.password)}', phone='${update.phone}' WHERE id='${update.id}';`
    // let data = await myquery(updateQuery, [update.firstname, update.lastname, update.email, update.password, update.phone, update.id])
    console.log(updateQuery)
    let data = await myquery(updateQuery)
    console.log(data, 'in update ')
    res.send(data)
}


const deleted = async (req, res) => {

    var del

    del = _.pick(req.body, ["id"])

    let deleted = await myquery(`DELETE FROM register where id ='${del.id}'`)
    console.log(deleted)
}


const logout = async (req, res) => {

}


const forgotPass = async (req, res) => {

    var forgot
    forgot = _.pick(req.body, ["email", "password"])
    await mail(forgot.email)
    let forgotPassword = `UPDATE register SET password='${forgot.password}' WHERE email='${forgot.email}';`
    let password = await myquery(forgotPassword)
    console.log(password)
    res.send('Email sent')
}



module.exports = {
    select,
    registerForLogin,
    login,
    update,
    deleted,
    logout,
    forgotPass
}