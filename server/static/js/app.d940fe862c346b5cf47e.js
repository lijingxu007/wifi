webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('durationToTime', value => {
  let min = Number.parseInt(value / (60 * 1000), 10) + '';
  let seconds = Number.parseInt(value / 1000 % 60, 10) + '';
  min = min.length === 1 ? '0' + min : min;
  seconds = seconds.length === 1 ? '0' + seconds : seconds;
  return min + ':' + seconds;
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('playCount', value => {
  value += '';
  if (value.length >= 6) {
    return value.substr(0, value.length - 4) + '万';
  }
  return value;
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('unix2Time', time => {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return year + '-' + month + '-' + day;
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('splitTags', tags => {
  if (typeof tags === 'object') {
    return tags.join('/');
  }
  return '';
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('timeToStr', time => {
  let min = Number.parseInt(time / 60, 10) + '';
  let seconds = Number.parseInt(time % 60, 10) + '';
  min = min.length === 1 ? '0' + min : min;
  seconds = seconds.length === 1 ? '0' + seconds : seconds;
  return min + ':' + seconds;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// import Vue from 'vue'
// import Router from 'vue-router'
//
// import Find from './find'
// import Personal from './personal'
// import Cloud from './cloud'
// import Download from './download'
// import Friend from './friend'
// import Local from './local'
// import Mv from './mv'
// import Singer from './singer'
// import Station from './station'
// import Search from './search'
// import PlayList from './playlist'
//
// Vue.use(Router)
//
// export default new Router({
//     routes: [
//         Find,
//         Personal,
//         Cloud,
//         Download,
//         Friend,
//         Local,
//         Mv,
//         Singer,
//         Station,
//         Search,
//         PlayList,
//         {
//             path: '*',
//             redirect: '/find/recommend'
//         }
//     ]
// })

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filters__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animate_css_animate_min_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animate_css_animate_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_animate_css_animate_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_css_common_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_css_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_css_common_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.http.options.emulateJSON = true;
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router___default.a,
    store,
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_headers__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_headers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_headers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contents__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contents___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_contents__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footers__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_footers__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    components: {
        Headers: __WEBPACK_IMPORTED_MODULE_0__components_headers___default.a,
        Contents: __WEBPACK_IMPORTED_MODULE_1__components_contents___default.a,
        Footers: __WEBPACK_IMPORTED_MODULE_2__components_footers___default.a
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(18),
  /* scopeId */
  "data-v-22ed49b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-16f8c7bb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(17),
  /* scopeId */
  "data-v-1c12e209",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "footers",
      "name": "footers"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "headers",
    attrs: {
      "name": "header"
    }
  }, [_vm._v("\n    头部\n")])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "contents",
      "name": "contents"
    }
  }, [_vm._v("\r\n    中间\r\n")])
},staticRenderFns: []}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('headers'), _vm._v(" "), _c('contents'), _vm._v(" "), _c('footers')], 1)
},staticRenderFns: []}

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[8]);
//# sourceMappingURL=app.d940fe862c346b5cf47e.js.map