import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, o as openBlock, b as createVNode, w as withCtx, a as createBaseVNode } from "./gThNRfkz.js";
const _sfc_main = {};
const _hoisted_1 = { class: "fullscreen-loading" };
function _sfc_render(_ctx, _cache) {
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
              class: "text-center"
            }, {
              default: withCtx(() => [
                createVNode(_component_v_progress_circular, {
                  size: 70,
                  width: 7,
                  color: "primary",
                  indeterminate: ""
                }),
                _cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-h5 mt-4" }, "Converting your files to PDF...", -1)),
                _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-body-1 mt-2" }, "Please wait a moment", -1))
              ]),
              _: 1,
              __: [0, 1]
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const FullscreenLoading = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b37e149e"]]);
export {
  FullscreenLoading as F
};
