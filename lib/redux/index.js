'use strict';

exports.__esModule = true;
exports.dotCheckoutReducer = undefined;
exports.default = getRootReducer;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _shop = require('./shop');

var _shop2 = _interopRequireDefault(_shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRootReducer() {
  var reducers = {
    app: _app2.default,
    web3: _web2.default,
    config: _config2.default,
    shop: _shop2.default,
    router: _reactRouterRedux.routerReducer
  };

  return reducers;
}

var dotCheckoutReducer = exports.dotCheckoutReducer = (0, _redux.combineReducers)(getRootReducer());