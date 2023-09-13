import { _ as __nuxt_component_0 } from './TheHeader-2c32b7d1.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-744fccd2.mjs';
import { _ as __nuxt_component_2 } from './TheFooter-e5cedbad.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { NGradientText, NDivider } from 'naive-ui';
import '../server.mjs';
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
  __name: "exhibitions",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref(
      [
        {
          id: "1",
          title: "After The Dance",
          date: "7/24/2023",
          excerpt: `Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious project to date.  Titled after Marvin Gaye's soulful record "After the Dance,\u201D  Grooves delves into the realm beyond the dance floor, prompting viewers to ponder what lies ahead. The exhibition will open on Friday, September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are welcome to attend.`,
          uri: "/project/red-door-digital",
          venue: "Red Door Digital",
          startDate: "May 19, 2023",
          endDate: "June 11 2023",
          projectImage: "assets/images/zulu-robot.jpg"
        },
        {
          id: "2",
          title: "Filter Detroit",
          date: "7/26/2023",
          excerpt: `Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious project to date.  Titled after Marvin Gaye's soulful record "After the Dance,\u201D  Grooves delves into the realm beyond the dance floor, prompting viewers to ponder what lies ahead. The exhibition will open on Friday, September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are welcome to attend`,
          uri: "/projects/filter-detroit",
          venue: "Filter Detroit",
          startDate: "May 19 2023",
          endDate: "June 11 2023",
          projectImage: "assets/images/sketches/Bad Hair Day.jpg"
        }
      ]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_TheFooter = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`<div class="col-span-12 lg:col-span-2"><h1 class="p-8 text-6xl tracking-tighter leading-11 h-full">`);
      _push(ssrRenderComponent(unref(NGradientText), {
        gradient: {
          from: "rgb(0, 0, 0)",
          to: "rgb(170, 170, 170)"
        },
        size: 58
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Exhibitions `);
          } else {
            return [
              createTextVNode(" Exhibitions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div><div class="p-8 flex columns-2"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<div><div class="p-2 w-50 rounded-lg text-2xl font-thin transition-all">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.uri
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="font-bold text-4xl hover:-translate-y-1"${_scopeId}>${ssrInterpolate(item.title)}</h2>`);
            } else {
              return [
                createVNode("h2", { class: "font-bold text-4xl hover:-translate-y-1" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(NDivider), null, null, _parent));
        _push(`<p>${ssrInterpolate(item.venue)} : ${ssrInterpolate(item.startDate)} - ${ssrInterpolate(item.endDate)}</p>`);
        _push(ssrRenderComponent(unref(NDivider), null, null, _parent));
        _push(`<p>${ssrInterpolate(item.excerpt)}</p><p></p><p></p><img${ssrRenderAttr("src", item.projectImage)} class="p-4"></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/exhibitions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=exhibitions-1504e424.mjs.map
