var path = require('path');
var pkg = require('./package.json');
var assert = require('assert');
var module_path = path.join(
     path.relative(__dirname,pkg.binary.module_path),
     pkg.binary.module_name + '.node');
var app = require('./'+module_path);

assert.ok(app);
assert.equal(app.hello(),"hello");