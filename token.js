var jwt = require('jsonwebtoken');

var generateToken = () => {
    var issuedAt = Math.floor(Date.now() / 1000);
    var payload = {
        iss: 'user:11673879:778',
        jti: Math.random().toString(),
        iat: issuedAt,
        exp: issuedAt + 60,
    };
    var secret = '140598b1138dadb26d7845f8041cbcfd67559a12c956e2cf4219dea2683ba806';  // store this securely.
    var token = jwt.sign(payload, secret, {
        algorithm: 'HS256',  // HMAC-SHA256 signing algorithm
    });
return token;
}

module.exports = {
generateToken
};
