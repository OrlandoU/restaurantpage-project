/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
const mainBody = document.querySelector('#content');

function aboutUs(){
    let main = document.createElement('main');
    main.classList.add('about-us-container');
    let mainHeader = document.createElement('div')
    mainHeader.textContent = 'About Us'
    mainHeader.classList.add('main-header-us')
    main.appendChild(mainHeader)
 
    let aboutUsContainer = document.createElement('div')
    aboutUsContainer.classList.add('paragraph-container')

    let textContainer = document.createElement('div')
    textContainer.classList.add('text-container')
    textContainer.textContent = 'Welcome to our burger restaurant! We are excited to offer our guests a delicious and unique dining experience. Our burgers are made with fresh, high-quality ingredients and we take pride in serving up the best burgers in town.'
    aboutUsContainer.appendChild(textContainer)

    let textContainer1 = document.createElement('div')
    textContainer1.classList.add('text-container')
    textContainer1.textContent = 'Our menu features a variety of specialty burgers, including the popular bacon cheeseburger and the BBQ burger. We also have salads, sides, and desserts for those looking for something a little lighter or something sweet.'
    aboutUsContainer.appendChild(textContainer1)

    let textContainer2 = document.createElement('div')
    textContainer2.classList.add('text-container')
    textContainer2.textContent = 'We know that you will love our food as much as we do! Thanks for choosing our burger restaurant and we hope to see you soon!'
    aboutUsContainer.appendChild(textContainer2)

    main.appendChild(aboutUsContainer)
    mainBody.appendChild(main)
}


