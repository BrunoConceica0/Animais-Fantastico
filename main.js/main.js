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

/***/ "./script/modules/accordionList.js":
/*!*****************************************!*\
  !*** ./script/modules/accordionList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordinList = document.querySelectorAll(list);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n  togleAccordion(item) {\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n    item.classList.toggle(this.activeClass);\r\n  }\r\n  // adicionar os evnetos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordinList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => {\r\n        this.togleAccordion(item);\r\n      });\r\n    });\r\n  }\r\n  // iniciar funcão\r\n  init() {\r\n    if (this.accordinList.length) {\r\n      this.addAccordionEvent();\r\n      // adicionar o primeiro item\r\n      this.togleAccordion(this.accordinList[0]);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/accordionList.js?");

/***/ }),

/***/ "./script/modules/animacaoAoScroll.js":
/*!********************************************!*\
  !*** ./script/modules/animacaoAoScroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n\r\n  function windowScroll() {\r\n    sections.forEach((section) => {\r\n      const metadeTela = window.innerHeight * 0.6;\r\n      const sectionsTop = section.getBoundingClientRect().top - metadeTela;\r\n      if (sectionsTop < 0) section.classList.add(\"ativo\");\r\n      else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n  window.addEventListener(\"scroll\", windowScroll);\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/animacaoAoScroll.js?");

/***/ }),

/***/ "./script/modules/dropdow-menu.js":
/*!****************************************!*\
  !*** ./script/modules/dropdow-menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inintDropDowMenu)\n/* harmony export */ });\nfunction inintDropDowMenu() {}\r\nconst dropDownMenu = document.querySelectorAll(\"[data-dropdown]\");\r\nfunction outisideClick(element, event, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n  if (!element.hasAttribute(outside, \"\")) {\r\n    event.forEach((userEvent) => {\r\n      html.removeEventListener(userEvent, handleOutsideClick);\r\n    });\r\n    html.addEventListener(\"click\", handleOutsideClick);\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\r\nfunction handleClick(event) {\r\n  event.preventDefault(); // prevene que ao click acontece alguam coisa\r\n  this.classList.add(\"active\"); // acitve é do css para dar display:block; no submenu\r\n  outisideClick(this, [\"touchstart\", \"click\"], () => {\r\n    // crie um function detro da function\r\n    this.classList.remove(\"active\"); //  remove a classe do active para quando click, o evento ocorra apenas uma vez no site\r\n  });\r\n}\r\n//   [\"touchstart\", \"click\"] são dois evento com o mesmo objecivo porem um pc pc e outro para smartfone\r\ndropDownMenu.forEach((menu) => {\r\n  [\"touchstart\", \"click\"].forEach((userEvent) => {\r\n    menu.addEventListener(userEvent, handleClick);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/dropdow-menu.js?");

/***/ }),

/***/ "./script/modules/fetch-animais.js":
/*!*****************************************!*\
  !*** ./script/modules/fetch-animais.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inintFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _numero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numero.js */ \"./script/modules/numero.js\");\n\r\nfunction inintFetchAnimais() {\r\n  const urlAnimais = \"./animais.json\";\r\n  function createrAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\".numero-animal\");\r\n    div.innerHTML = `<h3 class=\"texto\">${animal.especie}</h3><span class=\"numero-detalhe\" data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const numeroGrid = document.querySelector(\".numero-grid\");\r\n      const animaisJson = await animaisResponse.json();\r\n      animaisJson.forEach((animal) => {\r\n        const divAnimal = createrAnimal(animal);\r\n        numeroGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_numero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch {\r\n      console.log(Error(\"Algum coisa deu errado!\"));\r\n    }\r\n  }\r\n\r\n  fetchAnimais(urlAnimais);\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/fetch-animais.js?");

/***/ }),

