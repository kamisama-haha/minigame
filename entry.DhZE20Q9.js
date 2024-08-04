const ABSOLUTE_PATH = 'https://hamsterkombatgame.io/_nuxt/';

/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gs(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const rt = {}
  , ai = []
  , nn = ()=>{}
  , Av = ()=>!1
  , Oo = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Oc = e=>e.startsWith("onUpdate:")
  , yt = Object.assign
  , Cc = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Sv = Object.prototype.hasOwnProperty
  , Ke = (e,t)=>Sv.call(e, t)
  , de = Array.isArray
  , li = e=>Co(e) === "[object Map]"
  , zh = e=>Co(e) === "[object Set]"
  , kv = e=>Co(e) === "[object RegExp]"
  , ye = e=>typeof e == "function"
  , ot = e=>typeof e == "string"
  , Oi = e=>typeof e == "symbol"
  , nt = e=>e !== null && typeof e == "object"
  , Rc = e=>(nt(e) || ye(e)) && ye(e.then) && ye(e.catch)
  , Qh = Object.prototype.toString
  , Co = e=>Qh.call(e)
  , wv = e=>Co(e).slice(8, -1)
  , Xh = e=>Co(e) === "[object Object]"
  , Ic = e=>ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ci = Gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Js = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Lv = /-(\w)/g
  , Nn = Js(e=>e.replace(Lv, (t,n)=>n ? n.toUpperCase() : ""))
  , Ov = /\B([A-Z])/g
  , Qr = Js(e=>e.replace(Ov, "-$1").toLowerCase())
  , zs = Js(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , La = Js(e=>e ? `on${zs(e)}` : "")
  , br = (e,t)=>!Object.is(e, t)
  , ui = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , bs = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , dl = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Zh = e=>{
    const t = ot(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let qu;
const $h = ()=>qu || (qu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rn(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = ot(r) ? Pv(r) : Rn(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (ot(e) || nt(e))
        return e
}
const Cv = /;(?![^(]*\))/g
  , Rv = /:([^]+)/
  , Iv = /\/\*[^]*?\*\//g;
function Pv(e) {
    const t = {};
    return e.replace(Iv, "").split(Cv).forEach(n=>{
        if (n) {
            const r = n.split(Rv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function It(e) {
    let t = "";
    if (ot(e))
        t = e;
    else if (de(e))
        for (let n = 0; n < e.length; n++) {
            const r = It(e[n]);
            r && (t += r + " ")
        }
    else if (nt(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function an(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !ot(t) && (e.class = It(t)),
    n && (e.style = Rn(n)),
    e
}
const Mv = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , Dv = Gs(Mv)
  , Nv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Vv = Gs(Nv);
function ep(e) {
    return !!e || e === ""
}
const Zt = e=>ot(e) ? e : e == null ? "" : de(e) || nt(e) && (e.toString === Qh || !ye(e.toString)) ? JSON.stringify(e, tp, 2) : String(e)
  , tp = (e,t)=>t && t.__v_isRef ? tp(e, t.value) : li(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,i],o)=>(n[Oa(r, o) + " =>"] = i,
    n), {})
} : zh(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Oa(n))
} : Oi(t) ? Oa(t) : nt(t) && !de(t) && !Xh(t) ? String(t) : t
  , Oa = (e,t="")=>{
    var n;
    return Oi(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Kt;
class np {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Kt,
        !t && Kt && (this.index = (Kt.scopes || (Kt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Kt;
            try {
                return Kt = this,
                t()
            } finally {
                Kt = n
            }
        }
    }
    on() {
        Kt = this
    }
    off() {
        Kt = this.parent
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
function Ro(e) {
    return new np(e)
}
function Uv(e, t=Kt) {
    t && t.active && t.effects.push(e)
}
function Io() {
    return Kt
}
function Qs(e) {
    Kt && Kt.cleanups.push(e)
}
let xr;
class Pc {
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
        Uv(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Xr();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Bv(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Zr()
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
        let t = mr
          , n = xr;
        try {
            return mr = !0,
            xr = this,
            this._runnings++,
            Wu(this),
            this.fn()
        } finally {
            Gu(this),
            this._runnings--,
            xr = n,
            mr = t
        }
    }
    stop() {
        var t;
        this.active && (Wu(this),
        Gu(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Bv(e) {
    return e.value
}
function Wu(e) {
    e._trackId++,
    e._depsLength = 0
}
function Gu(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            rp(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function rp(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let mr = !0
  , hl = 0;
const ip = [];
function Xr() {
    ip.push(mr),
    mr = !1
}
function Zr() {
    const e = ip.pop();
    mr = e === void 0 ? !0 : e
}
function Mc() {
    hl++
}
function Dc() {
    for (hl--; !hl && pl.length; )
        pl.shift()()
}
function op(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && rp(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const pl = [];
function sp(e, t, n) {
    Mc();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && pl.push(r.scheduler)))
    }
    Dc()
}
const ap = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Es = new WeakMap
  , Hr = Symbol("")
  , ml = Symbol("");
function xt(e, t, n) {
    if (mr && xr) {
        let r = Es.get(e);
        r || Es.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = ap(()=>r.delete(n))),
        op(xr, i)
    }
}
function qn(e, t, n, r, i, o) {
    const s = Es.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && de(e)) {
        const l = Number(r);
        s.forEach((c,u)=>{
            (u === "length" || !Oi(u) && u >= l) && a.push(c)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            de(e) ? Ic(n) && a.push(s.get("length")) : (a.push(s.get(Hr)),
            li(e) && a.push(s.get(ml)));
            break;
        case "delete":
            de(e) || (a.push(s.get(Hr)),
            li(e) && a.push(s.get(ml)));
            break;
        case "set":
            li(e) && a.push(s.get(Hr));
            break
        }
    Mc();
    for (const l of a)
        l && sp(l, 4);
    Dc()
}
function Fv(e, t) {
    var n;
    return (n = Es.get(e)) == null ? void 0 : n.get(t)
}
const xv = Gs("__proto__,__v_isRef,__isVue")
  , lp = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Oi))
  , Ju = Hv();
function Hv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = Ve(this);
            for (let o = 0, s = this.length; o < s; o++)
                xt(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(Ve)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            Xr(),
            Mc();
            const r = Ve(this)[t].apply(this, n);
            return Dc(),
            Zr(),
            r
        }
    }
    ),
    e
}
function jv(e) {
    const t = Ve(this);
    return xt(t, "has", e),
    t.hasOwnProperty(e)
}
class cp {
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
            return r === (i ? o ? t0 : hp : o ? dp : fp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = de(t);
        if (!i) {
            if (s && Ke(Ju, n))
                return Reflect.get(Ju, n, r);
            if (n === "hasOwnProperty")
                return jv
        }
        const a = Reflect.get(t, n, r);
        return (Oi(n) ? lp.has(n) : xv(n)) || (i || xt(t, "get", n),
        o) ? a : lt(a) ? s && Ic(n) ? a : a.value : nt(a) ? i ? dr(a) : At(a) : a
    }
}
class up extends cp {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = qr(o);
            if (!Ts(r) && !qr(r) && (o = Ve(o),
            r = Ve(r)),
            !de(t) && lt(o) && !lt(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const s = de(t) && Ic(n) ? Number(n) < t.length : Ke(t, n)
          , a = Reflect.set(t, n, r, i);
        return t === Ve(i) && (s ? br(r, o) && qn(t, "set", n, r) : qn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = Ke(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && qn(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Oi(n) || !lp.has(n)) && xt(t, "has", n),
        r
    }
    ownKeys(t) {
        return xt(t, "iterate", de(t) ? "length" : Hr),
        Reflect.ownKeys(t)
    }
}
class Kv extends cp {
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
const Yv = new up
  , qv = new Kv
  , Wv = new up(!0)
  , Nc = e=>e
  , Xs = e=>Reflect.getPrototypeOf(e);
function Go(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = Ve(e)
      , o = Ve(t);
    n || (br(t, o) && xt(i, "get", t),
    xt(i, "get", o));
    const {has: s} = Xs(i)
      , a = r ? Nc : n ? Bc : lo;
    if (s.call(i, t))
        return a(e.get(t));
    if (s.call(i, o))
        return a(e.get(o));
    e !== i && e.get(t)
}
function Jo(e, t=!1) {
    const n = this.__v_raw
      , r = Ve(n)
      , i = Ve(e);
    return t || (br(e, i) && xt(r, "has", e),
    xt(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function zo(e, t=!1) {
    return e = e.__v_raw,
    !t && xt(Ve(e), "iterate", Hr),
    Reflect.get(e, "size", e)
}
function zu(e) {
    e = Ve(e);
    const t = Ve(this);
    return Xs(t).has.call(t, e) || (t.add(e),
    qn(t, "add", e, e)),
    this
}
function Qu(e, t) {
    t = Ve(t);
    const n = Ve(this)
      , {has: r, get: i} = Xs(n);
    let o = r.call(n, e);
    o || (e = Ve(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? br(t, s) && qn(n, "set", e, t) : qn(n, "add", e, t),
    this
}
function Xu(e) {
    const t = Ve(this)
      , {has: n, get: r} = Xs(t);
    let i = n.call(t, e);
    i || (e = Ve(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && qn(t, "delete", e, void 0),
    o
}
function Zu() {
    const e = Ve(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && qn(e, "clear", void 0, void 0),
    n
}
function Qo(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , a = Ve(s)
          , l = t ? Nc : e ? Bc : lo;
        return !e && xt(a, "iterate", Hr),
        s.forEach((c,u)=>r.call(i, l(c), l(u), o))
    }
}
function Xo(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = Ve(i)
          , s = li(o)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , c = i[e](...r)
          , u = n ? Nc : t ? Bc : lo;
        return !t && xt(o, "iterate", l ? ml : Hr),
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
function Qn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Gv() {
    const e = {
        get(o) {
            return Go(this, o)
        },
        get size() {
            return zo(this)
        },
        has: Jo,
        add: zu,
        set: Qu,
        delete: Xu,
        clear: Zu,
        forEach: Qo(!1, !1)
    }
      , t = {
        get(o) {
            return Go(this, o, !1, !0)
        },
        get size() {
            return zo(this)
        },
        has: Jo,
        add: zu,
        set: Qu,
        delete: Xu,
        clear: Zu,
        forEach: Qo(!1, !0)
    }
      , n = {
        get(o) {
            return Go(this, o, !0)
        },
        get size() {
            return zo(this, !0)
        },
        has(o) {
            return Jo.call(this, o, !0)
        },
        add: Qn("add"),
        set: Qn("set"),
        delete: Qn("delete"),
        clear: Qn("clear"),
        forEach: Qo(!0, !1)
    }
      , r = {
        get(o) {
            return Go(this, o, !0, !0)
        },
        get size() {
            return zo(this, !0)
        },
        has(o) {
            return Jo.call(this, o, !0)
        },
        add: Qn("add"),
        set: Qn("set"),
        delete: Qn("delete"),
        clear: Qn("clear"),
        forEach: Qo(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = Xo(o, !1, !1),
        n[o] = Xo(o, !0, !1),
        t[o] = Xo(o, !1, !0),
        r[o] = Xo(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [Jv,zv,Qv,Xv] = Gv();
function Vc(e, t) {
    const n = t ? e ? Xv : Qv : e ? zv : Jv;
    return (r,i,o)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(Ke(n, i) && i in r ? n : r, i, o)
}
const Zv = {
    get: Vc(!1, !1)
}
  , $v = {
    get: Vc(!1, !0)
}
  , e0 = {
    get: Vc(!0, !1)
}
  , fp = new WeakMap
  , dp = new WeakMap
  , hp = new WeakMap
  , t0 = new WeakMap;
function n0(e) {
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
function r0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : n0(wv(e))
}
function At(e) {
    return qr(e) ? e : Uc(e, !1, Yv, Zv, fp)
}
function Ci(e) {
    return Uc(e, !1, Wv, $v, dp)
}
function dr(e) {
    return Uc(e, !0, qv, e0, hp)
}
function Uc(e, t, n, r, i) {
    if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = r0(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return i.set(e, a),
    a
}
function gr(e) {
    return qr(e) ? gr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function qr(e) {
    return !!(e && e.__v_isReadonly)
}
function Ts(e) {
    return !!(e && e.__v_isShallow)
}
function pp(e) {
    return gr(e) || qr(e)
}
function Ve(e) {
    const t = e && e.__v_raw;
    return t ? Ve(t) : e
}
function ht(e) {
    return Object.isExtensible(e) && bs(e, "__v_skip", !0),
    e
}
const lo = e=>nt(e) ? At(e) : e
  , Bc = e=>nt(e) ? dr(e) : e;
class mp {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Pc(()=>t(this._value),()=>fi(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = Ve(this);
        return (!t._cacheable || t.effect.dirty) && br(t._value, t._value = t.effect.run()) && fi(t, 4),
        Fc(t),
        t.effect._dirtyLevel >= 2 && fi(t, 2),
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
function i0(e, t, n=!1) {
    let r, i;
    const o = ye(e);
    return o ? (r = e,
    i = nn) : (r = e.get,
    i = e.set),
    new mp(r,i,o || !i,n)
}
function Fc(e) {
    var t;
    mr && xr && (e = Ve(e),
    op(xr, (t = e.dep) != null ? t : e.dep = ap(()=>e.dep = void 0, e instanceof mp ? e : void 0)))
}
function fi(e, t=4, n) {
    e = Ve(e);
    const r = e.dep;
    r && sp(r, t)
}
function lt(e) {
    return !!(e && e.__v_isRef === !0)
}
function le(e) {
    return gp(e, !1)
}
function gn(e) {
    return gp(e, !0)
}
function gp(e, t) {
    return lt(e) ? e : new o0(e,t)
}
class o0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Ve(t),
        this._value = n ? t : lo(t)
    }
    get value() {
        return Fc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Ts(t) || qr(t);
        t = n ? t : Ve(t),
        br(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : lo(t),
        fi(this, 4))
    }
}
function yp(e) {
    fi(e, 4)
}
function G(e) {
    return lt(e) ? e.value : e
}
const s0 = {
    get: (e,t,n)=>G(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const i = e[t];
        return lt(i) && !lt(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function vp(e) {
    return gr(e) ? e : new Proxy(e,s0)
}
class a0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>Fc(this), ()=>fi(this));
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
function _p(e) {
    return new a0(e)
}
function xc(e) {
    const t = de(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = bp(e, n);
    return t
}
class l0 {
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
        return Fv(Ve(this._object), this._key)
    }
}
class c0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function oi(e, t, n) {
    return lt(e) ? e : ye(e) ? new c0(e) : nt(e) && arguments.length > 1 ? bp(e, t, n) : le(e)
}
function bp(e, t, n) {
    const r = e[t];
    return lt(r) ? r : new l0(e,t,n)
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function yr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        Po(i, t, n)
    }
}
function sn(e, t, n, r) {
    if (ye(e)) {
        const o = yr(e, t, n, r);
        return o && Rc(o) && o.catch(s=>{
            Po(s, t, n)
        }
        ),
        o
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        i.push(sn(e[o], t, n, r));
    return i
}
function Po(e, t, n, r=!0) {
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
            yr(l, null, 10, [e, s, a]);
            return
        }
    }
    u0(e, n, i, r)
}
function u0(e, t, n, r=!0) {
    console.error(e)
}
let co = !1
  , gl = !1;
const wt = [];
let Ln = 0;
const di = [];
let sr = null
  , Ur = 0;
const Ep = Promise.resolve();
let Hc = null;
function Wt(e) {
    const t = Hc || Ep;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function f0(e) {
    let t = Ln + 1
      , n = wt.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = wt[r]
          , o = uo(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function jc(e) {
    (!wt.length || !wt.includes(e, co && e.allowRecurse ? Ln + 1 : Ln)) && (e.id == null ? wt.push(e) : wt.splice(f0(e.id), 0, e),
    Tp())
}
function Tp() {
    !co && !gl && (gl = !0,
    Hc = Ep.then(Ap))
}
function d0(e) {
    const t = wt.indexOf(e);
    t > Ln && wt.splice(t, 1)
}
function yl(e) {
    de(e) ? di.push(...e) : (!sr || !sr.includes(e, e.allowRecurse ? Ur + 1 : Ur)) && di.push(e),
    Tp()
}
function $u(e, t, n=co ? Ln + 1 : 0) {
    for (; n < wt.length; n++) {
        const r = wt[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            wt.splice(n, 1),
            n--,
            r()
        }
    }
}
function As(e) {
    if (di.length) {
        const t = [...new Set(di)].sort((n,r)=>uo(n) - uo(r));
        if (di.length = 0,
        sr) {
            sr.push(...t);
            return
        }
        for (sr = t,
        Ur = 0; Ur < sr.length; Ur++)
            sr[Ur]();
        sr = null,
        Ur = 0
    }
}
const uo = e=>e.id == null ? 1 / 0 : e.id
  , h0 = (e,t)=>{
    const n = uo(e) - uo(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Ap(e) {
    gl = !1,
    co = !0,
    wt.sort(h0);
    try {
        for (Ln = 0; Ln < wt.length; Ln++) {
            const t = wt[Ln];
            t && t.active !== !1 && yr(t, null, 14)
        }
    } finally {
        Ln = 0,
        wt.length = 0,
        As(),
        co = !1,
        Hc = null,
        (wt.length || di.length) && Ap()
    }
}
function p0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || rt;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const u = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[u] || rt;
        d && (i = n.map(m=>ot(m) ? m.trim() : m)),
        f && (i = n.map(dl))
    }
    let a, l = r[a = La(t)] || r[a = La(Nn(t))];
    !l && o && (l = r[a = La(Qr(t))]),
    l && sn(l, e, 6, i);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        sn(c, e, 6, i)
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
            yt(s, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (nt(e) && r.set(e, null),
    null) : (de(o) ? o.forEach(l=>s[l] = null) : yt(s, o),
    nt(e) && r.set(e, s),
    s)
}
function Zs(e, t) {
    return !e || !Oo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ke(e, t[0].toLowerCase() + t.slice(1)) || Ke(e, Qr(t)) || Ke(e, t))
}
let pt = null
  , $s = null;
function Ss(e) {
    const t = pt;
    return pt = e,
    $s = e && e.type.__scopeId || null,
    t
}
function m0(e) {
    $s = e
}
function g0() {
    $s = null
}
const y0 = e=>ln;
function ln(e, t=pt, n) {
    if (!t || e._n)
        return e;
    const r = (...i)=>{
        r._d && pf(-1);
        const o = Ss(t);
        let s;
        try {
            s = e(...i)
        } finally {
            Ss(o),
            r._d && pf(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Ca(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, props: o, propsOptions: [s], slots: a, attrs: l, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: _, inheritAttrs: b} = e;
    let A, g;
    const E = Ss(e);
    try {
        if (n.shapeFlag & 4) {
            const y = i || r
              , T = y;
            A = $t(u.call(T, y, f, o, m, d, _)),
            g = l
        } else {
            const y = t;
            A = $t(y.length > 1 ? y(o, {
                attrs: l,
                slots: a,
                emit: c
            }) : y(o, null)),
            g = t.props ? l : _0(l)
        }
    } catch (y) {
        Wi.length = 0,
        Po(y, e, 1),
        A = et(Pt)
    }
    let p = A;
    if (g && b !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: T} = p;
        y.length && T & 7 && (s && y.some(Oc) && (g = b0(g, s)),
        p = Wn(p, g))
    }
    return n.dirs && (p = Wn(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    A = p,
    Ss(E),
    A
}
function v0(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (vi(i)) {
            if (i.type !== Pt || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const _0 = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Oo(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , b0 = (e,t)=>{
    const n = {};
    for (const r in e)
        (!Oc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function E0(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: a, patchFlag: l} = t
      , c = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? ef(r, s, c) : !!s;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (s[d] !== r[d] && !Zs(c, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? ef(r, s, c) : !0 : !!s;
    return !1
}
function ef(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !Zs(n, o))
            return !0
    }
    return !1
}
function Kc({vnode: e, parent: t}, n) {
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
const Yc = "components"
  , T0 = "directives";
function Wr(e, t) {
    return qc(Yc, e, !0, t) || e
}
const kp = Symbol.for("v-ndc");
function vl(e) {
    return ot(e) ? qc(Yc, e, !1) || e : e || kp
}
function RM(e) {
    return qc(T0, e)
}
function qc(e, t, n=!0, r=!1) {
    const i = pt || bt;
    if (i) {
        const o = i.type;
        if (e === Yc) {
            const a = Rl(o, !1);
            if (a && (a === t || a === Nn(t) || a === zs(Nn(t))))
                return o
        }
        const s = tf(i[e] || o[e], t) || tf(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function tf(e, t) {
    return e && (e[t] || e[Nn(t)] || e[zs(Nn(t))])
}
const wp = e=>e.__isSuspense;
let _l = 0;
const A0 = {
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
            k0(e, t, n, r, i, s, a, l, c)
        }
    },
    hydrate: w0,
    create: Gc,
    normalize: L0
}
  , Wc = A0;
function fo(e, t) {
    const n = e.props && e.props[t];
    ye(n) && n()
}
function S0(e, t, n, r, i, o, s, a, l) {
    const {p: c, o: {createElement: u}} = l
      , f = u("div")
      , d = e.suspense = Gc(e, i, r, t, f, n, o, s, a, l);
    c(null, d.pendingBranch = e.ssContent, f, null, r, d, o, s),
    d.deps > 0 ? (fo(e, "onPending"),
    fo(e, "onFallback"),
    c(null, e.ssFallback, t, n, r, null, o, s),
    hi(d, e.ssFallback)) : d.resolve(!1, !0)
}
function k0(e, t, n, r, i, o, s, a, {p: l, um: c, o: {createElement: u}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: _, pendingBranch: b, isInFallback: A, isHydrating: g} = f;
    if (b)
        f.pendingBranch = d,
        dn(d, b) ? (l(b, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : A && (g || (l(_, m, n, r, i, null, o, s, a),
        hi(f, m)))) : (f.pendingId = _l++,
        g ? (f.isHydrating = !1,
        f.activeBranch = b) : c(b, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = u("div"),
        A ? (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : (l(_, m, n, r, i, null, o, s, a),
        hi(f, m))) : _ && dn(d, _) ? (l(_, d, n, r, i, f, o, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 && f.resolve()));
    else if (_ && dn(d, _))
        l(_, d, n, r, i, f, o, s, a),
        hi(f, d);
    else if (fo(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = _l++,
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
function Gc(e, t, n, r, i, o, s, a, l, c, u=!1) {
    const {p: f, m: d, um: m, n: _, o: {parentNode: b, remove: A}} = c;
    let g;
    const E = O0(e);
    E && t != null && t.pendingBranch && (g = t.pendingId,
    t.deps++);
    const p = e.props ? Zh(e.props.timeout) : void 0
      , y = o
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: _l++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !u,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(k=!1, L=!1) {
            const {vnode: O, activeBranch: C, pendingBranch: D, pendingId: x, effects: U, parentComponent: Z, container: W} = T;
            let K = !1;
            T.isHydrating ? T.isHydrating = !1 : k || (K = C && D.transition && D.transition.mode === "out-in",
            K && (C.transition.afterLeave = ()=>{
                x === T.pendingId && (d(D, W, o === y ? _(C) : o, 0),
                yl(U))
            }
            ),
            C && (b(C.el) !== T.hiddenContainer && (o = _(C)),
            m(C, Z, T, !0)),
            K || d(D, W, o, 0)),
            hi(T, D),
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
            !Y && !K && yl(U),
            T.effects = [],
            E && t && t.pendingBranch && g === t.pendingId && (t.deps--,
            t.deps === 0 && !L && t.resolve()),
            fo(O, "onResolve")
        },
        fallback(k) {
            if (!T.pendingBranch)
                return;
            const {vnode: L, activeBranch: O, parentComponent: C, container: D, namespace: x} = T;
            fo(L, "onFallback");
            const U = _(O)
              , Z = ()=>{
                T.isInFallback && (f(null, k, D, U, C, null, x, a, l),
                hi(T, k))
            }
              , W = k.transition && k.transition.mode === "out-in";
            W && (O.transition.afterLeave = Z),
            T.isInFallback = !0,
            m(O, C, null, !0),
            W || Z()
        },
        move(k, L, O) {
            T.activeBranch && d(T.activeBranch, k, L, O),
            T.container = k
        },
        next() {
            return T.activeBranch && _(T.activeBranch)
        },
        registerDep(k, L) {
            const O = !!T.pendingBranch;
            O && T.deps++;
            const C = k.vnode.el;
            k.asyncDep.catch(D=>{
                Po(D, k, 0)
            }
            ).then(D=>{
                if (k.isUnmounted || T.isUnmounted || T.pendingId !== k.suspenseId)
                    return;
                k.asyncResolved = !0;
                const {vnode: x} = k;
                Cl(k, D, !1),
                C && (x.el = C);
                const U = !C && k.subTree.el;
                L(k, x, b(C || k.subTree.el), C ? null : _(k.subTree), T, s, l),
                U && A(U),
                Kc(k, x.el),
                O && --T.deps === 0 && T.resolve()
            }
            )
        },
        unmount(k, L) {
            T.isUnmounted = !0,
            T.activeBranch && m(T.activeBranch, n, k, L),
            T.pendingBranch && m(T.pendingBranch, n, k, L)
        }
    };
    return T
}
function w0(e, t, n, r, i, o, s, a, l) {
    const c = t.suspense = Gc(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, a, !0)
      , u = l(e, c.pendingBranch = t.ssContent, n, c, o, s);
    return c.deps === 0 && c.resolve(!1, !0),
    u
}
function L0(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = nf(r ? n.default : n),
    e.ssFallback = r ? nf(n.fallback) : et(Pt)
}
function nf(e) {
    let t;
    if (ye(e)) {
        const n = yi && e._c;
        n && (e._d = !1,
        me()),
        e = e(),
        n && (e._d = !0,
        t = rn,
        Jp())
    }
    return de(e) && (e = v0(e)),
    e = $t(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function Lp(e, t) {
    t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : yl(e)
}
function hi(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let i = t.el;
    for (; !i && t.component; )
        t = t.component.subTree,
        i = t.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    Kc(r, i))
}
function O0(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const C0 = Symbol.for("v-scx")
  , R0 = ()=>Tt(C0);
function I0(e, t) {
    return Jc(e, null, t)
}
const Zo = {};
function je(e, t, n) {
    return Jc(e, t, n)
}
function Jc(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: a}=rt) {
    if (t && o) {
        const k = t;
        t = (...L)=>{
            k(...L),
            T()
        }
    }
    const l = bt
      , c = k=>r === !0 ? k : Br(k, r === !1 ? 1 : void 0);
    let u, f = !1, d = !1;
    if (lt(e) ? (u = ()=>e.value,
    f = Ts(e)) : gr(e) ? (u = ()=>c(e),
    f = !0) : de(e) ? (d = !0,
    f = e.some(k=>gr(k) || Ts(k)),
    u = ()=>e.map(k=>{
        if (lt(k))
            return k.value;
        if (gr(k))
            return c(k);
        if (ye(k))
            return yr(k, l, 2)
    }
    )) : ye(e) ? t ? u = ()=>yr(e, l, 2) : u = ()=>(m && m(),
    sn(e, l, 3, [_])) : u = nn,
    t && r) {
        const k = u;
        u = ()=>Br(k())
    }
    let m, _ = k=>{
        m = p.onStop = ()=>{
            yr(k, l, 4),
            m = p.onStop = void 0
        }
    }
    , b;
    if (ia)
        if (_ = nn,
        t ? n && sn(t, l, 3, [u(), d ? [] : void 0, _]) : u(),
        i === "sync") {
            const k = R0();
            b = k.__watcherHandles || (k.__watcherHandles = [])
        } else
            return nn;
    let A = d ? new Array(e.length).fill(Zo) : Zo;
    const g = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const k = p.run();
                (r || f || (d ? k.some((L,O)=>br(L, A[O])) : br(k, A))) && (m && m(),
                sn(t, l, 3, [k, A === Zo ? void 0 : d && A[0] === Zo ? [] : A, _]),
                A = k)
            } else
                p.run()
    }
    ;
    g.allowRecurse = !!t;
    let E;
    i === "sync" ? E = g : i === "post" ? E = ()=>St(g, l && l.suspense) : (g.pre = !0,
    l && (g.id = l.uid),
    E = ()=>jc(g));
    const p = new Pc(u,nn,E)
      , y = Io()
      , T = ()=>{
        p.stop(),
        y && Cc(y.effects, p)
    }
    ;
    return t ? n ? g() : A = p.run() : i === "post" ? St(p.run.bind(p), l && l.suspense) : p.run(),
    b && b.push(T),
    T
}
function P0(e, t, n) {
    const r = this.proxy
      , i = ot(e) ? e.includes(".") ? Op(r, e) : ()=>r[e] : e.bind(r, r);
    let o;
    ye(t) ? o = t : (o = t.handler,
    n = t);
    const s = Jr(this)
      , a = Jc(i, o.bind(r), n);
    return s(),
    a
}
function Op(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Br(e, t, n=0, r) {
    if (!nt(e) || e.__v_skip)
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
    lt(e))
        Br(e.value, t, n, r);
    else if (de(e))
        for (let i = 0; i < e.length; i++)
            Br(e[i], t, n, r);
    else if (zh(e) || li(e))
        e.forEach(i=>{
            Br(i, t, n, r)
        }
        );
    else if (Xh(e))
        for (const i in e)
            Br(e[i], t, n, r);
    return e
}
function IM(e, t) {
    if (pt === null)
        return e;
    const n = oa(pt) || pt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,a,l=rt] = t[i];
        o && (ye(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Br(s),
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
function wn(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        o && (a.oldValue = o[s].value);
        let l = a.dir[r];
        l && (Xr(),
        sn(l, n, 8, [e.el, a, e, t]),
        Zr())
    }
}
const ar = Symbol("_leaveCb")
  , $o = Symbol("_enterCb");
function M0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Mt(()=>{
        e.isMounted = !0
    }
    ),
    _n(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const zt = [Function, Array]
  , Cp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: zt,
    onEnter: zt,
    onAfterEnter: zt,
    onEnterCancelled: zt,
    onBeforeLeave: zt,
    onLeave: zt,
    onAfterLeave: zt,
    onLeaveCancelled: zt,
    onBeforeAppear: zt,
    onAppear: zt,
    onAfterAppear: zt,
    onAppearCancelled: zt
}
  , D0 = {
    name: "BaseTransition",
    props: Cp,
    setup(e, {slots: t}) {
        const n = bn()
          , r = M0();
        return ()=>{
            const i = t.default && Ip(t.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const d of i)
                    if (d.type !== Pt) {
                        o = d;
                        break
                    }
            }
            const s = Ve(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Ra(o);
            const l = rf(o);
            if (!l)
                return Ra(o);
            const c = bl(l, s, r, n);
            ks(l, c);
            const u = n.subTree
              , f = u && rf(u);
            if (f && f.type !== Pt && !dn(l, f)) {
                const d = bl(f, s, r, n);
                if (ks(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ra(o);
                a === "in-out" && l.type !== Pt && (d.delayLeave = (m,_,b)=>{
                    const A = Rp(r, f);
                    A[String(f.key)] = f,
                    m[ar] = ()=>{
                        _(),
                        m[ar] = void 0,
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
  , N0 = D0;
function Rp(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function bl(e, t, n, r) {
    const {appear: i, mode: o, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: b, onAppear: A, onAfterAppear: g, onAppearCancelled: E} = t
      , p = String(e.key)
      , y = Rp(n, e)
      , T = (O,C)=>{
        O && sn(O, r, 9, C)
    }
      , k = (O,C)=>{
        const D = C[1];
        T(O, C),
        de(O) ? O.every(x=>x.length <= 1) && D() : O.length <= 1 && D()
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
            O[ar] && O[ar](!0);
            const D = y[p];
            D && dn(e, D) && D.el[ar] && D.el[ar](),
            T(C, [O])
        },
        enter(O) {
            let C = l
              , D = c
              , x = u;
            if (!n.isMounted)
                if (i)
                    C = A || l,
                    D = g || c,
                    x = E || u;
                else
                    return;
            let U = !1;
            const Z = O[$o] = W=>{
                U || (U = !0,
                W ? T(x, [O]) : T(D, [O]),
                L.delayedLeave && L.delayedLeave(),
                O[$o] = void 0)
            }
            ;
            C ? k(C, [O, Z]) : Z()
        },
        leave(O, C) {
            const D = String(e.key);
            if (O[$o] && O[$o](!0),
            n.isUnmounting)
                return C();
            T(f, [O]);
            let x = !1;
            const U = O[ar] = Z=>{
                x || (x = !0,
                C(),
                Z ? T(_, [O]) : T(m, [O]),
                O[ar] = void 0,
                y[D] === e && delete y[D])
            }
            ;
            y[D] = e,
            d ? k(d, [O, U]) : U()
        },
        clone(O) {
            return bl(O, t, n, r)
        }
    };
    return L
}
function Ra(e) {
    if (ea(e))
        return e = Wn(e),
        e.children = null,
        e
}
function rf(e) {
    return ea(e) ? e.children ? e.children[0] : void 0 : e
}
function ks(e, t) {
    e.shapeFlag & 6 && e.component ? ks(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Ip(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === mt ? (s.patchFlag & 128 && i++,
        r = r.concat(Ip(s.children, t, a))) : (t || s.type !== Pt) && r.push(a != null ? Wn(s, {
            key: a
        }) : s)
    }
    if (i > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Be(e, t) {
    return ye(e) ? yt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const jr = e=>!!e.type.__asyncLoader
  , ea = e=>e.type.__isKeepAlive
  , V0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = bn()
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
        r.activate = (E,p,y,T,k)=>{
            const L = E.component;
            c(E, p, y, 0, a),
            l(L.vnode, E, p, y, L, a, T, E.slotScopeIds, k),
            St(()=>{
                L.isDeactivated = !1,
                L.a && ui(L.a);
                const O = E.props && E.props.onVnodeMounted;
                O && Ut(O, L.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            c(E, d, null, 1, a),
            St(()=>{
                p.da && ui(p.da);
                const y = E.props && E.props.onVnodeUnmounted;
                y && Ut(y, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Ia(E),
            u(E, n, a, !0)
        }
        function _(E) {
            i.forEach((p,y)=>{
                const T = Rl(p.type);
                T && (!E || !E(T)) && b(y)
            }
            )
        }
        function b(E) {
            const p = i.get(E);
            !s || !dn(p, s) ? m(p) : s && Ia(s),
            i.delete(E),
            o.delete(E)
        }
        je(()=>[e.include, e.exclude], ([E,p])=>{
            E && _(y=>xi(E, y)),
            p && _(y=>!xi(p, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let A = null;
        const g = ()=>{
            A != null && i.set(A, Pa(n.subTree))
        }
        ;
        return Mt(g),
        zc(g),
        _n(()=>{
            i.forEach(E=>{
                const {subTree: p, suspense: y} = n
                  , T = Pa(p);
                if (E.type === T.type && E.key === T.key) {
                    Ia(T);
                    const k = T.component.da;
                    k && St(k, y);
                    return
                }
                m(E)
            }
            )
        }
        ),
        ()=>{
            if (A = null,
            !t.default)
                return null;
            const E = t.default()
              , p = E[0];
            if (E.length > 1)
                return s = null,
                E;
            if (!vi(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
                return s = null,
                p;
            let y = Pa(p);
            const T = y.type
              , k = Rl(jr(y) ? y.type.__asyncResolved || {} : T)
              , {include: L, exclude: O, max: C} = e;
            if (L && (!k || !xi(L, k)) || O && k && xi(O, k))
                return s = y,
                p;
            const D = y.key == null ? T : y.key
              , x = i.get(D);
            return y.el && (y = Wn(y),
            p.shapeFlag & 128 && (p.ssContent = y)),
            A = D,
            x ? (y.el = x.el,
            y.component = x.component,
            y.transition && ks(y, y.transition),
            y.shapeFlag |= 512,
            o.delete(D),
            o.add(D)) : (o.add(D),
            C && o.size > parseInt(C, 10) && b(o.values().next().value)),
            y.shapeFlag |= 256,
            s = y,
            wp(p.type) ? p : y
        }
    }
}
  , U0 = V0;
function xi(e, t) {
    return de(e) ? e.some(n=>xi(n, t)) : ot(e) ? e.split(",").includes(t) : kv(e) ? e.test(t) : !1
}
function Pp(e, t) {
    Dp(e, "a", t)
}
function Mp(e, t) {
    Dp(e, "da", t)
}
function Dp(e, t, n=bt) {
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
    if (ta(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            ea(i.parent.vnode) && B0(r, t, n, i),
            i = i.parent
    }
}
function B0(e, t, n, r) {
    const i = ta(t, e, r, !0);
    Ri(()=>{
        Cc(r[t], i)
    }
    , n)
}
function Ia(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Pa(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function ta(e, t, n=bt, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            Xr();
            const a = Jr(n)
              , l = sn(t, n, e, s);
            return a(),
            Zr(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const Gn = e=>(t,n=bt)=>(!ia || e === "sp") && ta(e, (...r)=>t(...r), n)
  , F0 = Gn("bm")
  , Mt = Gn("m")
  , x0 = Gn("bu")
  , zc = Gn("u")
  , _n = Gn("bum")
  , Ri = Gn("um")
  , H0 = Gn("sp")
  , j0 = Gn("rtg")
  , K0 = Gn("rtc");
function Np(e, t=bt) {
    ta("ec", e, t)
}
function Y0(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (de(e) || ot(e)) {
        i = new Array(e.length);
        for (let s = 0, a = e.length; s < a; s++)
            i[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o && o[s])
    } else if (nt(e))
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
function Er(e, t, n={}, r, i) {
    if (pt.isCE || pt.parent && jr(pt.parent) && pt.parent.isCE)
        return t !== "default" && (n.name = t),
        et("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    me();
    const s = o && Vp(o(n))
      , a = _t(mt, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function Vp(e) {
    return e.some(t=>vi(t) ? !(t.type === Pt || t.type === mt && !Vp(t.children)) : !0) ? e : null
}
const El = e=>e ? Zp(e) ? oa(e) || e.proxy : El(e.parent) : null
  , Ki = yt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>El(e.parent),
    $root: e=>El(e.root),
    $emit: e=>e.emit,
    $options: e=>Qc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        jc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Wt.bind(e.proxy)),
    $watch: e=>P0.bind(e)
})
  , Ma = (e,t)=>e !== rt && !e.__isScriptSetup && Ke(e, t)
  , q0 = {
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
                if (Ma(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== rt && Ke(i, t))
                    return s[t] = 2,
                    i[t];
                if ((c = e.propsOptions[0]) && Ke(c, t))
                    return s[t] = 3,
                    o[t];
                if (n !== rt && Ke(n, t))
                    return s[t] = 4,
                    n[t];
                Al && (s[t] = 0)
            }
        }
        const u = Ki[t];
        let f, d;
        if (u)
            return t === "$attrs" && xt(e, "get", t),
            u(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== rt && Ke(n, t))
            return s[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        Ke(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return Ma(i, t) ? (i[t] = n,
        !0) : r !== rt && Ke(r, t) ? (r[t] = n,
        !0) : Ke(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let a;
        return !!n[s] || e !== rt && Ke(e, s) || Ma(t, s) || (a = o[0]) && Ke(a, s) || Ke(r, s) || Ke(Ki, s) || Ke(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ke(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function W0() {
    return G0().slots
}
function G0() {
    const e = bn();
    return e.setupContext || (e.setupContext = em(e))
}
function Tl(e) {
    return de(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function na(e, t) {
    const n = Tl(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let i = n[r];
        i ? de(i) || ye(i) ? i = n[r] = {
            type: i,
            default: t[r]
        } : i.default = t[r] : i === null && (i = n[r] = {
            default: t[r]
        }),
        i && t[`__skip_${r}`] && (i.skipFactory = !0)
    }
    return n
}
function J0(e) {
    const t = bn();
    let n = e();
    return Ol(),
    Rc(n) && (n = n.catch(r=>{
        throw Jr(t),
        r
    }
    )),
    [n, ()=>Jr(t)]
}
let Al = !0;
function z0(e) {
    const t = Qc(e)
      , n = e.proxy
      , r = e.ctx;
    Al = !1,
    t.beforeCreate && of(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: a, provide: l, inject: c, created: u, beforeMount: f, mounted: d, beforeUpdate: m, updated: _, activated: b, deactivated: A, beforeDestroy: g, beforeUnmount: E, destroyed: p, unmounted: y, render: T, renderTracked: k, renderTriggered: L, errorCaptured: O, serverPrefetch: C, expose: D, inheritAttrs: x, components: U, directives: Z, filters: W} = t;
    if (c && Q0(c, r, null),
    s)
        for (const Y in s) {
            const B = s[Y];
            ye(B) && (r[Y] = B.bind(n))
        }
    if (i) {
        const Y = i.call(n, n);
        nt(Y) && (e.data = At(Y))
    }
    if (Al = !0,
    o)
        for (const Y in o) {
            const B = o[Y]
              , ae = ye(B) ? B.bind(n, n) : ye(B.get) ? B.get.bind(n, n) : nn
              , j = !ye(B) && ye(B.set) ? B.set.bind(n) : nn
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
            Up(a[Y], r, n, Y);
    if (l) {
        const Y = ye(l) ? l.call(n) : l;
        Reflect.ownKeys(Y).forEach(B=>{
            Kr(B, Y[B])
        }
        )
    }
    u && of(u, e, "c");
    function N(Y, B) {
        de(B) ? B.forEach(ae=>Y(ae.bind(n))) : B && Y(B.bind(n))
    }
    if (N(F0, f),
    N(Mt, d),
    N(x0, m),
    N(zc, _),
    N(Pp, b),
    N(Mp, A),
    N(Np, O),
    N(K0, k),
    N(j0, L),
    N(_n, E),
    N(Ri, y),
    N(H0, C),
    de(D))
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
    T && e.render === nn && (e.render = T),
    x != null && (e.inheritAttrs = x),
    U && (e.components = U),
    Z && (e.directives = Z)
}
function Q0(e, t, n=nn) {
    de(e) && (e = Sl(e));
    for (const r in e) {
        const i = e[r];
        let o;
        nt(i) ? "default"in i ? o = Tt(i.from || r, i.default, !0) : o = Tt(i.from || r) : o = Tt(i),
        lt(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: s=>o.value = s
        }) : t[r] = o
    }
}
function of(e, t, n) {
    sn(de(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Up(e, t, n, r) {
    const i = r.includes(".") ? Op(n, r) : ()=>n[r];
    if (ot(e)) {
        const o = t[e];
        ye(o) && je(i, o)
    } else if (ye(e))
        je(i, e.bind(n));
    else if (nt(e))
        if (de(e))
            e.forEach(o=>Up(o, t, n, r));
        else {
            const o = ye(e.handler) ? e.handler.bind(n) : t[e.handler];
            ye(o) && je(i, o, e)
        }
}
function Qc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach(c=>ws(l, c, s, !0)),
    ws(l, t, s)),
    nt(t) && o.set(t, l),
    l
}
function ws(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && ws(e, o, n, !0),
    i && i.forEach(s=>ws(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = X0[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const X0 = {
    data: sf,
    props: af,
    emits: af,
    methods: Hi,
    computed: Hi,
    beforeCreate: Ot,
    created: Ot,
    beforeMount: Ot,
    mounted: Ot,
    beforeUpdate: Ot,
    updated: Ot,
    beforeDestroy: Ot,
    beforeUnmount: Ot,
    destroyed: Ot,
    unmounted: Ot,
    activated: Ot,
    deactivated: Ot,
    errorCaptured: Ot,
    serverPrefetch: Ot,
    components: Hi,
    directives: Hi,
    watch: $0,
    provide: sf,
    inject: Z0
};
function sf(e, t) {
    return t ? e ? function() {
        return yt(ye(e) ? e.call(this, this) : e, ye(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Z0(e, t) {
    return Hi(Sl(e), Sl(t))
}
function Sl(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Ot(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Hi(e, t) {
    return e ? yt(Object.create(null), e, t) : t
}
function af(e, t) {
    return e ? de(e) && de(t) ? [...new Set([...e, ...t])] : yt(Object.create(null), Tl(e), Tl(t ?? {})) : t
}
function $0(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = yt(Object.create(null), e);
    for (const r in t)
        n[r] = Ot(e[r], t[r]);
    return n
}
function Bp() {
    return {
        app: null,
        config: {
            isNativeTag: Av,
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
let e_ = 0;
function t_(e, t) {
    return function(r, i=null) {
        ye(r) || (r = yt({}, r)),
        i != null && !nt(i) && (i = null);
        const o = Bp()
          , s = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: e_++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: tm,
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
                    const d = et(r, i);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(d, c) : e(d, c, f),
                    a = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    oa(d.component) || d.component.proxy
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
                const u = pi;
                pi = l;
                try {
                    return c()
                } finally {
                    pi = u
                }
            }
        };
        return l
    }
}
let pi = null;
function Kr(e, t) {
    if (bt) {
        let n = bt.provides;
        const r = bt.parent && bt.parent.provides;
        r === n && (n = bt.provides = Object.create(r)),
        n[e] = t
    }
}
function Tt(e, t, n=!1) {
    const r = bt || pt;
    if (r || pi) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : pi._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && ye(t) ? t.call(r && r.proxy) : t
    }
}
function Xc() {
    return !!(bt || pt || pi)
}
function n_(e, t, n, r=!1) {
    const i = {}
      , o = {};
    bs(o, ra, 1),
    e.propsDefaults = Object.create(null),
    Fp(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Ci(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function r_(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , a = Ve(i)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Zs(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (Ke(o, d))
                        m !== o[d] && (o[d] = m,
                        c = !0);
                    else {
                        const _ = Nn(d);
                        i[_] = kl(l, a, _, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    c = !0)
            }
        }
    } else {
        Fp(e, t, i, o) && (c = !0);
        let u;
        for (const f in a)
            (!t || !Ke(t, f) && ((u = Qr(f)) === f || !Ke(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (i[f] = kl(l, a, f, void 0, e, !0)) : delete i[f]);
        if (o !== a)
            for (const f in o)
                (!t || !Ke(t, f)) && (delete o[f],
                c = !0)
    }
    c && qn(e, "set", "$attrs")
}
function Fp(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (ci(l))
                continue;
            const c = t[l];
            let u;
            i && Ke(i, u = Nn(l)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Zs(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            s = !0)
        }
    if (o) {
        const l = Ve(n)
          , c = a || rt;
        for (let u = 0; u < o.length; u++) {
            const f = o[u];
            n[f] = kl(i, l, f, c[f], e, !Ke(c, f))
        }
    }
    return s
}
function kl(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const a = Ke(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && ye(l)) {
                const {propsDefaults: c} = i;
                if (n in c)
                    r = c[n];
                else {
                    const u = Jr(i);
                    r = c[n] = l.call(null, t),
                    u()
                }
            } else
                r = l
        }
        s[0] && (o && !a ? r = !1 : s[1] && (r === "" || r === Qr(n)) && (r = !0))
    }
    return r
}
function xp(e, t, n=!1) {
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
            const [d,m] = xp(f, t, !0);
            yt(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!o && !l)
        return nt(e) && r.set(e, ai),
        ai;
    if (de(o))
        for (let u = 0; u < o.length; u++) {
            const f = Nn(o[u]);
            lf(f) && (s[f] = rt)
        }
    else if (o)
        for (const u in o) {
            const f = Nn(u);
            if (lf(f)) {
                const d = o[u]
                  , m = s[f] = de(d) || ye(d) ? {
                    type: d
                } : yt({}, d);
                if (m) {
                    const _ = ff(Boolean, m.type)
                      , b = ff(String, m.type);
                    m[0] = _ > -1,
                    m[1] = b < 0 || _ < b,
                    (_ > -1 || Ke(m, "default")) && a.push(f)
                }
            }
        }
    const c = [s, a];
    return nt(e) && r.set(e, c),
    c
}
function lf(e) {
    return e[0] !== "$" && !ci(e)
}
function cf(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function uf(e, t) {
    return cf(e) === cf(t)
}
function ff(e, t) {
    return de(t) ? t.findIndex(n=>uf(n, e)) : ye(t) && uf(t, e) ? 0 : -1
}
const Hp = e=>e[0] === "_" || e === "$stable"
  , Zc = e=>de(e) ? e.map($t) : [$t(e)]
  , i_ = (e,t,n)=>{
    if (t._n)
        return t;
    const r = ln((...i)=>Zc(t(...i)), n);
    return r._c = !1,
    r
}
  , jp = (e,t,n)=>{
    const r = e._ctx;
    for (const i in e) {
        if (Hp(i))
            continue;
        const o = e[i];
        if (ye(o))
            t[i] = i_(i, o, r);
        else if (o != null) {
            const s = Zc(o);
            t[i] = ()=>s
        }
    }
}
  , Kp = (e,t)=>{
    const n = Zc(t);
    e.slots.default = ()=>n
}
  , o_ = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Ve(t),
        bs(t, "_", n)) : jp(t, e.slots = {})
    } else
        e.slots = {},
        t && Kp(e, t);
    bs(e.slots, ra, 1)
}
  , s_ = (e,t,n)=>{
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = rt;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (yt(i, t),
        !n && a === 1 && delete i._) : (o = !t.$stable,
        jp(t, i)),
        s = t
    } else
        t && (Kp(e, t),
        s = {
            default: 1
        });
    if (o)
        for (const a in i)
            !Hp(a) && s[a] == null && delete i[a]
}
;
function Ls(e, t, n, r, i=!1) {
    if (de(e)) {
        e.forEach((d,m)=>Ls(d, t && (de(t) ? t[m] : t), n, r, i));
        return
    }
    if (jr(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? oa(r.component) || r.component.proxy : r.el
      , s = i ? null : o
      , {i: a, r: l} = e
      , c = t && t.r
      , u = a.refs === rt ? a.refs = {} : a.refs
      , f = a.setupState;
    if (c != null && c !== l && (ot(c) ? (u[c] = null,
    Ke(f, c) && (f[c] = null)) : lt(c) && (c.value = null)),
    ye(l))
        yr(l, a, 12, [s, u]);
    else {
        const d = ot(l)
          , m = lt(l);
        if (d || m) {
            const _ = ()=>{
                if (e.f) {
                    const b = d ? Ke(f, l) ? f[l] : u[l] : l.value;
                    i ? de(b) && Cc(b, o) : de(b) ? b.includes(o) || b.push(o) : d ? (u[l] = [o],
                    Ke(f, l) && (f[l] = u[l])) : (l.value = [o],
                    e.k && (u[e.k] = l.value))
                } else
                    d ? (u[l] = s,
                    Ke(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (u[e.k] = s))
            }
            ;
            s ? (_.id = -1,
            St(_, n)) : _()
        }
    }
}
let Xn = !1;
const a_ = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , l_ = e=>e.namespaceURI.includes("MathML")
  , es = e=>{
    if (a_(e))
        return "svg";
    if (l_(e))
        return "mathml"
}
  , ts = e=>e.nodeType === 8;
function c_(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: a, insert: l, createComment: c}} = e
      , u = (p,y)=>{
        if (!y.hasChildNodes()) {
            n(null, p, y),
            As(),
            y._vnode = p;
            return
        }
        Xn = !1,
        f(y.firstChild, p, null, null, null),
        As(),
        y._vnode = p,
        Xn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,y,T,k,L,O=!1)=>{
        const C = ts(p) && p.data === "["
          , D = ()=>b(p, y, T, k, L, C)
          , {type: x, ref: U, shapeFlag: Z, patchFlag: W} = y;
        let K = p.nodeType;
        y.el = p,
        W === -2 && (O = !1,
        y.dynamicChildren = null);
        let N = null;
        switch (x) {
        case Gr:
            K !== 3 ? y.children === "" ? (l(y.el = i(""), s(p), p),
            N = p) : N = D() : (p.data !== y.children && (Xn = !0,
            p.data = y.children),
            N = o(p));
            break;
        case Pt:
            E(p) ? (N = o(p),
            g(y.el = p.content.firstChild, p, T)) : K !== 8 || C ? N = D() : N = o(p);
            break;
        case qi:
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
        case mt:
            C ? N = _(p, y, T, k, L, O) : N = D();
            break;
        default:
            if (Z & 1)
                (K !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? N = D() : N = d(p, y, T, k, L, O);
            else if (Z & 6) {
                y.slotScopeIds = L;
                const Y = s(p);
                if (C ? N = A(p) : ts(p) && p.data === "teleport start" ? N = A(p, p.data, "teleport end") : N = o(p),
                t(y, Y, null, T, k, es(Y), O),
                jr(y)) {
                    let B;
                    C ? (B = et(mt),
                    B.anchor = N ? N.previousSibling : Y.lastChild) : B = p.nodeType === 3 ? Xp("") : et("div"),
                    B.el = p,
                    y.component.subTree = B
                }
            } else
                Z & 64 ? K !== 8 ? N = D() : N = y.type.hydrate(p, y, T, k, L, O, e, m) : Z & 128 && (N = y.type.hydrate(p, y, T, k, es(s(p)), L, O, e, f))
        }
        return U != null && Ls(U, null, k, y),
        N
    }
      , d = (p,y,T,k,L,O)=>{
        O = O || !!y.dynamicChildren;
        const {type: C, props: D, patchFlag: x, shapeFlag: U, dirs: Z, transition: W} = y
          , K = C === "input" || C === "option";
        if (K || x !== -1) {
            Z && wn(y, null, T, "created");
            let N = !1;
            if (E(p)) {
                N = qp(k, W) && T && T.vnode.props && T.vnode.props.appear;
                const B = p.content.firstChild;
                N && W.beforeEnter(B),
                g(B, p, T),
                y.el = p = B
            }
            if (U & 16 && !(D && (D.innerHTML || D.textContent))) {
                let B = m(p.firstChild, y, p, T, k, L, O);
                for (; B; ) {
                    Xn = !0;
                    const ae = B;
                    B = B.nextSibling,
                    a(ae)
                }
            } else
                U & 8 && p.textContent !== y.children && (Xn = !0,
                p.textContent = y.children);
            if (D)
                if (K || !O || x & 48)
                    for (const B in D)
                        (K && (B.endsWith("value") || B === "indeterminate") || Oo(B) && !ci(B) || B[0] === ".") && r(p, B, null, D[B], void 0, void 0, T);
                else
                    D.onClick && r(p, "onClick", null, D.onClick, void 0, void 0, T);
            let Y;
            (Y = D && D.onVnodeBeforeMount) && Ut(Y, T, y),
            Z && wn(y, null, T, "beforeMount"),
            ((Y = D && D.onVnodeMounted) || Z || N) && Lp(()=>{
                Y && Ut(Y, T, y),
                N && W.enter(p),
                Z && wn(y, null, T, "mounted")
            }
            , k)
        }
        return p.nextSibling
    }
      , m = (p,y,T,k,L,O,C)=>{
        C = C || !!y.dynamicChildren;
        const D = y.children
          , x = D.length;
        for (let U = 0; U < x; U++) {
            const Z = C ? D[U] : D[U] = $t(D[U]);
            if (p)
                p = f(p, Z, k, L, O, C);
            else {
                if (Z.type === Gr && !Z.children)
                    continue;
                Xn = !0,
                n(null, Z, T, null, k, L, es(T), O)
            }
        }
        return p
    }
      , _ = (p,y,T,k,L,O)=>{
        const {slotScopeIds: C} = y;
        C && (L = L ? L.concat(C) : C);
        const D = s(p)
          , x = m(o(p), y, D, T, k, L, O);
        return x && ts(x) && x.data === "]" ? o(y.anchor = x) : (Xn = !0,
        l(y.anchor = c("]"), D, x),
        x)
    }
      , b = (p,y,T,k,L,O)=>{
        if (Xn = !0,
        y.el = null,
        O) {
            const x = A(p);
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
        n(null, y, D, C, T, k, es(D), L),
        C
    }
      , A = (p,y="[",T="]")=>{
        let k = 0;
        for (; p; )
            if (p = o(p),
            p && ts(p) && (p.data === y && k++,
            p.data === T)) {
                if (k === 0)
                    return o(p);
                k--
            }
        return p
    }
      , g = (p,y,T)=>{
        const k = y.parentNode;
        k && k.replaceChild(p, y);
        let L = T;
        for (; L; )
            L.vnode.el === y && (L.vnode.el = L.subTree.el = p),
            L = L.parent
    }
      , E = p=>p.nodeType === 1 && p.tagName.toLowerCase() === "template";
    return [u, f]
}
const St = Lp;
function u_(e) {
    return Yp(e)
}
function f_(e) {
    return Yp(e, c_)
}
function Yp(e, t) {
    const n = $h();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m=nn, insertStaticContent: _} = e
      , b = (h,v,w,R=null,V=null,q=null,X=void 0,z=null,ee=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !dn(h, v) && (R = H(h),
        _e(h, V, q, !0),
        h = null),
        v.patchFlag === -2 && (ee = !1,
        v.dynamicChildren = null);
        const {type: J, ref: oe, shapeFlag: ie} = v;
        switch (J) {
        case Gr:
            A(h, v, w, R);
            break;
        case Pt:
            g(h, v, w, R);
            break;
        case qi:
            h == null && E(v, w, R, X);
            break;
        case mt:
            U(h, v, w, R, V, q, X, z, ee);
            break;
        default:
            ie & 1 ? T(h, v, w, R, V, q, X, z, ee) : ie & 6 ? Z(h, v, w, R, V, q, X, z, ee) : (ie & 64 || ie & 128) && J.process(h, v, w, R, V, q, X, z, ee, $)
        }
        oe != null && V && Ls(oe, h && h.ref, q, v || h, !v)
    }
      , A = (h,v,w,R)=>{
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
        h == null ? k(v, w, R, V, q, X, z, ee) : C(h, v, V, q, X, z, ee)
    }
      , k = (h,v,w,R,V,q,X,z)=>{
        let ee, J;
        const {props: oe, shapeFlag: ie, transition: I, dirs: F} = h;
        if (ee = h.el = s(h.type, q, oe && oe.is, oe),
        ie & 8 ? u(ee, h.children) : ie & 16 && O(h.children, ee, null, R, V, Da(h, q), X, z),
        F && wn(h, null, R, "created"),
        L(ee, h, h.scopeId, X, R),
        oe) {
            for (const pe in oe)
                pe !== "value" && !ci(pe) && o(ee, pe, null, oe[pe], q, h.children, R, V, tt);
            "value"in oe && o(ee, "value", null, oe.value, q),
            (J = oe.onVnodeBeforeMount) && Ut(J, R, h)
        }
        F && wn(h, null, R, "beforeMount");
        const se = qp(V, I);
        se && I.beforeEnter(ee),
        r(ee, v, w),
        ((J = oe && oe.onVnodeMounted) || se || F) && St(()=>{
            J && Ut(J, R, h),
            se && I.enter(ee),
            F && wn(h, null, R, "mounted")
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
            const oe = h[J] = z ? lr(h[J]) : $t(h[J]);
            b(null, oe, v, w, R, V, q, X, z)
        }
    }
      , C = (h,v,w,R,V,q,X)=>{
        const z = v.el = h.el;
        let {patchFlag: ee, dynamicChildren: J, dirs: oe} = v;
        ee |= h.patchFlag & 16;
        const ie = h.props || rt
          , I = v.props || rt;
        let F;
        if (w && Lr(w, !1),
        (F = I.onVnodeBeforeUpdate) && Ut(F, w, v, h),
        oe && wn(v, h, w, "beforeUpdate"),
        w && Lr(w, !0),
        J ? D(h.dynamicChildren, J, z, w, R, Da(v, V), q) : X || B(h, v, z, null, w, R, Da(v, V), q, !1),
        ee > 0) {
            if (ee & 16)
                x(z, v, ie, I, w, R, V);
            else if (ee & 2 && ie.class !== I.class && o(z, "class", null, I.class, V),
            ee & 4 && o(z, "style", ie.style, I.style, V),
            ee & 8) {
                const se = v.dynamicProps;
                for (let pe = 0; pe < se.length; pe++) {
                    const We = se[pe]
                      , st = ie[We]
                      , vt = I[We];
                    (vt !== st || We === "value") && o(z, We, st, vt, V, h.children, w, R, tt)
                }
            }
            ee & 1 && h.children !== v.children && u(z, v.children)
        } else
            !X && J == null && x(z, v, ie, I, w, R, V);
        ((F = I.onVnodeUpdated) || oe) && St(()=>{
            F && Ut(F, w, v, h),
            oe && wn(v, h, w, "updated")
        }
        , R)
    }
      , D = (h,v,w,R,V,q,X)=>{
        for (let z = 0; z < v.length; z++) {
            const ee = h[z]
              , J = v[z]
              , oe = ee.el && (ee.type === mt || !dn(ee, J) || ee.shapeFlag & 70) ? f(ee.el) : w;
            b(ee, J, oe, null, R, V, q, X, !0)
        }
    }
      , x = (h,v,w,R,V,q,X)=>{
        if (w !== R) {
            if (w !== rt)
                for (const z in w)
                    !ci(z) && !(z in R) && o(h, z, w[z], null, X, v.children, V, q, tt);
            for (const z in R) {
                if (ci(z))
                    continue;
                const ee = R[z]
                  , J = w[z];
                ee !== J && z !== "value" && o(h, z, J, ee, X, v.children, V, q, tt)
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
        (v.key != null || V && v === V.subTree) && $c(h, v, !0)) : B(h, v, w, oe, V, q, X, z, ee)
    }
      , Z = (h,v,w,R,V,q,X,z,ee)=>{
        v.slotScopeIds = z,
        h == null ? v.shapeFlag & 512 ? V.ctx.activate(v, w, R, X, ee) : W(v, w, R, V, q, X, ee) : K(h, v, ee)
    }
      , W = (h,v,w,R,V,q,X)=>{
        const z = h.component = b_(h, R, V);
        if (ea(h) && (z.ctx.renderer = $),
        E_(z),
        z.asyncDep) {
            if (V && V.registerDep(z, N),
            !h.el) {
                const ee = z.subTree = et(Pt);
                g(null, ee, v, w)
            }
        } else
            N(z, h, v, w, V, q, X)
    }
      , K = (h,v,w)=>{
        const R = v.component = h.component;
        if (E0(h, v, w))
            if (R.asyncDep && !R.asyncResolved) {
                Y(R, v, w);
                return
            } else
                R.next = v,
                d0(R.update),
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
                    const zn = Wp(h);
                    if (zn) {
                        oe && (oe.el = se.el,
                        Y(h, oe, X)),
                        zn.asyncDep.then(()=>{
                            h.isUnmounted || z()
                        }
                        );
                        return
                    }
                }
                let pe = oe, We;
                Lr(h, !1),
                oe ? (oe.el = se.el,
                Y(h, oe, X)) : oe = se,
                ie && ui(ie),
                (We = oe.props && oe.props.onVnodeBeforeUpdate) && Ut(We, F, oe, se),
                Lr(h, !0);
                const st = Ca(h)
                  , vt = h.subTree;
                h.subTree = st,
                b(vt, st, f(vt.el), H(vt), h, V, q),
                oe.el = st.el,
                pe === null && Kc(h, st.el),
                I && St(I, V),
                (We = oe.props && oe.props.onVnodeUpdated) && St(()=>Ut(We, F, oe, se), V)
            } else {
                let oe;
                const {el: ie, props: I} = v
                  , {bm: F, m: se, parent: pe} = h
                  , We = jr(v);
                if (Lr(h, !1),
                F && ui(F),
                !We && (oe = I && I.onVnodeBeforeMount) && Ut(oe, pe, v),
                Lr(h, !0),
                ie && Fe) {
                    const st = ()=>{
                        h.subTree = Ca(h),
                        Fe(ie, h.subTree, h, V, null)
                    }
                    ;
                    We ? v.type.__asyncLoader().then(()=>!h.isUnmounted && st()) : st()
                } else {
                    const st = h.subTree = Ca(h);
                    b(null, st, w, R, h, V, q),
                    v.el = st.el
                }
                if (se && St(se, V),
                !We && (oe = I && I.onVnodeMounted)) {
                    const st = v;
                    St(()=>Ut(oe, pe, st), V)
                }
                (v.shapeFlag & 256 || pe && jr(pe.vnode) && pe.vnode.shapeFlag & 256) && h.a && St(h.a, V),
                h.isMounted = !0,
                v = w = R = null
            }
        }
          , ee = h.effect = new Pc(z,nn,()=>jc(J),h.scope)
          , J = h.update = ()=>{
            ee.dirty && ee.run()
        }
        ;
        J.id = h.uid,
        Lr(h, !0),
        J()
    }
      , Y = (h,v,w)=>{
        v.component = h;
        const R = h.vnode.props;
        h.vnode = v,
        h.next = null,
        r_(h, v.props, R, w),
        s_(h, v.children, w),
        Xr(),
        $u(h),
        Zr()
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
        F & 8 ? (oe & 16 && tt(J, V, q),
        ie !== J && u(w, ie)) : oe & 16 ? F & 16 ? j(J, ie, w, R, V, q, X, z, ee) : tt(J, V, q, !0) : (oe & 8 && u(w, ""),
        F & 16 && O(ie, w, R, V, q, X, z, ee))
    }
      , ae = (h,v,w,R,V,q,X,z,ee)=>{
        h = h || ai,
        v = v || ai;
        const J = h.length
          , oe = v.length
          , ie = Math.min(J, oe);
        let I;
        for (I = 0; I < ie; I++) {
            const F = v[I] = ee ? lr(v[I]) : $t(v[I]);
            b(h[I], F, w, null, V, q, X, z, ee)
        }
        J > oe ? tt(h, V, q, !0, !1, ie) : O(v, w, R, V, q, X, z, ee, ie)
    }
      , j = (h,v,w,R,V,q,X,z,ee)=>{
        let J = 0;
        const oe = v.length;
        let ie = h.length - 1
          , I = oe - 1;
        for (; J <= ie && J <= I; ) {
            const F = h[J]
              , se = v[J] = ee ? lr(v[J]) : $t(v[J]);
            if (dn(F, se))
                b(F, se, w, null, V, q, X, z, ee);
            else
                break;
            J++
        }
        for (; J <= ie && J <= I; ) {
            const F = h[ie]
              , se = v[I] = ee ? lr(v[I]) : $t(v[I]);
            if (dn(F, se))
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
                    b(null, v[J] = ee ? lr(v[J]) : $t(v[J]), w, se, V, q, X, z, ee),
                    J++
            }
        } else if (J > I)
            for (; J <= ie; )
                _e(h[J], V, q, !0),
                J++;
        else {
            const F = J
              , se = J
              , pe = new Map;
            for (J = se; J <= I; J++) {
                const Ht = v[J] = ee ? lr(v[J]) : $t(v[J]);
                Ht.key != null && pe.set(Ht.key, J)
            }
            let We, st = 0;
            const vt = I - se + 1;
            let zn = !1
              , wa = 0;
            const Di = new Array(vt);
            for (J = 0; J < vt; J++)
                Di[J] = 0;
            for (J = F; J <= ie; J++) {
                const Ht = h[J];
                if (st >= vt) {
                    _e(Ht, V, q, !0);
                    continue
                }
                let Tn;
                if (Ht.key != null)
                    Tn = pe.get(Ht.key);
                else
                    for (We = se; We <= I; We++)
                        if (Di[We - se] === 0 && dn(Ht, v[We])) {
                            Tn = We;
                            break
                        }
                Tn === void 0 ? _e(Ht, V, q, !0) : (Di[Tn - se] = J + 1,
                Tn >= wa ? wa = Tn : zn = !0,
                b(Ht, v[Tn], w, null, V, q, X, z, ee),
                st++)
            }
            const Ku = zn ? d_(Di) : ai;
            for (We = Ku.length - 1,
            J = vt - 1; J >= 0; J--) {
                const Ht = se + J
                  , Tn = v[Ht]
                  , Yu = Ht + 1 < oe ? v[Ht + 1].el : R;
                Di[J] === 0 ? b(null, Tn, w, Yu, V, q, X, z, ee) : zn && (We < 0 || J !== Ku[We] ? ce(Tn, w, Yu, 2) : We--)
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
        if (X === mt) {
            r(q, v, w);
            for (let ie = 0; ie < ee.length; ie++)
                ce(ee[ie], v, w, R);
            r(h.anchor, v, w);
            return
        }
        if (X === qi) {
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
                  , pe = ()=>{
                    ie(q, ()=>{
                        se(),
                        F && F()
                    }
                    )
                }
                ;
                I ? I(q, se, pe) : pe()
            }
        else
            r(q, v, w)
    }
      , _e = (h,v,w,R=!1,V=!1)=>{
        const {type: q, props: X, ref: z, children: ee, dynamicChildren: J, shapeFlag: oe, patchFlag: ie, dirs: I} = h;
        if (z != null && Ls(z, null, w, h, !0),
        oe & 256) {
            v.ctx.deactivate(h);
            return
        }
        const F = oe & 1 && I
          , se = !jr(h);
        let pe;
        if (se && (pe = X && X.onVnodeBeforeUnmount) && Ut(pe, v, h),
        oe & 6)
            ct(h.component, w, R);
        else {
            if (oe & 128) {
                h.suspense.unmount(w, R);
                return
            }
            F && wn(h, null, v, "beforeUnmount"),
            oe & 64 ? h.type.remove(h, v, w, V, $, R) : J && (q !== mt || ie > 0 && ie & 64) ? tt(J, v, w, !1, !0) : (q === mt && ie & 384 || !V && oe & 16) && tt(ee, v, w),
            R && qe(h)
        }
        (se && (pe = X && X.onVnodeUnmounted) || F) && St(()=>{
            pe && Ut(pe, v, h),
            F && wn(h, null, v, "unmounted")
        }
        , w)
    }
      , qe = h=>{
        const {type: v, el: w, anchor: R, transition: V} = h;
        if (v === mt) {
            Qe(w, R);
            return
        }
        if (v === qi) {
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
      , Qe = (h,v)=>{
        let w;
        for (; h !== v; )
            w = d(h),
            i(h),
            h = w;
        i(v)
    }
      , ct = (h,v,w)=>{
        const {bum: R, scope: V, update: q, subTree: X, um: z} = h;
        R && ui(R),
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
      , tt = (h,v,w,R=!1,V=!1,q=0)=>{
        for (let X = q; X < h.length; X++)
            _e(h[X], v, w, R, V)
    }
      , H = h=>h.shapeFlag & 6 ? H(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let te = !1;
    const Q = (h,v,w)=>{
        h == null ? v._vnode && _e(v._vnode, null, null, !0) : b(v._vnode || null, h, v, null, null, null, w),
        te || (te = !0,
        $u(),
        As(),
        te = !1),
        v._vnode = h
    }
      , $ = {
        p: b,
        um: _e,
        m: ce,
        r: qe,
        mt: W,
        mc: O,
        pc: B,
        pbc: D,
        n: H,
        o: e
    };
    let ve, Fe;
    return t && ([ve,Fe] = t($)),
    {
        render: Q,
        hydrate: ve,
        createApp: t_(Q, ve)
    }
}
function Da({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Lr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function qp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function $c(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (de(r) && de(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let a = i[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = lr(i[o]),
            a.el = s.el),
            n || $c(s, a)),
            a.type === Gr && (a.el = s.el)
        }
}
function d_(e) {
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
function Wp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Wp(t)
}
const h_ = e=>e.__isTeleport
  , Yi = e=>e && (e.disabled || e.disabled === "")
  , df = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , hf = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , wl = (e,t)=>{
    const n = e && e.to;
    return ot(n) ? t ? t(n) : null : n
}
  , p_ = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, c) {
        const {mc: u, pc: f, pbc: d, o: {insert: m, querySelector: _, createText: b, createComment: A}} = c
          , g = Yi(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const T = t.el = b("")
              , k = t.anchor = b("");
            m(T, n, r),
            m(k, n, r);
            const L = t.target = wl(t.props, _)
              , O = t.targetAnchor = b("");
            L && (m(O, L),
            s === "svg" || df(L) ? s = "svg" : (s === "mathml" || hf(L)) && (s = "mathml"));
            const C = (D,x)=>{
                E & 16 && u(p, D, x, i, o, s, a, l)
            }
            ;
            g ? C(n, k) : L && C(L, O)
        } else {
            t.el = e.el;
            const T = t.anchor = e.anchor
              , k = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , O = Yi(e.props)
              , C = O ? n : k
              , D = O ? T : L;
            if (s === "svg" || df(k) ? s = "svg" : (s === "mathml" || hf(k)) && (s = "mathml"),
            y ? (d(e.dynamicChildren, y, C, i, o, s, a),
            $c(e, t, !0)) : l || f(e, t, C, D, i, o, s, a, !1),
            g)
                O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ns(t, n, T, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const x = t.target = wl(t.props, _);
                x && ns(t, x, null, c, 0)
            } else
                O && ns(t, k, L, c, 1)
        }
        Gp(t)
    },
    remove(e, t, n, r, {um: i, o: {remove: o}}, s) {
        const {shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: f, props: d} = e;
        if (f && o(u),
        s && o(c),
        a & 16) {
            const m = s || !Yi(d);
            for (let _ = 0; _ < l.length; _++) {
                const b = l[_];
                i(b, t, n, m, !!b.dynamicChildren)
            }
        }
    },
    move: ns,
    hydrate: m_
};
function ns(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: c, props: u} = e
      , f = o === 2;
    if (f && r(s, t, n),
    (!f || Yi(u)) && l & 16)
        for (let d = 0; d < c.length; d++)
            i(c[d], t, n, 2);
    f && r(a, t, n)
}
function m_(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: a, querySelector: l}}, c) {
    const u = t.target = wl(t.props, l);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (Yi(t.props))
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
        Gp(t)
    }
    return t.anchor && s(t.anchor)
}
const g_ = p_;
function Gp(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const mt = Symbol.for("v-fgt")
  , Gr = Symbol.for("v-txt")
  , Pt = Symbol.for("v-cmt")
  , qi = Symbol.for("v-stc")
  , Wi = [];
let rn = null;
function me(e=!1) {
    Wi.push(rn = e ? null : [])
}
function Jp() {
    Wi.pop(),
    rn = Wi[Wi.length - 1] || null
}
let yi = 1;
function pf(e) {
    yi += e
}
function zp(e) {
    return e.dynamicChildren = yi > 0 ? rn || ai : null,
    Jp(),
    yi > 0 && rn && rn.push(e),
    e
}
function Ge(e, t, n, r, i, o) {
    return zp(ge(e, t, n, r, i, o, !0))
}
function _t(e, t, n, r, i) {
    return zp(et(e, t, n, r, i, !0))
}
function vi(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function dn(e, t) {
    return e.type === t.type && e.key === t.key
}
const ra = "__vInternal"
  , Qp = ({key: e})=>e ?? null
  , ds = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? ot(e) || lt(e) || ye(e) ? {
    i: pt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function ge(e, t=null, n=null, r=0, i=null, o=e === mt ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Qp(t),
        ref: t && ds(t),
        scopeId: $s,
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
        ctx: pt
    };
    return a ? (eu(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ot(n) ? 8 : 16),
    yi > 0 && !s && rn && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && rn.push(l),
    l
}
const et = y_;
function y_(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === kp) && (e = Pt),
    vi(e)) {
        const a = Wn(e, t, !0);
        return n && eu(a, n),
        yi > 0 && !o && rn && (a.shapeFlag & 6 ? rn[rn.indexOf(e)] = a : rn.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (S_(e) && (e = e.__vccOpts),
    t) {
        t = Gt(t);
        let {class: a, style: l} = t;
        a && !ot(a) && (t.class = It(a)),
        nt(l) && (pp(l) && !de(l) && (l = yt({}, l)),
        t.style = Rn(l))
    }
    const s = ot(e) ? 1 : wp(e) ? 128 : h_(e) ? 64 : nt(e) ? 4 : ye(e) ? 2 : 0;
    return ge(e, t, n, r, i, s, o, !0)
}
function Gt(e) {
    return e ? pp(e) || ra in e ? yt({}, e) : e : null
}
function Wn(e, t, n=!1) {
    const {props: r, ref: i, patchFlag: o, children: s} = e
      , a = t ? _i(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Qp(a),
        ref: t && t.ref ? n && i ? de(i) ? i.concat(ds(t)) : [i, ds(t)] : ds(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== mt ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Wn(e.ssContent),
        ssFallback: e.ssFallback && Wn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Xp(e=" ", t=0) {
    return et(Gr, null, e, t)
}
function PM(e, t) {
    const n = et(qi, null, e);
    return n.staticCount = t,
    n
}
function qt(e="", t=!1) {
    return t ? (me(),
    _t(Pt, null, e)) : et(Pt, null, e)
}
function $t(e) {
    return e == null || typeof e == "boolean" ? et(Pt) : de(e) ? et(mt, null, e.slice()) : typeof e == "object" ? lr(e) : et(Gr, null, String(e))
}
function lr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wn(e)
}
function eu(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (de(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1),
            eu(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(ra in t) ? t._ctx = pt : i === 3 && pt && (pt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ye(t) ? (t = {
            default: t,
            _ctx: pt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Xp(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function _i(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = It([t.class, r.class]));
            else if (i === "style")
                t.style = Rn([t.style, r.style]);
            else if (Oo(i)) {
                const o = t[i]
                  , s = r[i];
                s && o !== s && !(de(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function Ut(e, t, n, r=null) {
    sn(e, t, 7, [n, r])
}
const v_ = Bp();
let __ = 0;
function b_(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || v_
      , o = {
        uid: __++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new np(!0),
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
        propsOptions: xp(r, i),
        emitsOptions: Sp(r, i),
        emit: null,
        emitted: null,
        propsDefaults: rt,
        inheritAttrs: r.inheritAttrs,
        ctx: rt,
        data: rt,
        props: rt,
        attrs: rt,
        slots: rt,
        refs: rt,
        setupState: rt,
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
    o.emit = p0.bind(null, o),
    e.ce && e.ce(o),
    o
}
let bt = null;
const bn = ()=>bt || pt;
let Os, Ll;
{
    const e = $h()
      , t = (n,r)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o=>{
            i.length > 1 ? i.forEach(s=>s(o)) : i[0](o)
        }
    }
    ;
    Os = t("__VUE_INSTANCE_SETTERS__", n=>bt = n),
    Ll = t("__VUE_SSR_SETTERS__", n=>ia = n)
}
const Jr = e=>{
    const t = bt;
    return Os(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Os(t)
    }
}
  , Ol = ()=>{
    bt && bt.scope.off(),
    Os(null)
}
;
function Zp(e) {
    return e.vnode.shapeFlag & 4
}
let ia = !1;
function E_(e, t=!1) {
    t && Ll(t);
    const {props: n, children: r} = e.vnode
      , i = Zp(e);
    n_(e, n, i, t),
    o_(e, r);
    const o = i ? T_(e, t) : void 0;
    return t && Ll(!1),
    o
}
function T_(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = ht(new Proxy(e.ctx,q0));
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? em(e) : null
          , o = Jr(e);
        Xr();
        const s = yr(r, e, 0, [e.props, i]);
        if (Zr(),
        o(),
        Rc(s)) {
            if (s.then(Ol, Ol),
            t)
                return s.then(a=>{
                    Cl(e, a, t)
                }
                ).catch(a=>{
                    Po(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Cl(e, s, t)
    } else
        $p(e, t)
}
function Cl(e, t, n) {
    ye(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = vp(t)),
    $p(e, n)
}
let mf;
function $p(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && mf && !r.render) {
            const i = r.template || Qc(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , c = yt(yt({
                    isCustomElement: o,
                    delimiters: a
                }, s), l);
                r.render = mf(i, c)
            }
        }
        e.render = r.render || nn
    }
    {
        const i = Jr(e);
        Xr();
        try {
            z0(e)
        } finally {
            Zr(),
            i()
        }
    }
}
function A_(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return xt(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function em(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return A_(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function oa(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(vp(ht(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Ki)
                    return Ki[n](e)
            },
            has(t, n) {
                return n in t || n in Ki
            }
        }))
}
function Rl(e, t=!0) {
    return ye(e) ? e.displayName || e.name : e.name || t && e.__name
}
function S_(e) {
    return ye(e) && "__vccOpts"in e
}
const ue = (e,t)=>i0(e, t, ia);
function ft(e, t, n) {
    const r = arguments.length;
    return r === 2 ? nt(t) && !de(t) ? vi(t) ? et(e, null, [t]) : et(e, t) : et(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && vi(n) && (n = [n]),
    et(e, t, n))
}
const tm = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const k_ = "http://www.w3.org/2000/svg"
  , w_ = "http://www.w3.org/1998/Math/MathML"
  , cr = typeof document < "u" ? document : null
  , gf = cr && cr.createElement("template")
  , L_ = {
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
        const i = t === "svg" ? cr.createElementNS(k_, e) : t === "mathml" ? cr.createElementNS(w_, e) : cr.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e=>cr.createTextNode(e),
    createComment: e=>cr.createComment(e),
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
    querySelector: e=>cr.querySelector(e),
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
            gf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = gf.content;
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
  , Zn = "transition"
  , Ni = "animation"
  , ho = Symbol("_vtc")
  , Mo = (e,{slots: t})=>ft(N0, O_(e), t);
Mo.displayName = "Transition";
const nm = {
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
Mo.props = yt({}, Cp, nm);
const Or = (e,t=[])=>{
    de(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , yf = e=>e ? de(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function O_(e) {
    const t = {};
    for (const U in e)
        U in nm || (t[U] = e[U]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: c=s, appearToClass: u=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , _ = C_(i)
      , b = _ && _[0]
      , A = _ && _[1]
      , {onBeforeEnter: g, onEnter: E, onEnterCancelled: p, onLeave: y, onLeaveCancelled: T, onBeforeAppear: k=g, onAppear: L=E, onAppearCancelled: O=p} = t
      , C = (U,Z,W)=>{
        Cr(U, Z ? u : a),
        Cr(U, Z ? c : s),
        W && W()
    }
      , D = (U,Z)=>{
        U._isLeaving = !1,
        Cr(U, f),
        Cr(U, m),
        Cr(U, d),
        Z && Z()
    }
      , x = U=>(Z,W)=>{
        const K = U ? L : E
          , N = ()=>C(Z, U, W);
        Or(K, [Z, N]),
        vf(()=>{
            Cr(Z, U ? l : o),
            $n(Z, U ? u : a),
            yf(K) || _f(Z, r, b, N)
        }
        )
    }
    ;
    return yt(t, {
        onBeforeEnter(U) {
            Or(g, [U]),
            $n(U, o),
            $n(U, s)
        },
        onBeforeAppear(U) {
            Or(k, [U]),
            $n(U, l),
            $n(U, c)
        },
        onEnter: x(!1),
        onAppear: x(!0),
        onLeave(U, Z) {
            U._isLeaving = !0;
            const W = ()=>D(U, Z);
            $n(U, f),
            P_(),
            $n(U, d),
            vf(()=>{
                U._isLeaving && (Cr(U, f),
                $n(U, m),
                yf(y) || _f(U, r, A, W))
            }
            ),
            Or(y, [U, W])
        },
        onEnterCancelled(U) {
            C(U, !1),
            Or(p, [U])
        },
        onAppearCancelled(U) {
            C(U, !0),
            Or(O, [U])
        },
        onLeaveCancelled(U) {
            D(U),
            Or(T, [U])
        }
    })
}
function C_(e) {
    if (e == null)
        return null;
    if (nt(e))
        return [Na(e.enter), Na(e.leave)];
    {
        const t = Na(e);
        return [t, t]
    }
}
function Na(e) {
    return Zh(e)
}
function $n(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[ho] || (e[ho] = new Set)).add(t)
}
function Cr(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[ho];
    n && (n.delete(t),
    n.size || (e[ho] = void 0))
}
function vf(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let R_ = 0;
function _f(e, t, n, r) {
    const i = e._endId = ++R_
      , o = ()=>{
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: a, propCount: l} = I_(e, t);
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
function I_(e, t) {
    const n = window.getComputedStyle(e)
      , r = _=>(n[_] || "").split(", ")
      , i = r(`${Zn}Delay`)
      , o = r(`${Zn}Duration`)
      , s = bf(i, o)
      , a = r(`${Ni}Delay`)
      , l = r(`${Ni}Duration`)
      , c = bf(a, l);
    let u = null
      , f = 0
      , d = 0;
    t === Zn ? s > 0 && (u = Zn,
    f = s,
    d = o.length) : t === Ni ? c > 0 && (u = Ni,
    f = c,
    d = l.length) : (f = Math.max(s, c),
    u = f > 0 ? s > c ? Zn : Ni : null,
    d = u ? u === Zn ? o.length : l.length : 0);
    const m = u === Zn && /\b(transform|all)(,|$)/.test(r(`${Zn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function bf(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>Ef(n) + Ef(e[r])))
}
function Ef(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function P_() {
    return document.body.offsetHeight
}
function M_(e, t, n) {
    const r = e[ho];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Cs = Symbol("_vod")
  , rm = Symbol("_vsh")
  , MM = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Cs] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Vi(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Vi(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Vi(e, !1)
        }
        ) : Vi(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Vi(e, t)
    }
};
function Vi(e, t) {
    e.style.display = t ? e[Cs] : "none",
    e[rm] = !t
}
const D_ = Symbol("")
  , N_ = /(^|;)\s*display\s*:/;
function V_(e, t, n) {
    const r = e.style
      , i = ot(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (ot(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && hs(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && hs(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            hs(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[D_];
            s && (n += ";" + s),
            r.cssText = n,
            o = N_.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Cs in e && (e[Cs] = o ? r.display : "",
    e[rm] && (r.display = "none"))
}
const Tf = /\s*!important$/;
function hs(e, t, n) {
    if (de(n))
        n.forEach(r=>hs(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = U_(e, t);
        Tf.test(n) ? e.setProperty(Qr(r), n.replace(Tf, ""), "important") : e[r] = n
    }
}
const Af = ["Webkit", "Moz", "ms"]
  , Va = {};
function U_(e, t) {
    const n = Va[t];
    if (n)
        return n;
    let r = Nn(t);
    if (r !== "filter" && r in e)
        return Va[t] = r;
    r = zs(r);
    for (let i = 0; i < Af.length; i++) {
        const o = Af[i] + r;
        if (o in e)
            return Va[t] = o
    }
    return t
}
const Sf = "http://www.w3.org/1999/xlink";
function B_(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Sf, t.slice(6, t.length)) : e.setAttributeNS(Sf, t, n);
    else {
        const o = Vv(t);
        n == null || o && !ep(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function F_(e, t, n, r, i, o, s) {
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
        c === "boolean" ? n = ep(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function ni(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function x_(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const kf = Symbol("_vei");
function H_(e, t, n, r, i=null) {
    const o = e[kf] || (e[kf] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = j_(t);
        if (r) {
            const c = o[t] = q_(r, i);
            ni(e, a, c, l)
        } else
            s && (x_(e, a, s, l),
            o[t] = void 0)
    }
}
const wf = /(?:Once|Passive|Capture)$/;
function j_(e) {
    let t;
    if (wf.test(e)) {
        t = {};
        let r;
        for (; r = e.match(wf); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Qr(e.slice(2)), t]
}
let Ua = 0;
const K_ = Promise.resolve()
  , Y_ = ()=>Ua || (K_.then(()=>Ua = 0),
Ua = Date.now());
function q_(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        sn(W_(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Y_(),
    n
}
function W_(e, t) {
    if (de(t)) {
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
const Lf = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , G_ = (e,t,n,r,i,o,s,a,l)=>{
    const c = i === "svg";
    t === "class" ? M_(e, r, c) : t === "style" ? V_(e, n, r) : Oo(t) ? Oc(t) || H_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : J_(e, t, r, c)) ? F_(e, t, r, o, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    B_(e, t, r, c))
}
;
function J_(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Lf(t) && ye(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Lf(t) && ot(n) ? !1 : t in e
}
const Of = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return de(t) ? n=>ui(t, n) : t
}
;
function z_(e) {
    e.target.composing = !0
}
function Cf(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Ba = Symbol("_assign")
  , DM = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[Ba] = Of(i);
        const o = r || i.props && i.props.type === "number";
        ni(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = dl(a)),
            e[Ba](a)
        }
        ),
        n && ni(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (ni(e, "compositionstart", z_),
        ni(e, "compositionend", Cf),
        ni(e, "change", Cf))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: i}}, o) {
        if (e[Ba] = Of(o),
        e.composing)
            return;
        const s = i || e.type === "number" ? dl(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , Q_ = ["ctrl", "shift", "alt", "meta"]
  , X_ = {
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
    exact: (e,t)=>Q_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , NM = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i,...o)=>{
        for (let s = 0; s < t.length; s++) {
            const a = X_[t[s]];
            if (a && a(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , Z_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , $_ = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i=>{
        if (!("key"in i))
            return;
        const o = Qr(i.key);
        if (t.some(s=>s === o || Z_[s] === o))
            return e(i)
    }
    )
}
  , im = yt({
    patchProp: G_
}, L_);
let Gi, Rf = !1;
function eb() {
    return Gi || (Gi = u_(im))
}
function tb() {
    return Gi = Rf ? Gi : f_(im),
    Rf = !0,
    Gi
}
const om = (...e)=>{
    const t = eb().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = am(r);
        if (!i)
            return;
        const o = t._component;
        !ye(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, sm(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , nb = (...e)=>{
    const t = tb().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = am(r);
        if (i)
            return n(i, !0, sm(i))
    }
    ,
    t
}
;
function sm(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function am(e) {
    return ot(e) ? document.querySelector(e) : e
}
const rb = /#/g
  , ib = /&/g
  , ob = /\//g
  , sb = /=/g
  , tu = /\+/g
  , ab = /%5e/gi
  , lb = /%60/gi
  , cb = /%7c/gi
  , ub = /%20/gi;
function fb(e) {
    return encodeURI("" + e).replace(cb, "|")
}
function Il(e) {
    return fb(typeof e == "string" ? e : JSON.stringify(e)).replace(tu, "%2B").replace(ub, "+").replace(rb, "%23").replace(ib, "%26").replace(lb, "`").replace(ab, "^").replace(ob, "%2F")
}
function Fa(e) {
    return Il(e).replace(sb, "%3D")
}
function Rs(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function db(e) {
    return Rs(e.replace(tu, " "))
}
function hb(e) {
    return Rs(e.replace(tu, " "))
}
function nu(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = db(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = hb(r[2] || "");
        t[i] === void 0 ? t[i] = o : Array.isArray(t[i]) ? t[i].push(o) : t[i] = [t[i], o]
    }
    return t
}
function pb(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Fa(e)}=${Il(n)}`).join("&") : `${Fa(e)}=${Il(t)}` : Fa(e)
}
function mb(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>pb(t, e[t])).filter(Boolean).join("&")
}
const gb = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , yb = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , vb = /^([/\\]\s*){2,}[^/\\]/
  , _b = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , bb = /\/$|\/\?|\/#/
  , Eb = /^\.?\//;
function Un(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? gb.test(e) : yb.test(e) || (t.acceptRelative ? vb.test(e) : !1)
}
function Tb(e) {
    return !!e && _b.test(e)
}
function Pl(e="", t) {
    return t ? bb.test(e) : e.endsWith("/")
}
function Do(e="", t) {
    if (!t)
        return (Pl(e) ? e.slice(0, -1) : e) || "/";
    if (!Pl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const i = e.indexOf("#");
    i >= 0 && (n = e.slice(0, i),
    r = e.slice(i));
    const [o,...s] = n.split("?");
    return (o.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function po(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (Pl(e, !0))
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
function Ab(e="") {
    return e.startsWith("/")
}
function If(e="") {
    return Ab(e) ? e : "/" + e
}
function Sb(e, t) {
    if (cm(t) || Un(e))
        return e;
    const n = Do(t);
    return e.startsWith(n) ? e : Ii(n, e)
}
function Pf(e, t) {
    if (cm(t))
        return e;
    const n = Do(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function lm(e, t) {
    const n = No(e)
      , r = {
        ...nu(n.search),
        ...t
    };
    return n.search = mb(r),
    wb(n)
}
function cm(e) {
    return !e || e === "/"
}
function kb(e) {
    return e && e !== "/"
}
function Ii(e, ...t) {
    let n = e || "";
    for (const r of t.filter(i=>kb(i)))
        if (n) {
            const i = r.replace(Eb, "");
            n = po(n) + i
        } else
            n = r;
    return n
}
function Ml(e, t, n={}) {
    return n.trailingSlash || (e = po(e),
    t = po(t)),
    n.leadingSlash || (e = If(e),
    t = If(t)),
    n.encoding || (e = Rs(e),
    t = Rs(t)),
    e === t
}
const um = Symbol.for("ufo:protocolRelative");
function No(e="", t) {
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
    if (!Un(e, {
        acceptRelative: !0
    }))
        return t ? No(t + e) : Dl(e);
    const [,r="",i,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: c, hash: u} = Dl(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: s,
        pathname: l,
        search: c,
        hash: u,
        [um]: !r
    }
}
function Dl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function wb(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , i = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[um] ? (e.protocol || "") + "//" : "") + i + o + t + n + r
}
const Lb = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Is = Lb().app
  , Ob = ()=>Is.baseURL
  , Cb = ()=>Is.buildAssetsDir
  , ru = (...e)=>Ii(fm(), Cb(), ...e)
  , fm = (...e)=>{
    const t = Is.cdnURL || Is.baseURL;
    return e.length ? Ii(t, ...e) : t
}
;
globalThis.__buildAssetsURL = ru,
globalThis.__publicAssetsURL = fm;
const Rb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Ib = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Pb = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Mb(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        Db(e);
        return
    }
    return t
}
function Db(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function mo(e, t={}) {
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
    if (!Pb.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Rb.test(e) || Ib.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Mb)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class Nb extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function Vb(e) {
    var l, c, u, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((c = e.error) == null ? void 0 : c.toString()) || ""
      , n = ((u = e.request) == null ? void 0 : u.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${i}: ${o}${t ? ` ${t}` : ""}`
      , a = new Nb(s,e.error ? {
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
const Ub = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Mf(e="GET") {
    return Ub.has(e.toUpperCase())
}
function Bb(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Fb = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , xb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Hb(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return xb.test(t) ? "json" : Fb.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function jb(e, t, n=globalThis.Headers) {
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
const Kb = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Yb = new Set([101, 204, 205, 304]);
function dm(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let u;
            typeof a.options.retry == "number" ? u = a.options.retry : u = Mf(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Kb.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                o(a.request, {
                    ...a.options,
                    retry: u - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const c = Vb(a);
        throw Error.captureStackTrace && Error.captureStackTrace(c, o),
        c
    }
    const o = async function(l, c={}) {
        var d;
        const u = {
            request: l,
            options: jb(c, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (u.options.method = (d = u.options.method) == null ? void 0 : d.toUpperCase(),
        u.options.onRequest && await u.options.onRequest(u),
        typeof u.request == "string" && (u.options.baseURL && (u.request = Sb(u.request, u.options.baseURL)),
        (u.options.query || u.options.params) && (u.request = lm(u.request, {
            ...u.options.params,
            ...u.options.query
        }))),
        u.options.body && Mf(u.options.method) && (Bb(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
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
        if (u.response.body && !Yb.has(u.response.status) && u.options.method !== "HEAD") {
            const m = (u.options.parseResponse ? "json" : u.options.responseType) || Hb(u.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const _ = await u.response.text()
                      , b = u.options.parseResponse || mo;
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
    s.create = (a={})=>dm({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const iu = function() {
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
  , qb = iu.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Wb = iu.Headers
  , Gb = iu.AbortController
  , Jb = dm({
    fetch: qb,
    Headers: Wb,
    AbortController: Gb
})
  , zb = Jb;
globalThis.$fetch || (globalThis.$fetch = zb.create({
    baseURL: Ob()
}));
function Nl(e, t={}, n) {
    for (const r in e) {
        const i = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? Nl(i, t, o) : typeof i == "function" && (t[o] = i)
    }
    return t
}
const Qb = {
    run: e=>e()
}
  , Xb = ()=>Qb
  , hm = typeof console.createTask < "u" ? console.createTask : Xb;
function Zb(e, t) {
    const n = t.shift()
      , r = hm(n);
    return e.reduce((i,o)=>i.then(()=>r.run(()=>o(...t))), Promise.resolve())
}
function $b(e, t) {
    const n = t.shift()
      , r = hm(n);
    return Promise.all(e.map(i=>r.run(()=>i(...t))))
}
function xa(e, t) {
    for (const n of [...e])
        n(t)
}
class eE {
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
        const n = Nl(t)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(t) {
        const n = Nl(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Zb, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith($b, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && xa(this._before, i);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(()=>{
            this._after && i && xa(this._after, i)
        }
        ) : (this._after && i && xa(this._after, i),
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
function pm() {
    return new eE
}
function tE(e={}) {
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
            Vl.add(c);
            try {
                const u = i ? i.run(s, a) : a();
                return n || (t = void 0),
                await u
            } finally {
                Vl.delete(c)
            }
        }
    }
}
function nE(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = tE({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Df = "__unctx__"
  , rE = Ps[Df] || (Ps[Df] = nE())
  , iE = (e,t={})=>rE.get(e, t)
  , Nf = "__unctx_async_handlers__"
  , Vl = Ps[Nf] || (Ps[Nf] = new Set);
function On(e) {
    const t = [];
    for (const i of Vl) {
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
const mm = iE("nuxt-app", {
    asyncContext: !1
})
  , oE = "__nuxt_plugin";
function sE(e) {
    let t = 0;
    const n = {
        _scope: Ro(),
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
        payload: At({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: i=>n._scope.run(()=>cE(n, i)),
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
    n.hooks = pm(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (i,o)=>{
        const s = "$" + i;
        rs(n, s, o),
        rs(n.vueApp.config.globalProperties, s, o)
    }
    ,
    rs(n.vueApp, "$nuxt", n),
    rs(n.vueApp.config.globalProperties, "$nuxt", n);
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
    const r = At(n.payload.config);
    return n.provide("config", r),
    n
}
async function aE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function lE(e, t) {
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
            const f = aE(e, l).then(async()=>{
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
function Dt(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || (()=>{}
    ), e, {
        [oE]: !0,
        _name: t
    })
}
function cE(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return mm.set(e),
    e.vueApp.runWithContext(r)
}
function uE() {
    var t;
    let e;
    return Xc() && (e = (t = bn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || mm.tryUse(),
    e || null
}
function re() {
    const e = uE();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function Jn(e) {
    return re().$config
}
function rs(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const is = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function fE(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , i = (t || {}).decode || pE;
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
            n[l] = hE(c, i)
        }
        o = a + 1
    }
    return n
}
function Vf(e, t, n) {
    const r = n || {}
      , i = r.encode || mE;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!is.test(e))
        throw new TypeError("argument name is invalid");
    const o = i(t);
    if (o && !is.test(o))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!is.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!is.test(r.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!dE(r.expires) || Number.isNaN(r.expires.valueOf()))
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
function dE(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function hE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function pE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function mE(e) {
    return encodeURIComponent(e)
}
const Uf = Object.freeze({
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
function Bf(e, t) {
    t ? t = {
        ...Uf,
        ...t
    } : t = Uf;
    const n = gm(t);
    return n.dispatch(e),
    n.toString()
}
const gE = Object.freeze(["prototype", "__proto__", "constructor"]);
function gm(e) {
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
                e.respectType !== !1 && !Ff(i) && (u = gE),
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
                const c = gm(e);
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
            Ff(i) ? this.dispatch("[native]") : this.dispatch(i.toString()),
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
const ym = "[native code] }"
  , yE = ym.length;
function Ff(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-yE) === ym
}
function vE(e, t, n={}) {
    return e === t || Bf(e, n) === Bf(t, n)
}
function _E(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>_m(t, e)
    }
}
function vm(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,i])=>[r, vm(i)])) : new Map(Object.entries(e[n]));
    return t
}
function bE(e) {
    return _E(vm(e))
}
function _m(e, t) {
    const n = [];
    for (const [i,o] of xf(t.wildcard))
        e.startsWith(i) && n.push(o);
    for (const [i,o] of xf(t.dynamic))
        if (e.startsWith(i + "/")) {
            const s = "/" + e.slice(i.length).split("/").splice(2).join("/");
            n.push(..._m(s, o))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function xf(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function Ha(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Ul(e, t, n=".", r) {
    if (!Ha(t))
        return Ul(e, {}, n, r);
    const i = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = e[o];
        s != null && (r && r(i, o, s, n) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : Ha(s) && Ha(i[o]) ? i[o] = Ul(s, i[o], (n ? `${n}.` : "") + o.toString(), r) : i[o] = s))
    }
    return i
}
function bm(e) {
    return (...t)=>t.reduce((n,r)=>Ul(n, r, "", e), {})
}
const ou = bm()
  , EE = bm((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function TE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var AE = Object.defineProperty
  , SE = (e,t,n)=>t in e ? AE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Dr = (e,t,n)=>(SE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Bl extends Error {
    constructor(t, n={}) {
        super(t, n),
        Dr(this, "statusCode", 500),
        Dr(this, "fatal", !1),
        Dr(this, "unhandled", !1),
        Dr(this, "statusMessage"),
        Dr(this, "data"),
        Dr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: xl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Em(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Dr(Bl, "__h3_error__", !0);
function Fl(e) {
    if (typeof e == "string")
        return new Bl(e);
    if (kE(e))
        return e;
    const t = new Bl(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (TE(e, "stack"))
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
    e.statusCode ? t.statusCode = xl(e.statusCode, t.statusCode) : e.status && (t.statusCode = xl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        Em(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function kE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const wE = /[^\u0009\u0020-\u007E]/g;
function Em(e="") {
    return e.replace(wE, "")
}
function xl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const Tm = Symbol("layout-meta")
  , Vo = Symbol("route")
  , Jt = ()=>{
    var e;
    return (e = re()) == null ? void 0 : e.$router
}
  , sa = ()=>Xc() ? Tt(Vo, re()._route) : re()._route;
const LE = (e,t,n={})=>{
    const r = re()
      , i = n.global || typeof e != "string"
      , o = typeof e != "string" ? e : t;
    if (!o) {
        console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
        return
    }
    i ? r._middleware.global.push(o) : r._middleware.named[e] = o
}
  , OE = ()=>{
    try {
        if (re()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , Uo = (e,t)=>{
    e || (e = "/");
    const n = typeof e == "string" ? e : lm(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = t.open
              , c = Object.entries(l).filter(([u,f])=>f !== void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");
            open(n, a, c)
        }
        return Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || Un(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = No(n).protocol;
        if (a && Tb(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = OE();
    if (!r && i)
        return e;
    const o = Jt()
      , s = re();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    i ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Am = "__nuxt_error"
  , aa = ()=>oi(re().payload, "error")
  , si = e=>{
    const t = la(e);
    try {
        const n = re()
          , r = aa();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , CE = async(e={})=>{
    const t = re()
      , n = aa();
    t.callHook("app:error:cleared", e),
    e.redirect && await Jt().replace(e.redirect),
    n.value = null
}
  , RE = e=>!!e && typeof e == "object" && Am in e
  , la = e=>{
    const t = Fl(e);
    return Object.defineProperty(t, Am, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , IE = "modulepreload"
  , PE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , Hf = {}
  , ME = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        i = Promise.all(n.map(s=>{
            if (s = PE(s, r),
            s in Hf)
                return;
            Hf[s] = !0;
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
            if (u.rel = a ? "stylesheet" : IE,
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
  , S = (...e)=>ME(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , DE = -1
  , NE = -2
  , VE = -3
  , UE = -4
  , BE = -5
  , FE = -6;
function xE(e, t) {
    return HE(JSON.parse(e), t)
}
function HE(e, t) {
    if (typeof e == "number")
        return i(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function i(o, s=!1) {
        if (o === DE)
            return;
        if (o === VE)
            return NaN;
        if (o === UE)
            return 1 / 0;
        if (o === BE)
            return -1 / 0;
        if (o === FE)
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
                    u !== NE && (l[c] = i(u))
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
function jE(e) {
    return Array.isArray(e) ? e : [e]
}
const KE = ["title", "titleTemplate", "script", "style", "noscript"]
  , ps = ["base", "meta", "link", "style", "script", "noscript"]
  , YE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , qE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Sm = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , WE = typeof window < "u";
function su(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function jf(e) {
    return e._h || su(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function km(e, t) {
    const {props: n, tag: r} = e;
    if (qE.includes(r))
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
function Kf(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function wm(e, t) {
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
            return typeof c == "object" ? wm(c, t) : Array.isArray(c) ? c : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: c
            }
        }
        ).flat());
    return n
}
function Lm(e, t) {
    return Object.entries(e).map(([n,r])=>{
        if (typeof r == "object" && (r = Lm(r, t)),
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
const Lt = e=>({
    keyValue: e,
    metaKey: "property"
})
  , ja = e=>({
    keyValue: e
})
  , au = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${Kn(e)}=${t}`
            }
        }
    },
    articleExpirationTime: Lt("article:expiration_time"),
    articleModifiedTime: Lt("article:modified_time"),
    articlePublishedTime: Lt("article:published_time"),
    bookReleaseDate: Lt("book:release_date"),
    charset: {
        metaKey: "charset"
    },
    contentSecurityPolicy: {
        unpack: {
            entrySeparator: "; ",
            resolve({key: e, value: t}) {
                return `${Kn(e)} ${t}`
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
    fbAppId: Lt("fb:app_id"),
    msapplicationConfig: ja("msapplication-Config"),
    msapplicationTileColor: ja("msapplication-TileColor"),
    msapplicationTileImage: ja("msapplication-TileImage"),
    ogAudioSecureUrl: Lt("og:audio:secure_url"),
    ogAudioUrl: Lt("og:audio"),
    ogImageSecureUrl: Lt("og:image:secure_url"),
    ogImageUrl: Lt("og:image"),
    ogSiteName: Lt("og:site_name"),
    ogVideoSecureUrl: Lt("og:video:secure_url"),
    ogVideoUrl: Lt("og:video"),
    profileFirstName: Lt("profile:first_name"),
    profileLastName: Lt("profile:last_name"),
    profileUsername: Lt("profile:username"),
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
                return typeof t == "boolean" ? `${Kn(e)}` : `${Kn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , Om = ["og", "book", "article", "profile"];
function Cm(e) {
    var n;
    const t = Kn(e).split(":")[0];
    return Om.includes(t) ? "property" : ((n = au[e]) == null ? void 0 : n.metaKey) || "name"
}
function GE(e) {
    var t;
    return ((t = au[e]) == null ? void 0 : t.keyValue) || Kn(e)
}
function Kn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return Om.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function Hl(e) {
    if (Array.isArray(e))
        return e.map(n=>Hl(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[Kn(n)] = Hl(r);
    return t
}
function JE(e, t) {
    const n = au[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Lm(Hl(e), {
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
const Rm = ["og:image", "og:video", "og:audio", "twitter:image"];
function Im(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function Yf(e, t) {
    const n = Im(t)
      , r = Kn(e)
      , i = Cm(r);
    if (Rm.includes(r)) {
        const o = {};
        return Object.entries(n).forEach(([s,a])=>{
            o[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Pm(o).sort((s,a)=>{
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
function Pm(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([i,o])=>{
        if (!Array.isArray(o)) {
            if (typeof o == "object" && o) {
                if (Rm.includes(Kn(i))) {
                    t.push(...Yf(i, o));
                    return
                }
                n[i] = Im(o)
            } else
                n[i] = o;
            return
        }
        o.forEach(s=>{
            t.push(...typeof s == "string" ? Pm({
                [i]: s
            }) : Yf(i, s))
        }
        )
    }
    );
    const r = wm(n, {
        key({key: i}) {
            return Cm(i)
        },
        value({key: i}) {
            return i === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: i}) {
            return GE(i)
        },
        resolveValueData({value: i, key: o}) {
            return i === null ? "_null" : typeof i == "object" ? JE(i, o) : typeof i == "number" ? i.toString() : i
        }
    });
    return [...t, ...r].map(i=>(i.content === "_null" && (i.content = null),
    i))
}
async function zE(e, t, n) {
    const r = {
        tag: e,
        props: await Mm(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Sm.forEach(i=>{
        const o = typeof r.props[i] < "u" ? r.props[i] : n[i];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || KE.includes(r.tag)) && (r[i === "children" ? "innerHTML" : i] = o),
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
function QE(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function Mm(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = QE(e[n]);
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
const XE = 10;
async function ZE(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && YE.includes(n)).forEach(([n,r])=>{
        const i = jE(r);
        t.push(...i.map(o=>zE(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << XE) + r,
    n))
}
const qf = {
    base: -10,
    title: 10
}
  , Wf = {
    critical: -80,
    high: -10,
    low: 20
};
function Ms(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in qf && (t = qf[e.tag]),
    typeof n == "string" && n in Wf ? t + Wf[n] : t)
}
const $E = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Dm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , er = "%separator";
function ms(e, t, n) {
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
    e.includes(er) && (e.endsWith(er) && (e = e.slice(0, -er.length).trim()),
    e.startsWith(er) && (e = e.slice(er.length).trim()),
    e = e.replace(new RegExp(`\\${er}\\s*\\${er}`,"g"), er),
    e = ms(e, {
        separator: n
    }, n)),
    e
}
async function eT(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Mm(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = km(t),
    t
}
async function Nm(e, t={}) {
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
        id: ps.includes(f.tag) ? jf(f) : f.tag,
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
            for (const m of [...d].filter(_=>ps.includes(_.tagName.toLowerCase())))
                o.elMap[m.getAttribute("data-hid") || jf(await eT(m))] = m
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
        Object.entries(m.props).forEach(([b,A])=>{
            const g = `attr:${b}`;
            if (b === "class")
                for (const E of (A || "").split(" ").filter(Boolean))
                    _ && s(f, `${g}:${E}`, ()=>d.classList.remove(E)),
                    !d.classList.contains(E) && d.classList.add(E);
            else
                d.getAttribute(b) !== A && d.setAttribute(b, A === !0 ? "" : String(A)),
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
            f.$el ? a(f) : ps.includes(d.tag) && l.push(f)
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
async function tT(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await Nm(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function nT(e) {
    return t=>{
        var r, i;
        const n = ((i = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    tT(o, e)
                }
            }
        }
    }
}
const rT = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , iT = {
    hooks: {
        "tag:normalise": function({tag: e}) {
            ["hid", "vmid", "key"].forEach(r=>{
                e.props[r] && (e.key = e.props[r],
                delete e.props[r])
            }
            );
            const n = km(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        },
        "tags:resolve": function(e) {
            const t = {};
            e.tags.forEach(r=>{
                const i = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , o = t[i];
                if (o) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && rT.includes(r.tag) && (a = "merge"),
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
                    } else if (Ms(r) > Ms(o))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (ps.includes(r.tag) && s === 0) {
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
  , oT = {
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
  , sT = ["script", "link", "bodyAttrs"];
function aT(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,i])=>{
        r.startsWith("on") && typeof i == "function" ? (Dm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = i) : t[r] = i
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const lT = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (sT.includes(n.tag)) {
                    const {props: r, eventHandlers: i} = aT(n);
                    n.props = r,
                    Object.keys(i).length && ((n.props.src || n.props.href) && (n.key = n.key || su(n.props.src || n.props.href)),
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
                o in t.$el.dataset ? f(new Event(o.replace("on", ""))) : Dm.includes(o) && typeof MutationObserver < "u" ? (u = new MutationObserver(d=>{
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
  , cT = ["link", "style", "script", "noscript"]
  , uT = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && cT.includes(e.tag) && (e.props["data-hid"] = e._h = su(e.key))
        }
    }
}
  , fT = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(i=>i._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of $E)
                for (const i of e.tags.filter(o=>typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(i.tagPriority.replace(n, ""));
                    typeof o < "u" && (i._p = o + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>Ms(n) - Ms(r))
        }
    }
}
  , dT = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , hT = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , i = n.findIndex(l=>l.tag === "templateParams")
              , o = i !== -1 ? n[i].props : {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = ms(o.pageTitle || r || "", o, s);
            for (const l of n.filter(c=>c.processTemplateParams !== !1)) {
                const c = dT[l.tag];
                c && typeof l.props[c] == "string" ? l.props[c] = ms(l.props[c], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(u=>{
                    typeof l[u] == "string" && (l[u] = ms(l[u], o, s))
                }
                )
            }
            e._templateParams = o,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , pT = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(i=>i.tag === "titleTemplate");
            const r = t.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = Kf(t[n].textContent, t[r].textContent);
                i !== null ? t[r].textContent = i || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const i = Kf(t[n].textContent);
                i !== null && (t[n].textContent = i,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , mT = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Vm;
function gT(e={}) {
    const t = yT(e);
    return t.use(nT()),
    Vm = t
}
function Gf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function yT(e={}) {
    const t = pm();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (WE ? document : void 0);
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
            Gf(c.mode, n) && t.addHooks(c.hooks || {}))
        },
        push(l, c) {
            c == null || delete c.head;
            const u = {
                _i: i++,
                input: l,
                ...c
            };
            return Gf(u.mode, n) && (o.push(u),
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
                    for (const f of await ZE(c)) {
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
    return [iT, oT, lT, uT, fT, hT, pT, mT, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function vT() {
    return Vm
}
const _T = tm.startsWith("3");
function bT(e) {
    return typeof e == "function" ? e() : G(e)
}
function Ds(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = bT(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Ds(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,i])=>r === "titleTemplate" || r.startsWith("on") ? [r, G(i)] : [r, Ds(i, r)])) : n
}
const ET = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Ds(t.input)
        }
    }
}
  , Um = "usehead";
function TT(e) {
    return {
        install(n) {
            _T && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Um, e))
        }
    }.install
}
function AT(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>Wt(()=>setTimeout(()=>n(), 0)));
    const t = gT(e);
    return t.use(ET),
    t.install = TT(t),
    t
}
const jl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Kl = "__unhead_injection_handler__";
function ST(e) {
    jl[Kl] = e
}
function kT() {
    if (Kl in jl)
        return jl[Kl]();
    const e = Tt(Um);
    return e || vT()
}
function wT(e, t={}) {
    const n = t.head || kT();
    if (n)
        return n.ssr ? n.push(e, t) : LT(n, e, t)
}
function LT(e, t, n={}) {
    const r = le(!1)
      , i = le({});
    I0(()=>{
        i.value = r.value ? {} : Ds(t)
    }
    );
    const o = e.push(i.value, n);
    return je(i, a=>{
        o.patch(a)
    }
    ),
    bn() && (_n(()=>{
        o.dispose()
    }
    ),
    Mp(()=>{
        r.value = !0
    }
    ),
    Pp(()=>{
        r.value = !1
    }
    )),
    o
}
function kn(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = kn(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: kn(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = kn(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = kn(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(i) {
        n.add(kn(i))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(i, o) {
        n.set(kn(o), kn(i))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(kn(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const OT = {
    nuxt: {
        buildId: "64ee4bcc-e624-450f-869f-d886c97f642f"
    }
}
  , CT = EE(OT);
function RT() {
    const e = re();
    return e._appConfig || (e._appConfig = At(CT)),
    e._appConfig
}
const IT = !1
  , Yl = !1
  , PT = !1
  , MT = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , DT = "#__nuxt";
let gs, Bm;
function NT() {
    var t;
    const e = (t = RT().nuxt) == null ? void 0 : t.buildId;
    return gs = $fetch(ru(`builds/meta/${e}.json`)),
    gs.then(n=>{
        Bm = bE(n.matcher)
    }
    ),
    gs
}
function ca() {
    return gs || NT()
}
async function Fm(e) {
    return await ca(),
    ou({}, ...Bm.matchAll(e).reverse())
}
function Jf(e, t={}) {
    const n = VT(e, t)
      , r = re()
      , i = r._payloadCache = r._payloadCache || {};
    return n in i || (i[n] = UT(e).then(o=>o ? xm(n).then(s=>s || (delete i[n],
    null)) : (i[n] = null,
    null))),
    i[n]
}
const zf = "json";
function VT(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || Un(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Ii(Jn().app.baseURL, n.pathname, r ? `_payload.${r}.${zf}` : `_payload.${zf}`)
}
async function xm(e) {
    const t = fetch(e).then(n=>n.text().then(Hm));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function UT(e=sa().path) {
    if (e = Do(e),
    (await ca()).prerendered.includes(e))
        return !0;
    const n = await Fm(e);
    return !!n.prerender && !n.redirect
}
let os = null;
async function BT() {
    if (os)
        return os;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Hm(e.textContent || "")
      , n = e.dataset.src ? await xm(e.dataset.src) : void 0;
    return os = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    os
}
async function Hm(e) {
    return await xE(e, re()._payloadRevivers)
}
function FT(e, t) {
    re()._payloadRevivers[e] = t
}
const Qf = {
    NuxtError: e=>la(e),
    EmptyShallowRef: e=>gn(e === "_" ? void 0 : e === "0n" ? BigInt(0) : mo(e)),
    EmptyRef: e=>le(e === "_" ? void 0 : e === "0n" ? BigInt(0) : mo(e)),
    ShallowRef: e=>gn(e),
    ShallowReactive: e=>Ci(e),
    Ref: e=>le(e),
    Reactive: e=>At(e)
}
  , xT = Dt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in Qf)
            FT(r, Qf[r]);
        Object.assign(e.payload, ([t,n] = On(()=>e.runWithContext(BT)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , HT = []
  , jT = Dt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = AT({
            plugins: HT
        });
        ST(()=>re().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await Nm(t)
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
const ri = typeof document < "u";
function KT(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Xe = Object.assign;
function Ka(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = yn(i) ? i.map(e) : e(i)
    }
    return n
}
const Ji = ()=>{}
  , yn = Array.isArray
  , jm = /#/g
  , YT = /&/g
  , qT = /\//g
  , WT = /=/g
  , GT = /\?/g
  , Km = /\+/g
  , JT = /%5B/g
  , zT = /%5D/g
  , Ym = /%5E/g
  , QT = /%60/g
  , qm = /%7B/g
  , XT = /%7C/g
  , Wm = /%7D/g
  , ZT = /%20/g;
function lu(e) {
    return encodeURI("" + e).replace(XT, "|").replace(JT, "[").replace(zT, "]")
}
function $T(e) {
    return lu(e).replace(qm, "{").replace(Wm, "}").replace(Ym, "^")
}
function ql(e) {
    return lu(e).replace(Km, "%2B").replace(ZT, "+").replace(jm, "%23").replace(YT, "%26").replace(QT, "`").replace(qm, "{").replace(Wm, "}").replace(Ym, "^")
}
function eA(e) {
    return ql(e).replace(WT, "%3D")
}
function tA(e) {
    return lu(e).replace(jm, "%23").replace(GT, "%3F")
}
function nA(e) {
    return e == null ? "" : tA(e).replace(qT, "%2F")
}
function go(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const rA = /\/$/
  , iA = e=>e.replace(rA, "");
function Ya(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    i = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = lA(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: go(s)
    }
}
function oA(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Xf(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function sA(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && bi(t.matched[r], n.matched[i]) && Gm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function bi(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Gm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!aA(e[n], t[n]))
            return !1;
    return !0
}
function aA(e, t) {
    return yn(e) ? Zf(e, t) : yn(t) ? Zf(t, e) : e === t
}
function Zf(e, t) {
    return yn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function lA(e, t) {
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
var yo;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(yo || (yo = {}));
var zi;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(zi || (zi = {}));
function cA(e) {
    if (!e)
        if (ri) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    iA(e)
}
const uA = /^[^#]+#/;
function fA(e, t) {
    return e.replace(uA, "#") + t
}
function dA(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ua = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function hA(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = dA(i, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function $f(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Wl = new Map;
function pA(e, t) {
    Wl.set(e, t)
}
function mA(e) {
    const t = Wl.get(e);
    return Wl.delete(e),
    t
}
let gA = ()=>location.protocol + "//" + location.host;
function Jm(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Xf(l, "")
    }
    return Xf(n, e) + r + i
}
function yA(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const a = ({state: d})=>{
        const m = Jm(e, location)
          , _ = n.value
          , b = t.value;
        let A = 0;
        if (d) {
            if (n.value = m,
            t.value = d,
            s && s === _) {
                s = null;
                return
            }
            A = b ? d.position - b.position : 0
        } else
            r(m);
        i.forEach(g=>{
            g(n.value, _, {
                delta: A,
                type: yo.pop,
                direction: A ? A > 0 ? zi.forward : zi.back : zi.unknown
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
        d.state && d.replaceState(Xe({}, d.state, {
            scroll: ua()
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
function ed(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? ua() : null
    }
}
function vA(e) {
    const {history: t, location: n} = window
      , r = {
        value: Jm(e, n)
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
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : gA() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d),
            i.value = c
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](d)
        }
    }
    function s(l, c) {
        const u = Xe({}, t.state, ed(i.value.back, l, i.value.forward, !0), c, {
            position: i.value.position
        });
        o(l, u, !0),
        r.value = l
    }
    function a(l, c) {
        const u = Xe({}, i.value, t.state, {
            forward: l,
            scroll: ua()
        });
        o(u.current, u, !0);
        const f = Xe({}, ed(r.value, l, null), {
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
function zm(e) {
    e = cA(e);
    const t = vA(e)
      , n = yA(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = Xe({
        location: "",
        base: e,
        go: r,
        createHref: fA.bind(null, e)
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
function _A(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    zm(e)
}
function bA(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Qm(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const un = {
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
  , Xm = Symbol("");
var td;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(td || (td = {}));
function Ei(e, t) {
    return Xe(new Error, {
        type: e,
        [Xm]: !0
    }, t)
}
function xn(e, t) {
    return e instanceof Error && Xm in e && (t == null || !!(e.type & t))
}
const nd = "[^/]+?"
  , EA = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , TA = /[.+*?^${}()[\]/\\]/g;
function AA(e, t) {
    const n = Xe({}, EA, t)
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
                i += d.value.replace(TA, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: _, repeatable: b, optional: A, regexp: g} = d;
                o.push({
                    name: _,
                    repeatable: b,
                    optional: A
                });
                const E = g || nd;
                if (E !== nd) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${E}): ` + y.message)
                    }
                }
                let p = b ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                f || (p = A && c.length < 2 ? `(?:/${p})` : "/" + p),
                A && (p += "?"),
                i += p,
                m += 20,
                A && (m += -8),
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
                    const {value: _, repeatable: b, optional: A} = m
                      , g = _ in c ? c[_] : "";
                    if (yn(g) && !b)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = yn(g) ? g.join("/") : g;
                    if (!E)
                        if (A)
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
function SA(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function kA(e, t) {
    let n = 0;
    const r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        const o = SA(r[n], i[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (rd(r))
            return 1;
        if (rd(i))
            return -1
    }
    return i.length - r.length
}
function rd(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const wA = {
    type: 0,
    value: ""
}
  , LA = /[a-zA-Z0-9_]/;
function OA(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[wA]];
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
            l === "(" ? n = 2 : LA.test(l) ? d() : (f(),
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
function CA(e, t, n) {
    const r = AA(OA(e.path), n)
      , i = Xe(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i),
    i
}
function RA(e, t) {
    const n = []
      , r = new Map;
    t = sd({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(u) {
        return r.get(u)
    }
    function o(u, f, d) {
        const m = !d
          , _ = IA(u);
        _.aliasOf = d && d.record;
        const b = sd(t, u)
          , A = [_];
        if ("alias"in u) {
            const p = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const y of p)
                A.push(Xe({}, _, {
                    components: d ? d.record.components : _.components,
                    path: y,
                    aliasOf: d ? d.record : _
                }))
        }
        let g, E;
        for (const p of A) {
            const {path: y} = p;
            if (f && y[0] !== "/") {
                const T = f.record.path
                  , k = T[T.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (y && k + y)
            }
            if (g = CA(p, f, b),
            d ? d.alias.push(g) : (E = E || g,
            E !== g && E.alias.push(g),
            m && u.name && !od(g) && s(u.name)),
            _.children) {
                const T = _.children;
                for (let k = 0; k < T.length; k++)
                    o(T[k], g, d && d.children[k])
            }
            d = d || g,
            (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && l(g)
        }
        return E ? ()=>{
            s(E)
        }
        : Ji
    }
    function s(u) {
        if (Qm(u)) {
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
        for (; f < n.length && kA(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !Zm(u, n[f])); )
            f++;
        n.splice(f, 0, u),
        u.record.name && !od(u) && r.set(u.record.name, u)
    }
    function c(u, f) {
        let d, m = {}, _, b;
        if ("name"in u && u.name) {
            if (d = r.get(u.name),
            !d)
                throw Ei(1, {
                    location: u
                });
            b = d.record.name,
            m = Xe(id(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), u.params && id(u.params, d.keys.map(E=>E.name))),
            _ = d.stringify(m)
        } else if (u.path != null)
            _ = u.path,
            d = n.find(E=>E.re.test(_)),
            d && (m = d.parse(_),
            b = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw Ei(1, {
                    location: u,
                    currentLocation: f
                });
            b = d.record.name,
            m = Xe({}, f.params, u.params),
            _ = d.stringify(m)
        }
        const A = [];
        let g = d;
        for (; g; )
            A.unshift(g.record),
            g = g.parent;
        return {
            name: b,
            path: _,
            params: m,
            matched: A,
            meta: MA(A)
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
function id(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function IA(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: PA(e),
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
function PA(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function od(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function MA(e) {
    return e.reduce((t,n)=>Xe(t, n.meta), {})
}
function sd(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function Zm(e, t) {
    return t.children.some(n=>n === e || Zm(e, n))
}
function DA(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(Km, " ")
          , s = o.indexOf("=")
          , a = go(s < 0 ? o : o.slice(0, s))
          , l = s < 0 ? null : go(o.slice(s + 1));
        if (a in t) {
            let c = t[a];
            yn(c) || (c = t[a] = [c]),
            c.push(l)
        } else
            t[a] = l
    }
    return t
}
function ad(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = eA(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (yn(r) ? r.map(o=>o && ql(o)) : [r && ql(r)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function NA(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = yn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const VA = Symbol("")
  , ld = Symbol("")
  , cu = Symbol("")
  , uu = Symbol("")
  , Gl = Symbol("");
function Ui() {
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
function ur(e, t, n, r, i, o=s=>s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return ()=>new Promise((a,l)=>{
        const c = d=>{
            d === !1 ? l(Ei(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : bA(d) ? l(Ei(2, {
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
function qa(e, t, n, r, i=o=>o()) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (UA(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && o.push(ur(u, n, r, s, a, i))
                } else {
                    let c = l();
                    o.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = KT(u) ? u.default : u;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && ur(m, n, r, s, a, i)()
                    }
                    ))
                }
        }
    return o
}
function UA(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function cd(e) {
    const t = Tt(cu)
      , n = Tt(uu)
      , r = ue(()=>t.resolve(G(e.to)))
      , i = ue(()=>{
        const {matched: l} = r.value
          , {length: c} = l
          , u = l[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(bi.bind(null, u));
        if (d > -1)
            return d;
        const m = ud(l[c - 2]);
        return c > 1 && ud(u) === m && f[f.length - 1].path !== m ? f.findIndex(bi.bind(null, l[c - 2])) : d
    }
    )
      , o = ue(()=>i.value > -1 && HA(n.params, r.value.params))
      , s = ue(()=>i.value > -1 && i.value === n.matched.length - 1 && Gm(n.params, r.value.params));
    function a(l={}) {
        return xA(l) ? t[G(e.replace) ? "replace" : "push"](G(e.to)).catch(Ji) : Promise.resolve()
    }
    return {
        route: r,
        href: ue(()=>r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: a
    }
}
const BA = Be({
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
    useLink: cd,
    setup(e, {slots: t}) {
        const n = At(cd(e))
          , {options: r} = Tt(cu)
          , i = ue(()=>({
            [fd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [fd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : ft("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, o)
        }
    }
})
  , FA = BA;
function xA(e) {
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
function HA(e, t) {
    for (const n in t) {
        const r = t[n]
          , i = e[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!yn(i) || i.length !== r.length || r.some((o,s)=>o !== i[s]))
            return !1
    }
    return !0
}
function ud(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const fd = (e,t,n)=>e ?? t ?? n
  , jA = Be({
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
        const r = Tt(Gl)
          , i = ue(()=>e.route || r.value)
          , o = Tt(ld, 0)
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
        Kr(ld, ue(()=>s.value + 1)),
        Kr(VA, a),
        Kr(Gl, i);
        const l = le();
        return je(()=>[l.value, a.value, e.name], ([c,u,f],[d,m,_])=>{
            u && (u.instances[f] = c,
            m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !bi(u, m) || !d) && (u.enterCallbacks[f] || []).forEach(b=>b(c))
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
                return dd(n.default, {
                    Component: d,
                    route: c
                });
            const m = f.props[u]
              , _ = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , A = ft(d, Xe({}, _, t, {
                onVnodeUnmounted: g=>{
                    g.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: l
            }));
            return dd(n.default, {
                Component: A,
                route: c
            }) || A
        }
    }
});
function dd(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const $m = jA;
function KA(e) {
    const t = RA(e.routes, e)
      , n = e.parseQuery || DA
      , r = e.stringifyQuery || ad
      , i = e.history
      , o = Ui()
      , s = Ui()
      , a = Ui()
      , l = gn(un);
    let c = un;
    ri && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = Ka.bind(null, H=>"" + H)
      , f = Ka.bind(null, nA)
      , d = Ka.bind(null, go);
    function m(H, te) {
        let Q, $;
        return Qm(H) ? (Q = t.getRecordMatcher(H),
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
    function A(H) {
        return !!t.getRecordMatcher(H)
    }
    function g(H, te) {
        if (te = Xe({}, te || l.value),
        typeof H == "string") {
            const v = Ya(n, H, te.path)
              , w = t.resolve({
                path: v.path
            }, te)
              , R = i.createHref(v.fullPath);
            return Xe(v, w, {
                params: d(w.params),
                hash: go(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let Q;
        if (H.path != null)
            Q = Xe({}, H, {
                path: Ya(n, H.path, te.path).path
            });
        else {
            const v = Xe({}, H.params);
            for (const w in v)
                v[w] == null && delete v[w];
            Q = Xe({}, H, {
                params: f(v)
            }),
            te.params = f(te.params)
        }
        const $ = t.resolve(Q, te)
          , ve = H.hash || "";
        $.params = u(d($.params));
        const Fe = oA(r, Xe({}, H, {
            hash: $T(ve),
            path: $.path
        }))
          , h = i.createHref(Fe);
        return Xe({
            fullPath: Fe,
            hash: ve,
            query: r === ad ? NA(H.query) : H.query || {}
        }, $, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(H) {
        return typeof H == "string" ? Ya(n, H, l.value.path) : Xe({}, H)
    }
    function p(H, te) {
        if (c !== H)
            return Ei(8, {
                from: te,
                to: H
            })
    }
    function y(H) {
        return L(H)
    }
    function T(H) {
        return y(Xe(E(H), {
            replace: !0
        }))
    }
    function k(H) {
        const te = H.matched[H.matched.length - 1];
        if (te && te.redirect) {
            const {redirect: Q} = te;
            let $ = typeof Q == "function" ? Q(H) : Q;
            return typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = E($) : {
                path: $
            },
            $.params = {}),
            Xe({
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
          , Fe = H.force
          , h = H.replace === !0
          , v = k(Q);
        if (v)
            return L(Xe(E(v), {
                state: typeof v == "object" ? Xe({}, ve, v.state) : ve,
                force: Fe,
                replace: h
            }), te || Q);
        const w = Q;
        w.redirectedFrom = te;
        let R;
        return !Fe && sA(r, $, Q) && (R = Ei(16, {
            to: w,
            from: $
        }),
        ce($, $, !0, !1)),
        (R ? Promise.resolve(R) : D(w, $)).catch(V=>xn(V) ? xn(V, 2) ? V : j(V) : B(V, w, $)).then(V=>{
            if (V) {
                if (xn(V, 2))
                    return L(Xe({
                        replace: h
                    }, E(V.to), {
                        state: typeof V.to == "object" ? Xe({}, ve, V.to.state) : ve,
                        force: Fe
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
        const te = Qe.values().next().value;
        return te && typeof te.runWithContext == "function" ? te.runWithContext(H) : H()
    }
    function D(H, te) {
        let Q;
        const [$,ve,Fe] = YA(H, te);
        Q = qa($.reverse(), "beforeRouteLeave", H, te);
        for (const v of $)
            v.leaveGuards.forEach(w=>{
                Q.push(ur(w, H, te))
            }
            );
        const h = O.bind(null, H, te);
        return Q.push(h),
        tt(Q).then(()=>{
            Q = [];
            for (const v of o.list())
                Q.push(ur(v, H, te));
            return Q.push(h),
            tt(Q)
        }
        ).then(()=>{
            Q = qa(ve, "beforeRouteUpdate", H, te);
            for (const v of ve)
                v.updateGuards.forEach(w=>{
                    Q.push(ur(w, H, te))
                }
                );
            return Q.push(h),
            tt(Q)
        }
        ).then(()=>{
            Q = [];
            for (const v of Fe)
                if (v.beforeEnter)
                    if (yn(v.beforeEnter))
                        for (const w of v.beforeEnter)
                            Q.push(ur(w, H, te));
                    else
                        Q.push(ur(v.beforeEnter, H, te));
            return Q.push(h),
            tt(Q)
        }
        ).then(()=>(H.matched.forEach(v=>v.enterCallbacks = {}),
        Q = qa(Fe, "beforeRouteEnter", H, te, C),
        Q.push(h),
        tt(Q))).then(()=>{
            Q = [];
            for (const v of s.list())
                Q.push(ur(v, H, te));
            return Q.push(h),
            tt(Q)
        }
        ).catch(v=>xn(v, 8) ? v : Promise.reject(v))
    }
    function x(H, te, Q) {
        a.list().forEach($=>C(()=>$(H, te, Q)))
    }
    function U(H, te, Q, $, ve) {
        const Fe = p(H, te);
        if (Fe)
            return Fe;
        const h = te === un
          , v = ri ? history.state : {};
        Q && ($ || h ? i.replace(H.fullPath, Xe({
            scroll: h && v && v.scroll
        }, ve)) : i.push(H.fullPath, ve)),
        l.value = H,
        ce(H, te, Q, h),
        j()
    }
    let Z;
    function W() {
        Z || (Z = i.listen((H,te,Q)=>{
            if (!ct.listening)
                return;
            const $ = g(H)
              , ve = k($);
            if (ve) {
                L(Xe(ve, {
                    replace: !0
                }), $).catch(Ji);
                return
            }
            c = $;
            const Fe = l.value;
            ri && pA($f(Fe.fullPath, Q.delta), ua()),
            D($, Fe).catch(h=>xn(h, 12) ? h : xn(h, 2) ? (L(h.to, $).then(v=>{
                xn(v, 20) && !Q.delta && Q.type === yo.pop && i.go(-1, !1)
            }
            ).catch(Ji),
            Promise.reject()) : (Q.delta && i.go(-Q.delta, !1),
            B(h, $, Fe))).then(h=>{
                h = h || U($, Fe, !1),
                h && (Q.delta && !xn(h, 8) ? i.go(-Q.delta, !1) : Q.type === yo.pop && xn(h, 20) && i.go(-1, !1)),
                x($, Fe, h)
            }
            ).catch(Ji)
        }
        ))
    }
    let K = Ui(), N = Ui(), Y;
    function B(H, te, Q) {
        j(H);
        const $ = N.list();
        return $.length ? $.forEach(ve=>ve(H, te, Q)) : console.error(H),
        Promise.reject(H)
    }
    function ae() {
        return Y && l.value !== un ? Promise.resolve() : new Promise((H,te)=>{
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
        if (!ri || !ve)
            return Promise.resolve();
        const Fe = !Q && mA($f(H.fullPath, 0)) || ($ || !Q) && history.state && history.state.scroll || null;
        return Wt().then(()=>ve(H, te, Fe)).then(h=>h && hA(h)).catch(h=>B(h, H, te))
    }
    const _e = H=>i.go(H);
    let qe;
    const Qe = new Set
      , ct = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: _,
        hasRoute: A,
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
            H.component("RouterLink", FA),
            H.component("RouterView", $m),
            H.config.globalProperties.$router = te,
            Object.defineProperty(H.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>G(l)
            }),
            ri && !qe && l.value === un && (qe = !0,
            y(i.location).catch(ve=>{}
            ));
            const Q = {};
            for (const ve in un)
                Object.defineProperty(Q, ve, {
                    get: ()=>l.value[ve],
                    enumerable: !0
                });
            H.provide(cu, te),
            H.provide(uu, Ci(Q)),
            H.provide(Gl, l);
            const $ = H.unmount;
            Qe.add(H),
            H.unmount = function() {
                Qe.delete(H),
                Qe.size < 1 && (c = un,
                Z && Z(),
                Z = null,
                l.value = un,
                qe = !1,
                Y = !1),
                $()
            }
        }
    };
    function tt(H) {
        return H.reduce((te,Q)=>te.then(()=>C(Q)), Promise.resolve())
    }
    return ct
}
function YA(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const a = t.matched[s];
        a && (e.matched.find(c=>bi(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(c=>bi(c, l)) || i.push(l))
    }
    return [n, r, i]
}
function qA() {
    return Tt(uu)
}
const WA = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Jl = (e,t)=>{
    const n = e.route.matched.find(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && WA(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , GA = (e,t)=>({
    default: ()=>e ? ft(U0, e === !0 ? {} : e, t) : t
});
function fu(e) {
    return Array.isArray(e) ? e : [e]
}
const Ee = null
  , Te = null
  , Ae = null
  , Se = null
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
  , Ne = null
  , P = {
    layout: "main"
}
  , M = {
    layout: "main"
}
  , hd = [{
    name: "clicker-airdrop___de",
    path: "/de/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___fr",
    path: "/fr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___de",
    path: "/de/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___fr",
    path: "/fr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js"), __vite__mapDeps([4, 5, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___de",
    path: "/de/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___fr",
    path: "/fr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js"), __vite__mapDeps([7, 6, 3, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___de",
    path: "/de/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___fr",
    path: "/fr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js"), __vite__mapDeps([9, 2, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___de",
    path: "/de/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___fr",
    path: "/fr/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js"), __vite__mapDeps([10, 6, 2, 11, 12, 13, 14, 15, 16, 17, 3, 18, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___de",
    path: "/de/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___fr",
    path: "/fr/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js"), __vite__mapDeps([19, 17, 2, 16, 6, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___de",
    path: "/de/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___fr",
    path: "/fr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js"), __vite__mapDeps([20, 15, 16, 6, 17, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___de",
    path: "/de/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___en",
    path: "/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___es",
    path: "/es/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___fr",
    path: "/fr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___hi",
    path: "/hi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___id",
    path: "/id/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___pt",
    path: "/pt/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___ru",
    path: "/ru/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___th",
    path: "/th/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tl",
    path: "/tl/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tr",
    path: "/tr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___uz",
    path: "/uz/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___vi",
    path: "/vi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js"), __vite__mapDeps([21, 22, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___de",
    path: "/de/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___fr",
    path: "/fr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js"), __vite__mapDeps([23, 2, 16, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___de",
    path: "/de/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___fr",
    path: "/fr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js"), __vite__mapDeps([24, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___de",
    path: "/de/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___fr",
    path: "/fr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js"), __vite__mapDeps([25, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___de",
    path: "/de/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___fr",
    path: "/fr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.D4QZHeo7.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___de",
    path: "/de/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___en",
    path: "/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___es",
    path: "/es/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___fr",
    path: "/fr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___hi",
    path: "/hi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___id",
    path: "/id/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___pt",
    path: "/pt/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___ru",
    path: "/ru/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___th",
    path: "/th/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tl",
    path: "/tl/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tr",
    path: "/tr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___uz",
    path: "/uz/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___vi",
    path: "/vi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js"), __vite__mapDeps([26, 22, 27, 28]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___de",
    path: "/de/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___en",
    path: "/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___es",
    path: "/es/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___fr",
    path: "/fr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___hi",
    path: "/hi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___id",
    path: "/id/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___pt",
    path: "/pt/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___ru",
    path: "/ru/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___th",
    path: "/th/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tl",
    path: "/tl/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tr",
    path: "/tr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___uz",
    path: "/uz/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___vi",
    path: "/vi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.CXT8sf6r.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___de",
    path: "/de/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___en",
    path: "/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___es",
    path: "/es/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___fr",
    path: "/fr/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___hi",
    path: "/hi/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___id",
    path: "/id/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___pt",
    path: "/pt/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___ru",
    path: "/ru/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___th",
    path: "/th/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tl",
    path: "/tl/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tr",
    path: "/tr/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___uz",
    path: "/uz/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___vi",
    path: "/vi/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js"), __vite__mapDeps([29, 22, 27, 28, 6, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___de",
    path: (P == null ? void 0 : P.path) ?? "/de",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___en",
    path: (P == null ? void 0 : P.path) ?? "/",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___es",
    path: (P == null ? void 0 : P.path) ?? "/es",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___fr",
    path: (P == null ? void 0 : P.path) ?? "/fr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___hi",
    path: (P == null ? void 0 : P.path) ?? "/hi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___id",
    path: (P == null ? void 0 : P.path) ?? "/id",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___pt",
    path: (P == null ? void 0 : P.path) ?? "/pt",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___ru",
    path: (P == null ? void 0 : P.path) ?? "/ru",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___th",
    path: (P == null ? void 0 : P.path) ?? "/th",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tl",
    path: (P == null ? void 0 : P.path) ?? "/tl",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tr",
    path: (P == null ? void 0 : P.path) ?? "/tr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___uz",
    path: (P == null ? void 0 : P.path) ?? "/uz",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___vi",
    path: (P == null ? void 0 : P.path) ?? "/vi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js"), __vite__mapDeps([30, 31, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___de",
    path: (M == null ? void 0 : M.path) ?? "/de/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___en",
    path: (M == null ? void 0 : M.path) ?? "/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___es",
    path: (M == null ? void 0 : M.path) ?? "/es/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___fr",
    path: (M == null ? void 0 : M.path) ?? "/fr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___hi",
    path: (M == null ? void 0 : M.path) ?? "/hi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___id",
    path: (M == null ? void 0 : M.path) ?? "/id/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___pt",
    path: (M == null ? void 0 : M.path) ?? "/pt/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___ru",
    path: (M == null ? void 0 : M.path) ?? "/ru/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___th",
    path: (M == null ? void 0 : M.path) ?? "/th/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tl",
    path: (M == null ? void 0 : M.path) ?? "/tl/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tr",
    path: (M == null ? void 0 : M.path) ?? "/tr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___uz",
    path: (M == null ? void 0 : M.path) ?? "/uz/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___vi",
    path: (M == null ? void 0 : M.path) ?? "/vi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js"), __vite__mapDeps([32, 31]), import.meta.url).then(e=>e.default || e)
}]
  , eg = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? ft(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function pd(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function JA(e, t) {
    return e === t || t === un ? !1 : pd(e) !== pd(t) ? !0 : !e.matched.every((r,i)=>{
        var o, s;
        return r.components && r.components.default === ((s = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    )
}
const zA = {
    scrollBehavior(e, t, n) {
        var c;
        const r = re()
          , i = ((c = Jt().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && s !== !1 && JA(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: md(e.hash),
                behavior: i
            } : !1;
        const a = u=>!!(u.meta.pageTransition ?? Yl)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: md(e.hash),
                    behavior: i
                }),
                u(o)
            }
            )
        }
        )
    }
};
function md(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const QA = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , jt = {
    ...QA,
    ...zA
}
  , XA = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = re()
      , i = Jt();
    if (([t,n] = On(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = la({
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
                await r.runWithContext(()=>si(s)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
;
var ZA = Object.defineProperty
  , $A = Object.defineProperties
  , eS = Object.getOwnPropertyDescriptors
  , gd = Object.getOwnPropertySymbols
  , tS = Object.prototype.hasOwnProperty
  , nS = Object.prototype.propertyIsEnumerable
  , yd = (e,t,n)=>t in e ? ZA(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , he = (e,t)=>{
    for (var n in t || (t = {}))
        tS.call(t, n) && yd(e, n, t[n]);
    if (gd)
        for (var n of gd(t))
            nS.call(t, n) && yd(e, n, t[n]);
    return e
}
  , it = (e,t)=>$A(e, eS(t));
const fn = "Notivue__"
  , rS = 6e3
  , Ye = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    PROMISE: "promise",
    PROMISE_RESOLVE: "promise-resolve",
    PROMISE_REJECT: "promise-reject"
}
  , vo = {
    title: "",
    message: "",
    duration: rS,
    ariaLive: "polite",
    ariaRole: "status"
}
  , zl = it(he({}, vo), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , iS = it(he({}, vo), {
    duration: 1 / 0
})
  , oS = it(he({}, zl), {
    ariaLive: "polite"
})
  , sS = he({}, vo)
  , aS = {
    [Ye.SUCCESS]: vo,
    [Ye.ERROR]: zl,
    [Ye.WARNING]: oS,
    [Ye.INFO]: sS,
    [Ye.PROMISE]: iS,
    [Ye.PROMISE_RESOLVE]: vo,
    [Ye.PROMISE_REJECT]: zl
}
  , tg = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: aS,
    limit: 1 / 0,
    animations: {
        enter: fn + "enter",
        leave: fn + "leave",
        clearAll: fn + "clearAll"
    }
}
  , In = cS();
function lS(e) {
    Object.assign(In, e)
}
function ng(e) {
    let t = 0;
    function n(r, i, o=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(it(he({}, r), {
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
        success: r=>n(r, Ye.SUCCESS),
        error: r=>n(r, Ye.ERROR),
        warning: r=>n(r, Ye.WARNING),
        info: r=>n(r, Ye.INFO),
        promise: r=>{
            const {id: i, clear: o, destroy: s} = n(r, Ye.PROMISE);
            return {
                resolve: a=>n(a, Ye.PROMISE_RESOLVE, i),
                reject: a=>n(a, Ye.PROMISE_REJECT, i),
                success: a=>n(a, Ye.PROMISE_RESOLVE, i),
                error: a=>n(a, Ye.PROMISE_REJECT, i),
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
function cS() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return ng(e)
}
function uS(e) {
    je(e.config.isTopAlign, ()=>{
        e.animations.updatePositions({
            isImmediate: !0
        })
    }
    , {
        flush: "post"
    }),
    je(()=>e.items.length, ()=>{
        e.animations.updatePositions()
    }
    , {
        flush: "post"
    }),
    je(()=>e.items.length === 0 && e.queue.length === 0, t=>{
        t && (e.timeouts.reset(),
        e.elements.setRootAttrs({}))
    }
    , {
        flush: "post"
    }),
    je(()=>e.config.animations.value.enter, (t,n)=>{
        t !== n && e.animations.resetTransitionData()
    }
    )
}
const fS = typeof window > "u";
function fr(e) {
    return e.pointerType === "mouse"
}
function du(e, t) {
    const n = he({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (hS(t[r]) ? n[r] = du(e[r], t[r]) : n[r] = t[r]);
    return n
}
function dS(e, t) {
    return t.props || (t.props = {}),
    he(he(he(he({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function hS(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function pS(e, t) {
    return xc(At(du(e, t)))
}
function mS(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>it(he({}, t), {
        [n]: Ve(r)
    }), {})
}
const gS = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function rg(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!gS.includes(t)))
}
function ig(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function yS(e) {
    const t = pS(tg, e)
      , n = ue(()=>t.position.value.startsWith("top"));
    function r(i) {
        typeof i == "function" && (i = i(mS(t)));
        for (const o of Object.keys(i))
            typeof t[o].value == "object" ? t[o].value = du(t[o].value, i[o]) : t[o].value = i[o]
    }
    return it(he({}, t), {
        isTopAlign: n,
        update: r
    })
}
function vS() {
    return {
        entries: gn([]),
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
            yp(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function _S(e, t) {
    return {
        entries: gn([]),
        get length() {
            return this.entries.value.length
        },
        add(n) {
            this.entries.value.unshift(n),
            this.triggerRef()
        },
        addFromQueue() {
            const n = it(he({}, t.entries.value[0]), {
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
            yp(this.entries)
        },
        updateAll(n) {
            this.entries.value = this.entries.value.map(n)
        },
        remove(n) {
            this.entries.value = this.entries.value.filter(r=>r.id !== n),
            t.length > 0 && this.length < e.limit.value && Wt(()=>this.addFromQueue())
        },
        clear() {
            this.entries.value = [],
            t.clear()
        }
    }
}
function bS() {
    return {
        root: le(null),
        rootAttrs: gn({}),
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
function ES(e, t, n) {
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
                (c = s == null ? void 0 : s[o ? "onManualClear" : "onAutoClear"]) == null || c.call(s, rg(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || i || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: it(he({}, s.positionStyles), {
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
                    positionStyles: he({
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
function TS(e, t) {
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
                it(he({}, n), {
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
                n.timeout ? it(he({}, n), {
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
function AS({config: e, items: t, queue: n, animations: r, timeouts: i}) {
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
              , a = dS(e.notifications.value, o)
              , l = ()=>i.create(a.id, a.duration);
            if ([Ye.PROMISE_RESOLVE, Ye.PROMISE_REJECT].includes(o.type))
                n.get(a.id) ? (n.update(a.id, it(he({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, it(he({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const c = e.enqueue.value
                  , u = t.length >= e.limit.value;
                !c && u && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>i.create(m, 1));
                const f = c && !o.skipQueue && u
                  , d = it(he({}, a), {
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
const og = Symbol("");
function SS(e={}) {
    const t = yS(e)
      , n = vS()
      , r = _S(t, n)
      , i = bS()
      , o = ES(t, r, i)
      , s = TS(r, o)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: i,
        animations: o,
        timeouts: s
    }
      , l = AS(a)
      , c = Object.freeze(ng(l));
    return lS(c),
    uS(a),
    {
        install(u) {
            u.config.globalProperties.$push = c,
            u.provide(og, a)
        }
    }
}
function Ar() {
    return Tt(og)
}
function kS() {
    return fS ? it(he({}, xc(At(tg))), {
        isTopAlign: ue(()=>!0),
        update: ()=>{}
    }) : Ar().config
}
const sg = {
    listAriaLabel: "Notifications"
}
  , wS = Be({
    setup(e, {slots: t, attrs: n}) {
        const r = le(!1);
        return Mt(()=>r.value = !0),
        ()=>{
            var i;
            return r.value ? (i = t.default) == null ? void 0 : i.call(t) : Ge("span", n, "")
        }
    }
})
  , LS = ["role", "aria-live"]
  , OS = Be({
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
        Ge("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, Zt(G(ig)(t.item)), 9, LS))
    }
});
function CS() {
    const {timeouts: e, config: t} = Ar();
    function n(i) {
        fr(i) && e.pause()
    }
    function r(i) {
        fr(i) && e.resume()
    }
    return ue(()=>t.pauseOnHover.value && !e.isStreamFocused.value ? {
        onPointerenter: n,
        onPointerleave: r
    } : {})
}
function RS() {
    const {timeouts: e, config: t} = Ar();
    function n(r) {
        fr(r) || (e.clearDebounceTimeout(),
        e.pause(),
        e.resumeWithDebounce(2e3))
    }
    return _n(()=>{
        e.clearDebounceTimeout()
    }
    ),
    ue(()=>t.pauseOnTouch.value && !e.isStreamFocused.value ? {
        onPointerdown: n
    } : {})
}
const Wa = {
    boxSizing: "border-box"
}
  , Ga = {
    list: it(he({}, Wa), {
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
    listItem: it(he({}, Wa), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: it(he({}, Wa), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function IS() {
    const {isTopAlign: e, position: t} = kS()
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
        list: he(he({}, Ga.list), n.value),
        listItem: he(he({}, Ga.listItem), r.value),
        itemContainer: Ga.itemContainer
    }))
}
function PS(e) {
    function t() {
        window.matchMedia("(max-width: 1100px)").matches && e()
    }
    Mt(()=>{
        window.addEventListener("resize", t)
    }
    ),
    _n(()=>{
        window.removeEventListener("resize", t)
    }
    )
}
function MS(e, t) {
    let n;
    const r = new Set;
    Mt(()=>{
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
    je(e, i=>{
        i.length > 0 && i.forEach(o=>n == null ? void 0 : n.observe(o))
    }
    , {
        flush: "post"
    }),
    _n(()=>{
        n == null || n.disconnect()
    }
    )
}
function DS() {
    const {elements: e, animations: t} = Ar();
    PS(()=>t.updatePositions({
        isImmediate: !0
    })),
    MS(e.items.value, ()=>t.updatePositions())
}
function NS() {
    const {items: e, config: t, timeouts: n} = Ar();
    function r() {
        n.isStreamFocused.value || (document.visibilityState === "visible" ? t.pauseOnTabChange.value && n.resume() : t.pauseOnTabChange.value ? n.pause() : e.clear())
    }
    Mt(()=>{
        document.addEventListener("visibilitychange", r)
    }
    ),
    _n(()=>{
        document.removeEventListener("visibilitychange", r)
    }
    )
}
function VS() {
    const {animations: e} = Ar()
      , t = window.matchMedia("(prefers-reduced-motion: reduce)")
      , n = ()=>e.setReducedMotion(t.matches);
    Mt(()=>{
        var r;
        n(),
        (r = t.addEventListener) == null || r.call(t, "change", n)
    }
    ),
    _n(()=>{
        var r;
        (r = t.removeEventListener) == null || r.call(t, "change", n)
    }
    )
}
const US = ["data-notivue-align", "aria-label"]
  , BS = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , FS = ["aria-label", "tabindex", "data-notivue-container"]
  , xS = Be({
    __name: "NotivueImpl",
    props: na({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, sg),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: i} = Ar()
          , o = IS()
          , s = CS()
          , a = RS();
        return VS(),
        NS(),
        DS(),
        (l,c)=>{
            var u;
            return me(),
            _t(g_, {
                to: G(n).teleportTo.value === !1 ? void 0 : G(n).teleportTo.value,
                disabled: G(n).teleportTo.value === !1
            }, [G(r).length > 0 ? (me(),
            Ge("ol", _i({
                key: 0
            }, he(he(he({}, G(s)), G(a)), G(i).rootAttrs.value), {
                "data-notivue-align": G(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: G(i).root,
                class: t.class,
                style: he(he({}, G(o).list), (u = t.styles) == null ? void 0 : u.list)
            }), [(me(!0),
            Ge(mt, null, Y0(G(r).entries.value, (f,d)=>{
                var m, _, b, A;
                return me(),
                Ge("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": G(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: G(i).items,
                    style: Rn(he(he(he({}, G(o).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (me(),
                _t(OS, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (me(),
                Ge("div", _i({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": G(ig)(f),
                    tabindex: (b = (_ = l.containersTabIndex) == null ? void 0 : _[f.id]) != null ? b : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: G(i).containers,
                    style: he(he({}, G(o).itemContainer), (A = t.styles) == null ? void 0 : A.itemContainer)
                }), [Er(l.$slots, "default", an(Gt(G(rg)(f))))], 16, FS))], 12, BS)
            }
            ), 128))], 16, US)) : qt("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , VM = Be({
    __name: "Notivue",
    props: na({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, sg),
    setup(e) {
        const t = e;
        return (n,r)=>(me(),
        _t(G(wS), null, {
            default: ln(()=>[et(xS, an(Gt(t)), {
                default: ln(i=>[Er(n.$slots, "default", an(Gt(i)))]),
                _: 3
            }, 16)]),
            _: 3
        }))
    }
})
  , HS = {
    touchOnly: !1,
    exclude: "a, button",
    disabled: !1,
    threshold: .5
}
  , jS = 300
  , Ja = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , UM = Be({
    __name: "NotivueSwipe",
    props: na({
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
    }, HS),
    setup(e) {
        const {items: t, timeouts: n, elements: r, animations: i} = Ar()
          , o = e
          , s = oi(o, "touchOnly")
          , a = oi(o, "exclude")
          , l = oi(o, "disabled")
          , c = oi(o, "threshold")
          , u = ue(()=>o.item.type === Ye.PROMISE)
          , f = ue(()=>!n.isStreamFocused.value && !l.value && !u.value && o.item.duration < 1 / 0)
          , d = le(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , _ = Ci(m)
          , b = gn({});
        function A(j) {
            Object.assign(_, j)
        }
        function g(j) {
            b.value = he(he({}, b.value), j)
        }
        function E() {
            b.value = {}
        }
        je(()=>t.length, (j,ce)=>{
            j !== ce && _.isPressed && (k(),
            A(m))
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
        function k() {
            g({
                transition: i.isReducedMotion.value ? "none" : `${jS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function L(j) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ce, offsetLeft: _e} = d.value
              , qe = _e + r.root.value.offsetLeft
              , Qe = qe + ce;
            return j.clientX > qe && j.clientX < Qe
        }
        function O(j) {
            return fr(j) ? Ja.Mouse : Ja.Touch
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
                    fr(j) || (C(),
                    D(Ja.TouchExternal));
                    return
                }
                fr(j) || C(),
                A({
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
            A({
                currentX: j.clientX - _.startX
            }),
            Math.abs(_.currentX) > ce * c.value && (_.isClearing = !0,
            W(j))
        }
        function W(j) {
            if (o.item.destroy(),
            fr(j) && L(j)) {
                const ce = r.getSortedItems();
                ce[ce.length - 1].contains(d.value) || C()
            } else
                D(O(j));
            A({
                isClearing: !1
            })
        }
        function K(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (fr(j) && L(j) ? C() : D(O(j)),
            k(),
            A({
                startX: 0,
                currentX: 0,
                isPressed: !1
            })))
        }
        function N(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (k(),
            A({
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
        return je(f, (j,ce,_e)=>{
            Wt(()=>{
                j && (p(),
                Wt(B))
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
        _n(ae),
        (j,ce)=>l.value ? Er(j.$slots, "default", {
            key: 1
        }) : (me(),
        Ge("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: Rn(b.value)
        }, [Er(j.$slots, "default")], 4))
    }
})
  , KS = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , YS = [KS]
  , vd = Be({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(Pi))), YS, 16))
    }
})
  , qS = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , WS = [qS]
  , za = Be({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(Pi))), WS, 16))
    }
})
  , GS = ge("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , JS = [GS]
  , zS = Be({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(Pi))), JS, 16))
    }
})
  , QS = ge("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , XS = ge("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , ZS = [QS, XS]
  , _d = Be({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(Pi))), ZS, 16))
    }
})
  , $S = ge("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , ek = ge("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , tk = ge("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , nk = [$S, ek, tk]
  , Qa = Be({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(Pi))), nk, 16))
    }
})
  , rk = ge("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , ik = ge("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , ok = ge("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , sk = [rk, ik, ok]
  , ak = Be({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(Pi))), sk, 16))
    }
})
  , lk = ge("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , ck = ge("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , uk = [lk, ck]
  , ag = Be({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(it(he({}, G(hu)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), uk, 16))
    }
})
  , fk = ge("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , dk = ge("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , hk = [fk, dk]
  , lg = Be({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(me(),
        Ge("svg", an(Gt(G(pk))), hk, 16))
    }
})
  , hu = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , Pi = it(he({}, hu), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , pk = it(he({}, hu), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , mk = {
    [Ye.SUCCESS]: ht(vd),
    [Ye.ERROR]: ht(za),
    [Ye.INFO]: ht(zS),
    [Ye.WARNING]: ht(za),
    [Ye.PROMISE]: ht(ag),
    [Ye.PROMISE_RESOLVE]: ht(vd),
    [Ye.PROMISE_REJECT]: ht(za),
    close: ht(lg)
};
Ye.SUCCESS + "",
ht(_d),
Ye.ERROR + "",
ht(Qa),
Ye.INFO + "",
ht(ak),
Ye.WARNING + "",
ht(Qa),
Ye.PROMISE + "",
ht(ag),
Ye.PROMISE_RESOLVE + "",
ht(_d),
Ye.PROMISE_REJECT + "",
ht(Qa),
ht(lg);
const Bo = {
    "--nv-width": "350px",
    "--nv-spacing": "0.625rem",
    "--nv-radius": "0.625rem",
    "--nv-icon-size": "1.25rem",
    "--nv-title-size": "0.925rem",
    "--nv-message-size": "0.925rem",
    "--nv-tip-width": "0px",
    "--nv-y-align": "center"
}
  , pu = {
    "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
}
  , gk = it(he(he({}, Bo), pu), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
it(he(he({}, Bo), pu), {
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
it(he(he({}, Bo), pu), {
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
it(he({}, Bo), {
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
const BM = it(he({}, Bo), {
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
  , Hn = {
    NOTIFICATION: fn + "notification",
    ICON: fn + "icon",
    CONTENT: fn + "content",
    TITLE: fn + "content-title",
    MESSAGE: fn + "content-message",
    CLOSE: fn + "close",
    CLOSE_ICON: fn + "close-icon",
    TRANSITION: fn + "transition"
}
  , yk = {
    icons: ()=>mk,
    theme: ()=>gk,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , vk = ["data-notivue", "data-notivue-has-title"]
  , _k = ["aria-live", "role"]
  , bk = ["textContent"]
  , Ek = ["textContent"]
  , Tk = ["aria-label"]
  , Ak = ["textContent"]
  , FM = Be({
    __name: "Notifications",
    props: na({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, yk),
    setup(e) {
        const t = e
          , n = gn(t.icons[t.item.type])
          , r = t.icons.close;
        return je(()=>t.item.type, i=>n.value = t.icons[i], {
            flush: "sync"
        }),
        (i,o)=>(me(),
        Ge("div", {
            class: It(G(Hn).NOTIFICATION),
            "data-notivue": i.item.type,
            "data-notivue-has-title": !!i.item.title,
            style: Rn(i.theme)
        }, [n.value ? (me(),
        Ge(mt, {
            key: 0
        }, [typeof n.value == "object" ? (me(),
        _t(Mo, {
            key: 0,
            name: G(Hn).TRANSITION,
            mode: "out-in"
        }, {
            default: ln(()=>[typeof n.value == "object" ? (me(),
            _t(vl(n.value), {
                key: 0,
                class: It(G(Hn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : qt("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (me(),
        Ge("div", {
            key: 1,
            class: It(G(Hn).ICON),
            "aria-hidden": "true"
        }, Zt(n.value), 3)) : qt("", !0)], 64)) : qt("", !0), ge("div", {
            class: It(G(Hn).CONTENT),
            "aria-live": i.item.ariaLive,
            role: i.item.ariaRole,
            "aria-atomic": "true"
        }, [i.item.title ? (me(),
        Ge("h3", {
            key: 0,
            class: It(G(Hn).TITLE),
            textContent: Zt(G(i.item.title))
        }, null, 10, bk)) : qt("", !0), ge("p", {
            class: It(G(Hn).MESSAGE),
            textContent: Zt(G(i.item.message))
        }, null, 10, Ek)], 10, _k), !t.hideClose && G(r) && i.item.type !== "promise" ? (me(),
        Ge("button", {
            key: 1,
            class: It(G(Hn).CLOSE),
            "aria-label": i.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: o[0] || (o[0] = (...s)=>i.item.clear && i.item.clear(...s))
        }, [typeof G(r) == "object" ? (me(),
        _t(vl(G(r)), {
            key: 0,
            class: It(G(Hn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof G(r) == "string" ? (me(),
        Ge("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: Zt(G(r))
        }, null, 8, Ak)) : qt("", !0)], 10, Tk)) : qt("", !0)], 14, vk))
    }
})
  , $e = {
    get: Bi("GET"),
    post: Bi("POST"),
    patch: Bi("PATCH"),
    put: Bi("PUT"),
    delete: Bi("DELETE")
};
function Bi(e) {
    return async(t,n,r={})=>{
        const i = Yt()
          , o = i.token
          , s = Jn();
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
                In.error({
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
let cg;
const Fo = e=>cg = e
  , ug = Symbol();
function Ql(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Qi;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Qi || (Qi = {}));
function kk() {
    const e = Ro(!0)
      , t = e.run(()=>le({}));
    let n = []
      , r = [];
    const i = ht({
        install(o) {
            Fo(i),
            i._a = o,
            o.provide(ug, i),
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
const fg = ()=>{}
;
function bd(e, t, n, r=fg) {
    e.push(t);
    const i = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && Io() && Qs(i),
    i
}
function ei(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const wk = e=>e();
function Xl(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        Ql(i) && Ql(r) && e.hasOwnProperty(n) && !lt(r) && !gr(r) ? e[n] = Xl(i, r) : e[n] = r
    }
    return e
}
const Lk = Symbol();
function Ok(e) {
    return !Ql(e) || !e.hasOwnProperty(Lk)
}
const {assign: rr} = Object;
function Ck(e) {
    return !!(lt(e) && e.effect)
}
function Rk(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = i ? i() : {});
        const u = xc(n.state.value[e]);
        return rr(u, o, Object.keys(s || {}).reduce((f,d)=>(f[d] = ht(ue(()=>{
            Fo(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = dg(e, c, t, n, r, !0),
    l
}
function dg(e, t, n={}, r, i, o) {
    let s;
    const a = rr({
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
    function A(O) {
        let C;
        c = u = !1,
        typeof O == "function" ? (O(r.state.value[e]),
        C = {
            type: Qi.patchFunction,
            storeId: e,
            events: m
        }) : (Xl(r.state.value[e], O),
        C = {
            type: Qi.patchObject,
            payload: O,
            storeId: e,
            events: m
        });
        const D = b = Symbol();
        Wt().then(()=>{
            b === D && (c = !0)
        }
        ),
        u = !0,
        ei(f, C, r.state.value[e])
    }
    const g = o ? function() {
        const {state: C} = n
          , D = C ? C() : {};
        this.$patch(x=>{
            rr(x, D)
        }
        )
    }
    : fg;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(O, C) {
        return function() {
            Fo(r);
            const D = Array.from(arguments)
              , x = []
              , U = [];
            function Z(N) {
                x.push(N)
            }
            function W(N) {
                U.push(N)
            }
            ei(d, {
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
                throw ei(U, N),
                N
            }
            return K instanceof Promise ? K.then(N=>(ei(x, N),
            N)).catch(N=>(ei(U, N),
            Promise.reject(N))) : (ei(x, K),
            K)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: bd.bind(null, d),
        $patch: A,
        $reset: g,
        $subscribe(O, C={}) {
            const D = bd(f, O, C.detached, ()=>x())
              , x = s.run(()=>je(()=>r.state.value[e], U=>{
                (C.flush === "sync" ? u : c) && O({
                    storeId: e,
                    type: Qi.direct,
                    events: m
                }, U)
            }
            , rr({}, l, C)));
            return D
        },
        $dispose: E
    }
      , T = At(y);
    r._s.set(e, T);
    const L = (r._a && r._a.runWithContext || wk)(()=>r._e.run(()=>(s = Ro()).run(t)));
    for (const O in L) {
        const C = L[O];
        if (lt(C) && !Ck(C) || gr(C))
            o || (_ && Ok(C) && (lt(C) ? C.value = _[O] : Xl(C, _[O])),
            r.state.value[e][O] = C);
        else if (typeof C == "function") {
            const D = p(O, C);
            L[O] = D,
            a.actions[O] = C
        }
    }
    return rr(T, L),
    rr(Ve(T), L),
    Object.defineProperty(T, "$state", {
        get: ()=>r.state.value[e],
        set: O=>{
            A(C=>{
                rr(C, O)
            }
            )
        }
    }),
    r._p.forEach(O=>{
        rr(T, s.run(()=>O({
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
function Bn(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(a, l) {
        const c = Xc();
        return a = a || (c ? Tt(ug, null) : null),
        a && Fo(a),
        a = cg,
        a._s.has(r) || (o ? dg(r, t, i, a) : Rk(r, i, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
class ji extends Error {
}
ji.prototype.name = "InvalidTokenError";
function Ik(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function Pk(e) {
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
        return Ik(t)
    } catch {
        return atob(t)
    }
}
function Ed(e, t) {
    if (typeof e != "string")
        throw new ji("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new ji(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = Pk(r)
    } catch (o) {
        throw new ji(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new ji(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
var fe = (e=>(e.SYNC_TAPS = "hk_sync_taps",
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
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E15 = "hamster_youtube_local_video_e15",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E16 = "hamster_youtube_local_video_e16",
e))(fe || {})
  , Xt = (e=>(e[e.BALANCE_ANIMATION_SPEED = 50] = "BALANCE_ANIMATION_SPEED",
e[e.CALC_INTERVAL = 1e3] = "CALC_INTERVAL",
e[e.SYNC_INTERVAL = 36e5] = "SYNC_INTERVAL",
e[e.TAP_INTERVAL = 3e3] = "TAP_INTERVAL",
e[e.REFERRAL_REFRESH_TIME = 60] = "REFERRAL_REFRESH_TIME",
e.GAME_NAME = "Hamster Kombat",
e.DEFAULT_EXCHANGE = "hamster",
e))(Xt || {})
  , Mk = (e=>(e.REPEATEDLY = "Repeatedly",
e.ONCE = "Once",
e))(Mk || {})
  , Zl = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(Zl || {})
  , Dk = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(Dk || {})
  , Nk = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Web3 = "Web3",
e.Legal = "Legal",
e))(Nk || {})
  , Vk = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
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
e.adv_integration_3107 = "adv_integration_3107",
e.ethereum_bd = "ethereum_bd",
e.adv_integration_0308 = "adv_integration_0308",
e))(Vk || {})
  , Uk = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(Uk || {})
  , Bk = (e=>(e[e.Bronze = 1] = "Bronze",
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
e))(Bk || {})
  , Fk = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(Fk || {})
  , xk = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(xk || {})
  , Hk = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
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
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E15 = "hamster_youtube_local_video_e15",
e.HAMSTER_YOUTUBE_LOCAL_VIDEO_E16 = "hamster_youtube_local_video_e16",
e))(Hk || {})
  , jk = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.CONNECT_TON_WALLET = "airdrop_connect_ton_wallet",
e.INVITE_FRIENDS = "invite_friends",
e.REACH_PROFIT_PER_HOUR = "reach_profit_per_hour",
e.REACH_LEVEL = "reach_level",
e))(jk || {})
  , Kk = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(Kk || {})
  , Yk = (e=>(e.BINGX = "bingx",
e))(Yk || {})
  , xo = (e=>(e.LANDING = "/",
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
e.GAME_USER_ACHIEVEMENTS = "/clicker/user/achievements",
e))(xo || {})
  , hg = (e=>(e.ONBOARDING_START = "onboarding_start",
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
e))(hg || {})
  , Nr = (e=>(e.Dot = ".",
e.Dash = "-",
e.SymbolSeparator = "/",
e))(Nr || {});
const qk = {
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
  , Yt = Bn("auth", {
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
        token: localStorage.getItem(fe.AUTH_TOKEN) ?? null,
        location: {}
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(fe.AUTH_TOKEN)
        },
        isExpiredToken(e) {
            if (e && Ed(e)) {
                const t = Ed(e).exp;
                return new Date().getTime() > t * 1e3
            }
            return !1
        },
        logout(e=!0) {
            this.authenticated = !1,
            this.token = null,
            localStorage.removeItem(fe.AUTH_TOKEN),
            localStorage.removeItem(fe.SYNC_AVAILABLE_TAPS),
            localStorage.removeItem(fe.SYNC_TIMESTAMP_TAPS),
            localStorage.removeItem(fe.SYNC_TAPS),
            localStorage.removeItem(fe.AIRDROP_TASKS),
            localStorage.removeItem(fe.EARN_TASKS),
            localStorage.removeItem(fe.SETTINGS),
            localStorage.removeItem(fe.SUBSCRIBE_YOUTUBE),
            localStorage.removeItem(fe.SUBSCRIBE_DISCORD),
            localStorage.removeItem(fe.SUBSCRIBE_MEDIUM),
            localStorage.removeItem(fe.HAMSTER_DROP),
            localStorage.removeItem(fe.SUBSCRIBE_TELEGRAM_CRYPTOFAM),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_ACADEMY),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E23),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E24),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E25),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E26),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E27),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E28),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_EASY_START_S1E29),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_PARTNER_VIDEO_E1),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_SUBSCRIBE),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E5),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E6),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E7),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E8),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E9),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E10),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E11),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E12),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E13),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E14),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E15),
            localStorage.removeItem(fe.HAMSTER_YOUTUBE_LOCAL_VIDEO_E16),
            localStorage.removeItem("ton-connect-storage_bridge-connection"),
            localStorage.removeItem("ton-connect-ui_last-selected-wallet-info"),
            e && (Uo(xo.GAME_INDEX),
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
                    localStorage.setItem(fe.AUTH_TOKEN, n),
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
            }).then(e=>e)
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
  , Rt = window.setInterval;
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ns = typeof window < "u"
  , Sr = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , Wk = (e,t,n)=>Gk({
    l: e,
    k: t,
    s: n
})
  , Gk = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , Et = e=>typeof e == "number" && isFinite(e)
  , Jk = e=>mg(e) === "[object Date]"
  , Vs = e=>mg(e) === "[object RegExp]"
  , fa = e=>He(e) && Object.keys(e).length === 0
  , dt = Object.assign;
let Td;
const mu = ()=>Td || (Td = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ad(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const zk = Object.prototype.hasOwnProperty;
function Us(e, t) {
    return zk.call(e, t)
}
const ut = Array.isArray
  , Ze = e=>typeof e == "function"
  , ne = e=>typeof e == "string"
  , at = e=>typeof e == "boolean"
  , Qk = e=>typeof e == "symbol"
  , Ue = e=>e !== null && typeof e == "object"
  , Xk = e=>Ue(e) && Ze(e.then) && Ze(e.catch)
  , pg = Object.prototype.toString
  , mg = e=>pg.call(e)
  , He = e=>{
    if (!Ue(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Zk = e=>e == null ? "" : ut(e) || He(e) && e.toString === pg ? JSON.stringify(e, null, 2) : String(e);
function gu(e, t="") {
    return e.reduce((n,r,i)=>i === 0 ? n + r : n + t + r, "")
}
function yu(e) {
    let t = e;
    return ()=>++t
}
function $k(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const ss = e=>!Ue(e) || ut(e);
function Yr(e, t) {
    if (ss(e) || ss(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: i} = n.pop();
        Object.keys(r).forEach(o=>{
            ss(r[o]) || ss(i[o]) ? i[o] = r[o] : n.push({
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
function ew(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function $l(e, t, n) {
    const r = {
        start: e,
        end: t
    };
    return n != null && (r.source = n),
    r
}
const Je = {
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
function da(e, t, n={}) {
    const {domain: r, messages: i, args: o} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function tw(e) {
    throw e
}
const jn = " "
  , nw = "\r"
  , Ct = `
`
  , rw = "\u2028"
  , iw = "\u2029";
function ow(e) {
    const t = e;
    let n = 0
      , r = 1
      , i = 1
      , o = 0;
    const s = L=>t[L] === nw && t[L + 1] === Ct
      , a = L=>t[L] === Ct
      , l = L=>t[L] === iw
      , c = L=>t[L] === rw
      , u = L=>s(L) || a(L) || l(L) || c(L)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>i
      , _ = ()=>o
      , b = L=>s(L) || l(L) || c(L) ? Ct : t[L]
      , A = ()=>b(n)
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
    function k() {
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
        currentChar: A,
        currentPeek: g,
        next: E,
        peek: p,
        reset: y,
        resetPeek: T,
        skipToPeek: k
    }
}
const tr = void 0
  , sw = "."
  , Sd = "'"
  , aw = "tokenizer";
function lw(e, t={}) {
    const n = t.location !== !1
      , r = ow(e)
      , i = ()=>r.index()
      , o = ()=>ew(r.line(), r.column(), r.index())
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
            const q = n ? $l(V.startLoc, v) : null
              , X = da(h, q, {
                domain: aw,
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
        return n && (R.loc = $l(h.startLoc, h.endLoc)),
        w != null && (R.value = w),
        R
    }
    const m = h=>d(h, 14);
    function _(h, v) {
        return h.currentChar() === v ? (h.next(),
        v) : (f(Je.EXPECTED_TOKEN, o(), 0, v),
        "")
    }
    function b(h) {
        let v = "";
        for (; h.currentPeek() === jn || h.currentPeek() === Ct; )
            v += h.currentPeek(),
            h.peek();
        return v
    }
    function A(h) {
        const v = b(h);
        return h.skipToPeek(),
        v
    }
    function g(h) {
        if (h === tr)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function E(h) {
        if (h === tr)
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
    function k(h, v) {
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
            return q === "{" ? g(h.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === jn || !q ? !1 : q === Ct ? (h.peek(),
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
            w(V, "%", !0)) : z === "|" ? q === "%" || X ? !0 : !(q === jn || q === Ct) : z === jn ? (h.peek(),
            w(!0, jn, X)) : z === Ct ? (h.peek(),
            w(!0, Ct, X)) : !0
        }
          , R = w();
        return v && h.resetPeek(),
        R
    }
    function Z(h, v) {
        const w = h.currentChar();
        return w === tr ? tr : v(w) ? (h.next(),
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
        A(h);
        const v = h.currentChar();
        return v !== "%" && f(Je.EXPECTED_TOKEN, o(), 0, v),
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
            else if (w === jn || w === Ct)
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
        A(h);
        let v = ""
          , w = "";
        for (; v = W(h); )
            w += v;
        return h.currentChar() === tr && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
        w
    }
    function ce(h) {
        A(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${Y(h)}`) : v += Y(h),
        h.currentChar() === tr && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
        v
    }
    function _e(h) {
        A(h),
        _(h, "'");
        let v = ""
          , w = "";
        const R = q=>q !== Sd && q !== Ct;
        for (; v = Z(h, R); )
            v === "\\" ? w += qe(h) : w += v;
        const V = h.currentChar();
        return V === Ct || V === tr ? (f(Je.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        V === Ct && (h.next(),
        _(h, "'")),
        w) : (_(h, "'"),
        w)
    }
    function qe(h) {
        const v = h.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return h.next(),
            `\\${v}`;
        case "u":
            return Qe(h, v, 4);
        case "U":
            return Qe(h, v, 6);
        default:
            return f(Je.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v),
            ""
        }
    }
    function Qe(h, v, w) {
        _(h, v);
        let R = "";
        for (let V = 0; V < w; V++) {
            const q = N(h);
            if (!q) {
                f(Je.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${v}${R}${h.currentChar()}`);
                break
            }
            R += q
        }
        return `\\${v}${R}`
    }
    function ct(h) {
        A(h);
        let v = ""
          , w = "";
        const R = V=>V !== "{" && V !== "}" && V !== jn && V !== Ct;
        for (; v = Z(h, R); )
            w += v;
        return w
    }
    function tt(h) {
        let v = ""
          , w = "";
        for (; v = W(h); )
            w += v;
        return w
    }
    function H(h) {
        const v = (w=!1,R)=>{
            const V = h.currentChar();
            return V === "{" || V === "%" || V === "@" || V === "|" || V === "(" || V === ")" || !V || V === jn ? R : V === Ct || V === sw ? (R += V,
            h.next(),
            v(w, R)) : (R += V,
            h.next(),
            v(!0, R))
        }
        ;
        return v(!1, "")
    }
    function te(h) {
        A(h);
        const v = _(h, "|");
        return A(h),
        v
    }
    function Q(h, v) {
        let w = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(Je.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            h.next(),
            w = d(v, 2, "{"),
            A(h),
            v.braceNest++,
            w;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(Je.EMPTY_PLACEHOLDER, o(), 0),
            h.next(),
            w = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && A(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            w;
        case "@":
            return v.braceNest > 0 && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
            w = $(h, v) || m(v),
            v.braceNest = 0,
            w;
        default:
            let V = !0
              , q = !0
              , X = !0;
            if (D(h))
                return v.braceNest > 0 && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
                w = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                w;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
                v.braceNest = 0,
                ve(h, v);
            if (V = p(h, v))
                return w = d(v, 5, j(h)),
                A(h),
                w;
            if (q = y(h, v))
                return w = d(v, 6, ce(h)),
                A(h),
                w;
            if (X = T(h, v))
                return w = d(v, 7, _e(h)),
                A(h),
                w;
            if (!V && !q && !X)
                return w = d(v, 13, ct(h)),
                f(Je.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, w.value),
                A(h),
                w;
            break
        }
        return w
    }
    function $(h, v) {
        const {currentType: w} = v;
        let R = null;
        const V = h.currentChar();
        switch ((w === 8 || w === 9 || w === 12 || w === 10) && (V === Ct || V === jn) && f(Je.INVALID_LINKED_FORMAT, o(), 0),
        V) {
        case "@":
            return h.next(),
            R = d(v, 8, "@"),
            v.inLinked = !0,
            R;
        case ".":
            return A(h),
            h.next(),
            d(v, 9, ".");
        case ":":
            return A(h),
            h.next(),
            d(v, 10, ":");
        default:
            return D(h) ? (R = d(v, 1, te(h)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : k(h, v) || O(h, v) ? (A(h),
            $(h, v)) : L(h, v) ? (A(h),
            d(v, 12, tt(h))) : C(h, v) ? (A(h),
            V === "{" ? Q(h, v) || R : d(v, 11, H(h))) : (w === 8 && f(Je.INVALID_LINKED_FORMAT, o(), 0),
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
            return f(Je.UNBALANCED_CLOSING_BRACE, o(), 0),
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
    function Fe() {
        const {currentType: h, offset: v, startLoc: w, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = w,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = o(),
        r.currentChar() === tr ? d(l, 14) : ve(r, l)
    }
    return {
        nextToken: Fe,
        currentOffset: i,
        currentPosition: o,
        context: c
    }
}
const cw = "parser"
  , uw = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fw(e, t, n) {
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
function dw(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(g, E, p, y, ...T) {
        const k = g.currentPosition();
        if (k.offset += y,
        k.column += y,
        n) {
            const L = t ? $l(p, k) : null
              , O = da(E, L, {
                domain: cw,
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
          , k = i(5, y, T);
        return k.index = parseInt(E, 10),
        g.nextToken(),
        o(k, g.currentOffset(), g.currentPosition()),
        k
    }
    function l(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , k = i(4, y, T);
        return k.key = E,
        g.nextToken(),
        o(k, g.currentOffset(), g.currentPosition()),
        k
    }
    function c(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , k = i(9, y, T);
        return k.value = E.replace(uw, fw),
        g.nextToken(),
        o(k, g.currentOffset(), g.currentPosition()),
        k
    }
    function u(g) {
        const E = g.nextToken()
          , p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , k = i(8, y, T);
        return E.type !== 12 ? (r(g, Je.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        k.value = "",
        o(k, y, T),
        {
            nextConsumeToken: E,
            node: k
        }) : (E.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, An(E)),
        k.value = E.value || "",
        o(k, g.currentOffset(), g.currentPosition()),
        {
            node: k
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
        switch (y.type !== 10 && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(y)),
        y = g.nextToken(),
        y.type === 2 && (y = g.nextToken()),
        y.type) {
        case 11:
            y.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(y)),
            p.key = f(g, y.value || "");
            break;
        case 5:
            y.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(y)),
            p.key = l(g, y.value || "");
            break;
        case 6:
            y.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(y)),
            p.key = a(g, y.value || "");
            break;
        case 7:
            y.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(y)),
            p.key = c(g, y.value || "");
            break;
        default:
            r(g, Je.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
            const T = g.context()
              , k = i(7, T.offset, T.startLoc);
            return k.value = "",
            o(k, T.offset, T.startLoc),
            p.key = k,
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
        let k = null;
        do {
            const C = k || g.nextToken();
            switch (k = null,
            C.type) {
            case 0:
                C.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(C)),
                T.items.push(s(g, C.value || ""));
                break;
            case 6:
                C.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(C)),
                T.items.push(a(g, C.value || ""));
                break;
            case 5:
                C.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(C)),
                T.items.push(l(g, C.value || ""));
                break;
            case 7:
                C.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(C)),
                T.items.push(c(g, C.value || ""));
                break;
            case 8:
                const D = d(g);
                T.items.push(D.node),
                k = D.nextConsumeToken || null;
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
        let k = y.items.length === 0;
        const L = i(1, E, p);
        L.cases = [],
        L.cases.push(y);
        do {
            const O = m(g);
            k || (k = O.items.length === 0),
            L.cases.push(O)
        } while (T.currentType !== 14);
        return k && r(g, Je.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
        o(L, g.currentOffset(), g.currentPosition()),
        L
    }
    function b(g) {
        const E = g.context()
          , {offset: p, startLoc: y} = E
          , T = m(g);
        return E.currentType === 14 ? T : _(g, p, y, T)
    }
    function A(g) {
        const E = lw(g, dt({}, e))
          , p = E.context()
          , y = i(0, p.offset, p.startLoc);
        return t && y.loc && (y.loc.source = g),
        y.body = b(E),
        e.onCacheKey && (y.cacheKey = e.onCacheKey(g)),
        p.currentType !== 14 && r(E, Je.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, g[p.offset] || ""),
        o(y, E.currentOffset(), E.currentPosition()),
        y
    }
    return {
        parse: A
    }
}
function An(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function hw(e, t={}) {
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
function kd(e, t) {
    for (let n = 0; n < e.length; n++)
        vu(e[n], t)
}
function vu(e, t) {
    switch (e.type) {
    case 1:
        kd(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        kd(e.items, t);
        break;
    case 6:
        vu(e.key, t),
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
function pw(e, t={}) {
    const n = hw(e);
    n.helper("normalize"),
    e.body && vu(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function mw(e) {
    const t = e.body;
    return t.type === 2 ? wd(t) : t.cases.forEach(n=>wd(n)),
    e
}
function wd(e) {
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
            e.static = gu(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function ii(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        const t = e;
        ii(t.body),
        t.b = t.body,
        delete t.body;
        break;
    case 1:
        const n = e
          , r = n.cases;
        for (let u = 0; u < r.length; u++)
            ii(r[u]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const i = e
          , o = i.items;
        for (let u = 0; u < o.length; u++)
            ii(o[u]);
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
        ii(a.key),
        a.k = a.key,
        delete a.key,
        a.modifier && (ii(a.modifier),
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
function gw(e, t) {
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
    function c(A, g) {
        a.code += A
    }
    function u(A, g=!0) {
        const E = g ? i : "";
        c(o ? E + "  ".repeat(A) : E)
    }
    function f(A=!0) {
        const g = ++a.indentLevel;
        A && u(g)
    }
    function d(A=!0) {
        const g = --a.indentLevel;
        A && u(g)
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
        helper: A=>`_${A}`,
        needIndent: ()=>a.needIndent
    }
}
function yw(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Ti(e, t.key),
    t.modifier ? (e.push(", "),
    Ti(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function vw(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const i = t.items.length;
    for (let o = 0; o < i && (Ti(e, t.items[o]),
    o !== i - 1); o++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function _w(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const i = t.cases.length;
        for (let o = 0; o < i && (Ti(e, t.cases[o]),
        o !== i - 1); o++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function bw(e, t) {
    t.body ? Ti(e, t.body) : e.push("null")
}
function Ti(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        bw(e, t);
        break;
    case 1:
        _w(e, t);
        break;
    case 2:
        vw(e, t);
        break;
    case 6:
        yw(e, t);
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
const Ew = (e,t={})=>{
    const n = ne(t.mode) ? t.mode : "normal"
      , r = ne(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = gw(e, {
        mode: n,
        filename: r,
        sourceMap: i,
        breakLineCode: o,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${gu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    Ti(l, e),
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
function Tw(e, t={}) {
    const n = dt({}, t)
      , r = !!n.jit
      , i = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , a = dw(n).parse(e);
    return r ? (o && mw(a),
    i && ii(a),
    {
        ast: a,
        code: ""
    }) : (pw(a, n),
    Ew(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Aw() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (mu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const kr = [];
kr[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
kr[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
kr[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
kr[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
kr[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
kr[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
kr[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Sw = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function kw(e) {
    return Sw.test(e)
}
function ww(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Lw(e) {
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
function Ow(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : kw(t) ? ww(t) : "*" + t
}
function Cw(e) {
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
            s === void 0 || (s = Ow(s),
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
            if (l = Lw(o),
            f = kr[r],
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
const Ld = new Map;
function Rw(e, t) {
    return Ue(e) ? e[t] : null
}
function Iw(e, t) {
    if (!Ue(e))
        return null;
    let n = Ld.get(t);
    if (n || (n = Cw(t),
    n && Ld.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let i = e
      , o = 0;
    for (; o < r; ) {
        const s = i[n[o]];
        if (s === void 0 || Ze(i))
            return null;
        i = s,
        o++
    }
    return i
}
const Pw = e=>e
  , Mw = e=>""
  , Dw = "text"
  , Nw = e=>e.length === 0 ? "" : gu(e)
  , Vw = Zk;
function Od(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function Uw(e) {
    const t = Et(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Et(e.named.count) || Et(e.named.n)) ? Et(e.named.count) ? e.named.count : Et(e.named.n) ? e.named.n : t : t
}
function Bw(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function Fw(e={}) {
    const t = e.locale
      , n = Uw(e)
      , r = Ue(e.pluralRules) && ne(t) && Ze(e.pluralRules[t]) ? e.pluralRules[t] : Od
      , i = Ue(e.pluralRules) && ne(t) && Ze(e.pluralRules[t]) ? Od : void 0
      , o = g=>g[r(n, g.length, i)]
      , s = e.list || []
      , a = g=>s[g]
      , l = e.named || {};
    Et(e.pluralIndex) && Bw(n, l);
    const c = g=>l[g];
    function u(g) {
        const E = Ze(e.messages) ? e.messages(g) : Ue(e.messages) ? e.messages[g] : !1;
        return E || (e.parent ? e.parent.message(g) : Mw)
    }
    const f = g=>e.modifiers ? e.modifiers[g] : Pw
      , d = He(e.processor) && Ze(e.processor.normalize) ? e.processor.normalize : Nw
      , m = He(e.processor) && Ze(e.processor.interpolate) ? e.processor.interpolate : Vw
      , _ = He(e.processor) && ne(e.processor.type) ? e.processor.type : Dw
      , A = {
        list: a,
        named: c,
        plural: o,
        linked: (g,...E)=>{
            const [p,y] = E;
            let T = "text"
              , k = "";
            E.length === 1 ? Ue(p) ? (k = p.modifier || k,
            T = p.type || T) : ne(p) && (k = p || k) : E.length === 2 && (ne(p) && (k = p || k),
            ne(y) && (T = y || T));
            const L = u(g)(A)
              , O = T === "vnode" && ut(L) && k ? L[0] : L;
            return k ? f(k)(O, T) : O
        }
        ,
        message: u,
        type: _,
        interpolate: m,
        normalize: d,
        values: dt({}, s, l)
    };
    return A
}
let _o = null;
function xw(e) {
    _o = e
}
function Hw(e, t, n) {
    _o && _o.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const jw = Kw("function:translate");
function Kw(e) {
    return t=>_o && _o.emit(e, t)
}
const Yw = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , gg = Je.__EXTEND_POINT__
  , Rr = yu(gg)
  , Cn = {
    INVALID_ARGUMENT: gg,
    INVALID_DATE_ARGUMENT: Rr(),
    INVALID_ISO_DATE_ARGUMENT: Rr(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Rr(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Rr(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Rr(),
    NOT_SUPPORT_LOCALE_TYPE: Rr(),
    __EXTEND_POINT__: Rr()
};
function Yn(e) {
    return da(e, null, void 0)
}
function _u(e, t) {
    return t.locale != null ? Cd(t.locale) : Cd(e.locale)
}
let Xa;
function Cd(e) {
    if (ne(e))
        return e;
    if (Ze(e)) {
        if (e.resolvedOnce && Xa != null)
            return Xa;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Xk(t))
                throw Yn(Cn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Xa = t
        } else
            throw Yn(Cn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Yn(Cn.NOT_SUPPORT_LOCALE_TYPE)
}
function qw(e, t, n) {
    return [...new Set([n, ...ut(t) ? t : Ue(t) ? Object.keys(t) : ne(t) ? [t] : [n]])]
}
function yg(e, t, n) {
    const r = ne(n) ? n : Bs
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let o = i.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let s = [n];
        for (; ut(s); )
            s = Rd(o, s, t);
        const a = ut(t) || !He(t) ? t : t.default ? t.default : null;
        s = ne(a) ? [a] : a,
        ut(s) && Rd(o, s, !1),
        i.__localeChainCache.set(r, o)
    }
    return o
}
function Rd(e, t, n) {
    let r = !0;
    for (let i = 0; i < t.length && at(r); i++) {
        const o = t[i];
        ne(o) && (r = Ww(e, t[i], n))
    }
    return r
}
function Ww(e, t, n) {
    let r;
    const i = t.split("-");
    do {
        const o = i.join("-");
        r = Gw(e, o, n),
        i.splice(-1, 1)
    } while (i.length && r === !0);
    return r
}
function Gw(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const i = t.replace(/!/g, "");
        e.push(i),
        (ut(n) || He(n)) && n[i] && (r = n[i])
    }
    return r
}
const Jw = "9.9.1"
  , ha = -1
  , Bs = "en-US"
  , Id = ""
  , Pd = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function zw() {
    return {
        upper: (e,t)=>t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && ne(e) ? Pd(e) : t === "vnode" && Ue(e) && "__v_isVNode"in e ? Pd(e.children) : e
    }
}
let vg;
function Qw(e) {
    vg = e
}
let _g;
function Xw(e) {
    _g = e
}
let bg;
function Zw(e) {
    bg = e
}
let Eg = null;
const $w = e=>{
    Eg = e
}
  , eL = ()=>Eg;
let Tg = null;
const Md = e=>{
    Tg = e
}
  , tL = ()=>Tg;
let Dd = 0;
function nL(e={}) {
    const t = Ze(e.onWarn) ? e.onWarn : $k
      , n = ne(e.version) ? e.version : Jw
      , r = ne(e.locale) || Ze(e.locale) ? e.locale : Bs
      , i = Ze(r) ? Bs : r
      , o = ut(e.fallbackLocale) || He(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , s = He(e.messages) ? e.messages : {
        [i]: {}
    }
      , a = He(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = He(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , c = dt({}, e.modifiers || {}, zw())
      , u = e.pluralRules || {}
      , f = Ze(e.missing) ? e.missing : null
      , d = at(e.missingWarn) || Vs(e.missingWarn) ? e.missingWarn : !0
      , m = at(e.fallbackWarn) || Vs(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = !!e.fallbackFormat
      , b = !!e.unresolving
      , A = Ze(e.postTranslation) ? e.postTranslation : null
      , g = He(e.processor) ? e.processor : null
      , E = at(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , y = Ze(e.messageCompiler) ? e.messageCompiler : vg
      , T = Ze(e.messageResolver) ? e.messageResolver : _g || Rw
      , k = Ze(e.localeFallbacker) ? e.localeFallbacker : bg || qw
      , L = Ue(e.fallbackContext) ? e.fallbackContext : void 0
      , O = e
      , C = Ue(O.__datetimeFormatters) ? O.__datetimeFormatters : new Map
      , D = Ue(O.__numberFormatters) ? O.__numberFormatters : new Map
      , x = Ue(O.__meta) ? O.__meta : {};
    Dd++;
    const U = {
        version: n,
        cid: Dd,
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
        postTranslation: A,
        processor: g,
        warnHtmlMessage: E,
        escapeParameter: p,
        messageCompiler: y,
        messageResolver: T,
        localeFallbacker: k,
        fallbackContext: L,
        onWarn: t,
        __meta: x
    };
    return U.datetimeFormats = a,
    U.numberFormats = l,
    U.__datetimeFormatters = C,
    U.__numberFormatters = D,
    __INTLIFY_PROD_DEVTOOLS__ && Hw(U, n, x),
    U
}
function bu(e, t, n, r, i) {
    const {missing: o, onWarn: s} = e;
    if (o !== null) {
        const a = o(e, n, t, i);
        return ne(a) ? a : t
    } else
        return t
}
function Fi(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function Za(e) {
    return n=>rL(n, e)
}
function rL(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n
          , i = r.c || r.cases;
        return e.plural(i.reduce((o,s)=>[...o, Nd(e, s)], []))
    } else
        return Nd(e, n)
}
function Nd(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = (t.i || t.items).reduce((i,o)=>[...i, ec(e, o)], []);
        return e.normalize(r)
    }
}
function ec(e, t) {
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
        return e.linked(ec(e, a.k || a.key), l ? ec(e, l) : void 0, e.type);
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
const iL = e=>e;
let as = Object.create(null);
const Ai = e=>Ue(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function oL(e, t={}) {
    let n = !1;
    const r = t.onError || tw;
    return t.onError = i=>{
        n = !0,
        r(i)
    }
    ,
    {
        ...Tw(e, t),
        detectError: n
    }
}
function sL(e, t) {
    if (ne(e)) {
        at(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || iL)(e)
          , i = as[r];
        if (i)
            return i;
        const {ast: o, detectError: s} = oL(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = Za(o);
        return s ? a : as[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = as[n];
            return r || (as[n] = Za(e))
        } else
            return Za(e)
    }
}
const Vd = ()=>""
  , en = e=>Ze(e);
function Ud(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: o, fallbackLocale: s, messages: a} = e
      , [l,c] = tc(...t)
      , u = at(c.missingWarn) ? c.missingWarn : e.missingWarn
      , f = at(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , d = at(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , m = !!c.resolvedMessage
      , _ = ne(c.default) || at(c.default) ? at(c.default) ? o ? l : ()=>l : c.default : n ? o ? l : ()=>l : ""
      , b = n || _ !== ""
      , A = _u(e, c);
    d && aL(c);
    let[g,E,p] = m ? [l, A, a[A] || {}] : Ag(e, l, A, s, f, u)
      , y = g
      , T = l;
    if (!m && !(ne(y) || Ai(y) || en(y)) && b && (y = _,
    T = y),
    !m && (!(ne(y) || Ai(y) || en(y)) || !ne(E)))
        return i ? ha : l;
    let k = !1;
    const L = ()=>{
        k = !0
    }
      , O = en(y) ? y : Sg(e, l, E, y, T, L);
    if (k)
        return y;
    const C = uL(e, E, p, c)
      , D = Fw(C)
      , x = lL(e, O, D)
      , U = r ? r(x, l) : x;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: ne(l) ? l : en(y) ? y.key : "",
            locale: E || (en(y) ? y.locale : ""),
            format: ne(y) ? y : en(y) ? y.source : "",
            message: U
        };
        Z.meta = dt({}, e.__meta, eL() || {}),
        jw(Z)
    }
    return U
}
function aL(e) {
    ut(e.list) ? e.list = e.list.map(t=>ne(t) ? Ad(t) : t) : Ue(e.named) && Object.keys(e.named).forEach(t=>{
        ne(e.named[t]) && (e.named[t] = Ad(e.named[t]))
    }
    )
}
function Ag(e, t, n, r, i, o) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: c} = e
      , u = c(e, r, n);
    let f = {}, d, m = null;
    const _ = "translate";
    for (let b = 0; b < u.length && (d = u[b],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(ne(m) || Ai(m) || en(m))); b++) {
        const A = bu(e, t, d, o, _);
        A !== t && (m = A)
    }
    return [m, d, f]
}
function Sg(e, t, n, r, i, o) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (en(r)) {
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
    const l = s(r, cL(e, n, i, r, a, o));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function lL(e, t, n) {
    return t(n)
}
function tc(...e) {
    const [t,n,r] = e
      , i = {};
    if (!ne(t) && !Et(t) && !en(t) && !Ai(t))
        throw Yn(Cn.INVALID_ARGUMENT);
    const o = Et(t) ? String(t) : (en(t),
    t);
    return Et(n) ? i.plural = n : ne(n) ? i.default = n : He(n) && !fa(n) ? i.named = n : ut(n) && (i.list = n),
    Et(r) ? i.plural = r : ne(r) ? i.default = r : He(r) && dt(i, r),
    [o, i]
}
function cL(e, t, n, r, i, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: i,
        onError: s=>{
            throw o && o(s),
            s
        }
        ,
        onCacheKey: s=>Wk(t, n, s)
    }
}
function uL(e, t, n, r) {
    const {modifiers: i, pluralRules: o, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u} = e
      , d = {
        locale: t,
        modifiers: i,
        pluralRules: o,
        messages: m=>{
            let _ = s(n, m);
            if (_ == null && u) {
                const [,,b] = Ag(u, m, t, a, l, c);
                _ = s(b, m)
            }
            if (ne(_) || Ai(_)) {
                let b = !1;
                const g = Sg(e, m, t, _, m, ()=>{
                    b = !0
                }
                );
                return b ? Vd : g
            } else
                return en(_) ? _ : Vd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    Et(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Bd(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,c,u,f] = nc(...t)
      , d = at(u.missingWarn) ? u.missingWarn : e.missingWarn;
    at(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = _u(e, u)
      , b = s(e, i, _);
    if (!ne(l) || l === "")
        return new Intl.DateTimeFormat(_,f).format(c);
    let A = {}, g, E = null;
    const p = "datetime format";
    for (let k = 0; k < b.length && (g = b[k],
    A = n[g] || {},
    E = A[l],
    !He(E)); k++)
        bu(e, l, g, d, p);
    if (!He(E) || !ne(g))
        return r ? ha : l;
    let y = `${g}__${l}`;
    fa(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.DateTimeFormat(g,dt({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(c) : T.format(c)
}
const kg = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function nc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {}, a;
    if (ne(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Yn(Cn.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw Yn(Cn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Jk(t)) {
        if (isNaN(t.getTime()))
            throw Yn(Cn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (Et(t))
        a = t;
    else
        throw Yn(Cn.INVALID_ARGUMENT);
    return ne(n) ? o.key = n : He(n) && Object.keys(n).forEach(l=>{
        kg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ne(r) ? o.locale = r : He(r) && (s = r),
    He(i) && (s = i),
    [o.key || "", a, o, s]
}
function Fd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function xd(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,c,u,f] = rc(...t)
      , d = at(u.missingWarn) ? u.missingWarn : e.missingWarn;
    at(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = _u(e, u)
      , b = s(e, i, _);
    if (!ne(l) || l === "")
        return new Intl.NumberFormat(_,f).format(c);
    let A = {}, g, E = null;
    const p = "number format";
    for (let k = 0; k < b.length && (g = b[k],
    A = n[g] || {},
    E = A[l],
    !He(E)); k++)
        bu(e, l, g, d, p);
    if (!He(E) || !ne(g))
        return r ? ha : l;
    let y = `${g}__${l}`;
    fa(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.NumberFormat(g,dt({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(c) : T.format(c)
}
const wg = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function rc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {};
    if (!Et(t))
        throw Yn(Cn.INVALID_ARGUMENT);
    const a = t;
    return ne(n) ? o.key = n : He(n) && Object.keys(n).forEach(l=>{
        wg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ne(r) ? o.locale = r : He(r) && (s = r),
    He(i) && (s = i),
    [o.key || "", a, o, s]
}
function Hd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
    }
}
Aw();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const fL = "9.9.1";
function dL() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (mu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Lg = Yw.__EXTEND_POINT__
  , nr = yu(Lg);
nr(),
nr(),
nr(),
nr(),
nr(),
nr(),
nr(),
nr();
const Og = Cn.__EXTEND_POINT__
  , Nt = yu(Og)
  , cn = {
    UNEXPECTED_RETURN_TYPE: Og,
    INVALID_ARGUMENT: Nt(),
    MUST_BE_CALL_SETUP_TOP: Nt(),
    NOT_INSTALLED: Nt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Nt(),
    REQUIRED_VALUE: Nt(),
    INVALID_VALUE: Nt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Nt(),
    NOT_INSTALLED_WITH_PROVIDE: Nt(),
    UNEXPECTED_ERROR: Nt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Nt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Nt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Nt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Nt(),
    __EXTEND_POINT__: Nt()
};
function vn(e, ...t) {
    return da(e, null, void 0)
}
const ic = Sr("__translateVNode")
  , oc = Sr("__datetimeParts")
  , sc = Sr("__numberParts")
  , hL = Sr("__setPluralRules")
  , pL = Sr("__injectWithOption")
  , ac = Sr("__dispose");
function bo(e) {
    if (!Ue(e))
        return e;
    for (const t in e)
        if (Us(e, t))
            if (!t.includes("."))
                Ue(e[t]) && bo(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let i = e
                  , o = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in i || (i[n[s]] = {}),
                    !Ue(i[n[s]])) {
                        o = !0;
                        break
                    }
                    i = i[n[s]]
                }
                o || (i[n[r]] = e[t],
                delete e[t]),
                Ue(i[n[r]]) && bo(i[n[r]])
            }
    return e
}
function Cg(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = He(n) ? n : ut(r) ? {} : {
        [e]: {}
    };
    if (ut(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: c} = a;
            l ? (s[l] = s[l] || {},
            Yr(c, s[l])) : Yr(c, s)
        } else
            ne(a) && Yr(JSON.parse(a), s)
    }
    ),
    i == null && o)
        for (const a in s)
            Us(s, a) && bo(s[a]);
    return s
}
function Rg(e) {
    return e.type
}
function mL(e, t, n) {
    let r = Ue(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = Cg(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const i = Object.keys(r);
    i.length && i.forEach(o=>{
        e.mergeLocaleMessage(o, r[o])
    }
    );
    {
        if (Ue(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(s=>{
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Ue(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(s=>{
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function jd(e) {
    return et(Gr, null, e, 0)
}
const Kd = "__INTLIFY_META__"
  , Yd = ()=>[]
  , gL = ()=>!1;
let qd = 0;
function Wd(e) {
    return (t,n,r,i)=>e(n, r, bn() || void 0, i)
}
const yL = ()=>{
    const e = bn();
    let t = null;
    return e && (t = Rg(e)[Kd]) ? {
        [Kd]: t
    } : null
}
;
function Ig(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Ns ? le : gn;
    let a = at(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : ne(e.locale) ? e.locale : Bs)
      , c = s(n && a ? n.fallbackLocale.value : ne(e.fallbackLocale) || ut(e.fallbackLocale) || He(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , u = s(Cg(l.value, e))
      , f = s(He(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(He(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : at(e.missingWarn) || Vs(e.missingWarn) ? e.missingWarn : !0
      , _ = n ? n.fallbackWarn : at(e.fallbackWarn) || Vs(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = n ? n.fallbackRoot : at(e.fallbackRoot) ? e.fallbackRoot : !0
      , A = !!e.fallbackFormat
      , g = Ze(e.missing) ? e.missing : null
      , E = Ze(e.missing) ? Wd(e.missing) : null
      , p = Ze(e.postTranslation) ? e.postTranslation : null
      , y = n ? n.warnHtmlMessage : at(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , T = !!e.escapeParameter;
    const k = n ? n.modifiers : He(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || n && n.pluralRules, O;
    O = (()=>{
        i && Md(null);
        const I = {
            version: fL,
            locale: l.value,
            fallbackLocale: c.value,
            messages: u.value,
            modifiers: k,
            pluralRules: L,
            missing: E === null ? void 0 : E,
            missingWarn: m,
            fallbackWarn: _,
            fallbackFormat: A,
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
        I.__datetimeFormatters = He(O) ? O.__datetimeFormatters : void 0,
        I.__numberFormatters = He(O) ? O.__numberFormatters : void 0;
        const F = nL(I);
        return i && Md(F),
        F
    }
    )(),
    Fi(O, l.value, c.value);
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
            Fi(O, l.value, I)
        }
    })
      , Z = ue(()=>u.value)
      , W = ue(()=>f.value)
      , K = ue(()=>d.value);
    function N() {
        return Ze(p) ? p : null
    }
    function Y(I) {
        p = I,
        O.postTranslation = I
    }
    function B() {
        return g
    }
    function ae(I) {
        I !== null && (E = Wd(I)),
        g = I,
        O.missing = E
    }
    const j = (I,F,se,pe,We,st)=>{
        D();
        let vt;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (O.fallbackContext = n ? tL() : void 0),
            vt = I(O)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (O.fallbackContext = void 0)
        }
        if (se !== "translate exists" && Et(vt) && vt === ha || se === "translate exists" && !vt) {
            const [zn,wa] = F();
            return n && b ? pe(n) : We(zn)
        } else {
            if (st(vt))
                return vt;
            throw vn(cn.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ce(...I) {
        return j(F=>Reflect.apply(Ud, null, [F, ...I]), ()=>tc(...I), "translate", F=>Reflect.apply(F.t, F, [...I]), F=>F, F=>ne(F))
    }
    function _e(...I) {
        const [F,se,pe] = I;
        if (pe && !Ue(pe))
            throw vn(cn.INVALID_ARGUMENT);
        return ce(F, se, dt({
            resolvedMessage: !0
        }, pe || {}))
    }
    function qe(...I) {
        return j(F=>Reflect.apply(Bd, null, [F, ...I]), ()=>nc(...I), "datetime format", F=>Reflect.apply(F.d, F, [...I]), ()=>Id, F=>ne(F))
    }
    function Qe(...I) {
        return j(F=>Reflect.apply(xd, null, [F, ...I]), ()=>rc(...I), "number format", F=>Reflect.apply(F.n, F, [...I]), ()=>Id, F=>ne(F))
    }
    function ct(I) {
        return I.map(F=>ne(F) || Et(F) || at(F) ? jd(String(F)) : F)
    }
    const H = {
        normalize: ct,
        interpolate: I=>I,
        type: "vnode"
    };
    function te(...I) {
        return j(F=>{
            let se;
            const pe = F;
            try {
                pe.processor = H,
                se = Reflect.apply(Ud, null, [pe, ...I])
            } finally {
                pe.processor = null
            }
            return se
        }
        , ()=>tc(...I), "translate", F=>F[ic](...I), F=>[jd(F)], F=>ut(F))
    }
    function Q(...I) {
        return j(F=>Reflect.apply(xd, null, [F, ...I]), ()=>rc(...I), "number format", F=>F[sc](...I), Yd, F=>ne(F) || ut(F))
    }
    function $(...I) {
        return j(F=>Reflect.apply(Bd, null, [F, ...I]), ()=>nc(...I), "datetime format", F=>F[oc](...I), Yd, F=>ne(F) || ut(F))
    }
    function ve(I) {
        L = I,
        O.pluralRules = L
    }
    function Fe(I, F) {
        return j(()=>{
            if (!I)
                return !1;
            const se = ne(F) ? F : l.value
              , pe = w(se)
              , We = O.messageResolver(pe, I);
            return Ai(We) || en(We) || ne(We)
        }
        , ()=>[I], "translate exists", se=>Reflect.apply(se.te, se, [I, F]), gL, se=>at(se))
    }
    function h(I) {
        let F = null;
        const se = yg(O, c.value, l.value);
        for (let pe = 0; pe < se.length; pe++) {
            const We = u.value[se[pe]] || {}
              , st = O.messageResolver(We, I);
            if (st != null) {
                F = st;
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
            for (const pe in se)
                Us(se, pe) && bo(se[pe]);
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
            for (const pe in se)
                Us(se, pe) && bo(se[pe]);
        F = se[I],
        Yr(F, u.value[I]),
        O.messages = u.value
    }
    function q(I) {
        return f.value[I] || {}
    }
    function X(I, F) {
        f.value[I] = F,
        O.datetimeFormats = f.value,
        Fd(O, I, F)
    }
    function z(I, F) {
        f.value[I] = dt(f.value[I] || {}, F),
        O.datetimeFormats = f.value,
        Fd(O, I, F)
    }
    function ee(I) {
        return d.value[I] || {}
    }
    function J(I, F) {
        d.value[I] = F,
        O.numberFormats = d.value,
        Hd(O, I, F)
    }
    function oe(I, F) {
        d.value[I] = dt(d.value[I] || {}, F),
        O.numberFormats = d.value,
        Hd(O, I, F)
    }
    qd++,
    n && Ns && (je(n.locale, I=>{
        a && (l.value = I,
        O.locale = I,
        Fi(O, l.value, c.value))
    }
    ),
    je(n.fallbackLocale, I=>{
        a && (c.value = I,
        O.fallbackLocale = I,
        Fi(O, l.value, c.value))
    }
    ));
    const ie = {
        id: qd,
        locale: x,
        fallbackLocale: U,
        get inheritLocale() {
            return a
        },
        set inheritLocale(I) {
            a = I,
            I && n && (l.value = n.locale.value,
            c.value = n.fallbackLocale.value,
            Fi(O, l.value, c.value))
        },
        get availableLocales() {
            return Object.keys(u.value).sort()
        },
        messages: Z,
        get modifiers() {
            return k
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
            return A
        },
        set fallbackFormat(I) {
            A = I,
            O.fallbackFormat = A
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
        [hL]: ve
    };
    return ie.datetimeFormats = W,
    ie.numberFormats = K,
    ie.rt = _e,
    ie.te = Fe,
    ie.tm = v,
    ie.d = qe,
    ie.n = Qe,
    ie.getDateTimeFormat = q,
    ie.setDateTimeFormat = X,
    ie.mergeDateTimeFormat = z,
    ie.getNumberFormat = ee,
    ie.setNumberFormat = J,
    ie.mergeNumberFormat = oe,
    ie[pL] = r,
    ie[ic] = te,
    ie[oc] = $,
    ie[sc] = Q,
    ie
}
const Eu = {
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
function vL({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,i)=>[...r, ...i.type === mt ? i.children : [i]], []) : t.reduce((n,r)=>{
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , {})
}
function Pg(e) {
    return mt
}
const _L = Be({
    name: "i18n-t",
    props: dt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>Et(e) || !isNaN(e)
        }
    }, Eu),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || pa({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = ne(e.plural) ? +e.plural : e.plural);
            const a = vL(t, o)
              , l = i[ic](e.keypath, a, s)
              , c = dt({}, r)
              , u = ne(e.tag) || Ue(e.tag) ? e.tag : Pg();
            return ft(u, c, l)
        }
    }
})
  , Gd = _L;
function bL(e) {
    return ut(e) && !ne(e[0])
}
function Mg(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        ne(e.format) ? s.key = e.format : Ue(e.format) && (ne(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? dt({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let c = [s.key];
        ut(l) ? c = l.map((d,m)=>{
            const _ = i[d.type]
              , b = _ ? _({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return bL(b) && (b[0].key = `${d.type}-${m}`),
            b
        }
        ) : ne(l) && (c = [l]);
        const u = dt({}, o)
          , f = ne(e.tag) || Ue(e.tag) ? e.tag : Pg();
        return ft(f, u, c)
    }
}
const EL = Be({
    name: "i18n-n",
    props: dt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Eu),
    setup(e, t) {
        const n = e.i18n || pa({
            useScope: "parent",
            __useComponent: !0
        });
        return Mg(e, t, wg, (...r)=>n[sc](...r))
    }
})
  , Jd = EL
  , TL = Be({
    name: "i18n-d",
    props: dt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Eu),
    setup(e, t) {
        const n = e.i18n || pa({
            useScope: "parent",
            __useComponent: !0
        });
        return Mg(e, t, kg, (...r)=>n[oc](...r))
    }
})
  , zd = TL;
function AL(e, t) {
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
            throw vn(cn.UNEXPECTED_ERROR);
        const u = AL(e, a.$)
          , f = Qd(c);
        return [Reflect.apply(u.t, u, [...Xd(f)]), u]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,c] = t(a);
            Ns && e.global === c && (s.__i18nWatcher = je(c.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = c,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Ns && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , c = Qd(a);
                s.textContent = Reflect.apply(l.t, l, [...Xd(c)])
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
function Qd(e) {
    if (ne(e))
        return {
            path: e
        };
    if (He(e)) {
        if (!("path"in e))
            throw vn(cn.REQUIRED_VALUE, "path");
        return e
    } else
        throw vn(cn.INVALID_VALUE)
}
function Xd(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , a = r || {};
    return ne(n) && (s.locale = n),
    Et(i) && (s.plural = i),
    Et(o) && (s.plural = o),
    [t, a, s]
}
function kL(e, t, ...n) {
    const r = He(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (at(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : Gd.name, "I18nT"].forEach(s=>e.component(s, Gd)),
    [Jd.name, "I18nN"].forEach(s=>e.component(s, Jd)),
    [zd.name, "I18nD"].forEach(s=>e.component(s, zd))),
    e.directive("t", SL(t))
}
const wL = Sr("global-vue-i18n");
function LL(e={}, t) {
    const n = at(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , i = new Map
      , [o,s] = OL(e)
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
                He(m[0])) {
                    const A = m[0];
                    f.__composerExtend = A.__composerExtend,
                    f.__vueI18nExtend = A.__vueI18nExtend
                }
                let _ = null;
                n && (_ = VL(d, f.global)),
                kL(d, f, ...m);
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
function pa(e={}) {
    const t = bn();
    if (t == null)
        throw vn(cn.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw vn(cn.NOT_INSTALLED);
    const n = CL(t)
      , r = IL(n)
      , i = Rg(t)
      , o = RL(e, i);
    if (o === "global")
        return mL(r, e, i),
        r;
    if (o === "parent") {
        let l = PL(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = dt({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        r && (l.__root = r),
        a = Ig(l),
        s.__composerExtend && (a[ac] = s.__composerExtend(a)),
        DL(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function OL(e, t, n) {
    const r = Ro();
    {
        const i = r.run(()=>Ig(e));
        if (i == null)
            throw vn(cn.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function CL(e) {
    {
        const t = Tt(e.isCE ? wL : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw vn(e.isCE ? cn.NOT_INSTALLED_WITH_PROVIDE : cn.UNEXPECTED_ERROR);
        return t
    }
}
function RL(e, t) {
    return fa(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function IL(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function PL(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = ML(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(o)),
        r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function ML(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function DL(e, t, n) {
    Mt(()=>{}
    , t),
    Ri(()=>{
        const r = n;
        e.__deleteInstance(t);
        const i = r[ac];
        i && (i(),
        delete r[ac])
    }
    , t)
}
const NL = ["locale", "fallbackLocale", "availableLocales"]
  , Zd = ["t", "rt", "d", "n", "tm", "te"];
function VL(e, t) {
    const n = Object.create(null);
    return NL.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw vn(cn.UNEXPECTED_ERROR);
        const s = lt(o.value) ? {
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
    Zd.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o || !o.value)
            throw vn(cn.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${i}`, o)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        Zd.forEach(i=>{
            delete e.config.globalProperties[`$${i}`]
        }
        )
    }
}
dL();
Qw(sL);
Xw(Iw);
Zw(yg);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = mu();
    e.__INTLIFY__ = !0,
    xw(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const ze = Bn("helper", {
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
            const {locale: e} = pa();
            return e.value === "tl" ? "tl-ph" : e.value
        },
        getNowTimestamp() {
            return Math.floor(new Date().getTime() / 1e3) + Ft().dtServer
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
            In.error({
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
  , UL = {
    path: "/",
    watch: !0,
    decode: e=>mo(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function BL(e, t) {
    var l;
    const n = {
        ...UL,
        ...t
    }
      , r = $d(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const o = i !== void 0 && i <= 0
      , s = kn(o ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = i && !o ? HL(s, i) : le(s);
    {
        const c = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , u = ()=>{
            n.readonly || vE(a.value, r[e]) || (xL(e, a.value, n),
            r[e] = kn(a.value),
            c == null || c.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var b;
            const _ = m.refresh ? (b = $d(n)) == null ? void 0 : b[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = _,
            Wt(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        Io() && Qs(()=>{
            d = !0,
            u(),
            c == null || c.close()
        }
        ),
        c && (c.onmessage = ({data: m})=>f(m)),
        n.watch ? je(a, ()=>{
            d || u()
        }
        , {
            deep: n.watch !== "shallow"
        }) : u()
    }
    return a
}
function $d(e={}) {
    return fE(document.cookie, e)
}
function FL(e, t, n={}) {
    return t == null ? Vf(e, t, {
        ...n,
        maxAge: -1
    }) : Vf(e, t, n)
}
function xL(e, t, n={}) {
    document.cookie = FL(e, t, n)
}
const eh = 2147483647;
function HL(e, t) {
    let n, r = 0;
    return Io() && Qs(()=>{
        clearTimeout(n)
    }
    ),
    _p((i,o)=>{
        function s() {
            clearTimeout(n);
            const a = t - r
              , l = a < eh ? a : eh;
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
const zr = ["de", "en", "es", "fr", "hi", "id", "pt", "ru", "th", "tl", "tr", "uz", "vi"]
  , lc = {
    de: [{
        key: "../locales/de.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/de.hCzt-tW1.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    en: [{
        key: "../locales/en.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/en.hjfIeU3n.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/es.D5apdV8k.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    fr: [{
        key: "../locales/fr.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/fr.w3LtKAO7.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/hi.CUyUKNF4.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/id.lqdvsH__.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/pt.Dh5hDv8v.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ru.olJur27I.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/th.CYVUdDdS.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/tl.1RTOkbP3.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/tr.mTX4s6kG.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/uz.qxWk9TjD.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/vi.BEERqC2m.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , jL = [()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
  , gt = {
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
  , ma = {
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
  , Tu = [{
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
  , KL = !1
  , YL = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , qL = ""
  , WL = "nuxtI18n"
  , GL = typeof window < "u";
function JL(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        ne(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function zL(e) {
    return e != null && "global"in e && "mode"in e
}
function QL(e) {
    return e != null && !("__composer"in e) && "locale"in e && lt(e.locale)
}
function Dg(e) {
    return e != null && "__composer"in e
}
function wr(e) {
    return zL(e) ? e.global : e
}
function Si(e) {
    const t = wr(e);
    return QL(t) ? t : Dg(t) ? t.__composer : t
}
function ga(e) {
    return G(wr(e).locale)
}
function XL(e) {
    return G(wr(e).locales)
}
function ZL(e) {
    return G(wr(e).localeCodes)
}
function Ng(e, t) {
    const n = wr(e);
    lt(n.locale) ? n.locale.value = t : n.locale = t
}
function Vg(e) {
    return ne(e) ? e : Qk(e) ? e.toString() : "(null)"
}
function th(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: i, defaultLocaleRouteNameSuffix: o}) {
    let s = Vg(e) + (r === "no_prefix" ? "" : i + t);
    return t === n && r === "prefix_and_default" && (s += i + o),
    s
}
function nh(e, t) {
    return Ze(e) ? e(t) : e
}
function $L(e, t) {
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
const eO = $L;
function tO(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const nO = tO;
function rO(e, t, {matcher: n=eO, comparer: r=nO}={}) {
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
function cc(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const Xi = new Map;
async function iO(e, t) {
    const n = {
        messages: {}
    };
    for (const r of e) {
        const {default: i} = await r()
          , o = typeof i == "function" ? await t.runWithContext(async()=>await i()) : i;
        Yr(o, n)
    }
    return n
}
function Ug(e, t) {
    let n = [];
    if (ut(e))
        n = e;
    else if (Ue(e)) {
        const r = [...t, "default"];
        for (const i of r)
            e[i] && (n = [...n, ...e[i].filter(Boolean)])
    } else
        ne(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function oO(e, t, n) {
    const {defaultLocale: r, initialLocale: i, localeCodes: o, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const c = Ug(s, [r, i]);
        await Promise.all(c.map(u=>rh(u, t, e)))
    }
    const l = a ? [...new Set().add(r).add(i)] : o;
    return await Promise.all(l.map(c=>rh(c, t, e))),
    e
}
async function sO(e, {key: t, load: n}) {
    let r = null;
    try {
        const i = await n().then(o=>o.default || o);
        Ze(i) ? r = await i(e) : (r = i,
        r != null && Xi && Xi.set(t, r))
    } catch (i) {
        console.error("Failed locale loading: " + i.message)
    }
    return r
}
async function uc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const i = {};
    for (const o of r) {
        let s = null;
        Xi && Xi.has(o.key) && o.cache ? s = Xi.get(o.key) : s = await sO(e, o),
        s != null && Yr(s, i)
    }
    n(e, i)
}
async function rh(e, t, n) {
    await uc(e, t, (i,o)=>{
        const s = n[i] || {};
        Yr(o, s),
        n[i] = s
    }
    )
}
function aO(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function lO(e) {
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
function cO({router: e}, t, n, r) {
    var c, u;
    if (n !== "prefix")
        return e.resolve(t);
    const [i,o] = aO(t.path, 1)
      , s = `${i}${r}${o === "" ? o : `/${o}`}`
      , a = (u = (c = e.options) == null ? void 0 : c.routes) == null ? void 0 : u.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = dt({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const uO = new Set(["prefix_and_default", "prefix_except_default"]);
function fO(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && uO.has(r)) && r !== "no_prefix"
}
const dO = fO;
function ki(e) {
    const {routesNameSeparator: t} = gt
      , n = G(e);
    return n == null || !n.name ? void 0 : Vg(n.name).split(t)[0]
}
function ya(e, t, n) {
    var i;
    if (typeof t == "string" && Un(t, {
        acceptRelative: !0
    }))
        return t;
    const r = va(e, t, n);
    return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}
function Au(e, t, n) {
    return va(e, t, n) ?? void 0
}
function hO(e, t, n) {
    return va(e, t, n) ?? void 0
}
function va(e, t, n) {
    const {router: r, i18n: i} = e
      , o = n || ga(i)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: c, trailingSlash: u} = gt
      , f = OO();
    let d;
    if (ne(t))
        if (t[0] === "/") {
            const {pathname: b, search: A, hash: g} = Dl(t)
              , E = nu(A);
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
    let m = dt({}, d);
    if ((b=>"path"in b && !!b.path && !("name"in b))(m)) {
        const b = cO(e, m, c, o)
          , A = ki(b);
        ne(A) ? (m = {
            name: th(A, o, {
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
        m.path = u ? po(m.path, !0) : Do(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = ki(r.currentRoute.value)),
        m.name = th(m.name, o, {
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
const pO = e=>e;
function mO(e) {
    var n;
    const t = e.meta || {};
    return ((n = G(t)) == null ? void 0 : n[WL]) || {}
}
function wi(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , i = ki(r);
    if (!i)
        return "";
    const o = CO()
      , s = lO(r)
      , a = mO(r)[t]
      , l = {
        ...s,
        name: i,
        params: {
            ...s.params,
            ...a
        }
    }
      , c = ya(e, l, t);
    return o(c, t)
}
function Bg(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: i} = gt
      , o = Si(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (G(o.locales) == null || G(o.baseUrl) == null)
        return s;
    const a = ga(e.i18n)
      , l = XL(e.i18n)
      , c = JL(l).find(d=>d.code === a) || {
        code: a
    }
      , u = c.iso
      , f = c.dir || i;
    return t && (s.htmlAttrs.dir = f),
    n && a && G(o.locales) && (u && (s.htmlAttrs.lang = u),
    s.link.push(...gO(e, G(l), r), ...yO(e, r, n)),
    s.meta.push(...vO(e, r, n), ..._O(c, u, r), ...bO(G(l), u, r))),
    s
}
function Su() {
    const e = Si(re().$i18n);
    return G(e.baseUrl)
}
function gO(e, t, n) {
    const r = Su()
      , {defaultLocale: i, strategy: o} = gt
      , s = [];
    if (o === YL.NO_PREFIX)
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
        const u = wi(e, c.code);
        u && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: fc(u, r),
            hreflang: l
        })
    }
    if (i) {
        const l = wi(e, i);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: fc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function Fg(e, t, n) {
    const r = e.router.currentRoute.value
      , i = Au(e, {
        ...r,
        name: ki(r)
    });
    if (!i)
        return "";
    let o = fc(i.path, t);
    const s = Ue(n) && n.canonicalQueries || []
      , a = i.query
      , l = new URLSearchParams;
    for (const u of s)
        if (u in a) {
            const f = a[u];
            ut(f) ? f.forEach(d=>l.append(u, d || "")) : l.append(u, f || "")
        }
    const c = l.toString();
    return c && (o = `${o}?${c}`),
    o
}
function yO(e, t, n) {
    const r = Su()
      , i = Fg(e, r, n);
    return i ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: i
    }] : []
}
function vO(e, t, n) {
    const r = Su()
      , i = Fg(e, r, n);
    return i ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: i
    }] : []
}
function _O(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: xg(t)
    }]
}
function bO(e, t, n) {
    return e.filter(i=>i.iso && i.iso !== t).map(i=>({
        [n]: `i18n-og-alt-${i.iso}`,
        property: "og:locale:alternate",
        content: xg(i.iso)
    }))
}
function xg(e) {
    return (e || "").replace(/-/g, "_")
}
function fc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function EO(e, t) {
    return Ho(e, "setLocale", t)
}
function TO(e, t) {
    return Ho(e, "setLocaleCookie", t)
}
function AO(e, t, n) {
    return Ho(e, "mergeLocaleMessage", t, n)
}
function SO(e, t, n, r, i) {
    return Ho(e, "onBeforeLanguageSwitch", t, n, r, i)
}
function kO(e, t, n) {
    return Ho(e, "onLanguageSwitched", t, n)
}
function ku(e) {
    return {
        i18n: e ?? re().$i18n,
        router: Jt(),
        runtimeConfig: Jn()
    }
}
async function ih(e, t, n=!1) {
    const r = gt.differentDomains
      , i = (gt.detectBrowserLanguage && gt.detectBrowserLanguage.useCookie) ?? ma.detectBrowserLanguage.useCookie
      , o = re();
    let s = !1;
    const a = ga(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await SO(t, a, e, n, o)
      , c = ZL(t);
    if (l && c && c.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const u = IO(t, "fallbackLocale");
    {
        const f = (d,m)=>AO(t, d, m);
        if (u) {
            const d = Ug(u, [e]);
            await Promise.all(d.map(m=>uc(m, lc, f)))
        }
        await uc(e, lc, f)
    }
    return i && TO(t, e),
    Ng(t, e),
    await kO(t, a, e),
    s = !0,
    [s, a]
}
function oh(e, t, n, r, i) {
    const {strategy: o, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = gt
      , c = Ze(r) ? r() : r
      , {ssg: u, callType: f, firstAccess: d, localeCookie: m} = i
      , {locale: _, stat: b, reason: A, from: g} = l ? Kg(e, n, i, c) : jg;
    if (A === "detect_ignore_on_ssg")
        return c;
    if ((g === "navigator_or_header" || g === "cookie" || g === "fallback") && _)
        return _;
    let E = _;
    return E || (a ? E = VO(Tu) : o !== "no_prefix" ? E = t(e) : l || (E = c)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function sh({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const i = re()
      , o = ku()
      , {strategy: s, differentDomains: a} = gt;
    let l = "";
    const {fullPath: c} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const u = i.$switchLocalePath(t) || i.$localePath(c, t);
        ne(u) && u && !Ml(u, c) && !u.startsWith("//") && (l = e.from && e.from.fullPath === u ? "" : u)
    }
    if ((a || !0) && n(e.to) !== t) {
        const u = wi(o, t, e.to);
        ne(u) && u && !Ml(u, c) && !u.startsWith("//") && (l = u)
    }
    return l
}
function wO(e) {
    return Ue(e) && "path"in e && "statusCode"in e
}
function ah(e, t) {
    return Uo(e, {
        redirectCode: t
    })
}
async function lh(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = ma.rootRedirect
      , {i18n: i, locale: o, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return ne(r) ? a = "/" + r : wO(r) && (a = "/" + r.path,
        t = r.statusCode),
        ah(a, t);
    if (a)
        return ah(a, t)
}
function LO(e, t) {
    ti(e, "$i18n", wr(t)),
    ti(e, "$getRouteBaseName", ki),
    ti(e, "$localePath", tn(ya)),
    ti(e, "$localeRoute", tn(Au)),
    ti(e, "$switchLocalePath", tn(wi)),
    ti(e, "$localeHead", tn(Bg))
}
function OO() {
    return e=>dO(e) && !gt.differentDomains
}
function CO() {
    return (e,t)=>pO(e)
}
function RO() {
    return ()=>{
        var o;
        const e = re()
          , t = Jn()
          , n = gt.baseUrl;
        if (Ze(n))
            return n(e);
        const r = gt.defaultLocale;
        Ze(r) && r();
        const i = (o = t == null ? void 0 : t.public) == null ? void 0 : o.i18n;
        return i != null && i.baseUrl ? i.baseUrl : n
    }
}
function Ho(e, t, ...n) {
    const r = wr(e)
      , [i,o] = [r, r[t]];
    return Reflect.apply(o, i, [...n])
}
function IO(e, t) {
    const n = wr(e);
    return G(n[t])
}
function ti(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function tn(e, t=ku()) {
    return (...n)=>e(t, ...n)
}
function Hg() {
    let e;
    return navigator.languages && (e = rO(Tu, navigator.languages)),
    e
}
function PO() {
    const e = gt.detectBrowserLanguage
      , t = e && e.cookieKey || ma.detectBrowserLanguage.cookieKey
      , n = new Date
      , r = {
        expires: new Date(n.setDate(n.getDate() + 365)),
        path: "/",
        sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
        secure: e && e.cookieCrossOrigin || e && e.cookieSecure
    };
    return e && e.cookieDomain && (r.domain = e.cookieDomain),
    BL(t, r)
}
function MO(e) {
    const t = gt.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && zr.includes(n))
        return n
}
function DO(e, t) {
    const {useCookie: n} = gt.detectBrowserLanguage || ma.detectBrowserLanguage;
    n && (e.value = t)
}
const jg = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function Kg(e, t, n, r="") {
    const {strategy: i} = gt
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
    const {redirectOn: c, alwaysRedirect: u, useCookie: f, fallbackLocale: d} = gt.detectBrowserLanguage
      , m = ne(e) ? e : e.path;
    if (i !== "no_prefix") {
        if (c === "root") {
            if (m !== "/")
                return {
                    locale: "",
                    stat: !1,
                    reason: "not_redirect_on_root"
                }
        } else if (c === "no prefix" && !u && m.match(cc(zr)))
            return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_no_prefix"
            }
    }
    let _ = "unknown", b, A;
    f && (A = b = l.value,
    _ = "cookie"),
    A || (A = Hg(),
    _ = "navigator_or_header");
    const g = A || d;
    !A && d && (_ = "fallback");
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
              , T = c === "no prefix" && !m.match(cc(zr));
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
function NO() {
    let e;
    return e = window.location.host,
    e
}
function VO(e) {
    let t = NO() || "";
    if (t) {
        const n = e.find(r=>{
            if (r && r.domain) {
                let i = r.domain;
                return Un(r.domain) && (i = r.domain.replace(/(http|https):\/\//, "")),
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
function Yg() {
    return tn(ya)
}
function xM() {
    return tn(wi)
}
const $a = ()=>({
    haptic: !0,
    coins_animation: !0
})
  , UO = Bn("settings", {
    state: ()=>({
        settings: $a()
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
            localStorage.setItem(fe.SETTINGS, JSON.stringify(this.settings))
        },
        loadSettings() {
            const e = localStorage.getItem(fe.SETTINGS);
            e || this.updateSettings({}),
            this.settings = e ? {
                ...$a(),
                ...JSON.parse(e)
            } : $a(),
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
  , HM = Be({
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
          , {showBackButton: i, onBackButtonClicked: o, hideBackButton: s} = GO();
        return je(()=>n.visible, a=>{
            a ? i() : s()
        }
        ),
        o(()=>r("click")),
        Mt(()=>n.visible && i()),
        Ri(()=>s()),
        (a,l)=>null
    }
})
  , {initData: BO, initDataUnsafe: FO, version: xO, platform: HO, isVersionAtLeast: jO, sendData: KO, close: YO} = Telegram.WebApp
  , qg = le(!1)
  , qO = (...e)=>{
    Telegram.WebApp.ready(...e),
    qg.value = !0
}
  , Wg = e=>Telegram.WebApp.platform === e
  , Gg = Wg("unknown")
  , WO = !Gg && Telegram.WebApp.initData === "";
function Jg() {
    return {
        initData: BO,
        initDataUnsafe: FO,
        version: xO,
        platform: HO,
        isVersionAtLeast: jO,
        onEvent: (...e)=>{
            Mt(()=>Telegram.WebApp.onEvent(...e)),
            Ri(()=>Telegram.WebApp.offEvent(...e))
        }
        ,
        sendData: KO,
        ready: qO,
        close: YO,
        isReady: dr(qg),
        isPlatform: Wg,
        isPlatformUnknown: Gg,
        canSendData: WO
    }
}
const zg = le(Telegram.WebApp.BackButton.isVisible);
function Qg() {
    zg.value = Telegram.WebApp.BackButton.isVisible
}
function ch(...e) {
    Telegram.WebApp.BackButton.show(...e),
    Qg()
}
function uh(...e) {
    Telegram.WebApp.BackButton.hide(...e),
    Qg()
}
function GO() {
    const {onEvent: e} = Jg()
      , t = n=>e("backButtonClicked", n);
    return {
        isBackButtonVisible: ue({
            get() {
                return zg.value
            },
            set(n) {
                n ? ch() : uh()
            }
        }),
        onBackButtonClicked: t,
        showBackButton: ch,
        hideBackButton: uh
    }
}
Telegram.WebApp;
le(Telegram.WebApp.isClosingConfirmationEnabled);
Telegram.WebApp.CloudStorage;
const {impactOccurred: JO, notificationOccurred: zO, selectionChanged: QO} = Telegram.WebApp.HapticFeedback;
function XO() {
    return {
        impactOccurred: JO,
        notificationOccurred: zO,
        selectionChanged: QO
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
Jg();
le(Telegram.WebApp.SettingsButton.isVisible);
le(Telegram.WebApp.colorScheme);
le(Telegram.WebApp.themeParams);
le(Telegram.WebApp.headerColor);
le(Telegram.WebApp.backgroundColor);
le(Telegram.WebApp.isExpanded);
le(Telegram.WebApp.viewportHeight);
le(Telegram.WebApp.viewportStableHeight);
const Pn = Bn("ui", {
    state: ()=>({
        bottom_sheet_close_visible: !0,
        bottom_sheet_open: !1,
        language_code: "",
        link_discord: "https://discord.gg/d2Q6VH8Psp",
        link_medium: "https://medium.com/@hamster_kombat",
        link_telegram: "https://t.me/hamster_kombat",
        link_telegram_chat: "https://t.me/hamster_kombat_chat",
        link_twitter: "https://twitter.com/hamster_kombat",
        link_whitepaper: "/docs/hk_wp_rev.0.2_july_30__2024.pdf",
        modalOpen: !1,
        notificationLevelUp: null,
        onboarding: !1,
        onboardingStep: 1,
        progress_loading: 0,
        scroll_gap: 2,
        taskAirdropNotification: !1,
        taskNotification: !1
    }),
    actions: {
        async copyText(e) {
            const t = In.promise({
                title: re().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success(re().$i18n.t("messages.copy_success")),
                ze().trackEvent("copy_text_success_writeText")
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
                ze().trackEvent("copy_text_success_exec")) : (t == null || t.reject(re().$i18n.t("messages.copy_error")),
                ze().trackEvent("copy_text_error"))
            }
        },
        goBackButton() {
            const {$event: e} = re()
              , t = Yg();
            this.bottom_sheet_open ? e("bs:close") : this.modalOpen ? e("modal:close") : Uo(t(xo.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject(re().$i18n.t("messages.oops")),
            this.notificationLevelUp = null,
            Ft().setStop(!1))
        },
        setBottomSheetOpen(e) {
            this.bottom_sheet_open = e
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
            UO().settings.haptic && XO().impactOccurred(e)
        },
        isRu(e) {
            return this.language_code === "ru" || e === "ru"
        },
        isYP() {
            return ["RU", "BY", "KZ", "UZ", "KG", "AZ", "AM", "GE"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isRUBY() {
            return ["RU", "BY"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isPECLMX() {
            return ["PE", "CL", "MX"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isBR() {
            return ["BR"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isET() {
            return ["ET"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isGamesRu() {
            return ["AZ", "AM", "BY", "KZ", "KG", "MD", "RU", "TJ", "TM"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isGamesUz() {
            return ["UZ"].indexOf(Yt().location.country_code ?? "") > -1
        },
        isGamesAr() {
            return !1
        },
        isGamesFr() {
            return !1
        }
    }
})
  , el = Bn("morse", {
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
            (e = this.dailyCipher) != null && e.cipher && (this.dailyCipher.cipher.startsWith(this.morse_decoded) ? Pn().useHapticFeedback("heavy") : this.resetMorse(),
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
            return e.split("/").map(t=>qk[t.trim()] || "").join("")
        },
        convertTapsToMorse() {
            return this.taps.map(e=>e.type).join("")
        },
        playSound(e) {
            const t = new Audio("/sound/dot.wav")
              , n = new Audio("/sound/dash.wav");
            let r;
            e === Nr.Dot ? r = t.cloneNode() : e === Nr.Dash && (r = n.cloneNode()),
            r == null || r.play()
        },
        async postClaimDailyCipher() {
            return await $e.post("/clicker/claim-daily-cipher", {
                body: {
                    cipher: this.morse_decoded
                }
            }).then(e=>(Pn().useHapticFeedback("heavy"),
            Ft().setUserResponseData(e),
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
                    type: Nr.SymbolSeparator,
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
            this.last_input = e === Nr.Dot ? "●" : "—"
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
            this.dailyCipherInterval = Rt(()=>{
                var e;
                if ((e = this.dailyCipher) != null && e.remainSeconds) {
                    let t = 1;
                    const n = ze().getNowTimestamp();
                    this.timestamp_daily_cipher && n - this.timestamp_daily_cipher > 1 && (t = n - this.timestamp_daily_cipher),
                    this.dailyCipher.remainSeconds -= t,
                    this.dailyCipher.remainSeconds <= 0 && (this.dailyCipher.remainSeconds = 0,
                    this.resetDailyCipherInterval(),
                    setTimeout(async()=>{
                        await Qt().postConfig().then(()=>{
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
                const n = Date.now() - this.tapStartTime < this.tapThreshold ? Nr.Dot : Nr.Dash;
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
  , tl = Bn({
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
            return await $e.post("/clicker/start-keys-minigame", {}).then(e=>(Ft().setUserResponseData(e),
            e != null && e.dailyKeysMiniGame ? (e.dailyKeysMiniGame.remainSecondsToGuess += .1,
            this.setDailyKeysMiniGame(e.dailyKeysMiniGame)) : this.dailyKeysMiniGame = null,
            e))
        },
        async postClaimDailyKeysMiniGame() {
            return await $e.post("/clicker/claim-daily-keys-minigame", {
                body: {
                    cipher: this.cipher
                }
            }).then(e=>(Ft().setUserResponseData(e),
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
            this.matchMiniGameInterval = Rt(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToGuess) {
                    let t = 1;
                    const n = ze().getNowTimestamp();
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
            this.replayMiniGameInterval = Rt(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToNextAttempt) {
                    let t = 1;
                    const n = ze().getNowTimestamp();
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
            this.dailyMiniGameInterval = Rt(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSeconds) {
                    let t = 1;
                    const n = ze().getNowTimestamp();
                    this.timestamp_daily_minigame && n - this.timestamp_daily_minigame > 1 && (t = n - this.timestamp_daily_minigame),
                    this.dailyKeysMiniGame.remainSeconds -= t,
                    this.timestamp_daily_minigame = n,
                    this.dailyKeysMiniGame.remainSeconds <= 0 && (this.dailyKeysMiniGame.remainSeconds = 0,
                    this.resetDailyMiniGameInterval(),
                    this.show && (this.hideGamePage(),
                    In.promise({}).reject({
                        title: re().$i18n.t("minigame.lose_title"),
                        duration: 4e3
                    }),
                    ze().trackEvent("minigame_puzzle_loose_period"),
                    Pn().useHapticFeedback("heavy")),
                    this.dailyKeysMiniGame = null,
                    setTimeout(async()=>{
                        await Qt().postConfig()
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
                  , o = "- - - - - -. - - - - - -.- - 0 0 - -.- - - - - -.- - - - - -.- - - - - -"
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
  , Qt = Bn("config", {
    state: ()=>({
        achievementRareTypes: [],
        achievementTypes: [],
        achievements: [],
        clickerConfigVersion: "",
        exchanges: [],
        feature: [],
        guidLink: null,
        levelUpEarnPerTap: null,
        levelUpMaxTaps: null,
        maxPassiveDtSeconds: null,
        maxPassiveDtSeconds_local: 0,
        referralBonus: {},
        skins: [],
        subscribeChannelUrl: "",
        telegramAuditory: 39,
        userLevels_balanceCoins: []
    }),
    actions: {
        mergeSkinsAndState(e) {
            const t = new Map;
            e.forEach(n=>{
                t.set(n.id, n)
            }
            ),
            this.skins = this.skins.map(n=>{
                const r = t.get(n.id);
                return r ? {
                    ...n,
                    ...r
                } : n
            }
            )
        },
        async postConfig() {
            return await $e.post("/clicker/config", {}).then(e=>{
                var t, n, r, i, o, s, a, l, c, u, f, d;
                return (t = e == null ? void 0 : e.clickerConfig) != null && t.maxPassiveDtSeconds && this.setMaxPassiveDtSeconds(e.clickerConfig.maxPassiveDtSeconds),
                (n = e == null ? void 0 : e.clickerConfig) != null && n.exchanges && this.setExchanges(e.clickerConfig.exchanges),
                (r = e == null ? void 0 : e.clickerConfig) != null && r.userLevels_balanceCoins && this.setUserLevelsBalanceCoins(e.clickerConfig.userLevels_balanceCoins),
                (i = e == null ? void 0 : e.clickerConfig) != null && i.levelUp && this.setLevelUp(e.clickerConfig.levelUp),
                (o = e == null ? void 0 : e.clickerConfig) != null && o.guidLink && this.setGuidLink(e.clickerConfig.guidLink),
                (s = e == null ? void 0 : e.clickerConfig) != null && s.referral && this.setReferralBonus(e.clickerConfig.referral),
                e != null && e.dailyCipher ? el().setDailyCipher(e.dailyCipher) : (el().dailyCipher = null,
                el().resetMorse()),
                tl().resetMiniGame(),
                e != null && e.dailyKeysMiniGame ? tl().setDailyKeysMiniGame(e.dailyKeysMiniGame) : tl().dailyKeysMiniGame = null,
                e != null && e.feature && this.setFeature(e.feature),
                (a = e == null ? void 0 : e.clickerConfig) != null && a.skins && this.setSkins(e.clickerConfig.skins),
                (l = e == null ? void 0 : e.clickerConfig) != null && l.telegramAuditory && this.setTelegramAuditory(e.clickerConfig.telegramAuditory),
                (c = e == null ? void 0 : e.clickerConfig) != null && c.subscribeChannelUrl && this.setTelegramLink(e.clickerConfig.subscribeChannelUrl),
                Ft().exchangeId && Ft().setExchangeId(Ft().exchangeId),
                e != null && e.clickerConfigVersion && this.setClickerConfigVersion(e.clickerConfigVersion),
                (u = e == null ? void 0 : e.clickerConfig) != null && u.achievementRareTypes && this.setAchievementRareTypes(e.clickerConfig.achievementRareTypes),
                (f = e == null ? void 0 : e.clickerConfig) != null && f.achievementTypes && this.setAchievementTypes(e.clickerConfig.achievementTypes),
                (d = e == null ? void 0 : e.clickerConfig) != null && d.achievements && this.setAchievements(e.clickerConfig.achievements),
                e
            }
            )
        },
        setAchievementRareTypes(e) {
            this.achievementRareTypes = e
        },
        setAchievementTypes(e) {
            this.achievementTypes = e
        },
        setAchievements(e) {
            this.achievements = e
        },
        setClickerConfigVersion(e) {
            this.clickerConfigVersion = e
        },
        setExchanges(e=[]) {
            this.exchanges = e
        },
        setFeature(e) {
            this.feature = e
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
        setLevelUp(e) {
            this.levelUpEarnPerTap = e.earnPerTap,
            this.levelUpMaxTaps = e.maxTaps
        },
        setMaxPassiveDtSeconds(e) {
            this.maxPassiveDtSeconds = e
        },
        setReferralBonus(e) {
            this.referralBonus = e
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
        setUserLevelsBalanceCoins(e=[]) {
            this.userLevels_balanceCoins = e
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
  , jM = "data:image/png;base64,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"
  , KM = "data:image/webp;base64,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"
  , ZO = "data:image/png;base64,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"
  , YM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , qM = "data:image/png;base64,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"
  , WM = "data:image/png;base64,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"
  , GM = "data:image/png;base64,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"
  , $O = Bn("boost", {
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
                return ZO
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
                In.error({
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
                    timestamp: ze().getNowTimestamp()
                }
            }).then(t=>(Pn().useHapticFeedback("heavy"),
            Ft().setUserResponseData(t),
            t != null && t.upgradesForBuy && dc().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            ze().trackEvent(ze().camelToSnake(e)),
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
  , dc = Bn("upgrade", {
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
                timestamp: ze().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = Rt(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = ze().getNowTimestampWithMS()
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
                    timestamp: ze().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, i;
                Pn().useHapticFeedback("heavy"),
                Ft().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && $O().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((i = (r = this.upgradesForBuy) == null ? void 0 : r.find(o=>o.id === e)) == null ? void 0 : i.level) ?? 1;
                return ze().trackEvent(`mine_${ze().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await $e.post("/clicker/claim-daily-combo", {}).then(e=>(Pn().useHapticFeedback("heavy"),
            Ft().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await $e.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
            e != null && e.sections && this.setSections(e.sections),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e)).catch(e=>{
                In.error({
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
            this.isDailyComboHasNewOpenedItems((e == null ? void 0 : e.upgradeIds) ?? [], (t == null ? void 0 : t.upgradeIds) ?? []) && !Ft().first_time_load && setTimeout(()=>{
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
            this.getDailyComboNotClaimed && !Ft().first_time_load && (ze().trackEvent(hg.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = re();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return ze().compareWithEmptyOldArray(e, this.dailyComboCount);
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
                this.cooldowns[n.id].timestamp = ze().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
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
            this.dailyComboInterval = Rt(()=>{
                var e;
                if ((e = this.dailyCombo) != null && e.remainSeconds) {
                    let t = 1;
                    const n = ze().getNowTimestamp();
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
  , Ft = Bn("clicker", {
    state: ()=>({
        achievements: [],
        animate_interval: null,
        availableTaps: null,
        balanceCoins: null,
        balanceKeys: 0,
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
        skin: null,
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
        totalKeys: 0,
        achievements_show: !1,
        achievements_interval: null
    }),
    actions: {
        addBalance(e) {
            const r = (Ve(this.balanceCoins) ?? 0) + e
              , i = e / 50
              , o = Math.floor(800 / e * i);
            let s = Rt(()=>{
                this.balanceCoins += i,
                this.balanceCoins >= r && (this.balanceCoins = r,
                clearInterval(s),
                s = null)
            }
            , o)
        },
        animateBalance() {
            this.balanceCoins < this.balanceTarget && (this.animate_interval = Rt(()=>{
                if (this.balanceCoins >= this.balanceTarget) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins++
            }
            , Xt.BALANCE_ANIMATION_SPEED)),
            this.balanceTarget < this.balanceCoins && (this.animate_interval = Rt(()=>{
                if (this.balanceTarget >= this.balanceCoins) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins--
            }
            , Xt.BALANCE_ANIMATION_SPEED))
        },
        calcEnergy() {
            let e = 1;
            const t = ze().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (Qt().maxPassiveDtSeconds_local <= (Qt().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = ze().getNowTimestamp();
                this.timestamp_passive && t - this.timestamp_passive > 1 && (e = t - this.timestamp_passive);
                const n = this.earnPassivePerSec ?? 0;
                this.totalCoins = this.totalCoins + e * n,
                this.balanceCoins = this.balanceCoins + e * n,
                Qt().maxPassiveDtSeconds_local += e,
                this.timestamp_passive = t
            }
        },
        checkAchievements() {
            var e;
            this.clearAchievementsInterval(),
            (e = this.achievements) != null && e.filter(t=>!t.isClaimed).length && (this.achievements_interval = Rt(()=>{
                Yt().loading || (this.clearAchievementsInterval(),
                this.setAchievementsShow(!0))
            }
            , 500))
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !Yt().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            Pn().notificationLevelUp = In.promise({
                title: re().$i18n.t("messages.level_up_processing")
            }),
            this.earnStartInterval())
        },
        clearAchievementsInterval() {
            this.achievements_interval && (clearInterval(this.achievements_interval),
            this.achievements_interval = null)
        },
        earn() {
            this.animate_interval !== null && (clearInterval(this.animate_interval),
            this.animate_interval = null,
            this.balanceCoins = this.balanceTarget),
            this.tap_interval === null && (this.tap_interval = Rt(()=>{
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
            , Xt.TAP_INTERVAL)
        },
        async earnStartInterval() {
            re().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${ze().getNowTimestamp()}
              timestamp dt: ${ze().getNowTimestamp() - this.lastSyncUpdate}
            `),
            await this.postTap(this.storageSyncTapsGet()),
            clearTimeout(this.sync_tap_timeout),
            this.sync_tap_timeout = null,
            this.tapDuration = 0,
            clearInterval(this.tap_interval),
            this.tap_interval = null
        },
        getCoinsToLevelUpByLevel(e) {
            var t, n;
            return ((n = (t = Qt().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === e)) == null ? void 0 : n.coinsToLeveUp) ?? 0
        },
        async postAchievementStat(e) {
            return await $e.post("/clicker/achievement-stat", {
                body: {
                    achievementIds: e
                }
            }).then(t=>t)
        },
        async postExchangeReferralStat(e=0) {
            return await $e.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postReferrerInfo() {
            return await $e.post("/clicker/referrer-info", {}).then(e=>(e.referrer && this.setReferrer(e.referrer),
            e))
        },
        async postSendReferralLink() {
            return await $e.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSkinBuy(e="skin0") {
            return await $e.post("/clicker/buy-skin", {
                body: {
                    skinId: e,
                    timestamp: ze().getNowTimestamp()
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
        async postSkinsGet() {
            return await $e.post("/clicker/get-skin", {
                body: {}
            }).then(e=>(e.skins && Qt().mergeSkinsAndState(e.skins),
            e))
        },
        async postSync() {
            return await $e.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(fe.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(fe.SYNC_AVAILABLE_TAPS);
            return await $e.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : ze().getNowTimestamp()
                }
            }).then(i=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(i),
                this.storageSyncTapsSubtract(e);
                const o = ze().getNowTimestamp() - this.lastSyncUpdate;
                return o > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * o)),
                this.timer_leveUp || this.timerLevelUpStart(),
                i
            }
            ).catch(i=>{
                In.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_tap")
                }),
                Pn().rejectNotificationLevelUp()
            }
            )
        },
        async postUserClaimDailyCombo(e) {
            return await $e.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserExchangeId(e) {
            return await $e.post("/clicker/select-exchange", {
                body: {
                    exchangeId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        setAchievements(e) {
            this.achievements = e
        },
        setAchievementsShow(e) {
            this.achievements_show = e
        },
        setAvailableTaps(e) {
            this.availableTaps = e,
            localStorage.setItem(fe.SYNC_AVAILABLE_TAPS, String(e))
        },
        setBalanceCoins(e) {
            this.balanceCoins = e
        },
        setBalanceKeys(e) {
            this.balanceKeys = e
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
                const n = (t = Qt().exchanges) == null ? void 0 : t.find(r=>r.id === e);
                n && this.setCurrentExchange(n)
            }
        },
        setExchangeRefLinks(e={}) {
            this.exchangeRefLinks = e
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
            Qt().maxPassiveDtSeconds_local = 0
        },
        setLevel(e) {
            var t, n;
            this.level = e,
            this.coinsToLevelUp = (n = (t = Qt().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === this.level)) == null ? void 0 : n.coinsToLeveUp
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
        setSkinState(e={}) {
            this.skin = e
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
        setUserResponseData(e) {
            var t, n, r, i, o, s, a, l, c, u, f, d, m, _, b, A, g, E, p, y, T, k, L;
            if ((t = e == null ? void 0 : e.clickerUser) != null && t.id && this.setId(e.clickerUser.id),
            (n = e == null ? void 0 : e.clickerUser) != null && n.totalKeys && this.setTotalKeys(e.clickerUser.totalKeys),
            (r = e == null ? void 0 : e.clickerUser) != null && r.balanceKeys && this.setBalanceKeys(e.clickerUser.balanceKeys),
            (i = e == null ? void 0 : e.clickerUser) != null && i.totalCoins && this.setTotalCoins(e.clickerUser.totalCoins),
            (o = e == null ? void 0 : e.clickerUser) != null && o.balanceCoins && (this.first_time_load ? (s = e == null ? void 0 : e.clickerUser) != null && s.lastPassiveEarn && ((a = e == null ? void 0 : e.clickerUser) == null ? void 0 : a.lastPassiveEarn) > 1 ? (this.setBalanceCoins(e.clickerUser.balanceCoins - e.clickerUser.lastPassiveEarn),
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : Yt().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((l = e == null ? void 0 : e.clickerUser) == null ? void 0 : l.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (u = e == null ? void 0 : e.clickerUser) != null && u.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (d = e == null ? void 0 : e.clickerUser) != null && d.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (m = e == null ? void 0 : e.clickerUser) != null && m.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (b = e == null ? void 0 : e.clickerUser) != null && b.upgradesForBuy && dc().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (A = e == null ? void 0 : e.clickerUser) != null && A.upgrades && dc().setMyUpgrades(e.clickerUser.upgrades),
            (g = e == null ? void 0 : e.clickerUser) != null && g.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (E = e == null ? void 0 : e.clickerUser) != null && E.referrerId && this.setReferrerId(e.clickerUser.referrerId),
            (p = e == null ? void 0 : e.clickerUser) != null && p.level) {
                const O = (y = e == null ? void 0 : e.clickerUser) == null ? void 0 : y.level;
                if (this.level && this.level < O) {
                    const {$event: C} = re();
                    C("level-up:success")
                }
                setTimeout(()=>{
                    this.setLevel(O)
                }
                , 50)
            }
            (T = e == null ? void 0 : e.clickerUser) != null && T.exchangeRefLinks && this.setExchangeRefLinks(e.clickerUser.exchangeRefLinks),
            (k = e == null ? void 0 : e.clickerUser) != null && k.skin && this.setSkinState(e.clickerUser.skin),
            (L = e == null ? void 0 : e.clickerUser) != null && L.achievements && (this.setAchievements(e.clickerUser.achievements),
            this.checkAchievements())
        },
        startTimers() {
            Yt().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(fe.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(fe.SYNC_TAPS, String(n + e)),
            localStorage.setItem(fe.SYNC_TIMESTAMP_TAPS, String(ze().getNowTimestamp()))
        },
        storageSyncTapsGet() {
            const e = localStorage.getItem(fe.SYNC_TAPS);
            return e ? parseInt(e) ?? 0 : 0
        },
        storageSyncTapsReset() {
            localStorage.removeItem(fe.SYNC_TAPS)
        },
        storageSyncTapsSet(e) {
            localStorage.setItem(fe.SYNC_TAPS, String(e))
        },
        storageSyncTapsSubtract(e) {
            const t = localStorage.getItem(fe.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(fe.SYNC_TAPS, String(Math.max(0, n - e)))
        },
        timerEnergyReset() {
            this.timer_energy && clearInterval(this.timer_energy),
            this.timer_energy = null
        },
        timerEnergyStart() {
            this.timer_energy = Rt(this.calcEnergy, Xt.CALC_INTERVAL)
        },
        timerLevelUpReset() {
            this.timer_leveUp && clearInterval(this.timer_leveUp),
            this.timer_leveUp = null
        },
        timerLevelUpStart() {
            this.level !== this.getMaxUserLevel && this.timer_leveUp === null && (this.timer_leveUp = Rt(this.checkLevelUp, Xt.CALC_INTERVAL))
        },
        timerPassiveReset() {
            this.timer_passive && clearInterval(this.timer_passive),
            this.timer_passive = null
        },
        timerPassiveStart() {
            this.timer_passive = Rt(this.calcPassive, Xt.CALC_INTERVAL)
        },
        timerSyncReset() {
            this.timer_sync && clearInterval(this.timer_sync),
            this.timer_sync = null
        },
        timerSyncStart() {
            this.timer_sync = Rt(()=>{
                this.postSync().catch(e=>{
                    In.error({
                        title: re().$i18n.t("messages.request_error"),
                        message: re().$i18n.t("messages.no_sync")
                    }),
                    Pn().rejectNotificationLevelUp()
                }
                )
            }
            , Xt.SYNC_INTERVAL)
        }
    },
    getters: {
        getUserLevel() {
            return (this.level ?? 1) > 11 ? 11 : this.level ?? 1
        },
        getMaxUserLevel() {
            let e = 0;
            for (const t of Qt().userLevels_balanceCoins)
                t.level !== null && (e = Math.max(e, t.level));
            return e
        },
        getProgressLevel() {
            var n;
            let e = 0;
            const t = (n = Qt().userLevels_balanceCoins) == null ? void 0 : n.find(r=>r.level === this.level);
            return this.level === this.getMaxUserLevel && (e = 100),
            this.level && this.level !== this.getMaxUserLevel && t && (e = this.balanceCoins * 100 / t.coinsToLeveUp),
            Math.min(e, 100)
        },
        getUserBalanceFormatted() {
            return ze().numberFormat(this.balanceCoins, !1)
        }
    }
})
  , eC = async(e,t)=>{
    var i, o;
    const n = re();
    Yt(n.$pinia);
    const r = Ft(n.$pinia);
    e && !((o = (i = e.name) == null ? void 0 : i.toString()) != null && o.includes("index")) && !r.exchangeId && Uo(xo.GAME_SETTINGS_EXCHANGE)
}
  , tC = async e=>{
    let t, n;
    const r = ([t,n] = On(()=>Fm(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , nC = [XA, eC, tC]
  , Zi = {};
function rC(e, t, n) {
    const {pathname: r, search: i, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const c = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let u = o.slice(c);
        return u[0] !== "/" && (u = "/" + u),
        Pf(u, "")
    }
    const a = Pf(r, e)
      , l = !n || Ml(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : i) + o
}
const iC = Dt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var b, A;
        let t, n, r = Jn().app.baseURL;
        jt.hashMode && !r.includes("#") && (r += "#");
        const i = ((b = jt.history) == null ? void 0 : b.call(jt, r)) ?? (jt.hashMode ? _A(r) : zm(r))
          , o = ((A = jt.routes) == null ? void 0 : A.call(jt, hd)) ?? hd;
        let s;
        const a = rC(r, window.location, e.payload.path)
          , l = KA({
            ...jt,
            scrollBehavior: (g,E,p)=>{
                if (E === un) {
                    s = p;
                    return
                }
                if (jt.scrollBehavior) {
                    if (l.options.scrollBehavior = jt.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const y = l.beforeEach(()=>{
                            y(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return jt.scrollBehavior(g, un, s || p)
                }
            }
            ,
            history: i,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const c = gn(l.currentRoute.value);
        l.afterEach((g,E)=>{
            c.value = E
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: ()=>c.value
        });
        const u = gn(l.resolve(a))
          , f = ()=>{
            u.value = l.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        l.afterEach((g,E)=>{
            var p, y, T, k;
            ((y = (p = g.matched[0]) == null ? void 0 : p.components) == null ? void 0 : y.default) === ((k = (T = E.matched[0]) == null ? void 0 : T.components) == null ? void 0 : k.default) && f()
        }
        );
        const d = {};
        for (const g in u.value)
            Object.defineProperty(d, g, {
                get: ()=>u.value[g]
            });
        e._route = Ci(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = aa();
        try {
            [t,n] = On(()=>l.isReady()),
            await t,
            n()
        } catch (g) {
            [t,n] = On(()=>e.runWithContext(()=>si(g))),
            await t,
            n()
        }
        const _ = e.payload.state._layout;
        return l.beforeEach(async(g,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            g.meta = At(g.meta),
            e.isHydrating && _ && !qr(g.meta.layout) && (g.meta.layout = _),
            e._processingMiddleware = !0;
            {
                const y = new Set([...nC, ...e._middleware.global]);
                for (const T of g.matched) {
                    const k = T.meta.middleware;
                    if (k)
                        for (const L of fu(k))
                            y.add(L)
                }
                for (const T of y) {
                    const k = typeof T == "string" ? e._middleware.named[T] || await ((p = Zi[T]) == null ? void 0 : p.call(Zi).then(O=>O.default || O)) : T;
                    if (!k)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const L = await e.runWithContext(()=>k(g, E));
                    if (!e.payload.serverRendered && e.isHydrating && (L === !1 || L instanceof Error)) {
                        const O = L || Fl({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>si(O)),
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
            !e.isHydrating && m.value && await e.runWithContext(CE),
            p && await e.callHook("page:loading:end"),
            g.matched.length === 0 && await e.runWithContext(()=>si(Fl({
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
                l.options.scrollBehavior = jt.scrollBehavior
            } catch (g) {
                await e.runWithContext(()=>si(g))
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
  , hc = globalThis.requestIdleCallback || (e=>{
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
  , oC = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , wu = e=>{
    const t = re();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        hc(e)
    }
    ) : hc(e)
}
  , sC = Dt({
    name: "nuxt:payload",
    setup(e) {
        Jt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await Jf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        wu(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                No(n).protocol || await Jf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(ca, 1e3)
        }
        )
    }
})
  , aC = Dt(e=>{
    let t;
    async function n() {
        const r = await ca();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const i = await $fetch(ru("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && e.hooks.callHook("app:manifest:update", i)
    }
    wu(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function Xg(e, t=Jt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const i = t._preloadPromises = t._preloadPromises || [];
    if (i.length > 4)
        return Promise.all(i).then(()=>Xg(e, t));
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
function lC(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = mo(sessionStorage.getItem("nuxt:reload") || "{}")
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
const cC = (...e)=>e.find(t=>t !== void 0);
function Zg(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, i) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return fh(r, e.trailingSlash);
        const o = "path"in r && r.path !== void 0 ? r.path : i(r).path
          , s = {
            ...r,
            path: fh(o, e.trailingSlash)
        };
        return "name"in s && delete s.name,
        s
    }
    return Be({
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
            const o = Jt()
              , s = Jn()
              , a = ue(()=>{
                const _ = r.to || r.href || "";
                return n(_, o.resolve)
            }
            )
              , l = ue(()=>typeof a.value == "string" && Un(a.value, {
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
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !fC()) {
                const b = re();
                let A, g = null;
                Mt(()=>{
                    const E = uC();
                    wu(()=>{
                        A = hc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (g = E.observe(d.value, async()=>{
                                g == null || g(),
                                g = null;
                                const y = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                                await Promise.all([b.hooks.callHook("link:prefetch", y).catch(()=>{}
                                ), !u.value && Xg(a.value, o).catch(()=>{}
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
                _n(()=>{
                    A && oC(A),
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
                    ft(Wr("RouterLink"), p, i.default)
                }
                const _ = typeof a.value == "object" ? ((g = o.resolve(a.value)) == null ? void 0 : g.href) ?? null : a.value && !r.external && !l.value ? n(Ii(s.app.baseURL, a.value), o.resolve) : a.value || null
                  , b = r.target || null
                  , A = cC(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || c.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!i.default)
                        return null;
                    const p = ()=>Uo(_, {
                        replace: r.replace,
                        external: r.external
                    });
                    return i.default({
                        href: _,
                        navigate: p,
                        get route() {
                            if (!_)
                                return;
                            const y = No(_);
                            return {
                                path: y.pathname,
                                fullPath: y.pathname,
                                get query() {
                                    return nu(y.search)
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
                        rel: A,
                        target: b,
                        isExternal: u.value,
                        isActive: !1,
                        isExactActive: !1
                    })
                }
                return ft("a", {
                    ref: d,
                    href: _,
                    rel: A,
                    target: b
                }, (E = i.default) == null ? void 0 : E.call(i))
            }
        }
    })
}
const JM = Zg(MT);
function fh(e, t) {
    const n = t === "append" ? po : Do;
    return Un(e) && !e.startsWith("http") ? e : n(e, !0)
}
function uC() {
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
function fC() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const dC = Dt(e=>{
    const t = kk();
    return e.vueApp.use(t),
    Fo(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , hC = Dt({
    name: "nuxt:global-components"
})
  , hr = {
    default: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/default.Cy39KhnI.js"), __vite__mapDeps([33, 16, 2, 8, 3, 18, 22, 28, 1, 6]), import.meta.url).then(e=>e.default || e),
    main: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/main.-KsJAdfZ.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , pC = Dt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Jt();
        e.hooks.hook("app:mounted", ()=>{
            t.beforeEach(async n=>{
                var i;
                const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
                r && typeof hr[r] == "function" && await hr[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n=>{
            if (Un(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const i = r.meta.layout;
            let o = fu(r.meta.middleware);
            o = o.filter(s=>typeof s == "string");
            for (const s of o)
                typeof Zi[s] == "function" && Zi[s]();
            i && typeof hr[i] == "function" && hr[i]()
        }
        )
    }
});
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function zM(e) {
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
var $g = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
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
          , A = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
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
          , k = {};
        k[T] = E;
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
                k[ae] && (B = ae),
                N && (k[ae] = N,
                B = ae);
                var j = K.split("-");
                if (!B && j.length > 1)
                    return W(j[0])
            } else {
                var ce = K.name;
                k[ce] = K,
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
                        var j = B.match(A);
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
                  , qe = this.$W
                  , Qe = this.$M
                  , ct = this.$D
                  , tt = "set" + (this.$u ? "UTC" : "");
                switch (j) {
                case m:
                    return ae ? ce(1, 0) : ce(31, 11);
                case f:
                    return ae ? ce(1, Qe) : ce(0, Qe + 1);
                case u:
                    var H = this.$locale().weekStart || 0
                      , te = (qe < H ? qe + 7 : qe) - H;
                    return ce(ae ? ct - te : ct + (6 - te), Qe);
                case c:
                case _:
                    return _e(tt + "Hours", 0);
                case l:
                    return _e(tt + "Minutes", 1);
                case a:
                    return _e(tt + "Seconds", 2);
                case s:
                    return _e(tt + "Milliseconds", 3);
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
                    var qe = this.clone().set(_, 1);
                    qe.$d[ce](_e),
                    qe.init(),
                    this.$d = qe.set(_, Math.min(this.$D, qe.daysInMonth())).$d
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
                  , ce = function(Qe) {
                    var ct = D(ae);
                    return x.w(ct.date(ct.date() + Math.round(Qe * N)), ae)
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
                  , qe = this.$d.getTime() + N * _e;
                return x.w(qe, this)
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
                  , qe = this.$M
                  , Qe = B.weekdays
                  , ct = B.months
                  , tt = B.meridiem
                  , H = function($, ve, Fe, h) {
                    return $ && ($[ve] || $(Y, ae)) || Fe[ve].slice(0, h)
                }
                  , te = function($) {
                    return x.s(ce % 12 || 12, $, "0")
                }
                  , Q = tt || function($, ve, Fe) {
                    var h = $ < 12 ? "AM" : "PM";
                    return Fe ? h.toLowerCase() : h
                }
                ;
                return ae.replace(g, function($, ve) {
                    return ve || function(Fe) {
                        switch (Fe) {
                        case "YY":
                            return String(Y.$y).slice(-2);
                        case "YYYY":
                            return x.s(Y.$y, 4, "0");
                        case "M":
                            return qe + 1;
                        case "MM":
                            return x.s(qe + 1, 2, "0");
                        case "MMM":
                            return H(B.monthsShort, qe, ct, 3);
                        case "MMMM":
                            return H(ct, qe);
                        case "D":
                            return Y.$D;
                        case "DD":
                            return x.s(Y.$D, 2, "0");
                        case "d":
                            return String(Y.$W);
                        case "dd":
                            return H(B.weekdaysMin, Y.$W, Qe, 2);
                        case "ddd":
                            return H(B.weekdaysShort, Y.$W, Qe, 3);
                        case "dddd":
                            return Qe[Y.$W];
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
                var ae, j = this, ce = x.p(Y), _e = D(N), qe = (_e.utcOffset() - this.utcOffset()) * r, Qe = this - _e, ct = function() {
                    return x.m(j, _e)
                };
                switch (ce) {
                case m:
                    ae = ct() / 12;
                    break;
                case f:
                    ae = ct();
                    break;
                case d:
                    ae = ct() / 3;
                    break;
                case u:
                    ae = (Qe - qe) / 6048e5;
                    break;
                case c:
                    ae = (Qe - qe) / 864e5;
                    break;
                case l:
                    ae = Qe / i;
                    break;
                case a:
                    ae = Qe / r;
                    break;
                case s:
                    ae = Qe / n;
                    break;
                default:
                    ae = Qe
                }
                return B ? ae : x.a(ae)
            }
            ,
            K.daysInMonth = function() {
                return this.endOf(f).$D
            }
            ,
            K.$locale = function() {
                return k[this.$L]
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
        D.en = k[T],
        D.Ls = k,
        D.p = {},
        D
    })
}
)($g);
var En = $g.exports;
const Fn = Mi(En);
var ey = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
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
)(ey);
var mC = ey.exports;
const gC = Mi(mC);
var yC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
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
)(yC);
var vC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(vC);
var _C = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(_C);
var bC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(bC);
var EC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(EC);
var TC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
        function u(_, b, A) {
            var g, E;
            return A === "m" ? b ? "минута" : "минуту" : _ + " " + (g = +_,
            E = {
                mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[A].split("_"),
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
)(TC);
var AC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(AC);
var SC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
var kC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(kC);
var wC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(wC);
var LC = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(En)
    }
    )(kt, function(n) {
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
)(LC);
var ty = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
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
                for (var _, b, A, g = f.$locale().relativeTime || s, E = n.thresholds || [{
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
                    var k = (n.rounding || Math.round)(Math.abs(_));
                    if (A = _ > 0,
                    k <= T.r || !T.r) {
                        k <= 1 && y > 0 && (T = E[y - 1]);
                        var L = g[T.l];
                        m && (k = m("" + k)),
                        b = typeof L == "string" ? L.replace("%d", k) : L(k, u, T.l, A);
                        break
                    }
                }
                if (u)
                    return b;
                var O = A ? g.future : g.past;
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
)(ty);
var OC = ty.exports;
const CC = Mi(OC);
var ny = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
        var n = "minute"
          , r = /[+-]\d\d(?::?\d\d)?/g
          , i = /([+-]|\d\d)/g;
        return function(o, s, a) {
            var l = s.prototype;
            a.utc = function(b) {
                var A = {
                    date: b,
                    utc: !0,
                    args: arguments
                };
                return new s(A)
            }
            ,
            l.utc = function(b) {
                var A = a(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return b ? A.add(this.utcOffset(), n) : A
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
            l.utcOffset = function(b, A) {
                var g = this.$utils().u;
                if (g(b))
                    return this.$u ? 0 : g(this.$offset) ? f.call(this) : this.$offset;
                if (typeof b == "string" && (b = function(T) {
                    T === void 0 && (T = "");
                    var k = T.match(r);
                    if (!k)
                        return null;
                    var L = ("" + k[0]).match(i) || ["-", 0, 0]
                      , O = L[0]
                      , C = 60 * +L[1] + +L[2];
                    return C === 0 ? 0 : O === "+" ? C : -C
                }(b),
                b === null))
                    return this;
                var E = Math.abs(b) <= 16 ? 60 * b : b
                  , p = this;
                if (A)
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
                var A = b || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return d.call(this, A)
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
            l.diff = function(b, A, g) {
                if (b && this.$u === b.$u)
                    return _.call(this, b, A, g);
                var E = this.local()
                  , p = a(b).local();
                return _.call(E, p, A, g)
            }
        }
    })
}
)(ny);
var RC = ny.exports;
const IC = Mi(RC);
var ry = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
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
                  , A = function(g, E) {
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
                return A.formatToParts(b)
            }, c = function(d, m) {
                for (var _ = l(d, m), b = [], A = 0; A < _.length; A += 1) {
                    var g = _[A]
                      , E = g.type
                      , p = g.value
                      , y = n[E];
                    y >= 0 && (b[y] = parseInt(p, 10))
                }
                var T = b[3]
                  , k = T === 24 ? 0 : T
                  , L = b[0] + "-" + b[1] + "-" + b[2] + " " + k + ":" + b[4] + ":" + b[5] + ":000"
                  , O = +d;
                return (s.utc(L).valueOf() - (O -= O % 1e3)) / 6e4
            }, u = o.prototype;
            u.tz = function(d, m) {
                d === void 0 && (d = a);
                var _ = this.utcOffset()
                  , b = this.toDate()
                  , A = b.toLocaleString("en-US", {
                    timeZone: d
                })
                  , g = Math.round((b - new Date(A)) / 1e3 / 60)
                  , E = s(A, {
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
                  , A = _ || m || a
                  , g = c(+s(), A);
                if (typeof d != "string")
                    return s(d).tz(A);
                var E = function(k, L, O) {
                    var C = k - 60 * L * 1e3
                      , D = c(C, O);
                    if (L === D)
                        return [C, L];
                    var x = c(C -= 60 * (D - L) * 1e3, O);
                    return D === x ? [C, D] : [k - 60 * Math.min(D, x) * 1e3, Math.max(D, x)]
                }(s.utc(d, b).valueOf(), g, A)
                  , p = E[0]
                  , y = E[1]
                  , T = s(p).utcOffset(y);
                return T.$x.$timezone = A,
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
)(ry);
var PC = ry.exports;
const MC = Mi(PC);
var iy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(kt, function() {
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
                        var A = b && b.toUpperCase();
                        return _ || d[b] || n[b] || d[A].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, E, p) {
                            return E || p.slice(1)
                        })
                    })
                }(l, c === void 0 ? {} : c);
                return a.call(this, u)
            }
        }
    })
}
)(iy);
var DC = iy.exports;
const NC = Mi(DC);
Fn.extend(gC);
Fn.extend(CC);
Fn.extend(IC);
Fn.extend(MC);
Fn.extend(NC);
Fn.tz.setDefault("Europe/Moscow");
Fn.updateLocale("en");
Fn.locale("en");
const VC = Dt(async e=>e.provide("dayjs", Fn))
  , UC = ["top", "right", "bottom", "left"]
  , dh = ["start", "end"]
  , hh = UC.reduce((e,t)=>e.concat(t, t + "-" + dh[0], t + "-" + dh[1]), [])
  , Eo = Math.min
  , Vr = Math.max
  , BC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , FC = {
    start: "end",
    end: "start"
};
function pc(e, t, n) {
    return Vr(e, Eo(t, n))
}
function $r(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Vn(e) {
    return e.split("-")[0]
}
function pn(e) {
    return e.split("-")[1]
}
function oy(e) {
    return e === "x" ? "y" : "x"
}
function Lu(e) {
    return e === "y" ? "height" : "width"
}
function jo(e) {
    return ["top", "bottom"].includes(Vn(e)) ? "y" : "x"
}
function Ou(e) {
    return oy(jo(e))
}
function sy(e, t, n) {
    n === void 0 && (n = !1);
    const r = pn(e)
      , i = Ou(e)
      , o = Lu(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = xs(s)),
    [s, xs(s)]
}
function xC(e) {
    const t = xs(e);
    return [Fs(e), t, Fs(t)]
}
function Fs(e) {
    return e.replace(/start|end/g, t=>FC[t])
}
function HC(e, t, n) {
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
function jC(e, t, n, r) {
    const i = pn(e);
    let o = HC(Vn(e), n === "start", r);
    return i && (o = o.map(s=>s + "-" + i),
    t && (o = o.concat(o.map(Fs)))),
    o
}
function xs(e) {
    return e.replace(/left|right|bottom|top/g, t=>BC[t])
}
function KC(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function ay(e) {
    return typeof e != "number" ? KC(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function $i(e) {
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
function ph(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = jo(t)
      , s = Ou(t)
      , a = Lu(s)
      , l = Vn(t)
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
    switch (pn(t)) {
    case "start":
        m[s] -= d * (n && c ? -1 : 1);
        break;
    case "end":
        m[s] += d * (n && c ? -1 : 1);
        break
    }
    return m
}
const YC = async(e,t,n)=>{
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: u, y: f} = ph(c, r, l)
      , d = r
      , m = {}
      , _ = 0;
    for (let b = 0; b < a.length; b++) {
        const {name: A, fn: g} = a[b]
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
            [A]: {
                ...m[A],
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
        {x: u, y: f} = ph(c, d, l)),
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
async function _a(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = $r(t, e)
      , _ = ay(m)
      , A = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = $i(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(A))) == null || n ? A : A.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
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
      , T = $i(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const qC = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: c, padding: u=0} = $r(e, t) || {};
        if (c == null)
            return {};
        const f = ay(u)
          , d = {
            x: n,
            y: r
        }
          , m = Ou(i)
          , _ = Lu(m)
          , b = await s.getDimensions(c)
          , A = m === "y"
          , g = A ? "top" : "left"
          , E = A ? "bottom" : "right"
          , p = A ? "clientHeight" : "clientWidth"
          , y = o.reference[_] + o.reference[m] - d[m] - o.floating[_]
          , T = d[m] - o.reference[m]
          , k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
        let L = k ? k[p] : 0;
        (!L || !await (s.isElement == null ? void 0 : s.isElement(k))) && (L = a.floating[p] || o.floating[_]);
        const O = y / 2 - T / 2
          , C = L / 2 - b[_] / 2 - 1
          , D = Eo(f[g], C)
          , x = Eo(f[E], C)
          , U = D
          , Z = L - b[_] - x
          , W = L / 2 - b[_] / 2 + O
          , K = pc(U, W, Z)
          , N = !l.arrow && pn(i) != null && W !== K && o.reference[_] / 2 - (W < U ? D : x) - b[_] / 2 < 0
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
function WC(e, t, n) {
    return (e ? [...n.filter(i=>pn(i) === e), ...n.filter(i=>pn(i) !== e)] : n.filter(i=>Vn(i) === i)).filter(i=>e ? pn(i) === e || (t ? Fs(i) !== i : !1) : !0)
}
const GC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, i;
            const {rects: o, middlewareData: s, placement: a, platform: l, elements: c} = t
              , {crossAxis: u=!1, alignment: f, allowedPlacements: d=hh, autoAlignment: m=!0, ..._} = $r(e, t)
              , b = f !== void 0 || d === hh ? WC(f || null, m, d) : d
              , A = await _a(t, _)
              , g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = b[g];
            if (E == null)
                return {};
            const p = sy(E, o, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: b[0]
                    }
                };
            const y = [A[Vn(E)], A[p[0]], A[p[1]]]
              , T = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
                placement: E,
                overflows: y
            }]
              , k = b[g + 1];
            if (k)
                return {
                    data: {
                        index: g + 1,
                        overflows: T
                    },
                    reset: {
                        placement: k
                    }
                };
            const L = T.map(D=>{
                const x = pn(D.placement);
                return [D.placement, x && u ? D.overflows.slice(0, 2).reduce((U,Z)=>U + Z, 0) : D.overflows[0], D.overflows]
            }
            ).sort((D,x)=>D[1] - x[1])
              , C = ((i = L.filter(D=>D[2].slice(0, pn(D[0]) ? 2 : 3).every(x=>x <= 0))[0]) == null ? void 0 : i[0]) || L[0][0];
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
  , JC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: c} = t
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: _="none", flipAlignment: b=!0, ...A} = $r(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = Vn(i)
              , E = Vn(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , y = d || (E || !b ? [xs(a)] : xC(a));
            !d && _ !== "none" && y.push(...jC(a, b, _, p));
            const T = [a, ...y]
              , k = await _a(t, A)
              , L = [];
            let O = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (u && L.push(k[g]),
            f) {
                const U = sy(i, s, p);
                L.push(k[U[0]], k[U[1]])
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
async function zC(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = Vn(n)
      , a = pn(n)
      , l = jo(n) === "y"
      , c = ["left", "top"].includes(s) ? -1 : 1
      , u = o && l ? -1 : 1
      , f = $r(t, e);
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
const QC = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await zC(t, e);
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
  , XC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: a={
                fn: A=>{
                    let {x: g, y: E} = A;
                    return {
                        x: g,
                        y: E
                    }
                }
            }, ...l} = $r(e, t)
              , c = {
                x: n,
                y: r
            }
              , u = await _a(t, l)
              , f = jo(Vn(i))
              , d = oy(f);
            let m = c[d]
              , _ = c[f];
            if (o) {
                const A = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , E = m + u[A]
                  , p = m - u[g];
                m = pc(E, m, p)
            }
            if (s) {
                const A = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , E = _ + u[A]
                  , p = _ - u[g];
                _ = pc(E, _, p)
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
  , ZC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: i, elements: o} = t
              , {apply: s=()=>{}
            , ...a} = $r(e, t)
              , l = await _a(t, a)
              , c = Vn(n)
              , u = pn(n)
              , f = jo(n) === "y"
              , {width: d, height: m} = r.floating;
            let _, b;
            c === "top" || c === "bottom" ? (_ = c,
            b = u === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (b = c,
            _ = u === "end" ? "top" : "bottom");
            const A = m - l[_]
              , g = d - l[b]
              , E = !t.middlewareData.shift;
            let p = A
              , y = g;
            if (f) {
                const k = d - l.left - l.right;
                y = u || E ? Eo(g, k) : k
            } else {
                const k = m - l.top - l.bottom;
                p = u || E ? Eo(A, k) : k
            }
            if (E && !u) {
                const k = Vr(l.left, 0)
                  , L = Vr(l.right, 0)
                  , O = Vr(l.top, 0)
                  , C = Vr(l.bottom, 0);
                f ? y = d - 2 * (k !== 0 || L !== 0 ? k + L : Vr(l.left, l.right)) : p = m - 2 * (O !== 0 || C !== 0 ? O + C : Vr(l.top, l.bottom))
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
function on(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Mn(e) {
    return on(e).getComputedStyle(e)
}
const mh = Math.min
  , eo = Math.max
  , Hs = Math.round;
function ly(e) {
    const t = Mn(e);
    let n = parseFloat(t.width)
      , r = parseFloat(t.height);
    const i = e.offsetWidth
      , o = e.offsetHeight
      , s = Hs(n) !== i || Hs(r) !== o;
    return s && (n = i,
    r = o),
    {
        width: n,
        height: r,
        fallback: s
    }
}
function Tr(e) {
    return uy(e) ? (e.nodeName || "").toLowerCase() : ""
}
let ls;
function cy() {
    if (ls)
        return ls;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (ls = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    ls) : navigator.userAgent
}
function Dn(e) {
    return e instanceof on(e).HTMLElement
}
function vr(e) {
    return e instanceof on(e).Element
}
function uy(e) {
    return e instanceof on(e).Node
}
function gh(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof on(e).ShadowRoot || e instanceof ShadowRoot
}
function ba(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Mn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function $C(e) {
    return ["table", "td", "th"].includes(Tr(e))
}
function mc(e) {
    const t = /firefox/i.test(cy())
      , n = Mn(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(i=>n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i=>{
        const o = n.contain;
        return o != null && o.includes(i)
    }
    )
}
function fy() {
    return !/^((?!chrome|android).)*safari/i.test(cy())
}
function Cu(e) {
    return ["html", "body", "#document"].includes(Tr(e))
}
function dy(e) {
    return vr(e) ? e : e.contextElement
}
const hy = {
    x: 1,
    y: 1
};
function mi(e) {
    const t = dy(e);
    if (!Dn(t))
        return hy;
    const n = t.getBoundingClientRect()
      , {width: r, height: i, fallback: o} = ly(t);
    let s = (o ? Hs(n.width) : n.width) / r
      , a = (o ? Hs(n.height) : n.height) / i;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function To(e, t, n, r) {
    var i, o;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = dy(e);
    let l = hy;
    t && (r ? vr(r) && (l = mi(r)) : l = mi(e));
    const c = a ? on(a) : window
      , u = !fy() && n;
    let f = (s.left + (u && ((i = c.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x
      , d = (s.top + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , _ = s.height / l.y;
    if (a) {
        const b = on(a)
          , A = r && vr(r) ? on(r) : r;
        let g = b.frameElement;
        for (; g && r && A !== b; ) {
            const E = mi(g)
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
            g = on(g).frameElement
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
function _r(e) {
    return ((uy(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Ea(e) {
    return vr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function py(e) {
    return To(_r(e)).left + Ea(e).scrollLeft
}
function Ao(e) {
    if (Tr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || gh(e) && e.host || _r(e);
    return gh(t) ? t.host : t
}
function my(e) {
    const t = Ao(e);
    return Cu(t) ? t.ownerDocument.body : Dn(t) && ba(t) ? t : my(t)
}
function js(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = my(e)
      , i = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = on(r);
    return i ? t.concat(o, o.visualViewport || [], ba(r) ? r : []) : t.concat(r, js(r))
}
function yh(e, t, n) {
    return t === "viewport" ? $i(function(r, i) {
        const o = on(r)
          , s = _r(r)
          , a = o.visualViewport;
        let l = s.clientWidth
          , c = s.clientHeight
          , u = 0
          , f = 0;
        if (a) {
            l = a.width,
            c = a.height;
            const d = fy();
            (d || !d && i === "fixed") && (u = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: c,
            x: u,
            y: f
        }
    }(e, n)) : vr(t) ? $i(function(r, i) {
        const o = To(r, !0, i === "fixed")
          , s = o.top + r.clientTop
          , a = o.left + r.clientLeft
          , l = Dn(r) ? mi(r) : {
            x: 1,
            y: 1
        };
        return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: s * l.y
        }
    }(t, n)) : $i(function(r) {
        const i = _r(r)
          , o = Ea(r)
          , s = r.ownerDocument.body
          , a = eo(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth)
          , l = eo(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let c = -o.scrollLeft + py(r);
        const u = -o.scrollTop;
        return Mn(s).direction === "rtl" && (c += eo(i.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: c,
            y: u
        }
    }(_r(e)))
}
function vh(e) {
    return Dn(e) && Mn(e).position !== "fixed" ? e.offsetParent : null
}
function _h(e) {
    const t = on(e);
    let n = vh(e);
    for (; n && $C(n) && Mn(n).position === "static"; )
        n = vh(n);
    return n && (Tr(n) === "html" || Tr(n) === "body" && Mn(n).position === "static" && !mc(n)) ? t : n || function(r) {
        let i = Ao(r);
        for (; Dn(i) && !Cu(i); ) {
            if (mc(i))
                return i;
            i = Ao(i)
        }
        return null
    }(e) || t
}
function e1(e, t, n) {
    const r = Dn(t)
      , i = _r(t)
      , o = To(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((Tr(t) !== "body" || ba(i)) && (s = Ea(t)),
        Dn(t)) {
            const l = To(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            i && (a.x = py(i));
    return {
        x: o.left + s.scrollLeft - a.x,
        y: o.top + s.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}
const t1 = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
        const o = n === "clippingAncestors" ? function(c, u) {
            const f = u.get(c);
            if (f)
                return f;
            let d = js(c).filter(A=>vr(A) && Tr(A) !== "body")
              , m = null;
            const _ = Mn(c).position === "fixed";
            let b = _ ? Ao(c) : c;
            for (; vr(b) && !Cu(b); ) {
                const A = Mn(b)
                  , g = mc(b);
                (_ ? g || m : g || A.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = A : d = d.filter(E=>E !== b),
                b = Ao(b)
            }
            return u.set(c, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...o, r]
          , a = s[0]
          , l = s.reduce((c,u)=>{
            const f = yh(t, u, i);
            return c.top = eo(f.top, c.top),
            c.right = mh(f.right, c.right),
            c.bottom = mh(f.bottom, c.bottom),
            c.left = eo(f.left, c.left),
            c
        }
        , yh(t, a, i));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const i = Dn(n)
          , o = _r(n);
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
        if ((i || !i && r !== "fixed") && ((Tr(n) !== "body" || ba(o)) && (s = Ea(n)),
        Dn(n))) {
            const c = To(n);
            a = mi(n),
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
    isElement: vr,
    getDimensions: function(e) {
        return Dn(e) ? ly(e) : e.getBoundingClientRect()
    },
    getOffsetParent: _h,
    getDocumentElement: _r,
    getScale: mi,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const i = this.getOffsetParent || _h
          , o = this.getDimensions;
        return {
            reference: e1(t, await i(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await o(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>Mn(e).direction === "rtl"
}
  , n1 = (e,t,n)=>{
    const r = new Map
      , i = {
        platform: t1,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return YC(e, t, {
        ...i,
        platform: o
    })
}
;
function gy(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? gy(e[n], t[n]) : e[n] = t[n])
}
const mn = {
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
    let n = mn.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = mn.themes[n.$extend] || {} : (n = null,
        r = mn[t]) : n = null;
    while (n);
    return r
}
function r1(e) {
    const t = [e];
    let n = mn.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = mn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function bh(e) {
    const t = [e];
    let n = mn.themes[e] || {};
    do
        n.$extend ? (t.push(n.$extend),
        n = mn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t
}
let Li = !1;
if (typeof window < "u") {
    Li = !1;
    try {
        const e = Object.defineProperty({}, "passive", {
            get() {
                Li = !0
            }
        });
        window.addEventListener("test", null, e)
    } catch {}
}
let yy = !1;
typeof window < "u" && typeof navigator < "u" && (yy = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const vy = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , Eh = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , Th = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
};
function Ah(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1)
}
function nl() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const hn = [];
let Ir = null;
const Sh = {};
function kh(e) {
    let t = Sh[e];
    return t || (t = Sh[e] = []),
    t
}
let gc = function() {};
typeof window < "u" && (gc = window.Element);
function xe(e) {
    return function(t) {
        return So(t.theme, e)
    }
}
const rl = "__floating-vue__popper"
  , _y = ()=>Be({
    name: "VPopper",
    provide() {
        return {
            [rl]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [rl]: {
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
            default: xe("disabled")
        },
        positioningDisabled: {
            type: Boolean,
            default: xe("positioningDisabled")
        },
        placement: {
            type: String,
            default: xe("placement"),
            validator: e=>vy.includes(e)
        },
        delay: {
            type: [String, Number, Object],
            default: xe("delay")
        },
        distance: {
            type: [Number, String],
            default: xe("distance")
        },
        skidding: {
            type: [Number, String],
            default: xe("skidding")
        },
        triggers: {
            type: Array,
            default: xe("triggers")
        },
        showTriggers: {
            type: [Array, Function],
            default: xe("showTriggers")
        },
        hideTriggers: {
            type: [Array, Function],
            default: xe("hideTriggers")
        },
        popperTriggers: {
            type: Array,
            default: xe("popperTriggers")
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: xe("popperShowTriggers")
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: xe("popperHideTriggers")
        },
        container: {
            type: [String, Object, gc, Boolean],
            default: xe("container")
        },
        boundary: {
            type: [String, gc],
            default: xe("boundary")
        },
        strategy: {
            type: String,
            validator: e=>["absolute", "fixed"].includes(e),
            default: xe("strategy")
        },
        autoHide: {
            type: [Boolean, Function],
            default: xe("autoHide")
        },
        handleResize: {
            type: Boolean,
            default: xe("handleResize")
        },
        instantMove: {
            type: Boolean,
            default: xe("instantMove")
        },
        eagerMount: {
            type: Boolean,
            default: xe("eagerMount")
        },
        popperClass: {
            type: [String, Array, Object],
            default: xe("popperClass")
        },
        computeTransformOrigin: {
            type: Boolean,
            default: xe("computeTransformOrigin")
        },
        autoMinSize: {
            type: Boolean,
            default: xe("autoMinSize")
        },
        autoSize: {
            type: [Boolean, String],
            default: xe("autoSize")
        },
        autoMaxSize: {
            type: Boolean,
            default: xe("autoMaxSize")
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: xe("autoBoundaryMaxSize")
        },
        preventOverflow: {
            type: Boolean,
            default: xe("preventOverflow")
        },
        overflowPadding: {
            type: [Number, String],
            default: xe("overflowPadding")
        },
        arrowPadding: {
            type: [Number, String],
            default: xe("arrowPadding")
        },
        arrowOverflow: {
            type: Boolean,
            default: xe("arrowOverflow")
        },
        flip: {
            type: Boolean,
            default: xe("flip")
        },
        shift: {
            type: Boolean,
            default: xe("shift")
        },
        shiftCrossAxis: {
            type: Boolean,
            default: xe("shiftCrossAxis")
        },
        noAutoFocus: {
            type: Boolean,
            default: xe("noAutoFocus")
        },
        disposeTimeout: {
            type: Number,
            default: xe("disposeTimeout")
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
            return (e = this[rl]) == null ? void 0 : e.parentPopper
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
            (this.distance || this.skidding) && e.middleware.push(QC({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(GC({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(XC({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(JC({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push(qC({
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
            e.middleware.push(ZC({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: i})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null
                }
            })));
            const n = await n1(this.$_referenceNode, this.$_popperNode, e);
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
            Ir && this.instantMove && Ir.instantMove && Ir !== this.parentPopper) {
                Ir.$_applyHide(!0),
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
            this.isShown && (Ir = this),
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
            await nl(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...js(this.$_referenceNode), ...js(this.$_popperNode)], "scroll", ()=>{
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
                for (let n = 0; n < hn.length; n++)
                    t = hn[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            hn.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of bh(this.theme))
                kh(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await nl(),
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
            Ah(hn, this),
            hn.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of bh(this.theme)) {
                const r = kh(n);
                Ah(r, this),
                r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
            }
            Ir === this && (Ir = null),
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
            await nl(),
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
            this.$_registerTriggerListeners(this.$_targetNodes, Eh, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], Eh, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, Th, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], Th, this.popperTriggers, this.popperHideTriggers, t)
        },
        $_registerEventListeners(e, t, n) {
            this.$_events.push({
                targetNodes: e,
                eventType: t,
                handler: n
            }),
            e.forEach(r=>r.addEventListener(t, n, Li ? {
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
            if (to >= e.left && to <= e.right && no >= e.top && no <= e.bottom) {
                const t = this.$_popperNode.getBoundingClientRect()
                  , n = to - ir
                  , r = no - or
                  , i = t.left + t.width / 2 - ir + (t.top + t.height / 2) - or + t.width + t.height
                  , o = ir + n * i
                  , s = or + r * i;
                return cs(ir, or, o, s, t.left, t.top, t.left, t.bottom) || cs(ir, or, o, s, t.left, t.top, t.right, t.top) || cs(ir, or, o, s, t.right, t.top, t.right, t.bottom) || cs(ir, or, o, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (yy) {
        const e = Li ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>wh(t, !0), e),
        document.addEventListener("touchend", t=>Lh(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>wh(e, !1), !0),
        window.addEventListener("click", e=>Lh(e, !1), !0);
    window.addEventListener("resize", o1)
}
function wh(e, t) {
    if (mn.autoHideOnMousedown)
        by(e, t);
    else
        for (let n = 0; n < hn.length; n++) {
            const r = hn[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function Lh(e, t) {
    mn.autoHideOnMousedown || by(e, t)
}
function by(e, t) {
    const n = {};
    for (let r = hn.length - 1; r >= 0; r--) {
        const i = hn[r];
        try {
            const o = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
            i.pendingHide = !1,
            requestAnimationFrame(()=>{
                if (i.pendingHide = !1,
                !n[i.randomId] && Oh(i, o, e)) {
                    if (i.$_handleGlobalClose(e, t),
                    !e.closeAllPopover && e.closePopover && o) {
                        let a = i.parentPopper;
                        for (; a; )
                            n[a.randomId] = !0,
                            a = a.parentPopper;
                        return
                    }
                    let s = i.parentPopper;
                    for (; s && Oh(s, s.containsGlobalTarget, e); )
                        s.$_handleGlobalClose(e, t),
                        s = s.parentPopper
                }
            }
            )
        } catch {}
    }
}
function Oh(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || i1(e, n) && !t
}
function i1(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function o1() {
    for (let e = 0; e < hn.length; e++)
        hn[e].$_computePosition()
}
let ir = 0
  , or = 0
  , to = 0
  , no = 0;
typeof window < "u" && window.addEventListener("mousemove", e=>{
    ir = to,
    or = no,
    to = e.clientX,
    no = e.clientY
}
, Li ? {
    passive: !0
} : void 0);
function cs(e, t, n, r, i, o, s, a) {
    const l = ((s - i) * (t - o) - (a - o) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t))
      , c = ((n - e) * (t - o) - (r - t) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t));
    return l >= 0 && l <= 1 && c >= 0 && c <= 1
}
const s1 = {
    extends: _y()
}
  , Ta = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
;
function a1(e, t, n, r, i, o) {
    return me(),
    Ge("div", {
        ref: "reference",
        class: It(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [Er(e.$slots, "default", an(Gt(e.slotData)))], 2)
}
const l1 = Ta(s1, [["render", a1]]);
function c1() {
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
let ys;
function yc() {
    yc.init || (yc.init = !0,
    ys = c1() !== -1)
}
var Aa = {
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
        yc(),
        Wt(()=>{
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
        ys && this.$el.appendChild(e),
        e.data = "about:blank",
        ys || this.$el.appendChild(e)
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
            this._resizeObject && this._resizeObject.onload && (!ys && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const u1 = y0();
m0("data-v-b329ee4c");
const f1 = {
    class: "resize-observer",
    tabindex: "-1"
};
g0();
const d1 = u1((e,t,n,r,i,o)=>(me(),
_t("div", f1)));
Aa.render = d1;
Aa.__scopeId = "data-v-b329ee4c";
Aa.__file = "src/components/ResizeObserver.vue";
const Ey = (e="theme")=>({
    computed: {
        themeClass() {
            return r1(this[e])
        }
    }
})
  , h1 = Be({
    name: "VPopperContent",
    components: {
        ResizeObserver: Aa
    },
    mixins: [Ey()],
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
  , p1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , m1 = {
    ref: "inner",
    class: "v-popper__inner"
}
  , g1 = ge("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , y1 = ge("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , v1 = [g1, y1];
function _1(e, t, n, r, i, o) {
    const s = Wr("ResizeObserver");
    return me(),
    Ge("div", {
        id: e.popperId,
        ref: "popover",
        class: It(["v-popper__popper", [e.themeClass, e.classes.popperClass, {
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
        style: Rn(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = $_(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [ge("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), ge("div", {
        class: "v-popper__wrapper",
        style: Rn(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [ge("div", m1, [e.mounted ? (me(),
    Ge(mt, {
        key: 0
    }, [ge("div", null, [Er(e.$slots, "default")]), e.handleResize ? (me(),
    _t(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : qt("", !0)], 64)) : qt("", !0)], 512), ge("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Rn(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, v1, 4)], 4)], 46, p1)
}
const Ty = Ta(h1, [["render", _1]])
  , Ay = {
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
let vc = function() {};
typeof window < "u" && (vc = window.Element);
const b1 = Be({
    name: "VPopperWrapper",
    components: {
        Popper: l1,
        PopperContent: Ty
    },
    mixins: [Ay, Ey("finalTheme")],
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
            type: [String, Object, vc, Boolean],
            default: void 0
        },
        boundary: {
            type: [String, vc],
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
function E1(e, t, n, r, i, o) {
    const s = Wr("PopperContent")
      , a = Wr("Popper");
    return me(),
    _t(a, _i({
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
        default: ln(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, show: m, hide: _, handleResize: b, onResize: A, classes: g, result: E})=>[Er(e.$slots, "default", {
            shown: c,
            show: m,
            hide: _
        }), et(s, {
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
            onResize: A
        }, {
            default: ln(()=>[Er(e.$slots, "popper", {
                shown: c,
                hide: _
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Ru = Ta(b1, [["render", E1]])
  , T1 = {
    ...Ru,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , A1 = {
    ...Ru,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , S1 = {
    ...Ru,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , k1 = Be({
    name: "VTooltipDirective",
    components: {
        Popper: _y(),
        PopperContent: Ty
    },
    mixins: [Ay],
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
  , w1 = ["innerHTML"]
  , L1 = ["textContent"];
function O1(e, t, n, r, i, o) {
    const s = Wr("PopperContent")
      , a = Wr("Popper");
    return me(),
    _t(a, _i({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: ln(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, hide: m, handleResize: _, onResize: b, classes: A, result: g})=>[et(s, {
            ref: "popperContent",
            class: It({
                "v-popper--tooltip-loading": e.loading
            }),
            "popper-id": l,
            theme: e.theme,
            shown: c,
            mounted: u,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": _,
            classes: A,
            result: g,
            onHide: m,
            onResize: b
        }, {
            default: ln(()=>[e.html ? (me(),
            Ge("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, w1)) : (me(),
            Ge("div", {
                key: 1,
                textContent: Zt(e.finalContent)
            }, null, 8, L1))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const C1 = Ta(k1, [["render", O1]])
  , Sy = "v-popper--has-tooltip";
function R1(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of vy)
            t[r] && (n = r);
    return n || (n = So(e.theme || "tooltip", "placement")),
    n
}
function ky(e, t, n) {
    let r;
    const i = typeof t;
    return i === "string" ? r = {
        content: t
    } : t && i === "object" ? r = t : r = {
        content: !1
    },
    r.placement = R1(r, n),
    r.targetNodes = ()=>[e],
    r.referenceNode = ()=>e,
    r
}
let il, ko, I1 = 0;
function P1() {
    if (il)
        return;
    ko = le([]),
    il = om({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: ko
            }
        },
        render() {
            return this.directives.map(t=>ft(C1, {
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
    il.mount(e)
}
function M1(e, t, n) {
    P1();
    const r = le(ky(e, t, n))
      , i = le(!1)
      , o = {
        id: I1++,
        options: r,
        shown: i
    };
    return ko.value.push(o),
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
function wy(e) {
    if (e.$_popper) {
        const t = ko.value.indexOf(e.$_popper.item);
        t !== -1 && ko.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(Sy)
}
function Ch(e, {value: t, modifiers: n}) {
    const r = ky(e, t, n);
    if (!r.content || So(r.theme || "tooltip", "disabled"))
        wy(e);
    else {
        let i;
        e.$_popper ? (i = e.$_popper,
        i.options.value = r) : i = M1(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? i.show() : i.hide())
    }
}
const D1 = {
    beforeMount: Ch,
    updated: Ch,
    beforeUnmount(e) {
        wy(e)
    }
};
function Rh(e) {
    e.addEventListener("mousedown", Ks),
    e.addEventListener("click", Ks),
    e.addEventListener("touchstart", Ly, Li ? {
        passive: !0
    } : !1)
}
function Ih(e) {
    e.removeEventListener("mousedown", Ks),
    e.removeEventListener("click", Ks),
    e.removeEventListener("touchstart", Ly),
    e.removeEventListener("touchend", Oy),
    e.removeEventListener("touchcancel", Cy)
}
function Ks(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch,
    e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
}
function Ly(e) {
    if (e.changedTouches.length === 1) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = !0;
        const n = e.changedTouches[0];
        t.$_vclosepopover_touchPoint = n,
        t.addEventListener("touchend", Oy),
        t.addEventListener("touchcancel", Cy)
    }
}
function Oy(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function Cy(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const N1 = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && Rh(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? Rh(e) : Ih(e))
    },
    beforeUnmount(e) {
        Ih(e)
    }
};
function V1(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    gy(mn, t),
    e.directive("tooltip", D1),
    e.directive("close-popper", N1),
    e.component("VTooltip", S1),
    e.component("VDropdown", T1),
    e.component("VMenu", A1))
}
const U1 = {
    version: "5.2.2",
    install: V1,
    options: mn
}
  , B1 = Dt(e=>{
    e.vueApp.use(U1)
}
);
function Ry(e) {
    if (e == null)
        return 1 / 0;
    if (typeof e == "object")
        for (let t in e)
            e[t] = Ry(e[t]);
    return e
}
const F1 = Dt(({vueApp: e})=>{
    var i;
    const t = ((i = Jn().public) == null ? void 0 : i.notivue) || {}
      , n = Ry(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = SS(n);
    e.use(r)
}
);
function x1(e, {locales: t=[], localeCodes: n=[], baseUrl: r=qL, hooks: i={}, context: o={}}={}) {
    const s = Ro()
      , a = e.install;
    return e.install = (l,...c)=>{
        const u = K1(c[0]) ? dt({}, c[0]) : {
            inject: !0
        };
        u.inject == null && (u.inject = !0);
        const f = u.__composerExtend;
        if (u.__composerExtend = b=>{
            const A = Si(e);
            b.locales = ue(()=>A.locales.value),
            b.localeCodes = ue(()=>A.localeCodes.value),
            b.baseUrl = ue(()=>A.baseUrl.value);
            let g;
            return Ze(f) && (g = Reflect.apply(f, u, [b])),
            ()=>{
                g && g()
            }
        }
        ,
        e.mode === "legacy") {
            const b = u.__vueI18nExtend;
            u.__vueI18nExtend = A=>{
                Ph(A, i.onExtendVueI18n);
                let g;
                return Ze(b) && (g = Reflect.apply(b, u, [A])),
                ()=>{
                    g && g()
                }
            }
        }
        c[0] = u,
        Reflect.apply(a, e, [l, ...c]);
        const d = Si(e);
        s.run(()=>{
            H1(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: i,
                context: o
            }),
            e.mode === "legacy" && Dg(e.global) && Ph(e.global, i.onExtendVueI18n)
        }
        );
        const m = l
          , _ = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (_ && j1(_, d, i.onExtendExportedGlobal),
        u.inject) {
            const b = ku(e);
            l.mixin({
                methods: {
                    getRouteBaseName: ki,
                    resolveRoute: tn(va, b),
                    localePath: tn(ya, b),
                    localeRoute: tn(Au, b),
                    localeLocation: tn(hO, b),
                    switchLocalePath: tn(wi, b),
                    localeHead: tn(Bg, b)
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
function H1(e, t) {
    const {locales: n, localeCodes: r, baseUrl: i, context: o} = t
      , s = le(n)
      , a = le(r)
      , l = le("");
    e.locales = ue(()=>s.value),
    e.localeCodes = ue(()=>a.value),
    e.baseUrl = ue(()=>l.value),
    GL ? je(e.locale, ()=>{
        l.value = nh(i, o)
    }
    , {
        immediate: !0
    }) : l.value = nh(i, o),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function Iy(e, t, n) {
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
function j1(e, t, n) {
    Iy(t, e, n)
}
function Ph(e, t) {
    const n = Si(e);
    Iy(n, e, t)
}
function K1(e) {
    return Ue(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function Y1() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = gt
      , n = `(${zr.join("|")})`
      , r = `(?:${e}${t})?`
      , i = new RegExp(`${e}${n}${r}$`,"i")
      , o = cc(zr);
    return a=>{
        if (Ue(a)) {
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
const q1 = Dt({
    name: "i18n:plugin",
    parallel: KL,
    async setup(e) {
        let t, n;
        const r = sa()
          , {vueApp: i} = e
          , o = e
          , s = {
            ...gt
        };
        s.baseUrl = RO();
        const a = ([t,n] = On(()=>iO(jL, re())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = Y1()
          , c = p=>p || a.locale || "en-US"
          , u = PO();
        let f = oh(r, l, a.locale, c(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: u
        });
        a.messages = ([t,n] = On(()=>oO(a.messages, lc, {
            localeCodes: zr,
            initialLocale: f,
            lazy: s.lazy,
            defaultLocale: s.defaultLocale,
            fallbackLocale: a.fallbackLocale
        })),
        t = await t,
        n(),
        t),
        f = c(f);
        const d = LL({
            ...a,
            locale: f
        });
        let m = !0;
        const _ = p=>f !== p && m;
        let b = !0;
        const A = ()=>b;
        A() && s.strategy === "no_prefix" && e.hook("app:mounted", async()=>{
            const {locale: p, stat: y, reason: T, from: k} = s.detectBrowserLanguage ? Kg(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: u
            }, f) : jg;
            EO(d, p),
            b = !1
        }
        ),
        x1(d, {
            locales: s.locales,
            localeCodes: zr,
            baseUrl: s.baseUrl,
            context: o,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = ue(()=>Tu.find(y=>y.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async y=>{
                        const T = _(y)
                          , [k] = await ih(y, d, T);
                        k && T && (m = !1);
                        const L = await o.runWithContext(()=>sh({
                            route: {
                                to: r
                            },
                            targetLocale: y,
                            routeLocaleGetter: l
                        }));
                        await o.runWithContext(async()=>await lh({
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
                    p.getBrowserLocale = ()=>Hg(),
                    p.getLocaleCookie = ()=>MO(u),
                    p.setLocaleCookie = y=>DO(u, y),
                    p.onBeforeLanguageSwitch = (y,T,k,L)=>e.callHook("i18n:beforeLocaleSwitch", {
                        oldLocale: y,
                        newLocale: T,
                        initialSetup: k,
                        context: L
                    }),
                    p.onLanguageSwitched = (y,T)=>e.callHook("i18n:localeSwitched", {
                        oldLocale: y,
                        newLocale: T
                    }),
                    p.finalizePendingLocaleChange = async()=>{
                        d.__pendingLocale && (Ng(d, d.__pendingLocale),
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
                                return (y,T,k,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, T, k, L])
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
                                return (y,T,k,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, T, k, L])
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
        LO(o, d);
        let E = 0;
        LE("locale-changing", async(p,y)=>{
            let T, k;
            const L = oh(p, l, a.locale, ()=>ga(d) || c(s.defaultLocale), {
                ssg: A() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: u
            })
              , O = _(L)
              , [C] = ([T,k] = On(()=>ih(L, d, O)),
            T = await T,
            k(),
            T);
            C && O && (m = !1);
            const D = ([T,k] = On(()=>o.runWithContext(()=>sh({
                route: {
                    to: p,
                    from: y
                },
                targetLocale: L,
                routeLocaleGetter: s.strategy === "no_prefix" ? ()=>L : l,
                calledWithRouting: !0
            }))),
            T = await T,
            k(),
            T);
            return E++,
            [T,k] = On(()=>o.runWithContext(async()=>lh({
                i18n: d,
                redirectPath: D,
                locale: L,
                route: p
            }))),
            T = await T,
            k(),
            T
        }
        , {
            global: !0
        })
    }
});
function Py(e) {
    return Io() ? (Qs(e),
    !0) : !1
}
function Iu(e) {
    return typeof e == "function" ? e() : G(e)
}
const W1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const G1 = e=>e != null
  , J1 = Object.prototype.toString
  , Ys = e=>J1.call(e) === "[object Object]"
  , ro = ()=>{}
;
function My(e) {
    return e || bn()
}
function z1(...e) {
    if (e.length !== 1)
        return oi(...e);
    const t = e[0];
    return typeof t == "function" ? dr(_p(()=>({
        get: t,
        set: ro
    }))) : le(t)
}
function Q1(e, t=!0, n) {
    My() ? Mt(e, n) : t ? e() : Wt(e)
}
function X1(e, t) {
    My(t) && Ri(e, t)
}
function io(e) {
    var t;
    const n = Iu(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Dy = W1 ? window : void 0;
function Vt(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = Dy) : [t,n,r,i] = e,
    !t)
        return ro;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = ()=>{
        o.forEach(u=>u()),
        o.length = 0
    }
      , a = (u,f,d,m)=>(u.addEventListener(f, d, m),
    ()=>u.removeEventListener(f, d, m))
      , l = je(()=>[io(t), Iu(i)], ([u,f])=>{
        if (s(),
        !u)
            return;
        const d = Ys(f) ? {
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
    return Py(c),
    c
}
function Z1() {
    const e = le(!1)
      , t = bn();
    return t && Mt(()=>{
        e.value = !0
    }
    , t),
    e
}
function $1(e) {
    const t = Z1();
    return ue(()=>(t.value,
    !!e()))
}
function eR(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=Dy, immediate: a=!0} = n
      , l = $1(()=>s && "IntersectionObserver"in s)
      , c = ue(()=>{
        const _ = Iu(e);
        return (Array.isArray(_) ? _ : [_]).map(io).filter(G1)
    }
    );
    let u = ro;
    const f = le(a)
      , d = l.value ? je(()=>[c.value, io(r), f.value], ([_,b])=>{
        if (u(),
        !f.value || !_.length)
            return;
        const A = new IntersectionObserver(t,{
            root: io(b),
            rootMargin: i,
            threshold: o
        });
        _.forEach(g=>g && A.observe(g)),
        u = ()=>{
            A.disconnect(),
            u = ro
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : ro
      , m = ()=>{
        u(),
        d(),
        f.value = !1
    }
    ;
    return Py(m),
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
function QM(e, t={}) {
    const n = z1(e)
      , {threshold: r=50, onSwipe: i, onSwipeEnd: o, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = At({
        x: 0,
        y: 0
    })
      , c = (L,O)=>{
        l.x = L,
        l.y = O
    }
      , u = At({
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
      , A = ue(()=>_(b(d.value), b(m.value)) >= r)
      , g = le(!1)
      , E = le(!1)
      , p = ue(()=>A.value ? b(d.value) > b(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , y = L=>{
        var O, C, D;
        const x = L.buttons === 0
          , U = L.buttons === 1;
        return (D = (C = (O = t.pointerTypes) == null ? void 0 : O.includes(L.pointerType)) != null ? C : x || U) != null ? D : !0
    }
      , T = [Vt(e, "pointerdown", L=>{
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
    ), Vt(e, "pointermove", L=>{
        if (!y(L) || !E.value)
            return;
        const {clientX: O, clientY: C} = L;
        f(O, C),
        !g.value && A.value && (g.value = !0),
        g.value && (i == null || i(L))
    }
    ), Vt(e, "pointerup", L=>{
        y(L) && (g.value && (o == null || o(L, p.value)),
        E.value = !1,
        g.value = !1)
    }
    )];
    Q1(()=>{
        var L, O, C, D, x, U, Z, W;
        (O = (L = n.value) == null ? void 0 : L.style) == null || O.setProperty("touch-action", "none"),
        a && ((D = (C = n.value) == null ? void 0 : C.style) == null || D.setProperty("-webkit-user-select", "none"),
        (U = (x = n.value) == null ? void 0 : x.style) == null || U.setProperty("-ms-user-select", "none"),
        (W = (Z = n.value) == null ? void 0 : Z.style) == null || W.setProperty("user-select", "none"))
    }
    );
    const k = ()=>T.forEach(L=>L());
    return {
        isSwiping: dr(g),
        direction: dr(p),
        posStart: dr(l),
        posEnd: dr(u),
        distanceX: d,
        distanceY: m,
        stop: k
    }
}
const Ny = 1 / 60 * 1e3
  , tR = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , Vy = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(tR()), Ny);
function nR(e) {
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
const rR = 40;
let _c = !0
  , wo = !1
  , bc = !1;
const gi = {
    delta: 0,
    timestamp: 0
}
  , Ko = ["read", "update", "preRender", "render", "postRender"]
  , Sa = Ko.reduce((e,t)=>(e[t] = nR(()=>wo = !0),
e), {})
  , Ec = Ko.reduce((e,t)=>{
    const n = Sa[t];
    return e[t] = (r,i=!1,o=!1)=>(wo || sR(),
    n.schedule(r, i, o)),
    e
}
, {})
  , iR = Ko.reduce((e,t)=>(e[t] = Sa[t].cancel,
e), {});
Ko.reduce((e,t)=>(e[t] = ()=>Sa[t].process(gi),
e), {});
const oR = e=>Sa[e].process(gi)
  , Uy = e=>{
    wo = !1,
    gi.delta = _c ? Ny : Math.max(Math.min(e - gi.timestamp, rR), 1),
    gi.timestamp = e,
    bc = !0,
    Ko.forEach(oR),
    bc = !1,
    wo && (_c = !1,
    Vy(Uy))
}
  , sR = ()=>{
    wo = !0,
    _c = !0,
    bc || Vy(Uy)
}
  , By = ()=>gi;
function Fy(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Mh = function() {};
const Tc = (e,t,n)=>Math.min(Math.max(n, e), t)
  , ol = .001
  , aR = .01
  , lR = 10
  , cR = .05
  , uR = 1;
function fR({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = Tc(cR, uR, s),
    e = Tc(aR, lR, e / 1e3),
    s < 1 ? (i = c=>{
        const u = c * s
          , f = u * e
          , d = u - n
          , m = Ac(c, s)
          , _ = Math.exp(-f);
        return ol - d / m * _
    }
    ,
    o = c=>{
        const f = c * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(c, 2) * e
          , _ = Math.exp(-f)
          , b = Ac(Math.pow(c, 2), s);
        return (-i(c) + ol > 0 ? -1 : 1) * ((d - m) * _) / b
    }
    ) : (i = c=>{
        const u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -ol + u * f
    }
    ,
    o = c=>{
        const u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    const a = 5 / e
      , l = hR(i, o, a);
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
const dR = 12;
function hR(e, t, n) {
    let r = n;
    for (let i = 1; i < dR; i++)
        r = r - e(r) / t(r);
    return r
}
function Ac(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const pR = ["duration", "bounce"]
  , mR = ["stiffness", "damping", "mass"];
function Dh(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function gR(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Dh(e, mR) && Dh(e, pR)) {
        const n = fR(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Pu(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = Fy(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: c, velocity: u, duration: f, isResolvedFromDuration: d} = gR(o)
      , m = Nh
      , _ = Nh;
    function b() {
        const A = u ? -(u / 1e3) : 0
          , g = n - t
          , E = l / (2 * Math.sqrt(a * c))
          , p = Math.sqrt(a / c) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const y = Ac(p, E);
            m = T=>{
                const k = Math.exp(-E * p * T);
                return n - k * ((A + E * p * g) / y * Math.sin(y * T) + g * Math.cos(y * T))
            }
            ,
            _ = T=>{
                const k = Math.exp(-E * p * T);
                return E * p * k * (Math.sin(y * T) * (A + E * p * g) / y + g * Math.cos(y * T)) - k * (Math.cos(y * T) * (A + E * p * g) - y * g * Math.sin(y * T))
            }
        } else if (E === 1)
            m = y=>n - Math.exp(-p * y) * (g + (A + p * g) * y);
        else {
            const y = p * Math.sqrt(E * E - 1);
            m = T=>{
                const k = Math.exp(-E * p * T)
                  , L = Math.min(y * T, 300);
                return n - k * ((A + E * p * g) * Math.sinh(L) + y * g * Math.cosh(L)) / y
            }
        }
    }
    return b(),
    {
        next: A=>{
            const g = m(A);
            if (d)
                s.done = A >= f;
            else {
                const E = _(A) * 1e3
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
Pu.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const Nh = e=>0
  , xy = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Mu = (e,t,n)=>-n * e + n * t + e
  , Hy = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , oo = e=>e % 1 ? Number(e.toFixed(5)) : e
  , Lo = /(-)?([\d]*\.?[\d])+/g
  , Sc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , yR = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Yo(e) {
    return typeof e == "string"
}
const qo = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , so = Object.assign(Object.assign({}, qo), {
    transform: Hy(0, 1)
})
  , us = Object.assign(Object.assign({}, qo), {
    default: 1
})
  , Du = e=>({
    test: t=>Yo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Pr = Du("deg")
  , ao = Du("%")
  , be = Du("px")
  , Vh = Object.assign(Object.assign({}, ao), {
    parse: e=>ao.parse(e) / 100,
    transform: e=>ao.transform(e * 100)
})
  , Nu = (e,t)=>n=>!!(Yo(n) && yR.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , jy = (e,t,n)=>r=>{
    if (!Yo(r))
        return r;
    const [i,o,s,a] = r.match(Lo);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Fr = {
    test: Nu("hsl", "hue"),
    parse: jy("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + ao.transform(oo(t)) + ", " + ao.transform(oo(n)) + ", " + oo(so.transform(r)) + ")"
}
  , vR = Hy(0, 255)
  , sl = Object.assign(Object.assign({}, qo), {
    transform: e=>Math.round(vR(e))
})
  , pr = {
    test: Nu("rgb", "red"),
    parse: jy("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + sl.transform(e) + ", " + sl.transform(t) + ", " + sl.transform(n) + ", " + oo(so.transform(r)) + ")"
};
function _R(e) {
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
const kc = {
    test: Nu("#"),
    parse: _R,
    transform: pr.transform
}
  , Bt = {
    test: e=>pr.test(e) || kc.test(e) || Fr.test(e),
    parse: e=>pr.test(e) ? pr.parse(e) : Fr.test(e) ? Fr.parse(e) : kc.parse(e),
    transform: e=>Yo(e) ? e : e.hasOwnProperty("red") ? pr.transform(e) : Fr.transform(e)
}
  , Ky = "${c}"
  , Yy = "${n}";
function bR(e) {
    var t, n, r, i;
    return isNaN(e) && Yo(e) && ((n = (t = e.match(Lo)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(Sc)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function qy(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Sc);
    r && (n = r.length,
    e = e.replace(Sc, Ky),
    t.push(...r.map(Bt.parse)));
    const i = e.match(Lo);
    return i && (e = e.replace(Lo, Yy),
    t.push(...i.map(qo.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Wy(e) {
    return qy(e).values
}
function Gy(e) {
    const {values: t, numColors: n, tokenised: r} = qy(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let a = 0; a < i; a++)
            s = s.replace(a < n ? Ky : Yy, a < n ? Bt.transform(o[a]) : oo(o[a]));
        return s
    }
}
const ER = e=>typeof e == "number" ? 0 : e;
function TR(e) {
    const t = Wy(e);
    return Gy(e)(t.map(ER))
}
const Wo = {
    test: bR,
    parse: Wy,
    createTransformer: Gy,
    getAnimatableNone: TR
}
  , AR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function SR(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Lo) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = AR.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const kR = /([a-z-]*)\(.*?\)/g
  , wc = Object.assign(Object.assign({}, Wo), {
    getAnimatableNone: e=>{
        const t = e.match(kR);
        return t ? t.map(SR).join(" ") : e
    }
});
function al(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Uh({hue: e, saturation: t, lightness: n, alpha: r}) {
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
        i = al(l, a, e + 1 / 3),
        o = al(l, a, e),
        s = al(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const wR = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , LR = [kc, pr, Fr]
  , Bh = e=>LR.find(t=>t.test(e))
  , Jy = (e,t)=>{
    let n = Bh(e)
      , r = Bh(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === Fr && (i = Uh(i),
    n = pr),
    r === Fr && (o = Uh(o),
    r = pr);
    const s = Object.assign({}, i);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = wR(i[l], o[l], a));
        return s.alpha = Mu(i.alpha, o.alpha, a),
        n.transform(s)
    }
}
  , OR = e=>typeof e == "number"
  , CR = (e,t)=>n=>t(e(n))
  , zy = (...e)=>e.reduce(CR);
function Qy(e, t) {
    return OR(e) ? n=>Mu(e, t, n) : Bt.test(e) ? Jy(e, t) : Zy(e, t)
}
const Xy = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>Qy(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , RR = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Qy(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function Fh(e) {
    const t = Wo.parse(e)
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
const Zy = (e,t)=>{
    const n = Wo.createTransformer(t)
      , r = Fh(e)
      , i = Fh(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? zy(Xy(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , IR = (e,t)=>n=>Mu(e, t, n);
function PR(e) {
    if (typeof e == "number")
        return IR;
    if (typeof e == "string")
        return Bt.test(e) ? Jy : Zy;
    if (Array.isArray(e))
        return Xy;
    if (typeof e == "object")
        return RR
}
function MR(e, t, n) {
    const r = []
      , i = n || PR(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = zy(l, a)
        }
        r.push(a)
    }
    return r
}
function DR([e,t], [n]) {
    return r=>n(xy(e, t, r))
}
function NR(e, t) {
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
        const a = xy(e[o], e[o + 1], i);
        return t[o](a)
    }
}
function $y(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Mh(o === t.length),
    Mh(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = MR(t, r, i)
      , a = o === 2 ? DR(e, s) : NR(e, s);
    return n ? l=>a(Tc(e[0], e[o - 1], l)) : a
}
const ka = e=>t=>1 - e(1 - t)
  , Vu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , VR = e=>t=>Math.pow(t, e)
  , ev = e=>t=>t * t * ((e + 1) * t - e)
  , UR = e=>{
    const t = ev(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , tv = 1.525
  , BR = 4 / 11
  , FR = 8 / 11
  , xR = 9 / 10
  , nv = e=>e
  , Uu = VR(2)
  , HR = ka(Uu)
  , rv = Vu(Uu)
  , iv = e=>1 - Math.sin(Math.acos(e))
  , ov = ka(iv)
  , jR = Vu(ov)
  , Bu = ev(tv)
  , KR = ka(Bu)
  , YR = Vu(Bu)
  , qR = UR(tv)
  , WR = 4356 / 361
  , GR = 35442 / 1805
  , JR = 16061 / 1805
  , qs = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < BR ? 7.5625 * t : e < FR ? 9.075 * t - 9.9 * e + 3.4 : e < xR ? WR * t - GR * e + JR : 10.8 * e * e - 20.52 * e + 10.72
}
  , zR = ka(qs)
  , QR = e=>e < .5 ? .5 * (1 - qs(1 - e * 2)) : .5 * qs(e * 2 - 1) + .5;
function XR(e, t) {
    return e.map(()=>t || rv).splice(0, e.length - 1)
}
function ZR(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function $R(e, t) {
    return e.map(n=>n * t)
}
function vs({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = $R(r && r.length === s.length ? r : ZR(s), i);
    function l() {
        return $y(a, s, {
            ease: Array.isArray(n) ? n : XR(s, n)
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
function eI({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
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
const xh = {
    keyframes: vs,
    spring: Pu,
    decay: eI
};
function tI(e) {
    if (Array.isArray(e.to))
        return vs;
    if (xh[e.type])
        return xh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? vs : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Pu : vs
}
function sv(e, t, n=0) {
    return e - t - n
}
function nI(e, t, n=0, r=!0) {
    return r ? sv(t + -e, t, n) : t - (e - t) + n
}
function rI(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const iI = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>Ec.update(t, !0),
        stop: ()=>iR.update(t)
    }
}
;
function av(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=iI, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: c=0, onPlay: u, onStop: f, onComplete: d, onRepeat: m, onUpdate: _} = e, b = Fy(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: A} = b, g, E = 0, p = b.duration, y, T = !1, k = !0, L;
    const O = tI(b);
    !((n = (t = O).needsInterpolation) === null || n === void 0) && n.call(t, r, A) && (L = $y([0, 100], [r, A], {
        clamp: !1
    }),
    r = 0,
    A = 100);
    const C = O(Object.assign(Object.assign({}, b), {
        from: r,
        to: A
    }));
    function D() {
        E++,
        l === "reverse" ? (k = E % 2 === 0,
        s = nI(s, p, c, k)) : (s = sv(s, p, c),
        l === "mirror" && C.flipTarget()),
        T = !1,
        m && m()
    }
    function x() {
        g.stop(),
        d && d()
    }
    function U(W) {
        if (k || (W = -W),
        s += W,
        !T) {
            const K = C.next(Math.max(0, s));
            y = K.value,
            L && (y = L(y)),
            T = k ? K.done : s <= 0
        }
        _ == null || _(y),
        T && (E === 0 && (p ?? (p = s)),
        E < a ? rI(s, p, c, k) && D() : x())
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
function lv(e, t) {
    return t ? e * (1e3 / t) : 0
}
function oI({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: c, driver: u, onUpdate: f, onComplete: d, onStop: m}) {
    let _;
    function b(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function A(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function g(p) {
        _ == null || _.stop(),
        _ = av(Object.assign(Object.assign({}, p), {
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
            to: A(e)
        });
    else {
        let p = i * t + e;
        typeof c < "u" && (p = c(p));
        const y = A(p)
          , T = y === n ? -1 : 1;
        let k, L;
        const O = C=>{
            k = L,
            L = C,
            t = lv(C - k, By().delta),
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
const cv = (e,t)=>1 - 3 * t + 3 * e
  , uv = (e,t)=>3 * t - 6 * e
  , fv = e=>3 * e
  , Ws = (e,t,n)=>((cv(t, n) * e + uv(t, n)) * e + fv(t)) * e
  , dv = (e,t,n)=>3 * cv(t, n) * e * e + 2 * uv(t, n) * e + fv(t)
  , sI = 1e-7
  , aI = 10;
function lI(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Ws(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > sI && ++a < aI);
    return s
}
const cI = 8
  , uI = .001;
function fI(e, t, n, r) {
    for (let i = 0; i < cI; ++i) {
        const o = dv(t, n, r);
        if (o === 0)
            return t;
        const s = Ws(t, n, r) - e;
        t -= s / o
    }
    return t
}
const _s = 11
  , fs = 1 / (_s - 1);
function dI(e, t, n, r) {
    if (e === t && n === r)
        return nv;
    const i = new Float32Array(_s);
    for (let s = 0; s < _s; ++s)
        i[s] = Ws(s * fs, e, n);
    function o(s) {
        let a = 0
          , l = 1;
        const c = _s - 1;
        for (; l !== c && i[l] <= s; ++l)
            a += fs;
        --l;
        const u = (s - i[l]) / (i[l + 1] - i[l])
          , f = a + u * fs
          , d = dv(f, e, n);
        return d >= uI ? fI(s, f, e, n) : d === 0 ? f : lI(s, a, a + fs, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Ws(o(s), t, r)
}
const ll = {};
var hI = Object.defineProperty
  , pI = (e,t,n)=>t in e ? hI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , mI = (e,t,n)=>(pI(e, typeof t != "symbol" ? t + "" : t, n),
n);
class gI {
    constructor() {
        mI(this, "subscriptions", new Set)
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
var yI = Object.defineProperty
  , vI = (e,t,n)=>t in e ? yI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Sn = (e,t,n)=>(vI(e, typeof t != "symbol" ? t + "" : t, n),
n);
function Hh(e) {
    return !isNaN(parseFloat(e))
}
class _I {
    constructor(t) {
        Sn(this, "current"),
        Sn(this, "prev"),
        Sn(this, "timeDelta", 0),
        Sn(this, "lastUpdated", 0),
        Sn(this, "updateSubscribers", new gI),
        Sn(this, "stopAnimation"),
        Sn(this, "canTrackVelocity", !1),
        Sn(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: i} = By();
            this.lastUpdated !== i && (this.timeDelta = r,
            this.lastUpdated = i),
            Ec.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        Sn(this, "scheduleVelocityCheck", ()=>Ec.postRender(this.velocityCheck)),
        Sn(this, "velocityCheck", ({timestamp: n})=>{
            this.canTrackVelocity || (this.canTrackVelocity = Hh(this.current)),
            n !== this.lastUpdated && (this.prev = this.current)
        }
        ),
        this.prev = this.current = t,
        this.canTrackVelocity = Hh(this.current)
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
        return this.canTrackVelocity ? lv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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
function bI(e) {
    return new _I(e)
}
const {isArray: EI} = Array;
function TI() {
    const e = le({})
      , t = r=>{
        const i = o=>{
            e.value[o] && (e.value[o].stop(),
            e.value[o].destroy(),
            delete e.value[o])
        }
        ;
        r ? EI(r) ? r.forEach(i) : i(r) : Object.keys(e.value).forEach(i)
    }
      , n = (r,i,o)=>{
        if (e.value[r])
            return e.value[r];
        const s = bI(i);
        return s.onChange(a=>o[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return X1(t),
    {
        motionValues: e,
        get: n,
        stop: t
    }
}
function AI(e) {
    return Array.isArray(e)
}
function Mr() {
    return {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restDelta: .5,
        restSpeed: 10
    }
}
function cl(e) {
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
function ul() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function kI(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const jh = {
    default: SI,
    x: Mr,
    y: Mr,
    z: Mr,
    rotate: Mr,
    rotateX: Mr,
    rotateY: Mr,
    rotateZ: Mr,
    scaleX: cl,
    scaleY: cl,
    scale: cl,
    backgroundColor: ul,
    color: ul,
    opacity: ul
};
function hv(e, t) {
    let n;
    return AI(t) ? n = kI : n = jh[e] || jh.default,
    {
        to: t,
        ...n(t)
    }
}
const Kh = {
    ...qo,
    transform: Math.round
}
  , pv = {
    color: Bt,
    backgroundColor: Bt,
    outlineColor: Bt,
    fill: Bt,
    stroke: Bt,
    borderColor: Bt,
    borderTopColor: Bt,
    borderRightColor: Bt,
    borderBottomColor: Bt,
    borderLeftColor: Bt,
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
    rotate: Pr,
    rotateX: Pr,
    rotateY: Pr,
    rotateZ: Pr,
    scale: us,
    scaleX: us,
    scaleY: us,
    scaleZ: us,
    skew: Pr,
    skewX: Pr,
    skewY: Pr,
    distance: be,
    translateX: be,
    translateY: be,
    translateZ: be,
    x: be,
    y: be,
    z: be,
    perspective: be,
    transformPerspective: be,
    opacity: so,
    originX: Vh,
    originY: Vh,
    originZ: be,
    zIndex: Kh,
    filter: wc,
    WebkitFilter: wc,
    fillOpacity: so,
    strokeOpacity: so,
    numOctaves: Kh
}
  , Fu = e=>pv[e];
function mv(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function wI(e, t) {
    let n = Fu(e);
    return n !== wc && (n = Wo),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const LI = {
    linear: nv,
    easeIn: Uu,
    easeInOut: rv,
    easeOut: HR,
    circIn: iv,
    circInOut: jR,
    circOut: ov,
    backIn: Bu,
    backInOut: YR,
    backOut: KR,
    anticipate: qR,
    bounceIn: zR,
    bounceInOut: QR,
    bounceOut: qs
};
function Yh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,i] = e;
        return dI(t, n, r, i)
    } else if (typeof e == "string")
        return LI[e];
    return e
}
function OI(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function qh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Wo.test(t) && !t.startsWith("url("))
}
function CI(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function RI({ease: e, times: t, delay: n, ...r}) {
    const i = {
        ...r
    };
    return t && (i.offset = t),
    e && (i.ease = OI(e) ? e.map(Yh) : Yh(e)),
    n && (i.elapsed = -n),
    i
}
function II(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    CI(t),
    PI(e) || (e = {
        ...e,
        ...hv(n, t.to)
    }),
    {
        ...t,
        ...RI(e)
    }
}
function PI({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: i, ...o}) {
    return !!Object.keys(o).length
}
function MI(e, t) {
    return e[t] || e.default || e
}
function DI(e, t, n, r, i) {
    const o = MI(r, e);
    let s = o.from === null || o.from === void 0 ? t.get() : o.from;
    const a = qh(e, n);
    s === "none" && a && typeof n == "string" && (s = wI(e, n));
    const l = qh(e, s);
    function c(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return o.type === "inertia" || o.type === "decay" ? oI({
            ...d,
            ...o
        }) : av({
            ...II(o, d, e),
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
function NI() {
    const {motionValues: e, stop: t, get: n} = TI();
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
            const f = DI(i, u, o, a, l);
            u.start(f)
        }
    }
}
function VI(e, t={}, {motionValues: n, push: r, stop: i}=NI()) {
    const o = G(t)
      , s = le(!1);
    je(n, f=>{
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
            return new Promise(_=>r(d, m, e, f.transition || hv(d, f[d]), _))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = Ys(f) ? f : a(f);
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
const xu = typeof window < "u"
  , UI = ()=>xu && window.onpointerdown === null
  , BI = ()=>xu && window.ontouchstart === null
  , FI = ()=>xu && window.onmousedown === null;
function xI({target: e, state: t, variants: n, apply: r}) {
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
    i.hovered && (Vt(e, "mouseenter", ()=>o.value = !0),
    Vt(e, "mouseleave", ()=>{
        o.value = !1,
        s.value = !1
    }
    ),
    Vt(e, "mouseout", ()=>{
        o.value = !1,
        s.value = !1
    }
    )),
    i.tapped && (FI() && (Vt(e, "mousedown", ()=>s.value = !0),
    Vt(e, "mouseup", ()=>s.value = !1)),
    UI() && (Vt(e, "pointerdown", ()=>s.value = !0),
    Vt(e, "pointerup", ()=>s.value = !1)),
    BI() && (Vt(e, "touchstart", ()=>s.value = !0),
    Vt(e, "touchend", ()=>s.value = !1))),
    i.focused && (Vt(e, "focus", ()=>a.value = !0),
    Vt(e, "blur", ()=>a.value = !1)),
    je(c, r)
}
function HI({set: e, target: t, variants: n, variant: r}) {
    const i = G(n);
    je(()=>t, ()=>{
        i && (i.initial && e("initial"),
        i.enter && (r.value = "enter"))
    }
    , {
        immediate: !0,
        flush: "pre"
    })
}
function jI({state: e, apply: t}) {
    je(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function gv({target: e, variants: t, variant: n}) {
    const r = G(t);
    r && (r.visible || r.visibleOnce) && eR(e, ([{isIntersecting: i}])=>{
        r.visible ? i ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (i && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function KI(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && HI(e),
    t.syncVariants && jI(e),
    t.visibilityHooks && gv(e),
    t.eventListeners && xI(e)
}
function yv(e={}) {
    const t = At({
        ...e
    })
      , n = le({});
    return je(t, ()=>{
        const r = {};
        for (const [i,o] of Object.entries(t)) {
            const s = Fu(i)
              , a = mv(o, s);
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
function Hu(e, t) {
    je(()=>io(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const YI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function vv(e={}, t=!0) {
    const n = At({
        ...e
    })
      , r = le("");
    return je(n, i=>{
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
            const c = Fu(a)
              , u = mv(l, c);
            o += `${YI[a] || a}(${u}) `
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
const qI = ["", "X", "Y", "Z"]
  , WI = ["perspective", "translate", "scale", "rotate", "skew"]
  , _v = ["transformPerspective", "x", "y", "z"];
WI.forEach(e=>{
    qI.forEach(t=>{
        const n = e + t;
        _v.push(n)
    }
    )
}
);
const GI = new Set(_v);
function ju(e) {
    return GI.has(e)
}
const JI = new Set(["originX", "originY", "originZ"]);
function bv(e) {
    return JI.has(e)
}
function zI(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,i])=>{
        ju(r) || bv(r) ? t[r] = i : n[r] = i
    }
    ),
    {
        transform: t,
        style: n
    }
}
function Ev(e) {
    const {transform: t, style: n} = zI(e)
      , {transform: r} = vv(t)
      , {style: i} = yv(n);
    return r.value && (i.value.transform = r.value),
    i.value
}
function QI(e, t) {
    let n, r;
    const {state: i, style: o} = yv();
    return Hu(e, s=>{
        r = s;
        for (const a of Object.keys(pv))
            s.style[a] === null || s.style[a] === "" || ju(a) || bv(a) || (i[a] = s.style[a]);
        n && Object.entries(n).forEach(([a,l])=>s.style[a] = l),
        t && t(i)
    }
    ),
    je(o, s=>{
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
function XI(e) {
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
function ZI(e, t) {
    Object.entries(XI(t)).forEach(([n,r])=>{
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
function $I(e, t) {
    let n, r;
    const {state: i, transform: o} = vv();
    return Hu(e, s=>{
        r = s,
        s.style.transform && ZI(i, s.style.transform),
        n && (s.style.transform = n),
        t && t(i)
    }
    ),
    je(o, s=>{
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
function eP(e, t) {
    const n = At({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: i} = QI(e, r)
      , {transform: o} = $I(e, r);
    return je(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const c = ju(a) ? o : i;
            c[a] && c[a] === l || (c[a] = l)
        }
        )
    }
    , {
        immediate: !0,
        deep: !0
    }),
    Hu(e, ()=>t && r(t)),
    {
        motionProperties: n,
        style: i,
        transform: o
    }
}
function tP(e={}) {
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
function Tv(e, t={}, n) {
    const {motionProperties: r} = eP(e)
      , {variant: i, state: o} = tP(t)
      , s = VI(r, t)
      , a = {
        target: e,
        variant: i,
        variants: t,
        state: o,
        motionProperties: r,
        ...s
    };
    return KI(a, n),
    a
}
const nP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function rP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && Ys(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    nP.forEach(r=>{
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
        if (n && n[r] && Ys(n[r])) {
            const i = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = i
        }
    }
    ))
}
function fl(e) {
    return {
        created: (r,i,o)=>{
            const s = i.value && typeof i.value == "string" ? i.value : o.key;
            s && ll[s] && ll[s].stop();
            const a = le(e || {});
            typeof i.value == "object" && (a.value = i.value),
            rP(o, a);
            const c = Tv(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = c,
            s && (ll[s] = c)
        }
        ,
        mounted: (r,i,o)=>{
            r.motionInstance && gv(r.motionInstance)
        }
        ,
        getSSRProps(r, i) {
            let {initial: o} = r.value || i && (i == null ? void 0 : i.props) || {};
            o = G(o);
            const s = ou((e == null ? void 0 : e.initial) || {}, o || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: Ev(s)
            }
        }
    }
}
const iP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , oP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , sP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , aP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , lP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}
  , cP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visibleOnce: {
        scale: 1,
        opacity: 1
    }
}
  , uP = {
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
  , fP = {
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
  , dP = {
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
  , hP = {
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
  , pP = {
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
  , mP = {
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
  , gP = {
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
  , yP = {
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
  , vP = {
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
  , _P = {
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
  , bP = {
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
  , EP = {
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
  , TP = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , AP = {
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
  , kP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , wP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , LP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , OP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , CP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , RP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , IP = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , PP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , MP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , Lc = {
    __proto__: null,
    fade: iP,
    fadeVisible: oP,
    fadeVisibleOnce: sP,
    pop: aP,
    popVisible: lP,
    popVisibleOnce: cP,
    rollBottom: _P,
    rollLeft: uP,
    rollRight: hP,
    rollTop: gP,
    rollVisibleBottom: bP,
    rollVisibleLeft: fP,
    rollVisibleOnceBottom: EP,
    rollVisibleOnceLeft: dP,
    rollVisibleOnceRight: mP,
    rollVisibleOnceTop: vP,
    rollVisibleRight: pP,
    rollVisibleTop: yP,
    slideBottom: IP,
    slideLeft: TP,
    slideRight: kP,
    slideTop: OP,
    slideVisibleBottom: PP,
    slideVisibleLeft: AP,
    slideVisibleOnceBottom: MP,
    slideVisibleOnceLeft: SP,
    slideVisibleOnceRight: LP,
    slideVisibleOnceTop: RP,
    slideVisibleRight: wP,
    slideVisibleTop: CP
}
  , DP = Be({
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
        const t = W0()
          , n = At({});
        if (!e.is && !t.default)
            return ()=>ft("div", {});
        const r = ue(()=>{
            let l;
            return e.preset && (l = Lc[e.preset]),
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
            return typeof s.value == "string" && !Dv(l) && (l = Wr(l)),
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
            zc(()=>Object.entries(n).forEach(([c,u])=>l(u)))
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
        const i = Ev(t.initial || {})
          , o = (l,c)=>(l.props || (l.props = {}),
        l.props.style = i,
        l.props.onVnodeMounted = ({el: u})=>{
            const f = Tv(u, t);
            n[c] = f
        }
        ,
        l);
        if (r) {
            const l = ft(r, void 0, e);
            return o(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,c)=>o(l, c))
    }
});
function NP(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, i=>`-${i}`).toLowerCase().replace(/\s+/g, "-").replace(r, i=>n.charAt(t.indexOf(i))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const VP = {
    install(e, t) {
        if (e.directive("motion", fl()),
        e.component("Motion", DP),
        !t || t && !t.excludePresets)
            for (const n in Lc) {
                const r = Lc[n];
                e.directive(`motion-${NP(n)}`, fl(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, fl(r))
            }
    }
}
  , UP = Dt(e=>{
    const t = Jn();
    e.vueApp.use(VP, t.public.motion)
}
)
  , BP = Dt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Jt()
          , n = Jn()
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
            const a = "href"in o && o.href[0] === "#" ? n.app.baseURL + o.href : Ii(n.app.baseURL, o.fullPath);
            lC({
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
function FP(e) {
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
const xP = Dt(()=>{
    const e = FP();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , HP = [xT, jT, iC, sC, aC, dC, hC, pC, VC, B1, F1, q1, UP, BP, xP]
  , jP = Be({
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
        return Kr(Vo, Ci(r)),
        ()=>ft(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , KP = Be({
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
          , o = Tt(Vo, null);
        let s;
        n({
            pageRef: i
        });
        const a = Tt(Tm, null);
        let l;
        const c = r.deferHydration();
        if (r.isHydrating) {
            const u = r.hooks.hookOnce("app:error", c);
            Jt().beforeEach(u)
        }
        return e.pageKey && je(()=>e.pageKey, (u,f)=>{
            u !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>ft($m, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: u=>{
                const f = qP(o, u.route, u.Component)
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
                const m = Jl(u, e.pageKey);
                !r.isHydrating && !WP(o, u.route, u.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const _ = !!(e.transition ?? u.route.meta.pageTransition ?? Yl)
                  , b = _ && YP([e.transition, u.route.meta.pageTransition, Yl, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", u.Component)
                    }
                }].filter(Boolean))
                  , A = e.keepalive ?? u.route.meta.keepalive ?? PT;
                return l = eg(Mo, _ && b, GA(A, ft(Wc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", u.Component),
                    onResolve: ()=>{
                        Wt(()=>r.callHook("page:finish", u.Component).then(()=>r.callHook("page:loading:end")).finally(c))
                    }
                }, {
                    default: ()=>{
                        const g = ft(jP, {
                            key: m || void 0,
                            vnode: u.Component,
                            route: u.route,
                            renderKey: m || void 0,
                            trackRootNodes: _,
                            vnodeRef: i
                        });
                        return A && (g.type.name = u.Component.type.name || u.Component.type.__name || "RouteProvider"),
                        g
                    }
                }))).default(),
                l
            }
        })
    }
});
function YP(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? fu(n.onAfterLeave) : void 0
    }));
    return ou(...t)
}
function qP(e, t, n) {
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
    ) || n && Jl({
        route: t,
        Component: n
    }) !== Jl({
        route: e,
        Component: n
    })
}
function WP(e, t, n) {
    return e ? t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const GP = Be({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await hr[e.name]().then(r=>r.default || r);
        return ()=>ft(n, e.layoutProps, t.slots)
    }
})
  , JP = Be({
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
          , r = Tt(Vo)
          , i = r === sa() ? qA() : r
          , o = ue(()=>{
            let l = G(e.name) ?? i.meta.layout ?? "default";
            return l && !(l in hr) && e.fallback && (l = G(e.fallback)),
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
            Jt().beforeEach(l)
        }
        return ()=>{
            const l = o.value && o.value in hr
              , c = i.meta.layoutTransition ?? IT;
            return eg(Mo, l && c, {
                default: ()=>ft(Wc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        Wt(a)
                    }
                }, {
                    default: ()=>ft(zP, {
                        layoutProps: _i(t.attrs, {
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
  , zP = Be({
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
        return e.shouldProvide && Kr(Tm, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, i;
            return !n || typeof n == "string" && !(n in hr) ? (i = (r = t.slots).default) == null ? void 0 : i.call(r) : ft(GP, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , QP = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , XP = {};
function ZP(e, t) {
    const n = KP
      , r = JP;
    return me(),
    _t(r, null, {
        default: ln(()=>[et(n)]),
        _: 1
    })
}
const $P = QP(XP, [["render", ZP]])
  , eM = ["innerHTML"]
  , tM = Be({
    __name: "Icon",
    props: {
        name: {}
    },
    async setup(e) {
        let t, n;
        const r = e
          , i = Object.fromEntries(Object.entries(Object.assign({
            "/assets/svg/icons/alarm-clock-glow.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/alarm-clock-glow.aC8bZIm6.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/alarm.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/alarm.DhXSImdX.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-boost.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-boost.CCdq5ioD.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-earn.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-earn.Bb212ucL.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-friends.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-friends.CTyi4Yjj.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-mine.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-mine.BkoJ97Sz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-playground.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/app-bar-playground.acdgU1sm.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding-new.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/arrow-onboarding-new.BEtKb0Zx.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/arrow-onboarding.BJzvMlow.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/caret-right.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/caret-right.Be5C5AdH.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/check.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/check.DpGtnzuV.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/clock.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/clock.BeWcAb1-.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close-simple.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/close-simple.BHIZU7ZI.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/close.KB0mydBa.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/complete.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/complete.lDxhBE40.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/copy.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/copy.CjcTersn.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/energy.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/energy.DhIj__pU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/eyes.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/eyes.DfHV8DJi.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/friends.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.D9yHF85E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gift.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/gift.D56pTUEE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/glow.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/glow.DR87XU47.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gr.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/gr.CE-S70jU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/heart.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/heart.uEUhPDEu.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/info.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/info.CwbDISi0.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/key.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/key.CBMDGpK3.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-arrow.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ln-arrow.C4l_4b2T.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-discord.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ln-discord.DNbmOmlO.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-medium.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ln-medium.BrOe8wIZ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-telegram.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ln-telegram.cBOmGQCr.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-x.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ln-x.CdWKHoAz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-youtube.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ln-youtube.q1Uak5_E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-background.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/loading-background.DLKaIbsv.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-image.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/loading-image.DD2lTtqq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-yellow.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/loading-yellow.BmzMALSJ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/loading.D5-YfgbB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/lock.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/lock.FuE0uKjd.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/markets.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/markets.Bq8f52NT.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/not-support-phone-glow.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/not-support-phone-glow.BSB35vgE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/refresh.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/refresh.BvInaMMK.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/robots.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/robots.BmOab4DB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/settings.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/settings.CezmlWen.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ticket.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ticket.DQ5Qpq-5.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/wallet.svg": ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/wallet.3o12uypq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default)
        })).map(([s,a])=>[s.split("/").pop().split(".").shift(), a]))
          , o = r.name && ([t,n] = J0(()=>{
            var s;
            return (s = i == null ? void 0 : i[r.name]) == null ? void 0 : s.call(i)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>G(o) ? (me(),
        Ge("div", {
            key: 0,
            class: "icon",
            innerHTML: G(o)
        }, null, 8, eM)) : qt("", !0)
    }
})
  , nM = {
    class: "is-token"
}
  , rM = ["srcset", "alt"]
  , iM = ["src", "alt"]
  , oM = Be({
    __name: "Token",
    setup(e) {
        return (t,n)=>(me(),
        Ge("picture", nM, [ge("source", {
            srcset: G(Zl).TOKEN_WEBP,
            type: "image/webp",
            alt: G(Xt).GAME_NAME
        }, null, 8, rM), ge("img", {
            class: "img-responsive",
            src: G(Zl).TOKEN,
            alt: G(Xt).GAME_NAME
        }, null, 8, iM)]))
    }
})
  , Wh = Zg({
    componentName: "NuxtLinkLocale"
})
  , sM = Be({
    name: "NuxtLinkLocale",
    props: {
        ...Wh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = Yg()
          , r = ue(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , i = ue(()=>{
            if (e.external || e.target && e.target !== "_self")
                return !0;
            const s = e.to ?? e.href;
            return typeof s == "object" ? !1 : s === "" || s == null || Un(s, {
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
        return ()=>ft(Wh, o(), t.default)
    }
});
function aM() {
    return Fn
}
const lM = {
    class: "ln"
}
  , cM = {
    class: "ln-header"
}
  , uM = {
    class: "ln-header-left"
}
  , fM = {
    class: "ln-header-social"
}
  , dM = ["href"]
  , hM = ["href"]
  , pM = ["innerHTML"]
  , mM = {
    class: "ln-header-center"
}
  , gM = {
    class: "ln-header-center-logo"
}
  , yM = {
    class: "ln-header-right"
}
  , vM = {
    class: "button"
}
  , _M = ["innerHTML"]
  , bM = ge("span", null, "coming soon", -1)
  , EM = {
    class: "ln-content"
}
  , TM = {
    key: 0
}
  , AM = {
    class: "is-small-text"
}
  , SM = {
    key: 1,
    class: "is-small-text"
}
  , kM = {
    key: 2,
    class: "is-small-text"
}
  , wM = {
    class: "ln-content-button"
}
  , LM = ["innerHTML"]
  , OM = ge("div", {
    class: "ln-bottom"
}, null, -1)
  , CM = Be({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var s;
        const t = Pn()
          , n = e;
        wT({
            title: `${((s = n.error) == null ? void 0 : s.statusCode) ?? 500} - ${Xt.GAME_NAME}`
        });
        const r = le("")
          , i = aM()
          , o = le(i.tz.guess());
        return Mt(()=>{
            r.value = navigator.userAgent,
            setTimeout(()=>{
                var a;
                ze().trackEvent(`error_${((a = n.error) == null ? void 0 : a.statusCode) ?? 500}`, {
                    timezone: o.value,
                    userAgent: r.value
                })
            }
            , 1e3)
        }
        ),
        (a,l)=>{
            var d, m, _;
            const c = tM
              , u = oM
              , f = sM;
            return me(),
            Ge("main", lM, [ge("div", cM, [ge("div", uM, [ge("div", fM, [ge("a", {
                class: "is-x",
                href: G(t).link_twitter,
                target: "_blank"
            }, [et(c, {
                name: "ln-x"
            })], 8, dM), ge("a", {
                class: "is-telegram",
                href: G(t).link_telegram,
                target: "_blank"
            }, [et(c, {
                name: "ln-telegram"
            })], 8, hM), ge("p", {
                innerHTML: a.$t("landing.join_us")
            }, null, 8, pM)])]), ge("div", mM, [ge("div", gM, [et(u)]), ge("p", null, Zt(G(Xt).GAME_NAME), 1)]), ge("div", yM, [ge("button", vM, [ge("p", {
                innerHTML: a.$t("landing.whitepaper")
            }, null, 8, _M), et(c, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), bM])])]), ge("div", EM, [ge("h1", null, Zt(e.error.statusCode ?? 500), 1), (d = e.error) != null && d.statusMessage ? (me(),
            Ge("p", TM, "Status: " + Zt(((m = e.error) == null ? void 0 : m.statusMessage) ?? ""), 1)) : qt("", !0), ge("p", AM, Zt((_ = e.error) == null ? void 0 : _.toJSON()), 1), G(r) ? (me(),
            Ge("p", SM, "User Agent: " + Zt(G(r)), 1)) : qt("", !0), G(o) ? (me(),
            Ge("p", kM, "TimeZone: " + Zt(G(o)), 1)) : qt("", !0), ge("div", wM, [et(f, {
                class: "button",
                to: G(xo).LANDING
            }, {
                default: ln(()=>[ge("span", {
                    innerHTML: a.$t("buttons.home")
                }, null, 8, LM)]),
                _: 1
            }, 8, ["to"])])]), OM])
        }
    }
})
  , Gh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = re()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            Jt().beforeEach(a)
        }
        const i = !1;
        Kr(Vo, sa()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const o = aa();
        Np((a,l,c)=>{
            if (n.hooks.callHook("vue:error", a, l, c).catch(u=>console.error("[nuxt] Error in `vue:error` hook", u)),
            RE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>si(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(me(),
        _t(Wc, {
            onResolve: G(r)
        }, {
            default: ln(()=>[G(o) ? (me(),
            _t(G(CM), {
                key: 0,
                error: G(o)
            }, null, 8, ["error"])) : G(s) ? (me(),
            _t(G(t), {
                key: 1,
                context: G(s)
            }, null, 8, ["context"])) : G(i) ? (me(),
            _t(vl(G(i)), {
                key: 2
            })) : (me(),
            _t(G($P), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Jh;
{
    let e;
    Jh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? nb(Gh) : om(Gh)
          , i = sE({
            vueApp: r
        });
        async function o(l) {
            await i.callHook("app:error", l),
            i.payload.error = i.payload.error || la(l)
        }
        r.config.errorHandler = o;
        try {
            await lE(i, HP)
        } catch (l) {
            o(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(DT),
            await i.hooks.callHook("app:mounted", r),
            await Wt()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = Jh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Bk as $, jk as A, IM as B, It as C, Y0 as D, oM as E, mt as F, $O as G, Yg as H, ZO as I, Rt as J, Uo as K, Uk as L, jM as M, QP as N, Hk as O, GM as P, UO as Q, sM as R, fe as S, aM as T, xo as U, Xt as V, MM as W, Mk as X, KM as Y, YM as Z, tM as _, Ge as a, Bn as a0, $e as a1, dc as a2, Yt as a3, Xp as a4, hg as a5, qM as a6, WM as a7, Rn as a8, ln as a9, PM as aA, wT as aB, Pm as aC, Ri as aD, QM as aE, Mo as aF, vl as aG, _i as aH, Tv as aI, sa as aJ, BM as aK, BL as aL, KP as aM, VM as aN, HM as aO, FM as aP, UM as aQ, DM as aa, lt as ab, NM as ac, tl as ad, el as ae, Fk as af, xk as ag, S as ah, Vk as ai, J0 as aj, Nk as ak, Dk as al, Kk as am, Wr as an, At as ao, Kr as ap, zc as aq, je as ar, Wt as as, ft as at, x0 as au, Yk as av, xM as aw, Er as ax, Zl as ay, Jn as az, G as b, ue as c, Be as d, ge as e, kt as f, Mi as g, zM as h, Ft as i, pa as j, et as k, _t as l, re as m, In as n, me as o, Pn as p, Mt as q, le as r, _n as s, Zt as t, ze as u, ht as v, qt as w, JM as x, Qt as y, RM as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["https://hamsterkombatgame.io/_nuxt/airdrop.CDu7Xiqe.js", "https://hamsterkombatgame.io/_nuxt/airdrop.B-21Jlaz.js", "https://hamsterkombatgame.io/_nuxt/Preloader.vue.B5mfnxSx.js", "https://hamsterkombatgame.io/_nuxt/earn.DdJPhkBz.js", "https://hamsterkombatgame.io/_nuxt/boost.CcyRNgqz.js", "https://hamsterkombatgame.io/_nuxt/BalanceLarge.vue.DDyOk5p4.js", "https://hamsterkombatgame.io/_nuxt/Price.vue.CpKTQ5ce.js", "https://hamsterkombatgame.io/_nuxt/earn.DS6Y8HEF.js", "https://hamsterkombatgame.io/_nuxt/attraction.DTCr1a3p.js", "https://hamsterkombatgame.io/_nuxt/friends.DAMflSd-.js", "https://hamsterkombatgame.io/_nuxt/index.CVbTPEZG.js", "https://hamsterkombatgame.io/_nuxt/navigation.b2H_cc5z.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.DykepGea.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.vkSr05gD.css", "https://hamsterkombatgame.io/_nuxt/navigation.Bw5XmvsK.css", "https://hamsterkombatgame.io/_nuxt/Earn.vue.9XGO9mfk.js", "https://hamsterkombatgame.io/_nuxt/image.vue.BsXoZZLV.js", "https://hamsterkombatgame.io/_nuxt/Hamster.vue.Bb_9mCJs.js", "https://hamsterkombatgame.io/_nuxt/MiniGameLose.vue.DPRZlJdG.js", "https://hamsterkombatgame.io/_nuxt/index.kcBWb2Yr.js", "https://hamsterkombatgame.io/_nuxt/mine.fnQHnxYd.js", "https://hamsterkombatgame.io/_nuxt/playground.BYd2Jr5H.js", "https://hamsterkombatgame.io/_nuxt/Image.vue.BHpwBslo.js", "https://hamsterkombatgame.io/_nuxt/bingx.CkxS7_IL.js", "https://hamsterkombatgame.io/_nuxt/exchange.BZlmAQrF.js", "https://hamsterkombatgame.io/_nuxt/index.CIM8X75v.js", "https://hamsterkombatgame.io/_nuxt/achievements.BQopdHD-.js", "https://hamsterkombatgame.io/_nuxt/AchievementStat.vue.DkjSQcSq.js", "https://hamsterkombatgame.io/_nuxt/Circles.vue.D3O4Xdy1.js", "https://hamsterkombatgame.io/_nuxt/index.DE1QmCWr.js", "https://hamsterkombatgame.io/_nuxt/index.vKS-t3t2.js", "https://hamsterkombatgame.io/_nuxt/LandingHeader.vue.BA24-3v1.js", "https://hamsterkombatgame.io/_nuxt/privacy-policy.DV_xsBtj.js", "https://hamsterkombatgame.io/_nuxt/default.Cy39KhnI.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
