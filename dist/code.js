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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
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
    height: 300
});
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const selectionsLength = figma.currentPage.selection.length;
    if (msg.type === "populate" && msg.response.products.list.length > 0) {
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
            let data = images[i];
            let imageHash = figma.createImage(new Uint8Array(data)).hash;
            let scaleMode = node.fills.scaleMode || "FIT";
            node.fills = [
                { type: "IMAGE", scaleMode: scaleMode, imageHash }
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
                    time: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomTime"])()
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
        else {
            figma.notify("Select at least one Frame or Group 👆");
            figma.ui.postMessage("toggleSpinner");
        }
    }
    else if (msg.type === "renameLayer") {
        if (selectionsLength > 0) {
            figma.currentPage.selection.forEach(layer => {
                layer.name = msg.value;
                figma.notify(`Changed name to: ${msg.value} 🖍`);
            });
        }
        else {
            figma.notify("Select a layer to rename 👆");
        }
    }
    else {
        figma.notify("Something went wrong, sorry 😒");
        figma.ui.postMessage("toggleSpinner");
    }
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: getRandomDate, getRandomTime, getRandomEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomTime", function() { return getRandomTime; });
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
function getRandomEmoji() {
    const emojis = ['🤘', '🙌', '👌', '💅', '🎉', '🚀'];
    return emojis[emojis.length * Math.random() | 0];
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3VFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0REFBYTtBQUN2QywwQkFBMEIsNERBQWE7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCLFNBQVMsNkRBQWMsR0FBRztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVU7QUFDM0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGNBQWMsZ0JBQWdCLEdBQUcsa0JBQWtCO0FBQ25EO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldFJhbmRvbURhdGUsIGdldFJhbmRvbVRpbWUsIGdldFJhbmRvbUVtb2ppIH0gZnJvbSAnLi91dGlscyc7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogMzAwXG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbnNMZW5ndGggPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoO1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJwb3B1bGF0ZVwiICYmIG1zZy5yZXNwb25zZS5wcm9kdWN0cy5saXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGl0ZW1zTGlzdCA9IG1zZy5yZXNwb25zZS5wcm9kdWN0cy5saXN0O1xuICAgICAgICBsZXQgaW1hZ2VzID0gbXNnLmltYWdlcztcbiAgICAgICAgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgaSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09ICdHUk9VUCcgfHwgbm9kZVR5cGUgPT09ICdGUkFNRScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVUeXBlID09PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUuaW5kZXhPZihcIiRcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVGV4dChub2RlLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVUeXBlID09PSBcIlJFQ1RBTkdMRVwiICYmIG5vZGUubmFtZS5pbmRleE9mKFwiJFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VJbWFnZShub2RlLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZXBsYWNlVGV4dChub2RlLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlTmFtZSA9IG5vZGUubmFtZS5yZXBsYWNlKFwiJFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IFN0cmluZyhpdGVtc0xpc3RbaV1bbm9kZU5hbWVdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VJbWFnZShub2RlLCBpKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGltYWdlc1tpXTtcbiAgICAgICAgICAgIGxldCBpbWFnZUhhc2ggPSBmaWdtYS5jcmVhdGVJbWFnZShuZXcgVWludDhBcnJheShkYXRhKSkuaGFzaDtcbiAgICAgICAgICAgIGxldCBzY2FsZU1vZGUgPSBub2RlLmZpbGxzLnNjYWxlTW9kZSB8fCBcIkZJVFwiO1xuICAgICAgICAgICAgbm9kZS5maWxscyA9IFtcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiSU1BR0VcIiwgc2NhbGVNb2RlOiBzY2FsZU1vZGUsIGltYWdlSGFzaCB9XG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb25zTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW1hZ2VzLmxlbmd0aCA9IHNlbGVjdGlvbnNMZW5ndGg7XG4gICAgICAgICAgICBpdGVtc0xpc3QubGVuZ3RoID0gc2VsZWN0aW9uc0xlbmd0aDtcbiAgICAgICAgICAgIGl0ZW1zTGlzdCA9IGl0ZW1zTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgYnJhbmQ6IGl0ZW0uYnJhbmQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50X3BlcmNlbnQ6IGl0ZW0uZGlzY291bnRfcGVyY2VudCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlX2JlZm9yZTogaXRlbS5wcmljZS5wcmljZV9iZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBtZXRhX2lkOiBpdGVtLm1ldGFfaWQsXG4gICAgICAgICAgICAgICAgICAgIHBob3RvX3VybDogaXRlbS5waG90b191cmwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGdldFJhbmRvbURhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogZ2V0UmFuZG9tVGltZSgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGROb2RlIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGROb2RlLCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBVcGRhdGVkICR7c2VsZWN0aW9uc0xlbmd0aH0gaXRlbXMgJHtnZXRSYW5kb21FbW9qaSgpfWApO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJ0b2dnbGVTcGlubmVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBGcmFtZSBvciBHcm91cCDwn5GGXCIpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJ0b2dnbGVTcGlubmVyXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInJlbmFtZUxheWVyXCIpIHtcbiAgICAgICAgaWYgKHNlbGVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICAgICAgbGF5ZXIubmFtZSA9IG1zZy52YWx1ZTtcbiAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoYENoYW5nZWQgbmFtZSB0bzogJHttc2cudmFsdWV9IPCflo1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IGEgbGF5ZXIgdG8gcmVuYW1lIPCfkYZcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBzb3JyeSDwn5iSXCIpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcInRvZ2dsZVNwaW5uZXJcIik7XG4gICAgfVxufSk7XG4iLCIvLyBUT0RPXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5yYW5kb20oKSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApLnJlcGxhY2UoLy0vZywgJy4nKTtcbn1cbi8vIFRPRE9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21UaW1lKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBgJHtkYXRlLmdldEhvdXJzKCl9OiR7ZGF0ZS5nZXRNaW51dGVzKCl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21FbW9qaSgpIHtcbiAgICBjb25zdCBlbW9qaXMgPSBbJ/CfpJgnLCAn8J+ZjCcsICfwn5GMJywgJ/CfkoUnLCAn8J+OiScsICfwn5qAJ107XG4gICAgcmV0dXJuIGVtb2ppc1tlbW9qaXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSB8IDBdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==