/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearElement)
/* harmony export */ });
function clearElement(element){
    let el = document.querySelector(element);
    el.parentElement.removeChild(el)
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
const mainBody = document.querySelector('#content')

function header() {
    //Header with nav menu
    let header = document.createElement('header')
    header.classList.add('header-container')
    //Left Side of Header
    let leftSide = document.createElement('div')
    leftSide.classList.add('left-side')
    leftSide.textContent = 'Beefy'
    //Right Side of Header
    let rightSide = document.createElement('div')
    rightSide.classList.add('right-side')
    let rightSideOptions = ['Home', 'Menu', 'About Us']
    rightSideOptions.forEach(item => {
        let currentOpt = document.createElement('div')
        currentOpt.textContent = item;
        currentOpt.classList.add('nav-items')
        if(item == 'About Us'){
            currentOpt.classList.add('aboutUs')
        }
        else {
            currentOpt.classList.add(item)
        }
        
        rightSide.appendChild(currentOpt)
    })


    header.appendChild(leftSide)
    header.appendChild(rightSide)

    mainBody.appendChild(header)
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
const mainBody = document.querySelector('#content');

const menuOptions = [
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$7.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Cheese Burger',
        ingredients: 'Beef Patty, Cheddar Cheese, Grilled onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo and Mustard',
        price: '$8.49',
        img: './cheeseburger.png'
    },
    {
        name: 'Beef Bacon',
        ingredients: 'Beef Patty, Cheddar Cheese, Beef Bacon, Grilled Onions & Tomatoes Pickles, Lettuce, Ketchup, Mayo and Mustard',
        price: '$9.99',
        img: './beefbacon.png'
    },
    {
        name: 'Creamy Mushroom',
        ingredients: 'Beef Patty, Cream of Mushroom, Mozzarella Cheese, Grilled Onions, Mayo',
        price: '$9.45',
        img: './creamymushroom.png'
    },
    {
        name: 'Hawaiian Burger',
        ingredients: 'Beef Patty, Grilled Pineapple,Mozzarella Cheese, Onions, Tomatoes, Lettuce, Mayo, BBQ sauce',
        price: '$10.00',
        img: './hawaiian.png'
    },
    {
        section: true,
        name: 'Spicy Tandoori',
        ingredients: 'Tandoori Chicken, Cheddar Cheese, Grilled Onion & Tomatoes Lettuce, Pickles, Garlic Sauce, Mayo',
        price: '$9.95',
        img: './spicytandori.png'
    },
    {
        name: 'Spicy Buffalo',
        ingredients: 'Crispy Chicken, Mozzarella Cheese, Grilled Onion & Tomatoes Lettuce, Garlic Sauce, Buffalo Sauce Mayo',
        price: '$10.49',
        img: './spicybuffalo.png'
    },
    {
        name: 'BBQ Chicken',
        ingredients: 'Grilled Chicken, Mozzarella Cheese, Grilled Onion, Lettuce, Mayo BBQ Sauce',
        price: '$9.95',
        img: './bbqchickenburger.png'
    },
    {
        name: 'Crispy Chicken',
        ingredients: 'Crispy Chicken, Cheddar Cheese, Grilled Onion & Tomatoes Lettuce, Pickles, Garlic Sauce, Mayo, Chipotle Sauce',
        price: '$10.95',
        img: './crispychiken.png'
    },
    {
        name: 'Chicken Paradise',
        ingredients: 'Grilled Chicken, Mozzarella Cheese, Grilled Pineapple, Lettuce, Onions Jalapenos, Mayo, Garlic Sauce',
        price: '$8.95',
        img: './paradise.png'
    }
]

function menu() {
    let main = document.createElement('main')
    main.classList.add('menu-container')
    let mainHeader = document.createElement('div')
    mainHeader.textContent = 'Customer Favourites'
    mainHeader.classList.add('main-header')
    main.appendChild(mainHeader)

    let section1 = document.createElement('div')
    let insection1 = document.createElement('div')
    section1.classList.add('beef-section')
    insection1.classList.add('beef-section-text')
    insection1.textContent = 'Beef Burgers'
    section1.appendChild(insection1)
    main.appendChild(section1)


    menuOptions.forEach((item) => {
        if (item.section) {
            let section2 = document.createElement('div')
            let insection2 = document.createElement('div')
            section2.classList.add('chicken-section')
            insection2.classList.add('chicken-section-text')
            insection2.textContent = 'Chicken Burgers'
            section2.appendChild(insection2)
            main.appendChild(section2)
        }

        let itemContainer = document.createElement('div')
        itemContainer.classList.add('item-container')
        let img = document.createElement('img')
        img.src = item.img
        itemContainer.appendChild(img)

        let priceContainer = document.createElement('div')
        priceContainer.classList.add('price-container')
        let price = document.createElement('section')
        price.classList.add('price')
        price.textContent = item.price
        let highlight = document.createElement('div')
        highlight.classList.add('more-info')
        highlight.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>'
        let ingredients = document.createElement('section')
        ingredients.classList.add('ingredients-container')

        let ingredientsItem = document.createElement('div')
        ingredientsItem.classList.add('ingredients')
        ingredientsItem.textContent = item.ingredients

        priceContainer.appendChild(price)
        ingredients.appendChild(highlight)
        ingredients.appendChild(ingredientsItem)

        priceContainer.appendChild(ingredients)
        itemContainer.appendChild(priceContainer)

        let nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        let name = document.createElement('section')
        name.classList.add('name')
        name.textContent = item.name
        let button = document.createElement('div')
        button.classList.add('item-button')
        button.textContent = 'Add'
        nameContainer.appendChild(name)
        nameContainer.appendChild(button)
        itemContainer.appendChild(nameContainer)


        main.appendChild(itemContainer)
    })
    mainBody.appendChild(main)
};

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });

const mainBody = document.querySelector('#content')

function pageLoad(){
    let main = document.createElement('main')
    main.classList.add('main-container')
    
    let subContainer = document.createElement('div')
    subContainer.classList.add('sub-container')
    let headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = 'A Premium And Authentic Feeling'
    let button = document.createElement('div')
    button.textContent = 'Book a Table'
    button.classList.add('button')
    subContainer.appendChild(headline)
    subContainer.appendChild(button)

    main.appendChild(subContainer)

    
    let imgPlaceHolder = document.createElement('img')
    imgPlaceHolder.src = 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    main.appendChild(imgPlaceHolder)

    mainBody.appendChild(main)
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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutus */ "./src/aboutus.js");






(0,_header__WEBPACK_IMPORTED_MODULE_2__["default"])()

