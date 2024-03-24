
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let cafeSchema = new Schema({
  name: {
    type: String, required: true
  },
  description: {
    type: String,  required: true
  },
  logo: {
    type: Buffer
  },
  location: {
    type: String,  required: true
  },
  employees: {type:Array} 
},{
    collection: 'cafe'
});

module.exports = mongoose.model('cafe', cafeSchema);