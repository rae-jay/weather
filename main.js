(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),i=t(314),c=t.n(i),a=t(417),s=t.n(a),l=new URL(t(587),t.b),u=c()(r()),d=s()(l);u.push([n.id,`button, input, body{\n    border: none;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0);\n    padding: 0;\n    margin: 0;\n\n}\n\n\n\n:root{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1rem;\n\n    box-sizing: border-box;\n\n    /* --outline-color: rgb(189, 189, 189); */\n    --outline-color: rgb(255, 255, 255);\n    --outline-highlight: rgb(105, 168, 250);\n\n    color: white;\n}\n\n\n\n\nbody{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.background{\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    z-index: -1;\n\n    background-image: linear-gradient(to bottom right, rgb(200 255 255), rgb(91 171 211));\n}\n\n\n/* the search box and icon container */\nform{\n    display: flex;\n    justify-content: center;\n    /* gap is specifically so outlines overlap, hence px  */\n    gap: 2px;\n\n    height: 2rem;\n    width: fit-content;\n\n    padding-top: 1rem;\n}\n\n/* the magnifying glass  icon */\n.searchIcon{\n    height: 100%;\n    aspect-ratio: 1/1;\n\n    outline: solid 2px var(--outline-color);\n    border-radius: 6px 6px 6px 6px;\n\n    background-size: cover;\n    background-image: url(${d});\n\n    cursor: grab;\n}\n/* when search box is visible */\n.searchIcon.inputShow{\n    border-radius: 0 6px 6px 0;\n}\n\n\n/* the input box */\n#placeSearch{\n    height: 100%;\n\n    border-radius: 6px 0 0 6px;\n\n    outline: solid 2px;\n    outline-color: var(--outline-color);\n\n    font-size: 1.25rem;\n    padding-left: 0.5ch;\n}\n\n/* both search bar and icon outline color */\n#placeSearch:focus, #placeSearch:focus+.searchIcon{\n    outline-color: var(--outline-highlight);\n}\n\n\n/* for when input box OR region text is hidden */\n.hide{\n    display: none;\n}\n\n\n\n/* location text container */\n.locationText{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n/* main city text */\n.cityText{\n    font-size: 3rem;\n}\n\n/* container for location detail text (country/region) */\n.locationDetails{\n    display: flex;\n    gap: 2ch;\n\n    font-size: 1.25rem;\n}\n\n\n/* container of weather description text (ie 'sunny'), icon, and degrees */\n.weatherContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.weatherDescription{\n    font-size: 2.5rem;\n}\n\n/* container of icon / degree display */\n.weatherInfo{\n    display: flex;\n    align-items: center;\n}\n\n.weatherInfo > img{\n    width: 18ch;\n    height: 18ch;\n\n    /* background-color: aquamarine; */\n}\n\n.weatherInfo > div{\n    font-size: 5rem;\n}\n\n\n/* container of wind / humidity display */\n.detailContainer{\n    display: grid;\n    grid-template-columns: 1fr 2px 1fr;\n    /* gap: 2ch; */\n\n    border-radius: 6px;\n    outline: solid var(--outline-color) 2px;\n}\n\n.divider{\n    background-color: var(--outline-color);\n}\n\n/* boxes that contain wind speed/humidity individually */\n.weatherDetails{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n\n    padding: 2.5ch 1.75ch 2.5ch 1.75ch;\n}\n\n/* humidity num/speed num */\n.detailNum{\n    font-size: 1.75rem;\n}`,""]);const p=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);o&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},c=[],a=0;a<n.length;a++){var s=n[a],l=o.base?s[0]+o.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=r(h,o);o.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}c.push(d)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var s=o(n,r),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},587:(n,e,t)=>{n.exports=t.p+"54ff7732bb1a5ff166c6.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{E:()=>N});var n=t(72),e=t.n(n),r=t(825),i=t.n(r),c=t(659),a=t.n(c),s=t(56),l=t.n(s),u=t(540),d=t.n(u),p=t(113),h=t.n(p),f=t(208),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const g=document.querySelector("form"),v=document.querySelector(".searchIcon"),y=document.querySelector("#placeSearch"),x=document.querySelector(".cityText"),b=document.querySelector("#regionText"),w=document.querySelector("#countryText"),S=document.querySelector(".weatherDescription"),C=document.querySelector("#weatherIcon"),L=document.querySelector("#weatherDegrees"),E=document.querySelector("#humidityNum"),T=document.querySelector("#windNum");let I=!1,k=!1;function A(){k||document.activeElement==y||""!=y.value?(y.classList.remove("hide"),v.classList.contains("inputShow")||v.classList.add("inputShow")):(v.classList.remove("inputShow"),y.classList.contains("hide")||y.classList.add("hide"))}console.log("working test");const q="https://api.weatherapi.com/v1/";let R="current.json?";const M="key=faed28754a2c4013a9453643242303";let z="Edinburgh";function N(n){let e;e=function(n){const e=n.replace(/ /g,"+").toLowerCase();return q+R+M+`&q=${e}`}(n||z),console.log("link: "+e),async function(n){try{const e=await fetch(n,{mode:"cors"});return function(n){const e={};return e.locCity=n.location.name,e.locCountry=n.location.country,e.locRegion=n.location.region,e.condition=n.current.condition.text,e.tempC=n.current.temp_c,e.tempF=n.current.temp_f,e.windMph=n.current.wind_mph,e.windKph=n.current.wind_kph,e.humidity=n.current.humidity,e.iconLink="http:"+n.current.condition.icon,e}(await e.json())}catch(n){console.log("ERR: invalid search term")}return null}(e).then((n=>{var e;return e=n,x.textContent=e.locCity,w.textContent=e.locCountry,e.locRegion.length<=10?(b.textContent=e.locRegion,b.classList.remove("hide")):(b.textContent="",b.classList.contains("hide")||b.classList.add("hide")),S.textContent=e.condition,C.src=e.iconLink,1==I?(L.textContent=e.tempC+"°",T.textContent=e.windKph+" kph"):(L.textContent=e.tempF+"°",T.textContent=e.windMph+" mph"),E.textContent=e.humidity+"%",!0})).catch((n=>(console.log("ERR: probably an invalid search term"),console.log(n),!1)))}console.log("IS THIS"),g.addEventListener("mouseenter",(()=>{k=!0,A()})),g.addEventListener("mouseleave",(()=>{k=!1,A()})),y.addEventListener("focusout",(()=>{A()})),v.addEventListener("click",(()=>{N(y.value)&&(y.value="",document.activeElement.blur())})),N(),console.log("HAPPENING AT ALL")})()})();