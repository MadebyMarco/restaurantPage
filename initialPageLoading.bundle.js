"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["initialPageLoading"],{

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _Icons_phoneIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/phoneIcon.png */ "./src/Icons/phoneIcon.png");
/* harmony import */ var _Icons_emailIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/emailIcon.png */ "./src/Icons/emailIcon.png");




console.log("test");

const contactPage = (() => {
    const _createMain = () => {
        const mainElement = document.createElement("main");
        mainElement.classList.add("contactPage");
        return mainElement
    }

    const _createContact = () => {
        const container = document.createElement("div");

        const header = document.createElement("h1");
        header.textContent = "Contact";
        container.appendChild(header);

        const numberContact = document.createElement("div");
        numberContact.classList.add("iconAndInfo");
        const number = document.createElement("div");
        const phoneIcon = document.createElement("img");
        phoneIcon.setAttribute("src", _Icons_phoneIcon_png__WEBPACK_IMPORTED_MODULE_0__);
        phoneIcon.classList.add("icon");
        number.textContent = "+39339957495";

        numberContact.appendChild(phoneIcon);
        numberContact.appendChild(number);
        container.appendChild(numberContact);

        const emailContact = document.createElement("div");
        emailContact.classList.add("iconAndInfo");

        const email = document.createElement("div")
        email.textContent = "fakeItalianEmail@gitaly.com"
        const emailIcon = document.createElement("img")
        emailIcon.setAttribute("src", _Icons_emailIcon_png__WEBPACK_IMPORTED_MODULE_1__);
        emailIcon.classList.add("icon");

        emailContact.appendChild(emailIcon);
        emailContact.appendChild(email);
        container.appendChild(emailContact);

        return container;

    }

    const load = () => {
        const container = document.querySelector("#content");
        container.appendChild(_createMain());
        const main = document.querySelector("main");
        main.appendChild(_createContact());
    }

    return {load};
})();



/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _Icons_locationIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/locationIcon.png */ "./src/Icons/locationIcon.png");
/* harmony import */ var _Images_reuben_teo_XvxFqD3uUEk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/reuben-teo-XvxFqD3uUEk-unsplash.jpg */ "./src/Images/reuben-teo-XvxFqD3uUEk-unsplash.jpg");



