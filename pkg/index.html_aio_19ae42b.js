var require,define;!function(e){if(!require){var r=document.getElementsByTagName("head")[0],t={},n={},i={},a={},o={},s={},u=function(e,t){if(!(e in a)){a[e]=!0;var n=document.createElement("script");if(t){var i=setTimeout(t,require.timeout);n.onerror=function(){clearTimeout(i),t()};var o=function(){clearTimeout(i)};"onload"in n?n.onload=o:n.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&o()}}return n.type="text/javascript",n.src=e,r.appendChild(n),n}},c=function(e,r,n){var i=t[e]||(t[e]=[]);i.push(r);var a,c=o[e]||o[e+".js"]||{},l=c.pkg;a=l?s[l].url:c.url||e,u(a,n&&function(){n(e)})};define=function(e,r){e=e.replace(/\.js$/i,""),n[e]=r;var i=t[e];if(i){for(var a=0,o=i.length;o>a;a++)i[a]();delete t[e]}},require=function(e){if(e&&e.splice)return require.async.apply(this,arguments);e=require.alias(e);var r=i[e];if(r)return r.exports;var t=n[e];if(!t)throw"[ModJS] Cannot find module `"+e+"`";r=i[e]={exports:{}};var a="function"==typeof t?t.apply(r,[require,r.exports,r]):t;return a&&(r.exports=a),r.exports&&!r.exports["default"]&&(r.exports["default"]=r.exports),r.exports},require.async=function(r,t,i){function a(e){for(var r,t=0,p=e.length;p>t;t++){var f=require.alias(e[t]);f in n?(r=o[f]||o[f+".js"],r&&"deps"in r&&a(r.deps)):f in u||(u[f]=!0,l++,c(f,s,i),r=o[f]||o[f+".js"],r&&"deps"in r&&a(r.deps))}}function s(){if(0===l--){for(var n=[],i=0,a=r.length;a>i;i++)n[i]=require(r[i]);t&&t.apply(e,n)}}"string"==typeof r&&(r=[r]);var u={},l=0;a(r),s()},require.resourceMap=function(e){var r,t;t=e.res;for(r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);t=e.pkg;for(r in t)t.hasOwnProperty(r)&&(s[r]=t[r])},require.loadJs=function(e){u(e)},require.loadCss=function(e){if(e.content){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e.content:t.innerHTML=e.content,r.appendChild(t)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",r.appendChild(n)}},require.alias=function(e){return e.replace(/\.js$/i,"")},require.timeout=5e3}}(this);
require.resourceMap({
  "res": {
    "components/zepto/zepto": {
      "url": "//yanhaijing.com/color/static/components/zepto/zepto_54c72eb.js",
      "type": "js",
      "pkg": "p4"
    },
    "components/zepto/event": {
      "url": "//yanhaijing.com/color/static/components/zepto/event_93e34d8.js",
      "type": "js",
      "deps": [
        "components/zepto/zepto"
      ],
      "pkg": "p4"
    },
    "components/zepto/ajax": {
      "url": "//yanhaijing.com/color/static/components/zepto/ajax_c8ac6f8.js",
      "type": "js",
      "deps": [
        "components/zepto/zepto"
      ],
      "pkg": "p4"
    },
    "components/zepto/form": {
      "url": "//yanhaijing.com/color/static/components/zepto/form_66f2941.js",
      "type": "js",
      "deps": [
        "components/zepto/zepto"
      ],
      "pkg": "p4"
    },
    "components/zepto/ie": {
      "url": "//yanhaijing.com/color/static/components/zepto/ie_9952db6.js",
      "type": "js",
      "deps": [
        "components/zepto/zepto"
      ],
      "pkg": "p4"
    },
    "components/zepto/main": {
      "url": "//yanhaijing.com/color/static/components/zepto/main_80883b5.js",
      "type": "js",
      "deps": [
        "components/zepto/event",
        "components/zepto/ajax",
        "components/zepto/form",
        "components/zepto/ie",
        "components/zepto/zepto"
      ],
      "pkg": "p4"
    },
    "components/zepto/touch": {
      "url": "//yanhaijing.com/color/static/components/zepto/touch_88b39ac.js",
      "type": "js",
      "deps": [
        "components/zepto/zepto"
      ],
      "pkg": "p4"
    },
    "modules/util/event/event.es": {
      "url": "//yanhaijing.com/color/static/util/event/event_1f8d7c3.js",
      "type": "js",
      "deps": [
        "components/zepto/main"
      ],
      "pkg": "p2"
    },
    "modules/html/score/score.es": {
      "url": "//yanhaijing.com/color/static/html/score/score_388c42e.js",
      "type": "js",
      "deps": [
        "components/zepto/main",
        "modules/util/event/event.es"
      ],
      "pkg": "p2"
    },
    "modules/lib/template/template": {
      "url": "//yanhaijing.com/color/static/lib/template/template_bd64230.js",
      "type": "js",
      "pkg": "p2"
    },
    "modules/util/template/template.es": {
      "url": "//yanhaijing.com/color/static/util/template/template_5aacd61.js",
      "type": "js",
      "deps": [
        "modules/lib/template/template"
      ],
      "pkg": "p2"
    },
    "modules/html/screen/screen.es": {
      "url": "//yanhaijing.com/color/static/html/screen/screen_820e08e.js",
      "type": "js",
      "deps": [
        "components/zepto/main",
        "components/zepto/touch",
        "modules/util/event/event.es",
        "modules/util/template/template.es"
      ],
      "pkg": "p2"
    },
    "modules/app/timer.es": {
      "url": "//yanhaijing.com/color/static/app/timer_dca289b.js",
      "type": "js",
      "deps": [
        "modules/util/event/event.es"
      ],
      "pkg": "p3"
    },
    "modules/app/index.es": {
      "url": "//yanhaijing.com/color/static/app/index_513b21d.js",
      "type": "js",
      "deps": [
        "components/zepto/main",
        "modules/util/event/event.es",
        "modules/util/template/template.es",
        "modules/app/timer.es"
      ],
      "pkg": "p3"
    }
  },
  "pkg": {
    "p4": {
      "url": "//yanhaijing.com/color/pkg/components_4c5a089.js",
      "type": "js"
    },
    "p2": {
      "url": "//yanhaijing.com/color/pkg/modules_0239121.js",
      "type": "js"
    },
    "p3": {
      "url": "//yanhaijing.com/color/pkg/aio_f7a687f.js",
      "type": "js"
    }
  }
});
