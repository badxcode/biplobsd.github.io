"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8425,8263],{1124:function(t,e,n){n.d(e,{w0:function(){return r}});let r="https://biplobsd.github.io/"},8157:function(t,e,n){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{$k:function(){return p},_y:function(){return u},LU:function(){return c},WR:function(){return l},LF:function(){return s}});var i=["","K","M","B"],a={digits:1,uppercase:!0},o=function(t,e){if(void 0===e&&(e={}),isNaN(t))return 0;var n=Math.abs(t);if(n<1e3)return Number(t);for(var o=r({},a,e),u=o.digits,s=o.uppercase,c=[0,1].includes(Math.sign(t))?1:-1,l=0,p="",f=0;f<=i.length;f++){var h=Math.pow(1e3,f);n>=h&&(l=n/h,p=s?i[f]:i[f].toLowerCase())}return""+(l-Math.floor(l)<=0||0===u?Math.floor(l*c):parseFloat(l*c).toFixed(u))+p};function u(t){return"whatText"in t}function s(t){return t.replace(/\b\w+/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function c(t){return o(t,{digits:2,uppercase:!1})}function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:160;if(t.length>e){let n=t.slice(0,e),r=n.charAt(n.length-1);return" "!==r&&(n=n.substring(0,n.lastIndexOf(" ")),/[^\w\s]/.test(r)&&(n=n.substring(0,n.length-1))),n}return t}function p(t){return"https://github.com"+t+"/blob/data"}},8425:function(t,e,n){n.r(e);var r=n(5893),i=n(4973),a=n.n(i),o=n(2962),u=n(1163),s=(n(1124),n(8157));e.default=function(t){let{imgUrl:e,title:n,description:i,configs:c,itemView:l,ogType:p="website"}=t,f=(0,u.useRouter)(),h="".concat("https://biplobsd.me"),d=(0,s.WR)(i),g="".concat(h).concat(f.asPath),b=a().extract((l?l.fileName:"")+" "+i,{language:"english",remove_digits:!0,return_changed_case:!0,remove_duplicates:!0}).filter(t=>!/[^\w\s]/.test(t));return(0,r.jsx)(o.PB,{title:n,description:d,canonical:g,additionalLinkTags:[{rel:"icon",href:"".concat(h,"/favicon.ico")}],openGraph:{url:g,title:n,description:d,images:e?[{url:e,alt:"".concat(d)}]:void 0,site_name:c.appName,type:p,article:l&&{publishedTime:new Date(l.date).toISOString(),authors:[h],tags:b}},facebook:{appId:"732825215185793"},twitter:{handle:c.twitterHandle,site:c.twitterHandle,cardType:"summary_large_image"}})}}}]);