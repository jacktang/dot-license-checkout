'use strict';

var prefixForNetwork = require('./prefix-for-network');

module.exports = function (hash, network) {
  var prefix = prefixForNetwork(network);
  return 'http://' + prefix + 'etherscan.io/tx/' + hash;
};