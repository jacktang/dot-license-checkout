'use strict';

exports.__esModule = true;
exports.getABIs = exports.getHttpProviderURL = exports.getLicenseCoreAddress = exports.getModalProps = exports.getVanityAddressPrefix = exports.getHelpURL = exports.getTosURL = exports.getLogo2x = exports.getLogo = exports.getOffers = exports.getOfferLabel = exports.getProductSubheading = exports.getProductName = exports.getConfig = exports.SET_CHECKOUT_CONFIG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setCheckoutConfig = setCheckoutConfig;
exports.default = config;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reselect = require('reselect');

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions
var SET_CHECKOUT_CONFIG = exports.SET_CHECKOUT_CONFIG = 'dotcheckout/config/SET_CHECKOUT_CONFIG';
function setCheckoutConfig(config) {
  return {
    type: SET_CHECKOUT_CONFIG,
    payload: config
  };
}
// Selectors
var getConfig = exports.getConfig = (0, _reselect.createSelector)(_root2.default, function (state) {
  return state.config;
});
var getProductName = exports.getProductName = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.productName;
});
var getProductSubheading = exports.getProductSubheading = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.productSubheading;
});
var getOfferLabel = exports.getOfferLabel = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.offerLabel;
});
var getOffers = exports.getOffers = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.offers;
});
var getLogo = exports.getLogo = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.logo;
});
var getLogo2x = exports.getLogo2x = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.logo2x;
});
var getTosURL = exports.getTosURL = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.tosURL;
});
var getHelpURL = exports.getHelpURL = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.helpURL;
});
var getVanityAddressPrefix = exports.getVanityAddressPrefix = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.vanityAddressPrefix;
});
var getModalProps = exports.getModalProps = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.modalProps;
});
var getLicenseCoreAddress = exports.getLicenseCoreAddress = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.licenseCoreAddress;
});
var getHttpProviderURL = exports.getHttpProviderURL = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.httpProviderURL;
});
var getABIs = exports.getABIs = (0, _reselect.createSelector)(getConfig, function (config) {
  return config.abis;
});

// Reducer
var initialState = {
  productName: null,
  productSubheading: null,
  offerLabel: null,
  offers: [],
  logo: null,
  logo2x: null,
  tosURL: null,
  helpURL: null,
  modalProps: {},
  vanityAddressPrefix: null,
  licenseCoreAddress: null,
  httpProviderURL: null,
  abis: {}
};

function config() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case SET_CHECKOUT_CONFIG:
      {
        var _config = action.payload;
        return _extends({}, state, _config);
      }
    default:
      return state;
  }
}