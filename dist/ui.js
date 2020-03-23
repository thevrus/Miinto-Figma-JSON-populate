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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/figma-plugin-ds.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/figma-plugin-ds.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n  height: 6px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  background-color: #d7d7d7; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  user-select: none; }\n\n/*  Typography */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7\") format(\"woff\"); }\n\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\") format(\"woff\"); }\n\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\") format(\"woff\"); }\n\n.label {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 4px 8px 8px;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.3);\n  background-color: #ffffff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.section-title {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 4px 8px 8px;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.8);\n  background-color: #ffffff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--pos-small-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--pos-small-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--pos-small-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--pos-medium-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0; }\n\n.type--pos-medium-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0; }\n\n.type--pos-medium-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0; }\n\n.type--pos-large-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--pos-large-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--pos-large-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--pos-xlarge-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--pos-xlarge-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--pos-xlarge-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--figma-black {\n  color: #000000; }\n\n.type--figma-black-3 {\n  color: rgba(0, 0, 0, 0.3); }\n\n.type--figma-black-8 {\n  color: rgba(0, 0, 0, 0.8); }\n\n.type--neg-small-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em; }\n\n.type--neg-small-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em; }\n\n.type--neg-small-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em; }\n\n.type--neg-medium-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--neg-medium-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--neg-medium-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em; }\n\n.type--neg-large-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--neg-large-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--neg-large-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--neg-xlarge-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--neg-xlarge-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--neg-xlarge-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em; }\n\n.type--figma-white {\n  color: #ffffff; }\n\n.type--figma-white-4 {\n  color: rgba(255, 255, 255, 0.4); }\n\n.type--figma-white-8 {\n  color: rgba(255, 255, 255, 0.8); }\n\n.button {\n  display: inline-block;\n  flex-shrink: 0;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: 5px 16px 5px 16px;\n  position: relative;\n  text-decoration: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  outline: none;\n  transition: background-color 0.3s; }\n  .button:hover {\n    cursor: pointer; }\n  .button--primary {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n    color: #ffffff;\n    background-color: #18a0fb; }\n    .button--primary:enabled:active {\n      border: 2px solid rgba(0, 0, 0, 0.3); }\n    .button--primary:disabled {\n      pointer-events: none;\n      background-color: rgba(0, 0, 0, 0.3); }\n  .button--primary-destructive {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.01em;\n    color: #ffffff;\n    background-color: #f24822; }\n    .button--primary-destructive:enabled:active {\n      border: 2px solid rgba(0, 0, 0, 0.3); }\n    .button--primary-destructive:disabled {\n      opacity: 0.4; }\n  .button--secondary {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(0, 0, 0, 0.8);\n    background-color: #ffffff; }\n    .button--secondary:enabled:active {\n      padding: 4px 15px 4px 15px;\n      border: 2px solid #18a0fb; }\n    .button--secondary:disabled {\n      color: rgba(0, 0, 0, 0.3);\n      border: 1px solid rgba(0, 0, 0, 0.3); }\n  .button--secondary-destructive {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    color: #f24822;\n    border: 1px solid #f24822;\n    background-color: #ffffff; }\n    .button--secondary-destructive:enabled:active {\n      padding: 4px 15px 4px 15px;\n      border: 2px solid #f24822; }\n    .button--secondary-destructive:disabled {\n      opacity: 0.4; }\n  .button--margin-right {\n    margin-right: 8px; }\n  .button--fw {\n    display: block;\n    width: 100%; }\n\n.buttons {\n  padding-top: 0.5rem;\n  border-top: 1px solid #f0f0f0; }\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.search {\n  position: relative; }\n  .search__list {\n    display: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    max-height: 132px;\n    overflow-y: auto;\n    top: 30px;\n    left: 0;\n    z-index: 10;\n    width: 100%;\n    background-color: #fff;\n    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);\n    list-style: none; }\n    .search__list--block {\n      display: block !important; }\n  .search__list-item {\n    border: 1px solid #e5e5e5;\n    margin-top: -1px;\n    padding: 8px;\n    display: flex;\n    justify-content: space-between;\n    transition: background-color .3s, color .3s;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em; }\n    .search__list-item:hover {\n      background-color: #18a0fb;\n      color: #fff;\n      cursor: pointer; }\n      .search__list-item:hover .search__list-span {\n        color: #fff; }\n  .search__list-span {\n    color: #BABABA; }\n\n.input {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  overflow: visible;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: 8px 4px 8px 7px;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff;\n  transition: border 0.3s; }\n  .input:hover {\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(0, 0, 0, 0.3); }\n  .input::selection {\n    color: #000000;\n    background-color: rgba(24, 145, 251, 0.3); }\n  .input::placeholder {\n    color: rgba(0, 0, 0, 0.3);\n    border: 1px solid transparent; }\n  .input:not(:disabled):focus:placeholder-shown {\n    border: 2px solid #18a0fb; }\n  .input:not(:disabled):focus:not(:placeholder-shown) {\n    padding-left: 6px; }\n  .input:disabled:hover {\n    border: 1px solid transparent; }\n  .input:active, .input:focus {\n    padding: 8px 4px 8px 6px;\n    color: #000000;\n    border: 2px solid #18a0fb;\n    border-radius: 2px; }\n  .input:disabled {\n    position: relative;\n    color: rgba(0, 0, 0, 0.3); }\n  .input:disabled:active {\n    padding: 8px 4px 8px 7px; }\n\n.input-icon {\n  position: relative;\n  width: 100%; }\n  .input-icon__icon {\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 32px;\n    height: 32px; }\n  .input-icon__input {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 30px;\n    margin: 1px 0 1px 0;\n    padding: 8px 4px 8px 0;\n    text-indent: 32px;\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid transparent;\n    border-radius: 2px;\n    outline: none;\n    background-color: #ffffff; }\n    .input-icon__input:hover {\n      color: rgba(0, 0, 0, 0.8);\n      border: 1px solid rgba(0, 0, 0, 0.1); }\n    .input-icon__input:active, .input-icon__input:focus {\n      margin-left: -1px;\n      padding: 8px 4px 8px 0;\n      color: #000000;\n      border: 2px solid #18a0fb;\n      border-radius: 2px; }\n    .input-icon__input::selection {\n      color: #000000;\n      background-color: rgba(24, 145, 251, 0.3); }\n    .input-icon__input::placeholder {\n      color: rgba(0, 0, 0, 0.3); }\n    .input-icon__input:not(:disabled):not(:hover):placeholder-shown {\n      border: 1px solid transparent;\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAABCAYAAABJ5n7WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgSURBVHgB7cMBCQAACMTAiR3sX1TQHr+DK2B+I0lSjj29qAEYlIbeBgAAAABJRU5ErkJggg==\");\n      background-repeat: no-repeat;\n      background-position: center bottom -0.9px;\n      background-size: calc(100% - 10px) 1px; }\n    .input-icon__input:not(:disabled):focus:placeholder-shown {\n      border: 2px solid #18a0fb; }\n    .input-icon__input:not(:disabled):focus:not(:placeholder-shown) {\n      padding-left: 0; }\n    .input-icon__input:disabled {\n      color: rgba(0, 0, 0, 0.3); }\n    .input-icon__input:disabled:hover {\n      border: 1px solid transparent; }\n\n.textarea {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  width: calc(100% - 16px);\n  min-height: 62px;\n  margin: 1px 8px 1px 8px;\n  padding: 7px 7px 7px 7px;\n  resize: none;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff; }\n  .textarea:active, .textarea:focus {\n    padding: 6px 6px 6px 6px;\n    color: #000000;\n    border: 2px solid #18a0fb;\n    border-radius: 2px; }\n  .textarea::selection {\n    color: #000000;\n    background-color: rgba(24, 145, 251, 0.3); }\n  .textarea::placeholder {\n    color: rgba(0, 0, 0, 0.3); }\n  .textarea:disabled {\n    color: rgba(0, 0, 0, 0.3); }\n    .textarea:disabled:focus, .textarea:disabled:active {\n      padding: 7px 7px 7px 7px;\n      border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.select-menu {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  cursor: default; }\n  .select-menu:disabled {\n    opacity: 0.3; }\n  .select-menu__button {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 30px;\n    margin: 1px 0 1px 0;\n    padding: 6px 0 6px 8px;\n    cursor: default;\n    color: rgba(0, 0, 0, 0.8);\n    border: 1px solid transparent;\n    border-radius: 2px;\n    background-color: #ffffff; }\n    .select-menu__button:hover {\n      border: 1px solid rgba(0, 0, 0, 0.1); }\n      .select-menu__button:hover span:after {\n        opacity: 0; }\n      .select-menu__button:hover .select-menu__icon {\n        opacity: 1; }\n    .select-menu__button:focus, .select-menu__button:active {\n      width: 100%;\n      padding: 5px 0 5px 7px;\n      border: 2px solid #18a0fb;\n      outline: none; }\n      .select-menu__button:focus span:after, .select-menu__button:active span:after {\n        opacity: 0; }\n      .select-menu__button:focus .select-menu__icon, .select-menu__button:active .select-menu__icon {\n        top: -1px;\n        right: -1px;\n        opacity: 1; }\n    .select-menu__button--active:hover {\n      width: 100%;\n      padding: 5px 0 5px 7px;\n      border: 2px solid #18a0fb;\n      outline: none; }\n  .select-menu__button-label {\n    display: inline-block;\n    text-align: left; }\n    .select-menu__button-label:after {\n      display: inline-block;\n      width: 7px;\n      height: 5px;\n      margin-top: 6px;\n      margin-left: 4px;\n      content: '';\n      background-color: transparent;\n      background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%225%22%20viewBox%3D%220%200%207%205%22%20width%3D%227%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m3%203.70711-3-3.000003.707107-.707107%202.646443%202.64645%202.64645-2.64645.70711.707107-3%203.000003-.35356.35355z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\"); }\n  .select-menu__icon {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 30px;\n    height: 30px;\n    opacity: 0;\n    background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20width%3D%2230%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m15%2016.7071-3-3%20.7071-.7071%202.6465%202.6464%202.6464-2.6464.7071.7071-3%203-.3535.3536z%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: center center; }\n  .select-menu__list {\n    position: absolute;\n    z-index: 2;\n    display: none;\n    flex-direction: column;\n    width: 100%;\n    margin: 0;\n    padding: 8px 0 8px 0;\n    border-radius: 2px;\n    background-color: #222222;\n    box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15); }\n    .select-menu__list--active {\n      display: flex; }\n  .select-menu__list-item {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 24px;\n    padding: 0 8px 0 4px;\n    color: #ffffff; }\n    .select-menu__list-item--active .select-menu__list-item-icon {\n      opacity: 1 !important; }\n    .select-menu__list-item:hover {\n      background-color: #18a0fb; }\n  .select-menu__list-item-text {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    padding: 0 0 0 4px; }\n  .select-menu__list-item-icon {\n    display: block;\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    opacity: 0;\n    background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: center center; }\n  .select-menu__divider {\n    margin: 0; }\n  .select-menu__divider-line {\n    display: block;\n    height: 1px;\n    margin: 8px 0 7px;\n    background-color: rgba(255, 255, 255, 0.2); }\n  .select-menu__divider-label {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    display: flex;\n    align-items: center;\n    height: 32px;\n    margin-top: 8px;\n    padding: 8px 8px 0 32px;\n    color: rgba(255, 255, 255, 0.4);\n    border-top: 1px solid rgba(255, 255, 255, 0.2); }\n    .select-menu__divider-label--first {\n      height: 24px;\n      margin-top: 0;\n      padding: 0 8px 0 32px;\n      border-top: none; }\n\n.switch {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 32px;\n  cursor: default; }\n  .switch__toggle {\n    display: none; }\n    .switch__toggle:checked + label:before {\n      background-color: #000000; }\n    .switch__toggle:checked + label:after {\n      transform: translateX(14px); }\n    .switch__toggle:disabled + label {\n      opacity: 0.3; }\n  .switch__label {\n    display: flex;\n    width: 100%;\n    padding-left: 40px;\n    user-select: none; }\n    .switch__label:before {\n      position: absolute;\n      top: 10px;\n      left: 6px;\n      display: block;\n      width: 24px;\n      height: 10px;\n      content: '';\n      transition: background-color 0 0.2s;\n      border: 1px solid #000000;\n      border-radius: 6px;\n      background-color: #ffffff; }\n    .switch__label:after {\n      position: absolute;\n      top: 10px;\n      left: 6px;\n      display: block;\n      width: 10px;\n      height: 10px;\n      content: '';\n      transition: transform 0.2s;\n      border: 1px solid #000000;\n      border-radius: 50%;\n      background-color: white; }\n\n.checkbox {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 32px;\n  cursor: default; }\n  .checkbox__box {\n    display: none; }\n    .checkbox__box:checked + label:before {\n      border: 1px solid #18a0fb;\n      background-color: #18a0fb;\n      background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n      background-repeat: no-repeat;\n      background-position: 1px 2px; }\n    .checkbox__box:disabled + label {\n      opacity: 0.3; }\n    .checkbox__box:checked:disabled + label:before {\n      border: 1px solid rgba(0, 0, 0, 0.8);\n      background-color: rgba(0, 0, 0, 0.8); }\n  .checkbox__label {\n    display: flex;\n    width: 100%;\n    user-select: none; }\n    .checkbox__label:before {\n      display: block;\n      width: 10px;\n      height: 10px;\n      margin: 2px 10px 0 10px;\n      content: '';\n      border: 1px solid rgba(0, 0, 0, 0.8);\n      border-radius: 2px; }\n\n.divider {\n  display: block;\n  width: 100%;\n  height: 1px;\n  margin: 8px 0 8px 0;\n  padding: 0;\n  background-color: #e5e5e5; }\n\n.visual-bell {\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 1;\n  width: 100%;\n  height: 36px;\n  padding: 0 16px 0 16px;\n  transition: all 0.3s ease-out;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  background-color: #222222;\n  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15); }\n  .visual-bell__msg {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    letter-spacing: -0.001em;\n    display: block;\n    color: #ffffff; }\n  .visual-bell__spinner-container {\n    display: none;\n    overflow: hidden;\n    width: 24px;\n    height: 24px;\n    margin-right: 8px;\n    margin-left: -4px; }\n  .visual-bell__spinner {\n    display: block;\n    width: 24px;\n    height: 24px;\n    animation: rotating 1.0s linear infinite;\n    background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M4.848%209.74l.477.15-.477-.15zm2.622-3.08a.5.5%200%200%200-.617-.787l.617.787zm10.677%201.99a7%207%200%200%201%20.838%203.803l.998.065a8%208%200%200%200-.958-4.346l-.878.478zm.838%203.803a7%207%200%200%201-1.324%203.662l.81.588a8%208%200%200%200%201.513-4.186l-.998-.065zm-1.324%203.662a7%207%200%200%201-3.076%202.388l.37.93a8%208%200%200%200%203.515-2.729l-.81-.588zm-3.076%202.388a7%207%200%200%201-3.876.375l-.184.983a8%208%200%200%200%204.43-.428l-.37-.93zm-3.876.375a7%207%200%200%201-3.477-1.755l-.68.732a8%208%200%200%200%203.973%202.005l.184-.983zm-3.477-1.755a7%207%200%200%201-2.001-3.341l-.967.255a8%208%200%200%200%202.287%203.818l.68-.732zm-2-3.34a7%207%200%200%201%20.094-3.893l-.954-.3a8%208%200%200%200-.107%204.449l.967-.255zm.094-3.893c.323-1.024.863-1.835%201.326-2.394.23-.278.44-.49.6-.632l.175-.157.044-.037c.01-.008.01-.008-.298-.402l-.31-.393-.026.02-.06.05-.21.2c-.175.165-.413.407-.674.722-.52.627-1.137%201.55-1.5%202.73l.954.3z%22%20fill%3D%22%23a5a5a5%22%2F%3E%3C%2Fsvg%3E\");\n    background-repeat: none; }\n  .visual-bell--loading .visual-bell__spinner-container {\n    display: block; }\n  .visual-bell--hidden {\n    margin-top: 8px;\n    opacity: 0; }\n  .visual-bell--error {\n    border: 1px solid #f24822;\n    background-color: #f24822; }\n\n@keyframes rotating {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.onboarding-tip {\n  display: flex;\n  align-items: top;\n  flex-direction: row;\n  padding: 0 16px 0 0;\n  cursor: default; }\n  .onboarding-tip__icon {\n    width: 32px;\n    height: 32px;\n    margin-right: 8px; }\n  .onboarding-tip__msg {\n    padding: 8px 0 8px 0;\n    color: rgba(0, 0, 0, 0.8);\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em; }\n    .onboarding-tip__msg a:link, .onboarding-tip__msg a:hover, .onboarding-tip__msg a:active, .onboarding-tip__msg a:visited {\n      text-decoration: none;\n      color: #18a0fb; }\n  .onboarding-tip--hidden {\n    display: none; }\n  .onboarding-tip--light {\n    color: rgba(0, 0, 0, 0.3); }\n  .onboarding-tip--pt5 {\n    padding-top: 8px; }\n\n.disclosure {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n  .disclosure__item {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid #e5e5e5;\n    background-color: #ffffff; }\n    .disclosure__item:last-child {\n      border-bottom: 1px solid transparent; }\n  .disclosure__label {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 32px;\n    padding: 0 8px 0 24px;\n    cursor: default;\n    user-select: none;\n    color: rgba(0, 0, 0, 0.8); }\n    .disclosure__label:before {\n      position: absolute;\n      top: 8px;\n      left: 4px;\n      display: block;\n      width: 16px;\n      height: 16px;\n      content: '';\n      opacity: 0.3;\n      background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m11%208-4-3v6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\");\n      background-repeat: no-repeat;\n      background-position: center center; }\n    .disclosure__label:hover:before {\n      opacity: 0.8; }\n  .disclosure__content {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    display: none;\n    padding: 8px 8px 8px 24px;\n    color: rgba(0, 0, 0, 0.8); }\n  .disclosure--section .disclosure__label {\n    font-family: \"Inter\", sans-serif;\n    font-weight: 600;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em; }\n  .disclosure--expanded .disclosure__content {\n    display: block;\n    border-bottom: 1px solid transparent; }\n  .disclosure--expanded .disclosure__label:before {\n    opacity: 0.8;\n    background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9%2010%203-4h-6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\"); }\n\ndetails > summary::-webkit-details-marker {\n  display: none; }\n\n.details {\n  margin-bottom: 8px;\n  cursor: pointer; }\n  .details__summary {\n    padding-left: 16px;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 400;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    color: rgba(0, 0, 0, 0.8);\n    position: relative;\n    outline: none;\n    user-select: none; }\n    .details__summary:before {\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      display: block;\n      width: 16px;\n      height: 16px;\n      content: '';\n      opacity: 0.3;\n      background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m11%208-4-3v6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\");\n      background-repeat: no-repeat;\n      background-position: center center; }\n  .details[open] .details__summary::before {\n    transition: transform .1s;\n    transform: rotate(90deg);\n    height: 14px; }\n\n/* Add this attribute to the element that needs a example */\n[data-tooltip] {\n  position: relative;\n  z-index: 2;\n  cursor: pointer; }\n\n/* Hide the example content by default */\n[data-tooltip]:before,\n[data-tooltip]:after {\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none; }\n\n/* Position example above the element */\n[data-tooltip]:before {\n  position: absolute;\n  bottom: 120%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 5px;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: #000;\n  color: #fff;\n  content: attr(data-tooltip);\n  text-align: center;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  font-size: 10px; }\n\n/* Triangle hack to make example look like a speech bubble */\n[data-tooltip]:after {\n  position: absolute;\n  bottom: 120%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  border-top: 5px solid #000;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  content: \" \";\n  font-size: 0;\n  line-height: 0; }\n\n/* Show example content on hover */\n[data-tooltip]:hover:before,\n[data-tooltip]:hover:after {\n  visibility: visible;\n  opacity: 1; }\n\n.list {\n  margin: 12px 0;\n  padding: 0;\n  margin-bottom: 11px;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0; }\n  .list--countries {\n    display: flex;\n    justify-content: space-between; }\n  .list--categories {\n    display: flex;\n    justify-content: space-evenly; }\n  .list__list-item {\n    display: inline-block;\n    margin: 2px;\n    padding: 4px 8px;\n    position: relative;\n    cursor: pointer;\n    user-select: none;\n    color: #4b4b4b;\n    border: 1px solid #f0f0f0;\n    border-radius: 20px;\n    cursor: pointer;\n    transition: background-color 0.3s, color 0.3s, border-color 0.3s; }\n    .list__list-item input {\n      position: absolute;\n      width: 0;\n      height: 0;\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n      appearance: none; }\n    .list__list-item--checked {\n      border: 1px solid #18a0fb; }\n    .list__list-item:hover {\n      background-color: #18a0fb;\n      border-color: #18a0fb;\n      color: #ffffff; }\n\n.tabs {\n  display: flex;\n  margin-bottom: 1rem; }\n  .tabs__link {\n    width: 100%;\n    padding: 0.6rem 8px;\n    cursor: pointer;\n    color: #c2c2c2;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 16px;\n    letter-spacing: 0.005em;\n    text-align: center;\n    text-decoration: none;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n    .tabs__link:hover {\n      color: #000000; }\n    .tabs__link--active {\n      font-family: \"Inter\", sans-serif;\n      font-weight: 600;\n      font-size: 11px;\n      line-height: 16px;\n      letter-spacing: 0.005em;\n      color: #000000; }\n\n.disabled, .disabled--wawing {\n  pointer-events: none;\n  cursor: not-allowed; }\n  .disabled--wawing {\n    transition: opacity 0.3s;\n    animation-name: loading;\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear; }\n\n@keyframes loading {\n  0% {\n    opacity: 0.3; }\n  50% {\n    opacity: 0.6; }\n  100% {\n    opacity: 0.3; } }\n\n.loading-spinner {\n  animation-duration: 0.9s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 16px;\n  width: 16px;\n  border: 2px solid #ffffff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: -8px; }\n\nul {\n  padding: 0 8px;\n  margin: 0;\n  list-style: none; }\n\n.products {\n  transform: translateX(-110%);\n  transition: transform 0.3s linear;\n  pointer-events: none;\n  opacity: 0.6;\n  display: none; }\n  .products--active {\n    display: block;\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateX(0); }\n\n.properties {\n  overflow: auto;\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 6px 0;\n  padding: 12px;\n  height: 65%; }\n  .properties__list p {\n    margin: 0;\n    font-family: \"Inter\", sans-serif;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 0;\n    line-height: 24px;\n    transition: background-color 0.3s; }\n    .properties__list p:hover {\n      cursor: pointer;\n      text-decoration: underline; }\n    .properties__list p span {\n      font-family: \"Inter\", sans-serif;\n      font-weight: 500;\n      font-size: 12px;\n      line-height: 16px;\n      letter-spacing: 0; }\n  .properties__photos {\n    overflow-x: auto;\n    display: flex;\n    padding-bottom: 6px;\n    margin-bottom: 8px; }\n    .properties__photos img {\n      border-radius: 6px;\n      border: 1px solid #e2e2e2;\n      width: 100px;\n      transition: opacity 0.3s;\n      margin-right: 4px; }\n      .properties__photos img:hover {\n        cursor: pointer;\n        opacity: 0.8; }\n\n.icon {\n  width: 32px;\n  height: 32px;\n  cursor: default;\n  color: #000000;\n  background-repeat: no-repeat;\n  background-position: 0 0; }\n  .icon--black-3 {\n    color: rgba(0, 0, 0, 0.3);\n    background-position: 0 -32px; }\n  .icon--blue {\n    color: #18a0fb;\n    background-position: 0 -64px; }\n  .icon--white {\n    color: #18a0fb;\n    background-position: 0 -96px; }\n  .icon--button {\n    width: 32px;\n    height: 32px;\n    border: 1px solid transparent;\n    border-radius: 2px;\n    outline: none;\n    background-position: -1px -1px; }\n    .icon--button:hover {\n      background-color: rgba(0, 0, 0, 0.06); }\n    .icon--button:active {\n      border: 1px solid #18a0fb;\n      background-color: rgba(0, 0, 0, 0.06);\n      box-shadow: inset 0 0 0 1px #18a0fb; }\n    .icon--button:disabled {\n      opacity: .37; }\n  .icon--selected {\n    color: #ffffff;\n    border: 1px solid transparent;\n    background-color: #18a0fb;\n    background-position: -1px -97px; }\n    .icon--selected:hover {\n      color: #ffffff;\n      background-color: #18a0fb; }\n    .icon--selected:active {\n      color: #ffffff;\n      background-color: #18a0fb; }\n  .icon--text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: \"Inter\", sans-serif;\n    font-size: 11px; }\n\n.icon--adjust {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cpath d='m12 16.05v-7.05h1v7.05c1.1411.2316 2 1.2405 2 2.45s-.8589 2.2184-2 2.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184 2-2.45zm2 2.45c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5z' fill-opacity='.8'/%3E%3Cpath d='m19 23h1v-7.05c1.1411-.2316 2-1.2405 2-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2 1.2405-2 2.45s.8589 2.2184 2 2.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z' fill-opacity='.8'/%3E%3Cpath d='m12 48.05v-7.05h1v7.05c1.1411.2316 2 1.2405 2 2.45s-.8589 2.2184-2 2.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184 2-2.45zm2 2.45c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5z' fill-opacity='.3'/%3E%3Cpath d='m19 55h1v-7.05c1.1411-.2316 2-1.2405 2-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2 1.2405-2 2.45s.8589 2.2184 2 2.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z' fill-opacity='.3'/%3E%3C/g%3E%3Cpath d='m12 80.05v-7.05h1v7.05c1.1411.2316 2 1.2405 2 2.45s-.8589 2.2184-2 2.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184 2-2.45zm2 2.45c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5z' fill='%2318a0fb'/%3E%3Cpath d='m19 87h1v-7.05c1.1411-.2316 2-1.2405 2-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2 1.2405-2 2.45s.8589 2.2184 2 2.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z' fill='%2318a0fb'/%3E%3Cpath d='m12 112.05v-7.05h1v7.05c1.1411.232 2 1.241 2 2.45s-.8589 2.218-2 2.45v2.05h-1v-2.05c-1.1411-.232-2-1.241-2-2.45s.8589-2.218 2-2.45zm2 2.45c0 .828-.6716 1.5-1.5 1.5s-1.5-.672-1.5-1.5.6716-1.5 1.5-1.5 1.5.672 1.5 1.5z' fill='%23fff'/%3E%3Cpath d='m19 119h1v-7.05c1.1411-.232 2-1.241 2-2.45s-.8589-2.218-2-2.45v-2.05h-1v2.05c-1.1411.232-2 1.241-2 2.45s.8589 2.218 2 2.45zm2-9.5c0-.828-.6716-1.5-1.5-1.5s-1.5.672-1.5 1.5.6716 1.5 1.5 1.5 1.5-.672 1.5-1.5z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\"); }\n\n.icon--alert {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 17.3929c0 .72.4349 1.3385 1.0563 1.6071.2127.0919.4473.1429.6937.1429v.8571h-14v-.8571c.24643 0 .48097-.051.69365-.1429.62145-.2686 1.05635-.8871 1.05635-1.6071v-3.3929c0-3.3137 2.3505-6 5.25-6s5.25 2.6863 5.25 6zm-1-3.3929v3.3929c0 .5999.1921 1.155.5182 1.6071h-9.5364c.3261-.4521.5182-1.0072.5182-1.6071v-3.3929c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 23c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 49.3929c0 .72.4349 1.3385 1.0563 1.6071.2127.0919.4473.1429.6937.1429v.8571h-14v-.8571c.24643 0 .48097-.051.69365-.1429.62145-.2686 1.05635-.8871 1.05635-1.6071v-3.3929c0-3.3137 2.3505-6 5.25-6s5.25 2.6863 5.25 6zm-1-3.3929v3.3929c0 .5999.1921 1.155.5182 1.6071h-9.5364c.3261-.4521.5182-1.0072.5182-1.6071v-3.3929c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 55c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 81.3929c0 .72.4349 1.3385 1.0563 1.6071.2127.0919.4473.1429.6937.1429v.8571h-14v-.8571c.24643 0 .48097-.051.69365-.1429.62145-.2686 1.05635-.8871 1.05635-1.6071v-3.3929c0-3.3137 2.3505-6 5.25-6s5.25 2.6863 5.25 6zm-1-3.3929v3.3929c0 .5999.1921 1.155.5182 1.6071h-9.5364c.3261-.4521.5182-1.0072.5182-1.6071v-3.3929c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 87c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 113.393c0 .72.4349 1.338 1.0563 1.607.2127.092.4473.143.6937.143v.857h-14v-.857c.24643 0 .48097-.051.69365-.143.62145-.269 1.05635-.887 1.05635-1.607v-3.393c0-3.314 2.3505-6 5.25-6s5.25 2.686 5.25 6zm-1-3.393v3.393c0 .6.1921 1.155.5182 1.607h-9.5364c.3261-.452.5182-1.007.5182-1.607v-3.393c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 119c-1.1046 0-2-.895-2-2h-1c0 1.657 1.3431 3 3 3s3-1.343 3-3h-1c0 1.105-.8954 2-2 2z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--align-bottom {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 23h-15v-1h15z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 19.2071-3.8536-3.8535.7072-.7072 2.6464 2.6465v-8.2929h1v8.2929l2.6464-2.6465.7072.7072z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 55h-15v-1h15z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 51.2071-3.8536-3.8535.7072-.7072 2.6464 2.6465v-8.2929h1v8.2929l2.6464-2.6465.7072.7072z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 87h-15v-1h15z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 83.2071-3.8536-3.8535.7072-.7072 2.6464 2.6465v-8.2929h1v8.2929l2.6464-2.6465.7072.7072z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 119h-15v-1h15z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15.5 115.207-3.8536-3.853.7072-.708 2.6464 2.647v-8.293h1v8.293l2.6464-2.647.7072.708z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--align-middle {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m15.5 13.7071-2.8536-2.8535.7072-.7072 1.6464 1.6465v-4.7929h1v4.7929l1.6464-1.6465.7072.7072z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8 16v-1h15v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 17.2929 2.8536 2.8536-.7072.7071-1.6464-1.6465v4.7929h-1v-4.7929l-1.6464 1.6465-.7072-.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 45.7071-2.8536-2.8535.7072-.7072 1.6464 1.6465v-4.7929h1v4.7929l1.6464-1.6465.7072.7072z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m8 48v-1h15v1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 49.2929 2.8536 2.8536-.7072.7071-1.6464-1.6465v4.7929h-1v-4.7929l-1.6464 1.6465-.7072-.7071z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m15.5 77.7071-2.8536-2.8535.7072-.7072 1.6464 1.6465v-4.7929h1v4.7929l1.6464-1.6465.7072.7072z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8 80v-1h15v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 81.2929 2.8536 2.8536-.7072.7071-1.6464-1.6465v4.7929h-1v-4.7929l-1.6464 1.6465-.7072-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 109.707-2.8536-2.853.7072-.708 1.6464 1.647v-4.793h1v4.793l1.6464-1.647.7072.708z\" fill=\"%23fff\"/%3E%3Cpath d=\"m8 112v-1h15v1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15.5 113.293 2.8536 2.853-.7072.708-1.6464-1.647v4.793h-1v-4.793l-1.6464 1.647-.7072-.708z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--align-top {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 9h-15v1h15z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 12.7929-3.8536 3.8535.7072.7072 2.6464-2.6465v8.2929h1v-8.2929l2.6464 2.6465.7072-.7072z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 41h-15v1h15z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 44.7929-3.8536 3.8535.7072.7072 2.6464-2.6465v8.2929h1v-8.2929l2.6464 2.6465.7072-.7072z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 73h-15v1h15z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 76.7929-3.8536 3.8535.7072.7072 2.6464-2.6465v8.2929h1v-8.2929l2.6464 2.6465.7072-.7072z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 105h-15v1h15z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15.5 108.793-3.8536 3.853.7072.708 2.6464-2.647v8.293h1v-8.293l2.6464 2.647.7072-.708z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--angle {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m12 12v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m12 44v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m12 76v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3z' fill='%2318a0fb'/%3E%3Cpath d='m12 108v8h8v-1h-3c0-2.209-1.7909-4-4-4v-3zm1 4v3h3c0-1.657-1.3431-3-3-3z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\"); }\n\n.icon--animated-fill {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m13.6667 13.0833v5.8334l5.25-2.9167z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 10c0-.55228.44772-1 1-1h12c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1h-12c-.55228 0-1-.4477-1-1zm1 0h12v12h-12z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m13.6667 45.0833v5.8334l5.25-2.9167z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 42c0-.5523.44772-1 1-1h12c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1h-12c-.55228 0-1-.4477-1-1zm1 0h12v12h-12z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m13.6667 77.0833v5.8334l5.25-2.9167z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 74c0-.5523.44772-1 1-1h12c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1h-12c-.55228 0-1-.4477-1-1zm1 0h12v12h-12z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m13.6667 109.083v5.834l5.25-2.917z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 106c0-.552.44772-1 1-1h12c.5523 0 1 .448 1 1v12c0 .552-.4477 1-1 1h-12c-.55228 0-1-.448-1-1zm1 0h12v12h-12z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--arrow-left-right {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m12.2071 16.5 1.6464 1.6465-.7071.7071-2.8536-2.8536 2.8536-2.8535.7071.7071-1.6464 1.6464h7.5857l-1.6464-1.6464.7071-.7071 2.8536 2.8535-2.8536 2.8536-.7071-.7071 1.6464-1.6465z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.2071 48.5 1.6464 1.6465-.7071.7071-2.8536-2.8536 2.8536-2.8535.7071.7071-1.6464 1.6464h7.5857l-1.6464-1.6464.7071-.7071 2.8536 2.8535-2.8536 2.8536-.7071-.7071 1.6464-1.6465z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.2071 80.5 1.6464 1.6465-.7071.7071-2.8536-2.8536 2.8536-2.8535.7071.7071-1.6464 1.6464h7.5857l-1.6464-1.6464.7071-.7071 2.8536 2.8535-2.8536 2.8536-.7071-.7071 1.6464-1.6465z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.2071 112.5 1.6464 1.646-.7071.708-2.8536-2.854 2.8536-2.854.7071.708-1.6464 1.646h7.5857l-1.6464-1.646.7071-.708 2.8536 2.854-2.8536 2.854-.7071-.708 1.6464-1.646z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--arrow-up-down {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16.0005 10.2924 2.8536 2.8535-.7071.7071-1.6465-1.6464v7.5858l1.6465-1.6465.7071.7071-2.8536 2.8536-2.8535-2.8536.7071-.7071 1.6464 1.6465v-7.5858l-1.6464 1.6464-.7071-.7071z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.0005 42.2924 2.8536 2.8535-.7071.7071-1.6465-1.6464v7.5858l1.6465-1.6465.7071.7071-2.8536 2.8536-2.8535-2.8536.7071-.7071 1.6464 1.6465v-7.5858l-1.6464 1.6464-.7071-.7071z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.0005 74.2924 2.8536 2.8535-.7071.7071-1.6465-1.6464v7.5858l1.6465-1.6465.7071.7071-2.8536 2.8536-2.8535-2.8536.7071-.7071 1.6464 1.6465v-7.5858l-1.6464 1.6464-.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.0005 106.292 2.8536 2.854-.7071.707-1.6465-1.646v7.585l1.6465-1.646.7071.707-2.8536 2.854-2.8535-2.854.7071-.707 1.6464 1.646v-7.585l-1.6464 1.646-.7071-.707z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--blend-empty {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16.6948 11.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005c-.0003.0003-.0007.0007-.001.001-.2421.2505-.4732.4896-.6933.7185-2.2035 2.2924-3.3053 3.5739-3.3053 5.1319-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318zm-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.6948 43.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005c-.0003.0003-.0007.0007-.001.001-.2421.2505-.4732.4896-.6933.7185-2.2035 2.2924-3.3053 3.5739-3.3053 5.1319-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318zm-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.6948 75.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005c-.0003.0003-.0007.0007-.001.001-.2421.2505-.4732.4896-.6933.7185-2.2035 2.2924-3.3053 3.5739-3.3053 5.1319-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318zm-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.6948 107.72c-.22-.229-.4511-.468-.6932-.718-.0005-.001-.001-.001-.0015-.002h-.0005c-.0003.001-.0007.001-.001.002-.2421.25-.4732.489-.6933.718-2.2035 2.292-3.3053 3.574-3.3053 5.132-.0025 1.062.3881 2.125 1.1717 2.936 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.811 1.1741-1.874 1.1716-2.936 0-1.558-1.1017-2.84-3.3052-5.132zm-.6947.72c-.9766 1.017-1.6934 1.791-2.1953 2.471-.5998.813-.8048 1.38-.8048 1.941v.002c-.0019.818.2984 1.626.8907 2.239 1.1689 1.209 3.0498 1.209 4.2188 0 .5921-.613.8924-1.421.8905-2.239v-.002c0-.561-.205-1.128-.8048-1.941-.5018-.68-1.2187-1.454-2.1951-2.471z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--blend {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16.0016 11.0016c.2421.2504.4732.4895.6932.7185 2.2035 2.2923 3.3052 3.5738 3.3052 5.1318.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1318.2201-.229.4512-.4681.6933-.7186l.001-.001zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942c-.002-.0485-.003-.0971-.0029-.1458v-.0023c0-.5607.205-1.1274.8048-1.9407z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.0016 43.0016c.2421.2504.4732.4895.6932.7185 2.2035 2.2923 3.3052 3.5738 3.3052 5.1318.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1318.2201-.229.4512-.4681.6933-.7186l.001-.001zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942c-.002-.0485-.003-.0971-.0029-.1458v-.0023c0-.5607.205-1.1274.8048-1.9407z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.0016 75.0016c.2421.2504.4732.4895.6932.7185 2.2035 2.2923 3.3052 3.5738 3.3052 5.1318.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1318.2201-.229.4512-.4681.6933-.7186l.001-.001zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942c-.002-.0485-.003-.0971-.0029-.1458v-.0023c0-.5607.205-1.1274.8048-1.9407z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.0016 107.002c.2421.25.4732.489.6932.718 2.2035 2.292 3.3052 3.574 3.3052 5.132.0025 1.062-.388 2.125-1.1716 2.936-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.811-1.1742-1.874-1.1717-2.936 0-1.558 1.1018-2.84 3.3053-5.132.2201-.229.4512-.468.6933-.718l.001-.002zm-2.1968 3.909c.5019-.68 1.2187-1.454 2.1953-2.471.9764 1.017 1.6933 1.791 2.1951 2.471.5998.813.8048 1.38.8048 1.941v.002c.0001.049-.0008.097-.0029.146h-5.9942c-.002-.049-.003-.097-.0029-.146v-.002c0-.561.205-1.128.8048-1.941z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--break {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='.8' opacity='.9'%3E%3Cpath d='m13.0002 9v3h1v-3z'/%3E%3Cpath d='m22.1033 9.89644c-1.1617-1.16176-3.0453-1.16176-4.2071.00002l-2.7499 2.74994.7071.7071 2.7499-2.7499c.7712-.77128 2.0217-.77129 2.7929 0 .7712.7712.7713 2.0216 0 2.7928l-2.7499 2.75.7071.7071 2.7499-2.75c1.1618-1.1617 1.1618-3.0453 0-4.20706z'/%3E%3Cpath d='m9.89639 22.1035c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75 2.75c-.77124.7713-.77124 2.0217 0 2.7929.7712.7713 2.0216.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1618 1.1618-3.0454 1.1618-4.20711 0z'/%3E%3Cpath d='m22.9998 19h-3v-1h3z'/%3E%3Cpath d='m19.0004 20v3h-1v-3z'/%3E%3Cpath d='m11.9998 13h-3.00004v1h3.00004z'/%3E%3C/g%3E%3Cg fill='%23000' fill-opacity='.3' opacity='.9'%3E%3Cpath d='m13.0002 41v3h1v-3z'/%3E%3Cpath d='m22.1033 41.8964c-1.1617-1.1617-3.0453-1.1617-4.2071.0001l-2.7499 2.7499.7071.7071 2.7499-2.7499c.7712-.7713 2.0217-.7713 2.7929 0 .7712.7712.7713 2.0216 0 2.7928l-2.7499 2.75.7071.7071 2.7499-2.75c1.1618-1.1617 1.1618-3.0453 0-4.2071z'/%3E%3Cpath d='m9.89639 54.1035c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75 2.75c-.77124.7713-.77124 2.0217 0 2.7929.7712.7713 2.0216.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1618 1.1618-3.0454 1.1618-4.20711 0z'/%3E%3Cpath d='m22.9998 51h-3v-1h3z'/%3E%3Cpath d='m19.0004 52v3h-1v-3z'/%3E%3Cpath d='m11.9998 45h-3.00004v1h3.00004z'/%3E%3C/g%3E%3Cg fill='%2318a0fb' opacity='.9'%3E%3Cpath d='m13.0002 73v3h1v-3z'/%3E%3Cpath d='m22.1033 73.8964c-1.1617-1.1617-3.0453-1.1617-4.2071.0001l-2.7499 2.7499.7071.7071 2.7499-2.7499c.7712-.7713 2.0217-.7713 2.7929 0 .7712.7712.7713 2.0216 0 2.7928l-2.7499 2.75.7071.7071 2.7499-2.75c1.1618-1.1617 1.1618-3.0453 0-4.2071z'/%3E%3Cpath d='m9.89639 86.1035c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75 2.75c-.77124.7713-.77124 2.0217 0 2.7929.7712.7713 2.0216.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1618 1.1618-3.0454 1.1618-4.20711 0z'/%3E%3Cpath d='m22.9998 83h-3v-1h3z'/%3E%3Cpath d='m19.0004 84v3h-1v-3z'/%3E%3Cpath d='m11.9998 77h-3.00004v1h3.00004z'/%3E%3C/g%3E%3Cg fill='%23fff' opacity='.9'%3E%3Cpath d='m13.0002 105v3h1v-3z'/%3E%3Cpath d='m22.1033 105.896c-1.1617-1.161-3.0453-1.161-4.2071 0l-2.7499 2.75.7071.708 2.7499-2.75c.7712-.772 2.0217-.772 2.7929 0 .7712.771.7713 2.021 0 2.792l-2.7499 2.75.7071.708 2.7499-2.75c1.1618-1.162 1.1618-3.046 0-4.208z'/%3E%3Cpath d='m9.89639 118.104c-1.16176-1.162-1.16177-3.046-.00001-4.208l2.75002-2.75.7071.708-2.75 2.75c-.77124.771-.77124 2.021 0 2.792.7712.772 2.0216.772 2.7929 0l2.75-2.75.7071.708-2.75 2.75c-1.1618 1.161-3.0454 1.161-4.20711 0z'/%3E%3Cpath d='m22.9998 115h-3v-1h3z'/%3E%3Cpath d='m19.0004 116v3h-1v-3z'/%3E%3Cpath d='m11.9998 109h-3.00004v1h3.00004z'/%3E%3C/g%3E%3C/svg%3E\"); }\n\n.icon--close {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16 15.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071-4.6465-4.6464-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 47.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071-4.6465-4.6464-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 79.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071-4.6465-4.6464-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 111.293 4.6465-4.646.7071.707-4.6465 4.646 4.6465 4.647-.7071.707-4.6465-4.647-4.6464 4.647-.7071-.707 4.6464-4.647-4.6464-4.646.7071-.707z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--comment {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m8 23 5.812-.7664c.9562.4899 2.0398.7664 3.188.7664 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.8462.5266 2.6686zm3.6399-4.2552-.1889-.4577c-.2903-.7035-.451-1.4753-.451-2.2871 0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.6564l-.2776-.1422-4.09891.5405z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8 55 5.812-.7664c.9562.4899 2.0398.7664 3.188.7664 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.8462.5266 2.6686zm3.6399-4.2552-.1889-.4577c-.2903-.7035-.451-1.4753-.451-2.2871 0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.6564l-.2776-.1422-4.09891.5405z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m8 87 5.812-.7664c.9562.4899 2.0398.7664 3.188.7664 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.8462.5266 2.6686zm3.6399-4.2552-.1889-.4577c-.2903-.7035-.451-1.4753-.451-2.2871 0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.6564l-.2776-.1422-4.09891.5405z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8 119 5.812-.766c.9562.49 2.0398.766 3.188.766 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.846.5266 2.669zm3.6399-4.255-.1889-.458c-.2903-.703-.451-1.475-.451-2.287 0-3.314 2.6863-6 6-6s6 2.686 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.656l-.2776-.143-4.09891.541z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--component {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m12.0625 10.9375 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.52329z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.0625 21.0625 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m7 16 3.9375-3.9375 3.9375 3.9375-3.9375 3.9375zm3.9375 2.5233 2.5233-2.5233-2.5233-2.5233-2.52329 2.5233z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.125 16 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.0625 42.9375 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.0625 53.0625 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m7 48 3.9375-3.9375 3.9375 3.9375-3.9375 3.9375zm3.9375 2.5233 2.5233-2.5233-2.5233-2.5233-2.52329 2.5233z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17.125 48 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m12.0625 74.9375 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.0625 85.0625 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m7 80 3.9375-3.9375 3.9375 3.9375-3.9375 3.9375zm3.9375 2.5233 2.5233-2.5233-2.5233-2.5233-2.52329 2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.125 80 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.0625 106.938 3.9375 3.937 3.9375-3.937-3.9375-3.938zm6.4608 0-2.5233 2.523-2.5233-2.523 2.5233-2.524z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12.0625 117.062 3.9375 3.938 3.9375-3.938-3.9375-3.937zm6.4608 0-2.5233 2.524-2.5233-2.524 2.5233-2.523z\" fill=\"%23fff\"/%3E%3Cpath d=\"m7 112 3.9375-3.938 3.9375 3.938-3.9375 3.938zm3.9375 2.523 2.5233-2.523-2.5233-2.523-2.52329 2.523z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17.125 112 3.9375 3.938 3.9375-3.938-3.9375-3.938zm6.4608 0-2.5233 2.523-2.5233-2.523 2.5233-2.523z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--corner-radius {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m21 13h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m21 45h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m21 77h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z' fill='%2318a0fb'/%3E%3Cpath d='m21 109h-4c-2.2091 0-4 1.791-4 4v4h-1v-4c0-2.761 2.2386-5 5-5h4z' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.icon--corners {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='m11 11h3v1h-2v2h-1z' fill-opacity='.8'/%3E%3Cpath d='m18 11h3v3h-1v-2h-2z' fill-opacity='.8'/%3E%3Cpath d='m12 20v-2h-1v3h3v-1z' fill-opacity='.8'/%3E%3Cpath d='m21 18v3h-3v-1h2v-2z' fill-opacity='.8'/%3E%3Cpath d='m11 43h3v1h-2v2h-1z' fill-opacity='.3'/%3E%3Cpath d='m18 43h3v3h-1v-2h-2z' fill-opacity='.3'/%3E%3Cpath d='m12 52v-2h-1v3h3v-1z' fill-opacity='.3'/%3E%3Cpath d='m21 50v3h-3v-1h2v-2z' fill-opacity='.3'/%3E%3C/g%3E%3Cpath d='m11 75h3v1h-2v2h-1z' fill='%2318a0fb'/%3E%3Cpath d='m18 75h3v3h-1v-2h-2z' fill='%2318a0fb'/%3E%3Cpath d='m12 84v-2h-1v3h3v-1z' fill='%2318a0fb'/%3E%3Cpath d='m21 82v3h-3v-1h2v-2z' fill='%2318a0fb'/%3E%3Cpath d='m11 107h3v1h-2v2h-1z' fill='%23fff'/%3E%3Cpath d='m18 107h3v3h-1v-2h-2z' fill='%23fff'/%3E%3Cpath d='m12 116v-2h-1v3h3v-1z' fill='%23fff'/%3E%3Cpath d='m21 114v3h-3v-1h2v-2z' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.icon--dist-horiz-spacing {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m11 22.5v-13h-1v13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 9.5v13h-1v-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 12.5v7h-2v-7z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11 54.5v-13h-1v13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 41.5v13h-1v-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 44.5v7h-2v-7z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m11 86.5v-13h-1v13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 73.5v13h-1v-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 76.5v7h-2v-7z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11 118.5v-13h-1v13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 105.5v13h-1v-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 108.5v7h-2v-7z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--dist-vert-spacing {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9.5 10h13v1h-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.5 15h7v2h-7z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 21h-13v1h13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9.5 42h13v1h-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.5 47h7v2h-7z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 53h-13v1h13z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9.5 74h13v1h-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.5 79h7v2h-7z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 85h-13v1h13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9.5 106h13v1h-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12.5 111h7v2h-7z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 117h-13v1h13z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--draft {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m10 9h7.7071l4.2929 4.2929v9.7071h-12zm1 1v12h10v-8h-4v-4zm7 .7071 2.2929 2.2929h-2.2929z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 41h7.7071l4.2929 4.2929v9.7071h-12zm1 1v12h10v-8h-4v-4zm7 .7071 2.2929 2.2929h-2.2929z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 73h7.7071l4.2929 4.2929v9.7071h-12zm1 1v12h10v-8h-4v-4zm7 .7071 2.2929 2.2929h-2.2929z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 105h7.7071l4.2929 4.293v9.707h-12zm1 1v12h10v-8h-4v-4zm7 .707 2.2929 2.293h-2.2929z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--effects {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m16.5 8.5h-1v3h1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.0503 10.3431-.7071.7072 2.1213 2.1213.7071-.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m21.657 11.0503-.7071-.7071-2.1214 2.1213.7071.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8.5 15.5v1h3v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20.5 15.5v1h3v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.1716 19.5355-.7071-.7071-2.1213 2.1214.7071.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5354 18.8284-.7071.7071 2.1213 2.1214.7071-.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.5 20.5h-1v3h1z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 15.9979c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5zm-1 0c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.5 40.5h-1v3h1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11.0503 42.3431-.7071.7072 2.1213 2.1213.7071-.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m21.657 43.0503-.7071-.7071-2.1214 2.1213.7071.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m8.5 47.5v1h3v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20.5 47.5v1h3v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13.1716 51.5355-.7071-.7071-2.1213 2.1214.7071.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5354 50.8284-.7071.7071 2.1213 2.1214.7071-.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.5 52.5h-1v3h1z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 47.9979c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5zm-1 0c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m16.5 72.5h-1v3h1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.0503 74.3431-.7071.7072 2.1213 2.1213.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m21.657 75.0503-.7071-.7071-2.1214 2.1213.7071.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8.5 79.5v1h3v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20.5 79.5v1h3v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.1716 83.5355-.7071-.7071-2.1213 2.1214.7071.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5354 82.8284-.7071.7071 2.1213 2.1214.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.5 84.5h-1v3h1z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 79.9979c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5zm-1 0c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.5 104.5h-1v3h1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m11.0503 106.343-.7071.707 2.1213 2.122.7071-.708z\" fill=\"%23fff\"/%3E%3Cpath d=\"m21.657 107.05-.7071-.707-2.1214 2.121.7071.708z\" fill=\"%23fff\"/%3E%3Cpath d=\"m8.5 111.5v1h3v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20.5 111.5v1h3v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m13.1716 115.536-.7071-.708-2.1213 2.122.7071.707z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5354 114.828-.7071.708 2.1213 2.121.7071-.707z\" fill=\"%23fff\"/%3E%3Cpath d=\"m16.5 116.5h-1v3h1z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 111.998c0 1.381-1.1193 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm-1 0c0 .828-.6716 1.5-1.5 1.5s-1.5-.672-1.5-1.5c0-.829.6716-1.5 1.5-1.5s1.5.671 1.5 1.5z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--ellipses {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m11.5 16c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5zm6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5zm4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m11.5 48c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5zm6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5zm4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m11.5 80c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5zm6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5zm4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z' fill='%2318a0fb'/%3E%3Cpath d='m11.5 112c0 .828-.6716 1.5-1.5 1.5-.82843 0-1.5-.672-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.672 1.5 1.5zm6 0c0 .828-.6716 1.5-1.5 1.5s-1.5-.672-1.5-1.5.6716-1.5 1.5-1.5 1.5.672 1.5 1.5zm4.5 1.5c.8284 0 1.5-.672 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5.6716 1.5 1.5 1.5z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\"); }\n\n.icon--eyedropper {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m22.4473 9.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.4473 41.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.4473 73.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.4473 105.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--frame {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m11 24v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11 56v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11 88v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11 120v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--group {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m17.4 9h-2.8v1h2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20.9 22h1.1v-1.1h1v2.1h-2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 14.6v2.8h-1v-2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 11.1v-1.1h-1.1v-1h2.1v2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 14.6v2.8h1v-2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 11.1v-1.1h1.1v-1h-2.1v2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 20.9h1v1.1h1.1v1h-2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.4 22h-2.8v1h2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.4 41h-2.8v1h2.8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20.9 54h1.1v-1.1h1v2.1h-2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 46.6v2.8h-1v-2.8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 43.1v-1.1h-1.1v-1h2.1v2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 46.6v2.8h1v-2.8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 43.1v-1.1h1.1v-1h-2.1v2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 52.9h1v1.1h1.1v1h-2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17.4 54h-2.8v1h2.8z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m17.4 73h-2.8v1h2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20.9 86h1.1v-1.1h1v2.1h-2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 78.6v2.8h-1v-2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 75.1v-1.1h-1.1v-1h2.1v2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 78.6v2.8h1v-2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 75.1v-1.1h1.1v-1h-2.1v2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 84.9h1v1.1h1.1v1h-2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.4 86h-2.8v1h2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.4 105h-2.8v1h2.8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20.9 118h1.1v-1.1h1v2.1h-2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 110.6v2.8h-1v-2.8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 107.1v-1.1h-1.1v-1h2.1v2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 110.6v2.8h1v-2.8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 107.1v-1.1h1.1v-1h-2.1v2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 116.9h1v1.1h1.1v1h-2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17.4 118h-2.8v1h2.8z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--hidden {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m21.5085 15.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m21.5085 47.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m21.5085 79.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m21.5085 111.801c.5554-.527 1.0351-1.134 1.421-1.801h-1.1842c-1.2655 1.814-3.3673 3-5.7454 3-2.3782 0-4.48-1.186-5.7454-3h-1.18428c.38597.667.86567 1.274 1.42108 1.801l-1.59482 1.595.70712.707 1.6573-1.657c.7108.523 1.5112.932 2.3742 1.199l-.6171 2.221.9636.268.6262-2.255c.452.08.9172.121 1.3921.121.4748 0 .9399-.041 1.392-.121l.6261 2.255.9636-.268-.617-2.221c.863-.267 1.6635-.676 2.3743-1.199l1.6576 1.657.7071-.707z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--hyperlink {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m13.5 18c1.9593 0 3.6262-1.2522 4.2439-3h1.0491c-.653 2.3085-2.7754 4-5.293 4-3.0376 0-5.5-2.4624-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.6915 5.293 4h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18.5 23c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.2522-4.2439 3h-1.0491c.653-2.3085 2.7754-4 5.293-4 3.0376 0 5.5 2.4624 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.6915-5.293-4h1.0491c.6177 1.7478 2.2846 3 4.2439 3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.5 50c1.9593 0 3.6262-1.2522 4.2439-3h1.0491c-.653 2.3085-2.7754 4-5.293 4-3.0376 0-5.5-2.4624-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.6915 5.293 4h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18.5 55c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.2522-4.2439 3h-1.0491c.653-2.3085 2.7754-4 5.293-4 3.0376 0 5.5 2.4624 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.6915-5.293-4h1.0491c.6177 1.7478 2.2846 3 4.2439 3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m13.5 82c1.9593 0 3.6262-1.2522 4.2439-3h1.0491c-.653 2.3085-2.7754 4-5.293 4-3.0376 0-5.5-2.4624-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.6915 5.293 4h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18.5 87c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.2522-4.2439 3h-1.0491c.653-2.3085 2.7754-4 5.293-4 3.0376 0 5.5 2.4624 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.6915-5.293-4h1.0491c.6177 1.7478 2.2846 3 4.2439 3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.5 114c1.9593 0 3.6262-1.252 4.2439-3h1.0491c-.653 2.309-2.7754 4-5.293 4-3.0376 0-5.5-2.462-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.691 5.293 4h-1.0491c-.6177-1.748-2.2846-3-4.2439-3-2.4853 0-4.5 2.015-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m18.5 119c2.4853 0 4.5-2.015 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.252-4.2439 3h-1.0491c.653-2.309 2.7754-4 5.293-4 3.0376 0 5.5 2.462 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.691-5.293-4h1.0491c.6177 1.748 2.2846 3 4.2439 3z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--image {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m20.6667 13.6667c0 1.2886-1.0447 2.3333-2.3334 2.3333-1.2886 0-2.3333-1.0447-2.3333-2.3333 0-1.2887 1.0447-2.3334 2.3333-2.3334 1.2887 0 2.3334 1.0447 2.3334 2.3334zm-1 0c0 .7363-.597 1.3333-1.3334 1.3333-.7363 0-1.3333-.597-1.3333-1.3333 0-.7364.597-1.3334 1.3333-1.3334.7364 0 1.3334.597 1.3334 1.3334z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 9c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1v-12c0-.55228-.4477-1-1-1zm12 1h-12v7.7929l3.0833-3.0833 7.2905 7.2904h1.6262zm-12 12v-2.7929l3.0833-3.0833 5.8763 5.8762z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20.6667 45.6667c0 1.2886-1.0447 2.3333-2.3334 2.3333-1.2886 0-2.3333-1.0447-2.3333-2.3333 0-1.2887 1.0447-2.3334 2.3333-2.3334 1.2887 0 2.3334 1.0447 2.3334 2.3334zm-1 0c0 .7363-.597 1.3333-1.3334 1.3333-.7363 0-1.3333-.597-1.3333-1.3333 0-.7364.597-1.3334 1.3333-1.3334.7364 0 1.3334.597 1.3334 1.3334z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 41c-.55228 0-1 .4477-1 1v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1v-12c0-.5523-.4477-1-1-1zm12 1h-12v7.7929l3.0833-3.0833 7.2905 7.2904h1.6262zm-12 12v-2.7929l3.0833-3.0833 5.8763 5.8762z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m20.6667 77.6667c0 1.2886-1.0447 2.3333-2.3334 2.3333-1.2886 0-2.3333-1.0447-2.3333-2.3333 0-1.2887 1.0447-2.3334 2.3333-2.3334 1.2887 0 2.3334 1.0447 2.3334 2.3334zm-1 0c0 .7363-.597 1.3333-1.3334 1.3333-.7363 0-1.3333-.597-1.3333-1.3333 0-.7364.597-1.3334 1.3333-1.3334.7364 0 1.3334.597 1.3334 1.3334z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 73c-.55228 0-1 .4477-1 1v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1v-12c0-.5523-.4477-1-1-1zm12 1h-12v7.7929l3.0833-3.0833 7.2905 7.2904h1.6262zm-12 12v-2.7929l3.0833-3.0833 5.8763 5.8762z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20.6667 109.667c0 1.288-1.0447 2.333-2.3334 2.333-1.2886 0-2.3333-1.045-2.3333-2.333 0-1.289 1.0447-2.334 2.3333-2.334 1.2887 0 2.3334 1.045 2.3334 2.334zm-1 0c0 .736-.597 1.333-1.3334 1.333-.7363 0-1.3333-.597-1.3333-1.333 0-.737.597-1.334 1.3333-1.334.7364 0 1.3334.597 1.3334 1.334z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 105c-.55228 0-1 .448-1 1v12c0 .552.44772 1 1 1h12c.5523 0 1-.448 1-1v-12c0-.552-.4477-1-1-1zm12 1h-12v7.793l3.0833-3.083 7.2905 7.29h1.6262zm-12 12v-2.793l3.0833-3.083 5.8763 5.876z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--import {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 23v-6h-1v5h-12v-12h5v-1h-6v14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 15c0-1.656.4715-2.8894 1.2911-3.7089.8195-.8196 2.0529-1.2911 3.7089-1.2911h1v-1h-1c-1.844 0-3.3606.52854-4.4161 1.5839-1.0554 1.0555-1.5839 2.5721-1.5839 4.4161v2.2929l-1.6464-1.6465-.7072.7072 2.8536 2.8535 2.8536-2.8535-.7072-.7072-1.6464 1.6465z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 55v-6h-1v5h-12v-12h5v-1h-6v14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 47c0-1.656.4715-2.8894 1.2911-3.7089.8195-.8196 2.0529-1.2911 3.7089-1.2911h1v-1h-1c-1.844 0-3.3606.5285-4.4161 1.5839-1.0554 1.0555-1.5839 2.5721-1.5839 4.4161v2.2929l-1.6464-1.6465-.7072.7072 2.8536 2.8535 2.8536-2.8535-.7072-.7072-1.6464 1.6465z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 87v-6h-1v5h-12v-12h5v-1h-6v14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 79c0-1.656.4715-2.8894 1.2911-3.7089.8195-.8196 2.0529-1.2911 3.7089-1.2911h1v-1h-1c-1.844 0-3.3606.5285-4.4161 1.5839-1.0554 1.0555-1.5839 2.5721-1.5839 4.4161v2.2929l-1.6464-1.6465-.7072.7072 2.8536 2.8535 2.8536-2.8535-.7072-.7072-1.6464 1.6465z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 119v-6h-1v5h-12v-12h5v-1h-6v14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 111c0-1.656.4715-2.889 1.2911-3.709.8195-.82 2.0529-1.291 3.7089-1.291h1v-1h-1c-1.844 0-3.3606.529-4.4161 1.584-1.0554 1.055-1.5839 2.572-1.5839 4.416v2.293l-1.6464-1.647-.7072.708 2.8536 2.853 2.8536-2.853-.7072-.708-1.6464 1.647z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--instance {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m7.00037 15.9999 8.99983-8.99999 8.9999 8.99999-8.9999 9.0001zm8.99983 7.6565 7.6564-7.6565-7.6564-7.65648-7.65634 7.65648z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m7.00037 47.9999 8.99983-9 8.9999 9-8.9999 9.0001zm8.99983 7.6565 7.6564-7.6565-7.6564-7.6565-7.65634 7.6565z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m7.00037 79.9999 8.99983-9 8.9999 9-8.9999 9.0001zm8.99983 7.6565 7.6564-7.6565-7.6564-7.6565-7.65634 7.6565z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m7.00037 112 8.99983-9 8.9999 9-8.9999 9zm8.99983 7.656 7.6564-7.656-7.6564-7.657-7.65634 7.657z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--layout-align-bottom {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m14.5 10v10h-2v-10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 22v1h-13v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5 20v-6h-2v6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 42v10h-2v-10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 54v1h-13v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5 52v-6h-2v6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m14.5 74v10h-2v-10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 86v1h-13v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5 84v-6h-2v6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 106v10h-2v-10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 118v1h-13v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5 116v-6h-2v6z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-align-horiz-cent {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16.5 9.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.5 41.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.5 73.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.5 105.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-align-left {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 22.5h-1v-13h1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 14.5h-10v-2h10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 19.5h6v-2h-6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 54.5h-1v-13h1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 46.5h-10v-2h10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 51.5h6v-2h-6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 86.5h-1v-13h1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 78.5h-10v-2h10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 83.5h6v-2h-6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 118.5h-1v-13h1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 110.5h-10v-2h10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 115.5h6v-2h-6z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-align-right {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m22 22.5h1v-13h-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 14.5h10v-2h-10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 19.5h-6v-2h6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 54.5h1v-13h-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 46.5h10v-2h-10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 51.5h-6v-2h6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m22 86.5h1v-13h-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 78.5h10v-2h-10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 83.5h-6v-2h6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 118.5h1v-13h-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 110.5h10v-2h-10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 115.5h-6v-2h6z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-align-top {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m14.5 22v-10h-2v10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 10v-1h-13v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5 12v6h-2v-6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 54v-10h-2v10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 42v-1h-13v1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5 44v6h-2v-6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m14.5 86v-10h-2v10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 74v-1h-13v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5 76v6h-2v-6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 118v-10h-2v10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 106v-1h-13v1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5 108v6h-2v-6z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-align-vert-cent {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m12.5 15.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.5 47.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.5 79.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.5 111.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-grid-columns {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9 9h3v14h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 9h3v14h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 9h3v14h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 41h3v14h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 41h3v14h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 41h3v14h-3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9 73h3v14h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 73h3v14h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 73h3v14h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 105h3v14h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 105h3v14h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 105h3v14h-3z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-grid-rows {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9 9h14v3h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 14.5h14v3h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 20h14v3h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 41h14v3h-14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 46.5h14v3h-14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 52h14v3h-14z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9 73h14v3h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 78.5h14v3h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 84h14v3h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 105h14v3h-14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 110.5h14v3h-14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 116h14v3h-14z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--layout-grid-uniform {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9 9h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 9h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 9h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 14.5h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 14.5h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 14.5h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 20h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 20h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 20h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 41h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 41h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 41h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 46.5h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 46.5h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 46.5h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 52h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 52h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 52h3v3h-3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9 73h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 73h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 73h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 78.5h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 78.5h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 78.5h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 84h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 84h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 84h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 105h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 105h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 105h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 110.5h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 110.5h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 110.5h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 116h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 116h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 116h3v3h-3z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--library {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m7 12.0898s.87687-2.0898 4.5-2.0898c2.0378 0 3.2069.6611 3.8398 1.2397.3516.3214.5378.6174.6154.7603h.0896c.0776-.1429.2638-.4389.6154-.7603.6329-.5786 1.802-1.2397 3.8398-1.2397 3.6231 0 4.5 2.0898 4.5 2.0898v8.9102h-1.4875c-2.3815-1.0176-4.408-.681-5.8864.1813-.3793.2213-.7148.4985-.995.8187h-1.2579c-.2803-.3225-.6164-.6017-.997-.8246-1.4773-.8654-3.006-1.1939-5.3887-.1754h-1.9875zm8.5.387h-.4192c-.0024.0011-.0024.0012-.0024.0013l.0006.0012.001.0024.0018.0042.0028.0065c.0015.0033.0023.0049.0022.0048-.0001-.0002-.0034-.0071-.0102-.0197-.0137-.0252-.0414-.0729-.0862-.1361-.0893-.126-.246-.313-.4955-.507-.4849-.3769-1.3904-.8344-2.9949-.8344s-2.50998.4575-2.99494.8344c-.24946.194-.4062.381-.49549.507l-.00957.0137v7.6449h.78741c1.21949-.4959 2.29809-.6896 3.30659-.6161 1.0638.0775 1.964.4462 2.7877.9287.2176.1275.4243.2702.6183.4266zm1 8.2688v-8.2688h.4192c.0024.0011.0024.0012.0024.0013l-.0006.0012-.001.0024-.0018.0042-.0028.0065-.0022.0047c.0001-.0002.0034-.007.0102-.0196.0137-.0252.0414-.0729.0862-.1361.0893-.126.246-.313.4955-.507.4849-.3769 1.3904-.8344 2.9949-.8344s2.51.4575 2.9949.8344c.2495.194.4062.381.4955.507l.0096.0137v7.6449h-.2884c-2.5969-1.0455-4.8842-.6771-6.5894.3176-.219.1278-.427.2709-.6222.428z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m7 44.0898s.87687-2.0898 4.5-2.0898c2.0378 0 3.2069.6611 3.8398 1.2397.3516.3214.5378.6174.6154.7603h.0896c.0776-.1429.2638-.4389.6154-.7603.6329-.5786 1.802-1.2397 3.8398-1.2397 3.6231 0 4.5 2.0898 4.5 2.0898v8.9102h-1.4875c-2.3815-1.0176-4.408-.681-5.8864.1813-.3793.2213-.7148.4985-.995.8187h-1.2579c-.2803-.3225-.6164-.6017-.997-.8246-1.4773-.8654-3.006-1.1939-5.3887-.1754h-1.9875zm8.5.387h-.4192c-.0024.0011-.0024.0012-.0024.0013l.0006.0012.001.0024.0018.0042.0028.0065c.0015.0033.0023.0049.0022.0048-.0001-.0002-.0034-.0071-.0102-.0197-.0137-.0252-.0414-.0729-.0862-.1361-.0893-.126-.246-.313-.4955-.507-.4849-.3769-1.3904-.8344-2.9949-.8344s-2.50998.4575-2.99494.8344c-.24946.194-.4062.381-.49549.507l-.00957.0137v7.6449h.78741c1.21949-.4959 2.29809-.6896 3.30659-.6161 1.0638.0775 1.964.4462 2.7877.9287.2176.1275.4243.2702.6183.4266zm1 8.2688v-8.2688h.4192c.0024.0011.0024.0012.0024.0013l-.0006.0012-.001.0024-.0018.0042-.0028.0065-.0022.0047c.0001-.0002.0034-.007.0102-.0196.0137-.0252.0414-.0729.0862-.1361.0893-.126.246-.313.4955-.507.4849-.3769 1.3904-.8344 2.9949-.8344s2.51.4575 2.9949.8344c.2495.194.4062.381.4955.507l.0096.0137v7.6449h-.2884c-2.5969-1.0455-4.8842-.6771-6.5894.3176-.219.1278-.427.2709-.6222.428z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m7 76.0898s.87687-2.0898 4.5-2.0898c2.0378 0 3.2069.6611 3.8398 1.2397.3516.3214.5378.6174.6154.7603h.0896c.0776-.1429.2638-.4389.6154-.7603.6329-.5786 1.802-1.2397 3.8398-1.2397 3.6231 0 4.5 2.0898 4.5 2.0898v8.9102h-1.4875c-2.3815-1.0176-4.408-.681-5.8864.1813-.3793.2213-.7148.4985-.995.8187h-1.2579c-.2803-.3225-.6164-.6017-.997-.8246-1.4773-.8654-3.006-1.1939-5.3887-.1754h-1.9875zm8.5.387h-.4192c-.0024.0011-.0024.0012-.0024.0013l.0006.0012.001.0024.0018.0042.0028.0065c.0015.0033.0023.0049.0022.0048-.0001-.0002-.0034-.0071-.0102-.0197-.0137-.0252-.0414-.0729-.0862-.1361-.0893-.126-.246-.313-.4955-.507-.4849-.3769-1.3904-.8344-2.9949-.8344s-2.50998.4575-2.99494.8344c-.24946.194-.4062.381-.49549.507l-.00957.0137v7.6449h.78741c1.21949-.4959 2.29809-.6896 3.30659-.6161 1.0638.0775 1.964.4462 2.7877.9287.2176.1275.4243.2702.6183.4266zm1 8.2688v-8.2688h.4192c.0024.0011.0024.0012.0024.0013l-.0006.0012-.001.0024-.0018.0042-.0028.0065-.0022.0047c.0001-.0002.0034-.007.0102-.0196.0137-.0252.0414-.0729.0862-.1361.0893-.126.246-.313.4955-.507.4849-.3769 1.3904-.8344 2.9949-.8344s2.51.4575 2.9949.8344c.2495.194.4062.381.4955.507l.0096.0137v7.6449h-.2884c-2.5969-1.0455-4.8842-.6771-6.5894.3176-.219.1278-.427.2709-.6222.428z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m7 108.09s.87687-2.09 4.5-2.09c2.0378 0 3.2069.661 3.8398 1.24.3516.321.5378.617.6154.76h.0896c.0776-.143.2638-.439.6154-.76.6329-.579 1.802-1.24 3.8398-1.24 3.6231 0 4.5 2.09 4.5 2.09v8.91h-1.4875c-2.3815-1.018-4.408-.681-5.8864.181-.3793.222-.7148.499-.995.819h-1.2579c-.2803-.322-.6164-.602-.997-.825-1.4773-.865-3.006-1.193-5.3887-.175h-1.9875zm8.5.387h-.4192c-.0024.001-.0024.001-.0024.001l.0006.001.001.003.0018.004.0028.006c.0015.004.0023.005.0022.005s-.0034-.007-.0102-.019c-.0137-.026-.0414-.073-.0862-.137-.0893-.126-.246-.313-.4955-.507-.4849-.377-1.3904-.834-2.9949-.834s-2.50998.457-2.99494.834c-.24946.194-.4062.381-.49549.507l-.00957.014v7.645h.78741c1.21949-.496 2.29809-.69 3.30659-.616 1.0638.077 1.964.446 2.7877.929.2176.127.4243.27.6183.426zm1 8.269v-8.269h.4192c.0024.001.0024.001.0024.001l-.0006.001-.001.003-.0018.004-.0028.006-.0022.005c.0001 0 .0034-.007.0102-.019.0137-.026.0414-.073.0862-.137.0893-.126.246-.313.4955-.507.4849-.377 1.3904-.834 2.9949-.834s2.51.457 2.9949.834c.2495.194.4062.381.4955.507l.0096.014v7.645h-.2884c-2.5969-1.045-4.8842-.677-6.5894.318-.219.127-.427.271-.6222.428z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--link-broken {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m18 14v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19 18h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18 46v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19 50h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m18 78v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19 82h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18 110v-2c0-1.105-.8954-2-2-2s-2 .895-2 2v2h-1v-2c0-1.657 1.3431-3 3-3s3 1.343 3 3v2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19 114h-1v2c0 1.105-.8954 2-2 2s-2-.895-2-2v-2h-1v2c0 1.657 1.3431 3 3 3s3-1.343 3-3z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--link-connected {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='m16 10c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2z' fill-opacity='.8'/%3E%3Cpath d='m18 18h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2z' fill-opacity='.8'/%3E%3Cpath d='m15.5 13v6h1v-6z' fill-opacity='.8'/%3E%3Cpath d='m16 42c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2z' fill-opacity='.3'/%3E%3Cpath d='m18 50h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2z' fill-opacity='.3'/%3E%3Cpath d='m15.5 45v6h1v-6z' fill-opacity='.3'/%3E%3C/g%3E%3Cpath d='m16 74c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2z' fill='%2318a0fb'/%3E%3Cpath d='m18 82h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2z' fill='%2318a0fb'/%3E%3Cpath d='m15.5 77v6h1v-6z' fill='%2318a0fb'/%3E%3Cpath d='m16 106c1.1046 0 2 .895 2 2v2h1v-2c0-1.657-1.3431-3-3-3s-3 1.343-3 3v2h1v-2c0-1.105.8954-2 2-2z' fill='%23fff'/%3E%3Cpath d='m18 114h1v2c0 1.657-1.3431 3-3 3s-3-1.343-3-3v-2h1v2c0 1.105.8954 2 2 2s2-.895 2-2z' fill='%23fff'/%3E%3Cpath d='m15.5 109v6h1v-6z' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.icon--list-detailed {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m12 10h-2v1h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 20h-2v1h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 15h2v1h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 10h-8v1h8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14 20h8v1h-8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 15h-8v1h8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 42h-2v1h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 52h-2v1h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 47h2v1h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 42h-8v1h8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14 52h8v1h-8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 47h-8v1h8z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m12 74h-2v1h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 84h-2v1h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 79h2v1h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 74h-8v1h8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14 84h8v1h-8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 79h-8v1h8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 106h-2v1h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 116h-2v1h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 111h2v1h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 106h-8v1h8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14 116h8v1h-8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 111h-8v1h8z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--list {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 10h-14v1h14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 15.5h14v1h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 21h14v1h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 42h-14v1h14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 47.5h14v1h-14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 53h14v1h-14z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 74h-14v1h14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 79.5h14v1h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 85h14v1h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 106h-14v1h14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 111.5h14v1h-14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 117h14v1h-14z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--lock-unlocked {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m18 15h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18 47h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18 79h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18 111h.5c.2761 0 .5.224.5.5v5c0 .276-.2239.5-.5.5h-6c-.2761 0-.5-.224-.5-.5v-5c0-.276.2239-.5.5-.5h4.5v-2.5c0-1.381 1.1193-2.5 2.5-2.5s2.5 1.119 2.5 2.5v1.5h-1v-1.5c0-.828-.6716-1.5-1.5-1.5s-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--lock {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m13.5 15v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.5 47v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13.5 79v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.5 111v-1.5c0-1.381 1.1193-2.5 2.5-2.5s2.5 1.119 2.5 2.5v1.5h.5c.2761 0 .5.224.5.5v5c0 .276-.2239.5-.5.5h-6c-.2761 0-.5-.224-.5-.5v-5c0-.276.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.828.6716-1.5 1.5-1.5s1.5.672 1.5 1.5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--mask {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16 7.99893c-4.4188 0-8.00098 3.58217-8.00098 8.00107 0 4.4188 3.58218 8.001 8.00098 8.001 4.4189 0 8.0011-3.5822 8.0011-8.001 0-4.4189-3.5822-8.00107-8.0011-8.00107zm-1.965 1.27953c.6234-.18195 1.2828-.27953 1.965-.27953 3.8666 0 7.0011 3.13447 7.0011 7.00107 0 3.8665-3.1345 7.001-7.0011 7.001-.6815 0-1.3402-.0974-1.9631-.279 2.0967-1.4961 3.4638-3.949 3.4638-6.7211 0-2.7729-1.3679-5.2264-3.4657-6.72244z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 39.9989c-4.4188 0-8.00098 3.5822-8.00098 8.0011 0 4.4188 3.58218 8.001 8.00098 8.001 4.4189 0 8.0011-3.5822 8.0011-8.001 0-4.4189-3.5822-8.0011-8.0011-8.0011zm-1.965 1.2796c.6234-.182 1.2828-.2796 1.965-.2796 3.8666 0 7.0011 3.1345 7.0011 7.0011 0 3.8665-3.1345 7.001-7.0011 7.001-.6815 0-1.3402-.0974-1.9631-.279 2.0967-1.4961 3.4638-3.949 3.4638-6.7211 0-2.7729-1.3679-5.2264-3.4657-6.7224z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 71.9989c-4.4188 0-8.00098 3.5822-8.00098 8.0011 0 4.4188 3.58218 8.001 8.00098 8.001 4.4189 0 8.0011-3.5822 8.0011-8.001 0-4.4189-3.5822-8.0011-8.0011-8.0011zm-1.965 1.2796c.6234-.182 1.2828-.2796 1.965-.2796 3.8666 0 7.0011 3.1345 7.0011 7.0011 0 3.8665-3.1345 7.001-7.0011 7.001-.6815 0-1.3402-.0974-1.9631-.279 2.0967-1.4961 3.4638-3.949 3.4638-6.7211 0-2.7729-1.3679-5.2264-3.4657-6.7224z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 103.999c-4.4188 0-8.00098 3.582-8.00098 8.001s3.58218 8.001 8.00098 8.001c4.4189 0 8.0011-3.582 8.0011-8.001s-3.5822-8.001-8.0011-8.001zm-1.965 1.279c.6234-.181 1.2828-.279 1.965-.279 3.8666 0 7.0011 3.134 7.0011 7.001s-3.1345 7.001-7.0011 7.001c-.6815 0-1.3402-.097-1.9631-.279 2.0967-1.496 3.4638-3.949 3.4638-6.721 0-2.773-1.3679-5.227-3.4657-6.723z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--minus {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m21.5 16.5h-11v-1h11z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m21.5 48.5h-11v-1h11z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m21.5 80.5h-11v-1h11z' fill='%2318a0fb'/%3E%3Cpath d='m21.5 112.5h-11v-1h11z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\"); }\n\n.icon--node-connect {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m15.5 9h-6.5v-1h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3.3535 3.3536-3.3535 3.3536-.7072-.7072 2.1465-2.1464h-5.3429c-.1635.8057-.7145 1.4706-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 41h-6.5v-1h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3.3535 3.3536-3.3535 3.3536-.7072-.7072 2.1465-2.1464h-5.3429c-.1635.8057-.7145 1.4706-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 73h-6.5v-1h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3.3535 3.3536-3.3535 3.3536-.7072-.7072 2.1465-2.1464h-5.3429c-.1635.8057-.7145 1.4706-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 105h-6.5v-1h7.5v5.708c.7355.321 1.2865.986 1.45 1.792h5.3429l-2.1465-2.146.7072-.708 3.3535 3.354-3.3535 3.354-.7072-.708 2.1465-2.146h-5.3429c-.1635.806-.7145 1.471-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.119-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.672 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--play {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m13 10.0979 9.4434 5.9021-9.4434 5.9021zm1 1.8042v8.1958l6.5566-4.0979z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13 42.0979 9.4434 5.9021-9.4434 5.9021zm1 1.8042v8.1958l6.5566-4.0979z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13 74.0979 9.4434 5.9021-9.4434 5.9021zm1 1.8042v8.1958l6.5566-4.0979z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13 106.098 9.4434 5.902-9.4434 5.902zm1 1.804v8.196l6.5566-4.098z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--plus {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 47.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 79.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 111.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--recent {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m15 12v5h5v-1h-4v-4z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 16c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15 44v5h5v-1h-4v-4z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 48c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m15 76v5h5v-1h-4v-4z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 80c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15 108v5h5v-1h-4v-4z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 112c0 4.418-3.5817 8-8 8s-8-3.582-8-8 3.5817-8 8-8 8 3.582 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--reset-instance {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m6.79291 15.5 8.70709-8.70709 8.7071 8.70709-.7071.7071-8-7.99998-7.29288 7.29288 7.29288 7.2929 4-4 .7071.7071-4.7071 4.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.7071 15h2.2929c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072c.9049-.9048 1.4645-2.1548 1.4645-3.5355 0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.8535-2.8536 2.8535-2.8535.7072.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m6.79291 47.5 8.70709-8.7071 8.7071 8.7071-.7071.7071-8-8-7.29288 7.2929 7.29288 7.2929 4-4 .7071.7071-4.7071 4.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.7071 47h2.2929c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072c.9049-.9048 1.4645-2.1548 1.4645-3.5355 0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.8535-2.8536 2.8535-2.8535.7072.7071z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m6.79291 79.5 8.70709-8.7071 8.7071 8.7071-.7071.7071-8-8-7.29288 7.2929 7.29288 7.2929 4-4 .7071.7071-4.7071 4.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.7071 79h2.2929c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072c.9049-.9048 1.4645-2.1548 1.4645-3.5355 0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.8535-2.8536 2.8535-2.8535.7072.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m6.79291 111.5 8.70709-8.707 8.7071 8.707-.7071.707-8-8-7.29288 7.293 7.29288 7.293 4-4 .7071.707-4.7071 4.707z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.7071 111h2.2929c3.3137 0 6 2.686 6 6 0 1.657-.6716 3.157-1.7574 4.243l-.7071-.707c.9049-.905 1.4645-2.155 1.4645-3.536 0-2.761-2.2386-5-5-5h-2.2929l1.6465 1.646-.7072.708-2.8535-2.854 2.8535-2.854.7072.708z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--resize-to-fit {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m8.64648 9.35356 3.64642 3.64644h-2.2929v1h4v-4h-1v2.2929l-3.64641-3.64645z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.7071 13 3.6465-3.64644-.7071-.70711-3.6465 3.64645v-2.2929h-1v4h4v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.7071 19 3.6465 3.6465-.7071.7071-3.6465-3.6465v2.2929h-1v-4h4v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.2929 19-3.64642 3.6465.70711.7071 3.64641-3.6465v2.2929h1v-4h-4v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8.64648 41.3536 3.64642 3.6464h-2.2929v1h4v-4h-1v2.2929l-3.64641-3.6464z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.7071 45 3.6465-3.6464-.7071-.7071-3.6465 3.6464v-2.2929h-1v4h4v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.7071 51 3.6465 3.6465-.7071.7071-3.6465-3.6465v2.2929h-1v-4h4v1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.2929 51-3.64642 3.6465.70711.7071 3.64641-3.6465v2.2929h1v-4h-4v1z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m8.64648 73.3536 3.64642 3.6464h-2.2929v1h4v-4h-1v2.2929l-3.64641-3.6464z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.7071 77 3.6465-3.6464-.7071-.7071-3.6465 3.6464v-2.2929h-1v4h4v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.7071 83 3.6465 3.6465-.7071.7071-3.6465-3.6465v2.2929h-1v-4h4v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.2929 83-3.64642 3.6465.70711.7071 3.64641-3.6465v2.2929h1v-4h-4v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8.64648 105.354 3.64642 3.646h-2.2929v1h4v-4h-1v2.293l-3.64641-3.647z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.7071 109 3.6465-3.646-.7071-.708-3.6465 3.647v-2.293h-1v4h4v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.7071 115 3.6465 3.646-.7071.708-3.6465-3.647v2.293h-1v-4h4v1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12.2929 115-3.64642 3.646.70711.708 3.64641-3.647v2.293h1v-4h-4v1z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--resolve-filled {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16 23.9999c4.4183 0 8-3.5817 8-8s-3.5817-8.00002-8-8.00002-8 3.58172-8 8.00002 3.5817 8 8 8zm3.9111-9.6345-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 55.9999c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm3.9111-9.6345-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 87.9999c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm3.9111-9.6345-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 120c4.4183 0 8-3.582 8-8s-3.5817-8-8-8-8 3.582-8 8 3.5817 8 8 8zm3.9111-9.635-.8222-.73-3.6125 4.064-2.5875-2.588-.7778.778 3.4125 3.412z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--resolve {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m19.9111 14.3654-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 15.9999c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8.00002 8-8.00002 8 3.58172 8 8.00002zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7.00002 7-7.00002 7 3.13402 7 7.00002z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19.9111 46.3654-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 47.9999c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m19.9111 78.3654-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 79.9999c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19.9111 110.365-.8222-.73-3.6125 4.064-2.5875-2.588-.7778.778 3.4125 3.412z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 112c0 4.418-3.5817 8-8 8s-8-3.582-8-8 3.5817-8 8-8 8 3.582 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--restore {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m11.2071 11 1.1465 1.1465-.7072.7071-2.35351-2.3536 2.35351-2.35355.7072.70711-1.1465 1.14644h4.7929c3.8017.0344 6.873 3.1554 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.3223 2.6664 6 5.9365 6s5.9365-2.6777 5.9365-6c0-3.3215-2.6651-5.9987-5.9341-6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14 14v5h5v-1h-4v-4z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.2071 43 1.1465 1.1465-.7072.7071-2.35351-2.3536 2.35351-2.3535.7072.7071-1.1465 1.1464h4.7929c3.8017.0344 6.873 3.1554 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.3223 2.6664 6 5.9365 6s5.9365-2.6777 5.9365-6c0-3.3215-2.6651-5.9987-5.9341-6z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14 46v5h5v-1h-4v-4z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m11.2071 75 1.1465 1.1465-.7072.7071-2.35351-2.3536 2.35351-2.3535.7072.7071-1.1465 1.1464h4.7929c3.8017.0344 6.873 3.1554 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.3223 2.6664 6 5.9365 6s5.9365-2.6777 5.9365-6c0-3.3215-2.6651-5.9987-5.9341-6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14 78v5h5v-1h-4v-4z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.2071 107 1.1465 1.146-.7072.708-2.35351-2.354 2.35351-2.354.7072.708-1.1465 1.146h4.7929c3.8017.034 6.873 3.155 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.322 2.6664 6 5.9365 6s5.9365-2.678 5.9365-6-2.6651-5.999-5.9341-6z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14 110v5h5v-1h-4v-4z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--return {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m11.7072 14 2.6464 2.6464-.7071.7071-3.85353-3.8535 3.85353-3.85358.7071.70708-2.6464 2.6465h3.7929c3.5761 0 6.5 2.9238 6.5 6.5v1.5h-1v-1.5c0-3.0239-2.4762-5.5-5.5-5.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.7072 46 2.6464 2.6464-.7071.7071-3.85353-3.8535 3.85353-3.8536.7071.7071-2.6464 2.6465h3.7929c3.5761 0 6.5 2.9238 6.5 6.5v1.5h-1v-1.5c0-3.0239-2.4762-5.5-5.5-5.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11.7072 78 2.6464 2.6464-.7071.7071-3.85353-3.8535 3.85353-3.8536.7071.7071-2.6464 2.6465h3.7929c3.5761 0 6.5 2.9238 6.5 6.5v1.5h-1v-1.5c0-3.0239-2.4762-5.5-5.5-5.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.7072 110 2.6464 2.646-.7071.708-3.85353-3.854 3.85353-3.854.7071.708-2.6464 2.646h3.7929c3.5761 0 6.5 2.924 6.5 6.5v1.5h-1v-1.5c0-3.024-2.4762-5.5-5.5-5.5z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--search-large {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m18.8744 19.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072zm1.1256-4.5815c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18.8744 51.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072zm1.1256-4.5815c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18.8744 83.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072zm1.1256-4.5815c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18.8744 115.582c-1.0453.884-2.3975 1.418-3.8744 1.418-3.3137 0-6-2.686-6-6s2.6863-6 6-6 6 2.686 6 6c0 1.477-.5336 2.829-1.4185 3.874l4.2721 4.272-.7072.708zm1.1256-4.582c0 2.761-2.2386 5-5 5s-5-2.239-5-5 2.2386-5 5-5 5 2.239 5 5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--search {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m18.3972 18.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18.3972 50.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18.3972 82.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18.3972 114.605c-.7793.625-1.7687.998-2.8455.998-2.5138 0-4.5517-2.037-4.5517-4.551s2.0379-4.552 4.5517-4.552c2.5139 0 4.5517 2.038 4.5517 4.552 0 1.077-.3739 2.066-.999 2.846l3.2491 3.249-.7071.707zm.7062-3.553c0 1.961-1.5901 3.551-3.5517 3.551-1.9615 0-3.5517-1.59-3.5517-3.551 0-1.962 1.5902-3.552 3.5517-3.552 1.9616 0 3.5517 1.59 3.5517 3.552z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--share {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m20 9.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.6803 2.1175 3.2164-1.80889.5833-3.1175 2.2806-3.1175 4.2836v1.5h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 41.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.6803 2.1175 3.2164-1.80889.5833-3.1175 2.2806-3.1175 4.2836v1.5h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 73.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.6803 2.1175 3.2164-1.80889.5833-3.1175 2.2806-3.1175 4.2836v1.5h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 105.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.68 2.1175 3.216-1.1371.367-2.0766 1.174-2.6175 2.22-.5409-1.046-1.4803-1.853-2.6175-2.22 1.2455-.536 2.1175-1.774 2.1175-3.216 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.68 2.1175 3.216-1.80889.584-3.1175 2.281-3.1175 4.284v1.5h17v-1.5c0-2.003-1.3086-3.7-3.1175-4.284 1.2455-.536 2.1175-1.774 2.1175-3.216 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.381 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.119 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.119-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.381 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.119 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.119-2.5-2.5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--smiley {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m15.9999 20c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5 14.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.125 15c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 16c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15.9999 52c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5 46.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13.125 47c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 48c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m15.9999 84c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5 78.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.125 79c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 80c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15.9999 116c-1.8638 0-3.4299-1.275-3.8739-3h1.0446c.4119 1.165 1.5231 2 2.8293 2 1.3063 0 2.4175-.835 2.8293-2h1.0447c-.444 1.725-2.0101 3-3.874 3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5 110.125c0 .483-.3918.875-.875.875s-.875-.392-.875-.875.3918-.875.875-.875.875.392.875.875z\" fill=\"%23fff\"/%3E%3Cpath d=\"m13.125 111c.4832 0 .875-.392.875-.875s-.3918-.875-.875-.875-.875.392-.875.875.3918.875.875.875z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 112c0 4.418-3.5817 8-8 8s-8-3.582-8-8 3.5817-8 8-8 8 3.582 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--star-off {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m18 14-2-6-2 6-6-.0141 5 4.0141-2 6 5-3.7945 5 3.7945-2-6 5-4.0141zm3.1487.9926-3.8689.0091-1.2798-3.8394-1.2798 3.8394-3.8689-.0091 3.3175 2.6633-1.1976 3.5928 3.0288-2.2985 3.0288 2.2985-1.1976-3.5928z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18 46-2-6-2 6-6-.0141 5 4.0141-2 6 5-3.7945 5 3.7945-2-6 5-4.0141zm3.1487.9926-3.8689.0091-1.2798-3.8394-1.2798 3.8394-3.8689-.0091 3.3175 2.6633-1.1976 3.5928 3.0288-2.2985 3.0288 2.2985-1.1976-3.5928z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18 78-2-6-2 6-6-.0141 5 4.0141-2 6 5-3.7945 5 3.7945-2-6 5-4.0141zm3.1487.9926-3.8689.0091-1.2798-3.8394-1.2798 3.8394-3.8689-.0091 3.3175 2.6633-1.1976 3.5928 3.0288-2.2985 3.0288 2.2985-1.1976-3.5928z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18 110-2-6-2 6-6-.014 5 4.014-2 6 5-3.794 5 3.794-2-6 5-4.014zm3.1487.993-3.8689.009-1.2798-3.84-1.2798 3.84-3.8689-.009 3.3175 2.663-1.1976 3.593 3.0288-2.299 3.0288 2.299-1.1976-3.593z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--star-on {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16 8 2 6 6-.0141-5 4.0141 2 6-5-3.7945-5 3.7945 2-6-5-4.0141 6 .0141z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 40 2 6 6-.0141-5 4.0141 2 6-5-3.7945-5 3.7945 2-6-5-4.0141 6 .0141z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 72 2 6 6-.0141-5 4.0141 2 6-5-3.7945-5 3.7945 2-6-5-4.0141 6 .0141z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 104 2 6 6-.014-5 4.014 2 6-5-3.794-5 3.794 2-6-5-4.014 6 .014z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--stroke-weight {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 10h12v1h-12z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 14h12v2h-12z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 19h-12v3h12z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 42h12v1h-12z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 46h12v2h-12z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 51h-12v3h12z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 74h12v1h-12z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 78h12v2h-12z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 83h-12v3h12z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 106h12v1h-12z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 110h12v2h-12z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 115h-12v3h12z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--styles {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m11.5 13c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.5 13c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19 20.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.5 19c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.5 45c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17.5 45c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19 52.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11.5 51c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m11.5 77c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.5 77c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19 84.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.5 83c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.5 109c0 .828.6716 1.5 1.5 1.5s1.5-.672 1.5-1.5-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17.5 109c0 .828.6716 1.5 1.5 1.5s1.5-.672 1.5-1.5-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19 116.5c-.8284 0-1.5-.672-1.5-1.5s.6716-1.5 1.5-1.5 1.5.672 1.5 1.5-.6716 1.5-1.5 1.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m11.5 115c0 .828.6716 1.5 1.5 1.5s1.5-.672 1.5-1.5-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--tidy-up-grid {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 10h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 10h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 15h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 15h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 20h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 20h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 10h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15 15h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 20h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 42h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 42h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 47h-2v2h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 47h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 52h-2v2h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 52h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 42h-2v2h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15 47h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 52h-2v2h2z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 74h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 74h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 79h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 79h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 84h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 84h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 74h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15 79h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 84h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 106h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 106h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 111h-2v2h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 111h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 116h-2v2h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 116h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 106h-2v2h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15 111h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 116h-2v2h2z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--tidy-up-list-horiz {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 22.5v-13h2v13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15 22.5v-13h2v13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 9.5v13h2v-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 54.5v-13h2v13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15 54.5v-13h2v13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 41.5v13h2v-13z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 86.5v-13h2v13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15 86.5v-13h2v13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 73.5v13h2v-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 118.5v-13h2v13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15 118.5v-13h2v13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 105.5v13h2v-13z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--tidy-up-list-vert {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9.5 10h13v2h-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9.5 15h13v2h-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 20h-13v2h13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9.5 42h13v2h-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9.5 47h13v2h-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 52h-13v2h13z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9.5 74h13v2h-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9.5 79h13v2h-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 84h-13v2h13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9.5 106h13v2h-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9.5 111h13v2h-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 116h-13v2h13z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--timer {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m19 8h-6v-1h6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.5 17v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 12.6492 1.5278-1.5279-2.1213-2.1213-1.4818 1.4818c-1.3085-.93298-2.9098-1.4818-4.6393-1.4818-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508zm.2854 4.3508c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.6471.6471c1.0815 1.2322 1.7372 2.8474 1.7372 4.6157zm-1.0077-5.3004.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19 40h-6v-1h6z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.5 49v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 44.6492 1.5278-1.5279-2.1213-2.1213-1.4818 1.4818c-1.3085-.933-2.9098-1.4818-4.6393-1.4818-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508zm.2854 4.3508c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.6471.6471c1.0815 1.2322 1.7372 2.8474 1.7372 4.6157zm-1.0077-5.3004.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m19 72h-6v-1h6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.5 81v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 76.6492 1.5278-1.5279-2.1213-2.1213-1.4818 1.4818c-1.3085-.933-2.9098-1.4818-4.6393-1.4818-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508zm.2854 4.3508c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.6471.6471c1.0815 1.2322 1.7372 2.8474 1.7372 4.6157zm-1.0077-5.3004.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19 104h-6v-1h6z\" fill=\"%23fff\"/%3E%3Cpath d=\"m16.5 113v-5h-1v5c0 .276.2239.5.5.5s.5-.224.5-.5z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 108.649 1.5278-1.528-2.1213-2.121-1.4818 1.482c-1.3085-.933-2.9098-1.482-4.6393-1.482-4.4183 0-8 3.582-8 8s3.5817 8 8 8 8-3.582 8-8c0-1.604-.4723-3.098-1.2854-4.351zm.2854 4.351c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.656 4.6157 1.737l.6471.647c1.0815 1.232 1.7372 2.848 1.7372 4.616zm-1.0077-5.3.1288.128.7071-.707-.7071-.707-.7013.702c.2005.184.3916.379.5725.584z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--trash {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m14 18.5v-4h1v4z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 18.5v-4h1v4z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 10.5c0-1.10457-.8954-2-2-2h-2c-1.1046 0-2 .89543-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1zm-4-1c-.5523 0-1 .44772-1 1h4c0-.55228-.4477-1-1-1zm5 2h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m14 50.5v-4h1v4z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 50.5v-4h1v4z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 42.5c0-1.1046-.8954-2-2-2h-2c-1.1046 0-2 .8954-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1zm-4-1c-.5523 0-1 .4477-1 1h4c0-.5523-.4477-1-1-1zm5 2h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m14 82.5v-4h1v4z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 82.5v-4h1v4z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 74.5c0-1.1046-.8954-2-2-2h-2c-1.1046 0-2 .8954-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1zm-4-1c-.5523 0-1 .4477-1 1h4c0-.5523-.4477-1-1-1zm5 2h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m14 114.5v-4h1v4z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 114.5v-4h1v4z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 106.5c0-1.105-.8954-2-2-2h-2c-1.1046 0-2 .895-2 2h-3v1h1v10c0 1.105.8954 2 2 2h6c1.1046 0 2-.895 2-2v-10h1v-1zm-4-1c-.5523 0-1 .448-1 1h4c0-.552-.4477-1-1-1zm5 2h-8v10c0 .552.4477 1 1 1h6c.5523 0 1-.448 1-1z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--type {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m10 10h11v3h-1v-2h-4v9.9986h1.9442v1h-4.8884v-1h1.9442v-9.9986h-4v2h-1z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 42h11v3h-1v-2h-4v9.9986h1.9442v1h-4.8884v-1h1.9442v-9.9986h-4v2h-1z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 74h11v3h-1v-2h-4v9.9986h1.9442v1h-4.8884v-1h1.9442v-9.9986h-4v2h-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 106h11v3h-1v-2h-4v9.999h1.9442v1h-4.8884v-1h1.9442v-9.999h-4v2h-1z\" fill=\"%23fff\"/%3E%3C/svg%3E'); }\n\n.icon--vector-handles {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m10.5 13.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.5826.7615 1 1.4146 1s1.2087-.4174 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.5826-.7615-1-1.4146-1s-1.2087.4174-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.0858-1.08579 1.0858 1.08579 1.0858zm11 0-1.0858-1.0858-1.0858 1.0858 1.0858 1.0858z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10.5 45.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.5826.7615 1 1.4146 1s1.2087-.4174 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.5826-.7615-1-1.4146-1s-1.2087.4174-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.0858-1.08579 1.0858 1.08579 1.0858zm11 0-1.0858-1.0858-1.0858 1.0858 1.0858 1.0858z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10.5 77.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.5826.7615 1 1.4146 1s1.2087-.4174 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.5826-.7615-1-1.4146-1s-1.2087.4174-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.0858-1.08579 1.0858 1.08579 1.0858zm11 0-1.0858-1.0858-1.0858 1.0858 1.0858 1.0858z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10.5 109.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.583.7615 1 1.4146 1s1.2087-.417 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.583-.7615-1-1.4146-1s-1.2087.417-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.086-1.08579 1.086 1.08579 1.086zm11 0-1.0858-1.086-1.0858 1.086 1.0858 1.086z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n\n.icon--visible {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m16.0004 18c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 12c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.0004 50c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 44c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m16.0004 82c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 76c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.0004 114c1.1045 0 2-.895 2-2s-.8955-2-2-2c-1.1046 0-2 .895-2 2s.8954 2 2 2z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 108c2.878 0 5.3774 1.621 6.6349 4-1.2575 2.379-3.7569 4-6.6349 4-2.8781 0-5.3775-1.621-6.63499-4 1.25749-2.379 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.194-5.4784-3 1.1562-1.806 3.1785-3 5.4784-3 2.2998 0 4.3221 1.194 5.4783 3-1.1562 1.806-3.1785 3-5.4783 3z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'); }\n\n.icon--warning {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16 38 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 6 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 70 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 102 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E'); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/product.ts":
/*!***************************!*\
  !*** ./src/js/product.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const textbox = document.getElementById('product-link');
const product = document.getElementById('product');
const properties = document.querySelector('.properties');
const propertiesPhotos = document.querySelector('.properties__photos');
const cors = 'https://figma-proxy-server.herokuapp.com/';
textbox.addEventListener('keyup', function (e) {
    (e.keyCode === 13) && product.click();
    (this.value.match('miinto.')) ?
        product.disabled = false :
        product.disabled = true;
});
textbox.addEventListener('search', function () {
    (this.value.match('miinto.')) ?
        product.disabled = false :
        product.disabled = true;
});
product.onclick = () => {
    const link = textbox.value;
    const reqlink = cors + link;
    const imagesList = document.querySelector('.properties__photos');
    const propertiesList = document.querySelector('.properties__list');
    fetch(reqlink)
        .then(res => res.text())
        .then(textHtml => {
        let html = document.createElement('html');
        html.innerHTML = textHtml;
        function $(selector) {
            let element = html.querySelectorAll(selector);
            if (element.length === 1) {
                return html.querySelector(selector);
            }
            else if (element.length > 1) {
                return element;
            }
            else {
                return null;
            }
        }
        if ($('.p-product-page__product-name') !== null) {
            imagesList.innerHTML = '';
            propertiesList.innerHTML = '';
            function appendItem(item, description) {
                const p = document.createElement('p');
                p.innerHTML = `${description ? description : ''}:
                    <span>${item.innerText.trim()}</span>`;
                propertiesList.appendChild(p);
            }
            function appendValue(item, description) {
                const p = document.createElement('p');
                p.innerHTML = `${description ? description : ''}: <span>${item.value}</span>`;
                propertiesList.appendChild(p);
            }
            function appendImage(item) {
                const img = document.createElement('img');
                img.src = item;
                imagesList.appendChild(img);
                img.addEventListener('click', function () {
                    console.log('Replace image');
                    fetch(cors + item)
                        .then(response => response.arrayBuffer())
                        .then((result) => {
                        parent.postMessage({
                            pluginMessage: {
                                type: 'replace-img',
                                value: new Uint8Array(result)
                            }
                        }, "*");
                    });
                });
            }
            const selectors = [
                {
                    selector: '.p-product-page__product-brand',
                    label: 'Brand'
                },
                {
                    selector: '.p-product-page__product-name',
                    label: 'Name'
                },
                {
                    selector: '.js-product-price',
                    label: 'Price'
                },
                {
                    selector: '.js-product-price-before',
                    label: 'Price before'
                },
                {
                    selector: '.js-product-discount-value',
                    label: 'Discount'
                },
                {
                    selector: 'input[name="productId"]',
                    label: 'Product ID',
                    value: true
                },
                {
                    selector: 'input[name="amount"]',
                    label: 'Amount',
                    value: true
                },
                {
                    selector: 'input[name="color"]',
                    label: 'Color',
                    value: true
                },
                {
                    selector: '.p-product-page__product-description-counter',
                    label: 'Description'
                }
            ];
            selectors.forEach((item) => {
                const tag = $(item.selector);
                const label = item.label;
                item.hasOwnProperty('value') ?
                    appendValue(tag, label) :
                    appendItem(tag, item.label);
            });
            const sizes = $('.c-product-select__size');
            const images = $('.js-main-image-slide');
            if (images.length) {
                for (let i = 0; i < images.length; i++) {
                    let data = images[i].getAttribute('data-lazy');
                    data = data.slice(0, data.indexOf('?'));
                    appendImage(data);
                }
            }
            else {
                appendImage(images);
            }
            if (sizes.length) {
                for (let i = 0; i < sizes.length; i++) {
                    appendItem(sizes[i], 'Size');
                }
            }
            else {
                appendItem(sizes, 'Size');
            }
            properties.querySelectorAll('p').forEach(item => {
                item.addEventListener('click', () => {
                    parent.postMessage({
                        pluginMessage: {
                            type: 'replace-text',
                            value: item.querySelector('span').innerText
                        }
                    }, '*');
                });
            });
        }
        else {
            parent.postMessage({
                pluginMessage: {
                    type: 'notify',
                    value: "Try another link 🤓"
                }
            }, '*');
        }
    });
};


/***/ }),

