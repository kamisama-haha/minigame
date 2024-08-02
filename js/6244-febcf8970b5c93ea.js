(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6244], {
    3682: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 9992))
    },
    6463: function(e, t, r) {
        "use strict";
        var n = r(1169);
        r.o(n, "redirect") && r.d(t, {
            redirect: function() {
                return n.redirect
            }
        }),
        r.o(n, "usePathname") && r.d(t, {
            usePathname: function() {
                return n.usePathname
            }
        }),
        r.o(n, "useRouter") && r.d(t, {
            useRouter: function() {
                return n.useRouter
            }
        }),
        r.o(n, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return n.useSearchParams
            }
        })
    },
    4492: function(e, t, r) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(2265)
          , i = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , o = n.useState
          , u = n.useEffect
          , s = n.useLayoutEffect
          , a = n.useDebugValue;
        function c(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var r = t();
                return !i(e, r)
            } catch (e) {
                return !0
            }
        }
        var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
            return t()
        }
        : function(e, t) {
            var r = t()
              , n = o({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            })
              , i = n[0].inst
              , l = n[1];
            return s(function() {
                i.value = r,
                i.getSnapshot = t,
                c(i) && l({
                    inst: i
                })
            }, [e, r, t]),
            u(function() {
                return c(i) && l({
                    inst: i
                }),
                e(function() {
                    c(i) && l({
                        inst: i
                    })
                })
            }, [e]),
            a(r),
            r
        }
        ;
        t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l
    },
    5107: function(e, t, r) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(2265)
          , i = r(554)
          , o = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , u = i.useSyncExternalStore
          , s = n.useRef
          , a = n.useEffect
          , c = n.useMemo
          , l = n.useDebugValue;
        t.useSyncExternalStoreWithSelector = function(e, t, r, n, i) {
            var f = s(null);
            if (null === f.current) {
                var d = {
                    hasValue: !1,
                    value: null
                };
                f.current = d
            } else
                d = f.current;
            var v = u(e, (f = c(function() {
                function e(e) {
                    if (!a) {
                        if (a = !0,
                        u = e,
                        e = n(e),
                        void 0 !== i && d.hasValue) {
                            var t = d.value;
                            if (i(t, e))
                                return s = t
                        }
                        return s = e
                    }
                    if (t = s,
                    o(u, e))
                        return t;
                    var r = n(e);
                    return void 0 !== i && i(t, r) ? t : (u = e,
                    s = r)
                }
                var u, s, a = !1, c = void 0 === r ? null : r;
                return [function() {
                    return e(t())
                }
                , null === c ? void 0 : function() {
                    return e(c())
                }
                ]
            }, [t, r, n, i]))[0], f[1]);
            return a(function() {
                d.hasValue = !0,
                d.value = v
            }, [v]),
            l(v),
            v
        }
    },
    554: function(e, t, r) {
        "use strict";
        e.exports = r(4492)
    },
    5006: function(e, t, r) {
        "use strict";
        e.exports = r(5107)
    },
    9992: function(e, t, r) {
        "use strict";
        var n = r(7437)
          , i = r(9354)
          , o = r(7641)
          , u = r(7037)
          , s = r(7138)
          , a = r(6463)
          , c = r(3051);
        let l = [{
            icon: (0,
            n.jsx)("div", {
                className: "flex justify-center items-center rounded-full",
                children: (0,
                n.jsx)(c.oUl, {
                    className: "text-background",
                    size: 20
                })
            }),
            label: "Earn",
            href: "/"
        }, {
            icon: (0,
            n.jsx)(c.e6w, {
                size: 20
            }),
            label: "Leaderboard",
            href: "/leaderboard"
        }, {
            icon: (0,
            n.jsx)(c.TuE, {
                size: 20
            }),
            label: "Referral",
            href: "/referral"
        }, {
            icon: (0,
            n.jsxs)("div", {
                className: "flex justify-center w-5 h-5 items-center rounded-full",
                children: [(0,
                n.jsx)("img", {
                    src: "/svgs/gm-window.svg",
                    className: "h-[14px] pl-[3px]",
                    alt: "$GM"
                }), ","]
            }),
            label: "GM.AI",
            href: "/gm-ai"
        }, {
            icon: (0,
            n.jsx)(c.VWx, {
                size: 20
            }),
            label: "Wallet",
            href: "/wallet"
        }];
        t.default = function(e) {
            let {className: t} = e
              , r = (0,
            a.usePathname)()
              , {user: c} = (0,
            u.Z)()
              , f = e=>r === e;
            return "/convert-to-gm" === r ? null : (0,
            n.jsx)("div", {
                className: (0,
                i.cn)("w-full shrink flex justify-between py-4 bg-background z-999", {
                    "!pb-8": "iOS" === (0,
                    o.H)()
                }, [t]),
                children: l.map((e,t)=>(0,
                n.jsxs)(s.default, {
                    className: "flex w-1/5 items-center cursor-pointer flex-col gap-1",
                    href: "/wallet" !== e.href || (null == c ? void 0 : c.address) ? e.href : "/create-wallet",
                    children: [(0,
                    n.jsx)("div", {
                        className: (0,
                        i.cn)("text-text-neutral", {
                            "text-white": f(e.href) || "/" === e.href && r.includes("/task"),
                            "bg-text-neutral rounded-full": "/" === e.href || "/gm-ai" === e.href,
                            "!bg-white rounded-full": f(e.href) && ("/" === e.href || "/gm-ai" === e.href)
                        }),
                        children: e.icon
                    }), (0,
                    n.jsx)("span", {
                        className: (0,
                        i.cn)("text-xs text-text-neutral", {
                            "text-white": f(e.href)
                        }),
                        children: e.label
                    })]
                }, t))
            })
        }
    },
    9354: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return o
            }
        });
        var n = r(4839)
          , i = r(6164);
        function o() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            i.m6)((0,
            n.W)(t))
        }
    },
    7641: function(e, t, r) {
        "use strict";
        function n() {
            return "iOS";
        }
        r.d(t, {
            H: function() {
                return n
            }
        })
    },
    7037: function(e, t, r) {
        "use strict";
        var n = r(9099);
        let i = {
            user: null,
            mnemonic: ""
        }
          , o = (0,
        n.Ue)(e=>({
            ...i,
            setUser: t=>e({
                user: t
            }),
            setMnemonic: t=>e({
                mnemonic: t
            })
        }));
        t.Z = o
    },
    1810: function(e, t, r) {
        "use strict";
        r.d(t, {
            w_: function() {
                return l
            }
        });
        var n = r(2265)
          , i = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , o = n.createContext && n.createContext(i)
          , u = ["attr", "size", "title"];
        function s() {
            return (s = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function a(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(r), !0).forEach(function(t) {
                    var n, i;
                    n = t,
                    i = r[t],
                    (n = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || !e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : t + ""
                    }(n))in e ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = i
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function l(e) {
            return t=>n.createElement(f, s({
                attr: c({}, e.attr)
            }, t), function e(t) {
                return t && t.map((t,r)=>n.createElement(t.tag, c({
                    key: r
                }, t.attr), e(t.child)))
            }(e.child))
        }
        function f(e) {
            var t = t=>{
                var r, {attr: i, size: o, title: a} = e, l = function(e, t) {
                    if (null == e)
                        return {};
                    var r, n, i = function(e, t) {
                        if (null == e)
                            return {};
                        var r = {};
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0)
                                    continue;
                                r[n] = e[n]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < o.length; n++)
                            r = o[n],
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                    return i
                }(e, u), f = o || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                n.createElement("svg", s({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, i, l, {
                    className: r,
                    style: c(c({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: f,
                    width: f,
                    xmlns: "http://www.w3.org/2000/svg"
                }), a && n.createElement("title", null, a), e.children)
            }
            ;
            return void 0 !== o ? n.createElement(o.Consumer, null, e=>t(e)) : t(i)
        }
    },
    9099: function(e, t, r) {
        "use strict";
        r.d(t, {
            Ue: function() {
                return d
            }
        });
        let n = e=>{
            let t;
            let r = new Set
              , n = (e,n)=>{
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    t = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, t, i),
                    r.forEach(r=>r(t, e))
                }
            }
              , i = ()=>t
              , o = {
                setState: n,
                getState: i,
                getInitialState: ()=>u,
                subscribe: e=>(r.add(e),
                ()=>r.delete(e)),
                destroy: ()=>{
                    console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),
                    r.clear()
                }
            }
              , u = t = e(n, i, o);
            return o
        }
          , i = e=>e ? n(e) : n;
        var o = r(2265)
          , u = r(5006);
        let {useDebugValue: s} = o
          , {useSyncExternalStoreWithSelector: a} = u
          , c = !1
          , l = e=>e
          , f = e=>{
            "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
            let t = "function" == typeof e ? i(e) : e
              , r = (e,r)=>(function(e, t=l, r) {
                r && !c && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),
                c = !0);
                let n = a(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
                return s(n),
                n
            }
            )(t, e, r);
            return Object.assign(r, t),
            r
        }
          , d = e=>e ? f(e) : f
    }
}]);
