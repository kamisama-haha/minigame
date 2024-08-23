const ABSOLUTE_PATH = 'https://hamsterkombatgame.io/_nuxt/';

/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zs(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const it = {}
  , li = []
  , sn = ()=>{}
  , Lv = ()=>!1
  , Ro = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Rc = e=>e.startsWith("onUpdate:")
  , bt = Object.assign
  , Ic = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Cv = Object.prototype.hasOwnProperty
  , qe = (e,t)=>Cv.call(e, t)
  , de = Array.isArray
  , ci = e=>Io(e) === "[object Map]"
  , Zh = e=>Io(e) === "[object Set]"
  , Ov = e=>Io(e) === "[object RegExp]"
  , ye = e=>typeof e == "function"
  , st = e=>typeof e == "string"
  , Oi = e=>typeof e == "symbol"
  , rt = e=>e !== null && typeof e == "object"
  , Pc = e=>(rt(e) || ye(e)) && ye(e.then) && ye(e.catch)
  , $h = Object.prototype.toString
  , Io = e=>$h.call(e)
  , Rv = e=>Io(e).slice(8, -1)
  , ep = e=>Io(e) === "[object Object]"
  , Mc = e=>st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , ui = zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Qs = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Iv = /-(\w)/g
  , Fn = Qs(e=>e.replace(Iv, (t,n)=>n ? n.toUpperCase() : ""))
  , Pv = /\B([A-Z])/g
  , Xr = Qs(e=>e.replace(Pv, "-$1").toLowerCase())
  , Xs = Qs(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Oa = Qs(e=>e ? `on${Xs(e)}` : "")
  , Er = (e,t)=>!Object.is(e, t)
  , fi = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , Ts = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , pl = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , tp = e=>{
    const t = st(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Wu;
const np = ()=>Wu || (Wu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dn(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = st(r) ? Vv(r) : Dn(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (st(e) || rt(e))
        return e
}
const Mv = /;(?![^(]*\))/g
  , Dv = /:([^]+)/
  , Nv = /\/\*[^]*?\*\//g;
function Vv(e) {
    const t = {};
    return e.replace(Nv, "").split(Mv).forEach(n=>{
        if (n) {
            const r = n.split(Dv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Nt(e) {
    let t = "";
    if (st(e))
        t = e;
    else if (de(e))
        for (let n = 0; n < e.length; n++) {
            const r = Nt(e[n]);
            r && (t += r + " ")
        }
    else if (rt(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function un(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !st(t) && (e.class = Nt(t)),
    n && (e.style = Dn(n)),
    e
}
const Fv = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , Bv = zs(Fv)
  , Uv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , xv = zs(Uv);
function rp(e) {
    return !!e || e === ""
}
const tn = e=>st(e) ? e : e == null ? "" : de(e) || rt(e) && (e.toString === $h || !ye(e.toString)) ? JSON.stringify(e, ip, 2) : String(e)
  , ip = (e,t)=>t && t.__v_isRef ? ip(e, t.value) : ci(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,i],o)=>(n[Ra(r, o) + " =>"] = i,
    n), {})
} : Zh(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Ra(n))
} : Oi(t) ? Ra(t) : rt(t) && !de(t) && !ep(t) ? String(t) : t
  , Ra = (e,t="")=>{
    var n;
    return Oi(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Gt;
class op {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Gt,
        !t && Gt && (this.index = (Gt.scopes || (Gt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Gt;
            try {
                return Gt = this,
                t()
            } finally {
                Gt = n
            }
        }
    }
    on() {
        Gt = this
    }
    off() {
        Gt = this.parent
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
function Po(e) {
    return new op(e)
}
function Hv(e, t=Gt) {
    t && t.active && t.effects.push(e)
}
function Mo() {
    return Gt
}
function Zs(e) {
    Gt && Gt.cleanups.push(e)
}
let Hr;
class Dc {
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
        Hv(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Zr();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (jv(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            $r()
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
        let t = gr
          , n = Hr;
        try {
            return gr = !0,
            Hr = this,
            this._runnings++,
            Ju(this),
            this.fn()
        } finally {
            zu(this),
            this._runnings--,
            Hr = n,
            gr = t
        }
    }
    stop() {
        var t;
        this.active && (Ju(this),
        zu(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function jv(e) {
    return e.value
}
function Ju(e) {
    e._trackId++,
    e._depsLength = 0
}
function zu(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            sp(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function sp(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let gr = !0
  , ml = 0;
const ap = [];
function Zr() {
    ap.push(gr),
    gr = !1
}
function $r() {
    const e = ap.pop();
    gr = e === void 0 ? !0 : e
}
function Nc() {
    ml++
}
function Vc() {
    for (ml--; !ml && gl.length; )
        gl.shift()()
}
function lp(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && sp(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const gl = [];
function cp(e, t, n) {
    Nc();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && gl.push(r.scheduler)))
    }
    Vc()
}
const up = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , ks = new WeakMap
  , jr = Symbol("")
  , yl = Symbol("");
function Kt(e, t, n) {
    if (gr && Hr) {
        let r = ks.get(e);
        r || ks.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = up(()=>r.delete(n))),
        lp(Hr, i)
    }
}
function Gn(e, t, n, r, i, o) {
    const s = ks.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && de(e)) {
        const l = Number(r);
        s.forEach((u,c)=>{
            (c === "length" || !Oi(c) && c >= l) && a.push(u)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            de(e) ? Mc(n) && a.push(s.get("length")) : (a.push(s.get(jr)),
            ci(e) && a.push(s.get(yl)));
            break;
        case "delete":
            de(e) || (a.push(s.get(jr)),
            ci(e) && a.push(s.get(yl)));
            break;
        case "set":
            ci(e) && a.push(s.get(jr));
            break
        }
    Nc();
    for (const l of a)
        l && cp(l, 4);
    Vc()
}
function Kv(e, t) {
    var n;
    return (n = ks.get(e)) == null ? void 0 : n.get(t)
}
const Yv = zs("__proto__,__v_isRef,__isVue")
  , fp = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Oi))
  , Qu = qv();
function qv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = Fe(this);
            for (let o = 0, s = this.length; o < s; o++)
                Kt(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(Fe)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            Zr(),
            Nc();
            const r = Fe(this)[t].apply(this, n);
            return Vc(),
            $r(),
            r
        }
    }
    ),
    e
}
function Gv(e) {
    const t = Fe(this);
    return Kt(t, "has", e),
    t.hasOwnProperty(e)
}
class dp {
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
            return r === (i ? o ? o0 : gp : o ? mp : pp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = de(t);
        if (!i) {
            if (s && qe(Qu, n))
                return Reflect.get(Qu, n, r);
            if (n === "hasOwnProperty")
                return Gv
        }
        const a = Reflect.get(t, n, r);
        return (Oi(n) ? fp.has(n) : Yv(n)) || (i || Kt(t, "get", n),
        o) ? a : ct(a) ? s && Mc(n) ? a : a.value : rt(a) ? i ? hr(a) : At(a) : a
    }
}
class hp extends dp {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Gr(o);
            if (!Ss(r) && !Gr(r) && (o = Fe(o),
            r = Fe(r)),
            !de(t) && ct(o) && !ct(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const s = de(t) && Mc(n) ? Number(n) < t.length : qe(t, n)
          , a = Reflect.set(t, n, r, i);
        return t === Fe(i) && (s ? Er(r, o) && Gn(t, "set", n, r) : Gn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = qe(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && Gn(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Oi(n) || !fp.has(n)) && Kt(t, "has", n),
        r
    }
    ownKeys(t) {
        return Kt(t, "iterate", de(t) ? "length" : jr),
        Reflect.ownKeys(t)
    }
}
class Wv extends dp {
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
const Jv = new hp
  , zv = new Wv
  , Qv = new hp(!0)
  , Fc = e=>e
  , $s = e=>Reflect.getPrototypeOf(e);
function zo(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = Fe(e)
      , o = Fe(t);
    n || (Er(t, o) && Kt(i, "get", t),
    Kt(i, "get", o));
    const {has: s} = $s(i)
      , a = r ? Fc : n ? xc : co;
    if (s.call(i, t))
        return a(e.get(t));
    if (s.call(i, o))
        return a(e.get(o));
    e !== i && e.get(t)
}
function Qo(e, t=!1) {
    const n = this.__v_raw
      , r = Fe(n)
      , i = Fe(e);
    return t || (Er(e, i) && Kt(r, "has", e),
    Kt(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function Xo(e, t=!1) {
    return e = e.__v_raw,
    !t && Kt(Fe(e), "iterate", jr),
    Reflect.get(e, "size", e)
}
function Xu(e) {
    e = Fe(e);
    const t = Fe(this);
    return $s(t).has.call(t, e) || (t.add(e),
    Gn(t, "add", e, e)),
    this
}
function Zu(e, t) {
    t = Fe(t);
    const n = Fe(this)
      , {has: r, get: i} = $s(n);
    let o = r.call(n, e);
    o || (e = Fe(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? Er(t, s) && Gn(n, "set", e, t) : Gn(n, "add", e, t),
    this
}
function $u(e) {
    const t = Fe(this)
      , {has: n, get: r} = $s(t);
    let i = n.call(t, e);
    i || (e = Fe(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && Gn(t, "delete", e, void 0),
    o
}
function ef() {
    const e = Fe(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Gn(e, "clear", void 0, void 0),
    n
}
function Zo(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , a = Fe(s)
          , l = t ? Fc : e ? xc : co;
        return !e && Kt(a, "iterate", jr),
        s.forEach((u,c)=>r.call(i, l(u), l(c), o))
    }
}
function $o(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = Fe(i)
          , s = ci(o)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , u = i[e](...r)
          , c = n ? Fc : t ? xc : co;
        return !t && Kt(o, "iterate", l ? yl : jr),
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
function Xn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Xv() {
    const e = {
        get(o) {
            return zo(this, o)
        },
        get size() {
            return Xo(this)
        },
        has: Qo,
        add: Xu,
        set: Zu,
        delete: $u,
        clear: ef,
        forEach: Zo(!1, !1)
    }
      , t = {
        get(o) {
            return zo(this, o, !1, !0)
        },
        get size() {
            return Xo(this)
        },
        has: Qo,
        add: Xu,
        set: Zu,
        delete: $u,
        clear: ef,
        forEach: Zo(!1, !0)
    }
      , n = {
        get(o) {
            return zo(this, o, !0)
        },
        get size() {
            return Xo(this, !0)
        },
        has(o) {
            return Qo.call(this, o, !0)
        },
        add: Xn("add"),
        set: Xn("set"),
        delete: Xn("delete"),
        clear: Xn("clear"),
        forEach: Zo(!0, !1)
    }
      , r = {
        get(o) {
            return zo(this, o, !0, !0)
        },
        get size() {
            return Xo(this, !0)
        },
        has(o) {
            return Qo.call(this, o, !0)
        },
        add: Xn("add"),
        set: Xn("set"),
        delete: Xn("delete"),
        clear: Xn("clear"),
        forEach: Zo(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = $o(o, !1, !1),
        n[o] = $o(o, !0, !1),
        t[o] = $o(o, !1, !0),
        r[o] = $o(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [Zv,$v,e0,t0] = Xv();
function Bc(e, t) {
    const n = t ? e ? t0 : e0 : e ? $v : Zv;
    return (r,i,o)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(qe(n, i) && i in r ? n : r, i, o)
}
const n0 = {
    get: Bc(!1, !1)
}
  , r0 = {
    get: Bc(!1, !0)
}
  , i0 = {
    get: Bc(!0, !1)
}
  , pp = new WeakMap
  , mp = new WeakMap
  , gp = new WeakMap
  , o0 = new WeakMap;
function s0(e) {
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
function a0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : s0(Rv(e))
}
function At(e) {
    return Gr(e) ? e : Uc(e, !1, Jv, n0, pp)
}
function Ri(e) {
    return Uc(e, !1, Qv, r0, mp)
}
function hr(e) {
    return Uc(e, !0, zv, i0, gp)
}
function Uc(e, t, n, r, i) {
    if (!rt(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = a0(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return i.set(e, a),
    a
}
function yr(e) {
    return Gr(e) ? yr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Gr(e) {
    return !!(e && e.__v_isReadonly)
}
function Ss(e) {
    return !!(e && e.__v_isShallow)
}
function yp(e) {
    return yr(e) || Gr(e)
}
function Fe(e) {
    const t = e && e.__v_raw;
    return t ? Fe(t) : e
}
function pt(e) {
    return Object.isExtensible(e) && Ts(e, "__v_skip", !0),
    e
}
const co = e=>rt(e) ? At(e) : e
  , xc = e=>rt(e) ? hr(e) : e;
class vp {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Dc(()=>t(this._value),()=>di(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = Fe(this);
        return (!t._cacheable || t.effect.dirty) && Er(t._value, t._value = t.effect.run()) && di(t, 4),
        Hc(t),
        t.effect._dirtyLevel >= 2 && di(t, 2),
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
function l0(e, t, n=!1) {
    let r, i;
    const o = ye(e);
    return o ? (r = e,
    i = sn) : (r = e.get,
    i = e.set),
    new vp(r,i,o || !i,n)
}
function Hc(e) {
    var t;
    gr && Hr && (e = Fe(e),
    lp(Hr, (t = e.dep) != null ? t : e.dep = up(()=>e.dep = void 0, e instanceof vp ? e : void 0)))
}
function di(e, t=4, n) {
    e = Fe(e);
    const r = e.dep;
    r && cp(r, t)
}
function ct(e) {
    return !!(e && e.__v_isRef === !0)
}
function ce(e) {
    return bp(e, !1)
}
function En(e) {
    return bp(e, !0)
}
function bp(e, t) {
    return ct(e) ? e : new c0(e,t)
}
class c0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Fe(t),
        this._value = n ? t : co(t)
    }
    get value() {
        return Hc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Ss(t) || Gr(t);
        t = n ? t : Fe(t),
        Er(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : co(t),
        di(this, 4))
    }
}
function _p(e) {
    di(e, 4)
}
function J(e) {
    return ct(e) ? e.value : e
}
const u0 = {
    get: (e,t,n)=>J(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const i = e[t];
        return ct(i) && !ct(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Ep(e) {
    return yr(e) ? e : new Proxy(e,u0)
}
class f0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>Hc(this), ()=>di(this));
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
function Tp(e) {
    return new f0(e)
}
function jc(e) {
    const t = de(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = kp(e, n);
    return t
}
class d0 {
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
        return Kv(Fe(this._object), this._key)
    }
}
class h0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function si(e, t, n) {
    return ct(e) ? e : ye(e) ? new h0(e) : rt(e) && arguments.length > 1 ? kp(e, t, n) : ce(e)
}
function kp(e, t, n) {
    const r = e[t];
    return ct(r) ? r : new d0(e,t,n)
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        Do(i, t, n)
    }
}
function cn(e, t, n, r) {
    if (ye(e)) {
        const o = vr(e, t, n, r);
        return o && Pc(o) && o.catch(s=>{
            Do(s, t, n)
        }
        ),
        o
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        i.push(cn(e[o], t, n, r));
    return i
}
function Do(e, t, n, r=!0) {
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
            vr(l, null, 10, [e, s, a]);
            return
        }
    }
    p0(e, n, i, r)
}
function p0(e, t, n, r=!0) {
    console.error(e)
}
let uo = !1
  , vl = !1;
const It = [];
let In = 0;
const hi = [];
let ar = null
  , Br = 0;
const Sp = Promise.resolve();
let Kc = null;
function zt(e) {
    const t = Kc || Sp;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function m0(e) {
    let t = In + 1
      , n = It.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = It[r]
          , o = fo(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function Yc(e) {
    (!It.length || !It.includes(e, uo && e.allowRecurse ? In + 1 : In)) && (e.id == null ? It.push(e) : It.splice(m0(e.id), 0, e),
    wp())
}
function wp() {
    !uo && !vl && (vl = !0,
    Kc = Sp.then(Ap))
}
function g0(e) {
    const t = It.indexOf(e);
    t > In && It.splice(t, 1)
}
function bl(e) {
    de(e) ? hi.push(...e) : (!ar || !ar.includes(e, e.allowRecurse ? Br + 1 : Br)) && hi.push(e),
    wp()
}
function tf(e, t, n=uo ? In + 1 : 0) {
    for (; n < It.length; n++) {
        const r = It[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            It.splice(n, 1),
            n--,
            r()
        }
    }
}
function ws(e) {
    if (hi.length) {
        const t = [...new Set(hi)].sort((n,r)=>fo(n) - fo(r));
        if (hi.length = 0,
        ar) {
            ar.push(...t);
            return
        }
        for (ar = t,
        Br = 0; Br < ar.length; Br++)
            ar[Br]();
        ar = null,
        Br = 0
    }
}
const fo = e=>e.id == null ? 1 / 0 : e.id
  , y0 = (e,t)=>{
    const n = fo(e) - fo(t);
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
    vl = !1,
    uo = !0,
    It.sort(y0);
    try {
        for (In = 0; In < It.length; In++) {
            const t = It[In];
            t && t.active !== !1 && vr(t, null, 14)
        }
    } finally {
        In = 0,
        It.length = 0,
        ws(),
        uo = !1,
        Kc = null,
        (It.length || hi.length) && Ap()
    }
}
function v0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || it;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const c = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[c] || it;
        d && (i = n.map(m=>st(m) ? m.trim() : m)),
        f && (i = n.map(pl))
    }
    let a, l = r[a = Oa(t)] || r[a = Oa(Fn(t))];
    !l && o && (l = r[a = Oa(Xr(t))]),
    l && cn(l, e, 6, i);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        cn(u, e, 6, i)
    }
}
function Lp(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let s = {}
      , a = !1;
    if (!ye(e)) {
        const l = u=>{
            const c = Lp(u, t, !0);
            c && (a = !0,
            bt(s, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (rt(e) && r.set(e, null),
    null) : (de(o) ? o.forEach(l=>s[l] = null) : bt(s, o),
    rt(e) && r.set(e, s),
    s)
}
function ea(e, t) {
    return !e || !Ro(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, Xr(t)) || qe(e, t))
}
let mt = null
  , ta = null;
function As(e) {
    const t = mt;
    return mt = e,
    ta = e && e.type.__scopeId || null,
    t
}
function b0(e) {
    ta = e
}
function _0() {
    ta = null
}
const E0 = e=>fn;
function fn(e, t=mt, n) {
    if (!t || e._n)
        return e;
    const r = (...i)=>{
        r._d && gf(-1);
        const o = As(t);
        let s;
        try {
            s = e(...i)
        } finally {
            As(o),
            r._d && gf(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Ia(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, props: o, propsOptions: [s], slots: a, attrs: l, emit: u, render: c, renderCache: f, data: d, setupState: m, ctx: b, inheritAttrs: _} = e;
    let S, g;
    const E = As(e);
    try {
        if (n.shapeFlag & 4) {
            const y = i || r
              , T = y;
            S = nn(c.call(T, y, f, o, m, d, b)),
            g = l
        } else {
            const y = t;
            S = nn(y.length > 1 ? y(o, {
                attrs: l,
                slots: a,
                emit: u
            }) : y(o, null)),
            g = t.props ? l : k0(l)
        }
    } catch (y) {
        Wi.length = 0,
        Do(y, e, 1),
        S = et(Vt)
    }
    let p = S;
    if (g && _ !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: T} = p;
        y.length && T & 7 && (s && y.some(Rc) && (g = S0(g, s)),
        p = Wn(p, g))
    }
    return n.dirs && (p = Wn(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    S = p,
    As(E),
    S
}
function T0(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (bi(i)) {
            if (i.type !== Vt || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const k0 = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Ro(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , S0 = (e,t)=>{
    const n = {};
    for (const r in e)
        (!Rc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function w0(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: a, patchFlag: l} = t
      , u = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? nf(r, s, u) : !!s;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (s[d] !== r[d] && !ea(u, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? nf(r, s, u) : !0 : !!s;
    return !1
}
function nf(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !ea(n, o))
            return !0
    }
    return !1
}
function qc({vnode: e, parent: t}, n) {
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
const Gc = "components"
  , A0 = "directives";
function Wr(e, t) {
    return Wc(Gc, e, !0, t) || e
}
const Cp = Symbol.for("v-ndc");
function _l(e) {
    return st(e) ? Wc(Gc, e, !1) || e : e || Cp
}
function FM(e) {
    return Wc(A0, e)
}
function Wc(e, t, n=!0, r=!1) {
    const i = mt || kt;
    if (i) {
        const o = i.type;
        if (e === Gc) {
            const a = Pl(o, !1);
            if (a && (a === t || a === Fn(t) || a === Xs(Fn(t))))
                return o
        }
        const s = rf(i[e] || o[e], t) || rf(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function rf(e, t) {
    return e && (e[t] || e[Fn(t)] || e[Xs(Fn(t))])
}
const Op = e=>e.__isSuspense;
let El = 0;
const L0 = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, i, o, s, a, l, u) {
        if (e == null)
            C0(t, n, r, i, o, s, a, l, u);
        else {
            if (o && o.deps > 0) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            O0(e, t, n, r, i, s, a, l, u)
        }
    },
    hydrate: R0,
    create: zc,
    normalize: I0
}
  , Jc = L0;
function ho(e, t) {
    const n = e.props && e.props[t];
    ye(n) && n()
}
function C0(e, t, n, r, i, o, s, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , d = e.suspense = zc(e, i, r, t, f, n, o, s, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, o, s),
    d.deps > 0 ? (ho(e, "onPending"),
    ho(e, "onFallback"),
    u(null, e.ssFallback, t, n, r, null, o, s),
    pi(d, e.ssFallback)) : d.resolve(!1, !0)
}
function O0(e, t, n, r, i, o, s, a, {p: l, um: u, o: {createElement: c}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: b, pendingBranch: _, isInFallback: S, isHydrating: g} = f;
    if (_)
        f.pendingBranch = d,
        gn(d, _) ? (l(_, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : S && (g || (l(b, m, n, r, i, null, o, s, a),
        pi(f, m)))) : (f.pendingId = El++,
        g ? (f.isHydrating = !1,
        f.activeBranch = _) : u(_, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        S ? (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : (l(b, m, n, r, i, null, o, s, a),
        pi(f, m))) : b && gn(d, b) ? (l(b, d, n, r, i, f, o, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 && f.resolve()));
    else if (b && gn(d, b))
        l(b, d, n, r, i, f, o, s, a),
        pi(f, d);
    else if (ho(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = El++,
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
function zc(e, t, n, r, i, o, s, a, l, u, c=!1) {
    const {p: f, m: d, um: m, n: b, o: {parentNode: _, remove: S}} = u;
    let g;
    const E = P0(e);
    E && t != null && t.pendingBranch && (g = t.pendingId,
    t.deps++);
    const p = e.props ? tp(e.props.timeout) : void 0
      , y = o
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: El++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(w=!1, L=!1) {
            const {vnode: C, activeBranch: O, pendingBranch: N, pendingId: H, effects: B, parentComponent: $, container: W} = T;
            let Y = !1;
            T.isHydrating ? T.isHydrating = !1 : w || (Y = O && N.transition && N.transition.mode === "out-in",
            Y && (O.transition.afterLeave = ()=>{
                H === T.pendingId && (d(N, W, o === y ? b(O) : o, 0),
                bl(B))
            }
            ),
            O && (_(O.el) !== T.hiddenContainer && (o = b(O)),
            m(O, $, T, !0)),
            Y || d(N, W, o, 0)),
            pi(T, N),
            T.pendingBranch = null,
            T.isInFallback = !1;
            let V = T.parent
              , q = !1;
            for (; V; ) {
                if (V.pendingBranch) {
                    V.effects.push(...B),
                    q = !0;
                    break
                }
                V = V.parent
            }
            !q && !Y && bl(B),
            T.effects = [],
            E && t && t.pendingBranch && g === t.pendingId && (t.deps--,
            t.deps === 0 && !L && t.resolve()),
            ho(C, "onResolve")
        },
        fallback(w) {
            if (!T.pendingBranch)
                return;
            const {vnode: L, activeBranch: C, parentComponent: O, container: N, namespace: H} = T;
            ho(L, "onFallback");
            const B = b(C)
              , $ = ()=>{
                T.isInFallback && (f(null, w, N, B, O, null, H, a, l),
                pi(T, w))
            }
              , W = w.transition && w.transition.mode === "out-in";
            W && (C.transition.afterLeave = $),
            T.isInFallback = !0,
            m(C, O, null, !0),
            W || $()
        },
        move(w, L, C) {
            T.activeBranch && d(T.activeBranch, w, L, C),
            T.container = w
        },
        next() {
            return T.activeBranch && b(T.activeBranch)
        },
        registerDep(w, L) {
            const C = !!T.pendingBranch;
            C && T.deps++;
            const O = w.vnode.el;
            w.asyncDep.catch(N=>{
                Do(N, w, 0)
            }
            ).then(N=>{
                if (w.isUnmounted || T.isUnmounted || T.pendingId !== w.suspenseId)
                    return;
                w.asyncResolved = !0;
                const {vnode: H} = w;
                Il(w, N, !1),
                O && (H.el = O);
                const B = !O && w.subTree.el;
                L(w, H, _(O || w.subTree.el), O ? null : b(w.subTree), T, s, l),
                B && S(B),
                qc(w, H.el),
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
function R0(e, t, n, r, i, o, s, a, l) {
    const u = t.suspense = zc(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, a, !0)
      , c = l(e, u.pendingBranch = t.ssContent, n, u, o, s);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function I0(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = of(r ? n.default : n),
    e.ssFallback = r ? of(n.fallback) : et(Vt)
}
function of(e) {
    let t;
    if (ye(e)) {
        const n = vi && e._c;
        n && (e._d = !1,
        me()),
        e = e(),
        n && (e._d = !0,
        t = an,
        Xp())
    }
    return de(e) && (e = T0(e)),
    e = nn(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function Rp(e, t) {
    t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : bl(e)
}
function pi(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let i = t.el;
    for (; !i && t.component; )
        t = t.component.subTree,
        i = t.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    qc(r, i))
}
function P0(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const M0 = Symbol.for("v-scx")
  , D0 = ()=>wt(M0);
function N0(e, t) {
    return Qc(e, null, t)
}
const es = {};
function Ye(e, t, n) {
    return Qc(e, t, n)
}
function Qc(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: a}=it) {
    if (t && o) {
        const w = t;
        t = (...L)=>{
            w(...L),
            T()
        }
    }
    const l = kt
      , u = w=>r === !0 ? w : Ur(w, r === !1 ? 1 : void 0);
    let c, f = !1, d = !1;
    if (ct(e) ? (c = ()=>e.value,
    f = Ss(e)) : yr(e) ? (c = ()=>u(e),
    f = !0) : de(e) ? (d = !0,
    f = e.some(w=>yr(w) || Ss(w)),
    c = ()=>e.map(w=>{
        if (ct(w))
            return w.value;
        if (yr(w))
            return u(w);
        if (ye(w))
            return vr(w, l, 2)
    }
    )) : ye(e) ? t ? c = ()=>vr(e, l, 2) : c = ()=>(m && m(),
    cn(e, l, 3, [b])) : c = sn,
    t && r) {
        const w = c;
        c = ()=>Ur(w())
    }
    let m, b = w=>{
        m = p.onStop = ()=>{
            vr(w, l, 4),
            m = p.onStop = void 0
        }
    }
    , _;
    if (sa)
        if (b = sn,
        t ? n && cn(t, l, 3, [c(), d ? [] : void 0, b]) : c(),
        i === "sync") {
            const w = D0();
            _ = w.__watcherHandles || (w.__watcherHandles = [])
        } else
            return sn;
    let S = d ? new Array(e.length).fill(es) : es;
    const g = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const w = p.run();
                (r || f || (d ? w.some((L,C)=>Er(L, S[C])) : Er(w, S))) && (m && m(),
                cn(t, l, 3, [w, S === es ? void 0 : d && S[0] === es ? [] : S, b]),
                S = w)
            } else
                p.run()
    }
    ;
    g.allowRecurse = !!t;
    let E;
    i === "sync" ? E = g : i === "post" ? E = ()=>Lt(g, l && l.suspense) : (g.pre = !0,
    l && (g.id = l.uid),
    E = ()=>Yc(g));
    const p = new Dc(c,sn,E)
      , y = Mo()
      , T = ()=>{
        p.stop(),
        y && Ic(y.effects, p)
    }
    ;
    return t ? n ? g() : S = p.run() : i === "post" ? Lt(p.run.bind(p), l && l.suspense) : p.run(),
    _ && _.push(T),
    T
}
function V0(e, t, n) {
    const r = this.proxy
      , i = st(e) ? e.includes(".") ? Ip(r, e) : ()=>r[e] : e.bind(r, r);
    let o;
    ye(t) ? o = t : (o = t.handler,
    n = t);
    const s = zr(this)
      , a = Qc(i, o.bind(r), n);
    return s(),
    a
}
function Ip(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Ur(e, t, n=0, r) {
    if (!rt(e) || e.__v_skip)
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
    ct(e))
        Ur(e.value, t, n, r);
    else if (de(e))
        for (let i = 0; i < e.length; i++)
            Ur(e[i], t, n, r);
    else if (Zh(e) || ci(e))
        e.forEach(i=>{
            Ur(i, t, n, r)
        }
        );
    else if (ep(e))
        for (const i in e)
            Ur(e[i], t, n, r);
    return e
}
function BM(e, t) {
    if (mt === null)
        return e;
    const n = aa(mt) || mt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,a,l=it] = t[i];
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
function Rn(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        o && (a.oldValue = o[s].value);
        let l = a.dir[r];
        l && (Zr(),
        cn(l, n, 8, [e.el, a, e, t]),
        $r())
    }
}
const lr = Symbol("_leaveCb")
  , ts = Symbol("_enterCb");
function F0() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ft(()=>{
        e.isMounted = !0
    }
    ),
    Sn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const $t = [Function, Array]
  , Pp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $t,
    onEnter: $t,
    onAfterEnter: $t,
    onEnterCancelled: $t,
    onBeforeLeave: $t,
    onLeave: $t,
    onAfterLeave: $t,
    onLeaveCancelled: $t,
    onBeforeAppear: $t,
    onAppear: $t,
    onAfterAppear: $t,
    onAppearCancelled: $t
}
  , B0 = {
    name: "BaseTransition",
    props: Pp,
    setup(e, {slots: t}) {
        const n = wn()
          , r = F0();
        return ()=>{
            const i = t.default && Dp(t.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const d of i)
                    if (d.type !== Vt) {
                        o = d;
                        break
                    }
            }
            const s = Fe(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Pa(o);
            const l = sf(o);
            if (!l)
                return Pa(o);
            const u = Tl(l, s, r, n);
            Ls(l, u);
            const c = n.subTree
              , f = c && sf(c);
            if (f && f.type !== Vt && !gn(l, f)) {
                const d = Tl(f, s, r, n);
                if (Ls(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Pa(o);
                a === "in-out" && l.type !== Vt && (d.delayLeave = (m,b,_)=>{
                    const S = Mp(r, f);
                    S[String(f.key)] = f,
                    m[lr] = ()=>{
                        b(),
                        m[lr] = void 0,
                        delete u.delayedLeave
                    }
                    ,
                    u.delayedLeave = _
                }
                )
            }
            return o
        }
    }
}
  , U0 = B0;
function Mp(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Tl(e, t, n, r) {
    const {appear: i, mode: o, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: b, onBeforeAppear: _, onAppear: S, onAfterAppear: g, onAppearCancelled: E} = t
      , p = String(e.key)
      , y = Mp(n, e)
      , T = (C,O)=>{
        C && cn(C, r, 9, O)
    }
      , w = (C,O)=>{
        const N = O[1];
        T(C, O),
        de(C) ? C.every(H=>H.length <= 1) && N() : C.length <= 1 && N()
    }
      , L = {
        mode: o,
        persisted: s,
        beforeEnter(C) {
            let O = a;
            if (!n.isMounted)
                if (i)
                    O = _ || a;
                else
                    return;
            C[lr] && C[lr](!0);
            const N = y[p];
            N && gn(e, N) && N.el[lr] && N.el[lr](),
            T(O, [C])
        },
        enter(C) {
            let O = l
              , N = u
              , H = c;
            if (!n.isMounted)
                if (i)
                    O = S || l,
                    N = g || u,
                    H = E || c;
                else
                    return;
            let B = !1;
            const $ = C[ts] = W=>{
                B || (B = !0,
                W ? T(H, [C]) : T(N, [C]),
                L.delayedLeave && L.delayedLeave(),
                C[ts] = void 0)
            }
            ;
            O ? w(O, [C, $]) : $()
        },
        leave(C, O) {
            const N = String(e.key);
            if (C[ts] && C[ts](!0),
            n.isUnmounting)
                return O();
            T(f, [C]);
            let H = !1;
            const B = C[lr] = $=>{
                H || (H = !0,
                O(),
                $ ? T(b, [C]) : T(m, [C]),
                C[lr] = void 0,
                y[N] === e && delete y[N])
            }
            ;
            y[N] = e,
            d ? w(d, [C, B]) : B()
        },
        clone(C) {
            return Tl(C, t, n, r)
        }
    };
    return L
}
function Pa(e) {
    if (na(e))
        return e = Wn(e),
        e.children = null,
        e
}
function sf(e) {
    return na(e) ? e.children ? e.children[0] : void 0 : e
}
function Ls(e, t) {
    e.shapeFlag & 6 && e.component ? Ls(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Dp(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === yt ? (s.patchFlag & 128 && i++,
        r = r.concat(Dp(s.children, t, a))) : (t || s.type !== Vt) && r.push(a != null ? Wn(s, {
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
    return ye(e) ? bt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Kr = e=>!!e.type.__asyncLoader
  , na = e=>e.type.__isKeepAlive
  , x0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = wn()
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
            Lt(()=>{
                L.isDeactivated = !1,
                L.a && fi(L.a);
                const C = E.props && E.props.onVnodeMounted;
                C && Ht(C, L.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            u(E, d, null, 1, a),
            Lt(()=>{
                p.da && fi(p.da);
                const y = E.props && E.props.onVnodeUnmounted;
                y && Ht(y, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Ma(E),
            c(E, n, a, !0)
        }
        function b(E) {
            i.forEach((p,y)=>{
                const T = Pl(p.type);
                T && (!E || !E(T)) && _(y)
            }
            )
        }
        function _(E) {
            const p = i.get(E);
            !s || !gn(p, s) ? m(p) : s && Ma(s),
            i.delete(E),
            o.delete(E)
        }
        Ye(()=>[e.include, e.exclude], ([E,p])=>{
            E && b(y=>Hi(E, y)),
            p && b(y=>!Hi(p, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let S = null;
        const g = ()=>{
            S != null && i.set(S, Da(n.subTree))
        }
        ;
        return Ft(g),
        Xc(g),
        Sn(()=>{
            i.forEach(E=>{
                const {subTree: p, suspense: y} = n
                  , T = Da(p);
                if (E.type === T.type && E.key === T.key) {
                    Ma(T);
                    const w = T.component.da;
                    w && Lt(w, y);
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
            if (!bi(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
                return s = null,
                p;
            let y = Da(p);
            const T = y.type
              , w = Pl(Kr(y) ? y.type.__asyncResolved || {} : T)
              , {include: L, exclude: C, max: O} = e;
            if (L && (!w || !Hi(L, w)) || C && w && Hi(C, w))
                return s = y,
                p;
            const N = y.key == null ? T : y.key
              , H = i.get(N);
            return y.el && (y = Wn(y),
            p.shapeFlag & 128 && (p.ssContent = y)),
            S = N,
            H ? (y.el = H.el,
            y.component = H.component,
            y.transition && Ls(y, y.transition),
            y.shapeFlag |= 512,
            o.delete(N),
            o.add(N)) : (o.add(N),
            O && o.size > parseInt(O, 10) && _(o.values().next().value)),
            y.shapeFlag |= 256,
            s = y,
            Op(p.type) ? p : y
        }
    }
}
  , H0 = x0;
function Hi(e, t) {
    return de(e) ? e.some(n=>Hi(n, t)) : st(e) ? e.split(",").includes(t) : Ov(e) ? e.test(t) : !1
}
function Np(e, t) {
    Fp(e, "a", t)
}
function Vp(e, t) {
    Fp(e, "da", t)
}
function Fp(e, t, n=kt) {
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
    if (ra(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            na(i.parent.vnode) && j0(r, t, n, i),
            i = i.parent
    }
}
function j0(e, t, n, r) {
    const i = ra(t, e, r, !0);
    Ii(()=>{
        Ic(r[t], i)
    }
    , n)
}
function Ma(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Da(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function ra(e, t, n=kt, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            Zr();
            const a = zr(n)
              , l = cn(t, n, e, s);
            return a(),
            $r(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const Jn = e=>(t,n=kt)=>(!sa || e === "sp") && ra(e, (...r)=>t(...r), n)
  , K0 = Jn("bm")
  , Ft = Jn("m")
  , Y0 = Jn("bu")
  , Xc = Jn("u")
  , Sn = Jn("bum")
  , Ii = Jn("um")
  , q0 = Jn("sp")
  , G0 = Jn("rtg")
  , W0 = Jn("rtc");
function Bp(e, t=kt) {
    ra("ec", e, t)
}
function J0(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (de(e) || st(e)) {
        i = new Array(e.length);
        for (let s = 0, a = e.length; s < a; s++)
            i[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o && o[s])
    } else if (rt(e))
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
function Tr(e, t, n={}, r, i) {
    if (mt.isCE || mt.parent && Kr(mt.parent) && mt.parent.isCE)
        return t !== "default" && (n.name = t),
        et("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    me();
    const s = o && Up(o(n))
      , a = Tt(yt, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function Up(e) {
    return e.some(t=>bi(t) ? !(t.type === Vt || t.type === yt && !Up(t.children)) : !0) ? e : null
}
const kl = e=>e ? tm(e) ? aa(e) || e.proxy : kl(e.parent) : null
  , Yi = bt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>kl(e.parent),
    $root: e=>kl(e.root),
    $emit: e=>e.emit,
    $options: e=>Zc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        Yc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = zt.bind(e.proxy)),
    $watch: e=>V0.bind(e)
})
  , Na = (e,t)=>e !== it && !e.__isScriptSetup && qe(e, t)
  , z0 = {
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
                if (Na(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== it && qe(i, t))
                    return s[t] = 2,
                    i[t];
                if ((u = e.propsOptions[0]) && qe(u, t))
                    return s[t] = 3,
                    o[t];
                if (n !== it && qe(n, t))
                    return s[t] = 4,
                    n[t];
                wl && (s[t] = 0)
            }
        }
        const c = Yi[t];
        let f, d;
        if (c)
            return t === "$attrs" && Kt(e, "get", t),
            c(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== it && qe(n, t))
            return s[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        qe(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return Na(i, t) ? (i[t] = n,
        !0) : r !== it && qe(r, t) ? (r[t] = n,
        !0) : qe(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let a;
        return !!n[s] || e !== it && qe(e, s) || Na(t, s) || (a = o[0]) && qe(a, s) || qe(r, s) || qe(Yi, s) || qe(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : qe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Q0() {
    return X0().slots
}
function X0() {
    const e = wn();
    return e.setupContext || (e.setupContext = rm(e))
}
function Sl(e) {
    return de(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function ia(e, t) {
    const n = Sl(e);
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
function Z0(e) {
    const t = wn();
    let n = e();
    return Rl(),
    Pc(n) && (n = n.catch(r=>{
        throw zr(t),
        r
    }
    )),
    [n, ()=>zr(t)]
}
let wl = !0;
function $0(e) {
    const t = Zc(e)
      , n = e.proxy
      , r = e.ctx;
    wl = !1,
    t.beforeCreate && af(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: b, activated: _, deactivated: S, beforeDestroy: g, beforeUnmount: E, destroyed: p, unmounted: y, render: T, renderTracked: w, renderTriggered: L, errorCaptured: C, serverPrefetch: O, expose: N, inheritAttrs: H, components: B, directives: $, filters: W} = t;
    if (u && eb(u, r, null),
    s)
        for (const q in s) {
            const U = s[q];
            ye(U) && (r[q] = U.bind(n))
        }
    if (i) {
        const q = i.call(n, n);
        rt(q) && (e.data = At(q))
    }
    if (wl = !0,
    o)
        for (const q in o) {
            const U = o[q]
              , le = ye(U) ? U.bind(n, n) : ye(U.get) ? U.get.bind(n, n) : sn
              , K = !ye(U) && ye(U.set) ? U.set.bind(n) : sn
              , ue = fe({
                get: le,
                set: K
            });
            Object.defineProperty(r, q, {
                enumerable: !0,
                configurable: !0,
                get: ()=>ue.value,
                set: be=>ue.value = be
            })
        }
    if (a)
        for (const q in a)
            xp(a[q], r, n, q);
    if (l) {
        const q = ye(l) ? l.call(n) : l;
        Reflect.ownKeys(q).forEach(U=>{
            Yr(U, q[U])
        }
        )
    }
    c && af(c, e, "c");
    function V(q, U) {
        de(U) ? U.forEach(le=>q(le.bind(n))) : U && q(U.bind(n))
    }
    if (V(K0, f),
    V(Ft, d),
    V(Y0, m),
    V(Xc, b),
    V(Np, _),
    V(Vp, S),
    V(Bp, C),
    V(W0, w),
    V(G0, L),
    V(Sn, E),
    V(Ii, y),
    V(q0, O),
    de(N))
        if (N.length) {
            const q = e.exposed || (e.exposed = {});
            N.forEach(U=>{
                Object.defineProperty(q, U, {
                    get: ()=>n[U],
                    set: le=>n[U] = le
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    T && e.render === sn && (e.render = T),
    H != null && (e.inheritAttrs = H),
    B && (e.components = B),
    $ && (e.directives = $)
}
function eb(e, t, n=sn) {
    de(e) && (e = Al(e));
    for (const r in e) {
        const i = e[r];
        let o;
        rt(i) ? "default"in i ? o = wt(i.from || r, i.default, !0) : o = wt(i.from || r) : o = wt(i),
        ct(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: s=>o.value = s
        }) : t[r] = o
    }
}
function af(e, t, n) {
    cn(de(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function xp(e, t, n, r) {
    const i = r.includes(".") ? Ip(n, r) : ()=>n[r];
    if (st(e)) {
        const o = t[e];
        ye(o) && Ye(i, o)
    } else if (ye(e))
        Ye(i, e.bind(n));
    else if (rt(e))
        if (de(e))
            e.forEach(o=>xp(o, t, n, r));
        else {
            const o = ye(e.handler) ? e.handler.bind(n) : t[e.handler];
            ye(o) && Ye(i, o, e)
        }
}
function Zc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach(u=>Cs(l, u, s, !0)),
    Cs(l, t, s)),
    rt(t) && o.set(t, l),
    l
}
function Cs(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && Cs(e, o, n, !0),
    i && i.forEach(s=>Cs(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = tb[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const tb = {
    data: lf,
    props: cf,
    emits: cf,
    methods: ji,
    computed: ji,
    beforeCreate: Mt,
    created: Mt,
    beforeMount: Mt,
    mounted: Mt,
    beforeUpdate: Mt,
    updated: Mt,
    beforeDestroy: Mt,
    beforeUnmount: Mt,
    destroyed: Mt,
    unmounted: Mt,
    activated: Mt,
    deactivated: Mt,
    errorCaptured: Mt,
    serverPrefetch: Mt,
    components: ji,
    directives: ji,
    watch: rb,
    provide: lf,
    inject: nb
};
function lf(e, t) {
    return t ? e ? function() {
        return bt(ye(e) ? e.call(this, this) : e, ye(t) ? t.call(this, this) : t)
    }
    : t : e
}
function nb(e, t) {
    return ji(Al(e), Al(t))
}
function Al(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Mt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function ji(e, t) {
    return e ? bt(Object.create(null), e, t) : t
}
function cf(e, t) {
    return e ? de(e) && de(t) ? [...new Set([...e, ...t])] : bt(Object.create(null), Sl(e), Sl(t ?? {})) : t
}
function rb(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = bt(Object.create(null), e);
    for (const r in t)
        n[r] = Mt(e[r], t[r]);
    return n
}
function Hp() {
    return {
        app: null,
        config: {
            isNativeTag: Lv,
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
let ib = 0;
function ob(e, t) {
    return function(r, i=null) {
        ye(r) || (r = bt({}, r)),
        i != null && !rt(i) && (i = null);
        const o = Hp()
          , s = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: ib++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: im,
            get config() {
                return o.config
            },
            set config(u) {},
            use(u, ...c) {
                return s.has(u) || (u && ye(u.install) ? (s.add(u),
                u.install(l, ...c)) : ye(u) && (s.add(u),
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
                    const d = et(r, i);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    c && t ? t(d, u) : e(d, u, f),
                    a = !0,
                    l._container = u,
                    u.__vue_app__ = l,
                    aa(d.component) || d.component.proxy
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
                const c = mi;
                mi = l;
                try {
                    return u()
                } finally {
                    mi = c
                }
            }
        };
        return l
    }
}
let mi = null;
function Yr(e, t) {
    if (kt) {
        let n = kt.provides;
        const r = kt.parent && kt.parent.provides;
        r === n && (n = kt.provides = Object.create(r)),
        n[e] = t
    }
}
function wt(e, t, n=!1) {
    const r = kt || mt;
    if (r || mi) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : mi._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && ye(t) ? t.call(r && r.proxy) : t
    }
}
function $c() {
    return !!(kt || mt || mi)
}
function sb(e, t, n, r=!1) {
    const i = {}
      , o = {};
    Ts(o, oa, 1),
    e.propsDefaults = Object.create(null),
    jp(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Ri(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function ab(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , a = Fe(i)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (ea(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (qe(o, d))
                        m !== o[d] && (o[d] = m,
                        u = !0);
                    else {
                        const b = Fn(d);
                        i[b] = Ll(l, a, b, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    u = !0)
            }
        }
    } else {
        jp(e, t, i, o) && (u = !0);
        let c;
        for (const f in a)
            (!t || !qe(t, f) && ((c = Xr(f)) === f || !qe(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = Ll(l, a, f, void 0, e, !0)) : delete i[f]);
        if (o !== a)
            for (const f in o)
                (!t || !qe(t, f)) && (delete o[f],
                u = !0)
    }
    u && Gn(e, "set", "$attrs")
}
function jp(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (ui(l))
                continue;
            const u = t[l];
            let c;
            i && qe(i, c = Fn(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ea(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            s = !0)
        }
    if (o) {
        const l = Fe(n)
          , u = a || it;
        for (let c = 0; c < o.length; c++) {
            const f = o[c];
            n[f] = Ll(i, l, f, u[f], e, !qe(u, f))
        }
    }
    return s
}
function Ll(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const a = qe(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && ye(l)) {
                const {propsDefaults: u} = i;
                if (n in u)
                    r = u[n];
                else {
                    const c = zr(i);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l
        }
        s[0] && (o && !a ? r = !1 : s[1] && (r === "" || r === Xr(n)) && (r = !0))
    }
    return r
}
function Kp(e, t, n=!1) {
    const r = t.propsCache
      , i = r.get(e);
    if (i)
        return i;
    const o = e.props
      , s = {}
      , a = [];
    let l = !1;
    if (!ye(e)) {
        const c = f=>{
            l = !0;
            const [d,m] = Kp(f, t, !0);
            bt(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!o && !l)
        return rt(e) && r.set(e, li),
        li;
    if (de(o))
        for (let c = 0; c < o.length; c++) {
            const f = Fn(o[c]);
            uf(f) && (s[f] = it)
        }
    else if (o)
        for (const c in o) {
            const f = Fn(c);
            if (uf(f)) {
                const d = o[c]
                  , m = s[f] = de(d) || ye(d) ? {
                    type: d
                } : bt({}, d);
                if (m) {
                    const b = hf(Boolean, m.type)
                      , _ = hf(String, m.type);
                    m[0] = b > -1,
                    m[1] = _ < 0 || b < _,
                    (b > -1 || qe(m, "default")) && a.push(f)
                }
            }
        }
    const u = [s, a];
    return rt(e) && r.set(e, u),
    u
}
function uf(e) {
    return e[0] !== "$" && !ui(e)
}
function ff(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function df(e, t) {
    return ff(e) === ff(t)
}
function hf(e, t) {
    return de(t) ? t.findIndex(n=>df(n, e)) : ye(t) && df(t, e) ? 0 : -1
}
const Yp = e=>e[0] === "_" || e === "$stable"
  , eu = e=>de(e) ? e.map(nn) : [nn(e)]
  , lb = (e,t,n)=>{
    if (t._n)
        return t;
    const r = fn((...i)=>eu(t(...i)), n);
    return r._c = !1,
    r
}
  , qp = (e,t,n)=>{
    const r = e._ctx;
    for (const i in e) {
        if (Yp(i))
            continue;
        const o = e[i];
        if (ye(o))
            t[i] = lb(i, o, r);
        else if (o != null) {
            const s = eu(o);
            t[i] = ()=>s
        }
    }
}
  , Gp = (e,t)=>{
    const n = eu(t);
    e.slots.default = ()=>n
}
  , cb = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Fe(t),
        Ts(t, "_", n)) : qp(t, e.slots = {})
    } else
        e.slots = {},
        t && Gp(e, t);
    Ts(e.slots, oa, 1)
}
  , ub = (e,t,n)=>{
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = it;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (bt(i, t),
        !n && a === 1 && delete i._) : (o = !t.$stable,
        qp(t, i)),
        s = t
    } else
        t && (Gp(e, t),
        s = {
            default: 1
        });
    if (o)
        for (const a in i)
            !Yp(a) && s[a] == null && delete i[a]
}
;
function Os(e, t, n, r, i=!1) {
    if (de(e)) {
        e.forEach((d,m)=>Os(d, t && (de(t) ? t[m] : t), n, r, i));
        return
    }
    if (Kr(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? aa(r.component) || r.component.proxy : r.el
      , s = i ? null : o
      , {i: a, r: l} = e
      , u = t && t.r
      , c = a.refs === it ? a.refs = {} : a.refs
      , f = a.setupState;
    if (u != null && u !== l && (st(u) ? (c[u] = null,
    qe(f, u) && (f[u] = null)) : ct(u) && (u.value = null)),
    ye(l))
        vr(l, a, 12, [s, c]);
    else {
        const d = st(l)
          , m = ct(l);
        if (d || m) {
            const b = ()=>{
                if (e.f) {
                    const _ = d ? qe(f, l) ? f[l] : c[l] : l.value;
                    i ? de(_) && Ic(_, o) : de(_) ? _.includes(o) || _.push(o) : d ? (c[l] = [o],
                    qe(f, l) && (f[l] = c[l])) : (l.value = [o],
                    e.k && (c[e.k] = l.value))
                } else
                    d ? (c[l] = s,
                    qe(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (c[e.k] = s))
            }
            ;
            s ? (b.id = -1,
            Lt(b, n)) : b()
        }
    }
}
let Zn = !1;
const fb = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , db = e=>e.namespaceURI.includes("MathML")
  , ns = e=>{
    if (fb(e))
        return "svg";
    if (db(e))
        return "mathml"
}
  , rs = e=>e.nodeType === 8;
function hb(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: a, insert: l, createComment: u}} = e
      , c = (p,y)=>{
        if (!y.hasChildNodes()) {
            n(null, p, y),
            ws(),
            y._vnode = p;
            return
        }
        Zn = !1,
        f(y.firstChild, p, null, null, null),
        ws(),
        y._vnode = p,
        Zn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,y,T,w,L,C=!1)=>{
        const O = rs(p) && p.data === "["
          , N = ()=>_(p, y, T, w, L, O)
          , {type: H, ref: B, shapeFlag: $, patchFlag: W} = y;
        let Y = p.nodeType;
        y.el = p,
        W === -2 && (C = !1,
        y.dynamicChildren = null);
        let V = null;
        switch (H) {
        case Jr:
            Y !== 3 ? y.children === "" ? (l(y.el = i(""), s(p), p),
            V = p) : V = N() : (p.data !== y.children && (Zn = !0,
            p.data = y.children),
            V = o(p));
            break;
        case Vt:
            E(p) ? (V = o(p),
            g(y.el = p.content.firstChild, p, T)) : Y !== 8 || O ? V = N() : V = o(p);
            break;
        case Gi:
            if (O && (p = o(p),
            Y = p.nodeType),
            Y === 1 || Y === 3) {
                V = p;
                const q = !y.children.length;
                for (let U = 0; U < y.staticCount; U++)
                    q && (y.children += V.nodeType === 1 ? V.outerHTML : V.data),
                    U === y.staticCount - 1 && (y.anchor = V),
                    V = o(V);
                return O ? o(V) : V
            } else
                N();
            break;
        case yt:
            O ? V = b(p, y, T, w, L, C) : V = N();
            break;
        default:
            if ($ & 1)
                (Y !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? V = N() : V = d(p, y, T, w, L, C);
            else if ($ & 6) {
                y.slotScopeIds = L;
                const q = s(p);
                if (O ? V = S(p) : rs(p) && p.data === "teleport start" ? V = S(p, p.data, "teleport end") : V = o(p),
                t(y, q, null, T, w, ns(q), C),
                Kr(y)) {
                    let U;
                    O ? (U = et(yt),
                    U.anchor = V ? V.previousSibling : q.lastChild) : U = p.nodeType === 3 ? em("") : et("div"),
                    U.el = p,
                    y.component.subTree = U
                }
            } else
                $ & 64 ? Y !== 8 ? V = N() : V = y.type.hydrate(p, y, T, w, L, C, e, m) : $ & 128 && (V = y.type.hydrate(p, y, T, w, ns(s(p)), L, C, e, f))
        }
        return B != null && Os(B, null, w, y),
        V
    }
      , d = (p,y,T,w,L,C)=>{
        C = C || !!y.dynamicChildren;
        const {type: O, props: N, patchFlag: H, shapeFlag: B, dirs: $, transition: W} = y
          , Y = O === "input" || O === "option";
        if (Y || H !== -1) {
            $ && Rn(y, null, T, "created");
            let V = !1;
            if (E(p)) {
                V = Jp(w, W) && T && T.vnode.props && T.vnode.props.appear;
                const U = p.content.firstChild;
                V && W.beforeEnter(U),
                g(U, p, T),
                y.el = p = U
            }
            if (B & 16 && !(N && (N.innerHTML || N.textContent))) {
                let U = m(p.firstChild, y, p, T, w, L, C);
                for (; U; ) {
                    Zn = !0;
                    const le = U;
                    U = U.nextSibling,
                    a(le)
                }
            } else
                B & 8 && p.textContent !== y.children && (Zn = !0,
                p.textContent = y.children);
            if (N)
                if (Y || !C || H & 48)
                    for (const U in N)
                        (Y && (U.endsWith("value") || U === "indeterminate") || Ro(U) && !ui(U) || U[0] === ".") && r(p, U, null, N[U], void 0, void 0, T);
                else
                    N.onClick && r(p, "onClick", null, N.onClick, void 0, void 0, T);
            let q;
            (q = N && N.onVnodeBeforeMount) && Ht(q, T, y),
            $ && Rn(y, null, T, "beforeMount"),
            ((q = N && N.onVnodeMounted) || $ || V) && Rp(()=>{
                q && Ht(q, T, y),
                V && W.enter(p),
                $ && Rn(y, null, T, "mounted")
            }
            , w)
        }
        return p.nextSibling
    }
      , m = (p,y,T,w,L,C,O)=>{
        O = O || !!y.dynamicChildren;
        const N = y.children
          , H = N.length;
        for (let B = 0; B < H; B++) {
            const $ = O ? N[B] : N[B] = nn(N[B]);
            if (p)
                p = f(p, $, w, L, C, O);
            else {
                if ($.type === Jr && !$.children)
                    continue;
                Zn = !0,
                n(null, $, T, null, w, L, ns(T), C)
            }
        }
        return p
    }
      , b = (p,y,T,w,L,C)=>{
        const {slotScopeIds: O} = y;
        O && (L = L ? L.concat(O) : O);
        const N = s(p)
          , H = m(o(p), y, N, T, w, L, C);
        return H && rs(H) && H.data === "]" ? o(y.anchor = H) : (Zn = !0,
        l(y.anchor = u("]"), N, H),
        H)
    }
      , _ = (p,y,T,w,L,C)=>{
        if (Zn = !0,
        y.el = null,
        C) {
            const H = S(p);
            for (; ; ) {
                const B = o(p);
                if (B && B !== H)
                    a(B);
                else
                    break
            }
        }
        const O = o(p)
          , N = s(p);
        return a(p),
        n(null, y, N, O, T, w, ns(N), L),
        O
    }
      , S = (p,y="[",T="]")=>{
        let w = 0;
        for (; p; )
            if (p = o(p),
            p && rs(p) && (p.data === y && w++,
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
const Lt = Rp;
function pb(e) {
    return Wp(e)
}
function mb(e) {
    return Wp(e, hb)
}
function Wp(e, t) {
    const n = np();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m=sn, insertStaticContent: b} = e
      , _ = (h,v,A,R=null,F=null,G=null,Z=void 0,Q=null,te=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !gn(h, v) && (R = j(h),
        be(h, F, G, !0),
        h = null),
        v.patchFlag === -2 && (te = !1,
        v.dynamicChildren = null);
        const {type: z, ref: se, shapeFlag: oe} = v;
        switch (z) {
        case Jr:
            S(h, v, A, R);
            break;
        case Vt:
            g(h, v, A, R);
            break;
        case Gi:
            h == null && E(v, A, R, Z);
            break;
        case yt:
            B(h, v, A, R, F, G, Z, Q, te);
            break;
        default:
            oe & 1 ? T(h, v, A, R, F, G, Z, Q, te) : oe & 6 ? $(h, v, A, R, F, G, Z, Q, te) : (oe & 64 || oe & 128) && z.process(h, v, A, R, F, G, Z, Q, te, ee)
        }
        se != null && F && Os(se, h && h.ref, G, v || h, !v)
    }
      , S = (h,v,A,R)=>{
        if (h == null)
            r(v.el = a(v.children), A, R);
        else {
            const F = v.el = h.el;
            v.children !== h.children && u(F, v.children)
        }
    }
      , g = (h,v,A,R)=>{
        h == null ? r(v.el = l(v.children || ""), A, R) : v.el = h.el
    }
      , E = (h,v,A,R)=>{
        [h.el,h.anchor] = b(h.children, v, A, R, h.el, h.anchor)
    }
      , p = ({el: h, anchor: v},A,R)=>{
        let F;
        for (; h && h !== v; )
            F = d(h),
            r(h, A, R),
            h = F;
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
      , T = (h,v,A,R,F,G,Z,Q,te)=>{
        v.type === "svg" ? Z = "svg" : v.type === "math" && (Z = "mathml"),
        h == null ? w(v, A, R, F, G, Z, Q, te) : O(h, v, F, G, Z, Q, te)
    }
      , w = (h,v,A,R,F,G,Z,Q)=>{
        let te, z;
        const {props: se, shapeFlag: oe, transition: I, dirs: x} = h;
        if (te = h.el = s(h.type, G, se && se.is, se),
        oe & 8 ? c(te, h.children) : oe & 16 && C(h.children, te, null, R, F, Va(h, G), Z, Q),
        x && Rn(h, null, R, "created"),
        L(te, h, h.scopeId, Z, R),
        se) {
            for (const pe in se)
                pe !== "value" && !ui(pe) && o(te, pe, null, se[pe], G, h.children, R, F, nt);
            "value"in se && o(te, "value", null, se.value, G),
            (z = se.onVnodeBeforeMount) && Ht(z, R, h)
        }
        x && Rn(h, null, R, "beforeMount");
        const ae = Jp(F, I);
        ae && I.beforeEnter(te),
        r(te, v, A),
        ((z = se && se.onVnodeMounted) || ae || x) && Lt(()=>{
            z && Ht(z, R, h),
            ae && I.enter(te),
            x && Rn(h, null, R, "mounted")
        }
        , F)
    }
      , L = (h,v,A,R,F)=>{
        if (A && m(h, A),
        R)
            for (let G = 0; G < R.length; G++)
                m(h, R[G]);
        if (F) {
            let G = F.subTree;
            if (v === G) {
                const Z = F.vnode;
                L(h, Z, Z.scopeId, Z.slotScopeIds, F.parent)
            }
        }
    }
      , C = (h,v,A,R,F,G,Z,Q,te=0)=>{
        for (let z = te; z < h.length; z++) {
            const se = h[z] = Q ? cr(h[z]) : nn(h[z]);
            _(null, se, v, A, R, F, G, Z, Q)
        }
    }
      , O = (h,v,A,R,F,G,Z)=>{
        const Q = v.el = h.el;
        let {patchFlag: te, dynamicChildren: z, dirs: se} = v;
        te |= h.patchFlag & 16;
        const oe = h.props || it
          , I = v.props || it;
        let x;
        if (A && Cr(A, !1),
        (x = I.onVnodeBeforeUpdate) && Ht(x, A, v, h),
        se && Rn(v, h, A, "beforeUpdate"),
        A && Cr(A, !0),
        z ? N(h.dynamicChildren, z, Q, A, R, Va(v, F), G) : Z || U(h, v, Q, null, A, R, Va(v, F), G, !1),
        te > 0) {
            if (te & 16)
                H(Q, v, oe, I, A, R, F);
            else if (te & 2 && oe.class !== I.class && o(Q, "class", null, I.class, F),
            te & 4 && o(Q, "style", oe.style, I.style, F),
            te & 8) {
                const ae = v.dynamicProps;
                for (let pe = 0; pe < ae.length; pe++) {
                    const Je = ae[pe]
                      , at = oe[Je]
                      , Et = I[Je];
                    (Et !== at || Je === "value") && o(Q, Je, at, Et, F, h.children, A, R, nt)
                }
            }
            te & 1 && h.children !== v.children && c(Q, v.children)
        } else
            !Z && z == null && H(Q, v, oe, I, A, R, F);
        ((x = I.onVnodeUpdated) || se) && Lt(()=>{
            x && Ht(x, A, v, h),
            se && Rn(v, h, A, "updated")
        }
        , R)
    }
      , N = (h,v,A,R,F,G,Z)=>{
        for (let Q = 0; Q < v.length; Q++) {
            const te = h[Q]
              , z = v[Q]
              , se = te.el && (te.type === yt || !gn(te, z) || te.shapeFlag & 70) ? f(te.el) : A;
            _(te, z, se, null, R, F, G, Z, !0)
        }
    }
      , H = (h,v,A,R,F,G,Z)=>{
        if (A !== R) {
            if (A !== it)
                for (const Q in A)
                    !ui(Q) && !(Q in R) && o(h, Q, A[Q], null, Z, v.children, F, G, nt);
            for (const Q in R) {
                if (ui(Q))
                    continue;
                const te = R[Q]
                  , z = A[Q];
                te !== z && Q !== "value" && o(h, Q, z, te, Z, v.children, F, G, nt)
            }
            "value"in R && o(h, "value", A.value, R.value, Z)
        }
    }
      , B = (h,v,A,R,F,G,Z,Q,te)=>{
        const z = v.el = h ? h.el : a("")
          , se = v.anchor = h ? h.anchor : a("");
        let {patchFlag: oe, dynamicChildren: I, slotScopeIds: x} = v;
        x && (Q = Q ? Q.concat(x) : x),
        h == null ? (r(z, A, R),
        r(se, A, R),
        C(v.children || [], A, se, F, G, Z, Q, te)) : oe > 0 && oe & 64 && I && h.dynamicChildren ? (N(h.dynamicChildren, I, A, F, G, Z, Q),
        (v.key != null || F && v === F.subTree) && tu(h, v, !0)) : U(h, v, A, se, F, G, Z, Q, te)
    }
      , $ = (h,v,A,R,F,G,Z,Q,te)=>{
        v.slotScopeIds = Q,
        h == null ? v.shapeFlag & 512 ? F.ctx.activate(v, A, R, Z, te) : W(v, A, R, F, G, Z, te) : Y(h, v, te)
    }
      , W = (h,v,A,R,F,G,Z)=>{
        const Q = h.component = Sb(h, R, F);
        if (na(h) && (Q.ctx.renderer = ee),
        wb(Q),
        Q.asyncDep) {
            if (F && F.registerDep(Q, V),
            !h.el) {
                const te = Q.subTree = et(Vt);
                g(null, te, v, A)
            }
        } else
            V(Q, h, v, A, F, G, Z)
    }
      , Y = (h,v,A)=>{
        const R = v.component = h.component;
        if (w0(h, v, A))
            if (R.asyncDep && !R.asyncResolved) {
                q(R, v, A);
                return
            } else
                R.next = v,
                g0(R.update),
                R.effect.dirty = !0,
                R.update();
        else
            v.el = h.el,
            R.vnode = v
    }
      , V = (h,v,A,R,F,G,Z)=>{
        const Q = ()=>{
            if (h.isMounted) {
                let {next: se, bu: oe, u: I, parent: x, vnode: ae} = h;
                {
                    const Qn = zp(h);
                    if (Qn) {
                        se && (se.el = ae.el,
                        q(h, se, Z)),
                        Qn.asyncDep.then(()=>{
                            h.isUnmounted || Q()
                        }
                        );
                        return
                    }
                }
                let pe = se, Je;
                Cr(h, !1),
                se ? (se.el = ae.el,
                q(h, se, Z)) : se = ae,
                oe && fi(oe),
                (Je = se.props && se.props.onVnodeBeforeUpdate) && Ht(Je, x, se, ae),
                Cr(h, !0);
                const at = Ia(h)
                  , Et = h.subTree;
                h.subTree = at,
                _(Et, at, f(Et.el), j(Et), h, F, G),
                se.el = at.el,
                pe === null && qc(h, at.el),
                I && Lt(I, F),
                (Je = se.props && se.props.onVnodeUpdated) && Lt(()=>Ht(Je, x, se, ae), F)
            } else {
                let se;
                const {el: oe, props: I} = v
                  , {bm: x, m: ae, parent: pe} = h
                  , Je = Kr(v);
                if (Cr(h, !1),
                x && fi(x),
                !Je && (se = I && I.onVnodeBeforeMount) && Ht(se, pe, v),
                Cr(h, !0),
                oe && xe) {
                    const at = ()=>{
                        h.subTree = Ia(h),
                        xe(oe, h.subTree, h, F, null)
                    }
                    ;
                    Je ? v.type.__asyncLoader().then(()=>!h.isUnmounted && at()) : at()
                } else {
                    const at = h.subTree = Ia(h);
                    _(null, at, A, R, h, F, G),
                    v.el = at.el
                }
                if (ae && Lt(ae, F),
                !Je && (se = I && I.onVnodeMounted)) {
                    const at = v;
                    Lt(()=>Ht(se, pe, at), F)
                }
                (v.shapeFlag & 256 || pe && Kr(pe.vnode) && pe.vnode.shapeFlag & 256) && h.a && Lt(h.a, F),
                h.isMounted = !0,
                v = A = R = null
            }
        }
          , te = h.effect = new Dc(Q,sn,()=>Yc(z),h.scope)
          , z = h.update = ()=>{
            te.dirty && te.run()
        }
        ;
        z.id = h.uid,
        Cr(h, !0),
        z()
    }
      , q = (h,v,A)=>{
        v.component = h;
        const R = h.vnode.props;
        h.vnode = v,
        h.next = null,
        ab(h, v.props, R, A),
        ub(h, v.children, A),
        Zr(),
        tf(h),
        $r()
    }
      , U = (h,v,A,R,F,G,Z,Q,te=!1)=>{
        const z = h && h.children
          , se = h ? h.shapeFlag : 0
          , oe = v.children
          , {patchFlag: I, shapeFlag: x} = v;
        if (I > 0) {
            if (I & 128) {
                K(z, oe, A, R, F, G, Z, Q, te);
                return
            } else if (I & 256) {
                le(z, oe, A, R, F, G, Z, Q, te);
                return
            }
        }
        x & 8 ? (se & 16 && nt(z, F, G),
        oe !== z && c(A, oe)) : se & 16 ? x & 16 ? K(z, oe, A, R, F, G, Z, Q, te) : nt(z, F, G, !0) : (se & 8 && c(A, ""),
        x & 16 && C(oe, A, R, F, G, Z, Q, te))
    }
      , le = (h,v,A,R,F,G,Z,Q,te)=>{
        h = h || li,
        v = v || li;
        const z = h.length
          , se = v.length
          , oe = Math.min(z, se);
        let I;
        for (I = 0; I < oe; I++) {
            const x = v[I] = te ? cr(v[I]) : nn(v[I]);
            _(h[I], x, A, null, F, G, Z, Q, te)
        }
        z > se ? nt(h, F, G, !0, !1, oe) : C(v, A, R, F, G, Z, Q, te, oe)
    }
      , K = (h,v,A,R,F,G,Z,Q,te)=>{
        let z = 0;
        const se = v.length;
        let oe = h.length - 1
          , I = se - 1;
        for (; z <= oe && z <= I; ) {
            const x = h[z]
              , ae = v[z] = te ? cr(v[z]) : nn(v[z]);
            if (gn(x, ae))
                _(x, ae, A, null, F, G, Z, Q, te);
            else
                break;
            z++
        }
        for (; z <= oe && z <= I; ) {
            const x = h[oe]
              , ae = v[I] = te ? cr(v[I]) : nn(v[I]);
            if (gn(x, ae))
                _(x, ae, A, null, F, G, Z, Q, te);
            else
                break;
            oe--,
            I--
        }
        if (z > oe) {
            if (z <= I) {
                const x = I + 1
                  , ae = x < se ? v[x].el : R;
                for (; z <= I; )
                    _(null, v[z] = te ? cr(v[z]) : nn(v[z]), A, ae, F, G, Z, Q, te),
                    z++
            }
        } else if (z > I)
            for (; z <= oe; )
                be(h[z], F, G, !0),
                z++;
        else {
            const x = z
              , ae = z
              , pe = new Map;
            for (z = ae; z <= I; z++) {
                const Yt = v[z] = te ? cr(v[z]) : nn(v[z]);
                Yt.key != null && pe.set(Yt.key, z)
            }
            let Je, at = 0;
            const Et = I - ae + 1;
            let Qn = !1
              , Ca = 0;
            const Ni = new Array(Et);
            for (z = 0; z < Et; z++)
                Ni[z] = 0;
            for (z = x; z <= oe; z++) {
                const Yt = h[z];
                if (at >= Et) {
                    be(Yt, F, G, !0);
                    continue
                }
                let An;
                if (Yt.key != null)
                    An = pe.get(Yt.key);
                else
                    for (Je = ae; Je <= I; Je++)
                        if (Ni[Je - ae] === 0 && gn(Yt, v[Je])) {
                            An = Je;
                            break
                        }
                An === void 0 ? be(Yt, F, G, !0) : (Ni[An - ae] = z + 1,
                An >= Ca ? Ca = An : Qn = !0,
                _(Yt, v[An], A, null, F, G, Z, Q, te),
                at++)
            }
            const qu = Qn ? gb(Ni) : li;
            for (Je = qu.length - 1,
            z = Et - 1; z >= 0; z--) {
                const Yt = ae + z
                  , An = v[Yt]
                  , Gu = Yt + 1 < se ? v[Yt + 1].el : R;
                Ni[z] === 0 ? _(null, An, A, Gu, F, G, Z, Q, te) : Qn && (Je < 0 || z !== qu[Je] ? ue(An, A, Gu, 2) : Je--)
            }
        }
    }
      , ue = (h,v,A,R,F=null)=>{
        const {el: G, type: Z, transition: Q, children: te, shapeFlag: z} = h;
        if (z & 6) {
            ue(h.component.subTree, v, A, R);
            return
        }
        if (z & 128) {
            h.suspense.move(v, A, R);
            return
        }
        if (z & 64) {
            Z.move(h, v, A, ee);
            return
        }
        if (Z === yt) {
            r(G, v, A);
            for (let oe = 0; oe < te.length; oe++)
                ue(te[oe], v, A, R);
            r(h.anchor, v, A);
            return
        }
        if (Z === Gi) {
            p(h, v, A);
            return
        }
        if (R !== 2 && z & 1 && Q)
            if (R === 0)
                Q.beforeEnter(G),
                r(G, v, A),
                Lt(()=>Q.enter(G), F);
            else {
                const {leave: oe, delayLeave: I, afterLeave: x} = Q
                  , ae = ()=>r(G, v, A)
                  , pe = ()=>{
                    oe(G, ()=>{
                        ae(),
                        x && x()
                    }
                    )
                }
                ;
                I ? I(G, ae, pe) : pe()
            }
        else
            r(G, v, A)
    }
      , be = (h,v,A,R=!1,F=!1)=>{
        const {type: G, props: Z, ref: Q, children: te, dynamicChildren: z, shapeFlag: se, patchFlag: oe, dirs: I} = h;
        if (Q != null && Os(Q, null, A, h, !0),
        se & 256) {
            v.ctx.deactivate(h);
            return
        }
        const x = se & 1 && I
          , ae = !Kr(h);
        let pe;
        if (ae && (pe = Z && Z.onVnodeBeforeUnmount) && Ht(pe, v, h),
        se & 6)
            ut(h.component, A, R);
        else {
            if (se & 128) {
                h.suspense.unmount(A, R);
                return
            }
            x && Rn(h, null, v, "beforeUnmount"),
            se & 64 ? h.type.remove(h, v, A, F, ee, R) : z && (G !== yt || oe > 0 && oe & 64) ? nt(z, v, A, !1, !0) : (G === yt && oe & 384 || !F && se & 16) && nt(te, v, A),
            R && We(h)
        }
        (ae && (pe = Z && Z.onVnodeUnmounted) || x) && Lt(()=>{
            pe && Ht(pe, v, h),
            x && Rn(h, null, v, "unmounted")
        }
        , A)
    }
      , We = h=>{
        const {type: v, el: A, anchor: R, transition: F} = h;
        if (v === yt) {
            Xe(A, R);
            return
        }
        if (v === Gi) {
            y(h);
            return
        }
        const G = ()=>{
            i(A),
            F && !F.persisted && F.afterLeave && F.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && F && !F.persisted) {
            const {leave: Z, delayLeave: Q} = F
              , te = ()=>Z(A, G);
            Q ? Q(h.el, G, te) : te()
        } else
            G()
    }
      , Xe = (h,v)=>{
        let A;
        for (; h !== v; )
            A = d(h),
            i(h),
            h = A;
        i(v)
    }
      , ut = (h,v,A)=>{
        const {bum: R, scope: F, update: G, subTree: Z, um: Q} = h;
        R && fi(R),
        F.stop(),
        G && (G.active = !1,
        be(Z, h, v, A)),
        Q && Lt(Q, v),
        Lt(()=>{
            h.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , nt = (h,v,A,R=!1,F=!1,G=0)=>{
        for (let Z = G; Z < h.length; Z++)
            be(h[Z], v, A, R, F)
    }
      , j = h=>h.shapeFlag & 6 ? j(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let ne = !1;
    const X = (h,v,A)=>{
        h == null ? v._vnode && be(v._vnode, null, null, !0) : _(v._vnode || null, h, v, null, null, null, A),
        ne || (ne = !0,
        tf(),
        ws(),
        ne = !1),
        v._vnode = h
    }
      , ee = {
        p: _,
        um: be,
        m: ue,
        r: We,
        mt: W,
        mc: C,
        pc: U,
        pbc: N,
        n: j,
        o: e
    };
    let ve, xe;
    return t && ([ve,xe] = t(ee)),
    {
        render: X,
        hydrate: ve,
        createApp: ob(X, ve)
    }
}
function Va({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Cr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Jp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function tu(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (de(r) && de(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let a = i[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = cr(i[o]),
            a.el = s.el),
            n || tu(s, a)),
            a.type === Jr && (a.el = s.el)
        }
}
function gb(e) {
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
function zp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : zp(t)
}
const yb = e=>e.__isTeleport
  , qi = e=>e && (e.disabled || e.disabled === "")
  , pf = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , mf = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , Cl = (e,t)=>{
    const n = e && e.to;
    return st(n) ? t ? t(n) : null : n
}
  , vb = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, u) {
        const {mc: c, pc: f, pbc: d, o: {insert: m, querySelector: b, createText: _, createComment: S}} = u
          , g = qi(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const T = t.el = _("")
              , w = t.anchor = _("");
            m(T, n, r),
            m(w, n, r);
            const L = t.target = Cl(t.props, b)
              , C = t.targetAnchor = _("");
            L && (m(C, L),
            s === "svg" || pf(L) ? s = "svg" : (s === "mathml" || mf(L)) && (s = "mathml"));
            const O = (N,H)=>{
                E & 16 && c(p, N, H, i, o, s, a, l)
            }
            ;
            g ? O(n, w) : L && O(L, C)
        } else {
            t.el = e.el;
            const T = t.anchor = e.anchor
              , w = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , C = qi(e.props)
              , O = C ? n : w
              , N = C ? T : L;
            if (s === "svg" || pf(w) ? s = "svg" : (s === "mathml" || mf(w)) && (s = "mathml"),
            y ? (d(e.dynamicChildren, y, O, i, o, s, a),
            tu(e, t, !0)) : l || f(e, t, O, N, i, o, s, a, !1),
            g)
                C ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : is(t, n, T, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const H = t.target = Cl(t.props, b);
                H && is(t, H, null, u, 0)
            } else
                C && is(t, w, L, u, 1)
        }
        Qp(t)
    },
    remove(e, t, n, r, {um: i, o: {remove: o}}, s) {
        const {shapeFlag: a, children: l, anchor: u, targetAnchor: c, target: f, props: d} = e;
        if (f && o(c),
        s && o(u),
        a & 16) {
            const m = s || !qi(d);
            for (let b = 0; b < l.length; b++) {
                const _ = l[b];
                i(_, t, n, m, !!_.dynamicChildren)
            }
        }
    },
    move: is,
    hydrate: bb
};
function is(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: u, props: c} = e
      , f = o === 2;
    if (f && r(s, t, n),
    (!f || qi(c)) && l & 16)
        for (let d = 0; d < u.length; d++)
            i(u[d], t, n, 2);
    f && r(a, t, n)
}
function bb(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: a, querySelector: l}}, u) {
    const c = t.target = Cl(t.props, l);
    if (c) {
        const f = c._lpa || c.firstChild;
        if (t.shapeFlag & 16)
            if (qi(t.props))
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
        Qp(t)
    }
    return t.anchor && s(t.anchor)
}
const _b = vb;
function Qp(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const yt = Symbol.for("v-fgt")
  , Jr = Symbol.for("v-txt")
  , Vt = Symbol.for("v-cmt")
  , Gi = Symbol.for("v-stc")
  , Wi = [];
let an = null;
function me(e=!1) {
    Wi.push(an = e ? null : [])
}
function Xp() {
    Wi.pop(),
    an = Wi[Wi.length - 1] || null
}
let vi = 1;
function gf(e) {
    vi += e
}
function Zp(e) {
    return e.dynamicChildren = vi > 0 ? an || li : null,
    Xp(),
    vi > 0 && an && an.push(e),
    e
}
function ze(e, t, n, r, i, o) {
    return Zp(ge(e, t, n, r, i, o, !0))
}
function Tt(e, t, n, r, i) {
    return Zp(et(e, t, n, r, i, !0))
}
function bi(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function gn(e, t) {
    return e.type === t.type && e.key === t.key
}
const oa = "__vInternal"
  , $p = ({key: e})=>e ?? null
  , ps = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? st(e) || ct(e) || ye(e) ? {
    i: mt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function ge(e, t=null, n=null, r=0, i=null, o=e === yt ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && $p(t),
        ref: t && ps(t),
        scopeId: ta,
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
        ctx: mt
    };
    return a ? (nu(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= st(n) ? 8 : 16),
    vi > 0 && !s && an && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && an.push(l),
    l
}
const et = Eb;
function Eb(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === Cp) && (e = Vt),
    bi(e)) {
        const a = Wn(e, t, !0);
        return n && nu(a, n),
        vi > 0 && !o && an && (a.shapeFlag & 6 ? an[an.indexOf(e)] = a : an.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (Cb(e) && (e = e.__vccOpts),
    t) {
        t = Qt(t);
        let {class: a, style: l} = t;
        a && !st(a) && (t.class = Nt(a)),
        rt(l) && (yp(l) && !de(l) && (l = bt({}, l)),
        t.style = Dn(l))
    }
    const s = st(e) ? 1 : Op(e) ? 128 : yb(e) ? 64 : rt(e) ? 4 : ye(e) ? 2 : 0;
    return ge(e, t, n, r, i, s, o, !0)
}
function Qt(e) {
    return e ? yp(e) || oa in e ? bt({}, e) : e : null
}
function Wn(e, t, n=!1) {
    const {props: r, ref: i, patchFlag: o, children: s} = e
      , a = t ? _i(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && $p(a),
        ref: t && t.ref ? n && i ? de(i) ? i.concat(ps(t)) : [i, ps(t)] : ps(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== yt ? o === -1 ? 16 : o | 16 : o,
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
function em(e=" ", t=0) {
    return et(Jr, null, e, t)
}
function UM(e, t) {
    const n = et(Gi, null, e);
    return n.staticCount = t,
    n
}
function Wt(e="", t=!1) {
    return t ? (me(),
    Tt(Vt, null, e)) : et(Vt, null, e)
}
function nn(e) {
    return e == null || typeof e == "boolean" ? et(Vt) : de(e) ? et(yt, null, e.slice()) : typeof e == "object" ? cr(e) : et(Jr, null, String(e))
}
function cr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wn(e)
}
function nu(e, t) {
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
            nu(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(oa in t) ? t._ctx = mt : i === 3 && mt && (mt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ye(t) ? (t = {
            default: t,
            _ctx: mt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [em(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function _i(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = Nt([t.class, r.class]));
            else if (i === "style")
                t.style = Dn([t.style, r.style]);
            else if (Ro(i)) {
                const o = t[i]
                  , s = r[i];
                s && o !== s && !(de(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function Ht(e, t, n, r=null) {
    cn(e, t, 7, [n, r])
}
const Tb = Hp();
let kb = 0;
function Sb(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || Tb
      , o = {
        uid: kb++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new op(!0),
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
        propsOptions: Kp(r, i),
        emitsOptions: Lp(r, i),
        emit: null,
        emitted: null,
        propsDefaults: it,
        inheritAttrs: r.inheritAttrs,
        ctx: it,
        data: it,
        props: it,
        attrs: it,
        slots: it,
        refs: it,
        setupState: it,
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
    o.emit = v0.bind(null, o),
    e.ce && e.ce(o),
    o
}
let kt = null;
const wn = ()=>kt || mt;
let Rs, Ol;
{
    const e = np()
      , t = (n,r)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o=>{
            i.length > 1 ? i.forEach(s=>s(o)) : i[0](o)
        }
    }
    ;
    Rs = t("__VUE_INSTANCE_SETTERS__", n=>kt = n),
    Ol = t("__VUE_SSR_SETTERS__", n=>sa = n)
}
const zr = e=>{
    const t = kt;
    return Rs(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Rs(t)
    }
}
  , Rl = ()=>{
    kt && kt.scope.off(),
    Rs(null)
}
;
function tm(e) {
    return e.vnode.shapeFlag & 4
}
let sa = !1;
function wb(e, t=!1) {
    t && Ol(t);
    const {props: n, children: r} = e.vnode
      , i = tm(e);
    sb(e, n, i, t),
    cb(e, r);
    const o = i ? Ab(e, t) : void 0;
    return t && Ol(!1),
    o
}
function Ab(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = pt(new Proxy(e.ctx,z0));
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? rm(e) : null
          , o = zr(e);
        Zr();
        const s = vr(r, e, 0, [e.props, i]);
        if ($r(),
        o(),
        Pc(s)) {
            if (s.then(Rl, Rl),
            t)
                return s.then(a=>{
                    Il(e, a, t)
                }
                ).catch(a=>{
                    Do(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Il(e, s, t)
    } else
        nm(e, t)
}
function Il(e, t, n) {
    ye(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : rt(t) && (e.setupState = Ep(t)),
    nm(e, n)
}
let yf;
function nm(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && yf && !r.render) {
            const i = r.template || Zc(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = bt(bt({
                    isCustomElement: o,
                    delimiters: a
                }, s), l);
                r.render = yf(i, u)
            }
        }
        e.render = r.render || sn
    }
    {
        const i = zr(e);
        Zr();
        try {
            $0(e)
        } finally {
            $r(),
            i()
        }
    }
}
function Lb(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return Kt(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function rm(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return Lb(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function aa(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Ep(pt(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Yi)
                    return Yi[n](e)
            },
            has(t, n) {
                return n in t || n in Yi
            }
        }))
}
function Pl(e, t=!0) {
    return ye(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Cb(e) {
    return ye(e) && "__vccOpts"in e
}
const fe = (e,t)=>l0(e, t, sa);
function dt(e, t, n) {
    const r = arguments.length;
    return r === 2 ? rt(t) && !de(t) ? bi(t) ? et(e, null, [t]) : et(e, t) : et(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && bi(n) && (n = [n]),
    et(e, t, n))
}
const im = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ob = "http://www.w3.org/2000/svg"
  , Rb = "http://www.w3.org/1998/Math/MathML"
  , ur = typeof document < "u" ? document : null
  , vf = ur && ur.createElement("template")
  , Ib = {
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
        const i = t === "svg" ? ur.createElementNS(Ob, e) : t === "mathml" ? ur.createElementNS(Rb, e) : ur.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e=>ur.createTextNode(e),
    createComment: e=>ur.createComment(e),
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
    querySelector: e=>ur.querySelector(e),
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
            vf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = vf.content;
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
  , $n = "transition"
  , Vi = "animation"
  , po = Symbol("_vtc")
  , No = (e,{slots: t})=>dt(U0, Pb(e), t);
No.displayName = "Transition";
const om = {
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
No.props = bt({}, Pp, om);
const Or = (e,t=[])=>{
    de(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , bf = e=>e ? de(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function Pb(e) {
    const t = {};
    for (const B in e)
        B in om || (t[B] = e[B]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: u=s, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , b = Mb(i)
      , _ = b && b[0]
      , S = b && b[1]
      , {onBeforeEnter: g, onEnter: E, onEnterCancelled: p, onLeave: y, onLeaveCancelled: T, onBeforeAppear: w=g, onAppear: L=E, onAppearCancelled: C=p} = t
      , O = (B,$,W)=>{
        Rr(B, $ ? c : a),
        Rr(B, $ ? u : s),
        W && W()
    }
      , N = (B,$)=>{
        B._isLeaving = !1,
        Rr(B, f),
        Rr(B, m),
        Rr(B, d),
        $ && $()
    }
      , H = B=>($,W)=>{
        const Y = B ? L : E
          , V = ()=>O($, B, W);
        Or(Y, [$, V]),
        _f(()=>{
            Rr($, B ? l : o),
            er($, B ? c : a),
            bf(Y) || Ef($, r, _, V)
        }
        )
    }
    ;
    return bt(t, {
        onBeforeEnter(B) {
            Or(g, [B]),
            er(B, o),
            er(B, s)
        },
        onBeforeAppear(B) {
            Or(w, [B]),
            er(B, l),
            er(B, u)
        },
        onEnter: H(!1),
        onAppear: H(!0),
        onLeave(B, $) {
            B._isLeaving = !0;
            const W = ()=>N(B, $);
            er(B, f),
            Vb(),
            er(B, d),
            _f(()=>{
                B._isLeaving && (Rr(B, f),
                er(B, m),
                bf(y) || Ef(B, r, S, W))
            }
            ),
            Or(y, [B, W])
        },
        onEnterCancelled(B) {
            O(B, !1),
            Or(p, [B])
        },
        onAppearCancelled(B) {
            O(B, !0),
            Or(C, [B])
        },
        onLeaveCancelled(B) {
            N(B),
            Or(T, [B])
        }
    })
}
function Mb(e) {
    if (e == null)
        return null;
    if (rt(e))
        return [Fa(e.enter), Fa(e.leave)];
    {
        const t = Fa(e);
        return [t, t]
    }
}
function Fa(e) {
    return tp(e)
}
function er(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[po] || (e[po] = new Set)).add(t)
}
function Rr(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[po];
    n && (n.delete(t),
    n.size || (e[po] = void 0))
}
function _f(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let Db = 0;
function Ef(e, t, n, r) {
    const i = e._endId = ++Db
      , o = ()=>{
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: a, propCount: l} = Nb(e, t);
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
function Nb(e, t) {
    const n = window.getComputedStyle(e)
      , r = b=>(n[b] || "").split(", ")
      , i = r(`${$n}Delay`)
      , o = r(`${$n}Duration`)
      , s = Tf(i, o)
      , a = r(`${Vi}Delay`)
      , l = r(`${Vi}Duration`)
      , u = Tf(a, l);
    let c = null
      , f = 0
      , d = 0;
    t === $n ? s > 0 && (c = $n,
    f = s,
    d = o.length) : t === Vi ? u > 0 && (c = Vi,
    f = u,
    d = l.length) : (f = Math.max(s, u),
    c = f > 0 ? s > u ? $n : Vi : null,
    d = c ? c === $n ? o.length : l.length : 0);
    const m = c === $n && /\b(transform|all)(,|$)/.test(r(`${$n}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function Tf(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>kf(n) + kf(e[r])))
}
function kf(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Vb() {
    return document.body.offsetHeight
}
function Fb(e, t, n) {
    const r = e[po];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Is = Symbol("_vod")
  , sm = Symbol("_vsh")
  , xM = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Is] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Fi(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Fi(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Fi(e, !1)
        }
        ) : Fi(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Fi(e, t)
    }
};
function Fi(e, t) {
    e.style.display = t ? e[Is] : "none",
    e[sm] = !t
}
const Bb = Symbol("")
  , Ub = /(^|;)\s*display\s*:/;
function xb(e, t, n) {
    const r = e.style
      , i = st(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (st(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && ms(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && ms(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            ms(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[Bb];
            s && (n += ";" + s),
            r.cssText = n,
            o = Ub.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Is in e && (e[Is] = o ? r.display : "",
    e[sm] && (r.display = "none"))
}
const Sf = /\s*!important$/;
function ms(e, t, n) {
    if (de(n))
        n.forEach(r=>ms(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Hb(e, t);
        Sf.test(n) ? e.setProperty(Xr(r), n.replace(Sf, ""), "important") : e[r] = n
    }
}
const wf = ["Webkit", "Moz", "ms"]
  , Ba = {};
function Hb(e, t) {
    const n = Ba[t];
    if (n)
        return n;
    let r = Fn(t);
    if (r !== "filter" && r in e)
        return Ba[t] = r;
    r = Xs(r);
    for (let i = 0; i < wf.length; i++) {
        const o = wf[i] + r;
        if (o in e)
            return Ba[t] = o
    }
    return t
}
const Af = "http://www.w3.org/1999/xlink";
function jb(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Af, t.slice(6, t.length)) : e.setAttributeNS(Af, t, n);
    else {
        const o = xv(t);
        n == null || o && !rp(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function Kb(e, t, n, r, i, o, s) {
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
        u === "boolean" ? n = rp(n) : n == null && u === "string" ? (n = "",
        l = !0) : u === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function ri(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Yb(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Lf = Symbol("_vei");
function qb(e, t, n, r, i=null) {
    const o = e[Lf] || (e[Lf] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = Gb(t);
        if (r) {
            const u = o[t] = zb(r, i);
            ri(e, a, u, l)
        } else
            s && (Yb(e, a, s, l),
            o[t] = void 0)
    }
}
const Cf = /(?:Once|Passive|Capture)$/;
function Gb(e) {
    let t;
    if (Cf.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Cf); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Xr(e.slice(2)), t]
}
let Ua = 0;
const Wb = Promise.resolve()
  , Jb = ()=>Ua || (Wb.then(()=>Ua = 0),
Ua = Date.now());
function zb(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        cn(Qb(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Jb(),
    n
}
function Qb(e, t) {
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
const Of = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Xb = (e,t,n,r,i,o,s,a,l)=>{
    const u = i === "svg";
    t === "class" ? Fb(e, r, u) : t === "style" ? xb(e, n, r) : Ro(t) ? Rc(t) || qb(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Zb(e, t, r, u)) ? Kb(e, t, r, o, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    jb(e, t, r, u))
}
;
function Zb(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Of(t) && ye(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Of(t) && st(n) ? !1 : t in e
}
const Rf = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return de(t) ? n=>fi(t, n) : t
}
;
function $b(e) {
    e.target.composing = !0
}
function If(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const xa = Symbol("_assign")
  , HM = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[xa] = Rf(i);
        const o = r || i.props && i.props.type === "number";
        ri(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = pl(a)),
            e[xa](a)
        }
        ),
        n && ri(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (ri(e, "compositionstart", $b),
        ri(e, "compositionend", If),
        ri(e, "change", If))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: i}}, o) {
        if (e[xa] = Rf(o),
        e.composing)
            return;
        const s = i || e.type === "number" ? pl(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , e_ = ["ctrl", "shift", "alt", "meta"]
  , t_ = {
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
    exact: (e,t)=>e_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , jM = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i,...o)=>{
        for (let s = 0; s < t.length; s++) {
            const a = t_[t[s]];
            if (a && a(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , n_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , r_ = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i=>{
        if (!("key"in i))
            return;
        const o = Xr(i.key);
        if (t.some(s=>s === o || n_[s] === o))
            return e(i)
    }
    )
}
  , am = bt({
    patchProp: Xb
}, Ib);
let Ji, Pf = !1;
function i_() {
    return Ji || (Ji = pb(am))
}
function o_() {
    return Ji = Pf ? Ji : mb(am),
    Pf = !0,
    Ji
}
const lm = (...e)=>{
    const t = i_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = um(r);
        if (!i)
            return;
        const o = t._component;
        !ye(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, cm(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , s_ = (...e)=>{
    const t = o_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = um(r);
        if (i)
            return n(i, !0, cm(i))
    }
    ,
    t
}
;
function cm(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function um(e) {
    return st(e) ? document.querySelector(e) : e
}
const a_ = /#/g
  , l_ = /&/g
  , c_ = /\//g
  , u_ = /=/g
  , ru = /\+/g
  , f_ = /%5e/gi
  , d_ = /%60/gi
  , h_ = /%7c/gi
  , p_ = /%20/gi;
function m_(e) {
    return encodeURI("" + e).replace(h_, "|")
}
function Ml(e) {
    return m_(typeof e == "string" ? e : JSON.stringify(e)).replace(ru, "%2B").replace(p_, "+").replace(a_, "%23").replace(l_, "%26").replace(d_, "`").replace(f_, "^").replace(c_, "%2F")
}
function Ha(e) {
    return Ml(e).replace(u_, "%3D")
}
function Ps(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function g_(e) {
    return Ps(e.replace(ru, " "))
}
function y_(e) {
    return Ps(e.replace(ru, " "))
}
function iu(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = g_(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = y_(r[2] || "");
        t[i] === void 0 ? t[i] = o : Array.isArray(t[i]) ? t[i].push(o) : t[i] = [t[i], o]
    }
    return t
}
function v_(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Ha(e)}=${Ml(n)}`).join("&") : `${Ha(e)}=${Ml(t)}` : Ha(e)
}
function b_(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>v_(t, e[t])).filter(Boolean).join("&")
}
const __ = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , E_ = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , T_ = /^([/\\]\s*){2,}[^/\\]/
  , k_ = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , S_ = /\/$|\/\?|\/#/
  , w_ = /^\.?\//;
function Un(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? __.test(e) : E_.test(e) || (t.acceptRelative ? T_.test(e) : !1)
}
function A_(e) {
    return !!e && k_.test(e)
}
function Dl(e="", t) {
    return t ? S_.test(e) : e.endsWith("/")
}
function Vo(e="", t) {
    if (!t)
        return (Dl(e) ? e.slice(0, -1) : e) || "/";
    if (!Dl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const i = e.indexOf("#");
    i >= 0 && (n = e.slice(0, i),
    r = e.slice(i));
    const [o,...s] = n.split("?");
    return (o.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function mo(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (Dl(e, !0))
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
function L_(e="") {
    return e.startsWith("/")
}
function Mf(e="") {
    return L_(e) ? e : "/" + e
}
function C_(e, t) {
    if (dm(t) || Un(e))
        return e;
    const n = Vo(t);
    return e.startsWith(n) ? e : Pi(n, e)
}
function Df(e, t) {
    if (dm(t))
        return e;
    const n = Vo(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function fm(e, t) {
    const n = Fo(e)
      , r = {
        ...iu(n.search),
        ...t
    };
    return n.search = b_(r),
    R_(n)
}
function dm(e) {
    return !e || e === "/"
}
function O_(e) {
    return e && e !== "/"
}
function Pi(e, ...t) {
    let n = e || "";
    for (const r of t.filter(i=>O_(i)))
        if (n) {
            const i = r.replace(w_, "");
            n = mo(n) + i
        } else
            n = r;
    return n
}
function Nl(e, t, n={}) {
    return n.trailingSlash || (e = mo(e),
    t = mo(t)),
    n.leadingSlash || (e = Mf(e),
    t = Mf(t)),
    n.encoding || (e = Ps(e),
    t = Ps(t)),
    e === t
}
const hm = Symbol.for("ufo:protocolRelative");
function Fo(e="", t) {
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
        return t ? Fo(t + e) : Vl(e);
    const [,r="",i,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: u, hash: c} = Vl(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: s,
        pathname: l,
        search: u,
        hash: c,
        [hm]: !r
    }
}
function Vl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function R_(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , i = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[hm] ? (e.protocol || "") + "//" : "") + i + o + t + n + r
}
const I_ = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Ms = I_().app
  , P_ = ()=>Ms.baseURL
  , M_ = ()=>Ms.buildAssetsDir
  , ou = (...e)=>Pi(pm(), M_(), ...e)
  , pm = (...e)=>{
    const t = Ms.cdnURL || Ms.baseURL;
    return e.length ? Pi(t, ...e) : t
}
;
globalThis.__buildAssetsURL = ou,
globalThis.__publicAssetsURL = pm;
const D_ = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , N_ = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , V_ = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function F_(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        B_(e);
        return
    }
    return t
}
function B_(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function go(e, t={}) {
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
    if (!V_.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (D_.test(e) || N_.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, F_)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class U_ extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function x_(e) {
    var l, u, c, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((u = e.error) == null ? void 0 : u.toString()) || ""
      , n = ((c = e.request) == null ? void 0 : c.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${i}: ${o}${t ? ` ${t}` : ""}`
      , a = new U_(s,e.error ? {
        cause: e.error
    } : void 0);
    for (const m of ["request", "options", "response"])
        Object.defineProperty(a, m, {
            get() {
                return e[m]
            }
        });
    for (const [m,b] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, m, {
            get() {
                return e.response && e.response[b]
            }
        });
    return a
}
const H_ = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Nf(e="GET") {
    return H_.has(e.toUpperCase())
}
function j_(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const K_ = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Y_ = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function q_(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Y_.test(t) ? "json" : K_.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function G_(e, t, n=globalThis.Headers) {
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
const W_ = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , J_ = new Set([101, 204, 205, 304]);
function mm(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = Nf(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : W_.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                o(a.request, {
                    ...a.options,
                    retry: c - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const u = x_(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, o),
        u
    }
    const o = async function(l, u={}) {
        var d;
        const c = {
            request: l,
            options: G_(u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (c.options.method = (d = c.options.method) == null ? void 0 : d.toUpperCase(),
        c.options.onRequest && await c.options.onRequest(c),
        typeof c.request == "string" && (c.options.baseURL && (c.request = C_(c.request, c.options.baseURL)),
        (c.options.query || c.options.params) && (c.request = fm(c.request, {
            ...c.options.params,
            ...c.options.query
        }))),
        c.options.body && Nf(c.options.method) && (j_(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
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
        if (c.response.body && !J_.has(c.response.status) && c.options.method !== "HEAD") {
            const m = (c.options.parseResponse ? "json" : c.options.responseType) || q_(c.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const b = await c.response.text()
                      , _ = c.options.parseResponse || go;
                    c.response._data = _(b);
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
    s.create = (a={})=>mm({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const su = function() {
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
  , z_ = su.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Q_ = su.Headers
  , X_ = su.AbortController
  , Z_ = mm({
    fetch: z_,
    Headers: Q_,
    AbortController: X_
})
  , $_ = Z_;
globalThis.$fetch || (globalThis.$fetch = $_.create({
    baseURL: P_()
}));
function Fl(e, t={}, n) {
    for (const r in e) {
        const i = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? Fl(i, t, o) : typeof i == "function" && (t[o] = i)
    }
    return t
}
const eE = {
    run: e=>e()
}
  , tE = ()=>eE
  , gm = typeof console.createTask < "u" ? console.createTask : tE;
function nE(e, t) {
    const n = t.shift()
      , r = gm(n);
    return e.reduce((i,o)=>i.then(()=>r.run(()=>o(...t))), Promise.resolve())
}
function rE(e, t) {
    const n = t.shift()
      , r = gm(n);
    return Promise.all(e.map(i=>r.run(()=>i(...t))))
}
function ja(e, t) {
    for (const n of [...e])
        n(t)
}
class iE {
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
        const n = Fl(t)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(t) {
        const n = Fl(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(nE, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(rE, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && ja(this._before, i);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(()=>{
            this._after && i && ja(this._after, i)
        }
        ) : (this._after && i && ja(this._after, i),
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
function ym() {
    return new iE
}
function oE(e={}) {
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
            Bl.add(u);
            try {
                const c = i ? i.run(s, a) : a();
                return n || (t = void 0),
                await c
            } finally {
                Bl.delete(u)
            }
        }
    }
}
function sE(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = oE({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Vf = "__unctx__"
  , aE = Ds[Vf] || (Ds[Vf] = sE())
  , lE = (e,t={})=>aE.get(e, t)
  , Ff = "__unctx_async_handlers__"
  , Bl = Ds[Ff] || (Ds[Ff] = new Set);
function Pn(e) {
    const t = [];
    for (const i of Bl) {
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
const vm = lE("nuxt-app", {
    asyncContext: !1
})
  , cE = "__nuxt_plugin";
function uE(e) {
    let t = 0;
    const n = {
        _scope: Po(),
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
        runWithContext: i=>n._scope.run(()=>hE(n, i)),
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
    n.hooks = ym(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (i,o)=>{
        const s = "$" + i;
        os(n, s, o),
        os(n.vueApp.config.globalProperties, s, o)
    }
    ,
    os(n.vueApp, "$nuxt", n),
    os(n.vueApp.config.globalProperties, "$nuxt", n);
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
async function fE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function dE(e, t) {
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
            const f = fE(e, l).then(async()=>{
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
function Bt(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || (()=>{}
    ), e, {
        [cE]: !0,
        _name: t
    })
}
function hE(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return vm.set(e),
    e.vueApp.runWithContext(r)
}
function pE() {
    var t;
    let e;
    return $c() && (e = (t = wn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || vm.tryUse(),
    e || null
}
function re() {
    const e = pE();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function zn(e) {
    return re().$config
}
function os(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const ss = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function mE(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , i = (t || {}).decode || vE;
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
            n[l] = yE(u, i)
        }
        o = a + 1
    }
    return n
}
function Bf(e, t, n) {
    const r = n || {}
      , i = r.encode || bE;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!ss.test(e))
        throw new TypeError("argument name is invalid");
    const o = i(t);
    if (o && !ss.test(o))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!ss.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!ss.test(r.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!gE(r.expires) || Number.isNaN(r.expires.valueOf()))
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
function gE(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function yE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function vE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function bE(e) {
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
function xf(e, t) {
    t ? t = {
        ...Uf,
        ...t
    } : t = Uf;
    const n = bm(t);
    return n.dispatch(e),
    n.toString()
}
const _E = Object.freeze(["prototype", "__proto__", "constructor"]);
function bm(e) {
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
                e.respectType !== !1 && !Hf(i) && (c = _E),
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
                const u = bm(e);
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
            Hf(i) ? this.dispatch("[native]") : this.dispatch(i.toString()),
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
const _m = "[native code] }"
  , EE = _m.length;
function Hf(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-EE) === _m
}
function TE(e, t, n={}) {
    return e === t || xf(e, n) === xf(t, n)
}
function kE(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>Tm(t, e)
    }
}
function Em(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,i])=>[r, Em(i)])) : new Map(Object.entries(e[n]));
    return t
}
function SE(e) {
    return kE(Em(e))
}
function Tm(e, t) {
    const n = [];
    for (const [i,o] of jf(t.wildcard))
        e.startsWith(i) && n.push(o);
    for (const [i,o] of jf(t.dynamic))
        if (e.startsWith(i + "/")) {
            const s = "/" + e.slice(i.length).split("/").splice(2).join("/");
            n.push(...Tm(s, o))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function jf(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function Ka(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Ul(e, t, n=".", r) {
    if (!Ka(t))
        return Ul(e, {}, n, r);
    const i = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = e[o];
        s != null && (r && r(i, o, s, n) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : Ka(s) && Ka(i[o]) ? i[o] = Ul(s, i[o], (n ? `${n}.` : "") + o.toString(), r) : i[o] = s))
    }
    return i
}
function km(e) {
    return (...t)=>t.reduce((n,r)=>Ul(n, r, "", e), {})
}
const au = km()
  , wE = km((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function AE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var LE = Object.defineProperty
  , CE = (e,t,n)=>t in e ? LE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Nr = (e,t,n)=>(CE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class xl extends Error {
    constructor(t, n={}) {
        super(t, n),
        Nr(this, "statusCode", 500),
        Nr(this, "fatal", !1),
        Nr(this, "unhandled", !1),
        Nr(this, "statusMessage"),
        Nr(this, "data"),
        Nr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: jl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Sm(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Nr(xl, "__h3_error__", !0);
function Hl(e) {
    if (typeof e == "string")
        return new xl(e);
    if (OE(e))
        return e;
    const t = new xl(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (AE(e, "stack"))
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
    e.statusCode ? t.statusCode = jl(e.statusCode, t.statusCode) : e.status && (t.statusCode = jl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        Sm(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function OE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const RE = /[^\u0009\u0020-\u007E]/g;
function Sm(e="") {
    return e.replace(RE, "")
}
function jl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const wm = Symbol("layout-meta")
  , Bo = Symbol("route")
  , Xt = ()=>{
    var e;
    return (e = re()) == null ? void 0 : e.$router
}
  , la = ()=>$c() ? wt(Bo, re()._route) : re()._route;
const IE = (e,t,n={})=>{
    const r = re()
      , i = n.global || typeof e != "string"
      , o = typeof e != "string" ? e : t;
    if (!o) {
        console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
        return
    }
    i ? r._middleware.global.push(o) : r._middleware.named[e] = o
}
  , PE = ()=>{
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
    const n = typeof e == "string" ? e : fm(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = t.open
              , u = Object.entries(l).filter(([c,f])=>f !== void 0).map(([c,f])=>`${c.toLowerCase()}=${f}`).join(", ");
            open(n, a, u)
        }
        return Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || Un(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = Fo(n).protocol;
        if (a && A_(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = PE();
    if (!r && i)
        return e;
    const o = Xt()
      , s = re();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    i ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Am = "__nuxt_error"
  , ca = ()=>si(re().payload, "error")
  , ai = e=>{
    const t = ua(e);
    try {
        const n = re()
          , r = ca();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , ME = async(e={})=>{
    const t = re()
      , n = ca();
    t.callHook("app:error:cleared", e),
    e.redirect && await Xt().replace(e.redirect),
    n.value = null
}
  , DE = e=>!!e && typeof e == "object" && Am in e
  , ua = e=>{
    const t = Hl(e);
    return Object.defineProperty(t, Am, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , NE = "modulepreload"
  , VE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , Kf = {}
  , FE = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        i = Promise.all(n.map(s=>{
            if (s = VE(s, r),
            s in Kf)
                return;
            Kf[s] = !0;
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
            if (c.rel = a ? "stylesheet" : NE,
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
  , k = (...e)=>FE(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , BE = -1
  , UE = -2
  , xE = -3
  , HE = -4
  , jE = -5
  , KE = -6;
function YE(e, t) {
    return qE(JSON.parse(e), t)
}
function qE(e, t) {
    if (typeof e == "number")
        return i(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function i(o, s=!1) {
        if (o === BE)
            return;
        if (o === xE)
            return NaN;
        if (o === HE)
            return 1 / 0;
        if (o === jE)
            return -1 / 0;
        if (o === KE)
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
                    c !== UE && (l[u] = i(c))
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
function GE(e) {
    return Array.isArray(e) ? e : [e]
}
const WE = ["title", "titleTemplate", "script", "style", "noscript"]
  , gs = ["base", "meta", "link", "style", "script", "noscript"]
  , JE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , zE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Lm = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , QE = typeof window < "u";
function lu(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Yf(e) {
    return e._h || lu(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function Cm(e, t) {
    const {props: n, tag: r} = e;
    if (zE.includes(r))
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
function qf(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function Om(e, t) {
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
            return typeof u == "object" ? Om(u, t) : Array.isArray(u) ? u : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: u
            }
        }
        ).flat());
    return n
}
function Rm(e, t) {
    return Object.entries(e).map(([n,r])=>{
        if (typeof r == "object" && (r = Rm(r, t)),
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
const Pt = e=>({
    keyValue: e,
    metaKey: "property"
})
  , Ya = e=>({
    keyValue: e
})
  , cu = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${Yn(e)}=${t}`
            }
        }
    },
    articleExpirationTime: Pt("article:expiration_time"),
    articleModifiedTime: Pt("article:modified_time"),
    articlePublishedTime: Pt("article:published_time"),
    bookReleaseDate: Pt("book:release_date"),
    charset: {
        metaKey: "charset"
    },
    contentSecurityPolicy: {
        unpack: {
            entrySeparator: "; ",
            resolve({key: e, value: t}) {
                return `${Yn(e)} ${t}`
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
    fbAppId: Pt("fb:app_id"),
    msapplicationConfig: Ya("msapplication-Config"),
    msapplicationTileColor: Ya("msapplication-TileColor"),
    msapplicationTileImage: Ya("msapplication-TileImage"),
    ogAudioSecureUrl: Pt("og:audio:secure_url"),
    ogAudioUrl: Pt("og:audio"),
    ogImageSecureUrl: Pt("og:image:secure_url"),
    ogImageUrl: Pt("og:image"),
    ogSiteName: Pt("og:site_name"),
    ogVideoSecureUrl: Pt("og:video:secure_url"),
    ogVideoUrl: Pt("og:video"),
    profileFirstName: Pt("profile:first_name"),
    profileLastName: Pt("profile:last_name"),
    profileUsername: Pt("profile:username"),
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
                return typeof t == "boolean" ? `${Yn(e)}` : `${Yn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , Im = ["og", "book", "article", "profile"];
function Pm(e) {
    var n;
    const t = Yn(e).split(":")[0];
    return Im.includes(t) ? "property" : ((n = cu[e]) == null ? void 0 : n.metaKey) || "name"
}
function XE(e) {
    var t;
    return ((t = cu[e]) == null ? void 0 : t.keyValue) || Yn(e)
}
function Yn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return Im.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function Kl(e) {
    if (Array.isArray(e))
        return e.map(n=>Kl(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[Yn(n)] = Kl(r);
    return t
}
function ZE(e, t) {
    const n = cu[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Rm(Kl(e), {
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
const Mm = ["og:image", "og:video", "og:audio", "twitter:image"];
function Dm(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function Gf(e, t) {
    const n = Dm(t)
      , r = Yn(e)
      , i = Pm(r);
    if (Mm.includes(r)) {
        const o = {};
        return Object.entries(n).forEach(([s,a])=>{
            o[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Nm(o).sort((s,a)=>{
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
function Nm(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([i,o])=>{
        if (!Array.isArray(o)) {
            if (typeof o == "object" && o) {
                if (Mm.includes(Yn(i))) {
                    t.push(...Gf(i, o));
                    return
                }
                n[i] = Dm(o)
            } else
                n[i] = o;
            return
        }
        o.forEach(s=>{
            t.push(...typeof s == "string" ? Nm({
                [i]: s
            }) : Gf(i, s))
        }
        )
    }
    );
    const r = Om(n, {
        key({key: i}) {
            return Pm(i)
        },
        value({key: i}) {
            return i === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: i}) {
            return XE(i)
        },
        resolveValueData({value: i, key: o}) {
            return i === null ? "_null" : typeof i == "object" ? ZE(i, o) : typeof i == "number" ? i.toString() : i
        }
    });
    return [...t, ...r].map(i=>(i.content === "_null" && (i.content = null),
    i))
}
async function $E(e, t, n) {
    const r = {
        tag: e,
        props: await Vm(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Lm.forEach(i=>{
        const o = typeof r.props[i] < "u" ? r.props[i] : n[i];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || WE.includes(r.tag)) && (r[i === "children" ? "innerHTML" : i] = o),
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
function eT(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function Vm(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = eT(e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !Lm.includes(n)) {
            const r = String(e[n])
              , i = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = i ? "true" : !0 : e[n] || (i && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const tT = 10;
async function nT(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && JE.includes(n)).forEach(([n,r])=>{
        const i = GE(r);
        t.push(...i.map(o=>$E(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << tT) + r,
    n))
}
const Wf = {
    base: -10,
    title: 10
}
  , Jf = {
    critical: -80,
    high: -10,
    low: 20
};
function Ns(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Wf && (t = Wf[e.tag]),
    typeof n == "string" && n in Jf ? t + Jf[n] : t)
}
const rT = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Fm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , tr = "%separator";
function ys(e, t, n) {
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
    e.includes(tr) && (e.endsWith(tr) && (e = e.slice(0, -tr.length).trim()),
    e.startsWith(tr) && (e = e.slice(tr.length).trim()),
    e = e.replace(new RegExp(`\\${tr}\\s*\\${tr}`,"g"), tr),
    e = ys(e, {
        separator: n
    }, n)),
    e
}
async function iT(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Vm(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = Cm(t),
    t
}
async function Bm(e, t={}) {
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
        id: gs.includes(f.tag) ? Yf(f) : f.tag,
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
            for (const m of [...d].filter(b=>gs.includes(b.tagName.toLowerCase())))
                o.elMap[m.getAttribute("data-hid") || Yf(await iT(m))] = m
        }
    }
    o.pendingSideEffects = {
        ...o.sideEffects || {}
    },
    o.sideEffects = {};
    function s(f, d, m) {
        const b = `${f}:${d}`;
        o.sideEffects[b] = m,
        delete o.pendingSideEffects[b]
    }
    function a({id: f, $el: d, tag: m}) {
        const b = m.tag.endsWith("Attrs");
        o.elMap[f] = d,
        b || (["textContent", "innerHTML"].forEach(_=>{
            m[_] && m[_] !== d[_] && (d[_] = m[_])
        }
        ),
        s(f, "el", ()=>{
            o.elMap[f].remove(),
            delete o.elMap[f]
        }
        )),
        Object.entries(m.props).forEach(([_,S])=>{
            const g = `attr:${_}`;
            if (_ === "class")
                for (const E of (S || "").split(" ").filter(Boolean))
                    b && s(f, `${g}:${E}`, ()=>d.classList.remove(E)),
                    !d.classList.contains(E) && d.classList.add(E);
            else
                d.getAttribute(_) !== S && d.setAttribute(_, S === !0 ? "" : String(S)),
                b && s(f, g, ()=>d.removeAttribute(_))
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
        const {tag: d, shouldRender: m, id: b} = f;
        if (m) {
            if (d.tag === "title") {
                n.title = d.textContent;
                continue
            }
            f.$el = f.$el || o.elMap[b],
            f.$el ? a(f) : gs.includes(d.tag) && l.push(f)
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
async function oT(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await Bm(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function sT(e) {
    return t=>{
        var r, i;
        const n = ((i = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    oT(o, e)
                }
            }
        }
    }
}
const aT = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , lT = {
    hooks: {
        "tag:normalise": function({tag: e}) {
            ["hid", "vmid", "key"].forEach(r=>{
                e.props[r] && (e.key = e.props[r],
                delete e.props[r])
            }
            );
            const n = Cm(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        },
        "tags:resolve": function(e) {
            const t = {};
            e.tags.forEach(r=>{
                const i = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , o = t[i];
                if (o) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && aT.includes(r.tag) && (a = "merge"),
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
                    } else if (Ns(r) > Ns(o))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (gs.includes(r.tag) && s === 0) {
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
  , cT = {
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
  , uT = ["script", "link", "bodyAttrs"];
function fT(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,i])=>{
        r.startsWith("on") && typeof i == "function" ? (Fm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = i) : t[r] = i
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const dT = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (uT.includes(n.tag)) {
                    const {props: r, eventHandlers: i} = fT(n);
                    n.props = r,
                    Object.keys(i).length && ((n.props.src || n.props.href) && (n.key = n.key || lu(n.props.src || n.props.href)),
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
                o in t.$el.dataset ? f(new Event(o.replace("on", ""))) : Fm.includes(o) && typeof MutationObserver < "u" ? (c = new MutationObserver(d=>{
                    d.some(b=>b.attributeName === `data-${o}`) && (f(new Event(o.replace("on", ""))),
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
  , hT = ["link", "style", "script", "noscript"]
  , pT = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && hT.includes(e.tag) && (e.props["data-hid"] = e._h = lu(e.key))
        }
    }
}
  , mT = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(i=>i._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of rT)
                for (const i of e.tags.filter(o=>typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(i.tagPriority.replace(n, ""));
                    typeof o < "u" && (i._p = o + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>Ns(n) - Ns(r))
        }
    }
}
  , gT = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , yT = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , i = n.findIndex(l=>l.tag === "templateParams")
              , o = i !== -1 ? n[i].props : {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = ys(o.pageTitle || r || "", o, s);
            for (const l of n.filter(u=>u.processTemplateParams !== !1)) {
                const u = gT[l.tag];
                u && typeof l.props[u] == "string" ? l.props[u] = ys(l.props[u], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(c=>{
                    typeof l[c] == "string" && (l[c] = ys(l[c], o, s))
                }
                )
            }
            e._templateParams = o,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , vT = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(i=>i.tag === "titleTemplate");
            const r = t.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = qf(t[n].textContent, t[r].textContent);
                i !== null ? t[r].textContent = i || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const i = qf(t[n].textContent);
                i !== null && (t[n].textContent = i,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , bT = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Um;
function _T(e={}) {
    const t = ET(e);
    return t.use(sT()),
    Um = t
}
function zf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function ET(e={}) {
    const t = ym();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (QE ? document : void 0);
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
            zf(u.mode, n) && t.addHooks(u.hooks || {}))
        },
        push(l, u) {
            u == null || delete u.head;
            const c = {
                _i: i++,
                input: l,
                ...u
            };
            return zf(c.mode, n) && (o.push(c),
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
                    for (const f of await nT(u)) {
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
    return [lT, cT, dT, pT, mT, yT, vT, bT, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function TT() {
    return Um
}
const kT = im.startsWith("3");
function ST(e) {
    return typeof e == "function" ? e() : J(e)
}
function Vs(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = ST(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Vs(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,i])=>r === "titleTemplate" || r.startsWith("on") ? [r, J(i)] : [r, Vs(i, r)])) : n
}
const wT = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Vs(t.input)
        }
    }
}
  , xm = "usehead";
function AT(e) {
    return {
        install(n) {
            kT && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(xm, e))
        }
    }.install
}
function LT(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>zt(()=>setTimeout(()=>n(), 0)));
    const t = _T(e);
    return t.use(wT),
    t.install = AT(t),
    t
}
const Yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , ql = "__unhead_injection_handler__";
function CT(e) {
    Yl[ql] = e
}
function OT() {
    if (ql in Yl)
        return Yl[ql]();
    const e = wt(xm);
    return e || TT()
}
function RT(e, t={}) {
    const n = t.head || OT();
    if (n)
        return n.ssr ? n.push(e, t) : IT(n, e, t)
}
function IT(e, t, n={}) {
    const r = ce(!1)
      , i = ce({});
    N0(()=>{
        i.value = r.value ? {} : Vs(t)
    }
    );
    const o = e.push(i.value, n);
    return Ye(i, a=>{
        o.patch(a)
    }
    ),
    wn() && (Sn(()=>{
        o.dispose()
    }
    ),
    Vp(()=>{
        r.value = !0
    }
    ),
    Np(()=>{
        r.value = !1
    }
    )),
    o
}
function On(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = On(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: On(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = On(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = On(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(i) {
        n.add(On(i))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(i, o) {
        n.set(On(o), On(i))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(On(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const PT = {
    nuxt: {
        buildId: "f4765bf8-d2b3-44ee-a4cd-bd5f66bac8bb"
    }
}
  , MT = wE(PT);
function DT() {
    const e = re();
    return e._appConfig || (e._appConfig = At(MT)),
    e._appConfig
}
const NT = !1
  , Gl = !1
  , VT = !1
  , FT = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , BT = "#__nuxt";
let vs, Hm;
function UT() {
    var t;
    const e = (t = DT().nuxt) == null ? void 0 : t.buildId;
    return vs = $fetch(ou(`builds/meta/${e}.json`)),
    vs.then(n=>{
        Hm = SE(n.matcher)
    }
    ),
    vs
}
function fa() {
    return vs || UT()
}
async function jm(e) {
    return await fa(),
    au({}, ...Hm.matchAll(e).reverse())
}
function Qf(e, t={}) {
    const n = xT(e, t)
      , r = re()
      , i = r._payloadCache = r._payloadCache || {};
    return n in i || (i[n] = HT(e).then(o=>o ? Km(n).then(s=>s || (delete i[n],
    null)) : (i[n] = null,
    null))),
    i[n]
}
const Xf = "json";
function xT(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || Un(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Pi(zn().app.baseURL, n.pathname, r ? `_payload.${r}.${Xf}` : `_payload.${Xf}`)
}
async function Km(e) {
    const t = fetch(e).then(n=>n.text().then(Ym));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function HT(e=la().path) {
    if (e = Vo(e),
    (await fa()).prerendered.includes(e))
        return !0;
    const n = await jm(e);
    return !!n.prerender && !n.redirect
}
let as = null;
async function jT() {
    if (as)
        return as;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Ym(e.textContent || "")
      , n = e.dataset.src ? await Km(e.dataset.src) : void 0;
    return as = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    as
}
async function Ym(e) {
    return await YE(e, re()._payloadRevivers)
}
function KT(e, t) {
    re()._payloadRevivers[e] = t
}
const Zf = {
    NuxtError: e=>ua(e),
    EmptyShallowRef: e=>En(e === "_" ? void 0 : e === "0n" ? BigInt(0) : go(e)),
    EmptyRef: e=>ce(e === "_" ? void 0 : e === "0n" ? BigInt(0) : go(e)),
    ShallowRef: e=>En(e),
    ShallowReactive: e=>Ri(e),
    Ref: e=>ce(e),
    Reactive: e=>At(e)
}
  , YT = Bt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in Zf)
            KT(r, Zf[r]);
        Object.assign(e.payload, ([t,n] = Pn(()=>e.runWithContext(jT)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , qT = []
  , GT = Bt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = LT({
            plugins: qT
        });
        CT(()=>re().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await Bm(t)
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
const ii = typeof document < "u";
function WT(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Ze = Object.assign;
function qa(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = Tn(i) ? i.map(e) : e(i)
    }
    return n
}
const zi = ()=>{}
  , Tn = Array.isArray
  , qm = /#/g
  , JT = /&/g
  , zT = /\//g
  , QT = /=/g
  , XT = /\?/g
  , Gm = /\+/g
  , ZT = /%5B/g
  , $T = /%5D/g
  , Wm = /%5E/g
  , ek = /%60/g
  , Jm = /%7B/g
  , tk = /%7C/g
  , zm = /%7D/g
  , nk = /%20/g;
function uu(e) {
    return encodeURI("" + e).replace(tk, "|").replace(ZT, "[").replace($T, "]")
}
function rk(e) {
    return uu(e).replace(Jm, "{").replace(zm, "}").replace(Wm, "^")
}
function Wl(e) {
    return uu(e).replace(Gm, "%2B").replace(nk, "+").replace(qm, "%23").replace(JT, "%26").replace(ek, "`").replace(Jm, "{").replace(zm, "}").replace(Wm, "^")
}
function ik(e) {
    return Wl(e).replace(QT, "%3D")
}
function ok(e) {
    return uu(e).replace(qm, "%23").replace(XT, "%3F")
}
function sk(e) {
    return e == null ? "" : ok(e).replace(zT, "%2F")
}
function yo(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const ak = /\/$/
  , lk = e=>e.replace(ak, "");
function Ga(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    i = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = dk(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: yo(s)
    }
}
function ck(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function $f(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function uk(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && Ei(t.matched[r], n.matched[i]) && Qm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Ei(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Qm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!fk(e[n], t[n]))
            return !1;
    return !0
}
function fk(e, t) {
    return Tn(e) ? ed(e, t) : Tn(t) ? ed(t, e) : e === t
}
function ed(e, t) {
    return Tn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function dk(e, t) {
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
var vo;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(vo || (vo = {}));
var Qi;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Qi || (Qi = {}));
function hk(e) {
    if (!e)
        if (ii) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    lk(e)
}
const pk = /^[^#]+#/;
function mk(e, t) {
    return e.replace(pk, "#") + t
}
function gk(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const da = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function yk(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = gk(i, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function td(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Jl = new Map;
function vk(e, t) {
    Jl.set(e, t)
}
function bk(e) {
    const t = Jl.get(e);
    return Jl.delete(e),
    t
}
let _k = ()=>location.protocol + "//" + location.host;
function Xm(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        $f(l, "")
    }
    return $f(n, e) + r + i
}
function Ek(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const a = ({state: d})=>{
        const m = Xm(e, location)
          , b = n.value
          , _ = t.value;
        let S = 0;
        if (d) {
            if (n.value = m,
            t.value = d,
            s && s === b) {
                s = null;
                return
            }
            S = _ ? d.position - _.position : 0
        } else
            r(m);
        i.forEach(g=>{
            g(n.value, b, {
                delta: S,
                type: vo.pop,
                direction: S ? S > 0 ? Qi.forward : Qi.back : Qi.unknown
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
            const b = i.indexOf(d);
            b > -1 && i.splice(b, 1)
        }
        ;
        return o.push(m),
        m
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(Ze({}, d.state, {
            scroll: da()
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
function nd(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? da() : null
    }
}
function Tk(e) {
    const {history: t, location: n} = window
      , r = {
        value: Xm(e, n)
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
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : _k() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d),
            i.value = u
        } catch (m) {
            console.error(m),
            n[c ? "replace" : "assign"](d)
        }
    }
    function s(l, u) {
        const c = Ze({}, t.state, nd(i.value.back, l, i.value.forward, !0), u, {
            position: i.value.position
        });
        o(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = Ze({}, i.value, t.state, {
            forward: l,
            scroll: da()
        });
        o(c.current, c, !0);
        const f = Ze({}, nd(r.value, l, null), {
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
function Zm(e) {
    e = hk(e);
    const t = Tk(e)
      , n = Ek(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = Ze({
        location: "",
        base: e,
        go: r,
        createHref: mk.bind(null, e)
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
function kk(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Zm(e)
}
function Sk(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function $m(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const pn = {
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
  , eg = Symbol("");
var rd;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(rd || (rd = {}));
function Ti(e, t) {
    return Ze(new Error, {
        type: e,
        [eg]: !0
    }, t)
}
function Hn(e, t) {
    return e instanceof Error && eg in e && (t == null || !!(e.type & t))
}
const id = "[^/]+?"
  , wk = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Ak = /[.+*?^${}()[\]/\\]/g;
function Lk(e, t) {
    const n = Ze({}, wk, t)
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
                i += d.value.replace(Ak, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: b, repeatable: _, optional: S, regexp: g} = d;
                o.push({
                    name: b,
                    repeatable: _,
                    optional: S
                });
                const E = g || id;
                if (E !== id) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${b}" (${E}): ` + y.message)
                    }
                }
                let p = _ ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                f || (p = S && u.length < 2 ? `(?:/${p})` : "/" + p),
                S && (p += "?"),
                i += p,
                m += 20,
                S && (m += -8),
                _ && (m += -20),
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
              , b = o[d - 1];
            f[b.name] = m && b.repeatable ? m.split("/") : m
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
                    const {value: b, repeatable: _, optional: S} = m
                      , g = b in u ? u[b] : "";
                    if (Tn(g) && !_)
                        throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = Tn(g) ? g.join("/") : g;
                    if (!E)
                        if (S)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${b}"`);
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
function Ck(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function Ok(e, t) {
    let n = 0;
    const r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        const o = Ck(r[n], i[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (od(r))
            return 1;
        if (od(i))
            return -1
    }
    return i.length - r.length
}
function od(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Rk = {
    type: 0,
    value: ""
}
  , Ik = /[a-zA-Z0-9_]/;
function Pk(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Rk]];
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
            l === "(" ? n = 2 : Ik.test(l) ? d() : (f(),
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
function Mk(e, t, n) {
    const r = Lk(Pk(e.path), n)
      , i = Ze(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i),
    i
}
function Dk(e, t) {
    const n = []
      , r = new Map;
    t = ld({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(c) {
        return r.get(c)
    }
    function o(c, f, d) {
        const m = !d
          , b = Nk(c);
        b.aliasOf = d && d.record;
        const _ = ld(t, c)
          , S = [b];
        if ("alias"in c) {
            const p = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const y of p)
                S.push(Ze({}, b, {
                    components: d ? d.record.components : b.components,
                    path: y,
                    aliasOf: d ? d.record : b
                }))
        }
        let g, E;
        for (const p of S) {
            const {path: y} = p;
            if (f && y[0] !== "/") {
                const T = f.record.path
                  , w = T[T.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (y && w + y)
            }
            if (g = Mk(p, f, _),
            d ? d.alias.push(g) : (E = E || g,
            E !== g && E.alias.push(g),
            m && c.name && !ad(g) && s(c.name)),
            b.children) {
                const T = b.children;
                for (let w = 0; w < T.length; w++)
                    o(T[w], g, d && d.children[w])
            }
            d = d || g,
            (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && l(g)
        }
        return E ? ()=>{
            s(E)
        }
        : zi
    }
    function s(c) {
        if ($m(c)) {
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
        for (; f < n.length && Ok(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !tg(c, n[f])); )
            f++;
        n.splice(f, 0, c),
        c.record.name && !ad(c) && r.set(c.record.name, c)
    }
    function u(c, f) {
        let d, m = {}, b, _;
        if ("name"in c && c.name) {
            if (d = r.get(c.name),
            !d)
                throw Ti(1, {
                    location: c
                });
            _ = d.record.name,
            m = Ze(sd(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), c.params && sd(c.params, d.keys.map(E=>E.name))),
            b = d.stringify(m)
        } else if (c.path != null)
            b = c.path,
            d = n.find(E=>E.re.test(b)),
            d && (m = d.parse(b),
            _ = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw Ti(1, {
                    location: c,
                    currentLocation: f
                });
            _ = d.record.name,
            m = Ze({}, f.params, c.params),
            b = d.stringify(m)
        }
        const S = [];
        let g = d;
        for (; g; )
            S.unshift(g.record),
            g = g.parent;
        return {
            name: _,
            path: b,
            params: m,
            matched: S,
            meta: Fk(S)
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
function sd(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function Nk(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Vk(e),
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
function Vk(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function ad(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Fk(e) {
    return e.reduce((t,n)=>Ze(t, n.meta), {})
}
function ld(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function tg(e, t) {
    return t.children.some(n=>n === e || tg(e, n))
}
function Bk(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(Gm, " ")
          , s = o.indexOf("=")
          , a = yo(s < 0 ? o : o.slice(0, s))
          , l = s < 0 ? null : yo(o.slice(s + 1));
        if (a in t) {
            let u = t[a];
            Tn(u) || (u = t[a] = [u]),
            u.push(l)
        } else
            t[a] = l
    }
    return t
}
function cd(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = ik(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Tn(r) ? r.map(o=>o && Wl(o)) : [r && Wl(r)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function Uk(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Tn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const xk = Symbol("")
  , ud = Symbol("")
  , fu = Symbol("")
  , du = Symbol("")
  , zl = Symbol("");
function Bi() {
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
function fr(e, t, n, r, i, o=s=>s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return ()=>new Promise((a,l)=>{
        const u = d=>{
            d === !1 ? l(Ti(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : Sk(d) ? l(Ti(2, {
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
                if (Hk(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && o.push(fr(c, n, r, s, a, i))
                } else {
                    let u = l();
                    o.push(()=>u.then(c=>{
                        if (!c)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = WT(c) ? c.default : c;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && fr(m, n, r, s, a, i)()
                    }
                    ))
                }
        }
    return o
}
function Hk(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function fd(e) {
    const t = wt(fu)
      , n = wt(du)
      , r = fe(()=>t.resolve(J(e.to)))
      , i = fe(()=>{
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(Ei.bind(null, c));
        if (d > -1)
            return d;
        const m = dd(l[u - 2]);
        return u > 1 && dd(c) === m && f[f.length - 1].path !== m ? f.findIndex(Ei.bind(null, l[u - 2])) : d
    }
    )
      , o = fe(()=>i.value > -1 && qk(n.params, r.value.params))
      , s = fe(()=>i.value > -1 && i.value === n.matched.length - 1 && Qm(n.params, r.value.params));
    function a(l={}) {
        return Yk(l) ? t[J(e.replace) ? "replace" : "push"](J(e.to)).catch(zi) : Promise.resolve()
    }
    return {
        route: r,
        href: fe(()=>r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: a
    }
}
const jk = Ue({
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
    useLink: fd,
    setup(e, {slots: t}) {
        const n = At(fd(e))
          , {options: r} = wt(fu)
          , i = fe(()=>({
            [hd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [hd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : dt("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, o)
        }
    }
})
  , Kk = jk;
function Yk(e) {
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
function qk(e, t) {
    for (const n in t) {
        const r = t[n]
          , i = e[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!Tn(i) || i.length !== r.length || r.some((o,s)=>o !== i[s]))
            return !1
    }
    return !0
}
function dd(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const hd = (e,t,n)=>e ?? t ?? n
  , Gk = Ue({
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
        const r = wt(zl)
          , i = fe(()=>e.route || r.value)
          , o = wt(ud, 0)
          , s = fe(()=>{
            let u = J(o);
            const {matched: c} = i.value;
            let f;
            for (; (f = c[u]) && !f.components; )
                u++;
            return u
        }
        )
          , a = fe(()=>i.value.matched[s.value]);
        Yr(ud, fe(()=>s.value + 1)),
        Yr(xk, a),
        Yr(zl, i);
        const l = ce();
        return Ye(()=>[l.value, a.value, e.name], ([u,c,f],[d,m,b])=>{
            c && (c.instances[f] = u,
            m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
            c.updateGuards.size || (c.updateGuards = m.updateGuards))),
            u && c && (!m || !Ei(c, m) || !d) && (c.enterCallbacks[f] || []).forEach(_=>_(u))
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
                return pd(n.default, {
                    Component: d,
                    route: u
                });
            const m = f.props[c]
              , b = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null
              , S = dt(d, Ze({}, b, t, {
                onVnodeUnmounted: g=>{
                    g.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return pd(n.default, {
                Component: S,
                route: u
            }) || S
        }
    }
});
function pd(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const ng = Gk;
function Wk(e) {
    const t = Dk(e.routes, e)
      , n = e.parseQuery || Bk
      , r = e.stringifyQuery || cd
      , i = e.history
      , o = Bi()
      , s = Bi()
      , a = Bi()
      , l = En(pn);
    let u = pn;
    ii && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = qa.bind(null, j=>"" + j)
      , f = qa.bind(null, sk)
      , d = qa.bind(null, yo);
    function m(j, ne) {
        let X, ee;
        return $m(j) ? (X = t.getRecordMatcher(j),
        ee = ne) : ee = j,
        t.addRoute(ee, X)
    }
    function b(j) {
        const ne = t.getRecordMatcher(j);
        ne && t.removeRoute(ne)
    }
    function _() {
        return t.getRoutes().map(j=>j.record)
    }
    function S(j) {
        return !!t.getRecordMatcher(j)
    }
    function g(j, ne) {
        if (ne = Ze({}, ne || l.value),
        typeof j == "string") {
            const v = Ga(n, j, ne.path)
              , A = t.resolve({
                path: v.path
            }, ne)
              , R = i.createHref(v.fullPath);
            return Ze(v, A, {
                params: d(A.params),
                hash: yo(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let X;
        if (j.path != null)
            X = Ze({}, j, {
                path: Ga(n, j.path, ne.path).path
            });
        else {
            const v = Ze({}, j.params);
            for (const A in v)
                v[A] == null && delete v[A];
            X = Ze({}, j, {
                params: f(v)
            }),
            ne.params = f(ne.params)
        }
        const ee = t.resolve(X, ne)
          , ve = j.hash || "";
        ee.params = c(d(ee.params));
        const xe = ck(r, Ze({}, j, {
            hash: rk(ve),
            path: ee.path
        }))
          , h = i.createHref(xe);
        return Ze({
            fullPath: xe,
            hash: ve,
            query: r === cd ? Uk(j.query) : j.query || {}
        }, ee, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(j) {
        return typeof j == "string" ? Ga(n, j, l.value.path) : Ze({}, j)
    }
    function p(j, ne) {
        if (u !== j)
            return Ti(8, {
                from: ne,
                to: j
            })
    }
    function y(j) {
        return L(j)
    }
    function T(j) {
        return y(Ze(E(j), {
            replace: !0
        }))
    }
    function w(j) {
        const ne = j.matched[j.matched.length - 1];
        if (ne && ne.redirect) {
            const {redirect: X} = ne;
            let ee = typeof X == "function" ? X(j) : X;
            return typeof ee == "string" && (ee = ee.includes("?") || ee.includes("#") ? ee = E(ee) : {
                path: ee
            },
            ee.params = {}),
            Ze({
                query: j.query,
                hash: j.hash,
                params: ee.path != null ? {} : j.params
            }, ee)
        }
    }
    function L(j, ne) {
        const X = u = g(j)
          , ee = l.value
          , ve = j.state
          , xe = j.force
          , h = j.replace === !0
          , v = w(X);
        if (v)
            return L(Ze(E(v), {
                state: typeof v == "object" ? Ze({}, ve, v.state) : ve,
                force: xe,
                replace: h
            }), ne || X);
        const A = X;
        A.redirectedFrom = ne;
        let R;
        return !xe && uk(r, ee, X) && (R = Ti(16, {
            to: A,
            from: ee
        }),
        ue(ee, ee, !0, !1)),
        (R ? Promise.resolve(R) : N(A, ee)).catch(F=>Hn(F) ? Hn(F, 2) ? F : K(F) : U(F, A, ee)).then(F=>{
            if (F) {
                if (Hn(F, 2))
                    return L(Ze({
                        replace: h
                    }, E(F.to), {
                        state: typeof F.to == "object" ? Ze({}, ve, F.to.state) : ve,
                        force: xe
                    }), ne || A)
            } else
                F = B(A, ee, !0, h, ve);
            return H(A, ee, F),
            F
        }
        )
    }
    function C(j, ne) {
        const X = p(j, ne);
        return X ? Promise.reject(X) : Promise.resolve()
    }
    function O(j) {
        const ne = Xe.values().next().value;
        return ne && typeof ne.runWithContext == "function" ? ne.runWithContext(j) : j()
    }
    function N(j, ne) {
        let X;
        const [ee,ve,xe] = Jk(j, ne);
        X = Wa(ee.reverse(), "beforeRouteLeave", j, ne);
        for (const v of ee)
            v.leaveGuards.forEach(A=>{
                X.push(fr(A, j, ne))
            }
            );
        const h = C.bind(null, j, ne);
        return X.push(h),
        nt(X).then(()=>{
            X = [];
            for (const v of o.list())
                X.push(fr(v, j, ne));
            return X.push(h),
            nt(X)
        }
        ).then(()=>{
            X = Wa(ve, "beforeRouteUpdate", j, ne);
            for (const v of ve)
                v.updateGuards.forEach(A=>{
                    X.push(fr(A, j, ne))
                }
                );
            return X.push(h),
            nt(X)
        }
        ).then(()=>{
            X = [];
            for (const v of xe)
                if (v.beforeEnter)
                    if (Tn(v.beforeEnter))
                        for (const A of v.beforeEnter)
                            X.push(fr(A, j, ne));
                    else
                        X.push(fr(v.beforeEnter, j, ne));
            return X.push(h),
            nt(X)
        }
        ).then(()=>(j.matched.forEach(v=>v.enterCallbacks = {}),
        X = Wa(xe, "beforeRouteEnter", j, ne, O),
        X.push(h),
        nt(X))).then(()=>{
            X = [];
            for (const v of s.list())
                X.push(fr(v, j, ne));
            return X.push(h),
            nt(X)
        }
        ).catch(v=>Hn(v, 8) ? v : Promise.reject(v))
    }
    function H(j, ne, X) {
        a.list().forEach(ee=>O(()=>ee(j, ne, X)))
    }
    function B(j, ne, X, ee, ve) {
        const xe = p(j, ne);
        if (xe)
            return xe;
        const h = ne === pn
          , v = ii ? history.state : {};
        X && (ee || h ? i.replace(j.fullPath, Ze({
            scroll: h && v && v.scroll
        }, ve)) : i.push(j.fullPath, ve)),
        l.value = j,
        ue(j, ne, X, h),
        K()
    }
    let $;
    function W() {
        $ || ($ = i.listen((j,ne,X)=>{
            if (!ut.listening)
                return;
            const ee = g(j)
              , ve = w(ee);
            if (ve) {
                L(Ze(ve, {
                    replace: !0
                }), ee).catch(zi);
                return
            }
            u = ee;
            const xe = l.value;
            ii && vk(td(xe.fullPath, X.delta), da()),
            N(ee, xe).catch(h=>Hn(h, 12) ? h : Hn(h, 2) ? (L(h.to, ee).then(v=>{
                Hn(v, 20) && !X.delta && X.type === vo.pop && i.go(-1, !1)
            }
            ).catch(zi),
            Promise.reject()) : (X.delta && i.go(-X.delta, !1),
            U(h, ee, xe))).then(h=>{
                h = h || B(ee, xe, !1),
                h && (X.delta && !Hn(h, 8) ? i.go(-X.delta, !1) : X.type === vo.pop && Hn(h, 20) && i.go(-1, !1)),
                H(ee, xe, h)
            }
            ).catch(zi)
        }
        ))
    }
    let Y = Bi(), V = Bi(), q;
    function U(j, ne, X) {
        K(j);
        const ee = V.list();
        return ee.length ? ee.forEach(ve=>ve(j, ne, X)) : console.error(j),
        Promise.reject(j)
    }
    function le() {
        return q && l.value !== pn ? Promise.resolve() : new Promise((j,ne)=>{
            Y.add([j, ne])
        }
        )
    }
    function K(j) {
        return q || (q = !j,
        W(),
        Y.list().forEach(([ne,X])=>j ? X(j) : ne()),
        Y.reset()),
        j
    }
    function ue(j, ne, X, ee) {
        const {scrollBehavior: ve} = e;
        if (!ii || !ve)
            return Promise.resolve();
        const xe = !X && bk(td(j.fullPath, 0)) || (ee || !X) && history.state && history.state.scroll || null;
        return zt().then(()=>ve(j, ne, xe)).then(h=>h && yk(h)).catch(h=>U(h, j, ne))
    }
    const be = j=>i.go(j);
    let We;
    const Xe = new Set
      , ut = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: b,
        hasRoute: S,
        getRoutes: _,
        resolve: g,
        options: e,
        push: y,
        replace: T,
        go: be,
        back: ()=>be(-1),
        forward: ()=>be(1),
        beforeEach: o.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: V.add,
        isReady: le,
        install(j) {
            const ne = this;
            j.component("RouterLink", Kk),
            j.component("RouterView", ng),
            j.config.globalProperties.$router = ne,
            Object.defineProperty(j.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>J(l)
            }),
            ii && !We && l.value === pn && (We = !0,
            y(i.location).catch(ve=>{}
            ));
            const X = {};
            for (const ve in pn)
                Object.defineProperty(X, ve, {
                    get: ()=>l.value[ve],
                    enumerable: !0
                });
            j.provide(fu, ne),
            j.provide(du, Ri(X)),
            j.provide(zl, l);
            const ee = j.unmount;
            Xe.add(j),
            j.unmount = function() {
                Xe.delete(j),
                Xe.size < 1 && (u = pn,
                $ && $(),
                $ = null,
                l.value = pn,
                We = !1,
                q = !1),
                ee()
            }
        }
    };
    function nt(j) {
        return j.reduce((ne,X)=>ne.then(()=>O(X)), Promise.resolve())
    }
    return ut
}
function Jk(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const a = t.matched[s];
        a && (e.matched.find(u=>Ei(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(u=>Ei(u, l)) || i.push(l))
    }
    return [n, r, i]
}
function zk() {
    return wt(du)
}
const Qk = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Ql = (e,t)=>{
    const n = e.route.matched.find(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Qk(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , Xk = (e,t)=>({
    default: ()=>e ? dt(H0, e === !0 ? {} : e, t) : t
});
function hu(e) {
    return Array.isArray(e) ? e : [e]
}
const P = {
    layout: "main"
}
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
  , Ne = null
  , M = {
    layout: "main"
}
  , D = {
    layout: "main"
}
  , md = [{
    name: (P == null ? void 0 : P.name) ?? "ads___de",
    path: (P == null ? void 0 : P.path) ?? "/de/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___en",
    path: (P == null ? void 0 : P.path) ?? "/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___es",
    path: (P == null ? void 0 : P.path) ?? "/es/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___fr",
    path: (P == null ? void 0 : P.path) ?? "/fr/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___hi",
    path: (P == null ? void 0 : P.path) ?? "/hi/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___id",
    path: (P == null ? void 0 : P.path) ?? "/id/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___pt",
    path: (P == null ? void 0 : P.path) ?? "/pt/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___ru",
    path: (P == null ? void 0 : P.path) ?? "/ru/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___th",
    path: (P == null ? void 0 : P.path) ?? "/th/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___tl",
    path: (P == null ? void 0 : P.path) ?? "/tl/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___tr",
    path: (P == null ? void 0 : P.path) ?? "/tr/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___uz",
    path: (P == null ? void 0 : P.path) ?? "/uz/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___vi",
    path: (P == null ? void 0 : P.path) ?? "/vi/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___de",
    path: "/de/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___fr",
    path: "/fr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Ee == null ? void 0 : Ee.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___de",
    path: "/de/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___fr",
    path: "/fr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js"), __vite__mapDeps([7, 8, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___de",
    path: "/de/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___fr",
    path: "/fr/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js"), __vite__mapDeps([10, 4, 9, 6, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___de",
    path: "/de/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___fr",
    path: "/fr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js"), __vite__mapDeps([12, 6, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___de",
    path: "/de/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___fr",
    path: "/fr/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js"), __vite__mapDeps([13, 9, 6, 14, 15, 16, 17, 18, 19, 20, 21, 8]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___de",
    path: "/de/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___fr",
    path: "/fr/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js"), __vite__mapDeps([22, 16, 6, 2, 15, 9, 18, 19]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___de",
    path: "/de/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___fr",
    path: "/fr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js"), __vite__mapDeps([23, 14, 15, 9, 16, 8, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___de",
    path: "/de/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___en",
    path: "/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___es",
    path: "/es/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___fr",
    path: "/fr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___hi",
    path: "/hi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___id",
    path: "/id/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___pt",
    path: "/pt/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___ru",
    path: "/ru/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___th",
    path: "/th/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tl",
    path: "/tl/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tr",
    path: "/tr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___uz",
    path: "/uz/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___vi",
    path: "/vi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js"), __vite__mapDeps([24, 4, 6, 17, 18, 19, 20]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___de",
    path: "/de/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___fr",
    path: "/fr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js"), __vite__mapDeps([25, 6, 15, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___de",
    path: "/de/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___fr",
    path: "/fr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js"), __vite__mapDeps([26, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___de",
    path: "/de/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___fr",
    path: "/fr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js"), __vite__mapDeps([27, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___de",
    path: "/de/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___fr",
    path: "/fr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.CnbbdTPT.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___de",
    path: "/de/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___en",
    path: "/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___es",
    path: "/es/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___fr",
    path: "/fr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___hi",
    path: "/hi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___id",
    path: "/id/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___pt",
    path: "/pt/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___ru",
    path: "/ru/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___th",
    path: "/th/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tl",
    path: "/tl/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tr",
    path: "/tr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___uz",
    path: "/uz/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___vi",
    path: "/vi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js"), __vite__mapDeps([28, 4, 29, 30]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___de",
    path: "/de/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___en",
    path: "/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___es",
    path: "/es/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___fr",
    path: "/fr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___hi",
    path: "/hi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___id",
    path: "/id/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___pt",
    path: "/pt/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___ru",
    path: "/ru/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___th",
    path: "/th/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tl",
    path: "/tl/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tr",
    path: "/tr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___uz",
    path: "/uz/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___vi",
    path: "/vi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BfdB3b1y.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___de",
    path: "/de/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___en",
    path: "/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___es",
    path: "/es/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___fr",
    path: "/fr/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___hi",
    path: "/hi/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___id",
    path: "/id/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___pt",
    path: "/pt/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___ru",
    path: "/ru/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___th",
    path: "/th/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tl",
    path: "/tl/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tr",
    path: "/tr/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___uz",
    path: "/uz/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___vi",
    path: "/vi/clicker/user",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js"), __vite__mapDeps([31, 4, 29, 30, 9, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___de",
    path: (M == null ? void 0 : M.path) ?? "/de",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___en",
    path: (M == null ? void 0 : M.path) ?? "/",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___es",
    path: (M == null ? void 0 : M.path) ?? "/es",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___fr",
    path: (M == null ? void 0 : M.path) ?? "/fr",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___hi",
    path: (M == null ? void 0 : M.path) ?? "/hi",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___id",
    path: (M == null ? void 0 : M.path) ?? "/id",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___pt",
    path: (M == null ? void 0 : M.path) ?? "/pt",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___ru",
    path: (M == null ? void 0 : M.path) ?? "/ru",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___th",
    path: (M == null ? void 0 : M.path) ?? "/th",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___tl",
    path: (M == null ? void 0 : M.path) ?? "/tl",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___tr",
    path: (M == null ? void 0 : M.path) ?? "/tr",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___uz",
    path: (M == null ? void 0 : M.path) ?? "/uz",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___vi",
    path: (M == null ? void 0 : M.path) ?? "/vi",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js"), __vite__mapDeps([32, 1, 16, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___de",
    path: (D == null ? void 0 : D.path) ?? "/de/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___en",
    path: (D == null ? void 0 : D.path) ?? "/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___es",
    path: (D == null ? void 0 : D.path) ?? "/es/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___fr",
    path: (D == null ? void 0 : D.path) ?? "/fr/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___hi",
    path: (D == null ? void 0 : D.path) ?? "/hi/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___id",
    path: (D == null ? void 0 : D.path) ?? "/id/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___pt",
    path: (D == null ? void 0 : D.path) ?? "/pt/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___ru",
    path: (D == null ? void 0 : D.path) ?? "/ru/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___th",
    path: (D == null ? void 0 : D.path) ?? "/th/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___tl",
    path: (D == null ? void 0 : D.path) ?? "/tl/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___tr",
    path: (D == null ? void 0 : D.path) ?? "/tr/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___uz",
    path: (D == null ? void 0 : D.path) ?? "/uz/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___vi",
    path: (D == null ? void 0 : D.path) ?? "/vi/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js"), __vite__mapDeps([33, 1]), import.meta.url).then(e=>e.default || e)
}]
  , rg = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? dt(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function gd(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function Zk(e, t) {
    return e === t || t === pn ? !1 : gd(e) !== gd(t) ? !0 : !e.matched.every((r,i)=>{
        var o, s;
        return r.components && r.components.default === ((s = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    )
}
const $k = {
    scrollBehavior(e, t, n) {
        var u;
        const r = re()
          , i = ((u = Xt().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && s !== !1 && Zk(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: yd(e.hash),
                behavior: i
            } : !1;
        const a = c=>!!(c.meta.pageTransition ?? Gl)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(c=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: yd(e.hash),
                    behavior: i
                }),
                c(o)
            }
            )
        }
        )
    }
};
function yd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const eS = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , qt = {
    ...eS,
    ...$k
}
  , tS = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = re()
      , i = Xt();
    if (([t,n] = Pn(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = ua({
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
                await r.runWithContext(()=>ai(s)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
;
var nS = Object.defineProperty
  , rS = Object.defineProperties
  , iS = Object.getOwnPropertyDescriptors
  , vd = Object.getOwnPropertySymbols
  , oS = Object.prototype.hasOwnProperty
  , sS = Object.prototype.propertyIsEnumerable
  , bd = (e,t,n)=>t in e ? nS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , he = (e,t)=>{
    for (var n in t || (t = {}))
        oS.call(t, n) && bd(e, n, t[n]);
    if (vd)
        for (var n of vd(t))
            sS.call(t, n) && bd(e, n, t[n]);
    return e
}
  , ot = (e,t)=>rS(e, iS(t));
const mn = "Notivue__"
  , aS = 6e3
  , Ge = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    PROMISE: "promise",
    PROMISE_RESOLVE: "promise-resolve",
    PROMISE_REJECT: "promise-reject"
}
  , bo = {
    title: "",
    message: "",
    duration: aS,
    ariaLive: "polite",
    ariaRole: "status"
}
  , Xl = ot(he({}, bo), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , lS = ot(he({}, bo), {
    duration: 1 / 0
})
  , cS = ot(he({}, Xl), {
    ariaLive: "polite"
})
  , uS = he({}, bo)
  , fS = {
    [Ge.SUCCESS]: bo,
    [Ge.ERROR]: Xl,
    [Ge.WARNING]: cS,
    [Ge.INFO]: uS,
    [Ge.PROMISE]: lS,
    [Ge.PROMISE_RESOLVE]: bo,
    [Ge.PROMISE_REJECT]: Xl
}
  , ig = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: fS,
    limit: 1 / 0,
    animations: {
        enter: mn + "enter",
        leave: mn + "leave",
        clearAll: mn + "clearAll"
    }
}
  , vn = hS();
function dS(e) {
    Object.assign(vn, e)
}
function og(e) {
    let t = 0;
    function n(r, i, o=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(ot(he({}, r), {
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
        success: r=>n(r, Ge.SUCCESS),
        error: r=>n(r, Ge.ERROR),
        warning: r=>n(r, Ge.WARNING),
        info: r=>n(r, Ge.INFO),
        promise: r=>{
            const {id: i, clear: o, destroy: s} = n(r, Ge.PROMISE);
            return {
                resolve: a=>n(a, Ge.PROMISE_RESOLVE, i),
                reject: a=>n(a, Ge.PROMISE_REJECT, i),
                success: a=>n(a, Ge.PROMISE_RESOLVE, i),
                error: a=>n(a, Ge.PROMISE_REJECT, i),
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
function hS() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return og(e)
}
function pS(e) {
    Ye(e.config.isTopAlign, ()=>{
        e.animations.updatePositions({
            isImmediate: !0
        })
    }
    , {
        flush: "post"
    }),
    Ye(()=>e.items.length, ()=>{
        e.animations.updatePositions()
    }
    , {
        flush: "post"
    }),
    Ye(()=>e.items.length === 0 && e.queue.length === 0, t=>{
        t && (e.timeouts.reset(),
        e.elements.setRootAttrs({}))
    }
    , {
        flush: "post"
    }),
    Ye(()=>e.config.animations.value.enter, (t,n)=>{
        t !== n && e.animations.resetTransitionData()
    }
    )
}
const mS = typeof window > "u";
function dr(e) {
    return e.pointerType === "mouse"
}
function pu(e, t) {
    const n = he({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (yS(t[r]) ? n[r] = pu(e[r], t[r]) : n[r] = t[r]);
    return n
}
function gS(e, t) {
    return t.props || (t.props = {}),
    he(he(he(he({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function yS(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function vS(e, t) {
    return jc(At(pu(e, t)))
}
function bS(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>ot(he({}, t), {
        [n]: Fe(r)
    }), {})
}
const _S = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function sg(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!_S.includes(t)))
}
function ag(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function ES(e) {
    const t = vS(ig, e)
      , n = fe(()=>t.position.value.startsWith("top"));
    function r(i) {
        typeof i == "function" && (i = i(bS(t)));
        for (const o of Object.keys(i))
            typeof t[o].value == "object" ? t[o].value = pu(t[o].value, i[o]) : t[o].value = i[o]
    }
    return ot(he({}, t), {
        isTopAlign: n,
        update: r
    })
}
function TS() {
    return {
        entries: En([]),
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
            _p(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function kS(e, t) {
    return {
        entries: En([]),
        get length() {
            return this.entries.value.length
        },
        add(n) {
            this.entries.value.unshift(n),
            this.triggerRef()
        },
        addFromQueue() {
            const n = ot(he({}, t.entries.value[0]), {
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
            _p(this.entries)
        },
        updateAll(n) {
            this.entries.value = this.entries.value.map(n)
        },
        remove(n) {
            this.entries.value = this.entries.value.filter(r=>r.id !== n),
            t.length > 0 && this.length < e.limit.value && zt(()=>this.addFromQueue())
        },
        clear() {
            this.entries.value = [],
            t.clear()
        }
    }
}
function SS() {
    return {
        root: ce(null),
        rootAttrs: En({}),
        setRootAttrs(e) {
            this.rootAttrs.value = e
        },
        items: ce([]),
        getSortedItems() {
            return this.items.value.sort((e,t)=>+t.dataset.notivueId - +e.dataset.notivueId)
        },
        containers: ce([])
    }
}
function wS(e, t, n) {
    return {
        isReducedMotion: ce(!1),
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
                (u = s == null ? void 0 : s[o ? "onManualClear" : "onAutoClear"]) == null || u.call(s, sg(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || i || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: ot(he({}, s.positionStyles), {
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
                    positionStyles: he({
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
function AS(e, t) {
    return {
        isStreamPaused: ce(!1),
        isStreamFocused: ce(!1),
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
                ot(he({}, n), {
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
                n.timeout ? ot(he({}, n), {
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
function LS({config: e, items: t, queue: n, animations: r, timeouts: i}) {
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
              , a = gS(e.notifications.value, o)
              , l = ()=>i.create(a.id, a.duration);
            if ([Ge.PROMISE_RESOLVE, Ge.PROMISE_REJECT].includes(o.type))
                n.get(a.id) ? (n.update(a.id, ot(he({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, ot(he({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const u = e.enqueue.value
                  , c = t.length >= e.limit.value;
                !u && c && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>i.create(m, 1));
                const f = u && !o.skipQueue && c
                  , d = ot(he({}, a), {
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
const lg = Symbol("");
function CS(e={}) {
    const t = ES(e)
      , n = TS()
      , r = kS(t, n)
      , i = SS()
      , o = wS(t, r, i)
      , s = AS(r, o)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: i,
        animations: o,
        timeouts: s
    }
      , l = LS(a)
      , u = Object.freeze(og(l));
    return dS(u),
    pS(a),
    {
        install(c) {
            c.config.globalProperties.$push = u,
            c.provide(lg, a)
        }
    }
}
function Sr() {
    return wt(lg)
}
function OS() {
    return mS ? ot(he({}, jc(At(ig))), {
        isTopAlign: fe(()=>!0),
        update: ()=>{}
    }) : Sr().config
}
const cg = {
    listAriaLabel: "Notifications"
}
  , RS = Ue({
    setup(e, {slots: t, attrs: n}) {
        const r = ce(!1);
        return Ft(()=>r.value = !0),
        ()=>{
            var i;
            return r.value ? (i = t.default) == null ? void 0 : i.call(t) : ze("span", n, "")
        }
    }
})
  , IS = ["role", "aria-live"]
  , PS = Ue({
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
        ze("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, tn(J(ag)(t.item)), 9, IS))
    }
});
function MS() {
    const {timeouts: e, config: t} = Sr();
    function n(i) {
        dr(i) && e.pause()
    }
    function r(i) {
        dr(i) && e.resume()
    }
    return fe(()=>t.pauseOnHover.value && !e.isStreamFocused.value ? {
        onPointerenter: n,
        onPointerleave: r
    } : {})
}
function DS() {
    const {timeouts: e, config: t} = Sr();
    function n(r) {
        dr(r) || (e.clearDebounceTimeout(),
        e.pause(),
        e.resumeWithDebounce(2e3))
    }
    return Sn(()=>{
        e.clearDebounceTimeout()
    }
    ),
    fe(()=>t.pauseOnTouch.value && !e.isStreamFocused.value ? {
        onPointerdown: n
    } : {})
}
const Ja = {
    boxSizing: "border-box"
}
  , za = {
    list: ot(he({}, Ja), {
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
    listItem: ot(he({}, Ja), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: ot(he({}, Ja), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function NS() {
    const {isTopAlign: e, position: t} = OS()
      , n = fe(()=>{
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
      , r = fe(()=>({
        [e.value ? "top" : "bottom"]: "0",
        justifyContent: `var(--nv-root-x-align, ${t.value.endsWith("left") ? "flex-start" : t.value.endsWith("right") ? "flex-end" : "center"})`
    }));
    return fe(()=>({
        list: he(he({}, za.list), n.value),
        listItem: he(he({}, za.listItem), r.value),
        itemContainer: za.itemContainer
    }))
}
function VS(e) {
    function t() {
        window.matchMedia("(max-width: 1100px)").matches && e()
    }
    Ft(()=>{
        window.addEventListener("resize", t)
    }
    ),
    Sn(()=>{
        window.removeEventListener("resize", t)
    }
    )
}
function FS(e, t) {
    let n;
    const r = new Set;
    Ft(()=>{
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
    Ye(e, i=>{
        i.length > 0 && i.forEach(o=>n == null ? void 0 : n.observe(o))
    }
    , {
        flush: "post"
    }),
    Sn(()=>{
        n == null || n.disconnect()
    }
    )
}
function BS() {
    const {elements: e, animations: t} = Sr();
    VS(()=>t.updatePositions({
        isImmediate: !0
    })),
    FS(e.items.value, ()=>t.updatePositions())
}
function US() {
    const {items: e, config: t, timeouts: n} = Sr();
    function r() {
        n.isStreamFocused.value || (document.visibilityState === "visible" ? t.pauseOnTabChange.value && n.resume() : t.pauseOnTabChange.value ? n.pause() : e.clear())
    }
    Ft(()=>{
        document.addEventListener("visibilitychange", r)
    }
    ),
    Sn(()=>{
        document.removeEventListener("visibilitychange", r)
    }
    )
}
function xS() {
    const {animations: e} = Sr()
      , t = window.matchMedia("(prefers-reduced-motion: reduce)")
      , n = ()=>e.setReducedMotion(t.matches);
    Ft(()=>{
        var r;
        n(),
        (r = t.addEventListener) == null || r.call(t, "change", n)
    }
    ),
    Sn(()=>{
        var r;
        (r = t.removeEventListener) == null || r.call(t, "change", n)
    }
    )
}
const HS = ["data-notivue-align", "aria-label"]
  , jS = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , KS = ["aria-label", "tabindex", "data-notivue-container"]
  , YS = Ue({
    __name: "NotivueImpl",
    props: ia({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, cg),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: i} = Sr()
          , o = NS()
          , s = MS()
          , a = DS();
        return xS(),
        US(),
        BS(),
        (l,u)=>{
            var c;
            return me(),
            Tt(_b, {
                to: J(n).teleportTo.value === !1 ? void 0 : J(n).teleportTo.value,
                disabled: J(n).teleportTo.value === !1
            }, [J(r).length > 0 ? (me(),
            ze("ol", _i({
                key: 0
            }, he(he(he({}, J(s)), J(a)), J(i).rootAttrs.value), {
                "data-notivue-align": J(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: J(i).root,
                class: t.class,
                style: he(he({}, J(o).list), (c = t.styles) == null ? void 0 : c.list)
            }), [(me(!0),
            ze(yt, null, J0(J(r).entries.value, (f,d)=>{
                var m, b, _, S;
                return me(),
                ze("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": J(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: J(i).items,
                    style: Dn(he(he(he({}, J(o).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (me(),
                Tt(PS, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (me(),
                ze("div", _i({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": J(ag)(f),
                    tabindex: (_ = (b = l.containersTabIndex) == null ? void 0 : b[f.id]) != null ? _ : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: J(i).containers,
                    style: he(he({}, J(o).itemContainer), (S = t.styles) == null ? void 0 : S.itemContainer)
                }), [Tr(l.$slots, "default", un(Qt(J(sg)(f))))], 16, KS))], 12, jS)
            }
            ), 128))], 16, HS)) : Wt("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , KM = Ue({
    __name: "Notivue",
    props: ia({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, cg),
    setup(e) {
        const t = e;
        return (n,r)=>(me(),
        Tt(J(RS), null, {
            default: fn(()=>[et(YS, un(Qt(t)), {
                default: fn(i=>[Tr(n.$slots, "default", un(Qt(i)))]),
                _: 3
            }, 16)]),
            _: 3
        }))
    }
})
  , qS = {
    touchOnly: !1,
    exclude: "a, button",
    disabled: !1,
    threshold: .5
}
  , GS = 300
  , Qa = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , YM = Ue({
    __name: "NotivueSwipe",
    props: ia({
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
    }, qS),
    setup(e) {
        const {items: t, timeouts: n, elements: r, animations: i} = Sr()
          , o = e
          , s = si(o, "touchOnly")
          , a = si(o, "exclude")
          , l = si(o, "disabled")
          , u = si(o, "threshold")
          , c = fe(()=>o.item.type === Ge.PROMISE)
          , f = fe(()=>!n.isStreamFocused.value && !l.value && !c.value && o.item.duration < 1 / 0)
          , d = ce(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , b = Ri(m)
          , _ = En({});
        function S(K) {
            Object.assign(b, K)
        }
        function g(K) {
            _.value = he(he({}, _.value), K)
        }
        function E() {
            _.value = {}
        }
        Ye(()=>t.length, (K,ue)=>{
            K !== ue && b.isPressed && (w(),
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
            d.value.querySelectorAll("*").forEach(K=>{
                K instanceof HTMLElement && (K.style.userSelect = "none",
                K.style.touchAction = "none")
            }
            ))
        }
        function y() {
            d.value && (E(),
            d.value.querySelectorAll("*").forEach(K=>{
                K instanceof HTMLElement && (K.style.userSelect = "auto",
                K.style.touchAction = "auto")
            }
            ))
        }
        function T(K) {
            return !(s.value && K.pointerType !== "touch")
        }
        function w() {
            g({
                transition: i.isReducedMotion.value ? "none" : `${GS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function L(K) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ue, offsetLeft: be} = d.value
              , We = be + r.root.value.offsetLeft
              , Xe = We + ue;
            return K.clientX > We && K.clientX < Xe
        }
        function C(K) {
            return dr(K) ? Qa.Mouse : Qa.Touch
        }
        function O() {
            n.clearDebounceTimeout(),
            n.pause()
        }
        function N(K) {
            n.clearDebounceTimeout(),
            n.resumeWithDebounce(K)
        }
        function H(K) {
            T(K) || y()
        }
        function B(K) {
            if (T(K) && (K.stopPropagation(),
            !!d.value && K.button === 0 && !(b.isPressed || b.isClearing))) {
                if (a.value && Array.from(d.value.querySelectorAll(a.value)).includes(K.target)) {
                    dr(K) || (O(),
                    N(Qa.TouchExternal));
                    return
                }
                dr(K) || O(),
                S({
                    startX: K.clientX,
                    isPressed: !0
                })
            }
        }
        function $(K) {
            if (!T(K) || (K.stopPropagation(),
            !b.isPressed || b.isClearing))
                return;
            const {clientWidth: ue} = d.value;
            g({
                transition: "none",
                transform: `translate3d(${b.currentX}px, 0px, 0px)`,
                opacity: `${1 - Math.abs(b.currentX) / ue * (1 / u.value)}`
            }),
            S({
                currentX: K.clientX - b.startX
            }),
            Math.abs(b.currentX) > ue * u.value && (b.isClearing = !0,
            W(K))
        }
        function W(K) {
            if (o.item.destroy(),
            dr(K) && L(K)) {
                const ue = r.getSortedItems();
                ue[ue.length - 1].contains(d.value) || O()
            } else
                N(C(K));
            S({
                isClearing: !1
            })
        }
        function Y(K) {
            T(K) && (K.stopPropagation(),
            !(!b.isPressed || b.isClearing) && (dr(K) && L(K) ? O() : N(C(K)),
            w(),
            S({
                startX: 0,
                currentX: 0,
                isPressed: !1
            })))
        }
        function V(K) {
            T(K) && (K.stopPropagation(),
            !(!b.isPressed || b.isClearing) && (w(),
            S({
                startX: 0,
                currentX: 0,
                isPressed: !1
            }),
            N(C(K))))
        }
        const q = [["pointerenter", H], ["pointerdown", B], ["pointermove", $], ["pointerup", Y], ["pointerleave", V]];
        function U() {
            d.value && q.forEach(([K,ue])=>{
                d.value.addEventListener(K, ue)
            }
            )
        }
        function le() {
            d.value && q.forEach(([K,ue])=>{
                d.value.removeEventListener(K, ue)
            }
            )
        }
        return Ye(f, (K,ue,be)=>{
            zt(()=>{
                K && (p(),
                zt(U))
            }
            ),
            be(()=>{
                le(),
                y()
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        }),
        Sn(le),
        (K,ue)=>l.value ? Tr(K.$slots, "default", {
            key: 1
        }) : (me(),
        ze("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: Dn(_.value)
        }, [Tr(K.$slots, "default")], 4))
    }
})
  , WS = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , JS = [WS]
  , _d = Ue({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(Mi))), JS, 16))
    }
})
  , zS = ge("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , QS = [zS]
  , Xa = Ue({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(Mi))), QS, 16))
    }
})
  , XS = ge("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , ZS = [XS]
  , $S = Ue({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(Mi))), ZS, 16))
    }
})
  , ew = ge("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , tw = ge("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , nw = [ew, tw]
  , Ed = Ue({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(Mi))), nw, 16))
    }
})
  , rw = ge("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , iw = ge("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , ow = ge("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , sw = [rw, iw, ow]
  , Za = Ue({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(Mi))), sw, 16))
    }
})
  , aw = ge("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , lw = ge("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , cw = ge("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , uw = [aw, lw, cw]
  , fw = Ue({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(Mi))), uw, 16))
    }
})
  , dw = ge("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , hw = ge("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , pw = [dw, hw]
  , ug = Ue({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(ot(he({}, J(mu)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), pw, 16))
    }
})
  , mw = ge("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , gw = ge("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , yw = [mw, gw]
  , fg = Ue({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(me(),
        ze("svg", un(Qt(J(vw))), yw, 16))
    }
})
  , mu = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , Mi = ot(he({}, mu), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , vw = ot(he({}, mu), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , bw = {
    [Ge.SUCCESS]: pt(_d),
    [Ge.ERROR]: pt(Xa),
    [Ge.INFO]: pt($S),
    [Ge.WARNING]: pt(Xa),
    [Ge.PROMISE]: pt(ug),
    [Ge.PROMISE_RESOLVE]: pt(_d),
    [Ge.PROMISE_REJECT]: pt(Xa),
    close: pt(fg)
};
Ge.SUCCESS + "",
pt(Ed),
Ge.ERROR + "",
pt(Za),
Ge.INFO + "",
pt(fw),
Ge.WARNING + "",
pt(Za),
Ge.PROMISE + "",
pt(ug),
Ge.PROMISE_RESOLVE + "",
pt(Ed),
Ge.PROMISE_REJECT + "",
pt(Za),
pt(fg);
const xo = {
    "--nv-width": "350px",
    "--nv-spacing": "0.625rem",
    "--nv-radius": "0.625rem",
    "--nv-icon-size": "1.25rem",
    "--nv-title-size": "0.925rem",
    "--nv-message-size": "0.925rem",
    "--nv-tip-width": "0px",
    "--nv-y-align": "center"
}
  , gu = {
    "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
}
  , _w = ot(he(he({}, xo), gu), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
ot(he(he({}, xo), gu), {
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
ot(he(he({}, xo), gu), {
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
ot(he({}, xo), {
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
const qM = ot(he({}, xo), {
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
  , jn = {
    NOTIFICATION: mn + "notification",
    ICON: mn + "icon",
    CONTENT: mn + "content",
    TITLE: mn + "content-title",
    MESSAGE: mn + "content-message",
    CLOSE: mn + "close",
    CLOSE_ICON: mn + "close-icon",
    TRANSITION: mn + "transition"
}
  , Ew = {
    icons: ()=>bw,
    theme: ()=>_w,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , Tw = ["data-notivue", "data-notivue-has-title"]
  , kw = ["aria-live", "role"]
  , Sw = ["textContent"]
  , ww = ["textContent"]
  , Aw = ["aria-label"]
  , Lw = ["textContent"]
  , GM = Ue({
    __name: "Notifications",
    props: ia({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, Ew),
    setup(e) {
        const t = e
          , n = En(t.icons[t.item.type])
          , r = t.icons.close;
        return Ye(()=>t.item.type, i=>n.value = t.icons[i], {
            flush: "sync"
        }),
        (i,o)=>(me(),
        ze("div", {
            class: Nt(J(jn).NOTIFICATION),
            "data-notivue": i.item.type,
            "data-notivue-has-title": !!i.item.title,
            style: Dn(i.theme)
        }, [n.value ? (me(),
        ze(yt, {
            key: 0
        }, [typeof n.value == "object" ? (me(),
        Tt(No, {
            key: 0,
            name: J(jn).TRANSITION,
            mode: "out-in"
        }, {
            default: fn(()=>[typeof n.value == "object" ? (me(),
            Tt(_l(n.value), {
                key: 0,
                class: Nt(J(jn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : Wt("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (me(),
        ze("div", {
            key: 1,
            class: Nt(J(jn).ICON),
            "aria-hidden": "true"
        }, tn(n.value), 3)) : Wt("", !0)], 64)) : Wt("", !0), ge("div", {
            class: Nt(J(jn).CONTENT),
            "aria-live": i.item.ariaLive,
            role: i.item.ariaRole,
            "aria-atomic": "true"
        }, [i.item.title ? (me(),
        ze("h3", {
            key: 0,
            class: Nt(J(jn).TITLE),
            textContent: tn(J(i.item.title))
        }, null, 10, Sw)) : Wt("", !0), ge("p", {
            class: Nt(J(jn).MESSAGE),
            textContent: tn(J(i.item.message))
        }, null, 10, ww)], 10, kw), !t.hideClose && J(r) && i.item.type !== "promise" ? (me(),
        ze("button", {
            key: 1,
            class: Nt(J(jn).CLOSE),
            "aria-label": i.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: o[0] || (o[0] = (...s)=>i.item.clear && i.item.clear(...s))
        }, [typeof J(r) == "object" ? (me(),
        Tt(_l(J(r)), {
            key: 0,
            class: Nt(J(jn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof J(r) == "string" ? (me(),
        ze("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: tn(J(r))
        }, null, 8, Lw)) : Wt("", !0)], 10, Aw)) : Wt("", !0)], 14, Tw))
    }
});
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Fs = typeof window < "u"
  , wr = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , Cw = (e,t,n)=>Ow({
    l: e,
    k: t,
    s: n
})
  , Ow = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , St = e=>typeof e == "number" && isFinite(e)
  , Rw = e=>hg(e) === "[object Date]"
  , Bs = e=>hg(e) === "[object RegExp]"
  , ha = e=>Ke(e) && Object.keys(e).length === 0
  , ht = Object.assign;
let Td;
const yu = ()=>Td || (Td = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kd(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Iw = Object.prototype.hasOwnProperty;
function Us(e, t) {
    return Iw.call(e, t)
}
const ft = Array.isArray
  , $e = e=>typeof e == "function"
  , ie = e=>typeof e == "string"
  , lt = e=>typeof e == "boolean"
  , Pw = e=>typeof e == "symbol"
  , Be = e=>e !== null && typeof e == "object"
  , Mw = e=>Be(e) && $e(e.then) && $e(e.catch)
  , dg = Object.prototype.toString
  , hg = e=>dg.call(e)
  , Ke = e=>{
    if (!Be(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Dw = e=>e == null ? "" : ft(e) || Ke(e) && e.toString === dg ? JSON.stringify(e, null, 2) : String(e);
function vu(e, t="") {
    return e.reduce((n,r,i)=>i === 0 ? n + r : n + t + r, "")
}
function bu(e) {
    let t = e;
    return ()=>++t
}
function Nw(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const ls = e=>!Be(e) || ft(e);
function qr(e, t) {
    if (ls(e) || ls(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: i} = n.pop();
        Object.keys(r).forEach(o=>{
            ls(r[o]) || ls(i[o]) ? i[o] = r[o] : n.push({
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
function Vw(e, t, n) {
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
const Qe = {
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
function pa(e, t, n={}) {
    const {domain: r, messages: i, args: o} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function Fw(e) {
    throw e
}
const Kn = " "
  , Bw = "\r"
  , Dt = `
`
  , Uw = "\u2028"
  , xw = "\u2029";
function Hw(e) {
    const t = e;
    let n = 0
      , r = 1
      , i = 1
      , o = 0;
    const s = L=>t[L] === Bw && t[L + 1] === Dt
      , a = L=>t[L] === Dt
      , l = L=>t[L] === xw
      , u = L=>t[L] === Uw
      , c = L=>s(L) || a(L) || l(L) || u(L)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>i
      , b = ()=>o
      , _ = L=>s(L) || l(L) || u(L) ? Dt : t[L]
      , S = ()=>_(n)
      , g = ()=>_(n + o);
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
        peekOffset: b,
        charAt: _,
        currentChar: S,
        currentPeek: g,
        next: E,
        peek: p,
        reset: y,
        resetPeek: T,
        skipToPeek: w
    }
}
const nr = void 0
  , jw = "."
  , Sd = "'"
  , Kw = "tokenizer";
function Yw(e, t={}) {
    const n = t.location !== !1
      , r = Hw(e)
      , i = ()=>r.index()
      , o = ()=>Vw(r.line(), r.column(), r.index())
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
        const F = u();
        if (v.column += A,
        v.offset += A,
        c) {
            const G = n ? Zl(F.startLoc, v) : null
              , Z = pa(h, G, {
                domain: Kw,
                args: R
            });
            c(Z)
        }
    }
    function d(h, v, A) {
        h.endLoc = o(),
        h.currentType = v;
        const R = {
            type: v
        };
        return n && (R.loc = Zl(h.startLoc, h.endLoc)),
        A != null && (R.value = A),
        R
    }
    const m = h=>d(h, 14);
    function b(h, v) {
        return h.currentChar() === v ? (h.next(),
        v) : (f(Qe.EXPECTED_TOKEN, o(), 0, v),
        "")
    }
    function _(h) {
        let v = "";
        for (; h.currentPeek() === Kn || h.currentPeek() === Dt; )
            v += h.currentPeek(),
            h.peek();
        return v
    }
    function S(h) {
        const v = _(h);
        return h.skipToPeek(),
        v
    }
    function g(h) {
        if (h === nr)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function E(h) {
        if (h === nr)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function p(h, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        _(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function y(h, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        _(h);
        const R = h.currentPeek() === "-" ? h.peek() : h.currentPeek()
          , F = E(R);
        return h.resetPeek(),
        F
    }
    function T(h, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        _(h);
        const R = h.currentPeek() === Sd;
        return h.resetPeek(),
        R
    }
    function w(h, v) {
        const {currentType: A} = v;
        if (A !== 8)
            return !1;
        _(h);
        const R = h.currentPeek() === ".";
        return h.resetPeek(),
        R
    }
    function L(h, v) {
        const {currentType: A} = v;
        if (A !== 9)
            return !1;
        _(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function C(h, v) {
        const {currentType: A} = v;
        if (!(A === 8 || A === 12))
            return !1;
        _(h);
        const R = h.currentPeek() === ":";
        return h.resetPeek(),
        R
    }
    function O(h, v) {
        const {currentType: A} = v;
        if (A !== 10)
            return !1;
        const R = ()=>{
            const G = h.currentPeek();
            return G === "{" ? g(h.peek()) : G === "@" || G === "%" || G === "|" || G === ":" || G === "." || G === Kn || !G ? !1 : G === Dt ? (h.peek(),
            R()) : g(G)
        }
          , F = R();
        return h.resetPeek(),
        F
    }
    function N(h) {
        _(h);
        const v = h.currentPeek() === "|";
        return h.resetPeek(),
        v
    }
    function H(h) {
        const v = _(h)
          , A = h.currentPeek() === "%" && h.peek() === "{";
        return h.resetPeek(),
        {
            isModulo: A,
            hasSpace: v.length > 0
        }
    }
    function B(h, v=!0) {
        const A = (F=!1,G="",Z=!1)=>{
            const Q = h.currentPeek();
            return Q === "{" ? G === "%" ? !1 : F : Q === "@" || !Q ? G === "%" ? !0 : F : Q === "%" ? (h.peek(),
            A(F, "%", !0)) : Q === "|" ? G === "%" || Z ? !0 : !(G === Kn || G === Dt) : Q === Kn ? (h.peek(),
            A(!0, Kn, Z)) : Q === Dt ? (h.peek(),
            A(!0, Dt, Z)) : !0
        }
          , R = A();
        return v && h.resetPeek(),
        R
    }
    function $(h, v) {
        const A = h.currentChar();
        return A === nr ? nr : v(A) ? (h.next(),
        A) : null
    }
    function W(h) {
        return $(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 || R === 95 || R === 36
        }
        )
    }
    function Y(h) {
        return $(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 48 && R <= 57
        }
        )
    }
    function V(h) {
        return $(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102
        }
        )
    }
    function q(h) {
        let v = ""
          , A = "";
        for (; v = Y(h); )
            A += v;
        return A
    }
    function U(h) {
        S(h);
        const v = h.currentChar();
        return v !== "%" && f(Qe.EXPECTED_TOKEN, o(), 0, v),
        h.next(),
        "%"
    }
    function le(h) {
        let v = "";
        for (; ; ) {
            const A = h.currentChar();
            if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
                break;
            if (A === "%")
                if (B(h))
                    v += A,
                    h.next();
                else
                    break;
            else if (A === Kn || A === Dt)
                if (B(h))
                    v += A,
                    h.next();
                else {
                    if (N(h))
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
    function K(h) {
        S(h);
        let v = ""
          , A = "";
        for (; v = W(h); )
            A += v;
        return h.currentChar() === nr && f(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0),
        A
    }
    function ue(h) {
        S(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${q(h)}`) : v += q(h),
        h.currentChar() === nr && f(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0),
        v
    }
    function be(h) {
        S(h),
        b(h, "'");
        let v = ""
          , A = "";
        const R = G=>G !== Sd && G !== Dt;
        for (; v = $(h, R); )
            v === "\\" ? A += We(h) : A += v;
        const F = h.currentChar();
        return F === Dt || F === nr ? (f(Qe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        F === Dt && (h.next(),
        b(h, "'")),
        A) : (b(h, "'"),
        A)
    }
    function We(h) {
        const v = h.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return h.next(),
            `\\${v}`;
        case "u":
            return Xe(h, v, 4);
        case "U":
            return Xe(h, v, 6);
        default:
            return f(Qe.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v),
            ""
        }
    }
    function Xe(h, v, A) {
        b(h, v);
        let R = "";
        for (let F = 0; F < A; F++) {
            const G = V(h);
            if (!G) {
                f(Qe.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${v}${R}${h.currentChar()}`);
                break
            }
            R += G
        }
        return `\\${v}${R}`
    }
    function ut(h) {
        S(h);
        let v = ""
          , A = "";
        const R = F=>F !== "{" && F !== "}" && F !== Kn && F !== Dt;
        for (; v = $(h, R); )
            A += v;
        return A
    }
    function nt(h) {
        let v = ""
          , A = "";
        for (; v = W(h); )
            A += v;
        return A
    }
    function j(h) {
        const v = (A=!1,R)=>{
            const F = h.currentChar();
            return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Kn ? R : F === Dt || F === jw ? (R += F,
            h.next(),
            v(A, R)) : (R += F,
            h.next(),
            v(!0, R))
        }
        ;
        return v(!1, "")
    }
    function ne(h) {
        S(h);
        const v = b(h, "|");
        return S(h),
        v
    }
    function X(h, v) {
        let A = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(Qe.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            h.next(),
            A = d(v, 2, "{"),
            S(h),
            v.braceNest++,
            A;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(Qe.EMPTY_PLACEHOLDER, o(), 0),
            h.next(),
            A = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && S(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            A;
        case "@":
            return v.braceNest > 0 && f(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0),
            A = ee(h, v) || m(v),
            v.braceNest = 0,
            A;
        default:
            let F = !0
              , G = !0
              , Z = !0;
            if (N(h))
                return v.braceNest > 0 && f(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0),
                A = d(v, 1, ne(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                A;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(Qe.UNTERMINATED_CLOSING_BRACE, o(), 0),
                v.braceNest = 0,
                ve(h, v);
            if (F = p(h, v))
                return A = d(v, 5, K(h)),
                S(h),
                A;
            if (G = y(h, v))
                return A = d(v, 6, ue(h)),
                S(h),
                A;
            if (Z = T(h, v))
                return A = d(v, 7, be(h)),
                S(h),
                A;
            if (!F && !G && !Z)
                return A = d(v, 13, ut(h)),
                f(Qe.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, A.value),
                S(h),
                A;
            break
        }
        return A
    }
    function ee(h, v) {
        const {currentType: A} = v;
        let R = null;
        const F = h.currentChar();
        switch ((A === 8 || A === 9 || A === 12 || A === 10) && (F === Dt || F === Kn) && f(Qe.INVALID_LINKED_FORMAT, o(), 0),
        F) {
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
            return N(h) ? (R = d(v, 1, ne(h)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : w(h, v) || C(h, v) ? (S(h),
            ee(h, v)) : L(h, v) ? (S(h),
            d(v, 12, nt(h))) : O(h, v) ? (S(h),
            F === "{" ? X(h, v) || R : d(v, 11, j(h))) : (A === 8 && f(Qe.INVALID_LINKED_FORMAT, o(), 0),
            v.braceNest = 0,
            v.inLinked = !1,
            ve(h, v))
        }
    }
    function ve(h, v) {
        let A = {
            type: 14
        };
        if (v.braceNest > 0)
            return X(h, v) || m(v);
        if (v.inLinked)
            return ee(h, v) || m(v);
        switch (h.currentChar()) {
        case "{":
            return X(h, v) || m(v);
        case "}":
            return f(Qe.UNBALANCED_CLOSING_BRACE, o(), 0),
            h.next(),
            d(v, 3, "}");
        case "@":
            return ee(h, v) || m(v);
        default:
            if (N(h))
                return A = d(v, 1, ne(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                A;
            const {isModulo: F, hasSpace: G} = H(h);
            if (F)
                return G ? d(v, 0, le(h)) : d(v, 4, U(h));
            if (B(h))
                return d(v, 0, le(h));
            break
        }
        return A
    }
    function xe() {
        const {currentType: h, offset: v, startLoc: A, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = A,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = o(),
        r.currentChar() === nr ? d(l, 14) : ve(r, l)
    }
    return {
        nextToken: xe,
        currentOffset: i,
        currentPosition: o,
        context: u
    }
}
const qw = "parser"
  , Gw = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ww(e, t, n) {
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
function Jw(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(g, E, p, y, ...T) {
        const w = g.currentPosition();
        if (w.offset += y,
        w.column += y,
        n) {
            const L = t ? Zl(p, w) : null
              , C = pa(E, L, {
                domain: qw,
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
        return w.value = E.replace(Gw, Ww),
        g.nextToken(),
        o(w, g.currentOffset(), g.currentPosition()),
        w
    }
    function c(g) {
        const E = g.nextToken()
          , p = g.context()
          , {lastOffset: y, lastStartLoc: T} = p
          , w = i(8, y, T);
        return E.type !== 12 ? (r(g, Qe.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        w.value = "",
        o(w, y, T),
        {
            nextConsumeToken: E,
            node: w
        }) : (E.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ln(E)),
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
        switch (y.type !== 10 && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(y)),
        y = g.nextToken(),
        y.type === 2 && (y = g.nextToken()),
        y.type) {
        case 11:
            y.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(y)),
            p.key = f(g, y.value || "");
            break;
        case 5:
            y.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(y)),
            p.key = l(g, y.value || "");
            break;
        case 6:
            y.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(y)),
            p.key = a(g, y.value || "");
            break;
        case 7:
            y.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(y)),
            p.key = u(g, y.value || "");
            break;
        default:
            r(g, Qe.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
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
                O.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(O)),
                T.items.push(s(g, O.value || ""));
                break;
            case 6:
                O.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(O)),
                T.items.push(a(g, O.value || ""));
                break;
            case 5:
                O.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(O)),
                T.items.push(l(g, O.value || ""));
                break;
            case 7:
                O.value == null && r(g, Qe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(O)),
                T.items.push(u(g, O.value || ""));
                break;
            case 8:
                const N = d(g);
                T.items.push(N.node),
                w = N.nextConsumeToken || null;
                break
            }
        } while (E.currentType !== 14 && E.currentType !== 1);
        const L = E.currentType === 1 ? E.lastOffset : g.currentOffset()
          , C = E.currentType === 1 ? E.lastEndLoc : g.currentPosition();
        return o(T, L, C),
        T
    }
    function b(g, E, p, y) {
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
        return w && r(g, Qe.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
        o(L, g.currentOffset(), g.currentPosition()),
        L
    }
    function _(g) {
        const E = g.context()
          , {offset: p, startLoc: y} = E
          , T = m(g);
        return E.currentType === 14 ? T : b(g, p, y, T)
    }
    function S(g) {
        const E = Yw(g, ht({}, e))
          , p = E.context()
          , y = i(0, p.offset, p.startLoc);
        return t && y.loc && (y.loc.source = g),
        y.body = _(E),
        e.onCacheKey && (y.cacheKey = e.onCacheKey(g)),
        p.currentType !== 14 && r(E, Qe.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, g[p.offset] || ""),
        o(y, E.currentOffset(), E.currentPosition()),
        y
    }
    return {
        parse: S
    }
}
function Ln(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function zw(e, t={}) {
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
function wd(e, t) {
    for (let n = 0; n < e.length; n++)
        _u(e[n], t)
}
function _u(e, t) {
    switch (e.type) {
    case 1:
        wd(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        wd(e.items, t);
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
function Qw(e, t={}) {
    const n = zw(e);
    n.helper("normalize"),
    e.body && _u(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function Xw(e) {
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
            e.static = vu(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function oi(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        const t = e;
        oi(t.body),
        t.b = t.body,
        delete t.body;
        break;
    case 1:
        const n = e
          , r = n.cases;
        for (let c = 0; c < r.length; c++)
            oi(r[c]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const i = e
          , o = i.items;
        for (let c = 0; c < o.length; c++)
            oi(o[c]);
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
        oi(a.key),
        a.k = a.key,
        delete a.key,
        a.modifier && (oi(a.modifier),
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
function Zw(e, t) {
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
    function u(S, g) {
        a.code += S
    }
    function c(S, g=!0) {
        const E = g ? i : "";
        u(o ? E + "  ".repeat(S) : E)
    }
    function f(S=!0) {
        const g = ++a.indentLevel;
        S && c(g)
    }
    function d(S=!0) {
        const g = --a.indentLevel;
        S && c(g)
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
        helper: S=>`_${S}`,
        needIndent: ()=>a.needIndent
    }
}
function $w(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    ki(e, t.key),
    t.modifier ? (e.push(", "),
    ki(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function eA(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const i = t.items.length;
    for (let o = 0; o < i && (ki(e, t.items[o]),
    o !== i - 1); o++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function tA(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const i = t.cases.length;
        for (let o = 0; o < i && (ki(e, t.cases[o]),
        o !== i - 1); o++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function nA(e, t) {
    t.body ? ki(e, t.body) : e.push("null")
}
function ki(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        nA(e, t);
        break;
    case 1:
        tA(e, t);
        break;
    case 2:
        eA(e, t);
        break;
    case 6:
        $w(e, t);
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
const rA = (e,t={})=>{
    const n = ie(t.mode) ? t.mode : "normal"
      , r = ie(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = Zw(e, {
        mode: n,
        filename: r,
        sourceMap: i,
        breakLineCode: o,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${vu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    ki(l, e),
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
function iA(e, t={}) {
    const n = ht({}, t)
      , r = !!n.jit
      , i = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , a = Jw(n).parse(e);
    return r ? (o && Xw(a),
    i && oi(a),
    {
        ast: a,
        code: ""
    }) : (Qw(a, n),
    rA(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function oA() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (yu().__INTLIFY_PROD_DEVTOOLS__ = !1)
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
const sA = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function aA(e) {
    return sA.test(e)
}
function lA(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function cA(e) {
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
function uA(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : aA(t) ? lA(t) : "*" + t
}
function fA(e) {
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
            s === void 0 || (s = uA(s),
            s === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function m() {
        const b = e[n + 1];
        if (r === 5 && b === "'" || r === 6 && b === '"')
            return n++,
            a = "\\" + b,
            d[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        o = e[n],
        !(o === "\\" && m())) {
            if (l = cA(o),
            f = Ar[r],
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
const Ld = new Map;
function dA(e, t) {
    return Be(e) ? e[t] : null
}
function hA(e, t) {
    if (!Be(e))
        return null;
    let n = Ld.get(t);
    if (n || (n = fA(t),
    n && Ld.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let i = e
      , o = 0;
    for (; o < r; ) {
        const s = i[n[o]];
        if (s === void 0 || $e(i))
            return null;
        i = s,
        o++
    }
    return i
}
const pA = e=>e
  , mA = e=>""
  , gA = "text"
  , yA = e=>e.length === 0 ? "" : vu(e)
  , vA = Dw;
function Cd(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function bA(e) {
    const t = St(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (St(e.named.count) || St(e.named.n)) ? St(e.named.count) ? e.named.count : St(e.named.n) ? e.named.n : t : t
}
function _A(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function EA(e={}) {
    const t = e.locale
      , n = bA(e)
      , r = Be(e.pluralRules) && ie(t) && $e(e.pluralRules[t]) ? e.pluralRules[t] : Cd
      , i = Be(e.pluralRules) && ie(t) && $e(e.pluralRules[t]) ? Cd : void 0
      , o = g=>g[r(n, g.length, i)]
      , s = e.list || []
      , a = g=>s[g]
      , l = e.named || {};
    St(e.pluralIndex) && _A(n, l);
    const u = g=>l[g];
    function c(g) {
        const E = $e(e.messages) ? e.messages(g) : Be(e.messages) ? e.messages[g] : !1;
        return E || (e.parent ? e.parent.message(g) : mA)
    }
    const f = g=>e.modifiers ? e.modifiers[g] : pA
      , d = Ke(e.processor) && $e(e.processor.normalize) ? e.processor.normalize : yA
      , m = Ke(e.processor) && $e(e.processor.interpolate) ? e.processor.interpolate : vA
      , b = Ke(e.processor) && ie(e.processor.type) ? e.processor.type : gA
      , S = {
        list: a,
        named: u,
        plural: o,
        linked: (g,...E)=>{
            const [p,y] = E;
            let T = "text"
              , w = "";
            E.length === 1 ? Be(p) ? (w = p.modifier || w,
            T = p.type || T) : ie(p) && (w = p || w) : E.length === 2 && (ie(p) && (w = p || w),
            ie(y) && (T = y || T));
            const L = c(g)(S)
              , C = T === "vnode" && ft(L) && w ? L[0] : L;
            return w ? f(w)(C, T) : C
        }
        ,
        message: c,
        type: b,
        interpolate: m,
        normalize: d,
        values: ht({}, s, l)
    };
    return S
}
let _o = null;
function TA(e) {
    _o = e
}
function kA(e, t, n) {
    _o && _o.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const SA = wA("function:translate");
function wA(e) {
    return t=>_o && _o.emit(e, t)
}
const AA = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , pg = Qe.__EXTEND_POINT__
  , Ir = bu(pg)
  , Mn = {
    INVALID_ARGUMENT: pg,
    INVALID_DATE_ARGUMENT: Ir(),
    INVALID_ISO_DATE_ARGUMENT: Ir(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Ir(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Ir(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Ir(),
    NOT_SUPPORT_LOCALE_TYPE: Ir(),
    __EXTEND_POINT__: Ir()
};
function qn(e) {
    return pa(e, null, void 0)
}
function Eu(e, t) {
    return t.locale != null ? Od(t.locale) : Od(e.locale)
}
let $a;
function Od(e) {
    if (ie(e))
        return e;
    if ($e(e)) {
        if (e.resolvedOnce && $a != null)
            return $a;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Mw(t))
                throw qn(Mn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return $a = t
        } else
            throw qn(Mn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw qn(Mn.NOT_SUPPORT_LOCALE_TYPE)
}
function LA(e, t, n) {
    return [...new Set([n, ...ft(t) ? t : Be(t) ? Object.keys(t) : ie(t) ? [t] : [n]])]
}
function mg(e, t, n) {
    const r = ie(n) ? n : xs
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let o = i.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let s = [n];
        for (; ft(s); )
            s = Rd(o, s, t);
        const a = ft(t) || !Ke(t) ? t : t.default ? t.default : null;
        s = ie(a) ? [a] : a,
        ft(s) && Rd(o, s, !1),
        i.__localeChainCache.set(r, o)
    }
    return o
}
function Rd(e, t, n) {
    let r = !0;
    for (let i = 0; i < t.length && lt(r); i++) {
        const o = t[i];
        ie(o) && (r = CA(e, t[i], n))
    }
    return r
}
function CA(e, t, n) {
    let r;
    const i = t.split("-");
    do {
        const o = i.join("-");
        r = OA(e, o, n),
        i.splice(-1, 1)
    } while (i.length && r === !0);
    return r
}
function OA(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const i = t.replace(/!/g, "");
        e.push(i),
        (ft(n) || Ke(n)) && n[i] && (r = n[i])
    }
    return r
}
const RA = "9.9.1"
  , ma = -1
  , xs = "en-US"
  , Id = ""
  , Pd = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function IA() {
    return {
        upper: (e,t)=>t === "text" && ie(e) ? e.toUpperCase() : t === "vnode" && Be(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && ie(e) ? e.toLowerCase() : t === "vnode" && Be(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && ie(e) ? Pd(e) : t === "vnode" && Be(e) && "__v_isVNode"in e ? Pd(e.children) : e
    }
}
let gg;
function PA(e) {
    gg = e
}
let yg;
function MA(e) {
    yg = e
}
let vg;
function DA(e) {
    vg = e
}
let bg = null;
const NA = e=>{
    bg = e
}
  , VA = ()=>bg;
let _g = null;
const Md = e=>{
    _g = e
}
  , FA = ()=>_g;
let Dd = 0;
function BA(e={}) {
    const t = $e(e.onWarn) ? e.onWarn : Nw
      , n = ie(e.version) ? e.version : RA
      , r = ie(e.locale) || $e(e.locale) ? e.locale : xs
      , i = $e(r) ? xs : r
      , o = ft(e.fallbackLocale) || Ke(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , s = Ke(e.messages) ? e.messages : {
        [i]: {}
    }
      , a = Ke(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = Ke(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , u = ht({}, e.modifiers || {}, IA())
      , c = e.pluralRules || {}
      , f = $e(e.missing) ? e.missing : null
      , d = lt(e.missingWarn) || Bs(e.missingWarn) ? e.missingWarn : !0
      , m = lt(e.fallbackWarn) || Bs(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = !!e.fallbackFormat
      , _ = !!e.unresolving
      , S = $e(e.postTranslation) ? e.postTranslation : null
      , g = Ke(e.processor) ? e.processor : null
      , E = lt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , y = $e(e.messageCompiler) ? e.messageCompiler : gg
      , T = $e(e.messageResolver) ? e.messageResolver : yg || dA
      , w = $e(e.localeFallbacker) ? e.localeFallbacker : vg || LA
      , L = Be(e.fallbackContext) ? e.fallbackContext : void 0
      , C = e
      , O = Be(C.__datetimeFormatters) ? C.__datetimeFormatters : new Map
      , N = Be(C.__numberFormatters) ? C.__numberFormatters : new Map
      , H = Be(C.__meta) ? C.__meta : {};
    Dd++;
    const B = {
        version: n,
        cid: Dd,
        locale: r,
        fallbackLocale: o,
        messages: s,
        modifiers: u,
        pluralRules: c,
        missing: f,
        missingWarn: d,
        fallbackWarn: m,
        fallbackFormat: b,
        unresolving: _,
        postTranslation: S,
        processor: g,
        warnHtmlMessage: E,
        escapeParameter: p,
        messageCompiler: y,
        messageResolver: T,
        localeFallbacker: w,
        fallbackContext: L,
        onWarn: t,
        __meta: H
    };
    return B.datetimeFormats = a,
    B.numberFormats = l,
    B.__datetimeFormatters = O,
    B.__numberFormatters = N,
    __INTLIFY_PROD_DEVTOOLS__ && kA(B, n, H),
    B
}
function Tu(e, t, n, r, i) {
    const {missing: o, onWarn: s} = e;
    if (o !== null) {
        const a = o(e, n, t, i);
        return ie(a) ? a : t
    } else
        return t
}
function Ui(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function el(e) {
    return n=>UA(n, e)
}
function UA(e, t) {
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
let cs = Object.create(null);
const Si = e=>Be(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function HA(e, t={}) {
    let n = !1;
    const r = t.onError || Fw;
    return t.onError = i=>{
        n = !0,
        r(i)
    }
    ,
    {
        ...iA(e, t),
        detectError: n
    }
}
function jA(e, t) {
    if (ie(e)) {
        lt(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || xA)(e)
          , i = cs[r];
        if (i)
            return i;
        const {ast: o, detectError: s} = HA(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = el(o);
        return s ? a : cs[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = cs[n];
            return r || (cs[n] = el(e))
        } else
            return el(e)
    }
}
const Vd = ()=>""
  , rn = e=>$e(e);
function Fd(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: o, fallbackLocale: s, messages: a} = e
      , [l,u] = ec(...t)
      , c = lt(u.missingWarn) ? u.missingWarn : e.missingWarn
      , f = lt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
      , d = lt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter
      , m = !!u.resolvedMessage
      , b = ie(u.default) || lt(u.default) ? lt(u.default) ? o ? l : ()=>l : u.default : n ? o ? l : ()=>l : ""
      , _ = n || b !== ""
      , S = Eu(e, u);
    d && KA(u);
    let[g,E,p] = m ? [l, S, a[S] || {}] : Eg(e, l, S, s, f, c)
      , y = g
      , T = l;
    if (!m && !(ie(y) || Si(y) || rn(y)) && _ && (y = b,
    T = y),
    !m && (!(ie(y) || Si(y) || rn(y)) || !ie(E)))
        return i ? ma : l;
    let w = !1;
    const L = ()=>{
        w = !0
    }
      , C = rn(y) ? y : Tg(e, l, E, y, T, L);
    if (w)
        return y;
    const O = GA(e, E, p, u)
      , N = EA(O)
      , H = YA(e, C, N)
      , B = r ? r(H, l) : H;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const $ = {
            timestamp: Date.now(),
            key: ie(l) ? l : rn(y) ? y.key : "",
            locale: E || (rn(y) ? y.locale : ""),
            format: ie(y) ? y : rn(y) ? y.source : "",
            message: B
        };
        $.meta = ht({}, e.__meta, VA() || {}),
        SA($)
    }
    return B
}
function KA(e) {
    ft(e.list) ? e.list = e.list.map(t=>ie(t) ? kd(t) : t) : Be(e.named) && Object.keys(e.named).forEach(t=>{
        ie(e.named[t]) && (e.named[t] = kd(e.named[t]))
    }
    )
}
function Eg(e, t, n, r, i, o) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: u} = e
      , c = u(e, r, n);
    let f = {}, d, m = null;
    const b = "translate";
    for (let _ = 0; _ < c.length && (d = c[_],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(ie(m) || Si(m) || rn(m))); _++) {
        const S = Tu(e, t, d, o, b);
        S !== t && (m = S)
    }
    return [m, d, f]
}
function Tg(e, t, n, r, i, o) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (rn(r)) {
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
    const l = s(r, qA(e, n, i, r, a, o));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function YA(e, t, n) {
    return t(n)
}
function ec(...e) {
    const [t,n,r] = e
      , i = {};
    if (!ie(t) && !St(t) && !rn(t) && !Si(t))
        throw qn(Mn.INVALID_ARGUMENT);
    const o = St(t) ? String(t) : (rn(t),
    t);
    return St(n) ? i.plural = n : ie(n) ? i.default = n : Ke(n) && !ha(n) ? i.named = n : ft(n) && (i.list = n),
    St(r) ? i.plural = r : ie(r) ? i.default = r : Ke(r) && ht(i, r),
    [o, i]
}
function qA(e, t, n, r, i, o) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: i,
        onError: s=>{
            throw o && o(s),
            s
        }
        ,
        onCacheKey: s=>Cw(t, n, s)
    }
}
function GA(e, t, n, r) {
    const {modifiers: i, pluralRules: o, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c} = e
      , d = {
        locale: t,
        modifiers: i,
        pluralRules: o,
        messages: m=>{
            let b = s(n, m);
            if (b == null && c) {
                const [,,_] = Eg(c, m, t, a, l, u);
                b = s(_, m)
            }
            if (ie(b) || Si(b)) {
                let _ = !1;
                const g = Tg(e, m, t, b, m, ()=>{
                    _ = !0
                }
                );
                return _ ? Vd : g
            } else
                return rn(b) ? b : Vd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    St(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Bd(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,u,c,f] = tc(...t)
      , d = lt(c.missingWarn) ? c.missingWarn : e.missingWarn;
    lt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , b = Eu(e, c)
      , _ = s(e, i, b);
    if (!ie(l) || l === "")
        return new Intl.DateTimeFormat(b,f).format(u);
    let S = {}, g, E = null;
    const p = "datetime format";
    for (let w = 0; w < _.length && (g = _[w],
    S = n[g] || {},
    E = S[l],
    !Ke(E)); w++)
        Tu(e, l, g, d, p);
    if (!Ke(E) || !ie(g))
        return r ? ma : l;
    let y = `${g}__${l}`;
    ha(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.DateTimeFormat(g,ht({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(u) : T.format(u)
}
const kg = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function tc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {}, a;
    if (ie(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw qn(Mn.INVALID_ISO_DATE_ARGUMENT);
        const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(u);
        try {
            a.toISOString()
        } catch {
            throw qn(Mn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Rw(t)) {
        if (isNaN(t.getTime()))
            throw qn(Mn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (St(t))
        a = t;
    else
        throw qn(Mn.INVALID_ARGUMENT);
    return ie(n) ? o.key = n : Ke(n) && Object.keys(n).forEach(l=>{
        kg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ie(r) ? o.locale = r : Ke(r) && (s = r),
    Ke(i) && (s = i),
    [o.key || "", a, o, s]
}
function Ud(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function xd(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,u,c,f] = nc(...t)
      , d = lt(c.missingWarn) ? c.missingWarn : e.missingWarn;
    lt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , b = Eu(e, c)
      , _ = s(e, i, b);
    if (!ie(l) || l === "")
        return new Intl.NumberFormat(b,f).format(u);
    let S = {}, g, E = null;
    const p = "number format";
    for (let w = 0; w < _.length && (g = _[w],
    S = n[g] || {},
    E = S[l],
    !Ke(E)); w++)
        Tu(e, l, g, d, p);
    if (!Ke(E) || !ie(g))
        return r ? ma : l;
    let y = `${g}__${l}`;
    ha(f) || (y = `${y}__${JSON.stringify(f)}`);
    let T = a.get(y);
    return T || (T = new Intl.NumberFormat(g,ht({}, E, f)),
    a.set(y, T)),
    m ? T.formatToParts(u) : T.format(u)
}
const Sg = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function nc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {};
    if (!St(t))
        throw qn(Mn.INVALID_ARGUMENT);
    const a = t;
    return ie(n) ? o.key = n : Ke(n) && Object.keys(n).forEach(l=>{
        Sg.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ie(r) ? o.locale = r : Ke(r) && (s = r),
    Ke(i) && (s = i),
    [o.key || "", a, o, s]
}
function Hd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
    }
}
oA();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const WA = "9.9.1";
function JA() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (yu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const wg = AA.__EXTEND_POINT__
  , rr = bu(wg);
rr(),
rr(),
rr(),
rr(),
rr(),
rr(),
rr(),
rr();
const Ag = Mn.__EXTEND_POINT__
  , Ut = bu(Ag)
  , dn = {
    UNEXPECTED_RETURN_TYPE: Ag,
    INVALID_ARGUMENT: Ut(),
    MUST_BE_CALL_SETUP_TOP: Ut(),
    NOT_INSTALLED: Ut(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Ut(),
    REQUIRED_VALUE: Ut(),
    INVALID_VALUE: Ut(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ut(),
    NOT_INSTALLED_WITH_PROVIDE: Ut(),
    UNEXPECTED_ERROR: Ut(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Ut(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Ut(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ut(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ut(),
    __EXTEND_POINT__: Ut()
};
function kn(e, ...t) {
    return pa(e, null, void 0)
}
const rc = wr("__translateVNode")
  , ic = wr("__datetimeParts")
  , oc = wr("__numberParts")
  , zA = wr("__setPluralRules")
  , QA = wr("__injectWithOption")
  , sc = wr("__dispose");
function Eo(e) {
    if (!Be(e))
        return e;
    for (const t in e)
        if (Us(e, t))
            if (!t.includes("."))
                Be(e[t]) && Eo(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let i = e
                  , o = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in i || (i[n[s]] = {}),
                    !Be(i[n[s]])) {
                        o = !0;
                        break
                    }
                    i = i[n[s]]
                }
                o || (i[n[r]] = e[t],
                delete e[t]),
                Be(i[n[r]]) && Eo(i[n[r]])
            }
    return e
}
function Lg(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = Ke(n) ? n : ft(r) ? {} : {
        [e]: {}
    };
    if (ft(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: u} = a;
            l ? (s[l] = s[l] || {},
            qr(u, s[l])) : qr(u, s)
        } else
            ie(a) && qr(JSON.parse(a), s)
    }
    ),
    i == null && o)
        for (const a in s)
            Us(s, a) && Eo(s[a]);
    return s
}
function Cg(e) {
    return e.type
}
function XA(e, t, n) {
    let r = Be(t.messages) ? t.messages : {};
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
        if (Be(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(s=>{
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Be(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(s=>{
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function jd(e) {
    return et(Jr, null, e, 0)
}
const Kd = "__INTLIFY_META__"
  , Yd = ()=>[]
  , ZA = ()=>!1;
let qd = 0;
function Gd(e) {
    return (t,n,r,i)=>e(n, r, wn() || void 0, i)
}
const $A = ()=>{
    const e = wn();
    let t = null;
    return e && (t = Cg(e)[Kd]) ? {
        [Kd]: t
    } : null
}
;
function Og(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Fs ? ce : En;
    let a = lt(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : ie(e.locale) ? e.locale : xs)
      , u = s(n && a ? n.fallbackLocale.value : ie(e.fallbackLocale) || ft(e.fallbackLocale) || Ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , c = s(Lg(l.value, e))
      , f = s(Ke(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(Ke(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : lt(e.missingWarn) || Bs(e.missingWarn) ? e.missingWarn : !0
      , b = n ? n.fallbackWarn : lt(e.fallbackWarn) || Bs(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = n ? n.fallbackRoot : lt(e.fallbackRoot) ? e.fallbackRoot : !0
      , S = !!e.fallbackFormat
      , g = $e(e.missing) ? e.missing : null
      , E = $e(e.missing) ? Gd(e.missing) : null
      , p = $e(e.postTranslation) ? e.postTranslation : null
      , y = n ? n.warnHtmlMessage : lt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , T = !!e.escapeParameter;
    const w = n ? n.modifiers : Ke(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || n && n.pluralRules, C;
    C = (()=>{
        i && Md(null);
        const I = {
            version: WA,
            locale: l.value,
            fallbackLocale: u.value,
            messages: c.value,
            modifiers: w,
            pluralRules: L,
            missing: E === null ? void 0 : E,
            missingWarn: m,
            fallbackWarn: b,
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
        I.__datetimeFormatters = Ke(C) ? C.__datetimeFormatters : void 0,
        I.__numberFormatters = Ke(C) ? C.__numberFormatters : void 0;
        const x = BA(I);
        return i && Md(x),
        x
    }
    )(),
    Ui(C, l.value, u.value);
    function N() {
        return [l.value, u.value, c.value, f.value, d.value]
    }
    const H = fe({
        get: ()=>l.value,
        set: I=>{
            l.value = I,
            C.locale = l.value
        }
    })
      , B = fe({
        get: ()=>u.value,
        set: I=>{
            u.value = I,
            C.fallbackLocale = u.value,
            Ui(C, l.value, I)
        }
    })
      , $ = fe(()=>c.value)
      , W = fe(()=>f.value)
      , Y = fe(()=>d.value);
    function V() {
        return $e(p) ? p : null
    }
    function q(I) {
        p = I,
        C.postTranslation = I
    }
    function U() {
        return g
    }
    function le(I) {
        I !== null && (E = Gd(I)),
        g = I,
        C.missing = E
    }
    const K = (I,x,ae,pe,Je,at)=>{
        N();
        let Et;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (C.fallbackContext = n ? FA() : void 0),
            Et = I(C)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (C.fallbackContext = void 0)
        }
        if (ae !== "translate exists" && St(Et) && Et === ma || ae === "translate exists" && !Et) {
            const [Qn,Ca] = x();
            return n && _ ? pe(n) : Je(Qn)
        } else {
            if (at(Et))
                return Et;
            throw kn(dn.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ue(...I) {
        return K(x=>Reflect.apply(Fd, null, [x, ...I]), ()=>ec(...I), "translate", x=>Reflect.apply(x.t, x, [...I]), x=>x, x=>ie(x))
    }
    function be(...I) {
        const [x,ae,pe] = I;
        if (pe && !Be(pe))
            throw kn(dn.INVALID_ARGUMENT);
        return ue(x, ae, ht({
            resolvedMessage: !0
        }, pe || {}))
    }
    function We(...I) {
        return K(x=>Reflect.apply(Bd, null, [x, ...I]), ()=>tc(...I), "datetime format", x=>Reflect.apply(x.d, x, [...I]), ()=>Id, x=>ie(x))
    }
    function Xe(...I) {
        return K(x=>Reflect.apply(xd, null, [x, ...I]), ()=>nc(...I), "number format", x=>Reflect.apply(x.n, x, [...I]), ()=>Id, x=>ie(x))
    }
    function ut(I) {
        return I.map(x=>ie(x) || St(x) || lt(x) ? jd(String(x)) : x)
    }
    const j = {
        normalize: ut,
        interpolate: I=>I,
        type: "vnode"
    };
    function ne(...I) {
        return K(x=>{
            let ae;
            const pe = x;
            try {
                pe.processor = j,
                ae = Reflect.apply(Fd, null, [pe, ...I])
            } finally {
                pe.processor = null
            }
            return ae
        }
        , ()=>ec(...I), "translate", x=>x[rc](...I), x=>[jd(x)], x=>ft(x))
    }
    function X(...I) {
        return K(x=>Reflect.apply(xd, null, [x, ...I]), ()=>nc(...I), "number format", x=>x[oc](...I), Yd, x=>ie(x) || ft(x))
    }
    function ee(...I) {
        return K(x=>Reflect.apply(Bd, null, [x, ...I]), ()=>tc(...I), "datetime format", x=>x[ic](...I), Yd, x=>ie(x) || ft(x))
    }
    function ve(I) {
        L = I,
        C.pluralRules = L
    }
    function xe(I, x) {
        return K(()=>{
            if (!I)
                return !1;
            const ae = ie(x) ? x : l.value
              , pe = A(ae)
              , Je = C.messageResolver(pe, I);
            return Si(Je) || rn(Je) || ie(Je)
        }
        , ()=>[I], "translate exists", ae=>Reflect.apply(ae.te, ae, [I, x]), ZA, ae=>lt(ae))
    }
    function h(I) {
        let x = null;
        const ae = mg(C, u.value, l.value);
        for (let pe = 0; pe < ae.length; pe++) {
            const Je = c.value[ae[pe]] || {}
              , at = C.messageResolver(Je, I);
            if (at != null) {
                x = at;
                break
            }
        }
        return x
    }
    function v(I) {
        const x = h(I);
        return x ?? (n ? n.tm(I) || {} : {})
    }
    function A(I) {
        return c.value[I] || {}
    }
    function R(I, x) {
        if (o) {
            const ae = {
                [I]: x
            };
            for (const pe in ae)
                Us(ae, pe) && Eo(ae[pe]);
            x = ae[I]
        }
        c.value[I] = x,
        C.messages = c.value
    }
    function F(I, x) {
        c.value[I] = c.value[I] || {};
        const ae = {
            [I]: x
        };
        if (o)
            for (const pe in ae)
                Us(ae, pe) && Eo(ae[pe]);
        x = ae[I],
        qr(x, c.value[I]),
        C.messages = c.value
    }
    function G(I) {
        return f.value[I] || {}
    }
    function Z(I, x) {
        f.value[I] = x,
        C.datetimeFormats = f.value,
        Ud(C, I, x)
    }
    function Q(I, x) {
        f.value[I] = ht(f.value[I] || {}, x),
        C.datetimeFormats = f.value,
        Ud(C, I, x)
    }
    function te(I) {
        return d.value[I] || {}
    }
    function z(I, x) {
        d.value[I] = x,
        C.numberFormats = d.value,
        Hd(C, I, x)
    }
    function se(I, x) {
        d.value[I] = ht(d.value[I] || {}, x),
        C.numberFormats = d.value,
        Hd(C, I, x)
    }
    qd++,
    n && Fs && (Ye(n.locale, I=>{
        a && (l.value = I,
        C.locale = I,
        Ui(C, l.value, u.value))
    }
    ),
    Ye(n.fallbackLocale, I=>{
        a && (u.value = I,
        C.fallbackLocale = I,
        Ui(C, l.value, u.value))
    }
    ));
    const oe = {
        id: qd,
        locale: H,
        fallbackLocale: B,
        get inheritLocale() {
            return a
        },
        set inheritLocale(I) {
            a = I,
            I && n && (l.value = n.locale.value,
            u.value = n.fallbackLocale.value,
            Ui(C, l.value, u.value))
        },
        get availableLocales() {
            return Object.keys(c.value).sort()
        },
        messages: $,
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
            return b
        },
        set fallbackWarn(I) {
            b = I,
            C.fallbackWarn = b
        },
        get fallbackRoot() {
            return _
        },
        set fallbackRoot(I) {
            _ = I
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
        t: ue,
        getLocaleMessage: A,
        setLocaleMessage: R,
        mergeLocaleMessage: F,
        getPostTranslationHandler: V,
        setPostTranslationHandler: q,
        getMissingHandler: U,
        setMissingHandler: le,
        [zA]: ve
    };
    return oe.datetimeFormats = W,
    oe.numberFormats = Y,
    oe.rt = be,
    oe.te = xe,
    oe.tm = v,
    oe.d = We,
    oe.n = Xe,
    oe.getDateTimeFormat = G,
    oe.setDateTimeFormat = Z,
    oe.mergeDateTimeFormat = Q,
    oe.getNumberFormat = te,
    oe.setNumberFormat = z,
    oe.mergeNumberFormat = se,
    oe[QA] = r,
    oe[rc] = ne,
    oe[ic] = ee,
    oe[oc] = X,
    oe
}
const ku = {
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
function eL({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,i)=>[...r, ...i.type === yt ? i.children : [i]], []) : t.reduce((n,r)=>{
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , {})
}
function Rg(e) {
    return yt
}
const tL = Ue({
    name: "i18n-t",
    props: ht({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>St(e) || !isNaN(e)
        }
    }, ku),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || ga({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = ie(e.plural) ? +e.plural : e.plural);
            const a = eL(t, o)
              , l = i[rc](e.keypath, a, s)
              , u = ht({}, r)
              , c = ie(e.tag) || Be(e.tag) ? e.tag : Rg();
            return dt(c, u, l)
        }
    }
})
  , Wd = tL;
function nL(e) {
    return ft(e) && !ie(e[0])
}
function Ig(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        ie(e.format) ? s.key = e.format : Be(e.format) && (ie(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? ht({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let u = [s.key];
        ft(l) ? u = l.map((d,m)=>{
            const b = i[d.type]
              , _ = b ? b({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return nL(_) && (_[0].key = `${d.type}-${m}`),
            _
        }
        ) : ie(l) && (u = [l]);
        const c = ht({}, o)
          , f = ie(e.tag) || Be(e.tag) ? e.tag : Rg();
        return dt(f, c, u)
    }
}
const rL = Ue({
    name: "i18n-n",
    props: ht({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ku),
    setup(e, t) {
        const n = e.i18n || ga({
            useScope: "parent",
            __useComponent: !0
        });
        return Ig(e, t, Sg, (...r)=>n[oc](...r))
    }
})
  , Jd = rL
  , iL = Ue({
    name: "i18n-d",
    props: ht({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ku),
    setup(e, t) {
        const n = e.i18n || ga({
            useScope: "parent",
            __useComponent: !0
        });
        return Ig(e, t, kg, (...r)=>n[ic](...r))
    }
})
  , zd = iL;
function oL(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function sL(e) {
    const t = s=>{
        const {instance: a, modifiers: l, value: u} = s;
        if (!a || !a.$)
            throw kn(dn.UNEXPECTED_ERROR);
        const c = oL(e, a.$)
          , f = Qd(u);
        return [Reflect.apply(c.t, c, [...Xd(f)]), c]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,u] = t(a);
            Fs && e.global === u && (s.__i18nWatcher = Ye(u.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = u,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Fs && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , u = Qd(a);
                s.textContent = Reflect.apply(l.t, l, [...Xd(u)])
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
    if (ie(e))
        return {
            path: e
        };
    if (Ke(e)) {
        if (!("path"in e))
            throw kn(dn.REQUIRED_VALUE, "path");
        return e
    } else
        throw kn(dn.INVALID_VALUE)
}
function Xd(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , a = r || {};
    return ie(n) && (s.locale = n),
    St(i) && (s.plural = i),
    St(o) && (s.plural = o),
    [t, a, s]
}
function aL(e, t, ...n) {
    const r = Ke(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (lt(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : Wd.name, "I18nT"].forEach(s=>e.component(s, Wd)),
    [Jd.name, "I18nN"].forEach(s=>e.component(s, Jd)),
    [zd.name, "I18nD"].forEach(s=>e.component(s, zd))),
    e.directive("t", sL(t))
}
const lL = wr("global-vue-i18n");
function cL(e={}, t) {
    const n = lt(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , i = new Map
      , [o,s] = uL(e)
      , a = wr("");
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
                Ke(m[0])) {
                    const S = m[0];
                    f.__composerExtend = S.__composerExtend,
                    f.__vueI18nExtend = S.__vueI18nExtend
                }
                let b = null;
                n && (b = vL(d, f.global)),
                aL(d, f, ...m);
                const _ = d.unmount;
                d.unmount = ()=>{
                    b && b(),
                    f.dispose(),
                    _()
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
function ga(e={}) {
    const t = wn();
    if (t == null)
        throw kn(dn.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw kn(dn.NOT_INSTALLED);
    const n = fL(t)
      , r = hL(n)
      , i = Cg(t)
      , o = dL(e, i);
    if (o === "global")
        return XA(r, e, i),
        r;
    if (o === "parent") {
        let l = pL(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = ht({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        r && (l.__root = r),
        a = Og(l),
        s.__composerExtend && (a[sc] = s.__composerExtend(a)),
        gL(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function uL(e, t, n) {
    const r = Po();
    {
        const i = r.run(()=>Og(e));
        if (i == null)
            throw kn(dn.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function fL(e) {
    {
        const t = wt(e.isCE ? lL : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw kn(e.isCE ? dn.NOT_INSTALLED_WITH_PROVIDE : dn.UNEXPECTED_ERROR);
        return t
    }
}
function dL(e, t) {
    return ha(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function hL(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function pL(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = mL(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(o)),
        r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function mL(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function gL(e, t, n) {
    Ft(()=>{}
    , t),
    Ii(()=>{
        const r = n;
        e.__deleteInstance(t);
        const i = r[sc];
        i && (i(),
        delete r[sc])
    }
    , t)
}
const yL = ["locale", "fallbackLocale", "availableLocales"]
  , Zd = ["t", "rt", "d", "n", "tm", "te"];
function vL(e, t) {
    const n = Object.create(null);
    return yL.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw kn(dn.UNEXPECTED_ERROR);
        const s = ct(o.value) ? {
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
            throw kn(dn.UNEXPECTED_ERROR);
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
JA();
PA(jA);
MA(hA);
DA(mg);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = yu();
    e.__INTLIFY__ = !0,
    TA(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const Ct = window.setInterval
  , bL = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Pg;
const Ho = e=>Pg = e
  , Mg = Symbol();
function ac(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Xi;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Xi || (Xi = {}));
function _L() {
    const e = Po(!0)
      , t = e.run(()=>ce({}));
    let n = []
      , r = [];
    const i = pt({
        install(o) {
            Ho(i),
            i._a = o,
            o.provide(Mg, i),
            o.config.globalProperties.$pinia = i,
            r.forEach(s=>n.push(s)),
            r = []
        },
        use(o) {
            return !this._a && !bL ? r.push(o) : n.push(o),
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
const Dg = ()=>{}
;
function $d(e, t, n, r=Dg) {
    e.push(t);
    const i = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && Mo() && Zs(i),
    i
}
function ti(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const EL = e=>e();
function lc(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        ac(i) && ac(r) && e.hasOwnProperty(n) && !ct(r) && !yr(r) ? e[n] = lc(i, r) : e[n] = r
    }
    return e
}
const TL = Symbol();
function kL(e) {
    return !ac(e) || !e.hasOwnProperty(TL)
}
const {assign: ir} = Object;
function SL(e) {
    return !!(ct(e) && e.effect)
}
function wL(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , a = n.state.value[e];
    let l;
    function u() {
        a || (n.state.value[e] = i ? i() : {});
        const c = jc(n.state.value[e]);
        return ir(c, o, Object.keys(s || {}).reduce((f,d)=>(f[d] = pt(fe(()=>{
            Ho(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = Ng(e, u, t, n, r, !0),
    l
}
function Ng(e, t, n={}, r, i, o) {
    let s;
    const a = ir({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let u, c, f = [], d = [], m;
    const b = r.state.value[e];
    !o && !b && (r.state.value[e] = {}),
    ce({});
    let _;
    function S(C) {
        let O;
        u = c = !1,
        typeof C == "function" ? (C(r.state.value[e]),
        O = {
            type: Xi.patchFunction,
            storeId: e,
            events: m
        }) : (lc(r.state.value[e], C),
        O = {
            type: Xi.patchObject,
            payload: C,
            storeId: e,
            events: m
        });
        const N = _ = Symbol();
        zt().then(()=>{
            _ === N && (u = !0)
        }
        ),
        c = !0,
        ti(f, O, r.state.value[e])
    }
    const g = o ? function() {
        const {state: O} = n
          , N = O ? O() : {};
        this.$patch(H=>{
            ir(H, N)
        }
        )
    }
    : Dg;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(C, O) {
        return function() {
            Ho(r);
            const N = Array.from(arguments)
              , H = []
              , B = [];
            function $(V) {
                H.push(V)
            }
            function W(V) {
                B.push(V)
            }
            ti(d, {
                args: N,
                name: C,
                store: T,
                after: $,
                onError: W
            });
            let Y;
            try {
                Y = O.apply(this && this.$id === e ? this : T, N)
            } catch (V) {
                throw ti(B, V),
                V
            }
            return Y instanceof Promise ? Y.then(V=>(ti(H, V),
            V)).catch(V=>(ti(B, V),
            Promise.reject(V))) : (ti(H, Y),
            Y)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: $d.bind(null, d),
        $patch: S,
        $reset: g,
        $subscribe(C, O={}) {
            const N = $d(f, C, O.detached, ()=>H())
              , H = s.run(()=>Ye(()=>r.state.value[e], B=>{
                (O.flush === "sync" ? c : u) && C({
                    storeId: e,
                    type: Xi.direct,
                    events: m
                }, B)
            }
            , ir({}, l, O)));
            return N
        },
        $dispose: E
    }
      , T = At(y);
    r._s.set(e, T);
    const L = (r._a && r._a.runWithContext || EL)(()=>r._e.run(()=>(s = Po()).run(t)));
    for (const C in L) {
        const O = L[C];
        if (ct(O) && !SL(O) || yr(O))
            o || (b && kL(O) && (ct(O) ? O.value = b[C] : lc(O, b[C])),
            r.state.value[e][C] = O);
        else if (typeof O == "function") {
            const N = p(C, O);
            L[C] = N,
            a.actions[C] = O
        }
    }
    return ir(T, L),
    ir(Fe(T), L),
    Object.defineProperty(T, "$state", {
        get: ()=>r.state.value[e],
        set: C=>{
            S(O=>{
                ir(O, C)
            }
            )
        }
    }),
    r._p.forEach(C=>{
        ir(T, s.run(()=>C({
            store: T,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    b && o && n.hydrate && n.hydrate(T.$state, b),
    u = !0,
    c = !0,
    T
}
function hn(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(a, l) {
        const u = $c();
        return a = a || (u ? wt(Mg, null) : null),
        a && Ho(a),
        a = Pg,
        a._s.has(r) || (o ? Ng(r, t, i, a) : wL(r, i, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
const WM = "data:image/png;base64,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"
  , JM = "data:image/webp;base64,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"
  , AL = "data:image/png;base64,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"
  , zM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , QM = "data:image/png;base64,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"
  , XM = "data:image/png;base64,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"
  , ZM = "data:image/png;base64,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"
  , LL = hn("boost", {
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
                return AL
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
            return await je.post("/clicker/boosts-for-buy", {}).then(e=>{
                e != null && e.boostsForBuy && this.setBoostsForBuy(e.boostsForBuy);
                const {$event: t} = re();
                return t("boosts-update:success"),
                e
            }
            ).catch(e=>{
                vn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_boosts")
                })
            }
            )
        },
        async postBuyBoost(e) {
            return await je.post("/clicker/buy-boost", {
                body: {
                    boostId: e,
                    timestamp: Ve().getNowTimestamp()
                }
            }).then(t=>(Jt().useHapticFeedback("heavy"),
            Ot().setUserResponseData(t),
            t != null && t.upgradesForBuy && To().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            Ve().trackEvent(Ve().camelToSnake(e)),
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
e.PLAYGROUND = "hk_playground",
e.AIRDROP_TASKS = "airdrop_task",
e.SETTINGS = "hk_settings",
e.AUTH_TOKEN = "authToken",
e))(tt || {})
  , en = (e=>(e[e.BALANCE_ANIMATION_SPEED = 50] = "BALANCE_ANIMATION_SPEED",
e[e.CALC_INTERVAL = 1e3] = "CALC_INTERVAL",
e[e.SYNC_INTERVAL = 36e5] = "SYNC_INTERVAL",
e[e.TAP_INTERVAL = 3e3] = "TAP_INTERVAL",
e[e.REFERRAL_REFRESH_TIME = 60] = "REFERRAL_REFRESH_TIME",
e.GAME_NAME = "Hamster Kombat",
e.DEFAULT_EXCHANGE = "hamster",
e))(en || {})
  , CL = (e=>(e.REPEATEDLY = "Repeatedly",
e.ONCE = "Once",
e))(CL || {})
  , cc = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(cc || {})
  , OL = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(OL || {})
  , RL = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Web3 = "Web3",
e.Legal = "Legal",
e))(RL || {})
  , IL = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
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
e.ton_listing = "ton_listing",
e.vipassana_hamster = "vipassana_hamster",
e.adv_integration_0908 = "adv_integration_0908",
e.hamster_helps_whales = "hamster_helps_whales",
e.hamster_with_friends = "hamster_with_friends",
e.telegram_11_years = "telegram_11_years",
e.adv_integration_1608 = "adv_integration_1608",
e.adv_integration_1908 = "adv_integration_1908",
e.communication_mentor = "communication_mentor",
e.company_planning = "company_planning",
e.speaking_employees = "speaking_employees",
e.negotiations_partners = "negotiations_partners",
e.speaking_tv_show = "speaking_tv_show",
e.business_processes = "business_processes",
e.hiring_employees = "hiring_employees",
e.electric_car = "electric_car",
e.rocket_to_mars = "rocket_to_mars",
e.vintage_cars = "vintage_cars",
e.investments_in_farming = "investments_in_farming",
e.hotel_construction = "hotel_construction",
e))(IL || {})
  , PL = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(PL || {})
  , ML = (e=>(e[e.Bronze = 1] = "Bronze",
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
e))(ML || {})
  , DL = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(DL || {})
  , NL = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(NL || {})
  , uc = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
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
e))(uc || {})
  , VL = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.CONNECT_TON_WALLET = "airdrop_connect_ton_wallet",
e.INVITE_FRIENDS = "invite_friends",
e.REACH_PROFIT_PER_HOUR = "reach_profit_per_hour",
e.REACH_LEVEL = "reach_level",
e))(VL || {})
  , FL = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(FL || {})
  , BL = (e=>(e.BINGX = "bingx",
e))(BL || {})
  , jo = (e=>(e.LANDING = "/",
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
e))(jo || {})
  , UL = (e=>(e.points = "points",
e.withdrawal = "withdrawal",
e))(UL || {})
  , xL = (e=>(e.passive_income = "passive_income",
e.earn_tasks = "earn_tasks",
e.friends = "friends",
e.achievements = "achievements",
e.telegram_subscription = "telegram_subscription",
e.keys = "keys",
e))(xL || {})
  , Vg = (e=>(e.ONBOARDING_START = "onboarding_start",
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
e))(Vg || {})
  , Vr = (e=>(e.Dot = ".",
e.Dash = "-",
e.SymbolSeparator = "/",
e))(Vr || {});
const HL = {
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
  , To = hn("upgrade", {
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
                timestamp: Ve().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = Ct(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = Ve().getNowTimestampWithMS()
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
            return await je.post("/clicker/buy-upgrade", {
                body: {
                    upgradeId: e,
                    timestamp: Ve().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, i;
                Jt().useHapticFeedback("heavy"),
                Ot().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && LL().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((i = (r = this.upgradesForBuy) == null ? void 0 : r.find(o=>o.id === e)) == null ? void 0 : i.level) ?? 1;
                return Ve().trackEvent(`mine_${Ve().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await je.post("/clicker/claim-daily-combo", {}).then(e=>(Jt().useHapticFeedback("heavy"),
            Ot().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await je.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
            e != null && e.sections && this.setSections(e.sections),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e)).catch(e=>{
                vn.error({
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
            this.getDailyComboNotClaimed && !Ot().first_time_load && (Ve().trackEvent(Vg.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = re();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return Ve().compareWithEmptyOldArray(e, this.dailyComboCount);
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
                this.cooldowns[n.id].timestamp = Ve().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
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
            this.dailyComboInterval = Ct(()=>{
                var e;
                if ((e = this.dailyCombo) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ve().getNowTimestamp();
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
  , Ot = hn("clicker", {
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
            const r = (Fe(this.balanceCoins) ?? 0) + e
              , i = e / 50
              , o = Math.floor(800 / e * i);
            let s = Ct(()=>{
                this.balanceCoins += i,
                this.balanceCoins >= r && (this.balanceCoins = r,
                clearInterval(s),
                s = null)
            }
            , o)
        },
        animateBalance() {
            this.balanceCoins < this.balanceTarget && (this.animate_interval = Ct(()=>{
                if (this.balanceCoins >= this.balanceTarget) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins++
            }
            , en.BALANCE_ANIMATION_SPEED)),
            this.balanceTarget < this.balanceCoins && (this.animate_interval = Ct(()=>{
                if (this.balanceTarget >= this.balanceCoins) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins--
            }
            , en.BALANCE_ANIMATION_SPEED))
        },
        calcEnergy() {
            let e = 1;
            const t = Ve().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (Rt().maxPassiveDtSeconds_local <= (Rt().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = Ve().getNowTimestamp();
                this.timestamp_passive && t - this.timestamp_passive > 1 && (e = t - this.timestamp_passive);
                const n = this.earnPassivePerSec ?? 0;
                this.totalCoins = this.totalCoins + e * n,
                this.balanceCoins = this.balanceCoins + e * n,
                Rt().maxPassiveDtSeconds_local += e,
                this.timestamp_passive = t
            }
        },
        checkAchievements() {
            var e;
            this.clearAchievementsInterval(),
            (e = this.achievements) != null && e.filter(t=>!t.isClaimed).length && (this.achievements_interval = Ct(()=>{
                gt().loading || (this.clearAchievementsInterval(),
                this.setAchievementsShow(!0))
            }
            , 500))
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !gt().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            Jt().notificationLevelUp = vn.promise({
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
            this.tap_interval === null && (this.tap_interval = Ct(()=>{
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
            , en.TAP_INTERVAL)
        },
        async earnStartInterval() {
            re().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${Ve().getNowTimestamp()}
              timestamp dt: ${Ve().getNowTimestamp() - this.lastSyncUpdate}
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
            return ((n = (t = Rt().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === e)) == null ? void 0 : n.coinsToLeveUp) ?? 0
        },
        async postAchievementStat(e) {
            return await je.post("/clicker/achievement-stat", {
                body: {
                    achievementIds: e
                }
            }).then(t=>t)
        },
        async postExchangeReferralStat(e=0) {
            return await je.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postReferrerInfo() {
            return await je.post("/clicker/referrer-info", {}).then(e=>(e.referrer && this.setReferrer(e.referrer),
            e))
        },
        async postSendReferralLink() {
            return await je.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSkinBuy(e="skin0") {
            return await je.post("/clicker/buy-skin", {
                body: {
                    skinId: e,
                    timestamp: Ve().getNowTimestamp()
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinSelect(e="skin0") {
            return await je.post("/clicker/select-skin", {
                body: {
                    skinId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinsGet() {
            return await je.post("/clicker/get-skin", {
                body: {}
            }).then(e=>(e.skins && Rt().mergeSkinsAndState(e.skins),
            e))
        },
        async postSync() {
            return await je.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(tt.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(tt.SYNC_AVAILABLE_TAPS);
            return await je.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : Ve().getNowTimestamp()
                }
            }).then(i=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(i),
                this.storageSyncTapsSubtract(e);
                const o = Ve().getNowTimestamp() - this.lastSyncUpdate;
                return o > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * o)),
                this.timer_leveUp || this.timerLevelUpStart(),
                i
            }
            ).catch(i=>{
                vn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_tap")
                }),
                Jt().rejectNotificationLevelUp()
            }
            )
        },
        async postUserClaimDailyCombo(e) {
            return await je.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserExchangeId(e) {
            return await je.post("/clicker/select-exchange", {
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
                const n = (t = Rt().exchanges) == null ? void 0 : t.find(r=>r.id === e);
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
            Rt().maxPassiveDtSeconds_local = 0
        },
        setLevel(e) {
            var t, n;
            this.level = e,
            this.coinsToLevelUp = (n = (t = Rt().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === this.level)) == null ? void 0 : n.coinsToLeveUp
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
            var t, n, r, i, o, s, a, l, u, c, f, d, m, b, _, S, g, E, p, y, T, w, L;
            if ((t = e == null ? void 0 : e.clickerUser) != null && t.id && this.setId(e.clickerUser.id),
            (n = e == null ? void 0 : e.clickerUser) != null && n.totalKeys && this.setTotalKeys(e.clickerUser.totalKeys),
            (r = e == null ? void 0 : e.clickerUser) != null && r.balanceKeys && this.setBalanceKeys(e.clickerUser.balanceKeys),
            (i = e == null ? void 0 : e.clickerUser) != null && i.totalCoins && this.setTotalCoins(e.clickerUser.totalCoins),
            (o = e == null ? void 0 : e.clickerUser) != null && o.balanceCoins && (this.first_time_load ? (s = e == null ? void 0 : e.clickerUser) != null && s.lastPassiveEarn && ((a = e == null ? void 0 : e.clickerUser) == null ? void 0 : a.lastPassiveEarn) > 1 ? (this.setBalanceCoins(e.clickerUser.balanceCoins - e.clickerUser.lastPassiveEarn),
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : gt().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((l = e == null ? void 0 : e.clickerUser) == null ? void 0 : l.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (u = e == null ? void 0 : e.clickerUser) != null && u.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (d = e == null ? void 0 : e.clickerUser) != null && d.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (m = e == null ? void 0 : e.clickerUser) != null && m.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (b = e == null ? void 0 : e.clickerUser) != null && b.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.upgradesForBuy && To().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (S = e == null ? void 0 : e.clickerUser) != null && S.upgrades && To().setMyUpgrades(e.clickerUser.upgrades),
            (g = e == null ? void 0 : e.clickerUser) != null && g.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (E = e == null ? void 0 : e.clickerUser) != null && E.referrerId && this.setReferrerId(e.clickerUser.referrerId),
            (p = e == null ? void 0 : e.clickerUser) != null && p.level) {
                const C = (y = e == null ? void 0 : e.clickerUser) == null ? void 0 : y.level;
                if (this.level && this.level < C) {
                    const {$event: O} = re();
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
            gt().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(tt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(tt.SYNC_TAPS, String(n + e)),
            localStorage.setItem(tt.SYNC_TIMESTAMP_TAPS, String(Ve().getNowTimestamp()))
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
            this.timer_energy = Ct(this.calcEnergy, en.CALC_INTERVAL)
        },
        timerLevelUpReset() {
            this.timer_leveUp && clearInterval(this.timer_leveUp),
            this.timer_leveUp = null
        },
        timerLevelUpStart() {
            this.level !== this.getMaxUserLevel && this.timer_leveUp === null && (this.timer_leveUp = Ct(this.checkLevelUp, en.CALC_INTERVAL))
        },
        timerPassiveReset() {
            this.timer_passive && clearInterval(this.timer_passive),
            this.timer_passive = null
        },
        timerPassiveStart() {
            this.timer_passive = Ct(this.calcPassive, en.CALC_INTERVAL)
        },
        timerSyncReset() {
            this.timer_sync && clearInterval(this.timer_sync),
            this.timer_sync = null
        },
        timerSyncStart() {
            this.timer_sync = Ct(()=>{
                this.postSync().catch(e=>{
                    vn.error({
                        title: re().$i18n.t("messages.request_error"),
                        message: re().$i18n.t("messages.no_sync")
                    }),
                    Jt().rejectNotificationLevelUp()
                }
                )
            }
            , en.SYNC_INTERVAL)
        }
    },
    getters: {
        getUserLevel() {
            return (this.level ?? 1) > 11 ? 11 : this.level ?? 1
        },
        getMaxUserLevel() {
            let e = 0;
            for (const t of Rt().userLevels_balanceCoins)
                t.level !== null && (e = Math.max(e, t.level));
            return e
        },
        getProgressLevel() {
            var n;
            let e = 0;
            const t = (n = Rt().userLevels_balanceCoins) == null ? void 0 : n.find(r=>r.level === this.level);
            return this.level === this.getMaxUserLevel && (e = 100),
            this.level && this.level !== this.getMaxUserLevel && t && (e = this.balanceCoins * 100 / t.coinsToLeveUp),
            Math.min(e, 100)
        },
        getUserBalanceFormatted() {
            return Ve().numberFormat(this.balanceCoins, !1)
        }
    }
})
  , Ve = hn("helper", {
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
            const {locale: e} = ga();
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
            vn.error({
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
  , jL = {
    path: "/",
    watch: !0,
    decode: e=>go(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function KL(e, t) {
    var l;
    const n = {
        ...jL,
        ...t
    }
      , r = eh(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const o = i !== void 0 && i <= 0
      , s = On(o ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = i && !o ? GL(s, i) : ce(s);
    {
        const u = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , c = ()=>{
            n.readonly || TE(a.value, r[e]) || (qL(e, a.value, n),
            r[e] = On(a.value),
            u == null || u.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var _;
            const b = m.refresh ? (_ = eh(n)) == null ? void 0 : _[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = b,
            zt(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        Mo() && Zs(()=>{
            d = !0,
            c(),
            u == null || u.close()
        }
        ),
        u && (u.onmessage = ({data: m})=>f(m)),
        n.watch ? Ye(a, ()=>{
            d || c()
        }
        , {
            deep: n.watch !== "shallow"
        }) : c()
    }
    return a
}
function eh(e={}) {
    return mE(document.cookie, e)
}
function YL(e, t, n={}) {
    return t == null ? Bf(e, t, {
        ...n,
        maxAge: -1
    }) : Bf(e, t, n)
}
function qL(e, t, n={}) {
    document.cookie = YL(e, t, n)
}
const th = 2147483647;
function GL(e, t) {
    let n, r = 0;
    return Mo() && Zs(()=>{
        clearTimeout(n)
    }
    ),
    Tp((i,o)=>{
        function s() {
            clearTimeout(n);
            const a = t - r
              , l = a < th ? a : th;
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
const Qr = ["de", "en", "es", "fr", "hi", "id", "pt", "ru", "th", "tl", "tr", "uz", "vi"]
  , fc = {
    de: [{
        key: "../locales/de.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/de.TGUBtO_W.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    en: [{
        key: "../locales/en.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/en.BlMjOvUg.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/es.CPL2Trm8.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    fr: [{
        key: "../locales/fr.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/fr.B42sAZsZ.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/hi.D52kkFVe.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/id.D4g7wMcM.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/pt.6sdmnrAf.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ru.1e_2u0wE.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/th.VxLJ5jOQ.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/tl.BDYmMwtl.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/tr.I1rSKypF.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/uz.Di65I-kA.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/vi.CG0nCDfE.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , WL = [()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
  , vt = {
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
  , ya = {
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
  , Su = [{
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
  , JL = !1
  , zL = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , QL = ""
  , XL = "nuxtI18n"
  , ZL = typeof window < "u";
function $L(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        ie(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function eC(e) {
    return e != null && "global"in e && "mode"in e
}
function tC(e) {
    return e != null && !("__composer"in e) && "locale"in e && ct(e.locale)
}
function Fg(e) {
    return e != null && "__composer"in e
}
function Lr(e) {
    return eC(e) ? e.global : e
}
function wi(e) {
    const t = Lr(e);
    return tC(t) ? t : Fg(t) ? t.__composer : t
}
function va(e) {
    return J(Lr(e).locale)
}
function nC(e) {
    return J(Lr(e).locales)
}
function rC(e) {
    return J(Lr(e).localeCodes)
}
function Bg(e, t) {
    const n = Lr(e);
    ct(n.locale) ? n.locale.value = t : n.locale = t
}
function Ug(e) {
    return ie(e) ? e : Pw(e) ? e.toString() : "(null)"
}
function nh(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: i, defaultLocaleRouteNameSuffix: o}) {
    let s = Ug(e) + (r === "no_prefix" ? "" : i + t);
    return t === n && r === "prefix_and_default" && (s += i + o),
    s
}
function rh(e, t) {
    return $e(e) ? e(t) : e
}
function iC(e, t) {
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
const oC = iC;
function sC(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const aC = sC;
function lC(e, t, {matcher: n=oC, comparer: r=aC}={}) {
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
function dc(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const Zi = new Map;
async function cC(e, t) {
    const n = {
        messages: {}
    };
    for (const r of e) {
        const {default: i} = await r()
          , o = typeof i == "function" ? await t.runWithContext(async()=>await i()) : i;
        qr(o, n)
    }
    return n
}
function xg(e, t) {
    let n = [];
    if (ft(e))
        n = e;
    else if (Be(e)) {
        const r = [...t, "default"];
        for (const i of r)
            e[i] && (n = [...n, ...e[i].filter(Boolean)])
    } else
        ie(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function uC(e, t, n) {
    const {defaultLocale: r, initialLocale: i, localeCodes: o, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const u = xg(s, [r, i]);
        await Promise.all(u.map(c=>ih(c, t, e)))
    }
    const l = a ? [...new Set().add(r).add(i)] : o;
    return await Promise.all(l.map(u=>ih(u, t, e))),
    e
}
async function fC(e, {key: t, load: n}) {
    let r = null;
    try {
        const i = await n().then(o=>o.default || o);
        $e(i) ? r = await i(e) : (r = i,
        r != null && Zi && Zi.set(t, r))
    } catch (i) {
        console.error("Failed locale loading: " + i.message)
    }
    return r
}
async function hc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const i = {};
    for (const o of r) {
        let s = null;
        Zi && Zi.has(o.key) && o.cache ? s = Zi.get(o.key) : s = await fC(e, o),
        s != null && qr(s, i)
    }
    n(e, i)
}
async function ih(e, t, n) {
    await hc(e, t, (i,o)=>{
        const s = n[i] || {};
        qr(o, s),
        n[i] = s
    }
    )
}
function dC(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function hC(e) {
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
function pC({router: e}, t, n, r) {
    var u, c;
    if (n !== "prefix")
        return e.resolve(t);
    const [i,o] = dC(t.path, 1)
      , s = `${i}${r}${o === "" ? o : `/${o}`}`
      , a = (c = (u = e.options) == null ? void 0 : u.routes) == null ? void 0 : c.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = ht({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const mC = new Set(["prefix_and_default", "prefix_except_default"]);
function gC(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && mC.has(r)) && r !== "no_prefix"
}
const yC = gC;
function Ai(e) {
    const {routesNameSeparator: t} = vt
      , n = J(e);
    return n == null || !n.name ? void 0 : Ug(n.name).split(t)[0]
}
function ba(e, t, n) {
    var i;
    if (typeof t == "string" && Un(t, {
        acceptRelative: !0
    }))
        return t;
    const r = _a(e, t, n);
    return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}
function wu(e, t, n) {
    return _a(e, t, n) ?? void 0
}
function vC(e, t, n) {
    return _a(e, t, n) ?? void 0
}
function _a(e, t, n) {
    const {router: r, i18n: i} = e
      , o = n || va(i)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: u, trailingSlash: c} = vt
      , f = MC();
    let d;
    if (ie(t))
        if (t[0] === "/") {
            const {pathname: _, search: S, hash: g} = Vl(t)
              , E = iu(S);
            d = {
                path: _,
                query: E,
                hash: g
            }
        } else
            d = {
                name: t
            };
    else
        d = t;
    let m = ht({}, d);
    if ((_=>"path"in _ && !!_.path && !("name"in _))(m)) {
        const _ = pC(e, m, u, o)
          , S = Ai(_);
        ie(S) ? (m = {
            name: nh(S, o, {
                defaultLocale: a,
                strategy: u,
                routesNameSeparator: s,
                defaultLocaleRouteNameSuffix: l
            }),
            params: _.params,
            query: _.query,
            hash: _.hash
        },
        m.state = _.state) : (f({
            currentLocale: o,
            defaultLocale: a,
            strategy: u
        }) && (m.path = `/${o}${m.path}`),
        m.path = c ? mo(m.path, !0) : Vo(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = Ai(r.currentRoute.value)),
        m.name = nh(m.name, o, {
            defaultLocale: a,
            strategy: u,
            routesNameSeparator: s,
            defaultLocaleRouteNameSuffix: l
        });
    try {
        const _ = r.resolve(m);
        return _.name ? _ : r.resolve(t)
    } catch (_) {
        if (typeof _ == "object" && "type"in _ && _.type === 1)
            return null
    }
}
const bC = e=>e;
function _C(e) {
    var n;
    const t = e.meta || {};
    return ((n = J(t)) == null ? void 0 : n[XL]) || {}
}
function Li(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , i = Ai(r);
    if (!i)
        return "";
    const o = DC()
      , s = hC(r)
      , a = _C(r)[t]
      , l = {
        ...s,
        name: i,
        params: {
            ...s.params,
            ...a
        }
    }
      , u = ba(e, l, t);
    return o(u, t)
}
function Hg(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: i} = vt
      , o = wi(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (J(o.locales) == null || J(o.baseUrl) == null)
        return s;
    const a = va(e.i18n)
      , l = nC(e.i18n)
      , u = $L(l).find(d=>d.code === a) || {
        code: a
    }
      , c = u.iso
      , f = u.dir || i;
    return t && (s.htmlAttrs.dir = f),
    n && a && J(o.locales) && (c && (s.htmlAttrs.lang = c),
    s.link.push(...EC(e, J(l), r), ...TC(e, r, n)),
    s.meta.push(...kC(e, r, n), ...SC(u, c, r), ...wC(J(l), c, r))),
    s
}
function Au() {
    const e = wi(re().$i18n);
    return J(e.baseUrl)
}
function EC(e, t, n) {
    const r = Au()
      , {defaultLocale: i, strategy: o} = vt
      , s = [];
    if (o === zL.NO_PREFIX)
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
        const c = Li(e, u.code);
        c && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: pc(c, r),
            hreflang: l
        })
    }
    if (i) {
        const l = Li(e, i);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: pc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function jg(e, t, n) {
    const r = e.router.currentRoute.value
      , i = wu(e, {
        ...r,
        name: Ai(r)
    });
    if (!i)
        return "";
    let o = pc(i.path, t);
    const s = Be(n) && n.canonicalQueries || []
      , a = i.query
      , l = new URLSearchParams;
    for (const c of s)
        if (c in a) {
            const f = a[c];
            ft(f) ? f.forEach(d=>l.append(c, d || "")) : l.append(c, f || "")
        }
    const u = l.toString();
    return u && (o = `${o}?${u}`),
    o
}
function TC(e, t, n) {
    const r = Au()
      , i = jg(e, r, n);
    return i ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: i
    }] : []
}
function kC(e, t, n) {
    const r = Au()
      , i = jg(e, r, n);
    return i ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: i
    }] : []
}
function SC(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: Kg(t)
    }]
}
function wC(e, t, n) {
    return e.filter(i=>i.iso && i.iso !== t).map(i=>({
        [n]: `i18n-og-alt-${i.iso}`,
        property: "og:locale:alternate",
        content: Kg(i.iso)
    }))
}
function Kg(e) {
    return (e || "").replace(/-/g, "_")
}
function pc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function AC(e, t) {
    return Ko(e, "setLocale", t)
}
function LC(e, t) {
    return Ko(e, "setLocaleCookie", t)
}
function CC(e, t, n) {
    return Ko(e, "mergeLocaleMessage", t, n)
}
function OC(e, t, n, r, i) {
    return Ko(e, "onBeforeLanguageSwitch", t, n, r, i)
}
function RC(e, t, n) {
    return Ko(e, "onLanguageSwitched", t, n)
}
function Lu(e) {
    return {
        i18n: e ?? re().$i18n,
        router: Xt(),
        runtimeConfig: zn()
    }
}
async function oh(e, t, n=!1) {
    const r = vt.differentDomains
      , i = (vt.detectBrowserLanguage && vt.detectBrowserLanguage.useCookie) ?? ya.detectBrowserLanguage.useCookie
      , o = re();
    let s = !1;
    const a = va(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await OC(t, a, e, n, o)
      , u = rC(t);
    if (l && u && u.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const c = VC(t, "fallbackLocale");
    {
        const f = (d,m)=>CC(t, d, m);
        if (c) {
            const d = xg(c, [e]);
            await Promise.all(d.map(m=>hc(m, fc, f)))
        }
        await hc(e, fc, f)
    }
    return i && LC(t, e),
    Bg(t, e),
    await RC(t, a, e),
    s = !0,
    [s, a]
}
function sh(e, t, n, r, i) {
    const {strategy: o, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = vt
      , u = $e(r) ? r() : r
      , {ssg: c, callType: f, firstAccess: d, localeCookie: m} = i
      , {locale: b, stat: _, reason: S, from: g} = l ? Gg(e, n, i, u) : qg;
    if (S === "detect_ignore_on_ssg")
        return u;
    if ((g === "navigator_or_header" || g === "cookie" || g === "fallback") && b)
        return b;
    let E = b;
    return E || (a ? E = HC(Su) : o !== "no_prefix" ? E = t(e) : l || (E = u)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function ah({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const i = re()
      , o = Lu()
      , {strategy: s, differentDomains: a} = vt;
    let l = "";
    const {fullPath: u} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const c = i.$switchLocalePath(t) || i.$localePath(u, t);
        ie(c) && c && !Nl(c, u) && !c.startsWith("//") && (l = e.from && e.from.fullPath === c ? "" : c)
    }
    if ((a || !0) && n(e.to) !== t) {
        const c = Li(o, t, e.to);
        ie(c) && c && !Nl(c, u) && !c.startsWith("//") && (l = c)
    }
    return l
}
function IC(e) {
    return Be(e) && "path"in e && "statusCode"in e
}
function lh(e, t) {
    return Uo(e, {
        redirectCode: t
    })
}
async function ch(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = ya.rootRedirect
      , {i18n: i, locale: o, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return ie(r) ? a = "/" + r : IC(r) && (a = "/" + r.path,
        t = r.statusCode),
        lh(a, t);
    if (a)
        return lh(a, t)
}
function PC(e, t) {
    ni(e, "$i18n", Lr(t)),
    ni(e, "$getRouteBaseName", Ai),
    ni(e, "$localePath", on(ba)),
    ni(e, "$localeRoute", on(wu)),
    ni(e, "$switchLocalePath", on(Li)),
    ni(e, "$localeHead", on(Hg))
}
function MC() {
    return e=>yC(e) && !vt.differentDomains
}
function DC() {
    return (e,t)=>bC(e)
}
function NC() {
    return ()=>{
        var o;
        const e = re()
          , t = zn()
          , n = vt.baseUrl;
        if ($e(n))
            return n(e);
        const r = vt.defaultLocale;
        $e(r) && r();
        const i = (o = t == null ? void 0 : t.public) == null ? void 0 : o.i18n;
        return i != null && i.baseUrl ? i.baseUrl : n
    }
}
function Ko(e, t, ...n) {
    const r = Lr(e)
      , [i,o] = [r, r[t]];
    return Reflect.apply(o, i, [...n])
}
function VC(e, t) {
    const n = Lr(e);
    return J(n[t])
}
function ni(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function on(e, t=Lu()) {
    return (...n)=>e(t, ...n)
}
function Yg() {
    let e;
    return navigator.languages && (e = lC(Su, navigator.languages)),
    e
}
function FC() {
    const e = vt.detectBrowserLanguage
      , t = e && e.cookieKey || ya.detectBrowserLanguage.cookieKey
      , n = new Date
      , r = {
        expires: new Date(n.setDate(n.getDate() + 365)),
        path: "/",
        sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
        secure: e && e.cookieCrossOrigin || e && e.cookieSecure
    };
    return e && e.cookieDomain && (r.domain = e.cookieDomain),
    KL(t, r)
}
function BC(e) {
    const t = vt.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && Qr.includes(n))
        return n
}
function UC(e, t) {
    const {useCookie: n} = vt.detectBrowserLanguage || ya.detectBrowserLanguage;
    n && (e.value = t)
}
const qg = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function Gg(e, t, n, r="") {
    const {strategy: i} = vt
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
    const {redirectOn: u, alwaysRedirect: c, useCookie: f, fallbackLocale: d} = vt.detectBrowserLanguage
      , m = ie(e) ? e : e.path;
    if (i !== "no_prefix") {
        if (u === "root") {
            if (m !== "/")
                return {
                    locale: "",
                    stat: !1,
                    reason: "not_redirect_on_root"
                }
        } else if (u === "no prefix" && !c && m.match(dc(Qr)))
            return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_no_prefix"
            }
    }
    let b = "unknown", _, S;
    f && (S = _ = l.value,
    b = "cookie"),
    S || (S = Yg(),
    b = "navigator_or_header");
    const g = S || d;
    !S && d && (b = "fallback");
    const E = r || t;
    if (g && (!f || c || !_)) {
        if (i === "no_prefix")
            return {
                locale: g,
                stat: !0,
                from: b
            };
        if (s === "setup" && g !== E)
            return {
                locale: g,
                stat: !0,
                from: b
            };
        if (c) {
            const p = m === "/"
              , y = u === "all"
              , T = u === "no prefix" && !m.match(dc(Qr));
            if (p || y || T)
                return {
                    locale: g,
                    stat: !0,
                    from: b
                }
        }
    }
    return o === "ssg_setup" && g ? {
        locale: g,
        stat: !0,
        from: b
    } : (b === "navigator_or_header" || b === "cookie") && g ? {
        locale: g,
        stat: !0,
        from: b
    } : {
        locale: "",
        stat: !1,
        reason: "not_found_match"
    }
}
function xC() {
    let e;
    return e = window.location.host,
    e
}
function HC(e) {
    let t = xC() || "";
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
function Wg() {
    return on(ba)
}
function $M() {
    return on(Li)
}
const uh = hn("promo", {
    state: ()=>({
        promos: [],
        states: [],
        showPromo: !1,
        selectedPromo: {}
    }),
    actions: {
        showPromoPage(e) {
            this.showPromo = !0,
            this.selectedPromo = e
        },
        hidePromoPage() {
            this.showPromo = !1,
            this.selectedPromo = {}
        },
        async postGetPromos() {
            return await je.post("/clicker/get-promos", {}).then(e=>{
                try {
                    if (e) {
                        const {promos: t, states: n} = e;
                        this.setPromos(t),
                        this.setStates(n)
                    }
                } catch (t) {
                    console.log(t)
                }
                return e
            }
            )
        },
        async postApplyPromocode(e) {
            return await je.post("/clicker/apply-promo", {
                body: {
                    promoCode: e
                }
            }).then(t=>(Ot().setUserResponseData(t),
            this.setSingleState(t.promoState),
            t))
        },
        setPromos(e) {
            this.promos = e
        },
        setStates(e) {
            this.states = e
        },
        setSingleState(e) {
            !this.states.find(n=>n.promoId === e.promoId) && e ? this.states.push(e) : this.states = this.states.map(n=>n.promoId === e.promoId ? e : n)
        },
        getReceiveKeysToday(e) {
            var n;
            const t = (n = this.states) == null ? void 0 : n.find(r=>r.promoId === e);
            return !t || !t.receiveKeysToday ? 0 : t.receiveKeysToday
        }
    }
})
  , tl = ()=>({
    haptic: !0,
    coins_animation: !0
})
  , jC = hn("settings", {
    state: ()=>({
        settings: tl()
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
                ...tl(),
                ...JSON.parse(e)
            } : tl(),
            this.saveToLocalStorage()
        },
        async postExchangeRefLink(e) {
            return await je.post("/clicker/exchangeRefLink-save", {
                body: {
                    exchangeRefLink: e
                }
            }).then(t=>t)
        }
    }
})
  , eD = Ue({
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
          , {showBackButton: i, onBackButtonClicked: o, hideBackButton: s} = ZC();
        return Ye(()=>n.visible, a=>{
            a ? i() : s()
        }
        ),
        o(()=>r("click")),
        Ft(()=>n.visible && i()),
        Ii(()=>s()),
        (a,l)=>null
    }
})
  , {initData: KC, initDataUnsafe: YC, version: qC, platform: GC, isVersionAtLeast: WC, sendData: JC, close: zC} = Telegram.WebApp
  , Jg = ce(!1)
  , QC = (...e)=>{
    Telegram.WebApp.ready(...e),
    Jg.value = !0
}
  , zg = e=>Telegram.WebApp.platform === e
  , Qg = zg("unknown")
  , XC = !Qg && Telegram.WebApp.initData === "";
function Xg() {
    return {
        initData: KC,
        initDataUnsafe: YC,
        version: qC,
        platform: GC,
        isVersionAtLeast: WC,
        onEvent: (...e)=>{
            Ft(()=>Telegram.WebApp.onEvent(...e)),
            Ii(()=>Telegram.WebApp.offEvent(...e))
        }
        ,
        sendData: JC,
        ready: QC,
        close: zC,
        isReady: hr(Jg),
        isPlatform: zg,
        isPlatformUnknown: Qg,
        canSendData: XC
    }
}
const Zg = ce(Telegram.WebApp.BackButton.isVisible);
function $g() {
    Zg.value = Telegram.WebApp.BackButton.isVisible
}
function fh(...e) {
    Telegram.WebApp.BackButton.show(...e),
    $g()
}
function dh(...e) {
    Telegram.WebApp.BackButton.hide(...e),
    $g()
}
function ZC() {
    const {onEvent: e} = Xg()
      , t = n=>e("backButtonClicked", n);
    return {
        isBackButtonVisible: fe({
            get() {
                return Zg.value
            },
            set(n) {
                n ? fh() : dh()
            }
        }),
        onBackButtonClicked: t,
        showBackButton: fh,
        hideBackButton: dh
    }
}
Telegram.WebApp;
ce(Telegram.WebApp.isClosingConfirmationEnabled);
Telegram.WebApp.CloudStorage;
const {impactOccurred: $C, notificationOccurred: eO, selectionChanged: tO} = Telegram.WebApp.HapticFeedback;
function nO() {
    return {
        impactOccurred: $C,
        notificationOccurred: eO,
        selectionChanged: tO
    }
}
ce(Telegram.WebApp.MainButton.text);
ce(Telegram.WebApp.MainButton.color);
ce(Telegram.WebApp.MainButton.textColor);
ce(Telegram.WebApp.MainButton.isVisible);
ce(Telegram.WebApp.MainButton.isActive);
ce(Telegram.WebApp.MainButton.isProgressVisible);
Telegram.WebApp;
Telegram.WebApp;
Telegram.WebApp;
Telegram.WebApp;
Xg();
ce(Telegram.WebApp.SettingsButton.isVisible);
ce(Telegram.WebApp.colorScheme);
ce(Telegram.WebApp.themeParams);
ce(Telegram.WebApp.headerColor);
ce(Telegram.WebApp.backgroundColor);
ce(Telegram.WebApp.isExpanded);
ce(Telegram.WebApp.viewportHeight);
ce(Telegram.WebApp.viewportStableHeight);
const Jt = hn("ui", {
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
        taskNotification: !1,
        playgroundNotification: !1
    }),
    actions: {
        async copyText(e) {
            const t = vn.promise({
                title: re().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success(re().$i18n.t("messages.copy_success")),
                Ve().trackEvent("copy_text_success_writeText")
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
                Ve().trackEvent("copy_text_success_exec")) : (t == null || t.reject(re().$i18n.t("messages.copy_error")),
                Ve().trackEvent("copy_text_error"))
            }
        },
        goBackButton() {
            const {$event: e} = re()
              , t = Wg();
            this.bottom_sheet_open ? e("bs:close") : this.modalOpen ? e("modal:close") : uh().showPromo ? uh().showPromo = !1 : Uo(t(jo.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject(re().$i18n.t("messages.oops")),
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
            jC().settings.haptic && nO().impactOccurred(e)
        },
        isRu(e) {
            return this.language_code === "ru" || e === "ru"
        },
        isGeoRU() {
            return ["RU"].indexOf(gt().location.country_code ?? "") > -1
        },
        isYP() {
            return ["RU", "BY", "KZ", "UZ", "KG", "AZ", "AM", "GE"].indexOf(gt().location.country_code ?? "") > -1
        },
        isRUBY() {
            return ["RU", "BY"].indexOf(gt().location.country_code ?? "") > -1
        },
        isPECLMX() {
            return ["PE", "CL", "MX"].indexOf(gt().location.country_code ?? "") > -1
        },
        isBR() {
            return ["BR"].indexOf(gt().location.country_code ?? "") > -1
        },
        isNGZAKEGH() {
            return ["NG", "ZA", "KE", "GH"].indexOf(gt().location.country_code ?? "") > -1
        },
        isET() {
            return ["ET"].indexOf(gt().location.country_code ?? "") > -1
        },
        isGamesRu() {
            return ["AZ", "AM", "BY", "KZ", "KG", "MD", "RU", "TJ", "TM"].indexOf(gt().location.country_code ?? "") > -1
        },
        isGamesUz() {
            return ["UZ"].indexOf(gt().location.country_code ?? "") > -1
        },
        isGamesAr() {
            return !1
        },
        isGamesFr() {
            return !1
        },
        isGamesEn() {
            return ["NG", "GH", "SL", "LR", "GM", "KE", "UG", "TZ", "RW", "SS", "SD", "ZA", "SZ", "BW"].indexOf(gt().location.country_code ?? "") > -1
        },
        isCryptoCom() {
            return ["AG", "AR", "AU", "AT", "BS", "BH", "BB", "BE", "BM", "BR", "VG", "BG", "CA", "BQ", "KY", "CL", "CO", "CR", "HR", "CY", "CZ", "CW", "DK", "DO", "EG", "SV", "EE", "FO", "FI", "FJ", "GF", "PF", "FR", "DE", "GI", "GR", "GL", "GP", "GU", "GT", "GG", "HN", "HK", "HU", "IS", "IN", "ID", "IE", "IM", "IL", "IT", "JP", "JE", "JO", "KE", "KW", "LV", "LI", "LT", "LU", "MK", "MY", "MT", "MQ", "MX", "MC", "NL", "AN", "NC", "NZ", "NG", "MP", "NO", "OM", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RE", "RO", "KN", "LC", "MF", "SM", "SA", "RS", "SC", "SG", "SX", "SK", "SI", "ZA", "ES", "LK", "PM", "SE", "CH", "TW", "TH", "TT", "TN", "TR", "TC", "UA", "AE", "US", "VI", "UY", "VA", "VN"].indexOf(gt().location.country_code ?? "") > -1
        }
    }
})
  , nl = hn("morse", {
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
            (e = this.dailyCipher) != null && e.cipher && (this.dailyCipher.cipher.startsWith(this.morse_decoded) ? Jt().useHapticFeedback("heavy") : this.resetMorse(),
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
            return e.split("/").map(t=>HL[t.trim()] || "").join("")
        },
        convertTapsToMorse() {
            return this.taps.map(e=>e.type).join("")
        },
        playSound(e) {
            const t = new Audio("/sound/dot.wav")
              , n = new Audio("/sound/dash.wav");
            let r;
            e === Vr.Dot ? r = t.cloneNode() : e === Vr.Dash && (r = n.cloneNode()),
            r == null || r.play()
        },
        async postClaimDailyCipher() {
            return await je.post("/clicker/claim-daily-cipher", {
                body: {
                    cipher: this.morse_decoded
                }
            }).then(e=>(Jt().useHapticFeedback("heavy"),
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
                    type: Vr.SymbolSeparator,
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
            this.last_input = e === Vr.Dot ? "●" : "—"
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
            this.dailyCipherInterval = Ct(()=>{
                var e;
                if ((e = this.dailyCipher) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ve().getNowTimestamp();
                    this.timestamp_daily_cipher && n - this.timestamp_daily_cipher > 1 && (t = n - this.timestamp_daily_cipher),
                    this.dailyCipher.remainSeconds -= t,
                    this.dailyCipher.remainSeconds <= 0 && (this.dailyCipher.remainSeconds = 0,
                    this.resetDailyCipherInterval(),
                    setTimeout(async()=>{
                        await Rt().postConfig().then(()=>{
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
                const n = Date.now() - this.tapStartTime < this.tapThreshold ? Vr.Dot : Vr.Dash;
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
  , rl = hn({
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
            return await je.post("/clicker/start-keys-minigame", {}).then(e=>(Ot().setUserResponseData(e),
            e != null && e.dailyKeysMiniGame ? (e.dailyKeysMiniGame.remainSecondsToGuess += .1,
            this.setDailyKeysMiniGame(e.dailyKeysMiniGame)) : this.dailyKeysMiniGame = null,
            e))
        },
        async postClaimDailyKeysMiniGame() {
            return await je.post("/clicker/claim-daily-keys-minigame", {
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
            this.matchMiniGameInterval = Ct(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToGuess) {
                    let t = 1;
                    const n = Ve().getNowTimestamp();
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
            this.replayMiniGameInterval = Ct(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSecondsToNextAttempt) {
                    let t = 1;
                    const n = Ve().getNowTimestamp();
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
            this.dailyMiniGameInterval = Ct(()=>{
                var e;
                if ((e = this.dailyKeysMiniGame) != null && e.remainSeconds) {
                    let t = 1;
                    const n = Ve().getNowTimestamp();
                    this.timestamp_daily_minigame && n - this.timestamp_daily_minigame > 1 && (t = n - this.timestamp_daily_minigame),
                    this.dailyKeysMiniGame.remainSeconds -= t,
                    this.timestamp_daily_minigame = n,
                    this.dailyKeysMiniGame.remainSeconds <= 0 && (this.dailyKeysMiniGame.remainSeconds = 0,
                    this.resetDailyMiniGameInterval(),
                    this.show && (this.hideGamePage(),
                    vn.promise({}).reject({
                        title: re().$i18n.t("minigame.lose_title"),
                        duration: 4e3
                    }),
                    Ve().trackEvent("minigame_puzzle_loose_period"),
                    Jt().useHapticFeedback("heavy")),
                    this.dailyKeysMiniGame = null,
                    setTimeout(async()=>{
                        await Rt().postConfig()
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
  , Rt = hn("config", {
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
            return await je.get(`/clicker/config/${this.version}`, {}).then(e=>{
                e.config && this.setStaticConfig(e.config)
            }
            )
        },
        async postConfig() {
            return await je.post("/clicker/config", {}).then(e=>(e != null && e.dailyCipher ? nl().setDailyCipher(e.dailyCipher) : (nl().dailyCipher = null,
            nl().resetMorse()),
            rl().resetMiniGame(),
            e != null && e.dailyKeysMiniGame ? rl().setDailyKeysMiniGame(e.dailyKeysMiniGame) : rl().dailyKeysMiniGame = null,
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
            this.updateTimestamp = Ve().getNowTimestamp()
        },
        startUpdateInterval() {
            this.resetUpdateInterval(),
            this.remainSecondsForUpdate && (this.updateInterval = Ct(()=>{
                let e = 1;
                const t = Ve().getNowTimestamp();
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
                await To().postUpgradesForBuy().then(()=>{
                    const {$event: e} = re();
                    e("buy-upgrade:success")
                }
                ).catch(()=>{}
                ),
                await ey().postListTasks().catch(()=>{}
                )
            }
            )
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
  , je = {
    get: xi("GET"),
    post: xi("POST"),
    patch: xi("PATCH"),
    put: xi("PUT"),
    delete: xi("DELETE")
};
function xi(e) {
    return async(t,n,r={})=>{
        const i = gt()
          , o = i.token
          , s = zn();
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
                vn.error({
                    title: re().$i18n.t("messages.network_error_title"),
                    message: re().$i18n.t("messages.network_error_description"),
                    duration: 2e3
                }),
                r.onRequestError(),
                r.onError()
            },
            async onResponse({request: l, response: u, options: c}) {
                s.public.appEnv !== "production" && console.log(`%c Response ${u.status} => `, "background: #16161a; color: #4CD964; line-height: 20px;", l);
                const f = u.headers.get("config-version")
                  , d = u.headers.get("server-time")
                  , m = u.headers.get("config-next-update");
                f && Rt().setVersion(f),
                d && Rt().setServerTime(d),
                m && Rt().setNextUpdateTime(m),
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
const ey = hn("earn", {
    state: ()=>({
        tasks: [],
        dailyRewardInterval: null,
        dailyRewardSeconds: 0,
        timestamp_daily_reward: 0
    }),
    actions: {
        async postListTasks() {
            return await je.post("/clicker/list-tasks", {}).then(e=>(e != null && e.tasks && this.setTasks(e.tasks),
            this.startDailyRewardInterval(),
            e)).catch(e=>{
                vn.error({
                    title: re().$i18n.t("messages.request_error"),
                    message: re().$i18n.t("messages.no_tasks")
                })
            }
            )
        },
        async postCheckTask(e) {
            return await je.post("/clicker/check-task", {
                body: {
                    taskId: e
                }
            }).then(t=>{
                Jt().useHapticFeedback("heavy"),
                Ot().setUserResponseData(t),
                setTimeout(()=>{
                    To().postUpgradesForBuy()
                }
                , 1e3);
                const n = t.task.rewardCoins ?? 0;
                return Ve().trackEvent(`earn_${Ve().camelToSnake(e)}`, {
                    value: n
                }),
                t
            }
            )
        },
        setTasks(e=[]) {
            var o, s;
            const t = re()
              , n = new Map(e.map(a=>[a.id, a]))
              , r = (o = Rt().earnTasks) == null ? void 0 : o.map(a=>{
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
                a = a.filter(c=>c.availableOnCountry && c.availableOnCountry.length > 0 && gt().location.country_code ? c.availableOnCountry.includes(gt().location.country_code ?? "") : !0);
                const l = localStorage.getItem(tt.EARN_TASKS)
                  , u = e.map(c=>c.id === uc.STREAK_DAYS ? {
                    ...c,
                    remainSeconds: 0
                } : c);
                l ? this.hashcode(u) !== Number(l) && (Jt().taskNotification = !0) : Jt().taskNotification = !0,
                this.tasks = a,
                localStorage.setItem(tt.EARN_TASKS, JSON.stringify(this.hashcode(u))),
                this.dailyRewardSeconds = ((s = this.tasks.find(c=>c.id === uc.STREAK_DAYS)) == null ? void 0 : s.remainSeconds) ?? Math.round(Ve().secondsUntilMidnightUTC()),
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
            this.dailyRewardInterval = Ct(()=>{
                if (this.dailyRewardSeconds) {
                    let e = 1;
                    const t = Ve().getNowTimestamp();
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
class Ki extends Error {
}
Ki.prototype.name = "InvalidTokenError";
function rO(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function iO(e) {
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
        return rO(t)
    } catch {
        return atob(t)
    }
}
function hh(e, t) {
    if (typeof e != "string")
        throw new Ki("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new Ki(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = iO(r)
    } catch (o) {
        throw new Ki(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new Ki(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
const gt = hn("auth", {
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
        location: {},
        has_geo: !1
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(tt.AUTH_TOKEN)
        },
        isExpiredToken(e) {
            if (e && hh(e)) {
                const t = hh(e).exp;
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
            localStorage.removeItem(tt.PLAYGROUND),
            localStorage.removeItem("ton-connect-storage_bridge-connection"),
            localStorage.removeItem("ton-connect-ui_last-selected-wallet-info"),
            ey().tasks.forEach(t=>{
                localStorage.removeItem(t.id)
            }
            ),
            e && (Uo(jo.GAME_INDEX),
            setTimeout(()=>{
                window.location.reload()
            }
            , 500))
        },
        async postGetMe() {
            return await je.post("/auth/account-info", {}).then(e=>{
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
            return await je.post("/auth/auth-by-telegram-webapp", {
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
            return await je.post("/auth/telegram-webapp-conflict", {
                body: e
            }).then(t=>t)
        },
        async postAddReferral(e) {
            return await je.post("/clicker/add-referral", {
                body: {
                    authUserId: String(e)
                }
            }).then(t=>t)
        },
        async postAddPartnerReferrer(e) {
            return await je.post("/clicker/add-partner-referrer", {
                body: {
                    partnerReferrer: String(e)
                }
            }).then(t=>t)
        },
        async postAvatarGet() {
            return await je.post("/auth/get-avatar", {
                body: {}
            }).then(e=>e)
        },
        async postDeleteMe() {
            return await je.post("/clicker/delete-me", {
                body: {}
            }).then(e=>e)
        },
        async getLocationData() {
            return await je.get("/ip", {}).then(e=>{
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
  , oO = async(e,t)=>{
    var i, o;
    const n = re();
    gt(n.$pinia);
    const r = Ot(n.$pinia);
    e && !((o = (i = e.name) == null ? void 0 : i.toString()) != null && o.includes("index")) && !r.exchangeId && Uo(jo.GAME_SETTINGS_EXCHANGE)
}
  , sO = async e=>{
    let t, n;
    const r = ([t,n] = Pn(()=>jm(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , aO = [tS, oO, sO]
  , $i = {};
function lO(e, t, n) {
    const {pathname: r, search: i, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const u = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let c = o.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        Df(c, "")
    }
    const a = Df(r, e)
      , l = !n || Nl(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : i) + o
}
const cO = Bt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var _, S;
        let t, n, r = zn().app.baseURL;
        qt.hashMode && !r.includes("#") && (r += "#");
        const i = ((_ = qt.history) == null ? void 0 : _.call(qt, r)) ?? (qt.hashMode ? kk(r) : Zm(r))
          , o = ((S = qt.routes) == null ? void 0 : S.call(qt, md)) ?? md;
        let s;
        const a = lO(r, window.location, e.payload.path)
          , l = Wk({
            ...qt,
            scrollBehavior: (g,E,p)=>{
                if (E === pn) {
                    s = p;
                    return
                }
                if (qt.scrollBehavior) {
                    if (l.options.scrollBehavior = qt.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const y = l.beforeEach(()=>{
                            y(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return qt.scrollBehavior(g, pn, s || p)
                }
            }
            ,
            history: i,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const u = En(l.currentRoute.value);
        l.afterEach((g,E)=>{
            u.value = E
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: ()=>u.value
        });
        const c = En(l.resolve(a))
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
        e._route = Ri(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = ca();
        try {
            [t,n] = Pn(()=>l.isReady()),
            await t,
            n()
        } catch (g) {
            [t,n] = Pn(()=>e.runWithContext(()=>ai(g))),
            await t,
            n()
        }
        const b = e.payload.state._layout;
        return l.beforeEach(async(g,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            g.meta = At(g.meta),
            e.isHydrating && b && !Gr(g.meta.layout) && (g.meta.layout = b),
            e._processingMiddleware = !0;
            {
                const y = new Set([...aO, ...e._middleware.global]);
                for (const T of g.matched) {
                    const w = T.meta.middleware;
                    if (w)
                        for (const L of hu(w))
                            y.add(L)
                }
                for (const T of y) {
                    const w = typeof T == "string" ? e._middleware.named[T] || await ((p = $i[T]) == null ? void 0 : p.call($i).then(C=>C.default || C)) : T;
                    if (!w)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const L = await e.runWithContext(()=>w(g, E));
                    if (!e.payload.serverRendered && e.isHydrating && (L === !1 || L instanceof Error)) {
                        const C = L || Hl({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>ai(C)),
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
            !e.isHydrating && m.value && await e.runWithContext(ME),
            p && await e.callHook("page:loading:end"),
            g.matched.length === 0 && await e.runWithContext(()=>ai(Hl({
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
                l.options.scrollBehavior = qt.scrollBehavior
            } catch (g) {
                await e.runWithContext(()=>ai(g))
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
  , mc = globalThis.requestIdleCallback || (e=>{
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
  , uO = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , Cu = e=>{
    const t = re();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        mc(e)
    }
    ) : mc(e)
}
  , fO = Bt({
    name: "nuxt:payload",
    setup(e) {
        Xt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await Qf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        Cu(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                Fo(n).protocol || await Qf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(fa, 1e3)
        }
        )
    }
})
  , dO = Bt(e=>{
    let t;
    async function n() {
        const r = await fa();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const i = await $fetch(ou("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && e.hooks.callHook("app:manifest:update", i)
    }
    Cu(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function ty(e, t=Xt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const i = t._preloadPromises = t._preloadPromises || [];
    if (i.length > 4)
        return Promise.all(i).then(()=>ty(e, t));
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
function hO(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = go(sessionStorage.getItem("nuxt:reload") || "{}")
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
const pO = (...e)=>e.find(t=>t !== void 0);
function ny(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, i) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return ph(r, e.trailingSlash);
        const o = "path"in r && r.path !== void 0 ? r.path : i(r).path
          , s = {
            ...r,
            path: ph(o, e.trailingSlash)
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
            const o = Xt()
              , s = zn()
              , a = fe(()=>{
                const b = r.to || r.href || "";
                return n(b, o.resolve)
            }
            )
              , l = fe(()=>typeof a.value == "string" && Un(a.value, {
                acceptRelative: !0
            }))
              , u = fe(()=>r.target && r.target !== "_self")
              , c = fe(()=>r.external || u.value ? !0 : typeof a.value == "object" ? !1 : a.value === "" || l.value)
              , f = ce(!1)
              , d = ce(null)
              , m = b=>{
                var _;
                d.value = r.custom ? (_ = b == null ? void 0 : b.$el) == null ? void 0 : _.nextElementSibling : b == null ? void 0 : b.$el
            }
            ;
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !gO()) {
                const _ = re();
                let S, g = null;
                Ft(()=>{
                    const E = mO();
                    Cu(()=>{
                        S = mc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (g = E.observe(d.value, async()=>{
                                g == null || g(),
                                g = null;
                                const y = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                                await Promise.all([_.hooks.callHook("link:prefetch", y).catch(()=>{}
                                ), !c.value && ty(a.value, o).catch(()=>{}
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
                Sn(()=>{
                    S && uO(S),
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
                    dt(Wr("RouterLink"), p, i.default)
                }
                const b = typeof a.value == "object" ? ((g = o.resolve(a.value)) == null ? void 0 : g.href) ?? null : a.value && !r.external && !l.value ? n(Pi(s.app.baseURL, a.value), o.resolve) : a.value || null
                  , _ = r.target || null
                  , S = pO(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || u.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!i.default)
                        return null;
                    const p = ()=>Uo(b, {
                        replace: r.replace,
                        external: r.external
                    });
                    return i.default({
                        href: b,
                        navigate: p,
                        get route() {
                            if (!b)
                                return;
                            const y = Fo(b);
                            return {
                                path: y.pathname,
                                fullPath: y.pathname,
                                get query() {
                                    return iu(y.search)
                                },
                                hash: y.hash,
                                params: {},
                                name: void 0,
                                matched: [],
                                redirectedFrom: void 0,
                                meta: {},
                                href: b
                            }
                        },
                        rel: S,
                        target: _,
                        isExternal: c.value,
                        isActive: !1,
                        isExactActive: !1
                    })
                }
                return dt("a", {
                    ref: d,
                    href: b,
                    rel: S,
                    target: _
                }, (E = i.default) == null ? void 0 : E.call(i))
            }
        }
    })
}
const tD = ny(FT);
function ph(e, t) {
    const n = t === "append" ? mo : Vo;
    return Un(e) && !e.startsWith("http") ? e : n(e, !0)
}
function mO() {
    const e = re();
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
function gO() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const yO = Bt(e=>{
    const t = _L();
    return e.vueApp.use(t),
    Ho(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , vO = Bt({
    name: "nuxt:global-components"
})
  , pr = {
    default: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/default.9Z5k6PdL.js"), __vite__mapDeps([34, 15, 6, 11, 21, 4, 30, 5, 9]), import.meta.url).then(e=>e.default || e),
    main: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/main.DlMiNE1_.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , bO = Bt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Xt();
        e.hooks.hook("app:mounted", ()=>{
            t.beforeEach(async n=>{
                var i;
                const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
                r && typeof pr[r] == "function" && await pr[r]()
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
            let o = hu(r.meta.middleware);
            o = o.filter(s=>typeof s == "string");
            for (const s of o)
                typeof $i[s] == "function" && $i[s]();
            i && typeof pr[i] == "function" && pr[i]()
        }
        )
    }
});
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Di(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function nD(e) {
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
var ry = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
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
          , b = "date"
          , _ = "Invalid Date"
          , S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , E = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(W) {
                var Y = ["th", "st", "nd", "rd"]
                  , V = W % 100;
                return "[" + W + (Y[(V - 20) % 10] || Y[V] || Y[0]) + "]"
            }
        }
          , p = function(W, Y, V) {
            var q = String(W);
            return !q || q.length >= Y ? W : "" + Array(Y + 1 - q.length).join(V) + W
        }
          , y = {
            s: p,
            z: function(W) {
                var Y = -W.utcOffset()
                  , V = Math.abs(Y)
                  , q = Math.floor(V / 60)
                  , U = V % 60;
                return (Y <= 0 ? "+" : "-") + p(q, 2, "0") + ":" + p(U, 2, "0")
            },
            m: function W(Y, V) {
                if (Y.date() < V.date())
                    return -W(V, Y);
                var q = 12 * (V.year() - Y.year()) + (V.month() - Y.month())
                  , U = Y.clone().add(q, f)
                  , le = V - U < 0
                  , K = Y.clone().add(q + (le ? -1 : 1), f);
                return +(-(q + (V - U) / (le ? U - K : K - U)) || 0)
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
                    D: b,
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
            return W instanceof B || !(!W || !W[L])
        }
          , O = function W(Y, V, q) {
            var U;
            if (!Y)
                return T;
            if (typeof Y == "string") {
                var le = Y.toLowerCase();
                w[le] && (U = le),
                V && (w[le] = V,
                U = le);
                var K = Y.split("-");
                if (!U && K.length > 1)
                    return W(K[0])
            } else {
                var ue = Y.name;
                w[ue] = Y,
                U = ue
            }
            return !q && U && (T = U),
            U || !q && T
        }
          , N = function(W, Y) {
            if (C(W))
                return W.clone();
            var V = typeof Y == "object" ? Y : {};
            return V.date = W,
            V.args = arguments,
            new B(V)
        }
          , H = y;
        H.l = O,
        H.i = C,
        H.w = function(W, Y) {
            return N(W, {
                locale: Y.$L,
                utc: Y.$u,
                x: Y.$x,
                $offset: Y.$offset
            })
        }
        ;
        var B = function() {
            function W(V) {
                this.$L = O(V.locale, null, !0),
                this.parse(V),
                this.$x = this.$x || V.x || {},
                this[L] = !0
            }
            var Y = W.prototype;
            return Y.parse = function(V) {
                this.$d = function(q) {
                    var U = q.date
                      , le = q.utc;
                    if (U === null)
                        return new Date(NaN);
                    if (H.u(U))
                        return new Date;
                    if (U instanceof Date)
                        return new Date(U);
                    if (typeof U == "string" && !/Z$/i.test(U)) {
                        var K = U.match(S);
                        if (K) {
                            var ue = K[2] - 1 || 0
                              , be = (K[7] || "0").substring(0, 3);
                            return le ? new Date(Date.UTC(K[1], ue, K[3] || 1, K[4] || 0, K[5] || 0, K[6] || 0, be)) : new Date(K[1],ue,K[3] || 1,K[4] || 0,K[5] || 0,K[6] || 0,be)
                        }
                    }
                    return new Date(U)
                }(V),
                this.init()
            }
            ,
            Y.init = function() {
                var V = this.$d;
                this.$y = V.getFullYear(),
                this.$M = V.getMonth(),
                this.$D = V.getDate(),
                this.$W = V.getDay(),
                this.$H = V.getHours(),
                this.$m = V.getMinutes(),
                this.$s = V.getSeconds(),
                this.$ms = V.getMilliseconds()
            }
            ,
            Y.$utils = function() {
                return H
            }
            ,
            Y.isValid = function() {
                return this.$d.toString() !== _
            }
            ,
            Y.isSame = function(V, q) {
                var U = N(V);
                return this.startOf(q) <= U && U <= this.endOf(q)
            }
            ,
            Y.isAfter = function(V, q) {
                return N(V) < this.startOf(q)
            }
            ,
            Y.isBefore = function(V, q) {
                return this.endOf(q) < N(V)
            }
            ,
            Y.$g = function(V, q, U) {
                return H.u(V) ? this[q] : this.set(U, V)
            }
            ,
            Y.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            Y.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            Y.startOf = function(V, q) {
                var U = this
                  , le = !!H.u(q) || q
                  , K = H.p(V)
                  , ue = function(X, ee) {
                    var ve = H.w(U.$u ? Date.UTC(U.$y, ee, X) : new Date(U.$y,ee,X), U);
                    return le ? ve : ve.endOf(u)
                }
                  , be = function(X, ee) {
                    return H.w(U.toDate()[X].apply(U.toDate("s"), (le ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), U)
                }
                  , We = this.$W
                  , Xe = this.$M
                  , ut = this.$D
                  , nt = "set" + (this.$u ? "UTC" : "");
                switch (K) {
                case m:
                    return le ? ue(1, 0) : ue(31, 11);
                case f:
                    return le ? ue(1, Xe) : ue(0, Xe + 1);
                case c:
                    var j = this.$locale().weekStart || 0
                      , ne = (We < j ? We + 7 : We) - j;
                    return ue(le ? ut - ne : ut + (6 - ne), Xe);
                case u:
                case b:
                    return be(nt + "Hours", 0);
                case l:
                    return be(nt + "Minutes", 1);
                case a:
                    return be(nt + "Seconds", 2);
                case s:
                    return be(nt + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            Y.endOf = function(V) {
                return this.startOf(V, !1)
            }
            ,
            Y.$set = function(V, q) {
                var U, le = H.p(V), K = "set" + (this.$u ? "UTC" : ""), ue = (U = {},
                U[u] = K + "Date",
                U[b] = K + "Date",
                U[f] = K + "Month",
                U[m] = K + "FullYear",
                U[l] = K + "Hours",
                U[a] = K + "Minutes",
                U[s] = K + "Seconds",
                U[o] = K + "Milliseconds",
                U)[le], be = le === u ? this.$D + (q - this.$W) : q;
                if (le === f || le === m) {
                    var We = this.clone().set(b, 1);
                    We.$d[ue](be),
                    We.init(),
                    this.$d = We.set(b, Math.min(this.$D, We.daysInMonth())).$d
                } else
                    ue && this.$d[ue](be);
                return this.init(),
                this
            }
            ,
            Y.set = function(V, q) {
                return this.clone().$set(V, q)
            }
            ,
            Y.get = function(V) {
                return this[H.p(V)]()
            }
            ,
            Y.add = function(V, q) {
                var U, le = this;
                V = Number(V);
                var K = H.p(q)
                  , ue = function(Xe) {
                    var ut = N(le);
                    return H.w(ut.date(ut.date() + Math.round(Xe * V)), le)
                };
                if (K === f)
                    return this.set(f, this.$M + V);
                if (K === m)
                    return this.set(m, this.$y + V);
                if (K === u)
                    return ue(1);
                if (K === c)
                    return ue(7);
                var be = (U = {},
                U[a] = r,
                U[l] = i,
                U[s] = n,
                U)[K] || 1
                  , We = this.$d.getTime() + V * be;
                return H.w(We, this)
            }
            ,
            Y.subtract = function(V, q) {
                return this.add(-1 * V, q)
            }
            ,
            Y.format = function(V) {
                var q = this
                  , U = this.$locale();
                if (!this.isValid())
                    return U.invalidDate || _;
                var le = V || "YYYY-MM-DDTHH:mm:ssZ"
                  , K = H.z(this)
                  , ue = this.$H
                  , be = this.$m
                  , We = this.$M
                  , Xe = U.weekdays
                  , ut = U.months
                  , nt = U.meridiem
                  , j = function(ee, ve, xe, h) {
                    return ee && (ee[ve] || ee(q, le)) || xe[ve].slice(0, h)
                }
                  , ne = function(ee) {
                    return H.s(ue % 12 || 12, ee, "0")
                }
                  , X = nt || function(ee, ve, xe) {
                    var h = ee < 12 ? "AM" : "PM";
                    return xe ? h.toLowerCase() : h
                }
                ;
                return le.replace(g, function(ee, ve) {
                    return ve || function(xe) {
                        switch (xe) {
                        case "YY":
                            return String(q.$y).slice(-2);
                        case "YYYY":
                            return H.s(q.$y, 4, "0");
                        case "M":
                            return We + 1;
                        case "MM":
                            return H.s(We + 1, 2, "0");
                        case "MMM":
                            return j(U.monthsShort, We, ut, 3);
                        case "MMMM":
                            return j(ut, We);
                        case "D":
                            return q.$D;
                        case "DD":
                            return H.s(q.$D, 2, "0");
                        case "d":
                            return String(q.$W);
                        case "dd":
                            return j(U.weekdaysMin, q.$W, Xe, 2);
                        case "ddd":
                            return j(U.weekdaysShort, q.$W, Xe, 3);
                        case "dddd":
                            return Xe[q.$W];
                        case "H":
                            return String(ue);
                        case "HH":
                            return H.s(ue, 2, "0");
                        case "h":
                            return ne(1);
                        case "hh":
                            return ne(2);
                        case "a":
                            return X(ue, be, !0);
                        case "A":
                            return X(ue, be, !1);
                        case "m":
                            return String(be);
                        case "mm":
                            return H.s(be, 2, "0");
                        case "s":
                            return String(q.$s);
                        case "ss":
                            return H.s(q.$s, 2, "0");
                        case "SSS":
                            return H.s(q.$ms, 3, "0");
                        case "Z":
                            return K
                        }
                        return null
                    }(ee) || K.replace(":", "")
                })
            }
            ,
            Y.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            Y.diff = function(V, q, U) {
                var le, K = this, ue = H.p(q), be = N(V), We = (be.utcOffset() - this.utcOffset()) * r, Xe = this - be, ut = function() {
                    return H.m(K, be)
                };
                switch (ue) {
                case m:
                    le = ut() / 12;
                    break;
                case f:
                    le = ut();
                    break;
                case d:
                    le = ut() / 3;
                    break;
                case c:
                    le = (Xe - We) / 6048e5;
                    break;
                case u:
                    le = (Xe - We) / 864e5;
                    break;
                case l:
                    le = Xe / i;
                    break;
                case a:
                    le = Xe / r;
                    break;
                case s:
                    le = Xe / n;
                    break;
                default:
                    le = Xe
                }
                return U ? le : H.a(le)
            }
            ,
            Y.daysInMonth = function() {
                return this.endOf(f).$D
            }
            ,
            Y.$locale = function() {
                return w[this.$L]
            }
            ,
            Y.locale = function(V, q) {
                if (!V)
                    return this.$L;
                var U = this.clone()
                  , le = O(V, q, !0);
                return le && (U.$L = le),
                U
            }
            ,
            Y.clone = function() {
                return H.w(this.$d, this)
            }
            ,
            Y.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            Y.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            Y.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            Y.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            W
        }()
          , $ = B.prototype;
        return N.prototype = $,
        [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", u], ["$M", f], ["$y", m], ["$D", b]].forEach(function(W) {
            $[W[1]] = function(Y) {
                return this.$g(Y, W[0], W[1])
            }
        }),
        N.extend = function(W, Y) {
            return W.$i || (W(Y, B, N),
            W.$i = !0),
            N
        }
        ,
        N.locale = O,
        N.isDayjs = C,
        N.unix = function(W) {
            return N(1e3 * W)
        }
        ,
        N.en = w[T],
        N.Ls = w,
        N.p = {},
        N
    })
}
)(ry);
var Zt = ry.exports;
const xn = Di(Zt);
var iy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
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
)(iy);
var _O = iy.exports;
const EO = Di(_O);
var TO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(TO);
var kO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
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
)(kO);
var SO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(SO);
var wO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(wO);
var AO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(AO);
var LO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(LO);
var CO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(CO);
var OO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
        function r(b) {
            return b && typeof b == "object" && "default"in b ? b : {
                default: b
            }
        }
        var i = r(n)
          , o = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
          , s = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
          , a = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_")
          , l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
          , u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function c(b, _, S) {
            var g, E;
            return S === "m" ? _ ? "минута" : "минуту" : b + " " + (g = +b,
            E = {
                mm: _ ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[S].split("_"),
            g % 10 == 1 && g % 100 != 11 ? E[0] : g % 10 >= 2 && g % 10 <= 4 && (g % 100 < 10 || g % 100 >= 20) ? E[1] : E[2])
        }
        var f = function(b, _) {
            return u.test(_) ? o[b.month()] : s[b.month()]
        };
        f.s = s,
        f.f = o;
        var d = function(b, _) {
            return u.test(_) ? a[b.month()] : l[b.month()]
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
            ordinal: function(b) {
                return b
            },
            meridiem: function(b) {
                return b < 4 ? "ночи" : b < 12 ? "утра" : b < 17 ? "дня" : "вечера"
            }
        };
        return i.default.locale(m, null, !0),
        m
    })
}
)(OO);
var RO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(RO);
var IO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(IO);
var PO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(PO);
var MO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(MO);
var DO = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(Zt)
    }
    )(_t, function(n) {
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
)(DO);
var oy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
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
                for (var b, _, S, g = f.$locale().relativeTime || s, E = n.thresholds || [{
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
                    T.d && (b = d ? i(u).diff(f, T.d, !0) : f.diff(u, T.d, !0));
                    var w = (n.rounding || Math.round)(Math.abs(b));
                    if (S = b > 0,
                    w <= T.r || !T.r) {
                        w <= 1 && y > 0 && (T = E[y - 1]);
                        var L = g[T.l];
                        m && (w = m("" + w)),
                        _ = typeof L == "string" ? L.replace("%d", w) : L(w, c, T.l, S);
                        break
                    }
                }
                if (c)
                    return _;
                var C = S ? g.future : g.past;
                return typeof C == "function" ? C(_) : C.replace("%s", _)
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
)(oy);
var NO = oy.exports;
const VO = Di(NO);
var sy = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        var n = "minute"
          , r = /[+-]\d\d(?::?\d\d)?/g
          , i = /([+-]|\d\d)/g;
        return function(o, s, a) {
            var l = s.prototype;
            a.utc = function(_) {
                var S = {
                    date: _,
                    utc: !0,
                    args: arguments
                };
                return new s(S)
            }
            ,
            l.utc = function(_) {
                var S = a(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return _ ? S.add(this.utcOffset(), n) : S
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
            l.parse = function(_) {
                _.utc && (this.$u = !0),
                this.$utils().u(_.$offset) || (this.$offset = _.$offset),
                u.call(this, _)
            }
            ;
            var c = l.init;
            l.init = function() {
                if (this.$u) {
                    var _ = this.$d;
                    this.$y = _.getUTCFullYear(),
                    this.$M = _.getUTCMonth(),
                    this.$D = _.getUTCDate(),
                    this.$W = _.getUTCDay(),
                    this.$H = _.getUTCHours(),
                    this.$m = _.getUTCMinutes(),
                    this.$s = _.getUTCSeconds(),
                    this.$ms = _.getUTCMilliseconds()
                } else
                    c.call(this)
            }
            ;
            var f = l.utcOffset;
            l.utcOffset = function(_, S) {
                var g = this.$utils().u;
                if (g(_))
                    return this.$u ? 0 : g(this.$offset) ? f.call(this) : this.$offset;
                if (typeof _ == "string" && (_ = function(T) {
                    T === void 0 && (T = "");
                    var w = T.match(r);
                    if (!w)
                        return null;
                    var L = ("" + w[0]).match(i) || ["-", 0, 0]
                      , C = L[0]
                      , O = 60 * +L[1] + +L[2];
                    return O === 0 ? 0 : C === "+" ? O : -O
                }(_),
                _ === null))
                    return this;
                var E = Math.abs(_) <= 16 ? 60 * _ : _
                  , p = this;
                if (S)
                    return p.$offset = E,
                    p.$u = _ === 0,
                    p;
                if (_ !== 0) {
                    var y = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (p = this.local().add(E + y, n)).$offset = E,
                    p.$x.$localOffset = y
                } else
                    p = this.utc();
                return p
            }
            ;
            var d = l.format;
            l.format = function(_) {
                var S = _ || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return d.call(this, S)
            }
            ,
            l.valueOf = function() {
                var _ = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * _
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
            l.toDate = function(_) {
                return _ === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this)
            }
            ;
            var b = l.diff;
            l.diff = function(_, S, g) {
                if (_ && this.$u === _.$u)
                    return b.call(this, _, S, g);
                var E = this.local()
                  , p = a(_).local();
                return b.call(E, p, S, g)
            }
        }
    })
}
)(sy);
var FO = sy.exports;
const BO = Di(FO);
var ay = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
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
            var a, l = function(d, m, b) {
                b === void 0 && (b = {});
                var _ = new Date(d)
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
                }(m, b);
                return S.formatToParts(_)
            }, u = function(d, m) {
                for (var b = l(d, m), _ = [], S = 0; S < b.length; S += 1) {
                    var g = b[S]
                      , E = g.type
                      , p = g.value
                      , y = n[E];
                    y >= 0 && (_[y] = parseInt(p, 10))
                }
                var T = _[3]
                  , w = T === 24 ? 0 : T
                  , L = _[0] + "-" + _[1] + "-" + _[2] + " " + w + ":" + _[4] + ":" + _[5] + ":000"
                  , C = +d;
                return (s.utc(L).valueOf() - (C -= C % 1e3)) / 6e4
            }, c = o.prototype;
            c.tz = function(d, m) {
                d === void 0 && (d = a);
                var b = this.utcOffset()
                  , _ = this.toDate()
                  , S = _.toLocaleString("en-US", {
                    timeZone: d
                })
                  , g = Math.round((_ - new Date(S)) / 1e3 / 60)
                  , E = s(S, {
                    locale: this.$L
                }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(_.getTimezoneOffset() / 15) - g, !0);
                if (m) {
                    var p = E.utcOffset();
                    E = E.add(b - p, "minute")
                }
                return E.$x.$timezone = d,
                E
            }
            ,
            c.offsetName = function(d) {
                var m = this.$x.$timezone || s.tz.guess()
                  , b = l(this.valueOf(), m, {
                    timeZoneName: d
                }).find(function(_) {
                    return _.type.toLowerCase() === "timezonename"
                });
                return b && b.value
            }
            ;
            var f = c.startOf;
            c.startOf = function(d, m) {
                if (!this.$x || !this.$x.$timezone)
                    return f.call(this, d, m);
                var b = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                    locale: this.$L
                });
                return f.call(b, d, m).tz(this.$x.$timezone, !0)
            }
            ,
            s.tz = function(d, m, b) {
                var _ = b && m
                  , S = b || m || a
                  , g = u(+s(), S);
                if (typeof d != "string")
                    return s(d).tz(S);
                var E = function(w, L, C) {
                    var O = w - 60 * L * 1e3
                      , N = u(O, C);
                    if (L === N)
                        return [O, L];
                    var H = u(O -= 60 * (N - L) * 1e3, C);
                    return N === H ? [O, N] : [w - 60 * Math.min(N, H) * 1e3, Math.max(N, H)]
                }(s.utc(d, _).valueOf(), g, S)
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
)(ay);
var UO = ay.exports;
const xO = Di(UO);
var ly = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
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
                    return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, b, _) {
                        var S = _ && _.toUpperCase();
                        return b || d[_] || n[_] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, E, p) {
                            return E || p.slice(1)
                        })
                    })
                }(l, u === void 0 ? {} : u);
                return a.call(this, c)
            }
        }
    })
}
)(ly);
var HO = ly.exports;
const jO = Di(HO);
xn.extend(EO);
xn.extend(VO);
xn.extend(BO);
xn.extend(xO);
xn.extend(jO);
xn.tz.setDefault("Europe/Moscow");
xn.updateLocale("en");
xn.locale("en");
const KO = Bt(async e=>e.provide("dayjs", xn))
  , YO = ["top", "right", "bottom", "left"]
  , mh = ["start", "end"]
  , gh = YO.reduce((e,t)=>e.concat(t, t + "-" + mh[0], t + "-" + mh[1]), [])
  , ko = Math.min
  , Fr = Math.max
  , qO = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , GO = {
    start: "end",
    end: "start"
};
function gc(e, t, n) {
    return Fr(e, ko(t, n))
}
function ei(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Bn(e) {
    return e.split("-")[0]
}
function bn(e) {
    return e.split("-")[1]
}
function cy(e) {
    return e === "x" ? "y" : "x"
}
function Ou(e) {
    return e === "y" ? "height" : "width"
}
function Yo(e) {
    return ["top", "bottom"].includes(Bn(e)) ? "y" : "x"
}
function Ru(e) {
    return cy(Yo(e))
}
function uy(e, t, n) {
    n === void 0 && (n = !1);
    const r = bn(e)
      , i = Ru(e)
      , o = Ou(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = js(s)),
    [s, js(s)]
}
function WO(e) {
    const t = js(e);
    return [Hs(e), t, Hs(t)]
}
function Hs(e) {
    return e.replace(/start|end/g, t=>GO[t])
}
function JO(e, t, n) {
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
function zO(e, t, n, r) {
    const i = bn(e);
    let o = JO(Bn(e), n === "start", r);
    return i && (o = o.map(s=>s + "-" + i),
    t && (o = o.concat(o.map(Hs)))),
    o
}
function js(e) {
    return e.replace(/left|right|bottom|top/g, t=>qO[t])
}
function QO(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function fy(e) {
    return typeof e != "number" ? QO(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function eo(e) {
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
function yh(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = Yo(t)
      , s = Ru(t)
      , a = Ou(s)
      , l = Bn(t)
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
    switch (bn(t)) {
    case "start":
        m[s] -= d * (n && u ? -1 : 1);
        break;
    case "end":
        m[s] += d * (n && u ? -1 : 1);
        break
    }
    return m
}
const XO = async(e,t,n)=>{
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: f} = yh(u, r, l)
      , d = r
      , m = {}
      , b = 0;
    for (let _ = 0; _ < a.length; _++) {
        const {name: S, fn: g} = a[_]
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
            [S]: {
                ...m[S],
                ...y
            }
        },
        T && b <= 50 && (b++,
        typeof T == "object" && (T.placement && (d = T.placement),
        T.rects && (u = T.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : T.rects),
        {x: c, y: f} = yh(u, d, l)),
        _ = -1)
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
async function Ea(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = ei(t, e)
      , b = fy(m)
      , S = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = eo(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(S))) == null || n ? S : S.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
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
      , T = eo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: E,
        offsetParent: p,
        strategy: l
    }) : E);
    return {
        top: (g.top - T.top + b.top) / y.y,
        bottom: (T.bottom - g.bottom + b.bottom) / y.y,
        left: (g.left - T.left + b.left) / y.x,
        right: (T.right - g.right + b.right) / y.x
    }
}
const ZO = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = ei(e, t) || {};
        if (u == null)
            return {};
        const f = fy(c)
          , d = {
            x: n,
            y: r
        }
          , m = Ru(i)
          , b = Ou(m)
          , _ = await s.getDimensions(u)
          , S = m === "y"
          , g = S ? "top" : "left"
          , E = S ? "bottom" : "right"
          , p = S ? "clientHeight" : "clientWidth"
          , y = o.reference[b] + o.reference[m] - d[m] - o.floating[b]
          , T = d[m] - o.reference[m]
          , w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let L = w ? w[p] : 0;
        (!L || !await (s.isElement == null ? void 0 : s.isElement(w))) && (L = a.floating[p] || o.floating[b]);
        const C = y / 2 - T / 2
          , O = L / 2 - _[b] / 2 - 1
          , N = ko(f[g], O)
          , H = ko(f[E], O)
          , B = N
          , $ = L - _[b] - H
          , W = L / 2 - _[b] / 2 + C
          , Y = gc(B, W, $)
          , V = !l.arrow && bn(i) != null && W !== Y && o.reference[b] / 2 - (W < B ? N : H) - _[b] / 2 < 0
          , q = V ? W < B ? W - B : W - $ : 0;
        return {
            [m]: d[m] + q,
            data: {
                [m]: Y,
                centerOffset: W - Y - q,
                ...V && {
                    alignmentOffset: q
                }
            },
            reset: V
        }
    }
});
function $O(e, t, n) {
    return (e ? [...n.filter(i=>bn(i) === e), ...n.filter(i=>bn(i) !== e)] : n.filter(i=>Bn(i) === i)).filter(i=>e ? bn(i) === e || (t ? Hs(i) !== i : !1) : !0)
}
const e1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, i;
            const {rects: o, middlewareData: s, placement: a, platform: l, elements: u} = t
              , {crossAxis: c=!1, alignment: f, allowedPlacements: d=gh, autoAlignment: m=!0, ...b} = ei(e, t)
              , _ = f !== void 0 || d === gh ? $O(f || null, m, d) : d
              , S = await Ea(t, b)
              , g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = _[g];
            if (E == null)
                return {};
            const p = uy(E, o, await (l.isRTL == null ? void 0 : l.isRTL(u.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: _[0]
                    }
                };
            const y = [S[Bn(E)], S[p[0]], S[p[1]]]
              , T = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
                placement: E,
                overflows: y
            }]
              , w = _[g + 1];
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
            const L = T.map(N=>{
                const H = bn(N.placement);
                return [N.placement, H && c ? N.overflows.slice(0, 2).reduce((B,$)=>B + $, 0) : N.overflows[0], N.overflows]
            }
            ).sort((N,H)=>N[1] - H[1])
              , O = ((i = L.filter(N=>N[2].slice(0, bn(N[0]) ? 2 : 3).every(H=>H <= 0))[0]) == null ? void 0 : i[0]) || L[0][0];
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
  , t1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: _=!0, ...S} = ei(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const g = Bn(i)
              , E = Bn(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , y = d || (E || !_ ? [js(a)] : WO(a));
            !d && b !== "none" && y.push(...zO(a, _, b, p));
            const T = [a, ...y]
              , w = await Ea(t, S)
              , L = [];
            let C = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && L.push(w[g]),
            f) {
                const B = uy(i, s, p);
                L.push(w[B[0]], w[B[1]])
            }
            if (C = [...C, {
                placement: i,
                overflows: L
            }],
            !L.every(B=>B <= 0)) {
                var O, N;
                const B = (((O = o.flip) == null ? void 0 : O.index) || 0) + 1
                  , $ = T[B];
                if ($)
                    return {
                        data: {
                            index: B,
                            overflows: C
                        },
                        reset: {
                            placement: $
                        }
                    };
                let W = (N = C.filter(Y=>Y.overflows[0] <= 0).sort((Y,V)=>Y.overflows[1] - V.overflows[1])[0]) == null ? void 0 : N.placement;
                if (!W)
                    switch (m) {
                    case "bestFit":
                        {
                            var H;
                            const Y = (H = C.map(V=>[V.placement, V.overflows.filter(q=>q > 0).reduce((q,U)=>q + U, 0)]).sort((V,q)=>V[1] - q[1])[0]) == null ? void 0 : H[0];
                            Y && (W = Y);
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
async function n1(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = Bn(n)
      , a = bn(n)
      , l = Yo(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = o && l ? -1 : 1
      , f = ei(t, e);
    let {mainAxis: d, crossAxis: m, alignmentAxis: b} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...f
    };
    return a && typeof b == "number" && (m = a === "end" ? b * -1 : b),
    l ? {
        x: m * c,
        y: d * u
    } : {
        x: d * u,
        y: m * c
    }
}
const r1 = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await n1(t, e);
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
  , i1 = function(e) {
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
            }, ...l} = ei(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Ea(t, l)
              , f = Yo(Bn(i))
              , d = cy(f);
            let m = u[d]
              , b = u[f];
            if (o) {
                const S = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , E = m + c[S]
                  , p = m - c[g];
                m = gc(E, m, p)
            }
            if (s) {
                const S = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , E = b + c[S]
                  , p = b - c[g];
                b = gc(E, b, p)
            }
            const _ = a.fn({
                ...t,
                [d]: m,
                [f]: b
            });
            return {
                ..._,
                data: {
                    x: _.x - n,
                    y: _.y - r
                }
            }
        }
    }
}
  , o1 = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: i, elements: o} = t
              , {apply: s=()=>{}
            , ...a} = ei(e, t)
              , l = await Ea(t, a)
              , u = Bn(n)
              , c = bn(n)
              , f = Yo(n) === "y"
              , {width: d, height: m} = r.floating;
            let b, _;
            u === "top" || u === "bottom" ? (b = u,
            _ = c === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (_ = u,
            b = c === "end" ? "top" : "bottom");
            const S = m - l[b]
              , g = d - l[_]
              , E = !t.middlewareData.shift;
            let p = S
              , y = g;
            if (f) {
                const w = d - l.left - l.right;
                y = c || E ? ko(g, w) : w
            } else {
                const w = m - l.top - l.bottom;
                p = c || E ? ko(S, w) : w
            }
            if (E && !c) {
                const w = Fr(l.left, 0)
                  , L = Fr(l.right, 0)
                  , C = Fr(l.top, 0)
                  , O = Fr(l.bottom, 0);
                f ? y = d - 2 * (w !== 0 || L !== 0 ? w + L : Fr(l.left, l.right)) : p = m - 2 * (C !== 0 || O !== 0 ? C + O : Fr(l.top, l.bottom))
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
function ln(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Nn(e) {
    return ln(e).getComputedStyle(e)
}
const vh = Math.min
  , to = Math.max
  , Ks = Math.round;
function dy(e) {
    const t = Nn(e);
    let n = parseFloat(t.width)
      , r = parseFloat(t.height);
    const i = e.offsetWidth
      , o = e.offsetHeight
      , s = Ks(n) !== i || Ks(r) !== o;
    return s && (n = i,
    r = o),
    {
        width: n,
        height: r,
        fallback: s
    }
}
function kr(e) {
    return py(e) ? (e.nodeName || "").toLowerCase() : ""
}
let us;
function hy() {
    if (us)
        return us;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (us = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    us) : navigator.userAgent
}
function Vn(e) {
    return e instanceof ln(e).HTMLElement
}
function br(e) {
    return e instanceof ln(e).Element
}
function py(e) {
    return e instanceof ln(e).Node
}
function bh(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ln(e).ShadowRoot || e instanceof ShadowRoot
}
function Ta(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Nn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function s1(e) {
    return ["table", "td", "th"].includes(kr(e))
}
function yc(e) {
    const t = /firefox/i.test(hy())
      , n = Nn(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(i=>n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i=>{
        const o = n.contain;
        return o != null && o.includes(i)
    }
    )
}
function my() {
    return !/^((?!chrome|android).)*safari/i.test(hy())
}
function Iu(e) {
    return ["html", "body", "#document"].includes(kr(e))
}
function gy(e) {
    return br(e) ? e : e.contextElement
}
const yy = {
    x: 1,
    y: 1
};
function gi(e) {
    const t = gy(e);
    if (!Vn(t))
        return yy;
    const n = t.getBoundingClientRect()
      , {width: r, height: i, fallback: o} = dy(t);
    let s = (o ? Ks(n.width) : n.width) / r
      , a = (o ? Ks(n.height) : n.height) / i;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function So(e, t, n, r) {
    var i, o;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = gy(e);
    let l = yy;
    t && (r ? br(r) && (l = gi(r)) : l = gi(e));
    const u = a ? ln(a) : window
      , c = !my() && n;
    let f = (s.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x
      , d = (s.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , b = s.height / l.y;
    if (a) {
        const _ = ln(a)
          , S = r && br(r) ? ln(r) : r;
        let g = _.frameElement;
        for (; g && r && S !== _; ) {
            const E = gi(g)
              , p = g.getBoundingClientRect()
              , y = getComputedStyle(g);
            p.x += (g.clientLeft + parseFloat(y.paddingLeft)) * E.x,
            p.y += (g.clientTop + parseFloat(y.paddingTop)) * E.y,
            f *= E.x,
            d *= E.y,
            m *= E.x,
            b *= E.y,
            f += p.x,
            d += p.y,
            g = ln(g).frameElement
        }
    }
    return {
        width: m,
        height: b,
        top: d,
        right: f + m,
        bottom: d + b,
        left: f,
        x: f,
        y: d
    }
}
function _r(e) {
    return ((py(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function ka(e) {
    return br(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function vy(e) {
    return So(_r(e)).left + ka(e).scrollLeft
}
function wo(e) {
    if (kr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || bh(e) && e.host || _r(e);
    return bh(t) ? t.host : t
}
function by(e) {
    const t = wo(e);
    return Iu(t) ? t.ownerDocument.body : Vn(t) && Ta(t) ? t : by(t)
}
function Ys(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = by(e)
      , i = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = ln(r);
    return i ? t.concat(o, o.visualViewport || [], Ta(r) ? r : []) : t.concat(r, Ys(r))
}
function _h(e, t, n) {
    return t === "viewport" ? eo(function(r, i) {
        const o = ln(r)
          , s = _r(r)
          , a = o.visualViewport;
        let l = s.clientWidth
          , u = s.clientHeight
          , c = 0
          , f = 0;
        if (a) {
            l = a.width,
            u = a.height;
            const d = my();
            (d || !d && i === "fixed") && (c = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: u,
            x: c,
            y: f
        }
    }(e, n)) : br(t) ? eo(function(r, i) {
        const o = So(r, !0, i === "fixed")
          , s = o.top + r.clientTop
          , a = o.left + r.clientLeft
          , l = Vn(r) ? gi(r) : {
            x: 1,
            y: 1
        };
        return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: s * l.y
        }
    }(t, n)) : eo(function(r) {
        const i = _r(r)
          , o = ka(r)
          , s = r.ownerDocument.body
          , a = to(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth)
          , l = to(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let u = -o.scrollLeft + vy(r);
        const c = -o.scrollTop;
        return Nn(s).direction === "rtl" && (u += to(i.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: u,
            y: c
        }
    }(_r(e)))
}
function Eh(e) {
    return Vn(e) && Nn(e).position !== "fixed" ? e.offsetParent : null
}
function Th(e) {
    const t = ln(e);
    let n = Eh(e);
    for (; n && s1(n) && Nn(n).position === "static"; )
        n = Eh(n);
    return n && (kr(n) === "html" || kr(n) === "body" && Nn(n).position === "static" && !yc(n)) ? t : n || function(r) {
        let i = wo(r);
        for (; Vn(i) && !Iu(i); ) {
            if (yc(i))
                return i;
            i = wo(i)
        }
        return null
    }(e) || t
}
function a1(e, t, n) {
    const r = Vn(t)
      , i = _r(t)
      , o = So(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((kr(t) !== "body" || Ta(i)) && (s = ka(t)),
        Vn(t)) {
            const l = So(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            i && (a.x = vy(i));
    return {
        x: o.left + s.scrollLeft - a.x,
        y: o.top + s.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}
const l1 = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
        const o = n === "clippingAncestors" ? function(u, c) {
            const f = c.get(u);
            if (f)
                return f;
            let d = Ys(u).filter(S=>br(S) && kr(S) !== "body")
              , m = null;
            const b = Nn(u).position === "fixed";
            let _ = b ? wo(u) : u;
            for (; br(_) && !Iu(_); ) {
                const S = Nn(_)
                  , g = yc(_);
                (b ? g || m : g || S.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = S : d = d.filter(E=>E !== _),
                _ = wo(_)
            }
            return c.set(u, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...o, r]
          , a = s[0]
          , l = s.reduce((u,c)=>{
            const f = _h(t, c, i);
            return u.top = to(f.top, u.top),
            u.right = vh(f.right, u.right),
            u.bottom = vh(f.bottom, u.bottom),
            u.left = to(f.left, u.left),
            u
        }
        , _h(t, a, i));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const i = Vn(n)
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
        if ((i || !i && r !== "fixed") && ((kr(n) !== "body" || Ta(o)) && (s = ka(n)),
        Vn(n))) {
            const u = So(n);
            a = gi(n),
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
    isElement: br,
    getDimensions: function(e) {
        return Vn(e) ? dy(e) : e.getBoundingClientRect()
    },
    getOffsetParent: Th,
    getDocumentElement: _r,
    getScale: gi,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const i = this.getOffsetParent || Th
          , o = this.getDimensions;
        return {
            reference: a1(t, await i(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await o(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>Nn(e).direction === "rtl"
}
  , c1 = (e,t,n)=>{
    const r = new Map
      , i = {
        platform: l1,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return XO(e, t, {
        ...i,
        platform: o
    })
}
;
function _y(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? _y(e[n], t[n]) : e[n] = t[n])
}
const _n = {
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
function Ao(e, t) {
    let n = _n.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = _n.themes[n.$extend] || {} : (n = null,
        r = _n[t]) : n = null;
    while (n);
    return r
}
function u1(e) {
    const t = [e];
    let n = _n.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = _n.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function kh(e) {
    const t = [e];
    let n = _n.themes[e] || {};
    do
        n.$extend ? (t.push(n.$extend),
        n = _n.themes[n.$extend] || {}) : n = null;
    while (n);
    return t
}
let Ci = !1;
if (typeof window < "u") {
    Ci = !1;
    try {
        const e = Object.defineProperty({}, "passive", {
            get() {
                Ci = !0
            }
        });
        window.addEventListener("test", null, e)
    } catch {}
}
let Ey = !1;
typeof window < "u" && typeof navigator < "u" && (Ey = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ty = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , Sh = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , wh = {
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
function il() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const yn = [];
let Pr = null;
const Lh = {};
function Ch(e) {
    let t = Lh[e];
    return t || (t = Lh[e] = []),
    t
}
let vc = function() {};
typeof window < "u" && (vc = window.Element);
function He(e) {
    return function(t) {
        return Ao(t.theme, e)
    }
}
const ol = "__floating-vue__popper"
  , ky = ()=>Ue({
    name: "VPopper",
    provide() {
        return {
            [ol]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [ol]: {
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
            default: He("disabled")
        },
        positioningDisabled: {
            type: Boolean,
            default: He("positioningDisabled")
        },
        placement: {
            type: String,
            default: He("placement"),
            validator: e=>Ty.includes(e)
        },
        delay: {
            type: [String, Number, Object],
            default: He("delay")
        },
        distance: {
            type: [Number, String],
            default: He("distance")
        },
        skidding: {
            type: [Number, String],
            default: He("skidding")
        },
        triggers: {
            type: Array,
            default: He("triggers")
        },
        showTriggers: {
            type: [Array, Function],
            default: He("showTriggers")
        },
        hideTriggers: {
            type: [Array, Function],
            default: He("hideTriggers")
        },
        popperTriggers: {
            type: Array,
            default: He("popperTriggers")
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: He("popperShowTriggers")
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: He("popperHideTriggers")
        },
        container: {
            type: [String, Object, vc, Boolean],
            default: He("container")
        },
        boundary: {
            type: [String, vc],
            default: He("boundary")
        },
        strategy: {
            type: String,
            validator: e=>["absolute", "fixed"].includes(e),
            default: He("strategy")
        },
        autoHide: {
            type: [Boolean, Function],
            default: He("autoHide")
        },
        handleResize: {
            type: Boolean,
            default: He("handleResize")
        },
        instantMove: {
            type: Boolean,
            default: He("instantMove")
        },
        eagerMount: {
            type: Boolean,
            default: He("eagerMount")
        },
        popperClass: {
            type: [String, Array, Object],
            default: He("popperClass")
        },
        computeTransformOrigin: {
            type: Boolean,
            default: He("computeTransformOrigin")
        },
        autoMinSize: {
            type: Boolean,
            default: He("autoMinSize")
        },
        autoSize: {
            type: [Boolean, String],
            default: He("autoSize")
        },
        autoMaxSize: {
            type: Boolean,
            default: He("autoMaxSize")
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: He("autoBoundaryMaxSize")
        },
        preventOverflow: {
            type: Boolean,
            default: He("preventOverflow")
        },
        overflowPadding: {
            type: [Number, String],
            default: He("overflowPadding")
        },
        arrowPadding: {
            type: [Number, String],
            default: He("arrowPadding")
        },
        arrowOverflow: {
            type: Boolean,
            default: He("arrowOverflow")
        },
        flip: {
            type: Boolean,
            default: He("flip")
        },
        shift: {
            type: Boolean,
            default: He("shift")
        },
        shiftCrossAxis: {
            type: Boolean,
            default: He("shiftCrossAxis")
        },
        noAutoFocus: {
            type: Boolean,
            default: He("noAutoFocus")
        },
        disposeTimeout: {
            type: Number,
            default: He("disposeTimeout")
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
            return (e = this[ol]) == null ? void 0 : e.parentPopper
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
            (this.distance || this.skidding) && e.middleware.push(r1({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(e1({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(i1({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(t1({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push(ZO({
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
            e.middleware.push(o1({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: i})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null
                }
            })));
            const n = await c1(this.$_referenceNode, this.$_popperNode, e);
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
            Pr && this.instantMove && Pr.instantMove && Pr !== this.parentPopper) {
                Pr.$_applyHide(!0),
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
            this.isShown && (Pr = this),
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
            await il(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...Ys(this.$_referenceNode), ...Ys(this.$_popperNode)], "scroll", ()=>{
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
                for (let n = 0; n < yn.length; n++)
                    t = yn[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            yn.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of kh(this.theme))
                Ch(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await il(),
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
            Ah(yn, this),
            yn.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of kh(this.theme)) {
                const r = Ch(n);
                Ah(r, this),
                r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
            }
            Pr === this && (Pr = null),
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
            await il(),
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
            this.$_registerTriggerListeners(this.$_targetNodes, Sh, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], Sh, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, wh, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], wh, this.popperTriggers, this.popperHideTriggers, t)
        },
        $_registerEventListeners(e, t, n) {
            this.$_events.push({
                targetNodes: e,
                eventType: t,
                handler: n
            }),
            e.forEach(r=>r.addEventListener(t, n, Ci ? {
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
            if (no >= e.left && no <= e.right && ro >= e.top && ro <= e.bottom) {
                const t = this.$_popperNode.getBoundingClientRect()
                  , n = no - or
                  , r = ro - sr
                  , i = t.left + t.width / 2 - or + (t.top + t.height / 2) - sr + t.width + t.height
                  , o = or + n * i
                  , s = sr + r * i;
                return fs(or, sr, o, s, t.left, t.top, t.left, t.bottom) || fs(or, sr, o, s, t.left, t.top, t.right, t.top) || fs(or, sr, o, s, t.right, t.top, t.right, t.bottom) || fs(or, sr, o, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (Ey) {
        const e = Ci ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>Oh(t, !0), e),
        document.addEventListener("touchend", t=>Rh(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>Oh(e, !1), !0),
        window.addEventListener("click", e=>Rh(e, !1), !0);
    window.addEventListener("resize", d1)
}
function Oh(e, t) {
    if (_n.autoHideOnMousedown)
        Sy(e, t);
    else
        for (let n = 0; n < yn.length; n++) {
            const r = yn[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function Rh(e, t) {
    _n.autoHideOnMousedown || Sy(e, t)
}
function Sy(e, t) {
    const n = {};
    for (let r = yn.length - 1; r >= 0; r--) {
        const i = yn[r];
        try {
            const o = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
            i.pendingHide = !1,
            requestAnimationFrame(()=>{
                if (i.pendingHide = !1,
                !n[i.randomId] && Ih(i, o, e)) {
                    if (i.$_handleGlobalClose(e, t),
                    !e.closeAllPopover && e.closePopover && o) {
                        let a = i.parentPopper;
                        for (; a; )
                            n[a.randomId] = !0,
                            a = a.parentPopper;
                        return
                    }
                    let s = i.parentPopper;
                    for (; s && Ih(s, s.containsGlobalTarget, e); )
                        s.$_handleGlobalClose(e, t),
                        s = s.parentPopper
                }
            }
            )
        } catch {}
    }
}
function Ih(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || f1(e, n) && !t
}
function f1(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function d1() {
    for (let e = 0; e < yn.length; e++)
        yn[e].$_computePosition()
}
let or = 0
  , sr = 0
  , no = 0
  , ro = 0;
typeof window < "u" && window.addEventListener("mousemove", e=>{
    or = no,
    sr = ro,
    no = e.clientX,
    ro = e.clientY
}
, Ci ? {
    passive: !0
} : void 0);
function fs(e, t, n, r, i, o, s, a) {
    const l = ((s - i) * (t - o) - (a - o) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t))
      , u = ((n - e) * (t - o) - (r - t) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t));
    return l >= 0 && l <= 1 && u >= 0 && u <= 1
}
const h1 = {
    extends: ky()
}
  , Sa = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
;
function p1(e, t, n, r, i, o) {
    return me(),
    ze("div", {
        ref: "reference",
        class: Nt(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [Tr(e.$slots, "default", un(Qt(e.slotData)))], 2)
}
const m1 = Sa(h1, [["render", p1]]);
function g1() {
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
let bs;
function bc() {
    bc.init || (bc.init = !0,
    bs = g1() !== -1)
}
var wa = {
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
        bc(),
        zt(()=>{
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
        bs && this.$el.appendChild(e),
        e.data = "about:blank",
        bs || this.$el.appendChild(e)
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
            this._resizeObject && this._resizeObject.onload && (!bs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const y1 = E0();
b0("data-v-b329ee4c");
const v1 = {
    class: "resize-observer",
    tabindex: "-1"
};
_0();
const b1 = y1((e,t,n,r,i,o)=>(me(),
Tt("div", v1)));
wa.render = b1;
wa.__scopeId = "data-v-b329ee4c";
wa.__file = "src/components/ResizeObserver.vue";
const wy = (e="theme")=>({
    computed: {
        themeClass() {
            return u1(this[e])
        }
    }
})
  , _1 = Ue({
    name: "VPopperContent",
    components: {
        ResizeObserver: wa
    },
    mixins: [wy()],
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
  , E1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , T1 = {
    ref: "inner",
    class: "v-popper__inner"
}
  , k1 = ge("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , S1 = ge("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , w1 = [k1, S1];
function A1(e, t, n, r, i, o) {
    const s = Wr("ResizeObserver");
    return me(),
    ze("div", {
        id: e.popperId,
        ref: "popover",
        class: Nt(["v-popper__popper", [e.themeClass, e.classes.popperClass, {
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
        style: Dn(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = r_(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [ge("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), ge("div", {
        class: "v-popper__wrapper",
        style: Dn(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [ge("div", T1, [e.mounted ? (me(),
    ze(yt, {
        key: 0
    }, [ge("div", null, [Tr(e.$slots, "default")]), e.handleResize ? (me(),
    Tt(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : Wt("", !0)], 64)) : Wt("", !0)], 512), ge("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Dn(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, w1, 4)], 4)], 46, E1)
}
const Ay = Sa(_1, [["render", A1]])
  , Ly = {
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
const L1 = Ue({
    name: "VPopperWrapper",
    components: {
        Popper: m1,
        PopperContent: Ay
    },
    mixins: [Ly, wy("finalTheme")],
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
function C1(e, t, n, r, i, o) {
    const s = Wr("PopperContent")
      , a = Wr("Popper");
    return me(),
    Tt(a, _i({
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
        default: fn(({popperId: l, isShown: u, shouldMountContent: c, skipTransition: f, autoHide: d, show: m, hide: b, handleResize: _, onResize: S, classes: g, result: E})=>[Tr(e.$slots, "default", {
            shown: u,
            show: m,
            hide: b
        }), et(s, {
            ref: "popperContent",
            "popper-id": l,
            theme: e.finalTheme,
            shown: u,
            mounted: c,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": _,
            classes: g,
            result: E,
            onHide: b,
            onResize: S
        }, {
            default: fn(()=>[Tr(e.$slots, "popper", {
                shown: u,
                hide: b
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Pu = Sa(L1, [["render", C1]])
  , O1 = {
    ...Pu,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , R1 = {
    ...Pu,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , I1 = {
    ...Pu,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , P1 = Ue({
    name: "VTooltipDirective",
    components: {
        Popper: ky(),
        PopperContent: Ay
    },
    mixins: [Ly],
    inheritAttrs: !1,
    props: {
        theme: {
            type: String,
            default: "tooltip"
        },
        html: {
            type: Boolean,
            default: e=>Ao(e.theme, "html")
        },
        content: {
            type: [String, Number, Function],
            default: null
        },
        loadingContent: {
            type: String,
            default: e=>Ao(e.theme, "loadingContent")
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
  , M1 = ["innerHTML"]
  , D1 = ["textContent"];
function N1(e, t, n, r, i, o) {
    const s = Wr("PopperContent")
      , a = Wr("Popper");
    return me(),
    Tt(a, _i({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: fn(({popperId: l, isShown: u, shouldMountContent: c, skipTransition: f, autoHide: d, hide: m, handleResize: b, onResize: _, classes: S, result: g})=>[et(s, {
            ref: "popperContent",
            class: Nt({
                "v-popper--tooltip-loading": e.loading
            }),
            "popper-id": l,
            theme: e.theme,
            shown: u,
            mounted: c,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": b,
            classes: S,
            result: g,
            onHide: m,
            onResize: _
        }, {
            default: fn(()=>[e.html ? (me(),
            ze("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, M1)) : (me(),
            ze("div", {
                key: 1,
                textContent: tn(e.finalContent)
            }, null, 8, D1))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const V1 = Sa(P1, [["render", N1]])
  , Cy = "v-popper--has-tooltip";
function F1(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of Ty)
            t[r] && (n = r);
    return n || (n = Ao(e.theme || "tooltip", "placement")),
    n
}
function Oy(e, t, n) {
    let r;
    const i = typeof t;
    return i === "string" ? r = {
        content: t
    } : t && i === "object" ? r = t : r = {
        content: !1
    },
    r.placement = F1(r, n),
    r.targetNodes = ()=>[e],
    r.referenceNode = ()=>e,
    r
}
let sl, Lo, B1 = 0;
function U1() {
    if (sl)
        return;
    Lo = ce([]),
    sl = lm({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: Lo
            }
        },
        render() {
            return this.directives.map(t=>dt(V1, {
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
    sl.mount(e)
}
function x1(e, t, n) {
    U1();
    const r = ce(Oy(e, t, n))
      , i = ce(!1)
      , o = {
        id: B1++,
        options: r,
        shown: i
    };
    return Lo.value.push(o),
    e.classList && e.classList.add(Cy),
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
function Ry(e) {
    if (e.$_popper) {
        const t = Lo.value.indexOf(e.$_popper.item);
        t !== -1 && Lo.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(Cy)
}
function Ph(e, {value: t, modifiers: n}) {
    const r = Oy(e, t, n);
    if (!r.content || Ao(r.theme || "tooltip", "disabled"))
        Ry(e);
    else {
        let i;
        e.$_popper ? (i = e.$_popper,
        i.options.value = r) : i = x1(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? i.show() : i.hide())
    }
}
const H1 = {
    beforeMount: Ph,
    updated: Ph,
    beforeUnmount(e) {
        Ry(e)
    }
};
function Mh(e) {
    e.addEventListener("mousedown", qs),
    e.addEventListener("click", qs),
    e.addEventListener("touchstart", Iy, Ci ? {
        passive: !0
    } : !1)
}
function Dh(e) {
    e.removeEventListener("mousedown", qs),
    e.removeEventListener("click", qs),
    e.removeEventListener("touchstart", Iy),
    e.removeEventListener("touchend", Py),
    e.removeEventListener("touchcancel", My)
}
function qs(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch,
    e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
}
function Iy(e) {
    if (e.changedTouches.length === 1) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = !0;
        const n = e.changedTouches[0];
        t.$_vclosepopover_touchPoint = n,
        t.addEventListener("touchend", Py),
        t.addEventListener("touchcancel", My)
    }
}
function Py(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function My(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const j1 = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && Mh(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? Mh(e) : Dh(e))
    },
    beforeUnmount(e) {
        Dh(e)
    }
};
function K1(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    _y(_n, t),
    e.directive("tooltip", H1),
    e.directive("close-popper", j1),
    e.component("VTooltip", I1),
    e.component("VDropdown", O1),
    e.component("VMenu", R1))
}
const Y1 = {
    version: "5.2.2",
    install: K1,
    options: _n
}
  , q1 = Bt(e=>{
    e.vueApp.use(Y1)
}
);
function Dy(e) {
    if (e == null)
        return 1 / 0;
    if (typeof e == "object")
        for (let t in e)
            e[t] = Dy(e[t]);
    return e
}
const G1 = Bt(({vueApp: e})=>{
    var i;
    const t = ((i = zn().public) == null ? void 0 : i.notivue) || {}
      , n = Dy(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = CS(n);
    e.use(r)
}
);
function W1(e, {locales: t=[], localeCodes: n=[], baseUrl: r=QL, hooks: i={}, context: o={}}={}) {
    const s = Po()
      , a = e.install;
    return e.install = (l,...u)=>{
        const c = Q1(u[0]) ? ht({}, u[0]) : {
            inject: !0
        };
        c.inject == null && (c.inject = !0);
        const f = c.__composerExtend;
        if (c.__composerExtend = _=>{
            const S = wi(e);
            _.locales = fe(()=>S.locales.value),
            _.localeCodes = fe(()=>S.localeCodes.value),
            _.baseUrl = fe(()=>S.baseUrl.value);
            let g;
            return $e(f) && (g = Reflect.apply(f, c, [_])),
            ()=>{
                g && g()
            }
        }
        ,
        e.mode === "legacy") {
            const _ = c.__vueI18nExtend;
            c.__vueI18nExtend = S=>{
                Nh(S, i.onExtendVueI18n);
                let g;
                return $e(_) && (g = Reflect.apply(_, c, [S])),
                ()=>{
                    g && g()
                }
            }
        }
        u[0] = c,
        Reflect.apply(a, e, [l, ...u]);
        const d = wi(e);
        s.run(()=>{
            J1(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: i,
                context: o
            }),
            e.mode === "legacy" && Fg(e.global) && Nh(e.global, i.onExtendVueI18n)
        }
        );
        const m = l
          , b = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (b && z1(b, d, i.onExtendExportedGlobal),
        c.inject) {
            const _ = Lu(e);
            l.mixin({
                methods: {
                    getRouteBaseName: Ai,
                    resolveRoute: on(_a, _),
                    localePath: on(ba, _),
                    localeRoute: on(wu, _),
                    localeLocation: on(vC, _),
                    switchLocalePath: on(Li, _),
                    localeHead: on(Hg, _)
                }
            })
        }
        if (m.unmount) {
            const _ = m.unmount;
            m.unmount = ()=>{
                s.stop(),
                _()
            }
        }
    }
    ,
    s
}
function J1(e, t) {
    const {locales: n, localeCodes: r, baseUrl: i, context: o} = t
      , s = ce(n)
      , a = ce(r)
      , l = ce("");
    e.locales = fe(()=>s.value),
    e.localeCodes = fe(()=>a.value),
    e.baseUrl = fe(()=>l.value),
    ZL ? Ye(e.locale, ()=>{
        l.value = rh(i, o)
    }
    , {
        immediate: !0
    }) : l.value = rh(i, o),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function Ny(e, t, n) {
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
function z1(e, t, n) {
    Ny(t, e, n)
}
function Nh(e, t) {
    const n = wi(e);
    Ny(n, e, t)
}
function Q1(e) {
    return Be(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function X1() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = vt
      , n = `(${Qr.join("|")})`
      , r = `(?:${e}${t})?`
      , i = new RegExp(`${e}${n}${r}$`,"i")
      , o = dc(Qr);
    return a=>{
        if (Be(a)) {
            if (a.name) {
                const u = (ie(a.name) ? a.name : a.name.toString()).match(i);
                if (u && u.length > 1)
                    return u[1]
            } else if (a.path) {
                const l = a.path.match(o);
                if (l && l.length > 1)
                    return l[1]
            }
        } else if (ie(a)) {
            const l = a.match(o);
            if (l && l.length > 1)
                return l[1]
        }
        return ""
    }
}
const Z1 = Bt({
    name: "i18n:plugin",
    parallel: JL,
    async setup(e) {
        let t, n;
        const r = la()
          , {vueApp: i} = e
          , o = e
          , s = {
            ...vt
        };
        s.baseUrl = NC();
        const a = ([t,n] = Pn(()=>cC(WL, re())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = X1()
          , u = p=>p || a.locale || "en-US"
          , c = FC();
        let f = sh(r, l, a.locale, u(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: c
        });
        a.messages = ([t,n] = Pn(()=>uC(a.messages, fc, {
            localeCodes: Qr,
            initialLocale: f,
            lazy: s.lazy,
            defaultLocale: s.defaultLocale,
            fallbackLocale: a.fallbackLocale
        })),
        t = await t,
        n(),
        t),
        f = u(f);
        const d = cL({
            ...a,
            locale: f
        });
        let m = !0;
        const b = p=>f !== p && m;
        let _ = !0;
        const S = ()=>_;
        S() && s.strategy === "no_prefix" && e.hook("app:mounted", async()=>{
            const {locale: p, stat: y, reason: T, from: w} = s.detectBrowserLanguage ? Gg(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: c
            }, f) : qg;
            AC(d, p),
            _ = !1
        }
        ),
        W1(d, {
            locales: s.locales,
            localeCodes: Qr,
            baseUrl: s.baseUrl,
            context: o,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = fe(()=>Su.find(y=>y.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async y=>{
                        const T = b(y)
                          , [w] = await oh(y, d, T);
                        w && T && (m = !1);
                        const L = await o.runWithContext(()=>ah({
                            route: {
                                to: r
                            },
                            targetLocale: y,
                            routeLocaleGetter: l
                        }));
                        await o.runWithContext(async()=>await ch({
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
                    p.getBrowserLocale = ()=>Yg(),
                    p.getLocaleCookie = ()=>BC(c),
                    p.setLocaleCookie = y=>UC(c, y),
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
                        d.__pendingLocale && (Bg(d, d.__pendingLocale),
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
                const y = wi(d);
                return p.strategy = y.strategy,
                p.localeProperties = fe(()=>y.localeProperties.value),
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
        PC(o, d);
        let E = 0;
        IE("locale-changing", async(p,y)=>{
            let T, w;
            const L = sh(p, l, a.locale, ()=>va(d) || u(s.defaultLocale), {
                ssg: S() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: c
            })
              , C = b(L)
              , [O] = ([T,w] = Pn(()=>oh(L, d, C)),
            T = await T,
            w(),
            T);
            O && C && (m = !1);
            const N = ([T,w] = Pn(()=>o.runWithContext(()=>ah({
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
            [T,w] = Pn(()=>o.runWithContext(async()=>ch({
                i18n: d,
                redirectPath: N,
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
function Vy(e) {
    return Mo() ? (Zs(e),
    !0) : !1
}
function Mu(e) {
    return typeof e == "function" ? e() : J(e)
}
const $1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const eR = e=>e != null
  , tR = Object.prototype.toString
  , Gs = e=>tR.call(e) === "[object Object]"
  , io = ()=>{}
;
function Fy(e) {
    return e || wn()
}
function nR(...e) {
    if (e.length !== 1)
        return si(...e);
    const t = e[0];
    return typeof t == "function" ? hr(Tp(()=>({
        get: t,
        set: io
    }))) : ce(t)
}
function rR(e, t=!0, n) {
    Fy() ? Ft(e, n) : t ? e() : zt(e)
}
function iR(e, t) {
    Fy(t) && Ii(e, t)
}
function oo(e) {
    var t;
    const n = Mu(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const By = $1 ? window : void 0;
function xt(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = By) : [t,n,r,i] = e,
    !t)
        return io;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = ()=>{
        o.forEach(c=>c()),
        o.length = 0
    }
      , a = (c,f,d,m)=>(c.addEventListener(f, d, m),
    ()=>c.removeEventListener(f, d, m))
      , l = Ye(()=>[oo(t), Mu(i)], ([c,f])=>{
        if (s(),
        !c)
            return;
        const d = Gs(f) ? {
            ...f
        } : f;
        o.push(...n.flatMap(m=>r.map(b=>a(c, m, b, d))))
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
    return Vy(u),
    u
}
function oR() {
    const e = ce(!1)
      , t = wn();
    return t && Ft(()=>{
        e.value = !0
    }
    , t),
    e
}
function sR(e) {
    const t = oR();
    return fe(()=>(t.value,
    !!e()))
}
function aR(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=By, immediate: a=!0} = n
      , l = sR(()=>s && "IntersectionObserver"in s)
      , u = fe(()=>{
        const b = Mu(e);
        return (Array.isArray(b) ? b : [b]).map(oo).filter(eR)
    }
    );
    let c = io;
    const f = ce(a)
      , d = l.value ? Ye(()=>[u.value, oo(r), f.value], ([b,_])=>{
        if (c(),
        !f.value || !b.length)
            return;
        const S = new IntersectionObserver(t,{
            root: oo(_),
            rootMargin: i,
            threshold: o
        });
        b.forEach(g=>g && S.observe(g)),
        c = ()=>{
            S.disconnect(),
            c = io
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : io
      , m = ()=>{
        c(),
        d(),
        f.value = !1
    }
    ;
    return Vy(m),
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
function rD(e, t={}) {
    const n = nR(e)
      , {threshold: r=50, onSwipe: i, onSwipeEnd: o, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = At({
        x: 0,
        y: 0
    })
      , u = (L,C)=>{
        l.x = L,
        l.y = C
    }
      , c = At({
        x: 0,
        y: 0
    })
      , f = (L,C)=>{
        c.x = L,
        c.y = C
    }
      , d = fe(()=>l.x - c.x)
      , m = fe(()=>l.y - c.y)
      , {max: b, abs: _} = Math
      , S = fe(()=>b(_(d.value), _(m.value)) >= r)
      , g = ce(!1)
      , E = ce(!1)
      , p = fe(()=>S.value ? _(d.value) > _(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , y = L=>{
        var C, O, N;
        const H = L.buttons === 0
          , B = L.buttons === 1;
        return (N = (O = (C = t.pointerTypes) == null ? void 0 : C.includes(L.pointerType)) != null ? O : H || B) != null ? N : !0
    }
      , T = [xt(e, "pointerdown", L=>{
        if (!y(L))
            return;
        E.value = !0;
        const C = L.target;
        C == null || C.setPointerCapture(L.pointerId);
        const {clientX: O, clientY: N} = L;
        u(O, N),
        f(O, N),
        s == null || s(L)
    }
    ), xt(e, "pointermove", L=>{
        if (!y(L) || !E.value)
            return;
        const {clientX: C, clientY: O} = L;
        f(C, O),
        !g.value && S.value && (g.value = !0),
        g.value && (i == null || i(L))
    }
    ), xt(e, "pointerup", L=>{
        y(L) && (g.value && (o == null || o(L, p.value)),
        E.value = !1,
        g.value = !1)
    }
    )];
    rR(()=>{
        var L, C, O, N, H, B, $, W;
        (C = (L = n.value) == null ? void 0 : L.style) == null || C.setProperty("touch-action", "none"),
        a && ((N = (O = n.value) == null ? void 0 : O.style) == null || N.setProperty("-webkit-user-select", "none"),
        (B = (H = n.value) == null ? void 0 : H.style) == null || B.setProperty("-ms-user-select", "none"),
        (W = ($ = n.value) == null ? void 0 : $.style) == null || W.setProperty("user-select", "none"))
    }
    );
    const w = ()=>T.forEach(L=>L());
    return {
        isSwiping: hr(g),
        direction: hr(p),
        posStart: hr(l),
        posEnd: hr(c),
        distanceX: d,
        distanceY: m,
        stop: w
    }
}
const Uy = 1 / 60 * 1e3
  , lR = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , xy = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(lR()), Uy);
function cR(e) {
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
const uR = 40;
let Ec = !0
  , Co = !1
  , Tc = !1;
const yi = {
    delta: 0,
    timestamp: 0
}
  , qo = ["read", "update", "preRender", "render", "postRender"]
  , Aa = qo.reduce((e,t)=>(e[t] = cR(()=>Co = !0),
e), {})
  , kc = qo.reduce((e,t)=>{
    const n = Aa[t];
    return e[t] = (r,i=!1,o=!1)=>(Co || hR(),
    n.schedule(r, i, o)),
    e
}
, {})
  , fR = qo.reduce((e,t)=>(e[t] = Aa[t].cancel,
e), {});
qo.reduce((e,t)=>(e[t] = ()=>Aa[t].process(yi),
e), {});
const dR = e=>Aa[e].process(yi)
  , Hy = e=>{
    Co = !1,
    yi.delta = Ec ? Uy : Math.max(Math.min(e - yi.timestamp, uR), 1),
    yi.timestamp = e,
    Tc = !0,
    qo.forEach(dR),
    Tc = !1,
    Co && (Ec = !1,
    xy(Hy))
}
  , hR = ()=>{
    Co = !0,
    Ec = !0,
    Tc || xy(Hy)
}
  , jy = ()=>yi;
function Ky(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Vh = function() {};
const Sc = (e,t,n)=>Math.min(Math.max(n, e), t)
  , al = .001
  , pR = .01
  , mR = 10
  , gR = .05
  , yR = 1;
function vR({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = Sc(gR, yR, s),
    e = Sc(pR, mR, e / 1e3),
    s < 1 ? (i = u=>{
        const c = u * s
          , f = c * e
          , d = c - n
          , m = wc(u, s)
          , b = Math.exp(-f);
        return al - d / m * b
    }
    ,
    o = u=>{
        const f = u * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(u, 2) * e
          , b = Math.exp(-f)
          , _ = wc(Math.pow(u, 2), s);
        return (-i(u) + al > 0 ? -1 : 1) * ((d - m) * b) / _
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -al + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const a = 5 / e
      , l = _R(i, o, a);
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
const bR = 12;
function _R(e, t, n) {
    let r = n;
    for (let i = 1; i < bR; i++)
        r = r - e(r) / t(r);
    return r
}
function wc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const ER = ["duration", "bounce"]
  , TR = ["stiffness", "damping", "mass"];
function Fh(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function kR(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Fh(e, TR) && Fh(e, ER)) {
        const n = vR(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Du(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = Ky(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = kR(o)
      , m = Bh
      , b = Bh;
    function _() {
        const S = c ? -(c / 1e3) : 0
          , g = n - t
          , E = l / (2 * Math.sqrt(a * u))
          , p = Math.sqrt(a / u) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const y = wc(p, E);
            m = T=>{
                const w = Math.exp(-E * p * T);
                return n - w * ((S + E * p * g) / y * Math.sin(y * T) + g * Math.cos(y * T))
            }
            ,
            b = T=>{
                const w = Math.exp(-E * p * T);
                return E * p * w * (Math.sin(y * T) * (S + E * p * g) / y + g * Math.cos(y * T)) - w * (Math.cos(y * T) * (S + E * p * g) - y * g * Math.sin(y * T))
            }
        } else if (E === 1)
            m = y=>n - Math.exp(-p * y) * (g + (S + p * g) * y);
        else {
            const y = p * Math.sqrt(E * E - 1);
            m = T=>{
                const w = Math.exp(-E * p * T)
                  , L = Math.min(y * T, 300);
                return n - w * ((S + E * p * g) * Math.sinh(L) + y * g * Math.cosh(L)) / y
            }
        }
    }
    return _(),
    {
        next: S=>{
            const g = m(S);
            if (d)
                s.done = S >= f;
            else {
                const E = b(S) * 1e3
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
            _()
        }
    }
}
Du.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const Bh = e=>0
  , Yy = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Nu = (e,t,n)=>-n * e + n * t + e
  , qy = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , so = e=>e % 1 ? Number(e.toFixed(5)) : e
  , Oo = /(-)?([\d]*\.?[\d])+/g
  , Ac = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , SR = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Go(e) {
    return typeof e == "string"
}
const Wo = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , ao = Object.assign(Object.assign({}, Wo), {
    transform: qy(0, 1)
})
  , ds = Object.assign(Object.assign({}, Wo), {
    default: 1
})
  , Vu = e=>({
    test: t=>Go(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Mr = Vu("deg")
  , lo = Vu("%")
  , _e = Vu("px")
  , Uh = Object.assign(Object.assign({}, lo), {
    parse: e=>lo.parse(e) / 100,
    transform: e=>lo.transform(e * 100)
})
  , Fu = (e,t)=>n=>!!(Go(n) && SR.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Gy = (e,t,n)=>r=>{
    if (!Go(r))
        return r;
    const [i,o,s,a] = r.match(Oo);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , xr = {
    test: Fu("hsl", "hue"),
    parse: Gy("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + lo.transform(so(t)) + ", " + lo.transform(so(n)) + ", " + so(ao.transform(r)) + ")"
}
  , wR = qy(0, 255)
  , ll = Object.assign(Object.assign({}, Wo), {
    transform: e=>Math.round(wR(e))
})
  , mr = {
    test: Fu("rgb", "red"),
    parse: Gy("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + ll.transform(e) + ", " + ll.transform(t) + ", " + ll.transform(n) + ", " + so(ao.transform(r)) + ")"
};
function AR(e) {
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
const Lc = {
    test: Fu("#"),
    parse: AR,
    transform: mr.transform
}
  , jt = {
    test: e=>mr.test(e) || Lc.test(e) || xr.test(e),
    parse: e=>mr.test(e) ? mr.parse(e) : xr.test(e) ? xr.parse(e) : Lc.parse(e),
    transform: e=>Go(e) ? e : e.hasOwnProperty("red") ? mr.transform(e) : xr.transform(e)
}
  , Wy = "${c}"
  , Jy = "${n}";
function LR(e) {
    var t, n, r, i;
    return isNaN(e) && Go(e) && ((n = (t = e.match(Oo)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(Ac)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function zy(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Ac);
    r && (n = r.length,
    e = e.replace(Ac, Wy),
    t.push(...r.map(jt.parse)));
    const i = e.match(Oo);
    return i && (e = e.replace(Oo, Jy),
    t.push(...i.map(Wo.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Qy(e) {
    return zy(e).values
}
function Xy(e) {
    const {values: t, numColors: n, tokenised: r} = zy(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let a = 0; a < i; a++)
            s = s.replace(a < n ? Wy : Jy, a < n ? jt.transform(o[a]) : so(o[a]));
        return s
    }
}
const CR = e=>typeof e == "number" ? 0 : e;
function OR(e) {
    const t = Qy(e);
    return Xy(e)(t.map(CR))
}
const Jo = {
    test: LR,
    parse: Qy,
    createTransformer: Xy,
    getAnimatableNone: OR
}
  , RR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function IR(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Oo) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = RR.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const PR = /([a-z-]*)\(.*?\)/g
  , Cc = Object.assign(Object.assign({}, Jo), {
    getAnimatableNone: e=>{
        const t = e.match(PR);
        return t ? t.map(IR).join(" ") : e
    }
});
function cl(e, t, n) {
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
        i = cl(l, a, e + 1 / 3),
        o = cl(l, a, e),
        s = cl(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const MR = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , DR = [Lc, mr, xr]
  , Hh = e=>DR.find(t=>t.test(e))
  , Zy = (e,t)=>{
    let n = Hh(e)
      , r = Hh(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === xr && (i = xh(i),
    n = mr),
    r === xr && (o = xh(o),
    r = mr);
    const s = Object.assign({}, i);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = MR(i[l], o[l], a));
        return s.alpha = Nu(i.alpha, o.alpha, a),
        n.transform(s)
    }
}
  , NR = e=>typeof e == "number"
  , VR = (e,t)=>n=>t(e(n))
  , $y = (...e)=>e.reduce(VR);
function ev(e, t) {
    return NR(e) ? n=>Nu(e, t, n) : jt.test(e) ? Zy(e, t) : nv(e, t)
}
const tv = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>ev(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , FR = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = ev(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function jh(e) {
    const t = Jo.parse(e)
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
const nv = (e,t)=>{
    const n = Jo.createTransformer(t)
      , r = jh(e)
      , i = jh(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? $y(tv(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , BR = (e,t)=>n=>Nu(e, t, n);
function UR(e) {
    if (typeof e == "number")
        return BR;
    if (typeof e == "string")
        return jt.test(e) ? Zy : nv;
    if (Array.isArray(e))
        return tv;
    if (typeof e == "object")
        return FR
}
function xR(e, t, n) {
    const r = []
      , i = n || UR(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = $y(l, a)
        }
        r.push(a)
    }
    return r
}
function HR([e,t], [n]) {
    return r=>n(Yy(e, t, r))
}
function jR(e, t) {
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
        const a = Yy(e[o], e[o + 1], i);
        return t[o](a)
    }
}
function rv(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Vh(o === t.length),
    Vh(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = xR(t, r, i)
      , a = o === 2 ? HR(e, s) : jR(e, s);
    return n ? l=>a(Sc(e[0], e[o - 1], l)) : a
}
const La = e=>t=>1 - e(1 - t)
  , Bu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , KR = e=>t=>Math.pow(t, e)
  , iv = e=>t=>t * t * ((e + 1) * t - e)
  , YR = e=>{
    const t = iv(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , ov = 1.525
  , qR = 4 / 11
  , GR = 8 / 11
  , WR = 9 / 10
  , sv = e=>e
  , Uu = KR(2)
  , JR = La(Uu)
  , av = Bu(Uu)
  , lv = e=>1 - Math.sin(Math.acos(e))
  , cv = La(lv)
  , zR = Bu(cv)
  , xu = iv(ov)
  , QR = La(xu)
  , XR = Bu(xu)
  , ZR = YR(ov)
  , $R = 4356 / 361
  , eI = 35442 / 1805
  , tI = 16061 / 1805
  , Ws = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < qR ? 7.5625 * t : e < GR ? 9.075 * t - 9.9 * e + 3.4 : e < WR ? $R * t - eI * e + tI : 10.8 * e * e - 20.52 * e + 10.72
}
  , nI = La(Ws)
  , rI = e=>e < .5 ? .5 * (1 - Ws(1 - e * 2)) : .5 * Ws(e * 2 - 1) + .5;
function iI(e, t) {
    return e.map(()=>t || av).splice(0, e.length - 1)
}
function oI(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function sI(e, t) {
    return e.map(n=>n * t)
}
function _s({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = sI(r && r.length === s.length ? r : oI(s), i);
    function l() {
        return rv(a, s, {
            ease: Array.isArray(n) ? n : iI(s, n)
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
function aI({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
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
const Kh = {
    keyframes: _s,
    spring: Du,
    decay: aI
};
function lI(e) {
    if (Array.isArray(e.to))
        return _s;
    if (Kh[e.type])
        return Kh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? _s : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Du : _s
}
function uv(e, t, n=0) {
    return e - t - n
}
function cI(e, t, n=0, r=!0) {
    return r ? uv(t + -e, t, n) : t - (e - t) + n
}
function uI(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const fI = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>kc.update(t, !0),
        stop: ()=>fR.update(t)
    }
}
;
function fv(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=fI, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: u=0, onPlay: c, onStop: f, onComplete: d, onRepeat: m, onUpdate: b} = e, _ = Ky(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: S} = _, g, E = 0, p = _.duration, y, T = !1, w = !0, L;
    const C = lI(_);
    !((n = (t = C).needsInterpolation) === null || n === void 0) && n.call(t, r, S) && (L = rv([0, 100], [r, S], {
        clamp: !1
    }),
    r = 0,
    S = 100);
    const O = C(Object.assign(Object.assign({}, _), {
        from: r,
        to: S
    }));
    function N() {
        E++,
        l === "reverse" ? (w = E % 2 === 0,
        s = cI(s, p, u, w)) : (s = uv(s, p, u),
        l === "mirror" && O.flipTarget()),
        T = !1,
        m && m()
    }
    function H() {
        g.stop(),
        d && d()
    }
    function B(W) {
        if (w || (W = -W),
        s += W,
        !T) {
            const Y = O.next(Math.max(0, s));
            y = Y.value,
            L && (y = L(y)),
            T = w ? Y.done : s <= 0
        }
        b == null || b(y),
        T && (E === 0 && (p ?? (p = s)),
        E < a ? uI(s, p, u, w) && N() : H())
    }
    function $() {
        c == null || c(),
        g = o(B),
        g.start()
    }
    return i && $(),
    {
        stop: ()=>{
            f == null || f(),
            g.stop()
        }
    }
}
function dv(e, t) {
    return t ? e * (1e3 / t) : 0
}
function dI({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: u, driver: c, onUpdate: f, onComplete: d, onStop: m}) {
    let b;
    function _(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function S(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function g(p) {
        b == null || b.stop(),
        b = fv(Object.assign(Object.assign({}, p), {
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
    if (_(e))
        E({
            from: e,
            velocity: t,
            to: S(e)
        });
    else {
        let p = i * t + e;
        typeof u < "u" && (p = u(p));
        const y = S(p)
          , T = y === n ? -1 : 1;
        let w, L;
        const C = O=>{
            w = L,
            L = O,
            t = dv(O - w, jy().delta),
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
            onUpdate: _(p) ? C : void 0
        })
    }
    return {
        stop: ()=>b == null ? void 0 : b.stop()
    }
}
const hv = (e,t)=>1 - 3 * t + 3 * e
  , pv = (e,t)=>3 * t - 6 * e
  , mv = e=>3 * e
  , Js = (e,t,n)=>((hv(t, n) * e + pv(t, n)) * e + mv(t)) * e
  , gv = (e,t,n)=>3 * hv(t, n) * e * e + 2 * pv(t, n) * e + mv(t)
  , hI = 1e-7
  , pI = 10;
function mI(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Js(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > hI && ++a < pI);
    return s
}
const gI = 8
  , yI = .001;
function vI(e, t, n, r) {
    for (let i = 0; i < gI; ++i) {
        const o = gv(t, n, r);
        if (o === 0)
            return t;
        const s = Js(t, n, r) - e;
        t -= s / o
    }
    return t
}
const Es = 11
  , hs = 1 / (Es - 1);
function bI(e, t, n, r) {
    if (e === t && n === r)
        return sv;
    const i = new Float32Array(Es);
    for (let s = 0; s < Es; ++s)
        i[s] = Js(s * hs, e, n);
    function o(s) {
        let a = 0
          , l = 1;
        const u = Es - 1;
        for (; l !== u && i[l] <= s; ++l)
            a += hs;
        --l;
        const c = (s - i[l]) / (i[l + 1] - i[l])
          , f = a + c * hs
          , d = gv(f, e, n);
        return d >= yI ? vI(s, f, e, n) : d === 0 ? f : mI(s, a, a + hs, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Js(o(s), t, r)
}
const ul = {};
var _I = Object.defineProperty
  , EI = (e,t,n)=>t in e ? _I(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , TI = (e,t,n)=>(EI(e, typeof t != "symbol" ? t + "" : t, n),
n);
class kI {
    constructor() {
        TI(this, "subscriptions", new Set)
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
var SI = Object.defineProperty
  , wI = (e,t,n)=>t in e ? SI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Cn = (e,t,n)=>(wI(e, typeof t != "symbol" ? t + "" : t, n),
n);
function Yh(e) {
    return !isNaN(parseFloat(e))
}
class AI {
    constructor(t) {
        Cn(this, "current"),
        Cn(this, "prev"),
        Cn(this, "timeDelta", 0),
        Cn(this, "lastUpdated", 0),
        Cn(this, "updateSubscribers", new kI),
        Cn(this, "stopAnimation"),
        Cn(this, "canTrackVelocity", !1),
        Cn(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: i} = jy();
            this.lastUpdated !== i && (this.timeDelta = r,
            this.lastUpdated = i),
            kc.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        Cn(this, "scheduleVelocityCheck", ()=>kc.postRender(this.velocityCheck)),
        Cn(this, "velocityCheck", ({timestamp: n})=>{
            this.canTrackVelocity || (this.canTrackVelocity = Yh(this.current)),
            n !== this.lastUpdated && (this.prev = this.current)
        }
        ),
        this.prev = this.current = t,
        this.canTrackVelocity = Yh(this.current)
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
        return this.canTrackVelocity ? dv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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
function LI(e) {
    return new AI(e)
}
const {isArray: CI} = Array;
function OI() {
    const e = ce({})
      , t = r=>{
        const i = o=>{
            e.value[o] && (e.value[o].stop(),
            e.value[o].destroy(),
            delete e.value[o])
        }
        ;
        r ? CI(r) ? r.forEach(i) : i(r) : Object.keys(e.value).forEach(i)
    }
      , n = (r,i,o)=>{
        if (e.value[r])
            return e.value[r];
        const s = LI(i);
        return s.onChange(a=>o[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return iR(t),
    {
        motionValues: e,
        get: n,
        stop: t
    }
}
function RI(e) {
    return Array.isArray(e)
}
function Dr() {
    return {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restDelta: .5,
        restSpeed: 10
    }
}
function fl(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function II(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 100 : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function dl() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function PI(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const qh = {
    default: II,
    x: Dr,
    y: Dr,
    z: Dr,
    rotate: Dr,
    rotateX: Dr,
    rotateY: Dr,
    rotateZ: Dr,
    scaleX: fl,
    scaleY: fl,
    scale: fl,
    backgroundColor: dl,
    color: dl,
    opacity: dl
};
function yv(e, t) {
    let n;
    return RI(t) ? n = PI : n = qh[e] || qh.default,
    {
        to: t,
        ...n(t)
    }
}
const Gh = {
    ...Wo,
    transform: Math.round
}
  , vv = {
    color: jt,
    backgroundColor: jt,
    outlineColor: jt,
    fill: jt,
    stroke: jt,
    borderColor: jt,
    borderTopColor: jt,
    borderRightColor: jt,
    borderBottomColor: jt,
    borderLeftColor: jt,
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
    rotate: Mr,
    rotateX: Mr,
    rotateY: Mr,
    rotateZ: Mr,
    scale: ds,
    scaleX: ds,
    scaleY: ds,
    scaleZ: ds,
    skew: Mr,
    skewX: Mr,
    skewY: Mr,
    distance: _e,
    translateX: _e,
    translateY: _e,
    translateZ: _e,
    x: _e,
    y: _e,
    z: _e,
    perspective: _e,
    transformPerspective: _e,
    opacity: ao,
    originX: Uh,
    originY: Uh,
    originZ: _e,
    zIndex: Gh,
    filter: Cc,
    WebkitFilter: Cc,
    fillOpacity: ao,
    strokeOpacity: ao,
    numOctaves: Gh
}
  , Hu = e=>vv[e];
function bv(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function MI(e, t) {
    let n = Hu(e);
    return n !== Cc && (n = Jo),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const DI = {
    linear: sv,
    easeIn: Uu,
    easeInOut: av,
    easeOut: JR,
    circIn: lv,
    circInOut: zR,
    circOut: cv,
    backIn: xu,
    backInOut: XR,
    backOut: QR,
    anticipate: ZR,
    bounceIn: nI,
    bounceInOut: rI,
    bounceOut: Ws
};
function Wh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,i] = e;
        return bI(t, n, r, i)
    } else if (typeof e == "string")
        return DI[e];
    return e
}
function NI(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function Jh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Jo.test(t) && !t.startsWith("url("))
}
function VI(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function FI({ease: e, times: t, delay: n, ...r}) {
    const i = {
        ...r
    };
    return t && (i.offset = t),
    e && (i.ease = NI(e) ? e.map(Wh) : Wh(e)),
    n && (i.elapsed = -n),
    i
}
function BI(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    VI(t),
    UI(e) || (e = {
        ...e,
        ...yv(n, t.to)
    }),
    {
        ...t,
        ...FI(e)
    }
}
function UI({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: i, ...o}) {
    return !!Object.keys(o).length
}
function xI(e, t) {
    return e[t] || e.default || e
}
function HI(e, t, n, r, i) {
    const o = xI(r, e);
    let s = o.from === null || o.from === void 0 ? t.get() : o.from;
    const a = Jh(e, n);
    s === "none" && a && typeof n == "string" && (s = MI(e, n));
    const l = Jh(e, s);
    function u(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return o.type === "inertia" || o.type === "decay" ? dI({
            ...d,
            ...o
        }) : fv({
            ...BI(o, d, e),
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
function jI() {
    const {motionValues: e, stop: t, get: n} = OI();
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
            const f = HI(i, c, o, a, l);
            c.start(f)
        }
    }
}
function KI(e, t={}, {motionValues: n, push: r, stop: i}=jI()) {
    const o = J(t)
      , s = ce(!1);
    Ye(n, f=>{
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
            return new Promise(b=>r(d, m, e, f.transition || yv(d, f[d]), b))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = Gs(f) ? f : a(f);
            Object.entries(d).forEach(([m,b])=>{
                m !== "transition" && r(m, b, e, {
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
const ju = typeof window < "u"
  , YI = ()=>ju && window.onpointerdown === null
  , qI = ()=>ju && window.ontouchstart === null
  , GI = ()=>ju && window.onmousedown === null;
function WI({target: e, state: t, variants: n, apply: r}) {
    const i = J(n)
      , o = ce(!1)
      , s = ce(!1)
      , a = ce(!1)
      , l = fe(()=>{
        let c = [];
        return i && (i.hovered && (c = [...c, ...Object.keys(i.hovered)]),
        i.tapped && (c = [...c, ...Object.keys(i.tapped)]),
        i.focused && (c = [...c, ...Object.keys(i.focused)])),
        c
    }
    )
      , u = fe(()=>{
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
    i.hovered && (xt(e, "mouseenter", ()=>o.value = !0),
    xt(e, "mouseleave", ()=>{
        o.value = !1,
        s.value = !1
    }
    ),
    xt(e, "mouseout", ()=>{
        o.value = !1,
        s.value = !1
    }
    )),
    i.tapped && (GI() && (xt(e, "mousedown", ()=>s.value = !0),
    xt(e, "mouseup", ()=>s.value = !1)),
    YI() && (xt(e, "pointerdown", ()=>s.value = !0),
    xt(e, "pointerup", ()=>s.value = !1)),
    qI() && (xt(e, "touchstart", ()=>s.value = !0),
    xt(e, "touchend", ()=>s.value = !1))),
    i.focused && (xt(e, "focus", ()=>a.value = !0),
    xt(e, "blur", ()=>a.value = !1)),
    Ye(u, r)
}
function JI({set: e, target: t, variants: n, variant: r}) {
    const i = J(n);
    Ye(()=>t, ()=>{
        i && (i.initial && e("initial"),
        i.enter && (r.value = "enter"))
    }
    , {
        immediate: !0,
        flush: "pre"
    })
}
function zI({state: e, apply: t}) {
    Ye(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function _v({target: e, variants: t, variant: n}) {
    const r = J(t);
    r && (r.visible || r.visibleOnce) && aR(e, ([{isIntersecting: i}])=>{
        r.visible ? i ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (i && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function QI(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && JI(e),
    t.syncVariants && zI(e),
    t.visibilityHooks && _v(e),
    t.eventListeners && WI(e)
}
function Ev(e={}) {
    const t = At({
        ...e
    })
      , n = ce({});
    return Ye(t, ()=>{
        const r = {};
        for (const [i,o] of Object.entries(t)) {
            const s = Hu(i)
              , a = bv(o, s);
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
function Ku(e, t) {
    Ye(()=>oo(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const XI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function Tv(e={}, t=!0) {
    const n = At({
        ...e
    })
      , r = ce("");
    return Ye(n, i=>{
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
            const u = Hu(a)
              , c = bv(l, u);
            o += `${XI[a] || a}(${c}) `
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
const ZI = ["", "X", "Y", "Z"]
  , $I = ["perspective", "translate", "scale", "rotate", "skew"]
  , kv = ["transformPerspective", "x", "y", "z"];
$I.forEach(e=>{
    ZI.forEach(t=>{
        const n = e + t;
        kv.push(n)
    }
    )
}
);
const eP = new Set(kv);
function Yu(e) {
    return eP.has(e)
}
const tP = new Set(["originX", "originY", "originZ"]);
function Sv(e) {
    return tP.has(e)
}
function nP(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,i])=>{
        Yu(r) || Sv(r) ? t[r] = i : n[r] = i
    }
    ),
    {
        transform: t,
        style: n
    }
}
function wv(e) {
    const {transform: t, style: n} = nP(e)
      , {transform: r} = Tv(t)
      , {style: i} = Ev(n);
    return r.value && (i.value.transform = r.value),
    i.value
}
function rP(e, t) {
    let n, r;
    const {state: i, style: o} = Ev();
    return Ku(e, s=>{
        r = s;
        for (const a of Object.keys(vv))
            s.style[a] === null || s.style[a] === "" || Yu(a) || Sv(a) || (i[a] = s.style[a]);
        n && Object.entries(n).forEach(([a,l])=>s.style[a] = l),
        t && t(i)
    }
    ),
    Ye(o, s=>{
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
function iP(e) {
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
function oP(e, t) {
    Object.entries(iP(t)).forEach(([n,r])=>{
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
function sP(e, t) {
    let n, r;
    const {state: i, transform: o} = Tv();
    return Ku(e, s=>{
        r = s,
        s.style.transform && oP(i, s.style.transform),
        n && (s.style.transform = n),
        t && t(i)
    }
    ),
    Ye(o, s=>{
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
function aP(e, t) {
    const n = At({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: i} = rP(e, r)
      , {transform: o} = sP(e, r);
    return Ye(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const u = Yu(a) ? o : i;
            u[a] && u[a] === l || (u[a] = l)
        }
        )
    }
    , {
        immediate: !0,
        deep: !0
    }),
    Ku(e, ()=>t && r(t)),
    {
        motionProperties: n,
        style: i,
        transform: o
    }
}
function lP(e={}) {
    const t = J(e)
      , n = ce();
    return {
        state: fe(()=>{
            if (n.value)
                return t[n.value]
        }
        ),
        variant: n
    }
}
function Av(e, t={}, n) {
    const {motionProperties: r} = aP(e)
      , {variant: i, state: o} = lP(t)
      , s = KI(r, t)
      , a = {
        target: e,
        variant: i,
        variants: t,
        state: o,
        motionProperties: r,
        ...s
    };
    return QI(a, n),
    a
}
const cP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function uP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && Gs(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    cP.forEach(r=>{
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
        if (n && n[r] && Gs(n[r])) {
            const i = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = i
        }
    }
    ))
}
function hl(e) {
    return {
        created: (r,i,o)=>{
            const s = i.value && typeof i.value == "string" ? i.value : o.key;
            s && ul[s] && ul[s].stop();
            const a = ce(e || {});
            typeof i.value == "object" && (a.value = i.value),
            uP(o, a);
            const u = Av(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = u,
            s && (ul[s] = u)
        }
        ,
        mounted: (r,i,o)=>{
            r.motionInstance && _v(r.motionInstance)
        }
        ,
        getSSRProps(r, i) {
            let {initial: o} = r.value || i && (i == null ? void 0 : i.props) || {};
            o = J(o);
            const s = au((e == null ? void 0 : e.initial) || {}, o || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: wv(s)
            }
        }
    }
}
const fP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , dP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , hP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , pP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , mP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}
  , gP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visibleOnce: {
        scale: 1,
        opacity: 1
    }
}
  , yP = {
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
  , vP = {
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
  , bP = {
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
  , _P = {
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
  , EP = {
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
  , TP = {
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
  , kP = {
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
  , SP = {
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
  , wP = {
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
  , AP = {
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
  , LP = {
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
  , CP = {
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
  , OP = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , RP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , IP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , PP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , MP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , DP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , NP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , VP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , FP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , BP = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , UP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , xP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , Oc = {
    __proto__: null,
    fade: fP,
    fadeVisible: dP,
    fadeVisibleOnce: hP,
    pop: pP,
    popVisible: mP,
    popVisibleOnce: gP,
    rollBottom: AP,
    rollLeft: yP,
    rollRight: _P,
    rollTop: kP,
    rollVisibleBottom: LP,
    rollVisibleLeft: vP,
    rollVisibleOnceBottom: CP,
    rollVisibleOnceLeft: bP,
    rollVisibleOnceRight: TP,
    rollVisibleOnceTop: wP,
    rollVisibleRight: EP,
    rollVisibleTop: SP,
    slideBottom: BP,
    slideLeft: OP,
    slideRight: PP,
    slideTop: NP,
    slideVisibleBottom: UP,
    slideVisibleLeft: RP,
    slideVisibleOnceBottom: xP,
    slideVisibleOnceLeft: IP,
    slideVisibleOnceRight: DP,
    slideVisibleOnceTop: FP,
    slideVisibleRight: MP,
    slideVisibleTop: VP
}
  , HP = Ue({
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
        const t = Q0()
          , n = At({});
        if (!e.is && !t.default)
            return ()=>dt("div", {});
        const r = fe(()=>{
            let l;
            return e.preset && (l = Oc[e.preset]),
            l
        }
        )
          , i = fe(()=>({
            initial: e.initial,
            enter: e.enter,
            leave: e.leave,
            visible: e.visible,
            visibleOnce: e.visibleOnce,
            hovered: e.hovered,
            tapped: e.tapped,
            focused: e.focused
        }))
          , o = fe(()=>{
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
          , s = fe(()=>{
            if (!e.is)
                return;
            let l = e.is;
            return typeof s.value == "string" && !Bv(l) && (l = Wr(l)),
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
            Xc(()=>Object.entries(n).forEach(([u,c])=>l(c)))
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
        const i = wv(t.initial || {})
          , o = (l,u)=>(l.props || (l.props = {}),
        l.props.style = i,
        l.props.onVnodeMounted = ({el: c})=>{
            const f = Av(c, t);
            n[u] = f
        }
        ,
        l);
        if (r) {
            const l = dt(r, void 0, e);
            return o(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,u)=>o(l, u))
    }
});
function jP(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, i=>`-${i}`).toLowerCase().replace(/\s+/g, "-").replace(r, i=>n.charAt(t.indexOf(i))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const KP = {
    install(e, t) {
        if (e.directive("motion", hl()),
        e.component("Motion", HP),
        !t || t && !t.excludePresets)
            for (const n in Oc) {
                const r = Oc[n];
                e.directive(`motion-${jP(n)}`, hl(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, hl(r))
            }
    }
}
  , YP = Bt(e=>{
    const t = zn();
    e.vueApp.use(KP, t.public.motion)
}
)
  , qP = Bt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Xt()
          , n = zn()
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
            const a = "href"in o && o.href[0] === "#" ? n.app.baseURL + o.href : Pi(n.app.baseURL, o.fullPath);
            hO({
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
function GP(e) {
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
const WP = Bt(()=>{
    const e = GP();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , JP = [YT, GT, cO, fO, dO, yO, vO, bO, KO, q1, G1, Z1, YP, qP, WP]
  , zP = Ue({
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
        return Yr(Bo, Ri(r)),
        ()=>dt(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , QP = Ue({
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
          , i = ce()
          , o = wt(Bo, null);
        let s;
        n({
            pageRef: i
        });
        const a = wt(wm, null);
        let l;
        const u = r.deferHydration();
        if (r.isHydrating) {
            const c = r.hooks.hookOnce("app:error", u);
            Xt().beforeEach(c)
        }
        return e.pageKey && Ye(()=>e.pageKey, (c,f)=>{
            c !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>dt(ng, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: c=>{
                const f = ZP(o, c.route, c.Component)
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
                const m = Ql(c, e.pageKey);
                !r.isHydrating && !$P(o, c.route, c.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const b = !!(e.transition ?? c.route.meta.pageTransition ?? Gl)
                  , _ = b && XP([e.transition, c.route.meta.pageTransition, Gl, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", c.Component)
                    }
                }].filter(Boolean))
                  , S = e.keepalive ?? c.route.meta.keepalive ?? VT;
                return l = rg(No, b && _, Xk(S, dt(Jc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", c.Component),
                    onResolve: ()=>{
                        zt(()=>r.callHook("page:finish", c.Component).then(()=>r.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: ()=>{
                        const g = dt(zP, {
                            key: m || void 0,
                            vnode: c.Component,
                            route: c.route,
                            renderKey: m || void 0,
                            trackRootNodes: b,
                            vnodeRef: i
                        });
                        return S && (g.type.name = c.Component.type.name || c.Component.type.__name || "RouteProvider"),
                        g
                    }
                }))).default(),
                l
            }
        })
    }
});
function XP(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? hu(n.onAfterLeave) : void 0
    }));
    return au(...t)
}
function ZP(e, t, n) {
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
    ) || n && Ql({
        route: t,
        Component: n
    }) !== Ql({
        route: e,
        Component: n
    })
}
function $P(e, t, n) {
    return e ? t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const eM = Ue({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await pr[e.name]().then(r=>r.default || r);
        return ()=>dt(n, e.layoutProps, t.slots)
    }
})
  , tM = Ue({
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
          , r = wt(Bo)
          , i = r === la() ? zk() : r
          , o = fe(()=>{
            let l = J(e.name) ?? i.meta.layout ?? "default";
            return l && !(l in pr) && e.fallback && (l = J(e.fallback)),
            l
        }
        )
          , s = ce();
        t.expose({
            layoutRef: s
        });
        const a = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", a);
            Xt().beforeEach(l)
        }
        return ()=>{
            const l = o.value && o.value in pr
              , u = i.meta.layoutTransition ?? NT;
            return rg(No, l && u, {
                default: ()=>dt(Jc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        zt(a)
                    }
                }, {
                    default: ()=>dt(nM, {
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
  , nM = Ue({
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
        return e.shouldProvide && Yr(wm, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, i;
            return !n || typeof n == "string" && !(n in pr) ? (i = (r = t.slots).default) == null ? void 0 : i.call(r) : dt(eM, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , rM = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , iM = {};
function oM(e, t) {
    const n = QP
      , r = tM;
    return me(),
    Tt(r, null, {
        default: fn(()=>[et(n)]),
        _: 1
    })
}
const sM = rM(iM, [["render", oM]])
  , aM = ["innerHTML"]
  , lM = Ue({
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
            "/assets/svg/icons/ln-geo.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-geo.Db1Pr5p9.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-globe.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-globe.CL49zxhn.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-mail.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-mail.DuVxPIIt.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-marker.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-marker.DbIAmffn.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-medium.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-medium.BrOe8wIZ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-telegram.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-telegram.cBOmGQCr.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-x.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-x.CdWKHoAz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-youtube.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ln-youtube.q1Uak5_E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-background.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-background.DLKaIbsv.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-blue.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-blue.D0sMko0t.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-image.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-image.DD2lTtqq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-yellow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading-yellow.BmzMALSJ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/loading.D5-YfgbB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/lock.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/lock.FuE0uKjd.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/markets.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/markets.Bq8f52NT.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/medal-gradient.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/medal-gradient.BJt4jnRV.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/medal.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/medal.CqNqzNKF.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/not-support-phone-glow.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/not-support-phone-glow.BSB35vgE.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/refresh.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/refresh.BvInaMMK.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/robots.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/robots.BmOab4DB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/settings.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/settings.CezmlWen.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ticket.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ticket.DQ5Qpq-5.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/wallet.svg": ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/wallet.3o12uypq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default)
        })).map(([s,a])=>[s.split("/").pop().split(".").shift(), a]))
          , o = r.name && ([t,n] = Z0(()=>{
            var s;
            return (s = i == null ? void 0 : i[r.name]) == null ? void 0 : s.call(i)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>J(o) ? (me(),
        ze("div", {
            key: 0,
            class: "icon",
            innerHTML: J(o)
        }, null, 8, aM)) : Wt("", !0)
    }
})
  , cM = {
    class: "is-token"
}
  , uM = ["srcset", "alt"]
  , fM = ["src", "alt"]
  , dM = Ue({
    __name: "Token",
    setup(e) {
        return (t,n)=>(me(),
        ze("picture", cM, [ge("source", {
            srcset: J(cc).TOKEN_WEBP,
            type: "image/webp",
            alt: J(en).GAME_NAME
        }, null, 8, uM), ge("img", {
            class: "img-responsive",
            src: J(cc).TOKEN,
            alt: J(en).GAME_NAME
        }, null, 8, fM)]))
    }
})
  , zh = ny({
    componentName: "NuxtLinkLocale"
})
  , hM = Ue({
    name: "NuxtLinkLocale",
    props: {
        ...zh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = Wg()
          , r = fe(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , i = fe(()=>{
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
        return ()=>dt(zh, o(), t.default)
    }
});
function pM() {
    return xn
}
const mM = {
    class: "ln"
}
  , gM = {
    class: "ln-header"
}
  , yM = {
    class: "ln-header-left"
}
  , vM = {
    class: "ln-header-social"
}
  , bM = ["href"]
  , _M = ["href"]
  , EM = ["innerHTML"]
  , TM = {
    class: "ln-header-center"
}
  , kM = {
    class: "ln-header-center-logo"
}
  , SM = {
    class: "ln-header-right"
}
  , wM = {
    class: "button"
}
  , AM = ["innerHTML"]
  , LM = ge("span", null, "coming soon", -1)
  , CM = {
    class: "ln-content"
}
  , OM = {
    key: 0
}
  , RM = {
    class: "is-small-text"
}
  , IM = {
    key: 1,
    class: "is-small-text"
}
  , PM = {
    key: 2,
    class: "is-small-text"
}
  , MM = {
    class: "ln-content-button"
}
  , DM = ["innerHTML"]
  , NM = ge("div", {
    class: "ln-bottom"
}, null, -1)
  , VM = Ue({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var s;
        const t = Jt()
          , n = e;
        RT({
            title: `${((s = n.error) == null ? void 0 : s.statusCode) ?? 500} - ${en.GAME_NAME}`
        });
        const r = ce("")
          , i = pM()
          , o = ce(i.tz.guess());
        return Ft(()=>{
            r.value = navigator.userAgent,
            setTimeout(()=>{
                var a;
                Ve().trackEvent(`error_${((a = n.error) == null ? void 0 : a.statusCode) ?? 500}`, {
                    timezone: o.value,
                    userAgent: r.value
                })
            }
            , 1e3)
        }
        ),
        (a,l)=>{
            var d, m, b;
            const u = lM
              , c = dM
              , f = hM;
            return me(),
            ze("main", mM, [ge("div", gM, [ge("div", yM, [ge("div", vM, [ge("a", {
                class: "is-x",
                href: J(t).link_twitter,
                target: "_blank"
            }, [et(u, {
                name: "ln-x"
            })], 8, bM), ge("a", {
                class: "is-telegram",
                href: J(t).link_telegram,
                target: "_blank"
            }, [et(u, {
                name: "ln-telegram"
            })], 8, _M), ge("p", {
                innerHTML: a.$t("landing.join_us")
            }, null, 8, EM)])]), ge("div", TM, [ge("div", kM, [et(c)]), ge("p", null, tn(J(en).GAME_NAME), 1)]), ge("div", SM, [ge("button", wM, [ge("p", {
                innerHTML: a.$t("landing.whitepaper")
            }, null, 8, AM), et(u, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), LM])])]), ge("div", CM, [ge("h1", null, tn(e.error.statusCode ?? 500), 1), (d = e.error) != null && d.statusMessage ? (me(),
            ze("p", OM, "Status: " + tn(((m = e.error) == null ? void 0 : m.statusMessage) ?? ""), 1)) : Wt("", !0), ge("p", RM, tn((b = e.error) == null ? void 0 : b.toJSON()), 1), J(r) ? (me(),
            ze("p", IM, "User Agent: " + tn(J(r)), 1)) : Wt("", !0), J(o) ? (me(),
            ze("p", PM, "TimeZone: " + tn(J(o)), 1)) : Wt("", !0), ge("div", MM, [et(f, {
                class: "button",
                to: J(jo).LANDING
            }, {
                default: fn(()=>[ge("span", {
                    innerHTML: a.$t("buttons.home")
                }, null, 8, DM)]),
                _: 1
            }, 8, ["to"])])]), NM])
        }
    }
})
  , Qh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = re()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            Xt().beforeEach(a)
        }
        const i = !1;
        Yr(Bo, la()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const o = ca();
        Bp((a,l,u)=>{
            if (n.hooks.callHook("vue:error", a, l, u).catch(c=>console.error("[nuxt] Error in `vue:error` hook", c)),
            DE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>ai(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(me(),
        Tt(Jc, {
            onResolve: J(r)
        }, {
            default: fn(()=>[J(o) ? (me(),
            Tt(J(VM), {
                key: 0,
                error: J(o)
            }, null, 8, ["error"])) : J(s) ? (me(),
            Tt(J(t), {
                key: 1,
                context: J(s)
            }, null, 8, ["context"])) : J(i) ? (me(),
            Tt(_l(J(i)), {
                key: 2
            })) : (me(),
            Tt(J(sM), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Xh;
{
    let e;
    Xh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? s_(Qh) : lm(Qh)
          , i = uE({
            vueApp: r
        });
        async function o(l) {
            await i.callHook("app:error", l),
            i.payload.error = i.payload.error || ua(l)
        }
        r.config.errorHandler = o;
        try {
            await dE(i, JP)
        } catch (l) {
            o(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(BT),
            await i.hooks.callHook("app:mounted", r),
            await zt()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = Xh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {zM as $, VL as A, tD as B, en as C, Rt as D, FM as E, yt as F, BM as G, UL as H, AL as I, xM as J, dM as K, xL as L, LL as M, Wg as N, Ct as O, Uo as P, PL as Q, WM as R, rM as S, uc as T, jo as U, jC as V, hM as W, pM as X, CL as Y, JM as Z, lM as _, ge as a, ML as a0, hn as a1, je as a2, To as a3, gt as a4, em as a5, Vg as a6, QM as a7, XM as a8, Dn as a9, cc as aA, zn as aB, UM as aC, RT as aD, Nm as aE, Ii as aF, tt as aG, rD as aH, No as aI, _l as aJ, _i as aK, Av as aL, la as aM, qM as aN, KL as aO, QP as aP, KM as aQ, eD as aR, GM as aS, YM as aT, ZM as aU, fn as aa, uh as ab, HM as ac, ct as ad, jM as ae, rl as af, nl as ag, DL as ah, NL as ai, k as aj, IL as ak, Z0 as al, RL as am, OL as an, FL as ao, Wr as ap, At as aq, Yr as ar, Xc as as, Ye as at, zt as au, dt as av, Y0 as aw, BL as ax, $M as ay, Tr as az, et as b, ze as c, Ue as d, Tt as e, fe as f, J as g, Ve as h, _t as i, Di as j, nD as k, ey as l, Ot as m, Nt as n, me as o, ce as p, vn as q, J0 as r, re as s, Jt as t, ga as u, Ft as v, Sn as w, tn as x, pt as y, Wt as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["https://hamsterkombatgame.io/_nuxt/ads.Gl66IzE-.js", "https://hamsterkombatgame.io/_nuxt/LandingHeader.vue.zxyg8fWy.js", "https://hamsterkombatgame.io/_nuxt/AvatarImage.vue.Bt-sphGK.js", "https://hamsterkombatgame.io/_nuxt/airdrop.C7-xFpgH.js", "https://hamsterkombatgame.io/_nuxt/Image.vue.Dm1sTanq.js", "https://hamsterkombatgame.io/_nuxt/airdrop.mf7_HrWO.js", "https://hamsterkombatgame.io/_nuxt/Preloader.vue.CzC257sM.js", "https://hamsterkombatgame.io/_nuxt/boost.BpCDvtYt.js", "https://hamsterkombatgame.io/_nuxt/BalanceLarge.vue.B5-HqNCK.js", "https://hamsterkombatgame.io/_nuxt/Price.vue.BAfqKZcn.js", "https://hamsterkombatgame.io/_nuxt/earn.DiiLPDHt.js", "https://hamsterkombatgame.io/_nuxt/attraction.C-nm4vE2.js", "https://hamsterkombatgame.io/_nuxt/friends.3AMh8-hZ.js", "https://hamsterkombatgame.io/_nuxt/index.C4vacfDc.js", "https://hamsterkombatgame.io/_nuxt/Earn.vue.vWEw3fVt.js", "https://hamsterkombatgame.io/_nuxt/image.vue.DTTXynNV.js", "https://hamsterkombatgame.io/_nuxt/Hamster.vue.BknuNm7J.js", "https://hamsterkombatgame.io/_nuxt/navigation.CJ3cBfsp.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.D_8_PvY9.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.vkSr05gD.css", "https://hamsterkombatgame.io/_nuxt/navigation.Bw5XmvsK.css", "https://hamsterkombatgame.io/_nuxt/MiniGameLose.vue.oX6omIHy.js", "https://hamsterkombatgame.io/_nuxt/index.qoVQlhKV.js", "https://hamsterkombatgame.io/_nuxt/mine.B5ZK-nt_.js", "https://hamsterkombatgame.io/_nuxt/playground.AJXmlJS8.js", "https://hamsterkombatgame.io/_nuxt/bingx.C_6SocBm.js", "https://hamsterkombatgame.io/_nuxt/exchange.xNPDe0Uv.js", "https://hamsterkombatgame.io/_nuxt/index.BkrzJFbl.js", "https://hamsterkombatgame.io/_nuxt/achievements.lMRubX7N.js", "https://hamsterkombatgame.io/_nuxt/AchievementStat.vue.CGuXj_Yr.js", "https://hamsterkombatgame.io/_nuxt/Circles.vue.D7i1ut-X.js", "https://hamsterkombatgame.io/_nuxt/index.OQLxFaRF.js", "https://hamsterkombatgame.io/_nuxt/index.C7E22D-o.js", "https://hamsterkombatgame.io/_nuxt/privacy-policy.ggf0APpg.js", "https://hamsterkombatgame.io/_nuxt/default.9Z5k6PdL.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
