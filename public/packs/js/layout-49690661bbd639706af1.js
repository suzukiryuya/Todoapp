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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/layout.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/layout.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/suzukiryuya/workspace/todo_app/app/javascript/packs/layout.js: Support for the experimental syntax 'jsx' isn't currently enabled (2:1):\n\n  1 | // ナビゲーションを閉じる処理\n> 2 | <script>\n    | ^\n  3 | $(document).ready(function () {\n  4 |  $(\".navbar-nav li a\").click(function(event) {\n  5 |  $(\".navbar-collapse\").collapse('hide');\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:798:17)\n    at Parser.raiseWithData (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:791:17)\n    at Parser.expectOnePlugin (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:3272:18)\n    at Parser.parseExprAtom (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:11514:20)\n    at Parser.parseExprSubscripts (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:11081:23)\n    at Parser.parseUpdate (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:11061:21)\n    at Parser.parseMaybeUnary (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:11039:23)\n    at Parser.parseExprOps (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:10882:23)\n    at Parser.parseMaybeConditional (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:10856:23)\n    at Parser.parseMaybeAssign (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:10814:21)\n    at Parser.parseExpressionBase (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:10754:23)\n    at /Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:10748:39\n    at Parser.allowInAnd (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:12589:16)\n    at Parser.parseExpression (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:10748:17)\n    at Parser.parseStatementContent (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:12927:23)\n    at Parser.parseStatement (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:12796:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:13385:25)\n    at Parser.parseBlockBody (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:13376:10)\n    at Parser.parseProgram (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:12718:10)\n    at Parser.parseTopLevel (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:12709:25)\n    at Parser.parse (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:14449:10)\n    at parse (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/parser/lib/index.js:14501:38)\n    at parser (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/core/lib/transformation/normalize-file.js:82:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/core/lib/transformation/index.js:29:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/suzukiryuya/workspace/todo_app/node_modules/@babel/core/lib/transform.js:25:41)\n    at transform.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=layout-49690661bbd639706af1.js.map