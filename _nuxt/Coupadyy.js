import { _ as __nuxt_component_0 } from "./JV4-nt_B.js";
import { _ as _export_sfc, g as ref, f as createBlock, w as withCtx, r as resolveComponent, i as useRouter, o as openBlock, b as createVNode, p as unref, l as createCommentVNode, a as createBaseVNode, t as toDisplayString, d as createTextVNode, m as withModifiers, n as normalizeClass } from "./DNk5wxW4.js";
import { F as FullscreenLoading } from "./cFXzfPGT.js";
import { I as InterstitialAd } from "./CWm8Cl3g.js";
import { g as getAdsenseConfig } from "./CXRgUo4S.js";
import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { u as useHead } from "./myFRLvAZ.js";
const _hoisted_1 = { class: "d-flex align-center" };
const _hoisted_2 = { class: "flex-grow-1" };
const _hoisted_3 = { class: "text-body-2" };
const _hoisted_4 = ["accept"];
const _hoisted_5 = { class: "d-flex flex-column align-center gap-4" };
const _hoisted_6 = { class: "text-h5 mb-4" };
const _hoisted_7 = { class: "text-h5 mb-4" };
const _hoisted_8 = { class: "text-h5 mb-4" };
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const _sfc_main = {
  __name: "pdf-to-word",
  setup(__props) {
    const adsenseConfig = getAdsenseConfig();
    useHead({
      title: "PDF to Word Converter - Free Online PDF to DOCX Tool | FreeToPDF",
      meta: [
        {
          name: "description",
          content: "Convert PDF to Word online for free. Transform PDF documents to editable Word (.docx) format while preserving formatting. No registration required, 100% secure."
        },
        {
          name: "keywords",
          content: "PDF to Word, PDF to DOCX, convert PDF to Word, PDF converter, free PDF to Word, online PDF converter, PDF to Word online"
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
            "@type": "WebApplication",
            "name": "PDF to Word Converter",
            "description": "Free online tool to convert PDF files to Word documents",
            "url": "https://freetopdf.com/pdf-to-word",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "PDF to Word conversion",
              "Format preservation",
              "Drag and drop interface",
              "Secure file processing"
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
    const fileInput = ref(null);
    const selectedFile = ref(null);
    const isDragging = ref(false);
    const loading = ref(false);
    const error = ref(null);
    const showInterstitialAd = ref(false);
    const ALLOWED_TYPES = {
      // PDF 파일만
      "application/pdf": ".pdf"
    };
    const ALLOWED_EXTENSIONS = Object.values(ALLOWED_TYPES).join(",");
    const triggerFileInput = () => {
      fileInput.value.click();
    };
    const validateFile = (file) => {
      if (file.size > MAX_FILE_SIZE) {
        error.value = `${file.name} exceeds the maximum file size of 5MB.`;
        return false;
      }
      const fileType = file.type;
      const fileName = file.name.toLowerCase();
      const isPdfFile = fileName.endsWith(".pdf");
      const isPdfMimeType = Object.keys(ALLOWED_TYPES).includes(fileType);
      if (!isPdfFile) {
        error.value = `${file.name} is not a PDF file. Please upload a .pdf file.`;
        return false;
      }
      if (!isPdfMimeType) {
        error.value = `${file.name} has an invalid file type. Please upload a valid PDF document.`;
        return false;
      }
      return true;
    };
    const handleFileSelect = (event) => {
      const files = Array.from(event.target.files);
      if (files.length > 0) {
        const file = files[0];
        if (validateFile(file)) {
          selectedFile.value = file;
          error.value = null;
        }
      }
      event.target.value = "";
    };
    const handleFileDrop = (event) => {
      isDragging.value = false;
      const files = Array.from(event.dataTransfer.files);
      if (files.length > 0) {
        const file = files[0];
        if (validateFile(file)) {
          selectedFile.value = file;
          error.value = null;
        }
      }
      if (error.value) {
        selectedFile.value = null;
      }
    };
    const removeFile = () => {
      selectedFile.value = null;
    };
    const clearFile = () => {
      selectedFile.value = null;
      error.value = null;
    };
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const convertToWord = async () => {
      if (!selectedFile.value) return;
      loading.value = true;
      error.value = null;
      try {
        const formData = new FormData();
        formData.append("file", selectedFile.value);
        console.log("Sending PDF file:", selectedFile.value);
        const convertUrl = await getFullApiUrl(apiEndpoints.pdfToWord);
        console.log("🔍 PDF to Word URL:", convertUrl);
        const response = await fetch(convertUrl, {
          method: "POST",
          body: formData,
          mode: "cors",
          headers: {
            "Accept": "application/json"
          }
        });
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 429 && data.error === "무료 사용 한도 초과") {
            showInterstitialAd.value = true;
          } else {
            throw new Error(data.detail || data.error || "Conversion failed");
          }
          loading.value = false;
          return;
        }
        router.push({
          name: "download-word",
          query: {
            word_path: data.word_path,
            original_name: data.original_name
          }
        });
      } catch (err) {
        console.error("Conversion error:", err);
        error.value = err.message || "An error occurred during conversion";
      } finally {
        loading.value = false;
      }
    };
    const handleAdCompleted = async (data) => {
      console.log("✅ Ad completed:", data);
      showInterstitialAd.value = false;
      if (selectedFile.value) {
        await convertToWord();
      }
    };
    const closeInterstitialAd = () => {
      showInterstitialAd.value = false;
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_GoogleAdsense = __nuxt_component_0;
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, { class: "py-12" }, {
        default: withCtx(() => [
          createVNode(InterstitialAd, {
            show: unref(showInterstitialAd),
            onAdCompleted: handleAdCompleted,
            onClose: closeInterstitialAd
          }, null, 8, ["show"]),
          createVNode(_component_v_row, { justify: "center" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "8",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "pa-6" }, {
                    default: withCtx(() => [
                      unref(error) ? (openBlock(), createBlock(_component_v_alert, {
                        key: 0,
                        type: "error",
                        class: "mb-6 error-alert",
                        icon: "mdi-alert"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, [
                            createBaseVNode("div", _hoisted_2, [
                              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Error", -1)),
                              createBaseVNode("div", _hoisted_3, toDisplayString(unref(error)), 1)
                            ]),
                            createVNode(_component_v_icon, {
                              class: "close-icon",
                              icon: "mdi-close",
                              size: "20",
                              onClick: _cache[0] || (_cache[0] = ($event) => error.value = null)
                            })
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_v_card_title, { class: "text-h4 text-center mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            size: "32",
                            color: "primary",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => _cache[7] || (_cache[7] = [
                              createTextVNode("mdi-file-pdf-box")
                            ])),
                            _: 1,
                            __: [7]
                          }),
                          _cache[8] || (_cache[8] = createTextVNode(" PDF to Word Converter "))
                        ]),
                        _: 1,
                        __: [8]
                      }),
                      createVNode(_component_v_card_subtitle, { class: "text-center mb-6" }, {
                        default: withCtx(() => _cache[9] || (_cache[9] = [
                          createTextVNode(" Convert your PDF document to editable Word format with preserved formatting ")
                        ])),
                        _: 1,
                        __: [9]
                      }),
                      createVNode(_component_v_alert, {
                        type: "info",
                        variant: "tonal",
                        class: "mb-6",
                        icon: "mdi-information"
                      }, {
                        default: withCtx(() => _cache[10] || (_cache[10] = [
                          createBaseVNode("div", { class: "text-subtitle-2 font-weight-bold mb-2" }, "Supported Formats:", -1),
                          createBaseVNode("div", { class: "text-body-2" }, " • PDF files (.pdf) ", -1),
                          createBaseVNode("div", { class: "text-body-2 mt-2" }, " • Output: Microsoft Word (.docx) ", -1)
                        ])),
                        _: 1,
                        __: [10]
                      }),
                      createVNode(_component_v_card, {
                        class: normalizeClass(["upload-area mb-6", { "upload-area--active": unref(isDragging) }]),
                        onDragover: _cache[1] || (_cache[1] = withModifiers(($event) => isDragging.value = true, ["prevent"])),
                        onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => isDragging.value = false, ["prevent"])),
                        onDrop: withModifiers(handleFileDrop, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, { class: "text-center py-12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                size: "64",
                                color: "primary",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => _cache[11] || (_cache[11] = [
                                  createTextVNode(" mdi-cloud-upload ")
                                ])),
                                _: 1,
                                __: [11]
                              }),
                              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-h6 mb-2" }, " Drag and drop your PDF file here ", -1)),
                              _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-body-1 text-medium-emphasis mb-4" }, " or ", -1)),
                              _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis" }, " Maximum file size: 5MB ", -1)),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                onClick: triggerFileInput,
                                class: "mt-4"
                              }, {
                                default: withCtx(() => _cache[12] || (_cache[12] = [
                                  createTextVNode(" Choose PDF File ")
                                ])),
                                _: 1,
                                __: [12]
                              }),
                              createBaseVNode("input", {
                                ref_key: "fileInput",
                                ref: fileInput,
                                type: "file",
                                class: "d-none",
                                accept: unref(ALLOWED_EXTENSIONS),
                                onChange: handleFileSelect
                              }, null, 40, _hoisted_4)
                            ]),
                            _: 1,
                            __: [13, 14, 15]
                          })
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      unref(selectedFile) ? (openBlock(), createBlock(_component_v_card, {
                        key: 1,
                        class: "mb-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h6" }, {
                            default: withCtx(() => _cache[16] || (_cache[16] = [
                              createTextVNode(" Selected PDF File ")
                            ])),
                            _: 1,
                            __: [16]
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, { class: "file-list-item" }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    size: "32",
                                    color: "red"
                                  }, {
                                    default: withCtx(() => _cache[17] || (_cache[17] = [
                                      createTextVNode(" mdi-file-pdf ")
                                    ])),
                                    _: 1,
                                    __: [17]
                                  })
                                ]),
                                append: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    variant: "text",
                                    color: "error",
                                    onClick: removeFile
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => _cache[18] || (_cache[18] = [
                                          createTextVNode("mdi-close")
                                        ])),
                                        _: 1,
                                        __: [18]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(selectedFile).name), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatFileSize(unref(selectedFile).size)), 1)
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
                      })) : createCommentVNode("", true),
                      unref(loading) ? (openBlock(), createBlock(FullscreenLoading, { key: 2 })) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          size: "x-large",
                          disabled: !unref(selectedFile) || unref(loading),
                          onClick: convertToWord,
                          class: "mb-4",
                          "prepend-icon": "mdi-file-word-box"
                        }, {
                          default: withCtx(() => _cache[19] || (_cache[19] = [
                            createTextVNode(" Convert to Word ")
                          ])),
                          _: 1,
                          __: [19]
                        }, 8, ["disabled"]),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          onClick: clearFile,
                          disabled: !unref(selectedFile) || unref(loading)
                        }, {
                          default: withCtx(() => _cache[20] || (_cache[20] = [
                            createTextVNode(" Clear File ")
                          ])),
                          _: 1,
                          __: [20]
                        }, 8, ["disabled"])
                      ]),
                      createVNode(_component_v_row, { class: "mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_GoogleAdsense, {
                                "ad-slot": unref(adsenseConfig).slots.pdfToWord,
                                "ad-format": "auto",
                                "full-width-responsive": "true"
                              }, null, 8, ["ad-slot"])
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
          }),
          createVNode(_component_v_row, { class: "mt-12" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  _cache[39] || (_cache[39] = createBaseVNode("h2", { class: "text-h4 text-center mb-6" }, "Why Convert PDF to Word?", -1)),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "outlined",
                            class: "pa-6 h-100"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("h3", _hoisted_6, [
                                createVNode(_component_v_icon, {
                                  color: "primary",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => _cache[21] || (_cache[21] = [
                                    createTextVNode("mdi-text-box-edit")
                                  ])),
                                  _: 1,
                                  __: [21]
                                }),
                                _cache[22] || (_cache[22] = createTextVNode(" Edit and Modify Content "))
                              ]),
                              _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-body-1 mb-3" }, " Convert PDFs to Word to easily edit text, modify layouts, add new content, or update existing information. Perfect for documents that need regular updates. ", -1)),
                              createVNode(_component_v_list, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[23] || (_cache[23] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [23]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[24] || (_cache[24] = [
                                          createTextVNode("Edit text and paragraphs")
                                        ])),
                                        _: 1,
                                        __: [24]
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[25] || (_cache[25] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [25]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[26] || (_cache[26] = [
                                          createTextVNode("Modify formatting and styles")
                                        ])),
                                        _: 1,
                                        __: [26]
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[27] || (_cache[27] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [27]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[28] || (_cache[28] = [
                                          createTextVNode("Add images and tables")
                                        ])),
                                        _: 1,
                                        __: [28]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1,
                            __: [29]
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
                            class: "pa-6 h-100"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("h3", _hoisted_7, [
                                createVNode(_component_v_icon, {
                                  color: "success",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => _cache[30] || (_cache[30] = [
                                    createTextVNode("mdi-collaboration")
                                  ])),
                                  _: 1,
                                  __: [30]
                                }),
                                _cache[31] || (_cache[31] = createTextVNode(" Collaboration and Sharing "))
                              ]),
                              _cache[38] || (_cache[38] = createBaseVNode("p", { class: "text-body-1 mb-3" }, " Word documents are perfect for collaborative work, allowing multiple people to edit, comment, and track changes in real-time. ", -1)),
                              createVNode(_component_v_list, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[32] || (_cache[32] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [32]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[33] || (_cache[33] = [
                                          createTextVNode("Track changes and comments")
                                        ])),
                                        _: 1,
                                        __: [33]
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[34] || (_cache[34] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [34]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[35] || (_cache[35] = [
                                          createTextVNode("Share with team members")
                                        ])),
                                        _: 1,
                                        __: [35]
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[36] || (_cache[36] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [36]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[37] || (_cache[37] = [
                                          createTextVNode("Version control and history")
                                        ])),
                                        _: 1,
                                        __: [37]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
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
                _: 1,
                __: [39]
              })
            ]),
            _: 1
          }),
          createVNode(_component_v_row, { class: "mt-8" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    color: "info",
                    variant: "tonal",
                    class: "pa-6"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h3", _hoisted_8, [
                        createVNode(_component_v_icon, { class: "mr-2" }, {
                          default: withCtx(() => _cache[40] || (_cache[40] = [
                            createTextVNode("mdi-lightbulb")
                          ])),
                          _: 1,
                          __: [40]
                        }),
                        _cache[41] || (_cache[41] = createTextVNode(" Pro Tips for Best Results "))
                      ]),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => _cache[42] || (_cache[42] = [
                              createBaseVNode("ul", { class: "text-body-1" }, [
                                createBaseVNode("li", { class: "mb-2" }, "Ensure your PDF has clear, readable text for optimal conversion"),
                                createBaseVNode("li", { class: "mb-2" }, "Scanned documents may require OCR for better results"),
                                createBaseVNode("li", { class: "mb-2" }, "Complex layouts with tables and images convert best")
                              ], -1)
                            ])),
                            _: 1,
                            __: [42]
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => _cache[43] || (_cache[43] = [
                              createBaseVNode("ul", { class: "text-body-1" }, [
                                createBaseVNode("li", { class: "mb-2" }, "Avoid PDFs with heavy graphics for faster processing"),
                                createBaseVNode("li", { class: "mb-2" }, "Check the converted file for any formatting issues"),
                                createBaseVNode("li", { class: "mb-2" }, "Use high-quality source PDFs for best results")
                              ], -1)
                            ])),
                            _: 1,
                            __: [43]
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
          createVNode(_component_v_row, { class: "mt-8" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  _cache[47] || (_cache[47] = createBaseVNode("h3", { class: "text-h5 text-center mb-4" }, "Related PDF Tools", -1)),
                  createVNode(_component_v_row, { justify: "center" }, {
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
                            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$router.push("/word-to-pdf")),
                            "prepend-icon": "mdi-file-word-box"
                          }, {
                            default: withCtx(() => _cache[44] || (_cache[44] = [
                              createTextVNode(" Word to PDF ")
                            ])),
                            _: 1,
                            __: [44]
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
                            onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$router.push("/merge")),
                            "prepend-icon": "mdi-file-multiple"
                          }, {
                            default: withCtx(() => _cache[45] || (_cache[45] = [
                              createTextVNode(" Merge PDFs ")
                            ])),
                            _: 1,
                            __: [45]
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
                            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$router.push("/pdf-guide")),
                            "prepend-icon": "mdi-book-open-variant"
                          }, {
                            default: withCtx(() => _cache[46] || (_cache[46] = [
                              createTextVNode(" PDF Guide ")
                            ])),
                            _: 1,
                            __: [46]
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1,
                __: [47]
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
const pdfToWord = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d73e54b7"]]);
export {
  pdfToWord as default
};
