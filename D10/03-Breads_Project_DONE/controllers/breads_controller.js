const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

// INDEX
breads.get('/', async (req, res) => {
  const foundBakers = await Baker.find().lean()
  const foundBreads = await Bread.find().limit(2).lean()
  res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
  })
})

// NEW
breads.get('/new', (req, res) => {
  Baker.find()
      .then(foundBakers => {
          res.render('new', {
              bakers: foundBakers
          })
    })
})

// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body).then(() => {
    res.redirect('/breads')
  }).catch(err => {
    res.render('400')
  })
})

breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('edit', {
        bread: foundBread
      })
    })
    .catch(err => {
      res.render('404')
    })
})

breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
        console.log(foundBread);
        res.render('show', {
            bread: foundBread
        })
      })
      .catch(err => {
        res.send('404')
      })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/breads/${req.params.id}`) 
    })
})

// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      console.log(deletedBread);
      res.status(303).redirect('/breads')
    })
})

// SEED
breads.get('/data/seed', (req, res) => {
  Baker.find().then(bakers => {
    console.log(bakers);
    bakers.forEach(b => {
      console.log(b.id);
      Bread.create({
        name: `Rye ${b.name}`,
        hasGluten: true,
        image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        baker: b.id
      });
    });
  })
})

// Assign Breads With A Null Baker A Baker
breads.get('/data/update/baker', (req, res) => {
  const validBakers = ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'];
  // use math.random to grab random baker
  Bread.updateMany({baker: null}, {baker: validBakers[0]}).then(updatedBread => {
    console.log(updatedBread);
    res.redirect('/breads');
  });
})

module.exports = breads
