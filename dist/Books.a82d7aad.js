parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"e5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../Cargo.toml"));function t(e){return e&&e.__esModule?e:{default:e}}var r=e.default.books_state,n=e.default.books_dispatch;console.log(e.default);var o={css:null,exports:{add:function(){this.update(n(this.state,arguments[0]?{add:arguments[0]}:"add"))},remove:function(){this.update(n(this.state,arguments[0]?{remove:arguments[0]}:"remove"))},highlight:function(){this.update(n(this.state,arguments[0]?{highlight:arguments[0]}:"highlight"))},onMounted:function(){this.update(r())}},template:function(e,t,r,n){return e('<p expr12="expr12"> </p><button expr13="expr13">Add +</button><button expr14="expr14">Remove -</button><button expr15="expr15">Highilight</button>',[{redundantAttribute:"expr12",selector:"[expr12]",expressions:[{type:t.TEXT,childNodeIndex:0,evaluate:function(e){return JSON.stringify(e.state.books)}}]},{redundantAttribute:"expr13",selector:"[expr13]",expressions:[{type:t.EVENT,name:"onclick",evaluate:function(e){return function(){return e.add({id:1,title:"A grain of wheat by Ngugi wa Thiong'o",price:100,highlighted:!1})}}}]},{redundantAttribute:"expr14",selector:"[expr14]",expressions:[{type:t.EVENT,name:"onclick",evaluate:function(e){return function(){return e.remove(1)}}}]},{redundantAttribute:"expr15",selector:"[expr15]",expressions:[{type:t.EVENT,name:"onclick",evaluate:function(e){return function(){return e.highlight(1)}}}]}])},name:"app"};exports.default=o;
},{"../Cargo.toml":"Jugo"}]},{},[], null)
//# sourceMappingURL=/Books.a82d7aad.js.map