/***/ "./script/modules/fetch-bitcoin.js":
/*!*****************************************!*\
  !*** ./script/modules/fetch-bitcoin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((r) =>\r\n      r.json().then((btc) => {\r\n        const doe = document.querySelector(\".btc-preco\");\r\n        doe.innerText = (100 / btc.BRL.sell).toFixed(4);\r\n      })\r\n    )\r\n    .catch(() => {\r\n      console.log(Error(\"Algum de errado\"));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./script/modules/modal.js":
/*!*********************************!*\
  !*** ./script/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(abrir, fechar, containerModal) {\r\n    this.abrir = document.querySelector(abrir);\r\n    this.fechar = document.querySelector(fechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n    //  bind  this ao callback para fazer referencia ao objeto da classe\r\n    this.eventToggoleModal = this.eventToggoleModal.bind(this);\r\n    this.containerModalClose = this.containerModalClose.bind(this);\r\n  }\r\n\r\n  // abri ou fecha o modal\r\n  abrirModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n  // adiconar o evento de toggle ao modal\r\n  eventToggoleModal(event) {\r\n    event.preventDefault();\r\n    this.abrirModal();\r\n  }\r\n  // fechar o modal\r\n  fecharModal() {\r\n    this.containerModal.classList.remove(\"ativo\");\r\n  }\r\n  // fechar o modal ao clicar para fora\r\n  containerModalClose(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.fecharModal(event);\r\n    }\r\n  }\r\n  addModalEvent() {\r\n    this.fechar.addEventListener(\"click\", this.eventToggoleModal);\r\n    this.abrir.addEventListener(\"click\", this.eventToggoleModal);\r\n    this.containerModal.addEventListener(\"click\", this.containerModalClose);\r\n  }\r\n  init() {\r\n    if (this.fechar && this.abrir && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/modal.js?");

/***/ }),

/***/ "./script/modules/navegacao-por-tab.js":
/*!*********************************************!*\
  !*** ./script/modules/navegacao-por-tab.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabContent = document.querySelectorAll(menu);\r\n    this.tabAnimais = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const show = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, show);\r\n  }\r\n  // adiciona os eventos das tab\r\n  addTabNavEvent() {\r\n    this.tabAnimais.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => {\r\n        this.activeTab(index);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabAnimais.length && this.tabContent.length) {\r\n      // ative o primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/navegacao-por-tab.js?");

/***/ }),

/***/ "./script/modules/numero.js":
/*!**********************************!*\
  !*** ./script/modules/numero.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumero)\n/* harmony export */ });\nfunction initNumero() {\r\n  function animaisNumero() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      let start = 0;\r\n      const incremento = Math.floor(total / 100);\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n  let observa;\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\".active\")) {\r\n      observa.disconnect();\r\n      animaisNumero();\r\n    }\r\n  }\r\n  observa = new MutationObserver(handleMutation);\r\n\r\n  const observaTarget = document.querySelector(\".numero\");\r\n  observa.observe(observaTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/numero.js?");

/***/ }),

/***/ "./script/modules/scroll-suave.js":
/*!****************************************!*\
  !*** ./script/modules/scroll-suave.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollSuave = this.scrollSuave.bind(this);\r\n  }\r\n\r\n  scrollSuave(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href).offsetTop;\r\n    window.scrollTo({ ...this.options, top: section });\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollSuave);\r\n    });\r\n  }\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/scroll-suave.js?");

/***/ }),

/***/ "./script/modules/tooltip.js":
/*!***********************************!*\
  !*** ./script/modules/tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltip = document.querySelectorAll(\"[data-tooltip]\");\r\n  function criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}\"px\"`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}\"px\"`;\r\n    },\r\n  };\r\n\r\n  function onMouseOver(event) {\r\n    const tooltipBox = criarTooltipBox(this);\r\n    tooltipBox.style.top = `${event.pageY}\"px\"`;\r\n    tooltipBox.style.left = `${event.pageX}\"px\"`;\r\n\r\n    const onMouseLeave = {\r\n      element: \"\",\r\n      tooltipBox: \"\",\r\n      handleEvent() {\r\n        this.tooltipBox.remove();\r\n      },\r\n    };\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n  }\r\n\r\n  tooltip.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/modules/tooltip.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./script/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./script/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdow_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdow-menu.js */ \"./script/modules/dropdow-menu.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./script/modules/scroll-suave.js\");\n/* harmony import */ var _modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navegacao-por-tab.js */ \"./script/modules/navegacao-por-tab.js\");\n/* harmony import */ var _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordionList.js */ \"./script/modules/accordionList.js\");\n/* harmony import */ var _modules_animacaoAoScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animacaoAoScroll.js */ \"./script/modules/animacaoAoScroll.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./script/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./script/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSauve = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nconst accordion = new _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\" [data-anime='acction'] dt\");\r\nconst tabNav = new _modules_navegacao_por_tab_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  \"[data-tab='content'] section\",\r\n  \"[data-tab='menu'] li\"\r\n);\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  \"[data-modal='abrir']\",\r\n  \"[data-modal='fechar']\",\r\n  \"[data-modal='container']\"\r\n);\r\n\r\nmodal.init();\r\ntabNav.init();\r\nscrollSauve.init();\r\naccordion.init();\r\n\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_dropdow_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_animacaoAoScroll_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n// import $ from \"jquery\";\r\n\n\n//# sourceURL=webpack://animais-fantastico/./script/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;