'use strict';

exports.__esModule = true;
exports.getAccounts = exports.getNetworkVersion = exports.getProviderFound = exports.getWindowLoaded = exports.getWeb3 = exports.getWeb3State = exports.WEB3_ERROR = exports.POLL_FOR_UNLOCKED = exports.SET_ACCOUNTS = exports.FETCH_ACCOUNTS = exports.INCREMENT_NONCE = exports.FETCH_NETWORK_VERSION = exports.SET_WEB3_NETWORK_VERSION = exports.SET_WEB3_PROVIDER_FOUND = exports.WEB3_LOADED = exports.WINDOW_LOADED = exports.ENSURE_WEB3 = exports.FETCH_WEB3 = exports.WEB3_INITIALIZED = exports.INITIALIZE_WEB3 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.initializeWeb3 = initializeWeb3;
exports.web3Initialized = web3Initialized;
exports.fetchWeb3 = fetchWeb3;
exports.ensureWeb3 = ensureWeb3;
exports.windowLoaded = windowLoaded;
exports.web3Loaded = web3Loaded;
exports.setWeb3ProviderFound = setWeb3ProviderFound;
exports.setWeb3NetworkVersion = setWeb3NetworkVersion;
exports.fetchNetworkVersion = fetchNetworkVersion;
exports.incrementNonce = incrementNonce;
exports.fetchAccounts = fetchAccounts;
exports.setAccounts = setAccounts;
exports.pollForUnlocked = pollForUnlocked;
exports.web3Error = web3Error;
exports.default = web3;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reselect = require('reselect');

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions
var INITIALIZE_WEB3 = exports.INITIALIZE_WEB3 = 'dotcheckout/web3/INITIALIZE_WEB3';
function initializeWeb3() {
  return {
    type: INITIALIZE_WEB3
  };
}
var WEB3_INITIALIZED = exports.WEB3_INITIALIZED = 'dotcheckout/web3/WEB3_INITIALIZED';
function web3Initialized() {
  return {
    type: WEB3_INITIALIZED
  };
}

var FETCH_WEB3 = exports.FETCH_WEB3 = 'dotcheckout/web3/FETCH_WEB3';
function fetchWeb3() {
  return {
    type: FETCH_WEB3,
    payload: {
      loading: true
    }
  };
}

var ENSURE_WEB3 = exports.ENSURE_WEB3 = 'dotcheckout/web3/ENSURE_WEB3';
function ensureWeb3() {
  return {
    type: ENSURE_WEB3
  };
}

var WINDOW_LOADED = exports.WINDOW_LOADED = 'dotcheckout/web3/WINDOW_LOADED';
function windowLoaded() {
  return {
    type: WINDOW_LOADED
  };
}

var WEB3_LOADED = exports.WEB3_LOADED = 'dotcheckout/web3/WEB3_LOADED';
function web3Loaded(web3, providerWasFound) {
  return {
    type: WEB3_LOADED,
    payload: {
      loading: false,
      web3: web3,
      providerFound: providerWasFound
    }
  };
}

var SET_WEB3_PROVIDER_FOUND = exports.SET_WEB3_PROVIDER_FOUND = 'dotcheckout/web3/SET_WEB3_PROVIDER_FOUND';
function setWeb3ProviderFound(wasFound) {
  return {
    type: SET_WEB3_PROVIDER_FOUND,
    payload: {
      providerFound: wasFound
    }
  };
}
var SET_WEB3_NETWORK_VERSION = exports.SET_WEB3_NETWORK_VERSION = 'dotcheckout/web3/SET_WEB3_NETWORK_VERSION';
function setWeb3NetworkVersion(v) {
  return {
    type: SET_WEB3_NETWORK_VERSION,
    payload: {
      networkVersion: v
    }
  };
}

