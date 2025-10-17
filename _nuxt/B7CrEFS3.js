import { b as getApiURL, g as getFullApiUrl, a as apiEndpoints } from "./CZ13b-GK.js";
import { g as getAdsenseConfig } from "./BH9-Urb5.js";
import { _ as _export_sfc, u as useRuntimeConfig, g as ref, h as onMounted, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, r as resolveComponent, o as openBlock, d as createTextVNode, t as toDisplayString, p as unref } from "./78J4ikg6.js";
const _hoisted_1 = { class: "env-test" };
const _sfc_main = {
  __name: "env-test",
  setup(__props) {
    const config = useRuntimeConfig();
    const nodeEnv = config.public.nodeEnv || "production";
    const apiUrl = config.public.apiUrl || "https://api.freetopdf.com";
    const adsenseClientId = config.public.adsenseClientId || "ca-pub-6441782123701736";
    const adsenseTestMode = config.public.adsenseTestMode || "false";
    const runtimeConfig = config.public || "Not available";
    const baseUrl = ref("Loading...");
    const apiConfigUrl = ref("Loading...");
    const pdfToWordUrl = ref("Loading...");
    onMounted(async () => {
      try {
        baseUrl.value = await getApiURL();
        apiConfigUrl.value = await getApiURL();
        pdfToWordUrl.value = await getFullApiUrl(apiEndpoints.pdfToWord);
      } catch (error) {
        console.error("Error loading API URLs:", error);
        baseUrl.value = "Error loading";
        apiConfigUrl.value = "Error loading";
        pdfToWordUrl.value = "Error loading";
      }
    });
    const adsenseConfig = getAdsenseConfig();
    onMounted(() => {
      console.log("=== Vue.js RuntimeConfig Debug ===");
      console.log("RuntimeConfig loaded:", config.public);
      console.log("NODE_ENV:", nodeEnv);
      console.log("NUXT_PUBLIC_API_URL:", apiUrl);
      console.log("NUXT_PUBLIC_ADSENSE_CLIENT_ID:", adsenseClientId);
      console.log("NUXT_PUBLIC_ADSENSE_TEST_MODE:", adsenseTestMode);
      console.log("Runtime Config:", runtimeConfig);
      console.log("API Base URL:", baseUrl);
      console.log("PDF to Word URL:", pdfToWordUrl);
      console.log("AdSense Config:", adsenseConfig);
      console.log("================================");
    });
    return (_ctx, _cache) => {
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card = resolveComponent("v-card");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[13] || (_cache[13] = createBaseVNode("h1", null, "Environment Variables Test", -1)),
        createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
          default: withCtx(() => [
            _cache[4] || (_cache[4] = createBaseVNode("h2", null, "Current Environment Variables", -1)),
            createVNode(_component_v_list, null, {
              default: withCtx(() => [
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[0] || (_cache[0] = [
                        createTextVNode("NODE_ENV:")
                      ])),
                      _: 1,
                      __: [0]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(nodeEnv)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[1] || (_cache[1] = [
                        createTextVNode("NUXT_PUBLIC_API_URL:")
                      ])),
                      _: 1,
                      __: [1]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(apiUrl)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("NUXT_PUBLIC_ADSENSE_CLIENT_ID:")
                      ])),
                      _: 1,
                      __: [2]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(adsenseClientId)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[3] || (_cache[3] = [
                        createTextVNode("NUXT_PUBLIC_ADSENSE_TEST_MODE:")
                      ])),
                      _: 1,
                      __: [3]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(adsenseTestMode)), 1)
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
          _: 1,
          __: [4]
        }),
        createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
          default: withCtx(() => [
            _cache[5] || (_cache[5] = createBaseVNode("h2", null, "Runtime Config", -1)),
            createBaseVNode("pre", null, toDisplayString(unref(runtimeConfig)), 1)
          ]),
          _: 1,
          __: [5]
        }),
        createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
          default: withCtx(() => [
            _cache[9] || (_cache[9] = createBaseVNode("h2", null, "API Configuration Test", -1)),
            createVNode(_component_v_list, null, {
              default: withCtx(() => [
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[6] || (_cache[6] = [
                        createTextVNode("Base URL:")
                      ])),
                      _: 1,
                      __: [6]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(baseUrl)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[7] || (_cache[7] = [
                        createTextVNode("API URL:")
                      ])),
                      _: 1,
                      __: [7]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(apiConfigUrl)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("PDF to Word URL:")
                      ])),
                      _: 1,
                      __: [8]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(pdfToWordUrl)), 1)
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
          _: 1,
          __: [9]
        }),
        createVNode(_component_v_card, { class: "ma-4 pa-4" }, {
          default: withCtx(() => [
            _cache[12] || (_cache[12] = createBaseVNode("h2", null, "AdSense Configuration Test", -1)),
            createVNode(_component_v_list, null, {
              default: withCtx(() => [
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[10] || (_cache[10] = [
                        createTextVNode("Client ID:")
                      ])),
                      _: 1,
                      __: [10]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(adsenseConfig).clientId), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => _cache[11] || (_cache[11] = [
                        createTextVNode("Test Mode:")
                      ])),
                      _: 1,
                      __: [11]
                    }),
                    createVNode(_component_v_list_item_subtitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(adsenseConfig).testMode), 1)
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
          _: 1,
          __: [12]
        })
      ]);
    };
  }
};
const envTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d97d898a"]]);
export {
  envTest as default
};