const homePage = (()=> {


    function _createMain() {
        const mainElement = document.createElement("main");
        mainElement.classList.add("homePage");
        
        const heroImage = document.createElement("img");
        heroImage.classList.add("heroImage");
        heroImage.setAttribute("src", _Images_reuben_teo_XvxFqD3uUEk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__);
        heroImage.setAttribute("alt", "italian fields with large estate");
        
        const heroImageCredit = document.createElement("span");
        heroImageCredit.textContent = "Published on Unsplash by Ruben Teo";
        
        mainElement.appendChild(heroImage);
        mainElement.appendChild(heroImageCredit);

        document.querySelector("#content").appendChild(mainElement);
        
    }   
    function appendChildToMainElement(child) {
        return document.querySelector("main").appendChild(child);
    }

    
    function _createAbout() {
        const about = document.createElement("div");
        about.classList.add("aboutSection");
        const heading = document.createElement("h1");
        heading.textContent = "ABOUT";
        about.appendChild(heading);
        const aboutDescription = document.createElement("div");
        aboutDescription.textContent = "Opened by an old italian man who traversed the world on one leg and with minimal speaking ability. Instead of communicating his feelings through words, he cooked. He learned. He loved. Now, he serves. Welcome to his prized possesion.";
        about.appendChild(aboutDescription);

        appendChildToMainElement(about);
    } 

    function _createHours() {
        const hours = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "HOURS";
        hours.appendChild(heading)

        const hoursUnorderedList = document.createElement("ul");
        const createHoursListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Monday: 5am - 12pm ";
                        break;
                    case 1:
                        item.textContent = "Tuesday: 5am - 12pm" ;
                        break;
                    case 2:
                        item.textContent = "Wednesday: 5am - 12pm";
                        break;
                    case 3:
                        item.textContent = "Thursday: 5am - 12pm ";
                        break;
                    case 4:
                        item.textContent = "Friday: 5am - 12pm";
                        break;
                    case 5:
                        item.textContent = "Saturday: 5am - 12pm";
                        break;
                    case 6:
                        item.textContent = "Sunday: 5am - 12pm";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                hoursUnorderedList.appendChild(item);
            }
        } 
        createHoursListItems();

        hours.appendChild(hoursUnorderedList);

        appendChildToMainElement(hours);
    }

    function _createLocation() {
        const location = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "LOCATIONS";
        location.appendChild(heading)

        const locationMilan = document.createElement("div");
        locationMilan.classList.add("iconAndInfo");

        const locationIcon = document.createElement("img");
        locationIcon.setAttribute("src", _Icons_locationIcon_png__WEBPACK_IMPORTED_MODULE_0__);
        locationIcon.classList.add("icon");
        locationMilan.appendChild(locationIcon);
        location.appendChild(locationMilan);

        const locationMilanHeading = document.createElement("div");
        locationMilanHeading.textContent = "Via Roma 202, 34346 Cesano Boscone MI, Italy"
        locationMilan.appendChild(locationMilanHeading);

        const locationRome = document.createElement("div");
        locationRome.classList.add("iconAndInfo");

        const locationIconRome = document.createElement("img");
        locationIconRome.setAttribute("src", _Icons_locationIcon_png__WEBPACK_IMPORTED_MODULE_0__);
        locationIconRome.classList.add("icon");
        locationRome.appendChild(locationIconRome);
        location.appendChild(locationRome);

        const locationRomeHeading = document.createElement("div");
        locationRomeHeading.textContent = "Via di Villa Lauchli, 9, 12345 Roma RM, Italy"
        locationRome.appendChild(locationRomeHeading);
        appendChildToMainElement(location);
    }
    
    function load() {
        _createMain();
        _createAbout();
        _createHours();
        _createLocation();
    }

    return {load}
})();
    

/***/ }),

