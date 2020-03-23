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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/code.ts":
/*!************************!*\
  !*** ./src/js/code.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__, {
    width: 300,
    height: 372
});
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const selections = figma.currentPage.selection;
    const selectionsLength = selections.length;
    switch (msg.type) {
        case 'check-selection':
            if (selectionsLength > 0) {
                figma.ui.postMessage("populate");
            }
            else {
                figma.notify("Select at least one Frame or Group 👆");
            }
            break;
        case 'populate':
            if (msg.response.products.list.length > 0) {
                let itemsList = msg.response.products.list;
                let images = msg.images;
                function traverse(node, i) {
                    const nodeType = node.type;
                    if (nodeType === 'GROUP' || nodeType === 'FRAME') {
                        for (const child of node.children)
                            traverse(child, i);
                    }
                    else if (nodeType === "TEXT" && node.name.indexOf("$") === 0) {
                        replaceText(node, i);
                    }
                    else if (nodeType === "RECTANGLE" && node.name.indexOf("$") === 0) {
                        replaceImage(node, i);
                    }
                }
                function replaceText(node, i) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let nodeName = node.name.replace("$", "");
                        yield figma.loadFontAsync(node.fontName);
                        node.characters = String(itemsList[i][nodeName]);
                    });
                }
                function replaceImage(node, i) {
                    let imageHash = figma.createImage(new Uint8Array(images[i])).hash;
                    let scaleMode = node.fills.scaleMode || "FIT";
                    node.fills = [
                        { type: "IMAGE", scaleMode, imageHash }
                    ];
                }
                if (selectionsLength > 0) {
                    images.length = selectionsLength;
                    itemsList.length = selectionsLength;
                    itemsList = itemsList.map((item) => {
                        return {
                            title: item.title,
                            brand: item.brand,
                            discount_percent: item.discount_percent,
                            price: item.price.price,
                            price_before: item.price.price_before,
                            url: item.url,
                            id: item.id,
                            meta_id: item.meta_id,
                            photo_url: item.photo_url,
                            date: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomDate"])(),
                            time: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomTime"])(),
                            order_id: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomOrder"])(),
                            gtin_12: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomGtin"])()
                        };
                    });
                    let i = 0;
                    for (const node of figma.currentPage.selection) {
                        for (const childNode of node.children) {
                            traverse(childNode, i);
                        }
                        i++;
                    }
                    figma.notify(`Updated ${selectionsLength} items ${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomEmoji"])()}`);
                    figma.ui.postMessage("toggleSpinner");
                }
            }
            else {
                figma.notify("Something went wrong, sorry 😒");
                figma.ui.postMessage("toggleSpinner");
            }
            break;
        case 'rename-layer':
            if (selectionsLength > 0) {
                figma.currentPage.selection.forEach(layer => {
                    layer.name = msg.value;
                    figma.notify(`Changed name to: ${msg.value} 🖍`);
                });
            }
            else {
                figma.notify("Select a layer to rename 👆");
            }
            break;
        case 'replace-text':
            figma.currentPage.selection.forEach(node => {
                if (node.type === 'TEXT') {
                    replaceText(node);
                }
            });
            function replaceText(node) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield figma.loadFontAsync(node.fontName);
                    node.characters = String(msg.value);
                });
            }
            break;
        case 'replace-img':
            figma.currentPage.selection.forEach(node => replaceImage(node));
            function replaceImage(node) {
                let data = msg.value;
                let imageHash = figma.createImage(new Uint8Array(data)).hash;
                let scaleMode = node.fills.scaleMode || "FIT";
                node.fills = [
                    { type: "IMAGE", scaleMode, imageHash }
                ];
            }
            break;
        case 'notify':
            figma.notify(msg.value);
            break;
    }
});


/***/ }),

/***/ "./src/js/utils.ts":
/*!*************************!*\
  !*** ./src/js/utils.ts ***!
  \*************************/
/*! exports provided: getRandomDate, getRandomTime, getRandomOrder, getRandomGtin, getRandomEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomTime", function() { return getRandomTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomOrder", function() { return getRandomOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomGtin", function() { return getRandomGtin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomEmoji", function() { return getRandomEmoji; });
// TODO
function getRandomDate() {
    return new Date(Math.random()).toISOString().substr(0, 10).replace(/-/g, '.');
}
// TODO
function getRandomTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}
function getRandomOrder() {
    return Math.floor(Math.random() * 9999) + 9999;
}
function getRandomGtin() {
    return Math.floor(Math.random() * 1000000000) + 99999999999;
}
function getRandomEmoji() {
    const emojis = ['🤘', '🙌', '👌', '💅', '🎉', '🚀'];
    return emojis[emojis.length * Math.random() | 0];
}


/***/ })

/******/ });