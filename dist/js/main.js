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

// let oTab = document.getElementById('photo-tab');
// let oLis = oTab.getElementsByClassName('tabs-photo');
// let oDivs = oTab.getElementsByClassName('.photo');
//
// for (let i = 0; i < oLis.length; i++) {
//     let oLi = oLis[i];
//     oLi.n = i;
//     oLi.onclick = function () {
//         for (var j = 0; j < oLis.length ; j++) {
//             oLis[j].classList = '';
//             oDivs[j].className = '';
//         }
//         console.log(this);
//         this.className = "active-photo";
//         oDivs[this.n].className = "active-photo";
//     };
// }


const tabs = document.querySelectorAll('.tabs-photo');
const selectedImg = document.getElementById('selected-img');

if (tabs.length > 0 && selectedImg) {
    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            selectedImg.src = e.target['src'];
            tabs.forEach(elem => {
                elem.classList.remove('activeTab');
            });
            tab.classList.add('activeTab');
        });
    });
}

(function () {

    var slides = document.querySelectorAll('.testimonial-item'),
        arrows = document.querySelectorAll('.arrow'),
        carouselCount = 0,
        scrollInterval,
        interval = 5000;

    arrows[0].addEventListener('click', function (e) {
        e.preventDefault();
        carouselCount -= 100;
        slider();
        if (e.type !== 'autoClick') {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    });
    arrows[1].addEventListener('click', sliderEvent);
    arrows[1].addEventListener('autoClick', sliderEvent);

    function sliderEvent(e) {
        e = e || window.event;
        e.preventDefault();
        carouselCount += 100;
        slider();
        if (e.type !== "autoClick") {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    }

    function slider() {
        switch (carouselCount) {
            case -100:
                carouselCount = 0;
                break;
            case 300:
                carouselCount = 0;
                break;
            default:
                break;
        }
        console.log(carouselCount);
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
        }
    }

    // create new Event to dispatch click for auto scroll
    var autoClick = new Event('autoClick');
    function autoScroll() {
        arrows[1].dispatchEvent(autoClick);
    }

    // set timing of dispatch click events
    // scrollInterval = setInterval(autoScroll, interval);
})();

/***/ })
/******/ ]);
//# sourceMappingURL=main.map