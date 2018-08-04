'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _metamaskLogo = require('metamask-logo');

var _metamaskLogo2 = _interopRequireDefault(_metamaskLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetamaskLogo = function (_Component) {
  _inherits(MetamaskLogo, _Component);

  function MetamaskLogo() {
    _classCallCheck(this, MetamaskLogo);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MetamaskLogo.prototype.componentDidMount = function componentDidMount() {
    this.viewer = (0, _metamaskLogo2.default)({
      pxNotRatio: true,
      width: 200,
      height: 200,
      followMouse: false
    });
    this.el.appendChild(this.viewer.container);
  };

  MetamaskLogo.prototype.componentWillUnmount = function componentWillUnmount() {
    this.viewer.stopAnimation();
  };

  MetamaskLogo.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement('div', {
      className: (0, _classnames2.default)(this.props.className),
      ref: function ref(el) {
        return _this2.el = el;
      }
    });
  };

  return MetamaskLogo;
}(_react.Component);

exports.default = (0, _styledComponents2.default)(MetamaskLogo)(_templateObject);
module.exports = exports['default'];