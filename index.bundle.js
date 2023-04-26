"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf */ "./src/Fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf */ "./src/Fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Oxygen/Oxygen-Light.ttf */ "./src/Fonts/Oxygen/Oxygen-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Oxygen/Oxygen-Regular.ttf */ "./src/Fonts/Oxygen/Oxygen-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Oxygen/Oxygen-Bold.ttf */ "./src/Fonts/Oxygen/Oxygen-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Libre Baskerville\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Libre Baskerville\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n    font-weight: 700;\n    font-style: bold;\n}\n\n@font-face {\n    font-family: \"Oxygen\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n    font-weight: 300;\n    font-style: light;\n\n}\n@font-face {\n    font-family: \"Oxygen\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Oxygen\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\");\n    font-weight: 700;\n    font-style: bold;\n}\n\n:root {\n    --accent-color: teal;\n}\n* {\n    box-sizing: border-box;\n    font-family: \"Oxygen\";\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    row-gap: 15px;\n    align-items: center;\n}\n\n\nmain > * {\n    margin: 0px 300px;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    text-align: center;\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    flex-flow: column;\n    gap: 15px;\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    margin: 30px 0;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10%;\n    padding-top: 100px; \n}\n\n.nav button {\n    padding: 15px 50px;\n    outline: transparent;\n    border: 2px solid transparent;\n    border-radius: 5px;\n    font-size: 16px;\n    font-weight: 600;\n    letter-spacing: 1px;\n    background-color: var(--accent-color);\n    color: white;\n}\n\n.nav button:active {\n    border: 2px solid white;\n    outline: var(--accent-color) solid 3px;\n    box-shadow: inset 1000px 0px 10px rgba(0,0,0, 0.1);\n}\n\n.heading {\n    font-size: 50px;\n    font-family: \"Libre Baskerville\";\n    font-weight: 400;\n    margin: 100px 0;\n}\n\n.iconAndInfo {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 15px;\n}\n\n.menuPage > div:last-child {\n    margin-bottom: 100px;\n}\n\n.menuPage {\n    display: grid;\n    gap: 20px;\n}\n\n.homePage {\n    display: grid;\n}\n\n.homePage > div:nth-child(4) {\n    margin: 100px 0;\n}\n.homePage > div:nth-child(5) {\n    margin-bottom: 100px;\n\n}\n\nbutton.highlight{\n    background-color: rgb(3, 189, 189);\n}\n\nimg.icon {\n    height: 24px;\n    width: 24px;\n}\n\n.heroImage {\n    width: 1000px;\n    height: 400px;\n    max-width: 100%;\n    justify-self: center;\n    object-fit: none;\n    object-position: 50% 30%;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n}\n\n\n.homePage > span {\n    color: rgba(0,0,0, 0.5);\n}\n.aboutSection {\n    margin-top: 100px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,+DAAqF;IACrF,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,+DAAkF;IAClF,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,+DAA8D;IAC9D,gBAAgB;IAChB,iBAAiB;;AAErB;AACA;IACI,qBAAqB;IACrB,+DAAgE;IAChE,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,+DAA6D;IAC7D,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;AACA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,iBAAiB;IACjB,SAAS;IACT,SAAS;IACT,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,6BAA6B;IAC7B,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,sCAAsC;IACtC,kDAAkD;AACtD;;AAEA;IACI,eAAe;IACf,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,oBAAoB;;AAExB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,oBAAoB;IACpB,gBAAgB;IAChB,wBAAwB;IACxB,mBAAmB;IACnB,4EAA4E;;AAEhF;;;AAGA;IACI,uBAAuB;AAC3B;AACA;IACI,iBAAiB;AACrB","sourcesContent":["@font-face {\n    font-family: \"Libre Baskerville\";\n    src: url('./Fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf') format(\"truetype\");\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Libre Baskerville\";\n    src: url('./Fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf') format(\"truetype\");\n    font-weight: 700;\n    font-style: bold;\n}\n\n@font-face {\n    font-family: \"Oxygen\";\n    src: url('./Fonts/Oxygen/Oxygen-Light.ttf') format(\"truetype\");\n    font-weight: 300;\n    font-style: light;\n\n}\n@font-face {\n    font-family: \"Oxygen\";\n    src: url('./Fonts/Oxygen/Oxygen-Regular.ttf') format(\"truetype\");\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Oxygen\";\n    src: url('./Fonts/Oxygen/Oxygen-Bold.ttf') format(\"truetype\");\n    font-weight: 700;\n    font-style: bold;\n}\n\n:root {\n    --accent-color: teal;\n}\n* {\n    box-sizing: border-box;\n    font-family: \"Oxygen\";\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    row-gap: 15px;\n    align-items: center;\n}\n\n\nmain > * {\n    margin: 0px 300px;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    text-align: center;\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    flex-flow: column;\n    gap: 15px;\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    margin: 30px 0;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10%;\n    padding-top: 100px; \n}\n\n.nav button {\n    padding: 15px 50px;\n    outline: transparent;\n    border: 2px solid transparent;\n    border-radius: 5px;\n    font-size: 16px;\n    font-weight: 600;\n    letter-spacing: 1px;\n    background-color: var(--accent-color);\n    color: white;\n}\n\n.nav button:active {\n    border: 2px solid white;\n    outline: var(--accent-color) solid 3px;\n    box-shadow: inset 1000px 0px 10px rgba(0,0,0, 0.1);\n}\n\n.heading {\n    font-size: 50px;\n    font-family: \"Libre Baskerville\";\n    font-weight: 400;\n    margin: 100px 0;\n}\n\n.iconAndInfo {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 15px;\n}\n\n.menuPage > div:last-child {\n    margin-bottom: 100px;\n}\n\n.menuPage {\n    display: grid;\n    gap: 20px;\n}\n\n.homePage {\n    display: grid;\n}\n\n.homePage > div:nth-child(4) {\n    margin: 100px 0;\n}\n.homePage > div:nth-child(5) {\n    margin-bottom: 100px;\n\n}\n\nbutton.highlight{\n    background-color: rgb(3, 189, 189);\n}\n\nimg.icon {\n    height: 24px;\n    width: 24px;\n}\n\n.heroImage {\n    width: 1000px;\n    height: 400px;\n    max-width: 100%;\n    justify-self: center;\n    object-fit: none;\n    object-position: 50% 30%;\n    margin-bottom: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n}\n\n\n.homePage > span {\n    color: rgba(0,0,0, 0.5);\n}\n.aboutSection {\n    margin-top: 100px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPageLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoading */ "./src/initialPageLoading.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_initialPageLoading__WEBPACK_IMPORTED_MODULE_0__["default"].load();






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

/***/ "./src/Fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf":
/*!***************************************************************!*\
  !*** ./src/Fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecfbab5016554edd8cd6.ttf";

/***/ }),

