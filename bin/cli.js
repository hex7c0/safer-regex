#!/usr/bin/env node
'use strict';

process.title = 'regexSafer';
var VERSION = require('../package.json').version;
var safe = require('..');
var cli = require('cli');

cli.enable('version');
cli.parse();

cli.setApp(process.title, VERSION).main(function(args, options) {

  if (~~args.length === 0) {
    this.fatal('Missing regex');
  }

  if (safe(args[0], false) === false) {
    this.fatal('regex is invalid or not safe');
  } else {
    this.ok('regex is ok');
  }
});
