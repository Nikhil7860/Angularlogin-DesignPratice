

let success = (req, res) => {
    return res.json({ status: 200, msg: 'Sucessfully Done' });


}

let successdata = (req, res) => {
    return req.send({status:200,result:res});
}

let failure = (req, res) => {
    return res.json({ status: 500, msg: 'Internal Server Error' });
}


module.exports = {
    successdata,
    success,
    failure
}