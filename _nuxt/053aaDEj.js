import { b as getApiURL } from "./CZ13b-GK.js";
import { g as getAdsenseConfig } from "./D08dQoNC.js";
import { _ as _export_sfc, g as ref, l as computed, h as onMounted, v as watch, r as resolveComponent, c as createElementBlock, m as createCommentVNode, o as openBlock, a as createBaseVNode, j as unref, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, x as nextTick } from "./BHyku_WC.js";
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
  InterstitialAd as I
};
