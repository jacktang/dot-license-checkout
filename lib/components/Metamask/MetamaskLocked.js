'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

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

var _config = require('../../redux/config');

var Config = _interopRequireWildcard(_config);

var _web = require('../../redux/web3');

var Web3 = _interopRequireWildcard(_web);

var _MetamaskBase = require('./MetamaskBase');

var _MetamaskBase2 = _interopRequireDefault(_MetamaskBase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetamaskLocked = function (_Component) {
  _inherits(MetamaskLocked, _Component);

  function MetamaskLocked() {
    _classCallCheck(this, MetamaskLocked);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MetamaskLocked.prototype.componentDidMount = function componentDidMount() {
    this.props.pollForUnlocked();
  };

  MetamaskLocked.prototype.render = function render() {
    var productName = this.props.productName;

    return _react2.default.createElement(
      _MetamaskBase2.default,
      { title: 'Unlock Metamask to Pay' },
      _react2.default.createElement(
        'p',
        { className: 'required' },
        'Your Metamask is currently ',
        _react2.default.createElement(
          'b',
          null,
          'locked'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Please unlock Metamask to continue.'
      ),
      _react2.default.createElement(
        'p',
        { className: 'not-sure' },
        'Still not sure what to do?',
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement(
          'a',
          { href: this.props.helpURL, target: '_blank', rel: 'external' },
          'Read the FAQ'
        )
      )
    );
  };

  return MetamaskLocked;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, Web3), dispatch);
}

MetamaskLocked = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MetamaskLocked);

exports.default = (0, _styledComponents2.default)(MetamaskLocked)(_templateObject);
module.exports = exports['default'];