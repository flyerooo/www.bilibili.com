/*
BUILT_AT: 2021年3月11日 16:48
*/
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.push_message = t() : e.push_message = t()
}("undefined" != typeof self ? self : this, (function() {
    return function(e) {
        function t(t) {
            for (var o, a, s = t[0], u = t[1], f = t[2], l = 0, p = []; l < s.length; l++) a = s[l], Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]), r[a] = 0;
            for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
            for (c && c(t); p.length;) p.shift()();
            return i.push.apply(i, f || []), n()
        }

        function n() {
            for (var e, t = 0; t < i.length; t++) {
                for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
                    var u = n[s];
                    0 !== r[u] && (o = !1)
                }
                o && (i.splice(t--, 1), e = a(a.s = n[0]))
            }
            return e
        }
        var o = {},
            r = {
                2: 0
            },
            i = [];

        function a(t) {
            if (o[t]) return o[t].exports;
            var n = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
        }
        a.m = e, a.c = o, a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function(e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) a.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "//s2.hdslb.com/bfs/static/blive/blfe-message-navbar/";
        var s = ("undefined" != typeof self ? self : this).webpackJsonppush_message = ("undefined" != typeof self ? self : this).webpackJsonppush_message || [],
            u = s.push.bind(s);
        s.push = t, s = s.slice();
        for (var f = 0; f < s.length; f++) t(s[f]);
        var c = u;
        return i.push([263, 0, 1]), n()
    }({
        219: function(e, t, n) {},
        263: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(10),
                r = n.n(o),
                i = (n(219), n(32), n(109), n(50), n(18), n(43), n(4), n(13), n(45), n(146), n(46), n(3)),
                a = n.n(i),
                s = (n(47), n(5)),
                u = (n(53), function(e) {
                    var t = "" + document.cookie,
                        n = t.indexOf(e + "=");
                    if (-1 == n || "" == e) return "";
                    var o = t.indexOf(";", n);
                    return -1 == o && (o = t.length), unescape(t.substring(n + e.length + 1, o))
                }),
                f = {
                    "zh-CN": {
                        replyMe: "回复我的",
                        atMe: "@我的",
                        praiseMe: "收到的赞",
                        system: "系统通知",
                        whisper: "我的消息"
                    },
                    "zh-TW": {
                        replyMe: "回复我的",
                        atMe: "@我的",
                        praiseMe: "收到的讚",
                        system: "系統通知",
                        whisper: "我的消息"
                    }
                };

            function c(e) {
                return (t = u("LNG") || "zh-CN", f[t] || {})[e] || e;
                var t
            }
            var l = n(63),
                p = n.n(l);

            function d(e, t, n, o, r, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(u) : Promise.resolve(u).then(o, r)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, r) {
                        var i = e.apply(t, n);

                        function a(e) {
                            d(i, o, r, a, s, "next", e)
                        }

                        function s(e) {
                            d(i, o, r, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            var y = {
                    data: function() {
                        return {
                            uid: "",
                            notifyCounts: {
                                at_me: 0,
                                reply_me: 0,
                                praise_me: 0,
                                notify_me: 0,
                                message: 0
                            },
                            notifyType: 0,
                            showUnfollowedMsg: 1,
                            im_list: [{
                                name: "reply_me",
                                text: c("replyMe"),
                                href: "//message.bilibili.com/#/reply"
                            }, {
                                name: "at_me",
                                text: c("atMe"),
                                href: "//message.bilibili.com/#/at"
                            }, {
                                name: "praise_me",
                                text: c("praiseMe"),
                                href: "//message.bilibili.com/#/love"
                            }, {
                                name: "notify_me",
                                text: c("system"),
                                href: "//message.bilibili.com/#/system"
                            }, {
                                name: "message",
                                text: c("whisper"),
                                href: "//message.bilibili.com/#/whisper"
                            }]
                        }
                    },
                    watch: {
                        notifyCounts: {
                            handler: function() {
                                this.postMessage()
                            },
                            deep: !0
                        },
                        notifyType: function() {
                            this.postMessage()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        return m(a.a.mark((function t() {
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Promise.all([e.getUid(), e.getNotifyType(), e.getnotifyCounts()]);
                                    case 2:
                                        return t.next = 4, e.getUnreadMessageCount(!0);
                                    case 4:
                                        setInterval((function() {
                                            e.getUnreadMessageCount()
                                        }), 6e4), window.addEventListener("storage", (function(t) {
                                            t.key === "imNotifyCounts".concat(e.uid) ? e.notifyCounts = JSON.parse(t.newValue) : t.key === "im_notify_type_".concat(e.uid) && (e.notifyType = parseInt(t.newValue))
                                        }));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        getUid: function() {
                            var e = this;
                            return p.a.get().then((function(t) {
                                e.uid = t.data.mid
                            }))
                        },
                        getUnreadMessageCount: function() {
                            var e = arguments,
                                t = this;
                            return m(a.a.mark((function n() {
                                var o, r, i;
                                return a.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            o = e.length > 0 && void 0 !== e[0] && e[0], r = function() {
                                                var e = m(a.a.mark((function e() {
                                                    return a.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, Object(s.a)({
                                                                    addPlatInfo: !0,
                                                                    url: "//api.vc.bilibili.com/session_svr/v1/session_svr/single_unread",
                                                                    method: "get",
                                                                    data: {
                                                                        unread_type: 0
                                                                    }
                                                                }).then((function(e) {
                                                                    return t.unfollowFold ? e.data.follow_unread : e.data.follow_unread + e.data.unfollow_unread
                                                                }));
                                                            case 2:
                                                                t.notifyCounts.message = e.sent, localStorage.setItem("imNotifyCounts".concat(t.uid), JSON.stringify(t.notifyCounts)), localStorage.setItem("unreadApiRequestedBy".concat(t.uid, "At"), Date.now());
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), o ? r() : parseInt(localStorage.getItem("unreadApiRequestedBy".concat(t.uid, "At"))) + 6e4 > Date.now() ? (i = JSON.parse(localStorage.getItem("imNotifyCounts".concat(t.uid))) || {}, t.notifyCounts.message = parseInt(i.message) || 0) : r();
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        getnotifyCounts: function() {
                            var e = this;
                            return Object(s.a)({
                                addPlatInfo: !0,
                                url: "//api.bilibili.com/x/msgfeed/unread",
                                method: "get"
                            }).then((function(t) {
                                0 === t.code && (e.notifyCounts = Object.assign(e.notifyCounts, {
                                    at_me: t.data.at,
                                    reply_me: t.data.reply,
                                    praise_me: t.data.like,
                                    notify_me: t.data.sys_msg
                                }))
                            }))
                        },
                        getNotifyType: function() {
                            var e = this;
                            return Object(s.a)({
                                addPlatInfo: !0,
                                url: "//api.vc.bilibili.com/link_setting/v1/link_setting/get",
                                method: "get",
                                data: {
                                    msg_notify: 1,
                                    show_unfollowed_msg: 1
                                }
                            }).then((function(t) {
                                0 === t.code && (e.notifyType = t.data.msg_notify, e.unfollowFold = 1 === Number(t.data.show_unfollowed_msg))
                            }))
                        },
                        postMessage: function() {
                            var e = this,
                                t = Object.keys(this.notifyCounts).reduce((function(t, n) {
                                    return t + e.notifyCounts[n]
                                }), 0);
                            window.parent.postMessage({
                                type: "nav-im-update",
                                count: t,
                                notifyType: Math.max(this.notifyType - 1, 0)
                            }, "*")
                        },
                        displayCount: function(e) {
                            return e > 99 ? "99+" : e
                        }
                    }
                },
                g = n(0),
                h = Object(g.a)(y, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "im-root"
                    }, [n("div", {
                        staticClass: "im-list-box"
                    }, e._l(e.im_list, (function(t) {
                        return n("a", {
                            key: t.name,
                            staticClass: "im-list",
                            attrs: {
                                href: t.href,
                                target: "_blank"
                            }
                        }, [e._v("\n      " + e._s(t.text) + "\n      "), 3 !== e.notifyType && e.notifyCounts[t.name] > 0 ? n("span", {
                            staticClass: "im-notify im-number im-center"
                        }, [e._v(e._s(e.displayCount(e.notifyCounts[t.name])))]) : e._e()])
                    })), 0)])
                }), [], !1, null, null, null).exports;
            r.a.config.productionTip = !1, new r.a({
                render: function(e) {
                    return e(h)
                }
            }).$mount("#nav-im-part")
        }
    })
}));