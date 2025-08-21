import { _ as __nuxt_component_0 } from "./Cd755G6g.js";
import { _ as _export_sfc, g as ref, f as createBlock, w as withCtx, r as resolveComponent, i as useRouter, o as openBlock, b as createVNode, m as createCommentVNode, a as createBaseVNode, j as unref, t as toDisplayString, d as createTextVNode, n as withModifiers, p as normalizeClass } from "./Bz0Oa6aQ.js";
import { F as FullscreenLoading } from "./CGK1xa4i.js";
import { I as InterstitialAd } from "./BFmeZw2v.js";
import { g as getAdsenseConfig } from "./BH7RvNul.js";
import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { u as useHead } from "./mao6L1HQ.js";
const _hoisted_1 = { class: "d-flex align-center" };
const _hoisted_2 = { class: "flex-grow-1" };
const _hoisted_3 = { class: "text-body-2" };
const _hoisted_4 = ["accept"];
const _hoisted_5 = { class: "ad-placeholder" };
const _hoisted_6 = { class: "d-flex flex-column align-center gap-4" };
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
        const apiUrl = await getFullApiUrl(apiEndpoints.wordToPdf);
        console.log("🔍 Using API URL:", apiUrl);
        const response = await fetch(apiUrl, {
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
            return;
          } else {
            throw new Error(data.detail || data.error || "Conversion failed");
          }
        }
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
      const _component_GoogleAdsense = __nuxt_component_0;
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = resolveComponent("v-list-item");
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
                              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Error", -1)),
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
                            default: withCtx(() => _cache[4] || (_cache[4] = [
                              createTextVNode("mdi-file-word-box")
                            ])),
                            _: 1,
                            __: [4]
                          }),
                          _cache[5] || (_cache[5] = createTextVNode(" Word to PDF Converter "))
                        ]),
                        _: 1,
                        __: [5]
                      }),
                      createVNode(_component_v_card_subtitle, { class: "text-center mb-6" }, {
                        default: withCtx(() => _cache[6] || (_cache[6] = [
                          createTextVNode(" Convert your Word document to high-quality PDF file ")
                        ])),
                        _: 1,
                        __: [6]
                      }),
                      createVNode(_component_v_row, { class: "mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_GoogleAdsense, {
                                "ad-slot": unref(adsenseConfig).slots.wordToPdf,
                                "ad-format": "auto",
                                "full-width-responsive": "true"
                              }, null, 8, ["ad-slot"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_alert, {
                        type: "info",
                        variant: "tonal",
                        class: "mb-6",
                        icon: "mdi-information"
                      }, {
                        default: withCtx(() => _cache[7] || (_cache[7] = [
                          createBaseVNode("div", { class: "text-subtitle-2 font-weight-bold mb-2" }, "Supported Formats:", -1),
                          createBaseVNode("div", { class: "text-body-2" }, " • Microsoft Word (.doc, .docx) ", -1)
                        ])),
                        _: 1,
                        __: [7]
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
                                default: withCtx(() => _cache[8] || (_cache[8] = [
                                  createTextVNode(" mdi-cloud-upload ")
                                ])),
                                _: 1,
                                __: [8]
                              }),
                              _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-h6 mb-2" }, " Drag and drop your Word file here ", -1)),
                              _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-body-1 text-medium-emphasis mb-4" }, " or ", -1)),
                              _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis" }, " Maximum file size: 5MB ", -1)),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                onClick: triggerFileInput,
                                class: "mt-4"
                              }, {
                                default: withCtx(() => _cache[9] || (_cache[9] = [
                                  createTextVNode(" Choose Word File ")
                                ])),
                                _: 1,
                                __: [9]
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
                            __: [10, 11, 12]
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
                            default: withCtx(() => _cache[13] || (_cache[13] = [
                              createTextVNode(" Selected Word File ")
                            ])),
                            _: 1,
                            __: [13]
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, { class: "file-list-item" }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    size: "32",
                                    color: "blue"
                                  }, {
                                    default: withCtx(() => _cache[14] || (_cache[14] = [
                                      createTextVNode(" mdi-file-word ")
                                    ])),
                                    _: 1,
                                    __: [14]
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
                                        default: withCtx(() => _cache[15] || (_cache[15] = [
                                          createTextVNode("mdi-close")
                                        ])),
                                        _: 1,
                                        __: [15]
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
                      createVNode(_component_v_row, { class: "mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "ad-inline text-center pa-4" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_5, [
                                    createVNode(_component_v_icon, {
                                      size: "32",
                                      color: "grey-lighten-1"
                                    }, {
                                      default: withCtx(() => _cache[16] || (_cache[16] = [
                                        createTextVNode("mdi-advertisement")
                                      ])),
                                      _: 1,
                                      __: [16]
                                    }),
                                    _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-body-2 text-grey-lighten-1 mt-2" }, "Advertisement Space", -1)),
                                    _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-caption text-grey-lighten-1" }, "300x250 Inline Ad", -1))
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
                      createBaseVNode("div", _hoisted_6, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          size: "x-large",
                          disabled: !unref(selectedFile) || unref(loading),
                          onClick: convertToPDF,
                          class: "mb-4",
                          "prepend-icon": "mdi-file-pdf-box"
                        }, {
                          default: withCtx(() => _cache[19] || (_cache[19] = [
                            createTextVNode(" Convert to PDF ")
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
const wordToPdf = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-968875f0"]]);
export {
  wordToPdf as default
};
