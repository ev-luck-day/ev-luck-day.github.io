/*! For license information please see overrideRequest.js.LICENSE.txt */
( () => {
    "use strict";
    function t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r];
        return n
    }
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        e(t)
    }
    var r = null;
    function n(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3
          , n = arguments.length > 2 ? arguments[2] : void 0;
        if (n && (console.log("%c".concat(t, "\n"), "background-color: yellow;color: red", JSON.parse(n)),
        window.__overrideAJAX__.bottomReminder)) {
            r && (r.style.opacity = 0);
            var o = document.createElement("div");
            o.style.position = "fixed",
            o.style.bottom = "8px",
            o.style.right = "16px",
            o.style.padding = "8px 16px",
            o.style["background-color"] = "rgba(51, 51, 51, 0.8)",
            o.style.color = "#fff",
            o.style["border-radius"] = "4px",
            o.style.opacity = 1,
            o.style.fontSize = "14px",
            o.style.maxWidth = "80vw",
            o.style.wordBreak = "break-all",
            o.style.transition = "opacity 0.3s ease-out",
            o.style["z-index"] = 9999,
            o.textContent = t,
            document.body.appendChild(o),
            r = o,
            o.addEventListener("mouseenter", (function() {
                clearTimeout(i)
            }
            )),
            o.addEventListener("mouseleave", (function() {
                a()
            }
            ));
            var i = setTimeout((function() {
                a()
            }
            ), e)
        }
        function a() {
            if (o) {
                o.style.opacity = 0;
                var t = setTimeout((function() {
                    r = null,
                    o.remove(),
                    clearTimeout(t)
                }
                ), e)
            }
        }
    }
    function o(r) {
        if (Array.isArray(r))
            return r.map(o).sort((function(t, e) {
                return "number" == typeof t && "number" == typeof e ? t - e : "string" == typeof t && "string" == typeof e ? t.localeCompare(e) : "number" == typeof t ? -1 : "number" == typeof e ? 1 : 0
            }
            ));
        if (null !== r && "object" === e(r)) {
            var n, i = {}, a = function(e, r) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, r) {
                        if (e) {
                            if ("string" == typeof e)
                                return t(e, r);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t(e, r) : void 0
                        }
                    }(e)) || r && e && "number" == typeof e.length) {
                        n && (e = n);
                        var o = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0, c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var t = n.next();
                        return u = t.done,
                        t
                    },
                    e: function(t) {
                        c = !0,
                        a = t
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                }
            }(Object.keys(r).sort());
            try {
                for (a.s(); !(n = a.n()).done; ) {
                    var u = n.value;
                    i[u] = o(r[u])
                }
            } catch (t) {
                a.e(t)
            } finally {
                a.f()
            }
            return i
        }
        return r
    }
    function i(t) {
        if (!t)
            return "";
        try {
            var e = o(JSON.parse(t));
            return JSON.stringify(e)
        } catch (t) {
            return ""
        }
    }
    var a = function(t) {
        return !!t && ("object" === e(t) || "function" == typeof t) && "function" == typeof t.then
    }
      , u = function(t) {
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(t)
        } catch (t) {}
        return t
    }
      , c = function(t) {
        return !(null == t || !t.includes("application/json"))
    }
      , s = function(t, e, r) {
        return !r || !["POST", "PUT"].includes(t) || i(e) === i(r)
    }
      , f = {
        normal: "normal",
        swagger: "swagger",
        redirect: "redirect",
        modifyHeaders: "modifyHeaders",
        modifyRequestBody: "modifyRequestBody"
    };
    function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r];
        return n
    }
    function y() {
        y = function() {
            return t
        }
        ;
        var t = {}
          , e = Object.prototype
          , r = e.hasOwnProperty
          , n = Object.defineProperty || function(t, e, r) {
            t[e] = r.value
        }
          , o = "function" == typeof Symbol ? Symbol : {}
          , i = o.iterator || "@@iterator"
          , a = o.asyncIterator || "@@asyncIterator"
          , u = o.toStringTag || "@@toStringTag";
        function c(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            t[e]
        }
        try {
            c({}, "")
        } catch (t) {
            c = function(t, e, r) {
                return t[e] = r
            }
        }
        function s(t, e, r, o) {
            var i = e && e.prototype instanceof d ? e : d
              , a = Object.create(i.prototype)
              , u = new L(o || []);
            return n(a, "_invoke", {
                value: S(t, r, u)
            }),
            a
        }
        function f(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = s;
        var l = {};
        function d() {}
        function h() {}
        function v() {}
        var m = {};
        c(m, i, (function() {
            return this
        }
        ));
        var g = Object.getPrototypeOf
          , b = g && g(g(R([])));
        b && b !== e && r.call(b, i) && (m = b);
        var w = v.prototype = d.prototype = Object.create(m);
        function O(t) {
            ["next", "throw", "return"].forEach((function(e) {
                c(t, e, (function(t) {
                    return this._invoke(e, t)
                }
                ))
            }
            ))
        }
        function x(t, e) {
            function o(n, i, a, u) {
                var c = f(t[n], t, i);
                if ("throw" !== c.type) {
                    var s = c.arg
                      , l = s.value;
                    return l && "object" == p(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                        o("next", t, a, u)
                    }
                    ), (function(t) {
                        o("throw", t, a, u)
                    }
                    )) : e.resolve(l).then((function(t) {
                        s.value = t,
                        a(s)
                    }
                    ), (function(t) {
                        return o("throw", t, a, u)
                    }
                    ))
                }
                u(c.arg)
            }
            var i;
            n(this, "_invoke", {
                value: function(t, r) {
                    function n() {
                        return new e((function(e, n) {
                            o(t, r, e, n)
                        }
                        ))
                    }
                    return i = i ? i.then(n, n) : n()
                }
            })
        }
        function S(t, e, r) {
            var n = "suspendedStart";
            return function(o, i) {
                if ("executing" === n)
                    throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o)
                        throw i;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                for (r.method = o,
                r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                        var u = j(a, r);
                        if (u) {
                            if (u === l)
                                continue;
                            return u
                        }
                    }
                    if ("next" === r.method)
                        r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if ("suspendedStart" === n)
                            throw n = "completed",
                            r.arg;
                        r.dispatchException(r.arg)
                    } else
                        "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var c = f(t, e, r);
                    if ("normal" === c.type) {
                        if (n = r.done ? "completed" : "suspendedYield",
                        c.arg === l)
                            continue;
                        return {
                            value: c.arg,
                            done: r.done
                        }
                    }
                    "throw" === c.type && (n = "completed",
                    r.method = "throw",
                    r.arg = c.arg)
                }
            }
        }
        function j(t, e) {
            var r = e.method
              , n = t.iterator[r];
            if (void 0 === n)
                return e.delegate = null,
                "throw" === r && t.iterator.return && (e.method = "return",
                e.arg = void 0,
                j(t, e),
                "throw" === e.method) || "return" !== r && (e.method = "throw",
                e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                l;
            var o = f(n, t.iterator, e.arg);
            if ("throw" === o.type)
                return e.method = "throw",
                e.arg = o.arg,
                e.delegate = null,
                l;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value,
            e.next = t.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = void 0),
            e.delegate = null,
            l) : i : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            l)
        }
        function k(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function E(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function L(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(k, this),
            this.reset(!0)
        }
        function R(t) {
            if (t) {
                var e = t[i];
                if (e)
                    return e.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var n = -1
                      , o = function e() {
                        for (; ++n < t.length; )
                            if (r.call(t, n))
                                return e.value = t[n],
                                e.done = !1,
                                e;
                        return e.value = void 0,
                        e.done = !0,
                        e
                    };
                    return o.next = o
                }
            }
            return {
                next: P
            }
        }
        function P() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = v,
        n(w, "constructor", {
            value: v,
            configurable: !0
        }),
        n(v, "constructor", {
            value: h,
            configurable: !0
        }),
        h.displayName = c(v, u, "GeneratorFunction"),
        t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v,
            c(t, u, "GeneratorFunction")),
            t.prototype = Object.create(w),
            t
        }
        ,
        t.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        O(x.prototype),
        c(x.prototype, a, (function() {
            return this
        }
        )),
        t.AsyncIterator = x,
        t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(s(e, r, n, o),i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }
            ))
        }
        ,
        O(w),
        c(w, u, "Generator"),
        c(w, i, (function() {
            return this
        }
        )),
        c(w, "toString", (function() {
            return "[object Generator]"
        }
        )),
        t.keys = function(t) {
            var e = Object(t)
              , r = [];
            for (var n in e)
                r.push(n);
            return r.reverse(),
            function t() {
                for (; r.length; ) {
                    var n = r.pop();
                    if (n in e)
                        return t.value = n,
                        t.done = !1,
                        t
                }
                return t.done = !0,
                t
            }
        }
        ,
        t.values = R,
        L.prototype = {
            constructor: L,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(E),
                !t)
                    for (var e in this)
                        "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var e = this;
                function n(r, n) {
                    return a.type = "throw",
                    a.arg = t,
                    e.next = r,
                    n && (e.method = "next",
                    e.arg = void 0),
                    !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o]
                      , a = i.completion;
                    if ("root" === i.tryLoc)
                        return n("end");
                    if (i.tryLoc <= this.prev) {
                        var u = r.call(i, "catchLoc")
                          , c = r.call(i, "finallyLoc");
                        if (u && c) {
                            if (this.prev < i.catchLoc)
                                return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return n(i.finallyLoc)
                        } else if (u) {
                            if (this.prev < i.catchLoc)
                                return n(i.catchLoc, !0)
                        } else {
                            if (!c)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t,
                a.arg = e,
                i ? (this.method = "next",
                this.next = i.finallyLoc,
                l) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                l
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                        return this.complete(r.completion, r.afterLoc),
                        E(r),
                        l
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            E(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: R(t),
                    resultName: e,
                    nextLoc: r
                },
                "next" === this.method && (this.arg = void 0),
                l
            }
        },
        t
    }
    function p(t) {
        return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        p(t)
    }
    function d(t, e, r, n, o, i, a) {
        try {
            var u = t[i](a)
              , c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? e(c) : Promise.resolve(c).then(n, o)
    }
    function h(t) {
        return function() {
            var e = this
              , r = arguments;
            return new Promise((function(n, o) {
                var i = t.apply(e, r);
                function a(t) {
                    d(i, n, o, a, u, "next", t)
                }
                function u(t) {
                    d(i, n, o, a, u, "throw", t)
                }
                a(void 0)
            }
            ))
        }
    }
    function v(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
            r.push.apply(r, n)
        }
        return r
    }
    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? v(Object(r), !0).forEach((function(e) {
                g(t, e, r[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }
            ))
        }
        return t
    }
    function g(t, e, r) {
        return (e = function(t) {
            var e = function(t, e) {
                if ("object" !== p(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== p(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === p(e) ? e : String(e)
        }(e))in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r,
        t
    }
    !function(t) {
        window[t] = window[t] || {},
        window[t].mockPluginSwitchOn = !0,
        window[t].mockPluginRules = [],
        window[t].bottomReminder = !0;
        var e = function(e, r, n) {
            return window[t].mockPluginSwitchOn && window[t].mockPluginRules.reduce((function(t, e) {
                return t.concat(e.apiArr.filter((function(t) {
                    return t.isOpen && [f.normal, f.swagger, f.modifyRequestBody].includes(t.mockWay)
                }
                )).map((function(t) {
                    return m(m({}, t), {}, {
                        pageDomain: e.pageDomain
                    })
                }
                )))
            }
            ), []).find((function(t) {
                var o = t.filterType
                  , i = void 0 === o ? "contains" : o
                  , a = t.apiUrl
                  , u = t.method
                  , c = t.pageDomain
                  , l = t.requestBody
                  , y = t.mockWay;
                return !(r !== u || !function(t) {
                    if (!t)
                        return !0;
                    var e = location.origin;
                    return t.split(/,|，|;|；/).some((function(t) {
                        return t.startsWith(e)
                    }
                    ))
                }(c)) && ("contains" === i && e.indexOf(a) > -1 ? y === f.modifyRequestBody || s(r, n, l) : "equals" === i ? (/^http/.test(e) ? e : "".concat(location.origin).concat(e)) === a && (y === f.modifyRequestBody || s(r, n, l)) : "regexp" === i && e.match(new RegExp(a.replace(/^\/|\/$/g, ""),"i")) ? y === f.modifyRequestBody || s(r, n, l) : void 0)
            }
            )) || {}
        }
          , r = function() {
            var t = h(y().mark((function t() {
                var r, n, o, i, s, l, d, h;
                return y().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (this.readyState !== this.HEADERS_RECEIVED && this.readyState !== this.DONE) {
                                t.next = 19;
                                break
                            }
                            if (r = e(this.requestURL, this.method, this.requestData),
                            n = r.mockResponseData,
                            o = r.mockWay,
                            n) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return");
                        case 4:
                            if (i = this.responseType,
                            s = this.getResponseHeader("content-type"),
                            n) {
                                t.next = 8;
                                break
                            }
                            return t.abrupt("return");
                        case 8:
                            if (this.readyState === this.HEADERS_RECEIVED && (l = this.status || 200,
                            d = this.statusText,
                            Object.defineProperty(this, "status", {
                                get: function() {
                                    return l
                                }
                            }),
                            Object.defineProperty(this, "statusText", {
                                get: function() {
                                    return d
                                }
                            })),
                            this.readyState !== this.DONE) {
                                t.next = 19;
                                break
                            }
                            if (!a(n)) {
                                t.next = 14;
                                break
                            }
                            return t.next = 13,
                            n;
                        case 13:
                            n = t.sent;
                        case 14:
                            ((h = i && !["json", "text"].includes(i)) || [f.modifyRequestBody, f.modifyHeaders].includes(o)) && (n = this.response),
                            h || "object" !== p(n) || n instanceof Blob || "json" !== i && !c(s) || (n = JSON.stringify(n)),
                            Object.defineProperty(this, "response", {
                                get: function() {
                                    return "json" === i ? "object" === p(n) ? n : u(n) : n
                                }
                            }),
                            "" !== i && "text" !== i || Object.defineProperty(this, "responseText", {
                                get: function() {
                                    return n
                                }
                            });
                        case 19:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }()
          , o = XMLHttpRequest
          , i = function() {
            var t = new o;
            return t.addEventListener("readystatechange", r.bind(t), !1),
            t
        };
        i.prototype = o.prototype,
        Object.entries(o).map((function(t) {
            var e, r, n = (r = 2,
            function(t) {
                if (Array.isArray(t))
                    return t
            }(e = t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, u = [], c = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            c = !1
                        } else
                            for (; !(c = (n = i.call(r)).done) && (u.push(n.value),
                            u.length !== e); c = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!c && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return u
                }
            }(e, r) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return l(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(t, e) : void 0
                }
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), o = n[0], a = n[1];
            i[o] = a
        }
        ));
        var d = o.prototype.open;
        i.prototype.open = function(t, e) {
            this.method = t,
            this.requestURL = e,
            d.apply(this, arguments)
        }
        ;
        var v = o.prototype.send;
        i.prototype.send = function(t) {
            var o = this
              , i = e(this.requestURL, this.method, t)
              , a = i.mockResponseData
              , u = i.delay
              , c = i.statusCode
              , s = i.mockWay;
            this.requestData = t;
            var l = [f.modifyRequestBody].includes(s);
            if (!a || l) {
                var y = t;
                try {
                    l && (y = m(m({}, JSON.parse(t || "{}")), JSON.parse(a || "{}")),
                    y = JSON.stringify(y))
                } catch (t) {}
                n("Mock Plugin：The request body for URL: ".concat(this.requestURL, " was modified."), 3e3, a),
                v.apply(this, l ? [y] : arguments)
            } else
                n("Mock Plugin：".concat(this.method, " ").concat(this.requestURL, " is Mocking"), 3e3, a),
                Object.defineProperty(this, "readyState", {
                    get: function() {
                        return o.DONE
                    }
                }),
                Object.defineProperty(this, "status", {
                    get: function() {
                        return c || 200
                    }
                }),
                r.bind(this)(),
                u ? setTimeout((function() {
                    o.onloadend && o.onloadend(),
                    o.onload && o.onload(),
                    o.onreadystatechange && o.onreadystatechange()
                }
                ), u || 0) : (this.onloadend && this.onloadend(),
                this.onload && this.onload(),
                this.onreadystatechange && this.onreadystatechange())
        }
        ;
        var g = o.prototype.setRequestHeader;
        i.prototype.setRequestHeader = function(t, e) {
            this.requestHeaders = this.requestHeaders || {},
            this.requestHeaders[t] = e,
            g.apply(this, arguments)
        }
        ;
        var b = o.prototype.getResponseHeader;
        i.prototype.getResponseHeader = function(t) {
            if (e(this.requestURL, this.method, this.requestData) && t && "content-type" === t.toLowerCase())
                return "application/json;charset=UTF-8";
            b.apply(this, arguments)
        }
        ;
        var w = fetch
          , O = function() {
            var t = h(y().mark((function t(r) {
                var o, i, u, c, s, l, p, d, v, g, b, O = arguments;
                return y().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (o = O.length > 1 && void 0 !== O[1] ? O[1] : {},
                            i = function(t) {
                                return w(r, m(m({}, o), {}, {
                                    body: t
                                }))
                            }
                            ,
                            u = r instanceof Request ? r.clone() : new Request(r.toString(),o),
                            s = e(u.url, u.method, o.body),
                            l = s.mockResponseData,
                            p = s.delay,
                            d = s.statusCode,
                            v = s.mockWay,
                            l && ![f.modifyRequestBody].includes(v)) {
                                t.next = 17;
                                break
                            }
                            return t.prev = 5,
                            g = o.body,
                            [f.modifyRequestBody].includes(v) && (g = m(m({}, JSON.parse(o.body || "{}")), JSON.parse(l)),
                            g = JSON.stringify(g)),
                            n("Mock Plugin：The request body for URL: ".concat(u.url, " was modified."), 3e3, l),
                            t.next = 11,
                            i(g);
                        case 11:
                            c = t.sent,
                            t.next = 16;
                            break;
                        case 14:
                            t.prev = 14,
                            t.t0 = t.catch(5);
                        case 16:
                            return t.abrupt("return", c);
                        case 17:
                            if (!a(l)) {
                                t.next = 21;
                                break
                            }
                            return t.next = 20,
                            l;
                        case 20:
                            l = t.sent;
                        case 21:
                            if (!p) {
                                t.next = 25;
                                break
                            }
                            return b = function() {
                                var t = h(y().mark((function t() {
                                    return y().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", new Promise((function(t) {
                                                    setTimeout((function() {
                                                        t()
                                                    }
                                                    ), p)
                                                }
                                                )));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            t.next = 25,
                            b(p);
                        case 25:
                            return n("Mock Plugin：".concat(u.method, " ").concat(u.url, " is Mocking"), 3e3, l),
                            t.abrupt("return", new Response(new Blob([l]),{
                                status: d || 200,
                                statusText: ""
                            }));
                        case 27:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[5, 14]])
            }
            )));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
        window.XMLHttpRequest = i,
        window.fetch = O,
        window.addEventListener("message", (function(e) {
            var r = e.data;
            if ("mockPluginIntercepter" === r.type && "pageScript" === r.to && (window[t][r.key] = r.value),
            !window[t].mockPluginSwitchOn)
                var n = setTimeout((function() {
                    window.XMLHttpRequest = o,
                    window.fetch = w,
                    clearTimeout(n)
                }
                ), 5e3)
        }
        ))
    }("__overrideAJAX__")
}
)();
