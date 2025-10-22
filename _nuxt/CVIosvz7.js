import { G as GoogleAdsense } from "./h86Tcb6v.js";
import { _ as _export_sfc, h as ref, f as createBlock, w as withCtx, r as resolveComponent, u as useRouter, o as openBlock, b as createVNode, l as createCommentVNode, a as createBaseVNode, p as unref, t as toDisplayString, d as createTextVNode, m as withModifiers, n as normalizeClass, s as trackApiCallStart, v as trackFileConversion, x as trackUsageLimit, y as trackAdView, z as trackApiCallError, A as trackApiCallSuccess } from "./BfEuadgy.js";
import { F as FullscreenLoading } from "./DyJlKAYR.js";
import { I as InterstitialAd } from "./Cf3zfN0b.js";
import { g as getAdsenseConfig } from "./-GJN7lCd.js";
import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { u as useHead } from "./g-DGAmxE.js";
const _hoisted_1 = { class: "d-flex align-center" };
const _hoisted_2 = { class: "flex-grow-1" };
const _hoisted_3 = { class: "text-body-2" };
const _hoisted_4 = ["accept"];
const _hoisted_5 = { class: "d-flex flex-column align-center gap-4" };
const _hoisted_6 = { class: "text-subtitle-1 mb-3" };
const _hoisted_7 = { class: "text-subtitle-1 mb-3" };
const _hoisted_8 = { class: "text-subtitle-1 mb-3" };
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const _sfc_main = {
  __name: "word-to-pdf",
  setup(__props) {
    const adsenseConfig = getAdsenseConfig();
    useHead({
      title: "Word to PDF Converter - Free Online DOCX to PDF Tool | FreeToPDF",
      meta: [
        {
          name: "description",
          content: "Convert Word to PDF online for free. Transform Word documents (.doc, .docx) to PDF format while maintaining formatting. No registration required, 100% secure."
        },
        {
          name: "keywords",
          content: "Word to PDF, DOCX to PDF, convert Word to PDF, Word converter, free Word to PDF, online Word converter, Word to PDF online"
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
            "name": "Word to PDF Converter",
            "description": "Free online tool to convert Word documents to PDF files",
            "url": "https://freetopdf.com/word-to-pdf",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Word to PDF conversion",
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
      // Word 파일만
      "application/msword": ".doc",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx"
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
      const isWordFile = fileName.endsWith(".doc") || fileName.endsWith(".docx");
      const isWordMimeType = Object.keys(ALLOWED_TYPES).includes(fileType);
      if (!isWordFile) {
        error.value = `${file.name} is not a Word file. Please upload a .doc or .docx file.`;
        return false;
      }
      if (!isWordMimeType) {
        error.value = `${file.name} has an invalid file type. Please upload a valid Word document.`;
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
    const convertToPDF = async () => {
      if (!selectedFile.value) return;
      loading.value = true;
      error.value = null;
      try {
        const formData = new FormData();
        formData.append("files", selectedFile.value);
        console.log("Sending file:", selectedFile.value);
        trackApiCallStart("word_to_pdf", "POST");
        trackFileConversion("word_to_pdf", selectedFile.value.type, selectedFile.value.size);
        const apiUrl = await getFullApiUrl(apiEndpoints.wordToPdf);
        console.log("🔍 Using API URL:", apiUrl);
        const startTime = Date.now();
        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
          mode: "cors",
          headers: {
            "Accept": "application/json"
          }
        });
        const responseTime = Date.now() - startTime;
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 429 && data.error === "무료 사용 한도 초과") {
            trackUsageLimit("daily_limit", data.current_count, data.limit);
            trackAdView("interstitial", "usage_limit");
            showInterstitialAd.value = true;
            return;
          } else {
            trackApiCallError("word_to_pdf", "POST", response.status, data.detail || data.error);
            throw new Error(data.detail || data.error || "Conversion failed");
          }
        }
        trackApiCallSuccess("word_to_pdf", "POST", responseTime);
        router.push({
          name: "download-pdf",
          query: {
            pdf_filename: data.pdf_path,
            original_filename: selectedFile.value.name
          }
        });
      } catch (err) {
        console.error("Conversion error:", err);
        error.value = err.message || "An error occurred during conversion";
      } finally {
        loading.value = false;
      }
    };
    const handleAdCompleted = async (adData) => {
      console.log("✅ Ad completed:", adData);
      showInterstitialAd.value = false;
      trackAdView("interstitial", "completed");
      if (selectedFile.value) {
        await convertToPDF();
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
      const _component_GoogleAdsense = GoogleAdsense;
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, { class: "py-4 py-md-8" }, {
        default: withCtx(() => [
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
                      createVNode(_component_v_card_title, { class: "text-h6 text-center mb-4 title-no-truncate" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            size: "20",
                            color: "primary",
                            class: "mr-2"
                          }, {
                            default: withCtx(() => _cache[7] || (_cache[7] = [
                              createTextVNode("mdi-file-word-box")
                            ])),
                            _: 1,
                            __: [7]
                          }),
                          _cache[8] || (_cache[8] = createTextVNode(" Word to PDF Converter "))
                        ]),
                        _: 1,
                        __: [8]
                      }),
                      createVNode(_component_v_card_subtitle, { class: "text-center mb-4 text-body-2 subtitle-no-truncate" }, {
                        default: withCtx(() => _cache[9] || (_cache[9] = [
                          createTextVNode(" Convert your Word document to high-quality PDF file ")
                        ])),
                        _: 1,
                        __: [9]
                      }),
                      createVNode(_component_v_alert, {
                        type: "info",
                        variant: "tonal",
                        class: "mb-4",
                        icon: "mdi-information",
                        density: "compact"
                      }, {
                        default: withCtx(() => _cache[10] || (_cache[10] = [
                          createBaseVNode("div", { class: "text-body-2 font-weight-bold mb-1" }, "Supported Formats:", -1),
                          createBaseVNode("div", { class: "text-caption" }, " • Microsoft Word (.doc, .docx) ", -1)
                        ])),
                        _: 1,
                        __: [10]
                      }),
                      createVNode(_component_v_card, {
                        class: normalizeClass(["upload-area mb-4", { "upload-area--active": unref(isDragging) }]),
                        onDragover: _cache[1] || (_cache[1] = withModifiers(($event) => isDragging.value = true, ["prevent"])),
                        onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => isDragging.value = false, ["prevent"])),
                        onDrop: withModifiers(handleFileDrop, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, { class: "text-center py-6 py-md-8" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                size: "48",
                                color: "primary",
                                class: "mb-3"
                              }, {
                                default: withCtx(() => _cache[11] || (_cache[11] = [
                                  createTextVNode(" mdi-cloud-upload ")
                                ])),
                                _: 1,
                                __: [11]
                              }),
                              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-subtitle-1 mb-2" }, " Drag and drop your Word file here ", -1)),
                              _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis mb-3" }, " or ", -1)),
                              _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-caption text-medium-emphasis mb-3" }, " Maximum file size: 5MB ", -1)),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                onClick: triggerFileInput,
                                size: "small"
                              }, {
                                default: withCtx(() => _cache[12] || (_cache[12] = [
                                  createTextVNode(" Choose Word File ")
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
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-subtitle-1" }, {
                            default: withCtx(() => _cache[16] || (_cache[16] = [
                              createTextVNode(" Selected Word File ")
                            ])),
                            _: 1,
                            __: [16]
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, { class: "file-list-item" }, {
                                append: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    variant: "text",
                                    color: "error",
                                    onClick: removeFile
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => _cache[17] || (_cache[17] = [
                                          createTextVNode("mdi-close")
                                        ])),
                                        _: 1,
                                        __: [17]
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
                          size: "large",
                          disabled: !unref(selectedFile) || unref(loading),
                          onClick: convertToPDF,
                          class: "mb-3",
                          "prepend-icon": "mdi-file-pdf-box"
                        }, {
                          default: withCtx(() => _cache[18] || (_cache[18] = [
                            createTextVNode(" Convert to PDF ")
                          ])),
                          _: 1,
                          __: [18]
                        }, 8, ["disabled"]),
                        createVNode(_component_v_btn, {
                          variant: "text",
                          onClick: clearFile,
                          disabled: !unref(selectedFile) || unref(loading)
                        }, {
                          default: withCtx(() => _cache[19] || (_cache[19] = [
                            createTextVNode(" Clear File ")
                          ])),
                          _: 1,
                          __: [19]
                        }, 8, ["disabled"])
                      ]),
                      createVNode(_component_v_row, { class: "mb-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_GoogleAdsense, {
                                "ad-slot": unref(adsenseConfig).slots.wordToPdf,
                                "ad-format": "auto",
                                "full-width-responsive": "true",
                                "ad-layout": "in-article"
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
          createVNode(_component_v_row, { class: "mt-6 mt-md-8" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  _cache[38] || (_cache[38] = createBaseVNode("h2", { class: "text-h5 text-center mb-4" }, "Why Convert Word to PDF?", -1)),
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            variant: "outlined",
                            class: "pa-4 pa-md-6 h-100"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("h3", _hoisted_6, [
                                createVNode(_component_v_icon, {
                                  color: "primary",
                                  class: "mr-2",
                                  size: "small"
                                }, {
                                  default: withCtx(() => _cache[20] || (_cache[20] = [
                                    createTextVNode("mdi-file-multiple")
                                  ])),
                                  _: 1,
                                  __: [20]
                                }),
                                _cache[21] || (_cache[21] = createTextVNode(" Universal Compatibility "))
                              ]),
                              _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-body-2 mb-3" }, " PDF format ensures your Word documents look the same across all devices and platforms. Convert Word files to PDF for consistent viewing and professional sharing. ", -1)),
                              createVNode(_component_v_list, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[22] || (_cache[22] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [22]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[23] || (_cache[23] = [
                                          createTextVNode("Works on any device")
                                        ])),
                                        _: 1,
                                        __: [23]
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
                                        default: withCtx(() => _cache[24] || (_cache[24] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [24]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[25] || (_cache[25] = [
                                          createTextVNode("Preserves original formatting")
                                        ])),
                                        _: 1,
                                        __: [25]
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
                                        default: withCtx(() => _cache[26] || (_cache[26] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [26]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[27] || (_cache[27] = [
                                          createTextVNode("No software installation required")
                                        ])),
                                        _: 1,
                                        __: [27]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1,
                            __: [28]
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
                            class: "pa-4 pa-md-6 h-100"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("h3", _hoisted_7, [
                                createVNode(_component_v_icon, {
                                  color: "success",
                                  class: "mr-2",
                                  size: "small"
                                }, {
                                  default: withCtx(() => _cache[29] || (_cache[29] = [
                                    createTextVNode("mdi-shield-check")
                                  ])),
                                  _: 1,
                                  __: [29]
                                }),
                                _cache[30] || (_cache[30] = createTextVNode(" Professional Sharing "))
                              ]),
                              _cache[37] || (_cache[37] = createBaseVNode("p", { class: "text-body-2 mb-3" }, " PDF format is perfect for business documents, reports, and official communications. Convert Word to PDF for secure, professional document sharing. ", -1)),
                              createVNode(_component_v_list, { density: "compact" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, null, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => _cache[31] || (_cache[31] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [31]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[32] || (_cache[32] = [
                                          createTextVNode("Professional appearance")
                                        ])),
                                        _: 1,
                                        __: [32]
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
                                        default: withCtx(() => _cache[33] || (_cache[33] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [33]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[34] || (_cache[34] = [
                                          createTextVNode("Secure document format")
                                        ])),
                                        _: 1,
                                        __: [34]
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
                                        default: withCtx(() => _cache[35] || (_cache[35] = [
                                          createTextVNode("mdi-check")
                                        ])),
                                        _: 1,
                                        __: [35]
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => _cache[36] || (_cache[36] = [
                                          createTextVNode("Easy to archive and store")
                                        ])),
                                        _: 1,
                                        __: [36]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
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
          }),
          createVNode(_component_v_row, { class: "mt-4 mt-md-6" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    color: "info",
                    variant: "tonal",
                    class: "pa-4 pa-md-6"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("h3", _hoisted_8, [
                        createVNode(_component_v_icon, {
                          class: "mr-2",
                          size: "small"
                        }, {
                          default: withCtx(() => _cache[39] || (_cache[39] = [
                            createTextVNode("mdi-lightbulb")
                          ])),
                          _: 1,
                          __: [39]
                        }),
                        _cache[40] || (_cache[40] = createTextVNode(" Pro Tips for Best Results "))
                      ]),
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => _cache[41] || (_cache[41] = [
                              createBaseVNode("ul", { class: "text-body-2" }, [
                                createBaseVNode("li", { class: "mb-1" }, "Use high-quality Word documents for better PDF output"),
                                createBaseVNode("li", { class: "mb-1" }, "Check formatting before conversion"),
                                createBaseVNode("li", { class: "mb-1" }, "Ensure file size is within 5MB limit")
                              ], -1)
                            ])),
                            _: 1,
                            __: [41]
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => _cache[42] || (_cache[42] = [
                              createBaseVNode("ul", { class: "text-body-2" }, [
                                createBaseVNode("li", { class: "mb-1" }, "Complex layouts convert best to PDF"),
                                createBaseVNode("li", { class: "mb-1" }, "Images and tables are preserved"),
                                createBaseVNode("li", { class: "mb-1" }, "Fonts are embedded in the PDF")
                              ], -1)
                            ])),
                            _: 1,
                            __: [42]
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
          createVNode(_component_v_row, { class: "mt-4 mt-md-6" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  _cache[46] || (_cache[46] = createBaseVNode("h3", { class: "text-subtitle-1 text-center mb-3" }, "Related PDF Tools", -1)),
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
                            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$router.push("/pdf-to-word")),
                            "prepend-icon": "mdi-file-word-box"
                          }, {
                            default: withCtx(() => _cache[43] || (_cache[43] = [
                              createTextVNode(" PDF to Word ")
                            ])),
                            _: 1,
                            __: [43]
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
                            default: withCtx(() => _cache[44] || (_cache[44] = [
                              createTextVNode(" Merge PDFs ")
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
                            color: "info",
                            variant: "outlined",
                            block: "",
                            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$router.push("/pdf-guide")),
                            "prepend-icon": "mdi-book-open-variant"
                          }, {
                            default: withCtx(() => _cache[45] || (_cache[45] = [
                              createTextVNode(" PDF Guide ")
                            ])),
                            _: 1,
                            __: [45]
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1,
                __: [46]
              })
            ]),
            _: 1
          }),
          createVNode(InterstitialAd, {
            show: unref(showInterstitialAd),
            onAdCompleted: handleAdCompleted,
            onClose: closeInterstitialAd
          }, null, 8, ["show"])
        ]),
        _: 1
      });
    };
  }
};
const wordToPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12aa42b8"]]);
export {
  wordToPdf as default
};
