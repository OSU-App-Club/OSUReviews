webpackHotUpdate("static\\development\\pages\\index.js",{

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
    title: 'CS 162',
    professor: 'Brandilyn Coker'
  }, {
    title: 'CS 271',
    professor: 'Paris Kalathas'
  }];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("input", {
    className: "searchbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: "searchResultParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, data.map(function (data) {
    return __jsx("div", {
      className: "searchResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, data.title, " ", data.professor);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.e2858af2093f428e3ee7.hot-update.js.map