var newman = require('newman');
const token = require('./token.js');

var generatedToken = token.generateToken();
console.log("token from app.js", generatedToken);

newman.run({
  collection: require('./addons.allizom.org.postman_collection'),
  globals: {
    "id": "146e52f0-fd32-4814-8e58-8a3c0f4d5eb7",
    "name": "My Workspace Globals",
    "values": [
      {
        "key": "MOZILLA_TOKEN",
        "value": "JWT " + generatedToken,
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