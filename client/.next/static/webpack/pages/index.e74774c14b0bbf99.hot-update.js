"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgInput = function(param) {\n    var mutate = param.mutate, _id = param.id, id = _id === void 0 ? undefined : _id;\n    _s();\n    var textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var onSubmit = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        var text = textRef.current.value;\n        textRef.current.value = '';\n        mutate(text);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                placeholder: \"내용 입력\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\workspace\\\\react-test\\\\client\\\\components\\\\MsgInput.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\workspace\\\\react-test\\\\client\\\\components\\\\MsgInput.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Dev\\\\workspace\\\\react-test\\\\client\\\\components\\\\MsgInput.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this));\n};\n_s(MsgInput, \"w6wg8oN6T1JIeHvMfowtaM3MyjI=\");\n_c = MsgInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgInput);\nvar _c;\n$RefreshReg$(_c, \"MsgInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0Qjs7O0FBRTVCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVEsUUFBc0IsQ0FBQztRQUE3QkMsTUFBTSxTQUFOQSxNQUFNLGNBQUVDLEVBQUUsRUFBRkEsRUFBRSxvQkFBR0MsU0FBUzs7SUFDckMsR0FBSyxDQUFDQyxPQUFPLEdBQUdMLDZDQUFNLENBQUMsSUFBSTtJQUUzQixHQUFLLENBQUNNLFFBQVEsR0FBR0MsUUFDckIsQ0FEcUJBLENBQUMsRUFBSSxDQUFDO1FBQ25CQSxDQUFDLENBQUNDLGNBQWM7UUFDaEJELENBQUMsQ0FBQ0UsZUFBZTtRQUNqQixHQUFLLENBQUNDLElBQUksR0FBR0wsT0FBTyxDQUFDTSxPQUFPLENBQUNDLEtBQUs7UUFDbENQLE9BQU8sQ0FBQ00sT0FBTyxDQUFDQyxLQUFLLEdBQUcsQ0FBRTtRQUMxQlYsTUFBTSxDQUFDUSxJQUFJO0lBQ2YsQ0FBQztJQUVELE1BQU0sNkVBQ0RHLENBQUk7UUFBQ0MsU0FBUyxFQUFDLENBQWlCO1FBQUNSLFFBQVEsRUFBRUEsUUFBUTs7d0ZBQy9DUyxDQUFRO2dCQUNMQyxHQUFHLEVBQUVYLE9BQU87Z0JBQ1pZLFdBQVcsRUFBQyxDQUFPOzs7Ozs7d0ZBRWRDLENBQUY7Z0JBQUNDLElBQUksRUFBQyxDQUFROzBCQUFDLENBQUU7Ozs7Ozs7Ozs7OztBQUdwQyxDQUFDO0dBcEJLbEIsUUFBUTtLQUFSQSxRQUFRO0FBc0JkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanM/Y2MyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNc2dJbnB1dCA9ICh7bXV0YXRlLCBpZCA9IHVuZGVmaW5lZH0pID0+IHtcclxuICAgIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcclxuICAgICAgICBtdXRhdGUodGV4dClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqkg7J6F66ClXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dCJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGV4dCIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvcm0iLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInJlZiIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ })

});