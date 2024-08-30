const ABSOLUTE_PATH = 'https://hamsterkombatgame.io/_nuxt/';

/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xs(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const ot = {}
  , ci = []
  , sn = ()=>{}
  , Ov = ()=>!1
  , Po = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Ic = e=>e.startsWith("onUpdate:")
  , bt = Object.assign
  , Pc = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Cv = Object.prototype.hasOwnProperty
  , Ge = (e,t)=>Cv.call(e, t)
  , de = Array.isArray
  , ui = e=>Mo(e) === "[object Map]"
  , $h = e=>Mo(e) === "[object Set]"
  , Rv = e=>Mo(e) === "[object RegExp]"
  , ge = e=>typeof e == "function"
  , at = e=>typeof e == "string"
  , Ri = e=>typeof e == "symbol"
  , it = e=>e !== null && typeof e == "object"
  , Mc = e=>(it(e) || ge(e)) && ge(e.then) && ge(e.catch)
  , ep = Object.prototype.toString
  , Mo = e=>ep.call(e)
  , Iv = e=>Mo(e).slice(8, -1)
  , tp = e=>Mo(e) === "[object Object]"
  , Dc = e=>at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , fi = Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Zs = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Pv = /-(\w)/g
  , Bn = Zs(e=>e.replace(Pv, (t,n)=>n ? n.toUpperCase() : ""))
  , Mv = /\B([A-Z])/g
  , Zr = Zs(e=>e.replace(Mv, "-$1").toLowerCase())
  , $s = Zs(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Ia = Zs(e=>e ? `on${$s(e)}` : "")
  , Tr = (e,t)=>!Object.is(e, t)
  , di = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , Ss = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , ml = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , np = e=>{
    const t = at(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Ju;
const rp = ()=>Ju || (Ju = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nn(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = at(r) ? Fv(r) : Nn(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (at(e) || it(e))
        return e
}
const Dv = /;(?![^(]*\))/g
  , Nv = /:([^]+)/
  , Vv = /\/\*[^]*?\*\//g;
function Fv(e) {
    const t = {};
    return e.replace(Vv, "").split(Dv).forEach(n=>{
        if (n) {
            const r = n.split(Nv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Nt(e) {
    let t = "";
    if (at(e))
        t = e;
    else if (de(e))
        for (let n = 0; n < e.length; n++) {
            const r = Nt(e[n]);
            r && (t += r + " ")
        }
    else if (it(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function fn(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !at(t) && (e.class = Nt(t)),
    n && (e.style = Nn(n)),
    e
}
const Bv = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , Uv = Xs(Bv)
  , xv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Hv = Xs(xv);
function ip(e) {
    return !!e || e === ""
}
const tn = e=>at(e) ? e : e == null ? "" : de(e) || it(e) && (e.toString === ep || !ge(e.toString)) ? JSON.stringify(e, op, 2) : String(e)
  , op = (e,t)=>t && t.__v_isRef ? op(e, t.value) : ui(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,i],o)=>(n[Pa(r, o) + " =>"] = i,
    n), {})
} : $h(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Pa(n))
} : Ri(t) ? Pa(t) : it(t) && !de(t) && !tp(t) ? String(t) : t
  , Pa = (e,t="")=>{
    var n;
    return Ri(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wt;
class sp {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Wt,
        !t && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Wt;
            try {
                return Wt = this,
                t()
            } finally {
                Wt = n
            }
        }
    }
    on() {
        Wt = this
    }
    off() {
        Wt = this.parent
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
function Do(e) {
    return new sp(e)
}
function jv(e, t=Wt) {
    t && t.active && t.effects.push(e)
}
function No() {
    return Wt
}
function ea(e) {
    Wt && Wt.cleanups.push(e)
}
let jr;
class Nc {
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
        jv(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            $r();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Kv(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            ei()
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
          , n = jr;
        try {
            return gr = !0,
            jr = this,
            this._runnings++,
            zu(this),
            this.fn()
        } finally {
            Qu(this),
            this._runnings--,
            jr = n,
            gr = t
        }
    }
    stop() {
        var t;
        this.active && (zu(this),
        Qu(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Kv(e) {
    return e.value
}
function zu(e) {
    e._trackId++,
    e._depsLength = 0
}
function Qu(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            ap(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function ap(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let gr = !0
  , yl = 0;
const lp = [];
function $r() {
    lp.push(gr),
    gr = !1
}
function ei() {
    const e = lp.pop();
    gr = e === void 0 ? !0 : e
}
function Vc() {
    yl++
}
function Fc() {
    for (yl--; !yl && gl.length; )
        gl.shift()()
}
function cp(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && ap(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const gl = [];
function up(e, t, n) {
    Vc();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && gl.push(r.scheduler)))
    }
    Fc()
}
const fp = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , ws = new WeakMap
  , Kr = Symbol("")
  , vl = Symbol("");
function Yt(e, t, n) {
    if (gr && jr) {
        let r = ws.get(e);
        r || ws.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = fp(()=>r.delete(n))),
        cp(jr, i)
    }
}
function Wn(e, t, n, r, i, o) {
    const s = ws.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && de(e)) {
        const l = Number(r);
        s.forEach((u,c)=>{
            (c === "length" || !Ri(c) && c >= l) && a.push(u)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            de(e) ? Dc(n) && a.push(s.get("length")) : (a.push(s.get(Kr)),
            ui(e) && a.push(s.get(vl)));
            break;
        case "delete":
            de(e) || (a.push(s.get(Kr)),
            ui(e) && a.push(s.get(vl)));
            break;
        case "set":
            ui(e) && a.push(s.get(Kr));
            break
        }
    Vc();
    for (const l of a)
        l && up(l, 4);
    Fc()
}
function Yv(e, t) {
    var n;
    return (n = ws.get(e)) == null ? void 0 : n.get(t)
}
const qv = Xs("__proto__,__v_isRef,__isVue")
  , dp = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Ri))
  , Xu = Gv();
function Gv() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = Be(this);
            for (let o = 0, s = this.length; o < s; o++)
                Yt(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(Be)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            $r(),
            Vc();
            const r = Be(this)[t].apply(this, n);
            return Fc(),
            ei(),
            r
        }
    }
    ),
    e
}
function Wv(e) {
    const t = Be(this);
    return Yt(t, "has", e),
    t.hasOwnProperty(e)
}
class hp {
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
            return r === (i ? o ? s0 : gp : o ? yp : mp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = de(t);
        if (!i) {
            if (s && Ge(Xu, n))
                return Reflect.get(Xu, n, r);
            if (n === "hasOwnProperty")
                return Wv
        }
        const a = Reflect.get(t, n, r);
        return (Ri(n) ? dp.has(n) : qv(n)) || (i || Yt(t, "get", n),
        o) ? a : ut(a) ? s && Dc(n) ? a : a.value : it(a) ? i ? pr(a) : Lt(a) : a
    }
}
class pp extends hp {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Wr(o);
            if (!As(r) && !Wr(r) && (o = Be(o),
            r = Be(r)),
            !de(t) && ut(o) && !ut(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const s = de(t) && Dc(n) ? Number(n) < t.length : Ge(t, n)
          , a = Reflect.set(t, n, r, i);
        return t === Be(i) && (s ? Tr(r, o) && Wn(t, "set", n, r) : Wn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = Ge(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && Wn(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Ri(n) || !dp.has(n)) && Yt(t, "has", n),
        r
    }
    ownKeys(t) {
        return Yt(t, "iterate", de(t) ? "length" : Kr),
        Reflect.ownKeys(t)
    }
}
class Jv extends hp {
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
const zv = new pp
  , Qv = new Jv
  , Xv = new pp(!0)
  , Bc = e=>e
  , ta = e=>Reflect.getPrototypeOf(e);
function Xo(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = Be(e)
      , o = Be(t);
    n || (Tr(t, o) && Yt(i, "get", t),
    Yt(i, "get", o));
    const {has: s} = ta(i)
      , a = r ? Bc : n ? Hc : fo;
    if (s.call(i, t))
        return a(e.get(t));
    if (s.call(i, o))
        return a(e.get(o));
    e !== i && e.get(t)
}
function Zo(e, t=!1) {
    const n = this.__v_raw
      , r = Be(n)
      , i = Be(e);
    return t || (Tr(e, i) && Yt(r, "has", e),
    Yt(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function $o(e, t=!1) {
    return e = e.__v_raw,
    !t && Yt(Be(e), "iterate", Kr),
    Reflect.get(e, "size", e)
}
function Zu(e) {
    e = Be(e);
    const t = Be(this);
    return ta(t).has.call(t, e) || (t.add(e),
    Wn(t, "add", e, e)),
    this
}
function $u(e, t) {
    t = Be(t);
    const n = Be(this)
      , {has: r, get: i} = ta(n);
    let o = r.call(n, e);
    o || (e = Be(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? Tr(t, s) && Wn(n, "set", e, t) : Wn(n, "add", e, t),
    this
}
function ef(e) {
    const t = Be(this)
      , {has: n, get: r} = ta(t);
    let i = n.call(t, e);
    i || (e = Be(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && Wn(t, "delete", e, void 0),
    o
}
function tf() {
    const e = Be(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Wn(e, "clear", void 0, void 0),
    n
}
function es(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , a = Be(s)
          , l = t ? Bc : e ? Hc : fo;
        return !e && Yt(a, "iterate", Kr),
        s.forEach((u,c)=>r.call(i, l(u), l(c), o))
    }
}
function ts(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = Be(i)
          , s = ui(o)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , u = i[e](...r)
          , c = n ? Bc : t ? Hc : fo;
        return !t && Yt(o, "iterate", l ? vl : Kr),
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
function Zn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Zv() {
    const e = {
        get(o) {
            return Xo(this, o)
        },
        get size() {
            return $o(this)
        },
        has: Zo,
        add: Zu,
        set: $u,
        delete: ef,
        clear: tf,
        forEach: es(!1, !1)
    }
      , t = {
        get(o) {
            return Xo(this, o, !1, !0)
        },
        get size() {
            return $o(this)
        },
        has: Zo,
        add: Zu,
        set: $u,
        delete: ef,
        clear: tf,
        forEach: es(!1, !0)
    }
      , n = {
        get(o) {
            return Xo(this, o, !0)
        },
        get size() {
            return $o(this, !0)
        },
        has(o) {
            return Zo.call(this, o, !0)
        },
        add: Zn("add"),
        set: Zn("set"),
        delete: Zn("delete"),
        clear: Zn("clear"),
        forEach: es(!0, !1)
    }
      , r = {
        get(o) {
            return Xo(this, o, !0, !0)
        },
        get size() {
            return $o(this, !0)
        },
        has(o) {
            return Zo.call(this, o, !0)
        },
        add: Zn("add"),
        set: Zn("set"),
        delete: Zn("delete"),
        clear: Zn("clear"),
        forEach: es(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o=>{
        e[o] = ts(o, !1, !1),
        n[o] = ts(o, !0, !1),
        t[o] = ts(o, !1, !0),
        r[o] = ts(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [$v,e0,t0,n0] = Zv();
function Uc(e, t) {
    const n = t ? e ? n0 : t0 : e ? e0 : $v;
    return (r,i,o)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(Ge(n, i) && i in r ? n : r, i, o)
}
const r0 = {
    get: Uc(!1, !1)
}
  , i0 = {
    get: Uc(!1, !0)
}
  , o0 = {
    get: Uc(!0, !1)
}
  , mp = new WeakMap
  , yp = new WeakMap
  , gp = new WeakMap
  , s0 = new WeakMap;
function a0(e) {
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
function l0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : a0(Iv(e))
}
function Lt(e) {
    return Wr(e) ? e : xc(e, !1, zv, r0, mp)
}
function Ii(e) {
    return xc(e, !1, Xv, i0, yp)
}
function pr(e) {
    return xc(e, !0, Qv, o0, gp)
}
function xc(e, t, n, r, i) {
    if (!it(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = l0(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return i.set(e, a),
    a
}
function vr(e) {
    return Wr(e) ? vr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Wr(e) {
    return !!(e && e.__v_isReadonly)
}
function As(e) {
    return !!(e && e.__v_isShallow)
}
function vp(e) {
    return vr(e) || Wr(e)
}
function Be(e) {
    const t = e && e.__v_raw;
    return t ? Be(t) : e
}
function mt(e) {
    return Object.isExtensible(e) && Ss(e, "__v_skip", !0),
    e
}
const fo = e=>it(e) ? Lt(e) : e
  , Hc = e=>it(e) ? pr(e) : e;
class bp {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Nc(()=>t(this._value),()=>hi(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = Be(this);
        return (!t._cacheable || t.effect.dirty) && Tr(t._value, t._value = t.effect.run()) && hi(t, 4),
        jc(t),
        t.effect._dirtyLevel >= 2 && hi(t, 2),
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
function c0(e, t, n=!1) {
    let r, i;
    const o = ge(e);
    return o ? (r = e,
    i = sn) : (r = e.get,
    i = e.set),
    new bp(r,i,o || !i,n)
}
function jc(e) {
    var t;
    gr && jr && (e = Be(e),
    cp(jr, (t = e.dep) != null ? t : e.dep = fp(()=>e.dep = void 0, e instanceof bp ? e : void 0)))
}
function hi(e, t=4, n) {
    e = Be(e);
    const r = e.dep;
    r && up(r, t)
}
function ut(e) {
    return !!(e && e.__v_isRef === !0)
}
function ce(e) {
    return _p(e, !1)
}
function En(e) {
    return _p(e, !0)
}
function _p(e, t) {
    return ut(e) ? e : new u0(e,t)
}
class u0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Be(t),
        this._value = n ? t : fo(t)
    }
    get value() {
        return jc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || As(t) || Wr(t);
        t = n ? t : Be(t),
        Tr(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : fo(t),
        hi(this, 4))
    }
}
function Ep(e) {
    hi(e, 4)
}
function J(e) {
    return ut(e) ? e.value : e
}
const f0 = {
    get: (e,t,n)=>J(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const i = e[t];
        return ut(i) && !ut(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Tp(e) {
    return vr(e) ? e : new Proxy(e,f0)
}
class d0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>jc(this), ()=>hi(this));
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
function kp(e) {
    return new d0(e)
}
function Kc(e) {
    const t = de(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Sp(e, n);
    return t
}
class h0 {
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
        return Yv(Be(this._object), this._key)
    }
}
class p0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function ai(e, t, n) {
    return ut(e) ? e : ge(e) ? new p0(e) : it(e) && arguments.length > 1 ? Sp(e, t, n) : ce(e)
}
function Sp(e, t, n) {
    const r = e[t];
    return ut(r) ? r : new h0(e,t,n)
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function br(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        Vo(i, t, n)
    }
}
function cn(e, t, n, r) {
    if (ge(e)) {
        const o = br(e, t, n, r);
        return o && Mc(o) && o.catch(s=>{
            Vo(s, t, n)
        }
        ),
        o
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        i.push(cn(e[o], t, n, r));
    return i
}
function Vo(e, t, n, r=!0) {
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
            br(l, null, 10, [e, s, a]);
            return
        }
    }
    m0(e, n, i, r)
}
function m0(e, t, n, r=!0) {
    console.error(e)
}
let ho = !1
  , bl = !1;
const It = [];
let In = 0;
const pi = [];
let lr = null
  , Ur = 0;
const wp = Promise.resolve();
let Yc = null;
function zt(e) {
    const t = Yc || wp;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function y0(e) {
    let t = In + 1
      , n = It.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = It[r]
          , o = po(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function qc(e) {
    (!It.length || !It.includes(e, ho && e.allowRecurse ? In + 1 : In)) && (e.id == null ? It.push(e) : It.splice(y0(e.id), 0, e),
    Ap())
}
function Ap() {
    !ho && !bl && (bl = !0,
    Yc = wp.then(Lp))
}
function g0(e) {
    const t = It.indexOf(e);
    t > In && It.splice(t, 1)
}
function _l(e) {
    de(e) ? pi.push(...e) : (!lr || !lr.includes(e, e.allowRecurse ? Ur + 1 : Ur)) && pi.push(e),
    Ap()
}
function nf(e, t, n=ho ? In + 1 : 0) {
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
function Ls(e) {
    if (pi.length) {
        const t = [...new Set(pi)].sort((n,r)=>po(n) - po(r));
        if (pi.length = 0,
        lr) {
            lr.push(...t);
            return
        }
        for (lr = t,
        Ur = 0; Ur < lr.length; Ur++)
            lr[Ur]();
        lr = null,
        Ur = 0
    }
}
const po = e=>e.id == null ? 1 / 0 : e.id
  , v0 = (e,t)=>{
    const n = po(e) - po(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Lp(e) {
    bl = !1,
    ho = !0,
    It.sort(v0);
    try {
        for (In = 0; In < It.length; In++) {
            const t = It[In];
            t && t.active !== !1 && br(t, null, 14)
        }
    } finally {
        In = 0,
        It.length = 0,
        Ls(),
        ho = !1,
        Yc = null,
        (It.length || pi.length) && Lp()
    }
}
function b0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || ot;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const c = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[c] || ot;
        d && (i = n.map(m=>at(m) ? m.trim() : m)),
        f && (i = n.map(ml))
    }
    let a, l = r[a = Ia(t)] || r[a = Ia(Bn(t))];
    !l && o && (l = r[a = Ia(Zr(t))]),
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
function Op(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let s = {}
      , a = !1;
    if (!ge(e)) {
        const l = u=>{
            const c = Op(u, t, !0);
            c && (a = !0,
            bt(s, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (it(e) && r.set(e, null),
    null) : (de(o) ? o.forEach(l=>s[l] = null) : bt(s, o),
    it(e) && r.set(e, s),
    s)
}
function na(e, t) {
    return !e || !Po(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ge(e, t[0].toLowerCase() + t.slice(1)) || Ge(e, Zr(t)) || Ge(e, t))
}
let yt = null
  , ra = null;
function Os(e) {
    const t = yt;
    return yt = e,
    ra = e && e.type.__scopeId || null,
    t
}
function _0(e) {
    ra = e
}
function E0() {
    ra = null
}
const T0 = e=>dn;
function dn(e, t=yt, n) {
    if (!t || e._n)
        return e;
    const r = (...i)=>{
        r._d && gf(-1);
        const o = Os(t);
        let s;
        try {
            s = e(...i)
        } finally {
            Os(o),
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
function Ma(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, props: o, propsOptions: [s], slots: a, attrs: l, emit: u, render: c, renderCache: f, data: d, setupState: m, ctx: b, inheritAttrs: _} = e;
    let S, y;
    const E = Os(e);
    try {
        if (n.shapeFlag & 4) {
            const g = i || r
              , T = g;
            S = nn(c.call(T, g, f, o, m, d, b)),
            y = l
        } else {
            const g = t;
            S = nn(g.length > 1 ? g(o, {
                attrs: l,
                slots: a,
                emit: u
            }) : g(o, null)),
            y = t.props ? l : S0(l)
        }
    } catch (g) {
        Ji.length = 0,
        Vo(g, e, 1),
        S = tt(Vt)
    }
    let p = S;
    if (y && _ !== !1) {
        const g = Object.keys(y)
          , {shapeFlag: T} = p;
        g.length && T & 7 && (s && g.some(Ic) && (y = w0(y, s)),
        p = Jn(p, y))
    }
    return n.dirs && (p = Jn(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    S = p,
    Os(E),
    S
}
function k0(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (_i(i)) {
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
const S0 = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Po(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , w0 = (e,t)=>{
    const n = {};
    for (const r in e)
        (!Ic(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function A0(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: a, patchFlag: l} = t
      , u = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? rf(r, s, u) : !!s;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (s[d] !== r[d] && !na(u, d))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? rf(r, s, u) : !0 : !!s;
    return !1
}
function rf(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !na(n, o))
            return !0
    }
    return !1
}
function Gc({vnode: e, parent: t}, n) {
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
const Wc = "components"
  , L0 = "directives";
function Jr(e, t) {
    return Jc(Wc, e, !0, t) || e
}
const Cp = Symbol.for("v-ndc");
function El(e) {
    return at(e) ? Jc(Wc, e, !1) || e : e || Cp
}
function BM(e) {
    return Jc(L0, e)
}
function Jc(e, t, n=!0, r=!1) {
    const i = yt || kt;
    if (i) {
        const o = i.type;
        if (e === Wc) {
            const a = Ml(o, !1);
            if (a && (a === t || a === Bn(t) || a === $s(Bn(t))))
                return o
        }
        const s = of(i[e] || o[e], t) || of(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function of(e, t) {
    return e && (e[t] || e[Bn(t)] || e[$s(Bn(t))])
}
const Rp = e=>e.__isSuspense;
let Tl = 0;
const O0 = {
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
            R0(e, t, n, r, i, s, a, l, u)
        }
    },
    hydrate: I0,
    create: Qc,
    normalize: P0
}
  , zc = O0;
function mo(e, t) {
    const n = e.props && e.props[t];
    ge(n) && n()
}
function C0(e, t, n, r, i, o, s, a, l) {
    const {p: u, o: {createElement: c}} = l
      , f = c("div")
      , d = e.suspense = Qc(e, i, r, t, f, n, o, s, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, o, s),
    d.deps > 0 ? (mo(e, "onPending"),
    mo(e, "onFallback"),
    u(null, e.ssFallback, t, n, r, null, o, s),
    mi(d, e.ssFallback)) : d.resolve(!1, !0)
}
function R0(e, t, n, r, i, o, s, a, {p: l, um: u, o: {createElement: c}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: b, pendingBranch: _, isInFallback: S, isHydrating: y} = f;
    if (_)
        f.pendingBranch = d,
        gn(d, _) ? (l(_, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : S && (y || (l(b, m, n, r, i, null, o, s, a),
        mi(f, m)))) : (f.pendingId = Tl++,
        y ? (f.isHydrating = !1,
        f.activeBranch = _) : u(_, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        S ? (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 ? f.resolve() : (l(b, m, n, r, i, null, o, s, a),
        mi(f, m))) : b && gn(d, b) ? (l(b, d, n, r, i, f, o, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, i, f, o, s, a),
        f.deps <= 0 && f.resolve()));
    else if (b && gn(d, b))
        l(b, d, n, r, i, f, o, s, a),
        mi(f, d);
    else if (mo(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Tl++,
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
function Qc(e, t, n, r, i, o, s, a, l, u, c=!1) {
    const {p: f, m: d, um: m, n: b, o: {parentNode: _, remove: S}} = u;
    let y;
    const E = M0(e);
    E && t != null && t.pendingBranch && (y = t.pendingId,
    t.deps++);
    const p = e.props ? np(e.props.timeout) : void 0
      , g = o
      , T = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: Tl++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !c,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(w=!1, L=!1) {
            const {vnode: O, activeBranch: C, pendingBranch: N, pendingId: H, effects: B, parentComponent: ee, container: W} = T;
            let Y = !1;
            T.isHydrating ? T.isHydrating = !1 : w || (Y = C && N.transition && N.transition.mode === "out-in",
            Y && (C.transition.afterLeave = ()=>{
                H === T.pendingId && (d(N, W, o === g ? b(C) : o, 0),
                _l(B))
            }
            ),
            C && (_(C.el) !== T.hiddenContainer && (o = b(C)),
            m(C, ee, T, !0)),
            Y || d(N, W, o, 0)),
            mi(T, N),
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
            !q && !Y && _l(B),
            T.effects = [],
            E && t && t.pendingBranch && y === t.pendingId && (t.deps--,
            t.deps === 0 && !L && t.resolve()),
            mo(O, "onResolve")
        },
        fallback(w) {
            if (!T.pendingBranch)
                return;
            const {vnode: L, activeBranch: O, parentComponent: C, container: N, namespace: H} = T;
            mo(L, "onFallback");
            const B = b(O)
              , ee = ()=>{
                T.isInFallback && (f(null, w, N, B, C, null, H, a, l),
                mi(T, w))
            }
              , W = w.transition && w.transition.mode === "out-in";
            W && (O.transition.afterLeave = ee),
            T.isInFallback = !0,
            m(O, C, null, !0),
            W || ee()
        },
        move(w, L, O) {
            T.activeBranch && d(T.activeBranch, w, L, O),
            T.container = w
        },
        next() {
            return T.activeBranch && b(T.activeBranch)
        },
        registerDep(w, L) {
            const O = !!T.pendingBranch;
            O && T.deps++;
            const C = w.vnode.el;
            w.asyncDep.catch(N=>{
                Vo(N, w, 0)
            }
            ).then(N=>{
                if (w.isUnmounted || T.isUnmounted || T.pendingId !== w.suspenseId)
                    return;
                w.asyncResolved = !0;
                const {vnode: H} = w;
                Pl(w, N, !1),
                C && (H.el = C);
                const B = !C && w.subTree.el;
                L(w, H, _(C || w.subTree.el), C ? null : b(w.subTree), T, s, l),
                B && S(B),
                Gc(w, H.el),
                O && --T.deps === 0 && T.resolve()
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
function I0(e, t, n, r, i, o, s, a, l) {
    const u = t.suspense = Qc(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, a, !0)
      , c = l(e, u.pendingBranch = t.ssContent, n, u, o, s);
    return u.deps === 0 && u.resolve(!1, !0),
    c
}
function P0(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = sf(r ? n.default : n),
    e.ssFallback = r ? sf(n.fallback) : tt(Vt)
}
function sf(e) {
    let t;
    if (ge(e)) {
        const n = bi && e._c;
        n && (e._d = !1,
        me()),
        e = e(),
        n && (e._d = !0,
        t = an,
        Zp())
    }
    return de(e) && (e = k0(e)),
    e = nn(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function Ip(e, t) {
    t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : _l(e)
}
function mi(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let i = t.el;
    for (; !i && t.component; )
        t = t.component.subTree,
        i = t.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    Gc(r, i))
}
function M0(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const D0 = Symbol.for("v-scx")
  , N0 = ()=>At(D0);
function V0(e, t) {
    return Xc(e, null, t)
}
const ns = {};
function qe(e, t, n) {
    return Xc(e, t, n)
}
function Xc(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: a}=ot) {
    if (t && o) {
        const w = t;
        t = (...L)=>{
            w(...L),
            T()
        }
    }
    const l = kt
      , u = w=>r === !0 ? w : xr(w, r === !1 ? 1 : void 0);
    let c, f = !1, d = !1;
    if (ut(e) ? (c = ()=>e.value,
    f = As(e)) : vr(e) ? (c = ()=>u(e),
    f = !0) : de(e) ? (d = !0,
    f = e.some(w=>vr(w) || As(w)),
    c = ()=>e.map(w=>{
        if (ut(w))
            return w.value;
        if (vr(w))
            return u(w);
        if (ge(w))
            return br(w, l, 2)
    }
    )) : ge(e) ? t ? c = ()=>br(e, l, 2) : c = ()=>(m && m(),
    cn(e, l, 3, [b])) : c = sn,
    t && r) {
        const w = c;
        c = ()=>xr(w())
    }
    let m, b = w=>{
        m = p.onStop = ()=>{
            br(w, l, 4),
            m = p.onStop = void 0
        }
    }
    , _;
    if (la)
        if (b = sn,
        t ? n && cn(t, l, 3, [c(), d ? [] : void 0, b]) : c(),
        i === "sync") {
            const w = N0();
            _ = w.__watcherHandles || (w.__watcherHandles = [])
        } else
            return sn;
    let S = d ? new Array(e.length).fill(ns) : ns;
    const y = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const w = p.run();
                (r || f || (d ? w.some((L,O)=>Tr(L, S[O])) : Tr(w, S))) && (m && m(),
                cn(t, l, 3, [w, S === ns ? void 0 : d && S[0] === ns ? [] : S, b]),
                S = w)
            } else
                p.run()
    }
    ;
    y.allowRecurse = !!t;
    let E;
    i === "sync" ? E = y : i === "post" ? E = ()=>Ot(y, l && l.suspense) : (y.pre = !0,
    l && (y.id = l.uid),
    E = ()=>qc(y));
    const p = new Nc(c,sn,E)
      , g = No()
      , T = ()=>{
        p.stop(),
        g && Pc(g.effects, p)
    }
    ;
    return t ? n ? y() : S = p.run() : i === "post" ? Ot(p.run.bind(p), l && l.suspense) : p.run(),
    _ && _.push(T),
    T
}
function F0(e, t, n) {
    const r = this.proxy
      , i = at(e) ? e.includes(".") ? Pp(r, e) : ()=>r[e] : e.bind(r, r);
    let o;
    ge(t) ? o = t : (o = t.handler,
    n = t);
    const s = Qr(this)
      , a = Xc(i, o.bind(r), n);
    return s(),
    a
}
function Pp(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function xr(e, t, n=0, r) {
    if (!it(e) || e.__v_skip)
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
    ut(e))
        xr(e.value, t, n, r);
    else if (de(e))
        for (let i = 0; i < e.length; i++)
            xr(e[i], t, n, r);
    else if ($h(e) || ui(e))
        e.forEach(i=>{
            xr(i, t, n, r)
        }
        );
    else if (tp(e))
        for (const i in e)
            xr(e[i], t, n, r);
    return e
}
function UM(e, t) {
    if (yt === null)
        return e;
    const n = ca(yt) || yt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,a,l=ot] = t[i];
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
function Rn(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        o && (a.oldValue = o[s].value);
        let l = a.dir[r];
        l && ($r(),
        cn(l, n, 8, [e.el, a, e, t]),
        ei())
    }
}
const cr = Symbol("_leaveCb")
  , rs = Symbol("_enterCb");
function B0() {
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
  , Mp = {
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
  , U0 = {
    name: "BaseTransition",
    props: Mp,
    setup(e, {slots: t}) {
        const n = wn()
          , r = B0();
        return ()=>{
            const i = t.default && Np(t.default(), !0);
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
            const s = Be(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Da(o);
            const l = af(o);
            if (!l)
                return Da(o);
            const u = kl(l, s, r, n);
            Cs(l, u);
            const c = n.subTree
              , f = c && af(c);
            if (f && f.type !== Vt && !gn(l, f)) {
                const d = kl(f, s, r, n);
                if (Cs(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Da(o);
                a === "in-out" && l.type !== Vt && (d.delayLeave = (m,b,_)=>{
                    const S = Dp(r, f);
                    S[String(f.key)] = f,
                    m[cr] = ()=>{
                        b(),
                        m[cr] = void 0,
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
  , x0 = U0;
function Dp(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function kl(e, t, n, r) {
    const {appear: i, mode: o, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: b, onBeforeAppear: _, onAppear: S, onAfterAppear: y, onAppearCancelled: E} = t
      , p = String(e.key)
      , g = Dp(n, e)
      , T = (O,C)=>{
        O && cn(O, r, 9, C)
    }
      , w = (O,C)=>{
        const N = C[1];
        T(O, C),
        de(O) ? O.every(H=>H.length <= 1) && N() : O.length <= 1 && N()
    }
      , L = {
        mode: o,
        persisted: s,
        beforeEnter(O) {
            let C = a;
            if (!n.isMounted)
                if (i)
                    C = _ || a;
                else
                    return;
            O[cr] && O[cr](!0);
            const N = g[p];
            N && gn(e, N) && N.el[cr] && N.el[cr](),
            T(C, [O])
        },
        enter(O) {
            let C = l
              , N = u
              , H = c;
            if (!n.isMounted)
                if (i)
                    C = S || l,
                    N = y || u,
                    H = E || c;
                else
                    return;
            let B = !1;
            const ee = O[rs] = W=>{
                B || (B = !0,
                W ? T(H, [O]) : T(N, [O]),
                L.delayedLeave && L.delayedLeave(),
                O[rs] = void 0)
            }
            ;
            C ? w(C, [O, ee]) : ee()
        },
        leave(O, C) {
            const N = String(e.key);
            if (O[rs] && O[rs](!0),
            n.isUnmounting)
                return C();
            T(f, [O]);
            let H = !1;
            const B = O[cr] = ee=>{
                H || (H = !0,
                C(),
                ee ? T(b, [O]) : T(m, [O]),
                O[cr] = void 0,
                g[N] === e && delete g[N])
            }
            ;
            g[N] = e,
            d ? w(d, [O, B]) : B()
        },
        clone(O) {
            return kl(O, t, n, r)
        }
    };
    return L
}
function Da(e) {
    if (ia(e))
        return e = Jn(e),
        e.children = null,
        e
}
function af(e) {
    return ia(e) ? e.children ? e.children[0] : void 0 : e
}
function Cs(e, t) {
    e.shapeFlag & 6 && e.component ? Cs(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Np(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === gt ? (s.patchFlag & 128 && i++,
        r = r.concat(Np(s.children, t, a))) : (t || s.type !== Vt) && r.push(a != null ? Jn(s, {
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
    return ge(e) ? bt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Yr = e=>!!e.type.__asyncLoader
  , ia = e=>e.type.__isKeepAlive
  , H0 = {
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
        r.activate = (E,p,g,T,w)=>{
            const L = E.component;
            u(E, p, g, 0, a),
            l(L.vnode, E, p, g, L, a, T, E.slotScopeIds, w),
            Ot(()=>{
                L.isDeactivated = !1,
                L.a && di(L.a);
                const O = E.props && E.props.onVnodeMounted;
                O && Ht(O, L.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            u(E, d, null, 1, a),
            Ot(()=>{
                p.da && di(p.da);
                const g = E.props && E.props.onVnodeUnmounted;
                g && Ht(g, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Na(E),
            c(E, n, a, !0)
        }
        function b(E) {
            i.forEach((p,g)=>{
                const T = Ml(p.type);
                T && (!E || !E(T)) && _(g)
            }
            )
        }
        function _(E) {
            const p = i.get(E);
            !s || !gn(p, s) ? m(p) : s && Na(s),
            i.delete(E),
            o.delete(E)
        }
        qe(()=>[e.include, e.exclude], ([E,p])=>{
            E && b(g=>ji(E, g)),
            p && b(g=>!ji(p, g))
        }
        , {
            flush: "post",
            deep: !0
        });
        let S = null;
        const y = ()=>{
            S != null && i.set(S, Va(n.subTree))
        }
        ;
        return Ft(y),
        Zc(y),
        Sn(()=>{
            i.forEach(E=>{
                const {subTree: p, suspense: g} = n
                  , T = Va(p);
                if (E.type === T.type && E.key === T.key) {
                    Na(T);
                    const w = T.component.da;
                    w && Ot(w, g);
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
            if (!_i(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
                return s = null,
                p;
            let g = Va(p);
            const T = g.type
              , w = Ml(Yr(g) ? g.type.__asyncResolved || {} : T)
              , {include: L, exclude: O, max: C} = e;
            if (L && (!w || !ji(L, w)) || O && w && ji(O, w))
                return s = g,
                p;
            const N = g.key == null ? T : g.key
              , H = i.get(N);
            return g.el && (g = Jn(g),
            p.shapeFlag & 128 && (p.ssContent = g)),
            S = N,
            H ? (g.el = H.el,
            g.component = H.component,
            g.transition && Cs(g, g.transition),
            g.shapeFlag |= 512,
            o.delete(N),
            o.add(N)) : (o.add(N),
            C && o.size > parseInt(C, 10) && _(o.values().next().value)),
            g.shapeFlag |= 256,
            s = g,
            Rp(p.type) ? p : g
        }
    }
}
  , j0 = H0;
function ji(e, t) {
    return de(e) ? e.some(n=>ji(n, t)) : at(e) ? e.split(",").includes(t) : Rv(e) ? e.test(t) : !1
}
function Vp(e, t) {
    Bp(e, "a", t)
}
function Fp(e, t) {
    Bp(e, "da", t)
}
function Bp(e, t, n=kt) {
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
    if (oa(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            ia(i.parent.vnode) && K0(r, t, n, i),
            i = i.parent
    }
}
function K0(e, t, n, r) {
    const i = oa(t, e, r, !0);
    Pi(()=>{
        Pc(r[t], i)
    }
    , n)
}
function Na(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Va(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function oa(e, t, n=kt, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            $r();
            const a = Qr(n)
              , l = cn(t, n, e, s);
            return a(),
            ei(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const zn = e=>(t,n=kt)=>(!la || e === "sp") && oa(e, (...r)=>t(...r), n)
  , Y0 = zn("bm")
  , Ft = zn("m")
  , q0 = zn("bu")
  , Zc = zn("u")
  , Sn = zn("bum")
  , Pi = zn("um")
  , G0 = zn("sp")
  , W0 = zn("rtg")
  , J0 = zn("rtc");
function Up(e, t=kt) {
    oa("ec", e, t)
}
function z0(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (de(e) || at(e)) {
        i = new Array(e.length);
        for (let s = 0, a = e.length; s < a; s++)
            i[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o && o[s])
    } else if (it(e))
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
function kr(e, t, n={}, r, i) {
    if (yt.isCE || yt.parent && Yr(yt.parent) && yt.parent.isCE)
        return t !== "default" && (n.name = t),
        tt("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    me();
    const s = o && xp(o(n))
      , a = Tt(gt, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    a
}
function xp(e) {
    return e.some(t=>_i(t) ? !(t.type === Vt || t.type === gt && !xp(t.children)) : !0) ? e : null
}
const Sl = e=>e ? nm(e) ? ca(e) || e.proxy : Sl(e.parent) : null
  , qi = bt(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>Sl(e.parent),
    $root: e=>Sl(e.root),
    $emit: e=>e.emit,
    $options: e=>$c(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        qc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = zt.bind(e.proxy)),
    $watch: e=>F0.bind(e)
})
  , Fa = (e,t)=>e !== ot && !e.__isScriptSetup && Ge(e, t)
  , Q0 = {
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
                if (Fa(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== ot && Ge(i, t))
                    return s[t] = 2,
                    i[t];
                if ((u = e.propsOptions[0]) && Ge(u, t))
                    return s[t] = 3,
                    o[t];
                if (n !== ot && Ge(n, t))
                    return s[t] = 4,
                    n[t];
                Al && (s[t] = 0)
            }
        }
        const c = qi[t];
        let f, d;
        if (c)
            return t === "$attrs" && Yt(e, "get", t),
            c(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== ot && Ge(n, t))
            return s[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        Ge(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return Fa(i, t) ? (i[t] = n,
        !0) : r !== ot && Ge(r, t) ? (r[t] = n,
        !0) : Ge(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let a;
        return !!n[s] || e !== ot && Ge(e, s) || Fa(t, s) || (a = o[0]) && Ge(a, s) || Ge(r, s) || Ge(qi, s) || Ge(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ge(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function X0() {
    return Z0().slots
}
function Z0() {
    const e = wn();
    return e.setupContext || (e.setupContext = im(e))
}
function wl(e) {
    return de(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function sa(e, t) {
    const n = wl(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let i = n[r];
        i ? de(i) || ge(i) ? i = n[r] = {
            type: i,
            default: t[r]
        } : i.default = t[r] : i === null && (i = n[r] = {
            default: t[r]
        }),
        i && t[`__skip_${r}`] && (i.skipFactory = !0)
    }
    return n
}
function $0(e) {
    const t = wn();
    let n = e();
    return Il(),
    Mc(n) && (n = n.catch(r=>{
        throw Qr(t),
        r
    }
    )),
    [n, ()=>Qr(t)]
}
let Al = !0;
function eb(e) {
    const t = $c(e)
      , n = e.proxy
      , r = e.ctx;
    Al = !1,
    t.beforeCreate && lf(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: m, updated: b, activated: _, deactivated: S, beforeDestroy: y, beforeUnmount: E, destroyed: p, unmounted: g, render: T, renderTracked: w, renderTriggered: L, errorCaptured: O, serverPrefetch: C, expose: N, inheritAttrs: H, components: B, directives: ee, filters: W} = t;
    if (u && tb(u, r, null),
    s)
        for (const q in s) {
            const U = s[q];
            ge(U) && (r[q] = U.bind(n))
        }
    if (i) {
        const q = i.call(n, n);
        it(q) && (e.data = Lt(q))
    }
    if (Al = !0,
    o)
        for (const q in o) {
            const U = o[q]
              , le = ge(U) ? U.bind(n, n) : ge(U.get) ? U.get.bind(n, n) : sn
              , K = !ge(U) && ge(U.set) ? U.set.bind(n) : sn
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
            Hp(a[q], r, n, q);
    if (l) {
        const q = ge(l) ? l.call(n) : l;
        Reflect.ownKeys(q).forEach(U=>{
            qr(U, q[U])
        }
        )
    }
    c && lf(c, e, "c");
    function V(q, U) {
        de(U) ? U.forEach(le=>q(le.bind(n))) : U && q(U.bind(n))
    }
    if (V(Y0, f),
    V(Ft, d),
    V(q0, m),
    V(Zc, b),
    V(Vp, _),
    V(Fp, S),
    V(Up, O),
    V(J0, w),
    V(W0, L),
    V(Sn, E),
    V(Pi, g),
    V(G0, C),
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
    ee && (e.directives = ee)
}
function tb(e, t, n=sn) {
    de(e) && (e = Ll(e));
    for (const r in e) {
        const i = e[r];
        let o;
        it(i) ? "default"in i ? o = At(i.from || r, i.default, !0) : o = At(i.from || r) : o = At(i),
        ut(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: s=>o.value = s
        }) : t[r] = o
    }
}
function lf(e, t, n) {
    cn(de(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Hp(e, t, n, r) {
    const i = r.includes(".") ? Pp(n, r) : ()=>n[r];
    if (at(e)) {
        const o = t[e];
        ge(o) && qe(i, o)
    } else if (ge(e))
        qe(i, e.bind(n));
    else if (it(e))
        if (de(e))
            e.forEach(o=>Hp(o, t, n, r));
        else {
            const o = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
            ge(o) && qe(i, o, e)
        }
}
function $c(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach(u=>Rs(l, u, s, !0)),
    Rs(l, t, s)),
    it(t) && o.set(t, l),
    l
}
function Rs(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && Rs(e, o, n, !0),
    i && i.forEach(s=>Rs(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = nb[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const nb = {
    data: cf,
    props: uf,
    emits: uf,
    methods: Ki,
    computed: Ki,
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
    components: Ki,
    directives: Ki,
    watch: ib,
    provide: cf,
    inject: rb
};
function cf(e, t) {
    return t ? e ? function() {
        return bt(ge(e) ? e.call(this, this) : e, ge(t) ? t.call(this, this) : t)
    }
    : t : e
}
function rb(e, t) {
    return Ki(Ll(e), Ll(t))
}
function Ll(e) {
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
function Ki(e, t) {
    return e ? bt(Object.create(null), e, t) : t
}
function uf(e, t) {
    return e ? de(e) && de(t) ? [...new Set([...e, ...t])] : bt(Object.create(null), wl(e), wl(t ?? {})) : t
}
function ib(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = bt(Object.create(null), e);
    for (const r in t)
        n[r] = Mt(e[r], t[r]);
    return n
}
function jp() {
    return {
        app: null,
        config: {
            isNativeTag: Ov,
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
let ob = 0;
function sb(e, t) {
    return function(r, i=null) {
        ge(r) || (r = bt({}, r)),
        i != null && !it(i) && (i = null);
        const o = jp()
          , s = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: ob++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: om,
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
                    const d = tt(r, i);
                    return d.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    c && t ? t(d, u) : e(d, u, f),
                    a = !0,
                    l._container = u,
                    u.__vue_app__ = l,
                    ca(d.component) || d.component.proxy
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
                const c = yi;
                yi = l;
                try {
                    return u()
                } finally {
                    yi = c
                }
            }
        };
        return l
    }
}
let yi = null;
function qr(e, t) {
    if (kt) {
        let n = kt.provides;
        const r = kt.parent && kt.parent.provides;
        r === n && (n = kt.provides = Object.create(r)),
        n[e] = t
    }
}
function At(e, t, n=!1) {
    const r = kt || yt;
    if (r || yi) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : yi._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && ge(t) ? t.call(r && r.proxy) : t
    }
}
function eu() {
    return !!(kt || yt || yi)
}
function ab(e, t, n, r=!1) {
    const i = {}
      , o = {};
    Ss(o, aa, 1),
    e.propsDefaults = Object.create(null),
    Kp(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Ii(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function lb(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , a = Be(i)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (na(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (Ge(o, d))
                        m !== o[d] && (o[d] = m,
                        u = !0);
                    else {
                        const b = Bn(d);
                        i[b] = Ol(l, a, b, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    u = !0)
            }
        }
    } else {
        Kp(e, t, i, o) && (u = !0);
        let c;
        for (const f in a)
            (!t || !Ge(t, f) && ((c = Zr(f)) === f || !Ge(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = Ol(l, a, f, void 0, e, !0)) : delete i[f]);
        if (o !== a)
            for (const f in o)
                (!t || !Ge(t, f)) && (delete o[f],
                u = !0)
    }
    u && Wn(e, "set", "$attrs")
}
function Kp(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (fi(l))
                continue;
            const u = t[l];
            let c;
            i && Ge(i, c = Bn(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : na(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            s = !0)
        }
    if (o) {
        const l = Be(n)
          , u = a || ot;
        for (let c = 0; c < o.length; c++) {
            const f = o[c];
            n[f] = Ol(i, l, f, u[f], e, !Ge(u, f))
        }
    }
    return s
}
function Ol(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const a = Ge(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && ge(l)) {
                const {propsDefaults: u} = i;
                if (n in u)
                    r = u[n];
                else {
                    const c = Qr(i);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l
        }
        s[0] && (o && !a ? r = !1 : s[1] && (r === "" || r === Zr(n)) && (r = !0))
    }
    return r
}
function Yp(e, t, n=!1) {
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
            const [d,m] = Yp(f, t, !0);
            bt(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!o && !l)
        return it(e) && r.set(e, ci),
        ci;
    if (de(o))
        for (let c = 0; c < o.length; c++) {
            const f = Bn(o[c]);
            ff(f) && (s[f] = ot)
        }
    else if (o)
        for (const c in o) {
            const f = Bn(c);
            if (ff(f)) {
                const d = o[c]
                  , m = s[f] = de(d) || ge(d) ? {
                    type: d
                } : bt({}, d);
                if (m) {
                    const b = pf(Boolean, m.type)
                      , _ = pf(String, m.type);
                    m[0] = b > -1,
                    m[1] = _ < 0 || b < _,
                    (b > -1 || Ge(m, "default")) && a.push(f)
                }
            }
        }
    const u = [s, a];
    return it(e) && r.set(e, u),
    u
}
function ff(e) {
    return e[0] !== "$" && !fi(e)
}
function df(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function hf(e, t) {
    return df(e) === df(t)
}
function pf(e, t) {
    return de(t) ? t.findIndex(n=>hf(n, e)) : ge(t) && hf(t, e) ? 0 : -1
}
const qp = e=>e[0] === "_" || e === "$stable"
  , tu = e=>de(e) ? e.map(nn) : [nn(e)]
  , cb = (e,t,n)=>{
    if (t._n)
        return t;
    const r = dn((...i)=>tu(t(...i)), n);
    return r._c = !1,
    r
}
  , Gp = (e,t,n)=>{
    const r = e._ctx;
    for (const i in e) {
        if (qp(i))
            continue;
        const o = e[i];
        if (ge(o))
            t[i] = cb(i, o, r);
        else if (o != null) {
            const s = tu(o);
            t[i] = ()=>s
        }
    }
}
  , Wp = (e,t)=>{
    const n = tu(t);
    e.slots.default = ()=>n
}
  , ub = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Be(t),
        Ss(t, "_", n)) : Gp(t, e.slots = {})
    } else
        e.slots = {},
        t && Wp(e, t);
    Ss(e.slots, aa, 1)
}
  , fb = (e,t,n)=>{
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = ot;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (bt(i, t),
        !n && a === 1 && delete i._) : (o = !t.$stable,
        Gp(t, i)),
        s = t
    } else
        t && (Wp(e, t),
        s = {
            default: 1
        });
    if (o)
        for (const a in i)
            !qp(a) && s[a] == null && delete i[a]
}
;
function Is(e, t, n, r, i=!1) {
    if (de(e)) {
        e.forEach((d,m)=>Is(d, t && (de(t) ? t[m] : t), n, r, i));
        return
    }
    if (Yr(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? ca(r.component) || r.component.proxy : r.el
      , s = i ? null : o
      , {i: a, r: l} = e
      , u = t && t.r
      , c = a.refs === ot ? a.refs = {} : a.refs
      , f = a.setupState;
    if (u != null && u !== l && (at(u) ? (c[u] = null,
    Ge(f, u) && (f[u] = null)) : ut(u) && (u.value = null)),
    ge(l))
        br(l, a, 12, [s, c]);
    else {
        const d = at(l)
          , m = ut(l);
        if (d || m) {
            const b = ()=>{
                if (e.f) {
                    const _ = d ? Ge(f, l) ? f[l] : c[l] : l.value;
                    i ? de(_) && Pc(_, o) : de(_) ? _.includes(o) || _.push(o) : d ? (c[l] = [o],
                    Ge(f, l) && (f[l] = c[l])) : (l.value = [o],
                    e.k && (c[e.k] = l.value))
                } else
                    d ? (c[l] = s,
                    Ge(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (c[e.k] = s))
            }
            ;
            s ? (b.id = -1,
            Ot(b, n)) : b()
        }
    }
}
let $n = !1;
const db = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , hb = e=>e.namespaceURI.includes("MathML")
  , is = e=>{
    if (db(e))
        return "svg";
    if (hb(e))
        return "mathml"
}
  , os = e=>e.nodeType === 8;
function pb(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: a, insert: l, createComment: u}} = e
      , c = (p,g)=>{
        if (!g.hasChildNodes()) {
            n(null, p, g),
            Ls(),
            g._vnode = p;
            return
        }
        $n = !1,
        f(g.firstChild, p, null, null, null),
        Ls(),
        g._vnode = p,
        $n && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,g,T,w,L,O=!1)=>{
        const C = os(p) && p.data === "["
          , N = ()=>_(p, g, T, w, L, C)
          , {type: H, ref: B, shapeFlag: ee, patchFlag: W} = g;
        let Y = p.nodeType;
        g.el = p,
        W === -2 && (O = !1,
        g.dynamicChildren = null);
        let V = null;
        switch (H) {
        case zr:
            Y !== 3 ? g.children === "" ? (l(g.el = i(""), s(p), p),
            V = p) : V = N() : (p.data !== g.children && ($n = !0,
            p.data = g.children),
            V = o(p));
            break;
        case Vt:
            E(p) ? (V = o(p),
            y(g.el = p.content.firstChild, p, T)) : Y !== 8 || C ? V = N() : V = o(p);
            break;
        case Wi:
            if (C && (p = o(p),
            Y = p.nodeType),
            Y === 1 || Y === 3) {
                V = p;
                const q = !g.children.length;
                for (let U = 0; U < g.staticCount; U++)
                    q && (g.children += V.nodeType === 1 ? V.outerHTML : V.data),
                    U === g.staticCount - 1 && (g.anchor = V),
                    V = o(V);
                return C ? o(V) : V
            } else
                N();
            break;
        case gt:
            C ? V = b(p, g, T, w, L, O) : V = N();
            break;
        default:
            if (ee & 1)
                (Y !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? V = N() : V = d(p, g, T, w, L, O);
            else if (ee & 6) {
                g.slotScopeIds = L;
                const q = s(p);
                if (C ? V = S(p) : os(p) && p.data === "teleport start" ? V = S(p, p.data, "teleport end") : V = o(p),
                t(g, q, null, T, w, is(q), O),
                Yr(g)) {
                    let U;
                    C ? (U = tt(gt),
                    U.anchor = V ? V.previousSibling : q.lastChild) : U = p.nodeType === 3 ? tm("") : tt("div"),
                    U.el = p,
                    g.component.subTree = U
                }
            } else
                ee & 64 ? Y !== 8 ? V = N() : V = g.type.hydrate(p, g, T, w, L, O, e, m) : ee & 128 && (V = g.type.hydrate(p, g, T, w, is(s(p)), L, O, e, f))
        }
        return B != null && Is(B, null, w, g),
        V
    }
      , d = (p,g,T,w,L,O)=>{
        O = O || !!g.dynamicChildren;
        const {type: C, props: N, patchFlag: H, shapeFlag: B, dirs: ee, transition: W} = g
          , Y = C === "input" || C === "option";
        if (Y || H !== -1) {
            ee && Rn(g, null, T, "created");
            let V = !1;
            if (E(p)) {
                V = zp(w, W) && T && T.vnode.props && T.vnode.props.appear;
                const U = p.content.firstChild;
                V && W.beforeEnter(U),
                y(U, p, T),
                g.el = p = U
            }
            if (B & 16 && !(N && (N.innerHTML || N.textContent))) {
                let U = m(p.firstChild, g, p, T, w, L, O);
                for (; U; ) {
                    $n = !0;
                    const le = U;
                    U = U.nextSibling,
                    a(le)
                }
            } else
                B & 8 && p.textContent !== g.children && ($n = !0,
                p.textContent = g.children);
            if (N)
                if (Y || !O || H & 48)
                    for (const U in N)
                        (Y && (U.endsWith("value") || U === "indeterminate") || Po(U) && !fi(U) || U[0] === ".") && r(p, U, null, N[U], void 0, void 0, T);
                else
                    N.onClick && r(p, "onClick", null, N.onClick, void 0, void 0, T);
            let q;
            (q = N && N.onVnodeBeforeMount) && Ht(q, T, g),
            ee && Rn(g, null, T, "beforeMount"),
            ((q = N && N.onVnodeMounted) || ee || V) && Ip(()=>{
                q && Ht(q, T, g),
                V && W.enter(p),
                ee && Rn(g, null, T, "mounted")
            }
            , w)
        }
        return p.nextSibling
    }
      , m = (p,g,T,w,L,O,C)=>{
        C = C || !!g.dynamicChildren;
        const N = g.children
          , H = N.length;
        for (let B = 0; B < H; B++) {
            const ee = C ? N[B] : N[B] = nn(N[B]);
            if (p)
                p = f(p, ee, w, L, O, C);
            else {
                if (ee.type === zr && !ee.children)
                    continue;
                $n = !0,
                n(null, ee, T, null, w, L, is(T), O)
            }
        }
        return p
    }
      , b = (p,g,T,w,L,O)=>{
        const {slotScopeIds: C} = g;
        C && (L = L ? L.concat(C) : C);
        const N = s(p)
          , H = m(o(p), g, N, T, w, L, O);
        return H && os(H) && H.data === "]" ? o(g.anchor = H) : ($n = !0,
        l(g.anchor = u("]"), N, H),
        H)
    }
      , _ = (p,g,T,w,L,O)=>{
        if ($n = !0,
        g.el = null,
        O) {
            const H = S(p);
            for (; ; ) {
                const B = o(p);
                if (B && B !== H)
                    a(B);
                else
                    break
            }
        }
        const C = o(p)
          , N = s(p);
        return a(p),
        n(null, g, N, C, T, w, is(N), L),
        C
    }
      , S = (p,g="[",T="]")=>{
        let w = 0;
        for (; p; )
            if (p = o(p),
            p && os(p) && (p.data === g && w++,
            p.data === T)) {
                if (w === 0)
                    return o(p);
                w--
            }
        return p
    }
      , y = (p,g,T)=>{
        const w = g.parentNode;
        w && w.replaceChild(p, g);
        let L = T;
        for (; L; )
            L.vnode.el === g && (L.vnode.el = L.subTree.el = p),
            L = L.parent
    }
      , E = p=>p.nodeType === 1 && p.tagName.toLowerCase() === "template";
    return [c, f]
}
const Ot = Ip;
function mb(e) {
    return Jp(e)
}
function yb(e) {
    return Jp(e, pb)
}
function Jp(e, t) {
    const n = rp();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: m=sn, insertStaticContent: b} = e
      , _ = (h,v,A,R=null,F=null,G=null,Z=void 0,Q=null,ne=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !gn(h, v) && (R = j(h),
        be(h, F, G, !0),
        h = null),
        v.patchFlag === -2 && (ne = !1,
        v.dynamicChildren = null);
        const {type: z, ref: se, shapeFlag: oe} = v;
        switch (z) {
        case zr:
            S(h, v, A, R);
            break;
        case Vt:
            y(h, v, A, R);
            break;
        case Wi:
            h == null && E(v, A, R, Z);
            break;
        case gt:
            B(h, v, A, R, F, G, Z, Q, ne);
            break;
        default:
            oe & 1 ? T(h, v, A, R, F, G, Z, Q, ne) : oe & 6 ? ee(h, v, A, R, F, G, Z, Q, ne) : (oe & 64 || oe & 128) && z.process(h, v, A, R, F, G, Z, Q, ne, te)
        }
        se != null && F && Is(se, h && h.ref, G, v || h, !v)
    }
      , S = (h,v,A,R)=>{
        if (h == null)
            r(v.el = a(v.children), A, R);
        else {
            const F = v.el = h.el;
            v.children !== h.children && u(F, v.children)
        }
    }
      , y = (h,v,A,R)=>{
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
      , g = ({el: h, anchor: v})=>{
        let A;
        for (; h && h !== v; )
            A = d(h),
            i(h),
            h = A;
        i(v)
    }
      , T = (h,v,A,R,F,G,Z,Q,ne)=>{
        v.type === "svg" ? Z = "svg" : v.type === "math" && (Z = "mathml"),
        h == null ? w(v, A, R, F, G, Z, Q, ne) : C(h, v, F, G, Z, Q, ne)
    }
      , w = (h,v,A,R,F,G,Z,Q)=>{
        let ne, z;
        const {props: se, shapeFlag: oe, transition: I, dirs: x} = h;
        if (ne = h.el = s(h.type, G, se && se.is, se),
        oe & 8 ? c(ne, h.children) : oe & 16 && O(h.children, ne, null, R, F, Ba(h, G), Z, Q),
        x && Rn(h, null, R, "created"),
        L(ne, h, h.scopeId, Z, R),
        se) {
            for (const pe in se)
                pe !== "value" && !fi(pe) && o(ne, pe, null, se[pe], G, h.children, R, F, rt);
            "value"in se && o(ne, "value", null, se.value, G),
            (z = se.onVnodeBeforeMount) && Ht(z, R, h)
        }
        x && Rn(h, null, R, "beforeMount");
        const ae = zp(F, I);
        ae && I.beforeEnter(ne),
        r(ne, v, A),
        ((z = se && se.onVnodeMounted) || ae || x) && Ot(()=>{
            z && Ht(z, R, h),
            ae && I.enter(ne),
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
      , O = (h,v,A,R,F,G,Z,Q,ne=0)=>{
        for (let z = ne; z < h.length; z++) {
            const se = h[z] = Q ? ur(h[z]) : nn(h[z]);
            _(null, se, v, A, R, F, G, Z, Q)
        }
    }
      , C = (h,v,A,R,F,G,Z)=>{
        const Q = v.el = h.el;
        let {patchFlag: ne, dynamicChildren: z, dirs: se} = v;
        ne |= h.patchFlag & 16;
        const oe = h.props || ot
          , I = v.props || ot;
        let x;
        if (A && Cr(A, !1),
        (x = I.onVnodeBeforeUpdate) && Ht(x, A, v, h),
        se && Rn(v, h, A, "beforeUpdate"),
        A && Cr(A, !0),
        z ? N(h.dynamicChildren, z, Q, A, R, Ba(v, F), G) : Z || U(h, v, Q, null, A, R, Ba(v, F), G, !1),
        ne > 0) {
            if (ne & 16)
                H(Q, v, oe, I, A, R, F);
            else if (ne & 2 && oe.class !== I.class && o(Q, "class", null, I.class, F),
            ne & 4 && o(Q, "style", oe.style, I.style, F),
            ne & 8) {
                const ae = v.dynamicProps;
                for (let pe = 0; pe < ae.length; pe++) {
                    const ze = ae[pe]
                      , lt = oe[ze]
                      , Et = I[ze];
                    (Et !== lt || ze === "value") && o(Q, ze, lt, Et, F, h.children, A, R, rt)
                }
            }
            ne & 1 && h.children !== v.children && c(Q, v.children)
        } else
            !Z && z == null && H(Q, v, oe, I, A, R, F);
        ((x = I.onVnodeUpdated) || se) && Ot(()=>{
            x && Ht(x, A, v, h),
            se && Rn(v, h, A, "updated")
        }
        , R)
    }
      , N = (h,v,A,R,F,G,Z)=>{
        for (let Q = 0; Q < v.length; Q++) {
            const ne = h[Q]
              , z = v[Q]
              , se = ne.el && (ne.type === gt || !gn(ne, z) || ne.shapeFlag & 70) ? f(ne.el) : A;
            _(ne, z, se, null, R, F, G, Z, !0)
        }
    }
      , H = (h,v,A,R,F,G,Z)=>{
        if (A !== R) {
            if (A !== ot)
                for (const Q in A)
                    !fi(Q) && !(Q in R) && o(h, Q, A[Q], null, Z, v.children, F, G, rt);
            for (const Q in R) {
                if (fi(Q))
                    continue;
                const ne = R[Q]
                  , z = A[Q];
                ne !== z && Q !== "value" && o(h, Q, z, ne, Z, v.children, F, G, rt)
            }
            "value"in R && o(h, "value", A.value, R.value, Z)
        }
    }
      , B = (h,v,A,R,F,G,Z,Q,ne)=>{
        const z = v.el = h ? h.el : a("")
          , se = v.anchor = h ? h.anchor : a("");
        let {patchFlag: oe, dynamicChildren: I, slotScopeIds: x} = v;
        x && (Q = Q ? Q.concat(x) : x),
        h == null ? (r(z, A, R),
        r(se, A, R),
        O(v.children || [], A, se, F, G, Z, Q, ne)) : oe > 0 && oe & 64 && I && h.dynamicChildren ? (N(h.dynamicChildren, I, A, F, G, Z, Q),
        (v.key != null || F && v === F.subTree) && nu(h, v, !0)) : U(h, v, A, se, F, G, Z, Q, ne)
    }
      , ee = (h,v,A,R,F,G,Z,Q,ne)=>{
        v.slotScopeIds = Q,
        h == null ? v.shapeFlag & 512 ? F.ctx.activate(v, A, R, Z, ne) : W(v, A, R, F, G, Z, ne) : Y(h, v, ne)
    }
      , W = (h,v,A,R,F,G,Z)=>{
        const Q = h.component = wb(h, R, F);
        if (ia(h) && (Q.ctx.renderer = te),
        Ab(Q),
        Q.asyncDep) {
            if (F && F.registerDep(Q, V),
            !h.el) {
                const ne = Q.subTree = tt(Vt);
                y(null, ne, v, A)
            }
        } else
            V(Q, h, v, A, F, G, Z)
    }
      , Y = (h,v,A)=>{
        const R = v.component = h.component;
        if (A0(h, v, A))
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
                    const Xn = Qp(h);
                    if (Xn) {
                        se && (se.el = ae.el,
                        q(h, se, Z)),
                        Xn.asyncDep.then(()=>{
                            h.isUnmounted || Q()
                        }
                        );
                        return
                    }
                }
                let pe = se, ze;
                Cr(h, !1),
                se ? (se.el = ae.el,
                q(h, se, Z)) : se = ae,
                oe && di(oe),
                (ze = se.props && se.props.onVnodeBeforeUpdate) && Ht(ze, x, se, ae),
                Cr(h, !0);
                const lt = Ma(h)
                  , Et = h.subTree;
                h.subTree = lt,
                _(Et, lt, f(Et.el), j(Et), h, F, G),
                se.el = lt.el,
                pe === null && Gc(h, lt.el),
                I && Ot(I, F),
                (ze = se.props && se.props.onVnodeUpdated) && Ot(()=>Ht(ze, x, se, ae), F)
            } else {
                let se;
                const {el: oe, props: I} = v
                  , {bm: x, m: ae, parent: pe} = h
                  , ze = Yr(v);
                if (Cr(h, !1),
                x && di(x),
                !ze && (se = I && I.onVnodeBeforeMount) && Ht(se, pe, v),
                Cr(h, !0),
                oe && He) {
                    const lt = ()=>{
                        h.subTree = Ma(h),
                        He(oe, h.subTree, h, F, null)
                    }
                    ;
                    ze ? v.type.__asyncLoader().then(()=>!h.isUnmounted && lt()) : lt()
                } else {
                    const lt = h.subTree = Ma(h);
                    _(null, lt, A, R, h, F, G),
                    v.el = lt.el
                }
                if (ae && Ot(ae, F),
                !ze && (se = I && I.onVnodeMounted)) {
                    const lt = v;
                    Ot(()=>Ht(se, pe, lt), F)
                }
                (v.shapeFlag & 256 || pe && Yr(pe.vnode) && pe.vnode.shapeFlag & 256) && h.a && Ot(h.a, F),
                h.isMounted = !0,
                v = A = R = null
            }
        }
          , ne = h.effect = new Nc(Q,sn,()=>qc(z),h.scope)
          , z = h.update = ()=>{
            ne.dirty && ne.run()
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
        lb(h, v.props, R, A),
        fb(h, v.children, A),
        $r(),
        nf(h),
        ei()
    }
      , U = (h,v,A,R,F,G,Z,Q,ne=!1)=>{
        const z = h && h.children
          , se = h ? h.shapeFlag : 0
          , oe = v.children
          , {patchFlag: I, shapeFlag: x} = v;
        if (I > 0) {
            if (I & 128) {
                K(z, oe, A, R, F, G, Z, Q, ne);
                return
            } else if (I & 256) {
                le(z, oe, A, R, F, G, Z, Q, ne);
                return
            }
        }
        x & 8 ? (se & 16 && rt(z, F, G),
        oe !== z && c(A, oe)) : se & 16 ? x & 16 ? K(z, oe, A, R, F, G, Z, Q, ne) : rt(z, F, G, !0) : (se & 8 && c(A, ""),
        x & 16 && O(oe, A, R, F, G, Z, Q, ne))
    }
      , le = (h,v,A,R,F,G,Z,Q,ne)=>{
        h = h || ci,
        v = v || ci;
        const z = h.length
          , se = v.length
          , oe = Math.min(z, se);
        let I;
        for (I = 0; I < oe; I++) {
            const x = v[I] = ne ? ur(v[I]) : nn(v[I]);
            _(h[I], x, A, null, F, G, Z, Q, ne)
        }
        z > se ? rt(h, F, G, !0, !1, oe) : O(v, A, R, F, G, Z, Q, ne, oe)
    }
      , K = (h,v,A,R,F,G,Z,Q,ne)=>{
        let z = 0;
        const se = v.length;
        let oe = h.length - 1
          , I = se - 1;
        for (; z <= oe && z <= I; ) {
            const x = h[z]
              , ae = v[z] = ne ? ur(v[z]) : nn(v[z]);
            if (gn(x, ae))
                _(x, ae, A, null, F, G, Z, Q, ne);
            else
                break;
            z++
        }
        for (; z <= oe && z <= I; ) {
            const x = h[oe]
              , ae = v[I] = ne ? ur(v[I]) : nn(v[I]);
            if (gn(x, ae))
                _(x, ae, A, null, F, G, Z, Q, ne);
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
                    _(null, v[z] = ne ? ur(v[z]) : nn(v[z]), A, ae, F, G, Z, Q, ne),
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
                const qt = v[z] = ne ? ur(v[z]) : nn(v[z]);
                qt.key != null && pe.set(qt.key, z)
            }
            let ze, lt = 0;
            const Et = I - ae + 1;
            let Xn = !1
              , Ra = 0;
            const Vi = new Array(Et);
            for (z = 0; z < Et; z++)
                Vi[z] = 0;
            for (z = x; z <= oe; z++) {
                const qt = h[z];
                if (lt >= Et) {
                    be(qt, F, G, !0);
                    continue
                }
                let An;
                if (qt.key != null)
                    An = pe.get(qt.key);
                else
                    for (ze = ae; ze <= I; ze++)
                        if (Vi[ze - ae] === 0 && gn(qt, v[ze])) {
                            An = ze;
                            break
                        }
                An === void 0 ? be(qt, F, G, !0) : (Vi[An - ae] = z + 1,
                An >= Ra ? Ra = An : Xn = !0,
                _(qt, v[An], A, null, F, G, Z, Q, ne),
                lt++)
            }
            const Gu = Xn ? gb(Vi) : ci;
            for (ze = Gu.length - 1,
            z = Et - 1; z >= 0; z--) {
                const qt = ae + z
                  , An = v[qt]
                  , Wu = qt + 1 < se ? v[qt + 1].el : R;
                Vi[z] === 0 ? _(null, An, A, Wu, F, G, Z, Q, ne) : Xn && (ze < 0 || z !== Gu[ze] ? ue(An, A, Wu, 2) : ze--)
            }
        }
    }
      , ue = (h,v,A,R,F=null)=>{
        const {el: G, type: Z, transition: Q, children: ne, shapeFlag: z} = h;
        if (z & 6) {
            ue(h.component.subTree, v, A, R);
            return
        }
        if (z & 128) {
            h.suspense.move(v, A, R);
            return
        }
        if (z & 64) {
            Z.move(h, v, A, te);
            return
        }
        if (Z === gt) {
            r(G, v, A);
            for (let oe = 0; oe < ne.length; oe++)
                ue(ne[oe], v, A, R);
            r(h.anchor, v, A);
            return
        }
        if (Z === Wi) {
            p(h, v, A);
            return
        }
        if (R !== 2 && z & 1 && Q)
            if (R === 0)
                Q.beforeEnter(G),
                r(G, v, A),
                Ot(()=>Q.enter(G), F);
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
        const {type: G, props: Z, ref: Q, children: ne, dynamicChildren: z, shapeFlag: se, patchFlag: oe, dirs: I} = h;
        if (Q != null && Is(Q, null, A, h, !0),
        se & 256) {
            v.ctx.deactivate(h);
            return
        }
        const x = se & 1 && I
          , ae = !Yr(h);
        let pe;
        if (ae && (pe = Z && Z.onVnodeBeforeUnmount) && Ht(pe, v, h),
        se & 6)
            ft(h.component, A, R);
        else {
            if (se & 128) {
                h.suspense.unmount(A, R);
                return
            }
            x && Rn(h, null, v, "beforeUnmount"),
            se & 64 ? h.type.remove(h, v, A, F, te, R) : z && (G !== gt || oe > 0 && oe & 64) ? rt(z, v, A, !1, !0) : (G === gt && oe & 384 || !F && se & 16) && rt(ne, v, A),
            R && Je(h)
        }
        (ae && (pe = Z && Z.onVnodeUnmounted) || x) && Ot(()=>{
            pe && Ht(pe, v, h),
            x && Rn(h, null, v, "unmounted")
        }
        , A)
    }
      , Je = h=>{
        const {type: v, el: A, anchor: R, transition: F} = h;
        if (v === gt) {
            Ze(A, R);
            return
        }
        if (v === Wi) {
            g(h);
            return
        }
        const G = ()=>{
            i(A),
            F && !F.persisted && F.afterLeave && F.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && F && !F.persisted) {
            const {leave: Z, delayLeave: Q} = F
              , ne = ()=>Z(A, G);
            Q ? Q(h.el, G, ne) : ne()
        } else
            G()
    }
      , Ze = (h,v)=>{
        let A;
        for (; h !== v; )
            A = d(h),
            i(h),
            h = A;
        i(v)
    }
      , ft = (h,v,A)=>{
        const {bum: R, scope: F, update: G, subTree: Z, um: Q} = h;
        R && di(R),
        F.stop(),
        G && (G.active = !1,
        be(Z, h, v, A)),
        Q && Ot(Q, v),
        Ot(()=>{
            h.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , rt = (h,v,A,R=!1,F=!1,G=0)=>{
        for (let Z = G; Z < h.length; Z++)
            be(h[Z], v, A, R, F)
    }
      , j = h=>h.shapeFlag & 6 ? j(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let re = !1;
    const X = (h,v,A)=>{
        h == null ? v._vnode && be(v._vnode, null, null, !0) : _(v._vnode || null, h, v, null, null, null, A),
        re || (re = !0,
        nf(),
        Ls(),
        re = !1),
        v._vnode = h
    }
      , te = {
        p: _,
        um: be,
        m: ue,
        r: Je,
        mt: W,
        mc: O,
        pc: U,
        pbc: N,
        n: j,
        o: e
    };
    let ve, He;
    return t && ([ve,He] = t(te)),
    {
        render: X,
        hydrate: ve,
        createApp: sb(X, ve)
    }
}
function Ba({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Cr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function zp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function nu(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (de(r) && de(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let a = i[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = ur(i[o]),
            a.el = s.el),
            n || nu(s, a)),
            a.type === zr && (a.el = s.el)
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
function Qp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Qp(t)
}
const vb = e=>e.__isTeleport
  , Gi = e=>e && (e.disabled || e.disabled === "")
  , mf = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , yf = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , Cl = (e,t)=>{
    const n = e && e.to;
    return at(n) ? t ? t(n) : null : n
}
  , bb = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, a, l, u) {
        const {mc: c, pc: f, pbc: d, o: {insert: m, querySelector: b, createText: _, createComment: S}} = u
          , y = Gi(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: g} = t;
        if (e == null) {
            const T = t.el = _("")
              , w = t.anchor = _("");
            m(T, n, r),
            m(w, n, r);
            const L = t.target = Cl(t.props, b)
              , O = t.targetAnchor = _("");
            L && (m(O, L),
            s === "svg" || mf(L) ? s = "svg" : (s === "mathml" || yf(L)) && (s = "mathml"));
            const C = (N,H)=>{
                E & 16 && c(p, N, H, i, o, s, a, l)
            }
            ;
            y ? C(n, w) : L && C(L, O)
        } else {
            t.el = e.el;
            const T = t.anchor = e.anchor
              , w = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , O = Gi(e.props)
              , C = O ? n : w
              , N = O ? T : L;
            if (s === "svg" || mf(w) ? s = "svg" : (s === "mathml" || yf(w)) && (s = "mathml"),
            g ? (d(e.dynamicChildren, g, C, i, o, s, a),
            nu(e, t, !0)) : l || f(e, t, C, N, i, o, s, a, !1),
            y)
                O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ss(t, n, T, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const H = t.target = Cl(t.props, b);
                H && ss(t, H, null, u, 0)
            } else
                O && ss(t, w, L, u, 1)
        }
        Xp(t)
    },
    remove(e, t, n, r, {um: i, o: {remove: o}}, s) {
        const {shapeFlag: a, children: l, anchor: u, targetAnchor: c, target: f, props: d} = e;
        if (f && o(c),
        s && o(u),
        a & 16) {
            const m = s || !Gi(d);
            for (let b = 0; b < l.length; b++) {
                const _ = l[b];
                i(_, t, n, m, !!_.dynamicChildren)
            }
        }
    },
    move: ss,
    hydrate: _b
};
function ss(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: u, props: c} = e
      , f = o === 2;
    if (f && r(s, t, n),
    (!f || Gi(c)) && l & 16)
        for (let d = 0; d < u.length; d++)
            i(u[d], t, n, 2);
    f && r(a, t, n)
}
function _b(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: a, querySelector: l}}, u) {
    const c = t.target = Cl(t.props, l);
    if (c) {
        const f = c._lpa || c.firstChild;
        if (t.shapeFlag & 16)
            if (Gi(t.props))
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
        Xp(t)
    }
    return t.anchor && s(t.anchor)
}
const Eb = bb;
function Xp(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const gt = Symbol.for("v-fgt")
  , zr = Symbol.for("v-txt")
  , Vt = Symbol.for("v-cmt")
  , Wi = Symbol.for("v-stc")
  , Ji = [];
let an = null;
function me(e=!1) {
    Ji.push(an = e ? null : [])
}
function Zp() {
    Ji.pop(),
    an = Ji[Ji.length - 1] || null
}
let bi = 1;
function gf(e) {
    bi += e
}
function $p(e) {
    return e.dynamicChildren = bi > 0 ? an || ci : null,
    Zp(),
    bi > 0 && an && an.push(e),
    e
}
function Qe(e, t, n, r, i, o) {
    return $p(ye(e, t, n, r, i, o, !0))
}
function Tt(e, t, n, r, i) {
    return $p(tt(e, t, n, r, i, !0))
}
function _i(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function gn(e, t) {
    return e.type === t.type && e.key === t.key
}
const aa = "__vInternal"
  , em = ({key: e})=>e ?? null
  , ys = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? at(e) || ut(e) || ge(e) ? {
    i: yt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function ye(e, t=null, n=null, r=0, i=null, o=e === gt ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && em(t),
        ref: t && ys(t),
        scopeId: ra,
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
        ctx: yt
    };
    return a ? (ru(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= at(n) ? 8 : 16),
    bi > 0 && !s && an && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && an.push(l),
    l
}
const tt = Tb;
function Tb(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === Cp) && (e = Vt),
    _i(e)) {
        const a = Jn(e, t, !0);
        return n && ru(a, n),
        bi > 0 && !o && an && (a.shapeFlag & 6 ? an[an.indexOf(e)] = a : an.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (Cb(e) && (e = e.__vccOpts),
    t) {
        t = Qt(t);
        let {class: a, style: l} = t;
        a && !at(a) && (t.class = Nt(a)),
        it(l) && (vp(l) && !de(l) && (l = bt({}, l)),
        t.style = Nn(l))
    }
    const s = at(e) ? 1 : Rp(e) ? 128 : vb(e) ? 64 : it(e) ? 4 : ge(e) ? 2 : 0;
    return ye(e, t, n, r, i, s, o, !0)
}
function Qt(e) {
    return e ? vp(e) || aa in e ? bt({}, e) : e : null
}
function Jn(e, t, n=!1) {
    const {props: r, ref: i, patchFlag: o, children: s} = e
      , a = t ? Ei(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && em(a),
        ref: t && t.ref ? n && i ? de(i) ? i.concat(ys(t)) : [i, ys(t)] : ys(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== gt ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Jn(e.ssContent),
        ssFallback: e.ssFallback && Jn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function tm(e=" ", t=0) {
    return tt(zr, null, e, t)
}
function xM(e, t) {
    const n = tt(Wi, null, e);
    return n.staticCount = t,
    n
}
function Jt(e="", t=!1) {
    return t ? (me(),
    Tt(Vt, null, e)) : tt(Vt, null, e)
}
function nn(e) {
    return e == null || typeof e == "boolean" ? tt(Vt) : de(e) ? tt(gt, null, e.slice()) : typeof e == "object" ? ur(e) : tt(zr, null, String(e))
}
function ur(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e)
}
function ru(e, t) {
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
            ru(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(aa in t) ? t._ctx = yt : i === 3 && yt && (yt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ge(t) ? (t = {
            default: t,
            _ctx: yt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [tm(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Ei(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = Nt([t.class, r.class]));
            else if (i === "style")
                t.style = Nn([t.style, r.style]);
            else if (Po(i)) {
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
const kb = jp();
let Sb = 0;
function wb(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || kb
      , o = {
        uid: Sb++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new sp(!0),
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
        propsOptions: Yp(r, i),
        emitsOptions: Op(r, i),
        emit: null,
        emitted: null,
        propsDefaults: ot,
        inheritAttrs: r.inheritAttrs,
        ctx: ot,
        data: ot,
        props: ot,
        attrs: ot,
        slots: ot,
        refs: ot,
        setupState: ot,
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
    o.emit = b0.bind(null, o),
    e.ce && e.ce(o),
    o
}
let kt = null;
const wn = ()=>kt || yt;
let Ps, Rl;
{
    const e = rp()
      , t = (n,r)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o=>{
            i.length > 1 ? i.forEach(s=>s(o)) : i[0](o)
        }
    }
    ;
    Ps = t("__VUE_INSTANCE_SETTERS__", n=>kt = n),
    Rl = t("__VUE_SSR_SETTERS__", n=>la = n)
}
const Qr = e=>{
    const t = kt;
    return Ps(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Ps(t)
    }
}
  , Il = ()=>{
    kt && kt.scope.off(),
    Ps(null)
}
;
function nm(e) {
    return e.vnode.shapeFlag & 4
}
let la = !1;
function Ab(e, t=!1) {
    t && Rl(t);
    const {props: n, children: r} = e.vnode
      , i = nm(e);
    ab(e, n, i, t),
    ub(e, r);
    const o = i ? Lb(e, t) : void 0;
    return t && Rl(!1),
    o
}
function Lb(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = mt(new Proxy(e.ctx,Q0));
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? im(e) : null
          , o = Qr(e);
        $r();
        const s = br(r, e, 0, [e.props, i]);
        if (ei(),
        o(),
        Mc(s)) {
            if (s.then(Il, Il),
            t)
                return s.then(a=>{
                    Pl(e, a, t)
                }
                ).catch(a=>{
                    Vo(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Pl(e, s, t)
    } else
        rm(e, t)
}
function Pl(e, t, n) {
    ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : it(t) && (e.setupState = Tp(t)),
    rm(e, n)
}
let vf;
function rm(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && vf && !r.render) {
            const i = r.template || $c(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = bt(bt({
                    isCustomElement: o,
                    delimiters: a
                }, s), l);
                r.render = vf(i, u)
            }
        }
        e.render = r.render || sn
    }
    {
        const i = Qr(e);
        $r();
        try {
            eb(e)
        } finally {
            ei(),
            i()
        }
    }
}
function Ob(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return Yt(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function im(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return Ob(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ca(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Tp(mt(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in qi)
                    return qi[n](e)
            },
            has(t, n) {
                return n in t || n in qi
            }
        }))
}
function Ml(e, t=!0) {
    return ge(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Cb(e) {
    return ge(e) && "__vccOpts"in e
}
const fe = (e,t)=>c0(e, t, la);
function ht(e, t, n) {
    const r = arguments.length;
    return r === 2 ? it(t) && !de(t) ? _i(t) ? tt(e, null, [t]) : tt(e, t) : tt(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && _i(n) && (n = [n]),
    tt(e, t, n))
}
const om = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Rb = "http://www.w3.org/2000/svg"
  , Ib = "http://www.w3.org/1998/Math/MathML"
  , fr = typeof document < "u" ? document : null
  , bf = fr && fr.createElement("template")
  , Pb = {
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
        const i = t === "svg" ? fr.createElementNS(Rb, e) : t === "mathml" ? fr.createElementNS(Ib, e) : fr.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e=>fr.createTextNode(e),
    createComment: e=>fr.createComment(e),
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
    querySelector: e=>fr.querySelector(e),
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
            bf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = bf.content;
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
  , er = "transition"
  , Fi = "animation"
  , yo = Symbol("_vtc")
  , Fo = (e,{slots: t})=>ht(x0, Mb(e), t);
Fo.displayName = "Transition";
const sm = {
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
Fo.props = bt({}, Mp, sm);
const Rr = (e,t=[])=>{
    de(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , _f = e=>e ? de(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function Mb(e) {
    const t = {};
    for (const B in e)
        B in sm || (t[B] = e[B]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: u=s, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , b = Db(i)
      , _ = b && b[0]
      , S = b && b[1]
      , {onBeforeEnter: y, onEnter: E, onEnterCancelled: p, onLeave: g, onLeaveCancelled: T, onBeforeAppear: w=y, onAppear: L=E, onAppearCancelled: O=p} = t
      , C = (B,ee,W)=>{
        Ir(B, ee ? c : a),
        Ir(B, ee ? u : s),
        W && W()
    }
      , N = (B,ee)=>{
        B._isLeaving = !1,
        Ir(B, f),
        Ir(B, m),
        Ir(B, d),
        ee && ee()
    }
      , H = B=>(ee,W)=>{
        const Y = B ? L : E
          , V = ()=>C(ee, B, W);
        Rr(Y, [ee, V]),
        Ef(()=>{
            Ir(ee, B ? l : o),
            tr(ee, B ? c : a),
            _f(Y) || Tf(ee, r, _, V)
        }
        )
    }
    ;
    return bt(t, {
        onBeforeEnter(B) {
            Rr(y, [B]),
            tr(B, o),
            tr(B, s)
        },
        onBeforeAppear(B) {
            Rr(w, [B]),
            tr(B, l),
            tr(B, u)
        },
        onEnter: H(!1),
        onAppear: H(!0),
        onLeave(B, ee) {
            B._isLeaving = !0;
            const W = ()=>N(B, ee);
            tr(B, f),
            Fb(),
            tr(B, d),
            Ef(()=>{
                B._isLeaving && (Ir(B, f),
                tr(B, m),
                _f(g) || Tf(B, r, S, W))
            }
            ),
            Rr(g, [B, W])
        },
        onEnterCancelled(B) {
            C(B, !1),
            Rr(p, [B])
        },
        onAppearCancelled(B) {
            C(B, !0),
            Rr(O, [B])
        },
        onLeaveCancelled(B) {
            N(B),
            Rr(T, [B])
        }
    })
}
function Db(e) {
    if (e == null)
        return null;
    if (it(e))
        return [Ua(e.enter), Ua(e.leave)];
    {
        const t = Ua(e);
        return [t, t]
    }
}
function Ua(e) {
    return np(e)
}
function tr(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[yo] || (e[yo] = new Set)).add(t)
}
function Ir(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[yo];
    n && (n.delete(t),
    n.size || (e[yo] = void 0))
}
function Ef(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let Nb = 0;
function Tf(e, t, n, r) {
    const i = e._endId = ++Nb
      , o = ()=>{
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: a, propCount: l} = Vb(e, t);
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
function Vb(e, t) {
    const n = window.getComputedStyle(e)
      , r = b=>(n[b] || "").split(", ")
      , i = r(`${er}Delay`)
      , o = r(`${er}Duration`)
      , s = kf(i, o)
      , a = r(`${Fi}Delay`)
      , l = r(`${Fi}Duration`)
      , u = kf(a, l);
    let c = null
      , f = 0
      , d = 0;
    t === er ? s > 0 && (c = er,
    f = s,
    d = o.length) : t === Fi ? u > 0 && (c = Fi,
    f = u,
    d = l.length) : (f = Math.max(s, u),
    c = f > 0 ? s > u ? er : Fi : null,
    d = c ? c === er ? o.length : l.length : 0);
    const m = c === er && /\b(transform|all)(,|$)/.test(r(`${er}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function kf(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>Sf(n) + Sf(e[r])))
}
function Sf(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Fb() {
    return document.body.offsetHeight
}
function Bb(e, t, n) {
    const r = e[yo];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ms = Symbol("_vod")
  , am = Symbol("_vsh")
  , HM = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ms] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Bi(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Bi(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Bi(e, !1)
        }
        ) : Bi(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Bi(e, t)
    }
};
function Bi(e, t) {
    e.style.display = t ? e[Ms] : "none",
    e[am] = !t
}
const Ub = Symbol("")
  , xb = /(^|;)\s*display\s*:/;
function Hb(e, t, n) {
    const r = e.style
      , i = at(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (at(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && gs(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && gs(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            gs(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[Ub];
            s && (n += ";" + s),
            r.cssText = n,
            o = xb.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Ms in e && (e[Ms] = o ? r.display : "",
    e[am] && (r.display = "none"))
}
const wf = /\s*!important$/;
function gs(e, t, n) {
    if (de(n))
        n.forEach(r=>gs(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = jb(e, t);
        wf.test(n) ? e.setProperty(Zr(r), n.replace(wf, ""), "important") : e[r] = n
    }
}
const Af = ["Webkit", "Moz", "ms"]
  , xa = {};
function jb(e, t) {
    const n = xa[t];
    if (n)
        return n;
    let r = Bn(t);
    if (r !== "filter" && r in e)
        return xa[t] = r;
    r = $s(r);
    for (let i = 0; i < Af.length; i++) {
        const o = Af[i] + r;
        if (o in e)
            return xa[t] = o
    }
    return t
}
const Lf = "http://www.w3.org/1999/xlink";
function Kb(e, t, n, r, i) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Lf, t.slice(6, t.length)) : e.setAttributeNS(Lf, t, n);
    else {
        const o = Hv(t);
        n == null || o && !ip(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function Yb(e, t, n, r, i, o, s) {
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
        u === "boolean" ? n = ip(n) : n == null && u === "string" ? (n = "",
        l = !0) : u === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function ii(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function qb(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Of = Symbol("_vei");
function Gb(e, t, n, r, i=null) {
    const o = e[Of] || (e[Of] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = Wb(t);
        if (r) {
            const u = o[t] = Qb(r, i);
            ii(e, a, u, l)
        } else
            s && (qb(e, a, s, l),
            o[t] = void 0)
    }
}
const Cf = /(?:Once|Passive|Capture)$/;
function Wb(e) {
    let t;
    if (Cf.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Cf); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Zr(e.slice(2)), t]
}
let Ha = 0;
const Jb = Promise.resolve()
  , zb = ()=>Ha || (Jb.then(()=>Ha = 0),
Ha = Date.now());
function Qb(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        cn(Xb(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = zb(),
    n
}
function Xb(e, t) {
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
const Rf = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Zb = (e,t,n,r,i,o,s,a,l)=>{
    const u = i === "svg";
    t === "class" ? Bb(e, r, u) : t === "style" ? Hb(e, n, r) : Po(t) ? Ic(t) || Gb(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : $b(e, t, r, u)) ? Yb(e, t, r, o, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Kb(e, t, r, u))
}
;
function $b(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Rf(t) && ge(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Rf(t) && at(n) ? !1 : t in e
}
const If = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return de(t) ? n=>di(t, n) : t
}
;
function e_(e) {
    e.target.composing = !0
}
function Pf(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const ja = Symbol("_assign")
  , jM = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[ja] = If(i);
        const o = r || i.props && i.props.type === "number";
        ii(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            o && (a = ml(a)),
            e[ja](a)
        }
        ),
        n && ii(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (ii(e, "compositionstart", e_),
        ii(e, "compositionend", Pf),
        ii(e, "change", Pf))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: i}}, o) {
        if (e[ja] = If(o),
        e.composing)
            return;
        const s = i || e.type === "number" ? ml(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , t_ = ["ctrl", "shift", "alt", "meta"]
  , n_ = {
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
    exact: (e,t)=>t_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , KM = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i,...o)=>{
        for (let s = 0; s < t.length; s++) {
            const a = n_[t[s]];
            if (a && a(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , r_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , i_ = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i=>{
        if (!("key"in i))
            return;
        const o = Zr(i.key);
        if (t.some(s=>s === o || r_[s] === o))
            return e(i)
    }
    )
}
  , lm = bt({
    patchProp: Zb
}, Pb);
let zi, Mf = !1;
function o_() {
    return zi || (zi = mb(lm))
}
function s_() {
    return zi = Mf ? zi : yb(lm),
    Mf = !0,
    zi
}
const cm = (...e)=>{
    const t = o_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = fm(r);
        if (!i)
            return;
        const o = t._component;
        !ge(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, um(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , a_ = (...e)=>{
    const t = s_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const i = fm(r);
        if (i)
            return n(i, !0, um(i))
    }
    ,
    t
}
;
function um(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function fm(e) {
    return at(e) ? document.querySelector(e) : e
}
const l_ = /#/g
  , c_ = /&/g
  , u_ = /\//g
  , f_ = /=/g
  , iu = /\+/g
  , d_ = /%5e/gi
  , h_ = /%60/gi
  , p_ = /%7c/gi
  , m_ = /%20/gi;
function y_(e) {
    return encodeURI("" + e).replace(p_, "|")
}
function Dl(e) {
    return y_(typeof e == "string" ? e : JSON.stringify(e)).replace(iu, "%2B").replace(m_, "+").replace(l_, "%23").replace(c_, "%26").replace(h_, "`").replace(d_, "^").replace(u_, "%2F")
}
function Ka(e) {
    return Dl(e).replace(f_, "%3D")
}
function Ds(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function g_(e) {
    return Ds(e.replace(iu, " "))
}
function v_(e) {
    return Ds(e.replace(iu, " "))
}
function ou(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = g_(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const o = v_(r[2] || "");
        t[i] === void 0 ? t[i] = o : Array.isArray(t[i]) ? t[i].push(o) : t[i] = [t[i], o]
    }
    return t
}
function b_(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Ka(e)}=${Dl(n)}`).join("&") : `${Ka(e)}=${Dl(t)}` : Ka(e)
}
function __(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>b_(t, e[t])).filter(Boolean).join("&")
}
const E_ = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , T_ = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , k_ = /^([/\\]\s*){2,}[^/\\]/
  , S_ = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , w_ = /\/$|\/\?|\/#/
  , A_ = /^\.?\//;
function xn(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? E_.test(e) : T_.test(e) || (t.acceptRelative ? k_.test(e) : !1)
}
function L_(e) {
    return !!e && S_.test(e)
}
function Nl(e="", t) {
    return t ? w_.test(e) : e.endsWith("/")
}
function Bo(e="", t) {
    if (!t)
        return (Nl(e) ? e.slice(0, -1) : e) || "/";
    if (!Nl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const i = e.indexOf("#");
    i >= 0 && (n = e.slice(0, i),
    r = e.slice(i));
    const [o,...s] = n.split("?");
    return (o.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function go(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (Nl(e, !0))
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
function O_(e="") {
    return e.startsWith("/")
}
function Df(e="") {
    return O_(e) ? e : "/" + e
}
function C_(e, t) {
    if (hm(t) || xn(e))
        return e;
    const n = Bo(t);
    return e.startsWith(n) ? e : Mi(n, e)
}
function Nf(e, t) {
    if (hm(t))
        return e;
    const n = Bo(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function dm(e, t) {
    const n = Uo(e)
      , r = {
        ...ou(n.search),
        ...t
    };
    return n.search = __(r),
    I_(n)
}
function hm(e) {
    return !e || e === "/"
}
function R_(e) {
    return e && e !== "/"
}
function Mi(e, ...t) {
    let n = e || "";
    for (const r of t.filter(i=>R_(i)))
        if (n) {
            const i = r.replace(A_, "");
            n = go(n) + i
        } else
            n = r;
    return n
}
function Vl(e, t, n={}) {
    return n.trailingSlash || (e = go(e),
    t = go(t)),
    n.leadingSlash || (e = Df(e),
    t = Df(t)),
    n.encoding || (e = Ds(e),
    t = Ds(t)),
    e === t
}
const pm = Symbol.for("ufo:protocolRelative");
function Uo(e="", t) {
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
        return t ? Uo(t + e) : Fl(e);
    const [,r="",i,o=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = o.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: u, hash: c} = Fl(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
        host: s,
        pathname: l,
        search: u,
        hash: c,
        [pm]: !r
    }
}
function Fl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function I_(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , i = e.auth ? e.auth + "@" : ""
      , o = e.host || "";
    return (e.protocol || e[pm] ? (e.protocol || "") + "//" : "") + i + o + t + n + r
}
const P_ = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Ns = P_().app
  , M_ = ()=>Ns.baseURL
  , D_ = ()=>Ns.buildAssetsDir
  , su = (...e)=>Mi(mm(), D_(), ...e)
  , mm = (...e)=>{
    const t = Ns.cdnURL || Ns.baseURL;
    return e.length ? Mi(t, ...e) : t
}
;
globalThis.__buildAssetsURL = su,
globalThis.__publicAssetsURL = mm;
const N_ = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , V_ = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , F_ = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function B_(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        U_(e);
        return
    }
    return t
}
function U_(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function vo(e, t={}) {
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
    if (!F_.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (N_.test(e) || V_.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, B_)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class x_ extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function H_(e) {
    var l, u, c, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((u = e.error) == null ? void 0 : u.toString()) || ""
      , n = ((c = e.request) == null ? void 0 : c.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , i = `[${n}] ${JSON.stringify(r)}`
      , o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${i}: ${o}${t ? ` ${t}` : ""}`
      , a = new x_(s,e.error ? {
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
const j_ = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Vf(e="GET") {
    return j_.has(e.toUpperCase())
}
function K_(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Y_ = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , q_ = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function G_(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return q_.test(t) ? "json" : Y_.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function W_(e, t, n=globalThis.Headers) {
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
const J_ = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , z_ = new Set([101, 204, 205, 304]);
function ym(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function i(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = Vf(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : J_.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                o(a.request, {
                    ...a.options,
                    retry: c - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const u = H_(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, o),
        u
    }
    const o = async function(l, u={}) {
        var d;
        const c = {
            request: l,
            options: W_(u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (c.options.method = (d = c.options.method) == null ? void 0 : d.toUpperCase(),
        c.options.onRequest && await c.options.onRequest(c),
        typeof c.request == "string" && (c.options.baseURL && (c.request = C_(c.request, c.options.baseURL)),
        (c.options.query || c.options.params) && (c.request = dm(c.request, {
            ...c.options.params,
            ...c.options.query
        }))),
        c.options.body && Vf(c.options.method) && (K_(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body),
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
        if (c.response.body && !z_.has(c.response.status) && c.options.method !== "HEAD") {
            const m = (c.options.parseResponse ? "json" : c.options.responseType) || G_(c.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const b = await c.response.text()
                      , _ = c.options.parseResponse || vo;
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
    s.create = (a={})=>ym({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const au = function() {
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
  , Q_ = au.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , X_ = au.Headers
  , Z_ = au.AbortController
  , $_ = ym({
    fetch: Q_,
    Headers: X_,
    AbortController: Z_
})
  , eE = $_;
globalThis.$fetch || (globalThis.$fetch = eE.create({
    baseURL: M_()
}));
function Bl(e, t={}, n) {
    for (const r in e) {
        const i = e[r]
          , o = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? Bl(i, t, o) : typeof i == "function" && (t[o] = i)
    }
    return t
}
const tE = {
    run: e=>e()
}
  , nE = ()=>tE
  , gm = typeof console.createTask < "u" ? console.createTask : nE;
function rE(e, t) {
    const n = t.shift()
      , r = gm(n);
    return e.reduce((i,o)=>i.then(()=>r.run(()=>o(...t))), Promise.resolve())
}
function iE(e, t) {
    const n = t.shift()
      , r = gm(n);
    return Promise.all(e.map(i=>r.run(()=>i(...t))))
}
function Ya(e, t) {
    for (const n of [...e])
        n(t)
}
class oE {
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
        const n = Bl(t)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(t) {
        const n = Bl(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(rE, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(iE, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Ya(this._before, i);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(()=>{
            this._after && i && Ya(this._after, i)
        }
        ) : (this._after && i && Ya(this._after, i),
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
function vm() {
    return new oE
}
function sE(e={}) {
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
            Ul.add(u);
            try {
                const c = i ? i.run(s, a) : a();
                return n || (t = void 0),
                await c
            } finally {
                Ul.delete(u)
            }
        }
    }
}
function aE(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = sE({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const Vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Ff = "__unctx__"
  , lE = Vs[Ff] || (Vs[Ff] = aE())
  , cE = (e,t={})=>lE.get(e, t)
  , Bf = "__unctx_async_handlers__"
  , Ul = Vs[Bf] || (Vs[Bf] = new Set);
function Pn(e) {
    const t = [];
    for (const i of Ul) {
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
const bm = cE("nuxt-app", {
    asyncContext: !1
})
  , uE = "__nuxt_plugin";
function fE(e) {
    let t = 0;
    const n = {
        _scope: Do(),
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
        payload: Lt({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: i=>n._scope.run(()=>pE(n, i)),
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
    n.hooks = vm(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (i,o)=>{
        const s = "$" + i;
        as(n, s, o),
        as(n.vueApp.config.globalProperties, s, o)
    }
    ,
    as(n.vueApp, "$nuxt", n),
    as(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", o=>{
            n.callHook("app:chunkError", {
                error: o.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || $;
        const i = n.hook("app:error", (...o)=>{
            console.error("[nuxt] error caught during app initialization", ...o)
        }
        );
        n.hook("app:mounted", i)
    }
    const r = Lt(n.payload.config);
    return n.provide("config", r),
    n
}
async function dE(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function hE(e, t) {
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
            const f = dE(e, l).then(async()=>{
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
        [uE]: !0,
        _name: t
    })
}
function pE(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return bm.set(e),
    e.vueApp.runWithContext(r)
}
function mE() {
    var t;
    let e;
    return eu() && (e = (t = wn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || bm.tryUse(),
    e || null
}
function $() {
    const e = mE();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function Qn(e) {
    return $().$config
}
function as(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const ls = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function yE(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , i = (t || {}).decode || bE;
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
            n[l] = vE(u, i)
        }
        o = a + 1
    }
    return n
}
function Uf(e, t, n) {
    const r = n || {}
      , i = r.encode || _E;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!ls.test(e))
        throw new TypeError("argument name is invalid");
    const o = i(t);
    if (o && !ls.test(o))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!ls.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!ls.test(r.path))
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
function vE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function bE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function _E(e) {
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
function Hf(e, t) {
    t ? t = {
        ...xf,
        ...t
    } : t = xf;
    const n = _m(t);
    return n.dispatch(e),
    n.toString()
}
const EE = Object.freeze(["prototype", "__proto__", "constructor"]);
function _m(e) {
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
                e.respectType !== !1 && !jf(i) && (c = EE),
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
                const u = _m(e);
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
            jf(i) ? this.dispatch("[native]") : this.dispatch(i.toString()),
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
const Em = "[native code] }"
  , TE = Em.length;
function jf(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-TE) === Em
}
function kE(e, t, n={}) {
    return e === t || Hf(e, n) === Hf(t, n)
}
function SE(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>km(t, e)
    }
}
function Tm(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,i])=>[r, Tm(i)])) : new Map(Object.entries(e[n]));
    return t
}
function wE(e) {
    return SE(Tm(e))
}
function km(e, t) {
    const n = [];
    for (const [i,o] of Kf(t.wildcard))
        e.startsWith(i) && n.push(o);
    for (const [i,o] of Kf(t.dynamic))
        if (e.startsWith(i + "/")) {
            const s = "/" + e.slice(i.length).split("/").splice(2).join("/");
            n.push(...km(s, o))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function Kf(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function qa(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function xl(e, t, n=".", r) {
    if (!qa(t))
        return xl(e, {}, n, r);
    const i = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor")
            continue;
        const s = e[o];
        s != null && (r && r(i, o, s, n) || (Array.isArray(s) && Array.isArray(i[o]) ? i[o] = [...s, ...i[o]] : qa(s) && qa(i[o]) ? i[o] = xl(s, i[o], (n ? `${n}.` : "") + o.toString(), r) : i[o] = s))
    }
    return i
}
function Sm(e) {
    return (...t)=>t.reduce((n,r)=>xl(n, r, "", e), {})
}
const lu = Sm()
  , AE = Sm((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function LE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var OE = Object.defineProperty
  , CE = (e,t,n)=>t in e ? OE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Vr = (e,t,n)=>(CE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Hl extends Error {
    constructor(t, n={}) {
        super(t, n),
        Vr(this, "statusCode", 500),
        Vr(this, "fatal", !1),
        Vr(this, "unhandled", !1),
        Vr(this, "statusMessage"),
        Vr(this, "data"),
        Vr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Kl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = wm(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
Vr(Hl, "__h3_error__", !0);
function jl(e) {
    if (typeof e == "string")
        return new Hl(e);
    if (RE(e))
        return e;
    const t = new Hl(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (LE(e, "stack"))
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
    e.statusCode ? t.statusCode = Kl(e.statusCode, t.statusCode) : e.status && (t.statusCode = Kl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        wm(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function RE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const IE = /[^\u0009\u0020-\u007E]/g;
function wm(e="") {
    return e.replace(IE, "")
}
function Kl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const Am = Symbol("layout-meta")
  , xo = Symbol("route")
  , Xt = ()=>{
    var e;
    return (e = $()) == null ? void 0 : e.$router
}
  , ua = ()=>eu() ? At(xo, $()._route) : $()._route;
const PE = (e,t,n={})=>{
    const r = $()
      , i = n.global || typeof e != "string"
      , o = typeof e != "string" ? e : t;
    if (!o) {
        console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
        return
    }
    i ? r._middleware.global.push(o) : r._middleware.named[e] = o
}
  , ME = ()=>{
    try {
        if ($()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , Ho = (e,t)=>{
    e || (e = "/");
    const n = typeof e == "string" ? e : dm(e.path || "/", e.query || {}) + (e.hash || "");
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
        const a = Uo(n).protocol;
        if (a && L_(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const i = ME();
    if (!r && i)
        return e;
    const o = Xt()
      , s = $();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    i ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
}
  , Lm = "__nuxt_error"
  , fa = ()=>ai($().payload, "error")
  , li = e=>{
    const t = da(e);
    try {
        const n = $()
          , r = fa();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , DE = async(e={})=>{
    const t = $()
      , n = fa();
    t.callHook("app:error:cleared", e),
    e.redirect && await Xt().replace(e.redirect),
    n.value = null
}
  , NE = e=>!!e && typeof e == "object" && Lm in e
  , da = e=>{
    const t = jl(e);
    return Object.defineProperty(t, Lm, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , VE = "modulepreload"
  , FE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , Yf = {}
  , BE = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        i = Promise.all(n.map(s=>{
            if (s = FE(s, r),
            s in Yf)
                return;
            Yf[s] = !0;
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
            if (c.rel = a ? "stylesheet" : VE,
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
  , k = (...e)=>BE(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , UE = -1
  , xE = -2
  , HE = -3
  , jE = -4
  , KE = -5
  , YE = -6;
function qE(e, t) {
    return GE(JSON.parse(e), t)
}
function GE(e, t) {
    if (typeof e == "number")
        return i(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function i(o, s=!1) {
        if (o === UE)
            return;
        if (o === HE)
            return NaN;
        if (o === jE)
            return 1 / 0;
        if (o === KE)
            return -1 / 0;
        if (o === YE)
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
                    c !== xE && (l[u] = i(c))
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
function WE(e) {
    return Array.isArray(e) ? e : [e]
}
const JE = ["title", "titleTemplate", "script", "style", "noscript"]
  , vs = ["base", "meta", "link", "style", "script", "noscript"]
  , zE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , QE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , Om = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , XE = typeof window < "u";
function cu(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function qf(e) {
    return e._h || cu(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function Cm(e, t) {
    const {props: n, tag: r} = e;
    if (QE.includes(r))
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
function Gf(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function Rm(e, t) {
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
            return typeof u == "object" ? Rm(u, t) : Array.isArray(u) ? u : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: u
            }
        }
        ).flat());
    return n
}
function Im(e, t) {
    return Object.entries(e).map(([n,r])=>{
        if (typeof r == "object" && (r = Im(r, t)),
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
  , Ga = e=>({
    keyValue: e
})
  , uu = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${qn(e)}=${t}`
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
                return `${qn(e)} ${t}`
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
    msapplicationConfig: Ga("msapplication-Config"),
    msapplicationTileColor: Ga("msapplication-TileColor"),
    msapplicationTileImage: Ga("msapplication-TileImage"),
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
                return typeof t == "boolean" ? `${qn(e)}` : `${qn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , Pm = ["og", "book", "article", "profile"];
function Mm(e) {
    var n;
    const t = qn(e).split(":")[0];
    return Pm.includes(t) ? "property" : ((n = uu[e]) == null ? void 0 : n.metaKey) || "name"
}
function ZE(e) {
    var t;
    return ((t = uu[e]) == null ? void 0 : t.keyValue) || qn(e)
}
function qn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return Pm.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function Yl(e) {
    if (Array.isArray(e))
        return e.map(n=>Yl(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[qn(n)] = Yl(r);
    return t
}
function $E(e, t) {
    const n = uu[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Im(Yl(e), {
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
const Dm = ["og:image", "og:video", "og:audio", "twitter:image"];
function Nm(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function Wf(e, t) {
    const n = Nm(t)
      , r = qn(e)
      , i = Mm(r);
    if (Dm.includes(r)) {
        const o = {};
        return Object.entries(n).forEach(([s,a])=>{
            o[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Vm(o).sort((s,a)=>{
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
function Vm(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([i,o])=>{
        if (!Array.isArray(o)) {
            if (typeof o == "object" && o) {
                if (Dm.includes(qn(i))) {
                    t.push(...Wf(i, o));
                    return
                }
                n[i] = Nm(o)
            } else
                n[i] = o;
            return
        }
        o.forEach(s=>{
            t.push(...typeof s == "string" ? Vm({
                [i]: s
            }) : Wf(i, s))
        }
        )
    }
    );
    const r = Rm(n, {
        key({key: i}) {
            return Mm(i)
        },
        value({key: i}) {
            return i === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: i}) {
            return ZE(i)
        },
        resolveValueData({value: i, key: o}) {
            return i === null ? "_null" : typeof i == "object" ? $E(i, o) : typeof i == "number" ? i.toString() : i
        }
    });
    return [...t, ...r].map(i=>(i.content === "_null" && (i.content = null),
    i))
}
async function eT(e, t, n) {
    const r = {
        tag: e,
        props: await Fm(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Om.forEach(i=>{
        const o = typeof r.props[i] < "u" ? r.props[i] : n[i];
        typeof o < "u" && ((!["innerHTML", "textContent", "children"].includes(i) || JE.includes(r.tag)) && (r[i === "children" ? "innerHTML" : i] = o),
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
function tT(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function Fm(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = tT(e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !Om.includes(n)) {
            const r = String(e[n])
              , i = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = i ? "true" : !0 : e[n] || (i && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const nT = 10;
async function rT(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && zE.includes(n)).forEach(([n,r])=>{
        const i = WE(r);
        t.push(...i.map(o=>eT(n, o, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << nT) + r,
    n))
}
const Jf = {
    base: -10,
    title: 10
}
  , zf = {
    critical: -80,
    high: -10,
    low: 20
};
function Fs(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Jf && (t = Jf[e.tag]),
    typeof n == "string" && n in zf ? t + zf[n] : t)
}
const iT = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Bm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , nr = "%separator";
function bs(e, t, n) {
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
    e.includes(nr) && (e.endsWith(nr) && (e = e.slice(0, -nr.length).trim()),
    e.startsWith(nr) && (e = e.slice(nr.length).trim()),
    e = e.replace(new RegExp(`\\${nr}\\s*\\${nr}`,"g"), nr),
    e = bs(e, {
        separator: n
    }, n)),
    e
}
async function oT(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Fm(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = Cm(t),
    t
}
async function Um(e, t={}) {
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
        id: vs.includes(f.tag) ? qf(f) : f.tag,
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
            for (const m of [...d].filter(b=>vs.includes(b.tagName.toLowerCase())))
                o.elMap[m.getAttribute("data-hid") || qf(await oT(m))] = m
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
            const y = `attr:${_}`;
            if (_ === "class")
                for (const E of (S || "").split(" ").filter(Boolean))
                    b && s(f, `${y}:${E}`, ()=>d.classList.remove(E)),
                    !d.classList.contains(E) && d.classList.add(E);
            else
                d.getAttribute(_) !== S && d.setAttribute(_, S === !0 ? "" : String(S)),
                b && s(f, y, ()=>d.removeAttribute(_))
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
            f.$el ? a(f) : vs.includes(d.tag) && l.push(f)
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
async function sT(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await Um(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function aT(e) {
    return t=>{
        var r, i;
        const n = ((i = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : i.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(o) {
                    sT(o, e)
                }
            }
        }
    }
}
const lT = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , cT = {
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
                    if (!a && lT.includes(r.tag) && (a = "merge"),
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
                    } else if (Fs(r) > Fs(o))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (vs.includes(r.tag) && s === 0) {
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
  , uT = {
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
  , fT = ["script", "link", "bodyAttrs"];
function dT(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,i])=>{
        r.startsWith("on") && typeof i == "function" ? (Bm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = i) : t[r] = i
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const hT = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (fT.includes(n.tag)) {
                    const {props: r, eventHandlers: i} = dT(n);
                    n.props = r,
                    Object.keys(i).length && ((n.props.src || n.props.href) && (n.key = n.key || cu(n.props.src || n.props.href)),
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
                o in t.$el.dataset ? f(new Event(o.replace("on", ""))) : Bm.includes(o) && typeof MutationObserver < "u" ? (c = new MutationObserver(d=>{
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
  , pT = ["link", "style", "script", "noscript"]
  , mT = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && pT.includes(e.tag) && (e.props["data-hid"] = e._h = cu(e.key))
        }
    }
}
  , yT = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(i=>i._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of iT)
                for (const i of e.tags.filter(o=>typeof o.tagPriority == "string" && o.tagPriority.startsWith(n))) {
                    const o = t(i.tagPriority.replace(n, ""));
                    typeof o < "u" && (i._p = o + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>Fs(n) - Fs(r))
        }
    }
}
  , gT = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , vT = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , i = n.findIndex(l=>l.tag === "templateParams")
              , o = i !== -1 ? n[i].props : {}
              , s = o.separator || "|";
            delete o.separator,
            o.pageTitle = bs(o.pageTitle || r || "", o, s);
            for (const l of n.filter(u=>u.processTemplateParams !== !1)) {
                const u = gT[l.tag];
                u && typeof l.props[u] == "string" ? l.props[u] = bs(l.props[u], o, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(c=>{
                    typeof l[c] == "string" && (l[c] = bs(l[c], o, s))
                }
                )
            }
            e._templateParams = o,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , bT = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(i=>i.tag === "titleTemplate");
            const r = t.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = Gf(t[n].textContent, t[r].textContent);
                i !== null ? t[r].textContent = i || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const i = Gf(t[n].textContent);
                i !== null && (t[n].textContent = i,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , _T = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let xm;
function ET(e={}) {
    const t = TT(e);
    return t.use(aT()),
    xm = t
}
function Qf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function TT(e={}) {
    const t = vm();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (XE ? document : void 0);
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
            Qf(u.mode, n) && t.addHooks(u.hooks || {}))
        },
        push(l, u) {
            u == null || delete u.head;
            const c = {
                _i: i++,
                input: l,
                ...u
            };
            return Qf(c.mode, n) && (o.push(c),
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
                    for (const f of await rT(u)) {
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
    return [cT, uT, hT, mT, yT, vT, bT, _T, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function kT() {
    return xm
}
const ST = om.startsWith("3");
function wT(e) {
    return typeof e == "function" ? e() : J(e)
}
function Bs(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = wT(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Bs(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,i])=>r === "titleTemplate" || r.startsWith("on") ? [r, J(i)] : [r, Bs(i, r)])) : n
}
const AT = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Bs(t.input)
        }
    }
}
  , Hm = "usehead";
function LT(e) {
    return {
        install(n) {
            ST && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Hm, e))
        }
    }.install
}
function OT(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>zt(()=>setTimeout(()=>n(), 0)));
    const t = ET(e);
    return t.use(AT),
    t.install = LT(t),
    t
}
const ql = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Gl = "__unhead_injection_handler__";
function CT(e) {
    ql[Gl] = e
}
function RT() {
    if (Gl in ql)
        return ql[Gl]();
    const e = At(Hm);
    return e || kT()
}
function IT(e, t={}) {
    const n = t.head || RT();
    if (n)
        return n.ssr ? n.push(e, t) : PT(n, e, t)
}
function PT(e, t, n={}) {
    const r = ce(!1)
      , i = ce({});
    V0(()=>{
        i.value = r.value ? {} : Bs(t)
    }
    );
    const o = e.push(i.value, n);
    return qe(i, a=>{
        o.patch(a)
    }
    ),
    wn() && (Sn(()=>{
        o.dispose()
    }
    ),
    Fp(()=>{
        r.value = !0
    }
    ),
    Vp(()=>{
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
const MT = {
    nuxt: {
        buildId: "e2c0c800-0714-4974-af8d-e2e27972db6f"
    }
}
  , DT = AE(MT);
function NT() {
    const e = $();
    return e._appConfig || (e._appConfig = Lt(DT)),
    e._appConfig
}
const VT = !1
  , Wl = !1
  , FT = !1
  , BT = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , UT = "#__nuxt";
let _s, jm;
function xT() {
    var t;
    const e = (t = NT().nuxt) == null ? void 0 : t.buildId;
    return _s = $fetch(su(`builds/meta/${e}.json`)),
    _s.then(n=>{
        jm = wE(n.matcher)
    }
    ),
    _s
}
function ha() {
    return _s || xT()
}
async function Km(e) {
    return await ha(),
    lu({}, ...jm.matchAll(e).reverse())
}
function Xf(e, t={}) {
    const n = HT(e, t)
      , r = $()
      , i = r._payloadCache = r._payloadCache || {};
    return n in i || (i[n] = jT(e).then(o=>o ? Ym(n).then(s=>s || (delete i[n],
    null)) : (i[n] = null,
    null))),
    i[n]
}
const Zf = "json";
function HT(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || xn(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return Mi(Qn().app.baseURL, n.pathname, r ? `_payload.${r}.${Zf}` : `_payload.${Zf}`)
}
async function Ym(e) {
    const t = fetch(e).then(n=>n.text().then(qm));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function jT(e=ua().path) {
    if (e = Bo(e),
    (await ha()).prerendered.includes(e))
        return !0;
    const n = await Km(e);
    return !!n.prerender && !n.redirect
}
let cs = null;
async function KT() {
    if (cs)
        return cs;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await qm(e.textContent || "")
      , n = e.dataset.src ? await Ym(e.dataset.src) : void 0;
    return cs = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    cs
}
async function qm(e) {
    return await qE(e, $()._payloadRevivers)
}
function YT(e, t) {
    $()._payloadRevivers[e] = t
}
const $f = {
    NuxtError: e=>da(e),
    EmptyShallowRef: e=>En(e === "_" ? void 0 : e === "0n" ? BigInt(0) : vo(e)),
    EmptyRef: e=>ce(e === "_" ? void 0 : e === "0n" ? BigInt(0) : vo(e)),
    ShallowRef: e=>En(e),
    ShallowReactive: e=>Ii(e),
    Ref: e=>ce(e),
    Reactive: e=>Lt(e)
}
  , qT = Bt({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in $f)
            YT(r, $f[r]);
        Object.assign(e.payload, ([t,n] = Pn(()=>e.runWithContext(KT)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , GT = []
  , WT = Bt({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = OT({
            plugins: GT
        });
        CT(()=>$().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await Um(t)
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
const oi = typeof document < "u";
function JT(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const $e = Object.assign;
function Wa(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = Tn(i) ? i.map(e) : e(i)
    }
    return n
}
const Qi = ()=>{}
  , Tn = Array.isArray
  , Gm = /#/g
  , zT = /&/g
  , QT = /\//g
  , XT = /=/g
  , ZT = /\?/g
  , Wm = /\+/g
  , $T = /%5B/g
  , ek = /%5D/g
  , Jm = /%5E/g
  , tk = /%60/g
  , zm = /%7B/g
  , nk = /%7C/g
  , Qm = /%7D/g
  , rk = /%20/g;
function fu(e) {
    return encodeURI("" + e).replace(nk, "|").replace($T, "[").replace(ek, "]")
}
function ik(e) {
    return fu(e).replace(zm, "{").replace(Qm, "}").replace(Jm, "^")
}
function Jl(e) {
    return fu(e).replace(Wm, "%2B").replace(rk, "+").replace(Gm, "%23").replace(zT, "%26").replace(tk, "`").replace(zm, "{").replace(Qm, "}").replace(Jm, "^")
}
function ok(e) {
    return Jl(e).replace(XT, "%3D")
}
function sk(e) {
    return fu(e).replace(Gm, "%23").replace(ZT, "%3F")
}
function ak(e) {
    return e == null ? "" : sk(e).replace(QT, "%2F")
}
function bo(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const lk = /\/$/
  , ck = e=>e.replace(lk, "");
function Ja(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    i = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = hk(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: bo(s)
    }
}
function uk(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function ed(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function fk(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && Ti(t.matched[r], n.matched[i]) && Xm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Ti(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Xm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!dk(e[n], t[n]))
            return !1;
    return !0
}
function dk(e, t) {
    return Tn(e) ? td(e, t) : Tn(t) ? td(t, e) : e === t
}
function td(e, t) {
    return Tn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function hk(e, t) {
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
var _o;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(_o || (_o = {}));
var Xi;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Xi || (Xi = {}));
function pk(e) {
    if (!e)
        if (oi) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    ck(e)
}
const mk = /^[^#]+#/;
function yk(e, t) {
    return e.replace(mk, "#") + t
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
const pa = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function vk(e) {
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
function nd(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const zl = new Map;
function bk(e, t) {
    zl.set(e, t)
}
function _k(e) {
    const t = zl.get(e);
    return zl.delete(e),
    t
}
let Ek = ()=>location.protocol + "//" + location.host;
function Zm(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = i.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        ed(l, "")
    }
    return ed(n, e) + r + i
}
function Tk(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const a = ({state: d})=>{
        const m = Zm(e, location)
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
        i.forEach(y=>{
            y(n.value, b, {
                delta: S,
                type: _o.pop,
                direction: S ? S > 0 ? Xi.forward : Xi.back : Xi.unknown
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
        d.state && d.replaceState($e({}, d.state, {
            scroll: pa()
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
function rd(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? pa() : null
    }
}
function kk(e) {
    const {history: t, location: n} = window
      , r = {
        value: Zm(e, n)
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
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Ek() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d),
            i.value = u
        } catch (m) {
            console.error(m),
            n[c ? "replace" : "assign"](d)
        }
    }
    function s(l, u) {
        const c = $e({}, t.state, rd(i.value.back, l, i.value.forward, !0), u, {
            position: i.value.position
        });
        o(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = $e({}, i.value, t.state, {
            forward: l,
            scroll: pa()
        });
        o(c.current, c, !0);
        const f = $e({}, rd(r.value, l, null), {
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
function $m(e) {
    e = pk(e);
    const t = kk(e)
      , n = Tk(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = $e({
        location: "",
        base: e,
        go: r,
        createHref: yk.bind(null, e)
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
function Sk(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    $m(e)
}
function wk(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function ey(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const mn = {
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
  , ty = Symbol("");
var id;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(id || (id = {}));
function ki(e, t) {
    return $e(new Error, {
        type: e,
        [ty]: !0
    }, t)
}
function jn(e, t) {
    return e instanceof Error && ty in e && (t == null || !!(e.type & t))
}
const od = "[^/]+?"
  , Ak = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Lk = /[.+*?^${}()[\]/\\]/g;
function Ok(e, t) {
    const n = $e({}, Ak, t)
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
                i += d.value.replace(Lk, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: b, repeatable: _, optional: S, regexp: y} = d;
                o.push({
                    name: b,
                    repeatable: _,
                    optional: S
                });
                const E = y || od;
                if (E !== od) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (g) {
                        throw new Error(`Invalid custom RegExp for param "${b}" (${E}): ` + g.message)
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
                      , y = b in u ? u[b] : "";
                    if (Tn(y) && !_)
                        throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = Tn(y) ? y.join("/") : y;
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
function Rk(e, t) {
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
        if (sd(r))
            return 1;
        if (sd(i))
            return -1
    }
    return i.length - r.length
}
function sd(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Ik = {
    type: 0,
    value: ""
}
  , Pk = /[a-zA-Z0-9_]/;
function Mk(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Ik]];
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
            l === "(" ? n = 2 : Pk.test(l) ? d() : (f(),
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
function Dk(e, t, n) {
    const r = Ok(Mk(e.path), n)
      , i = $e(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i),
    i
}
function Nk(e, t) {
    const n = []
      , r = new Map;
    t = cd({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(c) {
        return r.get(c)
    }
    function o(c, f, d) {
        const m = !d
          , b = Vk(c);
        b.aliasOf = d && d.record;
        const _ = cd(t, c)
          , S = [b];
        if ("alias"in c) {
            const p = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const g of p)
                S.push($e({}, b, {
                    components: d ? d.record.components : b.components,
                    path: g,
                    aliasOf: d ? d.record : b
                }))
        }
        let y, E;
        for (const p of S) {
            const {path: g} = p;
            if (f && g[0] !== "/") {
                const T = f.record.path
                  , w = T[T.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (g && w + g)
            }
            if (y = Dk(p, f, _),
            d ? d.alias.push(y) : (E = E || y,
            E !== y && E.alias.push(y),
            m && c.name && !ld(y) && s(c.name)),
            b.children) {
                const T = b.children;
                for (let w = 0; w < T.length; w++)
                    o(T[w], y, d && d.children[w])
            }
            d = d || y,
            (y.record.components && Object.keys(y.record.components).length || y.record.name || y.record.redirect) && l(y)
        }
        return E ? ()=>{
            s(E)
        }
        : Qi
    }
    function s(c) {
        if (ey(c)) {
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
        for (; f < n.length && Rk(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !ny(c, n[f])); )
            f++;
        n.splice(f, 0, c),
        c.record.name && !ld(c) && r.set(c.record.name, c)
    }
    function u(c, f) {
        let d, m = {}, b, _;
        if ("name"in c && c.name) {
            if (d = r.get(c.name),
            !d)
                throw ki(1, {
                    location: c
                });
            _ = d.record.name,
            m = $e(ad(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), c.params && ad(c.params, d.keys.map(E=>E.name))),
            b = d.stringify(m)
        } else if (c.path != null)
            b = c.path,
            d = n.find(E=>E.re.test(b)),
            d && (m = d.parse(b),
            _ = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw ki(1, {
                    location: c,
                    currentLocation: f
                });
            _ = d.record.name,
            m = $e({}, f.params, c.params),
            b = d.stringify(m)
        }
        const S = [];
        let y = d;
        for (; y; )
            S.unshift(y.record),
            y = y.parent;
        return {
            name: _,
            path: b,
            params: m,
            matched: S,
            meta: Bk(S)
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
function ad(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function Vk(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Fk(e),
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
function Fk(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function ld(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function Bk(e) {
    return e.reduce((t,n)=>$e(t, n.meta), {})
}
function cd(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function ny(e, t) {
    return t.children.some(n=>n === e || ny(e, n))
}
function Uk(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(Wm, " ")
          , s = o.indexOf("=")
          , a = bo(s < 0 ? o : o.slice(0, s))
          , l = s < 0 ? null : bo(o.slice(s + 1));
        if (a in t) {
            let u = t[a];
            Tn(u) || (u = t[a] = [u]),
            u.push(l)
        } else
            t[a] = l
    }
    return t
}
function ud(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = ok(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Tn(r) ? r.map(o=>o && Jl(o)) : [r && Jl(r)]).forEach(o=>{
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function xk(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Tn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const Hk = Symbol("")
  , fd = Symbol("")
  , du = Symbol("")
  , hu = Symbol("")
  , Ql = Symbol("");
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
function dr(e, t, n, r, i, o=s=>s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return ()=>new Promise((a,l)=>{
        const u = d=>{
            d === !1 ? l(ki(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : wk(d) ? l(ki(2, {
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
function za(e, t, n, r, i=o=>o()) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (jk(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && o.push(dr(c, n, r, s, a, i))
                } else {
                    let u = l();
                    o.push(()=>u.then(c=>{
                        if (!c)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = JT(c) ? c.default : c;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && dr(m, n, r, s, a, i)()
                    }
                    ))
                }
        }
    return o
}
function jk(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function dd(e) {
    const t = At(du)
      , n = At(hu)
      , r = fe(()=>t.resolve(J(e.to)))
      , i = fe(()=>{
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const d = f.findIndex(Ti.bind(null, c));
        if (d > -1)
            return d;
        const m = hd(l[u - 2]);
        return u > 1 && hd(c) === m && f[f.length - 1].path !== m ? f.findIndex(Ti.bind(null, l[u - 2])) : d
    }
    )
      , o = fe(()=>i.value > -1 && Gk(n.params, r.value.params))
      , s = fe(()=>i.value > -1 && i.value === n.matched.length - 1 && Xm(n.params, r.value.params));
    function a(l={}) {
        return qk(l) ? t[J(e.replace) ? "replace" : "push"](J(e.to)).catch(Qi) : Promise.resolve()
    }
    return {
        route: r,
        href: fe(()=>r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: a
    }
}
const Kk = xe({
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
    useLink: dd,
    setup(e, {slots: t}) {
        const n = Lt(dd(e))
          , {options: r} = At(du)
          , i = fe(()=>({
            [pd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [pd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const o = t.default && t.default(n);
            return e.custom ? o : ht("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, o)
        }
    }
})
  , Yk = Kk;
function qk(e) {
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
function Gk(e, t) {
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
function hd(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const pd = (e,t,n)=>e ?? t ?? n
  , Wk = xe({
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
        const r = At(Ql)
          , i = fe(()=>e.route || r.value)
          , o = At(fd, 0)
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
        qr(fd, fe(()=>s.value + 1)),
        qr(Hk, a),
        qr(Ql, i);
        const l = ce();
        return qe(()=>[l.value, a.value, e.name], ([u,c,f],[d,m,b])=>{
            c && (c.instances[f] = u,
            m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
            c.updateGuards.size || (c.updateGuards = m.updateGuards))),
            u && c && (!m || !Ti(c, m) || !d) && (c.enterCallbacks[f] || []).forEach(_=>_(u))
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
                return md(n.default, {
                    Component: d,
                    route: u
                });
            const m = f.props[c]
              , b = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null
              , S = ht(d, $e({}, b, t, {
                onVnodeUnmounted: y=>{
                    y.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: l
            }));
            return md(n.default, {
                Component: S,
                route: u
            }) || S
        }
    }
});
function md(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const ry = Wk;
function Jk(e) {
    const t = Nk(e.routes, e)
      , n = e.parseQuery || Uk
      , r = e.stringifyQuery || ud
      , i = e.history
      , o = Ui()
      , s = Ui()
      , a = Ui()
      , l = En(mn);
    let u = mn;
    oi && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = Wa.bind(null, j=>"" + j)
      , f = Wa.bind(null, ak)
      , d = Wa.bind(null, bo);
    function m(j, re) {
        let X, te;
        return ey(j) ? (X = t.getRecordMatcher(j),
        te = re) : te = j,
        t.addRoute(te, X)
    }
    function b(j) {
        const re = t.getRecordMatcher(j);
        re && t.removeRoute(re)
    }
    function _() {
        return t.getRoutes().map(j=>j.record)
    }
    function S(j) {
        return !!t.getRecordMatcher(j)
    }
    function y(j, re) {
        if (re = $e({}, re || l.value),
        typeof j == "string") {
            const v = Ja(n, j, re.path)
              , A = t.resolve({
                path: v.path
            }, re)
              , R = i.createHref(v.fullPath);
            return $e(v, A, {
                params: d(A.params),
                hash: bo(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let X;
        if (j.path != null)
            X = $e({}, j, {
                path: Ja(n, j.path, re.path).path
            });
        else {
            const v = $e({}, j.params);
            for (const A in v)
                v[A] == null && delete v[A];
            X = $e({}, j, {
                params: f(v)
            }),
            re.params = f(re.params)
        }
        const te = t.resolve(X, re)
          , ve = j.hash || "";
        te.params = c(d(te.params));
        const He = uk(r, $e({}, j, {
            hash: ik(ve),
            path: te.path
        }))
          , h = i.createHref(He);
        return $e({
            fullPath: He,
            hash: ve,
            query: r === ud ? xk(j.query) : j.query || {}
        }, te, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(j) {
        return typeof j == "string" ? Ja(n, j, l.value.path) : $e({}, j)
    }
    function p(j, re) {
        if (u !== j)
            return ki(8, {
                from: re,
                to: j
            })
    }
    function g(j) {
        return L(j)
    }
    function T(j) {
        return g($e(E(j), {
            replace: !0
        }))
    }
    function w(j) {
        const re = j.matched[j.matched.length - 1];
        if (re && re.redirect) {
            const {redirect: X} = re;
            let te = typeof X == "function" ? X(j) : X;
            return typeof te == "string" && (te = te.includes("?") || te.includes("#") ? te = E(te) : {
                path: te
            },
            te.params = {}),
            $e({
                query: j.query,
                hash: j.hash,
                params: te.path != null ? {} : j.params
            }, te)
        }
    }
    function L(j, re) {
        const X = u = y(j)
          , te = l.value
          , ve = j.state
          , He = j.force
          , h = j.replace === !0
          , v = w(X);
        if (v)
            return L($e(E(v), {
                state: typeof v == "object" ? $e({}, ve, v.state) : ve,
                force: He,
                replace: h
            }), re || X);
        const A = X;
        A.redirectedFrom = re;
        let R;
        return !He && fk(r, te, X) && (R = ki(16, {
            to: A,
            from: te
        }),
        ue(te, te, !0, !1)),
        (R ? Promise.resolve(R) : N(A, te)).catch(F=>jn(F) ? jn(F, 2) ? F : K(F) : U(F, A, te)).then(F=>{
            if (F) {
                if (jn(F, 2))
                    return L($e({
                        replace: h
                    }, E(F.to), {
                        state: typeof F.to == "object" ? $e({}, ve, F.to.state) : ve,
                        force: He
                    }), re || A)
            } else
                F = B(A, te, !0, h, ve);
            return H(A, te, F),
            F
        }
        )
    }
    function O(j, re) {
        const X = p(j, re);
        return X ? Promise.reject(X) : Promise.resolve()
    }
    function C(j) {
        const re = Ze.values().next().value;
        return re && typeof re.runWithContext == "function" ? re.runWithContext(j) : j()
    }
    function N(j, re) {
        let X;
        const [te,ve,He] = zk(j, re);
        X = za(te.reverse(), "beforeRouteLeave", j, re);
        for (const v of te)
            v.leaveGuards.forEach(A=>{
                X.push(dr(A, j, re))
            }
            );
        const h = O.bind(null, j, re);
        return X.push(h),
        rt(X).then(()=>{
            X = [];
            for (const v of o.list())
                X.push(dr(v, j, re));
            return X.push(h),
            rt(X)
        }
        ).then(()=>{
            X = za(ve, "beforeRouteUpdate", j, re);
            for (const v of ve)
                v.updateGuards.forEach(A=>{
                    X.push(dr(A, j, re))
                }
                );
            return X.push(h),
            rt(X)
        }
        ).then(()=>{
            X = [];
            for (const v of He)
                if (v.beforeEnter)
                    if (Tn(v.beforeEnter))
                        for (const A of v.beforeEnter)
                            X.push(dr(A, j, re));
                    else
                        X.push(dr(v.beforeEnter, j, re));
            return X.push(h),
            rt(X)
        }
        ).then(()=>(j.matched.forEach(v=>v.enterCallbacks = {}),
        X = za(He, "beforeRouteEnter", j, re, C),
        X.push(h),
        rt(X))).then(()=>{
            X = [];
            for (const v of s.list())
                X.push(dr(v, j, re));
            return X.push(h),
            rt(X)
        }
        ).catch(v=>jn(v, 8) ? v : Promise.reject(v))
    }
    function H(j, re, X) {
        a.list().forEach(te=>C(()=>te(j, re, X)))
    }
    function B(j, re, X, te, ve) {
        const He = p(j, re);
        if (He)
            return He;
        const h = re === mn
          , v = oi ? history.state : {};
        X && (te || h ? i.replace(j.fullPath, $e({
            scroll: h && v && v.scroll
        }, ve)) : i.push(j.fullPath, ve)),
        l.value = j,
        ue(j, re, X, h),
        K()
    }
    let ee;
    function W() {
        ee || (ee = i.listen((j,re,X)=>{
            if (!ft.listening)
                return;
            const te = y(j)
              , ve = w(te);
            if (ve) {
                L($e(ve, {
                    replace: !0
                }), te).catch(Qi);
                return
            }
            u = te;
            const He = l.value;
            oi && bk(nd(He.fullPath, X.delta), pa()),
            N(te, He).catch(h=>jn(h, 12) ? h : jn(h, 2) ? (L(h.to, te).then(v=>{
                jn(v, 20) && !X.delta && X.type === _o.pop && i.go(-1, !1)
            }
            ).catch(Qi),
            Promise.reject()) : (X.delta && i.go(-X.delta, !1),
            U(h, te, He))).then(h=>{
                h = h || B(te, He, !1),
                h && (X.delta && !jn(h, 8) ? i.go(-X.delta, !1) : X.type === _o.pop && jn(h, 20) && i.go(-1, !1)),
                H(te, He, h)
            }
            ).catch(Qi)
        }
        ))
    }
    let Y = Ui(), V = Ui(), q;
    function U(j, re, X) {
        K(j);
        const te = V.list();
        return te.length ? te.forEach(ve=>ve(j, re, X)) : console.error(j),
        Promise.reject(j)
    }
    function le() {
        return q && l.value !== mn ? Promise.resolve() : new Promise((j,re)=>{
            Y.add([j, re])
        }
        )
    }
    function K(j) {
        return q || (q = !j,
        W(),
        Y.list().forEach(([re,X])=>j ? X(j) : re()),
        Y.reset()),
        j
    }
    function ue(j, re, X, te) {
        const {scrollBehavior: ve} = e;
        if (!oi || !ve)
            return Promise.resolve();
        const He = !X && _k(nd(j.fullPath, 0)) || (te || !X) && history.state && history.state.scroll || null;
        return zt().then(()=>ve(j, re, He)).then(h=>h && vk(h)).catch(h=>U(h, j, re))
    }
    const be = j=>i.go(j);
    let Je;
    const Ze = new Set
      , ft = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: b,
        hasRoute: S,
        getRoutes: _,
        resolve: y,
        options: e,
        push: g,
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
            const re = this;
            j.component("RouterLink", Yk),
            j.component("RouterView", ry),
            j.config.globalProperties.$router = re,
            Object.defineProperty(j.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>J(l)
            }),
            oi && !Je && l.value === mn && (Je = !0,
            g(i.location).catch(ve=>{}
            ));
            const X = {};
            for (const ve in mn)
                Object.defineProperty(X, ve, {
                    get: ()=>l.value[ve],
                    enumerable: !0
                });
            j.provide(du, re),
            j.provide(hu, Ii(X)),
            j.provide(Ql, l);
            const te = j.unmount;
            Ze.add(j),
            j.unmount = function() {
                Ze.delete(j),
                Ze.size < 1 && (u = mn,
                ee && ee(),
                ee = null,
                l.value = mn,
                Je = !1,
                q = !1),
                te()
            }
        }
    };
    function rt(j) {
        return j.reduce((re,X)=>re.then(()=>C(X)), Promise.resolve())
    }
    return ft
}
function zk(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const a = t.matched[s];
        a && (e.matched.find(u=>Ti(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(u=>Ti(u, l)) || i.push(l))
    }
    return [n, r, i]
}
function Qk() {
    return At(hu)
}
const Xk = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Xl = (e,t)=>{
    const n = e.route.matched.find(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Xk(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , Zk = (e,t)=>({
    default: ()=>e ? ht(j0, e === !0 ? {} : e, t) : t
});
function pu(e) {
    return Array.isArray(e) ? e : [e]
}
const P = {
    layout: "main"
}
  , Te = null
  , ke = null
  , Se = null
  , we = null
  , Ae = null
  , Le = null
  , Oe = null
  , Ce = null
  , Re = null
  , Ie = null
  , Pe = null
  , Me = null
  , De = null
  , Ne = null
  , Ve = null
  , Fe = null
  , M = {
    layout: "main"
}
  , D = {
    layout: "main"
}
  , yd = [{
    name: (P == null ? void 0 : P.name) ?? "ads___de",
    path: (P == null ? void 0 : P.path) ?? "/de/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___en",
    path: (P == null ? void 0 : P.path) ?? "/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___es",
    path: (P == null ? void 0 : P.path) ?? "/es/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___fr",
    path: (P == null ? void 0 : P.path) ?? "/fr/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___hi",
    path: (P == null ? void 0 : P.path) ?? "/hi/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___id",
    path: (P == null ? void 0 : P.path) ?? "/id/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___pt",
    path: (P == null ? void 0 : P.path) ?? "/pt/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___ru",
    path: (P == null ? void 0 : P.path) ?? "/ru/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___th",
    path: (P == null ? void 0 : P.path) ?? "/th/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___tl",
    path: (P == null ? void 0 : P.path) ?? "/tl/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___tr",
    path: (P == null ? void 0 : P.path) ?? "/tr/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___uz",
    path: (P == null ? void 0 : P.path) ?? "/uz/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: (P == null ? void 0 : P.name) ?? "ads___vi",
    path: (P == null ? void 0 : P.path) ?? "/vi/ads",
    meta: P || {},
    alias: (P == null ? void 0 : P.alias) || [],
    redirect: P == null ? void 0 : P.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___de",
    path: "/de/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___fr",
    path: "/fr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: Te == null ? void 0 : Te.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js"), __vite__mapDeps([3, 4, 5, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___de",
    path: "/de/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___en",
    path: "/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___es",
    path: "/es/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___fr",
    path: "/fr/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___hi",
    path: "/hi/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___id",
    path: "/id/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___pt",
    path: "/pt/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___ru",
    path: "/ru/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___th",
    path: "/th/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___tl",
    path: "/tl/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___tr",
    path: "/tr/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___uz",
    path: "/uz/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop-okx___vi",
    path: "/vi/clicker/airdrop/okx",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js"), __vite__mapDeps([7, 5, 4]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___de",
    path: "/de/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___fr",
    path: "/fr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Se == null ? void 0 : Se.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js"), __vite__mapDeps([8, 9, 10, 11, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___de",
    path: "/de/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___fr",
    path: "/fr/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: we == null ? void 0 : we.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js"), __vite__mapDeps([12, 5, 11, 10, 6, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___de",
    path: "/de/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___fr",
    path: "/fr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js"), __vite__mapDeps([14, 6, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___de",
    path: "/de/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___fr",
    path: "/fr/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js"), __vite__mapDeps([15, 10, 6, 16, 17, 11, 18, 19, 20, 21, 22, 23, 24, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___de",
    path: "/de/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___fr",
    path: "/fr/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js"), __vite__mapDeps([25, 18, 6, 2, 17, 11, 10, 20, 21]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___de",
    path: "/de/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___fr",
    path: "/fr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js"), __vite__mapDeps([26, 16, 17, 11, 10, 18, 9, 23, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___de",
    path: "/de/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___en",
    path: "/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___es",
    path: "/es/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___fr",
    path: "/fr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___hi",
    path: "/hi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___id",
    path: "/id/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___pt",
    path: "/pt/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___ru",
    path: "/ru/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___th",
    path: "/th/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tl",
    path: "/tl/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___tr",
    path: "/tr/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___uz",
    path: "/uz/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-playground___vi",
    path: "/vi/clicker/playground",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js"), __vite__mapDeps([27, 5, 23, 10, 19, 20, 21, 22, 24, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___de",
    path: "/de/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___fr",
    path: "/fr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js"), __vite__mapDeps([28, 6, 17, 11, 10]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___de",
    path: "/de/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___fr",
    path: "/fr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js"), __vite__mapDeps([29, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___de",
    path: "/de/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___fr",
    path: "/fr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js"), __vite__mapDeps([30, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___de",
    path: "/de/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___fr",
    path: "/fr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/language.VuDcl9-K.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___de",
    path: "/de/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___en",
    path: "/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___es",
    path: "/es/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___fr",
    path: "/fr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___hi",
    path: "/hi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___id",
    path: "/id/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___pt",
    path: "/pt/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___ru",
    path: "/ru/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___th",
    path: "/th/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tl",
    path: "/tl/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___tr",
    path: "/tr/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___uz",
    path: "/uz/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-achievements___vi",
    path: "/vi/clicker/user/achievements",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js"), __vite__mapDeps([31, 5, 32, 33]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___de",
    path: "/de/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___en",
    path: "/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___es",
    path: "/es/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___fr",
    path: "/fr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___hi",
    path: "/hi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___id",
    path: "/id/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___pt",
    path: "/pt/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___ru",
    path: "/ru/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___th",
    path: "/th/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tl",
    path: "/tl/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___tr",
    path: "/tr/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___uz",
    path: "/uz/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user-avatar___vi",
    path: "/vi/clicker/user/avatar",
    meta: {},
    alias: [],
    redirect: Ve == null ? void 0 : Ve.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/avatar.BtJXDLTl.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___de",
    path: "/de/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___en",
    path: "/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___es",
    path: "/es/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___fr",
    path: "/fr/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___hi",
    path: "/hi/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___id",
    path: "/id/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___pt",
    path: "/pt/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___ru",
    path: "/ru/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___th",
    path: "/th/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tl",
    path: "/tl/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___tr",
    path: "/tr/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___uz",
    path: "/uz/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-user___vi",
    path: "/vi/clicker/user",
    meta: {},
    alias: [],
    redirect: Fe == null ? void 0 : Fe.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js"), __vite__mapDeps([34, 5, 32, 33, 11, 10, 6]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___de",
    path: (M == null ? void 0 : M.path) ?? "/de",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___en",
    path: (M == null ? void 0 : M.path) ?? "/",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___es",
    path: (M == null ? void 0 : M.path) ?? "/es",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___fr",
    path: (M == null ? void 0 : M.path) ?? "/fr",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___hi",
    path: (M == null ? void 0 : M.path) ?? "/hi",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___id",
    path: (M == null ? void 0 : M.path) ?? "/id",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___pt",
    path: (M == null ? void 0 : M.path) ?? "/pt",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___ru",
    path: (M == null ? void 0 : M.path) ?? "/ru",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___th",
    path: (M == null ? void 0 : M.path) ?? "/th",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___tl",
    path: (M == null ? void 0 : M.path) ?? "/tl",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___tr",
    path: (M == null ? void 0 : M.path) ?? "/tr",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___uz",
    path: (M == null ? void 0 : M.path) ?? "/uz",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (M == null ? void 0 : M.name) ?? "index___vi",
    path: (M == null ? void 0 : M.path) ?? "/vi",
    meta: M || {},
    alias: (M == null ? void 0 : M.alias) || [],
    redirect: M == null ? void 0 : M.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js"), __vite__mapDeps([35, 1, 18, 17]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___de",
    path: (D == null ? void 0 : D.path) ?? "/de/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___en",
    path: (D == null ? void 0 : D.path) ?? "/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___es",
    path: (D == null ? void 0 : D.path) ?? "/es/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___fr",
    path: (D == null ? void 0 : D.path) ?? "/fr/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___hi",
    path: (D == null ? void 0 : D.path) ?? "/hi/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___id",
    path: (D == null ? void 0 : D.path) ?? "/id/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___pt",
    path: (D == null ? void 0 : D.path) ?? "/pt/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___ru",
    path: (D == null ? void 0 : D.path) ?? "/ru/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___th",
    path: (D == null ? void 0 : D.path) ?? "/th/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___tl",
    path: (D == null ? void 0 : D.path) ?? "/tl/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___tr",
    path: (D == null ? void 0 : D.path) ?? "/tr/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___uz",
    path: (D == null ? void 0 : D.path) ?? "/uz/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "privacy-policy___vi",
    path: (D == null ? void 0 : D.path) ?? "/vi/privacy-policy",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js"), __vite__mapDeps([36, 1]), import.meta.url).then(e=>e.default || e)
}]
  , iy = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? ht(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
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
function $k(e, t) {
    return e === t || t === mn ? !1 : gd(e) !== gd(t) ? !0 : !e.matched.every((r,i)=>{
        var o, s;
        return r.components && r.components.default === ((s = (o = t.matched[i]) == null ? void 0 : o.components) == null ? void 0 : s.default)
    }
    )
}
const eS = {
    scrollBehavior(e, t, n) {
        var u;
        const r = $()
          , i = ((u = Xt().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let o = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && s !== !1 && $k(e, t) && (o = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: vd(e.hash),
                behavior: i
            } : !1;
        const a = c=>!!(c.meta.pageTransition ?? Wl)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(c=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (o = {
                    el: e.hash,
                    top: vd(e.hash),
                    behavior: i
                }),
                c(o)
            }
            )
        }
        )
    }
};
function vd(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const tS = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , Gt = {
    ...tS,
    ...eS
}
  , nS = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = $()
      , i = Xt();
    if (([t,n] = Pn(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = da({
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
                await r.runWithContext(()=>li(s)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
;
var rS = Object.defineProperty
  , iS = Object.defineProperties
  , oS = Object.getOwnPropertyDescriptors
  , bd = Object.getOwnPropertySymbols
  , sS = Object.prototype.hasOwnProperty
  , aS = Object.prototype.propertyIsEnumerable
  , _d = (e,t,n)=>t in e ? rS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , he = (e,t)=>{
    for (var n in t || (t = {}))
        sS.call(t, n) && _d(e, n, t[n]);
    if (bd)
        for (var n of bd(t))
            aS.call(t, n) && _d(e, n, t[n]);
    return e
}
  , st = (e,t)=>iS(e, oS(t));
const yn = "Notivue__"
  , lS = 6e3
  , We = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    PROMISE: "promise",
    PROMISE_RESOLVE: "promise-resolve",
    PROMISE_REJECT: "promise-reject"
}
  , Eo = {
    title: "",
    message: "",
    duration: lS,
    ariaLive: "polite",
    ariaRole: "status"
}
  , Zl = st(he({}, Eo), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , cS = st(he({}, Eo), {
    duration: 1 / 0
})
  , uS = st(he({}, Zl), {
    ariaLive: "polite"
})
  , fS = he({}, Eo)
  , dS = {
    [We.SUCCESS]: Eo,
    [We.ERROR]: Zl,
    [We.WARNING]: uS,
    [We.INFO]: fS,
    [We.PROMISE]: cS,
    [We.PROMISE_RESOLVE]: Eo,
    [We.PROMISE_REJECT]: Zl
}
  , oy = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: dS,
    limit: 1 / 0,
    animations: {
        enter: yn + "enter",
        leave: yn + "leave",
        clearAll: yn + "clearAll"
    }
}
  , un = pS();
function hS(e) {
    Object.assign(un, e)
}
function sy(e) {
    let t = 0;
    function n(r, i, o=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(st(he({}, r), {
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
        success: r=>n(r, We.SUCCESS),
        error: r=>n(r, We.ERROR),
        warning: r=>n(r, We.WARNING),
        info: r=>n(r, We.INFO),
        promise: r=>{
            const {id: i, clear: o, destroy: s} = n(r, We.PROMISE);
            return {
                resolve: a=>n(a, We.PROMISE_RESOLVE, i),
                reject: a=>n(a, We.PROMISE_REJECT, i),
                success: a=>n(a, We.PROMISE_RESOLVE, i),
                error: a=>n(a, We.PROMISE_REJECT, i),
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
function pS() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return sy(e)
}
function mS(e) {
    qe(e.config.isTopAlign, ()=>{
        e.animations.updatePositions({
            isImmediate: !0
        })
    }
    , {
        flush: "post"
    }),
    qe(()=>e.items.length, ()=>{
        e.animations.updatePositions()
    }
    , {
        flush: "post"
    }),
    qe(()=>e.items.length === 0 && e.queue.length === 0, t=>{
        t && (e.timeouts.reset(),
        e.elements.setRootAttrs({}))
    }
    , {
        flush: "post"
    }),
    qe(()=>e.config.animations.value.enter, (t,n)=>{
        t !== n && e.animations.resetTransitionData()
    }
    )
}
const yS = typeof window > "u";
function hr(e) {
    return e.pointerType === "mouse"
}
function mu(e, t) {
    const n = he({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (vS(t[r]) ? n[r] = mu(e[r], t[r]) : n[r] = t[r]);
    return n
}
function gS(e, t) {
    return t.props || (t.props = {}),
    he(he(he(he({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function vS(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function bS(e, t) {
    return Kc(Lt(mu(e, t)))
}
function _S(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>st(he({}, t), {
        [n]: Be(r)
    }), {})
}
const ES = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function ay(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!ES.includes(t)))
}
function ly(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function TS(e) {
    const t = bS(oy, e)
      , n = fe(()=>t.position.value.startsWith("top"));
    function r(i) {
        typeof i == "function" && (i = i(_S(t)));
        for (const o of Object.keys(i))
            typeof t[o].value == "object" ? t[o].value = mu(t[o].value, i[o]) : t[o].value = i[o]
    }
    return st(he({}, t), {
        isTopAlign: n,
        update: r
    })
}
function kS() {
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
            Ep(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function SS(e, t) {
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
            const n = st(he({}, t.entries.value[0]), {
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
            Ep(this.entries)
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
function wS() {
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
function AS(e, t, n) {
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
                (u = s == null ? void 0 : s[o ? "onManualClear" : "onAutoClear"]) == null || u.call(s, ay(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || i || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: st(he({}, s.positionStyles), {
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
function LS(e, t) {
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
                st(he({}, n), {
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
                n.timeout ? st(he({}, n), {
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
function OS({config: e, items: t, queue: n, animations: r, timeouts: i}) {
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
            if ([We.PROMISE_RESOLVE, We.PROMISE_REJECT].includes(o.type))
                n.get(a.id) ? (n.update(a.id, st(he({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, st(he({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const u = e.enqueue.value
                  , c = t.length >= e.limit.value;
                !u && c && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>i.create(m, 1));
                const f = u && !o.skipQueue && c
                  , d = st(he({}, a), {
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
const cy = Symbol("");
function CS(e={}) {
    const t = TS(e)
      , n = kS()
      , r = SS(t, n)
      , i = wS()
      , o = AS(t, r, i)
      , s = LS(r, o)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: i,
        animations: o,
        timeouts: s
    }
      , l = OS(a)
      , u = Object.freeze(sy(l));
    return hS(u),
    mS(a),
    {
        install(c) {
            c.config.globalProperties.$push = u,
            c.provide(cy, a)
        }
    }
}
function wr() {
    return At(cy)
}
function RS() {
    return yS ? st(he({}, Kc(Lt(oy))), {
        isTopAlign: fe(()=>!0),
        update: ()=>{}
    }) : wr().config
}
const uy = {
    listAriaLabel: "Notifications"
}
  , IS = xe({
    setup(e, {slots: t, attrs: n}) {
        const r = ce(!1);
        return Ft(()=>r.value = !0),
        ()=>{
            var i;
            return r.value ? (i = t.default) == null ? void 0 : i.call(t) : Qe("span", n, "")
        }
    }
})
  , PS = ["role", "aria-live"]
  , MS = xe({
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
        Qe("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, tn(J(ly)(t.item)), 9, PS))
    }
});
function DS() {
    const {timeouts: e, config: t} = wr();
    function n(i) {
        hr(i) && e.pause()
    }
    function r(i) {
        hr(i) && e.resume()
    }
    return fe(()=>t.pauseOnHover.value && !e.isStreamFocused.value ? {
        onPointerenter: n,
        onPointerleave: r
    } : {})
}
function NS() {
    const {timeouts: e, config: t} = wr();
    function n(r) {
        hr(r) || (e.clearDebounceTimeout(),
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
const Qa = {
    boxSizing: "border-box"
}
  , Xa = {
    list: st(he({}, Qa), {
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
    listItem: st(he({}, Qa), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: st(he({}, Qa), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function VS() {
    const {isTopAlign: e, position: t} = RS()
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
        list: he(he({}, Xa.list), n.value),
        listItem: he(he({}, Xa.listItem), r.value),
        itemContainer: Xa.itemContainer
    }))
}
function FS(e) {
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
function BS(e, t) {
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
    qe(e, i=>{
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
function US() {
    const {elements: e, animations: t} = wr();
    FS(()=>t.updatePositions({
        isImmediate: !0
    })),
    BS(e.items.value, ()=>t.updatePositions())
}
function xS() {
    const {items: e, config: t, timeouts: n} = wr();
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
function HS() {
    const {animations: e} = wr()
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
const jS = ["data-notivue-align", "aria-label"]
  , KS = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , YS = ["aria-label", "tabindex", "data-notivue-container"]
  , qS = xe({
    __name: "NotivueImpl",
    props: sa({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, uy),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: i} = wr()
          , o = VS()
          , s = DS()
          , a = NS();
        return HS(),
        xS(),
        US(),
        (l,u)=>{
            var c;
            return me(),
            Tt(Eb, {
                to: J(n).teleportTo.value === !1 ? void 0 : J(n).teleportTo.value,
                disabled: J(n).teleportTo.value === !1
            }, [J(r).length > 0 ? (me(),
            Qe("ol", Ei({
                key: 0
            }, he(he(he({}, J(s)), J(a)), J(i).rootAttrs.value), {
                "data-notivue-align": J(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: J(i).root,
                class: t.class,
                style: he(he({}, J(o).list), (c = t.styles) == null ? void 0 : c.list)
            }), [(me(!0),
            Qe(gt, null, z0(J(r).entries.value, (f,d)=>{
                var m, b, _, S;
                return me(),
                Qe("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": J(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: J(i).items,
                    style: Nn(he(he(he({}, J(o).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (me(),
                Tt(MS, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (me(),
                Qe("div", Ei({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": J(ly)(f),
                    tabindex: (_ = (b = l.containersTabIndex) == null ? void 0 : b[f.id]) != null ? _ : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: J(i).containers,
                    style: he(he({}, J(o).itemContainer), (S = t.styles) == null ? void 0 : S.itemContainer)
                }), [kr(l.$slots, "default", fn(Qt(J(ay)(f))))], 16, YS))], 12, KS)
            }
            ), 128))], 16, jS)) : Jt("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , YM = xe({
    __name: "Notivue",
    props: sa({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, uy),
    setup(e) {
        const t = e;
        return (n,r)=>(me(),
        Tt(J(IS), null, {
            default: dn(()=>[tt(qS, fn(Qt(t)), {
                default: dn(i=>[kr(n.$slots, "default", fn(Qt(i)))]),
                _: 3
            }, 16)]),
            _: 3
        }))
    }
})
  , GS = {
    touchOnly: !1,
    exclude: "a, button",
    disabled: !1,
    threshold: .5
}
  , WS = 300
  , Za = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , qM = xe({
    __name: "NotivueSwipe",
    props: sa({
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
    }, GS),
    setup(e) {
        const {items: t, timeouts: n, elements: r, animations: i} = wr()
          , o = e
          , s = ai(o, "touchOnly")
          , a = ai(o, "exclude")
          , l = ai(o, "disabled")
          , u = ai(o, "threshold")
          , c = fe(()=>o.item.type === We.PROMISE)
          , f = fe(()=>!n.isStreamFocused.value && !l.value && !c.value && o.item.duration < 1 / 0)
          , d = ce(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , b = Ii(m)
          , _ = En({});
        function S(K) {
            Object.assign(b, K)
        }
        function y(K) {
            _.value = he(he({}, _.value), K)
        }
        function E() {
            _.value = {}
        }
        qe(()=>t.length, (K,ue)=>{
            K !== ue && b.isPressed && (w(),
            S(m))
        }
        , {
            flush: "post"
        });
        function p() {
            d.value && (y({
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
        function g() {
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
            y({
                transition: i.isReducedMotion.value ? "none" : `${WS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function L(K) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ue, offsetLeft: be} = d.value
              , Je = be + r.root.value.offsetLeft
              , Ze = Je + ue;
            return K.clientX > Je && K.clientX < Ze
        }
        function O(K) {
            return hr(K) ? Za.Mouse : Za.Touch
        }
        function C() {
            n.clearDebounceTimeout(),
            n.pause()
        }
        function N(K) {
            n.clearDebounceTimeout(),
            n.resumeWithDebounce(K)
        }
        function H(K) {
            T(K) || g()
        }
        function B(K) {
            if (T(K) && (K.stopPropagation(),
            !!d.value && K.button === 0 && !(b.isPressed || b.isClearing))) {
                if (a.value && Array.from(d.value.querySelectorAll(a.value)).includes(K.target)) {
                    hr(K) || (C(),
                    N(Za.TouchExternal));
                    return
                }
                hr(K) || C(),
                S({
                    startX: K.clientX,
                    isPressed: !0
                })
            }
        }
        function ee(K) {
            if (!T(K) || (K.stopPropagation(),
            !b.isPressed || b.isClearing))
                return;
            const {clientWidth: ue} = d.value;
            y({
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
            hr(K) && L(K)) {
                const ue = r.getSortedItems();
                ue[ue.length - 1].contains(d.value) || C()
            } else
                N(O(K));
            S({
                isClearing: !1
            })
        }
        function Y(K) {
            T(K) && (K.stopPropagation(),
            !(!b.isPressed || b.isClearing) && (hr(K) && L(K) ? C() : N(O(K)),
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
            N(O(K))))
        }
        const q = [["pointerenter", H], ["pointerdown", B], ["pointermove", ee], ["pointerup", Y], ["pointerleave", V]];
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
        return qe(f, (K,ue,be)=>{
            zt(()=>{
                K && (p(),
                zt(U))
            }
            ),
            be(()=>{
                le(),
                g()
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        }),
        Sn(le),
        (K,ue)=>l.value ? kr(K.$slots, "default", {
            key: 1
        }) : (me(),
        Qe("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: Nn(_.value)
        }, [kr(K.$slots, "default")], 4))
    }
})
  , JS = ye("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , zS = [JS]
  , Ed = xe({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(Di))), zS, 16))
    }
})
  , QS = ye("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , XS = [QS]
  , $a = xe({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(Di))), XS, 16))
    }
})
  , ZS = ye("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , $S = [ZS]
  , ew = xe({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(Di))), $S, 16))
    }
})
  , tw = ye("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , nw = ye("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , rw = [tw, nw]
  , Td = xe({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(Di))), rw, 16))
    }
})
  , iw = ye("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , ow = ye("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , sw = ye("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , aw = [iw, ow, sw]
  , el = xe({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(Di))), aw, 16))
    }
})
  , lw = ye("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , cw = ye("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , uw = ye("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , fw = [lw, cw, uw]
  , dw = xe({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(Di))), fw, 16))
    }
})
  , hw = ye("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , pw = ye("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , mw = [hw, pw]
  , fy = xe({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(st(he({}, J(yu)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), mw, 16))
    }
})
  , yw = ye("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , gw = ye("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , vw = [yw, gw]
  , dy = xe({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(me(),
        Qe("svg", fn(Qt(J(bw))), vw, 16))
    }
})
  , yu = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , Di = st(he({}, yu), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , bw = st(he({}, yu), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , _w = {
    [We.SUCCESS]: mt(Ed),
    [We.ERROR]: mt($a),
    [We.INFO]: mt(ew),
    [We.WARNING]: mt($a),
    [We.PROMISE]: mt(fy),
    [We.PROMISE_RESOLVE]: mt(Ed),
    [We.PROMISE_REJECT]: mt($a),
    close: mt(dy)
};
We.SUCCESS + "",
mt(Td),
We.ERROR + "",
mt(el),
We.INFO + "",
mt(dw),
We.WARNING + "",
mt(el),
We.PROMISE + "",
mt(fy),
We.PROMISE_RESOLVE + "",
mt(Td),
We.PROMISE_REJECT + "",
mt(el),
mt(dy);
const jo = {
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
  , Ew = st(he(he({}, jo), gu), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
st(he(he({}, jo), gu), {
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
st(he(he({}, jo), gu), {
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
st(he({}, jo), {
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
const GM = st(he({}, jo), {
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
  , Kn = {
    NOTIFICATION: yn + "notification",
    ICON: yn + "icon",
    CONTENT: yn + "content",
    TITLE: yn + "content-title",
    MESSAGE: yn + "content-message",
    CLOSE: yn + "close",
    CLOSE_ICON: yn + "close-icon",
    TRANSITION: yn + "transition"
}
  , Tw = {
    icons: ()=>_w,
    theme: ()=>Ew,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , kw = ["data-notivue", "data-notivue-has-title"]
  , Sw = ["aria-live", "role"]
  , ww = ["textContent"]
  , Aw = ["textContent"]
  , Lw = ["aria-label"]
  , Ow = ["textContent"]
  , WM = xe({
    __name: "Notifications",
    props: sa({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, Tw),
    setup(e) {
        const t = e
          , n = En(t.icons[t.item.type])
          , r = t.icons.close;
        return qe(()=>t.item.type, i=>n.value = t.icons[i], {
            flush: "sync"
        }),
        (i,o)=>(me(),
        Qe("div", {
            class: Nt(J(Kn).NOTIFICATION),
            "data-notivue": i.item.type,
            "data-notivue-has-title": !!i.item.title,
            style: Nn(i.theme)
        }, [n.value ? (me(),
        Qe(gt, {
            key: 0
        }, [typeof n.value == "object" ? (me(),
        Tt(Fo, {
            key: 0,
            name: J(Kn).TRANSITION,
            mode: "out-in"
        }, {
            default: dn(()=>[typeof n.value == "object" ? (me(),
            Tt(El(n.value), {
                key: 0,
                class: Nt(J(Kn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : Jt("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (me(),
        Qe("div", {
            key: 1,
            class: Nt(J(Kn).ICON),
            "aria-hidden": "true"
        }, tn(n.value), 3)) : Jt("", !0)], 64)) : Jt("", !0), ye("div", {
            class: Nt(J(Kn).CONTENT),
            "aria-live": i.item.ariaLive,
            role: i.item.ariaRole,
            "aria-atomic": "true"
        }, [i.item.title ? (me(),
        Qe("h3", {
            key: 0,
            class: Nt(J(Kn).TITLE),
            textContent: tn(J(i.item.title))
        }, null, 10, ww)) : Jt("", !0), ye("p", {
            class: Nt(J(Kn).MESSAGE),
            textContent: tn(J(i.item.message))
        }, null, 10, Aw)], 10, Sw), !t.hideClose && J(r) && i.item.type !== "promise" ? (me(),
        Qe("button", {
            key: 1,
            class: Nt(J(Kn).CLOSE),
            "aria-label": i.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: o[0] || (o[0] = (...s)=>i.item.clear && i.item.clear(...s))
        }, [typeof J(r) == "object" ? (me(),
        Tt(El(J(r)), {
            key: 0,
            class: Nt(J(Kn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof J(r) == "string" ? (me(),
        Qe("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: tn(J(r))
        }, null, 8, Ow)) : Jt("", !0)], 10, Lw)) : Jt("", !0)], 14, kw))
    }
});
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Us = typeof window < "u"
  , Ar = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , Cw = (e,t,n)=>Rw({
    l: e,
    k: t,
    s: n
})
  , Rw = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , St = e=>typeof e == "number" && isFinite(e)
  , Iw = e=>py(e) === "[object Date]"
  , xs = e=>py(e) === "[object RegExp]"
  , ma = e=>Ye(e) && Object.keys(e).length === 0
  , pt = Object.assign;
let kd;
const vu = ()=>kd || (kd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sd(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Pw = Object.prototype.hasOwnProperty;
function Hs(e, t) {
    return Pw.call(e, t)
}
const dt = Array.isArray
  , et = e=>typeof e == "function"
  , ie = e=>typeof e == "string"
  , ct = e=>typeof e == "boolean"
  , Mw = e=>typeof e == "symbol"
  , Ue = e=>e !== null && typeof e == "object"
  , Dw = e=>Ue(e) && et(e.then) && et(e.catch)
  , hy = Object.prototype.toString
  , py = e=>hy.call(e)
  , Ye = e=>{
    if (!Ue(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , Nw = e=>e == null ? "" : dt(e) || Ye(e) && e.toString === hy ? JSON.stringify(e, null, 2) : String(e);
function bu(e, t="") {
    return e.reduce((n,r,i)=>i === 0 ? n + r : n + t + r, "")
}
function _u(e) {
    let t = e;
    return ()=>++t
}
function Vw(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const us = e=>!Ue(e) || dt(e);
function Gr(e, t) {
    if (us(e) || us(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: i} = n.pop();
        Object.keys(r).forEach(o=>{
            us(r[o]) || us(i[o]) ? i[o] = r[o] : n.push({
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
function Fw(e, t, n) {
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
const Xe = {
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
function ya(e, t, n={}) {
    const {domain: r, messages: i, args: o} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function Bw(e) {
    throw e
}
const Yn = " "
  , Uw = "\r"
  , Dt = `
`
  , xw = "\u2028"
  , Hw = "\u2029";
function jw(e) {
    const t = e;
    let n = 0
      , r = 1
      , i = 1
      , o = 0;
    const s = L=>t[L] === Uw && t[L + 1] === Dt
      , a = L=>t[L] === Dt
      , l = L=>t[L] === Hw
      , u = L=>t[L] === xw
      , c = L=>s(L) || a(L) || l(L) || u(L)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>i
      , b = ()=>o
      , _ = L=>s(L) || l(L) || u(L) ? Dt : t[L]
      , S = ()=>_(n)
      , y = ()=>_(n + o);
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
    function g() {
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
        currentPeek: y,
        next: E,
        peek: p,
        reset: g,
        resetPeek: T,
        skipToPeek: w
    }
}
const rr = void 0
  , Kw = "."
  , wd = "'"
  , Yw = "tokenizer";
function qw(e, t={}) {
    const n = t.location !== !1
      , r = jw(e)
      , i = ()=>r.index()
      , o = ()=>Fw(r.line(), r.column(), r.index())
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
            const G = n ? $l(F.startLoc, v) : null
              , Z = ya(h, G, {
                domain: Yw,
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
        return n && (R.loc = $l(h.startLoc, h.endLoc)),
        A != null && (R.value = A),
        R
    }
    const m = h=>d(h, 14);
    function b(h, v) {
        return h.currentChar() === v ? (h.next(),
        v) : (f(Xe.EXPECTED_TOKEN, o(), 0, v),
        "")
    }
    function _(h) {
        let v = "";
        for (; h.currentPeek() === Yn || h.currentPeek() === Dt; )
            v += h.currentPeek(),
            h.peek();
        return v
    }
    function S(h) {
        const v = _(h);
        return h.skipToPeek(),
        v
    }
    function y(h) {
        if (h === rr)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function E(h) {
        if (h === rr)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function p(h, v) {
        const {currentType: A} = v;
        if (A !== 2)
            return !1;
        _(h);
        const R = y(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function g(h, v) {
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
        const R = h.currentPeek() === wd;
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
        const R = y(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function O(h, v) {
        const {currentType: A} = v;
        if (!(A === 8 || A === 12))
            return !1;
        _(h);
        const R = h.currentPeek() === ":";
        return h.resetPeek(),
        R
    }
    function C(h, v) {
        const {currentType: A} = v;
        if (A !== 10)
            return !1;
        const R = ()=>{
            const G = h.currentPeek();
            return G === "{" ? y(h.peek()) : G === "@" || G === "%" || G === "|" || G === ":" || G === "." || G === Yn || !G ? !1 : G === Dt ? (h.peek(),
            R()) : y(G)
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
            A(F, "%", !0)) : Q === "|" ? G === "%" || Z ? !0 : !(G === Yn || G === Dt) : Q === Yn ? (h.peek(),
            A(!0, Yn, Z)) : Q === Dt ? (h.peek(),
            A(!0, Dt, Z)) : !0
        }
          , R = A();
        return v && h.resetPeek(),
        R
    }
    function ee(h, v) {
        const A = h.currentChar();
        return A === rr ? rr : v(A) ? (h.next(),
        A) : null
    }
    function W(h) {
        return ee(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 || R === 95 || R === 36
        }
        )
    }
    function Y(h) {
        return ee(h, A=>{
            const R = A.charCodeAt(0);
            return R >= 48 && R <= 57
        }
        )
    }
    function V(h) {
        return ee(h, A=>{
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
        return v !== "%" && f(Xe.EXPECTED_TOKEN, o(), 0, v),
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
            else if (A === Yn || A === Dt)
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
        return h.currentChar() === rr && f(Xe.UNTERMINATED_CLOSING_BRACE, o(), 0),
        A
    }
    function ue(h) {
        S(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${q(h)}`) : v += q(h),
        h.currentChar() === rr && f(Xe.UNTERMINATED_CLOSING_BRACE, o(), 0),
        v
    }
    function be(h) {
        S(h),
        b(h, "'");
        let v = ""
          , A = "";
        const R = G=>G !== wd && G !== Dt;
        for (; v = ee(h, R); )
            v === "\\" ? A += Je(h) : A += v;
        const F = h.currentChar();
        return F === Dt || F === rr ? (f(Xe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        F === Dt && (h.next(),
        b(h, "'")),
        A) : (b(h, "'"),
        A)
    }
    function Je(h) {
        const v = h.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return h.next(),
            `\\${v}`;
        case "u":
            return Ze(h, v, 4);
        case "U":
            return Ze(h, v, 6);
        default:
            return f(Xe.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, v),
            ""
        }
    }
    function Ze(h, v, A) {
        b(h, v);
        let R = "";
        for (let F = 0; F < A; F++) {
            const G = V(h);
            if (!G) {
                f(Xe.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${v}${R}${h.currentChar()}`);
                break
            }
            R += G
        }
        return `\\${v}${R}`
    }
    function ft(h) {
        S(h);
        let v = ""
          , A = "";
        const R = F=>F !== "{" && F !== "}" && F !== Yn && F !== Dt;
        for (; v = ee(h, R); )
            A += v;
        return A
    }
    function rt(h) {
        let v = ""
          , A = "";
        for (; v = W(h); )
            A += v;
        return A
    }
    function j(h) {
        const v = (A=!1,R)=>{
            const F = h.currentChar();
            return F === "{" || F === "%" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Yn ? R : F === Dt || F === Kw ? (R += F,
            h.next(),
            v(A, R)) : (R += F,
            h.next(),
            v(!0, R))
        }
        ;
        return v(!1, "")
    }
    function re(h) {
        S(h);
        const v = b(h, "|");
        return S(h),
        v
    }
    function X(h, v) {
        let A = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(Xe.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
            h.next(),
            A = d(v, 2, "{"),
            S(h),
            v.braceNest++,
            A;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(Xe.EMPTY_PLACEHOLDER, o(), 0),
            h.next(),
            A = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && S(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            A;
        case "@":
            return v.braceNest > 0 && f(Xe.UNTERMINATED_CLOSING_BRACE, o(), 0),
            A = te(h, v) || m(v),
            v.braceNest = 0,
            A;
        default:
            let F = !0
              , G = !0
              , Z = !0;
            if (N(h))
                return v.braceNest > 0 && f(Xe.UNTERMINATED_CLOSING_BRACE, o(), 0),
                A = d(v, 1, re(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                A;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(Xe.UNTERMINATED_CLOSING_BRACE, o(), 0),
                v.braceNest = 0,
                ve(h, v);
            if (F = p(h, v))
                return A = d(v, 5, K(h)),
                S(h),
                A;
            if (G = g(h, v))
                return A = d(v, 6, ue(h)),
                S(h),
                A;
            if (Z = T(h, v))
                return A = d(v, 7, be(h)),
                S(h),
                A;
            if (!F && !G && !Z)
                return A = d(v, 13, ft(h)),
                f(Xe.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, A.value),
                S(h),
                A;
            break
        }
        return A
    }
    function te(h, v) {
        const {currentType: A} = v;
        let R = null;
        const F = h.currentChar();
        switch ((A === 8 || A === 9 || A === 12 || A === 10) && (F === Dt || F === Yn) && f(Xe.INVALID_LINKED_FORMAT, o(), 0),
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
            return N(h) ? (R = d(v, 1, re(h)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : w(h, v) || O(h, v) ? (S(h),
            te(h, v)) : L(h, v) ? (S(h),
            d(v, 12, rt(h))) : C(h, v) ? (S(h),
            F === "{" ? X(h, v) || R : d(v, 11, j(h))) : (A === 8 && f(Xe.INVALID_LINKED_FORMAT, o(), 0),
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
            return te(h, v) || m(v);
        switch (h.currentChar()) {
        case "{":
            return X(h, v) || m(v);
        case "}":
            return f(Xe.UNBALANCED_CLOSING_BRACE, o(), 0),
            h.next(),
            d(v, 3, "}");
        case "@":
            return te(h, v) || m(v);
        default:
            if (N(h))
                return A = d(v, 1, re(h)),
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
    function He() {
        const {currentType: h, offset: v, startLoc: A, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = A,
        l.lastEndLoc = R,
        l.offset = i(),
        l.startLoc = o(),
        r.currentChar() === rr ? d(l, 14) : ve(r, l)
    }
    return {
        nextToken: He,
        currentOffset: i,
        currentPosition: o,
        context: u
    }
}
const Gw = "parser"
  , Ww = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Jw(e, t, n) {
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
function zw(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(y, E, p, g, ...T) {
        const w = y.currentPosition();
        if (w.offset += g,
        w.column += g,
        n) {
            const L = t ? $l(p, w) : null
              , O = ya(E, L, {
                domain: Gw,
                args: T
            });
            n(O)
        }
    }
    function i(y, E, p) {
        const g = {
            type: y
        };
        return t && (g.start = E,
        g.end = E,
        g.loc = {
            start: p,
            end: p
        }),
        g
    }
    function o(y, E, p, g) {
        g && (y.type = g),
        t && (y.end = E,
        y.loc && (y.loc.end = p))
    }
    function s(y, E) {
        const p = y.context()
          , g = i(3, p.offset, p.startLoc);
        return g.value = E,
        o(g, y.currentOffset(), y.currentPosition()),
        g
    }
    function a(y, E) {
        const p = y.context()
          , {lastOffset: g, lastStartLoc: T} = p
          , w = i(5, g, T);
        return w.index = parseInt(E, 10),
        y.nextToken(),
        o(w, y.currentOffset(), y.currentPosition()),
        w
    }
    function l(y, E) {
        const p = y.context()
          , {lastOffset: g, lastStartLoc: T} = p
          , w = i(4, g, T);
        return w.key = E,
        y.nextToken(),
        o(w, y.currentOffset(), y.currentPosition()),
        w
    }
    function u(y, E) {
        const p = y.context()
          , {lastOffset: g, lastStartLoc: T} = p
          , w = i(9, g, T);
        return w.value = E.replace(Ww, Jw),
        y.nextToken(),
        o(w, y.currentOffset(), y.currentPosition()),
        w
    }
    function c(y) {
        const E = y.nextToken()
          , p = y.context()
          , {lastOffset: g, lastStartLoc: T} = p
          , w = i(8, g, T);
        return E.type !== 12 ? (r(y, Xe.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        w.value = "",
        o(w, g, T),
        {
            nextConsumeToken: E,
            node: w
        }) : (E.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ln(E)),
        w.value = E.value || "",
        o(w, y.currentOffset(), y.currentPosition()),
        {
            node: w
        })
    }
    function f(y, E) {
        const p = y.context()
          , g = i(7, p.offset, p.startLoc);
        return g.value = E,
        o(g, y.currentOffset(), y.currentPosition()),
        g
    }
    function d(y) {
        const E = y.context()
          , p = i(6, E.offset, E.startLoc);
        let g = y.nextToken();
        if (g.type === 9) {
            const T = c(y);
            p.modifier = T.node,
            g = T.nextConsumeToken || y.nextToken()
        }
        switch (g.type !== 10 && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(g)),
        g = y.nextToken(),
        g.type === 2 && (g = y.nextToken()),
        g.type) {
        case 11:
            g.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(g)),
            p.key = f(y, g.value || "");
            break;
        case 5:
            g.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(g)),
            p.key = l(y, g.value || "");
            break;
        case 6:
            g.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(g)),
            p.key = a(y, g.value || "");
            break;
        case 7:
            g.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(g)),
            p.key = u(y, g.value || "");
            break;
        default:
            r(y, Xe.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
            const T = y.context()
              , w = i(7, T.offset, T.startLoc);
            return w.value = "",
            o(w, T.offset, T.startLoc),
            p.key = w,
            o(p, T.offset, T.startLoc),
            {
                nextConsumeToken: g,
                node: p
            }
        }
        return o(p, y.currentOffset(), y.currentPosition()),
        {
            node: p
        }
    }
    function m(y) {
        const E = y.context()
          , p = E.currentType === 1 ? y.currentOffset() : E.offset
          , g = E.currentType === 1 ? E.endLoc : E.startLoc
          , T = i(2, p, g);
        T.items = [];
        let w = null;
        do {
            const C = w || y.nextToken();
            switch (w = null,
            C.type) {
            case 0:
                C.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(C)),
                T.items.push(s(y, C.value || ""));
                break;
            case 6:
                C.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(C)),
                T.items.push(a(y, C.value || ""));
                break;
            case 5:
                C.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(C)),
                T.items.push(l(y, C.value || ""));
                break;
            case 7:
                C.value == null && r(y, Xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ln(C)),
                T.items.push(u(y, C.value || ""));
                break;
            case 8:
                const N = d(y);
                T.items.push(N.node),
                w = N.nextConsumeToken || null;
                break
            }
        } while (E.currentType !== 14 && E.currentType !== 1);
        const L = E.currentType === 1 ? E.lastOffset : y.currentOffset()
          , O = E.currentType === 1 ? E.lastEndLoc : y.currentPosition();
        return o(T, L, O),
        T
    }
    function b(y, E, p, g) {
        const T = y.context();
        let w = g.items.length === 0;
        const L = i(1, E, p);
        L.cases = [],
        L.cases.push(g);
        do {
            const O = m(y);
            w || (w = O.items.length === 0),
            L.cases.push(O)
        } while (T.currentType !== 14);
        return w && r(y, Xe.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
        o(L, y.currentOffset(), y.currentPosition()),
        L
    }
    function _(y) {
        const E = y.context()
          , {offset: p, startLoc: g} = E
          , T = m(y);
        return E.currentType === 14 ? T : b(y, p, g, T)
    }
    function S(y) {
        const E = qw(y, pt({}, e))
          , p = E.context()
          , g = i(0, p.offset, p.startLoc);
        return t && g.loc && (g.loc.source = y),
        g.body = _(E),
        e.onCacheKey && (g.cacheKey = e.onCacheKey(y)),
        p.currentType !== 14 && r(E, Xe.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, y[p.offset] || ""),
        o(g, E.currentOffset(), E.currentPosition()),
        g
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
function Qw(e, t={}) {
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
        Eu(e[n], t)
}
function Eu(e, t) {
    switch (e.type) {
    case 1:
        Ad(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Ad(e.items, t);
        break;
    case 6:
        Eu(e.key, t),
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
function Xw(e, t={}) {
    const n = Qw(e);
    n.helper("normalize"),
    e.body && Eu(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function Zw(e) {
    const t = e.body;
    return t.type === 2 ? Ld(t) : t.cases.forEach(n=>Ld(n)),
    e
}
function Ld(e) {
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
            e.static = bu(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function si(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        const t = e;
        si(t.body),
        t.b = t.body,
        delete t.body;
        break;
    case 1:
        const n = e
          , r = n.cases;
        for (let c = 0; c < r.length; c++)
            si(r[c]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const i = e
          , o = i.items;
        for (let c = 0; c < o.length; c++)
            si(o[c]);
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
        si(a.key),
        a.k = a.key,
        delete a.key,
        a.modifier && (si(a.modifier),
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
function $w(e, t) {
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
    function u(S, y) {
        a.code += S
    }
    function c(S, y=!0) {
        const E = y ? i : "";
        u(o ? E + "  ".repeat(S) : E)
    }
    function f(S=!0) {
        const y = ++a.indentLevel;
        S && c(y)
    }
    function d(S=!0) {
        const y = --a.indentLevel;
        S && c(y)
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
function eA(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Si(e, t.key),
    t.modifier ? (e.push(", "),
    Si(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function tA(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const i = t.items.length;
    for (let o = 0; o < i && (Si(e, t.items[o]),
    o !== i - 1); o++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function nA(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const i = t.cases.length;
        for (let o = 0; o < i && (Si(e, t.cases[o]),
        o !== i - 1); o++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function rA(e, t) {
    t.body ? Si(e, t.body) : e.push("null")
}
function Si(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        rA(e, t);
        break;
    case 1:
        nA(e, t);
        break;
    case 2:
        tA(e, t);
        break;
    case 6:
        eA(e, t);
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
const iA = (e,t={})=>{
    const n = ie(t.mode) ? t.mode : "normal"
      , r = ie(t.filename) ? t.filename : "message.intl"
      , i = !!t.sourceMap
      , o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = $w(e, {
        mode: n,
        filename: r,
        sourceMap: i,
        breakLineCode: o,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${bu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    Si(l, e),
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
function oA(e, t={}) {
    const n = pt({}, t)
      , r = !!n.jit
      , i = !!n.minify
      , o = n.optimize == null ? !0 : n.optimize
      , a = zw(n).parse(e);
    return r ? (o && Zw(a),
    i && si(a),
    {
        ast: a,
        code: ""
    }) : (Xw(a, n),
    iA(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function sA() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (vu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Lr = [];
Lr[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Lr[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Lr[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Lr[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Lr[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Lr[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Lr[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const aA = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function lA(e) {
    return aA.test(e)
}
function cA(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function uA(e) {
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
function fA(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : lA(t) ? cA(t) : "*" + t
}
function dA(e) {
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
            s === void 0 || (s = fA(s),
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
            if (l = uA(o),
            f = Lr[r],
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
const Od = new Map;
function hA(e, t) {
    return Ue(e) ? e[t] : null
}
function pA(e, t) {
    if (!Ue(e))
        return null;
    let n = Od.get(t);
    if (n || (n = dA(t),
    n && Od.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let i = e
      , o = 0;
    for (; o < r; ) {
        const s = i[n[o]];
        if (s === void 0 || et(i))
            return null;
        i = s,
        o++
    }
    return i
}
const mA = e=>e
  , yA = e=>""
  , gA = "text"
  , vA = e=>e.length === 0 ? "" : bu(e)
  , bA = Nw;
function Cd(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function _A(e) {
    const t = St(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (St(e.named.count) || St(e.named.n)) ? St(e.named.count) ? e.named.count : St(e.named.n) ? e.named.n : t : t
}
function EA(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function TA(e={}) {
    const t = e.locale
      , n = _A(e)
      , r = Ue(e.pluralRules) && ie(t) && et(e.pluralRules[t]) ? e.pluralRules[t] : Cd
      , i = Ue(e.pluralRules) && ie(t) && et(e.pluralRules[t]) ? Cd : void 0
      , o = y=>y[r(n, y.length, i)]
      , s = e.list || []
      , a = y=>s[y]
      , l = e.named || {};
    St(e.pluralIndex) && EA(n, l);
    const u = y=>l[y];
    function c(y) {
        const E = et(e.messages) ? e.messages(y) : Ue(e.messages) ? e.messages[y] : !1;
        return E || (e.parent ? e.parent.message(y) : yA)
    }
    const f = y=>e.modifiers ? e.modifiers[y] : mA
      , d = Ye(e.processor) && et(e.processor.normalize) ? e.processor.normalize : vA
      , m = Ye(e.processor) && et(e.processor.interpolate) ? e.processor.interpolate : bA
      , b = Ye(e.processor) && ie(e.processor.type) ? e.processor.type : gA
      , S = {
        list: a,
        named: u,
        plural: o,
        linked: (y,...E)=>{
            const [p,g] = E;
            let T = "text"
              , w = "";
            E.length === 1 ? Ue(p) ? (w = p.modifier || w,
            T = p.type || T) : ie(p) && (w = p || w) : E.length === 2 && (ie(p) && (w = p || w),
            ie(g) && (T = g || T));
            const L = c(y)(S)
              , O = T === "vnode" && dt(L) && w ? L[0] : L;
            return w ? f(w)(O, T) : O
        }
        ,
        message: c,
        type: b,
        interpolate: m,
        normalize: d,
        values: pt({}, s, l)
    };
    return S
}
let To = null;
function kA(e) {
    To = e
}
function SA(e, t, n) {
    To && To.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const wA = AA("function:translate");
function AA(e) {
    return t=>To && To.emit(e, t)
}
const LA = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , my = Xe.__EXTEND_POINT__
  , Pr = _u(my)
  , Mn = {
    INVALID_ARGUMENT: my,
    INVALID_DATE_ARGUMENT: Pr(),
    INVALID_ISO_DATE_ARGUMENT: Pr(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Pr(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Pr(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Pr(),
    NOT_SUPPORT_LOCALE_TYPE: Pr(),
    __EXTEND_POINT__: Pr()
};
function Gn(e) {
    return ya(e, null, void 0)
}
function Tu(e, t) {
    return t.locale != null ? Rd(t.locale) : Rd(e.locale)
}
let tl;
function Rd(e) {
    if (ie(e))
        return e;
    if (et(e)) {
        if (e.resolvedOnce && tl != null)
            return tl;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Dw(t))
                throw Gn(Mn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return tl = t
        } else
            throw Gn(Mn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Gn(Mn.NOT_SUPPORT_LOCALE_TYPE)
}
function OA(e, t, n) {
    return [...new Set([n, ...dt(t) ? t : Ue(t) ? Object.keys(t) : ie(t) ? [t] : [n]])]
}
function yy(e, t, n) {
    const r = ie(n) ? n : js
      , i = e;
    i.__localeChainCache || (i.__localeChainCache = new Map);
    let o = i.__localeChainCache.get(r);
    if (!o) {
        o = [];
        let s = [n];
        for (; dt(s); )
            s = Id(o, s, t);
        const a = dt(t) || !Ye(t) ? t : t.default ? t.default : null;
        s = ie(a) ? [a] : a,
        dt(s) && Id(o, s, !1),
        i.__localeChainCache.set(r, o)
    }
    return o
}
function Id(e, t, n) {
    let r = !0;
    for (let i = 0; i < t.length && ct(r); i++) {
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
        r = RA(e, o, n),
        i.splice(-1, 1)
    } while (i.length && r === !0);
    return r
}
function RA(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const i = t.replace(/!/g, "");
        e.push(i),
        (dt(n) || Ye(n)) && n[i] && (r = n[i])
    }
    return r
}
const IA = "9.9.1"
  , ga = -1
  , js = "en-US"
  , Pd = ""
  , Md = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function PA() {
    return {
        upper: (e,t)=>t === "text" && ie(e) ? e.toUpperCase() : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && ie(e) ? e.toLowerCase() : t === "vnode" && Ue(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && ie(e) ? Md(e) : t === "vnode" && Ue(e) && "__v_isVNode"in e ? Md(e.children) : e
    }
}
let gy;
function MA(e) {
    gy = e
}
let vy;
function DA(e) {
    vy = e
}
let by;
function NA(e) {
    by = e
}
let _y = null;
const VA = e=>{
    _y = e
}
  , FA = ()=>_y;
let Ey = null;
const Dd = e=>{
    Ey = e
}
  , BA = ()=>Ey;
let Nd = 0;
function UA(e={}) {
    const t = et(e.onWarn) ? e.onWarn : Vw
      , n = ie(e.version) ? e.version : IA
      , r = ie(e.locale) || et(e.locale) ? e.locale : js
      , i = et(r) ? js : r
      , o = dt(e.fallbackLocale) || Ye(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i
      , s = Ye(e.messages) ? e.messages : {
        [i]: {}
    }
      , a = Ye(e.datetimeFormats) ? e.datetimeFormats : {
        [i]: {}
    }
      , l = Ye(e.numberFormats) ? e.numberFormats : {
        [i]: {}
    }
      , u = pt({}, e.modifiers || {}, PA())
      , c = e.pluralRules || {}
      , f = et(e.missing) ? e.missing : null
      , d = ct(e.missingWarn) || xs(e.missingWarn) ? e.missingWarn : !0
      , m = ct(e.fallbackWarn) || xs(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = !!e.fallbackFormat
      , _ = !!e.unresolving
      , S = et(e.postTranslation) ? e.postTranslation : null
      , y = Ye(e.processor) ? e.processor : null
      , E = ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , g = et(e.messageCompiler) ? e.messageCompiler : gy
      , T = et(e.messageResolver) ? e.messageResolver : vy || hA
      , w = et(e.localeFallbacker) ? e.localeFallbacker : by || OA
      , L = Ue(e.fallbackContext) ? e.fallbackContext : void 0
      , O = e
      , C = Ue(O.__datetimeFormatters) ? O.__datetimeFormatters : new Map
      , N = Ue(O.__numberFormatters) ? O.__numberFormatters : new Map
      , H = Ue(O.__meta) ? O.__meta : {};
    Nd++;
    const B = {
        version: n,
        cid: Nd,
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
        processor: y,
        warnHtmlMessage: E,
        escapeParameter: p,
        messageCompiler: g,
        messageResolver: T,
        localeFallbacker: w,
        fallbackContext: L,
        onWarn: t,
        __meta: H
    };
    return B.datetimeFormats = a,
    B.numberFormats = l,
    B.__datetimeFormatters = C,
    B.__numberFormatters = N,
    __INTLIFY_PROD_DEVTOOLS__ && SA(B, n, H),
    B
}
function ku(e, t, n, r, i) {
    const {missing: o, onWarn: s} = e;
    if (o !== null) {
        const a = o(e, n, t, i);
        return ie(a) ? a : t
    } else
        return t
}
function xi(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function nl(e) {
    return n=>xA(n, e)
}
function xA(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n
          , i = r.c || r.cases;
        return e.plural(i.reduce((o,s)=>[...o, Vd(e, s)], []))
    } else
        return Vd(e, n)
}
function Vd(e, t) {
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
        const u = t;
        return u.v || u.value;
    case 8:
        const c = t;
        return c.v || c.value;
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const HA = e=>e;
let fs = Object.create(null);
const wi = e=>Ue(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function jA(e, t={}) {
    let n = !1;
    const r = t.onError || Bw;
    return t.onError = i=>{
        n = !0,
        r(i)
    }
    ,
    {
        ...oA(e, t),
        detectError: n
    }
}
function KA(e, t) {
    if (ie(e)) {
        ct(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || HA)(e)
          , i = fs[r];
        if (i)
            return i;
        const {ast: o, detectError: s} = jA(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = nl(o);
        return s ? a : fs[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = fs[n];
            return r || (fs[n] = nl(e))
        } else
            return nl(e)
    }
}
const Fd = ()=>""
  , rn = e=>et(e);
function Bd(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: o, fallbackLocale: s, messages: a} = e
      , [l,u] = tc(...t)
      , c = ct(u.missingWarn) ? u.missingWarn : e.missingWarn
      , f = ct(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
      , d = ct(u.escapeParameter) ? u.escapeParameter : e.escapeParameter
      , m = !!u.resolvedMessage
      , b = ie(u.default) || ct(u.default) ? ct(u.default) ? o ? l : ()=>l : u.default : n ? o ? l : ()=>l : ""
      , _ = n || b !== ""
      , S = Tu(e, u);
    d && YA(u);
    let[y,E,p] = m ? [l, S, a[S] || {}] : Ty(e, l, S, s, f, c)
      , g = y
      , T = l;
    if (!m && !(ie(g) || wi(g) || rn(g)) && _ && (g = b,
    T = g),
    !m && (!(ie(g) || wi(g) || rn(g)) || !ie(E)))
        return i ? ga : l;
    let w = !1;
    const L = ()=>{
        w = !0
    }
      , O = rn(g) ? g : ky(e, l, E, g, T, L);
    if (w)
        return g;
    const C = WA(e, E, p, u)
      , N = TA(C)
      , H = qA(e, O, N)
      , B = r ? r(H, l) : H;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const ee = {
            timestamp: Date.now(),
            key: ie(l) ? l : rn(g) ? g.key : "",
            locale: E || (rn(g) ? g.locale : ""),
            format: ie(g) ? g : rn(g) ? g.source : "",
            message: B
        };
        ee.meta = pt({}, e.__meta, FA() || {}),
        wA(ee)
    }
    return B
}
function YA(e) {
    dt(e.list) ? e.list = e.list.map(t=>ie(t) ? Sd(t) : t) : Ue(e.named) && Object.keys(e.named).forEach(t=>{
        ie(e.named[t]) && (e.named[t] = Sd(e.named[t]))
    }
    )
}
function Ty(e, t, n, r, i, o) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: u} = e
      , c = u(e, r, n);
    let f = {}, d, m = null;
    const b = "translate";
    for (let _ = 0; _ < c.length && (d = c[_],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(ie(m) || wi(m) || rn(m))); _++) {
        const S = ku(e, t, d, o, b);
        S !== t && (m = S)
    }
    return [m, d, f]
}
function ky(e, t, n, r, i, o) {
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
    const l = s(r, GA(e, n, i, r, a, o));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function qA(e, t, n) {
    return t(n)
}
function tc(...e) {
    const [t,n,r] = e
      , i = {};
    if (!ie(t) && !St(t) && !rn(t) && !wi(t))
        throw Gn(Mn.INVALID_ARGUMENT);
    const o = St(t) ? String(t) : (rn(t),
    t);
    return St(n) ? i.plural = n : ie(n) ? i.default = n : Ye(n) && !ma(n) ? i.named = n : dt(n) && (i.list = n),
    St(r) ? i.plural = r : ie(r) ? i.default = r : Ye(r) && pt(i, r),
    [o, i]
}
function GA(e, t, n, r, i, o) {
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
function WA(e, t, n, r) {
    const {modifiers: i, pluralRules: o, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c} = e
      , d = {
        locale: t,
        modifiers: i,
        pluralRules: o,
        messages: m=>{
            let b = s(n, m);
            if (b == null && c) {
                const [,,_] = Ty(c, m, t, a, l, u);
                b = s(_, m)
            }
            if (ie(b) || wi(b)) {
                let _ = !1;
                const y = ky(e, m, t, b, m, ()=>{
                    _ = !0
                }
                );
                return _ ? Fd : y
            } else
                return rn(b) ? b : Fd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    St(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Ud(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,u,c,f] = nc(...t)
      , d = ct(c.missingWarn) ? c.missingWarn : e.missingWarn;
    ct(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , b = Tu(e, c)
      , _ = s(e, i, b);
    if (!ie(l) || l === "")
        return new Intl.DateTimeFormat(b,f).format(u);
    let S = {}, y, E = null;
    const p = "datetime format";
    for (let w = 0; w < _.length && (y = _[w],
    S = n[y] || {},
    E = S[l],
    !Ye(E)); w++)
        ku(e, l, y, d, p);
    if (!Ye(E) || !ie(y))
        return r ? ga : l;
    let g = `${y}__${l}`;
    ma(f) || (g = `${g}__${JSON.stringify(f)}`);
    let T = a.get(g);
    return T || (T = new Intl.DateTimeFormat(y,pt({}, E, f)),
    a.set(g, T)),
    m ? T.formatToParts(u) : T.format(u)
}
const Sy = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function nc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {}, a;
    if (ie(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Gn(Mn.INVALID_ISO_DATE_ARGUMENT);
        const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(u);
        try {
            a.toISOString()
        } catch {
            throw Gn(Mn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Iw(t)) {
        if (isNaN(t.getTime()))
            throw Gn(Mn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (St(t))
        a = t;
    else
        throw Gn(Mn.INVALID_ARGUMENT);
    return ie(n) ? o.key = n : Ye(n) && Object.keys(n).forEach(l=>{
        Sy.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ie(r) ? o.locale = r : Ye(r) && (s = r),
    Ye(i) && (s = i),
    [o.key || "", a, o, s]
}
function xd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
    }
}
function Hd(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: i, onWarn: o, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,u,c,f] = rc(...t)
      , d = ct(c.missingWarn) ? c.missingWarn : e.missingWarn;
    ct(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , b = Tu(e, c)
      , _ = s(e, i, b);
    if (!ie(l) || l === "")
        return new Intl.NumberFormat(b,f).format(u);
    let S = {}, y, E = null;
    const p = "number format";
    for (let w = 0; w < _.length && (y = _[w],
    S = n[y] || {},
    E = S[l],
    !Ye(E)); w++)
        ku(e, l, y, d, p);
    if (!Ye(E) || !ie(y))
        return r ? ga : l;
    let g = `${y}__${l}`;
    ma(f) || (g = `${g}__${JSON.stringify(f)}`);
    let T = a.get(g);
    return T || (T = new Intl.NumberFormat(y,pt({}, E, f)),
    a.set(g, T)),
    m ? T.formatToParts(u) : T.format(u)
}
const wy = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function rc(...e) {
    const [t,n,r,i] = e
      , o = {};
    let s = {};
    if (!St(t))
        throw Gn(Mn.INVALID_ARGUMENT);
    const a = t;
    return ie(n) ? o.key = n : Ye(n) && Object.keys(n).forEach(l=>{
        wy.includes(l) ? s[l] = n[l] : o[l] = n[l]
    }
    ),
    ie(r) ? o.locale = r : Ye(r) && (s = r),
    Ye(i) && (s = i),
    [o.key || "", a, o, s]
}
function jd(e, t, n) {
    const r = e;
    for (const i in n) {
        const o = `${t}__${i}`;
        r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
    }
}
sA();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const JA = "9.9.1";
function zA() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (vu().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Ay = LA.__EXTEND_POINT__
  , ir = _u(Ay);
ir(),
ir(),
ir(),
ir(),
ir(),
ir(),
ir(),
ir();
const Ly = Mn.__EXTEND_POINT__
  , Ut = _u(Ly)
  , hn = {
    UNEXPECTED_RETURN_TYPE: Ly,
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
    return ya(e, null, void 0)
}
const ic = Ar("__translateVNode")
  , oc = Ar("__datetimeParts")
  , sc = Ar("__numberParts")
  , QA = Ar("__setPluralRules")
  , XA = Ar("__injectWithOption")
  , ac = Ar("__dispose");
function ko(e) {
    if (!Ue(e))
        return e;
    for (const t in e)
        if (Hs(e, t))
            if (!t.includes("."))
                Ue(e[t]) && ko(e[t]);
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
                Ue(i[n[r]]) && ko(i[n[r]])
            }
    return e
}
function Oy(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = Ye(n) ? n : dt(r) ? {} : {
        [e]: {}
    };
    if (dt(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: u} = a;
            l ? (s[l] = s[l] || {},
            Gr(u, s[l])) : Gr(u, s)
        } else
            ie(a) && Gr(JSON.parse(a), s)
    }
    ),
    i == null && o)
        for (const a in s)
            Hs(s, a) && ko(s[a]);
    return s
}
function Cy(e) {
    return e.type
}
function ZA(e, t, n) {
    let r = Ue(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = Oy(e.locale.value, {
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
function Kd(e) {
    return tt(zr, null, e, 0)
}
const Yd = "__INTLIFY_META__"
  , qd = ()=>[]
  , $A = ()=>!1;
let Gd = 0;
function Wd(e) {
    return (t,n,r,i)=>e(n, r, wn() || void 0, i)
}
const eL = ()=>{
    const e = wn();
    let t = null;
    return e && (t = Cy(e)[Yd]) ? {
        [Yd]: t
    } : null
}
;
function Ry(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Us ? ce : En;
    let a = ct(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : ie(e.locale) ? e.locale : js)
      , u = s(n && a ? n.fallbackLocale.value : ie(e.fallbackLocale) || dt(e.fallbackLocale) || Ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , c = s(Oy(l.value, e))
      , f = s(Ye(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(Ye(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : ct(e.missingWarn) || xs(e.missingWarn) ? e.missingWarn : !0
      , b = n ? n.fallbackWarn : ct(e.fallbackWarn) || xs(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = n ? n.fallbackRoot : ct(e.fallbackRoot) ? e.fallbackRoot : !0
      , S = !!e.fallbackFormat
      , y = et(e.missing) ? e.missing : null
      , E = et(e.missing) ? Wd(e.missing) : null
      , p = et(e.postTranslation) ? e.postTranslation : null
      , g = n ? n.warnHtmlMessage : ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , T = !!e.escapeParameter;
    const w = n ? n.modifiers : Ye(e.modifiers) ? e.modifiers : {};
    let L = e.pluralRules || n && n.pluralRules, O;
    O = (()=>{
        i && Dd(null);
        const I = {
            version: JA,
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
            warnHtmlMessage: g,
            escapeParameter: T,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        I.datetimeFormats = f.value,
        I.numberFormats = d.value,
        I.__datetimeFormatters = Ye(O) ? O.__datetimeFormatters : void 0,
        I.__numberFormatters = Ye(O) ? O.__numberFormatters : void 0;
        const x = UA(I);
        return i && Dd(x),
        x
    }
    )(),
    xi(O, l.value, u.value);
    function N() {
        return [l.value, u.value, c.value, f.value, d.value]
    }
    const H = fe({
        get: ()=>l.value,
        set: I=>{
            l.value = I,
            O.locale = l.value
        }
    })
      , B = fe({
        get: ()=>u.value,
        set: I=>{
            u.value = I,
            O.fallbackLocale = u.value,
            xi(O, l.value, I)
        }
    })
      , ee = fe(()=>c.value)
      , W = fe(()=>f.value)
      , Y = fe(()=>d.value);
    function V() {
        return et(p) ? p : null
    }
    function q(I) {
        p = I,
        O.postTranslation = I
    }
    function U() {
        return y
    }
    function le(I) {
        I !== null && (E = Wd(I)),
        y = I,
        O.missing = E
    }
    const K = (I,x,ae,pe,ze,lt)=>{
        N();
        let Et;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (O.fallbackContext = n ? BA() : void 0),
            Et = I(O)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (O.fallbackContext = void 0)
        }
        if (ae !== "translate exists" && St(Et) && Et === ga || ae === "translate exists" && !Et) {
            const [Xn,Ra] = x();
            return n && _ ? pe(n) : ze(Xn)
        } else {
            if (lt(Et))
                return Et;
            throw kn(hn.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ue(...I) {
        return K(x=>Reflect.apply(Bd, null, [x, ...I]), ()=>tc(...I), "translate", x=>Reflect.apply(x.t, x, [...I]), x=>x, x=>ie(x))
    }
    function be(...I) {
        const [x,ae,pe] = I;
        if (pe && !Ue(pe))
            throw kn(hn.INVALID_ARGUMENT);
        return ue(x, ae, pt({
            resolvedMessage: !0
        }, pe || {}))
    }
    function Je(...I) {
        return K(x=>Reflect.apply(Ud, null, [x, ...I]), ()=>nc(...I), "datetime format", x=>Reflect.apply(x.d, x, [...I]), ()=>Pd, x=>ie(x))
    }
    function Ze(...I) {
        return K(x=>Reflect.apply(Hd, null, [x, ...I]), ()=>rc(...I), "number format", x=>Reflect.apply(x.n, x, [...I]), ()=>Pd, x=>ie(x))
    }
    function ft(I) {
        return I.map(x=>ie(x) || St(x) || ct(x) ? Kd(String(x)) : x)
    }
    const j = {
        normalize: ft,
        interpolate: I=>I,
        type: "vnode"
    };
    function re(...I) {
        return K(x=>{
            let ae;
            const pe = x;
            try {
                pe.processor = j,
                ae = Reflect.apply(Bd, null, [pe, ...I])
            } finally {
                pe.processor = null
            }
            return ae
        }
        , ()=>tc(...I), "translate", x=>x[ic](...I), x=>[Kd(x)], x=>dt(x))
    }
    function X(...I) {
        return K(x=>Reflect.apply(Hd, null, [x, ...I]), ()=>rc(...I), "number format", x=>x[sc](...I), qd, x=>ie(x) || dt(x))
    }
    function te(...I) {
        return K(x=>Reflect.apply(Ud, null, [x, ...I]), ()=>nc(...I), "datetime format", x=>x[oc](...I), qd, x=>ie(x) || dt(x))
    }
    function ve(I) {
        L = I,
        O.pluralRules = L
    }
    function He(I, x) {
        return K(()=>{
            if (!I)
                return !1;
            const ae = ie(x) ? x : l.value
              , pe = A(ae)
              , ze = O.messageResolver(pe, I);
            return wi(ze) || rn(ze) || ie(ze)
        }
        , ()=>[I], "translate exists", ae=>Reflect.apply(ae.te, ae, [I, x]), $A, ae=>ct(ae))
    }
    function h(I) {
        let x = null;
        const ae = yy(O, u.value, l.value);
        for (let pe = 0; pe < ae.length; pe++) {
            const ze = c.value[ae[pe]] || {}
              , lt = O.messageResolver(ze, I);
            if (lt != null) {
                x = lt;
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
                Hs(ae, pe) && ko(ae[pe]);
            x = ae[I]
        }
        c.value[I] = x,
        O.messages = c.value
    }
    function F(I, x) {
        c.value[I] = c.value[I] || {};
        const ae = {
            [I]: x
        };
        if (o)
            for (const pe in ae)
                Hs(ae, pe) && ko(ae[pe]);
        x = ae[I],
        Gr(x, c.value[I]),
        O.messages = c.value
    }
    function G(I) {
        return f.value[I] || {}
    }
    function Z(I, x) {
        f.value[I] = x,
        O.datetimeFormats = f.value,
        xd(O, I, x)
    }
    function Q(I, x) {
        f.value[I] = pt(f.value[I] || {}, x),
        O.datetimeFormats = f.value,
        xd(O, I, x)
    }
    function ne(I) {
        return d.value[I] || {}
    }
    function z(I, x) {
        d.value[I] = x,
        O.numberFormats = d.value,
        jd(O, I, x)
    }
    function se(I, x) {
        d.value[I] = pt(d.value[I] || {}, x),
        O.numberFormats = d.value,
        jd(O, I, x)
    }
    Gd++,
    n && Us && (qe(n.locale, I=>{
        a && (l.value = I,
        O.locale = I,
        xi(O, l.value, u.value))
    }
    ),
    qe(n.fallbackLocale, I=>{
        a && (u.value = I,
        O.fallbackLocale = I,
        xi(O, l.value, u.value))
    }
    ));
    const oe = {
        id: Gd,
        locale: H,
        fallbackLocale: B,
        get inheritLocale() {
            return a
        },
        set inheritLocale(I) {
            a = I,
            I && n && (l.value = n.locale.value,
            u.value = n.fallbackLocale.value,
            xi(O, l.value, u.value))
        },
        get availableLocales() {
            return Object.keys(c.value).sort()
        },
        messages: ee,
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
            O.missingWarn = m
        },
        get fallbackWarn() {
            return b
        },
        set fallbackWarn(I) {
            b = I,
            O.fallbackWarn = b
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
            O.fallbackFormat = S
        },
        get warnHtmlMessage() {
            return g
        },
        set warnHtmlMessage(I) {
            g = I,
            O.warnHtmlMessage = I
        },
        get escapeParameter() {
            return T
        },
        set escapeParameter(I) {
            T = I,
            O.escapeParameter = I
        },
        t: ue,
        getLocaleMessage: A,
        setLocaleMessage: R,
        mergeLocaleMessage: F,
        getPostTranslationHandler: V,
        setPostTranslationHandler: q,
        getMissingHandler: U,
        setMissingHandler: le,
        [QA]: ve
    };
    return oe.datetimeFormats = W,
    oe.numberFormats = Y,
    oe.rt = be,
    oe.te = He,
    oe.tm = v,
    oe.d = Je,
    oe.n = Ze,
    oe.getDateTimeFormat = G,
    oe.setDateTimeFormat = Z,
    oe.mergeDateTimeFormat = Q,
    oe.getNumberFormat = ne,
    oe.setNumberFormat = z,
    oe.mergeNumberFormat = se,
    oe[XA] = r,
    oe[ic] = re,
    oe[oc] = te,
    oe[sc] = X,
    oe
}
const Su = {
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
function tL({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,i)=>[...r, ...i.type === gt ? i.children : [i]], []) : t.reduce((n,r)=>{
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , {})
}
function Iy(e) {
    return gt
}
const nL = xe({
    name: "i18n-t",
    props: pt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>St(e) || !isNaN(e)
        }
    }, Su),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || va({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const o = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = ie(e.plural) ? +e.plural : e.plural);
            const a = tL(t, o)
              , l = i[ic](e.keypath, a, s)
              , u = pt({}, r)
              , c = ie(e.tag) || Ue(e.tag) ? e.tag : Iy();
            return ht(c, u, l)
        }
    }
})
  , Jd = nL;
function rL(e) {
    return dt(e) && !ie(e[0])
}
function Py(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        ie(e.format) ? s.key = e.format : Ue(e.format) && (ie(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? pt({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let u = [s.key];
        dt(l) ? u = l.map((d,m)=>{
            const b = i[d.type]
              , _ = b ? b({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return rL(_) && (_[0].key = `${d.type}-${m}`),
            _
        }
        ) : ie(l) && (u = [l]);
        const c = pt({}, o)
          , f = ie(e.tag) || Ue(e.tag) ? e.tag : Iy();
        return ht(f, c, u)
    }
}
const iL = xe({
    name: "i18n-n",
    props: pt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Su),
    setup(e, t) {
        const n = e.i18n || va({
            useScope: "parent",
            __useComponent: !0
        });
        return Py(e, t, wy, (...r)=>n[sc](...r))
    }
})
  , zd = iL
  , oL = xe({
    name: "i18n-d",
    props: pt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Su),
    setup(e, t) {
        const n = e.i18n || va({
            useScope: "parent",
            __useComponent: !0
        });
        return Py(e, t, Sy, (...r)=>n[oc](...r))
    }
})
  , Qd = oL;
function sL(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function aL(e) {
    const t = s=>{
        const {instance: a, modifiers: l, value: u} = s;
        if (!a || !a.$)
            throw kn(hn.UNEXPECTED_ERROR);
        const c = sL(e, a.$)
          , f = Xd(u);
        return [Reflect.apply(c.t, c, [...Zd(f)]), c]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,u] = t(a);
            Us && e.global === u && (s.__i18nWatcher = qe(u.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = u,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Us && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , u = Xd(a);
                s.textContent = Reflect.apply(l.t, l, [...Zd(u)])
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
function Xd(e) {
    if (ie(e))
        return {
            path: e
        };
    if (Ye(e)) {
        if (!("path"in e))
            throw kn(hn.REQUIRED_VALUE, "path");
        return e
    } else
        throw kn(hn.INVALID_VALUE)
}
function Zd(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , a = r || {};
    return ie(n) && (s.locale = n),
    St(i) && (s.plural = i),
    St(o) && (s.plural = o),
    [t, a, s]
}
function lL(e, t, ...n) {
    const r = Ye(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (ct(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : Jd.name, "I18nT"].forEach(s=>e.component(s, Jd)),
    [zd.name, "I18nN"].forEach(s=>e.component(s, zd)),
    [Qd.name, "I18nD"].forEach(s=>e.component(s, Qd))),
    e.directive("t", aL(t))
}
const cL = Ar("global-vue-i18n");
function uL(e={}, t) {
    const n = ct(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , i = new Map
      , [o,s] = fL(e)
      , a = Ar("");
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
                Ye(m[0])) {
                    const S = m[0];
                    f.__composerExtend = S.__composerExtend,
                    f.__vueI18nExtend = S.__vueI18nExtend
                }
                let b = null;
                n && (b = bL(d, f.global)),
                lL(d, f, ...m);
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
function va(e={}) {
    const t = wn();
    if (t == null)
        throw kn(hn.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw kn(hn.NOT_INSTALLED);
    const n = dL(t)
      , r = pL(n)
      , i = Cy(t)
      , o = hL(e, i);
    if (o === "global")
        return ZA(r, e, i),
        r;
    if (o === "parent") {
        let l = mL(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = pt({}, e);
        "__i18n"in i && (l.__i18n = i.__i18n),
        r && (l.__root = r),
        a = Ry(l),
        s.__composerExtend && (a[ac] = s.__composerExtend(a)),
        gL(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function fL(e, t, n) {
    const r = Do();
    {
        const i = r.run(()=>Ry(e));
        if (i == null)
            throw kn(hn.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function dL(e) {
    {
        const t = At(e.isCE ? cL : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw kn(e.isCE ? hn.NOT_INSTALLED_WITH_PROVIDE : hn.UNEXPECTED_ERROR);
        return t
    }
}
function hL(e, t) {
    return ma(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function pL(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function mL(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = yL(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(o)),
        r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function yL(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function gL(e, t, n) {
    Ft(()=>{}
    , t),
    Pi(()=>{
        const r = n;
        e.__deleteInstance(t);
        const i = r[ac];
        i && (i(),
        delete r[ac])
    }
    , t)
}
const vL = ["locale", "fallbackLocale", "availableLocales"]
  , $d = ["t", "rt", "d", "n", "tm", "te"];
function bL(e, t) {
    const n = Object.create(null);
    return vL.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw kn(hn.UNEXPECTED_ERROR);
        const s = ut(o.value) ? {
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
    $d.forEach(i=>{
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o || !o.value)
            throw kn(hn.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${i}`, o)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        $d.forEach(i=>{
            delete e.config.globalProperties[`$${i}`]
        }
        )
    }
}
zA();
MA(KA);
DA(pA);
NA(yy);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = vu();
    e.__INTLIFY__ = !0,
    kA(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const Ct = window.setInterval
  , _L = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let My;
const Ko = e=>My = e
  , Dy = Symbol();
function lc(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Zi;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Zi || (Zi = {}));
function EL() {
    const e = Do(!0)
      , t = e.run(()=>ce({}));
    let n = []
      , r = [];
    const i = mt({
        install(o) {
            Ko(i),
            i._a = o,
            o.provide(Dy, i),
            o.config.globalProperties.$pinia = i,
            r.forEach(s=>n.push(s)),
            r = []
        },
        use(o) {
            return !this._a && !_L ? r.push(o) : n.push(o),
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
const Ny = ()=>{}
;
function eh(e, t, n, r=Ny) {
    e.push(t);
    const i = ()=>{
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && No() && ea(i),
    i
}
function ni(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const TL = e=>e();
function cc(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        lc(i) && lc(r) && e.hasOwnProperty(n) && !ut(r) && !vr(r) ? e[n] = cc(i, r) : e[n] = r
    }
    return e
}
const kL = Symbol();
function SL(e) {
    return !lc(e) || !e.hasOwnProperty(kL)
}
const {assign: or} = Object;
function wL(e) {
    return !!(ut(e) && e.effect)
}
function AL(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , a = n.state.value[e];
    let l;
    function u() {
        a || (n.state.value[e] = i ? i() : {});
        const c = Kc(n.state.value[e]);
        return or(c, o, Object.keys(s || {}).reduce((f,d)=>(f[d] = mt(fe(()=>{
            Ko(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = Vy(e, u, t, n, r, !0),
    l
}
function Vy(e, t, n={}, r, i, o) {
    let s;
    const a = or({
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
    function S(O) {
        let C;
        u = c = !1,
        typeof O == "function" ? (O(r.state.value[e]),
        C = {
            type: Zi.patchFunction,
            storeId: e,
            events: m
        }) : (cc(r.state.value[e], O),
        C = {
            type: Zi.patchObject,
            payload: O,
            storeId: e,
            events: m
        });
        const N = _ = Symbol();
        zt().then(()=>{
            _ === N && (u = !0)
        }
        ),
        c = !0,
        ni(f, C, r.state.value[e])
    }
    const y = o ? function() {
        const {state: C} = n
          , N = C ? C() : {};
        this.$patch(H=>{
            or(H, N)
        }
        )
    }
    : Ny;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(O, C) {
        return function() {
            Ko(r);
            const N = Array.from(arguments)
              , H = []
              , B = [];
            function ee(V) {
                H.push(V)
            }
            function W(V) {
                B.push(V)
            }
            ni(d, {
                args: N,
                name: O,
                store: T,
                after: ee,
                onError: W
            });
            let Y;
            try {
                Y = C.apply(this && this.$id === e ? this : T, N)
            } catch (V) {
                throw ni(B, V),
                V
            }
            return Y instanceof Promise ? Y.then(V=>(ni(H, V),
            V)).catch(V=>(ni(B, V),
            Promise.reject(V))) : (ni(H, Y),
            Y)
        }
    }
    const g = {
        _p: r,
        $id: e,
        $onAction: eh.bind(null, d),
        $patch: S,
        $reset: y,
        $subscribe(O, C={}) {
            const N = eh(f, O, C.detached, ()=>H())
              , H = s.run(()=>qe(()=>r.state.value[e], B=>{
                (C.flush === "sync" ? c : u) && O({
                    storeId: e,
                    type: Zi.direct,
                    events: m
                }, B)
            }
            , or({}, l, C)));
            return N
        },
        $dispose: E
    }
      , T = Lt(g);
    r._s.set(e, T);
    const L = (r._a && r._a.runWithContext || TL)(()=>r._e.run(()=>(s = Do()).run(t)));
    for (const O in L) {
        const C = L[O];
        if (ut(C) && !wL(C) || vr(C))
            o || (b && SL(C) && (ut(C) ? C.value = b[O] : cc(C, b[O])),
            r.state.value[e][O] = C);
        else if (typeof C == "function") {
            const N = p(O, C);
            L[O] = N,
            a.actions[O] = C
        }
    }
    return or(T, L),
    or(Be(T), L),
    Object.defineProperty(T, "$state", {
        get: ()=>r.state.value[e],
        set: O=>{
            S(C=>{
                or(C, O)
            }
            )
        }
    }),
    r._p.forEach(O=>{
        or(T, s.run(()=>O({
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
function pn(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(a, l) {
        const u = eu();
        return a = a || (u ? At(Dy, null) : null),
        a && Ko(a),
        a = My,
        a._s.has(r) || (o ? Vy(r, t, i, a) : AL(r, i, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
const JM = "data:image/png;base64,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"
  , zM = "data:image/webp;base64,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"
  , LL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABzCAMAAABgiOYeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFKUExURUdwTNfCpOba0ODQsd/Kpd/MquPRseDKpNzJq/bgqefUr+nMivnip9vIrvnhouXHhdnHrfXgq+HEhcutd9O0etzAifjjq9jEqNK0eNS2eOHQuN2/fuLQtOvXsfjhpOHCgNu9f/Pal/TamPTbmfPamPXalvPZl/bcmvLXk/PZlvTZlfPYk/fenfjgoPPYlfLWkf/tsurLh8WgWeKqRdWMIfPalvrjpMGbV//qrvTbmO/Sje/Ng/DUkOjJhO7KfeXFfufHgcOeWP3mqO3Pi9mGGPDQh/LUjeLCe+rCcuKjONSUNvC2QM+NMe3GdtuSI86BH9uOHee4X+m+aeG+dtuXLsmkXOC4bs6GJdrFpuWwT+CxYei1Ve2xPNugR+CcMc6pYdSZRcdxEsZ6IO68VtmlU96rWOmqNteyatJ6Etu7hN3Krdi/mMJnC8SYTZSX2RgAAAAjdFJOUwD+Bg80H1xtrrFC7s+F9ePMlcgzU5h952+J3bb8/uPVsP70MZMrxwAAFCJJREFUaN7UmOtX2tgaxmdptcU6nnGmyzWn0/bMmuxcSYIXQiUEiFyUZgUjYqHiYgSKqw5T//+v5333LVHbaXvafjgb5Rryy/O8l703P/zw/zSW11a3NnO5dRy5XG7r4dqDpe8OXVpZ28q9cEqObdu6jnfwb8PrjfXN1QfL30/sKlAdHZhyKPIZXsHG+taD7wFey204doan6Ipy9xJsx1nfWvm23JWtFw4HKBSqsDtJTy/D2citfUPw5oadMimV0bl0hV+R8N5ZX136VmBdUhUJp/coV9H50zT03wZOwfo9NoXBjaQ+MNMF/avhS1sb+of13nrJhSu6kk259a9J97V1W79L+OAVCLqu64q0397YWv4KycpHBjECf6cahtWmH5hEkUnP2crXCV/J3QGzuBLX788n8TCZ4ZjOZkkSj0c7hbJQr2fyzt54+L+Y/YKfimToatAfx0kyHBaL+AcjSZJrHMNoVHGl+Zl021z+YrP/uG+yP4qGyRChMGJ4ZGgYrRa+Fc37Bi96XZab/YWmL2fNZrLNcELV8gHQ2XT6no7pNGkVj4/Pjs+K0ciXvouIv1j7MjK5rdisA1hik1kST64GR2G1Wg07o/lkOH0/TYrHZ2dnx/GVTzIph+K/IODLOSFV6N6ZJIKbzOLxoFkwcBQK7NHIG83BJAE6wM/iUSHtMxTvbH42mSCZCLdJMG9JvfFVtWDgDYFyGPhnVEbD2TA6O4uiPhHJzgLubC59ruasalIvIvkYweOQikWsZbmWaZoWPJoq/OctvITaeJYgfOxn5zVdcXJLn6c5k12KP6aSj4vDeORTg/OAtSyVEE8jmkpMzyMevIInSA8Gw1kMrg+IrDO8d3KfLrJNj5rNPCdKeAzkE/R6FEBoC3Byy/RMj5QBdtjJe6bqaRo8x9eeZwLfGKHyaBxkeiyyP6X7ocaoTDXpCMnjCs0pEGwSMSpWr9cu5C2qmQ7gA931x7M4iiZNOblj0D+Va2t/EKXMqHDzeq2TkxOIcvE0BZcFxRzsl/Z6lUPDUtUy80jBTzTTco8SFB7yaYU2edv58R8D/Ri+T8+Mh2tXlHzSGreRjGBPfAj3neb+fu38lLLL9HsAoRcGxvsTiHh8JOc37C3PV/+hfT7Syimbko9Piq0rCs5Ipmj/CNCNi4tuu2BZpFxOmx8IB9tHYDpji3nUefbxnvrQJaKk4etzJIPbHYNK9mAQYTd8Pgj97e19/fxtzS+AbBAsKxJd18xaMozifjnTXpynH1uurjwWfsJQe5xcY1HW2EeKyKhOnaL3O9JyJa1KFvLmcBhF1cxqwn7+6CPoR5o4ORzXoeQTRobmQQSawZv9ehhsA7txjpbnVZWUiTScDs9sI9vPsJ2PhHvNTzWTSgvAnAyVrGXrBw/p1+uhgej9w/PTGsi2ymUsDsYu08NAN3g+yUzjivP0g53lZ41zsW0fo+bjYoe6DYntyYui564g2t2msnsXncohyC4rZRlrFnBiViDXrjLrN+eDlj8JhNtE0cZUNJYz1pQnuwjHG4M6oDWqet8573XbEO1MlotkI+bRLKZpLuZ/59n92XvpX5o4t0J6jDyicbaIqt1BQ44BWtmmsvcrzHIoPd4D4Z8+xeY2mEZRkC6c7OdP7zXUJ4Y8ueKzFPuT5bZn3hXdHoTVsB7aHF3qQaYd5q0ykXMtPrA6NMezaE7kahqKe/VjkcavcbsrVLPlpZr5GODqpF51OLph8OJWCbllOG0PAVjeT3cszj3ZD/z0zGEL0a0e6yTmbcVo99EOrMHrO6Vtxm6UOhe8uGmBlYksb2QfgeVu5oLuyv49LVxyRhvoWSGAWcnSPKLdJvu9ZhPZHA2J1lBlcWO8FV7+vMa9SRIN0vnTfnZb9srjVHSnhehWLQDRppbJbt5FT/3Ab+5Uq80GJaPjTo9bDllOyqnt7Bs+VJiRBiK4LftXV84LSoTokz2D1pWaRcO04JHKISkEgN5haCq7ZOxhcRt0HinTFGPFzXJtNIvepWjt2U93kwzaBvoTXiO6BfMkBM/LolVchfhtR3cLIHvH3xdkkF3Zg+Km3/Aw4tx3lrjEjeOJKdHWYpGZRVZ20vIZtwDdeoVrIWjdLL2RD1dhqkan6zi2YgTNZjPY52BQ7Tijvbc1ZFt04UDSHoGjP4vqqezm4sd7fuOBAexiYLQPMcegj2kmTv0gVzW60DJVB4auGX7TN7YlulFybLV72jutGWzNiKtGgknHop1PonkW/TRF/+ZqIo8H10h+VQhw1rBg+oGbZR7Wat1ON9BsJINsN4DNrUQ3Gsi2db3QhaNqbM2qqmqam6Mkk2jGm8WDdF0ku4YSXwP7uksLCwy3PKNWq0Fq0fmWkYFNYPmgyEgjukTfx0W3Ual1uhW6nrJUXiH+LOqns0g9dfwXX6KD6XQKcC76sBvWKpYifpTjaFAIlrt6Bl3iaDpw7d2sSfkI16J4nna6cPFTGmpAM/oANo7X0zEmWa1er6iZXwMlmlquEVs0lBQt6Ow7bcC3jTwWiTaYZTpauFiIaft3V9PoOp6UJ7hnfQ+TZT64PAroj6AZMkdjYGH+Ey1c2J3qZsfCu8a418bpHtyM06VS+81CTJ3/MTXheILo6SG2k87N63dI50NP4SW0XC9l0HfJDtqgk2Cyt3cBczkxtVmcdhX1LxHs5dDUZKjB7+uY7ufM0c3B7uvLfpPc0sLQ8FbawjOiHY61Fc/MF8av9vZ6NVwsk8kwU15/iWD/0iTcbxIi+XpewPx286OXB7u7QH9Xdbkg5neJhrYh0Sm7VILntkJgD+q6hTmSO5UCbB28/nRSloun/oJPIU8C0bKUEaCT6SlOHKqVN65eHhzsHlB66DqlFIzstIXzRKPO69CEYMsLG15jBOQLWMAUMMn9aZxWdl/00l8N7rdH5kBuTSu0IVpmPtg9QN27THvd4FxO2k7ZeGugXKbXBbAx+JOScUMIAXWncVOiOwueZ/92Mc0ofjKFhjLFmcM1AW00bzgbpQP9qOBQicgWaJpqFMv2majZNYz62d7e+SmsnMBBPPksDuW+vfNmscrRHtsjYy9rFVuJgaH2TBd/JriRuhEO9H7TbtCxL8ANR6d7Hei5iGWqq0h+261AsdB9sRKLTRDund/wFMey5m10iOiYbWfprxVGeMDCfSDgSN/RSgyNcnW+ftGo1SY6njd2xkDudSs+krGnmJN4IH+sqP0t0HA0nzySpFUcRpBlqknZpmsc3bzkumm6v758fXl5+W4QFmgJsTUBXYNRNsW7RpOSO0Cm+0QMxVwWNlEqfy/YVuA3ILM2D+jiSWuCtYUzFsDB85FgH3A4skG6KXd2hLZhkw6MNmhmZYWaLX7E1fCd+K2CZNCyjyawFh1OUDWI1jzQgSV2wzzfPTjIsP9bvbX2pLGt4YO22tQ0Nm2Nbc6HnWYuzIJmJogTwswINJTLIGq5FJGbpAJu0vT/fz3vZa2ZoVp33bv7w1kVYiLl4Xnvl0XZ4hJI1pLQ1dK7QGq3cgt2Ky/A6k5C317eqloRWA8lNIhJJ2ztEqA/zbH8pmqIOGSdBdnax48JfV8PHMum4UdRS9RuyD1bXTIyGnc8ehkxa+qFSwloaWfF9jGU/nM5NYESHJQHNhPMQeZ0IkO/zmGw1aPmKka3ThazyK3YuOkVS9a1NDMJfQBCkc7VUtCGIGgdvM61LL9VKEjwjwzdowGlzR3OBnplrhzaycrSjlxv0R7EIUVBv0OF0GvMKUCfk3O5IDpUHxIHX/leiHkD9G2AA1LHsXVVdzKAq1uLc3Ir5pzomebtsmpKIKRIaAikSuKL4/P++SXlLdcE1q6rs5+Wvydpo7gdJwgCS+jKaiX1wbFyKyub7NagTqkqu9QGCvpNwFWhif+x3+9fZDGE26aghIZmDnFxTiJHeGDdsxAXj2VEvR3NG8RlHkysCa2IJTJusmO6xMJQftDecPhCJk0RJc1P/dnswqN+3sVeA+UBdp6FBFr4iD8Ife0Rsoc/lp4YJGhF0WZFg1vZFLpVAya+zuWwQSPWu3GpwNDWp9lsdlzGwY1h0izUxBkYuPeIWRN0BZA9deyov0J6ooV+hVHMjto1gg6+LuIZE0DLvmufogHahAakw/4oYg3acjkfLUHZpO6jowEBV+Xx7ERTXUToDiYNjmKx6fcub9WASTNuh8MnUQcgZE26nIVhOM1S5nLJNzDKAu0lISP2NXaaeHJ0qlBoSFx44yyypu7LzCQbcwjhlWjw66+HQ1mSvrNQ4uQJzX64WvUzaOKYU1wyUgxsi0KBaR+VCZlxT06g4wwStC2I3uBZgQxj0RTNbM+tqPkF3zqMhke2sjNxjtA+NQCC2jxMSMK1I+hbRFbAlUrlJJdLYNtQFTHrxAAGbN9hVfMniXwL7YytESSXzq/gdCxue0jROnq4ZA3irkbIEhvArWg6ZXQBukkC3wivvcuBcn6tGBk4ttcicq9muJpMQoFVjaCZAuAi7++k6gKIOwGM0xycoOXizqLM0Fmhx74Ev+LAUsnGW0dWRsoWuuQ9mwB0jYoFlwWOZmZ9Z9aDH5AriN2o5Ew1K6mGcsCwwRpcS81X4NMNU4fROOV11eZ0a+rp8WRyOhnLPtVEF4M4LmrsW19iYSeggXdV5+W55oR5mhUbG6l01I4bzaSq0bNtNfvV/dXk9DQ0stCfY2mDjg2sS0y6HCNLRSN2o9GoeHLNYUpojqLSvt321FIjZ12sE6qmephEC0gf8gA96SBtbOxJ07o4I+hbDyEZWPKl02iUKw4L3MBAynPLePDUbI/i1F75Nkwlhimvc+BenC60EtGmhYOgngSIiyYif8nFiiYdA2S5wb80KjbPxRS0G4+7zNbcU0lLx9yxOUKyhcqcRPu0k0FsA1MuuvUAxd2rxrIuNwaL+XI06DE+nBxjX+Xz2OxkE2Y2ANIRtLdODXc2R9JCtSCavwLoVZ16H1Q3xFMxkOI+IfOqlHsjCPb5fDhdDHqIjueEzLyDQdxj72LeQXsaxKuzRip1uL05k+b2HrE/jJH2VZEm4YJWdvYtuDTxZcYjxM2PO91md7kEcEavYvLuSugonGWW86YWDY3NdSp1sDkkfWuxvDGKOET7DFkbqAcokq4LhV5VBpHeMgyxFOk2z0q+75c6BA7oZQ8E3qQg7mQj7yq1l0KPEiYa2ZMf1z3U/tAj3UXaIeUQTF8g8OvCdVUCY8GJwIBb87x64NVq3dGIwMtg5pVQDg5dbl4FrnWjPWkRSN/ZQWD6UiUDO9iVgV0L1ArQxn05qqA/NUZEeIyEawCLK1bM3rUzot6oCM2XkTQj++Zlv6mpLamu576lUndWENv7tmsKhi7WSeQdA02N+p+jQa5SHuTDBOFALe0Rvu75SB1MzVP5g8XdbY24IObEBqRf3l3pvg1wJMpVTbqG2OEZbcYR+kuukdAwEAZYB7f1/LAs5O6Plrc5C8JZE4cDAqdWfuvKSlwCKKdSqXu2i1uvbK6SSOSsbh9NDXhby3xSw3W5Qxc0UMzYBI6Sr3UXA3gZCRwHlV5rWlU7KjjOfZrmkOZiSOOAn+6gumceRTVXdMexhnmhnLUztktychEe0R2n7tVKHV4JYBiut/K+KtLxGXw6df9a88AyoyzC3g3Y8K5YsWQ8nJWiaclNti24H3R1LlltFDwZXa1Ww0WIqTv9sGQklhFVsLGfLLG3/5AhzUTTTF8Rdo31nbEcT+ECYxwfmC5dV8CXC4w8GZa7gy+CXsqot6bNuB6Guu1+G5Mi3xPvqWAg9A83hN00MHfbGeqySMU2d/E635Qgt6BGwcV7GhmLVpHCLJ2HJT3eMnII/fkG+61nYmnALqZJfY8MFDqpEy+h2Dw84PiDJaspzYMEL/Cl2LJ1jvO+Wp3RowzifuBezhaom0K5KW0NCrXJbOoQNg7iBM1LUL7SFUyT61ZWElY19AGC+UVY01U/hP9Q0c8euqVB6lZvBdhniB0eNym4oNJtpmyaciWSPFREmugmla/tRT2xbNf0YP1jxrq7ut8XuhmtI/S0FyL2p5bH2HJWY0ZkEwWYTrEQaGcXF/ORoUCJOJrY4V9d/3qyF011OLB1oCmYff5zWefOF/8aRT3VJURP2Cj12vNlRVOVGWHb6NE7f3kfh7FjPmkvD003gE/r4N44ReQy1WVsRmX5U1HRnua7RmRfBJ5d/xIyupgZiZySSbp5/Lkfhv2LaakIFROFEpN3fTrbuIudCvziLFvTq069mLxSoRWtXupB497gbbtJ3uhmxzPsSo5bnVqRJpiEj2s3cnCUg57pTVsQ5n1NCVtad33wy8iAvS87oXgJpXVnITYH4ef+8ixr8E2njIv5CS9DGf5o2grH0NWntcSina4k/qq0pZ2/or5XTyhdS5euQggx49PV7Lw/HfGkO2vV/WZnOe3PrsbjcdNRwJG09erjkDG2VPVNoaPBGWed8er0Bs7pZBXOZrP+DAvTq/EN8G3WtMTYRs1PTyCSHD7y2vabPep83Q2L07UPRqnbgaR2E53x+KZ75qXTmytUbjCdBsawR9/fffrKYd78FIGb2NjV/dIZnlKpZqVj9WobtHV//QgD2xD6uz3MSvHgbVP+RV1tTJNHi6/O2JgwXv7N+9KvXznvdTnOM3+4LHEf6MbfifLB3/5axNbOnm2a+iOOgg4a/4CyTGW7+9a98n7oFD2S9T++lb+1u+/cdbSfcwZXRsaHu7/juwhbb14FsbU9/Bm07Mn6tzCOQ+vBnvUT2KThmdUGGtez57/1Sz9bzw/2gwcZ26UGEd79zV94Ye67/93zLP2u6N8HJ401FiLP/hVcSX779ZuDP/b397C19v0cTnPW62/fUi+fvXj+9N//chV9hCc7uy/47O7sPN3+z//T+R+stb7GM4HCBgAAAABJRU5ErkJggg=="
  , QM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , XM = "data:image/png;base64,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"
  , ZM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABrCAMAAACYL/YhAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUdwTNDa78/u/6TO/vHV/fDM9fDI9dDl/+WX9srD9O7W+fbS+qqj422l7vvZ+fjZ+Waj8eHk/L7f+cvE8YS69/PS99vg/mKP8maK6EyS8RmY9rto6fvS+VKX8nCa6tbs/mGh832w+Oy++y6S9dXg+4fL+4O5+ou7+q/U/dqM8NKL9P7r/MHQ/vbB+f/y/f/u/f+c4//T9P/m/P/f+sLX/v/j+tfX/v/b+f7O+czX/f7Y+rJ8/LfX/mSe///Y9f3B+//q/OLY/qbX///I+9qf/P+i5/+p6f+w6Jmp/+zZ/Z3U//Xa+2OV/kWt/NCG/f+a81XA/VCy/mbU/5zc/66k/v++7q3T/rKu/v27+4So/7We/P/F7//W7Wfb/0u4/o6q//7U++Wk/Eyk/1u6/5fQ/6Wr/qrc/7qJ+KOi//+27tKR+2yc/8OD/aPk///M8Irc/3qn/rWW8MSu/maZ/1+o/WjB/3Cj/1Kp/9HQ/seL/vG2+vyS+aNx5XjG/7O1/v6Y44z1/2ai/2yr/bh98ZDE/qG2/Zrt/2Xh/8yM8cGS+vuv+pLL/umu/daZ/sHA/4bl/2/p/7mc7b3Q/ZHX/8Wa/aJ87Vik/jyl9nfi/7nJ/XDM/7qo/KT0//6o+4TL/1/M/92r/a+N6o3Q/+HT/q7s/8K5/b/n/+zg/cOo9veE+eG2/O+d9VFq19uQ/d2H+f60/I144Xjb/5q8/UJhzNax/KSG5iaf9ozq/3vU/8zJ/7+F68mh/oi+/cn4/73e/tKY8sh34+SQ79So+F6L/JCh+uTN+rNMxOTG/LSV/f255PGq+nuu/Vdy3qLG+2GD6tJp4axc03K0/dS7+KiW+/KQ4q6C8ebx/7qi8lx746aJ+aJm4cdb0e2/++h95DB2zqhz9bC9/fPP+/2g+5VDvJNW0d/m/rB34bb2/32J8O6H4Idm1trB/YmX70GE7v6/2pSQ8kSZ9fv6//7I2dd7+M6E6PTH+9ly4uyh4/Hp/DyQ431Mx3d23KOW4+r3/+2s4XFl2ipRyoYAAAAudFJOUwAB/v3+Ijv+/Q5SlAcx3KlUdEUaiWf8+BiD/vu8qvvN+cGJ0KC12fXEccTk5+CoDfMVAAAVdElEQVRo3uzXa0yTWRoH8CmUi2BKwMBuAgFj3J3dMUKmpVAquy3QDwKjIjXQkOjQHaEsoUvoZrJQG0JGqLRCxUqjnYKUpTfLrXIJW9EiDJemK8KARYodBQRkAQMTxRUYwj7nLaAz2QzwwU02mX8TAx/w1+c5z3vOeT/66Jf8kv/v4Fy9vQiEAE+PA/8bz4NAp5NJ+JqasCgv1w/P7fcMCQ6mEwHMjQg1uR3+0FXiwPsegeE1uaGRJpMmyOcD95NMDwmBjoZT8QCmc7kqpw8q7iMARU2FUCg90mgugLsScftcXD08XPfef1cqrbGRRYvBYkxicrlC1Qs3lx3+6oCvFwG+IzWc4OWK29sK+tIqKycnJysbWSwWzS5HJXJVLw7//Jf0oqRSsG9IoVBJXnur0rNx8tQFyKlKcSOfb5enY0295/GTx9Tbe7toFy/8JhcDjaGkhhNc9gRWgncLPhdqLSUl+qEkU3p6usYp6F2jDnj7OUHuOaYX54GPxU+g4sCDwA97Ez0rwcNS785mK5XqSFNkpEnj5IsGytXXw8XHb9oNogHTGx5a71gtHj+BDRmAsAw0EL32AB5ygA0o9aWMLqXEJJVLTW5BOBevI3Q6/a3ftJ9fBOwIJhB9PvLUxsbi49FDhEBWIzZwqeGuewEnJ9m19a8gJ09mlra38+S5EklohJsXkU6EaLWxUWFhudLQUJNGE3QYfo0nk0mplOVlu53PF4vFmBiw2xl18STA3/YZjUa1Li8rKy9PVN7OM0rUktyIt0QyJD42Ph72PKNRLpWaTG5abTwpdZlfwmYzsLDZFrGYRaNQdzepLl7Qm/jYsIjIpCRn5yS1KIuDRLWap5YYp0kkUngqPp5EnegxSiByaahWi7eXKJXKLkY7pLy9vLy8lMEWs2JSfXe1qR0JoRPfTruZ0GCmAylXcDgcszlFzVPwJGFUKoU2gScRqRN982q1GkSttk+PuC6klaekmFPMiESi5y7a6R0MGRlx0mi4XCYz3RQqlY/n22w2s1mha1fwjPgYMWuCSiamLutbeDxefn4uXq9vAQ9xKSgZw8PDZjMSabuYU+/vIesjTk6YF50U6hZmHM9Hom1YUQ5L2WOx2JepZGqMvYWnUygUkpr5lhZUnk6NGiyXJGdkYKSolM3aGfQZeR+8FucsjZjOlSSnpdlkIJpFovYhNtu+HB4ew1K2t0M5ip556GfXUG6uVJqUFBfHZHJN8jREmkUMy6EdD4mgEUdQR5nMuPPOcrkRwDMZGTaZzGrmcEQ6dq1yOZzCsjDKRWZzjnG+RdmS6wdPiDQyKZoJXlubUFMEVZpFmbU7Pog+aLfSaDRuGHjt/OX+cYkExvPM8PCiTCazHbNyRAw2w06lWRgiEcwSr6+lpU8bFYb2gMh02HGFQmGBsEA1njGcUp7pvm8n8LBbfvdCd5E8MikSZjTu/OXCcVjAZEXKsM22KBM8O/bM2lECm/kyn5HH4VitOT36+Si/qDA/2OQgXJVQWFFRAFGdgZZm/n7HJQxaGH04+uBB3ehCU39/NAKb8pOTz6SYh6GjMoFAIOI3iisna2vZJUrOsWPWeX1fbFTU5raqUakA3BRNZlHeJ/t3BH/32TffPMTI5tHuoqbCwsKmojTwzDYrgLKxOzGpMY2Vkxfq6xsaGBef6fp6apA3PT2CrQUC29qQV1ChyPrk1zs/FL/5w2e/eugQ65ofLBz/vAlAmDib1YrqE5TAtIB3qwFtssXWPgwEbmR9HQbNSaXitl2BYCX678LD+Xz1VySOOsTmutnu7uPHMzAPgf5iGqrv1q1Xr+4P+Pu39CExVvt2BD1J6FFScblXsm/fvoFK9PJ13bfz3em3UOK2CGTz7MLiwvBwq3UGvLHBC3APgFPrFWj+g9V6vd7eg4/VQkun0Rpy05nM7Ozb/0hMPFtQIKyB4zjg0M/dbXAuvgH4jw86mrotNq8tzra2oo6OjQ0OoCP51ZsB/7HBqVbYP/X6+T50ZsidnS/fvHnz661UJbYJe2hYjnp6uPxXFDQKOj6HPj+4VeM2aTAYsAIHB58MQBAnKEenkLJLp8joXoAEBgZ+9e0XKAmQL6tuC9vd3dE5ZeE38gN8f3rbwHkEpMI1lILdD/S87kCMdFSJzLo1w9wcVDjY2wvq1JSs2B3+uw6RzTC3uvp8O1NTa4GnT5w4fe6LhK+ZxZkdWycj3Dh8cT/iCHBChBDhxI5hseBBq3XvyPlhYXZ2U31Qt1HXXPdgY2NubmpqdXVVkFnfUPx6ZmwL633e+y7P1/52/fqJ018WdXQAV2KxwOEPpz/FE/ej14jgECx0OgmOO76l1r2zs/M1yn3IjGH0qSPNT1GL52A5p6agoN4pVDDq9OCTzQA5dXBp6U/fVoNXQqHQoDoWWsvld1dM7AQMDgnGQDq6QpBI0N5lO9wZoNbqwKWlFSxPXzrU5sC1uTmDYGbmviNv0OcNWt0BzDSsrCwZOCJReTmjxHFRZfHtNM/tt4EjwduiA0S3CCr1U1hSSk9cYlVVFYzBuRPXryPXYd5dnDWsrQErmHntjrWjoeE7yBvkPmldebkmkDlEdGfk82H/5Qds9dSDTg95v0YiIgGEV5nc7EuOnIUkQqoSTiy9bF59/vhu98Li4uxCqwGGaW6mmAGjIbbAHtvZ+ai24+HTDYFAtimyISUlIB7d2lk9ycRtcrOrRDKqMSL77KV3QWZVwrmlulX/7279q78wLe348e6F1sFqQA1Yg4thKhkddwx1azLBGIhWDiJLYVT1ehCPbu07ASQSGcyQkPdJMlmbjQiQysouoc+lS4kJCS83xhpOoZeAR3Fx/f39TU3//KF3sPpqdXVra6vM4Aj82Fpd7QDzRJmlpQxlUygqcevOSAgPd5CYuSnSp6/cgCZuiihQ3suNi7XYSxXsby1cbnp0tHP/3fGBJ4N3unRXc3KqMRdp1Tk5jzkXL3Ly8jIB7Cq6G4mauvnw7yf8EQIo2VGnAx2pELaV3XDUiHmJCSuGTD48pY1icSW86TyKrKhQceEScjl5AIalk4/v6RvSPc5BuXr1sU6nLs7Kgkt7fX1p0d3LocptEHeA8CkKZm4WCq1dv/cCDtK2MtRP9E/iiqEL9qGYCRg6QCtPnfq3quJFhZB57e/X7gy8uQDf4M9UIok0MaRDUSh0PD14J+shRYVMuVK5XaHLXygo76FEIj14ff0eRkLKCsrKTj/8D6P2HhP1lcUBXAI1dBtba1h3N7vZbJvo6sZExkFGYRgFeQyPgeExgAqDlffDAXn7ABYoOkIBAcsiiAjIQp0ISiAguvJWp4Q0snRJqgQwXYTaovUFMcTs99z7G0TAdg8i4h98PPf3u+d3zv3ZcgB784Dr3AQbx/yxsqnnzp07caIwtr0BW7Ebf+GRK8bNduBRfHxFRXz8pUfu7hiEkGFneljdBdypq4VHxB4NDxEPhs79i8dDoOf+XvaXOrpxJXyviDHL7NjVlHv0Iry2wjKv8a6u589NsdS5lbliqxeP0KDHt+A5ki9kmM+mjQsCuGr1nv0UGtluxvJU5y4+fCiQSHRg51a6b7ftpt2Cf89uya4DqFkXuXe1qKvjeYf2a6rCD7pvD6Edb6EYsndvZB6B9khRyBCgSqXC1ROLVJyG+l/0QzCZ+vDmTapB27bNzc2xKiTmue75J9qJq15VzZMdHVqt1tS/qVLX3Tg5xDiodfbu7jlnLl++bp/PJyrhGq7eBU8lwo/RONGfGLr+0Ik21oDBPDf488+86gmVVkDFhwrLrnop4yazyYuK0ulM0VpNDjGtws8v/bq7e3p+VNRgPsvxM6GHM3rPX6WKjFRJxBK9E75GEqpaf6iwDXGCob50JrWwQWkeZWg9mokqxZ8NHjYAvMauBqZhOCAQ+zDqTD4T/7YwK37aFIlQiXaY01cn+i3SknovZgId5Dv0zSOMmzfby9VPpjpoPaOiOrWXtY2NuEuezYML9QkNDc05g2+PuEcxs3Pzoh51s2lupJOTk6PwSWEZy8SywtMQc1hZwF7Zupica096MnW483pPT489fqZW687iWSuSozorJ/CIOxUbiJ+uequv2axzyHXKBecohGVsbGEZi9On20Jpl8qwWcSs4nKy/kbm1GH7npZLaBXvt+RrtZeZF/OslWkEnoqhaZ3m9YqCJWPUapF+Vpfr+CZqY2OpvWTRNkK3Lm0XCSsKW1mmln4t9ydc8f12CUbTnk6dhyk4/GolLAiRcyTGPQYpnhpJrytYMnu/t0OjUc3qHMhyoI9+6i8Zd/J02zy/eak0yCQLTxZ2TbEzrXbcv3TBXnfMQ4cFRE6tjNu7NygnhiJ8n196et21JeeC74tEGqQx253h6EBhzkBEYGDZycL5yEh9JDeFtaULCm/3Ns71dHoce5Crw+ohp1bGIQgMv+NH3vi1JccZRlZiWQCRkd3D5m/AQPa0KJzHXcRuZNX+BZPS3LadGq4vemg9K5uaLtP1QobExe2Ni8vB84m2I8CCLUub/g/FkgCEZr9KPzs8bL4ow8CTZfP85o3kKKsMvAKCu2DfeeaUVleZ21R56tSRI+ExMY/BUQzIww9zL328YMvSwe1PYslTRABVuZnXw9O3D3ljW7MncGDZPLuPaKkzhoeHM7AEjo7Mz/36s06ag7u++mr05R/HsjGjhgOElozPZh8fPwaOj5/dtLTP/wiFjYm4liqVXt8fJkwlXgRijTOmR19+83JU4LB/sItyHXWdnTR3Z49i4BhDq3ocXcVjcBRZzeTlkDd+dtlB6wdiiezpzMzMfolMRqYzzUHtBHoFlrVmDI/eu3Xv5TQ4usKOer53Kh1MO7XhHVjG7K6Xz6zHxr579eo768fcAxjqF5qegxgvLv542emMq6trwMzMaysJiSKNc1iYd4kABraO3rp1bxQcPARAWt5KBwedqVbb0YFljLGmgPj9q+9/ZFxmclYOqhuJ482Dvr9ZCv4WoOvE637yEKL6MJYiGlGAP9z6hrQMcwY6mDvw8PDQdWs7wjvuNMRYxzCPidHQojMzMwkMRX7NzYODvuuWvfNxdXZ2piNCVysrmUgmcg0TUiTwyoMmpGP+JhzowwMBsAO9mbUQJP4Aj8VdOXnNiM/zjNcsGw6dhRBIA4jJ0svrx2mdv7+T42ISqIeDxzGA2dnZC5712PHjV5KTbTJtbGwAopwWNNPBRJ7xstnbyJYFkSYQDzAQYnkVRE/97Og07k0ShXVFIMEloPXYl9XVV5KJY2BQ0Pjt5hsAz29aPgJ/yMBaW1sTZGlCoJ0dgZRicMB+vdPw9DDADHYpM7gngIs49MJT0TYCGBQ0ULerdjAtLa1mwwonQpYsbG3rKUkTZ/JcSmogenkpUYU0epSg6QwmZhhEIUNOfltNPXD1lI0ADgQNDPQ3DcFLazdbDn5kKYStM1bWxNkOAfC8AQxAlixNbrIEAT43ZDjGuLfAgYFB/6M34JW3r1vhWHYnD5Ylws4FEUJgOUCZjJNOTrPT03xNMxbAsWyB27dv353Di8C71764lIQob1+zwrnzzp0WFhYCaVlLYEhJTQ2dhFQpxbQ3WXEHycwM8zcZZk+2FnEO8e9eA5h1FzEOr6qq/f0VXr5a8DCQviEhITUG0FUmeZscHp1mGTY+B/dtdVER53yCDGA0gXSEkqQsb69KW+mUxkIqlS4ifWtqmIcrANBVsoREmjRhd01OVrNpiacXJI94TGA0IjPLE2BSsLK9qmrDSmdeW6QsDKTveTpZEsB6VANW8pgokK97sAmQG7iiEWSHiIhgIHk2mYmensIpUZXZSsdem6R2YVJbC0OavlxLS8M1UNezArSYVBE4UiTESIOP4BEYzSIxxdNTrVYr1QBXfNH5AW2EmTlDlsZpQiQlKdXrF2oeF/E40aiO9jQwcd/IIi9iqpd7CQQyUaksX/H9zMd23t7Smaf/uclX1tjAMZAVPaHMagJE9KHRXGpoGEHw1eRcX9+UG+OibUpTghkIccOKB8PrAPbr9U9l0jASjZN43E1SAmR7E+XABFXv6dPt1M9oNC9aCPQxcHI5PA4mJCQAVAhg0tqVX98ax8YW6/X6oTC7sDBfaV4wYfxwUG0oB6zqzcwESNA/iTQvhug9CXGhEaER8gG5HGCvG/MSEgByUbnhHSemm0piC2OH9FK6lmF2xsELoVRbCNWAqvsEGpEANAWiiRdD8RU+FcRFyCP2ZiYGBfX1RfcmcI+BCoDBG9/1hm11Cdr72LNSb29vkAaQ3WhSC0MBsq0lcEZjMjExgVmXz2VYTHlyaRba0WSAfXIGHjyoIPGu2btPhM1KGFni7eKNuuZpCLVaIWV7c309mf2vZ2dnb5uYMNCvbghehDyoLyEZ/W8cA5GiGzI8qEhRJH6y5pf+84VZXkl7CQuXEpfFoJ2UlQNLnmUtAmA/gUN+NCr1seae2kObXmgUAFNSNq795RcXRms2oJxx0YUOdhUs1AqXhQqUSqQlkbX9j+poQWlU2ss4eJk2P1F68NxKD2aZ/dp7BCMjkJ9TDS2pIVCRIoAhvgtFL3Vnamoqcf0E0vVjs0sc9zjIMrT5ZC1+4K++t1i1ao3ZX/NAhnj+g0KBD7WixtfXV1osLbYoZqZlKsU1Asnj6WVlJWaWlj75yU2IP/z//zXi92Yb8/LyOMhQxXkXOyKlUg6y6L9WkL7gna2Dl1haevBJrxvP8Hf/q9X+WRoGwjCA39FFIYUMgkkh0lLQz+CoY1DQRV1T8wEconHpYDkXAw4nRDrYIYvORUILB4IZxIQOde7gLkU/gIPve5fiIkL/5Cmdf7wPb44bbqqHEZpeY/txHE/Api1FNPnm/ZYaUIKqTnH06EkPQUyyqk/5eoeWrUoc5+buqWvDpynJg/PXEee8D7m+lF7G+x93h57v+41GY6w4UyPThhp1JYIJ4GmvFymTv71wTLv9fol1tvhRmqaZ78N8EkwSqzzTEx7DrFcqasjjqLm3F+GUaPID6SGYnWTeKHXSZzVf42ucQJsamTFUz8n96KbZwWucvT2ptt0edOHiCbty5ThOloM748Q0yDwpm0BWbjuR69quFMHEtwSlwaCLXsv7XnIecm+1PicnNxabHQYB3OKQw5RAlCB+C573+aQ2pgoapWT+aLpl1QRDEy/Hdsl1EWQiQw8sD7mwXl4E9tvtygZTY8LPDdiQCaEG9PPxNLLgGPo6kGgCKFpCDCcejDfjl/D/zmpwAAlpwr/DJBji8RJWdUoKCjaLZsByENu0lklhoRSOdoaRlcKA1TWdFBxodkOAB0saXlTNZVJ8KDSLYOusiGX5e4EM3apZCzhXpjDJYo6VovMD4rObpamf7egAAAAASUVORK5CYII="
  , $M = "data:image/png;base64,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"
  , OL = pn("boost", {
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
                return $().$i18n.t("boost.description_tap");
            case "BoostMaxTaps":
                return $().$i18n.t("boost.description_energy");
            default:
                return $().$i18n.t("boost.boost")
            }
        },
        getBoostImage(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return "/images/boost-multitap.png?v=1";
            case "BoostMaxTaps":
                return "/images/boost-energy.png";
            default:
                return LL
            }
        },
        getBoostName(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return $().$i18n.t("boost.boost_multitap");
            case "BoostMaxTaps":
                return $().$i18n.t("boost.boost_energy_limit");
            default:
                return $().$i18n.t("boost.boost")
            }
        },
        getBoostTarget(e) {
            switch (e.id) {
            case "BoostEarnPerTap":
                return $().$i18n.t("boost.target_tap", {
                    number: e.earnPerTapDelta,
                    level: e.level + 1
                });
            case "BoostMaxTaps":
                return $().$i18n.t("boost.target_energy", {
                    number: e.maxTapsDelta,
                    level: e.level + 1
                });
            default:
                return $().$i18n.t("boost.boost")
            }
        },
        async postBoostsForBuy() {
            return await Ke.post("/clicker/boosts-for-buy", {}).then(e=>{
                e != null && e.boostsForBuy && this.setBoostsForBuy(e.boostsForBuy);
                const {$event: t} = $();
                return t("boosts-update:success"),
                e
            }
            ).catch(e=>{
                un.error({
                    title: $().$i18n.t("messages.request_error"),
                    message: $().$i18n.t("messages.no_boosts")
                })
            }
            )
        },
        async postBuyBoost(e) {
            return await Ke.post("/clicker/buy-boost", {
                body: {
                    boostId: e,
                    timestamp: Ee().getNowTimestamp()
                }
            }).then(t=>(Kt().useHapticFeedback("heavy"),
            wt().setUserResponseData(t),
            t != null && t.upgradesForBuy && So().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            Ee().trackEvent(Ee().camelToSnake(e)),
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
var nt = (e=>(e.SYNC_TAPS = "hk_sync_taps",
e.SYNC_TIMESTAMP_TAPS = "hk_sync_timestamp",
e.SYNC_AVAILABLE_TAPS = "hk_sync_available_taps",
e.EARN_TASKS = "earn_task",
e.PLAYGROUND = "hk_playground",
e.AIRDROP_TASKS = "airdrop_task",
e.SETTINGS = "hk_settings",
e.AUTH_TOKEN = "authToken",
e))(nt || {})
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
  , uc = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(uc || {})
  , RL = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(RL || {})
  , IL = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Web3 = "Web3",
e.Legal = "Legal",
e))(IL || {})
  , PL = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
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
e.free_durov = "free_durov",
e.rocket_to_mars = "rocket_to_mars",
e.adv_integration_2608 = "adv_integration_2608",
e.vintage_cars = "vintage_cars",
e.investments_in_farming = "investments_in_farming",
e.hotel_construction = "hotel_construction",
e))(PL || {})
  , ML = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(ML || {})
  , DL = (e=>(e[e.Bronze = 1] = "Bronze",
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
e))(DL || {})
  , NL = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(NL || {})
  , VL = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(VL || {})
  , fc = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
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
e))(fc || {})
  , FL = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.CONNECT_TON_WALLET = "airdrop_connect_ton_wallet",
e.INVITE_FRIENDS = "invite_friends",
e.REACH_PROFIT_PER_HOUR = "reach_profit_per_hour",
e.REACH_LEVEL = "reach_level",
e))(FL || {})
  , BL = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(BL || {})
  , UL = (e=>(e.BINGX = "bingx",
e))(UL || {})
  , Yo = (e=>(e.LANDING = "/",
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
e.GAME_AIRDROP_OKX = "/clicker/airdrop/okx",
e))(Yo || {})
  , xL = (e=>(e.points = "points",
e.withdrawal = "withdrawal",
e))(xL || {})
  , HL = (e=>(e.passive_income = "passive_income",
e.earn_tasks = "earn_tasks",
e.friends = "friends",
e.achievements = "achievements",
e.telegram_subscription = "telegram_subscription",
e.keys = "keys",
e))(HL || {})
  , Fy = (e=>(e.ONBOARDING_START = "onboarding_start",
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
e))(Fy || {})
  , Fr = (e=>(e.Dot = ".",
e.Dash = "-",
e.SymbolSeparator = "/",
e))(Fr || {});
const jL = {
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
  , So = pn("upgrade", {
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
                timestamp: Ee().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = Ct(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = Ee().getNowTimestampWithMS()
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
            return await Ke.post("/clicker/buy-upgrade", {
                body: {
                    upgradeId: e,
                    timestamp: Ee().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, i;
                Kt().useHapticFeedback("heavy"),
                wt().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && OL().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((i = (r = this.upgradesForBuy) == null ? void 0 : r.find(o=>o.id === e)) == null ? void 0 : i.level) ?? 1;
                return Ee().trackEvent(`mine_${Ee().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await Ke.post("/clicker/claim-daily-combo", {}).then(e=>(Kt().useHapticFeedback("heavy"),
            wt().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await Ke.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
            e != null && e.sections && this.setSections(e.sections),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e)).catch(e=>{
                un.error({
                    title: $().$i18n.t("messages.request_error"),
                    message: $().$i18n.t("messages.no_upgrades")
                })
            }
            )
        },
        setDailyCombo(e) {
            const t = {
                ...this.dailyCombo
            };
            this.isDailyComboHasNewOpenedItems((e == null ? void 0 : e.upgradeIds) ?? [], (t == null ? void 0 : t.upgradeIds) ?? []) && !wt().first_time_load && setTimeout(()=>{
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
            this.getDailyComboNotClaimed && !wt().first_time_load && (Ee().trackEvent(Fy.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = $();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return Ee().compareWithEmptyOldArray(e, this.dailyComboCount);
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
                this.cooldowns[n.id].timestamp = Ee().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
                this.cooldownStartTimer(n.id)))
            }
            ),
            t) {
                const {$event: n} = $();
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
                    const n = Ee().getNowTimestamp();
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
  , wt = pn("clicker", {
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
            const r = (Be(this.balanceCoins) ?? 0) + e
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
            const t = Ee().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (Rt().maxPassiveDtSeconds_local <= (Rt().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = Ee().getNowTimestamp();
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
                Dn().loading || (this.clearAchievementsInterval(),
                this.setAchievementsShow(!0))
            }
            , 500))
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !Dn().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            Kt().notificationLevelUp = un.promise({
                title: $().$i18n.t("messages.level_up_processing")
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
            $().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${Ee().getNowTimestamp()}
              timestamp dt: ${Ee().getNowTimestamp() - this.lastSyncUpdate}
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
            return await Ke.post("/clicker/achievement-stat", {
                body: {
                    achievementIds: e
                }
            }).then(t=>t)
        },
        async postExchangeReferralStat(e=0) {
            return await Ke.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postReferrerInfo() {
            return await Ke.post("/clicker/referrer-info", {}).then(e=>(e.referrer && this.setReferrer(e.referrer),
            e))
        },
        async postSendReferralLink() {
            return await Ke.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSkinBuy(e="skin0") {
            return await Ke.post("/clicker/buy-skin", {
                body: {
                    skinId: e,
                    timestamp: Ee().getNowTimestamp()
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinSelect(e="skin0") {
            return await Ke.post("/clicker/select-skin", {
                body: {
                    skinId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postSkinsGet() {
            return await Ke.post("/clicker/get-skin", {
                body: {}
            }).then(e=>(e.skins && Rt().mergeSkinsAndState(e.skins),
            e))
        },
        async postSync() {
            return await Ke.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(nt.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(nt.SYNC_AVAILABLE_TAPS);
            return await Ke.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : Ee().getNowTimestamp()
                }
            }).then(i=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(i),
                this.storageSyncTapsSubtract(e);
                const o = Ee().getNowTimestamp() - this.lastSyncUpdate;
                return o > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * o)),
                this.timer_leveUp || this.timerLevelUpStart(),
                i
            }
            ).catch(i=>{
                un.error({
                    title: $().$i18n.t("messages.request_error"),
                    message: $().$i18n.t("messages.no_tap")
                }),
                Kt().rejectNotificationLevelUp()
            }
            )
        },
        async postUserClaimDailyCombo(e) {
            return await Ke.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserExchangeId(e) {
            return await Ke.post("/clicker/select-exchange", {
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
            localStorage.setItem(nt.SYNC_AVAILABLE_TAPS, String(e))
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
            var t, n, r, i, o, s, a, l, u, c, f, d, m, b, _, S, y, E, p, g, T, w, L;
            if ((t = e == null ? void 0 : e.clickerUser) != null && t.id && this.setId(e.clickerUser.id),
            (n = e == null ? void 0 : e.clickerUser) != null && n.totalKeys && this.setTotalKeys(e.clickerUser.totalKeys),
            (r = e == null ? void 0 : e.clickerUser) != null && r.balanceKeys && this.setBalanceKeys(e.clickerUser.balanceKeys),
            (i = e == null ? void 0 : e.clickerUser) != null && i.totalCoins && this.setTotalCoins(e.clickerUser.totalCoins),
            (o = e == null ? void 0 : e.clickerUser) != null && o.balanceCoins && (this.first_time_load ? (s = e == null ? void 0 : e.clickerUser) != null && s.lastPassiveEarn && ((a = e == null ? void 0 : e.clickerUser) == null ? void 0 : a.lastPassiveEarn) > 1 ? (this.setBalanceCoins(e.clickerUser.balanceCoins - e.clickerUser.lastPassiveEarn),
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : Dn().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((l = e == null ? void 0 : e.clickerUser) == null ? void 0 : l.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (u = e == null ? void 0 : e.clickerUser) != null && u.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (d = e == null ? void 0 : e.clickerUser) != null && d.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (m = e == null ? void 0 : e.clickerUser) != null && m.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (b = e == null ? void 0 : e.clickerUser) != null && b.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.upgradesForBuy && So().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (S = e == null ? void 0 : e.clickerUser) != null && S.upgrades && So().setMyUpgrades(e.clickerUser.upgrades),
            (y = e == null ? void 0 : e.clickerUser) != null && y.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (E = e == null ? void 0 : e.clickerUser) != null && E.referrerId && this.setReferrerId(e.clickerUser.referrerId),
            (p = e == null ? void 0 : e.clickerUser) != null && p.level) {
                const O = (g = e == null ? void 0 : e.clickerUser) == null ? void 0 : g.level;
                if (this.level && this.level < O) {
                    const {$event: C} = $();
                    C("level-up:success")
                }
                setTimeout(()=>{
                    this.setLevel(O)
                }
                , 50)
            }
            (T = e == null ? void 0 : e.clickerUser) != null && T.exchangeRefLinks && this.setExchangeRefLinks(e.clickerUser.exchangeRefLinks),
            (w = e == null ? void 0 : e.clickerUser) != null && w.skin && this.setSkinState(e.clickerUser.skin),
            (L = e == null ? void 0 : e.clickerUser) != null && L.achievements && (this.setAchievements(e.clickerUser.achievements),
            this.checkAchievements())
        },
        startTimers() {
            Dn().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(nt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(nt.SYNC_TAPS, String(n + e)),
            localStorage.setItem(nt.SYNC_TIMESTAMP_TAPS, String(Ee().getNowTimestamp()))
        },
        storageSyncTapsGet() {
            const e = localStorage.getItem(nt.SYNC_TAPS);
            return e ? parseInt(e) ?? 0 : 0
        },
        storageSyncTapsReset() {
            localStorage.removeItem(nt.SYNC_TAPS)
        },
        storageSyncTapsSet(e) {
            localStorage.setItem(nt.SYNC_TAPS, String(e))
        },
        storageSyncTapsSubtract(e) {
            const t = localStorage.getItem(nt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(nt.SYNC_TAPS, String(Math.max(0, n - e)))
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
                    un.error({
                        title: $().$i18n.t("messages.request_error"),
                        message: $().$i18n.t("messages.no_sync")
                    }),
                    Kt().rejectNotificationLevelUp()
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
            return Ee().numberFormat(this.balanceCoins, !1)
        }
    }
})
  , Ee = pn("helper", {
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
            const {locale: e} = va();
            return e.value === "tl" ? "tl-ph" : e.value
        },
        getNowTimestamp() {
            return Math.floor(new Date().getTime() / 1e3) + wt().dtServer
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
            return i && `${$().$config.public.cdnUrl}/${i.fileUniqueId}.jpg`
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
              , c = new Intl.NumberFormat($().$i18n.locale.value,{
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
            un.error({
                message: `${$().$i18n.t("messages.oops")}`
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
                $().$config.public.appEnv !== "production" ? console.info(`Sending ${e} event to GA4`, n) : gtag("event", e, n)
            } catch (r) {
                $().$config.public.appEnv !== "production" && console.error(`Error sending ${e} event to GA4:`, r)
            }
        },
        isDevelopment() {
            return $().$config.public.appEnv !== "production"
        },
        shrinkString(e, t=8) {
            return e.length >= t * 2 ? `${e.slice(0, t)}...${e.slice(-t)}` : e
        },
        getLocalizedString(e, t="") {
            return e[$().$i18n.locale.value] ? e[$().$i18n.locale.value] : e.en ? e.en : t
        }
    }
})
  , KL = {
    path: "/",
    watch: !0,
    decode: e=>vo(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function YL(e, t) {
    var l;
    const n = {
        ...KL,
        ...t
    }
      , r = th(n) || {};
    let i;
    n.maxAge !== void 0 ? i = n.maxAge * 1e3 : n.expires && (i = n.expires.getTime() - Date.now());
    const o = i !== void 0 && i <= 0
      , s = Cn(o ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = i && !o ? WL(s, i) : ce(s);
    {
        const u = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , c = ()=>{
            n.readonly || kE(a.value, r[e]) || (GL(e, a.value, n),
            r[e] = Cn(a.value),
            u == null || u.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var _;
            const b = m.refresh ? (_ = th(n)) == null ? void 0 : _[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = b,
            zt(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        No() && ea(()=>{
            d = !0,
            c(),
            u == null || u.close()
        }
        ),
        u && (u.onmessage = ({data: m})=>f(m)),
        n.watch ? qe(a, ()=>{
            d || c()
        }
        , {
            deep: n.watch !== "shallow"
        }) : c()
    }
    return a
}
function th(e={}) {
    return yE(document.cookie, e)
}
function qL(e, t, n={}) {
    return t == null ? Uf(e, t, {
        ...n,
        maxAge: -1
    }) : Uf(e, t, n)
}
function GL(e, t, n={}) {
    document.cookie = qL(e, t, n)
}
const nh = 2147483647;
function WL(e, t) {
    let n, r = 0;
    return No() && ea(()=>{
        clearTimeout(n)
    }
    ),
    kp((i,o)=>{
        function s() {
            clearTimeout(n);
            const a = t - r
              , l = a < nh ? a : nh;
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
const Xr = ["de", "en", "es", "fr", "hi", "id", "pt", "ru", "th", "tl", "tr", "uz", "vi"]
  , dc = {
    de: [{
        key: "../locales/de.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/de.CALwPvog.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    en: [{
        key: "../locales/en.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/en.Byq2t9rN.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/es.BYvsjyw2.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    fr: [{
        key: "../locales/fr.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/fr.BaQ4VcSU.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/hi.tvSvYraL.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/id.C7BjNMLD.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/pt.Ie9v8HG5.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/ru.sMwoKLFh.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/th.CWftc0HL.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/tl.BWRCEp6P.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/tr.CNAcwCdO.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/uz.DKhmpYde.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/vi.DUWWj_5Y.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , JL = [()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
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
  , ba = {
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
  , wu = [{
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
  , zL = !1
  , QL = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , XL = ""
  , ZL = "nuxtI18n"
  , $L = typeof window < "u";
function eO(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        ie(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function tO(e) {
    return e != null && "global"in e && "mode"in e
}
function nO(e) {
    return e != null && !("__composer"in e) && "locale"in e && ut(e.locale)
}
function By(e) {
    return e != null && "__composer"in e
}
function Or(e) {
    return tO(e) ? e.global : e
}
function Ai(e) {
    const t = Or(e);
    return nO(t) ? t : By(t) ? t.__composer : t
}
function _a(e) {
    return J(Or(e).locale)
}
function rO(e) {
    return J(Or(e).locales)
}
function iO(e) {
    return J(Or(e).localeCodes)
}
function Uy(e, t) {
    const n = Or(e);
    ut(n.locale) ? n.locale.value = t : n.locale = t
}
function xy(e) {
    return ie(e) ? e : Mw(e) ? e.toString() : "(null)"
}
function rh(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: i, defaultLocaleRouteNameSuffix: o}) {
    let s = xy(e) + (r === "no_prefix" ? "" : i + t);
    return t === n && r === "prefix_and_default" && (s += i + o),
    s
}
function ih(e, t) {
    return et(e) ? e(t) : e
}
function oO(e, t) {
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
const sO = oO;
function aO(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const lO = aO;
function cO(e, t, {matcher: n=sO, comparer: r=lO}={}) {
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
function hc(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const $i = new Map;
async function uO(e, t) {
    const n = {
        messages: {}
    };
    for (const r of e) {
        const {default: i} = await r()
          , o = typeof i == "function" ? await t.runWithContext(async()=>await i()) : i;
        Gr(o, n)
    }
    return n
}
function Hy(e, t) {
    let n = [];
    if (dt(e))
        n = e;
    else if (Ue(e)) {
        const r = [...t, "default"];
        for (const i of r)
            e[i] && (n = [...n, ...e[i].filter(Boolean)])
    } else
        ie(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function fO(e, t, n) {
    const {defaultLocale: r, initialLocale: i, localeCodes: o, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const u = Hy(s, [r, i]);
        await Promise.all(u.map(c=>oh(c, t, e)))
    }
    const l = a ? [...new Set().add(r).add(i)] : o;
    return await Promise.all(l.map(u=>oh(u, t, e))),
    e
}
async function dO(e, {key: t, load: n}) {
    let r = null;
    try {
        const i = await n().then(o=>o.default || o);
        et(i) ? r = await i(e) : (r = i,
        r != null && $i && $i.set(t, r))
    } catch (i) {
        console.error("Failed locale loading: " + i.message)
    }
    return r
}
async function pc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const i = {};
    for (const o of r) {
        let s = null;
        $i && $i.has(o.key) && o.cache ? s = $i.get(o.key) : s = await dO(e, o),
        s != null && Gr(s, i)
    }
    n(e, i)
}
async function oh(e, t, n) {
    await pc(e, t, (i,o)=>{
        const s = n[i] || {};
        Gr(o, s),
        n[i] = s
    }
    )
}
function hO(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function pO(e) {
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
function mO({router: e}, t, n, r) {
    var u, c;
    if (n !== "prefix")
        return e.resolve(t);
    const [i,o] = hO(t.path, 1)
      , s = `${i}${r}${o === "" ? o : `/${o}`}`
      , a = (c = (u = e.options) == null ? void 0 : u.routes) == null ? void 0 : c.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = pt({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const yO = new Set(["prefix_and_default", "prefix_except_default"]);
function gO(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && yO.has(r)) && r !== "no_prefix"
}
const vO = gO;
function Li(e) {
    const {routesNameSeparator: t} = vt
      , n = J(e);
    return n == null || !n.name ? void 0 : xy(n.name).split(t)[0]
}
function Ea(e, t, n) {
    var i;
    if (typeof t == "string" && xn(t, {
        acceptRelative: !0
    }))
        return t;
    const r = Ta(e, t, n);
    return r == null ? "" : ((i = r.redirectedFrom) == null ? void 0 : i.fullPath) || r.fullPath
}
function Au(e, t, n) {
    return Ta(e, t, n) ?? void 0
}
function bO(e, t, n) {
    return Ta(e, t, n) ?? void 0
}
function Ta(e, t, n) {
    const {router: r, i18n: i} = e
      , o = n || _a(i)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: u, trailingSlash: c} = vt
      , f = DO();
    let d;
    if (ie(t))
        if (t[0] === "/") {
            const {pathname: _, search: S, hash: y} = Fl(t)
              , E = ou(S);
            d = {
                path: _,
                query: E,
                hash: y
            }
        } else
            d = {
                name: t
            };
    else
        d = t;
    let m = pt({}, d);
    if ((_=>"path"in _ && !!_.path && !("name"in _))(m)) {
        const _ = mO(e, m, u, o)
          , S = Li(_);
        ie(S) ? (m = {
            name: rh(S, o, {
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
        m.path = c ? go(m.path, !0) : Bo(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = Li(r.currentRoute.value)),
        m.name = rh(m.name, o, {
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
const _O = e=>e;
function EO(e) {
    var n;
    const t = e.meta || {};
    return ((n = J(t)) == null ? void 0 : n[ZL]) || {}
}
function Oi(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , i = Li(r);
    if (!i)
        return "";
    const o = NO()
      , s = pO(r)
      , a = EO(r)[t]
      , l = {
        ...s,
        name: i,
        params: {
            ...s.params,
            ...a
        }
    }
      , u = Ea(e, l, t);
    return o(u, t)
}
function jy(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: i} = vt
      , o = Ai(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (J(o.locales) == null || J(o.baseUrl) == null)
        return s;
    const a = _a(e.i18n)
      , l = rO(e.i18n)
      , u = eO(l).find(d=>d.code === a) || {
        code: a
    }
      , c = u.iso
      , f = u.dir || i;
    return t && (s.htmlAttrs.dir = f),
    n && a && J(o.locales) && (c && (s.htmlAttrs.lang = c),
    s.link.push(...TO(e, J(l), r), ...kO(e, r, n)),
    s.meta.push(...SO(e, r, n), ...wO(u, c, r), ...AO(J(l), c, r))),
    s
}
function Lu() {
    const e = Ai($().$i18n);
    return J(e.baseUrl)
}
function TO(e, t, n) {
    const r = Lu()
      , {defaultLocale: i, strategy: o} = vt
      , s = [];
    if (o === QL.NO_PREFIX)
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
        const c = Oi(e, u.code);
        c && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: mc(c, r),
            hreflang: l
        })
    }
    if (i) {
        const l = Oi(e, i);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: mc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function Ky(e, t, n) {
    const r = e.router.currentRoute.value
      , i = Au(e, {
        ...r,
        name: Li(r)
    });
    if (!i)
        return "";
    let o = mc(i.path, t);
    const s = Ue(n) && n.canonicalQueries || []
      , a = i.query
      , l = new URLSearchParams;
    for (const c of s)
        if (c in a) {
            const f = a[c];
            dt(f) ? f.forEach(d=>l.append(c, d || "")) : l.append(c, f || "")
        }
    const u = l.toString();
    return u && (o = `${o}?${u}`),
    o
}
function kO(e, t, n) {
    const r = Lu()
      , i = Ky(e, r, n);
    return i ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: i
    }] : []
}
function SO(e, t, n) {
    const r = Lu()
      , i = Ky(e, r, n);
    return i ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: i
    }] : []
}
function wO(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: Yy(t)
    }]
}
function AO(e, t, n) {
    return e.filter(i=>i.iso && i.iso !== t).map(i=>({
        [n]: `i18n-og-alt-${i.iso}`,
        property: "og:locale:alternate",
        content: Yy(i.iso)
    }))
}
function Yy(e) {
    return (e || "").replace(/-/g, "_")
}
function mc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function LO(e, t) {
    return qo(e, "setLocale", t)
}
function OO(e, t) {
    return qo(e, "setLocaleCookie", t)
}
function CO(e, t, n) {
    return qo(e, "mergeLocaleMessage", t, n)
}
function RO(e, t, n, r, i) {
    return qo(e, "onBeforeLanguageSwitch", t, n, r, i)
}
function IO(e, t, n) {
    return qo(e, "onLanguageSwitched", t, n)
}
function Ou(e) {
    return {
        i18n: e ?? $().$i18n,
        router: Xt(),
        runtimeConfig: Qn()
    }
}
async function sh(e, t, n=!1) {
    const r = vt.differentDomains
      , i = (vt.detectBrowserLanguage && vt.detectBrowserLanguage.useCookie) ?? ba.detectBrowserLanguage.useCookie
      , o = $();
    let s = !1;
    const a = _a(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await RO(t, a, e, n, o)
      , u = iO(t);
    if (l && u && u.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const c = FO(t, "fallbackLocale");
    {
        const f = (d,m)=>CO(t, d, m);
        if (c) {
            const d = Hy(c, [e]);
            await Promise.all(d.map(m=>pc(m, dc, f)))
        }
        await pc(e, dc, f)
    }
    return i && OO(t, e),
    Uy(t, e),
    await IO(t, a, e),
    s = !0,
    [s, a]
}
function ah(e, t, n, r, i) {
    const {strategy: o, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = vt
      , u = et(r) ? r() : r
      , {ssg: c, callType: f, firstAccess: d, localeCookie: m} = i
      , {locale: b, stat: _, reason: S, from: y} = l ? Wy(e, n, i, u) : Gy;
    if (S === "detect_ignore_on_ssg")
        return u;
    if ((y === "navigator_or_header" || y === "cookie" || y === "fallback") && b)
        return b;
    let E = b;
    return E || (a ? E = jO(wu) : o !== "no_prefix" ? E = t(e) : l || (E = u)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function lh({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const i = $()
      , o = Ou()
      , {strategy: s, differentDomains: a} = vt;
    let l = "";
    const {fullPath: u} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const c = i.$switchLocalePath(t) || i.$localePath(u, t);
        ie(c) && c && !Vl(c, u) && !c.startsWith("//") && (l = e.from && e.from.fullPath === c ? "" : c)
    }
    if ((a || !0) && n(e.to) !== t) {
        const c = Oi(o, t, e.to);
        ie(c) && c && !Vl(c, u) && !c.startsWith("//") && (l = c)
    }
    return l
}
function PO(e) {
    return Ue(e) && "path"in e && "statusCode"in e
}
function ch(e, t) {
    return Ho(e, {
        redirectCode: t
    })
}
async function uh(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = ba.rootRedirect
      , {i18n: i, locale: o, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return ie(r) ? a = "/" + r : PO(r) && (a = "/" + r.path,
        t = r.statusCode),
        ch(a, t);
    if (a)
        return ch(a, t)
}
function MO(e, t) {
    ri(e, "$i18n", Or(t)),
    ri(e, "$getRouteBaseName", Li),
    ri(e, "$localePath", on(Ea)),
    ri(e, "$localeRoute", on(Au)),
    ri(e, "$switchLocalePath", on(Oi)),
    ri(e, "$localeHead", on(jy))
}
function DO() {
    return e=>vO(e) && !vt.differentDomains
}
function NO() {
    return (e,t)=>_O(e)
}
function VO() {
    return ()=>{
        var o;
        const e = $()
          , t = Qn()
          , n = vt.baseUrl;
        if (et(n))
            return n(e);
        const r = vt.defaultLocale;
        et(r) && r();
        const i = (o = t == null ? void 0 : t.public) == null ? void 0 : o.i18n;
        return i != null && i.baseUrl ? i.baseUrl : n
    }
}
function qo(e, t, ...n) {
    const r = Or(e)
      , [i,o] = [r, r[t]];
    return Reflect.apply(o, i, [...n])
}
function FO(e, t) {
    const n = Or(e);
    return J(n[t])
}
function ri(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function on(e, t=Ou()) {
    return (...n)=>e(t, ...n)
}
function qy() {
    let e;
    return navigator.languages && (e = cO(wu, navigator.languages)),
    e
}
function BO() {
    const e = vt.detectBrowserLanguage
      , t = e && e.cookieKey || ba.detectBrowserLanguage.cookieKey
      , n = new Date
      , r = {
        expires: new Date(n.setDate(n.getDate() + 365)),
        path: "/",
        sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
        secure: e && e.cookieCrossOrigin || e && e.cookieSecure
    };
    return e && e.cookieDomain && (r.domain = e.cookieDomain),
    YL(t, r)
}
function UO(e) {
    const t = vt.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && Xr.includes(n))
        return n
}
function xO(e, t) {
    const {useCookie: n} = vt.detectBrowserLanguage || ba.detectBrowserLanguage;
    n && (e.value = t)
}
const Gy = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function Wy(e, t, n, r="") {
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
        } else if (u === "no prefix" && !c && m.match(hc(Xr)))
            return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_no_prefix"
            }
    }
    let b = "unknown", _, S;
    f && (S = _ = l.value,
    b = "cookie"),
    S || (S = qy(),
    b = "navigator_or_header");
    const y = S || d;
    !S && d && (b = "fallback");
    const E = r || t;
    if (y && (!f || c || !_)) {
        if (i === "no_prefix")
            return {
                locale: y,
                stat: !0,
                from: b
            };
        if (s === "setup" && y !== E)
            return {
                locale: y,
                stat: !0,
                from: b
            };
        if (c) {
            const p = m === "/"
              , g = u === "all"
              , T = u === "no prefix" && !m.match(hc(Xr));
            if (p || g || T)
                return {
                    locale: y,
                    stat: !0,
                    from: b
                }
        }
    }
    return o === "ssg_setup" && y ? {
        locale: y,
        stat: !0,
        from: b
    } : (b === "navigator_or_header" || b === "cookie") && y ? {
        locale: y,
        stat: !0,
        from: b
    } : {
        locale: "",
        stat: !1,
        reason: "not_found_match"
    }
}
function HO() {
    let e;
    return e = window.location.host,
    e
}
function jO(e) {
    let t = HO() || "";
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
function Jy() {
    return on(Ea)
}
function eD() {
    return on(Oi)
}
const fh = pn("promo", {
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
            return await Ke.post("/clicker/get-promos", {}).then(e=>{
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
            return await Ke.post("/clicker/apply-promo", {
                body: {
                    promoCode: e
                }
            }).then(t=>(wt().setUserResponseData(t),
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
  , eo = pn({
    id: "minigame-frame",
    state: ()=>({
        dailyKeysMiniGames: null,
        dailyKeysMiniGame: null,
        cooldowns: {},
        matchMiniGameInterval: null,
        timestamp_match_minigame: 0,
        cipher: null,
        show: !1,
        open: !1,
        openTutor: !0,
        showTutor: !0,
        sceneLoaded: !1,
        isPlaying: !1,
        url: "/games/DefoldGames/?v",
        wasm_error: "",
        webgl_error: "",
        score: 0,
        finishReason: null,
        defoldLoaded: !1,
        lastStart: null
    }),
    actions: {
        cooldownAddMinigame(e, t, n) {
            this.cooldowns[e] = {
                totalCooldownSeconds: n,
                cooldownSeconds: t,
                intervalId: void 0,
                timestamp: Ee().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            var r;
            const t = this.cooldowns[e]
              , n = (r = this.dailyKeysMiniGames) == null ? void 0 : r[e];
            t && t.intervalId === void 0 && n && (t.intervalId = Ct(()=>{
                if (t.cooldownSeconds > 0) {
                    const i = Ee().getNowTimestampWithMS()
                      , o = i - ((t == null ? void 0 : t.timestamp) ?? i);
                    o > 100 && (t.cooldownSeconds = parseFloat(t.cooldownSeconds.toFixed(2)) - o / 1e3,
                    n.remainSecondsToNextAttempt = parseFloat(n.remainSecondsToNextAttempt.toFixed(2)) - o / 1e3),
                    t.timestamp = i,
                    t.cooldownSeconds -= .05,
                    n.remainSecondsToNextAttempt -= .05,
                    t.cooldownSeconds <= 0 && (t.cooldownSeconds = 0,
                    this.cooldownStopTimer(e))
                }
            }
            , 50))
        },
        cooldownAddDailyGameInterval(e) {
            this.cooldowns[e.id + "DailyInterval"] = {
                totalCooldownSeconds: e.remainSeconds,
                cooldownSeconds: e.remainSeconds,
                intervalId: void 0,
                timestamp: Ee().getNowTimestampWithMS()
            }
        },
        cooldownStartDailyGameTimer(e) {
            var i;
            const t = e + "DailyInterval"
              , n = (i = this.dailyKeysMiniGames) == null ? void 0 : i[e]
              , r = this.cooldowns[t];
            r && r.intervalId === void 0 && n && (r.intervalId = Ct(()=>{
                var o;
                if (r.cooldownSeconds > 0) {
                    const s = Ee().getNowTimestampWithMS();
                    if (s - ((r == null ? void 0 : r.timestamp) ?? s),
                    r.timestamp = s,
                    r.cooldownSeconds -= .05,
                    n.remainSeconds -= .05,
                    n.remainSeconds <= 0) {
                        n.remainSeconds = 0,
                        this.cooldownStopTimer(t);
                        const a = (o = this.dailyKeysMiniGame) == null ? void 0 : o.id
                          , l = n.id === "Tiles";
                        e === a && this.show && !l && (this.hideGamePage(),
                        un.promise({}).reject({
                            title: $().$i18n.t("minigame.lose_title"),
                            duration: 4e3
                        }),
                        Ee().trackEvent(`minigame_${this.getMiniGameTrackId(n.id)}_loose_period`),
                        Kt().useHapticFeedback("heavy"),
                        this.dailyKeysMiniGame = null),
                        setTimeout(async()=>{
                            var u;
                            if (await Rt().postConfig(),
                            this.show && l) {
                                const c = (u = this.dailyKeysMiniGames) == null ? void 0 : u.Tiles;
                                if (c) {
                                    this.setDailyKeysMiniGame(c);
                                    const d = document.getElementById(this.$id).contentWindow
                                      , m = Math.floor(new Date(c == null ? void 0 : c.startDate).getTime() / 1e3);
                                    d.postMessage(JSON.stringify({
                                        method: "SetCipherNumber",
                                        number: m
                                    }))
                                } else
                                    this.hideGamePage(),
                                    un.promise({}).reject({
                                        title: $().$i18n.t("minigame.lose_title"),
                                        duration: 4e3
                                    }),
                                    Ee().trackEvent(`minigame_${this.getMiniGameTrackId(n.id)}_loose_period`),
                                    Kt().useHapticFeedback("heavy"),
                                    this.dailyKeysMiniGame = null
                            } else
                                this.dailyKeysMiniGame = null
                        }
                        , 1e3)
                    }
                    r.cooldownSeconds <= 0 && (r.cooldownSeconds = 0,
                    this.cooldownStopTimer(t))
                }
            }
            , 50))
        },
        cooldownStopTimer(e) {
            var n;
            const t = this.cooldowns[e];
            t && t.intervalId !== void 0 && (t.intervalId && clearInterval(t.intervalId),
            delete this.cooldowns[e],
            (n = this.dailyKeysMiniGames) != null && n[e] && (this.dailyKeysMiniGames[e].remainSecondsToNextAttempt = 0))
        },
        loadDefoldBundle() {
            this.defoldLoaded = !0
        },
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
            this.showTutor = !0,
            this.sceneLoaded = !1,
            this.score = 0
        },
        handleBackButton() {
            $().$event("minigame:back-button")
        },
        setScore(e) {
            this.score = e,
            this.score >= this.dailyKeysMiniGame.remainPoints && (this.finishReason = $().$i18n.t("minigame.finish_limit"),
            this.finishGame())
        },
        setFinishReason(e) {
            this.finishReason = e
        },
        async postStartDailyKeysMiniGame() {
            var e;
            return await Ke.post("/clicker/start-keys-minigame", {
                body: {
                    miniGameId: (e = this.dailyKeysMiniGame) == null ? void 0 : e.id
                }
            }).then(t=>{
                if (wt().setUserResponseData(t),
                t != null && t.clickerUser && this.dailyKeysMiniGame) {
                    const n = t.clickerUser.miniGame[this.dailyKeysMiniGame.id].lastStartAt;
                    this.lastStart = n
                }
                return t != null && t.dailyKeysMiniGames ? (t.dailyKeysMiniGames.remainSecondsToGuess += .1,
                this.setSingleDailyKeysMiniGames(t.dailyKeysMiniGames),
                this.setDailyKeysMiniGame(t.dailyKeysMiniGames)) : this.dailyKeysMiniGame = null,
                t
            }
            )
        },
        async postClaimDailyKeysMiniGame() {
            var e;
            return await Ke.post("/clicker/claim-daily-keys-minigame", {
                body: {
                    cipher: this.cipher,
                    miniGameId: (e = this.dailyKeysMiniGame) == null ? void 0 : e.id
                }
            }).then(t=>(wt().setUserResponseData(t),
            t != null && t.dailyKeysMiniGames ? (this.setSingleDailyKeysMiniGames(t.dailyKeysMiniGames),
            this.setDailyKeysMiniGame(t.dailyKeysMiniGames)) : this.dailyKeysMiniGame = null,
            t))
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
                    const n = Ee().getNowTimestamp();
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
        startReplayMiniGameInterval(e) {
            this.cooldowns[e.id] || this.cooldownAddMinigame(e.id, e.remainSecondsToNextAttempt, e.totalSecondsToNextAttempt),
            this.cooldownStartTimer(e.id)
        },
        startDailyMiniGameInterval(e) {
            this.resetDailyMiniGameInterval(e.id),
            this.cooldownAddDailyGameInterval(e),
            this.cooldownStartDailyGameTimer(e.id)
        },
        resetDailyMiniGameInterval(e) {
            this.cooldowns[e + "DailyInterval"] && this.cooldownStopTimer(e + "DailyInterval")
        },
        resetDailyMiniGamesIntervals() {
            this.getAllMiniGames.forEach(e=>{
                this.cooldowns[e.id + "DailyInterval"] && this.cooldownStopTimer(e.id + "DailyInterval")
            }
            )
        },
        resetReplayMiniGameIntervals() {
            this.getAllMiniGames.forEach(e=>{
                this.cooldowns[e.id] && this.cooldownStopTimer(e.id)
            }
            )
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
            this.resetDailyMiniGamesIntervals(),
            this.resetReplayMiniGameIntervals(),
            this.resetMatchMiniGameInterval()
        },
        setDailyKeysMiniGame(e) {
            e.remainSeconds && e.remainSeconds > 0 && this.startDailyMiniGameInterval(e),
            e.remainSecondsToNextAttempt && e.remainSecondsToNextAttempt > 0 && this.startReplayMiniGameInterval(e);
            try {
                this.dailyKeysMiniGame = e
            } catch (t) {
                console.log("Daily MiniGame error", t),
                this.dailyKeysMiniGame = null
            }
        },
        setDailyKeysMiniGames(e) {
            this.dailyKeysMiniGames = e,
            this.getAllMiniGames.forEach(n=>{
                n.remainSecondsToNextAttempt && n.remainSecondsToNextAttempt > 0 && this.startReplayMiniGameInterval(n),
                this.startDailyMiniGameInterval(n)
            }
            )
        },
        setSingleDailyKeysMiniGames(e) {
            let t = e.id;
            this.dailyKeysMiniGames[t] = e
        },
        loadGame() {
            if (this.dailyKeysMiniGame !== null) {
                const e = this.defoldLoaded ? 0 : 10;
                setTimeout(()=>{
                    var i;
                    const t = (i = this.dailyKeysMiniGame) == null ? void 0 : i.id;
                    document.getElementById(this.$id).contentWindow.postMessage(JSON.stringify({
                        method: "LoadGame",
                        game_id: t
                    }))
                }
                , e)
            }
        },
        finishGame() {
            this.dailyKeysMiniGame != null && document.getElementById(this.$id).contentWindow.postMessage(JSON.stringify({
                method: "FinishGame"
            }))
        },
        startGame() {
            var e, t;
            if (this.dailyKeysMiniGame != null) {
                const r = document.getElementById(this.$id).contentWindow
                  , i = Math.floor(new Date((e = this.dailyKeysMiniGame) == null ? void 0 : e.startDate).getTime() / 1e3)
                  , o = Math.floor(new Date(this.lastStart).getTime() / 1e3)
                  , s = (t = this.dailyKeysMiniGame) == null ? void 0 : t.levelConfig;
                r.postMessage(JSON.stringify({
                    method: "StartGame",
                    level: s,
                    number: i,
                    score_coef: this.getScoreCoef,
                    start_timestamp: o
                })),
                this.startMatchMiniGameInterval(),
                this.startReplayMiniGameInterval(this.dailyKeysMiniGame),
                this.isPlaying = !0,
                this.showTutor = !1,
                this.finishReason = $().$i18n.t("minigame.finish_out_of_moves")
            }
        },
        getMiniGameTrackId(e=null) {
            var i;
            const t = (i = this.dailyKeysMiniGame) != null && i.id ? this.dailyKeysMiniGame.id : "unknown"
              , n = e || t
              , r = {
                Candles: "puzzle",
                Bolts: "screws",
                Tiles: "hex"
            };
            return r[n] ? r[n] : n
        }
    },
    getters: {
        getScoreCoef() {
            return Math.round(Math.max(wt().earnPassivePerHour, 6e3) / 6e3)
        },
        getCoinsScore() {
            return this.getScoreCoef * this.score
        },
        getDailyKeysMiniGameClaimed() {
            var t;
            const e = (t = this.dailyKeysMiniGames) == null ? void 0 : t.Candles;
            return !!e && (e.isClaimed ?? !1)
        },
        getFirstDailyMinigame() {
            return this.getAllMiniGames.length > 0 ? this.getAllMiniGames[0] : null
        },
        getAllMiniGames() {
            if (this.dailyKeysMiniGames) {
                let e = [];
                return Object.keys(this.dailyKeysMiniGames).forEach(t=>{
                    e.push(this.dailyKeysMiniGames[t])
                }
                ),
                e
            } else
                return []
        }
    }
})
  , rl = ()=>({
    haptic: !0,
    coins_animation: !0
})
  , KO = pn("settings", {
    state: ()=>({
        settings: rl()
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
            localStorage.setItem(nt.SETTINGS, JSON.stringify(this.settings))
        },
        loadSettings() {
            const e = localStorage.getItem(nt.SETTINGS);
            e || this.updateSettings({}),
            this.settings = e ? {
                ...rl(),
                ...JSON.parse(e)
            } : rl(),
            this.saveToLocalStorage()
        },
        async postExchangeRefLink(e) {
            return await Ke.post("/clicker/exchangeRefLink-save", {
                body: {
                    exchangeRefLink: e
                }
            }).then(t=>t)
        }
    }
})
  , tD = xe({
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
          , {showBackButton: i, onBackButtonClicked: o, hideBackButton: s} = $O();
        return qe(()=>n.visible, a=>{
            a ? i() : s()
        }
        ),
        o(()=>r("click")),
        Ft(()=>n.visible && i()),
        Pi(()=>s()),
        (a,l)=>null
    }
})
  , {initData: YO, initDataUnsafe: qO, version: GO, platform: WO, isVersionAtLeast: JO, sendData: zO, close: QO} = Telegram.WebApp
  , zy = ce(!1)
  , XO = (...e)=>{
    Telegram.WebApp.ready(...e),
    zy.value = !0
}
  , Qy = e=>Telegram.WebApp.platform === e
  , Xy = Qy("unknown")
  , ZO = !Xy && Telegram.WebApp.initData === "";
function Zy() {
    return {
        initData: YO,
        initDataUnsafe: qO,
        version: GO,
        platform: WO,
        isVersionAtLeast: JO,
        onEvent: (...e)=>{
            Ft(()=>Telegram.WebApp.onEvent(...e)),
            Pi(()=>Telegram.WebApp.offEvent(...e))
        }
        ,
        sendData: zO,
        ready: XO,
        close: QO,
        isReady: pr(zy),
        isPlatform: Qy,
        isPlatformUnknown: Xy,
        canSendData: ZO
    }
}
const $y = ce(Telegram.WebApp.BackButton.isVisible);
function eg() {
    $y.value = Telegram.WebApp.BackButton.isVisible
}
function dh(...e) {
    Telegram.WebApp.BackButton.show(...e),
    eg()
}
function hh(...e) {
    Telegram.WebApp.BackButton.hide(...e),
    eg()
}
function $O() {
    const {onEvent: e} = Zy()
      , t = n=>e("backButtonClicked", n);
    return {
        isBackButtonVisible: fe({
            get() {
                return $y.value
            },
            set(n) {
                n ? dh() : hh()
            }
        }),
        onBackButtonClicked: t,
        showBackButton: dh,
        hideBackButton: hh
    }
}
Telegram.WebApp;
ce(Telegram.WebApp.isClosingConfirmationEnabled);
Telegram.WebApp.CloudStorage;
const {impactOccurred: eC, notificationOccurred: tC, selectionChanged: nC} = Telegram.WebApp.HapticFeedback;
function rC() {
    return {
        impactOccurred: eC,
        notificationOccurred: tC,
        selectionChanged: nC
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
Zy();
ce(Telegram.WebApp.SettingsButton.isVisible);
ce(Telegram.WebApp.colorScheme);
ce(Telegram.WebApp.themeParams);
ce(Telegram.WebApp.headerColor);
ce(Telegram.WebApp.backgroundColor);
ce(Telegram.WebApp.isExpanded);
ce(Telegram.WebApp.viewportHeight);
ce(Telegram.WebApp.viewportStableHeight);
const Kt = pn("ui", {
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
            const t = un.promise({
                title: $().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success($().$i18n.t("messages.copy_success")),
                Ee().trackEvent("copy_text_success_writeText")
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
                )(e) ? (t == null || t.success($().$i18n.t("messages.copy_success")),
                Ee().trackEvent("copy_text_success_exec")) : (t == null || t.reject($().$i18n.t("messages.copy_error")),
                Ee().trackEvent("copy_text_error"))
            }
        },
        goBackButton() {
            const {$event: e} = $()
              , t = Jy();
            this.bottom_sheet_open ? e("bs:close") : this.modalOpen ? e("modal:close") : fh().showPromo ? fh().showPromo = !1 : eo().show ? eo().handleBackButton() : Ho(t(Yo.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject($().$i18n.t("messages.oops")),
            this.notificationLevelUp = null,
            wt().setStop(!1))
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
            KO().settings.haptic && rC().impactOccurred(e)
        },
        isRu(e) {
            return this.language_code === "ru" || e === "ru"
        },
        isGeoRU() {
            return ["RU"].indexOf(Dn().location.country_code ?? "") > -1
        },
        isGeoMoonPay() {
            return ["US", "CA", "BR", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"].indexOf(Dn().location.country_code ?? "") > -1
        }
    }
})
  , il = pn("morse", {
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
            (e = this.dailyCipher) != null && e.cipher && (this.dailyCipher.cipher.startsWith(this.morse_decoded) ? Kt().useHapticFeedback("heavy") : this.resetMorse(),
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
            return e.split("/").map(t=>jL[t.trim()] || "").join("")
        },
        convertTapsToMorse() {
            return this.taps.map(e=>e.type).join("")
        },
        playSound(e) {
            const t = new Audio("/sound/dot.wav")
              , n = new Audio("/sound/dash.wav");
            let r;
            e === Fr.Dot ? r = t.cloneNode() : e === Fr.Dash && (r = n.cloneNode()),
            r == null || r.play()
        },
        async postClaimDailyCipher() {
            return await Ke.post("/clicker/claim-daily-cipher", {
                body: {
                    cipher: this.morse_decoded
                }
            }).then(e=>(Kt().useHapticFeedback("heavy"),
            wt().setUserResponseData(e),
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
                    type: Fr.SymbolSeparator,
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
            this.last_input = e === Fr.Dot ? "●" : "—"
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
                    const n = Ee().getNowTimestamp();
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
                const n = Date.now() - this.tapStartTime < this.tapThreshold ? Fr.Dot : Fr.Dash;
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
  , Rt = pn("config", {
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
        earnTasks: [],
        diffTimeServerLocal: 0
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
            return await Ke.get(`/clicker/config/${this.version}`, {}).then(e=>{
                e.config && this.setStaticConfig(e.config)
            }
            )
        },
        async postConfig() {
            return await Ke.post("/clicker/config", {}).then(e=>(e != null && e.dailyCipher ? il().setDailyCipher(e.dailyCipher) : (il().dailyCipher = null,
            il().resetMorse()),
            eo().resetMiniGame(),
            e != null && e.dailyKeysMiniGames ? eo().setDailyKeysMiniGames(e.dailyKeysMiniGames) : eo().dailyKeysMiniGames = null,
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
            wt().exchangeId && wt().setExchangeId(wt().exchangeId),
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
            this.serverTime = e,
            this.serverTime && this.setDiffTime()
        },
        setDiffTime() {
            const e = Date.parse(this.serverTime)
              , t = Date.now();
            this.diffTimeServerLocal = Math.floor((t - e) / 1e3)
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
            this.updateTimestamp = Ee().getNowTimestamp()
        },
        startUpdateInterval() {
            this.resetUpdateInterval(),
            this.remainSecondsForUpdate && (this.updateInterval = Ct(()=>{
                let e = 1;
                const t = Ee().getNowTimestamp();
                t - this.updateTimestamp > 1 && (e = t - this.updateTimestamp),
                this.remainSecondsForUpdate -= e,
                this.remainSecondsForUpdate <= 0 && (this.remainSecondsForUpdate = 0,
                this.resetUpdateInterval(),
                setTimeout(()=>{
                    wt().postSync().catch(()=>{}
                    )
                }
                , 1e3)),
                this.updateTimestamp = t
            }
            , 1e3))
        },
        async updateStaticConfig() {
            return await this.getConfig().then(async()=>{
                await So().postUpgradesForBuy().then(()=>{
                    const {$event: e} = $();
                    e("buy-upgrade:success")
                }
                ).catch(()=>{}
                ),
                await tg().postListTasks().catch(()=>{}
                )
            }
            )
        }
    },
    getters: {
        getGuidLink() {
            var n, r;
            const e = $().$i18n.locale;
            let t = (n = this.guidLink) == null ? void 0 : n.get(e);
            return t || (t = (r = this.guidLink) == null ? void 0 : r.get("en")),
            t ?? "#"
        }
    }
})
  , Ke = {
    get: Hi("GET"),
    post: Hi("POST"),
    patch: Hi("PATCH"),
    put: Hi("PUT"),
    delete: Hi("DELETE")
};
function Hi(e) {
    return async(t,n,r={})=>{
        const i = Dn()
          , o = i.token
          , s = Qn();
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
                un.error({
                    title: $().$i18n.t("messages.network_error_title"),
                    message: $().$i18n.t("messages.network_error_description"),
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
const tg = pn("earn", {
    state: ()=>({
        tasks: [],
        dailyRewardInterval: null,
        dailyRewardSeconds: 0,
        timestamp_daily_reward: 0
    }),
    actions: {
        async postListTasks() {
            return await Ke.post("/clicker/list-tasks", {}).then(e=>(e != null && e.tasks && this.setTasks(e.tasks),
            this.startDailyRewardInterval(),
            e)).catch(e=>{
                un.error({
                    title: $().$i18n.t("messages.request_error"),
                    message: $().$i18n.t("messages.no_tasks")
                })
            }
            )
        },
        async postCheckTask(e) {
            return await Ke.post("/clicker/check-task", {
                body: {
                    taskId: e
                }
            }).then(t=>{
                Kt().useHapticFeedback("heavy"),
                wt().setUserResponseData(t),
                setTimeout(()=>{
                    So().postUpgradesForBuy()
                }
                , 1e3);
                const n = t.task.rewardCoins ?? 0;
                return Ee().trackEvent(`earn_${Ee().camelToSnake(e)}`, {
                    value: n
                }),
                t
            }
            )
        },
        setTasks(e=[]) {
            var o, s;
            const t = $()
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
                a = a.filter(c=>c.availableOnCountry && c.availableOnCountry.length > 0 && Dn().location.country_code ? c.availableOnCountry.includes(Dn().location.country_code ?? "") : !0);
                const l = localStorage.getItem(nt.EARN_TASKS)
                  , u = e.map(c=>c.id === fc.STREAK_DAYS ? {
                    ...c,
                    remainSeconds: 0
                } : c);
                l ? this.hashcode(u) !== Number(l) && (Kt().taskNotification = !0) : Kt().taskNotification = !0,
                this.tasks = a,
                localStorage.setItem(nt.EARN_TASKS, JSON.stringify(this.hashcode(u))),
                this.dailyRewardSeconds = ((s = this.tasks.find(c=>c.id === fc.STREAK_DAYS)) == null ? void 0 : s.remainSeconds) ?? Math.round(Ee().secondsUntilMidnightUTC()),
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
                    const t = Ee().getNowTimestamp();
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
class Yi extends Error {
}
Yi.prototype.name = "InvalidTokenError";
function iC(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function oC(e) {
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
        return iC(t)
    } catch {
        return atob(t)
    }
}
function ph(e, t) {
    if (typeof e != "string")
        throw new Yi("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new Yi(`Invalid token specified: missing part #${n + 1}`);
    let i;
    try {
        i = oC(r)
    } catch (o) {
        throw new Yi(`Invalid token specified: invalid base64 for part #${n + 1} (${o.message})`)
    }
    try {
        return JSON.parse(i)
    } catch (o) {
        throw new Yi(`Invalid token specified: invalid json for part #${n + 1} (${o.message})`)
    }
}
const Dn = pn("auth", {
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
        token: localStorage.getItem(nt.AUTH_TOKEN) ?? null,
        location: {},
        has_geo: !1
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(nt.AUTH_TOKEN)
        },
        isExpiredToken(e) {
            if (e && ph(e)) {
                const t = ph(e).exp;
                return new Date().getTime() > t * 1e3
            }
            return !1
        },
        logout(e=!0) {
            this.authenticated = !1,
            this.token = null,
            localStorage.removeItem(nt.AUTH_TOKEN),
            localStorage.removeItem(nt.SYNC_AVAILABLE_TAPS),
            localStorage.removeItem(nt.SYNC_TIMESTAMP_TAPS),
            localStorage.removeItem(nt.SYNC_TAPS),
            localStorage.removeItem(nt.AIRDROP_TASKS),
            localStorage.removeItem(nt.EARN_TASKS),
            localStorage.removeItem(nt.SETTINGS),
            localStorage.removeItem(nt.PLAYGROUND),
            localStorage.removeItem("ton-connect-storage_bridge-connection"),
            localStorage.removeItem("ton-connect-ui_last-selected-wallet-info"),
            tg().tasks.forEach(t=>{
                localStorage.removeItem(t.id)
            }
            ),
            e && (Ho(Yo.GAME_INDEX),
            setTimeout(()=>{
                window.location.reload()
            }
            , 500))
        },
        async postGetMe() {
            return await Ke.post("/auth/account-info", {}).then(e=>{
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
            return await Ke.post("/auth/auth-by-telegram-webapp", {
                body: e
            }).then(t=>{
                if (t.authToken) {
                    const n = t.authToken;
                    localStorage.setItem(nt.AUTH_TOKEN, n),
                    this.setToken(n)
                }
                return t
            }
            )
        },
        async postWebappConflict(e) {
            return await Ke.post("/auth/telegram-webapp-conflict", {
                body: e
            }).then(t=>t)
        },
        async postAddReferral(e) {
            return await Ke.post("/clicker/add-referral", {
                body: {
                    authUserId: String(e)
                }
            }).then(t=>t)
        },
        async postAddPartnerReferrer(e) {
            return await Ke.post("/clicker/add-partner-referrer", {
                body: {
                    partnerReferrer: String(e)
                }
            }).then(t=>t)
        },
        async postAvatarGet() {
            return await Ke.post("/auth/get-avatar", {
                body: {}
            }).then(e=>e)
        },
        async postDeleteMe() {
            return await Ke.post("/clicker/delete-me", {
                body: {}
            }).then(e=>e)
        },
        async getLocationData() {
            return await Ke.get("/ip", {}).then(e=>{
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
  , sC = async(e,t)=>{
    var i, o;
    const n = $();
    Dn(n.$pinia);
    const r = wt(n.$pinia);
    e && !((o = (i = e.name) == null ? void 0 : i.toString()) != null && o.includes("index")) && !r.exchangeId && Ho(Yo.GAME_SETTINGS_EXCHANGE)
}
  , aC = async e=>{
    let t, n;
    const r = ([t,n] = Pn(()=>Km(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , lC = [nS, sC, aC]
  , to = {};
function cC(e, t, n) {
    const {pathname: r, search: i, hash: o} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const u = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let c = o.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        Nf(c, "")
    }
    const a = Nf(r, e)
      , l = !n || Vl(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : i) + o
}
const uC = Bt({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var _, S;
        let t, n, r = Qn().app.baseURL;
        Gt.hashMode && !r.includes("#") && (r += "#");
        const i = ((_ = Gt.history) == null ? void 0 : _.call(Gt, r)) ?? (Gt.hashMode ? Sk(r) : $m(r))
          , o = ((S = Gt.routes) == null ? void 0 : S.call(Gt, yd)) ?? yd;
        let s;
        const a = cC(r, window.location, e.payload.path)
          , l = Jk({
            ...Gt,
            scrollBehavior: (y,E,p)=>{
                if (E === mn) {
                    s = p;
                    return
                }
                if (Gt.scrollBehavior) {
                    if (l.options.scrollBehavior = Gt.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const g = l.beforeEach(()=>{
                            g(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return Gt.scrollBehavior(y, mn, s || p)
                }
            }
            ,
            history: i,
            routes: o
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const u = En(l.currentRoute.value);
        l.afterEach((y,E)=>{
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
        l.afterEach((y,E)=>{
            var p, g, T, w;
            ((g = (p = y.matched[0]) == null ? void 0 : p.components) == null ? void 0 : g.default) === ((w = (T = E.matched[0]) == null ? void 0 : T.components) == null ? void 0 : w.default) && f()
        }
        );
        const d = {};
        for (const y in c.value)
            Object.defineProperty(d, y, {
                get: ()=>c.value[y]
            });
        e._route = Ii(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = fa();
        try {
            [t,n] = Pn(()=>l.isReady()),
            await t,
            n()
        } catch (y) {
            [t,n] = Pn(()=>e.runWithContext(()=>li(y))),
            await t,
            n()
        }
        const b = e.payload.state._layout;
        return l.beforeEach(async(y,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            y.meta = Lt(y.meta),
            e.isHydrating && b && !Wr(y.meta.layout) && (y.meta.layout = b),
            e._processingMiddleware = !0;
            {
                const g = new Set([...lC, ...e._middleware.global]);
                for (const T of y.matched) {
                    const w = T.meta.middleware;
                    if (w)
                        for (const L of pu(w))
                            g.add(L)
                }
                for (const T of g) {
                    const w = typeof T == "string" ? e._middleware.named[T] || await ((p = to[T]) == null ? void 0 : p.call(to).then(O=>O.default || O)) : T;
                    if (!w)
                        throw new Error(`Unknown route middleware: '${T}'.`);
                    const L = await e.runWithContext(()=>w(y, E));
                    if (!e.payload.serverRendered && e.isHydrating && (L === !1 || L instanceof Error)) {
                        const O = L || jl({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>li(O)),
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
        l.afterEach(async(y,E,p)=>{
            delete e._processingMiddleware,
            !e.isHydrating && m.value && await e.runWithContext(DE),
            p && await e.callHook("page:loading:end"),
            y.matched.length === 0 && await e.runWithContext(()=>li(jl({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${y.fullPath}`,
                data: {
                    path: y.fullPath
                }
            })))
        }
        ),
        e.hooks.hookOnce("app:created", async()=>{
            try {
                const y = l.resolve(a);
                "name"in y && (y.name = void 0),
                await l.replace({
                    ...y,
                    force: !0
                }),
                l.options.scrollBehavior = Gt.scrollBehavior
            } catch (y) {
                await e.runWithContext(()=>li(y))
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
  , yc = globalThis.requestIdleCallback || (e=>{
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
  , fC = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , Cu = e=>{
    const t = $();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        yc(e)
    }
    ) : yc(e)
}
  , dC = Bt({
    name: "nuxt:payload",
    setup(e) {
        Xt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await Xf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        Cu(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                Uo(n).protocol || await Xf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(ha, 1e3)
        }
        )
    }
})
  , hC = Bt(e=>{
    let t;
    async function n() {
        const r = await ha();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const i = await $fetch(su("builds/latest.json") + `?${Date.now()}`);
        i.id !== r.id && e.hooks.callHook("app:manifest:update", i)
    }
    Cu(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function ng(e, t=Xt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const i = t._preloadPromises = t._preloadPromises || [];
    if (i.length > 4)
        return Promise.all(i).then(()=>ng(e, t));
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
function pC(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = vo(sessionStorage.getItem("nuxt:reload") || "{}")
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
                    state: $().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const mC = (...e)=>e.find(t=>t !== void 0);
function rg(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, i) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return mh(r, e.trailingSlash);
        const o = "path"in r && r.path !== void 0 ? r.path : i(r).path
          , s = {
            ...r,
            path: mh(o, e.trailingSlash)
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
            const o = Xt()
              , s = Qn()
              , a = fe(()=>{
                const b = r.to || r.href || "";
                return n(b, o.resolve)
            }
            )
              , l = fe(()=>typeof a.value == "string" && xn(a.value, {
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
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !gC()) {
                const _ = $();
                let S, y = null;
                Ft(()=>{
                    const E = yC();
                    Cu(()=>{
                        S = yc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (y = E.observe(d.value, async()=>{
                                y == null || y(),
                                y = null;
                                const g = typeof a.value == "string" ? a.value : o.resolve(a.value).fullPath;
                                await Promise.all([_.hooks.callHook("link:prefetch", g).catch(()=>{}
                                ), !c.value && ng(a.value, o).catch(()=>{}
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
                    S && fC(S),
                    y == null || y(),
                    y = null
                }
                )
            }
            return ()=>{
                var y, E;
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
                    ht(Jr("RouterLink"), p, i.default)
                }
                const b = typeof a.value == "object" ? ((y = o.resolve(a.value)) == null ? void 0 : y.href) ?? null : a.value && !r.external && !l.value ? n(Mi(s.app.baseURL, a.value), o.resolve) : a.value || null
                  , _ = r.target || null
                  , S = mC(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || u.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!i.default)
                        return null;
                    const p = ()=>Ho(b, {
                        replace: r.replace,
                        external: r.external
                    });
                    return i.default({
                        href: b,
                        navigate: p,
                        get route() {
                            if (!b)
                                return;
                            const g = Uo(b);
                            return {
                                path: g.pathname,
                                fullPath: g.pathname,
                                get query() {
                                    return ou(g.search)
                                },
                                hash: g.hash,
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
                return ht("a", {
                    ref: d,
                    href: b,
                    rel: S,
                    target: _
                }, (E = i.default) == null ? void 0 : E.call(i))
            }
        }
    })
}
const nD = rg(BT);
function mh(e, t) {
    const n = t === "append" ? go : Bo;
    return xn(e) && !e.startsWith("http") ? e : n(e, !0)
}
function yC() {
    const e = $();
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
function gC() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const vC = Bt(e=>{
    const t = EL();
    return e.vueApp.use(t),
    Ko(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , bC = Bt({
    name: "nuxt:global-components"
})
  , mr = {
    default: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/default.D0w9QYqJ.js"), __vite__mapDeps([37, 17, 6, 13, 10, 24, 11, 5, 33, 4]), import.meta.url).then(e=>e.default || e),
    main: ()=>k(()=>import("https://hamsterkombatgame.io/_nuxt/main.BkueiPwt.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , _C = Bt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Xt();
        e.hooks.hook("app:mounted", ()=>{
            t.beforeEach(async n=>{
                var i;
                const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
                r && typeof mr[r] == "function" && await mr[r]()
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
            let o = pu(r.meta.middleware);
            o = o.filter(s=>typeof s == "string");
            for (const s of o)
                typeof to[s] == "function" && to[s]();
            i && typeof mr[i] == "function" && mr[i]()
        }
        )
    }
});
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ni(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function rD(e) {
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
var ig = {
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
          , y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
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
          , g = {
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
          , O = function(W) {
            return W instanceof B || !(!W || !W[L])
        }
          , C = function W(Y, V, q) {
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
            if (O(W))
                return W.clone();
            var V = typeof Y == "object" ? Y : {};
            return V.date = W,
            V.args = arguments,
            new B(V)
        }
          , H = g;
        H.l = C,
        H.i = O,
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
                this.$L = C(V.locale, null, !0),
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
                  , ue = function(X, te) {
                    var ve = H.w(U.$u ? Date.UTC(U.$y, te, X) : new Date(U.$y,te,X), U);
                    return le ? ve : ve.endOf(u)
                }
                  , be = function(X, te) {
                    return H.w(U.toDate()[X].apply(U.toDate("s"), (le ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), U)
                }
                  , Je = this.$W
                  , Ze = this.$M
                  , ft = this.$D
                  , rt = "set" + (this.$u ? "UTC" : "");
                switch (K) {
                case m:
                    return le ? ue(1, 0) : ue(31, 11);
                case f:
                    return le ? ue(1, Ze) : ue(0, Ze + 1);
                case c:
                    var j = this.$locale().weekStart || 0
                      , re = (Je < j ? Je + 7 : Je) - j;
                    return ue(le ? ft - re : ft + (6 - re), Ze);
                case u:
                case b:
                    return be(rt + "Hours", 0);
                case l:
                    return be(rt + "Minutes", 1);
                case a:
                    return be(rt + "Seconds", 2);
                case s:
                    return be(rt + "Milliseconds", 3);
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
                    var Je = this.clone().set(b, 1);
                    Je.$d[ue](be),
                    Je.init(),
                    this.$d = Je.set(b, Math.min(this.$D, Je.daysInMonth())).$d
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
                  , ue = function(Ze) {
                    var ft = N(le);
                    return H.w(ft.date(ft.date() + Math.round(Ze * V)), le)
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
                  , Je = this.$d.getTime() + V * be;
                return H.w(Je, this)
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
                  , Je = this.$M
                  , Ze = U.weekdays
                  , ft = U.months
                  , rt = U.meridiem
                  , j = function(te, ve, He, h) {
                    return te && (te[ve] || te(q, le)) || He[ve].slice(0, h)
                }
                  , re = function(te) {
                    return H.s(ue % 12 || 12, te, "0")
                }
                  , X = rt || function(te, ve, He) {
                    var h = te < 12 ? "AM" : "PM";
                    return He ? h.toLowerCase() : h
                }
                ;
                return le.replace(y, function(te, ve) {
                    return ve || function(He) {
                        switch (He) {
                        case "YY":
                            return String(q.$y).slice(-2);
                        case "YYYY":
                            return H.s(q.$y, 4, "0");
                        case "M":
                            return Je + 1;
                        case "MM":
                            return H.s(Je + 1, 2, "0");
                        case "MMM":
                            return j(U.monthsShort, Je, ft, 3);
                        case "MMMM":
                            return j(ft, Je);
                        case "D":
                            return q.$D;
                        case "DD":
                            return H.s(q.$D, 2, "0");
                        case "d":
                            return String(q.$W);
                        case "dd":
                            return j(U.weekdaysMin, q.$W, Ze, 2);
                        case "ddd":
                            return j(U.weekdaysShort, q.$W, Ze, 3);
                        case "dddd":
                            return Ze[q.$W];
                        case "H":
                            return String(ue);
                        case "HH":
                            return H.s(ue, 2, "0");
                        case "h":
                            return re(1);
                        case "hh":
                            return re(2);
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
                    }(te) || K.replace(":", "")
                })
            }
            ,
            Y.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            Y.diff = function(V, q, U) {
                var le, K = this, ue = H.p(q), be = N(V), Je = (be.utcOffset() - this.utcOffset()) * r, Ze = this - be, ft = function() {
                    return H.m(K, be)
                };
                switch (ue) {
                case m:
                    le = ft() / 12;
                    break;
                case f:
                    le = ft();
                    break;
                case d:
                    le = ft() / 3;
                    break;
                case c:
                    le = (Ze - Je) / 6048e5;
                    break;
                case u:
                    le = (Ze - Je) / 864e5;
                    break;
                case l:
                    le = Ze / i;
                    break;
                case a:
                    le = Ze / r;
                    break;
                case s:
                    le = Ze / n;
                    break;
                default:
                    le = Ze
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
                  , le = C(V, q, !0);
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
          , ee = B.prototype;
        return N.prototype = ee,
        [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", u], ["$M", f], ["$y", m], ["$D", b]].forEach(function(W) {
            ee[W[1]] = function(Y) {
                return this.$g(Y, W[0], W[1])
            }
        }),
        N.extend = function(W, Y) {
            return W.$i || (W(Y, B, N),
            W.$i = !0),
            N
        }
        ,
        N.locale = C,
        N.isDayjs = O,
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
)(ig);
var Zt = ig.exports;
const Hn = Ni(Zt);
var og = {
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
)(og);
var EC = og.exports;
const TC = Ni(EC);
var kC = {
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
)(kC);
var SC = {
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
)(SC);
var wC = {
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
)(wC);
var AC = {
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
)(AC);
var LC = {
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
)(LC);
var OC = {
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
)(OC);
var CC = {
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
)(CC);
var RC = {
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
            var y, E;
            return S === "m" ? _ ? "минута" : "минуту" : b + " " + (y = +b,
            E = {
                mm: _ ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[S].split("_"),
            y % 10 == 1 && y % 100 != 11 ? E[0] : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? E[1] : E[2])
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
)(RC);
var IC = {
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
)(IC);
var PC = {
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
)(PC);
var MC = {
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
)(MC);
var DC = {
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
)(DC);
var NC = {
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
)(NC);
var sg = {
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
                for (var b, _, S, y = f.$locale().relativeTime || s, E = n.thresholds || [{
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
                }], p = E.length, g = 0; g < p; g += 1) {
                    var T = E[g];
                    T.d && (b = d ? i(u).diff(f, T.d, !0) : f.diff(u, T.d, !0));
                    var w = (n.rounding || Math.round)(Math.abs(b));
                    if (S = b > 0,
                    w <= T.r || !T.r) {
                        w <= 1 && g > 0 && (T = E[g - 1]);
                        var L = y[T.l];
                        m && (w = m("" + w)),
                        _ = typeof L == "string" ? L.replace("%d", w) : L(w, c, T.l, S);
                        break
                    }
                }
                if (c)
                    return _;
                var O = S ? y.future : y.past;
                return typeof O == "function" ? O(_) : O.replace("%s", _)
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
)(sg);
var VC = sg.exports;
const FC = Ni(VC);
var ag = {
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
                var y = this.$utils().u;
                if (y(_))
                    return this.$u ? 0 : y(this.$offset) ? f.call(this) : this.$offset;
                if (typeof _ == "string" && (_ = function(T) {
                    T === void 0 && (T = "");
                    var w = T.match(r);
                    if (!w)
                        return null;
                    var L = ("" + w[0]).match(i) || ["-", 0, 0]
                      , O = L[0]
                      , C = 60 * +L[1] + +L[2];
                    return C === 0 ? 0 : O === "+" ? C : -C
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
                    var g = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (p = this.local().add(E + g, n)).$offset = E,
                    p.$x.$localOffset = g
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
            l.diff = function(_, S, y) {
                if (_ && this.$u === _.$u)
                    return b.call(this, _, S, y);
                var E = this.local()
                  , p = a(_).local();
                return b.call(E, p, S, y)
            }
        }
    })
}
)(ag);
var BC = ag.exports;
const UC = Ni(BC);
var lg = {
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
                  , S = function(y, E) {
                    E === void 0 && (E = {});
                    var p = E.timeZoneName || "short"
                      , g = y + "|" + p
                      , T = r[g];
                    return T || (T = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: y,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: p
                    }),
                    r[g] = T),
                    T
                }(m, b);
                return S.formatToParts(_)
            }, u = function(d, m) {
                for (var b = l(d, m), _ = [], S = 0; S < b.length; S += 1) {
                    var y = b[S]
                      , E = y.type
                      , p = y.value
                      , g = n[E];
                    g >= 0 && (_[g] = parseInt(p, 10))
                }
                var T = _[3]
                  , w = T === 24 ? 0 : T
                  , L = _[0] + "-" + _[1] + "-" + _[2] + " " + w + ":" + _[4] + ":" + _[5] + ":000"
                  , O = +d;
                return (s.utc(L).valueOf() - (O -= O % 1e3)) / 6e4
            }, c = o.prototype;
            c.tz = function(d, m) {
                d === void 0 && (d = a);
                var b = this.utcOffset()
                  , _ = this.toDate()
                  , S = _.toLocaleString("en-US", {
                    timeZone: d
                })
                  , y = Math.round((_ - new Date(S)) / 1e3 / 60)
                  , E = s(S, {
                    locale: this.$L
                }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(_.getTimezoneOffset() / 15) - y, !0);
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
                  , y = u(+s(), S);
                if (typeof d != "string")
                    return s(d).tz(S);
                var E = function(w, L, O) {
                    var C = w - 60 * L * 1e3
                      , N = u(C, O);
                    if (L === N)
                        return [C, L];
                    var H = u(C -= 60 * (N - L) * 1e3, O);
                    return N === H ? [C, N] : [w - 60 * Math.min(N, H) * 1e3, Math.max(N, H)]
                }(s.utc(d, _).valueOf(), y, S)
                  , p = E[0]
                  , g = E[1]
                  , T = s(p).utcOffset(g);
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
)(lg);
var xC = lg.exports;
const HC = Ni(xC);
var cg = {
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
                        return b || d[_] || n[_] || d[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, E, p) {
                            return E || p.slice(1)
                        })
                    })
                }(l, u === void 0 ? {} : u);
                return a.call(this, c)
            }
        }
    })
}
)(cg);
var jC = cg.exports;
const KC = Ni(jC);
Hn.extend(TC);
Hn.extend(FC);
Hn.extend(UC);
Hn.extend(HC);
Hn.extend(KC);
Hn.tz.setDefault("Europe/Moscow");
Hn.updateLocale("en");
Hn.locale("en");
const YC = Bt(async e=>e.provide("dayjs", Hn))
  , qC = ["top", "right", "bottom", "left"]
  , yh = ["start", "end"]
  , gh = qC.reduce((e,t)=>e.concat(t, t + "-" + yh[0], t + "-" + yh[1]), [])
  , wo = Math.min
  , Br = Math.max
  , GC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , WC = {
    start: "end",
    end: "start"
};
function gc(e, t, n) {
    return Br(e, wo(t, n))
}
function ti(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Un(e) {
    return e.split("-")[0]
}
function bn(e) {
    return e.split("-")[1]
}
function ug(e) {
    return e === "x" ? "y" : "x"
}
function Ru(e) {
    return e === "y" ? "height" : "width"
}
function Go(e) {
    return ["top", "bottom"].includes(Un(e)) ? "y" : "x"
}
function Iu(e) {
    return ug(Go(e))
}
function fg(e, t, n) {
    n === void 0 && (n = !1);
    const r = bn(e)
      , i = Iu(e)
      , o = Ru(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = Ys(s)),
    [s, Ys(s)]
}
function JC(e) {
    const t = Ys(e);
    return [Ks(e), t, Ks(t)]
}
function Ks(e) {
    return e.replace(/start|end/g, t=>WC[t])
}
function zC(e, t, n) {
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
function QC(e, t, n, r) {
    const i = bn(e);
    let o = zC(Un(e), n === "start", r);
    return i && (o = o.map(s=>s + "-" + i),
    t && (o = o.concat(o.map(Ks)))),
    o
}
function Ys(e) {
    return e.replace(/left|right|bottom|top/g, t=>GC[t])
}
function XC(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function dg(e) {
    return typeof e != "number" ? XC(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function no(e) {
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
function vh(e, t, n) {
    let {reference: r, floating: i} = e;
    const o = Go(t)
      , s = Iu(t)
      , a = Ru(s)
      , l = Un(t)
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
const ZC = async(e,t,n)=>{
    const {placement: r="bottom", strategy: i="absolute", middleware: o=[], platform: s} = n
      , a = o.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: f} = vh(u, r, l)
      , d = r
      , m = {}
      , b = 0;
    for (let _ = 0; _ < a.length; _++) {
        const {name: S, fn: y} = a[_]
          , {x: E, y: p, data: g, reset: T} = await y({
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
                ...g
            }
        },
        T && b <= 50 && (b++,
        typeof T == "object" && (T.placement && (d = T.placement),
        T.rects && (u = T.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : T.rects),
        {x: c, y: f} = vh(u, d, l)),
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
async function ka(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: o, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = ti(t, e)
      , b = dg(m)
      , S = a[d ? f === "floating" ? "reference" : "floating" : f]
      , y = no(await o.getClippingRect({
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
      , g = await (o.isElement == null ? void 0 : o.isElement(p)) ? await (o.getScale == null ? void 0 : o.getScale(p)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , T = no(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: E,
        offsetParent: p,
        strategy: l
    }) : E);
    return {
        top: (y.top - T.top + b.top) / g.y,
        bottom: (T.bottom - y.bottom + b.bottom) / g.y,
        left: (y.left - T.left + b.left) / g.x,
        right: (T.right - y.right + b.right) / g.x
    }
}
const $C = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: o, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = ti(e, t) || {};
        if (u == null)
            return {};
        const f = dg(c)
          , d = {
            x: n,
            y: r
        }
          , m = Iu(i)
          , b = Ru(m)
          , _ = await s.getDimensions(u)
          , S = m === "y"
          , y = S ? "top" : "left"
          , E = S ? "bottom" : "right"
          , p = S ? "clientHeight" : "clientWidth"
          , g = o.reference[b] + o.reference[m] - d[m] - o.floating[b]
          , T = d[m] - o.reference[m]
          , w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let L = w ? w[p] : 0;
        (!L || !await (s.isElement == null ? void 0 : s.isElement(w))) && (L = a.floating[p] || o.floating[b]);
        const O = g / 2 - T / 2
          , C = L / 2 - _[b] / 2 - 1
          , N = wo(f[y], C)
          , H = wo(f[E], C)
          , B = N
          , ee = L - _[b] - H
          , W = L / 2 - _[b] / 2 + O
          , Y = gc(B, W, ee)
          , V = !l.arrow && bn(i) != null && W !== Y && o.reference[b] / 2 - (W < B ? N : H) - _[b] / 2 < 0
          , q = V ? W < B ? W - B : W - ee : 0;
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
function eR(e, t, n) {
    return (e ? [...n.filter(i=>bn(i) === e), ...n.filter(i=>bn(i) !== e)] : n.filter(i=>Un(i) === i)).filter(i=>e ? bn(i) === e || (t ? Ks(i) !== i : !1) : !0)
}
const tR = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, i;
            const {rects: o, middlewareData: s, placement: a, platform: l, elements: u} = t
              , {crossAxis: c=!1, alignment: f, allowedPlacements: d=gh, autoAlignment: m=!0, ...b} = ti(e, t)
              , _ = f !== void 0 || d === gh ? eR(f || null, m, d) : d
              , S = await ka(t, b)
              , y = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = _[y];
            if (E == null)
                return {};
            const p = fg(E, o, await (l.isRTL == null ? void 0 : l.isRTL(u.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: _[0]
                    }
                };
            const g = [S[Un(E)], S[p[0]], S[p[1]]]
              , T = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
                placement: E,
                overflows: g
            }]
              , w = _[y + 1];
            if (w)
                return {
                    data: {
                        index: y + 1,
                        overflows: T
                    },
                    reset: {
                        placement: w
                    }
                };
            const L = T.map(N=>{
                const H = bn(N.placement);
                return [N.placement, H && c ? N.overflows.slice(0, 2).reduce((B,ee)=>B + ee, 0) : N.overflows[0], N.overflows]
            }
            ).sort((N,H)=>N[1] - H[1])
              , C = ((i = L.filter(N=>N[2].slice(0, bn(N[0]) ? 2 : 3).every(H=>H <= 0))[0]) == null ? void 0 : i[0]) || L[0][0];
            return C !== a ? {
                data: {
                    index: y + 1,
                    overflows: T
                },
                reset: {
                    placement: C
                }
            } : {}
        }
    }
}
  , nR = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: o, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: _=!0, ...S} = ti(e, t);
            if ((n = o.arrow) != null && n.alignmentOffset)
                return {};
            const y = Un(i)
              , E = Un(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , g = d || (E || !_ ? [Ys(a)] : JC(a));
            !d && b !== "none" && g.push(...QC(a, _, b, p));
            const T = [a, ...g]
              , w = await ka(t, S)
              , L = [];
            let O = ((r = o.flip) == null ? void 0 : r.overflows) || [];
            if (c && L.push(w[y]),
            f) {
                const B = fg(i, s, p);
                L.push(w[B[0]], w[B[1]])
            }
            if (O = [...O, {
                placement: i,
                overflows: L
            }],
            !L.every(B=>B <= 0)) {
                var C, N;
                const B = (((C = o.flip) == null ? void 0 : C.index) || 0) + 1
                  , ee = T[B];
                if (ee)
                    return {
                        data: {
                            index: B,
                            overflows: O
                        },
                        reset: {
                            placement: ee
                        }
                    };
                let W = (N = O.filter(Y=>Y.overflows[0] <= 0).sort((Y,V)=>Y.overflows[1] - V.overflows[1])[0]) == null ? void 0 : N.placement;
                if (!W)
                    switch (m) {
                    case "bestFit":
                        {
                            var H;
                            const Y = (H = O.map(V=>[V.placement, V.overflows.filter(q=>q > 0).reduce((q,U)=>q + U, 0)]).sort((V,q)=>V[1] - q[1])[0]) == null ? void 0 : H[0];
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
async function rR(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , s = Un(n)
      , a = bn(n)
      , l = Go(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = o && l ? -1 : 1
      , f = ti(t, e);
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
const iR = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: o, placement: s, middlewareData: a} = t
              , l = await rR(t, e);
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
  , oR = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: o=!0, crossAxis: s=!1, limiter: a={
                fn: S=>{
                    let {x: y, y: E} = S;
                    return {
                        x: y,
                        y: E
                    }
                }
            }, ...l} = ti(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await ka(t, l)
              , f = Go(Un(i))
              , d = ug(f);
            let m = u[d]
              , b = u[f];
            if (o) {
                const S = d === "y" ? "top" : "left"
                  , y = d === "y" ? "bottom" : "right"
                  , E = m + c[S]
                  , p = m - c[y];
                m = gc(E, m, p)
            }
            if (s) {
                const S = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , E = b + c[S]
                  , p = b - c[y];
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
  , sR = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: i, elements: o} = t
              , {apply: s=()=>{}
            , ...a} = ti(e, t)
              , l = await ka(t, a)
              , u = Un(n)
              , c = bn(n)
              , f = Go(n) === "y"
              , {width: d, height: m} = r.floating;
            let b, _;
            u === "top" || u === "bottom" ? (b = u,
            _ = c === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (_ = u,
            b = c === "end" ? "top" : "bottom");
            const S = m - l[b]
              , y = d - l[_]
              , E = !t.middlewareData.shift;
            let p = S
              , g = y;
            if (f) {
                const w = d - l.left - l.right;
                g = c || E ? wo(y, w) : w
            } else {
                const w = m - l.top - l.bottom;
                p = c || E ? wo(S, w) : w
            }
            if (E && !c) {
                const w = Br(l.left, 0)
                  , L = Br(l.right, 0)
                  , O = Br(l.top, 0)
                  , C = Br(l.bottom, 0);
                f ? g = d - 2 * (w !== 0 || L !== 0 ? w + L : Br(l.left, l.right)) : p = m - 2 * (O !== 0 || C !== 0 ? O + C : Br(l.top, l.bottom))
            }
            await s({
                ...t,
                availableWidth: g,
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
function Vn(e) {
    return ln(e).getComputedStyle(e)
}
const bh = Math.min
  , ro = Math.max
  , qs = Math.round;
function hg(e) {
    const t = Vn(e);
    let n = parseFloat(t.width)
      , r = parseFloat(t.height);
    const i = e.offsetWidth
      , o = e.offsetHeight
      , s = qs(n) !== i || qs(r) !== o;
    return s && (n = i,
    r = o),
    {
        width: n,
        height: r,
        fallback: s
    }
}
function Sr(e) {
    return mg(e) ? (e.nodeName || "").toLowerCase() : ""
}
let ds;
function pg() {
    if (ds)
        return ds;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? (ds = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    ds) : navigator.userAgent
}
function Fn(e) {
    return e instanceof ln(e).HTMLElement
}
function _r(e) {
    return e instanceof ln(e).Element
}
function mg(e) {
    return e instanceof ln(e).Node
}
function _h(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ln(e).ShadowRoot || e instanceof ShadowRoot
}
function Sa(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Vn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function aR(e) {
    return ["table", "td", "th"].includes(Sr(e))
}
function vc(e) {
    const t = /firefox/i.test(pg())
      , n = Vn(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(i=>n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(i=>{
        const o = n.contain;
        return o != null && o.includes(i)
    }
    )
}
function yg() {
    return !/^((?!chrome|android).)*safari/i.test(pg())
}
function Pu(e) {
    return ["html", "body", "#document"].includes(Sr(e))
}
function gg(e) {
    return _r(e) ? e : e.contextElement
}
const vg = {
    x: 1,
    y: 1
};
function gi(e) {
    const t = gg(e);
    if (!Fn(t))
        return vg;
    const n = t.getBoundingClientRect()
      , {width: r, height: i, fallback: o} = hg(t);
    let s = (o ? qs(n.width) : n.width) / r
      , a = (o ? qs(n.height) : n.height) / i;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function Ao(e, t, n, r) {
    var i, o;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = gg(e);
    let l = vg;
    t && (r ? _r(r) && (l = gi(r)) : l = gi(e));
    const u = a ? ln(a) : window
      , c = !yg() && n;
    let f = (s.left + (c && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x
      , d = (s.top + (c && ((o = u.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , b = s.height / l.y;
    if (a) {
        const _ = ln(a)
          , S = r && _r(r) ? ln(r) : r;
        let y = _.frameElement;
        for (; y && r && S !== _; ) {
            const E = gi(y)
              , p = y.getBoundingClientRect()
              , g = getComputedStyle(y);
            p.x += (y.clientLeft + parseFloat(g.paddingLeft)) * E.x,
            p.y += (y.clientTop + parseFloat(g.paddingTop)) * E.y,
            f *= E.x,
            d *= E.y,
            m *= E.x,
            b *= E.y,
            f += p.x,
            d += p.y,
            y = ln(y).frameElement
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
function Er(e) {
    return ((mg(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function wa(e) {
    return _r(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function bg(e) {
    return Ao(Er(e)).left + wa(e).scrollLeft
}
function Lo(e) {
    if (Sr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || _h(e) && e.host || Er(e);
    return _h(t) ? t.host : t
}
function _g(e) {
    const t = Lo(e);
    return Pu(t) ? t.ownerDocument.body : Fn(t) && Sa(t) ? t : _g(t)
}
function Gs(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = _g(e)
      , i = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , o = ln(r);
    return i ? t.concat(o, o.visualViewport || [], Sa(r) ? r : []) : t.concat(r, Gs(r))
}
function Eh(e, t, n) {
    return t === "viewport" ? no(function(r, i) {
        const o = ln(r)
          , s = Er(r)
          , a = o.visualViewport;
        let l = s.clientWidth
          , u = s.clientHeight
          , c = 0
          , f = 0;
        if (a) {
            l = a.width,
            u = a.height;
            const d = yg();
            (d || !d && i === "fixed") && (c = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: u,
            x: c,
            y: f
        }
    }(e, n)) : _r(t) ? no(function(r, i) {
        const o = Ao(r, !0, i === "fixed")
          , s = o.top + r.clientTop
          , a = o.left + r.clientLeft
          , l = Fn(r) ? gi(r) : {
            x: 1,
            y: 1
        };
        return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: s * l.y
        }
    }(t, n)) : no(function(r) {
        const i = Er(r)
          , o = wa(r)
          , s = r.ownerDocument.body
          , a = ro(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth)
          , l = ro(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
        let u = -o.scrollLeft + bg(r);
        const c = -o.scrollTop;
        return Vn(s).direction === "rtl" && (u += ro(i.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: u,
            y: c
        }
    }(Er(e)))
}
function Th(e) {
    return Fn(e) && Vn(e).position !== "fixed" ? e.offsetParent : null
}
function kh(e) {
    const t = ln(e);
    let n = Th(e);
    for (; n && aR(n) && Vn(n).position === "static"; )
        n = Th(n);
    return n && (Sr(n) === "html" || Sr(n) === "body" && Vn(n).position === "static" && !vc(n)) ? t : n || function(r) {
        let i = Lo(r);
        for (; Fn(i) && !Pu(i); ) {
            if (vc(i))
                return i;
            i = Lo(i)
        }
        return null
    }(e) || t
}
function lR(e, t, n) {
    const r = Fn(t)
      , i = Er(t)
      , o = Ao(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((Sr(t) !== "body" || Sa(i)) && (s = wa(t)),
        Fn(t)) {
            const l = Ao(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            i && (a.x = bg(i));
    return {
        x: o.left + s.scrollLeft - a.x,
        y: o.top + s.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}
const cR = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
        const o = n === "clippingAncestors" ? function(u, c) {
            const f = c.get(u);
            if (f)
                return f;
            let d = Gs(u).filter(S=>_r(S) && Sr(S) !== "body")
              , m = null;
            const b = Vn(u).position === "fixed";
            let _ = b ? Lo(u) : u;
            for (; _r(_) && !Pu(_); ) {
                const S = Vn(_)
                  , y = vc(_);
                (b ? y || m : y || S.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = S : d = d.filter(E=>E !== _),
                _ = Lo(_)
            }
            return c.set(u, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...o, r]
          , a = s[0]
          , l = s.reduce((u,c)=>{
            const f = Eh(t, c, i);
            return u.top = ro(f.top, u.top),
            u.right = bh(f.right, u.right),
            u.bottom = bh(f.bottom, u.bottom),
            u.left = ro(f.left, u.left),
            u
        }
        , Eh(t, a, i));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const i = Fn(n)
          , o = Er(n);
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
        if ((i || !i && r !== "fixed") && ((Sr(n) !== "body" || Sa(o)) && (s = wa(n)),
        Fn(n))) {
            const u = Ao(n);
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
    isElement: _r,
    getDimensions: function(e) {
        return Fn(e) ? hg(e) : e.getBoundingClientRect()
    },
    getOffsetParent: kh,
    getDocumentElement: Er,
    getScale: gi,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const i = this.getOffsetParent || kh
          , o = this.getDimensions;
        return {
            reference: lR(t, await i(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await o(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>Vn(e).direction === "rtl"
}
  , uR = (e,t,n)=>{
    const r = new Map
      , i = {
        platform: cR,
        ...n
    }
      , o = {
        ...i.platform,
        _c: r
    };
    return ZC(e, t, {
        ...i,
        platform: o
    })
}
;
function Eg(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? Eg(e[n], t[n]) : e[n] = t[n])
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
function Oo(e, t) {
    let n = _n.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = _n.themes[n.$extend] || {} : (n = null,
        r = _n[t]) : n = null;
    while (n);
    return r
}
function fR(e) {
    const t = [e];
    let n = _n.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = _n.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function Sh(e) {
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
let Tg = !1;
typeof window < "u" && typeof navigator < "u" && (Tg = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const kg = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , wh = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , Ah = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
};
function Lh(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1)
}
function ol() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const vn = [];
let Mr = null;
const Oh = {};
function Ch(e) {
    let t = Oh[e];
    return t || (t = Oh[e] = []),
    t
}
let bc = function() {};
typeof window < "u" && (bc = window.Element);
function je(e) {
    return function(t) {
        return Oo(t.theme, e)
    }
}
const sl = "__floating-vue__popper"
  , Sg = ()=>xe({
    name: "VPopper",
    provide() {
        return {
            [sl]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [sl]: {
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
            default: je("disabled")
        },
        positioningDisabled: {
            type: Boolean,
            default: je("positioningDisabled")
        },
        placement: {
            type: String,
            default: je("placement"),
            validator: e=>kg.includes(e)
        },
        delay: {
            type: [String, Number, Object],
            default: je("delay")
        },
        distance: {
            type: [Number, String],
            default: je("distance")
        },
        skidding: {
            type: [Number, String],
            default: je("skidding")
        },
        triggers: {
            type: Array,
            default: je("triggers")
        },
        showTriggers: {
            type: [Array, Function],
            default: je("showTriggers")
        },
        hideTriggers: {
            type: [Array, Function],
            default: je("hideTriggers")
        },
        popperTriggers: {
            type: Array,
            default: je("popperTriggers")
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: je("popperShowTriggers")
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: je("popperHideTriggers")
        },
        container: {
            type: [String, Object, bc, Boolean],
            default: je("container")
        },
        boundary: {
            type: [String, bc],
            default: je("boundary")
        },
        strategy: {
            type: String,
            validator: e=>["absolute", "fixed"].includes(e),
            default: je("strategy")
        },
        autoHide: {
            type: [Boolean, Function],
            default: je("autoHide")
        },
        handleResize: {
            type: Boolean,
            default: je("handleResize")
        },
        instantMove: {
            type: Boolean,
            default: je("instantMove")
        },
        eagerMount: {
            type: Boolean,
            default: je("eagerMount")
        },
        popperClass: {
            type: [String, Array, Object],
            default: je("popperClass")
        },
        computeTransformOrigin: {
            type: Boolean,
            default: je("computeTransformOrigin")
        },
        autoMinSize: {
            type: Boolean,
            default: je("autoMinSize")
        },
        autoSize: {
            type: [Boolean, String],
            default: je("autoSize")
        },
        autoMaxSize: {
            type: Boolean,
            default: je("autoMaxSize")
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: je("autoBoundaryMaxSize")
        },
        preventOverflow: {
            type: Boolean,
            default: je("preventOverflow")
        },
        overflowPadding: {
            type: [Number, String],
            default: je("overflowPadding")
        },
        arrowPadding: {
            type: [Number, String],
            default: je("arrowPadding")
        },
        arrowOverflow: {
            type: Boolean,
            default: je("arrowOverflow")
        },
        flip: {
            type: Boolean,
            default: je("flip")
        },
        shift: {
            type: Boolean,
            default: je("shift")
        },
        shiftCrossAxis: {
            type: Boolean,
            default: je("shiftCrossAxis")
        },
        noAutoFocus: {
            type: Boolean,
            default: je("noAutoFocus")
        },
        disposeTimeout: {
            type: Number,
            default: je("disposeTimeout")
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
            return (e = this[sl]) == null ? void 0 : e.parentPopper
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
            (this.distance || this.skidding) && e.middleware.push(iR({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(tR({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(oR({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(nR({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push($C({
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
            e.middleware.push(sR({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: i})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null
                }
            })));
            const n = await uR(this.$_referenceNode, this.$_popperNode, e);
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
            Mr && this.instantMove && Mr.instantMove && Mr !== this.parentPopper) {
                Mr.$_applyHide(!0),
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
            this.isShown && (Mr = this),
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
            await ol(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...Gs(this.$_referenceNode), ...Gs(this.$_popperNode)], "scroll", ()=>{
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
                for (let n = 0; n < vn.length; n++)
                    t = vn[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            vn.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of Sh(this.theme))
                Ch(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await ol(),
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
            Lh(vn, this),
            vn.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of Sh(this.theme)) {
                const r = Ch(n);
                Lh(r, this),
                r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
            }
            Mr === this && (Mr = null),
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
            await ol(),
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
            this.$_registerTriggerListeners(this.$_targetNodes, wh, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], wh, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, Ah, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], Ah, this.popperTriggers, this.popperHideTriggers, t)
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
            if (io >= e.left && io <= e.right && oo >= e.top && oo <= e.bottom) {
                const t = this.$_popperNode.getBoundingClientRect()
                  , n = io - sr
                  , r = oo - ar
                  , i = t.left + t.width / 2 - sr + (t.top + t.height / 2) - ar + t.width + t.height
                  , o = sr + n * i
                  , s = ar + r * i;
                return hs(sr, ar, o, s, t.left, t.top, t.left, t.bottom) || hs(sr, ar, o, s, t.left, t.top, t.right, t.top) || hs(sr, ar, o, s, t.right, t.top, t.right, t.bottom) || hs(sr, ar, o, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (Tg) {
        const e = Ci ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>Rh(t, !0), e),
        document.addEventListener("touchend", t=>Ih(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>Rh(e, !1), !0),
        window.addEventListener("click", e=>Ih(e, !1), !0);
    window.addEventListener("resize", hR)
}
function Rh(e, t) {
    if (_n.autoHideOnMousedown)
        wg(e, t);
    else
        for (let n = 0; n < vn.length; n++) {
            const r = vn[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function Ih(e, t) {
    _n.autoHideOnMousedown || wg(e, t)
}
function wg(e, t) {
    const n = {};
    for (let r = vn.length - 1; r >= 0; r--) {
        const i = vn[r];
        try {
            const o = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
            i.pendingHide = !1,
            requestAnimationFrame(()=>{
                if (i.pendingHide = !1,
                !n[i.randomId] && Ph(i, o, e)) {
                    if (i.$_handleGlobalClose(e, t),
                    !e.closeAllPopover && e.closePopover && o) {
                        let a = i.parentPopper;
                        for (; a; )
                            n[a.randomId] = !0,
                            a = a.parentPopper;
                        return
                    }
                    let s = i.parentPopper;
                    for (; s && Ph(s, s.containsGlobalTarget, e); )
                        s.$_handleGlobalClose(e, t),
                        s = s.parentPopper
                }
            }
            )
        } catch {}
    }
}
function Ph(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || dR(e, n) && !t
}
function dR(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function hR() {
    for (let e = 0; e < vn.length; e++)
        vn[e].$_computePosition()
}
let sr = 0
  , ar = 0
  , io = 0
  , oo = 0;
typeof window < "u" && window.addEventListener("mousemove", e=>{
    sr = io,
    ar = oo,
    io = e.clientX,
    oo = e.clientY
}
, Ci ? {
    passive: !0
} : void 0);
function hs(e, t, n, r, i, o, s, a) {
    const l = ((s - i) * (t - o) - (a - o) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t))
      , u = ((n - e) * (t - o) - (r - t) * (e - i)) / ((a - o) * (n - e) - (s - i) * (r - t));
    return l >= 0 && l <= 1 && u >= 0 && u <= 1
}
const pR = {
    extends: Sg()
}
  , Aa = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
;
function mR(e, t, n, r, i, o) {
    return me(),
    Qe("div", {
        ref: "reference",
        class: Nt(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [kr(e.$slots, "default", fn(Qt(e.slotData)))], 2)
}
const yR = Aa(pR, [["render", mR]]);
function gR() {
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
let Es;
function _c() {
    _c.init || (_c.init = !0,
    Es = gR() !== -1)
}
var La = {
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
        _c(),
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
        Es && this.$el.appendChild(e),
        e.data = "about:blank",
        Es || this.$el.appendChild(e)
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
            this._resizeObject && this._resizeObject.onload && (!Es && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const vR = T0();
_0("data-v-b329ee4c");
const bR = {
    class: "resize-observer",
    tabindex: "-1"
};
E0();
const _R = vR((e,t,n,r,i,o)=>(me(),
Tt("div", bR)));
La.render = _R;
La.__scopeId = "data-v-b329ee4c";
La.__file = "src/components/ResizeObserver.vue";
const Ag = (e="theme")=>({
    computed: {
        themeClass() {
            return fR(this[e])
        }
    }
})
  , ER = xe({
    name: "VPopperContent",
    components: {
        ResizeObserver: La
    },
    mixins: [Ag()],
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
  , TR = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , kR = {
    ref: "inner",
    class: "v-popper__inner"
}
  , SR = ye("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , wR = ye("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , AR = [SR, wR];
function LR(e, t, n, r, i, o) {
    const s = Jr("ResizeObserver");
    return me(),
    Qe("div", {
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
        style: Nn(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = i_(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [ye("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), ye("div", {
        class: "v-popper__wrapper",
        style: Nn(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [ye("div", kR, [e.mounted ? (me(),
    Qe(gt, {
        key: 0
    }, [ye("div", null, [kr(e.$slots, "default")]), e.handleResize ? (me(),
    Tt(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : Jt("", !0)], 64)) : Jt("", !0)], 512), ye("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Nn(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, AR, 4)], 4)], 46, TR)
}
const Lg = Aa(ER, [["render", LR]])
  , Og = {
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
let Ec = function() {};
typeof window < "u" && (Ec = window.Element);
const OR = xe({
    name: "VPopperWrapper",
    components: {
        Popper: yR,
        PopperContent: Lg
    },
    mixins: [Og, Ag("finalTheme")],
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
            type: [String, Object, Ec, Boolean],
            default: void 0
        },
        boundary: {
            type: [String, Ec],
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
function CR(e, t, n, r, i, o) {
    const s = Jr("PopperContent")
      , a = Jr("Popper");
    return me(),
    Tt(a, Ei({
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
        default: dn(({popperId: l, isShown: u, shouldMountContent: c, skipTransition: f, autoHide: d, show: m, hide: b, handleResize: _, onResize: S, classes: y, result: E})=>[kr(e.$slots, "default", {
            shown: u,
            show: m,
            hide: b
        }), tt(s, {
            ref: "popperContent",
            "popper-id": l,
            theme: e.finalTheme,
            shown: u,
            mounted: c,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": _,
            classes: y,
            result: E,
            onHide: b,
            onResize: S
        }, {
            default: dn(()=>[kr(e.$slots, "popper", {
                shown: u,
                hide: b
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Mu = Aa(OR, [["render", CR]])
  , RR = {
    ...Mu,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , IR = {
    ...Mu,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , PR = {
    ...Mu,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , MR = xe({
    name: "VTooltipDirective",
    components: {
        Popper: Sg(),
        PopperContent: Lg
    },
    mixins: [Og],
    inheritAttrs: !1,
    props: {
        theme: {
            type: String,
            default: "tooltip"
        },
        html: {
            type: Boolean,
            default: e=>Oo(e.theme, "html")
        },
        content: {
            type: [String, Number, Function],
            default: null
        },
        loadingContent: {
            type: String,
            default: e=>Oo(e.theme, "loadingContent")
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
  , DR = ["innerHTML"]
  , NR = ["textContent"];
function VR(e, t, n, r, i, o) {
    const s = Jr("PopperContent")
      , a = Jr("Popper");
    return me(),
    Tt(a, Ei({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: dn(({popperId: l, isShown: u, shouldMountContent: c, skipTransition: f, autoHide: d, hide: m, handleResize: b, onResize: _, classes: S, result: y})=>[tt(s, {
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
            result: y,
            onHide: m,
            onResize: _
        }, {
            default: dn(()=>[e.html ? (me(),
            Qe("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, DR)) : (me(),
            Qe("div", {
                key: 1,
                textContent: tn(e.finalContent)
            }, null, 8, NR))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const FR = Aa(MR, [["render", VR]])
  , Cg = "v-popper--has-tooltip";
function BR(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of kg)
            t[r] && (n = r);
    return n || (n = Oo(e.theme || "tooltip", "placement")),
    n
}
function Rg(e, t, n) {
    let r;
    const i = typeof t;
    return i === "string" ? r = {
        content: t
    } : t && i === "object" ? r = t : r = {
        content: !1
    },
    r.placement = BR(r, n),
    r.targetNodes = ()=>[e],
    r.referenceNode = ()=>e,
    r
}
let al, Co, UR = 0;
function xR() {
    if (al)
        return;
    Co = ce([]),
    al = cm({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: Co
            }
        },
        render() {
            return this.directives.map(t=>ht(FR, {
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
    al.mount(e)
}
function HR(e, t, n) {
    xR();
    const r = ce(Rg(e, t, n))
      , i = ce(!1)
      , o = {
        id: UR++,
        options: r,
        shown: i
    };
    return Co.value.push(o),
    e.classList && e.classList.add(Cg),
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
function Ig(e) {
    if (e.$_popper) {
        const t = Co.value.indexOf(e.$_popper.item);
        t !== -1 && Co.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(Cg)
}
function Mh(e, {value: t, modifiers: n}) {
    const r = Rg(e, t, n);
    if (!r.content || Oo(r.theme || "tooltip", "disabled"))
        Ig(e);
    else {
        let i;
        e.$_popper ? (i = e.$_popper,
        i.options.value = r) : i = HR(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? i.show() : i.hide())
    }
}
const jR = {
    beforeMount: Mh,
    updated: Mh,
    beforeUnmount(e) {
        Ig(e)
    }
};
function Dh(e) {
    e.addEventListener("mousedown", Ws),
    e.addEventListener("click", Ws),
    e.addEventListener("touchstart", Pg, Ci ? {
        passive: !0
    } : !1)
}
function Nh(e) {
    e.removeEventListener("mousedown", Ws),
    e.removeEventListener("click", Ws),
    e.removeEventListener("touchstart", Pg),
    e.removeEventListener("touchend", Mg),
    e.removeEventListener("touchcancel", Dg)
}
function Ws(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch,
    e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
}
function Pg(e) {
    if (e.changedTouches.length === 1) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = !0;
        const n = e.changedTouches[0];
        t.$_vclosepopover_touchPoint = n,
        t.addEventListener("touchend", Mg),
        t.addEventListener("touchcancel", Dg)
    }
}
function Mg(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function Dg(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const KR = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && Dh(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? Dh(e) : Nh(e))
    },
    beforeUnmount(e) {
        Nh(e)
    }
};
function YR(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    Eg(_n, t),
    e.directive("tooltip", jR),
    e.directive("close-popper", KR),
    e.component("VTooltip", PR),
    e.component("VDropdown", RR),
    e.component("VMenu", IR))
}
const qR = {
    version: "5.2.2",
    install: YR,
    options: _n
}
  , GR = Bt(e=>{
    e.vueApp.use(qR)
}
);
function Ng(e) {
    if (e == null)
        return 1 / 0;
    if (typeof e == "object")
        for (let t in e)
            e[t] = Ng(e[t]);
    return e
}
const WR = Bt(({vueApp: e})=>{
    var i;
    const t = ((i = Qn().public) == null ? void 0 : i.notivue) || {}
      , n = Ng(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = CS(n);
    e.use(r)
}
);
function JR(e, {locales: t=[], localeCodes: n=[], baseUrl: r=XL, hooks: i={}, context: o={}}={}) {
    const s = Do()
      , a = e.install;
    return e.install = (l,...u)=>{
        const c = XR(u[0]) ? pt({}, u[0]) : {
            inject: !0
        };
        c.inject == null && (c.inject = !0);
        const f = c.__composerExtend;
        if (c.__composerExtend = _=>{
            const S = Ai(e);
            _.locales = fe(()=>S.locales.value),
            _.localeCodes = fe(()=>S.localeCodes.value),
            _.baseUrl = fe(()=>S.baseUrl.value);
            let y;
            return et(f) && (y = Reflect.apply(f, c, [_])),
            ()=>{
                y && y()
            }
        }
        ,
        e.mode === "legacy") {
            const _ = c.__vueI18nExtend;
            c.__vueI18nExtend = S=>{
                Vh(S, i.onExtendVueI18n);
                let y;
                return et(_) && (y = Reflect.apply(_, c, [S])),
                ()=>{
                    y && y()
                }
            }
        }
        u[0] = c,
        Reflect.apply(a, e, [l, ...u]);
        const d = Ai(e);
        s.run(()=>{
            zR(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: i,
                context: o
            }),
            e.mode === "legacy" && By(e.global) && Vh(e.global, i.onExtendVueI18n)
        }
        );
        const m = l
          , b = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (b && QR(b, d, i.onExtendExportedGlobal),
        c.inject) {
            const _ = Ou(e);
            l.mixin({
                methods: {
                    getRouteBaseName: Li,
                    resolveRoute: on(Ta, _),
                    localePath: on(Ea, _),
                    localeRoute: on(Au, _),
                    localeLocation: on(bO, _),
                    switchLocalePath: on(Oi, _),
                    localeHead: on(jy, _)
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
function zR(e, t) {
    const {locales: n, localeCodes: r, baseUrl: i, context: o} = t
      , s = ce(n)
      , a = ce(r)
      , l = ce("");
    e.locales = fe(()=>s.value),
    e.localeCodes = fe(()=>a.value),
    e.baseUrl = fe(()=>l.value),
    $L ? qe(e.locale, ()=>{
        l.value = ih(i, o)
    }
    , {
        immediate: !0
    }) : l.value = ih(i, o),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function Vg(e, t, n) {
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
function QR(e, t, n) {
    Vg(t, e, n)
}
function Vh(e, t) {
    const n = Ai(e);
    Vg(n, e, t)
}
function XR(e) {
    return Ue(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function ZR() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = vt
      , n = `(${Xr.join("|")})`
      , r = `(?:${e}${t})?`
      , i = new RegExp(`${e}${n}${r}$`,"i")
      , o = hc(Xr);
    return a=>{
        if (Ue(a)) {
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
const $R = Bt({
    name: "i18n:plugin",
    parallel: zL,
    async setup(e) {
        let t, n;
        const r = ua()
          , {vueApp: i} = e
          , o = e
          , s = {
            ...vt
        };
        s.baseUrl = VO();
        const a = ([t,n] = Pn(()=>uO(JL, $())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = ZR()
          , u = p=>p || a.locale || "en-US"
          , c = BO();
        let f = ah(r, l, a.locale, u(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: c
        });
        a.messages = ([t,n] = Pn(()=>fO(a.messages, dc, {
            localeCodes: Xr,
            initialLocale: f,
            lazy: s.lazy,
            defaultLocale: s.defaultLocale,
            fallbackLocale: a.fallbackLocale
        })),
        t = await t,
        n(),
        t),
        f = u(f);
        const d = uL({
            ...a,
            locale: f
        });
        let m = !0;
        const b = p=>f !== p && m;
        let _ = !0;
        const S = ()=>_;
        S() && s.strategy === "no_prefix" && e.hook("app:mounted", async()=>{
            const {locale: p, stat: g, reason: T, from: w} = s.detectBrowserLanguage ? Wy(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: c
            }, f) : Gy;
            LO(d, p),
            _ = !1
        }
        ),
        JR(d, {
            locales: s.locales,
            localeCodes: Xr,
            baseUrl: s.baseUrl,
            context: o,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = fe(()=>wu.find(g=>g.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async g=>{
                        const T = b(g)
                          , [w] = await sh(g, d, T);
                        w && T && (m = !1);
                        const L = await o.runWithContext(()=>lh({
                            route: {
                                to: r
                            },
                            targetLocale: g,
                            routeLocaleGetter: l
                        }));
                        await o.runWithContext(async()=>await uh({
                            i18n: d,
                            redirectPath: L,
                            locale: g,
                            route: r
                        }, {
                            enableNavigate: !0
                        }))
                    }
                    ,
                    p.differentDomains = s.differentDomains,
                    p.defaultLocale = s.defaultLocale,
                    p.getBrowserLocale = ()=>qy(),
                    p.getLocaleCookie = ()=>UO(c),
                    p.setLocaleCookie = g=>xO(c, g),
                    p.onBeforeLanguageSwitch = (g,T,w,L)=>e.callHook("i18n:beforeLocaleSwitch", {
                        oldLocale: g,
                        newLocale: T,
                        initialSetup: w,
                        context: L
                    }),
                    p.onLanguageSwitched = (g,T)=>e.callHook("i18n:localeSwitched", {
                        oldLocale: g,
                        newLocale: T
                    }),
                    p.finalizePendingLocaleChange = async()=>{
                        d.__pendingLocale && (Uy(d, d.__pendingLocale),
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
                                return async g=>Reflect.apply(p.setLocale, p, [g])
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
                                return g=>Reflect.apply(p.setLocaleCookie, p, [g])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (g,T,w,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [g, T, w, L])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (g,T)=>Reflect.apply(p.onLanguageSwitched, p, [g, T])
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
                                return async g=>Reflect.apply(p.setLocale, p, [g])
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
                                return g=>Reflect.apply(p.setLocaleCookie, p, [g])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (g,T,w,L)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [g, T, w, L])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (g,T)=>Reflect.apply(p.onLanguageSwitched, p, [g, T])
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
        const y = {
            __composerExtend: p=>{
                const g = Ai(d);
                return p.strategy = g.strategy,
                p.localeProperties = fe(()=>g.localeProperties.value),
                p.setLocale = g.setLocale,
                p.differentDomains = g.differentDomains,
                p.getBrowserLocale = g.getBrowserLocale,
                p.getLocaleCookie = g.getLocaleCookie,
                p.setLocaleCookie = g.setLocaleCookie,
                p.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch,
                p.onLanguageSwitched = g.onLanguageSwitched,
                p.finalizePendingLocaleChange = g.finalizePendingLocaleChange,
                p.waitForPendingLocaleChange = g.waitForPendingLocaleChange,
                ()=>{}
            }
        };
        i.use(d, y),
        MO(o, d);
        let E = 0;
        PE("locale-changing", async(p,g)=>{
            let T, w;
            const L = ah(p, l, a.locale, ()=>_a(d) || u(s.defaultLocale), {
                ssg: S() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: c
            })
              , O = b(L)
              , [C] = ([T,w] = Pn(()=>sh(L, d, O)),
            T = await T,
            w(),
            T);
            C && O && (m = !1);
            const N = ([T,w] = Pn(()=>o.runWithContext(()=>lh({
                route: {
                    to: p,
                    from: g
                },
                targetLocale: L,
                routeLocaleGetter: s.strategy === "no_prefix" ? ()=>L : l,
                calledWithRouting: !0
            }))),
            T = await T,
            w(),
            T);
            return E++,
            [T,w] = Pn(()=>o.runWithContext(async()=>uh({
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
function Fg(e) {
    return No() ? (ea(e),
    !0) : !1
}
function Du(e) {
    return typeof e == "function" ? e() : J(e)
}
const e1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const t1 = e=>e != null
  , n1 = Object.prototype.toString
  , Js = e=>n1.call(e) === "[object Object]"
  , so = ()=>{}
;
function Bg(e) {
    return e || wn()
}
function r1(...e) {
    if (e.length !== 1)
        return ai(...e);
    const t = e[0];
    return typeof t == "function" ? pr(kp(()=>({
        get: t,
        set: so
    }))) : ce(t)
}
function i1(e, t=!0, n) {
    Bg() ? Ft(e, n) : t ? e() : zt(e)
}
function o1(e, t) {
    Bg(t) && Pi(e, t)
}
function ao(e) {
    var t;
    const n = Du(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Ug = e1 ? window : void 0;
function xt(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = Ug) : [t,n,r,i] = e,
    !t)
        return so;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = ()=>{
        o.forEach(c=>c()),
        o.length = 0
    }
      , a = (c,f,d,m)=>(c.addEventListener(f, d, m),
    ()=>c.removeEventListener(f, d, m))
      , l = qe(()=>[ao(t), Du(i)], ([c,f])=>{
        if (s(),
        !c)
            return;
        const d = Js(f) ? {
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
    return Fg(u),
    u
}
function s1() {
    const e = ce(!1)
      , t = wn();
    return t && Ft(()=>{
        e.value = !0
    }
    , t),
    e
}
function a1(e) {
    const t = s1();
    return fe(()=>(t.value,
    !!e()))
}
function l1(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=Ug, immediate: a=!0} = n
      , l = a1(()=>s && "IntersectionObserver"in s)
      , u = fe(()=>{
        const b = Du(e);
        return (Array.isArray(b) ? b : [b]).map(ao).filter(t1)
    }
    );
    let c = so;
    const f = ce(a)
      , d = l.value ? qe(()=>[u.value, ao(r), f.value], ([b,_])=>{
        if (c(),
        !f.value || !b.length)
            return;
        const S = new IntersectionObserver(t,{
            root: ao(_),
            rootMargin: i,
            threshold: o
        });
        b.forEach(y=>y && S.observe(y)),
        c = ()=>{
            S.disconnect(),
            c = so
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : so
      , m = ()=>{
        c(),
        d(),
        f.value = !1
    }
    ;
    return Fg(m),
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
function iD(e, t={}) {
    const n = r1(e)
      , {threshold: r=50, onSwipe: i, onSwipeEnd: o, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = Lt({
        x: 0,
        y: 0
    })
      , u = (L,O)=>{
        l.x = L,
        l.y = O
    }
      , c = Lt({
        x: 0,
        y: 0
    })
      , f = (L,O)=>{
        c.x = L,
        c.y = O
    }
      , d = fe(()=>l.x - c.x)
      , m = fe(()=>l.y - c.y)
      , {max: b, abs: _} = Math
      , S = fe(()=>b(_(d.value), _(m.value)) >= r)
      , y = ce(!1)
      , E = ce(!1)
      , p = fe(()=>S.value ? _(d.value) > _(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , g = L=>{
        var O, C, N;
        const H = L.buttons === 0
          , B = L.buttons === 1;
        return (N = (C = (O = t.pointerTypes) == null ? void 0 : O.includes(L.pointerType)) != null ? C : H || B) != null ? N : !0
    }
      , T = [xt(e, "pointerdown", L=>{
        if (!g(L))
            return;
        E.value = !0;
        const O = L.target;
        O == null || O.setPointerCapture(L.pointerId);
        const {clientX: C, clientY: N} = L;
        u(C, N),
        f(C, N),
        s == null || s(L)
    }
    ), xt(e, "pointermove", L=>{
        if (!g(L) || !E.value)
            return;
        const {clientX: O, clientY: C} = L;
        f(O, C),
        !y.value && S.value && (y.value = !0),
        y.value && (i == null || i(L))
    }
    ), xt(e, "pointerup", L=>{
        g(L) && (y.value && (o == null || o(L, p.value)),
        E.value = !1,
        y.value = !1)
    }
    )];
    i1(()=>{
        var L, O, C, N, H, B, ee, W;
        (O = (L = n.value) == null ? void 0 : L.style) == null || O.setProperty("touch-action", "none"),
        a && ((N = (C = n.value) == null ? void 0 : C.style) == null || N.setProperty("-webkit-user-select", "none"),
        (B = (H = n.value) == null ? void 0 : H.style) == null || B.setProperty("-ms-user-select", "none"),
        (W = (ee = n.value) == null ? void 0 : ee.style) == null || W.setProperty("user-select", "none"))
    }
    );
    const w = ()=>T.forEach(L=>L());
    return {
        isSwiping: pr(y),
        direction: pr(p),
        posStart: pr(l),
        posEnd: pr(c),
        distanceX: d,
        distanceY: m,
        stop: w
    }
}
const xg = 1 / 60 * 1e3
  , c1 = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , Hg = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(c1()), xg);
function u1(e) {
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
const f1 = 40;
let Tc = !0
  , Ro = !1
  , kc = !1;
const vi = {
    delta: 0,
    timestamp: 0
}
  , Wo = ["read", "update", "preRender", "render", "postRender"]
  , Oa = Wo.reduce((e,t)=>(e[t] = u1(()=>Ro = !0),
e), {})
  , Sc = Wo.reduce((e,t)=>{
    const n = Oa[t];
    return e[t] = (r,i=!1,o=!1)=>(Ro || p1(),
    n.schedule(r, i, o)),
    e
}
, {})
  , d1 = Wo.reduce((e,t)=>(e[t] = Oa[t].cancel,
e), {});
Wo.reduce((e,t)=>(e[t] = ()=>Oa[t].process(vi),
e), {});
const h1 = e=>Oa[e].process(vi)
  , jg = e=>{
    Ro = !1,
    vi.delta = Tc ? xg : Math.max(Math.min(e - vi.timestamp, f1), 1),
    vi.timestamp = e,
    kc = !0,
    Wo.forEach(h1),
    kc = !1,
    Ro && (Tc = !1,
    Hg(jg))
}
  , p1 = ()=>{
    Ro = !0,
    Tc = !0,
    kc || Hg(jg)
}
  , Kg = ()=>vi;
function Yg(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
var Fh = function() {};
const wc = (e,t,n)=>Math.min(Math.max(n, e), t)
  , ll = .001
  , m1 = .01
  , y1 = 10
  , g1 = .05
  , v1 = 1;
function b1({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, s = 1 - t;
    s = wc(g1, v1, s),
    e = wc(m1, y1, e / 1e3),
    s < 1 ? (i = u=>{
        const c = u * s
          , f = c * e
          , d = c - n
          , m = Ac(u, s)
          , b = Math.exp(-f);
        return ll - d / m * b
    }
    ,
    o = u=>{
        const f = u * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(u, 2) * e
          , b = Math.exp(-f)
          , _ = Ac(Math.pow(u, 2), s);
        return (-i(u) + ll > 0 ? -1 : 1) * ((d - m) * b) / _
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -ll + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const a = 5 / e
      , l = E1(i, o, a);
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
const _1 = 12;
function E1(e, t, n) {
    let r = n;
    for (let i = 1; i < _1; i++)
        r = r - e(r) / t(r);
    return r
}
function Ac(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const T1 = ["duration", "bounce"]
  , k1 = ["stiffness", "damping", "mass"];
function Bh(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function S1(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Bh(e, k1) && Bh(e, T1)) {
        const n = b1(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Nu(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: i} = e
      , o = Yg(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: u, velocity: c, duration: f, isResolvedFromDuration: d} = S1(o)
      , m = Uh
      , b = Uh;
    function _() {
        const S = c ? -(c / 1e3) : 0
          , y = n - t
          , E = l / (2 * Math.sqrt(a * u))
          , p = Math.sqrt(a / u) / 1e3;
        if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const g = Ac(p, E);
            m = T=>{
                const w = Math.exp(-E * p * T);
                return n - w * ((S + E * p * y) / g * Math.sin(g * T) + y * Math.cos(g * T))
            }
            ,
            b = T=>{
                const w = Math.exp(-E * p * T);
                return E * p * w * (Math.sin(g * T) * (S + E * p * y) / g + y * Math.cos(g * T)) - w * (Math.cos(g * T) * (S + E * p * y) - g * y * Math.sin(g * T))
            }
        } else if (E === 1)
            m = g=>n - Math.exp(-p * g) * (y + (S + p * y) * g);
        else {
            const g = p * Math.sqrt(E * E - 1);
            m = T=>{
                const w = Math.exp(-E * p * T)
                  , L = Math.min(g * T, 300);
                return n - w * ((S + E * p * y) * Math.sinh(L) + g * y * Math.cosh(L)) / g
            }
        }
    }
    return _(),
    {
        next: S=>{
            const y = m(S);
            if (d)
                s.done = S >= f;
            else {
                const E = b(S) * 1e3
                  , p = Math.abs(E) <= r
                  , g = Math.abs(n - y) <= i;
                s.done = p && g
            }
            return s.value = s.done ? n : y,
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
Nu.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const Uh = e=>0
  , qg = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Vu = (e,t,n)=>-n * e + n * t + e
  , Gg = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , lo = e=>e % 1 ? Number(e.toFixed(5)) : e
  , Io = /(-)?([\d]*\.?[\d])+/g
  , Lc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , w1 = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Jo(e) {
    return typeof e == "string"
}
const zo = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , co = Object.assign(Object.assign({}, zo), {
    transform: Gg(0, 1)
})
  , ps = Object.assign(Object.assign({}, zo), {
    default: 1
})
  , Fu = e=>({
    test: t=>Jo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Dr = Fu("deg")
  , uo = Fu("%")
  , _e = Fu("px")
  , xh = Object.assign(Object.assign({}, uo), {
    parse: e=>uo.parse(e) / 100,
    transform: e=>uo.transform(e * 100)
})
  , Bu = (e,t)=>n=>!!(Jo(n) && w1.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Wg = (e,t,n)=>r=>{
    if (!Jo(r))
        return r;
    const [i,o,s,a] = r.match(Io);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Hr = {
    test: Bu("hsl", "hue"),
    parse: Wg("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + uo.transform(lo(t)) + ", " + uo.transform(lo(n)) + ", " + lo(co.transform(r)) + ")"
}
  , A1 = Gg(0, 255)
  , cl = Object.assign(Object.assign({}, zo), {
    transform: e=>Math.round(A1(e))
})
  , yr = {
    test: Bu("rgb", "red"),
    parse: Wg("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + cl.transform(e) + ", " + cl.transform(t) + ", " + cl.transform(n) + ", " + lo(co.transform(r)) + ")"
};
function L1(e) {
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
const Oc = {
    test: Bu("#"),
    parse: L1,
    transform: yr.transform
}
  , jt = {
    test: e=>yr.test(e) || Oc.test(e) || Hr.test(e),
    parse: e=>yr.test(e) ? yr.parse(e) : Hr.test(e) ? Hr.parse(e) : Oc.parse(e),
    transform: e=>Jo(e) ? e : e.hasOwnProperty("red") ? yr.transform(e) : Hr.transform(e)
}
  , Jg = "${c}"
  , zg = "${n}";
function O1(e) {
    var t, n, r, i;
    return isNaN(e) && Jo(e) && ((n = (t = e.match(Io)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((i = (r = e.match(Lc)) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0) > 0
}
function Qg(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Lc);
    r && (n = r.length,
    e = e.replace(Lc, Jg),
    t.push(...r.map(jt.parse)));
    const i = e.match(Io);
    return i && (e = e.replace(Io, zg),
    t.push(...i.map(zo.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Xg(e) {
    return Qg(e).values
}
function Zg(e) {
    const {values: t, numColors: n, tokenised: r} = Qg(e)
      , i = t.length;
    return o=>{
        let s = r;
        for (let a = 0; a < i; a++)
            s = s.replace(a < n ? Jg : zg, a < n ? jt.transform(o[a]) : lo(o[a]));
        return s
    }
}
const C1 = e=>typeof e == "number" ? 0 : e;
function R1(e) {
    const t = Xg(e);
    return Zg(e)(t.map(C1))
}
const Qo = {
    test: O1,
    parse: Xg,
    createTransformer: Zg,
    getAnimatableNone: R1
}
  , I1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function P1(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Io) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = I1.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const M1 = /([a-z-]*)\(.*?\)/g
  , Cc = Object.assign(Object.assign({}, Qo), {
    getAnimatableNone: e=>{
        const t = e.match(M1);
        return t ? t.map(P1).join(" ") : e
    }
});
function ul(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Hh({hue: e, saturation: t, lightness: n, alpha: r}) {
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
        i = ul(l, a, e + 1 / 3),
        o = ul(l, a, e),
        s = ul(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const D1 = (e,t,n)=>{
    const r = e * e
      , i = t * t;
    return Math.sqrt(Math.max(0, n * (i - r) + r))
}
  , N1 = [Oc, yr, Hr]
  , jh = e=>N1.find(t=>t.test(e))
  , $g = (e,t)=>{
    let n = jh(e)
      , r = jh(t)
      , i = n.parse(e)
      , o = r.parse(t);
    n === Hr && (i = Hh(i),
    n = yr),
    r === Hr && (o = Hh(o),
    r = yr);
    const s = Object.assign({}, i);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = D1(i[l], o[l], a));
        return s.alpha = Vu(i.alpha, o.alpha, a),
        n.transform(s)
    }
}
  , V1 = e=>typeof e == "number"
  , F1 = (e,t)=>n=>t(e(n))
  , ev = (...e)=>e.reduce(F1);
function tv(e, t) {
    return V1(e) ? n=>Vu(e, t, n) : jt.test(e) ? $g(e, t) : rv(e, t)
}
const nv = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((o,s)=>tv(o, t[s]));
    return o=>{
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
  , B1 = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = tv(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
;
function Kh(e) {
    const t = Qo.parse(e)
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
const rv = (e,t)=>{
    const n = Qo.createTransformer(t)
      , r = Kh(e)
      , i = Kh(t);
    return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? ev(nv(r.parsed, i.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , U1 = (e,t)=>n=>Vu(e, t, n);
function x1(e) {
    if (typeof e == "number")
        return U1;
    if (typeof e == "string")
        return jt.test(e) ? $g : rv;
    if (Array.isArray(e))
        return nv;
    if (typeof e == "object")
        return B1
}
function H1(e, t, n) {
    const r = []
      , i = n || x1(e[0])
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = ev(l, a)
        }
        r.push(a)
    }
    return r
}
function j1([e,t], [n]) {
    return r=>n(qg(e, t, r))
}
function K1(e, t) {
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
        const a = qg(e[o], e[o + 1], i);
        return t[o](a)
    }
}
function iv(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    Fh(o === t.length),
    Fh(!r || !Array.isArray(r) || r.length === o - 1),
    e[0] > e[o - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = H1(t, r, i)
      , a = o === 2 ? j1(e, s) : K1(e, s);
    return n ? l=>a(wc(e[0], e[o - 1], l)) : a
}
const Ca = e=>t=>1 - e(1 - t)
  , Uu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Y1 = e=>t=>Math.pow(t, e)
  , ov = e=>t=>t * t * ((e + 1) * t - e)
  , q1 = e=>{
    const t = ov(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , sv = 1.525
  , G1 = 4 / 11
  , W1 = 8 / 11
  , J1 = 9 / 10
  , av = e=>e
  , xu = Y1(2)
  , z1 = Ca(xu)
  , lv = Uu(xu)
  , cv = e=>1 - Math.sin(Math.acos(e))
  , uv = Ca(cv)
  , Q1 = Uu(uv)
  , Hu = ov(sv)
  , X1 = Ca(Hu)
  , Z1 = Uu(Hu)
  , $1 = q1(sv)
  , eI = 4356 / 361
  , tI = 35442 / 1805
  , nI = 16061 / 1805
  , zs = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < G1 ? 7.5625 * t : e < W1 ? 9.075 * t - 9.9 * e + 3.4 : e < J1 ? eI * t - tI * e + nI : 10.8 * e * e - 20.52 * e + 10.72
}
  , rI = Ca(zs)
  , iI = e=>e < .5 ? .5 * (1 - zs(1 - e * 2)) : .5 * zs(e * 2 - 1) + .5;
function oI(e, t) {
    return e.map(()=>t || lv).splice(0, e.length - 1)
}
function sI(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function aI(e, t) {
    return e.map(n=>n * t)
}
function Ts({from: e=0, to: t=1, ease: n, offset: r, duration: i=300}) {
    const o = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = aI(r && r.length === s.length ? r : sI(s), i);
    function l() {
        return iv(a, s, {
            ease: Array.isArray(n) ? n : oI(s, n)
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
function lI({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
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
const Yh = {
    keyframes: Ts,
    spring: Nu,
    decay: lI
};
function cI(e) {
    if (Array.isArray(e.to))
        return Ts;
    if (Yh[e.type])
        return Yh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Ts : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Nu : Ts
}
function fv(e, t, n=0) {
    return e - t - n
}
function uI(e, t, n=0, r=!0) {
    return r ? fv(t + -e, t, n) : t - (e - t) + n
}
function fI(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const dI = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>Sc.update(t, !0),
        stop: ()=>d1.update(t)
    }
}
;
function dv(e) {
    var t, n, {from: r, autoplay: i=!0, driver: o=dI, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: u=0, onPlay: c, onStop: f, onComplete: d, onRepeat: m, onUpdate: b} = e, _ = Yg(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: S} = _, y, E = 0, p = _.duration, g, T = !1, w = !0, L;
    const O = cI(_);
    !((n = (t = O).needsInterpolation) === null || n === void 0) && n.call(t, r, S) && (L = iv([0, 100], [r, S], {
        clamp: !1
    }),
    r = 0,
    S = 100);
    const C = O(Object.assign(Object.assign({}, _), {
        from: r,
        to: S
    }));
    function N() {
        E++,
        l === "reverse" ? (w = E % 2 === 0,
        s = uI(s, p, u, w)) : (s = fv(s, p, u),
        l === "mirror" && C.flipTarget()),
        T = !1,
        m && m()
    }
    function H() {
        y.stop(),
        d && d()
    }
    function B(W) {
        if (w || (W = -W),
        s += W,
        !T) {
            const Y = C.next(Math.max(0, s));
            g = Y.value,
            L && (g = L(g)),
            T = w ? Y.done : s <= 0
        }
        b == null || b(g),
        T && (E === 0 && (p ?? (p = s)),
        E < a ? fI(s, p, u, w) && N() : H())
    }
    function ee() {
        c == null || c(),
        y = o(B),
        y.start()
    }
    return i && ee(),
    {
        stop: ()=>{
            f == null || f(),
            y.stop()
        }
    }
}
function hv(e, t) {
    return t ? e * (1e3 / t) : 0
}
function hI({from: e=0, velocity: t=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: u, driver: c, onUpdate: f, onComplete: d, onStop: m}) {
    let b;
    function _(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function S(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function y(p) {
        b == null || b.stop(),
        b = dv(Object.assign(Object.assign({}, p), {
            driver: c,
            onUpdate: g=>{
                var T;
                f == null || f(g),
                (T = p.onUpdate) === null || T === void 0 || T.call(p, g)
            }
            ,
            onComplete: d,
            onStop: m
        }))
    }
    function E(p) {
        y(Object.assign({
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
        const g = S(p)
          , T = g === n ? -1 : 1;
        let w, L;
        const O = C=>{
            w = L,
            L = C,
            t = hv(C - w, Kg().delta),
            (T === 1 && C > g || T === -1 && C < g) && E({
                from: C,
                to: g,
                velocity: t
            })
        }
        ;
        y({
            type: "decay",
            from: e,
            velocity: t,
            timeConstant: o,
            power: i,
            restDelta: l,
            modifyTarget: u,
            onUpdate: _(p) ? O : void 0
        })
    }
    return {
        stop: ()=>b == null ? void 0 : b.stop()
    }
}
const pv = (e,t)=>1 - 3 * t + 3 * e
  , mv = (e,t)=>3 * t - 6 * e
  , yv = e=>3 * e
  , Qs = (e,t,n)=>((pv(t, n) * e + mv(t, n)) * e + yv(t)) * e
  , gv = (e,t,n)=>3 * pv(t, n) * e * e + 2 * mv(t, n) * e + yv(t)
  , pI = 1e-7
  , mI = 10;
function yI(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Qs(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > pI && ++a < mI);
    return s
}
const gI = 8
  , vI = .001;
function bI(e, t, n, r) {
    for (let i = 0; i < gI; ++i) {
        const o = gv(t, n, r);
        if (o === 0)
            return t;
        const s = Qs(t, n, r) - e;
        t -= s / o
    }
    return t
}
const ks = 11
  , ms = 1 / (ks - 1);
function _I(e, t, n, r) {
    if (e === t && n === r)
        return av;
    const i = new Float32Array(ks);
    for (let s = 0; s < ks; ++s)
        i[s] = Qs(s * ms, e, n);
    function o(s) {
        let a = 0
          , l = 1;
        const u = ks - 1;
        for (; l !== u && i[l] <= s; ++l)
            a += ms;
        --l;
        const c = (s - i[l]) / (i[l + 1] - i[l])
          , f = a + c * ms
          , d = gv(f, e, n);
        return d >= vI ? bI(s, f, e, n) : d === 0 ? f : yI(s, a, a + ms, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Qs(o(s), t, r)
}
const fl = {};
var EI = Object.defineProperty
  , TI = (e,t,n)=>t in e ? EI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , kI = (e,t,n)=>(TI(e, typeof t != "symbol" ? t + "" : t, n),
n);
class SI {
    constructor() {
        kI(this, "subscriptions", new Set)
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
var wI = Object.defineProperty
  , AI = (e,t,n)=>t in e ? wI(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , On = (e,t,n)=>(AI(e, typeof t != "symbol" ? t + "" : t, n),
n);
function qh(e) {
    return !isNaN(parseFloat(e))
}
class LI {
    constructor(t) {
        On(this, "current"),
        On(this, "prev"),
        On(this, "timeDelta", 0),
        On(this, "lastUpdated", 0),
        On(this, "updateSubscribers", new SI),
        On(this, "stopAnimation"),
        On(this, "canTrackVelocity", !1),
        On(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: i} = Kg();
            this.lastUpdated !== i && (this.timeDelta = r,
            this.lastUpdated = i),
            Sc.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        On(this, "scheduleVelocityCheck", ()=>Sc.postRender(this.velocityCheck)),
        On(this, "velocityCheck", ({timestamp: n})=>{
            this.canTrackVelocity || (this.canTrackVelocity = qh(this.current)),
            n !== this.lastUpdated && (this.prev = this.current)
        }
        ),
        this.prev = this.current = t,
        this.canTrackVelocity = qh(this.current)
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
        return this.canTrackVelocity ? hv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
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
function OI(e) {
    return new LI(e)
}
const {isArray: CI} = Array;
function RI() {
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
        const s = OI(i);
        return s.onChange(a=>o[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return o1(t),
    {
        motionValues: e,
        get: n,
        stop: t
    }
}
function II(e) {
    return Array.isArray(e)
}
function Nr() {
    return {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restDelta: .5,
        restSpeed: 10
    }
}
function dl(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function PI(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 100 : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function hl() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function MI(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const Gh = {
    default: PI,
    x: Nr,
    y: Nr,
    z: Nr,
    rotate: Nr,
    rotateX: Nr,
    rotateY: Nr,
    rotateZ: Nr,
    scaleX: dl,
    scaleY: dl,
    scale: dl,
    backgroundColor: hl,
    color: hl,
    opacity: hl
};
function vv(e, t) {
    let n;
    return II(t) ? n = MI : n = Gh[e] || Gh.default,
    {
        to: t,
        ...n(t)
    }
}
const Wh = {
    ...zo,
    transform: Math.round
}
  , bv = {
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
    rotate: Dr,
    rotateX: Dr,
    rotateY: Dr,
    rotateZ: Dr,
    scale: ps,
    scaleX: ps,
    scaleY: ps,
    scaleZ: ps,
    skew: Dr,
    skewX: Dr,
    skewY: Dr,
    distance: _e,
    translateX: _e,
    translateY: _e,
    translateZ: _e,
    x: _e,
    y: _e,
    z: _e,
    perspective: _e,
    transformPerspective: _e,
    opacity: co,
    originX: xh,
    originY: xh,
    originZ: _e,
    zIndex: Wh,
    filter: Cc,
    WebkitFilter: Cc,
    fillOpacity: co,
    strokeOpacity: co,
    numOctaves: Wh
}
  , ju = e=>bv[e];
function _v(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function DI(e, t) {
    let n = ju(e);
    return n !== Cc && (n = Qo),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const NI = {
    linear: av,
    easeIn: xu,
    easeInOut: lv,
    easeOut: z1,
    circIn: cv,
    circInOut: Q1,
    circOut: uv,
    backIn: Hu,
    backInOut: Z1,
    backOut: X1,
    anticipate: $1,
    bounceIn: rI,
    bounceInOut: iI,
    bounceOut: zs
};
function Jh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,i] = e;
        return _I(t, n, r, i)
    } else if (typeof e == "string")
        return NI[e];
    return e
}
function VI(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function zh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Qo.test(t) && !t.startsWith("url("))
}
function FI(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function BI({ease: e, times: t, delay: n, ...r}) {
    const i = {
        ...r
    };
    return t && (i.offset = t),
    e && (i.ease = VI(e) ? e.map(Jh) : Jh(e)),
    n && (i.elapsed = -n),
    i
}
function UI(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    FI(t),
    xI(e) || (e = {
        ...e,
        ...vv(n, t.to)
    }),
    {
        ...t,
        ...BI(e)
    }
}
function xI({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: i, ...o}) {
    return !!Object.keys(o).length
}
function HI(e, t) {
    return e[t] || e.default || e
}
function jI(e, t, n, r, i) {
    const o = HI(r, e);
    let s = o.from === null || o.from === void 0 ? t.get() : o.from;
    const a = zh(e, n);
    s === "none" && a && typeof n == "string" && (s = DI(e, n));
    const l = zh(e, s);
    function u(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return o.type === "inertia" || o.type === "decay" ? hI({
            ...d,
            ...o
        }) : dv({
            ...UI(o, d, e),
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
function KI() {
    const {motionValues: e, stop: t, get: n} = RI();
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
            const f = jI(i, c, o, a, l);
            c.start(f)
        }
    }
}
function YI(e, t={}, {motionValues: n, push: r, stop: i}=KI()) {
    const o = J(t)
      , s = ce(!1);
    qe(n, f=>{
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
            return new Promise(b=>r(d, m, e, f.transition || vv(d, f[d]), b))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = Js(f) ? f : a(f);
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
const Ku = typeof window < "u"
  , qI = ()=>Ku && window.onpointerdown === null
  , GI = ()=>Ku && window.ontouchstart === null
  , WI = ()=>Ku && window.onmousedown === null;
function JI({target: e, state: t, variants: n, apply: r}) {
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
    i.tapped && (WI() && (xt(e, "mousedown", ()=>s.value = !0),
    xt(e, "mouseup", ()=>s.value = !1)),
    qI() && (xt(e, "pointerdown", ()=>s.value = !0),
    xt(e, "pointerup", ()=>s.value = !1)),
    GI() && (xt(e, "touchstart", ()=>s.value = !0),
    xt(e, "touchend", ()=>s.value = !1))),
    i.focused && (xt(e, "focus", ()=>a.value = !0),
    xt(e, "blur", ()=>a.value = !1)),
    qe(u, r)
}
function zI({set: e, target: t, variants: n, variant: r}) {
    const i = J(n);
    qe(()=>t, ()=>{
        i && (i.initial && e("initial"),
        i.enter && (r.value = "enter"))
    }
    , {
        immediate: !0,
        flush: "pre"
    })
}
function QI({state: e, apply: t}) {
    qe(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function Ev({target: e, variants: t, variant: n}) {
    const r = J(t);
    r && (r.visible || r.visibleOnce) && l1(e, ([{isIntersecting: i}])=>{
        r.visible ? i ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (i && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function XI(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && zI(e),
    t.syncVariants && QI(e),
    t.visibilityHooks && Ev(e),
    t.eventListeners && JI(e)
}
function Tv(e={}) {
    const t = Lt({
        ...e
    })
      , n = ce({});
    return qe(t, ()=>{
        const r = {};
        for (const [i,o] of Object.entries(t)) {
            const s = ju(i)
              , a = _v(o, s);
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
function Yu(e, t) {
    qe(()=>ao(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const ZI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function kv(e={}, t=!0) {
    const n = Lt({
        ...e
    })
      , r = ce("");
    return qe(n, i=>{
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
            const u = ju(a)
              , c = _v(l, u);
            o += `${ZI[a] || a}(${c}) `
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
const $I = ["", "X", "Y", "Z"]
  , eP = ["perspective", "translate", "scale", "rotate", "skew"]
  , Sv = ["transformPerspective", "x", "y", "z"];
eP.forEach(e=>{
    $I.forEach(t=>{
        const n = e + t;
        Sv.push(n)
    }
    )
}
);
const tP = new Set(Sv);
function qu(e) {
    return tP.has(e)
}
const nP = new Set(["originX", "originY", "originZ"]);
function wv(e) {
    return nP.has(e)
}
function rP(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,i])=>{
        qu(r) || wv(r) ? t[r] = i : n[r] = i
    }
    ),
    {
        transform: t,
        style: n
    }
}
function Av(e) {
    const {transform: t, style: n} = rP(e)
      , {transform: r} = kv(t)
      , {style: i} = Tv(n);
    return r.value && (i.value.transform = r.value),
    i.value
}
function iP(e, t) {
    let n, r;
    const {state: i, style: o} = Tv();
    return Yu(e, s=>{
        r = s;
        for (const a of Object.keys(bv))
            s.style[a] === null || s.style[a] === "" || qu(a) || wv(a) || (i[a] = s.style[a]);
        n && Object.entries(n).forEach(([a,l])=>s.style[a] = l),
        t && t(i)
    }
    ),
    qe(o, s=>{
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
function oP(e) {
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
function sP(e, t) {
    Object.entries(oP(t)).forEach(([n,r])=>{
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
function aP(e, t) {
    let n, r;
    const {state: i, transform: o} = kv();
    return Yu(e, s=>{
        r = s,
        s.style.transform && sP(i, s.style.transform),
        n && (s.style.transform = n),
        t && t(i)
    }
    ),
    qe(o, s=>{
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
function lP(e, t) {
    const n = Lt({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: i} = iP(e, r)
      , {transform: o} = aP(e, r);
    return qe(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const u = qu(a) ? o : i;
            u[a] && u[a] === l || (u[a] = l)
        }
        )
    }
    , {
        immediate: !0,
        deep: !0
    }),
    Yu(e, ()=>t && r(t)),
    {
        motionProperties: n,
        style: i,
        transform: o
    }
}
function cP(e={}) {
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
function Lv(e, t={}, n) {
    const {motionProperties: r} = lP(e)
      , {variant: i, state: o} = cP(t)
      , s = YI(r, t)
      , a = {
        target: e,
        variant: i,
        variants: t,
        state: o,
        motionProperties: r,
        ...s
    };
    return XI(a, n),
    a
}
const uP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function fP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && Js(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    uP.forEach(r=>{
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
        if (n && n[r] && Js(n[r])) {
            const i = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = i
        }
    }
    ))
}
function pl(e) {
    return {
        created: (r,i,o)=>{
            const s = i.value && typeof i.value == "string" ? i.value : o.key;
            s && fl[s] && fl[s].stop();
            const a = ce(e || {});
            typeof i.value == "object" && (a.value = i.value),
            fP(o, a);
            const u = Lv(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = u,
            s && (fl[s] = u)
        }
        ,
        mounted: (r,i,o)=>{
            r.motionInstance && Ev(r.motionInstance)
        }
        ,
        getSSRProps(r, i) {
            let {initial: o} = r.value || i && (i == null ? void 0 : i.props) || {};
            o = J(o);
            const s = lu((e == null ? void 0 : e.initial) || {}, o || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: Av(s)
            }
        }
    }
}
const dP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , hP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , pP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , mP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , yP = {
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
  , vP = {
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
  , bP = {
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
  , _P = {
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
  , EP = {
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
  , TP = {
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
  , kP = {
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
  , SP = {
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
  , wP = {
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
  , AP = {
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
  , LP = {
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
  , OP = {
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
  , RP = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , IP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , PP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , MP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , DP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , NP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , VP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , FP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , BP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , UP = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , xP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , HP = {
    initial: {
        y: 100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , Rc = {
    __proto__: null,
    fade: dP,
    fadeVisible: hP,
    fadeVisibleOnce: pP,
    pop: mP,
    popVisible: yP,
    popVisibleOnce: gP,
    rollBottom: LP,
    rollLeft: vP,
    rollRight: EP,
    rollTop: SP,
    rollVisibleBottom: OP,
    rollVisibleLeft: bP,
    rollVisibleOnceBottom: CP,
    rollVisibleOnceLeft: _P,
    rollVisibleOnceRight: kP,
    rollVisibleOnceTop: AP,
    rollVisibleRight: TP,
    rollVisibleTop: wP,
    slideBottom: UP,
    slideLeft: RP,
    slideRight: MP,
    slideTop: VP,
    slideVisibleBottom: xP,
    slideVisibleLeft: IP,
    slideVisibleOnceBottom: HP,
    slideVisibleOnceLeft: PP,
    slideVisibleOnceRight: NP,
    slideVisibleOnceTop: BP,
    slideVisibleRight: DP,
    slideVisibleTop: FP
}
  , jP = xe({
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
        const t = X0()
          , n = Lt({});
        if (!e.is && !t.default)
            return ()=>ht("div", {});
        const r = fe(()=>{
            let l;
            return e.preset && (l = Rc[e.preset]),
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
            return typeof s.value == "string" && !Uv(l) && (l = Jr(l)),
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
            Zc(()=>Object.entries(n).forEach(([u,c])=>l(c)))
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
        const i = Av(t.initial || {})
          , o = (l,u)=>(l.props || (l.props = {}),
        l.props.style = i,
        l.props.onVnodeMounted = ({el: c})=>{
            const f = Lv(c, t);
            n[u] = f
        }
        ,
        l);
        if (r) {
            const l = ht(r, void 0, e);
            return o(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,u)=>o(l, u))
    }
});
function KP(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, i=>`-${i}`).toLowerCase().replace(/\s+/g, "-").replace(r, i=>n.charAt(t.indexOf(i))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const YP = {
    install(e, t) {
        if (e.directive("motion", pl()),
        e.component("Motion", jP),
        !t || t && !t.excludePresets)
            for (const n in Rc) {
                const r = Rc[n];
                e.directive(`motion-${KP(n)}`, pl(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, pl(r))
            }
    }
}
  , qP = Bt(e=>{
    const t = Qn();
    e.vueApp.use(YP, t.public.motion)
}
)
  , GP = Bt({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Xt()
          , n = Qn()
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
            const a = "href"in o && o.href[0] === "#" ? n.app.baseURL + o.href : Mi(n.app.baseURL, o.fullPath);
            pC({
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
function WP(e) {
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
const JP = Bt(()=>{
    const e = WP();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , zP = [qT, WT, uC, dC, hC, vC, bC, _C, YC, GR, WR, $R, qP, GP, JP]
  , QP = xe({
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
        return qr(xo, Ii(r)),
        ()=>ht(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , XP = xe({
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
        const r = $()
          , i = ce()
          , o = At(xo, null);
        let s;
        n({
            pageRef: i
        });
        const a = At(Am, null);
        let l;
        const u = r.deferHydration();
        if (r.isHydrating) {
            const c = r.hooks.hookOnce("app:error", u);
            Xt().beforeEach(c)
        }
        return e.pageKey && qe(()=>e.pageKey, (c,f)=>{
            c !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>ht(ry, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: c=>{
                const f = $P(o, c.route, c.Component)
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
                const m = Xl(c, e.pageKey);
                !r.isHydrating && !eM(o, c.route, c.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const b = !!(e.transition ?? c.route.meta.pageTransition ?? Wl)
                  , _ = b && ZP([e.transition, c.route.meta.pageTransition, Wl, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", c.Component)
                    }
                }].filter(Boolean))
                  , S = e.keepalive ?? c.route.meta.keepalive ?? FT;
                return l = iy(Fo, b && _, Zk(S, ht(zc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", c.Component),
                    onResolve: ()=>{
                        zt(()=>r.callHook("page:finish", c.Component).then(()=>r.callHook("page:loading:end")).finally(u))
                    }
                }, {
                    default: ()=>{
                        const y = ht(QP, {
                            key: m || void 0,
                            vnode: c.Component,
                            route: c.route,
                            renderKey: m || void 0,
                            trackRootNodes: b,
                            vnodeRef: i
                        });
                        return S && (y.type.name = c.Component.type.name || c.Component.type.__name || "RouteProvider"),
                        y
                    }
                }))).default(),
                l
            }
        })
    }
});
function ZP(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? pu(n.onAfterLeave) : void 0
    }));
    return lu(...t)
}
function $P(e, t, n) {
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
    ) || n && Xl({
        route: t,
        Component: n
    }) !== Xl({
        route: e,
        Component: n
    })
}
function eM(e, t, n) {
    return e ? t.matched.findIndex(i=>{
        var o;
        return ((o = i.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const tM = xe({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await mr[e.name]().then(r=>r.default || r);
        return ()=>ht(n, e.layoutProps, t.slots)
    }
})
  , nM = xe({
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
        const n = $()
          , r = At(xo)
          , i = r === ua() ? Qk() : r
          , o = fe(()=>{
            let l = J(e.name) ?? i.meta.layout ?? "default";
            return l && !(l in mr) && e.fallback && (l = J(e.fallback)),
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
            const l = o.value && o.value in mr
              , u = i.meta.layoutTransition ?? VT;
            return iy(Fo, l && u, {
                default: ()=>ht(zc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        zt(a)
                    }
                }, {
                    default: ()=>ht(rM, {
                        layoutProps: Ei(t.attrs, {
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
  , rM = xe({
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
        return e.shouldProvide && qr(Am, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, i;
            return !n || typeof n == "string" && !(n in mr) ? (i = (r = t.slots).default) == null ? void 0 : i.call(r) : ht(tM, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , iM = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , oM = {};
function sM(e, t) {
    const n = XP
      , r = nM;
    return me(),
    Tt(r, null, {
        default: dn(()=>[tt(n)]),
        _: 1
    })
}
const aM = iM(oM, [["render", sM]])
  , lM = ["innerHTML"]
  , cM = xe({
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
          , o = r.name && ([t,n] = $0(()=>{
            var s;
            return (s = i == null ? void 0 : i[r.name]) == null ? void 0 : s.call(i)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>J(o) ? (me(),
        Qe("div", {
            key: 0,
            class: "icon",
            innerHTML: J(o)
        }, null, 8, lM)) : Jt("", !0)
    }
})
  , uM = {
    class: "is-token"
}
  , fM = ["srcset", "alt"]
  , dM = ["src", "alt"]
  , hM = xe({
    __name: "Token",
    setup(e) {
        return (t,n)=>(me(),
        Qe("picture", uM, [ye("source", {
            srcset: J(uc).TOKEN_WEBP,
            type: "image/webp",
            alt: J(en).GAME_NAME
        }, null, 8, fM), ye("img", {
            class: "img-responsive",
            src: J(uc).TOKEN,
            alt: J(en).GAME_NAME
        }, null, 8, dM)]))
    }
})
  , Qh = rg({
    componentName: "NuxtLinkLocale"
})
  , pM = xe({
    name: "NuxtLinkLocale",
    props: {
        ...Qh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = Jy()
          , r = fe(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , i = fe(()=>{
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
        return ()=>ht(Qh, o(), t.default)
    }
});
function mM() {
    return Hn
}
const yM = {
    class: "ln"
}
  , gM = {
    class: "ln-header"
}
  , vM = {
    class: "ln-header-left"
}
  , bM = {
    class: "ln-header-social"
}
  , _M = ["href"]
  , EM = ["href"]
  , TM = ["innerHTML"]
  , kM = {
    class: "ln-header-center"
}
  , SM = {
    class: "ln-header-center-logo"
}
  , wM = {
    class: "ln-header-right"
}
  , AM = {
    class: "button"
}
  , LM = ["innerHTML"]
  , OM = ye("span", null, "coming soon", -1)
  , CM = {
    class: "ln-content"
}
  , RM = {
    key: 0
}
  , IM = {
    class: "is-small-text"
}
  , PM = {
    key: 1,
    class: "is-small-text"
}
  , MM = {
    key: 2,
    class: "is-small-text"
}
  , DM = {
    class: "ln-content-button"
}
  , NM = ["innerHTML"]
  , VM = ye("div", {
    class: "ln-bottom"
}, null, -1)
  , FM = xe({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var s;
        const t = Kt()
          , n = e;
        IT({
            title: `${((s = n.error) == null ? void 0 : s.statusCode) ?? 500} - ${en.GAME_NAME}`
        });
        const r = ce("")
          , i = mM()
          , o = ce(i.tz.guess());
        return Ft(()=>{
            r.value = navigator.userAgent,
            setTimeout(()=>{
                var a;
                Ee().trackEvent(`error_${((a = n.error) == null ? void 0 : a.statusCode) ?? 500}`, {
                    timezone: o.value,
                    userAgent: r.value
                })
            }
            , 1e3)
        }
        ),
        (a,l)=>{
            var d, m, b;
            const u = cM
              , c = hM
              , f = pM;
            return me(),
            Qe("main", yM, [ye("div", gM, [ye("div", vM, [ye("div", bM, [ye("a", {
                class: "is-x",
                href: J(t).link_twitter,
                target: "_blank"
            }, [tt(u, {
                name: "ln-x"
            })], 8, _M), ye("a", {
                class: "is-telegram",
                href: J(t).link_telegram,
                target: "_blank"
            }, [tt(u, {
                name: "ln-telegram"
            })], 8, EM), ye("p", {
                innerHTML: a.$t("landing.join_us")
            }, null, 8, TM)])]), ye("div", kM, [ye("div", SM, [tt(c)]), ye("p", null, tn(J(en).GAME_NAME), 1)]), ye("div", wM, [ye("button", AM, [ye("p", {
                innerHTML: a.$t("landing.whitepaper")
            }, null, 8, LM), tt(u, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), OM])])]), ye("div", CM, [ye("h1", null, tn(e.error.statusCode ?? 500), 1), (d = e.error) != null && d.statusMessage ? (me(),
            Qe("p", RM, "Status: " + tn(((m = e.error) == null ? void 0 : m.statusMessage) ?? ""), 1)) : Jt("", !0), ye("p", IM, tn((b = e.error) == null ? void 0 : b.toJSON()), 1), J(r) ? (me(),
            Qe("p", PM, "User Agent: " + tn(J(r)), 1)) : Jt("", !0), J(o) ? (me(),
            Qe("p", MM, "TimeZone: " + tn(J(o)), 1)) : Jt("", !0), ye("div", DM, [tt(f, {
                class: "button",
                to: J(Yo).LANDING
            }, {
                default: dn(()=>[ye("span", {
                    innerHTML: a.$t("buttons.home")
                }, null, 8, NM)]),
                _: 1
            }, 8, ["to"])])]), VM])
        }
    }
})
  , Xh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = $()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            Xt().beforeEach(a)
        }
        const i = !1;
        qr(xo, ua()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const o = fa();
        Up((a,l,u)=>{
            if (n.hooks.callHook("vue:error", a, l, u).catch(c=>console.error("[nuxt] Error in `vue:error` hook", c)),
            NE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>li(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(me(),
        Tt(zc, {
            onResolve: J(r)
        }, {
            default: dn(()=>[J(o) ? (me(),
            Tt(J(FM), {
                key: 0,
                error: J(o)
            }, null, 8, ["error"])) : J(s) ? (me(),
            Tt(J(t), {
                key: 1,
                context: J(s)
            }, null, 8, ["context"])) : J(i) ? (me(),
            Tt(El(J(i)), {
                key: 2
            })) : (me(),
            Tt(J(aM), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Zh;
{
    let e;
    Zh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? a_(Xh) : cm(Xh)
          , i = fE({
            vueApp: r
        });
        async function o(l) {
            await i.callHook("app:error", l),
            i.payload.error = i.payload.error || da(l)
        }
        r.config.errorHandler = o;
        try {
            await hE(i, zP)
        } catch (l) {
            o(l)
        }
        try {
            await i.hooks.callHook("app:created", r),
            await i.hooks.callHook("app:beforeMount", r),
            r.mount(UT),
            await i.hooks.callHook("app:mounted", r),
            await zt()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = Zh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {pM as $, FL as A, rD as B, en as C, tg as D, wt as E, gt as F, un as G, $ as H, LL as I, Kt as J, mt as K, Jt as L, nD as M, Jy as N, IT as O, Ho as P, xL as Q, HL as R, tm as S, OL as T, Yo as U, ML as V, JM as W, iM as X, fc as Y, KO as Z, cM as _, ye as a, CL as a0, zM as a1, QM as a2, DL as a3, pn as a4, Ke as a5, So as a6, Dn as a7, Fy as a8, XM as a9, eD as aA, kr as aB, uc as aC, Qn as aD, xM as aE, Vm as aF, Pi as aG, nt as aH, iD as aI, Fo as aJ, El as aK, Ei as aL, Lv as aM, GM as aN, YL as aO, XP as aP, YM as aQ, tD as aR, WM as aS, qM as aT, $M as aU, ZM as aa, dn as ab, fh as ac, jM as ad, ut as ae, KM as af, il as ag, eo as ah, NL as ai, VL as aj, k as ak, PL as al, $0 as am, IL as an, RL as ao, BL as ap, Lt as aq, ua as ar, qr as as, Zc as at, qe as au, zt as av, ht as aw, q0 as ax, Jr as ay, UL as az, tt as b, Qe as c, xe as d, Tt as e, Ee as f, fe as g, ce as h, Ft as i, Sn as j, BM as k, J as l, Nn as m, Nt as n, me as o, mM as p, hM as q, z0 as r, Ct as s, tn as t, Rt as u, HM as v, UM as w, va as x, _t as y, Ni as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["https://hamsterkombatgame.io/_nuxt/ads.eEZHV363.js", "https://hamsterkombatgame.io/_nuxt/LandingHeader.vue.BvGLgOPA.js", "https://hamsterkombatgame.io/_nuxt/AvatarImage.vue.MiEKDTU_.js", "https://hamsterkombatgame.io/_nuxt/index.DuZsGQKT.js", "https://hamsterkombatgame.io/_nuxt/airdrop.CWKWv3eO.js", "https://hamsterkombatgame.io/_nuxt/Image.vue.C5fXcAtg.js", "https://hamsterkombatgame.io/_nuxt/Preloader.vue.Cy2YM6fZ.js", "https://hamsterkombatgame.io/_nuxt/okx.Zf6YZDtU.js", "https://hamsterkombatgame.io/_nuxt/boost.BW0BJtSb.js", "https://hamsterkombatgame.io/_nuxt/BalanceLarge.vue.B8jJpVtO.js", "https://hamsterkombatgame.io/_nuxt/coin.bnMVI_DG.js", "https://hamsterkombatgame.io/_nuxt/Price.vue.BVKUP3aP.js", "https://hamsterkombatgame.io/_nuxt/earn.BG3gtRVr.js", "https://hamsterkombatgame.io/_nuxt/attraction.C757zV5N.js", "https://hamsterkombatgame.io/_nuxt/friends.DPgmHma_.js", "https://hamsterkombatgame.io/_nuxt/index.BLghQ1Zy.js", "https://hamsterkombatgame.io/_nuxt/Earn.vue.BI49RJc8.js", "https://hamsterkombatgame.io/_nuxt/image.vue.BoP7kRwy.js", "https://hamsterkombatgame.io/_nuxt/Hamster.vue.U3vfpnxO.js", "https://hamsterkombatgame.io/_nuxt/MiniGameNotSupported.vue.BQ-5lFHT.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.CJEgGqHr.js", "https://hamsterkombatgame.io/_nuxt/effect-fade.vkSr05gD.css", "https://hamsterkombatgame.io/_nuxt/MiniGameNotSupported.Bw5XmvsK.css", "https://hamsterkombatgame.io/_nuxt/Countdown.vue.DeG70mtK.js", "https://hamsterkombatgame.io/_nuxt/MiniGameLose.vue.Di5jbvnB.js", "https://hamsterkombatgame.io/_nuxt/index.DuMt0Xpl.js", "https://hamsterkombatgame.io/_nuxt/mine.BzSZXkqi.js", "https://hamsterkombatgame.io/_nuxt/playground.1YH_5bP4.js", "https://hamsterkombatgame.io/_nuxt/bingx.DvMJkIUf.js", "https://hamsterkombatgame.io/_nuxt/exchange.SiutZD8d.js", "https://hamsterkombatgame.io/_nuxt/index.DjvCi7Si.js", "https://hamsterkombatgame.io/_nuxt/achievements.DZjqiosf.js", "https://hamsterkombatgame.io/_nuxt/AchievementStat.vue.6S4-RGdN.js", "https://hamsterkombatgame.io/_nuxt/Circles.vue.DsvmUDqP.js", "https://hamsterkombatgame.io/_nuxt/index.CNjdzKW1.js", "https://hamsterkombatgame.io/_nuxt/index.BtptDq3V.js", "https://hamsterkombatgame.io/_nuxt/privacy-policy.BafkDBWU.js", "https://hamsterkombatgame.io/_nuxt/default.D0w9QYqJ.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
