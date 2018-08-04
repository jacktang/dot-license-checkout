'use strict';

exports.__esModule = true;
exports.FormStyles = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  input,\n  select,\n  button,\n  .btn {\n    background-color: transparent;\n    border: 1px solid black;\n    color: black;\n    border-radius: 3px;\n    display: block;\n    width: 100%;\n    font-family: ', ';\n    font-size: 16px;\n    box-sizing: border-box;\n\n    &.error {\n      border: 1px solid red;\n    }\n\n    &:disabled {\n      border: 1px solid #848484;\n      color: #848484;\n    }\n  }\n\n  .btn {\n    padding: 0.3em 0em;\n    width: 100%;\n    height: 42px;\n    font-size: 1.2rem;\n    text-align: center;\n    border-radius: 5px;\n    text-decoration: none;\n  }\n\n  input,\n  select {\n    height: 30px;\n  }\n\n  input {\n    padding: 0 0.4em;\n  }\n\n  label {\n    display: block;\n    padding-bottom: 0.4em;\n  }\n\n  select {\n  }\n\n  .form-group {\n    padding-bottom: 1.6em;\n    &.last {\n      padding-bottom: 0;\n    }\n  }\n\n  button {\n    padding: 0.3em 0em;\n    font-size: 1.4rem;\n    border-radius: 5px;\n    width: 80%;\n    margin: 0 auto;\n    cursor: pointer;\n  }\n\n  .muted {\n    padding-top: 2px;\n    font-size: 0.8em;\n    color: #8e8e8e;\n    font-style: italic;\n    text-align: right;\n    a {\n      color: #8e8e8e;\n      text-decoration: none;\n    }\n  }\n\n  .errorMsg {\n    color: red;\n    font-size: 0.9em;\n    margin-bottom: 0;\n    margin-top: 0.5em;\n  }\n'], ['\n  input,\n  select,\n  button,\n  .btn {\n    background-color: transparent;\n    border: 1px solid black;\n    color: black;\n    border-radius: 3px;\n    display: block;\n    width: 100%;\n    font-family: ', ';\n    font-size: 16px;\n    box-sizing: border-box;\n\n    &.error {\n      border: 1px solid red;\n    }\n\n    &:disabled {\n      border: 1px solid #848484;\n      color: #848484;\n    }\n  }\n\n  .btn {\n    padding: 0.3em 0em;\n    width: 100%;\n    height: 42px;\n    font-size: 1.2rem;\n    text-align: center;\n    border-radius: 5px;\n    text-decoration: none;\n  }\n\n  input,\n  select {\n    height: 30px;\n  }\n\n  input {\n    padding: 0 0.4em;\n  }\n\n  label {\n    display: block;\n    padding-bottom: 0.4em;\n  }\n\n  select {\n  }\n\n  .form-group {\n    padding-bottom: 1.6em;\n    &.last {\n      padding-bottom: 0;\n    }\n  }\n\n  button {\n    padding: 0.3em 0em;\n    font-size: 1.4rem;\n    border-radius: 5px;\n    width: 80%;\n    margin: 0 auto;\n    cursor: pointer;\n  }\n\n  .muted {\n    padding-top: 2px;\n    font-size: 0.8em;\n    color: #8e8e8e;\n    font-style: italic;\n    text-align: right;\n    a {\n      color: #8e8e8e;\n      text-decoration: none;\n    }\n  }\n\n  .errorMsg {\n    color: red;\n    font-size: 0.9em;\n    margin-bottom: 0;\n    margin-top: 0.5em;\n  }\n']);

var _styledComponents = require('styled-components');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var FormStyles = exports.FormStyles = (0, _styledComponents.css)(_templateObject, _theme2.default.fontFamilyMonospace);