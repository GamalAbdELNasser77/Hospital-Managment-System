const express = require('express')

const router = express.Router()
const user = require('./controllers/user.controller')
const doctor = require('./controllers/doctor.controller')
const treatment = require('./controllers/treatment.controller')

const Auth = require('./middlewares/Auth.middleware')
const verifyToken = require('./middlewares/Auth.middleware')
const env = require('dotenv').config()

// router.use(Auth)
router.use('/user', user)
router.use('/doctor', doctor)
router.use('/treatment', treatment)
// router.use('/auth', role)

module.exports = router