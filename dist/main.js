/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gameBoard.js":
/*!**********************!*\
  !*** ./gameBoard.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard)\n/* harmony export */ });\nconst gameBoard = () => {\r\n    const board = document.querySelector('.main-board')\r\n    let startLocation = [0, 0]          //Default location of Knight\r\n    let coordinatesArray = []\r\n\r\n\r\n    for (let rows = 0; rows < 8; rows++) {\r\n        let boxColor;\r\n        let boxWhite = rows % 2 === 0 ? true : false\r\n        let rowCoord = rows\r\n\r\n        for (let columns = 0; columns < 8; columns++) {\r\n            const cell = document.createElement('div')\r\n            let columnCoord = columns\r\n\r\n            if (boxWhite) {\r\n                boxColor = columns % 2 === 0 ? 'black' : 'white'\r\n            } else {\r\n                boxColor = columns % 2 === 0 ? 'white' : 'black'\r\n            }\r\n\r\n\r\n            coordinatesArray.push([rowCoord, columnCoord]);\r\n            cell.dataset.coordinates = JSON.stringify([rowCoord, columnCoord]);\r\n\r\n\r\n            cell.style.backgroundColor = boxColor\r\n            cell.classList.add('grid-cell')\r\n            board.appendChild(cell)\r\n        }\r\n    }\r\n\r\n    const cells = document.querySelectorAll('.grid-cell')\r\n    cells.forEach(cell => {\r\n        let cellNode = JSON.parse(cell.dataset.coordinates);\r\n\r\n\r\n        if (arraysEqual(startLocation, cellNode)) {\r\n\r\n            let knightImg = document.createElement('img');\r\n            cell.style.backgroundColor = '#d2d0d091'\r\n            knightImg.src = '/img/horse-knight-chess-png.webp';\r\n            cell.appendChild(knightImg);\r\n        }\r\n    });\r\n\r\n    // Function to compare two arrays for equality\r\n    function arraysEqual(arr1, arr2) {\r\n        if (arr1.length !== arr2.length) {\r\n            return false;\r\n        }\r\n        for (let i = 0; i < arr1.length; i++) {\r\n            if (arr1[i] !== arr2[i]) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://knights-travails/./gameBoard.js?");

/***/ }),

/***/ "./src/gameAlgorithm.js":
/*!******************************!*\
  !*** ./src/gameAlgorithm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chessSquare: () => (/* binding */ chessSquare)\n/* harmony export */ });\n\r\n\r\nconst chessSquare = (x, y) => {\r\n    const xPosition = x\r\n    const yPosition = y\r\n    let predecessor\r\n\r\n\r\n    //Possible moves of Knight\r\n    const knightMoves = [\r\n        [1, 2], [1, -2],\r\n        [2, 1], [2, -1],\r\n        [-1, 2], [-1, -2],\r\n        [-2, 1], [-2, -1]\r\n    ]\r\n\r\n    const getPredecessor = () => predecessor\r\n    const setPredecessor = (newPredecessor) => {\r\n        predecessor = predecessor || newPredecessor\r\n    }\r\n\r\n    const coordName = () => `${x}, ${y}`\r\n\r\n    const possibleMoves = () => {\r\n        return knightMoves\r\n            .map((offset) => newSquareForm(offset[0], offset[1]))\r\n            .filter(square => square !== undefined)     //in order to remove cells that extend beyond the boundaries of the chessboard\r\n    }\r\n\r\n    const newSquareForm = (xOffset, yOffset) => {\r\n        const [newXPosition, newYPosition] = [xPosition + xOffset, yPosition + yOffset]\r\n        if (0 <= newXPosition && newXPosition < 8 && 0 <= newYPosition && yPosition < 8) {\r\n            return chessSquare(newXPosition, newYPosition)\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://knights-travails/./src/gameAlgorithm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameBoard */ \"./gameBoard.js\");\n/* harmony import */ var _gameAlgorithm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameAlgorithm */ \"./src/gameAlgorithm.js\");\n\r\n\r\n\r\n(0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard)()\r\n;(0,_gameAlgorithm__WEBPACK_IMPORTED_MODULE_1__.chessSquare)()\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;