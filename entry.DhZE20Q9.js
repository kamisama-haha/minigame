const ABSOLUTE_PATH = 'https://hamsterkombatgame.io/_nuxt/';

/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Js(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const rt = {}
  , ai = []
  , on = ()=>{}
  , wv = ()=>!1
  , Oo = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Oc = e=>e.startsWith("onUpdate:")
  , yt = Object.assign
  , Rc = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Av = Object.prototype.hasOwnProperty
  , Ke = (e,t)=>Av.call(e, t)
  , fe = Array.isArray
  , li = e=>Ro(e) === "[object Map]"
  , Qh = e=>Ro(e) === "[object Set]"
  , Lv = e=>Ro(e) === "[object RegExp]"
  , ge = e=>typeof e == "function"
  , ot = e=>typeof e == "string"
  , Ci = e=>typeof e == "symbol"
  , nt = e=>e !== null && typeof e == "object"
  , Ic = e=>(nt(e) || ge(e)) && ge(e.then) && ge(e.catch)
  , Xh = Object.prototype.toString
  , Ro = e=>Xh.call(e)
  , Cv = e=>Ro(e).slice(8, -1)
  , Zh = e=>Ro(e) === "[object Object]"
  , Pc = e=>ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ci = Js(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , zs = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Ov = /-(\w)/g
  , Vn = zs(e=>e.replace(Ov, (t,n)=>n ? n.toUpperCase() : ""))
  , Rv = /\B([A-Z])/g
  , Qr = zs(e=>e.replace(Rv, "-$1").toLowerCase())
  , Qs = zs(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Ca = zs(e=>e ? `on${Qs(e)}` : "")
  , br = (e,t)=>!Object.is(e, t)
  , ui = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , Es = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , hl = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , $h = e=>{
    const t = ot(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Wu;
const ep = ()=>Wu || (Wu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mn(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = ot(r) ? Dv(r) : Mn(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (ot(e) || nt(e))
        return e
}
const Iv = /;(?![^(]*\))/g
  , Pv = /:([^]+)/
  , Mv = /\/\*[^]*?\*\//g;
function Dv(e) {
    const t = {};
    return e.replace(Mv, "").split(Iv).forEach(n=>{
        if (n) {
            const r = n.split(Pv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Mt(e) {
    let t = "";
    if (ot(e))
        t = e;
    else if (fe(e))
        for (let n = 0; n < e.length; n++) {
            const r = Mt(e[n]);
            r && (t += r + " ")
        }
    else if (nt(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function cn(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !ot(t) && (e.class = Mt(t)),
    n && (e.style = Mn(n)),
    e
}
const Nv = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , Vv = Js(Nv)
  , Fv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , xv = Js(Fv);
function tp(e) {
    return !!e || e === ""
}
const en = e=>ot(e) ? e : e == null ? "" : fe(e) || nt(e) && (e.toString === Xh || !ge(e.toString)) ? JSON.stringify(e, np, 2) : String(e)
  , np = (e,t)=>t && t.__v_isRef ? np(e, t.value) : li(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,i],o)=>(n[Oa(r, o) + " =>"] = i,
    n), {})
} : Qh(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Oa(n))
} : Ci(t) ? Oa(t) : nt(t) && !fe(t) && !Zh(t) ? String(t) : t
  , Oa = (e,t="")=>{
    var n;
    return Ci(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qt;
class rp {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = qt,
        !t && qt && (this.index = (qt.scopes || (qt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = qt;
            try {
                return qt = this,
                t()
            } finally {
                qt = n
            }
        }
    }
    on() {
        qt = this
    }
    off() {
        qt = this.parent
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
function Io(e) {
    return new rp(e)
}
function Uv(e, t=qt) {
    t && t.active && t.effects.push(e)
}
function Po() {
    return qt
}
function Xs(e) {
    qt && qt.cleanups.push(e)
}
let Br;
class Mc {
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
          , n = Br;
        try {
            return mr = !0,
            Br = this,
            this._runnings++,
            Gu(this),
            this.fn()
        } finally {
            Ju(this),
            this._runnings--,
            Br = n,
            mr = t
        }
    }
    stop() {
        var t;
        this.active && (Gu(this),
        Ju(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Bv(e) {
    return e.value
}
function Gu(e) {
    e._trackId++,
    e._depsLength = 0
}
function Ju(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            ip(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function ip(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let mr = !0
  , pl = 0;
const op = [];
function Xr() {
    op.push(mr),
    mr = !1
}
function Zr() {
    const e = op.pop();
    mr = e === void 0 ? !0 : e
}
function Dc() {
    pl++
}
function Nc() {
    for (pl--; !pl && ml.length; )
        ml.shift()()
}
function sp(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && ip(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const ml = [];
function ap(e, t, n) {
    Dc();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && ml.push(r.scheduler)))
    }
    Nc()
}
const lp = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Ts = new WeakMap
  , Hr = Symbol("")
  , gl = Symbol("");
function jt(e, t, n) {
    if (mr && Br) {
        let r = Ts.get(e);
        r || Ts.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = lp(()=>r.delete(n))),
        sp(Br, i)
    }
}
function qn(e, t, n, r, i, o) {
    const s = Ts.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && fe(e)) {
        const l = Number(r);
        s.forEach((u,c)=>{
            (c === "length" || !Ci(c) && c >= l) && a.push(u)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            fe(e) ? Pc(n) && a.push(s.get("length")) : (a.push(s.get(Hr)),
            li(e) && a.push(s.get(gl)));
            break;
        case "delete":
            fe(e) || (a.push(s.get(Hr)),
            li(e) && a.push(s.get(gl)));
            break;
        case "set":
            li(e) && a.push(s.get(Hr));
            break
        }
    Dc();
    for (const l of a)
        l && ap(l, 4);
    Nc()
}
function Hv(e, t) {
    var n;
    return (n = Ts.get(e)) == null ? void 0 : n.get(t)
}
const jv = Js("__proto__,__v_isRef,__isVue")
  , cp = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Ci))
  , zu = Kv();
function Kv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = Ve(this);
            for (let o = 0, s = this.length; o < s; o++)
                jt(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(Ve)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            Xr(),
            Dc();
            const r = Ve(this)[t].apply(this, n);
            return Nc(),
            Zr(),
            r
        }
    }
    ),
    e
}
function Yv(e) {
    const t = Ve(this);
    return jt(t, "has", e),
    t.hasOwnProperty(e)
}
class up {
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
            return r === (i ? o ? r0 : pp : o ? hp : dp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = fe(t);
        if (!i) {
            if (s && Ke(zu, n))
                return Reflect.get(zu, n, r);
            if (n === "hasOwnProperty")
                return Yv
        }
        const a = Reflect.get(t, n, r);
        return (Ci(n) ? cp.has(n) : jv(n)) || (i || jt(t, "get", n),
        o) ? a : lt(a) ? s && Pc(n) ? a : a.value : nt(a) ? i ? dr(a) : St(a) : a
    }
}
class fp extends up {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = qr(o);
            if (!ks(r) && !qr(r) && (o = Ve(o),
            r = Ve(r)),
            !fe(t) && lt(o) && !lt(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const s = fe(t) && Pc(n) ? Number(n) < t.length : Ke(t, n)
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
        return (!Ci(n) || !cp.has(n)) && jt(t, "has", n),
        r
    }
    ownKeys(t) {
        return jt(t, "iterate", fe(t) ? "length" : Hr),
        Reflect.ownKeys(t)
    }
}
class qv extends up {
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
const Wv = new fp
  , Gv = new qv
  , Jv = new fp(!0)
  , Vc = e=>e
  , Zs = e=>Reflect.getPrototypeOf(e);
function Jo(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = Ve(e)
      , o = Ve(t);
    n || (br(t, o) && jt(i, "get", t),
    jt(i, "get", o));
    const {has: s} = Zs(i)
      , a = r ? Vc : n ? Uc : lo;
    if (s.call(i, t))
        return a(e.get(t));
    if (s.call(i, o))
        return a(e.get(o));
    e !== i && e.get(t)
}
function zo(e, t=!1) {
    const n = this.__v_raw
      , r = Ve(n)
      , i = Ve(e);
    return t || (br(e, i) && jt(r, "has", e),
    jt(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Qo(e, t=!1) {
    return e = e.__v_raw,
    !t && jt(Ve(e), "iterate", Hr),
    Reflect.get(e, "size", e)
}
function Qu(e) {
    e = Ve(e);
    const t = Ve(this);
    return Zs(t).has.call(t, e) || (t.add(e),
    qn(t, "add", e, e)),
    this
}
function Xu(e, t) {
    t = Ve(t);
    const n = Ve(this)
      , {has: r, get: i} = Zs(n);
    let o = r.call(n, e);
    o || (e = Ve(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? br(t, s) && qn(n, "set", e, t) : qn(n, "add", e, t),
    this
}
function Zu(e) {
    const t = Ve(this)
      , {has: n, get: r} = Zs(t);
    let i = n.call(t, e);
    i || (e = Ve(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && qn(t, "delete", e, void 0),
    o
}
function $u() {
    const e = Ve(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && qn(e, "clear", void 0, void 0),
    n
}
function Xo(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , a = Ve(s)
          , l = t ? Vc : e ? Uc : lo;
        return !e && jt(a, "iterate", Hr),
        s.forEach((u,c)=>r.call(i, l(u), l(c), o))
    }
}
function Zo(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = Ve(i)
          , s = li(o)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , u = i[e](...r)
          , c = n ? Vc : t ? Uc : lo;
        return !t && jt(o, "iterate", l ? gl : Hr),
        {
            next() {
                const {value: f, done: d} = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
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
function zv() {
    const e = {
        get(o) {
            return Jo(this, o)
        },
        get size() {
            return Qo(this)
        },
        has: zo,
        add: Qu,
        set: Xu,
        delete: Zu,
        clear: $u,
        forEach: Xo(!1, !1)
    }
      , t = {
        get(o) {
            return Jo(this, o, !1, !0)
        },
        get size() {
            return Qo(this)
        },
        has: zo,
        add: Qu,
        set: Xu,
        delete: Zu,
        clear: $u,
        forEach: Xo(!1, !0)
    }
      , n = {
        get(o) {
            return Jo(this, o, !0)
        },
        get size() {
            return Qo(this, !0)
        },
        has(o) {
            return zo.call(this, o, !0)
        },
        add: Qn("add"),
        set: Qn("set"),
        delete: Qn("delete"),
        clear: Qn("clear"),
        forEach: Xo(!0, !1)
    }
      , r = {
        get(o) {
            return Jo(this, o, !0, !0)
        },
        get size() {
            return Qo(this, !0)
        },
        has(o) {
            return zo.call(this, o, !0)
        },
        add: Qn("add"),
        set: Qn("set"),
        delete: Qn("delete"),
        clear: Qn("clear"),
        forEach: Xo(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = Zo(o, !1, !1),
        n[o] = Zo(o, !0, !1),
        t[o] = Zo(o, !1, !0),
        r[o] = Zo(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [Qv,Xv,Zv,$v] = zv();
function Fc(e, t) {
    const n = t ? e ? $v : Zv : e ? Xv : Qv;
    return (r,i,o)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(Ke(n, i) && i in r ? n : r, i, o)
}
const e0 = {
    get: Fc(!1, !1)
}
  , t0 = {
    get: Fc(!1, !0)
}
  , n0 = {
    get: Fc(!0, !1)
}
  , dp = new WeakMap
  , hp = new WeakMap
  , pp = new WeakMap
  , r0 = new WeakMap;
function i0(e) {
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
function o0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : i0(Cv(e))
}
function St(e) {
    return qr(e) ? e : xc(e, !1, Wv, e0, dp)
}
function Oi(e) {
    return xc(e, !1, Jv, t0, hp)
}
function dr(e) {
    return xc(e, !0, Gv, n0, pp)
}
function xc(e, t, n, r, i) {
    if (!nt(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = o0(e);
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
function ks(e) {
    return !!(e && e.__v_isShallow)
}
function mp(e) {
    return gr(e) || qr(e)
}
function Ve(e) {
    const t = e && e.__v_raw;
    return t ? Ve(t) : e
}
function ht(e) {
    return Object.isExtensible(e) && Es(e, "__v_skip", !0),
    e
}
const lo = e=>nt(e) ? St(e) : e
  , Uc = e=>nt(e) ? dr(e) : e;
class gp {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Mc(()=>t(this._value),()=>fi(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = Ve(this);
        return (!t._cacheable || t.effect.dirty) && br(t._value, t._value = t.effect.run()) && fi(t, 4),
        Bc(t),
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
function s0(e, t, n=!1) {
    let r, i;
    const o = ge(e);
    return o ? (r = e,
    i = on) : (r = e.get,
    i = e.set),
    new gp(r,i,o || !i,n)
}
function Bc(e) {
    var t;
    mr && Br && (e = Ve(e),
    sp(Br, (t = e.dep) != null ? t : e.dep = lp(()=>e.dep = void 0, e instanceof gp ? e : void 0)))
}
function fi(e, t=4, n) {
    e = Ve(e);
    const r = e.dep;
    r && ap(r, t)
}
function lt(e) {
    return !!(e && e.__v_isRef === !0)
}
function le(e) {
    return yp(e, !1)
}
function _n(e) {
    return yp(e, !0)
}
function yp(e, t) {
    return lt(e) ? e : new a0(e,t)
}
class a0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Ve(t),
        this._value = n ? t : lo(t)
    }
    get value() {
        return Bc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || ks(t) || qr(t);
        t = n ? t : Ve(t),
        br(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : lo(t),
        fi(this, 4))
    }
}
function vp(e) {
    fi(e, 4)
}
function G(e) {
    return lt(e) ? e.value : e
}
const l0 = {
    get: (e,t,n)=>G(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const i = e[t];
        return lt(i) && !lt(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function _p(e) {
    return gr(e) ? e : new Proxy(e,l0)
}
class c0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>Bc(this), ()=>fi(this));
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
function bp(e) {
    return new c0(e)
}
function Hc(e) {
    const t = fe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Ep(e, n);
    return t
}
class u0 {
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
        return Hv(Ve(this._object), this._key)
    }
}
class f0 {
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
    return lt(e) ? e : ge(e) ? new f0(e) : nt(e) && arguments.length > 1 ? Ep(e, t, n) : le(e)
}
function Ep(e, t, n) {
    const r = e[t];
    return lt(r) ? r : new u0(e,t,n)
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
        Mo(i, t, n)
    }
}
function ln(e, t, n, r) {
    if (ge(e)) {
        const o = yr(e, t, n, r);
        return o && Ic(o) && o.catch(s=>{
            Mo(s, t, n)
        }
        ),
        o
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        i.push(ln(e[o], t, n, r));
    return i
}
function Mo(e, t, n, r=!0) {
    const i = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const s = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const u = o.ec;
            if (u) {
                for (let c = 0; c < u.length; c++)
                    if (u[c](e, s, a) === !1)
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
    d0(e, n, i, r)
}
function d0(e, t, n, r=!0) {
    console.error(e)
}
let co = !1
  , yl = !1;
const Ct = [];
let Rn = 0;
const di = [];
let sr = null
  , Fr = 0;
const Tp = Promise.resolve();
let jc = null;
function Jt(e) {
    const t = jc || Tp;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function h0(e) {
    let t = Rn + 1
      , n = Ct.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = Ct[r]
          , o = uo(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function Kc(e) {
    (!Ct.length || !Ct.includes(e, co && e.allowRecurse ? Rn + 1 : Rn)) && (e.id == null ? Ct.push(e) : Ct.splice(h0(e.id), 0, e),
    kp())
}
function kp() {
    !co && !yl && (yl = !0,
    jc = Tp.then(Sp))
}
function p0(e) {
    const t = Ct.indexOf(e);
    t > Rn && Ct.splice(t, 1)
}
function vl(e) {
    fe(e) ? di.push(...e) : (!sr || !sr.includes(e, e.allowRecurse ? Fr + 1 : Fr)) && di.push(e),
    kp()
}
function ef(e, t, n=co ? Rn + 1 : 0) {
    for (; n < Ct.length; n++) {
        const r = Ct[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            Ct.splice(n, 1),
            n--,
            r()
        }
    }
}
function Ss(e) {
    if (di.length) {
        const t = [...new Set(di)].sort((n,r)=>uo(n) - uo(r));
        if (di.length = 0,
        sr) {
            sr.push(...t);
            return
        }
        for (sr = t,
        Fr = 0; Fr < sr.length; Fr++)
            sr[Fr]();
        sr = null,
        Fr = 0
    }
}
const uo = e=>e.id == null ? 1 / 0 : e.id
  , m0 = (e,t)=>{
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
function Sp(e) {
    yl = !1,
    co = !0,
    Ct.sort(m0);
    try {
        for (Rn = 0; Rn < Ct.length; Rn++) {
            const t = Ct[Rn];
            t && t.active !== !1 && yr(t, null, 14)
        }
    } finally {
        Rn = 0,
        Ct.length = 0,
        Ss(),
        co = !1,
        jc = null,
        (Ct.length || di.length) && Sp()
    }
}
function g0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || rt;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const c = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[c] || rt;
        d && (i = n.map(m=>ot(m) ? m.trim() : m)),
        f && (i = n.map(hl))
    }
    let a, l = r[a = Ca(t)] || r[a = Ca(Vn(t))];
    !l && o && (l = r[a = Ca(Qr(t))]),
    l && ln(l, e, 6, i);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        ln(u, e, 6, i)
    }
}
function wp(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let s = {}
      , a = !1;
    if (!ge(e)) {
        const l = u=>{
            const c = wp(u, t, !0);
            c && (a = !0,
            yt(s, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (nt(e) && r.set(e, null),
    null) : (fe(o) ? o.forEach(l=>s[l] = null) : yt(s, o),
    nt(e) && r.set(e, s),
    s)
}
function $s(e, t) {
    return !e || !Oo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ke(e, t[0].toLowerCase() + t.slice(1)) || Ke(e, Qr(t)) || Ke(e, t))
}
let pt = null
  , ea = null;
function ws(e) {
    const t = pt;
    return pt = e,
    ea = e && e.type.__scopeId || null,
    t
}
function y0(e) {
    ea = e
}
function v0() {
    ea = null
}
const _0 = e=>un;
function un(e, t=pt, n) {
    if (!t || e._n)
        return e;
    const r = (...i)=>{
        r._d && mf(-1);
        const o = ws(t);
        let s;
        try {
            s = e(...i)
        } finally {
            ws(o),
            r._d && mf(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Ra(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, props: o, propsOptions: [s], slots: a, attrs: l, emit: u, render: c, renderCache: f, data: d, setupState: m, ctx: _, inheritAttrs: b} = e;
    let k, g;
    const E = ws(e);
    try {
        if (n.shapeFlag & 4) {
            const y = i || r
              , T = y;
            k = tn(c.call(T, y, f, o, m, d, _)),
            g = l
        } else {
            const y = t;
            k = tn(y.length > 1 ? y(o, {
                attrs: l,
                slots: a,
                emit: u
            }) : y(o, null)),
            g = t.props ? l : E0(l)
        }
    } catch (y) {
        Wi.length = 0,
        Mo(y, e, 1),
        k = $e(Nt)
    }
    let p = k;
    if (g && b !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: T} = p;
        y.length && T & 7 && (s && y.some(Oc) && (g = T0(g, s)),
        p = Wn(p, g))
    }
    return n.dirs && (p = Wn(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    k = p,
    ws(E),
    k
}
function b0(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (vi(i)) {
            if (i.type !== Nt || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const E0 = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Oo(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , T0 = (e,t)=>{
    const n = {};
    for (const r in e)
        (!Oc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function k0(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: a, patchFlag: l} = t
      , u = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? tf(r, s, u) : !!s;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (s[d] !== r[d] && !$s(u, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? tf(r, s, u) : !0 : !!s;
    return !1
}
function tf(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !$s(n, o))
            return !0
    }
    return !1
}
function Yc({vnode: e, parent: t}, n) {
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
const qc = "components"
  , S0 = "directives";
function Wr(e, t) {
    return Wc(qc, e, !0, t) || e
}
const Ap = Symbol.for("v-ndc");
function _l(e) {
    return ot(e) ? Wc(qc, e, !1) || e : e || Ap
}
function MM(e) {
    return Wc(S0, e)
}
function Wc(e, t, n=!0, r=!1) {
    const i = pt || Et;
    if (i) {
        const o = i.type;
        if (e === qc) {
            const a = Il(o, !1);
            if (a && (a === t || a === Vn(t) || a === Qs(Vn(t))))
                return o
        }
        const s = nf(i[e] || o[e], t) || nf(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function nf(e, t) {
    return e && (e[t] || e[Vn(t)] || e[Qs(Vn(t))])
}
const Lp = e=>e.__isSuspense;
let bl = 0;
const w0 = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, i, o, s, a, l, u) {
        if (e == null)
            A0(t, n, r, i, o, s, a, l, u);
        else {
            if (o && o.deps > 0) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            L0(e, t, n, r, i, s, a, l, u)
        }
    },
    hydrate: C0,
    create: Jc,
    normalize: O0
}
  , Gc = w0;
function fo(e, t) {
    const n = e.props && e.props[t];
    ge(n) && n()
}
function A0(e, t, n, r, i, o, s, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , d = e.suspense = Jc(e, i, r, t, f, n, o, s, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, o, s),
    d.deps > 0 ? (fo(e, "onPending"),
    fo(e, "onFallback"),
    u(null, e.ssFallback, t, n, r, null, o, s),
    hi(d, e.ssFallback)) : d.resolve(!1, !0)
}
function L0(e, t, n, r, i, o, s, a, {p: l, um: u, o: {createElement: c}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: _, pendingBranch: b, isInFallback: k, isHydrating: g} = f;
    if (b)
        f.pendingBranch = d,
        pn(d, b) ? (l(b, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : k && (g || (l(_, m, n, r, i, null, o, s, a),
        hi(f, m)))) : (f.pendingId = bl++,
        g ? (f.isHydrating = !1,
        f.activeBranch = b) : u(b, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        k ? (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : (l(_, m, n, r, i, null, o, s, a),
        hi(f, m))) : _ && pn(d, _) ? (l(_, d, n, r, i, f, o, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 && f.resolve()));
    else if (_ && pn(d, _))
        l(_, d, n, r, i, f, o, s, a),
        hi(f, d);
    else if (fo(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = bl++,
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
function Jc(e, t, n, r, i, o, s, a, l, u, c=!1) {
    const {p: f, m: d, um: m, n: _, o: {parentNode: b, remove: k}} = u;
    let g;
    const E = R0(e);
    E && t != null && t.pendingBranch && (g = t.pendingId,
    t.deps++);
    const p = e.props ? $h(e.props.timeout) : void 0
      , y = o
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: bl++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(w=!1, L=!1) {
            const {vnode: C, activeBranch: O, pendingBranch: D, pendingId: B, effects: F, parentComponent: Z, container: W} = T;
            let K = !1;
            T.isHydrating ? T.isHydrating = !1 : w || (K = O && D.transition && D.transition.mode === "out-in",
            K && (O.transition.afterLeave = ()=>{
                B === T.pendingId && (d(D, W, o === y ? _(O) : o, 0),
                vl(F))
            }
            ),
            O && (b(O.el) !== T.hiddenContainer && (o = _(O)),
            m(O, Z, T, !0)),
            K || d(D, W, o, 0)),
            hi(T, D),
            T.pendingBranch = null,
            T.isInFallback = !1;
            let N = T.parent
              , Y = !1;
            for (; N; ) {
                if (N.pendingBranch) {
                    N.effects.push(...F),
                    Y = !0;
                    break
                }
                N = N.parent
            }
            !Y && !K && vl(F),
            T.effects = [],
            E && t && t.pendingBranch && g === t.pendingId && (t.deps--,
            t.deps === 0 && !L && t.resolve()),
            fo(C, "onResolve")
        },
        fallback(w) {
            if (!T.pendingBranch)
                return;
            const {vnode: L, activeBranch: C, parentComponent: O, container: D, namespace: B} = T;
            fo(L, "onFallback");
            const F = _(C)
              , Z = ()=>{
                T.isInFallback && (f(null, w, D, F, O, null, B, a, l),
                hi(T, w))
            }
              , W = w.transition && w.transition.mode === "out-in";
            W && (C.transition.afterLeave = Z),
            T.isInFallback = !0,
            m(C, O, null, !0),
            W || Z()
        },
        move(w, L, C) {
            T.activeBranch && d(T.activeBranch, w, L, C),
            T.container = w
        },
        next() {
            return T.activeBranch && _(T.activeBranch)
        },
        registerDep(w, L) {
            const C = !!T.pendingBranch;
            C && T.deps++;
            const O = w.vnode.el;
            w.asyncDep.catch(D=>{
                Mo(D, w, 0)
            }
            ).then(D=>{
                if (w.isUnmounted || T.isUnmounted || T.pendingId !== w.suspenseId)
                    return;
                w.asyncResolved = !0;
                const {vnode: B} = w;
                Rl(w, D, !1),
                O && (B.el = O);
                const F = !O && w.subTree.el;
                L(w, B, b(O || w.subTree.el), O ? null : _(w.subTree), T, s, l),
                F && k(F),
                Yc(w, B.el),
                C && --T.deps === 0 && T.resolve()
            }
            )
        },
        unmount(w, L) {
            T.isUnmounted = !0,
            T.activeBranch && m(T.activeBranch, n, w, L),
            T.pendingBranch && m(T.pendingBranch, n, w, L)
        }
    };
    return T
}
function C0(e, t, n, r, i, o, s, a, l) {
    const u = t.suspense = Jc(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, a, !0)
      , c = l(e, u.pendingBranch = t.ssContent, n, u, o, s);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function O0(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = rf(r ? n.default : n),
    e.ssFallback = r ? rf(n.fallback) : $e(Nt)
}
function rf(e) {
    let t;
    if (ge(e)) {
        const n = yi && e._c;
        n && (e._d = !1,
        pe()),
        e = e(),
        n && (e._d = !0,
        t = sn,
        zp())
    }
    return fe(e) && (e = b0(e)),
    e = tn(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function Cp(e, t) {
    t && t.pendingBranch ? fe(e) ? t.effects.push(...e) : t.effects.push(e) : vl(e)
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
    Yc(r, i))
}
function R0(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const I0 = Symbol.for("v-scx")
  , P0 = ()=>kt(I0);
function M0(e, t) {
    return zc(e, null, t)
}
const $o = {};
function je(e, t, n) {
    return zc(e, t, n)
}
function zc(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: a}=rt) {
    if (t && o) {
        const w = t;
        t = (...L)=>{
            w(...L),
            T()
        }
    }
    const l = Et
      , u = w=>r === !0 ? w : xr(w, r === !1 ? 1 : void 0);
    let c, f = !1, d = !1;
    if (lt(e) ? (c = ()=>e.value,
    f = ks(e)) : gr(e) ? (c = ()=>u(e),
    f = !0) : fe(e) ? (d = !0,
    f = e.some(w=>gr(w) || ks(w)),
    c = ()=>e.map(w=>{
        if (lt(w))
            return w.value;
        if (gr(w))
            return u(w);
        if (ge(w))
            return yr(w, l, 2)
    }
    )) : ge(e) ? t ? c = ()=>yr(e, l, 2) : c = ()=>(m && m(),
    ln(e, l, 3, [_])) : c = on,
    t && r) {
        const w = c;
        c = ()=>xr(w())
    }
    let m, _ = w=>{
        m = p.onStop = ()=>{
            yr(w, l, 4),
            m = p.onStop = void 0
        }
    }
    , b;
    if (oa)
        if (_ = on,
        t ? n && ln(t, l, 3, [c(), d ? [] : void 0, _]) : c(),
        i === "sync") {
            const w = P0();
            b = w.__watcherHandles || (w.__watcherHandles = [])
        } else
            return on;
    let k = d ? new Array(e.length).fill($o) : $o;
    const g = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const w = p.run();
                (r || f || (d ? w.some((L,C)=>br(L, k[C])) : br(w, k))) && (m && m(),
                ln(t, l, 3, [w, k === $o ? void 0 : d && k[0] === $o ? [] : k, _]),
                k = w)
            } else
                p.run()
    }
    ;
    g.allowRecurse = !!t;
    let E;
    i === "sync" ? E = g : i === "post" ? E = ()=>wt(g, l && l.suspense) : (g.pre = !0,
    l && (g.id = l.uid),
    E = ()=>Kc(g));
    const p = new Mc(c,on,E)
      , y = Po()
      , T = ()=>{
        p.stop(),
        y && Rc(y.effects, p)
    }
    ;
    return t ? n ? g() : k = p.run() : i === "post" ? wt(p.run.bind(p), l && l.suspense) : p.run(),
    b && b.push(T),
    T
}
function D0(e, t, n) {
    const r = this.proxy
      , i = ot(e) ? e.includes(".") ? Op(r, e) : ()=>r[e] : e.bind(r, r);
    let o;
    ge(t) ? o = t : (o = t.handler,
    n = t);
    const s = Jr(this)
      , a = zc(i, o.bind(r), n);
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
function xr(e, t, n=0, r) {
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
        xr(e.value, t, n, r);
    else if (fe(e))
        for (let i = 0; i < e.length; i++)
            xr(e[i], t, n, r);
    else if (Qh(e) || li(e))
        e.forEach(i=>{
            xr(i, t, n, r)
        }
        );
    else if (Zh(e))
        for (const i in e)
            xr(e[i], t, n, r);
    return e
}
function DM(e, t) {
    if (pt === null)
        return e;
    const n = sa(pt) || pt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,a,l=rt] = t[i];
        o && (ge(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && xr(s),
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
function On(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        o && (a.oldValue = o[s].value);
        let l = a.dir[r];
        l && (Xr(),
        ln(l, n, 8, [e.el, a, e, t]),
        Zr())
    }
}
const ar = Symbol("_leaveCb")
  , es = Symbol("_enterCb");
function N0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Vt(()=>{
        e.isMounted = !0
    }
    ),
    Tn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Zt = [Function, Array]
  , Rp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Zt,
    onEnter: Zt,
    onAfterEnter: Zt,
    onEnterCancelled: Zt,
    onBeforeLeave: Zt,
    onLeave: Zt,
    onAfterLeave: Zt,
    onLeaveCancelled: Zt,
    onBeforeAppear: Zt,
    onAppear: Zt,
    onAfterAppear: Zt,
    onAppearCancelled: Zt
}
  , V0 = {
    name: "BaseTransition",
    props: Rp,
    setup(e, {slots: t}) {
        const n = kn()
          , r = N0();
        return ()=>{
            const i = t.default && Pp(t.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const d of i)
                    if (d.type !== Nt) {
                        o = d;
                        break
                    }
            }
            const s = Ve(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Ia(o);
            const l = of(o);
            if (!l)
                return Ia(o);
            const u = El(l, s, r, n);
            As(l, u);
            const c = n.subTree
              , f = c && of(c);
            if (f && f.type !== Nt && !pn(l, f)) {
                const d = El(f, s, r, n);
                if (As(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ia(o);
                a === "in-out" && l.type !== Nt && (d.delayLeave = (m,_,b)=>{
                    const k = Ip(r, f);
                    k[String(f.key)] = f,
                    m[ar] = ()=>{
                        _(),
                        m[ar] = void 0,
                        delete u.delayedLeave
                    }
                    ,
                    u.delayedLeave = b
                }
                )
            }
            return o
        }
    }
}
  , F0 = V0;
function Ip(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function El(e, t, n, r) {
    const {appear: i, mode: o, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: b, onAppear: k, onAfterAppear: g, onAppearCancelled: E} = t
      , p = String(e.key)
      , y = Ip(n, e)
      , T = (C,O)=>{
        C && ln(C, r, 9, O)
    }
      , w = (C,O)=>{
        const D = O[1];
        T(C, O),
        fe(C) ? C.every(B=>B.length <= 1) && D() : C.length <= 1 && D()
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
            C[ar] && C[ar](!0);
            const D = y[p];
            D && pn(e, D) && D.el[ar] && D.el[ar](),
            T(O, [C])
        },
        enter(C) {
            let O = l
              , D = u
              , B = c;
            if (!n.isMounted)
                if (i)
                    O = k || l,
                    D = g || u,
                    B = E || c;
                else
                    return;
            let F = !1;
            const Z = C[es] = W=>{
                F || (F = !0,
                W ? T(B, [C]) : T(D, [C]),
                L.delayedLeave && L.delayedLeave(),
                C[es] = void 0)
            }
            ;
            O ? w(O, [C, Z]) : Z()
        },
        leave(C, O) {
            const D = String(e.key);
            if (C[es] && C[es](!0),
            n.isUnmounting)
                return O();
            T(f, [C]);
            let B = !1;
            const F = C[ar] = Z=>{
                B || (B = !0,
                O(),
                Z ? T(_, [C]) : T(m, [C]),
                C[ar] = void 0,
                y[D] === e && delete y[D])
            }
            ;
            y[D] = e,
            d ? w(d, [C, F]) : F()
        },
        clone(C) {
            return El(C, t, n, r)
        }
    };
    return L
}
function Ia(e) {
    if (ta(e))
        return e = Wn(e),
        e.children = null,
        e
}
function of(e) {
    return ta(e) ? e.children ? e.children[0] : void 0 : e
}
function As(e, t) {
    e.shapeFlag & 6 && e.component ? As(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Pp(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === mt ? (s.patchFlag & 128 && i++,
        r = r.concat(Pp(s.children, t, a))) : (t || s.type !== Nt) && r.push(a != null ? Wn(s, {
            key: a
        }) : s)
    }
    if (i > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function xe(e, t) {
    return ge(e) ? yt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const jr = e=>!!e.type.__asyncLoader
  , ta = e=>e.type.__isKeepAlive
  , x0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = kn()
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
          , {renderer: {p: l, m: u, um: c, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (E,p,y,T,w)=>{
            const L = E.component;
            u(E, p, y, 0, a),
            l(L.vnode, E, p, y, L, a, T, E.slotScopeIds, w),
            wt(()=>{
                L.isDeactivated = !1,
                L.a && ui(L.a);
                const C = E.props && E.props.onVnodeMounted;
                C && Bt(C, L.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            u(E, d, null, 1, a),
            wt(()=>{
                p.da && ui(p.da);
                const y = E.props && E.props.onVnodeUnmounted;
                y && Bt(y, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Pa(E),
            c(E, n, a, !0)
        }
        function _(E) {
            i.forEach((p,y)=>{
                const T = Il(p.type);
                T && (!E || !E(T)) && b(y)
            }
            )
        }
        function b(E) {
            const p = i.get(E);
            !s || !pn(p, s) ? m(p) : s && Pa(s),
            i.delete(E),
            o.delete(E)
        }
        je(()=>[e.include, e.exclude], ([E,p])=>{
            E && _(y=>Bi(E, y)),
            p && _(y=>!Bi(p, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let k = null;
        const g = ()=>{
            k != null && i.set(k, Ma(n.subTree))
        }
        ;
        return Vt(g),
        Qc(g),
        Tn(()=>{
            i.forEach(E=>{
                const {subTree: p, suspense: y} = n
                  , T = Ma(p);
                if (E.type === T.type && E.key === T.key) {
                    Pa(T);
                    const w = T.component.da;
                    w && wt(w, y);
                    return
                }
                m(E)
            }
            )
        }
        ),
        ()=>{
            if (k = null,
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
            let y = Ma(p);
            const T = y.type
              , w = Il(jr(y) ? y.type.__asyncResolved || {} : T)
              , {include: L, exclude: C, max: O} = e;
            if (L && (!w || !Bi(L, w)) || C && w && Bi(C, w))
                return s = y,
                p;
            const D = y.key == null ? T : y.key
              , B = i.get(D);
            return y.el && (y = Wn(y),
            p.shapeFlag & 128 && (p.ssContent = y)),
            k = D,
            B ? (y.el = B.el,
            y.component = B.component,
            y.transition && As(y, y.transition),
            y.shapeFlag |= 512,
            o.delete(D),
            o.add(D)) : (o.add(D),
            O && o.size > parseInt(O, 10) && b(o.values().next().value)),
            y.shapeFlag |= 256,
            s = y,
            Lp(p.type) ? p : y
        }
    }
}
  , U0 = x0;
function Bi(e, t) {
    return fe(e) ? e.some(n=>Bi(n, t)) : ot(e) ? e.split(",").includes(t) : Lv(e) ? e.test(t) : !1
}
function Mp(e, t) {
    Np(e, "a", t)
}
function Dp(e, t) {
    Np(e, "da", t)
}
function Np(e, t, n=Et) {
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
    if (na(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            ta(i.parent.vnode) && B0(r, t, n, i),
            i = i.parent
    }
}
function B0(e, t, n, r) {
    const i = na(t, e, r, !0);
    Ri(()=>{
        Rc(r[t], i)
    }
    , n)
}
function Pa(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Ma(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function na(e, t, n=Et, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            Xr();
            const a = Jr(n)
              , l = ln(t, n, e, s);
            return a(),
            Zr(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const Gn = e=>(t,n=Et)=>(!oa || e === "sp") && na(e, (...r)=>t(...r), n)
  , H0 = Gn("bm")
  , Vt = Gn("m")
  , j0 = Gn("bu")
  , Qc = Gn("u")
  , Tn = Gn("bum")
  , Ri = Gn("um")
  , K0 = Gn("sp")
  , Y0 = Gn("rtg")
  , q0 = Gn("rtc");
function Vp(e, t=Et) {
    na("ec", e, t)
}
function W0(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (fe(e) || ot(e)) {
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
                const u = s[a];
                i[a] = t(e[u], u, a, o && o[a])
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
        $e("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    pe();
    const s = o && Fp(o(n))
      , a = bt(mt, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function Fp(e) {
    return e.some(t=>vi(t) ? !(t.type === Nt || t.type === mt && !Fp(t.children)) : !0) ? e : null
}
const Tl = e=>e ? $p(e) ? sa(e) || e.proxy : Tl(e.parent) : null
  , Ki = yt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>Tl(e.parent),
    $root: e=>Tl(e.root),
    $emit: e=>e.emit,
    $options: e=>Xc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        Kc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Jt.bind(e.proxy)),
    $watch: e=>D0.bind(e)
})
  , Da = (e,t)=>e !== rt && !e.__isScriptSetup && Ke(e, t)
  , G0 = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: i, props: o, accessCache: s, type: a, appContext: l} = e;
        let u;
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
                if (Da(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== rt && Ke(i, t))
                    return s[t] = 2,
                    i[t];
                if ((u = e.propsOptions[0]) && Ke(u, t))
                    return s[t] = 3,
                    o[t];
                if (n !== rt && Ke(n, t))
                    return s[t] = 4,
                    n[t];
                Sl && (s[t] = 0)
            }
        }
        const c = Ki[t];
        let f, d;
        if (c)
            return t === "$attrs" && jt(e, "get", t),
            c(e);
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
        return Da(i, t) ? (i[t] = n,
        !0) : r !== rt && Ke(r, t) ? (r[t] = n,
        !0) : Ke(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let a;
        return !!n[s] || e !== rt && Ke(e, s) || Da(t, s) || (a = o[0]) && Ke(a, s) || Ke(r, s) || Ke(Ki, s) || Ke(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ke(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function J0() {
    return z0().slots
}
function z0() {
    const e = kn();
    return e.setupContext || (e.setupContext = tm(e))
}
function kl(e) {
    return fe(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function ra(e, t) {
    const n = kl(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let i = n[r];
        i ? fe(i) || ge(i) ? i = n[r] = {
            type: i,
            default: t[r]
        } : i.default = t[r] : i === null && (i = n[r] = {
            default: t[r]
        }),
        i && t[`__skip_${r}`] && (i.skipFactory = !0)
    }
    return n
}
function Q0(e) {
    const t = kn();
    let n = e();
    return Ol(),
    Ic(n) && (n = n.catch(r=>{
        throw Jr(t),
        r
    }
    )),
    [n, ()=>Jr(t)]
}
let Sl = !0;
function X0(e) {
    const t = Xc(e)
      , n = e.proxy
      , r = e.ctx;
    Sl = !1,
    t.beforeCreate && sf(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: _, activated: b, deactivated: k, beforeDestroy: g, beforeUnmount: E, destroyed: p, unmounted: y, render: T, renderTracked: w, renderTriggered: L, errorCaptured: C, serverPrefetch: O, expose: D, inheritAttrs: B, components: F, directives: Z, filters: W} = t;
    if (u && Z0(u, r, null),
    s)
        for (const Y in s) {
            const x = s[Y];
            ge(x) && (r[Y] = x.bind(n))
        }
    if (i) {
        const Y = i.call(n, n);
        nt(Y) && (e.data = St(Y))
    }
    if (Sl = !0,
    o)
        for (const Y in o) {
            const x = o[Y]
              , ae = ge(x) ? x.bind(n, n) : ge(x.get) ? x.get.bind(n, n) : on
              , j = !ge(x) && ge(x.set) ? x.set.bind(n) : on
              , ce = ue({
                get: ae,
                set: j
            });
            Object.defineProperty(r, Y, {
                enumerable: !0,
                configurable: !0,
                get: ()=>ce.value,
                set: ve=>ce.value = ve
            })
        }
    if (a)
        for (const Y in a)
            xp(a[Y], r, n, Y);
    if (l) {
        const Y = ge(l) ? l.call(n) : l;
        Reflect.ownKeys(Y).forEach(x=>{
            Kr(x, Y[x])
        }
        )
    }
    c && sf(c, e, "c");
    function N(Y, x) {
        fe(x) ? x.forEach(ae=>Y(ae.bind(n))) : x && Y(x.bind(n))
    }
    if (N(H0, f),
    N(Vt, d),
    N(j0, m),
    N(Qc, _),
    N(Mp, b),
    N(Dp, k),
    N(Vp, C),
    N(q0, w),
    N(Y0, L),
    N(Tn, E),
    N(Ri, y),
    N(K0, O),
    fe(D))
        if (D.length) {
            const Y = e.exposed || (e.exposed = {});
            D.forEach(x=>{
                Object.defineProperty(Y, x, {
                    get: ()=>n[x],
                    set: ae=>n[x] = ae
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    T && e.render === on && (e.render = T),
    B != null && (e.inheritAttrs = B),
    F && (e.components = F),
    Z && (e.directives = Z)
}
function Z0(e, t, n=on) {
    fe(e) && (e = wl(e));
    for (const r in e) {
        const i = e[r];
        let o;
        nt(i) ? "default"in i ? o = kt(i.from || r, i.default, !0) : o = kt(i.from || r) : o = kt(i),
        lt(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: s=>o.value = s
        }) : t[r] = o
    }
}
function sf(e, t, n) {
    ln(fe(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function xp(e, t, n, r) {
    const i = r.includes(".") ? Op(n, r) : ()=>n[r];
    if (ot(e)) {
        const o = t[e];
        ge(o) && je(i, o)
    } else if (ge(e))
        je(i, e.bind(n));
    else if (nt(e))
        if (fe(e))
            e.forEach(o=>xp(o, t, n, r));
        else {
            const o = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
            ge(o) && je(i, o, e)
        }
}
function Xc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach(u=>Ls(l, u, s, !0)),
    Ls(l, t, s)),
    nt(t) && o.set(t, l),
    l
}
function Ls(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && Ls(e, o, n, !0),
    i && i.forEach(s=>Ls(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = $0[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const $0 = {
    data: af,
    props: lf,
    emits: lf,
    methods: Hi,
    computed: Hi,
    beforeCreate: It,
    created: It,
    beforeMount: It,
    mounted: It,
    beforeUpdate: It,
    updated: It,
    beforeDestroy: It,
    beforeUnmount: It,
    destroyed: It,
    unmounted: It,
    activated: It,
    deactivated: It,
    errorCaptured: It,
    serverPrefetch: It,
    components: Hi,
    directives: Hi,
    watch: t_,
    provide: af,
    inject: e_
};
function af(e, t) {
    return t ? e ? function() {
        return yt(ge(e) ? e.call(this, this) : e, ge(t) ? t.call(this, this) : t)
    }
    : t : e
}
function e_(e, t) {
    return Hi(wl(e), wl(t))
}
function wl(e) {
    if (fe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function It(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Hi(e, t) {
    return e ? yt(Object.create(null), e, t) : t
}
function lf(e, t) {
    return e ? fe(e) && fe(t) ? [...new Set([...e, ...t])] : yt(Object.create(null), kl(e), kl(t ?? {})) : t
}
function t_(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = yt(Object.create(null), e);
    for (const r in t)
        n[r] = It(e[r], t[r]);
    return n
}
function Up() {
    return {
        app: null,
        config: {
            isNativeTag: wv,
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
let n_ = 0;
function r_(e, t) {
    return function(r, i=null) {
        ge(r) || (r = yt({}, r)),
        i != null && !nt(i) && (i = null);
        const o = Up()
          , s = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: n_++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: nm,
            get config() {
                return o.config
            },
            set config(u) {},
            use(u, ...c) {
                return s.has(u) || (u && ge(u.install) ? (s.add(u),
                u.install(l, ...c)) : ge(u) && (s.add(u),
                u(l, ...c))),
                l
            },
            mixin(u) {
                return o.mixins.includes(u) || o.mixins.push(u),
                l
            },
            component(u, c) {
                return c ? (o.components[u] = c,
                l) : o.components[u]
            },
            directive(u, c) {
                return c ? (o.directives[u] = c,
                l) : o.directives[u]
            },
            mount(u, c, f) {
                if (!a) {
                    const d = $e(r, i);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    c && t ? t(d, u) : e(d, u, f),
                    a = !0,
                    l._container = u,
                    u.__vue_app__ = l,
                    sa(d.component) || d.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(u, c) {
                return o.provides[u] = c,
                l
            },
            runWithContext(u) {
                const c = pi;
                pi = l;
                try {
                    return u()
                } finally {
                    pi = c
                }
            }
        };
        return l
    }
}
let pi = null;
function Kr(e, t) {
    if (Et) {
        let n = Et.provides;
        const r = Et.parent && Et.parent.provides;
        r === n && (n = Et.provides = Object.create(r)),
        n[e] = t
    }
}
function kt(e, t, n=!1) {
    const r = Et || pt;
    if (r || pi) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : pi._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && ge(t) ? t.call(r && r.proxy) : t
    }
}
function Zc() {
    return !!(Et || pt || pi)
}
function i_(e, t, n, r=!1) {
    const i = {}
      , o = {};
    Es(o, ia, 1),
    e.propsDefaults = Object.create(null),
    Bp(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Oi(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function o_(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , a = Ve(i)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if ($s(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (Ke(o, d))
                        m !== o[d] && (o[d] = m,
                        u = !0);
                    else {
                        const _ = Vn(d);
                        i[_] = Al(l, a, _, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    u = !0)
            }
        }
    } else {
        Bp(e, t, i, o) && (u = !0);
        let c;
        for (const f in a)
            (!t || !Ke(t, f) && ((c = Qr(f)) === f || !Ke(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = Al(l, a, f, void 0, e, !0)) : delete i[f]);
        if (o !== a)
            for (const f in o)
                (!t || !Ke(t, f)) && (delete o[f],
                u = !0)
    }
    u && qn(e, "set", "$attrs")
}
function Bp(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (ci(l))
                continue;
            const u = t[l];
            let c;
            i && Ke(i, c = Vn(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : $s(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            s = !0)
        }
    if (o) {
        const l = Ve(n)
          , u = a || rt;
        for (let c = 0; c < o.length; c++) {
            const f = o[c];
            n[f] = Al(i, l, f, u[f], e, !Ke(u, f))
        }
    }
    return s
}
function Al(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const a = Ke(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && ge(l)) {
                const {propsDefaults: u} = i;
                if (n in u)
                    r = u[n];
                else {
                    const c = Jr(i);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l
        }
        s[0] && (o && !a ? r = !1 : s[1] && (r === "" || r === Qr(n)) && (r = !0))
    }
    return r
}
function Hp(e, t, n=!1) {
    const r = t.propsCache
      , i = r.get(e);
    if (i)
        return i;
    const o = e.props
      , s = {}
      , a = [];
    let l = !1;
    if (!ge(e)) {
        const c = f=>{
            l = !0;
            const [d,m] = Hp(f, t, !0);
            yt(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!o && !l)
        return nt(e) && r.set(e, ai),
        ai;
    if (fe(o))
        for (let c = 0; c < o.length; c++) {
            const f = Vn(o[c]);
            cf(f) && (s[f] = rt)
        }
    else if (o)
        for (const c in o) {
            const f = Vn(c);
            if (cf(f)) {
                const d = o[c]
                  , m = s[f] = fe(d) || ge(d) ? {
                    type: d
                } : yt({}, d);
                if (m) {
                    const _ = df(Boolean, m.type)
                      , b = df(String, m.type);
                    m[0] = _ > -1,
                    m[1] = b < 0 || _ < b,
                    (_ > -1 || Ke(m, "default")) && a.push(f)
                }
            }
        }
    const u = [s, a];
    return nt(e) && r.set(e, u),
    u
}
function cf(e) {
    return e[0] !== "$" && !ci(e)
}
function uf(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function ff(e, t) {
    return uf(e) === uf(t)
}
function df(e, t) {
    return fe(t) ? t.findIndex(n=>ff(n, e)) : ge(t) && ff(t, e) ? 0 : -1
}
const jp = e=>e[0] === "_" || e === "$stable"
  , $c = e=>fe(e) ? e.map(tn) : [tn(e)]
  , s_ = (e,t,n)=>{
    if (t._n)
        return t;
    const r = un((...i)=>$c(t(...i)), n);
    return r._c = !1,
    r
}
  , Kp = (e,t,n)=>{
    const r = e._ctx;
    for (const i in e) {
        if (jp(i))
            continue;
        const o = e[i];
        if (ge(o))
            t[i] = s_(i, o, r);
        else if (o != null) {
            const s = $c(o);
            t[i] = ()=>s
        }
    }
}
  , Yp = (e,t)=>{
    const n = $c(t);
    e.slots.default = ()=>n
}
  , a_ = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Ve(t),
        Es(t, "_", n)) : Kp(t, e.slots = {})
    } else
        e.slots = {},
        t && Yp(e, t);
    Es(e.slots, ia, 1)
}
  , l_ = (e,t,n)=>{
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = rt;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (yt(i, t),
        !n && a === 1 && delete i._) : (o = !t.$stable,
        Kp(t, i)),
        s = t
    } else
        t && (Yp(e, t),
        s = {
            default: 1
        });
    if (o)
        for (const a in i)
            !jp(a) && s[a] == null && delete i[a]
}
;
function Cs(e, t, n, r, i=!1) {
    if (fe(e)) {
        e.forEach((d,m)=>Cs(d, t && (fe(t) ? t[m] : t), n, r, i));
        return
    }
    if (jr(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? sa(r.component) || r.component.proxy : r.el
      , s = i ? null : o
      , {i: a, r: l} = e
      , u = t && t.r
      , c = a.refs === rt ? a.refs = {} : a.refs
      , f = a.setupState;
    if (u != null && u !== l && (ot(u) ? (c[u] = null,
    Ke(f, u) && (f[u] = null)) : lt(u) && (u.value = null)),
    ge(l))
        yr(l, a, 12, [s, c]);
    else {
        const d = ot(l)
          , m = lt(l);
        if (d || m) {
            const _ = ()=>{
                if (e.f) {
                    const b = d ? Ke(f, l) ? f[l] : c[l] : l.value;
                    i ? fe(b) && Rc(b, o) : fe(b) ? b.includes(o) || b.push(o) : d ? (c[l] = [o],
                    Ke(f, l) && (f[l] = c[l])) : (l.value = [o],
                    e.k && (c[e.k] = l.value))
                } else
                    d ? (c[l] = s,
                    Ke(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (c[e.k] = s))
            }
            ;
            s ? (_.id = -1,
            wt(_, n)) : _()
        }
    }
}
let Xn = !1;
const c_ = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , u_ = e=>e.namespaceURI.includes("MathML")
  , ts = e=>{
    if (c_(e))
        return "svg";
    if (u_(e))
        return "mathml"
}
  , ns = e=>e.nodeType === 8;
function f_(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: a, insert: l, createComment: u}} = e
      , c = (p,y)=>{
        if (!y.hasChildNodes()) {
            n(null, p, y),
            Ss(),
            y._vnode = p;
            return
        }
        Xn = !1,
        f(y.firstChild, p, null, null, null),
        Ss(),
        y._vnode = p,
        Xn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,y,T,w,L,C=!1)=>{
        const O = ns(p) && p.data === "["
          , D = ()=>b(p, y, T, w, L, O)
          , {type: B, ref: F, shapeFlag: Z, patchFlag: W} = y;
        let K = p.nodeType;
        y.el = p,
        W === -2 && (C = !1,
        y.dynamicChildren = null);
        let N = null;
        switch (B) {
        case Gr:
            K !== 3 ? y.children === "" ? (l(y.el = i(""), s(p), p),
            N = p) : N = D() : (p.data !== y.children && (Xn = !0,
            p.data = y.children),
            N = o(p));
            break;
        case Nt:
            E(p) ? (N = o(p),
            g(y.el = p.content.firstChild, p, T)) : K !== 8 || O ? N = D() : N = o(p);
            break;
        case qi:
            if (O && (p = o(p),
            K = p.nodeType),
            K === 1 || K === 3) {
                N = p;
                const Y = !y.children.length;
                for (let x = 0; x < y.staticCount; x++)
                    Y && (y.children += N.nodeType === 1 ? N.outerHTML : N.data),
                    x === y.staticCount - 1 && (y.anchor = N),
                    N = o(N);
                return O ? o(N) : N
            } else
                D();
            break;
        case mt:
            O ? N = _(p, y, T, w, L, C) : N = D();
            break;
        default:
            if (Z & 1)
                (K !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? N = D() : N = d(p, y, T, w, L, C);
            else if (Z & 6) {
                y.slotScopeIds = L;
                const Y = s(p);
                if (O ? N = k(p) : ns(p) && p.data === "teleport start" ? N = k(p, p.data, "teleport end") : N = o(p),
                t(y, Y, null, T, w, ts(Y), C),
                jr(y)) {
                    let x;
                    O ? (x = $e(mt),
                    x.anchor = N ? N.previousSibling : Y.lastChild) : x = p.nodeType === 3 ? Zp("") : $e("div"),
                    x.el = p,
                    y.component.subTree = x
                }
            } else
                Z & 64 ? K !== 8 ? N = D() : N = y.type.hydrate(p, y, T, w, L, C, e, m) : Z & 128 && (N = y.type.hydrate(p, y, T, w, ts(s(p)), L, C, e, f))
        }
        return F != null && Cs(F, null, w, y),
        N
    }
      , d = (p,y,T,w,L,C)=>{
        C = C || !!y.dynamicChildren;
        const {type: O, props: D, patchFlag: B, shapeFlag: F, dirs: Z, transition: W} = y
          , K = O === "input" || O === "option";
        if (K || B !== -1) {
            Z && On(y, null, T, "created");
            let N = !1;
            if (E(p)) {
                N = Wp(w, W) && T && T.vnode.props && T.vnode.props.appear;
                const x = p.content.firstChild;
                N && W.beforeEnter(x),
                g(x, p, T),
                y.el = p = x
            }
            if (F & 16 && !(D && (D.innerHTML || D.textContent))) {
                let x = m(p.firstChild, y, p, T, w, L, C);
                for (; x; ) {
                    Xn = !0;
                    const ae = x;
                    x = x.nextSibling,
                    a(ae)
                }
            } else
                F & 8 && p.textContent !== y.children && (Xn = !0,
                p.textContent = y.children);
            if (D)
                if (K || !C || B & 48)
                    for (const x in D)
                        (K && (x.endsWith("value") || x === "indeterminate") || Oo(x) && !ci(x) || x[0] === ".") && r(p, x, null, D[x], void 0, void 0, T);
                else
                    D.onClick && r(p, "onClick", null, D.onClick, void 0, void 0, T);
            let Y;
            (Y = D && D.onVnodeBeforeMount) && Bt(Y, T, y),
            Z && On(y, null, T, "beforeMount"),
            ((Y = D && D.onVnodeMounted) || Z || N) && Cp(()=>{
                Y && Bt(Y, T, y),
                N && W.enter(p),
                Z && On(y, null, T, "mounted")
            }
            , w)
        }
        return p.nextSibling
    }
      , m = (p,y,T,w,L,C,O)=>{
        O = O || !!y.dynamicChildren;
        const D = y.children
          , B = D.length;
        for (let F = 0; F < B; F++) {
            const Z = O ? D[F] : D[F] = tn(D[F]);
            if (p)
                p = f(p, Z, w, L, C, O);
            else {
                if (Z.type === Gr && !Z.children)
                    continue;
                Xn = !0,
                n(null, Z, T, null, w, L, ts(T), C)
            }
        }
        return p
    }
      , _ = (p,y,T,w,L,C)=>{
        const {slotScopeIds: O} = y;
        O && (L = L ? L.concat(O) : O);
        const D = s(p)
          , B = m(o(p), y, D, T, w, L, C);
        return B && ns(B) && B.data === "]" ? o(y.anchor = B) : (Xn = !0,
        l(y.anchor = u("]"), D, B),
        B)
    }
      , b = (p,y,T,w,L,C)=>{
        if (Xn = !0,
        y.el = null,
        C) {
            const B = k(p);
            for (; ; ) {
                const F = o(p);
                if (F && F !== B)
                    a(F);
                else
                    break
            }
        }
        const O = o(p)
          , D = s(p);
        return a(p),
        n(null, y, D, O, T, w, ts(D), L),
        O
    }
      , k = (p,y="[",T="]")=>{
        let w = 0;
        for (; p; )
            if (p = o(p),
            p && ns(p) && (p.data === y && w++,
            p.data === T)) {
                if (w === 0)
                    return o(p);
                w--
            }
        return p
    }
      , g = (p,y,T)=>{
        const w = y.parentNode;
        w && w.replaceChild(p, y);
        let L = T;
        for (; L; )
            L.vnode.el === y && (L.vnode.el = L.subTree.el = p),
            L = L.parent
    }
      , E = p=>p.nodeType === 1 && p.tagName.toLowerCase() === "template";
    return [c, f]
}
const wt = Cp;
function d_(e) {
    return qp(e)
}
function h_(e) {
    return qp(e, f_)
}
function qp(e, t) {
    const n = ep();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m=on, insertStaticContent: _} = e
      , b = (h,v,A,R=null,V=null,q=null,X=void 0,z=null,ee=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !pn(h, v) && (R = H(h),
        ve(h, V, q, !0),
        h = null),
        v.patchFlag === -2 && (ee = !1,
        v.dynamicChildren = null);
        const {type: J, ref: oe, shapeFlag: ie} = v;
        switch (J) {
        case Gr:
            k(h, v, A, R);
            break;
        case Nt:
            g(h, v, A, R);
            break;
        case qi:
            h == null && E(v, A, R, X);
            break;
        case mt:
            F(h, v, A, R, V, q, X, z, ee);
            break;
        default:
            ie & 1 ? T(h, v, A, R, V, q, X, z, ee) : ie & 6 ? Z(h, v, A, R, V, q, X, z, ee) : (ie & 64 || ie & 128) && J.process(h, v, A, R, V, q, X, z, ee, $)
        }
        oe != null && V && Cs(oe, h && h.ref, q, v || h, !v)
    }
      , k = (h,v,A,R)=>{
        if (h == null)
            r(v.el = a(v.children), A, R);
        else {
            const V = v.el = h.el;
            v.children !== h.children && u(V, v.children)
        }
    }
      , g = (h,v,A,R)=>{
        h == null ? r(v.el = l(v.children || ""), A, R) : v.el = h.el
    }
      , E = (h,v,A,R)=>{
        [h.el,h.anchor] = _(h.children, v, A, R, h.el, h.anchor)
    }
      , p = ({el: h, anchor: v},A,R)=>{
        let V;
        for (; h && h !== v; )
            V = d(h),
            r(h, A, R),
            h = V;
        r(v, A, R)
    }
      , y = ({el: h, anchor: v})=>{
        let A;
        for (; h && h !== v; )
            A = d(h),
            i(h),
            h = A;
        i(v)
    }
      , T = (h,v,A,R,V,q,X,z,ee)=>{
        v.type === "svg" ? X = "svg" : v.type === "math" && (X = "mathml"),
        h == null ? w(v, A, R, V, q, X, z, ee) : O(h, v, V, q, X, z, ee)
    }
      , w = (h,v,A,R,V,q,X,z)=>{
        let ee, J;
        const {props: oe, shapeFlag: ie, transition: I, dirs: U} = h;
        if (ee = h.el = s(h.type, q, oe && oe.is, oe),
        ie & 8 ? c(ee, h.children) : ie & 16 && C(h.children, ee, null, R, V, Na(h, q), X, z),
        U && On(h, null, R, "created"),
        L(ee, h, h.scopeId, X, R),
        oe) {
            for (const he in oe)
                he !== "value" && !ci(he) && o(ee, he, null, oe[he], q, h.children, R, V, et);
            "value"in oe && o(ee, "value", null, oe.value, q),
            (J = oe.onVnodeBeforeMount) && Bt(J, R, h)
        }
        U && On(h, null, R, "beforeMount");
        const se = Wp(V, I);
        se && I.beforeEnter(ee),
        r(ee, v, A),
        ((J = oe && oe.onVnodeMounted) || se || U) && wt(()=>{
            J && Bt(J, R, h),
            se && I.enter(ee),
            U && On(h, null, R, "mounted")
        }
        , V)
    }
      , L = (h,v,A,R,V)=>{
        if (A && m(h, A),
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
      , C = (h,v,A,R,V,q,X,z,ee=0)=>{
        for (let J = ee; J < h.length; J++) {
            const oe = h[J] = z ? lr(h[J]) : tn(h[J]);
            b(null, oe, v, A, R, V, q, X, z)
        }
    }
      , O = (h,v,A,R,V,q,X)=>{
        const z = v.el = h.el;
        let {patchFlag: ee, dynamicChildren: J, dirs: oe} = v;
        ee |= h.patchFlag & 16;
        const ie = h.props || rt
          , I = v.props || rt;
        let U;
        if (A && Lr(A, !1),
        (U = I.onVnodeBeforeUpdate) && Bt(U, A, v, h),
        oe && On(v, h, A, "beforeUpdate"),
        A && Lr(A, !0),
        J ? D(h.dynamicChildren, J, z, A, R, Na(v, V), q) : X || x(h, v, z, null, A, R, Na(v, V), q, !1),
        ee > 0) {
            if (ee & 16)
                B(z, v, ie, I, A, R, V);
            else if (ee & 2 && ie.class !== I.class && o(z, "class", null, I.class, V),
            ee & 4 && o(z, "style", ie.style, I.style, V),
            ee & 8) {
                const se = v.dynamicProps;
                for (let he = 0; he < se.length; he++) {
                    const We = se[he]
                      , st = ie[We]
                      , _t = I[We];
                    (_t !== st || We === "value") && o(z, We, st, _t, V, h.children, A, R, et)
                }
            }
            ee & 1 && h.children !== v.children && c(z, v.children)
        } else
            !X && J == null && B(z, v, ie, I, A, R, V);
        ((U = I.onVnodeUpdated) || oe) && wt(()=>{
            U && Bt(U, A, v, h),
            oe && On(v, h, A, "updated")
        }
        , R)
    }
      , D = (h,v,A,R,V,q,X)=>{
        for (let z = 0; z < v.length; z++) {
            const ee = h[z]
              , J = v[z]
              , oe = ee.el && (ee.type === mt || !pn(ee, J) || ee.shapeFlag & 70) ? f(ee.el) : A;
            b(ee, J, oe, null, R, V, q, X, !0)
        }
    }
      , B = (h,v,A,R,V,q,X)=>{
        if (A !== R) {
            if (A !== rt)
                for (const z in A)
                    !ci(z) && !(z in R) && o(h, z, A[z], null, X, v.children, V, q, et);
            for (const z in R) {
                if (ci(z))
                    continue;
                const ee = R[z]
                  , J = A[z];
                ee !== J && z !== "value" && o(h, z, J, ee, X, v.children, V, q, et)
            }
            "value"in R && o(h, "value", A.value, R.value, X)
        }
    }
      , F = (h,v,A,R,V,q,X,z,ee)=>{
        const J = v.el = h ? h.el : a("")
          , oe = v.anchor = h ? h.anchor : a("");
        let {patchFlag: ie, dynamicChildren: I, slotScopeIds: U} = v;
        U && (z = z ? z.concat(U) : U),
        h == null ? (r(J, A, R),
        r(oe, A, R),
        C(v.children || [], A, oe, V, q, X, z, ee)) : ie > 0 && ie & 64 && I && h.dynamicChildren ? (D(h.dynamicChildren, I, A, V, q, X, z),
        (v.key != null || V && v === V.subTree) && eu(h, v, !0)) : x(h, v, A, oe, V, q, X, z, ee)
    }
      , Z = (h,v,A,R,V,q,X,z,ee)=>{
        v.slotScopeIds = z,
        h == null ? v.shapeFlag & 512 ? V.ctx.activate(v, A, R, X, ee) : W(v, A, R, V, q, X, ee) : K(h, v, ee)
    }
      , W = (h,v,A,R,V,q,X)=>{
        const z = h.component = T_(h, R, V);
        if (ta(h) && (z.ctx.renderer = $),
        k_(z),
        z.asyncDep) {
            if (V && V.registerDep(z, N),
            !h.el) {
                const ee = z.subTree = $e(Nt);
                g(null, ee, v, A)
            }
        } else
            N(z, h, v, A, V, q, X)
    }
      , K = (h,v,A)=>{
        const R = v.component = h.component;
        if (k0(h, v, A))
            if (R.asyncDep && !R.asyncResolved) {
                Y(R, v, A);
                return
            } else
                R.next = v,
                p0(R.update),
                R.effect.dirty = !0,
                R.update();
        else
            v.el = h.el,
            R.vnode = v
    }
      , N = (h,v,A,R,V,q,X)=>{
        const z = ()=>{
            if (h.isMounted) {
                let {next: oe, bu: ie, u: I, parent: U, vnode: se} = h;
                {
                    const zn = Gp(h);
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
                let he = oe, We;
                Lr(h, !1),
                oe ? (oe.el = se.el,
                Y(h, oe, X)) : oe = se,
                ie && ui(ie),
                (We = oe.props && oe.props.onVnodeBeforeUpdate) && Bt(We, U, oe, se),
                Lr(h, !0);
                const st = Ra(h)
                  , _t = h.subTree;
                h.subTree = st,
                b(_t, st, f(_t.el), H(_t), h, V, q),
                oe.el = st.el,
                he === null && Yc(h, st.el),
                I && wt(I, V),
                (We = oe.props && oe.props.onVnodeUpdated) && wt(()=>Bt(We, U, oe, se), V)
            } else {
                let oe;
                const {el: ie, props: I} = v
                  , {bm: U, m: se, parent: he} = h
                  , We = jr(v);
                if (Lr(h, !1),
                U && ui(U),
                !We && (oe = I && I.onVnodeBeforeMount) && Bt(oe, he, v),
                Lr(h, !0),
                ie && Ue) {
                    const st = ()=>{
                        h.subTree = Ra(h),
                        Ue(ie, h.subTree, h, V, null)
                    }
                    ;
                    We ? v.type.__asyncLoader().then(()=>!h.isUnmounted && st()) : st()
                } else {
                    const st = h.subTree = Ra(h);
                    b(null, st, A, R, h, V, q),
                    v.el = st.el
                }
                if (se && wt(se, V),
                !We && (oe = I && I.onVnodeMounted)) {
                    const st = v;
                    wt(()=>Bt(oe, he, st), V)
                }
                (v.shapeFlag & 256 || he && jr(he.vnode) && he.vnode.shapeFlag & 256) && h.a && wt(h.a, V),
                h.isMounted = !0,
                v = A = R = null
            }
        }
          , ee = h.effect = new Mc(z,on,()=>Kc(J),h.scope)
          , J = h.update = ()=>{
            ee.dirty && ee.run()
        }
        ;
        J.id = h.uid,
        Lr(h, !0),
        J()
    }
      , Y = (h,v,A)=>{
        v.component = h;
        const R = h.vnode.props;
        h.vnode = v,
        h.next = null,
        o_(h, v.props, R, A),
        l_(h, v.children, A),
        Xr(),
        ef(h),
        Zr()
    }
      , x = (h,v,A,R,V,q,X,z,ee=!1)=>{
        const J = h && h.children
          , oe = h ? h.shapeFlag : 0
          , ie = v.children
          , {patchFlag: I, shapeFlag: U} = v;
        if (I > 0) {
            if (I & 128) {
                j(J, ie, A, R, V, q, X, z, ee);
                return
            } else if (I & 256) {
                ae(J, ie, A, R, V, q, X, z, ee);
                return
            }
        }
        U & 8 ? (oe & 16 && et(J, V, q),
        ie !== J && c(A, ie)) : oe & 16 ? U & 16 ? j(J, ie, A, R, V, q, X, z, ee) : et(J, V, q, !0) : (oe & 8 && c(A, ""),
        U & 16 && C(ie, A, R, V, q, X, z, ee))
    }
      , ae = (h,v,A,R,V,q,X,z,ee)=>{
        h = h || ai,
        v = v || ai;
        const J = h.length
          , oe = v.length
          , ie = Math.min(J, oe);
        let I;
        for (I = 0; I < ie; I++) {
            const U = v[I] = ee ? lr(v[I]) : tn(v[I]);
            b(h[I], U, A, null, V, q, X, z, ee)
        }
        J > oe ? et(h, V, q, !0, !1, ie) : C(v, A, R, V, q, X, z, ee, ie)
    }
      , j = (h,v,A,R,V,q,X,z,ee)=>{
        let J = 0;
        const oe = v.length;
        let ie = h.length - 1
          , I = oe - 1;
        for (; J <= ie && J <= I; ) {
            const U = h[J]
              , se = v[J] = ee ? lr(v[J]) : tn(v[J]);
            if (pn(U, se))
                b(U, se, A, null, V, q, X, z, ee);
            else
                break;
            J++
        }
        for (; J <= ie && J <= I; ) {
            const U = h[ie]
              , se = v[I] = ee ? lr(v[I]) : tn(v[I]);
            if (pn(U, se))
                b(U, se, A, null, V, q, X, z, ee);
            else
                break;
            ie--,
            I--
        }
        if (J > ie) {
            if (J <= I) {
                const U = I + 1
                  , se = U < oe ? v[U].el : R;
                for (; J <= I; )
                    b(null, v[J] = ee ? lr(v[J]) : tn(v[J]), A, se, V, q, X, z, ee),
                    J++
            }
        } else if (J > I)
            for (; J <= ie; )
                ve(h[J], V, q, !0),
                J++;
        else {
            const U = J
              , se = J
              , he = new Map;
            for (J = se; J <= I; J++) {
                const Kt = v[J] = ee ? lr(v[J]) : tn(v[J]);
                Kt.key != null && he.set(Kt.key, J)
            }
            let We, st = 0;
            const _t = I - se + 1;
            let zn = !1
              , La = 0;
            const Di = new Array(_t);
            for (J = 0; J < _t; J++)
                Di[J] = 0;
            for (J = U; J <= ie; J++) {
                const Kt = h[J];
                if (st >= _t) {
                    ve(Kt, V, q, !0);
                    continue
                }
                let wn;
                if (Kt.key != null)
                    wn = he.get(Kt.key);
                else
                    for (We = se; We <= I; We++)
                        if (Di[We - se] === 0 && pn(Kt, v[We])) {
                            wn = We;
                            break
                        }
                wn === void 0 ? ve(Kt, V, q, !0) : (Di[wn - se] = J + 1,
                wn >= La ? La = wn : zn = !0,
                b(Kt, v[wn], A, null, V, q, X, z, ee),
                st++)
            }
            const Yu = zn ? p_(Di) : ai;
            for (We = Yu.length - 1,
            J = _t - 1; J >= 0; J--) {
                const Kt = se + J
                  , wn = v[Kt]
                  , qu = Kt + 1 < oe ? v[Kt + 1].el : R;
                Di[J] === 0 ? b(null, wn, A, qu, V, q, X, z, ee) : zn && (We < 0 || J !== Yu[We] ? ce(wn, A, qu, 2) : We--)
            }
        }
    }
      , ce = (h,v,A,R,V=null)=>{
        const {el: q, type: X, transition: z, children: ee, shapeFlag: J} = h;
        if (J & 6) {
            ce(h.component.subTree, v, A, R);
            return
        }
        if (J & 128) {
            h.suspense.move(v, A, R);
            return
        }
        if (J & 64) {
            X.move(h, v, A, $);
            return
        }
        if (X === mt) {
            r(q, v, A);
            for (let ie = 0; ie < ee.length; ie++)
                ce(ee[ie], v, A, R);
            r(h.anchor, v, A);
            return
        }
        if (X === qi) {
            p(h, v, A);
            return
        }
        if (R !== 2 && J & 1 && z)
            if (R === 0)
                z.beforeEnter(q),
                r(q, v, A),
                wt(()=>z.enter(q), V);
            else {
                const {leave: ie, delayLeave: I, afterLeave: U} = z
                  , se = ()=>r(q, v, A)
                  , he = ()=>{
                    ie(q, ()=>{
                        se(),
                        U && U()
                    }
                    )
                }
                ;
                I ? I(q, se, he) : he()
            }
        else
            r(q, v, A)
    }
      , ve = (h,v,A,R=!1,V=!1)=>{
        const {type: q, props: X, ref: z, children: ee, dynamicChildren: J, shapeFlag: oe, patchFlag: ie, dirs: I} = h;
        if (z != null && Cs(z, null, A, h, !0),
        oe & 256) {
            v.ctx.deactivate(h);
            return
        }
        const U = oe & 1 && I
          , se = !jr(h);
        let he;
        if (se && (he = X && X.onVnodeBeforeUnmount) && Bt(he, v, h),
        oe & 6)
            ct(h.component, A, R);
        else {
            if (oe & 128) {
                h.suspense.unmount(A, R);
                return
            }
            U && On(h, null, v, "beforeUnmount"),
            oe & 64 ? h.type.remove(h, v, A, V, $, R) : J && (q !== mt || ie > 0 && ie & 64) ? et(J, v, A, !1, !0) : (q === mt && ie & 384 || !V && oe & 16) && et(ee, v, A),
            R && qe(h)
        }
        (se && (he = X && X.onVnodeUnmounted) || U) && wt(()=>{
            he && Bt(he, v, h),
            U && On(h, null, v, "unmounted")
        }
        , A)
    }
      , qe = h=>{
        const {type: v, el: A, anchor: R, transition: V} = h;
        if (v === mt) {
            Qe(A, R);
            return
        }
        if (v === qi) {
            y(h);
            return
        }
        const q = ()=>{
            i(A),
            V && !V.persisted && V.afterLeave && V.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && V && !V.persisted) {
            const {leave: X, delayLeave: z} = V
              , ee = ()=>X(A, q);
            z ? z(h.el, q, ee) : ee()
        } else
            q()
    }
      , Qe = (h,v)=>{
        let A;
        for (; h !== v; )
            A = d(h),
            i(h),
            h = A;
        i(v)
    }
      , ct = (h,v,A)=>{
        const {bum: R, scope: V, update: q, subTree: X, um: z} = h;
        R && ui(R),
        V.stop(),
        q && (q.active = !1,
        ve(X, h, v, A)),
        z && wt(z, v),
        wt(()=>{
            h.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , et = (h,v,A,R=!1,V=!1,q=0)=>{
        for (let X = q; X < h.length; X++)
            ve(h[X], v, A, R, V)
    }
      , H = h=>h.shapeFlag & 6 ? H(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let te = !1;
    const Q = (h,v,A)=>{
        h == null ? v._vnode && ve(v._vnode, null, null, !0) : b(v._vnode || null, h, v, null, null, null, A),
        te || (te = !0,
        ef(),
        Ss(),
        te = !1),
        v._vnode = h
    }
      , $ = {
        p: b,
        um: ve,
        m: ce,
        r: qe,
        mt: W,
        mc: C,
        pc: x,
        pbc: D,
        n: H,
        o: e
    };
    let ye, Ue;
    return t && ([ye,Ue] = t($)),
    {
        render: Q,
        hydrate: ye,
        createApp: r_(Q, ye)
    }
}
function Na({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Lr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Wp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function eu(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (fe(r) && fe(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let a = i[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = lr(i[o]),
            a.el = s.el),
            n || eu(s, a)),
            a.type === Gr && (a.el = s.el)
        }
}
function p_(e) {
    const t = e.slice()
      , n = [0];
    let r, i, o, s, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const u = e[r];
        if (u !== 0) {
            if (i = n[n.length - 1],
            e[i] < u) {
                t[r] = i,
                n.push(r);
                continue
            }
            for (o = 0,
            s = n.length - 1; o < s; )
                a = o + s >> 1,
                e[n[a]] < u ? o = a + 1 : s = a;
            u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    s = n[o - 1]; o-- > 0; )
        n[o] = s,
        s = t[s];
    return n
}
function Gp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Gp(t)
}
const m_ = e=>e.__isTeleport
  , Yi = e=>e && (e.disabled || e.disabled === "")
  , hf = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , pf = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , Ll = (e,t)=>{
    const n = e && e.to;
    return ot(n) ? t ? t(n) : null : n
}
  , g_ = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, u) {
        const {mc: c, pc: f, pbc: d, o: {insert: m, querySelector: _, createText: b, createComment: k}} = u
          , g = Yi(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const T = t.el = b("")
              , w = t.anchor = b("");
            m(T, n, r),
            m(w, n, r);
            const L = t.target = Ll(t.props, _)
              , C = t.targetAnchor = b("");
            L && (m(C, L),
            s === "svg" || hf(L) ? s = "svg" : (s === "mathml" || pf(L)) && (s = "mathml"));
            const O = (D,B)=>{
                E & 16 && c(p, D, B, i, o, s, a, l)
            }
            ;
            g ? O(n, w) : L && O(L, C)
        } else {
            t.el = e.el;
            const T = t.anchor = e.anchor
              , w = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , C = Yi(e.props)
              , O = C ? n : w
              , D = C ? T : L;
            if (s === "svg" || hf(w) ? s = "svg" : (s === "mathml" || pf(w)) && (s = "mathml"),
            y ? (d(e.dynamicChildren, y, O, i, o, s, a),
            eu(e, t, !0)) : l || f(e, t, O, D, i, o, s, a, !1),
            g)
                C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rs(t, n, T, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const B = t.target = Ll(t.props, _);
                B && rs(t, B, null, u, 0)
            } else
                C && rs(t, w, L, u, 1)
        }
        Jp(t)
    },
    remove(e, t, n, r, {um: i, o: {remove: o}}, s) {
        const {shapeFlag: a, children: l, anchor: u, targetAnchor: c, target: f, props: d} = e;
        if (f && o(c),
        s && o(u),
        a & 16) {
            const m = s || !Yi(d);
            for (let _ = 0; _ < l.length; _++) {
                const b = l[_];
                i(b, t, n, m, !!b.dynamicChildren)
            }
        }
    },
    move: rs,
    hydrate: y_
};
function rs(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: u, props: c} = e
      , f = o === 2;
    if (f && r(s, t, n),
    (!f || Yi(c)) && l & 16)
        for (let d = 0; d < u.length; d++)
            i(u[d], t, n, 2);
    f && r(a, t, n)
}
function y_(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: a, querySelector: l}}, u) {
    const c = t.target = Ll(t.props, l);
    if (c) {
        const f = c._lpa || c.firstChild;
        if (t.shapeFlag & 16)
            if (Yi(t.props))
                t.anchor = u(s(e), t, a(e), n, r, i, o),
                t.targetAnchor = f;
            else {
                t.anchor = s(e);
                let d = f;
                for (; d; )
                    if (d = s(d),
                    d && d.nodeType === 8 && d.data === "teleport anchor") {
                        t.targetAnchor = d,
                        c._lpa = t.targetAnchor && s(t.targetAnchor);
                        break
                    }
                u(f, t, c, n, r, i, o)
            }
        Jp(t)
    }
    return t.anchor && s(t.anchor)
}
const v_ = g_;
function Jp(e) {
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
  , Nt = Symbol.for("v-cmt")
  , qi = Symbol.for("v-stc")
  , Wi = [];
let sn = null;
function pe(e=!1) {
    Wi.push(sn = e ? null : [])
}
function zp() {
    Wi.pop(),
    sn = Wi[Wi.length - 1] || null
}
let yi = 1;
function mf(e) {
    yi += e
}
function Qp(e) {
    return e.dynamicChildren = yi > 0 ? sn || ai : null,
    zp(),
    yi > 0 && sn && sn.push(e),
    e
}
function Ge(e, t, n, r, i, o) {
    return Qp(me(e, t, n, r, i, o, !0))
}
function bt(e, t, n, r, i) {
    return Qp($e(e, t, n, r, i, !0))
}
function vi(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function pn(e, t) {
    return e.type === t.type && e.key === t.key
}
const ia = "__vInternal"
  , Xp = ({key: e})=>e ?? null
  , hs = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? ot(e) || lt(e) || ge(e) ? {
    i: pt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function me(e, t=null, n=null, r=0, i=null, o=e === mt ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Xp(t),
        ref: t && hs(t),
        scopeId: ea,
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
    return a ? (tu(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ot(n) ? 8 : 16),
    yi > 0 && !s && sn && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && sn.push(l),
    l
}
const $e = __;
function __(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === Ap) && (e = Nt),
    vi(e)) {
        const a = Wn(e, t, !0);
        return n && tu(a, n),
        yi > 0 && !o && sn && (a.shapeFlag & 6 ? sn[sn.indexOf(e)] = a : sn.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (A_(e) && (e = e.__vccOpts),
    t) {
        t = zt(t);
        let {class: a, style: l} = t;
        a && !ot(a) && (t.class = Mt(a)),
        nt(l) && (mp(l) && !fe(l) && (l = yt({}, l)),
        t.style = Mn(l))
    }
    const s = ot(e) ? 1 : Lp(e) ? 128 : m_(e) ? 64 : nt(e) ? 4 : ge(e) ? 2 : 0;
    return me(e, t, n, r, i, s, o, !0)
}
function zt(e) {
    return e ? mp(e) || ia in e ? yt({}, e) : e : null
}
function Wn(e, t, n=!1) {
    const {props: r, ref: i, patchFlag: o, children: s} = e
      , a = t ? _i(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Xp(a),
        ref: t && t.ref ? n && i ? fe(i) ? i.concat(hs(t)) : [i, hs(t)] : hs(t) : i,
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
function Zp(e=" ", t=0) {
    return $e(Gr, null, e, t)
}
function NM(e, t) {
    const n = $e(qi, null, e);
    return n.staticCount = t,
    n
}
function Wt(e="", t=!1) {
    return t ? (pe(),
    bt(Nt, null, e)) : $e(Nt, null, e)
}
function tn(e) {
    return e == null || typeof e == "boolean" ? $e(Nt) : fe(e) ? $e(mt, null, e.slice()) : typeof e == "object" ? lr(e) : $e(Gr, null, String(e))
}
function lr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wn(e)
}
function tu(e, t) {
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
            tu(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(ia in t) ? t._ctx = pt : i === 3 && pt && (pt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ge(t) ? (t = {
            default: t,
            _ctx: pt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Zp(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function _i(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = Mt([t.class, r.class]));
            else if (i === "style")
                t.style = Mn([t.style, r.style]);
            else if (Oo(i)) {
                const o = t[i]
                  , s = r[i];
                s && o !== s && !(fe(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function Bt(e, t, n, r=null) {
    ln(e, t, 7, [n, r])
}
const b_ = Up();
let E_ = 0;
function T_(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || b_
      , o = {
        uid: E_++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new rp(!0),
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
        propsOptions: Hp(r, i),
        emitsOptions: wp(r, i),
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
    o.emit = g0.bind(null, o),
    e.ce && e.ce(o),
    o
}
let Et = null;
const kn = ()=>Et || pt;
let Os, Cl;
{
    const e = ep()
      , t = (n,r)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o=>{
            i.length > 1 ? i.forEach(s=>s(o)) : i[0](o)
        }
    }
    ;
    Os = t("__VUE_INSTANCE_SETTERS__", n=>Et = n),
    Cl = t("__VUE_SSR_SETTERS__", n=>oa = n)
}
const Jr = e=>{
    const t = Et;
    return Os(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Os(t)
    }
}
  , Ol = ()=>{
    Et && Et.scope.off(),
    Os(null)
}
;
function $p(e) {
    return e.vnode.shapeFlag & 4
}
let oa = !1;
function k_(e, t=!1) {
    t && Cl(t);
    const {props: n, children: r} = e.vnode
      , i = $p(e);
    i_(e, n, i, t),
    a_(e, r);
    const o = i ? S_(e, t) : void 0;
    return t && Cl(!1),
    o
}
function S_(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = ht(new Proxy(e.ctx,G0));
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? tm(e) : null
          , o = Jr(e);
        Xr();
        const s = yr(r, e, 0, [e.props, i]);
        if (Zr(),
        o(),
        Ic(s)) {
            if (s.then(Ol, Ol),
            t)
                return s.then(a=>{
                    Rl(e, a, t)
                }
                ).catch(a=>{
                    Mo(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Rl(e, s, t)
    } else
        em(e, t)
}
function Rl(e, t, n) {
    ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : nt(t) && (e.setupState = _p(t)),
    em(e, n)
}
let gf;
function em(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && gf && !r.render) {
            const i = r.template || Xc(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = yt(yt({
                    isCustomElement: o,
                    delimiters: a
                }, s), l);
                r.render = gf(i, u)
            }
        }
        e.render = r.render || on
    }
    {
        const i = Jr(e);
        Xr();
        try {
            X0(e)
        } finally {
            Zr(),
            i()
        }
    }
}
function w_(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return jt(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function tm(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return w_(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function sa(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(_p(ht(e.exposed)),{
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
function Il(e, t=!0) {
    return ge(e) ? e.displayName || e.name : e.name || t && e.__name
}
function A_(e) {
    return ge(e) && "__vccOpts"in e
}
const ue = (e,t)=>s0(e, t, oa);
function ft(e, t, n) {
    const r = arguments.length;
    return r === 2 ? nt(t) && !fe(t) ? vi(t) ? $e(e, null, [t]) : $e(e, t) : $e(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && vi(n) && (n = [n]),
    $e(e, t, n))
}
const nm = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const L_ = "http://www.w3.org/2000/svg"
  , C_ = "http://www.w3.org/1998/Math/MathML"
  , cr = typeof document < "u" ? document : null
  , yf = cr && cr.createElement("template")
  , O_ = {
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
        const i = t === "svg" ? cr.createElementNS(L_, e) : t === "mathml" ? cr.createElementNS(C_, e) : cr.createElement(e, n ? {
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
            yf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = yf.content;
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
  , Do = (e,{slots: t})=>ft(F0, R_(e), t);
Do.displayName = "Transition";
const rm = {
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
Do.props = yt({}, Rp, rm);
const Cr = (e,t=[])=>{
    fe(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , vf = e=>e ? fe(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function R_(e) {
    const t = {};
    for (const F in e)
        F in rm || (t[F] = e[F]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: u=s, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , _ = I_(i)
      , b = _ && _[0]
      , k = _ && _[1]
      , {onBeforeEnter: g, onEnter: E, onEnterCancelled: p, onLeave: y, onLeaveCancelled: T, onBeforeAppear: w=g, onAppear: L=E, onAppearCancelled: C=p} = t
      , O = (F,Z,W)=>{
        Or(F, Z ? c : a),
        Or(F, Z ? u : s),
        W && W()
    }
      , D = (F,Z)=>{
        F._isLeaving = !1,
        Or(F, f),
        Or(F, m),
        Or(F, d),
        Z && Z()
    }
      , B = F=>(Z,W)=>{
        const K = F ? L : E
          , N = ()=>O(Z, F, W);
        Cr(K, [Z, N]),
        _f(()=>{
            Or(Z, F ? l : o),
            $n(Z, F ? c : a),
            vf(K) || bf(Z, r, b, N)
        }
        )
    }
    ;
    return yt(t, {
        onBeforeEnter(F) {
            Cr(g, [F]),
            $n(F, o),
            $n(F, s)
        },
        onBeforeAppear(F) {
            Cr(w, [F]),
            $n(F, l),
            $n(F, u)
        },
        onEnter: B(!1),
        onAppear: B(!0),
        onLeave(F, Z) {
            F._isLeaving = !0;
            const W = ()=>D(F, Z);
            $n(F, f),
            D_(),
            $n(F, d),
            _f(()=>{
                F._isLeaving && (Or(F, f),
                $n(F, m),
                vf(y) || bf(F, r, k, W))
            }
            ),
            Cr(y, [F, W])
        },
        onEnterCancelled(F) {
            O(F, !1),
            Cr(p, [F])
        },
        onAppearCancelled(F) {
            O(F, !0),
            Cr(C, [F])
        },
        onLeaveCancelled(F) {
            D(F),
            Cr(T, [F])
        }
    })
}
function I_(e) {
    if (e == null)
        return null;
    if (nt(e))
        return [Va(e.enter), Va(e.leave)];
    {
        const t = Va(e);
        return [t, t]
    }
}
function Va(e) {
    return $h(e)
}
function $n(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[ho] || (e[ho] = new Set)).add(t)
}
function Or(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[ho];
    n && (n.delete(t),
    n.size || (e[ho] = void 0))
}
function _f(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let P_ = 0;
function bf(e, t, n, r) {
    const i = e._endId = ++P_
      , o = ()=>{
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: a, propCount: l} = M_(e, t);
    if (!s)
        return r();
    const u = s + "end";
    let c = 0;
    const f = ()=>{
        e.removeEventListener(u, d),
        o()
    }
      , d = m=>{
        m.target === e && ++c >= l && f()
    }
    ;
    setTimeout(()=>{
        c < l && f()
    }
    , a + 1),
    e.addEventListener(u, d)
}
function M_(e, t) {
    const n = window.getComputedStyle(e)
      , r = _=>(n[_] || "").split(", ")
      , i = r(`${Zn}Delay`)
      , o = r(`${Zn}Duration`)
      , s = Ef(i, o)
      , a = r(`${Ni}Delay`)
      , l = r(`${Ni}Duration`)
      , u = Ef(a, l);
    let c = null
      , f = 0
      , d = 0;
    t === Zn ? s > 0 && (c = Zn,
    f = s,
    d = o.length) : t === Ni ? u > 0 && (c = Ni,
    f = u,
    d = l.length) : (f = Math.max(s, u),
    c = f > 0 ? s > u ? Zn : Ni : null,
    d = c ? c === Zn ? o.length : l.length : 0);
    const m = c === Zn && /\b(transform|all)(,|$)/.test(r(`${Zn}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function Ef(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>Tf(n) + Tf(e[r])))
}
function Tf(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function D_() {
    return document.body.offsetHeight
}
function N_(e, t, n) {
    const r = e[ho];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Rs = Symbol("_vod")
  , im = Symbol("_vsh")
  , VM = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Rs] = e.style.display === "none" ? "" : e.style.display,
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
    e.style.display = t ? e[Rs] : "none",
    e[im] = !t
}
const V_ = Symbol("")
  , F_ = /(^|;)\s*display\s*:/;
function x_(e, t, n) {
    const r = e.style
      , i = ot(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (ot(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && ps(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && ps(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            ps(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[V_];
            s && (n += ";" + s),
            r.cssText = n,
            o = F_.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Rs in e && (e[Rs] = o ? r.display : "",
    e[im] && (r.display = "none"))
}
const kf = /\s*!important$/;
function ps(e, t, n) {
    if (fe(n))
        n.forEach(r=>ps(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = U_(e, t);
        kf.test(n) ? e.setProperty(Qr(r), n.replace(kf, ""), "important") : e[r] = n
    }
}
const Sf = ["Webkit", "Moz", "ms"]
  , Fa = {};
function U_(e, t) {
    const n = Fa[t];
    if (n)
        return n;
    let r = Vn(t);
    if (r !== "filter" && r in e)
        return Fa[t] = r;
    r = Qs(r);
    for (let i = 0; i < Sf.length; i++) {
        const o = Sf[i] + r;
        if (o in e)
            return Fa[t] = o
    }
    return t
}
const wf = "http://www.w3.org/1999/xlink";
function B_(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(wf, t.slice(6, t.length)) : e.setAttributeNS(wf, t, n);
    else {
        const o = xv(t);
        n == null || o && !tp(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function H_(e, t, n, r, i, o, s) {
    if (t === "innerHTML" || t === "textContent") {
        r && s(r, i, o),
        e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = n ?? "";
        u !== c && (e.value = c),
        n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const u = typeof e[t];
        u === "boolean" ? n = tp(n) : n == null && u === "string" ? (n = "",
        l = !0) : u === "number" && (n = 0,
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
function j_(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Af = Symbol("_vei");
function K_(e, t, n, r, i=null) {
    const o = e[Af] || (e[Af] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = Y_(t);
        if (r) {
            const u = o[t] = G_(r, i);
            ni(e, a, u, l)
        } else
            s && (j_(e, a, s, l),
            o[t] = void 0)
    }
}
const Lf = /(?:Once|Passive|Capture)$/;
function Y_(e) {
    let t;
    if (Lf.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Lf); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Qr(e.slice(2)), t]
}
let xa = 0;
const q_ = Promise.resolve()
  , W_ = ()=>xa || (q_.then(()=>xa = 0),
xa = Date.now());
function G_(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        ln(J_(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = W_(),
    n
}
function J_(e, t) {
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
const Cf = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , z_ = (e,t,n,r,i,o,s,a,l)=>{
    const u = i === "svg";
    t === "class" ? N_(e, r, u) : t === "style" ? x_(e, n, r) : Oo(t) ? Oc(t) || K_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Q_(e, t, r, u)) ? H_(e, t, r, o, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    B_(e, t, r, u))
}
;
function Q_(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Cf(t) && ge(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Cf(t) && ot(n) ? !1 : t in e
}
const Of = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return fe(t) ? n=>ui(t, n) : t
}
;
function X_(e) {
    e.target.composing = !0
}
function Rf(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Ua = Symbol("_assign")
  , FM = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[Ua] = Of(i);
        const o = r || i.props && i.props.type === "number";
        ni(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = hl(a)),
            e[Ua](a)
        }
        ),
        n && ni(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (ni(e, "compositionstart", X_),
        ni(e, "compositionend", Rf),
        ni(e, "change", Rf))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: i}}, o) {
        if (e[Ua] = Of(o),
        e.composing)
            return;
        const s = i || e.type === "number" ? hl(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , Z_ = ["ctrl", "shift", "alt", "meta"]
  , $_ = {
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
    exact: (e,t)=>Z_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , xM = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i,...o)=>{
        for (let s = 0; s < t.length; s++) {
            const a = $_[t[s]];
            if (a && a(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , eb = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , tb = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i=>{
        if (!("key"in i))
            return;
        const o = Qr(i.key);
        if (t.some(s=>s === o || eb[s] === o))
            return e(i)
    }
    )
}
  , om = yt({
    patchProp: z_
}, O_);
let Gi, If = !1;
function nb() {
    return Gi || (Gi = d_(om))
}
function rb() {
    return Gi = If ? Gi : h_(om),
    If = !0,
    Gi
}
const sm = (...e)=>{
    const t = nb().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = lm(r);
        if (!i)
            return;
        const o = t._component;
        !ge(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, am(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , ib = (...e)=>{
    const t = rb().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = lm(r);
        if (i)
            return n(i, !0, am(i))
    }
    ,
    t
}
;
function am(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function lm(e) {
    return ot(e) ? document.querySelector(e) : e
}
const ob = /#/g
  , sb = /&/g
  , ab = /\//g
  , lb = /=/g
  , nu = /\+/g
  , cb = /%5e/gi
  , ub = /%60/gi
  , fb = /%7c/gi
  , db = /%20/gi;
function hb(e) {
    return encodeURI("" + e).replace(fb, "|")
}
function Pl(e) {
    return hb(typeof e == "string" ? e : JSON.stringify(e)).replace(nu, "%2B").replace(db, "+").replace(ob, "%23").replace(sb, "%26").replace(ub, "`").replace(cb, "^").replace(ab, "%2F")
}
function Ba(e) {
    return Pl(e).replace(lb, "%3D")
}
function Is(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function pb(e) {
    return Is(e.replace(nu, " "))
}
function mb(e) {
    return Is(e.replace(nu, " "))
}
function ru(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = pb(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = mb(r[2] || "");
        t[i] === void 0 ? t[i] = o : Array.isArray(t[i]) ? t[i].push(o) : t[i] = [t[i], o]
    }
    return t
}
function gb(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Ba(e)}=${Pl(n)}`).join("&") : `${Ba(e)}=${Pl(t)}` : Ba(e)
}
function yb(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>gb(t, e[t])).filter(Boolean).join("&")
}
const vb = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , _b = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , bb = /^([/\\]\s*){2,}[^/\\]/
  , Eb = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , Tb = /\/$|\/\?|\/#/
  , kb = /^\.?\//;
function xn(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? vb.test(e) : _b.test(e) || (t.acceptRelative ? bb.test(e) : !1)
}
function Sb(e) {
    return !!e && Eb.test(e)
}
function Ml(e="", t) {
    return t ? Tb.test(e) : e.endsWith("/")
}
function No(e="", t) {
    if (!t)
        return (Ml(e) ? e.slice(0, -1) : e) || "/";
    if (!Ml(e, !0))
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
    if (Ml(e, !0))
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
function wb(e="") {
    return e.startsWith("/")
}
function Pf(e="") {
    return wb(e) ? e : "/" + e
}
function Ab(e, t) {
    if (um(t) || xn(e))
        return e;
    const n = No(t);
    return e.startsWith(n) ? e : Ii(n, e)
}
function Mf(e, t) {
    if (um(t))
        return e;
    const n = No(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function cm(e, t) {
    const n = Vo(e)
      , r = {
        ...ru(n.search),
        ...t
    };
    return n.search = yb(r),
    Cb(n)
}
function um(e) {
    return !e || e === "/"
}
function Lb(e) {
    return e && e !== "/"
}
function Ii(e, ...t) {
    let n = e || "";
    for (const r of t.filter(i=>Lb(i)))
        if (n) {
            const i = r.replace(kb, "");
            n = po(n) + i
        } else
            n = r;
    return n
}
function Dl(e, t, n={}) {
    return n.trailingSlash || (e = po(e),
    t = po(t)),
    n.leadingSlash || (e = Pf(e),
    t = Pf(t)),
    n.encoding || (e = Is(e),
    t = Is(t)),
    e === t
}
const fm = Symbol.for("ufo:protocolRelative");
function Vo(e="", t) {
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
    if (!xn(e, {
        acceptRelative: !0
    }))
        return t ? Vo(t + e) : Nl(e);
    const [,r="",i,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: u, hash: c} = Nl(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: s,
        pathname: l,
        search: u,
        hash: c,
        [fm]: !r
    }
}
function Nl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function Cb(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , i = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[fm] ? (e.protocol || "") + "//" : "") + i + o + t + n + r
}
const Ob = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Ps = Ob().app
  , Rb = ()=>Ps.baseURL
  , Ib = ()=>Ps.buildAssetsDir
  , iu = (...e)=>Ii(dm(), Ib(), ...e)
  , dm = (...e)=>{
    const t = Ps.cdnURL || Ps.baseURL;
    return e.length ? Ii(t, ...e) : t
}
;
globalThis.__buildAssetsURL = iu,
globalThis.__publicAssetsURL = dm;
const Pb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Mb = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Db = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Nb(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        Vb(e);
        return
    }
    return t
}
function Vb(e) {
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
    if (!Db.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Pb.test(e) || Mb.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Nb)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class Fb extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function xb(e) {
    var l, u, c, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((u = e.error) == null ? void 0 : u.toString()) || ""
      , n = ((c = e.request) == null ? void 0 : c.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${i}: ${o}${t ? ` ${t}` : ""}`
      , a = new Fb(s,e.error ? {
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
function Df(e="GET") {
    return Ub.has(e.toUpperCase())
}
function Bb(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Hb = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , jb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Kb(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return jb.test(t) ? "json" : Hb.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Yb(e, t, n=globalThis.Headers) {
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
const qb = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Wb = new Set([101, 204, 205, 304]);
function hm(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = Df(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : qb.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                o(a.request, {
                    ...a.options,
                    retry: c - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const u = xb(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, o),
        u
    }
    const o = async function(l, u={}) {
        var d;
        const c = {
            request: l,
            options: Yb(u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (c.options.method = (d = c.options.method) == null ? void 0 : d.toUpperCase(),
        c.options.onRequest && await c.options.onRequest(c),
        typeof c.request == "string" && (c.options.baseURL && (c.request = Ab(c.request, c.options.baseURL)),
        (c.options.query || c.options.params) && (c.request = cm(c.request, {
            ...c.options.params,
            ...c.options.query
        }))),
        c.options.body && Df(c.options.method) && (Bb(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
        c.options.headers = new n(c.options.headers || {}),
        c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"),
        c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo"in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex"in c.options || (c.options.duplex = "half"))),
        !c.options.signal && c.options.timeout) {
            const m = new r;
            setTimeout(()=>m.abort(), c.options.timeout),
            c.options.signal = m.signal
        }
        try {
            c.response = await t(c.request, c.options)
        } catch (m) {
            return c.error = m,
            c.options.onRequestError && await c.options.onRequestError(c),
            await i(c)
        }
        if (c.response.body && !Wb.has(c.response.status) && c.options.method !== "HEAD") {
            const m = (c.options.parseResponse ? "json" : c.options.responseType) || Kb(c.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const _ = await c.response.text()
                      , b = c.options.parseResponse || mo;
                    c.response._data = b(_);
                    break
                }
            case "stream":
                {
                    c.response._data = c.response.body;
                    break
                }
            default:
                c.response._data = await c.response[m]()
            }
        }
        return c.options.onResponse && await c.options.onResponse(c),
        !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await c.options.onResponseError(c),
        await i(c)) : c.response
    }
      , s = async function(l, u) {
        return (await o(l, u))._data
    };
    return s.raw = o,
    s.native = (...a)=>t(...a),
    s.create = (a={})=>hm({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const ou = function() {
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
  , Gb = ou.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Jb = ou.Headers
  , zb = ou.AbortController
  , Qb = hm({
    fetch: Gb,
    Headers: Jb,
    AbortController: zb
})
  , Xb = Qb;
globalThis.$fetch || (globalThis.$fetch = Xb.create({
    baseURL: Rb()
}));
function Vl(e, t={}, n) {
    for (const r in e) {
        const i = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? Vl(i, t, o) : typeof i == "function" && (t[o] = i)
    }
    return t
}
const Zb = {
    run: e=>e()
}
  , $b = ()=>Zb
  , pm = typeof console.createTask < "u" ? console.createTask : $b;
function eE(e, t) {
    const n = t.shift()
      , r = pm(n);
    return e.reduce((i,o)=>i.then(()=>r.run(()=>o(...t))), Promise.resolve())
}
function tE(e, t) {
    const n = t.shift()
      , r = pm(n);
    return Promise.all(e.map(i=>r.run(()=>i(...t))))
}
function Ha(e, t) {
    for (const n of [...e])
        n(t)
}
class nE {
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
        const n = Vl(t)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(t) {
        const n = Vl(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(eE, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(tE, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Ha(this._before, i);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(()=>{
            this._after && i && Ha(this._after, i)
        }
        ) : (this._after && i && Ha(this._after, i),
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
function mm() {
    return new nE
}
function rE(e={}) {
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
              , u = ()=>t === s ? l : void 0;
            Fl.add(u);
            try {
                const c = i ? i.run(s, a) : a();
                return n || (t = void 0),
                await c
            } finally {
                Fl.delete(u)
            }
        }
    }
}
function iE(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = rE({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Nf = "__unctx__"
  , oE = Ms[Nf] || (Ms[Nf] = iE())
  , sE = (e,t={})=>oE.get(e, t)
  , Vf = "__unctx_async_handlers__"
  , Fl = Ms[Vf] || (Ms[Vf] = new Set);
function In(e) {
    const t = [];
    for (const i of Fl) {
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
const gm = sE("nuxt-app", {
    asyncContext: !1
})
  , aE = "__nuxt_plugin";
function lE(e) {
    let t = 0;
    const n = {
        _scope: Io(),
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
        payload: St({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: i=>n._scope.run(()=>fE(n, i)),
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
    n.hooks = mm(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (i,o)=>{
        const s = "$" + i;
        is(n, s, o),
        is(n.vueApp.config.globalProperties, s, o)
    }
    ,
    is(n.vueApp, "$nuxt", n),
    is(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", o=>{
            n.callHook("app:chunkError", {
                error: o.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || ne;
        const i = n.hook("app:error", (...o)=>{
            console.error("[nuxt] error caught during app initialization", ...o)
        }
        );
        n.hook("app:mounted", i)
    }
    const r = St(n.payload.config);
    return n.provide("config", r),
    n
}
async function cE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function uE(e, t) {
    const n = []
      , r = []
      , i = []
      , o = [];
    let s = 0;
    async function a(l) {
        var c;
        const u = ((c = l.dependsOn) == null ? void 0 : c.filter(f=>t.some(d=>d._name === f) && !n.includes(f))) ?? [];
        if (u.length > 0)
            r.push([new Set(u), l]);
        else {
            const f = cE(e, l).then(async()=>{
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
function Ft(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || (()=>{}
    ), e, {
        [aE]: !0,
        _name: t
    })
}
function fE(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return gm.set(e),
    e.vueApp.runWithContext(r)
}
function dE() {
    var t;
    let e;
    return Zc() && (e = (t = kn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || gm.tryUse(),
    e || null
}
function ne() {
    const e = dE();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function Jn(e) {
    return ne().$config
}
function is(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const os = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function hE(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , i = (t || {}).decode || gE;
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
            let u = e.slice(s + 1, a).trim();
            u.codePointAt(0) === 34 && (u = u.slice(1, -1)),
            n[l] = mE(u, i)
        }
        o = a + 1
    }
    return n
}
function Ff(e, t, n) {
    const r = n || {}
      , i = r.encode || yE;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!os.test(e))
        throw new TypeError("argument name is invalid");
    const o = i(t);
    if (o && !os.test(o))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!os.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!os.test(r.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!pE(r.expires) || Number.isNaN(r.expires.valueOf()))
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
function pE(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function mE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function gE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function yE(e) {
    return encodeURIComponent(e)
}
const xf = Object.freeze({
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
        ...xf,
        ...t
    } : t = xf;
    const n = ym(t);
    return n.dispatch(e),
    n.toString()
}
const vE = Object.freeze(["prototype", "__proto__", "constructor"]);
function ym(e) {
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
                let u = Object.keys(i);
                e.unorderedObjects && (u = u.sort());
                let c = [];
                e.respectType !== !1 && !Bf(i) && (c = vE),
                e.excludeKeys && (u = u.filter(d=>!e.excludeKeys(d)),
                c = c.filter(d=>!e.excludeKeys(d))),
                r("object:" + (u.length + c.length) + ":");
                const f = d=>{
                    this.dispatch(d),
                    r(":"),
                    e.excludeValues || this.dispatch(i[d]),
                    r(",")
                }
                ;
                for (const d of u)
                    f(d);
                for (const d of c)
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
                const u = ym(e);
                u.dispatch(l);
                for (const [c,f] of u.getContext())
                    s.set(c, f);
                return u.toString()
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
const vm = "[native code] }"
  , _E = vm.length;
function Bf(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-_E) === vm
}
function bE(e, t, n={}) {
    return e === t || Uf(e, n) === Uf(t, n)
}
function EE(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>bm(t, e)
    }
}
function _m(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,i])=>[r, _m(i)])) : new Map(Object.entries(e[n]));
    return t
}
function TE(e) {
    return EE(_m(e))
}
function bm(e, t) {
    const n = [];
    for (const [i,o] of Hf(t.wildcard))
        e.startsWith(i) && n.push(o);
    for (const [i,o] of Hf(t.dynamic))
        if (e.startsWith(i + "/")) {
            const s = "/" + e.slice(i.length).split("/").splice(2).join("/");
            n.push(...bm(s, o))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function Hf(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function ja(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function xl(e, t, n=".", r) {
    if (!ja(t))
        return xl(e, {}, n, r);
    const i = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = e[o];
        s != null && (r && r(i, o, s, n) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : ja(s) && ja(i[o]) ? i[o] = xl(s, i[o], (n ? `${n}.` : "") + o.toString(), r) : i[o] = s))
    }
    return i
}
function Em(e) {
    return (...t)=>t.reduce((n,r)=>xl(n, r, "", e), {})
}
const su = Em()
  , kE = Em((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function SE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var wE = Object.defineProperty
  , AE = (e,t,n)=>t in e ? wE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Dr = (e,t,n)=>(AE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Ul extends Error {
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
            statusCode: Hl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Tm(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Dr(Ul, "__h3_error__", !0);
function Bl(e) {
    if (typeof e == "string")
        return new Ul(e);
    if (LE(e))
        return e;
    const t = new Ul(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (SE(e, "stack"))
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
    e.statusCode ? t.statusCode = Hl(e.statusCode, t.statusCode) : e.status && (t.statusCode = Hl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        Tm(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function LE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const CE = /[^\u0009\u0020-\u007E]/g;
function Tm(e="") {
    return e.replace(CE, "")
}
function Hl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const km = Symbol("layout-meta")
  , Fo = Symbol("route")
  , Qt = ()=>{
    var e;
    return (e = ne()) == null ? void 0 : e.$router
}
  , aa = ()=>Zc() ? kt(Fo, ne()._route) : ne()._route;
const OE = (e,t,n={})=>{
    const r = ne()
      , i = n.global || typeof e != "string"
      , o = typeof e != "string" ? e : t;
    if (!o) {
        console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
        return
    }
    i ? r._middleware.global.push(o) : r._middleware.named[e] = o
}
  , RE = ()=>{
    try {
        if (ne()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , xo = (e,t)=>{
    e || (e = "/");
    const n = typeof e == "string" ? e : cm(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = t.open
              , u = Object.entries(l).filter(([c,f])=>f !== void 0).map(([c,f])=>`${c.toLowerCase()}=${f}`).join(", ");
            open(n, a, u)
        }
        return Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || xn(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = Vo(n).protocol;
        if (a && Sb(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = RE();
    if (!r && i)
        return e;
    const o = Qt()
      , s = ne();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    i ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Sm = "__nuxt_error"
  , la = ()=>oi(ne().payload, "error")
  , si = e=>{
    const t = ca(e);
    try {
        const n = ne()
          , r = la();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , IE = async(e={})=>{
    const t = ne()
      , n = la();
    t.callHook("app:error:cleared", e),
    e.redirect && await Qt().replace(e.redirect),
    n.value = null
}
  , PE = e=>!!e && typeof e == "object" && Sm in e
  , ca = e=>{
    const t = Bl(e);
    return Object.defineProperty(t, Sm, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , ME = "modulepreload"
  , DE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , jf = {}
  , NE = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        i = Promise.all(n.map(s=>{
            if (s = DE(s, r),
            s in jf)
                return;
            jf[s] = !0;
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
            const c = document.createElement("link");
            if (c.rel = a ? "stylesheet" : ME,
            a || (c.as = "script",
            c.crossOrigin = ""),
            c.href = s,
            document.head.appendChild(c),
            a)
                return new Promise((f,d)=>{
                    c.addEventListener("load", f),
                    c.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${s}`)))
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
  , S = (...e)=>NE(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , VE = -1
  , FE = -2
  , xE = -3
  , UE = -4
  , BE = -5
  , HE = -6;
function jE(e, t) {
    return KE(JSON.parse(e), t)
}
function KE(e, t) {
    if (typeof e == "number")
        return i(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function i(o, s=!1) {
        if (o === VE)
            return;
        if (o === xE)
            return NaN;
        if (o === UE)
            return 1 / 0;
        if (o === BE)
            return -1 / 0;
        if (o === HE)
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
                  , u = t == null ? void 0 : t[l];
                if (u)
                    return r[o] = u(i(a[1]));
                switch (l) {
                case "Date":
                    r[o] = new Date(a[1]);
                    break;
                case "Set":
                    const c = new Set;
                    r[o] = c;
                    for (let m = 1; m < a.length; m += 1)
                        c.add(i(a[m]));
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
                for (let u = 0; u < a.length; u += 1) {
                    const c = a[u];
                    c !== FE && (l[u] = i(c))
                }
            }
        else {
            const l = {};
            r[o] = l;
            for (const u in a) {
                const c = a[u];
                l[u] = i(c)
            }
        }
        return r[o]
    }
    return i(0)
}
function YE(e) {
    return Array.isArray(e) ? e : [e]
}
const qE = ["title", "titleTemplate", "script", "style", "noscript"]
  , ms = ["base", "meta", "link", "style", "script", "noscript"]
  , WE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , GE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , wm = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , JE = typeof window < "u";
function au(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Kf(e) {
    return e._h || au(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function Am(e, t) {
    const {props: n, tag: r} = e;
    if (GE.includes(r))
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
function Yf(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function Lm(e, t) {
    const n = []
      , r = t.resolveKeyData || (o=>o.key)
      , i = t.resolveValueData || (o=>o.value);
    for (const [o,s] of Object.entries(e))
        n.push(...(Array.isArray(s) ? s : [s]).map(a=>{
            const l = {
                key: o,
                value: a
            }
              , u = i(l);
            return typeof u == "object" ? Lm(u, t) : Array.isArray(u) ? u : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: u
            }
        }
        ).flat());
    return n
}
function Cm(e, t) {
    return Object.entries(e).map(([n,r])=>{
        if (typeof r == "object" && (r = Cm(r, t)),
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
const Rt = e=>({
    keyValue: e,
    metaKey: "property"
})
  , Ka = e=>({
    keyValue: e
})
  , lu = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${Kn(e)}=${t}`
            }
        }
    },
    articleExpirationTime: Rt("article:expiration_time"),
    articleModifiedTime: Rt("article:modified_time"),
    articlePublishedTime: Rt("article:published_time"),
    bookReleaseDate: Rt("book:release_date"),
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
    fbAppId: Rt("fb:app_id"),
    msapplicationConfig: Ka("msapplication-Config"),
    msapplicationTileColor: Ka("msapplication-TileColor"),
    msapplicationTileImage: Ka("msapplication-TileImage"),
    ogAudioSecureUrl: Rt("og:audio:secure_url"),
    ogAudioUrl: Rt("og:audio"),
    ogImageSecureUrl: Rt("og:image:secure_url"),
    ogImageUrl: Rt("og:image"),
    ogSiteName: Rt("og:site_name"),
    ogVideoSecureUrl: Rt("og:video:secure_url"),
    ogVideoUrl: Rt("og:video"),
    profileFirstName: Rt("profile:first_name"),
    profileLastName: Rt("profile:last_name"),
    profileUsername: Rt("profile:username"),
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
function Rm(e) {
    var n;
    const t = Kn(e).split(":")[0];
    return Om.includes(t) ? "property" : ((n = lu[e]) == null ? void 0 : n.metaKey) || "name"
}
function zE(e) {
    var t;
    return ((t = lu[e]) == null ? void 0 : t.keyValue) || Kn(e)
}
function Kn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return Om.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function jl(e) {
    if (Array.isArray(e))
        return e.map(n=>jl(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[Kn(n)] = jl(r);
    return t
}
function QE(e, t) {
    const n = lu[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Cm(jl(e), {
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
const Im = ["og:image", "og:video", "og:audio", "twitter:image"];
function Pm(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function qf(e, t) {
    const n = Pm(t)
      , r = Kn(e)
      , i = Rm(r);
    if (Im.includes(r)) {
        const o = {};
        return Object.entries(n).forEach(([s,a])=>{
            o[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Mm(o).sort((s,a)=>{
            var l, u;
            return (((l = s[i]) == null ? void 0 : l.length) || 0) - (((u = a[i]) == null ? void 0 : u.length) || 0)
        }
        )
    }
    return [{
        [i]: r,
        ...n
    }]
}
function Mm(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([i,o])=>{
        if (!Array.isArray(o)) {
            if (typeof o == "object" && o) {
                if (Im.includes(Kn(i))) {
                    t.push(...qf(i, o));
                    return
                }
                n[i] = Pm(o)
            } else
                n[i] = o;
            return
        }
        o.forEach(s=>{
            t.push(...typeof s == "string" ? Mm({
                [i]: s
            }) : qf(i, s))
        }
        )
    }
    );
    const r = Lm(n, {
        key({key: i}) {
            return Rm(i)
        },
        value({key: i}) {
            return i === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: i}) {
            return zE(i)
        },
        resolveValueData({value: i, key: o}) {
            return i === null ? "_null" : typeof i == "object" ? QE(i, o) : typeof i == "number" ? i.toString() : i
        }
    });
    return [...t, ...r].map(i=>(i.content === "_null" && (i.content = null),
    i))
}
async function XE(e, t, n) {
    const r = {
        tag: e,
        props: await Dm(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return wm.forEach(i=>{
        const o = typeof r.props[i] < "u" ? r.props[i] : n[i];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || qE.includes(r.tag)) && (r[i === "children" ? "innerHTML" : i] = o),
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
function ZE(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function Dm(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = ZE(e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !wm.includes(n)) {
            const r = String(e[n])
              , i = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = i ? "true" : !0 : e[n] || (i && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const $E = 10;
async function eT(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && WE.includes(n)).forEach(([n,r])=>{
        const i = YE(r);
        t.push(...i.map(o=>XE(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << $E) + r,
    n))
}
const Wf = {
    base: -10,
    title: 10
}
  , Gf = {
    critical: -80,
    high: -10,
    low: 20
};
function Ds(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Wf && (t = Wf[e.tag]),
    typeof n == "string" && n in Gf ? t + Gf[n] : t)
}
const tT = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Nm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , er = "%separator";
function gs(e, t, n) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    function r(s) {
        let a;
        return ["s", "pageTitle"].includes(s) ? a = t.pageTitle : s.includes(".") ? a = s.split(".").reduce((l,u)=>l && l[u] || void 0, t) : a = t[s],
        typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    }
    let i = e;
    try {
        i = decodeURI(e)
    } catch {}
    return (i.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(s=>{
        const a = r(s.slice(1));
        typeof a == "string" && (e = e.replace(new RegExp(`\\${s}(\\W|$)`,"g"), (l,u)=>`${a}${u}`).trim())
    }
    ),
    e.includes(er) && (e.endsWith(er) && (e = e.slice(0, -er.length).trim()),
    e.startsWith(er) && (e = e.slice(er.length).trim()),
    e = e.replace(new RegExp(`\\${er}\\s*\\${er}`,"g"), er),
    e = gs(e, {
        separator: n
    }, n)),
    e
}
async function nT(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Dm(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = Am(t),
    t
}
async function Vm(e, t={}) {
    var c;
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
        id: ms.includes(f.tag) ? Kf(f) : f.tag,
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
            const d = (c = n == null ? void 0 : n[f]) == null ? void 0 : c.children;
            for (const m of [...d].filter(_=>ms.includes(_.tagName.toLowerCase())))
                o.elMap[m.getAttribute("data-hid") || Kf(await nT(m))] = m
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
        Object.entries(m.props).forEach(([b,k])=>{
            const g = `attr:${b}`;
            if (b === "class")
                for (const E of (k || "").split(" ").filter(Boolean))
                    _ && s(f, `${g}:${E}`, ()=>d.classList.remove(E)),
                    !d.classList.contains(E) && d.classList.add(E);
            else
                d.getAttribute(b) !== k && d.setAttribute(b, k === !0 ? "" : String(k)),
                _ && s(f, g, ()=>d.removeAttribute(b))
        }
        )
    }
    const l = []
      , u = {
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
            f.$el ? a(f) : ms.includes(d.tag) && l.push(f)
        }
    }
    for (const f of l) {
        const d = f.tag.tagPosition || "head";
        f.$el = n.createElement(f.tag.tag),
        a(f),
        u[d] = u[d] || n.createDocumentFragment(),
        u[d].appendChild(f.$el)
    }
    for (const f of i)
        await e.hooks.callHook("dom:renderTag", f, n, s);
    u.head && n.head.appendChild(u.head),
    u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild),
    u.bodyClose && n.body.appendChild(u.bodyClose),
    Object.values(o.pendingSideEffects).forEach(f=>f()),
    e._dom = o,
    e.dirty = !1,
    await e.hooks.callHook("dom:rendered", {
        renders: i
    })
}
async function rT(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await Vm(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function iT(e) {
    return t=>{
        var r, i;
        const n = ((i = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    rT(o, e)
                }
            }
        }
    }
}
const oT = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , sT = {
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
                    if (!a && oT.includes(r.tag) && (a = "merge"),
                    a === "merge") {
                        const l = o.props;
                        ["class", "style"].forEach(u=>{
                            l[u] && (r.props[u] ? (u === "style" && !l[u].endsWith(";") && (l[u] += ";"),
                            r.props[u] = `${l[u]} ${r.props[u]}`) : r.props[u] = l[u])
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
                    } else if (Ds(r) > Ds(o))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (ms.includes(r.tag) && s === 0) {
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
  , aT = {
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
  , lT = ["script", "link", "bodyAttrs"];
function cT(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,i])=>{
        r.startsWith("on") && typeof i == "function" ? (Nm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = i) : t[r] = i
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const uT = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (lT.includes(n.tag)) {
                    const {props: r, eventHandlers: i} = cT(n);
                    n.props = r,
                    Object.keys(i).length && ((n.props.src || n.props.href) && (n.key = n.key || au(n.props.src || n.props.href)),
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
                  , u = `data-h-${l}`;
                if (r(t.id, a, ()=>{}
                ),
                t.$el.hasAttribute(u))
                    return;
                t.$el.setAttribute(u, "");
                let c;
                const f = d=>{
                    s(d),
                    c == null || c.disconnect()
                }
                ;
                o in t.$el.dataset ? f(new Event(o.replace("on", ""))) : Nm.includes(o) && typeof MutationObserver < "u" ? (c = new MutationObserver(d=>{
                    d.some(_=>_.attributeName === `data-${o}`) && (f(new Event(o.replace("on", ""))),
                    c == null || c.disconnect())
                }
                ),
                c.observe(t.$el, {
                    attributes: !0
                })) : i.addEventListener(l, f),
                r(t.id, a, ()=>{
                    c == null || c.disconnect(),
                    i.removeEventListener(l, f),
                    t.$el.removeAttribute(u)
                }
                )
            }
            )
        }
    }
})
  , fT = ["link", "style", "script", "noscript"]
  , dT = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && fT.includes(e.tag) && (e.props["data-hid"] = e._h = au(e.key))
        }
    }
}
  , hT = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(i=>i._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of tT)
                for (const i of e.tags.filter(o=>typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(i.tagPriority.replace(n, ""));
                    typeof o < "u" && (i._p = o + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>Ds(n) - Ds(r))
        }
    }
}
  , pT = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , mT = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , i = n.findIndex(l=>l.tag === "templateParams")
              , o = i !== -1 ? n[i].props : {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = gs(o.pageTitle || r || "", o, s);
            for (const l of n.filter(u=>u.processTemplateParams !== !1)) {
                const u = pT[l.tag];
                u && typeof l.props[u] == "string" ? l.props[u] = gs(l.props[u], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(c=>{
                    typeof l[c] == "string" && (l[c] = gs(l[c], o, s))
                }
                )
            }
            e._templateParams = o,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , gT = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(i=>i.tag === "titleTemplate");
            const r = t.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = Yf(t[n].textContent, t[r].textContent);
                i !== null ? t[r].textContent = i || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const i = Yf(t[n].textContent);
                i !== null && (t[n].textContent = i,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , yT = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Fm;
function vT(e={}) {
    const t = _T(e);
    return t.use(iT()),
    Fm = t
}
function Jf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function _T(e={}) {
    const t = mm();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (JE ? document : void 0);
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
            const u = typeof l == "function" ? l(a) : l;
            (!u.key || !s.some(c=>c.key === u.key)) && (s.push(u),
            Jf(u.mode, n) && t.addHooks(u.hooks || {}))
        },
        push(l, u) {
            u == null || delete u.head;
            const c = {
                _i: i++,
                input: l,
                ...u
            };
            return Jf(c.mode, n) && (o.push(c),
            r()),
            {
                dispose() {
                    o = o.filter(f=>f._i !== c._i),
                    t.callHook("entries:updated", a),
                    r()
                },
                patch(f) {
                    o = o.map(d=>(d._i === c._i && (d.input = c.input = f),
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
            for (const u of l.entries) {
                const c = u.resolvedInput || u.input;
                if (u.resolvedInput = await (u.transform ? u.transform(c) : c),
                u.resolvedInput)
                    for (const f of await eT(u)) {
                        const d = {
                            tag: f,
                            entry: u,
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
    return [sT, aT, uT, dT, hT, mT, gT, yT, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function bT() {
    return Fm
}
const ET = nm.startsWith("3");
function TT(e) {
    return typeof e == "function" ? e() : G(e)
}
function Ns(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = TT(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Ns(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,i])=>r === "titleTemplate" || r.startsWith("on") ? [r, G(i)] : [r, Ns(i, r)])) : n
}
const kT = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Ns(t.input)
        }
    }
}
  , xm = "usehead";
function ST(e) {
    return {
        install(n) {
            ET && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(xm, e))
        }
    }.install
}
function wT(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>Jt(()=>setTimeout(()=>n(), 0)));
    const t = vT(e);
    return t.use(kT),
    t.install = ST(t),
    t
}
const Kl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Yl = "__unhead_injection_handler__";
function AT(e) {
    Kl[Yl] = e
}
function LT() {
    if (Yl in Kl)
        return Kl[Yl]();
    const e = kt(xm);
    return e || bT()
}
function CT(e, t={}) {
    const n = t.head || LT();
    if (n)
        return n.ssr ? n.push(e, t) : OT(n, e, t)
}
function OT(e, t, n={}) {
    const r = le(!1)
      , i = le({});
    M0(()=>{
        i.value = r.value ? {} : Ns(t)
    }
    );
    const o = e.push(i.value, n);
    return je(i, a=>{
        o.patch(a)
    }
    ),
    kn() && (Tn(()=>{
        o.dispose()
    }
    ),
    Dp(()=>{
        r.value = !0
    }
    ),
    Mp(()=>{
        r.value = !1
    }
    )),
    o
}
function Cn(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = Cn(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: Cn(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = Cn(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = Cn(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(i) {
        n.add(Cn(i))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(i, o) {
        n.set(Cn(o), Cn(i))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(Cn(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const RT = {
    nuxt: {
        buildId: "b802c4ff-1670-4c2b-96a6-6c2821c047d8"
    }
}
  , IT = kE(RT);
function PT() {
    const e = ne();
    return e._appConfig || (e._appConfig = St(IT)),
    e._appConfig
}
const MT = !1
  , ql = !1
  , DT = !1
  , NT = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , VT = "#__nuxt";
let ys, Um;
function FT() {
    var t;
    const e = (t = PT().nuxt) == null ? void 0 : t.buildId;
    return ys = $fetch(iu(`builds/meta/${e}.json`)),
    ys.then(n=>{
        Um = TE(n.matcher)
    }
    ),
    ys
}
function ua() {
    return ys || FT()
}
async function Bm(e) {
    return await ua(),
    su({}, ...Um.matchAll(e).reverse())
}
function zf(e, t={}) {
    const n = xT(e, t)
      , r = ne()
      , i = r._payloadCache = r._payloadCache || {};
    return n in i || (i[n] = UT(e).then(o=>o ? Hm(n).then(s=>s || (delete i[n],
    null)) : (i[n] = null,
    null))),
    i[n]
}
const Qf = "json";
function xT(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || xn(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Ii(Jn().app.baseURL, n.pathname, r ? `_payload.${r}.${Qf}` : `_payload.${Qf}`)
}
async function Hm(e) {
    const t = fetch(e).then(n=>n.text().then(jm));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function UT(e=aa().path) {
    if (e = No(e),
    (await ua()).prerendered.includes(e))
        return !0;
    const n = await Bm(e);
    return !!n.prerender && !n.redirect
}
let ss = null;
async function BT() {
    if (ss)
        return ss;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await jm(e.textContent || "")
      , n = e.dataset.src ? await Hm(e.dataset.src) : void 0;
    return ss = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    ss
}
async function jm(e) {
    return await jE(e, ne()._payloadRevivers)
}
function HT(e, t) {
    ne()._payloadRevivers[e] = t
}
const Xf = {
    NuxtError: e=>ca(e),
    EmptyShallowRef: e=>_n(e === "_" ? void 0 : e === "0n" ? BigInt(0) : mo(e)),
    EmptyRef: e=>le(e === "_" ? void 0 : e === "0n" ? BigInt(0) : mo(e)),
    ShallowRef: e=>_n(e),
    ShallowReactive: e=>Oi(e),
    Ref: e=>le(e),
    Reactive: e=>St(e)
}
  , jT = Ft({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in Xf)
            HT(r, Xf[r]);
        Object.assign(e.payload, ([t,n] = In(()=>e.runWithContext(BT)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , KT = []
  , YT = Ft({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = wT({
            plugins: KT
        });
        AT(()=>ne().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await Vm(t)
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
function qT(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Xe = Object.assign;
function Ya(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = bn(i) ? i.map(e) : e(i)
    }
    return n
}
const Ji = ()=>{}
  , bn = Array.isArray
  , Km = /#/g
  , WT = /&/g
  , GT = /\//g
  , JT = /=/g
  , zT = /\?/g
  , Ym = /\+/g
  , QT = /%5B/g
  , XT = /%5D/g
  , qm = /%5E/g
  , ZT = /%60/g
  , Wm = /%7B/g
  , $T = /%7C/g
  , Gm = /%7D/g
  , ek = /%20/g;
function cu(e) {
    return encodeURI("" + e).replace($T, "|").replace(QT, "[").replace(XT, "]")
}
function tk(e) {
    return cu(e).replace(Wm, "{").replace(Gm, "}").replace(qm, "^")
}
function Wl(e) {
    return cu(e).replace(Ym, "%2B").replace(ek, "+").replace(Km, "%23").replace(WT, "%26").replace(ZT, "`").replace(Wm, "{").replace(Gm, "}").replace(qm, "^")
}
function nk(e) {
    return Wl(e).replace(JT, "%3D")
}
function rk(e) {
    return cu(e).replace(Km, "%23").replace(zT, "%3F")
}
function ik(e) {
    return e == null ? "" : rk(e).replace(GT, "%2F")
}
function go(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const ok = /\/$/
  , sk = e=>e.replace(ok, "");
function qa(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    i = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = uk(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: go(s)
    }
}
function ak(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Zf(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function lk(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && bi(t.matched[r], n.matched[i]) && Jm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function bi(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Jm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!ck(e[n], t[n]))
            return !1;
    return !0
}
function ck(e, t) {
    return bn(e) ? $f(e, t) : bn(t) ? $f(t, e) : e === t
}
function $f(e, t) {
    return bn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function uk(e, t) {
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
function fk(e) {
    if (!e)
        if (ri) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    sk(e)
}
const dk = /^[^#]+#/;
function hk(e, t) {
    return e.replace(dk, "#") + t
}
function pk(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const fa = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function mk(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = pk(i, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function ed(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Gl = new Map;
function gk(e, t) {
    Gl.set(e, t)
}
function yk(e) {
    const t = Gl.get(e);
    return Gl.delete(e),
    t
}
let vk = ()=>location.protocol + "//" + location.host;
function zm(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Zf(l, "")
    }
    return Zf(n, e) + r + i
}
function _k(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const a = ({state: d})=>{
        const m = zm(e, location)
          , _ = n.value
          , b = t.value;
        let k = 0;
        if (d) {
            if (n.value = m,
            t.value = d,
            s && s === _) {
                s = null;
                return
            }
            k = b ? d.position - b.position : 0
        } else
            r(m);
        i.forEach(g=>{
            g(n.value, _, {
                delta: k,
                type: yo.pop,
                direction: k ? k > 0 ? zi.forward : zi.back : zi.unknown
            })
        }
        )
    }
    ;
    function l() {
        s = n.value
    }
    function u(d) {
        i.push(d);
        const m = ()=>{
            const _ = i.indexOf(d);
            _ > -1 && i.splice(_, 1)
        }
        ;
        return o.push(m),
        m
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(Xe({}, d.state, {
            scroll: fa()
        }), "")
    }
    function f() {
        for (const d of o)
            d();
        o = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}
function td(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? fa() : null
    }
}
function bk(e) {
    const {history: t, location: n} = window
      , r = {
        value: zm(e, n)
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
    function o(l, u, c) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : vk() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d),
            i.value = u
        } catch (m) {
            console.error(m),
            n[c ? "replace" : "assign"](d)
        }
    }
    function s(l, u) {
        const c = Xe({}, t.state, td(i.value.back, l, i.value.forward, !0), u, {
            position: i.value.position
        });
        o(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = Xe({}, i.value, t.state, {
            forward: l,
            scroll: fa()
        });
        o(c.current, c, !0);
        const f = Xe({}, td(r.value, l, null), {
            position: c.position + 1
        }, u);
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
function Qm(e) {
    e = fk(e);
    const t = bk(e)
      , n = _k(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = Xe({
        location: "",
        base: e,
        go: r,
        createHref: hk.bind(null, e)
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
function Ek(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Qm(e)
}
function Tk(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Xm(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const dn = {
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
  , Zm = Symbol("");
var nd;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(nd || (nd = {}));
function Ei(e, t) {
    return Xe(new Error, {
        type: e,
        [Zm]: !0
    }, t)
}
function Bn(e, t) {
    return e instanceof Error && Zm in e && (t == null || !!(e.type & t))
}
const rd = "[^/]+?"
  , kk = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Sk = /[.+*?^${}()[\]/\\]/g;
function wk(e, t) {
    const n = Xe({}, kk, t)
      , r = [];
    let i = n.start ? "^" : "";
    const o = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (i += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (i += "/"),
                i += d.value.replace(Sk, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: _, repeatable: b, optional: k, regexp: g} = d;
                o.push({
                    name: _,
                    repeatable: b,
                    optional: k
                });
                const E = g || rd;
                if (E !== rd) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${E}): ` + y.message)
                    }
                }
                let p = b ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                f || (p = k && u.length < 2 ? `(?:/${p})` : "/" + p),
                k && (p += "?"),
                i += p,
                m += 20,
                k && (m += -8),
                b && (m += -20),
                E === ".*" && (m += -50)
            }
            c.push(m)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (i += "/?"),
    n.end ? i += "$" : n.strict && (i += "(?:/|$)");
    const s = new RegExp(i,n.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(s)
          , f = {};
        if (!c)
            return null;
        for (let d = 1; d < c.length; d++) {
            const m = c[d] || ""
              , _ = o[d - 1];
            f[_.name] = m && _.repeatable ? m.split("/") : m
        }
        return f
    }
    function l(u) {
        let c = ""
          , f = !1;
        for (const d of e) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const m of d)
                if (m.type === 0)
                    c += m.value;
                else if (m.type === 1) {
                    const {value: _, repeatable: b, optional: k} = m
                      , g = _ in u ? u[_] : "";
                    if (bn(g) && !b)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = bn(g) ? g.join("/") : g;
                    if (!E)
                        if (k)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    c += E
                }
        }
        return c || "/"
    }
    return {
        re: s,
        score: r,
        keys: o,
        parse: a,
        stringify: l
    }
}
function Ak(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function Lk(e, t) {
    let n = 0;
    const r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        const o = Ak(r[n], i[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (id(r))
            return 1;
        if (id(i))
            return -1
    }
    return i.length - r.length
}
function id(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Ck = {
    type: 0,
    value: ""
}
  , Ok = /[a-zA-Z0-9_]/;
function Rk(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Ck]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${u}": ${m}`)
    }
    let n = 0
      , r = n;
    const i = [];
    let o;
    function s() {
        o && i.push(o),
        o = []
    }
    let a = 0, l, u = "", c = "";
    function f() {
        u && (n === 0 ? o.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function d() {
        u += l
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
            l === "/" ? (u && f(),
            s()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : Ok.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    s(),
    i
}
function Ik(e, t, n) {
    const r = wk(Rk(e.path), n)
      , i = Xe(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i),
    i
}
function Pk(e, t) {
    const n = []
      , r = new Map;
    t = ad({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(c) {
        return r.get(c)
    }
    function o(c, f, d) {
        const m = !d
          , _ = Mk(c);
        _.aliasOf = d && d.record;
        const b = ad(t, c)
          , k = [_];
        if ("alias"in c) {
            const p = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const y of p)
                k.push(Xe({}, _, {
                    components: d ? d.record.components : _.components,
                    path: y,
                    aliasOf: d ? d.record : _
                }))
        }
        let g, E;
        for (const p of k) {
            const {path: y} = p;
            if (f && y[0] !== "/") {
                const T = f.record.path
                  , w = T[T.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (y && w + y)
            }
            if (g = Ik(p, f, b),
            d ? d.alias.push(g) : (E = E || g,
            E !== g && E.alias.push(g),
            m && c.name && !sd(g) && s(c.name)),
            _.children) {
                const T = _.children;
                for (let w = 0; w < T.length; w++)
                    o(T[w], g, d && d.children[w])
            }
            d = d || g,
            (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && l(g)
        }
        return E ? ()=>{
            s(E)
        }
        : Ji
    }
    function s(c) {
        if (Xm(c)) {
            const f = r.get(c);
            f && (r.delete(c),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(s),
            f.alias.forEach(s))
        } else {
            const f = n.indexOf(c);
            f > -1 && (n.splice(f, 1),
            c.record.name && r.delete(c.record.name),
            c.children.forEach(s),
            c.alias.forEach(s))
        }
    }
    function a() {
        return n
    }
    function l(c) {
        let f = 0;
        for (; f < n.length && Lk(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !$m(c, n[f])); )
            f++;
        n.splice(f, 0, c),
        c.record.name && !sd(c) && r.set(c.record.name, c)
    }
    function u(c, f) {
        let d, m = {}, _, b;
        if ("name"in c && c.name) {
            if (d = r.get(c.name),
            !d)
                throw Ei(1, {
                    location: c
                });
            b = d.record.name,
            m = Xe(od(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), c.params && od(c.params, d.keys.map(E=>E.name))),
            _ = d.stringify(m)
        } else if (c.path != null)
            _ = c.path,
            d = n.find(E=>E.re.test(_)),
            d && (m = d.parse(_),
            b = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw Ei(1, {
                    location: c,
                    currentLocation: f
                });
            b = d.record.name,
            m = Xe({}, f.params, c.params),
            _ = d.stringify(m)
        }
        const k = [];
        let g = d;
        for (; g; )
            k.unshift(g.record),
            g = g.parent;
        return {
            name: b,
            path: _,
            params: m,
            matched: k,
            meta: Nk(k)
        }
    }
    return e.forEach(c=>o(c)),
    {
        addRoute: o,
        resolve: u,
        removeRoute: s,
        getRoutes: a,
        getRecordMatcher: i
    }
}
function od(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function Mk(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Dk(e),
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
function Dk(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function sd(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Nk(e) {
    return e.reduce((t,n)=>Xe(t, n.meta), {})
}
function ad(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function $m(e, t) {
    return t.children.some(n=>n === e || $m(e, n))
}
function Vk(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(Ym, " ")
          , s = o.indexOf("=")
          , a = go(s < 0 ? o : o.slice(0, s))
          , l = s < 0 ? null : go(o.slice(s + 1));
        if (a in t) {
            let u = t[a];
            bn(u) || (u = t[a] = [u]),
            u.push(l)
        } else
            t[a] = l
    }
    return t
}
function ld(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = nk(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (bn(r) ? r.map(o=>o && Wl(o)) : [r && Wl(r)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function Fk(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = bn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const xk = Symbol("")
  , cd = Symbol("")
  , uu = Symbol("")
  , fu = Symbol("")
  , Jl = Symbol("");
function Fi() {
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
        const u = d=>{
            d === !1 ? l(Ei(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : Tk(d) ? l(Ei(2, {
                from: t,
                to: d
            })) : (s && r.enterCallbacks[i] === s && typeof d == "function" && s.push(d),
            a())
        }
          , c = o(()=>e.call(r && r.instances[i], t, n, u));
        let f = Promise.resolve(c);
        e.length < 3 && (f = f.then(u)),
        f.catch(d=>l(d))
    }
    )
}
function Wa(e, t, n, r, i=o=>o()) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (Uk(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && o.push(ur(c, n, r, s, a, i))
                } else {
                    let u = l();
                    o.push(()=>u.then(c=>{
                        if (!c)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = qT(c) ? c.default : c;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && ur(m, n, r, s, a, i)()
                    }
                    ))
                }
        }
    return o
}
function Uk(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function ud(e) {
    const t = kt(uu)
      , n = kt(fu)
      , r = ue(()=>t.resolve(G(e.to)))
      , i = ue(()=>{
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(bi.bind(null, c));
        if (d > -1)
            return d;
        const m = fd(l[u - 2]);
        return u > 1 && fd(c) === m && f[f.length - 1].path !== m ? f.findIndex(bi.bind(null, l[u - 2])) : d
    }
    )
      , o = ue(()=>i.value > -1 && Kk(n.params, r.value.params))
      , s = ue(()=>i.value > -1 && i.value === n.matched.length - 1 && Jm(n.params, r.value.params));
    function a(l={}) {
        return jk(l) ? t[G(e.replace) ? "replace" : "push"](G(e.to)).catch(Ji) : Promise.resolve()
    }
    return {
        route: r,
        href: ue(()=>r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: a
    }
}
const Bk = xe({
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
    useLink: ud,
    setup(e, {slots: t}) {
        const n = St(ud(e))
          , {options: r} = kt(uu)
          , i = ue(()=>({
            [dd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [dd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
  , Hk = Bk;
function jk(e) {
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
function Kk(e, t) {
    for (const n in t) {
        const r = t[n]
          , i = e[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!bn(i) || i.length !== r.length || r.some((o,s)=>o !== i[s]))
            return !1
    }
    return !0
}
function fd(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const dd = (e,t,n)=>e ?? t ?? n
  , Yk = xe({
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
        const r = kt(Jl)
          , i = ue(()=>e.route || r.value)
          , o = kt(cd, 0)
          , s = ue(()=>{
            let u = G(o);
            const {matched: c} = i.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = ue(()=>i.value.matched[s.value]);
        Kr(cd, ue(()=>s.value + 1)),
        Kr(xk, a),
        Kr(Jl, i);
        const l = le();
        return je(()=>[l.value, a.value, e.name], ([u,c,f],[d,m,_])=>{
            c && (c.instances[f] = u,
            m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
            c.updateGuards.size || (c.updateGuards = m.updateGuards))),
            u && c && (!m || !bi(c, m) || !d) && (c.enterCallbacks[f] || []).forEach(b=>b(u))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const u = i.value
              , c = e.name
              , f = a.value
              , d = f && f.components[c];
            if (!d)
                return hd(n.default, {
                    Component: d,
                    route: u
                });
            const m = f.props[c]
              , _ = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null
              , k = ft(d, Xe({}, _, t, {
                onVnodeUnmounted: g=>{
                    g.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return hd(n.default, {
                Component: k,
                route: u
            }) || k
        }
    }
});
function hd(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const eg = Yk;
function qk(e) {
    const t = Pk(e.routes, e)
      , n = e.parseQuery || Vk
      , r = e.stringifyQuery || ld
      , i = e.history
      , o = Fi()
      , s = Fi()
      , a = Fi()
      , l = _n(dn);
    let u = dn;
    ri && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = Ya.bind(null, H=>"" + H)
      , f = Ya.bind(null, ik)
      , d = Ya.bind(null, go);
    function m(H, te) {
        let Q, $;
        return Xm(H) ? (Q = t.getRecordMatcher(H),
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
    function k(H) {
        return !!t.getRecordMatcher(H)
    }
    function g(H, te) {
        if (te = Xe({}, te || l.value),
        typeof H == "string") {
            const v = qa(n, H, te.path)
              , A = t.resolve({
                path: v.path
            }, te)
              , R = i.createHref(v.fullPath);
            return Xe(v, A, {
                params: d(A.params),
                hash: go(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let Q;
        if (H.path != null)
            Q = Xe({}, H, {
                path: qa(n, H.path, te.path).path
            });
        else {
            const v = Xe({}, H.params);
            for (const A in v)
                v[A] == null && delete v[A];
            Q = Xe({}, H, {
                params: f(v)
            }),
            te.params = f(te.params)
        }
        const $ = t.resolve(Q, te)
          , ye = H.hash || "";
        $.params = c(d($.params));
        const Ue = ak(r, Xe({}, H, {
            hash: tk(ye),
            path: $.path
        }))
          , h = i.createHref(Ue);
        return Xe({
            fullPath: Ue,
            hash: ye,
            query: r === ld ? Fk(H.query) : H.query || {}
        }, $, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(H) {
        return typeof H == "string" ? qa(n, H, l.value.path) : Xe({}, H)
    }
    function p(H, te) {
        if (u !== H)
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
    function w(H) {
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
        const Q = u = g(H)
          , $ = l.value
          , ye = H.state
          , Ue = H.force
          , h = H.replace === !0
          , v = w(Q);
        if (v)
            return L(Xe(E(v), {
                state: typeof v == "object" ? Xe({}, ye, v.state) : ye,
                force: Ue,
                replace: h
            }), te || Q);
        const A = Q;
        A.redirectedFrom = te;
        let R;
        return !Ue && lk(r, $, Q) && (R = Ei(16, {
            to: A,
            from: $
        }),
        ce($, $, !0, !1)),
        (R ? Promise.resolve(R) : D(A, $)).catch(V=>Bn(V) ? Bn(V, 2) ? V : j(V) : x(V, A, $)).then(V=>{
            if (V) {
                if (Bn(V, 2))
                    return L(Xe({
                        replace: h
                    }, E(V.to), {
                        state: typeof V.to == "object" ? Xe({}, ye, V.to.state) : ye,
                        force: Ue
                    }), te || A)
            } else
                V = F(A, $, !0, h, ye);
            return B(A, $, V),
            V
        }
        )
    }
    function C(H, te) {
        const Q = p(H, te);
        return Q ? Promise.reject(Q) : Promise.resolve()
    }
    function O(H) {
        const te = Qe.values().next().value;
        return te && typeof te.runWithContext == "function" ? te.runWithContext(H) : H()
    }
    function D(H, te) {
        let Q;
        const [$,ye,Ue] = Wk(H, te);
        Q = Wa($.reverse(), "beforeRouteLeave", H, te);
        for (const v of $)
            v.leaveGuards.forEach(A=>{
                Q.push(ur(A, H, te))
            }
            );
        const h = C.bind(null, H, te);
        return Q.push(h),
        et(Q).then(()=>{
            Q = [];
            for (const v of o.list())
                Q.push(ur(v, H, te));
            return Q.push(h),
            et(Q)
        }
        ).then(()=>{
            Q = Wa(ye, "beforeRouteUpdate", H, te);
            for (const v of ye)
                v.updateGuards.forEach(A=>{
                    Q.push(ur(A, H, te))
                }
                );
            return Q.push(h),
            et(Q)
        }
        ).then(()=>{
            Q = [];
            for (const v of Ue)
                if (v.beforeEnter)
                    if (bn(v.beforeEnter))
                        for (const A of v.beforeEnter)
                            Q.push(ur(A, H, te));
                    else
                        Q.push(ur(v.beforeEnter, H, te));
            return Q.push(h),
            et(Q)
        }
        ).then(()=>(H.matched.forEach(v=>v.enterCallbacks = {}),
        Q = Wa(Ue, "beforeRouteEnter", H, te, O),
        Q.push(h),
        et(Q))).then(()=>{
            Q = [];
            for (const v of s.list())
                Q.push(ur(v, H, te));
            return Q.push(h),
            et(Q)
        }
        ).catch(v=>Bn(v, 8) ? v : Promise.reject(v))
    }
    function B(H, te, Q) {
        a.list().forEach($=>O(()=>$(H, te, Q)))
    }
    function F(H, te, Q, $, ye) {
        const Ue = p(H, te);
        if (Ue)
            return Ue;
        const h = te === dn
          , v = ri ? history.state : {};
        Q && ($ || h ? i.replace(H.fullPath, Xe({
            scroll: h && v && v.scroll
        }, ye)) : i.push(H.fullPath, ye)),
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
              , ye = w($);
            if (ye) {
                L(Xe(ye, {
                    replace: !0
                }), $).catch(Ji);
                return
            }
            u = $;
            const Ue = l.value;
            ri && gk(ed(Ue.fullPath, Q.delta), fa()),
            D($, Ue).catch(h=>Bn(h, 12) ? h : Bn(h, 2) ? (L(h.to, $).then(v=>{
                Bn(v, 20) && !Q.delta && Q.type === yo.pop && i.go(-1, !1)
            }
            ).catch(Ji),
            Promise.reject()) : (Q.delta && i.go(-Q.delta, !1),
            x(h, $, Ue))).then(h=>{
                h = h || F($, Ue, !1),
                h && (Q.delta && !Bn(h, 8) ? i.go(-Q.delta, !1) : Q.type === yo.pop && Bn(h, 20) && i.go(-1, !1)),
                B($, Ue, h)
            }
            ).catch(Ji)
        }
        ))
    }
    let K = Fi(), N = Fi(), Y;
    function x(H, te, Q) {
        j(H);
        const $ = N.list();
        return $.length ? $.forEach(ye=>ye(H, te, Q)) : console.error(H),
        Promise.reject(H)
    }
    function ae() {
        return Y && l.value !== dn ? Promise.resolve() : new Promise((H,te)=>{
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
        const {scrollBehavior: ye} = e;
        if (!ri || !ye)
            return Promise.resolve();
        const Ue = !Q && yk(ed(H.fullPath, 0)) || ($ || !Q) && history.state && history.state.scroll || null;
        return Jt().then(()=>ye(H, te, Ue)).then(h=>h && mk(h)).catch(h=>x(h, H, te))
    }
    const ve = H=>i.go(H);
    let qe;
    const Qe = new Set
      , ct = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: _,
        hasRoute: k,
        getRoutes: b,
        resolve: g,
        options: e,
        push: y,
        replace: T,
        go: ve,
        back: ()=>ve(-1),
        forward: ()=>ve(1),
        beforeEach: o.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: N.add,
        isReady: ae,
        install(H) {
            const te = this;
            H.component("RouterLink", Hk),
            H.component("RouterView", eg),
            H.config.globalProperties.$router = te,
            Object.defineProperty(H.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>G(l)
            }),
            ri && !qe && l.value === dn && (qe = !0,
            y(i.location).catch(ye=>{}
            ));
            const Q = {};
            for (const ye in dn)
                Object.defineProperty(Q, ye, {
                    get: ()=>l.value[ye],
                    enumerable: !0
                });
            H.provide(uu, te),
            H.provide(fu, Oi(Q)),
            H.provide(Jl, l);
            const $ = H.unmount;
            Qe.add(H),
            H.unmount = function() {
                Qe.delete(H),
                Qe.size < 1 && (u = dn,
                Z && Z(),
                Z = null,
                l.value = dn,
                qe = !1,
                Y = !1),
                $()
            }
        }
    };
    function et(H) {
        return H.reduce((te,Q)=>te.then(()=>O(Q)), Promise.resolve())
    }
    return ct
}
function Wk(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const a = t.matched[s];
        a && (e.matched.find(u=>bi(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(u=>bi(u, l)) || i.push(l))
    }
    return [n, r, i]
}
function Gk() {
    return kt(fu)
}
const Jk = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , zl = (e,t)=>{
    const n = e.route.matched.find(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Jk(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , zk = (e,t)=>({
    default: ()=>e ? ft(U0, e === !0 ? {} : e, t) : t
});
function du(e) {
    return Array.isArray(e) ? e : [e]
}
const be = null
  , Ee = null
  , Te = null
  , ke = null
  , Se = null
  , we = null
  , Ae = null
  , Le = null
  , Ce = null
  , Oe = null
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
  , pd = [{
    name: "clicker-airdrop___de",
    path: "/de/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___fr",
    path: "/fr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: be == null ? void 0 : be.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___de",
    path: "/de/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___fr",
    path: "/fr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js"), __vite__mapDeps([3, 4, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___de",
    path: "/de/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___fr",
    path: "/fr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js"), __vite__mapDeps([6, 7, 5, 2, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___de",
    path: "/de/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___fr",
    path: "/fr/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js"), __vite__mapDeps([9, 2, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___de",
    path: "/de/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___fr",
    path: "/fr/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js"), __vite__mapDeps([10, 5, 2, 11, 12, 13, 14, 15, 16, 17, 18, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___de",
    path: "/de/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___fr",
    path: "/fr/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js"), __vite__mapDeps([19, 17, 2, 16, 5, 12, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___de",
    path: "/de/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___fr",
    path: "/fr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js"), __vite__mapDeps([20, 15, 16, 5, 17, 4, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___de",
    path: "/de/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___en",
    path: "/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___es",
    path: "/es/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___fr",
    path: "/fr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___hi",
    path: "/hi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___id",
    path: "/id/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___pt",
    path: "/pt/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___ru",
    path: "/ru/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___th",
    path: "/th/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tl",
    path: "/tl/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tr",
    path: "/tr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___uz",
    path: "/uz/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___vi",
    path: "/vi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js"), __vite__mapDeps([21, 7, 2, 11, 12, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___de",
    path: "/de/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___fr",
    path: "/fr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js"), __vite__mapDeps([22, 2, 16, 5]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___de",
    path: "/de/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___fr",
    path: "/fr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js"), __vite__mapDeps([23, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___de",
    path: "/de/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___fr",
    path: "/fr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js"), __vite__mapDeps([24, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___de",
    path: "/de/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___fr",
    path: "/fr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/language.wTOcKbSg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___de",
    path: "/de/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___en",
    path: "/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___es",
    path: "/es/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___fr",
    path: "/fr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___hi",
    path: "/hi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___id",
    path: "/id/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___pt",
    path: "/pt/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___ru",
    path: "/ru/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___th",
    path: "/th/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tl",
    path: "/tl/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tr",
    path: "/tr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___uz",
    path: "/uz/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___vi",
    path: "/vi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js"), __vite__mapDeps([25, 7, 26, 27]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___de",
    path: "/de/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___en",
    path: "/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___es",
    path: "/es/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___fr",
    path: "/fr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___hi",
    path: "/hi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___id",
    path: "/id/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___pt",
    path: "/pt/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___ru",
    path: "/ru/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___th",
    path: "/th/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tl",
    path: "/tl/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tr",
    path: "/tr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___uz",
    path: "/uz/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___vi",
    path: "/vi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BXSasj5j.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___de",
    path: "/de/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___en",
    path: "/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___es",
    path: "/es/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___fr",
    path: "/fr/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___hi",
    path: "/hi/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___id",
    path: "/id/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___pt",
    path: "/pt/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___ru",
    path: "/ru/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___th",
    path: "/th/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tl",
    path: "/tl/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tr",
    path: "/tr/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___uz",
    path: "/uz/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___vi",
    path: "/vi/clicker/user",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js"), __vite__mapDeps([28, 7, 26, 27, 5, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___de",
    path: (P == null ? void 0 : P.path) ?? "/de",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___en",
    path: (P == null ? void 0 : P.path) ?? "/",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___es",
    path: (P == null ? void 0 : P.path) ?? "/es",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___fr",
    path: (P == null ? void 0 : P.path) ?? "/fr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___hi",
    path: (P == null ? void 0 : P.path) ?? "/hi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___id",
    path: (P == null ? void 0 : P.path) ?? "/id",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___pt",
    path: (P == null ? void 0 : P.path) ?? "/pt",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___ru",
    path: (P == null ? void 0 : P.path) ?? "/ru",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___th",
    path: (P == null ? void 0 : P.path) ?? "/th",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tl",
    path: (P == null ? void 0 : P.path) ?? "/tl",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___tr",
    path: (P == null ? void 0 : P.path) ?? "/tr",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___uz",
    path: (P == null ? void 0 : P.path) ?? "/uz",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "index___vi",
    path: (P == null ? void 0 : P.path) ?? "/vi",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js"), __vite__mapDeps([29, 30, 17, 16]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___de",
    path: (M == null ? void 0 : M.path) ?? "/de/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___en",
    path: (M == null ? void 0 : M.path) ?? "/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___es",
    path: (M == null ? void 0 : M.path) ?? "/es/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___fr",
    path: (M == null ? void 0 : M.path) ?? "/fr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___hi",
    path: (M == null ? void 0 : M.path) ?? "/hi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___id",
    path: (M == null ? void 0 : M.path) ?? "/id/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___pt",
    path: (M == null ? void 0 : M.path) ?? "/pt/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___ru",
    path: (M == null ? void 0 : M.path) ?? "/ru/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___th",
    path: (M == null ? void 0 : M.path) ?? "/th/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tl",
    path: (M == null ? void 0 : M.path) ?? "/tl/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___tr",
    path: (M == null ? void 0 : M.path) ?? "/tr/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___uz",
    path: (M == null ? void 0 : M.path) ?? "/uz/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "privacy-policy___vi",
    path: (M == null ? void 0 : M.path) ?? "/vi/privacy-policy",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js"), __vite__mapDeps([31, 30]), import.meta.url).then(e=>e.default || e)
}]
  , tg = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? ft(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function md(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function Qk(e, t) {
    return e === t || t === dn ? !1 : md(e) !== md(t) ? !0 : !e.matched.every((r,i)=>{
        var o, s;
        return r.components && r.components.default === ((s = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    )
}
const Xk = {
    scrollBehavior(e, t, n) {
        var u;
        const r = ne()
          , i = ((u = Qt().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && s !== !1 && Qk(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: gd(e.hash),
                behavior: i
            } : !1;
        const a = c=>!!(c.meta.pageTransition ?? ql)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(c=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: gd(e.hash),
                    behavior: i
                }),
                c(o)
            }
            )
        }
        )
    }
};
function gd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const Zk = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , Yt = {
    ...Zk,
    ...Xk
}
  , $k = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = ne()
      , i = Qt();
    if (([t,n] = In(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = ca({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    })
      , a = i.beforeResolve(u=>{
        if (a(),
        u === e) {
            const c = i.afterEach(async()=>{
                c(),
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
var eS = Object.defineProperty
  , tS = Object.defineProperties
  , nS = Object.getOwnPropertyDescriptors
  , yd = Object.getOwnPropertySymbols
  , rS = Object.prototype.hasOwnProperty
  , iS = Object.prototype.propertyIsEnumerable
  , vd = (e,t,n)=>t in e ? eS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , de = (e,t)=>{
    for (var n in t || (t = {}))
        rS.call(t, n) && vd(e, n, t[n]);
    if (yd)
        for (var n of yd(t))
            iS.call(t, n) && vd(e, n, t[n]);
    return e
}
  , it = (e,t)=>tS(e, nS(t));
const hn = "Notivue__"
  , oS = 6e3
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
    duration: oS,
    ariaLive: "polite",
    ariaRole: "status"
}
  , Ql = it(de({}, vo), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , sS = it(de({}, vo), {
    duration: 1 / 0
})
  , aS = it(de({}, Ql), {
    ariaLive: "polite"
})
  , lS = de({}, vo)
  , cS = {
    [Ye.SUCCESS]: vo,
    [Ye.ERROR]: Ql,
    [Ye.WARNING]: aS,
    [Ye.INFO]: lS,
    [Ye.PROMISE]: sS,
    [Ye.PROMISE_RESOLVE]: vo,
    [Ye.PROMISE_REJECT]: Ql
}
  , ng = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: cS,
    limit: 1 / 0,
    animations: {
        enter: hn + "enter",
        leave: hn + "leave",
        clearAll: hn + "clearAll"
    }
}
  , gn = fS();
function uS(e) {
    Object.assign(gn, e)
}
function rg(e) {
    let t = 0;
    function n(r, i, o=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(it(de({}, r), {
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
function fS() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return rg(e)
}
function dS(e) {
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
const hS = typeof window > "u";
function fr(e) {
    return e.pointerType === "mouse"
}
function hu(e, t) {
    const n = de({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (mS(t[r]) ? n[r] = hu(e[r], t[r]) : n[r] = t[r]);
    return n
}
function pS(e, t) {
    return t.props || (t.props = {}),
    de(de(de(de({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function mS(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function gS(e, t) {
    return Hc(St(hu(e, t)))
}
function yS(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>it(de({}, t), {
        [n]: Ve(r)
    }), {})
}
const vS = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function ig(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!vS.includes(t)))
}
function og(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function _S(e) {
    const t = gS(ng, e)
      , n = ue(()=>t.position.value.startsWith("top"));
    function r(i) {
        typeof i == "function" && (i = i(yS(t)));
        for (const o of Object.keys(i))
            typeof t[o].value == "object" ? t[o].value = hu(t[o].value, i[o]) : t[o].value = i[o]
    }
    return it(de({}, t), {
        isTopAlign: n,
        update: r
    })
}
function bS() {
    return {
        entries: _n([]),
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
            vp(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function ES(e, t) {
    return {
        entries: _n([]),
        get length() {
            return this.entries.value.length
        },
        add(n) {
            this.entries.value.unshift(n),
            this.triggerRef()
        },
        addFromQueue() {
            const n = it(de({}, t.entries.value[0]), {
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
            vp(this.entries)
        },
        updateAll(n) {
            this.entries.value = this.entries.value.map(n)
        },
        remove(n) {
            this.entries.value = this.entries.value.filter(r=>r.id !== n),
            t.length > 0 && this.length < e.limit.value && Jt(()=>this.addFromQueue())
        },
        clear() {
            this.entries.value = [],
            t.clear()
        }
    }
}
function TS() {
    return {
        root: le(null),
        rootAttrs: _n({}),
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
function kS(e, t, n) {
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
                var u;
                t.remove(r),
                (u = s == null ? void 0 : s[o ? "onManualClear" : "onAutoClear"]) == null || u.call(s, ig(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || i || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: it(de({}, s.positionStyles), {
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
                  , u = t.get(l);
                if (!a || !u || u.animationAttrs.class === o)
                    continue;
                const {duration: c, easing: f} = this.getTransitionData();
                t.update(l, {
                    positionStyles: de({
                        willChange: "transform",
                        transform: `translate3d(0, ${s}px, 0)`
                    }, i ? {
                        transition: "none"
                    } : {
                        transitionDuration: c,
                        transitionTimingFunction: f
                    })
                }),
                s += (e.isTopAlign.value ? 1 : -1) * a.clientHeight
            }
            t.triggerRef()
        }
    }
}
function SS(e, t) {
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
                it(de({}, n), {
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
                n.timeout ? it(de({}, n), {
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
function wS({config: e, items: t, queue: n, animations: r, timeouts: i}) {
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
              , a = pS(e.notifications.value, o)
              , l = ()=>i.create(a.id, a.duration);
            if ([Ye.PROMISE_RESOLVE, Ye.PROMISE_REJECT].includes(o.type))
                n.get(a.id) ? (n.update(a.id, it(de({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, it(de({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const u = e.enqueue.value
                  , c = t.length >= e.limit.value;
                !u && c && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>i.create(m, 1));
                const f = u && !o.skipQueue && c
                  , d = it(de({}, a), {
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
const sg = Symbol("");
function AS(e={}) {
    const t = _S(e)
      , n = bS()
      , r = ES(t, n)
      , i = TS()
      , o = kS(t, r, i)
      , s = SS(r, o)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: i,
        animations: o,
        timeouts: s
    }
      , l = wS(a)
      , u = Object.freeze(rg(l));
    return uS(u),
    dS(a),
    {
        install(c) {
            c.config.globalProperties.$push = u,
            c.provide(sg, a)
        }
    }
}
function kr() {
    return kt(sg)
}
function LS() {
    return hS ? it(de({}, Hc(St(ng))), {
        isTopAlign: ue(()=>!0),
        update: ()=>{}
    }) : kr().config
}
const ag = {
    listAriaLabel: "Notifications"
}
  , CS = xe({
    setup(e, {slots: t, attrs: n}) {
        const r = le(!1);
        return Vt(()=>r.value = !0),
        ()=>{
            var i;
            return r.value ? (i = t.default) == null ? void 0 : i.call(t) : Ge("span", n, "")
        }
    }
})
  , OS = ["role", "aria-live"]
  , RS = xe({
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
        Ge("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, en(G(og)(t.item)), 9, OS))
    }
});
function IS() {
    const {timeouts: e, config: t} = kr();
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
function PS() {
    const {timeouts: e, config: t} = kr();
    function n(r) {
        fr(r) || (e.clearDebounceTimeout(),
        e.pause(),
        e.resumeWithDebounce(2e3))
    }
    return Tn(()=>{
        e.clearDebounceTimeout()
    }
    ),
    ue(()=>t.pauseOnTouch.value && !e.isStreamFocused.value ? {
        onPointerdown: n
    } : {})
}
const Ga = {
    boxSizing: "border-box"
}
  , Ja = {
    list: it(de({}, Ga), {
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
    listItem: it(de({}, Ga), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: it(de({}, Ga), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function MS() {
    const {isTopAlign: e, position: t} = LS()
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
        list: de(de({}, Ja.list), n.value),
        listItem: de(de({}, Ja.listItem), r.value),
        itemContainer: Ja.itemContainer
    }))
}
function DS(e) {
    function t() {
        window.matchMedia("(max-width: 1100px)").matches && e()
    }
    Vt(()=>{
        window.addEventListener("resize", t)
    }
    ),
    Tn(()=>{
        window.removeEventListener("resize", t)
    }
    )
}
function NS(e, t) {
    let n;
    const r = new Set;
    Vt(()=>{
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
    Tn(()=>{
        n == null || n.disconnect()
    }
    )
}
function VS() {
    const {elements: e, animations: t} = kr();
    DS(()=>t.updatePositions({
        isImmediate: !0
    })),
    NS(e.items.value, ()=>t.updatePositions())
}
function FS() {
    const {items: e, config: t, timeouts: n} = kr();
    function r() {
        n.isStreamFocused.value || (document.visibilityState === "visible" ? t.pauseOnTabChange.value && n.resume() : t.pauseOnTabChange.value ? n.pause() : e.clear())
    }
    Vt(()=>{
        document.addEventListener("visibilitychange", r)
    }
    ),
    Tn(()=>{
        document.removeEventListener("visibilitychange", r)
    }
    )
}
function xS() {
    const {animations: e} = kr()
      , t = window.matchMedia("(prefers-reduced-motion: reduce)")
      , n = ()=>e.setReducedMotion(t.matches);
    Vt(()=>{
        var r;
        n(),
        (r = t.addEventListener) == null || r.call(t, "change", n)
    }
    ),
    Tn(()=>{
        var r;
        (r = t.removeEventListener) == null || r.call(t, "change", n)
    }
    )
}
const US = ["data-notivue-align", "aria-label"]
  , BS = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , HS = ["aria-label", "tabindex", "data-notivue-container"]
  , jS = xe({
    __name: "NotivueImpl",
    props: ra({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, ag),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: i} = kr()
          , o = MS()
          , s = IS()
          , a = PS();
        return xS(),
        FS(),
        VS(),
        (l,u)=>{
            var c;
            return pe(),
            bt(v_, {
                to: G(n).teleportTo.value === !1 ? void 0 : G(n).teleportTo.value,
                disabled: G(n).teleportTo.value === !1
            }, [G(r).length > 0 ? (pe(),
            Ge("ol", _i({
                key: 0
            }, de(de(de({}, G(s)), G(a)), G(i).rootAttrs.value), {
                "data-notivue-align": G(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: G(i).root,
                class: t.class,
                style: de(de({}, G(o).list), (c = t.styles) == null ? void 0 : c.list)
            }), [(pe(!0),
            Ge(mt, null, W0(G(r).entries.value, (f,d)=>{
                var m, _, b, k;
                return pe(),
                Ge("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": G(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: G(i).items,
                    style: Mn(de(de(de({}, G(o).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (pe(),
                bt(RS, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (pe(),
                Ge("div", _i({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": G(og)(f),
                    tabindex: (b = (_ = l.containersTabIndex) == null ? void 0 : _[f.id]) != null ? b : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: G(i).containers,
                    style: de(de({}, G(o).itemContainer), (k = t.styles) == null ? void 0 : k.itemContainer)
                }), [Er(l.$slots, "default", cn(zt(G(ig)(f))))], 16, HS))], 12, BS)
            }
            ), 128))], 16, US)) : Wt("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , UM = xe({
    __name: "Notivue",
    props: ra({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, ag),
    setup(e) {
        const t = e;
        return (n,r)=>(pe(),
        bt(G(CS), null, {
            default: un(()=>[$e(jS, cn(zt(t)), {
                default: un(i=>[Er(n.$slots, "default", cn(zt(i)))]),
                _: 3
            }, 16)]),
            _: 3
        }))
    }
})
  , KS = {
    touchOnly: !1,
    exclude: "a, button",
    disabled: !1,
    threshold: .5
}
  , YS = 300
  , za = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , BM = xe({
    __name: "NotivueSwipe",
    props: ra({
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
    }, KS),
    setup(e) {
        const {items: t, timeouts: n, elements: r, animations: i} = kr()
          , o = e
          , s = oi(o, "touchOnly")
          , a = oi(o, "exclude")
          , l = oi(o, "disabled")
          , u = oi(o, "threshold")
          , c = ue(()=>o.item.type === Ye.PROMISE)
          , f = ue(()=>!n.isStreamFocused.value && !l.value && !c.value && o.item.duration < 1 / 0)
          , d = le(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , _ = Oi(m)
          , b = _n({});
        function k(j) {
            Object.assign(_, j)
        }
        function g(j) {
            b.value = de(de({}, b.value), j)
        }
        function E() {
            b.value = {}
        }
        je(()=>t.length, (j,ce)=>{
            j !== ce && _.isPressed && (w(),
            k(m))
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
        function w() {
            g({
                transition: i.isReducedMotion.value ? "none" : `${YS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function L(j) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ce, offsetLeft: ve} = d.value
              , qe = ve + r.root.value.offsetLeft
              , Qe = qe + ce;
            return j.clientX > qe && j.clientX < Qe
        }
        function C(j) {
            return fr(j) ? za.Mouse : za.Touch
        }
        function O() {
            n.clearDebounceTimeout(),
            n.pause()
        }
        function D(j) {
            n.clearDebounceTimeout(),
            n.resumeWithDebounce(j)
        }
        function B(j) {
            T(j) || y()
        }
        function F(j) {
            if (T(j) && (j.stopPropagation(),
            !!d.value && j.button === 0 && !(_.isPressed || _.isClearing))) {
                if (a.value && Array.from(d.value.querySelectorAll(a.value)).includes(j.target)) {
                    fr(j) || (O(),
                    D(za.TouchExternal));
                    return
                }
                fr(j) || O(),
                k({
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
                opacity: `${1 - Math.abs(_.currentX) / ce * (1 / u.value)}`
            }),
            k({
                currentX: j.clientX - _.startX
            }),
            Math.abs(_.currentX) > ce * u.value && (_.isClearing = !0,
            W(j))
        }
        function W(j) {
            if (o.item.destroy(),
            fr(j) && L(j)) {
                const ce = r.getSortedItems();
                ce[ce.length - 1].contains(d.value) || O()
            } else
                D(C(j));
            k({
                isClearing: !1
            })
        }
        function K(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (fr(j) && L(j) ? O() : D(C(j)),
            w(),
            k({
                startX: 0,
                currentX: 0,
                isPressed: !1
            })))
        }
        function N(j) {
            T(j) && (j.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (w(),
            k({
                startX: 0,
                currentX: 0,
                isPressed: !1
            }),
            D(C(j))))
        }
        const Y = [["pointerenter", B], ["pointerdown", F], ["pointermove", Z], ["pointerup", K], ["pointerleave", N]];
        function x() {
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
        return je(f, (j,ce,ve)=>{
            Jt(()=>{
                j && (p(),
                Jt(x))
            }
            ),
            ve(()=>{
                ae(),
                y()
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        }),
        Tn(ae),
        (j,ce)=>l.value ? Er(j.$slots, "default", {
            key: 1
        }) : (pe(),
        Ge("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: Mn(b.value)
        }, [Er(j.$slots, "default")], 4))
    }
})
  , qS = me("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , WS = [qS]
  , _d = xe({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(Pi))), WS, 16))
    }
})
  , GS = me("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , JS = [GS]
  , Qa = xe({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(Pi))), JS, 16))
    }
})
  , zS = me("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , QS = [zS]
  , XS = xe({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(Pi))), QS, 16))
    }
})
  , ZS = me("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , $S = me("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , ew = [ZS, $S]
  , bd = xe({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(Pi))), ew, 16))
    }
})
  , tw = me("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , nw = me("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , rw = me("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , iw = [tw, nw, rw]
  , Xa = xe({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(Pi))), iw, 16))
    }
})
  , ow = me("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , sw = me("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , aw = me("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , lw = [ow, sw, aw]
  , cw = xe({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(Pi))), lw, 16))
    }
})
  , uw = me("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , fw = me("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , dw = [uw, fw]
  , lg = xe({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(it(de({}, G(pu)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), dw, 16))
    }
})
  , hw = me("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , pw = me("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , mw = [hw, pw]
  , cg = xe({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("svg", cn(zt(G(gw))), mw, 16))
    }
})
  , pu = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , Pi = it(de({}, pu), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , gw = it(de({}, pu), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , yw = {
    [Ye.SUCCESS]: ht(_d),
    [Ye.ERROR]: ht(Qa),
    [Ye.INFO]: ht(XS),
    [Ye.WARNING]: ht(Qa),
    [Ye.PROMISE]: ht(lg),
    [Ye.PROMISE_RESOLVE]: ht(_d),
    [Ye.PROMISE_REJECT]: ht(Qa),
    close: ht(cg)
};
Ye.SUCCESS + "",
ht(bd),
Ye.ERROR + "",
ht(Xa),
Ye.INFO + "",
ht(cw),
Ye.WARNING + "",
ht(Xa),
Ye.PROMISE + "",
ht(lg),
Ye.PROMISE_RESOLVE + "",
ht(bd),
Ye.PROMISE_REJECT + "",
ht(Xa),
ht(cg);
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
  , mu = {
    "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
}
  , vw = it(de(de({}, Uo), mu), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
it(de(de({}, Uo), mu), {
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
it(de(de({}, Uo), mu), {
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
it(de({}, Uo), {
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
const HM = it(de({}, Uo), {
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
    NOTIFICATION: hn + "notification",
    ICON: hn + "icon",
    CONTENT: hn + "content",
    TITLE: hn + "content-title",
    MESSAGE: hn + "content-message",
    CLOSE: hn + "close",
    CLOSE_ICON: hn + "close-icon",
    TRANSITION: hn + "transition"
}
  , _w = {
    icons: ()=>yw,
    theme: ()=>vw,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , bw = ["data-notivue", "data-notivue-has-title"]
  , Ew = ["aria-live", "role"]
  , Tw = ["textContent"]
  , kw = ["textContent"]
  , Sw = ["aria-label"]
  , ww = ["textContent"]
  , jM = xe({
    __name: "Notifications",
    props: ra({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, _w),
    setup(e) {
        const t = e
          , n = _n(t.icons[t.item.type])
          , r = t.icons.close;
        return je(()=>t.item.type, i=>n.value = t.icons[i], {
            flush: "sync"
        }),
        (i,o)=>(pe(),
        Ge("div", {
            class: Mt(G(Hn).NOTIFICATION),
            "data-notivue": i.item.type,
            "data-notivue-has-title": !!i.item.title,
            style: Mn(i.theme)
        }, [n.value ? (pe(),
        Ge(mt, {
            key: 0
        }, [typeof n.value == "object" ? (pe(),
        bt(Do, {
            key: 0,
            name: G(Hn).TRANSITION,
            mode: "out-in"
        }, {
            default: un(()=>[typeof n.value == "object" ? (pe(),
            bt(_l(n.value), {
                key: 0,
                class: Mt(G(Hn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : Wt("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (pe(),
        Ge("div", {
            key: 1,
            class: Mt(G(Hn).ICON),
            "aria-hidden": "true"
        }, en(n.value), 3)) : Wt("", !0)], 64)) : Wt("", !0), me("div", {
            class: Mt(G(Hn).CONTENT),
            "aria-live": i.item.ariaLive,
            role: i.item.ariaRole,
            "aria-atomic": "true"
        }, [i.item.title ? (pe(),
        Ge("h3", {
            key: 0,
            class: Mt(G(Hn).TITLE),
            textContent: en(G(i.item.title))
        }, null, 10, Tw)) : Wt("", !0), me("p", {
            class: Mt(G(Hn).MESSAGE),
            textContent: en(G(i.item.message))
        }, null, 10, kw)], 10, Ew), !t.hideClose && G(r) && i.item.type !== "promise" ? (pe(),
        Ge("button", {
            key: 1,
            class: Mt(G(Hn).CLOSE),
            "aria-label": i.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: o[0] || (o[0] = (...s)=>i.item.clear && i.item.clear(...s))
        }, [typeof G(r) == "object" ? (pe(),
        bt(_l(G(r)), {
            key: 0,
            class: Mt(G(Hn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof G(r) == "string" ? (pe(),
        Ge("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: en(G(r))
        }, null, 8, ww)) : Wt("", !0)], 10, Sw)) : Wt("", !0)], 14, bw))
    }
});
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Vs = typeof window < "u"
  , Sr = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , Aw = (e,t,n)=>Lw({
    l: e,
    k: t,
    s: n
})
  , Lw = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , Tt = e=>typeof e == "number" && isFinite(e)
  , Cw = e=>fg(e) === "[object Date]"
  , Fs = e=>fg(e) === "[object RegExp]"
  , da = e=>He(e) && Object.keys(e).length === 0
  , dt = Object.assign;
let Ed;
const gu = ()=>Ed || (Ed = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Td(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Ow = Object.prototype.hasOwnProperty;
function xs(e, t) {
    return Ow.call(e, t)
}
const ut = Array.isArray
  , Ze = e=>typeof e == "function"
  , re = e=>typeof e == "string"
  , at = e=>typeof e == "boolean"
  , Rw = e=>typeof e == "symbol"
  , Fe = e=>e !== null && typeof e == "object"
  , Iw = e=>Fe(e) && Ze(e.then) && Ze(e.catch)
  , ug = Object.prototype.toString
  , fg = e=>ug.call(e)
  , He = e=>{
    if (!Fe(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Pw = e=>e == null ? "" : ut(e) || He(e) && e.toString === ug ? JSON.stringify(e, null, 2) : String(e);
function yu(e, t="") {
    return e.reduce((n,r,i)=>i === 0 ? n + r : n + t + r, "")
}
function vu(e) {
    let t = e;
    return ()=>++t
}
function Mw(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const as = e=>!Fe(e) || ut(e);
function Yr(e, t) {
    if (as(e) || as(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: i} = n.pop();
        Object.keys(r).forEach(o=>{
            as(r[o]) || as(i[o]) ? i[o] = r[o] : n.push({
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
function Dw(e, t, n) {
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
function ha(e, t, n={}) {
    const {domain: r, messages: i, args: o} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function Nw(e) {
    throw e
}
const jn = " "
  , Vw = "\r"
  , Pt = `
`
  , Fw = "\u2028"
  , xw = "\u2029";
function Uw(e) {
    const t = e;
    let n = 0
      , r = 1
      , i = 1
      , o = 0;
    const s = L=>t[L] === Vw && t[L + 1] === Pt
      , a = L=>t[L] === Pt
      , l = L=>t[L] === xw
      , u = L=>t[L] === Fw
      , c = L=>s(L) || a(L) || l(L) || u(L)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>i
      , _ = ()=>o
      , b = L=>s(L) || l(L) || u(L) ? Pt : t[L]
      , k = ()=>b(n)
      , g = ()=>b(n + o);
    function E() {
        return o = 0,
        c(n) && (r++,
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
    function w() {
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
        currentChar: k,
        currentPeek: g,
        next: E,
        peek: p,
        reset: y,
        resetPeek: T,
        skipToPeek: w
    }
}
const tr = void 0
  , Bw = "."
  , kd = "'"
  , Hw = "tokenizer";
function jw(e, t={}) {
    const n = t.location !== !1
      , r = Uw(e)
      , i = ()=>r.index()
      , o = ()=>Dw(r.line(), r.column(), r.index())
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
      , u = ()=>l
      , {onError: c} = t;
    function f(h, v, A, ...R) {
        const V = u();
        if (v.column += A,
        v.offset += A,
        c) {
            const q = n ? Xl(V.startLoc, v) : null
              , X = ha(h, q, {
                domain: Hw,
                args: R
            });
            c(X)
        }
    }
    function d(h, v, A) {
        h.endLoc = o(),
        h.currentType = v;
        const R = {
            type: v
        };
        return n && (R.loc = Xl(h.startLoc, h.endLoc)),
        A != null && (R.value = A),
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
        for (; h.currentPeek() === jn || h.currentPeek() === Pt; )
            v += h.currentPeek(),
            h.peek();
        return v
    }
    function k(h) {
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
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function y(h, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === "-" ? h.peek() : h.currentPeek()
          , V = E(R);
        return h.resetPeek(),
        V
    }
    function T(h, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === kd;
        return h.resetPeek(),
        R
    }
    function w(h, v) {
        const {currentType: A} = v;
        if (A !== 8)
            return !1;
        b(h);
        const R = h.currentPeek() === ".";
        return h.resetPeek(),
        R
    }
    function L(h, v) {
        const {currentType: A} = v;
        if (A !== 9)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function C(h, v) {
        const {currentType: A} = v;
        if (!(A === 8 || A === 12))
            return !1;
        b(h);
        const R = h.currentPeek() === ":";
        return h.resetPeek(),
        R
    }
    function O(h, v) {
        const {currentType: A} = v;
        if (A !== 10)
            return !1;
        const R = ()=>{
            const q = h.currentPeek();
            return q === "{" ? g(h.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === jn || !q ? !1 : q === Pt ? (h.peek(),
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
    function B(h) {
        const v = b(h)
          , A = h.currentPeek() === "%" && h.peek() === "{";
        return h.resetPeek(),
        {
            isModulo: A,
            hasSpace: v.length > 0
        }
    }
    function F(h, v=!0) {
        const A = (V=!1,q="",X=!1)=>{
            const z = h.currentPeek();
            return z === "{" ? q === "%" ? !1 : V : z === "@" || !z ? q === "%" ? !0 : V : z === "%" ? (h.peek(),
            A(V, "%", !0)) : z === "|" ? q === "%" || X ? !0 : !(q === jn || q === Pt) : z === jn ? (h.peek(),
            A(!0, jn, X)) : z === Pt ? (h.peek(),
            A(!0, Pt, X)) : !0
        }
          , R = A();
        return v && h.resetPeek(),
        R
    }
    function Z(h, v) {
        const A = h.currentChar();
        return A === tr ? tr : v(A) ? (h.next(),
        A) : null
    }
    function W(h) {
        return Z(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 || R === 95 || R === 36
        }
        )
    }
    function K(h) {
        return Z(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 48 && R <= 57
        }
        )
    }
    function N(h) {
        return Z(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102
        }
        )
    }
    function Y(h) {
        let v = ""
          , A = "";
        for (; v = K(h); )
            A += v;
        return A
    }
    function x(h) {
        k(h);
        const v = h.currentChar();
        return v !== "%" && f(Je.EXPECTED_TOKEN, o(), 0, v),
        h.next(),
        "%"
    }
    function ae(h) {
        let v = "";
        for (; ; ) {
            const A = h.currentChar();
            if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
                break;
            if (A === "%")
                if (F(h))
                    v += A,
                    h.next();
                else
                    break;
            else if (A === jn || A === Pt)
                if (F(h))
                    v += A,
                    h.next();
                else {
                    if (D(h))
                        break;
                    v += A,
                    h.next()
                }
            else
                v += A,
                h.next()
        }
        return v
    }
    function j(h) {
        k(h);
        let v = ""
          , A = "";
        for (; v = W(h); )
            A += v;
        return h.currentChar() === tr && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
        A
    }
    function ce(h) {
        k(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${Y(h)}`) : v += Y(h),
        h.currentChar() === tr && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
        v
    }
    function ve(h) {
        k(h),
        _(h, "'");
        let v = ""
          , A = "";
        const R = q=>q !== kd && q !== Pt;
        for (; v = Z(h, R); )
            v === "\\" ? A += qe(h) : A += v;
        const V = h.currentChar();
        return V === Pt || V === tr ? (f(Je.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        V === Pt && (h.next(),
        _(h, "'")),
        A) : (_(h, "'"),
        A)
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
    function Qe(h, v, A) {
        _(h, v);
        let R = "";
        for (let V = 0; V < A; V++) {
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
        k(h);
        let v = ""
          , A = "";
        const R = V=>V !== "{" && V !== "}" && V !== jn && V !== Pt;
        for (; v = Z(h, R); )
            A += v;
        return A
    }
    function et(h) {
        let v = ""
          , A = "";
        for (; v = W(h); )
            A += v;
        return A
    }
    function H(h) {
        const v = (A=!1,R)=>{
            const V = h.currentChar();
            return V === "{" || V === "%" || V === "@" || V === "|" || V === "(" || V === ")" || !V || V === jn ? R : V === Pt || V === Bw ? (R += V,
            h.next(),
            v(A, R)) : (R += V,
            h.next(),
            v(!0, R))
        }
        ;
        return v(!1, "")
    }
    function te(h) {
        k(h);
        const v = _(h, "|");
        return k(h),
        v
    }
    function Q(h, v) {
        let A = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(Je.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            h.next(),
            A = d(v, 2, "{"),
            k(h),
            v.braceNest++,
            A;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(Je.EMPTY_PLACEHOLDER, o(), 0),
            h.next(),
            A = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && k(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            A;
        case "@":
            return v.braceNest > 0 && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
            A = $(h, v) || m(v),
            v.braceNest = 0,
            A;
        default:
            let V = !0
              , q = !0
              , X = !0;
            if (D(h))
                return v.braceNest > 0 && f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
                A = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                A;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(Je.UNTERMINATED_CLOSING_BRACE, o(), 0),
                v.braceNest = 0,
                ye(h, v);
            if (V = p(h, v))
                return A = d(v, 5, j(h)),
                k(h),
                A;
            if (q = y(h, v))
                return A = d(v, 6, ce(h)),
                k(h),
                A;
            if (X = T(h, v))
                return A = d(v, 7, ve(h)),
                k(h),
                A;
            if (!V && !q && !X)
                return A = d(v, 13, ct(h)),
                f(Je.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, A.value),
                k(h),
                A;
            break
        }
        return A
    }
    function $(h, v) {
        const {currentType: A} = v;
        let R = null;
        const V = h.currentChar();
        switch ((A === 8 || A === 9 || A === 12 || A === 10) && (V === Pt || V === jn) && f(Je.INVALID_LINKED_FORMAT, o(), 0),
        V) {
        case "@":
            return h.next(),
            R = d(v, 8, "@"),
            v.inLinked = !0,
            R;
        case ".":
            return k(h),
            h.next(),
            d(v, 9, ".");
        case ":":
            return k(h),
            h.next(),
            d(v, 10, ":");
        default:
            return D(h) ? (R = d(v, 1, te(h)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : w(h, v) || C(h, v) ? (k(h),
            $(h, v)) : L(h, v) ? (k(h),
            d(v, 12, et(h))) : O(h, v) ? (k(h),
            V === "{" ? Q(h, v) || R : d(v, 11, H(h))) : (A === 8 && f(Je.INVALID_LINKED_FORMAT, o(), 0),
            v.braceNest = 0,
            v.inLinked = !1,
            ye(h, v))
        }
    }
    function ye(h, v) {
        let A = {
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
                return A = d(v, 1, te(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                A;
            const {isModulo: V, hasSpace: q} = B(h);
            if (V)
                return q ? d(v, 0, ae(h)) : d(v, 4, x(h));
            if (F(h))
                return d(v, 0, ae(h));
            break
        }
        return A
    }
    function Ue() {
        const {currentType: h, offset: v, startLoc: A, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = A,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = o(),
        r.currentChar() === tr ? d(l, 14) : ye(r, l)
    }
    return {
        nextToken: Ue,
        currentOffset: i,
        currentPosition: o,
        context: u
    }
}
const Kw = "parser"
  , Yw = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function qw(e, t, n) {
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
function Ww(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(g, E, p, y, ...T) {
        const w = g.currentPosition();
        if (w.offset += y,
        w.column += y,
        n) {
            const L = t ? Xl(p, w) : null
              , C = ha(E, L, {
                domain: Kw,
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
          , w = i(5, y, T);
        return w.index = parseInt(E, 10),
        g.nextToken(),
        o(w, g.currentOffset(), g.currentPosition()),
        w
    }
    function l(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , w = i(4, y, T);
        return w.key = E,
        g.nextToken(),
        o(w, g.currentOffset(), g.currentPosition()),
        w
    }
    function u(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , w = i(9, y, T);
        return w.value = E.replace(Yw, qw),
        g.nextToken(),
        o(w, g.currentOffset(), g.currentPosition()),
        w
    }
    function c(g) {
        const E = g.nextToken()
          , p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , w = i(8, y, T);
        return E.type !== 12 ? (r(g, Je.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        w.value = "",
        o(w, y, T),
        {
            nextConsumeToken: E,
            node: w
        }) : (E.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, An(E)),
        w.value = E.value || "",
        o(w, g.currentOffset(), g.currentPosition()),
        {
            node: w
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
            const T = c(g);
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
            p.key = u(g, y.value || "");
            break;
        default:
            r(g, Je.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
            const T = g.context()
              , w = i(7, T.offset, T.startLoc);
            return w.value = "",
            o(w, T.offset, T.startLoc),
            p.key = w,
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
        let w = null;
        do {
            const O = w || g.nextToken();
            switch (w = null,
            O.type) {
            case 0:
                O.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(O)),
                T.items.push(s(g, O.value || ""));
                break;
            case 6:
                O.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(O)),
                T.items.push(a(g, O.value || ""));
                break;
            case 5:
                O.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(O)),
                T.items.push(l(g, O.value || ""));
                break;
            case 7:
                O.value == null && r(g, Je.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, An(O)),
                T.items.push(u(g, O.value || ""));
                break;
            case 8:
                const D = d(g);
                T.items.push(D.node),
                w = D.nextConsumeToken || null;
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
        let w = y.items.length === 0;
        const L = i(1, E, p);
        L.cases = [],
        L.cases.push(y);
        do {
            const C = m(g);
            w || (w = C.items.length === 0),
            L.cases.push(C)
        } while (T.currentType !== 14);
        return w && r(g, Je.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
        o(L, g.currentOffset(), g.currentPosition()),
        L
    }
    function b(g) {
        const E = g.context()
          , {offset: p, startLoc: y} = E
          , T = m(g);
        return E.currentType === 14 ? T : _(g, p, y, T)
    }
    function k(g) {
        const E = jw(g, dt({}, e))
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
        parse: k
    }
}
function An(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function Gw(e, t={}) {
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
        _u(e[n], t)
}
function _u(e, t) {
    switch (e.type) {
    case 1:
        Sd(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Sd(e.items, t);
        break;
    case 6:
        _u(e.key, t),
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
function Jw(e, t={}) {
    const n = Gw(e);
    n.helper("normalize"),
    e.body && _u(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function zw(e) {
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
            e.static = yu(t);
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
        for (let c = 0; c < r.length; c++)
            ii(r[c]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const i = e
          , o = i.items;
        for (let c = 0; c < o.length; c++)
            ii(o[c]);
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
        const u = e;
        u.k = u.key,
        delete u.key;
        break
    }
    delete e.type
}
function Qw(e, t) {
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
    function u(k, g) {
        a.code += k
    }
    function c(k, g=!0) {
        const E = g ? i : "";
        u(o ? E + "  ".repeat(k) : E)
    }
    function f(k=!0) {
        const g = ++a.indentLevel;
        k && c(g)
    }
    function d(k=!0) {
        const g = --a.indentLevel;
        k && c(g)
    }
    function m() {
        c(a.indentLevel)
    }
    return {
        context: l,
        push: u,
        indent: f,
        deindent: d,
        newline: m,
        helper: k=>`_${k}`,
        needIndent: ()=>a.needIndent
    }
}
function Xw(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Ti(e, t.key),
    t.modifier ? (e.push(", "),
    Ti(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function Zw(e, t) {
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
function $w(e, t) {
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
function eA(e, t) {
    t.body ? Ti(e, t.body) : e.push("null")
}
function Ti(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        eA(e, t);
        break;
    case 1:
        $w(e, t);
        break;
    case 2:
        Zw(e, t);
        break;
    case 6:
        Xw(e, t);
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
const tA = (e,t={})=>{
    const n = re(t.mode) ? t.mode : "normal"
      , r = re(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = Qw(e, {
        mode: n,
        filename: r,
        sourceMap: i,
        breakLineCode: o,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${yu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    Ti(l, e),
    l.deindent(s),
    l.push("}"),
    delete e.helpers;
    const {code: u, map: c} = l.context();
    return {
        ast: e,
        code: u,
        map: c ? c.toJSON() : void 0
    }
}
;
function nA(e, t={}) {
    const n = dt({}, t)
      , r = !!n.jit
      , i = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , a = Ww(n).parse(e);
    return r ? (o && zw(a),
    i && ii(a),
    {
        ast: a,
        code: ""
    }) : (Jw(a, n),
    tA(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function rA() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (gu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const wr = [];
wr[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
wr[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
wr[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
wr[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
wr[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
wr[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
wr[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const iA = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function oA(e) {
    return iA.test(e)
}
function sA(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function aA(e) {
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
function lA(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : oA(t) ? sA(t) : "*" + t
}
function cA(e) {
    const t = [];
    let n = -1, r = 0, i = 0, o, s, a, l, u, c, f;
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
            s === void 0 || (s = lA(s),
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
            if (l = aA(o),
            f = wr[r],
            u = f[l] || f.l || 8,
            u === 8 || (r = u[0],
            u[1] !== void 0 && (c = d[u[1]],
            c && (a = o,
            c() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const Ad = new Map;
function uA(e, t) {
    return Fe(e) ? e[t] : null
}
function fA(e, t) {
    if (!Fe(e))
        return null;
    let n = Ad.get(t);
    if (n || (n = cA(t),
    n && Ad.set(t, n)),
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
const dA = e=>e
  , hA = e=>""
  , pA = "text"
  , mA = e=>e.length === 0 ? "" : yu(e)
  , gA = Pw;
function Ld(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function yA(e) {
    const t = Tt(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Tt(e.named.count) || Tt(e.named.n)) ? Tt(e.named.count) ? e.named.count : Tt(e.named.n) ? e.named.n : t : t
}
function vA(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function _A(e={}) {
    const t = e.locale
      , n = yA(e)
      , r = Fe(e.pluralRules) && re(t) && Ze(e.pluralRules[t]) ? e.pluralRules[t] : Ld
      , i = Fe(e.pluralRules) && re(t) && Ze(e.pluralRules[t]) ? Ld : void 0
      , o = g=>g[r(n, g.length, i)]
      , s = e.list || []
      , a = g=>s[g]
      , l = e.named || {};
    Tt(e.pluralIndex) && vA(n, l);
    const u = g=>l[g];
    function c(g) {
        const E = Ze(e.messages) ? e.messages(g) : Fe(e.messages) ? e.messages[g] : !1;
        return E || (e.parent ? e.parent.message(g) : hA)
    }
    const f = g=>e.modifiers ? e.modifiers[g] : dA
      , d = He(e.processor) && Ze(e.processor.normalize) ? e.processor.normalize : mA
      , m = He(e.processor) && Ze(e.processor.interpolate) ? e.processor.interpolate : gA
      , _ = He(e.processor) && re(e.processor.type) ? e.processor.type : pA
      , k = {
        list: a,
        named: u,
        plural: o,
        linked: (g,...E)=>{
            const [p,y] = E;
            let T = "text"
              , w = "";
            E.length === 1 ? Fe(p) ? (w = p.modifier || w,
            T = p.type || T) : re(p) && (w = p || w) : E.length === 2 && (re(p) && (w = p || w),
            re(y) && (T = y || T));
            const L = c(g)(k)
              , C = T === "vnode" && ut(L) && w ? L[0] : L;
            return w ? f(w)(C, T) : C
        }
        ,
        message: c,
        type: _,
        interpolate: m,
        normalize: d,
        values: dt({}, s, l)
    };
    return k
}
let _o = null;
function bA(e) {
    _o = e
}
function EA(e, t, n) {
    _o && _o.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const TA = kA("function:translate");
function kA(e) {
    return t=>_o && _o.emit(e, t)
}
const SA = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , dg = Je.__EXTEND_POINT__
  , Rr = vu(dg)
  , Pn = {
    INVALID_ARGUMENT: dg,
    INVALID_DATE_ARGUMENT: Rr(),
    INVALID_ISO_DATE_ARGUMENT: Rr(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Rr(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Rr(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Rr(),
    NOT_SUPPORT_LOCALE_TYPE: Rr(),
    __EXTEND_POINT__: Rr()
};
function Yn(e) {
    return ha(e, null, void 0)
}
function bu(e, t) {
    return t.locale != null ? Cd(t.locale) : Cd(e.locale)
}
let Za;
function Cd(e) {
    if (re(e))
        return e;
    if (Ze(e)) {
        if (e.resolvedOnce && Za != null)
            return Za;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Iw(t))
                throw Yn(Pn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Za = t
        } else
            throw Yn(Pn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Yn(Pn.NOT_SUPPORT_LOCALE_TYPE)
}
function wA(e, t, n) {
    return [...new Set([n, ...ut(t) ? t : Fe(t) ? Object.keys(t) : re(t) ? [t] : [n]])]
}
function hg(e, t, n) {
    const r = re(n) ? n : Us
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let o = i.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let s = [n];
        for (; ut(s); )
            s = Od(o, s, t);
        const a = ut(t) || !He(t) ? t : t.default ? t.default : null;
        s = re(a) ? [a] : a,
        ut(s) && Od(o, s, !1),
        i.__localeChainCache.set(r, o)
    }
    return o
}
function Od(e, t, n) {
    let r = !0;
    for (let i = 0; i < t.length && at(r); i++) {
        const o = t[i];
        re(o) && (r = AA(e, t[i], n))
    }
    return r
}
function AA(e, t, n) {
    let r;
    const i = t.split("-");
    do {
        const o = i.join("-");
        r = LA(e, o, n),
        i.splice(-1, 1)
    } while (i.length && r === !0);
    return r
}
function LA(e, t, n) {
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
const CA = "9.9.1"
  , pa = -1
  , Us = "en-US"
  , Rd = ""
  , Id = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function OA() {
    return {
        upper: (e,t)=>t === "text" && re(e) ? e.toUpperCase() : t === "vnode" && Fe(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && re(e) ? e.toLowerCase() : t === "vnode" && Fe(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && re(e) ? Id(e) : t === "vnode" && Fe(e) && "__v_isVNode"in e ? Id(e.children) : e
    }
}
let pg;
function RA(e) {
    pg = e
}
let mg;
function IA(e) {
    mg = e
}
let gg;
function PA(e) {
    gg = e
}
let yg = null;
const MA = e=>{
    yg = e
}
  , DA = ()=>yg;
let vg = null;
const Pd = e=>{
    vg = e
}
  , NA = ()=>vg;
let Md = 0;
function VA(e={}) {
    const t = Ze(e.onWarn) ? e.onWarn : Mw
      , n = re(e.version) ? e.version : CA
      , r = re(e.locale) || Ze(e.locale) ? e.locale : Us
      , i = Ze(r) ? Us : r
      , o = ut(e.fallbackLocale) || He(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , s = He(e.messages) ? e.messages : {
        [i]: {}
    }
      , a = He(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = He(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , u = dt({}, e.modifiers || {}, OA())
      , c = e.pluralRules || {}
      , f = Ze(e.missing) ? e.missing : null
      , d = at(e.missingWarn) || Fs(e.missingWarn) ? e.missingWarn : !0
      , m = at(e.fallbackWarn) || Fs(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = !!e.fallbackFormat
      , b = !!e.unresolving
      , k = Ze(e.postTranslation) ? e.postTranslation : null
      , g = He(e.processor) ? e.processor : null
      , E = at(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , y = Ze(e.messageCompiler) ? e.messageCompiler : pg
      , T = Ze(e.messageResolver) ? e.messageResolver : mg || uA
      , w = Ze(e.localeFallbacker) ? e.localeFallbacker : gg || wA
      , L = Fe(e.fallbackContext) ? e.fallbackContext : void 0
      , C = e
      , O = Fe(C.__datetimeFormatters) ? C.__datetimeFormatters : new Map
      , D = Fe(C.__numberFormatters) ? C.__numberFormatters : new Map
      , B = Fe(C.__meta) ? C.__meta : {};
    Md++;
    const F = {
        version: n,
        cid: Md,
        locale: r,
        fallbackLocale: o,
        messages: s,
        modifiers: u,
        pluralRules: c,
        missing: f,
        missingWarn: d,
        fallbackWarn: m,
        fallbackFormat: _,
        unresolving: b,
        postTranslation: k,
        processor: g,
        warnHtmlMessage: E,
        escapeParameter: p,
        messageCompiler: y,
        messageResolver: T,
        localeFallbacker: w,
        fallbackContext: L,
        onWarn: t,
        __meta: B
    };
    return F.datetimeFormats = a,
    F.numberFormats = l,
    F.__datetimeFormatters = O,
    F.__numberFormatters = D,
    __INTLIFY_PROD_DEVTOOLS__ && EA(F, n, B),
    F
}
function Eu(e, t, n, r, i) {
    const {missing: o, onWarn: s} = e;
    if (o !== null) {
        const a = o(e, n, t, i);
        return re(a) ? a : t
    } else
        return t
}
function xi(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function $a(e) {
    return n=>FA(n, e)
}
function FA(e, t) {
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
        const u = t;
        return u.v || u.value;
    case 8:
        const c = t;
        return c.v || c.value;
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const xA = e=>e;
let ls = Object.create(null);
const ki = e=>Fe(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function UA(e, t={}) {
    let n = !1;
    const r = t.onError || Nw;
    return t.onError = i=>{
        n = !0,
        r(i)
    }
    ,
    {
        ...nA(e, t),
        detectError: n
    }
}
function BA(e, t) {
    if (re(e)) {
        at(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || xA)(e)
          , i = ls[r];
        if (i)
            return i;
        const {ast: o, detectError: s} = UA(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = $a(o);
        return s ? a : ls[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = ls[n];
            return r || (ls[n] = $a(e))
        } else
            return $a(e)
    }
}
const Nd = ()=>""
  , nn = e=>Ze(e);
function Vd(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: o, fallbackLocale: s, messages: a} = e
      , [l,u] = $l(...t)
      , c = at(u.missingWarn) ? u.missingWarn : e.missingWarn
      , f = at(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
      , d = at(u.escapeParameter) ? u.escapeParameter : e.escapeParameter
      , m = !!u.resolvedMessage
      , _ = re(u.default) || at(u.default) ? at(u.default) ? o ? l : ()=>l : u.default : n ? o ? l : ()=>l : ""
      , b = n || _ !== ""
      , k = bu(e, u);
    d && HA(u);
    let[g,E,p] = m ? [l, k, a[k] || {}] : _g(e, l, k, s, f, c)
      , y = g
      , T = l;
    if (!m && !(re(y) || ki(y) || nn(y)) && b && (y = _,
    T = y),
    !m && (!(re(y) || ki(y) || nn(y)) || !re(E)))
        return i ? pa : l;
    let w = !1;
    const L = ()=>{
        w = !0
    }
      , C = nn(y) ? y : bg(e, l, E, y, T, L);
    if (w)
        return y;
    const O = YA(e, E, p, u)
      , D = _A(O)
      , B = jA(e, C, D)
      , F = r ? r(B, l) : B;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: re(l) ? l : nn(y) ? y.key : "",
            locale: E || (nn(y) ? y.locale : ""),
            format: re(y) ? y : nn(y) ? y.source : "",
            message: F
        };
        Z.meta = dt({}, e.__meta, DA() || {}),
        TA(Z)
    }
    return F
}
function HA(e) {
    ut(e.list) ? e.list = e.list.map(t=>re(t) ? Td(t) : t) : Fe(e.named) && Object.keys(e.named).forEach(t=>{
        re(e.named[t]) && (e.named[t] = Td(e.named[t]))
    }
    )
}
function _g(e, t, n, r, i, o) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: u} = e
      , c = u(e, r, n);
    let f = {}, d, m = null;
    const _ = "translate";
    for (let b = 0; b < c.length && (d = c[b],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(re(m) || ki(m) || nn(m))); b++) {
        const k = Eu(e, t, d, o, _);
        k !== t && (m = k)
    }
    return [m, d, f]
}
function bg(e, t, n, r, i, o) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (nn(r)) {
        const u = r;
        return u.locale = u.locale || n,
        u.key = u.key || t,
        u
    }
    if (s == null) {
        const u = ()=>r;
        return u.locale = n,
        u.key = t,
        u
    }
    const l = s(r, KA(e, n, i, r, a, o));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function jA(e, t, n) {
    return t(n)
}
function $l(...e) {
    const [t,n,r] = e
      , i = {};
    if (!re(t) && !Tt(t) && !nn(t) && !ki(t))
        throw Yn(Pn.INVALID_ARGUMENT);
    const o = Tt(t) ? String(t) : (nn(t),
    t);
    return Tt(n) ? i.plural = n : re(n) ? i.default = n : He(n) && !da(n) ? i.named = n : ut(n) && (i.list = n),
    Tt(r) ? i.plural = r : re(r) ? i.default = r : He(r) && dt(i, r),
    [o, i]
}
function KA(e, t, n, r, i, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: i,
        onError: s=>{
            throw o && o(s),
            s
        }
        ,
        onCacheKey: s=>Aw(t, n, s)
    }
}
function YA(e, t, n, r) {
    const {modifiers: i, pluralRules: o, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c} = e
      , d = {
        locale: t,
        modifiers: i,
        pluralRules: o,
        messages: m=>{
            let _ = s(n, m);
            if (_ == null && c) {
                const [,,b] = _g(c, m, t, a, l, u);
                _ = s(b, m)
            }
            if (re(_) || ki(_)) {
                let b = !1;
                const g = bg(e, m, t, _, m, ()=>{
                    b = !0
                }
                );
                return b ? Nd : g
            } else
                return nn(_) ? _ : Nd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    Tt(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Fd(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,u,c,f] = ec(...t)
      , d = at(c.missingWarn) ? c.missingWarn : e.missingWarn;
    at(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , _ = bu(e, c)
      , b = s(e, i, _);
    if (!re(l) || l === "")
        return new Intl.DateTimeFormat(_,f).format(u);
    let k = {}, g, E = null;
    const p = "datetime format";
    for (let w = 0; w < b.length && (g = b[w],
    k = n[g] || {},
    E = k[l],
    !He(E)); w++)
        Eu(e, l, g, d, p);
    if (!He(E) || !re(g))
        return r ? pa : l;
    let y = `${g}__${l}`;
    da(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.DateTimeFormat(g,dt({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(u) : T.format(u)
}
const Eg = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function ec(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {}, a;
    if (re(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Yn(Pn.INVALID_ISO_DATE_ARGUMENT);
        const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(u);
        try {
            a.toISOString()
        } catch {
            throw Yn(Pn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Cw(t)) {
        if (isNaN(t.getTime()))
            throw Yn(Pn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (Tt(t))
        a = t;
    else
        throw Yn(Pn.INVALID_ARGUMENT);
    return re(n) ? o.key = n : He(n) && Object.keys(n).forEach(l=>{
        Eg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    re(r) ? o.locale = r : He(r) && (s = r),
    He(i) && (s = i),
    [o.key || "", a, o, s]
}
function xd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function Ud(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,u,c,f] = tc(...t)
      , d = at(c.missingWarn) ? c.missingWarn : e.missingWarn;
    at(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , _ = bu(e, c)
      , b = s(e, i, _);
    if (!re(l) || l === "")
        return new Intl.NumberFormat(_,f).format(u);
    let k = {}, g, E = null;
    const p = "number format";
    for (let w = 0; w < b.length && (g = b[w],
    k = n[g] || {},
    E = k[l],
    !He(E)); w++)
        Eu(e, l, g, d, p);
    if (!He(E) || !re(g))
        return r ? pa : l;
    let y = `${g}__${l}`;
    da(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.NumberFormat(g,dt({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(u) : T.format(u)
}
const Tg = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function tc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {};
    if (!Tt(t))
        throw Yn(Pn.INVALID_ARGUMENT);
    const a = t;
    return re(n) ? o.key = n : He(n) && Object.keys(n).forEach(l=>{
        Tg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    re(r) ? o.locale = r : He(r) && (s = r),
    He(i) && (s = i),
    [o.key || "", a, o, s]
}
function Bd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
    }
}
rA();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const qA = "9.9.1";
function WA() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (gu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const kg = SA.__EXTEND_POINT__
  , nr = vu(kg);
nr(),
nr(),
nr(),
nr(),
nr(),
nr(),
nr(),
nr();
const Sg = Pn.__EXTEND_POINT__
  , xt = vu(Sg)
  , fn = {
    UNEXPECTED_RETURN_TYPE: Sg,
    INVALID_ARGUMENT: xt(),
    MUST_BE_CALL_SETUP_TOP: xt(),
    NOT_INSTALLED: xt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: xt(),
    REQUIRED_VALUE: xt(),
    INVALID_VALUE: xt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: xt(),
    NOT_INSTALLED_WITH_PROVIDE: xt(),
    UNEXPECTED_ERROR: xt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: xt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: xt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: xt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: xt(),
    __EXTEND_POINT__: xt()
};
function En(e, ...t) {
    return ha(e, null, void 0)
}
const nc = Sr("__translateVNode")
  , rc = Sr("__datetimeParts")
  , ic = Sr("__numberParts")
  , GA = Sr("__setPluralRules")
  , JA = Sr("__injectWithOption")
  , oc = Sr("__dispose");
function bo(e) {
    if (!Fe(e))
        return e;
    for (const t in e)
        if (xs(e, t))
            if (!t.includes("."))
                Fe(e[t]) && bo(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let i = e
                  , o = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in i || (i[n[s]] = {}),
                    !Fe(i[n[s]])) {
                        o = !0;
                        break
                    }
                    i = i[n[s]]
                }
                o || (i[n[r]] = e[t],
                delete e[t]),
                Fe(i[n[r]]) && bo(i[n[r]])
            }
    return e
}
function wg(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = He(n) ? n : ut(r) ? {} : {
        [e]: {}
    };
    if (ut(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: u} = a;
            l ? (s[l] = s[l] || {},
            Yr(u, s[l])) : Yr(u, s)
        } else
            re(a) && Yr(JSON.parse(a), s)
    }
    ),
    i == null && o)
        for (const a in s)
            xs(s, a) && bo(s[a]);
    return s
}
function Ag(e) {
    return e.type
}
function zA(e, t, n) {
    let r = Fe(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = wg(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const i = Object.keys(r);
    i.length && i.forEach(o=>{
        e.mergeLocaleMessage(o, r[o])
    }
    );
    {
        if (Fe(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(s=>{
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Fe(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(s=>{
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function Hd(e) {
    return $e(Gr, null, e, 0)
}
const jd = "__INTLIFY_META__"
  , Kd = ()=>[]
  , QA = ()=>!1;
let Yd = 0;
function qd(e) {
    return (t,n,r,i)=>e(n, r, kn() || void 0, i)
}
const XA = ()=>{
    const e = kn();
    let t = null;
    return e && (t = Ag(e)[jd]) ? {
        [jd]: t
    } : null
}
;
function Lg(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Vs ? le : _n;
    let a = at(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : re(e.locale) ? e.locale : Us)
      , u = s(n && a ? n.fallbackLocale.value : re(e.fallbackLocale) || ut(e.fallbackLocale) || He(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , c = s(wg(l.value, e))
      , f = s(He(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(He(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : at(e.missingWarn) || Fs(e.missingWarn) ? e.missingWarn : !0
      , _ = n ? n.fallbackWarn : at(e.fallbackWarn) || Fs(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = n ? n.fallbackRoot : at(e.fallbackRoot) ? e.fallbackRoot : !0
      , k = !!e.fallbackFormat
      , g = Ze(e.missing) ? e.missing : null
      , E = Ze(e.missing) ? qd(e.missing) : null
      , p = Ze(e.postTranslation) ? e.postTranslation : null
      , y = n ? n.warnHtmlMessage : at(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , T = !!e.escapeParameter;
    const w = n ? n.modifiers : He(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || n && n.pluralRules, C;
    C = (()=>{
        i && Pd(null);
        const I = {
            version: qA,
            locale: l.value,
            fallbackLocale: u.value,
            messages: c.value,
            modifiers: w,
            pluralRules: L,
            missing: E === null ? void 0 : E,
            missingWarn: m,
            fallbackWarn: _,
            fallbackFormat: k,
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
        I.__datetimeFormatters = He(C) ? C.__datetimeFormatters : void 0,
        I.__numberFormatters = He(C) ? C.__numberFormatters : void 0;
        const U = VA(I);
        return i && Pd(U),
        U
    }
    )(),
    xi(C, l.value, u.value);
    function D() {
        return [l.value, u.value, c.value, f.value, d.value]
    }
    const B = ue({
        get: ()=>l.value,
        set: I=>{
            l.value = I,
            C.locale = l.value
        }
    })
      , F = ue({
        get: ()=>u.value,
        set: I=>{
            u.value = I,
            C.fallbackLocale = u.value,
            xi(C, l.value, I)
        }
    })
      , Z = ue(()=>c.value)
      , W = ue(()=>f.value)
      , K = ue(()=>d.value);
    function N() {
        return Ze(p) ? p : null
    }
    function Y(I) {
        p = I,
        C.postTranslation = I
    }
    function x() {
        return g
    }
    function ae(I) {
        I !== null && (E = qd(I)),
        g = I,
        C.missing = E
    }
    const j = (I,U,se,he,We,st)=>{
        D();
        let _t;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (C.fallbackContext = n ? NA() : void 0),
            _t = I(C)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (C.fallbackContext = void 0)
        }
        if (se !== "translate exists" && Tt(_t) && _t === pa || se === "translate exists" && !_t) {
            const [zn,La] = U();
            return n && b ? he(n) : We(zn)
        } else {
            if (st(_t))
                return _t;
            throw En(fn.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ce(...I) {
        return j(U=>Reflect.apply(Vd, null, [U, ...I]), ()=>$l(...I), "translate", U=>Reflect.apply(U.t, U, [...I]), U=>U, U=>re(U))
    }
    function ve(...I) {
        const [U,se,he] = I;
        if (he && !Fe(he))
            throw En(fn.INVALID_ARGUMENT);
        return ce(U, se, dt({
            resolvedMessage: !0
        }, he || {}))
    }
    function qe(...I) {
        return j(U=>Reflect.apply(Fd, null, [U, ...I]), ()=>ec(...I), "datetime format", U=>Reflect.apply(U.d, U, [...I]), ()=>Rd, U=>re(U))
    }
    function Qe(...I) {
        return j(U=>Reflect.apply(Ud, null, [U, ...I]), ()=>tc(...I), "number format", U=>Reflect.apply(U.n, U, [...I]), ()=>Rd, U=>re(U))
    }
    function ct(I) {
        return I.map(U=>re(U) || Tt(U) || at(U) ? Hd(String(U)) : U)
    }
    const H = {
        normalize: ct,
        interpolate: I=>I,
        type: "vnode"
    };
    function te(...I) {
        return j(U=>{
            let se;
            const he = U;
            try {
                he.processor = H,
                se = Reflect.apply(Vd, null, [he, ...I])
            } finally {
                he.processor = null
            }
            return se
        }
        , ()=>$l(...I), "translate", U=>U[nc](...I), U=>[Hd(U)], U=>ut(U))
    }
    function Q(...I) {
        return j(U=>Reflect.apply(Ud, null, [U, ...I]), ()=>tc(...I), "number format", U=>U[ic](...I), Kd, U=>re(U) || ut(U))
    }
    function $(...I) {
        return j(U=>Reflect.apply(Fd, null, [U, ...I]), ()=>ec(...I), "datetime format", U=>U[rc](...I), Kd, U=>re(U) || ut(U))
    }
    function ye(I) {
        L = I,
        C.pluralRules = L
    }
    function Ue(I, U) {
        return j(()=>{
            if (!I)
                return !1;
            const se = re(U) ? U : l.value
              , he = A(se)
              , We = C.messageResolver(he, I);
            return ki(We) || nn(We) || re(We)
        }
        , ()=>[I], "translate exists", se=>Reflect.apply(se.te, se, [I, U]), QA, se=>at(se))
    }
    function h(I) {
        let U = null;
        const se = hg(C, u.value, l.value);
        for (let he = 0; he < se.length; he++) {
            const We = c.value[se[he]] || {}
              , st = C.messageResolver(We, I);
            if (st != null) {
                U = st;
                break
            }
        }
        return U
    }
    function v(I) {
        const U = h(I);
        return U ?? (n ? n.tm(I) || {} : {})
    }
    function A(I) {
        return c.value[I] || {}
    }
    function R(I, U) {
        if (o) {
            const se = {
                [I]: U
            };
            for (const he in se)
                xs(se, he) && bo(se[he]);
            U = se[I]
        }
        c.value[I] = U,
        C.messages = c.value
    }
    function V(I, U) {
        c.value[I] = c.value[I] || {};
        const se = {
            [I]: U
        };
        if (o)
            for (const he in se)
                xs(se, he) && bo(se[he]);
        U = se[I],
        Yr(U, c.value[I]),
        C.messages = c.value
    }
    function q(I) {
        return f.value[I] || {}
    }
    function X(I, U) {
        f.value[I] = U,
        C.datetimeFormats = f.value,
        xd(C, I, U)
    }
    function z(I, U) {
        f.value[I] = dt(f.value[I] || {}, U),
        C.datetimeFormats = f.value,
        xd(C, I, U)
    }
    function ee(I) {
        return d.value[I] || {}
    }
    function J(I, U) {
        d.value[I] = U,
        C.numberFormats = d.value,
        Bd(C, I, U)
    }
    function oe(I, U) {
        d.value[I] = dt(d.value[I] || {}, U),
        C.numberFormats = d.value,
        Bd(C, I, U)
    }
    Yd++,
    n && Vs && (je(n.locale, I=>{
        a && (l.value = I,
        C.locale = I,
        xi(C, l.value, u.value))
    }
    ),
    je(n.fallbackLocale, I=>{
        a && (u.value = I,
        C.fallbackLocale = I,
        xi(C, l.value, u.value))
    }
    ));
    const ie = {
        id: Yd,
        locale: B,
        fallbackLocale: F,
        get inheritLocale() {
            return a
        },
        set inheritLocale(I) {
            a = I,
            I && n && (l.value = n.locale.value,
            u.value = n.fallbackLocale.value,
            xi(C, l.value, u.value))
        },
        get availableLocales() {
            return Object.keys(c.value).sort()
        },
        messages: Z,
        get modifiers() {
            return w
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
            return k
        },
        set fallbackFormat(I) {
            k = I,
            C.fallbackFormat = k
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
        getLocaleMessage: A,
        setLocaleMessage: R,
        mergeLocaleMessage: V,
        getPostTranslationHandler: N,
        setPostTranslationHandler: Y,
        getMissingHandler: x,
        setMissingHandler: ae,
        [GA]: ye
    };
    return ie.datetimeFormats = W,
    ie.numberFormats = K,
    ie.rt = ve,
    ie.te = Ue,
    ie.tm = v,
    ie.d = qe,
    ie.n = Qe,
    ie.getDateTimeFormat = q,
    ie.setDateTimeFormat = X,
    ie.mergeDateTimeFormat = z,
    ie.getNumberFormat = ee,
    ie.setNumberFormat = J,
    ie.mergeNumberFormat = oe,
    ie[JA] = r,
    ie[nc] = te,
    ie[rc] = $,
    ie[ic] = Q,
    ie
}
const Tu = {
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
function ZA({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,i)=>[...r, ...i.type === mt ? i.children : [i]], []) : t.reduce((n,r)=>{
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , {})
}
function Cg(e) {
    return mt
}
const $A = xe({
    name: "i18n-t",
    props: dt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>Tt(e) || !isNaN(e)
        }
    }, Tu),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || ma({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = re(e.plural) ? +e.plural : e.plural);
            const a = ZA(t, o)
              , l = i[nc](e.keypath, a, s)
              , u = dt({}, r)
              , c = re(e.tag) || Fe(e.tag) ? e.tag : Cg();
            return ft(c, u, l)
        }
    }
})
  , Wd = $A;
function eL(e) {
    return ut(e) && !re(e[0])
}
function Og(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        re(e.format) ? s.key = e.format : Fe(e.format) && (re(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? dt({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let u = [s.key];
        ut(l) ? u = l.map((d,m)=>{
            const _ = i[d.type]
              , b = _ ? _({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return eL(b) && (b[0].key = `${d.type}-${m}`),
            b
        }
        ) : re(l) && (u = [l]);
        const c = dt({}, o)
          , f = re(e.tag) || Fe(e.tag) ? e.tag : Cg();
        return ft(f, c, u)
    }
}
const tL = xe({
    name: "i18n-n",
    props: dt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Tu),
    setup(e, t) {
        const n = e.i18n || ma({
            useScope: "parent",
            __useComponent: !0
        });
        return Og(e, t, Tg, (...r)=>n[ic](...r))
    }
})
  , Gd = tL
  , nL = xe({
    name: "i18n-d",
    props: dt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Tu),
    setup(e, t) {
        const n = e.i18n || ma({
            useScope: "parent",
            __useComponent: !0
        });
        return Og(e, t, Eg, (...r)=>n[rc](...r))
    }
})
  , Jd = nL;
function rL(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function iL(e) {
    const t = s=>{
        const {instance: a, modifiers: l, value: u} = s;
        if (!a || !a.$)
            throw En(fn.UNEXPECTED_ERROR);
        const c = rL(e, a.$)
          , f = zd(u);
        return [Reflect.apply(c.t, c, [...Qd(f)]), c]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,u] = t(a);
            Vs && e.global === u && (s.__i18nWatcher = je(u.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = u,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Vs && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , u = zd(a);
                s.textContent = Reflect.apply(l.t, l, [...Qd(u)])
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
    if (re(e))
        return {
            path: e
        };
    if (He(e)) {
        if (!("path"in e))
            throw En(fn.REQUIRED_VALUE, "path");
        return e
    } else
        throw En(fn.INVALID_VALUE)
}
function Qd(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , a = r || {};
    return re(n) && (s.locale = n),
    Tt(i) && (s.plural = i),
    Tt(o) && (s.plural = o),
    [t, a, s]
}
function oL(e, t, ...n) {
    const r = He(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (at(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : Wd.name, "I18nT"].forEach(s=>e.component(s, Wd)),
    [Gd.name, "I18nN"].forEach(s=>e.component(s, Gd)),
    [Jd.name, "I18nD"].forEach(s=>e.component(s, Jd))),
    e.directive("t", iL(t))
}
const sL = Sr("global-vue-i18n");
function aL(e={}, t) {
    const n = at(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , i = new Map
      , [o,s] = lL(e)
      , a = Sr("");
    function l(f) {
        return i.get(f) || null
    }
    function u(f, d) {
        i.set(f, d)
    }
    function c(f) {
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
                    const k = m[0];
                    f.__composerExtend = k.__composerExtend,
                    f.__vueI18nExtend = k.__vueI18nExtend
                }
                let _ = null;
                n && (_ = gL(d, f.global)),
                oL(d, f, ...m);
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
            __setInstance: u,
            __deleteInstance: c
        };
        return f
    }
}
function ma(e={}) {
    const t = kn();
    if (t == null)
        throw En(fn.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw En(fn.NOT_INSTALLED);
    const n = cL(t)
      , r = fL(n)
      , i = Ag(t)
      , o = uL(e, i);
    if (o === "global")
        return zA(r, e, i),
        r;
    if (o === "parent") {
        let l = dL(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = dt({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        r && (l.__root = r),
        a = Lg(l),
        s.__composerExtend && (a[oc] = s.__composerExtend(a)),
        pL(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function lL(e, t, n) {
    const r = Io();
    {
        const i = r.run(()=>Lg(e));
        if (i == null)
            throw En(fn.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function cL(e) {
    {
        const t = kt(e.isCE ? sL : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw En(e.isCE ? fn.NOT_INSTALLED_WITH_PROVIDE : fn.UNEXPECTED_ERROR);
        return t
    }
}
function uL(e, t) {
    return da(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function fL(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function dL(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = hL(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(o)),
        r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function hL(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function pL(e, t, n) {
    Vt(()=>{}
    , t),
    Ri(()=>{
        const r = n;
        e.__deleteInstance(t);
        const i = r[oc];
        i && (i(),
        delete r[oc])
    }
    , t)
}
const mL = ["locale", "fallbackLocale", "availableLocales"]
  , Xd = ["t", "rt", "d", "n", "tm", "te"];
function gL(e, t) {
    const n = Object.create(null);
    return mL.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw En(fn.UNEXPECTED_ERROR);
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
    Xd.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o || !o.value)
            throw En(fn.UNEXPECTED_ERROR);
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
WA();
RA(BA);
IA(fA);
PA(hg);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = gu();
    e.__INTLIFY__ = !0,
    bA(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const At = window.setInterval
  , yL = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Rg;
const Bo = e=>Rg = e
  , Ig = Symbol();
function sc(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Qi;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Qi || (Qi = {}));
function vL() {
    const e = Io(!0)
      , t = e.run(()=>le({}));
    let n = []
      , r = [];
    const i = ht({
        install(o) {
            Bo(i),
            i._a = o,
            o.provide(Ig, i),
            o.config.globalProperties.$pinia = i,
            r.forEach(s=>n.push(s)),
            r = []
        },
        use(o) {
            return !this._a && !yL ? r.push(o) : n.push(o),
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
const Pg = ()=>{}
;
function Zd(e, t, n, r=Pg) {
    e.push(t);
    const i = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && Po() && Xs(i),
    i
}
function ei(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const _L = e=>e();
function ac(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        sc(i) && sc(r) && e.hasOwnProperty(n) && !lt(r) && !gr(r) ? e[n] = ac(i, r) : e[n] = r
    }
    return e
}
const bL = Symbol();
function EL(e) {
    return !sc(e) || !e.hasOwnProperty(bL)
}
const {assign: rr} = Object;
function TL(e) {
    return !!(lt(e) && e.effect)
}
function kL(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , a = n.state.value[e];
    let l;
    function u() {
        a || (n.state.value[e] = i ? i() : {});
        const c = Hc(n.state.value[e]);
        return rr(c, o, Object.keys(s || {}).reduce((f,d)=>(f[d] = ht(ue(()=>{
            Bo(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = Mg(e, u, t, n, r, !0),
    l
}
function Mg(e, t, n={}, r, i, o) {
    let s;
    const a = rr({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let u, c, f = [], d = [], m;
    const _ = r.state.value[e];
    !o && !_ && (r.state.value[e] = {}),
    le({});
    let b;
    function k(C) {
        let O;
        u = c = !1,
        typeof C == "function" ? (C(r.state.value[e]),
        O = {
            type: Qi.patchFunction,
            storeId: e,
            events: m
        }) : (ac(r.state.value[e], C),
        O = {
            type: Qi.patchObject,
            payload: C,
            storeId: e,
            events: m
        });
        const D = b = Symbol();
        Jt().then(()=>{
            b === D && (u = !0)
        }
        ),
        c = !0,
        ei(f, O, r.state.value[e])
    }
    const g = o ? function() {
        const {state: O} = n
          , D = O ? O() : {};
        this.$patch(B=>{
            rr(B, D)
        }
        )
    }
    : Pg;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(C, O) {
        return function() {
            Bo(r);
            const D = Array.from(arguments)
              , B = []
              , F = [];
            function Z(N) {
                B.push(N)
            }
            function W(N) {
                F.push(N)
            }
            ei(d, {
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
                throw ei(F, N),
                N
            }
            return K instanceof Promise ? K.then(N=>(ei(B, N),
            N)).catch(N=>(ei(F, N),
            Promise.reject(N))) : (ei(B, K),
            K)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: Zd.bind(null, d),
        $patch: k,
        $reset: g,
        $subscribe(C, O={}) {
            const D = Zd(f, C, O.detached, ()=>B())
              , B = s.run(()=>je(()=>r.state.value[e], F=>{
                (O.flush === "sync" ? c : u) && C({
                    storeId: e,
                    type: Qi.direct,
                    events: m
                }, F)
            }
            , rr({}, l, O)));
            return D
        },
        $dispose: E
    }
      , T = St(y);
    r._s.set(e, T);
    const L = (r._a && r._a.runWithContext || _L)(()=>r._e.run(()=>(s = Io()).run(t)));
    for (const C in L) {
        const O = L[C];
        if (lt(O) && !TL(O) || gr(O))
            o || (_ && EL(O) && (lt(O) ? O.value = _[C] : ac(O, _[C])),
            r.state.value[e][C] = O);
        else if (typeof O == "function") {
            const D = p(C, O);
            L[C] = D,
            a.actions[C] = O
        }
    }
    return rr(T, L),
    rr(Ve(T), L),
    Object.defineProperty(T, "$state", {
        get: ()=>r.state.value[e],
        set: C=>{
            k(O=>{
                rr(O, C)
            }
            )
        }
    }),
    r._p.forEach(C=>{
        rr(T, s.run(()=>C({
            store: T,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    _ && o && n.hydrate && n.hydrate(T.$state, _),
    u = !0,
    c = !0,
    T
}
function Sn(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(a, l) {
        const u = Zc();
        return a = a || (u ? kt(Ig, null) : null),
        a && Bo(a),
        a = Rg,
        a._s.has(r) || (o ? Mg(r, t, i, a) : kL(r, i, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
const KM = "data:image/png;base64,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"
  , YM = "data:image/webp;base64,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"
  , SL = "data:image/png;base64,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"
  , qM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , WM = "data:image/png;base64,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"
  , GM = "data:image/png;base64,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"
  , JM = "data:image/png;base64,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"
  , wL = Sn("boost", {
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
                return ne().$i18n.t("boost.description_tap");
            case "BoostMaxTaps":
                return ne().$i18n.t("boost.description_energy");
            default:
                return ne().$i18n.t("boost.boost")
            }
        },
        getBoostImage(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return "/images/boost-multitap.png?v=1";
            case "BoostMaxTaps":
                return "/images/boost-energy.png";
            default:
                return SL
            }
        },
        getBoostName(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return ne().$i18n.t("boost.boost_multitap");
            case "BoostMaxTaps":
                return ne().$i18n.t("boost.boost_energy_limit");
            default:
                return ne().$i18n.t("boost.boost")
            }
        },
        getBoostTarget(e) {
            switch (e.id) {
            case "BoostEarnPerTap":
                return ne().$i18n.t("boost.target_tap", {
                    number: e.earnPerTapDelta,
                    level: e.level + 1
                });
            case "BoostMaxTaps":
                return ne().$i18n.t("boost.target_energy", {
                    number: e.maxTapsDelta,
                    level: e.level + 1
                });
            default:
                return ne().$i18n.t("boost.boost")
            }
        },
        async postBoostsForBuy() {
            return await ze.post("/clicker/boosts-for-buy", {}).then(e=>{
                e != null && e.boostsForBuy && this.setBoostsForBuy(e.boostsForBuy);
                const {$event: t} = ne();
                return t("boosts-update:success"),
                e
            }
            ).catch(e=>{
                gn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_boosts")
                })
            }
            )
        },
        async postBuyBoost(e) {
            return await ze.post("/clicker/buy-boost", {
                body: {
                    boostId: e,
                    timestamp: Ne().getNowTimestamp()
                }
            }).then(t=>(Gt().useHapticFeedback("heavy"),
            Ot().setUserResponseData(t),
            t != null && t.upgradesForBuy && Eo().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            Ne().trackEvent(Ne().camelToSnake(e)),
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
});
var tt = (e=>(e.SYNC_TAPS = "hk_sync_taps",
e.SYNC_TIMESTAMP_TAPS = "hk_sync_timestamp",
e.SYNC_AVAILABLE_TAPS = "hk_sync_available_taps",
e.EARN_TASKS = "earn_task",
e.AIRDROP_TASKS = "airdrop_task",
e.SETTINGS = "hk_settings",
e.AUTH_TOKEN = "authToken",
e))(tt || {})
  , $t = (e=>(e[e.BALANCE_ANIMATION_SPEED = 50] = "BALANCE_ANIMATION_SPEED",
e[e.CALC_INTERVAL = 1e3] = "CALC_INTERVAL",
e[e.SYNC_INTERVAL = 36e5] = "SYNC_INTERVAL",
e[e.TAP_INTERVAL = 3e3] = "TAP_INTERVAL",
e[e.REFERRAL_REFRESH_TIME = 60] = "REFERRAL_REFRESH_TIME",
e.GAME_NAME = "Hamster Kombat",
e.DEFAULT_EXCHANGE = "hamster",
e))($t || {})
  , AL = (e=>(e.REPEATEDLY = "Repeatedly",
e.ONCE = "Once",
e))(AL || {})
  , lc = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(lc || {})
  , LL = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(LL || {})
  , CL = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Web3 = "Web3",
e.Legal = "Legal",
e))(CL || {})
  , OL = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
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
e.sleeping_hamster = "sleeping_hamster",
e.healthy_hamster = "healthy_hamster",
e.gym_hamster = "gym_hamster",
e.university_hamster = "university_hamster",
e.vipassana_hamster = "vipassana_hamster",
e.hamster_helps_whales = "hamster_helps_whales",
e.hamster_with_friends = "hamster_with_friends",
e))(OL || {})
  , RL = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(RL || {})
  , IL = (e=>(e[e.Bronze = 1] = "Bronze",
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
e))(IL || {})
  , PL = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(PL || {})
  , ML = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(ML || {})
  , cc = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
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
e))(cc || {})
  , DL = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.CONNECT_TON_WALLET = "airdrop_connect_ton_wallet",
e.INVITE_FRIENDS = "invite_friends",
e.REACH_PROFIT_PER_HOUR = "reach_profit_per_hour",
e.REACH_LEVEL = "reach_level",
e))(DL || {})
  , NL = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(NL || {})
  , VL = (e=>(e.BINGX = "bingx",
e))(VL || {})
  , Ho = (e=>(e.LANDING = "/",
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
e))(Ho || {})
  , Dg = (e=>(e.ONBOARDING_START = "onboarding_start",
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
e))(Dg || {})
  , Nr = (e=>(e.Dot = ".",
e.Dash = "-",
e.SymbolSeparator = "/",
e))(Nr || {});
const FL = {
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
  , Eo = Sn("upgrade", {
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
                timestamp: Ne().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = At(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = Ne().getNowTimestampWithMS()
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
            return await ze.post("/clicker/buy-upgrade", {
                body: {
                    upgradeId: e,
                    timestamp: Ne().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, i;
                Gt().useHapticFeedback("heavy"),
                Ot().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && wL().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((i = (r = this.upgradesForBuy) == null ? void 0 : r.find(o=>o.id === e)) == null ? void 0 : i.level) ?? 1;
                return Ne().trackEvent(`mine_${Ne().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await ze.post("/clicker/claim-daily-combo", {}).then(e=>(Gt().useHapticFeedback("heavy"),
            Ot().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await ze.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
            e != null && e.sections && this.setSections(e.sections),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e)).catch(e=>{
                gn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_upgrades")
                })
            }
            )
        },
        setDailyCombo(e) {
            const t = {
                ...this.dailyCombo
            };
            this.isDailyComboHasNewOpenedItems((e == null ? void 0 : e.upgradeIds) ?? [], (t == null ? void 0 : t.upgradeIds) ?? []) && !Ot().first_time_load && setTimeout(()=>{
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
            this.getDailyComboNotClaimed && !Ot().first_time_load && (Ne().trackEvent(Dg.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = ne();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return Ne().compareWithEmptyOldArray(e, this.dailyComboCount);
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
                this.cooldowns[n.id].timestamp = Ne().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
                this.cooldownStartTimer(n.id)))
            }
            ),
            t) {
                const {$event: n} = ne();
                n("upgrade:update-timers")
            }
        },
        resetDailyComboInterval() {
            this.dailyComboInterval && clearInterval(this.dailyComboInterval),
            this.dailyComboInterval = null
        },
        startDailyComboInterval() {
            this.resetDailyComboInterval(),
            this.dailyComboInterval = At(()=>{
                var e;
                if ((e = this.dailyCombo) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ne().getNowTimestamp();
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
  , Ot = Sn("clicker", {
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
            let s = At(()=>{
                this.balanceCoins += i,
                this.balanceCoins >= r && (this.balanceCoins = r,
                clearInterval(s),
                s = null)
            }
            , o)
        },
        animateBalance() {
            this.balanceCoins < this.balanceTarget && (this.animate_interval = At(()=>{
                if (this.balanceCoins >= this.balanceTarget) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins++
            }
            , $t.BALANCE_ANIMATION_SPEED)),
            this.balanceTarget < this.balanceCoins && (this.animate_interval = At(()=>{
                if (this.balanceTarget >= this.balanceCoins) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins--
            }
            , $t.BALANCE_ANIMATION_SPEED))
        },
        calcEnergy() {
            let e = 1;
            const t = Ne().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (Lt().maxPassiveDtSeconds_local <= (Lt().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = Ne().getNowTimestamp();
                this.timestamp_passive && t - this.timestamp_passive > 1 && (e = t - this.timestamp_passive);
                const n = this.earnPassivePerSec ?? 0;
                this.totalCoins = this.totalCoins + e * n,
                this.balanceCoins = this.balanceCoins + e * n,
                Lt().maxPassiveDtSeconds_local += e,
                this.timestamp_passive = t
            }
        },
        checkAchievements() {
            var e;
            this.clearAchievementsInterval(),
            (e = this.achievements) != null && e.filter(t=>!t.isClaimed).length && (this.achievements_interval = At(()=>{
                Dt().loading || (this.clearAchievementsInterval(),
                this.setAchievementsShow(!0))
            }
            , 500))
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !Dt().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            Gt().notificationLevelUp = gn.promise({
                title: ne().$i18n.t("messages.level_up_processing")
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
            this.tap_interval === null && (this.tap_interval = At(()=>{
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
            , $t.TAP_INTERVAL)
        },
        async earnStartInterval() {
            ne().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${Ne().getNowTimestamp()}
              timestamp dt: ${Ne().getNowTimestamp() - this.lastSyncUpdate}
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
            return ((n = (t = Lt().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === e)) == null ? void 0 : n.coinsToLeveUp) ?? 0
        },
        async postAchievementStat(e) {
            return await ze.post("/clicker/achievement-stat", {
                body: {
                    achievementIds: e
                }
            }).then(t=>t)
        },
        async postExchangeReferralStat(e=0) {
            return await ze.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postReferrerInfo() {
            return await ze.post("/clicker/referrer-info", {}).then(e=>(e.referrer && this.setReferrer(e.referrer),
            e))
        },
        async postSendReferralLink() {
            return await ze.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSkinBuy(e="skin0") {
            return await ze.post("/clicker/buy-skin", {
                body: {
                    skinId: e,
                    timestamp: Ne().getNowTimestamp()
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinSelect(e="skin0") {
            return await ze.post("/clicker/select-skin", {
                body: {
                    skinId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinsGet() {
            return await ze.post("/clicker/get-skin", {
                body: {}
            }).then(e=>(e.skins && Lt().mergeSkinsAndState(e.skins),
            e))
        },
        async postSync() {
            return await ze.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(tt.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(tt.SYNC_AVAILABLE_TAPS);
            return await ze.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : Ne().getNowTimestamp()
                }
            }).then(i=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(i),
                this.storageSyncTapsSubtract(e);
                const o = Ne().getNowTimestamp() - this.lastSyncUpdate;
                return o > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * o)),
                this.timer_leveUp || this.timerLevelUpStart(),
                i
            }
            ).catch(i=>{
                gn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_tap")
                }),
                Gt().rejectNotificationLevelUp()
            }
            )
        },
        async postUserClaimDailyCombo(e) {
            return await ze.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserExchangeId(e) {
            return await ze.post("/clicker/select-exchange", {
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
            localStorage.setItem(tt.SYNC_AVAILABLE_TAPS, String(e))
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
                const n = (t = Lt().exchanges) == null ? void 0 : t.find(r=>r.id === e);
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
            Lt().maxPassiveDtSeconds_local = 0
        },
        setLevel(e) {
            var t, n;
            this.level = e,
            this.coinsToLevelUp = (n = (t = Lt().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === this.level)) == null ? void 0 : n.coinsToLeveUp
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
            var t, n, r, i, o, s, a, l, u, c, f, d, m, _, b, k, g, E, p, y, T, w, L;
            if ((t = e == null ? void 0 : e.clickerUser) != null && t.id && this.setId(e.clickerUser.id),
            (n = e == null ? void 0 : e.clickerUser) != null && n.totalKeys && this.setTotalKeys(e.clickerUser.totalKeys),
            (r = e == null ? void 0 : e.clickerUser) != null && r.balanceKeys && this.setBalanceKeys(e.clickerUser.balanceKeys),
            (i = e == null ? void 0 : e.clickerUser) != null && i.totalCoins && this.setTotalCoins(e.clickerUser.totalCoins),
            (o = e == null ? void 0 : e.clickerUser) != null && o.balanceCoins && (this.first_time_load ? (s = e == null ? void 0 : e.clickerUser) != null && s.lastPassiveEarn && ((a = e == null ? void 0 : e.clickerUser) == null ? void 0 : a.lastPassiveEarn) > 1 ? (this.setBalanceCoins(e.clickerUser.balanceCoins - e.clickerUser.lastPassiveEarn),
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : Dt().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((l = e == null ? void 0 : e.clickerUser) == null ? void 0 : l.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (u = e == null ? void 0 : e.clickerUser) != null && u.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (d = e == null ? void 0 : e.clickerUser) != null && d.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (m = e == null ? void 0 : e.clickerUser) != null && m.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (b = e == null ? void 0 : e.clickerUser) != null && b.upgradesForBuy && Eo().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (k = e == null ? void 0 : e.clickerUser) != null && k.upgrades && Eo().setMyUpgrades(e.clickerUser.upgrades),
            (g = e == null ? void 0 : e.clickerUser) != null && g.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (E = e == null ? void 0 : e.clickerUser) != null && E.referrerId && this.setReferrerId(e.clickerUser.referrerId),
            (p = e == null ? void 0 : e.clickerUser) != null && p.level) {
                const C = (y = e == null ? void 0 : e.clickerUser) == null ? void 0 : y.level;
                if (this.level && this.level < C) {
                    const {$event: O} = ne();
                    O("level-up:success")
                }
                setTimeout(()=>{
                    this.setLevel(C)
                }
                , 50)
            }
            (T = e == null ? void 0 : e.clickerUser) != null && T.exchangeRefLinks && this.setExchangeRefLinks(e.clickerUser.exchangeRefLinks),
            (w = e == null ? void 0 : e.clickerUser) != null && w.skin && this.setSkinState(e.clickerUser.skin),
            (L = e == null ? void 0 : e.clickerUser) != null && L.achievements && (this.setAchievements(e.clickerUser.achievements),
            this.checkAchievements())
        },
        startTimers() {
            Dt().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(tt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(tt.SYNC_TAPS, String(n + e)),
            localStorage.setItem(tt.SYNC_TIMESTAMP_TAPS, String(Ne().getNowTimestamp()))
        },
        storageSyncTapsGet() {
            const e = localStorage.getItem(tt.SYNC_TAPS);
            return e ? parseInt(e) ?? 0 : 0
        },
        storageSyncTapsReset() {
            localStorage.removeItem(tt.SYNC_TAPS)
        },
        storageSyncTapsSet(e) {
            localStorage.setItem(tt.SYNC_TAPS, String(e))
        },
        storageSyncTapsSubtract(e) {
            const t = localStorage.getItem(tt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(tt.SYNC_TAPS, String(Math.max(0, n - e)))
        },
        timerEnergyReset() {
            this.timer_energy && clearInterval(this.timer_energy),
            this.timer_energy = null
        },
        timerEnergyStart() {
            this.timer_energy = At(this.calcEnergy, $t.CALC_INTERVAL)
        },
        timerLevelUpReset() {
            this.timer_leveUp && clearInterval(this.timer_leveUp),
            this.timer_leveUp = null
        },
        timerLevelUpStart() {
            this.level !== this.getMaxUserLevel && this.timer_leveUp === null && (this.timer_leveUp = At(this.checkLevelUp, $t.CALC_INTERVAL))
        },
        timerPassiveReset() {
            this.timer_passive && clearInterval(this.timer_passive),
            this.timer_passive = null
        },
        timerPassiveStart() {
            this.timer_passive = At(this.calcPassive, $t.CALC_INTERVAL)
        },
        timerSyncReset() {
            this.timer_sync && clearInterval(this.timer_sync),
            this.timer_sync = null
        },
        timerSyncStart() {
            this.timer_sync = At(()=>{
                this.postSync().catch(e=>{
                    gn.error({
                        title: ne().$i18n.t("messages.request_error"),
                        message: ne().$i18n.t("messages.no_sync")
                    }),
                    Gt().rejectNotificationLevelUp()
                }
                )
            }
            , $t.SYNC_INTERVAL)
        }
    },
    getters: {
        getUserLevel() {
            return (this.level ?? 1) > 11 ? 11 : this.level ?? 1
        },
        getMaxUserLevel() {
            let e = 0;
            for (const t of Lt().userLevels_balanceCoins)
                t.level !== null && (e = Math.max(e, t.level));
            return e
        },
        getProgressLevel() {
            var n;
            let e = 0;
            const t = (n = Lt().userLevels_balanceCoins) == null ? void 0 : n.find(r=>r.level === this.level);
            return this.level === this.getMaxUserLevel && (e = 100),
            this.level && this.level !== this.getMaxUserLevel && t && (e = this.balanceCoins * 100 / t.coinsToLeveUp),
            Math.min(e, 100)
        },
        getUserBalanceFormatted() {
            return Ne().numberFormat(this.balanceCoins, !1)
        }
    }
})
  , Ne = Sn("helper", {
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
            const {locale: e} = ma();
            return e.value === "tl" ? "tl-ph" : e.value
        },
        getNowTimestamp() {
            return Math.floor(new Date().getTime() / 1e3) + Ot().dtServer
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
            return i && `${ne().$config.public.cdnUrl}/${i.fileUniqueId}.jpg`
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
              , c = new Intl.NumberFormat(ne().$i18n.locale.value,{
                maximumFractionDigits: n,
                minimumFractionDigits: 0
            }).format(t ? Math.round(a * l) / l : Math.floor(e)).replace(/\u202F/g, " ");
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
            gn.error({
                message: `${ne().$i18n.t("messages.oops")}`
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
                ne().$config.public.appEnv !== "production" ? console.info(`Sending ${e} event to GA4`, n) : gtag("event", e, n)
            } catch (r) {
                ne().$config.public.appEnv !== "production" && console.error(`Error sending ${e} event to GA4:`, r)
            }
        },
        isDevelopment() {
            return ne().$config.public.appEnv !== "production"
        },
        shrinkString(e, t=8) {
            return e.length >= t * 2 ? `${e.slice(0, t)}...${e.slice(-t)}` : e
        },
        getLocalizedString(e, t="") {
            return e[ne().$i18n.locale.value] ? e[ne().$i18n.locale.value] : e.en ? e.en : t
        }
    }
})
  , xL = {
    path: "/",
    watch: !0,
    decode: e=>mo(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function UL(e, t) {
    var l;
    const n = {
        ...xL,
        ...t
    }
      , r = $d(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const o = i !== void 0 && i <= 0
      , s = Cn(o ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = i && !o ? jL(s, i) : le(s);
    {
        const u = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , c = ()=>{
            n.readonly || bE(a.value, r[e]) || (HL(e, a.value, n),
            r[e] = Cn(a.value),
            u == null || u.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var b;
            const _ = m.refresh ? (b = $d(n)) == null ? void 0 : b[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = _,
            Jt(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        Po() && Xs(()=>{
            d = !0,
            c(),
            u == null || u.close()
        }
        ),
        u && (u.onmessage = ({data: m})=>f(m)),
        n.watch ? je(a, ()=>{
            d || c()
        }
        , {
            deep: n.watch !== "shallow"
        }) : c()
    }
    return a
}
function $d(e={}) {
    return hE(document.cookie, e)
}
function BL(e, t, n={}) {
    return t == null ? Ff(e, t, {
        ...n,
        maxAge: -1
    }) : Ff(e, t, n)
}
function HL(e, t, n={}) {
    document.cookie = BL(e, t, n)
}
const eh = 2147483647;
function jL(e, t) {
    let n, r = 0;
    return Po() && Xs(()=>{
        clearTimeout(n)
    }
    ),
    bp((i,o)=>{
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
  , uc = {
    de: [{
        key: "../locales/de.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/de.Ntloxmun.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    en: [{
        key: "../locales/en.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/en.2E6BLuYk.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/es.D-Xs65bc.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    fr: [{
        key: "../locales/fr.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/fr.B0xm274u.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/hi.DfMuq8Dd.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/id.BPLb7cne.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/pt.GOR70b8l.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/ru.DM2343Md.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/th.DwUYp6W-.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/tl.upjU-Skt.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/tr.C8iWjhDM.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/uz.CY6sG-pW.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/vi.DltMRcYJ.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , KL = [()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
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
  , ga = {
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
  , ku = [{
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
  , YL = !1
  , qL = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , WL = ""
  , GL = "nuxtI18n"
  , JL = typeof window < "u";
function zL(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        re(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function QL(e) {
    return e != null && "global"in e && "mode"in e
}
function XL(e) {
    return e != null && !("__composer"in e) && "locale"in e && lt(e.locale)
}
function Ng(e) {
    return e != null && "__composer"in e
}
function Ar(e) {
    return QL(e) ? e.global : e
}
function Si(e) {
    const t = Ar(e);
    return XL(t) ? t : Ng(t) ? t.__composer : t
}
function ya(e) {
    return G(Ar(e).locale)
}
function ZL(e) {
    return G(Ar(e).locales)
}
function $L(e) {
    return G(Ar(e).localeCodes)
}
function Vg(e, t) {
    const n = Ar(e);
    lt(n.locale) ? n.locale.value = t : n.locale = t
}
function Fg(e) {
    return re(e) ? e : Rw(e) ? e.toString() : "(null)"
}
function th(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: i, defaultLocaleRouteNameSuffix: o}) {
    let s = Fg(e) + (r === "no_prefix" ? "" : i + t);
    return t === n && r === "prefix_and_default" && (s += i + o),
    s
}
function nh(e, t) {
    return Ze(e) ? e(t) : e
}
function eC(e, t) {
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
const tC = eC;
function nC(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const rC = nC;
function iC(e, t, {matcher: n=tC, comparer: r=rC}={}) {
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
function fc(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const Xi = new Map;
async function oC(e, t) {
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
function xg(e, t) {
    let n = [];
    if (ut(e))
        n = e;
    else if (Fe(e)) {
        const r = [...t, "default"];
        for (const i of r)
            e[i] && (n = [...n, ...e[i].filter(Boolean)])
    } else
        re(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function sC(e, t, n) {
    const {defaultLocale: r, initialLocale: i, localeCodes: o, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const u = xg(s, [r, i]);
        await Promise.all(u.map(c=>rh(c, t, e)))
    }
    const l = a ? [...new Set().add(r).add(i)] : o;
    return await Promise.all(l.map(u=>rh(u, t, e))),
    e
}
async function aC(e, {key: t, load: n}) {
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
async function dc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const i = {};
    for (const o of r) {
        let s = null;
        Xi && Xi.has(o.key) && o.cache ? s = Xi.get(o.key) : s = await aC(e, o),
        s != null && Yr(s, i)
    }
    n(e, i)
}
async function rh(e, t, n) {
    await dc(e, t, (i,o)=>{
        const s = n[i] || {};
        Yr(o, s),
        n[i] = s
    }
    )
}
function lC(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function cC(e) {
    const {fullPath: t, query: n, hash: r, name: i, path: o, params: s, meta: a, redirectedFrom: l, matched: u} = e;
    return {
        fullPath: t,
        params: s,
        query: n,
        hash: r,
        name: i,
        path: o,
        meta: a,
        matched: u,
        redirectedFrom: l
    }
}
function uC({router: e}, t, n, r) {
    var u, c;
    if (n !== "prefix")
        return e.resolve(t);
    const [i,o] = lC(t.path, 1)
      , s = `${i}${r}${o === "" ? o : `/${o}`}`
      , a = (c = (u = e.options) == null ? void 0 : u.routes) == null ? void 0 : c.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = dt({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const fC = new Set(["prefix_and_default", "prefix_except_default"]);
function dC(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && fC.has(r)) && r !== "no_prefix"
}
const hC = dC;
function wi(e) {
    const {routesNameSeparator: t} = gt
      , n = G(e);
    return n == null || !n.name ? void 0 : Fg(n.name).split(t)[0]
}
function va(e, t, n) {
    var i;
    if (typeof t == "string" && xn(t, {
        acceptRelative: !0
    }))
        return t;
    const r = _a(e, t, n);
    return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}
function Su(e, t, n) {
    return _a(e, t, n) ?? void 0
}
function pC(e, t, n) {
    return _a(e, t, n) ?? void 0
}
function _a(e, t, n) {
    const {router: r, i18n: i} = e
      , o = n || ya(i)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: u, trailingSlash: c} = gt
      , f = OC();
    let d;
    if (re(t))
        if (t[0] === "/") {
            const {pathname: b, search: k, hash: g} = Nl(t)
              , E = ru(k);
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
        const b = uC(e, m, u, o)
          , k = wi(b);
        re(k) ? (m = {
            name: th(k, o, {
                defaultLocale: a,
                strategy: u,
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
            strategy: u
        }) && (m.path = `/${o}${m.path}`),
        m.path = c ? po(m.path, !0) : No(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = wi(r.currentRoute.value)),
        m.name = th(m.name, o, {
            defaultLocale: a,
            strategy: u,
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
const mC = e=>e;
function gC(e) {
    var n;
    const t = e.meta || {};
    return ((n = G(t)) == null ? void 0 : n[GL]) || {}
}
function Ai(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , i = wi(r);
    if (!i)
        return "";
    const o = RC()
      , s = cC(r)
      , a = gC(r)[t]
      , l = {
        ...s,
        name: i,
        params: {
            ...s.params,
            ...a
        }
    }
      , u = va(e, l, t);
    return o(u, t)
}
function Ug(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: i} = gt
      , o = Si(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (G(o.locales) == null || G(o.baseUrl) == null)
        return s;
    const a = ya(e.i18n)
      , l = ZL(e.i18n)
      , u = zL(l).find(d=>d.code === a) || {
        code: a
    }
      , c = u.iso
      , f = u.dir || i;
    return t && (s.htmlAttrs.dir = f),
    n && a && G(o.locales) && (c && (s.htmlAttrs.lang = c),
    s.link.push(...yC(e, G(l), r), ...vC(e, r, n)),
    s.meta.push(..._C(e, r, n), ...bC(u, c, r), ...EC(G(l), c, r))),
    s
}
function wu() {
    const e = Si(ne().$i18n);
    return G(e.baseUrl)
}
function yC(e, t, n) {
    const r = wu()
      , {defaultLocale: i, strategy: o} = gt
      , s = [];
    if (o === qL.NO_PREFIX)
        return s;
    const a = new Map;
    for (const l of t) {
        const u = l.iso;
        if (!u) {
            console.warn("Locale ISO code is required to generate alternate link");
            continue
        }
        const [c,f] = u.split("-");
        c && f && (l.isCatchallLocale || !a.has(c)) && a.set(c, l),
        a.set(u, l)
    }
    for (const [l,u] of a.entries()) {
        const c = Ai(e, u.code);
        c && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: hc(c, r),
            hreflang: l
        })
    }
    if (i) {
        const l = Ai(e, i);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: hc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function Bg(e, t, n) {
    const r = e.router.currentRoute.value
      , i = Su(e, {
        ...r,
        name: wi(r)
    });
    if (!i)
        return "";
    let o = hc(i.path, t);
    const s = Fe(n) && n.canonicalQueries || []
      , a = i.query
      , l = new URLSearchParams;
    for (const c of s)
        if (c in a) {
            const f = a[c];
            ut(f) ? f.forEach(d=>l.append(c, d || "")) : l.append(c, f || "")
        }
    const u = l.toString();
    return u && (o = `${o}?${u}`),
    o
}
function vC(e, t, n) {
    const r = wu()
      , i = Bg(e, r, n);
    return i ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: i
    }] : []
}
function _C(e, t, n) {
    const r = wu()
      , i = Bg(e, r, n);
    return i ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: i
    }] : []
}
function bC(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: Hg(t)
    }]
}
function EC(e, t, n) {
    return e.filter(i=>i.iso && i.iso !== t).map(i=>({
        [n]: `i18n-og-alt-${i.iso}`,
        property: "og:locale:alternate",
        content: Hg(i.iso)
    }))
}
function Hg(e) {
    return (e || "").replace(/-/g, "_")
}
function hc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function TC(e, t) {
    return jo(e, "setLocale", t)
}
function kC(e, t) {
    return jo(e, "setLocaleCookie", t)
}
function SC(e, t, n) {
    return jo(e, "mergeLocaleMessage", t, n)
}
function wC(e, t, n, r, i) {
    return jo(e, "onBeforeLanguageSwitch", t, n, r, i)
}
function AC(e, t, n) {
    return jo(e, "onLanguageSwitched", t, n)
}
function Au(e) {
    return {
        i18n: e ?? ne().$i18n,
        router: Qt(),
        runtimeConfig: Jn()
    }
}
async function ih(e, t, n=!1) {
    const r = gt.differentDomains
      , i = (gt.detectBrowserLanguage && gt.detectBrowserLanguage.useCookie) ?? ga.detectBrowserLanguage.useCookie
      , o = ne();
    let s = !1;
    const a = ya(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await wC(t, a, e, n, o)
      , u = $L(t);
    if (l && u && u.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const c = PC(t, "fallbackLocale");
    {
        const f = (d,m)=>SC(t, d, m);
        if (c) {
            const d = xg(c, [e]);
            await Promise.all(d.map(m=>dc(m, uc, f)))
        }
        await dc(e, uc, f)
    }
    return i && kC(t, e),
    Vg(t, e),
    await AC(t, a, e),
    s = !0,
    [s, a]
}
function oh(e, t, n, r, i) {
    const {strategy: o, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = gt
      , u = Ze(r) ? r() : r
      , {ssg: c, callType: f, firstAccess: d, localeCookie: m} = i
      , {locale: _, stat: b, reason: k, from: g} = l ? Yg(e, n, i, u) : Kg;
    if (k === "detect_ignore_on_ssg")
        return u;
    if ((g === "navigator_or_header" || g === "cookie" || g === "fallback") && _)
        return _;
    let E = _;
    return E || (a ? E = FC(ku) : o !== "no_prefix" ? E = t(e) : l || (E = u)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function sh({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const i = ne()
      , o = Au()
      , {strategy: s, differentDomains: a} = gt;
    let l = "";
    const {fullPath: u} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const c = i.$switchLocalePath(t) || i.$localePath(u, t);
        re(c) && c && !Dl(c, u) && !c.startsWith("//") && (l = e.from && e.from.fullPath === c ? "" : c)
    }
    if ((a || !0) && n(e.to) !== t) {
        const c = Ai(o, t, e.to);
        re(c) && c && !Dl(c, u) && !c.startsWith("//") && (l = c)
    }
    return l
}
function LC(e) {
    return Fe(e) && "path"in e && "statusCode"in e
}
function ah(e, t) {
    return xo(e, {
        redirectCode: t
    })
}
async function lh(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = ga.rootRedirect
      , {i18n: i, locale: o, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return re(r) ? a = "/" + r : LC(r) && (a = "/" + r.path,
        t = r.statusCode),
        ah(a, t);
    if (a)
        return ah(a, t)
}
function CC(e, t) {
    ti(e, "$i18n", Ar(t)),
    ti(e, "$getRouteBaseName", wi),
    ti(e, "$localePath", rn(va)),
    ti(e, "$localeRoute", rn(Su)),
    ti(e, "$switchLocalePath", rn(Ai)),
    ti(e, "$localeHead", rn(Ug))
}
function OC() {
    return e=>hC(e) && !gt.differentDomains
}
function RC() {
    return (e,t)=>mC(e)
}
function IC() {
    return ()=>{
        var o;
        const e = ne()
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
function jo(e, t, ...n) {
    const r = Ar(e)
      , [i,o] = [r, r[t]];
    return Reflect.apply(o, i, [...n])
}
function PC(e, t) {
    const n = Ar(e);
    return G(n[t])
}
function ti(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function rn(e, t=Au()) {
    return (...n)=>e(t, ...n)
}
function jg() {
    let e;
    return navigator.languages && (e = iC(ku, navigator.languages)),
    e
}
function MC() {
    const e = gt.detectBrowserLanguage
      , t = e && e.cookieKey || ga.detectBrowserLanguage.cookieKey
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
function DC(e) {
    const t = gt.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && zr.includes(n))
        return n
}
function NC(e, t) {
    const {useCookie: n} = gt.detectBrowserLanguage || ga.detectBrowserLanguage;
    n && (e.value = t)
}
const Kg = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function Yg(e, t, n, r="") {
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
    const {redirectOn: u, alwaysRedirect: c, useCookie: f, fallbackLocale: d} = gt.detectBrowserLanguage
      , m = re(e) ? e : e.path;
    if (i !== "no_prefix") {
        if (u === "root") {
            if (m !== "/")
                return {
                    locale: "",
                    stat: !1,
                    reason: "not_redirect_on_root"
                }
        } else if (u === "no prefix" && !c && m.match(fc(zr)))
            return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_no_prefix"
            }
    }
    let _ = "unknown", b, k;
    f && (k = b = l.value,
    _ = "cookie"),
    k || (k = jg(),
    _ = "navigator_or_header");
    const g = k || d;
    !k && d && (_ = "fallback");
    const E = r || t;
    if (g && (!f || c || !b)) {
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
        if (c) {
            const p = m === "/"
              , y = u === "all"
              , T = u === "no prefix" && !m.match(fc(zr));
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
function VC() {
    let e;
    return e = window.location.host,
    e
}
function FC(e) {
    let t = VC() || "";
    if (t) {
        const n = e.find(r=>{
            if (r && r.domain) {
                let i = r.domain;
                return xn(r.domain) && (i = r.domain.replace(/(http|https):\/\//, "")),
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
function qg() {
    return rn(va)
}
function zM() {
    return rn(Ai)
}
const el = ()=>({
    haptic: !0,
    coins_animation: !0
})
  , xC = Sn("settings", {
    state: ()=>({
        settings: el()
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
            localStorage.setItem(tt.SETTINGS, JSON.stringify(this.settings))
        },
        loadSettings() {
            const e = localStorage.getItem(tt.SETTINGS);
            e || this.updateSettings({}),
            this.settings = e ? {
                ...el(),
                ...JSON.parse(e)
            } : el(),
            this.saveToLocalStorage()
        },
        async postExchangeRefLink(e) {
            return await ze.post("/clicker/exchangeRefLink-save", {
                body: {
                    exchangeRefLink: e
                }
            }).then(t=>t)
        }
    }
})
  , QM = xe({
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
          , {showBackButton: i, onBackButtonClicked: o, hideBackButton: s} = JC();
        return je(()=>n.visible, a=>{
            a ? i() : s()
        }
        ),
        o(()=>r("click")),
        Vt(()=>n.visible && i()),
        Ri(()=>s()),
        (a,l)=>null
    }
})
  , {initData: UC, initDataUnsafe: BC, version: HC, platform: jC, isVersionAtLeast: KC, sendData: YC, close: qC} = Telegram.WebApp
  , Wg = le(!1)
  , WC = (...e)=>{
    Telegram.WebApp.ready(...e),
    Wg.value = !0
}
  , Gg = e=>Telegram.WebApp.platform === e
  , Jg = Gg("unknown")
  , GC = !Jg && Telegram.WebApp.initData === "";
function zg() {
    return {
        initData: UC,
        initDataUnsafe: BC,
        version: HC,
        platform: jC,
        isVersionAtLeast: KC,
        onEvent: (...e)=>{
            Vt(()=>Telegram.WebApp.onEvent(...e)),
            Ri(()=>Telegram.WebApp.offEvent(...e))
        }
        ,
        sendData: YC,
        ready: WC,
        close: qC,
        isReady: dr(Wg),
        isPlatform: Gg,
        isPlatformUnknown: Jg,
        canSendData: GC
    }
}
const Qg = le(Telegram.WebApp.BackButton.isVisible);
function Xg() {
    Qg.value = Telegram.WebApp.BackButton.isVisible
}
function ch(...e) {
    Telegram.WebApp.BackButton.show(...e),
    Xg()
}
function uh(...e) {
    Telegram.WebApp.BackButton.hide(...e),
    Xg()
}
function JC() {
    const {onEvent: e} = zg()
      , t = n=>e("backButtonClicked", n);
    return {
        isBackButtonVisible: ue({
            get() {
                return Qg.value
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
const {impactOccurred: zC, notificationOccurred: QC, selectionChanged: XC} = Telegram.WebApp.HapticFeedback;
function ZC() {
    return {
        impactOccurred: zC,
        notificationOccurred: QC,
        selectionChanged: XC
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
zg();
le(Telegram.WebApp.SettingsButton.isVisible);
le(Telegram.WebApp.colorScheme);
le(Telegram.WebApp.themeParams);
le(Telegram.WebApp.headerColor);
le(Telegram.WebApp.backgroundColor);
le(Telegram.WebApp.isExpanded);
le(Telegram.WebApp.viewportHeight);
le(Telegram.WebApp.viewportStableHeight);
const Gt = Sn("ui", {
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
            const t = gn.promise({
                title: ne().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success(ne().$i18n.t("messages.copy_success")),
                Ne().trackEvent("copy_text_success_writeText")
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
                )(e) ? (t == null || t.success(ne().$i18n.t("messages.copy_success")),
                Ne().trackEvent("copy_text_success_exec")) : (t == null || t.reject(ne().$i18n.t("messages.copy_error")),
                Ne().trackEvent("copy_text_error"))
            }
        },
        goBackButton() {
            const {$event: e} = ne()
              , t = qg();
            this.bottom_sheet_open ? e("bs:close") : this.modalOpen ? e("modal:close") : xo(t(Ho.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject(ne().$i18n.t("messages.oops")),
            this.notificationLevelUp = null,
            Ot().setStop(!1))
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
            xC().settings.haptic && ZC().impactOccurred(e)
        },
        isRu(e) {
            return this.language_code === "ru" || e === "ru"
        },
        isYP() {
            return ["RU", "BY", "KZ", "UZ", "KG", "AZ", "AM", "GE"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isRUBY() {
            return ["RU", "BY"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isPECLMX() {
            return ["PE", "CL", "MX"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isBR() {
            return ["BR"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isET() {
            return ["ET"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isGamesRu() {
            return ["AZ", "AM", "BY", "KZ", "KG", "MD", "RU", "TJ", "TM"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isGamesUz() {
            return ["UZ"].indexOf(Dt().location.country_code ?? "") > -1
        },
        isGamesAr() {
            return !1
        },
        isGamesFr() {
            return !1
        }
    }
})
  , tl = Sn("morse", {
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
            (e = this.dailyCipher) != null && e.cipher && (this.dailyCipher.cipher.startsWith(this.morse_decoded) ? Gt().useHapticFeedback("heavy") : this.resetMorse(),
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
            return e.split("/").map(t=>FL[t.trim()] || "").join("")
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
            return await ze.post("/clicker/claim-daily-cipher", {
                body: {
                    cipher: this.morse_decoded
                }
            }).then(e=>(Gt().useHapticFeedback("heavy"),
            Ot().setUserResponseData(e),
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
            this.dailyCipherInterval = At(()=>{
                var e;
                if ((e = this.dailyCipher) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ne().getNowTimestamp();
                    this.timestamp_daily_cipher && n - this.timestamp_daily_cipher > 1 && (t = n - this.timestamp_daily_cipher),
                    this.dailyCipher.remainSeconds -= t,
                    this.dailyCipher.remainSeconds <= 0 && (this.dailyCipher.remainSeconds = 0,
                    this.resetDailyCipherInterval(),
                    setTimeout(async()=>{
                        await Lt().postConfig().then(()=>{
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
  , nl = Sn({
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
            return await ze.post("/clicker/start-keys-minigame", {}).then(e=>(Ot().setUserResponseData(e),
            e != null && e.dailyKeysMiniGame ? (e.dailyKeysMiniGame.remainSecondsToGuess += .1,
            this.setDailyKeysMiniGame(e.dailyKeysMiniGame)) : this.dailyKeysMiniGame = null,
            e))
        },
        async postClaimDailyKeysMiniGame() {
            return await ze.post("/clicker/claim-daily-keys-minigame", {
                body: {
                    cipher: this.cipher
                }
            }).then(e=>(Ot().setUserResponseData(e),
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
            this.matchMiniGameInterval = At(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToGuess) {
                    let t = 1;
                    const n = Ne().getNowTimestamp();
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
            this.replayMiniGameInterval = At(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToNextAttempt) {
                    let t = 1;
                    const n = Ne().getNowTimestamp();
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
            this.dailyMiniGameInterval = At(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ne().getNowTimestamp();
                    this.timestamp_daily_minigame && n - this.timestamp_daily_minigame > 1 && (t = n - this.timestamp_daily_minigame),
                    this.dailyKeysMiniGame.remainSeconds -= t,
                    this.timestamp_daily_minigame = n,
                    this.dailyKeysMiniGame.remainSeconds <= 0 && (this.dailyKeysMiniGame.remainSeconds = 0,
                    this.resetDailyMiniGameInterval(),
                    this.show && (this.hideGamePage(),
                    gn.promise({}).reject({
                        title: ne().$i18n.t("minigame.lose_title"),
                        duration: 4e3
                    }),
                    Ne().trackEvent("minigame_puzzle_loose_period"),
                    Gt().useHapticFeedback("heavy")),
                    this.dailyKeysMiniGame = null,
                    setTimeout(async()=>{
                        await Lt().postConfig()
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
  , Lt = Sn("config", {
    state: ()=>({
        achievementRareTypes: [],
        achievementTypes: [],
        achievements: [],
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
        userLevels_balanceCoins: [],
        version: "",
        remainSecondsForUpdate: 0,
        updateInterval: null,
        updateTimestamp: 0,
        earnTasks: []
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
        async getConfig() {
            return await ze.get(`/clicker/config/${this.version}`, {}).then(e=>{
                e.config && this.setStaticConfig(e.config)
            }
            )
        },
        async postConfig() {
            return await ze.post("/clicker/config", {}).then(e=>(e != null && e.dailyCipher ? tl().setDailyCipher(e.dailyCipher) : (tl().dailyCipher = null,
            tl().resetMorse()),
            nl().resetMiniGame(),
            e != null && e.dailyKeysMiniGame ? nl().setDailyKeysMiniGame(e.dailyKeysMiniGame) : nl().dailyKeysMiniGame = null,
            e != null && e.feature && this.setFeature(e.feature),
            e))
        },
        setStaticConfig(e) {
            e != null && e.maxPassiveDtSeconds && this.setMaxPassiveDtSeconds(e.maxPassiveDtSeconds),
            e != null && e.exchanges && this.setExchanges(e.exchanges),
            e != null && e.userLevels_balanceCoins && this.setUserLevelsBalanceCoins(e.userLevels_balanceCoins),
            e != null && e.levelUp && this.setLevelUp(e.levelUp),
            e != null && e.guidLink && this.setGuidLink(e.guidLink),
            e != null && e.referral && this.setReferralBonus(e.referral),
            e != null && e.skins && this.setSkins(e.skins),
            e != null && e.telegramAuditory && this.setTelegramAuditory(e.telegramAuditory),
            e != null && e.subscribeChannelUrl && this.setTelegramLink(e.subscribeChannelUrl),
            Ot().exchangeId && Ot().setExchangeId(Ot().exchangeId),
            e != null && e.achievementRareTypes && this.setAchievementRareTypes(e.achievementRareTypes),
            e != null && e.achievementTypes && this.setAchievementTypes(e.achievementTypes),
            e != null && e.achievements && this.setAchievements(e.achievements),
            e != null && e.tasks && this.setEarnTasks(e.tasks)
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
        setExchanges(e=[]) {
            this.exchanges = e
        },
        setEarnTasks(e=[]) {
            this.earnTasks = e
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
        },
        setVersion(e) {
            this.version && this.version !== e && (this.version = e,
            this.updateStaticConfig()),
            this.version = e
        },
        setServerTime(e) {
            this.serverTime = e
        },
        setNextUpdateTime(e) {
            e && e !== this.nextUpdateTime && (this.nextUpdateTime = e,
            this.setRemainSecondsForUpdate())
        },
        setRemainSecondsForUpdate() {
            if (this.serverTime && this.nextUpdateTime) {
                const e = new Date(this.serverTime)
                  , t = new Date(this.nextUpdateTime);
                this.remainSecondsForUpdate = Math.floor((t.getTime() - e.getTime()) / 1e3),
                this.remainSecondsForUpdate && this.startUpdateInterval()
            }
        },
        resetUpdateInterval() {
            this.updateInterval && clearInterval(this.updateInterval),
            this.updateInterval = null,
            this.updateTimestamp = Ne().getNowTimestamp()
        },
        startUpdateInterval() {
            this.resetUpdateInterval(),
            this.remainSecondsForUpdate && (this.updateInterval = At(()=>{
                let e = 1;
                const t = Ne().getNowTimestamp();
                t - this.updateTimestamp > 1 && (e = t - this.updateTimestamp),
                this.remainSecondsForUpdate -= e,
                this.remainSecondsForUpdate <= 0 && (this.remainSecondsForUpdate = 0,
                this.resetUpdateInterval(),
                setTimeout(()=>{
                    Ot().postSync().catch(()=>{}
                    )
                }
                , 1e3)),
                this.updateTimestamp = t
            }
            , 1e3))
        },
        async updateStaticConfig() {
            return await this.getConfig().then(async()=>{
                await Eo().postUpgradesForBuy().then(()=>{
                    const {$event: e} = ne();
                    e("buy-upgrade:success")
                }
                ).catch(()=>{}
                ),
                await Zg().postListTasks().catch(()=>{}
                )
            }
            )
        }
    },
    getters: {
        getGuidLink() {
            var n, r;
            const e = ne().$i18n.locale;
            let t = (n = this.guidLink) == null ? void 0 : n.get(e);
            return t || (t = (r = this.guidLink) == null ? void 0 : r.get("en")),
            t ?? "#"
        }
    }
})
  , ze = {
    get: Ui("GET"),
    post: Ui("POST"),
    patch: Ui("PATCH"),
    put: Ui("PUT"),
    delete: Ui("DELETE")
};
function Ui(e) {
    return async(t,n,r={})=>{
        const i = Dt()
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
            async onRequest({request: l, options: u}) {
                s.public.appEnv !== "production" && console.log("%c Request => ", "background: #16161a; color: #f2f2f2; line-height: 20px;", l),
                r.onRequest()
            },
            async onRequestError({request: l, options: u, error: c}) {
                s.public.appEnv !== "production" && console.log("%c Request error => ", "background: #16161a; color: #ff0000; line-height: 20px;", l),
                gn.error({
                    title: ne().$i18n.t("messages.network_error_title"),
                    message: ne().$i18n.t("messages.network_error_description")
                }),
                r.onRequestError(),
                r.onError()
            },
            async onResponse({request: l, response: u, options: c}) {
                s.public.appEnv !== "production" && console.log(`%c Response ${u.status} => `, "background: #16161a; color: #4CD964; line-height: 20px;", l);
                const f = u.headers.get("config-version")
                  , d = u.headers.get("server-time")
                  , m = u.headers.get("config-next-update");
                f && Lt().setVersion(f),
                d && Lt().setServerTime(d),
                m && Lt().setNextUpdateTime(m),
                r.onResponse()
            },
            async onResponseError(l) {
                s.public.appEnv !== "production" && console.log("%c Response error => ", "background: #16161a; color: #ff0000; line-height: 20px;", l.request);
                const u = l.response._data;
                ((u == null ? void 0 : u.error_code) === "NOT_FOUND_CLICKER_USER" || (u == null ? void 0 : u.error_code) === "BAD_AUTH_TOKEN" || (u == null ? void 0 : u.error_code) === "NOT_EXANGE_SELECT ") && setTimeout(()=>{
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
const Zg = Sn("earn", {
    state: ()=>({
        tasks: [],
        dailyRewardInterval: null,
        dailyRewardSeconds: 0,
        timestamp_daily_reward: 0
    }),
    actions: {
        async postListTasks() {
            return await ze.post("/clicker/list-tasks", {}).then(e=>(e != null && e.tasks && this.setTasks(e.tasks),
            this.startDailyRewardInterval(),
            e)).catch(e=>{
                gn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_tasks")
                })
            }
            )
        },
        async postCheckTask(e) {
            return await ze.post("/clicker/check-task", {
                body: {
                    taskId: e
                }
            }).then(t=>{
                Gt().useHapticFeedback("heavy"),
                Ot().setUserResponseData(t),
                setTimeout(()=>{
                    Eo().postUpgradesForBuy()
                }
                , 1e3);
                const n = t.task.rewardCoins ?? 0;
                return Ne().trackEvent(`earn_${Ne().camelToSnake(e)}`, {
                    value: n
                }),
                t
            }
            )
        },
        setTasks(e=[]) {
            var o, s;
            const t = ne()
              , n = new Map(e.map(a=>[a.id, a]))
              , r = (o = Lt().earnTasks) == null ? void 0 : o.map(a=>{
                const l = n.get(a.id);
                return {
                    ...a,
                    ...l
                }
            }
            )
              , {locale: i} = t.$i18n;
            if (e.length) {
                let a = r.filter(c=>c.availableOnLocale && c.availableOnLocale.length > 0 ? c.availableOnLocale.includes(i.value) : !0);
                a = a.filter(c=>c.availableOnCountry && c.availableOnCountry.length > 0 && Dt().location.country_code ? c.availableOnCountry.includes(Dt().location.country_code ?? "") : !0);
                const l = localStorage.getItem(tt.EARN_TASKS)
                  , u = e.map(c=>c.id === cc.STREAK_DAYS ? {
                    ...c,
                    remainSeconds: 0
                } : c);
                l ? this.hashcode(u) !== Number(l) && (Gt().taskNotification = !0) : Gt().taskNotification = !0,
                this.tasks = a,
                localStorage.setItem(tt.EARN_TASKS, JSON.stringify(this.hashcode(u))),
                this.dailyRewardSeconds = ((s = this.tasks.find(c=>c.id === cc.STREAK_DAYS)) == null ? void 0 : s.remainSeconds) ?? Math.round(Ne().secondsUntilMidnightUTC()),
                this.startDailyRewardInterval()
            }
        },
        hashcode(e) {
            let t = 0;
            const n = JSON.stringify(e).replace(/\{|\"|\}|\:|,/g, "")
              , r = n.length;
            for (let i = 0; i < r; i++)
                t += n.charCodeAt(i) * 7;
            return t
        },
        resetDailyRewardInterval() {
            this.dailyRewardInterval && clearInterval(this.dailyRewardInterval),
            this.dailyRewardInterval = null
        },
        startDailyRewardInterval() {
            this.resetDailyRewardInterval(),
            this.dailyRewardInterval = At(()=>{
                if (this.dailyRewardSeconds) {
                    let e = 1;
                    const t = Ne().getNowTimestamp();
                    this.timestamp_daily_reward && t - this.timestamp_daily_reward > 1 && (e = t - this.timestamp_daily_reward),
                    this.dailyRewardSeconds -= e,
                    this.dailyRewardSeconds <= 0 && (this.dailyRewardSeconds = 0,
                    this.resetDailyRewardInterval(),
                    setTimeout(async()=>{
                        await this.postListTasks().then(()=>{}
                        )
                    }
                    , 1e3)),
                    this.timestamp_daily_reward = t
                }
            }
            , 1e3)
        }
    }
});
class ji extends Error {
}
ji.prototype.name = "InvalidTokenError";
function $C(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function e1(e) {
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
        return $C(t)
    } catch {
        return atob(t)
    }
}
function fh(e, t) {
    if (typeof e != "string")
        throw new ji("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new ji(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = e1(r)
    } catch (o) {
        throw new ji(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new ji(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
const Dt = Sn("auth", {
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
        token: localStorage.getItem(tt.AUTH_TOKEN) ?? null,
        location: {}
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(tt.AUTH_TOKEN)
        },
        isExpiredToken(e) {
            if (e && fh(e)) {
                const t = fh(e).exp;
                return new Date().getTime() > t * 1e3
            }
            return !1
        },
        logout(e=!0) {
            this.authenticated = !1,
            this.token = null,
            localStorage.removeItem(tt.AUTH_TOKEN),
            localStorage.removeItem(tt.SYNC_AVAILABLE_TAPS),
            localStorage.removeItem(tt.SYNC_TIMESTAMP_TAPS),
            localStorage.removeItem(tt.SYNC_TAPS),
            localStorage.removeItem(tt.AIRDROP_TASKS),
            localStorage.removeItem(tt.EARN_TASKS),
            localStorage.removeItem(tt.SETTINGS),
            localStorage.removeItem("ton-connect-storage_bridge-connection"),
            localStorage.removeItem("ton-connect-ui_last-selected-wallet-info"),
            Zg().tasks.forEach(t=>{
                localStorage.removeItem(t.id)
            }
            ),
            e && (xo(Ho.GAME_INDEX),
            setTimeout(()=>{
                window.location.reload()
            }
            , 500))
        },
        async postGetMe() {
            return await ze.post("/auth/account-info", {}).then(e=>{
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
            return await ze.post("/auth/auth-by-telegram-webapp", {
                body: e
            }).then(t=>{
                if (t.authToken) {
                    const n = t.authToken;
                    localStorage.setItem(tt.AUTH_TOKEN, n),
                    this.setToken(n)
                }
                return t
            }
            )
        },
        async postWebappConflict(e) {
            return await ze.post("/auth/telegram-webapp-conflict", {
                body: e
            }).then(t=>t)
        },
        async postAddReferral(e) {
            return await ze.post("/clicker/add-referral", {
                body: {
                    authUserId: String(e)
                }
            }).then(t=>t)
        },
        async postAvatarGet() {
            return await ze.post("/auth/get-avatar", {
                body: {}
            }).then(e=>e)
        },
        async postDeleteMe() {
            return await ze.post("/clicker/delete-me", {
                body: {}
            }).then(e=>e)
        },
        async getLocationData() {
            return await ze.get("/ip", {}).then(e=>{
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
  , t1 = async(e,t)=>{
    var i, o;
    const n = ne();
    Dt(n.$pinia);
    const r = Ot(n.$pinia);
    e && !((o = (i = e.name) == null ? void 0 : i.toString()) != null && o.includes("index")) && !r.exchangeId && xo(Ho.GAME_SETTINGS_EXCHANGE)
}
  , n1 = async e=>{
    let t, n;
    const r = ([t,n] = In(()=>Bm(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , r1 = [$k, t1, n1]
  , Zi = {};
function i1(e, t, n) {
    const {pathname: r, search: i, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const u = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let c = o.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        Mf(c, "")
    }
    const a = Mf(r, e)
      , l = !n || Dl(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : i) + o
}
const o1 = Ft({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var b, k;
        let t, n, r = Jn().app.baseURL;
        Yt.hashMode && !r.includes("#") && (r += "#");
        const i = ((b = Yt.history) == null ? void 0 : b.call(Yt, r)) ?? (Yt.hashMode ? Ek(r) : Qm(r))
          , o = ((k = Yt.routes) == null ? void 0 : k.call(Yt, pd)) ?? pd;
        let s;
        const a = i1(r, window.location, e.payload.path)
          , l = qk({
            ...Yt,
            scrollBehavior: (g,E,p)=>{
                if (E === dn) {
                    s = p;
                    return
                }
                if (Yt.scrollBehavior) {
                    if (l.options.scrollBehavior = Yt.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const y = l.beforeEach(()=>{
                            y(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return Yt.scrollBehavior(g, dn, s || p)
                }
            }
            ,
            history: i,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const u = _n(l.currentRoute.value);
        l.afterEach((g,E)=>{
            u.value = E
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: ()=>u.value
        });
        const c = _n(l.resolve(a))
          , f = ()=>{
            c.value = l.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        l.afterEach((g,E)=>{
            var p, y, T, w;
            ((y = (p = g.matched[0]) == null ? void 0 : p.components) == null ? void 0 : y.default) === ((w = (T = E.matched[0]) == null ? void 0 : T.components) == null ? void 0 : w.default) && f()
        }
        );
        const d = {};
        for (const g in c.value)
            Object.defineProperty(d, g, {
                get: ()=>c.value[g]
            });
        e._route = Oi(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = la();
        try {
            [t,n] = In(()=>l.isReady()),
            await t,
            n()
        } catch (g) {
            [t,n] = In(()=>e.runWithContext(()=>si(g))),
            await t,
            n()
        }
        const _ = e.payload.state._layout;
        return l.beforeEach(async(g,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            g.meta = St(g.meta),
            e.isHydrating && _ && !qr(g.meta.layout) && (g.meta.layout = _),
            e._processingMiddleware = !0;
            {
                const y = new Set([...r1, ...e._middleware.global]);
                for (const T of g.matched) {
                    const w = T.meta.middleware;
                    if (w)
                        for (const L of du(w))
                            y.add(L)
                }
                for (const T of y) {
                    const w = typeof T == "string" ? e._middleware.named[T] || await ((p = Zi[T]) == null ? void 0 : p.call(Zi).then(C=>C.default || C)) : T;
                    if (!w)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const L = await e.runWithContext(()=>w(g, E));
                    if (!e.payload.serverRendered && e.isHydrating && (L === !1 || L instanceof Error)) {
                        const C = L || Bl({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>si(C)),
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
            !e.isHydrating && m.value && await e.runWithContext(IE),
            p && await e.callHook("page:loading:end"),
            g.matched.length === 0 && await e.runWithContext(()=>si(Bl({
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
                l.options.scrollBehavior = Yt.scrollBehavior
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
  , pc = globalThis.requestIdleCallback || (e=>{
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
  , s1 = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , Lu = e=>{
    const t = ne();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        pc(e)
    }
    ) : pc(e)
}
  , a1 = Ft({
    name: "nuxt:payload",
    setup(e) {
        Qt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await zf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        Lu(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                Vo(n).protocol || await zf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(ua, 1e3)
        }
        )
    }
})
  , l1 = Ft(e=>{
    let t;
    async function n() {
        const r = await ua();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const i = await $fetch(iu("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && e.hooks.callHook("app:manifest:update", i)
    }
    Lu(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function $g(e, t=Qt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const i = t._preloadPromises = t._preloadPromises || [];
    if (i.length > 4)
        return Promise.all(i).then(()=>$g(e, t));
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
function c1(e={}) {
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
                    state: ne().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const u1 = (...e)=>e.find(t=>t !== void 0);
function ey(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, i) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return dh(r, e.trailingSlash);
        const o = "path"in r && r.path !== void 0 ? r.path : i(r).path
          , s = {
            ...r,
            path: dh(o, e.trailingSlash)
        };
        return "name"in s && delete s.name,
        s
    }
    return xe({
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
            const o = Qt()
              , s = Jn()
              , a = ue(()=>{
                const _ = r.to || r.href || "";
                return n(_, o.resolve)
            }
            )
              , l = ue(()=>typeof a.value == "string" && xn(a.value, {
                acceptRelative: !0
            }))
              , u = ue(()=>r.target && r.target !== "_self")
              , c = ue(()=>r.external || u.value ? !0 : typeof a.value == "object" ? !1 : a.value === "" || l.value)
              , f = le(!1)
              , d = le(null)
              , m = _=>{
                var b;
                d.value = r.custom ? (b = _ == null ? void 0 : _.$el) == null ? void 0 : b.nextElementSibling : _ == null ? void 0 : _.$el
            }
            ;
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !d1()) {
                const b = ne();
                let k, g = null;
                Vt(()=>{
                    const E = f1();
                    Lu(()=>{
                        k = pc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (g = E.observe(d.value, async()=>{
                                g == null || g(),
                                g = null;
                                const y = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                                await Promise.all([b.hooks.callHook("link:prefetch", y).catch(()=>{}
                                ), !c.value && $g(a.value, o).catch(()=>{}
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
                Tn(()=>{
                    k && s1(k),
                    g == null || g(),
                    g = null
                }
                )
            }
            return ()=>{
                var g, E;
                if (!c.value) {
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
                  , k = u1(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || u.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!i.default)
                        return null;
                    const p = ()=>xo(_, {
                        replace: r.replace,
                        external: r.external
                    });
                    return i.default({
                        href: _,
                        navigate: p,
                        get route() {
                            if (!_)
                                return;
                            const y = Vo(_);
                            return {
                                path: y.pathname,
                                fullPath: y.pathname,
                                get query() {
                                    return ru(y.search)
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
                        rel: k,
                        target: b,
                        isExternal: c.value,
                        isActive: !1,
                        isExactActive: !1
                    })
                }
                return ft("a", {
                    ref: d,
                    href: _,
                    rel: k,
                    target: b
                }, (E = i.default) == null ? void 0 : E.call(i))
            }
        }
    })
}
const XM = ey(NT);
function dh(e, t) {
    const n = t === "append" ? po : No;
    return xn(e) && !e.startsWith("http") ? e : n(e, !0)
}
function f1() {
    const e = ne();
    if (e._observer)
        return e._observer;
    let t = null;
    const n = new Map
      , r = (o,s)=>(t || (t = new IntersectionObserver(a=>{
        for (const l of a) {
            const u = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && u && u()
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
function d1() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const h1 = Ft(e=>{
    const t = vL();
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
  , p1 = Ft({
    name: "nuxt:global-components"
})
  , hr = {
    default: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/default.3YqYo4Mg.js"), __vite__mapDeps([32, 16, 2, 8, 18, 7, 27, 1, 5]), import.meta.url).then(e=>e.default || e),
    main: ()=>S(()=>import("https://hamsterkombatgame.io/_nuxt/main.BjVZ7dBg.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , m1 = Ft({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Qt();
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
            if (xn(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const i = r.meta.layout;
            let o = du(r.meta.middleware);
            o = o.filter(s=>typeof s == "string");
            for (const s of o)
                typeof Zi[s] == "function" && Zi[s]();
            i && typeof hr[i] == "function" && hr[i]()
        }
        )
    }
});
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function ZM(e) {
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
var ty = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
        var n = 1e3
          , r = 6e4
          , i = 36e5
          , o = "millisecond"
          , s = "second"
          , a = "minute"
          , l = "hour"
          , u = "day"
          , c = "week"
          , f = "month"
          , d = "quarter"
          , m = "year"
          , _ = "date"
          , b = "Invalid Date"
          , k = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
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
                  , x = N % 60;
                return (K <= 0 ? "+" : "-") + p(Y, 2, "0") + ":" + p(x, 2, "0")
            },
            m: function W(K, N) {
                if (K.date() < N.date())
                    return -W(N, K);
                var Y = 12 * (N.year() - K.year()) + (N.month() - K.month())
                  , x = K.clone().add(Y, f)
                  , ae = N - x < 0
                  , j = K.clone().add(Y + (ae ? -1 : 1), f);
                return +(-(Y + (N - x) / (ae ? x - j : j - x)) || 0)
            },
            a: function(W) {
                return W < 0 ? Math.ceil(W) || 0 : Math.floor(W)
            },
            p: function(W) {
                return {
                    M: f,
                    y: m,
                    w: c,
                    d: u,
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
          , w = {};
        w[T] = E;
        var L = "$isDayjsObject"
          , C = function(W) {
            return W instanceof F || !(!W || !W[L])
        }
          , O = function W(K, N, Y) {
            var x;
            if (!K)
                return T;
            if (typeof K == "string") {
                var ae = K.toLowerCase();
                w[ae] && (x = ae),
                N && (w[ae] = N,
                x = ae);
                var j = K.split("-");
                if (!x && j.length > 1)
                    return W(j[0])
            } else {
                var ce = K.name;
                w[ce] = K,
                x = ce
            }
            return !Y && x && (T = x),
            x || !Y && T
        }
          , D = function(W, K) {
            if (C(W))
                return W.clone();
            var N = typeof K == "object" ? K : {};
            return N.date = W,
            N.args = arguments,
            new F(N)
        }
          , B = y;
        B.l = O,
        B.i = C,
        B.w = function(W, K) {
            return D(W, {
                locale: K.$L,
                utc: K.$u,
                x: K.$x,
                $offset: K.$offset
            })
        }
        ;
        var F = function() {
            function W(N) {
                this.$L = O(N.locale, null, !0),
                this.parse(N),
                this.$x = this.$x || N.x || {},
                this[L] = !0
            }
            var K = W.prototype;
            return K.parse = function(N) {
                this.$d = function(Y) {
                    var x = Y.date
                      , ae = Y.utc;
                    if (x === null)
                        return new Date(NaN);
                    if (B.u(x))
                        return new Date;
                    if (x instanceof Date)
                        return new Date(x);
                    if (typeof x == "string" && !/Z$/i.test(x)) {
                        var j = x.match(k);
                        if (j) {
                            var ce = j[2] - 1 || 0
                              , ve = (j[7] || "0").substring(0, 3);
                            return ae ? new Date(Date.UTC(j[1], ce, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, ve)) : new Date(j[1],ce,j[3] || 1,j[4] || 0,j[5] || 0,j[6] || 0,ve)
                        }
                    }
                    return new Date(x)
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
                return B
            }
            ,
            K.isValid = function() {
                return this.$d.toString() !== b
            }
            ,
            K.isSame = function(N, Y) {
                var x = D(N);
                return this.startOf(Y) <= x && x <= this.endOf(Y)
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
            K.$g = function(N, Y, x) {
                return B.u(N) ? this[Y] : this.set(x, N)
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
                var x = this
                  , ae = !!B.u(Y) || Y
                  , j = B.p(N)
                  , ce = function(Q, $) {
                    var ye = B.w(x.$u ? Date.UTC(x.$y, $, Q) : new Date(x.$y,$,Q), x);
                    return ae ? ye : ye.endOf(u)
                }
                  , ve = function(Q, $) {
                    return B.w(x.toDate()[Q].apply(x.toDate("s"), (ae ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($)), x)
                }
                  , qe = this.$W
                  , Qe = this.$M
                  , ct = this.$D
                  , et = "set" + (this.$u ? "UTC" : "");
                switch (j) {
                case m:
                    return ae ? ce(1, 0) : ce(31, 11);
                case f:
                    return ae ? ce(1, Qe) : ce(0, Qe + 1);
                case c:
                    var H = this.$locale().weekStart || 0
                      , te = (qe < H ? qe + 7 : qe) - H;
                    return ce(ae ? ct - te : ct + (6 - te), Qe);
                case u:
                case _:
                    return ve(et + "Hours", 0);
                case l:
                    return ve(et + "Minutes", 1);
                case a:
                    return ve(et + "Seconds", 2);
                case s:
                    return ve(et + "Milliseconds", 3);
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
                var x, ae = B.p(N), j = "set" + (this.$u ? "UTC" : ""), ce = (x = {},
                x[u] = j + "Date",
                x[_] = j + "Date",
                x[f] = j + "Month",
                x[m] = j + "FullYear",
                x[l] = j + "Hours",
                x[a] = j + "Minutes",
                x[s] = j + "Seconds",
                x[o] = j + "Milliseconds",
                x)[ae], ve = ae === u ? this.$D + (Y - this.$W) : Y;
                if (ae === f || ae === m) {
                    var qe = this.clone().set(_, 1);
                    qe.$d[ce](ve),
                    qe.init(),
                    this.$d = qe.set(_, Math.min(this.$D, qe.daysInMonth())).$d
                } else
                    ce && this.$d[ce](ve);
                return this.init(),
                this
            }
            ,
            K.set = function(N, Y) {
                return this.clone().$set(N, Y)
            }
            ,
            K.get = function(N) {
                return this[B.p(N)]()
            }
            ,
            K.add = function(N, Y) {
                var x, ae = this;
                N = Number(N);
                var j = B.p(Y)
                  , ce = function(Qe) {
                    var ct = D(ae);
                    return B.w(ct.date(ct.date() + Math.round(Qe * N)), ae)
                };
                if (j === f)
                    return this.set(f, this.$M + N);
                if (j === m)
                    return this.set(m, this.$y + N);
                if (j === u)
                    return ce(1);
                if (j === c)
                    return ce(7);
                var ve = (x = {},
                x[a] = r,
                x[l] = i,
                x[s] = n,
                x)[j] || 1
                  , qe = this.$d.getTime() + N * ve;
                return B.w(qe, this)
            }
            ,
            K.subtract = function(N, Y) {
                return this.add(-1 * N, Y)
            }
            ,
            K.format = function(N) {
                var Y = this
                  , x = this.$locale();
                if (!this.isValid())
                    return x.invalidDate || b;
                var ae = N || "YYYY-MM-DDTHH:mm:ssZ"
                  , j = B.z(this)
                  , ce = this.$H
                  , ve = this.$m
                  , qe = this.$M
                  , Qe = x.weekdays
                  , ct = x.months
                  , et = x.meridiem
                  , H = function($, ye, Ue, h) {
                    return $ && ($[ye] || $(Y, ae)) || Ue[ye].slice(0, h)
                }
                  , te = function($) {
                    return B.s(ce % 12 || 12, $, "0")
                }
                  , Q = et || function($, ye, Ue) {
                    var h = $ < 12 ? "AM" : "PM";
                    return Ue ? h.toLowerCase() : h
                }
                ;
                return ae.replace(g, function($, ye) {
                    return ye || function(Ue) {
                        switch (Ue) {
                        case "YY":
                            return String(Y.$y).slice(-2);
                        case "YYYY":
                            return B.s(Y.$y, 4, "0");
                        case "M":
                            return qe + 1;
                        case "MM":
                            return B.s(qe + 1, 2, "0");
                        case "MMM":
                            return H(x.monthsShort, qe, ct, 3);
                        case "MMMM":
                            return H(ct, qe);
                        case "D":
                            return Y.$D;
                        case "DD":
                            return B.s(Y.$D, 2, "0");
                        case "d":
                            return String(Y.$W);
                        case "dd":
                            return H(x.weekdaysMin, Y.$W, Qe, 2);
                        case "ddd":
                            return H(x.weekdaysShort, Y.$W, Qe, 3);
                        case "dddd":
                            return Qe[Y.$W];
                        case "H":
                            return String(ce);
                        case "HH":
                            return B.s(ce, 2, "0");
                        case "h":
                            return te(1);
                        case "hh":
                            return te(2);
                        case "a":
                            return Q(ce, ve, !0);
                        case "A":
                            return Q(ce, ve, !1);
                        case "m":
                            return String(ve);
                        case "mm":
                            return B.s(ve, 2, "0");
                        case "s":
                            return String(Y.$s);
                        case "ss":
                            return B.s(Y.$s, 2, "0");
                        case "SSS":
                            return B.s(Y.$ms, 3, "0");
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
            K.diff = function(N, Y, x) {
                var ae, j = this, ce = B.p(Y), ve = D(N), qe = (ve.utcOffset() - this.utcOffset()) * r, Qe = this - ve, ct = function() {
                    return B.m(j, ve)
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
                case c:
                    ae = (Qe - qe) / 6048e5;
                    break;
                case u:
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
                return x ? ae : B.a(ae)
            }
            ,
            K.daysInMonth = function() {
                return this.endOf(f).$D
            }
            ,
            K.$locale = function() {
                return w[this.$L]
            }
            ,
            K.locale = function(N, Y) {
                if (!N)
                    return this.$L;
                var x = this.clone()
                  , ae = O(N, Y, !0);
                return ae && (x.$L = ae),
                x
            }
            ,
            K.clone = function() {
                return B.w(this.$d, this)
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
          , Z = F.prototype;
        return D.prototype = Z,
        [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", u], ["$M", f], ["$y", m], ["$D", _]].forEach(function(W) {
            Z[W[1]] = function(K) {
                return this.$g(K, W[0], W[1])
            }
        }),
        D.extend = function(W, K) {
            return W.$i || (W(K, F, D),
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
        D.en = w[T],
        D.Ls = w,
        D.p = {},
        D
    })
}
)(ty);
var Xt = ty.exports;
const Un = Mi(Xt);
var ny = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
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
)(ny);
var g1 = ny.exports;
const y1 = Mi(g1);
var v1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
        function r(l) {
            return l && typeof l == "object" && "default"in l ? l : {
                default: l
            }
        }
        var i = r(n)
          , o = {
            s: "ein paar Sekunden",
            m: ["eine Minute", "einer Minute"],
            mm: "%d Minuten",
            h: ["eine Stunde", "einer Stunde"],
            hh: "%d Stunden",
            d: ["ein Tag", "einem Tag"],
            dd: ["%d Tage", "%d Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: ["%d Monate", "%d Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: ["%d Jahre", "%d Jahren"]
        };
        function s(l, u, c) {
            var f = o[c];
            return Array.isArray(f) && (f = f[u ? 0 : 1]),
            f.replace("%d", l)
        }
        var a = {
            name: "de",
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
            ordinal: function(l) {
                return l + "."
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LTS: "HH:mm:ss",
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s,
                m: s,
                mm: s,
                h: s,
                hh: s,
                d: s,
                dd: s,
                M: s,
                MM: s,
                y: s,
                yy: s
            }
        };
        return i.default.locale(a, null, !0),
        a
    })
}
)(v1);
var _1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
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
)(_1);
var b1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(b1);
var E1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var i = r(n)
          , o = {
            name: "fr",
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function(s) {
                return "" + s + (s === 1 ? "er" : "")
            }
        };
        return i.default.locale(o, null, !0),
        o
    })
}
)(E1);
var T1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(T1);
var k1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(k1);
var S1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(S1);
var w1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
          , u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function c(_, b, k) {
            var g, E;
            return k === "m" ? b ? "минута" : "минуту" : _ + " " + (g = +_,
            E = {
                mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[k].split("_"),
            g % 10 == 1 && g % 100 != 11 ? E[0] : g % 10 >= 2 && g % 10 <= 4 && (g % 100 < 10 || g % 100 >= 20) ? E[1] : E[2])
        }
        var f = function(_, b) {
            return u.test(b) ? o[_.month()] : s[_.month()]
        };
        f.s = s,
        f.f = o;
        var d = function(_, b) {
            return u.test(b) ? a[_.month()] : l[_.month()]
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
                m: c,
                mm: c,
                h: "час",
                hh: c,
                d: "день",
                dd: c,
                M: "месяц",
                MM: c,
                y: "год",
                yy: c
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
)(w1);
var A1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(A1);
var L1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(L1);
var C1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(C1);
var O1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(O1);
var R1 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Xt)
    }
    )(vt, function(n) {
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
)(R1);
var ry = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
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
            function a(u, c, f, d) {
                return o.fromToBase(u, c, f, d)
            }
            i.en.relativeTime = s,
            o.fromToBase = function(u, c, f, d, m) {
                for (var _, b, k, g = f.$locale().relativeTime || s, E = n.thresholds || [{
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
                    T.d && (_ = d ? i(u).diff(f, T.d, !0) : f.diff(u, T.d, !0));
                    var w = (n.rounding || Math.round)(Math.abs(_));
                    if (k = _ > 0,
                    w <= T.r || !T.r) {
                        w <= 1 && y > 0 && (T = E[y - 1]);
                        var L = g[T.l];
                        m && (w = m("" + w)),
                        b = typeof L == "string" ? L.replace("%d", w) : L(w, c, T.l, k);
                        break
                    }
                }
                if (c)
                    return b;
                var C = k ? g.future : g.past;
                return typeof C == "function" ? C(b) : C.replace("%s", b)
            }
            ,
            o.to = function(u, c) {
                return a(u, c, this, !0)
            }
            ,
            o.from = function(u, c) {
                return a(u, c, this)
            }
            ;
            var l = function(u) {
                return u.$u ? i.utc() : i()
            };
            o.toNow = function(u) {
                return this.to(l(this), u)
            }
            ,
            o.fromNow = function(u) {
                return this.from(l(this), u)
            }
        }
    })
}
)(ry);
var I1 = ry.exports;
const P1 = Mi(I1);
var iy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
        var n = "minute"
          , r = /[+-]\d\d(?::?\d\d)?/g
          , i = /([+-]|\d\d)/g;
        return function(o, s, a) {
            var l = s.prototype;
            a.utc = function(b) {
                var k = {
                    date: b,
                    utc: !0,
                    args: arguments
                };
                return new s(k)
            }
            ,
            l.utc = function(b) {
                var k = a(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return b ? k.add(this.utcOffset(), n) : k
            }
            ,
            l.local = function() {
                return a(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            }
            ;
            var u = l.parse;
            l.parse = function(b) {
                b.utc && (this.$u = !0),
                this.$utils().u(b.$offset) || (this.$offset = b.$offset),
                u.call(this, b)
            }
            ;
            var c = l.init;
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
                    c.call(this)
            }
            ;
            var f = l.utcOffset;
            l.utcOffset = function(b, k) {
                var g = this.$utils().u;
                if (g(b))
                    return this.$u ? 0 : g(this.$offset) ? f.call(this) : this.$offset;
                if (typeof b == "string" && (b = function(T) {
                    T === void 0 && (T = "");
                    var w = T.match(r);
                    if (!w)
                        return null;
                    var L = ("" + w[0]).match(i) || ["-", 0, 0]
                      , C = L[0]
                      , O = 60 * +L[1] + +L[2];
                    return O === 0 ? 0 : C === "+" ? O : -O
                }(b),
                b === null))
                    return this;
                var E = Math.abs(b) <= 16 ? 60 * b : b
                  , p = this;
                if (k)
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
                var k = b || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return d.call(this, k)
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
            l.diff = function(b, k, g) {
                if (b && this.$u === b.$u)
                    return _.call(this, b, k, g);
                var E = this.local()
                  , p = a(b).local();
                return _.call(E, p, k, g)
            }
        }
    })
}
)(iy);
var M1 = iy.exports;
const D1 = Mi(M1);
var oy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
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
                  , k = function(g, E) {
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
                return k.formatToParts(b)
            }, u = function(d, m) {
                for (var _ = l(d, m), b = [], k = 0; k < _.length; k += 1) {
                    var g = _[k]
                      , E = g.type
                      , p = g.value
                      , y = n[E];
                    y >= 0 && (b[y] = parseInt(p, 10))
                }
                var T = b[3]
                  , w = T === 24 ? 0 : T
                  , L = b[0] + "-" + b[1] + "-" + b[2] + " " + w + ":" + b[4] + ":" + b[5] + ":000"
                  , C = +d;
                return (s.utc(L).valueOf() - (C -= C % 1e3)) / 6e4
            }, c = o.prototype;
            c.tz = function(d, m) {
                d === void 0 && (d = a);
                var _ = this.utcOffset()
                  , b = this.toDate()
                  , k = b.toLocaleString("en-US", {
                    timeZone: d
                })
                  , g = Math.round((b - new Date(k)) / 1e3 / 60)
                  , E = s(k, {
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
            c.offsetName = function(d) {
                var m = this.$x.$timezone || s.tz.guess()
                  , _ = l(this.valueOf(), m, {
                    timeZoneName: d
                }).find(function(b) {
                    return b.type.toLowerCase() === "timezonename"
                });
                return _ && _.value
            }
            ;
            var f = c.startOf;
            c.startOf = function(d, m) {
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
                  , k = _ || m || a
                  , g = u(+s(), k);
                if (typeof d != "string")
                    return s(d).tz(k);
                var E = function(w, L, C) {
                    var O = w - 60 * L * 1e3
                      , D = u(O, C);
                    if (L === D)
                        return [O, L];
                    var B = u(O -= 60 * (D - L) * 1e3, C);
                    return D === B ? [O, D] : [w - 60 * Math.min(D, B) * 1e3, Math.max(D, B)]
                }(s.utc(d, b).valueOf(), g, k)
                  , p = E[0]
                  , y = E[1]
                  , T = s(p).utcOffset(y);
                return T.$x.$timezone = k,
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
)(oy);
var N1 = oy.exports;
const V1 = Mi(N1);
var sy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(vt, function() {
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
                var u = this.$locale().formats
                  , c = function(f, d) {
                    return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, _, b) {
                        var k = b && b.toUpperCase();
                        return _ || d[b] || n[b] || d[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, E, p) {
                            return E || p.slice(1)
                        })
                    })
                }(l, u === void 0 ? {} : u);
                return a.call(this, c)
            }
        }
    })
}
)(sy);
var F1 = sy.exports;
const x1 = Mi(F1);
Un.extend(y1);
Un.extend(P1);
Un.extend(D1);
Un.extend(V1);
Un.extend(x1);
Un.tz.setDefault("Europe/Moscow");
Un.updateLocale("en");
Un.locale("en");
const U1 = Ft(async e=>e.provide("dayjs", Un))
  , B1 = ["top", "right", "bottom", "left"]
  , hh = ["start", "end"]
  , ph = B1.reduce((e,t)=>e.concat(t, t + "-" + hh[0], t + "-" + hh[1]), [])
  , To = Math.min
  , Vr = Math.max
  , H1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , j1 = {
    start: "end",
    end: "start"
};
function mc(e, t, n) {
    return Vr(e, To(t, n))
}
function $r(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Fn(e) {
    return e.split("-")[0]
}
function yn(e) {
    return e.split("-")[1]
}
function ay(e) {
    return e === "x" ? "y" : "x"
}
function Cu(e) {
    return e === "y" ? "height" : "width"
}
function Ko(e) {
    return ["top", "bottom"].includes(Fn(e)) ? "y" : "x"
}
function Ou(e) {
    return ay(Ko(e))
}
function ly(e, t, n) {
    n === void 0 && (n = !1);
    const r = yn(e)
      , i = Ou(e)
      , o = Cu(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Hs(s)),
    [s, Hs(s)]
}
function K1(e) {
    const t = Hs(e);
    return [Bs(e), t, Bs(t)]
}
function Bs(e) {
    return e.replace(/start|end/g, t=>j1[t])
}
function Y1(e, t, n) {
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
function q1(e, t, n, r) {
    const i = yn(e);
    let o = Y1(Fn(e), n === "start", r);
    return i && (o = o.map(s=>s + "-" + i),
    t && (o = o.concat(o.map(Bs)))),
    o
}
function Hs(e) {
    return e.replace(/left|right|bottom|top/g, t=>H1[t])
}
function W1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function cy(e) {
    return typeof e != "number" ? W1(e) : {
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
function mh(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = Ko(t)
      , s = Ou(t)
      , a = Cu(s)
      , l = Fn(t)
      , u = o === "y"
      , c = r.x + r.width / 2 - i.width / 2
      , f = r.y + r.height / 2 - i.height / 2
      , d = r[a] / 2 - i[a] / 2;
    let m;
    switch (l) {
    case "top":
        m = {
            x: c,
            y: r.y - i.height
        };
        break;
    case "bottom":
        m = {
            x: c,
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
    switch (yn(t)) {
    case "start":
        m[s] -= d * (n && u ? -1 : 1);
        break;
    case "end":
        m[s] += d * (n && u ? -1 : 1);
        break
    }
    return m
}
const G1 = async(e,t,n)=>{
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: f} = mh(u, r, l)
      , d = r
      , m = {}
      , _ = 0;
    for (let b = 0; b < a.length; b++) {
        const {name: k, fn: g} = a[b]
          , {x: E, y: p, data: y, reset: T} = await g({
            x: c,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: i,
            middlewareData: m,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = E ?? c,
        f = p ?? f,
        m = {
            ...m,
            [k]: {
                ...m[k],
                ...y
            }
        },
        T && _ <= 50 && (_++,
        typeof T == "object" && (T.placement && (d = T.placement),
        T.rects && (u = T.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : T.rects),
        {x: c, y: f} = mh(u, d, l)),
        b = -1)
    }
    return {
        x: c,
        y: f,
        placement: d,
        strategy: i,
        middlewareData: m
    }
}
;
async function ba(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = $r(t, e)
      , _ = cy(m)
      , k = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = $i(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(k))) == null || n ? k : k.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
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
const J1 = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = $r(e, t) || {};
        if (u == null)
            return {};
        const f = cy(c)
          , d = {
            x: n,
            y: r
        }
          , m = Ou(i)
          , _ = Cu(m)
          , b = await s.getDimensions(u)
          , k = m === "y"
          , g = k ? "top" : "left"
          , E = k ? "bottom" : "right"
          , p = k ? "clientHeight" : "clientWidth"
          , y = o.reference[_] + o.reference[m] - d[m] - o.floating[_]
          , T = d[m] - o.reference[m]
          , w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let L = w ? w[p] : 0;
        (!L || !await (s.isElement == null ? void 0 : s.isElement(w))) && (L = a.floating[p] || o.floating[_]);
        const C = y / 2 - T / 2
          , O = L / 2 - b[_] / 2 - 1
          , D = To(f[g], O)
          , B = To(f[E], O)
          , F = D
          , Z = L - b[_] - B
          , W = L / 2 - b[_] / 2 + C
          , K = mc(F, W, Z)
          , N = !l.arrow && yn(i) != null && W !== K && o.reference[_] / 2 - (W < F ? D : B) - b[_] / 2 < 0
          , Y = N ? W < F ? W - F : W - Z : 0;
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
function z1(e, t, n) {
    return (e ? [...n.filter(i=>yn(i) === e), ...n.filter(i=>yn(i) !== e)] : n.filter(i=>Fn(i) === i)).filter(i=>e ? yn(i) === e || (t ? Bs(i) !== i : !1) : !0)
}
const Q1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, i;
            const {rects: o, middlewareData: s, placement: a, platform: l, elements: u} = t
              , {crossAxis: c=!1, alignment: f, allowedPlacements: d=ph, autoAlignment: m=!0, ..._} = $r(e, t)
              , b = f !== void 0 || d === ph ? z1(f || null, m, d) : d
              , k = await ba(t, _)
              , g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = b[g];
            if (E == null)
                return {};
            const p = ly(E, o, await (l.isRTL == null ? void 0 : l.isRTL(u.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: b[0]
                    }
                };
            const y = [k[Fn(E)], k[p[0]], k[p[1]]]
              , T = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
                placement: E,
                overflows: y
            }]
              , w = b[g + 1];
            if (w)
                return {
                    data: {
                        index: g + 1,
                        overflows: T
                    },
                    reset: {
                        placement: w
                    }
                };
            const L = T.map(D=>{
                const B = yn(D.placement);
                return [D.placement, B && c ? D.overflows.slice(0, 2).reduce((F,Z)=>F + Z, 0) : D.overflows[0], D.overflows]
            }
            ).sort((D,B)=>D[1] - B[1])
              , O = ((i = L.filter(D=>D[2].slice(0, yn(D[0]) ? 2 : 3).every(B=>B <= 0))[0]) == null ? void 0 : i[0]) || L[0][0];
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
  , X1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: _="none", flipAlignment: b=!0, ...k} = $r(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = Fn(i)
              , E = Fn(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , y = d || (E || !b ? [Hs(a)] : K1(a));
            !d && _ !== "none" && y.push(...q1(a, b, _, p));
            const T = [a, ...y]
              , w = await ba(t, k)
              , L = [];
            let C = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && L.push(w[g]),
            f) {
                const F = ly(i, s, p);
                L.push(w[F[0]], w[F[1]])
            }
            if (C = [...C, {
                placement: i,
                overflows: L
            }],
            !L.every(F=>F <= 0)) {
                var O, D;
                const F = (((O = o.flip) == null ? void 0 : O.index) || 0) + 1
                  , Z = T[F];
                if (Z)
                    return {
                        data: {
                            index: F,
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
                            var B;
                            const K = (B = C.map(N=>[N.placement, N.overflows.filter(Y=>Y > 0).reduce((Y,x)=>Y + x, 0)]).sort((N,Y)=>N[1] - Y[1])[0]) == null ? void 0 : B[0];
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
async function Z1(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = Fn(n)
      , a = yn(n)
      , l = Ko(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = o && l ? -1 : 1
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
        x: m * c,
        y: d * u
    } : {
        x: d * u,
        y: m * c
    }
}
const $1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await Z1(t, e);
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
  , eO = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: a={
                fn: k=>{
                    let {x: g, y: E} = k;
                    return {
                        x: g,
                        y: E
                    }
                }
            }, ...l} = $r(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await ba(t, l)
              , f = Ko(Fn(i))
              , d = ay(f);
            let m = u[d]
              , _ = u[f];
            if (o) {
                const k = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , E = m + c[k]
                  , p = m - c[g];
                m = mc(E, m, p)
            }
            if (s) {
                const k = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , E = _ + c[k]
                  , p = _ - c[g];
                _ = mc(E, _, p)
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
  , tO = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: i, elements: o} = t
              , {apply: s=()=>{}
            , ...a} = $r(e, t)
              , l = await ba(t, a)
              , u = Fn(n)
              , c = yn(n)
              , f = Ko(n) === "y"
              , {width: d, height: m} = r.floating;
            let _, b;
            u === "top" || u === "bottom" ? (_ = u,
            b = c === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (b = u,
            _ = c === "end" ? "top" : "bottom");
            const k = m - l[_]
              , g = d - l[b]
              , E = !t.middlewareData.shift;
            let p = k
              , y = g;
            if (f) {
                const w = d - l.left - l.right;
                y = c || E ? To(g, w) : w
            } else {
                const w = m - l.top - l.bottom;
                p = c || E ? To(k, w) : w
            }
            if (E && !c) {
                const w = Vr(l.left, 0)
                  , L = Vr(l.right, 0)
                  , C = Vr(l.top, 0)
                  , O = Vr(l.bottom, 0);
                f ? y = d - 2 * (w !== 0 || L !== 0 ? w + L : Vr(l.left, l.right)) : p = m - 2 * (C !== 0 || O !== 0 ? C + O : Vr(l.top, l.bottom))
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
function an(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Dn(e) {
    return an(e).getComputedStyle(e)
}
const gh = Math.min
  , eo = Math.max
  , js = Math.round;
function uy(e) {
    const t = Dn(e);
    let n = parseFloat(t.width)
      , r = parseFloat(t.height);
    const i = e.offsetWidth
      , o = e.offsetHeight
      , s = js(n) !== i || js(r) !== o;
    return s && (n = i,
    r = o),
    {
        width: n,
        height: r,
        fallback: s
    }
}
function Tr(e) {
    return dy(e) ? (e.nodeName || "").toLowerCase() : ""
}
let cs;
function fy() {
    if (cs)
        return cs;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (cs = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    cs) : navigator.userAgent
}
function Nn(e) {
    return e instanceof an(e).HTMLElement
}
function vr(e) {
    return e instanceof an(e).Element
}
function dy(e) {
    return e instanceof an(e).Node
}
function yh(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof an(e).ShadowRoot || e instanceof ShadowRoot
}
function Ea(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Dn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function nO(e) {
    return ["table", "td", "th"].includes(Tr(e))
}
function gc(e) {
    const t = /firefox/i.test(fy())
      , n = Dn(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(i=>n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i=>{
        const o = n.contain;
        return o != null && o.includes(i)
    }
    )
}
function hy() {
    return !/^((?!chrome|android).)*safari/i.test(fy())
}
function Ru(e) {
    return ["html", "body", "#document"].includes(Tr(e))
}
function py(e) {
    return vr(e) ? e : e.contextElement
}
const my = {
    x: 1,
    y: 1
};
function mi(e) {
    const t = py(e);
    if (!Nn(t))
        return my;
    const n = t.getBoundingClientRect()
      , {width: r, height: i, fallback: o} = uy(t);
    let s = (o ? js(n.width) : n.width) / r
      , a = (o ? js(n.height) : n.height) / i;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function ko(e, t, n, r) {
    var i, o;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = py(e);
    let l = my;
    t && (r ? vr(r) && (l = mi(r)) : l = mi(e));
    const u = a ? an(a) : window
      , c = !hy() && n;
    let f = (s.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x
      , d = (s.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , _ = s.height / l.y;
    if (a) {
        const b = an(a)
          , k = r && vr(r) ? an(r) : r;
        let g = b.frameElement;
        for (; g && r && k !== b; ) {
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
            g = an(g).frameElement
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
    return ((dy(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Ta(e) {
    return vr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function gy(e) {
    return ko(_r(e)).left + Ta(e).scrollLeft
}
function So(e) {
    if (Tr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || yh(e) && e.host || _r(e);
    return yh(t) ? t.host : t
}
function yy(e) {
    const t = So(e);
    return Ru(t) ? t.ownerDocument.body : Nn(t) && Ea(t) ? t : yy(t)
}
function Ks(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = yy(e)
      , i = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = an(r);
    return i ? t.concat(o, o.visualViewport || [], Ea(r) ? r : []) : t.concat(r, Ks(r))
}
function vh(e, t, n) {
    return t === "viewport" ? $i(function(r, i) {
        const o = an(r)
          , s = _r(r)
          , a = o.visualViewport;
        let l = s.clientWidth
          , u = s.clientHeight
          , c = 0
          , f = 0;
        if (a) {
            l = a.width,
            u = a.height;
            const d = hy();
            (d || !d && i === "fixed") && (c = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: u,
            x: c,
            y: f
        }
    }(e, n)) : vr(t) ? $i(function(r, i) {
        const o = ko(r, !0, i === "fixed")
          , s = o.top + r.clientTop
          , a = o.left + r.clientLeft
          , l = Nn(r) ? mi(r) : {
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
          , o = Ta(r)
          , s = r.ownerDocument.body
          , a = eo(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth)
          , l = eo(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let u = -o.scrollLeft + gy(r);
        const c = -o.scrollTop;
        return Dn(s).direction === "rtl" && (u += eo(i.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: u,
            y: c
        }
    }(_r(e)))
}
function _h(e) {
    return Nn(e) && Dn(e).position !== "fixed" ? e.offsetParent : null
}
function bh(e) {
    const t = an(e);
    let n = _h(e);
    for (; n && nO(n) && Dn(n).position === "static"; )
        n = _h(n);
    return n && (Tr(n) === "html" || Tr(n) === "body" && Dn(n).position === "static" && !gc(n)) ? t : n || function(r) {
        let i = So(r);
        for (; Nn(i) && !Ru(i); ) {
            if (gc(i))
                return i;
            i = So(i)
        }
        return null
    }(e) || t
}
function rO(e, t, n) {
    const r = Nn(t)
      , i = _r(t)
      , o = ko(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((Tr(t) !== "body" || Ea(i)) && (s = Ta(t)),
        Nn(t)) {
            const l = ko(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            i && (a.x = gy(i));
    return {
        x: o.left + s.scrollLeft - a.x,
        y: o.top + s.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}
const iO = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
        const o = n === "clippingAncestors" ? function(u, c) {
            const f = c.get(u);
            if (f)
                return f;
            let d = Ks(u).filter(k=>vr(k) && Tr(k) !== "body")
              , m = null;
            const _ = Dn(u).position === "fixed";
            let b = _ ? So(u) : u;
            for (; vr(b) && !Ru(b); ) {
                const k = Dn(b)
                  , g = gc(b);
                (_ ? g || m : g || k.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = k : d = d.filter(E=>E !== b),
                b = So(b)
            }
            return c.set(u, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...o, r]
          , a = s[0]
          , l = s.reduce((u,c)=>{
            const f = vh(t, c, i);
            return u.top = eo(f.top, u.top),
            u.right = gh(f.right, u.right),
            u.bottom = gh(f.bottom, u.bottom),
            u.left = eo(f.left, u.left),
            u
        }
        , vh(t, a, i));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const i = Nn(n)
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
        if ((i || !i && r !== "fixed") && ((Tr(n) !== "body" || Ea(o)) && (s = Ta(n)),
        Nn(n))) {
            const u = ko(n);
            a = mi(n),
            l.x = u.x + n.clientLeft,
            l.y = u.y + n.clientTop
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
        return Nn(e) ? uy(e) : e.getBoundingClientRect()
    },
    getOffsetParent: bh,
    getDocumentElement: _r,
    getScale: mi,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const i = this.getOffsetParent || bh
          , o = this.getDimensions;
        return {
            reference: rO(t, await i(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await o(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>Dn(e).direction === "rtl"
}
  , oO = (e,t,n)=>{
    const r = new Map
      , i = {
        platform: iO,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return G1(e, t, {
        ...i,
        platform: o
    })
}
;
function vy(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? vy(e[n], t[n]) : e[n] = t[n])
}
const vn = {
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
function wo(e, t) {
    let n = vn.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = vn.themes[n.$extend] || {} : (n = null,
        r = vn[t]) : n = null;
    while (n);
    return r
}
function sO(e) {
    const t = [e];
    let n = vn.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = vn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function Eh(e) {
    const t = [e];
    let n = vn.themes[e] || {};
    do
        n.$extend ? (t.push(n.$extend),
        n = vn.themes[n.$extend] || {}) : n = null;
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
let _y = !1;
typeof window < "u" && typeof navigator < "u" && (_y = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const by = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , Th = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , kh = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
};
function Sh(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1)
}
function rl() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const mn = [];
let Ir = null;
const wh = {};
function Ah(e) {
    let t = wh[e];
    return t || (t = wh[e] = []),
    t
}
let yc = function() {};
typeof window < "u" && (yc = window.Element);
function Be(e) {
    return function(t) {
        return wo(t.theme, e)
    }
}
const il = "__floating-vue__popper"
  , Ey = ()=>xe({
    name: "VPopper",
    provide() {
        return {
            [il]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [il]: {
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
            validator: e=>by.includes(e)
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
            type: [String, Object, yc, Boolean],
            default: Be("container")
        },
        boundary: {
            type: [String, yc],
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
            return (e = this[il]) == null ? void 0 : e.parentPopper
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
            (this.distance || this.skidding) && e.middleware.push($1({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(Q1({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(eO({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(X1({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push(J1({
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
                        let l, u;
                        return o.startsWith("top") || o.startsWith("bottom") ? l = i.reference.width : u = i.reference.height,
                        this.$_innerNode.style[r === "min" ? "minWidth" : r === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null,
                        this.$_innerNode.style[r === "min" ? "minHeight" : r === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null,
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
            e.middleware.push(tO({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: i})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null
                }
            })));
            const n = await oO(this.$_referenceNode, this.$_popperNode, e);
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
            await rl(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...Ks(this.$_referenceNode), ...Ks(this.$_popperNode)], "scroll", ()=>{
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
                for (let n = 0; n < mn.length; n++)
                    t = mn[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            mn.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of Eh(this.theme))
                Ah(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await rl(),
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
            Sh(mn, this),
            mn.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of Eh(this.theme)) {
                const r = Ah(n);
                Sh(r, this),
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
            await rl(),
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
            this.$_registerTriggerListeners(this.$_targetNodes, Th, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], Th, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, kh, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], kh, this.popperTriggers, this.popperHideTriggers, t)
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
                return us(ir, or, o, s, t.left, t.top, t.left, t.bottom) || us(ir, or, o, s, t.left, t.top, t.right, t.top) || us(ir, or, o, s, t.right, t.top, t.right, t.bottom) || us(ir, or, o, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (_y) {
        const e = Li ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>Lh(t, !0), e),
        document.addEventListener("touchend", t=>Ch(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>Lh(e, !1), !0),
        window.addEventListener("click", e=>Ch(e, !1), !0);
    window.addEventListener("resize", lO)
}
function Lh(e, t) {
    if (vn.autoHideOnMousedown)
        Ty(e, t);
    else
        for (let n = 0; n < mn.length; n++) {
            const r = mn[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function Ch(e, t) {
    vn.autoHideOnMousedown || Ty(e, t)
}
function Ty(e, t) {
    const n = {};
    for (let r = mn.length - 1; r >= 0; r--) {
        const i = mn[r];
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
    return n.closeAllPopover || n.closePopover && t || aO(e, n) && !t
}
function aO(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function lO() {
    for (let e = 0; e < mn.length; e++)
        mn[e].$_computePosition()
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
function us(e, t, n, r, i, o, s, a) {
    const l = ((s - i) * (t - o) - (a - o) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t))
      , u = ((n - e) * (t - o) - (r - t) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t));
    return l >= 0 && l <= 1 && u >= 0 && u <= 1
}
const cO = {
    extends: Ey()
}
  , ka = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
;
function uO(e, t, n, r, i, o) {
    return pe(),
    Ge("div", {
        ref: "reference",
        class: Mt(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [Er(e.$slots, "default", cn(zt(e.slotData)))], 2)
}
const fO = ka(cO, [["render", uO]]);
function dO() {
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
let vs;
function vc() {
    vc.init || (vc.init = !0,
    vs = dO() !== -1)
}
var Sa = {
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
        vc(),
        Jt(()=>{
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
        vs && this.$el.appendChild(e),
        e.data = "about:blank",
        vs || this.$el.appendChild(e)
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
            this._resizeObject && this._resizeObject.onload && (!vs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const hO = _0();
y0("data-v-b329ee4c");
const pO = {
    class: "resize-observer",
    tabindex: "-1"
};
v0();
const mO = hO((e,t,n,r,i,o)=>(pe(),
bt("div", pO)));
Sa.render = mO;
Sa.__scopeId = "data-v-b329ee4c";
Sa.__file = "src/components/ResizeObserver.vue";
const ky = (e="theme")=>({
    computed: {
        themeClass() {
            return sO(this[e])
        }
    }
})
  , gO = xe({
    name: "VPopperContent",
    components: {
        ResizeObserver: Sa
    },
    mixins: [ky()],
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
  , yO = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , vO = {
    ref: "inner",
    class: "v-popper__inner"
}
  , _O = me("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , bO = me("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , EO = [_O, bO];
function TO(e, t, n, r, i, o) {
    const s = Wr("ResizeObserver");
    return pe(),
    Ge("div", {
        id: e.popperId,
        ref: "popover",
        class: Mt(["v-popper__popper", [e.themeClass, e.classes.popperClass, {
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
        style: Mn(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = tb(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [me("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), me("div", {
        class: "v-popper__wrapper",
        style: Mn(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [me("div", vO, [e.mounted ? (pe(),
    Ge(mt, {
        key: 0
    }, [me("div", null, [Er(e.$slots, "default")]), e.handleResize ? (pe(),
    bt(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : Wt("", !0)], 64)) : Wt("", !0)], 512), me("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Mn(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, EO, 4)], 4)], 46, yO)
}
const Sy = ka(gO, [["render", TO]])
  , wy = {
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
let _c = function() {};
typeof window < "u" && (_c = window.Element);
const kO = xe({
    name: "VPopperWrapper",
    components: {
        Popper: fO,
        PopperContent: Sy
    },
    mixins: [wy, ky("finalTheme")],
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
            type: [String, Object, _c, Boolean],
            default: void 0
        },
        boundary: {
            type: [String, _c],
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
function SO(e, t, n, r, i, o) {
    const s = Wr("PopperContent")
      , a = Wr("Popper");
    return pe(),
    bt(a, _i({
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
        default: un(({popperId: l, isShown: u, shouldMountContent: c, skipTransition: f, autoHide: d, show: m, hide: _, handleResize: b, onResize: k, classes: g, result: E})=>[Er(e.$slots, "default", {
            shown: u,
            show: m,
            hide: _
        }), $e(s, {
            ref: "popperContent",
            "popper-id": l,
            theme: e.finalTheme,
            shown: u,
            mounted: c,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": b,
            classes: g,
            result: E,
            onHide: _,
            onResize: k
        }, {
            default: un(()=>[Er(e.$slots, "popper", {
                shown: u,
                hide: _
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Iu = ka(kO, [["render", SO]])
  , wO = {
    ...Iu,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , AO = {
    ...Iu,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , LO = {
    ...Iu,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , CO = xe({
    name: "VTooltipDirective",
    components: {
        Popper: Ey(),
        PopperContent: Sy
    },
    mixins: [wy],
    inheritAttrs: !1,
    props: {
        theme: {
            type: String,
            default: "tooltip"
        },
        html: {
            type: Boolean,
            default: e=>wo(e.theme, "html")
        },
        content: {
            type: [String, Number, Function],
            default: null
        },
        loadingContent: {
            type: String,
            default: e=>wo(e.theme, "loadingContent")
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
  , OO = ["innerHTML"]
  , RO = ["textContent"];
function IO(e, t, n, r, i, o) {
    const s = Wr("PopperContent")
      , a = Wr("Popper");
    return pe(),
    bt(a, _i({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: un(({popperId: l, isShown: u, shouldMountContent: c, skipTransition: f, autoHide: d, hide: m, handleResize: _, onResize: b, classes: k, result: g})=>[$e(s, {
            ref: "popperContent",
            class: Mt({
                "v-popper--tooltip-loading": e.loading
            }),
            "popper-id": l,
            theme: e.theme,
            shown: u,
            mounted: c,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": _,
            classes: k,
            result: g,
            onHide: m,
            onResize: b
        }, {
            default: un(()=>[e.html ? (pe(),
            Ge("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, OO)) : (pe(),
            Ge("div", {
                key: 1,
                textContent: en(e.finalContent)
            }, null, 8, RO))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const PO = ka(CO, [["render", IO]])
  , Ay = "v-popper--has-tooltip";
function MO(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of by)
            t[r] && (n = r);
    return n || (n = wo(e.theme || "tooltip", "placement")),
    n
}
function Ly(e, t, n) {
    let r;
    const i = typeof t;
    return i === "string" ? r = {
        content: t
    } : t && i === "object" ? r = t : r = {
        content: !1
    },
    r.placement = MO(r, n),
    r.targetNodes = ()=>[e],
    r.referenceNode = ()=>e,
    r
}
let ol, Ao, DO = 0;
function NO() {
    if (ol)
        return;
    Ao = le([]),
    ol = sm({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: Ao
            }
        },
        render() {
            return this.directives.map(t=>ft(PO, {
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
    ol.mount(e)
}
function VO(e, t, n) {
    NO();
    const r = le(Ly(e, t, n))
      , i = le(!1)
      , o = {
        id: DO++,
        options: r,
        shown: i
    };
    return Ao.value.push(o),
    e.classList && e.classList.add(Ay),
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
function Cy(e) {
    if (e.$_popper) {
        const t = Ao.value.indexOf(e.$_popper.item);
        t !== -1 && Ao.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(Ay)
}
function Rh(e, {value: t, modifiers: n}) {
    const r = Ly(e, t, n);
    if (!r.content || wo(r.theme || "tooltip", "disabled"))
        Cy(e);
    else {
        let i;
        e.$_popper ? (i = e.$_popper,
        i.options.value = r) : i = VO(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? i.show() : i.hide())
    }
}
const FO = {
    beforeMount: Rh,
    updated: Rh,
    beforeUnmount(e) {
        Cy(e)
    }
};
function Ih(e) {
    e.addEventListener("mousedown", Ys),
    e.addEventListener("click", Ys),
    e.addEventListener("touchstart", Oy, Li ? {
        passive: !0
    } : !1)
}
function Ph(e) {
    e.removeEventListener("mousedown", Ys),
    e.removeEventListener("click", Ys),
    e.removeEventListener("touchstart", Oy),
    e.removeEventListener("touchend", Ry),
    e.removeEventListener("touchcancel", Iy)
}
function Ys(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch,
    e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
}
function Oy(e) {
    if (e.changedTouches.length === 1) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = !0;
        const n = e.changedTouches[0];
        t.$_vclosepopover_touchPoint = n,
        t.addEventListener("touchend", Ry),
        t.addEventListener("touchcancel", Iy)
    }
}
function Ry(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function Iy(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const xO = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && Ih(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? Ih(e) : Ph(e))
    },
    beforeUnmount(e) {
        Ph(e)
    }
};
function UO(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    vy(vn, t),
    e.directive("tooltip", FO),
    e.directive("close-popper", xO),
    e.component("VTooltip", LO),
    e.component("VDropdown", wO),
    e.component("VMenu", AO))
}
const BO = {
    version: "5.2.2",
    install: UO,
    options: vn
}
  , HO = Ft(e=>{
    e.vueApp.use(BO)
}
);
function Py(e) {
    if (e == null)
        return 1 / 0;
    if (typeof e == "object")
        for (let t in e)
            e[t] = Py(e[t]);
    return e
}
const jO = Ft(({vueApp: e})=>{
    var i;
    const t = ((i = Jn().public) == null ? void 0 : i.notivue) || {}
      , n = Py(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = AS(n);
    e.use(r)
}
);
function KO(e, {locales: t=[], localeCodes: n=[], baseUrl: r=WL, hooks: i={}, context: o={}}={}) {
    const s = Io()
      , a = e.install;
    return e.install = (l,...u)=>{
        const c = WO(u[0]) ? dt({}, u[0]) : {
            inject: !0
        };
        c.inject == null && (c.inject = !0);
        const f = c.__composerExtend;
        if (c.__composerExtend = b=>{
            const k = Si(e);
            b.locales = ue(()=>k.locales.value),
            b.localeCodes = ue(()=>k.localeCodes.value),
            b.baseUrl = ue(()=>k.baseUrl.value);
            let g;
            return Ze(f) && (g = Reflect.apply(f, c, [b])),
            ()=>{
                g && g()
            }
        }
        ,
        e.mode === "legacy") {
            const b = c.__vueI18nExtend;
            c.__vueI18nExtend = k=>{
                Mh(k, i.onExtendVueI18n);
                let g;
                return Ze(b) && (g = Reflect.apply(b, c, [k])),
                ()=>{
                    g && g()
                }
            }
        }
        u[0] = c,
        Reflect.apply(a, e, [l, ...u]);
        const d = Si(e);
        s.run(()=>{
            YO(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: i,
                context: o
            }),
            e.mode === "legacy" && Ng(e.global) && Mh(e.global, i.onExtendVueI18n)
        }
        );
        const m = l
          , _ = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (_ && qO(_, d, i.onExtendExportedGlobal),
        c.inject) {
            const b = Au(e);
            l.mixin({
                methods: {
                    getRouteBaseName: wi,
                    resolveRoute: rn(_a, b),
                    localePath: rn(va, b),
                    localeRoute: rn(Su, b),
                    localeLocation: rn(pC, b),
                    switchLocalePath: rn(Ai, b),
                    localeHead: rn(Ug, b)
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
function YO(e, t) {
    const {locales: n, localeCodes: r, baseUrl: i, context: o} = t
      , s = le(n)
      , a = le(r)
      , l = le("");
    e.locales = ue(()=>s.value),
    e.localeCodes = ue(()=>a.value),
    e.baseUrl = ue(()=>l.value),
    JL ? je(e.locale, ()=>{
        l.value = nh(i, o)
    }
    , {
        immediate: !0
    }) : l.value = nh(i, o),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function My(e, t, n) {
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
function qO(e, t, n) {
    My(t, e, n)
}
function Mh(e, t) {
    const n = Si(e);
    My(n, e, t)
}
function WO(e) {
    return Fe(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function GO() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = gt
      , n = `(${zr.join("|")})`
      , r = `(?:${e}${t})?`
      , i = new RegExp(`${e}${n}${r}$`,"i")
      , o = fc(zr);
    return a=>{
        if (Fe(a)) {
            if (a.name) {
                const u = (re(a.name) ? a.name : a.name.toString()).match(i);
                if (u && u.length > 1)
                    return u[1]
            } else if (a.path) {
                const l = a.path.match(o);
                if (l && l.length > 1)
                    return l[1]
            }
        } else if (re(a)) {
            const l = a.match(o);
            if (l && l.length > 1)
                return l[1]
        }
        return ""
    }
}
const JO = Ft({
    name: "i18n:plugin",
    parallel: YL,
    async setup(e) {
        let t, n;
        const r = aa()
          , {vueApp: i} = e
          , o = e
          , s = {
            ...gt
        };
        s.baseUrl = IC();
        const a = ([t,n] = In(()=>oC(KL, ne())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = GO()
          , u = p=>p || a.locale || "en-US"
          , c = MC();
        let f = oh(r, l, a.locale, u(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: c
        });
        a.messages = ([t,n] = In(()=>sC(a.messages, uc, {
            localeCodes: zr,
            initialLocale: f,
            lazy: s.lazy,
            defaultLocale: s.defaultLocale,
            fallbackLocale: a.fallbackLocale
        })),
        t = await t,
        n(),
        t),
        f = u(f);
        const d = aL({
            ...a,
            locale: f
        });
        let m = !0;
        const _ = p=>f !== p && m;
        let b = !0;
        const k = ()=>b;
        k() && s.strategy === "no_prefix" && e.hook("app:mounted", async()=>{
            const {locale: p, stat: y, reason: T, from: w} = s.detectBrowserLanguage ? Yg(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: c
            }, f) : Kg;
            TC(d, p),
            b = !1
        }
        ),
        KO(d, {
            locales: s.locales,
            localeCodes: zr,
            baseUrl: s.baseUrl,
            context: o,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = ue(()=>ku.find(y=>y.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async y=>{
                        const T = _(y)
                          , [w] = await ih(y, d, T);
                        w && T && (m = !1);
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
                    p.getBrowserLocale = ()=>jg(),
                    p.getLocaleCookie = ()=>DC(c),
                    p.setLocaleCookie = y=>NC(c, y),
                    p.onBeforeLanguageSwitch = (y,T,w,L)=>e.callHook("i18n:beforeLocaleSwitch", {
                        oldLocale: y,
                        newLocale: T,
                        initialSetup: w,
                        context: L
                    }),
                    p.onLanguageSwitched = (y,T)=>e.callHook("i18n:localeSwitched", {
                        oldLocale: y,
                        newLocale: T
                    }),
                    p.finalizePendingLocaleChange = async()=>{
                        d.__pendingLocale && (Vg(d, d.__pendingLocale),
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
                                return (y,T,w,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, T, w, L])
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
                                return (y,T,w,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, T, w, L])
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
        CC(o, d);
        let E = 0;
        OE("locale-changing", async(p,y)=>{
            let T, w;
            const L = oh(p, l, a.locale, ()=>ya(d) || u(s.defaultLocale), {
                ssg: k() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: c
            })
              , C = _(L)
              , [O] = ([T,w] = In(()=>ih(L, d, C)),
            T = await T,
            w(),
            T);
            O && C && (m = !1);
            const D = ([T,w] = In(()=>o.runWithContext(()=>sh({
                route: {
                    to: p,
                    from: y
                },
                targetLocale: L,
                routeLocaleGetter: s.strategy === "no_prefix" ? ()=>L : l,
                calledWithRouting: !0
            }))),
            T = await T,
            w(),
            T);
            return E++,
            [T,w] = In(()=>o.runWithContext(async()=>lh({
                i18n: d,
                redirectPath: D,
                locale: L,
                route: p
            }))),
            T = await T,
            w(),
            T
        }
        , {
            global: !0
        })
    }
});
function Dy(e) {
    return Po() ? (Xs(e),
    !0) : !1
}
function Pu(e) {
    return typeof e == "function" ? e() : G(e)
}
const zO = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const QO = e=>e != null
  , XO = Object.prototype.toString
  , qs = e=>XO.call(e) === "[object Object]"
  , ro = ()=>{}
;
function Ny(e) {
    return e || kn()
}
function ZO(...e) {
    if (e.length !== 1)
        return oi(...e);
    const t = e[0];
    return typeof t == "function" ? dr(bp(()=>({
        get: t,
        set: ro
    }))) : le(t)
}
function $O(e, t=!0, n) {
    Ny() ? Vt(e, n) : t ? e() : Jt(e)
}
function eR(e, t) {
    Ny(t) && Ri(e, t)
}
function io(e) {
    var t;
    const n = Pu(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Vy = zO ? window : void 0;
function Ut(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = Vy) : [t,n,r,i] = e,
    !t)
        return ro;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = ()=>{
        o.forEach(c=>c()),
        o.length = 0
    }
      , a = (c,f,d,m)=>(c.addEventListener(f, d, m),
    ()=>c.removeEventListener(f, d, m))
      , l = je(()=>[io(t), Pu(i)], ([c,f])=>{
        if (s(),
        !c)
            return;
        const d = qs(f) ? {
            ...f
        } : f;
        o.push(...n.flatMap(m=>r.map(_=>a(c, m, _, d))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , u = ()=>{
        l(),
        s()
    }
    ;
    return Dy(u),
    u
}
function tR() {
    const e = le(!1)
      , t = kn();
    return t && Vt(()=>{
        e.value = !0
    }
    , t),
    e
}
function nR(e) {
    const t = tR();
    return ue(()=>(t.value,
    !!e()))
}
function rR(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=Vy, immediate: a=!0} = n
      , l = nR(()=>s && "IntersectionObserver"in s)
      , u = ue(()=>{
        const _ = Pu(e);
        return (Array.isArray(_) ? _ : [_]).map(io).filter(QO)
    }
    );
    let c = ro;
    const f = le(a)
      , d = l.value ? je(()=>[u.value, io(r), f.value], ([_,b])=>{
        if (c(),
        !f.value || !_.length)
            return;
        const k = new IntersectionObserver(t,{
            root: io(b),
            rootMargin: i,
            threshold: o
        });
        _.forEach(g=>g && k.observe(g)),
        c = ()=>{
            k.disconnect(),
            c = ro
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : ro
      , m = ()=>{
        c(),
        d(),
        f.value = !1
    }
    ;
    return Dy(m),
    {
        isSupported: l,
        isActive: f,
        pause() {
            c(),
            f.value = !1
        },
        resume() {
            f.value = !0
        },
        stop: m
    }
}
function $M(e, t={}) {
    const n = ZO(e)
      , {threshold: r=50, onSwipe: i, onSwipeEnd: o, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = St({
        x: 0,
        y: 0
    })
      , u = (L,C)=>{
        l.x = L,
        l.y = C
    }
      , c = St({
        x: 0,
        y: 0
    })
      , f = (L,C)=>{
        c.x = L,
        c.y = C
    }
      , d = ue(()=>l.x - c.x)
      , m = ue(()=>l.y - c.y)
      , {max: _, abs: b} = Math
      , k = ue(()=>_(b(d.value), b(m.value)) >= r)
      , g = le(!1)
      , E = le(!1)
      , p = ue(()=>k.value ? b(d.value) > b(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , y = L=>{
        var C, O, D;
        const B = L.buttons === 0
          , F = L.buttons === 1;
        return (D = (O = (C = t.pointerTypes) == null ? void 0 : C.includes(L.pointerType)) != null ? O : B || F) != null ? D : !0
    }
      , T = [Ut(e, "pointerdown", L=>{
        if (!y(L))
            return;
        E.value = !0;
        const C = L.target;
        C == null || C.setPointerCapture(L.pointerId);
        const {clientX: O, clientY: D} = L;
        u(O, D),
        f(O, D),
        s == null || s(L)
    }
    ), Ut(e, "pointermove", L=>{
        if (!y(L) || !E.value)
            return;
        const {clientX: C, clientY: O} = L;
        f(C, O),
        !g.value && k.value && (g.value = !0),
        g.value && (i == null || i(L))
    }
    ), Ut(e, "pointerup", L=>{
        y(L) && (g.value && (o == null || o(L, p.value)),
        E.value = !1,
        g.value = !1)
    }
    )];
    $O(()=>{
        var L, C, O, D, B, F, Z, W;
        (C = (L = n.value) == null ? void 0 : L.style) == null || C.setProperty("touch-action", "none"),
        a && ((D = (O = n.value) == null ? void 0 : O.style) == null || D.setProperty("-webkit-user-select", "none"),
        (F = (B = n.value) == null ? void 0 : B.style) == null || F.setProperty("-ms-user-select", "none"),
        (W = (Z = n.value) == null ? void 0 : Z.style) == null || W.setProperty("user-select", "none"))
    }
    );
    const w = ()=>T.forEach(L=>L());
    return {
        isSwiping: dr(g),
        direction: dr(p),
        posStart: dr(l),
        posEnd: dr(c),
        distanceX: d,
        distanceY: m,
        stop: w
    }
}
const Fy = 1 / 60 * 1e3
  , iR = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , xy = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(iR()), Fy);
function oR(e) {
    let t = []
      , n = []
      , r = 0
      , i = !1
      , o = !1;
    const s = new WeakSet
      , a = {
        schedule: (l,u=!1,c=!1)=>{
            const f = c && i
              , d = f ? t : n;
            return u && s.add(l),
            d.indexOf(l) === -1 && (d.push(l),
            f && i && (r = t.length)),
            l
        }
        ,
        cancel: l=>{
            const u = n.indexOf(l);
            u !== -1 && n.splice(u, 1),
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
                for (let u = 0; u < r; u++) {
                    const c = t[u];
                    c(l),
                    s.has(c) && (a.schedule(c),
                    e())
                }
            i = !1,
            o && (o = !1,
            a.process(l))
        }
    };
    return a
}
const sR = 40;
let bc = !0
  , Lo = !1
  , Ec = !1;
const gi = {
    delta: 0,
    timestamp: 0
}
  , Yo = ["read", "update", "preRender", "render", "postRender"]
  , wa = Yo.reduce((e,t)=>(e[t] = oR(()=>Lo = !0),
e), {})
  , Tc = Yo.reduce((e,t)=>{
    const n = wa[t];
    return e[t] = (r,i=!1,o=!1)=>(Lo || cR(),
    n.schedule(r, i, o)),
    e
}
, {})
  , aR = Yo.reduce((e,t)=>(e[t] = wa[t].cancel,
e), {});
Yo.reduce((e,t)=>(e[t] = ()=>wa[t].process(gi),
e), {});
const lR = e=>wa[e].process(gi)
  , Uy = e=>{
    Lo = !1,
    gi.delta = bc ? Fy : Math.max(Math.min(e - gi.timestamp, sR), 1),
    gi.timestamp = e,
    Ec = !0,
    Yo.forEach(lR),
    Ec = !1,
    Lo && (bc = !1,
    xy(Uy))
}
  , cR = ()=>{
    Lo = !0,
    bc = !0,
    Ec || xy(Uy)
}
  , By = ()=>gi;
function Hy(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Dh = function() {};
const kc = (e,t,n)=>Math.min(Math.max(n, e), t)
  , sl = .001
  , uR = .01
  , fR = 10
  , dR = .05
  , hR = 1;
function pR({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = kc(dR, hR, s),
    e = kc(uR, fR, e / 1e3),
    s < 1 ? (i = u=>{
        const c = u * s
          , f = c * e
          , d = c - n
          , m = Sc(u, s)
          , _ = Math.exp(-f);
        return sl - d / m * _
    }
    ,
    o = u=>{
        const f = u * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(u, 2) * e
          , _ = Math.exp(-f)
          , b = Sc(Math.pow(u, 2), s);
        return (-i(u) + sl > 0 ? -1 : 1) * ((d - m) * _) / b
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -sl + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const a = 5 / e
      , l = gR(i, o, a);
    if (e = e * 1e3,
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const mR = 12;
function gR(e, t, n) {
    let r = n;
    for (let i = 1; i < mR; i++)
        r = r - e(r) / t(r);
    return r
}
function Sc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const yR = ["duration", "bounce"]
  , vR = ["stiffness", "damping", "mass"];
function Nh(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function _R(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Nh(e, vR) && Nh(e, yR)) {
        const n = pR(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Mu(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = Hy(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = _R(o)
      , m = Vh
      , _ = Vh;
    function b() {
        const k = c ? -(c / 1e3) : 0
          , g = n - t
          , E = l / (2 * Math.sqrt(a * u))
          , p = Math.sqrt(a / u) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const y = Sc(p, E);
            m = T=>{
                const w = Math.exp(-E * p * T);
                return n - w * ((k + E * p * g) / y * Math.sin(y * T) + g * Math.cos(y * T))
            }
            ,
            _ = T=>{
                const w = Math.exp(-E * p * T);
                return E * p * w * (Math.sin(y * T) * (k + E * p * g) / y + g * Math.cos(y * T)) - w * (Math.cos(y * T) * (k + E * p * g) - y * g * Math.sin(y * T))
            }
        } else if (E === 1)
            m = y=>n - Math.exp(-p * y) * (g + (k + p * g) * y);
        else {
            const y = p * Math.sqrt(E * E - 1);
            m = T=>{
                const w = Math.exp(-E * p * T)
                  , L = Math.min(y * T, 300);
                return n - w * ((k + E * p * g) * Math.sinh(L) + y * g * Math.cosh(L)) / y
            }
        }
    }
    return b(),
    {
        next: k=>{
            const g = m(k);
            if (d)
                s.done = k >= f;
            else {
                const E = _(k) * 1e3
                  , p = Math.abs(E) <= r
                  , y = Math.abs(n - g) <= i;
                s.done = p && y
            }
            return s.value = s.done ? n : g,
            s
        }
        ,
        flipTarget: ()=>{
            c = -c,
            [t,n] = [n, t],
            b()
        }
    }
}
Mu.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const Vh = e=>0
  , jy = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Du = (e,t,n)=>-n * e + n * t + e
  , Ky = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , oo = e=>e % 1 ? Number(e.toFixed(5)) : e
  , Co = /(-)?([\d]*\.?[\d])+/g
  , wc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , bR = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function qo(e) {
    return typeof e == "string"
}
const Wo = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , so = Object.assign(Object.assign({}, Wo), {
    transform: Ky(0, 1)
})
  , fs = Object.assign(Object.assign({}, Wo), {
    default: 1
})
  , Nu = e=>({
    test: t=>qo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Pr = Nu("deg")
  , ao = Nu("%")
  , _e = Nu("px")
  , Fh = Object.assign(Object.assign({}, ao), {
    parse: e=>ao.parse(e) / 100,
    transform: e=>ao.transform(e * 100)
})
  , Vu = (e,t)=>n=>!!(qo(n) && bR.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Yy = (e,t,n)=>r=>{
    if (!qo(r))
        return r;
    const [i,o,s,a] = r.match(Co);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Ur = {
    test: Vu("hsl", "hue"),
    parse: Yy("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + ao.transform(oo(t)) + ", " + ao.transform(oo(n)) + ", " + oo(so.transform(r)) + ")"
}
  , ER = Ky(0, 255)
  , al = Object.assign(Object.assign({}, Wo), {
    transform: e=>Math.round(ER(e))
})
  , pr = {
    test: Vu("rgb", "red"),
    parse: Yy("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + al.transform(e) + ", " + al.transform(t) + ", " + al.transform(n) + ", " + oo(so.transform(r)) + ")"
};
function TR(e) {
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
    test: Vu("#"),
    parse: TR,
    transform: pr.transform
}
  , Ht = {
    test: e=>pr.test(e) || Ac.test(e) || Ur.test(e),
    parse: e=>pr.test(e) ? pr.parse(e) : Ur.test(e) ? Ur.parse(e) : Ac.parse(e),
    transform: e=>qo(e) ? e : e.hasOwnProperty("red") ? pr.transform(e) : Ur.transform(e)
}
  , qy = "${c}"
  , Wy = "${n}";
function kR(e) {
    var t, n, r, i;
    return isNaN(e) && qo(e) && ((n = (t = e.match(Co)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(wc)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function Gy(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(wc);
    r && (n = r.length,
    e = e.replace(wc, qy),
    t.push(...r.map(Ht.parse)));
    const i = e.match(Co);
    return i && (e = e.replace(Co, Wy),
    t.push(...i.map(Wo.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Jy(e) {
    return Gy(e).values
}
function zy(e) {
    const {values: t, numColors: n, tokenised: r} = Gy(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let a = 0; a < i; a++)
            s = s.replace(a < n ? qy : Wy, a < n ? Ht.transform(o[a]) : oo(o[a]));
        return s
    }
}
const SR = e=>typeof e == "number" ? 0 : e;
function wR(e) {
    const t = Jy(e);
    return zy(e)(t.map(SR))
}
const Go = {
    test: kR,
    parse: Jy,
    createTransformer: zy,
    getAnimatableNone: wR
}
  , AR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function LR(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Co) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = AR.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const CR = /([a-z-]*)\(.*?\)/g
  , Lc = Object.assign(Object.assign({}, Go), {
    getAnimatableNone: e=>{
        const t = e.match(CR);
        return t ? t.map(LR).join(" ") : e
    }
});
function ll(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function xh({hue: e, saturation: t, lightness: n, alpha: r}) {
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
        i = ll(l, a, e + 1 / 3),
        o = ll(l, a, e),
        s = ll(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const OR = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , RR = [Ac, pr, Ur]
  , Uh = e=>RR.find(t=>t.test(e))
  , Qy = (e,t)=>{
    let n = Uh(e)
      , r = Uh(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === Ur && (i = xh(i),
    n = pr),
    r === Ur && (o = xh(o),
    r = pr);
    const s = Object.assign({}, i);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = OR(i[l], o[l], a));
        return s.alpha = Du(i.alpha, o.alpha, a),
        n.transform(s)
    }
}
  , IR = e=>typeof e == "number"
  , PR = (e,t)=>n=>t(e(n))
  , Xy = (...e)=>e.reduce(PR);
function Zy(e, t) {
    return IR(e) ? n=>Du(e, t, n) : Ht.test(e) ? Qy(e, t) : ev(e, t)
}
const $y = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>Zy(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , MR = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Zy(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function Bh(e) {
    const t = Go.parse(e)
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
const ev = (e,t)=>{
    const n = Go.createTransformer(t)
      , r = Bh(e)
      , i = Bh(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? Xy($y(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , DR = (e,t)=>n=>Du(e, t, n);
function NR(e) {
    if (typeof e == "number")
        return DR;
    if (typeof e == "string")
        return Ht.test(e) ? Qy : ev;
    if (Array.isArray(e))
        return $y;
    if (typeof e == "object")
        return MR
}
function VR(e, t, n) {
    const r = []
      , i = n || NR(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = Xy(l, a)
        }
        r.push(a)
    }
    return r
}
function FR([e,t], [n]) {
    return r=>n(jy(e, t, r))
}
function xR(e, t) {
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
        const a = jy(e[o], e[o + 1], i);
        return t[o](a)
    }
}
function tv(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Dh(o === t.length),
    Dh(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = VR(t, r, i)
      , a = o === 2 ? FR(e, s) : xR(e, s);
    return n ? l=>a(kc(e[0], e[o - 1], l)) : a
}
const Aa = e=>t=>1 - e(1 - t)
  , Fu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , UR = e=>t=>Math.pow(t, e)
  , nv = e=>t=>t * t * ((e + 1) * t - e)
  , BR = e=>{
    const t = nv(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , rv = 1.525
  , HR = 4 / 11
  , jR = 8 / 11
  , KR = 9 / 10
  , iv = e=>e
  , xu = UR(2)
  , YR = Aa(xu)
  , ov = Fu(xu)
  , sv = e=>1 - Math.sin(Math.acos(e))
  , av = Aa(sv)
  , qR = Fu(av)
  , Uu = nv(rv)
  , WR = Aa(Uu)
  , GR = Fu(Uu)
  , JR = BR(rv)
  , zR = 4356 / 361
  , QR = 35442 / 1805
  , XR = 16061 / 1805
  , Ws = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < HR ? 7.5625 * t : e < jR ? 9.075 * t - 9.9 * e + 3.4 : e < KR ? zR * t - QR * e + XR : 10.8 * e * e - 20.52 * e + 10.72
}
  , ZR = Aa(Ws)
  , $R = e=>e < .5 ? .5 * (1 - Ws(1 - e * 2)) : .5 * Ws(e * 2 - 1) + .5;
function eI(e, t) {
    return e.map(()=>t || ov).splice(0, e.length - 1)
}
function tI(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function nI(e, t) {
    return e.map(n=>n * t)
}
function _s({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = nI(r && r.length === s.length ? r : tI(s), i);
    function l() {
        return tv(a, s, {
            ease: Array.isArray(n) ? n : eI(s, n)
        })
    }
    let u = l();
    return {
        next: c=>(o.value = u(c),
        o.done = c >= i,
        o),
        flipTarget: ()=>{
            s.reverse(),
            u = l()
        }
    }
}
function rI({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
    const s = {
        done: !1,
        value: t
    };
    let a = n * e;
    const l = t + a
      , u = o === void 0 ? l : o(l);
    return u !== l && (a = u - t),
    {
        next: c=>{
            const f = -a * Math.exp(-c / r);
            return s.done = !(f > i || f < -i),
            s.value = s.done ? u : u + f,
            s
        }
        ,
        flipTarget: ()=>{}
    }
}
const Hh = {
    keyframes: _s,
    spring: Mu,
    decay: rI
};
function iI(e) {
    if (Array.isArray(e.to))
        return _s;
    if (Hh[e.type])
        return Hh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? _s : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Mu : _s
}
function lv(e, t, n=0) {
    return e - t - n
}
function oI(e, t, n=0, r=!0) {
    return r ? lv(t + -e, t, n) : t - (e - t) + n
}
function sI(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const aI = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>Tc.update(t, !0),
        stop: ()=>aR.update(t)
    }
}
;
function cv(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=aI, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: u=0, onPlay: c, onStop: f, onComplete: d, onRepeat: m, onUpdate: _} = e, b = Hy(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: k} = b, g, E = 0, p = b.duration, y, T = !1, w = !0, L;
    const C = iI(b);
    !((n = (t = C).needsInterpolation) === null || n === void 0) && n.call(t, r, k) && (L = tv([0, 100], [r, k], {
        clamp: !1
    }),
    r = 0,
    k = 100);
    const O = C(Object.assign(Object.assign({}, b), {
        from: r,
        to: k
    }));
    function D() {
        E++,
        l === "reverse" ? (w = E % 2 === 0,
        s = oI(s, p, u, w)) : (s = lv(s, p, u),
        l === "mirror" && O.flipTarget()),
        T = !1,
        m && m()
    }
    function B() {
        g.stop(),
        d && d()
    }
    function F(W) {
        if (w || (W = -W),
        s += W,
        !T) {
            const K = O.next(Math.max(0, s));
            y = K.value,
            L && (y = L(y)),
            T = w ? K.done : s <= 0
        }
        _ == null || _(y),
        T && (E === 0 && (p ?? (p = s)),
        E < a ? sI(s, p, u, w) && D() : B())
    }
    function Z() {
        c == null || c(),
        g = o(F),
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
function uv(e, t) {
    return t ? e * (1e3 / t) : 0
}
function lI({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: u, driver: c, onUpdate: f, onComplete: d, onStop: m}) {
    let _;
    function b(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function k(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function g(p) {
        _ == null || _.stop(),
        _ = cv(Object.assign(Object.assign({}, p), {
            driver: c,
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
            to: k(e)
        });
    else {
        let p = i * t + e;
        typeof u < "u" && (p = u(p));
        const y = k(p)
          , T = y === n ? -1 : 1;
        let w, L;
        const C = O=>{
            w = L,
            L = O,
            t = uv(O - w, By().delta),
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
            modifyTarget: u,
            onUpdate: b(p) ? C : void 0
        })
    }
    return {
        stop: ()=>_ == null ? void 0 : _.stop()
    }
}
const fv = (e,t)=>1 - 3 * t + 3 * e
  , dv = (e,t)=>3 * t - 6 * e
  , hv = e=>3 * e
  , Gs = (e,t,n)=>((fv(t, n) * e + dv(t, n)) * e + hv(t)) * e
  , pv = (e,t,n)=>3 * fv(t, n) * e * e + 2 * dv(t, n) * e + hv(t)
  , cI = 1e-7
  , uI = 10;
function fI(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Gs(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > cI && ++a < uI);
    return s
}
const dI = 8
  , hI = .001;
function pI(e, t, n, r) {
    for (let i = 0; i < dI; ++i) {
        const o = pv(t, n, r);
        if (o === 0)
            return t;
        const s = Gs(t, n, r) - e;
        t -= s / o
    }
    return t
}
const bs = 11
  , ds = 1 / (bs - 1);
function mI(e, t, n, r) {
    if (e === t && n === r)
        return iv;
    const i = new Float32Array(bs);
    for (let s = 0; s < bs; ++s)
        i[s] = Gs(s * ds, e, n);
    function o(s) {
        let a = 0
          , l = 1;
        const u = bs - 1;
        for (; l !== u && i[l] <= s; ++l)
            a += ds;
        --l;
        const c = (s - i[l]) / (i[l + 1] - i[l])
          , f = a + c * ds
          , d = pv(f, e, n);
        return d >= hI ? pI(s, f, e, n) : d === 0 ? f : fI(s, a, a + ds, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Gs(o(s), t, r)
}
const cl = {};
var gI = Object.defineProperty
  , yI = (e,t,n)=>t in e ? gI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , vI = (e,t,n)=>(yI(e, typeof t != "symbol" ? t + "" : t, n),
n);
class _I {
    constructor() {
        vI(this, "subscriptions", new Set)
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
var bI = Object.defineProperty
  , EI = (e,t,n)=>t in e ? bI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Ln = (e,t,n)=>(EI(e, typeof t != "symbol" ? t + "" : t, n),
n);
function jh(e) {
    return !isNaN(parseFloat(e))
}
class TI {
    constructor(t) {
        Ln(this, "current"),
        Ln(this, "prev"),
        Ln(this, "timeDelta", 0),
        Ln(this, "lastUpdated", 0),
        Ln(this, "updateSubscribers", new _I),
        Ln(this, "stopAnimation"),
        Ln(this, "canTrackVelocity", !1),
        Ln(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: i} = By();
            this.lastUpdated !== i && (this.timeDelta = r,
            this.lastUpdated = i),
            Tc.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        Ln(this, "scheduleVelocityCheck", ()=>Tc.postRender(this.velocityCheck)),
        Ln(this, "velocityCheck", ({timestamp: n})=>{
            this.canTrackVelocity || (this.canTrackVelocity = jh(this.current)),
            n !== this.lastUpdated && (this.prev = this.current)
        }
        ),
        this.prev = this.current = t,
        this.canTrackVelocity = jh(this.current)
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
        return this.canTrackVelocity ? uv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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
function kI(e) {
    return new TI(e)
}
const {isArray: SI} = Array;
function wI() {
    const e = le({})
      , t = r=>{
        const i = o=>{
            e.value[o] && (e.value[o].stop(),
            e.value[o].destroy(),
            delete e.value[o])
        }
        ;
        r ? SI(r) ? r.forEach(i) : i(r) : Object.keys(e.value).forEach(i)
    }
      , n = (r,i,o)=>{
        if (e.value[r])
            return e.value[r];
        const s = kI(i);
        return s.onChange(a=>o[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return eR(t),
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
function ul(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function LI(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 100 : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function fl() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function CI(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const Kh = {
    default: LI,
    x: Mr,
    y: Mr,
    z: Mr,
    rotate: Mr,
    rotateX: Mr,
    rotateY: Mr,
    rotateZ: Mr,
    scaleX: ul,
    scaleY: ul,
    scale: ul,
    backgroundColor: fl,
    color: fl,
    opacity: fl
};
function mv(e, t) {
    let n;
    return AI(t) ? n = CI : n = Kh[e] || Kh.default,
    {
        to: t,
        ...n(t)
    }
}
const Yh = {
    ...Wo,
    transform: Math.round
}
  , gv = {
    color: Ht,
    backgroundColor: Ht,
    outlineColor: Ht,
    fill: Ht,
    stroke: Ht,
    borderColor: Ht,
    borderTopColor: Ht,
    borderRightColor: Ht,
    borderBottomColor: Ht,
    borderLeftColor: Ht,
    borderWidth: _e,
    borderTopWidth: _e,
    borderRightWidth: _e,
    borderBottomWidth: _e,
    borderLeftWidth: _e,
    borderRadius: _e,
    radius: _e,
    borderTopLeftRadius: _e,
    borderTopRightRadius: _e,
    borderBottomRightRadius: _e,
    borderBottomLeftRadius: _e,
    width: _e,
    maxWidth: _e,
    height: _e,
    maxHeight: _e,
    size: _e,
    top: _e,
    right: _e,
    bottom: _e,
    left: _e,
    padding: _e,
    paddingTop: _e,
    paddingRight: _e,
    paddingBottom: _e,
    paddingLeft: _e,
    margin: _e,
    marginTop: _e,
    marginRight: _e,
    marginBottom: _e,
    marginLeft: _e,
    rotate: Pr,
    rotateX: Pr,
    rotateY: Pr,
    rotateZ: Pr,
    scale: fs,
    scaleX: fs,
    scaleY: fs,
    scaleZ: fs,
    skew: Pr,
    skewX: Pr,
    skewY: Pr,
    distance: _e,
    translateX: _e,
    translateY: _e,
    translateZ: _e,
    x: _e,
    y: _e,
    z: _e,
    perspective: _e,
    transformPerspective: _e,
    opacity: so,
    originX: Fh,
    originY: Fh,
    originZ: _e,
    zIndex: Yh,
    filter: Lc,
    WebkitFilter: Lc,
    fillOpacity: so,
    strokeOpacity: so,
    numOctaves: Yh
}
  , Bu = e=>gv[e];
function yv(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function OI(e, t) {
    let n = Bu(e);
    return n !== Lc && (n = Go),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const RI = {
    linear: iv,
    easeIn: xu,
    easeInOut: ov,
    easeOut: YR,
    circIn: sv,
    circInOut: qR,
    circOut: av,
    backIn: Uu,
    backInOut: GR,
    backOut: WR,
    anticipate: JR,
    bounceIn: ZR,
    bounceInOut: $R,
    bounceOut: Ws
};
function qh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,i] = e;
        return mI(t, n, r, i)
    } else if (typeof e == "string")
        return RI[e];
    return e
}
function II(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function Wh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Go.test(t) && !t.startsWith("url("))
}
function PI(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function MI({ease: e, times: t, delay: n, ...r}) {
    const i = {
        ...r
    };
    return t && (i.offset = t),
    e && (i.ease = II(e) ? e.map(qh) : qh(e)),
    n && (i.elapsed = -n),
    i
}
function DI(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    PI(t),
    NI(e) || (e = {
        ...e,
        ...mv(n, t.to)
    }),
    {
        ...t,
        ...MI(e)
    }
}
function NI({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: i, ...o}) {
    return !!Object.keys(o).length
}
function VI(e, t) {
    return e[t] || e.default || e
}
function FI(e, t, n, r, i) {
    const o = VI(r, e);
    let s = o.from === null || o.from === void 0 ? t.get() : o.from;
    const a = Wh(e, n);
    s === "none" && a && typeof n == "string" && (s = OI(e, n));
    const l = Wh(e, s);
    function u(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return o.type === "inertia" || o.type === "decay" ? lI({
            ...d,
            ...o
        }) : cv({
            ...DI(o, d, e),
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
    function c(f) {
        return t.set(n),
        r.onComplete && r.onComplete(),
        i && i(),
        f && f(),
        {
            stop: ()=>{}
        }
    }
    return !l || !a || o.type === !1 ? c : u
}
function xI() {
    const {motionValues: e, stop: t, get: n} = wI();
    return {
        motionValues: e,
        stop: t,
        push: (i,o,s,a={},l)=>{
            const u = s[i]
              , c = n(i, u, s);
            if (a && a.immediate) {
                c.set(o);
                return
            }
            const f = FI(i, c, o, a, l);
            c.start(f)
        }
    }
}
function UI(e, t={}, {motionValues: n, push: r, stop: i}=xI()) {
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
            return new Promise(_=>r(d, m, e, f.transition || mv(d, f[d]), _))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = qs(f) ? f : a(f);
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
const Hu = typeof window < "u"
  , BI = ()=>Hu && window.onpointerdown === null
  , HI = ()=>Hu && window.ontouchstart === null
  , jI = ()=>Hu && window.onmousedown === null;
function KI({target: e, state: t, variants: n, apply: r}) {
    const i = G(n)
      , o = le(!1)
      , s = le(!1)
      , a = le(!1)
      , l = ue(()=>{
        let c = [];
        return i && (i.hovered && (c = [...c, ...Object.keys(i.hovered)]),
        i.tapped && (c = [...c, ...Object.keys(i.tapped)]),
        i.focused && (c = [...c, ...Object.keys(i.focused)])),
        c
    }
    )
      , u = ue(()=>{
        const c = {};
        Object.assign(c, t.value),
        o.value && i.hovered && Object.assign(c, i.hovered),
        s.value && i.tapped && Object.assign(c, i.tapped),
        a.value && i.focused && Object.assign(c, i.focused);
        for (const f in c)
            l.value.includes(f) || delete c[f];
        return c
    }
    );
    i.hovered && (Ut(e, "mouseenter", ()=>o.value = !0),
    Ut(e, "mouseleave", ()=>{
        o.value = !1,
        s.value = !1
    }
    ),
    Ut(e, "mouseout", ()=>{
        o.value = !1,
        s.value = !1
    }
    )),
    i.tapped && (jI() && (Ut(e, "mousedown", ()=>s.value = !0),
    Ut(e, "mouseup", ()=>s.value = !1)),
    BI() && (Ut(e, "pointerdown", ()=>s.value = !0),
    Ut(e, "pointerup", ()=>s.value = !1)),
    HI() && (Ut(e, "touchstart", ()=>s.value = !0),
    Ut(e, "touchend", ()=>s.value = !1))),
    i.focused && (Ut(e, "focus", ()=>a.value = !0),
    Ut(e, "blur", ()=>a.value = !1)),
    je(u, r)
}
function YI({set: e, target: t, variants: n, variant: r}) {
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
function qI({state: e, apply: t}) {
    je(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function vv({target: e, variants: t, variant: n}) {
    const r = G(t);
    r && (r.visible || r.visibleOnce) && rR(e, ([{isIntersecting: i}])=>{
        r.visible ? i ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (i && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function WI(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && YI(e),
    t.syncVariants && qI(e),
    t.visibilityHooks && vv(e),
    t.eventListeners && KI(e)
}
function _v(e={}) {
    const t = St({
        ...e
    })
      , n = le({});
    return je(t, ()=>{
        const r = {};
        for (const [i,o] of Object.entries(t)) {
            const s = Bu(i)
              , a = yv(o, s);
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
function ju(e, t) {
    je(()=>io(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const GI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function bv(e={}, t=!0) {
    const n = St({
        ...e
    })
      , r = le("");
    return je(n, i=>{
        let o = ""
          , s = !1;
        if (t && (i.x || i.y || i.z)) {
            const a = [i.x || 0, i.y || 0, i.z || 0].map(_e.transform).join(",");
            o += `translate3d(${a}) `,
            s = !0
        }
        for (const [a,l] of Object.entries(i)) {
            if (t && (a === "x" || a === "y" || a === "z"))
                continue;
            const u = Bu(a)
              , c = yv(l, u);
            o += `${GI[a] || a}(${c}) `
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
const JI = ["", "X", "Y", "Z"]
  , zI = ["perspective", "translate", "scale", "rotate", "skew"]
  , Ev = ["transformPerspective", "x", "y", "z"];
zI.forEach(e=>{
    JI.forEach(t=>{
        const n = e + t;
        Ev.push(n)
    }
    )
}
);
const QI = new Set(Ev);
function Ku(e) {
    return QI.has(e)
}
const XI = new Set(["originX", "originY", "originZ"]);
function Tv(e) {
    return XI.has(e)
}
function ZI(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,i])=>{
        Ku(r) || Tv(r) ? t[r] = i : n[r] = i
    }
    ),
    {
        transform: t,
        style: n
    }
}
function kv(e) {
    const {transform: t, style: n} = ZI(e)
      , {transform: r} = bv(t)
      , {style: i} = _v(n);
    return r.value && (i.value.transform = r.value),
    i.value
}
function $I(e, t) {
    let n, r;
    const {state: i, style: o} = _v();
    return ju(e, s=>{
        r = s;
        for (const a of Object.keys(gv))
            s.style[a] === null || s.style[a] === "" || Ku(a) || Tv(a) || (i[a] = s.style[a]);
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
function eP(e) {
    const t = e.trim().split(/\) |\)/);
    if (t.length === 1)
        return {};
    const n = r=>r.endsWith("px") || r.endsWith("deg") ? parseFloat(r) : isNaN(Number(r)) ? Number(r) : r;
    return t.reduce((r,i)=>{
        if (!i)
            return r;
        const [o,s] = i.split("(")
          , l = s.split(",").map(c=>n(c.endsWith(")") ? c.replace(")", "") : c.trim()))
          , u = l.length === 1 ? l[0] : l;
        return {
            ...r,
            [o]: u
        }
    }
    , {})
}
function tP(e, t) {
    Object.entries(eP(t)).forEach(([n,r])=>{
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
function nP(e, t) {
    let n, r;
    const {state: i, transform: o} = bv();
    return ju(e, s=>{
        r = s,
        s.style.transform && tP(i, s.style.transform),
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
function rP(e, t) {
    const n = St({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: i} = $I(e, r)
      , {transform: o} = nP(e, r);
    return je(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const u = Ku(a) ? o : i;
            u[a] && u[a] === l || (u[a] = l)
        }
        )
    }
    , {
        immediate: !0,
        deep: !0
    }),
    ju(e, ()=>t && r(t)),
    {
        motionProperties: n,
        style: i,
        transform: o
    }
}
function iP(e={}) {
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
function Sv(e, t={}, n) {
    const {motionProperties: r} = rP(e)
      , {variant: i, state: o} = iP(t)
      , s = UI(r, t)
      , a = {
        target: e,
        variant: i,
        variants: t,
        state: o,
        motionProperties: r,
        ...s
    };
    return WI(a, n),
    a
}
const oP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function sP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && qs(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    oP.forEach(r=>{
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
        if (n && n[r] && qs(n[r])) {
            const i = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = i
        }
    }
    ))
}
function dl(e) {
    return {
        created: (r,i,o)=>{
            const s = i.value && typeof i.value == "string" ? i.value : o.key;
            s && cl[s] && cl[s].stop();
            const a = le(e || {});
            typeof i.value == "object" && (a.value = i.value),
            sP(o, a);
            const u = Sv(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = u,
            s && (cl[s] = u)
        }
        ,
        mounted: (r,i,o)=>{
            r.motionInstance && vv(r.motionInstance)
        }
        ,
        getSSRProps(r, i) {
            let {initial: o} = r.value || i && (i == null ? void 0 : i.props) || {};
            o = G(o);
            const s = su((e == null ? void 0 : e.initial) || {}, o || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: kv(s)
            }
        }
    }
}
const aP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , lP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , cP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , uP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , fP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}
  , dP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visibleOnce: {
        scale: 1,
        opacity: 1
    }
}
  , hP = {
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
  , pP = {
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
  , mP = {
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
  , gP = {
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
  , yP = {
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
  , vP = {
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
  , _P = {
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
  , bP = {
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
  , EP = {
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
  , TP = {
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
  , kP = {
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
  , SP = {
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
  , wP = {
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
  , LP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , CP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , OP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , RP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , IP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , PP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , MP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , DP = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , NP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , VP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , Cc = {
    __proto__: null,
    fade: aP,
    fadeVisible: lP,
    fadeVisibleOnce: cP,
    pop: uP,
    popVisible: fP,
    popVisibleOnce: dP,
    rollBottom: TP,
    rollLeft: hP,
    rollRight: gP,
    rollTop: _P,
    rollVisibleBottom: kP,
    rollVisibleLeft: pP,
    rollVisibleOnceBottom: SP,
    rollVisibleOnceLeft: mP,
    rollVisibleOnceRight: vP,
    rollVisibleOnceTop: EP,
    rollVisibleRight: yP,
    rollVisibleTop: bP,
    slideBottom: DP,
    slideLeft: wP,
    slideRight: CP,
    slideTop: IP,
    slideVisibleBottom: NP,
    slideVisibleLeft: AP,
    slideVisibleOnceBottom: VP,
    slideVisibleOnceLeft: LP,
    slideVisibleOnceRight: RP,
    slideVisibleOnceTop: MP,
    slideVisibleRight: OP,
    slideVisibleTop: PP
}
  , FP = xe({
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
        const t = J0()
          , n = St({});
        if (!e.is && !t.default)
            return ()=>ft("div", {});
        const r = ue(()=>{
            let l;
            return e.preset && (l = Cc[e.preset]),
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
            return typeof s.value == "string" && !Vv(l) && (l = Wr(l)),
            l
        }
        );
        if (((a = process == null ? void 0 : process.env) == null ? void 0 : a.NODE_ENV) === "development" || process != null && process.dev) {
            const l = u=>{
                var c;
                (c = u.variants) != null && c.initial && u.set("initial"),
                setTimeout(()=>{
                    var f, d, m;
                    (f = u.variants) != null && f.enter && u.apply("enter"),
                    (d = u.variants) != null && d.visible && u.apply("visible"),
                    (m = u.variants) != null && m.visibleOnce && u.apply("visibleOnce")
                }
                , 10)
            }
            ;
            Qc(()=>Object.entries(n).forEach(([u,c])=>l(c)))
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
        const i = kv(t.initial || {})
          , o = (l,u)=>(l.props || (l.props = {}),
        l.props.style = i,
        l.props.onVnodeMounted = ({el: c})=>{
            const f = Sv(c, t);
            n[u] = f
        }
        ,
        l);
        if (r) {
            const l = ft(r, void 0, e);
            return o(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,u)=>o(l, u))
    }
});
function xP(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, i=>`-${i}`).toLowerCase().replace(/\s+/g, "-").replace(r, i=>n.charAt(t.indexOf(i))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const UP = {
    install(e, t) {
        if (e.directive("motion", dl()),
        e.component("Motion", FP),
        !t || t && !t.excludePresets)
            for (const n in Cc) {
                const r = Cc[n];
                e.directive(`motion-${xP(n)}`, dl(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, dl(r))
            }
    }
}
  , BP = Ft(e=>{
    const t = Jn();
    e.vueApp.use(UP, t.public.motion)
}
)
  , HP = Ft({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Qt()
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
            c1({
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
function jP(e) {
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
const KP = Ft(()=>{
    const e = jP();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , YP = [jT, YT, o1, a1, l1, h1, p1, m1, U1, HO, jO, JO, BP, HP, KP]
  , qP = xe({
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
        return Kr(Fo, Oi(r)),
        ()=>ft(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , WP = xe({
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
        const r = ne()
          , i = le()
          , o = kt(Fo, null);
        let s;
        n({
            pageRef: i
        });
        const a = kt(km, null);
        let l;
        const u = r.deferHydration();
        if (r.isHydrating) {
            const c = r.hooks.hookOnce("app:error", u);
            Qt().beforeEach(c)
        }
        return e.pageKey && je(()=>e.pageKey, (c,f)=>{
            c !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>ft(eg, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: c=>{
                const f = JP(o, c.route, c.Component)
                  , d = o && o.matched.length === c.route.matched.length;
                if (!c.Component) {
                    if (l && !d)
                        return l;
                    u();
                    return
                }
                if (l && a && !a.isCurrent(c.route))
                    return l;
                if (f && o && (!a || a != null && a.isCurrent(o)))
                    return d ? l : null;
                const m = zl(c, e.pageKey);
                !r.isHydrating && !zP(o, c.route, c.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const _ = !!(e.transition ?? c.route.meta.pageTransition ?? ql)
                  , b = _ && GP([e.transition, c.route.meta.pageTransition, ql, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", c.Component)
                    }
                }].filter(Boolean))
                  , k = e.keepalive ?? c.route.meta.keepalive ?? DT;
                return l = tg(Do, _ && b, zk(k, ft(Gc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", c.Component),
                    onResolve: ()=>{
                        Jt(()=>r.callHook("page:finish", c.Component).then(()=>r.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: ()=>{
                        const g = ft(qP, {
                            key: m || void 0,
                            vnode: c.Component,
                            route: c.route,
                            renderKey: m || void 0,
                            trackRootNodes: _,
                            vnodeRef: i
                        });
                        return k && (g.type.name = c.Component.type.name || c.Component.type.__name || "RouteProvider"),
                        g
                    }
                }))).default(),
                l
            }
        })
    }
});
function GP(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? du(n.onAfterLeave) : void 0
    }));
    return su(...t)
}
function JP(e, t, n) {
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
    ) || n && zl({
        route: t,
        Component: n
    }) !== zl({
        route: e,
        Component: n
    })
}
function zP(e, t, n) {
    return e ? t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const QP = xe({
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
  , XP = xe({
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
        const n = ne()
          , r = kt(Fo)
          , i = r === aa() ? Gk() : r
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
            Qt().beforeEach(l)
        }
        return ()=>{
            const l = o.value && o.value in hr
              , u = i.meta.layoutTransition ?? MT;
            return tg(Do, l && u, {
                default: ()=>ft(Gc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        Jt(a)
                    }
                }, {
                    default: ()=>ft(ZP, {
                        layoutProps: _i(t.attrs, {
                            ref: s
                        }),
                        key: o.value || void 0,
                        name: o.value,
                        shouldProvide: !e.name,
                        hasTransition: !!u
                    }, t.slots)
                })
            }).default()
        }
    }
})
  , ZP = xe({
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
        return e.shouldProvide && Kr(km, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, i;
            return !n || typeof n == "string" && !(n in hr) ? (i = (r = t.slots).default) == null ? void 0 : i.call(r) : ft(QP, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , $P = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , eM = {};
function tM(e, t) {
    const n = WP
      , r = XP;
    return pe(),
    bt(r, null, {
        default: un(()=>[$e(n)]),
        _: 1
    })
}
const nM = $P(eM, [["render", tM]])
  , rM = ["innerHTML"]
  , iM = xe({
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
          , o = r.name && ([t,n] = Q0(()=>{
            var s;
            return (s = i == null ? void 0 : i[r.name]) == null ? void 0 : s.call(i)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>G(o) ? (pe(),
        Ge("div", {
            key: 0,
            class: "icon",
            innerHTML: G(o)
        }, null, 8, rM)) : Wt("", !0)
    }
})
  , oM = {
    class: "is-token"
}
  , sM = ["srcset", "alt"]
  , aM = ["src", "alt"]
  , lM = xe({
    __name: "Token",
    setup(e) {
        return (t,n)=>(pe(),
        Ge("picture", oM, [me("source", {
            srcset: G(lc).TOKEN_WEBP,
            type: "image/webp",
            alt: G($t).GAME_NAME
        }, null, 8, sM), me("img", {
            class: "img-responsive",
            src: G(lc).TOKEN,
            alt: G($t).GAME_NAME
        }, null, 8, aM)]))
    }
})
  , Gh = ey({
    componentName: "NuxtLinkLocale"
})
  , cM = xe({
    name: "NuxtLinkLocale",
    props: {
        ...Gh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = qg()
          , r = ue(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , i = ue(()=>{
            if (e.external || e.target && e.target !== "_self")
                return !0;
            const s = e.to ?? e.href;
            return typeof s == "object" ? !1 : s === "" || s == null || xn(s, {
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
        return ()=>ft(Gh, o(), t.default)
    }
});
function uM() {
    return Un
}
const fM = {
    class: "ln"
}
  , dM = {
    class: "ln-header"
}
  , hM = {
    class: "ln-header-left"
}
  , pM = {
    class: "ln-header-social"
}
  , mM = ["href"]
  , gM = ["href"]
  , yM = ["innerHTML"]
  , vM = {
    class: "ln-header-center"
}
  , _M = {
    class: "ln-header-center-logo"
}
  , bM = {
    class: "ln-header-right"
}
  , EM = {
    class: "button"
}
  , TM = ["innerHTML"]
  , kM = me("span", null, "coming soon", -1)
  , SM = {
    class: "ln-content"
}
  , wM = {
    key: 0
}
  , AM = {
    class: "is-small-text"
}
  , LM = {
    key: 1,
    class: "is-small-text"
}
  , CM = {
    key: 2,
    class: "is-small-text"
}
  , OM = {
    class: "ln-content-button"
}
  , RM = ["innerHTML"]
  , IM = me("div", {
    class: "ln-bottom"
}, null, -1)
  , PM = xe({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var s;
        const t = Gt()
          , n = e;
        CT({
            title: `${((s = n.error) == null ? void 0 : s.statusCode) ?? 500} - ${$t.GAME_NAME}`
        });
        const r = le("")
          , i = uM()
          , o = le(i.tz.guess());
        return Vt(()=>{
            r.value = navigator.userAgent,
            setTimeout(()=>{
                var a;
                Ne().trackEvent(`error_${((a = n.error) == null ? void 0 : a.statusCode) ?? 500}`, {
                    timezone: o.value,
                    userAgent: r.value
                })
            }
            , 1e3)
        }
        ),
        (a,l)=>{
            var d, m, _;
            const u = iM
              , c = lM
              , f = cM;
            return pe(),
            Ge("main", fM, [me("div", dM, [me("div", hM, [me("div", pM, [me("a", {
                class: "is-x",
                href: G(t).link_twitter,
                target: "_blank"
            }, [$e(u, {
                name: "ln-x"
            })], 8, mM), me("a", {
                class: "is-telegram",
                href: G(t).link_telegram,
                target: "_blank"
            }, [$e(u, {
                name: "ln-telegram"
            })], 8, gM), me("p", {
                innerHTML: a.$t("landing.join_us")
            }, null, 8, yM)])]), me("div", vM, [me("div", _M, [$e(c)]), me("p", null, en(G($t).GAME_NAME), 1)]), me("div", bM, [me("button", EM, [me("p", {
                innerHTML: a.$t("landing.whitepaper")
            }, null, 8, TM), $e(u, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), kM])])]), me("div", SM, [me("h1", null, en(e.error.statusCode ?? 500), 1), (d = e.error) != null && d.statusMessage ? (pe(),
            Ge("p", wM, "Status: " + en(((m = e.error) == null ? void 0 : m.statusMessage) ?? ""), 1)) : Wt("", !0), me("p", AM, en((_ = e.error) == null ? void 0 : _.toJSON()), 1), G(r) ? (pe(),
            Ge("p", LM, "User Agent: " + en(G(r)), 1)) : Wt("", !0), G(o) ? (pe(),
            Ge("p", CM, "TimeZone: " + en(G(o)), 1)) : Wt("", !0), me("div", OM, [$e(f, {
                class: "button",
                to: G(Ho).LANDING
            }, {
                default: un(()=>[me("span", {
                    innerHTML: a.$t("buttons.home")
                }, null, 8, RM)]),
                _: 1
            }, 8, ["to"])])]), IM])
        }
    }
})
  , Jh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = ne()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            Qt().beforeEach(a)
        }
        const i = !1;
        Kr(Fo, aa()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const o = la();
        Vp((a,l,u)=>{
            if (n.hooks.callHook("vue:error", a, l, u).catch(c=>console.error("[nuxt] Error in `vue:error` hook", c)),
            PE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>si(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(pe(),
        bt(Gc, {
            onResolve: G(r)
        }, {
            default: un(()=>[G(o) ? (pe(),
            bt(G(PM), {
                key: 0,
                error: G(o)
            }, null, 8, ["error"])) : G(s) ? (pe(),
            bt(G(t), {
                key: 1,
                context: G(s)
            }, null, 8, ["context"])) : G(i) ? (pe(),
            bt(_l(G(i)), {
                key: 2
            })) : (pe(),
            bt(G(nM), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let zh;
{
    let e;
    zh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? ib(Jh) : sm(Jh)
          , i = lE({
            vueApp: r
        });
        async function o(l) {
            await i.callHook("app:error", l),
            i.payload.error = i.payload.error || ca(l)
        }
        r.config.errorHandler = o;
        try {
            await uE(i, YP)
        } catch (l) {
            o(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(VT),
            await i.hooks.callHook("app:mounted", r),
            await Jt()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = zh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {Sn as $, DL as A, MM as B, DM as C, Mt as D, W0 as E, mt as F, lM as G, wL as H, SL as I, qg as J, At as K, xo as L, RL as M, KM as N, $P as O, cc as P, xC as Q, cM as R, uM as S, $t as T, Ho as U, VM as V, AL as W, YM as X, qM as Y, IL as Z, iM as _, Ge as a, ze as a0, Eo as a1, Dt as a2, Zp as a3, Dg as a4, WM as a5, GM as a6, Mn as a7, un as a8, FM as a9, CT as aA, Mm as aB, Ri as aC, $M as aD, Do as aE, _l as aF, _i as aG, Sv as aH, aa as aI, HM as aJ, UL as aK, tt as aL, WP as aM, UM as aN, QM as aO, jM as aP, BM as aQ, JM as aR, lt as aa, xM as ab, nl as ac, tl as ad, PL as ae, ML as af, S as ag, OL as ah, Q0 as ai, CL as aj, LL as ak, NL as al, Wr as am, St as an, Kr as ao, Qc as ap, je as aq, Jt as ar, ft as as, j0 as at, VL as au, zM as av, Er as aw, lc as ax, Jn as ay, NM as az, G as b, ue as c, xe as d, me as e, vt as f, Mi as g, ZM as h, Zg as i, Ot as j, ma as k, $e as l, bt as m, gn as n, pe as o, ne as p, Gt as q, le as r, Vt as s, Tn as t, Ne as u, en as v, ht as w, Wt as x, XM as y, Lt as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["https://hamsterkombatgame.io/_nuxt/airdrop.D3Qssl9r.js", "https://hamsterkombatgame.io/_nuxt/airdrop.nplKRXXP.js", "https://hamsterkombatgame.io/_nuxt/Preloader.vue.ktRvO8Bk.js", "https://hamsterkombatgame.io/_nuxt/boost.CkdjthWW.js", "https://hamsterkombatgame.io/_nuxt/BalanceLarge.vue.BEAeSoNp.js", "https://hamsterkombatgame.io/_nuxt/Price.vue.B_QE1PiJ.js", "https://hamsterkombatgame.io/_nuxt/earn.Bg-sGWi4.js", "https://hamsterkombatgame.io/_nuxt/Image.vue.CKbTUCsH.js", "https://hamsterkombatgame.io/_nuxt/attraction.DkfC9kqJ.js", "https://hamsterkombatgame.io/_nuxt/friends.BjRCg0mE.js", "https://hamsterkombatgame.io/_nuxt/index.D11DBXTy.js", "https://hamsterkombatgame.io/_nuxt/navigation.CfH4kJ-6.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.DAL7liEO.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.vkSr05gD.css", "https://hamsterkombatgame.io/_nuxt/navigation.Bw5XmvsK.css", "https://hamsterkombatgame.io/_nuxt/Earn.vue.IKNnoufp.js", "https://hamsterkombatgame.io/_nuxt/image.vue.SSdQsNMc.js", "https://hamsterkombatgame.io/_nuxt/Hamster.vue.Zw-EqXqs.js", "https://hamsterkombatgame.io/_nuxt/MiniGameLose.vue.Dq9HA1jf.js", "https://hamsterkombatgame.io/_nuxt/index.Cnfd7Xtm.js", "https://hamsterkombatgame.io/_nuxt/mine.qKfm5EJT.js", "https://hamsterkombatgame.io/_nuxt/playground.kw0lyiEy.js", "https://hamsterkombatgame.io/_nuxt/bingx.BVHpadxt.js", "https://hamsterkombatgame.io/_nuxt/exchange.CY47OHBS.js", "https://hamsterkombatgame.io/_nuxt/index.CmQbjkDu.js", "https://hamsterkombatgame.io/_nuxt/achievements.Dj52Hx0N.js", "https://hamsterkombatgame.io/_nuxt/AchievementStat.vue.C97fSbtX.js", "https://hamsterkombatgame.io/_nuxt/Circles.vue.CxSlAqs-.js", "https://hamsterkombatgame.io/_nuxt/index.BNFdvCL5.js", "https://hamsterkombatgame.io/_nuxt/index.Ba-REQfg.js", "https://hamsterkombatgame.io/_nuxt/LandingHeader.vue.CY1gwhZT.js", "https://hamsterkombatgame.io/_nuxt/privacy-policy.V9oZK0QE.js", "https://hamsterkombatgame.io/_nuxt/default.3YqYo4Mg.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
