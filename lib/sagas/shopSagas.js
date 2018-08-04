'use strict';

exports.__esModule = true;
exports.sagas = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.watchForWeb3Initialized = watchForWeb3Initialized;
exports.watchForPlaceOrder = watchForPlaceOrder;
exports.watchForPollForTxProcessing = watchForPollForTxProcessing;

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../redux/config');

var Config = _interopRequireWildcard(_config);

var _shop = require('../redux/shop');

var Shop = _interopRequireWildcard(_shop);

var _web = require('../redux/web3');

var Web3 = _interopRequireWildcard(_web);

var _web3Sagas = require('./web3Sagas');

var Web3Sagas = _interopRequireWildcard(_web3Sagas);

var _web3Utils = require('web3-utils');

var _web3Utils2 = _interopRequireDefault(_web3Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(fetchProductInfos),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(fetchProductInfo),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(web3Initialized),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(watchForWeb3Initialized),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(placeOrder),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(watchForPlaceOrder),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(pollForTxProcessing),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(watchForPollForTxProcessing);

var BN = _web3Utils2.default.BN;

function fetchProductInfos(productIds) {
  var fetchProductInfoSagas, allInfos;
  return _regenerator2.default.wrap(function fetchProductInfos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchProductInfoSagas = _lodash2.default.map(productIds, function (id) {
            return fetchProductInfo(id);
          });
          _context.next = 3;
          return (0, _effects.all)(fetchProductInfoSagas);

        case 3:
          allInfos = _context.sent;
          return _context.abrupt('return', allInfos);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function fetchProductInfo(productId) {
  var contract, results, productInfo;
  return _regenerator2.default.wrap(function fetchProductInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(Web3Sagas.licenseCore(), 't0', 1);

        case 1:
          contract = _context2.t0;
          _context2.next = 4;
          return (0, _effects.call)(contract.methods.productInfo(productId).call);

        case 4:
          results = _context2.sent;
          productInfo = {
            id: productId,
            price: results[0],
            inventory: results[1],
            supply: results[2],
            interval: results[3],
            renewable: results[4]
          };
          _context2.next = 8;
          return (0, _effects.put)(Shop.setProductInfo(productInfo));

        case 8:
          return _context2.abrupt('return', results);

        case 9:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function web3Initialized() {
  var offers, productIds;
  return _regenerator2.default.wrap(function web3Initialized$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(Config.getOffers);

        case 2:
          offers = _context3.sent;
          productIds = _lodash2.default.uniq(_lodash2.default.map(offers, function (offer) {
            return offer.productId;
          }));
          _context3.next = 6;
          return fetchProductInfos(productIds);

        case 6:
          _context3.next = 8;
          return (0, _effects.put)(Shop.shopInitialized());

        case 8:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function watchForWeb3Initialized() {
  return _regenerator2.default.wrap(function watchForWeb3Initialized$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)(Web3.WEB3_INITIALIZED, web3Initialized);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

// see: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
// and: https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/Channels.md#using-the-eventchannel-factory-to-connect-to-external-events

// This function creates an event channel for sending a method
function createWeb3SendChannel(sendMethod, sendArgs) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return (0, _reduxSaga.eventChannel)(function (emit) {
    var transactionHashHandler = function transactionHashHandler(txHash) {
      console.log('transactionhash', txHash);
      emit({ event: 'transactionHash', payload: { txHash: txHash } });
    };

    var receiptHandler = function receiptHandler(receipt) {
      console.log('receipt', receipt);
      emit({ event: 'receipt', payload: { receipt: receipt } });
    };

    var confirmationHandler = function confirmationHandler(confirmations, receipt) {
      console.log('confirmation', confirmations, receipt);
      emit({ event: 'confirmation', payload: { confirmations: confirmations, receipt: receipt } });
    };

    var errorHandler = function errorHandler(error) {
      console.log('error', error);
      emit({ event: 'error', payload: { error: error } });
    };

    var promiEvent = sendMethod(sendArgs);
    promiEvent.on('transactionHash', transactionHashHandler);
    promiEvent.on('receipt', receiptHandler);
    promiEvent.on('confirmation', confirmationHandler);
    promiEvent.on('error', confirmationHandler);

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    var unsubscribe = function unsubscribe() {
      promiEvent.off('transactionHash', transactionHashHandler);
      promiEvent.off('receipt', receiptHandler);
      promiEvent.off('confirmation', confirmationHandler);
      promiEvent.off('error', confirmationHandler);
    };

    return unsubscribe;
  });
}

function placeOrder(action) {
  var _action$payload, productId, numCycles, assignee, affiliate, wei, contract, accounts, account, affiliateIsAddress, sendChannel, continueProcessing, _receipt, _txHash, event, txHash, receipt, _event$payload, confirmations, _receipt2, _txHash2;

  return _regenerator2.default.wrap(function placeOrder$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _action$payload = action.payload, productId = _action$payload.productId, numCycles = _action$payload.numCycles, assignee = _action$payload.assignee, affiliate = _action$payload.affiliate, wei = _action$payload.wei;
          _context5.prev = 1;
          return _context5.delegateYield(Web3Sagas.licenseCore(), 't0', 3);

        case 3:
          contract = _context5.t0;
          return _context5.delegateYield(Web3Sagas.fetchAccounts(), 't1', 5);

        case 5:
          accounts = _context5.t1;
          account = accounts[0];
          affiliateIsAddress = _web3Utils2.default.isAddress(affiliate);

          affiliate = affiliateIsAddress ? affiliate : 0;

          _context5.next = 11;
          return (0, _effects.put)(Shop.setPlacingOrderMessage('Please confirm the transaction in Metamask'));

        case 11:
          _context5.next = 13;
          return (0, _effects.call)(createWeb3SendChannel, contract.methods.purchase(productId, numCycles, assignee, affiliate).send, {
            value: wei,
            from: account,
            gasLimit: 400000
          });

        case 13:
          sendChannel = _context5.sent;
          continueProcessing = true;
          _receipt = void 0;
          _txHash = void 0;

        case 17:
          if (!continueProcessing) {
            _context5.next = 70;
            break;
          }

          _context5.next = 20;
          return (0, _effects.take)(sendChannel);

        case 20:
          event = _context5.sent;
          _context5.t2 = event.event;
          _context5.next = _context5.t2 === 'transactionHash' ? 24 : _context5.t2 === 'receipt' ? 30 : _context5.t2 === 'confirmation' ? 35 : _context5.t2 === 'error' ? 63 : 68;
          break;

        case 24:
          txHash = event.payload.txHash;
          _context5.next = 27;
          return (0, _effects.put)(Shop.setPlacingOrderMessage('Placing order. This can take a few minutes, please wait.'));

        case 27:
          _context5.next = 29;
          return (0, _effects.put)(Shop.receivedOrderTxHash(txHash));

        case 29:
          return _context5.abrupt('break', 68);

        case 30:
          receipt = event.payload.receipt;

          _receipt = receipt;
          _context5.next = 34;
          return (0, _effects.put)(Shop.receivedOrderTxReceipt(receipt));

        case 34:
          return _context5.abrupt('break', 68);

        case 35:
          _event$payload = event.payload, confirmations = _event$payload.confirmations, _receipt2 = _event$payload.receipt;

          // I'm not sure why, but rejecting the transaction in Metamask
          // emits a "confirmation" event

          if (!_lodash2.default.isError(confirmations)) {
            _context5.next = 56;
            break;
          }

          if (!confirmations.message.match('Transaction was not mined within 50 blocks,')) {
            _context5.next = 53;
            break;
          }

          _context5.next = 40;
          return (0, _effects.select)(Shop.getOrderTxHash);

        case 40:
          _txHash2 = _context5.sent;

          if (!_txHash2) {
            _context5.next = 50;
            break;
          }

          _context5.next = 44;
          return (0, _effects.put)(Shop.setPlacingOrderMessage('Order still processing. Hang on and do not close this browser window. This can take a few minutes, please wait.'));

        case 44:
          _context5.next = 46;
          return (0, _effects.put)(Shop.pollForTxProcessing(_txHash2));

        case 46:

          // close that we're not going to watch this channel any longer
          sendChannel.close();
          continueProcessing = false;
          _context5.next = 51;
          break;

        case 50:
          throw confirmations;

        case 51:
          _context5.next = 54;
          break;

        case 53:
          throw confirmations;

        case 54:
          _context5.next = 62;
          break;

        case 56:
          _receipt = _receipt2;
          _context5.next = 59;
          return (0, _effects.put)(Shop.receivedOrderTxReceipt(_receipt2));

        case 59:
          _context5.next = 61;
          return (0, _effects.put)(Shop.receivedOrderTxConfirmation(confirmations, _receipt2));

        case 61:
          if (confirmations > 0) {
            // kill the sendChannel
            sendChannel.close();
            continueProcessing = false;
          }

        case 62:
          return _context5.abrupt('break', 68);

        case 63:
          console.log('got a channel error', event);
          sendChannel.close();
          continueProcessing = false;
          throw event;

        case 68:
          _context5.next = 17;
          break;

        case 70:
          if (!_receipt) {
            _context5.next = 73;
            break;
          }

          _context5.next = 73;
          return (0, _effects.put)(Shop.placingOrderResults(_receipt, null));

        case 73:
          _context5.next = 82;
          break;

        case 75:
          _context5.prev = 75;
          _context5.t3 = _context5['catch'](1);

          console.log(_context5.t3);
          _context5.next = 80;
          return (0, _effects.put)(Web3.web3Error(_context5.t3.message, _context5.t3));

        case 80:
          _context5.next = 82;
          return (0, _effects.put)(Shop.placingOrderResults(null, _context5.t3));

        case 82:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[1, 75]]);
}

function watchForPlaceOrder() {
  return _regenerator2.default.wrap(function watchForPlaceOrder$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeEvery)(Shop.PLACE_ORDER, placeOrder);

        case 2:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function pollForTxProcessing(action) {
  var txHash, receipt;
  return _regenerator2.default.wrap(function pollForTxProcessing$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          txHash = action.payload.txHash;
          return _context7.delegateYield(Web3Sagas.pollForTxReceipt(txHash), 't0', 2);

        case 2:
          receipt = _context7.t0;
          _context7.next = 5;
          return (0, _effects.put)(Shop.receivedOrderTxReceipt(receipt));

        case 5:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

function watchForPollForTxProcessing() {
  return _regenerator2.default.wrap(function watchForPollForTxProcessing$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeEvery)(Shop.POLL_FOR_TX_PROCESSING, pollForTxProcessing);

        case 2:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

var sagas = exports.sagas = [watchForWeb3Initialized(), watchForPlaceOrder(), watchForPollForTxProcessing()];

exports.default = function () {
  return sagas;
};