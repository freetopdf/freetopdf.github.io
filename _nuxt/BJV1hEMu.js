import { _ as __nuxt_component_0 } from "./i_PhwrFo.js";
import { _ as _export_sfc, c as createElementBlock, o as openBlock, b as createVNode, g as ref, w as withCtx, r as resolveComponent, a as createBaseVNode, j as unref, d as createTextVNode, F as Fragment, k as renderList, t as toDisplayString, q as isRef, f as createBlock, m as createCommentVNode } from "./CW-H5Tg8.js";
import { g as getAdsenseConfig } from "./BRjNktF3.js";
import { u as useHead } from "./DlUv_ELu.js";
const _hoisted_1$1 = { class: "sidebar-ad" };
const _sfc_main$1 = {
  __name: "SidebarAd",
  props: {
    adSlot: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_GoogleAdsense = __nuxt_component_0;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_GoogleAdsense, {
          "ad-slot": __props.adSlot,
          "ad-format": "vertical",
          "full-width-responsive": false
        }, null, 8, ["ad-slot"])
      ]);
    };
  }
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b1f2f015"]]);
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = {
  id: `section-0`,
  class: "mb-8"
};
const _hoisted_3 = {
  id: `section-1`,
  class: "mb-8"
};
const _hoisted_4 = { class: "pa-4" };
const _hoisted_5 = { class: "text-h6 mb-2" };
const _hoisted_6 = { class: "text-body-1" };
const _hoisted_7 = { class: "ad-placeholder" };
const _hoisted_8 = {
  id: `section-2`,
  class: "mb-8"
};
const _hoisted_9 = {
  id: `section-3`,
  class: "mb-8"
};
const _hoisted_10 = {
  id: `section-4`,
  class: "mb-8"
};
const _hoisted_11 = { class: "text-h6 mb-3" };
const _hoisted_12 = { class: "text-h6 mb-3" };
const _hoisted_13 = { class: "text-h6 mb-3" };
const _hoisted_14 = { class: "text-h6 mb-3" };
const _hoisted_15 = {
  id: `section-5`,
  class: "mb-8"
};
const _hoisted_16 = { class: "mb-8" };
const _hoisted_17 = { class: "ad-placeholder" };
const _hoisted_18 = { class: "ad-placeholder" };
const _sfc_main = {
  __name: "pdf-guide",
  setup(__props) {
    const adsenseConfig = getAdsenseConfig();
    useHead({
      title: "Complete PDF Guide & Tutorials - Learn PDF Conversion, Editing & Security",
      meta: [
        {
          name: "description",
          content: "Comprehensive PDF guide covering everything from basic concepts to advanced editing techniques. Learn how to convert PDF to Word, Word to PDF, merge files, and secure your documents."
        },
        {
          name: "keywords",
          content: "PDF guide, PDF tutorial, PDF to Word conversion, Word to PDF, PDF editing, PDF security, PDF tips, document conversion guide"
        },
        {
          name: "robots",
          content: "index, follow"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Complete PDF Guide & Tutorials",
            "description": "Comprehensive guide to PDF files, conversion, editing, and security",
            "url": "https://freetopdf.com/pdf-guide",
            "mainEntity": {
              "@type": "Article",
              "name": "Complete PDF Guide & Tutorials",
              "author": {
                "@type": "Organization",
                "name": "FreeToPDF"
              },
              "publisher": {
                "@type": "Organization",
                "name": "FreeToPDF",
                "url": "https://freetopdf.com"
              },
              "datePublished": "2024-01-01",
              "dateModified": "2024-01-01",
              "headline": "Complete PDF Guide & Tutorials - Learn Everything About PDF Files"
            }
          })
        }
      ]
    });
    const currentStep = ref(1);
    const sections = [
      { title: "What is PDF?" },
      { title: "PDF to Word Conversion" },
      { title: "Word to PDF Conversion" },
      { title: "PDF Editing Tips" },
      { title: "PDF Security" },
      { title: "FAQ" }
    ];
    const pdfToWordSteps = [
      {
        title: "Upload PDF",
        description: "Select your PDF file from your device. Supported formats include scanned documents and text-based PDFs."
      },
      {
        title: "Choose Settings",
        description: "Select conversion options like page range, output format, and quality settings for optimal results."
      },
      {
        title: "Convert",
        description: "Click convert and wait for the processing to complete. This may take a few moments depending on file size."
      },
      {
        title: "Download",
        description: "Download your converted Word document. The file will maintain formatting and be ready for editing."
      }
    ];
    return (_ctx, _cache) => {
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_GoogleAdsense = __nuxt_component_0;
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_SidebarAd = __nuxt_component_1;
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_stepper_item = resolveComponent("v-stepper-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_stepper_header = resolveComponent("v-stepper-header");
      const _component_v_stepper_window_item = resolveComponent("v-stepper-window-item");
      const _component_v_stepper_window = resolveComponent("v-stepper-window");
      const _component_v_stepper = resolveComponent("v-stepper");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_v_container, { class: "py-8" }, {
          default: withCtx(() => [
            createVNode(_component_v_row, {
              justify: "center",
              class: "mb-8"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "10",
                  lg: "8"
                }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [
                    createBaseVNode("h1", { class: "text-h3 font-weight-bold text-center mb-4" }, " Complete PDF Guide & Tutorials ", -1),
                    createBaseVNode("p", { class: "text-h6 text-center text-medium-emphasis" }, " Everything you need to know about PDF files, conversion, and editing ", -1)
                  ])),
                  _: 1,
                  __: [7]
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_row, { class: "mb-8" }, {
              default: withCtx(() => [
                createVNode(_component_v_col, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(_component_GoogleAdsense, {
                      "ad-slot": unref(adsenseConfig).slots.pdfGuide,
                      "ad-format": "auto",
                      "full-width-responsive": "true"
                    }, null, 8, ["ad-slot"])
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
                  md: "3",
                  class: "mb-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { class: "sticky-sidebar" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "text-h6" }, {
                          default: withCtx(() => _cache[8] || (_cache[8] = [
                            createTextVNode("Table of Contents")
                          ])),
                          _: 1,
                          __: [8]
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list, { density: "compact" }, {
                              default: withCtx(() => [
                                (openBlock(), createElementBlock(Fragment, null, renderList(sections, (section, index) => {
                                  return createVNode(_component_v_list_item, {
                                    key: index,
                                    href: `#section-${index}`,
                                    class: "text-decoration-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, { class: "text-body-2" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(section.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["href"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_1, [
                      createVNode(_component_SidebarAd, {
                        "ad-slot": unref(adsenseConfig).slots.sidebar
                      }, null, 8, ["ad-slot"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "9"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("section", _hoisted_2, [
                      _cache[19] || (_cache[19] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "What is PDF?", -1)),
                      createVNode(_component_v_card, { class: "pa-6" }, {
                        default: withCtx(() => [
                          _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-body-1 mb-4" }, " PDF (Portable Document Format) is a file format developed by Adobe in 1993. It's designed to present documents consistently across different devices, operating systems, and software applications. ", -1)),
                          _cache[18] || (_cache[18] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "Key Features of PDF:", -1)),
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, null, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, { color: "success" }, {
                                    default: withCtx(() => _cache[9] || (_cache[9] = [
                                      createTextVNode("mdi-check-circle")
                                    ])),
                                    _: 1,
                                    __: [9]
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => _cache[10] || (_cache[10] = [
                                      createTextVNode("Cross-platform compatibility")
                                    ])),
                                    _: 1,
                                    __: [10]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, { color: "success" }, {
                                    default: withCtx(() => _cache[11] || (_cache[11] = [
                                      createTextVNode("mdi-check-circle")
                                    ])),
                                    _: 1,
                                    __: [11]
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => _cache[12] || (_cache[12] = [
                                      createTextVNode("Preserves formatting and layout")
                                    ])),
                                    _: 1,
                                    __: [12]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, { color: "success" }, {
                                    default: withCtx(() => _cache[13] || (_cache[13] = [
                                      createTextVNode("mdi-check-circle")
                                    ])),
                                    _: 1,
                                    __: [13]
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => _cache[14] || (_cache[14] = [
                                      createTextVNode("Security features (encryption, digital signatures)")
                                    ])),
                                    _: 1,
                                    __: [14]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list_item, null, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, { color: "success" }, {
                                    default: withCtx(() => _cache[15] || (_cache[15] = [
                                      createTextVNode("mdi-check-circle")
                                    ])),
                                    _: 1,
                                    __: [15]
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => _cache[16] || (_cache[16] = [
                                      createTextVNode("Compression capabilities")
                                    ])),
                                    _: 1,
                                    __: [16]
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1,
                        __: [17, 18]
                      })
                    ]),
                    createBaseVNode("section", _hoisted_3, [
                      _cache[23] || (_cache[23] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "How to Convert PDF to Word", -1)),
                      createVNode(_component_v_card, { class: "pa-6" }, {
                        default: withCtx(() => [
                          _cache[22] || (_cache[22] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "Step-by-Step Guide:", -1)),
                          createVNode(_component_v_stepper, {
                            modelValue: unref(currentStep),
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(currentStep) ? currentStep.value = $event : null),
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_stepper_header, null, {
                                default: withCtx(() => [
                                  (openBlock(), createElementBlock(Fragment, null, renderList(pdfToWordSteps, (step, index) => {
                                    return openBlock(), createElementBlock(Fragment, { key: index }, [
                                      createVNode(_component_v_stepper_item, {
                                        value: index + 1
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(step.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]),
                                      index < pdfToWordSteps.length - 1 ? (openBlock(), createBlock(_component_v_divider, { key: 0 })) : createCommentVNode("", true)
                                    ], 64);
                                  }), 64))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_stepper_window, null, {
                                default: withCtx(() => [
                                  (openBlock(), createElementBlock(Fragment, null, renderList(pdfToWordSteps, (step, index) => {
                                    return createVNode(_component_v_stepper_window_item, {
                                      key: index,
                                      value: index + 1
                                    }, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_4, [
                                          createBaseVNode("h4", _hoisted_5, toDisplayString(step.title), 1),
                                          createBaseVNode("p", _hoisted_6, toDisplayString(step.description), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"]),
                          createVNode(_component_v_alert, {
                            type: "info",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => _cache[20] || (_cache[20] = [
                              createBaseVNode("strong", null, "Pro Tip:", -1),
                              createTextVNode(" For best results, ensure your PDF has clear, readable text. Scanned documents may require OCR (Optical Character Recognition) for optimal conversion. ")
                            ])),
                            _: 1,
                            __: [20]
                          }),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            size: "large",
                            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/pdf-to-word")),
                            "prepend-icon": "mdi-file-pdf-box"
                          }, {
                            default: withCtx(() => _cache[21] || (_cache[21] = [
                              createTextVNode(" Try PDF to Word Converter ")
                            ])),
                            _: 1,
                            __: [21]
                          })
                        ]),
                        _: 1,
                        __: [22]
                      })
                    ]),
                    createVNode(_component_v_row, { class: "mb-8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { class: "ad-inline text-center pa-4" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_7, [
                                  createVNode(_component_v_icon, {
                                    size: "32",
                                    color: "grey-lighten-1"
                                  }, {
                                    default: withCtx(() => _cache[24] || (_cache[24] = [
                                      createTextVNode("mdi-advertisement")
                                    ])),
                                    _: 1,
                                    __: [24]
                                  }),
                                  _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-body-2 text-grey-lighten-1 mt-2" }, "Advertisement Space", -1)),
                                  _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-caption text-grey-lighten-1" }, "728x90 Inline Ad", -1))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createBaseVNode("section", _hoisted_8, [
                      _cache[41] || (_cache[41] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "How to Convert Word to PDF", -1)),
                      createVNode(_component_v_card, { class: "pa-6" }, {
                        default: withCtx(() => [
                          _cache[40] || (_cache[40] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "Why Convert Word to PDF?", -1)),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => _cache[27] || (_cache[27] = [
                                              createTextVNode("mdi-shield-check")
                                            ])),
                                            _: 1,
                                            __: [27]
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => _cache[28] || (_cache[28] = [
                                              createTextVNode("Document Security")
                                            ])),
                                            _: 1,
                                            __: [28]
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => _cache[29] || (_cache[29] = [
                                              createTextVNode("Prevent unauthorized editing")
                                            ])),
                                            _: 1,
                                            __: [29]
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => _cache[30] || (_cache[30] = [
                                              createTextVNode("mdi-format-align-left")
                                            ])),
                                            _: 1,
                                            __: [30]
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => _cache[31] || (_cache[31] = [
                                              createTextVNode("Format Preservation")
                                            ])),
                                            _: 1,
                                            __: [31]
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => _cache[32] || (_cache[32] = [
                                              createTextVNode("Maintain exact layout across devices")
                                            ])),
                                            _: 1,
                                            __: [32]
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
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => _cache[33] || (_cache[33] = [
                                              createTextVNode("mdi-share-variant")
                                            ])),
                                            _: 1,
                                            __: [33]
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => _cache[34] || (_cache[34] = [
                                              createTextVNode("Easy Sharing")
                                            ])),
                                            _: 1,
                                            __: [34]
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => _cache[35] || (_cache[35] = [
                                              createTextVNode("Universal compatibility")
                                            ])),
                                            _: 1,
                                            __: [35]
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list_item, null, {
                                        prepend: withCtx(() => [
                                          createVNode(_component_v_icon, { color: "primary" }, {
                                            default: withCtx(() => _cache[36] || (_cache[36] = [
                                              createTextVNode("mdi-printer")
                                            ])),
                                            _: 1,
                                            __: [36]
                                          })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item_title, null, {
                                            default: withCtx(() => _cache[37] || (_cache[37] = [
                                              createTextVNode("Print-Ready")
                                            ])),
                                            _: 1,
                                            __: [37]
                                          }),
                                          createVNode(_component_v_list_item_subtitle, null, {
                                            default: withCtx(() => _cache[38] || (_cache[38] = [
                                              createTextVNode("Consistent printing results")
                                            ])),
                                            _: 1,
                                            __: [38]
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
                          createVNode(_component_v_btn, {
                            color: "secondary",
                            size: "large",
                            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.push("/word-to-pdf")),
                            "prepend-icon": "mdi-file-word-box",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => _cache[39] || (_cache[39] = [
                              createTextVNode(" Try Word to PDF Converter ")
                            ])),
                            _: 1,
                            __: [39]
                          })
                        ]),
                        _: 1,
                        __: [40]
                      })
                    ]),
                    createBaseVNode("section", _hoisted_9, [
                      _cache[54] || (_cache[54] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "PDF Editing Tips & Tricks", -1)),
                      createVNode(_component_v_card, { class: "pa-6" }, {
                        default: withCtx(() => [
                          _cache[53] || (_cache[53] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "Common PDF Editing Tasks:", -1)),
                          createVNode(_component_v_expansion_panels, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { class: "mr-2" }, {
                                        default: withCtx(() => _cache[42] || (_cache[42] = [
                                          createTextVNode("mdi-text")
                                        ])),
                                        _: 1,
                                        __: [42]
                                      }),
                                      _cache[43] || (_cache[43] = createTextVNode(" Adding Text to PDF "))
                                    ]),
                                    _: 1,
                                    __: [43]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => _cache[44] || (_cache[44] = [
                                      createBaseVNode("p", { class: "text-body-1 mb-2" }, " To add text to a PDF, you'll need a PDF editor that supports text insertion. Most modern PDF editors allow you to: ", -1),
                                      createBaseVNode("ul", { class: "text-body-1" }, [
                                        createBaseVNode("li", null, "Insert text boxes at specific locations"),
                                        createBaseVNode("li", null, "Choose font type, size, and color"),
                                        createBaseVNode("li", null, "Align text with existing content"),
                                        createBaseVNode("li", null, "Save changes while maintaining original formatting")
                                      ], -1)
                                    ])),
                                    _: 1,
                                    __: [44]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { class: "mr-2" }, {
                                        default: withCtx(() => _cache[45] || (_cache[45] = [
                                          createTextVNode("mdi-image")
                                        ])),
                                        _: 1,
                                        __: [45]
                                      }),
                                      _cache[46] || (_cache[46] = createTextVNode(" Adding Images to PDF "))
                                    ]),
                                    _: 1,
                                    __: [46]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => _cache[47] || (_cache[47] = [
                                      createBaseVNode("p", { class: "text-body-1 mb-2" }, " Inserting images into PDF documents can enhance visual appeal: ", -1),
                                      createBaseVNode("ul", { class: "text-body-1" }, [
                                        createBaseVNode("li", null, "Support for common image formats (JPG, PNG, GIF)"),
                                        createBaseVNode("li", null, "Resize and reposition images as needed"),
                                        createBaseVNode("li", null, "Maintain image quality during insertion"),
                                        createBaseVNode("li", null, "Layer images behind or in front of text")
                                      ], -1)
                                    ])),
                                    _: 1,
                                    __: [47]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { class: "mr-2" }, {
                                        default: withCtx(() => _cache[48] || (_cache[48] = [
                                          createTextVNode("mdi-file-multiple")
                                        ])),
                                        _: 1,
                                        __: [48]
                                      }),
                                      _cache[49] || (_cache[49] = createTextVNode(" Merging PDF Files "))
                                    ]),
                                    _: 1,
                                    __: [49]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => [
                                      _cache[51] || (_cache[51] = createBaseVNode("p", { class: "text-body-1 mb-2" }, " Combine multiple PDF files into a single document: ", -1)),
                                      _cache[52] || (_cache[52] = createBaseVNode("ul", { class: "text-body-1" }, [
                                        createBaseVNode("li", null, "Drag and drop to reorder pages"),
                                        createBaseVNode("li", null, "Maintain original page formatting"),
                                        createBaseVNode("li", null, "Add page numbers and bookmarks"),
                                        createBaseVNode("li", null, "Create table of contents automatically")
                                      ], -1)),
                                      createVNode(_component_v_btn, {
                                        color: "success",
                                        size: "small",
                                        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$router.push("/merge")),
                                        class: "mt-2"
                                      }, {
                                        default: withCtx(() => _cache[50] || (_cache[50] = [
                                          createTextVNode(" Try PDF Merger ")
                                        ])),
                                        _: 1,
                                        __: [50]
                                      })
                                    ]),
                                    _: 1,
                                    __: [51, 52]
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1,
                        __: [53]
                      })
                    ]),
                    createBaseVNode("section", _hoisted_10, [
                      _cache[68] || (_cache[68] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "PDF Security Features", -1)),
                      createVNode(_component_v_card, { class: "pa-6" }, {
                        default: withCtx(() => [
                          _cache[67] || (_cache[67] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "Protecting Your PDF Documents:", -1)),
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    variant: "outlined",
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("h4", _hoisted_11, [
                                        createVNode(_component_v_icon, {
                                          color: "warning",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => _cache[55] || (_cache[55] = [
                                            createTextVNode("mdi-lock")
                                          ])),
                                          _: 1,
                                          __: [55]
                                        }),
                                        _cache[56] || (_cache[56] = createTextVNode(" Password Protection "))
                                      ]),
                                      _cache[57] || (_cache[57] = createBaseVNode("p", { class: "text-body-2" }, " Add passwords to prevent unauthorized access to your PDF files. You can set different passwords for opening and editing. ", -1))
                                    ]),
                                    _: 1,
                                    __: [57]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    variant: "outlined",
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("h4", _hoisted_12, [
                                        createVNode(_component_v_icon, {
                                          color: "info",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => _cache[58] || (_cache[58] = [
                                            createTextVNode("mdi-signature")
                                          ])),
                                          _: 1,
                                          __: [58]
                                        }),
                                        _cache[59] || (_cache[59] = createTextVNode(" Digital Signatures "))
                                      ]),
                                      _cache[60] || (_cache[60] = createBaseVNode("p", { class: "text-body-2" }, " Sign PDF documents digitally to verify authenticity and ensure the document hasn't been altered since signing. ", -1))
                                    ]),
                                    _: 1,
                                    __: [60]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    variant: "outlined",
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("h4", _hoisted_13, [
                                        createVNode(_component_v_icon, {
                                          color: "error",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => _cache[61] || (_cache[61] = [
                                            createTextVNode("mdi-eye-off")
                                          ])),
                                          _: 1,
                                          __: [61]
                                        }),
                                        _cache[62] || (_cache[62] = createTextVNode(" Content Restrictions "))
                                      ]),
                                      _cache[63] || (_cache[63] = createBaseVNode("p", { class: "text-body-2" }, " Restrict printing, copying, or editing of PDF content to protect sensitive information. ", -1))
                                    ]),
                                    _: 1,
                                    __: [63]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, {
                                    variant: "outlined",
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("h4", _hoisted_14, [
                                        createVNode(_component_v_icon, {
                                          color: "success",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => _cache[64] || (_cache[64] = [
                                            createTextVNode("mdi-shield-check")
                                          ])),
                                          _: 1,
                                          __: [64]
                                        }),
                                        _cache[65] || (_cache[65] = createTextVNode(" Encryption "))
                                      ]),
                                      _cache[66] || (_cache[66] = createBaseVNode("p", { class: "text-body-2" }, " Use strong encryption algorithms (AES-256) to secure your PDF files against unauthorized access. ", -1))
                                    ]),
                                    _: 1,
                                    __: [66]
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1,
                        __: [67]
                      })
                    ]),
                    createBaseVNode("section", _hoisted_15, [
                      _cache[77] || (_cache[77] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "Frequently Asked Questions", -1)),
                      createVNode(_component_v_card, { class: "pa-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_expansion_panels, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => _cache[69] || (_cache[69] = [
                                      createTextVNode(" What's the difference between PDF and Word documents? ")
                                    ])),
                                    _: 1,
                                    __: [69]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => _cache[70] || (_cache[70] = [
                                      createBaseVNode("p", { class: "text-body-1" }, " PDF files are designed for final presentation and sharing, maintaining exact formatting across all devices. Word documents are editable and meant for content creation and collaboration. PDFs are more secure and print-ready, while Word files are better for ongoing editing and collaboration. ", -1)
                                    ])),
                                    _: 1,
                                    __: [70]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => _cache[71] || (_cache[71] = [
                                      createTextVNode(" Can I edit text in a PDF file? ")
                                    ])),
                                    _: 1,
                                    __: [71]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => _cache[72] || (_cache[72] = [
                                      createBaseVNode("p", { class: "text-body-1" }, " Yes, but it depends on how the PDF was created. If the PDF contains actual text (not just images), you can edit it using PDF editing software. Scanned documents require OCR (Optical Character Recognition) to convert images to editable text first. ", -1)
                                    ])),
                                    _: 1,
                                    __: [72]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => _cache[73] || (_cache[73] = [
                                      createTextVNode(" How do I reduce PDF file size? ")
                                    ])),
                                    _: 1,
                                    __: [73]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => _cache[74] || (_cache[74] = [
                                      createBaseVNode("p", { class: "text-body-1" }, " You can reduce PDF file size by: compressing images, removing unnecessary elements, using lower quality settings when creating PDFs, and using online PDF compression tools. The exact method depends on what's making your PDF large. ", -1)
                                    ])),
                                    _: 1,
                                    __: [74]
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_expansion_panel, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, null, {
                                    default: withCtx(() => _cache[75] || (_cache[75] = [
                                      createTextVNode(" Are PDF files safe to open? ")
                                    ])),
                                    _: 1,
                                    __: [75]
                                  }),
                                  createVNode(_component_v_expansion_panel_text, null, {
                                    default: withCtx(() => _cache[76] || (_cache[76] = [
                                      createBaseVNode("p", { class: "text-body-1" }, " PDFs are generally safe, but like any file type, they can potentially contain malicious content. Always use updated PDF readers, be cautious of PDFs from unknown sources, and consider using security software that scans PDF files. ", -1)
                                    ])),
                                    _: 1,
                                    __: [76]
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
                    createBaseVNode("section", _hoisted_16, [
                      _cache[83] || (_cache[83] = createBaseVNode("h2", { class: "text-h4 mb-4" }, "Related PDF Tools", -1)),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "8"
                          }, {
                            default: withCtx(() => [
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
                                        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$router.push("/word-to-pdf")),
                                        "prepend-icon": "mdi-file-word-box"
                                      }, {
                                        default: withCtx(() => _cache[78] || (_cache[78] = [
                                          createTextVNode(" Word to PDF ")
                                        ])),
                                        _: 1,
                                        __: [78]
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
                                        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$router.push("/merge")),
                                        "prepend-icon": "mdi-file-multiple"
                                      }, {
                                        default: withCtx(() => _cache[79] || (_cache[79] = [
                                          createTextVNode(" Merge PDFs ")
                                        ])),
                                        _: 1,
                                        __: [79]
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
                                        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.$router.push("/pdf-tools-comparison")),
                                        "prepend-icon": "mdi-compare"
                                      }, {
                                        default: withCtx(() => _cache[80] || (_cache[80] = [
                                          createTextVNode(" Compare Tools ")
                                        ])),
                                        _: 1,
                                        __: [80]
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
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "ad-related text-center pa-4" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_17, [
                                    createVNode(_component_v_icon, {
                                      size: "32",
                                      color: "grey-lighten-1"
                                    }, {
                                      default: withCtx(() => _cache[81] || (_cache[81] = [
                                        createTextVNode("mdi-advertisement")
                                      ])),
                                      _: 1,
                                      __: [81]
                                    }),
                                    _cache[82] || (_cache[82] = createBaseVNode("p", { class: "text-caption text-grey-lighten-1" }, "300x250 Related Ad", -1))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_v_row, { class: "mt-8" }, {
              default: withCtx(() => [
                createVNode(_component_v_col, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card, { class: "ad-banner text-center pa-4" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_18, [
                          createVNode(_component_v_icon, {
                            size: "48",
                            color: "grey-lighten-1"
                          }, {
                            default: withCtx(() => _cache[84] || (_cache[84] = [
                              createTextVNode("mdi-advertisement")
                            ])),
                            _: 1,
                            __: [84]
                          }),
                          _cache[85] || (_cache[85] = createBaseVNode("p", { class: "text-body-2 text-grey-lighten-1 mt-2" }, "Advertisement Space", -1)),
                          _cache[86] || (_cache[86] = createBaseVNode("p", { class: "text-caption text-grey-lighten-1" }, "728x90 Bottom Banner Ad", -1))
                        ])
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
const pdfGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63815eb8"]]);
export {
  pdfGuide as default
};
