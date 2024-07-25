/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qs(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const tt = {}
  , oi = []
  , Zt = ()=>{}
  , Ev = ()=>!1
  , ko = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , kc = e=>e.startsWith("onUpdate:")
  , mt = Object.assign
  , Lc = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Tv = Object.prototype.hasOwnProperty
  , He = (e,t)=>Tv.call(e, t)
  , fe = Array.isArray
  , si = e=>Lo(e) === "[object Map]"
  , Gh = e=>Lo(e) === "[object Set]"
  , Sv = e=>Lo(e) === "[object RegExp]"
  , ye = e=>typeof e == "function"
  , rt = e=>typeof e == "string"
  , ki = e=>typeof e == "symbol"
  , et = e=>e !== null && typeof e == "object"
  , Cc = e=>(et(e) || ye(e)) && ye(e.then) && ye(e.catch)
  , Jh = Object.prototype.toString
  , Lo = e=>Jh.call(e)
  , Av = e=>Lo(e).slice(8, -1)
  , zh = e=>Lo(e) === "[object Object]"
  , Oc = e=>rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ai = qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Ws = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , wv = /-(\w)/g
  , Pn = Ws(e=>e.replace(wv, (t,n)=>n ? n.toUpperCase() : ""))
  , kv = /\B([A-Z])/g
  , Jr = Ws(e=>e.replace(kv, "-$1").toLowerCase())
  , Gs = Ws(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , wa = Ws(e=>e ? `on${Gs(e)}` : "")
  , vr = (e,t)=>!Object.is(e, t)
  , li = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , vs = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , ul = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Qh = e=>{
    const t = rt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Ku;
const Xh = ()=>Ku || (Ku = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ln(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = rt(r) ? Rv(r) : Ln(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (rt(e) || et(e))
        return e
}
const Lv = /;(?![^(]*\))/g
  , Cv = /:([^]+)/
  , Ov = /\/\*[^]*?\*\//g;
function Rv(e) {
    const t = {};
    return e.replace(Ov, "").split(Lv).forEach(n=>{
        if (n) {
            const r = n.split(Cv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Ct(e) {
    let t = "";
    if (rt(e))
        t = e;
    else if (fe(e))
        for (let n = 0; n < e.length; n++) {
            const r = Ct(e[n]);
            r && (t += r + " ")
        }
    else if (et(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function nn(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !rt(t) && (e.class = Ct(t)),
    n && (e.style = Ln(n)),
    e
}
const Iv = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , Pv = qs(Iv)
  , Mv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Dv = qs(Mv);
function Zh(e) {
    return !!e || e === ""
}
const Jt = e=>rt(e) ? e : e == null ? "" : fe(e) || et(e) && (e.toString === Jh || !ye(e.toString)) ? JSON.stringify(e, $h, 2) : String(e)
  , $h = (e,t)=>t && t.__v_isRef ? $h(e, t.value) : si(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,i],o)=>(n[ka(r, o) + " =>"] = i,
    n), {})
} : Gh(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>ka(n))
} : ki(t) ? ka(t) : et(t) && !fe(t) && !zh(t) ? String(t) : t
  , ka = (e,t="")=>{
    var n;
    return ki(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ht;
class ep {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Ht,
        !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ht;
            try {
                return Ht = this,
                t()
            } finally {
                Ht = n
            }
        }
    }
    on() {
        Ht = this
    }
    off() {
        Ht = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Co(e) {
    return new ep(e)
}
function Nv(e, t=Ht) {
    t && t.active && t.effects.push(e)
}
function Oo() {
    return Ht
}
function Js(e) {
    Ht && Ht.cleanups.push(e)
}
let Br;
class Rc {
    constructor(t, n, r, i) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Nv(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            zr();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Vv(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Qr()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = hr
          , n = Br;
        try {
            return hr = !0,
            Br = this,
            this._runnings++,
            Yu(this),
            this.fn()
        } finally {
            qu(this),
            this._runnings--,
            Br = n,
            hr = t
        }
    }
    stop() {
        var t;
        this.active && (Yu(this),
        qu(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Vv(e) {
    return e.value
}
function Yu(e) {
    e._trackId++,
    e._depsLength = 0
}
function qu(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            tp(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function tp(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let hr = !0
  , fl = 0;
const np = [];
function zr() {
    np.push(hr),
    hr = !1
}
function Qr() {
    const e = np.pop();
    hr = e === void 0 ? !0 : e
}
function Ic() {
    fl++
}
function Pc() {
    for (fl--; !fl && dl.length; )
        dl.shift()()
}
function rp(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && tp(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const dl = [];
function ip(e, t, n) {
    Ic();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && dl.push(r.scheduler)))
    }
    Pc()
}
const op = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , _s = new WeakMap
  , xr = Symbol("")
  , hl = Symbol("");
function Bt(e, t, n) {
    if (hr && Br) {
        let r = _s.get(e);
        r || _s.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = op(()=>r.delete(n))),
        rp(Br, i)
    }
}
function Kn(e, t, n, r, i, o) {
    const s = _s.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && fe(e)) {
        const l = Number(r);
        s.forEach((c,u)=>{
            (u === "length" || !ki(u) && u >= l) && a.push(c)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            fe(e) ? Oc(n) && a.push(s.get("length")) : (a.push(s.get(xr)),
            si(e) && a.push(s.get(hl)));
            break;
        case "delete":
            fe(e) || (a.push(s.get(xr)),
            si(e) && a.push(s.get(hl)));
            break;
        case "set":
            si(e) && a.push(s.get(xr));
            break
        }
    Ic();
    for (const l of a)
        l && ip(l, 4);
    Pc()
}
function Uv(e, t) {
    var n;
    return (n = _s.get(e)) == null ? void 0 : n.get(t)
}
const Bv = qs("__proto__,__v_isRef,__isVue")
  , sp = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(ki))
  , Wu = xv();
function xv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = De(this);
            for (let o = 0, s = this.length; o < s; o++)
                Bt(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(De)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            zr(),
            Ic();
            const r = De(this)[t].apply(this, n);
            return Pc(),
            Qr(),
            r
        }
    }
    ),
    e
}
function Fv(e) {
    const t = De(this);
    return Bt(t, "has", e),
    t.hasOwnProperty(e)
}
class ap {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        const i = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !i;
        if (n === "__v_isReadonly")
            return i;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (i ? o ? $v : fp : o ? up : cp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = fe(t);
        if (!i) {
            if (s && He(Wu, n))
                return Reflect.get(Wu, n, r);
            if (n === "hasOwnProperty")
                return Fv
        }
        const a = Reflect.get(t, n, r);
        return (ki(n) ? sp.has(n) : Bv(n)) || (i || Bt(t, "get", n),
        o) ? a : st(a) ? s && Oc(n) ? a : a.value : et(a) ? i ? ur(a) : Et(a) : a
    }
}
class lp extends ap {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Kr(o);
            if (!bs(r) && !Kr(r) && (o = De(o),
            r = De(r)),
            !fe(t) && st(o) && !st(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const s = fe(t) && Oc(n) ? Number(n) < t.length : He(t, n)
          , a = Reflect.set(t, n, r, i);
        return t === De(i) && (s ? vr(r, o) && Kn(t, "set", n, r) : Kn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = He(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && Kn(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!ki(n) || !sp.has(n)) && Bt(t, "has", n),
        r
    }
    ownKeys(t) {
        return Bt(t, "iterate", fe(t) ? "length" : xr),
        Reflect.ownKeys(t)
    }
}
class Hv extends ap {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const jv = new lp
  , Kv = new Hv
  , Yv = new lp(!0)
  , Mc = e=>e
  , zs = e=>Reflect.getPrototypeOf(e);
function qo(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = De(e)
      , o = De(t);
    n || (vr(t, o) && Bt(i, "get", t),
    Bt(i, "get", o));
    const {has: s} = zs(i)
      , a = r ? Mc : n ? Vc : so;
    if (s.call(i, t))
        return a(e.get(t));
    if (s.call(i, o))
        return a(e.get(o));
    e !== i && e.get(t)
}
function Wo(e, t=!1) {
    const n = this.__v_raw
      , r = De(n)
      , i = De(e);
    return t || (vr(e, i) && Bt(r, "has", e),
    Bt(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Go(e, t=!1) {
    return e = e.__v_raw,
    !t && Bt(De(e), "iterate", xr),
    Reflect.get(e, "size", e)
}
function Gu(e) {
    e = De(e);
    const t = De(this);
    return zs(t).has.call(t, e) || (t.add(e),
    Kn(t, "add", e, e)),
    this
}
function Ju(e, t) {
    t = De(t);
    const n = De(this)
      , {has: r, get: i} = zs(n);
    let o = r.call(n, e);
    o || (e = De(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? vr(t, s) && Kn(n, "set", e, t) : Kn(n, "add", e, t),
    this
}
function zu(e) {
    const t = De(this)
      , {has: n, get: r} = zs(t);
    let i = n.call(t, e);
    i || (e = De(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && Kn(t, "delete", e, void 0),
    o
}
function Qu() {
    const e = De(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Kn(e, "clear", void 0, void 0),
    n
}
function Jo(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , a = De(s)
          , l = t ? Mc : e ? Vc : so;
        return !e && Bt(a, "iterate", xr),
        s.forEach((c,u)=>r.call(i, l(c), l(u), o))
    }
}
function zo(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = De(i)
          , s = si(o)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , c = i[e](...r)
          , u = n ? Mc : t ? Vc : so;
        return !t && Bt(o, "iterate", l ? hl : xr),
        {
            next() {
                const {value: f, done: d} = c.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Jn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function qv() {
    const e = {
        get(o) {
            return qo(this, o)
        },
        get size() {
            return Go(this)
        },
        has: Wo,
        add: Gu,
        set: Ju,
        delete: zu,
        clear: Qu,
        forEach: Jo(!1, !1)
    }
      , t = {
        get(o) {
            return qo(this, o, !1, !0)
        },
        get size() {
            return Go(this)
        },
        has: Wo,
        add: Gu,
        set: Ju,
        delete: zu,
        clear: Qu,
        forEach: Jo(!1, !0)
    }
      , n = {
        get(o) {
            return qo(this, o, !0)
        },
        get size() {
            return Go(this, !0)
        },
        has(o) {
            return Wo.call(this, o, !0)
        },
        add: Jn("add"),
        set: Jn("set"),
        delete: Jn("delete"),
        clear: Jn("clear"),
        forEach: Jo(!0, !1)
    }
      , r = {
        get(o) {
            return qo(this, o, !0, !0)
        },
        get size() {
            return Go(this, !0)
        },
        has(o) {
            return Wo.call(this, o, !0)
        },
        add: Jn("add"),
        set: Jn("set"),
        delete: Jn("delete"),
        clear: Jn("clear"),
        forEach: Jo(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = zo(o, !1, !1),
        n[o] = zo(o, !0, !1),
        t[o] = zo(o, !1, !0),
        r[o] = zo(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [Wv,Gv,Jv,zv] = qv();
function Dc(e, t) {
    const n = t ? e ? zv : Jv : e ? Gv : Wv;
    return (r,i,o)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(He(n, i) && i in r ? n : r, i, o)
}
const Qv = {
    get: Dc(!1, !1)
}
  , Xv = {
    get: Dc(!1, !0)
}
  , Zv = {
    get: Dc(!0, !1)
}
  , cp = new WeakMap
  , up = new WeakMap
  , fp = new WeakMap
  , $v = new WeakMap;
function e0(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function t0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : e0(Av(e))
}
function Et(e) {
    return Kr(e) ? e : Nc(e, !1, jv, Qv, cp)
}
function Li(e) {
    return Nc(e, !1, Yv, Xv, up)
}
function ur(e) {
    return Nc(e, !0, Kv, Zv, fp)
}
function Nc(e, t, n, r, i) {
    if (!et(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = t0(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return i.set(e, a),
    a
}
function pr(e) {
    return Kr(e) ? pr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Kr(e) {
    return !!(e && e.__v_isReadonly)
}
function bs(e) {
    return !!(e && e.__v_isShallow)
}
function dp(e) {
    return pr(e) || Kr(e)
}
function De(e) {
    const t = e && e.__v_raw;
    return t ? De(t) : e
}
function ft(e) {
    return Object.isExtensible(e) && vs(e, "__v_skip", !0),
    e
}
const so = e=>et(e) ? Et(e) : e
  , Vc = e=>et(e) ? ur(e) : e;
class hp {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Rc(()=>t(this._value),()=>ci(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = De(this);
        return (!t._cacheable || t.effect.dirty) && vr(t._value, t._value = t.effect.run()) && ci(t, 4),
        Uc(t),
        t.effect._dirtyLevel >= 2 && ci(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function n0(e, t, n=!1) {
    let r, i;
    const o = ye(e);
    return o ? (r = e,
    i = Zt) : (r = e.get,
    i = e.set),
    new hp(r,i,o || !i,n)
}
function Uc(e) {
    var t;
    hr && Br && (e = De(e),
    rp(Br, (t = e.dep) != null ? t : e.dep = op(()=>e.dep = void 0, e instanceof hp ? e : void 0)))
}
function ci(e, t=4, n) {
    e = De(e);
    const r = e.dep;
    r && ip(r, t)
}
function st(e) {
    return !!(e && e.__v_isRef === !0)
}
function le(e) {
    return pp(e, !1)
}
function hn(e) {
    return pp(e, !0)
}
function pp(e, t) {
    return st(e) ? e : new r0(e,t)
}
class r0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : De(t),
        this._value = n ? t : so(t)
    }
    get value() {
        return Uc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || bs(t) || Kr(t);
        t = n ? t : De(t),
        vr(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : so(t),
        ci(this, 4))
    }
}
function mp(e) {
    ci(e, 4)
}
function G(e) {
    return st(e) ? e.value : e
}
const i0 = {
    get: (e,t,n)=>G(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const i = e[t];
        return st(i) && !st(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function gp(e) {
    return pr(e) ? e : new Proxy(e,i0)
}
class o0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>Uc(this), ()=>ci(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function yp(e) {
    return new o0(e)
}
function Bc(e) {
    const t = fe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = vp(e, n);
    return t
}
class s0 {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Uv(De(this._object), this._key)
    }
}
class a0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function ri(e, t, n) {
    return st(e) ? e : ye(e) ? new a0(e) : et(e) && arguments.length > 1 ? vp(e, t, n) : le(e)
}
function vp(e, t, n) {
    const r = e[t];
    return st(r) ? r : new s0(e,t,n)
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        Ro(i, t, n)
    }
}
function tn(e, t, n, r) {
    if (ye(e)) {
        const o = mr(e, t, n, r);
        return o && Cc(o) && o.catch(s=>{
            Ro(s, t, n)
        }
        ),
        o
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        i.push(tn(e[o], t, n, r));
    return i
}
function Ro(e, t, n, r=!0) {
    const i = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const s = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const c = o.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, s, a) === !1)
                        return
            }
            o = o.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            mr(l, null, 10, [e, s, a]);
            return
        }
    }
    l0(e, n, i, r)
}
function l0(e, t, n, r=!0) {
    console.error(e)
}
let ao = !1
  , pl = !1;
const At = [];
let An = 0;
const ui = [];
let ir = null
  , Nr = 0;
const _p = Promise.resolve();
let xc = null;
function Kt(e) {
    const t = xc || _p;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function c0(e) {
    let t = An + 1
      , n = At.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = At[r]
          , o = lo(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function Fc(e) {
    (!At.length || !At.includes(e, ao && e.allowRecurse ? An + 1 : An)) && (e.id == null ? At.push(e) : At.splice(c0(e.id), 0, e),
    bp())
}
function bp() {
    !ao && !pl && (pl = !0,
    xc = _p.then(Ep))
}
function u0(e) {
    const t = At.indexOf(e);
    t > An && At.splice(t, 1)
}
function ml(e) {
    fe(e) ? ui.push(...e) : (!ir || !ir.includes(e, e.allowRecurse ? Nr + 1 : Nr)) && ui.push(e),
    bp()
}
function Xu(e, t, n=ao ? An + 1 : 0) {
    for (; n < At.length; n++) {
        const r = At[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            At.splice(n, 1),
            n--,
            r()
        }
    }
}
function Es(e) {
    if (ui.length) {
        const t = [...new Set(ui)].sort((n,r)=>lo(n) - lo(r));
        if (ui.length = 0,
        ir) {
            ir.push(...t);
            return
        }
        for (ir = t,
        Nr = 0; Nr < ir.length; Nr++)
            ir[Nr]();
        ir = null,
        Nr = 0
    }
}
const lo = e=>e.id == null ? 1 / 0 : e.id
  , f0 = (e,t)=>{
    const n = lo(e) - lo(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Ep(e) {
    pl = !1,
    ao = !0,
    At.sort(f0);
    try {
        for (An = 0; An < At.length; An++) {
            const t = At[An];
            t && t.active !== !1 && mr(t, null, 14)
        }
    } finally {
        An = 0,
        At.length = 0,
        Es(),
        ao = !1,
        xc = null,
        (At.length || ui.length) && Ep()
    }
}
function d0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || tt;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const u = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[u] || tt;
        d && (i = n.map(m=>rt(m) ? m.trim() : m)),
        f && (i = n.map(ul))
    }
    let a, l = r[a = wa(t)] || r[a = wa(Pn(t))];
    !l && o && (l = r[a = wa(Jr(t))]),
    l && tn(l, e, 6, i);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        tn(c, e, 6, i)
    }
}
function Tp(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let s = {}
      , a = !1;
    if (!ye(e)) {
        const l = c=>{
            const u = Tp(c, t, !0);
            u && (a = !0,
            mt(s, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (et(e) && r.set(e, null),
    null) : (fe(o) ? o.forEach(l=>s[l] = null) : mt(s, o),
    et(e) && r.set(e, s),
    s)
}
function Qs(e, t) {
    return !e || !ko(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    He(e, t[0].toLowerCase() + t.slice(1)) || He(e, Jr(t)) || He(e, t))
}
let dt = null
  , Xs = null;
function Ts(e) {
    const t = dt;
    return dt = e,
    Xs = e && e.type.__scopeId || null,
    t
}
function h0(e) {
    Xs = e
}
function p0() {
    Xs = null
}
const m0 = e=>rn;
function rn(e, t=dt, n) {
    if (!t || e._n)
        return e;
    const r = (...i)=>{
        r._d && df(-1);
        const o = Ts(t);
        let s;
        try {
            s = e(...i)
        } finally {
            Ts(o),
            r._d && df(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function La(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, props: o, propsOptions: [s], slots: a, attrs: l, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: _, inheritAttrs: b} = e;
    let S, g;
    const E = Ts(e);
    try {
        if (n.shapeFlag & 4) {
            const y = i || r
              , T = y;
            S = zt(u.call(T, y, f, o, m, d, _)),
            g = l
        } else {
            const y = t;
            S = zt(y.length > 1 ? y(o, {
                attrs: l,
                slots: a,
                emit: c
            }) : y(o, null)),
            g = t.props ? l : y0(l)
        }
    } catch (y) {
        Yi.length = 0,
        Ro(y, e, 1),
        S = Xe(Ot)
    }
    let p = S;
    if (g && b !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: T} = p;
        y.length && T & 7 && (s && y.some(kc) && (g = v0(g, s)),
        p = Yn(p, g))
    }
    return n.dirs && (p = Yn(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    S = p,
    Ts(E),
    S
}
function g0(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (gi(i)) {
            if (i.type !== Ot || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const y0 = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || ko(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , v0 = (e,t)=>{
    const n = {};
    for (const r in e)
        (!kc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function _0(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: a, patchFlag: l} = t
      , c = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Zu(r, s, c) : !!s;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (s[d] !== r[d] && !Qs(c, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? Zu(r, s, c) : !0 : !!s;
    return !1
}
function Zu(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !Qs(n, o))
            return !0
    }
    return !1
}
function Hc({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const jc = "components"
  , b0 = "directives";
function Yr(e, t) {
    return Kc(jc, e, !0, t) || e
}
const Sp = Symbol.for("v-ndc");
function gl(e) {
    return rt(e) ? Kc(jc, e, !1) || e : e || Sp
}
function CM(e) {
    return Kc(b0, e)
}
function Kc(e, t, n=!0, r=!1) {
    const i = dt || vt;
    if (i) {
        const o = i.type;
        if (e === jc) {
            const a = Cl(o, !1);
            if (a && (a === t || a === Pn(t) || a === Gs(Pn(t))))
                return o
        }
        const s = $u(i[e] || o[e], t) || $u(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function $u(e, t) {
    return e && (e[t] || e[Pn(t)] || e[Gs(Pn(t))])
}
const Ap = e=>e.__isSuspense;
let yl = 0;
const E0 = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, i, o, s, a, l, c) {
        if (e == null)
            T0(t, n, r, i, o, s, a, l, c);
        else {
            if (o && o.deps > 0) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            S0(e, t, n, r, i, s, a, l, c)
        }
    },
    hydrate: A0,
    create: qc,
    normalize: w0
}
  , Yc = E0;
function co(e, t) {
    const n = e.props && e.props[t];
    ye(n) && n()
}
function T0(e, t, n, r, i, o, s, a, l) {
    const {p: c, o: {createElement: u}} = l
      , f = u("div")
      , d = e.suspense = qc(e, i, r, t, f, n, o, s, a, l);
    c(null, d.pendingBranch = e.ssContent, f, null, r, d, o, s),
    d.deps > 0 ? (co(e, "onPending"),
    co(e, "onFallback"),
    c(null, e.ssFallback, t, n, r, null, o, s),
    fi(d, e.ssFallback)) : d.resolve(!1, !0)
}
function S0(e, t, n, r, i, o, s, a, {p: l, um: c, o: {createElement: u}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: _, pendingBranch: b, isInFallback: S, isHydrating: g} = f;
    if (b)
        f.pendingBranch = d,
        cn(d, b) ? (l(b, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : S && (g || (l(_, m, n, r, i, null, o, s, a),
        fi(f, m)))) : (f.pendingId = yl++,
        g ? (f.isHydrating = !1,
        f.activeBranch = b) : c(b, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = u("div"),
        S ? (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : (l(_, m, n, r, i, null, o, s, a),
        fi(f, m))) : _ && cn(d, _) ? (l(_, d, n, r, i, f, o, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 && f.resolve()));
    else if (_ && cn(d, _))
        l(_, d, n, r, i, f, o, s, a),
        fi(f, d);
    else if (co(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = yl++,
    l(null, d, f.hiddenContainer, null, i, f, o, s, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: E, pendingId: p} = f;
        E > 0 ? setTimeout(()=>{
            f.pendingId === p && f.fallback(m)
        }
        , E) : E === 0 && f.fallback(m)
    }
}
function qc(e, t, n, r, i, o, s, a, l, c, u=!1) {
    const {p: f, m: d, um: m, n: _, o: {parentNode: b, remove: S}} = c;
    let g;
    const E = k0(e);
    E && t != null && t.pendingBranch && (g = t.pendingId,
    t.deps++);
    const p = e.props ? Qh(e.props.timeout) : void 0
      , y = o
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: yl++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !u,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(A=!1, L=!1) {
            const {vnode: C, activeBranch: O, pendingBranch: D, pendingId: F, effects: U, parentComponent: Z, container: W} = T;
            let K = !1;
            T.isHydrating ? T.isHydrating = !1 : A || (K = O && D.transition && D.transition.mode === "out-in",
            K && (O.transition.afterLeave = ()=>{
                F === T.pendingId && (d(D, W, o === y ? _(O) : o, 0),
                ml(U))
            }
            ),
            O && (b(O.el) !== T.hiddenContainer && (o = _(O)),
            m(O, Z, T, !0)),
            K || d(D, W, o, 0)),
            fi(T, D),
            T.pendingBranch = null,
            T.isInFallback = !1;
            let N = T.parent
              , Y = !1;
            for (; N; ) {
                if (N.pendingBranch) {
                    N.effects.push(...U),
                    Y = !0;
                    break
                }
                N = N.parent
            }
            !Y && !K && ml(U),
            T.effects = [],
            E && t && t.pendingBranch && g === t.pendingId && (t.deps--,
            t.deps === 0 && !L && t.resolve()),
            co(C, "onResolve")
        },
        fallback(A) {
            if (!T.pendingBranch)
                return;
            const {vnode: L, activeBranch: C, parentComponent: O, container: D, namespace: F} = T;
            co(L, "onFallback");
            const U = _(C)
              , Z = ()=>{
                T.isInFallback && (f(null, A, D, U, O, null, F, a, l),
                fi(T, A))
            }
              , W = A.transition && A.transition.mode === "out-in";
            W && (C.transition.afterLeave = Z),
            T.isInFallback = !0,
            m(C, O, null, !0),
            W || Z()
        },
        move(A, L, C) {
            T.activeBranch && d(T.activeBranch, A, L, C),
            T.container = A
        },
        next() {
            return T.activeBranch && _(T.activeBranch)
        },
        registerDep(A, L) {
            const C = !!T.pendingBranch;
            C && T.deps++;
            const O = A.vnode.el;
            A.asyncDep.catch(D=>{
                Ro(D, A, 0)
            }
            ).then(D=>{
                if (A.isUnmounted || T.isUnmounted || T.pendingId !== A.suspenseId)
                    return;
                A.asyncResolved = !0;
                const {vnode: F} = A;
                Ll(A, D, !1),
                O && (F.el = O);
                const U = !O && A.subTree.el;
                L(A, F, b(O || A.subTree.el), O ? null : _(A.subTree), T, s, l),
                U && S(U),
                Hc(A, F.el),
                C && --T.deps === 0 && T.resolve()
            }
            )
        },
        unmount(A, L) {
            T.isUnmounted = !0,
            T.activeBranch && m(T.activeBranch, n, A, L),
            T.pendingBranch && m(T.pendingBranch, n, A, L)
        }
    };
    return T
}
function A0(e, t, n, r, i, o, s, a, l) {
    const c = t.suspense = qc(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, a, !0)
      , u = l(e, c.pendingBranch = t.ssContent, n, c, o, s);
    return c.deps === 0 && c.resolve(!1, !0),
    u
}
function w0(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = ef(r ? n.default : n),
    e.ssFallback = r ? ef(n.fallback) : Xe(Ot)
}
function ef(e) {
    let t;
    if (ye(e)) {
        const n = mi && e._c;
        n && (e._d = !1,
        pe()),
        e = e(),
        n && (e._d = !0,
        t = $t,
        Wp())
    }
    return fe(e) && (e = g0(e)),
    e = zt(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function wp(e, t) {
    t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : ml(e)
}
function fi(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let i = t.el;
    for (; !i && t.component; )
        t = t.component.subTree,
        i = t.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    Hc(r, i))
}
function k0(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const L0 = Symbol.for("v-scx")
  , C0 = ()=>bt(L0);
function O0(e, t) {
    return Wc(e, null, t)
}
const Qo = {};
function Fe(e, t, n) {
    return Wc(e, t, n)
}
function Wc(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: a}=tt) {
    if (t && o) {
        const A = t;
        t = (...L)=>{
            A(...L),
            T()
        }
    }
    const l = vt
      , c = A=>r === !0 ? A : Vr(A, r === !1 ? 1 : void 0);
    let u, f = !1, d = !1;
    if (st(e) ? (u = ()=>e.value,
    f = bs(e)) : pr(e) ? (u = ()=>c(e),
    f = !0) : fe(e) ? (d = !0,
    f = e.some(A=>pr(A) || bs(A)),
    u = ()=>e.map(A=>{
        if (st(A))
            return A.value;
        if (pr(A))
            return c(A);
        if (ye(A))
            return mr(A, l, 2)
    }
    )) : ye(e) ? t ? u = ()=>mr(e, l, 2) : u = ()=>(m && m(),
    tn(e, l, 3, [_])) : u = Zt,
    t && r) {
        const A = u;
        u = ()=>Vr(A())
    }
    let m, _ = A=>{
        m = p.onStop = ()=>{
            mr(A, l, 4),
            m = p.onStop = void 0
        }
    }
    , b;
    if (na)
        if (_ = Zt,
        t ? n && tn(t, l, 3, [u(), d ? [] : void 0, _]) : u(),
        i === "sync") {
            const A = C0();
            b = A.__watcherHandles || (A.__watcherHandles = [])
        } else
            return Zt;
    let S = d ? new Array(e.length).fill(Qo) : Qo;
    const g = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const A = p.run();
                (r || f || (d ? A.some((L,C)=>vr(L, S[C])) : vr(A, S))) && (m && m(),
                tn(t, l, 3, [A, S === Qo ? void 0 : d && S[0] === Qo ? [] : S, _]),
                S = A)
            } else
                p.run()
    }
    ;
    g.allowRecurse = !!t;
    let E;
    i === "sync" ? E = g : i === "post" ? E = ()=>Tt(g, l && l.suspense) : (g.pre = !0,
    l && (g.id = l.uid),
    E = ()=>Fc(g));
    const p = new Rc(u,Zt,E)
      , y = Oo()
      , T = ()=>{
        p.stop(),
        y && Lc(y.effects, p)
    }
    ;
    return t ? n ? g() : S = p.run() : i === "post" ? Tt(p.run.bind(p), l && l.suspense) : p.run(),
    b && b.push(T),
    T
}
function R0(e, t, n) {
    const r = this.proxy
      , i = rt(e) ? e.includes(".") ? kp(r, e) : ()=>r[e] : e.bind(r, r);
    let o;
    ye(t) ? o = t : (o = t.handler,
    n = t);
    const s = Wr(this)
      , a = Wc(i, o.bind(r), n);
    return s(),
    a
}
function kp(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Vr(e, t, n=0, r) {
    if (!et(e) || e.__v_skip)
        return e;
    if (t && t > 0) {
        if (n >= t)
            return e;
        n++
    }
    if (r = r || new Set,
    r.has(e))
        return e;
    if (r.add(e),
    st(e))
        Vr(e.value, t, n, r);
    else if (fe(e))
        for (let i = 0; i < e.length; i++)
            Vr(e[i], t, n, r);
    else if (Gh(e) || si(e))
        e.forEach(i=>{
            Vr(i, t, n, r)
        }
        );
    else if (zh(e))
        for (const i in e)
            Vr(e[i], t, n, r);
    return e
}
function OM(e, t) {
    if (dt === null)
        return e;
    const n = ra(dt) || dt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,a,l=tt] = t[i];
        o && (ye(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Vr(s),
        r.push({
            dir: o,
            instance: n,
            value: s,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function Sn(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        o && (a.oldValue = o[s].value);
        let l = a.dir[r];
        l && (zr(),
        tn(l, n, 8, [e.el, a, e, t]),
        Qr())
    }
}
const or = Symbol("_leaveCb")
  , Xo = Symbol("_enterCb");
function I0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Rt(()=>{
        e.isMounted = !0
    }
    ),
    gn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Wt = [Function, Array]
  , Lp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Wt,
    onEnter: Wt,
    onAfterEnter: Wt,
    onEnterCancelled: Wt,
    onBeforeLeave: Wt,
    onLeave: Wt,
    onAfterLeave: Wt,
    onLeaveCancelled: Wt,
    onBeforeAppear: Wt,
    onAppear: Wt,
    onAfterAppear: Wt,
    onAppearCancelled: Wt
}
  , P0 = {
    name: "BaseTransition",
    props: Lp,
    setup(e, {slots: t}) {
        const n = yn()
          , r = I0();
        return ()=>{
            const i = t.default && Op(t.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const d of i)
                    if (d.type !== Ot) {
                        o = d;
                        break
                    }
            }
            const s = De(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Ca(o);
            const l = tf(o);
            if (!l)
                return Ca(o);
            const c = vl(l, s, r, n);
            Ss(l, c);
            const u = n.subTree
              , f = u && tf(u);
            if (f && f.type !== Ot && !cn(l, f)) {
                const d = vl(f, s, r, n);
                if (Ss(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ca(o);
                a === "in-out" && l.type !== Ot && (d.delayLeave = (m,_,b)=>{
                    const S = Cp(r, f);
                    S[String(f.key)] = f,
                    m[or] = ()=>{
                        _(),
                        m[or] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = b
                }
                )
            }
            return o
        }
    }
}
  , M0 = P0;
function Cp(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function vl(e, t, n, r) {
    const {appear: i, mode: o, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: b, onAppear: S, onAfterAppear: g, onAppearCancelled: E} = t
      , p = String(e.key)
      , y = Cp(n, e)
      , T = (C,O)=>{
        C && tn(C, r, 9, O)
    }
      , A = (C,O)=>{
        const D = O[1];
        T(C, O),
        fe(C) ? C.every(F=>F.length <= 1) && D() : C.length <= 1 && D()
    }
      , L = {
        mode: o,
        persisted: s,
        beforeEnter(C) {
            let O = a;
            if (!n.isMounted)
                if (i)
                    O = b || a;
                else
                    return;
            C[or] && C[or](!0);
            const D = y[p];
            D && cn(e, D) && D.el[or] && D.el[or](),
            T(O, [C])
        },
        enter(C) {
            let O = l
              , D = c
              , F = u;
            if (!n.isMounted)
                if (i)
                    O = S || l,
                    D = g || c,
                    F = E || u;
                else
                    return;
            let U = !1;
            const Z = C[Xo] = W=>{
                U || (U = !0,
                W ? T(F, [C]) : T(D, [C]),
                L.delayedLeave && L.delayedLeave(),
                C[Xo] = void 0)
            }
            ;
            O ? A(O, [C, Z]) : Z()
        },
        leave(C, O) {
            const D = String(e.key);
            if (C[Xo] && C[Xo](!0),
            n.isUnmounting)
                return O();
            T(f, [C]);
            let F = !1;
            const U = C[or] = Z=>{
                F || (F = !0,
                O(),
                Z ? T(_, [C]) : T(m, [C]),
                C[or] = void 0,
                y[D] === e && delete y[D])
            }
            ;
            y[D] = e,
            d ? A(d, [C, U]) : U()
        },
        clone(C) {
            return vl(C, t, n, r)
        }
    };
    return L
}
function Ca(e) {
    if (Zs(e))
        return e = Yn(e),
        e.children = null,
        e
}
function tf(e) {
    return Zs(e) ? e.children ? e.children[0] : void 0 : e
}
function Ss(e, t) {
    e.shapeFlag & 6 && e.component ? Ss(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Op(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === ht ? (s.patchFlag & 128 && i++,
        r = r.concat(Op(s.children, t, a))) : (t || s.type !== Ot) && r.push(a != null ? Yn(s, {
            key: a
        }) : s)
    }
    if (i > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Ve(e, t) {
    return ye(e) ? mt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Fr = e=>!!e.type.__asyncLoader
  , Zs = e=>e.type.__isKeepAlive
  , D0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = yn()
          , r = n.ctx;
        if (!r.renderer)
            return ()=>{
                const E = t.default && t.default();
                return E && E.length === 1 ? E[0] : E
            }
            ;
        const i = new Map
          , o = new Set;
        let s = null;
        const a = n.suspense
          , {renderer: {p: l, m: c, um: u, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (E,p,y,T,A)=>{
            const L = E.component;
            c(E, p, y, 0, a),
            l(L.vnode, E, p, y, L, a, T, E.slotScopeIds, A),
            Tt(()=>{
                L.isDeactivated = !1,
                L.a && li(L.a);
                const C = E.props && E.props.onVnodeMounted;
                C && Dt(C, L.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            c(E, d, null, 1, a),
            Tt(()=>{
                p.da && li(p.da);
                const y = E.props && E.props.onVnodeUnmounted;
                y && Dt(y, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Oa(E),
            u(E, n, a, !0)
        }
        function _(E) {
            i.forEach((p,y)=>{
                const T = Cl(p.type);
                T && (!E || !E(T)) && b(y)
            }
            )
        }
        function b(E) {
            const p = i.get(E);
            !s || !cn(p, s) ? m(p) : s && Oa(s),
            i.delete(E),
            o.delete(E)
        }
        Fe(()=>[e.include, e.exclude], ([E,p])=>{
            E && _(y=>Bi(E, y)),
            p && _(y=>!Bi(p, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let S = null;
        const g = ()=>{
            S != null && i.set(S, Ra(n.subTree))
        }
        ;
        return Rt(g),
        Gc(g),
        gn(()=>{
            i.forEach(E=>{
                const {subTree: p, suspense: y} = n
                  , T = Ra(p);
                if (E.type === T.type && E.key === T.key) {
                    Oa(T);
                    const A = T.component.da;
                    A && Tt(A, y);
                    return
                }
                m(E)
            }
            )
        }
        ),
        ()=>{
            if (S = null,
            !t.default)
                return null;
            const E = t.default()
              , p = E[0];
            if (E.length > 1)
                return s = null,
                E;
            if (!gi(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
                return s = null,
                p;
            let y = Ra(p);
            const T = y.type
              , A = Cl(Fr(y) ? y.type.__asyncResolved || {} : T)
              , {include: L, exclude: C, max: O} = e;
            if (L && (!A || !Bi(L, A)) || C && A && Bi(C, A))
                return s = y,
                p;
            const D = y.key == null ? T : y.key
              , F = i.get(D);
            return y.el && (y = Yn(y),
            p.shapeFlag & 128 && (p.ssContent = y)),
            S = D,
            F ? (y.el = F.el,
            y.component = F.component,
            y.transition && Ss(y, y.transition),
            y.shapeFlag |= 512,
            o.delete(D),
            o.add(D)) : (o.add(D),
            O && o.size > parseInt(O, 10) && b(o.values().next().value)),
            y.shapeFlag |= 256,
            s = y,
            Ap(p.type) ? p : y
        }
    }
}
  , N0 = D0;
function Bi(e, t) {
    return fe(e) ? e.some(n=>Bi(n, t)) : rt(e) ? e.split(",").includes(t) : Sv(e) ? e.test(t) : !1
}
function Rp(e, t) {
    Pp(e, "a", t)
}
function Ip(e, t) {
    Pp(e, "da", t)
}
function Pp(e, t, n=vt) {
    const r = e.__wdc || (e.__wdc = ()=>{
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return e()
    }
    );
    if ($s(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            Zs(i.parent.vnode) && V0(r, t, n, i),
            i = i.parent
    }
}
function V0(e, t, n, r) {
    const i = $s(t, e, r, !0);
    Ci(()=>{
        Lc(r[t], i)
    }
    , n)
}
function Oa(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Ra(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function $s(e, t, n=vt, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            zr();
            const a = Wr(n)
              , l = tn(t, n, e, s);
            return a(),
            Qr(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const qn = e=>(t,n=vt)=>(!na || e === "sp") && $s(e, (...r)=>t(...r), n)
  , U0 = qn("bm")
  , Rt = qn("m")
  , B0 = qn("bu")
  , Gc = qn("u")
  , gn = qn("bum")
  , Ci = qn("um")
  , x0 = qn("sp")
  , F0 = qn("rtg")
  , H0 = qn("rtc");
function Mp(e, t=vt) {
    $s("ec", e, t)
}
function j0(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (fe(e) || rt(e)) {
        i = new Array(e.length);
        for (let s = 0, a = e.length; s < a; s++)
            i[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o && o[s])
    } else if (et(e))
        if (e[Symbol.iterator])
            i = Array.from(e, (s,a)=>t(s, a, void 0, o && o[a]));
        else {
            const s = Object.keys(e);
            i = new Array(s.length);
            for (let a = 0, l = s.length; a < l; a++) {
                const c = s[a];
                i[a] = t(e[c], c, a, o && o[a])
            }
        }
    else
        i = [];
    return n && (n[r] = i),
    i
}
function _r(e, t, n={}, r, i) {
    if (dt.isCE || dt.parent && Fr(dt.parent) && dt.parent.isCE)
        return t !== "default" && (n.name = t),
        Xe("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    pe();
    const s = o && Dp(o(n))
      , a = yt(ht, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function Dp(e) {
    return e.some(t=>gi(t) ? !(t.type === Ot || t.type === ht && !Dp(t.children)) : !0) ? e : null
}
const _l = e=>e ? Qp(e) ? ra(e) || e.proxy : _l(e.parent) : null
  , Hi = mt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>_l(e.parent),
    $root: e=>_l(e.root),
    $emit: e=>e.emit,
    $options: e=>Jc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        Fc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Kt.bind(e.proxy)),
    $watch: e=>R0.bind(e)
})
  , Ia = (e,t)=>e !== tt && !e.__isScriptSetup && He(e, t)
  , K0 = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: i, props: o, accessCache: s, type: a, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const m = s[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return r[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (Ia(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== tt && He(i, t))
                    return s[t] = 2,
                    i[t];
                if ((c = e.propsOptions[0]) && He(c, t))
                    return s[t] = 3,
                    o[t];
                if (n !== tt && He(n, t))
                    return s[t] = 4,
                    n[t];
                El && (s[t] = 0)
            }
        }
        const u = Hi[t];
        let f, d;
        if (u)
            return t === "$attrs" && Bt(e, "get", t),
            u(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== tt && He(n, t))
            return s[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        He(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return Ia(i, t) ? (i[t] = n,
        !0) : r !== tt && He(r, t) ? (r[t] = n,
        !0) : He(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let a;
        return !!n[s] || e !== tt && He(e, s) || Ia(t, s) || (a = o[0]) && He(a, s) || He(r, s) || He(Hi, s) || He(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : He(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Y0() {
    return q0().slots
}
function q0() {
    const e = yn();
    return e.setupContext || (e.setupContext = Zp(e))
}
function bl(e) {
    return fe(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function ea(e, t) {
    const n = bl(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let i = n[r];
        i ? fe(i) || ye(i) ? i = n[r] = {
            type: i,
            default: t[r]
        } : i.default = t[r] : i === null && (i = n[r] = {
            default: t[r]
        }),
        i && t[`__skip_${r}`] && (i.skipFactory = !0)
    }
    return n
}
function W0(e) {
    const t = yn();
    let n = e();
    return kl(),
    Cc(n) && (n = n.catch(r=>{
        throw Wr(t),
        r
    }
    )),
    [n, ()=>Wr(t)]
}
let El = !0;
function G0(e) {
    const t = Jc(e)
      , n = e.proxy
      , r = e.ctx;
    El = !1,
    t.beforeCreate && nf(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: a, provide: l, inject: c, created: u, beforeMount: f, mounted: d, beforeUpdate: m, updated: _, activated: b, deactivated: S, beforeDestroy: g, beforeUnmount: E, destroyed: p, unmounted: y, render: T, renderTracked: A, renderTriggered: L, errorCaptured: C, serverPrefetch: O, expose: D, inheritAttrs: F, components: U, directives: Z, filters: W} = t;
    if (c && J0(c, r, null),
    s)
        for (const Y in s) {
            const B = s[Y];
            ye(B) && (r[Y] = B.bind(n))
        }
    if (i) {
        const Y = i.call(n, n);
        et(Y) && (e.data = Et(Y))
    }
    if (El = !0,
    o)
        for (const Y in o) {
            const B = o[Y]
              , ae = ye(B) ? B.bind(n, n) : ye(B.get) ? B.get.bind(n, n) : Zt
              , j = !ye(B) && ye(B.set) ? B.set.bind(n) : Zt
              , ce = ue({
                get: ae,
                set: j
            });
            Object.defineProperty(r, Y, {
                enumerable: !0,
                configurable: !0,
                get: ()=>ce.value,
                set: _e=>ce.value = _e
            })
        }
    if (a)
        for (const Y in a)
            Np(a[Y], r, n, Y);
    if (l) {
        const Y = ye(l) ? l.call(n) : l;
        Reflect.ownKeys(Y).forEach(B=>{
            Hr(B, Y[B])
        }
        )
    }
    u && nf(u, e, "c");
    function N(Y, B) {
        fe(B) ? B.forEach(ae=>Y(ae.bind(n))) : B && Y(B.bind(n))
    }
    if (N(U0, f),
    N(Rt, d),
    N(B0, m),
    N(Gc, _),
    N(Rp, b),
    N(Ip, S),
    N(Mp, C),
    N(H0, A),
    N(F0, L),
    N(gn, E),
    N(Ci, y),
    N(x0, O),
    fe(D))
        if (D.length) {
            const Y = e.exposed || (e.exposed = {});
            D.forEach(B=>{
                Object.defineProperty(Y, B, {
                    get: ()=>n[B],
                    set: ae=>n[B] = ae
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    T && e.render === Zt && (e.render = T),
    F != null && (e.inheritAttrs = F),
    U && (e.components = U),
    Z && (e.directives = Z)
}
function J0(e, t, n=Zt) {
    fe(e) && (e = Tl(e));
    for (const r in e) {
        const i = e[r];
        let o;
        et(i) ? "default"in i ? o = bt(i.from || r, i.default, !0) : o = bt(i.from || r) : o = bt(i),
        st(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: s=>o.value = s
        }) : t[r] = o
    }
}
function nf(e, t, n) {
    tn(fe(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Np(e, t, n, r) {
    const i = r.includes(".") ? kp(n, r) : ()=>n[r];
    if (rt(e)) {
        const o = t[e];
        ye(o) && Fe(i, o)
    } else if (ye(e))
        Fe(i, e.bind(n));
    else if (et(e))
        if (fe(e))
            e.forEach(o=>Np(o, t, n, r));
        else {
            const o = ye(e.handler) ? e.handler.bind(n) : t[e.handler];
            ye(o) && Fe(i, o, e)
        }
}
function Jc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach(c=>As(l, c, s, !0)),
    As(l, t, s)),
    et(t) && o.set(t, l),
    l
}
function As(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && As(e, o, n, !0),
    i && i.forEach(s=>As(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = z0[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const z0 = {
    data: rf,
    props: of,
    emits: of,
    methods: xi,
    computed: xi,
    beforeCreate: kt,
    created: kt,
    beforeMount: kt,
    mounted: kt,
    beforeUpdate: kt,
    updated: kt,
    beforeDestroy: kt,
    beforeUnmount: kt,
    destroyed: kt,
    unmounted: kt,
    activated: kt,
    deactivated: kt,
    errorCaptured: kt,
    serverPrefetch: kt,
    components: xi,
    directives: xi,
    watch: X0,
    provide: rf,
    inject: Q0
};
function rf(e, t) {
    return t ? e ? function() {
        return mt(ye(e) ? e.call(this, this) : e, ye(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Q0(e, t) {
    return xi(Tl(e), Tl(t))
}
function Tl(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function kt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function xi(e, t) {
    return e ? mt(Object.create(null), e, t) : t
}
function of(e, t) {
    return e ? fe(e) && fe(t) ? [...new Set([...e, ...t])] : mt(Object.create(null), bl(e), bl(t ?? {})) : t
}
function X0(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = mt(Object.create(null), e);
    for (const r in t)
        n[r] = kt(e[r], t[r]);
    return n
}
function Vp() {
    return {
        app: null,
        config: {
            isNativeTag: Ev,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Z0 = 0;
function $0(e, t) {
    return function(r, i=null) {
        ye(r) || (r = mt({}, r)),
        i != null && !et(i) && (i = null);
        const o = Vp()
          , s = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: Z0++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: $p,
            get config() {
                return o.config
            },
            set config(c) {},
            use(c, ...u) {
                return s.has(c) || (c && ye(c.install) ? (s.add(c),
                c.install(l, ...u)) : ye(c) && (s.add(c),
                c(l, ...u))),
                l
            },
            mixin(c) {
                return o.mixins.includes(c) || o.mixins.push(c),
                l
            },
            component(c, u) {
                return u ? (o.components[c] = u,
                l) : o.components[c]
            },
            directive(c, u) {
                return u ? (o.directives[c] = u,
                l) : o.directives[c]
            },
            mount(c, u, f) {
                if (!a) {
                    const d = Xe(r, i);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(d, c) : e(d, c, f),
                    a = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    ra(d.component) || d.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(c, u) {
                return o.provides[c] = u,
                l
            },
            runWithContext(c) {
                const u = di;
                di = l;
                try {
                    return c()
                } finally {
                    di = u
                }
            }
        };
        return l
    }
}
let di = null;
function Hr(e, t) {
    if (vt) {
        let n = vt.provides;
        const r = vt.parent && vt.parent.provides;
        r === n && (n = vt.provides = Object.create(r)),
        n[e] = t
    }
}
function bt(e, t, n=!1) {
    const r = vt || dt;
    if (r || di) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : di._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && ye(t) ? t.call(r && r.proxy) : t
    }
}
function zc() {
    return !!(vt || dt || di)
}
function e_(e, t, n, r=!1) {
    const i = {}
      , o = {};
    vs(o, ta, 1),
    e.propsDefaults = Object.create(null),
    Up(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Li(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function t_(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , a = De(i)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Qs(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (He(o, d))
                        m !== o[d] && (o[d] = m,
                        c = !0);
                    else {
                        const _ = Pn(d);
                        i[_] = Sl(l, a, _, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    c = !0)
            }
        }
    } else {
        Up(e, t, i, o) && (c = !0);
        let u;
        for (const f in a)
            (!t || !He(t, f) && ((u = Jr(f)) === f || !He(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (i[f] = Sl(l, a, f, void 0, e, !0)) : delete i[f]);
        if (o !== a)
            for (const f in o)
                (!t || !He(t, f)) && (delete o[f],
                c = !0)
    }
    c && Kn(e, "set", "$attrs")
}
function Up(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (ai(l))
                continue;
            const c = t[l];
            let u;
            i && He(i, u = Pn(l)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Qs(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            s = !0)
        }
    if (o) {
        const l = De(n)
          , c = a || tt;
        for (let u = 0; u < o.length; u++) {
            const f = o[u];
            n[f] = Sl(i, l, f, c[f], e, !He(c, f))
        }
    }
    return s
}
function Sl(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const a = He(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && ye(l)) {
                const {propsDefaults: c} = i;
                if (n in c)
                    r = c[n];
                else {
                    const u = Wr(i);
                    r = c[n] = l.call(null, t),
                    u()
                }
            } else
                r = l
        }
        s[0] && (o && !a ? r = !1 : s[1] && (r === "" || r === Jr(n)) && (r = !0))
    }
    return r
}
function Bp(e, t, n=!1) {
    const r = t.propsCache
      , i = r.get(e);
    if (i)
        return i;
    const o = e.props
      , s = {}
      , a = [];
    let l = !1;
    if (!ye(e)) {
        const u = f=>{
            l = !0;
            const [d,m] = Bp(f, t, !0);
            mt(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!o && !l)
        return et(e) && r.set(e, oi),
        oi;
    if (fe(o))
        for (let u = 0; u < o.length; u++) {
            const f = Pn(o[u]);
            sf(f) && (s[f] = tt)
        }
    else if (o)
        for (const u in o) {
            const f = Pn(u);
            if (sf(f)) {
                const d = o[u]
                  , m = s[f] = fe(d) || ye(d) ? {
                    type: d
                } : mt({}, d);
                if (m) {
                    const _ = cf(Boolean, m.type)
                      , b = cf(String, m.type);
                    m[0] = _ > -1,
                    m[1] = b < 0 || _ < b,
                    (_ > -1 || He(m, "default")) && a.push(f)
                }
            }
        }
    const c = [s, a];
    return et(e) && r.set(e, c),
    c
}
function sf(e) {
    return e[0] !== "$" && !ai(e)
}
function af(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function lf(e, t) {
    return af(e) === af(t)
}
function cf(e, t) {
    return fe(t) ? t.findIndex(n=>lf(n, e)) : ye(t) && lf(t, e) ? 0 : -1
}
const xp = e=>e[0] === "_" || e === "$stable"
  , Qc = e=>fe(e) ? e.map(zt) : [zt(e)]
  , n_ = (e,t,n)=>{
    if (t._n)
        return t;
    const r = rn((...i)=>Qc(t(...i)), n);
    return r._c = !1,
    r
}
  , Fp = (e,t,n)=>{
    const r = e._ctx;
    for (const i in e) {
        if (xp(i))
            continue;
        const o = e[i];
        if (ye(o))
            t[i] = n_(i, o, r);
        else if (o != null) {
            const s = Qc(o);
            t[i] = ()=>s
        }
    }
}
  , Hp = (e,t)=>{
    const n = Qc(t);
    e.slots.default = ()=>n
}
  , r_ = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = De(t),
        vs(t, "_", n)) : Fp(t, e.slots = {})
    } else
        e.slots = {},
        t && Hp(e, t);
    vs(e.slots, ta, 1)
}
  , i_ = (e,t,n)=>{
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = tt;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (mt(i, t),
        !n && a === 1 && delete i._) : (o = !t.$stable,
        Fp(t, i)),
        s = t
    } else
        t && (Hp(e, t),
        s = {
            default: 1
        });
    if (o)
        for (const a in i)
            !xp(a) && s[a] == null && delete i[a]
}
;
function ws(e, t, n, r, i=!1) {
    if (fe(e)) {
        e.forEach((d,m)=>ws(d, t && (fe(t) ? t[m] : t), n, r, i));
        return
    }
    if (Fr(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? ra(r.component) || r.component.proxy : r.el
      , s = i ? null : o
      , {i: a, r: l} = e
      , c = t && t.r
      , u = a.refs === tt ? a.refs = {} : a.refs
      , f = a.setupState;
    if (c != null && c !== l && (rt(c) ? (u[c] = null,
    He(f, c) && (f[c] = null)) : st(c) && (c.value = null)),
    ye(l))
        mr(l, a, 12, [s, u]);
    else {
        const d = rt(l)
          , m = st(l);
        if (d || m) {
            const _ = ()=>{
                if (e.f) {
                    const b = d ? He(f, l) ? f[l] : u[l] : l.value;
                    i ? fe(b) && Lc(b, o) : fe(b) ? b.includes(o) || b.push(o) : d ? (u[l] = [o],
                    He(f, l) && (f[l] = u[l])) : (l.value = [o],
                    e.k && (u[e.k] = l.value))
                } else
                    d ? (u[l] = s,
                    He(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (u[e.k] = s))
            }
            ;
            s ? (_.id = -1,
            Tt(_, n)) : _()
        }
    }
}
let zn = !1;
const o_ = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , s_ = e=>e.namespaceURI.includes("MathML")
  , Zo = e=>{
    if (o_(e))
        return "svg";
    if (s_(e))
        return "mathml"
}
  , $o = e=>e.nodeType === 8;
function a_(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: a, insert: l, createComment: c}} = e
      , u = (p,y)=>{
        if (!y.hasChildNodes()) {
            n(null, p, y),
            Es(),
            y._vnode = p;
            return
        }
        zn = !1,
        f(y.firstChild, p, null, null, null),
        Es(),
        y._vnode = p,
        zn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,y,T,A,L,C=!1)=>{
        const O = $o(p) && p.data === "["
          , D = ()=>b(p, y, T, A, L, O)
          , {type: F, ref: U, shapeFlag: Z, patchFlag: W} = y;
        let K = p.nodeType;
        y.el = p,
        W === -2 && (C = !1,
        y.dynamicChildren = null);
        let N = null;
        switch (F) {
        case qr:
            K !== 3 ? y.children === "" ? (l(y.el = i(""), s(p), p),
            N = p) : N = D() : (p.data !== y.children && (zn = !0,
            p.data = y.children),
            N = o(p));
            break;
        case Ot:
            E(p) ? (N = o(p),
            g(y.el = p.content.firstChild, p, T)) : K !== 8 || O ? N = D() : N = o(p);
            break;
        case Ki:
            if (O && (p = o(p),
            K = p.nodeType),
            K === 1 || K === 3) {
                N = p;
                const Y = !y.children.length;
                for (let B = 0; B < y.staticCount; B++)
                    Y && (y.children += N.nodeType === 1 ? N.outerHTML : N.data),
                    B === y.staticCount - 1 && (y.anchor = N),
                    N = o(N);
                return O ? o(N) : N
            } else
                D();
            break;
        case ht:
            O ? N = _(p, y, T, A, L, C) : N = D();
            break;
        default:
            if (Z & 1)
                (K !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? N = D() : N = d(p, y, T, A, L, C);
            else if (Z & 6) {
                y.slotScopeIds = L;
                const Y = s(p);
                if (O ? N = S(p) : $o(p) && p.data === "teleport start" ? N = S(p, p.data, "teleport end") : N = o(p),
                t(y, Y, null, T, A, Zo(Y), C),
                Fr(y)) {
                    let B;
                    O ? (B = Xe(ht),
                    B.anchor = N ? N.previousSibling : Y.lastChild) : B = p.nodeType === 3 ? zp("") : Xe("div"),
                    B.el = p,
                    y.component.subTree = B
                }
            } else
                Z & 64 ? K !== 8 ? N = D() : N = y.type.hydrate(p, y, T, A, L, C, e, m) : Z & 128 && (N = y.type.hydrate(p, y, T, A, Zo(s(p)), L, C, e, f))
        }
        return U != null && ws(U, null, A, y),
        N
    }
      , d = (p,y,T,A,L,C)=>{
        C = C || !!y.dynamicChildren;
        const {type: O, props: D, patchFlag: F, shapeFlag: U, dirs: Z, transition: W} = y
          , K = O === "input" || O === "option";
        if (K || F !== -1) {
            Z && Sn(y, null, T, "created");
            let N = !1;
            if (E(p)) {
                N = Kp(A, W) && T && T.vnode.props && T.vnode.props.appear;
                const B = p.content.firstChild;
                N && W.beforeEnter(B),
                g(B, p, T),
                y.el = p = B
            }
            if (U & 16 && !(D && (D.innerHTML || D.textContent))) {
                let B = m(p.firstChild, y, p, T, A, L, C);
                for (; B; ) {
                    zn = !0;
                    const ae = B;
                    B = B.nextSibling,
                    a(ae)
                }
            } else
                U & 8 && p.textContent !== y.children && (zn = !0,
                p.textContent = y.children);
            if (D)
                if (K || !C || F & 48)
                    for (const B in D)
                        (K && (B.endsWith("value") || B === "indeterminate") || ko(B) && !ai(B) || B[0] === ".") && r(p, B, null, D[B], void 0, void 0, T);
                else
                    D.onClick && r(p, "onClick", null, D.onClick, void 0, void 0, T);
            let Y;
            (Y = D && D.onVnodeBeforeMount) && Dt(Y, T, y),
            Z && Sn(y, null, T, "beforeMount"),
            ((Y = D && D.onVnodeMounted) || Z || N) && wp(()=>{
                Y && Dt(Y, T, y),
                N && W.enter(p),
                Z && Sn(y, null, T, "mounted")
            }
            , A)
        }
        return p.nextSibling
    }
      , m = (p,y,T,A,L,C,O)=>{
        O = O || !!y.dynamicChildren;
        const D = y.children
          , F = D.length;
        for (let U = 0; U < F; U++) {
            const Z = O ? D[U] : D[U] = zt(D[U]);
            if (p)
                p = f(p, Z, A, L, C, O);
            else {
                if (Z.type === qr && !Z.children)
                    continue;
                zn = !0,
                n(null, Z, T, null, A, L, Zo(T), C)
            }
        }
        return p
    }
      , _ = (p,y,T,A,L,C)=>{
        const {slotScopeIds: O} = y;
        O && (L = L ? L.concat(O) : O);
        const D = s(p)
          , F = m(o(p), y, D, T, A, L, C);
        return F && $o(F) && F.data === "]" ? o(y.anchor = F) : (zn = !0,
        l(y.anchor = c("]"), D, F),
        F)
    }
      , b = (p,y,T,A,L,C)=>{
        if (zn = !0,
        y.el = null,
        C) {
            const F = S(p);
            for (; ; ) {
                const U = o(p);
                if (U && U !== F)
                    a(U);
                else
                    break
            }
        }
        const O = o(p)
          , D = s(p);
        return a(p),
        n(null, y, D, O, T, A, Zo(D), L),
        O
    }
      , S = (p,y="[",T="]")=>{
        let A = 0;
        for (; p; )
            if (p = o(p),
            p && $o(p) && (p.data === y && A++,
            p.data === T)) {
                if (A === 0)
                    return o(p);
                A--
            }
        return p
    }
      , g = (p,y,T)=>{
        const A = y.parentNode;
        A && A.replaceChild(p, y);
        let L = T;
        for (; L; )
            L.vnode.el === y && (L.vnode.el = L.subTree.el = p),
            L = L.parent
    }
      , E = p=>p.nodeType === 1 && p.tagName.toLowerCase() === "template";
    return [u, f]
}
const Tt = wp;
function l_(e) {
    return jp(e)
}
function c_(e) {
    return jp(e, a_)
}
function jp(e, t) {
    const n = Xh();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m=Zt, insertStaticContent: _} = e
      , b = (h,v,k,R=null,V=null,q=null,X=void 0,z=null,ee=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !cn(h, v) && (R = H(h),
        _e(h, V, q, !0),
        h = null),
        v.patchFlag === -2 && (ee = !1,
        v.dynamicChildren = null);
        const {type: J, ref: oe, shapeFlag: ie} = v;
        switch (J) {
        case qr:
            S(h, v, k, R);
            break;
        case Ot:
            g(h, v, k, R);
            break;
        case Ki:
            h == null && E(v, k, R, X);
            break;
        case ht:
            U(h, v, k, R, V, q, X, z, ee);
            break;
        default:
            ie & 1 ? T(h, v, k, R, V, q, X, z, ee) : ie & 6 ? Z(h, v, k, R, V, q, X, z, ee) : (ie & 64 || ie & 128) && J.process(h, v, k, R, V, q, X, z, ee, $)
        }
        oe != null && V && ws(oe, h && h.ref, q, v || h, !v)
    }
      , S = (h,v,k,R)=>{
        if (h == null)
            r(v.el = a(v.children), k, R);
        else {
            const V = v.el = h.el;
            v.children !== h.children && c(V, v.children)
        }
    }
      , g = (h,v,k,R)=>{
        h == null ? r(v.el = l(v.children || ""), k, R) : v.el = h.el
    }
      , E = (h,v,k,R)=>{
        [h.el,h.anchor] = _(h.children, v, k, R, h.el, h.anchor)
    }
      , p = ({el: h, anchor: v},k,R)=>{
        let V;
        for (; h && h !== v; )
            V = d(h),
            r(h, k, R),
            h = V;
        r(v, k, R)
    }
      , y = ({el: h, anchor: v})=>{
        let k;
        for (; h && h !== v; )
            k = d(h),
            i(h),
            h = k;
        i(v)
    }
      , T = (h,v,k,R,V,q,X,z,ee)=>{
        v.type === "svg" ? X = "svg" : v.type === "math" && (X = "mathml"),
        h == null ? A(v, k, R, V, q, X, z, ee) : O(h, v, V, q, X, z, ee)
    }
      , A = (h,v,k,R,V,q,X,z)=>{
        let ee, J;
        const {props: oe, shapeFlag: ie, transition: I, dirs: x} = h;
        if (ee = h.el = s(h.type, q, oe && oe.is, oe),
        ie & 8 ? u(ee, h.children) : ie & 16 && C(h.children, ee, null, R, V, Pa(h, q), X, z),
        x && Sn(h, null, R, "created"),
        L(ee, h, h.scopeId, X, R),
        oe) {
            for (const he in oe)
                he !== "value" && !ai(he) && o(ee, he, null, oe[he], q, h.children, R, V, Ze);
            "value"in oe && o(ee, "value", null, oe.value, q),
            (J = oe.onVnodeBeforeMount) && Dt(J, R, h)
        }
        x && Sn(h, null, R, "beforeMount");
        const se = Kp(V, I);
        se && I.beforeEnter(ee),
        r(ee, v, k),
        ((J = oe && oe.onVnodeMounted) || se || x) && Tt(()=>{
            J && Dt(J, R, h),
            se && I.enter(ee),
            x && Sn(h, null, R, "mounted")
        }
        , V)
    }
      , L = (h,v,k,R,V)=>{
        if (k && m(h, k),
        R)
            for (let q = 0; q < R.length; q++)
                m(h, R[q]);
        if (V) {
            let q = V.subTree;
            if (v === q) {
                const X = V.vnode;
                L(h, X, X.scopeId, X.slotScopeIds, V.parent)
            }
        }
    }
      , C = (h,v,k,R,V,q,X,z,ee=0)=>{
        for (let J = ee; J < h.length; J++) {
            const oe = h[J] = z ? sr(h[J]) : zt(h[J]);
            b(null, oe, v, k, R, V, q, X, z)
        }
    }
      , O = (h,v,k,R,V,q,X)=>{
        const z = v.el = h.el;
        let {patchFlag: ee, dynamicChildren: J, dirs: oe} = v;
        ee |= h.patchFlag & 16;
        const ie = h.props || tt
          , I = v.props || tt;
        let x;
        if (k && wr(k, !1),
        (x = I.onVnodeBeforeUpdate) && Dt(x, k, v, h),
        oe && Sn(v, h, k, "beforeUpdate"),
        k && wr(k, !0),
        J ? D(h.dynamicChildren, J, z, k, R, Pa(v, V), q) : X || B(h, v, z, null, k, R, Pa(v, V), q, !1),
        ee > 0) {
            if (ee & 16)
                F(z, v, ie, I, k, R, V);
            else if (ee & 2 && ie.class !== I.class && o(z, "class", null, I.class, V),
            ee & 4 && o(z, "style", ie.style, I.style, V),
            ee & 8) {
                const se = v.dynamicProps;
                for (let he = 0; he < se.length; he++) {
                    const Ye = se[he]
                      , it = ie[Ye]
                      , gt = I[Ye];
                    (gt !== it || Ye === "value") && o(z, Ye, it, gt, V, h.children, k, R, Ze)
                }
            }
            ee & 1 && h.children !== v.children && u(z, v.children)
        } else
            !X && J == null && F(z, v, ie, I, k, R, V);
        ((x = I.onVnodeUpdated) || oe) && Tt(()=>{
            x && Dt(x, k, v, h),
            oe && Sn(v, h, k, "updated")
        }
        , R)
    }
      , D = (h,v,k,R,V,q,X)=>{
        for (let z = 0; z < v.length; z++) {
            const ee = h[z]
              , J = v[z]
              , oe = ee.el && (ee.type === ht || !cn(ee, J) || ee.shapeFlag & 70) ? f(ee.el) : k;
            b(ee, J, oe, null, R, V, q, X, !0)
        }
    }
      , F = (h,v,k,R,V,q,X)=>{
        if (k !== R) {
            if (k !== tt)
                for (const z in k)
                    !ai(z) && !(z in R) && o(h, z, k[z], null, X, v.children, V, q, Ze);
            for (const z in R) {
                if (ai(z))
                    continue;
                const ee = R[z]
                  , J = k[z];
                ee !== J && z !== "value" && o(h, z, J, ee, X, v.children, V, q, Ze)
            }
            "value"in R && o(h, "value", k.value, R.value, X)
        }
    }
      , U = (h,v,k,R,V,q,X,z,ee)=>{
        const J = v.el = h ? h.el : a("")
          , oe = v.anchor = h ? h.anchor : a("");
        let {patchFlag: ie, dynamicChildren: I, slotScopeIds: x} = v;
        x && (z = z ? z.concat(x) : x),
        h == null ? (r(J, k, R),
        r(oe, k, R),
        C(v.children || [], k, oe, V, q, X, z, ee)) : ie > 0 && ie & 64 && I && h.dynamicChildren ? (D(h.dynamicChildren, I, k, V, q, X, z),
        (v.key != null || V && v === V.subTree) && Xc(h, v, !0)) : B(h, v, k, oe, V, q, X, z, ee)
    }
      , Z = (h,v,k,R,V,q,X,z,ee)=>{
        v.slotScopeIds = z,
        h == null ? v.shapeFlag & 512 ? V.ctx.activate(v, k, R, X, ee) : W(v, k, R, V, q, X, ee) : K(h, v, ee)
    }
      , W = (h,v,k,R,V,q,X)=>{
        const z = h.component = v_(h, R, V);
        if (Zs(h) && (z.ctx.renderer = $),
        __(z),
        z.asyncDep) {
            if (V && V.registerDep(z, N),
            !h.el) {
                const ee = z.subTree = Xe(Ot);
                g(null, ee, v, k)
            }
        } else
            N(z, h, v, k, V, q, X)
    }
      , K = (h,v,k)=>{
        const R = v.component = h.component;
        if (_0(h, v, k))
            if (R.asyncDep && !R.asyncResolved) {
                Y(R, v, k);
                return
            } else
                R.next = v,
                u0(R.update),
                R.effect.dirty = !0,
                R.update();
        else
            v.el = h.el,
            R.vnode = v
    }
      , N = (h,v,k,R,V,q,X)=>{
        const z = ()=>{
            if (h.isMounted) {
                let {next: oe, bu: ie, u: I, parent: x, vnode: se} = h;
                {
                    const Gn = Yp(h);
                    if (Gn) {
                        oe && (oe.el = se.el,
                        Y(h, oe, X)),
                        Gn.asyncDep.then(()=>{
                            h.isUnmounted || z()
                        }
                        );
                        return
                    }
                }
                let he = oe, Ye;
                wr(h, !1),
                oe ? (oe.el = se.el,
                Y(h, oe, X)) : oe = se,
                ie && li(ie),
                (Ye = oe.props && oe.props.onVnodeBeforeUpdate) && Dt(Ye, x, oe, se),
                wr(h, !0);
                const it = La(h)
                  , gt = h.subTree;
                h.subTree = it,
                b(gt, it, f(gt.el), H(gt), h, V, q),
                oe.el = it.el,
                he === null && Hc(h, it.el),
                I && Tt(I, V),
                (Ye = oe.props && oe.props.onVnodeUpdated) && Tt(()=>Dt(Ye, x, oe, se), V)
            } else {
                let oe;
                const {el: ie, props: I} = v
                  , {bm: x, m: se, parent: he} = h
                  , Ye = Fr(v);
                if (wr(h, !1),
                x && li(x),
                !Ye && (oe = I && I.onVnodeBeforeMount) && Dt(oe, he, v),
                wr(h, !0),
                ie && Ue) {
                    const it = ()=>{
                        h.subTree = La(h),
                        Ue(ie, h.subTree, h, V, null)
                    }
                    ;
                    Ye ? v.type.__asyncLoader().then(()=>!h.isUnmounted && it()) : it()
                } else {
                    const it = h.subTree = La(h);
                    b(null, it, k, R, h, V, q),
                    v.el = it.el
                }
                if (se && Tt(se, V),
                !Ye && (oe = I && I.onVnodeMounted)) {
                    const it = v;
                    Tt(()=>Dt(oe, he, it), V)
                }
                (v.shapeFlag & 256 || he && Fr(he.vnode) && he.vnode.shapeFlag & 256) && h.a && Tt(h.a, V),
                h.isMounted = !0,
                v = k = R = null
            }
        }
          , ee = h.effect = new Rc(z,Zt,()=>Fc(J),h.scope)
          , J = h.update = ()=>{
            ee.dirty && ee.run()
        }
        ;
        J.id = h.uid,
        wr(h, !0),
        J()
    }
      , Y = (h,v,k)=>{
        v.component = h;
        const R = h.vnode.props;
        h.vnode = v,
        h.next = null,
        t_(h, v.props, R, k),
        i_(h, v.children, k),
        zr(),
        Xu(h),
        Qr()
    }
      , B = (h,v,k,R,V,q,X,z,ee=!1)=>{
        const J = h && h.children
          , oe = h ? h.shapeFlag : 0
          , ie = v.children
          , {patchFlag: I, shapeFlag: x} = v;
        if (I > 0) {
            if (I & 128) {
                j(J, ie, k, R, V, q, X, z, ee);
                return
            } else if (I & 256) {
                ae(J, ie, k, R, V, q, X, z, ee);
                return
            }
        }
        x & 8 ? (oe & 16 && Ze(J, V, q),
        ie !== J && u(k, ie)) : oe & 16 ? x & 16 ? j(J, ie, k, R, V, q, X, z, ee) : Ze(J, V, q, !0) : (oe & 8 && u(k, ""),
        x & 16 && C(ie, k, R, V, q, X, z, ee))
    }
      , ae = (h,v,k,R,V,q,X,z,ee)=>{
        h = h || oi,
        v = v || oi;
        const J = h.length
          , oe = v.length
          , ie = Math.min(J, oe);
        let I;
        for (I = 0; I < ie; I++) {
            const x = v[I] = ee ? sr(v[I]) : zt(v[I]);
            b(h[I], x, k, null, V, q, X, z, ee)
        }
        J > oe ? Ze(h, V, q, !0, !1, ie) : C(v, k, R, V, q, X, z, ee, ie)
    }
      , j = (h,v,k,R,V,q,X,z,ee)=>{
        let J = 0;
        const oe = v.length;
        let ie = h.length - 1
          , I = oe - 1;
        for (; J <= ie && J <= I; ) {
            const x = h[J]
              , se = v[J] = ee ? sr(v[J]) : zt(v[J]);
            if (cn(x, se))
                b(x, se, k, null, V, q, X, z, ee);
            else
                break;
            J++
        }
        for (; J <= ie && J <= I; ) {
            const x = h[ie]
              , se = v[I] = ee ? sr(v[I]) : zt(v[I]);
            if (cn(x, se))
                b(x, se, k, null, V, q, X, z, ee);
            else
                break;
            ie--,
            I--
        }
        if (J > ie) {
            if (J <= I) {
                const x = I + 1
                  , se = x < oe ? v[x].el : R;
                for (; J <= I; )
                    b(null, v[J] = ee ? sr(v[J]) : zt(v[J]), k, se, V, q, X, z, ee),
                    J++
            }
        } else if (J > I)
            for (; J <= ie; )
                _e(h[J], V, q, !0),
                J++;
        else {
            const x = J
              , se = J
              , he = new Map;
            for (J = se; J <= I; J++) {
                const xt = v[J] = ee ? sr(v[J]) : zt(v[J]);
                xt.key != null && he.set(xt.key, J)
            }
            let Ye, it = 0;
            const gt = I - se + 1;
            let Gn = !1
              , Aa = 0;
            const Pi = new Array(gt);
            for (J = 0; J < gt; J++)
                Pi[J] = 0;
            for (J = x; J <= ie; J++) {
                const xt = h[J];
                if (it >= gt) {
                    _e(xt, V, q, !0);
                    continue
                }
                let _n;
                if (xt.key != null)
                    _n = he.get(xt.key);
                else
                    for (Ye = se; Ye <= I; Ye++)
                        if (Pi[Ye - se] === 0 && cn(xt, v[Ye])) {
                            _n = Ye;
                            break
                        }
                _n === void 0 ? _e(xt, V, q, !0) : (Pi[_n - se] = J + 1,
                _n >= Aa ? Aa = _n : Gn = !0,
                b(xt, v[_n], k, null, V, q, X, z, ee),
                it++)
            }
            const Hu = Gn ? u_(Pi) : oi;
            for (Ye = Hu.length - 1,
            J = gt - 1; J >= 0; J--) {
                const xt = se + J
                  , _n = v[xt]
                  , ju = xt + 1 < oe ? v[xt + 1].el : R;
                Pi[J] === 0 ? b(null, _n, k, ju, V, q, X, z, ee) : Gn && (Ye < 0 || J !== Hu[Ye] ? ce(_n, k, ju, 2) : Ye--)
            }
        }
    }
      , ce = (h,v,k,R,V=null)=>{
        const {el: q, type: X, transition: z, children: ee, shapeFlag: J} = h;
        if (J & 6) {
            ce(h.component.subTree, v, k, R);
            return
        }
        if (J & 128) {
            h.suspense.move(v, k, R);
            return
        }
        if (J & 64) {
            X.move(h, v, k, $);
            return
        }
        if (X === ht) {
            r(q, v, k);
            for (let ie = 0; ie < ee.length; ie++)
                ce(ee[ie], v, k, R);
            r(h.anchor, v, k);
            return
        }
        if (X === Ki) {
            p(h, v, k);
            return
        }
        if (R !== 2 && J & 1 && z)
            if (R === 0)
                z.beforeEnter(q),
                r(q, v, k),
                Tt(()=>z.enter(q), V);
            else {
                const {leave: ie, delayLeave: I, afterLeave: x} = z
                  , se = ()=>r(q, v, k)
                  , he = ()=>{
                    ie(q, ()=>{
                        se(),
                        x && x()
                    }
                    )
                }
                ;
                I ? I(q, se, he) : he()
            }
        else
            r(q, v, k)
    }
      , _e = (h,v,k,R=!1,V=!1)=>{
        const {type: q, props: X, ref: z, children: ee, dynamicChildren: J, shapeFlag: oe, patchFlag: ie, dirs: I} = h;
        if (z != null && ws(z, null, k, h, !0),
        oe & 256) {
            v.ctx.deactivate(h);
            return
        }
        const x = oe & 1 && I
          , se = !Fr(h);
        let he;
        if (se && (he = X && X.onVnodeBeforeUnmount) && Dt(he, v, h),
        oe & 6)
            at(h.component, k, R);
        else {
            if (oe & 128) {
                h.suspense.unmount(k, R);
                return
            }
            x && Sn(h, null, v, "beforeUnmount"),
            oe & 64 ? h.type.remove(h, v, k, V, $, R) : J && (q !== ht || ie > 0 && ie & 64) ? Ze(J, v, k, !1, !0) : (q === ht && ie & 384 || !V && oe & 16) && Ze(ee, v, k),
            R && Ke(h)
        }
        (se && (he = X && X.onVnodeUnmounted) || x) && Tt(()=>{
            he && Dt(he, v, h),
            x && Sn(h, null, v, "unmounted")
        }
        , k)
    }
      , Ke = h=>{
        const {type: v, el: k, anchor: R, transition: V} = h;
        if (v === ht) {
            Je(k, R);
            return
        }
        if (v === Ki) {
            y(h);
            return
        }
        const q = ()=>{
            i(k),
            V && !V.persisted && V.afterLeave && V.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && V && !V.persisted) {
            const {leave: X, delayLeave: z} = V
              , ee = ()=>X(k, q);
            z ? z(h.el, q, ee) : ee()
        } else
            q()
    }
      , Je = (h,v)=>{
        let k;
        for (; h !== v; )
            k = d(h),
            i(h),
            h = k;
        i(v)
    }
      , at = (h,v,k)=>{
        const {bum: R, scope: V, update: q, subTree: X, um: z} = h;
        R && li(R),
        V.stop(),
        q && (q.active = !1,
        _e(X, h, v, k)),
        z && Tt(z, v),
        Tt(()=>{
            h.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , Ze = (h,v,k,R=!1,V=!1,q=0)=>{
        for (let X = q; X < h.length; X++)
            _e(h[X], v, k, R, V)
    }
      , H = h=>h.shapeFlag & 6 ? H(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let te = !1;
    const Q = (h,v,k)=>{
        h == null ? v._vnode && _e(v._vnode, null, null, !0) : b(v._vnode || null, h, v, null, null, null, k),
        te || (te = !0,
        Xu(),
        Es(),
        te = !1),
        v._vnode = h
    }
      , $ = {
        p: b,
        um: _e,
        m: ce,
        r: Ke,
        mt: W,
        mc: C,
        pc: B,
        pbc: D,
        n: H,
        o: e
    };
    let ve, Ue;
    return t && ([ve,Ue] = t($)),
    {
        render: Q,
        hydrate: ve,
        createApp: $0(Q, ve)
    }
}
function Pa({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function wr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Kp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Xc(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (fe(r) && fe(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let a = i[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = sr(i[o]),
            a.el = s.el),
            n || Xc(s, a)),
            a.type === qr && (a.el = s.el)
        }
}
function u_(e) {
    const t = e.slice()
      , n = [0];
    let r, i, o, s, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (i = n[n.length - 1],
            e[i] < c) {
                t[r] = i,
                n.push(r);
                continue
            }
            for (o = 0,
            s = n.length - 1; o < s; )
                a = o + s >> 1,
                e[n[a]] < c ? o = a + 1 : s = a;
            c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    s = n[o - 1]; o-- > 0; )
        n[o] = s,
        s = t[s];
    return n
}
function Yp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Yp(t)
}
const f_ = e=>e.__isTeleport
  , ji = e=>e && (e.disabled || e.disabled === "")
  , uf = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , ff = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , Al = (e,t)=>{
    const n = e && e.to;
    return rt(n) ? t ? t(n) : null : n
}
  , d_ = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, c) {
        const {mc: u, pc: f, pbc: d, o: {insert: m, querySelector: _, createText: b, createComment: S}} = c
          , g = ji(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const T = t.el = b("")
              , A = t.anchor = b("");
            m(T, n, r),
            m(A, n, r);
            const L = t.target = Al(t.props, _)
              , C = t.targetAnchor = b("");
            L && (m(C, L),
            s === "svg" || uf(L) ? s = "svg" : (s === "mathml" || ff(L)) && (s = "mathml"));
            const O = (D,F)=>{
                E & 16 && u(p, D, F, i, o, s, a, l)
            }
            ;
            g ? O(n, A) : L && O(L, C)
        } else {
            t.el = e.el;
            const T = t.anchor = e.anchor
              , A = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , C = ji(e.props)
              , O = C ? n : A
              , D = C ? T : L;
            if (s === "svg" || uf(A) ? s = "svg" : (s === "mathml" || ff(A)) && (s = "mathml"),
            y ? (d(e.dynamicChildren, y, O, i, o, s, a),
            Xc(e, t, !0)) : l || f(e, t, O, D, i, o, s, a, !1),
            g)
                C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : es(t, n, T, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const F = t.target = Al(t.props, _);
                F && es(t, F, null, c, 0)
            } else
                C && es(t, A, L, c, 1)
        }
        qp(t)
    },
    remove(e, t, n, r, {um: i, o: {remove: o}}, s) {
        const {shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: f, props: d} = e;
        if (f && o(u),
        s && o(c),
        a & 16) {
            const m = s || !ji(d);
            for (let _ = 0; _ < l.length; _++) {
                const b = l[_];
                i(b, t, n, m, !!b.dynamicChildren)
            }
        }
    },
    move: es,
    hydrate: h_
};
function es(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: c, props: u} = e
      , f = o === 2;
    if (f && r(s, t, n),
    (!f || ji(u)) && l & 16)
        for (let d = 0; d < c.length; d++)
            i(c[d], t, n, 2);
    f && r(a, t, n)
}
function h_(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: a, querySelector: l}}, c) {
    const u = t.target = Al(t.props, l);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (ji(t.props))
                t.anchor = c(s(e), t, a(e), n, r, i, o),
                t.targetAnchor = f;
            else {
                t.anchor = s(e);
                let d = f;
                for (; d; )
                    if (d = s(d),
                    d && d.nodeType === 8 && d.data === "teleport anchor") {
                        t.targetAnchor = d,
                        u._lpa = t.targetAnchor && s(t.targetAnchor);
                        break
                    }
                c(f, t, u, n, r, i, o)
            }
        qp(t)
    }
    return t.anchor && s(t.anchor)
}
const p_ = d_;
function qp(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const ht = Symbol.for("v-fgt")
  , qr = Symbol.for("v-txt")
  , Ot = Symbol.for("v-cmt")
  , Ki = Symbol.for("v-stc")
  , Yi = [];
let $t = null;
function pe(e=!1) {
    Yi.push($t = e ? null : [])
}
function Wp() {
    Yi.pop(),
    $t = Yi[Yi.length - 1] || null
}
let mi = 1;
function df(e) {
    mi += e
}
function Gp(e) {
    return e.dynamicChildren = mi > 0 ? $t || oi : null,
    Wp(),
    mi > 0 && $t && $t.push(e),
    e
}
function qe(e, t, n, r, i, o) {
    return Gp(ge(e, t, n, r, i, o, !0))
}
function yt(e, t, n, r, i) {
    return Gp(Xe(e, t, n, r, i, !0))
}
function gi(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function cn(e, t) {
    return e.type === t.type && e.key === t.key
}
const ta = "__vInternal"
  , Jp = ({key: e})=>e ?? null
  , us = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? rt(e) || st(e) || ye(e) ? {
    i: dt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function ge(e, t=null, n=null, r=0, i=null, o=e === ht ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Jp(t),
        ref: t && us(t),
        scopeId: Xs,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: dt
    };
    return a ? (Zc(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= rt(n) ? 8 : 16),
    mi > 0 && !s && $t && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && $t.push(l),
    l
}
const Xe = m_;
function m_(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === Sp) && (e = Ot),
    gi(e)) {
        const a = Yn(e, t, !0);
        return n && Zc(a, n),
        mi > 0 && !o && $t && (a.shapeFlag & 6 ? $t[$t.indexOf(e)] = a : $t.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (T_(e) && (e = e.__vccOpts),
    t) {
        t = Yt(t);
        let {class: a, style: l} = t;
        a && !rt(a) && (t.class = Ct(a)),
        et(l) && (dp(l) && !fe(l) && (l = mt({}, l)),
        t.style = Ln(l))
    }
    const s = rt(e) ? 1 : Ap(e) ? 128 : f_(e) ? 64 : et(e) ? 4 : ye(e) ? 2 : 0;
    return ge(e, t, n, r, i, s, o, !0)
}
function Yt(e) {
    return e ? dp(e) || ta in e ? mt({}, e) : e : null
}
function Yn(e, t, n=!1) {
    const {props: r, ref: i, patchFlag: o, children: s} = e
      , a = t ? yi(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Jp(a),
        ref: t && t.ref ? n && i ? fe(i) ? i.concat(us(t)) : [i, us(t)] : us(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ht ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Yn(e.ssContent),
        ssFallback: e.ssFallback && Yn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function zp(e=" ", t=0) {
    return Xe(qr, null, e, t)
}
function RM(e, t) {
    const n = Xe(Ki, null, e);
    return n.staticCount = t,
    n
}
function jt(e="", t=!1) {
    return t ? (pe(),
    yt(Ot, null, e)) : Xe(Ot, null, e)
}
function zt(e) {
    return e == null || typeof e == "boolean" ? Xe(Ot) : fe(e) ? Xe(ht, null, e.slice()) : typeof e == "object" ? sr(e) : Xe(qr, null, String(e))
}
function sr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yn(e)
}
function Zc(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (fe(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1),
            Zc(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(ta in t) ? t._ctx = dt : i === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ye(t) ? (t = {
            default: t,
            _ctx: dt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [zp(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function yi(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = Ct([t.class, r.class]));
            else if (i === "style")
                t.style = Ln([t.style, r.style]);
            else if (ko(i)) {
                const o = t[i]
                  , s = r[i];
                s && o !== s && !(fe(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function Dt(e, t, n, r=null) {
    tn(e, t, 7, [n, r])
}
const g_ = Vp();
let y_ = 0;
function v_(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || g_
      , o = {
        uid: y_++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new ep(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Bp(r, i),
        emitsOptions: Tp(r, i),
        emit: null,
        emitted: null,
        propsDefaults: tt,
        inheritAttrs: r.inheritAttrs,
        ctx: tt,
        data: tt,
        props: tt,
        attrs: tt,
        slots: tt,
        refs: tt,
        setupState: tt,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = d0.bind(null, o),
    e.ce && e.ce(o),
    o
}
let vt = null;
const yn = ()=>vt || dt;
let ks, wl;
{
    const e = Xh()
      , t = (n,r)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o=>{
            i.length > 1 ? i.forEach(s=>s(o)) : i[0](o)
        }
    }
    ;
    ks = t("__VUE_INSTANCE_SETTERS__", n=>vt = n),
    wl = t("__VUE_SSR_SETTERS__", n=>na = n)
}
const Wr = e=>{
    const t = vt;
    return ks(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        ks(t)
    }
}
  , kl = ()=>{
    vt && vt.scope.off(),
    ks(null)
}
;
function Qp(e) {
    return e.vnode.shapeFlag & 4
}
let na = !1;
function __(e, t=!1) {
    t && wl(t);
    const {props: n, children: r} = e.vnode
      , i = Qp(e);
    e_(e, n, i, t),
    r_(e, r);
    const o = i ? b_(e, t) : void 0;
    return t && wl(!1),
    o
}
function b_(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = ft(new Proxy(e.ctx,K0));
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? Zp(e) : null
          , o = Wr(e);
        zr();
        const s = mr(r, e, 0, [e.props, i]);
        if (Qr(),
        o(),
        Cc(s)) {
            if (s.then(kl, kl),
            t)
                return s.then(a=>{
                    Ll(e, a, t)
                }
                ).catch(a=>{
                    Ro(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Ll(e, s, t)
    } else
        Xp(e, t)
}
function Ll(e, t, n) {
    ye(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : et(t) && (e.setupState = gp(t)),
    Xp(e, n)
}
let hf;
function Xp(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && hf && !r.render) {
            const i = r.template || Jc(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , c = mt(mt({
                    isCustomElement: o,
                    delimiters: a
                }, s), l);
                r.render = hf(i, c)
            }
        }
        e.render = r.render || Zt
    }
    {
        const i = Wr(e);
        zr();
        try {
            G0(e)
        } finally {
            Qr(),
            i()
        }
    }
}
function E_(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return Bt(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function Zp(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return E_(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ra(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(gp(ft(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Hi)
                    return Hi[n](e)
            },
            has(t, n) {
                return n in t || n in Hi
            }
        }))
}
function Cl(e, t=!0) {
    return ye(e) ? e.displayName || e.name : e.name || t && e.__name
}
function T_(e) {
    return ye(e) && "__vccOpts"in e
}
const ue = (e,t)=>n0(e, t, na);
function ct(e, t, n) {
    const r = arguments.length;
    return r === 2 ? et(t) && !fe(t) ? gi(t) ? Xe(e, null, [t]) : Xe(e, t) : Xe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && gi(n) && (n = [n]),
    Xe(e, t, n))
}
const $p = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const S_ = "http://www.w3.org/2000/svg"
  , A_ = "http://www.w3.org/1998/Math/MathML"
  , ar = typeof document < "u" ? document : null
  , pf = ar && ar.createElement("template")
  , w_ = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,r)=>{
        const i = t === "svg" ? ar.createElementNS(S_, e) : t === "mathml" ? ar.createElementNS(A_, e) : ar.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e=>ar.createTextNode(e),
    createComment: e=>ar.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>ar.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, i, o) {
        const s = n ? n.previousSibling : t.lastChild;
        if (i && (i === o || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling)); )
                ;
        else {
            pf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = pf.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Qn = "transition"
  , Mi = "animation"
  , uo = Symbol("_vtc")
  , Io = (e,{slots: t})=>ct(M0, k_(e), t);
Io.displayName = "Transition";
const em = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Io.props = mt({}, Lp, em);
const kr = (e,t=[])=>{
    fe(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , mf = e=>e ? fe(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function k_(e) {
    const t = {};
    for (const U in e)
        U in em || (t[U] = e[U]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: c=s, appearToClass: u=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , _ = L_(i)
      , b = _ && _[0]
      , S = _ && _[1]
      , {onBeforeEnter: g, onEnter: E, onEnterCancelled: p, onLeave: y, onLeaveCancelled: T, onBeforeAppear: A=g, onAppear: L=E, onAppearCancelled: C=p} = t
      , O = (U,Z,W)=>{
        Lr(U, Z ? u : a),
        Lr(U, Z ? c : s),
        W && W()
    }
      , D = (U,Z)=>{
        U._isLeaving = !1,
        Lr(U, f),
        Lr(U, m),
        Lr(U, d),
        Z && Z()
    }
      , F = U=>(Z,W)=>{
        const K = U ? L : E
          , N = ()=>O(Z, U, W);
        kr(K, [Z, N]),
        gf(()=>{
            Lr(Z, U ? l : o),
            Xn(Z, U ? u : a),
            mf(K) || yf(Z, r, b, N)
        }
        )
    }
    ;
    return mt(t, {
        onBeforeEnter(U) {
            kr(g, [U]),
            Xn(U, o),
            Xn(U, s)
        },
        onBeforeAppear(U) {
            kr(A, [U]),
            Xn(U, l),
            Xn(U, c)
        },
        onEnter: F(!1),
        onAppear: F(!0),
        onLeave(U, Z) {
            U._isLeaving = !0;
            const W = ()=>D(U, Z);
            Xn(U, f),
            R_(),
            Xn(U, d),
            gf(()=>{
                U._isLeaving && (Lr(U, f),
                Xn(U, m),
                mf(y) || yf(U, r, S, W))
            }
            ),
            kr(y, [U, W])
        },
        onEnterCancelled(U) {
            O(U, !1),
            kr(p, [U])
        },
        onAppearCancelled(U) {
            O(U, !0),
            kr(C, [U])
        },
        onLeaveCancelled(U) {
            D(U),
            kr(T, [U])
        }
    })
}
function L_(e) {
    if (e == null)
        return null;
    if (et(e))
        return [Ma(e.enter), Ma(e.leave)];
    {
        const t = Ma(e);
        return [t, t]
    }
}
function Ma(e) {
    return Qh(e)
}
function Xn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[uo] || (e[uo] = new Set)).add(t)
}
function Lr(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[uo];
    n && (n.delete(t),
    n.size || (e[uo] = void 0))
}
function gf(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let C_ = 0;
function yf(e, t, n, r) {
    const i = e._endId = ++C_
      , o = ()=>{
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: a, propCount: l} = O_(e, t);
    if (!s)
        return r();
    const c = s + "end";
    let u = 0;
    const f = ()=>{
        e.removeEventListener(c, d),
        o()
    }
      , d = m=>{
        m.target === e && ++u >= l && f()
    }
    ;
    setTimeout(()=>{
        u < l && f()
    }
    , a + 1),
    e.addEventListener(c, d)
}
function O_(e, t) {
    const n = window.getComputedStyle(e)
      , r = _=>(n[_] || "").split(", ")
      , i = r(`${Qn}Delay`)
      , o = r(`${Qn}Duration`)
      , s = vf(i, o)
      , a = r(`${Mi}Delay`)
      , l = r(`${Mi}Duration`)
      , c = vf(a, l);
    let u = null
      , f = 0
      , d = 0;
    t === Qn ? s > 0 && (u = Qn,
    f = s,
    d = o.length) : t === Mi ? c > 0 && (u = Mi,
    f = c,
    d = l.length) : (f = Math.max(s, c),
    u = f > 0 ? s > c ? Qn : Mi : null,
    d = u ? u === Qn ? o.length : l.length : 0);
    const m = u === Qn && /\b(transform|all)(,|$)/.test(r(`${Qn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function vf(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>_f(n) + _f(e[r])))
}
function _f(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function R_() {
    return document.body.offsetHeight
}
function I_(e, t, n) {
    const r = e[uo];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ls = Symbol("_vod")
  , tm = Symbol("_vsh")
  , IM = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ls] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Di(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Di(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Di(e, !1)
        }
        ) : Di(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Di(e, t)
    }
};
function Di(e, t) {
    e.style.display = t ? e[Ls] : "none",
    e[tm] = !t
}
const P_ = Symbol("")
  , M_ = /(^|;)\s*display\s*:/;
function D_(e, t, n) {
    const r = e.style
      , i = rt(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (rt(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && fs(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && fs(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            fs(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[P_];
            s && (n += ";" + s),
            r.cssText = n,
            o = M_.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Ls in e && (e[Ls] = o ? r.display : "",
    e[tm] && (r.display = "none"))
}
const bf = /\s*!important$/;
function fs(e, t, n) {
    if (fe(n))
        n.forEach(r=>fs(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = N_(e, t);
        bf.test(n) ? e.setProperty(Jr(r), n.replace(bf, ""), "important") : e[r] = n
    }
}
const Ef = ["Webkit", "Moz", "ms"]
  , Da = {};
function N_(e, t) {
    const n = Da[t];
    if (n)
        return n;
    let r = Pn(t);
    if (r !== "filter" && r in e)
        return Da[t] = r;
    r = Gs(r);
    for (let i = 0; i < Ef.length; i++) {
        const o = Ef[i] + r;
        if (o in e)
            return Da[t] = o
    }
    return t
}
const Tf = "http://www.w3.org/1999/xlink";
function V_(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Tf, t.slice(6, t.length)) : e.setAttributeNS(Tf, t, n);
    else {
        const o = Dv(t);
        n == null || o && !Zh(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function U_(e, t, n, r, i, o, s) {
    if (t === "innerHTML" || t === "textContent") {
        r && s(r, i, o),
        e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const c = a === "OPTION" ? e.getAttribute("value") || "" : e.value
          , u = n ?? "";
        c !== u && (e.value = u),
        n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = Zh(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function ei(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function B_(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Sf = Symbol("_vei");
function x_(e, t, n, r, i=null) {
    const o = e[Sf] || (e[Sf] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = F_(t);
        if (r) {
            const c = o[t] = K_(r, i);
            ei(e, a, c, l)
        } else
            s && (B_(e, a, s, l),
            o[t] = void 0)
    }
}
const Af = /(?:Once|Passive|Capture)$/;
function F_(e) {
    let t;
    if (Af.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Af); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Jr(e.slice(2)), t]
}
let Na = 0;
const H_ = Promise.resolve()
  , j_ = ()=>Na || (H_.then(()=>Na = 0),
Na = Date.now());
function K_(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        tn(Y_(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = j_(),
    n
}
function Y_(e, t) {
    if (fe(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r=>i=>!i._stopped && r && r(i))
    } else
        return t
}
const wf = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , q_ = (e,t,n,r,i,o,s,a,l)=>{
    const c = i === "svg";
    t === "class" ? I_(e, r, c) : t === "style" ? D_(e, n, r) : ko(t) ? kc(t) || x_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : W_(e, t, r, c)) ? U_(e, t, r, o, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    V_(e, t, r, c))
}
;
function W_(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && wf(t) && ye(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return wf(t) && rt(n) ? !1 : t in e
}
const kf = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return fe(t) ? n=>li(t, n) : t
}
;
function G_(e) {
    e.target.composing = !0
}
function Lf(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Va = Symbol("_assign")
  , PM = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[Va] = kf(i);
        const o = r || i.props && i.props.type === "number";
        ei(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = ul(a)),
            e[Va](a)
        }
        ),
        n && ei(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (ei(e, "compositionstart", G_),
        ei(e, "compositionend", Lf),
        ei(e, "change", Lf))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: i}}, o) {
        if (e[Va] = kf(o),
        e.composing)
            return;
        const s = i || e.type === "number" ? ul(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , J_ = ["ctrl", "shift", "alt", "meta"]
  , z_ = {
    stop: e=>e.stopPropagation(),
    prevent: e=>e.preventDefault(),
    self: e=>e.target !== e.currentTarget,
    ctrl: e=>!e.ctrlKey,
    shift: e=>!e.shiftKey,
    alt: e=>!e.altKey,
    meta: e=>!e.metaKey,
    left: e=>"button"in e && e.button !== 0,
    middle: e=>"button"in e && e.button !== 1,
    right: e=>"button"in e && e.button !== 2,
    exact: (e,t)=>J_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , MM = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i,...o)=>{
        for (let s = 0; s < t.length; s++) {
            const a = z_[t[s]];
            if (a && a(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , Q_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , X_ = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i=>{
        if (!("key"in i))
            return;
        const o = Jr(i.key);
        if (t.some(s=>s === o || Q_[s] === o))
            return e(i)
    }
    )
}
  , nm = mt({
    patchProp: q_
}, w_);
let qi, Cf = !1;
function Z_() {
    return qi || (qi = l_(nm))
}
function $_() {
    return qi = Cf ? qi : c_(nm),
    Cf = !0,
    qi
}
const rm = (...e)=>{
    const t = Z_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = om(r);
        if (!i)
            return;
        const o = t._component;
        !ye(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, im(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , eb = (...e)=>{
    const t = $_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = om(r);
        if (i)
            return n(i, !0, im(i))
    }
    ,
    t
}
;
function im(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function om(e) {
    return rt(e) ? document.querySelector(e) : e
}
const tb = /#/g
  , nb = /&/g
  , rb = /\//g
  , ib = /=/g
  , $c = /\+/g
  , ob = /%5e/gi
  , sb = /%60/gi
  , ab = /%7c/gi
  , lb = /%20/gi;
function cb(e) {
    return encodeURI("" + e).replace(ab, "|")
}
function Ol(e) {
    return cb(typeof e == "string" ? e : JSON.stringify(e)).replace($c, "%2B").replace(lb, "+").replace(tb, "%23").replace(nb, "%26").replace(sb, "`").replace(ob, "^").replace(rb, "%2F")
}
function Ua(e) {
    return Ol(e).replace(ib, "%3D")
}
function Cs(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function ub(e) {
    return Cs(e.replace($c, " "))
}
function fb(e) {
    return Cs(e.replace($c, " "))
}
function eu(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = ub(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = fb(r[2] || "");
        t[i] === void 0 ? t[i] = o : Array.isArray(t[i]) ? t[i].push(o) : t[i] = [t[i], o]
    }
    return t
}
function db(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Ua(e)}=${Ol(n)}`).join("&") : `${Ua(e)}=${Ol(t)}` : Ua(e)
}
function hb(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>db(t, e[t])).filter(Boolean).join("&")
}
const pb = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , mb = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , gb = /^([/\\]\s*){2,}[^/\\]/
  , yb = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , vb = /\/$|\/\?|\/#/
  , _b = /^\.?\//;
function Dn(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? pb.test(e) : mb.test(e) || (t.acceptRelative ? gb.test(e) : !1)
}
function bb(e) {
    return !!e && yb.test(e)
}
function Rl(e="", t) {
    return t ? vb.test(e) : e.endsWith("/")
}
function Po(e="", t) {
    if (!t)
        return (Rl(e) ? e.slice(0, -1) : e) || "/";
    if (!Rl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const i = e.indexOf("#");
    i >= 0 && (n = e.slice(0, i),
    r = e.slice(i));
    const [o,...s] = n.split("?");
    return (o.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function fo(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (Rl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const i = e.indexOf("#");
    if (i >= 0 && (n = e.slice(0, i),
    r = e.slice(i),
    !n))
        return r;
    const [o,...s] = n.split("?");
    return o + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function Eb(e="") {
    return e.startsWith("/")
}
function Of(e="") {
    return Eb(e) ? e : "/" + e
}
function Tb(e, t) {
    if (am(t) || Dn(e))
        return e;
    const n = Po(t);
    return e.startsWith(n) ? e : Oi(n, e)
}
function Rf(e, t) {
    if (am(t))
        return e;
    const n = Po(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function sm(e, t) {
    const n = Mo(e)
      , r = {
        ...eu(n.search),
        ...t
    };
    return n.search = hb(r),
    Ab(n)
}
function am(e) {
    return !e || e === "/"
}
function Sb(e) {
    return e && e !== "/"
}
function Oi(e, ...t) {
    let n = e || "";
    for (const r of t.filter(i=>Sb(i)))
        if (n) {
            const i = r.replace(_b, "");
            n = fo(n) + i
        } else
            n = r;
    return n
}
function Il(e, t, n={}) {
    return n.trailingSlash || (e = fo(e),
    t = fo(t)),
    n.leadingSlash || (e = Of(e),
    t = Of(t)),
    n.encoding || (e = Cs(e),
    t = Cs(t)),
    e === t
}
const lm = Symbol.for("ufo:protocolRelative");
function Mo(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!Dn(e, {
        acceptRelative: !0
    }))
        return t ? Mo(t + e) : Pl(e);
    const [,r="",i,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: c, hash: u} = Pl(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: s,
        pathname: l,
        search: c,
        hash: u,
        [lm]: !r
    }
}
function Pl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function Ab(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , i = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[lm] ? (e.protocol || "") + "//" : "") + i + o + t + n + r
}
const wb = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Os = wb().app
  , kb = ()=>Os.baseURL
  , Lb = ()=>Os.buildAssetsDir
  , tu = (...e)=>Oi(cm(), Lb(), ...e)
  , cm = (...e)=>{
    const t = Os.cdnURL || Os.baseURL;
    return e.length ? Oi(t, ...e) : t
}
;
globalThis.__buildAssetsURL = tu,
globalThis.__publicAssetsURL = cm;
const Cb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Ob = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Rb = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Ib(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        Pb(e);
        return
    }
    return t
}
function Pb(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function ho(e, t={}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!Rb.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Cb.test(e) || Ob.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Ib)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class Mb extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function Db(e) {
    var l, c, u, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((c = e.error) == null ? void 0 : c.toString()) || ""
      , n = ((u = e.request) == null ? void 0 : u.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${i}: ${o}${t ? ` ${t}` : ""}`
      , a = new Mb(s,e.error ? {
        cause: e.error
    } : void 0);
    for (const m of ["request", "options", "response"])
        Object.defineProperty(a, m, {
            get() {
                return e[m]
            }
        });
    for (const [m,_] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, m, {
            get() {
                return e.response && e.response[_]
            }
        });
    return a
}
const Nb = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function If(e="GET") {
    return Nb.has(e.toUpperCase())
}
function Vb(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Ub = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Bb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function xb(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Bb.test(t) ? "json" : Ub.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Fb(e, t, n=globalThis.Headers) {
    const r = {
        ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (r.params = {
        ...t == null ? void 0 : t.params,
        ...e == null ? void 0 : e.params
    }),
    t != null && t.query && (e != null && e.query) && (r.query = {
        ...t == null ? void 0 : t.query,
        ...e == null ? void 0 : e.query
    }),
    t != null && t.headers && (e != null && e.headers)) {
        r.headers = new n((t == null ? void 0 : t.headers) || {});
        for (const [i,o] of new n((e == null ? void 0 : e.headers) || {}))
            r.headers.set(i, o)
    }
    return r
}
const Hb = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , jb = new Set([101, 204, 205, 304]);
function um(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let u;
            typeof a.options.retry == "number" ? u = a.options.retry : u = If(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Hb.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                o(a.request, {
                    ...a.options,
                    retry: u - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const c = Db(a);
        throw Error.captureStackTrace && Error.captureStackTrace(c, o),
        c
    }
    const o = async function(l, c={}) {
        var d;
        const u = {
            request: l,
            options: Fb(c, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (u.options.method = (d = u.options.method) == null ? void 0 : d.toUpperCase(),
        u.options.onRequest && await u.options.onRequest(u),
        typeof u.request == "string" && (u.options.baseURL && (u.request = Tb(u.request, u.options.baseURL)),
        (u.options.query || u.options.params) && (u.request = sm(u.request, {
            ...u.options.params,
            ...u.options.query
        }))),
        u.options.body && If(u.options.method) && (Vb(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
        u.options.headers = new n(u.options.headers || {}),
        u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"),
        u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo"in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex"in u.options || (u.options.duplex = "half"))),
        !u.options.signal && u.options.timeout) {
            const m = new r;
            setTimeout(()=>m.abort(), u.options.timeout),
            u.options.signal = m.signal
        }
        try {
            u.response = await t(u.request, u.options)
        } catch (m) {
            return u.error = m,
            u.options.onRequestError && await u.options.onRequestError(u),
            await i(u)
        }
        if (u.response.body && !jb.has(u.response.status) && u.options.method !== "HEAD") {
            const m = (u.options.parseResponse ? "json" : u.options.responseType) || xb(u.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const _ = await u.response.text()
                      , b = u.options.parseResponse || ho;
                    u.response._data = b(_);
                    break
                }
            case "stream":
                {
                    u.response._data = u.response.body;
                    break
                }
            default:
                u.response._data = await u.response[m]()
            }
        }
        return u.options.onResponse && await u.options.onResponse(u),
        !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u),
        await i(u)) : u.response
    }
      , s = async function(l, c) {
        return (await o(l, c))._data
    };
    return s.raw = o,
    s.native = (...a)=>t(...a),
    s.create = (a={})=>um({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const nu = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , Kb = nu.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Yb = nu.Headers
  , qb = nu.AbortController
  , Wb = um({
    fetch: Kb,
    Headers: Yb,
    AbortController: qb
})
  , Gb = Wb;
globalThis.$fetch || (globalThis.$fetch = Gb.create({
    baseURL: kb()
}));
function Ml(e, t={}, n) {
    for (const r in e) {
        const i = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? Ml(i, t, o) : typeof i == "function" && (t[o] = i)
    }
    return t
}
const Jb = {
    run: e=>e()
}
  , zb = ()=>Jb
  , fm = typeof console.createTask < "u" ? console.createTask : zb;
function Qb(e, t) {
    const n = t.shift()
      , r = fm(n);
    return e.reduce((i,o)=>i.then(()=>r.run(()=>o(...t))), Promise.resolve())
}
function Xb(e, t) {
    const n = t.shift()
      , r = fm(n);
    return Promise.all(e.map(i=>r.run(()=>i(...t))))
}
function Ba(e, t) {
    for (const n of [...e])
        n(t)
}
class Zb {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return ()=>{}
            ;
        const i = t;
        let o;
        for (; this._deprecatedHooks[t]; )
            o = this._deprecatedHooks[t],
            t = o.to;
        if (o && !r.allowDeprecated) {
            let s = o.message;
            s || (s = `${i} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(s) || (console.warn(s),
            this._deprecatedMessages.add(s))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: ()=>"_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        ()=>{
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, i = (...o)=>(typeof r == "function" && r(),
        r = void 0,
        i = void 0,
        n(...o));
        return r = this.hook(t, i),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const i of r)
            this.hook(t, i)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Ml(t)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(t) {
        const n = Ml(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Qb, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Xb, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Ba(this._before, i);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(()=>{
            this._after && i && Ba(this._after, i)
        }
        ) : (this._after && i && Ba(this._after, i),
        o)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        ()=>{
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        ()=>{
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function dm() {
    return new Zb
}
function $b(e={}) {
    let t, n = !1;
    const r = s=>{
        if (t && t !== s)
            throw new Error("Context conflict")
    }
    ;
    let i;
    if (e.asyncContext) {
        const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        s ? i = new s : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const o = ()=>{
        if (i && t === void 0) {
            const s = i.getStore();
            if (s !== void 0)
                return s
        }
        return t
    }
    ;
    return {
        use: ()=>{
            const s = o();
            if (s === void 0)
                throw new Error("Context is not available");
            return s
        }
        ,
        tryUse: ()=>o(),
        set: (s,a)=>{
            a || r(s),
            t = s,
            n = !0
        }
        ,
        unset: ()=>{
            t = void 0,
            n = !1
        }
        ,
        call: (s,a)=>{
            r(s),
            t = s;
            try {
                return i ? i.run(s, a) : a()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(s, a) {
            t = s;
            const l = ()=>{
                t = s
            }
              , c = ()=>t === s ? l : void 0;
            Dl.add(c);
            try {
                const u = i ? i.run(s, a) : a();
                return n || (t = void 0),
                await u
            } finally {
                Dl.delete(c)
            }
        }
    }
}
function eE(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = $b({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Rs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Pf = "__unctx__"
  , tE = Rs[Pf] || (Rs[Pf] = eE())
  , nE = (e,t={})=>tE.get(e, t)
  , Mf = "__unctx_async_handlers__"
  , Dl = Rs[Mf] || (Rs[Mf] = new Set);
function wn(e) {
    const t = [];
    for (const i of Dl) {
        const o = i();
        o && t.push(o)
    }
    const n = ()=>{
        for (const i of t)
            i()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(i=>{
        throw n(),
        i
    }
    )),
    [r, n]
}
const hm = nE("nuxt-app", {
    asyncContext: !1
})
  , rE = "__nuxt_plugin";
function iE(e) {
    let t = 0;
    const n = {
        _scope: Co(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.10.3"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: Et({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: i=>n._scope.run(()=>aE(n, i)),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return ()=>{}
                ;
            t++;
            let i = !1;
            return ()=>{
                if (!i && (i = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...e
    };
    n.hooks = dm(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (i,o)=>{
        const s = "$" + i;
        ts(n, s, o),
        ts(n.vueApp.config.globalProperties, s, o)
    }
    ,
    ts(n.vueApp, "$nuxt", n),
    ts(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", o=>{
            n.callHook("app:chunkError", {
                error: o.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || re;
        const i = n.hook("app:error", (...o)=>{
            console.error("[nuxt] error caught during app initialization", ...o)
        }
        );
        n.hook("app:mounted", i)
    }
    const r = Et(n.payload.config);
    return n.provide("config", r),
    n
}
async function oE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function sE(e, t) {
    const n = []
      , r = []
      , i = []
      , o = [];
    let s = 0;
    async function a(l) {
        var u;
        const c = ((u = l.dependsOn) == null ? void 0 : u.filter(f=>t.some(d=>d._name === f) && !n.includes(f))) ?? [];
        if (c.length > 0)
            r.push([new Set(c), l]);
        else {
            const f = oE(e, l).then(async()=>{
                l._name && (n.push(l._name),
                await Promise.all(r.map(async([d,m])=>{
                    d.has(l._name) && (d.delete(l._name),
                    d.size === 0 && (s++,
                    await a(m)))
                }
                )))
            }
            );
            l.parallel ? i.push(f.catch(d=>o.push(d))) : await f
        }
    }
    for (const l of t)
        await a(l);
    if (await Promise.all(i),
    s)
        for (let l = 0; l < s; l++)
            await Promise.all(i);
    if (o.length)
        throw o[0]
}
function It(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || (()=>{}
    ), e, {
        [rE]: !0,
        _name: t
    })
}
function aE(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return hm.set(e),
    e.vueApp.runWithContext(r)
}
function lE() {
    var t;
    let e;
    return zc() && (e = (t = yn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || hm.tryUse(),
    e || null
}
function re() {
    const e = lE();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function Wn(e) {
    return re().$config
}
function ts(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const ns = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function cE(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , i = (t || {}).decode || dE;
    let o = 0;
    for (; o < e.length; ) {
        const s = e.indexOf("=", o);
        if (s === -1)
            break;
        let a = e.indexOf(";", o);
        if (a === -1)
            a = e.length;
        else if (a < s) {
            o = e.lastIndexOf(";", s - 1) + 1;
            continue
        }
        const l = e.slice(o, s).trim();
        if (n[l] === void 0) {
            let c = e.slice(s + 1, a).trim();
            c.codePointAt(0) === 34 && (c = c.slice(1, -1)),
            n[l] = fE(c, i)
        }
        o = a + 1
    }
    return n
}
function Df(e, t, n) {
    const r = n || {}
      , i = r.encode || hE;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!ns.test(e))
        throw new TypeError("argument name is invalid");
    const o = i(t);
    if (o && !ns.test(o))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!ns.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!ns.test(r.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!uE(r.expires) || Number.isNaN(r.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        s += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (s += "; HttpOnly"),
    r.secure && (s += "; Secure"),
    r.priority)
        switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            s += "; Priority=Low";
            break;
        case "medium":
            s += "; Priority=Medium";
            break;
        case "high":
            s += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
        }
    if (r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            s += "; SameSite=Strict";
            break;
        case "lax":
            s += "; SameSite=Lax";
            break;
        case "strict":
            s += "; SameSite=Strict";
            break;
        case "none":
            s += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return s
}
function uE(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function fE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function dE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function hE(e) {
    return encodeURIComponent(e)
}
const Nf = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});
function Vf(e, t) {
    t ? t = {
        ...Nf,
        ...t
    } : t = Nf;
    const n = pm(t);
    return n.dispatch(e),
    n.toString()
}
const pE = Object.freeze(["prototype", "__proto__", "constructor"]);
function pm(e) {
    let t = ""
      , n = new Map;
    const r = i=>{
        t += i
    }
    ;
    return {
        toString() {
            return t
        },
        getContext() {
            return n
        },
        dispatch(i) {
            return e.replacer && (i = e.replacer(i)),
            this[i === null ? "null" : typeof i](i)
        },
        object(i) {
            if (i && typeof i.toJSON == "function")
                return this.object(i.toJSON());
            const o = Object.prototype.toString.call(i);
            let s = "";
            const a = o.length;
            a < 10 ? s = "unknown:[" + o + "]" : s = o.slice(8, a - 1),
            s = s.toLowerCase();
            let l = null;
            if ((l = n.get(i)) === void 0)
                n.set(i, n.size);
            else
                return this.dispatch("[CIRCULAR:" + l + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(i))
                return r("buffer:"),
                r(i.toString("utf8"));
            if (s !== "object" && s !== "function" && s !== "asyncfunction")
                this[s] ? this[s](i) : e.ignoreUnknown || this.unkown(i, s);
            else {
                let c = Object.keys(i);
                e.unorderedObjects && (c = c.sort());
                let u = [];
                e.respectType !== !1 && !Uf(i) && (u = pE),
                e.excludeKeys && (c = c.filter(d=>!e.excludeKeys(d)),
                u = u.filter(d=>!e.excludeKeys(d))),
                r("object:" + (c.length + u.length) + ":");
                const f = d=>{
                    this.dispatch(d),
                    r(":"),
                    e.excludeValues || this.dispatch(i[d]),
                    r(",")
                }
                ;
                for (const d of c)
                    f(d);
                for (const d of u)
                    f(d)
            }
        },
        array(i, o) {
            if (o = o === void 0 ? e.unorderedArrays !== !1 : o,
            r("array:" + i.length + ":"),
            !o || i.length <= 1) {
                for (const l of i)
                    this.dispatch(l);
                return
            }
            const s = new Map
              , a = i.map(l=>{
                const c = pm(e);
                c.dispatch(l);
                for (const [u,f] of c.getContext())
                    s.set(u, f);
                return c.toString()
            }
            );
            return n = s,
            a.sort(),
            this.array(a, !1)
        },
        date(i) {
            return r("date:" + i.toJSON())
        },
        symbol(i) {
            return r("symbol:" + i.toString())
        },
        unkown(i, o) {
            if (r(o),
            !!i && (r(":"),
            i && typeof i.entries == "function"))
                return this.array(Array.from(i.entries()), !0)
        },
        error(i) {
            return r("error:" + i.toString())
        },
        boolean(i) {
            return r("bool:" + i)
        },
        string(i) {
            r("string:" + i.length + ":"),
            r(i)
        },
        function(i) {
            r("fn:"),
            Uf(i) ? this.dispatch("[native]") : this.dispatch(i.toString()),
            e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(i.name)),
            e.respectFunctionProperties && this.object(i)
        },
        number(i) {
            return r("number:" + i)
        },
        xml(i) {
            return r("xml:" + i.toString())
        },
        null() {
            return r("Null")
        },
        undefined() {
            return r("Undefined")
        },
        regexp(i) {
            return r("regex:" + i.toString())
        },
        uint8array(i) {
            return r("uint8array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        uint8clampedarray(i) {
            return r("uint8clampedarray:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        int8array(i) {
            return r("int8array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        uint16array(i) {
            return r("uint16array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        int16array(i) {
            return r("int16array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        uint32array(i) {
            return r("uint32array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        int32array(i) {
            return r("int32array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        float32array(i) {
            return r("float32array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        float64array(i) {
            return r("float64array:"),
            this.dispatch(Array.prototype.slice.call(i))
        },
        arraybuffer(i) {
            return r("arraybuffer:"),
            this.dispatch(new Uint8Array(i))
        },
        url(i) {
            return r("url:" + i.toString())
        },
        map(i) {
            r("map:");
            const o = [...i];
            return this.array(o, e.unorderedSets !== !1)
        },
        set(i) {
            r("set:");
            const o = [...i];
            return this.array(o, e.unorderedSets !== !1)
        },
        file(i) {
            return r("file:"),
            this.dispatch([i.name, i.size, i.type, i.lastModfied])
        },
        blob() {
            if (e.ignoreUnknown)
                return r("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return r("domwindow")
        },
        bigint(i) {
            return r("bigint:" + i.toString())
        },
        process() {
            return r("process")
        },
        timer() {
            return r("timer")
        },
        pipe() {
            return r("pipe")
        },
        tcp() {
            return r("tcp")
        },
        udp() {
            return r("udp")
        },
        tty() {
            return r("tty")
        },
        statwatcher() {
            return r("statwatcher")
        },
        securecontext() {
            return r("securecontext")
        },
        connection() {
            return r("connection")
        },
        zlib() {
            return r("zlib")
        },
        context() {
            return r("context")
        },
        nodescript() {
            return r("nodescript")
        },
        httpparser() {
            return r("httpparser")
        },
        dataview() {
            return r("dataview")
        },
        signal() {
            return r("signal")
        },
        fsevent() {
            return r("fsevent")
        },
        tlswrap() {
            return r("tlswrap")
        }
    }
}
const mm = "[native code] }"
  , mE = mm.length;
function Uf(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-mE) === mm
}
function gE(e, t, n={}) {
    return e === t || Vf(e, n) === Vf(t, n)
}
function yE(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>ym(t, e)
    }
}
function gm(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,i])=>[r, gm(i)])) : new Map(Object.entries(e[n]));
    return t
}
function vE(e) {
    return yE(gm(e))
}
function ym(e, t) {
    const n = [];
    for (const [i,o] of Bf(t.wildcard))
        e.startsWith(i) && n.push(o);
    for (const [i,o] of Bf(t.dynamic))
        if (e.startsWith(i + "/")) {
            const s = "/" + e.slice(i.length).split("/").splice(2).join("/");
            n.push(...ym(s, o))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function Bf(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function xa(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Nl(e, t, n=".", r) {
    if (!xa(t))
        return Nl(e, {}, n, r);
    const i = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = e[o];
        s != null && (r && r(i, o, s, n) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : xa(s) && xa(i[o]) ? i[o] = Nl(s, i[o], (n ? `${n}.` : "") + o.toString(), r) : i[o] = s))
    }
    return i
}
function vm(e) {
    return (...t)=>t.reduce((n,r)=>Nl(n, r, "", e), {})
}
const ru = vm()
  , _E = vm((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function bE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var EE = Object.defineProperty
  , TE = (e,t,n)=>t in e ? EE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Pr = (e,t,n)=>(TE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Vl extends Error {
    constructor(t, n={}) {
        super(t, n),
        Pr(this, "statusCode", 500),
        Pr(this, "fatal", !1),
        Pr(this, "unhandled", !1),
        Pr(this, "statusMessage"),
        Pr(this, "data"),
        Pr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Bl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = _m(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Pr(Vl, "__h3_error__", !0);
function Ul(e) {
    if (typeof e == "string")
        return new Vl(e);
    if (SE(e))
        return e;
    const t = new Vl(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (bE(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = Bl(e.statusCode, t.statusCode) : e.status && (t.statusCode = Bl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        _m(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function SE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const AE = /[^\u0009\u0020-\u007E]/g;
function _m(e="") {
    return e.replace(AE, "")
}
function Bl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const bm = Symbol("layout-meta")
  , Do = Symbol("route")
  , qt = ()=>{
    var e;
    return (e = re()) == null ? void 0 : e.$router
}
  , ia = ()=>zc() ? bt(Do, re()._route) : re()._route;
const wE = (e,t,n={})=>{
    const r = re()
      , i = n.global || typeof e != "string"
      , o = typeof e != "string" ? e : t;
    if (!o) {
        console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
        return
    }
    i ? r._middleware.global.push(o) : r._middleware.named[e] = o
}
  , kE = ()=>{
    try {
        if (re()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , No = (e,t)=>{
    e || (e = "/");
    const n = typeof e == "string" ? e : sm(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = t.open
              , c = Object.entries(l).filter(([u,f])=>f !== void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");
            open(n, a, c)
        }
        return Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || Dn(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = Mo(n).protocol;
        if (a && bb(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = kE();
    if (!r && i)
        return e;
    const o = qt()
      , s = re();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    i ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Em = "__nuxt_error"
  , oa = ()=>ri(re().payload, "error")
  , ii = e=>{
    const t = sa(e);
    try {
        const n = re()
          , r = oa();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , LE = async(e={})=>{
    const t = re()
      , n = oa();
    t.callHook("app:error:cleared", e),
    e.redirect && await qt().replace(e.redirect),
    n.value = null
}
  , CE = e=>!!e && typeof e == "object" && Em in e
  , sa = e=>{
    const t = Ul(e);
    return Object.defineProperty(t, Em, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , OE = "modulepreload"
  , RE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , xf = {}
  , IE = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        i = Promise.all(n.map(s=>{
            if (s = RE(s, r),
            s in xf)
                return;
            xf[s] = !0;
            const a = s.endsWith(".css")
              , l = a ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let f = o.length - 1; f >= 0; f--) {
                    const d = o[f];
                    if (d.href === s && (!a || d.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${s}"]${l}`))
                return;
            const u = document.createElement("link");
            if (u.rel = a ? "stylesheet" : OE,
            a || (u.as = "script",
            u.crossOrigin = ""),
            u.href = s,
            document.head.appendChild(u),
            a)
                return new Promise((f,d)=>{
                    u.addEventListener("load", f),
                    u.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${s}`)))
                }
                )
        }
        ))
    }
    return i.then(()=>t()).catch(o=>{
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = o,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw o
    }
    )
}
  , w = (...e)=>IE(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , PE = -1
  , ME = -2
  , DE = -3
  , NE = -4
  , VE = -5
  , UE = -6;
function BE(e, t) {
    return xE(JSON.parse(e), t)
}
function xE(e, t) {
    if (typeof e == "number")
        return i(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function i(o, s=!1) {
        if (o === PE)
            return;
        if (o === DE)
            return NaN;
        if (o === NE)
            return 1 / 0;
        if (o === VE)
            return -1 / 0;
        if (o === UE)
            return -0;
        if (s)
            throw new Error("Invalid input");
        if (o in r)
            return r[o];
        const a = n[o];
        if (!a || typeof a != "object")
            r[o] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , c = t == null ? void 0 : t[l];
                if (c)
                    return r[o] = c(i(a[1]));
                switch (l) {
                case "Date":
                    r[o] = new Date(a[1]);
                    break;
                case "Set":
                    const u = new Set;
                    r[o] = u;
                    for (let m = 1; m < a.length; m += 1)
                        u.add(i(a[m]));
                    break;
                case "Map":
                    const f = new Map;
                    r[o] = f;
                    for (let m = 1; m < a.length; m += 2)
                        f.set(i(a[m]), i(a[m + 1]));
                    break;
                case "RegExp":
                    r[o] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[o] = Object(a[1]);
                    break;
                case "BigInt":
                    r[o] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[o] = d;
                    for (let m = 1; m < a.length; m += 2)
                        d[a[m]] = i(a[m + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[o] = l;
                for (let c = 0; c < a.length; c += 1) {
                    const u = a[c];
                    u !== ME && (l[c] = i(u))
                }
            }
        else {
            const l = {};
            r[o] = l;
            for (const c in a) {
                const u = a[c];
                l[c] = i(u)
            }
        }
        return r[o]
    }
    return i(0)
}
function FE(e) {
    return Array.isArray(e) ? e : [e]
}
const HE = ["title", "titleTemplate", "script", "style", "noscript"]
  , ds = ["base", "meta", "link", "style", "script", "noscript"]
  , jE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , KE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Tm = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , YE = typeof window < "u";
function iu(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Ff(e) {
    return e._h || iu(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function Sm(e, t) {
    const {props: n, tag: r} = e;
    if (KE.includes(r))
        return r;
    if (r === "link" && n.rel === "canonical")
        return "canonical";
    if (n.charset)
        return "charset";
    const i = ["id"];
    r === "meta" && i.push("name", "property", "http-equiv");
    for (const o of i)
        if (typeof n[o] < "u") {
            const s = String(n[o]);
            return t && !t(s) ? !1 : `${r}:${o}:${s}`
        }
    return !1
}
function Hf(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function Am(e, t) {
    const n = []
      , r = t.resolveKeyData || (o=>o.key)
      , i = t.resolveValueData || (o=>o.value);
    for (const [o,s] of Object.entries(e))
        n.push(...(Array.isArray(s) ? s : [s]).map(a=>{
            const l = {
                key: o,
                value: a
            }
              , c = i(l);
            return typeof c == "object" ? Am(c, t) : Array.isArray(c) ? c : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: c
            }
        }
        ).flat());
    return n
}
function wm(e, t) {
    return Object.entries(e).map(([n,r])=>{
        if (typeof r == "object" && (r = wm(r, t)),
        t.resolve) {
            const i = t.resolve({
                key: n,
                value: r
            });
            if (i)
                return i
        }
        return typeof r == "number" && (r = r.toString()),
        typeof r == "string" && t.wrapValue && (r = r.replace(new RegExp(t.wrapValue,"g"), `\\${t.wrapValue}`),
        r = `${t.wrapValue}${r}${t.wrapValue}`),
        `${n}${t.keyValueSeparator || ""}${r}`
    }
    ).join(t.entrySeparator || "")
}
const wt = e=>({
    keyValue: e,
    metaKey: "property"
})
  , Fa = e=>({
    keyValue: e
})
  , ou = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${Fn(e)}=${t}`
            }
        }
    },
    articleExpirationTime: wt("article:expiration_time"),
    articleModifiedTime: wt("article:modified_time"),
    articlePublishedTime: wt("article:published_time"),
    bookReleaseDate: wt("book:release_date"),
    charset: {
        metaKey: "charset"
    },
    contentSecurityPolicy: {
        unpack: {
            entrySeparator: "; ",
            resolve({key: e, value: t}) {
                return `${Fn(e)} ${t}`
            }
        },
        metaKey: "http-equiv"
    },
    contentType: {
        metaKey: "http-equiv"
    },
    defaultStyle: {
        metaKey: "http-equiv"
    },
    fbAppId: wt("fb:app_id"),
    msapplicationConfig: Fa("msapplication-Config"),
    msapplicationTileColor: Fa("msapplication-TileColor"),
    msapplicationTileImage: Fa("msapplication-TileImage"),
    ogAudioSecureUrl: wt("og:audio:secure_url"),
    ogAudioUrl: wt("og:audio"),
    ogImageSecureUrl: wt("og:image:secure_url"),
    ogImageUrl: wt("og:image"),
    ogSiteName: wt("og:site_name"),
    ogVideoSecureUrl: wt("og:video:secure_url"),
    ogVideoUrl: wt("og:video"),
    profileFirstName: wt("profile:first_name"),
    profileLastName: wt("profile:last_name"),
    profileUsername: wt("profile:username"),
    refresh: {
        metaKey: "http-equiv",
        unpack: {
            entrySeparator: ";",
            resolve({key: e, value: t}) {
                if (e === "seconds")
                    return `${t}`
            }
        }
    },
    robots: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return typeof t == "boolean" ? `${Fn(e)}` : `${Fn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , km = ["og", "book", "article", "profile"];
function Lm(e) {
    var n;
    const t = Fn(e).split(":")[0];
    return km.includes(t) ? "property" : ((n = ou[e]) == null ? void 0 : n.metaKey) || "name"
}
function qE(e) {
    var t;
    return ((t = ou[e]) == null ? void 0 : t.keyValue) || Fn(e)
}
function Fn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return km.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function xl(e) {
    if (Array.isArray(e))
        return e.map(n=>xl(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[Fn(n)] = xl(r);
    return t
}
function WE(e, t) {
    const n = ou[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : wm(xl(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve({value: r, key: i}) {
            if (r === null)
                return "";
            if (typeof r == "boolean")
                return `${i}`
        },
        ...n == null ? void 0 : n.unpack
    })
}
const Cm = ["og:image", "og:video", "og:audio", "twitter:image"];
function Om(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function jf(e, t) {
    const n = Om(t)
      , r = Fn(e)
      , i = Lm(r);
    if (Cm.includes(r)) {
        const o = {};
        return Object.entries(n).forEach(([s,a])=>{
            o[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Rm(o).sort((s,a)=>{
            var l, c;
            return (((l = s[i]) == null ? void 0 : l.length) || 0) - (((c = a[i]) == null ? void 0 : c.length) || 0)
        }
        )
    }
    return [{
        [i]: r,
        ...n
    }]
}
function Rm(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([i,o])=>{
        if (!Array.isArray(o)) {
            if (typeof o == "object" && o) {
                if (Cm.includes(Fn(i))) {
                    t.push(...jf(i, o));
                    return
                }
                n[i] = Om(o)
            } else
                n[i] = o;
            return
        }
        o.forEach(s=>{
            t.push(...typeof s == "string" ? Rm({
                [i]: s
            }) : jf(i, s))
        }
        )
    }
    );
    const r = Am(n, {
        key({key: i}) {
            return Lm(i)
        },
        value({key: i}) {
            return i === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: i}) {
            return qE(i)
        },
        resolveValueData({value: i, key: o}) {
            return i === null ? "_null" : typeof i == "object" ? WE(i, o) : typeof i == "number" ? i.toString() : i
        }
    });
    return [...t, ...r].map(i=>(i.content === "_null" && (i.content = null),
    i))
}
async function GE(e, t, n) {
    const r = {
        tag: e,
        props: await Im(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Tm.forEach(i=>{
        const o = typeof r.props[i] < "u" ? r.props[i] : n[i];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || HE.includes(r.tag)) && (r[i === "children" ? "innerHTML" : i] = o),
        delete r.props[i])
    }
    ),
    r.props.body && (r.tagPosition = "bodyClose",
    delete r.props.body),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(i=>({
        ...r,
        props: {
            ...r.props,
            content: i
        }
    })) : r
}
function JE(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function Im(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = JE(e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !Tm.includes(n)) {
            const r = String(e[n])
              , i = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = i ? "true" : !0 : e[n] || (i && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const zE = 10;
async function QE(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && jE.includes(n)).forEach(([n,r])=>{
        const i = FE(r);
        t.push(...i.map(o=>GE(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << zE) + r,
    n))
}
const Kf = {
    base: -10,
    title: 10
}
  , Yf = {
    critical: -80,
    high: -10,
    low: 20
};
function Is(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Kf && (t = Kf[e.tag]),
    typeof n == "string" && n in Yf ? t + Yf[n] : t)
}
const XE = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Pm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , Zn = "%separator";
function hs(e, t, n) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    function r(s) {
        let a;
        return ["s", "pageTitle"].includes(s) ? a = t.pageTitle : s.includes(".") ? a = s.split(".").reduce((l,c)=>l && l[c] || void 0, t) : a = t[s],
        typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    }
    let i = e;
    try {
        i = decodeURI(e)
    } catch {}
    return (i.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(s=>{
        const a = r(s.slice(1));
        typeof a == "string" && (e = e.replace(new RegExp(`\\${s}(\\W|$)`,"g"), (l,c)=>`${a}${c}`).trim())
    }
    ),
    e.includes(Zn) && (e.endsWith(Zn) && (e = e.slice(0, -Zn.length).trim()),
    e.startsWith(Zn) && (e = e.slice(Zn.length).trim()),
    e = e.replace(new RegExp(`\\${Zn}\\s*\\${Zn}`,"g"), Zn),
    e = hs(e, {
        separator: n
    }, n)),
    e
}
async function ZE(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Im(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = Sm(t),
    t
}
async function Mm(e, t={}) {
    var u;
    const n = t.document || e.resolvedOptions.document;
    if (!n)
        return;
    const r = {
        shouldRender: e.dirty,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const i = (await e.resolveTags()).map(f=>({
        tag: f,
        id: ds.includes(f.tag) ? Ff(f) : f.tag,
        shouldRender: !0
    }));
    let o = e._dom;
    if (!o) {
        o = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const f of ["body", "head"]) {
            const d = (u = n == null ? void 0 : n[f]) == null ? void 0 : u.children;
            for (const m of [...d].filter(_=>ds.includes(_.tagName.toLowerCase())))
                o.elMap[m.getAttribute("data-hid") || Ff(await ZE(m))] = m
        }
    }
    o.pendingSideEffects = {
        ...o.sideEffects || {}
    },
    o.sideEffects = {};
    function s(f, d, m) {
        const _ = `${f}:${d}`;
        o.sideEffects[_] = m,
        delete o.pendingSideEffects[_]
    }
    function a({id: f, $el: d, tag: m}) {
        const _ = m.tag.endsWith("Attrs");
        o.elMap[f] = d,
        _ || (["textContent", "innerHTML"].forEach(b=>{
            m[b] && m[b] !== d[b] && (d[b] = m[b])
        }
        ),
        s(f, "el", ()=>{
            o.elMap[f].remove(),
            delete o.elMap[f]
        }
        )),
        Object.entries(m.props).forEach(([b,S])=>{
            const g = `attr:${b}`;
            if (b === "class")
                for (const E of (S || "").split(" ").filter(Boolean))
                    _ && s(f, `${g}:${E}`, ()=>d.classList.remove(E)),
                    !d.classList.contains(E) && d.classList.add(E);
            else
                d.getAttribute(b) !== S && d.setAttribute(b, S === !0 ? "" : String(S)),
                _ && s(f, g, ()=>d.removeAttribute(b))
        }
        )
    }
    const l = []
      , c = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const f of i) {
        const {tag: d, shouldRender: m, id: _} = f;
        if (m) {
            if (d.tag === "title") {
                n.title = d.textContent;
                continue
            }
            f.$el = f.$el || o.elMap[_],
            f.$el ? a(f) : ds.includes(d.tag) && l.push(f)
        }
    }
    for (const f of l) {
        const d = f.tag.tagPosition || "head";
        f.$el = n.createElement(f.tag.tag),
        a(f),
        c[d] = c[d] || n.createDocumentFragment(),
        c[d].appendChild(f.$el)
    }
    for (const f of i)
        await e.hooks.callHook("dom:renderTag", f, n, s);
    c.head && n.head.appendChild(c.head),
    c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
    c.bodyClose && n.body.appendChild(c.bodyClose),
    Object.values(o.pendingSideEffects).forEach(f=>f()),
    e._dom = o,
    e.dirty = !1,
    await e.hooks.callHook("dom:rendered", {
        renders: i
    })
}
async function $E(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await Mm(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function eT(e) {
    return t=>{
        var r, i;
        const n = ((i = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    $E(o, e)
                }
            }
        }
    }
}
const tT = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , nT = {
    hooks: {
        "tag:normalise": function({tag: e}) {
            ["hid", "vmid", "key"].forEach(r=>{
                e.props[r] && (e.key = e.props[r],
                delete e.props[r])
            }
            );
            const n = Sm(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        },
        "tags:resolve": function(e) {
            const t = {};
            e.tags.forEach(r=>{
                const i = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , o = t[i];
                if (o) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && tT.includes(r.tag) && (a = "merge"),
                    a === "merge") {
                        const l = o.props;
                        ["class", "style"].forEach(c=>{
                            l[c] && (r.props[c] ? (c === "style" && !l[c].endsWith(";") && (l[c] += ";"),
                            r.props[c] = `${l[c]} ${r.props[c]}`) : r.props[c] = l[c])
                        }
                        ),
                        t[i].props = {
                            ...l,
                            ...r.props
                        };
                        return
                    } else if (r._e === o._e) {
                        o._duped = o._duped || [],
                        r._d = `${o._d}:${o._duped.length + 1}`,
                        o._duped.push(r);
                        return
                    } else if (Is(r) > Is(o))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (ds.includes(r.tag) && s === 0) {
                    delete t[i];
                    return
                }
                t[i] = r
            }
            );
            const n = [];
            Object.values(t).forEach(r=>{
                const i = r._duped;
                delete r._duped,
                n.push(r),
                i && n.push(...i)
            }
            ),
            e.tags = n,
            e.tags = e.tags.filter(r=>!(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , rT = {
    mode: "server",
    hooks: {
        "tags:resolve": function(e) {
            const t = {};
            e.tags.filter(n=>["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n=>{
                t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
            }
            ),
            Object.keys(t).length && e.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(t),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , iT = ["script", "link", "bodyAttrs"];
function oT(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,i])=>{
        r.startsWith("on") && typeof i == "function" ? (Pm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = i) : t[r] = i
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const sT = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (iT.includes(n.tag)) {
                    const {props: r, eventHandlers: i} = oT(n);
                    n.props = r,
                    Object.keys(i).length && ((n.props.src || n.props.href) && (n.key = n.key || iu(n.props.src || n.props.href)),
                    n._eventHandlers = i)
                }
        },
        "dom:renderTag": function(t, n, r) {
            if (!t.tag._eventHandlers)
                return;
            const i = t.tag.tag === "bodyAttrs" ? n.defaultView : t.$el;
            Object.entries(t.tag._eventHandlers).forEach(([o,s])=>{
                const a = `${t.tag._d || t.tag._p}:${o}`
                  , l = o.slice(2).toLowerCase()
                  , c = `data-h-${l}`;
                if (r(t.id, a, ()=>{}
                ),
                t.$el.hasAttribute(c))
                    return;
                t.$el.setAttribute(c, "");
                let u;
                const f = d=>{
                    s(d),
                    u == null || u.disconnect()
                }
                ;
                o in t.$el.dataset ? f(new Event(o.replace("on", ""))) : Pm.includes(o) && typeof MutationObserver < "u" ? (u = new MutationObserver(d=>{
                    d.some(_=>_.attributeName === `data-${o}`) && (f(new Event(o.replace("on", ""))),
                    u == null || u.disconnect())
                }
                ),
                u.observe(t.$el, {
                    attributes: !0
                })) : i.addEventListener(l, f),
                r(t.id, a, ()=>{
                    u == null || u.disconnect(),
                    i.removeEventListener(l, f),
                    t.$el.removeAttribute(c)
                }
                )
            }
            )
        }
    }
})
  , aT = ["link", "style", "script", "noscript"]
  , lT = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && aT.includes(e.tag) && (e.props["data-hid"] = e._h = iu(e.key))
        }
    }
}
  , cT = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(i=>i._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of XE)
                for (const i of e.tags.filter(o=>typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(i.tagPriority.replace(n, ""));
                    typeof o < "u" && (i._p = o + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>Is(n) - Is(r))
        }
    }
}
  , uT = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , fT = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , i = n.findIndex(l=>l.tag === "templateParams")
              , o = i !== -1 ? n[i].props : {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = hs(o.pageTitle || r || "", o, s);
            for (const l of n.filter(c=>c.processTemplateParams !== !1)) {
                const c = uT[l.tag];
                c && typeof l.props[c] == "string" ? l.props[c] = hs(l.props[c], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(u=>{
                    typeof l[u] == "string" && (l[u] = hs(l[u], o, s))
                }
                )
            }
            e._templateParams = o,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , dT = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(i=>i.tag === "titleTemplate");
            const r = t.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = Hf(t[n].textContent, t[r].textContent);
                i !== null ? t[r].textContent = i || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const i = Hf(t[n].textContent);
                i !== null && (t[n].textContent = i,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , hT = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Dm;
function pT(e={}) {
    const t = mT(e);
    return t.use(eT()),
    Dm = t
}
function qf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function mT(e={}) {
    const t = dm();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (YE ? document : void 0);
    const n = !e.document
      , r = ()=>{
        a.dirty = !0,
        t.callHook("entries:updated", a)
    }
    ;
    let i = 0
      , o = [];
    const s = []
      , a = {
        plugins: s,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries() {
            return o
        },
        use(l) {
            const c = typeof l == "function" ? l(a) : l;
            (!c.key || !s.some(u=>u.key === c.key)) && (s.push(c),
            qf(c.mode, n) && t.addHooks(c.hooks || {}))
        },
        push(l, c) {
            c == null || delete c.head;
            const u = {
                _i: i++,
                input: l,
                ...c
            };
            return qf(u.mode, n) && (o.push(u),
            r()),
            {
                dispose() {
                    o = o.filter(f=>f._i !== u._i),
                    t.callHook("entries:updated", a),
                    r()
                },
                patch(f) {
                    o = o.map(d=>(d._i === u._i && (d.input = u.input = f),
                    d)),
                    r()
                }
            }
        },
        async resolveTags() {
            const l = {
                tags: [],
                entries: [...o]
            };
            await t.callHook("entries:resolve", l);
            for (const c of l.entries) {
                const u = c.resolvedInput || c.input;
                if (c.resolvedInput = await (c.transform ? c.transform(u) : u),
                c.resolvedInput)
                    for (const f of await QE(c)) {
                        const d = {
                            tag: f,
                            entry: c,
                            resolvedOptions: a.resolvedOptions
                        };
                        await t.callHook("tag:normalise", d),
                        l.tags.push(d.tag)
                    }
            }
            return await t.callHook("tags:beforeResolve", l),
            await t.callHook("tags:resolve", l),
            await t.callHook("tags:afterResolve", l),
            l.tags
        },
        ssr: n
    };
    return [nT, rT, sT, lT, cT, fT, dT, hT, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function gT() {
    return Dm
}
const yT = $p.startsWith("3");
function vT(e) {
    return typeof e == "function" ? e() : G(e)
}
function Ps(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = vT(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Ps(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,i])=>r === "titleTemplate" || r.startsWith("on") ? [r, G(i)] : [r, Ps(i, r)])) : n
}
const _T = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Ps(t.input)
        }
    }
}
  , Nm = "usehead";
function bT(e) {
    return {
        install(n) {
            yT && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Nm, e))
        }
    }.install
}
function ET(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>Kt(()=>setTimeout(()=>n(), 0)));
    const t = pT(e);
    return t.use(_T),
    t.install = bT(t),
    t
}
const Fl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Hl = "__unhead_injection_handler__";
function TT(e) {
    Fl[Hl] = e
}
function ST() {
    if (Hl in Fl)
        return Fl[Hl]();
    const e = bt(Nm);
    return e || gT()
}
function AT(e, t={}) {
    const n = t.head || ST();
    if (n)
        return n.ssr ? n.push(e, t) : wT(n, e, t)
}
function wT(e, t, n={}) {
    const r = le(!1)
      , i = le({});
    O0(()=>{
        i.value = r.value ? {} : Ps(t)
    }
    );
    const o = e.push(i.value, n);
    return Fe(i, a=>{
        o.patch(a)
    }
    ),
    yn() && (gn(()=>{
        o.dispose()
    }
    ),
    Ip(()=>{
        r.value = !0
    }
    ),
    Rp(()=>{
        r.value = !1
    }
    )),
    o
}
function Tn(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Tn(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: Tn(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = Tn(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = Tn(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(i) {
        n.add(Tn(i))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(i, o) {
        n.set(Tn(o), Tn(i))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(Tn(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const kT = {
    nuxt: {
        buildId: "774e705d-5c6e-4112-8619-d2e74f99778b"
    }
}
  , LT = _E(kT);
function CT() {
    const e = re();
    return e._appConfig || (e._appConfig = Et(LT)),
    e._appConfig
}
const OT = !1
  , jl = !1
  , RT = !1
  , IT = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , PT = "#__nuxt";
let ps, Vm;
function MT() {
    var t;
    const e = (t = CT().nuxt) == null ? void 0 : t.buildId;
    return ps = $fetch(tu(`builds/meta/${e}.json`)),
    ps.then(n=>{
        Vm = vE(n.matcher)
    }
    ),
    ps
}
function aa() {
    return ps || MT()
}
async function Um(e) {
    return await aa(),
    ru({}, ...Vm.matchAll(e).reverse())
}
function Wf(e, t={}) {
    const n = DT(e, t)
      , r = re()
      , i = r._payloadCache = r._payloadCache || {};
    return n in i || (i[n] = NT(e).then(o=>o ? Bm(n).then(s=>s || (delete i[n],
    null)) : (i[n] = null,
    null))),
    i[n]
}
const Gf = "json";
function DT(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || Dn(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Oi(Wn().app.baseURL, n.pathname, r ? `_payload.${r}.${Gf}` : `_payload.${Gf}`)
}
async function Bm(e) {
    const t = fetch(e).then(n=>n.text().then(xm));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function NT(e=ia().path) {
    if (e = Po(e),
    (await aa()).prerendered.includes(e))
        return !0;
    const n = await Um(e);
    return !!n.prerender && !n.redirect
}
let rs = null;
async function VT() {
    if (rs)
        return rs;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await xm(e.textContent || "")
      , n = e.dataset.src ? await Bm(e.dataset.src) : void 0;
    return rs = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    rs
}
async function xm(e) {
    return await BE(e, re()._payloadRevivers)
}
function UT(e, t) {
    re()._payloadRevivers[e] = t
}
const Jf = {
    NuxtError: e=>sa(e),
    EmptyShallowRef: e=>hn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : ho(e)),
    EmptyRef: e=>le(e === "_" ? void 0 : e === "0n" ? BigInt(0) : ho(e)),
    ShallowRef: e=>hn(e),
    ShallowReactive: e=>Li(e),
    Ref: e=>le(e),
    Reactive: e=>Et(e)
}
  , BT = It({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in Jf)
            UT(r, Jf[r]);
        Object.assign(e.payload, ([t,n] = wn(()=>e.runWithContext(VT)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , xT = []
  , FT = It({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = ET({
            plugins: xT
        });
        TT(()=>re().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await Mm(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", i=>{
                i.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", ()=>{
                n = !0
            }
            ),
            e.hooks.hook("page:finish", ()=>{
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const ti = typeof document < "u";
function HT(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ze = Object.assign;
function Ha(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = pn(i) ? i.map(e) : e(i)
    }
    return n
}
const Wi = ()=>{}
  , pn = Array.isArray
  , Fm = /#/g
  , jT = /&/g
  , KT = /\//g
  , YT = /=/g
  , qT = /\?/g
  , Hm = /\+/g
  , WT = /%5B/g
  , GT = /%5D/g
  , jm = /%5E/g
  , JT = /%60/g
  , Km = /%7B/g
  , zT = /%7C/g
  , Ym = /%7D/g
  , QT = /%20/g;
function su(e) {
    return encodeURI("" + e).replace(zT, "|").replace(WT, "[").replace(GT, "]")
}
function XT(e) {
    return su(e).replace(Km, "{").replace(Ym, "}").replace(jm, "^")
}
function Kl(e) {
    return su(e).replace(Hm, "%2B").replace(QT, "+").replace(Fm, "%23").replace(jT, "%26").replace(JT, "`").replace(Km, "{").replace(Ym, "}").replace(jm, "^")
}
function ZT(e) {
    return Kl(e).replace(YT, "%3D")
}
function $T(e) {
    return su(e).replace(Fm, "%23").replace(qT, "%3F")
}
function eS(e) {
    return e == null ? "" : $T(e).replace(KT, "%2F")
}
function po(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const tS = /\/$/
  , nS = e=>e.replace(tS, "");
function ja(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    i = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = sS(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: po(s)
    }
}
function rS(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function zf(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function iS(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && vi(t.matched[r], n.matched[i]) && qm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function vi(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function qm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!oS(e[n], t[n]))
            return !1;
    return !0
}
function oS(e, t) {
    return pn(e) ? Qf(e, t) : pn(t) ? Qf(t, e) : e === t
}
function Qf(e, t) {
    return pn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function sS(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , i = r[r.length - 1];
    (i === ".." || i === ".") && r.push("");
    let o = n.length - 1, s, a;
    for (s = 0; s < r.length; s++)
        if (a = r[s],
        a !== ".")
            if (a === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + r.slice(s).join("/")
}
var mo;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(mo || (mo = {}));
var Gi;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Gi || (Gi = {}));
function aS(e) {
    if (!e)
        if (ti) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    nS(e)
}
const lS = /^[^#]+#/;
function cS(e, t) {
    return e.replace(lS, "#") + t
}
function uS(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const la = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function fS(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = uS(i, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Xf(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Yl = new Map;
function dS(e, t) {
    Yl.set(e, t)
}
function hS(e) {
    const t = Yl.get(e);
    return Yl.delete(e),
    t
}
let pS = ()=>location.protocol + "//" + location.host;
function Wm(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        zf(l, "")
    }
    return zf(n, e) + r + i
}
function mS(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const a = ({state: d})=>{
        const m = Wm(e, location)
          , _ = n.value
          , b = t.value;
        let S = 0;
        if (d) {
            if (n.value = m,
            t.value = d,
            s && s === _) {
                s = null;
                return
            }
            S = b ? d.position - b.position : 0
        } else
            r(m);
        i.forEach(g=>{
            g(n.value, _, {
                delta: S,
                type: mo.pop,
                direction: S ? S > 0 ? Gi.forward : Gi.back : Gi.unknown
            })
        }
        )
    }
    ;
    function l() {
        s = n.value
    }
    function c(d) {
        i.push(d);
        const m = ()=>{
            const _ = i.indexOf(d);
            _ > -1 && i.splice(_, 1)
        }
        ;
        return o.push(m),
        m
    }
    function u() {
        const {history: d} = window;
        d.state && d.replaceState(ze({}, d.state, {
            scroll: la()
        }), "")
    }
    function f() {
        for (const d of o)
            d();
        o = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}
function Zf(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? la() : null
    }
}
function gS(e) {
    const {history: t, location: n} = window
      , r = {
        value: Wm(e, n)
    }
      , i = {
        value: t.state
    };
    i.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(l, c, u) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : pS() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d),
            i.value = c
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](d)
        }
    }
    function s(l, c) {
        const u = ze({}, t.state, Zf(i.value.back, l, i.value.forward, !0), c, {
            position: i.value.position
        });
        o(l, u, !0),
        r.value = l
    }
    function a(l, c) {
        const u = ze({}, i.value, t.state, {
            forward: l,
            scroll: la()
        });
        o(u.current, u, !0);
        const f = ze({}, Zf(r.value, l, null), {
            position: u.position + 1
        }, c);
        o(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: i,
        push: a,
        replace: s
    }
}
function Gm(e) {
    e = aS(e);
    const t = gS(e)
      , n = mS(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = ze({
        location: "",
        base: e,
        go: r,
        createHref: cS.bind(null, e)
    }, t, n);
    return Object.defineProperty(i, "location", {
        enumerable: !0,
        get: ()=>t.location.value
    }),
    Object.defineProperty(i, "state", {
        enumerable: !0,
        get: ()=>t.state.value
    }),
    i
}
function yS(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Gm(e)
}
function vS(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Jm(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const an = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , zm = Symbol("");
var $f;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)($f || ($f = {}));
function _i(e, t) {
    return ze(new Error, {
        type: e,
        [zm]: !0
    }, t)
}
function Un(e, t) {
    return e instanceof Error && zm in e && (t == null || !!(e.type & t))
}
const ed = "[^/]+?"
  , _S = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , bS = /[.+*?^${}()[\]/\\]/g;
function ES(e, t) {
    const n = ze({}, _S, t)
      , r = [];
    let i = n.start ? "^" : "";
    const o = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (i += "/");
        for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (i += "/"),
                i += d.value.replace(bS, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: _, repeatable: b, optional: S, regexp: g} = d;
                o.push({
                    name: _,
                    repeatable: b,
                    optional: S
                });
                const E = g || ed;
                if (E !== ed) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${E}): ` + y.message)
                    }
                }
                let p = b ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                f || (p = S && c.length < 2 ? `(?:/${p})` : "/" + p),
                S && (p += "?"),
                i += p,
                m += 20,
                S && (m += -8),
                b && (m += -20),
                E === ".*" && (m += -50)
            }
            u.push(m)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (i += "/?"),
    n.end ? i += "$" : n.strict && (i += "(?:/|$)");
    const s = new RegExp(i,n.sensitive ? "" : "i");
    function a(c) {
        const u = c.match(s)
          , f = {};
        if (!u)
            return null;
        for (let d = 1; d < u.length; d++) {
            const m = u[d] || ""
              , _ = o[d - 1];
            f[_.name] = m && _.repeatable ? m.split("/") : m
        }
        return f
    }
    function l(c) {
        let u = ""
          , f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const m of d)
                if (m.type === 0)
                    u += m.value;
                else if (m.type === 1) {
                    const {value: _, repeatable: b, optional: S} = m
                      , g = _ in c ? c[_] : "";
                    if (pn(g) && !b)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = pn(g) ? g.join("/") : g;
                    if (!E)
                        if (S)
                            d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    u += E
                }
        }
        return u || "/"
    }
    return {
        re: s,
        score: r,
        keys: o,
        parse: a,
        stringify: l
    }
}
function TS(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function SS(e, t) {
    let n = 0;
    const r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        const o = TS(r[n], i[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (td(r))
            return 1;
        if (td(i))
            return -1
    }
    return i.length - r.length
}
function td(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const AS = {
    type: 0,
    value: ""
}
  , wS = /[a-zA-Z0-9_]/;
function kS(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[AS]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${c}": ${m}`)
    }
    let n = 0
      , r = n;
    const i = [];
    let o;
    function s() {
        o && i.push(o),
        o = []
    }
    let a = 0, l, c = "", u = "";
    function f() {
        c && (n === 0 ? o.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function d() {
        c += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (c && f(),
            s()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : wS.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    s(),
    i
}
function LS(e, t, n) {
    const r = ES(kS(e.path), n)
      , i = ze(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i),
    i
}
function CS(e, t) {
    const n = []
      , r = new Map;
    t = id({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(u) {
        return r.get(u)
    }
    function o(u, f, d) {
        const m = !d
          , _ = OS(u);
        _.aliasOf = d && d.record;
        const b = id(t, u)
          , S = [_];
        if ("alias"in u) {
            const p = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const y of p)
                S.push(ze({}, _, {
                    components: d ? d.record.components : _.components,
                    path: y,
                    aliasOf: d ? d.record : _
                }))
        }
        let g, E;
        for (const p of S) {
            const {path: y} = p;
            if (f && y[0] !== "/") {
                const T = f.record.path
                  , A = T[T.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (y && A + y)
            }
            if (g = LS(p, f, b),
            d ? d.alias.push(g) : (E = E || g,
            E !== g && E.alias.push(g),
            m && u.name && !rd(g) && s(u.name)),
            _.children) {
                const T = _.children;
                for (let A = 0; A < T.length; A++)
                    o(T[A], g, d && d.children[A])
            }
            d = d || g,
            (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && l(g)
        }
        return E ? ()=>{
            s(E)
        }
        : Wi
    }
    function s(u) {
        if (Jm(u)) {
            const f = r.get(u);
            f && (r.delete(u),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(s),
            f.alias.forEach(s))
        } else {
            const f = n.indexOf(u);
            f > -1 && (n.splice(f, 1),
            u.record.name && r.delete(u.record.name),
            u.children.forEach(s),
            u.alias.forEach(s))
        }
    }
    function a() {
        return n
    }
    function l(u) {
        let f = 0;
        for (; f < n.length && SS(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !Qm(u, n[f])); )
            f++;
        n.splice(f, 0, u),
        u.record.name && !rd(u) && r.set(u.record.name, u)
    }
    function c(u, f) {
        let d, m = {}, _, b;
        if ("name"in u && u.name) {
            if (d = r.get(u.name),
            !d)
                throw _i(1, {
                    location: u
                });
            b = d.record.name,
            m = ze(nd(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), u.params && nd(u.params, d.keys.map(E=>E.name))),
            _ = d.stringify(m)
        } else if (u.path != null)
            _ = u.path,
            d = n.find(E=>E.re.test(_)),
            d && (m = d.parse(_),
            b = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw _i(1, {
                    location: u,
                    currentLocation: f
                });
            b = d.record.name,
            m = ze({}, f.params, u.params),
            _ = d.stringify(m)
        }
        const S = [];
        let g = d;
        for (; g; )
            S.unshift(g.record),
            g = g.parent;
        return {
            name: b,
            path: _,
            params: m,
            matched: S,
            meta: IS(S)
        }
    }
    return e.forEach(u=>o(u)),
    {
        addRoute: o,
        resolve: c,
        removeRoute: s,
        getRoutes: a,
        getRecordMatcher: i
    }
}
function nd(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function OS(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: RS(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function RS(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function rd(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function IS(e) {
    return e.reduce((t,n)=>ze(t, n.meta), {})
}
function id(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Qm(e, t) {
    return t.children.some(n=>n === e || Qm(e, n))
}
function PS(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(Hm, " ")
          , s = o.indexOf("=")
          , a = po(s < 0 ? o : o.slice(0, s))
          , l = s < 0 ? null : po(o.slice(s + 1));
        if (a in t) {
            let c = t[a];
            pn(c) || (c = t[a] = [c]),
            c.push(l)
        } else
            t[a] = l
    }
    return t
}
function od(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = ZT(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (pn(r) ? r.map(o=>o && Kl(o)) : [r && Kl(r)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function MS(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = pn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const DS = Symbol("")
  , sd = Symbol("")
  , au = Symbol("")
  , lu = Symbol("")
  , ql = Symbol("");
function Ni() {
    let e = [];
    function t(r) {
        return e.push(r),
        ()=>{
            const i = e.indexOf(r);
            i > -1 && e.splice(i, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e.slice(),
        reset: n
    }
}
function lr(e, t, n, r, i, o=s=>s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return ()=>new Promise((a,l)=>{
        const c = d=>{
            d === !1 ? l(_i(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : vS(d) ? l(_i(2, {
                from: t,
                to: d
            })) : (s && r.enterCallbacks[i] === s && typeof d == "function" && s.push(d),
            a())
        }
          , u = o(()=>e.call(r && r.instances[i], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)),
        f.catch(d=>l(d))
    }
    )
}
function Ka(e, t, n, r, i=o=>o()) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (NS(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && o.push(lr(u, n, r, s, a, i))
                } else {
                    let c = l();
                    o.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = HT(u) ? u.default : u;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && lr(m, n, r, s, a, i)()
                    }
                    ))
                }
        }
    return o
}
function NS(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function ad(e) {
    const t = bt(au)
      , n = bt(lu)
      , r = ue(()=>t.resolve(G(e.to)))
      , i = ue(()=>{
        const {matched: l} = r.value
          , {length: c} = l
          , u = l[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(vi.bind(null, u));
        if (d > -1)
            return d;
        const m = ld(l[c - 2]);
        return c > 1 && ld(u) === m && f[f.length - 1].path !== m ? f.findIndex(vi.bind(null, l[c - 2])) : d
    }
    )
      , o = ue(()=>i.value > -1 && xS(n.params, r.value.params))
      , s = ue(()=>i.value > -1 && i.value === n.matched.length - 1 && qm(n.params, r.value.params));
    function a(l={}) {
        return BS(l) ? t[G(e.replace) ? "replace" : "push"](G(e.to)).catch(Wi) : Promise.resolve()
    }
    return {
        route: r,
        href: ue(()=>r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: a
    }
}
const VS = Ve({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: ad,
    setup(e, {slots: t}) {
        const n = Et(ad(e))
          , {options: r} = bt(au)
          , i = ue(()=>({
            [cd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [cd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : ct("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, o)
        }
    }
})
  , US = VS;
function BS(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function xS(e, t) {
    for (const n in t) {
        const r = t[n]
          , i = e[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!pn(i) || i.length !== r.length || r.some((o,s)=>o !== i[s]))
            return !1
    }
    return !0
}
function ld(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const cd = (e,t,n)=>e ?? t ?? n
  , FS = Ve({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = bt(ql)
          , i = ue(()=>e.route || r.value)
          , o = bt(sd, 0)
          , s = ue(()=>{
            let c = G(o);
            const {matched: u} = i.value;
            let f;
            for (; (f = u[c]) && !f.components; )
                c++;
            return c
        }
        )
          , a = ue(()=>i.value.matched[s.value]);
        Hr(sd, ue(()=>s.value + 1)),
        Hr(DS, a),
        Hr(ql, i);
        const l = le();
        return Fe(()=>[l.value, a.value, e.name], ([c,u,f],[d,m,_])=>{
            u && (u.instances[f] = c,
            m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !vi(u, m) || !d) && (u.enterCallbacks[f] || []).forEach(b=>b(c))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const c = i.value
              , u = e.name
              , f = a.value
              , d = f && f.components[u];
            if (!d)
                return ud(n.default, {
                    Component: d,
                    route: c
                });
            const m = f.props[u]
              , _ = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , S = ct(d, ze({}, _, t, {
                onVnodeUnmounted: g=>{
                    g.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: l
            }));
            return ud(n.default, {
                Component: S,
                route: c
            }) || S
        }
    }
});
function ud(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Xm = FS;
function HS(e) {
    const t = CS(e.routes, e)
      , n = e.parseQuery || PS
      , r = e.stringifyQuery || od
      , i = e.history
      , o = Ni()
      , s = Ni()
      , a = Ni()
      , l = hn(an);
    let c = an;
    ti && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = Ha.bind(null, H=>"" + H)
      , f = Ha.bind(null, eS)
      , d = Ha.bind(null, po);
    function m(H, te) {
        let Q, $;
        return Jm(H) ? (Q = t.getRecordMatcher(H),
        $ = te) : $ = H,
        t.addRoute($, Q)
    }
    function _(H) {
        const te = t.getRecordMatcher(H);
        te && t.removeRoute(te)
    }
    function b() {
        return t.getRoutes().map(H=>H.record)
    }
    function S(H) {
        return !!t.getRecordMatcher(H)
    }
    function g(H, te) {
        if (te = ze({}, te || l.value),
        typeof H == "string") {
            const v = ja(n, H, te.path)
              , k = t.resolve({
                path: v.path
            }, te)
              , R = i.createHref(v.fullPath);
            return ze(v, k, {
                params: d(k.params),
                hash: po(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let Q;
        if (H.path != null)
            Q = ze({}, H, {
                path: ja(n, H.path, te.path).path
            });
        else {
            const v = ze({}, H.params);
            for (const k in v)
                v[k] == null && delete v[k];
            Q = ze({}, H, {
                params: f(v)
            }),
            te.params = f(te.params)
        }
        const $ = t.resolve(Q, te)
          , ve = H.hash || "";
        $.params = u(d($.params));
        const Ue = rS(r, ze({}, H, {
            hash: XT(ve),
            path: $.path
        }))
          , h = i.createHref(Ue);
        return ze({
            fullPath: Ue,
            hash: ve,
            query: r === od ? MS(H.query) : H.query || {}
        }, $, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(H) {
        return typeof H == "string" ? ja(n, H, l.value.path) : ze({}, H)
    }
    function p(H, te) {
        if (c !== H)
            return _i(8, {
                from: te,
                to: H
            })
    }
    function y(H) {
        return L(H)
    }
    function T(H) {
        return y(ze(E(H), {
            replace: !0
        }))
    }
    function A(H) {
        const te = H.matched[H.matched.length - 1];
        if (te && te.redirect) {
            const {redirect: Q} = te;
            let $ = typeof Q == "function" ? Q(H) : Q;
            return typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = E($) : {
                path: $
            },
            $.params = {}),
            ze({
                query: H.query,
                hash: H.hash,
                params: $.path != null ? {} : H.params
            }, $)
        }
    }
    function L(H, te) {
        const Q = c = g(H)
          , $ = l.value
          , ve = H.state
          , Ue = H.force
          , h = H.replace === !0
          , v = A(Q);
        if (v)
            return L(ze(E(v), {
                state: typeof v == "object" ? ze({}, ve, v.state) : ve,
                force: Ue,
                replace: h
            }), te || Q);
        const k = Q;
        k.redirectedFrom = te;
        let R;
        return !Ue && iS(r, $, Q) && (R = _i(16, {
            to: k,
            from: $
        }),
        ce($, $, !0, !1)),
        (R ? Promise.resolve(R) : D(k, $)).catch(V=>Un(V) ? Un(V, 2) ? V : j(V) : B(V, k, $)).then(V=>{
            if (V) {
                if (Un(V, 2))
                    return L(ze({
                        replace: h
                    }, E(V.to), {
                        state: typeof V.to == "object" ? ze({}, ve, V.to.state) : ve,
                        force: Ue
                    }), te || k)
            } else
                V = U(k, $, !0, h, ve);
            return F(k, $, V),
            V
        }
        )
    }
    function C(H, te) {
        const Q = p(H, te);
        return Q ? Promise.reject(Q) : Promise.resolve()
    }
    function O(H) {
        const te = Je.values().next().value;
        return te && typeof te.runWithContext == "function" ? te.runWithContext(H) : H()
    }
    function D(H, te) {
        let Q;
        const [$,ve,Ue] = jS(H, te);
        Q = Ka($.reverse(), "beforeRouteLeave", H, te);
        for (const v of $)
            v.leaveGuards.forEach(k=>{
                Q.push(lr(k, H, te))
            }
            );
        const h = C.bind(null, H, te);
        return Q.push(h),
        Ze(Q).then(()=>{
            Q = [];
            for (const v of o.list())
                Q.push(lr(v, H, te));
            return Q.push(h),
            Ze(Q)
        }
        ).then(()=>{
            Q = Ka(ve, "beforeRouteUpdate", H, te);
            for (const v of ve)
                v.updateGuards.forEach(k=>{
                    Q.push(lr(k, H, te))
                }
                );
            return Q.push(h),
            Ze(Q)
        }
        ).then(()=>{
            Q = [];
            for (const v of Ue)
                if (v.beforeEnter)
                    if (pn(v.beforeEnter))
                        for (const k of v.beforeEnter)
                            Q.push(lr(k, H, te));
                    else
                        Q.push(lr(v.beforeEnter, H, te));
            return Q.push(h),
            Ze(Q)
        }
        ).then(()=>(H.matched.forEach(v=>v.enterCallbacks = {}),
        Q = Ka(Ue, "beforeRouteEnter", H, te, O),
        Q.push(h),
        Ze(Q))).then(()=>{
            Q = [];
            for (const v of s.list())
                Q.push(lr(v, H, te));
            return Q.push(h),
            Ze(Q)
        }
        ).catch(v=>Un(v, 8) ? v : Promise.reject(v))
    }
    function F(H, te, Q) {
        a.list().forEach($=>O(()=>$(H, te, Q)))
    }
    function U(H, te, Q, $, ve) {
        const Ue = p(H, te);
        if (Ue)
            return Ue;
        const h = te === an
          , v = ti ? history.state : {};
        Q && ($ || h ? i.replace(H.fullPath, ze({
            scroll: h && v && v.scroll
        }, ve)) : i.push(H.fullPath, ve)),
        l.value = H,
        ce(H, te, Q, h),
        j()
    }
    let Z;
    function W() {
        Z || (Z = i.listen((H,te,Q)=>{
            if (!at.listening)
                return;
            const $ = g(H)
              , ve = A($);
            if (ve) {
                L(ze(ve, {
                    replace: !0
                }), $).catch(Wi);
                return
            }
            c = $;
            const Ue = l.value;
            ti && dS(Xf(Ue.fullPath, Q.delta), la()),
            D($, Ue).catch(h=>Un(h, 12) ? h : Un(h, 2) ? (L(h.to, $).then(v=>{
                Un(v, 20) && !Q.delta && Q.type === mo.pop && i.go(-1, !1)
            }
            ).catch(Wi),
            Promise.reject()) : (Q.delta && i.go(-Q.delta, !1),
            B(h, $, Ue))).then(h=>{
                h = h || U($, Ue, !1),
                h && (Q.delta && !Un(h, 8) ? i.go(-Q.delta, !1) : Q.type === mo.pop && Un(h, 20) && i.go(-1, !1)),
                F($, Ue, h)
            }
            ).catch(Wi)
        }
        ))
    }
    let K = Ni(), N = Ni(), Y;
    function B(H, te, Q) {
        j(H);
        const $ = N.list();
        return $.length ? $.forEach(ve=>ve(H, te, Q)) : console.error(H),
        Promise.reject(H)
    }
    function ae() {
        return Y && l.value !== an ? Promise.resolve() : new Promise((H,te)=>{
            K.add([H, te])
        }
        )
    }
    function j(H) {
        return Y || (Y = !H,
        W(),
        K.list().forEach(([te,Q])=>H ? Q(H) : te()),
        K.reset()),
        H
    }
    function ce(H, te, Q, $) {
        const {scrollBehavior: ve} = e;
        if (!ti || !ve)
            return Promise.resolve();
        const Ue = !Q && hS(Xf(H.fullPath, 0)) || ($ || !Q) && history.state && history.state.scroll || null;
        return Kt().then(()=>ve(H, te, Ue)).then(h=>h && fS(h)).catch(h=>B(h, H, te))
    }
    const _e = H=>i.go(H);
    let Ke;
    const Je = new Set
      , at = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: _,
        hasRoute: S,
        getRoutes: b,
        resolve: g,
        options: e,
        push: y,
        replace: T,
        go: _e,
        back: ()=>_e(-1),
        forward: ()=>_e(1),
        beforeEach: o.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: N.add,
        isReady: ae,
        install(H) {
            const te = this;
            H.component("RouterLink", US),
            H.component("RouterView", Xm),
            H.config.globalProperties.$router = te,
            Object.defineProperty(H.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>G(l)
            }),
            ti && !Ke && l.value === an && (Ke = !0,
            y(i.location).catch(ve=>{}
            ));
            const Q = {};
            for (const ve in an)
                Object.defineProperty(Q, ve, {
                    get: ()=>l.value[ve],
                    enumerable: !0
                });
            H.provide(au, te),
            H.provide(lu, Li(Q)),
            H.provide(ql, l);
            const $ = H.unmount;
            Je.add(H),
            H.unmount = function() {
                Je.delete(H),
                Je.size < 1 && (c = an,
                Z && Z(),
                Z = null,
                l.value = an,
                Ke = !1,
                Y = !1),
                $()
            }
        }
    };
    function Ze(H) {
        return H.reduce((te,Q)=>te.then(()=>O(Q)), Promise.resolve())
    }
    return at
}
function jS(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const a = t.matched[s];
        a && (e.matched.find(c=>vi(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(c=>vi(c, l)) || i.push(l))
    }
    return [n, r, i]
}
function KS() {
    return bt(lu)
}
const YS = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Wl = (e,t)=>{
    const n = e.route.matched.find(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && YS(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , qS = (e,t)=>({
    default: ()=>e ? ct(N0, e === !0 ? {} : e, t) : t
});
function cu(e) {
    return Array.isArray(e) ? e : [e]
}
const Ee = null
  , Te = null
  , Se = null
  , Ae = null
  , we = null
  , ke = null
  , Le = null
  , Ce = null
  , Oe = null
  , Re = null
  , Ie = null
  , Pe = null
  , Me = null
  , P = {
    layout: "main"
}
  , M = {
    layout: "main"
}
  , fd = [{
    name: "clicker-airdrop___de",
    path: "/de/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___fr",
    path: "/fr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>w(()=>import("./airdrop.D4-OqVKt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___de",
    path: "/de/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___fr",
    path: "/fr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>w(()=>import("./boost.t7qj5Lq9.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___de",
    path: "/de/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___fr",
    path: "/fr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>w(()=>import("./earn.Blk0uZhP.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___de",
    path: "/de/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___fr",
    path: "/fr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>w(()=>import("./friends.BEU_VQYU.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___de",
    path: "/de/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___fr",
    path: "/fr/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>w(()=>import("./index.0is5NuBi.js"), __vite__mapDeps([10, 6, 11, 12, 13, 14, 15, 3, 16, 2, 5, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___de",
    path: "/de/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___fr",
    path: "/fr/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>w(()=>import("./index.DD1Bw0bG.js"), __vite__mapDeps([18, 13, 2, 12, 6, 14, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___de",
    path: "/de/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___fr",
    path: "/fr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>w(()=>import("./mine.Cd7TL_GQ.js"), __vite__mapDeps([19, 11, 12, 6, 13, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___de",
    path: "/de/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___fr",
    path: "/fr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>w(()=>import("./bingx.9S1tc1aM.js"), __vite__mapDeps([20, 2, 12, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___de",
    path: "/de/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___fr",
    path: "/fr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>w(()=>import("./exchange.CFkTfRZI.js"), __vite__mapDeps([21, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___de",
    path: "/de/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___fr",
    path: "/fr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>w(()=>import("./index.Ks22AsX8.js"), __vite__mapDeps([22, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___de",
    path: "/de/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___fr",
    path: "/fr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>w(()=>import("./language.CJgqsUo2.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___de",
    path: "/de/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___en",
    path: "/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___es",
    path: "/es/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___fr",
    path: "/fr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___hi",
    path: "/hi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___id",
    path: "/id/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___pt",
    path: "/pt/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___ru",
    path: "/ru/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___th",
    path: "/th/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tl",
    path: "/tl/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tr",
    path: "/tr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___uz",
    path: "/uz/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___vi",
    path: "/vi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>w(()=>import("./avatar.cuU2DnT3.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___de",
    path: "/de/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___en",
    path: "/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___es",
    path: "/es/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___fr",
    path: "/fr/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___hi",
    path: "/hi/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___id",
    path: "/id/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___pt",
    path: "/pt/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___ru",
    path: "/ru/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___th",
    path: "/th/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tl",
    path: "/tl/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tr",
    path: "/tr/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___uz",
    path: "/uz/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___vi",
    path: "/vi/clicker/user",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>w(()=>import("./index.CU6v1Bzc.js"), __vite__mapDeps([23, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___de",
    path: (P == null ? void 0 : P.path) ?? "/de",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___en",
    path: (P == null ? void 0 : P.path) ?? "/",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___es",
    path: (P == null ? void 0 : P.path) ?? "/es",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___fr",
    path: (P == null ? void 0 : P.path) ?? "/fr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___hi",
    path: (P == null ? void 0 : P.path) ?? "/hi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___id",
    path: (P == null ? void 0 : P.path) ?? "/id",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___pt",
    path: (P == null ? void 0 : P.path) ?? "/pt",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___ru",
    path: (P == null ? void 0 : P.path) ?? "/ru",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___th",
    path: (P == null ? void 0 : P.path) ?? "/th",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tl",
    path: (P == null ? void 0 : P.path) ?? "/tl",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tr",
    path: (P == null ? void 0 : P.path) ?? "/tr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___uz",
    path: (P == null ? void 0 : P.path) ?? "/uz",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___vi",
    path: (P == null ? void 0 : P.path) ?? "/vi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>w(()=>import("./index.CzmKWlR0.js"), __vite__mapDeps([24, 25, 13, 12]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___de",
    path: (M == null ? void 0 : M.path) ?? "/de/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___en",
    path: (M == null ? void 0 : M.path) ?? "/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___es",
    path: (M == null ? void 0 : M.path) ?? "/es/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___fr",
    path: (M == null ? void 0 : M.path) ?? "/fr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___hi",
    path: (M == null ? void 0 : M.path) ?? "/hi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___id",
    path: (M == null ? void 0 : M.path) ?? "/id/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___pt",
    path: (M == null ? void 0 : M.path) ?? "/pt/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___ru",
    path: (M == null ? void 0 : M.path) ?? "/ru/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___th",
    path: (M == null ? void 0 : M.path) ?? "/th/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tl",
    path: (M == null ? void 0 : M.path) ?? "/tl/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tr",
    path: (M == null ? void 0 : M.path) ?? "/tr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___uz",
    path: (M == null ? void 0 : M.path) ?? "/uz/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___vi",
    path: (M == null ? void 0 : M.path) ?? "/vi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>w(()=>import("./privacy-policy.cqUzgv4E.js"), __vite__mapDeps([26, 25]), import.meta.url).then(e=>e.default || e)
}]
  , Zm = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? ct(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function dd(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function WS(e, t) {
    return e === t || t === an ? !1 : dd(e) !== dd(t) ? !0 : !e.matched.every((r,i)=>{
        var o, s;
        return r.components && r.components.default === ((s = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    )
}
const GS = {
    scrollBehavior(e, t, n) {
        var c;
        const r = re()
          , i = ((c = qt().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && s !== !1 && WS(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: hd(e.hash),
                behavior: i
            } : !1;
        const a = u=>!!(u.meta.pageTransition ?? jl)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: hd(e.hash),
                    behavior: i
                }),
                u(o)
            }
            )
        }
        )
    }
};
function hd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const JS = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , Ft = {
    ...JS,
    ...GS
}
  , zS = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = re()
      , i = qt();
    if (([t,n] = wn(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = sa({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    })
      , a = i.beforeResolve(c=>{
        if (a(),
        c === e) {
            const u = i.afterEach(async()=>{
                u(),
                await r.runWithContext(()=>ii(s)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
;
var QS = Object.defineProperty
  , XS = Object.defineProperties
  , ZS = Object.getOwnPropertyDescriptors
  , pd = Object.getOwnPropertySymbols
  , $S = Object.prototype.hasOwnProperty
  , eA = Object.prototype.propertyIsEnumerable
  , md = (e,t,n)=>t in e ? QS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , de = (e,t)=>{
    for (var n in t || (t = {}))
        $S.call(t, n) && md(e, n, t[n]);
    if (pd)
        for (var n of pd(t))
            eA.call(t, n) && md(e, n, t[n]);
    return e
}
  , nt = (e,t)=>XS(e, ZS(t));
const ln = "Notivue__"
  , tA = 6e3
  , je = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    PROMISE: "promise",
    PROMISE_RESOLVE: "promise-resolve",
    PROMISE_REJECT: "promise-reject"
}
  , go = {
    title: "",
    message: "",
    duration: tA,
    ariaLive: "polite",
    ariaRole: "status"
}
  , Gl = nt(de({}, go), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , nA = nt(de({}, go), {
    duration: 1 / 0
})
  , rA = nt(de({}, Gl), {
    ariaLive: "polite"
})
  , iA = de({}, go)
  , oA = {
    [je.SUCCESS]: go,
    [je.ERROR]: Gl,
    [je.WARNING]: rA,
    [je.INFO]: iA,
    [je.PROMISE]: nA,
    [je.PROMISE_RESOLVE]: go,
    [je.PROMISE_REJECT]: Gl
}
  , $m = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: oA,
    limit: 1 / 0,
    animations: {
        enter: ln + "enter",
        leave: ln + "leave",
        clearAll: ln + "clearAll"
    }
}
  , Cn = aA();
function sA(e) {
    Object.assign(Cn, e)
}
function eg(e) {
    let t = 0;
    function n(r, i, o=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(nt(de({}, r), {
            id: o,
            type: i
        })),
        {
            id: o,
            clear: ()=>e.clear(o),
            destroy: ()=>e.clear(o, {
                isDestroy: !0
            })
        }
    }
    return {
        success: r=>n(r, je.SUCCESS),
        error: r=>n(r, je.ERROR),
        warning: r=>n(r, je.WARNING),
        info: r=>n(r, je.INFO),
        promise: r=>{
            const {id: i, clear: o, destroy: s} = n(r, je.PROMISE);
            return {
                resolve: a=>n(a, je.PROMISE_RESOLVE, i),
                reject: a=>n(a, je.PROMISE_REJECT, i),
                success: a=>n(a, je.PROMISE_RESOLVE, i),
                error: a=>n(a, je.PROMISE_REJECT, i),
                clear: o,
                destroy: s
            }
        }
        ,
        load(r) {
            return this.promise(r)
        },
        clearAll: ()=>e.clearAll(),
        destroyAll: ()=>e.destroyAll()
    }
}
function aA() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return eg(e)
}
function lA(e) {
    Fe(e.config.isTopAlign, ()=>{
        e.animations.updatePositions({
            isImmediate: !0
        })
    }
    , {
        flush: "post"
    }),
    Fe(()=>e.items.length, ()=>{
        e.animations.updatePositions()
    }
    , {
        flush: "post"
    }),
    Fe(()=>e.items.length === 0 && e.queue.length === 0, t=>{
        t && (e.timeouts.reset(),
        e.elements.setRootAttrs({}))
    }
    , {
        flush: "post"
    }),
    Fe(()=>e.config.animations.value.enter, (t,n)=>{
        t !== n && e.animations.resetTransitionData()
    }
    )
}
const cA = typeof window > "u";
function cr(e) {
    return e.pointerType === "mouse"
}
function uu(e, t) {
    const n = de({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (fA(t[r]) ? n[r] = uu(e[r], t[r]) : n[r] = t[r]);
    return n
}
function uA(e, t) {
    return t.props || (t.props = {}),
    de(de(de(de({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function fA(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function dA(e, t) {
    return Bc(Et(uu(e, t)))
}
function hA(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>nt(de({}, t), {
        [n]: De(r)
    }), {})
}
const pA = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function tg(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!pA.includes(t)))
}
function ng(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function mA(e) {
    const t = dA($m, e)
      , n = ue(()=>t.position.value.startsWith("top"));
    function r(i) {
        typeof i == "function" && (i = i(hA(t)));
        for (const o of Object.keys(i))
            typeof t[o].value == "object" ? t[o].value = uu(t[o].value, i[o]) : t[o].value = i[o]
    }
    return nt(de({}, t), {
        isTopAlign: n,
        update: r
    })
}
function gA() {
    return {
        entries: hn([]),
        get length() {
            return this.entries.value.length
        },
        add(e) {
            this.entries.value.push(e),
            this.triggerRef()
        },
        get(e) {
            return this.entries.value.find(t=>t.id === e)
        },
        update(e, t) {
            var n;
            Object.assign((n = this.get(e)) != null ? n : {}, t)
        },
        triggerRef() {
            mp(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function yA(e, t) {
    return {
        entries: hn([]),
        get length() {
            return this.entries.value.length
        },
        add(n) {
            this.entries.value.unshift(n),
            this.triggerRef()
        },
        addFromQueue() {
            const n = nt(de({}, t.entries.value[0]), {
                timeout: t.entries.value[0].timeout(),
                createdAt: Date.now()
            });
            t.remove(n.id),
            this.add(n)
        },
        get(n) {
            return this.entries.value.find(r=>r.id === n)
        },
        update(n, r) {
            var i;
            Object.assign((i = this.get(n)) != null ? i : {}, r)
        },
        triggerRef() {
            mp(this.entries)
        },
        updateAll(n) {
            this.entries.value = this.entries.value.map(n)
        },
        remove(n) {
            this.entries.value = this.entries.value.filter(r=>r.id !== n),
            t.length > 0 && this.length < e.limit.value && Kt(()=>this.addFromQueue())
        },
        clear() {
            this.entries.value = [],
            t.clear()
        }
    }
}
function vA() {
    return {
        root: le(null),
        rootAttrs: hn({}),
        setRootAttrs(e) {
            this.rootAttrs.value = e
        },
        items: le([]),
        getSortedItems() {
            return this.items.value.sort((e,t)=>+t.dataset.notivueId - +e.dataset.notivueId)
        },
        containers: le([])
    }
}
function _A(e, t, n) {
    return {
        isReducedMotion: le(!1),
        transitionData: null,
        setReducedMotion(r) {
            this.isReducedMotion.value = r
        },
        getTransitionData() {
            return this.transitionData || this.setTransitionData(),
            this.transitionData
        },
        resetTransitionData() {
            this.transitionData = null
        },
        setTransitionData() {
            var r;
            const i = e.animations.value.enter
              , o = i ? (r = n.root.value) == null ? void 0 : r.querySelector(`.${i}`) : null;
            if (!o)
                this.transitionData = {
                    duration: "0s",
                    easing: "ease"
                };
            else {
                const s = window.getComputedStyle(o);
                this.transitionData = {
                    duration: s.animationDuration,
                    easing: s.animationTimingFunction
                }
            }
        },
        playLeave(r, {isDestroy: i=!1, isUserTriggered: o=!1}={}) {
            const s = t.get(r);
            window.clearTimeout(s == null ? void 0 : s.timeout);
            function a() {
                var c;
                t.remove(r),
                (c = s == null ? void 0 : s[o ? "onManualClear" : "onAutoClear"]) == null || c.call(s, tg(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || i || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: nt(de({}, s.positionStyles), {
                    zIndex: -1
                }),
                animationAttrs: {
                    class: l,
                    onAnimationend: a
                }
            }),
            this.updatePositions()
        },
        playClearAll() {
            const {clearAll: r=""} = e.animations.value;
            if (t.entries.value.forEach(i=>window.clearTimeout(i.timeout)),
            !r || this.isReducedMotion.value)
                return t.clear();
            n.setRootAttrs({
                class: r,
                onAnimationend: ()=>t.clear()
            })
        },
        updatePositions({isImmediate: r=!1}={}) {
            const i = this.isReducedMotion.value || r
              , o = e.animations.value.leave;
            let s = 0;
            for (const a of n.getSortedItems()) {
                const l = a.dataset.notivueId
                  , c = t.get(l);
                if (!a || !c || c.animationAttrs.class === o)
                    continue;
                const {duration: u, easing: f} = this.getTransitionData();
                t.update(l, {
                    positionStyles: de({
                        willChange: "transform",
                        transform: `translate3d(0, ${s}px, 0)`
                    }, i ? {
                        transition: "none"
                    } : {
                        transitionDuration: u,
                        transitionTimingFunction: f
                    })
                }),
                s += (e.isTopAlign.value ? 1 : -1) * a.clientHeight
            }
            t.triggerRef()
        }
    }
}
function bA(e, t) {
    return {
        isStreamPaused: le(!1),
        isStreamFocused: le(!1),
        debounceTimeout: void 0,
        setStreamPause(n=!0) {
            this.isStreamPaused.value = n
        },
        setStreamFocus(n=!0) {
            this.isStreamFocused.value = n
        },
        clearDebounceTimeout() {
            window.clearTimeout(this.debounceTimeout)
        },
        reset() {
            this.clearDebounceTimeout(),
            this.setStreamPause(!1),
            this.setStreamFocus(!1)
        },
        create(n, r) {
            if (Number.isFinite(r) && r > 0)
                return window.setTimeout(()=>t.playLeave(n), r)
        },
        pause() {
            e.length === 0 || this.isStreamPaused.value || (e.updateAll(n=>{
                if (window.clearTimeout(n.timeout),
                !n.timeout)
                    return n;
                let r = 0;
                return n.remaining == null ? r = n.duration - (Date.now() - n.createdAt) : r = n.remaining - (Date.now() - n.resumedAt),
                nt(de({}, n), {
                    remaining: r
                })
            }
            ),
            this.setStreamPause())
        },
        resume() {
            e.length === 0 || !this.isStreamPaused.value || (e.updateAll(n=>{
                var r;
                return window.clearTimeout(n.timeout),
                n.timeout ? nt(de({}, n), {
                    timeout: this.create(n.id, (r = n.remaining) != null ? r : n.duration),
                    resumedAt: Date.now()
                }) : n
            }
            ),
            this.setStreamPause(!1))
        },
        resumeWithDebounce(n) {
            this.debounceTimeout = window.setTimeout(()=>{
                this.resume()
            }
            , n)
        }
    }
}
function EA({config: e, items: t, queue: n, animations: r, timeouts: i}) {
    return {
        destroyAll() {
            t.clear()
        },
        clearAll() {
            r.playClearAll()
        },
        clear(o, {isDestroy: s=!1}={}) {
            var a;
            ((a = t.entries.value[t.entries.value.length - 1]) == null ? void 0 : a.id) === o && i.resume(),
            r.playLeave(o, {
                isUserTriggered: !0,
                isDestroy: s
            })
        },
        push(o) {
            const s = Date.now()
              , a = uA(e.notifications.value, o)
              , l = ()=>i.create(a.id, a.duration);
            if ([je.PROMISE_RESOLVE, je.PROMISE_REJECT].includes(o.type))
                n.get(a.id) ? (n.update(a.id, nt(de({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, nt(de({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const c = e.enqueue.value
                  , u = t.length >= e.limit.value;
                !c && u && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>i.create(m, 1));
                const f = c && !o.skipQueue && u
                  , d = nt(de({}, a), {
                    createdAt: s,
                    animationAttrs: {
                        class: r.isReducedMotion.value ? "" : e.animations.value.enter,
                        onAnimationend() {
                            t.update(a.id, {
                                animationAttrs: {
                                    class: "",
                                    onAnimationend: void 0
                                }
                            })
                        }
                    },
                    timeout: f ? l : l(),
                    clear: ()=>this.clear(a.id),
                    destroy: ()=>this.clear(a.id, {
                        isDestroy: !0
                    })
                });
                f ? n.add(d) : t.add(d)
            }
        }
    }
}
const rg = Symbol("");
function TA(e={}) {
    const t = mA(e)
      , n = gA()
      , r = yA(t, n)
      , i = vA()
      , o = _A(t, r, i)
      , s = bA(r, o)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: i,
        animations: o,
        timeouts: s
    }
      , l = EA(a)
      , c = Object.freeze(eg(l));
    return sA(c),
    lA(a),
    {
        install(u) {
            u.config.globalProperties.$push = c,
            u.provide(rg, a)
        }
    }
}
function Er() {
    return bt(rg)
}
function SA() {
    return cA ? nt(de({}, Bc(Et($m))), {
        isTopAlign: ue(()=>!0),
        update: ()=>{}
    }) : Er().config
}
const ig = {
    listAriaLabel: "Notifications"
}
  , AA = Ve({
    setup(e, {slots: t, attrs: n}) {
        const r = le(!1);
        return Rt(()=>r.value = !0),
        ()=>{
            var i;
            return r.value ? (i = t.default) == null ? void 0 : i.call(t) : qe("span", n, "")
        }
    }
})
  , wA = ["role", "aria-live"]
  , kA = Ve({
    __name: "AriaLive",
    props: {
        item: {}
    },
    setup(e) {
        const t = e
          , n = {
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: "0"
        };
        return (r,i)=>(pe(),
        qe("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, Jt(G(ng)(t.item)), 9, wA))
    }
});
function LA() {
    const {timeouts: e, config: t} = Er();
    function n(i) {
        cr(i) && e.pause()
    }
    function r(i) {
        cr(i) && e.resume()
    }
    return ue(()=>t.pauseOnHover.value && !e.isStreamFocused.value ? {
        onPointerenter: n,
        onPointerleave: r
    } : {})
}
function CA() {
    const {timeouts: e, config: t} = Er();
    function n(r) {
        cr(r) || (e.clearDebounceTimeout(),
        e.pause(),
        e.resumeWithDebounce(2e3))
    }
    return gn(()=>{
        e.clearDebounceTimeout()
    }
    ),
    ue(()=>t.pauseOnTouch.value && !e.isStreamFocused.value ? {
        onPointerdown: n
    } : {})
}
const Ya = {
    boxSizing: "border-box"
}
  , qa = {
    list: nt(de({}, Ya), {
        display: "flex",
        justifyContent: "center",
        listStyle: "none",
        margin: "0 auto",
        maxWidth: "var(--nv-root-width, 100%)",
        padding: "0",
        pointerEvents: "none",
        position: "fixed",
        zIndex: "var(--nv-z, 500)"
    }),
    listItem: nt(de({}, Ya), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: nt(de({}, Ya), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function OA() {
    const {isTopAlign: e, position: t} = SA()
      , n = ue(()=>{
        const i = e.value
          , o = [`var(--nv-root-top, ${i ? "1.25rem" : "0px"})`, "var(--nv-root-right, 1.25rem)", `var(--nv-root-bottom, ${i ? "0px" : "1.25rem"})`, "var(--nv-root-left, 1.25rem)"]
          , s = o.map(a=>`calc(-1 * ${a})`);
        return i ? s.splice(2, 1, "0px") : s.splice(0, 1, "0px"),
        {
            inset: o.join(" "),
            clipPath: `inset(${s.join(" ")})`
        }
    }
    )
      , r = ue(()=>({
        [e.value ? "top" : "bottom"]: "0",
        justifyContent: `var(--nv-root-x-align, ${t.value.endsWith("left") ? "flex-start" : t.value.endsWith("right") ? "flex-end" : "center"})`
    }));
    return ue(()=>({
        list: de(de({}, qa.list), n.value),
        listItem: de(de({}, qa.listItem), r.value),
        itemContainer: qa.itemContainer
    }))
}
function RA(e) {
    function t() {
        window.matchMedia("(max-width: 1100px)").matches && e()
    }
    Rt(()=>{
        window.addEventListener("resize", t)
    }
    ),
    gn(()=>{
        window.removeEventListener("resize", t)
    }
    )
}
function IA(e, t) {
    let n;
    const r = new Set;
    Rt(()=>{
        n = new ResizeObserver((i,o)=>{
            i.forEach(s=>{
                r.has(s.target) ? (t(),
                r.delete(s.target),
                o.unobserve(s.target)) : r.add(s.target)
            }
            )
        }
        )
    }
    ),
    Fe(e, i=>{
        i.length > 0 && i.forEach(o=>n == null ? void 0 : n.observe(o))
    }
    , {
        flush: "post"
    }),
    gn(()=>{
        n == null || n.disconnect()
    }
    )
}
function PA() {
    const {elements: e, animations: t} = Er();
    RA(()=>t.updatePositions({
        isImmediate: !0
    })),
    IA(e.items.value, ()=>t.updatePositions())
}
function MA() {
    const {items: e, config: t, timeouts: n} = Er();
    function r() {
        n.isStreamFocused.value || (document.visibilityState === "visible" ? t.pauseOnTabChange.value && n.resume() : t.pauseOnTabChange.value ? n.pause() : e.clear())
    }
    Rt(()=>{
        document.addEventListener("visibilitychange", r)
    }
    ),
    gn(()=>{
        document.removeEventListener("visibilitychange", r)
    }
    )
}
function DA() {
    const {animations: e} = Er()
      , t = window.matchMedia("(prefers-reduced-motion: reduce)")
      , n = ()=>e.setReducedMotion(t.matches);
    Rt(()=>{
        var r;
        n(),
        (r = t.addEventListener) == null || r.call(t, "change", n)
    }
    ),
    gn(()=>{
        var r;
        (r = t.removeEventListener) == null || r.call(t, "change", n)
    }
    )
}
const NA = ["data-notivue-align", "aria-label"]
  , VA = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , UA = ["aria-label", "tabindex", "data-notivue-container"]
  , BA = Ve({
    __name: "NotivueImpl",
    props: ea({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, ig),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: i} = Er()
          , o = OA()
          , s = LA()
          , a = CA();
        return DA(),
        MA(),
        PA(),
        (l,c)=>{
            var u;
            return pe(),
            yt(p_, {
                to: G(n).teleportTo.value === !1 ? void 0 : G(n).teleportTo.value,
                disabled: G(n).teleportTo.value === !1
            }, [G(r).length > 0 ? (pe(),
            qe("ol", yi({
                key: 0
            }, de(de(de({}, G(s)), G(a)), G(i).rootAttrs.value), {
                "data-notivue-align": G(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: G(i).root,
                class: t.class,
                style: de(de({}, G(o).list), (u = t.styles) == null ? void 0 : u.list)
            }), [(pe(!0),
            qe(ht, null, j0(G(r).entries.value, (f,d)=>{
                var m, _, b, S;
                return pe(),
                qe("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": G(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: G(i).items,
                    style: Ln(de(de(de({}, G(o).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (pe(),
                yt(kA, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (pe(),
                qe("div", yi({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": G(ng)(f),
                    tabindex: (b = (_ = l.containersTabIndex) == null ? void 0 : _[f.id]) != null ? b : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: G(i).containers,
                    style: de(de({}, G(o).itemContainer), (S = t.styles) == null ? void 0 : S.itemContainer)
                }), [_r(l.$slots, "default", nn(Yt(G(tg)(f))))], 16, UA))], 12, VA)
            }
            ), 128))], 16, NA)) : jt("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , DM = Ve({
    __name: "Notivue",
    props: ea({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, ig),
    setup(e) {
        const t = e;
        return (n,r)=>(pe(),
        yt(G(AA), null, {
            default: rn(()=>[Xe(BA, nn(Yt(t)), {
                default: rn(i=>[_r(n.$slots, "default", nn(Yt(i)))]),
                _: 3
            }, 16)]),
            _: 3
        }))
    }
})
  , xA = {
    touchOnly: !1,
    exclude: "a, button",
    disabled: !1,
    threshold: .5
}
  , FA = 300
  , Wa = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , NM = Ve({
    __name: "NotivueSwipe",
    props: ea({
        item: {},
        touchOnly: {
            type: Boolean
        },
        exclude: {},
        disabled: {
            type: Boolean
        },
        threshold: {},
        destroy: {
            type: Boolean
        }
    }, xA),
    setup(e) {
        const {items: t, timeouts: n, elements: r, animations: i} = Er()
          , o = e
          , s = ri(o, "touchOnly")
          , a = ri(o, "exclude")
          , l = ri(o, "disabled")
          , c = ri(o, "threshold")
          , u = ue(()=>o.item.type === je.PROMISE)
          , f = ue(()=>!n.isStreamFocused.value && !l.value && !u.value && o.item.duration < 1 / 0)
          , d = le(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , _ = Li(m)
          , b = hn({});
        function S(j) {
            Object.assign(_, j)
        }
        function g(j) {
            b.value = de(de({}, b.value), j)
        }
        function E() {
            b.value = {}
        }
        Fe(()=>t.length, (j,ce)=>{
            j !== ce && _.isPressed && (A(),
            S(m))
        }
        , {
            flush: "post"
        });
        function p() {
            d.value && (g({
                touchAction: "none",
                userSelect: "none",
                cursor: "grab"
            }),
            d.value.querySelectorAll("*").forEach(j=>{
                j instanceof HTMLElement && (j.style.userSelect = "none",
                j.style.touchAction = "none")
            }
            ))
        }
        function y() {
            d.value && (E(),
            d.value.querySelectorAll("*").forEach(j=>{
                j instanceof HTMLElement && (j.style.userSelect = "auto",
                j.style.touchAction = "auto")
            }
            ))
        }
        function T(j) {
            return !(s.value && j.pointerType !== "touch")
        }
        function A() {
            g({
                transition: i.isReducedMotion.value ? "none" : `${FA}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function L(j) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ce, offsetLeft: _e} = d.value
              , Ke = _e + r.root.value.offsetLeft
              , Je = Ke + ce;
            return j.clientX > Ke && j.clientX < Je
        }
        function C(j) {
            return cr(j) ? Wa.Mouse : Wa.Touch
        }
        function O() {
            n.clearDebounceTimeout(),
            n.pause()
        }
        function D(j) {
            n.clearDebounceTimeout(),
            n.resumeWithDebounce(j)
        }
        function F(j) {
            T(j) || y()
        }
        function U(j) {
            if (T(j) && (j.stopPropagation(),
            !!d.value && j.button === 0 && !(_.isPressed || _.isClearing))) {
                if (a.value && Array.from(d.value.querySelectorAll(a.value)).includes(j.target)) {
                    cr(j) || (O(),
                    D(Wa.TouchExternal));
                    return
                }
                cr(j) || O(),
                S({
                    startX: j.clientX,
                    isPressed: !0
                })
            }
        }
        function Z(j) {
            if (!T(j) || (j.stopPropagation(),
            !_.isPressed || _.isClearing))
                return;
            const {clientWidth: ce} = d.value;
            g({
                transition: "none",
                transform: `translate3d(${_.currentX}px, 0px, 0px)`,
                opacity: `${1 - Math.abs(_.currentX) / ce * (1 / c.value)}`
            }),
            S({
                currentX: j.clientX - _.startX
            }),
            Math.abs(_.currentX) > ce * c.value && (_.isClearing = !0,
            W(j))
        }
        function W(j) {
            if (o.item.destroy(),
            cr(j) && L(j)) {
                const ce = r.getSortedItems();
                ce[ce.length - 1].contains(d.value) || O()
            } else
                D(C(j));
            S({
                isClearing: !1
            })
        }
        function K(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (cr(j) && L(j) ? O() : D(C(j)),
            A(),
            S({
                startX: 0,
                currentX: 0,
                isPressed: !1
            })))
        }
        function N(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (A(),
            S({
                startX: 0,
                currentX: 0,
                isPressed: !1
            }),
            D(C(j))))
        }
        const Y = [["pointerenter", F], ["pointerdown", U], ["pointermove", Z], ["pointerup", K], ["pointerleave", N]];
        function B() {
            d.value && Y.forEach(([j,ce])=>{
                d.value.addEventListener(j, ce)
            }
            )
        }
        function ae() {
            d.value && Y.forEach(([j,ce])=>{
                d.value.removeEventListener(j, ce)
            }
            )
        }
        return Fe(f, (j,ce,_e)=>{
            Kt(()=>{
                j && (p(),
                Kt(B))
            }
            ),
            _e(()=>{
                ae(),
                y()
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        }),
        gn(ae),
        (j,ce)=>l.value ? _r(j.$slots, "default", {
            key: 1
        }) : (pe(),
        qe("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: Ln(b.value)
        }, [_r(j.$slots, "default")], 4))
    }
})
  , HA = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , jA = [HA]
  , gd = Ve({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(Ri))), jA, 16))
    }
})
  , KA = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , YA = [KA]
  , Ga = Ve({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(Ri))), YA, 16))
    }
})
  , qA = ge("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , WA = [qA]
  , GA = Ve({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(Ri))), WA, 16))
    }
})
  , JA = ge("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , zA = ge("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , QA = [JA, zA]
  , yd = Ve({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(Ri))), QA, 16))
    }
})
  , XA = ge("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , ZA = ge("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , $A = ge("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , ew = [XA, ZA, $A]
  , Ja = Ve({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(Ri))), ew, 16))
    }
})
  , tw = ge("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , nw = ge("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , rw = ge("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , iw = [tw, nw, rw]
  , ow = Ve({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(Ri))), iw, 16))
    }
})
  , sw = ge("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , aw = ge("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , lw = [sw, aw]
  , og = Ve({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(nt(de({}, G(fu)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), lw, 16))
    }
})
  , cw = ge("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , uw = ge("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , fw = [cw, uw]
  , sg = Ve({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(pe(),
        qe("svg", nn(Yt(G(dw))), fw, 16))
    }
})
  , fu = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , Ri = nt(de({}, fu), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , dw = nt(de({}, fu), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , hw = {
    [je.SUCCESS]: ft(gd),
    [je.ERROR]: ft(Ga),
    [je.INFO]: ft(GA),
    [je.WARNING]: ft(Ga),
    [je.PROMISE]: ft(og),
    [je.PROMISE_RESOLVE]: ft(gd),
    [je.PROMISE_REJECT]: ft(Ga),
    close: ft(sg)
};
je.SUCCESS + "",
ft(yd),
je.ERROR + "",
ft(Ja),
je.INFO + "",
ft(ow),
je.WARNING + "",
ft(Ja),
je.PROMISE + "",
ft(og),
je.PROMISE_RESOLVE + "",
ft(yd),
je.PROMISE_REJECT + "",
ft(Ja),
ft(sg);
const Vo = {
    "--nv-width": "350px",
    "--nv-spacing": "0.625rem",
    "--nv-radius": "0.625rem",
    "--nv-icon-size": "1.25rem",
    "--nv-title-size": "0.925rem",
    "--nv-message-size": "0.925rem",
    "--nv-tip-width": "0px",
    "--nv-y-align": "center"
}
  , du = {
    "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
}
  , pw = nt(de(de({}, Vo), du), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
nt(de(de({}, Vo), du), {
    "--nv-success-bg": "#E9FAEF",
    "--nv-success-accent": "#059669",
    "--nv-success-fg": "#057452",
    "--nv-error-bg": "#FEEFEF",
    "--nv-error-accent": "#E6523C",
    "--nv-error-fg": "#C5412C",
    "--nv-warning-bg": "#FFF0D8",
    "--nv-warning-accent": "#F48533",
    "--nv-warning-fg": "#81471D",
    "--nv-info-bg": "#DEF0FA",
    "--nv-info-accent": "#1F70AC",
    "--nv-info-fg": "#1F70AC",
    "--nv-promise-bg": "#FFF",
    "--nv-promise-accent": "#334155",
    "--nv-promise-fg": "#334155"
});
nt(de(de({}, Vo), du), {
    "--nv-global-accent": "#FFF",
    "--nv-global-fg": "#FFF",
    "--nv-success-bg": "#178570",
    "--nv-error-bg": "#C94430",
    "--nv-info-bg": "#117AAE",
    "--nv-warning-bg": "#FFE556",
    "--nv-warning-fg": "#4F5358",
    "--nv-warning-accent": "#4F5358",
    "--nv-promise-bg": "#FFF",
    "--nv-promise-fg": "#334155",
    "--nv-promise-accent": "#64748B"
});
nt(de({}, Vo), {
    "--nv-border-width": "1px",
    "--nv-global-bg": "#1F1F1F",
    "--nv-global-border": "#414141",
    "--nv-global-fg": "#D0D0D0",
    "--nv-success-accent": "#8EF997",
    "--nv-error-accent": "#FF7777",
    "--nv-warning-accent": "#FFE554",
    "--nv-info-accent": "#5FD4FF",
    "--nv-promise-accent": "#D0D0D0"
});
const VM = nt(de({}, Vo), {
    "--nv-border-width": "1px",
    "--nv-global-bg": "#20252E",
    "--nv-global-border": "#353b45",
    "--nv-global-fg": "#dfdfdf",
    "--nv-success-accent": "#34D399",
    "--nv-error-accent": "#FF7777",
    "--nv-warning-accent": "#FFE554",
    "--nv-info-accent": "#5FD4FF",
    "--nv-promise-accent": "#D0D0D0"
})
  , Bn = {
    NOTIFICATION: ln + "notification",
    ICON: ln + "icon",
    CONTENT: ln + "content",
    TITLE: ln + "content-title",
    MESSAGE: ln + "content-message",
    CLOSE: ln + "close",
    CLOSE_ICON: ln + "close-icon",
    TRANSITION: ln + "transition"
}
  , mw = {
    icons: ()=>hw,
    theme: ()=>pw,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , gw = ["data-notivue", "data-notivue-has-title"]
  , yw = ["aria-live", "role"]
  , vw = ["textContent"]
  , _w = ["textContent"]
  , bw = ["aria-label"]
  , Ew = ["textContent"]
  , UM = Ve({
    __name: "Notifications",
    props: ea({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, mw),
    setup(e) {
        const t = e
          , n = hn(t.icons[t.item.type])
          , r = t.icons.close;
        return Fe(()=>t.item.type, i=>n.value = t.icons[i], {
            flush: "sync"
        }),
        (i,o)=>(pe(),
        qe("div", {
            class: Ct(G(Bn).NOTIFICATION),
            "data-notivue": i.item.type,
            "data-notivue-has-title": !!i.item.title,
            style: Ln(i.theme)
        }, [n.value ? (pe(),
        qe(ht, {
            key: 0
        }, [typeof n.value == "object" ? (pe(),
        yt(Io, {
            key: 0,
            name: G(Bn).TRANSITION,
            mode: "out-in"
        }, {
            default: rn(()=>[typeof n.value == "object" ? (pe(),
            yt(gl(n.value), {
                key: 0,
                class: Ct(G(Bn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : jt("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (pe(),
        qe("div", {
            key: 1,
            class: Ct(G(Bn).ICON),
            "aria-hidden": "true"
        }, Jt(n.value), 3)) : jt("", !0)], 64)) : jt("", !0), ge("div", {
            class: Ct(G(Bn).CONTENT),
            "aria-live": i.item.ariaLive,
            role: i.item.ariaRole,
            "aria-atomic": "true"
        }, [i.item.title ? (pe(),
        qe("h3", {
            key: 0,
            class: Ct(G(Bn).TITLE),
            textContent: Jt(G(i.item.title))
        }, null, 10, vw)) : jt("", !0), ge("p", {
            class: Ct(G(Bn).MESSAGE),
            textContent: Jt(G(i.item.message))
        }, null, 10, _w)], 10, yw), !t.hideClose && G(r) && i.item.type !== "promise" ? (pe(),
        qe("button", {
            key: 1,
            class: Ct(G(Bn).CLOSE),
            "aria-label": i.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: o[0] || (o[0] = (...s)=>i.item.clear && i.item.clear(...s))
        }, [typeof G(r) == "object" ? (pe(),
        yt(gl(G(r)), {
            key: 0,
            class: Ct(G(Bn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof G(r) == "string" ? (pe(),
        qe("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: Jt(G(r))
        }, null, 8, Ew)) : jt("", !0)], 10, bw)) : jt("", !0)], 14, gw))
    }
})
  , $e = {
    get: Vi("GET"),
    post: Vi("POST"),
    patch: Vi("PATCH"),
    put: Vi("PUT"),
    delete: Vi("DELETE")
};
function Vi(e) {
    return async(t,n,r={})=>{
        const i = Hn()
          , o = i.token
          , s = Wn();
        r = {
            onError: ()=>{}
            ,
            onRequest: ()=>{}
            ,
            onRequestError: ()=>{}
            ,
            onResponse: ()=>{}
            ,
            onResponseError: l=>{}
            ,
            ...r
        };
        const a = {
            ...n,
            method: e,
            baseURL: n != null && n.baseURL ? n.baseURL : s.public.apiBase,
            headers: {
                Authorization: o ? `Bearer ${o}` : "",
                ...n == null ? void 0 : n.headers
            },
            async onRequest({request: l, options: c}) {
                s.public.appEnv !== "production" && console.log("%c Request => ", "background: #16161a; color: #f2f2f2; line-height: 20px;", l),
                r.onRequest()
            },
            async onRequestError({request: l, options: c, error: u}) {
                s.public.appEnv !== "production" && console.log("%c Request error => ", "background: #16161a; color: #ff0000; line-height: 20px;", l),
                Cn.error({
                    title: re().$i18n.t("messages.network_error_title"),
                    message: re().$i18n.t("messages.network_error_description")
                }),
                r.onRequestError(),
                r.onError()
            },
            async onResponse({request: l, response: c, options: u}) {
                s.public.appEnv !== "production" && console.log(`%c Response ${c.status} => `, "background: #16161a; color: #4CD964; line-height: 20px;", l),
                r.onResponse()
            },
            async onResponseError(l) {
                s.public.appEnv !== "production" && console.log("%c Response error => ", "background: #16161a; color: #ff0000; line-height: 20px;", l.request);
                const c = l.response._data;
                ((c == null ? void 0 : c.error_code) === "NOT_FOUND_CLICKER_USER" || (c == null ? void 0 : c.error_code) === "BAD_AUTH_TOKEN" || (c == null ? void 0 : c.error_code) === "NOT_EXANGE_SELECT ") && setTimeout(()=>{
                    i.logout()
                }
                , 1e3),
                [401].includes(l.response.status) && o && i.logout(),
                r.onResponseError(),
                r.onError()
            }
        };
        return await $fetch(t, a)
    }
}
const Tw = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let ag;
const Uo = e=>ag = e
  , lg = Symbol();
function Jl(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Ji;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Ji || (Ji = {}));
function Sw() {
    const e = Co(!0)
      , t = e.run(()=>le({}));
    let n = []
      , r = [];
    const i = ft({
        install(o) {
            Uo(i),
            i._a = o,
            o.provide(lg, i),
            o.config.globalProperties.$pinia = i,
            r.forEach(s=>n.push(s)),
            r = []
        },
        use(o) {
            return !this._a && !Tw ? r.push(o) : n.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return i
}
const cg = ()=>{}
;
function vd(e, t, n, r=cg) {
    e.push(t);
    const i = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && Oo() && Js(i),
    i
}
function Zr(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const Aw = e=>e();
function zl(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        Jl(i) && Jl(r) && e.hasOwnProperty(n) && !st(r) && !pr(r) ? e[n] = zl(i, r) : e[n] = r
    }
    return e
}
const ww = Symbol();
function kw(e) {
    return !Jl(e) || !e.hasOwnProperty(ww)
}
const {assign: tr} = Object;
function Lw(e) {
    return !!(st(e) && e.effect)
}
function Cw(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = i ? i() : {});
        const u = Bc(n.state.value[e]);
        return tr(u, o, Object.keys(s || {}).reduce((f,d)=>(f[d] = ft(ue(()=>{
            Uo(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = ug(e, c, t, n, r, !0),
    l
}
function ug(e, t, n={}, r, i, o) {
    let s;
    const a = tr({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, u, f = [], d = [], m;
    const _ = r.state.value[e];
    !o && !_ && (r.state.value[e] = {}),
    le({});
    let b;
    function S(C) {
        let O;
        c = u = !1,
        typeof C == "function" ? (C(r.state.value[e]),
        O = {
            type: Ji.patchFunction,
            storeId: e,
            events: m
        }) : (zl(r.state.value[e], C),
        O = {
            type: Ji.patchObject,
            payload: C,
            storeId: e,
            events: m
        });
        const D = b = Symbol();
        Kt().then(()=>{
            b === D && (c = !0)
        }
        ),
        u = !0,
        Zr(f, O, r.state.value[e])
    }
    const g = o ? function() {
        const {state: O} = n
          , D = O ? O() : {};
        this.$patch(F=>{
            tr(F, D)
        }
        )
    }
    : cg;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(C, O) {
        return function() {
            Uo(r);
            const D = Array.from(arguments)
              , F = []
              , U = [];
            function Z(N) {
                F.push(N)
            }
            function W(N) {
                U.push(N)
            }
            Zr(d, {
                args: D,
                name: C,
                store: T,
                after: Z,
                onError: W
            });
            let K;
            try {
                K = O.apply(this && this.$id === e ? this : T, D)
            } catch (N) {
                throw Zr(U, N),
                N
            }
            return K instanceof Promise ? K.then(N=>(Zr(F, N),
            N)).catch(N=>(Zr(U, N),
            Promise.reject(N))) : (Zr(F, K),
            K)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: vd.bind(null, d),
        $patch: S,
        $reset: g,
        $subscribe(C, O={}) {
            const D = vd(f, C, O.detached, ()=>F())
              , F = s.run(()=>Fe(()=>r.state.value[e], U=>{
                (O.flush === "sync" ? u : c) && C({
                    storeId: e,
                    type: Ji.direct,
                    events: m
                }, U)
            }
            , tr({}, l, O)));
            return D
        },
        $dispose: E
    }
      , T = Et(y);
    r._s.set(e, T);
    const L = (r._a && r._a.runWithContext || Aw)(()=>r._e.run(()=>(s = Co()).run(t)));
    for (const C in L) {
        const O = L[C];
        if (st(O) && !Lw(O) || pr(O))
            o || (_ && kw(O) && (st(O) ? O.value = _[C] : zl(O, _[C])),
            r.state.value[e][C] = O);
        else if (typeof O == "function") {
            const D = p(C, O);
            L[C] = D,
            a.actions[C] = O
        }
    }
    return tr(T, L),
    tr(De(T), L),
    Object.defineProperty(T, "$state", {
        get: ()=>r.state.value[e],
        set: C=>{
            S(O=>{
                tr(O, C)
            }
            )
        }
    }),
    r._p.forEach(C=>{
        tr(T, s.run(()=>C({
            store: T,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    _ && o && n.hydrate && n.hydrate(T.$state, _),
    c = !0,
    u = !0,
    T
}
function Nn(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(a, l) {
        const c = zc();
        return a = a || (c ? bt(lg, null) : null),
        a && Uo(a),
        a = ag,
        a._s.has(r) || (o ? ug(r, t, i, a) : Cw(r, i, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
class Fi extends Error {
}
Fi.prototype.name = "InvalidTokenError";
function Ow(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function Rw(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
    case 0:
        break;
    case 2:
        t += "==";
        break;
    case 3:
        t += "=";
        break;
    default:
        throw new Error("base64 string is not of the correct length")
    }
    try {
        return Ow(t)
    } catch {
        return atob(t)
    }
}
function _d(e, t) {
    if (typeof e != "string")
        throw new Fi("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new Fi(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = Rw(r)
    } catch (o) {
        throw new Fi(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new Fi(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
var me = (e=>(e.SYNC_TAPS = "hk_sync_taps",
e.SYNC_TIMESTAMP_TAPS = "hk_sync_timestamp",
e.SYNC_AVAILABLE_TAPS = "hk_sync_available_taps",
e.EARN_TASKS = "earn_task",
e.AIRDROP_TASKS = "airdrop_task",
e.BINGX = "bingx",
e.SUBSCRIBE_MEDIUM = "subscribe_medium",
e.SUBSCRIBE_DISCORD = "subscribe_discord",
e.SUBSCRIBE_FACEBOOK = "subscribe_facebook",
e.SUBSCRIBE_YOUTUBE = "subscribe_youtube",
e.HAMSTER_DROP = "hamster_drop",
e.SETTINGS = "hk_settings",
e.AUTH_TOKEN = "authToken",
e.SUBSCRIBE_TELEGRAM_CRYPTOFAM = "subscribe_telegram_cryptofam",
e.HAMSTER_YOUTUBE_ACADEMY = "hamster_youtube_academy",
e.HAMSTER_YOUTUBE_EASY_START = "hamster_youtube_easy_start",
e.HAMSTER_YOUTUBE_EASY_START_S1E23 = "hamster_youtube_easy_start_s1e23",
e.HAMSTER_YOUTUBE_EASY_START_S1E24 = "hamster_youtube_easy_start_s1e24",
e.HAMSTER_YOUTUBE_EASY_START_S1E25 = "hamster_youtube_easy_start_s1e25",
e.HAMSTER_YOUTUBE_EASY_START_S1E26 = "hamster_youtube_easy_start_s1e26",
e.HAMSTER_YOUTUBE_EASY_START_S1E27 = "hamster_youtube_easy_start_s1e27",
e.HAMSTER_YOUTUBE_EASY_START_S1E28 = "hamster_youtube_easy_start_s1e28",
e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1 = "hamster_youtube_partner_video_e1",
e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE = "hamster_youtube_local_subscribe",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5 = "hamster_youtube_local_video_e5",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6 = "hamster_youtube_local_video_e6",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7 = "hamster_youtube_local_video_e7",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8 = "hamster_youtube_local_video_e8",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9 = "hamster_youtube_local_video_e9",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10 = "hamster_youtube_local_video_e10",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11 = "hamster_youtube_local_video_e11",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12 = "hamster_youtube_local_video_e12",
e))(me || {})
  , Gt = (e=>(e[e.BALANCE_ANIMATION_SPEED = 50] = "BALANCE_ANIMATION_SPEED",
e[e.CALC_INTERVAL = 1e3] = "CALC_INTERVAL",
e[e.SYNC_INTERVAL = 36e5] = "SYNC_INTERVAL",
e[e.TAP_INTERVAL = 3e3] = "TAP_INTERVAL",
e[e.REFERRAL_REFRESH_TIME = 60] = "REFERRAL_REFRESH_TIME",
e.GAME_NAME = "Hamster Kombat",
e.DEFAULT_EXCHANGE = "hamster",
e))(Gt || {})
  , Iw = (e=>(e.REPEATEDLY = "Repeatedly",
e.ONCE = "Once",
e))(Iw || {})
  , Ql = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(Ql || {})
  , Pw = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(Pw || {})
  , Mw = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Web3 = "Web3",
e.Legal = "Legal",
e))(Mw || {})
  , Dw = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
e.save_hamsters_from_drowning = "save_hamsters_from_drowning",
e.taker_carlson_interview = "taker_carlson_interview",
e.token2049 = "token2049",
e.usdt_on_ton = "usdt_on_ton",
e.villa_for_dev_team = "villa_for_dev_team",
e.success_with_tucker = "success_with_tucker",
e.dao = "dao",
e.short_squeeze = "short_squeeze",
e.long_squeeze = "long_squeeze",
e.two_chairs = "two_chairs",
e.bogdanoff = "bogdanoff",
e.forbes = "forbes",
e.apps_center_listing = "apps_center_listing",
e.bitcoin_halving = "bitcoin_halving",
e.lambo_for_ceo = "lambo_for_ceo",
e.security_team = "security_team",
e.ux_ui_team = "ux_ui_team",
e.antihacking_shield = "antihacking_shield",
e.support_team = "support_team",
e.qa_team = "qa_team",
e.risk_management_team = "risk_management_team",
e.security_audition = "security_audition",
e.anonymous_transactions_ban = "anonymous_transactions_ban",
e.blocking_suspicious_accounts = "blocking_suspicious_accounts",
e.special_hamster_conference = "special_hamster_conference",
e.contract_with_football_club = "contract_with_football_club",
e.dubai_office = "dubai_office",
e.joe_rogan_podcast = "joe_rogan_podcast",
e.venom_blockchain = "venom_blockchain",
e.notcoin_listing = "notcoin_listing",
e.hamster_ai = "hamster_ai",
e.p2p_trading = "p2p_trading",
e.trading_bots = "trading_bots",
e.nft_collection_launch = "nft_collection_launch",
e.top10_global = "top10_global",
e.licence_nigeria = "licence_nigeria",
e.licence_asia = "licence_asia",
e.licence_australia = "licence_australia",
e.licence_europe = "licence_europe",
e.licence_north_america = "licence_north_america",
e.licence_south_america = "licence_south_america",
e.licence_uae = "licence_uae",
e.fan_tokens = "fan_tokens",
e.meme_coins = "meme_coins",
e.sec_transparancy = "sec_transparancy",
e.bitcoin_pizza_day = "bitcoin_pizza_day",
e.staking = "staking",
e.btc_pairs = "btc_pairs",
e.eth_pairs = "eth_pairs",
e.top_10_cmc_pairs = "top_10_cmc_pairs",
e.gamefi_tokens = "gamefi_tokens",
e["defi2.0_tokens"] = "defi2.0_tokens",
e.socialfi_tokens = "socialfi_tokens",
e.shit_coins = "shit_coins",
e.margin_trading_x10 = "margin_trading_x10",
e.margin_trading_x20 = "margin_trading_x20",
e.margin_trading_x30 = "margin_trading_x30",
e.margin_trading_x50 = "margin_trading_x50",
e.margin_trading_x75 = "margin_trading_x75",
e.margin_trading_x100 = "margin_trading_x100",
e.derivatives = "derivatives",
e.prediction_markets = "prediction_markets",
e.web3_integration = "web3_integration",
e.facebook_ads = "facebook_ads",
e.x = "x",
e.youtube = "youtube",
e.instagram = "instagram",
e.tiktok = "tiktok",
e.reddit = "reddit",
e.influencers = "influencers",
e.ceo = "ceo",
e.it_team = "it_team",
e.marketing = "marketing",
e.partnership_program = "partnership_program",
e.product_team = "product_team",
e.bisdev_team = "bisdev_team",
e.two_factor_authentication = "two_factor_authentication",
e.kyc = "kyc",
e.kyb = "kyb",
e.legal_opinion = "legal_opinion",
e.anti_money_loundering = "anti_money_loundering",
e.ceo_21m = "ceo_21m",
e.hamster_daily_show = "hamster_daily_show",
e.hamster_youtube_channel = "hamster_youtube_channel",
e.hamster_youtube_gold_button = "hamster_youtube_gold_button",
e.tokenomics_expert = "tokenomics_expert",
e.consensys_explorer_pass = "consensys_explorer_pass",
e.consensys_piranja_pass = "consensys_piranja_pass",
e.web3_academy_launch = "web3_academy_launch",
e.compliance_officer = "compliance_officer",
e.football_club_winner = "football_club_winner",
e.vc_labs = "vc_labs",
e.partner_announce = "partner_announce",
e.licence_japan = "licence_japan",
e.licence_ethiopia = "licence_ethiopia",
e.money_20_20 = "money_20_20",
e.hamster_drop = "hamster_drop",
e.premarket_launch = "premarket_launch",
e.licence_india = "licence_india",
e.licence_bangladesh = "licence_bangladesh",
e.licence_indonesia = "licence_indonesia",
e.layerzero_listing = "layerzero_listing",
e.tg_leaders = "tg_leaders",
e.youtube_25_million = "youtube_25_million",
e.licence_vietnam = "licence_vietnam",
e.twitter_10_million = "twitter_10_million",
e.licence_turkey = "licence_turkey",
e.hamster_green_energy = "hamster_green_energy",
e.licence_philippines = "licence_philippines",
e.web3_game_con = "web3_game_con",
e.hamster_break_records = "hamster_break_records",
e.sports_integration = "sports_integration",
e.sports_integration_0207 = "sports_integration_0207",
e.sports_integration_0507 = "sports_integration_0507",
e.sports_integration_0607 = "sports_integration_0607",
e.sports_integration_0707 = "sports_integration_0707",
e.sports_integration_0807 = "sports_integration_0807",
e.sports_integration_0907 = "sports_integration_0907",
e.sports_integration_1007 = "sports_integration_1007",
e.development_hub_mumbai = "development_hub_mumbai",
e.adv_integration = "adv_integration",
e.adv_integration_0907 = "adv_integration_0907",
e.data_center_tokyo = "data_center_tokyo",
e.minigame = "mini_game",
e.cx_hub_istanbul = "cx_hub_istanbul",
e.leaderboards = "leaderboards",
e.riyadh_masters_2024 = "riyadh_masters_2024",
e.dex = "dex",
e.vesting_smartcontracts = "vesting_smartcontracts",
e.oracle = "oracle",
e.launchpad = "launchpad",
e.nft_marketplace = "nft_marketplace",
e.adv_integration_1307 = "adv_integration_1307",
e.sports_integration_1407 = "sports_integration_1407",
e.business_jet = "business_jet",
e.call_btc_rise = "call_btc_rise",
e.rolex_soulmate = "rolex_soulmate",
e.appstore_launch = "appstore_launch",
e.telegram_50m = "telegram_50m",
e.google_analytics = "google_analytics",
e.session_australia = "session_australia",
e.fight_fight = "fight_fight",
e.grant_developers = "grant_developers",
e.nft_metaverse = "nft_metaverse",
e.crypto_farming = "crypto_farming",
e.telegram_miniapp_launch = "telegram_miniapp_launch",
e.telegram_stars_integration = "telegram_stars_integration",
e.hamstergpt = "hamstergpt",
e.hamsterbank = "hamsterbank",
e.sport_marketplace = "sport_marketplace",
e.market_making = "market_making",
e.web3_advertising = "web3_advertising",
e.kamala_calling = "kamala_calling",
e.bitcoin_conference_2024 = "bitcoin_conference_2024",
e.water_is_clear = "water_is_clear",
e.welcome_to_ogames = "welcome_to_ogames",
e.hodl_btc_100k = "hodl_btc_100k",
e))(Dw || {})
  , Nw = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(Nw || {})
  , Vw = (e=>(e[e.Bronze = 1] = "Bronze",
e[e.Silver = 2] = "Silver",
e[e.Gold = 3] = "Gold",
e[e.Platinum = 4] = "Platinum",
e[e.Diamond = 5] = "Diamond",
e[e.Epic = 6] = "Epic",
e[e.Legendary = 7] = "Legendary",
e[e.Master = 8] = "Master",
e[e.Grandmaster = 9] = "Grandmaster",
e[e.Lord = 10] = "Lord",
e[e.Creator = 11] = "Creator",
e))(Vw || {})
  , Uw = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(Uw || {})
  , Bw = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(Bw || {})
  , xw = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.SUBSCRIBE_TELEGRAM_GROUP = "subscribe_telegram_group",
e.SUBSCRIBE_X_ACCOUNT = "subscribe_x_account",
e.SUBSCRIBE_FACEBOOK = "subscribe_facebook",
e.GLEAM_TASKS = "gleam_tasks",
e.INVITE_FRIENDS = "invite_friends",
e.PIN_BOT = "pin_bot",
e.STREAK_DAYS = "streak_days",
e.SELECT_EXCHANGE = "select_exchange",
e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK = "exchange_signup_via_friend_link",
e.SUBSCRIBE_MEDIUM = "subscribe_medium",
e.SUBSCRIBE_DISCORD = "subscribe_discord",
e.ADD_OUR_BOT = "add_our_bot",
e.SUBSCRIBE_YOUTUBE_CHANNEL = "subscribe_youtube_channel",
e.HAMSTER_DROP = "hamster_drop",
e.SUBSCRIBE_TELEGRAM_CRYPTOFAM = "subscribe_telegram_cryptofam",
e.HAMSTER_YOUTUBE_ACADEMY = "hamster_youtube_academy",
e.HAMSTER_YOUTUBE_EASY_START = "hamster_youtube_easy_start",
e.HAMSTER_YOUTUBE_EASY_START_S1E23 = "hamster_youtube_easy_start_s1e23",
e.HAMSTER_YOUTUBE_EASY_START_S1E24 = "hamster_youtube_easy_start_s1e24",
e.HAMSTER_YOUTUBE_EASY_START_S1E25 = "hamster_youtube_easy_start_s1e25",
e.HAMSTER_YOUTUBE_EASY_START_S1E26 = "hamster_youtube_easy_start_s1e26",
e.HAMSTER_YOUTUBE_EASY_START_S1E27 = "hamster_youtube_easy_start_s1e27",
e.HAMSTER_YOUTUBE_EASY_START_S1E28 = "hamster_youtube_easy_start_s1e28",
e.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1 = "hamster_youtube_partner_video_e1",
e.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE = "hamster_youtube_local_subscribe",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5 = "hamster_youtube_local_video_e5",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6 = "hamster_youtube_local_video_e6",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7 = "hamster_youtube_local_video_e7",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8 = "hamster_youtube_local_video_e8",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9 = "hamster_youtube_local_video_e9",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10 = "hamster_youtube_local_video_e10",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11 = "hamster_youtube_local_video_e11",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12 = "hamster_youtube_local_video_e12",
e))(xw || {})
  , Fw = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.CONNECT_TON_WALLET = "airdrop_connect_ton_wallet",
e.INVITE_FRIENDS = "invite_friends",
e.REACH_PROFIT_PER_HOUR = "reach_profit_per_hour",
e.REACH_LEVEL = "reach_level",
e))(Fw || {})
  , Hw = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(Hw || {})
  , jw = (e=>(e.BINGX = "bingx",
e))(jw || {})
  , Bo = (e=>(e.LANDING = "/",
e.PRIVACY_POLICY = "/privacy-policy",
e.GAME_INDEX = "/clicker",
e.GAME_FRIENDS = "/clicker/friends",
e.GAME_AIRDROP = "/clicker/airdrop",
e.GAME_BOOST = "/clicker/boost",
e.GAME_EARN = "/clicker/earn",
e.GAME_MINE = "/clicker/mine",
e.GAME_LEAGUE = "/clicker/league",
e.GAME_SETTINGS = "/clicker/settings",
e.GAME_SETTINGS_BINGX = "/clicker/settings/bingx",
e.GAME_SETTINGS_EXCHANGE = "/clicker/settings/exchange",
e.GAME_SETTINGS_LANGUAGE = "/clicker/settings/language",
e.GAME_USER = "/clicker/user",
e.GAME_USER_AVATAR = "/clicker/user/avatar",
e))(Bo || {})
  , fg = (e=>(e.ONBOARDING_START = "onboarding_start",
e.ONBOARDING_CLOSE_SLIDER = "onboarding_close_slider",
e.ONBOARDING_SLIDE = "onboarding_slide",
e.ONBOARDING_PLAY_BUTTON = "onboarding_play_button",
e.ONBOARDING_CLICK_JOIN_BUTTON = "onboarding_click_join_button",
e.ONBOARDING_SHAVE_BUTTON = "onboarding_shave_button",
e.ONBOARDING_CEO_BUTTON = "onboarding_ceo_button",
e.ONBOARDING_SELECT_EXCHANGE = "onboarding_select_exchange",
e.CLICK_INVITE_FRIEND = "click_invite_friend",
e.CLICK_COPY_INVITE_FRIEND = "click_copy_invite_friend",
e.REFERRAL_ADDED = "referral_added",
e.REFERRAL_SHOW_DIALOG_JOIN_BOT = "referral_show_dialog_join_bot",
e.REFERRAL_CLICK_DIALOG_JOIN_BOT = "referral_click_dialog_join_bot",
e.DAILY_COMBO_FOUND_1 = "daily_combo_found_1",
e.DAILY_COMBO_FOUND_2 = "daily_combo_found_2",
e.DAILY_COMBO_FOUND_3 = "daily_combo_found_3",
e.DAILY_COMBO_CLAIMED = "daily_combo_claimed",
e.DAILY_COMBO_CLICK_OPEN_CLAIM_MANUAL = "daily_combo_click_open_claim_manual",
e.DAILY_COMBO_CLICK_INFO = "daily_combo_click_info",
e.DAILY_CIPHER_TURN_ON = "daily_cipher_turn_on",
e.DAILY_CIPHER_CLICK_OPEN_CLAIM_MANUAL = "daily_cipher_click_open_claim_manual",
e.DAILY_CIPHER_CLAIMED = "daily_cipher_claimed",
e))(fg || {})
  , Mr = (e=>(e.Dot = ".",
e.Dash = "-",
e.SymbolSeparator = "/",
e))(Mr || {});
const Kw = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": '"',
    "...-..-": "$",
    ".--.-.": "@",
    " ": " "
}
  , Hn = Nn("auth", {
    state: ()=>({
        account_avatar: {},
        account_id: {},
        account_name: "Hamster",
        account_telegram_user_ids: [],
        authenticated: !1,
        deviceId: null,
        deviceInfo: null,
        error: !1,
        is_telegram: !1,
        loading: !0,
        opened_by_miniapp: !1,
        platform: "web",
        redirect: "/",
        refresh: !1,
        start_param: new Map,
        telegram_hash: "",
        telegram_platform: "",
        telegram_version: "",
        token: localStorage.getItem(me.AUTH_TOKEN) ?? null,
        location: {}
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(me.AUTH_TOKEN)
        },
        isExpiredToken(e) {
            if (e && _d(e)) {
                const t = _d(e).exp;
                return new Date().getTime() > t * 1e3
            }
            return !1
        },
        logout(e=!0) {
            this.authenticated = !1,
            this.token = null,
            localStorage.removeItem(me.AUTH_TOKEN),
            localStorage.removeItem(me.SYNC_AVAILABLE_TAPS),
            localStorage.removeItem(me.SYNC_TIMESTAMP_TAPS),
            localStorage.removeItem(me.SYNC_TAPS),
            localStorage.removeItem(me.AIRDROP_TASKS),
            localStorage.removeItem(me.EARN_TASKS),
            localStorage.removeItem(me.SETTINGS),
            localStorage.removeItem(me.SUBSCRIBE_YOUTUBE),
            localStorage.removeItem(me.SUBSCRIBE_DISCORD),
            localStorage.removeItem(me.SUBSCRIBE_MEDIUM),
            localStorage.removeItem(me.HAMSTER_DROP),
            localStorage.removeItem(me.SUBSCRIBE_TELEGRAM_CRYPTOFAM),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_ACADEMY),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START_S1E23),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START_S1E24),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START_S1E25),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START_S1E26),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START_S1E27),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_EASY_START_S1E28),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11),
            localStorage.removeItem(me.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12),
            localStorage.removeItem("ton-connect-storage_bridge-connection"),
            localStorage.removeItem("ton-connect-ui_last-selected-wallet-info"),
            e && (No(Bo.GAME_INDEX),
            setTimeout(()=>{
                window.location.reload()
            }
            , 500))
        },
        async postGetMe() {
            return await $e.post("/auth/account-info", {}).then(e=>{
                var t, n, r, i, o, s;
                return (t = e.accountInfo) != null && t.name && this.setAccountUserName(e.accountInfo.name),
                (n = e.accountInfo) != null && n.avatar && this.setAccountUserAvatar(e.accountInfo.avatar),
                (r = e.accountInfo) != null && r.id && this.setAccountUserId(e.accountInfo.id),
                Array.isArray((i = e.accountInfo) == null ? void 0 : i.telegramUserIds) && ((s = (o = e.accountInfo) == null ? void 0 : o.telegramUserIds) != null && s.length) && this.setAccountTelegramUserIds(e.accountInfo.telegramUserIds),
                e
            }
            )
        },
        async postLogin(e) {
            return await $e.post("/auth/auth-by-telegram-webapp", {
                body: e
            }).then(t=>{
                if (t.authToken) {
                    const n = t.authToken;
                    localStorage.setItem(me.AUTH_TOKEN, n),
                    this.setToken(n)
                }
                return t
            }
            )
        },
        async postWebappConflict(e) {
            return await $e.post("/auth/telegram-webapp-conflict", {
                body: e
            }).then(t=>t)
        },
        async postAddReferral(e) {
            return await $e.post("/clicker/add-referral", {
                body: {
                    authUserId: String(e)
                }
            }).then(t=>t)
        },
        async postAvatarGet() {
            return await $e.post("/auth/get-avatar", {
                body: {}
            }).then(e=>(console.log(e),
            e))
        },
        async postDeleteMe() {
            return await $e.post("/clicker/delete-me", {
                body: {}
            }).then(e=>e)
        },
        async getLocationData() {
            return await $e.get("/ip", {}).then(e=>{
                try {
                    e && this.setLocation(e)
                } catch (t) {
                    console.log(t)
                }
                return e
            }
            )
        },
        setAuthenticated(e) {
            this.authenticated = e
        },
        setError(e) {
            this.error = e
        },
        setLoading(e) {
            this.loading = e
        },
        setLocation(e) {
            this.location = e
        },
        setRedirect(e="/") {
            this.redirect = e
        },
        setRefresh(e) {
            this.refresh = e
        },
        setTelegram(e) {
            this.is_telegram = e
        },
        setAccountUserName(e) {
            this.account_name = e
        },
        setAccountUserId(e) {
            this.account_id = e
        },
        setAccountUserAvatar(e) {
            this.account_avatar = e
        },
        setAccountTelegramUserIds(e) {
            this.account_telegram_user_ids = e
        },
        setToken(e) {
            this.token = e
        },
        setStartParam(e) {
            this.start_param = e
        },
        parseParameters(e) {
            const t = new Map;
            return e.split("__").forEach(r=>{
                const i = r.match(/[a-zA-Z]+|[0-9]+/g);
                if (i && i.length === 2) {
                    const [o,s] = i;
                    t.set(o, s)
                }
            }
            ),
            t
        }
    },
    getters: {}
})
  , Vt = window.setInterval;
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ms = typeof window < "u"
  , Tr = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , Yw = (e,t,n)=>qw({
    l: e,
    k: t,
    s: n
})
  , qw = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , _t = e=>typeof e == "number" && isFinite(e)
  , Ww = e=>hg(e) === "[object Date]"
  , Ds = e=>hg(e) === "[object RegExp]"
  , ca = e=>xe(e) && Object.keys(e).length === 0
  , ut = Object.assign;
let bd;
const hu = ()=>bd || (bd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ed(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Gw = Object.prototype.hasOwnProperty;
function Ns(e, t) {
    return Gw.call(e, t)
}
const lt = Array.isArray
  , Qe = e=>typeof e == "function"
  , ne = e=>typeof e == "string"
  , ot = e=>typeof e == "boolean"
  , Jw = e=>typeof e == "symbol"
  , Ne = e=>e !== null && typeof e == "object"
  , zw = e=>Ne(e) && Qe(e.then) && Qe(e.catch)
  , dg = Object.prototype.toString
  , hg = e=>dg.call(e)
  , xe = e=>{
    if (!Ne(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Qw = e=>e == null ? "" : lt(e) || xe(e) && e.toString === dg ? JSON.stringify(e, null, 2) : String(e);
function pu(e, t="") {
    return e.reduce((n,r,i)=>i === 0 ? n + r : n + t + r, "")
}
function mu(e) {
    let t = e;
    return ()=>++t
}
function Xw(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const is = e=>!Ne(e) || lt(e);
function jr(e, t) {
    if (is(e) || is(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: i} = n.pop();
        Object.keys(r).forEach(o=>{
            is(r[o]) || is(i[o]) ? i[o] = r[o] : n.push({
                src: r[o],
                des: i[o]
            })
        }
        )
    }
}
/*!
  * message-compiler v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Zw(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function Xl(e, t, n) {
    const r = {
        start: e,
        end: t
    };
    return n != null && (r.source = n),
    r
}
const We = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
};
function ua(e, t, n={}) {
    const {domain: r, messages: i, args: o} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function $w(e) {
    throw e
}
const xn = " "
  , ek = "\r"
  , Lt = `
`
  , tk = "\u2028"
  , nk = "\u2029";
function rk(e) {
    const t = e;
    let n = 0
      , r = 1
      , i = 1
      , o = 0;
    const s = L=>t[L] === ek && t[L + 1] === Lt
      , a = L=>t[L] === Lt
      , l = L=>t[L] === nk
      , c = L=>t[L] === tk
      , u = L=>s(L) || a(L) || l(L) || c(L)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>i
      , _ = ()=>o
      , b = L=>s(L) || l(L) || c(L) ? Lt : t[L]
      , S = ()=>b(n)
      , g = ()=>b(n + o);
    function E() {
        return o = 0,
        u(n) && (r++,
        i = 0),
        s(n) && n++,
        n++,
        i++,
        t[n]
    }
    function p() {
        return s(n + o) && o++,
        o++,
        t[n + o]
    }
    function y() {
        n = 0,
        r = 1,
        i = 1,
        o = 0
    }
    function T(L=0) {
        o = L
    }
    function A() {
        const L = n + o;
        for (; L !== n; )
            E();
        o = 0
    }
    return {
        index: f,
        line: d,
        column: m,
        peekOffset: _,
        charAt: b,
        currentChar: S,
        currentPeek: g,
        next: E,
        peek: p,
        reset: y,
        resetPeek: T,
        skipToPeek: A
    }
}
const $n = void 0
  , ik = "."
  , Td = "'"
  , ok = "tokenizer";
function sk(e, t={}) {
    const n = t.location !== !1
      , r = rk(e)
      , i = ()=>r.index()
      , o = ()=>Zw(r.line(), r.column(), r.index())
      , s = o()
      , a = i()
      , l = {
        currentType: 14,
        offset: a,
        startLoc: s,
        endLoc: s,
        lastType: 14,
        lastOffset: a,
        lastStartLoc: s,
        lastEndLoc: s,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , c = ()=>l
      , {onError: u} = t;
    function f(h, v, k, ...R) {
        const V = c();
        if (v.column += k,
        v.offset += k,
        u) {
            const q = n ? Xl(V.startLoc, v) : null
              , X = ua(h, q, {
                domain: ok,
                args: R
            });
            u(X)
        }
    }
    function d(h, v, k) {
        h.endLoc = o(),
        h.currentType = v;
        const R = {
            type: v
        };
        return n && (R.loc = Xl(h.startLoc, h.endLoc)),
        k != null && (R.value = k),
        R
    }
    const m = h=>d(h, 14);
    function _(h, v) {
        return h.currentChar() === v ? (h.next(),
        v) : (f(We.EXPECTED_TOKEN, o(), 0, v),
        "")
    }
    function b(h) {
        let v = "";
        for (; h.currentPeek() === xn || h.currentPeek() === Lt; )
            v += h.currentPeek(),
            h.peek();
        return v
    }
    function S(h) {
        const v = b(h);
        return h.skipToPeek(),
        v
    }
    function g(h) {
        if (h === $n)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function E(h) {
        if (h === $n)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function p(h, v) {
        const {currentType: k} = v;
        if (k !== 2)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function y(h, v) {
        const {currentType: k} = v;
        if (k !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === "-" ? h.peek() : h.currentPeek()
          , V = E(R);
        return h.resetPeek(),
        V
    }
    function T(h, v) {
        const {currentType: k} = v;
        if (k !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === Td;
        return h.resetPeek(),
        R
    }
    function A(h, v) {
        const {currentType: k} = v;
        if (k !== 8)
            return !1;
        b(h);
        const R = h.currentPeek() === ".";
        return h.resetPeek(),
        R
    }
    function L(h, v) {
        const {currentType: k} = v;
        if (k !== 9)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function C(h, v) {
        const {currentType: k} = v;
        if (!(k === 8 || k === 12))
            return !1;
        b(h);
        const R = h.currentPeek() === ":";
        return h.resetPeek(),
        R
    }
    function O(h, v) {
        const {currentType: k} = v;
        if (k !== 10)
            return !1;
        const R = ()=>{
            const q = h.currentPeek();
            return q === "{" ? g(h.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === xn || !q ? !1 : q === Lt ? (h.peek(),
            R()) : g(q)
        }
          , V = R();
        return h.resetPeek(),
        V
    }
    function D(h) {
        b(h);
        const v = h.currentPeek() === "|";
        return h.resetPeek(),
        v
    }
    function F(h) {
        const v = b(h)
          , k = h.currentPeek() === "%" && h.peek() === "{";
        return h.resetPeek(),
        {
            isModulo: k,
            hasSpace: v.length > 0
        }
    }
    function U(h, v=!0) {
        const k = (V=!1,q="",X=!1)=>{
            const z = h.currentPeek();
            return z === "{" ? q === "%" ? !1 : V : z === "@" || !z ? q === "%" ? !0 : V : z === "%" ? (h.peek(),
            k(V, "%", !0)) : z === "|" ? q === "%" || X ? !0 : !(q === xn || q === Lt) : z === xn ? (h.peek(),
            k(!0, xn, X)) : z === Lt ? (h.peek(),
            k(!0, Lt, X)) : !0
        }
          , R = k();
        return v && h.resetPeek(),
        R
    }
    function Z(h, v) {
        const k = h.currentChar();
        return k === $n ? $n : v(k) ? (h.next(),
        k) : null
    }
    function W(h) {
        return Z(h, k=>{
            const R = k.charCodeAt(0);
            return R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 || R === 95 || R === 36
        }
        )
    }
    function K(h) {
        return Z(h, k=>{
            const R = k.charCodeAt(0);
            return R >= 48 && R <= 57
        }
        )
    }
    function N(h) {
        return Z(h, k=>{
            const R = k.charCodeAt(0);
            return R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102
        }
        )
    }
    function Y(h) {
        let v = ""
          , k = "";
        for (; v = K(h); )
            k += v;
        return k
    }
    function B(h) {
        S(h);
        const v = h.currentChar();
        return v !== "%" && f(We.EXPECTED_TOKEN, o(), 0, v),
        h.next(),
        "%"
    }
    function ae(h) {
        let v = "";
        for (; ; ) {
            const k = h.currentChar();
            if (k === "{" || k === "}" || k === "@" || k === "|" || !k)
                break;
            if (k === "%")
                if (U(h))
                    v += k,
                    h.next();
                else
                    break;
            else if (k === xn || k === Lt)
                if (U(h))
                    v += k,
                    h.next();
                else {
                    if (D(h))
                        break;
                    v += k,
                    h.next()
                }
            else
                v += k,
                h.next()
        }
        return v
    }
    function j(h) {
        S(h);
        let v = ""
          , k = "";
        for (; v = W(h); )
            k += v;
        return h.currentChar() === $n && f(We.UNTERMINATED_CLOSING_BRACE, o(), 0),
        k
    }
    function ce(h) {
        S(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${Y(h)}`) : v += Y(h),
        h.currentChar() === $n && f(We.UNTERMINATED_CLOSING_BRACE, o(), 0),
        v
    }
    function _e(h) {
        S(h),
        _(h, "'");
        let v = ""
          , k = "";
        const R = q=>q !== Td && q !== Lt;
        for (; v = Z(h, R); )
            v === "\\" ? k += Ke(h) : k += v;
        const V = h.currentChar();
        return V === Lt || V === $n ? (f(We.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        V === Lt && (h.next(),
        _(h, "'")),
        k) : (_(h, "'"),
        k)
    }
    function Ke(h) {
        const v = h.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return h.next(),
            `\\${v}`;
        case "u":
            return Je(h, v, 4);
        case "U":
            return Je(h, v, 6);
        default:
            return f(We.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v),
            ""
        }
    }
    function Je(h, v, k) {
        _(h, v);
        let R = "";
        for (let V = 0; V < k; V++) {
            const q = N(h);
            if (!q) {
                f(We.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${v}${R}${h.currentChar()}`);
                break
            }
            R += q
        }
        return `\\${v}${R}`
    }
    function at(h) {
        S(h);
        let v = ""
          , k = "";
        const R = V=>V !== "{" && V !== "}" && V !== xn && V !== Lt;
        for (; v = Z(h, R); )
            k += v;
        return k
    }
    function Ze(h) {
        let v = ""
          , k = "";
        for (; v = W(h); )
            k += v;
        return k
    }
    function H(h) {
        const v = (k=!1,R)=>{
            const V = h.currentChar();
            return V === "{" || V === "%" || V === "@" || V === "|" || V === "(" || V === ")" || !V || V === xn ? R : V === Lt || V === ik ? (R += V,
            h.next(),
            v(k, R)) : (R += V,
            h.next(),
            v(!0, R))
        }
        ;
        return v(!1, "")
    }
    function te(h) {
        S(h);
        const v = _(h, "|");
        return S(h),
        v
    }
    function Q(h, v) {
        let k = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(We.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            h.next(),
            k = d(v, 2, "{"),
            S(h),
            v.braceNest++,
            k;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(We.EMPTY_PLACEHOLDER, o(), 0),
            h.next(),
            k = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && S(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            k;
        case "@":
            return v.braceNest > 0 && f(We.UNTERMINATED_CLOSING_BRACE, o(), 0),
            k = $(h, v) || m(v),
            v.braceNest = 0,
            k;
        default:
            let V = !0
              , q = !0
              , X = !0;
            if (D(h))
                return v.braceNest > 0 && f(We.UNTERMINATED_CLOSING_BRACE, o(), 0),
                k = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                k;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(We.UNTERMINATED_CLOSING_BRACE, o(), 0),
                v.braceNest = 0,
                ve(h, v);
            if (V = p(h, v))
                return k = d(v, 5, j(h)),
                S(h),
                k;
            if (q = y(h, v))
                return k = d(v, 6, ce(h)),
                S(h),
                k;
            if (X = T(h, v))
                return k = d(v, 7, _e(h)),
                S(h),
                k;
            if (!V && !q && !X)
                return k = d(v, 13, at(h)),
                f(We.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, k.value),
                S(h),
                k;
            break
        }
        return k
    }
    function $(h, v) {
        const {currentType: k} = v;
        let R = null;
        const V = h.currentChar();
        switch ((k === 8 || k === 9 || k === 12 || k === 10) && (V === Lt || V === xn) && f(We.INVALID_LINKED_FORMAT, o(), 0),
        V) {
        case "@":
            return h.next(),
            R = d(v, 8, "@"),
            v.inLinked = !0,
            R;
        case ".":
            return S(h),
            h.next(),
            d(v, 9, ".");
        case ":":
            return S(h),
            h.next(),
            d(v, 10, ":");
        default:
            return D(h) ? (R = d(v, 1, te(h)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : A(h, v) || C(h, v) ? (S(h),
            $(h, v)) : L(h, v) ? (S(h),
            d(v, 12, Ze(h))) : O(h, v) ? (S(h),
            V === "{" ? Q(h, v) || R : d(v, 11, H(h))) : (k === 8 && f(We.INVALID_LINKED_FORMAT, o(), 0),
            v.braceNest = 0,
            v.inLinked = !1,
            ve(h, v))
        }
    }
    function ve(h, v) {
        let k = {
            type: 14
        };
        if (v.braceNest > 0)
            return Q(h, v) || m(v);
        if (v.inLinked)
            return $(h, v) || m(v);
        switch (h.currentChar()) {
        case "{":
            return Q(h, v) || m(v);
        case "}":
            return f(We.UNBALANCED_CLOSING_BRACE, o(), 0),
            h.next(),
            d(v, 3, "}");
        case "@":
            return $(h, v) || m(v);
        default:
            if (D(h))
                return k = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                k;
            const {isModulo: V, hasSpace: q} = F(h);
            if (V)
                return q ? d(v, 0, ae(h)) : d(v, 4, B(h));
            if (U(h))
                return d(v, 0, ae(h));
            break
        }
        return k
    }
    function Ue() {
        const {currentType: h, offset: v, startLoc: k, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = k,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = o(),
        r.currentChar() === $n ? d(l, 14) : ve(r, l)
    }
    return {
        nextToken: Ue,
        currentOffset: i,
        currentPosition: o,
        context: c
    }
}
const ak = "parser"
  , lk = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ck(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
        }
    }
}
function uk(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(g, E, p, y, ...T) {
        const A = g.currentPosition();
        if (A.offset += y,
        A.column += y,
        n) {
            const L = t ? Xl(p, A) : null
              , C = ua(E, L, {
                domain: ak,
                args: T
            });
            n(C)
        }
    }
    function i(g, E, p) {
        const y = {
            type: g
        };
        return t && (y.start = E,
        y.end = E,
        y.loc = {
            start: p,
            end: p
        }),
        y
    }
    function o(g, E, p, y) {
        y && (g.type = y),
        t && (g.end = E,
        g.loc && (g.loc.end = p))
    }
    function s(g, E) {
        const p = g.context()
          , y = i(3, p.offset, p.startLoc);
        return y.value = E,
        o(y, g.currentOffset(), g.currentPosition()),
        y
    }
    function a(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , A = i(5, y, T);
        return A.index = parseInt(E, 10),
        g.nextToken(),
        o(A, g.currentOffset(), g.currentPosition()),
        A
    }
    function l(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , A = i(4, y, T);
        return A.key = E,
        g.nextToken(),
        o(A, g.currentOffset(), g.currentPosition()),
        A
    }
    function c(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , A = i(9, y, T);
        return A.value = E.replace(lk, ck),
        g.nextToken(),
        o(A, g.currentOffset(), g.currentPosition()),
        A
    }
    function u(g) {
        const E = g.nextToken()
          , p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , A = i(8, y, T);
        return E.type !== 12 ? (r(g, We.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        A.value = "",
        o(A, y, T),
        {
            nextConsumeToken: E,
            node: A
        }) : (E.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, bn(E)),
        A.value = E.value || "",
        o(A, g.currentOffset(), g.currentPosition()),
        {
            node: A
        })
    }
    function f(g, E) {
        const p = g.context()
          , y = i(7, p.offset, p.startLoc);
        return y.value = E,
        o(y, g.currentOffset(), g.currentPosition()),
        y
    }
    function d(g) {
        const E = g.context()
          , p = i(6, E.offset, E.startLoc);
        let y = g.nextToken();
        if (y.type === 9) {
            const T = u(g);
            p.modifier = T.node,
            y = T.nextConsumeToken || g.nextToken()
        }
        switch (y.type !== 10 && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(y)),
        y = g.nextToken(),
        y.type === 2 && (y = g.nextToken()),
        y.type) {
        case 11:
            y.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(y)),
            p.key = f(g, y.value || "");
            break;
        case 5:
            y.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(y)),
            p.key = l(g, y.value || "");
            break;
        case 6:
            y.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(y)),
            p.key = a(g, y.value || "");
            break;
        case 7:
            y.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(y)),
            p.key = c(g, y.value || "");
            break;
        default:
            r(g, We.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
            const T = g.context()
              , A = i(7, T.offset, T.startLoc);
            return A.value = "",
            o(A, T.offset, T.startLoc),
            p.key = A,
            o(p, T.offset, T.startLoc),
            {
                nextConsumeToken: y,
                node: p
            }
        }
        return o(p, g.currentOffset(), g.currentPosition()),
        {
            node: p
        }
    }
    function m(g) {
        const E = g.context()
          , p = E.currentType === 1 ? g.currentOffset() : E.offset
          , y = E.currentType === 1 ? E.endLoc : E.startLoc
          , T = i(2, p, y);
        T.items = [];
        let A = null;
        do {
            const O = A || g.nextToken();
            switch (A = null,
            O.type) {
            case 0:
                O.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(O)),
                T.items.push(s(g, O.value || ""));
                break;
            case 6:
                O.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(O)),
                T.items.push(a(g, O.value || ""));
                break;
            case 5:
                O.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(O)),
                T.items.push(l(g, O.value || ""));
                break;
            case 7:
                O.value == null && r(g, We.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, bn(O)),
                T.items.push(c(g, O.value || ""));
                break;
            case 8:
                const D = d(g);
                T.items.push(D.node),
                A = D.nextConsumeToken || null;
                break
            }
        } while (E.currentType !== 14 && E.currentType !== 1);
        const L = E.currentType === 1 ? E.lastOffset : g.currentOffset()
          , C = E.currentType === 1 ? E.lastEndLoc : g.currentPosition();
        return o(T, L, C),
        T
    }
    function _(g, E, p, y) {
        const T = g.context();
        let A = y.items.length === 0;
        const L = i(1, E, p);
        L.cases = [],
        L.cases.push(y);
        do {
            const C = m(g);
            A || (A = C.items.length === 0),
            L.cases.push(C)
        } while (T.currentType !== 14);
        return A && r(g, We.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
        o(L, g.currentOffset(), g.currentPosition()),
        L
    }
    function b(g) {
        const E = g.context()
          , {offset: p, startLoc: y} = E
          , T = m(g);
        return E.currentType === 14 ? T : _(g, p, y, T)
    }
    function S(g) {
        const E = sk(g, ut({}, e))
          , p = E.context()
          , y = i(0, p.offset, p.startLoc);
        return t && y.loc && (y.loc.source = g),
        y.body = b(E),
        e.onCacheKey && (y.cacheKey = e.onCacheKey(g)),
        p.currentType !== 14 && r(E, We.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, g[p.offset] || ""),
        o(y, E.currentOffset(), E.currentPosition()),
        y
    }
    return {
        parse: S
    }
}
function bn(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function fk(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: ()=>n,
        helper: o=>(n.helpers.add(o),
        o)
    }
}
function Sd(e, t) {
    for (let n = 0; n < e.length; n++)
        gu(e[n], t)
}
function gu(e, t) {
    switch (e.type) {
    case 1:
        Sd(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Sd(e.items, t);
        break;
    case 6:
        gu(e.key, t),
        t.helper("linked"),
        t.helper("type");
        break;
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function dk(e, t={}) {
    const n = fk(e);
    n.helper("normalize"),
    e.body && gu(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function hk(e) {
    const t = e.body;
    return t.type === 2 ? Ad(t) : t.cases.forEach(n=>Ad(n)),
    e
}
function Ad(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null)
                break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = pu(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function ni(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        const t = e;
        ni(t.body),
        t.b = t.body,
        delete t.body;
        break;
    case 1:
        const n = e
          , r = n.cases;
        for (let u = 0; u < r.length; u++)
            ni(r[u]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const i = e
          , o = i.items;
        for (let u = 0; u < o.length; u++)
            ni(o[u]);
        i.i = o,
        delete i.items,
        i.static && (i.s = i.static,
        delete i.static);
        break;
    case 3:
    case 9:
    case 8:
    case 7:
        const s = e;
        s.value && (s.v = s.value,
        delete s.value);
        break;
    case 6:
        const a = e;
        ni(a.key),
        a.k = a.key,
        delete a.key,
        a.modifier && (ni(a.modifier),
        a.m = a.modifier,
        delete a.modifier);
        break;
    case 5:
        const l = e;
        l.i = l.index,
        delete l.index;
        break;
    case 4:
        const c = e;
        c.k = c.key,
        delete c.key;
        break
    }
    delete e.type
}
function pk(e, t) {
    const {sourceMap: n, filename: r, breakLineCode: i, needIndent: o} = t
      , s = t.location !== !1
      , a = {
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: i,
        needIndent: o,
        indentLevel: 0
    };
    s && e.loc && (a.source = e.loc.source);
    const l = ()=>a;
    function c(S, g) {
        a.code += S
    }
    function u(S, g=!0) {
        const E = g ? i : "";
        c(o ? E + "  ".repeat(S) : E)
    }
    function f(S=!0) {
        const g = ++a.indentLevel;
        S && u(g)
    }
    function d(S=!0) {
        const g = --a.indentLevel;
        S && u(g)
    }
    function m() {
        u(a.indentLevel)
    }
    return {
        context: l,
        push: c,
        indent: f,
        deindent: d,
        newline: m,
        helper: S=>`_${S}`,
        needIndent: ()=>a.needIndent
    }
}
function mk(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    bi(e, t.key),
    t.modifier ? (e.push(", "),
    bi(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function gk(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const i = t.items.length;
    for (let o = 0; o < i && (bi(e, t.items[o]),
    o !== i - 1); o++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function yk(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const i = t.cases.length;
        for (let o = 0; o < i && (bi(e, t.cases[o]),
        o !== i - 1); o++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function vk(e, t) {
    t.body ? bi(e, t.body) : e.push("null")
}
function bi(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        vk(e, t);
        break;
    case 1:
        yk(e, t);
        break;
    case 2:
        gk(e, t);
        break;
    case 6:
        mk(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break
    }
}
const _k = (e,t={})=>{
    const n = ne(t.mode) ? t.mode : "normal"
      , r = ne(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = pk(e, {
        mode: n,
        filename: r,
        sourceMap: i,
        breakLineCode: o,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${pu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    bi(l, e),
    l.deindent(s),
    l.push("}"),
    delete e.helpers;
    const {code: c, map: u} = l.context();
    return {
        ast: e,
        code: c,
        map: u ? u.toJSON() : void 0
    }
}
;
function bk(e, t={}) {
    const n = ut({}, t)
      , r = !!n.jit
      , i = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , a = uk(n).parse(e);
    return r ? (o && hk(a),
    i && ni(a),
    {
        ast: a,
        code: ""
    }) : (dk(a, n),
    _k(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ek() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Sr = [];
Sr[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Sr[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Sr[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Sr[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Sr[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Sr[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Sr[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Tk = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Sk(e) {
    return Tk.test(e)
}
function Ak(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function wk(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function kk(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Sk(t) ? Ak(t) : "*" + t
}
function Lk(e) {
    const t = [];
    let n = -1, r = 0, i = 0, o, s, a, l, c, u, f;
    const d = [];
    d[0] = ()=>{
        s === void 0 ? s = a : s += a
    }
    ,
    d[1] = ()=>{
        s !== void 0 && (t.push(s),
        s = void 0)
    }
    ,
    d[2] = ()=>{
        d[0](),
        i++
    }
    ,
    d[3] = ()=>{
        if (i > 0)
            i--,
            r = 4,
            d[0]();
        else {
            if (i = 0,
            s === void 0 || (s = kk(s),
            s === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function m() {
        const _ = e[n + 1];
        if (r === 5 && _ === "'" || r === 6 && _ === '"')
            return n++,
            a = "\\" + _,
            d[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        o = e[n],
        !(o === "\\" && m())) {
            if (l = wk(o),
            f = Sr[r],
            c = f[l] || f.l || 8,
            c === 8 || (r = c[0],
            c[1] !== void 0 && (u = d[c[1]],
            u && (a = o,
            u() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const wd = new Map;
function Ck(e, t) {
    return Ne(e) ? e[t] : null
}
function Ok(e, t) {
    if (!Ne(e))
        return null;
    let n = wd.get(t);
    if (n || (n = Lk(t),
    n && wd.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let i = e
      , o = 0;
    for (; o < r; ) {
        const s = i[n[o]];
        if (s === void 0 || Qe(i))
            return null;
        i = s,
        o++
    }
    return i
}
const Rk = e=>e
  , Ik = e=>""
  , Pk = "text"
  , Mk = e=>e.length === 0 ? "" : pu(e)
  , Dk = Qw;
function kd(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function Nk(e) {
    const t = _t(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (_t(e.named.count) || _t(e.named.n)) ? _t(e.named.count) ? e.named.count : _t(e.named.n) ? e.named.n : t : t
}
function Vk(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function Uk(e={}) {
    const t = e.locale
      , n = Nk(e)
      , r = Ne(e.pluralRules) && ne(t) && Qe(e.pluralRules[t]) ? e.pluralRules[t] : kd
      , i = Ne(e.pluralRules) && ne(t) && Qe(e.pluralRules[t]) ? kd : void 0
      , o = g=>g[r(n, g.length, i)]
      , s = e.list || []
      , a = g=>s[g]
      , l = e.named || {};
    _t(e.pluralIndex) && Vk(n, l);
    const c = g=>l[g];
    function u(g) {
        const E = Qe(e.messages) ? e.messages(g) : Ne(e.messages) ? e.messages[g] : !1;
        return E || (e.parent ? e.parent.message(g) : Ik)
    }
    const f = g=>e.modifiers ? e.modifiers[g] : Rk
      , d = xe(e.processor) && Qe(e.processor.normalize) ? e.processor.normalize : Mk
      , m = xe(e.processor) && Qe(e.processor.interpolate) ? e.processor.interpolate : Dk
      , _ = xe(e.processor) && ne(e.processor.type) ? e.processor.type : Pk
      , S = {
        list: a,
        named: c,
        plural: o,
        linked: (g,...E)=>{
            const [p,y] = E;
            let T = "text"
              , A = "";
            E.length === 1 ? Ne(p) ? (A = p.modifier || A,
            T = p.type || T) : ne(p) && (A = p || A) : E.length === 2 && (ne(p) && (A = p || A),
            ne(y) && (T = y || T));
            const L = u(g)(S)
              , C = T === "vnode" && lt(L) && A ? L[0] : L;
            return A ? f(A)(C, T) : C
        }
        ,
        message: u,
        type: _,
        interpolate: m,
        normalize: d,
        values: ut({}, s, l)
    };
    return S
}
let yo = null;
function Bk(e) {
    yo = e
}
function xk(e, t, n) {
    yo && yo.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const Fk = Hk("function:translate");
function Hk(e) {
    return t=>yo && yo.emit(e, t)
}
const jk = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , pg = We.__EXTEND_POINT__
  , Cr = mu(pg)
  , kn = {
    INVALID_ARGUMENT: pg,
    INVALID_DATE_ARGUMENT: Cr(),
    INVALID_ISO_DATE_ARGUMENT: Cr(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Cr(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Cr(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Cr(),
    NOT_SUPPORT_LOCALE_TYPE: Cr(),
    __EXTEND_POINT__: Cr()
};
function jn(e) {
    return ua(e, null, void 0)
}
function yu(e, t) {
    return t.locale != null ? Ld(t.locale) : Ld(e.locale)
}
let za;
function Ld(e) {
    if (ne(e))
        return e;
    if (Qe(e)) {
        if (e.resolvedOnce && za != null)
            return za;
        if (e.constructor.name === "Function") {
            const t = e();
            if (zw(t))
                throw jn(kn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return za = t
        } else
            throw jn(kn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw jn(kn.NOT_SUPPORT_LOCALE_TYPE)
}
function Kk(e, t, n) {
    return [...new Set([n, ...lt(t) ? t : Ne(t) ? Object.keys(t) : ne(t) ? [t] : [n]])]
}
function mg(e, t, n) {
    const r = ne(n) ? n : Vs
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let o = i.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let s = [n];
        for (; lt(s); )
            s = Cd(o, s, t);
        const a = lt(t) || !xe(t) ? t : t.default ? t.default : null;
        s = ne(a) ? [a] : a,
        lt(s) && Cd(o, s, !1),
        i.__localeChainCache.set(r, o)
    }
    return o
}
function Cd(e, t, n) {
    let r = !0;
    for (let i = 0; i < t.length && ot(r); i++) {
        const o = t[i];
        ne(o) && (r = Yk(e, t[i], n))
    }
    return r
}
function Yk(e, t, n) {
    let r;
    const i = t.split("-");
    do {
        const o = i.join("-");
        r = qk(e, o, n),
        i.splice(-1, 1)
    } while (i.length && r === !0);
    return r
}
function qk(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const i = t.replace(/!/g, "");
        e.push(i),
        (lt(n) || xe(n)) && n[i] && (r = n[i])
    }
    return r
}
const Wk = "9.9.1"
  , fa = -1
  , Vs = "en-US"
  , Od = ""
  , Rd = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Gk() {
    return {
        upper: (e,t)=>t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && Ne(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && Ne(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && ne(e) ? Rd(e) : t === "vnode" && Ne(e) && "__v_isVNode"in e ? Rd(e.children) : e
    }
}
let gg;
function Jk(e) {
    gg = e
}
let yg;
function zk(e) {
    yg = e
}
let vg;
function Qk(e) {
    vg = e
}
let _g = null;
const Xk = e=>{
    _g = e
}
  , Zk = ()=>_g;
let bg = null;
const Id = e=>{
    bg = e
}
  , $k = ()=>bg;
let Pd = 0;
function eL(e={}) {
    const t = Qe(e.onWarn) ? e.onWarn : Xw
      , n = ne(e.version) ? e.version : Wk
      , r = ne(e.locale) || Qe(e.locale) ? e.locale : Vs
      , i = Qe(r) ? Vs : r
      , o = lt(e.fallbackLocale) || xe(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , s = xe(e.messages) ? e.messages : {
        [i]: {}
    }
      , a = xe(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = xe(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , c = ut({}, e.modifiers || {}, Gk())
      , u = e.pluralRules || {}
      , f = Qe(e.missing) ? e.missing : null
      , d = ot(e.missingWarn) || Ds(e.missingWarn) ? e.missingWarn : !0
      , m = ot(e.fallbackWarn) || Ds(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = !!e.fallbackFormat
      , b = !!e.unresolving
      , S = Qe(e.postTranslation) ? e.postTranslation : null
      , g = xe(e.processor) ? e.processor : null
      , E = ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , y = Qe(e.messageCompiler) ? e.messageCompiler : gg
      , T = Qe(e.messageResolver) ? e.messageResolver : yg || Ck
      , A = Qe(e.localeFallbacker) ? e.localeFallbacker : vg || Kk
      , L = Ne(e.fallbackContext) ? e.fallbackContext : void 0
      , C = e
      , O = Ne(C.__datetimeFormatters) ? C.__datetimeFormatters : new Map
      , D = Ne(C.__numberFormatters) ? C.__numberFormatters : new Map
      , F = Ne(C.__meta) ? C.__meta : {};
    Pd++;
    const U = {
        version: n,
        cid: Pd,
        locale: r,
        fallbackLocale: o,
        messages: s,
        modifiers: c,
        pluralRules: u,
        missing: f,
        missingWarn: d,
        fallbackWarn: m,
        fallbackFormat: _,
        unresolving: b,
        postTranslation: S,
        processor: g,
        warnHtmlMessage: E,
        escapeParameter: p,
        messageCompiler: y,
        messageResolver: T,
        localeFallbacker: A,
        fallbackContext: L,
        onWarn: t,
        __meta: F
    };
    return U.datetimeFormats = a,
    U.numberFormats = l,
    U.__datetimeFormatters = O,
    U.__numberFormatters = D,
    __INTLIFY_PROD_DEVTOOLS__ && xk(U, n, F),
    U
}
function vu(e, t, n, r, i) {
    const {missing: o, onWarn: s} = e;
    if (o !== null) {
        const a = o(e, n, t, i);
        return ne(a) ? a : t
    } else
        return t
}
function Ui(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function Qa(e) {
    return n=>tL(n, e)
}
function tL(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n
          , i = r.c || r.cases;
        return e.plural(i.reduce((o,s)=>[...o, Md(e, s)], []))
    } else
        return Md(e, n)
}
function Md(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = (t.i || t.items).reduce((i,o)=>[...i, Zl(e, o)], []);
        return e.normalize(r)
    }
}
function Zl(e, t) {
    const n = t.t || t.type;
    switch (n) {
    case 3:
        const r = t;
        return r.v || r.value;
    case 9:
        const i = t;
        return i.v || i.value;
    case 4:
        const o = t;
        return e.interpolate(e.named(o.k || o.key));
    case 5:
        const s = t;
        return e.interpolate(e.list(s.i != null ? s.i : s.index));
    case 6:
        const a = t
          , l = a.m || a.modifier;
        return e.linked(Zl(e, a.k || a.key), l ? Zl(e, l) : void 0, e.type);
    case 7:
        const c = t;
        return c.v || c.value;
    case 8:
        const u = t;
        return u.v || u.value;
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const nL = e=>e;
let os = Object.create(null);
const Ei = e=>Ne(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function rL(e, t={}) {
    let n = !1;
    const r = t.onError || $w;
    return t.onError = i=>{
        n = !0,
        r(i)
    }
    ,
    {
        ...bk(e, t),
        detectError: n
    }
}
function iL(e, t) {
    if (ne(e)) {
        ot(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || nL)(e)
          , i = os[r];
        if (i)
            return i;
        const {ast: o, detectError: s} = rL(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = Qa(o);
        return s ? a : os[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = os[n];
            return r || (os[n] = Qa(e))
        } else
            return Qa(e)
    }
}
const Dd = ()=>""
  , Qt = e=>Qe(e);
function Nd(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: o, fallbackLocale: s, messages: a} = e
      , [l,c] = $l(...t)
      , u = ot(c.missingWarn) ? c.missingWarn : e.missingWarn
      , f = ot(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , d = ot(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , m = !!c.resolvedMessage
      , _ = ne(c.default) || ot(c.default) ? ot(c.default) ? o ? l : ()=>l : c.default : n ? o ? l : ()=>l : ""
      , b = n || _ !== ""
      , S = yu(e, c);
    d && oL(c);
    let[g,E,p] = m ? [l, S, a[S] || {}] : Eg(e, l, S, s, f, u)
      , y = g
      , T = l;
    if (!m && !(ne(y) || Ei(y) || Qt(y)) && b && (y = _,
    T = y),
    !m && (!(ne(y) || Ei(y) || Qt(y)) || !ne(E)))
        return i ? fa : l;
    let A = !1;
    const L = ()=>{
        A = !0
    }
      , C = Qt(y) ? y : Tg(e, l, E, y, T, L);
    if (A)
        return y;
    const O = lL(e, E, p, c)
      , D = Uk(O)
      , F = sL(e, C, D)
      , U = r ? r(F, l) : F;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: ne(l) ? l : Qt(y) ? y.key : "",
            locale: E || (Qt(y) ? y.locale : ""),
            format: ne(y) ? y : Qt(y) ? y.source : "",
            message: U
        };
        Z.meta = ut({}, e.__meta, Zk() || {}),
        Fk(Z)
    }
    return U
}
function oL(e) {
    lt(e.list) ? e.list = e.list.map(t=>ne(t) ? Ed(t) : t) : Ne(e.named) && Object.keys(e.named).forEach(t=>{
        ne(e.named[t]) && (e.named[t] = Ed(e.named[t]))
    }
    )
}
function Eg(e, t, n, r, i, o) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: c} = e
      , u = c(e, r, n);
    let f = {}, d, m = null;
    const _ = "translate";
    for (let b = 0; b < u.length && (d = u[b],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(ne(m) || Ei(m) || Qt(m))); b++) {
        const S = vu(e, t, d, o, _);
        S !== t && (m = S)
    }
    return [m, d, f]
}
function Tg(e, t, n, r, i, o) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (Qt(r)) {
        const c = r;
        return c.locale = c.locale || n,
        c.key = c.key || t,
        c
    }
    if (s == null) {
        const c = ()=>r;
        return c.locale = n,
        c.key = t,
        c
    }
    const l = s(r, aL(e, n, i, r, a, o));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function sL(e, t, n) {
    return t(n)
}
function $l(...e) {
    const [t,n,r] = e
      , i = {};
    if (!ne(t) && !_t(t) && !Qt(t) && !Ei(t))
        throw jn(kn.INVALID_ARGUMENT);
    const o = _t(t) ? String(t) : (Qt(t),
    t);
    return _t(n) ? i.plural = n : ne(n) ? i.default = n : xe(n) && !ca(n) ? i.named = n : lt(n) && (i.list = n),
    _t(r) ? i.plural = r : ne(r) ? i.default = r : xe(r) && ut(i, r),
    [o, i]
}
function aL(e, t, n, r, i, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: i,
        onError: s=>{
            throw o && o(s),
            s
        }
        ,
        onCacheKey: s=>Yw(t, n, s)
    }
}
function lL(e, t, n, r) {
    const {modifiers: i, pluralRules: o, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u} = e
      , d = {
        locale: t,
        modifiers: i,
        pluralRules: o,
        messages: m=>{
            let _ = s(n, m);
            if (_ == null && u) {
                const [,,b] = Eg(u, m, t, a, l, c);
                _ = s(b, m)
            }
            if (ne(_) || Ei(_)) {
                let b = !1;
                const g = Tg(e, m, t, _, m, ()=>{
                    b = !0
                }
                );
                return b ? Dd : g
            } else
                return Qt(_) ? _ : Dd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    _t(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Vd(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,c,u,f] = ec(...t)
      , d = ot(u.missingWarn) ? u.missingWarn : e.missingWarn;
    ot(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = yu(e, u)
      , b = s(e, i, _);
    if (!ne(l) || l === "")
        return new Intl.DateTimeFormat(_,f).format(c);
    let S = {}, g, E = null;
    const p = "datetime format";
    for (let A = 0; A < b.length && (g = b[A],
    S = n[g] || {},
    E = S[l],
    !xe(E)); A++)
        vu(e, l, g, d, p);
    if (!xe(E) || !ne(g))
        return r ? fa : l;
    let y = `${g}__${l}`;
    ca(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.DateTimeFormat(g,ut({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(c) : T.format(c)
}
const Sg = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function ec(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {}, a;
    if (ne(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw jn(kn.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw jn(kn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Ww(t)) {
        if (isNaN(t.getTime()))
            throw jn(kn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (_t(t))
        a = t;
    else
        throw jn(kn.INVALID_ARGUMENT);
    return ne(n) ? o.key = n : xe(n) && Object.keys(n).forEach(l=>{
        Sg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ne(r) ? o.locale = r : xe(r) && (s = r),
    xe(i) && (s = i),
    [o.key || "", a, o, s]
}
function Ud(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function Bd(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,c,u,f] = tc(...t)
      , d = ot(u.missingWarn) ? u.missingWarn : e.missingWarn;
    ot(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = yu(e, u)
      , b = s(e, i, _);
    if (!ne(l) || l === "")
        return new Intl.NumberFormat(_,f).format(c);
    let S = {}, g, E = null;
    const p = "number format";
    for (let A = 0; A < b.length && (g = b[A],
    S = n[g] || {},
    E = S[l],
    !xe(E)); A++)
        vu(e, l, g, d, p);
    if (!xe(E) || !ne(g))
        return r ? fa : l;
    let y = `${g}__${l}`;
    ca(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.NumberFormat(g,ut({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(c) : T.format(c)
}
const Ag = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function tc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {};
    if (!_t(t))
        throw jn(kn.INVALID_ARGUMENT);
    const a = t;
    return ne(n) ? o.key = n : xe(n) && Object.keys(n).forEach(l=>{
        Ag.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ne(r) ? o.locale = r : xe(r) && (s = r),
    xe(i) && (s = i),
    [o.key || "", a, o, s]
}
function xd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
    }
}
Ek();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const cL = "9.9.1";
function uL() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (hu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const wg = jk.__EXTEND_POINT__
  , er = mu(wg);
er(),
er(),
er(),
er(),
er(),
er(),
er(),
er();
const kg = kn.__EXTEND_POINT__
  , Pt = mu(kg)
  , on = {
    UNEXPECTED_RETURN_TYPE: kg,
    INVALID_ARGUMENT: Pt(),
    MUST_BE_CALL_SETUP_TOP: Pt(),
    NOT_INSTALLED: Pt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Pt(),
    REQUIRED_VALUE: Pt(),
    INVALID_VALUE: Pt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Pt(),
    NOT_INSTALLED_WITH_PROVIDE: Pt(),
    UNEXPECTED_ERROR: Pt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Pt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Pt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Pt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Pt(),
    __EXTEND_POINT__: Pt()
};
function mn(e, ...t) {
    return ua(e, null, void 0)
}
const nc = Tr("__translateVNode")
  , rc = Tr("__datetimeParts")
  , ic = Tr("__numberParts")
  , fL = Tr("__setPluralRules")
  , dL = Tr("__injectWithOption")
  , oc = Tr("__dispose");
function vo(e) {
    if (!Ne(e))
        return e;
    for (const t in e)
        if (Ns(e, t))
            if (!t.includes("."))
                Ne(e[t]) && vo(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let i = e
                  , o = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in i || (i[n[s]] = {}),
                    !Ne(i[n[s]])) {
                        o = !0;
                        break
                    }
                    i = i[n[s]]
                }
                o || (i[n[r]] = e[t],
                delete e[t]),
                Ne(i[n[r]]) && vo(i[n[r]])
            }
    return e
}
function Lg(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = xe(n) ? n : lt(r) ? {} : {
        [e]: {}
    };
    if (lt(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: c} = a;
            l ? (s[l] = s[l] || {},
            jr(c, s[l])) : jr(c, s)
        } else
            ne(a) && jr(JSON.parse(a), s)
    }
    ),
    i == null && o)
        for (const a in s)
            Ns(s, a) && vo(s[a]);
    return s
}
function Cg(e) {
    return e.type
}
function hL(e, t, n) {
    let r = Ne(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = Lg(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const i = Object.keys(r);
    i.length && i.forEach(o=>{
        e.mergeLocaleMessage(o, r[o])
    }
    );
    {
        if (Ne(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(s=>{
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Ne(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(s=>{
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function Fd(e) {
    return Xe(qr, null, e, 0)
}
const Hd = "__INTLIFY_META__"
  , jd = ()=>[]
  , pL = ()=>!1;
let Kd = 0;
function Yd(e) {
    return (t,n,r,i)=>e(n, r, yn() || void 0, i)
}
const mL = ()=>{
    const e = yn();
    let t = null;
    return e && (t = Cg(e)[Hd]) ? {
        [Hd]: t
    } : null
}
;
function Og(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Ms ? le : hn;
    let a = ot(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : ne(e.locale) ? e.locale : Vs)
      , c = s(n && a ? n.fallbackLocale.value : ne(e.fallbackLocale) || lt(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , u = s(Lg(l.value, e))
      , f = s(xe(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(xe(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : ot(e.missingWarn) || Ds(e.missingWarn) ? e.missingWarn : !0
      , _ = n ? n.fallbackWarn : ot(e.fallbackWarn) || Ds(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = n ? n.fallbackRoot : ot(e.fallbackRoot) ? e.fallbackRoot : !0
      , S = !!e.fallbackFormat
      , g = Qe(e.missing) ? e.missing : null
      , E = Qe(e.missing) ? Yd(e.missing) : null
      , p = Qe(e.postTranslation) ? e.postTranslation : null
      , y = n ? n.warnHtmlMessage : ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , T = !!e.escapeParameter;
    const A = n ? n.modifiers : xe(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || n && n.pluralRules, C;
    C = (()=>{
        i && Id(null);
        const I = {
            version: cL,
            locale: l.value,
            fallbackLocale: c.value,
            messages: u.value,
            modifiers: A,
            pluralRules: L,
            missing: E === null ? void 0 : E,
            missingWarn: m,
            fallbackWarn: _,
            fallbackFormat: S,
            unresolving: !0,
            postTranslation: p === null ? void 0 : p,
            warnHtmlMessage: y,
            escapeParameter: T,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        I.datetimeFormats = f.value,
        I.numberFormats = d.value,
        I.__datetimeFormatters = xe(C) ? C.__datetimeFormatters : void 0,
        I.__numberFormatters = xe(C) ? C.__numberFormatters : void 0;
        const x = eL(I);
        return i && Id(x),
        x
    }
    )(),
    Ui(C, l.value, c.value);
    function D() {
        return [l.value, c.value, u.value, f.value, d.value]
    }
    const F = ue({
        get: ()=>l.value,
        set: I=>{
            l.value = I,
            C.locale = l.value
        }
    })
      , U = ue({
        get: ()=>c.value,
        set: I=>{
            c.value = I,
            C.fallbackLocale = c.value,
            Ui(C, l.value, I)
        }
    })
      , Z = ue(()=>u.value)
      , W = ue(()=>f.value)
      , K = ue(()=>d.value);
    function N() {
        return Qe(p) ? p : null
    }
    function Y(I) {
        p = I,
        C.postTranslation = I
    }
    function B() {
        return g
    }
    function ae(I) {
        I !== null && (E = Yd(I)),
        g = I,
        C.missing = E
    }
    const j = (I,x,se,he,Ye,it)=>{
        D();
        let gt;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (C.fallbackContext = n ? $k() : void 0),
            gt = I(C)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (C.fallbackContext = void 0)
        }
        if (se !== "translate exists" && _t(gt) && gt === fa || se === "translate exists" && !gt) {
            const [Gn,Aa] = x();
            return n && b ? he(n) : Ye(Gn)
        } else {
            if (it(gt))
                return gt;
            throw mn(on.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ce(...I) {
        return j(x=>Reflect.apply(Nd, null, [x, ...I]), ()=>$l(...I), "translate", x=>Reflect.apply(x.t, x, [...I]), x=>x, x=>ne(x))
    }
    function _e(...I) {
        const [x,se,he] = I;
        if (he && !Ne(he))
            throw mn(on.INVALID_ARGUMENT);
        return ce(x, se, ut({
            resolvedMessage: !0
        }, he || {}))
    }
    function Ke(...I) {
        return j(x=>Reflect.apply(Vd, null, [x, ...I]), ()=>ec(...I), "datetime format", x=>Reflect.apply(x.d, x, [...I]), ()=>Od, x=>ne(x))
    }
    function Je(...I) {
        return j(x=>Reflect.apply(Bd, null, [x, ...I]), ()=>tc(...I), "number format", x=>Reflect.apply(x.n, x, [...I]), ()=>Od, x=>ne(x))
    }
    function at(I) {
        return I.map(x=>ne(x) || _t(x) || ot(x) ? Fd(String(x)) : x)
    }
    const H = {
        normalize: at,
        interpolate: I=>I,
        type: "vnode"
    };
    function te(...I) {
        return j(x=>{
            let se;
            const he = x;
            try {
                he.processor = H,
                se = Reflect.apply(Nd, null, [he, ...I])
            } finally {
                he.processor = null
            }
            return se
        }
        , ()=>$l(...I), "translate", x=>x[nc](...I), x=>[Fd(x)], x=>lt(x))
    }
    function Q(...I) {
        return j(x=>Reflect.apply(Bd, null, [x, ...I]), ()=>tc(...I), "number format", x=>x[ic](...I), jd, x=>ne(x) || lt(x))
    }
    function $(...I) {
        return j(x=>Reflect.apply(Vd, null, [x, ...I]), ()=>ec(...I), "datetime format", x=>x[rc](...I), jd, x=>ne(x) || lt(x))
    }
    function ve(I) {
        L = I,
        C.pluralRules = L
    }
    function Ue(I, x) {
        return j(()=>{
            if (!I)
                return !1;
            const se = ne(x) ? x : l.value
              , he = k(se)
              , Ye = C.messageResolver(he, I);
            return Ei(Ye) || Qt(Ye) || ne(Ye)
        }
        , ()=>[I], "translate exists", se=>Reflect.apply(se.te, se, [I, x]), pL, se=>ot(se))
    }
    function h(I) {
        let x = null;
        const se = mg(C, c.value, l.value);
        for (let he = 0; he < se.length; he++) {
            const Ye = u.value[se[he]] || {}
              , it = C.messageResolver(Ye, I);
            if (it != null) {
                x = it;
                break
            }
        }
        return x
    }
    function v(I) {
        const x = h(I);
        return x ?? (n ? n.tm(I) || {} : {})
    }
    function k(I) {
        return u.value[I] || {}
    }
    function R(I, x) {
        if (o) {
            const se = {
                [I]: x
            };
            for (const he in se)
                Ns(se, he) && vo(se[he]);
            x = se[I]
        }
        u.value[I] = x,
        C.messages = u.value
    }
    function V(I, x) {
        u.value[I] = u.value[I] || {};
        const se = {
            [I]: x
        };
        if (o)
            for (const he in se)
                Ns(se, he) && vo(se[he]);
        x = se[I],
        jr(x, u.value[I]),
        C.messages = u.value
    }
    function q(I) {
        return f.value[I] || {}
    }
    function X(I, x) {
        f.value[I] = x,
        C.datetimeFormats = f.value,
        Ud(C, I, x)
    }
    function z(I, x) {
        f.value[I] = ut(f.value[I] || {}, x),
        C.datetimeFormats = f.value,
        Ud(C, I, x)
    }
    function ee(I) {
        return d.value[I] || {}
    }
    function J(I, x) {
        d.value[I] = x,
        C.numberFormats = d.value,
        xd(C, I, x)
    }
    function oe(I, x) {
        d.value[I] = ut(d.value[I] || {}, x),
        C.numberFormats = d.value,
        xd(C, I, x)
    }
    Kd++,
    n && Ms && (Fe(n.locale, I=>{
        a && (l.value = I,
        C.locale = I,
        Ui(C, l.value, c.value))
    }
    ),
    Fe(n.fallbackLocale, I=>{
        a && (c.value = I,
        C.fallbackLocale = I,
        Ui(C, l.value, c.value))
    }
    ));
    const ie = {
        id: Kd,
        locale: F,
        fallbackLocale: U,
        get inheritLocale() {
            return a
        },
        set inheritLocale(I) {
            a = I,
            I && n && (l.value = n.locale.value,
            c.value = n.fallbackLocale.value,
            Ui(C, l.value, c.value))
        },
        get availableLocales() {
            return Object.keys(u.value).sort()
        },
        messages: Z,
        get modifiers() {
            return A
        },
        get pluralRules() {
            return L || {}
        },
        get isGlobal() {
            return i
        },
        get missingWarn() {
            return m
        },
        set missingWarn(I) {
            m = I,
            C.missingWarn = m
        },
        get fallbackWarn() {
            return _
        },
        set fallbackWarn(I) {
            _ = I,
            C.fallbackWarn = _
        },
        get fallbackRoot() {
            return b
        },
        set fallbackRoot(I) {
            b = I
        },
        get fallbackFormat() {
            return S
        },
        set fallbackFormat(I) {
            S = I,
            C.fallbackFormat = S
        },
        get warnHtmlMessage() {
            return y
        },
        set warnHtmlMessage(I) {
            y = I,
            C.warnHtmlMessage = I
        },
        get escapeParameter() {
            return T
        },
        set escapeParameter(I) {
            T = I,
            C.escapeParameter = I
        },
        t: ce,
        getLocaleMessage: k,
        setLocaleMessage: R,
        mergeLocaleMessage: V,
        getPostTranslationHandler: N,
        setPostTranslationHandler: Y,
        getMissingHandler: B,
        setMissingHandler: ae,
        [fL]: ve
    };
    return ie.datetimeFormats = W,
    ie.numberFormats = K,
    ie.rt = _e,
    ie.te = Ue,
    ie.tm = v,
    ie.d = Ke,
    ie.n = Je,
    ie.getDateTimeFormat = q,
    ie.setDateTimeFormat = X,
    ie.mergeDateTimeFormat = z,
    ie.getNumberFormat = ee,
    ie.setNumberFormat = J,
    ie.mergeNumberFormat = oe,
    ie[dL] = r,
    ie[nc] = te,
    ie[rc] = $,
    ie[ic] = Q,
    ie
}
const _u = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e=>e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function gL({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,i)=>[...r, ...i.type === ht ? i.children : [i]], []) : t.reduce((n,r)=>{
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , {})
}
function Rg(e) {
    return ht
}
const yL = Ve({
    name: "i18n-t",
    props: ut({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>_t(e) || !isNaN(e)
        }
    }, _u),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || da({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = ne(e.plural) ? +e.plural : e.plural);
            const a = gL(t, o)
              , l = i[nc](e.keypath, a, s)
              , c = ut({}, r)
              , u = ne(e.tag) || Ne(e.tag) ? e.tag : Rg();
            return ct(u, c, l)
        }
    }
})
  , qd = yL;
function vL(e) {
    return lt(e) && !ne(e[0])
}
function Ig(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        ne(e.format) ? s.key = e.format : Ne(e.format) && (ne(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? ut({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let c = [s.key];
        lt(l) ? c = l.map((d,m)=>{
            const _ = i[d.type]
              , b = _ ? _({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return vL(b) && (b[0].key = `${d.type}-${m}`),
            b
        }
        ) : ne(l) && (c = [l]);
        const u = ut({}, o)
          , f = ne(e.tag) || Ne(e.tag) ? e.tag : Rg();
        return ct(f, u, c)
    }
}
const _L = Ve({
    name: "i18n-n",
    props: ut({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, _u),
    setup(e, t) {
        const n = e.i18n || da({
            useScope: "parent",
            __useComponent: !0
        });
        return Ig(e, t, Ag, (...r)=>n[ic](...r))
    }
})
  , Wd = _L
  , bL = Ve({
    name: "i18n-d",
    props: ut({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, _u),
    setup(e, t) {
        const n = e.i18n || da({
            useScope: "parent",
            __useComponent: !0
        });
        return Ig(e, t, Sg, (...r)=>n[rc](...r))
    }
})
  , Gd = bL;
function EL(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function TL(e) {
    const t = s=>{
        const {instance: a, modifiers: l, value: c} = s;
        if (!a || !a.$)
            throw mn(on.UNEXPECTED_ERROR);
        const u = EL(e, a.$)
          , f = Jd(c);
        return [Reflect.apply(u.t, u, [...zd(f)]), u]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,c] = t(a);
            Ms && e.global === c && (s.__i18nWatcher = Fe(c.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = c,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Ms && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , c = Jd(a);
                s.textContent = Reflect.apply(l.t, l, [...zd(c)])
            }
        }
        ,
        getSSRProps: s=>{
            const [a] = t(s);
            return {
                textContent: a
            }
        }
    }
}
function Jd(e) {
    if (ne(e))
        return {
            path: e
        };
    if (xe(e)) {
        if (!("path"in e))
            throw mn(on.REQUIRED_VALUE, "path");
        return e
    } else
        throw mn(on.INVALID_VALUE)
}
function zd(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , a = r || {};
    return ne(n) && (s.locale = n),
    _t(i) && (s.plural = i),
    _t(o) && (s.plural = o),
    [t, a, s]
}
function SL(e, t, ...n) {
    const r = xe(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (ot(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : qd.name, "I18nT"].forEach(s=>e.component(s, qd)),
    [Wd.name, "I18nN"].forEach(s=>e.component(s, Wd)),
    [Gd.name, "I18nD"].forEach(s=>e.component(s, Gd))),
    e.directive("t", TL(t))
}
const AL = Tr("global-vue-i18n");
function wL(e={}, t) {
    const n = ot(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , i = new Map
      , [o,s] = kL(e)
      , a = Tr("");
    function l(f) {
        return i.get(f) || null
    }
    function c(f, d) {
        i.set(f, d)
    }
    function u(f) {
        i.delete(f)
    }
    {
        const f = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return r
            },
            async install(d, ...m) {
                if (d.__VUE_I18N_SYMBOL__ = a,
                d.provide(d.__VUE_I18N_SYMBOL__, f),
                xe(m[0])) {
                    const S = m[0];
                    f.__composerExtend = S.__composerExtend,
                    f.__vueI18nExtend = S.__vueI18nExtend
                }
                let _ = null;
                n && (_ = DL(d, f.global)),
                SL(d, f, ...m);
                const b = d.unmount;
                d.unmount = ()=>{
                    _ && _(),
                    f.dispose(),
                    b()
                }
            },
            get global() {
                return s
            },
            dispose() {
                o.stop()
            },
            __instances: i,
            __getInstance: l,
            __setInstance: c,
            __deleteInstance: u
        };
        return f
    }
}
function da(e={}) {
    const t = yn();
    if (t == null)
        throw mn(on.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw mn(on.NOT_INSTALLED);
    const n = LL(t)
      , r = OL(n)
      , i = Cg(t)
      , o = CL(e, i);
    if (o === "global")
        return hL(r, e, i),
        r;
    if (o === "parent") {
        let l = RL(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = ut({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        r && (l.__root = r),
        a = Og(l),
        s.__composerExtend && (a[oc] = s.__composerExtend(a)),
        PL(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function kL(e, t, n) {
    const r = Co();
    {
        const i = r.run(()=>Og(e));
        if (i == null)
            throw mn(on.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function LL(e) {
    {
        const t = bt(e.isCE ? AL : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw mn(e.isCE ? on.NOT_INSTALLED_WITH_PROVIDE : on.UNEXPECTED_ERROR);
        return t
    }
}
function CL(e, t) {
    return ca(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function OL(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function RL(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = IL(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(o)),
        r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function IL(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function PL(e, t, n) {
    Rt(()=>{}
    , t),
    Ci(()=>{
        const r = n;
        e.__deleteInstance(t);
        const i = r[oc];
        i && (i(),
        delete r[oc])
    }
    , t)
}
const ML = ["locale", "fallbackLocale", "availableLocales"]
  , Qd = ["t", "rt", "d", "n", "tm", "te"];
function DL(e, t) {
    const n = Object.create(null);
    return ML.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw mn(on.UNEXPECTED_ERROR);
        const s = st(o.value) ? {
            get() {
                return o.value.value
            },
            set(a) {
                o.value.value = a
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, i, s)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Qd.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o || !o.value)
            throw mn(on.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${i}`, o)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        Qd.forEach(i=>{
            delete e.config.globalProperties[`$${i}`]
        }
        )
    }
}
uL();
Jk(iL);
zk(Ok);
Qk(mg);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = hu();
    e.__INTLIFY__ = !0,
    Bk(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const Ge = Nn("helper", {
    state: ()=>({}),
    actions: {
        camelToSnake(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (t,n)=>"_" + n.toLowerCase()).replace(/^_/, "")
        },
        compareWithEmptyOldArray(e, t) {
            return e.filter(i=>i !== null).length === t ? !0 : e.find(i=>i !== null) !== void 0
        },
        composeTelegramName(e) {
            let t = e == null ? void 0 : e.firstName;
            return e != null && e.lastName && t && (t = `${t} ${e == null ? void 0 : e.lastName}`),
            !t && (e != null && e.username) && (t = e == null ? void 0 : e.username),
            (!t || t == "ㅤ") && (t = "Hamster"),
            t
        },
        composeUsername(e, t, n) {
            let r = e;
            return t && r && (r = `${r} ${t}`),
            !r && n && (r = n),
            (!r || r == "ㅤ") && (r = "Hamster"),
            r
        },
        getLocaleForDate() {
            const {locale: e} = da();
            return e.value === "tl" ? "tl-ph" : e.value
        },
        getNowTimestamp() {
            return Math.floor(new Date().getTime() / 1e3) + Ut().dtServer
        },
        getNowTimestampWithMS() {
            return new Date().getTime()
        },
        getSecondsUntilMidnightUTC() {
            const e = new Date
              , t = new Date(e);
            return t.setUTCHours(24, 0, 0, 0),
            Math.floor((t.getTime() - e.getTime()) / 1e3)
        },
        getTelegramAvatar(e, t=0, n=160) {
            var o, s;
            const r = {
                160: 0,
                320: 1,
                640: 1
            }
              , i = (s = (o = e == null ? void 0 : e.photos) == null ? void 0 : o[t]) == null ? void 0 : s[r[n]];
            return i && `${re().$config.public.cdnUrl}/${i.fileUniqueId}.jpg`
        },
        numberFormat(e, t=!0) {
            t = e < 1e3 ? !1 : t;
            const n = t ? 2 : 0
              , r = ["", "K", "M", "B", "T", "Qua", "Qui", "S"]
              , i = Math.abs(e)
              , o = i < 1 ? 0 : Math.floor(Math.log10(i) / 3)
              , s = r[o] ?? "😈"
              , a = e / Math.pow(10, o * 3)
              , l = Math.pow(10, n)
              , c = new Intl.NumberFormat(re().$i18n.locale.value,{
                maximumFractionDigits: n,
                minimumFractionDigits: 0
            }).format(t ? Math.round(a * l) / l : Math.floor(e));
            return t ? `${c}${s}` : c
        },
        padWithZero(e) {
            return e.toString().padStart(2, "0")
        },
        secondsToHours(e) {
            const t = e / 3600;
            return Math.round(t * 100) / 100
        },
        showErrorPush() {
            Cn.error({
                message: `${re().$i18n.t("messages.oops")}`
            })
        },
        changeRandomCharToUppercase(e) {
            const t = "https://t.me/";
            let n = !1
              , r = e;
            e.startsWith(t) && (n = !0,
            r = e.substring(t.length));
            let i;
            do
                i = Math.floor(Math.random() * r.length);
            while (r.charAt(i) === "_");
            let o = r.charAt(i);
            return o === o.toUpperCase() ? o = o.toLowerCase() : o = o.toUpperCase(),
            r = r.substring(0, i) + o + r.substring(i + 1),
            n && (r = t + r),
            r
        },
        secondsUntilMidnightUTC() {
            const e = new Date;
            return (Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + 1) - e.getTime()) / 1e3
        },
        trackEvent(e, t=null) {
            const n = {
                ...t && {
                    ...t
                }
            };
            try {
                re().$config.public.appEnv !== "production" ? console.info(`Sending ${e} event to GA4`, n) : gtag("event", e, n)
            } catch (r) {
                re().$config.public.appEnv !== "production" && console.error(`Error sending ${e} event to GA4:`, r)
            }
        },
        isDevelopment() {
            return re().$config.public.appEnv !== "production"
        },
        shrinkString(e, t=8) {
            return e.length >= t * 2 ? `${e.slice(0, t)}...${e.slice(-t)}` : e
        }
    }
})
  , NL = {
    path: "/",
    watch: !0,
    decode: e=>ho(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function VL(e, t) {
    var l;
    const n = {
        ...NL,
        ...t
    }
      , r = Xd(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const o = i !== void 0 && i <= 0
      , s = Tn(o ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = i && !o ? xL(s, i) : le(s);
    {
        const c = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , u = ()=>{
            n.readonly || gE(a.value, r[e]) || (BL(e, a.value, n),
            r[e] = Tn(a.value),
            c == null || c.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var b;
            const _ = m.refresh ? (b = Xd(n)) == null ? void 0 : b[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = _,
            Kt(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        Oo() && Js(()=>{
            d = !0,
            u(),
            c == null || c.close()
        }
        ),
        c && (c.onmessage = ({data: m})=>f(m)),
        n.watch ? Fe(a, ()=>{
            d || u()
        }
        , {
            deep: n.watch !== "shallow"
        }) : u()
    }
    return a
}
function Xd(e={}) {
    return cE(document.cookie, e)
}
function UL(e, t, n={}) {
    return t == null ? Df(e, t, {
        ...n,
        maxAge: -1
    }) : Df(e, t, n)
}
function BL(e, t, n={}) {
    document.cookie = UL(e, t, n)
}
const Zd = 2147483647;
function xL(e, t) {
    let n, r = 0;
    return Oo() && Js(()=>{
        clearTimeout(n)
    }
    ),
    yp((i,o)=>{
        function s() {
            clearTimeout(n);
            const a = t - r
              , l = a < Zd ? a : Zd;
            n = setTimeout(()=>{
                if (r += l,
                r < t)
                    return s();
                e = void 0,
                o()
            }
            , l)
        }
        return {
            get() {
                return i(),
                e
            },
            set(a) {
                s(),
                e = a,
                o()
            }
        }
    }
    )
}
const Gr = ["de", "en", "es", "fr", "hi", "id", "pt", "ru", "th", "tl", "tr", "uz", "vi"]
  , sc = {
    de: [{
        key: "../locales/de.json",
        load: ()=>w(()=>import("./de.Dx5abXtM.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    en: [{
        key: "../locales/en.json",
        load: ()=>w(()=>import("./en.BRqRcNho.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>w(()=>import("./es.sf3wJG7h.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    fr: [{
        key: "../locales/fr.json",
        load: ()=>w(()=>import("./fr.CWDSSFIH.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>w(()=>import("./hi.B9USUiJt.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>w(()=>import("./id.BId40L2r.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>w(()=>import("./pt.BqAnsJui.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>w(()=>import("./ru.ByCg1X-R.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>w(()=>import("./th.dQyNkvnD.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>w(()=>import("./tl.ijMC3y0X.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>w(()=>import("./tr.CwaQPtAO.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>w(()=>import("./uz.DAMohiuH.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>w(()=>import("./vi.klsCllzC.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , FL = [()=>w(()=>import("./i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
  , pt = {
    experimental: {
        localeDetector: ""
    },
    bundle: {
        compositionOnly: !0,
        runtimeOnly: !1,
        fullInstall: !0,
        dropMessageCompiler: !1
    },
    compilation: {
        jit: !0,
        strictMessage: !1,
        escapeHtml: !1
    },
    customBlocks: {
        defaultSFCLang: "json",
        globalSFCScope: !1
    },
    vueI18n: "./i18n.config.ts",
    locales: [{
        code: "de",
        name: "Deutsch",
        files: ["locales/de.json"]
    }, {
        code: "en",
        name: "English",
        files: ["locales/en.json"]
    }, {
        code: "es",
        name: "Español",
        files: ["locales/es.json"]
    }, {
        code: "fr",
        name: "Français",
        files: ["locales/fr.json"]
    }, {
        code: "hi",
        name: "हिन्दी (Hindi)",
        files: ["locales/hi.json"]
    }, {
        code: "id",
        name: "Bahasa Indonesia",
        files: ["locales/id.json"]
    }, {
        code: "pt",
        name: "Português",
        files: ["locales/pt.json"]
    }, {
        code: "ru",
        name: "Русский",
        files: ["locales/ru.json"]
    }, {
        code: "th",
        name: "ภาษาไทย (Thai)",
        files: ["locales/th.json"]
    }, {
        code: "tl",
        name: "Tagalog",
        files: ["locales/tl.json"]
    }, {
        code: "tr",
        name: "Türkçe",
        files: ["locales/tr.json"]
    }, {
        code: "uz",
        name: "O'zbekcha",
        files: ["locales/uz.json"]
    }, {
        code: "vi",
        name: "Tiếng Việt",
        files: ["locales/vi.json"]
    }],
    defaultLocale: "en",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    trailingSlash: !1,
    defaultLocaleRouteNameSuffix: "default",
    strategy: "prefix_except_default",
    lazy: !0,
    langDir: "locales",
    rootRedirect: null,
    detectBrowserLanguage: {
        alwaysRedirect: !0,
        cookieCrossOrigin: !1,
        cookieDomain: null,
        cookieKey: "i18n_redirected",
        cookieSecure: !1,
        fallbackLocale: "en",
        redirectOn: "root",
        useCookie: !0
    },
    differentDomains: !1,
    baseUrl: "",
    dynamicRouteParams: !1,
    customRoutes: "page",
    pages: {},
    skipSettingLocaleOnNavigate: !1,
    types: "composition",
    debug: !1,
    parallelPlugin: !1,
    i18nModules: []
}
  , ha = {
    experimental: {
        localeDetector: ""
    },
    bundle: {
        compositionOnly: !0,
        runtimeOnly: !1,
        fullInstall: !0,
        dropMessageCompiler: !1
    },
    compilation: {
        jit: !0,
        strictMessage: !0,
        escapeHtml: !1
    },
    customBlocks: {
        defaultSFCLang: "json",
        globalSFCScope: !1
    },
    vueI18n: "",
    locales: [],
    defaultLocale: "",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    trailingSlash: !1,
    defaultLocaleRouteNameSuffix: "default",
    strategy: "prefix_except_default",
    lazy: !1,
    langDir: null,
    rootRedirect: null,
    detectBrowserLanguage: {
        alwaysRedirect: !1,
        cookieCrossOrigin: !1,
        cookieDomain: null,
        cookieKey: "i18n_redirected",
        cookieSecure: !1,
        fallbackLocale: "",
        redirectOn: "root",
        useCookie: !0
    },
    differentDomains: !1,
    baseUrl: "",
    dynamicRouteParams: !1,
    customRoutes: "page",
    pages: {},
    skipSettingLocaleOnNavigate: !1,
    types: "composition",
    debug: !1,
    parallelPlugin: !1
}
  , bu = [{
    code: "de",
    name: "Deutsch",
    files: [{
        path: "locales/de.json"
    }]
}, {
    code: "en",
    name: "English",
    files: [{
        path: "locales/en.json"
    }]
}, {
    code: "es",
    name: "Español",
    files: [{
        path: "locales/es.json"
    }]
}, {
    code: "fr",
    name: "Français",
    files: [{
        path: "locales/fr.json"
    }]
}, {
    code: "hi",
    name: "हिन्दी (Hindi)",
    files: [{
        path: "locales/hi.json"
    }]
}, {
    code: "id",
    name: "Bahasa Indonesia",
    files: [{
        path: "locales/id.json"
    }]
}, {
    code: "pt",
    name: "Português",
    files: [{
        path: "locales/pt.json"
    }]
}, {
    code: "ru",
    name: "Русский",
    files: [{
        path: "locales/ru.json"
    }]
}, {
    code: "th",
    name: "ภาษาไทย (Thai)",
    files: [{
        path: "locales/th.json"
    }]
}, {
    code: "tl",
    name: "Tagalog",
    files: [{
        path: "locales/tl.json"
    }]
}, {
    code: "tr",
    name: "Türkçe",
    files: [{
        path: "locales/tr.json"
    }]
}, {
    code: "uz",
    name: "O'zbekcha",
    files: [{
        path: "locales/uz.json"
    }]
}, {
    code: "vi",
    name: "Tiếng Việt",
    files: [{
        path: "locales/vi.json"
    }]
}]
  , HL = !1
  , jL = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , KL = ""
  , YL = "nuxtI18n"
  , qL = typeof window < "u";
function WL(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        ne(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function GL(e) {
    return e != null && "global"in e && "mode"in e
}
function JL(e) {
    return e != null && !("__composer"in e) && "locale"in e && st(e.locale)
}
function Pg(e) {
    return e != null && "__composer"in e
}
function Ar(e) {
    return GL(e) ? e.global : e
}
function Ti(e) {
    const t = Ar(e);
    return JL(t) ? t : Pg(t) ? t.__composer : t
}
function pa(e) {
    return G(Ar(e).locale)
}
function zL(e) {
    return G(Ar(e).locales)
}
function QL(e) {
    return G(Ar(e).localeCodes)
}
function Mg(e, t) {
    const n = Ar(e);
    st(n.locale) ? n.locale.value = t : n.locale = t
}
function Dg(e) {
    return ne(e) ? e : Jw(e) ? e.toString() : "(null)"
}
function $d(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: i, defaultLocaleRouteNameSuffix: o}) {
    let s = Dg(e) + (r === "no_prefix" ? "" : i + t);
    return t === n && r === "prefix_and_default" && (s += i + o),
    s
}
function eh(e, t) {
    return Qe(e) ? e(t) : e
}
function XL(e, t) {
    const n = [];
    for (const [r,i] of t.entries()) {
        const o = e.find(s=>s.iso.toLowerCase() === i.toLowerCase());
        if (o) {
            n.push({
                code: o.code,
                score: 1 - r / t.length
            });
            break
        }
    }
    for (const [r,i] of t.entries()) {
        const o = i.split("-")[0].toLowerCase()
          , s = e.find(a=>a.iso.split("-")[0].toLowerCase() === o);
        if (s) {
            n.push({
                code: s.code,
                score: .999 - r / t.length
            });
            break
        }
    }
    return n
}
const ZL = XL;
function $L(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const eC = $L;
function tC(e, t, {matcher: n=ZL, comparer: r=eC}={}) {
    const i = [];
    for (const s of e) {
        const {code: a} = s
          , l = s.iso || a;
        i.push({
            code: a,
            iso: l
        })
    }
    const o = n(i, t);
    return o.length > 1 && o.sort(r),
    o.length ? o[0].code : ""
}
function ac(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const zi = new Map;
async function nC(e, t) {
    const n = {
        messages: {}
    };
    for (const r of e) {
        const {default: i} = await r()
          , o = typeof i == "function" ? await t.runWithContext(async()=>await i()) : i;
        jr(o, n)
    }
    return n
}
function Ng(e, t) {
    let n = [];
    if (lt(e))
        n = e;
    else if (Ne(e)) {
        const r = [...t, "default"];
        for (const i of r)
            e[i] && (n = [...n, ...e[i].filter(Boolean)])
    } else
        ne(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function rC(e, t, n) {
    const {defaultLocale: r, initialLocale: i, localeCodes: o, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const c = Ng(s, [r, i]);
        await Promise.all(c.map(u=>th(u, t, e)))
    }
    const l = a ? [...new Set().add(r).add(i)] : o;
    return await Promise.all(l.map(c=>th(c, t, e))),
    e
}
async function iC(e, {key: t, load: n}) {
    let r = null;
    try {
        const i = await n().then(o=>o.default || o);
        Qe(i) ? r = await i(e) : (r = i,
        r != null && zi && zi.set(t, r))
    } catch (i) {
        console.error("Failed locale loading: " + i.message)
    }
    return r
}
async function lc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const i = {};
    for (const o of r) {
        let s = null;
        zi && zi.has(o.key) && o.cache ? s = zi.get(o.key) : s = await iC(e, o),
        s != null && jr(s, i)
    }
    n(e, i)
}
async function th(e, t, n) {
    await lc(e, t, (i,o)=>{
        const s = n[i] || {};
        jr(o, s),
        n[i] = s
    }
    )
}
function oC(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function sC(e) {
    const {fullPath: t, query: n, hash: r, name: i, path: o, params: s, meta: a, redirectedFrom: l, matched: c} = e;
    return {
        fullPath: t,
        params: s,
        query: n,
        hash: r,
        name: i,
        path: o,
        meta: a,
        matched: c,
        redirectedFrom: l
    }
}
function aC({router: e}, t, n, r) {
    var c, u;
    if (n !== "prefix")
        return e.resolve(t);
    const [i,o] = oC(t.path, 1)
      , s = `${i}${r}${o === "" ? o : `/${o}`}`
      , a = (u = (c = e.options) == null ? void 0 : c.routes) == null ? void 0 : u.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = ut({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const lC = new Set(["prefix_and_default", "prefix_except_default"]);
function cC(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && lC.has(r)) && r !== "no_prefix"
}
const uC = cC;
function Si(e) {
    const {routesNameSeparator: t} = pt
      , n = G(e);
    return n == null || !n.name ? void 0 : Dg(n.name).split(t)[0]
}
function ma(e, t, n) {
    var i;
    if (typeof t == "string" && Dn(t, {
        acceptRelative: !0
    }))
        return t;
    const r = ga(e, t, n);
    return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}
function Eu(e, t, n) {
    return ga(e, t, n) ?? void 0
}
function fC(e, t, n) {
    return ga(e, t, n) ?? void 0
}
function ga(e, t, n) {
    const {router: r, i18n: i} = e
      , o = n || pa(i)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: c, trailingSlash: u} = pt
      , f = kC();
    let d;
    if (ne(t))
        if (t[0] === "/") {
            const {pathname: b, search: S, hash: g} = Pl(t)
              , E = eu(S);
            d = {
                path: b,
                query: E,
                hash: g
            }
        } else
            d = {
                name: t
            };
    else
        d = t;
    let m = ut({}, d);
    if ((b=>"path"in b && !!b.path && !("name"in b))(m)) {
        const b = aC(e, m, c, o)
          , S = Si(b);
        ne(S) ? (m = {
            name: $d(S, o, {
                defaultLocale: a,
                strategy: c,
                routesNameSeparator: s,
                defaultLocaleRouteNameSuffix: l
            }),
            params: b.params,
            query: b.query,
            hash: b.hash
        },
        m.state = b.state) : (f({
            currentLocale: o,
            defaultLocale: a,
            strategy: c
        }) && (m.path = `/${o}${m.path}`),
        m.path = u ? fo(m.path, !0) : Po(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = Si(r.currentRoute.value)),
        m.name = $d(m.name, o, {
            defaultLocale: a,
            strategy: c,
            routesNameSeparator: s,
            defaultLocaleRouteNameSuffix: l
        });
    try {
        const b = r.resolve(m);
        return b.name ? b : r.resolve(t)
    } catch (b) {
        if (typeof b == "object" && "type"in b && b.type === 1)
            return null
    }
}
const dC = e=>e;
function hC(e) {
    var n;
    const t = e.meta || {};
    return ((n = G(t)) == null ? void 0 : n[YL]) || {}
}
function Ai(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , i = Si(r);
    if (!i)
        return "";
    const o = LC()
      , s = sC(r)
      , a = hC(r)[t]
      , l = {
        ...s,
        name: i,
        params: {
            ...s.params,
            ...a
        }
    }
      , c = ma(e, l, t);
    return o(c, t)
}
function Vg(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: i} = pt
      , o = Ti(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (G(o.locales) == null || G(o.baseUrl) == null)
        return s;
    const a = pa(e.i18n)
      , l = zL(e.i18n)
      , c = WL(l).find(d=>d.code === a) || {
        code: a
    }
      , u = c.iso
      , f = c.dir || i;
    return t && (s.htmlAttrs.dir = f),
    n && a && G(o.locales) && (u && (s.htmlAttrs.lang = u),
    s.link.push(...pC(e, G(l), r), ...mC(e, r, n)),
    s.meta.push(...gC(e, r, n), ...yC(c, u, r), ...vC(G(l), u, r))),
    s
}
function Tu() {
    const e = Ti(re().$i18n);
    return G(e.baseUrl)
}
function pC(e, t, n) {
    const r = Tu()
      , {defaultLocale: i, strategy: o} = pt
      , s = [];
    if (o === jL.NO_PREFIX)
        return s;
    const a = new Map;
    for (const l of t) {
        const c = l.iso;
        if (!c) {
            console.warn("Locale ISO code is required to generate alternate link");
            continue
        }
        const [u,f] = c.split("-");
        u && f && (l.isCatchallLocale || !a.has(u)) && a.set(u, l),
        a.set(c, l)
    }
    for (const [l,c] of a.entries()) {
        const u = Ai(e, c.code);
        u && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: cc(u, r),
            hreflang: l
        })
    }
    if (i) {
        const l = Ai(e, i);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: cc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function Ug(e, t, n) {
    const r = e.router.currentRoute.value
      , i = Eu(e, {
        ...r,
        name: Si(r)
    });
    if (!i)
        return "";
    let o = cc(i.path, t);
    const s = Ne(n) && n.canonicalQueries || []
      , a = i.query
      , l = new URLSearchParams;
    for (const u of s)
        if (u in a) {
            const f = a[u];
            lt(f) ? f.forEach(d=>l.append(u, d || "")) : l.append(u, f || "")
        }
    const c = l.toString();
    return c && (o = `${o}?${c}`),
    o
}
function mC(e, t, n) {
    const r = Tu()
      , i = Ug(e, r, n);
    return i ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: i
    }] : []
}
function gC(e, t, n) {
    const r = Tu()
      , i = Ug(e, r, n);
    return i ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: i
    }] : []
}
function yC(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: Bg(t)
    }]
}
function vC(e, t, n) {
    return e.filter(i=>i.iso && i.iso !== t).map(i=>({
        [n]: `i18n-og-alt-${i.iso}`,
        property: "og:locale:alternate",
        content: Bg(i.iso)
    }))
}
function Bg(e) {
    return (e || "").replace(/-/g, "_")
}
function cc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function _C(e, t) {
    return xo(e, "setLocale", t)
}
function bC(e, t) {
    return xo(e, "setLocaleCookie", t)
}
function EC(e, t, n) {
    return xo(e, "mergeLocaleMessage", t, n)
}
function TC(e, t, n, r, i) {
    return xo(e, "onBeforeLanguageSwitch", t, n, r, i)
}
function SC(e, t, n) {
    return xo(e, "onLanguageSwitched", t, n)
}
function Su(e) {
    return {
        i18n: e ?? re().$i18n,
        router: qt(),
        runtimeConfig: Wn()
    }
}
async function nh(e, t, n=!1) {
    const r = pt.differentDomains
      , i = (pt.detectBrowserLanguage && pt.detectBrowserLanguage.useCookie) ?? ha.detectBrowserLanguage.useCookie
      , o = re();
    let s = !1;
    const a = pa(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await TC(t, a, e, n, o)
      , c = QL(t);
    if (l && c && c.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const u = OC(t, "fallbackLocale");
    {
        const f = (d,m)=>EC(t, d, m);
        if (u) {
            const d = Ng(u, [e]);
            await Promise.all(d.map(m=>lc(m, sc, f)))
        }
        await lc(e, sc, f)
    }
    return i && bC(t, e),
    Mg(t, e),
    await SC(t, a, e),
    s = !0,
    [s, a]
}
function rh(e, t, n, r, i) {
    const {strategy: o, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = pt
      , c = Qe(r) ? r() : r
      , {ssg: u, callType: f, firstAccess: d, localeCookie: m} = i
      , {locale: _, stat: b, reason: S, from: g} = l ? Hg(e, n, i, c) : Fg;
    if (S === "detect_ignore_on_ssg")
        return c;
    if ((g === "navigator_or_header" || g === "cookie" || g === "fallback") && _)
        return _;
    let E = _;
    return E || (a ? E = DC(bu) : o !== "no_prefix" ? E = t(e) : l || (E = c)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function ih({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const i = re()
      , o = Su()
      , {strategy: s, differentDomains: a} = pt;
    let l = "";
    const {fullPath: c} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const u = i.$switchLocalePath(t) || i.$localePath(c, t);
        ne(u) && u && !Il(u, c) && !u.startsWith("//") && (l = e.from && e.from.fullPath === u ? "" : u)
    }
    if ((a || !0) && n(e.to) !== t) {
        const u = Ai(o, t, e.to);
        ne(u) && u && !Il(u, c) && !u.startsWith("//") && (l = u)
    }
    return l
}
function AC(e) {
    return Ne(e) && "path"in e && "statusCode"in e
}
function oh(e, t) {
    return No(e, {
        redirectCode: t
    })
}
async function sh(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = ha.rootRedirect
      , {i18n: i, locale: o, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return ne(r) ? a = "/" + r : AC(r) && (a = "/" + r.path,
        t = r.statusCode),
        oh(a, t);
    if (a)
        return oh(a, t)
}
function wC(e, t) {
    $r(e, "$i18n", Ar(t)),
    $r(e, "$getRouteBaseName", Si),
    $r(e, "$localePath", Xt(ma)),
    $r(e, "$localeRoute", Xt(Eu)),
    $r(e, "$switchLocalePath", Xt(Ai)),
    $r(e, "$localeHead", Xt(Vg))
}
function kC() {
    return e=>uC(e) && !pt.differentDomains
}
function LC() {
    return (e,t)=>dC(e)
}
function CC() {
    return ()=>{
        var o;
        const e = re()
          , t = Wn()
          , n = pt.baseUrl;
        if (Qe(n))
            return n(e);
        const r = pt.defaultLocale;
        Qe(r) && r();
        const i = (o = t == null ? void 0 : t.public) == null ? void 0 : o.i18n;
        return i != null && i.baseUrl ? i.baseUrl : n
    }
}
function xo(e, t, ...n) {
    const r = Ar(e)
      , [i,o] = [r, r[t]];
    return Reflect.apply(o, i, [...n])
}
function OC(e, t) {
    const n = Ar(e);
    return G(n[t])
}
function $r(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function Xt(e, t=Su()) {
    return (...n)=>e(t, ...n)
}
function xg() {
    let e;
    return navigator.languages && (e = tC(bu, navigator.languages)),
    e
}
function RC() {
    const e = pt.detectBrowserLanguage
      , t = e && e.cookieKey || ha.detectBrowserLanguage.cookieKey
      , n = new Date
      , r = {
        expires: new Date(n.setDate(n.getDate() + 365)),
        path: "/",
        sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
        secure: e && e.cookieCrossOrigin || e && e.cookieSecure
    };
    return e && e.cookieDomain && (r.domain = e.cookieDomain),
    VL(t, r)
}
function IC(e) {
    const t = pt.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && Gr.includes(n))
        return n
}
function PC(e, t) {
    const {useCookie: n} = pt.detectBrowserLanguage || ha.detectBrowserLanguage;
    n && (e.value = t)
}
const Fg = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function Hg(e, t, n, r="") {
    const {strategy: i} = pt
      , {ssg: o, callType: s, firstAccess: a, localeCookie: l} = n;
    if (i === "no_prefix" && o === "ssg_ignore")
        return {
            locale: "",
            stat: !0,
            reason: "detect_ignore_on_ssg"
        };
    if (!a)
        return {
            locale: i === "no_prefix" ? r : "",
            stat: !1,
            reason: "first_access_only"
        };
    const {redirectOn: c, alwaysRedirect: u, useCookie: f, fallbackLocale: d} = pt.detectBrowserLanguage
      , m = ne(e) ? e : e.path;
    if (i !== "no_prefix") {
        if (c === "root") {
            if (m !== "/")
                return {
                    locale: "",
                    stat: !1,
                    reason: "not_redirect_on_root"
                }
        } else if (c === "no prefix" && !u && m.match(ac(Gr)))
            return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_no_prefix"
            }
    }
    let _ = "unknown", b, S;
    f && (S = b = l.value,
    _ = "cookie"),
    S || (S = xg(),
    _ = "navigator_or_header");
    const g = S || d;
    !S && d && (_ = "fallback");
    const E = r || t;
    if (g && (!f || u || !b)) {
        if (i === "no_prefix")
            return {
                locale: g,
                stat: !0,
                from: _
            };
        if (s === "setup" && g !== E)
            return {
                locale: g,
                stat: !0,
                from: _
            };
        if (u) {
            const p = m === "/"
              , y = c === "all"
              , T = c === "no prefix" && !m.match(ac(Gr));
            if (p || y || T)
                return {
                    locale: g,
                    stat: !0,
                    from: _
                }
        }
    }
    return o === "ssg_setup" && g ? {
        locale: g,
        stat: !0,
        from: _
    } : (_ === "navigator_or_header" || _ === "cookie") && g ? {
        locale: g,
        stat: !0,
        from: _
    } : {
        locale: "",
        stat: !1,
        reason: "not_found_match"
    }
}
function MC() {
    let e;
    return e = window.location.host,
    e
}
function DC(e) {
    let t = MC() || "";
    if (t) {
        const n = e.find(r=>{
            if (r && r.domain) {
                let i = r.domain;
                return Dn(r.domain) && (i = r.domain.replace(/(http|https):\/\//, "")),
                i === t
            }
            return !1
        }
        );
        if (n)
            return n.code;
        t = ""
    }
    return t
}
function jg() {
    return Xt(ma)
}
function BM() {
    return Xt(Ai)
}
const Xa = ()=>({
    haptic: !0,
    coins_animation: !0
})
  , NC = Nn("settings", {
    state: ()=>({
        settings: Xa()
    }),
    actions: {
        updateSettings(e) {
            this.settings = {
                ...this.settings,
                ...e
            },
            this.saveToLocalStorage()
        },
        saveToLocalStorage() {
            localStorage.setItem(me.SETTINGS, JSON.stringify(this.settings))
        },
        loadSettings() {
            const e = localStorage.getItem(me.SETTINGS);
            e || this.updateSettings({}),
            this.settings = e ? {
                ...Xa(),
                ...JSON.parse(e)
            } : Xa(),
            this.saveToLocalStorage()
        },
        async postExchangeRefLink(e) {
            return await $e.post("/clicker/exchangeRefLink-save", {
                body: {
                    exchangeRefLink: e
                }
            }).then(t=>t)
        }
    }
})
  , xM = Ve({
    __name: "BackButton",
    props: {
        visible: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["click"],
    setup(e, {emit: t}) {
        const n = e
          , r = t
          , {showBackButton: i, onBackButtonClicked: o, hideBackButton: s} = qC();
        return Fe(()=>n.visible, a=>{
            a ? i() : s()
        }
        ),
        o(()=>r("click")),
        Rt(()=>n.visible && i()),
        Ci(()=>s()),
        (a,l)=>null
    }
})
  , {initData: VC, initDataUnsafe: UC, version: BC, platform: xC, isVersionAtLeast: FC, sendData: HC, close: jC} = Telegram.WebApp
  , Kg = le(!1)
  , KC = (...e)=>{
    Telegram.WebApp.ready(...e),
    Kg.value = !0
}
  , Yg = e=>Telegram.WebApp.platform === e
  , qg = Yg("unknown")
  , YC = !qg && Telegram.WebApp.initData === "";
function Wg() {
    return {
        initData: VC,
        initDataUnsafe: UC,
        version: BC,
        platform: xC,
        isVersionAtLeast: FC,
        onEvent: (...e)=>{
            Rt(()=>Telegram.WebApp.onEvent(...e)),
            Ci(()=>Telegram.WebApp.offEvent(...e))
        }
        ,
        sendData: HC,
        ready: KC,
        close: jC,
        isReady: ur(Kg),
        isPlatform: Yg,
        isPlatformUnknown: qg,
        canSendData: YC
    }
}
const Gg = le(Telegram.WebApp.BackButton.isVisible);
function Jg() {
    Gg.value = Telegram.WebApp.BackButton.isVisible
}
function ah(...e) {
    Telegram.WebApp.BackButton.show(...e),
    Jg()
}
function lh(...e) {
    Telegram.WebApp.BackButton.hide(...e),
    Jg()
}
function qC() {
    const {onEvent: e} = Wg()
      , t = n=>e("backButtonClicked", n);
    return {
        isBackButtonVisible: ue({
            get() {
                return Gg.value
            },
            set(n) {
                n ? ah() : lh()
            }
        }),
        onBackButtonClicked: t,
        showBackButton: ah,
        hideBackButton: lh
    }
}
Telegram.WebApp;
le(Telegram.WebApp.isClosingConfirmationEnabled);
Telegram.WebApp.CloudStorage;
const {impactOccurred: WC, notificationOccurred: GC, selectionChanged: JC} = Telegram.WebApp.HapticFeedback;
function zC() {
    return {
        impactOccurred: WC,
        notificationOccurred: GC,
        selectionChanged: JC
    }
}
le(Telegram.WebApp.MainButton.text);
le(Telegram.WebApp.MainButton.color);
le(Telegram.WebApp.MainButton.textColor);
le(Telegram.WebApp.MainButton.isVisible);
le(Telegram.WebApp.MainButton.isActive);
le(Telegram.WebApp.MainButton.isProgressVisible);
Telegram.WebApp;
Telegram.WebApp;
Telegram.WebApp;
Telegram.WebApp;
Wg();
le(Telegram.WebApp.SettingsButton.isVisible);
le(Telegram.WebApp.colorScheme);
le(Telegram.WebApp.themeParams);
le(Telegram.WebApp.headerColor);
le(Telegram.WebApp.backgroundColor);
le(Telegram.WebApp.isExpanded);
le(Telegram.WebApp.viewportHeight);
le(Telegram.WebApp.viewportStableHeight);
const On = Nn("ui", {
    state: ()=>({
        bottomSheetOpen: !1,
        modalOpen: !1,
        notificationLevelUp: null,
        onboarding: !1,
        onboardingStep: 1,
        taskNotification: !1,
        taskAirdropNotification: !1,
        link_twitter: "https://twitter.com/hamster_kombat",
        link_telegram: "https://t.me/hamster_kombat",
        link_whitepaper: "",
        link_discord: "https://discord.gg/d2Q6VH8Psp",
        link_medium: "https://medium.com/@hamster_kombat",
        link_telegram_chat: "https://t.me/hamster_kombat_chat",
        progress_loading: 0,
        language_code: "",
        scroll_gap: 2
    }),
    actions: {
        async copyText(e) {
            const t = Cn.promise({
                title: re().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success(re().$i18n.t("messages.copy_success")),
                Ge().trackEvent("copy_text_success_writeText")
            } catch {
                (i=>{
                    const o = document.createElement("textarea");
                    o.value = i,
                    o.style.position = "fixed",
                    o.style.left = "-9999px",
                    document.body.appendChild(o),
                    o.select();
                    try {
                        const s = document.execCommand("copy");
                        return document.body.removeChild(o),
                        s
                    } catch (s) {
                        return document.body.removeChild(o),
                        console.log("Fallback copy method failed", s),
                        !1
                    }
                }
                )(e) ? (t == null || t.success(re().$i18n.t("messages.copy_success")),
                Ge().trackEvent("copy_text_success_exec")) : (t == null || t.reject(re().$i18n.t("messages.copy_error")),
                Ge().trackEvent("copy_text_error"))
            }
        },
        goBackButton() {
            const {$event: e} = re()
              , t = jg();
            this.bottomSheetOpen ? e("bs:close") : this.modalOpen ? e("modal:close") : No(t(Bo.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject(re().$i18n.t("messages.oops")),
            this.notificationLevelUp = null,
            Ut().setStop(!1))
        },
        setBottomSheetOpen(e) {
            this.bottomSheetOpen = e
        },
        setModalOpen(e) {
            this.modalOpen = e
        },
        setLanguageCode(e) {
            this.language_code = e
        },
        setOnboarding(e) {
            this.onboarding = e
        },
        setProgressLoading(e) {
            this.progress_loading = e,
            this.progress_loading >= 100 && (this.progress_loading = 100)
        },
        useHapticFeedback(e="medium") {
            NC().settings.haptic && zC().impactOccurred(e)
        },
        isRu(e) {
            return this.language_code === "ru" || e === "ru"
        },
        isYP() {
            return ["RU", "BY", "KZ", "UZ", "KG", "AZ", "AM", "GE"].indexOf(Hn().location.country_code ?? "") > -1
        },
        isRUBY() {
            return ["RU", "BY"].indexOf(Hn().location.country_code ?? "") > -1
        },
        isPECLMX() {
            return ["PE", "CL", "MX"].indexOf(Hn().location.country_code ?? "") > -1
        },
        isBR() {
            return ["BR"].indexOf(Hn().location.country_code ?? "") > -1
        }
    }
})
  , Za = Nn("morse", {
    state: ()=>({
        dailyCipher: null,
        dailyCipherInterval: null,
        dailyCipherSuccess: !1,
        taps: [],
        morse_code: "",
        morse_decoded: "",
        status: !1,
        tapStartTime: null,
        tapThreshold: 500,
        symbolPauseThreshold: 1e3,
        timeoutId: null,
        last_input: "",
        timestamp_daily_cipher: 0
    }),
    actions: {
        checkCipher() {
            var e;
            (e = this.dailyCipher) != null && e.cipher && (this.dailyCipher.cipher.startsWith(this.morse_decoded) ? On().useHapticFeedback("heavy") : this.resetMorse(),
            this.dailyCipher.cipher === this.morse_decoded && this.getDailyCipherNotClaimed && setTimeout(()=>{
                this.setDailyCipherSuccess(!0)
            }
            , 600))
        },
        cipherDecode(e) {
            const t = `${e.slice(0, 3)}${e.slice(4)}`;
            return window.atob(t)
        },
        cipherEncode(e) {
            return window.btoa(e)
        },
        convertMorseToText(e) {
            return e.split("/").map(t=>Kw[t.trim()] || "").join("")
        },
        convertTapsToMorse() {
            return this.taps.map(e=>e.type).join("")
        },
        playSound(e) {
            const t = new Audio("/sound/dot.wav")
              , n = new Audio("/sound/dash.wav");
            let r;
            e === Mr.Dot ? r = t.cloneNode() : e === Mr.Dash && (r = n.cloneNode()),
            r == null || r.play()
        },
        async postClaimDailyCipher() {
            return await $e.post("/clicker/claim-daily-cipher", {
                body: {
                    cipher: this.morse_decoded
                }
            }).then(e=>(On().useHapticFeedback("heavy"),
            Ut().setUserResponseData(e),
            e != null && e.dailyCipher ? this.setDailyCipher(e.dailyCipher) : (this.dailyCipher = null,
            this.resetMorse()),
            this.resetMorse(),
            e))
        },
        processPauses() {
            const e = Date.now();
            if (this.taps.length > 0) {
                const t = this.taps[this.taps.length - 1];
                e - t.timestamp > this.symbolPauseThreshold && this.taps.push({
                    type: Mr.SymbolSeparator,
                    timestamp: e
                })
            }
        },
        registerTap(e) {
            const t = Date.now();
            this.taps.push({
                type: e,
                timestamp: t
            })
        },
        resetDailyCipherInterval() {
            this.dailyCipherInterval && clearInterval(this.dailyCipherInterval),
            this.dailyCipherInterval = null
        },
        resetMorse() {
            this.taps = [],
            this.morse_decoded = "",
            this.morse_code = "",
            this.dailyCipher || (this.setStatus(!1),
            this.setDailyCipherSuccess(!1),
            this.resetDailyCipherInterval())
        },
        setDailyCipher(e) {
            e.remainSeconds && this.startDailyCipherInterval();
            try {
                e.cipher && (e.cipher = this.cipherDecode(e.cipher)),
                this.dailyCipher = e
            } catch (t) {
                console.log("Daily cipher error", t),
                this.dailyCipher = null
            }
        },
        setDailyCipherSuccess(e) {
            this.dailyCipherSuccess = e
        },
        setLastInput(e) {
            this.last_input = e === Mr.Dot ? "●" : "—"
        },
        setMorseCode(e) {
            this.morse_code = e
        },
        setMorseDecoded(e) {
            this.morse_decoded = e
        },
        setStatus(e) {
            this.status = e
        },
        setTaps(e) {
            this.taps = e
        },
        startDailyCipherInterval() {
            this.resetDailyCipherInterval(),
            this.dailyCipherInterval = Vt(()=>{
                var e;
                if ((e = this.dailyCipher) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ge().getNowTimestamp();
                    this.timestamp_daily_cipher && n - this.timestamp_daily_cipher > 1 && (t = n - this.timestamp_daily_cipher),
                    this.dailyCipher.remainSeconds -= t,
                    this.dailyCipher.remainSeconds <= 0 && (this.dailyCipher.remainSeconds = 0,
                    this.resetDailyCipherInterval(),
                    setTimeout(async()=>{
                        await sn().postConfig().then(()=>{
                            this.resetMorse()
                        }
                        )
                    }
                    , 1e3)),
                    this.timestamp_daily_cipher = n
                }
            }
            , 1e3)
        },
        tapEnd() {
            if (this.tapStartTime) {
                const n = Date.now() - this.tapStartTime < this.tapThreshold ? Mr.Dot : Mr.Dash;
                this.setLastInput(n),
                this.registerTap(n),
                this.tapStartTime = null,
                this.timeoutId = setTimeout(()=>{
                    this.setMorseCode(this.convertTapsToMorse()),
                    this.setMorseDecoded(this.convertMorseToText(this.morse_code)),
                    this.processPauses(),
                    this.checkCipher()
                }
                , this.symbolPauseThreshold)
            }
        },
        tapStart() {
            this.tapStartTime = Date.now(),
            this.timeoutId && (clearTimeout(this.timeoutId),
            this.timeoutId = null)
        }
    },
    getters: {
        getDailyCipherNotClaimed() {
            return !!this.dailyCipher && !(this.dailyCipher.isClaimed ?? !1) && this.dailyCipher.cipher === this.morse_decoded
        },
        getDailyCipherClaimed() {
            return !!this.dailyCipher && (this.dailyCipher.isClaimed ?? !1)
        }
    }
})
  , $a = Nn({
    id: "minigame-frame",
    state: ()=>({
        dailyKeysMiniGame: null,
        dailyMiniGameInterval: null,
        matchMiniGameInterval: null,
        replayMiniGameInterval: null,
        timestamp_daily_minigame: 0,
        timestamp_match_minigame: 0,
        timestamp_replay_minigame: 0,
        cipher: null,
        show: !1,
        open: !1,
        openTutor: !0,
        showTutor: !0,
        sceneLoaded: !1,
        isPlaying: !1,
        url: "/games/UnblockPuzzle/?v",
        wasm_error: "",
        webgl_error: ""
    }),
    actions: {
        openPage() {
            this.open = !0
        },
        showGamePage() {
            this.open = !0,
            this.show = !0
        },
        hideGamePage() {
            this.open = !1,
            this.show = !1,
            this.showTutor = !0
        },
        async postStartDailyKeysMiniGame() {
            return await $e.post("/clicker/start-keys-minigame", {}).then(e=>(Ut().setUserResponseData(e),
            e != null && e.dailyKeysMiniGame ? (e.dailyKeysMiniGame.remainSecondsToGuess += .1,
            this.setDailyKeysMiniGame(e.dailyKeysMiniGame)) : this.dailyKeysMiniGame = null,
            e))
        },
        async postClaimDailyKeysMiniGame() {
            return await $e.post("/clicker/claim-daily-keys-minigame", {
                body: {
                    cipher: this.cipher
                }
            }).then(e=>(Ut().setUserResponseData(e),
            e != null && e.dailyKeysMiniGame ? this.setDailyKeysMiniGame(e.dailyKeysMiniGame) : this.dailyKeysMiniGame = null,
            e))
        },
        resetMatchMiniGameInterval() {
            this.matchMiniGameInterval && clearInterval(this.matchMiniGameInterval),
            this.matchMiniGameInterval = null,
            this.timestamp_match_minigame = 0
        },
        startMatchMiniGameInterval() {
            this.resetMatchMiniGameInterval(),
            this.matchMiniGameInterval = Vt(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToGuess) {
                    let t = 1;
                    const n = Ge().getNowTimestamp();
                    this.timestamp_match_minigame && n - this.timestamp_match_minigame > 1 && (t = n - this.timestamp_match_minigame),
                    this.dailyKeysMiniGame.remainSecondsToGuess -= t,
                    this.timestamp_match_minigame = n,
                    this.dailyKeysMiniGame.remainSecondsToGuess <= 0 && (this.dailyKeysMiniGame.remainSecondsToGuess = 0,
                    this.isPlaying = !1,
                    this.resetMatchMiniGameInterval())
                }
            }
            , 1e3)
        },
        resetReplayMiniGameInterval() {
            this.replayMiniGameInterval && clearInterval(this.replayMiniGameInterval),
            this.replayMiniGameInterval = null,
            this.timestamp_replay_minigame = 0
        },
        startReplayMiniGameInterval() {
            this.resetReplayMiniGameInterval(),
            this.replayMiniGameInterval = Vt(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToNextAttempt) {
                    let t = 1;
                    const n = Ge().getNowTimestamp();
                    this.timestamp_replay_minigame && n - this.timestamp_replay_minigame > 1 && (t = n - this.timestamp_replay_minigame),
                    this.dailyKeysMiniGame.remainSecondsToNextAttempt -= t,
                    this.timestamp_replay_minigame = n,
                    this.dailyKeysMiniGame.remainSecondsToNextAttempt <= 0 && (this.dailyKeysMiniGame.remainSecondsToNextAttempt = 0,
                    this.resetReplayMiniGameInterval())
                }
            }
            , 1e3)
        },
        resetDailyMiniGameInterval() {
            this.dailyMiniGameInterval && clearInterval(this.dailyMiniGameInterval),
            this.dailyMiniGameInterval = null,
            this.timestamp_daily_minigame = 0
        },
        startDailyMiniGameInterval() {
            this.resetDailyMiniGameInterval(),
            this.dailyMiniGameInterval = Vt(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ge().getNowTimestamp();
                    this.timestamp_daily_minigame && n - this.timestamp_daily_minigame > 1 && (t = n - this.timestamp_daily_minigame),
                    this.dailyKeysMiniGame.remainSeconds -= t,
                    this.timestamp_daily_minigame = n,
                    this.dailyKeysMiniGame.remainSeconds <= 0 && (this.dailyKeysMiniGame.remainSeconds = 0,
                    this.resetDailyMiniGameInterval(),
                    this.show && (this.hideGamePage(),
                    Cn.promise({}).reject({
                        title: re().$i18n.t("minigame.lose_title"),
                        duration: 4e3
                    }),
                    Ge().trackEvent("minigame_puzzle_loose_period"),
                    On().useHapticFeedback("heavy")),
                    this.dailyKeysMiniGame = null,
                    setTimeout(async()=>{
                        await sn().postConfig()
                    }
                    , 1e3))
                }
            }
            , 1e3)
        },
        isWasmSupported() {
            if (typeof WebAssembly == "object" && typeof WebAssembly.instantiate == "function")
                try {
                    const e = new WebAssembly.Module(Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0]));
                    if (e instanceof WebAssembly.Module)
                        return new WebAssembly.Instance(e)instanceof WebAssembly.Instance
                } catch (e) {
                    return console.log("WebAssembly error:", e),
                    this.wasm_error = e == null ? void 0 : e.toString(),
                    !1
                }
            return !1
        },
        isWebGLSupported() {
            try {
                const e = document.createElement("canvas")
                  , t = e.getContext("webgl") || e.getContext("experimental-webgl")
                  , n = !!(t && t instanceof WebGLRenderingContext);
                return e.remove(),
                n
            } catch (e) {
                return console.log("WebGL error:", e),
                this.webgl_error = e == null ? void 0 : e.toString(),
                !1
            }
        },
        resetMiniGame() {
            this.resetDailyMiniGameInterval(),
            this.resetMatchMiniGameInterval(),
            this.resetReplayMiniGameInterval()
        },
        setDailyKeysMiniGame(e) {
            e.remainSeconds && e.remainSeconds > 0 && this.startDailyMiniGameInterval(),
            e.remainSecondsToNextAttempt && e.remainSecondsToNextAttempt > 0 && this.startReplayMiniGameInterval();
            try {
                this.dailyKeysMiniGame = e
            } catch (t) {
                console.log("Daily MiniGame error", t),
                this.dailyKeysMiniGame = null
            }
        },
        startGame() {
            var e, t;
            if (this.dailyKeysMiniGame != null) {
                const r = document.getElementById(this.$id).contentWindow,
                      i = new Date((e = this.dailyKeysMiniGame) == null ? void 0 : e.startDate).getTime() / 1e3,
                    o = "a - - c d d.a b - c e -.a b 0 0 e f.s s s - e f.- - x - g g.- - x - h h"; // 直接赋值新的 levelConfig
                r.postMessage(JSON.stringify({
                    method: "StartGame",
                    level: o,
                    number: i
                })),
                this.startMatchMiniGameInterval(),
                this.startReplayMiniGameInterval(),
                this.isPlaying = !0,
                this.showTutor = !1
            }
        }
    },
    getters: {
        getDailyKeysMiniGameClaimed() {
            return !!this.dailyKeysMiniGame && (this.dailyKeysMiniGame.isClaimed ?? !1)
        }
    }
})
  , sn = Nn("config", {
    state: ()=>({
        maxPassiveDtSeconds: null,
        maxPassiveDtSeconds_local: 0,
        exchanges: [],
        userLevels_balanceCoins: [],
        levelUpEarnPerTap: null,
        levelUpMaxTaps: null,
        guidLink: null,
        referralBonus: {},
        feature: [],
        telegramAuditory: 39,
        subscribeChannelUrl: "",
        skins: []
    }),
    actions: {
        async postConfig() {
            return await $e.post("/clicker/config", {}).then(e=>{
                var t, n, r, i, o, s, a, l, c;
                return (t = e == null ? void 0 : e.clickerConfig) != null && t.maxPassiveDtSeconds && this.setMaxPassiveDtSeconds(e.clickerConfig.maxPassiveDtSeconds),
                (n = e == null ? void 0 : e.clickerConfig) != null && n.exchanges && this.setExchanges(e.clickerConfig.exchanges),
                (r = e == null ? void 0 : e.clickerConfig) != null && r.userLevels_balanceCoins && this.setUserLevelsBalanceCoins(e.clickerConfig.userLevels_balanceCoins),
                (i = e == null ? void 0 : e.clickerConfig) != null && i.levelUp && this.setLevelUp(e.clickerConfig.levelUp),
                (o = e == null ? void 0 : e.clickerConfig) != null && o.guidLink && this.setGuidLink(e.clickerConfig.guidLink),
                (s = e == null ? void 0 : e.clickerConfig) != null && s.referral && this.setReferralBonus(e.clickerConfig.referral),
                e != null && e.dailyCipher ? Za().setDailyCipher(e.dailyCipher) : (Za().dailyCipher = null,
                Za().resetMorse()),
                $a().resetMiniGame(),
                e != null && e.dailyKeysMiniGame ? $a().setDailyKeysMiniGame(e.dailyKeysMiniGame) : $a().dailyKeysMiniGame = null,
                e != null && e.feature && this.setFeature(e.feature),
                (a = e == null ? void 0 : e.clickerConfig) != null && a.skins && this.setSkins(e.clickerConfig.skins),
                (l = e == null ? void 0 : e.clickerConfig) != null && l.telegramAuditory && this.setTelegramAuditory(e.clickerConfig.telegramAuditory),
                (c = e == null ? void 0 : e.clickerConfig) != null && c.subscribeChannelUrl && this.setTelegramLink(e.clickerConfig.subscribeChannelUrl),
                Ut().exchangeId && Ut().setExchangeId(Ut().exchangeId),
                e
            }
            )
        },
        setMaxPassiveDtSeconds(e) {
            this.maxPassiveDtSeconds = e
        },
        setExchanges(e=[]) {
            this.exchanges = e
        },
        setUserLevelsBalanceCoins(e=[]) {
            this.userLevels_balanceCoins = e
        },
        setFeature(e) {
            this.feature = e
        },
        setSkins(e) {
            this.skins = e.sort((t,n)=>{
                const r = parseInt(t.id.replace(/\D/g, ""), 10)
                  , i = parseInt(n.id.replace(/\D/g, ""), 10);
                return r - i
            }
            )
        },
        setTelegramAuditory(e) {
            this.telegramAuditory = e
        },
        setTelegramLink(e) {
            this.subscribeChannelUrl = e
        },
        setLevelUp(e) {
            this.levelUpEarnPerTap = e.earnPerTap,
            this.levelUpMaxTaps = e.maxTaps
        },
        setGuidLink(e) {
            try {
                const t = new Map;
                for (const n of Object.keys(e))
                    t.set(n, e[n]);
                this.guidLink = t
            } catch (t) {
                console.log(t)
            }
        },
        setReferralBonus(e) {
            this.referralBonus = e
        }
    },
    getters: {
        getGuidLink() {
            var n, r;
            const e = re().$i18n.locale;
            let t = (n = this.guidLink) == null ? void 0 : n.get(e);
            return t || (t = (r = this.guidLink) == null ? void 0 : r.get("en")),
            t ?? "#"
        }
    }
})
  , FM = "data:image/png;base64,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"
  , HM = "data:image/webp;base64,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"
  , QC = "data:image/png;base64,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"
  , jM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , KM = "data:image/png;base64,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"
  , YM = "data:image/png;base64,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"
  , qM = "data:image/png;base64,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"
  , XC = Nn("boost", {
    state: ()=>({
        boostsForBuy: [],
        fullEnergyInterval: null,
        fullEnergySecondsCountdown: 0,
        fullEnergyTimerText: "",
        timestamp_full_energy: 0
    }),
    actions: {
        getBoostDescription(e) {
            switch (e.id) {
            case "BoostEarnPerTap":
                return re().$i18n.t("boost.description_tap");
            case "BoostMaxTaps":
                return re().$i18n.t("boost.description_energy");
            default:
                return re().$i18n.t("boost.boost")
            }
        },
        getBoostImage(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return "/images/boost-multitap.png?v=1";
            case "BoostMaxTaps":
                return "/images/boost-energy.png";
            default:
                return QC
            }
        },
        getBoostName(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return re().$i18n.t("boost.boost_multitap");
            case "BoostMaxTaps":
                return re().$i18n.t("boost.boost_energy_limit");
            default:
                return re().$i18n.t("boost.boost")
            }
        },
        getBoostTarget(e) {
            switch (e.id) {
            case "BoostEarnPerTap":
                return re().$i18n.t("boost.target_tap", {
                    number: e.earnPerTapDelta,
                    level: e.level + 1
                });
            case "BoostMaxTaps":
                return re().$i18n.t("boost.target_energy", {
                    number: e.maxTapsDelta,
                    level: e.level + 1
                });
            default:
                return re().$i18n.t("boost.boost")
            }
        },
        async postBoostsForBuy() {
            return await $e.post("/clicker/boosts-for-buy", {}).then(e=>{
                e != null && e.boostsForBuy && this.setBoostsForBuy(e.boostsForBuy);
                const {$event: t} = re();
                return t("boosts-update:success"),
                e
            }
            ).catch(e=>{
                Cn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_boosts")
                })
            }
            )
        },
        async postBuyBoost(e) {
            return await $e.post("/clicker/buy-boost", {
                body: {
                    boostId: e,
                    timestamp: Ge().getNowTimestamp()
                }
            }).then(t=>(On().useHapticFeedback("heavy"),
            Ut().setUserResponseData(t),
            t != null && t.upgradesForBuy && uc().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            Ge().trackEvent(Ge().camelToSnake(e)),
            t))
        },
        resetFullEnergyTimer() {
            this.fullEnergyInterval && clearInterval(this.fullEnergyInterval),
            this.fullEnergyInterval = null,
            this.setFullEnergySecondsCountdown(),
            this.setFullEnergyTimerText(),
            this.timestamp_full_energy = 0
        },
        setBoostsForBuy(e=[]) {
            e.length && (this.boostsForBuy = e)
        },
        setFullEnergySecondsCountdown(e=0) {
            this.fullEnergySecondsCountdown = e
        },
        setFullEnergyTimerText(e="") {
            this.fullEnergyTimerText = e
        }
    }
})
  , uc = Nn("upgrade", {
    state: ()=>({
        myUpgrades: {},
        upgradesForBuy: [],
        sections: [],
        cooldowns: {},
        dailyCombo: null,
        dailyComboCount: 3,
        dailyComboInterval: null,
        dailyComboSuccess: !1,
        timestamp_daily_combo: 0
    }),
    actions: {
        cooldownAddUpgrade(e, t, n) {
            this.cooldowns[e] = {
                totalCooldownSeconds: n,
                cooldownSeconds: t,
                intervalId: void 0,
                timestamp: Ge().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = Vt(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = Ge().getNowTimestampWithMS()
                      , r = n - ((t == null ? void 0 : t.timestamp) ?? n);
                    r > 100 && (t.cooldownSeconds = parseFloat(t.cooldownSeconds.toFixed(2)) - r / 1e3),
                    t.timestamp = n,
                    t.cooldownSeconds -= .05,
                    t.cooldownSeconds <= 0 && (t.cooldownSeconds = 0,
                    this.cooldownStopTimer(e))
                }
            }
            , 50))
        },
        cooldownStopTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId !== void 0 && (t.intervalId && clearInterval(t.intervalId),
            delete this.cooldowns[e],
            this.upgradesForBuy.map(n=>(n.id === e && (n.cooldownSeconds = 0),
            n)))
        },
        getUpgradeById(e) {
            return this.upgradesForBuy.find(t=>t.id === e)
        },
        async postBuyUpgrade(e) {
            return await $e.post("/clicker/buy-upgrade", {
                body: {
                    upgradeId: e,
                    timestamp: Ge().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, i;
                On().useHapticFeedback("heavy"),
                Ut().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && XC().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((i = (r = this.upgradesForBuy) == null ? void 0 : r.find(o=>o.id === e)) == null ? void 0 : i.level) ?? 1;
                return Ge().trackEvent(`mine_${Ge().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await $e.post("/clicker/claim-daily-combo", {}).then(e=>(On().useHapticFeedback("heavy"),
            Ut().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await $e.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
            e != null && e.sections && this.setSections(e.sections),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e)).catch(e=>{
                Cn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_upgrades")
                })
            }
            )
        },
        setDailyCombo(e) {
            const t = {
                ...this.dailyCombo
            };
            this.isDailyComboHasNewOpenedItems((e == null ? void 0 : e.upgradeIds) ?? [], (t == null ? void 0 : t.upgradeIds) ?? []) && !Ut().first_time_load && setTimeout(()=>{
                this.setDailyComboSuccess(!0)
            }
            , 200),
            this.dailyCombo = e,
            e.upgradeIds && (this.dailyCombo.upgradeIds = Array.from({
                length: this.dailyComboCount
            }, (n,r)=>{
                var i, o;
                return ((o = (i = this.dailyCombo) == null ? void 0 : i.upgradeIds) == null ? void 0 : o[r]) || null
            }
            )),
            e.remainSeconds && this.startDailyComboInterval(),
            this.getDailyComboNotClaimed && !Ut().first_time_load && (Ge().trackEvent(fg.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = re();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return Ge().compareWithEmptyOldArray(e, this.dailyComboCount);
            const n = e.filter(a=>a !== null).sort()
              , r = t.filter(a=>a !== null).sort();
            if (JSON.stringify(n) === JSON.stringify(r))
                return !1;
            const o = e.find(a=>a !== null && !t.filter(l=>l !== null).includes(a))
              , s = e.filter(a=>a !== null).length === this.dailyComboCount;
            return !!(o && !s)
        },
        setSections(e=[]) {
            e.length && (this.sections = e)
        },
        setUpgradesForBuy(e=[]) {
            e.length && (this.upgradesForBuy = e);
            let t = !1;
            if (this.upgradesForBuy.forEach(n=>{
                n.cooldownSeconds && n.totalCooldownSeconds && (t = !0,
                this.cooldowns[n.id] ? (this.cooldowns[n.id].cooldownSeconds = n.cooldownSeconds,
                this.cooldowns[n.id].totalCooldownSeconds = n.totalCooldownSeconds,
                this.cooldowns[n.id].timestamp = Ge().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
                this.cooldownStartTimer(n.id)))
            }
            ),
            t) {
                const {$event: n} = re();
                n("upgrade:update-timers")
            }
        },
        resetDailyComboInterval() {
            this.dailyComboInterval && clearInterval(this.dailyComboInterval),
            this.dailyComboInterval = null
        },
        startDailyComboInterval() {
            this.resetDailyComboInterval(),
            this.dailyComboInterval = Vt(()=>{
                var e;
                if ((e = this.dailyCombo) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ge().getNowTimestamp();
                    this.timestamp_daily_combo && n - this.timestamp_daily_combo > 1 && (t = n - this.timestamp_daily_combo),
                    this.dailyCombo.remainSeconds -= t,
                    this.dailyCombo.remainSeconds <= 0 && (this.dailyCombo.remainSeconds = 0,
                    this.resetDailyComboInterval(),
                    setTimeout(()=>{
                        this.postUpgradesForBuy()
                    }
                    , 1e3)),
                    this.timestamp_daily_combo = n
                }
            }
            , 1e3)
        },
        setDailyComboSuccess(e) {
            this.dailyComboSuccess = e
        },
        setMyUpgrades(e) {
            this.myUpgrades = e
        },
        isMyUpgrade(e) {
            var t;
            return (((t = this.myUpgrades[e]) == null ? void 0 : t.level) ?? 0) > 0
        }
    },
    getters: {
        getDailyComboNotClaimed() {
            var e, t;
            return !!this.dailyCombo && !(this.dailyCombo.isClaimed ?? !1) && ((e = this.dailyCombo.upgradeIds) == null ? void 0 : e.length) === this.dailyComboCount && !((t = this.dailyCombo.upgradeIds) != null && t.some(n=>n === null))
        },
        getDailyComboClaimed() {
            var e, t;
            return !!this.dailyCombo && (this.dailyCombo.isClaimed ?? !1) && ((e = this.dailyCombo.upgradeIds) == null ? void 0 : e.length) === this.dailyComboCount && !((t = this.dailyCombo.upgradeIds) != null && t.some(n=>n === null))
        }
    }
})
  , Ut = Nn("clicker", {
    state: ()=>({
        animate_interval: null,
        availableTaps: null,
        balanceCoins: null,
        balanceTarget: null,
        coinsToLevelUp: 0,
        currentExchange: null,
        dtServer: 0,
        earnPassivePerHour: null,
        earnPassivePerSec: null,
        earnPerTap: null,
        exchangeId: null,
        exchangeRefLinks: {},
        first_time_load: !1,
        id: null,
        lastPassiveEarn: 0,
        lastSyncUpdate: null,
        level: null,
        maxTaps: null,
        referrerId: null,
        stop: !1,
        sync_tap_timeout: null,
        tapDuration: 0,
        tap_interval: null,
        tapsRecoverPerSec: null,
        timer_energy: null,
        timer_leveUp: null,
        timer_passive: null,
        timer_sync: null,
        timestamp_energy: 0,
        timestamp_passive: 0,
        totalCoins: 0,
        skin: null,
        totalKeys: 0,
        balanceKeys: 0
    }),
    actions: {
        addBalance(e) {
            const r = (De(this.balanceCoins) ?? 0) + e
              , i = e / 50
              , o = Math.floor(800 / e * i);
            let s = Vt(()=>{
                this.balanceCoins += i,
                this.balanceCoins >= r && (this.balanceCoins = r,
                clearInterval(s),
                s = null)
            }
            , o)
        },
        animateBalance() {
            this.balanceCoins < this.balanceTarget && (this.animate_interval = Vt(()=>{
                if (this.balanceCoins >= this.balanceTarget) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins++
            }
            , Gt.BALANCE_ANIMATION_SPEED)),
            this.balanceTarget < this.balanceCoins && (this.animate_interval = Vt(()=>{
                if (this.balanceTarget >= this.balanceCoins) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins--
            }
            , Gt.BALANCE_ANIMATION_SPEED))
        },
        calcEnergy() {
            let e = 1;
            const t = Ge().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (sn().maxPassiveDtSeconds_local <= (sn().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = Ge().getNowTimestamp();
                this.timestamp_passive && t - this.timestamp_passive > 1 && (e = t - this.timestamp_passive);
                const n = this.earnPassivePerSec ?? 0;
                this.totalCoins = this.totalCoins + e * n,
                this.balanceCoins = this.balanceCoins + e * n,
                sn().maxPassiveDtSeconds_local += e,
                this.timestamp_passive = t
            }
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !Hn().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            On().notificationLevelUp = Cn.promise({
                title: re().$i18n.t("messages.level_up_processing")
            }),
            this.earnStartInterval())
        },
        earn() {
            this.animate_interval !== null && (clearInterval(this.animate_interval),
            this.animate_interval = null,
            this.balanceCoins = this.balanceTarget),
            this.tap_interval === null && (this.tap_interval = Vt(()=>{
                this.tapDuration += 1
            }
            , 1e3)),
            this.balanceTarget = this.balanceCoins + this.earnPerTap,
            this.animateBalance(),
            this.storageSyncTapsAdd(1),
            this.sync_tap_timeout !== null && (clearTimeout(this.sync_tap_timeout),
            this.sync_tap_timeout = null),
            this.availableTaps = Math.max(0, this.availableTaps - this.earnPerTap),
            this.sync_tap_timeout = setTimeout(()=>{
                this.earnStartInterval()
            }
            , Gt.TAP_INTERVAL)
        },
        async earnStartInterval() {
            re().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${Ge().getNowTimestamp()}
              timestamp dt: ${Ge().getNowTimestamp() - this.lastSyncUpdate}
            `),
            await this.postTap(this.storageSyncTapsGet()),
            clearTimeout(this.sync_tap_timeout),
            this.sync_tap_timeout = null,
            this.tapDuration = 0,
            clearInterval(this.tap_interval),
            this.tap_interval = null
        },
        async postExchangeReferralStat(e=0) {
            return await $e.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postSendReferralLink() {
            return await $e.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSync() {
            return await $e.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postReferrerInfo() {
            return await $e.post("/clicker/referrer-info", {}).then(e=>(e.referrer && this.setReferrer(e.referrer),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(me.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(me.SYNC_AVAILABLE_TAPS);
            return await $e.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : Ge().getNowTimestamp()
                }
            }).then(i=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(i),
                this.storageSyncTapsSubtract(e);
                const o = Ge().getNowTimestamp() - this.lastSyncUpdate;
                return o > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * o)),
                this.timer_leveUp || this.timerLevelUpStart(),
                i
            }
            ).catch(i=>{
                Cn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_tap")
                }),
                On().rejectNotificationLevelUp()
            }
            )
        },
        async postUserExchangeId(e) {
            return await $e.post("/clicker/select-exchange", {
                body: {
                    exchangeId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserClaimDailyCombo(e) {
            return await $e.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinBuy(e="skin0") {
            return await $e.post("/clicker/buy-skin", {
                body: {
                    skinId: e,
                    timestamp: Ge().getNowTimestamp()
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinSelect(e="skin0") {
            return await $e.post("/clicker/select-skin", {
                body: {
                    skinId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        setAvailableTaps(e) {
            this.availableTaps = e,
            localStorage.setItem(me.SYNC_AVAILABLE_TAPS, String(e))
        },
        setBalanceCoins(e) {
            this.balanceCoins = e
        },
        setCurrentExchange(e) {
            this.currentExchange = e
        },
        setEarnPassivePerHour(e) {
            this.earnPassivePerHour = e
        },
        setEarnPassivePerSec(e) {
            this.earnPassivePerSec = e
        },
        setEarnPerTap(e) {
            this.earnPerTap = e
        },
        setExchangeId(e) {
            var t;
            if (this.exchangeId = e,
            e) {
                const n = (t = sn().exchanges) == null ? void 0 : t.find(r=>r.id === e);
                n && this.setCurrentExchange(n)
            }
        },
        setExchangeRefLinks(e={}) {
            this.exchangeRefLinks = e
        },
        setSkinState(e={}) {
            this.skin = e
        },
        setFirstTimeLoad(e) {
            this.first_time_load = e
        },
        setId(e) {
            this.id = e
        },
        setLastPassiveEarn(e) {
            this.lastPassiveEarn = e
        },
        setLastSyncUpdate(e) {
            this.lastSyncUpdate = e,
            this.dtServer = Math.floor(new Date().getTime() / 1e3) - e,
            sn().maxPassiveDtSeconds_local = 0
        },
        setLevel(e) {
            var t, n;
            this.level = e,
            this.coinsToLevelUp = (n = (t = sn().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === this.level)) == null ? void 0 : n.coinsToLeveUp
        },
        setMaxTaps(e) {
            this.maxTaps = e
        },
        setReferrer(e) {
            this.referrer = e
        },
        setReferrerId(e) {
            this.referrerId = e
        },
        setStop(e) {
            this.stop = e
        },
        setTapsRecoverPerSec(e) {
            this.tapsRecoverPerSec = e
        },
        setTotalCoins(e) {
            this.totalCoins = e
        },
        setTotalKeys(e) {
            this.totalKeys = e
        },
        setBalanceKeys(e) {
            this.balanceKeys = e
        },
        setUserResponseData(e) {
            var t, n, r, i, o, s, a, l, c, u, f, d, m, _, b, S, g, E, p, y, T, A;
            if ((t = e == null ? void 0 : e.clickerUser) != null && t.id && this.setId(e.clickerUser.id),
            (n = e == null ? void 0 : e.clickerUser) != null && n.totalKeys && this.setTotalKeys(e.clickerUser.totalKeys),
            (r = e == null ? void 0 : e.clickerUser) != null && r.balanceKeys && this.setBalanceKeys(e.clickerUser.balanceKeys),
            (i = e == null ? void 0 : e.clickerUser) != null && i.totalCoins && this.setTotalCoins(e.clickerUser.totalCoins),
            (o = e == null ? void 0 : e.clickerUser) != null && o.balanceCoins && (this.first_time_load ? (s = e == null ? void 0 : e.clickerUser) != null && s.lastPassiveEarn && ((a = e == null ? void 0 : e.clickerUser) == null ? void 0 : a.lastPassiveEarn) > 1 ? (this.setBalanceCoins(e.clickerUser.balanceCoins - e.clickerUser.lastPassiveEarn),
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : Hn().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((l = e == null ? void 0 : e.clickerUser) == null ? void 0 : l.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (u = e == null ? void 0 : e.clickerUser) != null && u.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (d = e == null ? void 0 : e.clickerUser) != null && d.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (m = e == null ? void 0 : e.clickerUser) != null && m.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (b = e == null ? void 0 : e.clickerUser) != null && b.upgradesForBuy && uc().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (S = e == null ? void 0 : e.clickerUser) != null && S.upgrades && uc().setMyUpgrades(e.clickerUser.upgrades),
            (g = e == null ? void 0 : e.clickerUser) != null && g.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (E = e == null ? void 0 : e.clickerUser) != null && E.referrerId && this.setReferrerId(e.clickerUser.referrerId),
            (p = e == null ? void 0 : e.clickerUser) != null && p.level) {
                const L = (y = e == null ? void 0 : e.clickerUser) == null ? void 0 : y.level;
                if (this.level && this.level < L) {
                    const {$event: C} = re();
                    C("level-up:success")
                }
                setTimeout(()=>{
                    this.setLevel(L)
                }
                , 50)
            }
            (T = e == null ? void 0 : e.clickerUser) != null && T.exchangeRefLinks && this.setExchangeRefLinks(e.clickerUser.exchangeRefLinks),
            (A = e == null ? void 0 : e.clickerUser) != null && A.skin && this.setSkinState(e.clickerUser.skin)
        },
        startTimers() {
            Hn().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(me.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(me.SYNC_TAPS, String(n + e)),
            localStorage.setItem(me.SYNC_TIMESTAMP_TAPS, String(Ge().getNowTimestamp()))
        },
        storageSyncTapsGet() {
            const e = localStorage.getItem(me.SYNC_TAPS);
            return e ? parseInt(e) ?? 0 : 0
        },
        storageSyncTapsReset() {
            localStorage.removeItem(me.SYNC_TAPS)
        },
        storageSyncTapsSet(e) {
            localStorage.setItem(me.SYNC_TAPS, String(e))
        },
        storageSyncTapsSubtract(e) {
            const t = localStorage.getItem(me.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(me.SYNC_TAPS, String(Math.max(0, n - e)))
        },
        timerEnergyReset() {
            this.timer_energy && clearInterval(this.timer_energy),
            this.timer_energy = null
        },
        timerEnergyStart() {
            this.timer_energy = Vt(this.calcEnergy, Gt.CALC_INTERVAL)
        },
        timerLevelUpReset() {
            this.timer_leveUp && clearInterval(this.timer_leveUp),
            this.timer_leveUp = null
        },
        timerLevelUpStart() {
            this.level !== this.getMaxUserLevel && this.timer_leveUp === null && (this.timer_leveUp = Vt(this.checkLevelUp, Gt.CALC_INTERVAL))
        },
        timerPassiveReset() {
            this.timer_passive && clearInterval(this.timer_passive),
            this.timer_passive = null
        },
        timerPassiveStart() {
            this.timer_passive = Vt(this.calcPassive, Gt.CALC_INTERVAL)
        },
        timerSyncReset() {
            this.timer_sync && clearInterval(this.timer_sync),
            this.timer_sync = null
        },
        timerSyncStart() {
            this.timer_sync = Vt(()=>{
                this.postSync().catch(e=>{
                    Cn.error({
                        title: re().$i18n.t("messages.request_error"),
                        message: re().$i18n.t("messages.no_sync")
                    }),
                    On().rejectNotificationLevelUp()
                }
                )
            }
            , Gt.SYNC_INTERVAL)
        },
        getCoinsToLevelUpByLevel(e) {
            var t, n;
            return ((n = (t = sn().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === e)) == null ? void 0 : n.coinsToLeveUp) ?? 0
        }
    },
    getters: {
        getUserLevel() {
            return (this.level ?? 1) > 11 ? 11 : this.level ?? 1
        },
        getMaxUserLevel() {
            let e = 0;
            for (const t of sn().userLevels_balanceCoins)
                t.level !== null && (e = Math.max(e, t.level));
            return e
        },
        getProgressLevel() {
            var n;
            let e = 0;
            const t = (n = sn().userLevels_balanceCoins) == null ? void 0 : n.find(r=>r.level === this.level);
            return this.level === this.getMaxUserLevel && (e = 100),
            this.level && this.level !== this.getMaxUserLevel && t && (e = this.balanceCoins * 100 / t.coinsToLeveUp),
            Math.min(e, 100)
        },
        getUserBalanceFormatted() {
            return Ge().numberFormat(this.balanceCoins, !1)
        }
    }
})
  , ZC = async(e,t)=>{
    var i, o;
    const n = re();
    Hn(n.$pinia);
    const r = Ut(n.$pinia);
    e && !((o = (i = e.name) == null ? void 0 : i.toString()) != null && o.includes("index")) && !r.exchangeId && No(Bo.GAME_SETTINGS_EXCHANGE)
}
  , $C = async e=>{
    let t, n;
    const r = ([t,n] = wn(()=>Um(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , eO = [zS, ZC, $C]
  , Qi = {};
function tO(e, t, n) {
    const {pathname: r, search: i, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const c = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let u = o.slice(c);
        return u[0] !== "/" && (u = "/" + u),
        Rf(u, "")
    }
    const a = Rf(r, e)
      , l = !n || Il(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : i) + o
}
const nO = It({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var b, S;
        let t, n, r = Wn().app.baseURL;
        Ft.hashMode && !r.includes("#") && (r += "#");
        const i = ((b = Ft.history) == null ? void 0 : b.call(Ft, r)) ?? (Ft.hashMode ? yS(r) : Gm(r))
          , o = ((S = Ft.routes) == null ? void 0 : S.call(Ft, fd)) ?? fd;
        let s;
        const a = tO(r, window.location, e.payload.path)
          , l = HS({
            ...Ft,
            scrollBehavior: (g,E,p)=>{
                if (E === an) {
                    s = p;
                    return
                }
                if (Ft.scrollBehavior) {
                    if (l.options.scrollBehavior = Ft.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const y = l.beforeEach(()=>{
                            y(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return Ft.scrollBehavior(g, an, s || p)
                }
            }
            ,
            history: i,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const c = hn(l.currentRoute.value);
        l.afterEach((g,E)=>{
            c.value = E
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: ()=>c.value
        });
        const u = hn(l.resolve(a))
          , f = ()=>{
            u.value = l.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        l.afterEach((g,E)=>{
            var p, y, T, A;
            ((y = (p = g.matched[0]) == null ? void 0 : p.components) == null ? void 0 : y.default) === ((A = (T = E.matched[0]) == null ? void 0 : T.components) == null ? void 0 : A.default) && f()
        }
        );
        const d = {};
        for (const g in u.value)
            Object.defineProperty(d, g, {
                get: ()=>u.value[g]
            });
        e._route = Li(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = oa();
        try {
            [t,n] = wn(()=>l.isReady()),
            await t,
            n()
        } catch (g) {
            [t,n] = wn(()=>e.runWithContext(()=>ii(g))),
            await t,
            n()
        }
        const _ = e.payload.state._layout;
        return l.beforeEach(async(g,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            g.meta = Et(g.meta),
            e.isHydrating && _ && !Kr(g.meta.layout) && (g.meta.layout = _),
            e._processingMiddleware = !0;
            {
                const y = new Set([...eO, ...e._middleware.global]);
                for (const T of g.matched) {
                    const A = T.meta.middleware;
                    if (A)
                        for (const L of cu(A))
                            y.add(L)
                }
                for (const T of y) {
                    const A = typeof T == "string" ? e._middleware.named[T] || await ((p = Qi[T]) == null ? void 0 : p.call(Qi).then(C=>C.default || C)) : T;
                    if (!A)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const L = await e.runWithContext(()=>A(g, E));
                    if (!e.payload.serverRendered && e.isHydrating && (L === !1 || L instanceof Error)) {
                        const C = L || Ul({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>ii(C)),
                        !1
                    }
                    if (L !== !0 && (L || L === !1))
                        return L
                }
            }
        }
        ),
        l.onError(async()=>{
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        ),
        l.afterEach(async(g,E,p)=>{
            delete e._processingMiddleware,
            !e.isHydrating && m.value && await e.runWithContext(LE),
            p && await e.callHook("page:loading:end"),
            g.matched.length === 0 && await e.runWithContext(()=>ii(Ul({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${g.fullPath}`,
                data: {
                    path: g.fullPath
                }
            })))
        }
        ),
        e.hooks.hookOnce("app:created", async()=>{
            try {
                const g = l.resolve(a);
                "name"in g && (g.name = void 0),
                await l.replace({
                    ...g,
                    force: !0
                }),
                l.options.scrollBehavior = Ft.scrollBehavior
            } catch (g) {
                await e.runWithContext(()=>ii(g))
            }
        }
        ),
        {
            provide: {
                router: l
            }
        }
    }
})
  , fc = globalThis.requestIdleCallback || (e=>{
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: ()=>Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(()=>{
        e(n)
    }
    , 1)
}
)
  , rO = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , Au = e=>{
    const t = re();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        fc(e)
    }
    ) : fc(e)
}
  , iO = It({
    name: "nuxt:payload",
    setup(e) {
        qt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await Wf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        Au(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                Mo(n).protocol || await Wf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(aa, 1e3)
        }
        )
    }
})
  , oO = It(e=>{
    let t;
    async function n() {
        const r = await aa();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const i = await $fetch(tu("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && e.hooks.callHook("app:manifest:update", i)
    }
    Au(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function zg(e, t=qt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const i = t._preloadPromises = t._preloadPromises || [];
    if (i.length > 4)
        return Promise.all(i).then(()=>zg(e, t));
    t._routePreloaded.add(n);
    const o = r.map(s=>{
        var a;
        return (a = s.components) == null ? void 0 : a.default
    }
    ).filter(s=>typeof s == "function");
    for (const s of o) {
        const a = Promise.resolve(s()).catch(()=>{}
        ).finally(()=>i.splice(i.indexOf(a)));
        i.push(a)
    }
    await Promise.all(i)
}
function sO(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = ho(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: re().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const aO = (...e)=>e.find(t=>t !== void 0);
function Qg(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, i) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return ch(r, e.trailingSlash);
        const o = "path"in r && r.path !== void 0 ? r.path : i(r).path
          , s = {
            ...r,
            path: ch(o, e.trailingSlash)
        };
        return "name"in s && delete s.name,
        s
    }
    return Ve({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(r, {slots: i}) {
            const o = qt()
              , s = Wn()
              , a = ue(()=>{
                const _ = r.to || r.href || "";
                return n(_, o.resolve)
            }
            )
              , l = ue(()=>typeof a.value == "string" && Dn(a.value, {
                acceptRelative: !0
            }))
              , c = ue(()=>r.target && r.target !== "_self")
              , u = ue(()=>r.external || c.value ? !0 : typeof a.value == "object" ? !1 : a.value === "" || l.value)
              , f = le(!1)
              , d = le(null)
              , m = _=>{
                var b;
                d.value = r.custom ? (b = _ == null ? void 0 : _.$el) == null ? void 0 : b.nextElementSibling : _ == null ? void 0 : _.$el
            }
            ;
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !cO()) {
                const b = re();
                let S, g = null;
                Rt(()=>{
                    const E = lO();
                    Au(()=>{
                        S = fc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (g = E.observe(d.value, async()=>{
                                g == null || g(),
                                g = null;
                                const y = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                                await Promise.all([b.hooks.callHook("link:prefetch", y).catch(()=>{}
                                ), !u.value && zg(a.value, o).catch(()=>{}
                                )]),
                                f.value = !0
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                gn(()=>{
                    S && rO(S),
                    g == null || g(),
                    g = null
                }
                )
            }
            return ()=>{
                var g, E;
                if (!u.value) {
                    const p = {
                        ref: m,
                        to: a.value,
                        activeClass: r.activeClass || e.activeClass,
                        exactActiveClass: r.exactActiveClass || e.exactActiveClass,
                        replace: r.replace,
                        ariaCurrentValue: r.ariaCurrentValue,
                        custom: r.custom
                    };
                    return r.custom || (f.value && (p.class = r.prefetchedClass || e.prefetchedClass),
                    p.rel = r.rel || void 0),
                    ct(Yr("RouterLink"), p, i.default)
                }
                const _ = typeof a.value == "object" ? ((g = o.resolve(a.value)) == null ? void 0 : g.href) ?? null : a.value && !r.external && !l.value ? n(Oi(s.app.baseURL, a.value), o.resolve) : a.value || null
                  , b = r.target || null
                  , S = aO(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || c.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!i.default)
                        return null;
                    const p = ()=>No(_, {
                        replace: r.replace,
                        external: r.external
                    });
                    return i.default({
                        href: _,
                        navigate: p,
                        get route() {
                            if (!_)
                                return;
                            const y = Mo(_);
                            return {
                                path: y.pathname,
                                fullPath: y.pathname,
                                get query() {
                                    return eu(y.search)
                                },
                                hash: y.hash,
                                params: {},
                                name: void 0,
                                matched: [],
                                redirectedFrom: void 0,
                                meta: {},
                                href: _
                            }
                        },
                        rel: S,
                        target: b,
                        isExternal: u.value,
                        isActive: !1,
                        isExactActive: !1
                    })
                }
                return ct("a", {
                    ref: d,
                    href: _,
                    rel: S,
                    target: b
                }, (E = i.default) == null ? void 0 : E.call(i))
            }
        }
    })
}
const WM = Qg(IT);
function ch(e, t) {
    const n = t === "append" ? fo : Po;
    return Dn(e) && !e.startsWith("http") ? e : n(e, !0)
}
function lO() {
    const e = re();
    if (e._observer)
        return e._observer;
    let t = null;
    const n = new Map
      , r = (o,s)=>(t || (t = new IntersectionObserver(a=>{
        for (const l of a) {
            const c = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && c && c()
        }
    }
    )),
    n.set(o, s),
    t.observe(o),
    ()=>{
        n.delete(o),
        t.unobserve(o),
        n.size === 0 && (t.disconnect(),
        t = null)
    }
    );
    return e._observer = {
        observe: r
    }
}
function cO() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const uO = It(e=>{
    const t = Sw();
    return e.vueApp.use(t),
    Uo(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , fO = It({
    name: "nuxt:global-components"
})
  , fr = {
    default: ()=>w(()=>import("./default.fxhIZ1Co.js"), __vite__mapDeps([27, 12, 2, 8, 3, 16, 1, 6]), import.meta.url).then(e=>e.default || e),
    main: ()=>w(()=>import("./main.BLLn_REC.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , dO = It({
    name: "nuxt:prefetch",
    setup(e) {
        const t = qt();
        e.hooks.hook("app:mounted", ()=>{
            t.beforeEach(async n=>{
                var i;
                const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
                r && typeof fr[r] == "function" && await fr[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n=>{
            if (Dn(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const i = r.meta.layout;
            let o = cu(r.meta.middleware);
            o = o.filter(s=>typeof s == "string");
            for (const s of o)
                typeof Qi[s] == "function" && Qi[s]();
            i && typeof fr[i] == "function" && fr[i]()
        }
        )
    }
});
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ii(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function GM(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var Xg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        var n = 1e3
          , r = 6e4
          , i = 36e5
          , o = "millisecond"
          , s = "second"
          , a = "minute"
          , l = "hour"
          , c = "day"
          , u = "week"
          , f = "month"
          , d = "quarter"
          , m = "year"
          , _ = "date"
          , b = "Invalid Date"
          , S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , E = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(W) {
                var K = ["th", "st", "nd", "rd"]
                  , N = W % 100;
                return "[" + W + (K[(N - 20) % 10] || K[N] || K[0]) + "]"
            }
        }
          , p = function(W, K, N) {
            var Y = String(W);
            return !Y || Y.length >= K ? W : "" + Array(K + 1 - Y.length).join(N) + W
        }
          , y = {
            s: p,
            z: function(W) {
                var K = -W.utcOffset()
                  , N = Math.abs(K)
                  , Y = Math.floor(N / 60)
                  , B = N % 60;
                return (K <= 0 ? "+" : "-") + p(Y, 2, "0") + ":" + p(B, 2, "0")
            },
            m: function W(K, N) {
                if (K.date() < N.date())
                    return -W(N, K);
                var Y = 12 * (N.year() - K.year()) + (N.month() - K.month())
                  , B = K.clone().add(Y, f)
                  , ae = N - B < 0
                  , j = K.clone().add(Y + (ae ? -1 : 1), f);
                return +(-(Y + (N - B) / (ae ? B - j : j - B)) || 0)
            },
            a: function(W) {
                return W < 0 ? Math.ceil(W) || 0 : Math.floor(W)
            },
            p: function(W) {
                return {
                    M: f,
                    y: m,
                    w: u,
                    d: c,
                    D: _,
                    h: l,
                    m: a,
                    s,
                    ms: o,
                    Q: d
                }[W] || String(W || "").toLowerCase().replace(/s$/, "")
            },
            u: function(W) {
                return W === void 0
            }
        }
          , T = "en"
          , A = {};
        A[T] = E;
        var L = "$isDayjsObject"
          , C = function(W) {
            return W instanceof U || !(!W || !W[L])
        }
          , O = function W(K, N, Y) {
            var B;
            if (!K)
                return T;
            if (typeof K == "string") {
                var ae = K.toLowerCase();
                A[ae] && (B = ae),
                N && (A[ae] = N,
                B = ae);
                var j = K.split("-");
                if (!B && j.length > 1)
                    return W(j[0])
            } else {
                var ce = K.name;
                A[ce] = K,
                B = ce
            }
            return !Y && B && (T = B),
            B || !Y && T
        }
          , D = function(W, K) {
            if (C(W))
                return W.clone();
            var N = typeof K == "object" ? K : {};
            return N.date = W,
            N.args = arguments,
            new U(N)
        }
          , F = y;
        F.l = O,
        F.i = C,
        F.w = function(W, K) {
            return D(W, {
                locale: K.$L,
                utc: K.$u,
                x: K.$x,
                $offset: K.$offset
            })
        }
        ;
        var U = function() {
            function W(N) {
                this.$L = O(N.locale, null, !0),
                this.parse(N),
                this.$x = this.$x || N.x || {},
                this[L] = !0
            }
            var K = W.prototype;
            return K.parse = function(N) {
                this.$d = function(Y) {
                    var B = Y.date
                      , ae = Y.utc;
                    if (B === null)
                        return new Date(NaN);
                    if (F.u(B))
                        return new Date;
                    if (B instanceof Date)
                        return new Date(B);
                    if (typeof B == "string" && !/Z$/i.test(B)) {
                        var j = B.match(S);
                        if (j) {
                            var ce = j[2] - 1 || 0
                              , _e = (j[7] || "0").substring(0, 3);
                            return ae ? new Date(Date.UTC(j[1], ce, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, _e)) : new Date(j[1],ce,j[3] || 1,j[4] || 0,j[5] || 0,j[6] || 0,_e)
                        }
                    }
                    return new Date(B)
                }(N),
                this.init()
            }
            ,
            K.init = function() {
                var N = this.$d;
                this.$y = N.getFullYear(),
                this.$M = N.getMonth(),
                this.$D = N.getDate(),
                this.$W = N.getDay(),
                this.$H = N.getHours(),
                this.$m = N.getMinutes(),
                this.$s = N.getSeconds(),
                this.$ms = N.getMilliseconds()
            }
            ,
            K.$utils = function() {
                return F
            }
            ,
            K.isValid = function() {
                return this.$d.toString() !== b
            }
            ,
            K.isSame = function(N, Y) {
                var B = D(N);
                return this.startOf(Y) <= B && B <= this.endOf(Y)
            }
            ,
            K.isAfter = function(N, Y) {
                return D(N) < this.startOf(Y)
            }
            ,
            K.isBefore = function(N, Y) {
                return this.endOf(Y) < D(N)
            }
            ,
            K.$g = function(N, Y, B) {
                return F.u(N) ? this[Y] : this.set(B, N)
            }
            ,
            K.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            K.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            K.startOf = function(N, Y) {
                var B = this
                  , ae = !!F.u(Y) || Y
                  , j = F.p(N)
                  , ce = function(Q, $) {
                    var ve = F.w(B.$u ? Date.UTC(B.$y, $, Q) : new Date(B.$y,$,Q), B);
                    return ae ? ve : ve.endOf(c)
                }
                  , _e = function(Q, $) {
                    return F.w(B.toDate()[Q].apply(B.toDate("s"), (ae ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($)), B)
                }
                  , Ke = this.$W
                  , Je = this.$M
                  , at = this.$D
                  , Ze = "set" + (this.$u ? "UTC" : "");
                switch (j) {
                case m:
                    return ae ? ce(1, 0) : ce(31, 11);
                case f:
                    return ae ? ce(1, Je) : ce(0, Je + 1);
                case u:
                    var H = this.$locale().weekStart || 0
                      , te = (Ke < H ? Ke + 7 : Ke) - H;
                    return ce(ae ? at - te : at + (6 - te), Je);
                case c:
                case _:
                    return _e(Ze + "Hours", 0);
                case l:
                    return _e(Ze + "Minutes", 1);
                case a:
                    return _e(Ze + "Seconds", 2);
                case s:
                    return _e(Ze + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            K.endOf = function(N) {
                return this.startOf(N, !1)
            }
            ,
            K.$set = function(N, Y) {
                var B, ae = F.p(N), j = "set" + (this.$u ? "UTC" : ""), ce = (B = {},
                B[c] = j + "Date",
                B[_] = j + "Date",
                B[f] = j + "Month",
                B[m] = j + "FullYear",
                B[l] = j + "Hours",
                B[a] = j + "Minutes",
                B[s] = j + "Seconds",
                B[o] = j + "Milliseconds",
                B)[ae], _e = ae === c ? this.$D + (Y - this.$W) : Y;
                if (ae === f || ae === m) {
                    var Ke = this.clone().set(_, 1);
                    Ke.$d[ce](_e),
                    Ke.init(),
                    this.$d = Ke.set(_, Math.min(this.$D, Ke.daysInMonth())).$d
                } else
                    ce && this.$d[ce](_e);
                return this.init(),
                this
            }
            ,
            K.set = function(N, Y) {
                return this.clone().$set(N, Y)
            }
            ,
            K.get = function(N) {
                return this[F.p(N)]()
            }
            ,
            K.add = function(N, Y) {
                var B, ae = this;
                N = Number(N);
                var j = F.p(Y)
                  , ce = function(Je) {
                    var at = D(ae);
                    return F.w(at.date(at.date() + Math.round(Je * N)), ae)
                };
                if (j === f)
                    return this.set(f, this.$M + N);
                if (j === m)
                    return this.set(m, this.$y + N);
                if (j === c)
                    return ce(1);
                if (j === u)
                    return ce(7);
                var _e = (B = {},
                B[a] = r,
                B[l] = i,
                B[s] = n,
                B)[j] || 1
                  , Ke = this.$d.getTime() + N * _e;
                return F.w(Ke, this)
            }
            ,
            K.subtract = function(N, Y) {
                return this.add(-1 * N, Y)
            }
            ,
            K.format = function(N) {
                var Y = this
                  , B = this.$locale();
                if (!this.isValid())
                    return B.invalidDate || b;
                var ae = N || "YYYY-MM-DDTHH:mm:ssZ"
                  , j = F.z(this)
                  , ce = this.$H
                  , _e = this.$m
                  , Ke = this.$M
                  , Je = B.weekdays
                  , at = B.months
                  , Ze = B.meridiem
                  , H = function($, ve, Ue, h) {
                    return $ && ($[ve] || $(Y, ae)) || Ue[ve].slice(0, h)
                }
                  , te = function($) {
                    return F.s(ce % 12 || 12, $, "0")
                }
                  , Q = Ze || function($, ve, Ue) {
                    var h = $ < 12 ? "AM" : "PM";
                    return Ue ? h.toLowerCase() : h
                }
                ;
                return ae.replace(g, function($, ve) {
                    return ve || function(Ue) {
                        switch (Ue) {
                        case "YY":
                            return String(Y.$y).slice(-2);
                        case "YYYY":
                            return F.s(Y.$y, 4, "0");
                        case "M":
                            return Ke + 1;
                        case "MM":
                            return F.s(Ke + 1, 2, "0");
                        case "MMM":
                            return H(B.monthsShort, Ke, at, 3);
                        case "MMMM":
                            return H(at, Ke);
                        case "D":
                            return Y.$D;
                        case "DD":
                            return F.s(Y.$D, 2, "0");
                        case "d":
                            return String(Y.$W);
                        case "dd":
                            return H(B.weekdaysMin, Y.$W, Je, 2);
                        case "ddd":
                            return H(B.weekdaysShort, Y.$W, Je, 3);
                        case "dddd":
                            return Je[Y.$W];
                        case "H":
                            return String(ce);
                        case "HH":
                            return F.s(ce, 2, "0");
                        case "h":
                            return te(1);
                        case "hh":
                            return te(2);
                        case "a":
                            return Q(ce, _e, !0);
                        case "A":
                            return Q(ce, _e, !1);
                        case "m":
                            return String(_e);
                        case "mm":
                            return F.s(_e, 2, "0");
                        case "s":
                            return String(Y.$s);
                        case "ss":
                            return F.s(Y.$s, 2, "0");
                        case "SSS":
                            return F.s(Y.$ms, 3, "0");
                        case "Z":
                            return j
                        }
                        return null
                    }($) || j.replace(":", "")
                })
            }
            ,
            K.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            K.diff = function(N, Y, B) {
                var ae, j = this, ce = F.p(Y), _e = D(N), Ke = (_e.utcOffset() - this.utcOffset()) * r, Je = this - _e, at = function() {
                    return F.m(j, _e)
                };
                switch (ce) {
                case m:
                    ae = at() / 12;
                    break;
                case f:
                    ae = at();
                    break;
                case d:
                    ae = at() / 3;
                    break;
                case u:
                    ae = (Je - Ke) / 6048e5;
                    break;
                case c:
                    ae = (Je - Ke) / 864e5;
                    break;
                case l:
                    ae = Je / i;
                    break;
                case a:
                    ae = Je / r;
                    break;
                case s:
                    ae = Je / n;
                    break;
                default:
                    ae = Je
                }
                return B ? ae : F.a(ae)
            }
            ,
            K.daysInMonth = function() {
                return this.endOf(f).$D
            }
            ,
            K.$locale = function() {
                return A[this.$L]
            }
            ,
            K.locale = function(N, Y) {
                if (!N)
                    return this.$L;
                var B = this.clone()
                  , ae = O(N, Y, !0);
                return ae && (B.$L = ae),
                B
            }
            ,
            K.clone = function() {
                return F.w(this.$d, this)
            }
            ,
            K.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            K.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            K.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            K.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            W
        }()
          , Z = U.prototype;
        return D.prototype = Z,
        [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", c], ["$M", f], ["$y", m], ["$D", _]].forEach(function(W) {
            Z[W[1]] = function(K) {
                return this.$g(K, W[0], W[1])
            }
        }),
        D.extend = function(W, K) {
            return W.$i || (W(K, U, D),
            W.$i = !0),
            D
        }
        ,
        D.locale = O,
        D.isDayjs = C,
        D.unix = function(W) {
            return D(1e3 * W)
        }
        ,
        D.en = A[T],
        D.Ls = A,
        D.p = {},
        D
    })
}
)(Xg);
var vn = Xg.exports;
const Vn = Ii(vn);
var Zg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        return function(n, r, i) {
            i.updateLocale = function(o, s) {
                var a = i.Ls[o];
                if (a)
                    return (s ? Object.keys(s) : []).forEach(function(l) {
                        a[l] = s[l]
                    }),
                    a
            }
        }
    })
}
)(Zg);
var hO = Zg.exports;
const pO = Ii(hO);
var mO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        return {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(n) {
                var r = ["th", "st", "nd", "rd"]
                  , i = n % 100;
                return "[" + n + (r[(i - 20) % 10] || r[i] || r[0]) + "]"
            }
        }
    })
}
)(mO);
var gO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "es",
            monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            weekStart: 1,
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinal: function(s) {
                return s + "º"
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(gO);
var yO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "hi",
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(yO);
var vO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "id",
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            weekStart: 1,
            formats: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(vO);
var _O = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "pt",
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            ordinal: function(s) {
                return s + "º"
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "alguns segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(_O);
var bO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(_) {
            return _ && typeof _ == "object" && "default"in _ ? _ : {
                default: _
            }
        }
        var i = r(n)
          , o = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
          , s = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
          , a = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_")
          , l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
          , c = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function u(_, b, S) {
            var g, E;
            return S === "m" ? b ? "минута" : "минуту" : _ + " " + (g = +_,
            E = {
                mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[S].split("_"),
            g % 10 == 1 && g % 100 != 11 ? E[0] : g % 10 >= 2 && g % 10 <= 4 && (g % 100 < 10 || g % 100 >= 20) ? E[1] : E[2])
        }
        var f = function(_, b) {
            return c.test(b) ? o[_.month()] : s[_.month()]
        };
        f.s = s,
        f.f = o;
        var d = function(_, b) {
            return c.test(b) ? a[_.month()] : l[_.month()]
        };
        d.s = l,
        d.f = a;
        var m = {
            name: "ru",
            weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            months: f,
            monthsShort: d,
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: u,
                mm: u,
                h: "час",
                hh: u,
                d: "день",
                dd: u,
                M: "месяц",
                MM: u,
                y: "год",
                yy: u
            },
            ordinal: function(_) {
                return _
            },
            meridiem: function(_) {
                return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера"
            }
        };
        return i.default.locale(m, null, !0),
        m
    })
}
)(bO);
var EO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "th",
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(EO);
var TO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "tl-ph",
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            weekStart: 1,
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(TO);
var SO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "tr",
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekStart: 1,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(SO);
var AO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "vi",
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            weekStart: 1,
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(AO);
var wO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(vn)
    }
    )(St, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "uz",
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            weekStart: 1,
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "%s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(wO);
var $g = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        return function(n, r, i) {
            n = n || {};
            var o = r.prototype
              , s = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function a(c, u, f, d) {
                return o.fromToBase(c, u, f, d)
            }
            i.en.relativeTime = s,
            o.fromToBase = function(c, u, f, d, m) {
                for (var _, b, S, g = f.$locale().relativeTime || s, E = n.thresholds || [{
                    l: "s",
                    r: 44,
                    d: "second"
                }, {
                    l: "m",
                    r: 89
                }, {
                    l: "mm",
                    r: 44,
                    d: "minute"
                }, {
                    l: "h",
                    r: 89
                }, {
                    l: "hh",
                    r: 21,
                    d: "hour"
                }, {
                    l: "d",
                    r: 35
                }, {
                    l: "dd",
                    r: 25,
                    d: "day"
                }, {
                    l: "M",
                    r: 45
                }, {
                    l: "MM",
                    r: 10,
                    d: "month"
                }, {
                    l: "y",
                    r: 17
                }, {
                    l: "yy",
                    d: "year"
                }], p = E.length, y = 0; y < p; y += 1) {
                    var T = E[y];
                    T.d && (_ = d ? i(c).diff(f, T.d, !0) : f.diff(c, T.d, !0));
                    var A = (n.rounding || Math.round)(Math.abs(_));
                    if (S = _ > 0,
                    A <= T.r || !T.r) {
                        A <= 1 && y > 0 && (T = E[y - 1]);
                        var L = g[T.l];
                        m && (A = m("" + A)),
                        b = typeof L == "string" ? L.replace("%d", A) : L(A, u, T.l, S);
                        break
                    }
                }
                if (u)
                    return b;
                var C = S ? g.future : g.past;
                return typeof C == "function" ? C(b) : C.replace("%s", b)
            }
            ,
            o.to = function(c, u) {
                return a(c, u, this, !0)
            }
            ,
            o.from = function(c, u) {
                return a(c, u, this)
            }
            ;
            var l = function(c) {
                return c.$u ? i.utc() : i()
            };
            o.toNow = function(c) {
                return this.to(l(this), c)
            }
            ,
            o.fromNow = function(c) {
                return this.from(l(this), c)
            }
        }
    })
}
)($g);
var kO = $g.exports;
const LO = Ii(kO);
var ey = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        var n = "minute"
          , r = /[+-]\d\d(?::?\d\d)?/g
          , i = /([+-]|\d\d)/g;
        return function(o, s, a) {
            var l = s.prototype;
            a.utc = function(b) {
                var S = {
                    date: b,
                    utc: !0,
                    args: arguments
                };
                return new s(S)
            }
            ,
            l.utc = function(b) {
                var S = a(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return b ? S.add(this.utcOffset(), n) : S
            }
            ,
            l.local = function() {
                return a(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            }
            ;
            var c = l.parse;
            l.parse = function(b) {
                b.utc && (this.$u = !0),
                this.$utils().u(b.$offset) || (this.$offset = b.$offset),
                c.call(this, b)
            }
            ;
            var u = l.init;
            l.init = function() {
                if (this.$u) {
                    var b = this.$d;
                    this.$y = b.getUTCFullYear(),
                    this.$M = b.getUTCMonth(),
                    this.$D = b.getUTCDate(),
                    this.$W = b.getUTCDay(),
                    this.$H = b.getUTCHours(),
                    this.$m = b.getUTCMinutes(),
                    this.$s = b.getUTCSeconds(),
                    this.$ms = b.getUTCMilliseconds()
                } else
                    u.call(this)
            }
            ;
            var f = l.utcOffset;
            l.utcOffset = function(b, S) {
                var g = this.$utils().u;
                if (g(b))
                    return this.$u ? 0 : g(this.$offset) ? f.call(this) : this.$offset;
                if (typeof b == "string" && (b = function(T) {
                    T === void 0 && (T = "");
                    var A = T.match(r);
                    if (!A)
                        return null;
                    var L = ("" + A[0]).match(i) || ["-", 0, 0]
                      , C = L[0]
                      , O = 60 * +L[1] + +L[2];
                    return O === 0 ? 0 : C === "+" ? O : -O
                }(b),
                b === null))
                    return this;
                var E = Math.abs(b) <= 16 ? 60 * b : b
                  , p = this;
                if (S)
                    return p.$offset = E,
                    p.$u = b === 0,
                    p;
                if (b !== 0) {
                    var y = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (p = this.local().add(E + y, n)).$offset = E,
                    p.$x.$localOffset = y
                } else
                    p = this.utc();
                return p
            }
            ;
            var d = l.format;
            l.format = function(b) {
                var S = b || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return d.call(this, S)
            }
            ,
            l.valueOf = function() {
                var b = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * b
            }
            ,
            l.isUTC = function() {
                return !!this.$u
            }
            ,
            l.toISOString = function() {
                return this.toDate().toISOString()
            }
            ,
            l.toString = function() {
                return this.toDate().toUTCString()
            }
            ;
            var m = l.toDate;
            l.toDate = function(b) {
                return b === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this)
            }
            ;
            var _ = l.diff;
            l.diff = function(b, S, g) {
                if (b && this.$u === b.$u)
                    return _.call(this, b, S, g);
                var E = this.local()
                  , p = a(b).local();
                return _.call(E, p, S, g)
            }
        }
    })
}
)(ey);
var CO = ey.exports;
const OO = Ii(CO);
var ty = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        var n = {
            year: 0,
            month: 1,
            day: 2,
            hour: 3,
            minute: 4,
            second: 5
        }
          , r = {};
        return function(i, o, s) {
            var a, l = function(d, m, _) {
                _ === void 0 && (_ = {});
                var b = new Date(d)
                  , S = function(g, E) {
                    E === void 0 && (E = {});
                    var p = E.timeZoneName || "short"
                      , y = g + "|" + p
                      , T = r[y];
                    return T || (T = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: g,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: p
                    }),
                    r[y] = T),
                    T
                }(m, _);
                return S.formatToParts(b)
            }, c = function(d, m) {
                for (var _ = l(d, m), b = [], S = 0; S < _.length; S += 1) {
                    var g = _[S]
                      , E = g.type
                      , p = g.value
                      , y = n[E];
                    y >= 0 && (b[y] = parseInt(p, 10))
                }
                var T = b[3]
                  , A = T === 24 ? 0 : T
                  , L = b[0] + "-" + b[1] + "-" + b[2] + " " + A + ":" + b[4] + ":" + b[5] + ":000"
                  , C = +d;
                return (s.utc(L).valueOf() - (C -= C % 1e3)) / 6e4
            }, u = o.prototype;
            u.tz = function(d, m) {
                d === void 0 && (d = a);
                var _ = this.utcOffset()
                  , b = this.toDate()
                  , S = b.toLocaleString("en-US", {
                    timeZone: d
                })
                  , g = Math.round((b - new Date(S)) / 1e3 / 60)
                  , E = s(S, {
                    locale: this.$L
                }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(b.getTimezoneOffset() / 15) - g, !0);
                if (m) {
                    var p = E.utcOffset();
                    E = E.add(_ - p, "minute")
                }
                return E.$x.$timezone = d,
                E
            }
            ,
            u.offsetName = function(d) {
                var m = this.$x.$timezone || s.tz.guess()
                  , _ = l(this.valueOf(), m, {
                    timeZoneName: d
                }).find(function(b) {
                    return b.type.toLowerCase() === "timezonename"
                });
                return _ && _.value
            }
            ;
            var f = u.startOf;
            u.startOf = function(d, m) {
                if (!this.$x || !this.$x.$timezone)
                    return f.call(this, d, m);
                var _ = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                    locale: this.$L
                });
                return f.call(_, d, m).tz(this.$x.$timezone, !0)
            }
            ,
            s.tz = function(d, m, _) {
                var b = _ && m
                  , S = _ || m || a
                  , g = c(+s(), S);
                if (typeof d != "string")
                    return s(d).tz(S);
                var E = function(A, L, C) {
                    var O = A - 60 * L * 1e3
                      , D = c(O, C);
                    if (L === D)
                        return [O, L];
                    var F = c(O -= 60 * (D - L) * 1e3, C);
                    return D === F ? [O, D] : [A - 60 * Math.min(D, F) * 1e3, Math.max(D, F)]
                }(s.utc(d, b).valueOf(), g, S)
                  , p = E[0]
                  , y = E[1]
                  , T = s(p).utcOffset(y);
                return T.$x.$timezone = S,
                T
            }
            ,
            s.tz.guess = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            ,
            s.tz.setDefault = function(d) {
                a = d
            }
        }
    })
}
)(ty);
var RO = ty.exports;
const IO = Ii(RO);
var ny = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(St, function() {
        var n = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        return function(r, i, o) {
            var s = i.prototype
              , a = s.format;
            o.en.formats = n,
            s.format = function(l) {
                l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
                var c = this.$locale().formats
                  , u = function(f, d) {
                    return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, _, b) {
                        var S = b && b.toUpperCase();
                        return _ || d[b] || n[b] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, E, p) {
                            return E || p.slice(1)
                        })
                    })
                }(l, c === void 0 ? {} : c);
                return a.call(this, u)
            }
        }
    })
}
)(ny);
var PO = ny.exports;
const MO = Ii(PO);
Vn.extend(pO);
Vn.extend(LO);
Vn.extend(OO);
Vn.extend(IO);
Vn.extend(MO);
Vn.tz.setDefault("Europe/Moscow");
Vn.updateLocale("en");
Vn.locale("en");
const DO = It(async e=>e.provide("dayjs", Vn))
  , NO = ["top", "right", "bottom", "left"]
  , uh = ["start", "end"]
  , fh = NO.reduce((e,t)=>e.concat(t, t + "-" + uh[0], t + "-" + uh[1]), [])
  , _o = Math.min
  , Dr = Math.max
  , VO = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , UO = {
    start: "end",
    end: "start"
};
function dc(e, t, n) {
    return Dr(e, _o(t, n))
}
function Xr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Mn(e) {
    return e.split("-")[0]
}
function fn(e) {
    return e.split("-")[1]
}
function ry(e) {
    return e === "x" ? "y" : "x"
}
function wu(e) {
    return e === "y" ? "height" : "width"
}
function Fo(e) {
    return ["top", "bottom"].includes(Mn(e)) ? "y" : "x"
}
function ku(e) {
    return ry(Fo(e))
}
function iy(e, t, n) {
    n === void 0 && (n = !1);
    const r = fn(e)
      , i = ku(e)
      , o = wu(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Bs(s)),
    [s, Bs(s)]
}
function BO(e) {
    const t = Bs(e);
    return [Us(e), t, Us(t)]
}
function Us(e) {
    return e.replace(/start|end/g, t=>UO[t])
}
function xO(e, t, n) {
    const r = ["left", "right"]
      , i = ["right", "left"]
      , o = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
        return t ? o : s;
    default:
        return []
    }
}
function FO(e, t, n, r) {
    const i = fn(e);
    let o = xO(Mn(e), n === "start", r);
    return i && (o = o.map(s=>s + "-" + i),
    t && (o = o.concat(o.map(Us)))),
    o
}
function Bs(e) {
    return e.replace(/left|right|bottom|top/g, t=>VO[t])
}
function HO(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function oy(e) {
    return typeof e != "number" ? HO(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Xi(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function dh(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = Fo(t)
      , s = ku(t)
      , a = wu(s)
      , l = Mn(t)
      , c = o === "y"
      , u = r.x + r.width / 2 - i.width / 2
      , f = r.y + r.height / 2 - i.height / 2
      , d = r[a] / 2 - i[a] / 2;
    let m;
    switch (l) {
    case "top":
        m = {
            x: u,
            y: r.y - i.height
        };
        break;
    case "bottom":
        m = {
            x: u,
            y: r.y + r.height
        };
        break;
    case "right":
        m = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        m = {
            x: r.x - i.width,
            y: f
        };
        break;
    default:
        m = {
            x: r.x,
            y: r.y
        }
    }
    switch (fn(t)) {
    case "start":
        m[s] -= d * (n && c ? -1 : 1);
        break;
    case "end":
        m[s] += d * (n && c ? -1 : 1);
        break
    }
    return m
}
const jO = async(e,t,n)=>{
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: u, y: f} = dh(c, r, l)
      , d = r
      , m = {}
      , _ = 0;
    for (let b = 0; b < a.length; b++) {
        const {name: S, fn: g} = a[b]
          , {x: E, y: p, data: y, reset: T} = await g({
            x: u,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: i,
            middlewareData: m,
            rects: c,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = E ?? u,
        f = p ?? f,
        m = {
            ...m,
            [S]: {
                ...m[S],
                ...y
            }
        },
        T && _ <= 50 && (_++,
        typeof T == "object" && (T.placement && (d = T.placement),
        T.rects && (c = T.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : T.rects),
        {x: u, y: f} = dh(c, d, l)),
        b = -1)
    }
    return {
        x: u,
        y: f,
        placement: d,
        strategy: i,
        middlewareData: m
    }
}
;
async function ya(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = Xr(t, e)
      , _ = oy(m)
      , S = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = Xi(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(S))) == null || n ? S : S.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: l
    }))
      , E = f === "floating" ? {
        x: r,
        y: i,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , p = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating))
      , y = await (o.isElement == null ? void 0 : o.isElement(p)) ? await (o.getScale == null ? void 0 : o.getScale(p)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , T = Xi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: E,
        offsetParent: p,
        strategy: l
    }) : E);
    return {
        top: (g.top - T.top + _.top) / y.y,
        bottom: (T.bottom - g.bottom + _.bottom) / y.y,
        left: (g.left - T.left + _.left) / y.x,
        right: (T.right - g.right + _.right) / y.x
    }
}
const KO = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: c, padding: u=0} = Xr(e, t) || {};
        if (c == null)
            return {};
        const f = oy(u)
          , d = {
            x: n,
            y: r
        }
          , m = ku(i)
          , _ = wu(m)
          , b = await s.getDimensions(c)
          , S = m === "y"
          , g = S ? "top" : "left"
          , E = S ? "bottom" : "right"
          , p = S ? "clientHeight" : "clientWidth"
          , y = o.reference[_] + o.reference[m] - d[m] - o.floating[_]
          , T = d[m] - o.reference[m]
          , A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
        let L = A ? A[p] : 0;
        (!L || !await (s.isElement == null ? void 0 : s.isElement(A))) && (L = a.floating[p] || o.floating[_]);
        const C = y / 2 - T / 2
          , O = L / 2 - b[_] / 2 - 1
          , D = _o(f[g], O)
          , F = _o(f[E], O)
          , U = D
          , Z = L - b[_] - F
          , W = L / 2 - b[_] / 2 + C
          , K = dc(U, W, Z)
          , N = !l.arrow && fn(i) != null && W !== K && o.reference[_] / 2 - (W < U ? D : F) - b[_] / 2 < 0
          , Y = N ? W < U ? W - U : W - Z : 0;
        return {
            [m]: d[m] + Y,
            data: {
                [m]: K,
                centerOffset: W - K - Y,
                ...N && {
                    alignmentOffset: Y
                }
            },
            reset: N
        }
    }
});
function YO(e, t, n) {
    return (e ? [...n.filter(i=>fn(i) === e), ...n.filter(i=>fn(i) !== e)] : n.filter(i=>Mn(i) === i)).filter(i=>e ? fn(i) === e || (t ? Us(i) !== i : !1) : !0)
}
const qO = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, i;
            const {rects: o, middlewareData: s, placement: a, platform: l, elements: c} = t
              , {crossAxis: u=!1, alignment: f, allowedPlacements: d=fh, autoAlignment: m=!0, ..._} = Xr(e, t)
              , b = f !== void 0 || d === fh ? YO(f || null, m, d) : d
              , S = await ya(t, _)
              , g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = b[g];
            if (E == null)
                return {};
            const p = iy(E, o, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: b[0]
                    }
                };
            const y = [S[Mn(E)], S[p[0]], S[p[1]]]
              , T = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
                placement: E,
                overflows: y
            }]
              , A = b[g + 1];
            if (A)
                return {
                    data: {
                        index: g + 1,
                        overflows: T
                    },
                    reset: {
                        placement: A
                    }
                };
            const L = T.map(D=>{
                const F = fn(D.placement);
                return [D.placement, F && u ? D.overflows.slice(0, 2).reduce((U,Z)=>U + Z, 0) : D.overflows[0], D.overflows]
            }
            ).sort((D,F)=>D[1] - F[1])
              , O = ((i = L.filter(D=>D[2].slice(0, fn(D[0]) ? 2 : 3).every(F=>F <= 0))[0]) == null ? void 0 : i[0]) || L[0][0];
            return O !== a ? {
                data: {
                    index: g + 1,
                    overflows: T
                },
                reset: {
                    placement: O
                }
            } : {}
        }
    }
}
  , WO = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: c} = t
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: _="none", flipAlignment: b=!0, ...S} = Xr(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = Mn(i)
              , E = Mn(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , y = d || (E || !b ? [Bs(a)] : BO(a));
            !d && _ !== "none" && y.push(...FO(a, b, _, p));
            const T = [a, ...y]
              , A = await ya(t, S)
              , L = [];
            let C = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (u && L.push(A[g]),
            f) {
                const U = iy(i, s, p);
                L.push(A[U[0]], A[U[1]])
            }
            if (C = [...C, {
                placement: i,
                overflows: L
            }],
            !L.every(U=>U <= 0)) {
                var O, D;
                const U = (((O = o.flip) == null ? void 0 : O.index) || 0) + 1
                  , Z = T[U];
                if (Z)
                    return {
                        data: {
                            index: U,
                            overflows: C
                        },
                        reset: {
                            placement: Z
                        }
                    };
                let W = (D = C.filter(K=>K.overflows[0] <= 0).sort((K,N)=>K.overflows[1] - N.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!W)
                    switch (m) {
                    case "bestFit":
                        {
                            var F;
                            const K = (F = C.map(N=>[N.placement, N.overflows.filter(Y=>Y > 0).reduce((Y,B)=>Y + B, 0)]).sort((N,Y)=>N[1] - Y[1])[0]) == null ? void 0 : F[0];
                            K && (W = K);
                            break
                        }
                    case "initialPlacement":
                        W = a;
                        break
                    }
                if (i !== W)
                    return {
                        reset: {
                            placement: W
                        }
                    }
            }
            return {}
        }
    }
};
async function GO(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = Mn(n)
      , a = fn(n)
      , l = Fo(n) === "y"
      , c = ["left", "top"].includes(s) ? -1 : 1
      , u = o && l ? -1 : 1
      , f = Xr(t, e);
    let {mainAxis: d, crossAxis: m, alignmentAxis: _} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...f
    };
    return a && typeof _ == "number" && (m = a === "end" ? _ * -1 : _),
    l ? {
        x: m * u,
        y: d * c
    } : {
        x: d * c,
        y: m * u
    }
}
const JO = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await GO(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: o + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , zO = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: a={
                fn: S=>{
                    let {x: g, y: E} = S;
                    return {
                        x: g,
                        y: E
                    }
                }
            }, ...l} = Xr(e, t)
              , c = {
                x: n,
                y: r
            }
              , u = await ya(t, l)
              , f = Fo(Mn(i))
              , d = ry(f);
            let m = c[d]
              , _ = c[f];
            if (o) {
                const S = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , E = m + u[S]
                  , p = m - u[g];
                m = dc(E, m, p)
            }
            if (s) {
                const S = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , E = _ + u[S]
                  , p = _ - u[g];
                _ = dc(E, _, p)
            }
            const b = a.fn({
                ...t,
                [d]: m,
                [f]: _
            });
            return {
                ...b,
                data: {
                    x: b.x - n,
                    y: b.y - r
                }
            }
        }
    }
}
  , QO = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: i, elements: o} = t
              , {apply: s=()=>{}
            , ...a} = Xr(e, t)
              , l = await ya(t, a)
              , c = Mn(n)
              , u = fn(n)
              , f = Fo(n) === "y"
              , {width: d, height: m} = r.floating;
            let _, b;
            c === "top" || c === "bottom" ? (_ = c,
            b = u === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (b = c,
            _ = u === "end" ? "top" : "bottom");
            const S = m - l[_]
              , g = d - l[b]
              , E = !t.middlewareData.shift;
            let p = S
              , y = g;
            if (f) {
                const A = d - l.left - l.right;
                y = u || E ? _o(g, A) : A
            } else {
                const A = m - l.top - l.bottom;
                p = u || E ? _o(S, A) : A
            }
            if (E && !u) {
                const A = Dr(l.left, 0)
                  , L = Dr(l.right, 0)
                  , C = Dr(l.top, 0)
                  , O = Dr(l.bottom, 0);
                f ? y = d - 2 * (A !== 0 || L !== 0 ? A + L : Dr(l.left, l.right)) : p = m - 2 * (C !== 0 || O !== 0 ? C + O : Dr(l.top, l.bottom))
            }
            await s({
                ...t,
                availableWidth: y,
                availableHeight: p
            });
            const T = await i.getDimensions(o.floating);
            return d !== T.width || m !== T.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function en(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Rn(e) {
    return en(e).getComputedStyle(e)
}
const hh = Math.min
  , Zi = Math.max
  , xs = Math.round;
function sy(e) {
    const t = Rn(e);
    let n = parseFloat(t.width)
      , r = parseFloat(t.height);
    const i = e.offsetWidth
      , o = e.offsetHeight
      , s = xs(n) !== i || xs(r) !== o;
    return s && (n = i,
    r = o),
    {
        width: n,
        height: r,
        fallback: s
    }
}
function br(e) {
    return ly(e) ? (e.nodeName || "").toLowerCase() : ""
}
let ss;
function ay() {
    if (ss)
        return ss;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (ss = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    ss) : navigator.userAgent
}
function In(e) {
    return e instanceof en(e).HTMLElement
}
function gr(e) {
    return e instanceof en(e).Element
}
function ly(e) {
    return e instanceof en(e).Node
}
function ph(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof en(e).ShadowRoot || e instanceof ShadowRoot
}
function va(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Rn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function XO(e) {
    return ["table", "td", "th"].includes(br(e))
}
function hc(e) {
    const t = /firefox/i.test(ay())
      , n = Rn(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(i=>n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i=>{
        const o = n.contain;
        return o != null && o.includes(i)
    }
    )
}
function cy() {
    return !/^((?!chrome|android).)*safari/i.test(ay())
}
function Lu(e) {
    return ["html", "body", "#document"].includes(br(e))
}
function uy(e) {
    return gr(e) ? e : e.contextElement
}
const fy = {
    x: 1,
    y: 1
};
function hi(e) {
    const t = uy(e);
    if (!In(t))
        return fy;
    const n = t.getBoundingClientRect()
      , {width: r, height: i, fallback: o} = sy(t);
    let s = (o ? xs(n.width) : n.width) / r
      , a = (o ? xs(n.height) : n.height) / i;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function bo(e, t, n, r) {
    var i, o;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = uy(e);
    let l = fy;
    t && (r ? gr(r) && (l = hi(r)) : l = hi(e));
    const c = a ? en(a) : window
      , u = !cy() && n;
    let f = (s.left + (u && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x
      , d = (s.top + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , _ = s.height / l.y;
    if (a) {
        const b = en(a)
          , S = r && gr(r) ? en(r) : r;
        let g = b.frameElement;
        for (; g && r && S !== b; ) {
            const E = hi(g)
              , p = g.getBoundingClientRect()
              , y = getComputedStyle(g);
            p.x += (g.clientLeft + parseFloat(y.paddingLeft)) * E.x,
            p.y += (g.clientTop + parseFloat(y.paddingTop)) * E.y,
            f *= E.x,
            d *= E.y,
            m *= E.x,
            _ *= E.y,
            f += p.x,
            d += p.y,
            g = en(g).frameElement
        }
    }
    return {
        width: m,
        height: _,
        top: d,
        right: f + m,
        bottom: d + _,
        left: f,
        x: f,
        y: d
    }
}
function yr(e) {
    return ((ly(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function _a(e) {
    return gr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function dy(e) {
    return bo(yr(e)).left + _a(e).scrollLeft
}
function Eo(e) {
    if (br(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || ph(e) && e.host || yr(e);
    return ph(t) ? t.host : t
}
function hy(e) {
    const t = Eo(e);
    return Lu(t) ? t.ownerDocument.body : In(t) && va(t) ? t : hy(t)
}
function Fs(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = hy(e)
      , i = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = en(r);
    return i ? t.concat(o, o.visualViewport || [], va(r) ? r : []) : t.concat(r, Fs(r))
}
function mh(e, t, n) {
    return t === "viewport" ? Xi(function(r, i) {
        const o = en(r)
          , s = yr(r)
          , a = o.visualViewport;
        let l = s.clientWidth
          , c = s.clientHeight
          , u = 0
          , f = 0;
        if (a) {
            l = a.width,
            c = a.height;
            const d = cy();
            (d || !d && i === "fixed") && (u = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: c,
            x: u,
            y: f
        }
    }(e, n)) : gr(t) ? Xi(function(r, i) {
        const o = bo(r, !0, i === "fixed")
          , s = o.top + r.clientTop
          , a = o.left + r.clientLeft
          , l = In(r) ? hi(r) : {
            x: 1,
            y: 1
        };
        return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: s * l.y
        }
    }(t, n)) : Xi(function(r) {
        const i = yr(r)
          , o = _a(r)
          , s = r.ownerDocument.body
          , a = Zi(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth)
          , l = Zi(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let c = -o.scrollLeft + dy(r);
        const u = -o.scrollTop;
        return Rn(s).direction === "rtl" && (c += Zi(i.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: c,
            y: u
        }
    }(yr(e)))
}
function gh(e) {
    return In(e) && Rn(e).position !== "fixed" ? e.offsetParent : null
}
function yh(e) {
    const t = en(e);
    let n = gh(e);
    for (; n && XO(n) && Rn(n).position === "static"; )
        n = gh(n);
    return n && (br(n) === "html" || br(n) === "body" && Rn(n).position === "static" && !hc(n)) ? t : n || function(r) {
        let i = Eo(r);
        for (; In(i) && !Lu(i); ) {
            if (hc(i))
                return i;
            i = Eo(i)
        }
        return null
    }(e) || t
}
function ZO(e, t, n) {
    const r = In(t)
      , i = yr(t)
      , o = bo(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((br(t) !== "body" || va(i)) && (s = _a(t)),
        In(t)) {
            const l = bo(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            i && (a.x = dy(i));
    return {
        x: o.left + s.scrollLeft - a.x,
        y: o.top + s.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}
const $O = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
        const o = n === "clippingAncestors" ? function(c, u) {
            const f = u.get(c);
            if (f)
                return f;
            let d = Fs(c).filter(S=>gr(S) && br(S) !== "body")
              , m = null;
            const _ = Rn(c).position === "fixed";
            let b = _ ? Eo(c) : c;
            for (; gr(b) && !Lu(b); ) {
                const S = Rn(b)
                  , g = hc(b);
                (_ ? g || m : g || S.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = S : d = d.filter(E=>E !== b),
                b = Eo(b)
            }
            return u.set(c, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...o, r]
          , a = s[0]
          , l = s.reduce((c,u)=>{
            const f = mh(t, u, i);
            return c.top = Zi(f.top, c.top),
            c.right = hh(f.right, c.right),
            c.bottom = hh(f.bottom, c.bottom),
            c.left = Zi(f.left, c.left),
            c
        }
        , mh(t, a, i));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const i = In(n)
          , o = yr(n);
        if (n === o)
            return t;
        let s = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , a = {
            x: 1,
            y: 1
        };
        const l = {
            x: 0,
            y: 0
        };
        if ((i || !i && r !== "fixed") && ((br(n) !== "body" || va(o)) && (s = _a(n)),
        In(n))) {
            const c = bo(n);
            a = hi(n),
            l.x = c.x + n.clientLeft,
            l.y = c.y + n.clientTop
        }
        return {
            width: t.width * a.x,
            height: t.height * a.y,
            x: t.x * a.x - s.scrollLeft * a.x + l.x,
            y: t.y * a.y - s.scrollTop * a.y + l.y
        }
    },
    isElement: gr,
    getDimensions: function(e) {
        return In(e) ? sy(e) : e.getBoundingClientRect()
    },
    getOffsetParent: yh,
    getDocumentElement: yr,
    getScale: hi,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const i = this.getOffsetParent || yh
          , o = this.getDimensions;
        return {
            reference: ZO(t, await i(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await o(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>Rn(e).direction === "rtl"
}
  , e1 = (e,t,n)=>{
    const r = new Map
      , i = {
        platform: $O,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return jO(e, t, {
        ...i,
        platform: o
    })
}
;
function py(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? py(e[n], t[n]) : e[n] = t[n])
}
const dn = {
    disabled: !1,
    distance: 5,
    skidding: 0,
    container: "body",
    boundary: void 0,
    instantMove: !1,
    disposeTimeout: 150,
    popperTriggers: [],
    strategy: "absolute",
    preventOverflow: !0,
    flip: !0,
    shift: !0,
    overflowPadding: 0,
    arrowPadding: 0,
    arrowOverflow: !0,
    autoHideOnMousedown: !1,
    themes: {
        tooltip: {
            placement: "top",
            triggers: ["hover", "focus", "touch"],
            hideTriggers: e=>[...e, "click"],
            delay: {
                show: 200,
                hide: 0
            },
            handleResize: !1,
            html: !1,
            loadingContent: "..."
        },
        dropdown: {
            placement: "bottom",
            triggers: ["click"],
            delay: 0,
            handleResize: !0,
            autoHide: !0
        },
        menu: {
            $extend: "dropdown",
            triggers: ["hover", "focus"],
            popperTriggers: ["hover"],
            delay: {
                show: 0,
                hide: 400
            }
        }
    }
};
function To(e, t) {
    let n = dn.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = dn.themes[n.$extend] || {} : (n = null,
        r = dn[t]) : n = null;
    while (n);
    return r
}
function t1(e) {
    const t = [e];
    let n = dn.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = dn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function vh(e) {
    const t = [e];
    let n = dn.themes[e] || {};
    do
        n.$extend ? (t.push(n.$extend),
        n = dn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t
}
let wi = !1;
if (typeof window < "u") {
    wi = !1;
    try {
        const e = Object.defineProperty({}, "passive", {
            get() {
                wi = !0
            }
        });
        window.addEventListener("test", null, e)
    } catch {}
}
let my = !1;
typeof window < "u" && typeof navigator < "u" && (my = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const gy = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , _h = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , bh = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
};
function Eh(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1)
}
function el() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const un = [];
let Or = null;
const Th = {};
function Sh(e) {
    let t = Th[e];
    return t || (t = Th[e] = []),
    t
}
let pc = function() {};
typeof window < "u" && (pc = window.Element);
function Be(e) {
    return function(t) {
        return To(t.theme, e)
    }
}
const tl = "__floating-vue__popper"
  , yy = ()=>Ve({
    name: "VPopper",
    provide() {
        return {
            [tl]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [tl]: {
            default: null
        }
    },
    props: {
        theme: {
            type: String,
            required: !0
        },
        targetNodes: {
            type: Function,
            required: !0
        },
        referenceNode: {
            type: Function,
            default: null
        },
        popperNode: {
            type: Function,
            required: !0
        },
        shown: {
            type: Boolean,
            default: !1
        },
        showGroup: {
            type: String,
            default: null
        },
        ariaId: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: Be("disabled")
        },
        positioningDisabled: {
            type: Boolean,
            default: Be("positioningDisabled")
        },
        placement: {
            type: String,
            default: Be("placement"),
            validator: e=>gy.includes(e)
        },
        delay: {
            type: [String, Number, Object],
            default: Be("delay")
        },
        distance: {
            type: [Number, String],
            default: Be("distance")
        },
        skidding: {
            type: [Number, String],
            default: Be("skidding")
        },
        triggers: {
            type: Array,
            default: Be("triggers")
        },
        showTriggers: {
            type: [Array, Function],
            default: Be("showTriggers")
        },
        hideTriggers: {
            type: [Array, Function],
            default: Be("hideTriggers")
        },
        popperTriggers: {
            type: Array,
            default: Be("popperTriggers")
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: Be("popperShowTriggers")
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: Be("popperHideTriggers")
        },
        container: {
            type: [String, Object, pc, Boolean],
            default: Be("container")
        },
        boundary: {
            type: [String, pc],
            default: Be("boundary")
        },
        strategy: {
            type: String,
            validator: e=>["absolute", "fixed"].includes(e),
            default: Be("strategy")
        },
        autoHide: {
            type: [Boolean, Function],
            default: Be("autoHide")
        },
        handleResize: {
            type: Boolean,
            default: Be("handleResize")
        },
        instantMove: {
            type: Boolean,
            default: Be("instantMove")
        },
        eagerMount: {
            type: Boolean,
            default: Be("eagerMount")
        },
        popperClass: {
            type: [String, Array, Object],
            default: Be("popperClass")
        },
        computeTransformOrigin: {
            type: Boolean,
            default: Be("computeTransformOrigin")
        },
        autoMinSize: {
            type: Boolean,
            default: Be("autoMinSize")
        },
        autoSize: {
            type: [Boolean, String],
            default: Be("autoSize")
        },
        autoMaxSize: {
            type: Boolean,
            default: Be("autoMaxSize")
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: Be("autoBoundaryMaxSize")
        },
        preventOverflow: {
            type: Boolean,
            default: Be("preventOverflow")
        },
        overflowPadding: {
            type: [Number, String],
            default: Be("overflowPadding")
        },
        arrowPadding: {
            type: [Number, String],
            default: Be("arrowPadding")
        },
        arrowOverflow: {
            type: Boolean,
            default: Be("arrowOverflow")
        },
        flip: {
            type: Boolean,
            default: Be("flip")
        },
        shift: {
            type: Boolean,
            default: Be("shift")
        },
        shiftCrossAxis: {
            type: Boolean,
            default: Be("shiftCrossAxis")
        },
        noAutoFocus: {
            type: Boolean,
            default: Be("noAutoFocus")
        },
        disposeTimeout: {
            type: Number,
            default: Be("disposeTimeout")
        }
    },
    emits: {
        show: ()=>!0,
        hide: ()=>!0,
        "update:shown": e=>!0,
        "apply-show": ()=>!0,
        "apply-hide": ()=>!0,
        "close-group": ()=>!0,
        "close-directive": ()=>!0,
        "auto-hide": ()=>!0,
        resize: ()=>!0
    },
    data() {
        return {
            isShown: !1,
            isMounted: !1,
            skipTransition: !1,
            classes: {
                showFrom: !1,
                showTo: !1,
                hideFrom: !1,
                hideTo: !0
            },
            result: {
                x: 0,
                y: 0,
                placement: "",
                strategy: this.strategy,
                arrow: {
                    x: 0,
                    y: 0,
                    centerOffset: 0
                },
                transformOrigin: null
            },
            randomId: `popper_${[Math.random(), Date.now()].map(e=>e.toString(36).substring(2, 10)).join("_")}`,
            shownChildren: new Set,
            lastAutoHide: !0,
            pendingHide: !1,
            containsGlobalTarget: !1,
            isDisposed: !0,
            mouseDownContains: !1
        }
    },
    computed: {
        popperId() {
            return this.ariaId != null ? this.ariaId : this.randomId
        },
        shouldMountContent() {
            return this.eagerMount || this.isMounted
        },
        slotData() {
            return {
                popperId: this.popperId,
                isShown: this.isShown,
                shouldMountContent: this.shouldMountContent,
                skipTransition: this.skipTransition,
                autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
                show: this.show,
                hide: this.hide,
                handleResize: this.handleResize,
                onResize: this.onResize,
                classes: {
                    ...this.classes,
                    popperClass: this.popperClass
                },
                result: this.positioningDisabled ? null : this.result,
                attrs: this.$attrs
            }
        },
        parentPopper() {
            var e;
            return (e = this[tl]) == null ? void 0 : e.parentPopper
        },
        hasPopperShowTriggerHover() {
            var e, t;
            return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"))
        }
    },
    watch: {
        shown: "$_autoShowHide",
        disabled(e) {
            e ? this.dispose() : this.init()
        },
        async container() {
            this.isShown && (this.$_ensureTeleport(),
            await this.$_computePosition())
        },
        triggers: {
            handler: "$_refreshListeners",
            deep: !0
        },
        positioningDisabled: "$_refreshListeners",
        ...["placement", "distance", "skidding", "boundary", "strategy", "overflowPadding", "arrowPadding", "preventOverflow", "shift", "shiftCrossAxis", "flip"].reduce((e,t)=>(e[t] = "$_computePosition",
        e), {})
    },
    created() {
        this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),
        this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")
    },
    mounted() {
        this.init(),
        this.$_detachPopperNode()
    },
    activated() {
        this.$_autoShowHide()
    },
    deactivated() {
        this.hide()
    },
    beforeUnmount() {
        this.dispose()
    },
    methods: {
        show({event: e=null, skipDelay: t=!1, force: n=!1}={}) {
            var r, i;
            (r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1,
            (n || !this.disabled) && (((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null),
            this.$_scheduleShow(e, t),
            this.$emit("show"),
            this.$_showFrameLocked = !0,
            requestAnimationFrame(()=>{
                this.$_showFrameLocked = !1
            }
            )),
            this.$emit("update:shown", !0))
        },
        hide({event: e=null, skipDelay: t=!1}={}) {
            var n;
            if (!this.$_hideInProgress) {
                if (this.shownChildren.size > 0) {
                    this.pendingHide = !0;
                    return
                }
                if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
                    this.parentPopper && (this.parentPopper.lockedChild = this,
                    clearTimeout(this.parentPopper.lockedChildTimer),
                    this.parentPopper.lockedChildTimer = setTimeout(()=>{
                        this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({
                            skipDelay: t
                        }),
                        this.parentPopper.lockedChild = null)
                    }
                    , 1e3));
                    return
                }
                ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null),
                this.pendingHide = !1,
                this.$_scheduleHide(e, t),
                this.$emit("hide"),
                this.$emit("update:shown", !1)
            }
        },
        init() {
            var e;
            this.isDisposed && (this.isDisposed = !1,
            this.isMounted = !1,
            this.$_events = [],
            this.$_preventShow = !1,
            this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el,
            this.$_targetNodes = this.targetNodes().filter(t=>t.nodeType === t.ELEMENT_NODE),
            this.$_popperNode = this.popperNode(),
            this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"),
            this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"),
            this.$_swapTargetAttrs("title", "data-original-title"),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show())
        },
        dispose() {
            this.isDisposed || (this.isDisposed = !0,
            this.$_removeEventListeners(),
            this.hide({
                skipDelay: !0
            }),
            this.$_detachPopperNode(),
            this.isMounted = !1,
            this.isShown = !1,
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs("data-original-title", "title"))
        },
        async onResize() {
            this.isShown && (await this.$_computePosition(),
            this.$emit("resize"))
        },
        async $_computePosition() {
            if (this.isDisposed || this.positioningDisabled)
                return;
            const e = {
                strategy: this.strategy,
                middleware: []
            };
            (this.distance || this.skidding) && e.middleware.push(JO({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(qO({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(zO({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(WO({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push(KO({
                element: this.$_arrowNode,
                padding: this.arrowPadding
            })),
            this.arrowOverflow && e.middleware.push({
                name: "arrowOverflow",
                fn: ({placement: r, rects: i, middlewareData: o})=>{
                    let s;
                    const {centerOffset: a} = o.arrow;
                    return r.startsWith("top") || r.startsWith("bottom") ? s = Math.abs(a) > i.reference.width / 2 : s = Math.abs(a) > i.reference.height / 2,
                    {
                        data: {
                            overflow: s
                        }
                    }
                }
            }),
            this.autoMinSize || this.autoSize) {
                const r = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
                e.middleware.push({
                    name: "autoSize",
                    fn: ({rects: i, placement: o, middlewareData: s})=>{
                        var a;
                        if ((a = s.autoSize) != null && a.skip)
                            return {};
                        let l, c;
                        return o.startsWith("top") || o.startsWith("bottom") ? l = i.reference.width : c = i.reference.height,
                        this.$_innerNode.style[r === "min" ? "minWidth" : r === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null,
                        this.$_innerNode.style[r === "min" ? "minHeight" : r === "max" ? "maxHeight" : "height"] = c != null ? `${c}px` : null,
                        {
                            data: {
                                skip: !0
                            },
                            reset: {
                                rects: !0
                            }
                        }
                    }
                })
            }
            (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null,
            this.$_innerNode.style.maxHeight = null,
            e.middleware.push(QO({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: i})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null
                }
            })));
            const n = await e1(this.$_referenceNode, this.$_popperNode, e);
            Object.assign(this.result, {
                x: n.x,
                y: n.y,
                placement: n.placement,
                strategy: n.strategy,
                arrow: {
                    ...n.middlewareData.arrow,
                    ...n.middlewareData.arrowOverflow
                }
            })
        },
        $_scheduleShow(e, t=!1) {
            if (this.$_updateParentShownChildren(!0),
            this.$_hideInProgress = !1,
            clearTimeout(this.$_scheduleTimer),
            Or && this.instantMove && Or.instantMove && Or !== this.parentPopper) {
                Or.$_applyHide(!0),
                this.$_applyShow(!0);
                return
            }
            t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"))
        },
        $_scheduleHide(e, t=!1) {
            if (this.shownChildren.size > 0) {
                this.pendingHide = !0;
                return
            }
            this.$_updateParentShownChildren(!1),
            this.$_hideInProgress = !0,
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (Or = this),
            t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"))
        },
        $_computeDelay(e) {
            const t = this.delay;
            return parseInt(t && t[e] || t || 0)
        },
        async $_applyShow(e=!1) {
            clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            this.skipTransition = e,
            !this.isShown && (this.$_ensureTeleport(),
            await el(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...Fs(this.$_referenceNode), ...Fs(this.$_popperNode)], "scroll", ()=>{
                this.$_computePosition()
            }
            ))
        },
        async $_applyShowEffect() {
            if (this.$_hideInProgress)
                return;
            if (this.computeTransformOrigin) {
                const t = this.$_referenceNode.getBoundingClientRect()
                  , n = this.$_popperNode.querySelector(".v-popper__wrapper")
                  , r = n.parentNode.getBoundingClientRect()
                  , i = t.x + t.width / 2 - (r.left + n.offsetLeft)
                  , o = t.y + t.height / 2 - (r.top + n.offsetTop);
                this.result.transformOrigin = `${i}px ${o}px`
            }
            this.isShown = !0,
            this.$_applyAttrsToTarget({
                "aria-describedby": this.popperId,
                "data-popper-shown": ""
            });
            const e = this.showGroup;
            if (e) {
                let t;
                for (let n = 0; n < un.length; n++)
                    t = un[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            un.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of vh(this.theme))
                Sh(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await el(),
            this.classes.showFrom = !1,
            this.classes.showTo = !0,
            this.noAutoFocus || this.$_popperNode.focus()
        },
        async $_applyHide(e=!1) {
            if (this.shownChildren.size > 0) {
                this.pendingHide = !0,
                this.$_hideInProgress = !1;
                return
            }
            if (clearTimeout(this.$_scheduleTimer),
            !this.isShown)
                return;
            this.skipTransition = e,
            Eh(un, this),
            un.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of vh(this.theme)) {
                const r = Sh(n);
                Eh(r, this),
                r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
            }
            Or === this && (Or = null),
            this.isShown = !1,
            this.$_applyAttrsToTarget({
                "aria-describedby": void 0,
                "data-popper-shown": void 0
            }),
            clearTimeout(this.$_disposeTimer);
            const t = this.disposeTimeout;
            t !== null && (this.$_disposeTimer = setTimeout(()=>{
                this.$_popperNode && (this.$_detachPopperNode(),
                this.isMounted = !1)
            }
            , t)),
            this.$_removeEventListeners("scroll"),
            this.$emit("apply-hide"),
            this.classes.showFrom = !1,
            this.classes.showTo = !1,
            this.classes.hideFrom = !0,
            this.classes.hideTo = !1,
            await el(),
            this.classes.hideFrom = !1,
            this.classes.hideTo = !0
        },
        $_autoShowHide() {
            this.shown ? this.show() : this.hide()
        },
        $_ensureTeleport() {
            if (this.isDisposed)
                return;
            let e = this.container;
            if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode),
            !e)
                throw new Error("No container for popover: " + this.container);
            e.appendChild(this.$_popperNode),
            this.isMounted = !0
        },
        $_addEventListeners() {
            const e = n=>{
                this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0,
                !this.$_preventShow && this.show({
                    event: n
                }))
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, _h, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], _h, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, bh, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], bh, this.popperTriggers, this.popperHideTriggers, t)
        },
        $_registerEventListeners(e, t, n) {
            this.$_events.push({
                targetNodes: e,
                eventType: t,
                handler: n
            }),
            e.forEach(r=>r.addEventListener(t, n, wi ? {
                passive: !0
            } : void 0))
        },
        $_registerTriggerListeners(e, t, n, r, i) {
            let o = n;
            r != null && (o = typeof r == "function" ? r(o) : r),
            o.forEach(s=>{
                const a = t[s];
                a && this.$_registerEventListeners(e, a, i)
            }
            )
        },
        $_removeEventListeners(e) {
            const t = [];
            this.$_events.forEach(n=>{
                const {targetNodes: r, eventType: i, handler: o} = n;
                !e || e === i ? r.forEach(s=>s.removeEventListener(i, o)) : t.push(n)
            }
            ),
            this.$_events = t
        },
        $_refreshListeners() {
            this.isDisposed || (this.$_removeEventListeners(),
            this.$_addEventListeners())
        },
        $_handleGlobalClose(e, t=!1) {
            this.$_showFrameLocked || (this.hide({
                event: e
            }),
            e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"),
            t && (this.$_preventShow = !0,
            setTimeout(()=>{
                this.$_preventShow = !1
            }
            , 300)))
        },
        $_detachPopperNode() {
            this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode)
        },
        $_swapTargetAttrs(e, t) {
            for (const n of this.$_targetNodes) {
                const r = n.getAttribute(e);
                r && (n.removeAttribute(e),
                n.setAttribute(t, r))
            }
        },
        $_applyAttrsToTarget(e) {
            for (const t of this.$_targetNodes)
                for (const n in e) {
                    const r = e[n];
                    r == null ? t.removeAttribute(n) : t.setAttribute(n, r)
                }
        },
        $_updateParentShownChildren(e) {
            let t = this.parentPopper;
            for (; t; )
                e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId),
                t.pendingHide && t.hide()),
                t = t.parentPopper
        },
        $_isAimingPopper() {
            const e = this.$_referenceNode.getBoundingClientRect();
            if ($i >= e.left && $i <= e.right && eo >= e.top && eo <= e.bottom) {
                const t = this.$_popperNode.getBoundingClientRect()
                  , n = $i - nr
                  , r = eo - rr
                  , i = t.left + t.width / 2 - nr + (t.top + t.height / 2) - rr + t.width + t.height
                  , o = nr + n * i
                  , s = rr + r * i;
                return as(nr, rr, o, s, t.left, t.top, t.left, t.bottom) || as(nr, rr, o, s, t.left, t.top, t.right, t.top) || as(nr, rr, o, s, t.right, t.top, t.right, t.bottom) || as(nr, rr, o, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (my) {
        const e = wi ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>Ah(t, !0), e),
        document.addEventListener("touchend", t=>wh(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>Ah(e, !1), !0),
        window.addEventListener("click", e=>wh(e, !1), !0);
    window.addEventListener("resize", r1)
}
function Ah(e, t) {
    if (dn.autoHideOnMousedown)
        vy(e, t);
    else
        for (let n = 0; n < un.length; n++) {
            const r = un[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function wh(e, t) {
    dn.autoHideOnMousedown || vy(e, t)
}
function vy(e, t) {
    const n = {};
    for (let r = un.length - 1; r >= 0; r--) {
        const i = un[r];
        try {
            const o = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
            i.pendingHide = !1,
            requestAnimationFrame(()=>{
                if (i.pendingHide = !1,
                !n[i.randomId] && kh(i, o, e)) {
                    if (i.$_handleGlobalClose(e, t),
                    !e.closeAllPopover && e.closePopover && o) {
                        let a = i.parentPopper;
                        for (; a; )
                            n[a.randomId] = !0,
                            a = a.parentPopper;
                        return
                    }
                    let s = i.parentPopper;
                    for (; s && kh(s, s.containsGlobalTarget, e); )
                        s.$_handleGlobalClose(e, t),
                        s = s.parentPopper
                }
            }
            )
        } catch {}
    }
}
function kh(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || n1(e, n) && !t
}
function n1(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function r1() {
    for (let e = 0; e < un.length; e++)
        un[e].$_computePosition()
}
let nr = 0
  , rr = 0
  , $i = 0
  , eo = 0;
typeof window < "u" && window.addEventListener("mousemove", e=>{
    nr = $i,
    rr = eo,
    $i = e.clientX,
    eo = e.clientY
}
, wi ? {
    passive: !0
} : void 0);
function as(e, t, n, r, i, o, s, a) {
    const l = ((s - i) * (t - o) - (a - o) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t))
      , c = ((n - e) * (t - o) - (r - t) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t));
    return l >= 0 && l <= 1 && c >= 0 && c <= 1
}
const i1 = {
    extends: yy()
}
  , ba = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
;
function o1(e, t, n, r, i, o) {
    return pe(),
    qe("div", {
        ref: "reference",
        class: Ct(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [_r(e.$slots, "default", nn(Yt(e.slotData)))], 2)
}
const s1 = ba(i1, [["render", o1]]);
function a1() {
    var e = window.navigator.userAgent
      , t = e.indexOf("MSIE ");
    if (t > 0)
        return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    var n = e.indexOf("Trident/");
    if (n > 0) {
        var r = e.indexOf("rv:");
        return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10)
    }
    var i = e.indexOf("Edge/");
    return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : -1
}
let ms;
function mc() {
    mc.init || (mc.init = !0,
    ms = a1() !== -1)
}
var Ea = {
    name: "ResizeObserver",
    props: {
        emitOnMount: {
            type: Boolean,
            default: !1
        },
        ignoreWidth: {
            type: Boolean,
            default: !1
        },
        ignoreHeight: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["notify"],
    mounted() {
        mc(),
        Kt(()=>{
            this._w = this.$el.offsetWidth,
            this._h = this.$el.offsetHeight,
            this.emitOnMount && this.emitSize()
        }
        );
        const e = document.createElement("object");
        this._resizeObject = e,
        e.setAttribute("aria-hidden", "true"),
        e.setAttribute("tabindex", -1),
        e.onload = this.addResizeHandlers,
        e.type = "text/html",
        ms && this.$el.appendChild(e),
        e.data = "about:blank",
        ms || this.$el.appendChild(e)
    },
    beforeUnmount() {
        this.removeResizeHandlers()
    },
    methods: {
        compareAndNotify() {
            (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth,
            this._h = this.$el.offsetHeight,
            this.emitSize())
        },
        emitSize() {
            this.$emit("notify", {
                width: this._w,
                height: this._h
            })
        },
        addResizeHandlers() {
            this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify),
            this.compareAndNotify()
        },
        removeResizeHandlers() {
            this._resizeObject && this._resizeObject.onload && (!ms && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const l1 = m0();
h0("data-v-b329ee4c");
const c1 = {
    class: "resize-observer",
    tabindex: "-1"
};
p0();
const u1 = l1((e,t,n,r,i,o)=>(pe(),
yt("div", c1)));
Ea.render = u1;
Ea.__scopeId = "data-v-b329ee4c";
Ea.__file = "src/components/ResizeObserver.vue";
const _y = (e="theme")=>({
    computed: {
        themeClass() {
            return t1(this[e])
        }
    }
})
  , f1 = Ve({
    name: "VPopperContent",
    components: {
        ResizeObserver: Ea
    },
    mixins: [_y()],
    props: {
        popperId: String,
        theme: String,
        shown: Boolean,
        mounted: Boolean,
        skipTransition: Boolean,
        autoHide: Boolean,
        handleResize: Boolean,
        classes: Object,
        result: Object
    },
    emits: ["hide", "resize"],
    methods: {
        toPx(e) {
            return e != null && !isNaN(e) ? `${e}px` : null
        }
    }
})
  , d1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , h1 = {
    ref: "inner",
    class: "v-popper__inner"
}
  , p1 = ge("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , m1 = ge("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , g1 = [p1, m1];
function y1(e, t, n, r, i, o) {
    const s = Yr("ResizeObserver");
    return pe(),
    qe("div", {
        id: e.popperId,
        ref: "popover",
        class: Ct(["v-popper__popper", [e.themeClass, e.classes.popperClass, {
            "v-popper__popper--shown": e.shown,
            "v-popper__popper--hidden": !e.shown,
            "v-popper__popper--show-from": e.classes.showFrom,
            "v-popper__popper--show-to": e.classes.showTo,
            "v-popper__popper--hide-from": e.classes.hideFrom,
            "v-popper__popper--hide-to": e.classes.hideTo,
            "v-popper__popper--skip-transition": e.skipTransition,
            "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
            "v-popper__popper--no-positioning": !e.result
        }]]),
        style: Ln(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = X_(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [ge("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), ge("div", {
        class: "v-popper__wrapper",
        style: Ln(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [ge("div", h1, [e.mounted ? (pe(),
    qe(ht, {
        key: 0
    }, [ge("div", null, [_r(e.$slots, "default")]), e.handleResize ? (pe(),
    yt(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : jt("", !0)], 64)) : jt("", !0)], 512), ge("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Ln(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, g1, 4)], 4)], 46, d1)
}
const by = ba(f1, [["render", y1]])
  , Ey = {
    methods: {
        show(...e) {
            return this.$refs.popper.show(...e)
        },
        hide(...e) {
            return this.$refs.popper.hide(...e)
        },
        dispose(...e) {
            return this.$refs.popper.dispose(...e)
        },
        onResize(...e) {
            return this.$refs.popper.onResize(...e)
        }
    }
};
let gc = function() {};
typeof window < "u" && (gc = window.Element);
const v1 = Ve({
    name: "VPopperWrapper",
    components: {
        Popper: s1,
        PopperContent: by
    },
    mixins: [Ey, _y("finalTheme")],
    props: {
        theme: {
            type: String,
            default: null
        },
        referenceNode: {
            type: Function,
            default: null
        },
        shown: {
            type: Boolean,
            default: !1
        },
        showGroup: {
            type: String,
            default: null
        },
        ariaId: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        positioningDisabled: {
            type: Boolean,
            default: void 0
        },
        placement: {
            type: String,
            default: void 0
        },
        delay: {
            type: [String, Number, Object],
            default: void 0
        },
        distance: {
            type: [Number, String],
            default: void 0
        },
        skidding: {
            type: [Number, String],
            default: void 0
        },
        triggers: {
            type: Array,
            default: void 0
        },
        showTriggers: {
            type: [Array, Function],
            default: void 0
        },
        hideTriggers: {
            type: [Array, Function],
            default: void 0
        },
        popperTriggers: {
            type: Array,
            default: void 0
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: void 0
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: void 0
        },
        container: {
            type: [String, Object, gc, Boolean],
            default: void 0
        },
        boundary: {
            type: [String, gc],
            default: void 0
        },
        strategy: {
            type: String,
            default: void 0
        },
        autoHide: {
            type: [Boolean, Function],
            default: void 0
        },
        handleResize: {
            type: Boolean,
            default: void 0
        },
        instantMove: {
            type: Boolean,
            default: void 0
        },
        eagerMount: {
            type: Boolean,
            default: void 0
        },
        popperClass: {
            type: [String, Array, Object],
            default: void 0
        },
        computeTransformOrigin: {
            type: Boolean,
            default: void 0
        },
        autoMinSize: {
            type: Boolean,
            default: void 0
        },
        autoSize: {
            type: [Boolean, String],
            default: void 0
        },
        autoMaxSize: {
            type: Boolean,
            default: void 0
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: void 0
        },
        preventOverflow: {
            type: Boolean,
            default: void 0
        },
        overflowPadding: {
            type: [Number, String],
            default: void 0
        },
        arrowPadding: {
            type: [Number, String],
            default: void 0
        },
        arrowOverflow: {
            type: Boolean,
            default: void 0
        },
        flip: {
            type: Boolean,
            default: void 0
        },
        shift: {
            type: Boolean,
            default: void 0
        },
        shiftCrossAxis: {
            type: Boolean,
            default: void 0
        },
        noAutoFocus: {
            type: Boolean,
            default: void 0
        },
        disposeTimeout: {
            type: Number,
            default: void 0
        }
    },
    emits: {
        show: ()=>!0,
        hide: ()=>!0,
        "update:shown": e=>!0,
        "apply-show": ()=>!0,
        "apply-hide": ()=>!0,
        "close-group": ()=>!0,
        "close-directive": ()=>!0,
        "auto-hide": ()=>!0,
        resize: ()=>!0
    },
    computed: {
        finalTheme() {
            return this.theme ?? this.$options.vPopperTheme
        }
    },
    methods: {
        getTargetNodes() {
            return Array.from(this.$el.children).filter(e=>e !== this.$refs.popperContent.$el)
        }
    }
});
function _1(e, t, n, r, i, o) {
    const s = Yr("PopperContent")
      , a = Yr("Popper");
    return pe(),
    yt(a, yi({
        ref: "popper"
    }, e.$props, {
        theme: e.finalTheme,
        "target-nodes": e.getTargetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        class: [e.themeClass],
        onShow: t[0] || (t[0] = ()=>e.$emit("show")),
        onHide: t[1] || (t[1] = ()=>e.$emit("hide")),
        "onUpdate:shown": t[2] || (t[2] = l=>e.$emit("update:shown", l)),
        onApplyShow: t[3] || (t[3] = ()=>e.$emit("apply-show")),
        onApplyHide: t[4] || (t[4] = ()=>e.$emit("apply-hide")),
        onCloseGroup: t[5] || (t[5] = ()=>e.$emit("close-group")),
        onCloseDirective: t[6] || (t[6] = ()=>e.$emit("close-directive")),
        onAutoHide: t[7] || (t[7] = ()=>e.$emit("auto-hide")),
        onResize: t[8] || (t[8] = ()=>e.$emit("resize"))
    }), {
        default: rn(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, show: m, hide: _, handleResize: b, onResize: S, classes: g, result: E})=>[_r(e.$slots, "default", {
            shown: c,
            show: m,
            hide: _
        }), Xe(s, {
            ref: "popperContent",
            "popper-id": l,
            theme: e.finalTheme,
            shown: c,
            mounted: u,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": b,
            classes: g,
            result: E,
            onHide: _,
            onResize: S
        }, {
            default: rn(()=>[_r(e.$slots, "popper", {
                shown: c,
                hide: _
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Cu = ba(v1, [["render", _1]])
  , b1 = {
    ...Cu,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , E1 = {
    ...Cu,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , T1 = {
    ...Cu,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , S1 = Ve({
    name: "VTooltipDirective",
    components: {
        Popper: yy(),
        PopperContent: by
    },
    mixins: [Ey],
    inheritAttrs: !1,
    props: {
        theme: {
            type: String,
            default: "tooltip"
        },
        html: {
            type: Boolean,
            default: e=>To(e.theme, "html")
        },
        content: {
            type: [String, Number, Function],
            default: null
        },
        loadingContent: {
            type: String,
            default: e=>To(e.theme, "loadingContent")
        },
        targetNodes: {
            type: Function,
            required: !0
        }
    },
    data() {
        return {
            asyncContent: null
        }
    },
    computed: {
        isContentAsync() {
            return typeof this.content == "function"
        },
        loading() {
            return this.isContentAsync && this.asyncContent == null
        },
        finalContent() {
            return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content
        }
    },
    watch: {
        content: {
            handler() {
                this.fetchContent(!0)
            },
            immediate: !0
        },
        async finalContent() {
            await this.$nextTick(),
            this.$refs.popper.onResize()
        }
    },
    created() {
        this.$_fetchId = 0
    },
    methods: {
        fetchContent(e) {
            if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
                this.asyncContent = null,
                this.$_loading = !0;
                const t = ++this.$_fetchId
                  , n = this.content(this);
                n.then ? n.then(r=>this.onResult(t, r)) : this.onResult(t, n)
            }
        },
        onResult(e, t) {
            e === this.$_fetchId && (this.$_loading = !1,
            this.asyncContent = t)
        },
        onShow() {
            this.$_isShown = !0,
            this.fetchContent()
        },
        onHide() {
            this.$_isShown = !1
        }
    }
})
  , A1 = ["innerHTML"]
  , w1 = ["textContent"];
function k1(e, t, n, r, i, o) {
    const s = Yr("PopperContent")
      , a = Yr("Popper");
    return pe(),
    yt(a, yi({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: rn(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, hide: m, handleResize: _, onResize: b, classes: S, result: g})=>[Xe(s, {
            ref: "popperContent",
            class: Ct({
                "v-popper--tooltip-loading": e.loading
            }),
            "popper-id": l,
            theme: e.theme,
            shown: c,
            mounted: u,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": _,
            classes: S,
            result: g,
            onHide: m,
            onResize: b
        }, {
            default: rn(()=>[e.html ? (pe(),
            qe("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, A1)) : (pe(),
            qe("div", {
                key: 1,
                textContent: Jt(e.finalContent)
            }, null, 8, w1))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const L1 = ba(S1, [["render", k1]])
  , Ty = "v-popper--has-tooltip";
function C1(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of gy)
            t[r] && (n = r);
    return n || (n = To(e.theme || "tooltip", "placement")),
    n
}
function Sy(e, t, n) {
    let r;
    const i = typeof t;
    return i === "string" ? r = {
        content: t
    } : t && i === "object" ? r = t : r = {
        content: !1
    },
    r.placement = C1(r, n),
    r.targetNodes = ()=>[e],
    r.referenceNode = ()=>e,
    r
}
let nl, So, O1 = 0;
function R1() {
    if (nl)
        return;
    So = le([]),
    nl = rm({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: So
            }
        },
        render() {
            return this.directives.map(t=>ct(L1, {
                ...t.options,
                shown: t.shown || t.options.shown,
                key: t.id
            }))
        },
        devtools: {
            hide: !0
        }
    });
    const e = document.createElement("div");
    document.body.appendChild(e),
    nl.mount(e)
}
function I1(e, t, n) {
    R1();
    const r = le(Sy(e, t, n))
      , i = le(!1)
      , o = {
        id: O1++,
        options: r,
        shown: i
    };
    return So.value.push(o),
    e.classList && e.classList.add(Ty),
    e.$_popper = {
        options: r,
        item: o,
        show() {
            i.value = !0
        },
        hide() {
            i.value = !1
        }
    }
}
function Ay(e) {
    if (e.$_popper) {
        const t = So.value.indexOf(e.$_popper.item);
        t !== -1 && So.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(Ty)
}
function Lh(e, {value: t, modifiers: n}) {
    const r = Sy(e, t, n);
    if (!r.content || To(r.theme || "tooltip", "disabled"))
        Ay(e);
    else {
        let i;
        e.$_popper ? (i = e.$_popper,
        i.options.value = r) : i = I1(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? i.show() : i.hide())
    }
}
const P1 = {
    beforeMount: Lh,
    updated: Lh,
    beforeUnmount(e) {
        Ay(e)
    }
};
function Ch(e) {
    e.addEventListener("mousedown", Hs),
    e.addEventListener("click", Hs),
    e.addEventListener("touchstart", wy, wi ? {
        passive: !0
    } : !1)
}
function Oh(e) {
    e.removeEventListener("mousedown", Hs),
    e.removeEventListener("click", Hs),
    e.removeEventListener("touchstart", wy),
    e.removeEventListener("touchend", ky),
    e.removeEventListener("touchcancel", Ly)
}
function Hs(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch,
    e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
}
function wy(e) {
    if (e.changedTouches.length === 1) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = !0;
        const n = e.changedTouches[0];
        t.$_vclosepopover_touchPoint = n,
        t.addEventListener("touchend", ky),
        t.addEventListener("touchcancel", Ly)
    }
}
function ky(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function Ly(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const M1 = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && Ch(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? Ch(e) : Oh(e))
    },
    beforeUnmount(e) {
        Oh(e)
    }
};
function D1(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    py(dn, t),
    e.directive("tooltip", P1),
    e.directive("close-popper", M1),
    e.component("VTooltip", T1),
    e.component("VDropdown", b1),
    e.component("VMenu", E1))
}
const N1 = {
    version: "5.2.2",
    install: D1,
    options: dn
}
  , V1 = It(e=>{
    e.vueApp.use(N1)
}
);
function Cy(e) {
    if (e == null)
        return 1 / 0;
    if (typeof e == "object")
        for (let t in e)
            e[t] = Cy(e[t]);
    return e
}
const U1 = It(({vueApp: e})=>{
    var i;
    const t = ((i = Wn().public) == null ? void 0 : i.notivue) || {}
      , n = Cy(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = TA(n);
    e.use(r)
}
);
function B1(e, {locales: t=[], localeCodes: n=[], baseUrl: r=KL, hooks: i={}, context: o={}}={}) {
    const s = Co()
      , a = e.install;
    return e.install = (l,...c)=>{
        const u = H1(c[0]) ? ut({}, c[0]) : {
            inject: !0
        };
        u.inject == null && (u.inject = !0);
        const f = u.__composerExtend;
        if (u.__composerExtend = b=>{
            const S = Ti(e);
            b.locales = ue(()=>S.locales.value),
            b.localeCodes = ue(()=>S.localeCodes.value),
            b.baseUrl = ue(()=>S.baseUrl.value);
            let g;
            return Qe(f) && (g = Reflect.apply(f, u, [b])),
            ()=>{
                g && g()
            }
        }
        ,
        e.mode === "legacy") {
            const b = u.__vueI18nExtend;
            u.__vueI18nExtend = S=>{
                Rh(S, i.onExtendVueI18n);
                let g;
                return Qe(b) && (g = Reflect.apply(b, u, [S])),
                ()=>{
                    g && g()
                }
            }
        }
        c[0] = u,
        Reflect.apply(a, e, [l, ...c]);
        const d = Ti(e);
        s.run(()=>{
            x1(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: i,
                context: o
            }),
            e.mode === "legacy" && Pg(e.global) && Rh(e.global, i.onExtendVueI18n)
        }
        );
        const m = l
          , _ = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (_ && F1(_, d, i.onExtendExportedGlobal),
        u.inject) {
            const b = Su(e);
            l.mixin({
                methods: {
                    getRouteBaseName: Si,
                    resolveRoute: Xt(ga, b),
                    localePath: Xt(ma, b),
                    localeRoute: Xt(Eu, b),
                    localeLocation: Xt(fC, b),
                    switchLocalePath: Xt(Ai, b),
                    localeHead: Xt(Vg, b)
                }
            })
        }
        if (m.unmount) {
            const b = m.unmount;
            m.unmount = ()=>{
                s.stop(),
                b()
            }
        }
    }
    ,
    s
}
function x1(e, t) {
    const {locales: n, localeCodes: r, baseUrl: i, context: o} = t
      , s = le(n)
      , a = le(r)
      , l = le("");
    e.locales = ue(()=>s.value),
    e.localeCodes = ue(()=>a.value),
    e.baseUrl = ue(()=>l.value),
    qL ? Fe(e.locale, ()=>{
        l.value = eh(i, o)
    }
    , {
        immediate: !0
    }) : l.value = eh(i, o),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function Oy(e, t, n) {
    const r = [{
        locales: {
            get() {
                return e.locales.value
            }
        },
        localeCodes: {
            get() {
                return e.localeCodes.value
            }
        },
        baseUrl: {
            get() {
                return e.baseUrl.value
            }
        }
    }];
    n && r.push(n(e));
    for (const i of r)
        for (const [o,s] of Object.entries(i))
            Object.defineProperty(t, o, s)
}
function F1(e, t, n) {
    Oy(t, e, n)
}
function Rh(e, t) {
    const n = Ti(e);
    Oy(n, e, t)
}
function H1(e) {
    return Ne(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function j1() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = pt
      , n = `(${Gr.join("|")})`
      , r = `(?:${e}${t})?`
      , i = new RegExp(`${e}${n}${r}$`,"i")
      , o = ac(Gr);
    return a=>{
        if (Ne(a)) {
            if (a.name) {
                const c = (ne(a.name) ? a.name : a.name.toString()).match(i);
                if (c && c.length > 1)
                    return c[1]
            } else if (a.path) {
                const l = a.path.match(o);
                if (l && l.length > 1)
                    return l[1]
            }
        } else if (ne(a)) {
            const l = a.match(o);
            if (l && l.length > 1)
                return l[1]
        }
        return ""
    }
}
const K1 = It({
    name: "i18n:plugin",
    parallel: HL,
    async setup(e) {
        let t, n;
        const r = ia()
          , {vueApp: i} = e
          , o = e
          , s = {
            ...pt
        };
        s.baseUrl = CC();
        const a = ([t,n] = wn(()=>nC(FL, re())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = j1()
          , c = p=>p || a.locale || "en-US"
          , u = RC();
        let f = rh(r, l, a.locale, c(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: u
        });
        a.messages = ([t,n] = wn(()=>rC(a.messages, sc, {
            localeCodes: Gr,
            initialLocale: f,
            lazy: s.lazy,
            defaultLocale: s.defaultLocale,
            fallbackLocale: a.fallbackLocale
        })),
        t = await t,
        n(),
        t),
        f = c(f);
        const d = wL({
            ...a,
            locale: f
        });
        let m = !0;
        const _ = p=>f !== p && m;
        let b = !0;
        const S = ()=>b;
        S() && s.strategy === "no_prefix" && e.hook("app:mounted", async()=>{
            const {locale: p, stat: y, reason: T, from: A} = s.detectBrowserLanguage ? Hg(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: u
            }, f) : Fg;
            _C(d, p),
            b = !1
        }
        ),
        B1(d, {
            locales: s.locales,
            localeCodes: Gr,
            baseUrl: s.baseUrl,
            context: o,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = ue(()=>bu.find(y=>y.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async y=>{
                        const T = _(y)
                          , [A] = await nh(y, d, T);
                        A && T && (m = !1);
                        const L = await o.runWithContext(()=>ih({
                            route: {
                                to: r
                            },
                            targetLocale: y,
                            routeLocaleGetter: l
                        }));
                        await o.runWithContext(async()=>await sh({
                            i18n: d,
                            redirectPath: L,
                            locale: y,
                            route: r
                        }, {
                            enableNavigate: !0
                        }))
                    }
                    ,
                    p.differentDomains = s.differentDomains,
                    p.defaultLocale = s.defaultLocale,
                    p.getBrowserLocale = ()=>xg(),
                    p.getLocaleCookie = ()=>IC(u),
                    p.setLocaleCookie = y=>PC(u, y),
                    p.onBeforeLanguageSwitch = (y,T,A,L)=>e.callHook("i18n:beforeLocaleSwitch", {
                        oldLocale: y,
                        newLocale: T,
                        initialSetup: A,
                        context: L
                    }),
                    p.onLanguageSwitched = (y,T)=>e.callHook("i18n:localeSwitched", {
                        oldLocale: y,
                        newLocale: T
                    }),
                    p.finalizePendingLocaleChange = async()=>{
                        d.__pendingLocale && (Mg(d, d.__pendingLocale),
                        d.__resolvePendingLocalePromise && await d.__resolvePendingLocalePromise(),
                        d.__pendingLocale = void 0)
                    }
                    ,
                    p.waitForPendingLocaleChange = async()=>{
                        d.__pendingLocale && d.__pendingLocalePromise && await d.__pendingLocalePromise
                    }
                },
                onExtendExportedGlobal(p) {
                    return {
                        strategy: {
                            get() {
                                return p.strategy
                            }
                        },
                        localeProperties: {
                            get() {
                                return p.localeProperties.value
                            }
                        },
                        setLocale: {
                            get() {
                                return async y=>Reflect.apply(p.setLocale, p, [y])
                            }
                        },
                        differentDomains: {
                            get() {
                                return p.differentDomains
                            }
                        },
                        defaultLocale: {
                            get() {
                                return p.defaultLocale
                            }
                        },
                        getBrowserLocale: {
                            get() {
                                return ()=>Reflect.apply(p.getBrowserLocale, p, [])
                            }
                        },
                        getLocaleCookie: {
                            get() {
                                return ()=>Reflect.apply(p.getLocaleCookie, p, [])
                            }
                        },
                        setLocaleCookie: {
                            get() {
                                return y=>Reflect.apply(p.setLocaleCookie, p, [y])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (y,T,A,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, T, A, L])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (y,T)=>Reflect.apply(p.onLanguageSwitched, p, [y, T])
                            }
                        },
                        finalizePendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.finalizePendingLocaleChange, p, [])
                            }
                        },
                        waitForPendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.waitForPendingLocaleChange, p, [])
                            }
                        }
                    }
                },
                onExtendVueI18n(p) {
                    return {
                        strategy: {
                            get() {
                                return p.strategy
                            }
                        },
                        localeProperties: {
                            get() {
                                return p.localeProperties.value
                            }
                        },
                        setLocale: {
                            get() {
                                return async y=>Reflect.apply(p.setLocale, p, [y])
                            }
                        },
                        differentDomains: {
                            get() {
                                return p.differentDomains
                            }
                        },
                        defaultLocale: {
                            get() {
                                return p.defaultLocale
                            }
                        },
                        getBrowserLocale: {
                            get() {
                                return ()=>Reflect.apply(p.getBrowserLocale, p, [])
                            }
                        },
                        getLocaleCookie: {
                            get() {
                                return ()=>Reflect.apply(p.getLocaleCookie, p, [])
                            }
                        },
                        setLocaleCookie: {
                            get() {
                                return y=>Reflect.apply(p.setLocaleCookie, p, [y])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (y,T,A,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, T, A, L])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (y,T)=>Reflect.apply(p.onLanguageSwitched, p, [y, T])
                            }
                        },
                        finalizePendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.finalizePendingLocaleChange, p, [])
                            }
                        },
                        waitForPendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.waitForPendingLocaleChange, p, [])
                            }
                        }
                    }
                }
            }
        });
        const g = {
            __composerExtend: p=>{
                const y = Ti(d);
                return p.strategy = y.strategy,
                p.localeProperties = ue(()=>y.localeProperties.value),
                p.setLocale = y.setLocale,
                p.differentDomains = y.differentDomains,
                p.getBrowserLocale = y.getBrowserLocale,
                p.getLocaleCookie = y.getLocaleCookie,
                p.setLocaleCookie = y.setLocaleCookie,
                p.onBeforeLanguageSwitch = y.onBeforeLanguageSwitch,
                p.onLanguageSwitched = y.onLanguageSwitched,
                p.finalizePendingLocaleChange = y.finalizePendingLocaleChange,
                p.waitForPendingLocaleChange = y.waitForPendingLocaleChange,
                ()=>{}
            }
        };
        i.use(d, g),
        wC(o, d);
        let E = 0;
        wE("locale-changing", async(p,y)=>{
            let T, A;
            const L = rh(p, l, a.locale, ()=>pa(d) || c(s.defaultLocale), {
                ssg: S() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: u
            })
              , C = _(L)
              , [O] = ([T,A] = wn(()=>nh(L, d, C)),
            T = await T,
            A(),
            T);
            O && C && (m = !1);
            const D = ([T,A] = wn(()=>o.runWithContext(()=>ih({
                route: {
                    to: p,
                    from: y
                },
                targetLocale: L,
                routeLocaleGetter: s.strategy === "no_prefix" ? ()=>L : l,
                calledWithRouting: !0
            }))),
            T = await T,
            A(),
            T);
            return E++,
            [T,A] = wn(()=>o.runWithContext(async()=>sh({
                i18n: d,
                redirectPath: D,
                locale: L,
                route: p
            }))),
            T = await T,
            A(),
            T
        }
        , {
            global: !0
        })
    }
});
function Ry(e) {
    return Oo() ? (Js(e),
    !0) : !1
}
function Ou(e) {
    return typeof e == "function" ? e() : G(e)
}
const Y1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const q1 = e=>e != null
  , W1 = Object.prototype.toString
  , js = e=>W1.call(e) === "[object Object]"
  , to = ()=>{}
;
function Iy(e) {
    return e || yn()
}
function G1(...e) {
    if (e.length !== 1)
        return ri(...e);
    const t = e[0];
    return typeof t == "function" ? ur(yp(()=>({
        get: t,
        set: to
    }))) : le(t)
}
function J1(e, t=!0, n) {
    Iy() ? Rt(e, n) : t ? e() : Kt(e)
}
function z1(e, t) {
    Iy(t) && Ci(e, t)
}
function no(e) {
    var t;
    const n = Ou(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Py = Y1 ? window : void 0;
function Mt(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = Py) : [t,n,r,i] = e,
    !t)
        return to;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = ()=>{
        o.forEach(u=>u()),
        o.length = 0
    }
      , a = (u,f,d,m)=>(u.addEventListener(f, d, m),
    ()=>u.removeEventListener(f, d, m))
      , l = Fe(()=>[no(t), Ou(i)], ([u,f])=>{
        if (s(),
        !u)
            return;
        const d = js(f) ? {
            ...f
        } : f;
        o.push(...n.flatMap(m=>r.map(_=>a(u, m, _, d))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , c = ()=>{
        l(),
        s()
    }
    ;
    return Ry(c),
    c
}
function Q1() {
    const e = le(!1)
      , t = yn();
    return t && Rt(()=>{
        e.value = !0
    }
    , t),
    e
}
function X1(e) {
    const t = Q1();
    return ue(()=>(t.value,
    !!e()))
}
function Z1(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=Py, immediate: a=!0} = n
      , l = X1(()=>s && "IntersectionObserver"in s)
      , c = ue(()=>{
        const _ = Ou(e);
        return (Array.isArray(_) ? _ : [_]).map(no).filter(q1)
    }
    );
    let u = to;
    const f = le(a)
      , d = l.value ? Fe(()=>[c.value, no(r), f.value], ([_,b])=>{
        if (u(),
        !f.value || !_.length)
            return;
        const S = new IntersectionObserver(t,{
            root: no(b),
            rootMargin: i,
            threshold: o
        });
        _.forEach(g=>g && S.observe(g)),
        u = ()=>{
            S.disconnect(),
            u = to
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : to
      , m = ()=>{
        u(),
        d(),
        f.value = !1
    }
    ;
    return Ry(m),
    {
        isSupported: l,
        isActive: f,
        pause() {
            u(),
            f.value = !1
        },
        resume() {
            f.value = !0
        },
        stop: m
    }
}
function JM(e, t={}) {
    const n = G1(e)
      , {threshold: r=50, onSwipe: i, onSwipeEnd: o, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = Et({
        x: 0,
        y: 0
    })
      , c = (L,C)=>{
        l.x = L,
        l.y = C
    }
      , u = Et({
        x: 0,
        y: 0
    })
      , f = (L,C)=>{
        u.x = L,
        u.y = C
    }
      , d = ue(()=>l.x - u.x)
      , m = ue(()=>l.y - u.y)
      , {max: _, abs: b} = Math
      , S = ue(()=>_(b(d.value), b(m.value)) >= r)
      , g = le(!1)
      , E = le(!1)
      , p = ue(()=>S.value ? b(d.value) > b(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , y = L=>{
        var C, O, D;
        const F = L.buttons === 0
          , U = L.buttons === 1;
        return (D = (O = (C = t.pointerTypes) == null ? void 0 : C.includes(L.pointerType)) != null ? O : F || U) != null ? D : !0
    }
      , T = [Mt(e, "pointerdown", L=>{
        if (!y(L))
            return;
        E.value = !0;
        const C = L.target;
        C == null || C.setPointerCapture(L.pointerId);
        const {clientX: O, clientY: D} = L;
        c(O, D),
        f(O, D),
        s == null || s(L)
    }
    ), Mt(e, "pointermove", L=>{
        if (!y(L) || !E.value)
            return;
        const {clientX: C, clientY: O} = L;
        f(C, O),
        !g.value && S.value && (g.value = !0),
        g.value && (i == null || i(L))
    }
    ), Mt(e, "pointerup", L=>{
        y(L) && (g.value && (o == null || o(L, p.value)),
        E.value = !1,
        g.value = !1)
    }
    )];
    J1(()=>{
        var L, C, O, D, F, U, Z, W;
        (C = (L = n.value) == null ? void 0 : L.style) == null || C.setProperty("touch-action", "none"),
        a && ((D = (O = n.value) == null ? void 0 : O.style) == null || D.setProperty("-webkit-user-select", "none"),
        (U = (F = n.value) == null ? void 0 : F.style) == null || U.setProperty("-ms-user-select", "none"),
        (W = (Z = n.value) == null ? void 0 : Z.style) == null || W.setProperty("user-select", "none"))
    }
    );
    const A = ()=>T.forEach(L=>L());
    return {
        isSwiping: ur(g),
        direction: ur(p),
        posStart: ur(l),
        posEnd: ur(u),
        distanceX: d,
        distanceY: m,
        stop: A
    }
}
const My = 1 / 60 * 1e3
  , $1 = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , Dy = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e($1()), My);
function eR(e) {
    let t = []
      , n = []
      , r = 0
      , i = !1
      , o = !1;
    const s = new WeakSet
      , a = {
        schedule: (l,c=!1,u=!1)=>{
            const f = u && i
              , d = f ? t : n;
            return c && s.add(l),
            d.indexOf(l) === -1 && (d.push(l),
            f && i && (r = t.length)),
            l
        }
        ,
        cancel: l=>{
            const c = n.indexOf(l);
            c !== -1 && n.splice(c, 1),
            s.delete(l)
        }
        ,
        process: l=>{
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.length = 0,
            r = t.length,
            r)
                for (let c = 0; c < r; c++) {
                    const u = t[c];
                    u(l),
                    s.has(u) && (a.schedule(u),
                    e())
                }
            i = !1,
            o && (o = !1,
            a.process(l))
        }
    };
    return a
}
const tR = 40;
let yc = !0
  , Ao = !1
  , vc = !1;
const pi = {
    delta: 0,
    timestamp: 0
}
  , Ho = ["read", "update", "preRender", "render", "postRender"]
  , Ta = Ho.reduce((e,t)=>(e[t] = eR(()=>Ao = !0),
e), {})
  , _c = Ho.reduce((e,t)=>{
    const n = Ta[t];
    return e[t] = (r,i=!1,o=!1)=>(Ao || iR(),
    n.schedule(r, i, o)),
    e
}
, {})
  , nR = Ho.reduce((e,t)=>(e[t] = Ta[t].cancel,
e), {});
Ho.reduce((e,t)=>(e[t] = ()=>Ta[t].process(pi),
e), {});
const rR = e=>Ta[e].process(pi)
  , Ny = e=>{
    Ao = !1,
    pi.delta = yc ? My : Math.max(Math.min(e - pi.timestamp, tR), 1),
    pi.timestamp = e,
    vc = !0,
    Ho.forEach(rR),
    vc = !1,
    Ao && (yc = !1,
    Dy(Ny))
}
  , iR = ()=>{
    Ao = !0,
    yc = !0,
    vc || Dy(Ny)
}
  , Vy = ()=>pi;
function Uy(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Ih = function() {};
const bc = (e,t,n)=>Math.min(Math.max(n, e), t)
  , rl = .001
  , oR = .01
  , sR = 10
  , aR = .05
  , lR = 1;
function cR({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = bc(aR, lR, s),
    e = bc(oR, sR, e / 1e3),
    s < 1 ? (i = c=>{
        const u = c * s
          , f = u * e
          , d = u - n
          , m = Ec(c, s)
          , _ = Math.exp(-f);
        return rl - d / m * _
    }
    ,
    o = c=>{
        const f = c * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(c, 2) * e
          , _ = Math.exp(-f)
          , b = Ec(Math.pow(c, 2), s);
        return (-i(c) + rl > 0 ? -1 : 1) * ((d - m) * _) / b
    }
    ) : (i = c=>{
        const u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -rl + u * f
    }
    ,
    o = c=>{
        const u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    const a = 5 / e
      , l = fR(i, o, a);
    if (e = e * 1e3,
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: s * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const uR = 12;
function fR(e, t, n) {
    let r = n;
    for (let i = 1; i < uR; i++)
        r = r - e(r) / t(r);
    return r
}
function Ec(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const dR = ["duration", "bounce"]
  , hR = ["stiffness", "damping", "mass"];
function Ph(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function pR(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Ph(e, hR) && Ph(e, dR)) {
        const n = cR(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Ru(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = Uy(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: c, velocity: u, duration: f, isResolvedFromDuration: d} = pR(o)
      , m = Mh
      , _ = Mh;
    function b() {
        const S = u ? -(u / 1e3) : 0
          , g = n - t
          , E = l / (2 * Math.sqrt(a * c))
          , p = Math.sqrt(a / c) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const y = Ec(p, E);
            m = T=>{
                const A = Math.exp(-E * p * T);
                return n - A * ((S + E * p * g) / y * Math.sin(y * T) + g * Math.cos(y * T))
            }
            ,
            _ = T=>{
                const A = Math.exp(-E * p * T);
                return E * p * A * (Math.sin(y * T) * (S + E * p * g) / y + g * Math.cos(y * T)) - A * (Math.cos(y * T) * (S + E * p * g) - y * g * Math.sin(y * T))
            }
        } else if (E === 1)
            m = y=>n - Math.exp(-p * y) * (g + (S + p * g) * y);
        else {
            const y = p * Math.sqrt(E * E - 1);
            m = T=>{
                const A = Math.exp(-E * p * T)
                  , L = Math.min(y * T, 300);
                return n - A * ((S + E * p * g) * Math.sinh(L) + y * g * Math.cosh(L)) / y
            }
        }
    }
    return b(),
    {
        next: S=>{
            const g = m(S);
            if (d)
                s.done = S >= f;
            else {
                const E = _(S) * 1e3
                  , p = Math.abs(E) <= r
                  , y = Math.abs(n - g) <= i;
                s.done = p && y
            }
            return s.value = s.done ? n : g,
            s
        }
        ,
        flipTarget: ()=>{
            u = -u,
            [t,n] = [n, t],
            b()
        }
    }
}
Ru.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const Mh = e=>0
  , By = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Iu = (e,t,n)=>-n * e + n * t + e
  , xy = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , ro = e=>e % 1 ? Number(e.toFixed(5)) : e
  , wo = /(-)?([\d]*\.?[\d])+/g
  , Tc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , mR = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function jo(e) {
    return typeof e == "string"
}
const Ko = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , io = Object.assign(Object.assign({}, Ko), {
    transform: xy(0, 1)
})
  , ls = Object.assign(Object.assign({}, Ko), {
    default: 1
})
  , Pu = e=>({
    test: t=>jo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Rr = Pu("deg")
  , oo = Pu("%")
  , be = Pu("px")
  , Dh = Object.assign(Object.assign({}, oo), {
    parse: e=>oo.parse(e) / 100,
    transform: e=>oo.transform(e * 100)
})
  , Mu = (e,t)=>n=>!!(jo(n) && mR.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Fy = (e,t,n)=>r=>{
    if (!jo(r))
        return r;
    const [i,o,s,a] = r.match(wo);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Ur = {
    test: Mu("hsl", "hue"),
    parse: Fy("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + oo.transform(ro(t)) + ", " + oo.transform(ro(n)) + ", " + ro(io.transform(r)) + ")"
}
  , gR = xy(0, 255)
  , il = Object.assign(Object.assign({}, Ko), {
    transform: e=>Math.round(gR(e))
})
  , dr = {
    test: Mu("rgb", "red"),
    parse: Fy("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + il.transform(e) + ", " + il.transform(t) + ", " + il.transform(n) + ", " + ro(io.transform(r)) + ")"
};
function yR(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substr(1, 2),
    n = e.substr(3, 2),
    r = e.substr(5, 2),
    i = e.substr(7, 2)) : (t = e.substr(1, 1),
    n = e.substr(2, 1),
    r = e.substr(3, 1),
    i = e.substr(4, 1),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Sc = {
    test: Mu("#"),
    parse: yR,
    transform: dr.transform
}
  , Nt = {
    test: e=>dr.test(e) || Sc.test(e) || Ur.test(e),
    parse: e=>dr.test(e) ? dr.parse(e) : Ur.test(e) ? Ur.parse(e) : Sc.parse(e),
    transform: e=>jo(e) ? e : e.hasOwnProperty("red") ? dr.transform(e) : Ur.transform(e)
}
  , Hy = "${c}"
  , jy = "${n}";
function vR(e) {
    var t, n, r, i;
    return isNaN(e) && jo(e) && ((n = (t = e.match(wo)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(Tc)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function Ky(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Tc);
    r && (n = r.length,
    e = e.replace(Tc, Hy),
    t.push(...r.map(Nt.parse)));
    const i = e.match(wo);
    return i && (e = e.replace(wo, jy),
    t.push(...i.map(Ko.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Yy(e) {
    return Ky(e).values
}
function qy(e) {
    const {values: t, numColors: n, tokenised: r} = Ky(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let a = 0; a < i; a++)
            s = s.replace(a < n ? Hy : jy, a < n ? Nt.transform(o[a]) : ro(o[a]));
        return s
    }
}
const _R = e=>typeof e == "number" ? 0 : e;
function bR(e) {
    const t = Yy(e);
    return qy(e)(t.map(_R))
}
const Yo = {
    test: vR,
    parse: Yy,
    createTransformer: qy,
    getAnimatableNone: bR
}
  , ER = new Set(["brightness", "contrast", "saturate", "opacity"]);
function TR(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(wo) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = ER.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const SR = /([a-z-]*)\(.*?\)/g
  , Ac = Object.assign(Object.assign({}, Yo), {
    getAnimatableNone: e=>{
        const t = e.match(SR);
        return t ? t.map(TR).join(" ") : e
    }
});
function ol(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Nh({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = ol(l, a, e + 1 / 3),
        o = ol(l, a, e),
        s = ol(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const AR = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , wR = [Sc, dr, Ur]
  , Vh = e=>wR.find(t=>t.test(e))
  , Wy = (e,t)=>{
    let n = Vh(e)
      , r = Vh(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === Ur && (i = Nh(i),
    n = dr),
    r === Ur && (o = Nh(o),
    r = dr);
    const s = Object.assign({}, i);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = AR(i[l], o[l], a));
        return s.alpha = Iu(i.alpha, o.alpha, a),
        n.transform(s)
    }
}
  , kR = e=>typeof e == "number"
  , LR = (e,t)=>n=>t(e(n))
  , Gy = (...e)=>e.reduce(LR);
function Jy(e, t) {
    return kR(e) ? n=>Iu(e, t, n) : Nt.test(e) ? Wy(e, t) : Qy(e, t)
}
const zy = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>Jy(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , CR = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Jy(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function Uh(e) {
    const t = Yo.parse(e)
      , n = t.length;
    let r = 0
      , i = 0
      , o = 0;
    for (let s = 0; s < n; s++)
        r || typeof t[s] == "number" ? r++ : t[s].hue !== void 0 ? o++ : i++;
    return {
        parsed: t,
        numNumbers: r,
        numRGB: i,
        numHSL: o
    }
}
const Qy = (e,t)=>{
    const n = Yo.createTransformer(t)
      , r = Uh(e)
      , i = Uh(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? Gy(zy(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , OR = (e,t)=>n=>Iu(e, t, n);
function RR(e) {
    if (typeof e == "number")
        return OR;
    if (typeof e == "string")
        return Nt.test(e) ? Wy : Qy;
    if (Array.isArray(e))
        return zy;
    if (typeof e == "object")
        return CR
}
function IR(e, t, n) {
    const r = []
      , i = n || RR(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = Gy(l, a)
        }
        r.push(a)
    }
    return r
}
function PR([e,t], [n]) {
    return r=>n(By(e, t, r))
}
function MR(e, t) {
    const n = e.length
      , r = n - 1;
    return i=>{
        let o = 0
          , s = !1;
        if (i <= e[0] ? s = !0 : i >= e[r] && (o = r - 1,
        s = !0),
        !s) {
            let l = 1;
            for (; l < n && !(e[l] > i || l === r); l++)
                ;
            o = l - 1
        }
        const a = By(e[o], e[o + 1], i);
        return t[o](a)
    }
}
function Xy(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Ih(o === t.length),
    Ih(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = IR(t, r, i)
      , a = o === 2 ? PR(e, s) : MR(e, s);
    return n ? l=>a(bc(e[0], e[o - 1], l)) : a
}
const Sa = e=>t=>1 - e(1 - t)
  , Du = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , DR = e=>t=>Math.pow(t, e)
  , Zy = e=>t=>t * t * ((e + 1) * t - e)
  , NR = e=>{
    const t = Zy(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , $y = 1.525
  , VR = 4 / 11
  , UR = 8 / 11
  , BR = 9 / 10
  , ev = e=>e
  , Nu = DR(2)
  , xR = Sa(Nu)
  , tv = Du(Nu)
  , nv = e=>1 - Math.sin(Math.acos(e))
  , rv = Sa(nv)
  , FR = Du(rv)
  , Vu = Zy($y)
  , HR = Sa(Vu)
  , jR = Du(Vu)
  , KR = NR($y)
  , YR = 4356 / 361
  , qR = 35442 / 1805
  , WR = 16061 / 1805
  , Ks = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < VR ? 7.5625 * t : e < UR ? 9.075 * t - 9.9 * e + 3.4 : e < BR ? YR * t - qR * e + WR : 10.8 * e * e - 20.52 * e + 10.72
}
  , GR = Sa(Ks)
  , JR = e=>e < .5 ? .5 * (1 - Ks(1 - e * 2)) : .5 * Ks(e * 2 - 1) + .5;
function zR(e, t) {
    return e.map(()=>t || tv).splice(0, e.length - 1)
}
function QR(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function XR(e, t) {
    return e.map(n=>n * t)
}
function gs({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = XR(r && r.length === s.length ? r : QR(s), i);
    function l() {
        return Xy(a, s, {
            ease: Array.isArray(n) ? n : zR(s, n)
        })
    }
    let c = l();
    return {
        next: u=>(o.value = c(u),
        o.done = u >= i,
        o),
        flipTarget: ()=>{
            s.reverse(),
            c = l()
        }
    }
}
function ZR({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
    const s = {
        done: !1,
        value: t
    };
    let a = n * e;
    const l = t + a
      , c = o === void 0 ? l : o(l);
    return c !== l && (a = c - t),
    {
        next: u=>{
            const f = -a * Math.exp(-u / r);
            return s.done = !(f > i || f < -i),
            s.value = s.done ? c : c + f,
            s
        }
        ,
        flipTarget: ()=>{}
    }
}
const Bh = {
    keyframes: gs,
    spring: Ru,
    decay: ZR
};
function $R(e) {
    if (Array.isArray(e.to))
        return gs;
    if (Bh[e.type])
        return Bh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? gs : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Ru : gs
}
function iv(e, t, n=0) {
    return e - t - n
}
function eI(e, t, n=0, r=!0) {
    return r ? iv(t + -e, t, n) : t - (e - t) + n
}
function tI(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const nI = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>_c.update(t, !0),
        stop: ()=>nR.update(t)
    }
}
;
function ov(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=nI, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: c=0, onPlay: u, onStop: f, onComplete: d, onRepeat: m, onUpdate: _} = e, b = Uy(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: S} = b, g, E = 0, p = b.duration, y, T = !1, A = !0, L;
    const C = $R(b);
    !((n = (t = C).needsInterpolation) === null || n === void 0) && n.call(t, r, S) && (L = Xy([0, 100], [r, S], {
        clamp: !1
    }),
    r = 0,
    S = 100);
    const O = C(Object.assign(Object.assign({}, b), {
        from: r,
        to: S
    }));
    function D() {
        E++,
        l === "reverse" ? (A = E % 2 === 0,
        s = eI(s, p, c, A)) : (s = iv(s, p, c),
        l === "mirror" && O.flipTarget()),
        T = !1,
        m && m()
    }
    function F() {
        g.stop(),
        d && d()
    }
    function U(W) {
        if (A || (W = -W),
        s += W,
        !T) {
            const K = O.next(Math.max(0, s));
            y = K.value,
            L && (y = L(y)),
            T = A ? K.done : s <= 0
        }
        _ == null || _(y),
        T && (E === 0 && (p ?? (p = s)),
        E < a ? tI(s, p, c, A) && D() : F())
    }
    function Z() {
        u == null || u(),
        g = o(U),
        g.start()
    }
    return i && Z(),
    {
        stop: ()=>{
            f == null || f(),
            g.stop()
        }
    }
}
function sv(e, t) {
    return t ? e * (1e3 / t) : 0
}
function rI({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: c, driver: u, onUpdate: f, onComplete: d, onStop: m}) {
    let _;
    function b(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function S(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function g(p) {
        _ == null || _.stop(),
        _ = ov(Object.assign(Object.assign({}, p), {
            driver: u,
            onUpdate: y=>{
                var T;
                f == null || f(y),
                (T = p.onUpdate) === null || T === void 0 || T.call(p, y)
            }
            ,
            onComplete: d,
            onStop: m
        }))
    }
    function E(p) {
        g(Object.assign({
            type: "spring",
            stiffness: s,
            damping: a,
            restDelta: l
        }, p))
    }
    if (b(e))
        E({
            from: e,
            velocity: t,
            to: S(e)
        });
    else {
        let p = i * t + e;
        typeof c < "u" && (p = c(p));
        const y = S(p)
          , T = y === n ? -1 : 1;
        let A, L;
        const C = O=>{
            A = L,
            L = O,
            t = sv(O - A, Vy().delta),
            (T === 1 && O > y || T === -1 && O < y) && E({
                from: O,
                to: y,
                velocity: t
            })
        }
        ;
        g({
            type: "decay",
            from: e,
            velocity: t,
            timeConstant: o,
            power: i,
            restDelta: l,
            modifyTarget: c,
            onUpdate: b(p) ? C : void 0
        })
    }
    return {
        stop: ()=>_ == null ? void 0 : _.stop()
    }
}
const av = (e,t)=>1 - 3 * t + 3 * e
  , lv = (e,t)=>3 * t - 6 * e
  , cv = e=>3 * e
  , Ys = (e,t,n)=>((av(t, n) * e + lv(t, n)) * e + cv(t)) * e
  , uv = (e,t,n)=>3 * av(t, n) * e * e + 2 * lv(t, n) * e + cv(t)
  , iI = 1e-7
  , oI = 10;
function sI(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Ys(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > iI && ++a < oI);
    return s
}
const aI = 8
  , lI = .001;
function cI(e, t, n, r) {
    for (let i = 0; i < aI; ++i) {
        const o = uv(t, n, r);
        if (o === 0)
            return t;
        const s = Ys(t, n, r) - e;
        t -= s / o
    }
    return t
}
const ys = 11
  , cs = 1 / (ys - 1);
function uI(e, t, n, r) {
    if (e === t && n === r)
        return ev;
    const i = new Float32Array(ys);
    for (let s = 0; s < ys; ++s)
        i[s] = Ys(s * cs, e, n);
    function o(s) {
        let a = 0
          , l = 1;
        const c = ys - 1;
        for (; l !== c && i[l] <= s; ++l)
            a += cs;
        --l;
        const u = (s - i[l]) / (i[l + 1] - i[l])
          , f = a + u * cs
          , d = uv(f, e, n);
        return d >= lI ? cI(s, f, e, n) : d === 0 ? f : sI(s, a, a + cs, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Ys(o(s), t, r)
}
const sl = {};
var fI = Object.defineProperty
  , dI = (e,t,n)=>t in e ? fI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , hI = (e,t,n)=>(dI(e, typeof t != "symbol" ? t + "" : t, n),
n);
class pI {
    constructor() {
        hI(this, "subscriptions", new Set)
    }
    add(t) {
        return this.subscriptions.add(t),
        ()=>this.subscriptions.delete(t)
    }
    notify(t, n, r) {
        if (this.subscriptions.size)
            for (const i of this.subscriptions)
                i(t, n, r)
    }
    clear() {
        this.subscriptions.clear()
    }
}
var mI = Object.defineProperty
  , gI = (e,t,n)=>t in e ? mI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , En = (e,t,n)=>(gI(e, typeof t != "symbol" ? t + "" : t, n),
n);
function xh(e) {
    return !isNaN(parseFloat(e))
}
class yI {
    constructor(t) {
        En(this, "current"),
        En(this, "prev"),
        En(this, "timeDelta", 0),
        En(this, "lastUpdated", 0),
        En(this, "updateSubscribers", new pI),
        En(this, "stopAnimation"),
        En(this, "canTrackVelocity", !1),
        En(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: i} = Vy();
            this.lastUpdated !== i && (this.timeDelta = r,
            this.lastUpdated = i),
            _c.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        En(this, "scheduleVelocityCheck", ()=>_c.postRender(this.velocityCheck)),
        En(this, "velocityCheck", ({timestamp: n})=>{
            this.canTrackVelocity || (this.canTrackVelocity = xh(this.current)),
            n !== this.lastUpdated && (this.prev = this.current)
        }
        ),
        this.prev = this.current = t,
        this.canTrackVelocity = xh(this.current)
    }
    onChange(t) {
        return this.updateSubscribers.add(t)
    }
    clearListeners() {
        this.updateSubscribers.clear()
    }
    set(t) {
        this.updateAndNotify(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? sv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            const {stop: r} = t(n);
            this.stopAnimation = r
        }
        ).then(()=>this.clearAnimation())
    }
    stop() {
        this.stopAnimation && this.stopAnimation(),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.stopAnimation
    }
    clearAnimation() {
        this.stopAnimation = null
    }
    destroy() {
        this.updateSubscribers.clear(),
        this.stop()
    }
}
function vI(e) {
    return new yI(e)
}
const {isArray: _I} = Array;
function bI() {
    const e = le({})
      , t = r=>{
        const i = o=>{
            e.value[o] && (e.value[o].stop(),
            e.value[o].destroy(),
            delete e.value[o])
        }
        ;
        r ? _I(r) ? r.forEach(i) : i(r) : Object.keys(e.value).forEach(i)
    }
      , n = (r,i,o)=>{
        if (e.value[r])
            return e.value[r];
        const s = vI(i);
        return s.onChange(a=>o[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return z1(t),
    {
        motionValues: e,
        get: n,
        stop: t
    }
}
function EI(e) {
    return Array.isArray(e)
}
function Ir() {
    return {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restDelta: .5,
        restSpeed: 10
    }
}
function al(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function TI(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 100 : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function ll() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function SI(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const Fh = {
    default: TI,
    x: Ir,
    y: Ir,
    z: Ir,
    rotate: Ir,
    rotateX: Ir,
    rotateY: Ir,
    rotateZ: Ir,
    scaleX: al,
    scaleY: al,
    scale: al,
    backgroundColor: ll,
    color: ll,
    opacity: ll
};
function fv(e, t) {
    let n;
    return EI(t) ? n = SI : n = Fh[e] || Fh.default,
    {
        to: t,
        ...n(t)
    }
}
const Hh = {
    ...Ko,
    transform: Math.round
}
  , dv = {
    color: Nt,
    backgroundColor: Nt,
    outlineColor: Nt,
    fill: Nt,
    stroke: Nt,
    borderColor: Nt,
    borderTopColor: Nt,
    borderRightColor: Nt,
    borderBottomColor: Nt,
    borderLeftColor: Nt,
    borderWidth: be,
    borderTopWidth: be,
    borderRightWidth: be,
    borderBottomWidth: be,
    borderLeftWidth: be,
    borderRadius: be,
    radius: be,
    borderTopLeftRadius: be,
    borderTopRightRadius: be,
    borderBottomRightRadius: be,
    borderBottomLeftRadius: be,
    width: be,
    maxWidth: be,
    height: be,
    maxHeight: be,
    size: be,
    top: be,
    right: be,
    bottom: be,
    left: be,
    padding: be,
    paddingTop: be,
    paddingRight: be,
    paddingBottom: be,
    paddingLeft: be,
    margin: be,
    marginTop: be,
    marginRight: be,
    marginBottom: be,
    marginLeft: be,
    rotate: Rr,
    rotateX: Rr,
    rotateY: Rr,
    rotateZ: Rr,
    scale: ls,
    scaleX: ls,
    scaleY: ls,
    scaleZ: ls,
    skew: Rr,
    skewX: Rr,
    skewY: Rr,
    distance: be,
    translateX: be,
    translateY: be,
    translateZ: be,
    x: be,
    y: be,
    z: be,
    perspective: be,
    transformPerspective: be,
    opacity: io,
    originX: Dh,
    originY: Dh,
    originZ: be,
    zIndex: Hh,
    filter: Ac,
    WebkitFilter: Ac,
    fillOpacity: io,
    strokeOpacity: io,
    numOctaves: Hh
}
  , Uu = e=>dv[e];
function hv(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function AI(e, t) {
    let n = Uu(e);
    return n !== Ac && (n = Yo),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const wI = {
    linear: ev,
    easeIn: Nu,
    easeInOut: tv,
    easeOut: xR,
    circIn: nv,
    circInOut: FR,
    circOut: rv,
    backIn: Vu,
    backInOut: jR,
    backOut: HR,
    anticipate: KR,
    bounceIn: GR,
    bounceInOut: JR,
    bounceOut: Ks
};
function jh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,i] = e;
        return uI(t, n, r, i)
    } else if (typeof e == "string")
        return wI[e];
    return e
}
function kI(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function Kh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Yo.test(t) && !t.startsWith("url("))
}
function LI(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function CI({ease: e, times: t, delay: n, ...r}) {
    const i = {
        ...r
    };
    return t && (i.offset = t),
    e && (i.ease = kI(e) ? e.map(jh) : jh(e)),
    n && (i.elapsed = -n),
    i
}
function OI(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    LI(t),
    RI(e) || (e = {
        ...e,
        ...fv(n, t.to)
    }),
    {
        ...t,
        ...CI(e)
    }
}
function RI({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: i, ...o}) {
    return !!Object.keys(o).length
}
function II(e, t) {
    return e[t] || e.default || e
}
function PI(e, t, n, r, i) {
    const o = II(r, e);
    let s = o.from === null || o.from === void 0 ? t.get() : o.from;
    const a = Kh(e, n);
    s === "none" && a && typeof n == "string" && (s = AI(e, n));
    const l = Kh(e, s);
    function c(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return o.type === "inertia" || o.type === "decay" ? rI({
            ...d,
            ...o
        }) : ov({
            ...OI(o, d, e),
            onUpdate: m=>{
                d.onUpdate(m),
                o.onUpdate && o.onUpdate(m)
            }
            ,
            onComplete: ()=>{
                r.onComplete && r.onComplete(),
                i && i(),
                f && f()
            }
        })
    }
    function u(f) {
        return t.set(n),
        r.onComplete && r.onComplete(),
        i && i(),
        f && f(),
        {
            stop: ()=>{}
        }
    }
    return !l || !a || o.type === !1 ? u : c
}
function MI() {
    const {motionValues: e, stop: t, get: n} = bI();
    return {
        motionValues: e,
        stop: t,
        push: (i,o,s,a={},l)=>{
            const c = s[i]
              , u = n(i, c, s);
            if (a && a.immediate) {
                u.set(o);
                return
            }
            const f = PI(i, u, o, a, l);
            u.start(f)
        }
    }
}
function DI(e, t={}, {motionValues: n, push: r, stop: i}=MI()) {
    const o = G(t)
      , s = le(!1);
    Fe(n, f=>{
        s.value = Object.values(f).filter(d=>d.isAnimating()).length > 0
    }
    , {
        immediate: !0,
        deep: !0
    });
    const a = f=>{
        if (!o || !o[f])
            throw new Error(`The variant ${f} does not exist.`);
        return o[f]
    }
      , l = f=>(typeof f == "string" && (f = a(f)),
    Promise.all(Object.entries(f).map(([d,m])=>{
        if (d !== "transition")
            return new Promise(_=>r(d, m, e, f.transition || fv(d, f[d]), _))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = js(f) ? f : a(f);
            Object.entries(d).forEach(([m,_])=>{
                m !== "transition" && r(m, _, e, {
                    immediate: !0
                })
            }
            )
        }
        ,
        leave: async f=>{
            let d;
            if (o && (o.leave && (d = o.leave),
            !o.leave && o.initial && (d = o.initial)),
            !d) {
                f();
                return
            }
            await l(d),
            f()
        }
        ,
        stop: i
    }
}
const Bu = typeof window < "u"
  , NI = ()=>Bu && window.onpointerdown === null
  , VI = ()=>Bu && window.ontouchstart === null
  , UI = ()=>Bu && window.onmousedown === null;
function BI({target: e, state: t, variants: n, apply: r}) {
    const i = G(n)
      , o = le(!1)
      , s = le(!1)
      , a = le(!1)
      , l = ue(()=>{
        let u = [];
        return i && (i.hovered && (u = [...u, ...Object.keys(i.hovered)]),
        i.tapped && (u = [...u, ...Object.keys(i.tapped)]),
        i.focused && (u = [...u, ...Object.keys(i.focused)])),
        u
    }
    )
      , c = ue(()=>{
        const u = {};
        Object.assign(u, t.value),
        o.value && i.hovered && Object.assign(u, i.hovered),
        s.value && i.tapped && Object.assign(u, i.tapped),
        a.value && i.focused && Object.assign(u, i.focused);
        for (const f in u)
            l.value.includes(f) || delete u[f];
        return u
    }
    );
    i.hovered && (Mt(e, "mouseenter", ()=>o.value = !0),
    Mt(e, "mouseleave", ()=>{
        o.value = !1,
        s.value = !1
    }
    ),
    Mt(e, "mouseout", ()=>{
        o.value = !1,
        s.value = !1
    }
    )),
    i.tapped && (UI() && (Mt(e, "mousedown", ()=>s.value = !0),
    Mt(e, "mouseup", ()=>s.value = !1)),
    NI() && (Mt(e, "pointerdown", ()=>s.value = !0),
    Mt(e, "pointerup", ()=>s.value = !1)),
    VI() && (Mt(e, "touchstart", ()=>s.value = !0),
    Mt(e, "touchend", ()=>s.value = !1))),
    i.focused && (Mt(e, "focus", ()=>a.value = !0),
    Mt(e, "blur", ()=>a.value = !1)),
    Fe(c, r)
}
function xI({set: e, target: t, variants: n, variant: r}) {
    const i = G(n);
    Fe(()=>t, ()=>{
        i && (i.initial && e("initial"),
        i.enter && (r.value = "enter"))
    }
    , {
        immediate: !0,
        flush: "pre"
    })
}
function FI({state: e, apply: t}) {
    Fe(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function pv({target: e, variants: t, variant: n}) {
    const r = G(t);
    r && (r.visible || r.visibleOnce) && Z1(e, ([{isIntersecting: i}])=>{
        r.visible ? i ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (i && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function HI(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && xI(e),
    t.syncVariants && FI(e),
    t.visibilityHooks && pv(e),
    t.eventListeners && BI(e)
}
function mv(e={}) {
    const t = Et({
        ...e
    })
      , n = le({});
    return Fe(t, ()=>{
        const r = {};
        for (const [i,o] of Object.entries(t)) {
            const s = Uu(i)
              , a = hv(o, s);
            r[i] = a
        }
        n.value = r
    }
    , {
        immediate: !0,
        deep: !0
    }),
    {
        state: t,
        style: n
    }
}
function xu(e, t) {
    Fe(()=>no(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const jI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function gv(e={}, t=!0) {
    const n = Et({
        ...e
    })
      , r = le("");
    return Fe(n, i=>{
        let o = ""
          , s = !1;
        if (t && (i.x || i.y || i.z)) {
            const a = [i.x || 0, i.y || 0, i.z || 0].map(be.transform).join(",");
            o += `translate3d(${a}) `,
            s = !0
        }
        for (const [a,l] of Object.entries(i)) {
            if (t && (a === "x" || a === "y" || a === "z"))
                continue;
            const c = Uu(a)
              , u = hv(l, c);
            o += `${jI[a] || a}(${u}) `
        }
        t && !s && (o += "translateZ(0px) "),
        r.value = o.trim()
    }
    , {
        immediate: !0,
        deep: !0
    }),
    {
        state: n,
        transform: r
    }
}
const KI = ["", "X", "Y", "Z"]
  , YI = ["perspective", "translate", "scale", "rotate", "skew"]
  , yv = ["transformPerspective", "x", "y", "z"];
YI.forEach(e=>{
    KI.forEach(t=>{
        const n = e + t;
        yv.push(n)
    }
    )
}
);
const qI = new Set(yv);
function Fu(e) {
    return qI.has(e)
}
const WI = new Set(["originX", "originY", "originZ"]);
function vv(e) {
    return WI.has(e)
}
function GI(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,i])=>{
        Fu(r) || vv(r) ? t[r] = i : n[r] = i
    }
    ),
    {
        transform: t,
        style: n
    }
}
function _v(e) {
    const {transform: t, style: n} = GI(e)
      , {transform: r} = gv(t)
      , {style: i} = mv(n);
    return r.value && (i.value.transform = r.value),
    i.value
}
function JI(e, t) {
    let n, r;
    const {state: i, style: o} = mv();
    return xu(e, s=>{
        r = s;
        for (const a of Object.keys(dv))
            s.style[a] === null || s.style[a] === "" || Fu(a) || vv(a) || (i[a] = s.style[a]);
        n && Object.entries(n).forEach(([a,l])=>s.style[a] = l),
        t && t(i)
    }
    ),
    Fe(o, s=>{
        if (!r) {
            n = s;
            return
        }
        for (const a in s)
            r.style[a] = s[a]
    }
    , {
        immediate: !0
    }),
    {
        style: i
    }
}
function zI(e) {
    const t = e.trim().split(/\) |\)/);
    if (t.length === 1)
        return {};
    const n = r=>r.endsWith("px") || r.endsWith("deg") ? parseFloat(r) : isNaN(Number(r)) ? Number(r) : r;
    return t.reduce((r,i)=>{
        if (!i)
            return r;
        const [o,s] = i.split("(")
          , l = s.split(",").map(u=>n(u.endsWith(")") ? u.replace(")", "") : u.trim()))
          , c = l.length === 1 ? l[0] : l;
        return {
            ...r,
            [o]: c
        }
    }
    , {})
}
function QI(e, t) {
    Object.entries(zI(t)).forEach(([n,r])=>{
        const i = ["x", "y", "z"];
        if (n === "translate3d") {
            if (r === 0) {
                i.forEach(o=>e[o] = 0);
                return
            }
            r.forEach((o,s)=>e[i[s]] = o);
            return
        }
        if (r = parseFloat(r),
        n === "translateX") {
            e.x = r;
            return
        }
        if (n === "translateY") {
            e.y = r;
            return
        }
        if (n === "translateZ") {
            e.z = r;
            return
        }
        e[n] = r
    }
    )
}
function XI(e, t) {
    let n, r;
    const {state: i, transform: o} = gv();
    return xu(e, s=>{
        r = s,
        s.style.transform && QI(i, s.style.transform),
        n && (s.style.transform = n),
        t && t(i)
    }
    ),
    Fe(o, s=>{
        if (!r) {
            n = s;
            return
        }
        r.style.transform = s
    }
    , {
        immediate: !0
    }),
    {
        transform: i
    }
}
function ZI(e, t) {
    const n = Et({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: i} = JI(e, r)
      , {transform: o} = XI(e, r);
    return Fe(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const c = Fu(a) ? o : i;
            c[a] && c[a] === l || (c[a] = l)
        }
        )
    }
    , {
        immediate: !0,
        deep: !0
    }),
    xu(e, ()=>t && r(t)),
    {
        motionProperties: n,
        style: i,
        transform: o
    }
}
function $I(e={}) {
    const t = G(e)
      , n = le();
    return {
        state: ue(()=>{
            if (n.value)
                return t[n.value]
        }
        ),
        variant: n
    }
}
function bv(e, t={}, n) {
    const {motionProperties: r} = ZI(e)
      , {variant: i, state: o} = $I(t)
      , s = DI(r, t)
      , a = {
        target: e,
        variant: i,
        variants: t,
        state: o,
        motionProperties: r,
        ...s
    };
    return HI(a, n),
    a
}
const eP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function tP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && js(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    eP.forEach(r=>{
        if (r === "delay") {
            if (n && n[r] && typeof n[r] == "number") {
                const i = n[r];
                t && t.value && (t.value.enter && (t.value.enter.transition || (t.value.enter.transition = {}),
                t.value.enter.transition = {
                    delay: i,
                    ...t.value.enter.transition
                }),
                t.value.visible && (t.value.visible.transition || (t.value.visible.transition = {}),
                t.value.visible.transition = {
                    delay: i,
                    ...t.value.visible.transition
                }),
                t.value.visibleOnce && (t.value.visibleOnce.transition || (t.value.visibleOnce.transition = {}),
                t.value.visibleOnce.transition = {
                    delay: i,
                    ...t.value.visibleOnce.transition
                }))
            }
            return
        }
        if (n && n[r] && js(n[r])) {
            const i = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = i
        }
    }
    ))
}
function cl(e) {
    return {
        created: (r,i,o)=>{
            const s = i.value && typeof i.value == "string" ? i.value : o.key;
            s && sl[s] && sl[s].stop();
            const a = le(e || {});
            typeof i.value == "object" && (a.value = i.value),
            tP(o, a);
            const c = bv(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = c,
            s && (sl[s] = c)
        }
        ,
        mounted: (r,i,o)=>{
            r.motionInstance && pv(r.motionInstance)
        }
        ,
        getSSRProps(r, i) {
            let {initial: o} = r.value || i && (i == null ? void 0 : i.props) || {};
            o = G(o);
            const s = ru((e == null ? void 0 : e.initial) || {}, o || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: _v(s)
            }
        }
    }
}
const nP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , rP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , iP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , oP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , sP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}
  , aP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visibleOnce: {
        scale: 1,
        opacity: 1
    }
}
  , lP = {
    initial: {
        x: -100,
        rotate: 90,
        opacity: 0
    },
    enter: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , cP = {
    initial: {
        x: -100,
        rotate: 90,
        opacity: 0
    },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , uP = {
    initial: {
        x: -100,
        rotate: 90,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , fP = {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0
    },
    enter: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , dP = {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0
    },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , hP = {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , pP = {
    initial: {
        y: -100,
        rotate: -90,
        opacity: 0
    },
    enter: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , mP = {
    initial: {
        y: -100,
        rotate: -90,
        opacity: 0
    },
    visible: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , gP = {
    initial: {
        y: -100,
        rotate: -90,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , yP = {
    initial: {
        y: 100,
        rotate: 90,
        opacity: 0
    },
    enter: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , vP = {
    initial: {
        y: 100,
        rotate: 90,
        opacity: 0
    },
    visible: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , _P = {
    initial: {
        y: 100,
        rotate: 90,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , bP = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , EP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , TP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , SP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , AP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , wP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , kP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , LP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , CP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , OP = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , RP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , IP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , wc = {
    __proto__: null,
    fade: nP,
    fadeVisible: rP,
    fadeVisibleOnce: iP,
    pop: oP,
    popVisible: sP,
    popVisibleOnce: aP,
    rollBottom: yP,
    rollLeft: lP,
    rollRight: fP,
    rollTop: pP,
    rollVisibleBottom: vP,
    rollVisibleLeft: cP,
    rollVisibleOnceBottom: _P,
    rollVisibleOnceLeft: uP,
    rollVisibleOnceRight: hP,
    rollVisibleOnceTop: gP,
    rollVisibleRight: dP,
    rollVisibleTop: mP,
    slideBottom: OP,
    slideLeft: bP,
    slideRight: SP,
    slideTop: kP,
    slideVisibleBottom: RP,
    slideVisibleLeft: EP,
    slideVisibleOnceBottom: IP,
    slideVisibleOnceLeft: TP,
    slideVisibleOnceRight: wP,
    slideVisibleOnceTop: CP,
    slideVisibleRight: AP,
    slideVisibleTop: LP
}
  , PP = Ve({
    props: {
        is: {
            type: [String, Object],
            required: !1
        },
        preset: {
            type: String,
            required: !1
        },
        instance: {
            type: Object,
            required: !1
        },
        variants: {
            type: Object,
            required: !1
        },
        initial: {
            type: Object,
            required: !1
        },
        enter: {
            type: Object,
            required: !1
        },
        leave: {
            type: Object,
            required: !1
        },
        visible: {
            type: Object,
            required: !1
        },
        visibleOnce: {
            type: Object,
            required: !1
        },
        hovered: {
            type: Object,
            required: !1
        },
        tapped: {
            type: Object,
            required: !1
        },
        focused: {
            type: Object,
            required: !1
        },
        delay: {
            type: [Number, String],
            required: !1
        }
    },
    setup(e) {
        var a;
        const t = Y0()
          , n = Et({});
        if (!e.is && !t.default)
            return ()=>ct("div", {});
        const r = ue(()=>{
            let l;
            return e.preset && (l = wc[e.preset]),
            l
        }
        )
          , i = ue(()=>({
            initial: e.initial,
            enter: e.enter,
            leave: e.leave,
            visible: e.visible,
            visibleOnce: e.visibleOnce,
            hovered: e.hovered,
            tapped: e.tapped,
            focused: e.focused
        }))
          , o = ue(()=>{
            const l = {
                ...i.value,
                ...r.value || {},
                ...e.variants || {}
            };
            return e.delay && (l.enter.transition = {
                ...l.enter.transition
            },
            l.enter.transition.delay = parseInt(e.delay)),
            l
        }
        )
          , s = ue(()=>{
            if (!e.is)
                return;
            let l = e.is;
            return typeof s.value == "string" && !Pv(l) && (l = Yr(l)),
            l
        }
        );
        if (((a = process == null ? void 0 : process.env) == null ? void 0 : a.NODE_ENV) === "development" || process != null && process.dev) {
            const l = c=>{
                var u;
                (u = c.variants) != null && u.initial && c.set("initial"),
                setTimeout(()=>{
                    var f, d, m;
                    (f = c.variants) != null && f.enter && c.apply("enter"),
                    (d = c.variants) != null && d.visible && c.apply("visible"),
                    (m = c.variants) != null && m.visibleOnce && c.apply("visibleOnce")
                }
                , 10)
            }
            ;
            Gc(()=>Object.entries(n).forEach(([c,u])=>l(u)))
        }
        return {
            slots: t,
            component: s,
            motionConfig: o,
            instances: n
        }
    },
    render({slots: e, motionConfig: t, instances: n, component: r}) {
        var a;
        const i = _v(t.initial || {})
          , o = (l,c)=>(l.props || (l.props = {}),
        l.props.style = i,
        l.props.onVnodeMounted = ({el: u})=>{
            const f = bv(u, t);
            n[c] = f
        }
        ,
        l);
        if (r) {
            const l = ct(r, void 0, e);
            return o(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,c)=>o(l, c))
    }
});
function MP(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, i=>`-${i}`).toLowerCase().replace(/\s+/g, "-").replace(r, i=>n.charAt(t.indexOf(i))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const DP = {
    install(e, t) {
        if (e.directive("motion", cl()),
        e.component("Motion", PP),
        !t || t && !t.excludePresets)
            for (const n in wc) {
                const r = wc[n];
                e.directive(`motion-${MP(n)}`, cl(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, cl(r))
            }
    }
}
  , NP = It(e=>{
    const t = Wn();
    e.vueApp.use(DP, t.public.motion)
}
)
  , VP = It({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = qt()
          , n = Wn()
          , r = new Set;
        t.beforeEach(()=>{
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: o})=>{
            r.add(o)
        }
        );
        function i(o) {
            const a = "href"in o && o.href[0] === "#" ? n.app.baseURL + o.href : Oi(n.app.baseURL, o.fullPath);
            sO({
                path: a,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", ()=>{
            t.beforeResolve(i)
        }
        ),
        t.onError((o,s)=>{
            r.has(o) && i(s)
        }
        )
    }
});
function UP(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            var r = e.get(t);
            r ? r.push(n) : e.set(t, [n])
        },
        off: function(t, n) {
            var r = e.get(t);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, n) {
            var r = e.get(t);
            r && r.slice().map(function(i) {
                i(n)
            }),
            (r = e.get("*")) && r.slice().map(function(i) {
                i(t, n)
            })
        }
    }
}
const BP = It(()=>{
    const e = UP();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , xP = [BT, FT, nO, iO, oO, uO, fO, dO, DO, V1, U1, K1, NP, VP, BP]
  , FP = Ve({
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(e) {
        const t = e.renderKey
          , n = e.route
          , r = {};
        for (const i in e.route)
            Object.defineProperty(r, i, {
                get: ()=>t === e.renderKey ? e.route[i] : n[i]
            });
        return Hr(Do, Li(r)),
        ()=>ct(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , HP = Ve({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, expose: n}) {
        const r = re()
          , i = le()
          , o = bt(Do, null);
        let s;
        n({
            pageRef: i
        });
        const a = bt(bm, null);
        let l;
        const c = r.deferHydration();
        if (r.isHydrating) {
            const u = r.hooks.hookOnce("app:error", c);
            qt().beforeEach(u)
        }
        return e.pageKey && Fe(()=>e.pageKey, (u,f)=>{
            u !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>ct(Xm, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: u=>{
                const f = KP(o, u.route, u.Component)
                  , d = o && o.matched.length === u.route.matched.length;
                if (!u.Component) {
                    if (l && !d)
                        return l;
                    c();
                    return
                }
                if (l && a && !a.isCurrent(u.route))
                    return l;
                if (f && o && (!a || a != null && a.isCurrent(o)))
                    return d ? l : null;
                const m = Wl(u, e.pageKey);
                !r.isHydrating && !YP(o, u.route, u.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const _ = !!(e.transition ?? u.route.meta.pageTransition ?? jl)
                  , b = _ && jP([e.transition, u.route.meta.pageTransition, jl, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", u.Component)
                    }
                }].filter(Boolean))
                  , S = e.keepalive ?? u.route.meta.keepalive ?? RT;
                return l = Zm(Io, _ && b, qS(S, ct(Yc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", u.Component),
                    onResolve: ()=>{
                        Kt(()=>r.callHook("page:finish", u.Component).then(()=>r.callHook("page:loading:end")).finally(c))
                    }
                }, {
                    default: ()=>{
                        const g = ct(FP, {
                            key: m || void 0,
                            vnode: u.Component,
                            route: u.route,
                            renderKey: m || void 0,
                            trackRootNodes: _,
                            vnodeRef: i
                        });
                        return S && (g.type.name = u.Component.type.name || u.Component.type.__name || "RouteProvider"),
                        g
                    }
                }))).default(),
                l
            }
        })
    }
});
function jP(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? cu(n.onAfterLeave) : void 0
    }));
    return ru(...t)
}
function KP(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some((i,o)=>{
        var s, a, l;
        return ((s = i.components) == null ? void 0 : s.default) !== ((l = (a = e.matched[o]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }
    ) || n && Wl({
        route: t,
        Component: n
    }) !== Wl({
        route: e,
        Component: n
    })
}
function YP(e, t, n) {
    return e ? t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const qP = Ve({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await fr[e.name]().then(r=>r.default || r);
        return ()=>ct(n, e.layoutProps, t.slots)
    }
})
  , WP = Ve({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    },
    setup(e, t) {
        const n = re()
          , r = bt(Do)
          , i = r === ia() ? KS() : r
          , o = ue(()=>{
            let l = G(e.name) ?? i.meta.layout ?? "default";
            return l && !(l in fr) && e.fallback && (l = G(e.fallback)),
            l
        }
        )
          , s = le();
        t.expose({
            layoutRef: s
        });
        const a = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", a);
            qt().beforeEach(l)
        }
        return ()=>{
            const l = o.value && o.value in fr
              , c = i.meta.layoutTransition ?? OT;
            return Zm(Io, l && c, {
                default: ()=>ct(Yc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        Kt(a)
                    }
                }, {
                    default: ()=>ct(GP, {
                        layoutProps: yi(t.attrs, {
                            ref: s
                        }),
                        key: o.value || void 0,
                        name: o.value,
                        shouldProvide: !e.name,
                        hasTransition: !!c
                    }, t.slots)
                })
            }).default()
        }
    }
})
  , GP = Ve({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean]
        },
        layoutProps: {
            type: Object
        },
        hasTransition: {
            type: Boolean
        },
        shouldProvide: {
            type: Boolean
        }
    },
    setup(e, t) {
        const n = e.name;
        return e.shouldProvide && Hr(bm, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, i;
            return !n || typeof n == "string" && !(n in fr) ? (i = (r = t.slots).default) == null ? void 0 : i.call(r) : ct(qP, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , JP = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , zP = {};
function QP(e, t) {
    const n = HP
      , r = WP;
    return pe(),
    yt(r, null, {
        default: rn(()=>[Xe(n)]),
        _: 1
    })
}
const XP = JP(zP, [["render", QP]])
  , ZP = ["innerHTML"]
  , $P = Ve({
    __name: "Icon",
    props: {
        name: {}
    },
    async setup(e) {
        let t, n;
        const r = e
          , i = Object.fromEntries(Object.entries(Object.assign({
            "/assets/svg/icons/alarm-clock-glow.svg": ()=>w(()=>import("./alarm-clock-glow.aC8bZIm6.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/alarm.svg": ()=>w(()=>import("./alarm.DhXSImdX.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-boost.svg": ()=>w(()=>import("./app-bar-boost.CCdq5ioD.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-earn.svg": ()=>w(()=>import("./app-bar-earn.Bb212ucL.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-friends.svg": ()=>w(()=>import("./app-bar-friends.CTyi4Yjj.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-mine.svg": ()=>w(()=>import("./app-bar-mine.BkoJ97Sz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding-new.svg": ()=>w(()=>import("./arrow-onboarding-new.BEtKb0Zx.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding.svg": ()=>w(()=>import("./arrow-onboarding.BJzvMlow.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/caret-right.svg": ()=>w(()=>import("./caret-right.Be5C5AdH.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/check.svg": ()=>w(()=>import("./check.DpGtnzuV.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/clock.svg": ()=>w(()=>import("./clock.BeWcAb1-.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close-simple.svg": ()=>w(()=>import("./close-simple.BHIZU7ZI.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close.svg": ()=>w(()=>import("./close.KB0mydBa.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/complete.svg": ()=>w(()=>import("./complete.lDxhBE40.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/copy.svg": ()=>w(()=>import("./copy.CjcTersn.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/energy.svg": ()=>w(()=>import("./energy.DhIj__pU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/friends.svg": ()=>w(()=>import("./friends.D9yHF85E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gift.svg": ()=>w(()=>import("./gift.D56pTUEE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/glow.svg": ()=>w(()=>import("./glow.DR87XU47.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gr.svg": ()=>w(()=>import("./gr.CE-S70jU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/heart.svg": ()=>w(()=>import("./heart.uEUhPDEu.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/info.svg": ()=>w(()=>import("./info.CwbDISi0.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/key.svg": ()=>w(()=>import("./key.CBMDGpK3.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-arrow.svg": ()=>w(()=>import("./ln-arrow.C4l_4b2T.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-discord.svg": ()=>w(()=>import("./ln-discord.DNbmOmlO.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-medium.svg": ()=>w(()=>import("./ln-medium.BrOe8wIZ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-telegram.svg": ()=>w(()=>import("./ln-telegram.cBOmGQCr.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-x.svg": ()=>w(()=>import("./ln-x.CdWKHoAz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-youtube.svg": ()=>w(()=>import("./ln-youtube.q1Uak5_E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-background.svg": ()=>w(()=>import("./loading-background.DLKaIbsv.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-image.svg": ()=>w(()=>import("./loading-image.DD2lTtqq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-yellow.svg": ()=>w(()=>import("./loading-yellow.BmzMALSJ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading.svg": ()=>w(()=>import("./loading.D5-YfgbB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/lock.svg": ()=>w(()=>import("./lock.FuE0uKjd.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/markets.svg": ()=>w(()=>import("./markets.Bq8f52NT.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/not-support-phone-glow.svg": ()=>w(()=>import("./not-support-phone-glow.BSB35vgE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/refresh.svg": ()=>w(()=>import("./refresh.BvInaMMK.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/robots.svg": ()=>w(()=>import("./robots.BmOab4DB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/settings.svg": ()=>w(()=>import("./settings.CezmlWen.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ticket.svg": ()=>w(()=>import("./ticket.DQ5Qpq-5.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/wallet.svg": ()=>w(()=>import("./wallet.3o12uypq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default)
        })).map(([s,a])=>[s.split("/").pop().split(".").shift(), a]))
          , o = r.name && ([t,n] = W0(()=>{
            var s;
            return (s = i == null ? void 0 : i[r.name]) == null ? void 0 : s.call(i)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>G(o) ? (pe(),
        qe("div", {
            key: 0,
            class: "icon",
            innerHTML: G(o)
        }, null, 8, ZP)) : jt("", !0)
    }
})
  , eM = {
    class: "is-token"
}
  , tM = ["srcset", "alt"]
  , nM = ["src", "alt"]
  , rM = Ve({
    __name: "Token",
    setup(e) {
        return (t,n)=>(pe(),
        qe("picture", eM, [ge("source", {
            srcset: G(Ql).TOKEN_WEBP,
            type: "image/webp",
            alt: G(Gt).GAME_NAME
        }, null, 8, tM), ge("img", {
            class: "img-responsive",
            src: G(Ql).TOKEN,
            alt: G(Gt).GAME_NAME
        }, null, 8, nM)]))
    }
})
  , Yh = Qg({
    componentName: "NuxtLinkLocale"
})
  , iM = Ve({
    name: "NuxtLinkLocale",
    props: {
        ...Yh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = jg()
          , r = ue(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , i = ue(()=>{
            if (e.external || e.target && e.target !== "_self")
                return !0;
            const s = e.to ?? e.href;
            return typeof s == "object" ? !1 : s === "" || s == null || Dn(s, {
                acceptRelative: !0
            })
        }
        )
          , o = ()=>{
            const s = {
                ...e
            };
            return i.value || (s.to = r.value),
            delete s.href,
            delete s.locale,
            s
        }
        ;
        return ()=>ct(Yh, o(), t.default)
    }
});
function oM() {
    return Vn
}
const sM = {
    class: "ln"
}
  , aM = {
    class: "ln-header"
}
  , lM = {
    class: "ln-header-left"
}
  , cM = {
    class: "ln-header-social"
}
  , uM = ["href"]
  , fM = ["href"]
  , dM = ["innerHTML"]
  , hM = {
    class: "ln-header-center"
}
  , pM = {
    class: "ln-header-center-logo"
}
  , mM = {
    class: "ln-header-right"
}
  , gM = {
    class: "button"
}
  , yM = ["innerHTML"]
  , vM = ge("span", null, "coming soon", -1)
  , _M = {
    class: "ln-content"
}
  , bM = {
    key: 0
}
  , EM = {
    class: "is-small-text"
}
  , TM = {
    key: 1,
    class: "is-small-text"
}
  , SM = {
    key: 2,
    class: "is-small-text"
}
  , AM = {
    class: "ln-content-button"
}
  , wM = ["innerHTML"]
  , kM = ge("div", {
    class: "ln-bottom"
}, null, -1)
  , LM = Ve({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var s;
        const t = On()
          , n = e;
        AT({
            title: `${((s = n.error) == null ? void 0 : s.statusCode) ?? 500} - ${Gt.GAME_NAME}`
        });
        const r = le("")
          , i = oM()
          , o = le(i.tz.guess());
        return Rt(()=>{
            r.value = navigator.userAgent,
            setTimeout(()=>{
                var a;
                Ge().trackEvent(`error_${((a = n.error) == null ? void 0 : a.statusCode) ?? 500}`, {
                    timezone: o.value,
                    userAgent: r.value
                })
            }
            , 1e3)
        }
        ),
        (a,l)=>{
            var d, m, _;
            const c = $P
              , u = rM
              , f = iM;
            return pe(),
            qe("main", sM, [ge("div", aM, [ge("div", lM, [ge("div", cM, [ge("a", {
                class: "is-x",
                href: G(t).link_twitter,
                target: "_blank"
            }, [Xe(c, {
                name: "ln-x"
            })], 8, uM), ge("a", {
                class: "is-telegram",
                href: G(t).link_telegram,
                target: "_blank"
            }, [Xe(c, {
                name: "ln-telegram"
            })], 8, fM), ge("p", {
                innerHTML: a.$t("landing.join_us")
            }, null, 8, dM)])]), ge("div", hM, [ge("div", pM, [Xe(u)]), ge("p", null, Jt(G(Gt).GAME_NAME), 1)]), ge("div", mM, [ge("button", gM, [ge("p", {
                innerHTML: a.$t("landing.whitepaper")
            }, null, 8, yM), Xe(c, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), vM])])]), ge("div", _M, [ge("h1", null, Jt(e.error.statusCode ?? 500), 1), (d = e.error) != null && d.statusMessage ? (pe(),
            qe("p", bM, "Status: " + Jt(((m = e.error) == null ? void 0 : m.statusMessage) ?? ""), 1)) : jt("", !0), ge("p", EM, Jt((_ = e.error) == null ? void 0 : _.toJSON()), 1), G(r) ? (pe(),
            qe("p", TM, "User Agent: " + Jt(G(r)), 1)) : jt("", !0), G(o) ? (pe(),
            qe("p", SM, "TimeZone: " + Jt(G(o)), 1)) : jt("", !0), ge("div", AM, [Xe(f, {
                class: "button",
                to: G(Bo).LANDING
            }, {
                default: rn(()=>[ge("span", {
                    innerHTML: a.$t("buttons.home")
                }, null, 8, wM)]),
                _: 1
            }, 8, ["to"])])]), kM])
        }
    }
})
  , qh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = re()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            qt().beforeEach(a)
        }
        const i = !1;
        Hr(Do, ia()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const o = oa();
        Mp((a,l,c)=>{
            if (n.hooks.callHook("vue:error", a, l, c).catch(u=>console.error("[nuxt] Error in `vue:error` hook", u)),
            CE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>ii(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(pe(),
        yt(Yc, {
            onResolve: G(r)
        }, {
            default: rn(()=>[G(o) ? (pe(),
            yt(G(LM), {
                key: 0,
                error: G(o)
            }, null, 8, ["error"])) : G(s) ? (pe(),
            yt(G(t), {
                key: 1,
                context: G(s)
            }, null, 8, ["context"])) : G(i) ? (pe(),
            yt(gl(G(i)), {
                key: 2
            })) : (pe(),
            yt(G(XP), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Wh;
{
    let e;
    Wh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? eb(qh) : rm(qh)
          , i = iE({
            vueApp: r
        });
        async function o(l) {
            await i.callHook("app:error", l),
            i.payload.error = i.payload.error || sa(l)
        }
        r.config.errorHandler = o;
        try {
            await sE(i, xP)
        } catch (l) {
            o(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(PT),
            await i.hooks.callHook("app:mounted", r),
            await Kt()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = Wh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Vw as $, Fw as A, OM as B, Ct as C, j0 as D, rM as E, ht as F, XC as G, jg as H, QC as I, Vt as J, No as K, Nw as L, FM as M, JP as N, xw as O, qM as P, NC as Q, iM as R, me as S, oM as T, Bo as U, Gt as V, IM as W, Iw as X, HM as Y, jM as Z, $P as _, qe as a, Nn as a0, $e as a1, uc as a2, Hn as a3, zp as a4, fg as a5, KM as a6, YM as a7, Ln as a8, Hr as a9, AT as aA, Rm as aB, Ci as aC, JM as aD, _r as aE, Io as aF, gl as aG, yi as aH, ia as aI, VM as aJ, VL as aK, HP as aL, DM as aM, xM as aN, UM as aO, NM as aP, rn as aa, MM as ab, $a as ac, Za as ad, Uw as ae, Bw as af, Gc as ag, Fe as ah, Kt as ai, ct as aj, B0 as ak, w as al, Dw as am, W0 as an, Mw as ao, Pw as ap, Hw as aq, Yr as ar, Et as as, jw as at, st as au, PM as av, BM as aw, Ql as ax, Wn as ay, RM as az, G as b, ue as c, Ve as d, ge as e, St as f, Ii as g, GM as h, Ut as i, da as j, Xe as k, yt as l, re as m, Cn as n, pe as o, On as p, Rt as q, le as r, gn as s, Jt as t, Ge as u, ft as v, jt as w, WM as x, sn as y, CM as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./airdrop.D4-OqVKt.js", "./airdrop.BolK5W-L.js", "./Preloader.vue.DXl4siP9.js", "./earn.COUpBvtc.js", "./boost.t7qj5Lq9.js", "./BalanceLarge.vue.CFsmfSlc.js", "./Price.vue.Yxea0O_O.js", "./earn.Blk0uZhP.js", "./attraction.rCO6GjjY.js", "./friends.BEU_VQYU.js", "./index.0is5NuBi.js", "./Earn.vue.2U3Tn16h.js", "./image.vue.Cv9sBvLn.js", "./Hamster.vue.RTh-R6Q5.js", "./effect-fade.CaDWztLr.js", "./effect-fade.vkSr05gD.css", "./MiniGameLose.vue.BmUSqAY9.js", "./index.Bw5XmvsK.css", "./index.DD1Bw0bG.js", "./mine.Cd7TL_GQ.js", "./bingx.9S1tc1aM.js", "./exchange.CFkTfRZI.js", "./index.Ks22AsX8.js", "./index.CU6v1Bzc.js", "./index.CzmKWlR0.js", "./LandingHeader.vue.BuosEATF.js", "./privacy-policy.cqUzgv4E.js", "./default.fxhIZ1Co.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
