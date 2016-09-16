'use strict';
/**
 * @file regex-safer main
 * @module regex-safer
 * @subpackage main
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2016
 * @license GPLv3
 */

/*
 * initialize module
 */
var safe = require('safe-regex');

/**
 * option setting
 * 
 * @exports safer
 * @function safer
 * @param {String} regex - check this string regex
 * @param {Boolean} [exception] - raise an exception if true
 */
function safer(regex, exception) {

  var e = exception === undefined ? true : Boolean(exception);
  var output;
  if (e) {
    output = function(err) {

      if (err) {
        throw new Error(err);
      }
    };
  } else {
    output = function(err) {

      return Boolean(!err);
    };
  }

  if (!regex || typeof regex !== 'string') { // string validation
    return output('argument must be a string');
  }

  try { // regex validation
    var _ = new RegExp(regex);
  } catch (err) {
    return output(err);
  }

  if (safe(regex) === false) {
    return output('regex is invalid or not safe');
  }
  return output();
}
module.exports = safer;
