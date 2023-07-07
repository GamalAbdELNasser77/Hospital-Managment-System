const { number } = require('joi');
const mongoose = require('mongoose')
Schema = mongoose.Schema;
doctorSchema = new Schema({
    image: String,
    name: String,
    title: String,
    about: String,
    rate: String,
    views: String,
    clinicName: String,
    location: String,
    waitingTime: String,
    price: String,
    phone: String
}
)
doctor = mongoose.model('Doctor', doctorSchema);
module.exports = doctor;


