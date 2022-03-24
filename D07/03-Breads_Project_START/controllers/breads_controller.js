const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  console.log(Bread)
  const breads = Bread.find()
    .then(foundBreads => {
      console.log(foundBreads);
      res.render('Index', {
        breads: foundBreads,
        title: "My Index Page"
      });
    });
});

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// SHOW
breads.get('/:id', (req, res) => {
  const bread = Bread.findById(req.params.id)
    .then(bread => {
      console.log(bread);
      res.render('Show', { bread: bread});
    }).catch(err => {
      res.send('404');
    });
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.name) {
    res.send('400')
    return
  }
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  const bread = Bread.findById(req.params.id)
    .then(bread => {
      console.log(bread);
      res.render('edit', {
        bread: bread
      });
    }).catch(err => {
      res.send('404');
    });
});

// UPDATE
breads.put('/:id', (req, res) => {
  console.log(req.body)
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.updateOne(req.params.id)
    .then(() => res.redirect(`/breads/${req.params.id}`));
})

module.exports = breads