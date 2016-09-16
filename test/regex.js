'use strict';
/**
 * @file regex test
 * @module regex-safer
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var safe = require('..');
var assert = require('assert');

/*
 * test module
 */
describe('regex', function() {

  var good = [ /\bOakland\b/, /\b(Oakland|San Francisco)\b/i, /^\d+1337\d+$/i,
    /^\d+(1337|404)\d+$/i, /^\d+(1337|404)*\d+$/i,
    RegExp(Array(26).join('a?') + Array(26).join('a')), ];

  var bad = [ /^(a?){25}(a){25}$/,
    RegExp(Array(27).join('a?') + Array(27).join('a')), /(x+x+)+y/,
    /foo|(x+x+)+y/, /(a+){10}y/, /(a+){2}y/, /(.*){1,32000}[bc]/ ];

  var invalid = [ '*Oakland*', 'hey(yoo))', 'abcde(?>hellow)', '[abc' ];

  describe('return as Exception', function() {

    it('should return Exception because input must be a string',
      function(done) {

        assert.throws(function() {

          safe();
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(1);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(1.23);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe([]);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(false);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(/argument must be a string/);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(new Error('foo'));
        }, /argument must be a string$/);
        done();
      });
    it('should return Exception because input is regex is invalid',
      function(done) {

        for (var i = 0, ii = invalid.length; i < ii; ++i) {
          assert.throws(function() {

            safe(invalid[i]);
          }, /Invalid regular expression/);
        }
        done();
      });
    it('should return Exception because input is regex is not sage',
      function(done) {

        for (var i = 0, ii = bad.length; i < ii; ++i) {
          assert.throws(function() {

            safe(bad[i].source);
          }, /regex is invalid or not safe$/);
        }
        done();
      });
    it('should return Null because input is valid', function(done) {

      for (var i = 0, ii = good.length; i < ii; ++i) {
        assert.equal(safe(good[i].source), null);
      }
      done();
    });
  });

  describe('return as Exception, with argument', function() {

    it('should return Exception because input must be a string',
      function(done) {

        assert.throws(function() {

          safe(null, true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(1, true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(1.23, true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe([], true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(false, true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(true, true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(/argument must be a string/, true);
        }, /argument must be a string$/);
        assert.throws(function() {

          safe(new Error('foo'), true);
        }, /argument must be a string$/);
        done();
      });
    it('should return Exception because input is regex is invalid',
      function(done) {

        for (var i = 0, ii = invalid.length; i < ii; ++i) {
          assert.throws(function() {

            safe(invalid[i], true);
          }, /Invalid regular expression/);
        }
        done();
      });
    it('should return Exception because input is regex is not sage',
      function(done) {

        for (var i = 0, ii = bad.length; i < ii; ++i) {
          assert.throws(function() {

            safe(bad[i].source, true);
          }, /regex is invalid or not safe$/);
        }
        done();
      });
    it('should return Null because input is valid', function(done) {

      for (var i = 0, ii = good.length; i < ii; ++i) {
        assert.equal(safe(good[i].source, true), null);
      }
      done();
    });
  });

  describe('return as Boolean', function() {

    it('should return False because input must be a string', function(done) {

      assert.equal(safe(null, false), false);
      assert.equal(safe(1, false), false);
      assert.equal(safe(1.23, false), false);
      assert.equal(safe([], false), false);
      assert.equal(safe(false, false), false);
      assert.equal(safe(true, false), false);
      assert.equal(safe(/argument must be a string/, false), false);
      assert.equal(safe(new Error('foo'), false), false);
      done();
    });
    it('should return False because input is regex is invalid', function(done) {

      for (var i = 0, ii = invalid.length; i < ii; ++i) {
        assert.equal(safe(invalid[i], false), false);
      }
      done();
    });
    it('should return False because input is regex is not sage',
      function(done) {

        for (var i = 0, ii = bad.length; i < ii; ++i) {
          assert.equal(safe(bad[i].source, false), false);
        }
        done();
      });
    it('should return True because input is valid', function(done) {

      for (var i = 0, ii = good.length; i < ii; ++i) {
        assert.equal(safe(good[i].source, false), true);
      }
      done();
    });
  });
});
