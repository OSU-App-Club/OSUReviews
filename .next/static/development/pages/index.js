(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Searchbox/Searchbox.js":
/*!*******************************************!*\
  !*** ./components/Searchbox/Searchbox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Searchbox_Searchbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Searchbox/Searchbox.css */ "./components/Searchbox/Searchbox.css");
/* harmony import */ var _Searchbox_Searchbox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Searchbox_Searchbox_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Paul Lim\\code\\appclub\\OSUReviews\\components\\Searchbox\\Searchbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function index() {
  var data = [{
    name: 'CS 162',
    professor: 'Brandilyn Coker',
    rating: '3.0'
  }, {
    name: 'CS 271',
    professor: 'Paris Kalathas',
    rating: '1.0'
  }];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("input", {
    className: "searchbox",
    placeholder: "Search classes or professors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "searchResultParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.map(function (data) {
    return __jsx("div", {
      className: "searchResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "searchResultColumn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "searchResultProfessor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, data.professor), __jsx("div", {
      className: "searchResultName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, data.name)), __jsx("div", {
      className: "searchResultRating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, data.rating));
  })));
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CPaul%20Lim%5Ccode%5Cappclub%5COSUReviews%5Cpages%5Cindex.js!./":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CPaul%20Lim%5Ccode%5Cappclub%5COSUReviews%5Cpages%5Cindex.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Searchbox_Searchbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Searchbox/Searchbox */ "./components/Searchbox/Searchbox.js");
var _jsxFileName = "C:\\Users\\Paul Lim\\code\\appclub\\OSUReviews\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx(_components_Searchbox_Searchbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CPaul%20Lim%5Ccode%5Cappclub%5COSUReviews%5Cpages%5Cindex.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CPaul%20Lim%5Ccode%5Cappclub%5COSUReviews%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CPaul%20Lim%5Ccode%5Cappclub%5COSUReviews%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map