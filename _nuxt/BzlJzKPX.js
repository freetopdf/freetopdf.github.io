import { _ as _export_sfc, h as ref, g as onMounted, f as createBlock, w as withCtx, r as resolveComponent, u as useRouter, o as openBlock, b as createVNode, a as createBaseVNode, c as createElementBlock, p as unref, d as createTextVNode, t as toDisplayString } from "./BFaS5VZR.js";
const _hoisted_1 = { class: "pdf-preview mb-6" };
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 1,
  class: "text-center py-12"
};
const _hoisted_4 = { class: "text-medium-emphasis" };
const _hoisted_5 = { class: "text-medium-emphasis" };
const _hoisted_6 = { class: "text-medium-emphasis" };
const _sfc_main = {
  __name: "result",
  setup(__props) {
    const router = useRouter();
    const pdfUrl = ref("");
    const fileName = ref("converted.pdf");
    const fileSize = ref("2.5 MB");
    const pageCount = ref(5);
    const downloadPDF = () => {
      console.log("Downloading PDF...");
    };
    const editPDF = () => {
      console.log("Editing PDF...");
    };
    const startNewConversion = () => {
      router.push("/convertToPdf");
    };
    onMounted(() => {
      pdfUrl.value = "/path/to/converted.pdf";
    });
    return (_ctx, _cache) => {
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, { class: "py-12" }, {
        default: withCtx(() => [
          createVNode(_component_v_row, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "10",
                lg: "8"
              }, {
                default: withCtx(() => [
                  _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-center mb-8" }, [
                    createBaseVNode("h1", { class: "text-h3 font-weight-bold mb-4" }, "Your PDF is Ready"),
                    createBaseVNode("p", { class: "text-h6 text-medium-emphasis" }, "View and download your converted PDF")
                  ], -1)),
                  createVNode(_component_v_card, {
                    class: "pa-6 rounded-lg",
                    elevation: "2"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        unref(pdfUrl) ? (openBlock(), createElementBlock("iframe", {
                          key: 0,
                          src: unref(pdfUrl),
                          class: "pdf-viewer",
                          frameborder: "0"
                        }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("div", _hoisted_3, [
                          createVNode(_component_v_progress_circular, {
                            indeterminate: "",
                            color: "primary",
                            size: "64"
                          }),
                          _cache[0] || (_cache[0] = createBaseVNode("p", { class: "mt-4" }, "Loading PDF...", -1))
                        ]))
                      ]),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                color: "primary",
                                size: "large",
                                class: "text-none",
                                onClick: downloadPDF
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { start: "" }, {
                                    default: withCtx(() => _cache[1] || (_cache[1] = [
                                      createTextVNode("mdi-download")
                                    ])),
                                    _: 1,
                                    __: [1]
                                  }),
                                  _cache[2] || (_cache[2] = createTextVNode(" Download PDF "))
                                ]),
                                _: 1,
                                __: [2]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                color: "secondary",
                                size: "large",
                                class: "text-none",
                                onClick: editPDF
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { start: "" }, {
                                    default: withCtx(() => _cache[3] || (_cache[3] = [
                                      createTextVNode("mdi-pencil")
                                    ])),
                                    _: 1,
                                    __: [3]
                                  }),
                                  _cache[4] || (_cache[4] = createTextVNode(" Edit PDF "))
                                ]),
                                _: 1,
                                __: [4]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                block: "",
                                variant: "outlined",
                                size: "large",
                                class: "text-none",
                                onClick: startNewConversion
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { start: "" }, {
                                    default: withCtx(() => _cache[5] || (_cache[5] = [
                                      createTextVNode("mdi-plus")
                                    ])),
                                    _: 1,
                                    __: [5]
                                  }),
                                  _cache[6] || (_cache[6] = createTextVNode(" New Conversion "))
                                ]),
                                _: 1,
                                __: [6]
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card, {
                    class: "mt-6 pa-4",
                    elevation: "1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, null, {
                            prepend: withCtx(() => [
                              createVNode(_component_v_icon, { color: "primary" }, {
                                default: withCtx(() => _cache[7] || (_cache[7] = [
                                  createTextVNode("mdi-file-pdf-box")
                                ])),
                                _: 1,
                                __: [7]
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => _cache[8] || (_cache[8] = [
                                  createTextVNode("File Information")
                                ])),
                                _: 1,
                                __: [8]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_list_item, null, {
                            append: withCtx(() => [
                              createBaseVNode("span", _hoisted_4, toDisplayString(unref(fileName)), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => _cache[9] || (_cache[9] = [
                                  createTextVNode("File Name")
                                ])),
                                _: 1,
                                __: [9]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            append: withCtx(() => [
                              createBaseVNode("span", _hoisted_5, toDisplayString(unref(fileSize)), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => _cache[10] || (_cache[10] = [
                                  createTextVNode("File Size")
                                ])),
                                _: 1,
                                __: [10]
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            append: withCtx(() => [
                              createBaseVNode("span", _hoisted_6, toDisplayString(unref(pageCount)) + " pages", 1)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => _cache[11] || (_cache[11] = [
                                  createTextVNode("Pages")
                                ])),
                                _: 1,
                                __: [11]
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1,
                __: [12]
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
const result = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-148b333f"]]);
export {
  result as default
};
