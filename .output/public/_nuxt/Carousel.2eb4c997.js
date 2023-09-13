import{h as Ye,i as pt,j as gt,f as ue,k as A,l as mt,m as w,n as h,q as Ke,s as Fe,v as xt,x as wt,y as bt,z as ie,A as yt,B as St,T as Ct,C as Rt,D as $e}from"./entry.27bb4dcf.js";import{t as Pt,c as zt,u as ce,a as kt,b as c,d as _,e as d,f as Ue,g as It}from"./light.bd93c49f.js";import{u as Dt,t as Nt,i as Tt,f as Vt,V as Ee,r as Ae,o as Z,k as Me,c as _t,g as $t,a as H}from"./light.0ffc2977.js";import{c as Et,u as At}from"./Grid.68311ed9.js";function Mt(e){return Dt(Nt(e).toLowerCase())}var jt=Et(function(e,o,a){return o=o.toLowerCase(),e+(a?Mt(o):o)});const je=jt;function Bt(e){const{length:o}=e;return o>1&&(e.push(Be(e[0],0,"append")),e.unshift(Be(e[o-1],o-1,"prepend"))),e}function Be(e,o,a){return Ye(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Oe(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Se(e,o){return o?e+1:e}function Ot(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Lt(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Xt(e,o){return o&&e>3?e-2:e}function Le(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Xe(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const v=getComputedStyle(e);a=a-parseFloat(v.getPropertyValue("padding-left"))-parseFloat(v.getPropertyValue("padding-right")),l=l-parseFloat(v.getPropertyValue("padding-top"))-parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function re(e,o,a){return e<o?o:e>a?a:e}function Yt(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,v="ms"]=a;return Number(l)*(v==="ms"?1:1e3)}return 0}const We=zt("n-carousel-methods"),Kt=e=>{pt(We,e)},Re=(e="unknown",o="component")=>{const a=gt(We);return a||Pt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},Ft={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Ut=ue({name:"CarouselDots",props:Ft,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=A([]),l=Re();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(f);return}e.keyboard&&y(g)}function b(g){e.trigger==="hover"&&l.to(g)}function z(g){e.trigger==="click"&&l.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:R}=g,M=R==="PageUp"||R==="ArrowUp",j=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",P=R==="PageDown"||R==="ArrowLeft",k=l.isVertical(),$=k?M:C,K=k?j:P;!$&&!K||(g.preventDefault(),$&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):K&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return mt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:b,handleClick:z}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Tt(this.total,a=>{const l=a===this.currentIndex;return w("div",{"aria-selected":l,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),Wt=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Zt=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Ht=ue({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ce(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:b,next:z}=Re();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:b,next:z}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Wt),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Zt))}}),le="CarouselItem",qt=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===le},Gt=ue({name:le,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=Re(je(le),`n-${je(le)}`),l=A(),v=h(()=>{const{value:f}=l;return f?a.getSlideIndex(f):-1}),b=h(()=>a.isPrev(v.value)),z=h(()=>a.isNext(v.value)),y=h(()=>a.isActive(v.value)),S=h(()=>a.getSlideStyle(v.value));Ke(()=>{a.addSlide(l.value)}),Fe(()=>{a.removeSlide(l.value)});function g(f){const{value:x}=v;x!==void 0&&(a==null||a.onCarouselItemClick(x,f))}return{mergedClsPrefix:o,selfElRef:l,isPrev:b,isNext:z,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:v,isActive:b,index:z,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:b,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:v}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":z,"aria-hidden":!b,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:v,isActive:b,index:z}))}}),Jt=kt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[_("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[_("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[_("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[_("svg",`
 height: 1em;
 width: 1em;
 `),_("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[_(">",[_("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[_("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[_("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[_("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[_("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Qt=["transitionDuration","transitionTimingFunction"],en=Object.assign(Object.assign({},Ue.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ce=!1;const rn=ue({name:"Carousel",props:en,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ce(e),l=A(null),v=A(null),b=A([]),z={value:[]},y=h(()=>e.direction==="vertical"),S=h(()=>y.value?"height":"width"),g=h(()=>y.value?"bottom":"right"),f=h(()=>e.effect==="slide"),x=h(()=>e.loop&&e.slidesPerView===1&&f.value),R=h(()=>e.effect==="custom"),M=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),j=h(()=>R.value?1:e.slidesPerView),C=h(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=A({width:0,height:0}),k=h(()=>{const{value:t}=b;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>Xe(m));const{value:s}=j,{value:r}=P,{value:u}=S;let i=r[u];if(s!=="auto"){const{spaceBetween:m}=e,I=i-(s-1)*m,se=1/Math.max(1,s);i=I*se}const p=Object.assign(Object.assign({},r),{[u]:i});return t.map(()=>p)}),$=h(()=>{const{value:t}=k;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:r}=S,{[r]:u}=P.value;let i=0;return t.map(({[r]:p})=>{let m=i;return n&&(m+=(p-u)/2),i+=p+s,m})}),K=A(!1),de=h(()=>{const{transitionStyle:t}=e;return t?Me(t,Qt):{}}),fe=h(()=>R.value?0:Yt(de.value.transitionDuration)),Pe=h(()=>{const{value:t}=b;if(!t.length)return[];const n=!(C.value||j.value===1),s=p=>{if(n){const{value:m}=S;return{[m]:`${k.value[p][m]}px`}}};if(R.value)return t.map((p,m)=>s(m));const{effect:r,spaceBetween:u}=e,{value:i}=g;return t.reduce((p,m,I)=>{const se=Object.assign(Object.assign({},s(I)),{[`margin-${i}`]:`${u}px`});return p.push(se),K.value&&(r==="fade"||r==="card")&&Object.assign(se,de.value),p},[])}),D=h(()=>{const{value:t}=M,{length:n}=b.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=k,{length:r}=s;if(!r)return n;const{value:u}=$,{value:i}=S,p=P.value[i];let m=s[s.length-1][i],I=r;for(;I>1&&m<p;)I--,m+=u[I]-u[I-1];return re(I+1,1,r)}}),q=h(()=>Xt(D.value,x.value)),Ze=Se(e.defaultIndex,x.value),ve=A(Oe(Ze,D.value,x.value)),N=At(xt(e,"currentIndex"),ve),T=h(()=>Se(N.value,x.value));function F(t){var n,s;t=re(t,0,D.value-1);const r=Oe(t,D.value,x.value),{value:u}=N;r!==N.value&&(ve.value=r,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,r,u),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,r,u))}function G(t=T.value){return Ot(t,D.value,e.loop)}function J(t=T.value){return Lt(t,D.value,e.loop)}function He(t){const n=O(t);return n!==null&&G()===n}function qe(t){const n=O(t);return n!==null&&J()===n}function ze(t){return T.value===O(t)}function Ge(t){return N.value===t}function ke(){return G()===null}function Ie(){return J()===null}function he(t){const n=re(Se(t,x.value),0,D.value);(t!==N.value||n!==T.value)&&F(n)}function pe(){const t=G();t!==null&&F(t)}function Q(){const t=J();t!==null&&F(t)}function Je(){(!V||!x.value)&&pe()}function Qe(){(!V||!x.value)&&Q()}let V=!1,B=0;const ge=A({});function ee(t,n=0){ge.value=Object.assign({},de.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function U(t=0){f.value?me(T.value,t):B!==0&&(!V&&t>0&&(V=!0),ee(B=0,t))}function me(t,n){const s=De(t);s!==B&&n>0&&(V=!0),B=De(T.value),ee(s,n)}function De(t){let n;return t>=D.value-1?n=Ne():n=$.value[t]||0,n}function Ne(){if(M.value==="auto"){const{value:t}=S,{[t]:n}=P.value,{value:s}=$,r=s[s.length-1];let u;if(r===void 0)u=n;else{const{value:i}=k;u=r+i[i.length-1][t]}return u-n}else{const{value:t}=$;return t[D.value-1]||0}}const W={currentIndexRef:N,to:he,prev:Je,next:Qe,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:He,isNext:qe,isActive:ze,isPrevDisabled:ke,isNextDisabled:Ie,getSlideIndex:O,getSlideStyle:nt,addSlide:et,removeSlide:tt,onCarouselItemClick:ot};Kt(W);function et(t){t&&b.value.push(t)}function tt(t){if(!t)return;const n=O(t);n!==-1&&b.value.splice(n,1)}function O(t){return typeof t=="number"?t:t?b.value.indexOf(t):-1}function nt(t){const n=O(t);if(n!==-1){const s=[Pe.value[n]],r=W.isPrev(n),u=W.isNext(n);return r&&s.push(e.prevSlideStyle||""),u&&s.push(e.nextSlideStyle||""),Rt(s)}}function ot(t,n){let s=!V&&!oe&&!ye;e.effect==="card"&&s&&!ze(t)&&(he(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let te=null;function ne(){te&&(clearInterval(te),te=null)}function L(){ne(),!e.autoplay||q.value<2||(te=window.setInterval(Q,e.interval))}let xe=0,we=0,E=0,be=0,oe=!1,ye=!1;function Te(t){var n;if(Ce||!(!((n=v.value)===null||n===void 0)&&n.contains($t(t))))return;Ce=!0,oe=!0,ye=!1,be=Date.now(),ne(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Le(t)?t.touches[0]:t;y.value?we=s.clientY:xe=s.clientX,e.touchable&&(H("touchmove",document,ae,{passive:!0}),H("touchend",document,X),H("touchcancel",document,X)),e.draggable&&(H("mousemove",document,ae),H("mouseup",document,X))}function ae(t){const{value:n}=y,{value:s}=S,r=Le(t)?t.touches[0]:t,u=n?r.clientY-we:r.clientX-xe,i=P.value[s];E=re(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&ee(B-E,0)}function X(){const{value:t}=T;let n=t;if(!V&&E!==0&&f.value){const s=B-E,r=[...$.value.slice(0,D.value-1),Ne()];let u=null;for(let i=0;i<r.length;i++){const p=Math.abs(r[i]-s);if(u!==null&&u<p)break;u=p,n=i}}if(n===t){const s=Date.now()-be,{value:r}=S,u=P.value[r];E>u/2||E/s>.4?n=G(t):(E<-u/2||E/s<-.4)&&(n=J(t))}n!==null&&n!==t?(ye=!0,F(n),$e(()=>{(!x.value||ve.value!==N.value)&&U(fe.value)})):U(fe.value),Ve(),L()}function Ve(){oe&&(Ce=!1),oe=!1,xe=0,we=0,E=0,be=0,Z("touchmove",document,ae),Z("touchend",document,X),Z("touchcancel",document,X),Z("mousemove",document,ae),Z("mouseup",document,X)}function at(){if(f.value&&V){const{value:t}=T;me(t,0)}else L();f.value&&(ge.value.transitionDuration="0ms"),V=!1}function st(t){if(t.preventDefault(),V)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const r=-1,u=1,i=(n||s)>0?u:r;let p=0,m=0;y.value?m=i:p=i;const I=10;(m*s>=I||p*n>=I)&&(i===u&&!Ie()?Q():i===r&&!ke()&&pe())}function it(){P.value=Xe(l.value,!0),L()}function rt(){var t,n;C.value&&((n=(t=k.effect).scheduler)===null||n===void 0||n.call(t),k.effect.run())}function lt(){e.autoplay&&ne()}function ut(){e.autoplay&&L()}Ke(()=>{wt(L),requestAnimationFrame(()=>K.value=!0)}),Fe(()=>{Ve(),ne()}),bt(()=>{const{value:t}=b,{value:n}=z,s=new Map,r=i=>s.has(i)?s.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const p=n.findIndex(m=>m.el===t[i]);p!==i&&(u=!0),s.set(t[i],p)}u&&t.sort((i,p)=>r(i)-r(p))}),ie(T,(t,n)=>{if(t!==n)if(L(),f.value){if(x.value&&q.value>2){const{value:s}=D;t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}me(t,fe.value)}else U()},{immediate:!0}),ie([x,M],()=>void $e(()=>{F(T.value)})),ie($,()=>{f.value&&U()},{deep:!0}),ie(f,t=>{t?U():(V=!1,ee(B=0))});const ct=h(()=>({onTouchstartPassive:e.touchable?Te:void 0,onMousedown:e.draggable?Te:void 0,onWheel:e.mousewheel?st:void 0})),dt=h(()=>Object.assign(Object.assign({},Me(W,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:q.value,currentIndex:N.value})),ft=h(()=>({total:q.value,currentIndex:N.value,to:W.to})),vt={getCurrentIndex:()=>N.value,to:he,prev:pe,next:Q},ht=Ue("Carousel","-carousel",Jt,_t,e,o),_e=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:r,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:p,arrowColor:m}}=ht.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":u,"--n-dot-color-active":r,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),Y=a?It("carousel",void 0,_e,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:v,slideVNodes:z,duplicatedable:x,userWantsControl:R,autoSlideSize:C,displayIndex:N,realIndex:T,slideStyles:Pe,translateStyle:ge,slidesControlListeners:ct,handleTransitionEnd:at,handleResize:it,handleSlideResize:rt,handleMouseenter:lt,handleMouseleave:ut,isActive:Ge,arrowSlotProps:dt,dotSlotProps:ft},vt),{cssVars:a?void 0:_e,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:v,dotType:b,dotPlacement:z,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:R,arrow:M}}=this,j=x&&Vt(x())||[];let C=tn(j);return C.length||(C=j.map(P=>w(Gt,null,{default:()=>Ye(P)}))),this.duplicatedable&&(C=Bt(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(P=>w(Ee,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${z}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Ee,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((P,k)=>w("div",{style:v[k],key:k},yt(w(Ct,Object.assign({},S),{default:()=>P}),[[St,this.isActive(k)]]))):C)}),this.showDots&&f.total>1&&Ae(R,f,()=>[w(Ut,{key:b+z,total:f.total,currentIndex:f.currentIndex,dotType:b,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ae(M,g,()=>[w(Ht,null)]))}});function tn(e){return e.reduce((o,a)=>(qt(a)&&o.push(a),o),[])}export{rn as N,Gt as a};
