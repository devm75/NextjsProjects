/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/news";
exports.ids = ["pages/news"];
exports.modules = {

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/home/dev/Desktop/NEXT-PRE-RENDERING/pages/news/index.js\";\n\nfunction NewsArticleList({\n  articles\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"List of news Articles\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }, this), articles.map(article => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: [article.id, article.title, \"|\", article.category]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 6,\n          columnNumber: 42\n        }, this)\n      }, article.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 20\n      }, this);\n    })]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsArticleList);\nasync function getServerSideProps() {\n  const response = await fetch(\"http://localhost:4000/news\");\n  const data = await response.json();\n  return {\n    props: {\n      articles: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByZS1yZW5kZXJpbmcvLi9wYWdlcy9uZXdzL2luZGV4LmpzPzRlMDEiXSwibmFtZXMiOlsiTmV3c0FydGljbGVMaXN0IiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFULENBQXlCO0FBQUVDO0FBQUYsQ0FBekIsRUFBdUM7QUFDbkMsc0JBQU87QUFBQSw0QkFFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHLEVBR0ZBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxPQUFELElBQWE7QUFDdkIsMEJBQU87QUFBQSwrQkFBc0I7QUFBQSxxQkFBS0EsT0FBTyxDQUFDQyxFQUFiLEVBQWlCRCxPQUFPLENBQUNFLEtBQXpCLE9BQWlDRixPQUFPLENBQUNHLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QixTQUFVSCxPQUFPLENBQUNDLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNILEtBRkEsQ0FIRTtBQUFBLGtCQUFQO0FBT0g7O0FBRUQsK0RBQWVKLGVBQWY7QUFFTyxlQUFlTyxrQkFBZixHQUFvQztBQUV2QyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRCQUFELENBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hYLGNBQVEsRUFBQ1M7QUFETjtBQURKLEdBQVA7QUFLSCIsImZpbGUiOiIuL3BhZ2VzL25ld3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBOZXdzQXJ0aWNsZUxpc3QoeyBhcnRpY2xlcyB9KSB7XG4gICAgcmV0dXJuIDw+XG4gICAgXG4gICAgICAgIDxoMT5MaXN0IG9mIG5ld3MgQXJ0aWNsZXM8L2gxPlxuICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2FydGljbGUuaWR9PjxoMj57YXJ0aWNsZS5pZH17YXJ0aWNsZS50aXRsZX18e2FydGljbGUuY2F0ZWdvcnkgfTwvaDI+PC9kaXY+XG4gICAgICAgIH0pfVxuPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NBcnRpY2xlTGlzdDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL25ld3NcIilcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFydGljbGVzOmRhdGFcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/news/index.js"));
module.exports = __webpack_exports__;

})();