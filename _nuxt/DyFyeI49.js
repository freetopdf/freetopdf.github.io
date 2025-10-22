import { g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { G as GoogleAdsense } from "./D0irzTTm.js";
import { g as getAdsenseConfig } from "./B7F39imv.js";
import { H as useRoute, h as ref, f as createBlock, w as withCtx, r as resolveComponent, o as openBlock, b as createVNode, d as createTextVNode, a as createBaseVNode, t as toDisplayString, p as unref } from "./BNhRdgAD.js";
const _hoisted_1 = { class: "text-body-2 text-medium-emphasis mb-4" };
const _hoisted_2 = { class: "mt-4" };
const _sfc_main = {
  __name: "download-word",
  setup(__props) {
    const adsenseConfig = getAdsenseConfig();
    const route = useRoute();
    const wordPath = ref(route.query.word_path);
    const originalName = ref(route.query.original_name);
    ref(null);
    const downloadWord = async () => {
      if (!wordPath.value) return;
      const wordUrl = await getFullApiUrl(apiEndpoints.downloadWord + `/${wordPath.value}`);
      console.log("🔍 Word Download URL:", wordUrl);
      window.open(wordUrl, "_blank");
    };
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_icon = resolveComponent("v-icon");
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
                      createVNode(_component_v_card_title, { class: "text-h4 text-center mb-6" }, {
                        default: withCtx(() => _cache[0] || (_cache[0] = [
                          createTextVNode(" Word Download ")
                        ])),
                        _: 1,
                        __: [0]
                      }),
                      createVNode(_component_v_card_text, { class: "text-center" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, {
                            size: "64",
                            color: "success",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => _cache[1] || (_cache[1] = [
                              createTextVNode(" mdi-check-circle ")
                            ])),
                            _: 1,
                            __: [1]
                          }),
                          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-h6 mb-4" }, " Your Word document is ready! ", -1)),
                          createBaseVNode("div", _hoisted_1, toDisplayString(unref(originalName) ? `Original: ${unref(originalName)}` : ""), 1),
                          createVNode(_component_v_btn, {
                            color: "primary",
                            size: "large",
                            onClick: downloadWord,
                            class: "mb-4",
                            "prepend-icon": "mdi-file-word-box"
                          }, {
                            default: withCtx(() => _cache[2] || (_cache[2] = [
                              createTextVNode(" Download Word Document ")
                            ])),
                            _: 1,
                            __: [2]
                          }),
                          createBaseVNode("div", _hoisted_2, [
                            createVNode(_component_v_btn, {
                              variant: "text",
                              color: "primary",
                              to: "/"
                            }, {
                              default: withCtx(() => _cache[3] || (_cache[3] = [
                                createTextVNode(" Convert Another File ")
                              ])),
                              _: 1,
                              __: [3]
                            })
                          ])
                        ]),
                        _: 1,
                        __: [4]
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
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-center mb-4" }, [
                    createBaseVNode("h3", { class: "text-h6 text-medium-emphasis" }, "Thank you for using our service!")
                  ], -1)),
                  createVNode(_component_v_card, {
                    variant: "outlined",
                    class: "pa-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(GoogleAdsense, {
                        "ad-slot": unref(adsenseConfig).slots.download,
                        "ad-format": "auto",
                        "full-width-responsive": "true"
                      }, null, 8, ["ad-slot"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1,
                __: [5]
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
