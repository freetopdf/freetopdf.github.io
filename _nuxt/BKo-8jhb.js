import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { H as useRoute, h as ref, f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, b as createVNode, l as createCommentVNode, p as unref, a as createBaseVNode, t as toDisplayString, d as createTextVNode, c as createElementBlock, q as trackApiCallStart, I as trackFileDownload, y as trackApiCallError, z as trackApiCallSuccess } from "./CTiNJU9H.js";
const _hoisted_1 = { class: "d-flex align-center" };
const _hoisted_2 = { class: "flex-grow-1" };
const _hoisted_3 = { class: "text-body-2" };
const _hoisted_4 = {
  key: 0,
  class: "text-body-2 text-medium-emphasis mb-4"
};
const _hoisted_5 = { class: "mt-4" };
const _sfc_main = {
  __name: "download-pdf",
  setup(__props) {
    const route = useRoute();
    const pdfFilename = ref(route.query.pdf_filename);
    const originalFilename = ref(route.query.original_filename);
    const error = ref(null);
    const downloadPDF = async () => {
      if (!pdfFilename.value) {
        error.value = "PDF 파일 정보를 찾을 수 없습니다.";
        return;
      }
      try {
        let downloadFilename = "converted.pdf";
        if (originalFilename.value) {
          const nameWithoutExt = originalFilename.value.replace(/\.(doc|docx)$/i, "");
          downloadFilename = `${nameWithoutExt}.pdf`;
        }
        trackApiCallStart("download_pdf", "GET");
        trackFileDownload("pdf", "conversion");
        const pdfUrl = await getFullApiUrl(apiEndpoints.downloadPdf + `/${pdfFilename.value}`);
        console.log("🔍 PDF Download URL:", pdfUrl);
        const startTime = Date.now();
        const response = await fetch(pdfUrl);
        const responseTime = Date.now() - startTime;
        if (!response.ok) {
          trackApiCallError("download_pdf", "GET", response.status, "Download failed");
          throw new Error("Download failed.");
        }
        trackApiCallSuccess("download_pdf", "GET", responseTime);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = downloadFilename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch (err) {
        console.error("Download error:", err);
        error.value = err.message || "An error occurred during download.";
      }
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
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
                        class: "mb-6",
                        icon: "mdi-alert"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, [
                            createBaseVNode("div", _hoisted_2, [
                              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-subtitle-1 font-weight-bold mb-1" }, "Error", -1)),
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
                        default: withCtx(() => _cache[2] || (_cache[2] = [
                          createTextVNode(" PDF Download ")
                        ])),
                        _: 1,
                        __: [2]
                      }),
                      createVNode(_component_v_card_text, { class: "text-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            size: "64",
                            color: "success",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => _cache[3] || (_cache[3] = [
                              createTextVNode(" mdi-check-circle ")
                            ])),
                            _: 1,
                            __: [3]
                          }),
                          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-h6 mb-4" }, " Your PDF is ready! ", -1)),
                          unref(originalFilename) ? (openBlock(), createElementBlock("div", _hoisted_4, " Original file: " + toDisplayString(unref(originalFilename)), 1)) : createCommentVNode("", true),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            size: "large",
                            onClick: downloadPDF,
                            class: "mb-4",
                            disabled: !unref(pdfFilename)
                          }, {
                            default: withCtx(() => _cache[4] || (_cache[4] = [
                              createTextVNode(" Download PDF ")
                            ])),
                            _: 1,
                            __: [4]
                          }, 8, ["disabled"]),
                          createBaseVNode("div", _hoisted_5, [
                            createVNode(_component_v_btn, {
                              variant: "text",
                              color: "primary",
                              to: "/"
                            }, {
                              default: withCtx(() => _cache[5] || (_cache[5] = [
                                createTextVNode(" Convert Another File ")
                              ])),
                              _: 1,
                              __: [5]
                            })
                          ])
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
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
