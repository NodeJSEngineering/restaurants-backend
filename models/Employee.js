

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String, required: true
      },
      email_address: {
        type: String,  required: true
      },
      phone_number: {
        type: Number, required: true
      },
      gender: {
        type: String,
        enum : ['Male', 'Female'],
        required: true
      },
      CafeName: {
        type: String
      },
      cafeId:{
        type: String
      },
      start_date: {
        type: Date,
        default: Date.now
      },
},

    {
        collection: 'employee',  timestamps: true
    })


module.exports = mongoose.model('employee', employeeSchema)

