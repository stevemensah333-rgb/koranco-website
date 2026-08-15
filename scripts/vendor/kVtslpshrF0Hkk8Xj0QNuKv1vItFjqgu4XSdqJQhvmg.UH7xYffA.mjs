import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  L as a,
  M as o,
  N as s,
  O as c,
  P as l,
  R as u,
  _ as d,
  b as f,
  c as p,
  g as m,
  h,
  j as g,
  k as _,
  l as v,
  o as y,
  v as b,
  w as x,
  x as S,
} from "./react.D20wc1Tc.mjs";
import {
  C,
  K as ee,
  L as te,
  P as w,
  R as T,
  S as ne,
  W as E,
  a as D,
  b as O,
  f as k,
  h as re,
  r as A,
  t as j,
} from "./motion.uzrgujnr.mjs";
import {
  C as M,
  D as ie,
  E as N,
  F as P,
  I as F,
  O as I,
  P as L,
  Q as ae,
  S as R,
  V as z,
  _ as oe,
  at as se,
  b as ce,
  ct as le,
  dt as ue,
  et as de,
  ft as fe,
  h as B,
  it as V,
  l as pe,
  lt as me,
  mt as he,
  n as ge,
  nt as _e,
  ot as ve,
  r as H,
  rt as ye,
  s as be,
  st as xe,
  t as U,
  tt as Se,
  u as Ce,
  v as we,
  x as W,
  y as G,
} from "./framer.CcvScyIW.mjs";
import {
  C as Te,
  D as Ee,
  E as De,
  O as Oe,
  S as ke,
  T as Ae,
  _ as je,
  a as Me,
  c as Ne,
  d as K,
  f as Pe,
  g as Fe,
  h as Ie,
  i as Le,
  l as Re,
  m as ze,
  o as Be,
  p as Ve,
  r as He,
  s as q,
  u as Ue,
  v as J,
  w as We,
  x as Ge,
} from "./shared-lib.cuT66AuJ.mjs";
import {
  a as Ke,
  c as qe,
  i as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  s as Y,
  t as Qe,
} from "./OJMxsAboW.XXqtA2-1.mjs";
import $e, { t as et } from "./gm8QW4-Za48OpuMcNbaEWJpbYQjUMraKIqVPUcsC0YI.4ZhZEiyX.mjs";
var tt,
  nt,
  rt = e(() => {
    (z(),
      (tt = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...tt },
      (nt = {
        onClick: { type: H.EventHandler },
        onMouseEnter: { type: H.EventHandler },
        onMouseLeave: { type: H.EventHandler },
      }),
      H.Number,
      H.Boolean,
      H.String,
      H.Enum);
  });
