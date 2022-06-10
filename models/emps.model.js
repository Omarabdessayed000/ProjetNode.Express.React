const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmpSchema = new Schema({

    Email : String,
    Lastname : String,
    Firstname : String,
    Phone : String,
    Age : String,

}, { timestamps:true } )







module.exports = mongoose.model('emps', EmpSchema)