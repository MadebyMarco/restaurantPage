"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["menuPage"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuPage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZOzs7O0FBSVosQ0FBQzs7QUFFaUI7QUFDbEI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudVBhZ2UgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgX2NyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51UGFnZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKG1haW5FbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBfZ2V0TWFpbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBfY3JlYXRlQW50aXBhc3RpID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBTlRJUEFTVElcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiSXRhbGlhbiBCcmVhZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkFzcGFyYWd1c1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlJvYXN0ZWQgRWdncGxhbnQgU3ByZWFkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiQmVlZiBTcGllZGluaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkZvY2FjY2lhIEJhcmVzZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH1cblxuXG5cbiAgICAgY29uc3QgX2NyZWF0ZVByaW1pID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQUklNSVwiO1xuICAgICAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJSaWJvbGxpdGFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJQYXN0YSBlIEZhZ2lvbGlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJHbm9jY2hpIGRpIFBhdGF0ZSBhbCBSYWd1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiUGFwcGFyZGVsbGUgYWwgQ29uaWdsaW9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJSaXNvdHRvIGFpIENhcmNpb2ZpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgX2dldE1haW4oKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZVNlY29uZGkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlNFQ09ORElcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiVHJpcHBhIEFsbGEgRmlvcmVudGluYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlBlcG9zb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlRhZ2xpYXRhIFJ1Y29sYSBlIFBhcm1pZ2lhbm9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJDaW5naGlhbGUgRG9sY2UtRm9ydGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJCaXN0ZWNjYSBBbGxhIEZpb3JlbnRpbmFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcImVycm9yIHdpdGggbGlzdCBpdGVtc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBjcmVhdGVMaXN0SXRlbXMoKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bm9yZGVyZWRMaXN0KTtcblxuICAgICAgICBfZ2V0TWFpbigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB9IFxuXG5cbiAgICBjb25zdCBfY3JlYXRlRG9sY2kgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkRPTENJXCI7XG4gICAgICAgIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUxpc3RJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlRpcmFtaXN1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiUGFubmEgY290dGFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJHZWxhdG8gbWlzdG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJDYW5ub2xpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiQmlzY290dGluaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH0gXG5cbiAgICBjb25zdCBfY3JlYXRlRHJpbmtzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJEUklOS1NcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiRXNwcmVzc29cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJDYXBwdWNpbm9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJMaW1vbmF0YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIk5lZ3JvbmlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJQcm9zZWNjb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH0gXG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgICBfY3JlYXRlTWFpbigpO1xuICAgICAgICBfY3JlYXRlQW50aXBhc3RpKCk7XG4gICAgICAgIF9jcmVhdGVQcmltaSgpO1xuICAgICAgICBfY3JlYXRlU2Vjb25kaSgpO1xuICAgICAgICBfY3JlYXRlRG9sY2koKTtcbiAgICAgICAgX2NyZWF0ZURyaW5rcygpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7bG9hZH07XG5cblxuXG59KSgpO1xuXG5leHBvcnQge21lbnVQYWdlfTtcbi8vIEFwcGV0aXplcnNcbi8vIE1haW4gZGlzaGVzXG4vLyBEcmlua3MiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=