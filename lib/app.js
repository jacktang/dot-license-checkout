'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _createStore = require('./redux/createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _DotCheckoutProvider = require('./DotCheckoutProvider');

var _DotCheckoutProvider2 = _interopRequireDefault(_DotCheckoutProvider);

var _DotCheckoutButton = require('./components/DotCheckoutButton');

var _DotCheckoutButton2 = _interopRequireDefault(_DotCheckoutButton);

var _ModalMain = require('./components/ModalMain');

var _ModalMain2 = _interopRequireDefault(_ModalMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.store = (0, _createStore2.default)();
    return _this;
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: this.store },
      _react2.default.createElement(
        _DotCheckoutProvider2.default,
        this.props,
        _react2.default.createElement(_DotCheckoutButton2.default, this.props)
      )
    );
  };

  return App;
}(_react.Component);

exports.default = App;
module.exports = exports['default'];