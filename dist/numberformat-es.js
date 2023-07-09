import { defineComponent as s, ref as c, openBlock as p, createElementBlock as d, Fragment as f, createElementVNode as i, toDisplayString as o, renderSlot as N, createTextVNode as b, createCommentVNode as v } from "vue";
import V from "numeral";
const k = /* @__PURE__ */ s({
  __name: "NumberFormat",
  props: {
    number: {},
    to: { default: "0,0.00" }
  },
  setup(a) {
    const l = a, r = c(!0), u = () => {
      const { number: e, to: t } = l;
      if (e == null || e === "") {
        r.value = !1;
        return;
      }
      let n = parseFloat(e);
      if (isNaN(n)) {
        r.value = !1;
        return;
      }
      try {
        return V(n).format(t);
      } catch (m) {
        return console.warn(m), null;
      }
    };
    return (e, t) => (p(), d(f, null, [
      i("span", null, o(u()), 1),
      r.value ? v("", !0) : N(e.$slots, "default", { key: 0 }, () => [
        b("Invalid number supplied: " + o(e.number), 1)
      ])
    ], 64));
  }
});
export {
  k as VNumberFormat
};
