const { number } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const treatmentSchema = new Schema({

    name: {
        type: String,
    },
    price: {
        type: String,
    },
    image: {
        type: String,
    },
})

module.exports = mongoose.model('Treatment', treatmentSchema)