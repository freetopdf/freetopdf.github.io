import { _ as _export_sfc, f as createBlock, w as withCtx, r as resolveComponent, u as useRouter, o as openBlock, b as createVNode, a as createBaseVNode, d as createTextVNode } from "./BFaS5VZR.js";
import { u as useHead } from "./4xSLyy9c.js";
const _hoisted_1 = { class: "d-flex flex-column flex-md-row gap-4 justify-center" };
const _sfc_main = {
  __name: "404",
  setup(__props) {
    const router = useRouter();
    useHead({
      title: "Page Not Found - FreeToPDF",
      meta: [
        {
          name: "description",
          content: "The page you are looking for could not be found. Return to FreeToPDF homepage or try our popular PDF tools."
        },
        {
          name: "robots",
          content: "noindex, nofollow"
        }
      ]
    });
    const goHome = () => {
      router.push("/");
    };
    const goBack = () => {
      if (window.history.length > 1) {
        router.go(-1);
      } else {
        router.push("/");
      }
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, { class: "py-12" }, {
        default: withCtx(() => [
          createVNode(_component_v_row, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "8",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "pa-8 text-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        size: "120",
                        color: "error",
                        class: "mb-6"
                      }, {
                        default: withCtx(() => _cache[3] || (_cache[3] = [
                          createTextVNode(" mdi-alert-circle-outline ")
                        ])),
                        _: 1,
                        __: [3]
                      }),
                      _cache[9] || (_cache[9] = createBaseVNode("h1", { class: "text-h3 font-weight-bold mb-4" }, " Page Not Found ", -1)),
                      _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-h6 text-medium-emphasis mb-6" }, " Sorry, the page you're looking for doesn't exist. ", -1)),
                      _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " The URL you entered might be incorrect or the page may have been moved. ", -1)),
                      createBaseVNode("div", _hoisted_1, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          size: "large",
                          onClick: goHome,
                          "prepend-icon": "mdi-home"
                        }, {
                          default: withCtx(() => _cache[4] || (_cache[4] = [
                            createTextVNode(" Go to Home ")
                          ])),
                          _: 1,
                          __: [4]
                        }),
                        createVNode(_component_v_btn, {
                          color: "secondary",
                          size: "large",
                          variant: "outlined",
                          onClick: goBack,
                          "prepend-icon": "mdi-arrow-left"
                        }, {
                          default: withCtx(() => _cache[5] || (_cache[5] = [
                            createTextVNode(" Go Back ")
                          ])),
                          _: 1,
                          __: [5]
                        })
                      ]),
                      createVNode(_component_v_divider, { class: "my-8" }),
                      _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "text-h5 mb-4" }, "Popular Tools", -1)),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                block: "",
                                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/pdf-to-word")),
                                "prepend-icon": "mdi-file-pdf-box"
                              }, {
                                default: withCtx(() => _cache[6] || (_cache[6] = [
                                  createTextVNode(" PDF to Word ")
                                ])),
                                _: 1,
                                __: [6]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "success",
                                variant: "outlined",
                                block: "",
                                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/word-to-pdf")),
                                "prepend-icon": "mdi-file-word-box"
                              }, {
                                default: withCtx(() => _cache[7] || (_cache[7] = [
                                  createTextVNode(" Word to PDF ")
                                ])),
                                _: 1,
                                __: [7]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                color: "info",
                                variant: "outlined",
                                block: "",
                                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.push("/merge")),
                                "prepend-icon": "mdi-file-multiple"
                              }, {
                                default: withCtx(() => _cache[8] || (_cache[8] = [
                                  createTextVNode(" Merge PDFs ")
                                ])),
                                _: 1,
                                __: [8]
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1,
                    __: [9, 10, 11, 12]
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f01e01f9"]]);
export {
  _404 as default
};