/***/ "./src/js/products.ts":
/*!****************************!*\
  !*** ./src/js/products.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const input = document.getElementById('search-products');
const countries = document.querySelector('.list.list--countries');
const categories = document.querySelector('.list.list--categories');
const create = document.getElementById('get-products');
const searchResults = document.querySelector('.search__list');
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let proxyurl = 'https://figma-proxy-server.herokuapp.com/';
let country = 'pl';
let category = 'new-k';
let search = '';
// Display notification on button
function notifyButton(text) {
    create.innerText = text;
    setTimeout(() => {
        create.innerText = 'Populate';
    }, 700);
}
// Toggle spinner
function toggleSpinner() {
    const main = document.querySelector('.main');
    const tabs = document.querySelector('.tabs');
    if (!create.disabled) {
        create.disabled = true;
        create.innerHTML = `<span class='loading-spinner'></span>`;
        main.classList.add('disabled--wawing');
        tabs.classList.add('disabled--wawing');
    }
    else {
        create.disabled = false;
        create.innerText = 'Populate';
        main.classList.remove('disabled--wawing');
        tabs.classList.remove('disabled--wawing');
    }
}
;
// Check server time responses
(function () {
    let isReceived = false;
    fetch(proxyurl)
        .then(({ status }) => {
        (status === 200) ? isReceived = true : proxyurl = corsAnywhere;
    })
        .catch(() => proxyurl = corsAnywhere);
    setTimeout(() => {
        if (!isReceived) {
            proxyurl = corsAnywhere;
            console.log('Server switched to: ', proxyurl);
        }
    }, 1500);
    setTimeout(() => {
        if (!isReceived) {
            proxyurl = 'https://figma-proxy-server.herokuapp.com/';
            console.log('Server switched back to: ', proxyurl);
        }
    }, 10000);
})();
// Rename layer
(function () {
    document.querySelector('.list.list--tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('list__list-item')) {
            const text = e.target.innerText;
            parent.postMessage({
                pluginMessage: {
                    type: 'rename-layer',
                    value: text
                }
            }, '*');
        }
    });
})();
// Countries toggler
(function () {
    input.addEventListener('keyup', (e) => {
        if (e.target.value.length !== 0) {
            countries.classList.add('disabled');
        }
        else {
            countries.classList.remove('disabled');
        }
    });
})();
// Clean search field
input.addEventListener('search', () => {
    searchResults.classList.remove('search__list--block');
    countries.classList.remove('disabled');
    categories.classList.remove('disabled');
});
// Input
input.addEventListener('keyup', function (e) {
    if (this.value && !this.value.match('miinto.')) {
        search = `search?q=${this.value}`;
        let searchQuery = `https://www.miinto.${country}/actions/_get_search_suggestions.php?q=${input.value}`;
        countries.classList.remove('disabled');
        categories.classList.add('disabled');
        if (this.value.length > 2) {
            searchResults.classList.add('search__list--block');
            fetch(proxyurl + searchQuery)
                .then(result => result.json())
                .then(result => {
                searchResults.innerHTML = '';
                result.forEach(({ terms, type }) => {
                    const li = document.createElement('li');
                    const span = document.createElement('span');
                    li.className = 'search__list-item';
                    li.innerText = terms;
                    span.className = 'search__list-span';
                    span.innerText = type;
                    li.appendChild(span);
                    li.addEventListener('click', () => {
                        input.value = terms;
                        searchResults.classList.remove('search__list--block');
                    });
                    searchResults.appendChild(li);
                });
            });
        }
    }
    else if (this.value && this.value.match('miinto.')) {
        countries.classList.add('disabled');
        searchResults.classList.remove('search__list--block');
    }
    else {
        searchResults.classList.remove('search__list--block');
        categories.classList.remove('disabled');
    }
    if (e.keyCode === 13) {
        searchResults.classList.remove('search__list--block');
        create.click();
    }
});
// Select country
countries.addEventListener('click', function () {
    this.querySelectorAll('.list__list-item').forEach(item => {
        const input = item.querySelector('input');
        if (input.checked) {
            item.classList.add('list__list-item--checked');
            country = input.value;
            notifyButton(`miinto.${input.value} – Selected`);
        }
        else {
            item.classList.remove('list__list-item--checked');
        }
    });
});
// Select category
categories.addEventListener('click', function () {
    this.querySelectorAll('.list__list-item').forEach(item => {
        const input = item.querySelector('input');
        if (input.checked) {
            item.classList.add('list__list-item--checked');
            category = input.value;
        }
        else {
            item.classList.remove('list__list-item--checked');
        }
    });
});
function populateItems() {
    const request = (search.length > 0) ?
        `https://www.miinto.${country}/${search}` :
        `https://www.miinto.${country}/${category}`;
    const fetchParams = {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
    };
    let imgArray = [];
    toggleSpinner();
    searchResults.classList.remove('search__list--block');
    fetch(proxyurl + request, fetchParams)
        .then((response) => {
        return response.json();
    })
        .then((result) => {
        result.products.list.forEach((item, index) => {
            fetch(proxyurl + item.photo_url)
                .then(response => response.arrayBuffer())
                .then(img => imgArray[index] = new Uint8Array(img));
        });
    })
        .then(() => {
        fetch(proxyurl + request, fetchParams)
            .then(response => response.json())
            .then(response => {
            parent.postMessage({
                pluginMessage: {
                    type: 'populate',
                    images: imgArray,
                    response
                }
            }, '*');
        });
    });
}
create.onclick = () => {
    parent.postMessage({
        pluginMessage: {
            type: 'check-selection'
        }
    }, '*');
};
onmessage = (event) => {
    switch (event.data.pluginMessage) {
        case 'toggleSpinner':
            toggleSpinner();
            break;
        case 'populate':
            populateItems();
            break;
    }
};


/***/ }),

/***/ "./src/js/ui.ts":
/*!**********************!*\
  !*** ./src/js/ui.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_figma_plugin_ds_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/figma-plugin-ds.scss */ "./src/scss/figma-plugin-ds.scss");
/* harmony import */ var _scss_figma_plugin_ds_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_figma_plugin_ds_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./src/js/products.ts");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_products__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/js/product.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product__WEBPACK_IMPORTED_MODULE_2__);



document.querySelector('.tabs').addEventListener('click', function () {
    this.querySelectorAll('.tabs__link').forEach(item => {
        item.classList.toggle('tabs__link--active');
    });
    document.querySelectorAll('.products').forEach(item => {
        item.classList.toggle('products--active');
    });
});


/***/ }),

/***/ "./src/scss/figma-plugin-ds.scss":
/*!***************************************!*\
  !*** ./src/scss/figma-plugin-ds.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./figma-plugin-ds.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/figma-plugin-ds.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });