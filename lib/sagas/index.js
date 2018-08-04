'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = init;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _shopSagas = require('./shopSagas');

var _shopSagas2 = _interopRequireDefault(_shopSagas);

var _web3Sagas = require('./web3Sagas');

var _web3Sagas2 = _interopRequireDefault(_web3Sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return [].concat((0, _shopSagas2.default)(), (0, _web3Sagas2.default)());

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function init() {
  return rootSaga;
}
module.exports = exports['default'];