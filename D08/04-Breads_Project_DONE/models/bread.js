// require mongoose 
const mongoose = require('mongoose')
const breads = require('../controllers/breads_controller')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
      type: String,
      enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}

//static
breadSchema.static.bakersBreads = function (inputBaker) {
  console.log(inputBaker);
  return this.find({baker: inputBaker});
}

// model and export 
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread
