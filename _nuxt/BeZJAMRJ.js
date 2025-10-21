import { b as getApiURL } from "./CZ13b-GK.js";
import { g as getAdsenseConfig } from "./DDW3liez.js";
import { _ as _export_sfc, g as ref, k as computed, h as onMounted, B as watch, r as resolveComponent, c as createElementBlock, l as createCommentVNode, o as openBlock, a as createBaseVNode, C as createStaticVNode, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, p as unref, D as nextTick } from "./Brh-CJlk.js";
const setInterval = window.setInterval;
const _hoisted_1 = {
  key: 0,
  class: "interstitial-overlay"
};
const _hoisted_2 = { class: "interstitial-modal" };
const _hoisted_3 = { class: "modal-footer" };
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
    const closeButtonDisabled = ref(true);
    const countdown = ref(10);
    const canClose = ref(false);
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
        adSlot: "1418574824"
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
                const adElement = document.querySelector('[data-ad-slot="1418574824"]');
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
        console.log("🔍 Starting 10-second countdown...");
        canClose.value = false;
        countdown.value = 10;
        const timer = setInterval(() => {
          countdown.value--;
          if (countdown.value <= 0) {
            clearInterval(timer);
            canClose.value = true;
            closeButtonDisabled.value = false;
            console.log("✅ Close button now enabled");
          }
        }, 1e3);
      } else {
        canClose.value = false;
        closeButtonDisabled.value = true;
        countdown.value = 10;
      }
    });
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      return __props.show ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createStaticVNode('<div class="modal-header" data-v-c8a591aa><h2 data-v-c8a591aa>Watch Ad to Continue</h2><p data-v-c8a591aa>You&#39;ve reached your daily usage limit. Watch a short ad to get one additional use.</p></div><div class="ad-container" data-v-c8a591aa><div class="interstitial-ad-content" data-v-c8a591aa><div class="adsense-container" data-v-c8a591aa><ins class="adsbygoogle" style="display:block;text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-6441782123701736" data-ad-slot="1418574824" data-v-c8a591aa></ins></div></div></div>', 2)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_v_btn, {
              color: "primary",
              onClick: handleAdComplete,
              loading: unref(loading),
              disabled: unref(loading) || !unref(canClose)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(loading) ? "Processing..." : unref(canClose) ? "Continue with Tool" : `Continue in ${unref(countdown)}s`), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"]),
            createVNode(_component_v_btn, {
              variant: "outlined",
              onClick: closeModal,
              disabled: unref(loading)
            }, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode(" Cancel ")
              ])),
              _: 1,
              __: [0]
            }, 8, ["disabled"])
          ]),
          createBaseVNode("div", {
            class: "modal-close",
            onClick: closeModal
          }, [
            createVNode(_component_v_icon, null, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("mdi-close")
              ])),
              _: 1,
              __: [1]
            })
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const InterstitialAd = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8a591aa"]]);
export {
  InterstitialAd as I,
  setInterval as s
};
