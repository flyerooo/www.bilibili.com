/*
BUILT_AT: 2021年3月11日 16:48
*/
(("undefined" != typeof self ? self : this).webpackJsonppush_message = ("undefined" != typeof self ? self : this).webpackJsonppush_message || []).push([
    [1], {
        146: function(t, e, n) {
            "use strict";
            var i = n(1),
                r = n(117).charAt;
            i({
                target: "String",
                proto: !0
            }, {
                at: function(t) {
                    return r(this, t)
                }
            })
        },
        21: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "b", (function() {
                return r
            })), n.d(e, "c", (function() {
                return c
            }));
            n(50), n(52), n(7), n(24), n(25), n(76);
            var i = {
                getItem: function(t) {
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                },
                setItem: function(t, e, n, i, r, o) {
                    if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
                    var a = "";
                    if (n) switch (n.constructor) {
                        case Number:
                            a = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                            break;
                        case String:
                            a = "; expires=" + n;
                            break;
                        case Date:
                            a = "; expires=" + n.toUTCString()
                    }
                    return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + a + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (o ? "; secure" : ""), !0
                },
                removeItem: function(t, e, n) {
                    return !(!t || !this.hasItem(t)) && (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (e ? "; path=" + e : ""), !0)
                },
                hasItem: function(t) {
                    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                },
                keys: function() {
                    for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = 0; e < t.length; e++) t[e] = decodeURIComponent(t[e]);
                    return t
                }
            };
            n(53), n(31);
            var r = function() {
                    try {
                        if ("undefined" != typeof navigator && /Firefox\/(\d+)/i.test(navigator.userAgent)) return navigator.userAgent.match(/Firefox\/(\d+)/i)[1] >= 65;
                        var t = document.createElement("canvas");
                        return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp")
                    } catch (t) {
                        return !1
                    }
                }(),
                o = (n(86), "undefined" != typeof window ? window.navigator.userAgent : ""),
                a = {
                    myBrowser: "unknown",
                    behaviors: [function() {
                        return !!o.match(/Maxthon\/[4]/) && "Maxthon 4"
                    }, function() {
                        return !!o.match(/TheWorld/) && "TheWorld"
                    }, function() {
                        return !!o.match(/Firefox\/\d.*/) && "Firefox"
                    }, function() {
                        return !(!o.match(/AppleWebKit\/\d.*.Chrome\/\d.*.Safari\/\d/) || "Google Inc." !== window.navigator.vendor || !window.chrome) && "Chrome"
                    }, function() {
                        return !!o.match(/Opera.\d.*.Presto\/\d/) && "Opera Presto"
                    }, function() {
                        return !!o.match(/OPR\/\d{2}/) && "Opera Modern"
                    }, function() {
                        return !!o.match(/MSIE [6-8].+/) && "IE Legacy"
                    }, function() {
                        return !(!o.match(/MSIE [9].+/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 9"
                    }, function() {
                        return !(!o.match(/MSIE [10].+/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 10"
                    }, function() {
                        return !(!o.match(/Trident\/[7].*.rv:11/) || "function" != typeof window.ScriptEngine || "JScript" !== window.ScriptEngine()) && "IE 11"
                    }, function() {
                        return !(!o.match(/Edge\/\d+\.\d+/) || "function" != typeof window.StyleMedia) && "Edge"
                    }, function() {
                        return !(!o.match(/AppleWebKit\/\d.*.Mobile.*Safari\/\d+/) || "Apple Computer, Inc." !== window.navigator.vendor) && "SafariMobile"
                    }, function() {
                        return !(!o.match(/AppleWebKit\/\d.*.Safari\/\d+/) || "Apple Computer, Inc." !== window.navigator.vendor) && "Safari"
                    }]
                };
            var c = function() {
                return "undefined" == typeof window ? "" : (a.behaviors.some((function(t) {
                    var e = t();
                    return a.myBrowser = e || "unknown", e
                })), a.myBrowser)
            };
            n(61), n(27), n(162), n(30)
        },
        5: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return B
            }));
            n(4), n(13);
            var i = n(28),
                r = n(95),
                o = n.n(r).a.create({
                    timeout: "undefined" == typeof window ? 1e3 : 0
                });
            n(51), n(74), n(75), n(14), n(32), n(45), n(46);

            function a(t) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var u = function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "对不起，服务器开小差了~ (ಥ﹏ಥ)",
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "error",
                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -8888,
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
                    if (c(this, t), "object" === a(r)) {
                        var d = "对不起，服务器开小差了~ (ಥ﹏ಥ)";
                        r.response ? d = "".concat(r.response.statusText, " ").concat(r.response.status) : "ECONNABORTED" === r.code && (d = "接口超时，稍后再试试吧~ (ಥ﹏ಥ)"), this.msg = d
                    } else this.msg = r;
                    this.type = o, this.code = u, this.data = s, this.url = n, this.payload = i, this.cost = e
                },
                s = n(21),
                d = Object(s.c)(),
                f = "IE 9" === d || "IE Legacy" === d,
                l = f || "IE 10" === d || "IE 11" === d;
            n(7), n(31), n(25);
            var p = {};
            var h = {},
                m = function() {
                    var t = Math.random();
                    return h[t] = Date.now(), t
                },
                g = function(t) {
                    if (!t) return 0;
                    if (h[t]) {
                        var e = Date.now() - h[t];
                        return delete h[t], e
                    }
                    return 0
                };
            n(52), n(24);
            var w = function(t, e) {
                    var n = new RegExp("[?&]".concat(e, "=([^&#]+)"));
                    return (t.match(n) || [])[1] || ""
                },
                v = (n(18), n(8)),
                y = n(39),
                b = n.n(y);

            function S(t) {
                if (!t) return t;
                var e = t;
                if (!("undefined" != typeof FormData && e instanceof FormData)) {
                    var n = {};
                    if ("undefined" != typeof window) {
                        var i = w(window.location.href, "lang");
                        if (i) {
                            var r = "iphone";
                            (/Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.userAgent)) && (r = "android"), n.lang = i, n.mobi_app = "".concat(r, "_i")
                        }
                    }
                    t = e = Object.assign(n, e), l && (t._ = (new Date).getTime())
                }
                return t
            }
            n(121);

            function A(t, e) {
                if ("string" == typeof t) {
                    var n = t.replace(/("\w*":)\s*(\d{16}\d*)/g, '$1"$2"').replace(/(\\"\w*\\":)\s*(\d{16}\d*)/g, '$1\\"$2\\"').replace(/("\w*":)\s*(\[\s*(\d{16}\d*)\s*(,\s*(\d{16}\d*)\s*)*])/g, (function(t, e, n) {
                        return "".concat(e).concat(n.trim().replace(/\[\s*/, '["').replace(/\s*]\s*/, '"]').replace(/\s*,\s*/g, '","'))
                    })).replace(/(\\"\w*\\":)\s*(\[\s*(\d{16}\d*)\s*(,\s*(\d{16}\d*)\s*)*])/g, (function(t, e, n) {
                        return "".concat(e).concat(n.trim().replace(/\[\s*/, '[\\"').replace(/\s*]/, '\\"]').replace(/\s*,\s*/g, '\\",\\"'))
                    }));
                    if (e) try {
                        t = JSON.parse(n)
                    } catch (t) {} else t = n
                }
                return t
            }
            var I = function(t) {
                    return A(t, !0)
                },
                C = n(96),
                O = n.n(C);
            n(53);

            function _(t, e, n, i, r, o) {
                var a = o ? t : t.data;
                return new Promise((function(t, o) {
                    var c, s, d = function() {
                        return 0 === a[c]
                    };
                    e.indexOf(v.a.SPACE) >= 0 ? (c = "status", s = "result", d = function() {
                        return !0 === a[c]
                    }) : e.indexOf(v.a.BANGUMI) >= 0 ? (c = "code", s = "result") : e.indexOf(v.a.PASSPORT) >= 0 ? (c = "code", s = "access_info") : (c = "code", s = "data"), void 0 === a || void 0 === a[c] ? o(new u(r, e, n)) : d() ? t(new u(r, e, n, "请求成功", "success", 0, i ? a : a[s])) : o(new u(r, e, n, a.message || a.msg || "电波无法到达~ ".concat(a.message || a.msg || a.code), "caution", a[c], a[s]))
                }))
            }
            n(164), n(165);

            function E(t, e, n) {
                return (E = x() ? Reflect.construct : function(t, e, n) {
                    var i = [null];
                    i.push.apply(i, e);
                    var r = new(Function.bind.apply(t, i));
                    return n && j(r, n.prototype), r
                }).apply(null, arguments)
            }

            function x() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function j(t, e) {
                return (j = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function k(t, e, n) {
                for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++) r[o - 3] = arguments[o];
                return Promise.reject(E(u, [t, e, n].concat(r)))
            }
            n(27), n(43), n(30);

            function P(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var D = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.store = {};
                        var e = {},
                            n = {};
                        if ("undefined" != typeof window && window.localStorage) try {
                            e = JSON.parse(window.localStorage.getItem("bpapi_cache")) || e
                        } catch (t) {}
                        var i = (new Date).getTime();
                        Object.keys(e).forEach((function(t) {
                            var r = e[t];
                            r && i - r.ts < r.ttl && i - r.ts < 36e4 && (n[t] = r)
                        })), n.uniqueKey = e.uniqueKey, this.store = n, this.setLocalCache()
                    }
                    var e, n, i;
                    return e = t, (n = [{
                        key: "set",
                        value: function(t, e, n, i, r) {
                            var o = this;
                            return (!r || this.store.uniqueKey !== r || "0" === r) && n > 0 && (this.clearCache(), this.store = {}), r && (this.uniqueKey = r, this.store.uniqueKey = r), new Promise((function(a, c) {
                                try {
                                    var u = {};
                                    u.response = e, u.ttl = n > 0 ? n : 0, u.ts = (new Date).getTime(), o.store[t] = u, i && n > 0 && r && "0" !== r && o.setLocalCache(), a({
                                        status: "success"
                                    })
                                } catch (t) {
                                    c({
                                        status: "failed",
                                        data: t
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "get",
                        value: function(t, e, n) {
                            var i = this;
                            return (!n || this.store.uniqueKey !== n || "0" === n) && e > 0 && (this.clearCache(), this.store = {}), n && (this.uniqueKey = n, this.store.uniqueKey = n), new Promise((function(n, r) {
                                try {
                                    var o = i.store[t],
                                        a = (new Date).getTime();
                                    o && a - o.ts < (e > 0 ? e : 0) && a - o.ts < 36e4 ? n({
                                        status: "success",
                                        data: o.response
                                    }) : r({
                                        status: "failed",
                                        data: o
                                    })
                                } catch (t) {
                                    r({
                                        status: "failed",
                                        data: t
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "clearCache",
                        value: function() {
                            "undefined" != typeof window && window.localStorage && window.localStorage.removeItem("bpapi_cache")
                        }
                    }, {
                        key: "setLocalCache",
                        value: function() {
                            this.uniqueKey && (this.store.uniqueKey = this.uniqueKey), "undefined" != typeof window && window.localStorage && this.uniqueKey && window.localStorage.setItem("bpapi_cache", JSON.stringify(this.store))
                        }
                    }]) && P(e.prototype, n), i && P(e, i), t
                }(),
                R = function() {
                    return new D
                }(),
                T = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("undefined" != typeof FormData && t instanceof FormData) {
                        for (var n in e) e.hasOwnProperty(n) && (FormData.prototype.set ? t.set(n, e[n]) : t.append(n, e[n]));
                        return t
                    }
                    return Object.assign(t, e)
                },
                M = new("undefined" != typeof window && window.BiliAjax ? window.BiliAjax.default : O.a)({
                    transformResponse: function(t) {
                        return A(t, !1)
                    },
                    oldAppUseAxios: !0
                }),
                N = function(t) {
                    if ("undefined" != typeof FormData && t.data instanceof FormData) return o(S(t));
                    var e = Object.assign({}, t);
                    switch (delete e.data, delete e.url, t.method.toLowerCase()) {
                        case "get":
                            return M.get(t.url, S(t.data), e);
                        case "post":
                            return M.post(t.url, S(t.data), e);
                        default:
                            return o(S(t))
                    }
                };

            function K(t) {
                var e = t.useBridgeProxy,
                    n = m(),
                    r = 0,
                    a = t.url + JSON.stringify(t.data || "");
                return R.get(a, t.ttl, String(t.cache_key || "")).then((function(i) {
                    return r = g(n), _(i.data, t.url, t.data, t.needOriginal, r, e)
                })).catch((function() {
                    return function(t) {
                        return new Promise((function(e) {
                            t.addPlatInfo ? i.inBiliApp ? t.useBridgeProxy ? e(t) : i.biliBridge.callNative({
                                method: "global.getContainerInfo",
                                callback: function(n) {
                                    t.data = T(t.data, {
                                        build: n.build,
                                        mobi_app: n.mobi_app
                                    }), e(t)
                                }
                            }) : (t.data = T(t.data, {
                                build: 0,
                                mobi_app: "web"
                            }), e(t)) : e(t)
                        }))
                    }(t).then((function(t) {
                        return function(t, e) {
                            var n = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return function() {
                                if (p[t] && i > 0) return p[t];
                                setTimeout((function() {
                                    p[t] = null
                                }), i);
                                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                                return p[t] = e.apply(n, o), p[t]
                            }
                        }(a, e ? N : o, t.throttleInterval)(t)
                    })).then((function(i) {
                        return R.set(a, i, t.ttl, t.localCache, String(t.cache_key || "")).then((function() {
                            return r = g(n), _(i, t.url, t.data, t.needOriginal, r, e)
                        }))
                    }), (function() {
                        r = g(n);
                        for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                        return k.apply(void 0, [r, t.url, t.data].concat(i))
                    }))
                }))
            }
            var F = n(97),
                L = n.n(F);
            i.inBiliApp && (Object(i.initEnv)(), i.biliBridge.callNative({
                method: "global.import",
                data: {
                    namespace: "net"
                }
            })), o.interceptors.request.use((function(t) {
                if (!t) return t;
                var e = t.method,
                    n = t.url,
                    i = t.data;
                t.withCredentials = !0;
                var r = i || {},
                    o = "string" == typeof e && "post" === e.toLowerCase();
                if (o) {
                    var a = s.a.getItem("bili_jct") || "";
                    r.csrf_token = a, r.csrf = a
                }
                if (!("undefined" != typeof FormData && r instanceof FormData)) {
                    var c = {};
                    if ("undefined" != typeof window) {
                        var u = w(window.location.href, "lang");
                        if (u) {
                            var d = "iphone";
                            (/Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.userAgent)) && (d = "android"), c.lang = u, c.mobi_app = "".concat(d, "_i")
                        }
                    }
                    r = Object.assign(c, r), o ? t.data = Object(y.stringify)(r) : (t.params = r, l && (t.params._ = (new Date).getTime()), delete t.data), "undefined" == typeof window && /^\/\//.test(n) && (t.url = "http:".concat(n))
                }
                return t
            }));
            var B = function(t) {
                "undefined" == typeof window || window.Promise || console.warn("No window.Promise. @bplus-common/components.bpapi need a promise polyfill.");
                var e = (t.method || "get").toLowerCase(),
                    n = f && ! function(t) {
                        if ("undefined" == typeof window) return !1;
                        var e = t.replace(/^(https?:)?(\/\/)?/, "").match(window.location.hostname);
                        return e && 0 === e.index
                    }(t.url),
                    i = "jsonp" === e;
                return !i && n ? k(t.url, t.data, "少年啊，你的浏览器太老了辣", "caution", -8889) : (t.method = e, t.transformResponse = t.transformResponse || [I], i ? function(t) {
                    var e = m(),
                        n = 0,
                        i = t.url,
                        r = /^(http:|https:)?\/\/api\.(live)|(vc)/.test(i),
                        o = t.data && "[object Object]" === t.data.toString();
                    t.jsonpCallback || !o || "type" in t.data || "jsonp" in t.data ? t.jsonpCallback || o || (t.data = {
                        type: "jsonp",
                        jsonp: "jsonp"
                    }) : (t.data.type = "jsonp", t.data.jsonp = "jsonp");
                    var a = t.data || {},
                        c = {},
                        u = "zh_CN";
                    if ("undefined" != typeof window && (u = w(window.location.href, "lang"))) {
                        c.lang = u;
                        var s = "iphone";
                        (/Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.userAgent)) && (s = "android"), "zh_CN" !== u && (c.mobi_app = "".concat(s, "_i"))
                    }
                    a = Object.assign(c, a);
                    var d = t.data && t.jsonpCallback || (r ? "_cb" : "callback"),
                        f = b.a.stringify(a),
                        l = f.length > 0 ? "".concat(i, "?").concat(f) : "".concat(i),
                        p = i + JSON.stringify(t.data || "");
                    return R.get(p, t.ttl, String(t.cache_key || "")).then((function(r) {
                        return n = g(e), _({
                            data: r.data
                        }, i, t.data, t.needOriginal, n)
                    })).catch((function() {
                        return L()(l, {
                            jsonpCallback: d
                        }).then((function(r) {
                            return r.ok ? r.json().then((function(r) {
                                return R.set(p, r, t.ttl, t.localCache, String(t.cache_key || "")).then((function() {
                                    return n = g(e), _({
                                        data: r
                                    }, i, t.data, t.needOriginal, n)
                                }))
                            }), (function() {
                                n = g(e);
                                for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                                return k.apply(void 0, [n, t.url, t.data].concat(r))
                            })) : k(n = g(e), t.url, t.data)
                        }), (function() {
                            n = g(e);
                            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                            return k.apply(void 0, [n, t.url, t.data].concat(r))
                        }))
                    }))
                }(t) : K(t))
            }
        },
        8: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var i = {
                API_LIVE: "//api.live.bilibili.com",
                API_VC: "//api.vc.bilibili.com",
                API_MAIN: "//api.bilibili.com",
                API_VC_CO: "//api.vc.bilibili.co",
                API_MAIN_CO: "//api.bilibili.co",
                MAIN: "//www.bilibili.com",
                SPACE: "//space.bilibili.com",
                PASSPORT: "//passport.bilibili.com",
                BANGUMI: "//bangumi.bilibili.com",
                DATA: "//data.bilibili.com",
                T: "//t.bilibili.com",
                H: "//h.bilibili.com",
                VC: "//vc.bilibili.com",
                APP: "//app.bilibili.com",
                MESSAGE: "//message.bilibili.com",
                LINK: "//link.bilibili.com",
                M: "//m.bilibili.com",
                LIVE: "//live.bilibili.com"
            }
        }
    }
]);