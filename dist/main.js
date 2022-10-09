/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveWeather": () => (/* binding */ retrieveWeather)
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./src/loading.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var retrieveWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var location, weatherAPIURL, response, weatherData, currentTemp;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_search__WEBPACK_IMPORTED_MODULE_0__.locationSearch.value) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            (0,_loading__WEBPACK_IMPORTED_MODULE_1__.startLoading)();
            location = _search__WEBPACK_IMPORTED_MODULE_0__.locationSearch.value;
            _context.prev = 4;
            weatherAPIURL = (0,_search__WEBPACK_IMPORTED_MODULE_0__.createURL)();
            _context.next = 8;
            return fetch(weatherAPIURL, {
              mode: 'cors'
            });

          case 8:
            response = _context.sent;
            _context.next = 11;
            return response.json();

          case 11:
            weatherData = _context.sent;
            currentTemp = weatherData.main.temp;
            (0,_loading__WEBPACK_IMPORTED_MODULE_1__.stopLoading)();
            _search__WEBPACK_IMPORTED_MODULE_0__.locationDisplay.textContent += "".concat(location.charAt(0).toUpperCase()).concat(location.slice(1), " is currently ").concat(Math.round(currentTemp), "\xB0 F");
            _context.next = 22;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0);
            (0,_loading__WEBPACK_IMPORTED_MODULE_1__.stopLoading)();
            _search__WEBPACK_IMPORTED_MODULE_0__.locationDisplay.textContent = "Unable to find weather. Please try again.";

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 17]]);
  }));

  return function retrieveWeather() {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startLoading": () => (/* binding */ startLoading),
/* harmony export */   "stopLoading": () => (/* binding */ stopLoading)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var loader = document.querySelector('.lds-ring');
var loaderDivChildren = document.querySelectorAll('.lds-ring div');
function startLoading() {
  loader.classList.add('active');

  _toConsumableArray(loaderDivChildren).forEach(function (child) {
    return child.classList.add('active');
  });
}
function stopLoading() {
  loader.classList.remove('active');

  _toConsumableArray(loaderDivChildren).forEach(function (child) {
    return child.classList.remove('active');
  });
}

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createURL": () => (/* binding */ createURL),
/* harmony export */   "locationDisplay": () => (/* binding */ locationDisplay),
/* harmony export */   "locationSearch": () => (/* binding */ locationSearch)
/* harmony export */ });
var locationSearch = document.querySelector('#location-search');
var locationDisplay = document.querySelector('.location-display');

