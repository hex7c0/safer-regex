# [safer-regex](https://github.com/hex7c0/safer-regex)

[![NPM version](https://img.shields.io/npm/v/safer-regex.svg)](https://www.npmjs.com/package/safer-regex)
[![Linux Status](https://img.shields.io/travis/hex7c0/safer-regex.svg?label=linux-osx)](https://travis-ci.org/hex7c0/safer-regex)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/safer-regex.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/safer-regex)
[![Dependency Status](https://img.shields.io/david/hex7c0/safer-regex.svg)](https://david-dm.org/hex7c0/safer-regex)
[![Coveralls](https://img.shields.io/coveralls/hex7c0/safer-regex.svg)](https://coveralls.io/r/hex7c0/safer-regex)

Detect possibly exponential-time regular expressions, thanks to [safe-regex](https://github.com/substack/safe-regex) with cli support

## Dev Installation

Install through NPM

```bash
npm install safer-regex
```
or
```bash
git clone git://github.com/hex7c0/safer-regex.git
```

## API

inside nodejs project
```js
var safe = require('safer-regex');

safe('(a+){2}y');
```

### safe(regex [, exception])

#### options

 - `regex` - **String** RegExp source that you want to check *(required)*
 - `exception`- **Boolean** Raise Exception if True or return Boolean value *(default "raise")*

## Console Installation

Install through NPM

```bash
npm install -g safer-regex
```

## API

global cli with `-g` option
```bash
$ safer-regex -h

Usage:
  safer-regex [OPTIONS] [ARGS]

Options: 
  -v, --version          Display the current version
  -h, --help             Display help and usage details
```

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
