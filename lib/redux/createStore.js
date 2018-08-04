'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var middleware = [];
  var enhancers = [];

  // Create a history of your choosing (we're using a browser history in this case)
  var history = (0, _createMemoryHistory2.default)();

  // Build the middleware for intercepting and dispatching navigation actions
  var sagaMiddleware = (0, _reduxSaga2.default)();
  middleware.push(sagaMiddleware);

  var actionCreators = _extends({}, ShopActions);

  var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    actionCreators: actionCreators
  }) : _redux.compose;

  enhancers.push(_redux.applyMiddleware.apply(undefined, middleware));
  var enhancer = composeEnhancers.apply(undefined, enhancers);

  var rootReducer = (0, _redux.combineReducers)({
    dotCheckout: (0, _redux.combineReducers)((0, _index2.default)())
  });

  var initialState = {}; // load any cookies etc. here
  var store = (0, _redux.createStore)(rootReducer, initialState, enhancer);

  var theRootSaga = function theRootSaga() {
    return (0, _sagas2.default)();
  };
  var sagaTask = sagaMiddleware.run(theRootSaga());

  return store;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _shop = require('./shop');

var ShopActions = _interopRequireWildcard(_shop);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _sagas = require('../sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];