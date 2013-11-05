;
(function($){
    "use strict";
    $.extend($.fn, {
        check: function (b) {
            if (b === undefined) {
                b = true;
            }
            return this.each(function () {
                this.checked = b;
            });
        },
        isNumber: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        trimObj: function trimCriteria(o) {
            if (!o) { return {}; }

            for (var t in o) {
                if (o.hasOwnProperty(t)) {
                    o[t] = $.trim(o[t]);
                }
            }
            return o;
        }
    });
})($);