function createURL() {
  var location = locationSearch.value;
  var weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(location, "&units=imperial&APPID=d1502904053949d3808a220590a67f7c");
  return weatherAPIURL;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/search.js");


_search__WEBPACK_IMPORTED_MODULE_1__.locationSearch.addEventListener('search', function () {
  _search__WEBPACK_IMPORTED_MODULE_1__.locationDisplay.textContent = '';
  (0,_api__WEBPACK_IMPORTED_MODULE_0__.retrieveWeather)();
  _search__WEBPACK_IMPORTED_MODULE_1__.locationSearch.value = '';
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7Ozs7OztBQURBO0FBQ0E7O0FBRUEsSUFBTUssZUFBZTtFQUFBLHNFQUFHO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBLElBQ2pCSCx5REFEaUI7Y0FBQTtjQUFBO1lBQUE7O1lBQUE7O1VBQUE7WUFHdEJDLHNEQUFZO1lBQ05JLFFBSmdCLEdBSUxMLHlEQUpLO1lBQUE7WUFPZE0sYUFQYyxHQU9FUixrREFBUyxFQVBYO1lBQUE7WUFBQSxPQVFHUyxLQUFLLENBQUNELGFBQUQsRUFBZ0I7Y0FBQ0UsSUFBSSxFQUFFO1lBQVAsQ0FBaEIsQ0FSUjs7VUFBQTtZQVFkQyxRQVJjO1lBQUE7WUFBQSxPQVNNQSxRQUFRLENBQUNDLElBQVQsRUFUTjs7VUFBQTtZQVNkQyxXQVRjO1lBVWRDLFdBVmMsR0FVQUQsV0FBVyxDQUFDRSxJQUFaLENBQWlCQyxJQVZqQjtZQVlwQloscURBQVc7WUFDWEgsZ0VBQUEsY0FBa0NNLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsV0FBbkIsRUFBbEMsU0FBcUVaLFFBQVEsQ0FBQ2EsS0FBVCxDQUFlLENBQWYsQ0FBckUsMkJBQXVHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsV0FBWCxDQUF2RztZQWJvQjtZQUFBOztVQUFBO1lBQUE7WUFBQTtZQWdCcEJTLE9BQU8sQ0FBQ0MsR0FBUjtZQUNBcEIscURBQVc7WUFDWEgsZ0VBQUEsR0FBOEIsMkNBQTlCOztVQWxCb0I7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FBSDs7RUFBQSxnQkFBZkksZUFBZTtJQUFBO0VBQUE7QUFBQSxHQUFyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxJQUFNb0IsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLElBQU1DLGlCQUFpQixHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLGVBQTFCLENBQTFCO0FBRU8sU0FBUzFCLFlBQVQsR0FBd0I7RUFDN0JzQixNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCOztFQUNBLG1CQUFJSCxpQkFBSixFQUF1QkksT0FBdkIsQ0FBK0IsVUFBQUMsS0FBSztJQUFBLE9BQUlBLEtBQUssQ0FBQ0gsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEIsQ0FBSjtFQUFBLENBQXBDO0FBQ0Q7QUFFTSxTQUFTM0IsV0FBVCxHQUF1QjtFQUM1QnFCLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkksTUFBakIsQ0FBd0IsUUFBeEI7O0VBQ0EsbUJBQUlOLGlCQUFKLEVBQXVCSSxPQUF2QixDQUErQixVQUFBQyxLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDSCxTQUFOLENBQWdCSSxNQUFoQixDQUF1QixRQUF2QixDQUFKO0VBQUEsQ0FBcEM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1hELElBQU1oQyxjQUFjLEdBQUd3QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCO0FBQ0EsSUFBTTFCLGVBQWUsR0FBR3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUzNCLFNBQVQsR0FBcUI7RUFDbkIsSUFBTU8sUUFBUSxHQUFHTCxjQUFjLENBQUNJLEtBQWhDO0VBQ0EsSUFBTUUsYUFBYSwrREFBd0RELFFBQXhELDJEQUFuQjtFQUNBLE9BQU9DLGFBQVA7QUFDRDs7Ozs7Ozs7VUNQRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQU4sb0VBQUEsQ0FBZ0MsUUFBaEMsRUFBMEMsWUFBTTtFQUM5Q0QsZ0VBQUEsR0FBOEIsRUFBOUI7RUFDQUkscURBQWU7RUFDZkgseURBQUEsR0FBdUIsRUFBdkI7QUFDRCxDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVVJMLCBsb2NhdGlvbkRpc3BsYXksIGxvY2F0aW9uU2VhcmNoIH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgeyBzdGFydExvYWRpbmcsIHN0b3BMb2FkaW5nIH0gZnJvbSBcIi4vbG9hZGluZ1wiO1xuXG5jb25zdCByZXRyaWV2ZVdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gIGlmICghbG9jYXRpb25TZWFyY2gudmFsdWUpIHJldHVybjtcblxuICBzdGFydExvYWRpbmcoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlYXJjaC52YWx1ZTtcblxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJBUElVUkwgPSBjcmVhdGVVUkwoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUElVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcblxuICAgIHN0b3BMb2FkaW5nKCk7XG4gICAgbG9jYXRpb25EaXNwbGF5LnRleHRDb250ZW50ICs9IGAke2xvY2F0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7bG9jYXRpb24uc2xpY2UoMSl9IGlzIGN1cnJlbnRseSAke01hdGgucm91bmQoY3VycmVudFRlbXApfcKwIEZgO1xuXG4gIH0gY2F0Y2goZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHN0b3BMb2FkaW5nKCk7XG4gICAgbG9jYXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gXCJVbmFibGUgdG8gZmluZCB3ZWF0aGVyLiBQbGVhc2UgdHJ5IGFnYWluLlwiXG4gIH1cbn1cblxuZXhwb3J0IHsgcmV0cmlldmVXZWF0aGVyIH07IiwiY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxkcy1yaW5nJyk7XG5jb25zdCBsb2FkZXJEaXZDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZHMtcmluZyBkaXYnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0TG9hZGluZygpIHtcbiAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBbLi4ubG9hZGVyRGl2Q2hpbGRyZW5dLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcExvYWRpbmcoKSB7XG4gIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgWy4uLmxvYWRlckRpdkNoaWxkcmVuXS5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbn0iLCJjb25zdCBsb2NhdGlvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1zZWFyY2gnKTtcbmNvbnN0IGxvY2F0aW9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1kaXNwbGF5Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVSTCgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlYXJjaC52YWx1ZTtcbiAgY29uc3Qgd2VhdGhlckFQSVVSTCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPWltcGVyaWFsJkFQUElEPWQxNTAyOTA0MDUzOTQ5ZDM4MDhhMjIwNTkwYTY3ZjdjYDtcbiAgcmV0dXJuIHdlYXRoZXJBUElVUkw7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVVSTCwgbG9jYXRpb25TZWFyY2gsIGxvY2F0aW9uRGlzcGxheSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmV0cmlldmVXZWF0aGVyIH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgbG9jYXRpb25TZWFyY2gsIGxvY2F0aW9uRGlzcGxheSB9IGZyb20gJy4vc2VhcmNoJztcblxubG9jYXRpb25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc2VhcmNoJywgKCkgPT4ge1xuICBsb2NhdGlvbkRpc3BsYXkudGV4dENvbnRlbnQgPSAnJztcbiAgcmV0cmlldmVXZWF0aGVyKCk7XG4gIGxvY2F0aW9uU2VhcmNoLnZhbHVlID0gJyc7XG59KSJdLCJuYW1lcyI6WyJjcmVhdGVVUkwiLCJsb2NhdGlvbkRpc3BsYXkiLCJsb2NhdGlvblNlYXJjaCIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwicmV0cmlldmVXZWF0aGVyIiwidmFsdWUiLCJsb2NhdGlvbiIsIndlYXRoZXJBUElVUkwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJ3ZWF0aGVyRGF0YSIsImN1cnJlbnRUZW1wIiwibWFpbiIsInRlbXAiLCJ0ZXh0Q29udGVudCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJNYXRoIiwicm91bmQiLCJjb25zb2xlIiwibG9nIiwibG9hZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9hZGVyRGl2Q2hpbGRyZW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImNoaWxkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=