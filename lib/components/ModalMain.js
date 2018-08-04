'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  .rodal-dialog {\n    padding: 0;\n  }\n'], ['\n  .rodal-dialog {\n    padding: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _rodal = require('rodal');

var _rodal2 = _interopRequireDefault(_rodal);

require('rodal/lib/rodal.css');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalMain = function (_Component) {
  _inherits(ModalMain, _Component);

  function ModalMain(props) {
    _classCallCheck(this, ModalMain);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { visible: props.visible ? props.visible : false };
    return _this;
  }

  ModalMain.prototype.componentDidMount = function componentDidMount() {
    this.props.onRef(this);
  };

  ModalMain.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.onRef(undefined);
  };

  ModalMain.prototype.show = function show() {
    this.setState({ visible: true });
  };

  ModalMain.prototype.hide = function hide() {
    this.setState({ visible: false });
  };

  ModalMain.prototype.render = function render() {
    var modalProps = this.context.modalProps;


    var modalStyle = {
      height: 'auto',
      bottom: 'auto',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '6px',
      backgroundColor: '#f5f5f6',
      boxShadow: '0 12px 30px 0 rgba(0,0,0,.5), inset 0 1px 0 0 hsla(0,0%,100%,.65)',
      backfaceVisibility: 'hidden'
    };

    return _react2.default.createElement(
      _rodal2.default,
      _extends({
        className: (0, _classnames2.default)(this.props.className),
        visible: this.state.visible,
        onClose: this.hide.bind(this),
        closeMaskOnClick: false,
        width: 270,
        customStyles: modalStyle
      }, modalProps),
      this.props.children
    );
  };

  return ModalMain;
}(_react.Component);

ModalMain.contextTypes = {
  modalProps: _propTypes2.default.any
};

exports.default = (0, _styledComponents2.default)(ModalMain)(_templateObject);
module.exports = exports['default'];