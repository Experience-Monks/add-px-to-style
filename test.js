var addPxToStyle = require('./.');
var test = require('tape');


test('check correct values are returned', function(t) {

  t.equal(addPxToStyle('left', 10), '10px');
  t.equal(addPxToStyle('zoom', 232), 232);
  t.end();
});