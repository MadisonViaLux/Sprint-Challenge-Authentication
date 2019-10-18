/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  res.status(401).json({ you: 'shall not pass!' });
};
