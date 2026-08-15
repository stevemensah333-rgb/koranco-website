import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  L as a,
  M as o,
  N as s,
  P as c,
  R as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  k as _,
  l as v,
  m as y,
  n as b,
  o as x,
  p as ee,
  r as S,
  t as te,
  u as C,
  v as w,
  x as T,
} from "./react.D20wc1Tc.mjs";
import { C as E, a as D, r as O, t as k } from "./motion.uzrgujnr.mjs";
import {
  $ as A,
  B as ne,
  C as j,
  D as re,
  E as M,
  F as N,
  H as P,
  I as ie,
  J as ae,
  K as oe,
  O as F,
  P as I,
  Q as se,
  S as ce,
  V as L,
  W as le,
  X as ue,
  Z as de,
  _ as fe,
  c as pe,
  ct as me,
  d as he,
  dt as ge,
  et as _e,
  f as ve,
  h as ye,
  ht as be,
  i as xe,
  it as R,
  l as Se,
  lt as z,
  m as Ce,
  n as we,
  p as Te,
  pt as Ee,
  q as De,
  r as B,
  rt as Oe,
  s as ke,
  st as Ae,
  t as V,
  tt as je,
  v as H,
  x as U,
  y as W,
  z as Me,
} from "./framer.CcvScyIW.mjs";
import {
  C as Ne,
  D as Pe,
  E as Fe,
  O as Ie,
  S as Le,
  T as Re,
  _ as ze,
  c as Be,
  g as Ve,
  h as He,
  m as Ue,
  p as We,
  s as Ge,
  v as Ke,
  w as qe,
  x as Je,
} from "./shared-lib.cuT66AuJ.mjs";
var Ye,
  Xe,
  Ze,
  Qe = e(() => {
    (L(),
      re.loadFonts([]),
      (Ye = [{ explicitInter: !0, fonts: [] }]),
      (Xe = [
        `.framer-kDo1n .framer-styles-preset-ygi8yh:not(.rich-text-wrapper), .framer-kDo1n .framer-styles-preset-ygi8yh.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, #04303b); --framer-link-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (Ze = `framer-kDo1n`));
  });
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  G,
  ut = e(() => {
    (x(),
      L(),
      k(),
      n(),
      Ie(),
      qe(),
      (et = { BCuilkB0J: { hover: !0 }, J3ytNtmAq: { hover: !0 }, vnvvf_HX_: { hover: !0 } }),
      (tt = [`BCuilkB0J`, `UaQknSXgj`, `vnvvf_HX_`, `J3ytNtmAq`]),
      (nt = `framer-Afsj2`),
      (rt = {
        BCuilkB0J: `framer-v-13kgq8g`,
        J3ytNtmAq: `framer-v-eaj2v3`,
        UaQknSXgj: `framer-v-i92ucg`,
        vnvvf_HX_: `framer-v-8bnrzo`,
      }),
      (it = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (at = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (ot = {
        "Footer Menu": `vnvvf_HX_`,
        "Social Media": `J3ytNtmAq`,
        Desktop: `BCuilkB0J`,
        Phone: `UaQknSXgj`,
      }),
      (st = E.create(s)),
      (ct = ({ click: e, height: t, id: n, link: r, text: i, width: a, ...o }) => ({
        ...o,
        Bc8FZ00dQ: e ?? o.Bc8FZ00dQ,
        ckb6EcbZO: r ?? o.ckb6EcbZO,
        q_qRHASvW: i ?? o.q_qRHASvW ?? `Home`,
        variant: ot[o.variant] ?? o.variant ?? `BCuilkB0J`,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = z(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = w(),
            { activeLocale: o, setLocale: c } = R();
          se();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              q_qRHASvW: m,
              ckb6EcbZO: h,
              Bc8FZ00dQ: g,
              ..._
            } = ct(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: ee,
              gestureVariant: S,
              isLoading: te,
              setGestureState: C,
              setVariant: T,
              variants: D,
            } = me({
              cycleOrder: tt,
              defaultVariant: `BCuilkB0J`,
              enabledGestures: et,
              ref: i,
              variant: p,
              variantClassNames: rt,
            }),
            k = lt(e, D),
            { activeVariantCallback: A, delay: ne } = de(y),
            j = A(async (...e) => {
              if ((C({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            re = M(nt, Re, Je),
            N = () =>
              !!(
                [`vnvvf_HX_-hover`, `J3ytNtmAq-hover`].includes(S) ||
                [`vnvvf_HX_`, `J3ytNtmAq`].includes(y)
              );
          return f(O, {
            id: d ?? a,
            children: f(st, {
              animate: D,
              initial: !1,
              children: f(at, {
                value: it,
                children: f(ve, {
                  href: h,
                  motionChild: !0,
                  nodeId: `BCuilkB0J`,
                  openInNewTab: !1,
                  scopeId: `DXmNUVOs1`,
                  smoothScroll: !0,
                  ...$e({ J3ytNtmAq: { openInNewTab: !0 } }, y, S),
                  children: v(E.a, {
                    ..._,
                    ...ee,
                    className: `${M(re, `framer-13kgq8g`, u, b)} framer-15ixxp3`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: k,
                    layoutId: `BCuilkB0J`,
                    onTap: j,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 42,
                      borderBottomRightRadius: 42,
                      borderTopLeftRadius: 42,
                      borderTopRightRadius: 42,
                      ...l,
                    },
                    variants: {
                      "BCuilkB0J-hover": {
                        backgroundColor: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                      },
                      J3ytNtmAq: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      UaQknSXgj: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      vnvvf_HX_: {
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                    },
                    ...$e(
                      {
                        "BCuilkB0J-hover": { "data-framer-name": void 0 },
                        "J3ytNtmAq-hover": { "data-framer-name": void 0 },
                        "vnvvf_HX_-hover": { "data-framer-name": void 0 },
                        J3ytNtmAq: { "data-framer-name": `Social Media` },
                        UaQknSXgj: { "data-framer-name": `Phone` },
                        vnvvf_HX_: { "data-framer-name": `Footer Menu` },
                      },
                      y,
                      S
                    ),
                    children: [
                      f(W, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(E.p, {
                            className: `framer-styles-preset-1h0pk3x`,
                            "data-styles-preset": `c84NHGXvh`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                            },
                            children: `Home`,
                          }),
                        }),
                        className: `framer-10zuzos`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `XcHKCY6XV`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        variants: {
                          "BCuilkB0J-hover": {
                            "--extracted-r6o4lv": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                          },
                          "J3ytNtmAq-hover": {
                            "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                          },
                          "vnvvf_HX_-hover": {
                            "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                          },
                          J3ytNtmAq: {
                            "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                          },
                          vnvvf_HX_: {
                            "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...$e(
                          {
                            "BCuilkB0J-hover": {
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-1h0pk3x`,
                                  "data-styles-preset": `c84NHGXvh`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                            "J3ytNtmAq-hover": {
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-1733zfo`,
                                  "data-styles-preset": `Mbm17cVdN`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                            "vnvvf_HX_-hover": {
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-1733zfo`,
                                  "data-styles-preset": `Mbm17cVdN`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                            J3ytNtmAq: {
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-1733zfo`,
                                  "data-styles-preset": `Mbm17cVdN`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                            UaQknSXgj: {
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-1733zfo`,
                                  "data-styles-preset": `Mbm17cVdN`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                            vnvvf_HX_: {
                              children: f(s, {
                                children: f(E.p, {
                                  className: `framer-styles-preset-1733zfo`,
                                  "data-styles-preset": `Mbm17cVdN`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                          },
                          y,
                          S
                        ),
                      }),
                      N() &&
                        f(E.div, {
                          className: `framer-yv4vvz`,
                          "data-framer-name": `Line`,
                          layoutDependency: k,
                          layoutId: `f5LkWnVUh`,
                          style: {
                            backgroundColor: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                            opacity: 0,
                          },
                          variants: {
                            "J3ytNtmAq-hover": { opacity: 1 },
                            "vnvvf_HX_-hover": { opacity: 1 },
                          },
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Afsj2.framer-15ixxp3, .framer-Afsj2 .framer-15ixxp3 { display: block; }`,
          `.framer-Afsj2.framer-13kgq8g { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 11px 18px 11px 18px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Afsj2 .framer-10zuzos { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-Afsj2 .framer-yv4vvz { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; width: 2px; z-index: 1; }`,
          `.framer-Afsj2.framer-v-i92ucg.framer-13kgq8g, .framer-Afsj2.framer-v-8bnrzo.framer-13kgq8g, .framer-Afsj2.framer-v-eaj2v3.framer-13kgq8g { padding: 0px; will-change: unset; }`,
          `.framer-Afsj2.framer-v-8bnrzo.hover.framer-13kgq8g, .framer-Afsj2.framer-v-eaj2v3.hover.framer-13kgq8g { will-change: unset; }`,
          `.framer-Afsj2.framer-v-8bnrzo.hover .framer-yv4vvz, .framer-Afsj2.framer-v-eaj2v3.hover .framer-yv4vvz { width: 100%; }`,
          ...Fe,
          ...Le,
        ],
        `framer-Afsj2`
      )),
      (G.displayName = `Menu`),
      (G.defaultProps = { height: 48, width: 82 }),
      j(G, {
        variant: {
          options: [`BCuilkB0J`, `UaQknSXgj`, `vnvvf_HX_`, `J3ytNtmAq`],
          optionTitles: [`Desktop`, `Phone`, `Footer Menu`, `Social Media`],
          title: `Variant`,
          type: B.Enum,
        },
        q_qRHASvW: { defaultValue: `Home`, displayTextArea: !1, title: `Text`, type: B.String },
        onq_qRHASvWChange: { changes: `q_qRHASvW`, type: B.ChangeHandler },
        ckb6EcbZO: { title: `Link`, type: B.Link },
        Bc8FZ00dQ: { title: `Click`, type: B.EventHandler },
      }),
      ce(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...N(Pe),
          ...N(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  K,
  yt = e(() => {
    (x(),
      L(),
      k(),
      n(),
      (dt = `framer-QTkBR`),
      (ft = { F2OXfYX3y: `framer-v-19i4gsz` }),
      (pt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (mt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ht = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (gt = E.create(s)),
      (_t = ({ click: e, height: t, id: n, image: r, link: i, width: a, ...o }) => ({
        ...o,
        on9w0lx6m: i ?? o.on9w0lx6m,
        rDYfjbavm: e ?? o.rDYfjbavm,
        rjcu4ASZe: r ??
          o.rjcu4ASZe ?? {
            pixelHeight: 695,
            pixelWidth: 695,
            src: `../../assets/images/wuQr8zED6pERTtGdsItynbUjr0.jpg`,
          },
      })),
      (vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = z(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = w(),
            { activeLocale: o, setLocale: s } = R(),
            c = se(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              rjcu4ASZe: m,
              on9w0lx6m: h,
              rDYfjbavm: g,
              ..._
            } = _t(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ee,
              isLoading: S,
              setGestureState: te,
              setVariant: C,
              variants: T,
            } = me({ defaultVariant: `F2OXfYX3y`, ref: i, variant: p, variantClassNames: ft }),
            E = vt(e, T),
            { activeVariantCallback: D, delay: k } = de(v),
            A = D(async (...e) => {
              if ((te({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            ne = M(dt);
          return f(O, {
            id: d ?? a,
            children: f(gt, {
              animate: T,
              initial: !1,
              children: f(ht, {
                value: mt,
                children: f(ve, {
                  href: h,
                  motionChild: !0,
                  nodeId: `F2OXfYX3y`,
                  openInNewTab: !1,
                  scopeId: `h2FW11Icj`,
                  smoothScroll: !0,
                  children: f(Se, {
                    ..._,
                    ...x,
                    as: `a`,
                    background: {
                      alt: `Koranco Farms logo`,
                      fit: `fit`,
                      loading: ie(c?.y || 0),
                      pixelHeight: 695,
                      pixelWidth: 695,
                      sizes: c?.width || `100vw`,
                      ...pt(m),
                      positionX: `center`,
                      positionY: `center`,
                    },
                    className: `${M(ne, `framer-19i4gsz`, u, y)} framer-zi2zn5`,
                    "data-framer-name": `Desktop`,
                    "data-highlight": !0,
                    layoutDependency: E,
                    layoutId: `F2OXfYX3y`,
                    onTap: A,
                    ref: i,
                    style: { ...l },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-QTkBR.framer-zi2zn5, .framer-QTkBR .framer-zi2zn5 { display: block; }`,
          `.framer-QTkBR.framer-19i4gsz { cursor: pointer; height: 44px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 135px; will-change: var(--framer-will-change-filter-override, filter); }`,
        ],
        `framer-QTkBR`
      )),
      (K.displayName = `Logo`),
      (K.defaultProps = { height: 44, width: 135 }),
      j(K, {
        rjcu4ASZe: {
          __defaultAssetReference: `data:framer/asset-reference,wuQr8zED6pERTtGdsItynbUjr0.jpg?originalFilename=517436029_17842562598536554_2282745132490575766_n.jpg&width=695&height=695`,
          title: `Image`,
          type: B.ResponsiveImage,
        },
        on9w0lx6m: { title: `Link`, type: B.Link },
        rDYfjbavm: { title: `Click`, type: B.EventHandler },
      }),
      ce(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  J,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  Y,
  It = e(() => {
    (x(),
      L(),
      k(),
      n(),
      Ie(),
      Qe(),
      qe(),
      ut(),
      yt(),
      (bt = I(K)),
      (xt = I(G)),
      (St = ge(E.div)),
      (Ct = [`tnmfpfdFf`, `BNQ8oIrrG`, `NMhJIQfsi`]),
      (wt = `framer-GX2C0`),
      (Tt = {
        BNQ8oIrrG: `framer-v-8ailnp`,
        NMhJIQfsi: `framer-v-yy79od`,
        tnmfpfdFf: `framer-v-1a68sm8`,
      }),
      (Et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Dt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Ot = { damping: 55, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (kt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ot,
        x: 0,
        y: 40,
      }),
      (At = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (jt = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Mt = { Desktop: `tnmfpfdFf`, Phone: `NMhJIQfsi`, Tablet: `BNQ8oIrrG` }),
      (Nt = E.create(s)),
      (Pt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Mt[r.variant] ?? r.variant ?? `tnmfpfdFf`,
      })),
      (Ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = z(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = w(),
            { activeLocale: o, setLocale: c } = R(),
            l = se(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = Pt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: S,
              setVariant: te,
              variants: C,
            } = me({
              cycleOrder: Ct,
              defaultVariant: `tnmfpfdFf`,
              ref: i,
              variant: m,
              variantClassNames: Tt,
            }),
            T = Ft(e, C),
            D = M(wt, Je, Ze, Re);
          return (
            Ae(),
            f(O, {
              id: p ?? a,
              children: f(Nt, {
                animate: C,
                initial: !1,
                children: f(jt, {
                  value: Et,
                  children: f(E.footer, {
                    ...h,
                    ...b,
                    className: M(D, `framer-1a68sm8`, d, _),
                    "data-framer-name": `Desktop`,
                    layoutDependency: T,
                    layoutId: `tnmfpfdFf`,
                    ref: i,
                    style: { ...u },
                    ...q(
                      {
                        BNQ8oIrrG: { "data-framer-name": `Tablet` },
                        NMhJIQfsi: { "data-framer-name": `Phone` },
                      },
                      g,
                      x
                    ),
                    children: v(St, {
                      __framer__animate: { transition: Ot },
                      __framer__animateOnce: !0,
                      __framer__enter: Dt,
                      __framer__exit: kt,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1nudw8j`,
                      "data-framer-name": `Container`,
                      layoutDependency: T,
                      layoutId: `UnESx1H_r`,
                      style: {
                        backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      variants: {
                        NMhJIQfsi: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                      },
                      children: [
                        v(E.div, {
                          className: `framer-1jkcl0a`,
                          "data-framer-name": `Footer Top`,
                          layoutDependency: T,
                          layoutId: `sJJ8Dv2Kv`,
                          children: [
                            v(E.div, {
                              className: `framer-1k7uxv6`,
                              "data-framer-name": `Footer Item`,
                              layoutDependency: T,
                              layoutId: `G2krGMKuT`,
                              children: [
                                f(H, {
                                  links: [
                                    {
                                      href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 44,
                                      width: `135px`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                        48 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      ...q(
                                        {
                                          BNQ8oIrrG: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              (((l?.height || 200) - 0 - 928.8) / 2 + 0 + 0) +
                                              36 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          NMhJIQfsi: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              (((l?.height || 200) - 0 - 1167.6) / 2 + 0 + 0) +
                                              24 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        g,
                                        x
                                      ),
                                      children: f(U, {
                                        className: `framer-kky35s-container`,
                                        layoutDependency: T,
                                        layoutId: `PzH_Tm0N9-container`,
                                        nodeId: `PzH_Tm0N9`,
                                        rendersWithMotion: !0,
                                        scopeId: `ll_bAltcE`,
                                        children: f(K, {
                                          height: `100%`,
                                          id: `PzH_Tm0N9`,
                                          layoutId: `PzH_Tm0N9`,
                                          on9w0lx6m: e[0],
                                          rjcu4ASZe: At(void 0, `Koranco Farms logo`),
                                          style: { height: `100%`, width: `100%` },
                                          width: `100%`,
                                          ...q(
                                            {
                                              BNQ8oIrrG: { on9w0lx6m: e[1] },
                                              NMhJIQfsi: { on9w0lx6m: e[2] },
                                            },
                                            g,
                                            x
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                f(W, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-1733zfo`,
                                      "data-styles-preset": `Mbm17cVdN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                      },
                                      children: `Transforming agriculture through smart, sustainable innovation.`,
                                    }),
                                  }),
                                  className: `framer-ionyng`,
                                  fonts: [`Inter`],
                                  layoutDependency: T,
                                  layoutId: `dX6tb7LDC`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(W, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(E.p, {
                                      className: `framer-styles-preset-1733zfo`,
                                      "data-styles-preset": `Mbm17cVdN`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `start`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                      },
                                      children: f(ve, {
                                        href: `mailto:info@farmio.com`,
                                        motionChild: !0,
                                        nodeId: `HRLJIL5UM`,
                                        openInNewTab: !0,
                                        relValues: [],
                                        scopeId: `ll_bAltcE`,
                                        smoothScroll: !1,
                                        children: f(E.a, {
                                          className: `framer-styles-preset-ygi8yh`,
                                          "data-styles-preset": `FlxdrsxHu`,
                                          children: `info@korancofarms.com`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1ht7kt`,
                                  fonts: [`Inter`],
                                  layoutDependency: T,
                                  layoutId: `HRLJIL5UM`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            v(E.div, {
                              className: `framer-17x9v8f`,
                              "data-framer-name": `Footer Item`,
                              layoutDependency: T,
                              layoutId: `LiGlGgUwj`,
                              children: [
                                v(E.div, {
                                  className: `framer-xpunvl`,
                                  "data-framer-name": `Link Item`,
                                  layoutDependency: T,
                                  layoutId: `qeyayuQr_`,
                                  children: [
                                    f(W, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-1733zfo`,
                                          "data-styles-preset": `Mbm17cVdN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                          },
                                          children: `Quick links`,
                                        }),
                                      }),
                                      className: `framer-1f02cqw`,
                                      "data-framer-name": `Quick links`,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `UMXzPAZCu`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    v(E.div, {
                                      className: `framer-1vnbeqz`,
                                      "data-framer-name": `Menu Wrapper`,
                                      layoutDependency: T,
                                      layoutId: `kuIS1fn9T`,
                                      children: [
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                0,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      0,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-prsc7c-container`,
                                                layoutDependency: T,
                                                layoutId: `srhEqcW9Z-container`,
                                                nodeId: `srhEqcW9Z`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `srhEqcW9Z`,
                                                  layoutId: `srhEqcW9Z`,
                                                  q_qRHASvW: `Home`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:SmyffEGq3`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:SmyffEGq3`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:SmyffEGq3`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                60,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      60,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      58,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-wa1g8k-container`,
                                                layoutDependency: T,
                                                layoutId: `d_NWw78Ce-container`,
                                                nodeId: `d_NWw78Ce`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `d_NWw78Ce`,
                                                  layoutId: `d_NWw78Ce`,
                                                  q_qRHASvW: `About us`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:evVl76OK0`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:evVl76OK0`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:evVl76OK0`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                120,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      120,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      116,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-sveuep-container`,
                                                layoutDependency: T,
                                                layoutId: `g5XVU3hFM-container`,
                                                nodeId: `g5XVU3hFM`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `g5XVU3hFM`,
                                                  layoutId: `g5XVU3hFM`,
                                                  q_qRHASvW: `Our solutions`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:zD8b77ZSf`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:zD8b77ZSf`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:zD8b77ZSf`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                180,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      180,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      174,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-nqpc0d-container`,
                                                layoutDependency: T,
                                                layoutId: `pWcnliyMf-container`,
                                                nodeId: `pWcnliyMf`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `pWcnliyMf`,
                                                  layoutId: `pWcnliyMf`,
                                                  q_qRHASvW: `Our services`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v(E.div, {
                                  className: `framer-wyq9dm`,
                                  "data-framer-name": `Link Item`,
                                  layoutDependency: T,
                                  layoutId: `JiErNUTXb`,
                                  children: [
                                    f(W, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-1733zfo`,
                                          "data-styles-preset": `Mbm17cVdN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                          },
                                          children: `Navigation`,
                                        }),
                                      }),
                                      className: `framer-1ybf3bn`,
                                      "data-framer-name": `Quick links`,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `LPsBjgpl0`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    v(E.div, {
                                      className: `framer-1uuakb4`,
                                      "data-framer-name": `Menu Wrapper`,
                                      layoutDependency: T,
                                      layoutId: `UA4bZ4yCh`,
                                      children: [
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:CgfBgzOyY`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:CgfBgzOyY`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:CgfBgzOyY`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                0,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      0,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-k6xwsm-container`,
                                                layoutDependency: T,
                                                layoutId: `NxEQZskUS-container`,
                                                nodeId: `NxEQZskUS`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `NxEQZskUS`,
                                                  layoutId: `NxEQZskUS`,
                                                  q_qRHASvW: `Our team`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:zjlPpsn_n`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:zjlPpsn_n`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:zjlPpsn_n`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                60,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      60,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      58,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-1vt9m8k-container`,
                                                layoutDependency: T,
                                                layoutId: `bMBalZDLz-container`,
                                                nodeId: `bMBalZDLz`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `bMBalZDLz`,
                                                  layoutId: `bMBalZDLz`,
                                                  q_qRHASvW: `Testimonial`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(H, {
                                          links: [
                                            {
                                              href: { hash: `:gYTaKdUjG`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:gYTaKdUjG`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { hash: `:gYTaKdUjG`, webPageId: `augiA20Il` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                120,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      120,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      116,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-15sgfmh-container`,
                                                layoutDependency: T,
                                                layoutId: `yxszysvnI-container`,
                                                nodeId: `yxszysvnI`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `yxszysvnI`,
                                                  layoutId: `yxszysvnI`,
                                                  q_qRHASvW: `Faqs`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                        f(H, {
                                          links: [
                                            {
                                              href: { webPageId: `RZ3TFTk6s` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `RZ3TFTk6s` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `RZ3TFTk6s` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            f(V, {
                                              height: 48,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                                48 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                180,
                                              ...q(
                                                {
                                                  BNQ8oIrrG: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 928.8) / 2 +
                                                        0 +
                                                        0) +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      404 +
                                                      0 +
                                                      0 +
                                                      44.8 +
                                                      0 +
                                                      180,
                                                  },
                                                  NMhJIQfsi: {
                                                    y:
                                                      (l?.y || 0) +
                                                      0 +
                                                      (((l?.height || 200) - 0 - 1167.6) / 2 +
                                                        0 +
                                                        0) +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      396 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      42.8 +
                                                      0 +
                                                      174,
                                                  },
                                                },
                                                g,
                                                x
                                              ),
                                              children: f(U, {
                                                className: `framer-14z1skc-container`,
                                                layoutDependency: T,
                                                layoutId: `X9_k24FX5-container`,
                                                nodeId: `X9_k24FX5`,
                                                rendersWithMotion: !0,
                                                scopeId: `ll_bAltcE`,
                                                children: f(G, {
                                                  ckb6EcbZO: e[0],
                                                  height: `100%`,
                                                  id: `X9_k24FX5`,
                                                  layoutId: `X9_k24FX5`,
                                                  q_qRHASvW: `Contact us`,
                                                  variant: J(`vnvvf_HX_`),
                                                  width: `100%`,
                                                  ...q(
                                                    {
                                                      BNQ8oIrrG: { ckb6EcbZO: e[1] },
                                                      NMhJIQfsi: { ckb6EcbZO: e[2] },
                                                    },
                                                    g,
                                                    x
                                                  ),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v(E.div, {
                                  className: `framer-7ye2dh`,
                                  "data-framer-name": `Link Item`,
                                  layoutDependency: T,
                                  layoutId: `OrLnExxCr`,
                                  children: [
                                    f(W, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(E.p, {
                                          className: `framer-styles-preset-1733zfo`,
                                          "data-styles-preset": `Mbm17cVdN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                          },
                                          children: `Social Handle`,
                                        }),
                                      }),
                                      className: `framer-qkrq75`,
                                      "data-framer-name": `Quick links`,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `C52aNBbIu`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    v(E.div, {
                                      className: `framer-1w7hil2`,
                                      "data-framer-name": `Menu Wrapper`,
                                      layoutDependency: T,
                                      layoutId: `bQDJHZCFU`,
                                      children: [
                                        f(V, {
                                          height: 48,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                            48 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            160 +
                                            0 +
                                            0,
                                          ...q(
                                            {
                                              BNQ8oIrrG: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 928.8) / 2 + 0 + 0) +
                                                  36 +
                                                  0 +
                                                  0 +
                                                  404 +
                                                  0 +
                                                  0 +
                                                  44.8 +
                                                  0 +
                                                  0,
                                              },
                                              NMhJIQfsi: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 1167.6) / 2 + 0 + 0) +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  396 +
                                                  0 +
                                                  288.8 +
                                                  0 +
                                                  42.8 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: f(U, {
                                            className: `framer-1f22nmr-container`,
                                            layoutDependency: T,
                                            layoutId: `wMNEkZXsY-container`,
                                            nodeId: `wMNEkZXsY`,
                                            rendersWithMotion: !0,
                                            scopeId: `ll_bAltcE`,
                                            children: f(G, {
                                              ckb6EcbZO: `facebook.com`,
                                              height: `100%`,
                                              id: `wMNEkZXsY`,
                                              layoutId: `wMNEkZXsY`,
                                              q_qRHASvW: `Facebook`,
                                              variant: J(`J3ytNtmAq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        f(V, {
                                          height: 48,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                            48 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            160 +
                                            0 +
                                            60,
                                          ...q(
                                            {
                                              BNQ8oIrrG: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 928.8) / 2 + 0 + 0) +
                                                  36 +
                                                  0 +
                                                  0 +
                                                  404 +
                                                  0 +
                                                  0 +
                                                  44.8 +
                                                  0 +
                                                  60,
                                              },
                                              NMhJIQfsi: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 1167.6) / 2 + 0 + 0) +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  396 +
                                                  0 +
                                                  288.8 +
                                                  0 +
                                                  42.8 +
                                                  0 +
                                                  58,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: f(U, {
                                            className: `framer-q369si-container`,
                                            layoutDependency: T,
                                            layoutId: `jKPauxpry-container`,
                                            nodeId: `jKPauxpry`,
                                            rendersWithMotion: !0,
                                            scopeId: `ll_bAltcE`,
                                            children: f(G, {
                                              ckb6EcbZO: `Instagram.com`,
                                              height: `100%`,
                                              id: `jKPauxpry`,
                                              layoutId: `jKPauxpry`,
                                              q_qRHASvW: `Instagram`,
                                              variant: J(`J3ytNtmAq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        f(V, {
                                          height: 48,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                            48 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            160 +
                                            0 +
                                            120,
                                          ...q(
                                            {
                                              BNQ8oIrrG: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 928.8) / 2 + 0 + 0) +
                                                  36 +
                                                  0 +
                                                  0 +
                                                  404 +
                                                  0 +
                                                  0 +
                                                  44.8 +
                                                  0 +
                                                  120,
                                              },
                                              NMhJIQfsi: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 1167.6) / 2 + 0 + 0) +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  396 +
                                                  0 +
                                                  288.8 +
                                                  0 +
                                                  42.8 +
                                                  0 +
                                                  116,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: f(U, {
                                            className: `framer-1e5ybgx-container`,
                                            layoutDependency: T,
                                            layoutId: `QUO8boiMD-container`,
                                            nodeId: `QUO8boiMD`,
                                            rendersWithMotion: !0,
                                            scopeId: `ll_bAltcE`,
                                            children: f(G, {
                                              ckb6EcbZO: `threads.com`,
                                              height: `100%`,
                                              id: `QUO8boiMD`,
                                              layoutId: `QUO8boiMD`,
                                              q_qRHASvW: `Threads`,
                                              variant: J(`J3ytNtmAq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        f(V, {
                                          height: 48,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 676) / 2 + 0 + 0) +
                                            48 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            160 +
                                            0 +
                                            180,
                                          ...q(
                                            {
                                              BNQ8oIrrG: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 928.8) / 2 + 0 + 0) +
                                                  36 +
                                                  0 +
                                                  0 +
                                                  404 +
                                                  0 +
                                                  0 +
                                                  44.8 +
                                                  0 +
                                                  180,
                                              },
                                              NMhJIQfsi: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 200) - 0 - 1167.6) / 2 + 0 + 0) +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  396 +
                                                  0 +
                                                  288.8 +
                                                  0 +
                                                  42.8 +
                                                  0 +
                                                  174,
                                              },
                                            },
                                            g,
                                            x
                                          ),
                                          children: f(U, {
                                            className: `framer-1rhwwh5-container`,
                                            layoutDependency: T,
                                            layoutId: `ra1gvaECb-container`,
                                            nodeId: `ra1gvaECb`,
                                            rendersWithMotion: !0,
                                            scopeId: `ll_bAltcE`,
                                            children: f(G, {
                                              ckb6EcbZO: `pinterest.com`,
                                              height: `100%`,
                                              id: `ra1gvaECb`,
                                              layoutId: `ra1gvaECb`,
                                              q_qRHASvW: `Pinterest`,
                                              variant: J(`J3ytNtmAq`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(E.div, {
                          className: `framer-10htk5q`,
                          "data-border": !0,
                          "data-framer-name": `Copyright`,
                          layoutDependency: T,
                          layoutId: `bCRtg_cMG`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-0d75ac2f-9d46-4186-8b15-7ac3c86973df, rgba(4, 48, 59, 0.6))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                          },
                          children: f(W, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(E.p, {
                                className: `framer-styles-preset-1h0pk3x`,
                                "data-styles-preset": `c84NHGXvh`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                                },
                                children: `© 2026 Koranco Farms. All Rights Reserved.`,
                              }),
                            }),
                            className: `framer-l0midw`,
                            fonts: [`Inter`],
                            layoutDependency: T,
                            layoutId: `L8yBcY9kH`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-GX2C0.framer-1cav6kg, .framer-GX2C0 .framer-1cav6kg { display: block; }`,
          `.framer-GX2C0.framer-1a68sm8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 1200px; }`,
          `.framer-GX2C0 .framer-1nudw8j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: flex-start; max-width: 1380px; overflow: visible; padding: 48px; position: relative; width: 100%; }`,
          `.framer-GX2C0 .framer-1jkcl0a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-GX2C0 .framer-1k7uxv6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 344px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-GX2C0 .framer-kky35s-container { flex: none; height: 44px; position: relative; width: 135px; }`,
          `.framer-GX2C0 .framer-ionyng, .framer-GX2C0 .framer-1ht7kt, .framer-GX2C0 .framer-1f02cqw, .framer-GX2C0 .framer-1ybf3bn, .framer-GX2C0 .framer-qkrq75 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-GX2C0 .framer-17x9v8f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 52%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-GX2C0 .framer-xpunvl { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 210px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-GX2C0 .framer-1vnbeqz, .framer-GX2C0 .framer-1uuakb4, .framer-GX2C0 .framer-1w7hil2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-GX2C0 .framer-prsc7c-container, .framer-GX2C0 .framer-wa1g8k-container, .framer-GX2C0 .framer-sveuep-container, .framer-GX2C0 .framer-nqpc0d-container, .framer-GX2C0 .framer-k6xwsm-container, .framer-GX2C0 .framer-1vt9m8k-container, .framer-GX2C0 .framer-15sgfmh-container, .framer-GX2C0 .framer-14z1skc-container, .framer-GX2C0 .framer-1f22nmr-container, .framer-GX2C0 .framer-q369si-container, .framer-GX2C0 .framer-1e5ybgx-container, .framer-GX2C0 .framer-1rhwwh5-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-GX2C0 .framer-wyq9dm, .framer-GX2C0 .framer-7ye2dh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 120px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-GX2C0 .framer-10htk5q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-GX2C0 .framer-l0midw { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-GX2C0.framer-v-8ailnp.framer-1a68sm8 { width: 768px; }`,
          `.framer-GX2C0.framer-v-8ailnp .framer-1nudw8j { gap: 40px; max-width: 100%; padding: 36px; }`,
          `.framer-GX2C0.framer-v-8ailnp .framer-1jkcl0a { flex-direction: column; gap: 40px; justify-content: center; }`,
          `.framer-GX2C0.framer-v-8ailnp .framer-1k7uxv6, .framer-GX2C0.framer-v-yy79od .framer-l0midw { flex: none; width: 100%; }`,
          `.framer-GX2C0.framer-v-8ailnp .framer-17x9v8f { flex: none; max-width: 100%; width: 100%; }`,
          `.framer-GX2C0.framer-v-8ailnp .framer-xpunvl, .framer-GX2C0.framer-v-8ailnp .framer-wyq9dm, .framer-GX2C0.framer-v-8ailnp .framer-7ye2dh { flex: none; width: min-content; }`,
          `.framer-GX2C0.framer-v-8ailnp .framer-1f02cqw, .framer-GX2C0.framer-v-8ailnp .framer-1ybf3bn, .framer-GX2C0.framer-v-8ailnp .framer-qkrq75, .framer-GX2C0.framer-v-yy79od .framer-1f02cqw, .framer-GX2C0.framer-v-yy79od .framer-1ybf3bn, .framer-GX2C0.framer-v-yy79od .framer-qkrq75 { white-space: pre; width: auto; }`,
          `.framer-GX2C0.framer-v-yy79od.framer-1a68sm8 { padding: 0px 20px 0px 20px; width: 390px; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-1nudw8j { gap: 30px; max-width: 100%; padding: 24px 20px 24px 20px; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-1jkcl0a { flex-direction: column; gap: 32px; justify-content: center; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-1k7uxv6 { flex: none; max-width: unset; width: 100%; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-17x9v8f { align-content: unset; align-items: unset; display: grid; flex: none; gap: 24px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; max-width: 100%; width: 100%; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-xpunvl, .framer-GX2C0.framer-v-yy79od .framer-wyq9dm, .framer-GX2C0.framer-v-yy79od .framer-7ye2dh { align-self: start; flex: none; gap: 14px; justify-self: start; max-width: unset; width: 100%; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-1vnbeqz, .framer-GX2C0.framer-v-yy79od .framer-1uuakb4, .framer-GX2C0.framer-v-yy79od .framer-1w7hil2 { gap: 10px; }`,
          `.framer-GX2C0.framer-v-yy79od .framer-10htk5q { flex-direction: column; gap: 14px; }`,
          ...Le,
          ...Xe,
          ...Fe,
          `.framer-GX2C0[data-border="true"]::after, .framer-GX2C0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-GX2C0`
      )),
      (Y.displayName = `Footer`),
      (Y.defaultProps = { height: 369, width: 1200 }),
      j(Y, {
        variant: {
          options: [`tnmfpfdFf`, `BNQ8oIrrG`, `NMhJIQfsi`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      ce(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...bt,
          ...xt,
          ...N(Ne),
          ...N(Ye),
          ...N(Pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([F(K, {}, t), F(G, {}, t)])) }));
  }),
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  X,
  Kt = e(() => {
    (x(),
      L(),
      k(),
      n(),
      ut(),
      (Lt = I(G)),
      (Rt = `framer-q0Wn4`),
      (zt = { GHH7SEvIP: `framer-v-t7bs4m` }),
      (Bt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Vt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ht = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (Ut = E.create(s)),
      (Wt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        jTtO7Ve2d: e ?? i.jTtO7Ve2d,
      })),
      (Gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = z(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = w(),
            { activeLocale: o, setLocale: s } = R(),
            c = se(),
            { style: l, className: u, layoutId: d, variant: p, jTtO7Ve2d: m, ...h } = Wt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: S,
              setVariant: te,
              variants: C,
            } = me({ defaultVariant: `GHH7SEvIP`, ref: i, variant: p, variantClassNames: zt }),
            T = Gt(e, C),
            { activeVariantCallback: D, delay: k } = de(g),
            A = D(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            ne = M(Rt);
          return (
            Ae(),
            f(O, {
              id: d ?? a,
              children: f(Ut, {
                animate: C,
                initial: !1,
                children: f(Ht, {
                  value: Bt,
                  children: v(E.div, {
                    ...h,
                    ...b,
                    className: M(ne, `framer-t7bs4m`, u, _),
                    "data-framer-name": `01`,
                    layoutDependency: T,
                    layoutId: `GHH7SEvIP`,
                    ref: i,
                    style: { ...l },
                    children: [
                      f(H, {
                        links: [
                          {
                            href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          f(V, {
                            height: 43,
                            y: (c?.y || 0) + 16 + 0,
                            children: f(U, {
                              className: `framer-1x3w320-container`,
                              layoutDependency: T,
                              layoutId: `v7yI5ie9N-container`,
                              nodeId: `v7yI5ie9N`,
                              rendersWithMotion: !0,
                              scopeId: `rWgmoi0jp`,
                              children: f(G, {
                                Bc8FZ00dQ: A,
                                ckb6EcbZO: e[0],
                                height: `100%`,
                                id: `v7yI5ie9N`,
                                layoutId: `v7yI5ie9N`,
                                q_qRHASvW: `Home`,
                                variant: Vt(`UaQknSXgj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                      f(H, {
                        links: [
                          {
                            href: { hash: `:SmyffEGq3`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          f(V, {
                            height: 43,
                            y: (c?.y || 0) + 16 + 55,
                            children: f(U, {
                              className: `framer-1ty8poe-container`,
                              layoutDependency: T,
                              layoutId: `GkAXG_SuV-container`,
                              nodeId: `GkAXG_SuV`,
                              rendersWithMotion: !0,
                              scopeId: `rWgmoi0jp`,
                              children: f(G, {
                                Bc8FZ00dQ: A,
                                ckb6EcbZO: e[0],
                                height: `100%`,
                                id: `GkAXG_SuV`,
                                layoutId: `GkAXG_SuV`,
                                q_qRHASvW: `About us`,
                                variant: Vt(`UaQknSXgj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                      f(H, {
                        links: [
                          {
                            href: { hash: `:zD8b77ZSf`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          f(V, {
                            height: 43,
                            y: (c?.y || 0) + 16 + 110,
                            children: f(U, {
                              className: `framer-xqyi2q-container`,
                              layoutDependency: T,
                              layoutId: `fM5dg__t9-container`,
                              nodeId: `fM5dg__t9`,
                              rendersWithMotion: !0,
                              scopeId: `rWgmoi0jp`,
                              children: f(G, {
                                Bc8FZ00dQ: A,
                                ckb6EcbZO: e[0],
                                height: `100%`,
                                id: `fM5dg__t9`,
                                layoutId: `fM5dg__t9`,
                                q_qRHASvW: `Services`,
                                variant: Vt(`UaQknSXgj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                      f(H, {
                        links: [
                          {
                            href: { hash: `:rcGbCfFII`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          f(V, {
                            height: 43,
                            y: (c?.y || 0) + 16 + 165,
                            children: f(U, {
                              className: `framer-1u14n0l-container`,
                              layoutDependency: T,
                              layoutId: `Vr20Tf0OA-container`,
                              nodeId: `Vr20Tf0OA`,
                              rendersWithMotion: !0,
                              scopeId: `rWgmoi0jp`,
                              children: f(G, {
                                Bc8FZ00dQ: A,
                                ckb6EcbZO: e[0],
                                height: `100%`,
                                id: `Vr20Tf0OA`,
                                layoutId: `Vr20Tf0OA`,
                                q_qRHASvW: `Gallery`,
                                variant: Vt(`UaQknSXgj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                      f(H, {
                        links: [
                          {
                            href: { hash: `:zjlPpsn_n`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          f(V, {
                            height: 43,
                            y: (c?.y || 0) + 16 + 220,
                            children: f(U, {
                              className: `framer-1wn1x8q-container`,
                              layoutDependency: T,
                              layoutId: `aOv9feluv-container`,
                              nodeId: `aOv9feluv`,
                              rendersWithMotion: !0,
                              scopeId: `rWgmoi0jp`,
                              children: f(G, {
                                Bc8FZ00dQ: A,
                                ckb6EcbZO: e[0],
                                height: `100%`,
                                id: `aOv9feluv`,
                                layoutId: `aOv9feluv`,
                                q_qRHASvW: `Testimonials`,
                                variant: Vt(`UaQknSXgj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                      f(H, {
                        links: [
                          { href: { webPageId: `RZ3TFTk6s` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          f(V, {
                            height: 43,
                            y: (c?.y || 0) + 16 + 275,
                            children: f(U, {
                              className: `framer-9669qv-container`,
                              layoutDependency: T,
                              layoutId: `aVQjPJD_G-container`,
                              nodeId: `aVQjPJD_G`,
                              rendersWithMotion: !0,
                              scopeId: `rWgmoi0jp`,
                              children: f(G, {
                                Bc8FZ00dQ: A,
                                ckb6EcbZO: e[0],
                                height: `100%`,
                                id: `aVQjPJD_G`,
                                layoutId: `aVQjPJD_G`,
                                q_qRHASvW: `Contact Us`,
                                variant: Vt(`UaQknSXgj`),
                                width: `100%`,
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-q0Wn4.framer-yqxl4y, .framer-q0Wn4 .framer-yqxl4y { display: block; }`,
          `.framer-q0Wn4.framer-t7bs4m { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px; position: relative; width: 326px; }`,
          `.framer-q0Wn4 .framer-1x3w320-container, .framer-q0Wn4 .framer-1ty8poe-container, .framer-q0Wn4 .framer-xqyi2q-container, .framer-q0Wn4 .framer-1u14n0l-container, .framer-q0Wn4 .framer-1wn1x8q-container, .framer-q0Wn4 .framer-9669qv-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-q0Wn4`
      )),
      (X.displayName = `Dropdown`),
      (X.defaultProps = { height: 218, width: 326 }),
      j(X, { jTtO7Ve2d: { title: `Click`, type: B.EventHandler } }),
      ce(X, [{ explicitInter: !0, fonts: [] }, ...Lt], { supportsExplicitInterCodegen: !0 }),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([F(G, {}, t)])) }));
  });
function qt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  Z,
  ln = e(() => {
    (x(),
      L(),
      k(),
      n(),
      ut(),
      Ke(),
      yt(),
      Kt(),
      (Jt = I(K)),
      (Yt = I(G)),
      (Xt = I(ze)),
      (Zt = I(X)),
      (Qt = [`blFsyyFH5`, `oamFCrGEV`, `T40CBnIza`]),
      ($t = `framer-4q7Wh`),
      (en = {
        blFsyyFH5: `framer-v-gnlin1`,
        oamFCrGEV: `framer-v-1ld84wg`,
        T40CBnIza: `framer-v-1i9d8ek`,
      }),
      (tn = { delay: 0, duration: 0.3, ease: [0, 0, 1, 1], type: `tween` }),
      (nn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (rn = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (an = { "Phone Close": `oamFCrGEV`, "Phone Open": `T40CBnIza`, Desktop: `blFsyyFH5` }),
      (on = E.create(s)),
      (sn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: an[r.variant] ?? r.variant ?? `blFsyyFH5`,
      })),
      (cn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = z(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = w(),
            { activeLocale: o, setLocale: s } = R(),
            c = se(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = sn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ee,
              setVariant: S,
              variants: te,
            } = me({
              cycleOrder: Qt,
              defaultVariant: `blFsyyFH5`,
              ref: i,
              variant: p,
              variantClassNames: en,
            }),
            C = cn(e, te),
            { activeVariantCallback: T, delay: D } = de(h),
            k = T(async (...e) => {
              S(`oamFCrGEV`);
            }),
            A = T(async (...e) => {
              await D(() => S(`T40CBnIza`), 100);
            }),
            ne = T(async (...e) => {
              await D(() => S(`oamFCrGEV`), 100);
            }),
            j = T(async (...e) => {
              S(`oamFCrGEV`);
            }),
            re = M($t);
          Ae();
          let N = () => ![`oamFCrGEV`, `T40CBnIza`].includes(h),
            P = () => !![`oamFCrGEV`, `T40CBnIza`].includes(h);
          return f(O, {
            id: d ?? a,
            children: f(on, {
              animate: te,
              initial: !1,
              children: f(rn, {
                value: tn,
                children: f(E.nav, {
                  ...m,
                  ...y,
                  className: M(re, `framer-gnlin1`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: C,
                  layoutId: `blFsyyFH5`,
                  ref: i,
                  style: { ...l },
                  ...qt(
                    {
                      oamFCrGEV: { "data-framer-name": `Phone Close` },
                      T40CBnIza: { "data-framer-name": `Phone Open` },
                    },
                    h,
                    b
                  ),
                  children: v(E.div, {
                    className: `framer-plmiea`,
                    "data-framer-name": `Container`,
                    layoutDependency: C,
                    layoutId: `Y7SibRApS`,
                    style: {
                      backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 56,
                      borderBottomRightRadius: 56,
                      borderTopLeftRadius: 56,
                      borderTopRightRadius: 56,
                    },
                    variants: {
                      oamFCrGEV: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      T40CBnIza: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    },
                    children: [
                      v(E.div, {
                        className: `framer-14uyq69`,
                        "data-framer-name": `Header Content`,
                        layoutDependency: C,
                        layoutId: `ZkwWqhtq1`,
                        children: [
                          f(H, {
                            links: [
                              {
                                href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              f(V, {
                                height: 44,
                                width: `135px`,
                                y: (c?.y || 0) + (32 + ((c?.height || 200) - 64 - 64) / 2) + 8 + 2,
                                ...qt(
                                  {
                                    oamFCrGEV: {
                                      height: 39,
                                      width: `100px`,
                                      y:
                                        (c?.y || 0) +
                                        (15 + ((c?.height || 200) - 30 - 48) / 2) +
                                        8 +
                                        0 +
                                        0,
                                    },
                                    T40CBnIza: {
                                      height: 39,
                                      width: `100px`,
                                      y:
                                        (c?.y || 0) +
                                        (15 + ((c?.height || 200) - 30 - 283) / 2) +
                                        8 +
                                        0 +
                                        0,
                                    },
                                  },
                                  h,
                                  b
                                ),
                                children: f(U, {
                                  className: `framer-4xp18u-container`,
                                  layoutDependency: C,
                                  layoutId: `enJJa2AKQ-container`,
                                  nodeId: `enJJa2AKQ`,
                                  rendersWithMotion: !0,
                                  scopeId: `Ssp4OMVOD`,
                                  children: f(K, {
                                    height: `100%`,
                                    id: `enJJa2AKQ`,
                                    layoutId: `enJJa2AKQ`,
                                    on9w0lx6m: e[0],
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                    ...qt(
                                      {
                                        oamFCrGEV: { on9w0lx6m: e[1] },
                                        T40CBnIza: { on9w0lx6m: e[2], rDYfjbavm: k },
                                      },
                                      h,
                                      b
                                    ),
                                  }),
                                }),
                              }),
                          }),
                          N() &&
                            v(E.div, {
                              className: `framer-et1f9d`,
                              "data-framer-name": `Menu Wrapper`,
                              layoutDependency: C,
                              layoutId: `XhoEbCfS3`,
                              children: [
                                f(H, {
                                  links: [
                                    {
                                      href: { hash: `:Jqrmq3gQ1`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 48,
                                      y:
                                        (c?.y || 0) +
                                        (32 + ((c?.height || 200) - 64 - 64) / 2) +
                                        8 +
                                        0 +
                                        0,
                                      children: f(U, {
                                        className: `framer-1n6zaa1-container`,
                                        layoutDependency: C,
                                        layoutId: `zjehlLOXS-container`,
                                        nodeId: `zjehlLOXS`,
                                        rendersWithMotion: !0,
                                        scopeId: `Ssp4OMVOD`,
                                        children: f(G, {
                                          ckb6EcbZO: e[0],
                                          height: `100%`,
                                          id: `zjehlLOXS`,
                                          layoutId: `zjehlLOXS`,
                                          q_qRHASvW: `Home`,
                                          variant: nn(`BCuilkB0J`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(H, {
                                  links: [
                                    {
                                      href: { hash: `:SmyffEGq3`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 48,
                                      y:
                                        (c?.y || 0) +
                                        (32 + ((c?.height || 200) - 64 - 64) / 2) +
                                        8 +
                                        0 +
                                        0,
                                      children: f(U, {
                                        className: `framer-q4s5hq-container`,
                                        layoutDependency: C,
                                        layoutId: `jvZNnTh6a-container`,
                                        nodeId: `jvZNnTh6a`,
                                        rendersWithMotion: !0,
                                        scopeId: `Ssp4OMVOD`,
                                        children: f(G, {
                                          ckb6EcbZO: e[0],
                                          height: `100%`,
                                          id: `jvZNnTh6a`,
                                          layoutId: `jvZNnTh6a`,
                                          q_qRHASvW: `About us`,
                                          variant: nn(`BCuilkB0J`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(H, {
                                  links: [
                                    {
                                      href: { hash: `:zD8b77ZSf`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 48,
                                      y:
                                        (c?.y || 0) +
                                        (32 + ((c?.height || 200) - 64 - 64) / 2) +
                                        8 +
                                        0 +
                                        0,
                                      children: f(U, {
                                        className: `framer-a3g4q1-container`,
                                        layoutDependency: C,
                                        layoutId: `YaR4UKSvC-container`,
                                        nodeId: `YaR4UKSvC`,
                                        rendersWithMotion: !0,
                                        scopeId: `Ssp4OMVOD`,
                                        children: f(G, {
                                          ckb6EcbZO: e[0],
                                          height: `100%`,
                                          id: `YaR4UKSvC`,
                                          layoutId: `YaR4UKSvC`,
                                          q_qRHASvW: `Services`,
                                          variant: nn(`BCuilkB0J`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(H, {
                                  links: [
                                    {
                                      href: { hash: `:rcGbCfFII`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 48,
                                      y:
                                        (c?.y || 0) +
                                        (32 + ((c?.height || 200) - 64 - 64) / 2) +
                                        8 +
                                        0 +
                                        0,
                                      children: f(U, {
                                        className: `framer-lixx3y-container`,
                                        layoutDependency: C,
                                        layoutId: `LdCJxGdTB-container`,
                                        nodeId: `LdCJxGdTB`,
                                        rendersWithMotion: !0,
                                        scopeId: `Ssp4OMVOD`,
                                        children: f(G, {
                                          ckb6EcbZO: e[0],
                                          height: `100%`,
                                          id: `LdCJxGdTB`,
                                          layoutId: `LdCJxGdTB`,
                                          q_qRHASvW: `Gallery`,
                                          variant: nn(`BCuilkB0J`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(H, {
                                  links: [
                                    {
                                      href: { hash: `:zjlPpsn_n`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(V, {
                                      height: 48,
                                      y:
                                        (c?.y || 0) +
                                        (32 + ((c?.height || 200) - 64 - 64) / 2) +
                                        8 +
                                        0 +
                                        0,
                                      children: f(U, {
                                        className: `framer-10xsru5-container`,
                                        layoutDependency: C,
                                        layoutId: `lYLiyBVmD-container`,
                                        nodeId: `lYLiyBVmD`,
                                        rendersWithMotion: !0,
                                        scopeId: `Ssp4OMVOD`,
                                        children: f(G, {
                                          ckb6EcbZO: e[0],
                                          height: `100%`,
                                          id: `lYLiyBVmD`,
                                          layoutId: `lYLiyBVmD`,
                                          q_qRHASvW: `Testimonials`,
                                          variant: nn(`BCuilkB0J`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          N() &&
                            f(H, {
                              links: [
                                { href: { webPageId: `RZ3TFTk6s` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(V, {
                                  height: 44,
                                  y:
                                    (c?.y || 0) + (32 + ((c?.height || 200) - 64 - 64) / 2) + 8 + 2,
                                  children: f(U, {
                                    className: `framer-1b4fx11-container`,
                                    layoutDependency: C,
                                    layoutId: `FZDBpTOoJ-container`,
                                    nodeId: `FZDBpTOoJ`,
                                    rendersWithMotion: !0,
                                    scopeId: `Ssp4OMVOD`,
                                    children: f(ze, {
                                      height: `100%`,
                                      HWDdm10qN: !0,
                                      id: `FZDBpTOoJ`,
                                      layoutId: `FZDBpTOoJ`,
                                      vNk7ZG44C: `Contact us`,
                                      width: `100%`,
                                      xIBjgZW1u: e[0],
                                    }),
                                  }),
                                }),
                            }),
                          P() &&
                            v(E.div, {
                              className: `framer-h6y4ef`,
                              "data-framer-name": `Line Wrapper`,
                              layoutDependency: C,
                              layoutId: `v7Xnc1VWB`,
                              ...qt(
                                {
                                  oamFCrGEV: { "data-highlight": !0, onTap: A },
                                  T40CBnIza: { "data-highlight": !0, onTap: ne },
                                },
                                h,
                                b
                              ),
                              children: [
                                P() &&
                                  f(E.div, {
                                    className: `framer-1pu5q03`,
                                    "data-framer-name": `Line`,
                                    layoutDependency: C,
                                    layoutId: `Sp2dd7ans`,
                                    style: {
                                      backgroundColor: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                      borderBottomLeftRadius: 1,
                                      borderBottomRightRadius: 1,
                                      borderTopLeftRadius: 1,
                                      borderTopRightRadius: 1,
                                      rotate: 0,
                                    },
                                    variants: { T40CBnIza: { rotate: 45 } },
                                  }),
                                P() &&
                                  f(E.div, {
                                    className: `framer-10y1rci`,
                                    "data-framer-name": `Line`,
                                    layoutDependency: C,
                                    layoutId: `yoP811woi`,
                                    style: {
                                      backgroundColor: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                      borderBottomLeftRadius: 1,
                                      borderBottomRightRadius: 1,
                                      borderTopLeftRadius: 1,
                                      borderTopRightRadius: 1,
                                      opacity: 1,
                                    },
                                    variants: { T40CBnIza: { opacity: 0 } },
                                  }),
                                P() &&
                                  f(E.div, {
                                    className: `framer-1pelhqf`,
                                    "data-framer-name": `Line`,
                                    layoutDependency: C,
                                    layoutId: `xvI1hsgLT`,
                                    style: {
                                      backgroundColor: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                      borderBottomLeftRadius: 1,
                                      borderBottomRightRadius: 1,
                                      borderTopLeftRadius: 1,
                                      borderTopRightRadius: 1,
                                      rotate: 0,
                                    },
                                    variants: { T40CBnIza: { rotate: -45 } },
                                  }),
                              ],
                            }),
                        ],
                      }),
                      P() &&
                        f(V, {
                          ...qt(
                            {
                              oamFCrGEV: {
                                height: 218,
                                width: `calc(min(max(${c?.width || `100vw`} - 40px, 1px), ${c?.width || `100vw`} - 40px) - 24px)`,
                                y: (c?.y || 0) + (15 + ((c?.height || 200) - 30 - 48) / 2) + 8 + 49,
                              },
                              T40CBnIza: {
                                height: 218,
                                width: `calc(min(max(${c?.width || `100vw`} - 40px, 1px), ${c?.width || `100vw`} - 40px) - 24px)`,
                                y:
                                  (c?.y || 0) + (15 + ((c?.height || 200) - 30 - 283) / 2) + 8 + 49,
                              },
                            },
                            h,
                            b
                          ),
                          children: f(U, {
                            className: `framer-1bj5gw4-container`,
                            layoutDependency: C,
                            layoutId: `xUWl7x3TT-container`,
                            nodeId: `xUWl7x3TT`,
                            rendersWithMotion: !0,
                            scopeId: `Ssp4OMVOD`,
                            children: f(X, {
                              height: `100%`,
                              id: `xUWl7x3TT`,
                              layoutId: `xUWl7x3TT`,
                              style: { width: `100%` },
                              width: `100%`,
                              ...qt({ T40CBnIza: { jTtO7Ve2d: j } }, h, b),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-4q7Wh.framer-locofh, .framer-4q7Wh .framer-locofh { display: block; }`,
          `.framer-4q7Wh.framer-gnlin1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 30px 32px 30px; position: relative; width: 1200px; }`,
          `.framer-4q7Wh .framer-plmiea { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1320px; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-4q7Wh .framer-14uyq69 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-4q7Wh .framer-4xp18u-container { aspect-ratio: 3.0681818181818183 / 1; flex: none; height: auto; position: relative; width: 135px; }`,
          `.framer-4q7Wh .framer-et1f9d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-4q7Wh .framer-1n6zaa1-container, .framer-4q7Wh .framer-q4s5hq-container, .framer-4q7Wh .framer-a3g4q1-container, .framer-4q7Wh .framer-lixx3y-container, .framer-4q7Wh .framer-10xsru5-container, .framer-4q7Wh .framer-1b4fx11-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-4q7Wh .framer-h6y4ef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: 24px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 24px; }`,
          `.framer-4q7Wh .framer-1pu5q03, .framer-4q7Wh .framer-10y1rci, .framer-4q7Wh .framer-1pelhqf { flex: none; height: 2px; overflow: visible; position: relative; width: 24px; }`,
          `.framer-4q7Wh .framer-1bj5gw4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-4q7Wh.framer-v-1ld84wg.framer-gnlin1, .framer-4q7Wh.framer-v-1i9d8ek.framer-gnlin1 { padding: 15px 20px 15px 20px; width: 390px; }`,
          `.framer-4q7Wh.framer-v-1ld84wg .framer-plmiea { flex-direction: column; height: 48px; justify-content: flex-start; max-width: 100%; padding: 8px 16px 8px 8px; }`,
          `.framer-4q7Wh.framer-v-1ld84wg .framer-14uyq69, .framer-4q7Wh.framer-v-1ld84wg .framer-1bj5gw4-container, .framer-4q7Wh.framer-v-1i9d8ek .framer-14uyq69, .framer-4q7Wh.framer-v-1i9d8ek .framer-1bj5gw4-container { flex: none; width: 100%; }`,
          `.framer-4q7Wh.framer-v-1ld84wg .framer-4xp18u-container, .framer-4q7Wh.framer-v-1i9d8ek .framer-4xp18u-container { width: 100px; }`,
          `.framer-4q7Wh.framer-v-1ld84wg .framer-h6y4ef, .framer-4q7Wh.framer-v-1i9d8ek .framer-h6y4ef { cursor: pointer; }`,
          `.framer-4q7Wh.framer-v-1i9d8ek .framer-plmiea { flex-direction: column; justify-content: flex-start; max-width: 100%; padding: 8px 16px 8px 8px; }`,
          `.framer-4q7Wh.framer-v-1i9d8ek .framer-1pu5q03, .framer-4q7Wh.framer-v-1i9d8ek .framer-1pelhqf { left: 0px; position: absolute; right: 0px; top: calc(50.00000000000002% - 2px / 2); width: unset; z-index: 1; }`,
        ],
        `framer-4q7Wh`
      )),
      (Z.displayName = `Header`),
      (Z.defaultProps = { height: 124, width: 1200 }),
      j(Z, {
        variant: {
          options: [`blFsyyFH5`, `oamFCrGEV`, `T40CBnIza`],
          optionTitles: [`Desktop`, `Phone Close`, `Phone Open`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      ce(Z, [{ explicitInter: !0, fonts: [] }, ...Jt, ...Yt, ...Xt, ...Zt], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([F(K, {}, t), F(G, {}, t), F(ze, {}, t), F(X, {}, t)])
        ),
      }));
  });
function un(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  Q,
  On = e(() => {
    (x(),
      L(),
      k(),
      n(),
      Ve(),
      Ke(),
      Be(),
      (dn = I(Ge)),
      (fn = ge(U)),
      (pn = I(ze)),
      (mn = [`jztq3EPir`, `cJ8Uc0vkR`, `Th77iGl7M`]),
      (hn = `framer-YWKcm`),
      (gn = {
        cJ8Uc0vkR: `framer-v-3mkuov`,
        jztq3EPir: `framer-v-84tow5`,
        Th77iGl7M: `framer-v-13kdtxx`,
      }),
      (_n = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (vn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (yn = { damping: 55, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (bn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: yn,
        x: 0,
        y: 40,
      }),
      (xn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Sn = {
        effect: {
          filter: `blur(4px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
        repeat: !1,
        startDelay: 0.1,
        threshold: 0.5,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.05, duration: 0.7, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Cn = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(D.Provider, { value: a, children: n });
      }),
      (wn = { Desktop: `jztq3EPir`, Phone: `Th77iGl7M`, Tablet: `cJ8Uc0vkR` }),
      (Tn = E.create(s)),
      (En = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: wn[r.variant] ?? r.variant ?? `jztq3EPir`,
      })),
      (Dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = z(
        p(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = w(),
            { activeLocale: o, setLocale: c } = R(),
            l = se(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = En(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: S,
              setVariant: te,
              variants: C,
            } = me({
              cycleOrder: mn,
              defaultVariant: `jztq3EPir`,
              ref: i,
              variant: m,
              variantClassNames: gn,
            }),
            T = Dn(e, C),
            D = M(hn, We);
          return (
            Ae(),
            f(O, {
              id: p ?? a,
              children: f(Tn, {
                animate: C,
                initial: !1,
                children: f(Cn, {
                  value: _n,
                  children: f(E.section, {
                    ...h,
                    ...b,
                    className: M(D, `framer-84tow5`, d, _),
                    "data-framer-name": `Desktop`,
                    layoutDependency: T,
                    layoutId: `jztq3EPir`,
                    ref: i,
                    style: { ...u },
                    ...un(
                      {
                        cJ8Uc0vkR: { "data-framer-name": `Tablet` },
                        Th77iGl7M: { "data-framer-name": `Phone` },
                      },
                      g,
                      x
                    ),
                    children: f(E.div, {
                      className: `framer-14fgvm8`,
                      "data-framer-name": `Container`,
                      layoutDependency: T,
                      layoutId: `VB5g0P6mA`,
                      children: v(E.div, {
                        className: `framer-1wbxfxo`,
                        "data-framer-name": `Title & Button`,
                        layoutDependency: T,
                        layoutId: `n6yXyzqsN`,
                        children: [
                          v(E.div, {
                            className: `framer-f6z1yi`,
                            "data-framer-name": `Tag & Title`,
                            layoutDependency: T,
                            layoutId: `ToOGm_RCq`,
                            children: [
                              f(V, {
                                height: 32,
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 324) - 80 - 181.4) / 2 + 0 + 0) +
                                  0 +
                                  0 +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                                ...un(
                                  {
                                    cJ8Uc0vkR: {
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 367) - 60 - 181.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    Th77iGl7M: {
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 200) - 50 - 177.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  g,
                                  x
                                ),
                                children: f(fn, {
                                  __framer__animate: { transition: yn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: vn,
                                  __framer__exit: bn,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1kef2l5-container`,
                                  layoutDependency: T,
                                  layoutId: `ZV8RoHZcb-container`,
                                  nodeId: `ZV8RoHZcb`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZQB1P8xE0`,
                                  children: f(Ge, {
                                    bU2YfweFO: `Join us`,
                                    height: `100%`,
                                    id: `ZV8RoHZcb`,
                                    layoutId: `ZV8RoHZcb`,
                                    variant: xn(`XTCz0IaFl`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              f(W, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(E.h2, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                    },
                                    children: `Ready to transform your farming with smart technology?`,
                                  }),
                                }),
                                className: `framer-i7f80t`,
                                effect: Sn,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `Tblmdgjk6`,
                                style: {
                                  "--extracted-1of0zx5": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          f(H, {
                            links: [
                              { href: { webPageId: `RZ3TFTk6s` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RZ3TFTk6s` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `RZ3TFTk6s` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              f(V, {
                                height: 43,
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 324) - 80 - 181.4) / 2 + 0 + 0) +
                                  0 +
                                  0 +
                                  0 +
                                  138.4,
                                ...un(
                                  {
                                    cJ8Uc0vkR: {
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 367) - 60 - 181.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        138.4,
                                    },
                                    Th77iGl7M: {
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 200) - 50 - 177.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        134.4,
                                    },
                                  },
                                  g,
                                  x
                                ),
                                children: f(fn, {
                                  __framer__animate: { transition: yn },
                                  __framer__animateOnce: !0,
                                  __framer__enter: vn,
                                  __framer__exit: bn,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1ae2r3i-container`,
                                  layoutDependency: T,
                                  layoutId: `QKxo4Xy5W-container`,
                                  nodeId: `QKxo4Xy5W`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZQB1P8xE0`,
                                  children: f(ze, {
                                    height: `100%`,
                                    id: `QKxo4Xy5W`,
                                    layoutId: `QKxo4Xy5W`,
                                    vNk7ZG44C: `Ger started`,
                                    width: `100%`,
                                    xIBjgZW1u: e[0],
                                    ...un(
                                      {
                                        cJ8Uc0vkR: { xIBjgZW1u: e[1] },
                                        Th77iGl7M: { xIBjgZW1u: e[2] },
                                      },
                                      g,
                                      x
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-YWKcm.framer-14oi2wr, .framer-YWKcm .framer-14oi2wr { display: block; }`,
          `.framer-YWKcm.framer-84tow5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 30px 80px 30px; position: relative; width: 1200px; }`,
          `.framer-YWKcm .framer-14fgvm8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: flex-start; max-width: 1380px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-YWKcm .framer-1wbxfxo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-YWKcm .framer-f6z1yi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-YWKcm .framer-1kef2l5-container, .framer-YWKcm .framer-1ae2r3i-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-YWKcm .framer-i7f80t { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 738px; position: relative; width: 100%; }`,
          `.framer-YWKcm.framer-v-3mkuov.framer-84tow5 { padding: 0px 30px 60px 30px; width: 768px; }`,
          `.framer-YWKcm.framer-v-3mkuov .framer-14fgvm8, .framer-YWKcm.framer-v-13kdtxx .framer-14fgvm8 { max-width: 100%; }`,
          `.framer-YWKcm.framer-v-3mkuov .framer-i7f80t { max-width: 550px; }`,
          `.framer-YWKcm.framer-v-13kdtxx.framer-84tow5 { padding: 0px 20px 50px 20px; width: 390px; }`,
          `.framer-YWKcm.framer-v-13kdtxx .framer-f6z1yi { gap: 16px; }`,
          `.framer-YWKcm.framer-v-13kdtxx .framer-i7f80t { max-width: unset; }`,
          ...Ue,
        ],
        `framer-YWKcm`
      )),
      (Q.displayName = `CTA`),
      (Q.defaultProps = { height: 324, width: 1200 }),
      j(Q, {
        variant: {
          options: [`jztq3EPir`, `cJ8Uc0vkR`, `Th77iGl7M`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      ce(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...dn,
          ...pn,
          ...N(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([F(Ge, {}, t), F(ze, {}, t)])),
      }));
  }),
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  $,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn = e(() => {
    (x(),
      L(),
      k(),
      n(),
      It(),
      ln(),
      On(),
      (kn = I(Z)),
      (An = I(Q)),
      (jn = I(Y)),
      (Mn = {
        HRZaIJMBy: `(min-width: 768px) and (max-width: 1199.98px)`,
        jXlYO7yLK: `(min-width: 1200px)`,
        WonM1sYe2: `(max-width: 767.98px)`,
      }),
      (Nn = `framer-B0mTU`),
      (Pn = {
        HRZaIJMBy: `framer-v-wqiigx`,
        jXlYO7yLK: `framer-v-137hhg7`,
        WonM1sYe2: `framer-v-1henz8`,
      }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Fn = { WonM1sYe2: [`.framer-B0mTU .framer-1x4uqs7 { padding: 60px 0px 60px 0px; }`] }),
      (In = Object.keys(Fn)),
      (Ln = { WonM1sYe2: `.framer-1henz8-override` }),
      (Rn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-B0mTU.framer-1c3ug95, .framer-B0mTU .framer-1c3ug95 { display: block; }`,
        `.framer-B0mTU.framer-137hhg7 { align-content: center; align-items: center; background-color: var(--token-f46ea120-695a-4096-943a-888f469a6d39, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-B0mTU .framer-1lmslum-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-B0mTU .framer-pw6epd { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-B0mTU .framer-1x4uqs7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 1002; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-B0mTU .framer-1xqqxlc { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
        `.framer-B0mTU .framer-7qm843 { background-color: var(--token-758051b4-1516-494d-8a08-3fb09232b834, #000000); bottom: 0px; flex: none; left: 0px; opacity: 0.75; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-B0mTU .framer-1rv72mj-container, .framer-B0mTU .framer-1qzp91-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (zn = {
        HRZaIJMBy: `(min-width: 768px) and (max-width: 1199.98px)`,
        jXlYO7yLK: `(min-width: 1200px)`,
        WonM1sYe2: `(max-width: 767.98px)`,
      }),
      (Bn = { Desktop: `jXlYO7yLK`, Phone: `WonM1sYe2`, Tablet: `HRZaIJMBy` }),
      (Vn = ({ value: e }) =>
        Oe()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Hn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Bn[r.variant] ?? r.variant ?? `jXlYO7yLK`,
      })),
      (Un = p(function (e, t) {
        let n = r(null),
          i = t ?? n,
          a = w(),
          { activeLocale: o, setLocale: s } = R(),
          { style: c, className: l, layoutId: u, variant: d, children: p, ...m } = Hn(e),
          [h, g] = je(d, Mn, !1),
          _ = M(Nn);
        return (
          _e({}),
          f(ke.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: Bn,
              isLayoutTemplate: !0,
              primaryVariantId: `jXlYO7yLK`,
              variantClassNames: Pn,
            },
            children: v(O, {
              id: u ?? a,
              children: [
                f(Vn, {
                  value: `:root body { background: var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)); }`,
                }),
                v(E.div, {
                  ...m,
                  className: M(_, `framer-137hhg7`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    f(V, {
                      height: 124,
                      width: `100vw`,
                      y: 0,
                      children: f(we, {
                        className: `framer-1lmslum-container`,
                        "data-framer-layout-hint-center-x": !0,
                        layoutScroll: !0,
                        nodeId: `jb0kdRNnY`,
                        scopeId: `KnJkhQXTC`,
                        children: f(ye, {
                          breakpoint: h,
                          overrides: {
                            HRZaIJMBy: { variant: $(`oamFCrGEV`) },
                            WonM1sYe2: { variant: $(`oamFCrGEV`) },
                          },
                          children: f(Z, {
                            height: `100%`,
                            id: `jb0kdRNnY`,
                            layoutId: `jb0kdRNnY`,
                            style: { width: `100%` },
                            variant: $(`blFsyyFH5`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    p,
                    f(`div`, { className: `framer-pw6epd` }),
                    v(E.div, {
                      className: `framer-1x4uqs7`,
                      "data-framer-name": `CTA & Footer`,
                      children: [
                        f(Se, {
                          background: {
                            alt: `Background Image`,
                            fit: `fill`,
                            loading: ie(1e3),
                            pixelHeight: 869,
                            pixelWidth: 1440,
                            sizes: `100vw`,
                            src: `../../assets/images/JvFZfXaAfe9KTLVPyGYPaXnna0.png`,
                            srcSet: `../../assets/images/JvFZfXaAfe9KTLVPyGYPaXnna0.png?scale-down-to=512&width=1440&height=869 512w,../../assets/images/JvFZfXaAfe9KTLVPyGYPaXnna0.png?scale-down-to=1024&width=1440&height=869 1024w,../../assets/images/JvFZfXaAfe9KTLVPyGYPaXnna0.png 1440w`,
                          },
                          className: `framer-1xqqxlc`,
                          "data-framer-name": `Background Image`,
                          children: f(`div`, {
                            className: `framer-7qm843`,
                            "data-framer-name": `Color`,
                          }),
                        }),
                        f(ye, {
                          breakpoint: h,
                          overrides: { WonM1sYe2: { y: 1060 } },
                          children: f(V, {
                            height: 324,
                            width: `100vw`,
                            y: 1080,
                            children: f(we, {
                              className: `framer-1rv72mj-container`,
                              nodeId: `gOfs10XTA`,
                              scopeId: `KnJkhQXTC`,
                              children: f(ye, {
                                breakpoint: h,
                                overrides: {
                                  HRZaIJMBy: { variant: $(`cJ8Uc0vkR`) },
                                  WonM1sYe2: { variant: $(`Th77iGl7M`) },
                                },
                                children: f(Q, {
                                  height: `100%`,
                                  id: `gOfs10XTA`,
                                  layoutId: `gOfs10XTA`,
                                  style: { width: `100%` },
                                  variant: $(`jztq3EPir`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        f(ye, {
                          breakpoint: h,
                          overrides: { WonM1sYe2: { y: 1384 } },
                          children: f(V, {
                            height: 369,
                            width: `100vw`,
                            y: 1404,
                            children: f(we, {
                              className: `framer-1qzp91-container`,
                              nodeId: `KeNLD1eIe`,
                              scopeId: `KnJkhQXTC`,
                              children: f(ye, {
                                breakpoint: h,
                                overrides: {
                                  HRZaIJMBy: { variant: $(`BNQ8oIrrG`) },
                                  WonM1sYe2: { variant: $(`NMhJIQfsi`) },
                                },
                                children: f(Y, {
                                  height: `100%`,
                                  id: `KeNLD1eIe`,
                                  layoutId: `KeNLD1eIe`,
                                  style: { width: `100%` },
                                  variant: $(`tnmfpfdFf`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Wn = (e) =>
        e === fe.canvas || e === fe.export
          ? [
              ...Rn,
              ...In.flatMap((e) => {
                let t = Ln[e];
                return Fn[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Rn, ...In.map((e) => `@media ${zn[e]} { ${Fn[e].join(` `)} }`)]),
      (Gn = z(Un, Wn, `framer-B0mTU`)),
      (Gn.displayName = `Template`),
      (Gn.defaultProps = { height: 1e3, width: 1200 }),
      ce(Gn, [{ explicitInter: !0, fonts: [] }, ...kn, ...An, ...jn], {
        supportsExplicitInterCodegen: !0,
      }),
      (Gn.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([F(Z, {}, t), F(Q, {}, t), F(Y, {}, t)])),
      }));
  });
function qn({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `RZ3TFTk6s`:
    case `ugWLKnMwJ`:
      return C(Gn, { ...i, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Jn(e) {
  switch (e) {
    case `augiA20Il`:
    case `RZ3TFTk6s`:
    case `ugWLKnMwJ`:
      return [
        { hash: `137hhg7`, mediaQuery: `(min-width: 1200px)` },
        { hash: `wqiigx`, mediaQuery: `(min-width: 768px) and (max-width: 1199.98px)` },
        { hash: `1henz8`, mediaQuery: `(max-width: 767.98px)` },
      ];
    default:
      return;
  }
}
async function Yn({ routeId: e, pathVariables: t, localeId: n, collectionItemId: i }) {
  let a = Qn[e].page.preload();
  ae({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let u = C(Te, {
    children: C(pe, {
      children: C(Ce, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: Qn,
        collectionUtils: er,
        framerSiteId: tr,
        notFoundPage: P(() => import(`./2QxxchVPUg8dXyogUVA_K2w5y6icFG0wwWrxVrqb3Hw.CBSmKvRC.mjs`)),
        isReducedMotion: void 0,
        localeId: n,
        locales: $n,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://koranco.framer.website`,
        EditorBar:
          l === void 0
            ? void 0
            : (() => {
                if (rr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return P(async () => {
                  l.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: A, useLocaleInfo: R, useRouter: Ae },
                    react: {
                      createElement: C,
                      Fragment: s,
                      memo: m,
                      useCallback: g,
                      useEffect: o,
                      useRef: r,
                      useState: c,
                      useLayoutEffect: T,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: qn,
        loadSnippetsModule: new he(
          () => import(`./90aqVAJUW4AULyh0Lo4qxZE9_c1KX8OJJfYpQGQgpj4.wFUEeHC7.mjs`)
        ),
        initialCollectionItemId: i,
      }),
    }),
    value: {
      global: {
        enter: {
          mask: { round: 0, type: `inset`, x: `50%`, y: `50%` },
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.5,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await a, u);
}
function Xn() {
  nr && l.__framer_events.push(arguments);
}
async function Zn(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || l.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Xn(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = oe(Qn, r)));
    else {
      oe(Qn, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = Me(Qn, decodeURIComponent(location.pathname), !0, $n);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = Yn({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    l !== void 0 &&
      (async () => {
        let e = Qn[r],
          t = $n.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && er) {
          let r = await er[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          u = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          l.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: tr,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: l.location.href,
              hostname: l.location.hostname || null,
              pathname: l.location.pathname || null,
              hash: l.location.hash || null,
              search: l.location.search || null,
              timezone: c,
              locale: u,
            },
            `eager`,
          ]),
          await be({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let d = await c;
    e
      ? (Ee(`framer-rewrite-breakpoints`, () => {
          (De(o), l.__framer_onRewriteBreakpoints?.(o));
        }),
        (rr ? (e) => e() : u)(() => {
          (le(), ue(), te(t, d, { onRecoverableError: n }));
        }))
      : S(t, { onRecoverableError: n }).render(d);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Qn, $n, er, tr, nr, rr;
e(() => {
  if (
    (i(),
    L(),
    n(),
    d(),
    b(),
    Kn(),
    (Qn = {
      augiA20Il: {
        elements: {
          CgfBgzOyY: `team`,
          dXgUtDXyY: `02`,
          emCbXX2jg: `03`,
          evVl76OK0: `our-solutions`,
          gYTaKdUjG: `faq-section`,
          Jqrmq3gQ1: `home`,
          onN9Fmt_i: `feature-section`,
          rcGbCfFII: `gallery`,
          SmyffEGq3: `about`,
          tv0C1qN0N: `01`,
          WtDAs7RsD: `04`,
          zD8b77ZSf: `service`,
          zjlPpsn_n: `testimonial`,
        },
        page: P(() => import(`./kVtslpshrF0Hkk8Xj0QNuKv1vItFjqgu4XSdqJQhvmg.UH7xYffA.mjs`)),
        path: `/`,
      },
      RZ3TFTk6s: {
        elements: { cD8EzyDiE: `faq-section` },
        page: P(() => import(`./d5XqAq4-E4jy8LXSfiaLGn1QNCyEJxBrSzIsnb-ptZo.CPq4-ckA.mjs`)),
        path: `/contact-us`,
      },
      ugWLKnMwJ: {
        elements: {},
        page: P(() => import(`./2QxxchVPUg8dXyogUVA_K2w5y6icFG0wwWrxVrqb3Hw.CBSmKvRC.mjs`)),
        path: `/404`,
      },
    }),
    ($n = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (er = {}),
    (tr = `0ed84262a92cf56df7dc026ab4f6bf76ea1d32aed02f8fc7c0104a4f22465c1f`),
    (nr = typeof document < `u`),
    (rr = nr && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent)),
    nr)
  ) {
    ((l.__framer_importFromPackage = (e, t) => () =>
      C(xe, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (l.__framer_events = l.__framer_events || []),
      ne());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Zn(!0, e) : Zn(!1, e);
  }
  (function () {
    nr &&
      u(() => {
        te(
          document.getElementById(`__framer-badge-container`),
          C(y, {}, C(ee(() => import(`./PX9hIOIVM.BJBQh8HV.mjs`))))
        );
      });
  })();
})();
export { Jn as getLayoutTemplateBreakpoints, Yn as getPageRoot };
//# sourceMappingURL=script_main.BOHlqWyp.mjs.map
