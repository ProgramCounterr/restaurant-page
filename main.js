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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/initial.js\");\n/* To do:\r\n-Add event handler for pressing enter on a focused navbar element\r\n-Add content for other pages besides home page\r\n*/\r\n\r\n\r\nObject(_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"loadSite\"])();\r\n\r\n/**\r\n * clears content of the page\r\n */\r\nfunction clearContent() {\r\n    let content = document.querySelector('div#content');\r\n    content.innerHTML = \"\";\r\n}\r\n\r\n/** Add one or more listeners to an element\r\n* @param {DOMElement} element - DOM element to add listeners to\r\n* @param {string} eventNames - space separated list of event names, e.g. 'click change'\r\n* @param {Function} listener - function to attach for each event as a listener\r\n*/\r\nfunction addEventListeners(element, events, listener) {\r\n    \r\n}\r\n\r\nlet home = document.querySelector('#home');\r\nhome.addEventListener('click', () => {\r\n    clearContent();\r\n    Object(_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\r\n});\r\n\r\nhome.addEventListener('keydown', () => {\r\n    clearContent();\r\n    Object(_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"])();\r\n});\r\n\r\nlet order = document.querySelector('#order-online');\r\norder.addEventListener('click', ()=> {\r\n    clearContent();\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/*! exports provided: loadHeader, loadHomePage, loadSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHeader\", function() { return loadHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHomePage\", function() { return loadHomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSite\", function() { return loadSite; });\nlet loadHeader = function() {\r\n        let body = document.querySelector('body');\r\n\r\n        //make header elements\r\n        let header = document.createElement('header');\r\n        let navBar = document.createElement('nav');\r\n        let ul = document.createElement('ul');\r\n\r\n        let home = document.createElement('li');\r\n        home.textContent = \"Home\";\r\n        home.setAttribute('id', 'home');\r\n        home.setAttribute('tabindex', '1');\r\n\r\n        let orderOnline = document.createElement('li');\r\n        orderOnline.textContent = \"Order Online\";\r\n        orderOnline.setAttribute('id', 'order-online');\r\n        orderOnline.setAttribute('tabindex', '2');\r\n\r\n        let contactUs = document.createElement('li');\r\n        contactUs.textContent = \"Contact Us\";\r\n        contactUs.setAttribute('id', 'contact-us');\r\n        contactUs.setAttribute('tabindex', '3');\r\n\r\n        //append elements\r\n        ul.append(home, orderOnline, contactUs);\r\n        navBar.appendChild(ul);\r\n        header.appendChild(navBar);\r\n        body.prepend(header);\r\n}\r\n\r\nlet loadHomePage = function () {\r\n    let container = document.querySelector('div#content');\r\n\r\n    //home page content\r\n    let backgroundImg = document.createElement('img');\r\n    backgroundImg.setAttribute('id', 'background-img');\r\n    backgroundImg.setAttribute('src', 'https://captainkva.com/images/3.jpg');\r\n\r\n    container.append(backgroundImg);\r\n}\r\n\r\nlet loadSite = function() {\r\n    loadHeader();\r\n    loadHomePage();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/initial.js?");

/***/ })

/******/ });