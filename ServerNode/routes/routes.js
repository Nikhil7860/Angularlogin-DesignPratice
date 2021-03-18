
const controllers = require('../Controller/controller');
const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }));
router.use(bodyparser.json());
const passport = require('passport')



router.post('/register', controllers.registerForLogin);

router.post('/login', controllers.login)

router.get('/getUser', controllers.select)

router.put('/update', controllers.update)

router.delete('/delete', controllers.deleted)

router.post('/logout', controllers.logout)

router.put('/forgotPass', controllers.forgotPass)

module.exports = {
    router
}