const pageManager = (()=>{
    const rootEl  = document.querySelector(':root')
    const homeBtn = document.querySelector('.Home')
    const menuBtn = document.querySelector('.Menu')
    const aboutUs = document.querySelector('.aboutUs')

    const setup = ()=>{
        ;(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])()
        _setHomePage()
        homeBtn.addEventListener('click', _setHomePage)
        menuBtn.addEventListener('click', _setMenuPage)
        aboutUs.addEventListener('click', _setAboutUsPage)
    }
    const _setHomePage = ()=>{
        if(document.querySelector('main')){
            (0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])('main')
        }
        rootEl.classList.add('home')
        ;(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])()
    }
    const _setMenuPage = ()=>{
        document.querySelector('main').classList.add('transition')
        setTimeout(()=>(0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])('main'), 500)
        rootEl.classList.remove('home')
        setTimeout(()=>{
            ;(0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])()
            document.querySelector('main').classList.add('transition-menu')
            setTimeout(()=>{
                document.querySelector('main').classList.remove('transition-menu')
            },600)
        },500)
        
    }
    const _setAboutUsPage = ()=>{
        document.querySelector('main').classList.add('transition')
        setTimeout(()=>(0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])('main'), 500)
        rootEl.classList.remove('home')
        setTimeout(()=>{
            ;(0,_aboutus__WEBPACK_IMPORTED_MODULE_4__["default"])()
            document.querySelector('main').classList.add('transition-menu')
            setTimeout(()=>{
                document.querySelector('main').classList.remove('transition-menu')
            },600)
        },500)
    }
    return {setup}
})()

