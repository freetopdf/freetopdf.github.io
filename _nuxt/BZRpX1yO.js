import { _ as _export_sfc, g as ref, c as createElementBlock, b as createVNode, w as withCtx, r as resolveComponent, o as openBlock, a as createBaseVNode, d as createTextVNode, f as createBlock, m as createCommentVNode, n as withModifiers, t as toDisplayString, u as useRuntimeConfig } from "./BZR40qXE.js";
const _hoisted_1 = { class: "pdf-tools-comparison" };
const _sfc_main = {
  __name: "pdf-tools-comparison",
  setup(__props) {
    const optimizeFile = ref(null);
    const metadataFile = ref(null);
    const qualityLevel = ref("high");
    const customTitle = ref("");
    const customSubject = ref("");
    const customKeywords = ref("");
    const optimizing = ref(false);
    const enhancing = ref(false);
    const optimizeResult = ref(null);
    const metadataResult = ref(null);
    const qualityLevels = [
      { text: "High Quality (Maintain Original)", value: "high" },
      { text: "Medium Quality (Balanced Compression)", value: "medium" },
      { text: "Low Quality (Maximum Compression)", value: "low" }
    ];
    const optimizePdf = async () => {
      if (!optimizeFile.value) return;
      optimizing.value = true;
      optimizeResult.value = null;
      try {
        const formData = new FormData();
        formData.append("file", optimizeFile.value);
        formData.append("quality_level", qualityLevel.value);
        const config = useRuntimeConfig();
        const apiUrl = config.public.apiUrl || "http://127.0.0.1:8100";
        const response = await fetch(`${apiUrl}/api/optimize-pdf`, {
          method: "POST",
          body: formData
        });
        const result = await response.json();
        if (response.ok) {
          optimizeResult.value = {
            success: true,
            message: `PDF 최적화 완료! ${result.message}`
          };
          optimizeFile.value = null;
        } else {
          optimizeResult.value = {
            success: false,
            message: result.detail || "PDF optimization failed."
          };
        }
      } catch (error) {
        console.error("PDF optimization error:", error);
        optimizeResult.value = {
          success: false,
          message: "An error occurred during PDF optimization."
        };
      } finally {
        optimizing.value = false;
      }
    };
    const enhanceMetadata = async () => {
      if (!metadataFile.value) return;
      enhancing.value = true;
      metadataResult.value = null;
      try {
        const formData = new FormData();
        formData.append("file", metadataFile.value);
        if (customTitle.value) formData.append("title", customTitle.value);
        if (customSubject.value) formData.append("subject", customSubject.value);
        if (customKeywords.value) formData.append("keywords", customKeywords.value);
        const config = useRuntimeConfig();
        const apiUrl = config.public.apiUrl || "http://127.0.0.1:8100";
        const response = await fetch(`${apiUrl}/api/enhance-pdf-metadata`, {
          method: "POST",
          body: formData
        });
        const result = await response.json();
        if (response.ok) {
          metadataResult.value = {
            success: true,
            message: `PDF metadata enhancement completed! ${result.message}`
          };
          metadataFile.value = null;
          customTitle.value = "";
          customSubject.value = "";
          customKeywords.value = "";
        } else {
          metadataResult.value = {
            success: false,
            message: result.detail || "PDF metadata enhancement failed."
          };
        }
      } catch (error) {
        console.error("PDF metadata enhancement error:", error);
        metadataResult.value = {
          success: false,
          message: "An error occurred during PDF metadata enhancement."
        };
      } finally {
        enhancing.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_v_container, null, {
          default: withCtx(() => [
            createVNode(_component_v_row, null, {
              default: withCtx(() => [
                createVNode(_component_v_col, { cols: "12" }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createBaseVNode("h1", { class: "text-h3 text-center mb-6" }, "PDF Tools Comparison & Advanced Features", -1),
                    createBaseVNode("p", { class: "text-body-1 text-center mb-8" }, " Compare the pros and cons of various PDF conversion tools and try advanced PDF optimization features. ", -1)
                  ])),
                  _: 1,
                  __: [6]
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_row, null, {
              default: withCtx(() => [
                createVNode(_component_v_col, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { class: "mb-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => _cache[7] || (_cache[7] = [
                            createTextVNode("PDF Conversion Tools Comparison")
                          ])),
                          _: 1,
                          __: [7]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_table, null, {
                              default: withCtx(() => _cache[8] || (_cache[8] = [
                                createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("th", null, "Tool"),
                                    createBaseVNode("th", null, "Advantages"),
                                    createBaseVNode("th", null, "Disadvantages"),
                                    createBaseVNode("th", null, "Best Use Cases")
                                  ])
                                ], -1),
                                createBaseVNode("tbody", null, [
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("td", null, [
                                      createBaseVNode("strong", null, "LibreOffice")
                                    ]),
                                    createBaseVNode("td", null, "Excellent layout preservation, free, stable"),
                                    createBaseVNode("td", null, "Installation required, processing time somewhat long"),
                                    createBaseVNode("td", null, "When document format is important")
                                  ]),
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("td", null, [
                                      createBaseVNode("strong", null, "Pandoc")
                                    ]),
                                    createBaseVNode("td", null, "Fast processing, supports various formats"),
                                    createBaseVNode("td", null, "Complex layout may be lost"),
                                    createBaseVNode("td", null, "Text-focused documents")
                                  ]),
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("td", null, [
                                      createBaseVNode("strong", null, "pdf2docx")
                                    ]),
                                    createBaseVNode("td", null, "Python-based, excellent table preservation"),
                                    createBaseVNode("td", null, "Complex installation, high memory usage"),
                                    createBaseVNode("td", null, "Documents with many tables")
                                  ]),
                                  createBaseVNode("tr", null, [
                                    createBaseVNode("td", null, [
                                      createBaseVNode("strong", null, "Text Extraction")
                                    ]),
                                    createBaseVNode("td", null, "Fastest, no dependencies"),
                                    createBaseVNode("td", null, "Complete layout loss"),
                                    createBaseVNode("td", null, "When only text is needed")
                                  ])
                                ], -1)
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
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_row, null, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { class: "h-100" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => _cache[9] || (_cache[9] = [
                                createTextVNode("mdi-compress")
                              ])),
                              _: 1,
                              __: [9]
                            }),
                            _cache[10] || (_cache[10] = createTextVNode(" PDF Quality Optimization "))
                          ]),
                          _: 1,
                          __: [10]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            _cache[13] || (_cache[13] = createBaseVNode("p", { class: "mb-4" }, " Adjust PDF file quality and optimize file size to save storage space and improve transmission speed. ", -1)),
                            createVNode(_component_v_form, {
                              onSubmit: withModifiers(optimizePdf, ["prevent"]),
                              ref: "optimizeForm"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_file_input, {
                                  modelValue: optimizeFile.value,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optimizeFile.value = $event),
                                  label: "Select PDF File",
                                  accept: ".pdf",
                                  rules: [(v) => !!v || "Please select a PDF file"],
                                  "prepend-icon": "mdi-file-pdf-box",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "rules"]),
                                createVNode(_component_v_select, {
                                  modelValue: qualityLevel.value,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => qualityLevel.value = $event),
                                  label: "Quality Level",
                                  items: qualityLevels,
                                  "item-title": "text",
                                  "item-value": "value",
                                  class: "mb-4"
                                }, null, 8, ["modelValue"]),
                                createVNode(_component_v_btn, {
                                  type: "submit",
                                  color: "primary",
                                  block: "",
                                  loading: optimizing.value,
                                  disabled: !optimizeFile.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { class: "mr-2" }, {
                                      default: withCtx(() => _cache[11] || (_cache[11] = [
                                        createTextVNode("mdi-compress")
                                      ])),
                                      _: 1,
                                      __: [11]
                                    }),
                                    _cache[12] || (_cache[12] = createTextVNode(" Optimize PDF "))
                                  ]),
                                  _: 1,
                                  __: [12]
                                }, 8, ["loading", "disabled"])
                              ]),
                              _: 1
                            }, 512),
                            optimizeResult.value ? (openBlock(), createBlock(_component_v_alert, {
                              key: 0,
                              type: optimizeResult.value.success ? "success" : "error",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(optimizeResult.value.message), 1)
                              ]),
                              _: 1
                            }, 8, ["type"])) : createCommentVNode("", true)
                          ]),
                          _: 1,
                          __: [13]
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { class: "h-100" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => _cache[14] || (_cache[14] = [
                                createTextVNode("mdi-tag-text")
                              ])),
                              _: 1,
                              __: [14]
                            }),
                            _cache[15] || (_cache[15] = createTextVNode(" PDF Metadata Enhancement "))
                          ]),
                          _: 1,
                          __: [15]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            _cache[18] || (_cache[18] = createBaseVNode("p", { class: "mb-4" }, " Add metadata such as author, title, subject, and keywords to PDF files to improve document management and search capabilities. ", -1)),
                            createVNode(_component_v_form, {
                              onSubmit: withModifiers(enhanceMetadata, ["prevent"]),
                              ref: "metadataForm"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_file_input, {
                                  modelValue: metadataFile.value,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => metadataFile.value = $event),
                                  label: "Select PDF File",
                                  accept: ".pdf",
                                  rules: [(v) => !!v || "Please select a PDF file"],
                                  "prepend-icon": "mdi-file-pdf-box",
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: customTitle.value,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => customTitle.value = $event),
                                  label: "Document Title (Optional)",
                                  placeholder: "Enter document title",
                                  class: "mb-4"
                                }, null, 8, ["modelValue"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: customSubject.value,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => customSubject.value = $event),
                                  label: "Document Subject (Optional)",
                                  placeholder: "Enter document subject",
                                  class: "mb-4"
                                }, null, 8, ["modelValue"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: customKeywords.value,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => customKeywords.value = $event),
                                  label: "Keywords (Optional)",
                                  placeholder: "Enter separated by commas",
                                  class: "mb-4"
                                }, null, 8, ["modelValue"]),
                                createVNode(_component_v_btn, {
                                  type: "submit",
                                  color: "secondary",
                                  block: "",
                                  loading: enhancing.value,
                                  disabled: !metadataFile.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { class: "mr-2" }, {
                                      default: withCtx(() => _cache[16] || (_cache[16] = [
                                        createTextVNode("mdi-tag-text")
                                      ])),
                                      _: 1,
                                      __: [16]
                                    }),
                                    _cache[17] || (_cache[17] = createTextVNode(" Enhance Metadata "))
                                  ]),
                                  _: 1,
                                  __: [17]
                                }, 8, ["loading", "disabled"])
                              ]),
                              _: 1
                            }, 512),
                            metadataResult.value ? (openBlock(), createBlock(_component_v_alert, {
                              key: 0,
                              type: metadataResult.value.success ? "success" : "error",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(metadataResult.value.message), 1)
                              ]),
                              _: 1
                            }, 8, ["type"])) : createCommentVNode("", true)
                          ]),
                          _: 1,
                          __: [18]
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
            createVNode(_component_v_row, { class: "mt-6" }, {
              default: withCtx(() => [
                createVNode(_component_v_col, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { class: "mr-2" }, {
                              default: withCtx(() => _cache[19] || (_cache[19] = [
                                createTextVNode("mdi-lightbulb")
                              ])),
                              _: 1,
                              __: [19]
                            }),
                            _cache[20] || (_cache[20] = createTextVNode(" Usage Tips "))
                          ]),
                          _: 1,
                          __: [20]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, null, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_icon, { color: "primary" }, {
                                      default: withCtx(() => _cache[21] || (_cache[21] = [
                                        createTextVNode("mdi-check-circle")
                                      ])),
                                      _: 1,
                                      __: [21]
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => _cache[22] || (_cache[22] = [
                                        createTextVNode("PDF Optimization")
                                      ])),
                                      _: 1,
                                      __: [22]
                                    }),
                                    createVNode(_component_v_list_item_subtitle, null, {
                                      default: withCtx(() => _cache[23] || (_cache[23] = [
                                        createTextVNode(" High quality: Maintain original quality, Medium quality: Balanced compression, Low quality: Maximum compression ")
                                      ])),
                                      _: 1,
                                      __: [23]
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_icon, { color: "primary" }, {
                                      default: withCtx(() => _cache[24] || (_cache[24] = [
                                        createTextVNode("mdi-check-circle")
                                      ])),
                                      _: 1,
                                      __: [24]
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => _cache[25] || (_cache[25] = [
                                        createTextVNode("Metadata Enhancement")
                                      ])),
                                      _: 1,
                                      __: [25]
                                    }),
                                    createVNode(_component_v_list_item_subtitle, null, {
                                      default: withCtx(() => _cache[26] || (_cache[26] = [
                                        createTextVNode(" Add relevant information for document search and classification ")
                                      ])),
                                      _: 1,
                                      __: [26]
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list_item, null, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_icon, { color: "primary" }, {
                                      default: withCtx(() => _cache[27] || (_cache[27] = [
                                        createTextVNode("mdi-check-circle")
                                      ])),
                                      _: 1,
                                      __: [27]
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => _cache[28] || (_cache[28] = [
                                        createTextVNode("Conversion Tool Selection")
                                      ])),
                                      _: 1,
                                      __: [28]
                                    }),
                                    createVNode(_component_v_list_item_subtitle, null, {
                                      default: withCtx(() => _cache[29] || (_cache[29] = [
                                        createTextVNode(" Choose the appropriate conversion tool based on document characteristics ")
                                      ])),
                                      _: 1,
                                      __: [29]
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
                      _: 1
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
      ]);
    };
  }
};
const pdfToolsComparison = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-acc6eb91"]]);
export {
  pdfToolsComparison as default
};
