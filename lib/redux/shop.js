'use strict';

exports.__esModule = true;
exports.getSelectedOfferId = exports.getOrderTxReceipt = exports.getOrderTxHash = exports.getPlacingOrderMessage = exports.getPlacingOrderError = exports.getPlacedOrder = exports.getPlacingOrder = exports.getInitialized = exports.getProducts = exports.getStore = exports.SET_SELECTED_OFFER_ID = exports.POLL_FOR_TX_PROCESSING = exports.RECEIVED_ORDER_TX_CONFIRMATION = exports.RECEIVED_ORDER_TX_RECEIPT = exports.RECEIVED_ORDER_TX_HASH = exports.SET_PLACING_ORDER_MESSAGE = exports.PLACING_ORDER_RESULTS = exports.PLACE_ORDER = exports.SET_PRODUCT_INFO = exports.SHOP_INITIALIZED = exports.FETCH_PRODUCTS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetchProducts = fetchProducts;
exports.shopInitialized = shopInitialized;
exports.setProductInfo = setProductInfo;
exports.placeOrder = placeOrder;
exports.placingOrderResults = placingOrderResults;
exports.setPlacingOrderMessage = setPlacingOrderMessage;
exports.receivedOrderTxHash = receivedOrderTxHash;
exports.receivedOrderTxReceipt = receivedOrderTxReceipt;
exports.receivedOrderTxConfirmation = receivedOrderTxConfirmation;
exports.pollForTxProcessing = pollForTxProcessing;
exports.setSelectedOfferId = setSelectedOfferId;
exports.default = shop;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reselect = require('reselect');

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions
var FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'dotcheckout/shop/FETCH_PRODUCTS';
function fetchProducts() {
  return {
    type: FETCH_PRODUCTS
  };
}

var SHOP_INITIALIZED = exports.SHOP_INITIALIZED = 'dotcheckout/shop/SHOP_INITIALIZED';
function shopInitialized() {
  return {
    type: SHOP_INITIALIZED
  };
}

var SET_PRODUCT_INFO = exports.SET_PRODUCT_INFO = 'dotcheckout/shop/SET_PRODUCT_INFO';
function setProductInfo(productInfo) {
  return {
    type: SET_PRODUCT_INFO,
    payload: {
      productInfo: productInfo
    }
  };
}

var PLACE_ORDER = exports.PLACE_ORDER = 'dotcheckout/shop/PLACE_ORDER';
function placeOrder(productId, numCycles, assignee, affiliate, wei) {
  return {
    type: PLACE_ORDER,
    payload: {
      productId: productId,
      numCycles: numCycles,
      assignee: assignee,
      affiliate: affiliate,
      wei: wei
    }
  };
}

var PLACING_ORDER_RESULTS = exports.PLACING_ORDER_RESULTS = 'dotcheckout/shop/PLACING_ORDER_RESULTS';
function placingOrderResults(placedOrder, error) {
  return {
    type: PLACING_ORDER_RESULTS,
    payload: {
      placedOrder: placedOrder,
      error: error
    }
  };
}

var SET_PLACING_ORDER_MESSAGE = exports.SET_PLACING_ORDER_MESSAGE = 'dotcheckout/shop/SET_PLACING_ORDER_MESSAGE';
function setPlacingOrderMessage(placingOrderMessage) {
  return {
    type: SET_PLACING_ORDER_MESSAGE,
    payload: {
      placingOrderMessage: placingOrderMessage
    }
  };
}

var RECEIVED_ORDER_TX_HASH = exports.RECEIVED_ORDER_TX_HASH = 'dotcheckout/shop/RECEIVED_ORDER_TX_HASH';
function receivedOrderTxHash(orderTxHash) {
  return {
    type: RECEIVED_ORDER_TX_HASH,
    payload: {
      orderTxHash: orderTxHash
    }
  };
}

var RECEIVED_ORDER_TX_RECEIPT = exports.RECEIVED_ORDER_TX_RECEIPT = 'dotcheckout/shop/RECEIVED_ORDER_TX_RECEIPT';
function receivedOrderTxReceipt(orderTxReceipt) {
  return {
    type: RECEIVED_ORDER_TX_RECEIPT,
    payload: {
      orderTxReceipt: orderTxReceipt
    }
  };
}

var RECEIVED_ORDER_TX_CONFIRMATION = exports.RECEIVED_ORDER_TX_CONFIRMATION = 'dotcheckout/shop/RECEIVED_ORDER_TX_CONFIRMATION';
function receivedOrderTxConfirmation(confirmationNumber, orderTxReceipt) {
  return {
    type: RECEIVED_ORDER_TX_CONFIRMATION,
    payload: {
      confirmationNumber: confirmationNumber,
      orderTxReceipt: orderTxReceipt
    }
  };
}

