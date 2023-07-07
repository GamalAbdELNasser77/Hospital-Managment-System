const express = require('express')
const doctor = require('../models/doctor.Model')
const verifyToken = require('../middlewares/Auth.middleware')
const router = express.Router()
// const jwt = require('jsonwebtoken')
// get all  

router.get('/', verifyToken, async (req, res) => {
    const allDoctor = await doctor.find({})
    res.status(200).json(allDoctor)
})
// get
router.get('/:doctorId', async (req, res) => {

    const id = req.body._id;
    doctor.findById(id, (err, data) => {
        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })

})
//add 
router.post('/create', async (req, res) => {
    try {
        const body = req.body
        // body.password = await bcrypt.hash(body.password, 10)
        // body.email = body.email.toLowerCase();
        const oldDoctor = await doctor.find({
            name: body.name
        });
        if (!oldDoctor) {
            res.status(409).send('name Already exist ')
        } else {
            const newRole = await doctor.create(body)
            res.status(201).send(newRole)
        }
    } catch (error) {
        res.status(400).send(error)
    }


})
//update 
router.put('/:doctorId', async (req, res) => {
    const id = req.params.roleId;
    const body = req.body
    doctor.findByIdAndUpdate(id, {
        $set: body
    }, (err, data) => {

        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })
})
//remove with 
router.delete('/:doctorId', async (req, res) => {
    const id = req.params.roleId;
    const body = req.body
    doctor.findOneAndDelete(id, (err, data) => {

        if (!err) {
            res.status(200).send(data)

        } else {
            res.status(400).send(err)
        }
    })
})

module.exports = router;