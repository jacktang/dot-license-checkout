'use strict';

exports.__esModule = true;
exports.sagas = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.ensureWeb3 = ensureWeb3;
exports.licenseCore = licenseCore;
exports.watchForFetchWeb3 = watchForFetchWeb3;
exports.fetchAccounts = fetchAccounts;
exports.watchForFetchAccounts = watchForFetchAccounts;
exports.pollForTxReceipt = pollForTxReceipt;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _web2 = require('../util/web3');

var _web3 = _interopRequireDefault(_web2);

var _shop = require('../redux/shop');

var Shop = _interopRequireWildcard(_shop);

var _config = require('../redux/config');

var Config = _interopRequireWildcard(_config);

var _web4 = require('../redux/web3');

var Web3Actions = _interopRequireWildcard(_web4);

var Web3Selectors = _interopRequireWildcard(_web4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(fetchWeb3),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(ensureWeb3),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(licenseCore),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(watchForFetchWeb3),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(fetchNetworkVersion),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(watchForFetchNetworkVersion),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(fetchAccounts),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(watchForFetchAccounts),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(initializeWeb3),
    _marked10 = /*#__PURE__*/_regenerator2.default.mark(watchForInitializeWeb3),
    _marked11 = /*#__PURE__*/_regenerator2.default.mark(pollForUnlocked),
    _marked12 = /*#__PURE__*/_regenerator2.default.mark(watchForPollForUnlocked),
    _marked13 = /*#__PURE__*/_regenerator2.default.mark(pollForTxReceipt);
// import Web3 from 'web3';


// let _web3;

function fetchWeb3() {
  var newWeb3, existingProviderFound, provider, httpProviderURL;
  return _regenerator2.default.wrap(function fetchWeb3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newWeb3 = new _web3.default();
          existingProviderFound = void 0;
          provider = void 0;

          // Checking if Web3 has been injected by the browser (Mist/MetaMask)

          if (!(typeof web3 !== 'undefined')) {
            _context.next = 8;
            break;
          }

          // Use Mist/MetaMask's provider
          existingProviderFound = true;
          provider = web3.currentProvider;
          _context.next = 13;
          break;

        case 8:
          // Fall back to Infura:
          existingProviderFound = false;
          _context.next = 11;
          return (0, _effects.select)(Config.getHttpProviderURL);

        case 11:
          httpProviderURL = _context.sent;

          provider = new _web3.default.providers.HttpProvider(httpProviderURL);

        case 13:

          newWeb3.setProvider(provider);

          _context.next = 16;
          return (0, _effects.put)(Web3Actions.web3Loaded(newWeb3, existingProviderFound));

        case 16:
          return _context.abrupt('return', newWeb3);

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function ensureWeb3() {
  var windowLoaded, web3;
  return _regenerator2.default.wrap(function ensureWeb3$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(Web3Selectors.getWindowLoaded);

        case 2:
          windowLoaded = _context2.sent;

          if (windowLoaded) {
            _context2.next = 6;
            break;
          }

          _context2.next = 6;
          return (0, _effects.take)(Web3Actions.WINDOW_LOADED);

        case 6:
          return _context2.delegateYield(fetchWeb3(), 't0', 7);

        case 7:
          web3 = _context2.t0;
          return _context2.abrupt('return', web3);

        case 9:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function licenseCore() {
  var web3, abis, licenseCoreAddress, contract;
  return _regenerator2.default.wrap(function licenseCore$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.delegateYield(ensureWeb3(), 't0', 1);

        case 1:
          web3 = _context3.t0;
          _context3.next = 4;
          return (0, _effects.select)(Config.getABIs);

        case 4:
          abis = _context3.sent;
          _context3.next = 7;
          return (0, _effects.select)(Config.getLicenseCoreAddress);

        case 7:
          licenseCoreAddress = _context3.sent;
          contract = new web3.eth.Contract(abis.LicenseCore.abi, licenseCoreAddress);
          return _context3.abrupt('return', contract);

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function watchForFetchWeb3() {
  return _regenerator2.default.wrap(function watchForFetchWeb3$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)(Web3Actions.ENSURE_WEB3, ensureWeb3);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function fetchNetworkVersion() {
  var web3, networkVersion;
  return _regenerator2.default.wrap(function fetchNetworkVersion$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.delegateYield(ensureWeb3(), 't0', 1);

        case 1:
          web3 = _context5.t0;
          _context5.next = 4;
          return (0, _effects.call)(web3.eth.net.getId);

        case 4:
          networkVersion = _context5.sent;
          _context5.next = 7;
          return (0, _effects.put)(Web3Actions.setWeb3NetworkVersion(networkVersion));

        case 7:
          return _context5.abrupt('return', networkVersion);

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function watchForFetchNetworkVersion() {
  return _regenerator2.default.wrap(function watchForFetchNetworkVersion$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeEvery)(Web3Actions.FETCH_NETWORK_VERSION, fetchNetworkVersion);

        case 2:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function fetchAccounts() {
  var web3, accounts;
  return _regenerator2.default.wrap(function fetchAccounts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.delegateYield(ensureWeb3(), 't0', 1);

        case 1:
          web3 = _context7.t0;
          _context7.next = 4;
          return (0, _effects.call)(web3.eth.getAccounts);

        case 4:
          accounts = _context7.sent;
          _context7.next = 7;
          return (0, _effects.put)(Web3Actions.setAccounts(accounts));

        case 7:
          return _context7.abrupt('return', accounts);

        case 8:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

function watchForFetchAccounts() {
  return _regenerator2.default.wrap(function watchForFetchAccounts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeEvery)(Web3Actions.FETCH_ACCOUNTS, fetchAccounts);

        case 2:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

function initializeWeb3() {
  return _regenerator2.default.wrap(function initializeWeb3$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.put)(Web3Actions.windowLoaded());

        case 2:
          return _context9.delegateYield(ensureWeb3(), 't0', 3);

        case 3:
          _context9.next = 5;
          return (0, _effects.all)([(0, _effects.call)(fetchNetworkVersion), (0, _effects.call)(fetchAccounts)]);

        case 5:
          _context9.next = 7;
          return (0, _effects.put)(Web3Actions.web3Initialized());

        case 7:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

function watchForInitializeWeb3() {
  return _regenerator2.default.wrap(function watchForInitializeWeb3$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.takeEvery)(Web3Actions.INITIALIZE_WEB3, initializeWeb3);

        case 2:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked10, this);
}

function pollForUnlocked() {
  var accounts;
  return _regenerator2.default.wrap(function pollForUnlocked$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          accounts = void 0;

        case 1:
          return _context11.delegateYield(fetchAccounts(), 't0', 2);

        case 2:
          accounts = _context11.t0;
          _context11.next = 5;
          return (0, _reduxSaga.delay)(1000);

        case 5:
          if (_lodash2.default.isEmpty(accounts)) {
            _context11.next = 1;
            break;
          }

        case 6:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked11, this);
}

function watchForPollForUnlocked() {
  return _regenerator2.default.wrap(function watchForPollForUnlocked$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _effects.takeEvery)(Web3Actions.POLL_FOR_UNLOCKED, pollForUnlocked);

        case 2:
        case 'end':
          return _context12.stop();
      }
    }
  }, _marked12, this);
}

function pollForTxReceipt(txHash) {
  var receipt, _web;

  return _regenerator2.default.wrap(function pollForTxReceipt$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          console.log('Polling for txReceipt', txHash);
          receipt = void 0;

        case 2:
          _context13.next = 4;
          return (0, _reduxSaga.delay)(3000);

        case 4:
          return _context13.delegateYield(ensureWeb3(), 't0', 5);

        case 5:
          _web = _context13.t0;
          _context13.next = 8;
          return (0, _effects.call)(_web.eth.getTransactionReceipt, txHash);

        case 8:
          receipt = _context13.sent;

        case 9:
          if (!receipt) {
            _context13.next = 2;
            break;
          }

        case 10:
          return _context13.abrupt('return', receipt);

        case 11:
        case 'end':
          return _context13.stop();
      }
    }
  }, _marked13, this);
}

var sagas = exports.sagas = [watchForInitializeWeb3(), watchForPollForUnlocked()
// watchForFetchWeb3(),
// watchForFetchNetworkVersion(),
// watchForFetchAccounts()
];

exports.default = function () {
  return sagas;
};