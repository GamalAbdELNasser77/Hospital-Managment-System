const express = require('express')
const router = express.Router()
const treatment = require('../models/treatment.Model')

router.get('/', async function (req, res) {

    treatment.find({}, (err, data) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(data)
        }
    })

})
router.post('/', async function (req, res) {

    treatment.create(req.body, (err, data) => {
        if (err) { res.status(400).send(err) }
        else { res.status(200).send(data) }
    })

})

module.exports = router