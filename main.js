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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadAboutPage = function () {\r\n    let content = document.querySelector('div#content');\r\n    //\"About Us\" header\r\n    let header = document.createElement('h2');\r\n    header.textContent = \"About Us\";\r\n    header.classList.add('bold');\r\n    header.setAttribute('id', 'about-header');\r\n    //description\r\n    let text = document.createElement('p');\r\n    text.textContent = \"Cheap, delicious, crispy, fried seafood accompanied by specially crafted homemade sauces\";\r\n    text.setAttribute('id', 'about-text');\r\n    //images\r\n    let images = document.createElement('div');\r\n    images.classList.add('row');\r\n    images.setAttribute('id', 'about-images-container');\r\n    let imgContainer1 = document.createElement('div');\r\n    imgContainer1.classList.add('column');\r\n    let img1 = document.createElement('img');\r\n    img1.setAttribute('src', 'https://ketocookingchristian.com/wp-content/uploads/2019/11/Keto-Fried-Shrimp.jpg');\r\n    img1.setAttribute('alt', 'Fried shrimp and a side of cocktail sauce');\r\n    img1.classList.add('about-image');\r\n    let imgContainer2 = document.createElement('div');\r\n    imgContainer2.classList.add('column');\r\n    let img2 = document.createElement('img');\r\n    img2.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191907-air-fryer-fish-0264-landscape-pf-1565020342.png?crop=0.633xw:0.949xh;0.187xw,0.0230xh&resize=480:*');\r\n    img2.setAttribute('alt', 'Fried whiting fish with fries and a side of ranch');\r\n    img2.classList.add('about-image');\r\n    let imgContainer3 = document.createElement('div');\r\n    imgContainer3.classList.add('column');\r\n    let img3 = document.createElement('img');\r\n    img3.setAttribute('src', 'https://www.readersdigest.ca/wp-content/uploads/1970/08/fried-calamari-1024x671.jpg');\r\n    img3.setAttribute('alt', 'Fried calamari rings');\r\n    img3.classList.add('about-image');\r\n    //append elements\r\n    imgContainer1.appendChild(img1);\r\n    imgContainer2.appendChild(img2);\r\n    imgContainer3.appendChild(img3);\r\n    images.append(imgContainer1, imgContainer2, imgContainer3);\r\n    content.append(header, text, images);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadAboutPage);\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadContactPage = function () {\r\n    let content = document.querySelector('div#content');\r\n\r\n    let contactInfo = document.createElement('div');\r\n    contactInfo.setAttribute('id', 'contact-info');\r\n    let phoneImg = document.createElement('img');\r\n    phoneImg.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/tourism-travel-3-6/48/107-512.png');\r\n    phoneImg.setAttribute('alt', 'phone icon');\r\n    phoneImg.setAttribute('id', 'phone-image');\r\n\r\n    let phoneNumber = document.createElement('a');\r\n    phoneNumber.textContent = '757-471-2100';\r\n    phoneNumber.setAttribute('id', 'phone-number');\r\n\r\n    let scheduleContainer = document.createElement('div');\r\n    scheduleContainer.setAttribute('id', 'schedule-container');\r\n    scheduleContainer.classList.add('center');\r\n\r\n    let clockImg = document.createElement('img');\r\n    clockImg.setAttribute('src', 'https://captainkva.com/images/others/clock.png');\r\n    clockImg.setAttribute('alt', 'clock');\r\n\r\n    let workingHoursHeader = document.createElement('h2');\r\n    workingHoursHeader.textContent = \"Working Hours\";\r\n    workingHoursHeader.setAttribute('id', 'working-hours');\r\n\r\n    //make schedule\r\n    let schedule = document.createElement('ul');\r\n    let days = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n    let hours = [\"Closed\", \"11:00 AM - 7:00 PM\", \"11:00 AM - 7:00 PM\", \"11:00 AM - 7:00 PM\", \"11:00 AM - 7:00 PM\", \"11:00 AM - 7:00 PM\", \"11:00 AM - 7:00 PM\"];\r\n\r\n    for(let i=0; i<7; i++) {\r\n        let dayContainer = document.createElement('li');\r\n        dayContainer.classList.add('day');\r\n\r\n        let day = document.createElement('div');\r\n        day.textContent = days[i];\r\n\r\n        let dayHours = document.createElement('div');\r\n        dayHours.textContent = hours[i];\r\n\r\n        dayContainer.append(day, dayHours);\r\n        schedule.appendChild(dayContainer);\r\n    }\r\n\r\n    contactInfo.append(phoneImg, phoneNumber);\r\n    scheduleContainer.append(clockImg, workingHoursHeader, schedule);\r\n    content.append(contactInfo, scheduleContainer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadContactPage);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ \"./src/initial.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* TODO:\r\n-Add content for other pages besides home page\r\n-Fix resizing/moving elements\r\n-Make keydown tabbing only work for enter key (check keycode)\r\n-refactor css and js files\r\n-lint js files\r\n-add slideshow on homepage\r\n*/\r\n\r\n\r\n\r\n\r\n/**\r\n * clears content of the page\r\n */\r\nfunction clearContent() {\r\n    let content = document.querySelector('div#content');\r\n    content.innerHTML = \"\";\r\n}\r\n\r\nObject(_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"loadSite\"])();\r\n\r\nconst home = document.querySelector('#home');\r\nconst about = document.querySelector('#about-us');\r\nconst contact = document.querySelector('#contact-us');\r\n\r\nlet navbarTabs = [home, about, contact];\r\nlet navbarFuncs = [_initial_js__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"], _about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\r\n\r\nfor(let i=0; i<navbarTabs.length; i++) {\r\n    navbarTabs[i].addEventListener('click', () => {\r\n        clearContent();\r\n        navbarFuncs[i]();\r\n    });\r\n    navbarTabs[i].addEventListener('keydown', (keyPress) => {\r\n        if(keyPress.keyCode === 13) {\r\n            clearContent();\r\n            navbarFuncs[i]();\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/*! exports provided: loadHomePage, loadSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHomePage\", function() { return loadHomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSite\", function() { return loadSite; });\nconst loadHeader = function() {\r\n        let container = document.querySelector('div#container');\r\n\r\n        // make header elements\r\n        let header = document.createElement('header');\r\n        let navBar = document.createElement('nav');\r\n        let ul = document.createElement('ul');\r\n        \r\n        let home = document.createElement('li');\r\n        home.textContent = \"Home\";\r\n        home.setAttribute('id', 'home');\r\n        home.setAttribute('tabindex', '1');\r\n\r\n        let aboutUs = document.createElement('li');\r\n        aboutUs.textContent = \"About Us\";\r\n        aboutUs.setAttribute('id', 'about-us');\r\n        aboutUs.setAttribute('tabindex', '2');\r\n\r\n        let orderOnline = document.createElement('li');\r\n        let link = document.createElement('a');\r\n        link.textContent = \"Order Online\";\r\n        link.setAttribute('id', 'order-online');\r\n        link.setAttribute('tabindex', '3');\r\n        link.setAttribute('href', 'https://qmenu.us/#/captain-k-s-seafood');\r\n        orderOnline.appendChild(link);\r\n\r\n        let contactUs = document.createElement('li');\r\n        contactUs.textContent = \"Contact Us\";\r\n        contactUs.setAttribute('id', 'contact-us');\r\n        contactUs.setAttribute('tabindex', '4');\r\n\r\n        // append elements\r\n        ul.append(home, aboutUs, orderOnline, contactUs);\r\n        navBar.appendChild(ul);\r\n        header.appendChild(navBar);\r\n        container.prepend(header);\r\n}\r\n\r\n// slide show logic\r\nconst slideShow = ((slideIndex) => {\r\n\r\n    // slide show timer\r\n    const Timer = (fn, t) => {\r\n        let timerObj = setInterval(fn, t);\r\n\r\n        const stop = function() {\r\n            if (timerObj) {\r\n                clearInterval(timerObj);\r\n                timerObj = null;\r\n            }\r\n        }\r\n\r\n        // start timer using current settings (if it's not already running)\r\n        const start = function() {\r\n            if (!timerObj) {\r\n                stop();\r\n                timerObj = setInterval(fn, t);\r\n            }\r\n        }\r\n\r\n        // start with new or original interval, stop current interval\r\n        const reset = (newT = t) => {\r\n            t = newT;\r\n            stop();\r\n            start();\r\n        }\r\n\r\n        return { stop, start, reset };\r\n    };\r\n\r\n    const nextSlide = (n) => {  \r\n        displaySlide(slideIndex += n);  \r\n    }  \r\n    \r\n    const currentSlide = (n) => {\r\n        displaySlide(slideIndex = n);\r\n    }\r\n\r\n    let interval = 5000;\r\n    let timer = Timer(() => nextSlide(1), interval);\r\n\r\n    const displaySlide = (n) => {   \r\n        let slides = document.getElementsByClassName(\"background-image\");\r\n        let dots = document.getElementsByClassName(\"dot\");\r\n        if (n >= slides.length) { slideIndex = 0 }  \r\n        if (n < 0) { slideIndex = slides.length - 1 }  \r\n        for (let i = 0; i < slides.length; i++) {  \r\n            slides[i].style.display = \"none\"; // make all slides invisible\r\n            dots[i].style.backgroundColor = \"transparent\"; \r\n        }  \r\n        slides[slideIndex].style.display = \"block\"; // make given slide visible\r\n        dots[slideIndex].style.backgroundColor = \"white\";\r\n        timer.reset(interval);\r\n    }\r\n    /**\r\n     * initializes a slideshow that changes slides after a given interval\r\n     * @param {number} intervalTime - milliseconds after which to change the slide\r\n     */\r\n    function initialize (intervalTime) {\r\n        if(!!intervalTime) {\r\n            interval = intervalTime;\r\n            timer.reset(interval);\r\n        }\r\n        let leftArrow = document.querySelector('a.left-arrow');\r\n        leftArrow.addEventListener('click', () => nextSlide(-1));\r\n        let rightArrow = document.querySelector('a.right-arrow');\r\n        rightArrow.addEventListener('click', () => nextSlide(1));\r\n        window.addEventListener('keydown', (keyPress) => {\r\n            if (keyPress.keyCode === 37) leftArrow.click(); // if left arrow key is pressed\r\n            else if (keyPress.keyCode === 39) rightArrow.click(); // if right arrow key is pressed\r\n        });\r\n        \r\n        let dots = document.getElementsByClassName(\"dot\");\r\n        for(let i=0; i<dots.length; i++) {\r\n            dots[i].addEventListener('click', () => currentSlide(i));\r\n        }\r\n        currentSlide(0);\r\n    }\r\n\r\n    return { initialize };\r\n\r\n})(0);\r\n\r\nconst loadHomePage = function () {\r\n    let content = document.querySelector('div#content');\r\n\r\n    // home page background images\r\n    let backgroundImgs = ['https://captainkva.com/images/comment-bg.jpg',\r\n        'https://captainkva.com/images/slider/slider1.jpg',\r\n        'https://bit.ly/2UTed50',\r\n        'https://img.delicious.com.au/wBUwni4k/del/2018/09/seafood-boil-88619-2.jpg',\r\n        'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-HORIZONTAL.jpg'];\r\n\r\n    let leftArrow = document.createElement('a');\r\n    leftArrow.textContent = '❮';\r\n    leftArrow.classList.add('left-arrow');\r\n    let rightArrow = document.createElement('a');\r\n    rightArrow.textContent = '❯';\r\n    rightArrow.classList.add('right-arrow');\r\n\r\n    let dotsContainer = document.createElement('div');\r\n    dotsContainer.setAttribute('id', 'dots');\r\n    for(let i=0; i<backgroundImgs.length; i++) {\r\n        let backgroundImg = document.createElement('div');\r\n        backgroundImg.classList.add('background-image');\r\n        backgroundImg.style.cssText = `background-image: url(${backgroundImgs[i]})`;\r\n\r\n        let dot = document.createElement('div');\r\n        dot.classList.add('dot');\r\n        dotsContainer.append(dot);\r\n        content.append(backgroundImg);\r\n    }\r\n    content.append(leftArrow, rightArrow, dotsContainer);\r\n\r\n    slideShow.initialize();\r\n\r\n    // home page text content\r\n    let text = document.createElement('h1');\r\n    text.setAttribute('id', 'welcome-header');\r\n    text.classList.add('center');\r\n    let welcome = document.createElement('span');\r\n    welcome.textContent = \"Welcome to \";\r\n    welcome.setAttribute('id', 'welcome-text');\r\n    let captainK = document.createElement('span');\r\n    captainK.textContent = \"Captain K\";\r\n    captainK.setAttribute('id', 'captain-k');\r\n    captainK.classList.add('bold');\r\n    \r\n    text.append(welcome, document.createElement('br'), captainK);\r\n    content.appendChild(text);\r\n}\r\n\r\nconst loadSite = function() {\r\n    loadHeader();\r\n    loadHomePage();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/initial.js?");

/***/ })

/******/ });