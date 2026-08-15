import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  R as s,
  c,
  g as l,
  k as u,
  l as d,
  o as f,
  v as p,
} from "./react.D20wc1Tc.mjs";
import { C as m, a as h, r as g, t as _ } from "./motion.uzrgujnr.mjs";
import {
  C as v,
  D as y,
  E as b,
  F as x,
  O as ee,
  P as S,
  Q as te,
  S as C,
  V as w,
  Z as ne,
  _ as T,
  ct as E,
  it as re,
  lt as D,
  r as O,
  t as k,
  x as A,
  y as j,
} from "./framer.CcvScyIW.mjs";
import {
  D as M,
  E as N,
  O as P,
  T as ie,
  d as ae,
  f as F,
  l as I,
  u as L,
} from "./shared-lib.cuT66AuJ.mjs";
function R(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var z,
  B,
  V,
  H,
  oe,
  U,
  se = e(() => {
    (i(),
      (z = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = R(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n = 0.1, duration: r = 1, easing: i = (e) => e, onStart: a, onUpdate: o }
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (B = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === s
                ? s.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            s.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === s
            ? ((this.width = s.innerWidth), (this.height = s.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === s
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (V = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (H = 100 / 6),
      (oe = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new V()),
            s.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            s.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? H : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? H : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = s.innerWidth), (this.windowHeight = s.innerHeight));
        };
      }),
      (U = class {
        constructor({
          wrapper: e = s,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: c = 35,
          duration: l,
          easing: u = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: d = !l && 0.1,
          infinite: f = !1,
          orientation: p = `vertical`,
          gestureOrientation: m = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v = !1,
          __experimental__naiveDimensions: y = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching = n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void n.preventDefault();
              if (!((this.options.syncTouch && r) || (this.options.smoothWheel && i)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (s.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = s),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: c,
              duration: l,
              easing: u,
              lerp: d,
              infinite: f,
              gestureOrientation: m,
              orientation: p,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              __experimental__naiveDimensions: y,
            }),
            (this.animate = new z()),
            (this.emitter = new V()),
            (this.dimensions = new B({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            (this.virtualScroll = new oe(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e), this.emitter.emit(`scroll`, this), (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: c,
            onComplete: l,
            force: u = !1,
            programmatic: d = !0,
            userData: f = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== s) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = R(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (l == null || l(this))
                );
              e !== this.targetScroll &&
                (d || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit({ userData: f }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: f }),
                        l?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === s ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function ce(e) {
  let { intensity: t } = e,
    n = r(null);
  return (
    a(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    a(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    a(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = s.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    a(() => {
      try {
        if (typeof U != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new U({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    a(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(s.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = s.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    c(`div`, { style: e.style })
  );
}
var W,
  le = e(() => {
    (i(),
      f(),
      w(),
      se(),
      n(),
      (W = D(
        ce,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (W.displayName = `Smooth Scroll`),
      v(W, {
        intensity: {
          title: `Intensity`,
          type: O.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  G,
  ue,
  de,
  fe,
  pe = e(() => {
    (w(),
      y.loadFonts([
        `BI;BDO Grotesk/variable/v0`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
        `BI;BDO Grotesk/variable/v0VF=IndnaHQiIDQwMA==`,
      ]),
      (G = [{ defaultValue: 400, maxValue: 900, minValue: 300, name: `Weight`, tag: `wght` }]),
      (ue = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `BDO Grotesk Variable`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `BDO Grotesk`,
              url: `../../assets/fonts/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2`,
              variationAxes: G,
              weight: `1000`,
            },
          ],
        },
      ]),
      (de = [
        `.framer-fllCg .framer-styles-preset-gc3dxx:not(.rich-text-wrapper), .framer-fllCg .framer-styles-preset-gc3dxx.rich-text-wrapper h4 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 768px) { .framer-fllCg .framer-styles-preset-gc3dxx:not(.rich-text-wrapper), .framer-fllCg .framer-styles-preset-gc3dxx.rich-text-wrapper h4 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 767px) and (min-width: 0px) { .framer-fllCg .framer-styles-preset-gc3dxx:not(.rich-text-wrapper), .framer-fllCg .framer-styles-preset-gc3dxx.rich-text-wrapper h4 { --framer-font-family: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold: "BDO Grotesk Variable", sans-serif; --framer-font-family-bold-italic: "BDO Grotesk Variable", sans-serif; --framer-font-family-italic: "BDO Grotesk Variable", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 400; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 1000; --framer-font-weight-bold: 1000; --framer-font-weight-bold-italic: 1000; --framer-font-weight-italic: 1000; --framer-letter-spacing: -0.06em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-2ee4b32d-8419-4070-aae9-b484a0bb7b47, #656565); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (fe = `framer-fllCg`));
  });
function K({ direction: e, style: t }) {
  let n = T.current() === T.canvas,
    i = r(null),
    o = r(),
    s = e === `vertical` || e === `both`,
    l = e === `horizontal` || e === `both`;
  return (
    a(() => {
      if (n) return;
      let e = i.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let r = () => {
        let n = e.getBoundingClientRect();
        (l && (t.style.width = `${n.width}px`),
          s && (t.style.height = `${n.height}px`),
          (o.current = requestAnimationFrame(r)));
      };
      return (
        (o.current = requestAnimationFrame(r)),
        () => {
          (o.current && cancelAnimationFrame(o.current),
            t && (l && (t.style.width = ``), s && (t.style.height = ``)));
        }
      );
    }, [e]),
    c(`div`, { ref: i, style: { ...t } })
  );
}
var me = e(() => {
    (f(),
      w(),
      n(),
      (K.displayName = `Layout Jump Preventer`),
      v(K, {
        direction: {
          type: O.Enum,
          defaultValue: `vertical`,
          options: [`vertical`, `horizontal`, `both`],
          optionTitles: [`Vertical`, `Horizontal`, `Both`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  q,
  he,
  ge,
  J,
  _e = e(() => {
    (f(),
      w(),
      n(),
      (q = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg"><path d="M 0 5.793 L 5.293 0.5 C 5.626 0.167 5.793 0 6 0 C 6.207 0 6.374 0.167 6.707 0.5 L 12 5.793" fill="transparent" height="5.792893px" id="jK60KPOBN" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="var(--1gybajp, rgb(4,48,59))" transform="translate(1 1.207)" width="12px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (he = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(m.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (ge = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nGcTmOiOr: e ?? i.nGcTmOiOr ?? `rgb(4, 48, 59)`,
      })),
      (J = D(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, nGcTmOiOr: o, ...s } = ge(e);
          return c(he, {
            ...s,
            className: b(`framer-SJxL7`, r),
            layoutId: i,
            ref: t,
            style: { "--1gybajp": o, ...n },
          });
        }),
        [
          `.framer-SJxL7 { -webkit-mask: ${q}; aspect-ratio: 1.75; background-color: var(--1gybajp); mask: ${q}; width: 14px; }`,
        ],
        `framer-SJxL7`
      )),
      (J.displayName = `elements`),
      v(J, {
        nGcTmOiOr: { defaultValue: `rgb(4, 48, 59)`, hidden: !1, title: `Color`, type: O.Color },
      }));
  });
function ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  Y,
  ke = e(() => {
    (f(),
      w(),
      _(),
      n(),
      P(),
      F(),
      _e(),
      (ye = S(J)),
      (be = [`BovP9S23c`, `dIkUh0EQj`, `A7qUe_gfI`, `n2ut51ko_`]),
      (xe = `framer-0hU0b`),
      (Se = {
        A7qUe_gfI: `framer-v-1ozwllm`,
        BovP9S23c: `framer-v-1grfea3`,
        dIkUh0EQj: `framer-v-1y2v393`,
        n2ut51ko_: `framer-v-1sps5df`,
      }),
      (Ce = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (we = ({ value: e, children: n }) => {
        let r = u(h),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: n });
      }),
      (Te = {
        "Phone Close": `n2ut51ko_`,
        "Phone Open": `A7qUe_gfI`,
        Close: `dIkUh0EQj`,
        Open: `BovP9S23c`,
      }),
      (Ee = m.create(o)),
      (De = ({ answer: e, click: t, height: n, id: r, question: i, width: a, ...o }) => ({
        ...o,
        CGvpFjjw0:
          e ??
          o.CGvpFjjw0 ??
          `Farmio is a digital agriculture platform providing smart farming solutions, agri-technology services, and sustainable farming support to help farmers increase productivity and reduce costs.`,
        k3ofp9xKf: i ?? o.k3ofp9xKf ?? `What is Farmio?`,
        qgzbB0wpo: t ?? o.qgzbB0wpo,
        variant: Te[o.variant] ?? o.variant ?? `BovP9S23c`,
      })),
      (Oe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = D(
        l(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = p(),
            { activeLocale: s, setLocale: l } = re();
          te();
          let {
              style: u,
              className: f,
              layoutId: h,
              variant: _,
              qgzbB0wpo: v,
              k3ofp9xKf: y,
              CGvpFjjw0: x,
              ...ee
            } = De(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: M,
            } = E({
              cycleOrder: be,
              defaultVariant: `BovP9S23c`,
              ref: i,
              variant: _,
              variantClassNames: Se,
            }),
            N = Oe(e, M),
            { activeVariantCallback: P, delay: ae } = ne(S),
            F = P(async (...e) => {
              if ((k({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
              A(`dIkUh0EQj`);
            }),
            L = P(async (...e) => {
              if ((k({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
              A(`BovP9S23c`);
            }),
            R = P(async (...e) => {
              if ((k({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
              A(`n2ut51ko_`);
            }),
            z = P(async (...e) => {
              if ((k({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
              A(`A7qUe_gfI`);
            }),
            B = b(xe, I, ie),
            V = () => ![`dIkUh0EQj`, `n2ut51ko_`].includes(S);
          return c(g, {
            id: h ?? a,
            children: c(Ee, {
              animate: M,
              initial: !1,
              children: c(we, {
                value: Ce,
                children: d(m.div, {
                  ...ee,
                  ...T,
                  className: b(B, `framer-1grfea3`, f, C),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `BovP9S23c`,
                  onTap: F,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(0, 19, 5, 0.1)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-a1c41d9c-b762-494e-a655-1652125c3378, rgb(242, 242, 242))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...u,
                  },
                  variants: {
                    dIkUh0EQj: {
                      backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                    },
                    n2ut51ko_: {
                      backgroundColor: `var(--token-f46ea120-695a-4096-943a-888f469a6d39, rgb(255, 255, 255))`,
                    },
                  },
                  ...ve(
                    {
                      A7qUe_gfI: { "data-framer-name": `Phone Open`, onTap: R },
                      dIkUh0EQj: { "data-framer-name": `Close`, onTap: L },
                      n2ut51ko_: { "data-framer-name": `Phone Close`, onTap: z },
                    },
                    S,
                    D
                  ),
                  children: [
                    d(m.div, {
                      className: `framer-1ni3u3b`,
                      "data-framer-name": `Text & Icon`,
                      layoutDependency: N,
                      layoutId: `wBJctyU1Y`,
                      children: [
                        c(j, {
                          __fromCanvasComponent: !0,
                          children: c(o, {
                            children: c(m.h6, {
                              className: `framer-styles-preset-1u2nze0`,
                              "data-styles-preset": `GlitAQcHm`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                              },
                              children: `What is Farmio?`,
                            }),
                          }),
                          className: `framer-wlhwqo`,
                          "data-framer-name": `What is Farmio?`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `LOIXUB6dp`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        c(m.div, {
                          className: `framer-1x3xxmd`,
                          "data-framer-name": `Icon Wrapper`,
                          layoutDependency: N,
                          layoutId: `ugmmMLxNS`,
                          children: c(J, {
                            animated: !0,
                            className: `framer-1uy51jh`,
                            "data-framer-name": `Icon`,
                            layoutDependency: N,
                            layoutId: `nNEtBRLaU`,
                            style: { "--1gybajp": `rgb(4, 48, 59)`, rotate: 0 },
                            variants: {
                              A7qUe_gfI: { rotate: 0 },
                              dIkUh0EQj: { rotate: 180 },
                              n2ut51ko_: { rotate: 180 },
                            },
                          }),
                        }),
                      ],
                    }),
                    V() &&
                      c(m.div, {
                        className: `framer-19an02x`,
                        "data-border": !0,
                        "data-framer-name": `Text`,
                        layoutDependency: N,
                        layoutId: `gIFtOX9q_`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `rgba(117, 117, 117, 0.2)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                        },
                        children: c(j, {
                          __fromCanvasComponent: !0,
                          children: c(o, {
                            children: c(m.p, {
                              className: `framer-styles-preset-1h0pk3x`,
                              "data-styles-preset": `c84NHGXvh`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59)))`,
                              },
                              children: `Farmio is a digital agriculture platform providing smart farming solutions, agri-technology services, and sustainable farming support to help farmers increase productivity and reduce costs.`,
                            }),
                          }),
                          className: `framer-1ny6l81`,
                          "data-framer-name": `Farmio is a digital agriculture platform providing smart farming solutions, agri-technology services, and sustainable farming support to help farmers increase productivity and reduce costs.`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `sIR2HWEHK`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-328e9484-8e1e-4069-9c64-7029aaf48f7c, rgb(4, 48, 59))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `.framer-0hU0b.framer-x2u8qe, .framer-0hU0b .framer-x2u8qe { display: block; }`,
          `.framer-0hU0b.framer-1grfea3 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 24px 32px 24px 32px; position: relative; width: 648px; }`,
          `.framer-0hU0b .framer-1ni3u3b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-0hU0b .framer-wlhwqo, .framer-0hU0b .framer-1ny6l81 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-0hU0b .framer-1x3xxmd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 0px 0px 0px; position: relative; width: 24px; }`,
          `.framer-0hU0b .framer-1uy51jh { flex: none; height: var(--framer-aspect-ratio-supported, 9px); position: relative; width: 16px; }`,
          `.framer-0hU0b .framer-19an02x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-0hU0b.framer-v-1ozwllm.framer-1grfea3, .framer-0hU0b.framer-v-1sps5df.framer-1grfea3 { gap: 20px; padding: 20px; }`,
          `.framer-0hU0b.framer-v-1ozwllm .framer-19an02x { padding: 20px 0px 0px 0px; }`,
          ...L,
          ...N,
          `.framer-0hU0b[data-border="true"]::after, .framer-0hU0b [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-0hU0b`
      )),
      (Y.displayName = `Single FAQ`),
      (Y.defaultProps = { height: 205, width: 648 }),
      v(Y, {
        variant: {
          options: [`BovP9S23c`, `dIkUh0EQj`, `A7qUe_gfI`, `n2ut51ko_`],
          optionTitles: [`Open`, `Close`, `Phone Open`, `Phone Close`],
          title: `Variant`,
          type: O.Enum,
        },
        qgzbB0wpo: { title: `Click`, type: O.EventHandler },
        k3ofp9xKf: {
          defaultValue: `What is Farmio?`,
          displayTextArea: !1,
          title: `Question`,
          type: O.String,
        },
        onk3ofp9xKfChange: { changes: `k3ofp9xKf`, type: O.ChangeHandler },
        CGvpFjjw0: {
          defaultValue: `Farmio is a digital agriculture platform providing smart farming solutions, agri-technology services, and sustainable farming support to help farmers increase productivity and reduce costs.`,
          displayTextArea: !1,
          title: `Answer`,
          type: O.String,
        },
        onCGvpFjjw0Change: { changes: `CGvpFjjw0`, type: O.ChangeHandler },
      }),
      C(
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
          ...ye,
          ...x(ae),
          ...x(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Z,
  Q,
  Ie,
  Le,
  Re,
  ze,
  Be,
  $,
  Ve = e(() => {
    (f(),
      w(),
      _(),
      n(),
      me(),
      ke(),
      (Ae = S(Y)),
      (je = S(K)),
      (Me = [`SlicHdbiy`, `dligdQseV`, `X0NCHy2fB`, `vlLaU7m0v`, `y1EVBUGVZ`, `h2r5mkRiJ`]),
      (Ne = `framer-XK8Ps`),
      (Pe = {
        dligdQseV: `framer-v-zmuyjk`,
        h2r5mkRiJ: `framer-v-s92ukf`,
        SlicHdbiy: `framer-v-nxn8tx`,
        vlLaU7m0v: `framer-v-13cm5wt`,
        X0NCHy2fB: `framer-v-cec43p`,
        y1EVBUGVZ: `framer-v-sya7uv`,
      }),
      (Fe = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Q = (e, t) => `translateX(-50%) ${t}`),
      (Ie = ({ value: e, children: n }) => {
        let r = u(h),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: n });
      }),
      (Le = {
        "Desktop 01": `SlicHdbiy`,
        "Desktop 02": `dligdQseV`,
        "Desktop 03": `X0NCHy2fB`,
        "Desktop 04": `vlLaU7m0v`,
        "Desktop 05": `y1EVBUGVZ`,
        "Desktop 06": `h2r5mkRiJ`,
      }),
      (Re = m.create(o)),
      (ze = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Le[r.variant] ?? r.variant ?? `SlicHdbiy`,
      })),
      (Be = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = D(
        l(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = p(),
            { activeLocale: o, setLocale: s } = re(),
            l = te(),
            { style: u, className: f, layoutId: h, variant: _, ...v } = ze(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: ee,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = E({
              cycleOrder: Me,
              defaultVariant: `SlicHdbiy`,
              ref: i,
              variant: _,
              variantClassNames: Pe,
            }),
            j = Be(e, O),
            { activeVariantCallback: M, delay: N } = ne(y),
            P = M(async (...e) => {
              D(`SlicHdbiy`);
            }),
            ie = M(async (...e) => {
              D(`dligdQseV`);
            }),
            ae = M(async (...e) => {
              D(`X0NCHy2fB`);
            }),
            F = M(async (...e) => {
              D(`vlLaU7m0v`);
            }),
            I = M(async (...e) => {
              D(`y1EVBUGVZ`);
            }),
            L = M(async (...e) => {
              D(`h2r5mkRiJ`);
            }),
            R = b(Ne);
          return c(g, {
            id: h ?? a,
            children: c(Re, {
              animate: O,
              initial: !1,
              children: c(Ie, {
                value: Fe,
                children: d(m.div, {
                  ...v,
                  ...S,
                  className: b(R, `framer-nxn8tx`, f, x),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: j,
                  layoutId: `SlicHdbiy`,
                  ref: i,
                  style: { ...u },
                  ...X(
                    {
                      dligdQseV: { "data-framer-name": `Desktop 02` },
                      h2r5mkRiJ: { "data-framer-name": `Desktop 06` },
                      vlLaU7m0v: { "data-framer-name": `Desktop 04` },
                      X0NCHy2fB: { "data-framer-name": `Desktop 03` },
                      y1EVBUGVZ: { "data-framer-name": `Desktop 05` },
                    },
                    y,
                    C
                  ),
                  children: [
                    c(k, {
                      height: 205,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 645) - 0 - 1270) / 2 + 0 + 0),
                      ...X(
                        {
                          dligdQseV: {
                            y: (l?.y || 0) + 0 + (((l?.height || 619) - 0 - 1270) / 2 + 0 + 0),
                          },
                          h2r5mkRiJ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 0 + 0),
                          },
                          vlLaU7m0v: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 0 + 0),
                          },
                          X0NCHy2fB: {
                            y: (l?.y || 0) + 0 + (((l?.height || 627) - 0 - 1270) / 2 + 0 + 0),
                          },
                          y1EVBUGVZ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 0 + 0),
                          },
                        },
                        y,
                        C
                      ),
                      children: c(A, {
                        className: `framer-mlynoy-container`,
                        layoutDependency: j,
                        layoutId: `rusC0eHtY-container`,
                        nodeId: `rusC0eHtY`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        children: c(Y, {
                          CGvpFjjw0: `Farmio is a digital agriculture platform providing smart farming solutions, agri-technology services, and sustainable farming support to help farmers increase productivity and reduce costs.`,
                          height: `100%`,
                          id: `rusC0eHtY`,
                          k3ofp9xKf: `What is Farmio?`,
                          layoutId: `rusC0eHtY`,
                          qgzbB0wpo: P,
                          style: { width: `100%` },
                          variant: Z(`BovP9S23c`),
                          width: `100%`,
                          ...X(
                            {
                              dligdQseV: { variant: Z(`dIkUh0EQj`) },
                              h2r5mkRiJ: { variant: Z(`dIkUh0EQj`) },
                              vlLaU7m0v: { variant: Z(`dIkUh0EQj`) },
                              X0NCHy2fB: { variant: Z(`dIkUh0EQj`) },
                              y1EVBUGVZ: { variant: Z(`dIkUh0EQj`) },
                            },
                            y,
                            C
                          ),
                        }),
                      }),
                    }),
                    c(k, {
                      height: 205,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 645) - 0 - 1270) / 2 + 205 + 8),
                      ...X(
                        {
                          dligdQseV: {
                            y: (l?.y || 0) + 0 + (((l?.height || 619) - 0 - 1270) / 2 + 205 + 8),
                          },
                          h2r5mkRiJ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 205 + 8),
                          },
                          vlLaU7m0v: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 205 + 8),
                          },
                          X0NCHy2fB: {
                            y: (l?.y || 0) + 0 + (((l?.height || 627) - 0 - 1270) / 2 + 205 + 8),
                          },
                          y1EVBUGVZ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 205 + 8),
                          },
                        },
                        y,
                        C
                      ),
                      children: c(A, {
                        className: `framer-16i6upa-container`,
                        layoutDependency: j,
                        layoutId: `bVtGcfmKL-container`,
                        nodeId: `bVtGcfmKL`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        children: c(Y, {
                          CGvpFjjw0: `Farmio empowers farmers with smart farming technologies that enable better decision-making for land, crops, and resource management.`,
                          height: `100%`,
                          id: `bVtGcfmKL`,
                          k3ofp9xKf: `Who can use Farmio services?`,
                          layoutId: `bVtGcfmKL`,
                          qgzbB0wpo: ie,
                          style: { width: `100%` },
                          variant: Z(`dIkUh0EQj`),
                          width: `100%`,
                          ...X({ dligdQseV: { variant: Z(`BovP9S23c`) } }, y, C),
                        }),
                      }),
                    }),
                    c(k, {
                      height: 205,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 645) - 0 - 1270) / 2 + 410 + 16),
                      ...X(
                        {
                          dligdQseV: {
                            y: (l?.y || 0) + 0 + (((l?.height || 619) - 0 - 1270) / 2 + 410 + 16),
                          },
                          h2r5mkRiJ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 410 + 16),
                          },
                          vlLaU7m0v: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 410 + 16),
                          },
                          X0NCHy2fB: {
                            y: (l?.y || 0) + 0 + (((l?.height || 627) - 0 - 1270) / 2 + 410 + 16),
                          },
                          y1EVBUGVZ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 410 + 16),
                          },
                        },
                        y,
                        C
                      ),
                      children: c(A, {
                        className: `framer-j4lqfh-container`,
                        layoutDependency: j,
                        layoutId: `Gb2B_D__w-container`,
                        nodeId: `Gb2B_D__w`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        children: c(Y, {
                          CGvpFjjw0: `Through advanced digital tools and data-driven insights, Farmio helps farmers optimize yields, minimize risks, and improve overall farm efficiency.`,
                          height: `100%`,
                          id: `Gb2B_D__w`,
                          k3ofp9xKf: `Is Farmio available worldwide?`,
                          layoutId: `Gb2B_D__w`,
                          qgzbB0wpo: ae,
                          style: { width: `100%` },
                          variant: Z(`dIkUh0EQj`),
                          width: `100%`,
                          ...X({ X0NCHy2fB: { variant: Z(`BovP9S23c`) } }, y, C),
                        }),
                      }),
                    }),
                    c(k, {
                      height: 205,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 645) - 0 - 1270) / 2 + 615 + 24),
                      ...X(
                        {
                          dligdQseV: {
                            y: (l?.y || 0) + 0 + (((l?.height || 619) - 0 - 1270) / 2 + 615 + 24),
                          },
                          h2r5mkRiJ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 615 + 24),
                          },
                          vlLaU7m0v: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 615 + 24),
                          },
                          X0NCHy2fB: {
                            y: (l?.y || 0) + 0 + (((l?.height || 627) - 0 - 1270) / 2 + 615 + 24),
                          },
                          y1EVBUGVZ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 615 + 24),
                          },
                        },
                        y,
                        C
                      ),
                      children: c(A, {
                        className: `framer-32gs43-container`,
                        layoutDependency: j,
                        layoutId: `JSxK0btep-container`,
                        nodeId: `JSxK0btep`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        children: c(Y, {
                          CGvpFjjw0: `Farmio promotes sustainable farming practices by reducing waste, supporting eco-friendly agriculture, and ensuring long-term productivity.`,
                          height: `100%`,
                          id: `JSxK0btep`,
                          k3ofp9xKf: `Does Farmio support sustainable farming?`,
                          layoutId: `JSxK0btep`,
                          qgzbB0wpo: F,
                          style: { width: `100%` },
                          variant: Z(`dIkUh0EQj`),
                          width: `100%`,
                          ...X({ vlLaU7m0v: { variant: Z(`BovP9S23c`) } }, y, C),
                        }),
                      }),
                    }),
                    c(k, {
                      height: 205,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 645) - 0 - 1270) / 2 + 820 + 32),
                      ...X(
                        {
                          dligdQseV: {
                            y: (l?.y || 0) + 0 + (((l?.height || 619) - 0 - 1270) / 2 + 820 + 32),
                          },
                          h2r5mkRiJ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 820 + 32),
                          },
                          vlLaU7m0v: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 820 + 32),
                          },
                          X0NCHy2fB: {
                            y: (l?.y || 0) + 0 + (((l?.height || 627) - 0 - 1270) / 2 + 820 + 32),
                          },
                          y1EVBUGVZ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 820 + 32),
                          },
                        },
                        y,
                        C
                      ),
                      children: c(A, {
                        className: `framer-1g3y2t2-container`,
                        layoutDependency: j,
                        layoutId: `AGc_tr1dn-container`,
                        nodeId: `AGc_tr1dn`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        children: c(Y, {
                          CGvpFjjw0: `Designed with farmers in mind, Farmio delivers reliable technology and expert support to make farming smarter, easier, and more profitable.`,
                          height: `100%`,
                          id: `AGc_tr1dn`,
                          k3ofp9xKf: `How can I get started with Farmio?`,
                          layoutId: `AGc_tr1dn`,
                          qgzbB0wpo: I,
                          style: { width: `100%` },
                          variant: Z(`dIkUh0EQj`),
                          width: `100%`,
                          ...X({ y1EVBUGVZ: { variant: Z(`BovP9S23c`) } }, y, C),
                        }),
                      }),
                    }),
                    c(k, {
                      height: 205,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 645) - 0 - 1270) / 2 + 1025 + 40),
                      ...X(
                        {
                          dligdQseV: {
                            y: (l?.y || 0) + 0 + (((l?.height || 619) - 0 - 1270) / 2 + 1025 + 40),
                          },
                          h2r5mkRiJ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 1025 + 40),
                          },
                          vlLaU7m0v: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 1025 + 40),
                          },
                          X0NCHy2fB: {
                            y: (l?.y || 0) + 0 + (((l?.height || 627) - 0 - 1270) / 2 + 1025 + 40),
                          },
                          y1EVBUGVZ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 200) - 0 - 1270) / 2 + 1025 + 40),
                          },
                        },
                        y,
                        C
                      ),
                      children: c(A, {
                        className: `framer-1j3bscq-container`,
                        layoutDependency: j,
                        layoutId: `ktRy7aTUz-container`,
                        nodeId: `ktRy7aTUz`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        children: c(Y, {
                          CGvpFjjw0: `Farmio is a digital agriculture platform that provides smart farming solutions and agri-technology services to help farmers increase productivity and reduce operational costs.`,
                          height: `100%`,
                          id: `ktRy7aTUz`,
                          k3ofp9xKf: `What if I’m not satisfied with the Farmio?`,
                          layoutId: `ktRy7aTUz`,
                          qgzbB0wpo: L,
                          style: { width: `100%` },
                          variant: Z(`dIkUh0EQj`),
                          width: `100%`,
                          ...X({ h2r5mkRiJ: { variant: Z(`BovP9S23c`) } }, y, C),
                        }),
                      }),
                    }),
                    c(k, {
                      children: c(A, {
                        className: `framer-1kuhy43-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: j,
                        layoutId: `jUlOmKq5V-container`,
                        nodeId: `jUlOmKq5V`,
                        rendersWithMotion: !0,
                        scopeId: `OJMxsAboW`,
                        transformTemplate: Q,
                        children: c(K, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `jUlOmKq5V`,
                          layoutId: `jUlOmKq5V`,
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
          `.framer-XK8Ps.framer-t01rih, .framer-XK8Ps .framer-t01rih { display: block; }`,
          `.framer-XK8Ps.framer-nxn8tx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 675px; }`,
          `.framer-XK8Ps .framer-mlynoy-container, .framer-XK8Ps .framer-16i6upa-container, .framer-XK8Ps .framer-j4lqfh-container, .framer-XK8Ps .framer-32gs43-container, .framer-XK8Ps .framer-1g3y2t2-container, .framer-XK8Ps .framer-1j3bscq-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-XK8Ps .framer-1kuhy43-container { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; width: auto; z-index: 1; }`,
        ],
        `framer-XK8Ps`
      )),
      ($.displayName = `FAQ`),
      ($.defaultProps = { height: 645, width: 675 }),
      v($, {
        variant: {
          options: [`SlicHdbiy`, `dligdQseV`, `X0NCHy2fB`, `vlLaU7m0v`, `y1EVBUGVZ`, `h2r5mkRiJ`],
          optionTitles: [
            `Desktop 01`,
            `Desktop 02`,
            `Desktop 03`,
            `Desktop 04`,
            `Desktop 05`,
            `Desktop 06`,
          ],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      C($, [{ explicitInter: !0, fonts: [] }, ...Ae, ...je], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([ee(Y, {}, t)])) }));
  });
export { ue as a, le as c, de as i, Ve as n, pe as o, fe as r, W as s, $ as t };
//# sourceMappingURL=OJMxsAboW.XXqtA2-1.mjs.map
