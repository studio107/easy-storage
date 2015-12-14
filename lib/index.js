"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sessionStorage = exports.localStorage = exports.cookieStorage = undefined;

var _jsCookie = require("js-cookie");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _create_store = require("./create_store");

var _create_store2 = _interopRequireDefault(_create_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookieStorage = _jsCookie2.default,
    localStorage = (0, _create_store2.default)(localStorage),
    sessionStorage = (0, _create_store2.default)(sessionStorage);

exports.cookieStorage = cookieStorage;
exports.localStorage = localStorage;
exports.sessionStorage = sessionStorage;