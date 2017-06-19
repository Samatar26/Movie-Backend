const test = require('tape');
const server = require('./../src/server.js');

test('Test for Travis', t => {
  t.pass('Passing test');
  t.end();
});

test('/latest route', t => {
  const options = {
    url: '/latest',
    method: 'GET',
  };

  server.inject(options, res => {
    t.equal(res.statusCode, 200, 'statusCode should equal 200');
    t.end();
  });
});

test('/search route', t => {
  const options = {
    url: '/search',
    method: 'POST',
    payload: { searchTerm: 'wonder' },
  };

  server.inject(options, res => {
    t.equal(res.statusCode, 200, 'statusCode should equal 200');
    t.end();
  });
});