/***/ "./src/initialPageLoading.js":
/*!***********************************!*\
  !*** ./src/initialPageLoading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");

// Html skeleton
//   <body style="height: 100%">
//     <div class="heading">Title</div>
//     <div>Nav bar
//         <button >Home</button>
//         <button>Locations</button>
//         <button>Menu</button>
//     </div>
//     <main>
//         <div class="heroImage">Img goes here</div>
//         <div class="about">About</div>
//         <div class="hours">Hours</div>
//         <div class="location">Location</div>
//     </main>
//   </body>





const initialPage = (() => {

    function _createContentDiv() {
        const content = document.createElement("div");
        const body = document.querySelector("body");
        content.id = "content";
        body.appendChild(content);
    }    
    
    
    function _createNavBar() {
        const navBar = document.createElement("div");
        navBar.classList.add("nav");
        
        const navButtonHome = document.createElement("button");
        navButtonHome.textContent = "Home";
        navButtonHome.classList.add("highlight");
        
        const navButtonMenu = document.createElement("button");
        navButtonMenu.textContent = "Menu";
        
        const navButtonLocations = document.createElement("button");
        navButtonLocations.textContent = "Contact";
        
        navBar.appendChild(navButtonHome);
        navBar.appendChild(navButtonMenu);
        navBar.appendChild(navButtonLocations);
        
        document.body.appendChild(navBar);
    }    
    const navButtons = () => document.querySelectorAll(".nav button");
    

    function _highlightButton(e) {
        e.target.classList.add("highlight");
        console.log(navButtons());
        
    }

    function _removeHighlightsFromButtons() {
        navButtons().forEach(button => button.classList.remove("highlight"));
    }
    
    function _createHeading(headingContent) {
        const heading = document.createElement("div");
        heading.classList.add("heading");
        heading.textContent = `${headingContent}`;
        
        document.body.appendChild(heading);
    }    
    
    function clearContent() {
        const contentItems = document.querySelectorAll("#content > *");
        contentItems.forEach(item => item.remove());
    }

    
    function _addEventListenersToNavButtons() {
        
        const homeButton = document.querySelector(".nav > button");
        
        homeButton.addEventListener("click", (e) => {
            // console.log("first button work");
            initialPage.clearContent();
            _homePage__WEBPACK_IMPORTED_MODULE_0__.homePage.load();
            _removeHighlightsFromButtons();
            _highlightButton(e);
        });
        
        const menuButton = document.querySelector(".nav > button:nth-child(2)");
        
        menuButton.addEventListener("click", (e) => {
            // console.log("second button work");
            initialPage.clearContent();
            _menuPage__WEBPACK_IMPORTED_MODULE_1__.menuPage.load();
            _removeHighlightsFromButtons();
            _highlightButton(e);
        });
        
        const contactButton = document.querySelector(".nav > button:last-child");

        contactButton.addEventListener("click", (e) => {
            // console.log("last button works too");
            initialPage.clearContent();
            _contactPage__WEBPACK_IMPORTED_MODULE_2__.contactPage.load();
            _removeHighlightsFromButtons();
            _highlightButton(e);
        });
    }

    function load() {
        _createNavBar();
        _addEventListenersToNavButtons();
        _createHeading("Marco's Italian Medallion");
        _createContentDiv();
        _homePage__WEBPACK_IMPORTED_MODULE_0__.homePage.load();
    }

    return {
        load,
        clearContent
    }
})();
    
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);



/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
const menuPage = (() => {

    const _createMain = () => {
        const mainElement = document.createElement("main");
        mainElement.classList.add("menuPage");
        document.querySelector("#content").appendChild(mainElement);
    }

    const _getMain = () => {
        return document.querySelector("main");
    }
    
    const _createAntipasti = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "ANTIPASTI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Italian Bread";
                        break;
                    case 1:
                        item.textContent = "Asparagus";
                        break;
                    case 2:
                        item.textContent = "Roasted Eggplant Spread";
                        break;
                    case 3:
                        item.textContent = "Beef Spiedini";
                        break;
                    case 4:
                        item.textContent = "Focaccia Barese";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    }



     const _createPrimi = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "PRIMI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Ribollita";
                        break;
                    case 1:
                        item.textContent = "Pasta e Fagioli";
                        break;
                    case 2:
                        item.textContent = "Gnocchi di Patate al Ragu";
                        break;
                    case 3:
                        item.textContent = "Pappardelle al Coniglio";
                        break;
                    case 4:
                        item.textContent = "Risotto ai Carciofi";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    }

    const _createSecondi = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "SECONDI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Trippa Alla Fiorentina";
                        break;
                    case 1:
                        item.textContent = "Peposo";
                        break;
                    case 2:
                        item.textContent = "Tagliata Rucola e Parmigiano";
                        break;
                    case 3:
                        item.textContent = "Cinghiale Dolce-Forte";
                        break;
                    case 4:
                        item.textContent = "Bistecca Alla Fiorentina";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    } 


    const _createDolci = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "DOLCI";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Tiramisu";
                        break;
                    case 1:
                        item.textContent = "Panna cotta";
                        break;
                    case 2:
                        item.textContent = "Gelato misto";
                        break;
                    case 3:
                        item.textContent = "Cannoli";
                        break;
                    case 4:
                        item.textContent = "Biscottini";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    } 

    const _createDrinks = () => {
        const container = document.createElement("div");
        const heading = document.createElement("h1");
        heading.textContent = "DRINKS";
        const unorderedList = document.createElement("ul");
        const createListItems = () => {
            for(let i = 0; i < 5; i++) {
                const item = document.createElement("li");

                switch (i) {
                    case 0:
                        item.textContent = "Espresso";
                        break;
                    case 1:
                        item.textContent = "Cappucino";
                        break;
                    case 2:
                        item.textContent = "Limonata";
                        break;
                    case 3:
                        item.textContent = "Negroni";
                        break;
                    case 4:
                        item.textContent = "Prosecco";
                        break;
                
                    default: console.log("error with list items");
                        break;
                }
                
                unorderedList.appendChild(item);
            }
        } 
        createListItems();

        container.appendChild(heading);
        container.appendChild(unorderedList);

        _getMain().appendChild(container);

    } 

    const load = () => {
        _createMain();
        _createAntipasti();
        _createPrimi();
        _createSecondi();
        _createDolci();
        _createDrinks();
    }
    

    return {load};



})();


// Appetizers
// Main dishes
// Drinks

/***/ }),

