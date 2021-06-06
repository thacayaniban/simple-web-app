(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_AllDevelopers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/AllDevelopers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/AllDevelopers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      developers: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("http://simple-web-app.test" + '/api/developers').then(function (response) {
      _this.developers = response.data;
    });
  },
  methods: {
    deletePost: function deletePost(id) {
      var _this2 = this;

      if (confirm("Do you really want to delete?")) {
        this.axios["delete"]("http://simple-web-app.test" + "/api/developer/".concat(id)).then(function (response) {
          var i = _this2.developers.map(function (item) {
            return item.id;
          }).indexOf(id); // find index of your object


          _this2.developers.splice(i, 1);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/AllDevelopers.vue":
/*!**********************************************!*\
  !*** ./resources/js/admin/AllDevelopers.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllDevelopers_vue_vue_type_template_id_47214508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllDevelopers.vue?vue&type=template&id=47214508& */ "./resources/js/admin/AllDevelopers.vue?vue&type=template&id=47214508&");
/* harmony import */ var _AllDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDevelopers.vue?vue&type=script&lang=js& */ "./resources/js/admin/AllDevelopers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AllDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AllDevelopers_vue_vue_type_template_id_47214508___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllDevelopers_vue_vue_type_template_id_47214508___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/AllDevelopers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/AllDevelopers.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/AllDevelopers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllDevelopers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/AllDevelopers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDevelopers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/AllDevelopers.vue?vue&type=template&id=47214508&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/AllDevelopers.vue?vue&type=template&id=47214508& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDevelopers_vue_vue_type_template_id_47214508___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDevelopers_vue_vue_type_template_id_47214508___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDevelopers_vue_vue_type_template_id_47214508___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllDevelopers.vue?vue&type=template&id=47214508& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/AllDevelopers.vue?vue&type=template&id=47214508&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/AllDevelopers.vue?vue&type=template&id=47214508&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/AllDevelopers.vue?vue&type=template&id=47214508& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "py-12" }, [
    _c("div", { staticClass: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
      _c(
        "div",
        { staticClass: "bg-white overflow-hidden shadow-sm sm:rounded-lg" },
        [
          _c("div", { staticClass: "p-6 bg-white border-b border-gray-200" }, [
            _c(
              "section",
              {
                staticClass:
                  "px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
              },
              [
                _c("header", { staticClass: "flex items-center justify-end" }, [
                  _c("a", { attrs: { href: "/developer-add" } }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 float-right"
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass:
                              "group-hover:text-blue-600 text-blue-500 mr-2",
                            attrs: {
                              width: "12",
                              height: "20",
                              fill: "currentColor"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
                              }
                            })
                          ]
                        ),
                        _vm._v("\n\t\t\t\t\t\t      New\n\t\t\t\t\t\t    ")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-col" }, [
                  _c(
                    "div",
                    { staticClass: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                            },
                            [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "min-w-full divide-y divide-gray-200"
                                },
                                [
                                  _vm._m(0),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    {
                                      staticClass:
                                        "bg-white divide-y divide-gray-200"
                                    },
                                    _vm._l(_vm.developers, function(developer) {
                                      return _c(
                                        "tr",
                                        { key: developer.email },
                                        [
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "flex items-center"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "flex-shrink-0 h-10 w-10"
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "h-10 w-10 rounded-full",
                                                        attrs: {
                                                          src: developer.avatar,
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "ml-4" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "text-sm font-medium text-gray-900"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n\t\t\t\t\t                        " +
                                                              _vm._s(
                                                                developer.first_name
                                                              ) +
                                                              " " +
                                                              _vm._s(
                                                                developer.last_name
                                                              ) +
                                                              "\n\t\t\t\t\t                      "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "text-sm text-gray-500"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n\t\t\t\t\t                        " +
                                                              _vm._s(
                                                                developer.email
                                                              ) +
                                                              "\n\t\t\t\t\t                      "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text-sm text-gray-500"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      developer.phone_number
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._m(1, true),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                                            },
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "px-5 text-indigo-600 hover:text-indigo-900",
                                                  attrs: {
                                                    to: {
                                                      name: "Edit Developer",
                                                      params: {
                                                        id: developer.id
                                                      }
                                                    }
                                                  }
                                                },
                                                [_vm._v("Edit")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "text-red-600 hover:text-red-900",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deletePost(
                                                        developer.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Delete")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-50" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t                  Name\n\t\t\t\t\t                "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t                  Phone Number\n\t\t\t\t\t                "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            attrs: { scope: "col" }
          },
          [
            _vm._v(
              "\n\t\t\t\t\t                  Status\n\t\t\t\t\t                "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "relative px-6 py-3", attrs: { scope: "col" } },
          [_c("span", { staticClass: "sr-only" }, [_vm._v("Edit")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "px-6 py-4 whitespace-nowrap" }, [
      _c(
        "span",
        {
          staticClass:
            "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        },
        [
          _vm._v(
            "\n\t\t\t\t\t                    Active\n\t\t\t\t\t                  "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);