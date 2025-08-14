import { _ as __nuxt_component_0 } from "./7QXHeKNd.js";
import { _ as _export_sfc, g as ref, l as computed, f as createBlock, w as withCtx, r as resolveComponent, i as useRouter, o as openBlock, b as createVNode, m as createCommentVNode, a as createBaseVNode, d as createTextVNode, j as unref, t as toDisplayString, c as createElementBlock, F as Fragment, k as renderList } from "./Bogji2Ua.js";
import { g as getAdsenseConfig } from "./2f-ytn29.js";
import { g as getFullApiUrl, a as apiEndpoints } from "./OM6BgpmZ.js";
import { u as useHead } from "./DpwA_pjF.js";
const setInterval = window.setInterval;
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = { class: "d-flex align-center" };
const _hoisted_3 = { class: "ad-placeholder" };
const _hoisted_4 = { class: "text-center" };
const _hoisted_5 = { class: "d-flex align-center" };
const _hoisted_6 = { class: "flex-grow-1" };
const _hoisted_7 = { class: "text-body-2" };
const _hoisted_8 = { class: "d-flex align-center" };
const _hoisted_9 = { class: "flex-grow-1" };
const _hoisted_10 = { class: "text-body-2" };
const maxTotalSize = 5 * 1024 * 1024;
const _sfc_main = {
  __name: "merge",
  setup(__props) {
    const adsenseConfig = getAdsenseConfig();
    useHead({
      title: "Merge PDF Files - Free Online PDF Merger Tool | FreeToPDF",
      meta: [
        {
          name: "description",
          content: "Merge multiple PDF files into one document online for free. Combine PDF files easily with our drag-and-drop interface. No registration required, 100% secure."
        },
        {
          name: "keywords",
          content: "merge PDF, combine PDF files, PDF merger, join PDF files, merge PDF online, free PDF merger, combine multiple PDFs"
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
            "name": "PDF Merger",
            "description": "Free online tool to merge multiple PDF files into one document",
            "url": "https://freetopdf.com/merge",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "PDF merging",
              "Multiple file support",
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
    const selectedFiles = ref([]);
    const singleFile = ref(null);
    const isConverting = ref(false);
    const conversionProgress = ref(0);
    const error = ref(null);
    const successMessage = ref(null);
    const totalFileSize = computed(() => {
      return selectedFiles.value.reduce((total, file) => total + file.size, 0);
    });
    const totalFileSizeMB = computed(() => {
      return (totalFileSize.value / (1024 * 1024)).toFixed(2);
    });
    const fileErrors = ref([]);
    const getFileIcon = (filename) => {
      return "mdi-file-pdf-box";
    };
    const handleSingleFileChange = (file) => {
      if (!file) {
        singleFile.value = null;
        fileErrors.value = [];
        return;
      }
      if (!file.name.toLowerCase().endsWith(".pdf")) {
        fileErrors.value = [`${file.name}: Only PDF files are supported.`];
        singleFile.value = null;
        return;
      }
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        fileErrors.value = [`${file.name}: File size exceeds 5MB.`];
        singleFile.value = null;
        return;
      }
      const totalSize = selectedFiles.value.reduce((total, f) => total + f.size, 0) + file.size;
      if (totalSize > maxTotalSize) {
        fileErrors.value = [`Total file size (${(totalSize / (1024 * 1024)).toFixed(2)}MB) would exceed the 5MB limit.`];
        singleFile.value = null;
        return;
      }
      fileErrors.value = [];
      singleFile.value = file;
    };
    const addFile = () => {
      if (!singleFile.value) return;
      const existingFile = selectedFiles.value.find((f) => f.name === singleFile.value.name);
      if (existingFile) {
        fileErrors.value = [`File "${singleFile.value.name}" is already in the list.`];
        return;
      }
      selectedFiles.value.push(singleFile.value);
      singleFile.value = null;
      fileErrors.value = [];
      error.value = null;
      successMessage.value = null;
    };
    const removeFile = (index) => {
      selectedFiles.value.splice(index, 1);
      error.value = null;
      successMessage.value = null;
    };
    const moveFile = (index, direction) => {
      const newIndex = index + direction;
      if (newIndex >= 0 && newIndex < selectedFiles.value.length) {
        const file = selectedFiles.value[index];
        selectedFiles.value.splice(index, 1);
        selectedFiles.value.splice(newIndex, 0, file);
      }
    };
    const mergeFiles = async () => {
      if (selectedFiles.value.length < 2) {
        error.value = "Please select at least 2 PDF files to merge.";
        return;
      }
      isConverting.value = true;
      conversionProgress.value = 0;
      error.value = null;
      successMessage.value = null;
      try {
        const formData = new FormData();
        selectedFiles.value.forEach((file, index) => {
          formData.append("files", file);
        });
        const progressInterval = setInterval(() => {
          if (conversionProgress.value < 90) {
            conversionProgress.value += 10;
          }
        }, 500);
        const mergeUrl = await getFullApiUrl(apiEndpoints.mergePdf);
        console.log("🔍 Merge URL:", mergeUrl);
        const response = await fetch(mergeUrl, {
          method: "POST",
          body: formData
        });
        clearInterval(progressInterval);
        conversionProgress.value = 100;
        if (!response.ok) {
          const errorData = await response.json();
          if (response.status === 429 && errorData.error === "무료 사용 한도 초과") {
            error.value = `You have used all your free usage limit (${errorData.limit} times). Watch ads to continue using our tools.`;
            if (errorData.current_count !== void 0 && errorData.limit !== void 0) {
              error.value += ` (Current: ${errorData.current_count}/${errorData.limit})`;
            }
          } else {
            throw new Error(errorData.detail || errorData.error || "An error occurred while merging files.");
          }
          return;
        }
        const data = await response.json();
        successMessage.value = "Files merged successfully!";
        setTimeout(() => {
          router.push({
            name: "download-pdf",
            query: {
              pdf_filename: data.pdf_path,
              original_filename: `merged_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`
            }
          });
        }, 1500);
      } catch (err) {
        console.error("Merge error:", err);
        error.value = err.message || "An error occurred while merging files.";
      } finally {
        isConverting.value = false;
        conversionProgress.value = 0;
      }
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_GoogleAdsense = __nuxt_component_0;
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, { class: "fill-height" }, {
        default: withCtx(() => [
          createVNode(_component_v_row, {
            justify: "center",
            align: "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "12",
                md: "8",
                lg: "6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "pa-6" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { class: "text-h4 text-center mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            icon: "mdi-file-multiple",
                            class: "mr-3",
                            size: "large"
                          }),
                          _cache[3] || (_cache[3] = createTextVNode(" PDF Merge "))
                        ]),
                        _: 1,
                        __: [3]
                      }),
                      createVNode(_component_v_card_subtitle, { class: "text-center mb-6" }, {
                        default: withCtx(() => _cache[4] || (_cache[4] = [
                          createTextVNode(" Merge multiple PDF files into one ")
                        ])),
                        _: 1,
                        __: [4]
                      }),
                      createVNode(_component_v_row, { class: "mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_GoogleAdsense, {
                                "ad-slot": unref(adsenseConfig).slots.merge,
                                "ad-format": "auto",
                                "full-width-responsive": "true"
                              }, null, 8, ["ad-slot"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card, {
                        class: "mb-6",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_1, [
                                createVNode(_component_v_file_input, {
                                  modelValue: singleFile.value,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => singleFile.value = $event),
                                  multiple: false,
                                  "show-size": "",
                                  accept: ".pdf",
                                  label: "Select a PDF file to add",
                                  "prepend-icon": "mdi-file-pdf-box",
                                  onChange: handleSingleFileChange,
                                  "error-messages": fileErrors.value,
                                  class: "mb-4"
                                }, null, 8, ["modelValue", "error-messages"]),
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  onClick: addFile,
                                  disabled: !singleFile.value || isConverting.value,
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-plus",
                                      class: "mr-2"
                                    }),
                                    _cache[5] || (_cache[5] = createTextVNode(" Add File "))
                                  ]),
                                  _: 1,
                                  __: [5]
                                }, 8, ["disabled"]),
                                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-caption text-medium-emphasis" }, " Supported format: PDF files only ", -1)),
                                _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-caption text-medium-emphasis" }, " Maximum file size: 5MB per file ", -1)),
                                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-caption text-medium-emphasis" }, " Total file size limit: 5MB ", -1)),
                                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-caption text-medium-emphasis" }, " Add files one by one to the list below ", -1)),
                                _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-caption text-medium-emphasis" }, " Minimum: 2 PDF files required for merging ", -1))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      selectedFiles.value.length > 0 ? (openBlock(), createBlock(_component_v_card, {
                        key: 0,
                        class: "mb-6",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h6" }, {
                            default: withCtx(() => [
                              createTextVNode(" Selected Files (" + toDisplayString(selectedFiles.value.length) + ") - Total " + toDisplayString(totalFileSizeMB.value) + "MB ", 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              totalFileSize.value > maxTotalSize ? (openBlock(), createBlock(_component_v_alert, {
                                key: 0,
                                type: "warning",
                                class: "mb-4",
                                icon: "mdi-alert"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Total file size (" + toDisplayString(totalFileSizeMB.value) + "MB) exceeds the 5MB limit. Please remove files or select smaller files. ", 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectedFiles.value, (file, index) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      key: index,
                                      "prepend-icon": getFileIcon(file.name),
                                      title: file.name,
                                      subtitle: `${(file.size / 1024 / 1024).toFixed(2)} MB`
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          icon: "mdi-delete",
                                          variant: "text",
                                          color: "error",
                                          size: "small",
                                          onClick: ($event) => removeFile(index)
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1032, ["prepend-icon", "title", "subtitle"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      selectedFiles.value.length > 1 ? (openBlock(), createBlock(_component_v_card, {
                        key: 1,
                        class: "mb-6",
                        variant: "outlined"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card_title, { class: "text-h6" }, {
                            default: withCtx(() => _cache[11] || (_cache[11] = [
                              createTextVNode(" File Order ")
                            ])),
                            _: 1,
                            __: [11]
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-caption text-medium-emphasis mb-3" }, " Use arrows to change file order ", -1)),
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectedFiles.value, (file, index) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      key: index,
                                      "prepend-icon": getFileIcon(file.name),
                                      title: file.name,
                                      subtitle: `${(file.size / 1024 / 1024).toFixed(2)} MB`
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          icon: "mdi-drag",
                                          class: "mr-2"
                                        })
                                      ]),
                                      append: withCtx(() => [
                                        createBaseVNode("div", _hoisted_2, [
                                          index > 0 ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 0,
                                            icon: "mdi-arrow-up",
                                            variant: "text",
                                            size: "small",
                                            onClick: ($event) => moveFile(index, -1)
                                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                          index < selectedFiles.value.length - 1 ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 1,
                                            icon: "mdi-arrow-down",
                                            variant: "text",
                                            size: "small",
                                            onClick: ($event) => moveFile(index, 1)
                                          }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["prepend-icon", "title", "subtitle"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1,
                            __: [12]
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_v_row, { class: "mb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { class: "ad-inline text-center pa-4" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_3, [
                                    createVNode(_component_v_icon, {
                                      size: "32",
                                      color: "grey-lighten-1"
                                    }, {
                                      default: withCtx(() => _cache[13] || (_cache[13] = [
                                        createTextVNode("mdi-advertisement")
                                      ])),
                                      _: 1,
                                      __: [13]
                                    }),
                                    _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-body-2 text-grey-lighten-1 mt-2" }, "Advertisement Space", -1)),
                                    _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-caption text-grey-lighten-1" }, "300x250 Inline Ad", -1))
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
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          size: "large",
                          loading: isConverting.value,
                          disabled: selectedFiles.value.length < 2 || isConverting.value || totalFileSize.value > maxTotalSize,
                          onClick: mergeFiles,
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              icon: "mdi-file-pdf-box",
                              class: "mr-2"
                            }),
                            _cache[16] || (_cache[16] = createTextVNode(" Merge PDFs "))
                          ]),
                          _: 1,
                          __: [16]
                        }, 8, ["loading", "disabled"])
                      ]),
                      isConverting.value ? (openBlock(), createBlock(_component_v_progress_linear, {
                        key: 2,
                        "model-value": conversionProgress.value,
                        color: "primary",
                        height: "8",
                        class: "mb-4"
                      }, null, 8, ["model-value"])) : createCommentVNode("", true),
                      error.value ? (openBlock(), createBlock(_component_v_alert, {
                        key: 3,
                        type: "error",
                        class: "mb-4",
                        icon: "mdi-alert"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, [
                              _cache[17] || (_cache[17] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Error", -1)),
                              createBaseVNode("div", _hoisted_7, toDisplayString(error.value), 1)
                            ]),
                            createVNode(_component_v_icon, {
                              class: "close-icon",
                              icon: "mdi-close",
                              size: "20",
                              onClick: _cache[1] || (_cache[1] = ($event) => error.value = null)
                            })
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      successMessage.value ? (openBlock(), createBlock(_component_v_alert, {
                        key: 4,
                        type: "success",
                        class: "mb-4",
                        icon: "mdi-check-circle"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_8, [
                            createBaseVNode("div", _hoisted_9, [
                              _cache[18] || (_cache[18] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Success", -1)),
                              createBaseVNode("div", _hoisted_10, toDisplayString(successMessage.value), 1)
                            ]),
                            createVNode(_component_v_icon, {
                              class: "close-icon",
                              icon: "mdi-close",
                              size: "20",
                              onClick: _cache[2] || (_cache[2] = ($event) => successMessage.value = null)
                            })
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
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
      });
    };
  }
};
const merge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c32c2bf3"]]);
export {
  merge as default
};
