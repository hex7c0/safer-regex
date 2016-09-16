# [regex-safer](https://github.com/hex7c0/regex-safer)

[![NPM version](https://img.shields.io/npm/v/regex-safer.svg)](https://www.npmjs.com/package/regex-safer)
[![Linux Status](https://img.shields.io/travis/hex7c0/regex-safer.svg?label=linux)](https://travis-ci.org/hex7c0/regex-safer)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/regex-safer.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/regex-safer)
[![Dependency Status](https://img.shields.io/david/hex7c0/regex-safer.svg)](https://david-dm.org/hex7c0/regex-safer)
[![Coveralls](https://img.shields.io/coveralls/hex7c0/regex-safer.svg)](https://coveralls.io/r/hex7c0/regex-safer)

Detect possibly exponential-time regular expressions, thanks to [safe-regex](https://github.com/substack/safe-regex) with cli support

## Dev Installation

Install through NPM

```bash
npm install regex-safer
```
or
```bash
git clone git://github.com/hex7c0/regex-safer.git
```

## API

inside nodejs project
```js
var safe = require('regex-safer');

safe('(a+){2}y');
```

### safe(regex [, exception])

#### options

 - `regex` - **String** RegExp source that you want to check *(required)*
 - `exception`- **Boolean** Raise Exception if True or return Boolean value *(default "raise")*

## Console Installation

Install through NPM

```bash
npm install -g regex-safer
```

## API

global cli with `-g` option
```bash
$ regex-safer -h

Usage:
  regex-safer [OPTIONS] [ARGS]

Options: 
  -v, --version          Display the current version
  -h, --help             Display help and usage details
```

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