/***/ "./src/Fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf":
/*!******************************************************************!*\
  !*** ./src/Fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d715efaee03330cadfda.ttf";

/***/ }),

/***/ "./src/Fonts/Oxygen/Oxygen-Bold.ttf":
/*!******************************************!*\
  !*** ./src/Fonts/Oxygen/Oxygen-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45158a488a52d7fd6111.ttf";

/***/ }),

/***/ "./src/Fonts/Oxygen/Oxygen-Light.ttf":
/*!*******************************************!*\
  !*** ./src/Fonts/Oxygen/Oxygen-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "892ce9aeaf0bbab8f969.ttf";

/***/ }),

/***/ "./src/Fonts/Oxygen/Oxygen-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/Fonts/Oxygen/Oxygen-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8b0b04674ba63c2eac.ttf";

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx5TEFBeUU7QUFDckgsNENBQTRDLG1MQUFzRTtBQUNsSCw0Q0FBNEMsMklBQWtEO0FBQzlGLDRDQUE0QywrSUFBb0Q7QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCx5Q0FBeUMsZ0ZBQWdGLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IseUNBQXlDLGdGQUFnRix1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLDhCQUE4QixnRkFBZ0YsdUJBQXVCLHdCQUF3QixLQUFLLGNBQWMsOEJBQThCLGdGQUFnRix1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLDhCQUE4QixnRkFBZ0YsdUJBQXVCLHVCQUF1QixHQUFHLFdBQVcsMkJBQTJCLEdBQUcsS0FBSyw2QkFBNkIsOEJBQThCLEdBQUcsZ0JBQWdCLG1CQUFtQixnQkFBZ0IsR0FBRyxVQUFVLG9CQUFvQix3QkFBd0Isb0JBQW9CLDBCQUEwQixHQUFHLGdCQUFnQix3QkFBd0Isb0JBQW9CLHdCQUF3QiwwQkFBMEIseUJBQXlCLEdBQUcsUUFBUSw0QkFBNEIsb0JBQW9CLHdCQUF3QixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsVUFBVSxvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsMEJBQTBCLEdBQUcsaUJBQWlCLHlCQUF5QiwyQkFBMkIsb0NBQW9DLHlCQUF5QixzQkFBc0IsdUJBQXVCLDBCQUEwQiw0Q0FBNEMsbUJBQW1CLEdBQUcsd0JBQXdCLDhCQUE4Qiw2Q0FBNkMseURBQXlELEdBQUcsY0FBYyxzQkFBc0IseUNBQXlDLHVCQUF1QixzQkFBc0IsR0FBRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixrQ0FBa0MsZ0JBQWdCLEdBQUcsZ0NBQWdDLDJCQUEyQixHQUFHLGVBQWUsb0JBQW9CLGdCQUFnQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsa0NBQWtDLHNCQUFzQixHQUFHLGdDQUFnQywyQkFBMkIsS0FBSyxxQkFBcUIseUNBQXlDLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixvQkFBb0Isc0JBQXNCLDJCQUEyQix1QkFBdUIsK0JBQStCLDBCQUEwQixtRkFBbUYsS0FBSyx3QkFBd0IsOEJBQThCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxzQ0FBc0MseUNBQXlDLDhGQUE4Rix1QkFBdUIseUJBQXlCLEdBQUcsZ0JBQWdCLHlDQUF5QywyRkFBMkYsdUJBQXVCLHVCQUF1QixHQUFHLGdCQUFnQiw4QkFBOEIsdUVBQXVFLHVCQUF1Qix3QkFBd0IsS0FBSyxjQUFjLDhCQUE4Qix5RUFBeUUsdUJBQXVCLHlCQUF5QixHQUFHLGdCQUFnQiw4QkFBOEIsc0VBQXNFLHVCQUF1Qix1QkFBdUIsR0FBRyxXQUFXLDJCQUEyQixHQUFHLEtBQUssNkJBQTZCLDhCQUE4QixHQUFHLGdCQUFnQixtQkFBbUIsZ0JBQWdCLEdBQUcsVUFBVSxvQkFBb0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIsR0FBRyxnQkFBZ0Isd0JBQXdCLG9CQUFvQix3QkFBd0IsMEJBQTBCLHlCQUF5QixHQUFHLFFBQVEsNEJBQTRCLG9CQUFvQix3QkFBd0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFVBQVUsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDBCQUEwQixHQUFHLGlCQUFpQix5QkFBeUIsMkJBQTJCLG9DQUFvQyx5QkFBeUIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsNENBQTRDLG1CQUFtQixHQUFHLHdCQUF3Qiw4QkFBOEIsNkNBQTZDLHlEQUF5RCxHQUFHLGNBQWMsc0JBQXNCLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLGdCQUFnQixHQUFHLGdDQUFnQywyQkFBMkIsR0FBRyxlQUFlLG9CQUFvQixnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGtDQUFrQyxzQkFBc0IsR0FBRyxnQ0FBZ0MsMkJBQTJCLEtBQUsscUJBQXFCLHlDQUF5QyxHQUFHLGNBQWMsbUJBQW1CLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIsdUJBQXVCLCtCQUErQiwwQkFBMEIsbUZBQW1GLEtBQUssd0JBQXdCLDhCQUE4QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxtQkFBbUI7QUFDaDVPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpRDtBQUNBOzs7QUFHakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlEQUFZO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlEQUFZO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEc0Q7QUFDVTs7QUFFakU7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3RUFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxvREFBZTtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsb0RBQWU7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDckkrQztBQUMxQjs7QUFFckIsZ0VBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9DO0FBQ0c7QUFDSzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFhO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBYTtBQUN6QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBZ0I7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBYTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUgzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZOzs7O0FBSVosQ0FBQzs7QUFFaUI7QUFDbEI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luaXRpYWxQYWdlTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9PeHlnZW4vT3h5Z2VuLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vRm9udHMvT3h5Z2VuL094eWdlbi1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vRm9udHMvT3h5Z2VuL094eWdlbi1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZSBCYXNrZXJ2aWxsZVxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGlicmUgQmFza2VydmlsbGVcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBsaWdodDtcXG5cXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3h5Z2VuXFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB0ZWFsO1xcbn1cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxubWFpbiA+ICoge1xcbiAgICBtYXJnaW46IDBweCAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDMwcHggMDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXFxufVxcblxcbi5uYXYgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTVweCA1MHB4O1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lOiB2YXIoLS1hY2NlbnQtY29sb3IpIHNvbGlkIDNweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTAwMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsIDAuMSk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkxpYnJlIEJhc2tlcnZpbGxlXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG5cXG4uaWNvbkFuZEluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm1lbnVQYWdlID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLm1lbnVQYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaG9tZVBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaG9tZVBhZ2UgPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG4uaG9tZVBhZ2UgPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuXFxufVxcblxcbmJ1dHRvbi5oaWdobGlnaHR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxODksIDE4OSk7XFxufVxcblxcbmltZy5pY29uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmhlcm9JbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG9iamVjdC1maXQ6IG5vbmU7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDMwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG5cXG59XFxuXFxuXFxuLmhvbWVQYWdlID4gc3BhbiB7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLCAwLjUpO1xcbn1cXG4uYWJvdXRTZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsK0RBQXFGO0lBQ3JGLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsK0RBQWtGO0lBQ2xGLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsK0RBQThEO0lBQzlELGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsK0RBQWdFO0lBQ2hFLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsK0RBQTZEO0lBQzdELGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiw0RUFBNEU7O0FBRWhGOzs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkxpYnJlIEJhc2tlcnZpbGxlXFxcIjtcXG4gICAgc3JjOiB1cmwoJy4vRm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZSBCYXNrZXJ2aWxsZVxcXCI7XFxuICAgIHNyYzogdXJsKCcuL0ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtQm9sZC50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk94eWdlblxcXCI7XFxuICAgIHNyYzogdXJsKCcuL0ZvbnRzL094eWdlbi9PeHlnZW4tTGlnaHQudHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBsaWdodDtcXG5cXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3h5Z2VuXFxcIjtcXG4gICAgc3JjOiB1cmwoJy4vRm9udHMvT3h5Z2VuL094eWdlbi1SZWd1bGFyLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiO1xcbiAgICBzcmM6IHVybCgnLi9Gb250cy9PeHlnZW4vT3h5Z2VuLUJvbGQudHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB0ZWFsO1xcbn1cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPeHlnZW5cXFwiO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxubWFpbiA+ICoge1xcbiAgICBtYXJnaW46IDBweCAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDMwcHggMDtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXFxufVxcblxcbi5uYXYgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTVweCA1MHB4O1xcbiAgICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdXRsaW5lOiB2YXIoLS1hY2NlbnQtY29sb3IpIHNvbGlkIDNweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTAwMHB4IDBweCAxMHB4IHJnYmEoMCwwLDAsIDAuMSk7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkxpYnJlIEJhc2tlcnZpbGxlXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG5cXG4uaWNvbkFuZEluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm1lbnVQYWdlID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLm1lbnVQYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaG9tZVBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaG9tZVBhZ2UgPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG4uaG9tZVBhZ2UgPiBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuXFxufVxcblxcbmJ1dHRvbi5oaWdobGlnaHR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCAxODksIDE4OSk7XFxufVxcblxcbmltZy5pY29uIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmhlcm9JbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG9iamVjdC1maXQ6IG5vbmU7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDMwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG5cXG59XFxuXFxuXFxuLmhvbWVQYWdlID4gc3BhbiB7XFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLCAwLjUpO1xcbn1cXG4uYWJvdXRTZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBob25lSWNvblBuZyBmcm9tIFwiLi9JY29ucy9waG9uZUljb24ucG5nXCI7XG5pbXBvcnQgZW1haWxJY29uUG5nIGZyb20gXCIuL0ljb25zL2VtYWlsSWNvbi5wbmdcIjtcblxuXG5jb25zb2xlLmxvZyhcInRlc3RcIik7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RQYWdlXCIpO1xuICAgICAgICByZXR1cm4gbWFpbkVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBudW1iZXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbnVtYmVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiaWNvbkFuZEluZm9cIik7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHBob25lSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcGhvbmVJY29uUG5nKTtcbiAgICAgICAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgICBudW1iZXIudGV4dENvbnRlbnQgPSBcIiszOTMzOTk1NzQ5NVwiO1xuXG4gICAgICAgIG51bWJlckNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICAgICAgbnVtYmVyQ29udGFjdC5hcHBlbmRDaGlsZChudW1iZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyQ29udGFjdCk7XG5cbiAgICAgICAgY29uc3QgZW1haWxDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZW1haWxDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJpY29uQW5kSW5mb1wiKTtcblxuICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgZW1haWwudGV4dENvbnRlbnQgPSBcImZha2VJdGFsaWFuRW1haWxAZ2l0YWx5LmNvbVwiXG4gICAgICAgIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgZW1haWxJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbWFpbEljb25QbmcpO1xuICAgICAgICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG5cbiAgICAgICAgZW1haWxDb250YWN0LmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XG4gICAgICAgIGVtYWlsQ29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbENvbnRhY3QpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlTWFpbigpKTtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWN0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZH07XG59KSgpO1xuXG5leHBvcnQge2NvbnRhY3RQYWdlfSIsImltcG9ydCBsb2NhdGlvbkljb25QbmcgZnJvbSBcIi4vSWNvbnMvbG9jYXRpb25JY29uLnBuZ1wiO1xuaW1wb3J0IGl0YWx5IGZyb20gXCIuL0ltYWdlcy9yZXViZW4tdGVvLVh2eEZxRDN1VUVrLXVuc3BsYXNoLmpwZ1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKT0+IHtcblxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU1haW4oKSB7XG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJob21lUGFnZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaGVyb0ltYWdlXCIpO1xuICAgICAgICBoZXJvSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0YWx5KTtcbiAgICAgICAgaGVyb0ltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIml0YWxpYW4gZmllbGRzIHdpdGggbGFyZ2UgZXN0YXRlXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVyb0ltYWdlQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGhlcm9JbWFnZUNyZWRpdC50ZXh0Q29udGVudCA9IFwiUHVibGlzaGVkIG9uIFVuc3BsYXNoIGJ5IFJ1YmVuIFRlb1wiO1xuICAgICAgICBcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlQ3JlZGl0KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQpO1xuICAgICAgICBcbiAgICB9ICAgXG4gICAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRUb01haW5FbGVtZW50KGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUFib3V0KCkge1xuICAgICAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFNlY3Rpb25cIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gICAgICAgIGFib3V0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb25zdCBhYm91dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWJvdXREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiT3BlbmVkIGJ5IGFuIG9sZCBpdGFsaWFuIG1hbiB3aG8gdHJhdmVyc2VkIHRoZSB3b3JsZCBvbiBvbmUgbGVnIGFuZCB3aXRoIG1pbmltYWwgc3BlYWtpbmcgYWJpbGl0eS4gSW5zdGVhZCBvZiBjb21tdW5pY2F0aW5nIGhpcyBmZWVsaW5ncyB0aHJvdWdoIHdvcmRzLCBoZSBjb29rZWQuIEhlIGxlYXJuZWQuIEhlIGxvdmVkLiBOb3csIGhlIHNlcnZlcy4gV2VsY29tZSB0byBoaXMgcHJpemVkIHBvc3Nlc2lvbi5cIjtcbiAgICAgICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRUb01haW5FbGVtZW50KGFib3V0KTtcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUhvdXJzKCkge1xuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhPVVJTXCI7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAgICAgY29uc3QgaG91cnNVbm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVIb3Vyc0xpc3RJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIk1vbmRheTogNWFtIC0gMTJwbSBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiA1YW0gLSAxMnBtXCIgO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogNWFtIC0gMTJwbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiA1YW0gLSAxMnBtIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkZyaWRheTogNWFtIC0gMTJwbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlNhdHVyZGF5OiA1YW0gLSAxMnBtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiA1YW0gLSAxMnBtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaG91cnNVbm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBjcmVhdGVIb3Vyc0xpc3RJdGVtcygpO1xuXG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgYXBwZW5kQ2hpbGRUb01haW5FbGVtZW50KGhvdXJzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlTG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTE9DQVRJT05TXCI7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25NaWxhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvY2F0aW9uTWlsYW4uY2xhc3NMaXN0LmFkZChcImljb25BbmRJbmZvXCIpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvY2F0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9jYXRpb25JY29uUG5nKTtcbiAgICAgICAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgICBsb2NhdGlvbk1pbGFuLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uTWlsYW4pO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uTWlsYW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb25NaWxhbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlZpYSBSb21hIDIwMiwgMzQzNDYgQ2VzYW5vIEJvc2NvbmUgTUksIEl0YWx5XCJcbiAgICAgICAgbG9jYXRpb25NaWxhbi5hcHBlbmRDaGlsZChsb2NhdGlvbk1pbGFuSGVhZGluZyk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25Sb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb25Sb21lLmNsYXNzTGlzdC5hZGQoXCJpY29uQW5kSW5mb1wiKTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbkljb25Sb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbG9jYXRpb25JY29uUm9tZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9jYXRpb25JY29uUG5nKTtcbiAgICAgICAgbG9jYXRpb25JY29uUm9tZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgICAgbG9jYXRpb25Sb21lLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvblJvbWUpO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblJvbWUpO1xuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uUm9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NhdGlvblJvbWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJWaWEgZGkgVmlsbGEgTGF1Y2hsaSwgOSwgMTIzNDUgUm9tYSBSTSwgSXRhbHlcIlxuICAgICAgICBsb2NhdGlvblJvbWUuYXBwZW5kQ2hpbGQobG9jYXRpb25Sb21lSGVhZGluZyk7XG4gICAgICAgIGFwcGVuZENoaWxkVG9NYWluRWxlbWVudChsb2NhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIF9jcmVhdGVNYWluKCk7XG4gICAgICAgIF9jcmVhdGVBYm91dCgpO1xuICAgICAgICBfY3JlYXRlSG91cnMoKTtcbiAgICAgICAgX2NyZWF0ZUxvY2F0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkfVxufSkoKTtcbiAgICBleHBvcnQge2hvbWVQYWdlfTsiLCJpbXBvcnQgaW5pdGlhbFBhZ2UgZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkaW5nXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbml0aWFsUGFnZS5sb2FkKCk7XG5cblxuXG5cbiIsIlxuLy8gSHRtbCBza2VsZXRvblxuLy8gICA8Ym9keSBzdHlsZT1cImhlaWdodDogMTAwJVwiPlxuLy8gICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+VGl0bGU8L2Rpdj5cbi8vICAgICA8ZGl2Pk5hdiBiYXJcbi8vICAgICAgICAgPGJ1dHRvbiA+SG9tZTwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uPkxvY2F0aW9uczwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uPk1lbnU8L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8bWFpbj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm9JbWFnZVwiPkltZyBnb2VzIGhlcmU8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0XCI+QWJvdXQ8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzXCI+SG91cnM8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImxvY2F0aW9uXCI+TG9jYXRpb248L2Rpdj5cbi8vICAgICA8L21haW4+XG4vLyAgIDwvYm9keT5cblxuaW1wb3J0IHtob21lUGFnZX0gZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gICBmcm9tIFwiLi9tZW51UGFnZVwiXG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XG5cbmNvbnN0IGluaXRpYWxQYWdlID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDb250ZW50RGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfSAgICBcbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBfY3JlYXRlTmF2QmFyKCkge1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hdkJ1dHRvbkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuYXZCdXR0b25Ib21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgIG5hdkJ1dHRvbkhvbWUuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5hdkJ1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuYXZCdXR0b25NZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZCdXR0b25Mb2NhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuYXZCdXR0b25Mb2NhdGlvbnMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICAgICAgXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZCdXR0b25Ib21lKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkJ1dHRvbk1lbnUpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uTG9jYXRpb25zKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICB9ICAgIFxuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdiBidXR0b25cIik7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBfaGlnaGxpZ2h0QnV0dG9uKGUpIHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobmF2QnV0dG9ucygpKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlbW92ZUhpZ2hsaWdodHNGcm9tQnV0dG9ucygpIHtcbiAgICAgICAgbmF2QnV0dG9ucygpLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUhlYWRpbmcoaGVhZGluZ0NvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtoZWFkaW5nQ29udGVudH1gO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgY29udGVudEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250ZW50ID4gKlwiKTtcbiAgICAgICAgY29udGVudEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICBcbiAgICBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnNUb05hdkJ1dHRvbnMoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYgPiBidXR0b25cIik7XG4gICAgICAgIFxuICAgICAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaXJzdCBidXR0b24gd29ya1wiKTtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlLmNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgaG9tZVBhZ2UubG9hZCgpO1xuICAgICAgICAgICAgX3JlbW92ZUhpZ2hsaWdodHNGcm9tQnV0dG9ucygpO1xuICAgICAgICAgICAgX2hpZ2hsaWdodEJ1dHRvbihlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYgPiBidXR0b246bnRoLWNoaWxkKDIpXCIpO1xuICAgICAgICBcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2Vjb25kIGJ1dHRvbiB3b3JrXCIpO1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2UuY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBtZW51UGFnZS5sb2FkKCk7XG4gICAgICAgICAgICBfcmVtb3ZlSGlnaGxpZ2h0c0Zyb21CdXR0b25zKCk7XG4gICAgICAgICAgICBfaGlnaGxpZ2h0QnV0dG9uKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdiA+IGJ1dHRvbjpsYXN0LWNoaWxkXCIpO1xuXG4gICAgICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxhc3QgYnV0dG9uIHdvcmtzIHRvb1wiKTtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlLmNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgY29udGFjdFBhZ2UubG9hZCgpO1xuICAgICAgICAgICAgX3JlbW92ZUhpZ2hsaWdodHNGcm9tQnV0dG9ucygpO1xuICAgICAgICAgICAgX2hpZ2hsaWdodEJ1dHRvbihlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgX2NyZWF0ZU5hdkJhcigpO1xuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcnNUb05hdkJ1dHRvbnMoKTtcbiAgICAgICAgX2NyZWF0ZUhlYWRpbmcoXCJNYXJjbydzIEl0YWxpYW4gTWVkYWxsaW9uXCIpO1xuICAgICAgICBfY3JlYXRlQ29udGVudERpdigpO1xuICAgICAgICBob21lUGFnZS5sb2FkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZCxcbiAgICAgICAgY2xlYXJDb250ZW50XG4gICAgfVxufSkoKTtcbiAgICBcbiAgICBcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlO1xuXG4iLCJjb25zdCBtZW51UGFnZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBfY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnVQYWdlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IF9nZXRNYWluID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IF9jcmVhdGVBbnRpcGFzdGkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFOVElQQVNUSVwiO1xuICAgICAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJJdGFsaWFuIEJyZWFkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiQXNwYXJhZ3VzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiUm9hc3RlZCBFZ2dwbGFudCBTcHJlYWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJCZWVmIFNwaWVkaW5pXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiRm9jYWNjaWEgQmFyZXNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgX2dldE1haW4oKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfVxuXG5cblxuICAgICBjb25zdCBfY3JlYXRlUHJpbWkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlBSSU1JXCI7XG4gICAgICAgIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUxpc3RJdGVtcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlJpYm9sbGl0YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlBhc3RhIGUgRmFnaW9saVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkdub2NjaGkgZGkgUGF0YXRlIGFsIFJhZ3VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJQYXBwYXJkZWxsZSBhbCBDb25pZ2xpb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlJpc290dG8gYWkgQ2FyY2lvZmlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcImVycm9yIHdpdGggbGlzdCBpdGVtc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBjcmVhdGVMaXN0SXRlbXMoKTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bm9yZGVyZWRMaXN0KTtcblxuICAgICAgICBfZ2V0TWFpbigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlU2Vjb25kaSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiU0VDT05ESVwiO1xuICAgICAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJUcmlwcGEgQWxsYSBGaW9yZW50aW5hXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiUGVwb3NvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiVGFnbGlhdGEgUnVjb2xhIGUgUGFybWlnaWFub1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkNpbmdoaWFsZSBEb2xjZS1Gb3J0ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkJpc3RlY2NhIEFsbGEgRmlvcmVudGluYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwiZXJyb3Igd2l0aCBsaXN0IGl0ZW1zXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNyZWF0ZUxpc3RJdGVtcygpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgICAgIF9nZXRNYWluKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIH0gXG5cblxuICAgIGNvbnN0IF9jcmVhdGVEb2xjaSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiRE9MQ0lcIjtcbiAgICAgICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29uc3QgY3JlYXRlTGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiVGlyYW1pc3VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJQYW5uYSBjb3R0YVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkdlbGF0byBtaXN0b1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkNhbm5vbGlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJCaXNjb3R0aW5pXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgX2dldE1haW4oKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfSBcblxuICAgIGNvbnN0IF9jcmVhdGVEcmlua3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkRSSU5LU1wiO1xuICAgICAgICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb25zdCBjcmVhdGVMaXN0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJFc3ByZXNzb1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkNhcHB1Y2lub1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIkxpbW9uYXRhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IFwiTmVncm9uaVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlByb3NlY2NvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJlcnJvciB3aXRoIGxpc3QgaXRlbXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW1zKCk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgICAgICAgX2dldE1haW4oKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgfSBcblxuICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgICAgIF9jcmVhdGVNYWluKCk7XG4gICAgICAgIF9jcmVhdGVBbnRpcGFzdGkoKTtcbiAgICAgICAgX2NyZWF0ZVByaW1pKCk7XG4gICAgICAgIF9jcmVhdGVTZWNvbmRpKCk7XG4gICAgICAgIF9jcmVhdGVEb2xjaSgpO1xuICAgICAgICBfY3JlYXRlRHJpbmtzKCk7XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHtsb2FkfTtcblxuXG5cbn0pKCk7XG5cbmV4cG9ydCB7bWVudVBhZ2V9O1xuLy8gQXBwZXRpemVyc1xuLy8gTWFpbiBkaXNoZXNcbi8vIERyaW5rcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==