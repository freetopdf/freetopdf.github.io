import { _ as __nuxt_component_0 } from "./Cd755G6g.js";
import { _ as _export_sfc, g as ref, l as computed, f as createBlock, w as withCtx, r as resolveComponent, i as useRouter, o as openBlock, b as createVNode, m as createCommentVNode, a as createBaseVNode, d as createTextVNode, j as unref, n as withModifiers, p as normalizeClass, t as toDisplayString, c as createElementBlock, F as Fragment, k as renderList } from "./Bz0Oa6aQ.js";
import { g as getAdsenseConfig } from "./BH7RvNul.js";
import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { I as InterstitialAd } from "./BFmeZw2v.js";
import { u as useHead } from "./mao6L1HQ.js";
const setInterval = window.setInterval;
const _hoisted_1 = { class: "d-flex align-center gap-2" };
const _hoisted_2 = { class: "ad-placeholder" };
const _hoisted_3 = { class: "text-center" };
const _hoisted_4 = { class: "d-flex align-center" };
const _hoisted_5 = { class: "flex-grow-1" };
const _hoisted_6 = { class: "text-body-2" };
const _hoisted_7 = { class: "d-flex align-center" };
const _hoisted_8 = { class: "flex-grow-1" };
const _hoisted_9 = { class: "text-body-2" };
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
    const isConverting = ref(false);
    const conversionProgress = ref(0);
    const error = ref(null);
    const successMessage = ref(null);
    const isDragging = ref(false);
    const fileInput = ref(null);
    const showInterstitialAd = ref(false);
    const pendingConversion = ref(false);
    const totalFileSize = computed(() => {
      return selectedFiles.value.reduce((total, file) => total + file.size, 0);
    });
    const totalFileSizeMB = computed(() => {
      return (totalFileSize.value / (1024 * 1024)).toFixed(2);
    });
    ref([]);
    const getFileIcon = (filename) => {
      return "mdi-file-pdf-box";
    };
    const triggerFileInput = () => {
      fileInput.value.click();
    };
    const handleFileSelect = (event) => {
      const files = Array.from(event.target.files);
      if (files.length > 0) {
        files.forEach((file) => {
          if (validateFile(file)) {
            addFileToList(file);
          }
        });
      }
      event.target.value = "";
    };
    const handleFileDrop = (event) => {
      isDragging.value = false;
      const files = Array.from(event.dataTransfer.files);
      if (files.length > 0) {
        files.forEach((file) => {
          if (validateFile(file)) {
            addFileToList(file);
          }
        });
      }
      if (error.value) {
        selectedFiles.value = [];
      }
    };
    const validateFile = (file) => {
      if (!file.name.toLowerCase().endsWith(".pdf")) {
        error.value = `${file.name}: Only PDF files are supported.`;
        return false;
      }
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        error.value = `${file.name}: File size exceeds 5MB.`;
        return false;
      }
      const totalSize = selectedFiles.value.reduce((total, f) => total + f.size, 0) + file.size;
      if (totalSize > maxTotalSize) {
        error.value = `Total file size (${(totalSize / (1024 * 1024)).toFixed(2)}MB) would exceed the 5MB limit.`;
        return false;
      }
      const existingFile = selectedFiles.value.find((f) => f.name === file.name);
      if (existingFile) {
        error.value = `File "${file.name}" is already in the list.`;
        return false;
      }
      return true;
    };
    const addFileToList = (file) => {
      selectedFiles.value.push(file);
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
          if (response.status === 429) {
            showInterstitialAd.value = true;
            pendingConversion.value = true;
            error.value = `You have used all your free usage limit (${errorData.limit} times). Watch ads to continue using our tools.`;
            if (errorData.current_count !== void 0 && errorData.limit !== void 0) {
              error.value += ` (Current: ${errorData.current_count}/${errorData.limit})`;
            }
            isConverting.value = false;
            return;
          } else {
            throw new Error(errorData.detail || errorData.error || "An error occurred while merging files.");
          }
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
    const handleAdCompleted = async (data) => {
      console.log("✅ Ad completed:", data);
      showInterstitialAd.value = false;
      if (pendingConversion.value) {
        pendingConversion.value = false;
        await mergeFiles();
      }
    };
    const closeInterstitialAd = () => {
      showInterstitialAd.value = false;
      pendingConversion.value = false;
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_GoogleAdsense = __nuxt_component_0;
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createBlock(_component_v_container, { class: "fill-height" }, {
        default: withCtx(() => [
          createVNode(InterstitialAd, {
            show: showInterstitialAd.value,
            onAdCompleted: handleAdCompleted,
            onClose: closeInterstitialAd
          }, null, 8, ["show"]),
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
                          _cache[4] || (_cache[4] = createTextVNode(" PDF Merge "))
                        ]),
                        _: 1,
                        __: [4]
                      }),
                      createVNode(_component_v_card_subtitle, { class: "text-center mb-6" }, {
                        default: withCtx(() => _cache[5] || (_cache[5] = [
                          createTextVNode(" Merge multiple PDF files into one ")
                        ])),
                        _: 1,
                        __: [5]
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
                        class: normalizeClass(["upload-area mb-6", { "upload-area--active": isDragging.value }]),
                        onDragover: _cache[0] || (_cache[0] = withModifiers(($event) => isDragging.value = true, ["prevent"])),
                        onDragleave: _cache[1] || (_cache[1] = withModifiers(($event) => isDragging.value = false, ["prevent"])),
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
                                default: withCtx(() => _cache[6] || (_cache[6] = [
                                  createTextVNode(" mdi-cloud-upload ")
                                ])),
                                _: 1,
                                __: [6]
                              }),
                              _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-h6 mb-2" }, " Drag and drop PDF files here ", -1)),
                              _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-body-1 text-medium-emphasis mb-4" }, " or ", -1)),
                              _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, " Maximum file size: 5MB per file ", -1)),
                              _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, " Total file size limit: 5MB ", -1)),
                              _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis mb-4" }, " Minimum: 2 PDF files required for merging ", -1)),
                              createVNode(_component_v_btn, {
                                color: "primary",
                                variant: "outlined",
                                onClick: triggerFileInput,
                                class: "mt-4"
                              }, {
                                default: withCtx(() => _cache[7] || (_cache[7] = [
                                  createTextVNode(" Choose PDF Files ")
                                ])),
                                _: 1,
                                __: [7]
                              }),
                              createBaseVNode("input", {
                                ref_key: "fileInput",
                                ref: fileInput,
                                type: "file",
                                class: "d-none",
                                multiple: "",
                                accept: ".pdf",
                                onChange: handleFileSelect
                              }, null, 544)
                            ]),
                            _: 1,
                            __: [8, 9, 10, 11, 12]
                          })
                        ]),
                        _: 1
                      }, 8, ["class"]),
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
                              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-caption text-medium-emphasis mb-3" }, " Drag files to reorder or use arrows. Click delete to remove files. ", -1)),
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectedFiles.value, (file, index) => {
                                    return openBlock(), createBlock(_component_v_list_item, {
                                      key: index,
                                      class: "file-list-item"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          icon: "mdi-drag",
                                          class: "mr-2 drag-handle"
                                        }),
                                        createVNode(_component_v_icon, {
                                          icon: getFileIcon(file.name),
                                          class: "mr-2"
                                        }, null, 8, ["icon"])
                                      ]),
                                      append: withCtx(() => [
                                        createBaseVNode("div", _hoisted_1, [
                                          index > 0 ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 0,
                                            icon: "mdi-arrow-up",
                                            variant: "text",
                                            size: "small",
                                            color: "primary",
                                            onClick: ($event) => moveFile(index, -1),
                                            title: "Move up"
                                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                          index < selectedFiles.value.length - 1 ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 1,
                                            icon: "mdi-arrow-down",
                                            variant: "text",
                                            size: "small",
                                            color: "primary",
                                            onClick: ($event) => moveFile(index, 1),
                                            title: "Move down"
                                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                          createVNode(_component_v_btn, {
                                            icon: "mdi-delete",
                                            variant: "text",
                                            color: "error",
                                            size: "small",
                                            onClick: ($event) => removeFile(index),
                                            title: "Remove file"
                                          }, null, 8, ["onClick"])
                                        ])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(file.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_v_list_item_subtitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString((file.size / 1024 / 1024).toFixed(2)) + " MB ", 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1,
                            __: [13]
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
                                  createBaseVNode("div", _hoisted_2, [
                                    createVNode(_component_v_icon, {
                                      size: "32",
                                      color: "grey-lighten-1"
                                    }, {
                                      default: withCtx(() => _cache[14] || (_cache[14] = [
                                        createTextVNode("mdi-advertisement")
                                      ])),
                                      _: 1,
                                      __: [14]
                                    }),
                                    _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-body-2 text-grey-lighten-1 mt-2" }, "Advertisement Space", -1)),
                                    _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-caption text-grey-lighten-1" }, "300x250 Inline Ad", -1))
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
                      createBaseVNode("div", _hoisted_3, [
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
                            _cache[17] || (_cache[17] = createTextVNode(" Merge PDFs "))
                          ]),
                          _: 1,
                          __: [17]
                        }, 8, ["loading", "disabled"])
                      ]),
                      isConverting.value ? (openBlock(), createBlock(_component_v_progress_linear, {
                        key: 1,
                        "model-value": conversionProgress.value,
                        color: "primary",
                        height: "8",
                        class: "mb-4"
                      }, null, 8, ["model-value"])) : createCommentVNode("", true),
                      error.value ? (openBlock(), createBlock(_component_v_alert, {
                        key: 2,
                        type: "error",
                        class: "mb-4",
                        icon: "mdi-alert"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_4, [
                            createBaseVNode("div", _hoisted_5, [
                              _cache[18] || (_cache[18] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Error", -1)),
                              createBaseVNode("div", _hoisted_6, toDisplayString(error.value), 1)
                            ]),
                            createVNode(_component_v_icon, {
                              class: "close-icon",
                              icon: "mdi-close",
                              size: "20",
                              onClick: _cache[2] || (_cache[2] = ($event) => error.value = null)
                            })
                          ])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      successMessage.value ? (openBlock(), createBlock(_component_v_alert, {
                        key: 3,
                        type: "success",
                        class: "mb-4",
                        icon: "mdi-check-circle"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("div", _hoisted_8, [
                              _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Success", -1)),
                              createBaseVNode("div", _hoisted_9, toDisplayString(successMessage.value), 1)
                            ]),
                            createVNode(_component_v_icon, {
                              class: "close-icon",
                              icon: "mdi-close",
                              size: "20",
                              onClick: _cache[3] || (_cache[3] = ($event) => successMessage.value = null)
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
const merge = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-431cb974"]]);
export {
  merge as default
};
