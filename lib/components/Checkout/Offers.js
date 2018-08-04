'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  &.form {\n    padding: 1em;\n    font-family: ', ';\n    transition: all 0.3 ease-out;\n    label {\n      text-align: left;\n    }\n\n    ', ';\n\n    &.submitting {\n      background-color: #dadada;\n      transition: all 0.3 ease-out;\n\n      label {\n        color: gray;\n      }\n    }\n  }\n\n  .infoMessage {\n    background-color: #ffff93;\n    padding: 1em;\n    margin: 1em -6px;\n    border-radius: 5px;\n  }\n  .warningMsg {\n    background-color: #ffff93;\n    padding: 1em;\n    margin: 1em -6px;\n    border-radius: 5px;\n  }\n\n  .help a,\n  a {\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  tt {\n    font-size: 1.2em;\n    background-color: #c1c1c1;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    color: black;\n  }\n\n  .legal {\n    font-size: 0.7rem;\n    padding-top: 20px;\n    color: #8e8e8e;\n    a {\n      color: #8e8e8e;\n      text-decoration: none;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .errorMsg {\n    word-wrap: break-word;\n  }\n\n  .trackTransaction {\n    padding-top: 1em;\n  }\n'], ['\n  &.form {\n    padding: 1em;\n    font-family: ', ';\n    transition: all 0.3 ease-out;\n    label {\n      text-align: left;\n    }\n\n    ', ';\n\n    &.submitting {\n      background-color: #dadada;\n      transition: all 0.3 ease-out;\n\n      label {\n        color: gray;\n      }\n    }\n  }\n\n  .infoMessage {\n    background-color: #ffff93;\n    padding: 1em;\n    margin: 1em -6px;\n    border-radius: 5px;\n  }\n  .warningMsg {\n    background-color: #ffff93;\n    padding: 1em;\n    margin: 1em -6px;\n    border-radius: 5px;\n  }\n\n  .help a,\n  a {\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  tt {\n    font-size: 1.2em;\n    background-color: #c1c1c1;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    color: black;\n  }\n\n  .legal {\n    font-size: 0.7rem;\n    padding-top: 20px;\n    color: #8e8e8e;\n    a {\n      color: #8e8e8e;\n      text-decoration: none;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .errorMsg {\n    word-wrap: break-word;\n  }\n\n  .trackTransaction {\n    padding-top: 1em;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var Offers = function (_Component) {
  _inherits(Offers, _Component);

  function Offers(props, context) {
    _classCallCheck(this, Offers);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      assignee: context.assignee || '',
      affiliate: context.affiliate || '',
      assigneeDirty: false,
      errors: {},
      warnings: {}
      // submitting: false
    };

    _this.onOfferSelected = _this.onOfferSelected.bind(_this);
    _this.onAssigneeChanged = _this.onAssigneeChanged.bind(_this);
    _this.onPayButtonPressed = _this.onPayButtonPressed.bind(_this);
    return _this;
  }

  Offers.prototype.componentWillMount = function componentWillMount() {
    this.configureOfferings();

    if (!_lodash2.default.isEmpty(this.state.assignee)) {
      this.onAssigneeChanged({ target: { value: this.state.assignee } });
    }
  };

  Offers.prototype.componentDidUpdate = function componentDidUpdate() {
    this.configureOfferings();
  };

  Offers.prototype.configureOfferings = function configureOfferings() {
    var _props = this.props,
        productName = _props.productName,
        productSubheading = _props.productSubheading,
        offerLabel = _props.offerLabel,
        offers = _props.offers,
        logo = _props.logo,
        logo2x = _props.logo2x,
        products = _props.products;


    var offerings = _lodash2.default.map(offers, function (offer) {
      var product = products[offer.productId];
      if (!product) return;
      var haveInterval = new BN(product.interval).gt(new BN(0));

      var numCycles = haveInterval ? new BN(offer.duration).div(new BN(product.interval)).toNumber() : 1;
      // TODO -- probably a good idea to assert divisibility here

      var totalPrice = new BN(product.price).mul(new BN(numCycles));

      return _extends({}, offer, {
        available: parseInt(product.inventory),
        numCycles: numCycles,
        totalPrice: totalPrice
      });
    });
    this.offerings = _lodash2.default.compact(offerings);
  };

  Offers.prototype.onOfferSelected = function onOfferSelected(event) {
    // this.setState({
    //   ...this.state
    // });
    this.props.setSelectedOfferId(event.target.value);
  };

  Offers.prototype.onAssigneeChanged = function onAssigneeChanged(event) {
    var _props2 = this.props,
        vanityAddressPrefix = _props2.vanityAddressPrefix,
        productName = _props2.productName;

    var assignee = event.target.value;

    var validateAssignee = function validateAssignee(assignee) {
      var isAddress = _web3Utils2.default.isAddress(assignee);
      if (!isAddress) {
        return {
          message: 'Assignee is not a valid address'
        };
      } else {
        return null;
      }
    };

    var errors = validateAssignee(assignee);

    var warningsAssignee = function warningsAssignee(assignee) {
      var isAddress = _web3Utils2.default.isAddress(assignee);
      if (isAddress && vanityAddressPrefix && !(_lodash2.default.startsWith(assignee, vanityAddressPrefix) || _lodash2.default.startsWith(assignee, '0x' + vanityAddressPrefix))) {
        return {
          message: _react2.default.createElement(
            'p',
            null,
            'Warning: An assignee address generated by ',
            productName,
            ' should normally start with the characters: ',
            _react2.default.createElement(
              'tt',
              null,
              vanityAddressPrefix
            ),
            ' ',
            'or ',
            _react2.default.createElement(
              'tt',
              null,
              '0x',
              vanityAddressPrefix
            )
          )
        };
      }
    };

    var warnings = warningsAssignee(assignee);

    this.setState(_extends({}, this.state, {
      assignee: assignee,
      assigneeDirty: true,
      errors: _extends({}, this.state.errors, {
        assignee: errors
      }),
      warnings: _extends({}, this.state.warnings, {
        assignee: warnings
      })
    }));
  };

  Offers.prototype.getSelectedOffering = function getSelectedOffering() {
    var selectedOfferId = this.props.selectedOfferId;

    return _lodash2.default.find(this.offerings, function (offering) {
      return offering.id == selectedOfferId;
    }) || _lodash2.default.first(this.offerings);
  };

  Offers.prototype.onPayButtonPressed = function onPayButtonPressed(event) {
    var offering = this.getSelectedOffering();
    if (offering) {
      this.props.placeOrder(offering.productId, offering.numCycles, this.state.assignee, this.state.affiliate, offering.totalPrice);
    }
  };

  Offers.prototype.render = function render() {
    var _props3 = this.props,
        productName = _props3.productName,
        productSubheading = _props3.productSubheading,
        offerLabel = _props3.offerLabel,
        offers = _props3.offers,
        logo = _props3.logo,
        logo2x = _props3.logo2x,
        selectedOfferId = _props3.selectedOfferId,
        products = _props3.products,
        tosURL = _props3.tosURL,
        helpURL = _props3.helpURL;


    var offerings = this.offerings;

    var options = _lodash2.default.map(offerings, function (offering) {
      if (!offering) return;
      var msg = '';
      var disabled = false;
      if (offering.available == 0) {
        msg = ' (out of stock)';
        disabled = true;
      }
      return _react2.default.createElement(
        'option',
        { disabled: disabled, key: offering.id, value: offering.id },
        offering.name,
        msg
      );
    });

    var selectedOffering = this.getSelectedOffering();

    var showPrice = selectedOffering ? _web3Utils2.default.fromWei(selectedOffering.totalPrice, 'ether').toString() : '';

    var assigneeErrors = this.state.errors.assignee ? true : false;
    var assigneeWarnings = this.state.warnings.assignee ? true : false;

    // TODO -- check to make sure the selected product isn't out of stock
    var formValid = true;

    if (assigneeErrors) formValid = false;
    if (_lodash2.default.isEmpty(this.state.assignee)) formValid = false;

    var formInvalid = !formValid;
    var placingOrder = this.props.placingOrder;
    // const placingOrder = true;

    var showInfoMessage = this.props.placingOrderMessage || this.props.orderTxHash;

    var transactionUrl = _etherscanLink2.default.createExplorerLink(this.props.orderTxHash, this.props.networkId);

    var placingOrderError = _lodash2.default.get(this.props, ['placingOrderError', 'message'], '');
    var placingOrderErrorMsg = placingOrderError.split('\n')[0];

    var selectValue = selectedOfferId || '';

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(this.props.className, 'form', placingOrder ? 'submitting' : null)
      },
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'offer' },
          offerLabel,
          ':'
        ),
        _react2.default.createElement(
          'select',
          {
            name: 'offer',
            value: selectValue,
            onChange: this.onOfferSelected,
            disabled: placingOrder
          },
          options
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'assignee' },
          productName,
          ' Address:'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          name: 'assignee',
          placeholder: 'example: db369c07c8e365aa8fabe5e40a320d35cc350ba2',
          onChange: this.onAssigneeChanged,
          className: (0, _classnames2.default)(assigneeErrors ? 'error' : null),
          value: this.state.assignee,
          disabled: placingOrder
        }),
        _react2.default.createElement(
          'div',
          { className: 'muted help' },
          _react2.default.createElement(
            'a',
            { href: helpURL },
            'What is a ',
            productName,
            ' Address?'
          )
        ),
        assigneeErrors ? _react2.default.createElement(
          'p',
          { className: 'errorMsg' },
          this.state.errors.assignee.message
        ) : null,
        assigneeWarnings ? _react2.default.createElement(
          'div',
          { className: 'warningMsg' },
          this.state.warnings.assignee.message
        ) : null
      ),
      _react2.default.createElement('input', { type: 'hidden', name: 'affiliate', value: this.state.affiliate }),
      _react2.default.createElement(
        'div',
        { className: 'form-group last' },
        _react2.default.createElement(
          _reactLadda2.default,
          {
            className: 'pay-button',
            disabled: !formValid,
            onClick: this.onPayButtonPressed,
            loading: this.props.placingOrder,
            'data-color': '#eee',
            'data-size': _reactLadda.XL,
            'data-style': _reactLadda.EXPAND_RIGHT,
            'data-spinner-size': 30,
            'data-spinner-color': '#381774',
            'data-spinner-lines': 12
          },
          'Pay \u039E',
          showPrice
        )
      ),
      this.props.placingOrderError ? _react2.default.createElement(
        'p',
        { className: 'errorMsg' },
        placingOrderErrorMsg
      ) : null,
      showInfoMessage ? _react2.default.createElement(
        'div',
        { className: 'infoMessage' },
        this.props.placingOrderMessage ? _react2.default.createElement(
          'div',
          { className: 'placingOrderMessage' },
          this.props.placingOrderMessage
        ) : null,
        this.props.orderTxHash ? _react2.default.createElement(
          'div',
          { className: 'trackTransaction' },
          'Track your transaction',
          ' ',
          _react2.default.createElement(
            'a',
            { href: transactionUrl, target: '_blank', rel: 'external' },
            'by clicking here.'
          )
        ) : null
      ) : null,
      _react2.default.createElement(
        'div',
        { className: 'legal' },
        'By approving this transaction you agree to our',
        ' ',
        _react2.default.createElement(
          'a',
          { href: tosURL, target: '_blank', rel: 'external' },
          'terms of service'
        )
      )
    );
  };

  return Offers;
}(_react.Component);

