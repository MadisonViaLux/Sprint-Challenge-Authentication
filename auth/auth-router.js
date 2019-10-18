const router = require('express').Router();
const Users = require('./auth-model')
const generateToken = require('../token/token')
const blocker = require('./authenticate-middleware')
const bcrypt = require('bcryptjs')




router.post('/register', (req, res) => {
  // implement registration
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash

  Users.add(user)
    .then(person => {
      res.status(201).json(person)
    })
    .catch(err => res.status(500).json({message: 'WHAT ARE YOU DOING!?'}))

});


router.post('/login', (req, res) => {
  // implement login
  const {username, password} = req.body

  Users.findBy({ username })
    .first()
    .then(person => {
      if(person && bcrypt.compareSync(password, person.password)){
        const token = generateToken(person)
        res.status(200).json({message: `Hello there ${person.username}`, token})
      } else {
        res.status(401).json({message: 'it 60 scarupts to enter cave claw.. you dont have enough. go away!'})
      }
    })
    .catch(err => res.send({message: 'WHAT ARE YOU DOING NOW!?'}))
});


router.get('/', blocker, (req, res) => {
  Users.find()
      .then(users => res.status(200).json(users))
      .catch(err => res.status(500).json(console.log(err)));
});







module.exports = router;