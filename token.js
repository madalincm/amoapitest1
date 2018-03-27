var jwt = require('jsonwebtoken');
const users = require('./users.js');

var generateToken = () => {
    var issuedAt = Math.floor(Date.now() / 1000);
    var payload = {
        iss: users.users.admin.iss,
        jti: Math.random().toString(),
        iat: issuedAt,
        exp: issuedAt + 60,
    };
    var secret = users.users.admin.secret;  // store this securely.
    var token = jwt.sign(payload, secret, {
        algorithm: 'HS256',  // HMAC-SHA256 signing algorithm
    });
return token;
}

module.exports = {
generateToken
};