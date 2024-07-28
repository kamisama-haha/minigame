import {d as H, u as C, r as v, Z as A, o as c, a as _, e, b as r, w as E, p as k, y as j, l as M, a9 as I, k as p, F, D as O, B as L, W as B, t as R, _ as w, s as q, aa as W, ab as X, C as Y, n as Z, m as $, x as J, v as Q, i as x, q as ee, z as U} from "https://kamisama-haha.github.io/minigame/main_minigame.js";
import {_ as V} from "https://hamsterkombatgame.io/_nuxt/Preloader.vue.EL_BqhER.js";
import {P as oe, _ as ne, u as D} from "https://hamsterkombatgame.io/_nuxt/navigation.BDVBLgCJ.js";
import {S as se, a as te, N as re, E as ie} from "https://hamsterkombatgame.io/_nuxt/effect-fade.aa3pNKSS.js";
const ae = {
    class: "common-image"
}
  , le = ["srcset"]
  , ce = ["src"]
  , P = H({
    __name: "Image",
    props: {
        image: {},
        compressed: {}
    },
    setup(h) {
        const m = h;
        C();
        const l = v(m.image)
          , a = v(m.compressed ?? "");
        l.value || (l.value = A);
        function t() {
            l.value = A
        }
        return (i,s)=>(c(),
        _("div", ae, [e("picture", null, [r(a) ? (c(),
        _("source", {
            key: 0,
            srcset: r(a),
            type: "image/webp"
        }, null, 8, le)) : E("", !0), e("img", {
            src: r(l),
            onError: s[0] || (s[0] = g=>t())
        }, null, 40, ce)])]))
    }
})
  , de = {
    class: "slider-onb-image has-border has-glow has-gradient"
}
  , pe = {
    class: "slider-onb-info"
}
  , me = {
    class: "slider-onb-info-image"
}
  , ue = {
    class: "slider-onb-info-text"
}
  , _e = ["innerHTML"]
  , ge = ["innerHTML"]
  , ye = ["innerHTML"]
  , ve = {
    class: "slider-onb-button"
}
  , he = H({
    __name: "PlayGroundOnboardingSlider",
    props: {
        promo: {},
        closeSlider: {
            type: Function
        }
    },
    setup(h) {
        const m = C();
        k(),
        j();
        const l = [re, oe, ie]
          , a = v(null)
          , t = v(!0)
          , i = h
          , s = ()=>{
            t.value = a.value.activeIndex !== a.value.slides.length - 1
        }
          , g = ()=>{
            a.value.slideNext()
        }
          , n = y=>{
            a.value = y
        }
          , f = ()=>{
            i.closeSlider()
        }
        ;
        return (y,u)=>{
            const T = w
              , b = P
              , o = ne;
            return c(),
            M(o, null, {
                default: I(()=>[e("div", {
                    class: "slider-onb-close is-playground",
                    onClick: u[0] || (u[0] = (...d)=>i.closeSlider && i.closeSlider(...d))
                }, [p(T, {
                    name: "close"
                })]), p(r(se), {
                    class: "slider-onb is-playground",
                    loop: !1,
                    effect: "fade",
                    onSwiper: n,
                    pagination: {
                        clickable: !0
                    },
                    modules: l,
                    onSlideChange: s
                }, {
                    default: I(()=>[(c(!0),
                    _(F, null, O(y.promo.onboard, d=>(c(),
                    M(r(te), {
                        class: "slider-onb-item"
                    }, {
                        default: I(()=>[e("div", de, [e("div", null, [p(b, {
                            image: d.image.defaultUrl,
                            compressed: d.image.compressedUrl
                        }, null, 8, ["image", "compressed"])])]), e("div", pe, [e("div", me, [p(b, {
                            image: "/images/onboarding/hamster-img-01.png",
                            compressed: "/images/onboarding/hamster-img-01.webp"
                        })]), e("div", ue, [e("h3", {
                            innerHTML: r(m).getLocalizedString(d.title)
                        }, null, 8, _e), e("p", {
                            innerHTML: r(m).getLocalizedString(d.description)
                        }, null, 8, ge)])])]),
                        _: 2
                    }, 1024))), 256))]),
                    _: 1
                }), L(e("div", {
                    class: "slider-onb-next",
                    onClick: u[1] || (u[1] = d=>g()),
                    innerHTML: y.$t("buttons.next")
                }, null, 8, ye), [[B, r(t)]]), L(e("div", ve, [e("button", {
                    class: "button button-primary",
                    onClick: u[2] || (u[2] = d=>f())
                }, R(y.$t("buttons.play")), 1)], 512), [[B, !r(t)]])]),
                _: 1
            })
        }
    }
})
  , fe = ["innerHTML"]
  , $e = {
    class: "bs-content-image is-playground"
}
  , be = ["innerHTML"]
  , ke = {
    class: "bs-content-description is-playground"
}
  , Le = ["innerHTML"]
  , Me = {
    class: "bs-content-info is-keys"
}
  , Te = ["innerHTML"]
  , Se = {
    class: "bs-content-input is-playground"
}
  , He = ["placeholder"]
  , Ce = ["innerHTML"]
  , Ie = H({
    __name: "PlaygroundGame",
    props: {
        promo: {}
    },
    setup(h) {
        const m = D()
          , l = C()
          , a = k()
          , t = v("")
          , i = v(!1)
          , s = v(!1)
          , g = v(!1);
        let n;
        const f = async()=>{
            t.value && (i.value = !0,
            n = Z.promise({
                title: $().$i18n.t("messages.process_request")
            }),
            await m.postApplyPromocode(t.value).then(o=>{
                setTimeout(()=>{
                    i.value = !1
                }
                , 400),
                k().useHapticFeedback("heavy"),
                n == null || n.resolve({
                    message: `${$().$i18n.t("messages.success")}`,
                    duration: 4e3
                }),
                l.trackEvent("promo_playground_redeem_success"),
                t.value = ""
            }
            ).catch(o=>{
                var S;
                i.value = !1;
                const d = (S = o == null ? void 0 : o.data) == null ? void 0 : S.error_code;
                if (console.log(o),
                l.trackEvent("promo_playground_redeem_error"),
                k().useHapticFeedback("heavy"),
                d)
                    switch (d) {
                    case "InvalidPromoCode":
                        {
                            n == null || n.reject($().$i18n.t("messages.INVALID_PROMOCODE"));
                            break
                        }
                    case "MaxKeysReceived":
                        {
                            n == null || n.reject($().$i18n.t("messages.MAX_KEYS"));
                            break
                        }
                    default:
                        {
                            n == null || n.reject($().$i18n.t("messages.INVALID_PROMOCODE"));
                            break
                        }
                    }
                else
                    n == null || n.reject($().$i18n.t("messages.oops"))
            }
            ))
        }
          , y = ()=>{
            s.value = !0,
            l.trackEvent("promo_playground_click_onboarding"),
            a.bottom_sheet_close_visible = !1
        }
          , u = ()=>{
            s.value = !1,
            a.bottom_sheet_close_visible = !0
        }
          , T = ()=>{
            g.value = !0
        }
          , b = ()=>{
            g.value = !1,
            window.scrollTo(0, 0)
        }
        ;
        return q(()=>{
            t.value = "",
            a.bottom_sheet_close_visible = !0
        }
        ),
        (o,d)=>{
            const S = w
              , N = P
              , z = J
              , G = V;
            return c(),
            _("div", {
                class: Y(["bs-content", `${r(g) ? "playground-is-keyboard-open" : ""}`])
            }, [e("div", {
                class: "playground-onboard-button",
                onClick: y
            }, [p(S, {
                name: "eyes"
            }), e("span", {
                innerHTML: o.$t("playground.watch_onboarding")
            }, null, 8, fe)]), e("div", $e, [p(N, {
                image: o.promo.modalImage.defaultUrl,
                compressed: o.promo.modalImage.compressedUrl
            }, null, 8, ["image", "compressed"])]), e("div", {
                class: "bs-content-subtitle",
                innerHTML: r(l).getLocalizedString(o.promo.title)
            }, null, 8, be), e("div", ke, [p(z, {
                class: "button button-primary button-small",
                target: "_blank",
                to: o.promo.appUrl
            }, {
                default: I(()=>[p(N, {
                    image: o.promo.icon.defaultUrl,
                    compressed: o.promo.icon.compressedUrl
                }, null, 8, ["image", "compressed"]), e("span", {
                    innerHTML: o.$t("buttons.play")
                }, null, 8, Le)]),
                _: 1
            }, 8, ["to"])]), e("div", Me, [p(S, {
                class: "key-icon",
                name: "key"
            }), e("span", {
                innerHTML: o.$t("playground.keys_received_2", {
                    current: r(m).getReceiveKeysToday(o.promo.promoId),
                    max: o.promo.keysPerDay
                })
            }, null, 8, Te)]), e("div", Se, [L(e("input", {
                class: "input input-default",
                name: "promocode",
                "onUpdate:modelValue": d[0] || (d[0] = K=>X(t) ? t.value = K : null),
                onFocus: T,
                onBlur: b,
                placeholder: o.$t("playground.past_code")
            }, null, 40, He), [[W, r(t)]])]), e("button", {
                class: "button button-primary button-default",
                onClick: f
            }, [r(i) ? (c(),
            M(G, {
                key: 1
            })) : (c(),
            _("span", {
                key: 0,
                innerHTML: o.$t("promo.redeem_modal_redeem_button")
            }, null, 8, Ce))]), r(s) ? (c(),
            M(he, {
                key: 0,
                promo: o.promo,
                closeSlider: u
            }, null, 8, ["promo"])) : E("", !0)], 2)
        }
    }
})
  , we = ["promo"]
  , Pe = {
    class: "playground-item-background"
}
  , Ue = {
    class: "playground-item-content"
}
  , Ee = {
    class: "playground-item-icon"
}
  , De = ["innerHTML"]
  , Ne = ["innerHTML"]
  , Ae = {
    class: "playground-item-footer"
}
  , Be = {
    class: "playground-item-footer-left"
}
  , Fe = ["innerHTML"]
  , Oe = ["innerHTML"]
  , Re = H({
    __name: "Playground",
    props: {
        promo: {}
    },
    setup(h) {
        const {$event: m} = $()
          , l = D()
          , a = C()
          , t = h
          , i = async()=>{
            a.trackEvent(`promo_playground_click_${t.promo.promoId}`),
            m("bs:open", {
                component: Q(Ie),
                props: {
                    promo: t.promo
                }
            })
        }
        ;
        return (s,g)=>{
            const n = P
              , f = w;
            return c(),
            _("div", {
                class: "playground-item",
                onClick: i,
                promo: s.promo
            }, [e("div", Pe, [p(n, {
                image: s.promo.image.defaultUrl,
                compressed: s.promo.image.compressedUrl
            }, null, 8, ["image", "compressed"])]), e("div", Ue, [e("div", Ee, [p(n, {
                image: s.promo.icon.defaultUrl,
                compressed: s.promo.icon.compressedUrl
            }, null, 8, ["image", "compressed"])]), e("div", {
                class: "playground-item-title",
                innerHTML: r(a).getLocalizedString(s.promo.title)
            }, null, 8, De), e("div", {
                class: "playground-item-description",
                innerHTML: r(a).getLocalizedString(s.promo.description)
            }, null, 8, Ne), e("div", Ae, [e("div", Be, [p(f, {
                class: "key-icon",
                name: "key"
            }), e("span", {
                innerHTML: s.$t("playground.keys_received_1", {
                    current: r(l).getReceiveKeysToday(s.promo.promoId),
                    max: s.promo.keysPerDay
                })
            }, null, 8, Fe)]), e("div", {
                class: "playground-item-footer-right",
                innerHTML: s.$t("playground.keys_up_to", {
                    max: s.promo.keysPerDay
                })
            }, null, 8, Oe)])])], 8, we)
        }
    }
})
  , Ve = {
    class: "main"
}
  , ze = {
    class: "inner playground"
}
  , Ge = {
    class: "playground-top"
}
  , Ke = {
    class: "playground-top-left"
}
  , je = ["innerHTML"]
  , qe = ["innerHTML"]
  , We = ["innerHTML"]
  , Xe = {
    class: "playground-top-right"
}
  , Ye = {
    class: "playground-top-right-image"
}
  , Ze = {
    class: "playground-top-right-counter"
}
  , Je = e("div", {
    class: "playground-divider"
}, null, -1)
  , Qe = {
    class: "playground-games"
}
  , xe = ["innerHTML"]
  , to = H({
    __name: "playground",
    setup(h) {
        const m = x()
          , l = D()
          , a = C();
        k();
        const t = v(!1);
        return ee(()=>{
            t.value = !0,
            l.postGetPromos().then(i=>{
                t.value = !1
            }
            ).catch(i=>{
                console.log(i),
                t.value = !1,
                k().useHapticFeedback("heavy"),
                a.showErrorPush()
            }
            )
        }
        ),
        (i,s)=>{
            const g = w
              , n = P
              , f = V
              , y = Re
              , u = U("motion-slide-left")
              , T = U("motion-slide-right")
              , b = U("motion-pop");
            return c(),
            _("main", Ve, [e("div", ze, [e("div", Ge, [L((c(),
            _("div", Ke, [e("div", {
                class: "playground-top-left-title",
                innerHTML: i.$t("playground.title")
            }, null, 8, je), e("div", {
                class: "playground-top-left-description",
                innerHTML: i.$t("playground.description_1")
            }, null, 8, qe), e("div", {
                class: "playground-top-left-description",
                innerHTML: i.$t("playground.description_2")
            }, null, 8, We)])), [[u]]), L((c(),
            _("div", Xe, [e("div", Ye, [p(g, {
                name: "glow"
            }), p(n, {
                image: "/images/minigame/key.png",
                compressed: "/images/minigame/key.webp"
            })]), e("div", Ze, R(r(m).balanceKeys ?? 0), 1)])), [[T]])]), Je, e("div", Qe, [r(t) ? (c(),
            M(f, {
                key: 0
            })) : E("", !0), (c(!0),
            _(F, null, O(r(l).promos, o=>L((c(),
            M(y, {
                promo: o,
                key: `${o.promoId}`
            }, null, 8, ["promo"])), [[b]])), 128))]), e("div", {
                class: "playground-footer",
                innerHTML: i.$t("playground.bottom_text")
            }, null, 8, xe)])])
        }
    }
});
export {to as default};
