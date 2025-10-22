import { g as getAdsenseConfig } from "./BjPtRka9.js";
import { _ as _export_sfc, g as onMounted, D as nextTick, r as resolveComponent, c as createElementBlock, o as openBlock, b as createVNode, w as withCtx, a as createBaseVNode, p as unref } from "./DItpvUCq.js";
const _hoisted_1 = { class: "fullscreen-loading" };
const _hoisted_2 = { class: "loading-content" };
const _hoisted_3 = { class: "ad-section mt-8" };
const _hoisted_4 = { class: "ad-container" };
const _hoisted_5 = ["data-ad-slot"];
const _sfc_main = {
  __name: "FullscreenLoading",
  setup(__props) {
    const adsenseConfig = getAdsenseConfig();
    onMounted(() => {
      loadAdSenseAd();
    });
    const loadAdSenseAd = () => {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        try {
          nextTick(() => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          });
        } catch (error) {
          console.error("AdSense loading error:", error);
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_container = resolveComponent("v-container");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_v_container, { "fill-height": "" }, {
          default: withCtx(() => [
            createVNode(_component_v_row, {
              align: "center",
              justify: "center"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "8",
                  lg: "6",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_component_v_progress_circular, {
                        size: 70,
                        width: 7,
                        color: "primary",
                        indeterminate: ""
                      }),
                      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-h5 mt-4" }, "Converting PDF to Word...", -1)),
                      _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-body-1 mt-2" }, "Please wait a moment", -1))
                    ]),
                    createBaseVNode("div", _hoisted_3, [
                      _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-body-2 text-medium-emphasis mb-3" }, " While you wait, check out our sponsors: ", -1)),
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("ins", {
                          class: "adsbygoogle",
                          style: { "display": "block", "text-align": "center" },
                          "data-ad-layout": "in-article",
                          "data-ad-format": "fluid",
                          "data-ad-client": "ca-pub-6441782123701736",
                          "data-ad-slot": unref(adsenseConfig).slots.loading
                        }, null, 8, _hoisted_5)
                      ])
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
      ]);
    };
  }
};
const FullscreenLoading = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bac220d2"]]);
export {
  FullscreenLoading as F
};