/***/ "./src/Icons/emailIcon.png":
/*!*********************************!*\
  !*** ./src/Icons/emailIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d5171c0bc82d7c678c5.png";

/***/ }),

/***/ "./src/Icons/locationIcon.png":
/*!************************************!*\
  !*** ./src/Icons/locationIcon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6481bdda324f19bef30.png";

/***/ }),

/***/ "./src/Icons/phoneIcon.png":
/*!*********************************!*\
  !*** ./src/Icons/phoneIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cbc90a93f52ad1997aa.png";

/***/ }),

/***/ "./src/Images/reuben-teo-XvxFqD3uUEk-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/Images/reuben-teo-XvxFqD3uUEk-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "576adaa7a88165936b78.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/initialPageLoading.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7Ozs7QUFJWixDQUFDOztBQUVpQjtBQUNsQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbml0aWFsUGFnZUxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBob25lSWNvblBuZyBmcm9tIFwiLi9JY29ucy9waG9uZUljb24ucG5nXCI7XG5pbXBvcnQgZW1haWxJY29uUG5nIGZyb20gXCIuL0ljb25zL2VtYWlsSWNvbi5wbmdcIjtcblxuXG5jb25zb2xlLmxvZyhcInRlc3RcIik7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RQYWdlXCIpO1xuICAgICAgICByZXR1cm4gbWFpbkVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBudW1iZXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbnVtYmVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiaWNvbkFuZEluZm9cIik7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHBob25lSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGhvbmVJY29uUG5nKTtcbiAgICAgICAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBcIiszOTMzOTk1NzQ5NVwiO1xuXG4gICAgICAgIG51bWJlckNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICAgICAgbnVtYmVyQ29udGFjdC5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyQ29udGFjdCk7XG5cbiAgICAgICAgY29uc3QgZW1haWxDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZW1haWxDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJpY29uQW5kSW5mb1wiKTtcblxuICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZW1haWwudGV4dENvbnRlbnQgPSBcImZha2VJdGFsaWFuRW1haWxAZ2l0YWx5LmNvbVwiXG4gICAgICAgIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgZW1haWxJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbWFpbEljb25QbmcpO1xuICAgICAgICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5cbiAgICAgICAgZW1haWxDb250YWN0LmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XG4gICAgICAgIGVtYWlsQ29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbENvbnRhY3QpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlTWFpbigpKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWN0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZH07XG59KSgpO1xuXG5leHBvcnQge2NvbnRhY3RQYWdlfSIsImltcG9ydCBsb2NhdGlvbkljb25QbmcgZnJvbSBcIi4vSWNvbnMvbG9jYXRpb25JY29uLnBuZ1wiO1xuaW1wb3J0IGl0YWx5IGZyb20gXCIuL0ltYWdlcy9yZXViZW4tdGVvLVh2eEZxRDN1VUVrLXVuc3BsYXNoLmpwZ1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKT0+IHtcblxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU1haW4oKSB7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJob21lUGFnZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyb0ltYWdlXCIpO1xuICAgICAgICBoZXJvSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0YWx5KTtcbiAgICAgICAgaGVyb0ltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIml0YWxpYW4gZmllbGRzIHdpdGggbGFyZ2UgZXN0YXRlXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVyb0ltYWdlQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGhlcm9JbWFnZUNyZWRpdC50ZXh0Q29udGVudCA9IFwiUHVibGlzaGVkIG9uIFVuc3BsYXNoIGJ5IFJ1YmVuIFRlb1wiO1xuICAgICAgICBcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlQ3JlZGl0KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQpO1xuICAgICAgICBcbiAgICB9ICAgXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRUb01haW5FbGVtZW50KGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUFib3V0KCkge1xuICAgICAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFNlY3Rpb25cIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb25zdCBhYm91dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWJvdXREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiT3BlbmVkIGJ5IGFuIG9sZCBpdGFsaWFuIG1hbiB3aG8gdHJhdmVyc2VkIHRoZSB3b3JsZCBvbiBvbmUgbGVnIGFuZCB3aXRoIG1pbmltYWwgc3BlYWtpbmcgYWJpbGl0eS4gSW5zdGVhZCBvZiBjb21tdW5pY2F0aW5nIGhpcyBmZWVsaW5ncyB0aHJvdWdoIHdvcmRzLCBoZSBjb29rZWQuIEhlIGxlYXJuZWQuIEhlIGxvdmVkLiBOb3csIGhlIHNlcnZlcy4gV2VsY29tZSB0byBoaXMgcHJpemVkIHBvc3Nlc2lvbi5cIjtcbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRUb01haW5FbGVtZW50KGFib3V0KTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUhvdXJzKCkge1xuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhPVVJTXCI7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAgICAgY29uc3QgaG91cnNVbm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVIb3Vyc0xpc3RJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIk1vbmRheTogNWFtIC0gMTJwbSBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiA1YW0gLSAxMnBtXCIgO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogNWFtIC0gMTJwbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiA1YW0gLSAxMnBtIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkZyaWRheTogNWFtIC0gMTJwbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5OiA1YW0gLSAxMnBtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiA1YW0gLSAxMnBtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaG91cnNVbm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBjcmVhdGVIb3Vyc0xpc3RJdGVtcygpO1xuXG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRUb01haW5FbGVtZW50KGhvdXJzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlTG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTE9DQVRJT05TXCI7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25NaWxhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY2F0aW9uTWlsYW4uY2xhc3NMaXN0LmFkZChcImljb25BbmRJbmZvXCIpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvY2F0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9jYXRpb25JY29uUG5nKTtcbiAgICAgICAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgICBsb2NhdGlvbk1pbGFuLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uTWlsYW4pO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uTWlsYW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb25NaWxhbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlZpYSBSb21hIDIwMiwgMzQzNDYgQ2VzYW5vIEJvc2NvbmUgTUksIEl0YWx5XCJcbiAgICAgICAgbG9jYXRpb25NaWxhbi5hcHBlbmRDaGlsZChsb2NhdGlvbk1pbGFuSGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25Sb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb25Sb21lLmNsYXNzTGlzdC5hZGQoXCJpY29uQW5kSW5mb1wiKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbkljb25Sb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbG9jYXRpb25JY29uUm9tZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9jYXRpb25JY29uUG5nKTtcbiAgICAgICAgbG9jYXRpb25JY29uUm9tZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgbG9jYXRpb25Sb21lLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvblJvbWUpO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblJvbWUpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uUm9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvblJvbWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJWaWEgZGkgVmlsbGEgTGF1Y2hsaSwgOSwgMTIzNDUgUm9tYSBSTSwgSXRhbHlcIlxuICAgICAgICBsb2NhdGlvblJvbWUuYXBwZW5kQ2hpbGQobG9jYXRpb25Sb21lSGVhZGluZyk7XG4gICAgICAgIGFwcGVuZENoaWxkVG9NYWluRWxlbWVudChsb2NhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIF9jcmVhdGVNYWluKCk7XG4gICAgICAgIF9jcmVhdGVBYm91dCgpO1xuICAgICAgICBfY3JlYXRlSG91cnMoKTtcbiAgICAgICAgX2NyZWF0ZUxvY2F0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkfVxufSkoKTtcbiAgICBleHBvcnQge2hvbWVQYWdlfTsiLCJcbi8vIEh0bWwgc2tlbGV0b25cbi8vICAgPGJvZHkgc3R5bGU9XCJoZWlnaHQ6IDEwMCVcIj5cbi8vICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlRpdGxlPC9kaXY+XG4vLyAgICAgPGRpdj5OYXYgYmFyXG4vLyAgICAgICAgIDxidXR0b24gPkhvbWU8L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbj5Mb2NhdGlvbnM8L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbj5NZW51PC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPG1haW4+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvSW1hZ2VcIj5JbWcgZ29lcyBoZXJlPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dFwiPkFib3V0PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vyc1wiPkhvdXJzPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPkxvY2F0aW9uPC9kaXY+XG4vLyAgICAgPC9tYWluPlxuLy8gICA8L2JvZHk+XG5cbmltcG9ydCB7aG9tZVBhZ2V9IGZyb20gXCIuL2hvbWVQYWdlXCI7XG5pbXBvcnQgeyBtZW51UGFnZSB9ICAgZnJvbSBcIi4vbWVudVBhZ2VcIlxuaW1wb3J0IHsgY29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuXG5jb25zdCBpbml0aWFsUGFnZSA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ29udGVudERpdigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH0gICAgXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU5hdkJhcigpIHtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZCdXR0b25Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmF2QnV0dG9uSG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgICAgICBuYXZCdXR0b25Ib21lLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZCdXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmF2QnV0dG9uTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmF2QnV0dG9uTG9jYXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmF2QnV0dG9uTG9jYXRpb25zLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIFxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uSG9tZSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZCdXR0b25NZW51KTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbkxvY2F0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgfSAgICBcbiAgICBjb25zdCBuYXZCdXR0b25zID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYgYnV0dG9uXCIpO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gX2hpZ2hsaWdodEJ1dHRvbihlKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hdkJ1dHRvbnMoKSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZW1vdmVIaWdobGlnaHRzRnJvbUJ1dHRvbnMoKSB7XG4gICAgICAgIG5hdkJ1dHRvbnMoKS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIF9jcmVhdGVIZWFkaW5nKGhlYWRpbmdDb250ZW50KSB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYCR7aGVhZGluZ0NvbnRlbnR9YDtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgfSAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY29udGVudCA+ICpcIik7XG4gICAgICAgIGNvbnRlbnRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgXG4gICAgZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzVG9OYXZCdXR0b25zKCkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2ID4gYnV0dG9uXCIpO1xuICAgICAgICBcbiAgICAgICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlyc3QgYnV0dG9uIHdvcmtcIik7XG4gICAgICAgICAgICBpbml0aWFsUGFnZS5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGhvbWVQYWdlLmxvYWQoKTtcbiAgICAgICAgICAgIF9yZW1vdmVIaWdobGlnaHRzRnJvbUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIF9oaWdobGlnaHRCdXR0b24oZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2ID4gYnV0dG9uOm50aC1jaGlsZCgyKVwiKTtcbiAgICAgICAgXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlY29uZCBidXR0b24gd29ya1wiKTtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlLmNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgbWVudVBhZ2UubG9hZCgpO1xuICAgICAgICAgICAgX3JlbW92ZUhpZ2hsaWdodHNGcm9tQnV0dG9ucygpO1xuICAgICAgICAgICAgX2hpZ2hsaWdodEJ1dHRvbihlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYgPiBidXR0b246bGFzdC1jaGlsZFwiKTtcblxuICAgICAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsYXN0IGJ1dHRvbiB3b3JrcyB0b29cIik7XG4gICAgICAgICAgICBpbml0aWFsUGFnZS5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlLmxvYWQoKTtcbiAgICAgICAgICAgIF9yZW1vdmVIaWdobGlnaHRzRnJvbUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIF9oaWdobGlnaHRCdXR0b24oZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIF9jcmVhdGVOYXZCYXIoKTtcbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXJzVG9OYXZCdXR0b25zKCk7XG4gICAgICAgIF9jcmVhdGVIZWFkaW5nKFwiTWFyY28ncyBJdGFsaWFuIE1lZGFsbGlvblwiKTtcbiAgICAgICAgX2NyZWF0ZUNvbnRlbnREaXYoKTtcbiAgICAgICAgaG9tZVBhZ2UubG9hZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQsXG4gICAgICAgIGNsZWFyQ29udGVudFxuICAgIH1cbn0pKCk7XG4gICAgXG4gICAgXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZTtcblxuIiwiY29uc3QgbWVudVBhZ2UgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX2NyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51UGFnZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBfZ2V0TWFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBfY3JlYXRlQW50aXBhc3RpID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBTlRJUEFTVElcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiSXRhbGlhbiBCcmVhZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkFzcGFyYWd1c1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlJvYXN0ZWQgRWdncGxhbnQgU3ByZWFkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiQmVlZiBTcGllZGluaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkZvY2FjY2lhIEJhcmVzZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH1cblxuXG5cbiAgICAgY29uc3QgX2NyZWF0ZVByaW1pID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQUklNSVwiO1xuICAgICAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJSaWJvbGxpdGFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJQYXN0YSBlIEZhZ2lvbGlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJHbm9jY2hpIGRpIFBhdGF0ZSBhbCBSYWd1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiUGFwcGFyZGVsbGUgYWwgQ29uaWdsaW9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJSaXNvdHRvIGFpIENhcmNpb2ZpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgX2dldE1haW4oKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZVNlY29uZGkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlNFQ09ORElcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiVHJpcHBhIEFsbGEgRmlvcmVudGluYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlBlcG9zb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlRhZ2xpYXRhIFJ1Y29sYSBlIFBhcm1pZ2lhbm9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJDaW5naGlhbGUgRG9sY2UtRm9ydGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJCaXN0ZWNjYSBBbGxhIEZpb3JlbnRpbmFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcImVycm9yIHdpdGggbGlzdCBpdGVtc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBjcmVhdGVMaXN0SXRlbXMoKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bm9yZGVyZWRMaXN0KTtcblxuICAgICAgICBfZ2V0TWFpbigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB9IFxuXG5cbiAgICBjb25zdCBfY3JlYXRlRG9sY2kgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkRPTENJXCI7XG4gICAgICAgIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUxpc3RJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlRpcmFtaXN1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiUGFubmEgY290dGFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJHZWxhdG8gbWlzdG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJDYW5ub2xpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiQmlzY290dGluaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH0gXG5cbiAgICBjb25zdCBfY3JlYXRlRHJpbmtzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJEUklOS1NcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiRXNwcmVzc29cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJDYXBwdWNpbm9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJMaW1vbmF0YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIk5lZ3JvbmlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJQcm9zZWNjb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH0gXG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgICBfY3JlYXRlTWFpbigpO1xuICAgICAgICBfY3JlYXRlQW50aXBhc3RpKCk7XG4gICAgICAgIF9jcmVhdGVQcmltaSgpO1xuICAgICAgICBfY3JlYXRlU2Vjb25kaSgpO1xuICAgICAgICBfY3JlYXRlRG9sY2koKTtcbiAgICAgICAgX2NyZWF0ZURyaW5rcygpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7bG9hZH07XG5cblxuXG59KSgpO1xuXG5leHBvcnQge21lbnVQYWdlfTtcbi8vIEFwcGV0aXplcnNcbi8vIE1haW4gZGlzaGVzXG4vLyBEcmlua3MiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=