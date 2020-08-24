var jwt = require('jsonwebtoken');
var Response = require('./Response');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) {
    var r = new Response(401);
    return res.json(r.hash);
  }

  token = token.split(' ')[1];

  jwt.verify(token, process.env.ACCEESS_SECRET_TOKEN, function(err, user) {
    if (err) {
      var r = new Response(403);
      return res.json(r.hash);
    }
    req.user = user;
    next();
  });
}

module.exports = verifyToken;