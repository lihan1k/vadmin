/// <reference path="common.js" />
$(function () {
    // el 全局 事件内部不允许使用
    var el;
    /* ===Start ==========
       自定义分页数    */
    el = $("#glb_pagingsize");
    if (el.length) {
        var c = ~~el.attr("count");
        el[0].options.add(new Option("全部", 1000000));
        if(_tmp_pagingsize_addoption(el, c, 10))
            if(_tmp_pagingsize_addoption(el, c, 20))
                if(_tmp_pagingsize_addoption(el, c, 50))
                    if(_tmp_pagingsize_addoption(el, c, 100))
                        _tmp_pagingsize_addoption(el, c, 200)
        el.val(el.attr("value"));
        if (!el.val())
            el[0].selectedIndex = 0;
        el.on("change", function () {
            var p = $(this).attr("param") || "";
            if (p)
                p += "&";
            window.location.href = "{0}?{1}pagingsize={2}".format(window.location.pathname, p, this.value);
        });
    }
    /* === End  ==========
       ===Start ==========
       搜索    */
    el = $("form.searchform");
    if (el.length) {
        var btn = el.find("input[type='submit']");
        if (btn.length) {
            btn.on("click", function () {
                var a = el.serializeArray();
                var pstr = [el[0].action];
                $.each(a, function () {
                    if (this.value)
                      pstr.push(this.name + "=" + this.value);
                });
                window.location.href = pstr.join("&");
                return false;
            })
        }
        el.find("select[data-val]").each(function () {
            $(this).val($(this).data("val"));
        })
    }
    /* === End  ========== */
})
function _tmp_pagingsize_addoption(e, c, n) {
    if (n < c) {
        e[0].options.add(new Option("每页 " + n + " 条", n));
        return true;
    }
    return false;
}

