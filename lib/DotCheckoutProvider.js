'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _web = require('./util/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Utils = require('web3-utils');

var _web3Utils2 = _interopRequireDefault(_web3Utils);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _web3 = require('./redux/web3');

var Web3Actions = _interopRequireWildcard(_web3);

var _config = require('./redux/config');

var ConfigActions = _interopRequireWildcard(_config);

var _dotLicenseAbi = require('./dot-license.abi.json');

var _dotLicenseAbi2 = _interopRequireDefault(_dotLicenseAbi);

var _browser = require('./util/browser');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Web3 from 'web3';


var DotCheckoutProvider = function (_Component) {
  _inherits(DotCheckoutProvider, _Component);

  function DotCheckoutProvider(props) {
    _classCallCheck(this, DotCheckoutProvider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.cookies = new _universalCookie2.default();
    return _this;
  }

  DotCheckoutProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _props = this.props,
        productName = _props.productName,
        productSubheading = _props.productSubheading,
        offerLabel = _props.offerLabel,
        offers = _props.offers,
        logo = _props.logo,
        logo2x = _props.logo2x,
        tosURL = _props.tosURL,
        helpURL = _props.helpURL,
        vanityAddressPrefix = _props.vanityAddressPrefix,
        modalProps = _props.modalProps,
        licenseCoreAddress = _props.licenseCoreAddress,
        httpProviderURL = _props.httpProviderURL,
        defaultOffer = _props.defaultOffer;


    var abis = _lodash2.default.reduce(_dotLicenseAbi2.default.contracts, function (acc, attributes, rawName) {
      if (attributes.abi) {
        var name = rawName.split(':')[1];
        acc[name] = {
          abi: JSON.parse(attributes.abi),
          devdoc: JSON.parse(attributes.devdoc),
          userdoc: JSON.parse(attributes.userdoc)
        };
      }
      return acc;
    }, {});

    this.props.setCheckoutConfig({
      productName: productName,
      productSubheading: productSubheading,
      offerLabel: offerLabel,
      offers: offers,
      logo: logo,
      logo2x: logo2x,
      tosURL: tosURL,
      helpURL: helpURL,
      vanityAddressPrefix: vanityAddressPrefix,
      modalProps: modalProps,
      licenseCoreAddress: licenseCoreAddress,
      httpProviderURL: httpProviderURL,
      defaultOffer: defaultOffer,
      abis: abis
    });

    if (document.readyState == 'complete') {
      this.props.initializeWeb3();
    } else {
      window.addEventListener('load', function () {
        _this2.props.initializeWeb3();
      });
    }
  };

  DotCheckoutProvider.prototype.componentWillMount = function componentWillMount() {
    this.setExternalAssignee();
    this.setExternalAffiliate();
  };

  /*
   * Sets the value to be used for an assignee in context.
   *
   * Assignee's should prioritize the query string over the cookie. (See
   * affiliate for differences.) However, if there is no query string, then just
   * use the cookie. The idea here is that someone might visit once and then
   * come back later to buy, and so we want to make that as easy as possible.
   */


  DotCheckoutProvider.prototype.setExternalAssignee = function setExternalAssignee() {
    var qs = _queryString2.default.parse(_browser2.default.getLocation().search);
    var assignee = _lodash2.default.get(qs, 'assignee');

    var ASSIGNEE = 'assignee';

    // if we have an assignee in the querystring, then set it
    if (assignee && _web3Utils2.default.isAddress(assignee)) {
      this.cookies.set(ASSIGNEE, assignee, { path: '/' });
      this.assignee = assignee;
      return;
    }

    var assigneeInCookie = this.cookies.get(ASSIGNEE);

    if (assigneeInCookie && _web3Utils2.default.isAddress(assigneeInCookie)) {
      this.assignee = assigneeInCookie;
      return;
    }
  };

  /*
   * Sets the value to be usd for an affiliate in context.
   *
   * The affiliate should prioritize any previous cookie! This is different from assignee, which takes the most recent query string.
   *
   * Instead here, we give the *earliest* affiliate credit for this sale, regardless of if there is a new query string parameter.
   *
   */


  DotCheckoutProvider.prototype.setExternalAffiliate = function setExternalAffiliate() {
    var AFFILIATE = 'affiliate';

    var affiliateInCookie = this.cookies.get(AFFILIATE);
    if (affiliateInCookie && _web3Utils2.default.isAddress(affiliateInCookie)) {
      this.affiliate = affiliateInCookie;
      return;
    }

    var qs = _queryString2.default.parse(_browser2.default.getLocation().search);
    var affiliateInQS = _lodash2.default.get(qs, 'affiliate');

    // if we have an assignee in the querystring, then set it
    if (affiliateInQS && _web3Utils2.default.isAddress(affiliateInQS)) {
      this.cookies.set(AFFILIATE, affiliateInQS, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      });
      this.affiliate = affiliateInQS;
      return;
    }
  };

  DotCheckoutProvider.prototype.getChildContext = function getChildContext() {
    var modalProps = this.props.modalProps;


    return {
      modalProps: modalProps,
      cookies: this.cookies,
      affiliate: this.affiliate,
      assignee: this.assignee
    };
  };

  DotCheckoutProvider.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.children
    );
  };

  return DotCheckoutProvider;
}(_react.Component);

DotCheckoutProvider.childContextTypes = {
  modalProps: _propTypes2.default.any,
  cookies: _propTypes2.default.any,
  affiliate: _propTypes2.default.string,
  assignee: _propTypes2.default.string
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, Web3Actions, ConfigActions), dispatch);
}

DotCheckoutProvider = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DotCheckoutProvider);

exports.default = DotCheckoutProvider;
module.exports = exports['default'];