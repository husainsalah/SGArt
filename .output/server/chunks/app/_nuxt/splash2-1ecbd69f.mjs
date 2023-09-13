import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { NGradientText } from 'naive-ui';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './free-jazz-gallery-tour-v1-08f27968.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    NGradientText
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_gradient_text = resolveComponent("n-gradient-text");
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative flex" }, _attrs))} data-v-2679187b><div class="absolute z-10 h-full w-full" data-v-2679187b><video autoplay loop muted class="pt-0 pb-0 z-10" data-v-2679187b><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-2679187b> Your browser does not support the video tag. </video></div><div class="relative z-30 flex m-96 w-full" data-v-2679187b><div class="relative z-30 pl-8 pr-8 mx-auto my-auto border-white border-2 text-center text-6xl bg-white bg-opacity-60 hover:bg-white hover:bg-opacity-80 hover:scale-105" data-v-2679187b>`);
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
        _push2(`<a href="/about" data-v-2679187b${_scopeId}>SG <br data-v-2679187b${_scopeId}>Art</a>`);
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
  _push(`</div></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/splash2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const splash2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2679187b"]]);

export { splash2 as default };
//# sourceMappingURL=splash2-1ecbd69f.mjs.map
