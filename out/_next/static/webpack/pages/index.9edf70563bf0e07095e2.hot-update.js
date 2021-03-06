webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/layout/Portfolio.js":
/*!***********************************!*\
  !*** ./pages/layout/Portfolio.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/PortfolioItems */ "./component/PortfolioItems.js");
/* harmony import */ var _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/portfolio-data */ "./data/portfolio-data.js");
var _this = undefined,
    _jsxFileName = "F:\\Project\\Project\\Web\\NextJs\\webqu\\pages\\layout\\Portfolio.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Portfolio = function Portfolio() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("apps"),
      filter = _useState[0],
      setfilter = _useState[1];

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "pt-5 px-0 py-3",
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mx-0 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12",
    className: "justify-content-center mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "black py-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Portfolio"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center black2 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("h5", {
    id: "all",
    className: "menu-link font-18 font-medium blue px-3",
    onClick: function onClick() {
      return setfilter("all");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "ALL"), __jsx("h5", {
    id: "apps",
    className: "menu-link font-18 font-medium px-3",
    onClick: function onClick() {
      return setfilter("apps");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "APPS"), __jsx("h5", {
    id: "ui",
    className: "menu-link font-18 font-medium px-3",
    onClick: function onClick() {
      return setfilter("ui");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "UI DESIGN"), __jsx("h5", {
    id: "video",
    className: "menu-link font-18 font-medium px-3",
    onClick: function onClick() {
      return setfilter("video");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "VIDEO GRAPHIC"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mx-0 px-0 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, // filter != "all" ?          
  // Data[filter].map(( datas, key ) => (
  //     <PortfolioItems key={key} data={datas}></PortfolioItems>
  // ))
  // :
  Object.keys(_data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"]).map(function (key, index) {
    var _this2 = this;

    var data = key;
    _data_portfolio_data__WEBPACK_IMPORTED_MODULE_3__["default"][data].map(function (datas, key) {
      return __jsx(_component_PortfolioItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        data: datas,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 29
        }
      });
    });
  }))));
};

_s(Portfolio, "z73sT4v3NwlqzBjBHbxsIBclDiw=");

_c = Portfolio;
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

var _c;

$RefreshReg$(_c, "Portfolio");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGF5b3V0L1BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJQb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldGZpbHRlciIsIk9iamVjdCIsImtleXMiLCJEYXRhIiwibWFwIiwia2V5IiwiaW5kZXgiLCJkYXRhIiwiZGF0YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsTUFBRCxDQURoQjtBQUFBLE1BQ2JDLE1BRGE7QUFBQSxNQUNMQyxTQURLOztBQUdwQixTQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsZ0JBQXJCO0FBQXNDLFNBQUssTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQWEsYUFBUyxFQUFDLDZCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksTUFBRSxFQUFDLEtBQVA7QUFBYSxhQUFTLEVBQUMseUNBQXZCO0FBQWlFLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFFSTtBQUFJLE1BQUUsRUFBQyxNQUFQO0FBQWMsYUFBUyxFQUFDLG9DQUF4QjtBQUE2RCxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsTUFBRCxDQUFmO0FBQUEsS0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBSSxNQUFFLEVBQUMsSUFBUDtBQUFZLGFBQVMsRUFBQyxvQ0FBdEI7QUFBMkQsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosRUFJSTtBQUFJLE1BQUUsRUFBQyxPQUFQO0FBQWUsYUFBUyxFQUFDLG9DQUF6QjtBQUE4RCxXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixDQUZKLENBREosRUFVSSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZQyw0REFBWixFQUFrQkMsR0FBbEIsQ0FBdUIsVUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ3hDLFFBQU1DLElBQUksR0FBR0YsR0FBYjtBQUNBRixnRUFBSSxDQUFDSSxJQUFELENBQUosQ0FBV0gsR0FBWCxDQUFlLFVBQUVJLEtBQUYsRUFBU0gsR0FBVDtBQUFBLGFBQ1gsTUFBQyxpRUFBRDtBQUFnQixXQUFHLEVBQUVBLEdBQXJCO0FBQTBCLFlBQUksRUFBRUcsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURXO0FBQUEsS0FBZjtBQUdILEdBTEQsQ0FWSixDQVZKLENBREosQ0FESjtBQWtDSCxDQXJDRDs7R0FBTVgsUzs7S0FBQUEsUztBQXVDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWVkZjcwNTYzYmYwZTA3MDk1ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbCwgUm93LCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBQb3J0Zm9saW9JdGVtcyBmcm9tICcuLi8uLi9jb21wb25lbnQvUG9ydGZvbGlvSXRlbXMnXHJcblxyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi8uLi9kYXRhL3BvcnRmb2xpby1kYXRhJ1xyXG5cclxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4geyAgICAgICAgXHJcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRmaWx0ZXJdID0gdXNlU3RhdGUoXCJhcHBzXCIpICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwdC01IHB4LTAgcHktM1wiIGZsdWlkPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm14LTAgcHgtMFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjEyXCIgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBtYi00XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibGFjayBweS01IHRleHQtY2VudGVyXCI+UG9ydGZvbGlvPC9oMj4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgYmxhY2syIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwiYWxsXCIgY2xhc3NOYW1lPVwibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gYmx1ZSBweC0zXCIgb25DbGljaz17KCkgPT4gc2V0ZmlsdGVyKFwiYWxsXCIpIH0+QUxMPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwiYXBwc1wiIGNsYXNzTmFtZT1cIm1lbnUtbGluayBmb250LTE4IGZvbnQtbWVkaXVtIHB4LTNcIiBvbkNsaWNrPXsoKSA9PiBzZXRmaWx0ZXIoXCJhcHBzXCIpfT5BUFBTPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGlkPVwidWlcIiBjbGFzc05hbWU9XCJtZW51LWxpbmsgZm9udC0xOCBmb250LW1lZGl1bSBweC0zXCIgb25DbGljaz17KCkgPT4gc2V0ZmlsdGVyKFwidWlcIil9PlVJIERFU0lHTjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBpZD1cInZpZGVvXCIgY2xhc3NOYW1lPVwibWVudS1saW5rIGZvbnQtMTggZm9udC1tZWRpdW0gcHgtM1wiIG9uQ2xpY2s9eygpID0+IHNldGZpbHRlcihcInZpZGVvXCIpfT5WSURFTyBHUkFQSElDPC9oNT4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm14LTAgcHgtMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlciAhPSBcImFsbFwiID8gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGF0YVtmaWx0ZXJdLm1hcCgoIGRhdGFzLCBrZXkgKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxQb3J0Zm9saW9JdGVtcyBrZXk9e2tleX0gZGF0YT17ZGF0YXN9PjwvUG9ydGZvbGlvSXRlbXM+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyA6XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoRGF0YSkubWFwKChmdW5jdGlvbihrZXksIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFbZGF0YV0ubWFwKCggZGF0YXMsIGtleSApID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9JdGVtcyBrZXk9e2tleX0gZGF0YT17ZGF0YXN9PjwvUG9ydGZvbGlvSXRlbXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+ICAgICAgICBcclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87Il0sInNvdXJjZVJvb3QiOiIifQ==