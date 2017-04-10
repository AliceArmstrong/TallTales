import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

var http = require('http');

// This is just an example HTTP server. Use your own application here.
var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hello, Mocha!');
});

// listen strats the server on the given port.
exports.listen = function(port) {
	console.log('Listening on: ' + port);
	server.listen(port);
};

// close destroys the server.
exports.close = function() {
	server.close();
};

if (Meteor.isServer) {
  describe('HTTP Server Test', function() {
    before(function() {
      server.listen(3000);
    });

    after(function() {
      server.close();
    });

    describe('/', function() {
      it('should be Hello Mocha!', function(done) {
        http.get('http://localhost:3000', function(response) {
          assert.equal(response.statusCode, 200);

          var body = '';
          response.on('data', function(d) {
            body += d;
          });

          response.on('end', function() {
            assert.equal(body, 'Hello, Mocha!');
            done();
          });
        });
      });
    });
  });
};
