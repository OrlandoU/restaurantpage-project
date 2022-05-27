/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Cheese Burger',
        ingredients: 'Beef Patty, Cheddar Cheese, Grilled onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo and Mustard',
        price: '$2.95',
        img: './cheeseburger.png'
    },
    {
        name: 'Beef Bacon',
        ingredients: 'Beef Patty, Cheddar Cheese, Beef Bacon, Grilled Onions & Tomatoes Pickles, Lettuce, Ketchup, Mayo and Mustard',
        price: '$2.95',
        img: './beefbacon.png'
    },
    {
        name: 'Creamy Mushroom',
        ingredients: 'Beef Patty, Cream of Mushroom, Mozzarella Cheese, Grilled Onions, Mayo',
        price: '$2.95',
        img: './creamymushroom.png'
    },
    {
        name: 'Hawaiian Burger',
        ingredients: 'Beef Patty, Grilled Pineapple,Mozzarella Cheese, Onions, Tomatoes, Lettuce, Mayo, BBQ sauce',
        price: '$2.95',
        img: './hawaiian.png'
    },
    {
        section: true,
        name: 'Spicy Tandoori',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
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
        },500)
    }
    const _setAboutUsPage = ()=>{
        console.log('About Us')
    }
    return {setup}
})()

pageManager.setup()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDQztBQUNMO0FBQ0o7O0FBRTFCLG1EQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHVEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBWTtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx1REFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQVk7QUFDbkM7QUFDQTtBQUNBLFlBQVksa0RBQUk7QUFDaEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3QvLi9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3QvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KXtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpXG59IiwiY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICAvL0hlYWRlciB3aXRoIG5hdiBtZW51XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKVxuICAgIC8vTGVmdCBTaWRlIG9mIEhlYWRlclxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnbGVmdC1zaWRlJylcbiAgICBsZWZ0U2lkZS50ZXh0Q29udGVudCA9ICdCZWVmeSdcbiAgICAvL1JpZ2h0IFNpZGUgb2YgSGVhZGVyXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXNpZGUnKVxuICAgIGxldCByaWdodFNpZGVPcHRpb25zID0gWydIb21lJywgJ01lbnUnLCAnQWJvdXQgVXMnXVxuICAgIHJpZ2h0U2lkZU9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjdXJyZW50T3B0LnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgY3VycmVudE9wdC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbXMnKVxuICAgICAgICBpZihpdGVtID09ICdBYm91dCBVcycpe1xuICAgICAgICAgICAgY3VycmVudE9wdC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcHQuY2xhc3NMaXN0LmFkZChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudE9wdClcbiAgICB9KVxuXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSlcblxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbn1cblxuIiwiY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBtZW51T3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZWVmIEJ1cmdlcicsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQmVlZiBQYXR0eSwgT25pb25zLCBUb21hdG9lcywgUGlja2xlcywgTGV0dHVjZSwga2V0Y2h1cCwgTWF5byxtdXN0YXJkJyxcbiAgICAgICAgcHJpY2U6ICckMi45NScsXG4gICAgICAgIGltZzogJy4vcGxhY2Vob2xkZXItcmVtb3ZlYmctcHJldmlldy5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDaGVlc2UgQnVyZ2VyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBDaGVkZGFyIENoZWVzZSwgR3JpbGxlZCBvbmlvbnMgJiBUb21hdG9lcywgUGlja2xlcywgTGV0dHVjZSwgS2V0Y2h1cCwgTWF5byBhbmQgTXVzdGFyZCcsXG4gICAgICAgIHByaWNlOiAnJDIuOTUnLFxuICAgICAgICBpbWc6ICcuL2NoZWVzZWJ1cmdlci5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZWVmIEJhY29uJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBDaGVkZGFyIENoZWVzZSwgQmVlZiBCYWNvbiwgR3JpbGxlZCBPbmlvbnMgJiBUb21hdG9lcyBQaWNrbGVzLCBMZXR0dWNlLCBLZXRjaHVwLCBNYXlvIGFuZCBNdXN0YXJkJyxcbiAgICAgICAgcHJpY2U6ICckMi45NScsXG4gICAgICAgIGltZzogJy4vYmVlZmJhY29uLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NyZWFteSBNdXNocm9vbScsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQmVlZiBQYXR0eSwgQ3JlYW0gb2YgTXVzaHJvb20sIE1venphcmVsbGEgQ2hlZXNlLCBHcmlsbGVkIE9uaW9ucywgTWF5bycsXG4gICAgICAgIHByaWNlOiAnJDIuOTUnLFxuICAgICAgICBpbWc6ICcuL2NyZWFteW11c2hyb29tLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0hhd2FpaWFuIEJ1cmdlcicsXG4gICAgICAgIGluZ3JlZGllbnRzOiAnQmVlZiBQYXR0eSwgR3JpbGxlZCBQaW5lYXBwbGUsTW96emFyZWxsYSBDaGVlc2UsIE9uaW9ucywgVG9tYXRvZXMsIExldHR1Y2UsIE1heW8sIEJCUSBzYXVjZScsXG4gICAgICAgIHByaWNlOiAnJDIuOTUnLFxuICAgICAgICBpbWc6ICcuL2hhd2FpaWFuLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VjdGlvbjogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ1NwaWN5IFRhbmRvb3JpJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBPbmlvbnMsIFRvbWF0b2VzLCBQaWNrbGVzLCBMZXR0dWNlLCBrZXRjaHVwLCBNYXlvLG11c3RhcmQnLFxuICAgICAgICBwcmljZTogJyQyLjk1JyxcbiAgICAgICAgaW1nOiAnLi9wbGFjZWhvbGRlci1yZW1vdmViZy1wcmV2aWV3LnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JlZWYgQnVyZ2VyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBPbmlvbnMsIFRvbWF0b2VzLCBQaWNrbGVzLCBMZXR0dWNlLCBrZXRjaHVwLCBNYXlvLG11c3RhcmQnLFxuICAgICAgICBwcmljZTogJyQyLjk1JyxcbiAgICAgICAgaW1nOiAnLi9wbGFjZWhvbGRlci1yZW1vdmViZy1wcmV2aWV3LnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JlZWYgQnVyZ2VyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBPbmlvbnMsIFRvbWF0b2VzLCBQaWNrbGVzLCBMZXR0dWNlLCBrZXRjaHVwLCBNYXlvLG11c3RhcmQnLFxuICAgICAgICBwcmljZTogJyQyLjk1JyxcbiAgICAgICAgaW1nOiAnLi9wbGFjZWhvbGRlci1yZW1vdmViZy1wcmV2aWV3LnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JlZWYgQnVyZ2VyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBPbmlvbnMsIFRvbWF0b2VzLCBQaWNrbGVzLCBMZXR0dWNlLCBrZXRjaHVwLCBNYXlvLG11c3RhcmQnLFxuICAgICAgICBwcmljZTogJyQyLjk1JyxcbiAgICAgICAgaW1nOiAnLi9wbGFjZWhvbGRlci1yZW1vdmViZy1wcmV2aWV3LnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JlZWYgQnVyZ2VyJyxcbiAgICAgICAgaW5ncmVkaWVudHM6ICdCZWVmIFBhdHR5LCBPbmlvbnMsIFRvbWF0b2VzLCBQaWNrbGVzLCBMZXR0dWNlLCBrZXRjaHVwLCBNYXlvLG11c3RhcmQnLFxuICAgICAgICBwcmljZTogJyQyLjk1JyxcbiAgICAgICAgaW1nOiAnLi9wbGFjZWhvbGRlci1yZW1vdmViZy1wcmV2aWV3LnBuZydcbiAgICB9XG5dXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpXG4gICAgbGV0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnQ3VzdG9tZXIgRmF2b3VyaXRlcydcbiAgICBtYWluSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJylcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpXG5cbiAgICBsZXQgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBpbnNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzZWN0aW9uMS5jbGFzc0xpc3QuYWRkKCdiZWVmLXNlY3Rpb24nKVxuICAgIGluc2VjdGlvbjEuY2xhc3NMaXN0LmFkZCgnYmVlZi1zZWN0aW9uLXRleHQnKVxuICAgIGluc2VjdGlvbjEudGV4dENvbnRlbnQgPSAnQmVlZiBCdXJnZXJzJ1xuICAgIHNlY3Rpb24xLmFwcGVuZENoaWxkKGluc2VjdGlvbjEpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uMSlcblxuXG4gICAgbWVudU9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5zZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgbGV0IGluc2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnY2hpY2tlbi1zZWN0aW9uJylcbiAgICAgICAgICAgIGluc2VjdGlvbjIuY2xhc3NMaXN0LmFkZCgnY2hpY2tlbi1zZWN0aW9uLXRleHQnKVxuICAgICAgICAgICAgaW5zZWN0aW9uMi50ZXh0Q29udGVudCA9ICdDaGlja2VuIEJ1cmdlcnMnXG4gICAgICAgICAgICBzZWN0aW9uMi5hcHBlbmRDaGlsZChpbnNlY3Rpb24yKVxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uMilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gaXRlbS5pbWdcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICAgICAgbGV0IHByaWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJpY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpY2UtY29udGFpbmVyJylcbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJylcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlXG4gICAgICAgIGxldCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoaWdobGlnaHQuY2xhc3NMaXN0LmFkZCgnbW9yZS1pbmZvJylcbiAgICAgICAgaGlnaGxpZ2h0LmlubmVySFRNTCA9ICc8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMSwxNUgxM1YxN0gxMVYxNU0xMSw3SDEzVjEzSDExVjdNMTIsMkM2LjQ3LDIgMiw2LjUgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEyLDIwQTgsOCAwIDAsMSA0LDEyQTgsOCAwIDAsMSAxMiw0QTgsOCAwIDAsMSAyMCwxMkE4LDggMCAwLDEgMTIsMjBaXCIgLz48L3N2Zz4nXG4gICAgICAgIGxldCBpbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgICAgICBpbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cy1jb250YWluZXInKVxuXG4gICAgICAgIGxldCBpbmdyZWRpZW50c0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbmdyZWRpZW50c0l0ZW0uY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKVxuICAgICAgICBpbmdyZWRpZW50c0l0ZW0udGV4dENvbnRlbnQgPSBpdGVtLmluZ3JlZGllbnRzXG5cbiAgICAgICAgcHJpY2VDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2UpXG4gICAgICAgIGluZ3JlZGllbnRzLmFwcGVuZENoaWxkKGhpZ2hsaWdodClcbiAgICAgICAgaW5ncmVkaWVudHMuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNJdGVtKVxuXG4gICAgICAgIHByaWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzKVxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlQ29udGFpbmVyKVxuXG4gICAgICAgIGxldCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYW1lLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWVcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWJ1dHRvbicpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQnXG4gICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICAgICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcilcblxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcilcbiAgICB9KVxuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKG1haW4pXG59OyIsIlxuY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCl7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJylcbiAgICBcbiAgICBsZXQgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzdWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpXG4gICAgbGV0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpXG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnQSBQcmVtaXVtIEFuZCBBdXRoZW50aWMgRmVlbGluZydcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQm9vayBhIFRhYmxlJ1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKVxuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSlcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpXG5cbiAgICBcbiAgICBsZXQgaW1nUGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZ1BsYWNlSG9sZGVyLnNyYyA9ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTAyODM0NDM0My1jZDE3M2ZmYzY4YTk/Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZtPWpwZyZpeGxpYj1yYi0xLjIuMSZxPTgwJnJhd191cmw9dHJ1ZSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MCdcbiAgICBtYWluLmFwcGVuZENoaWxkKGltZ1BsYWNlSG9sZGVyKVxuXG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZS1sb2FkJ1xuaW1wb3J0IGNsZWFyRWxlbWVudCBmcm9tICcuL2NsZWFyJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcblxuaGVhZGVyKClcblxuY29uc3QgcGFnZU1hbmFnZXIgPSAoKCk9PntcbiAgICBjb25zdCByb290RWwgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKVxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG9tZScpXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NZW51JylcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0VXMnKVxuXG4gICAgY29uc3Qgc2V0dXAgPSAoKT0+e1xuICAgICAgICBwYWdlTG9hZCgpXG4gICAgICAgIF9zZXRIb21lUGFnZSgpXG4gICAgICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2V0SG9tZVBhZ2UpXG4gICAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2V0TWVudVBhZ2UpXG4gICAgICAgIGFib3V0VXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2V0QWJvdXRVc1BhZ2UpXG4gICAgfVxuICAgIGNvbnN0IF9zZXRIb21lUGFnZSA9ICgpPT57XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSl7XG4gICAgICAgICAgICBjbGVhckVsZW1lbnQoJ21haW4nKVxuICAgICAgICB9XG4gICAgICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKCdob21lJylcbiAgICAgICAgcGFnZUxvYWQoKVxuICAgIH1cbiAgICBjb25zdCBfc2V0TWVudVBhZ2UgPSAoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PmNsZWFyRWxlbWVudCgnbWFpbicpLCA1MDApXG4gICAgICAgIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdob21lJylcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgbWVudSgpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1tZW51JylcbiAgICAgICAgfSw1MDApXG4gICAgfVxuICAgIGNvbnN0IF9zZXRBYm91dFVzUGFnZSA9ICgpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKCdBYm91dCBVcycpXG4gICAgfVxuICAgIHJldHVybiB7c2V0dXB9XG59KSgpXG5cbnBhZ2VNYW5hZ2VyLnNldHVwKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=