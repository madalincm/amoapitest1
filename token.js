var jwt = require('jsonwebtoken');
const users = require('./users.js');
console.log(users.users[0].iss);

var generateToken = () => {
    var issuedAt = Math.floor(Date.now() / 1000);
    var payload = {
        iss: users.users[0].iss,
        jti: Math.random().toString(),
        iat: issuedAt,
        exp: issuedAt + 60,
    };
    var secret = users.users[0].secret;  // store this securely.
    var token = jwt.sign(payload, secret, {
        algorithm: 'HS256',  // HMAC-SHA256 signing algorithm
    });
return token;
}

module.exports = {
generateToken
};
