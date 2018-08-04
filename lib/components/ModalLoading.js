'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: center;\n'], ['\n  text-align: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ModalLoading = function ModalLoading(props) {
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(props.className) },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement('div', { className: 'logo-container' }),
      _react2.default.createElement(
        'h2',
        null,
        'Loading...'
      ),
      _react2.default.createElement('h3', null)
    ),
    _react2.default.createElement('div', { className: 'body' })
  );
};

exports.default = (0, _styledComponents2.default)(ModalLoading)(_templateObject);
module.exports = exports['default'];