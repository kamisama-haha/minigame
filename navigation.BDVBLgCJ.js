import {d as H, r as F, q as E, ap as q, a as G, a0 as R, a1 as O, i as _} from "./entry.Dv1IsjD4.js";
import {m as y, e as K, b as D, c as j, d as N} from "./effect-fade.aa3pNKSS.js";
const U = Symbol.for("nuxt:client-only")
  , J = H({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(l, {slots: e, attrs: C}) {
        const d = F(!1);
        return E(()=>{
            d.value = !0
        }
        ),
        q(U, !0),
        u=>{
            var L;
            if (d.value)
                return (L = e.default) == null ? void 0 : L.call(e);
            const o = e.fallback || e.placeholder;
            if (o)
                return o();
            const b = u.fallback || u.placeholder || ""
              , h = u.fallbackTag || u.placeholderTag || "span";
            return G(h, C, b)
        }
    }
})
  , Q = R("promo", {
    state: ()=>({
        promos: [],
        states: []
    }),
    actions: {
        async postGetPromos() {
            return await O.post("/clicker/get-promos", {}).then(l=>{
                try {
                    if (l) {
                        const {promos: e, states: C} = l;
                        this.setPromos(e),
                        this.setStates(C)
                    }
                } catch (e) {
                    console.log(e)
                }
                return l
            }
            )
        },
        async postApplyPromocode(l) {
        return await O.post("/clicker/apply-promo", {
            body: {
                promoCode: l
            }
        }).then(e => {
            console.log('Server response:', e); // 打印服务器返回的成功响应数据
            _().setUserResponseData(e); // 处理服务器返回的数据
            this.setSingleState(e.promoState); // 更新 Vuex 状态
            return e; // 返回响应数据
        }).catch(error => {
            console.error('Error response:', error); // 打印错误响应数据
            // 可以在这里处理错误，例如显示错误消息或更新状态
            if (error.response && error.response.data) {
                console.error('Error data:', error.response.data); // 打印详细错误信息
            }
            throw error; // 将错误重新抛出，以便在调用方处理
        })
}

        },
        setPromos(l) {
            this.promos = l
        },
        setStates(l) {
            this.states = l
        },
        setSingleState(l) {
            this.states.length === 0 && (this.states = [l]),
            this.states = this.states.map(e=>e.promoId === l.promoId ? l : e)
        },
        getReceiveKeysToday(l) {
            var C;
            const e = (C = this.states) == null ? void 0 : C.find(d=>d.promoId === l);
            return !e || !e.receiveKeysToday ? 0 : e.receiveKeysToday
        }
    }
});
function S(l) {
    return l === void 0 && (l = ""),
    `.${l.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function V(l) {
    let {swiper: e, extendParams: C, on: d, emit: u} = l;
    const o = "swiper-pagination";
    C({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: a=>a,
            formatFractionTotal: a=>a,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let b, h = 0;
    function L() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function B(a, t) {
        const {bulletActiveClass: s} = e.params.pagination;
        a && (a = a[`${t === "prev" ? "previous" : "next"}ElementSibling`],
        a && (a.classList.add(`${s}-${t}`),
        a = a[`${t === "prev" ? "previous" : "next"}ElementSibling`],
        a && a.classList.add(`${s}-${t}-${t}`)))
    }
    function z(a) {
        const t = a.target.closest(S(e.params.pagination.bulletClass));
        if (!t)
            return;
        a.preventDefault();
        const s = D(t) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === s)
                return;
            e.slideToLoop(s)
        } else
            e.slideTo(s)
    }
    function v() {
        const a = e.rtl
          , t = e.params.pagination;
        if (L())
            return;
        let s = e.pagination.el;
        s = y(s);
        let i, f;
        const $ = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , P = e.params.loop ? Math.ceil($ / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (f = e.previousRealIndex || 0,
        i = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (i = e.snapIndex,
        f = e.previousSnapIndex) : (f = e.previousIndex || 0,
        i = e.activeIndex || 0),
        t.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const n = e.pagination.bullets;
            let g, m, k;
            if (t.dynamicBullets && (b = K(n[0], e.isHorizontal() ? "width" : "height", !0),
            s.forEach(r=>{
                r.style[e.isHorizontal() ? "width" : "height"] = `${b * (t.dynamicMainBullets + 4)}px`
            }
            ),
            t.dynamicMainBullets > 1 && f !== void 0 && (h += i - (f || 0),
            h > t.dynamicMainBullets - 1 ? h = t.dynamicMainBullets - 1 : h < 0 && (h = 0)),
            g = Math.max(i - h, 0),
            m = g + (Math.min(n.length, t.dynamicMainBullets) - 1),
            k = (m + g) / 2),
            n.forEach(r=>{
                const c = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(p=>`${t.bulletActiveClass}${p}`)].map(p=>typeof p == "string" && p.includes(" ") ? p.split(" ") : p).flat();
                r.classList.remove(...c)
            }
            ),
            s.length > 1)
                n.forEach(r=>{
                    const c = D(r);
                    c === i ? r.classList.add(...t.bulletActiveClass.split(" ")) : e.isElement && r.setAttribute("part", "bullet"),
                    t.dynamicBullets && (c >= g && c <= m && r.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),
                    c === g && B(r, "prev"),
                    c === m && B(r, "next"))
                }
                );
            else {
                const r = n[i];
                if (r && r.classList.add(...t.bulletActiveClass.split(" ")),
                e.isElement && n.forEach((c,p)=>{
                    c.setAttribute("part", p === i ? "bullet-active" : "bullet")
                }
                ),
                t.dynamicBullets) {
                    const c = n[g]
                      , p = n[m];
                    for (let x = g; x <= m; x += 1)
                        n[x] && n[x].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
                    B(c, "prev"),
                    B(p, "next")
                }
            }
            if (t.dynamicBullets) {
                const r = Math.min(n.length, t.dynamicMainBullets + 4)
                  , c = (b * r - b) / 2 - k * b
                  , p = a ? "right" : "left";
                n.forEach(x=>{
                    x.style[e.isHorizontal() ? p : "top"] = `${c}px`
                }
                )
            }
        }
        s.forEach((n,g)=>{
            if (t.type === "fraction" && (n.querySelectorAll(S(t.currentClass)).forEach(m=>{
                m.textContent = t.formatFractionCurrent(i + 1)
            }
            ),
            n.querySelectorAll(S(t.totalClass)).forEach(m=>{
                m.textContent = t.formatFractionTotal(P)
            }
            )),
            t.type === "progressbar") {
                let m;
                t.progressbarOpposite ? m = e.isHorizontal() ? "vertical" : "horizontal" : m = e.isHorizontal() ? "horizontal" : "vertical";
                const k = (i + 1) / P;
                let r = 1
                  , c = 1;
                m === "horizontal" ? r = k : c = k,
                n.querySelectorAll(S(t.progressbarFillClass)).forEach(p=>{
                    p.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${c})`,
                    p.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            t.type === "custom" && t.renderCustom ? (n.innerHTML = t.renderCustom(e, i + 1, P),
            g === 0 && u("paginationRender", n)) : (g === 0 && u("paginationRender", n),
            u("paginationUpdate", n)),
            e.params.watchOverflow && e.enabled && n.classList[e.isLocked ? "add" : "remove"](t.lockClass)
        }
        )
    }
    function A() {
        const a = e.params.pagination;
        if (L())
            return;
        const t = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let s = e.pagination.el;
        s = y(s);
        let i = "";
        if (a.type === "bullets") {
            let f = e.params.loop ? Math.ceil(t / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && f > t && (f = t);
            for (let $ = 0; $ < f; $ += 1)
                a.renderBullet ? i += a.renderBullet.call(e, $, a.bulletClass) : i += `<${a.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${a.bulletClass}"></${a.bulletElement}>`
        }
        a.type === "fraction" && (a.renderFraction ? i = a.renderFraction.call(e, a.currentClass, a.totalClass) : i = `<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),
        a.type === "progressbar" && (a.renderProgressbar ? i = a.renderProgressbar.call(e, a.progressbarFillClass) : i = `<span class="${a.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        s.forEach(f=>{
            a.type !== "custom" && (f.innerHTML = i || ""),
            a.type === "bullets" && e.pagination.bullets.push(...f.querySelectorAll(S(a.bulletClass)))
        }
        ),
        a.type !== "custom" && u("paginationRender", s[0])
    }
    function I() {
        e.params.pagination = j(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const a = e.params.pagination;
        if (!a.el)
            return;
        let t;
        typeof a.el == "string" && e.isElement && (t = e.el.querySelector(a.el)),
        !t && typeof a.el == "string" && (t = [...document.querySelectorAll(a.el)]),
        t || (t = a.el),
        !(!t || t.length === 0) && (e.params.uniqueNavElements && typeof a.el == "string" && Array.isArray(t) && t.length > 1 && (t = [...e.el.querySelectorAll(a.el)],
        t.length > 1 && (t = t.filter(s=>N(s, ".swiper")[0] === e.el)[0])),
        Array.isArray(t) && t.length === 1 && (t = t[0]),
        Object.assign(e.pagination, {
            el: t
        }),
        t = y(t),
        t.forEach(s=>{
            a.type === "bullets" && a.clickable && s.classList.add(...(a.clickableClass || "").split(" ")),
            s.classList.add(a.modifierClass + a.type),
            s.classList.add(e.isHorizontal() ? a.horizontalClass : a.verticalClass),
            a.type === "bullets" && a.dynamicBullets && (s.classList.add(`${a.modifierClass}${a.type}-dynamic`),
            h = 0,
            a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
            a.type === "progressbar" && a.progressbarOpposite && s.classList.add(a.progressbarOppositeClass),
            a.clickable && s.addEventListener("click", z),
            e.enabled || s.classList.add(a.lockClass)
        }
        ))
    }
    function M() {
        const a = e.params.pagination;
        if (L())
            return;
        let t = e.pagination.el;
        t && (t = y(t),
        t.forEach(s=>{
            s.classList.remove(a.hiddenClass),
            s.classList.remove(a.modifierClass + a.type),
            s.classList.remove(e.isHorizontal() ? a.horizontalClass : a.verticalClass),
            a.clickable && (s.classList.remove(...(a.clickableClass || "").split(" ")),
            s.removeEventListener("click", z))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(s=>s.classList.remove(...a.bulletActiveClass.split(" ")))
    }
    d("changeDirection", ()=>{
        if (!e.pagination || !e.pagination.el)
            return;
        const a = e.params.pagination;
        let {el: t} = e.pagination;
        t = y(t),
        t.forEach(s=>{
            s.classList.remove(a.horizontalClass, a.verticalClass),
            s.classList.add(e.isHorizontal() ? a.horizontalClass : a.verticalClass)
        }
        )
    }
    ),
    d("init", ()=>{
        e.params.pagination.enabled === !1 ? T() : (I(),
        A(),
        v())
    }
    ),
    d("activeIndexChange", ()=>{
        typeof e.snapIndex > "u" && v()
    }
    ),
    d("snapIndexChange", ()=>{
        v()
    }
    ),
    d("snapGridLengthChange", ()=>{
        A(),
        v()
    }
    ),
    d("destroy", ()=>{
        M()
    }
    ),
    d("enable disable", ()=>{
        let {el: a} = e.pagination;
        a && (a = y(a),
        a.forEach(t=>t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    d("lock unlock", ()=>{
        v()
    }
    ),
    d("click", (a,t)=>{
        const s = t.target
          , i = y(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && i && i.length > 0 && !s.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && s === e.navigation.nextEl || e.navigation.prevEl && s === e.navigation.prevEl))
                return;
            const f = i[0].classList.contains(e.params.pagination.hiddenClass);
            u(f === !0 ? "paginationShow" : "paginationHide"),
            i.forEach($=>$.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const w = ()=>{
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: a} = e.pagination;
        a && (a = y(a),
        a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),
        I(),
        A(),
        v()
    }
      , T = ()=>{
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: a} = e.pagination;
        a && (a = y(a),
        a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),
        M()
    }
    ;
    Object.assign(e.pagination, {
        enable: w,
        disable: T,
        render: A,
        update: v,
        init: I,
        destroy: M
    })
}
export {V as P, J as _, Q as u};
