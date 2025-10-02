import { b as getApiURL } from "./CZ13b-GK.js";
import { _ as _export_sfc, g as ref, h as onMounted, r as resolveComponent, c as createElementBlock, m as createCommentVNode, o as openBlock, a as createBaseVNode, v as createStaticVNode, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString, j as unref } from "./srEgzogS.js";
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
      console.log("🔍 Auto-closing start ...");
      setTimeout(() => {
        if (props.show) {
          handleAdComplete();
          console.log("🔍 run handleAdComplete()");
        }
        console.log("🔍 Auto-closing in 5 seconds...");
      }, 5e3);
    });
    return (_ctx, _cache) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      return __props.show ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createStaticVNode('<div class="modal-header" data-v-12e3dff4><h2 data-v-12e3dff4>Watch Ad to Continue</h2><p data-v-12e3dff4>You&#39;ve reached your daily usage limit. Watch a short ad to get one additional use.</p></div><div class="ad-container" data-v-12e3dff4><div class="interstitial-ad-content" data-v-12e3dff4><div class="ad-banner" data-v-12e3dff4><h3 data-v-12e3dff4>🎯 Interstitial Ad</h3><p data-v-12e3dff4>You&#39;ve reached your daily usage limit. Watch this ad to continue using our tools.</p><div class="ad-info" data-v-12e3dff4><span data-v-12e3dff4>Ad Type: Interstitial</span><span data-v-12e3dff4>Duration: 5 seconds</span></div></div></div></div>', 2)),
          createBaseVNode("div", _hoisted_3, [
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
const InterstitialAd = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12e3dff4"]]);
export {
  InterstitialAd as I
};
