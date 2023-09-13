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
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative flex" }, _attrs))} data-v-3f079842><div class="absolute z-10 h-full w-full" data-v-3f079842><video autoplay loop muted class="pt-0 pb-0 z-10" data-v-3f079842><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-3f079842> Your browser does not support the video tag. </video></div><div class="relative z-30 flex m-96 w-full" data-v-3f079842><div class="relative z-30 p-9 mx-auto my-auto border-white border-2 text-center text-6xl bg-white bg-opacity-60 transition-all animate-pulse hover:bg-white hover:bg-opacity-80 hover:scale-105 hover:animate-none" data-v-3f079842>`);
  _push(ssrRenderComponent(_component_n_gradient_text, {
    gradient: {
      from: "rgb(85, 85, 85)",
      to: "rgb(127, 127, 127)",
      deg: "90"
    },
    size: 24,
    deg: 270
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/about" data-v-3f079842${_scopeId}>SG Art<br data-v-3f079842${_scopeId}>Enter<br data-v-3f079842${_scopeId}>Here</a>`);
      } else {
        return [
          createVNode("a", { href: "/about" }, [
            createTextVNode("SG Art"),
            createVNode("br"),
            createTextVNode("Enter"),
            createVNode("br"),
            createTextVNode("Here")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3f079842"]]);

export { index as default };
//# sourceMappingURL=index-8d5a837a.mjs.map
