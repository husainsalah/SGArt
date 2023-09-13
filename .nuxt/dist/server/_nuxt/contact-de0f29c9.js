import { _ as __nuxt_component_0 } from "./TheHeader-2c32b7d1.js";
import { defineComponent, resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { NGradientText } from "naive-ui";
import { ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    NGradientText
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_n_gradient_text = resolveComponent("n-gradient-text");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<section class="max-w-screen mx-auto mt-4"><div class="grid pl-8 pr-8 max-w-xlg mx-full bg-white space-x-8 grid grid-flow-col"><div class="col-span-3 lg:col-span-2"><h1 class="text-6xl tracking-tighter leading-11 h-full">`);
  _push(ssrRenderComponent(_component_n_gradient_text, {
    gradient: {
      from: "rgb(0, 0, 0)",
      to: "rgb(170, 170, 170)"
    },
    size: 58
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact `);
      } else {
        return [
          createTextVNode(" Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1></div><div class="col-span-9 pl-8 pr-8 max-w-xlg mx-full text-2xl font-thin text-gray-dark"><form method="POST" action="https://herotofu.com/start"><label class="block mb-6"><span class="text-gray-700">Your name</span><input type="text" name="name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"></label><label class="block mb-6"><span class="text-2xl text-gray-700">Email address</span><input name="email" type="email" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="joe.bloggs@example.com" required></label><label class="block mb-6"><span class="text-gray-700">Message</span><textarea name="message" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" placeholder="Tell us what you&#39;re thinking about..."></textarea></label><div class="mb-6"><button type="submit" class="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"> Contact Us </button></div></form></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-de0f29c9.js.map