function it(e, t) {
  return ot(!0, e, t);
}
function at(e, t) {
  return ot(!1, e, t);
}
function ot(e, t, n = !0) {
  let r = _e();
  o(() => {
    n && r === e && t();
  }, [r]);
}
var st = e(() => {
    (z(), n());
  }),
  ct = e(() => {
    n();
  }),
  lt = e(() => {
    z();
  }),
  ut = e(() => {
    z();
  }),
  dt = e(() => {
    n();
  }),
  ft = e(() => {
    z();
  }),
  pt,
  mt,
  ht = e(() => {
    (i(),
      n(),
      (pt = () => {
        if (a !== void 0) {
          let e = a.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (mt = () => t(() => pt(), [])));
  }),
  gt = e(() => {
    (n(), ut());
  }),
  _t = e(() => {
    (n(), z(), ut(), ct());
  }),
  vt = e(() => {
    (z(), n(), rt());
  });
function yt() {
  return t(() => oe.current(), []);
}
function bt() {
  return t(() => oe.current() === oe.canvas, []);
}
var xt = e(() => {
    (n(), z());
  }),
  St = e(() => {
    n();
  });
function Ct(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
var wt,
  Tt = e(() => {
    (n(),
      z(),
      (wt = {
        borderRadius: {
          title: `Radius`,
          type: H.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      H.FusedNumber);
  }),
  Et = e(() => {
    (rt(), st(), ct(), lt(), ut(), dt(), ft(), ht(), gt(), _t(), vt(), xt(), St(), Tt());
  });
function Dt(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Ot(e) {
  let t = Dt(e);
  return p(It, { ...t });
}
function kt(e) {
  let t = _e(),
    n = r(!1),
    i = r(!1),
    a = g((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: g(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: g(() => {
      !e.current || n.current || (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function At({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = l(() => e),
    [o, s] = l(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    u;
  return ((u = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function jt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Mt(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(jt).join(` `);
}
var Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt = e(() => {
    (y(),
      z(),
      j(),
      Et(),
      n(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((Nt ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Pt ||= {})),
      (Ft = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (It = h(function (e) {
        let {
            srcType: n = `URL`,
            srcUrl: i,
            srcFile: a = ``,
            posterEnabled: s = !1,
            controls: c = !1,
            playing: l = !0,
            loop: u = !0,
            muted: d = !0,
            playsinline: f = !0,
            restartOnEnter: m = !1,
            objectFit: h = `cover`,
            backgroundColor: g = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: v = 25,
            startTime: y = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: C,
            onPause: ee,
            onPlay: te,
            onEnd: T,
            onClick: ne,
            onMouseEnter: E,
            onMouseLeave: D,
            onMouseDown: k,
            onMouseUp: re,
          } = e,
          A = r(),
          j = mt(),
          M = r(null),
          ie = r(null),
          N = bt(),
          P = yt(),
          F = N || P === oe.export,
          I = Ct(e),
          L = F
            ? `no-autoplay`
            : At({ playingProp: x, muted: d, loop: u, playsinline: f, controls: c }),
          ae = F ? !0 : w(A),
          R = !F && w(A, { margin: `10%`, once: !0 }),
          z = y === 100 ? 99.9 : y,
          { play: se, pause: ce, setProgress: le, isPlaying: ue } = kt(A);
        (o(() => {
          F || (L !== `on-viewport` && (x ? se() : ce()));
        }, [L, x]),
          o(() => {
            F || (ae && x && L !== `no-autoplay` && se(), L === `on-viewport` && ce());
          }, [L, ae, x]),
          o(() => {
            !N || b || s || z || !A.current || (A.current.currentTime = 0.01);
          }, [s, b, z]));
        let de = r(!1);
        (o(() => {
          if (!de.current) {
            de.current = !0;
            return;
          }
          let e = O(S) ? S.get() : (S ?? 0) * 0.01;
          le((e ?? 0) || (z ?? 0) / 100);
        }, [z, a, i, S]),
          o(() => {
            if (O(S)) return S.on(`change`, (e) => le(e));
          }, [S]),
          it(() => {
            M.current !== null && A.current && ((!ie && u) || !M.current) && se();
          }),
          at(() => {
            A.current && ((ie.current = A.current.ended), (M.current = A.current.paused), ce());
          }));
        let fe = t(() => {
          if (n === `URL`) return i + ``;
          if (n === `Upload`) return a + ``;
        }, [n, a, i, z]);
        return (
          o(() => {
            j && A.current && L === `on-mount` && setTimeout(() => se(), 50);
          }, []),
          o(() => {
            A.current && !d && (A.current.volume = (v ?? 0) / 100);
          }, [v]),
          p(`video`, {
            onClick: ne,
            onMouseEnter: E,
            onMouseLeave: D,
            onMouseDown: k,
            onMouseUp: re,
            src: fe,
            loop: u,
            ref: A,
            onSeeked: (e) => C?.(e),
            onPause: (e) => ee?.(e),
            onPlay: (e) => te?.(e),
            onEnded: (e) => T?.(e),
            autoPlay: ue.current || L === `on-mount` || (x && L === `on-viewport` && ae),
            preload: ue.current
              ? `auto`
              : F && !b
                ? `metadata`
                : L !== `on-mount` && !R
                  ? `none`
                  : `metadata`,
            poster:
              s && !a && i === Ft
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : s && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = A.current;
              e &&
                (e.currentTime < 0.3 && z > 0 && le((z ?? 0) * 0.01),
                (ue.current || L === `on-mount` || (x && L === `on-viewport` && ae)) && se());
            },
            controls: c,
            muted: F ? !0 : d,
            playsInline: f,
            style: {
              cursor: ne ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: I,
              display: `block`,
              objectFit: h,
              backgroundColor: g,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Ot.displayName = `Video`),
      (Lt = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      M(Ot, {
        srcType: {
          type: H.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: H.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: H.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: H.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...wt,
        posterEnabled: {
          type: H.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: H.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: H.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: H.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: H.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: H.Enum, title: `Fit`, options: Lt, optionTitles: Lt.map(Mt) },
        controls: {
          type: H.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: H.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: H.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: H.EventHandler },
        onSeeked: { type: H.EventHandler },
        onPause: { type: H.EventHandler },
        onPlay: { type: H.EventHandler },
        ...nt,
      }));
  }),
  zt,
  Bt = e(() => {
    zt = (e) => e;
  }),
  Vt = e(() => {
    Bt();
  }),
  Ht = e(() => {
    Vt();
  });
function Ut(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Wt = e(() => {}),
  Gt,
  Kt = e(() => {
    ((Gt = {}),
      Object.defineProperty(Gt, "__esModule", { value: !0 }),
      (Gt.warning = function () {}),
      (Gt.invariant = function () {}),
      Gt.__esModule,
      Gt.warning,
      Gt.invariant);
  }),
  qt = e(() => {
    Bt();
  });
function Jt(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Yt(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Jt(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : vn[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Xt(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Zt({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = yn.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Xt(e, n);
        },
      });
    });
}
function Qt(e) {
  e.forEach(Zt);
}
function $t() {
  typeof ResizeObserver < `u` && (bn = new ResizeObserver(Qt));
}
function en(e, t) {
  bn || $t();
  let n = Jt(e);
  return (
    n.forEach((e) => {
      let n = yn.get(e);
      (n || ((n = new Set()), yn.set(e, n)), n.add(t), bn?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = yn.get(e);
        (n?.delete(t), (n != null && n.size) || bn == null || bn.unobserve(e));
      });
    }
  );
}
function tn() {
  ((Sn = () => {
    let e = { width: u.innerWidth, height: u.innerHeight },
      t = { target: u, size: e, contentSize: e };
    xn.forEach((e) => e(t));
  }),
    u.addEventListener(`resize`, Sn));
}
function nn(e) {
  return (
    xn.add(e),
    Sn || tn(),
    () => {
      (xn.delete(e), !xn.size && Sn && (Sn = void 0));
    }
  );
}
function rn(e, t) {
  return typeof e == `function` ? nn(e) : en(e, t);
}
function an(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function on(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var sn,
  cn,
  ln,
  un,
  dn,
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
  En = e(() => {
    (i(),
      Bt(),
      Ht(),
      Wt(),
      Kt(),
      qt(),
      (sn = [``, `X`, `Y`, `Z`]),
      (cn = [`translate`, `scale`, `rotate`, `skew`]),
      (ln = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (un = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: ln,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: zt },
        skew: ln,
      }),
      (dn = new Map()),
      (fn = (e) => `--motion-${e}`),
      (pn = [`x`, `y`, `z`]),
      cn.forEach((e) => {
        sn.forEach((t) => {
          (pn.push(e + t), dn.set(fn(e + t), un[e]));
        });
      }),
      new Set(pn),
      (mn = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (hn = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            mn({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!mn({ opacity: [0, 1] }).finished,
      }),
      (gn = {}),
      (_n = {}));
    for (let e in hn) _n[e] = () => (gn[e] === void 0 && (gn[e] = hn[e]()), gn[e]);
    ((vn = { any: 0, all: 1 }),
      (yn = new WeakMap()),
      (xn = new Set()),
      (Cn = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Yt(
            e,
            (r) => {
              if ((t(), on(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), on(e, `viewleave`, t));
                };
            },
            Ut(r, [`once`])
          );
        },
      }),
      (wn = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), an(e, t, r));
      }),
      (Tn = {
        inView: Cn,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = wn(e, `hoverstart`, t),
              i = wn(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), an(e, `pressend`, t), u.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), an(e, `pressstart`, n), u.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), u.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Tn)]);
  });
function Dn() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function On(e) {
  let t = f.useRef(Dn);
  return (
    f.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      An() && Dn();
      let n = t.current;
      return n(...e);
    }
  );
}
var kn,
  An,
  jn = e(() => {
    (n(),
      (kn = f.createContext(!0)),
      (An =
        `use` in f
          ? () => {
              try {
                return f.use(kn);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function Mn(e) {
  let {
      slots: t = [],
      startFrom: n,
      direction: i,
      effectsOptions: a,
      autoPlayControl: s,
      dragControl: c,
      alignment: f,
      gap: m,
      padding: h,
      paddingPerSide: _,
      paddingTop: y,
      paddingRight: b,
      paddingBottom: ne,
      paddingLeft: D,
      itemAmount: O,
      fadeOptions: A,
      intervalControl: j,
      transitionControl: M,
      arrowOptions: ie,
      borderRadius: N,
      progressOptions: P,
      style: F,
    } = e,
    {
      effectsOpacity: I,
      effectsScale: L,
      effectsRotate: ae,
      effectsPerspective: R,
      effectsHover: z,
      playOffscreen: se,
    } = a,
    { fadeContent: ce, overflow: le, fadeWidth: ue, fadeInset: de, fadeAlpha: fe } = A,
    {
      showMouseControls: B,
      arrowSize: V,
      arrowRadius: pe,
      arrowFill: me,
      leftArrow: he,
      rightArrow: ge,
      arrowShouldSpace: _e = !0,
      arrowShouldFadeIn: ve = !1,
      arrowPosition: H,
      arrowPadding: ye,
      arrowGap: be,
      arrowPaddingTop: xe,
      arrowPaddingRight: U,
      arrowPaddingBottom: Se,
      arrowPaddingLeft: Ce,
    } = ie,
    {
      showProgressDots: we,
      dotSize: W,
      dotsInset: G,
      dotsRadius: Te,
      dotsPadding: Ee,
      dotsGap: De,
      dotsFill: Oe,
      dotsBackground: ke,
      dotsActiveOpacity: Ae,
      dotsOpacity: je,
      dotsBlur: Me,
    } = P,
    Ne = _ ? `${y}px ${b}px ${ne}px ${D}px` : `${h}px`,
    K = oe.current() === oe.canvas,
    Pe = t.filter(Boolean),
    Fe = x.count(Pe);
  if (!(Fe > 0))
    return v(`section`, {
      style: Un,
      children: [
        p(`div`, { style: Wn, children: `⭐️` }),
        p(`p`, { style: Gn, children: `Connect to Content` }),
        p(`p`, {
          style: Kn,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let Ie = g(() => {
      Le.current && ze.current && Ve.current && it();
    }, []),
    Le = r(null),
    Re = g(
      (e) => {
        ((Le.current = e), Ie());
      },
      [Ie]
    ),
    ze = r(null),
    Be = g(
      (e) => {
        ((ze.current = e), Ie());
      },
      [Ie]
    ),
    Ve = r(null),
    He = g(
      (e) => {
        ((Ve.current = e), Ie());
      },
      [Ie]
    ),
    [q, Ue] = l({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    J = i === `left` || i === `right`,
    We = Pn(),
    Ge = J && We === `rtl` ? -1 : 1,
    [Ke, qe] = l(!1),
    [Je, Ye] = l(s),
    [Xe, Ze] = l(!1),
    Y = q?.item !== null && q?.parent !== null && We !== null,
    Qe = Math.ceil((n + O) / Fe),
    $e = [],
    et = Qe * 4;
  (K || !Y) && (et = Qe);
  let [tt, nt] = l(n + Fe);
  o(() => {
    if (!q.item || !We) return;
    let e = -1 * tt * ((q.item ?? 0) + m) * (We === `rtl` ? -1 : 1);
    dt.get() !== e && k(dt, e, M);
  }, [tt, q.item, m, We]);
  let rt = () => {
      if (!Le.current || !ze.current || !Ve.current) return;
      let e = Nn(),
        t = J && e === `rtl`,
        n = t ? Ve.current : ze.current,
        r = t ? ze.current : Ve.current,
        i = J ? Le.current.offsetWidth : Le.current.offsetHeight,
        a = n ? (J ? n.offsetLeft : n.offsetTop) : 0,
        o = (r ? (J ? r.offsetLeft + r.offsetWidth : r.offsetTop + r.offsetHeight) : 0) - a + m,
        s = n ? (J ? n.offsetWidth : n.offsetHeight) : 0,
        c = n ? n.offsetWidth : 0,
        l = n ? n.offsetHeight : 0,
        d = J
          ? Math.max(
              document.documentElement.clientWidth || 0,
              u.innerWidth || 0,
              Le.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              u.innerHeight || 0,
              Le.current.offsetHeight
            );
      Ue({ parent: i, children: o, item: s, itemWidth: c, itemHeight: l, viewportLength: d });
    },
    it = On(async () => {
      re.read(rt, !1, !0);
    });
  (S(() => {
    it();
  }, [t.length, O, m, i, h, _, y, b, ne, D]),
    o(() => {
      let e = Le.current;
      if (e)
        return rn(e, ({ contentSize: e }) => {
          (e.width || e.height) && it();
        });
    }, []));
  let at = K ? 0 : q?.children,
    [ot, st] = l(!1),
    ct = r(null),
    lt = w(ct),
    ut = T() && lt,
    dt = te(at),
    ft = K
      ? 0
      : E(dt, (e) => {
          let t = at ?? 0,
            n = e ?? 0,
            r = ee(-t * Ge, -t * Ge * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    pt = ee(0, Fe, tt),
    mt = (e) => {
      d(() => nt((t) => t + e));
    },
    ht = (e) => {
      let t = e - ee(0, Fe, tt);
      d(() => nt((e) => e + t));
    },
    gt = (i === `right` || i === `bottom` ? -1 : 1) * Ge,
    _t = s && Je && (se || ut) && !K && Fe > 1 && !ot && Y;
  o(() => {
    if (!_t) return;
    let e = setTimeout(() => {
      mt(gt);
    }, j * 1e3);
    return () => clearTimeout(e);
  }, [_t, gt, j, tt]);
  let vt = () => {
      d(() => st(!0));
    },
    yt = (e, { offset: t, velocity: n }) => {
      d(() => st(!1));
      let r = J ? t.x : t.y,
        i = J ? n.x : n.y,
        a = r < -q.item / 2,
        o = r > q.item / 2,
        s = Math.round(Math.abs(r) / q.item),
        c = s === 0 ? 1 : s;
      i > 200 ? mt(-c * Ge) : i < -200 ? mt(c * Ge) : (a && mt(s * Ge), o && mt(-s * Ge));
    },
    bt = Math.max(0, Math.min(n ?? 0, Math.max(0, Fe - 1))),
    xt = (bt * 100) / O,
    St = (bt * m) / O,
    Ct = 0,
    wt = `calc(${100 / O}% - ${m}px + ${m / O}px)`;
  for (let e = 0; e < et; e++)
    $e = $e.concat(
      x.map(Pe, (t, n) => {
        let r;
        return (
          e === 0 && (n === 0 ? (r = Be) : n === Pe.length - 1 && (r = He)),
          p(
            Xn,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: J && O > 1 ? wt : `100%`,
              height: J ? `100%` : O > 1 ? wt : `100%`,
              size: q,
              child: t,
              numChildren: Pe?.length,
              wrappedXOrY: ft,
              childCounter: Ct++,
              gap: m,
              isCanvas: K,
              isInitialized: Y,
              isHorizontal: J,
              effectsOpacity: I,
              effectsScale: L,
              effectsRotate: ae,
              writingDirection: We,
              rtlDirectionModifier: Ge,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  let Tt = J ? `to right` : `to bottom`,
    Et = ue / 2,
    Dt = 100 - ue / 2,
    Ot = `linear-gradient(${Tt}, rgba(0, 0, 0, ${fe}) ${Yn(de, 0, Et)}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, 1) ${Dt}%, rgba(0, 0, 0, ${fe}) ${100 - de}%)`,
    kt = [],
    At = {};
  if (we) {
    for (let e = 0; e < Pe?.length; e++)
      kt.push(
        p(
          Zn,
          {
            dotStyle: { ...$n, width: W, height: W, backgroundColor: Oe },
            buttonStyle: qn,
            selectedOpacity: Ae,
            opacity: je,
            disabled: !K && !Y,
            onClick: () => ht(e),
            wrappedIndex: K || !Y ? bt : pt,
            total: Fe,
            index: e,
            gap: De,
            padding: Ee,
            isHorizontal: J,
          },
          e
        )
      );
    Me > 0 && (At.backdropFilter = At.WebkitBackdropFilter = `blur(${Me}px)`);
  }
  let jt =
      Y && c
        ? {
            drag: J ? `x` : `y`,
            onDragStart: vt,
            onDragEnd: yt,
            dragDirectionLock: !0,
            values: { x: We === `rtl` ? -dt : dt, y: dt },
            dragMomentum: !1,
          }
        : {},
    Mt = H === `top-left` || H === `top-mid` || H === `top-right`,
    Nt = H === `bottom-left` || H === `bottom-mid` || H === `bottom-right`,
    Pt = H === `top-left` || H === `bottom-left`,
    Ft = H === `top-right` || H === `bottom-right`,
    It = H === `top-mid` || H === `bottom-mid` || H === `auto`,
    Lt = he || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
    Rt = ge || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
  return v(`section`, {
    className: `${In} ${J ? Ln : Rn}`,
    style: {
      ...Hn,
      padding: Ne,
      WebkitMaskImage: ce ? Ot : void 0,
      maskImage: ce ? Ot : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (qe(!0), z || Ye(!1));
    },
    onMouseLeave: () => {
      (qe(!1), z || Ye(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), d(() => Ze(!0)));
    },
    onMouseUp: () => d(() => Ze(!1)),
    ref: ct,
    children: [
      p(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: le ? `visible` : `hidden`,
          borderRadius: N,
          userSelect: `none`,
          perspective: K ? `none` : R,
        },
        children: p(C.ul, {
          ref: Re,
          ...jt,
          style: {
            ...Hn,
            gap: m,
            placeItems: f,
            ...(K || !Y
              ? {
                  transform: J
                    ? `translateX(calc(${Bn} * (${xt}% + ${St}px)))`
                    : `translateY(calc(${Bn} * (${xt}% + ${St}px)))`,
                }
              : { x: J ? ft : 0, y: J ? 0 : ft }),
            flexDirection: J ? `row` : `column`,
            transformStyle: ae !== 0 && !K ? `preserve-3d` : void 0,
            cursor: (K || Y) && c ? (Xe ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...F,
          },
          children: $e,
        }),
      }),
      v(`fieldset`, {
        style: { ...Jn },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          v(C.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: J ? `row` : `column`,
              justifyContent: _e ? `space-between` : `center`,
              gap: _e ? `unset` : be,
              opacity: ve || (!K && !Y) ? 0 : 1,
              alignItems: `center`,
              inset: ye,
              top: _e ? ye : Mt ? xe : `unset`,
              left: _e ? ye : Pt ? Ce : It ? 0 : `unset`,
              right: _e ? ye : Ft ? U : It ? 0 : `unset`,
              bottom: _e ? ye : Nt ? Se : `unset`,
            },
            animate: K || Y ? (ve ? { opacity: +!!Ke } : { opacity: 1 }) : { opacity: 0 },
            transition: M,
            children: [
              p(C.button, {
                type: `button`,
                style: {
                  ...qn,
                  backgroundColor: me,
                  width: V,
                  height: V,
                  borderRadius: pe,
                  rotate: J ? 0 : 90,
                  display: B ? `block` : `none`,
                  pointerEvents: K || Y ? `auto` : `none`,
                  cursor: K || Y ? `pointer` : `default`,
                },
                disabled: !(K || Y),
                onClick: () => mt(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: p(`img`, {
                  decoding: `async`,
                  width: V,
                  height: V,
                  src: J && We === `rtl` ? Rt : Lt,
                  alt: `Back Arrow`,
                }),
              }),
              p(C.button, {
                type: `button`,
                style: {
                  ...qn,
                  backgroundColor: me,
                  width: V,
                  height: V,
                  borderRadius: pe,
                  rotate: J ? 0 : 90,
                  display: B ? `block` : `none`,
                  pointerEvents: K || Y ? `auto` : `none`,
                  cursor: K || Y ? `pointer` : `default`,
                },
                disabled: !(K || Y),
                onClick: () => mt(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: p(`img`, {
                  decoding: `async`,
                  width: V,
                  height: V,
                  src: J && We === `rtl` ? Lt : Rt,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          kt.length > 1
            ? p(C.div, {
                style: {
                  ...Qn,
                  left: J ? `50%` : G,
                  top: J ? `unset` : `50%`,
                  transform: J ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: J ? `row` : `column`,
                  bottom: J ? G : `unset`,
                  borderRadius: Te,
                  backgroundColor: ke,
                  userSelect: `none`,
                  ...At,
                  opacity: +!!K,
                  pointerEvents: K || Y ? `auto` : `none`,
                },
                animate: { opacity: +!!Y },
                transition: { duration: 0.35, ease: `easeOut` },
                children: kt,
              })
            : null,
        ],
      }),
    ],
  });
}
function Nn() {
  return u?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function Pn() {
  let [e, t] = l(null);
  return (
    o(
      () => (
        t(Nn()),
        Fn(() => {
          t(Nn());
        })
      ),
      []
    ),
    e
  );
}
function Fn(e) {
  return (
    tr.push(e),
    er ||
      ((er = new MutationObserver(() => tr.forEach((e) => e()))),
      er.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (tr.splice(tr.indexOf(e), 1), tr.length === 0 && (er?.disconnect(), (er = null)));
    }
  );
}
var In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr = e(() => {
    (i(),
      y(),
      En(),
      z(),
      j(),
      n(),
      jn(),
      (In = `framer-slideshow`),
      (Ln = `framer-slideshow-axis-x`),
      (Rn = `framer-slideshow-axis-y`),
      (zn = `--framer-dir-multiplier`),
      (Bn = `var(${zn}, -1)`),
      (Vn = me(
        Mn,
        [`.${Ln} { ${zn}: -1; }`, `html[dir="rtl"] .${Ln} { ${zn}: 1; }`, `.${Rn} { ${zn}: -1; }`],
        `framer-slideshow-component`
      )),
      (Vn.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      M(Vn, {
        slots: { type: H.Array, title: `Content`, control: { type: H.ComponentInstance } },
        direction: {
          type: H.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: Vn.defaultProps.direction,
        },
        autoPlayControl: { type: H.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: H.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: H.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: H.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: Vn.defaultProps.startFrom,
        },
        effectsOptions: {
          type: H.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: H.Number,
              title: `Opacity`,
              defaultValue: Vn.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: H.Number,
              title: `Scale`,
              defaultValue: Vn.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: H.Number,
              title: `Perspective`,
              defaultValue: Vn.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: H.Number,
              title: `Rotate`,
              defaultValue: Vn.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: H.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Vn.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: H.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: Vn.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: H.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: H.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: Vn.defaultProps.itemAmount,
        },
        gap: { type: H.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: H.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: H.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: H.Transition,
          defaultValue: Vn.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: H.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: H.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: H.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: H.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: H.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: H.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: H.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: H.Boolean,
              title: `Show`,
              defaultValue: Vn.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: H.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: Vn.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: H.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: H.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: H.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: Vn.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: H.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: H.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: H.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: Vn.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: H.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: H.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: H.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: H.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: H.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: H.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: H.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: H.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: H.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: H.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: H.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: H.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: H.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: H.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: H.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: H.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: H.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: H.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: H.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Hn = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Un = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Wn = { fontSize: 32, marginBottom: 10 }),
      (Gn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Kn = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (qn = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Jn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Yn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Xn = h(
        m(function (e, t) {
          let {
              slideKey: n,
              width: i,
              height: a,
              child: s,
              size: l,
              gap: u,
              wrappedXOrY: d,
              numChildren: f,
              childCounter: m,
              isCanvas: h,
              isInitialized: g,
              effects: _,
              effectsOpacity: v,
              effectsScale: y,
              effectsRotate: b,
              isHorizontal: x,
              isLast: S,
              index: C,
              writingDirection: ee,
              rtlDirectionModifier: te,
            } = e,
            w = r(),
            T = l?.item ?? 0,
            D = l?.parent ?? 0,
            O = (T + u) * m,
            k = (x && ee === `rtl` ? [T - u, 0, -D + T - u, -D - u] : [-T, 0, D - T + u, D]).map(
              (e) => e - O * te
            ),
            re = !h && E(d, k, x && ee === `rtl` ? [b, 0, 0, -b] : [-b, 0, 0, b]),
            j = !h && E(d, k, [b, 0, 0, -b]),
            M = !h && E(d, k, [v, 1, 1, v]),
            ie = !h && E(d, k, [y, 1, 1, y]),
            N = !h && E(d, k, x && ee === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
            P =
              !h &&
              E(d, (e) => {
                let t = Math.min(k[1], k[2]),
                  n = Math.max(k[1], k[2]);
                return e >= t && e <= n;
              });
          o(() => {
            if (!P || !g) return;
            function e(e) {
              let n = t?.current ?? w.current;
              n &&
                (e
                  ? n.querySelectorAll(`button,a`).forEach((e) => {
                      let t = e.dataset.origTabIndex;
                      t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                    })
                  : n.querySelectorAll(`button,a`).forEach((e) => {
                      let t = e.getAttribute(`tabIndex`);
                      (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                    }),
                n.setAttribute(`aria-hidden`, !e));
            }
            return (
              e(P),
              P.on(`change`, (t) => {
                e(t);
              })
            );
          }, [g]);
          let F = h
              ? `visible`
              : E(
                  d,
                  [k[0] - l.viewportLength * te, ne(k[1], k[2], 0.5), k[3] + l.viewportLength * te],
                  [`hidden`, `visible`, `hidden`]
                ),
            I = n + `child`;
          return p(A, {
            inherit: `id`,
            id: I,
            children: p(`li`, {
              style: { display: `contents` },
              children: c(s, {
                ref: t ?? w,
                key: I,
                style: {
                  ...s.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: i,
                  height: a,
                  ...(g
                    ? {
                        opacity: M,
                        scale: ie,
                        originX: x ? N : 0.5,
                        originY: x ? 0.5 : N,
                        rotateY: x ? re : 0,
                        rotateX: x ? 0 : j,
                        visibility: F,
                      }
                    : {}),
                },
                layoutId: s.props.layoutId ? s.props.layoutId + `-original-` + C : void 0,
              }),
            }),
          });
        })
      )),
      (Zn = h(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          m = !l && r !== 0 ? f : c,
          h = !l && r !== n - 1 ? f : c,
          g = l ? (r === 0 ? c : f) : c,
          _ = l ? (r === n - 1 ? c : f) : c;
        return p(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: m,
            paddingBottom: h,
            paddingInlineStart: g,
            paddingInlineEnd: _,
          },
          children: p(C.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Qn = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      ($n = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (er = null),
      (tr = []));
  }),
  rr,
  ir,
  ar,
  or,
  sr = e(() => {
    (z(),
      ie.loadFonts([
        `BI;BDO Grotesk/variable/v0`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
      ]),
      (rr = [{ defaultValue: 400, maxValue: 900, minValue: 300, name: `Weight`, tag: `wght` }]),
      (ir = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `BDO Grotesk Variable`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `BDO Grotesk`,
              url: `../../assets/fonts/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2`,
              variationAxes: rr,
              weight: `1000`,
            },
          ],
        },
      ]),
      (ar = [
        `.framer-OdR5R .framer-styles-preset-1ferev6:not(.rich-text-wrapper), .framer-OdR5R .framer-styles-preset-1ferev6.rich-text-wrapper p { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.02em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (or = `framer-OdR5R`));
  }),
  cr,
  lr,
  ur,
  dr,
  fr = e(() => {
    (z(),
      ie.loadFonts([
        `BI;BDO Grotesk/variable/v0`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDYwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDYwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
      ]),
      (cr = [{ defaultValue: 400, maxValue: 900, minValue: 300, name: `Weight`, tag: `wght` }]),
      (lr = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `BDO Grotesk Variable`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `BDO Grotesk`,
              url: `../../assets/fonts/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2`,
              variationAxes: cr,
              weight: `1000`,
            },
          ],
        },
      ]),
      (ur = [
        `.framer-GUDpF .framer-styles-preset-1bz0sqk:not(.rich-text-wrapper), .framer-GUDpF .framer-styles-preset-1bz0sqk.rich-text-wrapper h5 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 600; --framer-font-variation-axes-bold-italic: "wght" 600; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, #04303b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 768px) { .framer-GUDpF .framer-styles-preset-1bz0sqk:not(.rich-text-wrapper), .framer-GUDpF .framer-styles-preset-1bz0sqk.rich-text-wrapper h5 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 600; --framer-font-variation-axes-bold-italic: "wght" 600; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, #04303b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 0px) { .framer-GUDpF .framer-styles-preset-1bz0sqk:not(.rich-text-wrapper), .framer-GUDpF .framer-styles-preset-1bz0sqk.rich-text-wrapper h5 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 600; --framer-font-variation-axes-bold-italic: "wght" 600; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, #04303b); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (dr = `framer-GUDpF`));
  }),
  pr,
  mr,
  hr,
  gr,
  _r = e(() => {
    (y(),
      z(),
      n(),
      (pr = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M 4.7 5.981 L 2.563 5.981 L 2.563 4.272 C 2.563 3.33 3.33 2.563 4.272 2.563 L 4.486 2.563 C 4.841 2.563 5.127 2.278 5.127 1.923 L 5.127 0.641 C 5.127 0.286 4.841 0 4.486 0 L 4.272 0 C 1.912 0 0 1.912 0 4.272 L 0 10.681 C 0 11.389 0.574 11.963 1.282 11.963 L 4.7 11.963 C 5.407 11.963 5.981 11.389 5.981 10.681 L 5.981 7.263 C 5.981 6.556 5.407 5.981 4.7 5.981 Z" fill="var(--1gybajp, rgb(4,48,59))" height="11.962895px" id="xm2V9PgE6" transform="translate(0.164 1.019)" width="5.981437499999998px"/><path d="M 4.7 5.981 L 2.563 5.981 L 2.563 4.272 C 2.563 3.33 3.33 2.563 4.272 2.563 L 4.486 2.563 C 4.841 2.563 5.127 2.278 5.127 1.923 L 5.127 0.641 C 5.127 0.286 4.841 0 4.486 0 L 4.272 0 C 1.912 0 0 1.912 0 4.272 L 0 10.681 C 0 11.389 0.574 11.963 1.282 11.963 L 4.7 11.963 C 5.407 11.963 5.981 11.389 5.981 10.681 L 5.981 7.263 C 5.981 6.556 5.407 5.981 4.7 5.981 Z" fill="var(--1gybajp, rgb(4,48,59))" height="11.962895px" id="XWv_4wQbF" transform="translate(7.854 1.019)" width="5.981449999999995px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (mr = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(C.div, { ...a, layoutId: r, ref: t }) : p(`div`, { ...a, ref: t });
      })),
      (hr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nGcTmOiOr: e ?? i.nGcTmOiOr ?? `rgb(4, 48, 59)`,
      })),
      (gr = me(
        m(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, nGcTmOiOr: o, ...s } = hr(e);
          return p(mr, {
            ...s,
            className: N(`framer-uAHjw`, r),
            layoutId: i,
            ref: t,
            style: { "--1gybajp": o, ...n },
          });
        }),
        [
          `.framer-uAHjw { -webkit-mask: ${pr}; aspect-ratio: 1; background-color: var(--1gybajp); mask: ${pr}; width: 14px; }`,
        ],
        `framer-uAHjw`
      )),
      (gr.displayName = `fi_4662607`),
      M(gr, {
        nGcTmOiOr: { defaultValue: `rgb(4, 48, 59)`, hidden: !1, title: `Color`, type: H.Color },
      }));
  });
function vr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr = e(() => {
    (y(),
      z(),
      j(),
      n(),
      sr(),
      Oe(),
      fr(),
      _r(),
      (yr = L(gr)),
      (br = [`Ivdn2SFJk`, `Jj5_tdpXg`]),
      (xr = `framer-271mH`),
      (Sr = { Ivdn2SFJk: `framer-v-1r8lvur`, Jj5_tdpXg: `framer-v-6xnpue` }),
      (Cr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Tr = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (Er = { "Desktop ": `Ivdn2SFJk`, Phone: `Jj5_tdpXg` }),
      (Dr = C.create(s)),
      (Or = ({
        content: e,
        designation: t,
        height: n,
        id: r,
        image: i,
        name1: a,
        width: o,
        ...s
      }) => ({
        ...s,
        EWsInXs_D:
          e ??
          s.EWsInXs_D ??
          `Since using Farmio, my crop planning has become easier and more accurate. I save time, reduce waste, and get better yields.`,
        lKYqeIOcp: t ?? s.lKYqeIOcp ?? `Vegetable Farmer, USA`,
        m3rTIkrMk: a ?? s.m3rTIkrMk ?? `Rahim Ahmed`,
        variant: Er[s.variant] ?? s.variant ?? `Ivdn2SFJk`,
        vMTVYBnZ7: i ??
          s.vMTVYBnZ7 ?? {
            alt: `Testimonial Image`,
            pixelHeight: 582,
            pixelWidth: 624,
            src: `../../assets/images/R9XCyj6VzdnJirbBfoPgjrRUc0.png?width=624&height=582`,
            srcSet: `../../assets/images/R9XCyj6VzdnJirbBfoPgjrRUc0.png 512w,../../assets/images/R9XCyj6VzdnJirbBfoPgjrRUc0.png?width=624&height=582 624w`,
          },
      })),
      (kr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ar = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V(),
            l = ae(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: m,
              EWsInXs_D: h,
              m3rTIkrMk: g,
              lKYqeIOcp: _,
              vMTVYBnZ7: y,
              ...x
            } = Or(e),
            {
              baseVariant: S,
              classNames: ee,
              clearLoadingGesture: te,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: ne,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = le({
              cycleOrder: br,
              defaultVariant: `Ivdn2SFJk`,
              ref: i,
              variant: m,
              variantClassNames: Sr,
            }),
            k = kr(e, O),
            re = N(xr, dr, Ae, or);
          return p(A, {
            id: f ?? a,
            children: p(Dr, {
              animate: O,
              initial: !1,
              children: p(Tr, {
                value: Cr,
                children: v(C.div, {
                  ...x,
                  ...w,
                  className: N(re, `framer-1r8lvur`, d, ee),
                  "data-framer-name": `Desktop `,
                  layoutDependency: k,
                  layoutId: `Ivdn2SFJk`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  ...vr({ Jj5_tdpXg: { "data-framer-name": `Phone` } }, S, T),
                  children: [
                    v(C.div, {
                      className: `framer-1wazp7g`,
                      "data-framer-name": `Card Content`,
                      layoutDependency: k,
                      layoutId: `FUO1SHzxo`,
                      children: [
                        v(C.div, {
                          className: `framer-q0h1ym`,
                          "data-framer-name": `Icon & Content`,
                          layoutDependency: k,
                          layoutId: `E98WYGLqO`,
                          children: [
                            p(gr, {
                              animated: !0,
                              className: `framer-c7uau5`,
                              "data-framer-name": `Icon`,
                              layoutDependency: k,
                              layoutId: `F7MscqIH8`,
                              style: {
                                "--1gybajp": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                              },
                            }),
                            p(G, {
                              __fromCanvasComponent: !0,
                              children: p(s, {
                                children: p(C.h5, {
                                  className: `framer-styles-preset-1bz0sqk`,
                                  "data-styles-preset": `zBeZwmrea`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `Since using Farmio, my crop planning has become easier and more accurate. I save time, reduce waste, and get better yields.`,
                                }),
                              }),
                              className: `framer-1sqz5y8`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `McA8RaOuI`,
                              style: {
                                "--extracted-1lwpl3i": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        v(C.div, {
                          className: `framer-ssxsob`,
                          "data-framer-name": `Name & Designation`,
                          layoutDependency: k,
                          layoutId: `c1eEBH9MB`,
                          children: [
                            p(G, {
                              __fromCanvasComponent: !0,
                              children: p(s, {
                                children: p(C.p, {
                                  className: `framer-styles-preset-1h0pk3x`,
                                  "data-styles-preset": `c84NHGXvh`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `Rahim Ahmed`,
                                }),
                              }),
                              className: `framer-1kmiazf`,
                              "data-framer-name": `Rahim Ahmed`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `NykpuKhzS`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            p(G, {
                              __fromCanvasComponent: !0,
                              children: p(s, {
                                children: p(C.p, {
                                  className: `framer-styles-preset-1ferev6`,
                                  "data-styles-preset": `anZQZtdwi`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                                  },
                                  children: `Vegetable Farmer, USA`,
                                }),
                              }),
                              className: `framer-mph37u`,
                              "data-framer-name": `Vegetable Farmer, USA`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `FUrFsn89w`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(pe, {
                      background: {
                        alt: `Testimonial Image`,
                        fit: `fill`,
                        loading: F(
                          (l?.y || 0) +
                            (24 + ((l?.height || 337) - 48 - ((l?.height || 337) - 48) * 1) / 2)
                        ),
                        pixelHeight: 582,
                        pixelWidth: 624,
                        sizes: `312px`,
                        ...wr(y),
                      },
                      className: `framer-jxk2ln`,
                      layoutDependency: k,
                      layoutId: `ICyNxnG7C`,
                      style: {
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      },
                      ...vr(
                        {
                          Jj5_tdpXg: {
                            background: {
                              alt: `Testimonial Image`,
                              fit: `fill`,
                              loading: F(
                                (l?.y || 0) + 20 + (((l?.height || 666) - 40 - 644.6) / 2 + 0 + 0)
                              ),
                              pixelHeight: 582,
                              pixelWidth: 624,
                              sizes: `calc(${l?.width || `100vw`} - 40px)`,
                              ...wr(y),
                            },
                          },
                        },
                        S,
                        T
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-271mH.framer-l5nq5w, .framer-271mH .framer-l5nq5w { display: block; }`,
          `.framer-271mH.framer-1r8lvur { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 788px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-271mH .framer-1wazp7g { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-271mH .framer-q0h1ym { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-271mH .framer-c7uau5 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 28px; }`,
          `.framer-271mH .framer-1sqz5y8, .framer-271mH .framer-1kmiazf, .framer-271mH .framer-mph37u { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-271mH .framer-ssxsob { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-271mH .framer-jxk2ln { align-self: stretch; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 312px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-271mH.framer-v-6xnpue.framer-1r8lvur { flex-direction: column; gap: 32px; padding: 20px; width: 320px; }`,
          `.framer-271mH.framer-v-6xnpue .framer-1wazp7g { flex: none; gap: 24px; order: 1; width: 100%; }`,
          `.framer-271mH.framer-v-6xnpue .framer-q0h1ym { gap: 24px; }`,
          `.framer-271mH.framer-v-6xnpue .framer-jxk2ln { align-self: unset; height: 270px; order: 0; width: 100%; }`,
          ...ur,
          ...De,
          ...ar,
        ],
        `framer-271mH`
      )),
      (Ar.displayName = `Testimonial Card`),
      (Ar.defaultProps = { height: 337, width: 788 }),
      M(Ar, {
        variant: {
          options: [`Ivdn2SFJk`, `Jj5_tdpXg`],
          optionTitles: [`Desktop `, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        EWsInXs_D: {
          defaultValue: `Since using Farmio, my crop planning has become easier and more accurate. I save time, reduce waste, and get better yields.`,
          displayTextArea: !1,
          title: `Content`,
          type: H.String,
        },
        onEWsInXs_DChange: { changes: `EWsInXs_D`, type: H.ChangeHandler },
        m3rTIkrMk: {
          defaultValue: `Rahim Ahmed`,
          displayTextArea: !1,
          title: `Name`,
          type: H.String,
        },
        onm3rTIkrMkChange: { changes: `m3rTIkrMk`, type: H.ChangeHandler },
        lKYqeIOcp: {
          defaultValue: `Vegetable Farmer, USA`,
          displayTextArea: !1,
          title: `Designation`,
          type: H.String,
        },
        onlKYqeIOcpChange: { changes: `lKYqeIOcp`, type: H.ChangeHandler },
        vMTVYBnZ7: {
          __defaultAssetReference: `data:framer/asset-reference,R9XCyj6VzdnJirbBfoPgjrRUc0.png?originalFilename=Frame+1000002860.png&width=624&height=582`,
          __vekterDefault: {
            alt: `Testimonial Image`,
            assetReference: `data:framer/asset-reference,R9XCyj6VzdnJirbBfoPgjrRUc0.png?originalFilename=Frame+1000002860.png&width=624&height=582`,
          },
          title: `Image`,
          type: H.ResponsiveImage,
        },
      }),
      R(
        Ar,
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
          ...yr,
          ...P(lr),
          ...P(Ee),
          ...P(ir),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Mr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr = e(() => {
    (y(),
      z(),
      j(),
      n(),
      nr(),
      jr(),
      (Nr = L(Ar)),
      (Pr = L(Vn)),
      (Fr = [`stSXa2Quu`, `P7CUQFsoX`, `rkOcuLlxy`]),
      (Ir = `framer-qZ9cQ`),
      (Lr = {
        P7CUQFsoX: `framer-v-1ecvrtq`,
        rkOcuLlxy: `framer-v-m7cs2b`,
        stSXa2Quu: `framer-v-y8k51o`,
      }),
      (Rr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Br = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Vr = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (Hr = { Desktop: `stSXa2Quu`, Phone: `rkOcuLlxy`, Tablet: `P7CUQFsoX` }),
      (Ur = C.create(s)),
      (Wr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Hr[r.variant] ?? r.variant ?? `stSXa2Quu`,
      })),
      (Gr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Kr = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = V();
          ae();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = Wr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: x,
              setGestureState: S,
              setVariant: ee,
              variants: te,
            } = le({
              cycleOrder: Fr,
              defaultVariant: `stSXa2Quu`,
              ref: i,
              variant: d,
              variantClassNames: Lr,
            }),
            w = Gr(e, te),
            T = N(Ir),
            ne = () => m !== `rkOcuLlxy`,
            E = () => m === `rkOcuLlxy`;
          return p(A, {
            id: u ?? a,
            children: p(Ur, {
              animate: te,
              initial: !1,
              children: p(Vr, {
                value: Rr,
                children: v(C.div, {
                  ...f,
                  ..._,
                  className: N(T, `framer-y8k51o`, l, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `stSXa2Quu`,
                  ref: i,
                  style: { ...c },
                  ...Mr(
                    {
                      P7CUQFsoX: { "data-framer-name": `Tablet` },
                      rkOcuLlxy: { "data-framer-name": `Phone` },
                    },
                    m,
                    y
                  ),
                  children: [
                    ne() &&
                      p(U, {
                        children: p(W, {
                          className: `framer-1boyis8-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `gwJgh774D-container`,
                          nodeId: `gwJgh774D`,
                          rendersWithMotion: !0,
                          scopeId: `DeOAdsn42`,
                          children: p(Vn, {
                            alignment: `center`,
                            arrowOptions: {
                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                              arrowGap: 10,
                              arrowPadding: 20,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 0,
                              arrowPaddingTop: 0,
                              arrowPosition: `auto`,
                              arrowRadius: 40,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !0,
                              arrowSize: 40,
                              showMouseControls: !1,
                            },
                            autoPlayControl: !0,
                            borderRadius: 0,
                            direction: `left`,
                            dragControl: !0,
                            effectsOptions: {
                              effectsHover: !0,
                              effectsOpacity: 1,
                              effectsPerspective: 1200,
                              effectsRotate: 0,
                              effectsScale: 1,
                              playOffscreen: !1,
                            },
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !0,
                            },
                            gap: 24,
                            height: `100%`,
                            id: `gwJgh774D`,
                            intervalControl: 2,
                            itemAmount: 1.7,
                            layoutId: `gwJgh774D`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                              dotsActiveOpacity: 1,
                              dotsBackground: `rgba(0, 0, 0, 0.2)`,
                              dotsBlur: 0,
                              dotsFill: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                              dotsGap: 8,
                              dotsInset: -64,
                              dotSize: 10,
                              dotsOpacity: 0.5,
                              dotsPadding: 8,
                              dotsRadius: 50,
                              showProgressDots: !0,
                            },
                            slots: [
                              p(U, {
                                height: 337,
                                width: `788px`,
                                children: p(W, {
                                  className: `framer-l19vda-container`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `POQTB8pqt-container`,
                                  nodeId: `POQTB8pqt`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `Since using Farmio, my crop planning has become easier and more accurate. I save time, reduce waste, and get better .`,
                                    height: `100%`,
                                    id: `POQTB8pqt`,
                                    layoutId: `POQTB8pqt`,
                                    lKYqeIOcp: `Vegetable Farmer, USA`,
                                    m3rTIkrMk: `Rahim Ahmed`,
                                    style: { width: `100%` },
                                    variant: zr(`Ivdn2SFJk`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(U, {
                                height: 337,
                                width: `788px`,
                                children: p(W, {
                                  className: `framer-13nnnw8-container`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `YCMakzDdI-container`,
                                  nodeId: `YCMakzDdI`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `“Farmio’s smart insights helped me improve soil health and increase production without increasing costs.”`,
                                    height: `100%`,
                                    id: `YCMakzDdI`,
                                    layoutId: `YCMakzDdI`,
                                    lKYqeIOcp: `Smallholder Farmer, India`,
                                    m3rTIkrMk: `Amina Khatun`,
                                    style: { width: `100%` },
                                    variant: zr(`Ivdn2SFJk`),
                                    vMTVYBnZ7: Br(
                                      {
                                        pixelHeight: 582,
                                        pixelWidth: 624,
                                        src: `../../assets/images/Eub9U3fk5lEWBmLtLVgphjdTN0.png?width=624&height=582`,
                                        srcSet: `../../assets/images/Eub9U3fk5lEWBmLtLVgphjdTN0.png 512w,../../assets/images/Eub9U3fk5lEWBmLtLVgphjdTN0.png?width=624&height=582 624w`,
                                      },
                                      `Testimonial Image`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(U, {
                                height: 337,
                                width: `788px`,
                                children: p(W, {
                                  className: `framer-1cc1rnk-container`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `AEVqMNZrx-container`,
                                  nodeId: `AEVqMNZrx`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `“Managing my entire farm from one platform has changed the way I work. Farmio is a real game-changer.”`,
                                    height: `100%`,
                                    id: `AEVqMNZrx`,
                                    layoutId: `AEVqMNZrx`,
                                    lKYqeIOcp: `Crop Producer, Texas`,
                                    m3rTIkrMk: `John Miller`,
                                    style: { width: `100%` },
                                    variant: zr(`Ivdn2SFJk`),
                                    vMTVYBnZ7: Br(
                                      {
                                        pixelHeight: 873,
                                        pixelWidth: 936,
                                        src: `../../assets/images/aqxH6VqIauduTKTjqJyK4V0gfdE.png?width=936&height=873`,
                                        srcSet: `../../assets/images/aqxH6VqIauduTKTjqJyK4V0gfdE.png 512w,../../assets/images/aqxH6VqIauduTKTjqJyK4V0gfdE.png?width=936&height=873 936w`,
                                      },
                                      `Testimonial Image`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(U, {
                                height: 337,
                                width: `788px`,
                                children: p(W, {
                                  className: `framer-115i7d-container`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `sYM6bHK3E-container`,
                                  nodeId: `sYM6bHK3E`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `“Farmio helped me reduce fertilizer waste and improve soil quality. My profits have increased every season.”`,
                                    height: `100%`,
                                    id: `sYM6bHK3E`,
                                    layoutId: `sYM6bHK3E`,
                                    lKYqeIOcp: `Rice Farmer, Bangladesh`,
                                    m3rTIkrMk: `Hasan Ali`,
                                    style: { width: `100%` },
                                    variant: zr(`Ivdn2SFJk`),
                                    vMTVYBnZ7: Br(
                                      {
                                        pixelHeight: 582,
                                        pixelWidth: 624,
                                        src: `../../assets/images/gZ8XM3MKRCp5BE8YfyBJzY68.png?width=624&height=582`,
                                        srcSet: `../../assets/images/gZ8XM3MKRCp5BE8YfyBJzY68.png 512w,../../assets/images/gZ8XM3MKRCp5BE8YfyBJzY68.png?width=624&height=582 624w`,
                                      },
                                      `Testimonial Image`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            startFrom: 0,
                            style: { height: `100%`, width: `100%` },
                            transitionControl: {
                              damping: 40,
                              delay: 0,
                              mass: 1,
                              stiffness: 200,
                              type: `spring`,
                            },
                            width: `100%`,
                            ...Mr({ P7CUQFsoX: { itemAmount: 1 } }, m, y),
                          }),
                        }),
                      }),
                    E() &&
                      p(U, {
                        children: p(W, {
                          className: `framer-cftf93-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: w,
                          layoutId: `WEQMZVUvI-container`,
                          nodeId: `WEQMZVUvI`,
                          rendersWithMotion: !0,
                          scopeId: `DeOAdsn42`,
                          children: p(Vn, {
                            alignment: `center`,
                            arrowOptions: {
                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                              arrowGap: 10,
                              arrowPadding: 20,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 0,
                              arrowPaddingTop: 0,
                              arrowPosition: `auto`,
                              arrowRadius: 40,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !0,
                              arrowSize: 40,
                              showMouseControls: !1,
                            },
                            autoPlayControl: !0,
                            borderRadius: 0,
                            direction: `left`,
                            dragControl: !0,
                            effectsOptions: {
                              effectsHover: !0,
                              effectsOpacity: 1,
                              effectsPerspective: 1200,
                              effectsRotate: 0,
                              effectsScale: 1,
                              playOffscreen: !1,
                            },
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !0,
                            },
                            gap: 24,
                            height: `100%`,
                            id: `WEQMZVUvI`,
                            intervalControl: 2,
                            itemAmount: 1,
                            layoutId: `WEQMZVUvI`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                              dotsActiveOpacity: 1,
                              dotsBackground: `rgba(0, 0, 0, 0.2)`,
                              dotsBlur: 0,
                              dotsFill: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                              dotsGap: 8,
                              dotsInset: -64,
                              dotSize: 10,
                              dotsOpacity: 0.5,
                              dotsPadding: 8,
                              dotsRadius: 50,
                              showProgressDots: !0,
                            },
                            slots: [
                              p(U, {
                                height: 337,
                                width: `320px`,
                                children: p(W, {
                                  className: `framer-l84zoc-container`,
                                  "data-framer-name": `Testimonial Card`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `cBj9_gU6f-container`,
                                  name: `Testimonial Card`,
                                  nodeId: `cBj9_gU6f`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `Since using Farmio, my crop planning has become easier and more accurate. I save time, reduce waste, and get better yields.`,
                                    height: `100%`,
                                    id: `cBj9_gU6f`,
                                    layoutId: `cBj9_gU6f`,
                                    lKYqeIOcp: `Vegetable Farmer, USA`,
                                    m3rTIkrMk: `Rahim Ahmed`,
                                    name: `Testimonial Card`,
                                    style: { width: `100%` },
                                    variant: zr(`Jj5_tdpXg`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(U, {
                                height: 337,
                                width: `320px`,
                                children: p(W, {
                                  className: `framer-1558189-container`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `uVrSWdJqR-container`,
                                  nodeId: `uVrSWdJqR`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `“Farmio’s smart insights helped me improve soil health and increase production without increasing costs.”`,
                                    height: `100%`,
                                    id: `uVrSWdJqR`,
                                    layoutId: `uVrSWdJqR`,
                                    lKYqeIOcp: `Smallholder Farmer, India`,
                                    m3rTIkrMk: `Amina Khatun`,
                                    style: { width: `100%` },
                                    variant: zr(`Jj5_tdpXg`),
                                    vMTVYBnZ7: Br(
                                      {
                                        pixelHeight: 582,
                                        pixelWidth: 624,
                                        src: `../../assets/images/Eub9U3fk5lEWBmLtLVgphjdTN0.png?width=624&height=582`,
                                        srcSet: `../../assets/images/Eub9U3fk5lEWBmLtLVgphjdTN0.png 512w,../../assets/images/Eub9U3fk5lEWBmLtLVgphjdTN0.png?width=624&height=582 624w`,
                                      },
                                      `Testimonial Image`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(U, {
                                height: 337,
                                width: `320px`,
                                children: p(W, {
                                  className: `framer-1tjylz5-container`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `NHkQG_JqQ-container`,
                                  nodeId: `NHkQG_JqQ`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `“Managing my entire farm from one platform has changed the way I work. Farmio is a real game-changer.”`,
                                    height: `100%`,
                                    id: `NHkQG_JqQ`,
                                    layoutId: `NHkQG_JqQ`,
                                    lKYqeIOcp: `Crop Producer, Texas`,
                                    m3rTIkrMk: `John Miller`,
                                    style: { width: `100%` },
                                    variant: zr(`Jj5_tdpXg`),
                                    vMTVYBnZ7: Br(
                                      {
                                        pixelHeight: 873,
                                        pixelWidth: 936,
                                        src: `../../assets/images/aqxH6VqIauduTKTjqJyK4V0gfdE.png?width=936&height=873`,
                                        srcSet: `../../assets/images/aqxH6VqIauduTKTjqJyK4V0gfdE.png 512w,../../assets/images/aqxH6VqIauduTKTjqJyK4V0gfdE.png?width=936&height=873 936w`,
                                      },
                                      `Testimonial Image`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              p(U, {
                                height: 337,
                                width: `320px`,
                                children: p(W, {
                                  className: `framer-1cznph6-container`,
                                  "data-framer-name": `Testimonial Card`,
                                  inComponentSlot: !0,
                                  layoutDependency: w,
                                  layoutId: `yyEi1OPJI-container`,
                                  name: `Testimonial Card`,
                                  nodeId: `yyEi1OPJI`,
                                  rendersWithMotion: !0,
                                  scopeId: `DeOAdsn42`,
                                  children: p(Ar, {
                                    EWsInXs_D: `“Farmio helped me reduce fertilizer waste and improve soil quality. My profits have increased every season.”`,
                                    height: `100%`,
                                    id: `yyEi1OPJI`,
                                    layoutId: `yyEi1OPJI`,
                                    lKYqeIOcp: `Rice Farmer, Bangladesh`,
                                    m3rTIkrMk: `Hasan Ali`,
                                    name: `Testimonial Card`,
                                    style: { width: `100%` },
                                    variant: zr(`Jj5_tdpXg`),
                                    vMTVYBnZ7: Br(
                                      {
                                        pixelHeight: 582,
                                        pixelWidth: 624,
                                        src: `../../assets/images/gZ8XM3MKRCp5BE8YfyBJzY68.png?width=624&height=582`,
                                        srcSet: `../../assets/images/gZ8XM3MKRCp5BE8YfyBJzY68.png 512w,../../assets/images/gZ8XM3MKRCp5BE8YfyBJzY68.png?width=624&height=582 624w`,
                                      },
                                      `Testimonial Image`
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            startFrom: 0,
                            style: { height: `100%`, width: `100%` },
                            transitionControl: {
                              damping: 40,
                              delay: 0,
                              mass: 1,
                              stiffness: 200,
                              type: `spring`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qZ9cQ.framer-1jw9eyz, .framer-qZ9cQ .framer-1jw9eyz { display: block; }`,
          `.framer-qZ9cQ.framer-y8k51o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 400px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1320px; }`,
          `.framer-qZ9cQ .framer-1boyis8-container, .framer-qZ9cQ .framer-cftf93-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-qZ9cQ .framer-l19vda-container, .framer-qZ9cQ .framer-13nnnw8-container, .framer-qZ9cQ .framer-1cc1rnk-container, .framer-qZ9cQ .framer-115i7d-container { height: auto; position: relative; width: 788px; }`,
          `.framer-qZ9cQ .framer-l84zoc-container, .framer-qZ9cQ .framer-1558189-container, .framer-qZ9cQ .framer-1tjylz5-container, .framer-qZ9cQ .framer-1cznph6-container { height: auto; position: relative; width: 320px; }`,
          `.framer-qZ9cQ.framer-v-1ecvrtq.framer-y8k51o { height: 350px; width: 700px; }`,
          `.framer-qZ9cQ.framer-v-m7cs2b.framer-y8k51o { height: 620px; width: 320px; }`,
        ],
        `framer-qZ9cQ`
      )),
      (Kr.displayName = `Testimonial Slider`),
      (Kr.defaultProps = { height: 400, width: 1320 }),
      M(Kr, {
        variant: {
          options: [`stSXa2Quu`, `P7CUQFsoX`, `rkOcuLlxy`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      R(Kr, [{ explicitInter: !0, fonts: [] }, ...Nr, ...Pr], { supportsExplicitInterCodegen: !0 }),
      (Kr.loader = { load: (e, t) => (t.locale, Promise.allSettled([I(Ar, {}, t)])) }));
  });
function Jr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Pe(),
      Xe(),
      (Yr = [`rOHWsGtCT`, `uOlWTHf4S`, `Fz49IHgTw`, `lqu_seSoL`]),
      (Xr = `framer-Fotqj`),
      (Zr = {
        Fz49IHgTw: `framer-v-8tq5c`,
        lqu_seSoL: `framer-v-tivpbn`,
        rOHWsGtCT: `framer-v-4shj6p`,
        uOlWTHf4S: `framer-v-711s8u`,
      }),
      (Qr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($r = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ei = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (ti = {
        "Desktop 01": `rOHWsGtCT`,
        "Desktop 02": `uOlWTHf4S`,
        Phone: `lqu_seSoL`,
        Tablet: `Fz49IHgTw`,
      }),
      (ni = C.create(s)),
      (ri = ({ excerpt: e, height: t, id: n, image: r, title: i, width: a, ...o }) => ({
        ...o,
        dUTjfptcD: i ?? o.dUTjfptcD ?? `Agriculture consulting`,
        nZIswAliu: r ??
          o.nZIswAliu ?? {
            alt: `Service Image`,
            pixelHeight: 2004,
            pixelWidth: 2720,
            src: `../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?width=2720&height=2004`,
            srcSet: `../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?scale-down-to=512&width=2720&height=2004 512w,../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png 1024w,../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?scale-down-to=2048&width=2720&height=2004 2048w,../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?width=2720&height=2004 2720w`,
          },
        variant: ti[o.variant] ?? o.variant ?? `rOHWsGtCT`,
        YLr8fMSky:
          e ?? o.YLr8fMSky ?? `Smart, sustainable farming guidance tailored to your needs.`,
      })),
      (ii = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ai = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V(),
            l = ae(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: m,
              nZIswAliu: h,
              dUTjfptcD: g,
              YLr8fMSky: _,
              ...y
            } = ri(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: w,
              isLoading: T,
              setGestureState: ne,
              setVariant: E,
              variants: D,
            } = le({
              cycleOrder: Yr,
              defaultVariant: `rOHWsGtCT`,
              ref: i,
              variant: m,
              variantClassNames: Zr,
            }),
            O = ii(e, D),
            k = N(Xr, Ze, Re);
          return p(A, {
            id: f ?? a,
            children: p(ni, {
              animate: D,
              initial: !1,
              children: p(ei, {
                value: Qr,
                children: v(C.div, {
                  ...y,
                  ...te,
                  className: N(k, `framer-4shj6p`, d, S),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: O,
                  layoutId: `rOHWsGtCT`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  variants: {
                    Fz49IHgTw: {
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    lqu_seSoL: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-f0ee33d7-c6fa-4dbc-a3b8-dc6851987f4e, rgb(242, 243, 238))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                    },
                  },
                  ...Jr(
                    {
                      Fz49IHgTw: { "data-framer-name": `Tablet` },
                      lqu_seSoL: { "data-border": !0, "data-framer-name": `Phone` },
                      uOlWTHf4S: { "data-framer-name": `Desktop 02` },
                    },
                    x,
                    w
                  ),
                  children: [
                    p(pe, {
                      background: {
                        alt: `Service Image`,
                        fit: `fill`,
                        loading: F(
                          (l?.y || 0) +
                            12 +
                            (((l?.height || 465) -
                              36 -
                              (Math.max(0, ((l?.height || 465) - 36 - 114.4) / 1) * 1 +
                                90.4 +
                                24)) /
                              2 +
                              0 +
                              0)
                        ),
                        pixelHeight: 2004,
                        pixelWidth: 2720,
                        sizes: `calc(${l?.width || `100vw`} - 24px)`,
                        ...$r(h),
                      },
                      className: `framer-3hhdzp`,
                      layoutDependency: O,
                      layoutId: `XEMth364M`,
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      variants: {
                        Fz49IHgTw: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        lqu_seSoL: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                      },
                      ...Jr(
                        {
                          Fz49IHgTw: {
                            background: {
                              alt: `Service Image`,
                              fit: `fill`,
                              loading: F(
                                (l?.y || 0) + 12 + (((l?.height || 458) - 36 - 390.4) / 2 + 0 + 0)
                              ),
                              pixelHeight: 2004,
                              pixelWidth: 2720,
                              sizes: `calc(${l?.width || `100vw`} - 24px)`,
                              ...$r(h),
                            },
                          },
                          lqu_seSoL: {
                            background: {
                              alt: `Service Image`,
                              fit: `fill`,
                              loading: F(
                                (l?.y || 0) + 12 + (((l?.height || 508) - 36 - 440.4) / 2 + 0 + 0)
                              ),
                              pixelHeight: 2004,
                              pixelWidth: 2720,
                              sizes: `calc(${l?.width || `100vw`} - 24px)`,
                              ...$r(h),
                            },
                          },
                        },
                        x,
                        w
                      ),
                    }),
                    v(C.div, {
                      className: `framer-f0v394`,
                      "data-framer-name": `Title & Excerpt`,
                      layoutDependency: O,
                      layoutId: `CLP6AC4JY`,
                      children: [
                        p(G, {
                          __fromCanvasComponent: !0,
                          children: p(s, {
                            children: p(C.h4, {
                              className: `framer-styles-preset-gc3dxx`,
                              "data-styles-preset": `MXFp7sUVi`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                              },
                              children: `Agriculture Consulting`,
                            }),
                          }),
                          className: `framer-1wcjcep`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `SUeIdagVA`,
                          style: {
                            "--extracted-1eung3n": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        p(G, {
                          __fromCanvasComponent: !0,
                          children: p(s, {
                            children: p(C.h6, {
                              className: `framer-styles-preset-1u2nze0`,
                              "data-styles-preset": `GlitAQcHm`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                              },
                              children: `Smart, sustainable farming guidance tailored to your needs.`,
                            }),
                          }),
                          className: `framer-o5bkm8`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `lHQlnCxSj`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Fotqj.framer-23xyf, .framer-Fotqj .framer-23xyf { display: block; }`,
          `.framer-Fotqj.framer-4shj6p { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 465px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 12px 24px 12px; position: relative; width: 540px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Fotqj .framer-3hhdzp { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Fotqj .framer-f0v394 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Fotqj .framer-1wcjcep { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Fotqj .framer-o5bkm8 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 400px; position: relative; width: 100%; }`,
          `.framer-Fotqj.framer-v-711s8u .framer-o5bkm8, .framer-Fotqj.framer-v-tivpbn .framer-o5bkm8 { max-width: 552px; }`,
          `.framer-Fotqj.framer-v-8tq5c.framer-4shj6p { height: min-content; width: 500px; }`,
          `.framer-Fotqj.framer-v-8tq5c .framer-3hhdzp { aspect-ratio: 1.7 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 280px); }`,
          `.framer-Fotqj.framer-v-8tq5c .framer-f0v394 { gap: 16px; }`,
          `.framer-Fotqj.framer-v-8tq5c .framer-o5bkm8 { max-width: unset; }`,
          `.framer-Fotqj.framer-v-tivpbn.framer-4shj6p { height: min-content; }`,
          `.framer-Fotqj.framer-v-tivpbn .framer-3hhdzp { aspect-ratio: 1.5542168674698795 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 332px); }`,
          `.framer-Fotqj.framer-v-tivpbn .framer-f0v394 { gap: 14px; }`,
          ...Je,
          ...Ue,
          `.framer-Fotqj[data-border="true"]::after, .framer-Fotqj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Fotqj`
      )),
      (ai.displayName = `Service Card`),
      (ai.defaultProps = { height: 465, width: 540 }),
      M(ai, {
        variant: {
          options: [`rOHWsGtCT`, `uOlWTHf4S`, `Fz49IHgTw`, `lqu_seSoL`],
          optionTitles: [`Desktop 01`, `Desktop 02`, `Tablet`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        nZIswAliu: {
          __defaultAssetReference: `data:framer/asset-reference,zlRjhLi53i0xqjhzJz7TQPnCzV0.png?originalFilename=Frame+60.png&width=2720&height=2004`,
          __vekterDefault: {
            alt: `Service Image`,
            assetReference: `data:framer/asset-reference,zlRjhLi53i0xqjhzJz7TQPnCzV0.png?originalFilename=Frame+60.png&width=2720&height=2004`,
          },
          title: `Image`,
          type: H.ResponsiveImage,
        },
        dUTjfptcD: {
          defaultValue: `Agriculture consulting`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        ondUTjfptcDChange: { changes: `dUTjfptcD`, type: H.ChangeHandler },
        YLr8fMSky: {
          defaultValue: `Smart, sustainable farming guidance tailored to your needs.`,
          displayTextArea: !1,
          title: `Excerpt`,
          type: H.String,
        },
        onYLr8fMSkyChange: { changes: `YLr8fMSky`, type: H.ChangeHandler },
      }),
      R(
        ai,
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
          ...P(Ke),
          ...P(K),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function si(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Pe(),
      Fe(),
      oi(),
      Ne(),
      (ci = L(q)),
      (li = L(ai)),
      (ui = ue(C.div)),
      (di = [`eGBfjKWG_`, `xP5tqrzEk`, `ueqesjt_5`, `CsHUqxREX`, `kkDcHWOSl`]),
      (fi = `framer-ddPtX`),
      (pi = {
        CsHUqxREX: `framer-v-11tequd`,
        eGBfjKWG_: `framer-v-18xglgg`,
        kkDcHWOSl: `framer-v-q6zz63`,
        ueqesjt_5: `framer-v-1mm0f30`,
        xP5tqrzEk: `framer-v-abl0tc`,
      }),
      (mi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (hi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (gi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_i = {
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
      (vi = {
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
      (yi = { damping: 55, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
      (bi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: yi,
        x: 0,
        y: 40,
      }),
      (xi = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (Si = {
        "Desktop 02": `xP5tqrzEk`,
        "Phone 01": `CsHUqxREX`,
        "Phone 02": `kkDcHWOSl`,
        Desktop: `eGBfjKWG_`,
        Tablet: `ueqesjt_5`,
      }),
      (Ci = C.create(s)),
      (wi = (e, t) => {
        let [n, r] = l(e),
          [i, a] = l(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Ti = ({
        backgroundImage: e,
        cardImage: t,
        excerpt: n,
        height: r,
        id: i,
        pageNumber: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        b9rTnhhbU: o ?? c.b9rTnhhbU ?? `Agriculture consulting`,
        cv93ribT7: t ??
          c.cv93ribT7 ?? {
            alt: `Service Image`,
            pixelHeight: 2004,
            pixelWidth: 2720,
            src: `../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?width=2720&height=2004`,
            srcSet: `../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?scale-down-to=512&width=2720&height=2004 512w,../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png 1024w,../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?scale-down-to=2048&width=2720&height=2004 2048w,../../assets/images/zlRjhLi53i0xqjhzJz7TQPnCzV0.png?width=2720&height=2004 2720w`,
          },
        d078Pz5W7: e ??
          c.d078Pz5W7 ?? {
            alt: `Service Image`,
            pixelHeight: 1083,
            pixelWidth: 1440,
            src: `../../assets/images/PvCp32weG5JkDiZA50WLEDc33S0.png`,
            srcSet: `../../assets/images/PvCp32weG5JkDiZA50WLEDc33S0.png?scale-down-to=512&width=1440&height=1083 512w,../../assets/images/PvCp32weG5JkDiZA50WLEDc33S0.png?scale-down-to=1024&width=1440&height=1083 1024w,../../assets/images/PvCp32weG5JkDiZA50WLEDc33S0.png 1440w`,
          },
        Ej6dHBo7p: a ?? c.Ej6dHBo7p ?? `01/`,
        LlUzoOb3H:
          n ?? c.LlUzoOb3H ?? `Smart, sustainable farming guidance tailored to your needs.`,
        variant: Si[c.variant] ?? c.variant ?? `eGBfjKWG_`,
      })),
      (Ei = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Di = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V(),
            l = ae(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: m,
              b9rTnhhbU: h,
              onb9rTnhhbUChange: g,
              LlUzoOb3H: _,
              onLlUzoOb3HChange: y,
              cv93ribT7: x,
              d078Pz5W7: S,
              Ej6dHBo7p: ee,
              ...te
            } = Ti(e),
            [w, T] = wi(h, g),
            [ne, E] = wi(_, y),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: re,
              gestureVariant: j,
              isLoading: M,
              setGestureState: ie,
              setVariant: P,
              variants: I,
            } = le({
              cycleOrder: di,
              defaultVariant: `eGBfjKWG_`,
              ref: i,
              variant: m,
              variantClassNames: pi,
            }),
            L = Ei(e, I),
            R = N(fi, Ve, Re),
            z = () => ![`CsHUqxREX`, `kkDcHWOSl`].includes(D),
            oe = () => D !== `kkDcHWOSl`;
          return p(A, {
            id: f ?? a,
            children: p(Ci, {
              animate: I,
              initial: !1,
              children: p(xi, {
                value: mi,
                children: v(C.div, {
                  ...te,
                  ...re,
                  className: N(R, `framer-18xglgg`, d, O),
                  "data-framer-name": `Desktop`,
                  layoutDependency: L,
                  layoutId: `eGBfjKWG_`,
                  ref: i,
                  style: { ...u },
                  ...si(
                    {
                      CsHUqxREX: { "data-framer-name": `Phone 01` },
                      kkDcHWOSl: { "data-framer-name": `Phone 02` },
                      ueqesjt_5: { "data-framer-name": `Tablet` },
                      xP5tqrzEk: { "data-framer-name": `Desktop 02` },
                    },
                    D,
                    j
                  ),
                  children: [
                    z() &&
                      p(pe, {
                        background: {
                          alt: `Service Image`,
                          fit: `fill`,
                          loading: F((l?.y || 0) + 0),
                          pixelHeight: 1083,
                          pixelWidth: 1440,
                          sizes: l?.width || `100vw`,
                          ...hi(S),
                        },
                        className: `framer-1n8o5va`,
                        "data-framer-name": `Background Image`,
                        layoutDependency: L,
                        layoutId: `BypSm0pos`,
                        children: p(C.div, {
                          className: `framer-1b6lfzz`,
                          "data-framer-name": `Color`,
                          layoutDependency: L,
                          layoutId: `wrW9mQuhB`,
                          style: {
                            backgroundColor: `var(--token-758051b4-1516-494d-8a08-3fb09232b834, rgb(0, 0, 0))`,
                            opacity: 0.7,
                          },
                        }),
                      }),
                    v(C.div, {
                      className: `framer-15saiv9`,
                      "data-framer-name": `Service Content`,
                      layoutDependency: L,
                      layoutId: `SXoL5Z5us`,
                      children: [
                        oe() &&
                          v(C.div, {
                            className: `framer-wbfrpt`,
                            "data-framer-name": `Title & Tag`,
                            layoutDependency: L,
                            layoutId: `PVFMuMpDN`,
                            children: [
                              p(U, {
                                height: 32,
                                y:
                                  (l?.y || 0) +
                                  80 +
                                  (((l?.height || 800) -
                                    160 -
                                    (((l?.height || 800) - 160) * 1 + 0)) /
                                    2 +
                                    0 +
                                    0) +
                                  0 +
                                  ((((l?.height || 800) - 160) * 1 -
                                    0 -
                                    (104.4 +
                                      Math.max(
                                        0,
                                        (((l?.height || 800) - 160) * 1 - 0 - 156.4) / 1
                                      ) *
                                        1 +
                                      52)) /
                                    2 +
                                    0 +
                                    0) +
                                  0 +
                                  0,
                                ...si(
                                  {
                                    CsHUqxREX: {
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        (((l?.height || 868) - 0 - 615.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    ueqesjt_5: {
                                      y:
                                        (l?.y || 0) +
                                        80 +
                                        (((l?.height || 947) - 160 - 713.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    xP5tqrzEk: {
                                      y:
                                        (l?.y || 0) +
                                        80 +
                                        (((l?.height || 800) -
                                          160 -
                                          (((l?.height || 800) - 160) * 1 + 0)) /
                                          2 +
                                          0 +
                                          0) +
                                        0 +
                                        ((((l?.height || 800) - 160) * 1 -
                                          0 -
                                          (114.4 +
                                            Math.max(
                                              0,
                                              (((l?.height || 800) - 160) * 1 - 0 - 166.4) / 1
                                            ) *
                                              1 +
                                            52)) /
                                          2 +
                                          0 +
                                          0) +
                                        0 +
                                        0,
                                    },
                                  },
                                  D,
                                  j
                                ),
                                children: p(W, {
                                  className: `framer-1uhrt9f-container`,
                                  layoutDependency: L,
                                  layoutId: `d6UZanTrt-container`,
                                  nodeId: `d6UZanTrt`,
                                  rendersWithMotion: !0,
                                  scopeId: `C6BNxL_l9`,
                                  children: p(q, {
                                    bU2YfweFO: ` Our services`,
                                    height: `100%`,
                                    id: `d6UZanTrt`,
                                    layoutId: `d6UZanTrt`,
                                    variant: gi(`XTCz0IaFl`),
                                    width: `100%`,
                                    ...si({ CsHUqxREX: { variant: gi(`e_m2k17aE`) } }, D, j),
                                  }),
                                }),
                              }),
                              p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(C.h2, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                    },
                                    children: `Advanced Services for Modern Agriculture`,
                                  }),
                                }),
                                className: `framer-15zdqd2`,
                                effect: _i,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `ClfHB18IW`,
                                style: {
                                  "--extracted-1of0zx5": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  CsHUqxREX: {
                                    "--extracted-1of0zx5": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...si(
                                  {
                                    CsHUqxREX: {
                                      children: p(s, {
                                        children: p(C.h2, {
                                          className: `framer-styles-preset-1ydczzn`,
                                          "data-styles-preset": `ySWnAL9MB`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-1of0zx5, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                          },
                                          children: `Advanced Services for Modern Agriculture`,
                                        }),
                                      }),
                                    },
                                  },
                                  D,
                                  j
                                ),
                              }),
                            ],
                          }),
                        v(ui, {
                          className: `framer-1pcx99l`,
                          "data-framer-name": `Card & Page`,
                          layoutDependency: L,
                          layoutId: `lU_Cm9o6g`,
                          ...si(
                            {
                              xP5tqrzEk: {
                                __framer__animate: { transition: yi },
                                __framer__animateOnce: !0,
                                __framer__enter: vi,
                                __framer__exit: bi,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                              },
                            },
                            D,
                            j
                          ),
                          children: [
                            p(U, {
                              height:
                                (Math.max(0, (((l?.height || 800) - 160) * 1 - 0 - 156.4) / 1) * 1 -
                                  0) *
                                1,
                              width: `max(min(${l?.width || `100vw`} - 60px, 655px), 1px)`,
                              y:
                                (l?.y || 0) +
                                80 +
                                (((l?.height || 800) - 160 - (((l?.height || 800) - 160) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((((l?.height || 800) - 160) * 1 -
                                  0 -
                                  (104.4 +
                                    Math.max(0, (((l?.height || 800) - 160) * 1 - 0 - 156.4) / 1) *
                                      1 +
                                    52)) /
                                  2 +
                                  104.4 +
                                  52) +
                                0 +
                                (Math.max(0, (((l?.height || 800) - 160) * 1 - 0 - 156.4) / 1) * 1 -
                                  0 -
                                  (Math.max(0, (((l?.height || 800) - 160) * 1 - 0 - 156.4) / 1) *
                                    1 -
                                    0) *
                                    1),
                              ...si(
                                {
                                  CsHUqxREX: {
                                    height: 465,
                                    width: l?.width || `100vw`,
                                    y:
                                      (l?.y || 0) +
                                      0 +
                                      (((l?.height || 868) - 0 - 615.4) / 2 + 0 + 0) +
                                      0 +
                                      150.4 +
                                      0 +
                                      0,
                                  },
                                  kkDcHWOSl: {
                                    height: 465,
                                    width: l?.width || `100vw`,
                                    y:
                                      (l?.y || 0) +
                                      0 +
                                      (((l?.height || 655) - 0 - 465) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  ueqesjt_5: {
                                    height: 465,
                                    width: `min(${l?.width || `100vw`} - 60px, 585px)`,
                                    y:
                                      (l?.y || 0) +
                                      80 +
                                      (((l?.height || 947) - 160 - 713.4) / 2 + 0 + 0) +
                                      0 +
                                      144.4 +
                                      0 +
                                      0,
                                  },
                                  xP5tqrzEk: {
                                    height:
                                      (Math.max(
                                        0,
                                        (((l?.height || 800) - 160) * 1 - 0 - 166.4) / 1
                                      ) *
                                        1 -
                                        0) *
                                      1,
                                    y:
                                      (l?.y || 0) +
                                      80 +
                                      (((l?.height || 800) -
                                        160 -
                                        (((l?.height || 800) - 160) * 1 + 0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      ((((l?.height || 800) - 160) * 1 -
                                        0 -
                                        (114.4 +
                                          Math.max(
                                            0,
                                            (((l?.height || 800) - 160) * 1 - 0 - 166.4) / 1
                                          ) *
                                            1 +
                                          52)) /
                                        2 +
                                        114.4 +
                                        52) +
                                      0 +
                                      (Math.max(
                                        0,
                                        (((l?.height || 800) - 160) * 1 - 0 - 166.4) / 1
                                      ) *
                                        1 -
                                        0 -
                                        (Math.max(
                                          0,
                                          (((l?.height || 800) - 160) * 1 - 0 - 166.4) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1),
                                  },
                                },
                                D,
                                j
                              ),
                              children: p(W, {
                                className: `framer-1wqxxkc-container`,
                                layoutDependency: L,
                                layoutId: `TDgM1fcPF-container`,
                                nodeId: `TDgM1fcPF`,
                                rendersWithMotion: !0,
                                scopeId: `C6BNxL_l9`,
                                children: p(ai, {
                                  dUTjfptcD: w,
                                  height: `100%`,
                                  id: `TDgM1fcPF`,
                                  layoutId: `TDgM1fcPF`,
                                  nZIswAliu: hi(x),
                                  ondUTjfptcDChange: T,
                                  onYLr8fMSkyChange: E,
                                  style: { height: `100%`, width: `100%` },
                                  variant: gi(`rOHWsGtCT`),
                                  width: `100%`,
                                  YLr8fMSky: ne,
                                  ...si(
                                    {
                                      CsHUqxREX: {
                                        style: { width: `100%` },
                                        variant: gi(`lqu_seSoL`),
                                      },
                                      kkDcHWOSl: {
                                        style: { width: `100%` },
                                        variant: gi(`lqu_seSoL`),
                                      },
                                      ueqesjt_5: {
                                        style: { width: `100%` },
                                        variant: gi(`Fz49IHgTw`),
                                      },
                                      xP5tqrzEk: { variant: gi(`uOlWTHf4S`) },
                                    },
                                    D,
                                    j
                                  ),
                                }),
                              }),
                            }),
                            z() &&
                              v(C.div, {
                                className: `framer-suwan`,
                                "data-framer-name": `Scroll Page`,
                                layoutDependency: L,
                                layoutId: `EdptGxZYL`,
                                children: [
                                  v(C.div, {
                                    className: `framer-10uvv5k`,
                                    "data-framer-name": `Page`,
                                    layoutDependency: L,
                                    layoutId: `tIorDJr_p`,
                                    children: [
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(C.h6, {
                                            className: `framer-styles-preset-1u2nze0`,
                                            "data-styles-preset": `GlitAQcHm`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                            },
                                            children: `01/`,
                                          }),
                                        }),
                                        className: `framer-mrzmh7`,
                                        fonts: [`Inter`],
                                        layoutDependency: L,
                                        layoutId: `efAM3LSAK`,
                                        style: {
                                          "--extracted-1w1cjl5": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: ee,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(G, {
                                        __fromCanvasComponent: !0,
                                        children: p(s, {
                                          children: p(C.h6, {
                                            className: `framer-styles-preset-1u2nze0`,
                                            "data-styles-preset": `GlitAQcHm`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                            },
                                            children: `05`,
                                          }),
                                        }),
                                        className: `framer-1ttryoz`,
                                        fonts: [`Inter`],
                                        layoutDependency: L,
                                        layoutId: `hZKt0t0XS`,
                                        style: {
                                          "--extracted-1w1cjl5": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                          opacity: 0.7,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  p(G, {
                                    __fromCanvasComponent: !0,
                                    children: p(s, {
                                      children: p(C.h6, {
                                        className: `framer-styles-preset-1u2nze0`,
                                        "data-styles-preset": `GlitAQcHm`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                        },
                                        children: `[ Keep Scrolling ]`,
                                      }),
                                    }),
                                    className: `framer-1238hs3`,
                                    fonts: [`Inter`],
                                    layoutDependency: L,
                                    layoutId: `g8YPl7E_B`,
                                    style: {
                                      "--extracted-1w1cjl5": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ddPtX.framer-buecb2, .framer-ddPtX .framer-buecb2 { display: block; }`,
          `.framer-ddPtX.framer-18xglgg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 30px 80px 30px; position: relative; width: 1200px; }`,
          `.framer-ddPtX .framer-1n8o5va { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
          `.framer-ddPtX .framer-1b6lfzz { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-ddPtX .framer-15saiv9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-ddPtX .framer-wbfrpt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 625px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-ddPtX .framer-1uhrt9f-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-ddPtX .framer-15zdqd2 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-ddPtX .framer-1pcx99l { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; max-width: 655px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ddPtX .framer-1wqxxkc-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-ddPtX .framer-suwan { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: -178px; width: min-content; z-index: 1; }`,
          `.framer-ddPtX .framer-10uvv5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-ddPtX .framer-mrzmh7, .framer-ddPtX .framer-1ttryoz, .framer-ddPtX .framer-1238hs3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-ddPtX.framer-v-abl0tc .framer-wbfrpt { gap: 20px; }`,
          `.framer-ddPtX.framer-v-1mm0f30.framer-18xglgg { height: min-content; width: 768px; }`,
          `.framer-ddPtX.framer-v-1mm0f30 .framer-15saiv9, .framer-ddPtX.framer-v-11tequd .framer-15saiv9 { gap: 40px; height: min-content; }`,
          `.framer-ddPtX.framer-v-1mm0f30 .framer-1pcx99l { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 30px; height: min-content; max-width: 585px; }`,
          `.framer-ddPtX.framer-v-1mm0f30 .framer-1wqxxkc-container, .framer-ddPtX.framer-v-11tequd .framer-1wqxxkc-container, .framer-ddPtX.framer-v-q6zz63 .framer-1wqxxkc-container { flex: none; height: auto; width: 100%; }`,
          `.framer-ddPtX.framer-v-1mm0f30 .framer-suwan { align-content: center; align-items: center; bottom: unset; gap: 10px; position: relative; right: unset; }`,
          `.framer-ddPtX.framer-v-11tequd.framer-18xglgg, .framer-ddPtX.framer-v-q6zz63.framer-18xglgg { height: min-content; padding: 0px; width: 768px; }`,
          `.framer-ddPtX.framer-v-11tequd .framer-wbfrpt { gap: 16px; max-width: unset; }`,
          `.framer-ddPtX.framer-v-11tequd .framer-1pcx99l, .framer-ddPtX.framer-v-q6zz63 .framer-1pcx99l { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 30px; height: min-content; max-width: unset; }`,
          `.framer-ddPtX.framer-v-q6zz63 .framer-15saiv9 { gap: 32px; height: min-content; }`,
          ...ze,
          ...Ue,
        ],
        `framer-ddPtX`
      )),
      (Di.displayName = `Service Content`),
      (Di.defaultProps = { height: 800, width: 1200 }),
      M(Di, {
        variant: {
          options: [`eGBfjKWG_`, `xP5tqrzEk`, `ueqesjt_5`, `CsHUqxREX`, `kkDcHWOSl`],
          optionTitles: [`Desktop`, `Desktop 02`, `Tablet`, `Phone 01`, `Phone 02`],
          title: `Variant`,
          type: H.Enum,
        },
        b9rTnhhbU: {
          defaultValue: `Agriculture consulting`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        onb9rTnhhbUChange: { changes: `b9rTnhhbU`, type: H.ChangeHandler },
        LlUzoOb3H: {
          defaultValue: `Smart, sustainable farming guidance tailored to your needs.`,
          displayTextArea: !1,
          title: `Excerpt`,
          type: H.String,
        },
        onLlUzoOb3HChange: { changes: `LlUzoOb3H`, type: H.ChangeHandler },
        cv93ribT7: {
          __defaultAssetReference: `data:framer/asset-reference,zlRjhLi53i0xqjhzJz7TQPnCzV0.png?originalFilename=Frame+60.png&width=2720&height=2004`,
          __vekterDefault: {
            alt: `Service Image`,
            assetReference: `data:framer/asset-reference,zlRjhLi53i0xqjhzJz7TQPnCzV0.png?originalFilename=Frame+60.png&width=2720&height=2004`,
          },
          title: `Card Image`,
          type: H.ResponsiveImage,
        },
        d078Pz5W7: {
          __defaultAssetReference: `data:framer/asset-reference,PvCp32weG5JkDiZA50WLEDc33S0.png?originalFilename=Services.png&width=1440&height=1083`,
          __vekterDefault: {
            alt: `Service Image`,
            assetReference: `data:framer/asset-reference,PvCp32weG5JkDiZA50WLEDc33S0.png?originalFilename=Services.png&width=1440&height=1083`,
          },
          title: `Background Image`,
          type: H.ResponsiveImage,
        },
        Ej6dHBo7p: {
          defaultValue: `01/`,
          displayTextArea: !1,
          title: `Page Number`,
          type: H.String,
        },
        onEj6dHBo7pChange: { changes: `Ej6dHBo7p`, type: H.ChangeHandler },
      }),
      R(
        Di,
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
          ...ci,
          ...li,
          ...P(Ie),
          ...P(K),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Di.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([I(q, {}, t), I(ai, {}, t)])),
      }));
  });
function ki(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ai,
  ji,
  Mi,
  Ni,
  Pi,
  X,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Oi(),
      (Ai = L(Di)),
      (ji = [
        `OWT1cl9fN`,
        `GTnPEmSO0`,
        `RSLcjY9QB`,
        `HKiI1F4FX`,
        `LMziWVagA`,
        `xO__f8Ph9`,
        `dFryYZrXT`,
        `NowfkZHs_`,
        `f_2p_ipRW`,
        `CW3LZyaEl`,
        `hShj36VLp`,
      ]),
      (Mi = `framer-Edu6m`),
      (Ni = {
        CW3LZyaEl: `framer-v-1xmeo9m`,
        dFryYZrXT: `framer-v-11xffqj`,
        f_2p_ipRW: `framer-v-1pwgvty`,
        GTnPEmSO0: `framer-v-1e68sc7`,
        HKiI1F4FX: `framer-v-1d6kki0`,
        hShj36VLp: `framer-v-1r7r4jk`,
        LMziWVagA: `framer-v-lh5rod`,
        NowfkZHs_: `framer-v-1aqydv7`,
        OWT1cl9fN: `framer-v-w70bvi`,
        RSLcjY9QB: `framer-v-1afqlxj`,
        xO__f8Ph9: `framer-v-1wzezw0`,
      }),
      (Pi = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Fi = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Ii = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (Li = {
        "Desktop 01": `OWT1cl9fN`,
        "Desktop 02": `GTnPEmSO0`,
        "Desktop 03": `RSLcjY9QB`,
        "Desktop 04": `HKiI1F4FX`,
        "Desktop 05": `LMziWVagA`,
        "Phone ": `hShj36VLp`,
        "Tablet 01": `xO__f8Ph9`,
        "Tablet 02": `dFryYZrXT`,
        "Tablet 03": `NowfkZHs_`,
        "Tablet 04": `f_2p_ipRW`,
        "Tablet 05": `CW3LZyaEl`,
      }),
      (Ri = C.create(s)),
      (zi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Li[r.variant] ?? r.variant ?? `OWT1cl9fN`,
      })),
      (Bi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Vi = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = V(),
            c = ae(),
            { style: l, className: u, layoutId: d, variant: f, ...m } = zi(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: w,
            } = le({
              cycleOrder: ji,
              defaultVariant: `OWT1cl9fN`,
              ref: i,
              variant: f,
              variantClassNames: Ni,
            }),
            T = Bi(e, w),
            ne = N(Mi);
          return p(A, {
            id: d ?? a,
            children: p(Ri, {
              animate: w,
              initial: !1,
              children: p(Ii, {
                value: Pi,
                children: v(C.div, {
                  ...m,
                  ...y,
                  className: N(ne, `framer-w70bvi`, u, g),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: T,
                  layoutId: `OWT1cl9fN`,
                  ref: i,
                  style: { ...l },
                  ...ki(
                    {
                      CW3LZyaEl: { "data-framer-name": `Tablet 05` },
                      dFryYZrXT: { "data-framer-name": `Tablet 02` },
                      f_2p_ipRW: { "data-framer-name": `Tablet 04` },
                      GTnPEmSO0: { "data-framer-name": `Desktop 02` },
                      HKiI1F4FX: { "data-framer-name": `Desktop 04` },
                      hShj36VLp: { "data-framer-name": `Phone ` },
                      LMziWVagA: { "data-framer-name": `Desktop 05` },
                      NowfkZHs_: { "data-framer-name": `Tablet 03` },
                      RSLcjY9QB: { "data-framer-name": `Desktop 03` },
                      xO__f8Ph9: { "data-framer-name": `Tablet 01` },
                    },
                    h,
                    x
                  ),
                  children: [
                    p(U, {
                      height: Math.max(0, ((c?.height || 800) - 0 - 0) / 1) * 1,
                      width: c?.width || `100vw`,
                      y:
                        (c?.y || 0) +
                        0 +
                        (((c?.height || 800) -
                          0 -
                          (Math.max(0, ((c?.height || 800) - 0 - 0) / 1) * 1 + 0)) /
                          2 +
                          0 +
                          0),
                      ...ki(
                        {
                          CW3LZyaEl: {
                            height: Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 1e3) -
                                0 -
                                (Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1 + 0)) /
                                2 +
                                0 +
                                0),
                          },
                          dFryYZrXT: {
                            height: Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 1e3) -
                                0 -
                                (Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1 + 0)) /
                                2 +
                                0 +
                                0),
                          },
                          f_2p_ipRW: {
                            height: Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 1e3) -
                                0 -
                                (Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1 + 0)) /
                                2 +
                                0 +
                                0),
                          },
                          hShj36VLp: {
                            height: 800,
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 4096) / 2 + 0 + 0),
                          },
                          NowfkZHs_: {
                            height: Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 1e3) -
                                0 -
                                (Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1 + 0)) /
                                2 +
                                0 +
                                0),
                          },
                          xO__f8Ph9: {
                            height: Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 1e3) -
                                0 -
                                (Math.max(0, ((c?.height || 1e3) - 0 - 0) / 1) * 1 + 0)) /
                                2 +
                                0 +
                                0),
                          },
                        },
                        h,
                        x
                      ),
                      children: p(W, {
                        className: `framer-bbevpn-container`,
                        layoutDependency: T,
                        layoutId: `oj1F9CDNb-container`,
                        nodeId: `oj1F9CDNb`,
                        rendersWithMotion: !0,
                        scopeId: `FUwzjulez`,
                        children: p(Di, {
                          b9rTnhhbU: `Agriculture consulting`,
                          Ej6dHBo7p: `01/`,
                          height: `100%`,
                          id: `oj1F9CDNb`,
                          layoutId: `oj1F9CDNb`,
                          LlUzoOb3H: `Smart, sustainable farming guidance tailored to your needs.`,
                          style: { height: `100%`, width: `100%` },
                          variant: X(`eGBfjKWG_`),
                          width: `100%`,
                          ...ki(
                            {
                              CW3LZyaEl: { variant: X(`ueqesjt_5`) },
                              dFryYZrXT: { variant: X(`ueqesjt_5`) },
                              f_2p_ipRW: { variant: X(`ueqesjt_5`) },
                              hShj36VLp: { style: { width: `100%` }, variant: X(`CsHUqxREX`) },
                              NowfkZHs_: { variant: X(`ueqesjt_5`) },
                              xO__f8Ph9: { variant: X(`ueqesjt_5`) },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                    p(U, {
                      height: (c?.height || 800) - 0,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0,
                      ...ki(
                        {
                          CW3LZyaEl: { height: (c?.height || 1e3) - 0 },
                          dFryYZrXT: { height: (c?.height || 1e3) - 0 },
                          f_2p_ipRW: { height: (c?.height || 1e3) - 0 },
                          hShj36VLp: {
                            height: 800,
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 4096) / 2 + 800 + 24),
                          },
                          NowfkZHs_: { height: (c?.height || 1e3) - 0 },
                          xO__f8Ph9: { height: (c?.height || 1e3) - 0 },
                        },
                        h,
                        x
                      ),
                      children: p(W, {
                        className: `framer-ioarjq-container`,
                        layoutDependency: T,
                        layoutId: `SPFMnsXGi-container`,
                        nodeId: `SPFMnsXGi`,
                        rendersWithMotion: !0,
                        scopeId: `FUwzjulez`,
                        style: { opacity: 0 },
                        variants: {
                          CW3LZyaEl: { opacity: 1 },
                          dFryYZrXT: { opacity: 1 },
                          f_2p_ipRW: { opacity: 1 },
                          GTnPEmSO0: { opacity: 1 },
                          HKiI1F4FX: { opacity: 1 },
                          hShj36VLp: { opacity: 1 },
                          LMziWVagA: { opacity: 1 },
                          NowfkZHs_: { opacity: 1 },
                          RSLcjY9QB: { opacity: 1 },
                        },
                        children: p(Di, {
                          b9rTnhhbU: `Agri-Technology integration`,
                          cv93ribT7: Fi(
                            {
                              pixelHeight: 2004,
                              pixelWidth: 2720,
                              src: `../../assets/images/TsnDBzzzDviYNEHVue597g4xp0.png?width=2720&height=2004`,
                              srcSet: `../../assets/images/TsnDBzzzDviYNEHVue597g4xp0.png?scale-down-to=512&width=2720&height=2004 512w,../../assets/images/TsnDBzzzDviYNEHVue597g4xp0.png 1024w,../../assets/images/TsnDBzzzDviYNEHVue597g4xp0.png?scale-down-to=2048&width=2720&height=2004 2048w,../../assets/images/TsnDBzzzDviYNEHVue597g4xp0.png?width=2720&height=2004 2720w`,
                            },
                            `Service Image`
                          ),
                          d078Pz5W7: Fi(
                            {
                              pixelHeight: 1625,
                              pixelWidth: 2160,
                              src: `../../assets/images/o4O1rkfHcP4NVZLe6RUPh9ju8.png?width=2160&height=1625`,
                              srcSet: `../../assets/images/o4O1rkfHcP4NVZLe6RUPh9ju8.png?scale-down-to=512&width=2160&height=1625 512w,../../assets/images/o4O1rkfHcP4NVZLe6RUPh9ju8.png?scale-down-to=1024&width=2160&height=1625 1024w,../../assets/images/o4O1rkfHcP4NVZLe6RUPh9ju8.png 2048w,../../assets/images/o4O1rkfHcP4NVZLe6RUPh9ju8.png?width=2160&height=1625 2160w`,
                            },
                            `Service Image`
                          ),
                          Ej6dHBo7p: `02/`,
                          height: `100%`,
                          id: `SPFMnsXGi`,
                          layoutId: `SPFMnsXGi`,
                          LlUzoOb3H: `Implementing smart tools and IoT-driven dashboards for real-time farming.`,
                          style: { height: `100%`, width: `100%` },
                          variant: X(`eGBfjKWG_`),
                          width: `100%`,
                          ...ki(
                            {
                              CW3LZyaEl: { variant: X(`ueqesjt_5`) },
                              dFryYZrXT: { variant: X(`ueqesjt_5`) },
                              f_2p_ipRW: { variant: X(`ueqesjt_5`) },
                              hShj36VLp: { style: { width: `100%` }, variant: X(`kkDcHWOSl`) },
                              NowfkZHs_: { variant: X(`ueqesjt_5`) },
                              xO__f8Ph9: { variant: X(`ueqesjt_5`) },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                    p(U, {
                      height: (c?.height || 800) - 0,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0,
                      ...ki(
                        {
                          CW3LZyaEl: { height: (c?.height || 1e3) - 0 },
                          dFryYZrXT: { height: (c?.height || 1e3) - 0 },
                          f_2p_ipRW: { height: (c?.height || 1e3) - 0 },
                          hShj36VLp: {
                            height: 800,
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 4096) / 2 + 1600 + 48),
                          },
                          NowfkZHs_: { height: (c?.height || 1e3) - 0 },
                          xO__f8Ph9: { height: (c?.height || 1e3) - 0 },
                        },
                        h,
                        x
                      ),
                      children: p(W, {
                        className: `framer-1wreqpy-container`,
                        layoutDependency: T,
                        layoutId: `DWmWYsott-container`,
                        nodeId: `DWmWYsott`,
                        rendersWithMotion: !0,
                        scopeId: `FUwzjulez`,
                        style: { opacity: 0 },
                        variants: {
                          CW3LZyaEl: { opacity: 1 },
                          f_2p_ipRW: { opacity: 1 },
                          HKiI1F4FX: { opacity: 1 },
                          hShj36VLp: { opacity: 1 },
                          LMziWVagA: { opacity: 1 },
                          NowfkZHs_: { opacity: 1 },
                          RSLcjY9QB: { opacity: 1 },
                        },
                        children: p(Di, {
                          b9rTnhhbU: `Farm management services`,
                          cv93ribT7: Fi(
                            {
                              pixelHeight: 2004,
                              pixelWidth: 2720,
                              src: `../../assets/images/d8hLyjPBxNCMTBDy3uIC2eWPnSg.png?width=2720&height=2004`,
                              srcSet: `../../assets/images/d8hLyjPBxNCMTBDy3uIC2eWPnSg.png?scale-down-to=512&width=2720&height=2004 512w,../../assets/images/d8hLyjPBxNCMTBDy3uIC2eWPnSg.png 1024w,../../assets/images/d8hLyjPBxNCMTBDy3uIC2eWPnSg.png?scale-down-to=2048&width=2720&height=2004 2048w,../../assets/images/d8hLyjPBxNCMTBDy3uIC2eWPnSg.png?width=2720&height=2004 2720w`,
                            },
                            `Service Image`
                          ),
                          d078Pz5W7: Fi(
                            {
                              pixelHeight: 1625,
                              pixelWidth: 2160,
                              src: `../../assets/images/Yn65LO0TzUXQEx7nFLupeZxycUo.png?width=2160&height=1625`,
                              srcSet: `../../assets/images/Yn65LO0TzUXQEx7nFLupeZxycUo.png?scale-down-to=512&width=2160&height=1625 512w,../../assets/images/Yn65LO0TzUXQEx7nFLupeZxycUo.png?scale-down-to=1024&width=2160&height=1625 1024w,../../assets/images/Yn65LO0TzUXQEx7nFLupeZxycUo.png 2048w,../../assets/images/Yn65LO0TzUXQEx7nFLupeZxycUo.png?width=2160&height=1625 2160w`,
                            },
                            `Service Image`
                          ),
                          Ej6dHBo7p: `03/`,
                          height: `100%`,
                          id: `DWmWYsott`,
                          layoutId: `DWmWYsott`,
                          LlUzoOb3H: `Comprehensive farm planning, monitoring, and performance reporting for maximum efficiency.`,
                          style: { height: `100%`, width: `100%` },
                          variant: X(`xP5tqrzEk`),
                          width: `100%`,
                          ...ki(
                            {
                              CW3LZyaEl: { variant: X(`ueqesjt_5`) },
                              dFryYZrXT: { variant: X(`ueqesjt_5`) },
                              f_2p_ipRW: { variant: X(`ueqesjt_5`) },
                              hShj36VLp: { style: { width: `100%` }, variant: X(`kkDcHWOSl`) },
                              NowfkZHs_: { variant: X(`ueqesjt_5`) },
                              xO__f8Ph9: { variant: X(`ueqesjt_5`) },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                    p(U, {
                      height: (c?.height || 800) - 0,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0,
                      ...ki(
                        {
                          CW3LZyaEl: { height: (c?.height || 1e3) - 0 },
                          dFryYZrXT: { height: (c?.height || 1e3) - 0 },
                          f_2p_ipRW: { height: (c?.height || 1e3) - 0 },
                          hShj36VLp: {
                            height: 800,
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 4096) / 2 + 2400 + 72),
                          },
                          NowfkZHs_: { height: (c?.height || 1e3) - 0 },
                          xO__f8Ph9: { height: (c?.height || 1e3) - 0 },
                        },
                        h,
                        x
                      ),
                      children: p(W, {
                        className: `framer-ldu2cl-container`,
                        layoutDependency: T,
                        layoutId: `nuhrMTfVr-container`,
                        nodeId: `nuhrMTfVr`,
                        rendersWithMotion: !0,
                        scopeId: `FUwzjulez`,
                        style: { opacity: 0 },
                        variants: {
                          CW3LZyaEl: { opacity: 1 },
                          f_2p_ipRW: { opacity: 1 },
                          HKiI1F4FX: { opacity: 1 },
                          hShj36VLp: { opacity: 1 },
                          LMziWVagA: { opacity: 1 },
                        },
                        children: p(Di, {
                          b9rTnhhbU: `Supply chain & market access`,
                          cv93ribT7: Fi(
                            {
                              pixelHeight: 2004,
                              pixelWidth: 2720,
                              src: `../../assets/images/SNtFJxxzgJop82HUzYYKfGTeE.png?width=2720&height=2004`,
                              srcSet: `../../assets/images/SNtFJxxzgJop82HUzYYKfGTeE.png?scale-down-to=512&width=2720&height=2004 512w,../../assets/images/SNtFJxxzgJop82HUzYYKfGTeE.png 1024w,../../assets/images/SNtFJxxzgJop82HUzYYKfGTeE.png?scale-down-to=2048&width=2720&height=2004 2048w,../../assets/images/SNtFJxxzgJop82HUzYYKfGTeE.png?width=2720&height=2004 2720w`,
                            },
                            `Service Image`
                          ),
                          d078Pz5W7: Fi(
                            {
                              pixelHeight: 1625,
                              pixelWidth: 2160,
                              src: `../../assets/images/kU1LyGOp2lq412yFefbraS0A.png?width=2160&height=1625`,
                              srcSet: `../../assets/images/kU1LyGOp2lq412yFefbraS0A.png?scale-down-to=512&width=2160&height=1625 512w,../../assets/images/kU1LyGOp2lq412yFefbraS0A.png?scale-down-to=1024&width=2160&height=1625 1024w,../../assets/images/kU1LyGOp2lq412yFefbraS0A.png 2048w,../../assets/images/kU1LyGOp2lq412yFefbraS0A.png?width=2160&height=1625 2160w`,
                            },
                            `Service Image`
                          ),
                          Ej6dHBo7p: `04/`,
                          height: `100%`,
                          id: `nuhrMTfVr`,
                          layoutId: `nuhrMTfVr`,
                          LlUzoOb3H: `Helping farmers connect with buyers, suppliers, and global agriculture markets seamlessly.`,
                          style: { height: `100%`, width: `100%` },
                          variant: X(`xP5tqrzEk`),
                          width: `100%`,
                          ...ki(
                            {
                              CW3LZyaEl: { variant: X(`ueqesjt_5`) },
                              dFryYZrXT: { variant: X(`ueqesjt_5`) },
                              f_2p_ipRW: { variant: X(`ueqesjt_5`) },
                              hShj36VLp: { style: { width: `100%` }, variant: X(`kkDcHWOSl`) },
                              NowfkZHs_: { variant: X(`ueqesjt_5`) },
                              xO__f8Ph9: { variant: X(`ueqesjt_5`) },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                    p(U, {
                      height: (c?.height || 800) - 0,
                      width: c?.width || `100vw`,
                      y: (c?.y || 0) + 0,
                      ...ki(
                        {
                          CW3LZyaEl: { height: (c?.height || 1e3) - 0 },
                          dFryYZrXT: { height: (c?.height || 1e3) - 0 },
                          f_2p_ipRW: { height: (c?.height || 1e3) - 0 },
                          hShj36VLp: {
                            height: 800,
                            y: (c?.y || 0) + 0 + (((c?.height || 200) - 0 - 4096) / 2 + 3200 + 96),
                          },
                          NowfkZHs_: { height: (c?.height || 1e3) - 0 },
                          xO__f8Ph9: { height: (c?.height || 1e3) - 0 },
                        },
                        h,
                        x
                      ),
                      children: p(W, {
                        className: `framer-13ztw0m-container`,
                        layoutDependency: T,
                        layoutId: `bHodi_boH-container`,
                        nodeId: `bHodi_boH`,
                        rendersWithMotion: !0,
                        scopeId: `FUwzjulez`,
                        style: { opacity: 0 },
                        variants: {
                          CW3LZyaEl: { opacity: 1 },
                          hShj36VLp: { opacity: 1 },
                          LMziWVagA: { opacity: 1 },
                        },
                        children: p(Di, {
                          b9rTnhhbU: `Training & support`,
                          cv93ribT7: Fi(
                            {
                              pixelHeight: 1503,
                              pixelWidth: 2040,
                              src: `../../assets/images/Rvme5hRNyk19wmGXNRlgBXRlcg.png?width=2040&height=1503`,
                              srcSet: `../../assets/images/Rvme5hRNyk19wmGXNRlgBXRlcg.png?scale-down-to=512&width=2040&height=1503 512w,../../assets/images/Rvme5hRNyk19wmGXNRlgBXRlcg.png 1024w,../../assets/images/Rvme5hRNyk19wmGXNRlgBXRlcg.png?width=2040&height=1503 2040w`,
                            },
                            `Service Image`
                          ),
                          d078Pz5W7: Fi(
                            {
                              pixelHeight: 1083,
                              pixelWidth: 1440,
                              src: `../../assets/images/znwoT9yqd0qIIlVsLEnXZRi3zU.png`,
                              srcSet: `../../assets/images/znwoT9yqd0qIIlVsLEnXZRi3zU.png?scale-down-to=512&width=1440&height=1083 512w,../../assets/images/znwoT9yqd0qIIlVsLEnXZRi3zU.png?scale-down-to=1024&width=1440&height=1083 1024w,../../assets/images/znwoT9yqd0qIIlVsLEnXZRi3zU.png 1440w`,
                            },
                            `Service Image`
                          ),
                          Ej6dHBo7p: `05/`,
                          height: `100%`,
                          id: `bHodi_boH`,
                          layoutId: `bHodi_boH`,
                          LlUzoOb3H: `Farmer education programs, workshops, and 24/7 technical support for continuous growth.`,
                          style: { height: `100%`, width: `100%` },
                          variant: X(`xP5tqrzEk`),
                          width: `100%`,
                          ...ki(
                            {
                              CW3LZyaEl: { variant: X(`ueqesjt_5`) },
                              dFryYZrXT: { variant: X(`ueqesjt_5`) },
                              f_2p_ipRW: { variant: X(`ueqesjt_5`) },
                              hShj36VLp: { style: { width: `100%` }, variant: X(`kkDcHWOSl`) },
                              NowfkZHs_: { variant: X(`ueqesjt_5`) },
                              xO__f8Ph9: { variant: X(`ueqesjt_5`) },
                            },
                            h,
                            x
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Edu6m.framer-1rgoq7p, .framer-Edu6m .framer-1rgoq7p { display: block; }`,
          `.framer-Edu6m.framer-w70bvi { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 800px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-Edu6m .framer-bbevpn-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-Edu6m .framer-ioarjq-container, .framer-Edu6m .framer-1wreqpy-container, .framer-Edu6m .framer-ldu2cl-container, .framer-Edu6m .framer-13ztw0m-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-Edu6m.framer-v-1wzezw0.framer-w70bvi, .framer-Edu6m.framer-v-11xffqj.framer-w70bvi, .framer-Edu6m.framer-v-1aqydv7.framer-w70bvi, .framer-Edu6m.framer-v-1pwgvty.framer-w70bvi, .framer-Edu6m.framer-v-1xmeo9m.framer-w70bvi { height: 1000px; width: 768px; }`,
          `.framer-Edu6m.framer-v-1r7r4jk.framer-w70bvi { height: min-content; width: 350px; }`,
          `.framer-Edu6m.framer-v-1r7r4jk .framer-bbevpn-container { flex: none; height: auto; }`,
          `.framer-Edu6m.framer-v-1r7r4jk .framer-ioarjq-container, .framer-Edu6m.framer-v-1r7r4jk .framer-1wreqpy-container, .framer-Edu6m.framer-v-1r7r4jk .framer-ldu2cl-container, .framer-Edu6m.framer-v-1r7r4jk .framer-13ztw0m-container { bottom: unset; height: auto; left: unset; position: relative; right: unset; top: unset; width: 100%; }`,
        ],
        `framer-Edu6m`
      )),
      (Vi.displayName = `Service Scroll`),
      (Vi.defaultProps = { height: 800, width: 1200 }),
      M(Vi, {
        variant: {
          options: [
            `OWT1cl9fN`,
            `GTnPEmSO0`,
            `RSLcjY9QB`,
            `HKiI1F4FX`,
            `LMziWVagA`,
            `xO__f8Ph9`,
            `dFryYZrXT`,
            `NowfkZHs_`,
            `f_2p_ipRW`,
            `CW3LZyaEl`,
            `hShj36VLp`,
          ],
          optionTitles: [
            `Desktop 01`,
            `Desktop 02`,
            `Desktop 03`,
            `Desktop 04`,
            `Desktop 05`,
            `Tablet 01`,
            `Tablet 02`,
            `Tablet 03`,
            `Tablet 04`,
            `Tablet 05`,
            `Phone `,
          ],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      R(Vi, [{ explicitInter: !0, fonts: [] }, ...Ai], { supportsExplicitInterCodegen: !0 }),
      (Vi.loader = { load: (e, t) => (t.locale, Promise.allSettled([I(Di, {}, t)])) }));
  }),
  Ui,
  Wi,
  Gi,
  Ki,
  qi = e(() => {
    (z(),
      ie.loadFonts([
        `BI;BDO Grotesk/variable/v0`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
      ]),
      (Ui = [{ defaultValue: 400, maxValue: 900, minValue: 300, name: `Weight`, tag: `wght` }]),
      (Wi = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `BDO Grotesk Variable`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `BDO Grotesk`,
              url: `../../assets/fonts/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2`,
              variationAxes: Ui,
              weight: `1000`,
            },
          ],
        },
      ]),
      (Gi = [
        `.framer-I1FvM .framer-styles-preset-8lmqzt:not(.rich-text-wrapper), .framer-I1FvM .framer-styles-preset-8lmqzt.rich-text-wrapper h3 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 768px) { .framer-I1FvM .framer-styles-preset-8lmqzt:not(.rich-text-wrapper), .framer-I1FvM .framer-styles-preset-8lmqzt.rich-text-wrapper h3 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 34px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 0px) { .framer-I1FvM .framer-styles-preset-8lmqzt:not(.rich-text-wrapper), .framer-I1FvM .framer-styles-preset-8lmqzt.rich-text-wrapper h3 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ki = `framer-I1FvM`));
  });
function Ji(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Oe(),
      qi(),
      fr(),
      (Yi = [`zWMGw8kbp`, `a4cE_E6Ez`]),
      (Xi = `framer-rHNAI`),
      (Zi = { a4cE_E6Ez: `framer-v-107luus`, zWMGw8kbp: `framer-v-sole27` }),
      (Qi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($i = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (ea = { "Desktop ": `zWMGw8kbp`, Phone: `a4cE_E6Ez` }),
      (ta = C.create(s)),
      (na = ({ height: e, id: t, info: n, text: r, title: i, width: a, ...o }) => ({
        ...o,
        nmSVSWDtk: i ?? o.nmSVSWDtk ?? `Step 01`,
        qteKYjZNQ:
          n ?? o.qteKYjZNQ ?? `For access sync Healix with your health wearables for updates.`,
        T3eCxJGHO: r ?? o.T3eCxJGHO ?? `Download the app andconnect your devices`,
        variant: ea[o.variant] ?? o.variant ?? `zWMGw8kbp`,
      })),
      (ra = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ia = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V();
          ae();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              nmSVSWDtk: m,
              T3eCxJGHO: h,
              qteKYjZNQ: g,
              ..._
            } = na(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: w,
              setGestureState: T,
              setVariant: ne,
              variants: E,
            } = le({
              cycleOrder: Yi,
              defaultVariant: `zWMGw8kbp`,
              ref: i,
              variant: f,
              variantClassNames: Zi,
            }),
            D = ra(e, E),
            O = N(Xi, Ki, dr, Ae);
          return p(A, {
            id: d ?? a,
            children: p(ta, {
              animate: E,
              initial: !1,
              children: p($i, {
                value: Qi,
                children: v(C.div, {
                  ..._,
                  ...ee,
                  className: N(O, `framer-sole27`, u, x),
                  "data-framer-name": `Desktop `,
                  layoutDependency: D,
                  layoutId: `zWMGw8kbp`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...l,
                  },
                  variants: {
                    a4cE_E6Ez: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                  },
                  ...Ji({ a4cE_E6Ez: { "data-framer-name": `Phone` } }, y, te),
                  children: [
                    p(G, {
                      __fromCanvasComponent: !0,
                      children: p(s, {
                        children: p(C.h3, {
                          className: `framer-styles-preset-8lmqzt`,
                          "data-styles-preset": `LpjKQTqsk`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                          },
                          children: `Step 01`,
                        }),
                      }),
                      className: `framer-jm5fpb`,
                      "data-framer-name": `Step 01`,
                      fonts: [`Inter`],
                      layoutDependency: D,
                      layoutId: `tE2Z4RoAR`,
                      style: {
                        "--extracted-a0htzi": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    p(C.div, {
                      className: `framer-wsjqbg`,
                      "data-framer-name": `Text Wrapper`,
                      layoutDependency: D,
                      layoutId: `XRyjgyzJy`,
                      style: {
                        backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      children: v(C.div, {
                        className: `framer-17mfe17`,
                        "data-framer-name": `Text`,
                        layoutDependency: D,
                        layoutId: `u16LZRTL_`,
                        children: [
                          p(G, {
                            __fromCanvasComponent: !0,
                            children: v(s, {
                              children: [
                                p(C.h5, {
                                  className: `framer-styles-preset-1bz0sqk`,
                                  "data-styles-preset": `zBeZwmrea`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `Download the app and`,
                                }),
                                p(C.h5, {
                                  className: `framer-styles-preset-1bz0sqk`,
                                  "data-styles-preset": `zBeZwmrea`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1qz5ssa, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                                  },
                                  children: `connect your devices`,
                                }),
                              ],
                            }),
                            className: `framer-13bn9vj`,
                            "data-framer-name": `Download the app and connect your devices`,
                            fonts: [`Inter`],
                            layoutDependency: D,
                            layoutId: `q2OPj8KT6`,
                            style: {
                              "--extracted-1lwpl3i": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                              "--extracted-1qz5ssa": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: h,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          p(G, {
                            __fromCanvasComponent: !0,
                            children: p(s, {
                              children: p(C.p, {
                                className: `framer-styles-preset-1h0pk3x`,
                                "data-styles-preset": `c84NHGXvh`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                                },
                                children: `For access sync Healix with your health wearables for updates.`,
                              }),
                            }),
                            className: `framer-1cdkywo`,
                            "data-framer-name": `For access sync Healix with your health wearables for updates.`,
                            fonts: [`Inter`],
                            layoutDependency: D,
                            layoutId: `MFm8VcOKq`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-rHNAI.framer-ub757j, .framer-rHNAI .framer-ub757j { display: block; }`,
          `.framer-rHNAI.framer-sole27 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 179px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 424px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rHNAI .framer-jm5fpb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-rHNAI .framer-wsjqbg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rHNAI .framer-17mfe17 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-rHNAI .framer-13bn9vj, .framer-rHNAI .framer-1cdkywo { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-rHNAI.framer-v-107luus.framer-sole27 { gap: 100px; padding: 20px; }`,
          ...Gi,
          ...ur,
          ...De,
        ],
        `framer-rHNAI`
      )),
      (ia.displayName = `How It Work Card`),
      (ia.defaultProps = { height: 464, width: 424 }),
      M(ia, {
        variant: {
          options: [`zWMGw8kbp`, `a4cE_E6Ez`],
          optionTitles: [`Desktop `, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        nmSVSWDtk: { defaultValue: `Step 01`, displayTextArea: !1, title: `Title`, type: H.String },
        onnmSVSWDtkChange: { changes: `nmSVSWDtk`, type: H.ChangeHandler },
        T3eCxJGHO: {
          defaultValue: `Download the app andconnect your devices`,
          displayTextArea: !1,
          title: `Text`,
          type: H.String,
        },
        onT3eCxJGHOChange: { changes: `T3eCxJGHO`, type: H.ChangeHandler },
        qteKYjZNQ: {
          defaultValue: `For access sync Healix with your health wearables for updates.`,
          displayTextArea: !1,
          title: `Info`,
          type: H.String,
        },
        onqteKYjZNQChange: { changes: `qteKYjZNQ`, type: H.ChangeHandler },
      }),
      R(
        ia,
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
          ...P(Wi),
          ...P(lr),
          ...P(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  oa,
  sa,
  ca,
  la,
  ua = e(() => {
    (y(),
      z(),
      n(),
      (oa = `var(--framer-icon-mask)`),
      (sa = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(C.img, { ...a, layoutId: r, ref: t }) : p(`img`, { ...a, ref: t });
      })),
      (ca = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nGcTmOiOr: e ?? i.nGcTmOiOr ?? `rgb(4, 48, 59)`,
      })),
      (la = me(
        m(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, nGcTmOiOr: o, ...s } = ca(e);
          return p(sa, {
            ...s,
            alt: ``,
            className: N(`framer-QxV2n`, r),
            layoutId: i,
            ref: t,
            src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg"><g d="M 0 14 L 0 0 L 14 0 L 14 14 Z M 6.908 5.14 C 7.04 5.192 7.169 5.066 7.126 4.931 C 6.826 4.008 5.741 3.663 4.733 4.482 C 4.202 4.913 4.003 5.005 3.998 5.007 C 4.347 5.357 4.747 6.53 5.619 6.66 C 6.58 6.834 7.43 5.889 6.734 5.457 C 6.277 5.172 5.738 5.007 5.161 5.007 C 5.766 4.871 6.37 4.929 6.908 5.14 Z M 11.258 4.482 C 9.517 3.068 8.407 5.298 9.097 5.077 C 9.587 4.92 10.123 4.886 10.66 5.007 C 9.75 5.007 8.91 5.424 8.35 6.104 C 8.396 5.036 8.466 4.368 8.547 3.871 C 9.012 3.855 9.632 3.479 9.972 2.822 C 10.559 1.771 10.287 0.694 10.199 0.015 C 9.741 0.461 7.737 -0.062 6.943 1.299 C 6.592 1.9 6.694 2.632 7.063 3.167 C 7.18 3.337 7.459 3.255 7.467 3.05 C 7.502 2.155 7.947 1.479 8.777 1.105 C 8.405 1.587 8.16 2.128 8.034 2.686 C 7.838 3.556 7.632 4.127 7.557 6.9 C 7.549 7.181 7.777 7.414 8.059 7.411 C 8.262 7.408 8.437 7.279 8.515 7.091 C 8.634 6.805 8.828 6.509 9.144 6.238 C 9.443 6.569 9.9 6.746 10.372 6.66 C 11.24 6.531 11.645 5.355 11.993 5.007 C 11.988 5.005 11.788 4.913 11.258 4.482 Z M 13.817 7.938 C 13.273 7.569 12.68 7.832 12.409 7.989 L 8.995 10.487 L 6.996 10.488 L 6.496 9.988 L 8.332 9.988 C 8.884 9.988 9.502 9.628 9.502 8.988 C 9.502 8.309 8.884 7.989 8.332 7.989 L 7.644 7.989 C 7.133 7.989 6.536 8.034 6.115 7.809 C 5.715 7.605 5.254 7.49 4.762 7.49 C 3.937 7.49 3.197 7.819 2.691 8.338 L 0 10.987 L 2.998 13.985 L 3.998 12.486 L 8.72 12.486 C 9.224 12.486 9.71 12.301 10.087 11.967 L 13.851 8.623 C 14.061 8.437 14.049 8.095 13.817 7.938 Z" fill="transparent" height="14px" id="Mo0bsYpeq" transform="translate(0 1)" width="14px"><path d="M 0 14 L 0 0 L 14 0 L 14 14 Z" fill="transparent" height="14px" id="wQbXEiqVn" width="14px"/><path d="M 2.911 1.12 C 3.042 1.172 3.172 1.045 3.128 0.911 C 2.828 -0.013 1.743 -0.357 0.735 0.462 C 0.204 0.893 0.005 0.985 0 0.987 C 0.35 1.337 0.749 2.51 1.621 2.64 C 2.582 2.814 3.432 1.869 2.736 1.437 C 2.279 1.152 1.74 0.987 1.163 0.987 C 1.768 0.851 2.373 0.909 2.911 1.12 Z" fill="rgb(0, 0, 0)" height="2.661004316257354px" id="CUQ1TodG6" transform="translate(3.998 4.02)" width="3.136606837405282px"/><path d="M 4.531 4.468 C 2.79 3.054 1.68 5.284 2.37 5.063 C 2.86 4.906 3.396 4.871 3.934 4.993 C 3.023 4.993 2.184 5.41 1.624 6.089 C 1.67 5.022 1.739 4.353 1.82 3.856 C 2.285 3.84 2.905 3.465 3.246 2.807 C 3.833 1.757 3.56 0.68 3.473 0 C 3.014 0.447 1.011 -0.077 0.216 1.284 C -0.135 1.886 -0.033 2.617 0.336 3.153 C 0.453 3.322 0.733 3.241 0.741 3.035 C 0.775 2.14 1.221 1.464 2.051 1.09 C 1.678 1.573 1.434 2.113 1.307 2.672 C 1.111 3.542 0.906 4.112 0.83 6.886 C 0.823 7.167 1.051 7.4 1.332 7.396 C 1.536 7.394 1.71 7.264 1.788 7.076 C 1.907 6.79 2.101 6.494 2.417 6.223 C 2.717 6.555 3.173 6.731 3.645 6.645 C 4.513 6.516 4.918 5.34 5.266 4.992 C 5.261 4.99 5.062 4.899 4.531 4.468 Z" fill="rgb(0, 0, 0)" height="7.396140507300782px" id="Z_cxHFlDZ" transform="translate(6.727 0.015)" width="5.266224783637511px"/><path d="M 13.817 0.448 C 13.273 0.079 12.68 0.342 12.409 0.499 L 8.995 2.998 L 6.996 2.998 L 6.496 2.498 L 8.332 2.498 C 8.884 2.498 9.502 2.139 9.502 1.499 C 9.502 0.819 8.884 0.499 8.332 0.499 L 7.644 0.499 C 7.133 0.499 6.536 0.545 6.115 0.319 C 5.715 0.116 5.254 0 4.762 0 C 3.937 0 3.197 0.329 2.691 0.848 L 0 3.498 L 2.998 6.496 L 3.998 4.997 L 8.72 4.997 C 9.224 4.997 9.71 4.812 10.087 4.477 L 13.851 1.133 C 14.061 0.947 14.049 0.606 13.817 0.448 Z" fill="rgb(0, 0, 0)" height="6.495750000000001px" id="XZUr1YvwQ" transform="translate(0 7.489)" width="13.999980131369473px"/></g></svg>`,
            style: { ...n },
          });
        }),
        [
          `.framer-QxV2n { -webkit-mask: ${oa}; aspect-ratio: 0.9375; display: block; mask: ${oa}; user-select: none; width: 15px; }`,
        ],
        `framer-QxV2n`
      )),
      (la.displayName = `fi_620798`),
      M(la, {
        nGcTmOiOr: { defaultValue: `rgb(4, 48, 59)`, hidden: !0, title: `Color`, type: H.Color },
      }));
  });
function da(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Oe(),
      Xe(),
      ua(),
      (fa = [`vEgDx1BpO`, `f08JDRc20`]),
      (pa = `framer-MrGFQ`),
      (ma = { f08JDRc20: `framer-v-peag8g`, vEgDx1BpO: `framer-v-7odvdt` }),
      (ha = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ga = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (_a = { "Desktop 01": `vEgDx1BpO`, Phone: `f08JDRc20` }),
      (va = C.create(s)),
      (ya = ({ amount: e, height: t, icon: n, id: r, text: i, width: a, ...o }) => ({
        ...o,
        dhRQSIjAJ: n ?? o.dhRQSIjAJ ?? la,
        gEXbSjDYL:
          i ??
          o.gEXbSjDYL ??
          `Our end-to-end agriculture solutions empower farmers and agribusinesses with integrated technology`,
        KNjv53KMN: e ?? o.KNjv53KMN ?? `60%`,
        variant: _a[o.variant] ?? o.variant ?? `vEgDx1BpO`,
      })),
      (ba = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xa = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V();
          ae();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              KNjv53KMN: m,
              gEXbSjDYL: h,
              dhRQSIjAJ: g,
              ..._
            } = ya(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: w,
              setGestureState: T,
              setVariant: ne,
              variants: E,
            } = le({
              cycleOrder: fa,
              defaultVariant: `vEgDx1BpO`,
              ref: i,
              variant: f,
              variantClassNames: ma,
            }),
            D = ba(e, E),
            O = N(pa, Ze, Ae);
          return p(A, {
            id: d ?? a,
            children: p(va, {
              animate: E,
              initial: !1,
              children: p(ga, {
                value: ha,
                children: v(C.div, {
                  ..._,
                  ...ee,
                  className: N(O, `framer-7odvdt`, u, x),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: D,
                  layoutId: `vEgDx1BpO`,
                  ref: i,
                  style: { ...l },
                  ...da({ f08JDRc20: { "data-framer-name": `Phone` } }, y, te),
                  children: [
                    p(C.div, {
                      className: `framer-1kmve9w`,
                      "data-framer-name": `Icon Wrapper`,
                      layoutDependency: D,
                      layoutId: `thTIA9RJ8`,
                      style: {
                        backgroundColor: `var(--token-61371afa-a89f-4c71-a414-1fc9a8f2c7fb, rgb(231, 243, 82))`,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                      },
                      children: p(Ce, {
                        animated: !0,
                        className: `framer-1sa2wad`,
                        Component: g,
                        "data-framer-name": `Icon`,
                        layoutDependency: D,
                        layoutId: `mEONOO3V5`,
                        style: {
                          "--1gybajp": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                        },
                      }),
                    }),
                    v(C.div, {
                      className: `framer-4sg985`,
                      "data-framer-name": `Text & Amount`,
                      layoutDependency: D,
                      layoutId: `OkJrRgxE3`,
                      children: [
                        p(G, {
                          __fromCanvasComponent: !0,
                          children: p(s, {
                            children: p(C.h4, {
                              className: `framer-styles-preset-gc3dxx`,
                              "data-styles-preset": `MXFp7sUVi`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1eung3n, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                              },
                              children: `60%`,
                            }),
                          }),
                          className: `framer-fzlj04`,
                          "data-framer-name": `60%`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `ItB7ReEdf`,
                          style: {
                            "--extracted-1eung3n": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: m,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        p(G, {
                          __fromCanvasComponent: !0,
                          children: p(s, {
                            children: p(C.p, {
                              className: `framer-styles-preset-1h0pk3x`,
                              "data-styles-preset": `c84NHGXvh`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                              },
                              children: `Our end-to-end agriculture solutions empower farmers and agribusinesses with integrated technology`,
                            }),
                          }),
                          className: `framer-12r2oxz`,
                          "data-framer-name": `Our end-to-end agriculture solutions empower farmers and agribusinesses with integrated technology`,
                          fonts: [`Inter`],
                          layoutDependency: D,
                          layoutId: `v731Mf5P9`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-MrGFQ.framer-bu0oav, .framer-MrGFQ .framer-bu0oav { display: block; }`,
          `.framer-MrGFQ.framer-7odvdt { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 284px; }`,
          `.framer-MrGFQ .framer-1kmve9w { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 60px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 60px; }`,
          `.framer-MrGFQ .framer-1sa2wad { flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 28px; }`,
          `.framer-MrGFQ .framer-4sg985 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-MrGFQ .framer-fzlj04 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-MrGFQ .framer-12r2oxz { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-MrGFQ.framer-v-peag8g .framer-1kmve9w { height: var(--framer-aspect-ratio-supported, 40px); width: 40px; }`,
          `.framer-MrGFQ.framer-v-peag8g .framer-1sa2wad { height: var(--framer-aspect-ratio-supported, 22px); width: 20px; }`,
          `.framer-MrGFQ.framer-v-peag8g .framer-4sg985 { gap: 16px; }`,
          ...Je,
          ...De,
        ],
        `framer-MrGFQ`
      )),
      (xa.displayName = `Stat Card`),
      (xa.defaultProps = { height: 241, width: 284 }),
      M(xa, {
        variant: {
          options: [`vEgDx1BpO`, `f08JDRc20`],
          optionTitles: [`Desktop 01`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        KNjv53KMN: { defaultValue: `60%`, displayTextArea: !1, title: `Amount`, type: H.String },
        onKNjv53KMNChange: { changes: `KNjv53KMN`, type: H.ChangeHandler },
        gEXbSjDYL: {
          defaultValue: `Our end-to-end agriculture solutions empower farmers and agribusinesses with integrated technology`,
          displayTextArea: !1,
          title: `Text`,
          type: H.String,
        },
        ongEXbSjDYLChange: { changes: `gEXbSjDYL`, type: H.ChangeHandler },
        dhRQSIjAJ: {
          defaultValue: {
            identifier: `local-module:vector/GsvtYUA6g:default`,
            moduleId: `4DsqFJhFHjz2tCBY7Ubz`,
          },
          setModuleId: `sBp7K40Kk4I8mjw9eUdA`,
          title: `Icon`,
          type: H.VectorSetItem,
        },
      }),
      R(
        xa,
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
          ...P(Ke),
          ...P(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ca(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Oe(),
      qi(),
      (wa = [`u438oeoTw`, `kTEQkPK6D`]),
      (Ta = `framer-gcWdR`),
      (Ea = { kTEQkPK6D: `framer-v-1kwhiu8`, u438oeoTw: `framer-v-1mjchgn` }),
      (Da = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Oa = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (ka = { "Desktop 01": `u438oeoTw`, Phone: `kTEQkPK6D` }),
      (Aa = C.create(s)),
      (ja = ({ amount: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        Hlleve39M: e ?? a.Hlleve39M ?? `120K+`,
        py0jt7jZn: r ?? a.py0jt7jZn ?? `Farmers empowered`,
        variant: ka[a.variant] ?? a.variant ?? `u438oeoTw`,
      })),
      (Ma = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Na = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V();
          ae();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              Hlleve39M: m,
              py0jt7jZn: h,
              ...g
            } = ja(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: w,
              setVariant: T,
              variants: ne,
            } = le({
              cycleOrder: wa,
              defaultVariant: `u438oeoTw`,
              ref: i,
              variant: f,
              variantClassNames: Ea,
            }),
            E = Ma(e, ne),
            D = N(Ta, Ki, Ae);
          return p(A, {
            id: d ?? a,
            children: p(Aa, {
              animate: ne,
              initial: !1,
              children: p(Oa, {
                value: Da,
                children: v(C.div, {
                  ...g,
                  ...S,
                  className: N(D, `framer-1mjchgn`, u, y),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: E,
                  layoutId: `u438oeoTw`,
                  ref: i,
                  style: { ...l },
                  ...Ca({ kTEQkPK6D: { "data-framer-name": `Phone` } }, _, ee),
                  children: [
                    p(G, {
                      __fromCanvasComponent: !0,
                      children: p(s, {
                        children: p(C.h3, {
                          className: `framer-styles-preset-8lmqzt`,
                          "data-styles-preset": `LpjKQTqsk`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                          },
                          children: `120K+`,
                        }),
                      }),
                      className: `framer-kqmk18`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `hAQayAGoB`,
                      style: {
                        "--extracted-a0htzi": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    p(G, {
                      __fromCanvasComponent: !0,
                      children: p(s, {
                        children: p(C.p, {
                          className: `framer-styles-preset-1h0pk3x`,
                          "data-styles-preset": `c84NHGXvh`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                          },
                          children: `Farmers empowered`,
                        }),
                      }),
                      className: `framer-zug1bt`,
                      fonts: [`Inter`],
                      layoutDependency: E,
                      layoutId: `lp1r4hFF9`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: h,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gcWdR.framer-xgnjcn, .framer-gcWdR .framer-xgnjcn { display: block; }`,
          `.framer-gcWdR.framer-1mjchgn { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-gcWdR .framer-kqmk18, .framer-gcWdR .framer-zug1bt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Gi,
          ...De,
        ],
        `framer-gcWdR`
      )),
      (Na.displayName = `Stat`),
      (Na.defaultProps = { height: 84, width: 157 }),
      M(Na, {
        variant: {
          options: [`u438oeoTw`, `kTEQkPK6D`],
          optionTitles: [`Desktop 01`, `Phone`],
          title: `Variant`,
          type: H.Enum,
        },
        Hlleve39M: { defaultValue: `120K+`, displayTextArea: !1, title: `Amount`, type: H.String },
        onHlleve39MChange: { changes: `Hlleve39M`, type: H.ChangeHandler },
        py0jt7jZn: {
          defaultValue: `Farmers empowered`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        onpy0jt7jZnChange: { changes: `py0jt7jZn`, type: H.ChangeHandler },
      }),
      R(
        Na,
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
          ...P(Wi),
          ...P(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Oe(),
      fr(),
      (Fa = ue(C.div)),
      (Ia = `framer-qe3pF`),
      (La = { rQ9GR_Wu5: `framer-v-1s4ajjo` }),
      (Ra = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (za = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ba = {
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
      (Va = { damping: 55, delay: 0.1, mass: 1, stiffness: 350, type: `spring` }),
      (Ha = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Va,
        x: 0,
        y: 40,
      }),
      (Ua = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (Wa = C.create(s)),
      (Ga = ({ designation: e, height: t, id: n, image: r, name1: i, width: a, ...o }) => ({
        ...o,
        Jv8gifP_P: r ??
          o.Jv8gifP_P ?? {
            alt: ``,
            pixelHeight: 2128,
            pixelWidth: 1696,
            src: `../../assets/images/tUo1rL436kuG7vtydKbnapPdR4A.png?width=1696&height=2128`,
            srcSet: `../../assets/images/tUo1rL436kuG7vtydKbnapPdR4A.png 816w,../../assets/images/tUo1rL436kuG7vtydKbnapPdR4A.png?scale-down-to=2048&width=1696&height=2128 1632w,../../assets/images/tUo1rL436kuG7vtydKbnapPdR4A.png?width=1696&height=2128 1696w`,
          },
        VKqTXjKvs: e ?? o.VKqTXjKvs ?? `Chief Executive Officer (CEO)`,
        ZDumY1Cpk: i ?? o.ZDumY1Cpk ?? `Dr. Ralph Edwards`,
      })),
      (Ka = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (qa = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V(),
            l = ae(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: m,
              Jv8gifP_P: h,
              ZDumY1Cpk: g,
              VKqTXjKvs: _,
              ...y
            } = Ga(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: w,
              isLoading: T,
              setGestureState: ne,
              setVariant: E,
              variants: D,
            } = le({ defaultVariant: `rQ9GR_Wu5`, ref: i, variant: m, variantClassNames: La }),
            O = Ka(e, D),
            k = N(Ia, dr, Ae);
          return p(A, {
            id: f ?? a,
            children: p(Wa, {
              animate: D,
              initial: !1,
              children: p(Ua, {
                value: za,
                children: p(pe, {
                  ...y,
                  ...te,
                  background: {
                    alt: ``,
                    fit: `stretch`,
                    loading: F(l?.y || 0),
                    pixelHeight: 2128,
                    pixelWidth: 1696,
                    sizes: l?.width || `100vw`,
                    ...Ra(h),
                    positionX: `center`,
                    positionY: `center`,
                  },
                  className: N(k, `framer-1s4ajjo`, d, S),
                  "data-framer-name": `Desktop 01`,
                  fitImageDimension: `height`,
                  layoutDependency: O,
                  layoutId: `rQ9GR_Wu5`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  children: p(Fa, {
                    __framer__animate: { transition: Va },
                    __framer__animateOnce: !0,
                    __framer__enter: Ba,
                    __framer__exit: Ha,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0.5,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `framer-ibmv2j`,
                    "data-framer-name": `Title Card`,
                    layoutDependency: O,
                    layoutId: `HcizwNRwA`,
                    style: {
                      backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                    children: v(C.div, {
                      className: `framer-19693ar`,
                      "data-framer-name": `Card Title`,
                      layoutDependency: O,
                      layoutId: `Gro0z_nPI`,
                      children: [
                        p(G, {
                          __fromCanvasComponent: !0,
                          children: p(s, {
                            children: p(C.h5, {
                              className: `framer-styles-preset-1bz0sqk`,
                              "data-styles-preset": `zBeZwmrea`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                              },
                              children: `Dr. Ralph Edwards`,
                            }),
                          }),
                          className: `framer-1nxwb3e`,
                          "data-framer-name": `Dr. Ralph Edwards`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `KIIEn7ogj`,
                          style: {
                            "--extracted-1lwpl3i": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        p(G, {
                          __fromCanvasComponent: !0,
                          children: p(s, {
                            children: p(C.p, {
                              className: `framer-styles-preset-1h0pk3x`,
                              "data-styles-preset": `c84NHGXvh`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101)))`,
                              },
                              children: `Chief Executive Officer (CEO)`,
                            }),
                          }),
                          className: `framer-1yxpw2k`,
                          "data-framer-name": `Chief Executive Officer (CEO)`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `f5i9lmKFH`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                            "--framer-paragraph-spacing": `0px`,
                            opacity: 0.8,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qe3pF.framer-1kbowq6, .framer-qe3pF .framer-1kbowq6 { display: block; }`,
          `.framer-qe3pF.framer-1s4ajjo { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: flex-end; overflow: visible; padding: 14px; position: relative; width: 424px; }`,
          `.framer-qe3pF .framer-ibmv2j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 100%; }`,
          `.framer-qe3pF .framer-19693ar { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-qe3pF .framer-1nxwb3e, .framer-qe3pF .framer-1yxpw2k { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          ...ur,
          ...De,
        ],
        `framer-qe3pF`
      )),
      (qa.displayName = `Team Card`),
      (qa.defaultProps = { height: 532, width: 424 }),
      M(qa, {
        Jv8gifP_P: {
          __defaultAssetReference: `data:framer/asset-reference,tUo1rL436kuG7vtydKbnapPdR4A.png?width=1696&height=2128`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,tUo1rL436kuG7vtydKbnapPdR4A.png?width=1696&height=2128`,
          },
          title: `Image`,
          type: H.ResponsiveImage,
        },
        ZDumY1Cpk: {
          defaultValue: `Dr. Ralph Edwards`,
          displayTextArea: !1,
          title: `Name`,
          type: H.String,
        },
        onZDumY1CpkChange: { changes: `ZDumY1Cpk`, type: H.ChangeHandler },
        VKqTXjKvs: {
          defaultValue: `Chief Executive Officer (CEO)`,
          displayTextArea: !1,
          title: `Designation`,
          type: H.String,
        },
        onVKqTXjKvsChange: { changes: `VKqTXjKvs`, type: H.ChangeHandler },
      }),
      R(
        qa,
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
          ...P(lr),
          ...P(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ya,
  Xa,
  Za,
  Qa,
  $a = e(() => {
    (z(),
      ie.loadFonts([
        `BI;BDO Grotesk/variable/v0`,
        `Inter-Bold`,
        `Inter-BoldItalic`,
        `Inter-Italic`,
      ]),
      (Ya = [{ defaultValue: 400, maxValue: 900, minValue: 300, name: `Weight`, tag: `wght` }]),
      (Xa = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `BDO Grotesk Variable`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `BDO Grotesk`,
              url: `../../assets/fonts/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2`,
              variationAxes: Ya,
              weight: `1000`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Za = [
        `.framer-YDwWB .framer-styles-preset-1frbh0f:not(.rich-text-wrapper), .framer-YDwWB .framer-styles-preset-1frbh0f.rich-text-wrapper p { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Qa = `framer-YDwWB`));
  }),
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co = e(() => {
    (y(),
      z(),
      j(),
      n(),
      $a(),
      (eo = `framer-atxm9`),
      (to = { CoH0ypv7e: `framer-v-1jn0nas` }),
      (no = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ro = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (io = C.create(s)),
      (ao = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        DHnMGeY1f: n ?? i.DHnMGeY1f ?? `Time efficiency`,
      })),
      (oo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (so = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V();
          ae();
          let { style: l, className: u, layoutId: d, variant: f, DHnMGeY1f: m, ...h } = ao(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: te,
              variants: w,
            } = le({ defaultVariant: `CoH0ypv7e`, ref: i, variant: f, variantClassNames: to }),
            T = oo(e, w),
            ne = N(eo, Qa);
          return p(A, {
            id: d ?? a,
            children: p(io, {
              animate: w,
              initial: !1,
              children: p(ro, {
                value: no,
                children: p(C.div, {
                  ...h,
                  ...y,
                  className: N(ne, `framer-1jn0nas`, u, _),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: T,
                  layoutId: `CoH0ypv7e`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...l,
                  },
                  children: p(G, {
                    __fromCanvasComponent: !0,
                    children: p(s, {
                      children: p(C.p, {
                        className: `framer-styles-preset-1frbh0f`,
                        "data-styles-preset": `tFkUSlSoF`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                        },
                        children: `Time efficiency`,
                      }),
                    }),
                    className: `framer-q6p5ir`,
                    fonts: [`Inter`],
                    layoutDependency: T,
                    layoutId: `MBfWtCG1t`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: m,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-atxm9.framer-67p572, .framer-atxm9 .framer-67p572 { display: block; }`,
          `.framer-atxm9.framer-1jn0nas { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 16px 4px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-atxm9 .framer-q6p5ir { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Za,
        ],
        `framer-atxm9`
      )),
      (so.displayName = `Service Feature`),
      (so.defaultProps = { height: 26, width: 117 }),
      M(so, {
        DHnMGeY1f: {
          defaultValue: `Time efficiency`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        onDHnMGeY1fChange: { changes: `DHnMGeY1f`, type: H.ChangeHandler },
      }),
      R(
        so,
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
          ...P(Xa),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function lo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To = e(() => {
    (y(),
      z(),
      j(),
      n(),
      Oe(),
      Xe(),
      co(),
      (uo = L(so)),
      (fo = [`baFVMi2dr`, `eua7IPVes`]),
      (po = `framer-pCKlu`),
      (mo = { baFVMi2dr: `framer-v-1xg3k3x`, eua7IPVes: `framer-v-1mbz9zv` }),
      (ho = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (go = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_o = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (vo = ({ value: e, children: n }) => {
        let r = _(D),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return p(D.Provider, { value: a, children: n });
      }),
      (yo = { Desktop: `baFVMi2dr`, Mobile: `eua7IPVes` }),
      (bo = C.create(s)),
      (xo = (e, t) => {
        let [n, r] = l(e),
          [i, a] = l(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (So = ({
        gap: e,
        height: t,
        id: n,
        image: r,
        padding: i,
        tagLine01: a,
        tagLine02: o,
        text: s,
        title: c,
        width: l,
        ...u
      }) => ({
        ...u,
        Ec5w5MP47: e ?? u.Ec5w5MP47 ?? 490,
        nEf9pLN8i:
          s ??
          u.nEf9pLN8i ??
          `We deliver complete agriculture solutions designed to improve efficiency, productivity, and sustainability.`,
        oXlxnRaUg: c ?? u.oXlxnRaUg ?? `All-in-One Solutions for Modern Agriculture`,
        S1QKz_xaF: i ?? u.S1QKz_xaF ?? `32px`,
        variant: yo[u.variant] ?? u.variant ?? `baFVMi2dr`,
        WGF7kIEdL: r ??
          u.WGF7kIEdL ?? {
            alt: ``,
            pixelHeight: 3064,
            pixelWidth: 1700,
            src: `https://framerusercontent.com/images/aAE0qe3AJN4Pk7Ao7UF4hg5kpQ.png?width=1700&height=3064`,
            srcSet: `https://framerusercontent.com/images/aAE0qe3AJN4Pk7Ao7UF4hg5kpQ.png?scale-down-to=1024&width=1700&height=3064 568w,https://framerusercontent.com/images/aAE0qe3AJN4Pk7Ao7UF4hg5kpQ.png?scale-down-to=2048&width=1700&height=3064 1136w,https://framerusercontent.com/images/aAE0qe3AJN4Pk7Ao7UF4hg5kpQ.png?width=1700&height=3064 1700w`,
          },
        xU__gtBJR: o ?? u.xU__gtBJR ?? `Time efficiency`,
        ZCSnGxIt5: a ?? u.ZCSnGxIt5 ?? `Time efficiency`,
      })),
      (Co = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wo = me(
        m(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: c } = V(),
            l = ae(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: m,
              WGF7kIEdL: h,
              oXlxnRaUg: g,
              nEf9pLN8i: _,
              ZCSnGxIt5: y,
              onZCSnGxIt5Change: x,
              xU__gtBJR: S,
              onxU__gtBJRChange: ee,
              Ec5w5MP47: te,
              S1QKz_xaF: w,
              ...T
            } = So(e),
            [ne, E] = xo(y, x),
            [D, O] = xo(S, ee),
            {
              baseVariant: k,
              classNames: re,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: ie,
              isLoading: P,
              setGestureState: I,
              setVariant: L,
              variants: R,
            } = le({
              cycleOrder: fo,
              defaultVariant: `baFVMi2dr`,
              ref: i,
              variant: m,
              variantClassNames: mo,
            }),
            z = Co(e, R),
            oe = N(po, Ze, Ae);
          return p(A, {
            id: f ?? a,
            children: p(bo, {
              animate: R,
              initial: !1,
              children: p(vo, {
                value: go,
                children: v(C.div, {
                  ...T,
                  ...M,
                  className: N(oe, `framer-1xg3k3x`, d, re),
                  "data-framer-name": `Desktop`,
                  layoutDependency: z,
                  layoutId: `baFVMi2dr`,
                  ref: i,
                  style: {
                    "--1w9rei4": ho(w),
                    backgroundColor: `var(--token-ab24d608-88fd-49a5-915e-723479f59419, rgb(217, 217, 217))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...u,
                  },
                  ...lo({ eua7IPVes: { "data-framer-name": `Mobile` } }, k, ie),
                  children: [
                    p(pe, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: F((l?.y || 0) + 0),
                        pixelHeight: 3064,
                        pixelWidth: 1700,
                        sizes: l?.width || `100vw`,
                        ..._o(h),
                      },
                      className: `framer-12teieu`,
                      "data-framer-name": `Image`,
                      layoutDependency: z,
                      layoutId: `GFqAlBPII`,
                    }),
                    p(C.div, {
                      className: `framer-1q9tpik`,
                      "data-framer-name": `Linear`,
                      layoutDependency: z,
                      layoutId: `qgRuY9mj7`,
                      style: {
                        background: `linear-gradient(180deg, var(--token-758051b4-1516-494d-8a08-3fb09232b834, rgb(0, 0, 0)) 17.117117117117118%, rgba(4, 48, 59, 0) 100%)`,
                      },
                      variants: {
                        eua7IPVes: {
                          background: `linear-gradient(180deg, var(--token-758051b4-1516-494d-8a08-3fb09232b834, rgb(0, 0, 0)) 0%, rgba(4, 48, 59, 0) 149%)`,
                        },
                      },
                    }),
                    v(C.div, {
                      className: `framer-11kxbgt`,
                      "data-framer-name": `Content`,
                      layoutDependency: z,
                      layoutId: `SuB5y3IYN`,
                      style: { "--repfbg": ho(te) },
                      children: [
                        v(C.div, {
                          className: `framer-glw7wy`,
                          "data-framer-name": `Text `,
                          layoutDependency: z,
                          layoutId: `yusseB92h`,
                          children: [
                            p(G, {
                              __fromCanvasComponent: !0,
                              children: p(s, {
                                children: p(C.h4, {
                                  className: `framer-styles-preset-gc3dxx`,
                                  "data-styles-preset": `MXFp7sUVi`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)))`,
                                  },
                                  children: `All-in-One Solutions for Modern Agriculture`,
                                }),
                              }),
                              className: `framer-pobodf`,
                              fonts: [`Inter`],
                              layoutDependency: z,
                              layoutId: `asYJy417i`,
                              style: {
                                "--extracted-1eung3n": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: g,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            p(G, {
                              __fromCanvasComponent: !0,
                              children: p(s, {
                                children: p(C.p, {
                                  className: `framer-styles-preset-1h0pk3x`,
                                  "data-styles-preset": `c84NHGXvh`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212)))`,
                                  },
                                  children: `We deliver complete agriculture solutions designed to improve efficiency, productivity, and sustainability.`,
                                }),
                              }),
                              className: `framer-jdl6m`,
                              fonts: [`Inter`],
                              layoutDependency: z,
                              layoutId: `LarnSq4v9`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        v(C.div, {
                          className: `framer-rfs4hn`,
                          "data-framer-name": `Tag Wrapper`,
                          layoutDependency: z,
                          layoutId: `dSRI605gb`,
                          children: [
                            p(U, {
                              height: 39,
                              children: p(W, {
                                className: `framer-1kvj2gi-container`,
                                layoutDependency: z,
                                layoutId: `ZWf9QZUBr-container`,
                                nodeId: `ZWf9QZUBr`,
                                rendersWithMotion: !0,
                                scopeId: `UC0Oo6xRN`,
                                children: p(so, {
                                  DHnMGeY1f: ne,
                                  height: `100%`,
                                  id: `ZWf9QZUBr`,
                                  layoutId: `ZWf9QZUBr`,
                                  onDHnMGeY1fChange: E,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            p(U, {
                              height: 39,
                              children: p(W, {
                                className: `framer-hl8543-container`,
                                layoutDependency: z,
                                layoutId: `BpklIqLky-container`,
                                nodeId: `BpklIqLky`,
                                rendersWithMotion: !0,
                                scopeId: `UC0Oo6xRN`,
                                children: p(so, {
                                  DHnMGeY1f: D,
                                  height: `100%`,
                                  id: `BpklIqLky`,
                                  layoutId: `BpklIqLky`,
                                  onDHnMGeY1fChange: O,
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
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pCKlu.framer-4cr8ux, .framer-pCKlu .framer-4cr8ux { display: block; }`,
          `.framer-pCKlu.framer-1xg3k3x { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: var(--1w9rei4); position: relative; width: 425px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pCKlu .framer-12teieu { bottom: 0px; flex: none; gap: 10px; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-pCKlu .framer-1q9tpik { flex: none; gap: 10px; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
          `.framer-pCKlu .framer-11kxbgt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: var(--repfbg); height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-pCKlu .framer-glw7wy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-pCKlu .framer-pobodf, .framer-pCKlu .framer-jdl6m { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-pCKlu .framer-rfs4hn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px 13px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-pCKlu .framer-1kvj2gi-container, .framer-pCKlu .framer-hl8543-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-pCKlu.framer-v-1mbz9zv .framer-11kxbgt { gap: 60px; }`,
          `.framer-pCKlu.framer-v-1mbz9zv .framer-glw7wy { gap: 16px; }`,
          ...Je,
          ...De,
        ],
        `framer-pCKlu`
      )),
      (wo.displayName = `Solution Card`),
      (wo.defaultProps = { height: 767, width: 425 }),
      M(wo, {
        variant: {
          options: [`baFVMi2dr`, `eua7IPVes`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: H.Enum,
        },
        WGF7kIEdL: {
          __defaultAssetReference: `data:framer/asset-reference,aAE0qe3AJN4Pk7Ao7UF4hg5kpQ.png?width=1700&height=3064`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,aAE0qe3AJN4Pk7Ao7UF4hg5kpQ.png?width=1700&height=3064`,
          },
          title: `Image`,
          type: H.ResponsiveImage,
        },
        oXlxnRaUg: {
          defaultValue: `All-in-One Solutions for Modern Agriculture`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        onoXlxnRaUgChange: { changes: `oXlxnRaUg`, type: H.ChangeHandler },
        nEf9pLN8i: {
          defaultValue: `We deliver complete agriculture solutions designed to improve efficiency, productivity, and sustainability.`,
          displayTextArea: !1,
          title: `Text`,
          type: H.String,
        },
        onnEf9pLN8iChange: { changes: `nEf9pLN8i`, type: H.ChangeHandler },
        ZCSnGxIt5: {
          defaultValue: `Time efficiency`,
          displayTextArea: !1,
          title: `Tag Line 01`,
          type: H.String,
        },
        onZCSnGxIt5Change: { changes: `ZCSnGxIt5`, type: H.ChangeHandler },
        xU__gtBJR: {
          defaultValue: `Time efficiency`,
          displayTextArea: !1,
          title: `Tag Line 02`,
          type: H.String,
        },
        onxU__gtBJRChange: { changes: `xU__gtBJR`, type: H.ChangeHandler },
        Ec5w5MP47: { defaultValue: 490, min: 0, title: `Gap`, type: H.Number },
        onEc5w5MP47Change: { changes: `Ec5w5MP47`, type: H.ChangeHandler },
        S1QKz_xaF: { defaultValue: `32px`, title: `Padding`, type: H.Padding },
      }),
      R(
        wo,
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
          ...uo,
          ...P(Ke),
          ...P(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (wo.loader = { load: (e, t) => (t.locale, Promise.allSettled([I(so, {}, t)])) }));
  }),
  Eo,
  Do,
  Oo,
  ko,
  Ao = e(() => {
    (y(),
      z(),
      n(),
      (Eo = `var(--framer-icon-mask)`),
      (Do = m((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? p(C.img, { ...a, layoutId: r, ref: t }) : p(`img`, { ...a, ref: t });
      })),
      (Oo = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nGcTmOiOr: e ?? i.nGcTmOiOr ?? `rgb(4, 48, 59)`,
      })),
      (ko = me(
        m(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, nGcTmOiOr: o, ...s } = Oo(e);
          return p(Do, {
            ...s,
            alt: ``,
            className: N(`framer-usYbE`, r),
            layoutId: i,
            ref: t,
            src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M 5.542 3.895 C 5.486 3.02 5.096 2.178 4.444 1.526 L 2.983 0.065 C 2.911 -0.007 2.801 -0.021 2.714 0.032 C 2.513 0.154 2.316 0.283 2.128 0.423 L 2.751 1.047 C 3.219 1.515 3.219 2.276 2.751 2.744 C 2.283 3.211 1.521 3.211 1.054 2.744 C 0.899 2.589 0.583 2.275 0.428 2.119 C 0.288 2.309 0.157 2.508 0.032 2.714 C -0.02 2.801 -0.007 2.911 0.063 2.983 C 0.713 3.587 1.789 4.886 2.626 5.214 C 3.069 5.415 3.533 5.532 4.009 5.544 C 4.896 5.561 5.622 4.785 5.542 3.895 Z" fill="rgb(0, 0, 0)" height="5.544713801231935px" id="VvjVv_R4y" transform="translate(7.576 7.581)" width="5.548317407495755px"/><path d="M 0 1.078 C 0.136 1.215 0.912 1.991 0.912 1.991 C 1.21 2.288 1.695 2.288 1.993 1.991 C 2.29 1.693 2.29 1.21 1.993 0.912 C 1.993 0.912 1.218 0.136 1.081 0 Z" fill="rgb(0, 0, 0)" height="2.213725px" id="OyiCM13UL" transform="translate(8.026 8.024)" width="2.215925000000002px"/><path d="M 6.619 6.127 L 1.91 1.415 C 2.111 1.214 2.227 0.952 2.227 0.667 C 2.227 0.42 2.142 0.186 1.986 0 C 1.986 0 0.202 1.786 0 1.986 C 0.402 2.332 1.054 2.299 1.415 1.907 C 1.905 2.397 6.127 6.619 6.127 6.619 Z" fill="rgb(0, 0, 0)" height="6.619370000000001px" id="GdtlwXT6T" transform="translate(1.768 1.765)" width="6.619384999999993px"/><path d="M 2.57 0.578 L 2.056 0.064 C 1.971 -0.021 1.831 -0.021 1.746 0.064 L 0.066 1.746 C -0.022 1.831 -0.022 1.969 0.066 2.057 L 0.58 2.571 C 0.58 2.571 2.375 0.777 2.57 0.578 Z" fill="rgb(0, 0, 0)" height="2.5708612499999997px" id="D_vq2CQ2c" transform="translate(0.877 0.875)" width="2.570318750000002px"/><path d="M 0.844 5.597 L 5.41 1.02 C 5.942 0.445 5.138 -0.36 4.561 0.176 C 4.561 0.176 0 4.752 0 4.752 C 0.136 4.878 0.844 5.597 0.844 5.597 Z" fill="rgb(0, 0, 0)" height="5.5966344588661965px" id="znkYaNzCJ" transform="translate(7.138 1.272)" width="5.583754301497175px"/><path d="M 5.017 0 L 3.473 1.612 L 2.084 0.223 C 1.828 -0.033 1.412 -0.033 1.156 0.223 C 0.916 0.464 0.312 1.065 0.065 1.313 C -0.135 1.517 0.171 1.823 0.375 1.622 C 0.375 1.622 0.924 1.073 0.924 1.073 C 0.924 1.074 1.447 1.597 1.448 1.598 C 1.448 1.598 0.899 2.147 0.899 2.147 C 0.699 2.35 1.005 2.657 1.209 2.456 C 1.209 2.456 1.758 1.907 1.758 1.907 C 1.757 1.907 2.282 2.432 2.282 2.432 L 1.733 2.981 C 1.648 3.066 1.648 3.205 1.733 3.29 C 1.819 3.376 1.957 3.376 2.043 3.29 L 2.592 2.741 L 3.116 3.266 L 2.567 3.815 C 2.366 4.017 2.673 4.326 2.877 4.124 C 2.877 4.124 3.426 3.575 3.426 3.575 L 3.95 4.099 C 3.952 4.1 3.401 4.648 3.401 4.649 C 3.2 4.851 3.508 5.16 3.711 4.958 C 3.711 4.958 4.26 4.409 4.26 4.409 L 4.784 4.934 L 4.235 5.483 C 4.095 5.612 4.203 5.863 4.39 5.856 C 4.446 5.856 4.502 5.835 4.545 5.792 L 5.248 5.089 C 5.249 5.085 5.631 4.705 5.634 4.701 C 5.89 4.445 5.89 4.029 5.634 3.773 L 4.282 2.422 L 5.827 0.809 C 5.827 0.809 5.132 0.121 5.017 0 Z" fill="rgb(0, 0, 0)" height="5.856297344286055px" id="wa4nRrGN7" transform="translate(1.009 7.133)" width="5.8267332143771435px"/></svg>`,
            style: { ...n },
          });
        }),
        [
          `.framer-usYbE { -webkit-mask: ${Eo}; aspect-ratio: 1; display: block; mask: ${Eo}; user-select: none; width: 14px; }`,
        ],
        `framer-usYbE`
      )),
      (ko.displayName = `fi_10128343`),
      M(ko, {
        nGcTmOiOr: { defaultValue: `rgb(4, 48, 59)`, hidden: !0, title: `Color`, type: H.Color },
      }));
  }),
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  Z,
  Q,
  ds,
  $,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As;
e(() => {
  (y(),
    z(),
    j(),
    n(),
    Rt(),
    qe(),
    qr(),
    Hi(),
    J(),
    aa(),
    Sa(),
    Pa(),
    Ye(),
    Ja(),
    To(),
    Ne(),
    sr(),
    We(),
    Be(),
    Fe(),
    ua(),
    Ao(),
    et(),
    (jo = L(Y)),
    (Mo = fe(pe)),
    (No = fe(C.div)),
    (Po = fe(G)),
    (Fo = L(Ot)),
    (Io = ue(G)),
    (Lo = L(je)),
    (Ro = ue(ge)),
    (zo = L(q)),
    (Bo = L(Na)),
    (Vo = ue(C.div)),
    (Ho = L(wo)),
    (Uo = L(Vi)),
    (Wo = he(Vi)),
    (Go = L(xa)),
    (Ko = ue(pe)),
    (qo = L(ia)),
    (Jo = L(qa)),
    (Yo = L(Kr)),
    (Xo = L(Qe)),
    (Zo = {
      mwhVzaTs1: `(max-width: 767.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
      xxYZL9ilW: `(min-width: 768px) and (max-width: 1199.98px)`,
    }),
    (Qo = () => typeof document < `u`),
    ($o = []),
    (es = `framer-Abx1J`),
    (ts = {
      mwhVzaTs1: `framer-v-v8h9ld`,
      WQLkyLRf1: `framer-v-72rtr7`,
      xxYZL9ilW: `framer-v-9quj4p`,
    }),
    (ns = (e, t, n) => (e && t ? `position` : n)),
    (rs = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (is = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.3,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (as = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (os = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 12,
    }),
    (ss = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.1, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (cs = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 24,
    }),
    (ls = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (us = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.3, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Z = {
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
    (Q = { damping: 55, delay: 0, mass: 1, stiffness: 300, type: `spring` }),
    (ds = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Q,
      x: 0,
      y: 40,
    }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (fs = {
      filter: `blur(4px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (ps = { bounce: 0, delay: 0.05, duration: 0.7, type: `spring` }),
    (ms = {
      effect: fs,
      repeat: !1,
      startDelay: 0.1,
      threshold: 0.5,
      tokenization: `word`,
      transition: ps,
      trigger: `onInView`,
      type: `appear`,
    }),
    (hs = {
      effect: fs,
      repeat: !1,
      startDelay: 0.1,
      threshold: 0,
      tokenization: `word`,
      transition: ps,
      trigger: `onInView`,
      type: `appear`,
    }),
    (gs = {
      opacity: 0,
      rotate: 0,
      rotateX: 40,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (_s = {
      opacity: 0,
      rotate: 0,
      rotateX: 40,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Q,
      x: 0,
      y: 40,
    }),
    (vs = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (ys = { damping: 55, delay: 0.1, mass: 1, stiffness: 300, type: `spring` }),
    (bs = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ys,
      x: 0,
      y: 40,
    }),
    (xs = { damping: 55, delay: 0.2, mass: 1, stiffness: 300, type: `spring` }),
    (Ss = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: xs,
      x: 0,
      y: 40,
    }),
    (Cs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (ws = {
      opacity: 0,
      rotate: 0,
      rotateX: 40,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ys,
      x: 0,
      y: 40,
    }),
    (Ts = {
      opacity: 0,
      rotate: 0,
      rotateX: 40,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: xs,
      x: 0,
      y: 40,
    }),
    (Es = { Desktop: `WQLkyLRf1`, Phone: `mwhVzaTs1`, Tablet: `xxYZL9ilW` }),
    (Ds = ({ value: e }) =>
      ye()
        ? null
        : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Os = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Es[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (ks = me(
      m(function (e, n) {
        let i = r(null),
          a = n ?? i,
          o = b(),
          { activeLocale: c, setLocale: l } = V(),
          u = ae(),
          { style: d, className: f, layoutId: m, variant: h, ...g } = Os(e);
        se(t(() => $e({}, c), [c]));
        let [y, x] = Se(h, Zo, !1),
          S = N(es, or, He, Ge, Ve),
          ee = _(be)?.isLayoutTemplate,
          te = !!_(D)?.transition?.layout,
          w = ns(ee, te),
          T = ve(`Jqrmq3gQ1`),
          ne = r(null);
        xe();
        let E = ve(`SmyffEGq3`),
          O = r(null),
          k = () => !Qo() || y !== `mwhVzaTs1`,
          re = ve(`evVl76OK0`),
          j = r(null),
          M = ve(`zD8b77ZSf`),
          ie = r(null),
          P = r(null),
          I = r(null),
          L = r(null),
          R = r(null),
          z = ve(`tv0C1qN0N`),
          oe = ve(`dXgUtDXyY`),
          le = ve(`emCbXX2jg`),
          ue = ve(`WtDAs7RsD`),
          fe = ve(`onN9Fmt_i`),
          me = r(null),
          he = ve(`rcGbCfFII`),
          _e = r(null),
          H = ve(`CgfBgzOyY`),
          ye = r(null),
          Ce = ve(`zjlPpsn_n`),
          W = r(null),
          Te = ve(`gYTaKdUjG`),
          Ee = r(null);
        return (
          de({}),
          p(be.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: Es,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: ts,
            },
            children: v(A, {
              id: m ?? o,
              children: [
                p(Ds, {
                  value: `html body { background: var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255)); }`,
                }),
                v(C.div, {
                  ...g,
                  className: N(S, `framer-72rtr7`, f),
                  ref: a,
                  style: { ...d },
                  children: [
                    p(U, {
                      children: p(ge, {
                        className: `framer-oyezyq-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: w,
                        nodeId: `pWw8w8NgR`,
                        scopeId: `augiA20Il`,
                        children: p(Y, {
                          height: `100%`,
                          id: `pWw8w8NgR`,
                          intensity: 16,
                          layoutId: `pWw8w8NgR`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    v(C.section, {
                      className: `framer-1t476ww`,
                      "data-framer-name": `Hero Section`,
                      id: T,
                      layout: w,
                      ref: ne,
                      children: [
                        p(B, {
                          breakpoint: y,
                          overrides: {
                            mwhVzaTs1: {
                              background: {
                                alt: `Hero BG`,
                                fit: `fill`,
                                intrinsicHeight: 1600,
                                intrinsicWidth: 2880,
                                pixelHeight: 1600,
                                pixelWidth: 2880,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: u?.width || `100vw`,
                                src: `../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?width=2880&height=1600`,
                                srcSet: `../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?scale-down-to=512&width=2880&height=1600 512w,../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?scale-down-to=1024&width=2880&height=1600 1024w,../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png 2048w,../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?width=2880&height=1600 2880w`,
                              },
                            },
                          },
                          children: p(Mo, {
                            animate: rs,
                            background: {
                              alt: `Hero BG`,
                              fit: `fill`,
                              intrinsicHeight: 1600,
                              intrinsicWidth: 2880,
                              loading: F((u?.y || 0) + 0 + 200 + 0),
                              pixelHeight: 1600,
                              pixelWidth: 2880,
                              positionX: `center`,
                              positionY: `center`,
                              sizes: u?.width || `100vw`,
                              src: `../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?width=2880&height=1600`,
                              srcSet: `../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?scale-down-to=512&width=2880&height=1600 512w,../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?scale-down-to=1024&width=2880&height=1600 1024w,../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png 2048w,../../assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png?width=2880&height=1600 2880w`,
                            },
                            className: `framer-2z9c8f`,
                            "data-framer-appear-id": `2z9c8f`,
                            initial: is,
                            optimized: !0,
                          }),
                        }),
                        p(`div`, { className: `framer-205bfl`, "data-framer-name": `Overlay` }),
                        v(`div`, {
                          className: `framer-15fd9r5`,
                          "data-framer-name": `Container`,
                          children: [
                            p(`div`, {
                              className: `framer-16q878s`,
                              "data-framer-name": `Title & Button`,
                              children: v(`div`, {
                                className: `framer-1qxb4xb`,
                                "data-framer-name": `Title & Text`,
                                children: [
                                  p(No, {
                                    animate: as,
                                    className: `framer-zklbkt`,
                                    "data-border": !0,
                                    "data-framer-appear-id": `zklbkt`,
                                    "data-framer-name": `Sub Heading`,
                                    initial: os,
                                    optimized: !0,
                                    children: p(G, {
                                      __fromCanvasComponent: !0,
                                      children: p(s, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1ferev6`,
                                          "data-styles-preset": `anZQZtdwi`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212))`,
                                          },
                                          children: `Smart farming solutions`,
                                        }),
                                      }),
                                      className: `framer-1vsv3jl`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  p(Po, {
                                    __fromCanvasComponent: !0,
                                    animate: ss,
                                    children: p(s, {
                                      children: p(`h1`, {
                                        className: `framer-styles-preset-1yw9991`,
                                        "data-styles-preset": `UYr9mXTrF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                        },
                                        children: `Innovative Technology for Agricultural Growth`,
                                      }),
                                    }),
                                    className: `framer-bj5c0h`,
                                    "data-framer-appear-id": `bj5c0h`,
                                    fonts: [`Inter`],
                                    initial: cs,
                                    optimized: !0,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            v(`div`, {
                              className: `framer-1d9ccya`,
                              "data-framer-name": `CTA Part`,
                              children: [
                                v(No, {
                                  animate: ls,
                                  className: `framer-1xl0yr3`,
                                  "data-border": !0,
                                  "data-framer-appear-id": `1xl0yr3`,
                                  "data-framer-name": `Video Wrapper`,
                                  initial: cs,
                                  optimized: !0,
                                  children: [
                                    p(U, {
                                      children: p(ge, {
                                        className: `framer-cfz5sf-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `cxuexx7Sw`,
                                        scopeId: `augiA20Il`,
                                        children: p(Ot, {
                                          backgroundColor: `var(--token-ec595db1-18c9-427a-8a4d-369f3a280aab, rgba(255, 255, 255, 0.1))`,
                                          borderRadius: 14,
                                          bottomLeftRadius: 14,
                                          bottomRightRadius: 14,
                                          controls: !1,
                                          height: `100%`,
                                          id: `cxuexx7Sw`,
                                          isMixedBorderRadius: !1,
                                          layoutId: `cxuexx7Sw`,
                                          loop: !0,
                                          muted: !0,
                                          objectFit: `cover`,
                                          playing: !0,
                                          posterEnabled: !0,
                                          srcFile: `../../assets/misc/Np45wly46PBKqCGM0tXpdJqVAo.mp4`,
                                          srcType: `Upload`,
                                          srcUrl: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
                                          startTime: 0,
                                          style: { height: `100%`, width: `100%` },
                                          topLeftRadius: 14,
                                          topRightRadius: 14,
                                          volume: 25,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    v(`div`, {
                                      className: `framer-9l1xr4`,
                                      "data-framer-name": `Title`,
                                      children: [
                                        p(G, {
                                          __fromCanvasComponent: !0,
                                          children: p(s, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-1733zfo`,
                                              "data-styles-preset": `Mbm17cVdN`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                                              },
                                              children: `Farming in Motion`,
                                            }),
                                          }),
                                          className: `framer-gz2zxj`,
                                          "data-framer-name": `Farming in Motion`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        p(G, {
                                          __fromCanvasComponent: !0,
                                          children: p(s, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-1ferev6`,
                                              "data-styles-preset": `anZQZtdwi`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(227, 228, 212))`,
                                              },
                                              children: `Real-time insights driving smarter decisions.`,
                                            }),
                                          }),
                                          className: `framer-1ku1a9f`,
                                          "data-framer-name": `Real-time insights driving smarter decisions.`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v(No, {
                                  animate: us,
                                  className: `framer-1yfkwt7`,
                                  "data-framer-appear-id": `1yfkwt7`,
                                  "data-framer-name": `Button & Description`,
                                  initial: cs,
                                  optimized: !0,
                                  children: [
                                    p(Io, {
                                      __framer__animate: { transition: Q },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Z,
                                      __framer__exit: ds,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: p(s, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1733zfo`,
                                          "data-styles-preset": `Mbm17cVdN`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-ab24d608-88fd-49a5-915e-723479f59419, rgb(242, 243, 238))`,
                                          },
                                          children: `Koranco Farms delivers smart farming solutions to improve productivity and promote sustainable agricultural growth.`,
                                        }),
                                      }),
                                      className: `framer-1mcefzi`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(we, {
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
                                        p(B, {
                                          breakpoint: y,
                                          overrides: {
                                            mwhVzaTs1: { y: void 0 },
                                            xxYZL9ilW: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                200 +
                                                140 +
                                                0 +
                                                0 +
                                                194.3 +
                                                0 +
                                                87.8 +
                                                0 +
                                                168,
                                            },
                                          },
                                          children: p(U, {
                                            height: 44,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              200 +
                                              184 +
                                              106.95 +
                                              0 +
                                              242.3 +
                                              0 +
                                              87.8 +
                                              0 +
                                              168,
                                            children: p(Ro, {
                                              __framer__animate: { transition: Q },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Z,
                                              __framer__exit: ds,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-1viykoh-container`,
                                              nodeId: `xnv6UVSSM`,
                                              rendersWithMotion: !0,
                                              scopeId: `augiA20Il`,
                                              children: p(B, {
                                                breakpoint: y,
                                                overrides: {
                                                  mwhVzaTs1: { xIBjgZW1u: e[2] },
                                                  xxYZL9ilW: { xIBjgZW1u: e[1] },
                                                },
                                                children: p(je, {
                                                  height: `100%`,
                                                  HWDdm10qN: !0,
                                                  id: `xnv6UVSSM`,
                                                  layoutId: `xnv6UVSSM`,
                                                  vNk7ZG44C: `Ger started`,
                                                  width: `100%`,
                                                  xIBjgZW1u: e[0],
                                                }),
                                              }),
                                            }),
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
                    p(C.section, {
                      className: `framer-787wwg`,
                      "data-framer-name": `About Section`,
                      id: E,
                      layout: w,
                      ref: O,
                      children: v(Vo, {
                        __framer__animate: { transition: Q },
                        __framer__animateOnce: !0,
                        __framer__enter: Z,
                        __framer__exit: ds,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: `framer-67kh0e`,
                        "data-framer-name": `Container`,
                        children: [
                          v(`div`, {
                            className: `framer-1o60xwq`,
                            "data-framer-name": `Text & Tag`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 894.1 + 80 + 0 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 32,
                                  y: (u?.y || 0) + 0 + 1200 + 120 + 0 + 0 + 0 + 0,
                                  children: p(ge, {
                                    className: `framer-2h0ddy-container`,
                                    nodeId: `S9bfqzYNQ`,
                                    scopeId: `augiA20Il`,
                                    children: p(q, {
                                      bU2YfweFO: `About Us`,
                                      height: `100%`,
                                      id: `S9bfqzYNQ`,
                                      layoutId: `S9bfqzYNQ`,
                                      variant: $(`e_m2k17aE`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(`h2`, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                    },
                                    children: `Powering the future of agriculture through innovation powering the future of agriculture`,
                                  }),
                                }),
                                className: `framer-1s3963`,
                                effect: ms,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v(Vo, {
                            __framer__animate: { transition: Q },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__exit: ds,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-g26xpd`,
                            "data-framer-name": `Stat Wrapper`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 894.1 + 80 + 0 + 0 + 160.4 + 1,
                                  },
                                },
                                children: p(U, {
                                  height: 84,
                                  y: (u?.y || 0) + 0 + 1200 + 120 + 0 + 0 + 142.4 + 1,
                                  children: p(ge, {
                                    className: `framer-8ysqp8-container`,
                                    nodeId: `XsoBFMfg7`,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { variant: $(`kTEQkPK6D`) },
                                        xxYZL9ilW: { Hlleve39M: `120K+` },
                                      },
                                      children: p(Na, {
                                        height: `100%`,
                                        Hlleve39M: `12+`,
                                        id: `XsoBFMfg7`,
                                        layoutId: `XsoBFMfg7`,
                                        py0jt7jZn: `Years of experience`,
                                        variant: $(`u438oeoTw`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              k() &&
                                p(ce, {
                                  className: `framer-1vmeqvd hidden-v8h9ld`,
                                  "data-framer-name": `Line 16`,
                                  fill: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)) /* {"name":"Black"} */`,
                                  intrinsicHeight: 86,
                                  intrinsicWidth: 3,
                                  svg: `<svg width="3" height="86" viewBox="-1 -1 3 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="-2.18557e-08" x2="0.500004" y2="84" stroke="url(#paint0_linear_8233_456)"/>
<defs>
<linearGradient id="paint0_linear_8233_456" x1="-0.5" y1="2.18557e-08" x2="-0.499996" y2="84" gradientUnits="userSpaceOnUse">
<stop stop-color="#04303B" stop-opacity="0.1"/>
<stop offset="0.503065" stop-color="#04303B"/>
<stop offset="1" stop-color="#04303B" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
`,
                                  withExternalLayout: !0,
                                }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 894.1 + 80 + 0 + 0 + 160.4 + 1,
                                  },
                                },
                                children: p(U, {
                                  height: 84,
                                  y: (u?.y || 0) + 0 + 1200 + 120 + 0 + 0 + 142.4 + 1,
                                  children: p(ge, {
                                    className: `framer-17qmcnz-container`,
                                    nodeId: `FWpozSzsL`,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: { mwhVzaTs1: { variant: $(`kTEQkPK6D`) } },
                                      children: p(Na, {
                                        height: `100%`,
                                        Hlleve39M: `235K+`,
                                        id: `FWpozSzsL`,
                                        layoutId: `FWpozSzsL`,
                                        py0jt7jZn: `Acres Improved`,
                                        variant: $(`u438oeoTw`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              k() &&
                                p(ce, {
                                  className: `framer-160vio hidden-v8h9ld`,
                                  "data-framer-name": `Line 16`,
                                  fill: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)) /* {"name":"Black"} */`,
                                  intrinsicHeight: 86,
                                  intrinsicWidth: 3,
                                  svg: `<svg width="3" height="86" viewBox="-1 -1 3 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="-2.18557e-08" x2="0.500004" y2="84" stroke="url(#paint0_linear_8233_456)"/>
<defs>
<linearGradient id="paint0_linear_8233_456" x1="-0.5" y1="2.18557e-08" x2="-0.499996" y2="84" gradientUnits="userSpaceOnUse">
<stop stop-color="#04303B" stop-opacity="0.1"/>
<stop offset="0.503065" stop-color="#04303B"/>
<stop offset="1" stop-color="#04303B" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
`,
                                  withExternalLayout: !0,
                                }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 894.1 + 80 + 0 + 0 + 160.4 + 1,
                                  },
                                },
                                children: p(U, {
                                  height: 84,
                                  y: (u?.y || 0) + 0 + 1200 + 120 + 0 + 0 + 142.4 + 1,
                                  children: p(ge, {
                                    className: `framer-1etizqv-container`,
                                    nodeId: `pyuOwXJq5`,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: { mwhVzaTs1: { variant: $(`kTEQkPK6D`) } },
                                      children: p(Na, {
                                        height: `100%`,
                                        Hlleve39M: `421K+`,
                                        id: `pyuOwXJq5`,
                                        layoutId: `pyuOwXJq5`,
                                        py0jt7jZn: `Farmer around world`,
                                        variant: $(`u438oeoTw`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              k() &&
                                p(ce, {
                                  className: `framer-154dvkr hidden-v8h9ld`,
                                  "data-framer-name": `Line 16`,
                                  fill: `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)) /* {"name":"Black"} */`,
                                  intrinsicHeight: 86,
                                  intrinsicWidth: 3,
                                  svg: `<svg width="3" height="86" viewBox="-1 -1 3 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="-2.18557e-08" x2="0.500004" y2="84" stroke="url(#paint0_linear_8233_456)"/>
<defs>
<linearGradient id="paint0_linear_8233_456" x1="-0.5" y1="2.18557e-08" x2="-0.499996" y2="84" gradientUnits="userSpaceOnUse">
<stop stop-color="#04303B" stop-opacity="0.1"/>
<stop offset="0.503065" stop-color="#04303B"/>
<stop offset="1" stop-color="#04303B" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
`,
                                  withExternalLayout: !0,
                                }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 894.1 + 80 + 0 + 0 + 160.4 + 1,
                                  },
                                },
                                children: p(U, {
                                  height: 84,
                                  y: (u?.y || 0) + 0 + 1200 + 120 + 0 + 0 + 142.4 + 1,
                                  children: p(ge, {
                                    className: `framer-1rs5hu0-container`,
                                    nodeId: `bk1wpXt_x`,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: { mwhVzaTs1: { variant: $(`kTEQkPK6D`) } },
                                      children: p(Na, {
                                        height: `100%`,
                                        Hlleve39M: `$12B+`,
                                        id: `bk1wpXt_x`,
                                        layoutId: `bk1wpXt_x`,
                                        py0jt7jZn: `Agricultural product`,
                                        variant: $(`u438oeoTw`),
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
                    }),
                    p(C.section, {
                      className: `framer-g3pse6`,
                      "data-framer-name": `Our solutions Section`,
                      id: re,
                      layout: w,
                      ref: j,
                      children: v(`div`, {
                        className: `framer-8f5rhv`,
                        "data-framer-name": `Container `,
                        children: [
                          v(`div`, {
                            className: `framer-sz8pmm`,
                            "data-framer-name": `Title & Button`,
                            children: [
                              v(`div`, {
                                className: `framer-efwfve`,
                                "data-framer-name": `Text`,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: { y: void 0 },
                                      xxYZL9ilW: {
                                        y:
                                          (u?.y || 0) + 0 + 1300.5 + 80 + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: p(U, {
                                      height: 32,
                                      y: (u?.y || 0) + 0 + 1668.4 + 120 + 0 + 0 + 0 + 0 + 0 + 0,
                                      children: p(Ro, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__exit: ds,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1gwjpvr-container`,
                                        nodeId: `Egt8VrvmG`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: p(q, {
                                          bU2YfweFO: `Our solutions`,
                                          height: `100%`,
                                          id: `Egt8VrvmG`,
                                          layoutId: `Egt8VrvmG`,
                                          variant: $(`e_m2k17aE`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  p(G, {
                                    __fromCanvasComponent: !0,
                                    children: p(s, {
                                      children: p(`h2`, {
                                        className: `framer-styles-preset-1ydczzn`,
                                        "data-styles-preset": `ySWnAL9MB`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                        },
                                        children: `One platform complete agriculture solutions`,
                                      }),
                                    }),
                                    className: `framer-5bp34i`,
                                    "data-framer-name": `One platform complete agriculture solutions`,
                                    effect: hs,
                                    fonts: [`Inter`],
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(we, {
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
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: { y: void 0 },
                                      xxYZL9ilW: {
                                        y: (u?.y || 0) + 0 + 1300.5 + 80 + 0 + 0 + 0 + 0 + 144.4,
                                      },
                                    },
                                    children: p(U, {
                                      height: 44,
                                      y: (u?.y || 0) + 0 + 1668.4 + 120 + 0 + 0 + 0 + 144.4,
                                      children: p(Ro, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__exit: ds,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1a5xlva-container`,
                                        nodeId: `v3qnnWZ04`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: p(B, {
                                          breakpoint: y,
                                          overrides: {
                                            mwhVzaTs1: { xIBjgZW1u: e[2] },
                                            xxYZL9ilW: { xIBjgZW1u: e[1] },
                                          },
                                          children: p(je, {
                                            height: `100%`,
                                            HWDdm10qN: !0,
                                            id: `v3qnnWZ04`,
                                            layoutId: `v3qnnWZ04`,
                                            vNk7ZG44C: `Contact us`,
                                            width: `100%`,
                                            xIBjgZW1u: e[0],
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          v(`div`, {
                            className: `framer-olq237`,
                            "data-framer-name": `Card Wrapper`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 1300.5 + 80 + 0 + 0 + 234.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 767,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 1668.4 + 120 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: gs,
                                    __framer__exit: _s,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-jtb858-container`,
                                    nodeId: `jVfwyAklN`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { Ec5w5MP47: 80, S1QKz_xaF: `20px` },
                                        xxYZL9ilW: { Ec5w5MP47: 150 },
                                      },
                                      children: p(wo, {
                                        Ec5w5MP47: 179,
                                        height: `100%`,
                                        id: `jVfwyAklN`,
                                        layoutId: `jVfwyAklN`,
                                        nEf9pLN8i: `Use advanced technology to monitor crops and maximize yield with confidence.`,
                                        oXlxnRaUg: `Precision farming solutions`,
                                        S1QKz_xaF: `24px`,
                                        style: { width: `100%` },
                                        variant: $(`baFVMi2dr`),
                                        WGF7kIEdL: vs(
                                          {
                                            pixelHeight: 1614,
                                            pixelWidth: 1275,
                                            src: `../../assets/images/zNmcQyo07DxCT3RJxPq6gaYORh0.png?width=1275&height=1614`,
                                            srcSet: `../../assets/images/zNmcQyo07DxCT3RJxPq6gaYORh0.png 808w,../../assets/images/zNmcQyo07DxCT3RJxPq6gaYORh0.png?width=1275&height=1614 1275w`,
                                          },
                                          `Image`
                                        ),
                                        width: `100%`,
                                        xU__gtBJR: `Smart Monitoring`,
                                        ZCSnGxIt5: `Data insights`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 1300.5 + 80 + 0 + 0 + 234.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 767,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 1668.4 + 120 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: gs,
                                    __framer__exit: _s,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-sdzxjw-container`,
                                    nodeId: `TqUK_iL8i`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { Ec5w5MP47: 80, S1QKz_xaF: `20px` },
                                        xxYZL9ilW: { Ec5w5MP47: 150 },
                                      },
                                      children: p(wo, {
                                        Ec5w5MP47: 261,
                                        height: `100%`,
                                        id: `TqUK_iL8i`,
                                        layoutId: `TqUK_iL8i`,
                                        nEf9pLN8i: `Plan, track, and manage every farming activity effortlessly from one simple digital platform.`,
                                        oXlxnRaUg: `Farm management system`,
                                        S1QKz_xaF: `24px`,
                                        style: { width: `100%` },
                                        variant: $(`baFVMi2dr`),
                                        WGF7kIEdL: vs(
                                          {
                                            pixelHeight: 1614,
                                            pixelWidth: 1275,
                                            src: `../../assets/images/3jG5Dq23m4D3GRcwL5L9qpH3pgo.png?width=1275&height=1614`,
                                            srcSet: `../../assets/images/3jG5Dq23m4D3GRcwL5L9qpH3pgo.png 808w,../../assets/images/3jG5Dq23m4D3GRcwL5L9qpH3pgo.png?width=1275&height=1614 1275w`,
                                          },
                                          `Image`
                                        ),
                                        width: `100%`,
                                        xU__gtBJR: `Digital Control`,
                                        ZCSnGxIt5: `Time Efficiency`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 1300.5 + 80 + 0 + 0 + 234.4 + 0 + 791,
                                  },
                                },
                                children: p(U, {
                                  height: 767,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 1668.4 + 120 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: gs,
                                    __framer__exit: _s,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-u53b40-container`,
                                    nodeId: `cjNZM7TyB`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { Ec5w5MP47: 80, S1QKz_xaF: `20px` },
                                        xxYZL9ilW: { Ec5w5MP47: 150 },
                                      },
                                      children: p(wo, {
                                        Ec5w5MP47: 490,
                                        height: `100%`,
                                        id: `cjNZM7TyB`,
                                        layoutId: `cjNZM7TyB`,
                                        nEf9pLN8i: `Improve soil health, save resources, and grow responsibly with eco-friendly practices.`,
                                        oXlxnRaUg: `Sustainable agriculture services`,
                                        S1QKz_xaF: `24px`,
                                        style: { width: `100%` },
                                        variant: $(`baFVMi2dr`),
                                        WGF7kIEdL: vs(
                                          {
                                            pixelHeight: 1532,
                                            pixelWidth: 850,
                                            src: `../../assets/images/JAGzNWPJfggBCr1mBmpRz68ZHug.png?width=850&height=1532`,
                                            srcSet: `../../assets/images/JAGzNWPJfggBCr1mBmpRz68ZHug.png 568w,../../assets/images/JAGzNWPJfggBCr1mBmpRz68ZHug.png?width=850&height=1532 850w`,
                                          },
                                          `Image`
                                        ),
                                        width: `100%`,
                                        xU__gtBJR: `Smart Practices`,
                                        ZCSnGxIt5: `Sustainability`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    v(C.section, {
                      className: `framer-xa9rc0`,
                      "data-framer-name": `Service Section`,
                      id: M,
                      layout: w,
                      ref: ie,
                      children: [
                        p(B, {
                          breakpoint: y,
                          overrides: {
                            mwhVzaTs1: {
                              height: 800,
                              width: `calc(${u?.width || `100vw`} - 40px)`,
                              y: void 0,
                            },
                            xxYZL9ilW: { y: (u?.y || 0) + 0 + 3252.9 + 0 + 0 },
                          },
                          children: p(U, {
                            height: 1e3,
                            width: u?.width || `100vw`,
                            y: (u?.y || 0) + 0 + 2675.4 + 0 + 0,
                            children: p(ge, {
                              className: `framer-b8mnvt-container`,
                              nodeId: `IKVnIseo9`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              children: p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    __framer__variantAppearEffectEnabled: void 0,
                                    style: { width: `100%` },
                                    variant: $(`hShj36VLp`),
                                  },
                                  xxYZL9ilW: {
                                    __framer__targets: [
                                      { ref: P, target: `dFryYZrXT` },
                                      { ref: I, target: `NowfkZHs_` },
                                      { ref: L, target: `f_2p_ipRW` },
                                      { ref: R, target: `CW3LZyaEl` },
                                    ],
                                    variant: $(`xO__f8Ph9`),
                                  },
                                },
                                children: p(Wo, {
                                  __framer__animateOnce: !1,
                                  __framer__targets: [
                                    { ref: P, target: `GTnPEmSO0` },
                                    { ref: I, target: `RSLcjY9QB` },
                                    { ref: L, target: `HKiI1F4FX` },
                                    { ref: R, target: `LMziWVagA` },
                                  ],
                                  __framer__threshold: 0,
                                  __framer__variantAppearEffectEnabled: !0,
                                  height: `100%`,
                                  id: `IKVnIseo9`,
                                  layoutId: `IKVnIseo9`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: $(`OWT1cl9fN`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        k() &&
                          p(`div`, {
                            className: `framer-1gefizn hidden-v8h9ld`,
                            "data-framer-name": `Trigger 01`,
                            id: z,
                            ref: P,
                          }),
                        k() &&
                          p(`div`, {
                            className: `framer-11frfy8 hidden-v8h9ld`,
                            "data-framer-name": `Trigger 02`,
                            id: oe,
                            ref: I,
                          }),
                        k() &&
                          p(`div`, {
                            className: `framer-1pzolqa hidden-v8h9ld`,
                            "data-framer-name": `Trigger 03`,
                            id: le,
                            ref: L,
                          }),
                        k() &&
                          p(`div`, {
                            className: `framer-1bwzkq8 hidden-v8h9ld`,
                            "data-framer-name": `Trigger 04`,
                            id: ue,
                            ref: R,
                          }),
                      ],
                    }),
                    p(C.section, {
                      className: `framer-1n8qvwo`,
                      "data-framer-name": `Features Section`,
                      id: fe,
                      layout: w,
                      ref: me,
                      children: v(`div`, {
                        className: `framer-15c7csp`,
                        "data-framer-name": `Container `,
                        children: [
                          v(`div`, {
                            className: `framer-otjcjs`,
                            "data-framer-name": `Content`,
                            children: [
                              v(`div`, {
                                className: `framer-8x3o72`,
                                "data-framer-name": `Text`,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: { y: void 0 },
                                      xxYZL9ilW: {
                                        y:
                                          (u?.y || 0) + 0 + 8252.9 + 80 + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: p(U, {
                                      height: 32,
                                      y: (u?.y || 0) + 0 + 7675.4 + 120 + 0 + 0 + 0 + 0 + 0 + 0,
                                      children: p(Ro, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__exit: ds,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-1s6mh7a-container`,
                                        nodeId: `byKv1qP2m`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: p(q, {
                                          bU2YfweFO: `Features`,
                                          height: `100%`,
                                          id: `byKv1qP2m`,
                                          layoutId: `byKv1qP2m`,
                                          variant: $(`e_m2k17aE`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  p(G, {
                                    __fromCanvasComponent: !0,
                                    children: p(s, {
                                      children: p(`h2`, {
                                        className: `framer-styles-preset-1ydczzn`,
                                        "data-styles-preset": `ySWnAL9MB`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                        },
                                        children: `Driving Global Impact via Sustainable Agriculture`,
                                      }),
                                    }),
                                    className: `framer-1dq1bln`,
                                    "data-framer-name": `One platform complete agriculture solutions`,
                                    effect: ms,
                                    fonts: [`Inter`],
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                  p(Io, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: ds,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: p(s, {
                                      children: p(`p`, {
                                        className: `framer-styles-preset-1733zfo`,
                                        "data-styles-preset": `Mbm17cVdN`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `start`,
                                          "--framer-text-color": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                                        },
                                        children: `At Koranco Farms, we help farmers adopt smart and sustainable practices that improve crop quality, protect natural resources.`,
                                      }),
                                    }),
                                    className: `framer-1omy81c`,
                                    "data-framer-name": `One platform complete agriculture solutions`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              v(Vo, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__exit: ds,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1c5s08n`,
                                "data-framer-name": `Card Wrapper`,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        width: `calc(${u?.width || `100vw`} - 40px)`,
                                        y: void 0,
                                      },
                                      xxYZL9ilW: {
                                        width: `max((${u?.width || `100vw`} - 84px) / 2, 1px)`,
                                        y:
                                          (u?.y || 0) + 0 + 8252.9 + 80 + 0 + 0 + 0 + 0 + 324.4 + 0,
                                      },
                                    },
                                    children: p(U, {
                                      height: 241,
                                      width: `max((min(max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 2, 1px), 599px) - 24px) / 2, 1px)`,
                                      y: (u?.y || 0) + 0 + 7675.4 + 120 + 0 + 0 + 0 + 338.4 + 0,
                                      children: p(ge, {
                                        className: `framer-1j2vf51-container`,
                                        nodeId: `IPPfAXETy`,
                                        scopeId: `augiA20Il`,
                                        children: p(xa, {
                                          dhRQSIjAJ: la,
                                          gEXbSjDYL: `Our end-to-end agriculture solutions empower farmers and agribusinesses with integrated technology`,
                                          height: `100%`,
                                          id: `IPPfAXETy`,
                                          KNjv53KMN: `60%`,
                                          layoutId: `IPPfAXETy`,
                                          style: { width: `100%` },
                                          variant: $(`vEgDx1BpO`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        width: `calc(${u?.width || `100vw`} - 40px)`,
                                        y: void 0,
                                      },
                                      xxYZL9ilW: {
                                        width: `max((${u?.width || `100vw`} - 84px) / 2, 1px)`,
                                        y:
                                          (u?.y || 0) + 0 + 8252.9 + 80 + 0 + 0 + 0 + 0 + 324.4 + 0,
                                      },
                                    },
                                    children: p(U, {
                                      height: 241,
                                      width: `max((min(max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 2, 1px), 599px) - 24px) / 2, 1px)`,
                                      y: (u?.y || 0) + 0 + 7675.4 + 120 + 0 + 0 + 0 + 338.4 + 0,
                                      children: p(ge, {
                                        className: `framer-z89ur0-container`,
                                        nodeId: `iXnDUjkua`,
                                        scopeId: `augiA20Il`,
                                        children: p(xa, {
                                          dhRQSIjAJ: ko,
                                          gEXbSjDYL: `Sustainable methods ensuring long-term growth, stronger harvests, and resilient farming systems`,
                                          height: `100%`,
                                          id: `iXnDUjkua`,
                                          KNjv53KMN: `55%`,
                                          layoutId: `iXnDUjkua`,
                                          style: { width: `100%` },
                                          variant: $(`vEgDx1BpO`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p(B, {
                            breakpoint: y,
                            overrides: {
                              mwhVzaTs1: {
                                background: {
                                  alt: `Image`,
                                  fit: `fill`,
                                  intrinsicHeight: 1608,
                                  intrinsicWidth: 2019,
                                  pixelHeight: 1608,
                                  pixelWidth: 2019,
                                  sizes: `calc(${u?.width || `100vw`} - 40px)`,
                                  src: `../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?width=2019&height=1608`,
                                  srcSet: `../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?scale-down-to=512&width=2019&height=1608 512w,../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png 1024w,../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?width=2019&height=1608 2019w`,
                                },
                                fitImageDimension: `height`,
                              },
                              xxYZL9ilW: {
                                background: {
                                  alt: `Image`,
                                  fit: `fill`,
                                  intrinsicHeight: 1608,
                                  intrinsicWidth: 2019,
                                  loading: F((u?.y || 0) + 0 + 8252.9 + 80 + 0 + 0 + 611.4),
                                  pixelHeight: 1608,
                                  pixelWidth: 2019,
                                  sizes: `calc(${u?.width || `100vw`} - 60px)`,
                                  src: `../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?width=2019&height=1608`,
                                  srcSet: `../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?scale-down-to=512&width=2019&height=1608 512w,../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png 1024w,../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?width=2019&height=1608 2019w`,
                                },
                              },
                            },
                            children: p(Ko, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__exit: ds,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: `Image`,
                                fit: `fill`,
                                intrinsicHeight: 1608,
                                intrinsicWidth: 2019,
                                loading: F((u?.y || 0) + 0 + 7675.4 + 120 + 0 + 0),
                                pixelHeight: 1608,
                                pixelWidth: 2019,
                                sizes: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 2, 1px)`,
                                src: `../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?width=2019&height=1608`,
                                srcSet: `../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?scale-down-to=512&width=2019&height=1608 512w,../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png 1024w,../../assets/images/IPWo9z3eXexOEYGaQAQGTKE.png?width=2019&height=1608 2019w`,
                              },
                              className: `framer-9f1ptc`,
                            }),
                          }),
                        ],
                      }),
                    }),
                    p(C.section, {
                      className: `framer-16nyki1`,
                      "data-framer-name": `How It Work Section`,
                      layout: w,
                      children: v(`div`, {
                        className: `framer-idnzmn`,
                        "data-framer-name": `Container `,
                        children: [
                          v(`div`, {
                            className: `framer-1gp31jx`,
                            "data-framer-name": `Text`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 9649.3 + 80 + 0 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 32,
                                  y: (u?.y || 0) + 0 + 8494.8 + 120 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: ds,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1gia6j-container`,
                                    nodeId: `iyz3p4e8A`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(q, {
                                      bU2YfweFO: `How it works`,
                                      height: `100%`,
                                      id: `iyz3p4e8A`,
                                      layoutId: `iyz3p4e8A`,
                                      variant: $(`e_m2k17aE`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(`h2`, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                    },
                                    children: `Sustainable Change, Global Impact`,
                                  }),
                                }),
                                className: `framer-15kg4hv`,
                                "data-framer-name": `One platform complete agriculture solutions`,
                                effect: ms,
                                fonts: [`Inter`],
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v(`div`, {
                            className: `framer-1o1cdpq`,
                            "data-framer-name": `Profile Card Wrapper`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 9649.3 + 80 + 0 + 0 + 156.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 464,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 8494.8 + 120 + 0 + 0 + 166.4 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: ds,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-bpyvpv-container`,
                                    nodeId: `KUh22JlMp`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { variant: $(`a4cE_E6Ez`) },
                                        xxYZL9ilW: { variant: $(`a4cE_E6Ez`) },
                                      },
                                      children: p(ia, {
                                        height: `100%`,
                                        id: `KUh22JlMp`,
                                        layoutId: `KUh22JlMp`,
                                        nmSVSWDtk: `Step 01`,
                                        qteKYjZNQ: `Sign up on Farmio and easily set up your farm profile in just a few minutes.`,
                                        style: { width: `100%` },
                                        T3eCxJGHO: `Create your account to start farming smarter`,
                                        variant: $(`zWMGw8kbp`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 9649.3 + 80 + 0 + 0 + 156.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 464,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 8494.8 + 120 + 0 + 0 + 166.4 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: ys },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: bs,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-18hx5m4-container`,
                                    nodeId: `LN_vaabhO`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { variant: $(`a4cE_E6Ez`) },
                                        xxYZL9ilW: { variant: $(`a4cE_E6Ez`) },
                                      },
                                      children: p(ia, {
                                        height: `100%`,
                                        id: `LN_vaabhO`,
                                        layoutId: `LN_vaabhO`,
                                        nmSVSWDtk: `Step 02`,
                                        qteKYjZNQ: `Enter crop types, land size, and location to get personalized insights.`,
                                        style: { width: `100%` },
                                        T3eCxJGHO: `Add farm details for personalized insights`,
                                        variant: $(`zWMGw8kbp`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 9649.3 + 80 + 0 + 0 + 156.4 + 0 + 488,
                                  },
                                },
                                children: p(U, {
                                  height: 464,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 8494.8 + 120 + 0 + 0 + 166.4 + 0,
                                  children: p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      xxYZL9ilW: {
                                        __framer__animate: { transition: ys },
                                        __framer__exit: bs,
                                      },
                                    },
                                    children: p(Ro, {
                                      __framer__animate: { transition: xs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Z,
                                      __framer__exit: Ss,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-s2qsje-container`,
                                      nodeId: `dappfPsJD`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: p(B, {
                                        breakpoint: y,
                                        overrides: {
                                          mwhVzaTs1: { variant: $(`a4cE_E6Ez`) },
                                          xxYZL9ilW: { variant: $(`a4cE_E6Ez`) },
                                        },
                                        children: p(ia, {
                                          height: `100%`,
                                          id: `dappfPsJD`,
                                          layoutId: `dappfPsJD`,
                                          nmSVSWDtk: `Step 03`,
                                          qteKYjZNQ: `Receive ar to smart recommendations and manage your farm digitally.`,
                                          style: { width: `100%` },
                                          T3eCxJGHO: `Start optimizing your farm for better yields`,
                                          variant: $(`zWMGw8kbp`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p(C.section, {
                      className: `framer-yio06`,
                      "data-framer-name": `Gallery Section`,
                      id: he,
                      layout: w,
                      ref: _e,
                      children: v(`div`, {
                        className: `framer-12ubmov`,
                        "data-framer-name": `Container `,
                        children: [
                          v(`div`, {
                            className: `framer-4lbgdp`,
                            "data-framer-name": `Text`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 10917.7 + 80 + 0 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 32,
                                  y: (u?.y || 0) + 0 + 9365.2 + 120 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: ds,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1idfdj4-container`,
                                    nodeId: `JOWYlNrLu`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(q, {
                                      bU2YfweFO: `Our gallery`,
                                      height: `100%`,
                                      id: `JOWYlNrLu`,
                                      layoutId: `JOWYlNrLu`,
                                      variant: $(`e_m2k17aE`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(`h2`, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                    },
                                    children: `Inside our farming world`,
                                  }),
                                }),
                                className: `framer-ewbl2t`,
                                "data-framer-name": `One platform complete agriculture solutions`,
                                effect: ms,
                                fonts: [`Inter`],
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v(Vo, {
                            __framer__animate: { transition: Q },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__exit: ds,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-kyumdg`,
                            "data-framer-name": `Gallery Content`,
                            children: [
                              v(`div`, {
                                className: `framer-4lxps3`,
                                "data-framer-name": `Image Wrapper`,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          pixelHeight: 960,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?width=1080&height=960`,
                                          srcSet: `../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png 512w,../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?width=1080&height=960 1080w`,
                                        },
                                      },
                                      xxYZL9ilW: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          loading: F(
                                            (u?.y || 0) +
                                              0 +
                                              10917.7 +
                                              80 +
                                              0 +
                                              0 +
                                              156.4 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 960,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?width=1080&height=960`,
                                          srcSet: `../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png 512w,../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?width=1080&height=960 1080w`,
                                        },
                                      },
                                    },
                                    children: p(pe, {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        loading: F(
                                          (u?.y || 0) + 0 + 9365.2 + 120 + 0 + 0 + 166.4 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 960,
                                        pixelWidth: 1080,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?width=1080&height=960`,
                                        srcSet: `../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png 512w,../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/oYXjemMnzb9vtQvXsP0V7SX4Dk.png?width=1080&height=960 1080w`,
                                      },
                                      className: `framer-rrmzxe`,
                                      id: `rrmzxe`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Cs,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: S,
                                    }),
                                  }),
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 862,
                                          intrinsicWidth: 720,
                                          pixelHeight: 862,
                                          pixelWidth: 720,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png`,
                                          srcSet: `../../assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png 720w`,
                                        },
                                      },
                                      xxYZL9ilW: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 862,
                                          intrinsicWidth: 720,
                                          loading: F(
                                            (u?.y || 0) +
                                              0 +
                                              10917.7 +
                                              80 +
                                              0 +
                                              0 +
                                              156.4 +
                                              0 +
                                              0 +
                                              320
                                          ),
                                          pixelHeight: 862,
                                          pixelWidth: 720,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png`,
                                          srcSet: `../../assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png 720w`,
                                        },
                                      },
                                    },
                                    children: p(pe, {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 862,
                                        intrinsicWidth: 720,
                                        loading: F(
                                          (u?.y || 0) +
                                            0 +
                                            9365.2 +
                                            120 +
                                            0 +
                                            0 +
                                            166.4 +
                                            0 +
                                            0 +
                                            320
                                        ),
                                        pixelHeight: 862,
                                        pixelWidth: 720,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png`,
                                        srcSet: `../../assets/images/7XKnGc026abQfYS8j1Rdxn5RRU.png 720w`,
                                      },
                                      className: `framer-118pc8y`,
                                      id: `118pc8y`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Cs,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: S,
                                    }),
                                  }),
                                ],
                              }),
                              v(`div`, {
                                className: `framer-l8tsdh`,
                                "data-framer-name": `Image Wrapper`,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 1293,
                                          intrinsicWidth: 1080,
                                          pixelHeight: 1293,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png?width=1080&height=1293`,
                                          srcSet: `../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png 855w,../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png?width=1080&height=1293 1080w`,
                                        },
                                      },
                                      xxYZL9ilW: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 1293,
                                          intrinsicWidth: 1080,
                                          loading: F(
                                            (u?.y || 0) +
                                              0 +
                                              10917.7 +
                                              80 +
                                              0 +
                                              0 +
                                              156.4 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1293,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png?width=1080&height=1293`,
                                          srcSet: `../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png 855w,../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png?width=1080&height=1293 1080w`,
                                        },
                                      },
                                    },
                                    children: p(pe, {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 1293,
                                        intrinsicWidth: 1080,
                                        loading: F(
                                          (u?.y || 0) + 0 + 9365.2 + 120 + 0 + 0 + 166.4 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 1293,
                                        pixelWidth: 1080,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png?width=1080&height=1293`,
                                        srcSet: `../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png 855w,../../assets/images/6gwj2IyXc941vE8Zxy3orojMs.png?width=1080&height=1293 1080w`,
                                      },
                                      className: `framer-1dt02dc`,
                                      id: `1dt02dc`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Cs,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: S,
                                    }),
                                  }),
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 960,
                                          intrinsicWidth: 1080,
                                          pixelHeight: 960,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?width=1080&height=960`,
                                          srcSet: `../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png 512w,../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?width=1080&height=960 1080w`,
                                        },
                                      },
                                      xxYZL9ilW: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 960,
                                          intrinsicWidth: 1080,
                                          loading: F(
                                            (u?.y || 0) +
                                              0 +
                                              10917.7 +
                                              80 +
                                              0 +
                                              0 +
                                              156.4 +
                                              0 +
                                              0 +
                                              431
                                          ),
                                          pixelHeight: 960,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?width=1080&height=960`,
                                          srcSet: `../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png 512w,../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?width=1080&height=960 1080w`,
                                        },
                                      },
                                    },
                                    children: p(pe, {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 960,
                                        intrinsicWidth: 1080,
                                        loading: F(
                                          (u?.y || 0) +
                                            0 +
                                            9365.2 +
                                            120 +
                                            0 +
                                            0 +
                                            166.4 +
                                            0 +
                                            0 +
                                            431
                                        ),
                                        pixelHeight: 960,
                                        pixelWidth: 1080,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?width=1080&height=960`,
                                        srcSet: `../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png 512w,../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/w6fqwux0gdSLbPtHpejYUgu8haA.png?width=1080&height=960 1080w`,
                                      },
                                      className: `framer-zmoaur`,
                                      id: `zmoaur`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Cs,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: S,
                                    }),
                                  }),
                                ],
                              }),
                              p(`div`, {
                                className: `framer-12qqazz`,
                                "data-framer-name": `Image Wrapper`,
                                children: p(B, {
                                  breakpoint: y,
                                  overrides: {
                                    mwhVzaTs1: {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 2253,
                                        intrinsicWidth: 1083,
                                        pixelHeight: 2253,
                                        pixelWidth: 1083,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png?width=1083&height=2253`,
                                        srcSet: `../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png 984w,../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png?width=1083&height=2253 1083w`,
                                      },
                                    },
                                    xxYZL9ilW: {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 2253,
                                        intrinsicWidth: 1083,
                                        loading: F(
                                          (u?.y || 0) + 0 + 10917.7 + 80 + 0 + 0 + 156.4 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 2253,
                                        pixelWidth: 1083,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png?width=1083&height=2253`,
                                        srcSet: `../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png 984w,../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png?width=1083&height=2253 1083w`,
                                      },
                                    },
                                  },
                                  children: p(pe, {
                                    background: {
                                      alt: `Gallery Image`,
                                      fit: `fill`,
                                      intrinsicHeight: 2253,
                                      intrinsicWidth: 1083,
                                      loading: F(
                                        (u?.y || 0) + 0 + 9365.2 + 120 + 0 + 0 + 166.4 + 0 + 0 + 0
                                      ),
                                      pixelHeight: 2253,
                                      pixelWidth: 1083,
                                      sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                      src: `../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png?width=1083&height=2253`,
                                      srcSet: `../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png 984w,../../assets/images/DSmJZc0j65RxDJDSPJ8HYpBPCQA.png?width=1083&height=2253 1083w`,
                                    },
                                    className: `framer-1rinvnu`,
                                    id: `1rinvnu`,
                                    lightbox: {
                                      backdrop: `rgba(0, 0, 0, 0.8)`,
                                      maxWidth: 800,
                                      padding: 20,
                                      transition: Cs,
                                      zIndex: 10,
                                    },
                                    lightboxClassName: S,
                                  }),
                                }),
                              }),
                              v(`div`, {
                                className: `framer-b1ck3a`,
                                "data-framer-name": `Image Wrapper`,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 960,
                                          intrinsicWidth: 1080,
                                          pixelHeight: 960,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?width=1080&height=960`,
                                          srcSet: `../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png 512w,../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?width=1080&height=960 1080w`,
                                        },
                                      },
                                      xxYZL9ilW: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 960,
                                          intrinsicWidth: 1080,
                                          loading: F(
                                            (u?.y || 0) +
                                              0 +
                                              10917.7 +
                                              80 +
                                              0 +
                                              0 +
                                              156.4 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 960,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?width=1080&height=960`,
                                          srcSet: `../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png 512w,../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?width=1080&height=960 1080w`,
                                        },
                                      },
                                    },
                                    children: p(pe, {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 960,
                                        intrinsicWidth: 1080,
                                        loading: F(
                                          (u?.y || 0) + 0 + 9365.2 + 120 + 0 + 0 + 166.4 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 960,
                                        pixelWidth: 1080,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?width=1080&height=960`,
                                        srcSet: `../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png 512w,../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?scale-down-to=1024&width=1080&height=960 1024w,../../assets/images/XVYKmKt8ypTr26u52MgZ2TID8.png?width=1080&height=960 1080w`,
                                      },
                                      className: `framer-w7xvfx`,
                                      id: `w7xvfx`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Cs,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: S,
                                    }),
                                  }),
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 1293,
                                          intrinsicWidth: 1080,
                                          pixelHeight: 1293,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png?width=1080&height=1293`,
                                          srcSet: `../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png 855w,../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png?width=1080&height=1293 1080w`,
                                        },
                                      },
                                      xxYZL9ilW: {
                                        background: {
                                          alt: `Gallery Image`,
                                          fit: `fill`,
                                          intrinsicHeight: 1293,
                                          intrinsicWidth: 1080,
                                          loading: F(
                                            (u?.y || 0) +
                                              0 +
                                              10917.7 +
                                              80 +
                                              0 +
                                              0 +
                                              156.4 +
                                              0 +
                                              0 +
                                              320
                                          ),
                                          pixelHeight: 1293,
                                          pixelWidth: 1080,
                                          sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                          src: `../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png?width=1080&height=1293`,
                                          srcSet: `../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png 855w,../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png?width=1080&height=1293 1080w`,
                                        },
                                      },
                                    },
                                    children: p(pe, {
                                      background: {
                                        alt: `Gallery Image`,
                                        fit: `fill`,
                                        intrinsicHeight: 1293,
                                        intrinsicWidth: 1080,
                                        loading: F(
                                          (u?.y || 0) +
                                            0 +
                                            9365.2 +
                                            120 +
                                            0 +
                                            0 +
                                            166.4 +
                                            0 +
                                            0 +
                                            320
                                        ),
                                        pixelHeight: 1293,
                                        pixelWidth: 1080,
                                        sizes: `min(max(${u?.width || `100vw`} / 4, 1px), ${u?.width || `100vw`} * 0.3)`,
                                        src: `../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png?width=1080&height=1293`,
                                        srcSet: `../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png 855w,../../assets/images/DLRQ9dumihhqI477xE98hEDJwV4.png?width=1080&height=1293 1080w`,
                                      },
                                      className: `framer-171m8mu`,
                                      id: `171m8mu`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Cs,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: S,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p(C.section, {
                      className: `framer-nwzn5b`,
                      "data-framer-name": `Our team Section`,
                      id: H,
                      layout: w,
                      ref: ye,
                      children: v(`div`, {
                        className: `framer-1t7r390`,
                        "data-framer-name": `Container `,
                        children: [
                          v(`div`, {
                            className: `framer-1y0q1co`,
                            "data-framer-name": `Text`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 11945.1 + 40 + 0 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 32,
                                  y: (u?.y || 0) + 0 + 10462.6 + 60 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: ds,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1c0y7vd-container`,
                                    nodeId: `mswlwsnUg`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(q, {
                                      bU2YfweFO: `Our team`,
                                      height: `100%`,
                                      id: `mswlwsnUg`,
                                      layoutId: `mswlwsnUg`,
                                      variant: $(`e_m2k17aE`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(`h2`, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                    },
                                    children: `Our team members`,
                                  }),
                                }),
                                className: `framer-tmveig`,
                                "data-framer-name": `One platform complete agriculture solutions`,
                                effect: ms,
                                fonts: [`Inter`],
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v(`div`, {
                            className: `framer-1cicmm6`,
                            "data-framer-name": `Profile Card Wrapper`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 11945.1 + 40 + 0 + 0 + 156.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 532,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 10462.6 + 60 + 0 + 0 + 166.4 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: gs,
                                    __framer__exit: _s,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-u8rif7-container`,
                                    nodeId: `yWbRZSGih`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(qa, {
                                      height: `100%`,
                                      id: `yWbRZSGih`,
                                      layoutId: `yWbRZSGih`,
                                      style: { width: `100%` },
                                      VKqTXjKvs: `Chief Executive Officer (CEO)`,
                                      width: `100%`,
                                      ZDumY1Cpk: `Sarah Wilson`,
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 11945.1 + 40 + 0 + 0 + 156.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 532,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 10462.6 + 60 + 0 + 0 + 166.4 + 0,
                                  children: p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        __framer__animate: { transition: Q },
                                        __framer__exit: _s,
                                      },
                                    },
                                    children: p(Ro, {
                                      __framer__animate: { transition: ys },
                                      __framer__animateOnce: !0,
                                      __framer__enter: gs,
                                      __framer__exit: ws,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-kdjser-container`,
                                      nodeId: `LX3LvUNlE`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: p(qa, {
                                        height: `100%`,
                                        id: `LX3LvUNlE`,
                                        Jv8gifP_P: vs(
                                          {
                                            pixelHeight: 1596,
                                            pixelWidth: 1272,
                                            src: `../../assets/images/O2xOHPRp2AADEUZgV6DsLAR97k.png?width=1272&height=1596`,
                                            srcSet: `../../assets/images/O2xOHPRp2AADEUZgV6DsLAR97k.png 816w,../../assets/images/O2xOHPRp2AADEUZgV6DsLAR97k.png?width=1272&height=1596 1272w`,
                                          },
                                          `Image`
                                        ),
                                        layoutId: `LX3LvUNlE`,
                                        style: { width: `100%` },
                                        VKqTXjKvs: `Head of Agricultural `,
                                        width: `100%`,
                                        ZDumY1Cpk: `Michael Brown`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `max((${u?.width || `100vw`} - 84px) / 2, 50px)`,
                                    y: (u?.y || 0) + 0 + 11945.1 + 40 + 0 + 0 + 156.4 + 0 + 556,
                                  },
                                },
                                children: p(U, {
                                  height: 532,
                                  width: `max((min(${u?.width || `100vw`} - 60px, 1320px) - 48px) / 3, 1px)`,
                                  y: (u?.y || 0) + 0 + 10462.6 + 60 + 0 + 0 + 166.4 + 0,
                                  children: p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: {
                                        __framer__animate: { transition: Q },
                                        __framer__exit: _s,
                                      },
                                      xxYZL9ilW: {
                                        __framer__animate: { transition: ys },
                                        __framer__exit: ws,
                                      },
                                    },
                                    children: p(Ro, {
                                      __framer__animate: { transition: xs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: gs,
                                      __framer__exit: Ts,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1h4x6o3-container`,
                                      nodeId: `wBpBJthnD`,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: p(qa, {
                                        height: `100%`,
                                        id: `wBpBJthnD`,
                                        Jv8gifP_P: vs(
                                          {
                                            pixelHeight: 1596,
                                            pixelWidth: 1272,
                                            src: `../../assets/images/pBNrv3GP1QZlbk4tGkRlMMLbT0.png?width=1272&height=1596`,
                                            srcSet: `../../assets/images/pBNrv3GP1QZlbk4tGkRlMMLbT0.png 816w,../../assets/images/pBNrv3GP1QZlbk4tGkRlMMLbT0.png?width=1272&height=1596 1272w`,
                                          },
                                          `Image`
                                        ),
                                        layoutId: `wBpBJthnD`,
                                        style: { width: `100%` },
                                        VKqTXjKvs: `Chief Technology Officer `,
                                        width: `100%`,
                                        ZDumY1Cpk: `John Carter`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p(C.section, {
                      className: `framer-11ti6w4`,
                      "data-framer-name": `Our testimonials Section`,
                      id: Ce,
                      layout: w,
                      ref: W,
                      children: v(`div`, {
                        className: `framer-1cxshui`,
                        "data-framer-name": `Container `,
                        children: [
                          v(`div`, {
                            className: `framer-fyfzgt`,
                            "data-framer-name": `Title & Text`,
                            children: [
                              v(`div`, {
                                className: `framer-7xrsbn`,
                                "data-framer-name": `Title `,
                                children: [
                                  p(B, {
                                    breakpoint: y,
                                    overrides: {
                                      mwhVzaTs1: { y: void 0 },
                                      xxYZL9ilW: {
                                        y:
                                          (u?.y || 0) +
                                          0 +
                                          13309.5 +
                                          80 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          33.6 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: p(U, {
                                      height: 32,
                                      y:
                                        (u?.y || 0) +
                                        0 +
                                        11341 +
                                        120 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        29.6 +
                                        0 +
                                        0,
                                      children: p(Ro, {
                                        __framer__animate: { transition: Q },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__exit: ds,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-a870gz-container`,
                                        nodeId: `MvWgjLTvX`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: p(q, {
                                          bU2YfweFO: `Testimonials`,
                                          height: `100%`,
                                          id: `MvWgjLTvX`,
                                          layoutId: `MvWgjLTvX`,
                                          variant: $(`e_m2k17aE`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  p(G, {
                                    __fromCanvasComponent: !0,
                                    children: p(s, {
                                      children: p(`h2`, {
                                        className: `framer-styles-preset-1ydczzn`,
                                        "data-styles-preset": `ySWnAL9MB`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                        },
                                        children: `What farmers say about Koranco Farms`,
                                      }),
                                    }),
                                    className: `framer-1d08c9o`,
                                    "data-framer-name": `One platform complete agriculture solutions`,
                                    effect: ms,
                                    fonts: [`Inter`],
                                    verticalAlignment: `center`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              p(Io, {
                                __framer__animate: { transition: Q },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__exit: ds,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: p(s, {
                                  children: p(`p`, {
                                    className: `framer-styles-preset-1733zfo`,
                                    "data-styles-preset": `Mbm17cVdN`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `start`,
                                      "--framer-text-color": `var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, rgb(101, 101, 101))`,
                                    },
                                    children: `Real experiences from farmers who trust Koranco Farms to improve their farms and harvests.`,
                                  }),
                                }),
                                className: `framer-x72g8a`,
                                "data-framer-name": `One platform complete agriculture solutions`,
                                fonts: [`Inter`],
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          p(B, {
                            breakpoint: y,
                            overrides: {
                              mwhVzaTs1: {
                                width: `calc(${u?.width || `100vw`} - 40px)`,
                                y: void 0,
                              },
                              xxYZL9ilW: {
                                width: `calc(${u?.width || `100vw`} - 60px)`,
                                y: (u?.y || 0) + 0 + 13309.5 + 80 + 0 + 0 + 190,
                              },
                            },
                            children: p(U, {
                              height: 400,
                              width: `min(${u?.width || `100vw`} - 60px, 1320px)`,
                              y: (u?.y || 0) + 0 + 11341 + 120 + 0 + 0 + 196,
                              children: p(ge, {
                                className: `framer-1kuyi2q-container`,
                                nodeId: `SQ1GEPf6V`,
                                scopeId: `augiA20Il`,
                                children: p(B, {
                                  breakpoint: y,
                                  overrides: {
                                    mwhVzaTs1: { variant: $(`rkOcuLlxy`) },
                                    xxYZL9ilW: { variant: $(`P7CUQFsoX`) },
                                  },
                                  children: p(Kr, {
                                    height: `100%`,
                                    id: `SQ1GEPf6V`,
                                    layoutId: `SQ1GEPf6V`,
                                    style: { width: `100%` },
                                    variant: $(`stSXa2Quu`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    p(C.section, {
                      className: `framer-1s40k6s`,
                      "data-framer-name": `Faq Section`,
                      id: Te,
                      layout: w,
                      ref: Ee,
                      children: v(`div`, {
                        className: `framer-1l5x3tl`,
                        "data-framer-name": `Container`,
                        children: [
                          v(`div`, {
                            className: `framer-vn53vi`,
                            "data-framer-name": `Text`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: { y: void 0 },
                                  xxYZL9ilW: {
                                    y: (u?.y || 0) + 0 + 14099.5 + 80 + 0 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 32,
                                  y: (u?.y || 0) + 0 + 12217 + 120 + 0 + 0 + 0 + 0 + 0,
                                  children: p(Ro, {
                                    __framer__animate: { transition: Q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Z,
                                    __framer__exit: ds,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-kdqx67-container`,
                                    nodeId: `YxEI7esia`,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: p(q, {
                                      bU2YfweFO: `Faqs`,
                                      height: `100%`,
                                      id: `YxEI7esia`,
                                      layoutId: `YxEI7esia`,
                                      variant: $(`e_m2k17aE`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              p(G, {
                                __fromCanvasComponent: !0,
                                children: p(s, {
                                  children: p(`h2`, {
                                    className: `framer-styles-preset-1ydczzn`,
                                    "data-styles-preset": `ySWnAL9MB`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                                    },
                                    children: `Got questions? We’ve got answers`,
                                  }),
                                }),
                                className: `framer-i9mgh9`,
                                "data-framer-name": `Got Questions?\u2028We’ve Got Answers`,
                                effect: ms,
                                fonts: [`Inter`],
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          v(Vo, {
                            __framer__animate: { transition: Q },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__exit: ds,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-pt49vi`,
                            "data-framer-name": `Content`,
                            children: [
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    width: `calc(${u?.width || `100vw`} - 40px)`,
                                    y: void 0,
                                  },
                                  xxYZL9ilW: {
                                    width: `calc(${u?.width || `100vw`} - 60px)`,
                                    y: (u?.y || 0) + 0 + 14099.5 + 80 + 0 + 0 + 160.4 + 0 + 0,
                                  },
                                },
                                children: p(U, {
                                  height: 645,
                                  width: `min(max((min(${u?.width || `100vw`} - 60px, 1320px) - 24px) / 2, 1px), 648px)`,
                                  y: (u?.y || 0) + 0 + 12217 + 120 + 0 + 0 + 166.4 + 0,
                                  children: p(ge, {
                                    className: `framer-1fxesjo-container`,
                                    nodeId: `PA9zQvwoO`,
                                    scopeId: `augiA20Il`,
                                    children: p(B, {
                                      breakpoint: y,
                                      overrides: {
                                        mwhVzaTs1: { style: { width: `100%` } },
                                        xxYZL9ilW: { style: { width: `100%` } },
                                      },
                                      children: p(Qe, {
                                        height: `100%`,
                                        id: `PA9zQvwoO`,
                                        layoutId: `PA9zQvwoO`,
                                        style: { maxWidth: `100%`, width: `100%` },
                                        variant: $(`SlicHdbiy`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              p(B, {
                                breakpoint: y,
                                overrides: {
                                  mwhVzaTs1: {
                                    background: {
                                      alt: `Image`,
                                      fit: `fill`,
                                      intrinsicHeight: 1296,
                                      intrinsicWidth: 1296,
                                      pixelHeight: 1296,
                                      pixelWidth: 1296,
                                      sizes: `calc(${u?.width || `100vw`} - 40px)`,
                                      src: `../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?width=1296&height=1296`,
                                      srcSet: `../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?scale-down-to=512&width=1296&height=1296 512w,../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png 1024w,../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?width=1296&height=1296 1296w`,
                                    },
                                    fitImageDimension: `height`,
                                  },
                                  xxYZL9ilW: {
                                    background: {
                                      alt: `Image`,
                                      fit: `fill`,
                                      intrinsicHeight: 1296,
                                      intrinsicWidth: 1296,
                                      loading: F(
                                        (u?.y || 0) + 0 + 14099.5 + 80 + 0 + 0 + 160.4 + 0 + 677
                                      ),
                                      pixelHeight: 1296,
                                      pixelWidth: 1296,
                                      sizes: `calc(${u?.width || `100vw`} - 60px)`,
                                      src: `../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?width=1296&height=1296`,
                                      srcSet: `../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?scale-down-to=512&width=1296&height=1296 512w,../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png 1024w,../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?width=1296&height=1296 1296w`,
                                    },
                                    fitImageDimension: `height`,
                                  },
                                },
                                children: p(pe, {
                                  background: {
                                    alt: `Image`,
                                    fit: `fill`,
                                    intrinsicHeight: 1296,
                                    intrinsicWidth: 1296,
                                    loading: F((u?.y || 0) + 0 + 12217 + 120 + 0 + 0 + 166.4 + 0),
                                    pixelHeight: 1296,
                                    pixelWidth: 1296,
                                    sizes: `min(max((min(${u?.width || `100vw`} - 60px, 1320px) - 24px) / 2, 1px), 648px)`,
                                    src: `../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?width=1296&height=1296`,
                                    srcSet: `../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?scale-down-to=512&width=1296&height=1296 512w,../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png 1024w,../../assets/images/oQHhmcHGOAYy6mYwmkX5upOaDcI.png?width=1296&height=1296 1296w`,
                                  },
                                  className: `framer-ers785`,
                                  "data-framer-name": `Image`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Abx1J.framer-lux5qc, .framer-Abx1J .framer-lux5qc { display: block; }`,
        `.framer-Abx1J.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-f46ea120-695a-4096-943a-888f469a6d39, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Abx1J .framer-oyezyq-container, .framer-Abx1J .framer-1viykoh-container, .framer-Abx1J .framer-2h0ddy-container, .framer-Abx1J .framer-8ysqp8-container, .framer-Abx1J .framer-17qmcnz-container, .framer-Abx1J .framer-1etizqv-container, .framer-Abx1J .framer-1rs5hu0-container, .framer-Abx1J .framer-1gwjpvr-container, .framer-Abx1J .framer-1a5xlva-container, .framer-Abx1J .framer-1s6mh7a-container, .framer-Abx1J .framer-1gia6j-container, .framer-Abx1J .framer-1idfdj4-container, .framer-Abx1J .framer-1c0y7vd-container, .framer-Abx1J .framer-a870gz-container, .framer-Abx1J .framer-kdqx67-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Abx1J .framer-1t476ww { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 184px 30px 60px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-2z9c8f { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-Abx1J .framer-205bfl { background-color: var(--token-758051b4-1516-494d-8a08-3fb09232b834, #000000); flex: none; height: 100%; left: 0px; opacity: 0.73; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-Abx1J .framer-15fd9r5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 128px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Abx1J .framer-16q878s, .framer-Abx1J .framer-1o1cdpq, .framer-Abx1J .framer-1cicmm6, .framer-Abx1J .framer-pt49vi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1qxb4xb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-zklbkt { --border-bottom-width: 1px; --border-color: var(--token-a3b15fb3-46e8-4998-b6a3-fad1b32b8064, rgba(187, 187, 187, 0.15)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(12px); align-content: center; align-items: center; backdrop-filter: blur(12px); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 12px 5px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Abx1J .framer-1vsv3jl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Abx1J .framer-bj5c0h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 630px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Abx1J .framer-1d9ccya, .framer-Abx1J .framer-fyfzgt { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1xl0yr3 { --border-bottom-width: 1px; --border-color: var(--token-a3b15fb3-46e8-4998-b6a3-fad1b32b8064, rgba(187, 187, 187, 0.15)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(12px); align-content: flex-start; align-items: flex-start; backdrop-filter: blur(12px); background-color: var(--token-ec595db1-18c9-427a-8a4d-369f3a280aab, rgba(255, 255, 255, 0.1)); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 238px; overflow: hidden; padding: 10px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Abx1J .framer-cfz5sf-container { flex: none; height: 130px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-9l1xr4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-gz2zxj { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Abx1J .framer-1ku1a9f { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Abx1J .framer-1yfkwt7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 350px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Abx1J .framer-1mcefzi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-787wwg { align-content: center; align-items: center; background-color: var(--token-a1c41d9c-b762-494e-a655-1652125c3378, #e3e4d4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 30px 120px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-67kh0e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1o60xwq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1s3963 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 636px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-g26xpd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1vmeqvd, .framer-Abx1J .framer-160vio, .framer-Abx1J .framer-154dvkr { flex: none; height: 86px; position: relative; width: 3px; }`,
        `.framer-Abx1J .framer-g3pse6, .framer-Abx1J .framer-16nyki1 { align-content: center; align-items: center; background-color: var(--token-ab24d608-88fd-49a5-915e-723479f59419, #f2f3ee); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 30px 120px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-8f5rhv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-sz8pmm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 47%; z-index: 1; }`,
        `.framer-Abx1J .framer-efwfve { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-5bp34i, .framer-Abx1J .framer-1omy81c, .framer-Abx1J .framer-tmveig, .framer-Abx1J .framer-1d08c9o { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-olq237 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-jtb858-container, .framer-Abx1J .framer-sdzxjw-container, .framer-Abx1J .framer-u53b40-container, .framer-Abx1J .framer-1j2vf51-container, .framer-Abx1J .framer-z89ur0-container, .framer-Abx1J .framer-bpyvpv-container, .framer-Abx1J .framer-18hx5m4-container, .framer-Abx1J .framer-s2qsje-container, .framer-Abx1J .framer-u8rif7-container, .framer-Abx1J .framer-kdjser-container, .framer-Abx1J .framer-1h4x6o3-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-xa9rc0 { align-content: center; align-items: center; background-color: var(--token-a1c41d9c-b762-494e-a655-1652125c3378, #e3e4d4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-b8mnvt-container { flex: none; height: 100vh; position: sticky; top: 40px; width: 100%; z-index: 1; }`,
        `.framer-Abx1J .framer-1gefizn, .framer-Abx1J .framer-11frfy8, .framer-Abx1J .framer-1pzolqa, .framer-Abx1J .framer-1bwzkq8 { flex: none; height: 100vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1n8qvwo { align-content: center; align-items: center; background-color: var(--token-a1c41d9c-b762-494e-a655-1652125c3378, #e3e4d4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 30px 120px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-15c7csp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-otjcjs { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 599px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-8x3o72 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1dq1bln { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 768px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1c5s08n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-9f1ptc { align-self: stretch; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-idnzmn, .framer-Abx1J .framer-1t7r390 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1gp31jx, .framer-Abx1J .framer-1y0q1co, .framer-Abx1J .framer-vn53vi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-15kg4hv, .framer-Abx1J .framer-ewbl2t { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 625px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-yio06 { align-content: center; align-items: center; background-color: var(--token-a1c41d9c-b762-494e-a655-1652125c3378, #e3e4d4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-12ubmov { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-4lbgdp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 30px 0px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-kyumdg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-4lxps3, .framer-Abx1J .framer-l8tsdh, .framer-Abx1J .framer-b1ck3a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 30%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-rrmzxe, .framer-Abx1J .framer-zmoaur, .framer-Abx1J .framer-w7xvfx { aspect-ratio: 1.125 / 1; cursor: pointer; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Abx1J .framer-118pc8y, .framer-Abx1J .framer-1dt02dc, .framer-Abx1J .framer-171m8mu { aspect-ratio: 0.8352668213457076 / 1; cursor: pointer; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Abx1J .framer-12qqazz { align-content: center; align-items: center; aspect-ratio: 0.4793608521970706 / 1; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; max-width: 30%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-1rinvnu { cursor: pointer; flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Abx1J .framer-nwzn5b { align-content: center; align-items: center; background-color: var(--token-a1c41d9c-b762-494e-a655-1652125c3378, #e3e4d4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 30px 120px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-11ti6w4 { align-content: center; align-items: center; background-color: var(--token-ab24d608-88fd-49a5-915e-723479f59419, #f2f3ee); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 30px 160px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1cxshui { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-7xrsbn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 529px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-x72g8a { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 465px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-1kuyi2q-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1s40k6s { align-content: center; align-items: center; background-color: var(--token-f46ea120-695a-4096-943a-888f469a6d39, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 30px 120px 30px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1l5x3tl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: flex-start; max-width: 1320px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-i9mgh9 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 480px; position: relative; width: 100%; }`,
        `.framer-Abx1J .framer-1fxesjo-container { flex: 1 0 0px; height: auto; max-width: 648px; position: relative; width: 1px; }`,
        `.framer-Abx1J .framer-ers785 { align-self: stretch; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: auto; max-width: 648px; position: relative; width: 1px; }`,
        ...ar,
        ...Le,
        ...ke,
        ...ze,
        `.framer-Abx1J[data-border="true"]::after, .framer-Abx1J [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 768px) and (max-width: 1199.98px) { .framer-Abx1J.framer-72rtr7 { width: 768px; } .framer-Abx1J .framer-1t476ww { height: min-content; padding: 140px 30px 60px 30px; } .framer-Abx1J .framer-15fd9r5 { align-content: center; align-items: center; gap: 80px; max-width: 100%; } .framer-Abx1J .framer-bj5c0h { max-width: 600px; } .framer-Abx1J .framer-787wwg, .framer-Abx1J .framer-g3pse6, .framer-Abx1J .framer-1n8qvwo, .framer-Abx1J .framer-16nyki1, .framer-Abx1J .framer-1s40k6s { padding: 80px 30px 80px 30px; } .framer-Abx1J .framer-67kh0e, .framer-Abx1J .framer-8f5rhv, .framer-Abx1J .framer-idnzmn, .framer-Abx1J .framer-12ubmov, .framer-Abx1J .framer-1t7r390, .framer-Abx1J .framer-1cxshui, .framer-Abx1J .framer-1l5x3tl { gap: 46px; max-width: 100%; } .framer-Abx1J .framer-1o60xwq { flex-direction: column; gap: 20px; justify-content: center; } .framer-Abx1J .framer-1s3963, .framer-Abx1J .framer-1fxesjo-container { flex: none; max-width: unset; width: 100%; } .framer-Abx1J .framer-sz8pmm { left: unset; position: relative; top: unset; width: 100%; } .framer-Abx1J .framer-5bp34i { max-width: 485px; } .framer-Abx1J .framer-olq237 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; } .framer-Abx1J .framer-jtb858-container, .framer-Abx1J .framer-sdzxjw-container, .framer-Abx1J .framer-u53b40-container, .framer-Abx1J .framer-bpyvpv-container, .framer-Abx1J .framer-18hx5m4-container, .framer-Abx1J .framer-s2qsje-container, .framer-Abx1J .framer-u8rif7-container, .framer-Abx1J .framer-kdjser-container, .framer-Abx1J .framer-1h4x6o3-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-Abx1J .framer-15c7csp { flex-direction: column; gap: 46px; max-width: 100%; } .framer-Abx1J .framer-otjcjs { flex: none; gap: 46px; max-width: unset; width: 100%; } .framer-Abx1J .framer-1dq1bln, .framer-Abx1J .framer-1omy81c { max-width: 550px; } .framer-Abx1J .framer-9f1ptc { align-self: unset; flex: none; height: 625px; width: 100%; } .framer-Abx1J .framer-1gp31jx, .framer-Abx1J .framer-4lbgdp, .framer-Abx1J .framer-1y0q1co, .framer-Abx1J .framer-7xrsbn { gap: 16px; } .framer-Abx1J .framer-15kg4hv { max-width: unset; } .framer-Abx1J .framer-1o1cdpq, .framer-Abx1J .framer-1cicmm6 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); } .framer-Abx1J .framer-yio06 { padding: 80px 0px 40px 0px; } .framer-Abx1J .framer-nwzn5b { padding: 40px 30px 80px 30px; } .framer-Abx1J .framer-11ti6w4 { padding: 80px 30px 120px 30px; } .framer-Abx1J .framer-x72g8a { max-width: 280px; } .framer-Abx1J .framer-i9mgh9 { max-width: 364px; } .framer-Abx1J .framer-pt49vi { flex-direction: column; gap: 32px; } .framer-Abx1J .framer-ers785 { align-self: unset; flex: none; max-width: unset; width: 100%; }}`,
        `@media (max-width: 767.98px) { .framer-Abx1J.framer-72rtr7 { width: 390px; } .framer-Abx1J .framer-1t476ww { height: min-content; padding: 120px 20px 60px 20px; } .framer-Abx1J .framer-15fd9r5, .framer-Abx1J .framer-8f5rhv, .framer-Abx1J .framer-idnzmn, .framer-Abx1J .framer-12ubmov, .framer-Abx1J .framer-1t7r390, .framer-Abx1J .framer-1cxshui, .framer-Abx1J .framer-1l5x3tl { gap: 40px; max-width: 100%; } .framer-Abx1J .framer-bj5c0h, .framer-Abx1J .framer-1dq1bln, .framer-Abx1J .framer-15kg4hv, .framer-Abx1J .framer-ewbl2t, .framer-Abx1J .framer-i9mgh9 { max-width: unset; } .framer-Abx1J .framer-1d9ccya { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: center; } .framer-Abx1J .framer-1xl0yr3, .framer-Abx1J .framer-1s3963, .framer-Abx1J .framer-jtb858-container, .framer-Abx1J .framer-sdzxjw-container, .framer-Abx1J .framer-u53b40-container, .framer-Abx1J .framer-1j2vf51-container, .framer-Abx1J .framer-z89ur0-container, .framer-Abx1J .framer-bpyvpv-container, .framer-Abx1J .framer-18hx5m4-container, .framer-Abx1J .framer-s2qsje-container, .framer-Abx1J .framer-u8rif7-container, .framer-Abx1J .framer-kdjser-container, .framer-Abx1J .framer-1h4x6o3-container { flex: none; width: 100%; } .framer-Abx1J .framer-1yfkwt7 { flex: none; gap: 20px; max-width: 100%; width: 100%; } .framer-Abx1J .framer-787wwg, .framer-Abx1J .framer-g3pse6, .framer-Abx1J .framer-16nyki1, .framer-Abx1J .framer-1s40k6s { padding: 60px 20px 60px 20px; } .framer-Abx1J .framer-67kh0e { align-content: flex-start; align-items: flex-start; gap: 40px; max-width: 100%; } .framer-Abx1J .framer-1o60xwq, .framer-Abx1J .framer-fyfzgt { flex-direction: column; gap: 16px; justify-content: center; } .framer-Abx1J .framer-g26xpd { flex-wrap: wrap; gap: 20px 30px; justify-content: flex-start; } .framer-Abx1J .framer-sz8pmm { gap: 24px; left: unset; position: relative; top: unset; width: 100%; } .framer-Abx1J .framer-efwfve, .framer-Abx1J .framer-8x3o72, .framer-Abx1J .framer-1gp31jx, .framer-Abx1J .framer-1y0q1co, .framer-Abx1J .framer-vn53vi { gap: 16px; } .framer-Abx1J .framer-olq237 { align-content: center; align-items: center; flex-direction: column; gap: 20px; justify-content: center; } .framer-Abx1J .framer-xa9rc0 { padding: 60px 20px 30px 20px; } .framer-Abx1J .framer-b8mnvt-container { height: auto; position: relative; top: unset; } .framer-Abx1J .framer-1n8qvwo, .framer-Abx1J .framer-nwzn5b { padding: 30px 20px 60px 20px; } .framer-Abx1J .framer-15c7csp { flex-direction: column; gap: 40px; max-width: 100%; } .framer-Abx1J .framer-otjcjs { flex: none; gap: 40px; max-width: unset; width: 100%; } .framer-Abx1J .framer-1c5s08n, .framer-Abx1J .framer-1o1cdpq, .framer-Abx1J .framer-1cicmm6, .framer-Abx1J .framer-pt49vi { flex-direction: column; } .framer-Abx1J .framer-9f1ptc { align-self: unset; flex: none; width: 100%; } .framer-Abx1J .framer-yio06 { padding: 60px 0px 30px 0px; } .framer-Abx1J .framer-4lbgdp { gap: 16px; padding: 0px 20px 0px 20px; } .framer-Abx1J .framer-11ti6w4 { padding: 60px 20px 120px 20px; } .framer-Abx1J .framer-7xrsbn { flex: none; gap: 16px; max-width: unset; width: 100%; } .framer-Abx1J .framer-x72g8a, .framer-Abx1J .framer-1fxesjo-container { flex: none; max-width: unset; width: 100%; } .framer-Abx1J .framer-ers785 { align-self: unset; flex: none; max-width: unset; width: 100%; }}`,
      ],
      `framer-Abx1J`
    )),
    (ks.displayName = `Home`),
    (ks.defaultProps = { height: 12614.5, width: 1200 }),
    R(
      ks,
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
        ...jo,
        ...Fo,
        ...Lo,
        ...zo,
        ...Bo,
        ...Ho,
        ...Uo,
        ...Go,
        ...qo,
        ...Jo,
        ...Yo,
        ...Xo,
        ...P(ir),
        ...P(Me),
        ...P(Te),
        ...P(Ie),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ks.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          I(je, {}, t),
          I(q, {}, t),
          I(Na, {}, t),
          I(wo, {}, t),
          I(Vi, {}, t),
          I(xa, {}, t),
          I(ia, {}, t),
          I(qa, {}, t),
          I(Kr, {}, t),
          I(Qe, {}, t),
        ])
      ),
    }),
    (As = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicHeight: `12614.5`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xxYZL9ilW":{"layout":["fixed","auto"]},"mwhVzaTs1":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"Jqrmq3gQ1":{"pattern":":Jqrmq3gQ1","name":"home"},"SmyffEGq3":{"pattern":":SmyffEGq3","name":"about"},"evVl76OK0":{"pattern":":evVl76OK0","name":"our-solutions"},"zD8b77ZSf":{"pattern":":zD8b77ZSf","name":"service"},"tv0C1qN0N":{"pattern":":tv0C1qN0N","name":"01"},"dXgUtDXyY":{"pattern":":dXgUtDXyY","name":"02"},"emCbXX2jg":{"pattern":":emCbXX2jg","name":"03"},"WtDAs7RsD":{"pattern":":WtDAs7RsD","name":"04"},"onN9Fmt_i":{"pattern":":onN9Fmt_i","name":"feature-section"},"rcGbCfFII":{"pattern":":rcGbCfFII","name":"gallery"},"CgfBgzOyY":{"pattern":":CgfBgzOyY","name":"team"},"zjlPpsn_n":{"pattern":":zjlPpsn_n","name":"testimonial"},"gYTaKdUjG":{"pattern":":gYTaKdUjG","name":"faq-section"}}`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { As as __FramerMetadata__, ks as default, $o as queryParamNames };
//# sourceMappingURL=kVtslpshrF0Hkk8Xj0QNuKv1vItFjqgu4XSdqJQhvmg.UH7xYffA.mjs.map
