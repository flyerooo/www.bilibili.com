/* Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {
    function ArrayCreate(r) {
        if (1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1) throw new RangeError("Invalid array length");
        var n = [];
        return n.length = r, n
    }

    function Call(t, l) {
        var n = arguments.length > 2 ? arguments[2] : [];
        if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + "is not a function.");
        return t.apply(l, n)
    }

    function Get(n, t) {
        return n[t]
    }

    function HasOwnProperty(r, t) {
        return Object.prototype.hasOwnProperty.call(r, t)
    }

    function HasProperty(n, r) {
        return r in n
    }

    function IsArray(r) {
        return "[object Array]" === Object.prototype.toString.call(r)
    }

    function IsCallable(n) {
        return "function" == typeof n
    }

    function RequireObjectCoercible(e) {
        if (null === e || e === undefined) throw TypeError(Object.prototype.toString.call(e) + " is not coercible to Object.");
        return e
    }

    function SameValueNonNumber(e, n) {
        return e === n
    }

    function ToBoolean(o) {
        return Boolean(o)
    }

    function ToInteger(n) {
        var i = Number(n);
        return isNaN(i) ? 0 : 1 / i === Infinity || 1 / i == -Infinity || i === Infinity || i === -Infinity ? i : (i < 0 ? -1 : 1) * Math.floor(Math.abs(i))
    }

    function ToLength(n) {
        var t = ToInteger(n);
        return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1)
    }

    function ToObject(e) {
        if (null === e || e === undefined) throw TypeError();
        return Object(e)
    }

    function GetV(t, e) {
        return ToObject(t)[e]
    }

    function GetMethod(e, n) {
        var r = GetV(e, n);
        if (null === r || r === undefined) return undefined;
        if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
        return r
    }

    function Type(e) {
        switch (typeof e) {
            case "undefined":
                return "undefined";
            case "boolean":
                return "boolean";
            case "number":
                return "number";
            case "string":
                return "string";
            case "symbol":
                return "symbol";
            default:
                return null === e ? "null" : "Symbol" in self && (e instanceof self.Symbol || e.constructor === self.Symbol) ? "symbol" : "object"
        }
    }

    function GetPrototypeFromConstructor(t, o) {
        var r = Get(t, "prototype");
        return "object" !== Type(r) && (r = o), r
    }

    function IsConstructor(t) {
        return "object" === Type(t) && ("function" == typeof t && !!t.prototype)
    }

    function IsRegExp(e) {
        if ("object" !== Type(e)) return !1;
        var n = "Symbol" in self && "match" in self.Symbol ? Get(e, self.Symbol.match) : undefined;
        if (n !== undefined) return ToBoolean(n);
        try {
            var t = e.lastIndex;
            return e.lastIndex = 0, RegExp.prototype.exec.call(e), !0
        } catch (l) {} finally {
            e.lastIndex = t
        }
        return !1
    }

    function OrdinaryToPrimitive(r, t) {
        if ("string" === t) var e = ["toString", "valueOf"];
        else e = ["valueOf", "toString"];
        for (var i = 0; i < e.length; ++i) {
            var n = e[i],
                a = Get(r, n);
            if (IsCallable(a)) {
                var o = Call(a, r);
                if ("object" !== Type(o)) return o
            }
        }
        throw new TypeError("Cannot convert to primitive.")
    }

    function SameValueZero(n, e) {
        return Type(n) === Type(e) && ("number" === Type(n) ? !(!isNaN(n) || !isNaN(e)) || (1 / n === Infinity && 1 / e == -Infinity || (1 / n == -Infinity && 1 / e === Infinity || n === e)) : SameValueNonNumber(n, e))
    }

    function ToPrimitive(e) {
        var t = arguments.length > 1 ? arguments[1] : undefined;
        if ("object" === Type(e)) {
            if (arguments.length < 2) var i = "default";
            else t === String ? i = "string" : t === Number && (i = "number");
            var r = "function" == typeof self.Symbol && "symbol" == typeof self.Symbol.toPrimitive ? GetMethod(e, self.Symbol.toPrimitive) : undefined;
            if (r !== undefined) {
                var n = Call(r, e, [i]);
                if ("object" !== Type(n)) return n;
                throw new TypeError("Cannot convert exotic object to primitive.")
            }
            return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i)
        }
        return e
    }

    function ToString(t) {
        switch (Type(t)) {
            case "symbol":
                throw new TypeError("Cannot convert a Symbol value to a string");
            case "object":
                return ToString(ToPrimitive(t, String));
            default:
                return String(t)
        }
    }

    function ToPropertyKey(r) {
        var i = ToPrimitive(r, String);
        return "symbol" === Type(i) ? i : ToString(i)
    }
    if (!("defineProperty" in Object && function() {
            try {
                var e = {}
                return Object.defineProperty(e, "test", {
                    value: 42
                }), !0
            } catch (t) {
                return !1
            }
        }())) {
        ! function(e) {
            var t = Object.prototype.hasOwnProperty.call(Object.prototype, "__defineGetter__"),
                r = "A property cannot both have accessors and be writable or have a value";
            Object.defineProperty = function n(o, i, c) {
                if (e && (o === window || o === document || o === Element.prototype || o instanceof Element)) return e(o, i, c);
                if (null === o || !(o instanceof Object || "object" == typeof o)) throw new TypeError("Object.defineProperty called on non-object");
                if (!(c instanceof Object)) throw new TypeError("Property description must be an object");
                var a = String(i),
                    f = "value" in c || "writable" in c,
                    p = "get" in c && typeof c.get,
                    s = "set" in c && typeof c.set;
                if (p) {
                    if ("function" !== p) throw new TypeError("Getter must be a function");
                    if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                    if (f) throw new TypeError(r);
                    Object.__defineGetter__.call(o, a, c.get)
                } else o[a] = c.value;
                if (s) {
                    if ("function" !== s) throw new TypeError("Setter must be a function");
                    if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                    if (f) throw new TypeError(r);
                    Object.__defineSetter__.call(o, a, c.set)
                }
                return "value" in c && (o[a] = c.value), o
            }
        }(Object.defineProperty);
    }

    function CreateDataProperty(e, r, t) {
        var a = {
            value: t,
            writable: !0,
            enumerable: !0,
            configurable: !0
        };
        try {
            return Object.defineProperty(e, r, a), !0
        } catch (n) {
            return !1
        }
    }

    function CreateDataPropertyOrThrow(t, r, o) {
        var e = CreateDataProperty(t, r, o);
        if (!e) throw new TypeError("Cannot assign value `" + Object.prototype.toString.call(o) + "` to property `" + Object.prototype.toString.call(r) + "` on object `" + Object.prototype.toString.call(t) + "`");
        return e
    }

    function CreateMethodProperty(e, r, t) {
        var a = {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        };
        Object.defineProperty(e, r, a)
    }
    if (!("forEach" in Array.prototype)) {
        CreateMethodProperty(Array.prototype, "forEach", function r(t) {
            var e = ToObject(this),
                n = e instanceof String ? e.split("") : e,
                o = ToLength(Get(e, "length"));
            if (!1 === IsCallable(t)) throw new TypeError(t + " is not a function");
            for (var a = arguments.length > 1 ? arguments[1] : undefined, i = 0; i < o;) {
                var f = ToString(i);
                if (HasProperty(n, f)) {
                    var l = Get(n, f);
                    Call(t, a, [l, i, e])
                }
                i += 1
            }
            return undefined
        });
    }
    if (!("includes" in Array.prototype)) {
        CreateMethodProperty(Array.prototype, "includes", function e(r) {
            "use strict";
            var t = ToObject(this),
                o = ToLength(Get(t, "length"));
            if (0 === o) return !1;
            var n = ToInteger(arguments[1]);
            if (n >= 0) var a = n;
            else(a = o + n) < 0 && (a = 0);
            for (; a < o;) {
                var i = Get(t, ToString(a));
                if (SameValueZero(r, i)) return !0;
                a += 1
            }
            return !1
        });
    }
    if (!("indexOf" in Array.prototype)) {
        CreateMethodProperty(Array.prototype, "indexOf", function r(t) {
            var e = ToObject(this),
                n = ToLength(Get(e, "length"));
            if (0 === n) return -1;
            var i = ToInteger(arguments[1]);
            if (i >= n) return -1;
            if (i >= 0) var o = 1 / i == -Infinity ? 0 : i;
            else(o = n + i) < 0 && (o = 0);
            for (; o < n;) {
                if (HasProperty(e, ToString(o))) {
                    if (t === Get(e, ToString(o))) return o
                }
                o += 1
            }
            return -1
        });
    }
    if (!("bind" in Function.prototype)) {
        CreateMethodProperty(Function.prototype, "bind", function t(n) {
            var r = Array,
                o = Object,
                e = r.prototype,
                l = function g() {},
                p = e.slice,
                a = e.concat,
                i = e.push,
                c = Math.max,
                u = this;
            if (!IsCallable(u)) throw new TypeError("Function.prototype.bind called on incompatible " + u);
            for (var y, h = p.call(arguments, 1), s = function() {
                    if (this instanceof y) {
                        var t = u.apply(this, a.call(h, p.call(arguments)));
                        return o(t) === t ? t : this
                    }
                    return u.apply(n, a.call(h, p.call(arguments)))
                }, f = c(0, u.length - h.length), b = [], d = 0; d < f; d++) i.call(b, "$" + d);
            return y = Function("binder", "return function (" + b.join(",") + "){ return binder.apply(this, arguments); }")(s), u.prototype && (l.prototype = u.prototype, y.prototype = new l, l.prototype = null), y
        });
    }
    if (!("isNaN" in Number)) {
        ! function() {
            var e = self;
            CreateMethodProperty(Number, "isNaN", function r(n) {
                return "number" === Type(n) && !!e.isNaN(n)
            })
        }();
    }
    if (!("freeze" in Object)) {
        CreateMethodProperty(Object, "freeze", function e(r) {
            return r
        });
    }
    if (!("getOwnPropertyDescriptor" in Object && "function" == typeof Object.getOwnPropertyDescriptor && function() {
            try {
                return "3" === Object.getOwnPropertyDescriptor("13.7", 1).value
            } catch (t) {
                return !1
            }
        }())) {
        ! function() {
            var e = Object.getOwnPropertyDescriptor,
                t = function() {
                    try {
                        return 1 === Object.defineProperty(document.createElement("div"), "one", {
                            get: function() {
                                return 1
                            }
                        }).one
                    } catch (e) {
                        return !1
                    }
                },
                r = {}.toString,
                n = "".split;
            CreateMethodProperty(Object, "getOwnPropertyDescriptor", function c(o, i) {
                var a = ToObject(o);
                a = ("string" === Type(a) || a instanceof String) && "[object String]" == r.call(o) ? n.call(o, "") : Object(o);
                var u = ToPropertyKey(i);
                if (t) try {
                    return e(a, u)
                } catch (l) {}
                if (HasOwnProperty(a, u)) return {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a[u]
                }
            })
        }();
    }
    if (!("getPrototypeOf" in Object)) {
        CreateMethodProperty(Object, "getPrototypeOf", function t(o) {
            if (o !== Object(o)) throw new TypeError("Object.getPrototypeOf called on non-object");
            var e = o.__proto__;
            return e || null === e ? e : "function" == typeof o.constructor && o instanceof o.constructor ? o.constructor.prototype : o instanceof Object ? Object.prototype : null
        });
    }
    if (!("keys" in Object && function() {
            return 2 === Object.keys(arguments).length
        }(1, 2) && function() {
            try {
                return Object.keys(""), !0
            } catch (t) {
                return !1
            }
        }())) {
        CreateMethodProperty(Object, "keys", function() {
            "use strict";

            function t(t) {
                var e = r.call(t),
                    n = "[object Arguments]" === e;
                return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
            }
            var e = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString,
                n = Object.prototype.propertyIsEnumerable,
                o = !n.call({
                    toString: null
                }, "toString"),
                l = n.call(function() {}, "prototype"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                i = function(t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                },
                u = {
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                a = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window) try {
                        if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                            i(window[t])
                        } catch (r) {
                            return !0
                        }
                    } catch (r) {
                        return !0
                    }
                    return !1
                }(),
                f = function(t) {
                    if ("undefined" == typeof window || !a) return i(t);
                    try {
                        return i(t)
                    } catch (e) {
                        return !1
                    }
                };
            return function p(n) {
                var i = "[object Function]" === r.call(n),
                    u = t(n),
                    a = "[object String]" === r.call(n),
                    p = [];
                if (n === undefined || null === n) throw new TypeError("Cannot convert undefined or null to object");
                var s = l && i;
                if (a && n.length > 0 && !e.call(n, 0))
                    for (var y = 0; y < n.length; ++y) p.push(String(y));
                if (u && n.length > 0)
                    for (var g = 0; g < n.length; ++g) p.push(String(g));
                else
                    for (var h in n) s && "prototype" === h || !e.call(n, h) || p.push(String(h));
                if (o)
                    for (var w = f(n), d = 0; d < c.length; ++d) w && "constructor" === c[d] || !e.call(n, c[d]) || p.push(c[d]);
                return p
            }
        }());
    }
    if (!("assign" in Object)) {
        CreateMethodProperty(Object, "assign", function e(t, r) {
            var n = ToObject(t);
            if (1 === arguments.length) return n;
            var o, c, a, l, i = Array.prototype.slice.call(arguments, 1);
            for (o = 0; o < i.length; o++) {
                var p = i[o];
                for (p === undefined || null === p ? a = [] : (l = "[object String]" === Object.prototype.toString.call(p) ? String(p).split("") : ToObject(p), a = Object.keys(l)), c = 0; c < a.length; c++) {
                    var b, y = a[c];
                    try {
                        var g = Object.getOwnPropertyDescriptor(l, y);
                        b = g !== undefined && !0 === g.enumerable
                    } catch (u) {
                        b = Object.prototype.propertyIsEnumerable.call(l, y)
                    }
                    if (b) {
                        var j = Get(l, y);
                        n[y] = j
                    }
                }
            }
            return n
        });
    }
    if (!("defineProperties" in Object)) {
        CreateMethodProperty(Object, "defineProperties", function e(r, t) {
            if ("object" !== Type(r)) throw new TypeError("Object.defineProperties called on non-object");
            for (var o = ToObject(t), n = Object.keys(o), c = [], i = 0; i < n.length; i++) {
                var b = n[i],
                    f = Object.getOwnPropertyDescriptor(o, b);
                if (f !== undefined && f.enumerable) {
                    var p = Get(o, b),
                        a = p;
                    c.push([b, a])
                }
            }
            for (var j = 0; j < c.length; j++) {
                var d = c[j][0];
                a = c[j][1], Object.defineProperty(r, d, a)
            }
            return r
        });
    }
    if (!("create" in Object)) {
        ! function() {
            function e() {}
            if ({
                    __proto__: null
                }
                instanceof Object) t = function() {
                var e = document.createElement("iframe");
                e.style.display = "none";
                var o = document.body || document.documentElement;
                o.appendChild(e), e.src = "javascript:";
                var n = e.contentWindow.Object.prototype;
                o.removeChild(e), e = null, delete n.constructor, delete n.hasOwnProperty, delete n.propertyIsEnumerable, delete n.isPrototypeOf, delete n.toLocaleString, delete n.toString, delete n.valueOf;
                var r = function l() {};
                return r.prototype = n, t = function() {
                    return new r
                }, new r
            };
            else var t = function() {
                return {
                    __proto__: null
                }
            };
            CreateMethodProperty(Object, "create", function o(n, r) {
                if ("object" !== Type(n) && "null" !== Type(n)) throw new TypeError("Object prototype may only be an Object or null");
                if ("null" === Type(n)) var l = t();
                else e.prototype = n, l = new e, l.__proto__ = n, l.constructor.prototype = n, l.__proto__ = n;
                return 1 in arguments ? Object.defineProperties(l, r) : l
            })
        }();
    }

    function OrdinaryCreateFromConstructor(r, e) {
        var t = arguments[2] || {},
            o = GetPrototypeFromConstructor(r, e),
            a = Object.create(o);
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(a, n, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: t[n]
        });
        return a
    }

    function Construct(r) {
        var t = arguments.length > 2 ? arguments[2] : r,
            o = arguments.length > 1 ? arguments[1] : [];
        if (!IsConstructor(r)) throw new TypeError("F must be a constructor.");
        if (!IsConstructor(t)) throw new TypeError("newTarget must be a constructor.");
        if (t === r) return new(Function.prototype.bind.apply(r, [null].concat(o)));
        var n = OrdinaryCreateFromConstructor(t, Object.prototype);
        return Call(r, n, o)
    }

    function ArraySpeciesCreate(e, r) {
        if (0 === r && 1 / r == -Infinity && (r = 0), !1 === IsArray(e)) return ArrayCreate(r);
        var n = Get(e, "constructor");
        if ("object" === Type(n) && null === (n = "Symbol" in self && "species" in self.Symbol ? Get(n, self.Symbol.species) : undefined) && (n = undefined), n === undefined) return ArrayCreate(r);
        if (!IsConstructor(n)) throw new TypeError("C must be a constructor");
        return Construct(n, [r])
    }
    if (!("filter" in Array.prototype)) {
        CreateMethodProperty(Array.prototype, "filter", function r(e) {
            var t = ToObject(this),
                o = ToLength(Get(t, "length"));
            if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
            for (var a = arguments.length > 1 ? arguments[1] : undefined, n = ArraySpeciesCreate(t, 0), i = 0, l = 0; i < o;) {
                var f = ToString(i);
                if (HasProperty(t, f)) {
                    var h = Get(t, f);
                    ToBoolean(Call(e, a, [h, i, t])) && (CreateDataPropertyOrThrow(n, ToString(l), h), l += 1)
                }
                i += 1
            }
            return n
        });
    }
    if (!("map" in Array.prototype)) {
        CreateMethodProperty(Array.prototype, "map", function r(e) {
            var t = ToObject(this),
                a = ToLength(Get(t, "length"));
            if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
            for (var o = arguments.length > 1 ? arguments[1] : undefined, n = ArraySpeciesCreate(t, a), i = 0; i < a;) {
                var p = ToString(i);
                if (HasProperty(t, p)) {
                    var h = Get(t, p),
                        l = Call(e, o, [h, i, t]);
                    CreateDataPropertyOrThrow(n, p, l)
                }
                i += 1
            }
            return n
        });
    }
    if (!("getOwnPropertyNames" in Object && function() {
            try {
                return Object.getOwnPropertyNames(1), !0
            } catch (t) {
                return !1
            }
        }())) {
        ! function() {
            var t = {}.toString,
                e = "".split,
                r = [].concat,
                o = Object.prototype.hasOwnProperty,
                c = Object.getOwnPropertyNames || Object.keys,
                n = "object" == typeof self ? c(self) : [];
            CreateMethodProperty(Object, "getOwnPropertyNames", function l(a) {
                var p = ToObject(a);
                if ("[object Window]" === t.call(p)) try {
                    return c(p)
                } catch (j) {
                    return r.call([], n)
                }
                p = "[object String]" == t.call(p) ? e.call(p, "") : Object(p);
                for (var i = c(p), s = ["length", "prototype"], O = 0; O < s.length; O++) {
                    var b = s[O];
                    o.call(p, b) && !i.includes(b) && i.push(b)
                }
                if (i.includes("__proto__")) {
                    var f = i.indexOf("__proto__");
                    i.splice(f, 1)
                }
                return i
            })
        }();
    }
    if (!("includes" in String.prototype)) {
        CreateMethodProperty(String.prototype, "includes", function e(t) {
            "use strict";
            var r = arguments.length > 1 ? arguments[1] : undefined,
                n = RequireObjectCoercible(this),
                i = ToString(n);
            if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            var o = ToString(t),
                g = ToInteger(r),
                a = i.length,
                p = Math.min(Math.max(g, 0), a);
            return -1 !== String.prototype.indexOf.call(i, o, p)
        });
    }
    if (!("Symbol" in self && 0 === self.Symbol.length)) {
        ! function(t, r, n) {
            "use strict";
            var e, u = 0,
                o = "" + Math.random(),
                l = "__symbol:",
                c = l.length,
                a = "__symbol@@" + o,
                i = "defineProperty",
                f = "defineProperties",
                s = "getOwnPropertyNames",
                v = "getOwnPropertyDescriptor",
                b = "propertyIsEnumerable",
                h = t.prototype,
                y = h.hasOwnProperty,
                m = h[b],
                p = h.toString,
                g = Array.prototype.concat,
                w = t.getOwnPropertyNames ? t.getOwnPropertyNames(self) : [],
                S = t[s],
                d = function L(t) {
                    if ("[object Window]" === p.call(t)) try {
                        return S(t)
                    } catch (r) {
                        return g.call([], w)
                    }
                    return S(t)
                },
                P = t[v],
                j = t.create,
                O = t.keys,
                E = t.freeze || t,
                N = t[i],
                _ = t[f],
                k = P(t, s),
                T = function(t, r, n) {
                    if (!y.call(t, a)) try {
                        N(t, a, {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: {}
                        })
                    } catch (e) {
                        t[a] = {}
                    }
                    t[a]["@@" + r] = n
                },
                z = function(t, r) {
                    var n = j(t);
                    return d(r).forEach(function(t) {
                        M.call(r, t) && G(n, t, r[t])
                    }), n
                },
                A = function(t) {
                    var r = j(t);
                    return r.enumerable = !1, r
                },
                D = function Q() {},
                F = function(t) {
                    return t != a && !y.call(x, t)
                },
                I = function(t) {
                    return t != a && y.call(x, t)
                },
                M = function R(t) {
                    var r = "" + t;
                    return I(r) ? y.call(this, r) && this[a]["@@" + r] : m.call(this, t)
                },
                W = function(r) {
                    var n = {
                        enumerable: !1,
                        configurable: !0,
                        get: D,
                        set: function(t) {
                            e(this, r, {
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                                value: t
                            }), T(this, r, !0)
                        }
                    };
                    try {
                        N(h, r, n)
                    } catch (u) {
                        h[r] = n.value
                    }
                    return E(x[r] = N(t(r), "constructor", B))
                },
                q = function U() {
                    var t = arguments[0];
                    if (this instanceof U) throw new TypeError("Symbol is not a constructor");
                    return W(l.concat(t || "", o, ++u))
                },
                x = j(null),
                B = {
                    value: q
                },
                C = function(t) {
                    return x[t]
                },
                G = function V(t, r, n) {
                    var u = "" + r;
                    return I(u) ? (e(t, u, n.enumerable ? A(n) : n), T(t, u, !!n.enumerable)) : N(t, r, n), t
                },
                H = function(t) {
                    return function(r) {
                        return y.call(t, a) && y.call(t[a], "@@" + r)
                    }
                },
                J = function X(t) {
                    return d(t).filter(t === h ? H(t) : I).map(C)
                };
            k.value = G, N(t, i, k), k.value = J, N(t, "getOwnPropertySymbols", k), k.value = function Y(t) {
                return d(t).filter(F)
            }, N(t, s, k), k.value = function Z(t, r) {
                var n = J(r);
                return n.length ? O(r).concat(n).forEach(function(n) {
                    M.call(r, n) && G(t, n, r[n])
                }) : _(t, r), t
            }, N(t, f, k), k.value = M, N(h, b, k), k.value = q, N(n, "Symbol", k), k.value = function(t) {
                var r = l.concat(l, t, o);
                return r in h ? x[r] : W(r)
            }, N(q, "for", k), k.value = function(t) {
                if (F(t)) throw new TypeError(t + " is not a symbol");
                return y.call(x, t) ? t.slice(2 * c, -o.length) : void 0
            }, N(q, "keyFor", k), k.value = function $(t, r) {
                var n = P(t, r);
                return n && I(r) && (n.enumerable = M.call(t, r)), n
            }, N(t, v, k), k.value = function(t, r) {
                return 1 === arguments.length || void 0 === r ? j(t) : z(t, r)
            }, N(t, "create", k);
            var K = null === function() {
                return this
            }.call(null);
            k.value = K ? function() {
                var t = p.call(this);
                return "[object String]" === t && I(this) ? "[object Symbol]" : t
            } : function() {
                if (this === window) return "[object Null]";
                var t = p.call(this);
                return "[object String]" === t && I(this) ? "[object Symbol]" : t
            }, N(h, "toString", k), e = function(t, r, n) {
                var e = P(h, r);
                delete h[r], N(t, r, n), t !== h && N(h, r, e)
            }
        }(Object, 0, this);
    }
    if (!("Symbol" in self && "toStringTag" in self.Symbol)) {
        Object.defineProperty(Symbol, "toStringTag", {
            value: Symbol("toStringTag")
        });
    }
    if (!("Promise" in self)) {
        ! function() {
            "use strict";

            function n() {
                return tn[q][B] || D
            }

            function t(n) {
                return n && "object" == typeof n
            }

            function e(n) {
                return "function" == typeof n
            }

            function r(n, t) {
                return n instanceof t
            }

            function o(n) {
                return r(n, A)
            }

            function i(n, t, e) {
                if (!t(n)) throw a(e)
            }

            function u() {
                try {
                    return b.apply(R, arguments)
                } catch (n) {
                    return Y.e = n, Y
                }
            }

            function c(n, t) {
                return b = n, R = t, u
            }

            function f(n, t) {
                function e() {
                    for (var e = 0; e < o;) t(r[e], r[e + 1]), r[e++] = T, r[e++] = T;
                    o = 0, r.length > n && (r.length = n)
                }
                var r = L(n),
                    o = 0;
                return function(n, t) {
                    r[o++] = n, r[o++] = t, 2 === o && tn.nextTick(e)
                }
            }

            function s(n, t) {
                var o, i, u, f, s = 0;
                if (!n) throw a(N);
                var l = n[tn[q][z]];
                if (e(l)) i = l.call(n);
                else {
                    if (!e(n.next)) {
                        if (r(n, L)) {
                            for (o = n.length; s < o;) t(n[s], s++);
                            return s
                        }
                        throw a(N)
                    }
                    i = n
                }
                for (; !(u = i.next()).done;)
                    if ((f = c(t)(u.value, s++)) === Y) throw e(i[G]) && i[G](), f.e;
                return s
            }

            function a(n) {
                return new TypeError(n)
            }

            function l(n) {
                return (n ? "" : Q) + (new A).stack
            }

            function h(n, t) {
                var e = "on" + n.toLowerCase(),
                    r = F[e];
                E && E.listeners(n).length ? n === X ? E.emit(n, t._v, t) : E.emit(n, t) : r ? r({
                    reason: t._v,
                    promise: t
                }) : tn[n](t._v, t)
            }

            function v(n) {
                return n && n._s
            }

            function _(n) {
                if (v(n)) return new n(Z);
                var t, r, o;
                return t = new n(function(n, e) {
                    if (t) throw a();
                    r = n, o = e
                }), i(r, e), i(o, e), t
            }

            function d(n, t) {
                var e = !1;
                return function(r) {
                    e || (e = !0, I && (n[M] = l(!0)), t === U ? g(n, r) : y(n, t, r))
                }
            }

            function p(n, t, r, o) {
                return e(r) && (t._onFulfilled = r), e(o) && (n[J] && h(W, n), t._onRejected = o), I && (t._p = n), n[n._c++] = t, n._s !== $ && rn(n, t), t
            }

            function m(n) {
                if (n._umark) return !0;
                n._umark = !0;
                for (var t, e = 0, r = n._c; e < r;)
                    if (t = n[e++], t._onRejected || m(t)) return !0
            }

            function w(n, t) {
                function e(n) {
                    return r.push(n.replace(/^\s+|\s+$/g, ""))
                }
                var r = [];
                return I && (t[M] && e(t[M]), function o(n) {
                    n && K in n && (o(n._next), e(n[K] + ""), o(n._p))
                }(t)), (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(nn, "")
            }

            function j(n, t) {
                return n(t)
            }

            function y(n, t, e) {
                var r = 0,
                    i = n._c;
                if (n._s === $)
                    for (n._s = t, n._v = e, t === O && (I && o(e) && (e.longStack = w(e, n)), on(n)); r < i;) rn(n, n[r++]);
                return n
            }

            function g(n, r) {
                if (r === n && r) return y(n, O, a(V)), n;
                if (r !== S && (e(r) || t(r))) {
                    var o = c(k)(r);
                    if (o === Y) return y(n, O, o.e), n;
                    e(o) ? (I && v(r) && (n._next = r), v(r) ? x(n, r, o) : tn.nextTick(function() {
                        x(n, r, o)
                    })) : y(n, U, r)
                } else y(n, U, r);
                return n
            }

            function k(n) {
                return n.then
            }

            function x(n, t, e) {
                var r = c(e, t)(function(e) {
                    t && (t = S, g(n, e))
                }, function(e) {
                    t && (t = S, y(n, O, e))
                });
                r === Y && t && (y(n, O, r.e), t = S)
            }
            var T, b, R, S = null,
                C = "object" == typeof self,
                F = self,
                P = F.Promise,
                E = F.process,
                H = F.console,
                I = !0,
                L = Array,
                A = Error,
                O = 1,
                U = 2,
                $ = 3,
                q = "Symbol",
                z = "iterator",
                B = "species",
                D = q + "(" + B + ")",
                G = "return",
                J = "_uh",
                K = "_pt",
                M = "_st",
                N = "Invalid argument",
                Q = "\nFrom previous ",
                V = "Chaining cycle detected for promise",
                W = "rejectionHandled",
                X = "unhandledRejection",
                Y = {
                    e: S
                },
                Z = function() {},
                nn = /^.+\/node_modules\/yaku\/.+\n?/gm,
                tn = function(n) {
                    var r, o = this;
                    if (!t(o) || o._s !== T) throw a("Invalid this");
                    if (o._s = $, I && (o[K] = l()), n !== Z) {
                        if (!e(n)) throw a(N);
                        r = c(n)(d(o, U), d(o, O)), r === Y && y(o, O, r.e)
                    }
                };
            tn["default"] = tn,
                function en(n, t) {
                    for (var e in t) n[e] = t[e]
                }(tn.prototype, {
                    then: function(n, t) {
                        if (this._s === undefined) throw a();
                        return p(this, _(tn.speciesConstructor(this, tn)), n, t)
                    },
                    "catch": function(n) {
                        return this.then(T, n)
                    },
                    "finally": function(n) {
                        return this.then(function(t) {
                            return tn.resolve(n()).then(function() {
                                return t
                            })
                        }, function(t) {
                            return tn.resolve(n()).then(function() {
                                throw t
                            })
                        })
                    },
                    _c: 0,
                    _p: S
                }), tn.resolve = function(n) {
                    return v(n) ? n : g(_(this), n)
                }, tn.reject = function(n) {
                    return y(_(this), O, n)
                }, tn.race = function(n) {
                    var t = this,
                        e = _(t),
                        r = function(n) {
                            y(e, U, n)
                        },
                        o = function(n) {
                            y(e, O, n)
                        },
                        i = c(s)(n, function(n) {
                            t.resolve(n).then(r, o)
                        });
                    return i === Y ? t.reject(i.e) : e
                }, tn.all = function(n) {
                    function t(n) {
                        y(o, O, n)
                    }
                    var e, r = this,
                        o = _(r),
                        i = [];
                    return (e = c(s)(n, function(n, u) {
                        r.resolve(n).then(function(n) {
                            i[u] = n, --e || y(o, U, i)
                        }, t)
                    })) === Y ? r.reject(e.e) : (e || y(o, U, []), o)
                }, tn.Symbol = F[q] || {}, c(function() {
                    Object.defineProperty(tn, n(), {
                        get: function() {
                            return this
                        }
                    })
                })(), tn.speciesConstructor = function(t, e) {
                    var r = t.constructor;
                    return r ? r[n()] || e : e
                }, tn.unhandledRejection = function(n, t) {
                    H && H.error("Uncaught (in promise)", I ? t.longStack : w(n, t))
                }, tn.rejectionHandled = Z, tn.enableLongStackTrace = function() {
                    I = !0
                }, tn.nextTick = C ? function(n) {
                    P ? new P(function(n) {
                        n()
                    }).then(n) : setTimeout(n)
                } : E.nextTick, tn._s = 1;
            var rn = f(999, function(n, t) {
                    var e, r;
                    return (r = n._s !== O ? t._onFulfilled : t._onRejected) === T ? void y(t, n._s, n._v) : (e = c(j)(r, n._v)) === Y ? void y(t, O, e.e) : void g(t, e)
                }),
                on = f(9, function(n) {
                    m(n) || (n[J] = 1, h(X, n))
                });
            F.Promise = tn
        }();
    }
})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});