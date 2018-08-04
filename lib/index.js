'use strict';

exports.__esModule = true;
exports.DotCheckoutButton = exports.DotCheckoutProvider = exports.dotCheckoutSagas = exports.dotCheckoutReducer = exports.DotCheckoutAppButton = exports.configure = undefined;

var _app = require('./app');

Object.defineProperty(exports, 'DotCheckoutAppButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_app).default;
  }
});

var _redux = require('./redux');

Object.defineProperty(exports, 'dotCheckoutReducer', {
  enumerable: true,
  get: function get() {
    return _redux.dotCheckoutReducer;
  }
});

var _sagas = require('./sagas');

Object.defineProperty(exports, 'dotCheckoutSagas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sagas).default;
  }
});

var _DotCheckoutProvider = require('./DotCheckoutProvider');

Object.defineProperty(exports, 'DotCheckoutProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DotCheckoutProvider).default;
  }
});

var _DotCheckoutButton = require('./components/DotCheckoutButton');

Object.defineProperty(exports, 'DotCheckoutButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DotCheckoutButton).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _app2 = _interopRequireDefault(_app);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configure = exports.configure = function configure(configurations) {
  configurations = _lodash2.default.isArray(configurations) ? configurations : [configurations];

  window.addEventListener('load', function () {
    configurations.forEach(function (configuration) {
      var selectorValue = configuration.id ? '=' + configuration.id : '';
      var selector = 'button[data-checkout-button' + selectorValue + ']';
      var targets = document.querySelectorAll(selector);
      var i = 0;

      targets.forEach(function (target) {
        var props = {
          productName: configuration.productName,
          productSubheading: configuration.productSubheading,
          offerLabel: configuration.offerLabel,
          offers: configuration.offers,
          logo: configuration.logo,
          logo2x: configuration.logo2x,
          httpProviderURL: configuration.httpProviderURL,
          licenseCoreAddress: configuration.licenseCoreAddress
        };
        props.defaultOffer = _lodash2.default.get(target, ['dataset', 'checkoutOffer']);
        props.label = target.textContent;
        props.buttonId = '' + i;

        var Checkout = _react2.default.createElement(_app2.default, props);

        var span = document.createElement('span');
        target.parentNode.replaceChild(span, target);
        (0, _reactDom.render)(Checkout, span);
        i += 1;
      });
    });
  });
};

exports.default = { configure: configure }; // for UMD