parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Uagk":[function(require,module,exports) {
module.exports="/counter.2db839dd.png";
},{}],"KfLy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../public/images/counter.png")),t=n(require("@riotjs/lazy")),r=n(require("./Loader.riot"));function n(e){return e&&e.__esModule?e:{default:e}}var o={css:null,exports:{components:{Counter:(0,t.default)(r.default,function(){return require("_bundle_loader")(require.resolve("./Counter.riot"))})},image:e.default,examples:[{name:"Books",url:"/books",description:"Showcases Using Rust in JS, managing state, adding and removing items"},{name:"Counter",url:"/counter",description:"Showcases a basic counter and state manipulation"},{name:"Contact Form",url:"/form",description:"Showcases a contact form and form manipulation"}]},template:function(e,t,r,n){return e('<section class="text-gray-700 body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap w-full mb-20 flex-col items-center text-center"><h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Riot + Wasm + Rust</h1><p class="lg:w-1/2 w-full leading-relaxed text-base">A showcase of playing with rust macros, stdweb, wasm and riot.js</p></div><div class="flex flex-wrap -m-4"><div expr0="expr0" class="xl:w-1/3 md:w-1/2 p-4"></div></div><div class="rounded-lg"><div class="md:text-3xl text-3xl font-bold">Try it Now!</div><counter expr4="expr4"></counter></div><div class="rounded-lg h-64 my-6 overflow-hidden"><img expr5="expr5" alt="content" class="object-cover object-start h-full w-full"/></div><a href="https://github.com/geofmureithi/riot-rs-wasm"><button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Github</button></a></div></section>',[{type:r.EACH,getKey:null,condition:null,template:e('<a expr1="expr1"><div class="border border-gray-300 p-6 rounded-lg"><div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><h2 expr2="expr2" class="text-lg text-gray-900 font-medium title-font mb-2"> </h2><p expr3="expr3" class="leading-relaxed text-base"> </p></div></a>',[{redundantAttribute:"expr1",selector:"[expr1]",expressions:[{type:t.ATTRIBUTE,name:"href",evaluate:function(e){return e.example.url}}]},{redundantAttribute:"expr2",selector:"[expr2]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:function(e){return e.example.title}}]},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:function(e){return e.example.description}}]}]),redundantAttribute:"expr0",selector:"[expr0]",itemName:"example",indexName:null,evaluate:function(e){return e.examples}},{type:r.TAG,getComponent:n,evaluate:function(e){return"counter"},slots:[],attributes:[],redundantAttribute:"expr4",selector:"[expr4]"},{redundantAttribute:"expr5",selector:"[expr5]",expressions:[{type:t.ATTRIBUTE,name:"src",evaluate:function(e){return e.image}}]}])},name:"app"};exports.default=o;
},{"../public/images/counter.png":"Uagk","@riotjs/lazy":"Vaiv","./Loader.riot":"X7Q1","_bundle_loader":"TUK3","./Counter.riot":[["Counter.c35b9ceb.js","vATD"],"Counter.c35b9ceb.js.map",["Cargo.ed1a9a19.cargo-web-d20feded5cd4b4e8741163e1095849df","Jugo"],"vATD"]}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"yhX2":[function(require,module,exports) {
function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}module.exports=function(r){function t(r,t){return n=function(){var r={STDWEB_PRIVATE:{}};r.STDWEB_PRIVATE.to_utf8=function(e,t){for(var n=r.HEAPU8,_=0;_<e.length;++_){var a=e.charCodeAt(_);a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++_)),a<=127?n[t++]=a:a<=2047?(n[t++]=192|a>>6,n[t++]=128|63&a):a<=65535?(n[t++]=224|a>>12,n[t++]=128|a>>6&63,n[t++]=128|63&a):a<=2097151?(n[t++]=240|a>>18,n[t++]=128|a>>12&63,n[t++]=128|a>>6&63,n[t++]=128|63&a):a<=67108863?(n[t++]=248|a>>24,n[t++]=128|a>>18&63,n[t++]=128|a>>12&63,n[t++]=128|a>>6&63,n[t++]=128|63&a):(n[t++]=252|a>>30,n[t++]=128|a>>24&63,n[t++]=128|a>>18&63,n[t++]=128|a>>12&63,n[t++]=128|a>>6&63,n[t++]=128|63&a)}},r.STDWEB_PRIVATE.noop=function(){},r.STDWEB_PRIVATE.to_js=function(e){var t=r.HEAPU8[e+12];if(0!==t){if(1===t)return null;if(2===t)return r.HEAP32[e/4];if(3===t)return r.HEAPF64[e/8];if(4===t){var n=r.HEAPU32[e/4],_=r.HEAPU32[(e+4)/4];return r.STDWEB_PRIVATE.to_js_string(n,_)}if(5===t)return!1;if(6===t)return!0;if(7===t){for(var n=r.STDWEB_PRIVATE.arena+r.HEAPU32[e/4],_=r.HEAPU32[(e+4)/4],a=[],o=0;o<_;++o)a.push(r.STDWEB_PRIVATE.to_js(n+16*o));return a}if(8===t){for(var E=r.STDWEB_PRIVATE.arena,c=E+r.HEAPU32[e/4],_=r.HEAPU32[(e+4)/4],i=E+r.HEAPU32[(e+8)/4],a={},o=0;o<_;++o){var u=r.HEAPU32[(i+8*o)/4],T=r.HEAPU32[(i+4+8*o)/4],f=r.STDWEB_PRIVATE.to_js_string(u,T),A=r.STDWEB_PRIVATE.to_js(c+16*o);a[f]=A}return a}if(9===t)return r.STDWEB_PRIVATE.acquire_js_reference(r.HEAP32[e/4]);if(10===t||12===t||13===t){var l=r.HEAPU32[e/4],n=r.HEAPU32[(e+4)/4],P=r.HEAPU32[(e+8)/4],s=0,p=!1,a=function(){if(0===n||!0===p)throw 10===t?new ReferenceError("Already dropped Rust function called!"):12===t?new ReferenceError("Already dropped FnMut function called!"):new ReferenceError("Already called or dropped FnOnce function called!");var e=n;if(13===t&&(a.drop=r.STDWEB_PRIVATE.noop,n=0),0!==s&&(12===t||13===t))throw new ReferenceError("FnMut function called multiple times concurrently!");var _=r.STDWEB_PRIVATE.alloc(16);r.STDWEB_PRIVATE.serialize_array(_,arguments);try{s+=1,r.STDWEB_PRIVATE.dyncall("vii",l,[e,_]);var o=r.STDWEB_PRIVATE.tmp;r.STDWEB_PRIVATE.tmp=null}finally{s-=1}return!0===p&&0===s&&a.drop(),o};return a.drop=function(){if(0===s){a.drop=r.STDWEB_PRIVATE.noop;var e=n;n=0,0!=e&&r.STDWEB_PRIVATE.dyncall("vi",P,[e])}else p=!0},a}if(14===t){var n=r.HEAPU32[e/4],_=r.HEAPU32[(e+4)/4],d=r.HEAPU32[(e+8)/4],S=n+_;switch(d){case 0:return r.HEAPU8.subarray(n,S);case 1:return r.HEAP8.subarray(n,S);case 2:return r.HEAPU16.subarray(n,S);case 3:return r.HEAP16.subarray(n,S);case 4:return r.HEAPU32.subarray(n,S);case 5:return r.HEAP32.subarray(n,S);case 6:return r.HEAPF32.subarray(n,S);case 7:return r.HEAPF64.subarray(n,S)}}else if(15===t)return r.STDWEB_PRIVATE.get_raw_value(r.HEAPU32[e/4])}},r.STDWEB_PRIVATE.serialize_object=function(e,t){var n=Object.keys(t),_=n.length,a=r.STDWEB_PRIVATE.alloc(8*_),o=r.STDWEB_PRIVATE.alloc(16*_);r.HEAPU8[e+12]=8,r.HEAPU32[e/4]=o,r.HEAPU32[(e+4)/4]=_,r.HEAPU32[(e+8)/4]=a;for(var E=0;E<_;++E){var c=n[E],i=a+8*E;r.STDWEB_PRIVATE.to_utf8_string(i,c),r.STDWEB_PRIVATE.from_js(o+16*E,t[c])}},r.STDWEB_PRIVATE.serialize_array=function(e,t){var n=t.length,_=r.STDWEB_PRIVATE.alloc(16*n);r.HEAPU8[e+12]=7,r.HEAPU32[e/4]=_,r.HEAPU32[(e+4)/4]=n;for(var a=0;a<n;++a)r.STDWEB_PRIVATE.from_js(_+16*a,t[a])};var t="function"==typeof TextEncoder?new TextEncoder("utf-8"):"object"===("undefined"==typeof util?"undefined":e(util))&&util&&"function"==typeof util.TextEncoder?new util.TextEncoder("utf-8"):null;r.STDWEB_PRIVATE.to_utf8_string=null!=t?function(e,n){var _=t.encode(n),a=_.length,o=0;a>0&&(o=r.STDWEB_PRIVATE.alloc(a),r.HEAPU8.set(_,o)),r.HEAPU32[e/4]=o,r.HEAPU32[(e+4)/4]=a}:function(e,t){var n=r.STDWEB_PRIVATE.utf8_len(t),_=0;n>0&&(_=r.STDWEB_PRIVATE.alloc(n),r.STDWEB_PRIVATE.to_utf8(t,_)),r.HEAPU32[e/4]=_,r.HEAPU32[(e+4)/4]=n};r.STDWEB_PRIVATE.from_js=function(e,t){var n=Object.prototype.toString.call(t);if("[object String]"===n)r.HEAPU8[e+12]=4,r.STDWEB_PRIVATE.to_utf8_string(e,t);else if("[object Number]"===n)t===(0|t)?(r.HEAPU8[e+12]=2,r.HEAP32[e/4]=t):(r.HEAPU8[e+12]=3,r.HEAPF64[e/8]=t);else if(null===t)r.HEAPU8[e+12]=1;else if(void 0===t)r.HEAPU8[e+12]=0;else if(!1===t)r.HEAPU8[e+12]=5;else if(!0===t)r.HEAPU8[e+12]=6;else if("[object Symbol]"===n){var _=r.STDWEB_PRIVATE.register_raw_value(t);r.HEAPU8[e+12]=15,r.HEAP32[e/4]=_}else{var a=r.STDWEB_PRIVATE.acquire_rust_reference(t);r.HEAPU8[e+12]=9,r.HEAP32[e/4]=a}};var n="function"==typeof TextDecoder?new TextDecoder("utf-8"):"object"===("undefined"==typeof util?"undefined":e(util))&&util&&"function"==typeof util.TextDecoder?new util.TextDecoder("utf-8"):null;r.STDWEB_PRIVATE.to_js_string=null!=n?function(e,t){return n.decode(r.HEAPU8.subarray(e,e+t))}:function(e,t){for(var n=r.HEAPU8,_=(0|(e|=0))+(0|(t|=0)),a="";e<_;){var o=n[e++];if(o<128)a+=String.fromCharCode(o);else{var E=31&o,c=0;e<_&&(c=n[e++]);var i=E<<6|63&c;if(o>=224){var u=0;e<_&&(u=n[e++]);var T=(63&c)<<6|63&u;if(i=E<<12|T,o>=240){var f=0;e<_&&(f=n[e++]),i=(7&E)<<18|T<<6|63&f,a+=String.fromCharCode(55232+(i>>10)),i=56320+(1023&i)}}a+=String.fromCharCode(i)}}return a};r.STDWEB_PRIVATE.id_to_ref_map={},r.STDWEB_PRIVATE.id_to_refcount_map={},r.STDWEB_PRIVATE.ref_to_id_map=new WeakMap,r.STDWEB_PRIVATE.ref_to_id_map_fallback=new Map,r.STDWEB_PRIVATE.last_refid=1,r.STDWEB_PRIVATE.id_to_raw_value_map={},r.STDWEB_PRIVATE.last_raw_value_id=1,r.STDWEB_PRIVATE.acquire_rust_reference=function(e){if(null==e)return 0;var t=r.STDWEB_PRIVATE.id_to_refcount_map,n=r.STDWEB_PRIVATE.id_to_ref_map,_=r.STDWEB_PRIVATE.ref_to_id_map,a=r.STDWEB_PRIVATE.ref_to_id_map_fallback,o=_.get(e);if(void 0===o&&(o=a.get(e)),void 0===o){o=r.STDWEB_PRIVATE.last_refid++;try{_.set(e,o)}catch(E){a.set(e,o)}}return o in n?t[o]++:(n[o]=e,t[o]=1),o},r.STDWEB_PRIVATE.acquire_js_reference=function(e){return r.STDWEB_PRIVATE.id_to_ref_map[e]},r.STDWEB_PRIVATE.increment_refcount=function(e){r.STDWEB_PRIVATE.id_to_refcount_map[e]++},r.STDWEB_PRIVATE.decrement_refcount=function(e){var t=r.STDWEB_PRIVATE.id_to_refcount_map;if(0==--t[e]){var n=r.STDWEB_PRIVATE.id_to_ref_map,_=r.STDWEB_PRIVATE.ref_to_id_map_fallback,a=n[e];delete n[e],delete t[e],_.delete(a)}},r.STDWEB_PRIVATE.register_raw_value=function(e){var t=r.STDWEB_PRIVATE.last_raw_value_id++;return r.STDWEB_PRIVATE.id_to_raw_value_map[t]=e,t},r.STDWEB_PRIVATE.unregister_raw_value=function(e){delete r.STDWEB_PRIVATE.id_to_raw_value_map[e]},r.STDWEB_PRIVATE.get_raw_value=function(e){return r.STDWEB_PRIVATE.id_to_raw_value_map[e]},r.STDWEB_PRIVATE.alloc=function(e){return r.web_malloc(e)},r.STDWEB_PRIVATE.dyncall=function(e,t,n){return r.web_table.get(t).apply(null,n)},r.STDWEB_PRIVATE.utf8_len=function(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++t)),n<=127?++r:r+=n<=2047?2:n<=65535?3:n<=2097151?4:n<=67108863?5:6}return r},r.STDWEB_PRIVATE.prepare_any_arg=function(e){var t=r.STDWEB_PRIVATE.alloc(16);return r.STDWEB_PRIVATE.from_js(t,e),t},r.STDWEB_PRIVATE.acquire_tmp=function(e){var t=r.STDWEB_PRIVATE.tmp;return r.STDWEB_PRIVATE.tmp=null,t};var _=null,a=null,o=null,E=null,c=null,i=null,u=null,T=null;function f(){var e=r.instance.exports.memory.buffer;_=new Int8Array(e),a=new Int16Array(e),o=new Int32Array(e),E=new Uint8Array(e),c=new Uint16Array(e),i=new Uint32Array(e),u=new Float32Array(e),T=new Float64Array(e),r.HEAP8=_,r.HEAP16=a,r.HEAP32=o,r.HEAPU8=E,r.HEAPU16=c,r.HEAPU32=i,r.HEAPF32=u,r.HEAPF64=T}return Object.defineProperty(r,"exports",{value:{}}),{imports:{env:{__cargo_web_snippet_14097f70c739ef4a180a6ad82cadc458d11e85dc:function(e){e=r.STDWEB_PRIVATE.to_js(e),alert(e)},__cargo_web_snippet_285aac3fba72d67cb459d37d4d21aa4fb62598ba:function(e){r.STDWEB_PRIVATE.arena=e},__cargo_web_snippet_4d66721dd755374fa177d86d1c818bf74cc0be84:function(e,t){t=r.STDWEB_PRIVATE.to_js(t),r.STDWEB_PRIVATE.from_js(e,t)},__cargo_web_snippet_515598dacc2aae3ba84e7207f3f75bd28fcbbd15:function(e){return r.STDWEB_PRIVATE.acquire_js_reference(e)instanceof Object},__cargo_web_snippet_5c3091ae7fa9c42123eec37f64de99a5808e7ef2:function(e){return r.STDWEB_PRIVATE.acquire_js_reference(e)instanceof Array},__cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0:function(e){r.STDWEB_PRIVATE.decrement_refcount(e)},__cargo_web_snippet_8c32019649bb581b1b742eeedfc410e2bedd56a6:function(e,t){var n=r.STDWEB_PRIVATE.acquire_js_reference(e);r.STDWEB_PRIVATE.serialize_array(t,n)},__cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec:function(e){e=r.STDWEB_PRIVATE.to_js(e),r.STDWEB_PRIVATE.unregister_raw_value(e)},__cargo_web_snippet_f814fda503cb20016f78481f85431d48a7c4e731:function(e,t){var n=r.STDWEB_PRIVATE.acquire_js_reference(e);r.STDWEB_PRIVATE.serialize_object(t,n)},__cargo_web_snippet_ff5103e6cc179d13b4c7a785bdce2708fd559fc0:function(e){r.STDWEB_PRIVATE.tmp=r.STDWEB_PRIVATE.to_js(e)},__web_on_grow:f}},initialize:function(e){return Object.defineProperty(r,"instance",{value:e}),Object.defineProperty(r,"web_malloc",{value:r.instance.exports.__web_malloc}),Object.defineProperty(r,"web_free",{value:r.instance.exports.__web_free}),Object.defineProperty(r,"web_table",{value:r.instance.exports.__indirect_function_table}),r.exports.books_state=function(){return r.STDWEB_PRIVATE.acquire_tmp(r.instance.exports.books_state())},r.exports.books_dispatch=function(e,t){return r.STDWEB_PRIVATE.acquire_tmp(r.instance.exports.books_dispatch(r.STDWEB_PRIVATE.prepare_any_arg(e),r.STDWEB_PRIVATE.prepare_any_arg(t)))},r.exports.contact_state=function(){return r.STDWEB_PRIVATE.acquire_tmp(r.instance.exports.contact_state())},r.exports.contact_dispatch=function(e,t){return r.STDWEB_PRIVATE.acquire_tmp(r.instance.exports.contact_dispatch(r.STDWEB_PRIVATE.prepare_any_arg(e),r.STDWEB_PRIVATE.prepare_any_arg(t)))},r.exports.counter_state=function(){return r.STDWEB_PRIVATE.acquire_tmp(r.instance.exports.counter_state())},r.exports.counter_dispatch=function(e,t){return r.STDWEB_PRIVATE.acquire_tmp(r.instance.exports.counter_dispatch(r.STDWEB_PRIVATE.prepare_any_arg(e),r.STDWEB_PRIVATE.prepare_any_arg(t)))},f(),r.exports}}}(),t?WebAssembly.instantiate(r,n.imports).then(function(e){var r=n.initialize(e);return console.log("Finished loading Rust wasm module 'riot_rs_wasm'"),r}).catch(function(e){throw console.log("Error loading Rust wasm module 'riot_rs_wasm':",e),e}):(n=new WebAssembly.Instance(r,n.imports)).initialize(wasm_instance);var n}return fetch(r).then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.compile(e)}).then(function(e){return t(e,!0)})};
},{}],"ZoOd":[function(require,module,exports) {
module.exports=function(e){return require("./loader-d20feded5cd4b4e8741163e1095849df.js")(e)};
},{"./loader-d20feded5cd4b4e8741163e1095849df.js":"yhX2"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("cargo-web-d20feded5cd4b4e8741163e1095849df",require("ZoOd"));b.register("js",require("Yi9z"));b.load([]).then(function(){require("KfLy");});
},{}]},{},[0], null)
//# sourceMappingURL=/Home.f54d3a0e.js.map