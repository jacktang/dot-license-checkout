'use strict';

exports.__esModule = true;
// Support SSR by mocking web3
var web3Module = {};
if (typeof window !== 'undefined') {
  web3Module = require('../vendor/web3');
}

exports.default = web3Module;
module.exports = exports['default'];