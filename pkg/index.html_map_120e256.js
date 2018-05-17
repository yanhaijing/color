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