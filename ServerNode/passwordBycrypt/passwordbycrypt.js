var bcrypt = require('bcrypt');

const passwordby = (unsecurePlainTextPassword) => {
    if (unsecurePlainTextPassword) {
        let saltRounds = 10
        let salt = bcrypt.genSaltSync(saltRounds)
        let password = bcrypt.hashSync(unsecurePlainTextPassword, salt)
        return password
    }
}


async function checkUser(password, passwordHash) {

    const match = await bcrypt.compare(password, passwordHash);

    return match


}




module.exports = {
    passwordby,
    checkUser
}


