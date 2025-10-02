import { g as getAdsenseConfig } from "./COa1z45i.js";
import { _ as _export_sfc, g as ref, h as onMounted, r as resolveComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, l as createCommentVNode, m as unref, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, v as nextTick, k as computed, x as watch } from "./Cwn9sFny.js";
import { b as getApiURL } from "./CZ13b-GK.js";
const _hoisted_1$1 = { class: "adsense-container" };
const _hoisted_2$1 = ["data-ad-client", "data-ad-slot", "data-ad-format", "data-full-width-responsive", "data-ad-layout", "data-ad-layout-key"];
const _hoisted_3$1 = {
  key: 0,
  class: "ad-placeholder"
};
const _hoisted_4$1 = { class: "text-caption text-grey-lighten-1" };
const _sfc_main$1 = {
  __name: "GoogleAdsense",
  props: {
    adClient: {
      type: String,
      default: () => getAdsenseConfig().clientId
    },
    adSlot: {
      type: String,
      required: true
    },
    adFormat: {
      type: String,
      default: "auto"
    },
    fullWidthResponsive: {
      type: String,
      default: "true"
    },
    adLayout: {
      type: String,
      default: "in-article"
    },
    adLayoutKey: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const showPlaceholder = ref(false);
    const adsenseConfig = getAdsenseConfig();
    const isTestMode = ref(
      adsenseConfig.testMode || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    );
    onMounted(() => {
      console.log("🔍 AdSense Debug:", {
        testMode: adsenseConfig.testMode,
        hostname: window.location.hostname,
        isTestMode: isTestMode.value,
        adSlot: props.adSlot,
        adFormat: props.adFormat
      });
      if (isTestMode.value) {
        console.log("✅ Showing test ad for slot:", props.adSlot);
        showTestAd();
        return;
      }
      console.log("🌐 Loading real AdSense ad for slot:", props.adSlot);
      const loadAdSense = () => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          try {
            nextTick(() => {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              setTimeout(() => {
                const adElement = document.querySelector(`[data-ad-slot="${props.adSlot}"]`);
                if (adElement && (!adElement.innerHTML.trim() || adElement.innerHTML.includes("Advertisement Loading"))) {
                  console.log("⚠️ AdSense ad failed to load, showing placeholder");
                  showPlaceholder.value = true;
                }
              }, 5e3);
            });
          } catch (error) {
            console.error("AdSense error:", error);
            showPlaceholder.value = true;
          }
        } else {
          setTimeout(loadAdSense, 1e3);
        }
      };
      loadAdSense();
    });
    const showTestAd = () => {
      const testAdHTML = `
    <div style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      border: 2px solid rgba(255,255,255,0.1);
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    ">
      <div style="font-size: 28px; font-weight: bold; margin-bottom: 12px;">
        🎯 AdSense Test Ad
      </div>
      <div style="font-size: 16px; margin-bottom: 15px; opacity: 0.9;">
        Slot ID: <strong>${props.adSlot}</strong>
      </div>
      <div style="
        background: rgba(255,255,255,0.15);
        padding: 12px;
        border-radius: 8px;
        font-size: 13px;
        line-height: 1.4;
        backdrop-filter: blur(10px);
      ">
        <div style="margin-bottom: 8px;">📍 Localhost Test Mode</div>
        <div style="font-size: 11px; opacity: 0.8;">
          Real ads will appear here when deployed to production domain
        </div>
      </div>
    </div>
  `;
      const adContainer = document.querySelector(".adsense-container");
      if (adContainer) {
        const insElement = adContainer.querySelector("ins");
        if (insElement) {
          insElement.innerHTML = testAdHTML;
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("ins", {
          class: "adsbygoogle",
          style: { display: "block", width: "100%", minHeight: "90px" },
          "data-ad-client": __props.adClient,
          "data-ad-slot": __props.adSlot,
          "data-ad-format": __props.adFormat,
          "data-full-width-responsive": __props.fullWidthResponsive,
          "data-ad-layout": __props.adLayout,
          "data-ad-layout-key": __props.adLayoutKey
        }, null, 8, _hoisted_2$1),
        unref(showPlaceholder) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createVNode(_component_v_icon, {
            size: "32",
            color: "grey-lighten-1"
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("mdi-advertisement")
            ])),
            _: 1,
            __: [0]
          }),
          _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-body-2 text-grey-lighten-1 mt-2" }, "Advertisement Loading...", -1)),
          createBaseVNode("p", _hoisted_4$1, "Slot: " + toDisplayString(__props.adSlot), 1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e35808fc"]]);
const _hoisted_1 = {
  key: 0,
  class: "interstitial-overlay"
};
const _hoisted_2 = { class: "interstitial-modal" };
const _hoisted_3 = { class: "ad-container" };
const _hoisted_4 = { class: "interstitial-ad-content" };
const _hoisted_5 = {
  key: 0,
  class: "ad-banner"
};
const _hoisted_6 = { class: "modal-footer" };
const _sfc_main = {
  __name: "InterstitialAd",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["ad-completed", "close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loading = ref(false);
    const showFallbackAd = ref(false);
    const adsenseConfig = getAdsenseConfig();
    const isTestMode = computed(
      () => adsenseConfig.testMode || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    );
    const handleAdComplete = async () => {
      loading.value = true;
      try {
        const apiUrl = getApiURL();
        const response = await fetch(`${apiUrl}/mark-ad-watched`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response.ok) {
          const data = await response.json();
          console.log("✅ Ad watched successfully:", data);
          emit("ad-completed", data);
        } else {
          throw new Error("Failed to mark ad as watched");
        }
      } catch (error) {
        console.error("❌ Error marking ad as watched:", error);
        emit("ad-completed", { success: true, fallback: true });
      } finally {
        loading.value = false;
      }
    };
    const closeModal = () => {
      if (!loading.value) {
        emit("close");
      }
    };
    onMounted(() => {
      if (props.show) {
        loadAdSenseAd();
      }
    });
    watch(() => props.show, (newValue) => {
      if (newValue) {
        loadAdSenseAd();
      }
    });
    const loadAdSenseAd = () => {
      console.log("🔍 InterstitialAd Debug:", {
        testMode: adsenseConfig.testMode,
        hostname: window.location.hostname,
        isTestMode: isTestMode.value,
        adSlot: "1116459596"
      });
      if (isTestMode.value) {
        console.log("✅ Showing test interstitial ad");
        showFallbackAd.value = true;
        return;
      }
      console.log("🌐 Loading real AdSense interstitial ad");
      const loadAdSense = () => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          try {
            nextTick(() => {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              setTimeout(() => {
                const adElement = document.querySelector('[data-ad-slot="1116459596"]');
                if (adElement && (!adElement.innerHTML.trim() || adElement.innerHTML.includes("Advertisement Loading"))) {
                  console.log("⚠️ AdSense interstitial ad failed to load, showing fallback");
                  showFallbackAd.value = true;
                }
              }, 3e3);
            });
          } catch (error) {
            console.error("AdSense interstitial error:", error);
            showFallbackAd.value = true;
          }
        } else {
          setTimeout(loadAdSense, 1e3);
        }
      };
      loadAdSense();
    };
    watch(() => props.show, (newValue) => {
      if (newValue) {
        console.log("🔍 Auto-closing start ...");
        setTimeout(() => {
          if (props.show) {
            handleAdComplete();
            console.log("🔍 run handleAdComplete()");
          }
          console.log("🔍 Auto-closing in 5 seconds...");
        }, 5e3);
      }
    });
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      return __props.show ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "modal-header" }, [
            createBaseVNode("h2", null, "Watch Ad to Continue"),
            createBaseVNode("p", null, "You've reached your daily usage limit. Watch a short ad to get one additional use.")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "adsense-container" }, [
                createBaseVNode("ins", {
                  class: "adsbygoogle",
                  style: { "display": "block" },
                  "data-ad-client": "ca-pub-6441782123701736",
                  "data-ad-slot": "1116459596",
                  "data-ad-format": "auto",
                  "data-full-width-responsive": "true"
                })
              ], -1)),
              unref(showFallbackAd) ? (openBlock(), createElementBlock("div", _hoisted_5, _cache[0] || (_cache[0] = [
                createBaseVNode("h3", null, "🎯 Interstitial Ad", -1),
                createBaseVNode("p", null, "You've reached your daily usage limit. Watch this ad to continue using our tools.", -1),
                createBaseVNode("div", { class: "ad-info" }, [
                  createBaseVNode("span", null, "Ad Type: Interstitial"),
                  createBaseVNode("span", null, "Duration: 5 seconds")
                ], -1)
              ]))) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_v_btn, {
              color: "primary",
              onClick: handleAdComplete,
              loading: unref(loading),
              disabled: unref(loading)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(loading) ? "Processing..." : "Continue with Tool"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"]),
            createVNode(_component_v_btn, {
              variant: "outlined",
              onClick: closeModal,
              disabled: unref(loading)
            }, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode(" Cancel ")
              ])),
              _: 1,
              __: [2]
            }, 8, ["disabled"])
          ]),
          createBaseVNode("div", {
            class: "modal-close",
            onClick: closeModal
          }, [
            createVNode(_component_v_icon, null, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("mdi-close")
              ])),
              _: 1,
              __: [3]
            })
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const InterstitialAd = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-519b236b"]]);
export {
  InterstitialAd as I,
  __nuxt_component_0 as _
};
