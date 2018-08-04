'use strict';

exports.__esModule = true;
exports.MetamaskWrongNetwork = exports.MetamaskRequired = undefined;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _shop = require('../../redux/shop');

var Shop = _interopRequireWildcard(_shop);

var _config = require('../../redux/config');

var Config = _interopRequireWildcard(_config);

var _web = require('../../redux/web3');

var Web3 = _interopRequireWildcard(_web);

var _networkToName = require('../../util/networkToName');

var _networkToName2 = _interopRequireDefault(_networkToName);

var _ModalLoading = require('../ModalLoading');

var _ModalLoading2 = _interopRequireDefault(_ModalLoading);

var _MetamaskLocked = require('./MetamaskLocked');

var _MetamaskLocked2 = _interopRequireDefault(_MetamaskLocked);

var _MetamaskBase = require('./MetamaskBase');

var _MetamaskBase2 = _interopRequireDefault(_MetamaskBase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetamaskRequired = exports.MetamaskRequired = function MetamaskRequired(props) {
  var productName = props.productName;

  return _react2.default.createElement(
    _MetamaskBase2.default,
    { title: 'Metamask Required' },
    _react2.default.createElement(
      'p',
      { className: 'required' },
      'Metamask is required to buy ',
      productName,
      '.'
    ),
    _react2.default.createElement(
      'a',
      {
        className: 'btn install',
        href: 'https://metamask.io/',
        target: '_blank',
        rel: 'external'
      },
      'Install Metamask'
    ),
    _react2.default.createElement(
      'button',
      { className: 'install' },
      'Install Metamask'
    ),
    _react2.default.createElement(
      'p',
      { className: 'not-sure' },
      'Still not sure what to do?',
      _react2.default.createElement('br', null),
      ' ',
      _react2.default.createElement(
        'a',
        { href: props.helpURL, target: '_blank', rel: 'external' },
        'Read the FAQ'
      )
    )
  );
};

var MetamaskWrongNetwork = exports.MetamaskWrongNetwork = function MetamaskWrongNetwork(props) {
  var networkName = props.networkName;

  return _react2.default.createElement(
    _MetamaskBase2.default,
    { title: 'Main Network Required' },
    _react2.default.createElement(
      'p',
      { className: 'required' },
      'Your Metamask is on the ',
      networkName,
      ' network'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Please switch to the "Main Ethereum Network"'
    )
  );
};

var MetamaskDetection = function (_Component) {
  _inherits(MetamaskDetection, _Component);

  function MetamaskDetection() {
    _classCallCheck(this, MetamaskDetection);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MetamaskDetection.prototype.render = function render() {
    var _props = this.props,
        accounts = _props.accounts,
        shopInitialized = _props.shopInitialized,
        productName = _props.productName,
        networkName = _props.networkName,
        providerFound = _props.providerFound;


    var needInitialized = !shopInitialized;
    var needMetamask = !providerFound;
    var needUnlocked = _lodash2.default.isEmpty(accounts);
    var allowedNetworks = ['mainnet', 'rinkeby', 'ropsten'];
    var onTheRightNetwork = _lodash2.default.includes(allowedNetworks, networkName);
    var needToChangeNetworks = !onTheRightNetwork;

    return needInitialized ? _react2.default.createElement(_ModalLoading2.default, null) : needMetamask ? _react2.default.createElement(MetamaskRequired, this.props) : needToChangeNetworks ? _react2.default.createElement(MetamaskWrongNetwork, this.props) : needUnlocked ? _react2.default.createElement(_MetamaskLocked2.default, this.props) : this.props.children;
  };

  return MetamaskDetection;
}(_react.Component);

function mapStateToProps(state) {
  return {
    shopInitialized: Shop.getInitialized(state),
    accounts: Web3.getAccounts(state),
    productName: Config.getProductName(state),
    providerFound: Web3.getProviderFound(state),
    networkVersion: Web3.getNetworkVersion(state),
    networkName: (0, _networkToName2.default)(Web3.getNetworkVersion(state))
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

MetamaskDetection = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MetamaskDetection);

exports.default = (0, _styledComponents2.default)(MetamaskDetection)(_templateObject);