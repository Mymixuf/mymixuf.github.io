import{s as q,f as p,a as x,g as d,c as F,M as w,h as b,d as f,j as m,i as u,I as U,N as S,u as j,O as B}from"../chunks/scheduler.8f10649e.js";import{e as v}from"../chunks/each.e59479a4.js";import{S as D,i as M}from"../chunks/index.e5570706.js";function k(o,t,i){const c=o.slice();return c[1]=t[i],c}function C(o,t,i){const c=o.slice();return c[4]=t[i],c}function I(o){let t,i,c;return{c(){t=p("div"),i=p("img"),this.h()},l(n){t=d(n,"DIV",{});var l=b(t);i=d(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(f),this.h()},h(){m(i,"class","h-auto max-w-full rounded-lg svelte-144cj9y"),B(i.src,c=o[4])||m(i,"src",c),m(i,"alt","")},m(n,l){u(n,t,l),j(t,i)},p:U,d(n){n&&f(t)}}}function E(o){let t,i,c=v(o[1]),n=[];for(let l=0;l<c.length;l+=1)n[l]=I(C(o,c,l));return{c(){t=p("div");for(let l=0;l<n.length;l+=1)n[l].c();i=x(),this.h()},l(l){t=d(l,"DIV",{class:!0});var h=b(t);for(let e=0;e<n.length;e+=1)n[e].l(h);i=F(h),h.forEach(f),this.h()},h(){m(t,"class","grid gap-5")},m(l,h){u(l,t,h);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(t,null);j(t,i)},p(l,h){if(h&1){c=v(l[1]);let e;for(e=0;e<c.length;e+=1){const g=C(l,c,e);n[e]?n[e].p(g,h):(n[e]=I(g),n[e].c(),n[e].m(t,i))}for(;e<n.length;e+=1)n[e].d(1);n.length=c.length}},d(l){l&&f(t),S(n,l)}}}function N(o){let t,i,c,n="Såhär gör du:",l,h,e,g=v(o[0]),r=[];for(let s=0;s<g.length;s+=1)r[s]=E(k(o,g,s));return{c(){t=p("br"),i=x(),c=p("h1"),c.textContent=n,l=p("br"),h=x(),e=p("section");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=d(s,"BR",{}),i=F(s),c=d(s,"H1",{class:!0,"data-svelte-h":!0}),w(c)!=="svelte-14xwn9u"&&(c.textContent=n),l=d(s,"BR",{}),h=F(s),e=d(s,"SECTION",{class:!0});var _=b(e);for(let a=0;a<r.length;a+=1)r[a].l(_);_.forEach(f),this.h()},h(){m(c,"class","svelte-144cj9y"),m(e,"class","p-10 grid grid-cols-2 md:grid-cols-4 gap-2")},m(s,_){u(s,t,_),u(s,i,_),u(s,c,_),u(s,l,_),u(s,h,_),u(s,e,_);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,[_]){if(_&1){g=v(s[0]);let a;for(a=0;a<g.length;a+=1){const y=k(s,g,a);r[a]?r[a].p(y,_):(r[a]=E(y),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=g.length}},i:U,o:U,d(s){s&&(f(t),f(i),f(c),f(l),f(h),f(e)),S(r,s)}}}function O(o){return[[["UF-1.png","UF-2.png","UF-3.png","UF-4.png","UF-5.png","UF-6.png","UF-7.png","UF-8.png","UF-9.png"]]]}class G extends D{constructor(t){super(),M(this,t,O,N,q,{})}}export{G as component};
