var newman = require('newman');
const varGlobals = require('./globals.js');



newman.run({
  collection: require('./addons.allizom.org.postman_collection'),
  globals: varGlobals.globals.madalin,
  reporters: 'cli'
}, function (err) {
  if (err) { throw err; }
  console.log('collection run complete!');
});