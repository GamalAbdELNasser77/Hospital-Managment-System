// set up app
const express = require('express');
const { connect } = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan') // create log file
const joi = require('joi')
const bcrypt = require('bcrypt')
const cors = require('cors')
const app = express()

// controller
const routes = require('./index-routes')


//  middelware 
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(logger('log'))

app.use('/api', routes)


/***
 * @SERVER_RUN_IN_DB_CONFIG 
 * */
//db Connection and config

const mongoose = require('mongoose')

const url = process.env.CONEECTION_URL;
const _PORT = process.env.PORT | 6000
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams).then(() => {
    console.log('Connected to database ')
    app.listen(_PORT, () => {
        console.log(`server run on port ${_PORT}`);
    })
})
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

