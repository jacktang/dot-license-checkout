"use strict";

exports.__esModule = true;

// we want to scope the root of our reducer by `dotCheckout` - this selector provides that
exports.default = function (state) {
  return state.dotCheckout;
};

module.exports = exports["default"];