import { _ as __nuxt_component_0 } from './TheHeader-2c32b7d1.mjs';
import { _ as __nuxt_component_2 } from './TheFooter-e5cedbad.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createTextVNode } from 'vue';
import { NGradientText, NGrid, NGi, NDivider, NCarousel, NCarouselItem } from 'naive-ui';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    NGradientText,
    NGrid,
    NGi,
    NDivider,
    NCarousel,
    NCarouselItem
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_n_gradient_text = resolveComponent("n-gradient-text");
  const _component_TheFooter = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<section data-v-1ba6a813><div class="flex p-8 max-w-xlg mx-full bg-white space-x-8 tracking-tighter grid grid-flow-col" data-v-1ba6a813><div class="col-span-12 lg:col-span-2" data-v-1ba6a813>`);
  _push(ssrRenderComponent(_component_n_gradient_text, {
    gradient: {
      from: "rgb(0, 0, 0)",
      to: "rgb(170, 170, 170)"
    },
    size: 58
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` After the Dance `);
      } else {
        return [
          createTextVNode(" After the Dance ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex col-span-8 max-w-xlg mx-full text-2xl tracking-wider font-thin text-gray-dark p-8" data-v-1ba6a813><ul data-v-1ba6a813><li data-v-1ba6a813><a href="" data-v-1ba6a813>Press Release</a></li><li data-v-1ba6a813><a href="" data-v-1ba6a813>Scott Grooves Exhibition Statement After the Dance/ Curatorial Statement Elysia Borowy</a></li></ul></div></div></section><section data-v-1ba6a813><div class="flex p-8 max-w-xlg mx-full bg-white space-x-8 grid grid-flow-col" data-v-1ba6a813><div class="col-span-12 lg:col-span-2" data-v-1ba6a813>`);
  _push(ssrRenderComponent(_component_n_gradient_text, {
    gradient: {
      from: "rgb(0, 0, 0)",
      to: "rgb(170, 170, 170)"
    },
    size: 58
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Interview `);
      } else {
        return [
          createTextVNode(" Interview ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex col-span-8 text-2xl font-thin text-gray-dark p-8" data-v-1ba6a813><a class="inline-flex" href="/" data-v-1ba6a813>Alia Benabdellah, Docteure en G\xE9ographie Humaine, in conversation with musician and artist Scott Grooves on August 8, 2023 </a></div></div></section>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/art.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const art = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1ba6a813"]]);

export { art as default };
//# sourceMappingURL=art-a2348ab5.mjs.map
