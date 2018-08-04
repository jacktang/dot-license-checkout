'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 1em;\n  h2 {\n    font-size: 2.5em;\n    margin: 0;\n    text-align: center;\n  }\n  &.error {\n    background-color: #ffcccc;\n    .errorView {\n      background-color: white;\n      border-radius: 5px;\n      padding: 0.1em 0.5em;\n    }\n  }\n\n  .orderNumber {\n    background-color: #d8d8d8;\n    padding: 0.4em;\n    a {\n      font-family: monospace;\n      overflow-wrap: break-word;\n      text-decoration: none;\n      color: #381774;\n\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n'], ['\n  padding: 1em;\n  h2 {\n    font-size: 2.5em;\n    margin: 0;\n    text-align: center;\n  }\n  &.error {\n    background-color: #ffcccc;\n    .errorView {\n      background-color: white;\n      border-radius: 5px;\n      padding: 0.1em 0.5em;\n    }\n  }\n\n  .orderNumber {\n    background-color: #d8d8d8;\n    padding: 0.4em;\n    a {\n      font-family: monospace;\n      overflow-wrap: break-word;\n      text-decoration: none;\n      color: #381774;\n\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _web3Utils = require('web3-utils');

var _web3Utils2 = _interopRequireDefault(_web3Utils);

var _etherscanLink = require('../../vendor/etherscan-link');

var _etherscanLink2 = _interopRequireDefault(_etherscanLink);

var _reactLadda = require('react-ladda');

var _reactLadda2 = _interopRequireDefault(_reactLadda);

require('ladda/dist/ladda-themeless.min.css');

var _web = require('../../redux/web3');

var Web3 = _interopRequireWildcard(_web);

var _config = require('../../redux/config');

var Config = _interopRequireWildcard(_config);

var _shop = require('../../redux/shop');

var Shop = _interopRequireWildcard(_shop);

var _theme = require('../../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _forms = require('../../styles/forms');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BN = _web3Utils2.default.BN;

var Confirmation = function (_Component) {
  _inherits(Confirmation, _Component);

  function Confirmation(props) {
    _classCallCheck(this, Confirmation);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Confirmation.prototype.render = function render() {
    var _props = this.props,
        orderTxHash = _props.orderTxHash,
        orderTxReceipt = _props.orderTxReceipt,
        networkId = _props.networkId,
        transactionError = _props.transactionError,
        productName = _props.productName;


    var txHash = orderTxHash || orderTxReceipt.transactionHash;

    var transactionUrl = _etherscanLink2.default.createExplorerLink(txHash, networkId);

    var errorView = _react2.default.createElement(
      'div',
      { className: 'errorView' },
      _react2.default.createElement(
        'h2',
        null,
        'There was a problem'
      ),
      ' ',
      _react2.default.createElement(
        'p',
        null,
        'Unfortunately, it appears that your transaction did not succeed.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'View the transaction',
        ' ',
        _react2.default.createElement(
          'a',
          { href: transactionUrl, target: '_blank', rel: 'external' },
          'by clicking here'
        ),
        '. ',
        _react2.default.createElement(
          'b',
          null,
          'Save this URL.'
        )
      ),
      _react2.default.createElement(
        'p',
        { className: 'not-sure' },
        'Still not sure what to do?',
        _react2.default.createElement('br', null),
        ' Read the FAQ'
      )
    );

    var successView = _react2.default.createElement(
      'div',
      { className: 'successView' },
      _react2.default.createElement(
        'h2',
        null,
        'Success!'
      ),
      ' ',
      _react2.default.createElement(
        'p',
        null,
        'Your order number is:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'orderNumber' },
        _react2.default.createElement(
          'a',
          { href: transactionUrl, target: '_blank', rel: 'external' },
          txHash
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'Save this order number.'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Now ',
        _react2.default.createElement(
          'b',
          null,
          'open ',
          productName
        ),
        ' and the purchase should be automatically activated.'
      ),
      _react2.default.createElement(
        'p',
        { className: 'not-sure' },
        'Still not sure what to do?',
        _react2.default.createElement('br', null),
        ' Read the FAQ'
      )
    );

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(this.props.className, transactionError ? 'error' : null)
      },
      transactionError ? errorView : successView
    );
  };

  return Confirmation;
}(_react.Component);

function mapStateToProps(state) {
  var _Config$getConfig = Config.getConfig(state),
      productName = _Config$getConfig.productName;

  var networkId = Web3.getNetworkVersion(state);
  var orderTxHash = Shop.getOrderTxHash(state);
  var orderTxReceipt = Shop.getOrderTxReceipt(state);

  var status = orderTxReceipt.status;

  var transactionError = status === '0x0' || status === 0 ? true : false;

  return {
    productName: productName,
    networkId: networkId,
    orderTxHash: orderTxHash,
    orderTxReceipt: orderTxReceipt,
    transactionError: transactionError
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, Shop), dispatch);
}

Confirmation = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Confirmation);

exports.default = (0, _styledComponents2.default)(Confirmation)(_templateObject);
module.exports = exports['default'];