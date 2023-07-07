const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    // phoneNumber: {
    //     type: String,
    //     unique: true
    // },
    password: {
        type: String,
        default: 'abc',
    },
    email: {
        type: String,
        default: 'admin@gmail.com',
        required: true,
        unique: true
    },
    birthOfDate: {
        type: Date,
    },
    address: {
        type: String,
        default: 'assiut - alazya',
    },
    photos: [{
        name: String
    }],
    isActive: {
        type: Boolean,
        default: true,

    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    cart: {
        items: {
            type: []
        }
    },
    token: {
        type: String
    }

})

module.exports = mongoose.model('User', usersSchema)