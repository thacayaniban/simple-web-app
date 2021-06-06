(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_EditDeveloper_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/EditDeveloper.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/EditDeveloper.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: new Form({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: '',
        avatar: '',
        avatar_blob: ''
      })
    };
  },
  methods: {
    getProfilePhoto: function getProfilePhoto() {
      var avatar = '';

      if (this.form.avatar_blob != undefined) {
        avatar = this.form.avatar_blob.length > 10 ? this.form.avatar_blob : "img/profile/" + this.form.avatar;
      } else {
        avatar = this.form.avatar.length > 10 ? this.form.avatar : "img/profile/" + this.form.avatar;
      }

      return avatar;
    },
    updateInfo: function updateInfo() {
      var _this = this;

      if (!(this.form.avatar instanceof File)) {
        this.form.avatar = null;
      }

      this.form.post("http://simple-web-app.test" + "/api/developer/".concat(this.$route.params.id)).then(function () {
        _this.$router.push({
          name: 'All Developers'
        });
      })["catch"](function () {});
    },
    updateProfile: function updateProfile(e) {
      var _this2 = this;

      var file = e.target.files[0];
      this.form.avatar = file;
      var reader = new FileReader();
      var limit = 1024 * 1024 * 2;

      if (file['size'] > limit) {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'You are uploading a large file'
        });
        return false;
      }

      reader.onloadend = function (file) {
        _this2.form.avatar_blob = reader.result;
      };

      reader.readAsDataURL(file);
    }
  },
  created: function created() {
    var _this3 = this;

    this.axios.get("http://simple-web-app.test" + "/api/developers/".concat(this.$route.params.id)).then(function (_ref) {
      var data = _ref.data;
      return _this3.form.fill(data);
    });
  }
});

/***/ }),

/***/ "./resources/js/admin/EditDeveloper.vue":
/*!**********************************************!*\
  !*** ./resources/js/admin/EditDeveloper.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditDeveloper_vue_vue_type_template_id_5d0264f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDeveloper.vue?vue&type=template&id=5d0264f2& */ "./resources/js/admin/EditDeveloper.vue?vue&type=template&id=5d0264f2&");