pageManager.setup()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeklBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNDO0FBQ0w7QUFDSjtBQUNNOztBQUVoQyxtREFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1REFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVk7QUFDeEI7QUFDQTtBQUNBLFFBQVEsdURBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFZO0FBQ25DO0FBQ0E7QUFDQSxZQUFZLGtEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQVk7QUFDbkM7QUFDQTtBQUNBLFlBQVkscURBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVELG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC8uL3NyYy9hYm91dHVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3QvLi9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3QvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRVcygpe1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWJvdXQtdXMtY29udGFpbmVyJyk7XG4gICAgbGV0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnXG4gICAgbWFpbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlci11cycpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxuIFxuICAgIGxldCBhYm91dFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dFVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhcmFncmFwaC1jb250YWluZXInKVxuXG4gICAgbGV0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKVxuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBvdXIgYnVyZ2VyIHJlc3RhdXJhbnQhIFdlIGFyZSBleGNpdGVkIHRvIG9mZmVyIG91ciBndWVzdHMgYSBkZWxpY2lvdXMgYW5kIHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIGJ1cmdlcnMgYXJlIG1hZGUgd2l0aCBmcmVzaCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzIGFuZCB3ZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgdXAgdGhlIGJlc3QgYnVyZ2VycyBpbiB0b3duLidcbiAgICBhYm91dFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpXG5cbiAgICBsZXQgdGV4dENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJylcbiAgICB0ZXh0Q29udGFpbmVyMS50ZXh0Q29udGVudCA9ICdPdXIgbWVudSBmZWF0dXJlcyBhIHZhcmlldHkgb2Ygc3BlY2lhbHR5IGJ1cmdlcnMsIGluY2x1ZGluZyB0aGUgcG9wdWxhciBiYWNvbiBjaGVlc2VidXJnZXIgYW5kIHRoZSBCQlEgYnVyZ2VyLiBXZSBhbHNvIGhhdmUgc2FsYWRzLCBzaWRlcywgYW5kIGRlc3NlcnRzIGZvciB0aG9zZSBsb29raW5nIGZvciBzb21ldGhpbmcgYSBsaXR0bGUgbGlnaHRlciBvciBzb21ldGhpbmcgc3dlZXQuJ1xuICAgIGFib3V0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcjEpXG5cbiAgICBsZXQgdGV4dENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJylcbiAgICB0ZXh0Q29udGFpbmVyMi50ZXh0Q29udGVudCA9ICdXZSBrbm93IHRoYXQgeW91IHdpbGwgbG92ZSBvdXIgZm9vZCBhcyBtdWNoIGFzIHdlIGRvISBUaGFua3MgZm9yIGNob29zaW5nIG91ciBidXJnZXIgcmVzdGF1cmFudCBhbmQgd2UgaG9wZSB0byBzZWUgeW91IHNvb24hJ1xuICAgIGFib3V0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcjIpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VXNDb250YWluZXIpXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KXtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpXG59IiwiY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICAvL0hlYWRlciB3aXRoIG5hdiBtZW51XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKVxuICAgIC8vTGVmdCBTaWRlIG9mIEhlYWRlclxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaWRlJylcbiAgICBsZWZ0U2lkZS50ZXh0Q29udGVudCA9ICdCZWVmeSdcbiAgICAvL1JpZ2h0IFNpZGUgb2YgSGVhZGVyXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNpZGUnKVxuICAgIGxldCByaWdodFNpZGVPcHRpb25zID0gWydIb21lJywgJ01lbnUnLCAnQWJvdXQgVXMnXVxuICAgIHJpZ2h0U2lkZU9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjdXJyZW50T3B0LnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgY3VycmVudE9wdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbXMnKVxuICAgICAgICBpZihpdGVtID09ICdBYm91dCBVcycpe1xuICAgICAgICAgICAgY3VycmVudE9wdC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcHQuY2xhc3NMaXN0LmFkZChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudE9wdClcbiAgICB9KVxuXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSlcblxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbn1cblxuIiwiY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBtZW51T3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZWVmIEJ1cmdlcicsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQmVlZiBQYXR0eSwgT25pb25zLCBUb21hdG9lcywgUGlja2xlcywgTGV0dHVjZSwga2V0Y2h1cCwgTWF5byxtdXN0YXJkJyxcbiAgICAgICAgcHJpY2U6ICckNy45NScsXG4gICAgICAgIGltZzogJy4vcGxhY2Vob2xkZXItcmVtb3ZlYmctcHJldmlldy5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDaGVlc2UgQnVyZ2VyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBDaGVkZGFyIENoZWVzZSwgR3JpbGxlZCBvbmlvbnMgJiBUb21hdG9lcywgUGlja2xlcywgTGV0dHVjZSwgS2V0Y2h1cCwgTWF5byBhbmQgTXVzdGFyZCcsXG4gICAgICAgIHByaWNlOiAnJDguNDknLFxuICAgICAgICBpbWc6ICcuL2NoZWVzZWJ1cmdlci5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZWVmIEJhY29uJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBDaGVkZGFyIENoZWVzZSwgQmVlZiBCYWNvbiwgR3JpbGxlZCBPbmlvbnMgJiBUb21hdG9lcyBQaWNrbGVzLCBMZXR0dWNlLCBLZXRjaHVwLCBNYXlvIGFuZCBNdXN0YXJkJyxcbiAgICAgICAgcHJpY2U6ICckOS45OScsXG4gICAgICAgIGltZzogJy4vYmVlZmJhY29uLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NyZWFteSBNdXNocm9vbScsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQmVlZiBQYXR0eSwgQ3JlYW0gb2YgTXVzaHJvb20sIE1venphcmVsbGEgQ2hlZXNlLCBHcmlsbGVkIE9uaW9ucywgTWF5bycsXG4gICAgICAgIHByaWNlOiAnJDkuNDUnLFxuICAgICAgICBpbWc6ICcuL2NyZWFteW11c2hyb29tLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0hhd2FpaWFuIEJ1cmdlcicsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQmVlZiBQYXR0eSwgR3JpbGxlZCBQaW5lYXBwbGUsTW96emFyZWxsYSBDaGVlc2UsIE9uaW9ucywgVG9tYXRvZXMsIExldHR1Y2UsIE1heW8sIEJCUSBzYXVjZScsXG4gICAgICAgIHByaWNlOiAnJDEwLjAwJyxcbiAgICAgICAgaW1nOiAnLi9oYXdhaWlhbi5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlY3Rpb246IHRydWUsXG4gICAgICAgIG5hbWU6ICdTcGljeSBUYW5kb29yaScsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnVGFuZG9vcmkgQ2hpY2tlbiwgQ2hlZGRhciBDaGVlc2UsIEdyaWxsZWQgT25pb24gJiBUb21hdG9lcyBMZXR0dWNlLCBQaWNrbGVzLCBHYXJsaWMgU2F1Y2UsIE1heW8nLFxuICAgICAgICBwcmljZTogJyQ5Ljk1JyxcbiAgICAgICAgaW1nOiAnLi9zcGljeXRhbmRvcmkucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3BpY3kgQnVmZmFsbycsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQ3Jpc3B5IENoaWNrZW4sIE1venphcmVsbGEgQ2hlZXNlLCBHcmlsbGVkIE9uaW9uICYgVG9tYXRvZXMgTGV0dHVjZSwgR2FybGljIFNhdWNlLCBCdWZmYWxvIFNhdWNlIE1heW8nLFxuICAgICAgICBwcmljZTogJyQxMC40OScsXG4gICAgICAgIGltZzogJy4vc3BpY3lidWZmYWxvLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JCUSBDaGlja2VuJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdHcmlsbGVkIENoaWNrZW4sIE1venphcmVsbGEgQ2hlZXNlLCBHcmlsbGVkIE9uaW9uLCBMZXR0dWNlLCBNYXlvIEJCUSBTYXVjZScsXG4gICAgICAgIHByaWNlOiAnJDkuOTUnLFxuICAgICAgICBpbWc6ICcuL2JicWNoaWNrZW5idXJnZXIucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ3Jpc3B5IENoaWNrZW4nLFxuICAgICAgICBpbmdyZWRpZW50czogJ0NyaXNweSBDaGlja2VuLCBDaGVkZGFyIENoZWVzZSwgR3JpbGxlZCBPbmlvbiAmIFRvbWF0b2VzIExldHR1Y2UsIFBpY2tsZXMsIEdhcmxpYyBTYXVjZSwgTWF5bywgQ2hpcG90bGUgU2F1Y2UnLFxuICAgICAgICBwcmljZTogJyQxMC45NScsXG4gICAgICAgIGltZzogJy4vY3Jpc3B5Y2hpa2VuLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NoaWNrZW4gUGFyYWRpc2UnLFxuICAgICAgICBpbmdyZWRpZW50czogJ0dyaWxsZWQgQ2hpY2tlbiwgTW96emFyZWxsYSBDaGVlc2UsIEdyaWxsZWQgUGluZWFwcGxlLCBMZXR0dWNlLCBPbmlvbnMgSmFsYXBlbm9zLCBNYXlvLCBHYXJsaWMgU2F1Y2UnLFxuICAgICAgICBwcmljZTogJyQ4Ljk1JyxcbiAgICAgICAgaW1nOiAnLi9wYXJhZGlzZS5wbmcnXG4gICAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpXG4gICAgbGV0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnQ3VzdG9tZXIgRmF2b3VyaXRlcydcbiAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJylcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpXG5cbiAgICBsZXQgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBpbnNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzZWN0aW9uMS5jbGFzc0xpc3QuYWRkKCdiZWVmLXNlY3Rpb24nKVxuICAgIGluc2VjdGlvbjEuY2xhc3NMaXN0LmFkZCgnYmVlZi1zZWN0aW9uLXRleHQnKVxuICAgIGluc2VjdGlvbjEudGV4dENvbnRlbnQgPSAnQmVlZiBCdXJnZXJzJ1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGluc2VjdGlvbjEpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uMSlcblxuXG4gICAgbWVudU9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5zZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgbGV0IGluc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnY2hpY2tlbi1zZWN0aW9uJylcbiAgICAgICAgICAgIGluc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnY2hpY2tlbi1zZWN0aW9uLXRleHQnKVxuICAgICAgICAgICAgaW5zZWN0aW9uMi50ZXh0Q29udGVudCA9ICdDaGlja2VuIEJ1cmdlcnMnXG4gICAgICAgICAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChpbnNlY3Rpb24yKVxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uMilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gaXRlbS5pbWdcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICAgICAgbGV0IHByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpY2UtY29udGFpbmVyJylcbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJylcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlXG4gICAgICAgIGxldCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoaWdobGlnaHQuY2xhc3NMaXN0LmFkZCgnbW9yZS1pbmZvJylcbiAgICAgICAgaGlnaGxpZ2h0LmlubmVySFRNTCA9ICc8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMSwxNUgxM1YxN0gxMVYxNU0xMSw3SDEzVjEzSDExVjdNMTIsMkM2LjQ3LDIgMiw2LjUgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBaXCIgLz48L3N2Zz4nXG4gICAgICAgIGxldCBpbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgICAgICBpbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cy1jb250YWluZXInKVxuXG4gICAgICAgIGxldCBpbmdyZWRpZW50c0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbmdyZWRpZW50c0l0ZW0uY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKVxuICAgICAgICBpbmdyZWRpZW50c0l0ZW0udGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzXG5cbiAgICAgICAgcHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2UpXG4gICAgICAgIGluZ3JlZGllbnRzLmFwcGVuZENoaWxkKGhpZ2hsaWdodClcbiAgICAgICAgaW5ncmVkaWVudHMuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNJdGVtKVxuXG4gICAgICAgIHByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzKVxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlQ29udGFpbmVyKVxuXG4gICAgICAgIGxldCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYW1lLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWVcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWJ1dHRvbicpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICAgICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcilcblxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcilcbiAgICB9KVxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG1haW4pXG59OyIsIlxuY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCl7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJylcbiAgICBcbiAgICBsZXQgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpXG4gICAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpXG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnQSBQcmVtaXVtIEFuZCBBdXRoZW50aWMgRmVlbGluZydcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQm9vayBhIFRhYmxlJ1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKVxuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSlcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpXG5cbiAgICBcbiAgICBsZXQgaW1nUGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZ1BsYWNlSG9sZGVyLnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTAyODM0NDM0My1jZDE3M2ZmYzY4YTk/Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZtPWpwZyZpeGxpYj1yYi0xLjIuMSZxPTgwJnJhd191cmw9dHJ1ZSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MCdcbiAgICBtYWluLmFwcGVuZENoaWxkKGltZ1BsYWNlSG9sZGVyKVxuXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZS1sb2FkJ1xuaW1wb3J0IGNsZWFyRWxlbWVudCBmcm9tICcuL2NsZWFyJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBhYm91dFVzRiBmcm9tICcuL2Fib3V0dXMnXG5cbmhlYWRlcigpXG5cbmNvbnN0IHBhZ2VNYW5hZ2VyID0gKCgpPT57XG4gICAgY29uc3Qgcm9vdEVsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290JylcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkhvbWUnKVxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTWVudScpXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFVzJylcblxuICAgIGNvbnN0IHNldHVwID0gKCk9PntcbiAgICAgICAgcGFnZUxvYWQoKVxuICAgICAgICBfc2V0SG9tZVBhZ2UoKVxuICAgICAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3NldEhvbWVQYWdlKVxuICAgICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3NldE1lbnVQYWdlKVxuICAgICAgICBhYm91dFVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3NldEFib3V0VXNQYWdlKVxuICAgIH1cbiAgICBjb25zdCBfc2V0SG9tZVBhZ2UgPSAoKT0+e1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpe1xuICAgICAgICAgICAgY2xlYXJFbGVtZW50KCdtYWluJylcbiAgICAgICAgfVxuICAgICAgICByb290RWwuY2xhc3NMaXN0LmFkZCgnaG9tZScpXG4gICAgICAgIHBhZ2VMb2FkKClcbiAgICB9XG4gICAgY29uc3QgX3NldE1lbnVQYWdlID0gKCk9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5jbGVhckVsZW1lbnQoJ21haW4nKSwgNTAwKVxuICAgICAgICByb290RWwuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZScpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIG1lbnUoKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tbWVudScpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24tbWVudScpXG4gICAgICAgICAgICB9LDYwMClcbiAgICAgICAgfSw1MDApXG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCBfc2V0QWJvdXRVc1BhZ2UgPSAoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PmNsZWFyRWxlbWVudCgnbWFpbicpLCA1MDApXG4gICAgICAgIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdob21lJylcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgYWJvdXRVc0YoKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tbWVudScpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24tbWVudScpXG4gICAgICAgICAgICB9LDYwMClcbiAgICAgICAgfSw1MDApXG4gICAgfVxuICAgIHJldHVybiB7c2V0dXB9XG59KSgpXG5cbnBhZ2VNYW5hZ2VyLnNldHVwKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=