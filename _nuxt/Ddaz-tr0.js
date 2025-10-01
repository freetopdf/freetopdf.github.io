import { g as getAdsenseConfig } from "./BCdmHej_.js";
import { _ as _export_sfc, g as ref, h as onMounted, r as resolveComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, m as createCommentVNode, j as unref, b as createVNode, w as withCtx, d as createTextVNode, t as toDisplayString } from "./BZR40qXE.js";
const _hoisted_1 = { class: "adsense-container" };
const _hoisted_2 = ["data-ad-client", "data-ad-slot", "data-ad-format", "data-full-width-responsive"];
const _hoisted_3 = {
  key: 0,
  class: "ad-placeholder"
};
const _hoisted_4 = { class: "text-caption text-grey-lighten-1" };
const _sfc_main = {
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
        adSlot: props.adSlot
      });
      if (isTestMode.value) {
        console.log("✅ Showing test ad for slot:", props.adSlot);
        showTestAd();
        return;
      }
      console.log("🌐 Loading real AdSense ad for slot:", props.adSlot);
      if (typeof window !== "undefined" && window.adsbygoogle) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setTimeout(() => {
            const adElement = document.querySelector(".adsbygoogle");
            if (adElement && !adElement.innerHTML.trim()) {
              console.log("⚠️ AdSense ad failed to load, showing placeholder");
              showPlaceholder.value = true;
            }
          }, 3e3);
        } catch (error) {
          console.error("AdSense error:", error);
          showPlaceholder.value = true;
        }
      } else {
        console.log("⚠️ AdSense script not loaded, showing placeholder");
        showPlaceholder.value = true;
      }
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("ins", {
          class: "adsbygoogle",
          style: { display: "block" },
          "data-ad-client": __props.adClient,
          "data-ad-slot": __props.adSlot,
          "data-ad-format": __props.adFormat,
          "data-full-width-responsive": __props.fullWidthResponsive
        }, null, 8, _hoisted_2),
        unref(showPlaceholder) ? (openBlock(), createElementBlock("div", _hoisted_3, [
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
          createBaseVNode("p", _hoisted_4, "Slot: " + toDisplayString(__props.adSlot), 1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa2b698b"]]);
export {
  __nuxt_component_0 as _
};