var POLL_FOR_TX_PROCESSING = exports.POLL_FOR_TX_PROCESSING = 'dotcheckout/shop/POLL_FOR_TX_PROCESSING';
function pollForTxProcessing(txHash) {
  return {
    type: POLL_FOR_TX_PROCESSING,
    payload: {
      txHash: txHash
    }
  };
}

var SET_SELECTED_OFFER_ID = exports.SET_SELECTED_OFFER_ID = 'dotcheckout/shop/SET_SELECTED_OFFER_ID';
function setSelectedOfferId(selectedOfferId) {
  return {
    type: SET_SELECTED_OFFER_ID,
    payload: {
      selectedOfferId: selectedOfferId
    }
  };
}

// Selectors
var getStore = exports.getStore = (0, _reselect.createSelector)(_root2.default, function (state) {
  return state.shop;
});
var getProducts = exports.getProducts = (0, _reselect.createSelector)(getStore, function (state) {
  return state.products;
});
var getInitialized = exports.getInitialized = (0, _reselect.createSelector)(getStore, function (state) {
  return state.initialized;
});
var getPlacingOrder = exports.getPlacingOrder = (0, _reselect.createSelector)(getStore, function (state) {
  return state.placingOrder;
});
var getPlacedOrder = exports.getPlacedOrder = (0, _reselect.createSelector)(getStore, function (state) {
  return state.placedOrder;
});
var getPlacingOrderError = exports.getPlacingOrderError = (0, _reselect.createSelector)(getStore, function (state) {
  return state.placingOrderError;
});
var getPlacingOrderMessage = exports.getPlacingOrderMessage = (0, _reselect.createSelector)(getStore, function (state) {
  return state.placingOrderMessage;
});
var getOrderTxHash = exports.getOrderTxHash = (0, _reselect.createSelector)(getStore, function (state) {
  return state.orderTxHash;
});
var getOrderTxReceipt = exports.getOrderTxReceipt = (0, _reselect.createSelector)(getStore, function (state) {
  return state.orderTxReceipt;
});
var getSelectedOfferId = exports.getSelectedOfferId = (0, _reselect.createSelector)(getStore, function (state) {
  return state.selectedOfferId;
});

// Reducer
var initialState = {
  initialized: false,
  products: {},
  placingOrder: false,
  placedOrder: {},
  placingOrderError: null,
  placingOrderMessage: null,
  orderTxHash: null,
  orderTxReceipt: null,
  selectedOfferId: null
};

function shop() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case SHOP_INITIALIZED:
      {
        return _extends({}, state, {
          initialized: true
        });
      }
    case SET_PRODUCT_INFO:
      {
        var _extends2;

        var productInfo = action.payload.productInfo;

        return _extends({}, state, {
          products: _extends({}, state.products, (_extends2 = {}, _extends2[productInfo.id] = productInfo, _extends2))
        });
      }
    case PLACE_ORDER:
      {
        return _extends({}, state, {
          placingOrder: true,

          // clear any existing errors/messages
          placingOrderError: null,
          placingOrderMessage: null
        });
      }
    case SET_PLACING_ORDER_MESSAGE:
      {
        var placingOrderMessage = action.payload.placingOrderMessage;

        return _extends({}, state, {
          placingOrderMessage: placingOrderMessage
        });
      }
    case PLACING_ORDER_RESULTS:
      {
        var _action$payload = action.payload,
            placedOrder = _action$payload.placedOrder,
            error = _action$payload.error;

        return _extends({}, state, {
          placedOrder: placedOrder,
          placingOrderMessage: null,
          placingOrderError: error,
          placingOrder: false
        });
      }
    case RECEIVED_ORDER_TX_HASH:
      {
        var orderTxHash = action.payload.orderTxHash;

        return _extends({}, state, {
          orderTxHash: orderTxHash
        });
      }
    case RECEIVED_ORDER_TX_RECEIPT:
      {
        var orderTxReceipt = action.payload.orderTxReceipt;

        return _extends({}, state, {
          orderTxReceipt: orderTxReceipt
        });
      }
    case SET_SELECTED_OFFER_ID:
      {
        var selectedOfferId = action.payload.selectedOfferId;

        return _extends({}, state, {
          selectedOfferId: selectedOfferId
        });
      }
    default:
      return state;
  }
}