// like we import the libirary in angular same here but we use require insted of import 
const express = require('express');
const app = express();
const routes = require('./routes/routes')
const cors = require('cors');

const _ = require('lodash')
const response = require('./responseClass/response');
app.use(cors());
app.use('/', routes);

app.listen(4500, () => console.log('Express Server is Runing at port 4500'))