'use strict';

var assert   = require('assert');
var execSync = require('child_process').execSync;

describe('app', function () {
  it('should output to the command line', function () {
    var stdout = execSync('node app.js').toString();

    assert.equal(stdout, 'Hello World\n');
  });
  it('should handle direct execution', function () {
    var stdout = execSync('./app.js').toString();

    assert.equal(stdout, 'Hello World\n');
  });
});
