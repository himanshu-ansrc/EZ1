module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8000\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Desktop/EZT1/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/index.js":
/*!*************************************!*\
  !*** ./server/controllers/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/himanshusavita/Desktop/EZT1/server/controllers/index.js: Invalid left-hand side in assignment expression (59:16)\\n\\n\\u001b[0m \\u001b[90m 57 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 58 | \\u001b[39m         \\u001b[36mfor\\u001b[39m(let xlsxColumnValeus of xlsxJSON){\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 59 | \\u001b[39m             \\u001b[36mif\\u001b[39m(xlsxColumnValeus\\u001b[33m.\\u001b[39mcol1 \\u001b[33m&&\\u001b[39m xlsxColumnValeus\\u001b[33m.\\u001b[39mcol1\\u001b[33m=\\u001b[39m \\u001b[33m&&\\u001b[39m xlsxColumnValeus\\u001b[33m.\\u001b[39mcol2\\u001b[33m!==\\u001b[39mundefined){\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 60 | \\u001b[39m                categoriesXML \\u001b[33m=\\u001b[39m internalCategories()\\u001b[0m\\n\\u001b[0m \\u001b[90m 61 | \\u001b[39m             }\\u001b[36melse\\u001b[39m \\u001b[36mif\\u001b[39m(xlsxColumnValeus\\u001b[33m.\\u001b[39mcol1 \\u001b[33m&&\\u001b[39m xlsxColumnValeus\\u001b[33m.\\u001b[39mcol1\\u001b[33m=\\u001b[39m \\u001b[33m&&\\u001b[39m xlsxColumnValeus\\u001b[33m.\\u001b[39mcol2\\u001b[33m!==\\u001b[39mundefined){\\u001b[0m\\n\\u001b[0m \\u001b[90m 62 | \\u001b[39m                categoriesXML \\u001b[33m+=\\u001b[39m internalCategories()\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:6325:17)\\n    at Object.toAssignable (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:7825:18)\\n    at Object.parseMaybeAssign (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:8207:47)\\n    at Object.parseExpression (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:8135:23)\\n    at Object.parseHeaderExpression (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10098:22)\\n    at Object.parseIfStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10182:22)\\n    at Object.parseStatementContent (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9874:21)\\n    at Object.parseStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Object.parseBlockBody (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Object.parseBlock (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10376:10)\\n    at Object.parseStatementContent (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9905:21)\\n    at Object.parseStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at node.body.withTopicForbiddingContext (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10464:60)\\n    at Object.withTopicForbiddingContext (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9702:14)\\n    at Object.parseForIn (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10464:22)\\n    at Object.parseForStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10144:21)\\n    at Object.parseStatementContent (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9854:21)\\n    at Object.parseStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9829:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10405:25)\\n    at Object.parseBlockBody (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10392:10)\\n    at Object.parseBlock (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10376:10)\\n    at Object.parseFunctionBody (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9424:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9394:10)\\n    at withTopicForbiddingContext (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10535:12)\\n    at Object.withTopicForbiddingContext (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9702:14)\\n    at Object.parseFunction (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10534:10)\\n    at Object.parseFunctionStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:10177:17)\\n    at Object.parseStatementContent (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9867:21)\\n    at Object.parseStatement (/Users/himanshusavita/Desktop/EZT1/node_modules/@babel/parser/lib/index.js:9829:17)\");\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshusavita/Desktop/EZT1/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Desktop/EZT1/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _controllers___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/ */ \"./server/controllers/index.js\");\n/* harmony import */ var _controllers___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_controllers___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_6__[\"default\"].compile(app);\napp.use('/api', _controllers___WEBPACK_IMPORTED_MODULE_4___default()(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshusavita/Desktop/EZT1/server/server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Desktop/EZT1/server/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title></title>\\n            <meta charset=\\\"UTF-8\\\">\\n            <meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=UTF-8\\\">\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://s3.amazonaws.com/assessts-book/css/impactwebfont.css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/js/vkbeauty.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Desktop/EZT1/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader'],\n      resolve: {\n        extensions: [\".js\", \".jsx\"]\n      }\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Desktop/EZT1/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshusavita/Desktop/EZT1/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Desktop/EZT1/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });