'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _config = require('../redux/config');

var Config = _interopRequireWildcard(_config);

var _shop = require('../redux/shop');

var Shop = _interopRequireWildcard(_shop);

var _ModalMain = require('./ModalMain');

var _ModalMain2 = _interopRequireDefault(_ModalMain);

var _forms = require('../styles/forms');

var _MetamaskDetection = require('./Metamask/MetamaskDetection');

var _MetamaskDetection2 = _interopRequireDefault(_MetamaskDetection);

var _Checkout = require('./Checkout/Checkout');

var _Checkout2 = _interopRequireDefault(_Checkout);

var _browser = require('../util/browser');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetamaskWrappedCheckout = function MetamaskWrappedCheckout(props) {
  return _react2.default.createElement(
    _MetamaskDetection2.default,
    props,
    _react2.default.createElement(_Checkout2.default, props)
  );
};

var DotCheckoutButton = function (_Component) {
  _inherits(DotCheckoutButton, _Component);

  function DotCheckoutButton(props) {
    _classCallCheck(this, DotCheckoutButton);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { showModal: false };
    _this.buyButtonClicked = _this.buyButtonClicked.bind(_this);
    return _this;
  }

  DotCheckoutButton.prototype.showModal = function showModal() {
    this.setState(function (prevState, props) {
      return _extends({}, prevState, {
        showModal: true
      });
    });
    this.modal.show();
  };

  DotCheckoutButton.prototype.componentDidMount = function componentDidMount() {
    var show = this.props.show;

    // TODO -- something else should read from qs and then
    // dispatch to redux

    var buttonId = this.props.buttonId || '1';
    var qs = _queryString2.default.parse(_browser2.default.getLocation().search);
    var showId = _lodash2.default.get(qs, 'dcshow');
    if (showId == buttonId || show) {
      this.showModal();
    }
  };

  DotCheckoutButton.prototype.configureModal = function configureModal() {
    var _props = this.props,
        productName = _props.productName,
        productSubheading = _props.productSubheading,
        offerLabel = _props.offerLabel,
        offers = _props.offers,
        logo = _props.logo,
        logo2x = _props.logo2x,
        tosURL = _props.tosURL,
        helpURL = _props.helpURL,
        modalProps = _props.modalProps,
        licenseCoreAddress = _props.licenseCoreAddress,
        httpProviderURL = _props.httpProviderURL,
        defaultOffer = _props.defaultOffer;


    if (defaultOffer) {
      this.props.setSelectedOfferId(defaultOffer);
    }

    var checkoutConfig = _lodash2.default.pickBy({
      productName: productName,
      productSubheading: productSubheading,
      offerLabel: offerLabel,
      offers: offers,
      logo: logo,
      logo2x: logo2x,
      tosURL: tosURL,
      helpURL: helpURL,
      modalProps: modalProps,
      licenseCoreAddress: licenseCoreAddress,
      httpProviderURL: httpProviderURL,
      defaultOffer: defaultOffer
    });

    // TODO -- this api is dumb because it doesn't respect the DotCheckoutProvider settings
    this.props.setCheckoutConfig(checkoutConfig);
  };

  DotCheckoutButton.prototype.buyButtonClicked = function buyButtonClicked(evt) {
    evt.preventDefault();
    this.configureModal();
    this.showModal();
  };

  DotCheckoutButton.prototype.render = function render() {
    var _this2 = this;

    var showModal = this.state.showModal;
    var label = this.props.label;

    label = label || this.props.children || 'Buy now';
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(this.props.className) },
      _react2.default.createElement(
        _ModalMain2.default,
        { visible: showModal, onRef: function onRef(ref) {
            return _this2.modal = ref;
          } },
        _react2.default.createElement(MetamaskWrappedCheckout, this.props)
      ),
      _react2.default.createElement(
        'button',
        { className: 'buy-button', onClick: this.buyButtonClicked },
        label
      )
    );
  };

  return DotCheckoutButton;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, Shop, Config), dispatch);
}

DotCheckoutButton = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DotCheckoutButton);

exports.default = (0, _styledComponents2.default)(DotCheckoutButton)(_templateObject, _forms.FormStyles);
module.exports = exports['default'];