/* harmony import */ var _EditDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDeveloper.vue?vue&type=script&lang=js& */ "./resources/js/admin/EditDeveloper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditDeveloper_vue_vue_type_template_id_5d0264f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditDeveloper_vue_vue_type_template_id_5d0264f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/EditDeveloper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/EditDeveloper.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/EditDeveloper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditDeveloper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/EditDeveloper.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDeveloper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/EditDeveloper.vue?vue&type=template&id=5d0264f2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/EditDeveloper.vue?vue&type=template&id=5d0264f2& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDeveloper_vue_vue_type_template_id_5d0264f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDeveloper_vue_vue_type_template_id_5d0264f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDeveloper_vue_vue_type_template_id_5d0264f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditDeveloper.vue?vue&type=template&id=5d0264f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/EditDeveloper.vue?vue&type=template&id=5d0264f2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/EditDeveloper.vue?vue&type=template&id=5d0264f2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/EditDeveloper.vue?vue&type=template&id=5d0264f2& ***!
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
          _c("div", { staticClass: "md:grid md:grid-cols-3 md:gap-6" }, [
            _c("div", { staticClass: "mt-5 md:mt-0 md:col-span-3" }, [
              _c("form", [
                _c(
                  "div",
                  { staticClass: "shadow sm:rounded-md sm:overflow-hidden" },
                  [
                    _c(
                      "div",
                      { staticClass: "px-4 py-5 bg-white space-y-6 sm:p-6" },
                      [
                        _c("div", { staticClass: "grid grid-cols-6 gap-6" }, [
                          _c(
                            "div",
                            { staticClass: "col-span-6 sm:col-span-6" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "block text-sm font-medium text-gray-700"
                                },
                                [
                                  _vm._v(
                                    "\n                                Photo\n                              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mt-1 flex items-center" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !_vm.form.avatar,
                                              expression: "!form.avatar"
                                            }
                                          ],
                                          staticClass:
                                            "h-full w-full text-gray-300",
                                          attrs: {
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("img", {
                                        staticClass: "img-circle",
                                        attrs: {
                                          src: _vm.getProfilePhoto(),
                                          alt: "User Avatar"
                                        },
                                        model: {
                                          value: _vm.form.avatar_blob,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "avatar_blob",
                                              $$v
                                            )
                                          },
                                          expression: "form.avatar_blob"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                      attrs: { type: "button" }
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "form-input",
                                        attrs: {
                                          type: "file",
                                          name: "avatar",
                                          id: "avatar"
                                        },
                                        on: { change: _vm.updateProfile }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-span-6 sm:col-span-3" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "block text-sm font-medium text-gray-700",
                                  attrs: { for: "first_name" }
                                },
                                [_vm._v("First name")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.first_name,
                                    expression: "form.first_name"
                                  }
                                ],
                                staticClass:
                                  "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
                                attrs: {
                                  type: "text",
                                  autocomplete: "given-name",
                                  id: "first_name",
                                  placeholder: "First Name"
                                },
                                domProps: { value: _vm.form.first_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "first_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("first_name")
                                ? _c("div", {
                                    staticClass:
                                      "mt-3 list-disc list-inside text-sm text-red-600",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.form.errors.get("first_name")
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-span-6 sm:col-span-3" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "block text-sm font-medium text-gray-700",
                                  attrs: { for: "last_name" }
                                },
                                [_vm._v("Last name")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.last_name,
                                    expression: "form.last_name"
                                  }
                                ],
                                staticClass:
                                  "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
                                attrs: {
                                  type: "text",
                                  id: "last_name",
                                  autocomplete: "family-name",
                                  placeholder: "Last Name"
                                },
                                domProps: { value: _vm.form.last_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "last_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("last_name")
                                ? _c("div", {
                                    staticClass:
                                      "mt-3 list-disc list-inside text-sm text-red-600",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.form.errors.get("last_name")
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-span-6 sm:col-span-3" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "block text-sm font-medium text-gray-700",
                                  attrs: { for: "email" }
                                },
                                [_vm._v("Email address")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.email,
                                    expression: "form.email"
                                  }
                                ],
                                staticClass:
                                  "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
                                attrs: {
                                  type: "text",
                                  id: "email",
                                  autocomplete: "email",
                                  placeholder: "Email"
                                },
                                domProps: { value: _vm.form.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("email")
                                ? _c("div", {
                                    staticClass:
                                      "mt-3 list-disc list-inside text-sm text-red-600",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.form.errors.get("email")
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-span-6 sm:col-span-3" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "block text-sm font-medium text-gray-700",
                                  attrs: { for: "phone_number" }
                                },
                                [_vm._v("Phone number")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.phone_number,
                                    expression: "form.phone_number"
                                  }
                                ],
                                staticClass:
                                  "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
                                attrs: {
                                  type: "text",
                                  id: "phone_number",
                                  autocomplete: "email",
                                  placeholder: "Phone Number"
                                },
                                domProps: { value: _vm.form.phone_number },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "phone_number",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("phone_number")
                                ? _c("div", {
                                    staticClass:
                                      "mt-3 list-disc list-inside text-sm text-red-600",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        _vm.form.errors.get("phone_number")
                                      )
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-span-6" }, [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block text-sm font-medium text-gray-700",
                                attrs: { for: "address" }
                              },
                              [_vm._v("Address")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.address,
                                  expression: "form.address"
                                }
                              ],
                              staticClass:
                                "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
                              attrs: {
                                type: "text",
                                id: "address",
                                autocomplete: "street-address",
                                placeholder: "Address"
                              },
                              domProps: { value: _vm.form.address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.form.errors.has("address")
                              ? _c("div", {
                                  staticClass:
                                    "mt-3 list-disc list-inside text-sm text-red-600",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.form.errors.get("address")
                                    )
                                  }
                                })
                              : _vm._e()
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "px-4 py-3 bg-gray-50 text-right sm:px-6"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                            attrs: { type: "submit" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.updateInfo.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Save\n                          "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);