import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { NGradientText } from "naive-ui";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "destr";
const _imports_0 = "" + __buildAssetsURL("InShot_20230815_154703481.9198f563.mp4");
const splash_vue_vue_type_style_index_0_scoped_2bfacf39_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    NGradientText
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_gradient_text = resolveComponent("n-gradient-text");
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative flex" }, _attrs))} data-v-2bfacf39><div class="relative z-30 w-full p-5 text-2xl grid-row-2 col-span-12" data-v-2bfacf39><div data-v-2bfacf39> Upcoming Exhibition: </div><div class="relative flex m-96 col-span-12 h-full w-full" data-v-2bfacf39><div class="relative z-30 p-9 m-96 border-white border-2 text-center text-6xl bg-white bg-opacity-60 row-span-3 hover:bg-white hover:bg-opacity-80 hover:scale-105" data-v-2bfacf39>`);
  _push(ssrRenderComponent(_component_n_gradient_text, {
    gradient: {
      from: "rgb(85, 85, 85)",
      to: "rgb(127, 127, 127)",
      deg: "90"
    },
    size: 42,
    deg: 270
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/about" data-v-2bfacf39${_scopeId}>SG <br data-v-2bfacf39${_scopeId}>Art</a>`);
      } else {
        return [
          createVNode("a", { href: "/about" }, [
            createTextVNode("SG "),
            createVNode("br"),
            createTextVNode("Art")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><video autoplay loop muted class="pt-0 pb-0 z-10 h-auto" data-v-2bfacf39><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-2bfacf39> Your browser does not support the video tag. </video></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/splash.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const splash = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2bfacf39"]]);
export {
  splash as default
};
//# sourceMappingURL=splash-2db262d8.js.map
