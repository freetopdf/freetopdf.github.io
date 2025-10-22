import { _ as _export_sfc, g as onMounted, u as useRouter, h as ref, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, i as useRuntimeConfig, r as resolveComponent, o as openBlock, d as createTextVNode, t as toDisplayString, f as createBlock, F as Fragment, j as renderList } from "./BSYHgbPg.js";
import { g as getAdsenseConfig } from "./9vTXVBdN.js";
import { u as useHead } from "./CsYw5xvX.js";
const _hoisted_1 = { class: "hero-section" };
const _hoisted_2 = { class: "features-section" };
const _hoisted_3 = { class: "usage-info-section" };
const _hoisted_4 = {
  key: 0,
  class: "usage-stats"
};
const _hoisted_5 = { class: "usage-stat" };
const _hoisted_6 = { class: "usage-number" };
const _hoisted_7 = { class: "usage-stat" };
const _hoisted_8 = { class: "usage-number" };
const _hoisted_9 = { class: "usage-stat" };
const _hoisted_10 = { class: "usage-number" };
const _hoisted_11 = { class: "usage-message mt-3" };
const _hoisted_12 = {
  key: 1,
  class: "loading-usage"
};
const _hoisted_13 = { class: "tools-section" };
const _hoisted_14 = { class: "resources-section" };
const _hoisted_15 = { class: "faq-section" };
const _sfc_main = {
  __name: "index",
  setup(__props) {
    getAdsenseConfig();
    onMounted(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get("redirect");
      if (redirectPath) {
        const validRoutes = ["/pdf-to-word", "/word-to-pdf", "/merge", "/pdf-guide", "/pdf-tools-comparison", "/about", "/contact", "/privacy", "/terms"];
        if (validRoutes.includes(redirectPath)) {
          router.push(redirectPath);
        } else {
          router.push("/404");
        }
      }
    });
    useHead({
      title: "FreeToPDF - Free Online PDF Tools | Convert, Merge, Split PDFs",
      meta: [
        {
          name: "description",
          content: "Free online PDF tools. Convert PDF to Word, Word to PDF, merge PDFs, split PDFs, and more. No registration required, 100% free and secure."
        },
        {
          name: "keywords",
          content: "PDF converter, PDF to Word, Word to PDF, merge PDF, split PDF, free PDF tools, online PDF editor, PDF to DOCX"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "FreeToPDF",
            "description": "Free online PDF tools for converting, merging, and editing PDF files",
            "url": "https://freetopdf.com",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "PDF to Word conversion",
              "Word to PDF conversion",
              "PDF merging",
              "PDF splitting",
              "PDF editing"
            ],
            "author": {
              "@type": "Organization",
              "name": "FreeToPDF"
            }
          })
        }
      ]
    });
    const router = useRouter();
    const showDialog = ref(false);
    const usageInfo = ref(null);
    const loadingUsage = ref(false);
    const fetchUsageInfo = async () => {
      try {
        loadingUsage.value = true;
        const config = useRuntimeConfig();
        const apiUrl = config.public.apiUrl || "http://127.0.0.1:8100";
        const response = await fetch(`${apiUrl}/api/usage-info`);
        if (response.ok) {
          const data = await response.json();
          usageInfo.value = data;
        } else {
          console.error("Failed to fetch usage information:", response.status);
        }
      } catch (error) {
        console.error("Error occurred while requesting usage information:", error);
      } finally {
        loadingUsage.value = false;
      }
    };
    onMounted(() => {
      fetchUsageInfo();
    });
    const moreTools = [
      { name: "Split PDF", icon: "mdi-content-cut", color: "green" },
      { name: "Rotate PDF", icon: "mdi-rotate-right", color: "orange" },
      { name: "Extract Pages", icon: "mdi-file-document-outline", color: "purple" },
      { name: "Add Watermark", icon: "mdi-watermark", color: "cyan" },
      { name: "Sign PDF", icon: "mdi-signature", color: "red" },
      { name: "OCR PDF", icon: "mdi-text-recognition", color: "indigo" },
      { name: "Protect PDF", icon: "mdi-lock", color: "amber" }
    ];
    const navigateToUpload = () => {
      router.push("/word-to-pdf");
    };
    const navigateToPdfToWord = () => {
      router.push("/pdf-to-word");
    };
    const navigateToMerge = () => {
      router.push("/merge");
    };
    const showComingSoon = () => {
      showDialog.value = true;
    };
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_item = resolveComponent("v-card-item");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
      const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
      const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
      const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_dialog = resolveComponent("v-dialog");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("main", null, [
          createBaseVNode("section", _hoisted_1, [
            createVNode(_component_v_container, { class: "py-12 hero-container" }, {
              default: withCtx(() => [
                createVNode(_component_v_row, {
                  align: "center",
                  justify: "center"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "10",
                      lg: "8",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "text-h2 font-weight-bold mb-4" }, " Free Online PDF Tools ", -1)),
                        _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-h6 text-medium-emphasis mb-4" }, " Convert, merge, and edit PDF files with our free online tools. No registration required. ", -1)),
                        _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-body-1 text-medium-emphasis mb-8" }, " Transform PDF to Word documents, convert Word to PDF, merge multiple PDFs, and more. All tools are 100% free, secure, and work in your browser. ", -1)),
                        createVNode(_component_v_row, { class: "mt-8 justify-center" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "4",
                              class: "d-flex justify-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  size: "x-large",
                                  class: "mb-4 icon-padding-btn action-btn",
                                  onClick: navigateToPdfToWord,
                                  "prepend-icon": "mdi-file-pdf-box",
                                  "min-width": "160"
                                }, {
                                  default: withCtx(() => _cache[4] || (_cache[4] = [
                                    createTextVNode(" PDF → Word ")
                                  ])),
                                  _: 1,
                                  __: [4]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "4",
                              class: "d-flex justify-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "primary",
                                  size: "x-large",
                                  class: "mb-4 icon-padding-btn action-btn",
                                  onClick: navigateToUpload,
                                  "prepend-icon": "mdi-file-word-box",
                                  "min-width": "160"
                                }, {
                                  default: withCtx(() => _cache[5] || (_cache[5] = [
                                    createTextVNode(" Word → PDF ")
                                  ])),
                                  _: 1,
                                  __: [5]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              md: "4",
                              lg: "4",
                              class: "d-flex justify-center"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  color: "success",
                                  size: "x-large",
                                  class: "mb-4 action-btn",
                                  onClick: navigateToMerge,
                                  "prepend-icon": "mdi-file-multiple",
                                  "min-width": "160"
                                }, {
                                  default: withCtx(() => _cache[6] || (_cache[6] = [
                                    createTextVNode(" PDF Merge ")
                                  ])),
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
                      _: 1,
                      __: [7, 8, 9]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("section", _hoisted_2, [
            createVNode(_component_v_container, { class: "py-12" }, {
              default: withCtx(() => [
                _cache[19] || (_cache[19] = createBaseVNode("h2", { class: "text-h4 text-center mb-8" }, "Why Choose FreeToPDF?", -1)),
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "4",
                      class: "text-center mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          size: "64",
                          color: "primary",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => _cache[10] || (_cache[10] = [
                            createTextVNode("mdi-shield-check")
                          ])),
                          _: 1,
                          __: [10]
                        }),
                        _cache[11] || (_cache[11] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "100% Secure", -1)),
                        _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-body-1" }, "Your files are processed locally in your browser. We never store or access your documents.", -1))
                      ]),
                      _: 1,
                      __: [11, 12]
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "4",
                      class: "text-center mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          size: "64",
                          color: "success",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => _cache[13] || (_cache[13] = [
                            createTextVNode("mdi-currency-usd-off")
                          ])),
                          _: 1,
                          __: [13]
                        }),
                        _cache[14] || (_cache[14] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "Completely Free", -1)),
                        _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-body-1" }, "No hidden costs, no premium features. All tools are free to use without any limitations.", -1))
                      ]),
                      _: 1,
                      __: [14, 15]
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "4",
                      class: "text-center mb-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          size: "64",
                          color: "info",
                          class: "mb-4"
                        }, {
                          default: withCtx(() => _cache[16] || (_cache[16] = [
                            createTextVNode("mdi-web")
                          ])),
                          _: 1,
                          __: [16]
                        }),
                        _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-h5 mb-3" }, "No Registration", -1)),
                        _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-body-1" }, "Start using our tools immediately. No account creation or email verification required.", -1))
                      ]),
                      _: 1,
                      __: [17, 18]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1,
              __: [19]
            })
          ]),
          createBaseVNode("section", _hoisted_3, [
            createVNode(_component_v_container, { class: "py-8" }, {
              default: withCtx(() => [
                createVNode(_component_v_row, { justify: "center" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "8",
                      lg: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "usage-card",
                          elevation: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_title, { class: "text-center text-h5 py-4" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  color: "info",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => _cache[20] || (_cache[20] = [
                                    createTextVNode("mdi-chart-line")
                                  ])),
                                  _: 1,
                                  __: [20]
                                }),
                                _cache[21] || (_cache[21] = createTextVNode(" Daily Usage Info "))
                              ]),
                              _: 1,
                              __: [21]
                            }),
                            createVNode(_component_v_card_text, { class: "text-center" }, {
                              default: withCtx(() => [
                                usageInfo.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_5, [
                                            createBaseVNode("div", _hoisted_6, toDisplayString(usageInfo.value.used), 1),
                                            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "usage-label" }, "Used", -1))
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_7, [
                                            createBaseVNode("div", _hoisted_8, toDisplayString(usageInfo.value.remaining), 1),
                                            _cache[23] || (_cache[23] = createBaseVNode("div", { class: "usage-label" }, "Remaining", -1))
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "4" }, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_9, [
                                            createBaseVNode("div", _hoisted_10, toDisplayString(usageInfo.value.limit), 1),
                                            _cache[24] || (_cache[24] = createBaseVNode("div", { class: "usage-label" }, "Daily Limit", -1))
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_progress_linear, {
                                    "model-value": usageInfo.value.used / usageInfo.value.limit * 100,
                                    color: usageInfo.value.remaining > 0 ? "success" : "warning",
                                    height: "8",
                                    class: "mt-4"
                                  }, null, 8, ["model-value", "color"]),
                                  createBaseVNode("div", _hoisted_11, [
                                    usageInfo.value.remaining === 0 ? (openBlock(), createBlock(_component_v_alert, {
                                      key: 0,
                                      type: "warning",
                                      variant: "tonal",
                                      class: "mb-0"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => _cache[25] || (_cache[25] = [
                                            createTextVNode("mdi-alert-circle")
                                          ])),
                                          _: 1,
                                          __: [25]
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        _cache[26] || (_cache[26] = createTextVNode(" You've reached your daily free usage limit. Watch ads to continue using our tools. "))
                                      ]),
                                      _: 1,
                                      __: [26]
                                    })) : usageInfo.value.remaining <= 3 ? (openBlock(), createBlock(_component_v_alert, {
                                      key: 1,
                                      type: "info",
                                      variant: "tonal",
                                      class: "mb-0"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => _cache[27] || (_cache[27] = [
                                            createTextVNode("mdi-information")
                                          ])),
                                          _: 1,
                                          __: [27]
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createTextVNode(" You have " + toDisplayString(usageInfo.value.remaining) + " free uses remaining today. ", 1)
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(_component_v_alert, {
                                      key: 2,
                                      type: "success",
                                      variant: "tonal",
                                      class: "mb-0"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => _cache[28] || (_cache[28] = [
                                            createTextVNode("mdi-check-circle")
                                          ])),
                                          _: 1,
                                          __: [28]
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createTextVNode(" You can use our tools " + toDisplayString(usageInfo.value.remaining) + " more times for free today. ", 1)
                                      ]),
                                      _: 1
                                    }))
                                  ])
                                ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
                                  createVNode(_component_v_progress_circular, {
                                    indeterminate: "",
                                    color: "primary"
                                  }),
                                  _cache[29] || (_cache[29] = createBaseVNode("div", { class: "mt-2" }, "Loading usage information...", -1))
                                ]))
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
          createBaseVNode("section", _hoisted_13, [
            createVNode(_component_v_container, { class: "py-12" }, {
              default: withCtx(() => [
                _cache[30] || (_cache[30] = createBaseVNode("h2", { class: "text-h4 text-center mb-6" }, "More PDF Tools Coming Soon", -1)),
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(moreTools, (tool) => {
                      return createVNode(_component_v_col, {
                        key: tool.name,
                        cols: "12",
                        sm: "6",
                        md: "4",
                        lg: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "h-100 quick-action-card",
                            elevation: "2",
                            onClick: showComingSoon
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_item, null, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    size: "32",
                                    color: tool.color
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tool.icon), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, { class: "text-h6" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(tool.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                })
              ]),
              _: 1,
              __: [30]
            })
          ]),
          createBaseVNode("section", _hoisted_14, [
            createVNode(_component_v_container, { class: "py-12" }, {
              default: withCtx(() => [
                _cache[41] || (_cache[41] = createBaseVNode("h2", { class: "text-h4 text-center mb-8" }, "PDF Resources & Guides", -1)),
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          class: "h-100 resource-card",
                          elevation: "2",
                          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/pdf-guide"))
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  size: "48",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => _cache[31] || (_cache[31] = [
                                    createTextVNode("mdi-book-open-variant")
                                  ])),
                                  _: 1,
                                  __: [31]
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, { class: "text-h5" }, {
                                  default: withCtx(() => _cache[32] || (_cache[32] = [
                                    createTextVNode("Complete PDF Guide")
                                  ])),
                                  _: 1,
                                  __: [32]
                                }),
                                createVNode(_component_v_card_subtitle, null, {
                                  default: withCtx(() => _cache[33] || (_cache[33] = [
                                    createTextVNode("Learn everything about PDF files")
                                  ])),
                                  _: 1,
                                  __: [33]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                _cache[35] || (_cache[35] = createBaseVNode("p", { class: "text-body-1" }, " Comprehensive tutorials covering PDF basics, conversion techniques, editing tips, and security features. Perfect for beginners and advanced users alike. ", -1)),
                                createVNode(_component_v_chip, {
                                  color: "primary",
                                  variant: "tonal",
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => _cache[34] || (_cache[34] = [
                                    createTextVNode(" Learn More → ")
                                  ])),
                                  _: 1,
                                  __: [34]
                                })
                              ]),
                              _: 1,
                              __: [35]
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
                        createVNode(_component_v_card, {
                          class: "h-100 resource-card",
                          elevation: "2",
                          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push("/pdf-tools-comparison"))
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card_item, null, {
                              prepend: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  size: "48",
                                  color: "success"
                                }, {
                                  default: withCtx(() => _cache[36] || (_cache[36] = [
                                    createTextVNode("mdi-compare")
                                  ])),
                                  _: 1,
                                  __: [36]
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, { class: "text-h5" }, {
                                  default: withCtx(() => _cache[37] || (_cache[37] = [
                                    createTextVNode("PDF Tools Comparison")
                                  ])),
                                  _: 1,
                                  __: [37]
                                }),
                                createVNode(_component_v_card_subtitle, null, {
                                  default: withCtx(() => _cache[38] || (_cache[38] = [
                                    createTextVNode("Find the best tool for your needs")
                                  ])),
                                  _: 1,
                                  __: [38]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_card_text, null, {
                              default: withCtx(() => [
                                _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-body-1" }, " Compare free vs paid tools, online vs desktop solutions, and get recommendations based on your specific use case and requirements. ", -1)),
                                createVNode(_component_v_chip, {
                                  color: "success",
                                  variant: "tonal",
                                  class: "mt-2"
                                }, {
                                  default: withCtx(() => _cache[39] || (_cache[39] = [
                                    createTextVNode(" Compare Tools → ")
                                  ])),
                                  _: 1,
                                  __: [39]
                                })
                              ]),
                              _: 1,
                              __: [40]
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
              __: [41]
            })
          ]),
          createBaseVNode("section", _hoisted_15, [
            createVNode(_component_v_container, { class: "py-12" }, {
              default: withCtx(() => [
                _cache[54] || (_cache[54] = createBaseVNode("h2", { class: "text-h4 text-center mb-8" }, "Frequently Asked Questions", -1)),
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_expansion_panels, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => _cache[42] || (_cache[42] = [
                                    createTextVNode("Is FreeToPDF really free?")
                                  ])),
                                  _: 1,
                                  __: [42]
                                }),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => _cache[43] || (_cache[43] = [
                                    createTextVNode(" Yes, all our PDF tools are completely free to use. There are no hidden costs or premium features. ")
                                  ])),
                                  _: 1,
                                  __: [43]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => _cache[44] || (_cache[44] = [
                                    createTextVNode("Are my files secure?")
                                  ])),
                                  _: 1,
                                  __: [44]
                                }),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => _cache[45] || (_cache[45] = [
                                    createTextVNode(" Your files are securely processed on our servers and automatically deleted after 10 minutes of conversion completion for your privacy and security. ")
                                  ])),
                                  _: 1,
                                  __: [45]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => _cache[46] || (_cache[46] = [
                                    createTextVNode("What file formats are supported?")
                                  ])),
                                  _: 1,
                                  __: [46]
                                }),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => _cache[47] || (_cache[47] = [
                                    createTextVNode(" We support PDF, Word (.docx), and other common document formats. More formats will be added soon. ")
                                  ])),
                                  _: 1,
                                  __: [47]
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
                        createVNode(_component_v_expansion_panels, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_expansion_panel, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => _cache[48] || (_cache[48] = [
                                    createTextVNode("Do I need to create an account?")
                                  ])),
                                  _: 1,
                                  __: [48]
                                }),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => _cache[49] || (_cache[49] = [
                                    createTextVNode(" No, you can use all our tools without creating an account or providing any personal information. ")
                                  ])),
                                  _: 1,
                                  __: [49]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => _cache[50] || (_cache[50] = [
                                    createTextVNode("Is there a file size limit?")
                                  ])),
                                  _: 1,
                                  __: [50]
                                }),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => _cache[51] || (_cache[51] = [
                                    createTextVNode(" Currently, we support files up to 5MB. This limit may be adjusted based on browser capabilities. ")
                                  ])),
                                  _: 1,
                                  __: [51]
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_expansion_panel, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, null, {
                                  default: withCtx(() => _cache[52] || (_cache[52] = [
                                    createTextVNode("Can I use these tools on mobile?")
                                  ])),
                                  _: 1,
                                  __: [52]
                                }),
                                createVNode(_component_v_expansion_panel_text, null, {
                                  default: withCtx(() => _cache[53] || (_cache[53] = [
                                    createTextVNode(" Yes, our tools work on all devices including smartphones and tablets. ")
                                  ])),
                                  _: 1,
                                  __: [53]
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
              _: 1,
              __: [54]
            })
          ])
        ]),
        createVNode(_component_v_dialog, {
          modelValue: showDialog.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showDialog.value = $event),
          "max-width": "400",
          transition: "dialog-bottom-transition"
        }, {
          default: withCtx(() => [
            createVNode(_component_v_card, null, {
              default: withCtx(() => [
                createVNode(_component_v_card_item, null, {
                  prepend: withCtx(() => [
                    createVNode(_component_v_icon, {
                      color: "warning",
                      icon: "mdi-clock-outline",
                      size: "large"
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, { class: "text-h5" }, {
                      default: withCtx(() => _cache[55] || (_cache[55] = [
                        createTextVNode("Coming Soon")
                      ])),
                      _: 1,
                      __: [55]
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "text-center pt-4" }, {
                  default: withCtx(() => _cache[56] || (_cache[56] = [
                    createBaseVNode("p", { class: "text-body-1" }, [
                      createTextVNode(" This service is currently under development."),
                      createBaseVNode("br"),
                      createTextVNode(" It will be available soon. ")
                    ], -1)
                  ])),
                  _: 1,
                  __: [56]
                }),
                createVNode(_component_v_card_actions, { class: "justify-center pb-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      variant: "tonal",
                      onClick: _cache[2] || (_cache[2] = ($event) => showDialog.value = false)
                    }, {
                      default: withCtx(() => _cache[57] || (_cache[57] = [
                        createTextVNode(" OK ")
                      ])),
                      _: 1,
                      __: [57]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00c2bd3f"]]);
export {
  index as default
};
