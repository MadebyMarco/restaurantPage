"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["homePage"],{

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

/***/ "./src/Icons/locationIcon.png":
/*!************************************!*\
  !*** ./src/Icons/locationIcon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6481bdda324f19bef30.png";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homePage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNVOztBQUVqRTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdFQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLG9EQUFlO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxvREFBZTtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYXRpb25JY29uUG5nIGZyb20gXCIuL0ljb25zL2xvY2F0aW9uSWNvbi5wbmdcIjtcbmltcG9ydCBpdGFseSBmcm9tIFwiLi9JbWFnZXMvcmV1YmVuLXRlby1YdnhGcUQzdVVFay11bnNwbGFzaC5qcGdcIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKCk9PiB7XG5cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVNYWluKCkge1xuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgICAgICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVBhZ2VcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhlcm9JbWFnZVwiKTtcbiAgICAgICAgaGVyb0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpdGFseSk7XG4gICAgICAgIGhlcm9JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJpdGFsaWFuIGZpZWxkcyB3aXRoIGxhcmdlIGVzdGF0ZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhlcm9JbWFnZUNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBoZXJvSW1hZ2VDcmVkaXQudGV4dENvbnRlbnQgPSBcIlB1Ymxpc2hlZCBvbiBVbnNwbGFzaCBieSBSdWJlbiBUZW9cIjtcbiAgICAgICAgXG4gICAgICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG4gICAgICAgIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKGhlcm9JbWFnZUNyZWRpdCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcbiAgICAgICAgXG4gICAgfSAgIFxuICAgIGZ1bmN0aW9uIGFwcGVuZENoaWxkVG9NYWluRWxlbWVudChjaGlsZCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuICAgIFxuICAgIGZ1bmN0aW9uIF9jcmVhdGVBYm91dCgpIHtcbiAgICAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRTZWN0aW9uXCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBQk9VVFwiO1xuICAgICAgICBhYm91dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29uc3QgYWJvdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFib3V0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIk9wZW5lZCBieSBhbiBvbGQgaXRhbGlhbiBtYW4gd2hvIHRyYXZlcnNlZCB0aGUgd29ybGQgb24gb25lIGxlZyBhbmQgd2l0aCBtaW5pbWFsIHNwZWFraW5nIGFiaWxpdHkuIEluc3RlYWQgb2YgY29tbXVuaWNhdGluZyBoaXMgZmVlbGluZ3MgdGhyb3VnaCB3b3JkcywgaGUgY29va2VkLiBIZSBsZWFybmVkLiBIZSBsb3ZlZC4gTm93LCBoZSBzZXJ2ZXMuIFdlbGNvbWUgdG8gaGlzIHByaXplZCBwb3NzZXNpb24uXCI7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGFwcGVuZENoaWxkVG9NYWluRWxlbWVudChhYm91dCk7XG4gICAgfSBcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVIb3VycygpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIT1VSU1wiO1xuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChoZWFkaW5nKVxuXG4gICAgICAgIGNvbnN0IGhvdXJzVW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlSG91cnNMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJNb25kYXk6IDVhbSAtIDEycG0gXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogNWFtIC0gMTJwbVwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDVhbSAtIDEycG1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogNWFtIC0gMTJwbSBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDVhbSAtIDEycG1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogNWFtIC0gMTJwbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlN1bmRheTogNWFtIC0gMTJwbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhvdXJzVW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY3JlYXRlSG91cnNMaXN0SXRlbXMoKTtcblxuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1Vub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIGFwcGVuZENoaWxkVG9NYWluRWxlbWVudChob3Vycyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUxvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkxPQ0FUSU9OU1wiO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKVxuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uTWlsYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvbk1pbGFuLmNsYXNzTGlzdC5hZGQoXCJpY29uQW5kSW5mb1wiKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBsb2NhdGlvbkljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGxvY2F0aW9uSWNvblBuZyk7XG4gICAgICAgIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgbG9jYXRpb25NaWxhbi5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbk1pbGFuKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbk1pbGFuSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY2F0aW9uTWlsYW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJWaWEgUm9tYSAyMDIsIDM0MzQ2IENlc2FubyBCb3Njb25lIE1JLCBJdGFseVwiXG4gICAgICAgIGxvY2F0aW9uTWlsYW4uYXBwZW5kQ2hpbGQobG9jYXRpb25NaWxhbkhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uUm9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY2F0aW9uUm9tZS5jbGFzc0xpc3QuYWRkKFwiaWNvbkFuZEluZm9cIik7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25JY29uUm9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvY2F0aW9uSWNvblJvbWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxvY2F0aW9uSWNvblBuZyk7XG4gICAgICAgIGxvY2F0aW9uSWNvblJvbWUuY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICAgIGxvY2F0aW9uUm9tZS5hcHBlbmRDaGlsZChsb2NhdGlvbkljb25Sb21lKTtcbiAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25Sb21lKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvblJvbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb25Sb21lSGVhZGluZy50ZXh0Q29udGVudCA9IFwiVmlhIGRpIFZpbGxhIExhdWNobGksIDksIDEyMzQ1IFJvbWEgUk0sIEl0YWx5XCJcbiAgICAgICAgbG9jYXRpb25Sb21lLmFwcGVuZENoaWxkKGxvY2F0aW9uUm9tZUhlYWRpbmcpO1xuICAgICAgICBhcHBlbmRDaGlsZFRvTWFpbkVsZW1lbnQobG9jYXRpb24pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgICBfY3JlYXRlTWFpbigpO1xuICAgICAgICBfY3JlYXRlQWJvdXQoKTtcbiAgICAgICAgX2NyZWF0ZUhvdXJzKCk7XG4gICAgICAgIF9jcmVhdGVMb2NhdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZH1cbn0pKCk7XG4gICAgZXhwb3J0IHtob21lUGFnZX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9