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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function () {
    "use strict";

    const tabs = document.querySelectorAll('.tabs-photo');
    const selectedImg = document.querySelector('.selectedImg');
    const sdImg = document.querySelector('.sdImg');

    if (tabs.length > 0 && selectedImg || tabs.length > 0 && sdImg) {
        tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                e.stopPropagation();
                if (tab.classList.contains('tabs-slide1')) {
                    selectedImg.src = tab.childNodes[0].src;
                } else {
                    tab.classList.contains('tabs-slide2');
                    sdImg.src = tab.childNodes[0].src;
                }
                tabs.forEach(elem => {
                    elem.classList.remove('activeTab');
                });
                tab.classList.add('activeTab');
            }, true);
        });
    }

    const videoimg = document.querySelector('.btn-img-video');
    const iframe = document.querySelector('.iframe');

    videoimg.addEventListener("click", function (event) {
        console.log(event.target);
        videoimg.style.display = "none";
        const iframeEl = document.createElement('iframe');
        iframeEl.src = 'https://www.youtube.com/embed/DkeiKbqa02g?;autoplay=1&;';
        iframe.appendChild(iframeEl);
    });

    const linkNav = document.querySelectorAll('a[href^="#"]');

    linkNav.forEach(function (item) {
        item.addEventListener('click', function () {
            let anchor = document.getElementById(item.getAttribute('data-anchor')).getBoundingClientRect().top;
            let scroller = setInterval(function () {
                window.scrollTo({
                    top: anchor,
                    behavior: "smooth"
                });
                clearInterval(scroller);
            }, 300);
        });
    });

    const menuBtn = document.querySelector('.menu-btn');
    const topNav = document.querySelector('.top-nav');
    const link = topNav.querySelectorAll('li');
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('clicked');
        topNav.classList.toggle('show');
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function () {
                topNav.classList.remove("show");
                menuBtn.classList.remove('clicked');
            });
        }
    });

    const scrollnav = document.querySelector('.top-nav');
    let menu = true;
    // const scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollnav.classList.contains('show')) {
        console.log('true');
    } else {
        console.log('false');
    }
})();

/***/ })
/******/ ]);
//# sourceMappingURL=main.map