function selectOptions(d, e, tid, l, f) {
    if (!l) l = 0;
    e.options.length = l;
    postjson(d, function (r) {
        for (var i = 0; i < r.length; i++) {
            e.options.add(new Option(r[i].name, r[i].id));
        }
        $(e).val(tid);
        if (!$(e).val())
            e.selectedIndex = 0;
        $(e).change();
        if (f) f();
    })
}
var tabsearchdate = {
     click: function (f, d) {
        d = d || {}
        d.flag = d.flag || ".searchdate";
        $(d.flag + ">li:not('.untime')>a").click(function () {
            if (f) f($(this).data("key"));
        })
    },
    initform: function (f, d1, d2, e1, e2, e3) {
        var el, el_d1, el_d2;
        if (typeof f == "object") { el = f; } else { el = $(f) }
        if (typeof d1 == "object") { el_d1 = d1; } else { el_d1 = el.find(d1) }
        if (typeof d2 == "object") { el_d2 = d2; } else { el_d2 = el.find(d2) }
        var el_1 = $(e1), el_2 = $(e2), el_3 = $(e3);
        var f_el1 = function () { tabsearchdate.e_lastmonth(el, el_d1, el_d2) },
            f_el2 = function () { tabsearchdate.e_lastthreemonth(el, el_d1, el_d2) },
            f_el3 = function () { tabsearchdate.e_prevmonth(el, el_d1, el_d2) };
        //选中项 绑定事件
        var d_d1 = new Date(el_d1.val()), d_d2 = new Date(el_d2.val());
        var i_diffd = $.dateDiff(d_d1, d_d2, 'd');
        if (d_d1.getDate() == 1 && $.dateDiff(d_d1,new Date(),'m') ==1 && $.dateDiff(d_d1, $.dateAdd(d_d2, 'd', 1),'m') == 1) {
            el_3.parent().addClass("active");
            el_1.click(f_el1);
            el_2.click(f_el2);
        }
        else if (i_diffd >= 89 && i_diffd <= 93) {
            el_2.parent().addClass("active");
            el_1.click(f_el1);
            el_3.click(f_el3);
        }
        else if (i_diffd >= 28 && i_diffd <= 31)
        {
            el_1.parent().addClass("active");
            el_2.click(f_el2);
            el_3.click(f_el3);
        }
        else {
            el_1.click(f_el1);
            el_2.click(f_el2);
            el_3.click(f_el3);
        }
    },
    initA: function (d1, d2, e1, e2, e3, sf) {
        // 近一月 近三月 上月
        this.init_E(d1, d2, e1, e2, e3
            , tabsearchdate.setlastmonth
            , tabsearchdate.setlastthreemonth
            , tabsearchdate.setprevmonth
            , sf);
        this._focustab(d1, d2, [
            [e1, "lastmonth"],
            [e2, "lastthreemonth"],
            [e3, "prevmonth"],
        ]);
    },
    initB: function (d1, d2, e1, e2, e3, sf) {
        // 今日 近一月 上月
        this.init_E(d1, d2, e1, e2, e3
            , tabsearchdate.settoday
            , tabsearchdate.setlastmonth
            , tabsearchdate.setprevmonth
            , sf);
        this._focustab(d1, d2, [
            [e1, "today"],
            [e2, "lastmonth"],
            [e3, "prevmonth"],
        ]);
    },
    initC: function (d1, d2, e1, e2, e3, sf) {
        // 近一周 近一月 上月
        this.init_E(d1, d2, e1, e2, e3
            , tabsearchdate.setlastweek
            , tabsearchdate.setlastmonth
            , tabsearchdate.setprevmonth
            , sf);
        this._focustab(d1, d2, [
            [e1, "lastweek"],
            [e2, "lastmonth"],
            [e3, "prevmonth"],
        ]);
    },
    init_E: function (d1, d2, e1, e2, e3, f1, f2, f3, sf) {
        var el_1 = $(e1), el_2 = $(e2), el_3 = $(e3);
        el_1[0].onclick = function () { f1(d1, d2); if (sf) sf(); };
        el_2[0].onclick = function () { f2(d1, d2); if (sf) sf(); };
        el_3[0].onclick = function () { f3(d1, d2); if (sf) sf(); };
    },
    e_lastweek: function (f, d1, d2) {
        this._base(f, d1, d2,"w",1);
    },
    e_lastmonth: function (f, d1, d2) {
        this._base(f, d1, d2, "m", 1);
    },
    e_lastthreemonth: function (f, d1, d2) {
        this._base(f, d1, d2, "q", 1);
    },
    e_prevmonth: function (f, d1, d2) {
        this._base(f, d1, d2, 0, 0, function (d_tod) {
            var d_nfisrt = $.dateAdd(d_tod, 'd', -(d_tod.getDate() - 1));
            return [$.dateAdd(d_nfisrt, 'm', -1), $.dateAdd(d_nfisrt, 'd', -1)];
        });
    },
    _base: function (f, d1, d2, exp, expval, fn) {
        var _lastdate;
        var el = $(f);
        var el_d1;
        if (typeof d1 == "object")
            el_d1 = d1;
        else {
            el_d1 = el.find(d1);
        }
        this.setdate(el_d1, d2, exp, expval, fn);
        el.submit();
    },
    setyesterday: function (d1, d2, v) {
        tabsearchdate.setdate(d1, d2, 0, 0, function (_tdoay) {
            var _t = $.dateAdd(_tdoay, "d", -1);
            return [_t, $.dateAdd(_t, "d", v || 0)];
        });
    },
    settoday: function (d1, d2, v) {
        tabsearchdate.setdate(d1, d2, 0, 0, function (_tdoay) {
            return [_tdoay, $.dateAdd(_tdoay, "d", v || 0)];
        });
    },
    setlastweek: function (d1, d2) {
        tabsearchdate.setdate(d1, d2, "d", 6);
    },
    setprevmonth: function (d1, d2, v) {
        tabsearchdate.setdate(d1, d2, 0, 0, function (d_tod) {
            var d_nfisrt = $.dateAdd(d_tod, 'd', -(d_tod.getDate() - 1));
            return [$.dateAdd(d_nfisrt, 'm', -1), $.dateAdd(d_nfisrt, 'd', -1 + (v || 0))];
        });
    },
    setcurrmonth: function (d1, d2, v) {
        tabsearchdate.setdate(d1, d2, 0, 0, function (d_tod) {
            var d_nfisrt = $.dateAdd(d_tod, 'd', -(d_tod.getDate() - 1));
            return [d_nfisrt, $.dateAdd(d_tod, "d", v || 0)];
        });
    },
    setlastmonth: function (d1, d2) {
        tabsearchdate.setdate(d1, d2, "m", 1);
    },
    setlastthreemonth: function (d1, d2) {
        tabsearchdate.setdate(d1, d2, "q", 1);
    },
    setcurrweek: function (d1, d2, v) {
        tabsearchdate.setdate(d1, d2, 0, 0, function (d_tod) {
            var d = d_tod.getUTCDay();
            var sd = $.dateAdd(d_tod, 'd', -d + 1);
            return [sd, $.dateAdd(d_tod, 'd', v || 0)];
        });
    },
    setprevweek: function (d1, d2, v) {
        tabsearchdate.setdate(d1, d2, 0, 0, function (d_tod) {
            var d = d_tod.getUTCDay();
            var sd = $.dateAdd(d_tod, 'd', -d - 6);
            return [sd, $.dateAdd(sd, 'd', 6 + (v || 0))];
        });
    },

    setdate: function (d1, d2, exp, expval, fn) {
        var el_d1 = $(d1);
        var s_today = el_d1.data("d");
        var _tdoay = s_today ? new Date(s_today) : new Date(),
            _lastdate;
        if (!exp && fn) {
            var a_dts = fn(_tdoay);
            _lastdate = a_dts[0];
            _tdoay = a_dts[1];
        }
        else {
            _lastdate = $.dateAdd(_tdoay, exp, -expval);
        }
        el_d1.val($.getDatePart(_lastdate).replace(/\//g, '-'));
        $(d2).val($.getDatePart(_tdoay).replace(/\//g, '-'));
    },
    _focustab: function (d1, d2, c) {
        var res = tabsearchdate._tabpos(d1, d2);
        for (var i = 0; i < c.length; i++) {
            if (res[c[i][1]]) {
                $(c[i][0]).parent().addClass("active").siblings().removeClass("active");
            }
        }
    },
    _tabpos: function (d1, d2) {
        var r = { today: 0, lastweek: 0, lastmonth: 0, lastthreemonth: 0, prevmonth: 0 };
        var el_d1, el_d2;
        if (typeof d1 == "object") { el_d1 = d1; } else { el_d1 = el.find(d1) }
        if (typeof d2 == "object") { el_d2 = d2; } else { el_d2 = el.find(d2) }
        var d_d1 = new Date(el_d1.val()), d_d2 = new Date(el_d2.val());
        var s_today = el_d1.data("d");
        var _tdoay = s_today ? new Date(s_today) : new Date();
        var i_diffd = $.dateDiff(d_d1, d_d2, 'd');
        if ($.getDatePart(d_d1) == $.getDatePart(d_d2) && $.getDatePart(d_d2) == $.getDatePart(_tdoay)) {
            r.today = 1;
        }
        else if (d_d1.getDate() == 1 && $.dateDiff(d_d1, _tdoay, 'm') == 1 && $.dateDiff(d_d1, $.dateAdd(d_d2, 'd', 1), 'm') == 1) {
            r.prevmonth = 1;
        }
        else if (i_diffd >= 89 && i_diffd <= 92) {
            r.lastthreemonth = 1;
        }
        else if (i_diffd >= 28 && i_diffd <= 31) {
            r.lastmonth = 1;
        }
        else if (i_diffd == 6) {
            r.lastweek = 1;
        }
        return r;
    }
}
var tabviewchart = {
    init: function (d) {
        d = d || {};
        d.flag = d.flag || ".charttabs"
        var el_as = $(d.flag + ">li>a");
        if (d && typeof (d)) {
            // 自定义事件
            for (var k in d) {
                el_as.filter("[href='#{0}']".format(k)).on("click", d[k]);
            }
        }
        var el_hd_tp = $('.searchform input[name="sfctab"]');
        if (el_hd_tp.length) {
            // 搜索表单记录当前栏目
            el_as.on("click", function () {
                el_hd_tp.val(this.getAttribute("href"));
            })
        }
        // 激活指定栏目
        var s_fctab = urlparamval("sfctab");
        if (s_fctab) {
            el_as.filter("[href='{0}']".format(s_fctab)).click();
        }
    }
}

function loadtogglebutton(d) {
    if (!jQuery().toggleButtons) {
        return;
    }
    d = d || {};
    if (!d.flag) d.flag = ".info-toggle-button";
    if (!d.text1) d.text1 = "已启用";
    if (!d.text2) d.text2 = "已停用";
    $(d.flag).toggleButtons({
        style: {
            enabled: "info",
            disabled: ""
        },
        label: {
            enabled: d.text1,
            disabled: d.text2
        }
    });
}