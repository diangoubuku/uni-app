"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/main.js?{"page":"pages%2FvideoPage%2Fview%2FxspIndex"} ***!
  \*****************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_videoPage_view_xspIndex_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/videoPage/view/xspIndex.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_videoPage_view_xspIndex_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_videoPage_view_xspIndex_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/videoPage/view/xspIndex'\n        _pages_videoPage_view_xspIndex_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_videoPage_view_xspIndex_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsdUZBQUc7QUFDWCxRQUFRLHVGQUFHO0FBQ1gsUUFBUSx1RkFBRztBQUNYLGdCQUFnQix1RkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy92aWRlb1BhZ2Uvdmlldy94c3BJbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3ZpZGVvUGFnZS92aWV3L3hzcEluZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/main.js?{"type":"appStyle"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/user/Documents/HBuilderProjects/self_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url('~@/static/font/iconfont.eot?t=1610249825864#iefix') format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\n  url('~@/static/font/iconfont.woff?t=1610249825864') format('woff'),\n  url('~@/static/font/iconfont.ttf?t=1610249825864') format('truetype'), \n  url('~@/static/font/iconfont.svg?t=1610249825864#iconfont') format('svg')"
    }
  ],
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "48rpx",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "textAlign": "center"
  },
  "icon-love-b": {
    "content:before": "\"\\e60b\""
  },
  "icon-aixin_shixin": {
    "content:before": "\"\\eca1\""
  },
  "icon-aixin": {
    "content:before": "\"\\e8ab\""
  },
  "icon-aixin1": {
    "content:before": "\"\\e8c3\""
  },
  "icon-aixin2": {
    "content:before": "\"\\e62d\""
  },
  "icon-daku": {
    "content:before": "\"\\e61c\""
  },
  "icon-weixiao": {
    "content:before": "\"\\e6c8\""
  },
  "icon-huachibiaoqing": {
    "content:before": "\"\\e69c\""
  },
  "icon-zhenjingbiaoqing": {
    "content:before": "\"\\e69e\""
  },
  "icon-shangxinbiaoqing": {
    "content:before": "\"\\e69d\""
  },
  "icon-haipabiaoqing": {
    "content:before": "\"\\e69f\""
  },
  "icon-tanshuibiaoqing": {
    "content:before": "\"\\e6a0\""
  },
  "icon-xiangwenbiaoqing": {
    "content:before": "\"\\e6a2\""
  },
  "icon-caimibiaoqing": {
    "content:before": "\"\\e6a3\""
  },
  "icon-xiaobiaoqing-11": {
    "content:before": "\"\\e617\""
  },
  "icon-xiaobiaoqing-19": {
    "content:before": "\"\\e61d\""
  },
  "icon-xiaobiaoqing-16": {
    "content:before": "\"\\e61f\""
  },
  "icon-biaoqing": {
    "content:before": "\"\\e620\""
  },
  "icon-guanbi4": {
    "content:before": "\"\\e6ca\""
  },
  "icon-bofang": {
    "content:before": "\"\\e610\""
  },
  "icon-bofang1": {
    "content:before": "\"\\e61b\""
  },
  "icon-bofang2": {
    "content:before": "\"\\e66e\""
  },
  "icon-icon_play": {
    "content:before": "\"\\e614\""
  },
  "icon-close": {
    "content:before": "\"\\e612\""
  },
  "icon-gouwuche": {
    "content:before": "\"\\e606\""
  },
  "icon-guanbi": {
    "content:before": "\"\\e649\""
  },
  "icon-guanbi1": {
    "content:before": "\"\\e61a\""
  },
  "icon-guanbi2": {
    "content:before": "\"\\e6a1\""
  },
  "icon-guanbi3": {
    "content:before": "\"\\e7ac\""
  },
  "icon-liuyan": {
    "content:before": "\"\\e744\""
  },
  "icon-liuyan1": {
    "content:before": "\"\\e602\""
  },
  "icon-msg-o": {
    "content:before": "\"\\e61e\""
  },
  "icon-fenxiang": {
    "content:before": "\"\\e650\""
  },
  "icon-fanhuidingbu2": {
    "content:before": "\"\\e67c\""
  },
  "icon-triangle-right": {
    "content:before": "\"\\e62c\""
  },
  "icon-fenxiang1": {
    "content:before": "\"\\e60e\""
  },
  "icon-sanjiaotop": {
    "content:before": "\"\\e6b4\""
  },
  "icon-zhongbo-m": {
    "content:before": "\"\\e607\""
  },
  "icon-return": {
    "content:before": "\"\\e6ba\""
  },
  "icon-ai207": {
    "content:before": "\"\\e6c3\""
  },
  "icon-sanjiao": {
    "content:before": "\"\\e60f\""
  },
  "icon-fanhuidingbu": {
    "content:before": "\"\\e65b\""
  },
  "icon-dian": {
    "content:before": "\"\\e626\""
  },
  "icon-zhongbo": {
    "content:before": "\"\\e60c\""
  },
  "icon-dianzan": {
    "content:before": "\"\\e619\""
  },
  "icon-sanjiaoxia": {
    "content:before": "\"\\e644\""
  },
  "icon-fanhuidingbu1": {
    "content:before": "\"\\e66a\""
  },
  "icon-fenxiang2": {
    "content:before": "\"\\e615\""
  },
  "icon-NMStubiao-": {
    "content:before": "\"\\e629\""
  },
  "icon-dianzan1": {
    "content:before": "\"\\e775\""
  },
  "icon-dianzan2": {
    "content:before": "\"\\e73e\""
  },
  "icon-dian1": {
    "content:before": "\"\\e605\""
  },
  "icon-ren": {
    "content:before": "\"\\e647\""
  },
  "icon-shezhi": {
    "content:before": "\"\\e624\""
  },
  "icon-home": {
    "content:before": "\"\\e608\""
  },
  "icon-loading": {
    "content:before": "\"\\e627\""
  },
  "icon-shezhi1": {
    "content:before": "\"\\e618\""
  },
  "icon-yinle": {
    "content:before": "\"\\e613\""
  },
  "icon-xing": {
    "content:before": "\"\\e628\""
  },
  "icon-ziyuan": {
    "content:before": "\"\\e64c\""
  },
  "icon-shoucang": {
    "content:before": "\"\\e625\""
  },
  "icon-xing1": {
    "content:before": "\"\\e6c9\""
  },
  "icon-Loading": {
    "content:before": "\"\\e65d\""
  },
  "icon-shipin": {
    "content:before": "\"\\e600\""
  },
  "icon-tupian": {
    "content:before": "\"\\e663\""
  },
  "icon-xinwen": {
    "content:before": "\"\\e611\""
  },
  "icon-hanhan-01-01": {
    "content:before": "\"\\e693\""
  }
}

