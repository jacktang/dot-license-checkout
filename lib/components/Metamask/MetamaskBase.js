'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .header {\n    color: white;\n    background-image: linear-gradient(163deg, #5d4092, #2d096d);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    text-align: center;\n\n    h2 {\n      margin-top: 0;\n      margin-bottom: 0;\n      padding-top: 84px;\n      padding-bottom: 2px;\n      padding-left: 0.5em;\n      padding-right: 0.5em;\n    }\n\n    h3 {\n      font-weight: normal;\n      margin: 0;\n      padding-top: 0;\n      padding-bottom: 18px;\n    }\n  }\n\n  .logo-container {\n    margin: 0 auto;\n    position: relative;\n    img {\n      position: absolute;\n      top: -75px;\n      margin: 0 auto;\n      left: 62px;\n    }\n  }\n\n  .body {\n    padding: 1em;\n\n    ', ';\n\n    .required {\n      text-align: center;\n      padding-top: 0;\n      font-size: 1.4rem;\n      line-height: 1.8rem;\n    }\n\n    button.install {\n      padding: 0.3em 0em;\n      width: 100%;\n      height: 42px;\n      font-size: 1.2rem;\n    }\n\n    p.not-sure {\n      line-height: 1.5rem;\n      margin-bottom: 0;\n    }\n  }\n'], ['\n  .header {\n    color: white;\n    background-image: linear-gradient(163deg, #5d4092, #2d096d);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n    text-align: center;\n\n    h2 {\n      margin-top: 0;\n      margin-bottom: 0;\n      padding-top: 84px;\n      padding-bottom: 2px;\n      padding-left: 0.5em;\n      padding-right: 0.5em;\n    }\n\n    h3 {\n      font-weight: normal;\n      margin: 0;\n      padding-top: 0;\n      padding-bottom: 18px;\n    }\n  }\n\n  .logo-container {\n    margin: 0 auto;\n    position: relative;\n    img {\n      position: absolute;\n      top: -75px;\n      margin: 0 auto;\n      left: 62px;\n    }\n  }\n\n  .body {\n    padding: 1em;\n\n    ', ';\n\n    .required {\n      text-align: center;\n      padding-top: 0;\n      font-size: 1.4rem;\n      line-height: 1.8rem;\n    }\n\n    button.install {\n      padding: 0.3em 0em;\n      width: 100%;\n      height: 42px;\n      font-size: 1.2rem;\n    }\n\n    p.not-sure {\n      line-height: 1.5rem;\n      margin-bottom: 0;\n    }\n  }\n']);

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

var _theme = require('../../styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _forms = require('../../styles/forms');

var _metamask = require('./img/metamask.png');

var _metamask2 = _interopRequireDefault(_metamask);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetamaskBase = function (_Component) {
  _inherits(MetamaskBase, _Component);

  function MetamaskBase() {
    _classCallCheck(this, MetamaskBase);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MetamaskBase.prototype.render = function render() {
    var title = this.props.title;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(this.props.className) },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'logo-container' },
          _react2.default.createElement('img', { src: _metamask2.default })
        ),
        _react2.default.createElement(
          'h2',
          null,
          title
        ),
        _react2.default.createElement('h3', null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'body' },
        this.props.children
      )
    );
  };

  return MetamaskBase;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({}, dispatch);
}

MetamaskBase = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MetamaskBase);

exports.default = (0, _styledComponents2.default)(MetamaskBase)(_templateObject, _forms.FormStyles);
module.exports = exports['default'];