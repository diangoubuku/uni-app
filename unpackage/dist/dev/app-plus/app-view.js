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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/main.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {

    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 8);
    if (style0.__inject__) style0.__inject__(context);

  }
  typeof injectStyles === 'function' && injectStyles();

  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!*************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages.json?{"type":"view"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
window.__uniConfig = { "window": { "navigationBarTextStyle": "black", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8", "navigationStyle": "custom", "bounce": "none" } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}




__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!********************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/index/index.vue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/user/Documents/HBuilderProjects/self_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-uni-view", { attrs: { _i: 0 } }, [_vm._v("index")])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/user/Documents/HBuilderProjects/self_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!***************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 9);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/user/Documents/HBuilderProjects/self_demo/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 17).default
var update = add("09ce0cde", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 10 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/user/Documents/HBuilderProjects/self_demo/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 11);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js */ 12);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/static/font/iconfont.eot?t=1610249825864 */ 13);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/static/font/iconfont.woff?t=1610249825864 */ 14);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/static/font/iconfont.ttf?t=1610249825864 */ 15);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! @/static/font/iconfont.svg?t=1610249825864 */ 16);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#iconfont" });
// Module
exports.push([module.i, "@font-face {font-family: \"iconfont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 */\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype'), \n  url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('svg'); /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-love-b:before {\n  content: \"\\e60b\";\n}\n.icon-aixin_shixin:before {\n  content: \"\\eca1\";\n}\n.icon-aixin:before {\n  content: \"\\e8ab\";\n}\n.icon-aixin1:before {\n  content: \"\\e8c3\";\n}\n.icon-aixin2:before {\n  content: \"\\e62d\";\n}\n.icon-daku:before {\n  content: \"\\e61c\";\n}\n.icon-weixiao:before {\n  content: \"\\e6c8\";\n}\n.icon-huachibiaoqing:before {\n  content: \"\\e69c\";\n}\n.icon-zhenjingbiaoqing:before {\n  content: \"\\e69e\";\n}\n.icon-shangxinbiaoqing:before {\n  content: \"\\e69d\";\n}\n.icon-haipabiaoqing:before {\n  content: \"\\e69f\";\n}\n.icon-tanshuibiaoqing:before {\n  content: \"\\e6a0\";\n}\n.icon-xiangwenbiaoqing:before {\n  content: \"\\e6a2\";\n}\n.icon-caimibiaoqing:before {\n  content: \"\\e6a3\";\n}\n.icon-xiaobiaoqing-11:before {\n  content: \"\\e617\";\n}\n.icon-xiaobiaoqing-19:before {\n  content: \"\\e61d\";\n}\n.icon-xiaobiaoqing-16:before {\n  content: \"\\e61f\";\n}\n.icon-biaoqing:before {\n  content: \"\\e620\";\n}\n.icon-guanbi4:before {\n  content: \"\\e6ca\";\n}\n.icon-bofang:before {\n  content: \"\\e610\";\n}\n.icon-bofang1:before {\n  content: \"\\e61b\";\n}\n.icon-bofang2:before {\n  content: \"\\e66e\";\n}\n.icon-icon_play:before {\n  content: \"\\e614\";\n}\n.icon-close:before {\n  content: \"\\e612\";\n}\n.icon-gouwuche:before {\n  content: \"\\e606\";\n}\n.icon-guanbi:before {\n  content: \"\\e649\";\n}\n.icon-guanbi1:before {\n  content: \"\\e61a\";\n}\n.icon-guanbi2:before {\n  content: \"\\e6a1\";\n}\n.icon-guanbi3:before {\n  content: \"\\e7ac\";\n}\n.icon-liuyan:before {\n  content: \"\\e744\";\n}\n.icon-liuyan1:before {\n  content: \"\\e602\";\n}\n.icon-msg-o:before {\n  content: \"\\e61e\";\n}\n.icon-fenxiang:before {\n  content: \"\\e650\";\n}\n.icon-fanhuidingbu2:before {\n  content: \"\\e67c\";\n}\n.icon-triangle-right:before {\n  content: \"\\e62c\";\n}\n.icon-fenxiang1:before {\n  content: \"\\e60e\";\n}\n.icon-sanjiaotop:before {\n  content: \"\\e6b4\";\n}\n.icon-zhongbo-m:before {\n  content: \"\\e607\";\n}\n.icon-return:before {\n  content: \"\\e6ba\";\n}\n.icon-ai207:before {\n  content: \"\\e6c3\";\n}\n.icon-sanjiao:before {\n  content: \"\\e60f\";\n}\n.icon-fanhuidingbu:before {\n  content: \"\\e65b\";\n}\n.icon-dian:before {\n  content: \"\\e626\";\n}\n.icon-zhongbo:before {\n  content: \"\\e60c\";\n}\n.icon-dianzan:before {\n  content: \"\\e619\";\n}\n.icon-sanjiaoxia:before {\n  content: \"\\e644\";\n}\n.icon-fanhuidingbu1:before {\n  content: \"\\e66a\";\n}\n.icon-fenxiang2:before {\n  content: \"\\e615\";\n}\n.icon-NMStubiao-:before {\n  content: \"\\e629\";\n}\n.icon-dianzan1:before {\n  content: \"\\e775\";\n}\n.icon-dianzan2:before {\n  content: \"\\e73e\";\n}\n.icon-dian1:before {\n  content: \"\\e605\";\n}\n.icon-ren:before {\n  content: \"\\e647\";\n}\n.icon-shezhi:before {\n  content: \"\\e624\";\n}\n.icon-home:before {\n  content: \"\\e608\";\n}\n.icon-loading:before {\n  content: \"\\e627\";\n}\n.icon-shezhi1:before {\n  content: \"\\e618\";\n}\n.icon-yinle:before {\n  content: \"\\e613\";\n}\n.icon-xing:before {\n  content: \"\\e628\";\n}\n.icon-ziyuan:before {\n  content: \"\\e64c\";\n}\n.icon-shoucang:before {\n  content: \"\\e625\";\n}\n.icon-xing1:before {\n  content: \"\\e6c9\";\n}\n.icon-Loading:before {\n  content: \"\\e65d\";\n}\n.icon-shipin:before {\n  content: \"\\e600\";\n}\n.icon-tupian:before {\n  content: \"\\e663\";\n}\n.icon-xinwen:before {\n  content: \"\\e611\";\n}\n.icon-hanhan-01-01:before {\n  content: \"\\e693\";\n}\n.iconfont{font-family: iconfont;font-size:48rpx;text-align: center;}\n\n/* .c_pointer{cursor:pointer}\n.animated{ animation-duration: 300ms; }\n.font_0{font-size:0}\n.d_block{display:block}\n.d_iblock{display:inline-block}\n.d_flex{display:flex}\n.p_fixed{position:fixed}\n.p_relative{position:relative}\n.p_absolute{position:absolute}\n.c_red{color:red}\n.c_green{color:green}\n.c_blue{color:blue}\n.c_white{color:white}\n.t_duration_100{transition-duration: 100ms}\n.t_duration_200{transition-duration: 200ms}\n.t_duration_500{transition-duration: 500ms}\n.t_left{text-align:left}\n.t_center{text-align:center}\n.t_right{text-align: right;}\n.f_left{float: left;}\n.f_righr{float:right;}\n.t_ell{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}\n.v_top{vertical-align: top;}\n.v_middle{vertical-align: middle;}\n.v_bottom{vertical-align: bottom;}\n.o_hidden{overflow:hidden}\n.box_auto{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;}\n.w_100{width:100%}\n.h_100{height:100%}\n.w_50{width:50%}\n.h_50{height:50%}\n.cursor_pointer{cursor:pointer}\n.el-table.bgduck th{background-color:#FAFAFA !important}\n.o_auto{overflow: auto;}\n.ox_auto{overflow-x: auto;}\n.oy_auto{overflow-y: auto;}\n.ox_hidden{overflow-x: hidden;}\n.oy_hidden{overflow-y: hidden;}\n.border_box{box-sizing: border-box;}\n.f_left{float:left}\n.f_right{float: right;}\n.c_both:after{content:\".\";clear:both;display:block;height:0;overflow:hidden;visibility:hidden;}\n.customize{margin-bottom:7px}\n.customize>div.el-card__header{background-color:rgba(240,240,240,.6);padding:0px 7px;height:32px;line-height: 32px;}\n.customize>div.el-card__body{padding:4px 7px}\n.Wspace_nowrap div.cell{white-space: nowrap;}\n.btn.active:focus,.btn:focus{outline: none;}\n.w_nowrap{white-space: nowrap;} */\n\n/*每个页面公共css */\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 11 */
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
/* 12 */
/*!**************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/app-plus/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {}
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = url && url.__esModule ? url.default : url

  if (typeof url !== 'string') {
    return url
  } // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1)
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls

  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
  }
  if (url.indexOf('/') === 0) {
    return url.substr(1)
  }
  return url
}


/***/ }),
/* 13 */
/*!***************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/static/font/iconfont.eot?t=1610249825864 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/iconfont.eot";

/***/ }),
/* 14 */
/*!****************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/static/font/iconfont.woff?t=1610249825864 ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/iconfont.woff";

/***/ }),
/* 15 */
/*!***************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/static/font/iconfont.ttf?t=1610249825864 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/font/iconfont.ttf";

/***/ }),
/* 16 */
/*!***************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/static/font/iconfont.svg?t=1610249825864 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/iconfont.da9f9b18.svg";

/***/ }),
/* 17 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 18);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 18 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);