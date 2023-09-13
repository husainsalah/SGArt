import{i as p,a as v,u as x,f as u,g as w,q as C,v as z,p as g}from"./light.bd93c49f.js";import{f as T,n as i,m as R}from"./entry.27bb4dcf.js";let f=!1;function P(){if(p&&window.CSS&&!f&&(f=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const $=v("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),k=Object.assign(Object.assign({},u.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),O=T({name:"GradientText",props:k,setup(t){P();const{mergedClsPrefixRef:n,inlineThemeDisabled:d}=x(t),o=i(()=>{const{type:e}=t;return e==="danger"?"error":e}),m=i(()=>{let e=t.size||t.fontSize;return e&&(e=C(e)),e||void 0}),h=i(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const s=e.deg||0,a=e.from,l=e.to;return`linear-gradient(${s}deg, ${a} 0%, ${l} 100%)`}}),y=u("GradientText","-gradient-text",$,z,t,n),c=i(()=>{const{value:e}=o,{common:{cubicBezierEaseInOut:s},self:{rotate:a,[g("colorStart",e)]:l,[g("colorEnd",e)]:S,fontWeight:b}}=y.value;return{"--n-bezier":s,"--n-rotate":a,"--n-color-start":l,"--n-color-end":S,"--n-font-weight":b}}),r=d?w("gradient-text",i(()=>o.value[0]),c,t):void 0;return{mergedClsPrefix:n,compatibleType:o,styleFontSize:m,styleBgImage:h,cssVars:d?void 0:c,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:t,onRender:n}=this;return n==null||n(),R("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{O as N};
