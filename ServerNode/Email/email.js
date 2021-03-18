

const nodemailer = require('nodemailer');





const mail = async (to) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,

        auth: {
            user: testAccount.user,
            pass: testAccount.pass

        }
    });

    let info = await transporter.sendMail({
        from: 'angularfullstack626@gmail.com', // sender address
        to: 'abhishekbarman.fourbrick@gmail.com',
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log(info);
    console.log("Message sent: %s", info.messageId);
}


module.exports = {

    mail
}