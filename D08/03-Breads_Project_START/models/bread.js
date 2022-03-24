// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://via.placeholder.com/150' }
})

// model and export 
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