Offers.contextTypes = {
  affiliate: _propTypes2.default.string,
  assignee: _propTypes2.default.string
};

function mapStateToProps(state, ownProps) {
  var _Config$getConfig = Config.getConfig(state),
      productName = _Config$getConfig.productName,
      productSubheading = _Config$getConfig.productSubheading,
      offerLabel = _Config$getConfig.offerLabel,
      offers = _Config$getConfig.offers,
      logo = _Config$getConfig.logo,
      logo2x = _Config$getConfig.logo2x,
      tosURL = _Config$getConfig.tosURL,
      helpURL = _Config$getConfig.helpURL,
      vanityAddressPrefix = _Config$getConfig.vanityAddressPrefix;

  productName = ownProps.productName || productName;
  productSubheading = ownProps.productSubheading || productSubheading;
  offerLabel = ownProps.offerLabel || offerLabel;
  offers = ownProps.offers || offers;
  logo = ownProps.logo || logo;
  logo2x = ownProps.logo2x || logo2x;

  var networkId = Web3.getNetworkVersion(state);
  var products = Shop.getProducts(state);
  var placingOrder = Shop.getPlacingOrder(state);
  var placedOrder = Shop.getPlacedOrder(state);
  var placingOrderError = Shop.getPlacingOrderError(state);
  var placingOrderMessage = Shop.getPlacingOrderMessage(state);
  var orderTxHash = Shop.getOrderTxHash(state);
  var orderTxReceipt = Shop.getOrderTxReceipt(state);
  var selectedOfferId = Shop.getSelectedOfferId(state);

  return {
    networkId: networkId,
    productName: productName,
    productSubheading: productSubheading,
    offerLabel: offerLabel,
    offers: offers,
    logo: logo,
    logo2x: logo2x,
    tosURL: tosURL,
    helpURL: helpURL,
    vanityAddressPrefix: vanityAddressPrefix,
    products: products,
    placingOrder: placingOrder,
    placedOrder: placedOrder,
    placingOrderError: placingOrderError,
    placingOrderMessage: placingOrderMessage,
    orderTxHash: orderTxHash,
    orderTxReceipt: orderTxReceipt,
    selectedOfferId: selectedOfferId
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, Shop), dispatch);
}

Offers = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Offers);

exports.default = (0, _styledComponents2.default)(Offers)(_templateObject, _theme2.default.fontFamilyMonospace, _forms.FormStyles);
module.exports = exports['default'];