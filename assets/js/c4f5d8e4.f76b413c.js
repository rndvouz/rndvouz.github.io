"use strict";(self.webpackChunkrndvouz=self.webpackChunkrndvouz||[]).push([[195],{3261:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),l=n(6010),r=n(9960),s=n(2263),o=n(7961),i=n(7462);const c={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},u=[{title:"Easy to Use",Svg:null,description:a.createElement(a.Fragment,null,"With a simple swipe interface, our app allows you to swap clothes with other effortlessly, helping to create a sustainable and cost-effective way to refresh your wardrobe.")},{title:"Join RNDVOUZ",Svg:null,description:a.createElement(a.Fragment,null,"Join a vibrant community of style-conscious individuals looking to revamp their closets. Discover new pieces to elevate your personal style.")},{title:"Consign your clothes",Svg:null,description:a.createElement(a.Fragment,null,"Easily consign your gently worn clothes with local thrift shops, supporting both your wallet and the environment.")}];function m(e){let{Svg:t,title:n,description:r}=e;return a.createElement("div",{className:(0,l.Z)("col col--4")},a.createElement("div",{className:"text--center"}),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,n),a.createElement("p",null,r)))}function h(){return a.createElement("section",{className:c.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},u.map(((e,t)=>a.createElement(m,(0,i.Z)({key:t},e)))))))}const p={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"},d=e=>{let{text:t,speed:n}=e;const[l,r]=(0,a.useState)(""),[s,o]=(0,a.useState)(0),[i,c]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{let e=0;const a=e=>new Promise((t=>{setTimeout(t,e)}));const l=setInterval((async function(){i?e<t.length?(r((e=>e.slice(0,-1))),e++):(clearInterval(l),await a(1e3),c(!1)):e<t.length?(r((n=>n+t[e])),e++):(clearInterval(l),await a(5e3),c(!0))}),n),s=setInterval((()=>{o((e=>1-e))}),280);return()=>{clearInterval(l),clearInterval(s)}}),[t,n,i]),a.createElement("span",null,l,a.createElement("span",{className:"cursor",style:{opacity:s}},"|"))};function f(){const{siteConfig:e}=(0,s.Z)();return a.createElement("header",{className:(0,l.Z)("hero",p.heroBanner),style:{flex:"1"}},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title main-title"},e.title),a.createElement("div",{className:"type_container"},a.createElement("p",{className:"hero__subtitle sub-title"},a.createElement(d,{text:e.tagline,speed:70}))),a.createElement("div",{className:p.buttons},a.createElement(r.Z,{className:"button button--lg mybutton",to:"/docs/intro"},"Get Started!"))))}function v(){const{siteConfig:e}=(0,s.Z)();return a.createElement(o.Z,{title:`Hello from ${e.title}`,description:"RNDVOUZ is a Flutter-powered mobile application that revolutionizes the way people trade clothes. With a simple swipe interface, users can quickly browse through a curated selection of clothing items from others in their community. Swipe right to express interest, or swipe left to pass on items. When two users mutually like each other's clothing, a match is made, enabling them to connect and arrange a convenient swap."},a.createElement(f,null),a.createElement(h,null))}}}]);