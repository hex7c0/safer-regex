'use strict';
/**
 * @file exception example
 * @module safer-regex
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var safe = require('..'); // use require('safer-regex') instead

safe('Oakland'); // return NULL

safe('(a+){10}y'); // raise ERROR
