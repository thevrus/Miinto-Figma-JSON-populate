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
                figma.ui.postMessage('populate');
            }
            else {
                figma.notify('Select at least one Frame or Group 👆');
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
                    else if (nodeType === 'TEXT' && node.name.indexOf('$') === 0) {
                        replaceText(node, i);
                    }
                    else if (nodeType === 'RECTANGLE' && node.name.indexOf('$') === 0) {
                        replaceImage(node, i);
                    }
                }
                function replaceText(node, i) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let nodeName = node.name.replace('$', '');
                        yield figma.loadFontAsync(node.fontName);
                        node.characters = String(itemsList[i][nodeName]);
                    });
                }
                function replaceImage(node, i) {
                    let imageHash = figma.createImage(new Uint8Array(images[i])).hash;
                    let scaleMode = node.fills.scaleMode || 'FIT';
                    node.fills = [{ type: 'IMAGE', scaleMode, imageHash }];
                }
                if (selectionsLength > 0) {
                    images.length = selectionsLength;
                    itemsList.length = selectionsLength;
                    itemsList = itemsList.map(item => {
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
                    figma.ui.postMessage('toggleSpinner');
                }
            }
            else {
                figma.notify('Something went wrong, sorry 😒');
                figma.ui.postMessage('toggleSpinner');
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
                figma.notify('Select a layer to rename 👆');
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
                let scaleMode = node.fills.scaleMode || 'FIT';
                node.fills = [{ type: 'IMAGE', scaleMode, imageHash }];
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
    return new Date(Math.random())
        .toISOString()
        .substr(0, 10)
        .replace(/-/g, '.');
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
    return emojis[(emojis.length * Math.random()) | 0];
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3NHO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQ0FBc0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDREQUFhO0FBQy9DLGtDQUFrQyw0REFBYTtBQUMvQyxzQ0FBc0MsNkRBQWM7QUFDcEQscUNBQXFDLDREQUFhO0FBQ2xEO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGlCQUFpQixTQUFTLDZEQUFjLEdBQUc7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFVBQVU7QUFDL0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0NBQXNDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNoSUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxjQUFjLGdCQUFnQixHQUFHLGtCQUFrQjtBQUNuRDtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9jb2RlLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRSYW5kb21EYXRlLCBnZXRSYW5kb21UaW1lLCBnZXRSYW5kb21PcmRlciwgZ2V0UmFuZG9tR3RpbiwgZ2V0UmFuZG9tRW1vamkgfSBmcm9tICcuL3V0aWxzJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgaGVpZ2h0OiAzNzJcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBjb25zdCBzZWxlY3Rpb25zTGVuZ3RoID0gc2VsZWN0aW9ucy5sZW5ndGg7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlICdjaGVjay1zZWxlY3Rpb24nOlxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoJ3BvcHVsYXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoJ1NlbGVjdCBhdCBsZWFzdCBvbmUgRnJhbWUgb3IgR3JvdXAg8J+RhicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BvcHVsYXRlJzpcbiAgICAgICAgICAgIGlmIChtc2cucmVzcG9uc2UucHJvZHVjdHMubGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zTGlzdCA9IG1zZy5yZXNwb25zZS5wcm9kdWN0cy5saXN0O1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZXMgPSBtc2cuaW1hZ2VzO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gJ0dST1VQJyB8fCBub2RlVHlwZSA9PT0gJ0ZSQU1FJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlVHlwZSA9PT0gJ1RFWFQnICYmIG5vZGUubmFtZS5pbmRleE9mKCckJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VUZXh0KG5vZGUsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVUeXBlID09PSAnUkVDVEFOR0xFJyAmJiBub2RlLm5hbWUuaW5kZXhPZignJCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlSW1hZ2Uobm9kZSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZVRleHQobm9kZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVOYW1lID0gbm9kZS5uYW1lLnJlcGxhY2UoJyQnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gU3RyaW5nKGl0ZW1zTGlzdFtpXVtub2RlTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUltYWdlKG5vZGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlSGFzaCA9IGZpZ21hLmNyZWF0ZUltYWdlKG5ldyBVaW50OEFycmF5KGltYWdlc1tpXSkpLmhhc2g7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZU1vZGUgPSBub2RlLmZpbGxzLnNjYWxlTW9kZSB8fCAnRklUJztcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IFt7IHR5cGU6ICdJTUFHRScsIHNjYWxlTW9kZSwgaW1hZ2VIYXNoIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLmxlbmd0aCA9IHNlbGVjdGlvbnNMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zTGlzdC5sZW5ndGggPSBzZWxlY3Rpb25zTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpdGVtc0xpc3QgPSBpdGVtc0xpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZDogaXRlbS5icmFuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudF9wZXJjZW50OiBpdGVtLmRpc2NvdW50X3BlcmNlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VfYmVmb3JlOiBpdGVtLnByaWNlLnByaWNlX2JlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFfaWQ6IGl0ZW0ubWV0YV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b191cmw6IGl0ZW0ucGhvdG9fdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGdldFJhbmRvbURhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBnZXRSYW5kb21UaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQ6IGdldFJhbmRvbU9yZGVyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Rpbl8xMjogZ2V0UmFuZG9tR3RpbigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkTm9kZSBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGROb2RlLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoYFVwZGF0ZWQgJHtzZWxlY3Rpb25zTGVuZ3RofSBpdGVtcyAke2dldFJhbmRvbUVtb2ppKCl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKCd0b2dnbGVTcGlubmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KCdTb21ldGhpbmcgd2VudCB3cm9uZywgc29ycnkg8J+YkicpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKCd0b2dnbGVTcGlubmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVuYW1lLWxheWVyJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIubmFtZSA9IG1zZy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBDaGFuZ2VkIG5hbWUgdG86ICR7bXNnLnZhbHVlfSDwn5aNYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoJ1NlbGVjdCBhIGxheWVyIHRvIHJlbmFtZSDwn5GGJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVwbGFjZS10ZXh0JzpcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlVGV4dChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VUZXh0KG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBTdHJpbmcobXNnLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXBsYWNlLWltZyc6XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaChub2RlID0+IHJlcGxhY2VJbWFnZShub2RlKSk7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXBsYWNlSW1hZ2Uobm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbXNnLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZUhhc2ggPSBmaWdtYS5jcmVhdGVJbWFnZShuZXcgVWludDhBcnJheShkYXRhKSkuaGFzaDtcbiAgICAgICAgICAgICAgICBsZXQgc2NhbGVNb2RlID0gbm9kZS5maWxscy5zY2FsZU1vZGUgfHwgJ0ZJVCc7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IFt7IHR5cGU6ICdJTUFHRScsIHNjYWxlTW9kZSwgaW1hZ2VIYXNoIH1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25vdGlmeSc6XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkobXNnLnZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuIiwiLy8gVE9ET1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbURhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE1hdGgucmFuZG9tKCkpXG4gICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgIC5zdWJzdHIoMCwgMTApXG4gICAgICAgIC5yZXBsYWNlKC8tL2csICcuJyk7XG59XG4vLyBUT0RPXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tVGltZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfWA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tT3JkZXIoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpICsgOTk5OTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21HdGluKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKSArIDk5OTk5OTk5OTk5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUVtb2ppKCkge1xuICAgIGNvbnN0IGVtb2ppcyA9IFsn8J+kmCcsICfwn5mMJywgJ/CfkYwnLCAn8J+ShScsICfwn46JJywgJ/CfmoAnXTtcbiAgICByZXR1cm4gZW1vamlzWyhlbW9qaXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSkgfCAwXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=