const router = require('express').Router();
const Users = require('./auth-model')
const blocker = require('./authenticate-middleware')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
  // implement registration
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash

  Users.add(user)
    .then(person => {
      res.status(200).json(console.log(person))
    })
    .catch(err => res.send({message: 'WHAT ARE YOU DOING!?'}))

});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