var FETCH_NETWORK_VERSION = exports.FETCH_NETWORK_VERSION = 'dotcheckout/web3/FETCH_NETWORK_VERSION';
function fetchNetworkVersion() {
  return {
    type: FETCH_NETWORK_VERSION
  };
}

var INCREMENT_NONCE = exports.INCREMENT_NONCE = 'dotcheckout/web3/INCREMENT_NONCE';
function incrementNonce() {
  return {
    type: INCREMENT_NONCE
  };
}

var FETCH_ACCOUNTS = exports.FETCH_ACCOUNTS = 'dotcheckout/web3/FETCH_ACCOUNTS';
function fetchAccounts() {
  return {
    type: FETCH_ACCOUNTS
  };
}

var SET_ACCOUNTS = exports.SET_ACCOUNTS = 'dotcheckout/web3/SET_ACCOUNTS';
function setAccounts(accounts) {
  return {
    type: SET_ACCOUNTS,
    payload: {
      accounts: accounts
    }
  };
}

var POLL_FOR_UNLOCKED = exports.POLL_FOR_UNLOCKED = 'dotcheckout/web3/POLL_FOR_UNLOCKED';
function pollForUnlocked() {
  return {
    type: POLL_FOR_UNLOCKED
  };
}

var WEB3_ERROR = exports.WEB3_ERROR = 'dotcheckout/web3/WEB3_ERROR';
function web3Error(message, error) {
  return {
    type: WEB3_ERROR,
    payload: {
      message: message,
      error: error
    }
  };
}

// Selectors
var getWeb3State = exports.getWeb3State = (0, _reselect.createSelector)(_root2.default, function (state) {
  return state.web3;
});
var getWeb3 = exports.getWeb3 = (0, _reselect.createSelector)(getWeb3State, function (state) {
  return state.web3;
});
var getWindowLoaded = exports.getWindowLoaded = (0, _reselect.createSelector)(getWeb3State, function (state) {
  return state.windowLoaded;
});
var getProviderFound = exports.getProviderFound = (0, _reselect.createSelector)(getWeb3State, function (state) {
  return state.providerFound;
});
var getNetworkVersion = exports.getNetworkVersion = (0, _reselect.createSelector)(getWeb3State, function (state) {
  return state.networkVersion;
});
var getAccounts = exports.getAccounts = (0, _reselect.createSelector)(getWeb3State, function (state) {
  return state.accounts;
});

// Reducer
var initialState = {
  windowLoaded: false,
  loading: true,
  web3: null,
  web3Initialized: false,
  providerFound: false,
  nonce: 0,
  networkVersion: null,
  accounts: []
};

function web3() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case FETCH_WEB3:
      {
        var loading = action.payload.loading;

        return _extends({}, state, {
          loading: loading
        });
      }
    case WEB3_INITIALIZED:
      {
        return _extends({}, state, {
          web3Initialized: true
        });
      }
    case WINDOW_LOADED:
      {
        return _extends({}, state, {
          windowLoaded: true
        });
      }
    case WEB3_LOADED:
      {
        var _action$payload = action.payload,
            _loading = _action$payload.loading,
            _web = _action$payload.web3,
            providerFound = _action$payload.providerFound;

        return _extends({}, state, {
          loading: _loading,
          web3: _web,
          providerFound: providerFound
        });
      }
    case SET_WEB3_PROVIDER_FOUND:
      {
        var _providerFound = action.payload.providerFound;

        return _extends({}, state, {
          providerFound: _providerFound
        });
      }
    case SET_WEB3_NETWORK_VERSION:
      {
        var networkVersion = action.payload.networkVersion;

        return _extends({}, state, {
          networkVersion: networkVersion
        });
      }
    case INCREMENT_NONCE:
      {
        return _extends({}, state, {
          nonce: state.nonce + 1
        });
      }
    case SET_ACCOUNTS:
      {
        var accounts = action.payload.accounts;

        return _extends({}, state, {
          accounts: accounts
        });
      }
    default:
      return state;
  }
}