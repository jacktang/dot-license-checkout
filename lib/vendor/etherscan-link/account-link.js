'use strict';

var prefixForNetwork = require('./prefix-for-network');

module.exports = function (address, network) {
  var net = parseInt(network);
  var prefix = prefixForNetwork(network);
  return 'http://' + prefix + 'etherscan.io/address/' + address;
};