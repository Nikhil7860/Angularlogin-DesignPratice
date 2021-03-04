const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors());
const _ = require('lodash')
const {router} = require('./Routes/routes');
app.use('/', router)

const crypto = require('crypto')


app.listen(4500, () => console.log('Express Server is running on PORT 4500'))