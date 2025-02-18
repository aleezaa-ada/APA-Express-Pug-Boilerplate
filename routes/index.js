const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Express Pug Boilerplate' ,foods: []});
});

router.get('/dynamic/:test', (req, res) => {
  res.render('test',  { title: req.params.test, foods: [] });
})

router.get('/list', (req,res) => {
  const items = [
    {name: "Pizza"}, 
    {name: "Pasta"}, 
    {name: "Noodles"}, 
    {name: "KFC"}, 
    {name: "Sandwich"}
  ]
  res.render('index', {title: "This is a List", foods: items })
})


module.exports = router;
