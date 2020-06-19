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
eval("__webpack_require__.r(__webpack_exports__);\nconst loadAboutPage = () => {\n  const content = document.querySelector('div#content');\n  // \"About Us\" header\n  const header = document.createElement('h2');\n  header.textContent = 'About Us';\n  header.classList.add('bold');\n  header.setAttribute('id', 'about-header');\n  // description\n  const text = document.createElement('p');\n  text.textContent = 'Cheap, delicious, crispy, fried seafood accompanied by specially crafted homemade sauces';\n  text.setAttribute('id', 'about-text');\n  // images\n  const images = document.createElement('div');\n  images.classList.add('row');\n  images.setAttribute('id', 'about-images-container');\n  const imgContainer1 = document.createElement('div');\n  imgContainer1.classList.add('column');\n  const img1 = document.createElement('img');\n  img1.setAttribute('src', 'https://ketocookingchristian.com/wp-content/uploads/2019/11/Keto-Fried-Shrimp.jpg');\n  img1.setAttribute('alt', 'Fried shrimp and a side of cocktail sauce');\n  img1.classList.add('about-image');\n  const imgContainer2 = document.createElement('div');\n  imgContainer2.classList.add('column');\n  const img2 = document.createElement('img');\n  img2.setAttribute('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191907-air-fryer-fish-0264-landscape-pf-1565020342.png?crop=0.633xw:0.949xh;0.187xw,0.0230xh&resize=480:*');\n  img2.setAttribute('alt', 'Fried whiting fish with fries and a side of ranch');\n  img2.classList.add('about-image');\n  const imgContainer3 = document.createElement('div');\n  imgContainer3.classList.add('column');\n  const img3 = document.createElement('img');\n  img3.setAttribute('src', 'https://www.readersdigest.ca/wp-content/uploads/1970/08/fried-calamari-1024x671.jpg');\n  img3.setAttribute('alt', 'Fried calamari rings');\n  img3.classList.add('about-image');\n  // append elements\n  imgContainer1.appendChild(img1);\n  imgContainer2.appendChild(img2);\n  imgContainer3.appendChild(img3);\n  images.append(imgContainer1, imgContainer2, imgContainer3);\n  content.append(header, text, images);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadAboutPage);\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadContactPage = () => {\n  const content = document.querySelector('div#content');\n\n  const contactInfo = document.createElement('div');\n  contactInfo.setAttribute('id', 'contact-info');\n  const phoneImg = document.createElement('img');\n  phoneImg.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/tourism-travel-3-6/48/107-512.png');\n  phoneImg.setAttribute('alt', 'phone icon');\n  phoneImg.setAttribute('id', 'phone-image');\n\n  const phoneNumber = document.createElement('a');\n  phoneNumber.textContent = '757-471-2100';\n  phoneNumber.setAttribute('id', 'phone-number');\n\n  const scheduleContainer = document.createElement('div');\n  scheduleContainer.setAttribute('id', 'schedule-container');\n  scheduleContainer.classList.add('center');\n\n  const clockImg = document.createElement('img');\n  clockImg.setAttribute('src', 'https://captainkva.com/images/others/clock.png');\n  clockImg.setAttribute('alt', 'clock');\n\n  const workingHoursHeader = document.createElement('h2');\n  workingHoursHeader.textContent = 'Working Hours';\n  workingHoursHeader.setAttribute('id', 'working-hours');\n\n  // make schedule\n  const schedule = document.createElement('ul');\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const hours = ['Closed', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM', '11:00 AM - 7:00 PM'];\n\n  for (let i = 0; i < 7; i += 1) {\n    const dayContainer = document.createElement('li');\n    dayContainer.classList.add('day');\n\n    const day = document.createElement('div');\n    day.textContent = days[i];\n\n    const dayHours = document.createElement('div');\n    dayHours.textContent = hours[i];\n\n    dayContainer.append(day, dayHours);\n    schedule.appendChild(dayContainer);\n  }\n\n  contactInfo.append(phoneImg, phoneNumber);\n  scheduleContainer.append(clockImg, workingHoursHeader, schedule);\n  content.append(contactInfo, scheduleContainer);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadContactPage);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./src/initial.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* TODO:\n-Add content for other pages besides home page\n-Fix resizing/moving elements\n-Make keydown tabbing only work for enter key (check keycode)\n-refactor css and js files\n-lint js files\n-add slideshow on homepage\n*/\n\n\n\n\n/**\n * clears content of the page\n */\nfunction clearContent() {\n  const content = document.querySelector('div#content');\n  content.innerHTML = '';\n}\n\nObject(_initial__WEBPACK_IMPORTED_MODULE_0__[\"loadSite\"])();\n\nconst home = document.querySelector('#home');\nconst about = document.querySelector('#about-us');\nconst contact = document.querySelector('#contact-us');\n\nconst navbarTabs = [home, about, contact];\nconst navbarFuncs = [_initial__WEBPACK_IMPORTED_MODULE_0__[\"loadHomePage\"], _about__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n\nfor (let i = 0; i < navbarTabs.length; i += 1) {\n  navbarTabs[i].addEventListener('click', () => {\n    clearContent();\n    navbarFuncs[i]();\n  });\n  navbarTabs[i].addEventListener('keydown', (keyPress) => {\n    if (keyPress.keyCode === 13) {\n      clearContent();\n      navbarFuncs[i]();\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/*! exports provided: loadHomePage, loadSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadHomePage\", function() { return loadHomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSite\", function() { return loadSite; });\n/** GLOBALS\n *  objects: window\n *  functions: setInterval, clearInterval\n */\n\n/**\n * make header DOM elements (the navigation bar)\n */\nconst loadHeader = () => {\n  const container = document.querySelector('div#container');\n\n  // make header elements\n  const header = document.createElement('header');\n  const navBar = document.createElement('nav');\n  const ul = document.createElement('ul');\n\n  const home = document.createElement('li');\n  home.textContent = 'Home';\n  home.setAttribute('id', 'home');\n  home.setAttribute('tabindex', '1');\n\n  const aboutUs = document.createElement('li');\n  aboutUs.textContent = 'About Us';\n  aboutUs.setAttribute('id', 'about-us');\n  aboutUs.setAttribute('tabindex', '2');\n\n  const orderOnline = document.createElement('li');\n  const link = document.createElement('a');\n  link.textContent = 'Order Online';\n  link.setAttribute('id', 'order-online');\n  link.setAttribute('tabindex', '3');\n  link.setAttribute('href', 'https://qmenu.us/#/captain-k-s-seafood');\n  orderOnline.appendChild(link);\n\n  const contactUs = document.createElement('li');\n  contactUs.textContent = 'Contact Us';\n  contactUs.setAttribute('id', 'contact-us');\n  contactUs.setAttribute('tabindex', '4');\n\n  // append elements\n  ul.append(home, aboutUs, orderOnline, contactUs);\n  navBar.appendChild(ul);\n  header.appendChild(navBar);\n  container.prepend(header);\n};\n\n/**\n * load the DOM elements for the slideshow\n * @param {object} container - DOM element that contains the slideshow images\n * @param {object} imgs - array of strings representing path to slideshow images\n */\nconst loadSlideshowDOM = (container, imgs) => {\n  // make navigation arrows\n  const leftArrow = document.createElement('a');\n  leftArrow.textContent = '❮';\n  leftArrow.classList.add('left-arrow');\n  const rightArrow = document.createElement('a');\n  rightArrow.textContent = '❯';\n  rightArrow.classList.add('right-arrow');\n\n  // make navigation dots\n  const dotsContainer = document.createElement('div');\n  dotsContainer.setAttribute('id', 'dots');\n  for (let i = 0; i < imgs.length; i += 1) {\n    const img = document.createElement('div');\n    img.classList.add('slideshow-image');\n    img.style.cssText = `background-image: url(${imgs[i]})`;\n\n    const dot = document.createElement('div');\n    dot.classList.add('dot');\n    dotsContainer.append(dot);\n    container.append(img);\n  }\n  container.append(leftArrow, rightArrow, dotsContainer);\n};\n\n/**\n * logic for creating dynamic 'slideshow' background of home page\n */\nconst slideshow = (() => {\n  let intervalTime = 5000;\n\n  // slideshow timer\n  const Timer = (fn, interval) => {\n    let t = interval;\n    let timerObj = null;\n\n    const stop = () => {\n      if (timerObj) {\n        clearInterval(timerObj);\n        timerObj = null;\n      }\n    };\n\n    // start timer using current settings (if it's not already running)\n    const start = () => {\n      if (!timerObj) {\n        stop();\n      }\n      timerObj = setInterval(fn, t);\n    };\n\n    // start with new or original interval, stop current interval\n    const reset = (newT = t) => {\n      t = newT;\n      stop();\n      start();\n    };\n\n    return { stop, start, reset };\n  };\n\n  let slideIndex = 0;\n\n  // function to control which slide is presented\n  const displaySlide = (n) => {\n    const slides = document.getElementsByClassName('slideshow-image');\n    const dots = document.getElementsByClassName('dot');\n    if (n >= slides.length) slideIndex = 0;\n    if (n < 0) slideIndex = slides.length - 1;\n    for (let i = 0; i < slides.length; i += 1) {\n      slides[i].style.display = 'none'; // make all slides invisible\n      dots[i].style.backgroundColor = 'transparent';\n    }\n    slides[slideIndex].style.display = 'block'; // make given slide visible\n    dots[slideIndex].style.backgroundColor = 'white'; // fill dot corresponding to current slide\n  };\n\n  // change slide by n amount and reset timer\n  const nextSlide = (n) => {\n    displaySlide(slideIndex += n);\n  };\n\n  // show slide n\n  const currentSlide = (n) => {\n    displaySlide(slideIndex = n);\n  };\n\n  let timer;\n\n  const arrowClick = (leftOrRight) => {\n    if (leftOrRight === 'left') nextSlide(-1);\n    else if (leftOrRight === 'right') nextSlide(1);\n    timer.reset(intervalTime);\n  };\n\n  function arrowKeyFunc(keyPress) {\n    if (keyPress.keyCode === 37) arrowClick('left'); // if left arrow key is pressed, trigger event\n    else if (keyPress.keyCode === 39) arrowClick('right'); // if right arrow key is pressed, trigger event\n  }\n\n  timer = Timer(() => {\n    const slides = document.getElementsByClassName('slideshow-image');\n    if (!slides.length) { // if there are no slides on the page\n      window.removeEventListener('keydown', arrowKeyFunc);\n      timer.stop();\n    } else {\n      nextSlide(1);\n    }\n  }, intervalTime);\n\n  /**\n     * initializes a slideshow that changes slides after a given interval\n     * @param {object} container - DOM element ot store the slideshow images\n     * @param {object} imgs - array of strings representing path to slideshow images\n     * @param {number} intervalTime - milliseconds after which to change the slide\n     * intervalTime has a default value of 5000\n     */\n  function initialize(container, imgs, newIntervalTime = intervalTime) {\n    loadSlideshowDOM(container, imgs);\n\n    const leftArrow = document.querySelector('a.left-arrow');\n    const rightArrow = document.querySelector('a.right-arrow');\n\n    intervalTime = newIntervalTime;\n\n    // if user manually changes slides, change slide and reset timer\n    leftArrow.addEventListener('click', () => arrowClick('left'));\n    rightArrow.addEventListener('click', () => arrowClick('right'));\n\n    window.addEventListener('keydown', arrowKeyFunc);\n\n    const dots = document.getElementsByClassName('dot');\n    for (let i = 0; i < dots.length; i += 1) {\n      dots[i].addEventListener('click', () => currentSlide(i)); // display slide corresponding to dot\n    }\n\n    currentSlide(0); // display slideshow starting with first slide\n    timer.reset(intervalTime);\n  }\n\n  return { initialize };\n})();\n\n/**\n * load home page content\n */\nconst loadHomePage = () => {\n  const content = document.querySelector('div#content');\n\n  // initialize slideshow images\n  const slideshowImgs = ['https://captainkva.com/images/comment-bg.jpg',\n    'https://captainkva.com/images/slider/slider1.jpg',\n    'https://bit.ly/2UTed50',\n    'https://img.delicious.com.au/wBUwni4k/del/2018/09/seafood-boil-88619-2.jpg',\n    'https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-HORIZONTAL.jpg'];\n\n  slideshow.initialize(content, slideshowImgs);\n\n  // home page text content\n  const text = document.createElement('h1');\n  text.setAttribute('id', 'welcome-header');\n  text.classList.add('center');\n  const welcome = document.createElement('span');\n  welcome.textContent = 'Welcome to ';\n  welcome.setAttribute('id', 'welcome-text');\n  const captainK = document.createElement('span');\n  captainK.textContent = 'Captain K';\n  captainK.setAttribute('id', 'captain-k');\n  captainK.classList.add('bold');\n\n  text.append(welcome, document.createElement('br'), captainK);\n  content.appendChild(text);\n};\n\n/**\n * load intial site (home page and header)\n */\nconst loadSite = () => {\n  loadHeader();\n  loadHomePage();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/initial.js?");

/***/ })

/******/ });