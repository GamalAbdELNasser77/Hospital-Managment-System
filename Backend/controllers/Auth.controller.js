const express = require('express')
const user = require('../models/user')
const router = express.Router()


router.post('/login', async (req, res) => {
    console.log(req.body);
    const body = {
        email: req.body.email,
        password: req.body.password
    }

    const isAdmin = await user.findOne({
        email: body.email
    })

    if (isAdmin) {

        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(body.password, isAdmin.password);
        if (validPassword) {
            // const token = await jwt.sign({
            //         userId: user._id,
            //         email: body.email
            //     },
            //     process.env.TOKEN_KEY, {
            //         expiresIn: "2h",
            //     }
            // );
            // save user token
            // isAdmin.token = token;
            res.status(200).send(isAdmin);
        } else {
            res.status(400).json({
                error: "Invalid Password"
            });
        }
    } else {
        res.status(401).json({
            error: "User does not exist"
        });
    }

})


router.post('/register', async (req, res) => {
    try {
        const body = req.body
        body.password = await bcrypt.hash(body.password, 10)
        body.email = body.email.toLowerCase();

        console.log("body", body);

        const oldAdmin = await user.find({
            email: body.email
        });
        console.log("oldadmin", oldAdmin);
        if (!oldAdmin || oldAdmin == null || oldAdmin == []) {
            console.log(oldAdmin)
            res.status(409).send('user Already exist , please login')
        }

        const newAdmin = await user.create(body)
        // console.log("sssssss", newAdmin);
        // // Create token
        // const token = await jwt.sign({
        //         userId: newAdmin._id,
        //         email: body.email
        //     },
        //     process.env.TOKEN_KEY, {
        //         expiresIn: "2h",
        //     }
        // );
        // newAdmin.token = token;
        // console.log("fffffffff", newAdmin);

        res.status(201).send(newAdmin)
    } catch (error) {

        res.status(400).send(error)


    }


})