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
exports.id = "pages/news/[category]";
exports.ids = ["pages/news/[category]"];
exports.modules = {

/***/ "./pages/news/[category].js":
/*!**********************************!*\
  !*** ./pages/news/[category].js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/home/dev/Desktop/NEXT-PRE-RENDERING/pages/news/[category].js\";\n\nfunction ArticleListByCategory({\n  articles,\n  category\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"showing news for category \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        children: category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 43\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), articles.map(article => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: [article.id, article.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 25\n        }, this)]\n      }, article.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }, this);\n    })]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleListByCategory);\nasync function getServerSideProps(context) {\n  const {\n    params,\n    res,\n    req,\n    query\n  } = context;\n  console.log(query);\n  res.setHeader('Set-Cookie', ['name=Mohan']);\n  const {\n    category\n  } = params;\n  const response = await fetch(`http://localhost:4000/news?category=${category}`);\n  const data = await response.json();\n  return {\n    props: {\n      articles: data,\n      category\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByZS1yZW5kZXJpbmcvLi9wYWdlcy9uZXdzL1tjYXRlZ29yeV0uanM/NzJjNCJdLCJuYW1lcyI6WyJBcnRpY2xlTGlzdEJ5Q2F0ZWdvcnkiLCJhcnRpY2xlcyIsImNhdGVnb3J5IiwibWFwIiwiYXJ0aWNsZSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJyZXMiLCJyZXEiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzZXRIZWFkZXIiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLFNBQVNBLHFCQUFULENBQStCO0FBQUNDLFVBQUQ7QUFBVUM7QUFBVixDQUEvQixFQUFvRDtBQUVoRCxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsNERBQzhCO0FBQUEsa0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUlLRCxRQUFRLENBQUNFLEdBQVQsQ0FBY0MsT0FBRCxJQUFhO0FBQ3ZCLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxxQkFBS0EsT0FBTyxDQUFDQyxFQUFiLEVBQWlCRCxPQUFPLENBQUNFLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsb0JBQUlGLE9BQU8sQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUEsU0FBVUgsT0FBTyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFPWCxLQVJRLENBSkw7QUFBQSxrQkFESjtBQWdCSDs7QUFFRCwrREFBZUwscUJBQWY7QUFFTyxlQUFlUSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDOUMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLE9BQVY7QUFBZUMsT0FBZjtBQUFvQkM7QUFBcEIsTUFBOEJKLE9BQXBDO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FGLEtBQUcsQ0FBQ0ssU0FBSixDQUFjLFlBQWQsRUFBMkIsQ0FBQyxZQUFELENBQTNCO0FBQ0EsUUFBTTtBQUFFZDtBQUFGLE1BQWVRLE1BQXJCO0FBSUEsUUFBTU8sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSx1Q0FBc0NoQixRQUFTLEVBQWpELENBQTVCO0FBQ0EsUUFBTWlCLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFFQSxTQUFPO0FBQ0hDLFNBQUssRUFBRTtBQUNIcEIsY0FBUSxFQUFFa0IsSUFEUDtBQUVIakI7QUFGRztBQURKLEdBQVA7QUFPSCIsImZpbGUiOiIuL3BhZ2VzL25ld3MvW2NhdGVnb3J5XS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBBcnRpY2xlTGlzdEJ5Q2F0ZWdvcnkoe2FydGljbGVzLGNhdGVnb3J5fSkge1xuICAgICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIHNob3dpbmcgbmV3cyBmb3IgY2F0ZWdvcnkgPGk+e2NhdGVnb3J5IH08L2k+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57YXJ0aWNsZS5pZH17YXJ0aWNsZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0pfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG59XG4gICAgXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdEJ5Q2F0ZWdvcnk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcGFyYW1zLCByZXMsIHJlcSwgcXVlcnkgfSA9IGNvbnRleHQ7XG4gICAgY29uc29sZS5sb2cocXVlcnkpO1xuICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLFsnbmFtZT1Nb2hhbiddKVxuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHBhcmFtcztcblxuXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvbmV3cz9jYXRlZ29yeT0ke2NhdGVnb3J5fWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhcnRpY2xlczogZGF0YSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/[category].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/news/[category].js"));
module.exports = __webpack_exports__;

})();