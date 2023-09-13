import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { NButton, darkTheme, NGradientText, NModal, NCard } from 'naive-ui';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  components: {
    NButton,
    darkTheme,
    NGradientText,
    NModal,
    NCard
  },
  setup() {
    return {
      bodyStyle: {
        width: "100%"
      },
      segmented: {
        content: "soft",
        footer: "soft"
      },
      showModal: ref(false)
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_modal = resolveComponent("n-modal");
  const _component_n_card = resolveComponent("n-card");
  const _component_n_gradient_text = resolveComponent("n-gradient-text");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex z-50 float-right pr-8 mx-auto grid grid-flow-col" }, _attrs))} data-v-ef984074><div class="fixed" data-v-ef984074>`);
  if (!_ctx.showModal) {
    _push(`<div data-v-ef984074><button class="hover:scale-110 hover:text-white hover:bg-opacity-80" aria-label="Open Menu" data-v-ef984074><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-12 h-12 align-top" data-v-ef984074><path d="M4 6h16M4 12h16M4 18h16" stroke="black" data-v-ef984074></path></svg></button></div>`);
  } else {
    _push(`<div data-v-ef984074><div class="flex z-50 bg-white" data-v-ef984074><button class="justify-right z-50 hover:scale-110 hover:text-white hover:bg-opacity-80" aria-label="Close Menu" data-v-ef984074><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-12 h-12 align-top hover:text-white" data-v-ef984074><line x1="4" y1="20" x2="20" y2="4" stroke="gray" stroke-width="2" data-v-ef984074></line><line x1="4" y1="4" x2="20" y2="20" stroke="gray" stroke-width="2" data-v-ef984074></line></svg></button></div></div>`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_n_modal, {
    show: _ctx.showModal,
    "onUpdate:show": ($event) => _ctx.showModal = $event,
    style: { "background-color": "rgba(255, 255, 255, 1)", "width": "92%", "z-index": "20" },
    class: "pt-10"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_n_card, {
          style: { "width": "92%", "height": "100%", "position": "absolute", "top": "0px", "bottom": "0px", "right": "8%", "z-index": "20" },
          preset: "modal",
          bordered: true,
          "mask-closable": false,
          size: "small",
          role: "dialog",
          "aria-modal": "true"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="menu-item" data-v-ef984074${_scopeId2}><a href="/" data-v-ef984074${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_n_gradient_text, {
                class: "hover:text-white",
                gradient: {
                  from: "rgb(0, 0, 0)",
                  to: "rgb(127, 127, 127)",
                  deg: "270"
                },
                size: 48,
                deg: 0
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Home `);
                  } else {
                    return [
                      createTextVNode(" Home ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</a></span><span class="menu-item" data-v-ef984074${_scopeId2}><a href="/about" data-v-ef984074${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_n_gradient_text, {
                class: "hover:text-white",
                gradient: {
                  from: "rgb(0, 0, 0)",
                  to: "rgb(127, 127, 127)",
                  deg: "270"
                },
                size: 48,
                deg: 90
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` About `);
                  } else {
                    return [
                      createTextVNode(" About ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</a></span><span class="menu-item" data-v-ef984074${_scopeId2}><a href="/exhibitions" data-v-ef984074${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_n_gradient_text, {
                class: "hover:text-white",
                gradient: {
                  from: "rgb(0, 0, 0)",
                  to: "rgb(127, 127, 127)",
                  deg: "270"
                },
                size: 48,
                deg: 270
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Exhibitions `);
                  } else {
                    return [
                      createTextVNode(" Exhibitions ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</a></span><span class="menu-item" data-v-ef984074${_scopeId2}><a href="/art" data-v-ef984074${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_n_gradient_text, {
                class: "hover:text-white",
                gradient: {
                  from: "rgb(0, 0, 0)",
                  to: "rgb(127, 127, 127)",
                  deg: "270"
                },
                size: 48,
                deg: 180
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Press &amp; Media `);
                  } else {
                    return [
                      createTextVNode(" Press & Media ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</a></span><span class="menu-item" data-v-ef984074${_scopeId2}><a href="/contact" data-v-ef984074${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_n_gradient_text, {
                class: "hover:text-white",
                gradient: {
                  from: "rgb(0, 0, 0)",
                  to: "rgb(127, 127, 127)",
                  deg: "270"
                },
                size: 48,
                deg: 90
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Contact `);
                  } else {
                    return [
                      createTextVNode(" Contact ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</a></span>`);
            } else {
              return [
                createVNode("span", { class: "menu-item" }, [
                  createVNode("a", { href: "/" }, [
                    createVNode(_component_n_gradient_text, {
                      class: "hover:text-white",
                      gradient: {
                        from: "rgb(0, 0, 0)",
                        to: "rgb(127, 127, 127)",
                        deg: "270"
                      },
                      size: 48,
                      deg: 0
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Home ")
                      ]),
                      _: 1
                    }, 8, ["gradient"])
                  ])
                ]),
                createVNode("span", { class: "menu-item" }, [
                  createVNode("a", { href: "/about" }, [
                    createVNode(_component_n_gradient_text, {
                      class: "hover:text-white",
                      gradient: {
                        from: "rgb(0, 0, 0)",
                        to: "rgb(127, 127, 127)",
                        deg: "270"
                      },
                      size: 48,
                      deg: 90
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" About ")
                      ]),
                      _: 1
                    }, 8, ["gradient"])
                  ])
                ]),
                createVNode("span", { class: "menu-item" }, [
                  createVNode("a", { href: "/exhibitions" }, [
                    createVNode(_component_n_gradient_text, {
                      class: "hover:text-white",
                      gradient: {
                        from: "rgb(0, 0, 0)",
                        to: "rgb(127, 127, 127)",
                        deg: "270"
                      },
                      size: 48,
                      deg: 270
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Exhibitions ")
                      ]),
                      _: 1
                    }, 8, ["gradient"])
                  ])
                ]),
                createVNode("span", { class: "menu-item" }, [
                  createVNode("a", { href: "/art" }, [
                    createVNode(_component_n_gradient_text, {
                      class: "hover:text-white",
                      gradient: {
                        from: "rgb(0, 0, 0)",
                        to: "rgb(127, 127, 127)",
                        deg: "270"
                      },
                      size: 48,
                      deg: 180
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Press & Media ")
                      ]),
                      _: 1
                    }, 8, ["gradient"])
                  ])
                ]),
                createVNode("span", { class: "menu-item" }, [
                  createVNode("a", { href: "/contact" }, [
                    createVNode(_component_n_gradient_text, {
                      class: "hover:text-white",
                      gradient: {
                        from: "rgb(0, 0, 0)",
                        to: "rgb(127, 127, 127)",
                        deg: "270"
                      },
                      size: 48,
                      deg: 90
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Contact ")
                      ]),
                      _: 1
                    }, 8, ["gradient"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_n_card, {
            style: { "width": "92%", "height": "100%", "position": "absolute", "top": "0px", "bottom": "0px", "right": "8%", "z-index": "20" },
            preset: "modal",
            bordered: true,
            "mask-closable": false,
            size: "small",
            role: "dialog",
            "aria-modal": "true"
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "menu-item" }, [
                createVNode("a", { href: "/" }, [
                  createVNode(_component_n_gradient_text, {
                    class: "hover:text-white",
                    gradient: {
                      from: "rgb(0, 0, 0)",
                      to: "rgb(127, 127, 127)",
                      deg: "270"
                    },
                    size: 48,
                    deg: 0
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Home ")
                    ]),
                    _: 1
                  }, 8, ["gradient"])
                ])
              ]),
              createVNode("span", { class: "menu-item" }, [
                createVNode("a", { href: "/about" }, [
                  createVNode(_component_n_gradient_text, {
                    class: "hover:text-white",
                    gradient: {
                      from: "rgb(0, 0, 0)",
                      to: "rgb(127, 127, 127)",
                      deg: "270"
                    },
                    size: 48,
                    deg: 90
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" About ")
                    ]),
                    _: 1
                  }, 8, ["gradient"])
                ])
              ]),
              createVNode("span", { class: "menu-item" }, [
                createVNode("a", { href: "/exhibitions" }, [
                  createVNode(_component_n_gradient_text, {
                    class: "hover:text-white",
                    gradient: {
                      from: "rgb(0, 0, 0)",
                      to: "rgb(127, 127, 127)",
                      deg: "270"
                    },
                    size: 48,
                    deg: 270
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Exhibitions ")
                    ]),
                    _: 1
                  }, 8, ["gradient"])
                ])
              ]),
              createVNode("span", { class: "menu-item" }, [
                createVNode("a", { href: "/art" }, [
                  createVNode(_component_n_gradient_text, {
                    class: "hover:text-white",
                    gradient: {
                      from: "rgb(0, 0, 0)",
                      to: "rgb(127, 127, 127)",
                      deg: "270"
                    },
                    size: 48,
                    deg: 180
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Press & Media ")
                    ]),
                    _: 1
                  }, 8, ["gradient"])
                ])
              ]),
              createVNode("span", { class: "menu-item" }, [
                createVNode("a", { href: "/contact" }, [
                  createVNode(_component_n_gradient_text, {
                    class: "hover:text-white",
                    gradient: {
                      from: "rgb(0, 0, 0)",
                      to: "rgb(127, 127, 127)",
                      deg: "270"
                    },
                    size: 48,
                    deg: 90
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Contact ")
                    ]),
                    _: 1
                  }, 8, ["gradient"])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal-menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ef984074"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    NGradientText
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_gradient_text = resolveComponent("n-gradient-text");
  const _component_modal_menu = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex bg-white p-8 grid grid-flow-col min-w-full h-30" }, _attrs))} data-v-9d2a8ccc><div class="text-left col-span-10" data-v-9d2a8ccc><div class="w-full h-fit mx-auto grid grid-flow" data-v-9d2a8ccc><div class="flex col-span-11 h-fit flex" data-v-9d2a8ccc><div class="tracking-tighter h-fit leading-8" data-v-9d2a8ccc><a href="/" data-v-9d2a8ccc>`);
  _push(ssrRenderComponent(_component_n_gradient_text, {
    gradient: {
      from: "rgb(85, 85, 85)",
      to: "rgb(127, 127, 127)",
      deg: "42"
    },
    size: 42,
    deg: 270
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` SG<br data-v-9d2a8ccc${_scopeId}> Art `);
      } else {
        return [
          createTextVNode(" SG"),
          createVNode("br"),
          createTextVNode(" Art ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div></div></div></div><div class="col-span-1 z-50 pr-8" data-v-9d2a8ccc>`);
  _push(ssrRenderComponent(_component_modal_menu, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d2a8ccc"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TheHeader-2c32b7d1.mjs.map
