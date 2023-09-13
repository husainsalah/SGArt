import { useSSRContext, defineComponent, resolveComponent, mergeProps } from 'vue';
import { NDivider } from 'naive-ui';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    NDivider
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_divider = resolveComponent("n-divider");
  _push(`<footer${ssrRenderAttrs(mergeProps({ className: "relative w-full p-6 h-85px mx-auto bg-white text-center font-thin text-silver" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_n_divider, null, null, _parent));
  _push(`<p className="bg-white text-center ">Copyright \xA9 Scott Grooves, 2023</p></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=TheFooter-e5cedbad.mjs.map