/***/ }),
/* 4 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?mpType=page ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xspIndex.nvue?vue&type=template&id=4ff38416&scoped=true&mpType=page */ 5);\n/* harmony import */ var _xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xspIndex.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./xspIndex.nvue?vue&type=style&index=0&id=4ff38416&scoped=true&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./xspIndex.nvue?vue&type=style&index=0&id=4ff38416&scoped=true&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4ff38416\",\n  \"29e48ee4\",\n  false,\n  _xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoPage/view/xspIndex.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkk7QUFDN0k7QUFDd0U7QUFDTDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZGQUFxRjtBQUN6SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkZBQXFGO0FBQzlJOztBQUVBOztBQUVBO0FBQzBLO0FBQzFLLGdCQUFnQixtTEFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwyR0FBTTtBQUNSLEVBQUUsb0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi94c3BJbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmZjM4NDE2JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi94c3BJbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3hzcEluZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3hzcEluZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZmYzODQxNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi94c3BJbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGZmMzg0MTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXDIyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGZmMzg0MTZcIixcbiAgXCIyOWU0OGVlNFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlb1BhZ2Uvdmlldy94c3BJbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?vue&type=template&id=4ff38416&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./xspIndex.nvue?vue&type=template&id=4ff38416&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_template_id_4ff38416_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?vue&type=template&id=4ff38416&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["xspIndex"] },
        [
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              style: "height:" + _vm.scrHeight + "rpx;",
              attrs: { vertical: true, current: _vm.activeI },
              on: { change: _vm.changeCurr }
            },
            _vm._l(_vm.videoList, function(item, index) {
              return _c("swiper-item", { key: index }, [
                _c(
                  "view",
                  {},
                  [
                    _c(
                      "u-video",
                      {
                        staticClass: ["videoDom"],
                        staticStyle: { width: "750rpx", height: "1556rpx" },
                        attrs: {
                          src: "/static/videos/3.mp4",
                          id: "xspIndex_" + index,
                          controls: true,
                          direction: 0,
                          showFullscreenBtn: false,
                          autoplay: _vm.activeI == 0 && index == 0
                        },
                        on: { play: _vm.palyCli, click: _vm.videoCli }
                      },
                      [
                        _c(
                          "u-scalable",
                          {
                            staticStyle: {
                              position: "absolute",
                              left: "0",
                              right: "0",
                              top: "0",
                              bottom: "0"
                            }
                          },
                          [
                            _c(
                              "u-text",
                              {
                                staticClass: ["iconfont"],
                                staticStyle: {
                                  lineHeight: "46rpx",
                                  fontSize: "50rpx",
                                  color: "#fff",
                                  position: "absolute",
                                  left: "32rpx",
                                  top: "88rpx",
                                  width: "88rpx"
                                },
                                on: { click: _vm.gateBackCli }
                              },
                              [_vm._v("")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticStyle: {
                      position: "absolute",
                      right: "32rpx",
                      bottom: "500rpx"
                    }
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["iconfont"],
                        staticStyle: {
                          color: "#000",
                          fontSize: "64rpx",
                          color: "#f00"
                        }
                      },
                      [_vm._v("")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#fff",
                          fontSize: "24rpx",
                          textAlign: "center"
                        }
                      },
                      [_vm._v("8.7w")]
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticStyle: {
                      position: "absolute",
                      right: "32rpx",
                      bottom: "320rpx"
                    },
                    on: { click: _vm.messageBtn }
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["iconfont"],
                        staticStyle: {
                          color: "#000",
                          fontSize: "64rpx",
                          color: "#fff"
                        }
                      },
                      [_vm._v("")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#fff",
                          fontSize: "22rpx",
                          textAlign: "center"
                        }
                      },
                      [_vm._v("5142")]
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticStyle: {
                      position: "absolute",
                      right: "32rpx",
                      bottom: "140rpx"
                    }
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["iconfont"],
                        staticStyle: {
                          color: "#000",
                          fontSize: "64rpx",
                          color: "#fff"
                        }
                      },
                      [_vm._v("")]
                    ),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#fff",
                          fontSize: "24rpx",
                          textAlign: "center"
                        }
                      },
                      [_vm._v("365")]
                    )
                  ]
                )
              ])
            }),
            1
          ),
          _vm.hasMessages
            ? _c(
                "view",
                {
                  staticClass: ["inputKeyBordBox"],
                  style: "height:" + (_vm.scrHeight * 3) / 4 + "rpx"
                },
                [
                  _c("view", {}, [
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v("@马总" + _vm._s(_vm.index))
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ]),
                    _c("u-text", { staticStyle: { color: "#000" } }, [
                      _vm._v(
                        "电饭锅和规范化要回家一趟法规和规范化发过后吃不吃是黄金国际发生大幅度"
                      )
                    ])
                  ]),
                  _c(
                    "view",
                    {
                      staticStyle: {
                        width: "750rpx",
                        height: "88rpx",
                        backgroundColor: "#fff",
                        position: "absolute",
                        left: "0",
                        bottom: "0rpx",
                        borderTopWidth: "2rpx",
                        borderTopColor: "rgba(220,220,220,1)",
                        flexDirection: "row",
                        justifyContent: "space-around"
                      }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["iconfont"],
                          staticStyle: {
                            fontSize: "56rpx",
                            color: "#000",
                            height: "88",
                            lineHeight: "88rpx"
                          },
                          on: {
                            click: function($event) {
                              _vm.hasMessages = false
                            }
                          }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "view",
                        { on: { click: _vm.hasBorderViewCli } },
                        [
                          _c("u-input", {
                            staticStyle: {
                              height: "56rpx",
                              borderRadius: "28rpx",
                              lineHeight: "56rpx",
                              paddingLeft: "28rpx",
                              backgroundColor: "rgba(200,200,200,1)",
                              fontSize: "32rpx",
                              width: "300rpx",
                              marginTop: "16rpx",
                              marginBottom: "16rpx",
                              color: "rgba(0,0,0,.54)"
                            },
                            attrs: {
                              type: "text",
                              value: "我来说两句",
                              disabled: true
                            }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["iconfont"],
                              staticStyle: {
                                fontSize: "46rpx",
                                color: "#fff",
                                position: "absolute",
                                height: "88rpx",
                                lineHeight: "90rpx",
                                left: "246rpx"
                              }
                            },
                            [_vm._v("")]
                          )
                        ],
                        1
                      ),
                      _c("view", {}, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["iconfont"],
                            staticStyle: {
                              fontSize: "56rpx",
                              color: "#000",
                              height: "88",
                              lineHeight: "88rpx"
                            }
                          },
                          [_vm._v("")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticStyle: {
                              position: "absolute",
                              left: "20rpx",
                              top: "10rpx",
                              backgroundColor: "#f00",
                              height: "32rpx",
                              lineHeight: "32rpx",
                              fontSize: "22rpx",
                              borderRadius: "16rpx",
                              paddingLeft: "10rpx",
                              paddingRight: "10rpx",
                              color: "#000"
                            }
                          },
                          [_vm._v("457")]
                        )
                      ]),
                      _c(
                        "u-text",
                        {
                          staticClass: ["iconfont"],
                          staticStyle: {
                            fontSize: "56rpx",
                            color: "#000",
                            height: "88",
                            lineHeight: "88rpx"
                          }
                        },
                        [_vm._v("")]
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["iconfont"],
                          staticStyle: {
                            fontSize: "56rpx",
                            color: "#000",
                            height: "88",
                            lineHeight: "88rpx"
                          }
                        },
                        [_vm._v("")]
                      )
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm.hasMessages && _vm.hasBorderView
            ? _c(
                "view",
                {
                  staticClass: ["inputKeyBordView"],
                  style: "height:" + (_vm.scrHeight * 3) / 4 + "rpx"
                },
                [
                  _c("view", { staticClass: ["borderViewTitle"] }, [
                    _c(
                      "view",
                      {
                        staticStyle: {
                          flexDirection: "row",
                          justifyContent: "space-between",
                          height: "108rpx"
                        }
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticStyle: {
                              fontSize: "32rpx",
                              height: "108rpx",
                              lineHeight: "108rpx"
                            },
                            on: { click: _vm.cancelCli }
                          },
                          [_vm._v("取消")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticStyle: {
                              fontSize: "32rpx",
                              height: "108rpx",
                              lineHeight: "108rpx"
                            },
                            on: { click: _vm.returnCli }
                          },
                          [_vm._v("发送")]
                        )
                      ]
                    ),
                    _c(
                      "view",
                      {},
                      [
                        _c("u-textarea", {
                          staticClass: ["textAreaDom"],
                          style: "height:" + _vm.textAreaHeight + "rpx",
                          attrs: { type: "text", value: "dfvdf", focus: true },
                          on: { focus: _vm.textAreaFocus }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./xspIndex.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_222_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWljLENBQWdCLDBlQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcMjIyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXDIyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXDIyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi94c3BJbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcMjIyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXDIyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXDIyMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi94c3BJbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      videoList: [\"\", \"\", \"\", \"\"],\n      scrHeight: 1334,\n      activeI: 0,\n      hasMessages: false,\n      hasBorderView: false,\n      diffScrHeight: 0,\n      swProportion: 1,\n      textAreaHeight: 300 };\n\n  },\n  methods: {\n    palyCli: function palyCli() {\n      this.videoList.push(\"\");\n    },\n    gateBackCli: function gateBackCli() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    changeCurr: function changeCurr(res) {\n      __f__(\"log\", 8880, \" at pages/videoPage/view/xspIndex.nvue:88\");\n      var oldId = \"xspIndex_\" + this.activeI;\n      var newId = \"xspIndex_\" + res.detail.current;\n      var videoDomOld = uni.createVideoContext(oldId, this);\n      var videoDomNew = uni.createVideoContext(newId, this);\n      videoDomOld.pause();\n      videoDomNew.play();\n      this.activeI = res.detail.current;\n    },\n    messageBtn: function messageBtn() {\n      this.hasMessages = true;\n    },\n    aaa: function aaa(event) {\n      __f__(\"log\", event.detail, 7878, \" at pages/videoPage/view/xspIndex.nvue:101\");\n    },\n    videoCli: function videoCli() {//点击视频，  关闭留言/开启，关闭视频\n      if (this.hasMessages) {\n        this.hasMessages = false;\n        this.hasBorderView = false;\n      }\n      __f__(\"log\", 8849, \" at pages/videoPage/view/xspIndex.nvue:108\");\n    },\n    hasBorderViewCli: function hasBorderViewCli() {\n      this.hasBorderView = true;\n    },\n    textAreaFocus: function textAreaFocus(event) {\n      this.textAreaHeight = this.scrHeight * 3 / 4 - event.detail.height * this.swProportion - 150 + this.diffScrHeight;\n      __f__(\"log\", 7744, \"---\", this.scrHeight * 3 / 4, this.diffScrHeight, event.detail.height * this.swProportion, \" at pages/videoPage/view/xspIndex.nvue:115\");\n    },\n    cancelCli: function cancelCli() {\n      __f__(\"log\", 99955, \" at pages/videoPage/view/xspIndex.nvue:118\");\n      this.hasMessages = false;\n      this.hasBorderView = false;\n    },\n    returnCli: function returnCli() {} },\n\n  onLoad: function onLoad() {\n    var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.scrHeight = 750 / res.windowWidth * res.windowHeight;\n        _this.diffScrHeight = 750 / res.windowWidth * (res.screenHeight - res.windowHeight);\n        _this.swProportion = 750 / res.windowWidth;\n      } });\n\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 8888, \" at pages/videoPage/view/xspIndex.nvue:135\");\n  },\n  onReady: function onReady() {\n    __f__(\"log\", 8889, \" at pages/videoPage/view/xspIndex.nvue:138\");\n  },\n  onUnload: function onUnload() {\n    __f__(\"log\", \"页面卸载\", \" at pages/videoPage/view/xspIndex.nvue:141\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9QYWdlL3ZpZXcveHNwSW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsd0JBSkE7QUFLQSwwQkFMQTtBQU1BLHNCQU5BO0FBT0EscUJBUEE7QUFRQSx5QkFSQTs7QUFVQSxHQVpBO0FBYUE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZUFKQSx5QkFJQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FSQTtBQVNBLGNBVEEsc0JBU0EsR0FUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLGNBbkJBLHdCQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsT0F0QkEsZUFzQkEsS0F0QkEsRUFzQkE7QUFDQTtBQUNBLEtBeEJBO0FBeUJBLFlBekJBLHNCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9CQTtBQWdDQSxvQkFoQ0EsOEJBZ0NBO0FBQ0E7QUFDQSxLQWxDQTtBQW1DQSxpQkFuQ0EseUJBbUNBLEtBbkNBLEVBbUNBO0FBQ0E7QUFDQTtBQUNBLEtBdENBO0FBdUNBLGFBdkNBLHVCQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0NBO0FBNENBLGFBNUNBLHVCQTRDQSxFQTVDQSxFQWJBOztBQTJEQSxRQTNEQSxvQkEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBOztBQU9BLEdBcEVBO0FBcUVBLFFBckVBLG9CQXFFQTtBQUNBO0FBQ0EsR0F2RUE7QUF3RUEsU0F4RUEscUJBd0VBO0FBQ0E7QUFDQSxHQTFFQTtBQTJFQSxVQTNFQSxzQkEyRUE7QUFDQTtBQUNBLEdBN0VBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInhzcEluZGV4XCI+IDwhLS0gOnN0eWxlPVwiJ2hlaWdodDonICsgc2NySGVpZ2h0ICsgJ3JweCdcIi0tPlxyXG5cdFx0PHN3aXBlciBjbGFzcz1cInN3aXBlclwiIDpzdHlsZT1cImBoZWlnaHQ6JHtzY3JIZWlnaHR9cnB4O2BcIiA6dmVydGljYWw9XCJ0cnVlXCIgOmN1cnJlbnQ9XCJhY3RpdmVJXCIgQGNoYW5nZT1cImNoYW5nZUN1cnJcIj5cclxuXHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHZpZGVvTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHRcdFx0XHJcblx0XHRcdFx0XHQ8dmlkZW8gc3JjPVwiL3N0YXRpYy92aWRlb3MvMy5tcDRcIiA6aWQ9XCIneHNwSW5kZXhfJyArIGluZGV4XCIgY2xhc3M9XCJ2aWRlb0RvbVwiIGNvbnRyb2xzIDpkaXJlY3Rpb249XCIwXCIgc3R5bGU9XCJ3aWR0aDo3NTBycHg7aGVpZ2h0OjE1NTZycHhcIiA6c2hvdy1mdWxsc2NyZWVuLWJ0bj1cImZhbHNlXCIgQHBsYXk9XCJwYWx5Q2xpXCIgOmF1dG9wbGF5PVwiYWN0aXZlSSA9PSAwICYmIGluZGV4ID09IDBcIiBAY2xpY2s9XCJ2aWRlb0NsaVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJsaW5lLWhlaWdodDo0NnJweDtmb250LXNpemU6NTBycHg7Y29sb3I6I2ZmZjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjMycnB4O3RvcDo4OHJweDt3aWR0aDo4OHJweFwiIEBjbGljaz1cImdhdGVCYWNrQ2xpXCI+JiN4ZTZjMzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MzJycHg7Ym90dG9tOjUwMHJweDtcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImNvbG9yOiMwMDA7Zm9udC1zaXplOjY0cnB4O2NvbG9yOiNmMDBcIj4mI3hlNjBiOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6I2ZmZjtmb250LXNpemU6MjRycHg7dGV4dC1hbGlnbjogY2VudGVyO1wiPjguN3c8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMnJweDtib3R0b206MzIwcnB4O1wiIEBjbGljaz1cIm1lc3NhZ2VCdG5cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImNvbG9yOiMwMDA7Zm9udC1zaXplOjY0cnB4O2NvbG9yOiNmZmZcIj4mI3hlNjAyOzwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6I2ZmZjtmb250LXNpemU6MjJycHg7dGV4dC1hbGlnbjogY2VudGVyO1wiPjUxNDI8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMnJweDtib3R0b206MTQwcnB4O1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiY29sb3I6IzAwMDtmb250LXNpemU6NjRycHg7Y29sb3I6I2ZmZlwiPiYjeGU2NTA7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjojZmZmO2ZvbnQtc2l6ZToyNHJweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCI+MzY1PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zd2lwZXItaXRlbT4gXHJcblx0XHQ8L3N3aXBlcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRLZXlCb3JkQm94XCIgIDpzdHlsZT1cIidoZWlnaHQ6JyArIChzY3JIZWlnaHQgKiAzIC8gNCkgKyAncnB4J1wiIHYtaWY9XCJoYXNNZXNzYWdlc1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6IzAwMFwiPkDpqazmgLt7e2luZGV4fX08L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjojMDAwXCI+55S16aWt6ZSF5ZKM6KeE6IyD5YyW6KaB5Zue5a625LiA6Laf5rOV6KeE5ZKM6KeE6IyD5YyW5Y+R6L+H5ZCO5ZCD5LiN5ZCD5piv6buE6YeR5Zu96ZmF5Y+R55Sf5aSn5bmF5bqmPC90ZXh0Plx0XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiMwMDBcIj7nlLXppa3plIXlkozop4TojIPljJbopoHlm57lrrbkuIDotp/ms5Xop4Tlkozop4TojIPljJblj5Hov4flkI7lkIPkuI3lkIPmmK/pu4Tph5Hlm73pmYXlj5HnlJ/lpKfluYXluqY8L3RleHQ+XHRcclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwid2lkdGg6NzUwcnB4OztoZWlnaHQ6ODhycHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtib3R0b206MHJweDtib3JkZXItdG9wLXdpZHRoOiAycnB4O2JvcmRlci10b3AtY29sb3I6IHJnYmEoMjIwLDIyMCwyMjAsMSk7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFwiPlx0XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOjU2cnB4O2NvbG9yOiMwMDA7aGVpZ2h0Ojg4O2xpbmUtaGVpZ2h0OiA4OHJweDtcIiBAY2xpY2s9XCJoYXNNZXNzYWdlcyA9IGZhbHNlXCI+JiN4ZTZiYTs8L3RleHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBAY2xpY2s9XCJoYXNCb3JkZXJWaWV3Q2xpXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIuaIkeadpeivtOS4pOWPpVwiICBzdHlsZT1cImhlaWdodDo1NnJweDtib3JkZXItcmFkaXVzOjI4cnB4O2xpbmUtaGVpZ2h0OjU2cnB4O3BhZGRpbmctbGVmdDoyOHJweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjAwLDIwMCwyMDAsMSk7Zm9udC1zaXplOjMycnB4O3dpZHRoOjMwMHJweDttYXJnaW4tdG9wOjE2cnB4O21hcmdpbi1ib3R0b206MTZycHg7Y29sb3I6cmdiYSgwLDAsMCwuNTQpXCIgOmRpc2FibGVkPVwidHJ1ZVwiLz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTo0NnJweDtjb2xvcjojZmZmO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDo4OHJweDtsaW5lLWhlaWdodDogOTBycHg7bGVmdDoyNDZycHhcIj4mI3hlNjllOzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTo1NnJweDtjb2xvcjojMDAwO2hlaWdodDo4ODtsaW5lLWhlaWdodDogODhycHg7XCI+JiN4ZTYxZTs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjBycHg7dG9wOjEwcnB4O2JhY2tncm91bmQtY29sb3I6I2YwMDtoZWlnaHQ6MzJycHg7bGluZS1oZWlnaHQ6MzJycHg7Zm9udC1zaXplOjIycnB4O2JvcmRlci1yYWRpdXM6MTZycHg7cGFkZGluZy1sZWZ0OjEwcnB4O3BhZGRpbmctcmlnaHQ6MTBycHg7Y29sb3I6IzAwMFwiPjQ1NzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOjU2cnB4O2NvbG9yOiMwMDA7aGVpZ2h0Ojg4O2xpbmUtaGVpZ2h0OiA4OHJweDtcIj4mI3hlNjI1OzwvdGV4dD5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6NTZycHg7Y29sb3I6IzAwMDtoZWlnaHQ6ODg7bGluZS1oZWlnaHQ6IDg4cnB4O1wiPiYjeGU2NTA7PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImlucHV0S2V5Qm9yZFZpZXdcIiAgOnN0eWxlPVwiJ2hlaWdodDonICsgKHNjckhlaWdodCAqIDMgLyA0KSArICdycHgnXCIgdi1pZj1cImhhc01lc3NhZ2VzICYmIGhhc0JvcmRlclZpZXdcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3JkZXJWaWV3VGl0bGVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47aGVpZ2h0OjEwOHJweFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6MzJycHg7aGVpZ2h0OjEwOHJweDtsaW5lLWhlaWdodDoxMDhycHhcIiBAY2xpY2s9XCJjYW5jZWxDbGlcIj7lj5bmtog8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTozMnJweDtoZWlnaHQ6MTA4cnB4O2xpbmUtaGVpZ2h0OjEwOHJweFwiIEBjbGljaz1cInJldHVybkNsaVwiPuWPkemAgTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0YXJlYSBjbGFzcz1cInRleHRBcmVhRG9tXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cImRmdmRmXCIgOmZvY3VzPVwidHJ1ZVwiIEBmb2N1cz1cInRleHRBcmVhRm9jdXNcIiA6c3R5bGU9XCInaGVpZ2h0OicgKyB0ZXh0QXJlYUhlaWdodCArICdycHgnXCIvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHR2aWRlb0xpc3Q6W1wiXCIsXCJcIixcIlwiLFwiXCJdLFxyXG5cdFx0XHRcdHNjckhlaWdodDoxMzM0LFxyXG5cdFx0XHRcdGFjdGl2ZUk6MCxcclxuXHRcdFx0XHRoYXNNZXNzYWdlczpmYWxzZSxcclxuXHRcdFx0XHRoYXNCb3JkZXJWaWV3OmZhbHNlLFxyXG5cdFx0XHRcdGRpZmZTY3JIZWlnaHQ6MCxcclxuXHRcdFx0XHRzd1Byb3BvcnRpb246MSxcclxuXHRcdFx0XHR0ZXh0QXJlYUhlaWdodDozMDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRwYWx5Q2xpKCl7XHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3QucHVzaChcIlwiKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnYXRlQmFja0NsaSgpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdCAgICBkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VDdXJyKHJlcyl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coODg4MClcclxuXHRcdFx0XHR2YXIgb2xkSWQgPSBcInhzcEluZGV4X1wiICsgdGhpcy5hY3RpdmVJO1xyXG5cdFx0XHRcdHZhciBuZXdJZCA9IFwieHNwSW5kZXhfXCIgKyByZXMuZGV0YWlsLmN1cnJlbnQ7XHJcblx0XHRcdFx0dmFyIHZpZGVvRG9tT2xkID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dChvbGRJZCwgdGhpcyk7XHJcblx0XHRcdFx0dmFyIHZpZGVvRG9tTmV3ID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dChuZXdJZCwgdGhpcyk7XHJcblx0XHRcdFx0dmlkZW9Eb21PbGQucGF1c2UoKTtcclxuXHRcdFx0XHR2aWRlb0RvbU5ldy5wbGF5KCk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVJID0gcmVzLmRldGFpbC5jdXJyZW50O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtZXNzYWdlQnRuKCl7XHJcblx0XHRcdFx0dGhpcy5oYXNNZXNzYWdlcyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0YWFhKGV2ZW50KXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudC5kZXRhaWwsNzg3OClcclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW9DbGkoKXtcdFx0Ly/ngrnlh7vop4bpopHvvIwgIOWFs+mXreeVmeiogC/lvIDlkK/vvIzlhbPpl63op4bpopFcclxuXHRcdFx0XHRpZih0aGlzLmhhc01lc3NhZ2VzKXtcclxuXHRcdFx0XHRcdHRoaXMuaGFzTWVzc2FnZXMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaGFzQm9yZGVyVmlldyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZyg4ODQ5KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYXNCb3JkZXJWaWV3Q2xpKCl7XHJcblx0XHRcdFx0dGhpcy5oYXNCb3JkZXJWaWV3ID0gdHJ1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dEFyZWFGb2N1cyhldmVudCl7XHJcblx0XHRcdFx0dGhpcy50ZXh0QXJlYUhlaWdodCA9ICh0aGlzLnNjckhlaWdodCAqIDMgLyA0KSAtIChldmVudC5kZXRhaWwuaGVpZ2h0ICogdGhpcy5zd1Byb3BvcnRpb24pIC0gMTUwICsgdGhpcy5kaWZmU2NySGVpZ2h0O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKDc3NDQsXCItLS1cIix0aGlzLnNjckhlaWdodCAqIDMgLyA0LHRoaXMuZGlmZlNjckhlaWdodCxldmVudC5kZXRhaWwuaGVpZ2h0ICogdGhpcy5zd1Byb3BvcnRpb24pXHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbmNlbENsaSgpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKDk5OTU1KVxyXG5cdFx0XHRcdHRoaXMuaGFzTWVzc2FnZXMgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmhhc0JvcmRlclZpZXcgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmV0dXJuQ2xpKCl7fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpe1xyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdFx0X3RoaXMuc2NySGVpZ2h0ID0gNzUwIC8gcmVzLndpbmRvd1dpZHRoICogcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdF90aGlzLmRpZmZTY3JIZWlnaHQgPSA3NTAgLyByZXMud2luZG93V2lkdGggKiAocmVzLnNjcmVlbkhlaWdodCAtIHJlcy53aW5kb3dIZWlnaHQpO1xyXG5cdFx0XHRcdFx0X3RoaXMuc3dQcm9wb3J0aW9uID0gNzUwIC8gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvblNob3coKXtcclxuXHRcdFx0Y29uc29sZS5sb2coODg4OClcdFxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKXtcclxuXHRcdFx0Y29uc29sZS5sb2coODg4OSlcclxuXHRcdH0sXHJcblx0XHRvblVubG9hZCgpeyBcclxuXHRcdFx0Y29uc29sZS5sb2coXCLpobXpnaLljbjovb1cIikgXHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnZpZGVvRG9te3dpZHRoOjc1MHJweDt9XHJcbi54c3BJbmRleHtwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7dG9wOjA7d2lkdGg6NzUwcnB4O31cclxuLmlucHV0S2V5Qm9yZEJveHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDogNzUwcnB4O2xlZnQ6MDtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTRycHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE0cnB4O31cclxuLmlucHV0S2V5Qm9yZFZpZXd7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6IDc1MHJweDtsZWZ0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE0cnB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNHJweDt9XHJcbi5ib3JkZXJWaWV3VGl0bGV7Ym9yZGVyLWJvdHRvbS13aWR0aDogMnJweDtib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDIyMCwyMjAsMjIwLDEpO3BhZGRpbmctbGVmdDogMzZycHg7cGFkZGluZy1yaWdodDogMzZycHg7cGFkZGluZy1ib3R0b206NDBycHg7fVxyXG4udGV4dEFyZWFEb217aGVpZ2h0OjMwMHJweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTkwLDE5MCwxOTAsLjU0KTtib3JkZXItcmFkaXVzOjE4cnB4fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?vue&type=style&index=0&id=4ff38416&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_style_index_0_id_4ff38416_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./xspIndex.nvue?vue&type=style&index=0&id=4ff38416&scoped=true&lang=css&mpType=page */ 11);
/* harmony import */ var _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_style_index_0_id_4ff38416_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_style_index_0_id_4ff38416_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_style_index_0_id_4ff38416_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_style_index_0_id_4ff38416_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_222_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_222_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_xspIndex_nvue_vue_type_style_index_0_id_4ff38416_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/user/Documents/HBuilderProjects/self_demo/pages/videoPage/view/xspIndex.nvue?vue&type=style&index=0&id=4ff38416&scoped=true&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "videoDom": {
    "width": "750rpx"
  },
  "xspIndex": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "width": "750rpx"
  },
  "inputKeyBordBox": {
    "position": "absolute",
    "width": "750rpx",
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "inputKeyBordView": {
    "position": "absolute",
    "width": "750rpx",
    "left": 0,
    "bottom": 0,
    "backgroundColor": "#ffffff",
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "borderViewTitle": {
    "borderBottomWidth": "2rpx",
    "borderBottomColor": "rgba(220,220,220,1)",
    "paddingLeft": "36rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "40rpx"
  },
  "textAreaDom": {
    "height": "300rpx",
    "backgroundColor": "rgba(190,190,190,0.54)",
    "borderRadius": "18rpx"
  }
}

/***/ }),
/* 12 */
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


/***/ })
/******/ ]);