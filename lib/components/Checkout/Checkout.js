'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  .header {\n    color: white;\n    background-image: linear-gradient(163deg, #5d4092, #2d096d);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    text-align: center;\n\n    h2 {\n      margin-top: 0;\n      margin-bottom: 0;\n      padding-top: 84px;\n      padding-bottom: 2px;\n    }\n\n    h3 {\n      font-weight: normal;\n      margin: 0;\n      padding-top: 0;\n      padding-bottom: 18px;\n    }\n  }\n\n  .logo-container {\n    margin: 0 auto;\n    position: relative;\n    img {\n      position: absolute;\n      top: -75px;\n      margin: 0 auto;\n      left: 62px;\n    }\n  }\n'], ['\n  .header {\n    color: white;\n    background-image: linear-gradient(163deg, #5d4092, #2d096d);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    text-align: center;\n\n    h2 {\n      margin-top: 0;\n      margin-bottom: 0;\n      padding-top: 84px;\n      padding-bottom: 2px;\n    }\n\n    h3 {\n      font-weight: normal;\n      margin: 0;\n      padding-top: 0;\n      padding-bottom: 18px;\n    }\n  }\n\n  .logo-container {\n    margin: 0 auto;\n    position: relative;\n    img {\n      position: absolute;\n      top: -75px;\n      margin: 0 auto;\n      left: 62px;\n    }\n  }\n']);

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

var _Offers = require('./Offers');

var _Offers2 = _interopRequireDefault(_Offers);

var _Confirmation = require('./Confirmation');

var _Confirmation2 = _interopRequireDefault(_Confirmation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BN = _web3Utils2.default.BN;

var Checkout = function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout(props) {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Checkout.prototype.render = function render() {
    var _props = this.props,
        productName = _props.productName,
        productSubheading = _props.productSubheading,
        logo = _props.logo,
        logo2x = _props.logo2x,
        orderTxReceipt = _props.orderTxReceipt;


    var haveReceipt = orderTxReceipt ? true : false;
    // let haveReceipt = true;
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(this.props.className) },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'logo-container' },
          _react2.default.createElement('img', { src: logo })
        ),
        _react2.default.createElement(
          'h2',
          null,
          productName
        ),
        _react2.default.createElement(
          'h3',
          null,
          productSubheading
        )
      ),
      haveReceipt ? _react2.default.createElement(_Confirmation2.default, this.props) : _react2.default.createElement(_Offers2.default, this.props)
    );
  };

  return Checkout;
}(_react.Component);

function mapStateToProps(state) {
  var _Config$getConfig = Config.getConfig(state),
      productName = _Config$getConfig.productName,
      productSubheading = _Config$getConfig.productSubheading,
      logo = _Config$getConfig.logo,
      logo2x = _Config$getConfig.logo2x;

  var networkId = Web3.getNetworkVersion(state);
  var orderTxHash = Shop.getOrderTxHash(state);
  var orderTxReceipt = Shop.getOrderTxReceipt(state);

  return {
    networkId: networkId,
    productName: productName,
    productSubheading: productSubheading,
    logo: logo,
    logo2x: logo2x,
    orderTxHash: orderTxHash,
    orderTxReceipt: orderTxReceipt
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, Shop), dispatch);
}

Checkout = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Checkout);

exports.default = (0, _styledComponents2.default)(Checkout)(_templateObject);
module.exports = exports['default'];