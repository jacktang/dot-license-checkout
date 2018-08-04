'use strict';

exports.__esModule = true;
exports.getAppState = undefined;
exports.default = app;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reselect = require('reselect');

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions

// Selectors
var getAppState = exports.getAppState = (0, _reselect.createSelector)(_root2.default, function (state) {
  return state.app;
});

// Reducer
var initialState = {
  bootTime: new Date()
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}