"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["contactPage"],{

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

/***/ "./src/Icons/emailIcon.png":
/*!*********************************!*\
  !*** ./src/Icons/emailIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d5171c0bc82d7c678c5.png";

/***/ }),

/***/ "./src/Icons/phoneIcon.png":
/*!*********************************!*\
  !*** ./src/Icons/phoneIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cbc90a93f52ad1997aa.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contactPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdFBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNBOzs7QUFHakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlEQUFZO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlEQUFZO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGhvbmVJY29uUG5nIGZyb20gXCIuL0ljb25zL3Bob25lSWNvbi5wbmdcIjtcbmltcG9ydCBlbWFpbEljb25QbmcgZnJvbSBcIi4vSWNvbnMvZW1haWxJY29uLnBuZ1wiO1xuXG5cbmNvbnNvbGUubG9nKFwidGVzdFwiKTtcblxuY29uc3QgY29udGFjdFBhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVNYWluID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgICAgICBtYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFBhZ2VcIik7XG4gICAgICAgIHJldHVybiBtYWluRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IG51bWJlckNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBudW1iZXJDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJpY29uQW5kSW5mb1wiKTtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgcGhvbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcGhvbmVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwaG9uZUljb25QbmcpO1xuICAgICAgICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiKzM5MzM5OTU3NDk1XCI7XG5cbiAgICAgICAgbnVtYmVyQ29udGFjdC5hcHBlbmRDaGlsZChwaG9uZUljb24pO1xuICAgICAgICBudW1iZXJDb250YWN0LmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXJDb250YWN0KTtcblxuICAgICAgICBjb25zdCBlbWFpbENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBlbWFpbENvbnRhY3QuY2xhc3NMaXN0LmFkZChcImljb25BbmRJbmZvXCIpO1xuXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiZmFrZUl0YWxpYW5FbWFpbEBnaXRhbHkuY29tXCJcbiAgICAgICAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBlbWFpbEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGVtYWlsSWNvblBuZyk7XG4gICAgICAgIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICAgICAgICBlbWFpbENvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcbiAgICAgICAgZW1haWxDb250YWN0LmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQ29udGFjdCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICAgIH1cblxuICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVNYWluKCkpO1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbnRhY3QoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkfTtcbn0pKCk7XG5cbmV4cG9ydCB7Y29udGFjdFBhZ2V9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9