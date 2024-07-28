const ABSOLUTE_PATH = 'https://hamsterkombatgame.io/_nuxt/';

import {d as U, a3 as de, u as E, r as y, Z as re, o as t, l as N, a9 as I, b as s, p as L, R as Te, e, a as m, w as b, a4 as ke, t as k, U as ee, i as F, k as u, H as _e, s as me, B as j, aa as Le, ab as we, W as se, n as Ce, m as C, K as ne, q as ie, _ as q, y as ue, a5 as O, c as $, x as Se, j as Ae, ac as He, V as Re, Q as Ee, ad as pe, T as Ue, a2 as xe, ae, O as Ge, C as G, v as ce, F as Ne, D as De, z as le} from "https://hamsterkombatgame.io/_nuxt/entry.Dv1IsjD4.js";
import {a as Ie, _ as he} from "https://hamsterkombatgame.io/_nuxt/Price.vue.Cny252bW.js";
import {_ as Oe} from "https://hamsterkombatgame.io/_nuxt/Preloader.vue.EL_BqhER.js";
import {u as Be, P as Ke, _ as Pe} from "https://hamsterkombatgame.io/_nuxt/navigation.BDVBLgCJ.js";
import {_ as We, a as je, b as Ze} from "https://hamsterkombatgame.io/_nuxt/Earn.vue.BvwXnsf7.js";
import {S as Fe, a as X, N as Ve, E as ze} from "https://hamsterkombatgame.io/_nuxt/effect-fade.aa3pNKSS.js";
import {u as ge} from "https://hamsterkombatgame.io/_nuxt/earn.DGl--UTU.js";
import {_ as Ye} from "https://hamsterkombatgame.io/_nuxt/MiniGameLose.vue.BfjL6Z8P.js";
import {_ as Xe} from "https://hamsterkombatgame.io/_nuxt/BalanceLarge.vue.CUoPNMix.js";
import "https://hamsterkombatgame.io/_nuxt/image.vue.z4uqTG5J.js";
import "https://hamsterkombatgame.io/_nuxt/Hamster.vue.o-XLjD0K.js";
const qe = "" + globalThis.__publicAssetsURL("images/_skin.webp")
  , Je = "" + globalThis.__publicAssetsURL("images/_skin.png")
  , Qe = qe
  , es = {
    class: "user-info-avatar"
}
  , ss = ["srcset"]
  , os = ["src"]
  , ts = {
    class: "user-info-avatar-skin"
}
  , ns = ["innerHTML"]
  , is = e("picture", null, [e("source", {
    srcset: Qe,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Je
})], -1)
  , as = {
    key: 0
}
  , rs = U({
    __name: "Info",
    props: {
        ceo: {
            type: Boolean,
            default: !0
        }
    },
    setup(R) {
        var p, l;
        const o = de()
          , d = E()
          , i = y(((p = o.account_avatar) == null ? void 0 : p.defaultUrl) ?? "")
          , n = y(((l = o.account_avatar) == null ? void 0 : l.compressedUrl) ?? "");
        i.value || (i.value = re);
        const r = R;
        function c() {
            i.value = re
        }
        const a = ()=>{
            L().useHapticFeedback("soft"),
            d.trackEvent("click_header_profile")
        }
        ;
        return (w,v)=>{
            const S = Te;
            return t(),
            N(S, {
                class: "user-info",
                to: s(ee).GAME_USER,
                onClick: a
            }, {
                default: I(()=>[e("div", es, [e("picture", null, [s(n) ? (t(),
                m("source", {
                    key: 0,
                    srcset: s(n),
                    type: "image/webp"
                }, null, 8, ss)) : b("", !0), e("img", {
                    src: s(i),
                    onError: v[0] || (v[0] = h=>c())
                }, null, 40, os)])]), e("div", ts, [e("span", {
                    innerHTML: w.$t("profile.skin_buy")
                }, null, 8, ns), is]), e("p", null, [ke(k(s(o).account_name) + " ", 1), r.ceo ? (t(),
                m("span", as, "(CEO)")) : b("", !0)])]),
                _: 1
            }, 8, ["to"])
        }
    }
})
  , cs = {
    class: "user-balance"
}
  , ls = {
    class: "user-balance-image"
}
  , ds = U({
    __name: "Balance",
    setup(R) {
        const o = F();
        return (d,i)=>{
            const n = Ie;
            return t(),
            m("div", cs, [e("div", ls, [u(n, {
                class: "is-26"
            })]), e("p", null, k(s(o).getUserBalanceFormatted), 1)])
        }
    }
})
  , _s = {
    class: "promocode-container"
}
  , ms = {
    class: "promocode"
}
  , us = ["innerHTML"]
  , ps = {
    class: "promocode-input"
}
  , hs = ["innerHTML"]
  , gs = {
    class: "promocode-input-container"
}
  , bs = ["disabled"]
  , ys = ["innerHTML"]
  , vs = ["innerHTML"]
  , fs = ["innerHTML"]
  , $s = e("div", {
    class: "promocode-divider"
}, null, -1)
  , Ms = ["innerHTML"]
  , Ts = e("div", {
    class: "promocode-arrow"
}, null, -1)
  , ks = U({
    __name: "Redeem",
    setup(R) {
        const o = Be()
          , d = E();
        L();
        const i = _e()
          , n = y("")
          , r = y(!1)
          , c = y(!1)
          , a = y(!1)
          , p = y("");
        let l;
        const w = async()=>{
            n.value && (c.value = !1,
            a.value = !1,
            r.value = !0,
            l = Ce.promise({
                title: C().$i18n.t("messages.process_request")
            }),
            await o.postApplyPromocode(n.value).then(h=>{
                a.value = !0,
                setTimeout(()=>{
                    r.value = !1
                }
                , 400),
                L().useHapticFeedback("heavy"),
                l == null || l.resolve({
                    message: `${C().$i18n.t("messages.success")}`,
                    duration: 4e3
                }),
                d.trackEvent("promo_modal_redeem_success"),
                n.value = ""
            }
            ).catch(h=>{
                var M;
                c.value = !0,
                r.value = !1;
                const _ = (M = h == null ? void 0 : h.data) == null ? void 0 : M.error_code;
                if (console.log(_),
                d.trackEvent("promo_modal_redeem_error"),
                L().useHapticFeedback("heavy"),
                _)
                    switch (_) {
                    case "InvalidPromoCode":
                        {
                            l == null || l.reject(C().$i18n.t("messages.INVALID_PROMOCODE")),
                            p.value = C().$i18n.t("messages.INVALID_PROMOCODE");
                            break
                        }
                    case "MaxKeysReceived":
                        {
                            l == null || l.reject(C().$i18n.t("messages.MAX_KEYS")),
                            p.value = C().$i18n.t("messages.MAX_KEYS");
                            break
                        }
                    default:
                        {
                            l == null || l.reject(C().$i18n.t("promo.redeem_modal_error")),
                            p.value = C().$i18n.t("promo.redeem_modal_error");
                            break
                        }
                    }
                else
                    l == null || l.reject(C().$i18n.t("messages.oops"))
            }
            ))
        }
        ;
        me(()=>{
            n.value = ""
        }
        );
        const v = ()=>{
            C().$event("redeem:close")
        }
          , S = ()=>{
            L().useHapticFeedback("soft"),
            d.trackEvent("promo_modal_click_playground"),
            ne(i(ee.GAME_PLAYGROUND))
        }
        ;
        return (h,_)=>{
            const M = Oe;
            return t(),
            m("div", _s, [e("div", ms, [e("span", {
                class: "promocode-title",
                innerHTML: h.$t("promo.redeem_modal_title")
            }, null, 8, us), e("div", ps, [e("div", {
                class: "promocode-input-header",
                innerHTML: h.$t("promo.redeem_modal_input_header")
            }, null, 8, hs), e("div", gs, [j(e("input", {
                type: "text",
                "onUpdate:modelValue": _[0] || (_[0] = x=>we(n) ? n.value = x : null)
            }, null, 512), [[Le, s(n)]]), e("button", {
                class: "button button-primary button-default",
                onClick: w,
                disabled: s(r)
            }, [s(r) ? (t(),
            N(M, {
                key: 1
            })) : (t(),
            m("span", {
                key: 0,
                innerHTML: h.$t("promo.redeem_modal_redeem_button")
            }, null, 8, ys))], 8, bs)]), j(e("div", {
                class: "promocode-text promocode-text-error",
                innerHTML: s(p)
            }, null, 8, vs), [[se, s(c)]]), j(e("div", {
                class: "promocode-text promocode-text-success",
                innerHTML: h.$t("promo.redeem_modal_success")
            }, null, 8, fs), [[se, s(a)]])]), $s, e("button", {
                class: "promocode-bottom-button",
                innerHTML: h.$t("promo.redeem_modal_go_to_games_button"),
                onClick: S
            }, null, 8, Ms), Ts]), e("div", {
                class: "promocode-outer",
                onClick: v
            })])
        }
    }
})
  , Ls = {
    class: "header-balances"
}
  , ws = U({
    __name: "Balances",
    setup(R) {
        const {$event: o, $listen: d, $stopListen: i} = C()
          , n = y(!1)
          , r = F();
        E(),
        L();
        const c = ()=>{
            L().useHapticFeedback("soft"),
            n.value = !n.value
        }
        ;
        return me(()=>{
            i("redeem:close", ()=>{
                n.value = !1
            }
            )
        }
        ),
        ie(()=>{
            d("redeem:close", ()=>{
                n.value = !1
            }
            )
        }
        ),
        (a,p)=>{
            const l = q;
            return t(),
            m("ul", Ls, [e("li", {
                class: "header-balances-keys",
                onClick: c
            }, [u(l, {
                class: "is-key",
                name: "key"
            }), e("span", null, k(s(r).balanceKeys ?? 0), 1), u(l, {
                class: "is-10 is-carret",
                name: "caret-right"
            })]), s(n) ? (t(),
            N(ks, {
                key: 0
            })) : b("", !0)])
        }
    }
})
  , Cs = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-01.webp")
  , Ss = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-01.jpg")
  , As = "" + globalThis.__publicAssetsURL("images/onboarding/tap.webp")
  , Hs = "" + globalThis.__publicAssetsURL("images/onboarding/tap.png")
  , oe = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-img-01.webp")
  , te = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-img-01.png")
  , Rs = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-02.webp")
  , Es = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-02.png")
  , Us = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-03.webp")
  , xs = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-03.jpg")
  , Gs = "" + globalThis.__publicAssetsURL("images/onboarding/level-up.webp")
  , Ns = "" + globalThis.__publicAssetsURL("images/onboarding/level-up.png")
  , Ds = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-04.webp")
  , Is = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-04.jpg")
  , Os = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-kombat.webp")
  , Bs = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-kombat.png")
  , Ks = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-img-03.webp")
  , Ps = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-img-03.png")
  , Ws = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-06.webp")
  , js = "" + globalThis.__publicAssetsURL("images/onboarding/onboarding-slide-06.jpg")
  , Zs = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-img-02.webp")
  , Fs = "" + globalThis.__publicAssetsURL("images/onboarding/hamster-img-02.png")
  , Vs = Cs
  , zs = As
  , Ys = oe
  , Xs = Rs
  , qs = oe
  , Js = Us
  , Qs = Gs
  , eo = oe
  , so = Ds
  , oo = oe
  , to = Os
  , no = Ks
  , io = Ws
  , ao = Zs
  , ro = e("div", {
    class: "slider-onb-image has-border has-glow has-gradient"
}, [e("div", null, [e("picture", null, [e("source", {
    srcset: Vs,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Ss
})])]), e("picture", {
    class: "is-tap"
}, [e("source", {
    srcset: zs,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Hs
})])], -1)
  , co = {
    class: "slider-onb-info"
}
  , lo = e("div", {
    class: "slider-onb-info-image"
}, [e("picture", null, [e("source", {
    srcset: Ys,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: te
})])], -1)
  , _o = {
    class: "slider-onb-info-text"
}
  , mo = ["innerHTML"]
  , uo = ["innerHTML"]
  , po = e("div", {
    class: "slider-onb-image is-second"
}, [e("div", null, [e("picture", null, [e("source", {
    srcset: Xs,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Es
})])])], -1)
  , ho = {
    class: "slider-onb-info"
}
  , go = e("div", {
    class: "slider-onb-info-image"
}, [e("picture", null, [e("source", {
    srcset: qs,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: te
})])], -1)
  , bo = {
    class: "slider-onb-info-text"
}
  , yo = ["innerHTML"]
  , vo = ["innerHTML"]
  , fo = e("div", {
    class: "slider-onb-image has-border has-glow has-gradient"
}, [e("div", null, [e("picture", null, [e("source", {
    srcset: Js,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: xs
})])]), e("picture", {
    class: "is-level-up"
}, [e("source", {
    srcset: Qs,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Ns
})])], -1)
  , $o = {
    class: "slider-onb-info"
}
  , Mo = e("div", {
    class: "slider-onb-info-image"
}, [e("picture", null, [e("source", {
    srcset: eo,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: te
})])], -1)
  , To = {
    class: "slider-onb-info-text"
}
  , ko = ["innerHTML"]
  , Lo = ["innerHTML"]
  , wo = e("div", {
    class: "slider-onb-image has-border has-glow has-gradient"
}, [e("div", null, [e("picture", null, [e("source", {
    srcset: so,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Is
})])])], -1)
  , Co = {
    class: "slider-onb-info"
}
  , So = e("div", {
    class: "slider-onb-info-image"
}, [e("picture", null, [e("source", {
    srcset: oo,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: te
})])], -1)
  , Ao = {
    class: "slider-onb-info-text"
}
  , Ho = ["innerHTML"]
  , Ro = ["innerHTML"]
  , Eo = e("div", {
    class: "slider-onb-divider"
}, null, -1)
  , Uo = e("div", {
    class: "slider-onb-hk"
}, [e("picture", null, [e("source", {
    srcset: to,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Bs
})])], -1)
  , xo = e("div", {
    class: "slider-onb-divider"
}, null, -1)
  , Go = ["innerHTML"]
  , No = {
    class: "slider-onb-join"
}
  , Do = e("div", {
    class: "slider-onb-divider"
}, null, -1)
  , Io = {
    class: "slider-onb-info"
}
  , Oo = e("div", {
    class: "slider-onb-info-image"
}, [e("picture", null, [e("source", {
    srcset: no,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Ps
})])], -1)
  , Bo = {
    class: "slider-onb-info-text"
}
  , Ko = ["innerHTML"]
  , Po = e("div", {
    class: "slider-onb-image has-border has-glow has-gradient"
}, [e("div", null, [e("picture", null, [e("source", {
    srcset: io,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: js
})])])], -1)
  , Wo = {
    class: "slider-onb-info"
}
  , jo = e("div", {
    class: "slider-onb-info-image"
}, [e("picture", null, [e("source", {
    srcset: ao,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Fs
})])], -1)
  , Zo = {
    class: "slider-onb-info-text"
}
  , Fo = ["innerHTML"]
  , Vo = ["innerHTML"]
  , zo = ["innerHTML"]
  , Yo = {
    class: "slider-onb-button"
}
  , Xo = U({
    __name: "OnboardingSlider",
    setup(R) {
        F();
        const o = E()
          , d = ue()
          , i = L()
          , n = [Ve, Ke, ze]
          , r = y(null)
          , c = y(!0)
          , a = ()=>{
            c.value = r.value.activeIndex !== r.value.slides.length - 1
        }
          , p = ()=>{
            var _;
            r.value.slideNext(),
            o.trackEvent(`${O.ONBOARDING_SLIDE}_${(((_ = r == null ? void 0 : r.value) == null ? void 0 : _.activeIndex) ?? 1) + 1}`)
        }
          , l = _=>{
            r.value = _
        }
        ;
        ie(()=>{
            o.trackEvent(O.ONBOARDING_START)
        }
        );
        const w = ()=>{
            i.onboardingStep = 2,
            o.trackEvent(O.ONBOARDING_PLAY_BUTTON)
        }
          , v = ()=>{
            o.trackEvent(O.ONBOARDING_CLICK_JOIN_BUTTON)
        }
          , S = $(()=>d.subscribeChannelUrl ?? i.link_telegram ?? "#")
          , h = ()=>{
            i.onboardingStep = 2,
            o.trackEvent(O.ONBOARDING_CLOSE_SLIDER)
        }
        ;
        return (_,M)=>{
            const x = q
              , V = Se
              , B = Pe;
            return t(),
            N(B, null, {
                default: I(()=>[e("div", {
                    class: "slider-onb-close",
                    onClick: h
                }, [u(x, {
                    name: "close"
                })]), u(s(Fe), {
                    class: "slider-onb",
                    loop: !1,
                    effect: "fade",
                    onSwiper: l,
                    pagination: {
                        clickable: !0
                    },
                    modules: n,
                    onSlideChange: a
                }, {
                    default: I(()=>[u(s(X), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[ro, e("div", co, [lo, e("div", _o, [e("h3", {
                            innerHTML: _.$t("onboarding.slide_1_title")
                        }, null, 8, mo), e("p", {
                            innerHTML: _.$t("onboarding.slide_1_text")
                        }, null, 8, uo)])])]),
                        _: 1
                    }), u(s(X), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[po, e("div", ho, [go, e("div", bo, [e("h3", {
                            innerHTML: _.$t("onboarding.slide_2_title")
                        }, null, 8, yo), e("p", {
                            innerHTML: _.$t("onboarding.slide_2_text")
                        }, null, 8, vo)])])]),
                        _: 1
                    }), u(s(X), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[fo, e("div", $o, [Mo, e("div", To, [e("h3", {
                            innerHTML: _.$t("onboarding.slide_3_title")
                        }, null, 8, ko), e("p", {
                            innerHTML: _.$t("onboarding.slide_3_text")
                        }, null, 8, Lo)])])]),
                        _: 1
                    }), u(s(X), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[wo, e("div", Co, [So, e("div", Ao, [e("h3", {
                            innerHTML: _.$t("onboarding.slide_4_title")
                        }, null, 8, Ho), e("p", {
                            innerHTML: _.$t("onboarding.slide_4_text")
                        }, null, 8, Ro)])])]),
                        _: 1
                    }), u(s(X), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[Eo, Uo, xo, e("div", {
                            class: "slider-onb-title",
                            innerHTML: _.$t("onboarding.slide_5_text", {
                                n: s(d).telegramAuditory
                            })
                        }, null, 8, Go), e("div", No, [u(V, {
                            class: "button button-default button-orange",
                            to: s(S),
                            target: "_blank",
                            innerHTML: _.$t("onboarding.slide_5_button"),
                            onClick: v
                        }, null, 8, ["to", "innerHTML"])]), Do, e("div", Io, [Oo, e("div", Bo, [e("h3", {
                            innerHTML: _.$t("onboarding.slide_5_title")
                        }, null, 8, Ko)])])]),
                        _: 1
                    }), u(s(X), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[Po, e("div", Wo, [jo, e("div", Zo, [e("h3", {
                            innerHTML: _.$t("onboarding.slide_6_title")
                        }, null, 8, Fo), e("p", {
                            innerHTML: _.$t("onboarding.slide_6_text")
                        }, null, 8, Vo)])])]),
                        _: 1
                    })]),
                    _: 1
                }), j(e("div", {
                    class: "slider-onb-next",
                    onClick: M[0] || (M[0] = K=>p()),
                    innerHTML: _.$t("buttons.next")
                }, null, 8, zo), [[se, s(c)]]), j(e("div", Yo, [e("button", {
                    class: "button button-primary",
                    onClick: M[1] || (M[1] = K=>w())
                }, k(_.$t("buttons.play")), 1)], 512), [[se, !s(c)]])]),
                _: 1
            })
        }
    }
})
  , qo = "" + globalThis.__publicAssetsURL("images/onboarding/gift.webp")
  , Jo = "" + globalThis.__publicAssetsURL("images/onboarding/gift.png")
  , Qo = qo
  , et = {
    class: "content-onboarding"
}
  , st = e("div", {
    class: "content-onboarding-image"
}, [e("picture", null, [e("source", {
    srcset: Qo,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: Jo
})])], -1)
  , ot = {
    class: "content-onboarding-info"
}
  , tt = {
    class: "content-onboarding-top"
}
  , nt = ["innerHTML"]
  , it = ["disabled"]
  , at = {
    class: "user-tap-button-inner"
}
  , rt = {
    class: "user-tap-button-circle is-column content-onboarding-button"
}
  , ct = ["innerHTML"]
  , lt = U({
    __name: "OnboardingMain",
    setup(R) {
        var V, B, K, z;
        const o = F()
          , d = E()
          , i = ue()
          , n = L()
          , r = de()
          , c = ge()
          , a = y(0)
          , p = y("")
          , l = y(!1)
          , w = y(!!o.referrerId)
          , v = y("")
          , {t: S} = Ae()
          , {$event: h} = C()
          , _ = w.value ? ((V = o == null ? void 0 : o.referrer) == null ? void 0 : V.welcomeCoins) ?? ((K = (B = i == null ? void 0 : i.referralBonus) == null ? void 0 : B.base) == null ? void 0 : K.welcome) ?? 5e3 : 100;
        if (p.value = S("onboarding.gift"),
        a.value = _ ?? 5e3,
        !w.value)
            v.value = S("onboarding.click");
        else {
            const T = ((z = o.referrer) == null ? void 0 : z.name) ?? "Hamster";
            v.value = S("onboarding.referral", {
                user: `<span>${T}</span>`
            })
        }
        const M = async()=>{
            l.value || (x(),
            d.trackEvent(O.ONBOARDING_CEO_BUTTON),
            o.exchangeId ? n.setOnboarding(!0) : (l.value = !0,
            await o.postUserExchangeId(Re.DEFAULT_EXCHANGE).then(async T=>{
                d.trackEvent(O.ONBOARDING_SELECT_EXCHANGE),
                await c.postListTasks(),
                setTimeout(()=>{
                    n.setOnboarding(!0),
                    o.setBalanceCoins(a.value)
                }
                , 200),
                r.opened_by_miniapp && setTimeout(()=>{
                    h("join-bot:success")
                }
                , 1e4)
            }
            ).catch(T=>{
                d.showErrorPush()
            }
            ).finally(()=>{
                setTimeout(()=>{
                    l.value = !1
                }
                , 1e3)
            }
            )))
        }
        ;
        function x() {
            var D;
            const T = ((D = document.querySelector(".user-balance-image")) == null ? void 0 : D.getBoundingClientRect()) ?? null;
            let Y;
            const Z = Math.min(200, Math.floor(_));
            T ? Y = {
                x_start_from: -20,
                x_start_to: window.innerWidth + 20,
                y_start_from: -20,
                y_start_to: 0,
                x_end_from: T.x,
                x_end_to: T.x + T.width,
                y_end_from: window.innerHeight - T.y - T.height / 2,
                y_end_to: window.innerHeight - T.y - T.height / 2,
                count: Z,
                delay: 5,
                timeout_fly: 1e3,
                direction_y: "from_bottom",
                random_end_x: !0
            } : Y = {
                x_start_from: -20,
                x_start_to: window.innerWidth + 20,
                y_start_from: -20,
                y_start_to: 0,
                x_end_from: -20,
                x_end_to: window.innerWidth + 20,
                y_end_from: window.innerHeight - 64,
                y_end_to: window.innerHeight,
                count: Z,
                delay: 5,
                timeout_fly: 1e3,
                direction_y: "from_bottom",
                random_end_x: !1
            },
            Ee().settings.coins_animation && (h("coins-animate", Y),
            h("balance-animate:start"))
        }
        return (T,Y)=>{
            const Z = q
              , D = he;
            return t(),
            m("div", et, [st, e("div", ot, [e("div", tt, [e("p", {
                innerHTML: s(v)
            }, null, 8, nt), u(Z, {
                class: "icon-arrow-onboarding-new is-white",
                name: "arrow-onboarding-new"
            })]), e("button", {
                class: "button user-tap-button button",
                onPointerup: He(M, ["prevent"]),
                disabled: s(l)
            }, [e("div", at, [e("div", rt, [u(Z, {
                name: "gift"
            }), e("p", {
                class: "content-onboarding-text",
                innerHTML: s(p)
            }, null, 8, ct), u(D, {
                price: s(_),
                round: !1,
                size: "x-large"
            }, null, 8, ["price"])])])], 40, it)])])
        }
    }
})
  , dt = U({
    __name: "Onboarding",
    setup(R) {
        F(),
        E();
        const o = L();
        return (d,i)=>{
            const n = Xo
              , r = lt;
            return s(o).onboardingStep === 1 ? (t(),
            N(n, {
                key: 0
            })) : (t(),
            N(r, {
                key: 1
            }))
        }
    }
})
  , be = "" + globalThis.__publicAssetsURL("images/attraction/daily_reward.webp")
  , ye = "" + globalThis.__publicAssetsURL("images/attraction/daily_cipher.webp")
  , ve = "" + globalThis.__publicAssetsURL("images/attraction/daily_combo.webp")
  , fe = "" + globalThis.__publicAssetsURL("images/attraction/mini_game.webp")
  , _t = "" + globalThis.__publicAssetsURL("images/minigame/not-support-phone.webp")
  , mt = "" + globalThis.__publicAssetsURL("images/minigame/not-support-phone.png")
  , ut = _t
  , pt = {
    class: "bs-content"
}
  , ht = {
    class: "bs-content-image is-minigame-not-supported"
}
  , gt = e("picture", null, [e("source", {
    srcset: ut,
    type: "image/webp"
}), e("img", {
    src: mt
})], -1)
  , bt = ["innerHTML"]
  , yt = {
    class: "bs-content-description no-gap margin-0"
}
  , vt = {
    key: 0,
    class: "is-xs-text"
}
  , ft = {
    key: 1,
    class: "is-xs-text"
}
  , $t = {
    key: 2,
    class: "is-xs-text"
}
  , Mt = {
    key: 3,
    class: "is-xs-text"
}
  , Tt = ["innerHTML"]
  , kt = U({
    __name: "MiniGameNotSupported",
    setup(R) {
        const {$event: o} = C()
          , d = pe();
        function i() {
            o("bs:close")
        }
        const n = y("")
          , r = Ue()
          , c = y(r.tz.guess());
        return ie(()=>{
            n.value = navigator.userAgent
        }
        ),
        (a,p)=>{
            const l = q;
            return t(),
            m("div", pt, [e("div", ht, [u(l, {
                name: "not-support-phone-glow"
            }), gt]), e("div", {
                class: "bs-content-title is-minigame-not-supported has-top-gap",
                innerHTML: a.$t("minigame.not_supported_title")
            }, null, 8, bt), e("div", yt, [e("p", null, "WebAssembly: " + k(s(d).isWasmSupported()), 1), e("p", null, "WebGL: " + k(s(d).isWebGLSupported()), 1), s(n) ? (t(),
            m("p", vt, "User Agent: " + k(s(n)), 1)) : b("", !0), s(c) ? (t(),
            m("p", ft, "TimeZone: " + k(s(c)), 1)) : b("", !0), !s(d).isWasmSupported() && s(d).wasm_error ? (t(),
            m("p", $t, k(s(d).wasm_error), 1)) : b("", !0), !s(d).isWebGLSupported() && s(d).webgl_error ? (t(),
            m("p", Mt, k(s(d).webgl_error), 1)) : b("", !0)]), e("button", {
                class: "bottom-sheet-button button button-primary button-default",
                onClick: i
            }, [e("span", {
                innerHTML: a.$t("buttons.close")
            }, null, 8, Tt)])])
        }
    }
})
  , Lt = be
  , wt = ye
  , Ct = ve
  , St = fe
  , At = {
    class: "user-attraction"
}
  , Ht = {
    class: "user-attraction-item-inner"
}
  , Rt = {
    key: 0,
    class: "user-attraction-item-status"
}
  , Et = {
    key: 1,
    class: "user-attraction-item-completed"
}
  , Ut = e("picture", {
    class: "is-token"
}, [e("source", {
    srcset: Lt,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: be
})], -1)
  , xt = ["innerHTML"]
  , Gt = {
    class: "user-attraction-countdown"
}
  , Nt = {
    class: "user-attraction-item-inner"
}
  , Dt = {
    key: 0,
    class: "user-attraction-item-status"
}
  , It = {
    key: 1,
    class: "user-attraction-item-completed"
}
  , Ot = e("picture", {
    class: "is-token"
}, [e("source", {
    srcset: wt,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: ye
})], -1)
  , Bt = ["innerHTML"]
  , Kt = {
    class: "user-attraction-countdown"
}
  , Pt = {
    class: "user-attraction-item-inner"
}
  , Wt = {
    key: 0,
    class: "user-attraction-item-status"
}
  , jt = {
    key: 1,
    class: "user-attraction-item-completed"
}
  , Zt = e("picture", {
    class: "is-token"
}, [e("source", {
    srcset: Ct,
    type: "image/webp"
}), e("img", {
    class: "img-responsive",
    src: ve
})], -1)
  , Ft = ["innerHTML"]
  , Vt = {
    class: "user-attraction-countdown"
}
  , zt = {
    class: "user-attraction-item-inner"
}
  , Yt = {
    key: 1,
    class: "user-attraction-item-completed"
}
  , Xt = {
    class: "user-attraction-item-circle-countdown"
}
  , qt = e("source", {
    srcset: St,
    type: "image/webp"
}, null, -1)
  , Jt = e("img", {
    class: "img-responsive",
    src: fe
}, null, -1)
  , Qt = [qt, Jt]
  , en = ["innerHTML"]
  , Q = 60 * 60 * 1
  , sn = U({
    __name: "Attraction",
    setup(R) {
        const {$event: o} = C()
          , d = _e()
          , i = E();
        F();
        const n = ge()
          , r = xe()
          , c = ae()
          , a = pe();
        function p() {
            i.trackEvent("minigame_puzzle_not_supported"),
            o("bs:open", {
                component: ce(kt)
            })
        }
        function l() {
            o("bs:open", {
                component: ce(Ye)
            })
        }
        const w = ()=>{
            L().useHapticFeedback("soft"),
            i.trackEvent("click_attraction_daily_reward"),
            ne(d(ee.GAME_EARN))
        }
          , v = ()=>{
            L().useHapticFeedback("soft"),
            i.trackEvent("click_attraction_daily_cipher"),
            c.status ? c.setStatus(!1) : c.dailyCipher && (c.setStatus(!0),
            o("morse-mode:start"),
            E().trackEvent(O.DAILY_CIPHER_TURN_ON))
        }
          , S = ()=>{
            L().useHapticFeedback("soft"),
            i.trackEvent("click_attraction_daily_combo"),
            ne(d(ee.GAME_MINE))
        }
          , h = ()=>{
            var g, f;
            a.dailyKeysMiniGame && ((g = a.dailyKeysMiniGame) != null && g.isClaimed || (L().useHapticFeedback("soft"),
            i.trackEvent("click_attraction_mini_game"),
            !a.isWasmSupported() || !a.isWebGLSupported() ? p() : ((f = a.dailyKeysMiniGame) == null ? void 0 : f.remainSecondsToNextAttempt) > 0 ? l() : (E().trackEvent("minigame_puzzle_tutorial_start"),
            a.showGamePage())))
        }
          , _ = $(()=>{
            var P, W;
            if (!c.dailyCipher || (P = c.dailyCipher) != null && P.remainSeconds && ((W = c.dailyCipher) == null ? void 0 : W.remainSeconds) <= 0)
                return "00:00:00";
            const g = Math.floor(c.dailyCipher.remainSeconds % 60)
              , f = Math.floor(c.dailyCipher.remainSeconds / 60 % 60)
              , H = Math.floor(c.dailyCipher.remainSeconds / (60 * 60 * 24))
              , A = Math.floor(c.dailyCipher.remainSeconds / (60 * 60) % 24) + H * 24;
            return A === 0 && f < 1 ? `${i.padWithZero(g)}` : `${i.padWithZero(A)}:${i.padWithZero(f)}`
        }
        )
          , M = $(()=>{
            var P, W;
            if (!r.dailyCombo || (P = r.dailyCombo) != null && P.remainSeconds && ((W = r.dailyCombo) == null ? void 0 : W.remainSeconds) <= 0)
                return "00:00:00";
            const g = Math.floor(r.dailyCombo.remainSeconds % 60)
              , f = Math.floor(r.dailyCombo.remainSeconds / 60 % 60)
              , H = Math.floor(r.dailyCombo.remainSeconds / (60 * 60 * 24))
              , A = Math.floor(r.dailyCombo.remainSeconds / (60 * 60) % 24) + H * 24;
            return A === 0 && f < 1 ? `${i.padWithZero(g)}` : `${i.padWithZero(A)}:${i.padWithZero(f)}`
        }
        )
          , x = $(()=>{
            var P, W;
            if (!a.dailyKeysMiniGame || (P = a.dailyKeysMiniGame) != null && P.remainSeconds && ((W = a.dailyKeysMiniGame) == null ? void 0 : W.remainSeconds) <= 0)
                return "00:00:00";
            const g = Math.floor(a.dailyKeysMiniGame.remainSeconds % 60)
              , f = Math.floor(a.dailyKeysMiniGame.remainSeconds / 60 % 60)
              , H = Math.floor(a.dailyKeysMiniGame.remainSeconds / (60 * 60 * 24))
              , A = Math.floor(a.dailyKeysMiniGame.remainSeconds / (60 * 60) % 24) + H * 24;
            return A === 0 && f < 1 ? `${i.padWithZero(g)}` : `${i.padWithZero(A)}:${i.padWithZero(f)}`
        }
        );
        y(i.secondsUntilMidnightUTC());
        const V = $(()=>{
            if (n.dailyRewardSeconds && n.dailyRewardSeconds <= 0)
                return "00:00:00";
            const g = Math.floor(n.dailyRewardSeconds % 60)
              , f = Math.floor(n.dailyRewardSeconds / 60 % 60)
              , H = Math.floor(n.dailyRewardSeconds / (60 * 60 * 24))
              , A = Math.floor(n.dailyRewardSeconds / (60 * 60) % 24) + H * 24;
            return A === 0 && f < 1 ? `${i.padWithZero(g)}` : `${i.padWithZero(A)}:${i.padWithZero(f)}`
        }
        )
          , B = $(()=>{
            var g;
            return ((g = n.tasks.find(f=>f.id === Ge.STREAK_DAYS)) == null ? void 0 : g.isCompleted) ?? !1
        }
        )
          , K = $(()=>r.getDailyComboClaimed)
          , z = $(()=>c.getDailyCipherClaimed)
          , T = $(()=>!B.value && n.dailyRewardSeconds && n.dailyRewardSeconds <= Q)
          , Y = $(()=>!K.value && r.dailyCombo && r.dailyCombo.remainSeconds && r.dailyCombo.remainSeconds <= Q)
          , Z = $(()=>!z.value && c.dailyCipher && c.dailyCipher.remainSeconds && c.dailyCipher.remainSeconds <= Q)
          , D = $(()=>a.getDailyKeysMiniGameClaimed)
          , $e = $(()=>!D.value && a.dailyKeysMiniGame && a.dailyKeysMiniGame.remainSeconds && a.dailyKeysMiniGame.remainSeconds <= Q)
          , Me = $(()=>({
            id: "minigame-retry",
            cooldownSeconds: a.dailyKeysMiniGame ? a.dailyKeysMiniGame.remainSecondsToNextAttempt : 0,
            totalCooldownSeconds: a.dailyKeysMiniGame ? a.dailyKeysMiniGame.totalSecondsToNextAttempt : 0
        }))
          , J = $(()=>{
            var g;
            return a.dailyKeysMiniGame && !D.value && ((g = a.dailyKeysMiniGame) == null ? void 0 : g.remainSecondsToNextAttempt) > 0
        }
        );
        return (g,f)=>{
            const H = q
              , A = We;
            return t(),
            m("div", At, [e("div", {
                class: G(["user-attraction-item", {
                    "is-completed": s(B),
                    "is-end-soon": s(T)
                }]),
                onClick: w
            }, [e("div", Ht, [s(B) ? (t(),
            m("div", Et, [u(H, {
                name: "check"
            })])) : (t(),
            m("div", Rt)), Ut, e("p", {
                innerHTML: g.$t("earn.daily_reward")
            }, null, 8, xt), e("div", Gt, k(s(V)), 1)])], 2), s(c).dailyCipher ? (t(),
            m("div", {
                key: 0,
                class: G(["user-attraction-item", {
                    "is-completed": s(z),
                    "is-end-soon": s(Z)
                }]),
                onClick: v
            }, [e("div", Nt, [s(z) ? (t(),
            m("div", It, [u(H, {
                name: "check"
            })])) : (t(),
            m("div", Dt)), Ot, e("p", {
                innerHTML: g.$t("morse.title")
            }, null, 8, Bt), e("div", Kt, k(s(_)), 1)])], 2)) : b("", !0), s(r).dailyCombo ? (t(),
            m("div", {
                key: 1,
                class: G(["user-attraction-item", {
                    "is-completed": s(K),
                    "is-end-soon": s(Y)
                }]),
                onClick: S
            }, [e("div", Pt, [s(K) ? (t(),
            m("div", jt, [u(H, {
                name: "check"
            })])) : (t(),
            m("div", Wt)), Zt, e("p", {
                innerHTML: g.$t("daily_combo.title")
            }, null, 8, Ft), e("div", Vt, k(s(M)), 1)])], 2)) : b("", !0), s(a).dailyKeysMiniGame ? (t(),
            m("div", {
                key: 2,
                class: G(["user-attraction-item", {
                    "is-completed": s(D),
                    "is-end-soon": s($e)
                }]),
                onClick: h
            }, [e("div", zt, [s(D) ? (t(),
            m("div", Yt, [u(H, {
                name: "check"
            })])) : (t(),
            m("div", {
                key: 0,
                class: G(["user-attraction-item-status", {
                    "is-blur-4px": s(J)
                }])
            }, null, 2)), e("div", Xt, [s(J) ? (t(),
            N(A, {
                key: 0,
                upgrade: s(Me)
            }, null, 8, ["upgrade"])) : b("", !0)]), e("picture", {
                class: G({
                    "is-blur-4px": s(J)
                })
            }, Qt, 2), e("p", {
                class: G(["is-minigame", {
                    "is-cooldown": s(J)
                }]),
                innerHTML: g.$t("minigame.minigame")
            }, null, 10, en), e("div", {
                class: G(["user-attraction-countdown", {
                    "is-blur-4px": s(J)
                }])
            }, k(s(x)), 3)])], 2)) : b("", !0)])
        }
    }
})
  , on = {
    class: "daily-combo is-morse"
}
  , tn = {
    class: "daily-combo-progress"
}
  , nn = ["innerHTML"]
  , an = {
    key: 0,
    class: "daily-combo-progress-center"
}
  , rn = {
    class: "daily-cipher-code"
}
  , cn = {
    key: 2,
    class: "daily-combo-progress-claimed"
}
  , ln = {
    class: "daily-combo-progress-claimed-info"
}
  , dn = {
    class: "daily-combo-progress-claimed-check"
}
  , _n = U({
    __name: "Main",
    setup(R) {
        const o = ae();
        E();
        const d = $(()=>o.morse_decoded.split(""));
        $(()=>d.value.map((n,r)=>({
            char: n,
            isNew: r === d.value.length - 1
        })));
        const i = ()=>{
            o.getDailyCipherNotClaimed && (E().trackEvent(O.DAILY_CIPHER_CLICK_OPEN_CLAIM_MANUAL),
            o.setDailyCipherSuccess(!0))
        }
        ;
        return (n,r)=>{
            var p, l;
            const c = he
              , a = q;
            return t(),
            m("div", on, [e("div", tn, [e("div", {
                class: "daily-combo-progress-title",
                innerHTML: n.$t("morse.title")
            }, null, 8, nn), s(o).getDailyCipherClaimed ? b("", !0) : (t(),
            m("div", an, [e("div", rn, [(t(!0),
            m(Ne, null, De(s(d), (w,v)=>(t(),
            m("span", {
                key: v,
                class: G({
                    "new-char": v === s(d).length - 1
                })
            }, k(w), 3))), 128))])])), s(o).getDailyCipherClaimed ? b("", !0) : (t(),
            m("div", {
                key: 1,
                class: G(["daily-combo-progress-button", {
                    pulse: s(o).getDailyCipherNotClaimed
                }])
            }, [e("button", {
                class: "button button-gradient",
                onClick: i
            }, [u(c, {
                price: ((p = s(o).dailyCipher) == null ? void 0 : p.bonusCoins) ?? 1e6,
                prefix: "+",
                round: !1
            }, null, 8, ["price"])])], 2)), s(o).getDailyCipherClaimed ? (t(),
            m("div", cn, [e("div", ln, [u(c, {
                price: ((l = s(o).dailyCipher) == null ? void 0 : l.bonusCoins) ?? 1e6,
                prefix: "+",
                round: !1
            }, null, 8, ["price"]), e("div", dn, [u(a, {
                class: "is-12",
                name: "check"
            })])])])) : b("", !0)])])
        }
    }
})
  , mn = {
    class: "main is-prevent-touch"
}
  , un = {
    key: 0,
    class: "header"
}
  , pn = {
    class: "header-left"
}
  , hn = {
    key: 0,
    class: "header-right"
}
  , gn = {
    key: 1,
    class: "header-right"
}
  , bn = {
    key: 3,
    class: "content is-main has-glow"
}
  , An = U({
    __name: "index",
    setup(R) {
        const o = F()
          , d = L()
          , i = ae();
        return (n,r)=>{
            const c = rs
              , a = ds
              , p = ws
              , l = Ze
              , w = dt
              , v = sn
              , S = Xe
              , h = _n
              , _ = je
              , M = le("motion-slide-right")
              , x = le("motion-pop");
            return t(),
            m("main", mn, [s(o).exchangeId ? (t(),
            m("header", un, [e("div", pn, [u(c, {
                class: "is-small",
                ceo: !!s(o).exchangeId
            }, null, 8, ["ceo"])]), !s(o).exchangeId && s(d).onboarding ? (t(),
            m("div", hn, [u(a)])) : b("", !0), s(o).exchangeId ? (t(),
            m("div", gn, [u(p)])) : b("", !0)])) : b("", !0), s(o).exchangeId ? (t(),
            N(l, {
                key: 1
            })) : b("", !0), s(o).exchangeId ? (t(),
            m("div", bn, [j(u(v, null, null, 512), [[M]]), j(u(S, null, null, 512), [[x]]), s(i).status ? (t(),
            N(h, {
                key: 0
            })) : b("", !0), j(u(_, {
                class: "has-gap"
            }, null, 512), [[x]])])) : (t(),
            N(w, {
                key: 2
            }))])
        }
    }
});
export {An as default};
