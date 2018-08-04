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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Home.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(this.props.className) },
      _react2.default.createElement(
        'h2',
        null,
        'Welcome to the Home'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home 1'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/offers' },
        'Offers'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/metamask' },
        'Metamask'
      )
    );
  };

  return Home;
}(_react.Component);

exports.default = (0, _styledComponents2.default)(Home)(_templateObject);
module.exports = exports['default'];