'use strict';

exports.__esModule = true;
// Use this file for SSR shims
exports.default = {
  getLocation: function getLocation() {
    return typeof location !== 'undefined' ? location : {};
  }
};
module.exports = exports['default'];