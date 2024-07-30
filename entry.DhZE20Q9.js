const ABSOLUTE_PATH = 'https://hamsterkombatgame.io/_nuxt/';

/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ws(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const nt = {}
  , si = []
  , $t = ()=>{}
  , Tv = ()=>!1
  , Lo = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Lc = e=>e.startsWith("onUpdate:")
  , gt = Object.assign
  , Oc = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Sv = Object.prototype.hasOwnProperty
  , je = (e,t)=>Sv.call(e, t)
  , fe = Array.isArray
  , ai = e=>Oo(e) === "[object Map]"
  , Jh = e=>Oo(e) === "[object Set]"
  , Av = e=>Oo(e) === "[object RegExp]"
  , ye = e=>typeof e == "function"
  , it = e=>typeof e == "string"
  , Li = e=>typeof e == "symbol"
  , tt = e=>e !== null && typeof e == "object"
  , Cc = e=>(tt(e) || ye(e)) && ye(e.then) && ye(e.catch)
  , zh = Object.prototype.toString
  , Oo = e=>zh.call(e)
  , kv = e=>Oo(e).slice(8, -1)
  , Qh = e=>Oo(e) === "[object Object]"
  , Rc = e=>it(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , li = Ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Gs = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , wv = /-(\w)/g
  , Mn = Gs(e=>e.replace(wv, (t,n)=>n ? n.toUpperCase() : ""))
  , Lv = /\B([A-Z])/g
  , zr = Gs(e=>e.replace(Lv, "-$1").toLowerCase())
  , Js = Gs(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , wa = Gs(e=>e ? `on${Js(e)}` : "")
  , _r = (e,t)=>!Object.is(e, t)
  , ci = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , _s = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , fl = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Xh = e=>{
    const t = it(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Yu;
const Zh = ()=>Yu || (Yu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function On(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = it(r) ? Iv(r) : On(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (it(e) || tt(e))
        return e
}
const Ov = /;(?![^(]*\))/g
  , Cv = /:([^]+)/
  , Rv = /\/\*[^]*?\*\//g;
function Iv(e) {
    const t = {};
    return e.replace(Rv, "").split(Ov).forEach(n=>{
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
    if (it(e))
        t = e;
    else if (fe(e))
        for (let n = 0; n < e.length; n++) {
            const r = Ct(e[n]);
            r && (t += r + " ")
        }
    else if (tt(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function rn(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !it(t) && (e.class = Ct(t)),
    n && (e.style = On(n)),
    e
}
const Pv = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , Mv = Ws(Pv)
  , Dv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Nv = Ws(Dv);
function $h(e) {
    return !!e || e === ""
}
const zt = e=>it(e) ? e : e == null ? "" : fe(e) || tt(e) && (e.toString === zh || !ye(e.toString)) ? JSON.stringify(e, ep, 2) : String(e)
  , ep = (e,t)=>t && t.__v_isRef ? ep(e, t.value) : ai(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,i],o)=>(n[La(r, o) + " =>"] = i,
    n), {})
} : Jh(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>La(n))
} : Li(t) ? La(t) : tt(t) && !fe(t) && !Qh(t) ? String(t) : t
  , La = (e,t="")=>{
    var n;
    return Li(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jt;
class tp {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = jt,
        !t && jt && (this.index = (jt.scopes || (jt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = jt;
            try {
                return jt = this,
                t()
            } finally {
                jt = n
            }
        }
    }
    on() {
        jt = this
    }
    off() {
        jt = this.parent
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
    return new tp(e)
}
function Vv(e, t=jt) {
    t && t.active && t.effects.push(e)
}
function Ro() {
    return jt
}
function zs(e) {
    jt && jt.cleanups.push(e)
}
let Fr;
class Ic {
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
        Vv(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Qr();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Uv(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Xr()
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
        let t = pr
          , n = Fr;
        try {
            return pr = !0,
            Fr = this,
            this._runnings++,
            qu(this),
            this.fn()
        } finally {
            Wu(this),
            this._runnings--,
            Fr = n,
            pr = t
        }
    }
    stop() {
        var t;
        this.active && (qu(this),
        Wu(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Uv(e) {
    return e.value
}
function qu(e) {
    e._trackId++,
    e._depsLength = 0
}
function Wu(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            np(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function np(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let pr = !0
  , dl = 0;
const rp = [];
function Qr() {
    rp.push(pr),
    pr = !1
}
function Xr() {
    const e = rp.pop();
    pr = e === void 0 ? !0 : e
}
function Pc() {
    dl++
}
function Mc() {
    for (dl--; !dl && hl.length; )
        hl.shift()()
}
function ip(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && np(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const hl = [];
function op(e, t, n) {
    Pc();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && hl.push(r.scheduler)))
    }
    Mc()
}
const sp = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , bs = new WeakMap
  , xr = Symbol("")
  , pl = Symbol("");
function Ft(e, t, n) {
    if (pr && Fr) {
        let r = bs.get(e);
        r || bs.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = sp(()=>r.delete(n))),
        ip(Fr, i)
    }
}
function Yn(e, t, n, r, i, o) {
    const s = bs.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && fe(e)) {
        const l = Number(r);
        s.forEach((c,u)=>{
            (u === "length" || !Li(u) && u >= l) && a.push(c)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            fe(e) ? Rc(n) && a.push(s.get("length")) : (a.push(s.get(xr)),
            ai(e) && a.push(s.get(pl)));
            break;
        case "delete":
            fe(e) || (a.push(s.get(xr)),
            ai(e) && a.push(s.get(pl)));
            break;
        case "set":
            ai(e) && a.push(s.get(xr));
            break
        }
    Pc();
    for (const l of a)
        l && op(l, 4);
    Mc()
}
function Bv(e, t) {
    var n;
    return (n = bs.get(e)) == null ? void 0 : n.get(t)
}
const Fv = Ws("__proto__,__v_isRef,__isVue")
  , ap = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Li))
  , Gu = xv();
function xv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = Ne(this);
            for (let o = 0, s = this.length; o < s; o++)
                Ft(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(Ne)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            Qr(),
            Pc();
            const r = Ne(this)[t].apply(this, n);
            return Mc(),
            Xr(),
            r
        }
    }
    ),
    e
}
function Hv(e) {
    const t = Ne(this);
    return Ft(t, "has", e),
    t.hasOwnProperty(e)
}
class lp {
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
            return r === (i ? o ? e0 : dp : o ? fp : up).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = fe(t);
        if (!i) {
            if (s && je(Gu, n))
                return Reflect.get(Gu, n, r);
            if (n === "hasOwnProperty")
                return Hv
        }
        const a = Reflect.get(t, n, r);
        return (Li(n) ? ap.has(n) : Fv(n)) || (i || Ft(t, "get", n),
        o) ? a : at(a) ? s && Rc(n) ? a : a.value : tt(a) ? i ? fr(a) : Tt(a) : a
    }
}
class cp extends lp {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Yr(o);
            if (!Es(r) && !Yr(r) && (o = Ne(o),
            r = Ne(r)),
            !fe(t) && at(o) && !at(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const s = fe(t) && Rc(n) ? Number(n) < t.length : je(t, n)
          , a = Reflect.set(t, n, r, i);
        return t === Ne(i) && (s ? _r(r, o) && Yn(t, "set", n, r) : Yn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = je(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && Yn(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Li(n) || !ap.has(n)) && Ft(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ft(t, "iterate", fe(t) ? "length" : xr),
        Reflect.ownKeys(t)
    }
}
class jv extends lp {
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
const Kv = new cp
  , Yv = new jv
  , qv = new cp(!0)
  , Dc = e=>e
  , Qs = e=>Reflect.getPrototypeOf(e);
function Wo(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = Ne(e)
      , o = Ne(t);
    n || (_r(t, o) && Ft(i, "get", t),
    Ft(i, "get", o));
    const {has: s} = Qs(i)
      , a = r ? Dc : n ? Uc : ao;
    if (s.call(i, t))
        return a(e.get(t));
    if (s.call(i, o))
        return a(e.get(o));
    e !== i && e.get(t)
}
function Go(e, t=!1) {
    const n = this.__v_raw
      , r = Ne(n)
      , i = Ne(e);
    return t || (_r(e, i) && Ft(r, "has", e),
    Ft(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Jo(e, t=!1) {
    return e = e.__v_raw,
    !t && Ft(Ne(e), "iterate", xr),
    Reflect.get(e, "size", e)
}
function Ju(e) {
    e = Ne(e);
    const t = Ne(this);
    return Qs(t).has.call(t, e) || (t.add(e),
    Yn(t, "add", e, e)),
    this
}
function zu(e, t) {
    t = Ne(t);
    const n = Ne(this)
      , {has: r, get: i} = Qs(n);
    let o = r.call(n, e);
    o || (e = Ne(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? _r(t, s) && Yn(n, "set", e, t) : Yn(n, "add", e, t),
    this
}
function Qu(e) {
    const t = Ne(this)
      , {has: n, get: r} = Qs(t);
    let i = n.call(t, e);
    i || (e = Ne(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && Yn(t, "delete", e, void 0),
    o
}
function Xu() {
    const e = Ne(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Yn(e, "clear", void 0, void 0),
    n
}
function zo(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , a = Ne(s)
          , l = t ? Dc : e ? Uc : ao;
        return !e && Ft(a, "iterate", xr),
        s.forEach((c,u)=>r.call(i, l(c), l(u), o))
    }
}
function Qo(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = Ne(i)
          , s = ai(o)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , c = i[e](...r)
          , u = n ? Dc : t ? Uc : ao;
        return !t && Ft(o, "iterate", l ? pl : xr),
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
function zn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Wv() {
    const e = {
        get(o) {
            return Wo(this, o)
        },
        get size() {
            return Jo(this)
        },
        has: Go,
        add: Ju,
        set: zu,
        delete: Qu,
        clear: Xu,
        forEach: zo(!1, !1)
    }
      , t = {
        get(o) {
            return Wo(this, o, !1, !0)
        },
        get size() {
            return Jo(this)
        },
        has: Go,
        add: Ju,
        set: zu,
        delete: Qu,
        clear: Xu,
        forEach: zo(!1, !0)
    }
      , n = {
        get(o) {
            return Wo(this, o, !0)
        },
        get size() {
            return Jo(this, !0)
        },
        has(o) {
            return Go.call(this, o, !0)
        },
        add: zn("add"),
        set: zn("set"),
        delete: zn("delete"),
        clear: zn("clear"),
        forEach: zo(!0, !1)
    }
      , r = {
        get(o) {
            return Wo(this, o, !0, !0)
        },
        get size() {
            return Jo(this, !0)
        },
        has(o) {
            return Go.call(this, o, !0)
        },
        add: zn("add"),
        set: zn("set"),
        delete: zn("delete"),
        clear: zn("clear"),
        forEach: zo(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = Qo(o, !1, !1),
        n[o] = Qo(o, !0, !1),
        t[o] = Qo(o, !1, !0),
        r[o] = Qo(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [Gv,Jv,zv,Qv] = Wv();
function Nc(e, t) {
    const n = t ? e ? Qv : zv : e ? Jv : Gv;
    return (r,i,o)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(je(n, i) && i in r ? n : r, i, o)
}
const Xv = {
    get: Nc(!1, !1)
}
  , Zv = {
    get: Nc(!1, !0)
}
  , $v = {
    get: Nc(!0, !1)
}
  , up = new WeakMap
  , fp = new WeakMap
  , dp = new WeakMap
  , e0 = new WeakMap;
function t0(e) {
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
function n0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : t0(kv(e))
}
function Tt(e) {
    return Yr(e) ? e : Vc(e, !1, Kv, Xv, up)
}
function Oi(e) {
    return Vc(e, !1, qv, Zv, fp)
}
function fr(e) {
    return Vc(e, !0, Yv, $v, dp)
}
function Vc(e, t, n, r, i) {
    if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = n0(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return i.set(e, a),
    a
}
function mr(e) {
    return Yr(e) ? mr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Yr(e) {
    return !!(e && e.__v_isReadonly)
}
function Es(e) {
    return !!(e && e.__v_isShallow)
}
function hp(e) {
    return mr(e) || Yr(e)
}
function Ne(e) {
    const t = e && e.__v_raw;
    return t ? Ne(t) : e
}
function dt(e) {
    return Object.isExtensible(e) && _s(e, "__v_skip", !0),
    e
}
const ao = e=>tt(e) ? Tt(e) : e
  , Uc = e=>tt(e) ? fr(e) : e;
class pp {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Ic(()=>t(this._value),()=>ui(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = Ne(this);
        return (!t._cacheable || t.effect.dirty) && _r(t._value, t._value = t.effect.run()) && ui(t, 4),
        Bc(t),
        t.effect._dirtyLevel >= 2 && ui(t, 2),
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
function r0(e, t, n=!1) {
    let r, i;
    const o = ye(e);
    return o ? (r = e,
    i = $t) : (r = e.get,
    i = e.set),
    new pp(r,i,o || !i,n)
}
function Bc(e) {
    var t;
    pr && Fr && (e = Ne(e),
    ip(Fr, (t = e.dep) != null ? t : e.dep = sp(()=>e.dep = void 0, e instanceof pp ? e : void 0)))
}
function ui(e, t=4, n) {
    e = Ne(e);
    const r = e.dep;
    r && op(r, t)
}
function at(e) {
    return !!(e && e.__v_isRef === !0)
}
function le(e) {
    return mp(e, !1)
}
function pn(e) {
    return mp(e, !0)
}
function mp(e, t) {
    return at(e) ? e : new i0(e,t)
}
class i0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Ne(t),
        this._value = n ? t : ao(t)
    }
    get value() {
        return Bc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Es(t) || Yr(t);
        t = n ? t : Ne(t),
        _r(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : ao(t),
        ui(this, 4))
    }
}
function gp(e) {
    ui(e, 4)
}
function G(e) {
    return at(e) ? e.value : e
}
const o0 = {
    get: (e,t,n)=>G(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const i = e[t];
        return at(i) && !at(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function yp(e) {
    return mr(e) ? e : new Proxy(e,o0)
}
class s0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>Bc(this), ()=>ui(this));
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
function vp(e) {
    return new s0(e)
}
function Fc(e) {
    const t = fe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = _p(e, n);
    return t
}
class a0 {
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
        return Bv(Ne(this._object), this._key)
    }
}
class l0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function ii(e, t, n) {
    return at(e) ? e : ye(e) ? new l0(e) : tt(e) && arguments.length > 1 ? _p(e, t, n) : le(e)
}
function _p(e, t, n) {
    const r = e[t];
    return at(r) ? r : new a0(e,t,n)
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        Io(i, t, n)
    }
}
function nn(e, t, n, r) {
    if (ye(e)) {
        const o = gr(e, t, n, r);
        return o && Cc(o) && o.catch(s=>{
            Io(s, t, n)
        }
        ),
        o
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        i.push(nn(e[o], t, n, r));
    return i
}
function Io(e, t, n, r=!0) {
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
            gr(l, null, 10, [e, s, a]);
            return
        }
    }
    c0(e, n, i, r)
}
function c0(e, t, n, r=!0) {
    console.error(e)
}
let lo = !1
  , ml = !1;
const kt = [];
let kn = 0;
const fi = [];
let or = null
  , Vr = 0;
const bp = Promise.resolve();
let xc = null;
function Yt(e) {
    const t = xc || bp;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function u0(e) {
    let t = kn + 1
      , n = kt.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = kt[r]
          , o = co(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function Hc(e) {
    (!kt.length || !kt.includes(e, lo && e.allowRecurse ? kn + 1 : kn)) && (e.id == null ? kt.push(e) : kt.splice(u0(e.id), 0, e),
    Ep())
}
function Ep() {
    !lo && !ml && (ml = !0,
    xc = bp.then(Tp))
}
function f0(e) {
    const t = kt.indexOf(e);
    t > kn && kt.splice(t, 1)
}
function gl(e) {
    fe(e) ? fi.push(...e) : (!or || !or.includes(e, e.allowRecurse ? Vr + 1 : Vr)) && fi.push(e),
    Ep()
}
function Zu(e, t, n=lo ? kn + 1 : 0) {
    for (; n < kt.length; n++) {
        const r = kt[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            kt.splice(n, 1),
            n--,
            r()
        }
    }
}
function Ts(e) {
    if (fi.length) {
        const t = [...new Set(fi)].sort((n,r)=>co(n) - co(r));
        if (fi.length = 0,
        or) {
            or.push(...t);
            return
        }
        for (or = t,
        Vr = 0; Vr < or.length; Vr++)
            or[Vr]();
        or = null,
        Vr = 0
    }
}
const co = e=>e.id == null ? 1 / 0 : e.id
  , d0 = (e,t)=>{
    const n = co(e) - co(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Tp(e) {
    ml = !1,
    lo = !0,
    kt.sort(d0);
    try {
        for (kn = 0; kn < kt.length; kn++) {
            const t = kt[kn];
            t && t.active !== !1 && gr(t, null, 14)
        }
    } finally {
        kn = 0,
        kt.length = 0,
        Ts(),
        lo = !1,
        xc = null,
        (kt.length || fi.length) && Tp()
    }
}
function h0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || nt;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const u = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[u] || nt;
        d && (i = n.map(m=>it(m) ? m.trim() : m)),
        f && (i = n.map(fl))
    }
    let a, l = r[a = wa(t)] || r[a = wa(Mn(t))];
    !l && o && (l = r[a = wa(zr(t))]),
    l && nn(l, e, 6, i);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        nn(c, e, 6, i)
    }
}
function Sp(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let s = {}
      , a = !1;
    if (!ye(e)) {
        const l = c=>{
            const u = Sp(c, t, !0);
            u && (a = !0,
            gt(s, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (tt(e) && r.set(e, null),
    null) : (fe(o) ? o.forEach(l=>s[l] = null) : gt(s, o),
    tt(e) && r.set(e, s),
    s)
}
function Xs(e, t) {
    return !e || !Lo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    je(e, t[0].toLowerCase() + t.slice(1)) || je(e, zr(t)) || je(e, t))
}
let ht = null
  , Zs = null;
function Ss(e) {
    const t = ht;
    return ht = e,
    Zs = e && e.type.__scopeId || null,
    t
}
function p0(e) {
    Zs = e
}
function m0() {
    Zs = null
}
const g0 = e=>on;
function on(e, t=ht, n) {
    if (!t || e._n)
        return e;
    const r = (...i)=>{
        r._d && hf(-1);
        const o = Ss(t);
        let s;
        try {
            s = e(...i)
        } finally {
            Ss(o),
            r._d && hf(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Oa(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, props: o, propsOptions: [s], slots: a, attrs: l, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: _, inheritAttrs: b} = e;
    let S, g;
    const E = Ss(e);
    try {
        if (n.shapeFlag & 4) {
            const y = i || r
              , T = y;
            S = Qt(u.call(T, y, f, o, m, d, _)),
            g = l
        } else {
            const y = t;
            S = Qt(y.length > 1 ? y(o, {
                attrs: l,
                slots: a,
                emit: c
            }) : y(o, null)),
            g = t.props ? l : v0(l)
        }
    } catch (y) {
        qi.length = 0,
        Io(y, e, 1),
        S = Ze(Rt)
    }
    let p = S;
    if (g && b !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: T} = p;
        y.length && T & 7 && (s && y.some(Lc) && (g = _0(g, s)),
        p = qn(p, g))
    }
    return n.dirs && (p = qn(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    S = p,
    Ss(E),
    S
}
function y0(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (yi(i)) {
            if (i.type !== Rt || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const v0 = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Lo(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , _0 = (e,t)=>{
    const n = {};
    for (const r in e)
        (!Lc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function b0(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: a, patchFlag: l} = t
      , c = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? $u(r, s, c) : !!s;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (s[d] !== r[d] && !Xs(c, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? $u(r, s, c) : !0 : !!s;
    return !1
}
function $u(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !Xs(n, o))
            return !0
    }
    return !1
}
function jc({vnode: e, parent: t}, n) {
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
const Kc = "components"
  , E0 = "directives";
function qr(e, t) {
    return Yc(Kc, e, !0, t) || e
}
const Ap = Symbol.for("v-ndc");
function yl(e) {
    return it(e) ? Yc(Kc, e, !1) || e : e || Ap
}
function CM(e) {
    return Yc(E0, e)
}
function Yc(e, t, n=!0, r=!1) {
    const i = ht || _t;
    if (i) {
        const o = i.type;
        if (e === Kc) {
            const a = Cl(o, !1);
            if (a && (a === t || a === Mn(t) || a === Js(Mn(t))))
                return o
        }
        const s = ef(i[e] || o[e], t) || ef(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function ef(e, t) {
    return e && (e[t] || e[Mn(t)] || e[Js(Mn(t))])
}
const kp = e=>e.__isSuspense;
let vl = 0;
const T0 = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, i, o, s, a, l, c) {
        if (e == null)
            S0(t, n, r, i, o, s, a, l, c);
        else {
            if (o && o.deps > 0) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            A0(e, t, n, r, i, s, a, l, c)
        }
    },
    hydrate: k0,
    create: Wc,
    normalize: w0
}
  , qc = T0;
function uo(e, t) {
    const n = e.props && e.props[t];
    ye(n) && n()
}
function S0(e, t, n, r, i, o, s, a, l) {
    const {p: c, o: {createElement: u}} = l
      , f = u("div")
      , d = e.suspense = Wc(e, i, r, t, f, n, o, s, a, l);
    c(null, d.pendingBranch = e.ssContent, f, null, r, d, o, s),
    d.deps > 0 ? (uo(e, "onPending"),
    uo(e, "onFallback"),
    c(null, e.ssFallback, t, n, r, null, o, s),
    di(d, e.ssFallback)) : d.resolve(!1, !0)
}
function A0(e, t, n, r, i, o, s, a, {p: l, um: c, o: {createElement: u}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: _, pendingBranch: b, isInFallback: S, isHydrating: g} = f;
    if (b)
        f.pendingBranch = d,
        un(d, b) ? (l(b, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : S && (g || (l(_, m, n, r, i, null, o, s, a),
        di(f, m)))) : (f.pendingId = vl++,
        g ? (f.isHydrating = !1,
        f.activeBranch = b) : c(b, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = u("div"),
        S ? (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : (l(_, m, n, r, i, null, o, s, a),
        di(f, m))) : _ && un(d, _) ? (l(_, d, n, r, i, f, o, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 && f.resolve()));
    else if (_ && un(d, _))
        l(_, d, n, r, i, f, o, s, a),
        di(f, d);
    else if (uo(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = vl++,
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
function Wc(e, t, n, r, i, o, s, a, l, c, u=!1) {
    const {p: f, m: d, um: m, n: _, o: {parentNode: b, remove: S}} = c;
    let g;
    const E = L0(e);
    E && t != null && t.pendingBranch && (g = t.pendingId,
    t.deps++);
    const p = e.props ? Xh(e.props.timeout) : void 0
      , y = o
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: vl++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !u,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(A=!1, L=!1) {
            const {vnode: O, activeBranch: C, pendingBranch: D, pendingId: x, effects: U, parentComponent: Z, container: W} = T;
            let K = !1;
            T.isHydrating ? T.isHydrating = !1 : A || (K = C && D.transition && D.transition.mode === "out-in",
            K && (C.transition.afterLeave = ()=>{
                x === T.pendingId && (d(D, W, o === y ? _(C) : o, 0),
                gl(U))
            }
            ),
            C && (b(C.el) !== T.hiddenContainer && (o = _(C)),
            m(C, Z, T, !0)),
            K || d(D, W, o, 0)),
            di(T, D),
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
            !Y && !K && gl(U),
            T.effects = [],
            E && t && t.pendingBranch && g === t.pendingId && (t.deps--,
            t.deps === 0 && !L && t.resolve()),
            uo(O, "onResolve")
        },
        fallback(A) {
            if (!T.pendingBranch)
                return;
            const {vnode: L, activeBranch: O, parentComponent: C, container: D, namespace: x} = T;
            uo(L, "onFallback");
            const U = _(O)
              , Z = ()=>{
                T.isInFallback && (f(null, A, D, U, C, null, x, a, l),
                di(T, A))
            }
              , W = A.transition && A.transition.mode === "out-in";
            W && (O.transition.afterLeave = Z),
            T.isInFallback = !0,
            m(O, C, null, !0),
            W || Z()
        },
        move(A, L, O) {
            T.activeBranch && d(T.activeBranch, A, L, O),
            T.container = A
        },
        next() {
            return T.activeBranch && _(T.activeBranch)
        },
        registerDep(A, L) {
            const O = !!T.pendingBranch;
            O && T.deps++;
            const C = A.vnode.el;
            A.asyncDep.catch(D=>{
                Io(D, A, 0)
            }
            ).then(D=>{
                if (A.isUnmounted || T.isUnmounted || T.pendingId !== A.suspenseId)
                    return;
                A.asyncResolved = !0;
                const {vnode: x} = A;
                Ol(A, D, !1),
                C && (x.el = C);
                const U = !C && A.subTree.el;
                L(A, x, b(C || A.subTree.el), C ? null : _(A.subTree), T, s, l),
                U && S(U),
                jc(A, x.el),
                O && --T.deps === 0 && T.resolve()
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
function k0(e, t, n, r, i, o, s, a, l) {
    const c = t.suspense = Wc(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, a, !0)
      , u = l(e, c.pendingBranch = t.ssContent, n, c, o, s);
    return c.deps === 0 && c.resolve(!1, !0),
    u
}
function w0(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = tf(r ? n.default : n),
    e.ssFallback = r ? tf(n.fallback) : Ze(Rt)
}
function tf(e) {
    let t;
    if (ye(e)) {
        const n = gi && e._c;
        n && (e._d = !1,
        me()),
        e = e(),
        n && (e._d = !0,
        t = en,
        Gp())
    }
    return fe(e) && (e = y0(e)),
    e = Qt(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function wp(e, t) {
    t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : gl(e)
}
function di(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let i = t.el;
    for (; !i && t.component; )
        t = t.component.subTree,
        i = t.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    jc(r, i))
}
function L0(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const O0 = Symbol.for("v-scx")
  , C0 = ()=>Et(O0);
function R0(e, t) {
    return Gc(e, null, t)
}
const Xo = {};
function He(e, t, n) {
    return Gc(e, t, n)
}
function Gc(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: a}=nt) {
    if (t && o) {
        const A = t;
        t = (...L)=>{
            A(...L),
            T()
        }
    }
    const l = _t
      , c = A=>r === !0 ? A : Ur(A, r === !1 ? 1 : void 0);
    let u, f = !1, d = !1;
    if (at(e) ? (u = ()=>e.value,
    f = Es(e)) : mr(e) ? (u = ()=>c(e),
    f = !0) : fe(e) ? (d = !0,
    f = e.some(A=>mr(A) || Es(A)),
    u = ()=>e.map(A=>{
        if (at(A))
            return A.value;
        if (mr(A))
            return c(A);
        if (ye(A))
            return gr(A, l, 2)
    }
    )) : ye(e) ? t ? u = ()=>gr(e, l, 2) : u = ()=>(m && m(),
    nn(e, l, 3, [_])) : u = $t,
    t && r) {
        const A = u;
        u = ()=>Ur(A())
    }
    let m, _ = A=>{
        m = p.onStop = ()=>{
            gr(A, l, 4),
            m = p.onStop = void 0
        }
    }
    , b;
    if (ra)
        if (_ = $t,
        t ? n && nn(t, l, 3, [u(), d ? [] : void 0, _]) : u(),
        i === "sync") {
            const A = C0();
            b = A.__watcherHandles || (A.__watcherHandles = [])
        } else
            return $t;
    let S = d ? new Array(e.length).fill(Xo) : Xo;
    const g = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const A = p.run();
                (r || f || (d ? A.some((L,O)=>_r(L, S[O])) : _r(A, S))) && (m && m(),
                nn(t, l, 3, [A, S === Xo ? void 0 : d && S[0] === Xo ? [] : S, _]),
                S = A)
            } else
                p.run()
    }
    ;
    g.allowRecurse = !!t;
    let E;
    i === "sync" ? E = g : i === "post" ? E = ()=>St(g, l && l.suspense) : (g.pre = !0,
    l && (g.id = l.uid),
    E = ()=>Hc(g));
    const p = new Ic(u,$t,E)
      , y = Ro()
      , T = ()=>{
        p.stop(),
        y && Oc(y.effects, p)
    }
    ;
    return t ? n ? g() : S = p.run() : i === "post" ? St(p.run.bind(p), l && l.suspense) : p.run(),
    b && b.push(T),
    T
}
function I0(e, t, n) {
    const r = this.proxy
      , i = it(e) ? e.includes(".") ? Lp(r, e) : ()=>r[e] : e.bind(r, r);
    let o;
    ye(t) ? o = t : (o = t.handler,
    n = t);
    const s = Gr(this)
      , a = Gc(i, o.bind(r), n);
    return s(),
    a
}
function Lp(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Ur(e, t, n=0, r) {
    if (!tt(e) || e.__v_skip)
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
    at(e))
        Ur(e.value, t, n, r);
    else if (fe(e))
        for (let i = 0; i < e.length; i++)
            Ur(e[i], t, n, r);
    else if (Jh(e) || ai(e))
        e.forEach(i=>{
            Ur(i, t, n, r)
        }
        );
    else if (Qh(e))
        for (const i in e)
            Ur(e[i], t, n, r);
    return e
}
function RM(e, t) {
    if (ht === null)
        return e;
    const n = ia(ht) || ht.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,a,l=nt] = t[i];
        o && (ye(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Ur(s),
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
function An(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        o && (a.oldValue = o[s].value);
        let l = a.dir[r];
        l && (Qr(),
        nn(l, n, 8, [e.el, a, e, t]),
        Xr())
    }
}
const sr = Symbol("_leaveCb")
  , Zo = Symbol("_enterCb");
function P0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return It(()=>{
        e.isMounted = !0
    }
    ),
    yn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Gt = [Function, Array]
  , Op = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Gt,
    onEnter: Gt,
    onAfterEnter: Gt,
    onEnterCancelled: Gt,
    onBeforeLeave: Gt,
    onLeave: Gt,
    onAfterLeave: Gt,
    onLeaveCancelled: Gt,
    onBeforeAppear: Gt,
    onAppear: Gt,
    onAfterAppear: Gt,
    onAppearCancelled: Gt
}
  , M0 = {
    name: "BaseTransition",
    props: Op,
    setup(e, {slots: t}) {
        const n = vn()
          , r = P0();
        return ()=>{
            const i = t.default && Rp(t.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const d of i)
                    if (d.type !== Rt) {
                        o = d;
                        break
                    }
            }
            const s = Ne(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Ca(o);
            const l = nf(o);
            if (!l)
                return Ca(o);
            const c = _l(l, s, r, n);
            As(l, c);
            const u = n.subTree
              , f = u && nf(u);
            if (f && f.type !== Rt && !un(l, f)) {
                const d = _l(f, s, r, n);
                if (As(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ca(o);
                a === "in-out" && l.type !== Rt && (d.delayLeave = (m,_,b)=>{
                    const S = Cp(r, f);
                    S[String(f.key)] = f,
                    m[sr] = ()=>{
                        _(),
                        m[sr] = void 0,
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
  , D0 = M0;
function Cp(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function _l(e, t, n, r) {
    const {appear: i, mode: o, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: b, onAppear: S, onAfterAppear: g, onAppearCancelled: E} = t
      , p = String(e.key)
      , y = Cp(n, e)
      , T = (O,C)=>{
        O && nn(O, r, 9, C)
    }
      , A = (O,C)=>{
        const D = C[1];
        T(O, C),
        fe(O) ? O.every(x=>x.length <= 1) && D() : O.length <= 1 && D()
    }
      , L = {
        mode: o,
        persisted: s,
        beforeEnter(O) {
            let C = a;
            if (!n.isMounted)
                if (i)
                    C = b || a;
                else
                    return;
            O[sr] && O[sr](!0);
            const D = y[p];
            D && un(e, D) && D.el[sr] && D.el[sr](),
            T(C, [O])
        },
        enter(O) {
            let C = l
              , D = c
              , x = u;
            if (!n.isMounted)
                if (i)
                    C = S || l,
                    D = g || c,
                    x = E || u;
                else
                    return;
            let U = !1;
            const Z = O[Zo] = W=>{
                U || (U = !0,
                W ? T(x, [O]) : T(D, [O]),
                L.delayedLeave && L.delayedLeave(),
                O[Zo] = void 0)
            }
            ;
            C ? A(C, [O, Z]) : Z()
        },
        leave(O, C) {
            const D = String(e.key);
            if (O[Zo] && O[Zo](!0),
            n.isUnmounting)
                return C();
            T(f, [O]);
            let x = !1;
            const U = O[sr] = Z=>{
                x || (x = !0,
                C(),
                Z ? T(_, [O]) : T(m, [O]),
                O[sr] = void 0,
                y[D] === e && delete y[D])
            }
            ;
            y[D] = e,
            d ? A(d, [O, U]) : U()
        },
        clone(O) {
            return _l(O, t, n, r)
        }
    };
    return L
}
function Ca(e) {
    if ($s(e))
        return e = qn(e),
        e.children = null,
        e
}
function nf(e) {
    return $s(e) ? e.children ? e.children[0] : void 0 : e
}
function As(e, t) {
    e.shapeFlag & 6 && e.component ? As(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Rp(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === pt ? (s.patchFlag & 128 && i++,
        r = r.concat(Rp(s.children, t, a))) : (t || s.type !== Rt) && r.push(a != null ? qn(s, {
            key: a
        }) : s)
    }
    if (i > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Ue(e, t) {
    return ye(e) ? gt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Hr = e=>!!e.type.__asyncLoader
  , $s = e=>e.type.__isKeepAlive
  , N0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = vn()
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
            St(()=>{
                L.isDeactivated = !1,
                L.a && ci(L.a);
                const O = E.props && E.props.onVnodeMounted;
                O && Nt(O, L.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            c(E, d, null, 1, a),
            St(()=>{
                p.da && ci(p.da);
                const y = E.props && E.props.onVnodeUnmounted;
                y && Nt(y, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Ra(E),
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
            !s || !un(p, s) ? m(p) : s && Ra(s),
            i.delete(E),
            o.delete(E)
        }
        He(()=>[e.include, e.exclude], ([E,p])=>{
            E && _(y=>Fi(E, y)),
            p && _(y=>!Fi(p, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let S = null;
        const g = ()=>{
            S != null && i.set(S, Ia(n.subTree))
        }
        ;
        return It(g),
        Jc(g),
        yn(()=>{
            i.forEach(E=>{
                const {subTree: p, suspense: y} = n
                  , T = Ia(p);
                if (E.type === T.type && E.key === T.key) {
                    Ra(T);
                    const A = T.component.da;
                    A && St(A, y);
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
            if (!yi(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
                return s = null,
                p;
            let y = Ia(p);
            const T = y.type
              , A = Cl(Hr(y) ? y.type.__asyncResolved || {} : T)
              , {include: L, exclude: O, max: C} = e;
            if (L && (!A || !Fi(L, A)) || O && A && Fi(O, A))
                return s = y,
                p;
            const D = y.key == null ? T : y.key
              , x = i.get(D);
            return y.el && (y = qn(y),
            p.shapeFlag & 128 && (p.ssContent = y)),
            S = D,
            x ? (y.el = x.el,
            y.component = x.component,
            y.transition && As(y, y.transition),
            y.shapeFlag |= 512,
            o.delete(D),
            o.add(D)) : (o.add(D),
            C && o.size > parseInt(C, 10) && b(o.values().next().value)),
            y.shapeFlag |= 256,
            s = y,
            kp(p.type) ? p : y
        }
    }
}
  , V0 = N0;
function Fi(e, t) {
    return fe(e) ? e.some(n=>Fi(n, t)) : it(e) ? e.split(",").includes(t) : Av(e) ? e.test(t) : !1
}
function Ip(e, t) {
    Mp(e, "a", t)
}
function Pp(e, t) {
    Mp(e, "da", t)
}
function Mp(e, t, n=_t) {
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
    if (ea(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            $s(i.parent.vnode) && U0(r, t, n, i),
            i = i.parent
    }
}
function U0(e, t, n, r) {
    const i = ea(t, e, r, !0);
    Ci(()=>{
        Oc(r[t], i)
    }
    , n)
}
function Ra(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Ia(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function ea(e, t, n=_t, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            Qr();
            const a = Gr(n)
              , l = nn(t, n, e, s);
            return a(),
            Xr(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const Wn = e=>(t,n=_t)=>(!ra || e === "sp") && ea(e, (...r)=>t(...r), n)
  , B0 = Wn("bm")
  , It = Wn("m")
  , F0 = Wn("bu")
  , Jc = Wn("u")
  , yn = Wn("bum")
  , Ci = Wn("um")
  , x0 = Wn("sp")
  , H0 = Wn("rtg")
  , j0 = Wn("rtc");
function Dp(e, t=_t) {
    ea("ec", e, t)
}
function K0(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (fe(e) || it(e)) {
        i = new Array(e.length);
        for (let s = 0, a = e.length; s < a; s++)
            i[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o && o[s])
    } else if (tt(e))
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
function br(e, t, n={}, r, i) {
    if (ht.isCE || ht.parent && Hr(ht.parent) && ht.parent.isCE)
        return t !== "default" && (n.name = t),
        Ze("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    me();
    const s = o && Np(o(n))
      , a = vt(pt, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function Np(e) {
    return e.some(t=>yi(t) ? !(t.type === Rt || t.type === pt && !Np(t.children)) : !0) ? e : null
}
const bl = e=>e ? Xp(e) ? ia(e) || e.proxy : bl(e.parent) : null
  , ji = gt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>bl(e.parent),
    $root: e=>bl(e.root),
    $emit: e=>e.emit,
    $options: e=>zc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        Hc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Yt.bind(e.proxy)),
    $watch: e=>I0.bind(e)
})
  , Pa = (e,t)=>e !== nt && !e.__isScriptSetup && je(e, t)
  , Y0 = {
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
                if (Pa(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== nt && je(i, t))
                    return s[t] = 2,
                    i[t];
                if ((c = e.propsOptions[0]) && je(c, t))
                    return s[t] = 3,
                    o[t];
                if (n !== nt && je(n, t))
                    return s[t] = 4,
                    n[t];
                Tl && (s[t] = 0)
            }
        }
        const u = ji[t];
        let f, d;
        if (u)
            return t === "$attrs" && Ft(e, "get", t),
            u(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== nt && je(n, t))
            return s[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        je(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return Pa(i, t) ? (i[t] = n,
        !0) : r !== nt && je(r, t) ? (r[t] = n,
        !0) : je(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let a;
        return !!n[s] || e !== nt && je(e, s) || Pa(t, s) || (a = o[0]) && je(a, s) || je(r, s) || je(ji, s) || je(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : je(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function q0() {
    return W0().slots
}
function W0() {
    const e = vn();
    return e.setupContext || (e.setupContext = $p(e))
}
function El(e) {
    return fe(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function ta(e, t) {
    const n = El(e);
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
function G0(e) {
    const t = vn();
    let n = e();
    return Ll(),
    Cc(n) && (n = n.catch(r=>{
        throw Gr(t),
        r
    }
    )),
    [n, ()=>Gr(t)]
}
let Tl = !0;
function J0(e) {
    const t = zc(e)
      , n = e.proxy
      , r = e.ctx;
    Tl = !1,
    t.beforeCreate && rf(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: a, provide: l, inject: c, created: u, beforeMount: f, mounted: d, beforeUpdate: m, updated: _, activated: b, deactivated: S, beforeDestroy: g, beforeUnmount: E, destroyed: p, unmounted: y, render: T, renderTracked: A, renderTriggered: L, errorCaptured: O, serverPrefetch: C, expose: D, inheritAttrs: x, components: U, directives: Z, filters: W} = t;
    if (c && z0(c, r, null),
    s)
        for (const Y in s) {
            const B = s[Y];
            ye(B) && (r[Y] = B.bind(n))
        }
    if (i) {
        const Y = i.call(n, n);
        tt(Y) && (e.data = Tt(Y))
    }
    if (Tl = !0,
    o)
        for (const Y in o) {
            const B = o[Y]
              , ae = ye(B) ? B.bind(n, n) : ye(B.get) ? B.get.bind(n, n) : $t
              , j = !ye(B) && ye(B.set) ? B.set.bind(n) : $t
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
            Vp(a[Y], r, n, Y);
    if (l) {
        const Y = ye(l) ? l.call(n) : l;
        Reflect.ownKeys(Y).forEach(B=>{
            jr(B, Y[B])
        }
        )
    }
    u && rf(u, e, "c");
    function N(Y, B) {
        fe(B) ? B.forEach(ae=>Y(ae.bind(n))) : B && Y(B.bind(n))
    }
    if (N(B0, f),
    N(It, d),
    N(F0, m),
    N(Jc, _),
    N(Ip, b),
    N(Pp, S),
    N(Dp, O),
    N(j0, A),
    N(H0, L),
    N(yn, E),
    N(Ci, y),
    N(x0, C),
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
    T && e.render === $t && (e.render = T),
    x != null && (e.inheritAttrs = x),
    U && (e.components = U),
    Z && (e.directives = Z)
}
function z0(e, t, n=$t) {
    fe(e) && (e = Sl(e));
    for (const r in e) {
        const i = e[r];
        let o;
        tt(i) ? "default"in i ? o = Et(i.from || r, i.default, !0) : o = Et(i.from || r) : o = Et(i),
        at(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: s=>o.value = s
        }) : t[r] = o
    }
}
function rf(e, t, n) {
    nn(fe(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Vp(e, t, n, r) {
    const i = r.includes(".") ? Lp(n, r) : ()=>n[r];
    if (it(e)) {
        const o = t[e];
        ye(o) && He(i, o)
    } else if (ye(e))
        He(i, e.bind(n));
    else if (tt(e))
        if (fe(e))
            e.forEach(o=>Vp(o, t, n, r));
        else {
            const o = ye(e.handler) ? e.handler.bind(n) : t[e.handler];
            ye(o) && He(i, o, e)
        }
}
function zc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach(c=>ks(l, c, s, !0)),
    ks(l, t, s)),
    tt(t) && o.set(t, l),
    l
}
function ks(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && ks(e, o, n, !0),
    i && i.forEach(s=>ks(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = Q0[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const Q0 = {
    data: of,
    props: sf,
    emits: sf,
    methods: xi,
    computed: xi,
    beforeCreate: Lt,
    created: Lt,
    beforeMount: Lt,
    mounted: Lt,
    beforeUpdate: Lt,
    updated: Lt,
    beforeDestroy: Lt,
    beforeUnmount: Lt,
    destroyed: Lt,
    unmounted: Lt,
    activated: Lt,
    deactivated: Lt,
    errorCaptured: Lt,
    serverPrefetch: Lt,
    components: xi,
    directives: xi,
    watch: Z0,
    provide: of,
    inject: X0
};
function of(e, t) {
    return t ? e ? function() {
        return gt(ye(e) ? e.call(this, this) : e, ye(t) ? t.call(this, this) : t)
    }
    : t : e
}
function X0(e, t) {
    return xi(Sl(e), Sl(t))
}
function Sl(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Lt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function xi(e, t) {
    return e ? gt(Object.create(null), e, t) : t
}
function sf(e, t) {
    return e ? fe(e) && fe(t) ? [...new Set([...e, ...t])] : gt(Object.create(null), El(e), El(t ?? {})) : t
}
function Z0(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = gt(Object.create(null), e);
    for (const r in t)
        n[r] = Lt(e[r], t[r]);
    return n
}
function Up() {
    return {
        app: null,
        config: {
            isNativeTag: Tv,
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
let $0 = 0;
function e_(e, t) {
    return function(r, i=null) {
        ye(r) || (r = gt({}, r)),
        i != null && !tt(i) && (i = null);
        const o = Up()
          , s = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: $0++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: em,
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
                    const d = Ze(r, i);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(d, c) : e(d, c, f),
                    a = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    ia(d.component) || d.component.proxy
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
                const u = hi;
                hi = l;
                try {
                    return c()
                } finally {
                    hi = u
                }
            }
        };
        return l
    }
}
let hi = null;
function jr(e, t) {
    if (_t) {
        let n = _t.provides;
        const r = _t.parent && _t.parent.provides;
        r === n && (n = _t.provides = Object.create(r)),
        n[e] = t
    }
}
function Et(e, t, n=!1) {
    const r = _t || ht;
    if (r || hi) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : hi._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && ye(t) ? t.call(r && r.proxy) : t
    }
}
function Qc() {
    return !!(_t || ht || hi)
}
function t_(e, t, n, r=!1) {
    const i = {}
      , o = {};
    _s(o, na, 1),
    e.propsDefaults = Object.create(null),
    Bp(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Oi(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function n_(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , a = Ne(i)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Xs(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (je(o, d))
                        m !== o[d] && (o[d] = m,
                        c = !0);
                    else {
                        const _ = Mn(d);
                        i[_] = Al(l, a, _, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    c = !0)
            }
        }
    } else {
        Bp(e, t, i, o) && (c = !0);
        let u;
        for (const f in a)
            (!t || !je(t, f) && ((u = zr(f)) === f || !je(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (i[f] = Al(l, a, f, void 0, e, !0)) : delete i[f]);
        if (o !== a)
            for (const f in o)
                (!t || !je(t, f)) && (delete o[f],
                c = !0)
    }
    c && Yn(e, "set", "$attrs")
}
function Bp(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (li(l))
                continue;
            const c = t[l];
            let u;
            i && je(i, u = Mn(l)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Xs(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            s = !0)
        }
    if (o) {
        const l = Ne(n)
          , c = a || nt;
        for (let u = 0; u < o.length; u++) {
            const f = o[u];
            n[f] = Al(i, l, f, c[f], e, !je(c, f))
        }
    }
    return s
}
function Al(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const a = je(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && ye(l)) {
                const {propsDefaults: c} = i;
                if (n in c)
                    r = c[n];
                else {
                    const u = Gr(i);
                    r = c[n] = l.call(null, t),
                    u()
                }
            } else
                r = l
        }
        s[0] && (o && !a ? r = !1 : s[1] && (r === "" || r === zr(n)) && (r = !0))
    }
    return r
}
function Fp(e, t, n=!1) {
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
            const [d,m] = Fp(f, t, !0);
            gt(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!o && !l)
        return tt(e) && r.set(e, si),
        si;
    if (fe(o))
        for (let u = 0; u < o.length; u++) {
            const f = Mn(o[u]);
            af(f) && (s[f] = nt)
        }
    else if (o)
        for (const u in o) {
            const f = Mn(u);
            if (af(f)) {
                const d = o[u]
                  , m = s[f] = fe(d) || ye(d) ? {
                    type: d
                } : gt({}, d);
                if (m) {
                    const _ = uf(Boolean, m.type)
                      , b = uf(String, m.type);
                    m[0] = _ > -1,
                    m[1] = b < 0 || _ < b,
                    (_ > -1 || je(m, "default")) && a.push(f)
                }
            }
        }
    const c = [s, a];
    return tt(e) && r.set(e, c),
    c
}
function af(e) {
    return e[0] !== "$" && !li(e)
}
function lf(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function cf(e, t) {
    return lf(e) === lf(t)
}
function uf(e, t) {
    return fe(t) ? t.findIndex(n=>cf(n, e)) : ye(t) && cf(t, e) ? 0 : -1
}
const xp = e=>e[0] === "_" || e === "$stable"
  , Xc = e=>fe(e) ? e.map(Qt) : [Qt(e)]
  , r_ = (e,t,n)=>{
    if (t._n)
        return t;
    const r = on((...i)=>Xc(t(...i)), n);
    return r._c = !1,
    r
}
  , Hp = (e,t,n)=>{
    const r = e._ctx;
    for (const i in e) {
        if (xp(i))
            continue;
        const o = e[i];
        if (ye(o))
            t[i] = r_(i, o, r);
        else if (o != null) {
            const s = Xc(o);
            t[i] = ()=>s
        }
    }
}
  , jp = (e,t)=>{
    const n = Xc(t);
    e.slots.default = ()=>n
}
  , i_ = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Ne(t),
        _s(t, "_", n)) : Hp(t, e.slots = {})
    } else
        e.slots = {},
        t && jp(e, t);
    _s(e.slots, na, 1)
}
  , o_ = (e,t,n)=>{
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = nt;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (gt(i, t),
        !n && a === 1 && delete i._) : (o = !t.$stable,
        Hp(t, i)),
        s = t
    } else
        t && (jp(e, t),
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
    if (Hr(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? ia(r.component) || r.component.proxy : r.el
      , s = i ? null : o
      , {i: a, r: l} = e
      , c = t && t.r
      , u = a.refs === nt ? a.refs = {} : a.refs
      , f = a.setupState;
    if (c != null && c !== l && (it(c) ? (u[c] = null,
    je(f, c) && (f[c] = null)) : at(c) && (c.value = null)),
    ye(l))
        gr(l, a, 12, [s, u]);
    else {
        const d = it(l)
          , m = at(l);
        if (d || m) {
            const _ = ()=>{
                if (e.f) {
                    const b = d ? je(f, l) ? f[l] : u[l] : l.value;
                    i ? fe(b) && Oc(b, o) : fe(b) ? b.includes(o) || b.push(o) : d ? (u[l] = [o],
                    je(f, l) && (f[l] = u[l])) : (l.value = [o],
                    e.k && (u[e.k] = l.value))
                } else
                    d ? (u[l] = s,
                    je(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (u[e.k] = s))
            }
            ;
            s ? (_.id = -1,
            St(_, n)) : _()
        }
    }
}
let Qn = !1;
const s_ = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , a_ = e=>e.namespaceURI.includes("MathML")
  , $o = e=>{
    if (s_(e))
        return "svg";
    if (a_(e))
        return "mathml"
}
  , es = e=>e.nodeType === 8;
function l_(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: a, insert: l, createComment: c}} = e
      , u = (p,y)=>{
        if (!y.hasChildNodes()) {
            n(null, p, y),
            Ts(),
            y._vnode = p;
            return
        }
        Qn = !1,
        f(y.firstChild, p, null, null, null),
        Ts(),
        y._vnode = p,
        Qn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,y,T,A,L,O=!1)=>{
        const C = es(p) && p.data === "["
          , D = ()=>b(p, y, T, A, L, C)
          , {type: x, ref: U, shapeFlag: Z, patchFlag: W} = y;
        let K = p.nodeType;
        y.el = p,
        W === -2 && (O = !1,
        y.dynamicChildren = null);
        let N = null;
        switch (x) {
        case Wr:
            K !== 3 ? y.children === "" ? (l(y.el = i(""), s(p), p),
            N = p) : N = D() : (p.data !== y.children && (Qn = !0,
            p.data = y.children),
            N = o(p));
            break;
        case Rt:
            E(p) ? (N = o(p),
            g(y.el = p.content.firstChild, p, T)) : K !== 8 || C ? N = D() : N = o(p);
            break;
        case Yi:
            if (C && (p = o(p),
            K = p.nodeType),
            K === 1 || K === 3) {
                N = p;
                const Y = !y.children.length;
                for (let B = 0; B < y.staticCount; B++)
                    Y && (y.children += N.nodeType === 1 ? N.outerHTML : N.data),
                    B === y.staticCount - 1 && (y.anchor = N),
                    N = o(N);
                return C ? o(N) : N
            } else
                D();
            break;
        case pt:
            C ? N = _(p, y, T, A, L, O) : N = D();
            break;
        default:
            if (Z & 1)
                (K !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? N = D() : N = d(p, y, T, A, L, O);
            else if (Z & 6) {
                y.slotScopeIds = L;
                const Y = s(p);
                if (C ? N = S(p) : es(p) && p.data === "teleport start" ? N = S(p, p.data, "teleport end") : N = o(p),
                t(y, Y, null, T, A, $o(Y), O),
                Hr(y)) {
                    let B;
                    C ? (B = Ze(pt),
                    B.anchor = N ? N.previousSibling : Y.lastChild) : B = p.nodeType === 3 ? Qp("") : Ze("div"),
                    B.el = p,
                    y.component.subTree = B
                }
            } else
                Z & 64 ? K !== 8 ? N = D() : N = y.type.hydrate(p, y, T, A, L, O, e, m) : Z & 128 && (N = y.type.hydrate(p, y, T, A, $o(s(p)), L, O, e, f))
        }
        return U != null && ws(U, null, A, y),
        N
    }
      , d = (p,y,T,A,L,O)=>{
        O = O || !!y.dynamicChildren;
        const {type: C, props: D, patchFlag: x, shapeFlag: U, dirs: Z, transition: W} = y
          , K = C === "input" || C === "option";
        if (K || x !== -1) {
            Z && An(y, null, T, "created");
            let N = !1;
            if (E(p)) {
                N = Yp(A, W) && T && T.vnode.props && T.vnode.props.appear;
                const B = p.content.firstChild;
                N && W.beforeEnter(B),
                g(B, p, T),
                y.el = p = B
            }
            if (U & 16 && !(D && (D.innerHTML || D.textContent))) {
                let B = m(p.firstChild, y, p, T, A, L, O);
                for (; B; ) {
                    Qn = !0;
                    const ae = B;
                    B = B.nextSibling,
                    a(ae)
                }
            } else
                U & 8 && p.textContent !== y.children && (Qn = !0,
                p.textContent = y.children);
            if (D)
                if (K || !O || x & 48)
                    for (const B in D)
                        (K && (B.endsWith("value") || B === "indeterminate") || Lo(B) && !li(B) || B[0] === ".") && r(p, B, null, D[B], void 0, void 0, T);
                else
                    D.onClick && r(p, "onClick", null, D.onClick, void 0, void 0, T);
            let Y;
            (Y = D && D.onVnodeBeforeMount) && Nt(Y, T, y),
            Z && An(y, null, T, "beforeMount"),
            ((Y = D && D.onVnodeMounted) || Z || N) && wp(()=>{
                Y && Nt(Y, T, y),
                N && W.enter(p),
                Z && An(y, null, T, "mounted")
            }
            , A)
        }
        return p.nextSibling
    }
      , m = (p,y,T,A,L,O,C)=>{
        C = C || !!y.dynamicChildren;
        const D = y.children
          , x = D.length;
        for (let U = 0; U < x; U++) {
            const Z = C ? D[U] : D[U] = Qt(D[U]);
            if (p)
                p = f(p, Z, A, L, O, C);
            else {
                if (Z.type === Wr && !Z.children)
                    continue;
                Qn = !0,
                n(null, Z, T, null, A, L, $o(T), O)
            }
        }
        return p
    }
      , _ = (p,y,T,A,L,O)=>{
        const {slotScopeIds: C} = y;
        C && (L = L ? L.concat(C) : C);
        const D = s(p)
          , x = m(o(p), y, D, T, A, L, O);
        return x && es(x) && x.data === "]" ? o(y.anchor = x) : (Qn = !0,
        l(y.anchor = c("]"), D, x),
        x)
    }
      , b = (p,y,T,A,L,O)=>{
        if (Qn = !0,
        y.el = null,
        O) {
            const x = S(p);
            for (; ; ) {
                const U = o(p);
                if (U && U !== x)
                    a(U);
                else
                    break
            }
        }
        const C = o(p)
          , D = s(p);
        return a(p),
        n(null, y, D, C, T, A, $o(D), L),
        C
    }
      , S = (p,y="[",T="]")=>{
        let A = 0;
        for (; p; )
            if (p = o(p),
            p && es(p) && (p.data === y && A++,
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
const St = wp;
function c_(e) {
    return Kp(e)
}
function u_(e) {
    return Kp(e, l_)
}
function Kp(e, t) {
    const n = Zh();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m=$t, insertStaticContent: _} = e
      , b = (h,v,w,R=null,V=null,q=null,X=void 0,z=null,ee=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !un(h, v) && (R = H(h),
        _e(h, V, q, !0),
        h = null),
        v.patchFlag === -2 && (ee = !1,
        v.dynamicChildren = null);
        const {type: J, ref: oe, shapeFlag: ie} = v;
        switch (J) {
        case Wr:
            S(h, v, w, R);
            break;
        case Rt:
            g(h, v, w, R);
            break;
        case Yi:
            h == null && E(v, w, R, X);
            break;
        case pt:
            U(h, v, w, R, V, q, X, z, ee);
            break;
        default:
            ie & 1 ? T(h, v, w, R, V, q, X, z, ee) : ie & 6 ? Z(h, v, w, R, V, q, X, z, ee) : (ie & 64 || ie & 128) && J.process(h, v, w, R, V, q, X, z, ee, $)
        }
        oe != null && V && ws(oe, h && h.ref, q, v || h, !v)
    }
      , S = (h,v,w,R)=>{
        if (h == null)
            r(v.el = a(v.children), w, R);
        else {
            const V = v.el = h.el;
            v.children !== h.children && c(V, v.children)
        }
    }
      , g = (h,v,w,R)=>{
        h == null ? r(v.el = l(v.children || ""), w, R) : v.el = h.el
    }
      , E = (h,v,w,R)=>{
        [h.el,h.anchor] = _(h.children, v, w, R, h.el, h.anchor)
    }
      , p = ({el: h, anchor: v},w,R)=>{
        let V;
        for (; h && h !== v; )
            V = d(h),
            r(h, w, R),
            h = V;
        r(v, w, R)
    }
      , y = ({el: h, anchor: v})=>{
        let w;
        for (; h && h !== v; )
            w = d(h),
            i(h),
            h = w;
        i(v)
    }
      , T = (h,v,w,R,V,q,X,z,ee)=>{
        v.type === "svg" ? X = "svg" : v.type === "math" && (X = "mathml"),
        h == null ? A(v, w, R, V, q, X, z, ee) : C(h, v, V, q, X, z, ee)
    }
      , A = (h,v,w,R,V,q,X,z)=>{
        let ee, J;
        const {props: oe, shapeFlag: ie, transition: I, dirs: F} = h;
        if (ee = h.el = s(h.type, q, oe && oe.is, oe),
        ie & 8 ? u(ee, h.children) : ie & 16 && O(h.children, ee, null, R, V, Ma(h, q), X, z),
        F && An(h, null, R, "created"),
        L(ee, h, h.scopeId, X, R),
        oe) {
            for (const he in oe)
                he !== "value" && !li(he) && o(ee, he, null, oe[he], q, h.children, R, V, $e);
            "value"in oe && o(ee, "value", null, oe.value, q),
            (J = oe.onVnodeBeforeMount) && Nt(J, R, h)
        }
        F && An(h, null, R, "beforeMount");
        const se = Yp(V, I);
        se && I.beforeEnter(ee),
        r(ee, v, w),
        ((J = oe && oe.onVnodeMounted) || se || F) && St(()=>{
            J && Nt(J, R, h),
            se && I.enter(ee),
            F && An(h, null, R, "mounted")
        }
        , V)
    }
      , L = (h,v,w,R,V)=>{
        if (w && m(h, w),
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
      , O = (h,v,w,R,V,q,X,z,ee=0)=>{
        for (let J = ee; J < h.length; J++) {
            const oe = h[J] = z ? ar(h[J]) : Qt(h[J]);
            b(null, oe, v, w, R, V, q, X, z)
        }
    }
      , C = (h,v,w,R,V,q,X)=>{
        const z = v.el = h.el;
        let {patchFlag: ee, dynamicChildren: J, dirs: oe} = v;
        ee |= h.patchFlag & 16;
        const ie = h.props || nt
          , I = v.props || nt;
        let F;
        if (w && wr(w, !1),
        (F = I.onVnodeBeforeUpdate) && Nt(F, w, v, h),
        oe && An(v, h, w, "beforeUpdate"),
        w && wr(w, !0),
        J ? D(h.dynamicChildren, J, z, w, R, Ma(v, V), q) : X || B(h, v, z, null, w, R, Ma(v, V), q, !1),
        ee > 0) {
            if (ee & 16)
                x(z, v, ie, I, w, R, V);
            else if (ee & 2 && ie.class !== I.class && o(z, "class", null, I.class, V),
            ee & 4 && o(z, "style", ie.style, I.style, V),
            ee & 8) {
                const se = v.dynamicProps;
                for (let he = 0; he < se.length; he++) {
                    const qe = se[he]
                      , ot = ie[qe]
                      , yt = I[qe];
                    (yt !== ot || qe === "value") && o(z, qe, ot, yt, V, h.children, w, R, $e)
                }
            }
            ee & 1 && h.children !== v.children && u(z, v.children)
        } else
            !X && J == null && x(z, v, ie, I, w, R, V);
        ((F = I.onVnodeUpdated) || oe) && St(()=>{
            F && Nt(F, w, v, h),
            oe && An(v, h, w, "updated")
        }
        , R)
    }
      , D = (h,v,w,R,V,q,X)=>{
        for (let z = 0; z < v.length; z++) {
            const ee = h[z]
              , J = v[z]
              , oe = ee.el && (ee.type === pt || !un(ee, J) || ee.shapeFlag & 70) ? f(ee.el) : w;
            b(ee, J, oe, null, R, V, q, X, !0)
        }
    }
      , x = (h,v,w,R,V,q,X)=>{
        if (w !== R) {
            if (w !== nt)
                for (const z in w)
                    !li(z) && !(z in R) && o(h, z, w[z], null, X, v.children, V, q, $e);
            for (const z in R) {
                if (li(z))
                    continue;
                const ee = R[z]
                  , J = w[z];
                ee !== J && z !== "value" && o(h, z, J, ee, X, v.children, V, q, $e)
            }
            "value"in R && o(h, "value", w.value, R.value, X)
        }
    }
      , U = (h,v,w,R,V,q,X,z,ee)=>{
        const J = v.el = h ? h.el : a("")
          , oe = v.anchor = h ? h.anchor : a("");
        let {patchFlag: ie, dynamicChildren: I, slotScopeIds: F} = v;
        F && (z = z ? z.concat(F) : F),
        h == null ? (r(J, w, R),
        r(oe, w, R),
        O(v.children || [], w, oe, V, q, X, z, ee)) : ie > 0 && ie & 64 && I && h.dynamicChildren ? (D(h.dynamicChildren, I, w, V, q, X, z),
        (v.key != null || V && v === V.subTree) && Zc(h, v, !0)) : B(h, v, w, oe, V, q, X, z, ee)
    }
      , Z = (h,v,w,R,V,q,X,z,ee)=>{
        v.slotScopeIds = z,
        h == null ? v.shapeFlag & 512 ? V.ctx.activate(v, w, R, X, ee) : W(v, w, R, V, q, X, ee) : K(h, v, ee)
    }
      , W = (h,v,w,R,V,q,X)=>{
        const z = h.component = __(h, R, V);
        if ($s(h) && (z.ctx.renderer = $),
        b_(z),
        z.asyncDep) {
            if (V && V.registerDep(z, N),
            !h.el) {
                const ee = z.subTree = Ze(Rt);
                g(null, ee, v, w)
            }
        } else
            N(z, h, v, w, V, q, X)
    }
      , K = (h,v,w)=>{
        const R = v.component = h.component;
        if (b0(h, v, w))
            if (R.asyncDep && !R.asyncResolved) {
                Y(R, v, w);
                return
            } else
                R.next = v,
                f0(R.update),
                R.effect.dirty = !0,
                R.update();
        else
            v.el = h.el,
            R.vnode = v
    }
      , N = (h,v,w,R,V,q,X)=>{
        const z = ()=>{
            if (h.isMounted) {
                let {next: oe, bu: ie, u: I, parent: F, vnode: se} = h;
                {
                    const Jn = qp(h);
                    if (Jn) {
                        oe && (oe.el = se.el,
                        Y(h, oe, X)),
                        Jn.asyncDep.then(()=>{
                            h.isUnmounted || z()
                        }
                        );
                        return
                    }
                }
                let he = oe, qe;
                wr(h, !1),
                oe ? (oe.el = se.el,
                Y(h, oe, X)) : oe = se,
                ie && ci(ie),
                (qe = oe.props && oe.props.onVnodeBeforeUpdate) && Nt(qe, F, oe, se),
                wr(h, !0);
                const ot = Oa(h)
                  , yt = h.subTree;
                h.subTree = ot,
                b(yt, ot, f(yt.el), H(yt), h, V, q),
                oe.el = ot.el,
                he === null && jc(h, ot.el),
                I && St(I, V),
                (qe = oe.props && oe.props.onVnodeUpdated) && St(()=>Nt(qe, F, oe, se), V)
            } else {
                let oe;
                const {el: ie, props: I} = v
                  , {bm: F, m: se, parent: he} = h
                  , qe = Hr(v);
                if (wr(h, !1),
                F && ci(F),
                !qe && (oe = I && I.onVnodeBeforeMount) && Nt(oe, he, v),
                wr(h, !0),
                ie && Be) {
                    const ot = ()=>{
                        h.subTree = Oa(h),
                        Be(ie, h.subTree, h, V, null)
                    }
                    ;
                    qe ? v.type.__asyncLoader().then(()=>!h.isUnmounted && ot()) : ot()
                } else {
                    const ot = h.subTree = Oa(h);
                    b(null, ot, w, R, h, V, q),
                    v.el = ot.el
                }
                if (se && St(se, V),
                !qe && (oe = I && I.onVnodeMounted)) {
                    const ot = v;
                    St(()=>Nt(oe, he, ot), V)
                }
                (v.shapeFlag & 256 || he && Hr(he.vnode) && he.vnode.shapeFlag & 256) && h.a && St(h.a, V),
                h.isMounted = !0,
                v = w = R = null
            }
        }
          , ee = h.effect = new Ic(z,$t,()=>Hc(J),h.scope)
          , J = h.update = ()=>{
            ee.dirty && ee.run()
        }
        ;
        J.id = h.uid,
        wr(h, !0),
        J()
    }
      , Y = (h,v,w)=>{
        v.component = h;
        const R = h.vnode.props;
        h.vnode = v,
        h.next = null,
        n_(h, v.props, R, w),
        o_(h, v.children, w),
        Qr(),
        Zu(h),
        Xr()
    }
      , B = (h,v,w,R,V,q,X,z,ee=!1)=>{
        const J = h && h.children
          , oe = h ? h.shapeFlag : 0
          , ie = v.children
          , {patchFlag: I, shapeFlag: F} = v;
        if (I > 0) {
            if (I & 128) {
                j(J, ie, w, R, V, q, X, z, ee);
                return
            } else if (I & 256) {
                ae(J, ie, w, R, V, q, X, z, ee);
                return
            }
        }
        F & 8 ? (oe & 16 && $e(J, V, q),
        ie !== J && u(w, ie)) : oe & 16 ? F & 16 ? j(J, ie, w, R, V, q, X, z, ee) : $e(J, V, q, !0) : (oe & 8 && u(w, ""),
        F & 16 && O(ie, w, R, V, q, X, z, ee))
    }
      , ae = (h,v,w,R,V,q,X,z,ee)=>{
        h = h || si,
        v = v || si;
        const J = h.length
          , oe = v.length
          , ie = Math.min(J, oe);
        let I;
        for (I = 0; I < ie; I++) {
            const F = v[I] = ee ? ar(v[I]) : Qt(v[I]);
            b(h[I], F, w, null, V, q, X, z, ee)
        }
        J > oe ? $e(h, V, q, !0, !1, ie) : O(v, w, R, V, q, X, z, ee, ie)
    }
      , j = (h,v,w,R,V,q,X,z,ee)=>{
        let J = 0;
        const oe = v.length;
        let ie = h.length - 1
          , I = oe - 1;
        for (; J <= ie && J <= I; ) {
            const F = h[J]
              , se = v[J] = ee ? ar(v[J]) : Qt(v[J]);
            if (un(F, se))
                b(F, se, w, null, V, q, X, z, ee);
            else
                break;
            J++
        }
        for (; J <= ie && J <= I; ) {
            const F = h[ie]
              , se = v[I] = ee ? ar(v[I]) : Qt(v[I]);
            if (un(F, se))
                b(F, se, w, null, V, q, X, z, ee);
            else
                break;
            ie--,
            I--
        }
        if (J > ie) {
            if (J <= I) {
                const F = I + 1
                  , se = F < oe ? v[F].el : R;
                for (; J <= I; )
                    b(null, v[J] = ee ? ar(v[J]) : Qt(v[J]), w, se, V, q, X, z, ee),
                    J++
            }
        } else if (J > I)
            for (; J <= ie; )
                _e(h[J], V, q, !0),
                J++;
        else {
            const F = J
              , se = J
              , he = new Map;
            for (J = se; J <= I; J++) {
                const xt = v[J] = ee ? ar(v[J]) : Qt(v[J]);
                xt.key != null && he.set(xt.key, J)
            }
            let qe, ot = 0;
            const yt = I - se + 1;
            let Jn = !1
              , ka = 0;
            const Mi = new Array(yt);
            for (J = 0; J < yt; J++)
                Mi[J] = 0;
            for (J = F; J <= ie; J++) {
                const xt = h[J];
                if (ot >= yt) {
                    _e(xt, V, q, !0);
                    continue
                }
                let bn;
                if (xt.key != null)
                    bn = he.get(xt.key);
                else
                    for (qe = se; qe <= I; qe++)
                        if (Mi[qe - se] === 0 && un(xt, v[qe])) {
                            bn = qe;
                            break
                        }
                bn === void 0 ? _e(xt, V, q, !0) : (Mi[bn - se] = J + 1,
                bn >= ka ? ka = bn : Jn = !0,
                b(xt, v[bn], w, null, V, q, X, z, ee),
                ot++)
            }
            const ju = Jn ? f_(Mi) : si;
            for (qe = ju.length - 1,
            J = yt - 1; J >= 0; J--) {
                const xt = se + J
                  , bn = v[xt]
                  , Ku = xt + 1 < oe ? v[xt + 1].el : R;
                Mi[J] === 0 ? b(null, bn, w, Ku, V, q, X, z, ee) : Jn && (qe < 0 || J !== ju[qe] ? ce(bn, w, Ku, 2) : qe--)
            }
        }
    }
      , ce = (h,v,w,R,V=null)=>{
        const {el: q, type: X, transition: z, children: ee, shapeFlag: J} = h;
        if (J & 6) {
            ce(h.component.subTree, v, w, R);
            return
        }
        if (J & 128) {
            h.suspense.move(v, w, R);
            return
        }
        if (J & 64) {
            X.move(h, v, w, $);
            return
        }
        if (X === pt) {
            r(q, v, w);
            for (let ie = 0; ie < ee.length; ie++)
                ce(ee[ie], v, w, R);
            r(h.anchor, v, w);
            return
        }
        if (X === Yi) {
            p(h, v, w);
            return
        }
        if (R !== 2 && J & 1 && z)
            if (R === 0)
                z.beforeEnter(q),
                r(q, v, w),
                St(()=>z.enter(q), V);
            else {
                const {leave: ie, delayLeave: I, afterLeave: F} = z
                  , se = ()=>r(q, v, w)
                  , he = ()=>{
                    ie(q, ()=>{
                        se(),
                        F && F()
                    }
                    )
                }
                ;
                I ? I(q, se, he) : he()
            }
        else
            r(q, v, w)
    }
      , _e = (h,v,w,R=!1,V=!1)=>{
        const {type: q, props: X, ref: z, children: ee, dynamicChildren: J, shapeFlag: oe, patchFlag: ie, dirs: I} = h;
        if (z != null && ws(z, null, w, h, !0),
        oe & 256) {
            v.ctx.deactivate(h);
            return
        }
        const F = oe & 1 && I
          , se = !Hr(h);
        let he;
        if (se && (he = X && X.onVnodeBeforeUnmount) && Nt(he, v, h),
        oe & 6)
            lt(h.component, w, R);
        else {
            if (oe & 128) {
                h.suspense.unmount(w, R);
                return
            }
            F && An(h, null, v, "beforeUnmount"),
            oe & 64 ? h.type.remove(h, v, w, V, $, R) : J && (q !== pt || ie > 0 && ie & 64) ? $e(J, v, w, !1, !0) : (q === pt && ie & 384 || !V && oe & 16) && $e(ee, v, w),
            R && Ye(h)
        }
        (se && (he = X && X.onVnodeUnmounted) || F) && St(()=>{
            he && Nt(he, v, h),
            F && An(h, null, v, "unmounted")
        }
        , w)
    }
      , Ye = h=>{
        const {type: v, el: w, anchor: R, transition: V} = h;
        if (v === pt) {
            ze(w, R);
            return
        }
        if (v === Yi) {
            y(h);
            return
        }
        const q = ()=>{
            i(w),
            V && !V.persisted && V.afterLeave && V.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && V && !V.persisted) {
            const {leave: X, delayLeave: z} = V
              , ee = ()=>X(w, q);
            z ? z(h.el, q, ee) : ee()
        } else
            q()
    }
      , ze = (h,v)=>{
        let w;
        for (; h !== v; )
            w = d(h),
            i(h),
            h = w;
        i(v)
    }
      , lt = (h,v,w)=>{
        const {bum: R, scope: V, update: q, subTree: X, um: z} = h;
        R && ci(R),
        V.stop(),
        q && (q.active = !1,
        _e(X, h, v, w)),
        z && St(z, v),
        St(()=>{
            h.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , $e = (h,v,w,R=!1,V=!1,q=0)=>{
        for (let X = q; X < h.length; X++)
            _e(h[X], v, w, R, V)
    }
      , H = h=>h.shapeFlag & 6 ? H(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let te = !1;
    const Q = (h,v,w)=>{
        h == null ? v._vnode && _e(v._vnode, null, null, !0) : b(v._vnode || null, h, v, null, null, null, w),
        te || (te = !0,
        Zu(),
        Ts(),
        te = !1),
        v._vnode = h
    }
      , $ = {
        p: b,
        um: _e,
        m: ce,
        r: Ye,
        mt: W,
        mc: O,
        pc: B,
        pbc: D,
        n: H,
        o: e
    };
    let ve, Be;
    return t && ([ve,Be] = t($)),
    {
        render: Q,
        hydrate: ve,
        createApp: e_(Q, ve)
    }
}
function Ma({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function wr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Yp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Zc(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (fe(r) && fe(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let a = i[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ar(i[o]),
            a.el = s.el),
            n || Zc(s, a)),
            a.type === Wr && (a.el = s.el)
        }
}
function f_(e) {
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
function qp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : qp(t)
}
const d_ = e=>e.__isTeleport
  , Ki = e=>e && (e.disabled || e.disabled === "")
  , ff = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , df = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , kl = (e,t)=>{
    const n = e && e.to;
    return it(n) ? t ? t(n) : null : n
}
  , h_ = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, c) {
        const {mc: u, pc: f, pbc: d, o: {insert: m, querySelector: _, createText: b, createComment: S}} = c
          , g = Ki(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const T = t.el = b("")
              , A = t.anchor = b("");
            m(T, n, r),
            m(A, n, r);
            const L = t.target = kl(t.props, _)
              , O = t.targetAnchor = b("");
            L && (m(O, L),
            s === "svg" || ff(L) ? s = "svg" : (s === "mathml" || df(L)) && (s = "mathml"));
            const C = (D,x)=>{
                E & 16 && u(p, D, x, i, o, s, a, l)
            }
            ;
            g ? C(n, A) : L && C(L, O)
        } else {
            t.el = e.el;
            const T = t.anchor = e.anchor
              , A = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , O = Ki(e.props)
              , C = O ? n : A
              , D = O ? T : L;
            if (s === "svg" || ff(A) ? s = "svg" : (s === "mathml" || df(A)) && (s = "mathml"),
            y ? (d(e.dynamicChildren, y, C, i, o, s, a),
            Zc(e, t, !0)) : l || f(e, t, C, D, i, o, s, a, !1),
            g)
                O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ts(t, n, T, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const x = t.target = kl(t.props, _);
                x && ts(t, x, null, c, 0)
            } else
                O && ts(t, A, L, c, 1)
        }
        Wp(t)
    },
    remove(e, t, n, r, {um: i, o: {remove: o}}, s) {
        const {shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: f, props: d} = e;
        if (f && o(u),
        s && o(c),
        a & 16) {
            const m = s || !Ki(d);
            for (let _ = 0; _ < l.length; _++) {
                const b = l[_];
                i(b, t, n, m, !!b.dynamicChildren)
            }
        }
    },
    move: ts,
    hydrate: p_
};
function ts(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: c, props: u} = e
      , f = o === 2;
    if (f && r(s, t, n),
    (!f || Ki(u)) && l & 16)
        for (let d = 0; d < c.length; d++)
            i(c[d], t, n, 2);
    f && r(a, t, n)
}
function p_(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: a, querySelector: l}}, c) {
    const u = t.target = kl(t.props, l);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (Ki(t.props))
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
        Wp(t)
    }
    return t.anchor && s(t.anchor)
}
const m_ = h_;
function Wp(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const pt = Symbol.for("v-fgt")
  , Wr = Symbol.for("v-txt")
  , Rt = Symbol.for("v-cmt")
  , Yi = Symbol.for("v-stc")
  , qi = [];
let en = null;
function me(e=!1) {
    qi.push(en = e ? null : [])
}
function Gp() {
    qi.pop(),
    en = qi[qi.length - 1] || null
}
let gi = 1;
function hf(e) {
    gi += e
}
function Jp(e) {
    return e.dynamicChildren = gi > 0 ? en || si : null,
    Gp(),
    gi > 0 && en && en.push(e),
    e
}
function We(e, t, n, r, i, o) {
    return Jp(ge(e, t, n, r, i, o, !0))
}
function vt(e, t, n, r, i) {
    return Jp(Ze(e, t, n, r, i, !0))
}
function yi(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function un(e, t) {
    return e.type === t.type && e.key === t.key
}
const na = "__vInternal"
  , zp = ({key: e})=>e ?? null
  , fs = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? it(e) || at(e) || ye(e) ? {
    i: ht,
    r: e,
    k: t,
    f: !!n
} : e : null);
function ge(e, t=null, n=null, r=0, i=null, o=e === pt ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && zp(t),
        ref: t && fs(t),
        scopeId: Zs,
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
        ctx: ht
    };
    return a ? ($c(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= it(n) ? 8 : 16),
    gi > 0 && !s && en && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && en.push(l),
    l
}
const Ze = g_;
function g_(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === Ap) && (e = Rt),
    yi(e)) {
        const a = qn(e, t, !0);
        return n && $c(a, n),
        gi > 0 && !o && en && (a.shapeFlag & 6 ? en[en.indexOf(e)] = a : en.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (S_(e) && (e = e.__vccOpts),
    t) {
        t = qt(t);
        let {class: a, style: l} = t;
        a && !it(a) && (t.class = Ct(a)),
        tt(l) && (hp(l) && !fe(l) && (l = gt({}, l)),
        t.style = On(l))
    }
    const s = it(e) ? 1 : kp(e) ? 128 : d_(e) ? 64 : tt(e) ? 4 : ye(e) ? 2 : 0;
    return ge(e, t, n, r, i, s, o, !0)
}
function qt(e) {
    return e ? hp(e) || na in e ? gt({}, e) : e : null
}
function qn(e, t, n=!1) {
    const {props: r, ref: i, patchFlag: o, children: s} = e
      , a = t ? vi(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && zp(a),
        ref: t && t.ref ? n && i ? fe(i) ? i.concat(fs(t)) : [i, fs(t)] : fs(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== pt ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && qn(e.ssContent),
        ssFallback: e.ssFallback && qn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Qp(e=" ", t=0) {
    return Ze(Wr, null, e, t)
}
function IM(e, t) {
    const n = Ze(Yi, null, e);
    return n.staticCount = t,
    n
}
function Kt(e="", t=!1) {
    return t ? (me(),
    vt(Rt, null, e)) : Ze(Rt, null, e)
}
function Qt(e) {
    return e == null || typeof e == "boolean" ? Ze(Rt) : fe(e) ? Ze(pt, null, e.slice()) : typeof e == "object" ? ar(e) : Ze(Wr, null, String(e))
}
function ar(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : qn(e)
}
function $c(e, t) {
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
            $c(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(na in t) ? t._ctx = ht : i === 3 && ht && (ht.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ye(t) ? (t = {
            default: t,
            _ctx: ht
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Qp(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function vi(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = Ct([t.class, r.class]));
            else if (i === "style")
                t.style = On([t.style, r.style]);
            else if (Lo(i)) {
                const o = t[i]
                  , s = r[i];
                s && o !== s && !(fe(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function Nt(e, t, n, r=null) {
    nn(e, t, 7, [n, r])
}
const y_ = Up();
let v_ = 0;
function __(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || y_
      , o = {
        uid: v_++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new tp(!0),
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
        propsOptions: Fp(r, i),
        emitsOptions: Sp(r, i),
        emit: null,
        emitted: null,
        propsDefaults: nt,
        inheritAttrs: r.inheritAttrs,
        ctx: nt,
        data: nt,
        props: nt,
        attrs: nt,
        slots: nt,
        refs: nt,
        setupState: nt,
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
    o.emit = h0.bind(null, o),
    e.ce && e.ce(o),
    o
}
let _t = null;
const vn = ()=>_t || ht;
let Ls, wl;
{
    const e = Zh()
      , t = (n,r)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o=>{
            i.length > 1 ? i.forEach(s=>s(o)) : i[0](o)
        }
    }
    ;
    Ls = t("__VUE_INSTANCE_SETTERS__", n=>_t = n),
    wl = t("__VUE_SSR_SETTERS__", n=>ra = n)
}
const Gr = e=>{
    const t = _t;
    return Ls(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Ls(t)
    }
}
  , Ll = ()=>{
    _t && _t.scope.off(),
    Ls(null)
}
;
function Xp(e) {
    return e.vnode.shapeFlag & 4
}
let ra = !1;
function b_(e, t=!1) {
    t && wl(t);
    const {props: n, children: r} = e.vnode
      , i = Xp(e);
    t_(e, n, i, t),
    i_(e, r);
    const o = i ? E_(e, t) : void 0;
    return t && wl(!1),
    o
}
function E_(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = dt(new Proxy(e.ctx,Y0));
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? $p(e) : null
          , o = Gr(e);
        Qr();
        const s = gr(r, e, 0, [e.props, i]);
        if (Xr(),
        o(),
        Cc(s)) {
            if (s.then(Ll, Ll),
            t)
                return s.then(a=>{
                    Ol(e, a, t)
                }
                ).catch(a=>{
                    Io(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Ol(e, s, t)
    } else
        Zp(e, t)
}
function Ol(e, t, n) {
    ye(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) && (e.setupState = yp(t)),
    Zp(e, n)
}
let pf;
function Zp(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && pf && !r.render) {
            const i = r.template || zc(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , c = gt(gt({
                    isCustomElement: o,
                    delimiters: a
                }, s), l);
                r.render = pf(i, c)
            }
        }
        e.render = r.render || $t
    }
    {
        const i = Gr(e);
        Qr();
        try {
            J0(e)
        } finally {
            Xr(),
            i()
        }
    }
}
function T_(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return Ft(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function $p(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return T_(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ia(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(yp(dt(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in ji)
                    return ji[n](e)
            },
            has(t, n) {
                return n in t || n in ji
            }
        }))
}
function Cl(e, t=!0) {
    return ye(e) ? e.displayName || e.name : e.name || t && e.__name
}
function S_(e) {
    return ye(e) && "__vccOpts"in e
}
const ue = (e,t)=>r0(e, t, ra);
function ut(e, t, n) {
    const r = arguments.length;
    return r === 2 ? tt(t) && !fe(t) ? yi(t) ? Ze(e, null, [t]) : Ze(e, t) : Ze(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && yi(n) && (n = [n]),
    Ze(e, t, n))
}
const em = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const A_ = "http://www.w3.org/2000/svg"
  , k_ = "http://www.w3.org/1998/Math/MathML"
  , lr = typeof document < "u" ? document : null
  , mf = lr && lr.createElement("template")
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
        const i = t === "svg" ? lr.createElementNS(A_, e) : t === "mathml" ? lr.createElementNS(k_, e) : lr.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e=>lr.createTextNode(e),
    createComment: e=>lr.createComment(e),
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
    querySelector: e=>lr.querySelector(e),
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
            mf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = mf.content;
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
  , Xn = "transition"
  , Di = "animation"
  , fo = Symbol("_vtc")
  , Po = (e,{slots: t})=>ut(D0, L_(e), t);
Po.displayName = "Transition";
const tm = {
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
Po.props = gt({}, Op, tm);
const Lr = (e,t=[])=>{
    fe(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , gf = e=>e ? fe(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function L_(e) {
    const t = {};
    for (const U in e)
        U in tm || (t[U] = e[U]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: c=s, appearToClass: u=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , _ = O_(i)
      , b = _ && _[0]
      , S = _ && _[1]
      , {onBeforeEnter: g, onEnter: E, onEnterCancelled: p, onLeave: y, onLeaveCancelled: T, onBeforeAppear: A=g, onAppear: L=E, onAppearCancelled: O=p} = t
      , C = (U,Z,W)=>{
        Or(U, Z ? u : a),
        Or(U, Z ? c : s),
        W && W()
    }
      , D = (U,Z)=>{
        U._isLeaving = !1,
        Or(U, f),
        Or(U, m),
        Or(U, d),
        Z && Z()
    }
      , x = U=>(Z,W)=>{
        const K = U ? L : E
          , N = ()=>C(Z, U, W);
        Lr(K, [Z, N]),
        yf(()=>{
            Or(Z, U ? l : o),
            Zn(Z, U ? u : a),
            gf(K) || vf(Z, r, b, N)
        }
        )
    }
    ;
    return gt(t, {
        onBeforeEnter(U) {
            Lr(g, [U]),
            Zn(U, o),
            Zn(U, s)
        },
        onBeforeAppear(U) {
            Lr(A, [U]),
            Zn(U, l),
            Zn(U, c)
        },
        onEnter: x(!1),
        onAppear: x(!0),
        onLeave(U, Z) {
            U._isLeaving = !0;
            const W = ()=>D(U, Z);
            Zn(U, f),
            I_(),
            Zn(U, d),
            yf(()=>{
                U._isLeaving && (Or(U, f),
                Zn(U, m),
                gf(y) || vf(U, r, S, W))
            }
            ),
            Lr(y, [U, W])
        },
        onEnterCancelled(U) {
            C(U, !1),
            Lr(p, [U])
        },
        onAppearCancelled(U) {
            C(U, !0),
            Lr(O, [U])
        },
        onLeaveCancelled(U) {
            D(U),
            Lr(T, [U])
        }
    })
}
function O_(e) {
    if (e == null)
        return null;
    if (tt(e))
        return [Da(e.enter), Da(e.leave)];
    {
        const t = Da(e);
        return [t, t]
    }
}
function Da(e) {
    return Xh(e)
}
function Zn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[fo] || (e[fo] = new Set)).add(t)
}
function Or(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[fo];
    n && (n.delete(t),
    n.size || (e[fo] = void 0))
}
function yf(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let C_ = 0;
function vf(e, t, n, r) {
    const i = e._endId = ++C_
      , o = ()=>{
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: a, propCount: l} = R_(e, t);
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
function R_(e, t) {
    const n = window.getComputedStyle(e)
      , r = _=>(n[_] || "").split(", ")
      , i = r(`${Xn}Delay`)
      , o = r(`${Xn}Duration`)
      , s = _f(i, o)
      , a = r(`${Di}Delay`)
      , l = r(`${Di}Duration`)
      , c = _f(a, l);
    let u = null
      , f = 0
      , d = 0;
    t === Xn ? s > 0 && (u = Xn,
    f = s,
    d = o.length) : t === Di ? c > 0 && (u = Di,
    f = c,
    d = l.length) : (f = Math.max(s, c),
    u = f > 0 ? s > c ? Xn : Di : null,
    d = u ? u === Xn ? o.length : l.length : 0);
    const m = u === Xn && /\b(transform|all)(,|$)/.test(r(`${Xn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function _f(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>bf(n) + bf(e[r])))
}
function bf(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function I_() {
    return document.body.offsetHeight
}
function P_(e, t, n) {
    const r = e[fo];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Os = Symbol("_vod")
  , nm = Symbol("_vsh")
  , PM = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Os] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Ni(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Ni(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Ni(e, !1)
        }
        ) : Ni(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Ni(e, t)
    }
};
function Ni(e, t) {
    e.style.display = t ? e[Os] : "none",
    e[nm] = !t
}
const M_ = Symbol("")
  , D_ = /(^|;)\s*display\s*:/;
function N_(e, t, n) {
    const r = e.style
      , i = it(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (it(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && ds(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && ds(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            ds(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[M_];
            s && (n += ";" + s),
            r.cssText = n,
            o = D_.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Os in e && (e[Os] = o ? r.display : "",
    e[nm] && (r.display = "none"))
}
const Ef = /\s*!important$/;
function ds(e, t, n) {
    if (fe(n))
        n.forEach(r=>ds(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = V_(e, t);
        Ef.test(n) ? e.setProperty(zr(r), n.replace(Ef, ""), "important") : e[r] = n
    }
}
const Tf = ["Webkit", "Moz", "ms"]
  , Na = {};
function V_(e, t) {
    const n = Na[t];
    if (n)
        return n;
    let r = Mn(t);
    if (r !== "filter" && r in e)
        return Na[t] = r;
    r = Js(r);
    for (let i = 0; i < Tf.length; i++) {
        const o = Tf[i] + r;
        if (o in e)
            return Na[t] = o
    }
    return t
}
const Sf = "http://www.w3.org/1999/xlink";
function U_(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Sf, t.slice(6, t.length)) : e.setAttributeNS(Sf, t, n);
    else {
        const o = Nv(t);
        n == null || o && !$h(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function B_(e, t, n, r, i, o, s) {
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
        c === "boolean" ? n = $h(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function ti(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function F_(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Af = Symbol("_vei");
function x_(e, t, n, r, i=null) {
    const o = e[Af] || (e[Af] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = H_(t);
        if (r) {
            const c = o[t] = Y_(r, i);
            ti(e, a, c, l)
        } else
            s && (F_(e, a, s, l),
            o[t] = void 0)
    }
}
const kf = /(?:Once|Passive|Capture)$/;
function H_(e) {
    let t;
    if (kf.test(e)) {
        t = {};
        let r;
        for (; r = e.match(kf); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : zr(e.slice(2)), t]
}
let Va = 0;
const j_ = Promise.resolve()
  , K_ = ()=>Va || (j_.then(()=>Va = 0),
Va = Date.now());
function Y_(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        nn(q_(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = K_(),
    n
}
function q_(e, t) {
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
  , W_ = (e,t,n,r,i,o,s,a,l)=>{
    const c = i === "svg";
    t === "class" ? P_(e, r, c) : t === "style" ? N_(e, n, r) : Lo(t) ? Lc(t) || x_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : G_(e, t, r, c)) ? B_(e, t, r, o, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    U_(e, t, r, c))
}
;
function G_(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && wf(t) && ye(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return wf(t) && it(n) ? !1 : t in e
}
const Lf = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return fe(t) ? n=>ci(t, n) : t
}
;
function J_(e) {
    e.target.composing = !0
}
function Of(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Ua = Symbol("_assign")
  , MM = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[Ua] = Lf(i);
        const o = r || i.props && i.props.type === "number";
        ti(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = fl(a)),
            e[Ua](a)
        }
        ),
        n && ti(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (ti(e, "compositionstart", J_),
        ti(e, "compositionend", Of),
        ti(e, "change", Of))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: i}}, o) {
        if (e[Ua] = Lf(o),
        e.composing)
            return;
        const s = i || e.type === "number" ? fl(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , z_ = ["ctrl", "shift", "alt", "meta"]
  , Q_ = {
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
    exact: (e,t)=>z_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , DM = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i,...o)=>{
        for (let s = 0; s < t.length; s++) {
            const a = Q_[t[s]];
            if (a && a(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , X_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Z_ = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i=>{
        if (!("key"in i))
            return;
        const o = zr(i.key);
        if (t.some(s=>s === o || X_[s] === o))
            return e(i)
    }
    )
}
  , rm = gt({
    patchProp: W_
}, w_);
let Wi, Cf = !1;
function $_() {
    return Wi || (Wi = c_(rm))
}
function eb() {
    return Wi = Cf ? Wi : u_(rm),
    Cf = !0,
    Wi
}
const im = (...e)=>{
    const t = $_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = sm(r);
        if (!i)
            return;
        const o = t._component;
        !ye(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, om(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , tb = (...e)=>{
    const t = eb().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = sm(r);
        if (i)
            return n(i, !0, om(i))
    }
    ,
    t
}
;
function om(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function sm(e) {
    return it(e) ? document.querySelector(e) : e
}
const nb = /#/g
  , rb = /&/g
  , ib = /\//g
  , ob = /=/g
  , eu = /\+/g
  , sb = /%5e/gi
  , ab = /%60/gi
  , lb = /%7c/gi
  , cb = /%20/gi;
function ub(e) {
    return encodeURI("" + e).replace(lb, "|")
}
function Rl(e) {
    return ub(typeof e == "string" ? e : JSON.stringify(e)).replace(eu, "%2B").replace(cb, "+").replace(nb, "%23").replace(rb, "%26").replace(ab, "`").replace(sb, "^").replace(ib, "%2F")
}
function Ba(e) {
    return Rl(e).replace(ob, "%3D")
}
function Cs(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function fb(e) {
    return Cs(e.replace(eu, " "))
}
function db(e) {
    return Cs(e.replace(eu, " "))
}
function tu(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = fb(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = db(r[2] || "");
        t[i] === void 0 ? t[i] = o : Array.isArray(t[i]) ? t[i].push(o) : t[i] = [t[i], o]
    }
    return t
}
function hb(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Ba(e)}=${Rl(n)}`).join("&") : `${Ba(e)}=${Rl(t)}` : Ba(e)
}
function pb(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>hb(t, e[t])).filter(Boolean).join("&")
}
const mb = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , gb = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , yb = /^([/\\]\s*){2,}[^/\\]/
  , vb = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , _b = /\/$|\/\?|\/#/
  , bb = /^\.?\//;
function Nn(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? mb.test(e) : gb.test(e) || (t.acceptRelative ? yb.test(e) : !1)
}
function Eb(e) {
    return !!e && vb.test(e)
}
function Il(e="", t) {
    return t ? _b.test(e) : e.endsWith("/")
}
function Mo(e="", t) {
    if (!t)
        return (Il(e) ? e.slice(0, -1) : e) || "/";
    if (!Il(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const i = e.indexOf("#");
    i >= 0 && (n = e.slice(0, i),
    r = e.slice(i));
    const [o,...s] = n.split("?");
    return (o.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function ho(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (Il(e, !0))
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
function Tb(e="") {
    return e.startsWith("/")
}
function Rf(e="") {
    return Tb(e) ? e : "/" + e
}
function Sb(e, t) {
    if (lm(t) || Nn(e))
        return e;
    const n = Mo(t);
    return e.startsWith(n) ? e : Ri(n, e)
}
function If(e, t) {
    if (lm(t))
        return e;
    const n = Mo(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function am(e, t) {
    const n = Do(e)
      , r = {
        ...tu(n.search),
        ...t
    };
    return n.search = pb(r),
    kb(n)
}
function lm(e) {
    return !e || e === "/"
}
function Ab(e) {
    return e && e !== "/"
}
function Ri(e, ...t) {
    let n = e || "";
    for (const r of t.filter(i=>Ab(i)))
        if (n) {
            const i = r.replace(bb, "");
            n = ho(n) + i
        } else
            n = r;
    return n
}
function Pl(e, t, n={}) {
    return n.trailingSlash || (e = ho(e),
    t = ho(t)),
    n.leadingSlash || (e = Rf(e),
    t = Rf(t)),
    n.encoding || (e = Cs(e),
    t = Cs(t)),
    e === t
}
const cm = Symbol.for("ufo:protocolRelative");
function Do(e="", t) {
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
    if (!Nn(e, {
        acceptRelative: !0
    }))
        return t ? Do(t + e) : Ml(e);
    const [,r="",i,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: c, hash: u} = Ml(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: s,
        pathname: l,
        search: c,
        hash: u,
        [cm]: !r
    }
}
function Ml(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function kb(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , i = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[cm] ? (e.protocol || "") + "//" : "") + i + o + t + n + r
}
const wb = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Rs = wb().app
  , Lb = ()=>Rs.baseURL
  , Ob = ()=>Rs.buildAssetsDir
  , nu = (...e)=>Ri(um(), Ob(), ...e)
  , um = (...e)=>{
    const t = Rs.cdnURL || Rs.baseURL;
    return e.length ? Ri(t, ...e) : t
}
;
globalThis.__buildAssetsURL = nu,
globalThis.__publicAssetsURL = um;
const Cb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Rb = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Ib = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Pb(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        Mb(e);
        return
    }
    return t
}
function Mb(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function po(e, t={}) {
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
    if (!Ib.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Cb.test(e) || Rb.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Pb)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class Db extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function Nb(e) {
    var l, c, u, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((c = e.error) == null ? void 0 : c.toString()) || ""
      , n = ((u = e.request) == null ? void 0 : u.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${i}: ${o}${t ? ` ${t}` : ""}`
      , a = new Db(s,e.error ? {
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
const Vb = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Pf(e="GET") {
    return Vb.has(e.toUpperCase())
}
function Ub(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Bb = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Fb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function xb(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Fb.test(t) ? "json" : Bb.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Hb(e, t, n=globalThis.Headers) {
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
const jb = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Kb = new Set([101, 204, 205, 304]);
function fm(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let u;
            typeof a.options.retry == "number" ? u = a.options.retry : u = Pf(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : jb.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                o(a.request, {
                    ...a.options,
                    retry: u - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const c = Nb(a);
        throw Error.captureStackTrace && Error.captureStackTrace(c, o),
        c
    }
    const o = async function(l, c={}) {
        var d;
        const u = {
            request: l,
            options: Hb(c, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (u.options.method = (d = u.options.method) == null ? void 0 : d.toUpperCase(),
        u.options.onRequest && await u.options.onRequest(u),
        typeof u.request == "string" && (u.options.baseURL && (u.request = Sb(u.request, u.options.baseURL)),
        (u.options.query || u.options.params) && (u.request = am(u.request, {
            ...u.options.params,
            ...u.options.query
        }))),
        u.options.body && Pf(u.options.method) && (Ub(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
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
        if (u.response.body && !Kb.has(u.response.status) && u.options.method !== "HEAD") {
            const m = (u.options.parseResponse ? "json" : u.options.responseType) || xb(u.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const _ = await u.response.text()
                      , b = u.options.parseResponse || po;
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
    s.create = (a={})=>fm({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const ru = function() {
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
  , Yb = ru.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , qb = ru.Headers
  , Wb = ru.AbortController
  , Gb = fm({
    fetch: Yb,
    Headers: qb,
    AbortController: Wb
})
  , Jb = Gb;
globalThis.$fetch || (globalThis.$fetch = Jb.create({
    baseURL: Lb()
}));
function Dl(e, t={}, n) {
    for (const r in e) {
        const i = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? Dl(i, t, o) : typeof i == "function" && (t[o] = i)
    }
    return t
}
const zb = {
    run: e=>e()
}
  , Qb = ()=>zb
  , dm = typeof console.createTask < "u" ? console.createTask : Qb;
function Xb(e, t) {
    const n = t.shift()
      , r = dm(n);
    return e.reduce((i,o)=>i.then(()=>r.run(()=>o(...t))), Promise.resolve())
}
function Zb(e, t) {
    const n = t.shift()
      , r = dm(n);
    return Promise.all(e.map(i=>r.run(()=>i(...t))))
}
function Fa(e, t) {
    for (const n of [...e])
        n(t)
}
class $b {
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
        const n = Dl(t)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(t) {
        const n = Dl(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Xb, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Zb, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Fa(this._before, i);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(()=>{
            this._after && i && Fa(this._after, i)
        }
        ) : (this._after && i && Fa(this._after, i),
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
function hm() {
    return new $b
}
function eE(e={}) {
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
            Nl.add(c);
            try {
                const u = i ? i.run(s, a) : a();
                return n || (t = void 0),
                await u
            } finally {
                Nl.delete(c)
            }
        }
    }
}
function tE(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = eE({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Is = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Mf = "__unctx__"
  , nE = Is[Mf] || (Is[Mf] = tE())
  , rE = (e,t={})=>nE.get(e, t)
  , Df = "__unctx_async_handlers__"
  , Nl = Is[Df] || (Is[Df] = new Set);
function wn(e) {
    const t = [];
    for (const i of Nl) {
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
const pm = rE("nuxt-app", {
    asyncContext: !1
})
  , iE = "__nuxt_plugin";
function oE(e) {
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
        payload: Tt({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: i=>n._scope.run(()=>lE(n, i)),
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
    n.hooks = hm(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (i,o)=>{
        const s = "$" + i;
        ns(n, s, o),
        ns(n.vueApp.config.globalProperties, s, o)
    }
    ,
    ns(n.vueApp, "$nuxt", n),
    ns(n.vueApp.config.globalProperties, "$nuxt", n);
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
    const r = Tt(n.payload.config);
    return n.provide("config", r),
    n
}
async function sE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function aE(e, t) {
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
            const f = sE(e, l).then(async()=>{
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
function Pt(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || (()=>{}
    ), e, {
        [iE]: !0,
        _name: t
    })
}
function lE(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return pm.set(e),
    e.vueApp.runWithContext(r)
}
function cE() {
    var t;
    let e;
    return Qc() && (e = (t = vn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || pm.tryUse(),
    e || null
}
function re() {
    const e = cE();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function Gn(e) {
    return re().$config
}
function ns(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const rs = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function uE(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , i = (t || {}).decode || hE;
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
            n[l] = dE(c, i)
        }
        o = a + 1
    }
    return n
}
function Nf(e, t, n) {
    const r = n || {}
      , i = r.encode || pE;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!rs.test(e))
        throw new TypeError("argument name is invalid");
    const o = i(t);
    if (o && !rs.test(o))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!rs.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!rs.test(r.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!fE(r.expires) || Number.isNaN(r.expires.valueOf()))
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
function fE(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function dE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function hE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function pE(e) {
    return encodeURIComponent(e)
}
const Vf = Object.freeze({
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
function Uf(e, t) {
    t ? t = {
        ...Vf,
        ...t
    } : t = Vf;
    const n = mm(t);
    return n.dispatch(e),
    n.toString()
}
const mE = Object.freeze(["prototype", "__proto__", "constructor"]);
function mm(e) {
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
                e.respectType !== !1 && !Bf(i) && (u = mE),
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
                const c = mm(e);
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
            Bf(i) ? this.dispatch("[native]") : this.dispatch(i.toString()),
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
const gm = "[native code] }"
  , gE = gm.length;
function Bf(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-gE) === gm
}
function yE(e, t, n={}) {
    return e === t || Uf(e, n) === Uf(t, n)
}
function vE(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>vm(t, e)
    }
}
function ym(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,i])=>[r, ym(i)])) : new Map(Object.entries(e[n]));
    return t
}
function _E(e) {
    return vE(ym(e))
}
function vm(e, t) {
    const n = [];
    for (const [i,o] of Ff(t.wildcard))
        e.startsWith(i) && n.push(o);
    for (const [i,o] of Ff(t.dynamic))
        if (e.startsWith(i + "/")) {
            const s = "/" + e.slice(i.length).split("/").splice(2).join("/");
            n.push(...vm(s, o))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function Ff(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function xa(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Vl(e, t, n=".", r) {
    if (!xa(t))
        return Vl(e, {}, n, r);
    const i = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = e[o];
        s != null && (r && r(i, o, s, n) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : xa(s) && xa(i[o]) ? i[o] = Vl(s, i[o], (n ? `${n}.` : "") + o.toString(), r) : i[o] = s))
    }
    return i
}
function _m(e) {
    return (...t)=>t.reduce((n,r)=>Vl(n, r, "", e), {})
}
const iu = _m()
  , bE = _m((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function EE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var TE = Object.defineProperty
  , SE = (e,t,n)=>t in e ? TE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Mr = (e,t,n)=>(SE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Ul extends Error {
    constructor(t, n={}) {
        super(t, n),
        Mr(this, "statusCode", 500),
        Mr(this, "fatal", !1),
        Mr(this, "unhandled", !1),
        Mr(this, "statusMessage"),
        Mr(this, "data"),
        Mr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Fl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = bm(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Mr(Ul, "__h3_error__", !0);
function Bl(e) {
    if (typeof e == "string")
        return new Ul(e);
    if (AE(e))
        return e;
    const t = new Ul(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (EE(e, "stack"))
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
    e.statusCode ? t.statusCode = Fl(e.statusCode, t.statusCode) : e.status && (t.statusCode = Fl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        bm(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function AE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const kE = /[^\u0009\u0020-\u007E]/g;
function bm(e="") {
    return e.replace(kE, "")
}
function Fl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const Em = Symbol("layout-meta")
  , No = Symbol("route")
  , Wt = ()=>{
    var e;
    return (e = re()) == null ? void 0 : e.$router
}
  , oa = ()=>Qc() ? Et(No, re()._route) : re()._route;
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
  , LE = ()=>{
    try {
        if (re()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , Vo = (e,t)=>{
    e || (e = "/");
    const n = typeof e == "string" ? e : am(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = t.open
              , c = Object.entries(l).filter(([u,f])=>f !== void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");
            open(n, a, c)
        }
        return Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || Nn(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = Do(n).protocol;
        if (a && Eb(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = LE();
    if (!r && i)
        return e;
    const o = Wt()
      , s = re();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    i ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Tm = "__nuxt_error"
  , sa = ()=>ii(re().payload, "error")
  , oi = e=>{
    const t = aa(e);
    try {
        const n = re()
          , r = sa();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , OE = async(e={})=>{
    const t = re()
      , n = sa();
    t.callHook("app:error:cleared", e),
    e.redirect && await Wt().replace(e.redirect),
    n.value = null
}
  , CE = e=>!!e && typeof e == "object" && Tm in e
  , aa = e=>{
    const t = Bl(e);
    return Object.defineProperty(t, Tm, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , RE = "modulepreload"
  , IE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , xf = {}
  , PE = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        i = Promise.all(n.map(s=>{
            if (s = IE(s, r),
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
            if (u.rel = a ? "stylesheet" : RE,
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
  , k = (...e)=>PE(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , ME = -1
  , DE = -2
  , NE = -3
  , VE = -4
  , UE = -5
  , BE = -6;
function FE(e, t) {
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
        if (o === ME)
            return;
        if (o === NE)
            return NaN;
        if (o === VE)
            return 1 / 0;
        if (o === UE)
            return -1 / 0;
        if (o === BE)
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
                    u !== DE && (l[c] = i(u))
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
function HE(e) {
    return Array.isArray(e) ? e : [e]
}
const jE = ["title", "titleTemplate", "script", "style", "noscript"]
  , hs = ["base", "meta", "link", "style", "script", "noscript"]
  , KE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , YE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Sm = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , qE = typeof window < "u";
function ou(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Hf(e) {
    return e._h || ou(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function Am(e, t) {
    const {props: n, tag: r} = e;
    if (YE.includes(r))
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
function jf(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function km(e, t) {
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
            return typeof c == "object" ? km(c, t) : Array.isArray(c) ? c : {
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
  , Ha = e=>({
    keyValue: e
})
  , su = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${Hn(e)}=${t}`
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
                return `${Hn(e)} ${t}`
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
    msapplicationConfig: Ha("msapplication-Config"),
    msapplicationTileColor: Ha("msapplication-TileColor"),
    msapplicationTileImage: Ha("msapplication-TileImage"),
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
                return typeof t == "boolean" ? `${Hn(e)}` : `${Hn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , Lm = ["og", "book", "article", "profile"];
function Om(e) {
    var n;
    const t = Hn(e).split(":")[0];
    return Lm.includes(t) ? "property" : ((n = su[e]) == null ? void 0 : n.metaKey) || "name"
}
function WE(e) {
    var t;
    return ((t = su[e]) == null ? void 0 : t.keyValue) || Hn(e)
}
function Hn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return Lm.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function xl(e) {
    if (Array.isArray(e))
        return e.map(n=>xl(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[Hn(n)] = xl(r);
    return t
}
function GE(e, t) {
    const n = su[t];
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
function Rm(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function Kf(e, t) {
    const n = Rm(t)
      , r = Hn(e)
      , i = Om(r);
    if (Cm.includes(r)) {
        const o = {};
        return Object.entries(n).forEach(([s,a])=>{
            o[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Im(o).sort((s,a)=>{
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
function Im(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([i,o])=>{
        if (!Array.isArray(o)) {
            if (typeof o == "object" && o) {
                if (Cm.includes(Hn(i))) {
                    t.push(...Kf(i, o));
                    return
                }
                n[i] = Rm(o)
            } else
                n[i] = o;
            return
        }
        o.forEach(s=>{
            t.push(...typeof s == "string" ? Im({
                [i]: s
            }) : Kf(i, s))
        }
        )
    }
    );
    const r = km(n, {
        key({key: i}) {
            return Om(i)
        },
        value({key: i}) {
            return i === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: i}) {
            return WE(i)
        },
        resolveValueData({value: i, key: o}) {
            return i === null ? "_null" : typeof i == "object" ? GE(i, o) : typeof i == "number" ? i.toString() : i
        }
    });
    return [...t, ...r].map(i=>(i.content === "_null" && (i.content = null),
    i))
}
async function JE(e, t, n) {
    const r = {
        tag: e,
        props: await Pm(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Sm.forEach(i=>{
        const o = typeof r.props[i] < "u" ? r.props[i] : n[i];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || jE.includes(r.tag)) && (r[i === "children" ? "innerHTML" : i] = o),
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
function zE(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function Pm(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = zE(e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !Sm.includes(n)) {
            const r = String(e[n])
              , i = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = i ? "true" : !0 : e[n] || (i && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const QE = 10;
async function XE(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && KE.includes(n)).forEach(([n,r])=>{
        const i = HE(r);
        t.push(...i.map(o=>JE(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << QE) + r,
    n))
}
const Yf = {
    base: -10,
    title: 10
}
  , qf = {
    critical: -80,
    high: -10,
    low: 20
};
function Ps(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Yf && (t = Yf[e.tag]),
    typeof n == "string" && n in qf ? t + qf[n] : t)
}
const ZE = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Mm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , $n = "%separator";
function ps(e, t, n) {
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
    e.includes($n) && (e.endsWith($n) && (e = e.slice(0, -$n.length).trim()),
    e.startsWith($n) && (e = e.slice($n.length).trim()),
    e = e.replace(new RegExp(`\\${$n}\\s*\\${$n}`,"g"), $n),
    e = ps(e, {
        separator: n
    }, n)),
    e
}
async function $E(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Pm(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = Am(t),
    t
}
async function Dm(e, t={}) {
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
        id: hs.includes(f.tag) ? Hf(f) : f.tag,
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
            for (const m of [...d].filter(_=>hs.includes(_.tagName.toLowerCase())))
                o.elMap[m.getAttribute("data-hid") || Hf(await $E(m))] = m
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
            f.$el ? a(f) : hs.includes(d.tag) && l.push(f)
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
async function eT(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await Dm(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function tT(e) {
    return t=>{
        var r, i;
        const n = ((i = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    eT(o, e)
                }
            }
        }
    }
}
const nT = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , rT = {
    hooks: {
        "tag:normalise": function({tag: e}) {
            ["hid", "vmid", "key"].forEach(r=>{
                e.props[r] && (e.key = e.props[r],
                delete e.props[r])
            }
            );
            const n = Am(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        },
        "tags:resolve": function(e) {
            const t = {};
            e.tags.forEach(r=>{
                const i = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , o = t[i];
                if (o) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && nT.includes(r.tag) && (a = "merge"),
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
                    } else if (Ps(r) > Ps(o))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (hs.includes(r.tag) && s === 0) {
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
  , iT = {
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
  , oT = ["script", "link", "bodyAttrs"];
function sT(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,i])=>{
        r.startsWith("on") && typeof i == "function" ? (Mm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = i) : t[r] = i
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const aT = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (oT.includes(n.tag)) {
                    const {props: r, eventHandlers: i} = sT(n);
                    n.props = r,
                    Object.keys(i).length && ((n.props.src || n.props.href) && (n.key = n.key || ou(n.props.src || n.props.href)),
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
                o in t.$el.dataset ? f(new Event(o.replace("on", ""))) : Mm.includes(o) && typeof MutationObserver < "u" ? (u = new MutationObserver(d=>{
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
  , lT = ["link", "style", "script", "noscript"]
  , cT = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && lT.includes(e.tag) && (e.props["data-hid"] = e._h = ou(e.key))
        }
    }
}
  , uT = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(i=>i._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of ZE)
                for (const i of e.tags.filter(o=>typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(i.tagPriority.replace(n, ""));
                    typeof o < "u" && (i._p = o + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>Ps(n) - Ps(r))
        }
    }
}
  , fT = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , dT = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , i = n.findIndex(l=>l.tag === "templateParams")
              , o = i !== -1 ? n[i].props : {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = ps(o.pageTitle || r || "", o, s);
            for (const l of n.filter(c=>c.processTemplateParams !== !1)) {
                const c = fT[l.tag];
                c && typeof l.props[c] == "string" ? l.props[c] = ps(l.props[c], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(u=>{
                    typeof l[u] == "string" && (l[u] = ps(l[u], o, s))
                }
                )
            }
            e._templateParams = o,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , hT = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(i=>i.tag === "titleTemplate");
            const r = t.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = jf(t[n].textContent, t[r].textContent);
                i !== null ? t[r].textContent = i || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const i = jf(t[n].textContent);
                i !== null && (t[n].textContent = i,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , pT = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Nm;
function mT(e={}) {
    const t = gT(e);
    return t.use(tT()),
    Nm = t
}
function Wf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function gT(e={}) {
    const t = hm();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (qE ? document : void 0);
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
            Wf(c.mode, n) && t.addHooks(c.hooks || {}))
        },
        push(l, c) {
            c == null || delete c.head;
            const u = {
                _i: i++,
                input: l,
                ...c
            };
            return Wf(u.mode, n) && (o.push(u),
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
                    for (const f of await XE(c)) {
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
    return [rT, iT, aT, cT, uT, dT, hT, pT, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function yT() {
    return Nm
}
const vT = em.startsWith("3");
function _T(e) {
    return typeof e == "function" ? e() : G(e)
}
function Ms(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = _T(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Ms(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,i])=>r === "titleTemplate" || r.startsWith("on") ? [r, G(i)] : [r, Ms(i, r)])) : n
}
const bT = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Ms(t.input)
        }
    }
}
  , Vm = "usehead";
function ET(e) {
    return {
        install(n) {
            vT && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Vm, e))
        }
    }.install
}
function TT(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>Yt(()=>setTimeout(()=>n(), 0)));
    const t = mT(e);
    return t.use(bT),
    t.install = ET(t),
    t
}
const Hl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , jl = "__unhead_injection_handler__";
function ST(e) {
    Hl[jl] = e
}
function AT() {
    if (jl in Hl)
        return Hl[jl]();
    const e = Et(Vm);
    return e || yT()
}
function kT(e, t={}) {
    const n = t.head || AT();
    if (n)
        return n.ssr ? n.push(e, t) : wT(n, e, t)
}
function wT(e, t, n={}) {
    const r = le(!1)
      , i = le({});
    R0(()=>{
        i.value = r.value ? {} : Ms(t)
    }
    );
    const o = e.push(i.value, n);
    return He(i, a=>{
        o.patch(a)
    }
    ),
    vn() && (yn(()=>{
        o.dispose()
    }
    ),
    Pp(()=>{
        r.value = !0
    }
    ),
    Ip(()=>{
        r.value = !1
    }
    )),
    o
}
function Sn(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Sn(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: Sn(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = Sn(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = Sn(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(i) {
        n.add(Sn(i))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(i, o) {
        n.set(Sn(o), Sn(i))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(Sn(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const LT = {
    nuxt: {
        buildId: "8d3057f9-3cca-4920-b4d9-3f6f6ddffa4d"
    }
}
  , OT = bE(LT);
function CT() {
    const e = re();
    return e._appConfig || (e._appConfig = Tt(OT)),
    e._appConfig
}
const RT = !1
  , Kl = !1
  , IT = !1
  , PT = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , MT = "#__nuxt";
let ms, Um;
function DT() {
    var t;
    const e = (t = CT().nuxt) == null ? void 0 : t.buildId;
    return ms = $fetch(nu(`builds/meta/${e}.json`)),
    ms.then(n=>{
        Um = _E(n.matcher)
    }
    ),
    ms
}
function la() {
    return ms || DT()
}
async function Bm(e) {
    return await la(),
    iu({}, ...Um.matchAll(e).reverse())
}
function Gf(e, t={}) {
    const n = NT(e, t)
      , r = re()
      , i = r._payloadCache = r._payloadCache || {};
    return n in i || (i[n] = VT(e).then(o=>o ? Fm(n).then(s=>s || (delete i[n],
    null)) : (i[n] = null,
    null))),
    i[n]
}
const Jf = "json";
function NT(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || Nn(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Ri(Gn().app.baseURL, n.pathname, r ? `_payload.${r}.${Jf}` : `_payload.${Jf}`)
}
async function Fm(e) {
    const t = fetch(e).then(n=>n.text().then(xm));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function VT(e=oa().path) {
    if (e = Mo(e),
    (await la()).prerendered.includes(e))
        return !0;
    const n = await Bm(e);
    return !!n.prerender && !n.redirect
}
let is = null;
async function UT() {
    if (is)
        return is;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await xm(e.textContent || "")
      , n = e.dataset.src ? await Fm(e.dataset.src) : void 0;
    return is = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    is
}
async function xm(e) {
    return await FE(e, re()._payloadRevivers)
}
function BT(e, t) {
    re()._payloadRevivers[e] = t
}
const zf = {
    NuxtError: e=>aa(e),
    EmptyShallowRef: e=>pn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : po(e)),
    EmptyRef: e=>le(e === "_" ? void 0 : e === "0n" ? BigInt(0) : po(e)),
    ShallowRef: e=>pn(e),
    ShallowReactive: e=>Oi(e),
    Ref: e=>le(e),
    Reactive: e=>Tt(e)
}
  , FT = Pt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in zf)
            BT(r, zf[r]);
        Object.assign(e.payload, ([t,n] = wn(()=>e.runWithContext(UT)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , xT = []
  , HT = Pt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = TT({
            plugins: xT
        });
        ST(()=>re().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await Dm(t)
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
const ni = typeof document < "u";
function jT(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Qe = Object.assign;
function ja(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = mn(i) ? i.map(e) : e(i)
    }
    return n
}
const Gi = ()=>{}
  , mn = Array.isArray
  , Hm = /#/g
  , KT = /&/g
  , YT = /\//g
  , qT = /=/g
  , WT = /\?/g
  , jm = /\+/g
  , GT = /%5B/g
  , JT = /%5D/g
  , Km = /%5E/g
  , zT = /%60/g
  , Ym = /%7B/g
  , QT = /%7C/g
  , qm = /%7D/g
  , XT = /%20/g;
function au(e) {
    return encodeURI("" + e).replace(QT, "|").replace(GT, "[").replace(JT, "]")
}
function ZT(e) {
    return au(e).replace(Ym, "{").replace(qm, "}").replace(Km, "^")
}
function Yl(e) {
    return au(e).replace(jm, "%2B").replace(XT, "+").replace(Hm, "%23").replace(KT, "%26").replace(zT, "`").replace(Ym, "{").replace(qm, "}").replace(Km, "^")
}
function $T(e) {
    return Yl(e).replace(qT, "%3D")
}
function eS(e) {
    return au(e).replace(Hm, "%23").replace(WT, "%3F")
}
function tS(e) {
    return e == null ? "" : eS(e).replace(YT, "%2F")
}
function mo(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const nS = /\/$/
  , rS = e=>e.replace(nS, "");
function Ka(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    i = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = aS(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: mo(s)
    }
}
function iS(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Qf(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function oS(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && _i(t.matched[r], n.matched[i]) && Wm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function _i(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Wm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!sS(e[n], t[n]))
            return !1;
    return !0
}
function sS(e, t) {
    return mn(e) ? Xf(e, t) : mn(t) ? Xf(t, e) : e === t
}
function Xf(e, t) {
    return mn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function aS(e, t) {
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
var go;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(go || (go = {}));
var Ji;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Ji || (Ji = {}));
function lS(e) {
    if (!e)
        if (ni) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    rS(e)
}
const cS = /^[^#]+#/;
function uS(e, t) {
    return e.replace(cS, "#") + t
}
function fS(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ca = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function dS(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = fS(i, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Zf(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const ql = new Map;
function hS(e, t) {
    ql.set(e, t)
}
function pS(e) {
    const t = ql.get(e);
    return ql.delete(e),
    t
}
let mS = ()=>location.protocol + "//" + location.host;
function Gm(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Qf(l, "")
    }
    return Qf(n, e) + r + i
}
function gS(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const a = ({state: d})=>{
        const m = Gm(e, location)
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
                type: go.pop,
                direction: S ? S > 0 ? Ji.forward : Ji.back : Ji.unknown
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
        d.state && d.replaceState(Qe({}, d.state, {
            scroll: ca()
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
function $f(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? ca() : null
    }
}
function yS(e) {
    const {history: t, location: n} = window
      , r = {
        value: Gm(e, n)
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
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : mS() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d),
            i.value = c
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](d)
        }
    }
    function s(l, c) {
        const u = Qe({}, t.state, $f(i.value.back, l, i.value.forward, !0), c, {
            position: i.value.position
        });
        o(l, u, !0),
        r.value = l
    }
    function a(l, c) {
        const u = Qe({}, i.value, t.state, {
            forward: l,
            scroll: ca()
        });
        o(u.current, u, !0);
        const f = Qe({}, $f(r.value, l, null), {
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
function Jm(e) {
    e = lS(e);
    const t = yS(e)
      , n = gS(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = Qe({
        location: "",
        base: e,
        go: r,
        createHref: uS.bind(null, e)
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
function vS(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Jm(e)
}
function _S(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function zm(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const ln = {
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
  , Qm = Symbol("");
var ed;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(ed || (ed = {}));
function bi(e, t) {
    return Qe(new Error, {
        type: e,
        [Qm]: !0
    }, t)
}
function Bn(e, t) {
    return e instanceof Error && Qm in e && (t == null || !!(e.type & t))
}
const td = "[^/]+?"
  , bS = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , ES = /[.+*?^${}()[\]/\\]/g;
function TS(e, t) {
    const n = Qe({}, bS, t)
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
                i += d.value.replace(ES, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: _, repeatable: b, optional: S, regexp: g} = d;
                o.push({
                    name: _,
                    repeatable: b,
                    optional: S
                });
                const E = g || td;
                if (E !== td) {
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
                    if (mn(g) && !b)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = mn(g) ? g.join("/") : g;
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
function SS(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function AS(e, t) {
    let n = 0;
    const r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        const o = SS(r[n], i[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (nd(r))
            return 1;
        if (nd(i))
            return -1
    }
    return i.length - r.length
}
function nd(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const kS = {
    type: 0,
    value: ""
}
  , wS = /[a-zA-Z0-9_]/;
function LS(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[kS]];
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
function OS(e, t, n) {
    const r = TS(LS(e.path), n)
      , i = Qe(r, {
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
    t = od({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(u) {
        return r.get(u)
    }
    function o(u, f, d) {
        const m = !d
          , _ = RS(u);
        _.aliasOf = d && d.record;
        const b = od(t, u)
          , S = [_];
        if ("alias"in u) {
            const p = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const y of p)
                S.push(Qe({}, _, {
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
            if (g = OS(p, f, b),
            d ? d.alias.push(g) : (E = E || g,
            E !== g && E.alias.push(g),
            m && u.name && !id(g) && s(u.name)),
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
        : Gi
    }
    function s(u) {
        if (zm(u)) {
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
        for (; f < n.length && AS(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !Xm(u, n[f])); )
            f++;
        n.splice(f, 0, u),
        u.record.name && !id(u) && r.set(u.record.name, u)
    }
    function c(u, f) {
        let d, m = {}, _, b;
        if ("name"in u && u.name) {
            if (d = r.get(u.name),
            !d)
                throw bi(1, {
                    location: u
                });
            b = d.record.name,
            m = Qe(rd(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), u.params && rd(u.params, d.keys.map(E=>E.name))),
            _ = d.stringify(m)
        } else if (u.path != null)
            _ = u.path,
            d = n.find(E=>E.re.test(_)),
            d && (m = d.parse(_),
            b = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw bi(1, {
                    location: u,
                    currentLocation: f
                });
            b = d.record.name,
            m = Qe({}, f.params, u.params),
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
            meta: PS(S)
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
function rd(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function RS(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: IS(e),
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
function IS(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function id(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function PS(e) {
    return e.reduce((t,n)=>Qe(t, n.meta), {})
}
function od(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Xm(e, t) {
    return t.children.some(n=>n === e || Xm(e, n))
}
function MS(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(jm, " ")
          , s = o.indexOf("=")
          , a = mo(s < 0 ? o : o.slice(0, s))
          , l = s < 0 ? null : mo(o.slice(s + 1));
        if (a in t) {
            let c = t[a];
            mn(c) || (c = t[a] = [c]),
            c.push(l)
        } else
            t[a] = l
    }
    return t
}
function sd(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = $T(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (mn(r) ? r.map(o=>o && Yl(o)) : [r && Yl(r)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function DS(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = mn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const NS = Symbol("")
  , ad = Symbol("")
  , lu = Symbol("")
  , cu = Symbol("")
  , Wl = Symbol("");
function Vi() {
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
function cr(e, t, n, r, i, o=s=>s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return ()=>new Promise((a,l)=>{
        const c = d=>{
            d === !1 ? l(bi(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : _S(d) ? l(bi(2, {
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
function Ya(e, t, n, r, i=o=>o()) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (VS(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && o.push(cr(u, n, r, s, a, i))
                } else {
                    let c = l();
                    o.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = jT(u) ? u.default : u;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && cr(m, n, r, s, a, i)()
                    }
                    ))
                }
        }
    return o
}
function VS(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function ld(e) {
    const t = Et(lu)
      , n = Et(cu)
      , r = ue(()=>t.resolve(G(e.to)))
      , i = ue(()=>{
        const {matched: l} = r.value
          , {length: c} = l
          , u = l[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(_i.bind(null, u));
        if (d > -1)
            return d;
        const m = cd(l[c - 2]);
        return c > 1 && cd(u) === m && f[f.length - 1].path !== m ? f.findIndex(_i.bind(null, l[c - 2])) : d
    }
    )
      , o = ue(()=>i.value > -1 && xS(n.params, r.value.params))
      , s = ue(()=>i.value > -1 && i.value === n.matched.length - 1 && Wm(n.params, r.value.params));
    function a(l={}) {
        return FS(l) ? t[G(e.replace) ? "replace" : "push"](G(e.to)).catch(Gi) : Promise.resolve()
    }
    return {
        route: r,
        href: ue(()=>r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: a
    }
}
const US = Ue({
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
    useLink: ld,
    setup(e, {slots: t}) {
        const n = Tt(ld(e))
          , {options: r} = Et(lu)
          , i = ue(()=>({
            [ud(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [ud(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : ut("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, o)
        }
    }
})
  , BS = US;
function FS(e) {
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
        } else if (!mn(i) || i.length !== r.length || r.some((o,s)=>o !== i[s]))
            return !1
    }
    return !0
}
function cd(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const ud = (e,t,n)=>e ?? t ?? n
  , HS = Ue({
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
        const r = Et(Wl)
          , i = ue(()=>e.route || r.value)
          , o = Et(ad, 0)
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
        jr(ad, ue(()=>s.value + 1)),
        jr(NS, a),
        jr(Wl, i);
        const l = le();
        return He(()=>[l.value, a.value, e.name], ([c,u,f],[d,m,_])=>{
            u && (u.instances[f] = c,
            m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !_i(u, m) || !d) && (u.enterCallbacks[f] || []).forEach(b=>b(c))
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
                return fd(n.default, {
                    Component: d,
                    route: c
                });
            const m = f.props[u]
              , _ = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , S = ut(d, Qe({}, _, t, {
                onVnodeUnmounted: g=>{
                    g.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: l
            }));
            return fd(n.default, {
                Component: S,
                route: c
            }) || S
        }
    }
});
function fd(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Zm = HS;
function jS(e) {
    const t = CS(e.routes, e)
      , n = e.parseQuery || MS
      , r = e.stringifyQuery || sd
      , i = e.history
      , o = Vi()
      , s = Vi()
      , a = Vi()
      , l = pn(ln);
    let c = ln;
    ni && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = ja.bind(null, H=>"" + H)
      , f = ja.bind(null, tS)
      , d = ja.bind(null, mo);
    function m(H, te) {
        let Q, $;
        return zm(H) ? (Q = t.getRecordMatcher(H),
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
        if (te = Qe({}, te || l.value),
        typeof H == "string") {
            const v = Ka(n, H, te.path)
              , w = t.resolve({
                path: v.path
            }, te)
              , R = i.createHref(v.fullPath);
            return Qe(v, w, {
                params: d(w.params),
                hash: mo(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let Q;
        if (H.path != null)
            Q = Qe({}, H, {
                path: Ka(n, H.path, te.path).path
            });
        else {
            const v = Qe({}, H.params);
            for (const w in v)
                v[w] == null && delete v[w];
            Q = Qe({}, H, {
                params: f(v)
            }),
            te.params = f(te.params)
        }
        const $ = t.resolve(Q, te)
          , ve = H.hash || "";
        $.params = u(d($.params));
        const Be = iS(r, Qe({}, H, {
            hash: ZT(ve),
            path: $.path
        }))
          , h = i.createHref(Be);
        return Qe({
            fullPath: Be,
            hash: ve,
            query: r === sd ? DS(H.query) : H.query || {}
        }, $, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(H) {
        return typeof H == "string" ? Ka(n, H, l.value.path) : Qe({}, H)
    }
    function p(H, te) {
        if (c !== H)
            return bi(8, {
                from: te,
                to: H
            })
    }
    function y(H) {
        return L(H)
    }
    function T(H) {
        return y(Qe(E(H), {
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
            Qe({
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
          , Be = H.force
          , h = H.replace === !0
          , v = A(Q);
        if (v)
            return L(Qe(E(v), {
                state: typeof v == "object" ? Qe({}, ve, v.state) : ve,
                force: Be,
                replace: h
            }), te || Q);
        const w = Q;
        w.redirectedFrom = te;
        let R;
        return !Be && oS(r, $, Q) && (R = bi(16, {
            to: w,
            from: $
        }),
        ce($, $, !0, !1)),
        (R ? Promise.resolve(R) : D(w, $)).catch(V=>Bn(V) ? Bn(V, 2) ? V : j(V) : B(V, w, $)).then(V=>{
            if (V) {
                if (Bn(V, 2))
                    return L(Qe({
                        replace: h
                    }, E(V.to), {
                        state: typeof V.to == "object" ? Qe({}, ve, V.to.state) : ve,
                        force: Be
                    }), te || w)
            } else
                V = U(w, $, !0, h, ve);
            return x(w, $, V),
            V
        }
        )
    }
    function O(H, te) {
        const Q = p(H, te);
        return Q ? Promise.reject(Q) : Promise.resolve()
    }
    function C(H) {
        const te = ze.values().next().value;
        return te && typeof te.runWithContext == "function" ? te.runWithContext(H) : H()
    }
    function D(H, te) {
        let Q;
        const [$,ve,Be] = KS(H, te);
        Q = Ya($.reverse(), "beforeRouteLeave", H, te);
        for (const v of $)
            v.leaveGuards.forEach(w=>{
                Q.push(cr(w, H, te))
            }
            );
        const h = O.bind(null, H, te);
        return Q.push(h),
        $e(Q).then(()=>{
            Q = [];
            for (const v of o.list())
                Q.push(cr(v, H, te));
            return Q.push(h),
            $e(Q)
        }
        ).then(()=>{
            Q = Ya(ve, "beforeRouteUpdate", H, te);
            for (const v of ve)
                v.updateGuards.forEach(w=>{
                    Q.push(cr(w, H, te))
                }
                );
            return Q.push(h),
            $e(Q)
        }
        ).then(()=>{
            Q = [];
            for (const v of Be)
                if (v.beforeEnter)
                    if (mn(v.beforeEnter))
                        for (const w of v.beforeEnter)
                            Q.push(cr(w, H, te));
                    else
                        Q.push(cr(v.beforeEnter, H, te));
            return Q.push(h),
            $e(Q)
        }
        ).then(()=>(H.matched.forEach(v=>v.enterCallbacks = {}),
        Q = Ya(Be, "beforeRouteEnter", H, te, C),
        Q.push(h),
        $e(Q))).then(()=>{
            Q = [];
            for (const v of s.list())
                Q.push(cr(v, H, te));
            return Q.push(h),
            $e(Q)
        }
        ).catch(v=>Bn(v, 8) ? v : Promise.reject(v))
    }
    function x(H, te, Q) {
        a.list().forEach($=>C(()=>$(H, te, Q)))
    }
    function U(H, te, Q, $, ve) {
        const Be = p(H, te);
        if (Be)
            return Be;
        const h = te === ln
          , v = ni ? history.state : {};
        Q && ($ || h ? i.replace(H.fullPath, Qe({
            scroll: h && v && v.scroll
        }, ve)) : i.push(H.fullPath, ve)),
        l.value = H,
        ce(H, te, Q, h),
        j()
    }
    let Z;
    function W() {
        Z || (Z = i.listen((H,te,Q)=>{
            if (!lt.listening)
                return;
            const $ = g(H)
              , ve = A($);
            if (ve) {
                L(Qe(ve, {
                    replace: !0
                }), $).catch(Gi);
                return
            }
            c = $;
            const Be = l.value;
            ni && hS(Zf(Be.fullPath, Q.delta), ca()),
            D($, Be).catch(h=>Bn(h, 12) ? h : Bn(h, 2) ? (L(h.to, $).then(v=>{
                Bn(v, 20) && !Q.delta && Q.type === go.pop && i.go(-1, !1)
            }
            ).catch(Gi),
            Promise.reject()) : (Q.delta && i.go(-Q.delta, !1),
            B(h, $, Be))).then(h=>{
                h = h || U($, Be, !1),
                h && (Q.delta && !Bn(h, 8) ? i.go(-Q.delta, !1) : Q.type === go.pop && Bn(h, 20) && i.go(-1, !1)),
                x($, Be, h)
            }
            ).catch(Gi)
        }
        ))
    }
    let K = Vi(), N = Vi(), Y;
    function B(H, te, Q) {
        j(H);
        const $ = N.list();
        return $.length ? $.forEach(ve=>ve(H, te, Q)) : console.error(H),
        Promise.reject(H)
    }
    function ae() {
        return Y && l.value !== ln ? Promise.resolve() : new Promise((H,te)=>{
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
        if (!ni || !ve)
            return Promise.resolve();
        const Be = !Q && pS(Zf(H.fullPath, 0)) || ($ || !Q) && history.state && history.state.scroll || null;
        return Yt().then(()=>ve(H, te, Be)).then(h=>h && dS(h)).catch(h=>B(h, H, te))
    }
    const _e = H=>i.go(H);
    let Ye;
    const ze = new Set
      , lt = {
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
            H.component("RouterLink", BS),
            H.component("RouterView", Zm),
            H.config.globalProperties.$router = te,
            Object.defineProperty(H.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>G(l)
            }),
            ni && !Ye && l.value === ln && (Ye = !0,
            y(i.location).catch(ve=>{}
            ));
            const Q = {};
            for (const ve in ln)
                Object.defineProperty(Q, ve, {
                    get: ()=>l.value[ve],
                    enumerable: !0
                });
            H.provide(lu, te),
            H.provide(cu, Oi(Q)),
            H.provide(Wl, l);
            const $ = H.unmount;
            ze.add(H),
            H.unmount = function() {
                ze.delete(H),
                ze.size < 1 && (c = ln,
                Z && Z(),
                Z = null,
                l.value = ln,
                Ye = !1,
                Y = !1),
                $()
            }
        }
    };
    function $e(H) {
        return H.reduce((te,Q)=>te.then(()=>C(Q)), Promise.resolve())
    }
    return lt
}
function KS(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const a = t.matched[s];
        a && (e.matched.find(c=>_i(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(c=>_i(c, l)) || i.push(l))
    }
    return [n, r, i]
}
function YS() {
    return Et(cu)
}
const qS = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Gl = (e,t)=>{
    const n = e.route.matched.find(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && qS(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , WS = (e,t)=>({
    default: ()=>e ? ut(V0, e === !0 ? {} : e, t) : t
});
function uu(e) {
    return Array.isArray(e) ? e : [e]
}
const Ee = null
  , Te = null
  , Se = null
  , Ae = null
  , ke = null
  , we = null
  , Le = null
  , Oe = null
  , Ce = null
  , Re = null
  , Ie = null
  , Pe = null
  , Me = null
  , De = null
  , P = {
    layout: "main"
}
  , M = {
    layout: "main"
}
  , dd = [{
    name: "clicker-airdrop___de",
    path: "/de/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___fr",
    path: "/fr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___de",
    path: "/de/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___fr",
    path: "/fr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___de",
    path: "/de/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___fr",
    path: "/fr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___de",
    path: "/de/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___fr",
    path: "/fr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___de",
    path: "/de/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___fr",
    path: "/fr/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___de",
    path: "/de/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___fr",
    path: "/fr/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___de",
    path: "/de/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___fr",
    path: "/fr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___de",
    path: "/de/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___en",
    path: "/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___es",
    path: "/es/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___fr",
    path: "/fr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___hi",
    path: "/hi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___id",
    path: "/id/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___pt",
    path: "/pt/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___ru",
    path: "/ru/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___th",
    path: "/th/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tl",
    path: "/tl/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tr",
    path: "/tr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___uz",
    path: "/uz/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___vi",
    path: "/vi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js"), __vite__mapDeps([21, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___de",
    path: "/de/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___fr",
    path: "/fr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js"), __vite__mapDeps([22, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___de",
    path: "/de/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___fr",
    path: "/fr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___de",
    path: "/de/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___fr",
    path: "/fr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___de",
    path: "/de/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___fr",
    path: "/fr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CyBz4zSr.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___de",
    path: "/de/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___en",
    path: "/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___es",
    path: "/es/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___fr",
    path: "/fr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___hi",
    path: "/hi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___id",
    path: "/id/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___pt",
    path: "/pt/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___ru",
    path: "/ru/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___th",
    path: "/th/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tl",
    path: "/tl/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tr",
    path: "/tr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___uz",
    path: "/uz/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___vi",
    path: "/vi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CLBp2Z9n.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___de",
    path: "/de/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___en",
    path: "/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___es",
    path: "/es/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___fr",
    path: "/fr/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___hi",
    path: "/hi/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___id",
    path: "/id/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___pt",
    path: "/pt/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___ru",
    path: "/ru/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___th",
    path: "/th/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tl",
    path: "/tl/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tr",
    path: "/tr/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___uz",
    path: "/uz/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___vi",
    path: "/vi/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js"), __vite__mapDeps([25, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___de",
    path: (P == null ? void 0 : P.path) ?? "/de",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___en",
    path: (P == null ? void 0 : P.path) ?? "/",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___es",
    path: (P == null ? void 0 : P.path) ?? "/es",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___fr",
    path: (P == null ? void 0 : P.path) ?? "/fr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___hi",
    path: (P == null ? void 0 : P.path) ?? "/hi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___id",
    path: (P == null ? void 0 : P.path) ?? "/id",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___pt",
    path: (P == null ? void 0 : P.path) ?? "/pt",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___ru",
    path: (P == null ? void 0 : P.path) ?? "/ru",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___th",
    path: (P == null ? void 0 : P.path) ?? "/th",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tl",
    path: (P == null ? void 0 : P.path) ?? "/tl",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tr",
    path: (P == null ? void 0 : P.path) ?? "/tr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___uz",
    path: (P == null ? void 0 : P.path) ?? "/uz",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___vi",
    path: (P == null ? void 0 : P.path) ?? "/vi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js"), __vite__mapDeps([26, 27, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___de",
    path: (M == null ? void 0 : M.path) ?? "/de/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___en",
    path: (M == null ? void 0 : M.path) ?? "/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___es",
    path: (M == null ? void 0 : M.path) ?? "/es/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___fr",
    path: (M == null ? void 0 : M.path) ?? "/fr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___hi",
    path: (M == null ? void 0 : M.path) ?? "/hi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___id",
    path: (M == null ? void 0 : M.path) ?? "/id/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___pt",
    path: (M == null ? void 0 : M.path) ?? "/pt/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___ru",
    path: (M == null ? void 0 : M.path) ?? "/ru/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___th",
    path: (M == null ? void 0 : M.path) ?? "/th/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tl",
    path: (M == null ? void 0 : M.path) ?? "/tl/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tr",
    path: (M == null ? void 0 : M.path) ?? "/tr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___uz",
    path: (M == null ? void 0 : M.path) ?? "/uz/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___vi",
    path: (M == null ? void 0 : M.path) ?? "/vi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js"), __vite__mapDeps([28, 27]), import.meta.url).then(e=>e.default || e)
}]
  , $m = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? ut(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function hd(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function GS(e, t) {
    return e === t || t === ln ? !1 : hd(e) !== hd(t) ? !0 : !e.matched.every((r,i)=>{
        var o, s;
        return r.components && r.components.default === ((s = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    )
}
const JS = {
    scrollBehavior(e, t, n) {
        var c;
        const r = re()
          , i = ((c = Wt().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && s !== !1 && GS(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: pd(e.hash),
                behavior: i
            } : !1;
        const a = u=>!!(u.meta.pageTransition ?? Kl)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: pd(e.hash),
                    behavior: i
                }),
                u(o)
            }
            )
        }
        )
    }
};
function pd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const zS = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , Ht = {
    ...zS,
    ...JS
}
  , QS = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = re()
      , i = Wt();
    if (([t,n] = wn(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = aa({
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
                await r.runWithContext(()=>oi(s)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
;
var XS = Object.defineProperty
  , ZS = Object.defineProperties
  , $S = Object.getOwnPropertyDescriptors
  , md = Object.getOwnPropertySymbols
  , eA = Object.prototype.hasOwnProperty
  , tA = Object.prototype.propertyIsEnumerable
  , gd = (e,t,n)=>t in e ? XS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , de = (e,t)=>{
    for (var n in t || (t = {}))
        eA.call(t, n) && gd(e, n, t[n]);
    if (md)
        for (var n of md(t))
            tA.call(t, n) && gd(e, n, t[n]);
    return e
}
  , rt = (e,t)=>ZS(e, $S(t));
const cn = "Notivue__"
  , nA = 6e3
  , Ke = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    PROMISE: "promise",
    PROMISE_RESOLVE: "promise-resolve",
    PROMISE_REJECT: "promise-reject"
}
  , yo = {
    title: "",
    message: "",
    duration: nA,
    ariaLive: "polite",
    ariaRole: "status"
}
  , Jl = rt(de({}, yo), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , rA = rt(de({}, yo), {
    duration: 1 / 0
})
  , iA = rt(de({}, Jl), {
    ariaLive: "polite"
})
  , oA = de({}, yo)
  , sA = {
    [Ke.SUCCESS]: yo,
    [Ke.ERROR]: Jl,
    [Ke.WARNING]: iA,
    [Ke.INFO]: oA,
    [Ke.PROMISE]: rA,
    [Ke.PROMISE_RESOLVE]: yo,
    [Ke.PROMISE_REJECT]: Jl
}
  , eg = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: sA,
    limit: 1 / 0,
    animations: {
        enter: cn + "enter",
        leave: cn + "leave",
        clearAll: cn + "clearAll"
    }
}
  , Cn = lA();
function aA(e) {
    Object.assign(Cn, e)
}
function tg(e) {
    let t = 0;
    function n(r, i, o=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(rt(de({}, r), {
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
        success: r=>n(r, Ke.SUCCESS),
        error: r=>n(r, Ke.ERROR),
        warning: r=>n(r, Ke.WARNING),
        info: r=>n(r, Ke.INFO),
        promise: r=>{
            const {id: i, clear: o, destroy: s} = n(r, Ke.PROMISE);
            return {
                resolve: a=>n(a, Ke.PROMISE_RESOLVE, i),
                reject: a=>n(a, Ke.PROMISE_REJECT, i),
                success: a=>n(a, Ke.PROMISE_RESOLVE, i),
                error: a=>n(a, Ke.PROMISE_REJECT, i),
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
function lA() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return tg(e)
}
function cA(e) {
    He(e.config.isTopAlign, ()=>{
        e.animations.updatePositions({
            isImmediate: !0
        })
    }
    , {
        flush: "post"
    }),
    He(()=>e.items.length, ()=>{
        e.animations.updatePositions()
    }
    , {
        flush: "post"
    }),
    He(()=>e.items.length === 0 && e.queue.length === 0, t=>{
        t && (e.timeouts.reset(),
        e.elements.setRootAttrs({}))
    }
    , {
        flush: "post"
    }),
    He(()=>e.config.animations.value.enter, (t,n)=>{
        t !== n && e.animations.resetTransitionData()
    }
    )
}
const uA = typeof window > "u";
function ur(e) {
    return e.pointerType === "mouse"
}
function fu(e, t) {
    const n = de({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (dA(t[r]) ? n[r] = fu(e[r], t[r]) : n[r] = t[r]);
    return n
}
function fA(e, t) {
    return t.props || (t.props = {}),
    de(de(de(de({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function dA(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function hA(e, t) {
    return Fc(Tt(fu(e, t)))
}
function pA(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>rt(de({}, t), {
        [n]: Ne(r)
    }), {})
}
const mA = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function ng(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!mA.includes(t)))
}
function rg(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function gA(e) {
    const t = hA(eg, e)
      , n = ue(()=>t.position.value.startsWith("top"));
    function r(i) {
        typeof i == "function" && (i = i(pA(t)));
        for (const o of Object.keys(i))
            typeof t[o].value == "object" ? t[o].value = fu(t[o].value, i[o]) : t[o].value = i[o]
    }
    return rt(de({}, t), {
        isTopAlign: n,
        update: r
    })
}
function yA() {
    return {
        entries: pn([]),
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
            gp(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function vA(e, t) {
    return {
        entries: pn([]),
        get length() {
            return this.entries.value.length
        },
        add(n) {
            this.entries.value.unshift(n),
            this.triggerRef()
        },
        addFromQueue() {
            const n = rt(de({}, t.entries.value[0]), {
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
            gp(this.entries)
        },
        updateAll(n) {
            this.entries.value = this.entries.value.map(n)
        },
        remove(n) {
            this.entries.value = this.entries.value.filter(r=>r.id !== n),
            t.length > 0 && this.length < e.limit.value && Yt(()=>this.addFromQueue())
        },
        clear() {
            this.entries.value = [],
            t.clear()
        }
    }
}
function _A() {
    return {
        root: le(null),
        rootAttrs: pn({}),
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
function bA(e, t, n) {
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
                (c = s == null ? void 0 : s[o ? "onManualClear" : "onAutoClear"]) == null || c.call(s, ng(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || i || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: rt(de({}, s.positionStyles), {
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
function EA(e, t) {
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
                rt(de({}, n), {
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
                n.timeout ? rt(de({}, n), {
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
function TA({config: e, items: t, queue: n, animations: r, timeouts: i}) {
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
              , a = fA(e.notifications.value, o)
              , l = ()=>i.create(a.id, a.duration);
            if ([Ke.PROMISE_RESOLVE, Ke.PROMISE_REJECT].includes(o.type))
                n.get(a.id) ? (n.update(a.id, rt(de({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, rt(de({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const c = e.enqueue.value
                  , u = t.length >= e.limit.value;
                !c && u && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>i.create(m, 1));
                const f = c && !o.skipQueue && u
                  , d = rt(de({}, a), {
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
const ig = Symbol("");
function SA(e={}) {
    const t = gA(e)
      , n = yA()
      , r = vA(t, n)
      , i = _A()
      , o = bA(t, r, i)
      , s = EA(r, o)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: i,
        animations: o,
        timeouts: s
    }
      , l = TA(a)
      , c = Object.freeze(tg(l));
    return aA(c),
    cA(a),
    {
        install(u) {
            u.config.globalProperties.$push = c,
            u.provide(ig, a)
        }
    }
}
function Tr() {
    return Et(ig)
}
function AA() {
    return uA ? rt(de({}, Fc(Tt(eg))), {
        isTopAlign: ue(()=>!0),
        update: ()=>{}
    }) : Tr().config
}
const og = {
    listAriaLabel: "Notifications"
}
  , kA = Ue({
    setup(e, {slots: t, attrs: n}) {
        const r = le(!1);
        return It(()=>r.value = !0),
        ()=>{
            var i;
            return r.value ? (i = t.default) == null ? void 0 : i.call(t) : We("span", n, "")
        }
    }
})
  , wA = ["role", "aria-live"]
  , LA = Ue({
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
        return (r,i)=>(me(),
        We("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, zt(G(rg)(t.item)), 9, wA))
    }
});
function OA() {
    const {timeouts: e, config: t} = Tr();
    function n(i) {
        ur(i) && e.pause()
    }
    function r(i) {
        ur(i) && e.resume()
    }
    return ue(()=>t.pauseOnHover.value && !e.isStreamFocused.value ? {
        onPointerenter: n,
        onPointerleave: r
    } : {})
}
function CA() {
    const {timeouts: e, config: t} = Tr();
    function n(r) {
        ur(r) || (e.clearDebounceTimeout(),
        e.pause(),
        e.resumeWithDebounce(2e3))
    }
    return yn(()=>{
        e.clearDebounceTimeout()
    }
    ),
    ue(()=>t.pauseOnTouch.value && !e.isStreamFocused.value ? {
        onPointerdown: n
    } : {})
}
const qa = {
    boxSizing: "border-box"
}
  , Wa = {
    list: rt(de({}, qa), {
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
    listItem: rt(de({}, qa), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: rt(de({}, qa), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function RA() {
    const {isTopAlign: e, position: t} = AA()
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
        list: de(de({}, Wa.list), n.value),
        listItem: de(de({}, Wa.listItem), r.value),
        itemContainer: Wa.itemContainer
    }))
}
function IA(e) {
    function t() {
        window.matchMedia("(max-width: 1100px)").matches && e()
    }
    It(()=>{
        window.addEventListener("resize", t)
    }
    ),
    yn(()=>{
        window.removeEventListener("resize", t)
    }
    )
}
function PA(e, t) {
    let n;
    const r = new Set;
    It(()=>{
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
    He(e, i=>{
        i.length > 0 && i.forEach(o=>n == null ? void 0 : n.observe(o))
    }
    , {
        flush: "post"
    }),
    yn(()=>{
        n == null || n.disconnect()
    }
    )
}
function MA() {
    const {elements: e, animations: t} = Tr();
    IA(()=>t.updatePositions({
        isImmediate: !0
    })),
    PA(e.items.value, ()=>t.updatePositions())
}
function DA() {
    const {items: e, config: t, timeouts: n} = Tr();
    function r() {
        n.isStreamFocused.value || (document.visibilityState === "visible" ? t.pauseOnTabChange.value && n.resume() : t.pauseOnTabChange.value ? n.pause() : e.clear())
    }
    It(()=>{
        document.addEventListener("visibilitychange", r)
    }
    ),
    yn(()=>{
        document.removeEventListener("visibilitychange", r)
    }
    )
}
function NA() {
    const {animations: e} = Tr()
      , t = window.matchMedia("(prefers-reduced-motion: reduce)")
      , n = ()=>e.setReducedMotion(t.matches);
    It(()=>{
        var r;
        n(),
        (r = t.addEventListener) == null || r.call(t, "change", n)
    }
    ),
    yn(()=>{
        var r;
        (r = t.removeEventListener) == null || r.call(t, "change", n)
    }
    )
}
const VA = ["data-notivue-align", "aria-label"]
  , UA = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , BA = ["aria-label", "tabindex", "data-notivue-container"]
  , FA = Ue({
    __name: "NotivueImpl",
    props: ta({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, og),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: i} = Tr()
          , o = RA()
          , s = OA()
          , a = CA();
        return NA(),
        DA(),
        MA(),
        (l,c)=>{
            var u;
            return me(),
            vt(m_, {
                to: G(n).teleportTo.value === !1 ? void 0 : G(n).teleportTo.value,
                disabled: G(n).teleportTo.value === !1
            }, [G(r).length > 0 ? (me(),
            We("ol", vi({
                key: 0
            }, de(de(de({}, G(s)), G(a)), G(i).rootAttrs.value), {
                "data-notivue-align": G(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: G(i).root,
                class: t.class,
                style: de(de({}, G(o).list), (u = t.styles) == null ? void 0 : u.list)
            }), [(me(!0),
            We(pt, null, K0(G(r).entries.value, (f,d)=>{
                var m, _, b, S;
                return me(),
                We("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": G(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: G(i).items,
                    style: On(de(de(de({}, G(o).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (me(),
                vt(LA, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (me(),
                We("div", vi({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": G(rg)(f),
                    tabindex: (b = (_ = l.containersTabIndex) == null ? void 0 : _[f.id]) != null ? b : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: G(i).containers,
                    style: de(de({}, G(o).itemContainer), (S = t.styles) == null ? void 0 : S.itemContainer)
                }), [br(l.$slots, "default", rn(qt(G(ng)(f))))], 16, BA))], 12, UA)
            }
            ), 128))], 16, VA)) : Kt("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , NM = Ue({
    __name: "Notivue",
    props: ta({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, og),
    setup(e) {
        const t = e;
        return (n,r)=>(me(),
        vt(G(kA), null, {
            default: on(()=>[Ze(FA, rn(qt(t)), {
                default: on(i=>[br(n.$slots, "default", rn(qt(i)))]),
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
  , HA = 300
  , Ga = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , VM = Ue({
    __name: "NotivueSwipe",
    props: ta({
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
        const {items: t, timeouts: n, elements: r, animations: i} = Tr()
          , o = e
          , s = ii(o, "touchOnly")
          , a = ii(o, "exclude")
          , l = ii(o, "disabled")
          , c = ii(o, "threshold")
          , u = ue(()=>o.item.type === Ke.PROMISE)
          , f = ue(()=>!n.isStreamFocused.value && !l.value && !u.value && o.item.duration < 1 / 0)
          , d = le(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , _ = Oi(m)
          , b = pn({});
        function S(j) {
            Object.assign(_, j)
        }
        function g(j) {
            b.value = de(de({}, b.value), j)
        }
        function E() {
            b.value = {}
        }
        He(()=>t.length, (j,ce)=>{
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
                transition: i.isReducedMotion.value ? "none" : `${HA}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function L(j) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ce, offsetLeft: _e} = d.value
              , Ye = _e + r.root.value.offsetLeft
              , ze = Ye + ce;
            return j.clientX > Ye && j.clientX < ze
        }
        function O(j) {
            return ur(j) ? Ga.Mouse : Ga.Touch
        }
        function C() {
            n.clearDebounceTimeout(),
            n.pause()
        }
        function D(j) {
            n.clearDebounceTimeout(),
            n.resumeWithDebounce(j)
        }
        function x(j) {
            T(j) || y()
        }
        function U(j) {
            if (T(j) && (j.stopPropagation(),
            !!d.value && j.button === 0 && !(_.isPressed || _.isClearing))) {
                if (a.value && Array.from(d.value.querySelectorAll(a.value)).includes(j.target)) {
                    ur(j) || (C(),
                    D(Ga.TouchExternal));
                    return
                }
                ur(j) || C(),
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
            ur(j) && L(j)) {
                const ce = r.getSortedItems();
                ce[ce.length - 1].contains(d.value) || C()
            } else
                D(O(j));
            S({
                isClearing: !1
            })
        }
        function K(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (ur(j) && L(j) ? C() : D(O(j)),
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
            D(O(j))))
        }
        const Y = [["pointerenter", x], ["pointerdown", U], ["pointermove", Z], ["pointerup", K], ["pointerleave", N]];
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
        return He(f, (j,ce,_e)=>{
            Yt(()=>{
                j && (p(),
                Yt(B))
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
        yn(ae),
        (j,ce)=>l.value ? br(j.$slots, "default", {
            key: 1
        }) : (me(),
        We("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: On(b.value)
        }, [br(j.$slots, "default")], 4))
    }
})
  , jA = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , KA = [jA]
  , yd = Ue({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(Ii))), KA, 16))
    }
})
  , YA = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , qA = [YA]
  , Ja = Ue({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(Ii))), qA, 16))
    }
})
  , WA = ge("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , GA = [WA]
  , JA = Ue({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(Ii))), GA, 16))
    }
})
  , zA = ge("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , QA = ge("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , XA = [zA, QA]
  , vd = Ue({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(Ii))), XA, 16))
    }
})
  , ZA = ge("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , $A = ge("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , ek = ge("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , tk = [ZA, $A, ek]
  , za = Ue({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(Ii))), tk, 16))
    }
})
  , nk = ge("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , rk = ge("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , ik = ge("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , ok = [nk, rk, ik]
  , sk = Ue({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(Ii))), ok, 16))
    }
})
  , ak = ge("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , lk = ge("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , ck = [ak, lk]
  , sg = Ue({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(rt(de({}, G(du)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), ck, 16))
    }
})
  , uk = ge("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , fk = ge("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , dk = [uk, fk]
  , ag = Ue({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(me(),
        We("svg", rn(qt(G(hk))), dk, 16))
    }
})
  , du = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , Ii = rt(de({}, du), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , hk = rt(de({}, du), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , pk = {
    [Ke.SUCCESS]: dt(yd),
    [Ke.ERROR]: dt(Ja),
    [Ke.INFO]: dt(JA),
    [Ke.WARNING]: dt(Ja),
    [Ke.PROMISE]: dt(sg),
    [Ke.PROMISE_RESOLVE]: dt(yd),
    [Ke.PROMISE_REJECT]: dt(Ja),
    close: dt(ag)
};
Ke.SUCCESS + "",
dt(vd),
Ke.ERROR + "",
dt(za),
Ke.INFO + "",
dt(sk),
Ke.WARNING + "",
dt(za),
Ke.PROMISE + "",
dt(sg),
Ke.PROMISE_RESOLVE + "",
dt(vd),
Ke.PROMISE_REJECT + "",
dt(za),
dt(ag);
const Uo = {
    "--nv-width": "350px",
    "--nv-spacing": "0.625rem",
    "--nv-radius": "0.625rem",
    "--nv-icon-size": "1.25rem",
    "--nv-title-size": "0.925rem",
    "--nv-message-size": "0.925rem",
    "--nv-tip-width": "0px",
    "--nv-y-align": "center"
}
  , hu = {
    "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
}
  , mk = rt(de(de({}, Uo), hu), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
rt(de(de({}, Uo), hu), {
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
rt(de(de({}, Uo), hu), {
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
rt(de({}, Uo), {
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
const UM = rt(de({}, Uo), {
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
  , Fn = {
    NOTIFICATION: cn + "notification",
    ICON: cn + "icon",
    CONTENT: cn + "content",
    TITLE: cn + "content-title",
    MESSAGE: cn + "content-message",
    CLOSE: cn + "close",
    CLOSE_ICON: cn + "close-icon",
    TRANSITION: cn + "transition"
}
  , gk = {
    icons: ()=>pk,
    theme: ()=>mk,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , yk = ["data-notivue", "data-notivue-has-title"]
  , vk = ["aria-live", "role"]
  , _k = ["textContent"]
  , bk = ["textContent"]
  , Ek = ["aria-label"]
  , Tk = ["textContent"]
  , BM = Ue({
    __name: "Notifications",
    props: ta({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, gk),
    setup(e) {
        const t = e
          , n = pn(t.icons[t.item.type])
          , r = t.icons.close;
        return He(()=>t.item.type, i=>n.value = t.icons[i], {
            flush: "sync"
        }),
        (i,o)=>(me(),
        We("div", {
            class: Ct(G(Fn).NOTIFICATION),
            "data-notivue": i.item.type,
            "data-notivue-has-title": !!i.item.title,
            style: On(i.theme)
        }, [n.value ? (me(),
        We(pt, {
            key: 0
        }, [typeof n.value == "object" ? (me(),
        vt(Po, {
            key: 0,
            name: G(Fn).TRANSITION,
            mode: "out-in"
        }, {
            default: on(()=>[typeof n.value == "object" ? (me(),
            vt(yl(n.value), {
                key: 0,
                class: Ct(G(Fn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : Kt("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (me(),
        We("div", {
            key: 1,
            class: Ct(G(Fn).ICON),
            "aria-hidden": "true"
        }, zt(n.value), 3)) : Kt("", !0)], 64)) : Kt("", !0), ge("div", {
            class: Ct(G(Fn).CONTENT),
            "aria-live": i.item.ariaLive,
            role: i.item.ariaRole,
            "aria-atomic": "true"
        }, [i.item.title ? (me(),
        We("h3", {
            key: 0,
            class: Ct(G(Fn).TITLE),
            textContent: zt(G(i.item.title))
        }, null, 10, _k)) : Kt("", !0), ge("p", {
            class: Ct(G(Fn).MESSAGE),
            textContent: zt(G(i.item.message))
        }, null, 10, bk)], 10, vk), !t.hideClose && G(r) && i.item.type !== "promise" ? (me(),
        We("button", {
            key: 1,
            class: Ct(G(Fn).CLOSE),
            "aria-label": i.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: o[0] || (o[0] = (...s)=>i.item.clear && i.item.clear(...s))
        }, [typeof G(r) == "object" ? (me(),
        vt(yl(G(r)), {
            key: 0,
            class: Ct(G(Fn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof G(r) == "string" ? (me(),
        We("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: zt(G(r))
        }, null, 8, Tk)) : Kt("", !0)], 10, Ek)) : Kt("", !0)], 14, yk))
    }
})
  , et = {
    get: Ui("GET"),
    post: Ui("POST"),
    patch: Ui("PATCH"),
    put: Ui("PUT"),
    delete: Ui("DELETE")
};
function Ui(e) {
    return async(t,n,r={})=>{
        const i = jn()
          , o = i.token
          , s = Gn();
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
const Sk = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let lg;
const Bo = e=>lg = e
  , cg = Symbol();
function zl(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var zi;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(zi || (zi = {}));
function Ak() {
    const e = Co(!0)
      , t = e.run(()=>le({}));
    let n = []
      , r = [];
    const i = dt({
        install(o) {
            Bo(i),
            i._a = o,
            o.provide(cg, i),
            o.config.globalProperties.$pinia = i,
            r.forEach(s=>n.push(s)),
            r = []
        },
        use(o) {
            return !this._a && !Sk ? r.push(o) : n.push(o),
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
const ug = ()=>{}
;
function _d(e, t, n, r=ug) {
    e.push(t);
    const i = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && Ro() && zs(i),
    i
}
function $r(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const kk = e=>e();
function Ql(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        zl(i) && zl(r) && e.hasOwnProperty(n) && !at(r) && !mr(r) ? e[n] = Ql(i, r) : e[n] = r
    }
    return e
}
const wk = Symbol();
function Lk(e) {
    return !zl(e) || !e.hasOwnProperty(wk)
}
const {assign: nr} = Object;
function Ok(e) {
    return !!(at(e) && e.effect)
}
function Ck(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = i ? i() : {});
        const u = Fc(n.state.value[e]);
        return nr(u, o, Object.keys(s || {}).reduce((f,d)=>(f[d] = dt(ue(()=>{
            Bo(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = fg(e, c, t, n, r, !0),
    l
}
function fg(e, t, n={}, r, i, o) {
    let s;
    const a = nr({
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
    function S(O) {
        let C;
        c = u = !1,
        typeof O == "function" ? (O(r.state.value[e]),
        C = {
            type: zi.patchFunction,
            storeId: e,
            events: m
        }) : (Ql(r.state.value[e], O),
        C = {
            type: zi.patchObject,
            payload: O,
            storeId: e,
            events: m
        });
        const D = b = Symbol();
        Yt().then(()=>{
            b === D && (c = !0)
        }
        ),
        u = !0,
        $r(f, C, r.state.value[e])
    }
    const g = o ? function() {
        const {state: C} = n
          , D = C ? C() : {};
        this.$patch(x=>{
            nr(x, D)
        }
        )
    }
    : ug;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(O, C) {
        return function() {
            Bo(r);
            const D = Array.from(arguments)
              , x = []
              , U = [];
            function Z(N) {
                x.push(N)
            }
            function W(N) {
                U.push(N)
            }
            $r(d, {
                args: D,
                name: O,
                store: T,
                after: Z,
                onError: W
            });
            let K;
            try {
                K = C.apply(this && this.$id === e ? this : T, D)
            } catch (N) {
                throw $r(U, N),
                N
            }
            return K instanceof Promise ? K.then(N=>($r(x, N),
            N)).catch(N=>($r(U, N),
            Promise.reject(N))) : ($r(x, K),
            K)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: _d.bind(null, d),
        $patch: S,
        $reset: g,
        $subscribe(O, C={}) {
            const D = _d(f, O, C.detached, ()=>x())
              , x = s.run(()=>He(()=>r.state.value[e], U=>{
                (C.flush === "sync" ? u : c) && O({
                    storeId: e,
                    type: zi.direct,
                    events: m
                }, U)
            }
            , nr({}, l, C)));
            return D
        },
        $dispose: E
    }
      , T = Tt(y);
    r._s.set(e, T);
    const L = (r._a && r._a.runWithContext || kk)(()=>r._e.run(()=>(s = Co()).run(t)));
    for (const O in L) {
        const C = L[O];
        if (at(C) && !Ok(C) || mr(C))
            o || (_ && Lk(C) && (at(C) ? C.value = _[O] : Ql(C, _[O])),
            r.state.value[e][O] = C);
        else if (typeof C == "function") {
            const D = p(O, C);
            L[O] = D,
            a.actions[O] = C
        }
    }
    return nr(T, L),
    nr(Ne(T), L),
    Object.defineProperty(T, "$state", {
        get: ()=>r.state.value[e],
        set: O=>{
            S(C=>{
                nr(C, O)
            }
            )
        }
    }),
    r._p.forEach(O=>{
        nr(T, s.run(()=>O({
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
function Vn(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(a, l) {
        const c = Qc();
        return a = a || (c ? Et(cg, null) : null),
        a && Bo(a),
        a = lg,
        a._s.has(r) || (o ? fg(r, t, i, a) : Ck(r, i, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
class Hi extends Error {
}
Hi.prototype.name = "InvalidTokenError";
function Rk(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function Ik(e) {
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
        return Rk(t)
    } catch {
        return atob(t)
    }
}
function bd(e, t) {
    if (typeof e != "string")
        throw new Hi("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new Hi(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = Ik(r)
    } catch (o) {
        throw new Hi(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new Hi(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
var pe = (e=>(e.SYNC_TAPS = "hk_sync_taps",
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
e.HAMSTER_YOUTUBE_EASY_START_S1E29 = "hamster_youtube_easy_start_s1e29",
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
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13 = "hamster_youtube_local_video_e13",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14 = "hamster_youtube_local_video_e14",
e))(pe || {})
  , Jt = (e=>(e[e.BALANCE_ANIMATION_SPEED = 50] = "BALANCE_ANIMATION_SPEED",
e[e.CALC_INTERVAL = 1e3] = "CALC_INTERVAL",
e[e.SYNC_INTERVAL = 36e5] = "SYNC_INTERVAL",
e[e.TAP_INTERVAL = 3e3] = "TAP_INTERVAL",
e[e.REFERRAL_REFRESH_TIME = 60] = "REFERRAL_REFRESH_TIME",
e.GAME_NAME = "Hamster Kombat",
e.DEFAULT_EXCHANGE = "hamster",
e))(Jt || {})
  , Pk = (e=>(e.REPEATEDLY = "Repeatedly",
e.ONCE = "Once",
e))(Pk || {})
  , Xl = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(Xl || {})
  , Mk = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(Mk || {})
  , Dk = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Web3 = "Web3",
e.Legal = "Legal",
e))(Dk || {})
  , Nk = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
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
e.adv_integration_2607 = "adv_integration_2607",
e.welcome_to_ogames = "welcome_to_ogames",
e.hodl_btc_100k = "hodl_btc_100k",
e.this_is_fine = "this_is_fine",
e.ethereum_bd = "ethereum_bd",
e))(Nk || {})
  , Vk = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(Vk || {})
  , Uk = (e=>(e[e.Bronze = 1] = "Bronze",
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
e))(Uk || {})
  , Bk = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(Bk || {})
  , Fk = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(Fk || {})
  , xk = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
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
e.HAMSTER_YOUTUBE_EASY_START_S1E29 = "hamster_youtube_easy_start_s1e29",
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
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13 = "hamster_youtube_local_video_e13",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14 = "hamster_youtube_local_video_e14",
e))(xk || {})
  , Hk = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.CONNECT_TON_WALLET = "airdrop_connect_ton_wallet",
e.INVITE_FRIENDS = "invite_friends",
e.REACH_PROFIT_PER_HOUR = "reach_profit_per_hour",
e.REACH_LEVEL = "reach_level",
e))(Hk || {})
  , jk = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(jk || {})
  , Kk = (e=>(e.BINGX = "bingx",
e))(Kk || {})
  , Fo = (e=>(e.LANDING = "/",
e.PRIVACY_POLICY = "/privacy-policy",
e.GAME_INDEX = "/clicker",
e.GAME_FRIENDS = "/clicker/friends",
e.GAME_AIRDROP = "/clicker/airdrop",
e.GAME_BOOST = "/clicker/boost",
e.GAME_EARN = "/clicker/earn",
e.GAME_PLAYGROUND = "/clicker/playground",
e.GAME_MINE = "/clicker/mine",
e.GAME_LEAGUE = "/clicker/league",
e.GAME_SETTINGS = "/clicker/settings",
e.GAME_SETTINGS_BINGX = "/clicker/settings/bingx",
e.GAME_SETTINGS_EXCHANGE = "/clicker/settings/exchange",
e.GAME_SETTINGS_LANGUAGE = "/clicker/settings/language",
e.GAME_USER = "/clicker/user",
e.GAME_USER_AVATAR = "/clicker/user/avatar",
e))(Fo || {})
  , dg = (e=>(e.ONBOARDING_START = "onboarding_start",
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
e))(dg || {})
  , Dr = (e=>(e.Dot = ".",
e.Dash = "-",
e.SymbolSeparator = "/",
e))(Dr || {});
const Yk = {
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
  , jn = Vn("auth", {
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
        token: localStorage.getItem(pe.AUTH_TOKEN) ?? null,
        location: {}
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(pe.AUTH_TOKEN)
        },
        isExpiredToken(e) {
            if (e && bd(e)) {
                const t = bd(e).exp;
                return new Date().getTime() > t * 1e3
            }
            return !1
        },
        logout(e=!0) {
            this.authenticated = !1,
            this.token = null,
            localStorage.removeItem(pe.AUTH_TOKEN),
            localStorage.removeItem(pe.SYNC_AVAILABLE_TAPS),
            localStorage.removeItem(pe.SYNC_TIMESTAMP_TAPS),
            localStorage.removeItem(pe.SYNC_TAPS),
            localStorage.removeItem(pe.AIRDROP_TASKS),
            localStorage.removeItem(pe.EARN_TASKS),
            localStorage.removeItem(pe.SETTINGS),
            localStorage.removeItem(pe.SUBSCRIBE_YOUTUBE),
            localStorage.removeItem(pe.SUBSCRIBE_DISCORD),
            localStorage.removeItem(pe.SUBSCRIBE_MEDIUM),
            localStorage.removeItem(pe.HAMSTER_DROP),
            localStorage.removeItem(pe.SUBSCRIBE_TELEGRAM_CRYPTOFAM),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_ACADEMY),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E23),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E24),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E25),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E26),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E27),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E28),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_EASY_START_S1E29),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13),
            localStorage.removeItem(pe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14),
            localStorage.removeItem("ton-connect-storage_bridge-connection"),
            localStorage.removeItem("ton-connect-ui_last-selected-wallet-info"),
            e && (Vo(Fo.GAME_INDEX),
            setTimeout(()=>{
                window.location.reload()
            }
            , 500))
        },
        async postGetMe() {
            return await et.post("/auth/account-info", {}).then(e=>{
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
            return await et.post("/auth/auth-by-telegram-webapp", {
                body: e
            }).then(t=>{
                if (t.authToken) {
                    const n = t.authToken;
                    localStorage.setItem(pe.AUTH_TOKEN, n),
                    this.setToken(n)
                }
                return t
            }
            )
        },
        async postWebappConflict(e) {
            return await et.post("/auth/telegram-webapp-conflict", {
                body: e
            }).then(t=>t)
        },
        async postAddReferral(e) {
            return await et.post("/clicker/add-referral", {
                body: {
                    authUserId: String(e)
                }
            }).then(t=>t)
        },
        async postAvatarGet() {
            return await et.post("/auth/get-avatar", {
                body: {}
            }).then(e=>(console.log(e),
            e))
        },
        async postDeleteMe() {
            return await et.post("/clicker/delete-me", {
                body: {}
            }).then(e=>e)
        },
        async getLocationData() {
            return await et.get("/ip", {}).then(e=>{
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
  , Ut = window.setInterval;
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ds = typeof window < "u"
  , Sr = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , qk = (e,t,n)=>Wk({
    l: e,
    k: t,
    s: n
})
  , Wk = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , bt = e=>typeof e == "number" && isFinite(e)
  , Gk = e=>pg(e) === "[object Date]"
  , Ns = e=>pg(e) === "[object RegExp]"
  , ua = e=>xe(e) && Object.keys(e).length === 0
  , ft = Object.assign;
let Ed;
const pu = ()=>Ed || (Ed = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Td(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Jk = Object.prototype.hasOwnProperty;
function Vs(e, t) {
    return Jk.call(e, t)
}
const ct = Array.isArray
  , Xe = e=>typeof e == "function"
  , ne = e=>typeof e == "string"
  , st = e=>typeof e == "boolean"
  , zk = e=>typeof e == "symbol"
  , Ve = e=>e !== null && typeof e == "object"
  , Qk = e=>Ve(e) && Xe(e.then) && Xe(e.catch)
  , hg = Object.prototype.toString
  , pg = e=>hg.call(e)
  , xe = e=>{
    if (!Ve(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Xk = e=>e == null ? "" : ct(e) || xe(e) && e.toString === hg ? JSON.stringify(e, null, 2) : String(e);
function mu(e, t="") {
    return e.reduce((n,r,i)=>i === 0 ? n + r : n + t + r, "")
}
function gu(e) {
    let t = e;
    return ()=>++t
}
function Zk(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const os = e=>!Ve(e) || ct(e);
function Kr(e, t) {
    if (os(e) || os(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: i} = n.pop();
        Object.keys(r).forEach(o=>{
            os(r[o]) || os(i[o]) ? i[o] = r[o] : n.push({
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
function $k(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function Zl(e, t, n) {
    const r = {
        start: e,
        end: t
    };
    return n != null && (r.source = n),
    r
}
const Ge = {
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
function fa(e, t, n={}) {
    const {domain: r, messages: i, args: o} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function ew(e) {
    throw e
}
const xn = " "
  , tw = "\r"
  , Ot = `
`
  , nw = "\u2028"
  , rw = "\u2029";
function iw(e) {
    const t = e;
    let n = 0
      , r = 1
      , i = 1
      , o = 0;
    const s = L=>t[L] === tw && t[L + 1] === Ot
      , a = L=>t[L] === Ot
      , l = L=>t[L] === rw
      , c = L=>t[L] === nw
      , u = L=>s(L) || a(L) || l(L) || c(L)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>i
      , _ = ()=>o
      , b = L=>s(L) || l(L) || c(L) ? Ot : t[L]
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
const er = void 0
  , ow = "."
  , Sd = "'"
  , sw = "tokenizer";
function aw(e, t={}) {
    const n = t.location !== !1
      , r = iw(e)
      , i = ()=>r.index()
      , o = ()=>$k(r.line(), r.column(), r.index())
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
    function f(h, v, w, ...R) {
        const V = c();
        if (v.column += w,
        v.offset += w,
        u) {
            const q = n ? Zl(V.startLoc, v) : null
              , X = fa(h, q, {
                domain: sw,
                args: R
            });
            u(X)
        }
    }
    function d(h, v, w) {
        h.endLoc = o(),
        h.currentType = v;
        const R = {
            type: v
        };
        return n && (R.loc = Zl(h.startLoc, h.endLoc)),
        w != null && (R.value = w),
        R
    }
    const m = h=>d(h, 14);
    function _(h, v) {
        return h.currentChar() === v ? (h.next(),
        v) : (f(Ge.EXPECTED_TOKEN, o(), 0, v),
        "")
    }
    function b(h) {
        let v = "";
        for (; h.currentPeek() === xn || h.currentPeek() === Ot; )
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
        if (h === er)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function E(h) {
        if (h === er)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function p(h, v) {
        const {currentType: w} = v;
        if (w !== 2)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function y(h, v) {
        const {currentType: w} = v;
        if (w !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === "-" ? h.peek() : h.currentPeek()
          , V = E(R);
        return h.resetPeek(),
        V
    }
    function T(h, v) {
        const {currentType: w} = v;
        if (w !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === Sd;
        return h.resetPeek(),
        R
    }
    function A(h, v) {
        const {currentType: w} = v;
        if (w !== 8)
            return !1;
        b(h);
        const R = h.currentPeek() === ".";
        return h.resetPeek(),
        R
    }
    function L(h, v) {
        const {currentType: w} = v;
        if (w !== 9)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function O(h, v) {
        const {currentType: w} = v;
        if (!(w === 8 || w === 12))
            return !1;
        b(h);
        const R = h.currentPeek() === ":";
        return h.resetPeek(),
        R
    }
    function C(h, v) {
        const {currentType: w} = v;
        if (w !== 10)
            return !1;
        const R = ()=>{
            const q = h.currentPeek();
            return q === "{" ? g(h.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === xn || !q ? !1 : q === Ot ? (h.peek(),
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
    function x(h) {
        const v = b(h)
          , w = h.currentPeek() === "%" && h.peek() === "{";
        return h.resetPeek(),
        {
            isModulo: w,
            hasSpace: v.length > 0
        }
    }
    function U(h, v=!0) {
        const w = (V=!1,q="",X=!1)=>{
            const z = h.currentPeek();
            return z === "{" ? q === "%" ? !1 : V : z === "@" || !z ? q === "%" ? !0 : V : z === "%" ? (h.peek(),
            w(V, "%", !0)) : z === "|" ? q === "%" || X ? !0 : !(q === xn || q === Ot) : z === xn ? (h.peek(),
            w(!0, xn, X)) : z === Ot ? (h.peek(),
            w(!0, Ot, X)) : !0
        }
          , R = w();
        return v && h.resetPeek(),
        R
    }
    function Z(h, v) {
        const w = h.currentChar();
        return w === er ? er : v(w) ? (h.next(),
        w) : null
    }
    function W(h) {
        return Z(h, w=>{
            const R = w.charCodeAt(0);
            return R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 || R === 95 || R === 36
        }
        )
    }
    function K(h) {
        return Z(h, w=>{
            const R = w.charCodeAt(0);
            return R >= 48 && R <= 57
        }
        )
    }
    function N(h) {
        return Z(h, w=>{
            const R = w.charCodeAt(0);
            return R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102
        }
        )
    }
    function Y(h) {
        let v = ""
          , w = "";
        for (; v = K(h); )
            w += v;
        return w
    }
    function B(h) {
        S(h);
        const v = h.currentChar();
        return v !== "%" && f(Ge.EXPECTED_TOKEN, o(), 0, v),
        h.next(),
        "%"
    }
    function ae(h) {
        let v = "";
        for (; ; ) {
            const w = h.currentChar();
            if (w === "{" || w === "}" || w === "@" || w === "|" || !w)
                break;
            if (w === "%")
                if (U(h))
                    v += w,
                    h.next();
                else
                    break;
            else if (w === xn || w === Ot)
                if (U(h))
                    v += w,
                    h.next();
                else {
                    if (D(h))
                        break;
                    v += w,
                    h.next()
                }
            else
                v += w,
                h.next()
        }
        return v
    }
    function j(h) {
        S(h);
        let v = ""
          , w = "";
        for (; v = W(h); )
            w += v;
        return h.currentChar() === er && f(Ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
        w
    }
    function ce(h) {
        S(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${Y(h)}`) : v += Y(h),
        h.currentChar() === er && f(Ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
        v
    }
    function _e(h) {
        S(h),
        _(h, "'");
        let v = ""
          , w = "";
        const R = q=>q !== Sd && q !== Ot;
        for (; v = Z(h, R); )
            v === "\\" ? w += Ye(h) : w += v;
        const V = h.currentChar();
        return V === Ot || V === er ? (f(Ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        V === Ot && (h.next(),
        _(h, "'")),
        w) : (_(h, "'"),
        w)
    }
    function Ye(h) {
        const v = h.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return h.next(),
            `\\${v}`;
        case "u":
            return ze(h, v, 4);
        case "U":
            return ze(h, v, 6);
        default:
            return f(Ge.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v),
            ""
        }
    }
    function ze(h, v, w) {
        _(h, v);
        let R = "";
        for (let V = 0; V < w; V++) {
            const q = N(h);
            if (!q) {
                f(Ge.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${v}${R}${h.currentChar()}`);
                break
            }
            R += q
        }
        return `\\${v}${R}`
    }
    function lt(h) {
        S(h);
        let v = ""
          , w = "";
        const R = V=>V !== "{" && V !== "}" && V !== xn && V !== Ot;
        for (; v = Z(h, R); )
            w += v;
        return w
    }
    function $e(h) {
        let v = ""
          , w = "";
        for (; v = W(h); )
            w += v;
        return w
    }
    function H(h) {
        const v = (w=!1,R)=>{
            const V = h.currentChar();
            return V === "{" || V === "%" || V === "@" || V === "|" || V === "(" || V === ")" || !V || V === xn ? R : V === Ot || V === ow ? (R += V,
            h.next(),
            v(w, R)) : (R += V,
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
        let w = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(Ge.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            h.next(),
            w = d(v, 2, "{"),
            S(h),
            v.braceNest++,
            w;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(Ge.EMPTY_PLACEHOLDER, o(), 0),
            h.next(),
            w = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && S(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            w;
        case "@":
            return v.braceNest > 0 && f(Ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
            w = $(h, v) || m(v),
            v.braceNest = 0,
            w;
        default:
            let V = !0
              , q = !0
              , X = !0;
            if (D(h))
                return v.braceNest > 0 && f(Ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
                w = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                w;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(Ge.UNTERMINATED_CLOSING_BRACE, o(), 0),
                v.braceNest = 0,
                ve(h, v);
            if (V = p(h, v))
                return w = d(v, 5, j(h)),
                S(h),
                w;
            if (q = y(h, v))
                return w = d(v, 6, ce(h)),
                S(h),
                w;
            if (X = T(h, v))
                return w = d(v, 7, _e(h)),
                S(h),
                w;
            if (!V && !q && !X)
                return w = d(v, 13, lt(h)),
                f(Ge.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, w.value),
                S(h),
                w;
            break
        }
        return w
    }
    function $(h, v) {
        const {currentType: w} = v;
        let R = null;
        const V = h.currentChar();
        switch ((w === 8 || w === 9 || w === 12 || w === 10) && (V === Ot || V === xn) && f(Ge.INVALID_LINKED_FORMAT, o(), 0),
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
            R) : A(h, v) || O(h, v) ? (S(h),
            $(h, v)) : L(h, v) ? (S(h),
            d(v, 12, $e(h))) : C(h, v) ? (S(h),
            V === "{" ? Q(h, v) || R : d(v, 11, H(h))) : (w === 8 && f(Ge.INVALID_LINKED_FORMAT, o(), 0),
            v.braceNest = 0,
            v.inLinked = !1,
            ve(h, v))
        }
    }
    function ve(h, v) {
        let w = {
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
            return f(Ge.UNBALANCED_CLOSING_BRACE, o(), 0),
            h.next(),
            d(v, 3, "}");
        case "@":
            return $(h, v) || m(v);
        default:
            if (D(h))
                return w = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                w;
            const {isModulo: V, hasSpace: q} = x(h);
            if (V)
                return q ? d(v, 0, ae(h)) : d(v, 4, B(h));
            if (U(h))
                return d(v, 0, ae(h));
            break
        }
        return w
    }
    function Be() {
        const {currentType: h, offset: v, startLoc: w, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = w,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = o(),
        r.currentChar() === er ? d(l, 14) : ve(r, l)
    }
    return {
        nextToken: Be,
        currentOffset: i,
        currentPosition: o,
        context: c
    }
}
const lw = "parser"
  , cw = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function uw(e, t, n) {
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
function fw(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(g, E, p, y, ...T) {
        const A = g.currentPosition();
        if (A.offset += y,
        A.column += y,
        n) {
            const L = t ? Zl(p, A) : null
              , O = fa(E, L, {
                domain: lw,
                args: T
            });
            n(O)
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
        return A.value = E.replace(cw, uw),
        g.nextToken(),
        o(A, g.currentOffset(), g.currentPosition()),
        A
    }
    function u(g) {
        const E = g.nextToken()
          , p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , A = i(8, y, T);
        return E.type !== 12 ? (r(g, Ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        A.value = "",
        o(A, y, T),
        {
            nextConsumeToken: E,
            node: A
        }) : (E.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, En(E)),
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
        switch (y.type !== 10 && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(y)),
        y = g.nextToken(),
        y.type === 2 && (y = g.nextToken()),
        y.type) {
        case 11:
            y.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(y)),
            p.key = f(g, y.value || "");
            break;
        case 5:
            y.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(y)),
            p.key = l(g, y.value || "");
            break;
        case 6:
            y.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(y)),
            p.key = a(g, y.value || "");
            break;
        case 7:
            y.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(y)),
            p.key = c(g, y.value || "");
            break;
        default:
            r(g, Ge.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
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
            const C = A || g.nextToken();
            switch (A = null,
            C.type) {
            case 0:
                C.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(C)),
                T.items.push(s(g, C.value || ""));
                break;
            case 6:
                C.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(C)),
                T.items.push(a(g, C.value || ""));
                break;
            case 5:
                C.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(C)),
                T.items.push(l(g, C.value || ""));
                break;
            case 7:
                C.value == null && r(g, Ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, En(C)),
                T.items.push(c(g, C.value || ""));
                break;
            case 8:
                const D = d(g);
                T.items.push(D.node),
                A = D.nextConsumeToken || null;
                break
            }
        } while (E.currentType !== 14 && E.currentType !== 1);
        const L = E.currentType === 1 ? E.lastOffset : g.currentOffset()
          , O = E.currentType === 1 ? E.lastEndLoc : g.currentPosition();
        return o(T, L, O),
        T
    }
    function _(g, E, p, y) {
        const T = g.context();
        let A = y.items.length === 0;
        const L = i(1, E, p);
        L.cases = [],
        L.cases.push(y);
        do {
            const O = m(g);
            A || (A = O.items.length === 0),
            L.cases.push(O)
        } while (T.currentType !== 14);
        return A && r(g, Ge.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
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
        const E = aw(g, ft({}, e))
          , p = E.context()
          , y = i(0, p.offset, p.startLoc);
        return t && y.loc && (y.loc.source = g),
        y.body = b(E),
        e.onCacheKey && (y.cacheKey = e.onCacheKey(g)),
        p.currentType !== 14 && r(E, Ge.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, g[p.offset] || ""),
        o(y, E.currentOffset(), E.currentPosition()),
        y
    }
    return {
        parse: S
    }
}
function En(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function dw(e, t={}) {
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
function Ad(e, t) {
    for (let n = 0; n < e.length; n++)
        yu(e[n], t)
}
function yu(e, t) {
    switch (e.type) {
    case 1:
        Ad(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Ad(e.items, t);
        break;
    case 6:
        yu(e.key, t),
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
function hw(e, t={}) {
    const n = dw(e);
    n.helper("normalize"),
    e.body && yu(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function pw(e) {
    const t = e.body;
    return t.type === 2 ? kd(t) : t.cases.forEach(n=>kd(n)),
    e
}
function kd(e) {
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
            e.static = mu(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function ri(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        const t = e;
        ri(t.body),
        t.b = t.body,
        delete t.body;
        break;
    case 1:
        const n = e
          , r = n.cases;
        for (let u = 0; u < r.length; u++)
            ri(r[u]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const i = e
          , o = i.items;
        for (let u = 0; u < o.length; u++)
            ri(o[u]);
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
        ri(a.key),
        a.k = a.key,
        delete a.key,
        a.modifier && (ri(a.modifier),
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
function mw(e, t) {
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
function gw(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Ei(e, t.key),
    t.modifier ? (e.push(", "),
    Ei(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function yw(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const i = t.items.length;
    for (let o = 0; o < i && (Ei(e, t.items[o]),
    o !== i - 1); o++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function vw(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const i = t.cases.length;
        for (let o = 0; o < i && (Ei(e, t.cases[o]),
        o !== i - 1); o++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function _w(e, t) {
    t.body ? Ei(e, t.body) : e.push("null")
}
function Ei(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        _w(e, t);
        break;
    case 1:
        vw(e, t);
        break;
    case 2:
        yw(e, t);
        break;
    case 6:
        gw(e, t);
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
const bw = (e,t={})=>{
    const n = ne(t.mode) ? t.mode : "normal"
      , r = ne(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = mw(e, {
        mode: n,
        filename: r,
        sourceMap: i,
        breakLineCode: o,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${mu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    Ei(l, e),
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
function Ew(e, t={}) {
    const n = ft({}, t)
      , r = !!n.jit
      , i = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , a = fw(n).parse(e);
    return r ? (o && pw(a),
    i && ri(a),
    {
        ast: a,
        code: ""
    }) : (hw(a, n),
    bw(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Tw() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Ar = [];
Ar[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Ar[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Ar[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Ar[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Ar[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Ar[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Ar[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Sw = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Aw(e) {
    return Sw.test(e)
}
function kw(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function ww(e) {
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
function Lw(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Aw(t) ? kw(t) : "*" + t
}
function Ow(e) {
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
            s === void 0 || (s = Lw(s),
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
            if (l = ww(o),
            f = Ar[r],
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
function Cw(e, t) {
    return Ve(e) ? e[t] : null
}
function Rw(e, t) {
    if (!Ve(e))
        return null;
    let n = wd.get(t);
    if (n || (n = Ow(t),
    n && wd.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let i = e
      , o = 0;
    for (; o < r; ) {
        const s = i[n[o]];
        if (s === void 0 || Xe(i))
            return null;
        i = s,
        o++
    }
    return i
}
const Iw = e=>e
  , Pw = e=>""
  , Mw = "text"
  , Dw = e=>e.length === 0 ? "" : mu(e)
  , Nw = Xk;
function Ld(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function Vw(e) {
    const t = bt(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (bt(e.named.count) || bt(e.named.n)) ? bt(e.named.count) ? e.named.count : bt(e.named.n) ? e.named.n : t : t
}
function Uw(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function Bw(e={}) {
    const t = e.locale
      , n = Vw(e)
      , r = Ve(e.pluralRules) && ne(t) && Xe(e.pluralRules[t]) ? e.pluralRules[t] : Ld
      , i = Ve(e.pluralRules) && ne(t) && Xe(e.pluralRules[t]) ? Ld : void 0
      , o = g=>g[r(n, g.length, i)]
      , s = e.list || []
      , a = g=>s[g]
      , l = e.named || {};
    bt(e.pluralIndex) && Uw(n, l);
    const c = g=>l[g];
    function u(g) {
        const E = Xe(e.messages) ? e.messages(g) : Ve(e.messages) ? e.messages[g] : !1;
        return E || (e.parent ? e.parent.message(g) : Pw)
    }
    const f = g=>e.modifiers ? e.modifiers[g] : Iw
      , d = xe(e.processor) && Xe(e.processor.normalize) ? e.processor.normalize : Dw
      , m = xe(e.processor) && Xe(e.processor.interpolate) ? e.processor.interpolate : Nw
      , _ = xe(e.processor) && ne(e.processor.type) ? e.processor.type : Mw
      , S = {
        list: a,
        named: c,
        plural: o,
        linked: (g,...E)=>{
            const [p,y] = E;
            let T = "text"
              , A = "";
            E.length === 1 ? Ve(p) ? (A = p.modifier || A,
            T = p.type || T) : ne(p) && (A = p || A) : E.length === 2 && (ne(p) && (A = p || A),
            ne(y) && (T = y || T));
            const L = u(g)(S)
              , O = T === "vnode" && ct(L) && A ? L[0] : L;
            return A ? f(A)(O, T) : O
        }
        ,
        message: u,
        type: _,
        interpolate: m,
        normalize: d,
        values: ft({}, s, l)
    };
    return S
}
let vo = null;
function Fw(e) {
    vo = e
}
function xw(e, t, n) {
    vo && vo.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const Hw = jw("function:translate");
function jw(e) {
    return t=>vo && vo.emit(e, t)
}
const Kw = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , mg = Ge.__EXTEND_POINT__
  , Cr = gu(mg)
  , Ln = {
    INVALID_ARGUMENT: mg,
    INVALID_DATE_ARGUMENT: Cr(),
    INVALID_ISO_DATE_ARGUMENT: Cr(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Cr(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Cr(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Cr(),
    NOT_SUPPORT_LOCALE_TYPE: Cr(),
    __EXTEND_POINT__: Cr()
};
function Kn(e) {
    return fa(e, null, void 0)
}
function vu(e, t) {
    return t.locale != null ? Od(t.locale) : Od(e.locale)
}
let Qa;
function Od(e) {
    if (ne(e))
        return e;
    if (Xe(e)) {
        if (e.resolvedOnce && Qa != null)
            return Qa;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Qk(t))
                throw Kn(Ln.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Qa = t
        } else
            throw Kn(Ln.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Kn(Ln.NOT_SUPPORT_LOCALE_TYPE)
}
function Yw(e, t, n) {
    return [...new Set([n, ...ct(t) ? t : Ve(t) ? Object.keys(t) : ne(t) ? [t] : [n]])]
}
function gg(e, t, n) {
    const r = ne(n) ? n : Us
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let o = i.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let s = [n];
        for (; ct(s); )
            s = Cd(o, s, t);
        const a = ct(t) || !xe(t) ? t : t.default ? t.default : null;
        s = ne(a) ? [a] : a,
        ct(s) && Cd(o, s, !1),
        i.__localeChainCache.set(r, o)
    }
    return o
}
function Cd(e, t, n) {
    let r = !0;
    for (let i = 0; i < t.length && st(r); i++) {
        const o = t[i];
        ne(o) && (r = qw(e, t[i], n))
    }
    return r
}
function qw(e, t, n) {
    let r;
    const i = t.split("-");
    do {
        const o = i.join("-");
        r = Ww(e, o, n),
        i.splice(-1, 1)
    } while (i.length && r === !0);
    return r
}
function Ww(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const i = t.replace(/!/g, "");
        e.push(i),
        (ct(n) || xe(n)) && n[i] && (r = n[i])
    }
    return r
}
const Gw = "9.9.1"
  , da = -1
  , Us = "en-US"
  , Rd = ""
  , Id = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Jw() {
    return {
        upper: (e,t)=>t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && Ve(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && Ve(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && ne(e) ? Id(e) : t === "vnode" && Ve(e) && "__v_isVNode"in e ? Id(e.children) : e
    }
}
let yg;
function zw(e) {
    yg = e
}
let vg;
function Qw(e) {
    vg = e
}
let _g;
function Xw(e) {
    _g = e
}
let bg = null;
const Zw = e=>{
    bg = e
}
  , $w = ()=>bg;
let Eg = null;
const Pd = e=>{
    Eg = e
}
  , eL = ()=>Eg;
let Md = 0;
function tL(e={}) {
    const t = Xe(e.onWarn) ? e.onWarn : Zk
      , n = ne(e.version) ? e.version : Gw
      , r = ne(e.locale) || Xe(e.locale) ? e.locale : Us
      , i = Xe(r) ? Us : r
      , o = ct(e.fallbackLocale) || xe(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , s = xe(e.messages) ? e.messages : {
        [i]: {}
    }
      , a = xe(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = xe(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , c = ft({}, e.modifiers || {}, Jw())
      , u = e.pluralRules || {}
      , f = Xe(e.missing) ? e.missing : null
      , d = st(e.missingWarn) || Ns(e.missingWarn) ? e.missingWarn : !0
      , m = st(e.fallbackWarn) || Ns(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = !!e.fallbackFormat
      , b = !!e.unresolving
      , S = Xe(e.postTranslation) ? e.postTranslation : null
      , g = xe(e.processor) ? e.processor : null
      , E = st(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , y = Xe(e.messageCompiler) ? e.messageCompiler : yg
      , T = Xe(e.messageResolver) ? e.messageResolver : vg || Cw
      , A = Xe(e.localeFallbacker) ? e.localeFallbacker : _g || Yw
      , L = Ve(e.fallbackContext) ? e.fallbackContext : void 0
      , O = e
      , C = Ve(O.__datetimeFormatters) ? O.__datetimeFormatters : new Map
      , D = Ve(O.__numberFormatters) ? O.__numberFormatters : new Map
      , x = Ve(O.__meta) ? O.__meta : {};
    Md++;
    const U = {
        version: n,
        cid: Md,
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
        __meta: x
    };
    return U.datetimeFormats = a,
    U.numberFormats = l,
    U.__datetimeFormatters = C,
    U.__numberFormatters = D,
    __INTLIFY_PROD_DEVTOOLS__ && xw(U, n, x),
    U
}
function _u(e, t, n, r, i) {
    const {missing: o, onWarn: s} = e;
    if (o !== null) {
        const a = o(e, n, t, i);
        return ne(a) ? a : t
    } else
        return t
}
function Bi(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function Xa(e) {
    return n=>nL(n, e)
}
function nL(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n
          , i = r.c || r.cases;
        return e.plural(i.reduce((o,s)=>[...o, Dd(e, s)], []))
    } else
        return Dd(e, n)
}
function Dd(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = (t.i || t.items).reduce((i,o)=>[...i, $l(e, o)], []);
        return e.normalize(r)
    }
}
function $l(e, t) {
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
        return e.linked($l(e, a.k || a.key), l ? $l(e, l) : void 0, e.type);
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
const rL = e=>e;
let ss = Object.create(null);
const Ti = e=>Ve(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function iL(e, t={}) {
    let n = !1;
    const r = t.onError || ew;
    return t.onError = i=>{
        n = !0,
        r(i)
    }
    ,
    {
        ...Ew(e, t),
        detectError: n
    }
}
function oL(e, t) {
    if (ne(e)) {
        st(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || rL)(e)
          , i = ss[r];
        if (i)
            return i;
        const {ast: o, detectError: s} = iL(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = Xa(o);
        return s ? a : ss[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = ss[n];
            return r || (ss[n] = Xa(e))
        } else
            return Xa(e)
    }
}
const Nd = ()=>""
  , Xt = e=>Xe(e);
function Vd(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: o, fallbackLocale: s, messages: a} = e
      , [l,c] = ec(...t)
      , u = st(c.missingWarn) ? c.missingWarn : e.missingWarn
      , f = st(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , d = st(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , m = !!c.resolvedMessage
      , _ = ne(c.default) || st(c.default) ? st(c.default) ? o ? l : ()=>l : c.default : n ? o ? l : ()=>l : ""
      , b = n || _ !== ""
      , S = vu(e, c);
    d && sL(c);
    let[g,E,p] = m ? [l, S, a[S] || {}] : Tg(e, l, S, s, f, u)
      , y = g
      , T = l;
    if (!m && !(ne(y) || Ti(y) || Xt(y)) && b && (y = _,
    T = y),
    !m && (!(ne(y) || Ti(y) || Xt(y)) || !ne(E)))
        return i ? da : l;
    let A = !1;
    const L = ()=>{
        A = !0
    }
      , O = Xt(y) ? y : Sg(e, l, E, y, T, L);
    if (A)
        return y;
    const C = cL(e, E, p, c)
      , D = Bw(C)
      , x = aL(e, O, D)
      , U = r ? r(x, l) : x;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: ne(l) ? l : Xt(y) ? y.key : "",
            locale: E || (Xt(y) ? y.locale : ""),
            format: ne(y) ? y : Xt(y) ? y.source : "",
            message: U
        };
        Z.meta = ft({}, e.__meta, $w() || {}),
        Hw(Z)
    }
    return U
}
function sL(e) {
    ct(e.list) ? e.list = e.list.map(t=>ne(t) ? Td(t) : t) : Ve(e.named) && Object.keys(e.named).forEach(t=>{
        ne(e.named[t]) && (e.named[t] = Td(e.named[t]))
    }
    )
}
function Tg(e, t, n, r, i, o) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: c} = e
      , u = c(e, r, n);
    let f = {}, d, m = null;
    const _ = "translate";
    for (let b = 0; b < u.length && (d = u[b],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(ne(m) || Ti(m) || Xt(m))); b++) {
        const S = _u(e, t, d, o, _);
        S !== t && (m = S)
    }
    return [m, d, f]
}
function Sg(e, t, n, r, i, o) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (Xt(r)) {
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
    const l = s(r, lL(e, n, i, r, a, o));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function aL(e, t, n) {
    return t(n)
}
function ec(...e) {
    const [t,n,r] = e
      , i = {};
    if (!ne(t) && !bt(t) && !Xt(t) && !Ti(t))
        throw Kn(Ln.INVALID_ARGUMENT);
    const o = bt(t) ? String(t) : (Xt(t),
    t);
    return bt(n) ? i.plural = n : ne(n) ? i.default = n : xe(n) && !ua(n) ? i.named = n : ct(n) && (i.list = n),
    bt(r) ? i.plural = r : ne(r) ? i.default = r : xe(r) && ft(i, r),
    [o, i]
}
function lL(e, t, n, r, i, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: i,
        onError: s=>{
            throw o && o(s),
            s
        }
        ,
        onCacheKey: s=>qk(t, n, s)
    }
}
function cL(e, t, n, r) {
    const {modifiers: i, pluralRules: o, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u} = e
      , d = {
        locale: t,
        modifiers: i,
        pluralRules: o,
        messages: m=>{
            let _ = s(n, m);
            if (_ == null && u) {
                const [,,b] = Tg(u, m, t, a, l, c);
                _ = s(b, m)
            }
            if (ne(_) || Ti(_)) {
                let b = !1;
                const g = Sg(e, m, t, _, m, ()=>{
                    b = !0
                }
                );
                return b ? Nd : g
            } else
                return Xt(_) ? _ : Nd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    bt(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Ud(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,c,u,f] = tc(...t)
      , d = st(u.missingWarn) ? u.missingWarn : e.missingWarn;
    st(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = vu(e, u)
      , b = s(e, i, _);
    if (!ne(l) || l === "")
        return new Intl.DateTimeFormat(_,f).format(c);
    let S = {}, g, E = null;
    const p = "datetime format";
    for (let A = 0; A < b.length && (g = b[A],
    S = n[g] || {},
    E = S[l],
    !xe(E)); A++)
        _u(e, l, g, d, p);
    if (!xe(E) || !ne(g))
        return r ? da : l;
    let y = `${g}__${l}`;
    ua(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.DateTimeFormat(g,ft({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(c) : T.format(c)
}
const Ag = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function tc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {}, a;
    if (ne(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Kn(Ln.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw Kn(Ln.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Gk(t)) {
        if (isNaN(t.getTime()))
            throw Kn(Ln.INVALID_DATE_ARGUMENT);
        a = t
    } else if (bt(t))
        a = t;
    else
        throw Kn(Ln.INVALID_ARGUMENT);
    return ne(n) ? o.key = n : xe(n) && Object.keys(n).forEach(l=>{
        Ag.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ne(r) ? o.locale = r : xe(r) && (s = r),
    xe(i) && (s = i),
    [o.key || "", a, o, s]
}
function Bd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function Fd(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,c,u,f] = nc(...t)
      , d = st(u.missingWarn) ? u.missingWarn : e.missingWarn;
    st(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = vu(e, u)
      , b = s(e, i, _);
    if (!ne(l) || l === "")
        return new Intl.NumberFormat(_,f).format(c);
    let S = {}, g, E = null;
    const p = "number format";
    for (let A = 0; A < b.length && (g = b[A],
    S = n[g] || {},
    E = S[l],
    !xe(E)); A++)
        _u(e, l, g, d, p);
    if (!xe(E) || !ne(g))
        return r ? da : l;
    let y = `${g}__${l}`;
    ua(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.NumberFormat(g,ft({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(c) : T.format(c)
}
const kg = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function nc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {};
    if (!bt(t))
        throw Kn(Ln.INVALID_ARGUMENT);
    const a = t;
    return ne(n) ? o.key = n : xe(n) && Object.keys(n).forEach(l=>{
        kg.includes(l) ? s[l] = n[l] : o[l] = n[l]
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
Tw();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const uL = "9.9.1";
function fL() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (pu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const wg = Kw.__EXTEND_POINT__
  , tr = gu(wg);
tr(),
tr(),
tr(),
tr(),
tr(),
tr(),
tr(),
tr();
const Lg = Ln.__EXTEND_POINT__
  , Mt = gu(Lg)
  , sn = {
    UNEXPECTED_RETURN_TYPE: Lg,
    INVALID_ARGUMENT: Mt(),
    MUST_BE_CALL_SETUP_TOP: Mt(),
    NOT_INSTALLED: Mt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Mt(),
    REQUIRED_VALUE: Mt(),
    INVALID_VALUE: Mt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Mt(),
    NOT_INSTALLED_WITH_PROVIDE: Mt(),
    UNEXPECTED_ERROR: Mt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Mt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Mt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Mt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Mt(),
    __EXTEND_POINT__: Mt()
};
function gn(e, ...t) {
    return fa(e, null, void 0)
}
const rc = Sr("__translateVNode")
  , ic = Sr("__datetimeParts")
  , oc = Sr("__numberParts")
  , dL = Sr("__setPluralRules")
  , hL = Sr("__injectWithOption")
  , sc = Sr("__dispose");
function _o(e) {
    if (!Ve(e))
        return e;
    for (const t in e)
        if (Vs(e, t))
            if (!t.includes("."))
                Ve(e[t]) && _o(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let i = e
                  , o = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in i || (i[n[s]] = {}),
                    !Ve(i[n[s]])) {
                        o = !0;
                        break
                    }
                    i = i[n[s]]
                }
                o || (i[n[r]] = e[t],
                delete e[t]),
                Ve(i[n[r]]) && _o(i[n[r]])
            }
    return e
}
function Og(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = xe(n) ? n : ct(r) ? {} : {
        [e]: {}
    };
    if (ct(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: c} = a;
            l ? (s[l] = s[l] || {},
            Kr(c, s[l])) : Kr(c, s)
        } else
            ne(a) && Kr(JSON.parse(a), s)
    }
    ),
    i == null && o)
        for (const a in s)
            Vs(s, a) && _o(s[a]);
    return s
}
function Cg(e) {
    return e.type
}
function pL(e, t, n) {
    let r = Ve(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = Og(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const i = Object.keys(r);
    i.length && i.forEach(o=>{
        e.mergeLocaleMessage(o, r[o])
    }
    );
    {
        if (Ve(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(s=>{
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Ve(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(s=>{
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function Hd(e) {
    return Ze(Wr, null, e, 0)
}
const jd = "__INTLIFY_META__"
  , Kd = ()=>[]
  , mL = ()=>!1;
let Yd = 0;
function qd(e) {
    return (t,n,r,i)=>e(n, r, vn() || void 0, i)
}
const gL = ()=>{
    const e = vn();
    let t = null;
    return e && (t = Cg(e)[jd]) ? {
        [jd]: t
    } : null
}
;
function Rg(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Ds ? le : pn;
    let a = st(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : ne(e.locale) ? e.locale : Us)
      , c = s(n && a ? n.fallbackLocale.value : ne(e.fallbackLocale) || ct(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , u = s(Og(l.value, e))
      , f = s(xe(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(xe(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : st(e.missingWarn) || Ns(e.missingWarn) ? e.missingWarn : !0
      , _ = n ? n.fallbackWarn : st(e.fallbackWarn) || Ns(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = n ? n.fallbackRoot : st(e.fallbackRoot) ? e.fallbackRoot : !0
      , S = !!e.fallbackFormat
      , g = Xe(e.missing) ? e.missing : null
      , E = Xe(e.missing) ? qd(e.missing) : null
      , p = Xe(e.postTranslation) ? e.postTranslation : null
      , y = n ? n.warnHtmlMessage : st(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , T = !!e.escapeParameter;
    const A = n ? n.modifiers : xe(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || n && n.pluralRules, O;
    O = (()=>{
        i && Pd(null);
        const I = {
            version: uL,
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
        I.__datetimeFormatters = xe(O) ? O.__datetimeFormatters : void 0,
        I.__numberFormatters = xe(O) ? O.__numberFormatters : void 0;
        const F = tL(I);
        return i && Pd(F),
        F
    }
    )(),
    Bi(O, l.value, c.value);
    function D() {
        return [l.value, c.value, u.value, f.value, d.value]
    }
    const x = ue({
        get: ()=>l.value,
        set: I=>{
            l.value = I,
            O.locale = l.value
        }
    })
      , U = ue({
        get: ()=>c.value,
        set: I=>{
            c.value = I,
            O.fallbackLocale = c.value,
            Bi(O, l.value, I)
        }
    })
      , Z = ue(()=>u.value)
      , W = ue(()=>f.value)
      , K = ue(()=>d.value);
    function N() {
        return Xe(p) ? p : null
    }
    function Y(I) {
        p = I,
        O.postTranslation = I
    }
    function B() {
        return g
    }
    function ae(I) {
        I !== null && (E = qd(I)),
        g = I,
        O.missing = E
    }
    const j = (I,F,se,he,qe,ot)=>{
        D();
        let yt;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (O.fallbackContext = n ? eL() : void 0),
            yt = I(O)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (O.fallbackContext = void 0)
        }
        if (se !== "translate exists" && bt(yt) && yt === da || se === "translate exists" && !yt) {
            const [Jn,ka] = F();
            return n && b ? he(n) : qe(Jn)
        } else {
            if (ot(yt))
                return yt;
            throw gn(sn.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ce(...I) {
        return j(F=>Reflect.apply(Vd, null, [F, ...I]), ()=>ec(...I), "translate", F=>Reflect.apply(F.t, F, [...I]), F=>F, F=>ne(F))
    }
    function _e(...I) {
        const [F,se,he] = I;
        if (he && !Ve(he))
            throw gn(sn.INVALID_ARGUMENT);
        return ce(F, se, ft({
            resolvedMessage: !0
        }, he || {}))
    }
    function Ye(...I) {
        return j(F=>Reflect.apply(Ud, null, [F, ...I]), ()=>tc(...I), "datetime format", F=>Reflect.apply(F.d, F, [...I]), ()=>Rd, F=>ne(F))
    }
    function ze(...I) {
        return j(F=>Reflect.apply(Fd, null, [F, ...I]), ()=>nc(...I), "number format", F=>Reflect.apply(F.n, F, [...I]), ()=>Rd, F=>ne(F))
    }
    function lt(I) {
        return I.map(F=>ne(F) || bt(F) || st(F) ? Hd(String(F)) : F)
    }
    const H = {
        normalize: lt,
        interpolate: I=>I,
        type: "vnode"
    };
    function te(...I) {
        return j(F=>{
            let se;
            const he = F;
            try {
                he.processor = H,
                se = Reflect.apply(Vd, null, [he, ...I])
            } finally {
                he.processor = null
            }
            return se
        }
        , ()=>ec(...I), "translate", F=>F[rc](...I), F=>[Hd(F)], F=>ct(F))
    }
    function Q(...I) {
        return j(F=>Reflect.apply(Fd, null, [F, ...I]), ()=>nc(...I), "number format", F=>F[oc](...I), Kd, F=>ne(F) || ct(F))
    }
    function $(...I) {
        return j(F=>Reflect.apply(Ud, null, [F, ...I]), ()=>tc(...I), "datetime format", F=>F[ic](...I), Kd, F=>ne(F) || ct(F))
    }
    function ve(I) {
        L = I,
        O.pluralRules = L
    }
    function Be(I, F) {
        return j(()=>{
            if (!I)
                return !1;
            const se = ne(F) ? F : l.value
              , he = w(se)
              , qe = O.messageResolver(he, I);
            return Ti(qe) || Xt(qe) || ne(qe)
        }
        , ()=>[I], "translate exists", se=>Reflect.apply(se.te, se, [I, F]), mL, se=>st(se))
    }
    function h(I) {
        let F = null;
        const se = gg(O, c.value, l.value);
        for (let he = 0; he < se.length; he++) {
            const qe = u.value[se[he]] || {}
              , ot = O.messageResolver(qe, I);
            if (ot != null) {
                F = ot;
                break
            }
        }
        return F
    }
    function v(I) {
        const F = h(I);
        return F ?? (n ? n.tm(I) || {} : {})
    }
    function w(I) {
        return u.value[I] || {}
    }
    function R(I, F) {
        if (o) {
            const se = {
                [I]: F
            };
            for (const he in se)
                Vs(se, he) && _o(se[he]);
            F = se[I]
        }
        u.value[I] = F,
        O.messages = u.value
    }
    function V(I, F) {
        u.value[I] = u.value[I] || {};
        const se = {
            [I]: F
        };
        if (o)
            for (const he in se)
                Vs(se, he) && _o(se[he]);
        F = se[I],
        Kr(F, u.value[I]),
        O.messages = u.value
    }
    function q(I) {
        return f.value[I] || {}
    }
    function X(I, F) {
        f.value[I] = F,
        O.datetimeFormats = f.value,
        Bd(O, I, F)
    }
    function z(I, F) {
        f.value[I] = ft(f.value[I] || {}, F),
        O.datetimeFormats = f.value,
        Bd(O, I, F)
    }
    function ee(I) {
        return d.value[I] || {}
    }
    function J(I, F) {
        d.value[I] = F,
        O.numberFormats = d.value,
        xd(O, I, F)
    }
    function oe(I, F) {
        d.value[I] = ft(d.value[I] || {}, F),
        O.numberFormats = d.value,
        xd(O, I, F)
    }
    Yd++,
    n && Ds && (He(n.locale, I=>{
        a && (l.value = I,
        O.locale = I,
        Bi(O, l.value, c.value))
    }
    ),
    He(n.fallbackLocale, I=>{
        a && (c.value = I,
        O.fallbackLocale = I,
        Bi(O, l.value, c.value))
    }
    ));
    const ie = {
        id: Yd,
        locale: x,
        fallbackLocale: U,
        get inheritLocale() {
            return a
        },
        set inheritLocale(I) {
            a = I,
            I && n && (l.value = n.locale.value,
            c.value = n.fallbackLocale.value,
            Bi(O, l.value, c.value))
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
            O.missingWarn = m
        },
        get fallbackWarn() {
            return _
        },
        set fallbackWarn(I) {
            _ = I,
            O.fallbackWarn = _
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
            O.fallbackFormat = S
        },
        get warnHtmlMessage() {
            return y
        },
        set warnHtmlMessage(I) {
            y = I,
            O.warnHtmlMessage = I
        },
        get escapeParameter() {
            return T
        },
        set escapeParameter(I) {
            T = I,
            O.escapeParameter = I
        },
        t: ce,
        getLocaleMessage: w,
        setLocaleMessage: R,
        mergeLocaleMessage: V,
        getPostTranslationHandler: N,
        setPostTranslationHandler: Y,
        getMissingHandler: B,
        setMissingHandler: ae,
        [dL]: ve
    };
    return ie.datetimeFormats = W,
    ie.numberFormats = K,
    ie.rt = _e,
    ie.te = Be,
    ie.tm = v,
    ie.d = Ye,
    ie.n = ze,
    ie.getDateTimeFormat = q,
    ie.setDateTimeFormat = X,
    ie.mergeDateTimeFormat = z,
    ie.getNumberFormat = ee,
    ie.setNumberFormat = J,
    ie.mergeNumberFormat = oe,
    ie[hL] = r,
    ie[rc] = te,
    ie[ic] = $,
    ie[oc] = Q,
    ie
}
const bu = {
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
function yL({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,i)=>[...r, ...i.type === pt ? i.children : [i]], []) : t.reduce((n,r)=>{
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , {})
}
function Ig(e) {
    return pt
}
const vL = Ue({
    name: "i18n-t",
    props: ft({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>bt(e) || !isNaN(e)
        }
    }, bu),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || ha({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = ne(e.plural) ? +e.plural : e.plural);
            const a = yL(t, o)
              , l = i[rc](e.keypath, a, s)
              , c = ft({}, r)
              , u = ne(e.tag) || Ve(e.tag) ? e.tag : Ig();
            return ut(u, c, l)
        }
    }
})
  , Wd = vL;
function _L(e) {
    return ct(e) && !ne(e[0])
}
function Pg(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        ne(e.format) ? s.key = e.format : Ve(e.format) && (ne(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? ft({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let c = [s.key];
        ct(l) ? c = l.map((d,m)=>{
            const _ = i[d.type]
              , b = _ ? _({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return _L(b) && (b[0].key = `${d.type}-${m}`),
            b
        }
        ) : ne(l) && (c = [l]);
        const u = ft({}, o)
          , f = ne(e.tag) || Ve(e.tag) ? e.tag : Ig();
        return ut(f, u, c)
    }
}
const bL = Ue({
    name: "i18n-n",
    props: ft({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, bu),
    setup(e, t) {
        const n = e.i18n || ha({
            useScope: "parent",
            __useComponent: !0
        });
        return Pg(e, t, kg, (...r)=>n[oc](...r))
    }
})
  , Gd = bL
  , EL = Ue({
    name: "i18n-d",
    props: ft({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, bu),
    setup(e, t) {
        const n = e.i18n || ha({
            useScope: "parent",
            __useComponent: !0
        });
        return Pg(e, t, Ag, (...r)=>n[ic](...r))
    }
})
  , Jd = EL;
function TL(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function SL(e) {
    const t = s=>{
        const {instance: a, modifiers: l, value: c} = s;
        if (!a || !a.$)
            throw gn(sn.UNEXPECTED_ERROR);
        const u = TL(e, a.$)
          , f = zd(c);
        return [Reflect.apply(u.t, u, [...Qd(f)]), u]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,c] = t(a);
            Ds && e.global === c && (s.__i18nWatcher = He(c.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = c,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Ds && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , c = zd(a);
                s.textContent = Reflect.apply(l.t, l, [...Qd(c)])
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
function zd(e) {
    if (ne(e))
        return {
            path: e
        };
    if (xe(e)) {
        if (!("path"in e))
            throw gn(sn.REQUIRED_VALUE, "path");
        return e
    } else
        throw gn(sn.INVALID_VALUE)
}
function Qd(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , a = r || {};
    return ne(n) && (s.locale = n),
    bt(i) && (s.plural = i),
    bt(o) && (s.plural = o),
    [t, a, s]
}
function AL(e, t, ...n) {
    const r = xe(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (st(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : Wd.name, "I18nT"].forEach(s=>e.component(s, Wd)),
    [Gd.name, "I18nN"].forEach(s=>e.component(s, Gd)),
    [Jd.name, "I18nD"].forEach(s=>e.component(s, Jd))),
    e.directive("t", SL(t))
}
const kL = Sr("global-vue-i18n");
function wL(e={}, t) {
    const n = st(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , i = new Map
      , [o,s] = LL(e)
      , a = Sr("");
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
                n && (_ = NL(d, f.global)),
                AL(d, f, ...m);
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
function ha(e={}) {
    const t = vn();
    if (t == null)
        throw gn(sn.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw gn(sn.NOT_INSTALLED);
    const n = OL(t)
      , r = RL(n)
      , i = Cg(t)
      , o = CL(e, i);
    if (o === "global")
        return pL(r, e, i),
        r;
    if (o === "parent") {
        let l = IL(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = ft({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        r && (l.__root = r),
        a = Rg(l),
        s.__composerExtend && (a[sc] = s.__composerExtend(a)),
        ML(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function LL(e, t, n) {
    const r = Co();
    {
        const i = r.run(()=>Rg(e));
        if (i == null)
            throw gn(sn.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function OL(e) {
    {
        const t = Et(e.isCE ? kL : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw gn(e.isCE ? sn.NOT_INSTALLED_WITH_PROVIDE : sn.UNEXPECTED_ERROR);
        return t
    }
}
function CL(e, t) {
    return ua(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function RL(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function IL(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = PL(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(o)),
        r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function PL(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function ML(e, t, n) {
    It(()=>{}
    , t),
    Ci(()=>{
        const r = n;
        e.__deleteInstance(t);
        const i = r[sc];
        i && (i(),
        delete r[sc])
    }
    , t)
}
const DL = ["locale", "fallbackLocale", "availableLocales"]
  , Xd = ["t", "rt", "d", "n", "tm", "te"];
function NL(e, t) {
    const n = Object.create(null);
    return DL.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw gn(sn.UNEXPECTED_ERROR);
        const s = at(o.value) ? {
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
    Xd.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o || !o.value)
            throw gn(sn.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${i}`, o)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        Xd.forEach(i=>{
            delete e.config.globalProperties[`$${i}`]
        }
        )
    }
}
fL();
zw(oL);
Qw(Rw);
Xw(gg);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = pu();
    e.__INTLIFY__ = !0,
    Fw(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const Je = Vn("helper", {
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
            const {locale: e} = ha();
            return e.value === "tl" ? "tl-ph" : e.value
        },
        getNowTimestamp() {
            return Math.floor(new Date().getTime() / 1e3) + Bt().dtServer
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
        },
        getLocalizedString(e, t="") {
            return e[re().$i18n.locale.value] ? e[re().$i18n.locale.value] : e.en ? e.en : t
        }
    }
})
  , VL = {
    path: "/",
    watch: !0,
    decode: e=>po(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function UL(e, t) {
    var l;
    const n = {
        ...VL,
        ...t
    }
      , r = Zd(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const o = i !== void 0 && i <= 0
      , s = Sn(o ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = i && !o ? xL(s, i) : le(s);
    {
        const c = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , u = ()=>{
            n.readonly || yE(a.value, r[e]) || (FL(e, a.value, n),
            r[e] = Sn(a.value),
            c == null || c.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var b;
            const _ = m.refresh ? (b = Zd(n)) == null ? void 0 : b[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = _,
            Yt(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        Ro() && zs(()=>{
            d = !0,
            u(),
            c == null || c.close()
        }
        ),
        c && (c.onmessage = ({data: m})=>f(m)),
        n.watch ? He(a, ()=>{
            d || u()
        }
        , {
            deep: n.watch !== "shallow"
        }) : u()
    }
    return a
}
function Zd(e={}) {
    return uE(document.cookie, e)
}
function BL(e, t, n={}) {
    return t == null ? Nf(e, t, {
        ...n,
        maxAge: -1
    }) : Nf(e, t, n)
}
function FL(e, t, n={}) {
    document.cookie = BL(e, t, n)
}
const $d = 2147483647;
function xL(e, t) {
    let n, r = 0;
    return Ro() && zs(()=>{
        clearTimeout(n)
    }
    ),
    vp((i,o)=>{
        function s() {
            clearTimeout(n);
            const a = t - r
              , l = a < $d ? a : $d;
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
const Jr = ["de", "en", "es", "fr", "hi", "id", "pt", "ru", "th", "tl", "tr", "uz", "vi"]
  , ac = {
    de: [{
        key: "../locales/de.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/de.DaWcKpfs.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    en: [{
        key: "../locales/en.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/en.DTtjhmTT.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/es.C5EwfTS5.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    fr: [{
        key: "../locales/fr.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/fr.Ch8tHVYv.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/hi.Becok_ny.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/id.BObq57mc.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/pt.BVWx9WPZ.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ru.CX_lWe9w.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/th.DvsVbikF.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/tl.BaaVOI5G.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/tr.CafUKcQl.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/uz.B74EakxH.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/vi.tNxdV1gx.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , HL = [()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
  , mt = {
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
    vueI18n: "https://hamsterkombatgame.io/_nuxt/i18n.config.ts",
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
  , pa = {
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
  , Eu = [{
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
  , jL = !1
  , KL = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , YL = ""
  , qL = "nuxtI18n"
  , WL = typeof window < "u";
function GL(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        ne(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function JL(e) {
    return e != null && "global"in e && "mode"in e
}
function zL(e) {
    return e != null && !("__composer"in e) && "locale"in e && at(e.locale)
}
function Mg(e) {
    return e != null && "__composer"in e
}
function kr(e) {
    return JL(e) ? e.global : e
}
function Si(e) {
    const t = kr(e);
    return zL(t) ? t : Mg(t) ? t.__composer : t
}
function ma(e) {
    return G(kr(e).locale)
}
function QL(e) {
    return G(kr(e).locales)
}
function XL(e) {
    return G(kr(e).localeCodes)
}
function Dg(e, t) {
    const n = kr(e);
    at(n.locale) ? n.locale.value = t : n.locale = t
}
function Ng(e) {
    return ne(e) ? e : zk(e) ? e.toString() : "(null)"
}
function eh(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: i, defaultLocaleRouteNameSuffix: o}) {
    let s = Ng(e) + (r === "no_prefix" ? "" : i + t);
    return t === n && r === "prefix_and_default" && (s += i + o),
    s
}
function th(e, t) {
    return Xe(e) ? e(t) : e
}
function ZL(e, t) {
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
const $L = ZL;
function eO(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const tO = eO;
function nO(e, t, {matcher: n=$L, comparer: r=tO}={}) {
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
function lc(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const Qi = new Map;
async function rO(e, t) {
    const n = {
        messages: {}
    };
    for (const r of e) {
        const {default: i} = await r()
          , o = typeof i == "function" ? await t.runWithContext(async()=>await i()) : i;
        Kr(o, n)
    }
    return n
}
function Vg(e, t) {
    let n = [];
    if (ct(e))
        n = e;
    else if (Ve(e)) {
        const r = [...t, "default"];
        for (const i of r)
            e[i] && (n = [...n, ...e[i].filter(Boolean)])
    } else
        ne(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function iO(e, t, n) {
    const {defaultLocale: r, initialLocale: i, localeCodes: o, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const c = Vg(s, [r, i]);
        await Promise.all(c.map(u=>nh(u, t, e)))
    }
    const l = a ? [...new Set().add(r).add(i)] : o;
    return await Promise.all(l.map(c=>nh(c, t, e))),
    e
}
async function oO(e, {key: t, load: n}) {
    let r = null;
    try {
        const i = await n().then(o=>o.default || o);
        Xe(i) ? r = await i(e) : (r = i,
        r != null && Qi && Qi.set(t, r))
    } catch (i) {
        console.error("Failed locale loading: " + i.message)
    }
    return r
}
async function cc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const i = {};
    for (const o of r) {
        let s = null;
        Qi && Qi.has(o.key) && o.cache ? s = Qi.get(o.key) : s = await oO(e, o),
        s != null && Kr(s, i)
    }
    n(e, i)
}
async function nh(e, t, n) {
    await cc(e, t, (i,o)=>{
        const s = n[i] || {};
        Kr(o, s),
        n[i] = s
    }
    )
}
function sO(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function aO(e) {
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
function lO({router: e}, t, n, r) {
    var c, u;
    if (n !== "prefix")
        return e.resolve(t);
    const [i,o] = sO(t.path, 1)
      , s = `${i}${r}${o === "" ? o : `/${o}`}`
      , a = (u = (c = e.options) == null ? void 0 : c.routes) == null ? void 0 : u.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = ft({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const cO = new Set(["prefix_and_default", "prefix_except_default"]);
function uO(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && cO.has(r)) && r !== "no_prefix"
}
const fO = uO;
function Ai(e) {
    const {routesNameSeparator: t} = mt
      , n = G(e);
    return n == null || !n.name ? void 0 : Ng(n.name).split(t)[0]
}
function ga(e, t, n) {
    var i;
    if (typeof t == "string" && Nn(t, {
        acceptRelative: !0
    }))
        return t;
    const r = ya(e, t, n);
    return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}
function Tu(e, t, n) {
    return ya(e, t, n) ?? void 0
}
function dO(e, t, n) {
    return ya(e, t, n) ?? void 0
}
function ya(e, t, n) {
    const {router: r, i18n: i} = e
      , o = n || ma(i)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: c, trailingSlash: u} = mt
      , f = LO();
    let d;
    if (ne(t))
        if (t[0] === "/") {
            const {pathname: b, search: S, hash: g} = Ml(t)
              , E = tu(S);
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
    let m = ft({}, d);
    if ((b=>"path"in b && !!b.path && !("name"in b))(m)) {
        const b = lO(e, m, c, o)
          , S = Ai(b);
        ne(S) ? (m = {
            name: eh(S, o, {
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
        m.path = u ? ho(m.path, !0) : Mo(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = Ai(r.currentRoute.value)),
        m.name = eh(m.name, o, {
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
const hO = e=>e;
function pO(e) {
    var n;
    const t = e.meta || {};
    return ((n = G(t)) == null ? void 0 : n[qL]) || {}
}
function ki(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , i = Ai(r);
    if (!i)
        return "";
    const o = OO()
      , s = aO(r)
      , a = pO(r)[t]
      , l = {
        ...s,
        name: i,
        params: {
            ...s.params,
            ...a
        }
    }
      , c = ga(e, l, t);
    return o(c, t)
}
function Ug(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: i} = mt
      , o = Si(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (G(o.locales) == null || G(o.baseUrl) == null)
        return s;
    const a = ma(e.i18n)
      , l = QL(e.i18n)
      , c = GL(l).find(d=>d.code === a) || {
        code: a
    }
      , u = c.iso
      , f = c.dir || i;
    return t && (s.htmlAttrs.dir = f),
    n && a && G(o.locales) && (u && (s.htmlAttrs.lang = u),
    s.link.push(...mO(e, G(l), r), ...gO(e, r, n)),
    s.meta.push(...yO(e, r, n), ...vO(c, u, r), ..._O(G(l), u, r))),
    s
}
function Su() {
    const e = Si(re().$i18n);
    return G(e.baseUrl)
}
function mO(e, t, n) {
    const r = Su()
      , {defaultLocale: i, strategy: o} = mt
      , s = [];
    if (o === KL.NO_PREFIX)
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
        const u = ki(e, c.code);
        u && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: uc(u, r),
            hreflang: l
        })
    }
    if (i) {
        const l = ki(e, i);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: uc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function Bg(e, t, n) {
    const r = e.router.currentRoute.value
      , i = Tu(e, {
        ...r,
        name: Ai(r)
    });
    if (!i)
        return "";
    let o = uc(i.path, t);
    const s = Ve(n) && n.canonicalQueries || []
      , a = i.query
      , l = new URLSearchParams;
    for (const u of s)
        if (u in a) {
            const f = a[u];
            ct(f) ? f.forEach(d=>l.append(u, d || "")) : l.append(u, f || "")
        }
    const c = l.toString();
    return c && (o = `${o}?${c}`),
    o
}
function gO(e, t, n) {
    const r = Su()
      , i = Bg(e, r, n);
    return i ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: i
    }] : []
}
function yO(e, t, n) {
    const r = Su()
      , i = Bg(e, r, n);
    return i ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: i
    }] : []
}
function vO(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: Fg(t)
    }]
}
function _O(e, t, n) {
    return e.filter(i=>i.iso && i.iso !== t).map(i=>({
        [n]: `i18n-og-alt-${i.iso}`,
        property: "og:locale:alternate",
        content: Fg(i.iso)
    }))
}
function Fg(e) {
    return (e || "").replace(/-/g, "_")
}
function uc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function bO(e, t) {
    return xo(e, "setLocale", t)
}
function EO(e, t) {
    return xo(e, "setLocaleCookie", t)
}
function TO(e, t, n) {
    return xo(e, "mergeLocaleMessage", t, n)
}
function SO(e, t, n, r, i) {
    return xo(e, "onBeforeLanguageSwitch", t, n, r, i)
}
function AO(e, t, n) {
    return xo(e, "onLanguageSwitched", t, n)
}
function Au(e) {
    return {
        i18n: e ?? re().$i18n,
        router: Wt(),
        runtimeConfig: Gn()
    }
}
async function rh(e, t, n=!1) {
    const r = mt.differentDomains
      , i = (mt.detectBrowserLanguage && mt.detectBrowserLanguage.useCookie) ?? pa.detectBrowserLanguage.useCookie
      , o = re();
    let s = !1;
    const a = ma(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await SO(t, a, e, n, o)
      , c = XL(t);
    if (l && c && c.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const u = RO(t, "fallbackLocale");
    {
        const f = (d,m)=>TO(t, d, m);
        if (u) {
            const d = Vg(u, [e]);
            await Promise.all(d.map(m=>cc(m, ac, f)))
        }
        await cc(e, ac, f)
    }
    return i && EO(t, e),
    Dg(t, e),
    await AO(t, a, e),
    s = !0,
    [s, a]
}
function ih(e, t, n, r, i) {
    const {strategy: o, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = mt
      , c = Xe(r) ? r() : r
      , {ssg: u, callType: f, firstAccess: d, localeCookie: m} = i
      , {locale: _, stat: b, reason: S, from: g} = l ? jg(e, n, i, c) : Hg;
    if (S === "detect_ignore_on_ssg")
        return c;
    if ((g === "navigator_or_header" || g === "cookie" || g === "fallback") && _)
        return _;
    let E = _;
    return E || (a ? E = NO(Eu) : o !== "no_prefix" ? E = t(e) : l || (E = c)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function oh({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const i = re()
      , o = Au()
      , {strategy: s, differentDomains: a} = mt;
    let l = "";
    const {fullPath: c} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const u = i.$switchLocalePath(t) || i.$localePath(c, t);
        ne(u) && u && !Pl(u, c) && !u.startsWith("//") && (l = e.from && e.from.fullPath === u ? "" : u)
    }
    if ((a || !0) && n(e.to) !== t) {
        const u = ki(o, t, e.to);
        ne(u) && u && !Pl(u, c) && !u.startsWith("//") && (l = u)
    }
    return l
}
function kO(e) {
    return Ve(e) && "path"in e && "statusCode"in e
}
function sh(e, t) {
    return Vo(e, {
        redirectCode: t
    })
}
async function ah(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = pa.rootRedirect
      , {i18n: i, locale: o, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return ne(r) ? a = "/" + r : kO(r) && (a = "/" + r.path,
        t = r.statusCode),
        sh(a, t);
    if (a)
        return sh(a, t)
}
function wO(e, t) {
    ei(e, "$i18n", kr(t)),
    ei(e, "$getRouteBaseName", Ai),
    ei(e, "$localePath", Zt(ga)),
    ei(e, "$localeRoute", Zt(Tu)),
    ei(e, "$switchLocalePath", Zt(ki)),
    ei(e, "$localeHead", Zt(Ug))
}
function LO() {
    return e=>fO(e) && !mt.differentDomains
}
function OO() {
    return (e,t)=>hO(e)
}
function CO() {
    return ()=>{
        var o;
        const e = re()
          , t = Gn()
          , n = mt.baseUrl;
        if (Xe(n))
            return n(e);
        const r = mt.defaultLocale;
        Xe(r) && r();
        const i = (o = t == null ? void 0 : t.public) == null ? void 0 : o.i18n;
        return i != null && i.baseUrl ? i.baseUrl : n
    }
}
function xo(e, t, ...n) {
    const r = kr(e)
      , [i,o] = [r, r[t]];
    return Reflect.apply(o, i, [...n])
}
function RO(e, t) {
    const n = kr(e);
    return G(n[t])
}
function ei(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function Zt(e, t=Au()) {
    return (...n)=>e(t, ...n)
}
function xg() {
    let e;
    return navigator.languages && (e = nO(Eu, navigator.languages)),
    e
}
function IO() {
    const e = mt.detectBrowserLanguage
      , t = e && e.cookieKey || pa.detectBrowserLanguage.cookieKey
      , n = new Date
      , r = {
        expires: new Date(n.setDate(n.getDate() + 365)),
        path: "/",
        sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
        secure: e && e.cookieCrossOrigin || e && e.cookieSecure
    };
    return e && e.cookieDomain && (r.domain = e.cookieDomain),
    UL(t, r)
}
function PO(e) {
    const t = mt.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && Jr.includes(n))
        return n
}
function MO(e, t) {
    const {useCookie: n} = mt.detectBrowserLanguage || pa.detectBrowserLanguage;
    n && (e.value = t)
}
const Hg = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function jg(e, t, n, r="") {
    const {strategy: i} = mt
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
    const {redirectOn: c, alwaysRedirect: u, useCookie: f, fallbackLocale: d} = mt.detectBrowserLanguage
      , m = ne(e) ? e : e.path;
    if (i !== "no_prefix") {
        if (c === "root") {
            if (m !== "/")
                return {
                    locale: "",
                    stat: !1,
                    reason: "not_redirect_on_root"
                }
        } else if (c === "no prefix" && !u && m.match(lc(Jr)))
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
              , T = c === "no prefix" && !m.match(lc(Jr));
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
function DO() {
    let e;
    return e = window.location.host,
    e
}
function NO(e) {
    let t = DO() || "";
    if (t) {
        const n = e.find(r=>{
            if (r && r.domain) {
                let i = r.domain;
                return Nn(r.domain) && (i = r.domain.replace(/(http|https):\/\//, "")),
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
function Kg() {
    return Zt(ga)
}
function FM() {
    return Zt(ki)
}
const Za = ()=>({
    haptic: !0,
    coins_animation: !0
})
  , VO = Vn("settings", {
    state: ()=>({
        settings: Za()
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
            localStorage.setItem(pe.SETTINGS, JSON.stringify(this.settings))
        },
        loadSettings() {
            const e = localStorage.getItem(pe.SETTINGS);
            e || this.updateSettings({}),
            this.settings = e ? {
                ...Za(),
                ...JSON.parse(e)
            } : Za(),
            this.saveToLocalStorage()
        },
        async postExchangeRefLink(e) {
            return await et.post("/clicker/exchangeRefLink-save", {
                body: {
                    exchangeRefLink: e
                }
            }).then(t=>t)
        }
    }
})
  , xM = Ue({
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
          , {showBackButton: i, onBackButtonClicked: o, hideBackButton: s} = WO();
        return He(()=>n.visible, a=>{
            a ? i() : s()
        }
        ),
        o(()=>r("click")),
        It(()=>n.visible && i()),
        Ci(()=>s()),
        (a,l)=>null
    }
})
  , {initData: UO, initDataUnsafe: BO, version: FO, platform: xO, isVersionAtLeast: HO, sendData: jO, close: KO} = Telegram.WebApp
  , Yg = le(!1)
  , YO = (...e)=>{
    Telegram.WebApp.ready(...e),
    Yg.value = !0
}
  , qg = e=>Telegram.WebApp.platform === e
  , Wg = qg("unknown")
  , qO = !Wg && Telegram.WebApp.initData === "";
function Gg() {
    return {
        initData: UO,
        initDataUnsafe: BO,
        version: FO,
        platform: xO,
        isVersionAtLeast: HO,
        onEvent: (...e)=>{
            It(()=>Telegram.WebApp.onEvent(...e)),
            Ci(()=>Telegram.WebApp.offEvent(...e))
        }
        ,
        sendData: jO,
        ready: YO,
        close: KO,
        isReady: fr(Yg),
        isPlatform: qg,
        isPlatformUnknown: Wg,
        canSendData: qO
    }
}
const Jg = le(Telegram.WebApp.BackButton.isVisible);
function zg() {
    Jg.value = Telegram.WebApp.BackButton.isVisible
}
function lh(...e) {
    Telegram.WebApp.BackButton.show(...e),
    zg()
}
function ch(...e) {
    Telegram.WebApp.BackButton.hide(...e),
    zg()
}
function WO() {
    const {onEvent: e} = Gg()
      , t = n=>e("backButtonClicked", n);
    return {
        isBackButtonVisible: ue({
            get() {
                return Jg.value
            },
            set(n) {
                n ? lh() : ch()
            }
        }),
        onBackButtonClicked: t,
        showBackButton: lh,
        hideBackButton: ch
    }
}
Telegram.WebApp;
le(Telegram.WebApp.isClosingConfirmationEnabled);
Telegram.WebApp.CloudStorage;
const {impactOccurred: GO, notificationOccurred: JO, selectionChanged: zO} = Telegram.WebApp.HapticFeedback;
function QO() {
    return {
        impactOccurred: GO,
        notificationOccurred: JO,
        selectionChanged: zO
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
Gg();
le(Telegram.WebApp.SettingsButton.isVisible);
le(Telegram.WebApp.colorScheme);
le(Telegram.WebApp.themeParams);
le(Telegram.WebApp.headerColor);
le(Telegram.WebApp.backgroundColor);
le(Telegram.WebApp.isExpanded);
le(Telegram.WebApp.viewportHeight);
le(Telegram.WebApp.viewportStableHeight);
const Rn = Vn("ui", {
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
        link_whitepaper: "/docs/hk_wp_rev.0.2_july_30__2024.pdf",
        link_discord: "https://discord.gg/d2Q6VH8Psp",
        link_medium: "https://medium.com/@hamster_kombat",
        link_telegram_chat: "https://t.me/hamster_kombat_chat",
        progress_loading: 0,
        language_code: "",
        scroll_gap: 2,
        bottom_sheet_close_visible: !0
    }),
    actions: {
        async copyText(e) {
            const t = Cn.promise({
                title: re().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success(re().$i18n.t("messages.copy_success")),
                Je().trackEvent("copy_text_success_writeText")
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
                Je().trackEvent("copy_text_success_exec")) : (t == null || t.reject(re().$i18n.t("messages.copy_error")),
                Je().trackEvent("copy_text_error"))
            }
        },
        goBackButton() {
            const {$event: e} = re()
              , t = Kg();
            this.bottomSheetOpen ? e("bs:close") : this.modalOpen ? e("modal:close") : Vo(t(Fo.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject(re().$i18n.t("messages.oops")),
            this.notificationLevelUp = null,
            Bt().setStop(!1))
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
            VO().settings.haptic && QO().impactOccurred(e)
        },
        isRu(e) {
            return this.language_code === "ru" || e === "ru"
        },
        isYP() {
            return ["RU", "BY", "KZ", "UZ", "KG", "AZ", "AM", "GE"].indexOf(jn().location.country_code ?? "") > -1
        },
        isRUBY() {
            return ["RU", "BY"].indexOf(jn().location.country_code ?? "") > -1
        },
        isPECLMX() {
            return ["PE", "CL", "MX"].indexOf(jn().location.country_code ?? "") > -1
        },
        isBR() {
            return ["BR"].indexOf(jn().location.country_code ?? "") > -1
        }
    }
})
  , $a = Vn("morse", {
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
            (e = this.dailyCipher) != null && e.cipher && (this.dailyCipher.cipher.startsWith(this.morse_decoded) ? Rn().useHapticFeedback("heavy") : this.resetMorse(),
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
            return e.split("/").map(t=>Yk[t.trim()] || "").join("")
        },
        convertTapsToMorse() {
            return this.taps.map(e=>e.type).join("")
        },
        playSound(e) {
            const t = new Audio("/sound/dot.wav")
              , n = new Audio("/sound/dash.wav");
            let r;
            e === Dr.Dot ? r = t.cloneNode() : e === Dr.Dash && (r = n.cloneNode()),
            r == null || r.play()
        },
        async postClaimDailyCipher() {
            return await et.post("/clicker/claim-daily-cipher", {
                body: {
                    cipher: this.morse_decoded
                }
            }).then(e=>(Rn().useHapticFeedback("heavy"),
            Bt().setUserResponseData(e),
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
                    type: Dr.SymbolSeparator,
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
            this.last_input = e === Dr.Dot ? "●" : "—"
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
            this.dailyCipherInterval = Ut(()=>{
                var e;
                if ((e = this.dailyCipher) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Je().getNowTimestamp();
                    this.timestamp_daily_cipher && n - this.timestamp_daily_cipher > 1 && (t = n - this.timestamp_daily_cipher),
                    this.dailyCipher.remainSeconds -= t,
                    this.dailyCipher.remainSeconds <= 0 && (this.dailyCipher.remainSeconds = 0,
                    this.resetDailyCipherInterval(),
                    setTimeout(async()=>{
                        await an().postConfig().then(()=>{
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
                const n = Date.now() - this.tapStartTime < this.tapThreshold ? Dr.Dot : Dr.Dash;
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
  , el = Vn({
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
            return await et.post("/clicker/start-keys-minigame", {}).then(e=>(Bt().setUserResponseData(e),
            e != null && e.dailyKeysMiniGame ? (e.dailyKeysMiniGame.remainSecondsToGuess += .1,
            this.setDailyKeysMiniGame(e.dailyKeysMiniGame)) : this.dailyKeysMiniGame = null,
            e))
        },
        async postClaimDailyKeysMiniGame() {
            return await et.post("/clicker/claim-daily-keys-minigame", {
                body: {
                    cipher: this.cipher
                }
            }).then(e=>(Bt().setUserResponseData(e),
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
            this.matchMiniGameInterval = Ut(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToGuess) {
                    let t = 1;
                    const n = Je().getNowTimestamp();
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
            this.replayMiniGameInterval = Ut(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToNextAttempt) {
                    let t = 1;
                    const n = Je().getNowTimestamp();
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
            this.dailyMiniGameInterval = Ut(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Je().getNowTimestamp();
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
                    Je().trackEvent("minigame_puzzle_loose_period"),
                    Rn().useHapticFeedback("heavy")),
                    this.dailyKeysMiniGame = null,
                    setTimeout(async()=>{
                        await an().postConfig()
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
                const r = document.getElementById(this.$id).contentWindow
                  , i = new Date((e = this.dailyKeysMiniGame) == null ? void 0 : e.startDate).getTime() / 1e3
                  , o = "- - - - - -. - - - - - -.0 0 - - - -.- - - - - -.- - - - - -.- - - - - -"
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
  , an = Vn("config", {
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
            return await et.post("/clicker/config", {}).then(e=>{
                var t, n, r, i, o, s, a, l, c;
                return (t = e == null ? void 0 : e.clickerConfig) != null && t.maxPassiveDtSeconds && this.setMaxPassiveDtSeconds(e.clickerConfig.maxPassiveDtSeconds),
                (n = e == null ? void 0 : e.clickerConfig) != null && n.exchanges && this.setExchanges(e.clickerConfig.exchanges),
                (r = e == null ? void 0 : e.clickerConfig) != null && r.userLevels_balanceCoins && this.setUserLevelsBalanceCoins(e.clickerConfig.userLevels_balanceCoins),
                (i = e == null ? void 0 : e.clickerConfig) != null && i.levelUp && this.setLevelUp(e.clickerConfig.levelUp),
                (o = e == null ? void 0 : e.clickerConfig) != null && o.guidLink && this.setGuidLink(e.clickerConfig.guidLink),
                (s = e == null ? void 0 : e.clickerConfig) != null && s.referral && this.setReferralBonus(e.clickerConfig.referral),
                e != null && e.dailyCipher ? $a().setDailyCipher(e.dailyCipher) : ($a().dailyCipher = null,
                $a().resetMorse()),
                el().resetMiniGame(),
                e != null && e.dailyKeysMiniGame ? el().setDailyKeysMiniGame(e.dailyKeysMiniGame) : el().dailyKeysMiniGame = null,
                e != null && e.feature && this.setFeature(e.feature),
                (a = e == null ? void 0 : e.clickerConfig) != null && a.skins && this.setSkins(e.clickerConfig.skins),
                (l = e == null ? void 0 : e.clickerConfig) != null && l.telegramAuditory && this.setTelegramAuditory(e.clickerConfig.telegramAuditory),
                (c = e == null ? void 0 : e.clickerConfig) != null && c.subscribeChannelUrl && this.setTelegramLink(e.clickerConfig.subscribeChannelUrl),
                Bt().exchangeId && Bt().setExchangeId(Bt().exchangeId),
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
  , HM = "data:image/png;base64,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"
  , jM = "data:image/webp;base64,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"
  , XO = "data:image/png;base64,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"
  , KM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , YM = "data:image/png;base64,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"
  , qM = "data:image/png;base64,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"
  , WM = "data:image/png;base64,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"
  , ZO = Vn("boost", {
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
                return XO
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
            return await et.post("/clicker/boosts-for-buy", {}).then(e=>{
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
            return await et.post("/clicker/buy-boost", {
                body: {
                    boostId: e,
                    timestamp: Je().getNowTimestamp()
                }
            }).then(t=>(Rn().useHapticFeedback("heavy"),
            Bt().setUserResponseData(t),
            t != null && t.upgradesForBuy && fc().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            Je().trackEvent(Je().camelToSnake(e)),
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
  , fc = Vn("upgrade", {
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
                timestamp: Je().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = Ut(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = Je().getNowTimestampWithMS()
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
            return await et.post("/clicker/buy-upgrade", {
                body: {
                    upgradeId: e,
                    timestamp: Je().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, i;
                Rn().useHapticFeedback("heavy"),
                Bt().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && ZO().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((i = (r = this.upgradesForBuy) == null ? void 0 : r.find(o=>o.id === e)) == null ? void 0 : i.level) ?? 1;
                return Je().trackEvent(`mine_${Je().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await et.post("/clicker/claim-daily-combo", {}).then(e=>(Rn().useHapticFeedback("heavy"),
            Bt().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await et.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
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
            this.isDailyComboHasNewOpenedItems((e == null ? void 0 : e.upgradeIds) ?? [], (t == null ? void 0 : t.upgradeIds) ?? []) && !Bt().first_time_load && setTimeout(()=>{
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
            this.getDailyComboNotClaimed && !Bt().first_time_load && (Je().trackEvent(dg.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = re();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return Je().compareWithEmptyOldArray(e, this.dailyComboCount);
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
                this.cooldowns[n.id].timestamp = Je().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
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
            this.dailyComboInterval = Ut(()=>{
                var e;
                if ((e = this.dailyCombo) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Je().getNowTimestamp();
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
  , Bt = Vn("clicker", {
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
            const r = (Ne(this.balanceCoins) ?? 0) + e
              , i = e / 50
              , o = Math.floor(800 / e * i);
            let s = Ut(()=>{
                this.balanceCoins += i,
                this.balanceCoins >= r && (this.balanceCoins = r,
                clearInterval(s),
                s = null)
            }
            , o)
        },
        animateBalance() {
            this.balanceCoins < this.balanceTarget && (this.animate_interval = Ut(()=>{
                if (this.balanceCoins >= this.balanceTarget) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins++
            }
            , Jt.BALANCE_ANIMATION_SPEED)),
            this.balanceTarget < this.balanceCoins && (this.animate_interval = Ut(()=>{
                if (this.balanceTarget >= this.balanceCoins) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins--
            }
            , Jt.BALANCE_ANIMATION_SPEED))
        },
        calcEnergy() {
            let e = 1;
            const t = Je().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (an().maxPassiveDtSeconds_local <= (an().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = Je().getNowTimestamp();
                this.timestamp_passive && t - this.timestamp_passive > 1 && (e = t - this.timestamp_passive);
                const n = this.earnPassivePerSec ?? 0;
                this.totalCoins = this.totalCoins + e * n,
                this.balanceCoins = this.balanceCoins + e * n,
                an().maxPassiveDtSeconds_local += e,
                this.timestamp_passive = t
            }
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !jn().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            Rn().notificationLevelUp = Cn.promise({
                title: re().$i18n.t("messages.level_up_processing")
            }),
            this.earnStartInterval())
        },
        earn() {
            this.animate_interval !== null && (clearInterval(this.animate_interval),
            this.animate_interval = null,
            this.balanceCoins = this.balanceTarget),
            this.tap_interval === null && (this.tap_interval = Ut(()=>{
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
            , Jt.TAP_INTERVAL)
        },
        async earnStartInterval() {
            re().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${Je().getNowTimestamp()}
              timestamp dt: ${Je().getNowTimestamp() - this.lastSyncUpdate}
            `),
            await this.postTap(this.storageSyncTapsGet()),
            clearTimeout(this.sync_tap_timeout),
            this.sync_tap_timeout = null,
            this.tapDuration = 0,
            clearInterval(this.tap_interval),
            this.tap_interval = null
        },
        async postExchangeReferralStat(e=0) {
            return await et.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postSendReferralLink() {
            return await et.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSync() {
            return await et.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postReferrerInfo() {
            return await et.post("/clicker/referrer-info", {}).then(e=>(e.referrer && this.setReferrer(e.referrer),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(pe.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(pe.SYNC_AVAILABLE_TAPS);
            return await et.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : Je().getNowTimestamp()
                }
            }).then(i=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(i),
                this.storageSyncTapsSubtract(e);
                const o = Je().getNowTimestamp() - this.lastSyncUpdate;
                return o > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * o)),
                this.timer_leveUp || this.timerLevelUpStart(),
                i
            }
            ).catch(i=>{
                Cn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_tap")
                }),
                Rn().rejectNotificationLevelUp()
            }
            )
        },
        async postUserExchangeId(e) {
            return await et.post("/clicker/select-exchange", {
                body: {
                    exchangeId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserClaimDailyCombo(e) {
            return await et.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinBuy(e="skin0") {
            return await et.post("/clicker/buy-skin", {
                body: {
                    skinId: e,
                    timestamp: Je().getNowTimestamp()
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinSelect(e="skin0") {
            return await et.post("/clicker/select-skin", {
                body: {
                    skinId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        setAvailableTaps(e) {
            this.availableTaps = e,
            localStorage.setItem(pe.SYNC_AVAILABLE_TAPS, String(e))
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
                const n = (t = an().exchanges) == null ? void 0 : t.find(r=>r.id === e);
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
            an().maxPassiveDtSeconds_local = 0
        },
        setLevel(e) {
            var t, n;
            this.level = e,
            this.coinsToLevelUp = (n = (t = an().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === this.level)) == null ? void 0 : n.coinsToLeveUp
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
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : jn().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((l = e == null ? void 0 : e.clickerUser) == null ? void 0 : l.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (u = e == null ? void 0 : e.clickerUser) != null && u.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (d = e == null ? void 0 : e.clickerUser) != null && d.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (m = e == null ? void 0 : e.clickerUser) != null && m.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (b = e == null ? void 0 : e.clickerUser) != null && b.upgradesForBuy && fc().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (S = e == null ? void 0 : e.clickerUser) != null && S.upgrades && fc().setMyUpgrades(e.clickerUser.upgrades),
            (g = e == null ? void 0 : e.clickerUser) != null && g.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (E = e == null ? void 0 : e.clickerUser) != null && E.referrerId && this.setReferrerId(e.clickerUser.referrerId),
            (p = e == null ? void 0 : e.clickerUser) != null && p.level) {
                const L = (y = e == null ? void 0 : e.clickerUser) == null ? void 0 : y.level;
                if (this.level && this.level < L) {
                    const {$event: O} = re();
                    O("level-up:success")
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
            jn().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(pe.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(pe.SYNC_TAPS, String(n + e)),
            localStorage.setItem(pe.SYNC_TIMESTAMP_TAPS, String(Je().getNowTimestamp()))
        },
        storageSyncTapsGet() {
            const e = localStorage.getItem(pe.SYNC_TAPS);
            return e ? parseInt(e) ?? 0 : 0
        },
        storageSyncTapsReset() {
            localStorage.removeItem(pe.SYNC_TAPS)
        },
        storageSyncTapsSet(e) {
            localStorage.setItem(pe.SYNC_TAPS, String(e))
        },
        storageSyncTapsSubtract(e) {
            const t = localStorage.getItem(pe.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(pe.SYNC_TAPS, String(Math.max(0, n - e)))
        },
        timerEnergyReset() {
            this.timer_energy && clearInterval(this.timer_energy),
            this.timer_energy = null
        },
        timerEnergyStart() {
            this.timer_energy = Ut(this.calcEnergy, Jt.CALC_INTERVAL)
        },
        timerLevelUpReset() {
            this.timer_leveUp && clearInterval(this.timer_leveUp),
            this.timer_leveUp = null
        },
        timerLevelUpStart() {
            this.level !== this.getMaxUserLevel && this.timer_leveUp === null && (this.timer_leveUp = Ut(this.checkLevelUp, Jt.CALC_INTERVAL))
        },
        timerPassiveReset() {
            this.timer_passive && clearInterval(this.timer_passive),
            this.timer_passive = null
        },
        timerPassiveStart() {
            this.timer_passive = Ut(this.calcPassive, Jt.CALC_INTERVAL)
        },
        timerSyncReset() {
            this.timer_sync && clearInterval(this.timer_sync),
            this.timer_sync = null
        },
        timerSyncStart() {
            this.timer_sync = Ut(()=>{
                this.postSync().catch(e=>{
                    Cn.error({
                        title: re().$i18n.t("messages.request_error"),
                        message: re().$i18n.t("messages.no_sync")
                    }),
                    Rn().rejectNotificationLevelUp()
                }
                )
            }
            , Jt.SYNC_INTERVAL)
        },
        getCoinsToLevelUpByLevel(e) {
            var t, n;
            return ((n = (t = an().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === e)) == null ? void 0 : n.coinsToLeveUp) ?? 0
        }
    },
    getters: {
        getUserLevel() {
            return (this.level ?? 1) > 11 ? 11 : this.level ?? 1
        },
        getMaxUserLevel() {
            let e = 0;
            for (const t of an().userLevels_balanceCoins)
                t.level !== null && (e = Math.max(e, t.level));
            return e
        },
        getProgressLevel() {
            var n;
            let e = 0;
            const t = (n = an().userLevels_balanceCoins) == null ? void 0 : n.find(r=>r.level === this.level);
            return this.level === this.getMaxUserLevel && (e = 100),
            this.level && this.level !== this.getMaxUserLevel && t && (e = this.balanceCoins * 100 / t.coinsToLeveUp),
            Math.min(e, 100)
        },
        getUserBalanceFormatted() {
            return Je().numberFormat(this.balanceCoins, !1)
        }
    }
})
  , $O = async(e,t)=>{
    var i, o;
    const n = re();
    jn(n.$pinia);
    const r = Bt(n.$pinia);
    e && !((o = (i = e.name) == null ? void 0 : i.toString()) != null && o.includes("index")) && !r.exchangeId && Vo(Fo.GAME_SETTINGS_EXCHANGE)
}
  , eC = async e=>{
    let t, n;
    const r = ([t,n] = wn(()=>Bm(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , tC = [QS, $O, eC]
  , Xi = {};
function nC(e, t, n) {
    const {pathname: r, search: i, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const c = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let u = o.slice(c);
        return u[0] !== "/" && (u = "/" + u),
        If(u, "")
    }
    const a = If(r, e)
      , l = !n || Pl(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : i) + o
}
const rC = Pt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var b, S;
        let t, n, r = Gn().app.baseURL;
        Ht.hashMode && !r.includes("#") && (r += "#");
        const i = ((b = Ht.history) == null ? void 0 : b.call(Ht, r)) ?? (Ht.hashMode ? vS(r) : Jm(r))
          , o = ((S = Ht.routes) == null ? void 0 : S.call(Ht, dd)) ?? dd;
        let s;
        const a = nC(r, window.location, e.payload.path)
          , l = jS({
            ...Ht,
            scrollBehavior: (g,E,p)=>{
                if (E === ln) {
                    s = p;
                    return
                }
                if (Ht.scrollBehavior) {
                    if (l.options.scrollBehavior = Ht.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const y = l.beforeEach(()=>{
                            y(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return Ht.scrollBehavior(g, ln, s || p)
                }
            }
            ,
            history: i,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const c = pn(l.currentRoute.value);
        l.afterEach((g,E)=>{
            c.value = E
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: ()=>c.value
        });
        const u = pn(l.resolve(a))
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
        e._route = Oi(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = sa();
        try {
            [t,n] = wn(()=>l.isReady()),
            await t,
            n()
        } catch (g) {
            [t,n] = wn(()=>e.runWithContext(()=>oi(g))),
            await t,
            n()
        }
        const _ = e.payload.state._layout;
        return l.beforeEach(async(g,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            g.meta = Tt(g.meta),
            e.isHydrating && _ && !Yr(g.meta.layout) && (g.meta.layout = _),
            e._processingMiddleware = !0;
            {
                const y = new Set([...tC, ...e._middleware.global]);
                for (const T of g.matched) {
                    const A = T.meta.middleware;
                    if (A)
                        for (const L of uu(A))
                            y.add(L)
                }
                for (const T of y) {
                    const A = typeof T == "string" ? e._middleware.named[T] || await ((p = Xi[T]) == null ? void 0 : p.call(Xi).then(O=>O.default || O)) : T;
                    if (!A)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const L = await e.runWithContext(()=>A(g, E));
                    if (!e.payload.serverRendered && e.isHydrating && (L === !1 || L instanceof Error)) {
                        const O = L || Bl({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>oi(O)),
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
            !e.isHydrating && m.value && await e.runWithContext(OE),
            p && await e.callHook("page:loading:end"),
            g.matched.length === 0 && await e.runWithContext(()=>oi(Bl({
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
                l.options.scrollBehavior = Ht.scrollBehavior
            } catch (g) {
                await e.runWithContext(()=>oi(g))
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
  , dc = globalThis.requestIdleCallback || (e=>{
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
  , iC = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , ku = e=>{
    const t = re();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        dc(e)
    }
    ) : dc(e)
}
  , oC = Pt({
    name: "nuxt:payload",
    setup(e) {
        Wt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await Gf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        ku(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                Do(n).protocol || await Gf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(la, 1e3)
        }
        )
    }
})
  , sC = Pt(e=>{
    let t;
    async function n() {
        const r = await la();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const i = await $fetch(nu("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && e.hooks.callHook("app:manifest:update", i)
    }
    ku(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function Qg(e, t=Wt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const i = t._preloadPromises = t._preloadPromises || [];
    if (i.length > 4)
        return Promise.all(i).then(()=>Qg(e, t));
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
function aC(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = po(sessionStorage.getItem("nuxt:reload") || "{}")
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
const lC = (...e)=>e.find(t=>t !== void 0);
function Xg(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, i) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return uh(r, e.trailingSlash);
        const o = "path"in r && r.path !== void 0 ? r.path : i(r).path
          , s = {
            ...r,
            path: uh(o, e.trailingSlash)
        };
        return "name"in s && delete s.name,
        s
    }
    return Ue({
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
            const o = Wt()
              , s = Gn()
              , a = ue(()=>{
                const _ = r.to || r.href || "";
                return n(_, o.resolve)
            }
            )
              , l = ue(()=>typeof a.value == "string" && Nn(a.value, {
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
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !uC()) {
                const b = re();
                let S, g = null;
                It(()=>{
                    const E = cC();
                    ku(()=>{
                        S = dc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (g = E.observe(d.value, async()=>{
                                g == null || g(),
                                g = null;
                                const y = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                                await Promise.all([b.hooks.callHook("link:prefetch", y).catch(()=>{}
                                ), !u.value && Qg(a.value, o).catch(()=>{}
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
                yn(()=>{
                    S && iC(S),
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
                    ut(qr("RouterLink"), p, i.default)
                }
                const _ = typeof a.value == "object" ? ((g = o.resolve(a.value)) == null ? void 0 : g.href) ?? null : a.value && !r.external && !l.value ? n(Ri(s.app.baseURL, a.value), o.resolve) : a.value || null
                  , b = r.target || null
                  , S = lC(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || c.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!i.default)
                        return null;
                    const p = ()=>Vo(_, {
                        replace: r.replace,
                        external: r.external
                    });
                    return i.default({
                        href: _,
                        navigate: p,
                        get route() {
                            if (!_)
                                return;
                            const y = Do(_);
                            return {
                                path: y.pathname,
                                fullPath: y.pathname,
                                get query() {
                                    return tu(y.search)
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
                return ut("a", {
                    ref: d,
                    href: _,
                    rel: S,
                    target: b
                }, (E = i.default) == null ? void 0 : E.call(i))
            }
        }
    })
}
const GM = Xg(PT);
function uh(e, t) {
    const n = t === "append" ? ho : Mo;
    return Nn(e) && !e.startsWith("http") ? e : n(e, !0)
}
function cC() {
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
function uC() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const fC = Pt(e=>{
    const t = Ak();
    return e.vueApp.use(t),
    Bo(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , dC = Pt({
    name: "nuxt:global-components"
})
  , dr = {
    default: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/default.Tcz-iBhm.js"), __vite__mapDeps([29, 16, 2, 8, 3, 18, 1, 6]), import.meta.url).then(e=>e.default || e),
    main: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/main.DPPA64Ik.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , hC = Pt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Wt();
        e.hooks.hook("app:mounted", ()=>{
            t.beforeEach(async n=>{
                var i;
                const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
                r && typeof dr[r] == "function" && await dr[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n=>{
            if (Nn(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const i = r.meta.layout;
            let o = uu(r.meta.middleware);
            o = o.filter(s=>typeof s == "string");
            for (const s of o)
                typeof Xi[s] == "function" && Xi[s]();
            i && typeof dr[i] == "function" && dr[i]()
        }
        )
    }
});
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function JM(e) {
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
var Zg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
          , O = function(W) {
            return W instanceof U || !(!W || !W[L])
        }
          , C = function W(K, N, Y) {
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
            if (O(W))
                return W.clone();
            var N = typeof K == "object" ? K : {};
            return N.date = W,
            N.args = arguments,
            new U(N)
        }
          , x = y;
        x.l = C,
        x.i = O,
        x.w = function(W, K) {
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
                this.$L = C(N.locale, null, !0),
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
                    if (x.u(B))
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
                return x
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
                return x.u(N) ? this[Y] : this.set(B, N)
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
                  , ae = !!x.u(Y) || Y
                  , j = x.p(N)
                  , ce = function(Q, $) {
                    var ve = x.w(B.$u ? Date.UTC(B.$y, $, Q) : new Date(B.$y,$,Q), B);
                    return ae ? ve : ve.endOf(c)
                }
                  , _e = function(Q, $) {
                    return x.w(B.toDate()[Q].apply(B.toDate("s"), (ae ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($)), B)
                }
                  , Ye = this.$W
                  , ze = this.$M
                  , lt = this.$D
                  , $e = "set" + (this.$u ? "UTC" : "");
                switch (j) {
                case m:
                    return ae ? ce(1, 0) : ce(31, 11);
                case f:
                    return ae ? ce(1, ze) : ce(0, ze + 1);
                case u:
                    var H = this.$locale().weekStart || 0
                      , te = (Ye < H ? Ye + 7 : Ye) - H;
                    return ce(ae ? lt - te : lt + (6 - te), ze);
                case c:
                case _:
                    return _e($e + "Hours", 0);
                case l:
                    return _e($e + "Minutes", 1);
                case a:
                    return _e($e + "Seconds", 2);
                case s:
                    return _e($e + "Milliseconds", 3);
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
                var B, ae = x.p(N), j = "set" + (this.$u ? "UTC" : ""), ce = (B = {},
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
                    var Ye = this.clone().set(_, 1);
                    Ye.$d[ce](_e),
                    Ye.init(),
                    this.$d = Ye.set(_, Math.min(this.$D, Ye.daysInMonth())).$d
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
                return this[x.p(N)]()
            }
            ,
            K.add = function(N, Y) {
                var B, ae = this;
                N = Number(N);
                var j = x.p(Y)
                  , ce = function(ze) {
                    var lt = D(ae);
                    return x.w(lt.date(lt.date() + Math.round(ze * N)), ae)
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
                  , Ye = this.$d.getTime() + N * _e;
                return x.w(Ye, this)
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
                  , j = x.z(this)
                  , ce = this.$H
                  , _e = this.$m
                  , Ye = this.$M
                  , ze = B.weekdays
                  , lt = B.months
                  , $e = B.meridiem
                  , H = function($, ve, Be, h) {
                    return $ && ($[ve] || $(Y, ae)) || Be[ve].slice(0, h)
                }
                  , te = function($) {
                    return x.s(ce % 12 || 12, $, "0")
                }
                  , Q = $e || function($, ve, Be) {
                    var h = $ < 12 ? "AM" : "PM";
                    return Be ? h.toLowerCase() : h
                }
                ;
                return ae.replace(g, function($, ve) {
                    return ve || function(Be) {
                        switch (Be) {
                        case "YY":
                            return String(Y.$y).slice(-2);
                        case "YYYY":
                            return x.s(Y.$y, 4, "0");
                        case "M":
                            return Ye + 1;
                        case "MM":
                            return x.s(Ye + 1, 2, "0");
                        case "MMM":
                            return H(B.monthsShort, Ye, lt, 3);
                        case "MMMM":
                            return H(lt, Ye);
                        case "D":
                            return Y.$D;
                        case "DD":
                            return x.s(Y.$D, 2, "0");
                        case "d":
                            return String(Y.$W);
                        case "dd":
                            return H(B.weekdaysMin, Y.$W, ze, 2);
                        case "ddd":
                            return H(B.weekdaysShort, Y.$W, ze, 3);
                        case "dddd":
                            return ze[Y.$W];
                        case "H":
                            return String(ce);
                        case "HH":
                            return x.s(ce, 2, "0");
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
                            return x.s(_e, 2, "0");
                        case "s":
                            return String(Y.$s);
                        case "ss":
                            return x.s(Y.$s, 2, "0");
                        case "SSS":
                            return x.s(Y.$ms, 3, "0");
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
                var ae, j = this, ce = x.p(Y), _e = D(N), Ye = (_e.utcOffset() - this.utcOffset()) * r, ze = this - _e, lt = function() {
                    return x.m(j, _e)
                };
                switch (ce) {
                case m:
                    ae = lt() / 12;
                    break;
                case f:
                    ae = lt();
                    break;
                case d:
                    ae = lt() / 3;
                    break;
                case u:
                    ae = (ze - Ye) / 6048e5;
                    break;
                case c:
                    ae = (ze - Ye) / 864e5;
                    break;
                case l:
                    ae = ze / i;
                    break;
                case a:
                    ae = ze / r;
                    break;
                case s:
                    ae = ze / n;
                    break;
                default:
                    ae = ze
                }
                return B ? ae : x.a(ae)
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
                  , ae = C(N, Y, !0);
                return ae && (B.$L = ae),
                B
            }
            ,
            K.clone = function() {
                return x.w(this.$d, this)
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
        D.locale = C,
        D.isDayjs = O,
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
)(Zg);
var _n = Zg.exports;
const Un = Pi(_n);
var $g = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
)($g);
var pC = $g.exports;
const mC = Pi(pC);
var gC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
)(gC);
var yC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(yC);
var vC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(vC);
var _C = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(_C);
var bC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(bC);
var EC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(EC);
var TC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(TC);
var SC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(SC);
var AC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(AC);
var kC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(kC);
var wC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(_n)
    }
    )(At, function(n) {
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
)(wC);
var ey = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
                var O = S ? g.future : g.past;
                return typeof O == "function" ? O(b) : O.replace("%s", b)
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
)(ey);
var LC = ey.exports;
const OC = Pi(LC);
var ty = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
                      , O = L[0]
                      , C = 60 * +L[1] + +L[2];
                    return C === 0 ? 0 : O === "+" ? C : -C
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
)(ty);
var CC = ty.exports;
const RC = Pi(CC);
var ny = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
                  , O = +d;
                return (s.utc(L).valueOf() - (O -= O % 1e3)) / 6e4
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
                var E = function(A, L, O) {
                    var C = A - 60 * L * 1e3
                      , D = c(C, O);
                    if (L === D)
                        return [C, L];
                    var x = c(C -= 60 * (D - L) * 1e3, O);
                    return D === x ? [C, D] : [A - 60 * Math.min(D, x) * 1e3, Math.max(D, x)]
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
)(ny);
var IC = ny.exports;
const PC = Pi(IC);
var ry = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(At, function() {
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
)(ry);
var MC = ry.exports;
const DC = Pi(MC);
Un.extend(mC);
Un.extend(OC);
Un.extend(RC);
Un.extend(PC);
Un.extend(DC);
Un.tz.setDefault("Europe/Moscow");
Un.updateLocale("en");
Un.locale("en");
const NC = Pt(async e=>e.provide("dayjs", Un))
  , VC = ["top", "right", "bottom", "left"]
  , fh = ["start", "end"]
  , dh = VC.reduce((e,t)=>e.concat(t, t + "-" + fh[0], t + "-" + fh[1]), [])
  , bo = Math.min
  , Nr = Math.max
  , UC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , BC = {
    start: "end",
    end: "start"
};
function hc(e, t, n) {
    return Nr(e, bo(t, n))
}
function Zr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Dn(e) {
    return e.split("-")[0]
}
function dn(e) {
    return e.split("-")[1]
}
function iy(e) {
    return e === "x" ? "y" : "x"
}
function wu(e) {
    return e === "y" ? "height" : "width"
}
function Ho(e) {
    return ["top", "bottom"].includes(Dn(e)) ? "y" : "x"
}
function Lu(e) {
    return iy(Ho(e))
}
function oy(e, t, n) {
    n === void 0 && (n = !1);
    const r = dn(e)
      , i = Lu(e)
      , o = wu(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Fs(s)),
    [s, Fs(s)]
}
function FC(e) {
    const t = Fs(e);
    return [Bs(e), t, Bs(t)]
}
function Bs(e) {
    return e.replace(/start|end/g, t=>BC[t])
}
function xC(e, t, n) {
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
function HC(e, t, n, r) {
    const i = dn(e);
    let o = xC(Dn(e), n === "start", r);
    return i && (o = o.map(s=>s + "-" + i),
    t && (o = o.concat(o.map(Bs)))),
    o
}
function Fs(e) {
    return e.replace(/left|right|bottom|top/g, t=>UC[t])
}
function jC(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function sy(e) {
    return typeof e != "number" ? jC(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Zi(e) {
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
function hh(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = Ho(t)
      , s = Lu(t)
      , a = wu(s)
      , l = Dn(t)
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
    switch (dn(t)) {
    case "start":
        m[s] -= d * (n && c ? -1 : 1);
        break;
    case "end":
        m[s] += d * (n && c ? -1 : 1);
        break
    }
    return m
}
const KC = async(e,t,n)=>{
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: u, y: f} = hh(c, r, l)
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
        {x: u, y: f} = hh(c, d, l)),
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
async function va(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = Zr(t, e)
      , _ = sy(m)
      , S = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = Zi(await o.getClippingRect({
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
      , T = Zi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const YC = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: c, padding: u=0} = Zr(e, t) || {};
        if (c == null)
            return {};
        const f = sy(u)
          , d = {
            x: n,
            y: r
        }
          , m = Lu(i)
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
        const O = y / 2 - T / 2
          , C = L / 2 - b[_] / 2 - 1
          , D = bo(f[g], C)
          , x = bo(f[E], C)
          , U = D
          , Z = L - b[_] - x
          , W = L / 2 - b[_] / 2 + O
          , K = hc(U, W, Z)
          , N = !l.arrow && dn(i) != null && W !== K && o.reference[_] / 2 - (W < U ? D : x) - b[_] / 2 < 0
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
function qC(e, t, n) {
    return (e ? [...n.filter(i=>dn(i) === e), ...n.filter(i=>dn(i) !== e)] : n.filter(i=>Dn(i) === i)).filter(i=>e ? dn(i) === e || (t ? Bs(i) !== i : !1) : !0)
}
const WC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, i;
            const {rects: o, middlewareData: s, placement: a, platform: l, elements: c} = t
              , {crossAxis: u=!1, alignment: f, allowedPlacements: d=dh, autoAlignment: m=!0, ..._} = Zr(e, t)
              , b = f !== void 0 || d === dh ? qC(f || null, m, d) : d
              , S = await va(t, _)
              , g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = b[g];
            if (E == null)
                return {};
            const p = oy(E, o, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: b[0]
                    }
                };
            const y = [S[Dn(E)], S[p[0]], S[p[1]]]
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
                const x = dn(D.placement);
                return [D.placement, x && u ? D.overflows.slice(0, 2).reduce((U,Z)=>U + Z, 0) : D.overflows[0], D.overflows]
            }
            ).sort((D,x)=>D[1] - x[1])
              , C = ((i = L.filter(D=>D[2].slice(0, dn(D[0]) ? 2 : 3).every(x=>x <= 0))[0]) == null ? void 0 : i[0]) || L[0][0];
            return C !== a ? {
                data: {
                    index: g + 1,
                    overflows: T
                },
                reset: {
                    placement: C
                }
            } : {}
        }
    }
}
  , GC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: c} = t
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: _="none", flipAlignment: b=!0, ...S} = Zr(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = Dn(i)
              , E = Dn(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , y = d || (E || !b ? [Fs(a)] : FC(a));
            !d && _ !== "none" && y.push(...HC(a, b, _, p));
            const T = [a, ...y]
              , A = await va(t, S)
              , L = [];
            let O = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (u && L.push(A[g]),
            f) {
                const U = oy(i, s, p);
                L.push(A[U[0]], A[U[1]])
            }
            if (O = [...O, {
                placement: i,
                overflows: L
            }],
            !L.every(U=>U <= 0)) {
                var C, D;
                const U = (((C = o.flip) == null ? void 0 : C.index) || 0) + 1
                  , Z = T[U];
                if (Z)
                    return {
                        data: {
                            index: U,
                            overflows: O
                        },
                        reset: {
                            placement: Z
                        }
                    };
                let W = (D = O.filter(K=>K.overflows[0] <= 0).sort((K,N)=>K.overflows[1] - N.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!W)
                    switch (m) {
                    case "bestFit":
                        {
                            var x;
                            const K = (x = O.map(N=>[N.placement, N.overflows.filter(Y=>Y > 0).reduce((Y,B)=>Y + B, 0)]).sort((N,Y)=>N[1] - Y[1])[0]) == null ? void 0 : x[0];
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
async function JC(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = Dn(n)
      , a = dn(n)
      , l = Ho(n) === "y"
      , c = ["left", "top"].includes(s) ? -1 : 1
      , u = o && l ? -1 : 1
      , f = Zr(t, e);
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
const zC = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await JC(t, e);
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
  , QC = function(e) {
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
            }, ...l} = Zr(e, t)
              , c = {
                x: n,
                y: r
            }
              , u = await va(t, l)
              , f = Ho(Dn(i))
              , d = iy(f);
            let m = c[d]
              , _ = c[f];
            if (o) {
                const S = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , E = m + u[S]
                  , p = m - u[g];
                m = hc(E, m, p)
            }
            if (s) {
                const S = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , E = _ + u[S]
                  , p = _ - u[g];
                _ = hc(E, _, p)
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
  , XC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: i, elements: o} = t
              , {apply: s=()=>{}
            , ...a} = Zr(e, t)
              , l = await va(t, a)
              , c = Dn(n)
              , u = dn(n)
              , f = Ho(n) === "y"
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
                y = u || E ? bo(g, A) : A
            } else {
                const A = m - l.top - l.bottom;
                p = u || E ? bo(S, A) : A
            }
            if (E && !u) {
                const A = Nr(l.left, 0)
                  , L = Nr(l.right, 0)
                  , O = Nr(l.top, 0)
                  , C = Nr(l.bottom, 0);
                f ? y = d - 2 * (A !== 0 || L !== 0 ? A + L : Nr(l.left, l.right)) : p = m - 2 * (O !== 0 || C !== 0 ? O + C : Nr(l.top, l.bottom))
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
function tn(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function In(e) {
    return tn(e).getComputedStyle(e)
}
const ph = Math.min
  , $i = Math.max
  , xs = Math.round;
function ay(e) {
    const t = In(e);
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
function Er(e) {
    return cy(e) ? (e.nodeName || "").toLowerCase() : ""
}
let as;
function ly() {
    if (as)
        return as;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (as = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    as) : navigator.userAgent
}
function Pn(e) {
    return e instanceof tn(e).HTMLElement
}
function yr(e) {
    return e instanceof tn(e).Element
}
function cy(e) {
    return e instanceof tn(e).Node
}
function mh(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof tn(e).ShadowRoot || e instanceof ShadowRoot
}
function _a(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = In(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function ZC(e) {
    return ["table", "td", "th"].includes(Er(e))
}
function pc(e) {
    const t = /firefox/i.test(ly())
      , n = In(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(i=>n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i=>{
        const o = n.contain;
        return o != null && o.includes(i)
    }
    )
}
function uy() {
    return !/^((?!chrome|android).)*safari/i.test(ly())
}
function Ou(e) {
    return ["html", "body", "#document"].includes(Er(e))
}
function fy(e) {
    return yr(e) ? e : e.contextElement
}
const dy = {
    x: 1,
    y: 1
};
function pi(e) {
    const t = fy(e);
    if (!Pn(t))
        return dy;
    const n = t.getBoundingClientRect()
      , {width: r, height: i, fallback: o} = ay(t);
    let s = (o ? xs(n.width) : n.width) / r
      , a = (o ? xs(n.height) : n.height) / i;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function Eo(e, t, n, r) {
    var i, o;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = fy(e);
    let l = dy;
    t && (r ? yr(r) && (l = pi(r)) : l = pi(e));
    const c = a ? tn(a) : window
      , u = !uy() && n;
    let f = (s.left + (u && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x
      , d = (s.top + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , _ = s.height / l.y;
    if (a) {
        const b = tn(a)
          , S = r && yr(r) ? tn(r) : r;
        let g = b.frameElement;
        for (; g && r && S !== b; ) {
            const E = pi(g)
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
            g = tn(g).frameElement
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
function vr(e) {
    return ((cy(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function ba(e) {
    return yr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function hy(e) {
    return Eo(vr(e)).left + ba(e).scrollLeft
}
function To(e) {
    if (Er(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || mh(e) && e.host || vr(e);
    return mh(t) ? t.host : t
}
function py(e) {
    const t = To(e);
    return Ou(t) ? t.ownerDocument.body : Pn(t) && _a(t) ? t : py(t)
}
function Hs(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = py(e)
      , i = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = tn(r);
    return i ? t.concat(o, o.visualViewport || [], _a(r) ? r : []) : t.concat(r, Hs(r))
}
function gh(e, t, n) {
    return t === "viewport" ? Zi(function(r, i) {
        const o = tn(r)
          , s = vr(r)
          , a = o.visualViewport;
        let l = s.clientWidth
          , c = s.clientHeight
          , u = 0
          , f = 0;
        if (a) {
            l = a.width,
            c = a.height;
            const d = uy();
            (d || !d && i === "fixed") && (u = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: c,
            x: u,
            y: f
        }
    }(e, n)) : yr(t) ? Zi(function(r, i) {
        const o = Eo(r, !0, i === "fixed")
          , s = o.top + r.clientTop
          , a = o.left + r.clientLeft
          , l = Pn(r) ? pi(r) : {
            x: 1,
            y: 1
        };
        return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: s * l.y
        }
    }(t, n)) : Zi(function(r) {
        const i = vr(r)
          , o = ba(r)
          , s = r.ownerDocument.body
          , a = $i(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth)
          , l = $i(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let c = -o.scrollLeft + hy(r);
        const u = -o.scrollTop;
        return In(s).direction === "rtl" && (c += $i(i.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: c,
            y: u
        }
    }(vr(e)))
}
function yh(e) {
    return Pn(e) && In(e).position !== "fixed" ? e.offsetParent : null
}
function vh(e) {
    const t = tn(e);
    let n = yh(e);
    for (; n && ZC(n) && In(n).position === "static"; )
        n = yh(n);
    return n && (Er(n) === "html" || Er(n) === "body" && In(n).position === "static" && !pc(n)) ? t : n || function(r) {
        let i = To(r);
        for (; Pn(i) && !Ou(i); ) {
            if (pc(i))
                return i;
            i = To(i)
        }
        return null
    }(e) || t
}
function $C(e, t, n) {
    const r = Pn(t)
      , i = vr(t)
      , o = Eo(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((Er(t) !== "body" || _a(i)) && (s = ba(t)),
        Pn(t)) {
            const l = Eo(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            i && (a.x = hy(i));
    return {
        x: o.left + s.scrollLeft - a.x,
        y: o.top + s.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}
const e1 = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
        const o = n === "clippingAncestors" ? function(c, u) {
            const f = u.get(c);
            if (f)
                return f;
            let d = Hs(c).filter(S=>yr(S) && Er(S) !== "body")
              , m = null;
            const _ = In(c).position === "fixed";
            let b = _ ? To(c) : c;
            for (; yr(b) && !Ou(b); ) {
                const S = In(b)
                  , g = pc(b);
                (_ ? g || m : g || S.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = S : d = d.filter(E=>E !== b),
                b = To(b)
            }
            return u.set(c, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...o, r]
          , a = s[0]
          , l = s.reduce((c,u)=>{
            const f = gh(t, u, i);
            return c.top = $i(f.top, c.top),
            c.right = ph(f.right, c.right),
            c.bottom = ph(f.bottom, c.bottom),
            c.left = $i(f.left, c.left),
            c
        }
        , gh(t, a, i));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const i = Pn(n)
          , o = vr(n);
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
        if ((i || !i && r !== "fixed") && ((Er(n) !== "body" || _a(o)) && (s = ba(n)),
        Pn(n))) {
            const c = Eo(n);
            a = pi(n),
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
    isElement: yr,
    getDimensions: function(e) {
        return Pn(e) ? ay(e) : e.getBoundingClientRect()
    },
    getOffsetParent: vh,
    getDocumentElement: vr,
    getScale: pi,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const i = this.getOffsetParent || vh
          , o = this.getDimensions;
        return {
            reference: $C(t, await i(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await o(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>In(e).direction === "rtl"
}
  , t1 = (e,t,n)=>{
    const r = new Map
      , i = {
        platform: e1,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return KC(e, t, {
        ...i,
        platform: o
    })
}
;
function my(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? my(e[n], t[n]) : e[n] = t[n])
}
const hn = {
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
function So(e, t) {
    let n = hn.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = hn.themes[n.$extend] || {} : (n = null,
        r = hn[t]) : n = null;
    while (n);
    return r
}
function n1(e) {
    const t = [e];
    let n = hn.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = hn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function _h(e) {
    const t = [e];
    let n = hn.themes[e] || {};
    do
        n.$extend ? (t.push(n.$extend),
        n = hn.themes[n.$extend] || {}) : n = null;
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
let gy = !1;
typeof window < "u" && typeof navigator < "u" && (gy = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const yy = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , bh = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , Eh = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
};
function Th(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1)
}
function tl() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const fn = [];
let Rr = null;
const Sh = {};
function Ah(e) {
    let t = Sh[e];
    return t || (t = Sh[e] = []),
    t
}
let mc = function() {};
typeof window < "u" && (mc = window.Element);
function Fe(e) {
    return function(t) {
        return So(t.theme, e)
    }
}
const nl = "__floating-vue__popper"
  , vy = ()=>Ue({
    name: "VPopper",
    provide() {
        return {
            [nl]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [nl]: {
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
            default: Fe("disabled")
        },
        positioningDisabled: {
            type: Boolean,
            default: Fe("positioningDisabled")
        },
        placement: {
            type: String,
            default: Fe("placement"),
            validator: e=>yy.includes(e)
        },
        delay: {
            type: [String, Number, Object],
            default: Fe("delay")
        },
        distance: {
            type: [Number, String],
            default: Fe("distance")
        },
        skidding: {
            type: [Number, String],
            default: Fe("skidding")
        },
        triggers: {
            type: Array,
            default: Fe("triggers")
        },
        showTriggers: {
            type: [Array, Function],
            default: Fe("showTriggers")
        },
        hideTriggers: {
            type: [Array, Function],
            default: Fe("hideTriggers")
        },
        popperTriggers: {
            type: Array,
            default: Fe("popperTriggers")
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: Fe("popperShowTriggers")
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: Fe("popperHideTriggers")
        },
        container: {
            type: [String, Object, mc, Boolean],
            default: Fe("container")
        },
        boundary: {
            type: [String, mc],
            default: Fe("boundary")
        },
        strategy: {
            type: String,
            validator: e=>["absolute", "fixed"].includes(e),
            default: Fe("strategy")
        },
        autoHide: {
            type: [Boolean, Function],
            default: Fe("autoHide")
        },
        handleResize: {
            type: Boolean,
            default: Fe("handleResize")
        },
        instantMove: {
            type: Boolean,
            default: Fe("instantMove")
        },
        eagerMount: {
            type: Boolean,
            default: Fe("eagerMount")
        },
        popperClass: {
            type: [String, Array, Object],
            default: Fe("popperClass")
        },
        computeTransformOrigin: {
            type: Boolean,
            default: Fe("computeTransformOrigin")
        },
        autoMinSize: {
            type: Boolean,
            default: Fe("autoMinSize")
        },
        autoSize: {
            type: [Boolean, String],
            default: Fe("autoSize")
        },
        autoMaxSize: {
            type: Boolean,
            default: Fe("autoMaxSize")
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: Fe("autoBoundaryMaxSize")
        },
        preventOverflow: {
            type: Boolean,
            default: Fe("preventOverflow")
        },
        overflowPadding: {
            type: [Number, String],
            default: Fe("overflowPadding")
        },
        arrowPadding: {
            type: [Number, String],
            default: Fe("arrowPadding")
        },
        arrowOverflow: {
            type: Boolean,
            default: Fe("arrowOverflow")
        },
        flip: {
            type: Boolean,
            default: Fe("flip")
        },
        shift: {
            type: Boolean,
            default: Fe("shift")
        },
        shiftCrossAxis: {
            type: Boolean,
            default: Fe("shiftCrossAxis")
        },
        noAutoFocus: {
            type: Boolean,
            default: Fe("noAutoFocus")
        },
        disposeTimeout: {
            type: Number,
            default: Fe("disposeTimeout")
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
            return (e = this[nl]) == null ? void 0 : e.parentPopper
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
            (this.distance || this.skidding) && e.middleware.push(zC({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(WC({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(QC({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(GC({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push(YC({
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
            e.middleware.push(XC({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: i})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null
                }
            })));
            const n = await t1(this.$_referenceNode, this.$_popperNode, e);
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
            Rr && this.instantMove && Rr.instantMove && Rr !== this.parentPopper) {
                Rr.$_applyHide(!0),
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
            this.isShown && (Rr = this),
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
            await tl(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...Hs(this.$_referenceNode), ...Hs(this.$_popperNode)], "scroll", ()=>{
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
                for (let n = 0; n < fn.length; n++)
                    t = fn[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            fn.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of _h(this.theme))
                Ah(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await tl(),
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
            Th(fn, this),
            fn.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of _h(this.theme)) {
                const r = Ah(n);
                Th(r, this),
                r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
            }
            Rr === this && (Rr = null),
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
            await tl(),
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
            this.$_registerTriggerListeners(this.$_targetNodes, bh, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], bh, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, Eh, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], Eh, this.popperTriggers, this.popperHideTriggers, t)
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
            if (eo >= e.left && eo <= e.right && to >= e.top && to <= e.bottom) {
                const t = this.$_popperNode.getBoundingClientRect()
                  , n = eo - rr
                  , r = to - ir
                  , i = t.left + t.width / 2 - rr + (t.top + t.height / 2) - ir + t.width + t.height
                  , o = rr + n * i
                  , s = ir + r * i;
                return ls(rr, ir, o, s, t.left, t.top, t.left, t.bottom) || ls(rr, ir, o, s, t.left, t.top, t.right, t.top) || ls(rr, ir, o, s, t.right, t.top, t.right, t.bottom) || ls(rr, ir, o, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (gy) {
        const e = wi ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>kh(t, !0), e),
        document.addEventListener("touchend", t=>wh(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>kh(e, !1), !0),
        window.addEventListener("click", e=>wh(e, !1), !0);
    window.addEventListener("resize", i1)
}
function kh(e, t) {
    if (hn.autoHideOnMousedown)
        _y(e, t);
    else
        for (let n = 0; n < fn.length; n++) {
            const r = fn[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function wh(e, t) {
    hn.autoHideOnMousedown || _y(e, t)
}
function _y(e, t) {
    const n = {};
    for (let r = fn.length - 1; r >= 0; r--) {
        const i = fn[r];
        try {
            const o = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
            i.pendingHide = !1,
            requestAnimationFrame(()=>{
                if (i.pendingHide = !1,
                !n[i.randomId] && Lh(i, o, e)) {
                    if (i.$_handleGlobalClose(e, t),
                    !e.closeAllPopover && e.closePopover && o) {
                        let a = i.parentPopper;
                        for (; a; )
                            n[a.randomId] = !0,
                            a = a.parentPopper;
                        return
                    }
                    let s = i.parentPopper;
                    for (; s && Lh(s, s.containsGlobalTarget, e); )
                        s.$_handleGlobalClose(e, t),
                        s = s.parentPopper
                }
            }
            )
        } catch {}
    }
}
function Lh(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || r1(e, n) && !t
}
function r1(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function i1() {
    for (let e = 0; e < fn.length; e++)
        fn[e].$_computePosition()
}
let rr = 0
  , ir = 0
  , eo = 0
  , to = 0;
typeof window < "u" && window.addEventListener("mousemove", e=>{
    rr = eo,
    ir = to,
    eo = e.clientX,
    to = e.clientY
}
, wi ? {
    passive: !0
} : void 0);
function ls(e, t, n, r, i, o, s, a) {
    const l = ((s - i) * (t - o) - (a - o) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t))
      , c = ((n - e) * (t - o) - (r - t) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t));
    return l >= 0 && l <= 1 && c >= 0 && c <= 1
}
const o1 = {
    extends: vy()
}
  , Ea = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
;
function s1(e, t, n, r, i, o) {
    return me(),
    We("div", {
        ref: "reference",
        class: Ct(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [br(e.$slots, "default", rn(qt(e.slotData)))], 2)
}
const a1 = Ea(o1, [["render", s1]]);
function l1() {
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
let gs;
function gc() {
    gc.init || (gc.init = !0,
    gs = l1() !== -1)
}
var Ta = {
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
        gc(),
        Yt(()=>{
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
        gs && this.$el.appendChild(e),
        e.data = "about:blank",
        gs || this.$el.appendChild(e)
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
            this._resizeObject && this._resizeObject.onload && (!gs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const c1 = g0();
p0("data-v-b329ee4c");
const u1 = {
    class: "resize-observer",
    tabindex: "-1"
};
m0();
const f1 = c1((e,t,n,r,i,o)=>(me(),
vt("div", u1)));
Ta.render = f1;
Ta.__scopeId = "data-v-b329ee4c";
Ta.__file = "src/components/ResizeObserver.vue";
const by = (e="theme")=>({
    computed: {
        themeClass() {
            return n1(this[e])
        }
    }
})
  , d1 = Ue({
    name: "VPopperContent",
    components: {
        ResizeObserver: Ta
    },
    mixins: [by()],
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
  , h1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , p1 = {
    ref: "inner",
    class: "v-popper__inner"
}
  , m1 = ge("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , g1 = ge("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , y1 = [m1, g1];
function v1(e, t, n, r, i, o) {
    const s = qr("ResizeObserver");
    return me(),
    We("div", {
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
        style: On(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = Z_(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [ge("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), ge("div", {
        class: "v-popper__wrapper",
        style: On(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [ge("div", p1, [e.mounted ? (me(),
    We(pt, {
        key: 0
    }, [ge("div", null, [br(e.$slots, "default")]), e.handleResize ? (me(),
    vt(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : Kt("", !0)], 64)) : Kt("", !0)], 512), ge("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: On(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, y1, 4)], 4)], 46, h1)
}
const Ey = Ea(d1, [["render", v1]])
  , Ty = {
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
let yc = function() {};
typeof window < "u" && (yc = window.Element);
const _1 = Ue({
    name: "VPopperWrapper",
    components: {
        Popper: a1,
        PopperContent: Ey
    },
    mixins: [Ty, by("finalTheme")],
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
            type: [String, Object, yc, Boolean],
            default: void 0
        },
        boundary: {
            type: [String, yc],
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
function b1(e, t, n, r, i, o) {
    const s = qr("PopperContent")
      , a = qr("Popper");
    return me(),
    vt(a, vi({
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
        default: on(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, show: m, hide: _, handleResize: b, onResize: S, classes: g, result: E})=>[br(e.$slots, "default", {
            shown: c,
            show: m,
            hide: _
        }), Ze(s, {
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
            default: on(()=>[br(e.$slots, "popper", {
                shown: c,
                hide: _
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Cu = Ea(_1, [["render", b1]])
  , E1 = {
    ...Cu,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , T1 = {
    ...Cu,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , S1 = {
    ...Cu,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , A1 = Ue({
    name: "VTooltipDirective",
    components: {
        Popper: vy(),
        PopperContent: Ey
    },
    mixins: [Ty],
    inheritAttrs: !1,
    props: {
        theme: {
            type: String,
            default: "tooltip"
        },
        html: {
            type: Boolean,
            default: e=>So(e.theme, "html")
        },
        content: {
            type: [String, Number, Function],
            default: null
        },
        loadingContent: {
            type: String,
            default: e=>So(e.theme, "loadingContent")
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
  , k1 = ["innerHTML"]
  , w1 = ["textContent"];
function L1(e, t, n, r, i, o) {
    const s = qr("PopperContent")
      , a = qr("Popper");
    return me(),
    vt(a, vi({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: on(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, hide: m, handleResize: _, onResize: b, classes: S, result: g})=>[Ze(s, {
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
            default: on(()=>[e.html ? (me(),
            We("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, k1)) : (me(),
            We("div", {
                key: 1,
                textContent: zt(e.finalContent)
            }, null, 8, w1))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const O1 = Ea(A1, [["render", L1]])
  , Sy = "v-popper--has-tooltip";
function C1(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of yy)
            t[r] && (n = r);
    return n || (n = So(e.theme || "tooltip", "placement")),
    n
}
function Ay(e, t, n) {
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
let rl, Ao, R1 = 0;
function I1() {
    if (rl)
        return;
    Ao = le([]),
    rl = im({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: Ao
            }
        },
        render() {
            return this.directives.map(t=>ut(O1, {
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
    rl.mount(e)
}
function P1(e, t, n) {
    I1();
    const r = le(Ay(e, t, n))
      , i = le(!1)
      , o = {
        id: R1++,
        options: r,
        shown: i
    };
    return Ao.value.push(o),
    e.classList && e.classList.add(Sy),
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
function ky(e) {
    if (e.$_popper) {
        const t = Ao.value.indexOf(e.$_popper.item);
        t !== -1 && Ao.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(Sy)
}
function Oh(e, {value: t, modifiers: n}) {
    const r = Ay(e, t, n);
    if (!r.content || So(r.theme || "tooltip", "disabled"))
        ky(e);
    else {
        let i;
        e.$_popper ? (i = e.$_popper,
        i.options.value = r) : i = P1(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? i.show() : i.hide())
    }
}
const M1 = {
    beforeMount: Oh,
    updated: Oh,
    beforeUnmount(e) {
        ky(e)
    }
};
function Ch(e) {
    e.addEventListener("mousedown", js),
    e.addEventListener("click", js),
    e.addEventListener("touchstart", wy, wi ? {
        passive: !0
    } : !1)
}
function Rh(e) {
    e.removeEventListener("mousedown", js),
    e.removeEventListener("click", js),
    e.removeEventListener("touchstart", wy),
    e.removeEventListener("touchend", Ly),
    e.removeEventListener("touchcancel", Oy)
}
function js(e) {
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
        t.addEventListener("touchend", Ly),
        t.addEventListener("touchcancel", Oy)
    }
}
function Ly(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function Oy(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const D1 = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && Ch(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? Ch(e) : Rh(e))
    },
    beforeUnmount(e) {
        Rh(e)
    }
};
function N1(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    my(hn, t),
    e.directive("tooltip", M1),
    e.directive("close-popper", D1),
    e.component("VTooltip", S1),
    e.component("VDropdown", E1),
    e.component("VMenu", T1))
}
const V1 = {
    version: "5.2.2",
    install: N1,
    options: hn
}
  , U1 = Pt(e=>{
    e.vueApp.use(V1)
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
const B1 = Pt(({vueApp: e})=>{
    var i;
    const t = ((i = Gn().public) == null ? void 0 : i.notivue) || {}
      , n = Cy(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = SA(n);
    e.use(r)
}
);
function F1(e, {locales: t=[], localeCodes: n=[], baseUrl: r=YL, hooks: i={}, context: o={}}={}) {
    const s = Co()
      , a = e.install;
    return e.install = (l,...c)=>{
        const u = j1(c[0]) ? ft({}, c[0]) : {
            inject: !0
        };
        u.inject == null && (u.inject = !0);
        const f = u.__composerExtend;
        if (u.__composerExtend = b=>{
            const S = Si(e);
            b.locales = ue(()=>S.locales.value),
            b.localeCodes = ue(()=>S.localeCodes.value),
            b.baseUrl = ue(()=>S.baseUrl.value);
            let g;
            return Xe(f) && (g = Reflect.apply(f, u, [b])),
            ()=>{
                g && g()
            }
        }
        ,
        e.mode === "legacy") {
            const b = u.__vueI18nExtend;
            u.__vueI18nExtend = S=>{
                Ih(S, i.onExtendVueI18n);
                let g;
                return Xe(b) && (g = Reflect.apply(b, u, [S])),
                ()=>{
                    g && g()
                }
            }
        }
        c[0] = u,
        Reflect.apply(a, e, [l, ...c]);
        const d = Si(e);
        s.run(()=>{
            x1(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: i,
                context: o
            }),
            e.mode === "legacy" && Mg(e.global) && Ih(e.global, i.onExtendVueI18n)
        }
        );
        const m = l
          , _ = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (_ && H1(_, d, i.onExtendExportedGlobal),
        u.inject) {
            const b = Au(e);
            l.mixin({
                methods: {
                    getRouteBaseName: Ai,
                    resolveRoute: Zt(ya, b),
                    localePath: Zt(ga, b),
                    localeRoute: Zt(Tu, b),
                    localeLocation: Zt(dO, b),
                    switchLocalePath: Zt(ki, b),
                    localeHead: Zt(Ug, b)
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
    WL ? He(e.locale, ()=>{
        l.value = th(i, o)
    }
    , {
        immediate: !0
    }) : l.value = th(i, o),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function Ry(e, t, n) {
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
function H1(e, t, n) {
    Ry(t, e, n)
}
function Ih(e, t) {
    const n = Si(e);
    Ry(n, e, t)
}
function j1(e) {
    return Ve(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function K1() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = mt
      , n = `(${Jr.join("|")})`
      , r = `(?:${e}${t})?`
      , i = new RegExp(`${e}${n}${r}$`,"i")
      , o = lc(Jr);
    return a=>{
        if (Ve(a)) {
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
const Y1 = Pt({
    name: "i18n:plugin",
    parallel: jL,
    async setup(e) {
        let t, n;
        const r = oa()
          , {vueApp: i} = e
          , o = e
          , s = {
            ...mt
        };
        s.baseUrl = CO();
        const a = ([t,n] = wn(()=>rO(HL, re())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = K1()
          , c = p=>p || a.locale || "en-US"
          , u = IO();
        let f = ih(r, l, a.locale, c(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: u
        });
        a.messages = ([t,n] = wn(()=>iO(a.messages, ac, {
            localeCodes: Jr,
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
            const {locale: p, stat: y, reason: T, from: A} = s.detectBrowserLanguage ? jg(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: u
            }, f) : Hg;
            bO(d, p),
            b = !1
        }
        ),
        F1(d, {
            locales: s.locales,
            localeCodes: Jr,
            baseUrl: s.baseUrl,
            context: o,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = ue(()=>Eu.find(y=>y.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async y=>{
                        const T = _(y)
                          , [A] = await rh(y, d, T);
                        A && T && (m = !1);
                        const L = await o.runWithContext(()=>oh({
                            route: {
                                to: r
                            },
                            targetLocale: y,
                            routeLocaleGetter: l
                        }));
                        await o.runWithContext(async()=>await ah({
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
                    p.getLocaleCookie = ()=>PO(u),
                    p.setLocaleCookie = y=>MO(u, y),
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
                        d.__pendingLocale && (Dg(d, d.__pendingLocale),
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
                const y = Si(d);
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
        wO(o, d);
        let E = 0;
        wE("locale-changing", async(p,y)=>{
            let T, A;
            const L = ih(p, l, a.locale, ()=>ma(d) || c(s.defaultLocale), {
                ssg: S() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: u
            })
              , O = _(L)
              , [C] = ([T,A] = wn(()=>rh(L, d, O)),
            T = await T,
            A(),
            T);
            C && O && (m = !1);
            const D = ([T,A] = wn(()=>o.runWithContext(()=>oh({
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
            [T,A] = wn(()=>o.runWithContext(async()=>ah({
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
function Iy(e) {
    return Ro() ? (zs(e),
    !0) : !1
}
function Ru(e) {
    return typeof e == "function" ? e() : G(e)
}
const q1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const W1 = e=>e != null
  , G1 = Object.prototype.toString
  , Ks = e=>G1.call(e) === "[object Object]"
  , no = ()=>{}
;
function Py(e) {
    return e || vn()
}
function J1(...e) {
    if (e.length !== 1)
        return ii(...e);
    const t = e[0];
    return typeof t == "function" ? fr(vp(()=>({
        get: t,
        set: no
    }))) : le(t)
}
function z1(e, t=!0, n) {
    Py() ? It(e, n) : t ? e() : Yt(e)
}
function Q1(e, t) {
    Py(t) && Ci(e, t)
}
function ro(e) {
    var t;
    const n = Ru(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const My = q1 ? window : void 0;
function Dt(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = My) : [t,n,r,i] = e,
    !t)
        return no;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = ()=>{
        o.forEach(u=>u()),
        o.length = 0
    }
      , a = (u,f,d,m)=>(u.addEventListener(f, d, m),
    ()=>u.removeEventListener(f, d, m))
      , l = He(()=>[ro(t), Ru(i)], ([u,f])=>{
        if (s(),
        !u)
            return;
        const d = Ks(f) ? {
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
    return Iy(c),
    c
}
function X1() {
    const e = le(!1)
      , t = vn();
    return t && It(()=>{
        e.value = !0
    }
    , t),
    e
}
function Z1(e) {
    const t = X1();
    return ue(()=>(t.value,
    !!e()))
}
function $1(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=My, immediate: a=!0} = n
      , l = Z1(()=>s && "IntersectionObserver"in s)
      , c = ue(()=>{
        const _ = Ru(e);
        return (Array.isArray(_) ? _ : [_]).map(ro).filter(W1)
    }
    );
    let u = no;
    const f = le(a)
      , d = l.value ? He(()=>[c.value, ro(r), f.value], ([_,b])=>{
        if (u(),
        !f.value || !_.length)
            return;
        const S = new IntersectionObserver(t,{
            root: ro(b),
            rootMargin: i,
            threshold: o
        });
        _.forEach(g=>g && S.observe(g)),
        u = ()=>{
            S.disconnect(),
            u = no
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : no
      , m = ()=>{
        u(),
        d(),
        f.value = !1
    }
    ;
    return Iy(m),
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
function zM(e, t={}) {
    const n = J1(e)
      , {threshold: r=50, onSwipe: i, onSwipeEnd: o, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = Tt({
        x: 0,
        y: 0
    })
      , c = (L,O)=>{
        l.x = L,
        l.y = O
    }
      , u = Tt({
        x: 0,
        y: 0
    })
      , f = (L,O)=>{
        u.x = L,
        u.y = O
    }
      , d = ue(()=>l.x - u.x)
      , m = ue(()=>l.y - u.y)
      , {max: _, abs: b} = Math
      , S = ue(()=>_(b(d.value), b(m.value)) >= r)
      , g = le(!1)
      , E = le(!1)
      , p = ue(()=>S.value ? b(d.value) > b(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , y = L=>{
        var O, C, D;
        const x = L.buttons === 0
          , U = L.buttons === 1;
        return (D = (C = (O = t.pointerTypes) == null ? void 0 : O.includes(L.pointerType)) != null ? C : x || U) != null ? D : !0
    }
      , T = [Dt(e, "pointerdown", L=>{
        if (!y(L))
            return;
        E.value = !0;
        const O = L.target;
        O == null || O.setPointerCapture(L.pointerId);
        const {clientX: C, clientY: D} = L;
        c(C, D),
        f(C, D),
        s == null || s(L)
    }
    ), Dt(e, "pointermove", L=>{
        if (!y(L) || !E.value)
            return;
        const {clientX: O, clientY: C} = L;
        f(O, C),
        !g.value && S.value && (g.value = !0),
        g.value && (i == null || i(L))
    }
    ), Dt(e, "pointerup", L=>{
        y(L) && (g.value && (o == null || o(L, p.value)),
        E.value = !1,
        g.value = !1)
    }
    )];
    z1(()=>{
        var L, O, C, D, x, U, Z, W;
        (O = (L = n.value) == null ? void 0 : L.style) == null || O.setProperty("touch-action", "none"),
        a && ((D = (C = n.value) == null ? void 0 : C.style) == null || D.setProperty("-webkit-user-select", "none"),
        (U = (x = n.value) == null ? void 0 : x.style) == null || U.setProperty("-ms-user-select", "none"),
        (W = (Z = n.value) == null ? void 0 : Z.style) == null || W.setProperty("user-select", "none"))
    }
    );
    const A = ()=>T.forEach(L=>L());
    return {
        isSwiping: fr(g),
        direction: fr(p),
        posStart: fr(l),
        posEnd: fr(u),
        distanceX: d,
        distanceY: m,
        stop: A
    }
}
const Dy = 1 / 60 * 1e3
  , eR = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , Ny = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(eR()), Dy);
function tR(e) {
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
const nR = 40;
let vc = !0
  , ko = !1
  , _c = !1;
const mi = {
    delta: 0,
    timestamp: 0
}
  , jo = ["read", "update", "preRender", "render", "postRender"]
  , Sa = jo.reduce((e,t)=>(e[t] = tR(()=>ko = !0),
e), {})
  , bc = jo.reduce((e,t)=>{
    const n = Sa[t];
    return e[t] = (r,i=!1,o=!1)=>(ko || oR(),
    n.schedule(r, i, o)),
    e
}
, {})
  , rR = jo.reduce((e,t)=>(e[t] = Sa[t].cancel,
e), {});
jo.reduce((e,t)=>(e[t] = ()=>Sa[t].process(mi),
e), {});
const iR = e=>Sa[e].process(mi)
  , Vy = e=>{
    ko = !1,
    mi.delta = vc ? Dy : Math.max(Math.min(e - mi.timestamp, nR), 1),
    mi.timestamp = e,
    _c = !0,
    jo.forEach(iR),
    _c = !1,
    ko && (vc = !1,
    Ny(Vy))
}
  , oR = ()=>{
    ko = !0,
    vc = !0,
    _c || Ny(Vy)
}
  , Uy = ()=>mi;
function By(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Ph = function() {};
const Ec = (e,t,n)=>Math.min(Math.max(n, e), t)
  , il = .001
  , sR = .01
  , aR = 10
  , lR = .05
  , cR = 1;
function uR({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = Ec(lR, cR, s),
    e = Ec(sR, aR, e / 1e3),
    s < 1 ? (i = c=>{
        const u = c * s
          , f = u * e
          , d = u - n
          , m = Tc(c, s)
          , _ = Math.exp(-f);
        return il - d / m * _
    }
    ,
    o = c=>{
        const f = c * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(c, 2) * e
          , _ = Math.exp(-f)
          , b = Tc(Math.pow(c, 2), s);
        return (-i(c) + il > 0 ? -1 : 1) * ((d - m) * _) / b
    }
    ) : (i = c=>{
        const u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -il + u * f
    }
    ,
    o = c=>{
        const u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    const a = 5 / e
      , l = dR(i, o, a);
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
const fR = 12;
function dR(e, t, n) {
    let r = n;
    for (let i = 1; i < fR; i++)
        r = r - e(r) / t(r);
    return r
}
function Tc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const hR = ["duration", "bounce"]
  , pR = ["stiffness", "damping", "mass"];
function Mh(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function mR(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Mh(e, pR) && Mh(e, hR)) {
        const n = uR(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Iu(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = By(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: c, velocity: u, duration: f, isResolvedFromDuration: d} = mR(o)
      , m = Dh
      , _ = Dh;
    function b() {
        const S = u ? -(u / 1e3) : 0
          , g = n - t
          , E = l / (2 * Math.sqrt(a * c))
          , p = Math.sqrt(a / c) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const y = Tc(p, E);
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
Iu.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const Dh = e=>0
  , Fy = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Pu = (e,t,n)=>-n * e + n * t + e
  , xy = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , io = e=>e % 1 ? Number(e.toFixed(5)) : e
  , wo = /(-)?([\d]*\.?[\d])+/g
  , Sc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , gR = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ko(e) {
    return typeof e == "string"
}
const Yo = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , oo = Object.assign(Object.assign({}, Yo), {
    transform: xy(0, 1)
})
  , cs = Object.assign(Object.assign({}, Yo), {
    default: 1
})
  , Mu = e=>({
    test: t=>Ko(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Ir = Mu("deg")
  , so = Mu("%")
  , be = Mu("px")
  , Nh = Object.assign(Object.assign({}, so), {
    parse: e=>so.parse(e) / 100,
    transform: e=>so.transform(e * 100)
})
  , Du = (e,t)=>n=>!!(Ko(n) && gR.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Hy = (e,t,n)=>r=>{
    if (!Ko(r))
        return r;
    const [i,o,s,a] = r.match(wo);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Br = {
    test: Du("hsl", "hue"),
    parse: Hy("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + so.transform(io(t)) + ", " + so.transform(io(n)) + ", " + io(oo.transform(r)) + ")"
}
  , yR = xy(0, 255)
  , ol = Object.assign(Object.assign({}, Yo), {
    transform: e=>Math.round(yR(e))
})
  , hr = {
    test: Du("rgb", "red"),
    parse: Hy("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + ol.transform(e) + ", " + ol.transform(t) + ", " + ol.transform(n) + ", " + io(oo.transform(r)) + ")"
};
function vR(e) {
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
const Ac = {
    test: Du("#"),
    parse: vR,
    transform: hr.transform
}
  , Vt = {
    test: e=>hr.test(e) || Ac.test(e) || Br.test(e),
    parse: e=>hr.test(e) ? hr.parse(e) : Br.test(e) ? Br.parse(e) : Ac.parse(e),
    transform: e=>Ko(e) ? e : e.hasOwnProperty("red") ? hr.transform(e) : Br.transform(e)
}
  , jy = "${c}"
  , Ky = "${n}";
function _R(e) {
    var t, n, r, i;
    return isNaN(e) && Ko(e) && ((n = (t = e.match(wo)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(Sc)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function Yy(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Sc);
    r && (n = r.length,
    e = e.replace(Sc, jy),
    t.push(...r.map(Vt.parse)));
    const i = e.match(wo);
    return i && (e = e.replace(wo, Ky),
    t.push(...i.map(Yo.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function qy(e) {
    return Yy(e).values
}
function Wy(e) {
    const {values: t, numColors: n, tokenised: r} = Yy(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let a = 0; a < i; a++)
            s = s.replace(a < n ? jy : Ky, a < n ? Vt.transform(o[a]) : io(o[a]));
        return s
    }
}
const bR = e=>typeof e == "number" ? 0 : e;
function ER(e) {
    const t = qy(e);
    return Wy(e)(t.map(bR))
}
const qo = {
    test: _R,
    parse: qy,
    createTransformer: Wy,
    getAnimatableNone: ER
}
  , TR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function SR(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(wo) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = TR.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const AR = /([a-z-]*)\(.*?\)/g
  , kc = Object.assign(Object.assign({}, qo), {
    getAnimatableNone: e=>{
        const t = e.match(AR);
        return t ? t.map(SR).join(" ") : e
    }
});
function sl(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Vh({hue: e, saturation: t, lightness: n, alpha: r}) {
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
        i = sl(l, a, e + 1 / 3),
        o = sl(l, a, e),
        s = sl(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const kR = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , wR = [Ac, hr, Br]
  , Uh = e=>wR.find(t=>t.test(e))
  , Gy = (e,t)=>{
    let n = Uh(e)
      , r = Uh(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === Br && (i = Vh(i),
    n = hr),
    r === Br && (o = Vh(o),
    r = hr);
    const s = Object.assign({}, i);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = kR(i[l], o[l], a));
        return s.alpha = Pu(i.alpha, o.alpha, a),
        n.transform(s)
    }
}
  , LR = e=>typeof e == "number"
  , OR = (e,t)=>n=>t(e(n))
  , Jy = (...e)=>e.reduce(OR);
function zy(e, t) {
    return LR(e) ? n=>Pu(e, t, n) : Vt.test(e) ? Gy(e, t) : Xy(e, t)
}
const Qy = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>zy(o, t[s]));
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
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = zy(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function Bh(e) {
    const t = qo.parse(e)
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
const Xy = (e,t)=>{
    const n = qo.createTransformer(t)
      , r = Bh(e)
      , i = Bh(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? Jy(Qy(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , RR = (e,t)=>n=>Pu(e, t, n);
function IR(e) {
    if (typeof e == "number")
        return RR;
    if (typeof e == "string")
        return Vt.test(e) ? Gy : Xy;
    if (Array.isArray(e))
        return Qy;
    if (typeof e == "object")
        return CR
}
function PR(e, t, n) {
    const r = []
      , i = n || IR(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = Jy(l, a)
        }
        r.push(a)
    }
    return r
}
function MR([e,t], [n]) {
    return r=>n(Fy(e, t, r))
}
function DR(e, t) {
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
        const a = Fy(e[o], e[o + 1], i);
        return t[o](a)
    }
}
function Zy(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Ph(o === t.length),
    Ph(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = PR(t, r, i)
      , a = o === 2 ? MR(e, s) : DR(e, s);
    return n ? l=>a(Ec(e[0], e[o - 1], l)) : a
}
const Aa = e=>t=>1 - e(1 - t)
  , Nu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , NR = e=>t=>Math.pow(t, e)
  , $y = e=>t=>t * t * ((e + 1) * t - e)
  , VR = e=>{
    const t = $y(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , ev = 1.525
  , UR = 4 / 11
  , BR = 8 / 11
  , FR = 9 / 10
  , tv = e=>e
  , Vu = NR(2)
  , xR = Aa(Vu)
  , nv = Nu(Vu)
  , rv = e=>1 - Math.sin(Math.acos(e))
  , iv = Aa(rv)
  , HR = Nu(iv)
  , Uu = $y(ev)
  , jR = Aa(Uu)
  , KR = Nu(Uu)
  , YR = VR(ev)
  , qR = 4356 / 361
  , WR = 35442 / 1805
  , GR = 16061 / 1805
  , Ys = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < UR ? 7.5625 * t : e < BR ? 9.075 * t - 9.9 * e + 3.4 : e < FR ? qR * t - WR * e + GR : 10.8 * e * e - 20.52 * e + 10.72
}
  , JR = Aa(Ys)
  , zR = e=>e < .5 ? .5 * (1 - Ys(1 - e * 2)) : .5 * Ys(e * 2 - 1) + .5;
function QR(e, t) {
    return e.map(()=>t || nv).splice(0, e.length - 1)
}
function XR(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function ZR(e, t) {
    return e.map(n=>n * t)
}
function ys({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = ZR(r && r.length === s.length ? r : XR(s), i);
    function l() {
        return Zy(a, s, {
            ease: Array.isArray(n) ? n : QR(s, n)
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
function $R({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
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
const Fh = {
    keyframes: ys,
    spring: Iu,
    decay: $R
};
function eI(e) {
    if (Array.isArray(e.to))
        return ys;
    if (Fh[e.type])
        return Fh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? ys : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Iu : ys
}
function ov(e, t, n=0) {
    return e - t - n
}
function tI(e, t, n=0, r=!0) {
    return r ? ov(t + -e, t, n) : t - (e - t) + n
}
function nI(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const rI = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>bc.update(t, !0),
        stop: ()=>rR.update(t)
    }
}
;
function sv(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=rI, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: c=0, onPlay: u, onStop: f, onComplete: d, onRepeat: m, onUpdate: _} = e, b = By(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: S} = b, g, E = 0, p = b.duration, y, T = !1, A = !0, L;
    const O = eI(b);
    !((n = (t = O).needsInterpolation) === null || n === void 0) && n.call(t, r, S) && (L = Zy([0, 100], [r, S], {
        clamp: !1
    }),
    r = 0,
    S = 100);
    const C = O(Object.assign(Object.assign({}, b), {
        from: r,
        to: S
    }));
    function D() {
        E++,
        l === "reverse" ? (A = E % 2 === 0,
        s = tI(s, p, c, A)) : (s = ov(s, p, c),
        l === "mirror" && C.flipTarget()),
        T = !1,
        m && m()
    }
    function x() {
        g.stop(),
        d && d()
    }
    function U(W) {
        if (A || (W = -W),
        s += W,
        !T) {
            const K = C.next(Math.max(0, s));
            y = K.value,
            L && (y = L(y)),
            T = A ? K.done : s <= 0
        }
        _ == null || _(y),
        T && (E === 0 && (p ?? (p = s)),
        E < a ? nI(s, p, c, A) && D() : x())
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
function av(e, t) {
    return t ? e * (1e3 / t) : 0
}
function iI({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: c, driver: u, onUpdate: f, onComplete: d, onStop: m}) {
    let _;
    function b(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function S(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function g(p) {
        _ == null || _.stop(),
        _ = sv(Object.assign(Object.assign({}, p), {
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
        const O = C=>{
            A = L,
            L = C,
            t = av(C - A, Uy().delta),
            (T === 1 && C > y || T === -1 && C < y) && E({
                from: C,
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
            onUpdate: b(p) ? O : void 0
        })
    }
    return {
        stop: ()=>_ == null ? void 0 : _.stop()
    }
}
const lv = (e,t)=>1 - 3 * t + 3 * e
  , cv = (e,t)=>3 * t - 6 * e
  , uv = e=>3 * e
  , qs = (e,t,n)=>((lv(t, n) * e + cv(t, n)) * e + uv(t)) * e
  , fv = (e,t,n)=>3 * lv(t, n) * e * e + 2 * cv(t, n) * e + uv(t)
  , oI = 1e-7
  , sI = 10;
function aI(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = qs(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > oI && ++a < sI);
    return s
}
const lI = 8
  , cI = .001;
function uI(e, t, n, r) {
    for (let i = 0; i < lI; ++i) {
        const o = fv(t, n, r);
        if (o === 0)
            return t;
        const s = qs(t, n, r) - e;
        t -= s / o
    }
    return t
}
const vs = 11
  , us = 1 / (vs - 1);
function fI(e, t, n, r) {
    if (e === t && n === r)
        return tv;
    const i = new Float32Array(vs);
    for (let s = 0; s < vs; ++s)
        i[s] = qs(s * us, e, n);
    function o(s) {
        let a = 0
          , l = 1;
        const c = vs - 1;
        for (; l !== c && i[l] <= s; ++l)
            a += us;
        --l;
        const u = (s - i[l]) / (i[l + 1] - i[l])
          , f = a + u * us
          , d = fv(f, e, n);
        return d >= cI ? uI(s, f, e, n) : d === 0 ? f : aI(s, a, a + us, e, n)
    }
    return s=>s === 0 || s === 1 ? s : qs(o(s), t, r)
}
const al = {};
var dI = Object.defineProperty
  , hI = (e,t,n)=>t in e ? dI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , pI = (e,t,n)=>(hI(e, typeof t != "symbol" ? t + "" : t, n),
n);
class mI {
    constructor() {
        pI(this, "subscriptions", new Set)
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
var gI = Object.defineProperty
  , yI = (e,t,n)=>t in e ? gI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Tn = (e,t,n)=>(yI(e, typeof t != "symbol" ? t + "" : t, n),
n);
function xh(e) {
    return !isNaN(parseFloat(e))
}
class vI {
    constructor(t) {
        Tn(this, "current"),
        Tn(this, "prev"),
        Tn(this, "timeDelta", 0),
        Tn(this, "lastUpdated", 0),
        Tn(this, "updateSubscribers", new mI),
        Tn(this, "stopAnimation"),
        Tn(this, "canTrackVelocity", !1),
        Tn(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: i} = Uy();
            this.lastUpdated !== i && (this.timeDelta = r,
            this.lastUpdated = i),
            bc.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        Tn(this, "scheduleVelocityCheck", ()=>bc.postRender(this.velocityCheck)),
        Tn(this, "velocityCheck", ({timestamp: n})=>{
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
        return this.canTrackVelocity ? av(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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
function _I(e) {
    return new vI(e)
}
const {isArray: bI} = Array;
function EI() {
    const e = le({})
      , t = r=>{
        const i = o=>{
            e.value[o] && (e.value[o].stop(),
            e.value[o].destroy(),
            delete e.value[o])
        }
        ;
        r ? bI(r) ? r.forEach(i) : i(r) : Object.keys(e.value).forEach(i)
    }
      , n = (r,i,o)=>{
        if (e.value[r])
            return e.value[r];
        const s = _I(i);
        return s.onChange(a=>o[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return Q1(t),
    {
        motionValues: e,
        get: n,
        stop: t
    }
}
function TI(e) {
    return Array.isArray(e)
}
function Pr() {
    return {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restDelta: .5,
        restSpeed: 10
    }
}
function ll(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function SI(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 100 : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function cl() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function AI(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const Hh = {
    default: SI,
    x: Pr,
    y: Pr,
    z: Pr,
    rotate: Pr,
    rotateX: Pr,
    rotateY: Pr,
    rotateZ: Pr,
    scaleX: ll,
    scaleY: ll,
    scale: ll,
    backgroundColor: cl,
    color: cl,
    opacity: cl
};
function dv(e, t) {
    let n;
    return TI(t) ? n = AI : n = Hh[e] || Hh.default,
    {
        to: t,
        ...n(t)
    }
}
const jh = {
    ...Yo,
    transform: Math.round
}
  , hv = {
    color: Vt,
    backgroundColor: Vt,
    outlineColor: Vt,
    fill: Vt,
    stroke: Vt,
    borderColor: Vt,
    borderTopColor: Vt,
    borderRightColor: Vt,
    borderBottomColor: Vt,
    borderLeftColor: Vt,
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
    rotate: Ir,
    rotateX: Ir,
    rotateY: Ir,
    rotateZ: Ir,
    scale: cs,
    scaleX: cs,
    scaleY: cs,
    scaleZ: cs,
    skew: Ir,
    skewX: Ir,
    skewY: Ir,
    distance: be,
    translateX: be,
    translateY: be,
    translateZ: be,
    x: be,
    y: be,
    z: be,
    perspective: be,
    transformPerspective: be,
    opacity: oo,
    originX: Nh,
    originY: Nh,
    originZ: be,
    zIndex: jh,
    filter: kc,
    WebkitFilter: kc,
    fillOpacity: oo,
    strokeOpacity: oo,
    numOctaves: jh
}
  , Bu = e=>hv[e];
function pv(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function kI(e, t) {
    let n = Bu(e);
    return n !== kc && (n = qo),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const wI = {
    linear: tv,
    easeIn: Vu,
    easeInOut: nv,
    easeOut: xR,
    circIn: rv,
    circInOut: HR,
    circOut: iv,
    backIn: Uu,
    backInOut: KR,
    backOut: jR,
    anticipate: YR,
    bounceIn: JR,
    bounceInOut: zR,
    bounceOut: Ys
};
function Kh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,i] = e;
        return fI(t, n, r, i)
    } else if (typeof e == "string")
        return wI[e];
    return e
}
function LI(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function Yh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && qo.test(t) && !t.startsWith("url("))
}
function OI(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function CI({ease: e, times: t, delay: n, ...r}) {
    const i = {
        ...r
    };
    return t && (i.offset = t),
    e && (i.ease = LI(e) ? e.map(Kh) : Kh(e)),
    n && (i.elapsed = -n),
    i
}
function RI(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    OI(t),
    II(e) || (e = {
        ...e,
        ...dv(n, t.to)
    }),
    {
        ...t,
        ...CI(e)
    }
}
function II({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: i, ...o}) {
    return !!Object.keys(o).length
}
function PI(e, t) {
    return e[t] || e.default || e
}
function MI(e, t, n, r, i) {
    const o = PI(r, e);
    let s = o.from === null || o.from === void 0 ? t.get() : o.from;
    const a = Yh(e, n);
    s === "none" && a && typeof n == "string" && (s = kI(e, n));
    const l = Yh(e, s);
    function c(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return o.type === "inertia" || o.type === "decay" ? iI({
            ...d,
            ...o
        }) : sv({
            ...RI(o, d, e),
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
function DI() {
    const {motionValues: e, stop: t, get: n} = EI();
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
            const f = MI(i, u, o, a, l);
            u.start(f)
        }
    }
}
function NI(e, t={}, {motionValues: n, push: r, stop: i}=DI()) {
    const o = G(t)
      , s = le(!1);
    He(n, f=>{
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
            return new Promise(_=>r(d, m, e, f.transition || dv(d, f[d]), _))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = Ks(f) ? f : a(f);
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
const Fu = typeof window < "u"
  , VI = ()=>Fu && window.onpointerdown === null
  , UI = ()=>Fu && window.ontouchstart === null
  , BI = ()=>Fu && window.onmousedown === null;
function FI({target: e, state: t, variants: n, apply: r}) {
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
    i.hovered && (Dt(e, "mouseenter", ()=>o.value = !0),
    Dt(e, "mouseleave", ()=>{
        o.value = !1,
        s.value = !1
    }
    ),
    Dt(e, "mouseout", ()=>{
        o.value = !1,
        s.value = !1
    }
    )),
    i.tapped && (BI() && (Dt(e, "mousedown", ()=>s.value = !0),
    Dt(e, "mouseup", ()=>s.value = !1)),
    VI() && (Dt(e, "pointerdown", ()=>s.value = !0),
    Dt(e, "pointerup", ()=>s.value = !1)),
    UI() && (Dt(e, "touchstart", ()=>s.value = !0),
    Dt(e, "touchend", ()=>s.value = !1))),
    i.focused && (Dt(e, "focus", ()=>a.value = !0),
    Dt(e, "blur", ()=>a.value = !1)),
    He(c, r)
}
function xI({set: e, target: t, variants: n, variant: r}) {
    const i = G(n);
    He(()=>t, ()=>{
        i && (i.initial && e("initial"),
        i.enter && (r.value = "enter"))
    }
    , {
        immediate: !0,
        flush: "pre"
    })
}
function HI({state: e, apply: t}) {
    He(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function mv({target: e, variants: t, variant: n}) {
    const r = G(t);
    r && (r.visible || r.visibleOnce) && $1(e, ([{isIntersecting: i}])=>{
        r.visible ? i ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (i && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function jI(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && xI(e),
    t.syncVariants && HI(e),
    t.visibilityHooks && mv(e),
    t.eventListeners && FI(e)
}
function gv(e={}) {
    const t = Tt({
        ...e
    })
      , n = le({});
    return He(t, ()=>{
        const r = {};
        for (const [i,o] of Object.entries(t)) {
            const s = Bu(i)
              , a = pv(o, s);
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
    He(()=>ro(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const KI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function yv(e={}, t=!0) {
    const n = Tt({
        ...e
    })
      , r = le("");
    return He(n, i=>{
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
            const c = Bu(a)
              , u = pv(l, c);
            o += `${KI[a] || a}(${u}) `
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
const YI = ["", "X", "Y", "Z"]
  , qI = ["perspective", "translate", "scale", "rotate", "skew"]
  , vv = ["transformPerspective", "x", "y", "z"];
qI.forEach(e=>{
    YI.forEach(t=>{
        const n = e + t;
        vv.push(n)
    }
    )
}
);
const WI = new Set(vv);
function Hu(e) {
    return WI.has(e)
}
const GI = new Set(["originX", "originY", "originZ"]);
function _v(e) {
    return GI.has(e)
}
function JI(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,i])=>{
        Hu(r) || _v(r) ? t[r] = i : n[r] = i
    }
    ),
    {
        transform: t,
        style: n
    }
}
function bv(e) {
    const {transform: t, style: n} = JI(e)
      , {transform: r} = yv(t)
      , {style: i} = gv(n);
    return r.value && (i.value.transform = r.value),
    i.value
}
function zI(e, t) {
    let n, r;
    const {state: i, style: o} = gv();
    return xu(e, s=>{
        r = s;
        for (const a of Object.keys(hv))
            s.style[a] === null || s.style[a] === "" || Hu(a) || _v(a) || (i[a] = s.style[a]);
        n && Object.entries(n).forEach(([a,l])=>s.style[a] = l),
        t && t(i)
    }
    ),
    He(o, s=>{
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
function QI(e) {
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
function XI(e, t) {
    Object.entries(QI(t)).forEach(([n,r])=>{
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
function ZI(e, t) {
    let n, r;
    const {state: i, transform: o} = yv();
    return xu(e, s=>{
        r = s,
        s.style.transform && XI(i, s.style.transform),
        n && (s.style.transform = n),
        t && t(i)
    }
    ),
    He(o, s=>{
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
function $I(e, t) {
    const n = Tt({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: i} = zI(e, r)
      , {transform: o} = ZI(e, r);
    return He(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const c = Hu(a) ? o : i;
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
function eP(e={}) {
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
function Ev(e, t={}, n) {
    const {motionProperties: r} = $I(e)
      , {variant: i, state: o} = eP(t)
      , s = NI(r, t)
      , a = {
        target: e,
        variant: i,
        variants: t,
        state: o,
        motionProperties: r,
        ...s
    };
    return jI(a, n),
    a
}
const tP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function nP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && Ks(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    tP.forEach(r=>{
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
        if (n && n[r] && Ks(n[r])) {
            const i = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = i
        }
    }
    ))
}
function ul(e) {
    return {
        created: (r,i,o)=>{
            const s = i.value && typeof i.value == "string" ? i.value : o.key;
            s && al[s] && al[s].stop();
            const a = le(e || {});
            typeof i.value == "object" && (a.value = i.value),
            nP(o, a);
            const c = Ev(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = c,
            s && (al[s] = c)
        }
        ,
        mounted: (r,i,o)=>{
            r.motionInstance && mv(r.motionInstance)
        }
        ,
        getSSRProps(r, i) {
            let {initial: o} = r.value || i && (i == null ? void 0 : i.props) || {};
            o = G(o);
            const s = iu((e == null ? void 0 : e.initial) || {}, o || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: bv(s)
            }
        }
    }
}
const rP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , iP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , oP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , sP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , aP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}
  , lP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visibleOnce: {
        scale: 1,
        opacity: 1
    }
}
  , cP = {
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
  , uP = {
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
  , fP = {
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
  , dP = {
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
  , hP = {
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
  , pP = {
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
  , mP = {
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
  , gP = {
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
  , yP = {
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
  , vP = {
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
  , _P = {
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
  , bP = {
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
  , EP = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , TP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , SP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , AP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , kP = {
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
  , LP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , OP = {
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
  , RP = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , IP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , PP = {
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
    fade: rP,
    fadeVisible: iP,
    fadeVisibleOnce: oP,
    pop: sP,
    popVisible: aP,
    popVisibleOnce: lP,
    rollBottom: vP,
    rollLeft: cP,
    rollRight: dP,
    rollTop: mP,
    rollVisibleBottom: _P,
    rollVisibleLeft: uP,
    rollVisibleOnceBottom: bP,
    rollVisibleOnceLeft: fP,
    rollVisibleOnceRight: pP,
    rollVisibleOnceTop: yP,
    rollVisibleRight: hP,
    rollVisibleTop: gP,
    slideBottom: RP,
    slideLeft: EP,
    slideRight: AP,
    slideTop: LP,
    slideVisibleBottom: IP,
    slideVisibleLeft: TP,
    slideVisibleOnceBottom: PP,
    slideVisibleOnceLeft: SP,
    slideVisibleOnceRight: wP,
    slideVisibleOnceTop: CP,
    slideVisibleRight: kP,
    slideVisibleTop: OP
}
  , MP = Ue({
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
        const t = q0()
          , n = Tt({});
        if (!e.is && !t.default)
            return ()=>ut("div", {});
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
            return typeof s.value == "string" && !Mv(l) && (l = qr(l)),
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
            Jc(()=>Object.entries(n).forEach(([c,u])=>l(u)))
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
        const i = bv(t.initial || {})
          , o = (l,c)=>(l.props || (l.props = {}),
        l.props.style = i,
        l.props.onVnodeMounted = ({el: u})=>{
            const f = Ev(u, t);
            n[c] = f
        }
        ,
        l);
        if (r) {
            const l = ut(r, void 0, e);
            return o(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,c)=>o(l, c))
    }
});
function DP(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, i=>`-${i}`).toLowerCase().replace(/\s+/g, "-").replace(r, i=>n.charAt(t.indexOf(i))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const NP = {
    install(e, t) {
        if (e.directive("motion", ul()),
        e.component("Motion", MP),
        !t || t && !t.excludePresets)
            for (const n in wc) {
                const r = wc[n];
                e.directive(`motion-${DP(n)}`, ul(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, ul(r))
            }
    }
}
  , VP = Pt(e=>{
    const t = Gn();
    e.vueApp.use(NP, t.public.motion)
}
)
  , UP = Pt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Wt()
          , n = Gn()
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
            const a = "href"in o && o.href[0] === "#" ? n.app.baseURL + o.href : Ri(n.app.baseURL, o.fullPath);
            aC({
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
function BP(e) {
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
const FP = Pt(()=>{
    const e = BP();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , xP = [FT, HT, rC, oC, sC, fC, dC, hC, NC, U1, B1, Y1, VP, UP, FP]
  , HP = Ue({
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
        return jr(No, Oi(r)),
        ()=>ut(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , jP = Ue({
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
          , o = Et(No, null);
        let s;
        n({
            pageRef: i
        });
        const a = Et(Em, null);
        let l;
        const c = r.deferHydration();
        if (r.isHydrating) {
            const u = r.hooks.hookOnce("app:error", c);
            Wt().beforeEach(u)
        }
        return e.pageKey && He(()=>e.pageKey, (u,f)=>{
            u !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>ut(Zm, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: u=>{
                const f = YP(o, u.route, u.Component)
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
                const m = Gl(u, e.pageKey);
                !r.isHydrating && !qP(o, u.route, u.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const _ = !!(e.transition ?? u.route.meta.pageTransition ?? Kl)
                  , b = _ && KP([e.transition, u.route.meta.pageTransition, Kl, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", u.Component)
                    }
                }].filter(Boolean))
                  , S = e.keepalive ?? u.route.meta.keepalive ?? IT;
                return l = $m(Po, _ && b, WS(S, ut(qc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", u.Component),
                    onResolve: ()=>{
                        Yt(()=>r.callHook("page:finish", u.Component).then(()=>r.callHook("page:loading:end")).finally(c))
                    }
                }, {
                    default: ()=>{
                        const g = ut(HP, {
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
function KP(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? uu(n.onAfterLeave) : void 0
    }));
    return iu(...t)
}
function YP(e, t, n) {
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
    ) || n && Gl({
        route: t,
        Component: n
    }) !== Gl({
        route: e,
        Component: n
    })
}
function qP(e, t, n) {
    return e ? t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const WP = Ue({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await dr[e.name]().then(r=>r.default || r);
        return ()=>ut(n, e.layoutProps, t.slots)
    }
})
  , GP = Ue({
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
          , r = Et(No)
          , i = r === oa() ? YS() : r
          , o = ue(()=>{
            let l = G(e.name) ?? i.meta.layout ?? "default";
            return l && !(l in dr) && e.fallback && (l = G(e.fallback)),
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
            Wt().beforeEach(l)
        }
        return ()=>{
            const l = o.value && o.value in dr
              , c = i.meta.layoutTransition ?? RT;
            return $m(Po, l && c, {
                default: ()=>ut(qc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        Yt(a)
                    }
                }, {
                    default: ()=>ut(JP, {
                        layoutProps: vi(t.attrs, {
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
  , JP = Ue({
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
        return e.shouldProvide && jr(Em, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, i;
            return !n || typeof n == "string" && !(n in dr) ? (i = (r = t.slots).default) == null ? void 0 : i.call(r) : ut(WP, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , zP = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , QP = {};
function XP(e, t) {
    const n = jP
      , r = GP;
    return me(),
    vt(r, null, {
        default: on(()=>[Ze(n)]),
        _: 1
    })
}
const ZP = zP(QP, [["render", XP]])
  , $P = ["innerHTML"]
  , eM = Ue({
    __name: "Icon",
    props: {
        name: {}
    },
    async setup(e) {
        let t, n;
        const r = e
          , i = Object.fromEntries(Object.entries(Object.assign({
            "/assets/svg/icons/alarm-clock-glow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/alarm-clock-glow.aC8bZIm6.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/alarm.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/alarm.DhXSImdX.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-boost.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-boost.CCdq5ioD.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-earn.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-earn.Bb212ucL.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-friends.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-friends.CTyi4Yjj.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-mine.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-mine.BkoJ97Sz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-playground.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-playground.acdgU1sm.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding-new.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/arrow-onboarding-new.BEtKb0Zx.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/arrow-onboarding.BJzvMlow.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/caret-right.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/caret-right.Be5C5AdH.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/check.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/check.DpGtnzuV.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/clock.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/clock.BeWcAb1-.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close-simple.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/close-simple.BHIZU7ZI.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/close.KB0mydBa.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/complete.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/complete.lDxhBE40.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/copy.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/copy.CjcTersn.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/energy.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/energy.DhIj__pU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/eyes.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/eyes.DfHV8DJi.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/friends.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.D9yHF85E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gift.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/gift.D56pTUEE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/glow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/glow.DR87XU47.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gr.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/gr.CE-S70jU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/heart.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/heart.uEUhPDEu.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/info.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/info.CwbDISi0.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/key.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/key.CBMDGpK3.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-arrow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-arrow.C4l_4b2T.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-discord.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-discord.DNbmOmlO.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-medium.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-medium.BrOe8wIZ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-telegram.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-telegram.cBOmGQCr.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-x.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-x.CdWKHoAz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-youtube.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-youtube.q1Uak5_E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-background.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-background.DLKaIbsv.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-image.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-image.DD2lTtqq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-yellow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-yellow.BmzMALSJ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading.D5-YfgbB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/lock.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/lock.FuE0uKjd.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/markets.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/markets.Bq8f52NT.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/not-support-phone-glow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/not-support-phone-glow.BSB35vgE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/refresh.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/refresh.BvInaMMK.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/robots.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/robots.BmOab4DB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/settings.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/settings.CezmlWen.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ticket.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ticket.DQ5Qpq-5.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/wallet.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/wallet.3o12uypq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default)
        })).map(([s,a])=>[s.split("/").pop().split(".").shift(), a]))
          , o = r.name && ([t,n] = G0(()=>{
            var s;
            return (s = i == null ? void 0 : i[r.name]) == null ? void 0 : s.call(i)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>G(o) ? (me(),
        We("div", {
            key: 0,
            class: "icon",
            innerHTML: G(o)
        }, null, 8, $P)) : Kt("", !0)
    }
})
  , tM = {
    class: "is-token"
}
  , nM = ["srcset", "alt"]
  , rM = ["src", "alt"]
  , iM = Ue({
    __name: "Token",
    setup(e) {
        return (t,n)=>(me(),
        We("picture", tM, [ge("source", {
            srcset: G(Xl).TOKEN_WEBP,
            type: "image/webp",
            alt: G(Jt).GAME_NAME
        }, null, 8, nM), ge("img", {
            class: "img-responsive",
            src: G(Xl).TOKEN,
            alt: G(Jt).GAME_NAME
        }, null, 8, rM)]))
    }
})
  , qh = Xg({
    componentName: "NuxtLinkLocale"
})
  , oM = Ue({
    name: "NuxtLinkLocale",
    props: {
        ...qh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = Kg()
          , r = ue(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , i = ue(()=>{
            if (e.external || e.target && e.target !== "_self")
                return !0;
            const s = e.to ?? e.href;
            return typeof s == "object" ? !1 : s === "" || s == null || Nn(s, {
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
        return ()=>ut(qh, o(), t.default)
    }
});
function sM() {
    return Un
}
const aM = {
    class: "ln"
}
  , lM = {
    class: "ln-header"
}
  , cM = {
    class: "ln-header-left"
}
  , uM = {
    class: "ln-header-social"
}
  , fM = ["href"]
  , dM = ["href"]
  , hM = ["innerHTML"]
  , pM = {
    class: "ln-header-center"
}
  , mM = {
    class: "ln-header-center-logo"
}
  , gM = {
    class: "ln-header-right"
}
  , yM = {
    class: "button"
}
  , vM = ["innerHTML"]
  , _M = ge("span", null, "coming soon", -1)
  , bM = {
    class: "ln-content"
}
  , EM = {
    key: 0
}
  , TM = {
    class: "is-small-text"
}
  , SM = {
    key: 1,
    class: "is-small-text"
}
  , AM = {
    key: 2,
    class: "is-small-text"
}
  , kM = {
    class: "ln-content-button"
}
  , wM = ["innerHTML"]
  , LM = ge("div", {
    class: "ln-bottom"
}, null, -1)
  , OM = Ue({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var s;
        const t = Rn()
          , n = e;
        kT({
            title: `${((s = n.error) == null ? void 0 : s.statusCode) ?? 500} - ${Jt.GAME_NAME}`
        });
        const r = le("")
          , i = sM()
          , o = le(i.tz.guess());
        return It(()=>{
            r.value = navigator.userAgent,
            setTimeout(()=>{
                var a;
                Je().trackEvent(`error_${((a = n.error) == null ? void 0 : a.statusCode) ?? 500}`, {
                    timezone: o.value,
                    userAgent: r.value
                })
            }
            , 1e3)
        }
        ),
        (a,l)=>{
            var d, m, _;
            const c = eM
              , u = iM
              , f = oM;
            return me(),
            We("main", aM, [ge("div", lM, [ge("div", cM, [ge("div", uM, [ge("a", {
                class: "is-x",
                href: G(t).link_twitter,
                target: "_blank"
            }, [Ze(c, {
                name: "ln-x"
            })], 8, fM), ge("a", {
                class: "is-telegram",
                href: G(t).link_telegram,
                target: "_blank"
            }, [Ze(c, {
                name: "ln-telegram"
            })], 8, dM), ge("p", {
                innerHTML: a.$t("landing.join_us")
            }, null, 8, hM)])]), ge("div", pM, [ge("div", mM, [Ze(u)]), ge("p", null, zt(G(Jt).GAME_NAME), 1)]), ge("div", gM, [ge("button", yM, [ge("p", {
                innerHTML: a.$t("landing.whitepaper")
            }, null, 8, vM), Ze(c, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), _M])])]), ge("div", bM, [ge("h1", null, zt(e.error.statusCode ?? 500), 1), (d = e.error) != null && d.statusMessage ? (me(),
            We("p", EM, "Status: " + zt(((m = e.error) == null ? void 0 : m.statusMessage) ?? ""), 1)) : Kt("", !0), ge("p", TM, zt((_ = e.error) == null ? void 0 : _.toJSON()), 1), G(r) ? (me(),
            We("p", SM, "User Agent: " + zt(G(r)), 1)) : Kt("", !0), G(o) ? (me(),
            We("p", AM, "TimeZone: " + zt(G(o)), 1)) : Kt("", !0), ge("div", kM, [Ze(f, {
                class: "button",
                to: G(Fo).LANDING
            }, {
                default: on(()=>[ge("span", {
                    innerHTML: a.$t("buttons.home")
                }, null, 8, wM)]),
                _: 1
            }, 8, ["to"])])]), LM])
        }
    }
})
  , Wh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = re()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            Wt().beforeEach(a)
        }
        const i = !1;
        jr(No, oa()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const o = sa();
        Dp((a,l,c)=>{
            if (n.hooks.callHook("vue:error", a, l, c).catch(u=>console.error("[nuxt] Error in `vue:error` hook", u)),
            CE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>oi(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(me(),
        vt(qc, {
            onResolve: G(r)
        }, {
            default: on(()=>[G(o) ? (me(),
            vt(G(OM), {
                key: 0,
                error: G(o)
            }, null, 8, ["error"])) : G(s) ? (me(),
            vt(G(t), {
                key: 1,
                context: G(s)
            }, null, 8, ["context"])) : G(i) ? (me(),
            vt(yl(G(i)), {
                key: 2
            })) : (me(),
            vt(G(ZP), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Gh;
{
    let e;
    Gh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? tb(Wh) : im(Wh)
          , i = oE({
            vueApp: r
        });
        async function o(l) {
            await i.callHook("app:error", l),
            i.payload.error = i.payload.error || aa(l)
        }
        r.config.errorHandler = o;
        try {
            await aE(i, xP)
        } catch (l) {
            o(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(MT),
            await i.hooks.callHook("app:mounted", r),
            await Yt()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = Gh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Uk as $, Hk as A, RM as B, Ct as C, K0 as D, iM as E, pt as F, ZO as G, Kg as H, XO as I, Ut as J, Vo as K, Vk as L, HM as M, zP as N, xk as O, WM as P, VO as Q, oM as R, pe as S, sM as T, Fo as U, Jt as V, PM as W, Pk as X, jM as Y, KM as Z, eM as _, We as a, Vn as a0, et as a1, fc as a2, jn as a3, Qp as a4, dg as a5, YM as a6, qM as a7, On as a8, on as a9, kT as aA, Im as aB, Ci as aC, zM as aD, br as aE, Po as aF, yl as aG, vi as aH, oa as aI, UM as aJ, UL as aK, jP as aL, NM as aM, xM as aN, BM as aO, VM as aP, MM as aa, at as ab, DM as ac, el as ad, $a as ae, Bk as af, Fk as ag, k as ah, Nk as ai, G0 as aj, Dk as ak, Mk as al, jk as am, qr as an, Tt as ao, jr as ap, Jc as aq, He as ar, Yt as as, ut as at, F0 as au, Kk as av, FM as aw, Xl as ax, Gn as ay, IM as az, G as b, ue as c, Ue as d, ge as e, At as f, Pi as g, JM as h, Bt as i, ha as j, Ze as k, vt as l, re as m, Cn as n, me as o, Rn as p, It as q, le as r, yn as s, zt as t, Je as u, dt as v, Kt as w, GM as x, an as y, CM as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["https://hamsterkombatgame.io/_nuxt/airdrop.Ar4FUJ2-.js", "https://hamsterkombatgame.io/_nuxt/airdrop.CiCu0j88.js", "https://hamsterkombatgame.io/_nuxt/Preloader.vue.BLrXE-zP.js", "https://hamsterkombatgame.io/_nuxt/earn.CwLMhaVc.js", "https://hamsterkombatgame.io/_nuxt/boost.BH_XLwep.js", "https://hamsterkombatgame.io/_nuxt/BalanceLarge.vue.DPiVP27O.js", "https://hamsterkombatgame.io/_nuxt/Price.vue.DetrGJRv.js", "https://hamsterkombatgame.io/_nuxt/earn.CSOWKEvx.js", "https://hamsterkombatgame.io/_nuxt/attraction.DyQWKsAq.js", "https://hamsterkombatgame.io/_nuxt/friends.Dt55o_M3.js", "https://hamsterkombatgame.io/_nuxt/index.CjslyLPA.js", "https://hamsterkombatgame.io/_nuxt/navigation.B0Mr2OsR.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.DS6wg-QW.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.vkSr05gD.css", "https://hamsterkombatgame.io/_nuxt/navigation.Bw5XmvsK.css", "https://hamsterkombatgame.io/_nuxt/Earn.vue.CdFgtJ-J.js", "https://hamsterkombatgame.io/_nuxt/image.vue.BvmbZ6zL.js", "https://hamsterkombatgame.io/_nuxt/Hamster.vue.DgO2cS9H.js", "https://hamsterkombatgame.io/_nuxt/MiniGameLose.vue.BIu6EGPc.js", "https://hamsterkombatgame.io/_nuxt/index.BzUMgGW6.js", "https://hamsterkombatgame.io/_nuxt/mine.C7t1dHTj.js", "https://hamsterkombatgame.io/_nuxt/playground.DTZ7nKbZ.js", "https://hamsterkombatgame.io/_nuxt/bingx.GErDEpUp.js", "https://hamsterkombatgame.io/_nuxt/exchange.75BG77Fo.js", "https://hamsterkombatgame.io/_nuxt/index.B3--HP7q.js", "https://hamsterkombatgame.io/_nuxt/index.C8EI4KTu.js", "https://hamsterkombatgame.io/_nuxt/index.DaRZ8nbm.js", "https://hamsterkombatgame.io/_nuxt/LandingHeader.vue.D8xXocmi.js", "https://hamsterkombatgame.io/_nuxt/privacy-policy.CFbXnfJL.js", "https://hamsterkombatgame.io/_nuxt/default.Tcz-iBhm.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
