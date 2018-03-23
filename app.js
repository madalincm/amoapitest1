var jwt = require('jsonwebtoken');
var newman = require('newman');

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

newman.run({
  collection: require('./addons.allizom.org.postman_collection'),
  globals: {
    "id": "856c0eaa-5138-d095-ab16-85ee57c35739",
    "name": "Postman Globals",
    "values": [
      {
        "key": "MOZILLA_TOKEN",
        "value": token,
        "description": "",
        "type": "text",
        "enabled": true
      }
    ],
    "_postman_variable_scope": "globals",
    "_postman_exported_at": "2018-03-23T10:45:51.079Z",
    "_postman_exported_using": "Postman/5.5.3"
  },
  reporters: 'cli'
}, function (err) {
  if (err) { throw err; }
  console.log('collection run complete!');
});