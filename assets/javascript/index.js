"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.1.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext,
      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(D(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(D(this, a || [], !0));
    }, is: function is(a) {
      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var E,
      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      G = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function J(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return J(a, "nextSibling");
    }, prev: function prev(a) {
      return J(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || r.merge([], a.childNodes);
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
    };
  });var K = /[^\x20\t\r\n\f]+/g;function L(a) {
    var b = {};return r.each(a.match(K) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function M(a) {
    return a;
  }function N(a) {
    throw a;
  }function O(a, b, c) {
    var d;try {
      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
    } catch (a) {
      c.call(void 0, a);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        O(e[c], h(c), g.reject);
      }return g.promise();
    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var Q = r.Deferred();r.fn.ready = function (a) {
    return Q.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? r.readyWait++ : r.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
    } }), r.ready.then = Q.then;function R() {
    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        S(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      T = function T(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function U() {
    this.expando = r.expando + U.uid++;
  }U.uid = 1, U.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var V = new U(),
      W = new U(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Y = /[A-Z]/g;function Z(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
  }function $(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = Z(c);
      } catch (e) {}W.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return W.hasData(a) || V.hasData(a);
    }, data: function data(a, b, c) {
      return W.access(a, b, c);
    }, removeData: function removeData(a, b) {
      W.remove(a, b);
    }, _data: function _data(a, b, c) {
      return V.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      V.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
          }V.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        W.set(this, a);
      }) : S(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = W.get(f, a), void 0 !== c) return c;if (c = $(f, a), void 0 !== c) return c;
        } else this.each(function () {
          W.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        W.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          V.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
      ba = ["Top", "Right", "Bottom", "Left"],
      ca = function ca(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      da = function da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function ea(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var fa = {};function ga(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
  }function ha(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ha(this, !0);
    }, hide: function hide() {
      return ha(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        ca(this) ? r(this).show() : r(this).hide();
      });
    } });var ia = /^(?:checkbox|radio)$/i,
      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ka = /^$|\/(?:java|ecma)script/i,
      la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
  }function na(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
    }
  }var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
        k = 0;while (f = g[k++]) {
          ka.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var qa = d.documentElement,
      ra = /^key/,
      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
    return !0;
  }function va() {
    return !1;
  }function wa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function xa(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        xa(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
          h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
        b = (b || "").match(K) || [""], j = b.length;while (j--) {
          if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && V.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (V.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== wa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === wa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return r.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return xa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return xa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      za = /<script|<style|<link/i,
      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ba = /^true\/(.*)/,
      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function Ea(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Fa(a) {
    var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ga(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
    }
  }function Ha(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ia(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
    });if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) {
        j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
      }
    }return a;
  }function Ja(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ya, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      }if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) {
        Ga(f[d], g[d]);
      } else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (T(c)) {
          if (b = c[V.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[V.expando] = void 0;
          }c[W.expando] && (c[W.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ja(this, a, !0);
    }, remove: function remove(a) {
      return Ja(this, a);
    }, text: function text(a) {
      return S(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return S(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ia(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var Ka = /^margin/,
      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
      Ma = function Ma(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Na(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Oa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Pa = /^(none|table(?!-c[ea]).+)/,
      Qa = { position: "absolute", visibility: "hidden", display: "block" },
      Ra = { letterSpacing: "0", fontWeight: "400" },
      Sa = ["Webkit", "Moz", "ms"],
      Ta = d.createElement("div").style;function Ua(a) {
    if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Sa.length;while (c--) {
      if (a = Sa[c] + b, a in Ta) return a;
    }
  }function Va(a, b, c) {
    var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Wa(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
    }return g;
  }function Xa(a, b, c) {
    var d,
        e = !0,
        f = Ma(a),
        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
      if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
    }return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Na(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
          return Xa(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Ma(a),
            g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
  }), r.fn.extend({ css: function css(a, b) {
      return S(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (r.isArray(b)) {
          for (d = Ma(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function Ya(a, b, c, d, e) {
    return new Ya.prototype.init(a, b, c, d, e);
  }r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
    } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
      $a,
      _a = /^(?:toggle|show|hide)$/,
      ab = /queueHooks$/;function bb() {
    $a && (a.requestAnimationFrame(bb), r.fx.tick());
  }function cb() {
    return a.setTimeout(function () {
      Za = void 0;
    }), Za = r.now();
  }function db(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ba[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function eb(a, b, c) {
    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function fb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && ca(a),
        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], _a.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
          p || ha([a]), V.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function gb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function hb(a, b, c) {
    var d,
        e,
        f = 0,
        g = hb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) {
      if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
      }
    }, prefilters: [fb], prefilter: function prefilter(a, b) {
      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
    }, e;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && ab.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = V.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
    };
  }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (Za = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), Za = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
  }, r.fx.interval = 13, r.fx.start = function () {
    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
  }, r.fx.stop = function () {
    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var ib,
      jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return S(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), ib = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
    };
  });var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return S(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function mb(a) {
    var b = a.match(K) || [];return b.join(" ");
  }function nb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, nb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = mb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, nb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = mb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, nb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var ob = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
      } };
  });var qb = a.location,
      rb = r.now(),
      sb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var tb = /\[\]$/,
      ub = /\r?\n/g,
      vb = /^(?:submit|button|image|reset|file)$/i,
      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
    var e;if (r.isArray(b)) r.each(b, function (b, e) {
      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      xb(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      xb(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(ub, "\r\n") };
        }) : { name: b.name, value: c.replace(ub, "\r\n") };
      }).get();
    } });var yb = /%20/g,
      zb = /#.*$/,
      Ab = /([?&])_=[^&]*/,
      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Db = /^(?:GET|HEAD)$/,
      Eb = /^\/\//,
      Fb = {},
      Gb = {},
      Hb = "*/".concat("*"),
      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Kb(a, b, c, d) {
    var e = {},
        f = a === Gb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Lb(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Mb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Nb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Bb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Ob = { 0: 200, 1223: 204 },
      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Qb = [],
      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Sb(a) {
    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || qa;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return S(this, function (a, d, e) {
        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
      if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Tb = a.jQuery,
      Ub = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (core) {

    if (typeof define == 'function' && define.amd) {
        // AMD

        define('uikit', function () {

            var uikit = window.UIkit2 || core(window, window.jQuery, window.document);

            uikit.load = function (res, req, onload, config) {

                var resources = res.split(','),
                    load = [],
                    i,
                    base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : '').replace(/\/+$/g, '');

                if (!base) {
                    throw new Error('Please define base path to UIkit in the requirejs config.');
                }

                for (i = 0; i < resources.length; i += 1) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base + '/components/' + resource);
                }

                req(load, function () {
                    onload(uikit);
                });
            };

            return uikit;
        });
    }

    if (!window.jQuery) {
        throw new Error('UIkit 2.x requires jQuery');
    }

    if (window && window.jQuery && !window.UIkit2) {
        core(window, window.jQuery, window.document);
    }
})(function (global, $, doc) {

    "use strict";

    var UI = {},
        _UI = global.UIkit || undefined;

    UI.version = '2.27.2';

    UI.noConflict = function () {
        // restore UIkit version
        if (_UI) {
            global.UIkit = _UI;
            $.UIkit = _UI;
            $.fn.uk = _UI.fn;
        }

        return UI;
    };

    global.UIkit2 = UI;

    if (!_UI) {
        global.UIkit = UI;
    }

    // cache jQuery
    UI.$ = $;

    UI.$doc = UI.$(document);
    UI.$win = UI.$(window);
    UI.$html = UI.$('html');

    UI.support = {};
    UI.support.transition = function () {

        var transitionEnd = function () {

            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            },
                name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }();

        return transitionEnd && { end: transitionEnd };
    }();

    UI.support.animation = function () {

        var animationEnd = function () {

            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                WebkitAnimation: 'webkitAnimationEnd',
                MozAnimation: 'animationend',
                OAnimation: 'oAnimationEnd oanimationend',
                animation: 'animationend'
            },
                name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }();

        return animationEnd && { end: animationEnd };
    }();

    // requestAnimationFrame polyfill
    //https://github.com/darius/requestAnimationFrame
    (function () {

        Date.now = Date.now || function () {
            return new Date().getTime();
        };

        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function (callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function () {
                    callback(lastTime = nextTime);
                }, nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
    })();

    UI.support.touch = 'ontouchstart' in document || global.DocumentTouch && document instanceof global.DocumentTouch || global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0 || //IE 10
    global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0 || //IE >=11
    false;

    UI.support.mutationobserver = global.MutationObserver || global.WebKitMutationObserver || null;

    UI.Utils = {};

    UI.Utils.isFullscreen = function () {
        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
    };

    UI.Utils.str2json = function (str, notevil) {
        try {
            if (notevil) {
                return JSON.parse(str
                // wrap keys without quote with valid double quote
                .replace(/([\$\w]+)\s*:/g, function (_, $1) {
                    return '"' + $1 + '":';
                })
                // replacing single quote wrapped ones to double quote
                .replace(/'([^']+)'/g, function (_, $1) {
                    return '"' + $1 + '"';
                }));
            } else {
                return new Function('', 'var json = ' + str + '; return JSON.parse(JSON.stringify(json));')();
            }
        } catch (e) {
            return false;
        }
    };

    UI.Utils.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    UI.Utils.throttle = function (func, limit) {
        var wait = false;
        return function () {
            if (!wait) {
                func.call();
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, limit);
            }
        };
    };

    UI.Utils.removeCssRules = function (selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if (!selectorRegEx) return;

        setTimeout(function () {
            try {
                _ref = document.styleSheets;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    stylesheet = _ref[_i];
                    idxs = [];
                    stylesheet.cssRules = stylesheet.cssRules;
                    for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                        if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                            idxs.unshift(idx);
                        }
                    }
                    for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                        stylesheet.deleteRule(idxs[_k]);
                    }
                }
            } catch (_error) {}
        }, 0);
    };

    UI.Utils.isInView = function (element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = UI.$win.scrollLeft(),
            window_top = UI.$win.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;

        options = $.extend({ topoffset: 0, leftoffset: 0 }, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() && left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
            return true;
        } else {
            return false;
        }
    };

    UI.Utils.checkDisplay = function (context, initanimation) {

        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document),
            animated;

        if (context && !elements.length) {
            elements = $(context);
        }

        elements.trigger('display.uk.check');

        // fix firefox / IE animations
        if (initanimation) {

            if (typeof initanimation != 'string') {
                initanimation = '[class*="uk-animation-"]';
            }

            elements.find(initanimation).each(function () {

                var ele = UI.$(this),
                    cls = ele.attr('class'),
                    anim = cls.match(/uk-animation-(.+)/);

                ele.removeClass(anim[0]).width();

                ele.addClass(anim[0]);
            });
        }

        return elements;
    };

    UI.Utils.options = function (string) {

        if ($.type(string) != 'string') return string;

        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
            string = '{' + string + '}';
        }

        var start = string ? string.indexOf("{") : -1,
            options = {};

        if (start != -1) {
            try {
                options = UI.Utils.str2json(string.substr(start));
            } catch (e) {}
        }

        return options;
    };

    UI.Utils.animate = function (element, cls) {

        var d = $.Deferred();

        element = UI.$(element);

        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function () {
            element.removeClass(cls);
            d.resolve();
        });

        element.css('display', '');

        return d.promise();
    };

    UI.Utils.uid = function (prefix) {
        return (prefix || 'id') + new Date().getTime() + "RAND" + Math.ceil(Math.random() * 100000);
    };

    UI.Utils.template = function (str, data) {

        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
            i = 0,
            toc,
            cmd,
            prop,
            val,
            fn,
            output = [],
            openblocks = 0;

        while (i < tokens.length) {

            toc = tokens[i];

            if (toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
                i = i + 1;
                toc = tokens[i];
                cmd = toc[0];
                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0);

                switch (cmd) {
                    case '~':
                        output.push('for(var $i=0;$i<' + prop + '.length;$i++) { var $item = ' + prop + '[$i];');
                        openblocks++;
                        break;
                    case ':':
                        output.push('for(var $key in ' + prop + ') { var $val = ' + prop + '[$key];');
                        openblocks++;
                        break;
                    case '#':
                        output.push('if(' + prop + ') {');
                        openblocks++;
                        break;
                    case '^':
                        output.push('if(!' + prop + ') {');
                        openblocks++;
                        break;
                    case '/':
                        output.push('}');
                        openblocks--;
                        break;
                    case '!':
                        output.push('__ret.push(' + prop + ');');
                        break;
                    default:
                        output.push('__ret.push(escape(' + prop + '));');
                        break;
                }
            } else {
                output.push("__ret.push('" + toc.replace(/\'/g, "\\'") + "');");
            }
            i = i + 1;
        }

        fn = new Function('$data', ['var __ret = [];', 'try {', 'with($data){', !openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]', '};', '}catch(e){__ret = [e.message];}', 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n"));

        return data ? fn(data) : fn;
    };

    UI.Utils.focus = function (element, extra) {

        element = $(element);

        if (!element.length) {
            return element;
        }

        var autofocus = element.find('[autofocus]:first'),
            tabidx;

        if (autofocus.length) {
            return autofocus.focus();
        }

        autofocus = element.find(':input' + (extra && ',' + extra || '')).first();

        if (autofocus.length) {
            return autofocus.focus();
        }

        if (!element.attr('tabindex')) {
            tabidx = 1000;
            element.attr('tabindex', tabidx);
        }

        element[0].focus();

        if (tabidx) {
            element.attr('tabindex', '');
        }

        return element;
    };

    UI.Utils.events = {};
    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

    // deprecated

    UI.fn = function (command, options) {

        var args = arguments,
            cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
            component = cmd[1],
            method = cmd[2];

        if (!UI[component]) {
            $.error('UIkit component [' + component + '] does not exist.');
            return this;
        }

        return this.each(function () {
            var $this = $(this),
                data = $this.data(component);
            if (!data) $this.data(component, data = UI[component](this, method ? undefined : options));
            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
        });
    };

    $.UIkit = UI;
    $.fn.uk = UI.fn;

    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

    UI.components = {};

    UI.component = function (name, def, override) {

        if (UI.components[name] && !override) {
            return UI.components[name];
        }

        var fn = function fn(element, options) {

            var $this = this;

            this.UIkit = UI;
            this.element = element ? UI.$(element) : null;
            this.options = $.extend(true, {}, this.defaults, options);
            this.plugins = {};

            if (this.element) {
                this.element.data(name, this);
            }

            this.init();

            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function (plugin) {

                if (fn.plugins[plugin].init) {
                    fn.plugins[plugin].init($this);
                    $this.plugins[plugin] = true;
                }
            });

            this.trigger('init.uk.component', [name, this]);

            return this;
        };

        fn.plugins = {};

        $.extend(true, fn.prototype, {

            defaults: { plugins: [] },

            boot: function boot() {},
            init: function init() {},

            on: function on(a1, a2, a3) {
                return UI.$(this.element || this).on(a1, a2, a3);
            },

            one: function one(a1, a2, a3) {
                return UI.$(this.element || this).one(a1, a2, a3);
            },

            off: function off(evt) {
                return UI.$(this.element || this).off(evt);
            },

            trigger: function trigger(evt, params) {
                return UI.$(this.element || this).trigger(evt, params);
            },

            find: function find(selector) {
                return UI.$(this.element ? this.element : []).find(selector);
            },

            proxy: function proxy(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function (method) {
                    if (!$this[method]) $this[method] = function () {
                        return obj[method].apply(obj, arguments);
                    };
                });
            },

            mixin: function mixin(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function (method) {
                    if (!$this[method]) $this[method] = obj[method].bind($this);
                });
            },

            option: function option() {

                if (arguments.length == 1) {
                    return this.options[arguments[0]] || undefined;
                } else if (arguments.length == 2) {
                    this.options[arguments[0]] = arguments[1];
                }
            }

        }, def);

        this.components[name] = fn;

        this[name] = function () {

            var element, options;

            if (arguments.length) {

                switch (arguments.length) {
                    case 1:

                        if (typeof arguments[0] === 'string' || arguments[0].nodeType || arguments[0] instanceof jQuery) {
                            element = $(arguments[0]);
                        } else {
                            options = arguments[0];
                        }

                        break;
                    case 2:

                        element = $(arguments[0]);
                        options = arguments[1];
                        break;
                }
            }

            if (element && element.data(name)) {
                return element.data(name);
            }

            return new UI.components[name](element, options);
        };

        if (UI.domready) {
            UI.component.boot(name);
        }

        return fn;
    };

    UI.plugin = function (component, name, def) {
        this.components[component].plugins[name] = def;
    };

    UI.component.boot = function (name) {

        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
            UI.components[name].prototype.boot.apply(UI, []);
            UI.components[name].booted = true;
        }
    };

    UI.component.bootComponents = function () {

        for (var component in UI.components) {
            UI.component.boot(component);
        }
    };

    // DOM mutation save ready helper function

    UI.domObservers = [];
    UI.domready = false;

    UI.ready = function (fn) {

        UI.domObservers.push(fn);

        if (UI.domready) {
            fn(document);
        }
    };

    UI.on = function (a1, a2, a3) {

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
        }

        return UI.$doc.on(a1, a2, a3);
    };

    UI.one = function (a1, a2, a3) {

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
            return UI.$doc;
        }

        return UI.$doc.one(a1, a2, a3);
    };

    UI.trigger = function (evt, params) {
        return UI.$doc.trigger(evt, params);
    };

    UI.domObserve = function (selector, fn) {

        if (!UI.support.mutationobserver) return;

        fn = fn || function () {};

        UI.$(selector).each(function () {

            var element = this,
                $element = UI.$(element);

            if ($element.data('observer')) {
                return;
            }

            try {

                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function (mutations) {
                    fn.apply(element, [$element]);
                    $element.trigger('changed.uk.dom');
                }, 50), { childList: true, subtree: true });

                // pass in the target node, as well as the observer options
                observer.observe(element, { childList: true, subtree: true });

                $element.data('observer', observer);
            } catch (e) {}
        });
    };

    UI.init = function (root) {

        root = root || document;

        UI.domObservers.forEach(function (fn) {
            fn(root);
        });
    };

    UI.on('domready.uk.dom', function () {

        UI.init();

        if (UI.domready) UI.Utils.checkDisplay();
    });

    document.addEventListener('DOMContentLoaded', function () {

        var domReady = function domReady() {

            UI.$body = UI.$('body');

            UI.trigger('beforeready.uk.dom');

            UI.component.bootComponents();

            // custom scroll observer
            var rafToken = requestAnimationFrame(function () {

                var memory = { dir: { x: 0, y: 0 }, x: window.pageXOffset, y: window.pageYOffset };

                var fn = function fn() {
                    // reading this (window.page[X|Y]Offset) causes a full page recalc of the layout in Chrome,
                    // so we only want to do this once
                    var wpxo = window.pageXOffset;
                    var wpyo = window.pageYOffset;

                    // Did the scroll position change since the last time we were here?
                    if (memory.x != wpxo || memory.y != wpyo) {

                        // Set the direction of the scroll and store the new position
                        if (wpxo != memory.x) {
                            memory.dir.x = wpxo > memory.x ? 1 : -1;
                        } else {
                            memory.dir.x = 0;
                        }
                        if (wpyo != memory.y) {
                            memory.dir.y = wpyo > memory.y ? 1 : -1;
                        } else {
                            memory.dir.y = 0;
                        }

                        memory.x = wpxo;
                        memory.y = wpyo;

                        // Trigger the scroll event, this could probably be sent using memory.clone() but this is
                        // more explicit and easier to see exactly what is being sent in the event.
                        UI.$doc.trigger('scrolling.uk.document', [{
                            dir: { x: memory.dir.x, y: memory.dir.y }, x: wpxo, y: wpyo
                        }]);
                    }

                    cancelAnimationFrame(rafToken);
                    rafToken = requestAnimationFrame(fn);
                };

                if (UI.support.touch) {
                    UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
                }

                if (memory.x || memory.y) fn();

                return fn;
            }());

            // run component init functions on dom
            UI.trigger('domready.uk.dom');

            if (UI.support.touch) {

                // remove css hover rules for touch devices
                // UI.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/);

                // viewport unit fix for uk-height-viewport - should be fixed in iOS 8
                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

                    UI.$win.on('load orientationchange resize', UI.Utils.debounce(function () {

                        var fn = function fn() {
                            $('.uk-height-viewport').css('height', window.innerHeight);
                            return fn;
                        };

                        return fn();
                    }(), 100));
                }
            }

            UI.trigger('afterready.uk.dom');

            // mark that domready is left behind
            UI.domready = true;

            // auto init js components
            if (UI.support.mutationobserver) {

                var initFn = UI.Utils.debounce(function () {
                    requestAnimationFrame(function () {
                        UI.init(document.body);
                    });
                }, 10);

                new UI.support.mutationobserver(function (mutations) {

                    var init = false;

                    mutations.every(function (mutation) {

                        if (mutation.type != 'childList') return true;

                        for (var i = 0, node; i < mutation.addedNodes.length; ++i) {

                            node = mutation.addedNodes[i];

                            if (node.outerHTML && node.outerHTML.indexOf('data-uk-') !== -1) {
                                return (init = true) && false;
                            }
                        }
                        return true;
                    });

                    if (init) initFn();
                }).observe(document.body, { childList: true, subtree: true });
            }
        };

        if (document.readyState == 'complete' || document.readyState == 'interactive') {
            setTimeout(domReady);
        }

        return domReady;
    }());

    // add touch identifier class
    UI.$html.addClass(UI.support.touch ? 'uk-touch' : 'uk-notouch');

    // add uk-hover class on tap to support overlays on touch devices
    if (UI.support.touch) {

        var hoverset = false,
            exclude,
            hovercls = 'uk-hover',
            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';

        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function () {

            if (hoverset) $('.' + hovercls).removeClass(hovercls);

            hoverset = $(this).addClass(hovercls);
        }).on('mouseleave touchend MSPointerUp pointerup', function (e) {

            exclude = $(e.target).parents(selector);

            if (hoverset) {
                hoverset.not(exclude).removeClass(hovercls);
            }
        });
    }

    return UI;
});

//  Based on Zeptos touch.js
//  https://raw.github.com/madrobby/zepto/master/src/touch.js
//  Zepto.js may be freely distributed under the MIT license.

;(function ($) {

    if ($.fn.swipeLeft) {
        return;
    }

    var touch = {},
        touchTimeout,
        tapTimeout,
        swipeTimeout,
        longTapTimeout,
        longTapDelay = 750,
        gesture;

    function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
    }

    function longTap() {
        longTapTimeout = null;
        if (touch.last) {
            if (touch.el !== undefined) touch.el.trigger('longTap');
            touch = {};
        }
    }

    function cancelLongTap() {
        if (longTapTimeout) clearTimeout(longTapTimeout);
        longTapTimeout = null;
    }

    function cancelAll() {
        if (touchTimeout) clearTimeout(touchTimeout);
        if (tapTimeout) clearTimeout(tapTimeout);
        if (swipeTimeout) clearTimeout(swipeTimeout);
        if (longTapTimeout) clearTimeout(longTapTimeout);
        touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
        touch = {};
    }

    function isPrimaryTouch(event) {
        return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
    }

    $(function () {
        var now,
            delta,
            deltaX = 0,
            deltaY = 0,
            firstTouch;

        if ('MSGesture' in window) {
            gesture = new MSGesture();
            gesture.target = document.body;
        }

        $(document).on('MSGestureEnd gestureend', function (e) {

            var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;

            if (swipeDirectionFromVelocity && touch.el !== undefined) {
                touch.el.trigger('swipe');
                touch.el.trigger('swipe' + swipeDirectionFromVelocity);
            }
        })
        // MSPointerDown: for IE10
        // pointerdown: for IE11
        .on('touchstart MSPointerDown pointerdown', function (e) {

            if (e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;

            firstTouch = e.type == 'MSPointerDown' || e.type == 'pointerdown' ? e : e.originalEvent.touches[0];

            now = Date.now();
            delta = now - (touch.last || now);
            touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

            if (touchTimeout) clearTimeout(touchTimeout);

            touch.x1 = firstTouch.pageX;
            touch.y1 = firstTouch.pageY;

            if (delta > 0 && delta <= 250) touch.isDoubleTap = true;

            touch.last = now;
            longTapTimeout = setTimeout(longTap, longTapDelay);

            // adds the current touch contact for IE gesture recognition
            if (e.originalEvent && e.originalEvent.pointerId && gesture && (e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart')) {
                gesture.addPointer(e.originalEvent.pointerId);
            }
        })
        // MSPointerMove: for IE10
        // pointermove: for IE11
        .on('touchmove MSPointerMove pointermove', function (e) {

            if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;

            firstTouch = e.type == 'MSPointerMove' || e.type == 'pointermove' ? e : e.originalEvent.touches[0];

            cancelLongTap();
            touch.x2 = firstTouch.pageX;
            touch.y2 = firstTouch.pageY;

            deltaX += Math.abs(touch.x1 - touch.x2);
            deltaY += Math.abs(touch.y1 - touch.y2);
        })
        // MSPointerUp: for IE10
        // pointerup: for IE11
        .on('touchend MSPointerUp pointerup', function (e) {

            if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;

            cancelLongTap();

            // swipe
            if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {

                swipeTimeout = setTimeout(function () {
                    if (touch.el !== undefined) {
                        touch.el.trigger('swipe');
                        touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                    }
                    touch = {};
                }, 0);

                // normal tap
            } else if ('last' in touch) {

                // don't fire tap when delta position changed by more than 30 pixels,
                // for instance when moving to a point and back to origin
                if (isNaN(deltaX) || deltaX < 30 && deltaY < 30) {
                    // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                    // ('tap' fires before 'scroll')
                    tapTimeout = setTimeout(function () {

                        // trigger universal 'tap' with the option to cancelTouch()
                        // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                        var event = $.Event('tap');
                        event.cancelTouch = cancelAll;
                        if (touch.el !== undefined) touch.el.trigger(event);

                        // trigger double tap immediately
                        if (touch.isDoubleTap) {
                            if (touch.el !== undefined) touch.el.trigger('doubleTap');
                            touch = {};
                        }

                        // trigger single tap after 250ms of inactivity
                        else {
                                touchTimeout = setTimeout(function () {
                                    touchTimeout = null;
                                    if (touch.el !== undefined) touch.el.trigger('singleTap');
                                    touch = {};
                                }, 250);
                            }
                    }, 0);
                } else {
                    touch = {};
                }
                deltaX = deltaY = 0;
            }
        })
        // when the browser window loses focus,
        // for example when a modal dialog is shown,
        // cancel all ongoing events
        .on('touchcancel MSPointerCancel pointercancel', cancelAll);

        // scrolling the window indicates intention of the user
        // to scroll, not tap or swipe, so cancel all ongoing events
        $(window).on('scroll', cancelAll);
    });

    ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
        $.fn[eventName] = function (callback) {
            return $(this).on(eventName, callback);
        };
    });
})(jQuery);

(function (UI) {

    "use strict";

    var stacks = [];

    UI.component('stackMargin', {

        defaults: {
            cls: 'uk-margin-small-top',
            rowfirst: false,
            observe: false
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-margin]', context).each(function () {

                    var ele = UI.$(this);

                    if (!ele.data('stackMargin')) {
                        UI.stackMargin(ele, UI.Utils.options(ele.attr('data-uk-margin')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            UI.$win.on('resize orientationchange', function () {

                var fn = function fn() {
                    $this.process();
                };

                UI.$(function () {
                    fn();
                    UI.$win.on('load', fn);
                });

                return UI.Utils.debounce(fn, 20);
            }());

            this.on('display.uk.check', function (e) {
                if (this.element.is(':visible')) this.process();
            }.bind(this));

            if (this.options.observe) {

                UI.domObserve(this.element, function (e) {
                    if ($this.element.is(':visible')) $this.process();
                });
            }

            stacks.push(this);
        },

        process: function process() {

            var $this = this,
                columns = this.element.children();

            UI.Utils.stackMargin(columns, this.options);

            if (!this.options.rowfirst || !columns.length) {
                return this;
            }

            // Mark first column elements
            var group = {},
                minleft = false;

            columns.removeClass(this.options.rowfirst).each(function (offset, $ele) {

                $ele = UI.$(this);

                if (this.style.display != 'none') {
                    offset = $ele.offset().left;
                    ((group[offset] = group[offset] || []) && group[offset]).push(this);
                    minleft = minleft === false ? offset : Math.min(minleft, offset);
                }
            });

            UI.$(group[minleft]).addClass(this.options.rowfirst);

            return this;
        }

    });

    // responsive element e.g. iframes

    (function () {

        var elements = [],
            check = function check(ele) {

            if (!ele.is(':visible')) return;

            var width = ele.parent().width(),
                iwidth = ele.data('width'),
                ratio = width / iwidth,
                height = Math.floor(ratio * ele.data('height'));

            ele.css({ height: width < iwidth ? height : ele.data('height') });
        };

        UI.component('responsiveElement', {

            defaults: {},

            boot: function boot() {

                // init code
                UI.ready(function (context) {

                    UI.$('iframe.uk-responsive-width, [data-uk-responsive]', context).each(function () {

                        var ele = UI.$(this),
                            obj;

                        if (!ele.data('responsiveElement')) {
                            obj = UI.responsiveElement(ele, {});
                        }
                    });
                });
            },

            init: function init() {

                var ele = this.element;

                if (ele.attr('width') && ele.attr('height')) {

                    ele.data({
                        width: ele.attr('width'),
                        height: ele.attr('height')
                    }).on('display.uk.check', function () {
                        check(ele);
                    });

                    check(ele);

                    elements.push(ele);
                }
            }
        });

        UI.$win.on('resize load', UI.Utils.debounce(function () {

            elements.forEach(function (ele) {
                check(ele);
            });
        }, 15));
    })();

    // helper

    UI.Utils.stackMargin = function (elements, options) {

        options = UI.$.extend({
            cls: 'uk-margin-small-top'
        }, options);

        elements = UI.$(elements).removeClass(options.cls);

        var min = false;

        elements.each(function (offset, height, pos, $ele) {

            $ele = UI.$(this);

            if ($ele.css('display') != 'none') {

                offset = $ele.offset();
                height = $ele.outerHeight();
                pos = offset.top + height;

                $ele.data({
                    ukMarginPos: pos,
                    ukMarginTop: offset.top
                });

                if (min === false || offset.top < min.top) {

                    min = {
                        top: offset.top,
                        left: offset.left,
                        pos: pos
                    };
                }
            }
        }).each(function ($ele) {

            $ele = UI.$(this);

            if ($ele.css('display') != 'none' && $ele.data('ukMarginTop') > min.top && $ele.data('ukMarginPos') > min.pos) {
                $ele.addClass(options.cls);
            }
        });
    };

    UI.Utils.matchHeights = function (elements, options) {

        elements = UI.$(elements).css('min-height', '');
        options = UI.$.extend({ row: true }, options);

        var matchHeights = function matchHeights(group) {

            if (group.length < 2) return;

            var max = 0;

            group.each(function () {
                max = Math.max(max, UI.$(this).outerHeight());
            }).each(function () {

                var element = UI.$(this),
                    height = max - (element.css('box-sizing') == 'border-box' ? 0 : element.outerHeight() - element.height());

                element.css('min-height', height + 'px');
            });
        };

        if (options.row) {

            elements.first().width(); // force redraw

            setTimeout(function () {

                var lastoffset = false,
                    group = [];

                elements.each(function () {

                    var ele = UI.$(this),
                        offset = ele.offset().top;

                    if (offset != lastoffset && group.length) {

                        matchHeights(UI.$(group));
                        group = [];
                        offset = ele.offset().top;
                    }

                    group.push(ele);
                    lastoffset = offset;
                });

                if (group.length) {
                    matchHeights(UI.$(group));
                }
            }, 0);
        } else {
            matchHeights(elements);
        }
    };

    (function (cacheSvgs) {

        UI.Utils.inlineSvg = function (selector, root) {

            var images = UI.$(selector || 'img[src$=".svg"]', root || document).each(function () {

                var img = UI.$(this),
                    src = img.attr('src');

                if (!cacheSvgs[src]) {

                    var d = UI.$.Deferred();

                    UI.$.get(src, { nc: Math.random() }, function (data) {
                        d.resolve(UI.$(data).find('svg'));
                    });

                    cacheSvgs[src] = d.promise();
                }

                cacheSvgs[src].then(function (svg) {

                    var $svg = UI.$(svg).clone();

                    if (img.attr('id')) $svg.attr('id', img.attr('id'));
                    if (img.attr('class')) $svg.attr('class', img.attr('class'));
                    if (img.attr('style')) $svg.attr('style', img.attr('style'));

                    if (img.attr('width')) {
                        $svg.attr('width', img.attr('width'));
                        if (!img.attr('height')) $svg.removeAttr('height');
                    }

                    if (img.attr('height')) {
                        $svg.attr('height', img.attr('height'));
                        if (!img.attr('width')) $svg.removeAttr('width');
                    }

                    img.replaceWith($svg);
                });
            });
        };

        // init code
        UI.ready(function (context) {
            UI.Utils.inlineSvg('[data-uk-svg]', context);
        });
    })({});

    UI.Utils.getCssVar = function (name) {

        /* usage in css:  .var-name:before { content:"xyz" } */

        var val,
            doc = document.documentElement,
            element = doc.appendChild(document.createElement('div'));

        element.classList.add('var-' + name);

        try {
            val = JSON.parse(val = getComputedStyle(element, ':before').content.replace(/^["'](.*)["']$/, '$1'));
        } catch (e) {
            val = undefined;
        }

        doc.removeChild(element);

        return val;
    };
})(UIkit2);

(function (UI) {

    "use strict";

    UI.component('smoothScroll', {

        boot: function boot() {

            // init code
            UI.$html.on('click.smooth-scroll.uikit', '[data-uk-smooth-scroll]', function (e) {
                var ele = UI.$(this);

                if (!ele.data('smoothScroll')) {
                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr('data-uk-smooth-scroll')));
                    ele.trigger('click');
                }

                return false;
            });
        },

        init: function init() {

            var $this = this;

            this.on('click', function (e) {
                e.preventDefault();
                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$('body'), $this.options);
            });
        }
    });

    function scrollToElement(ele, options) {

        options = UI.$.extend({
            duration: 1000,
            transition: 'easeOutExpo',
            offset: 0,
            complete: function complete() {}
        }, options);

        // get / set parameters
        var target = ele.offset().top - options.offset,
            docheight = UI.$doc.height(),
            winheight = window.innerHeight;

        if (target + winheight > docheight) {
            target = docheight - winheight;
        }

        // animate to target, fire callback when done
        UI.$('html,body').stop().animate({ scrollTop: target }, options.duration, options.transition).promise().done(options.complete);
    }

    UI.Utils.scrollToElement = scrollToElement;

    if (!UI.$.easing.easeOutExpo) {
        UI.$.easing.easeOutExpo = function (x, t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };
    }
})(UIkit2);

(function (UI) {

    "use strict";

    var $win = UI.$win,
        $doc = UI.$doc,
        scrollspies = [],
        checkScrollSpy = function checkScrollSpy() {
        for (var i = 0; i < scrollspies.length; i++) {
            window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
        }
    };

    UI.component('scrollspy', {

        defaults: {
            target: false,
            cls: 'uk-scrollspy-inview',
            initcls: 'uk-scrollspy-init-inview',
            topoffset: 0,
            leftoffset: 0,
            repeat: false,
            delay: 0
        },

        boot: function boot() {

            // listen to scroll and resize
            $doc.on('scrolling.uk.document', checkScrollSpy);
            $win.on('load resize orientationchange', UI.Utils.debounce(checkScrollSpy, 50));

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-scrollspy]', context).each(function () {

                    var element = UI.$(this);

                    if (!element.data('scrollspy')) {
                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr('data-uk-scrollspy')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this,
                inviewstate,
                initinview,
                togglecls = this.options.cls.split(/,/),
                fn = function fn() {

                var elements = $this.options.target ? $this.element.find($this.options.target) : $this.element,
                    delayIdx = elements.length === 1 ? 1 : 0,
                    toggleclsIdx = 0;

                elements.each(function (idx) {

                    var element = UI.$(this),
                        inviewstate = element.data('inviewstate'),
                        inview = UI.Utils.isInView(element, $this.options),
                        toggle = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

                        if (!initinview) {
                            element.addClass($this.options.initcls);
                            $this.offset = element.offset();
                            initinview = true;

                            element.trigger('init.uk.scrollspy');
                        }

                        element.data('scrollspy-idle', setTimeout(function () {

                            element.addClass('uk-scrollspy-inview').toggleClass(toggle).width();
                            element.trigger('inview.uk.scrollspy');

                            element.data('scrollspy-idle', false);
                            element.data('inviewstate', true);
                        }, $this.options.delay * delayIdx));

                        delayIdx++;
                    }

                    if (!inview && inviewstate && $this.options.repeat) {

                        if (element.data('scrollspy-idle')) {
                            clearTimeout(element.data('scrollspy-idle'));
                            element.data('scrollspy-idle', false);
                        }

                        element.removeClass('uk-scrollspy-inview').toggleClass(toggle);
                        element.data('inviewstate', false);

                        element.trigger('outview.uk.scrollspy');
                    }

                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? toggleclsIdx + 1 : 0;
                });
            };

            fn();

            this.check = fn;

            scrollspies.push(this);
        }
    });

    var scrollspynavs = [],
        checkScrollSpyNavs = function checkScrollSpyNavs() {
        for (var i = 0; i < scrollspynavs.length; i++) {
            window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
        }
    };

    UI.component('scrollspynav', {

        defaults: {
            cls: 'uk-active',
            closest: false,
            topoffset: 0,
            leftoffset: 0,
            smoothscroll: false
        },

        boot: function boot() {

            // listen to scroll and resize
            $doc.on('scrolling.uk.document', checkScrollSpyNavs);
            $win.on('resize orientationchange', UI.Utils.debounce(checkScrollSpyNavs, 50));

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-scrollspy-nav]', context).each(function () {

                    var element = UI.$(this);

                    if (!element.data('scrollspynav')) {
                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr('data-uk-scrollspy-nav')));
                    }
                });
            });
        },

        init: function init() {

            var ids = [],
                links = this.find("a[href^='#']").each(function () {
                if (this.getAttribute('href').trim() !== '#') ids.push(this.getAttribute('href'));
            }),
                targets = UI.$(ids.join(",")),
                clsActive = this.options.cls,
                clsClosest = this.options.closest || this.options.closest;

            var $this = this,
                inviews,
                fn = function fn() {

                inviews = [];

                for (var i = 0; i < targets.length; i++) {
                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
                        inviews.push(targets.eq(i));
                    }
                }

                if (inviews.length) {

                    var navitems,
                        scrollTop = $win.scrollTop(),
                        target = function () {
                        for (var i = 0; i < inviews.length; i++) {
                            if (inviews[i].offset().top - $this.options.topoffset >= scrollTop) {
                                return inviews[i];
                            }
                        }
                    }();

                    if (!target) return;

                    if ($this.options.closest) {
                        links.blur().closest(clsClosest).removeClass(clsActive);
                        navitems = links.filter("a[href='#" + target.attr('id') + "']").closest(clsClosest).addClass(clsActive);
                    } else {
                        navitems = links.removeClass(clsActive).filter("a[href='#" + target.attr("id") + "']").addClass(clsActive);
                    }

                    $this.element.trigger('inview.uk.scrollspynav', [target, navitems]);
                }
            };

            if (this.options.smoothscroll && UI.smoothScroll) {
                links.each(function () {
                    UI.smoothScroll(this, $this.options.smoothscroll);
                });
            }

            fn();

            this.element.data('scrollspynav', this);

            this.check = fn;
            scrollspynavs.push(this);
        }
    });
})(UIkit2);

(function (UI) {

    "use strict";

    var toggles = [];

    UI.component('toggle', {

        defaults: {
            target: false,
            cls: 'uk-hidden',
            animation: false,
            duration: 200
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-toggle]', context).each(function () {
                    var ele = UI.$(this);

                    if (!ele.data('toggle')) {
                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr('data-uk-toggle')));
                    }
                });

                setTimeout(function () {

                    toggles.forEach(function (toggle) {
                        toggle.getToggles();
                    });
                }, 0);
            });
        },

        init: function init() {

            var $this = this;

            this.aria = this.options.cls.indexOf('uk-hidden') !== -1;

            this.on('click', function (e) {

                if ($this.element.is('a[href="#"]')) {
                    e.preventDefault();
                }

                $this.toggle();
            });

            toggles.push(this);
        },

        toggle: function toggle() {

            this.getToggles();

            if (!this.totoggle.length) return;

            if (this.options.animation && UI.support.animation) {

                var $this = this,
                    animations = this.options.animation.split(',');

                if (animations.length == 1) {
                    animations[1] = animations[0];
                }

                animations[0] = animations[0].trim();
                animations[1] = animations[1].trim();

                this.totoggle.css('animation-duration', this.options.duration + 'ms');

                this.totoggle.each(function () {

                    var ele = UI.$(this);

                    if (ele.hasClass($this.options.cls)) {

                        ele.toggleClass($this.options.cls);

                        UI.Utils.animate(ele, animations[0]).then(function () {
                            ele.css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });
                    } else {

                        UI.Utils.animate(this, animations[1] + ' uk-animation-reverse').then(function () {
                            ele.toggleClass($this.options.cls).css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });
                    }
                });
            } else {
                this.totoggle.toggleClass(this.options.cls);
                UI.Utils.checkDisplay(this.totoggle);
            }

            this.updateAria();
        },

        getToggles: function getToggles() {
            this.totoggle = this.options.target ? UI.$(this.options.target) : [];
            this.updateAria();
        },

        updateAria: function updateAria() {
            if (this.aria && this.totoggle.length) {
                this.totoggle.not('[aria-hidden]').each(function () {
                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
                });
            }
        }
    });
})(UIkit2);

(function (UI) {

    "use strict";

    UI.component('alert', {

        defaults: {
            fade: true,
            duration: 200,
            trigger: '.uk-alert-close'
        },

        boot: function boot() {

            // init code
            UI.$html.on('click.alert.uikit', '[data-uk-alert]', function (e) {

                var ele = UI.$(this);

                if (!ele.data('alert')) {

                    var alert = UI.alert(ele, UI.Utils.options(ele.attr('data-uk-alert')));

                    if (UI.$(e.target).is(alert.options.trigger)) {
                        e.preventDefault();
                        alert.close();
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            this.on('click', this.options.trigger, function (e) {
                e.preventDefault();
                $this.close();
            });
        },

        close: function close() {

            var element = this.trigger('close.uk.alert'),
                removeElement = function () {
                this.trigger('closed.uk.alert').remove();
            }.bind(this);

            if (this.options.fade) {
                element.css('overflow', 'hidden').css("max-height", element.height()).animate({
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }, this.options.duration, removeElement);
            } else {
                removeElement();
            }
        }

    });
})(UIkit2);

(function (UI) {

    "use strict";

    UI.component('buttonRadio', {

        defaults: {
            activeClass: 'uk-active',
            target: '.uk-button'
        },

        boot: function boot() {

            // init code
            UI.$html.on('click.buttonradio.uikit', '[data-uk-button-radio]', function (e) {

                var ele = UI.$(this);

                if (!ele.data('buttonRadio')) {

                    var obj = UI.buttonRadio(ele, UI.Utils.options(ele.attr('data-uk-button-radio'))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger('click');
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on('click', this.options.target, function (e) {

                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
                ele.addClass($this.options.activeClass);

                // Update ARIA
                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
                ele.attr('aria-checked', 'true');

                $this.trigger('change.uk.button', [ele]);
            });
        },

        getSelected: function getSelected() {
            return this.find('.' + this.options.activeClass);
        }
    });

    UI.component('buttonCheckbox', {

        defaults: {
            activeClass: 'uk-active',
            target: '.uk-button'
        },

        boot: function boot() {

            UI.$html.on('click.buttoncheckbox.uikit', '[data-uk-button-checkbox]', function (e) {
                var ele = UI.$(this);

                if (!ele.data('buttonCheckbox')) {

                    var obj = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr('data-uk-button-checkbox'))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger('click');
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on('click', this.options.target, function (e) {
                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                ele.toggleClass($this.options.activeClass).blur();

                // Update ARIA
                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));

                $this.trigger('change.uk.button', [ele]);
            });
        },

        getSelected: function getSelected() {
            return this.find('.' + this.options.activeClass);
        }
    });

    UI.component('button', {

        defaults: {},

        boot: function boot() {

            UI.$html.on('click.button.uikit', '[data-uk-button]', function (e) {
                var ele = UI.$(this);

                if (!ele.data('button')) {

                    var obj = UI.button(ele, UI.Utils.options(ele.attr('data-uk-button')));
                    ele.trigger('click');
                }
            });
        },

        init: function init() {

            var $this = this;

            // Init ARIA
            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));

            this.on('click', function (e) {

                if ($this.element.is('a[href="#"]')) e.preventDefault();

                $this.toggle();
                $this.trigger('change.uk.button', [$this.element.blur().hasClass('uk-active')]);
            });
        },

        toggle: function toggle() {
            this.element.toggleClass('uk-active');

            // Update ARIA
            this.element.attr('aria-pressed', this.element.hasClass('uk-active'));
        }
    });
})(UIkit2);

(function (UI) {

    "use strict";

    var active = false,
        hoverIdle,
        flips = {
        x: {
            'bottom-left': 'bottom-right',
            'bottom-right': 'bottom-left',
            'bottom-center': 'bottom-center',
            'top-left': 'top-right',
            'top-right': 'top-left',
            'top-center': 'top-center',
            'left-top': 'right-top',
            'left-bottom': 'right-bottom',
            'left-center': 'right-center',
            'right-top': 'left-top',
            'right-bottom': 'left-bottom',
            'right-center': 'left-center'
        },
        y: {
            'bottom-left': 'top-left',
            'bottom-right': 'top-right',
            'bottom-center': 'top-center',
            'top-left': 'bottom-left',
            'top-right': 'bottom-right',
            'top-center': 'bottom-center',
            'left-top': 'left-bottom',
            'left-bottom': 'left-top',
            'left-center': 'left-center',
            'right-top': 'right-bottom',
            'right-bottom': 'right-top',
            'right-center': 'right-center'
        },
        xy: {
            'bottom-left': 'top-right',
            'bottom-right': 'top-left',
            'bottom-center': 'top-center',
            'top-left': 'bottom-right',
            'top-right': 'bottom-left',
            'top-center': 'bottom-center',
            'left-top': 'right-bottom',
            'left-bottom': 'right-top',
            'left-center': 'right-center',
            'right-top': 'left-bottom',
            'right-bottom': 'left-top',
            'right-center': 'left-center'
        }
    };

    UI.component('dropdown', {

        defaults: {
            mode: 'hover',
            pos: 'bottom-left',
            offset: 0,
            remaintime: 800,
            justify: false,
            boundary: UI.$win,
            delay: 0,
            dropdownSelector: '.uk-dropdown,.uk-dropdown-blank',
            hoverDelayIdle: 250,
            preventflip: false
        },

        remainIdle: false,

        boot: function boot() {

            var triggerevent = UI.support.touch ? 'click' : 'mouseenter';

            // init code
            UI.$html.on(triggerevent + '.dropdown.uikit focus pointerdown', '[data-uk-dropdown]', function (e) {

                var ele = UI.$(this);

                if (!ele.data('dropdown')) {

                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr('data-uk-dropdown')));

                    if (e.type == 'click' || e.type == 'mouseenter' && dropdown.options.mode == 'hover') {
                        dropdown.element.trigger(triggerevent);
                    }

                    if (dropdown.dropdown.length) {
                        e.preventDefault();
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            this.dropdown = this.find(this.options.dropdownSelector);
            this.offsetParent = this.dropdown.parents().filter(function () {
                return UI.$.inArray(UI.$(this).css('position'), ['relative', 'fixed', 'absolute']) !== -1;
            }).slice(0, 1);

            if (!this.offsetParent.length) {
                this.offsetParent = this.element;
            }

            this.centered = this.dropdown.hasClass('uk-dropdown-center');
            this.justified = this.options.justify ? UI.$(this.options.justify) : false;

            this.boundary = UI.$(this.options.boundary);

            if (!this.boundary.length) {
                this.boundary = UI.$win;
            }

            // legacy DEPRECATED!
            if (this.dropdown.hasClass('uk-dropdown-up')) {
                this.options.pos = 'top-left';
            }
            if (this.dropdown.hasClass('uk-dropdown-flip')) {
                this.options.pos = this.options.pos.replace('left', 'right');
            }
            if (this.dropdown.hasClass('uk-dropdown-center')) {
                this.options.pos = this.options.pos.replace(/(left|right)/, 'center');
            }
            //-- end legacy

            // Init ARIA
            this.element.attr('aria-haspopup', 'true');
            this.element.attr('aria-expanded', this.element.hasClass('uk-open'));
            this.dropdown.attr('aria-hidden', 'true');

            if (this.options.mode == 'click' || UI.support.touch) {

                this.on('click.uk.dropdown', function (e) {

                    var $target = UI.$(e.target);

                    if (!$target.parents($this.options.dropdownSelector).length) {

                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || $this.dropdown.length && !$this.dropdown.is(':visible')) {
                            e.preventDefault();
                        }

                        $target.blur();
                    }

                    if (!$this.element.hasClass('uk-open')) {

                        $this.show();
                    } else {

                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
                            $this.hide();
                        }
                    }
                });
            } else {

                this.on('mouseenter', function (e) {

                    $this.trigger('pointerenter.uk.dropdown', [$this]);

                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    if (active && active == $this) {
                        return;
                    }

                    // pseudo manuAim
                    if (active && active != $this) {

                        hoverIdle = setTimeout(function () {
                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                        }, $this.options.hoverDelayIdle);
                    } else {

                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                    }
                }).on('mouseleave', function () {

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    $this.remainIdle = setTimeout(function () {
                        if (active && active == $this) $this.hide();
                    }, $this.options.remaintime);

                    $this.trigger('pointerleave.uk.dropdown', [$this]);
                }).on('click', function (e) {

                    var $target = UI.$(e.target);

                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }

                    if (active && active == $this) {
                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
                            $this.hide();
                        }
                        return;
                    }

                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")) {
                        e.preventDefault();
                    }

                    $this.show();
                });
            }
        },

        show: function show() {

            UI.$html.off('click.outer.dropdown');

            if (active && active != this) {
                active.hide(true);
            }

            if (hoverIdle) {
                clearTimeout(hoverIdle);
            }

            this.trigger('beforeshow.uk.dropdown', [this]);

            this.checkDimensions();
            this.element.addClass('uk-open');

            // Update ARIA
            this.element.attr('aria-expanded', 'true');
            this.dropdown.attr('aria-hidden', 'false');

            this.trigger('show.uk.dropdown', [this]);

            UI.Utils.checkDisplay(this.dropdown, true);
            UI.Utils.focus(this.dropdown);
            active = this;

            this.registerOuterClick();
        },

        hide: function hide(force) {

            this.trigger('beforehide.uk.dropdown', [this, force]);

            this.element.removeClass('uk-open');

            if (this.remainIdle) {
                clearTimeout(this.remainIdle);
            }

            this.remainIdle = false;

            // Update ARIA
            this.element.attr('aria-expanded', 'false');
            this.dropdown.attr('aria-hidden', 'true');

            this.trigger('hide.uk.dropdown', [this, force]);

            if (active == this) active = false;
        },

        registerOuterClick: function registerOuterClick() {

            var $this = this;

            UI.$html.off('click.outer.dropdown');

            setTimeout(function () {

                UI.$html.on('click.outer.dropdown', function (e) {

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    var $target = UI.$(e.target);

                    if (active == $this && !$this.element.find(e.target).length) {
                        $this.hide(true);
                        UI.$html.off('click.outer.dropdown');
                    }
                });
            }, 10);
        },

        checkDimensions: function checkDimensions() {

            if (!this.dropdown.length) return;

            // reset
            this.dropdown.removeClass('uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip').css({
                topLeft: '',
                left: '',
                marginLeft: '',
                marginRight: ''
            });

            if (this.justified && this.justified.length) {
                this.dropdown.css('min-width', '');
            }

            var $this = this,
                pos = UI.$.extend({}, this.offsetParent.offset(), { width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight }),
                posoffset = this.options.offset,
                dropdown = this.dropdown,
                offset = dropdown.show().offset() || { left: 0, top: 0 },
                width = dropdown.outerWidth(),
                height = dropdown.outerHeight(),
                boundarywidth = this.boundary.width(),
                boundaryoffset = this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : { top: 0, left: 0 },
                dpos = this.options.pos;

            var variants = {
                'bottom-left': { top: 0 + pos.height + posoffset, left: 0 },
                'bottom-right': { top: 0 + pos.height + posoffset, left: 0 + pos.width - width },
                'bottom-center': { top: 0 + pos.height + posoffset, left: 0 + pos.width / 2 - width / 2 },
                'top-left': { top: 0 - height - posoffset, left: 0 },
                'top-right': { top: 0 - height - posoffset, left: 0 + pos.width - width },
                'top-center': { top: 0 - height - posoffset, left: 0 + pos.width / 2 - width / 2 },
                'left-top': { top: 0, left: 0 - width - posoffset },
                'left-bottom': { top: 0 + pos.height - height, left: 0 - width - posoffset },
                'left-center': { top: 0 + pos.height / 2 - height / 2, left: 0 - width - posoffset },
                'right-top': { top: 0, left: 0 + pos.width + posoffset },
                'right-bottom': { top: 0 + pos.height - height, left: 0 + pos.width + posoffset },
                'right-center': { top: 0 + pos.height / 2 - height / 2, left: 0 + pos.width + posoffset }
            },
                css = {},
                pp;

            pp = dpos.split('-');
            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];

            // justify dropdown
            if (this.justified && this.justified.length) {
                justify(dropdown.css({ left: 0 }), this.justified, boundarywidth);
            } else {

                if (this.options.preventflip !== true) {

                    var fdpos;

                    switch (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                        case "x":
                            if (this.options.preventflip !== 'x') fdpos = flips['x'][dpos] || 'right-top';
                            break;
                        case "y":
                            if (this.options.preventflip !== 'y') fdpos = flips['y'][dpos] || 'top-left';
                            break;
                        case "xy":
                            if (!this.options.preventflip) fdpos = flips['xy'][dpos] || 'right-bottom';
                            break;
                    }

                    if (fdpos) {

                        pp = fdpos.split('-');
                        css = variants[fdpos] ? variants[fdpos] : variants['bottom-left'];
                        dropdown.addClass('uk-dropdown-autoflip');

                        // check flipped
                        if (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                            pp = dpos.split('-');
                            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
                        }
                    }
                }
            }

            if (width > boundarywidth) {
                dropdown.addClass('uk-dropdown-stack');
                this.trigger('stack.uk.dropdown', [this]);
            }

            dropdown.css(css).css('display', '').addClass('uk-dropdown-' + pp[0]);
        },

        checkBoundary: function checkBoundary(left, top, width, height, boundarywidth) {

            var axis = "";

            if (left < 0 || left - UI.$win.scrollLeft() + width > boundarywidth) {
                axis += "x";
            }

            if (top - UI.$win.scrollTop() < 0 || top - UI.$win.scrollTop() + height > window.innerHeight) {
                axis += "y";
            }

            return axis;
        }
    });

    UI.component('dropdownOverlay', {

        defaults: {
            justify: false,
            cls: '',
            duration: 200
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-dropdown-overlay]', context).each(function () {
                    var ele = UI.$(this);

                    if (!ele.data('dropdownOverlay')) {
                        UI.dropdownOverlay(ele, UI.Utils.options(ele.attr('data-uk-dropdown-overlay')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
            this.overlay = this.element.find('uk-dropdown-overlay');

            if (!this.overlay.length) {
                this.overlay = UI.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element);
            }

            this.overlay.addClass(this.options.cls);

            this.on({

                'beforeshow.uk.dropdown': function beforeshowUkDropdown(e, dropdown) {
                    $this.dropdown = dropdown;

                    if ($this.justified && $this.justified.length) {
                        justify($this.overlay.css({ display: 'block', marginLeft: '', marginRight: '' }), $this.justified, $this.justified.outerWidth());
                    }
                },

                'show.uk.dropdown': function showUkDropdown(e, dropdown) {

                    var h = $this.dropdown.dropdown.outerHeight(true);

                    $this.dropdown.element.removeClass('uk-open');

                    $this.overlay.stop().css('display', 'block').animate({ height: h }, $this.options.duration, function () {

                        $this.dropdown.dropdown.css('visibility', '');
                        $this.dropdown.element.addClass('uk-open');

                        UI.Utils.checkDisplay($this.dropdown.dropdown, true);
                    });

                    $this.pointerleave = false;
                },

                'hide.uk.dropdown': function hideUkDropdown() {
                    $this.overlay.stop().animate({ height: 0 }, $this.options.duration);
                },

                'pointerenter.uk.dropdown': function pointerenterUkDropdown(e, dropdown) {
                    clearTimeout($this.remainIdle);
                },

                'pointerleave.uk.dropdown': function pointerleaveUkDropdown(e, dropdown) {
                    $this.pointerleave = true;
                }
            });

            this.overlay.on({

                'mouseenter': function mouseenter() {
                    if ($this.remainIdle) {
                        clearTimeout($this.dropdown.remainIdle);
                        clearTimeout($this.remainIdle);
                    }
                },

                'mouseleave': function mouseleave() {

                    if ($this.pointerleave && active) {

                        $this.remainIdle = setTimeout(function () {
                            if (active) active.hide();
                        }, active.options.remaintime);
                    }
                }
            });
        }

    });

    function justify(ele, justifyTo, boundarywidth, offset) {

        ele = UI.$(ele);
        justifyTo = UI.$(justifyTo);
        boundarywidth = boundarywidth || window.innerWidth;
        offset = offset || ele.offset();

        if (justifyTo.length) {

            var jwidth = justifyTo.outerWidth();

            ele.css('min-width', jwidth);

            if (UI.langdirection == 'right') {

                var right1 = boundarywidth - (justifyTo.offset().left + jwidth),
                    right2 = boundarywidth - (ele.offset().left + ele.outerWidth());

                ele.css('margin-right', right1 - right2);
            } else {
                ele.css('margin-left', justifyTo.offset().left - offset.left);
            }
        }
    }
})(UIkit2);

(function (UI) {

    "use strict";

    var grids = [];

    UI.component('gridMatchHeight', {

        defaults: {
            target: false,
            row: true,
            ignorestacked: false,
            observe: false
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-grid-match]', context).each(function () {
                    var grid = UI.$(this),
                        obj;

                    if (!grid.data('gridMatchHeight')) {
                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr('data-uk-grid-match')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.columns = this.element.children();
            this.elements = this.options.target ? this.find(this.options.target) : this.columns;

            if (!this.columns.length) return;

            UI.$win.on('load resize orientationchange', function () {

                var fn = function fn() {
                    if ($this.element.is(':visible')) $this.match();
                };

                UI.$(function () {
                    fn();
                });

                return UI.Utils.debounce(fn, 50);
            }());

            if (this.options.observe) {

                UI.domObserve(this.element, function (e) {
                    if ($this.element.is(':visible')) $this.match();
                });
            }

            this.on('display.uk.check', function (e) {
                if (this.element.is(':visible')) this.match();
            }.bind(this));

            grids.push(this);
        },

        match: function match() {

            var firstvisible = this.columns.filter(':visible:first');

            if (!firstvisible.length) return;

            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;

            if (stacked && !this.options.ignorestacked) {
                this.revert();
            } else {
                UI.Utils.matchHeights(this.elements, this.options);
            }

            return this;
        },

        revert: function revert() {
            this.elements.css('min-height', '');
            return this;
        }
    });

    UI.component('gridMargin', {

        defaults: {
            cls: 'uk-grid-margin',
            rowfirst: 'uk-row-first'
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-grid-margin]', context).each(function () {
                    var grid = UI.$(this),
                        obj;

                    if (!grid.data('gridMargin')) {
                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr('data-uk-grid-margin')));
                    }
                });
            });
        },

        init: function init() {

            var stackMargin = UI.stackMargin(this.element, this.options);
        }
    });
})(UIkit2);

(function (UI) {

    "use strict";

    var active = false,
        activeCount = 0,
        $html = UI.$html,
        body;

    UI.$win.on('resize orientationchange', UI.Utils.debounce(function () {
        UI.$('.uk-modal.uk-open').each(function () {
            return UI.$(this).data('modal') && UI.$(this).data('modal').resize();
        });
    }, 150));

    UI.component('modal', {

        defaults: {
            keyboard: true,
            bgclose: true,
            minScrollHeight: 150,
            center: false,
            modal: true
        },

        scrollable: false,
        transition: false,
        hasTransitioned: true,

        init: function init() {

            if (!body) body = UI.$('body');

            if (!this.element.length) return;

            var $this = this;

            this.paddingdir = 'padding-' + (UI.langdirection == 'left' ? 'right' : 'left');
            this.dialog = this.find('.uk-modal-dialog');

            this.active = false;

            // Update ARIA
            this.element.attr('aria-hidden', this.element.hasClass('uk-open'));

            this.on('click', '.uk-modal-close', function (e) {
                e.preventDefault();
                $this.hide();
            }).on('click', function (e) {

                var target = UI.$(e.target);

                if (target[0] == $this.element[0] && $this.options.bgclose) {
                    $this.hide();
                }
            });

            UI.domObserve(this.element, function (e) {
                $this.resize();
            });
        },

        toggle: function toggle() {
            return this[this.isActive() ? 'hide' : 'show']();
        },

        show: function show() {

            if (!this.element.length) return;

            var $this = this;

            if (this.isActive()) return;

            if (this.options.modal && active) {
                active.hide(true);
            }

            this.element.removeClass('uk-open').show();
            this.resize(true);

            if (this.options.modal) {
                active = this;
            }

            this.active = true;

            activeCount++;

            if (UI.support.transition) {
                this.hasTransitioned = false;
                this.element.one(UI.support.transition.end, function () {
                    $this.hasTransitioned = true;
                    UI.Utils.focus($this.dialog, 'a[href]');
                }).addClass('uk-open');
            } else {
                this.element.addClass('uk-open');
                UI.Utils.focus(this.dialog, 'a[href]');
            }

            $html.addClass('uk-modal-page').height(); // force browser engine redraw

            // Update ARIA
            this.element.attr('aria-hidden', 'false');

            this.element.trigger('show.uk.modal');

            UI.Utils.checkDisplay(this.dialog, true);

            return this;
        },

        hide: function hide(force) {

            if (!force && UI.support.transition && this.hasTransitioned) {

                var $this = this;

                this.one(UI.support.transition.end, function () {
                    $this._hide();
                }).removeClass('uk-open');
            } else {

                this._hide();
            }

            return this;
        },

        resize: function resize(force) {

            if (!this.isActive() && !force) return;

            var bodywidth = body.width();

            this.scrollbarwidth = window.innerWidth - bodywidth;

            body.css(this.paddingdir, this.scrollbarwidth);

            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');

            if (!this.updateScrollable() && this.options.center) {

                var dh = this.dialog.outerHeight(),
                    pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);

                if (dh + pad < window.innerHeight) {
                    this.dialog.css({ top: window.innerHeight / 2 - dh / 2 - pad });
                } else {
                    this.dialog.css({ top: '' });
                }
            }
        },

        updateScrollable: function updateScrollable() {

            // has scrollable?
            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');

            if (scrollable.length) {

                scrollable.css('height', 0);

                var offset = Math.abs(parseInt(this.dialog.css('margin-top'), 10)),
                    dh = this.dialog.outerHeight(),
                    wh = window.innerHeight,
                    h = wh - 2 * (offset < 20 ? 20 : offset) - dh;

                scrollable.css({
                    maxHeight: h < this.options.minScrollHeight ? '' : h,
                    height: ''
                });

                return true;
            }

            return false;
        },

        _hide: function _hide() {

            this.active = false;
            if (activeCount > 0) activeCount--;else activeCount = 0;

            this.element.hide().removeClass('uk-open');

            // Update ARIA
            this.element.attr('aria-hidden', 'true');

            if (!activeCount) {
                $html.removeClass('uk-modal-page');
                body.css(this.paddingdir, "");
            }

            if (active === this) active = false;

            this.trigger('hide.uk.modal');
        },

        isActive: function isActive() {
            return this.element.hasClass('uk-open');
        }

    });

    UI.component('modalTrigger', {

        boot: function boot() {

            // init code
            UI.$html.on('click.modal.uikit', '[data-uk-modal]', function (e) {

                var ele = UI.$(this);

                if (ele.is('a')) {
                    e.preventDefault();
                }

                if (!ele.data('modalTrigger')) {
                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr('data-uk-modal')));
                    modal.show();
                }
            });

            // close modal on esc button
            UI.$html.on('keydown.modal.uikit', function (e) {

                if (active && e.keyCode === 27 && active.options.keyboard) {
                    // ESC
                    e.preventDefault();
                    active.hide();
                }
            });
        },

        init: function init() {

            var $this = this;

            this.options = UI.$.extend({
                target: $this.element.is('a') ? $this.element.attr('href') : false
            }, this.options);

            this.modal = UI.modal(this.options.target, this.options);

            this.on("click", function (e) {
                e.preventDefault();
                $this.show();
            });

            //methods
            this.proxy(this.modal, 'show hide isActive');
        }
    });

    UI.modal.dialog = function (content, options) {

        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo('body'), options);

        modal.on('hide.uk.modal', function () {
            if (modal.persist) {
                modal.persist.appendTo(modal.persist.data('modalPersistParent'));
                modal.persist = false;
            }
            modal.element.remove();
        });

        setContent(content, modal);

        return modal;
    };

    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';

    UI.modal.alert = function (content, options) {

        options = UI.$.extend(true, { bgclose: false, keyboard: false, modal: false, labels: UI.modal.labels }, options);

        var modal = UI.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(content) + '</div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + options.labels.Ok + '</button></div>'].join(""), options);

        modal.on('show.uk.modal', function () {
            setTimeout(function () {
                modal.element.find('button:first').focus();
            }, 50);
        });

        return modal.show();
    };

    UI.modal.confirm = function (content, onconfirm, oncancel) {

        var options = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};

        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function () {};
        oncancel = UI.$.isFunction(oncancel) ? oncancel : function () {};
        options = UI.$.extend(true, { bgclose: false, keyboard: false, modal: false, labels: UI.modal.labels }, UI.$.isFunction(options) ? {} : options);

        var modal = UI.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(content) + '</div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + options.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + options.labels.Ok + '</button></div>'].join(""), options);

        modal.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
            UI.$(this).is('.js-modal-confirm') ? onconfirm() : oncancel();
            modal.hide();
        });

        modal.on('show.uk.modal', function () {
            setTimeout(function () {
                modal.element.find('.js-modal-confirm').focus();
            }, 50);
        });

        return modal.show();
    };

    UI.modal.prompt = function (text, value, onsubmit, options) {

        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function (value) {};
        options = UI.$.extend(true, { bgclose: false, keyboard: false, modal: false, labels: UI.modal.labels }, options);

        var modal = UI.modal.dialog([text ? '<div class="uk-modal-content uk-form">' + String(text) + '</div>' : '', '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + options.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + options.labels.Ok + '</button></div>'].join(""), options),
            input = modal.element.find("input[type='text']").val(value || '').on('keyup', function (e) {
            if (e.keyCode == 13) {
                modal.element.find('.js-modal-ok').trigger('click');
            }
        });

        modal.element.find('.js-modal-ok').on('click', function () {
            if (onsubmit(input.val()) !== false) {
                modal.hide();
            }
        });

        return modal.show();
    };

    UI.modal.blockUI = function (content, options) {

        var modal = UI.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(content || '<div class="uk-text-center">...</div>') + '</div>'].join(""), UI.$.extend({ bgclose: false, keyboard: false, modal: false }, options));

        modal.content = modal.element.find('.uk-modal-content:first');

        return modal.show();
    };

    UI.modal.labels = {
        Ok: 'Ok',
        Cancel: 'Cancel'
    };

    // helper functions
    function setContent(content, modal) {

        if (!modal) return;

        if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {

            // convert DOM object to a jQuery object
            content = content instanceof jQuery ? content : UI.$(content);

            if (content.parent().length) {
                modal.persist = content;
                modal.persist.data('modalPersistParent', content.parent());
            }
        } else if (typeof content === 'string' || typeof content === 'number') {
            // just insert the data as innerHTML
            content = UI.$('<div></div>').html(content);
        } else {
            // unsupported data type!
            content = UI.$('<div></div>').html('UIkit2.modal Error: Unsupported data type: ' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)));
        }

        content.appendTo(modal.element.find('.uk-modal-dialog'));

        return modal;
    }
})(UIkit2);

(function (UI) {

    "use strict";

    UI.component('nav', {

        defaults: {
            toggle: '>li.uk-parent > a[href="#"]',
            lists: '>li.uk-parent > ul',
            multiple: false
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-nav]', context).each(function () {
                    var nav = UI.$(this);

                    if (!nav.data('nav')) {
                        var obj = UI.nav(nav, UI.Utils.options(nav.attr('data-uk-nav')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.on('click.uk.nav', this.options.toggle, function (e) {
                e.preventDefault();
                var ele = UI.$(this);
                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
            });

            this.update();

            UI.domObserve(this.element, function (e) {
                if ($this.element.find($this.options.lists).not('[role]').length) {
                    $this.update();
                }
            });
        },

        update: function update() {

            var $this = this;

            this.find(this.options.lists).each(function () {

                var $ele = UI.$(this).attr('role', 'menu'),
                    parent = $ele.closest('li'),
                    active = parent.hasClass("uk-active");

                if (!parent.data('list-container')) {
                    $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
                    parent.data('list-container', $ele.parent()[active ? 'removeClass' : 'addClass']('uk-hidden'));
                }

                // Init ARIA
                parent.attr('aria-expanded', parent.hasClass("uk-open"));

                if (active) $this.open(parent, true);
            });
        },

        open: function open(li, noanimation) {

            var $this = this,
                element = this.element,
                $li = UI.$(li),
                $container = $li.data('list-container');

            if (!this.options.multiple) {

                element.children('.uk-open').not(li).each(function () {

                    var ele = UI.$(this);

                    if (ele.data('list-container')) {
                        ele.data('list-container').stop().animate({ height: 0 }, function () {
                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
                        });
                    }
                });
            }

            $li.toggleClass('uk-open');

            // Update ARIA
            $li.attr('aria-expanded', $li.hasClass('uk-open'));

            if ($container) {

                if ($li.hasClass('uk-open')) {
                    $container.removeClass('uk-hidden');
                }

                if (noanimation) {

                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

                    if (!$li.hasClass('uk-open')) {
                        $container.addClass('uk-hidden');
                    }

                    this.trigger('display.uk.check');
                } else {

                    $container.stop().animate({
                        height: $li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0
                    }, function () {

                        if (!$li.hasClass('uk-open')) {
                            $container.addClass('uk-hidden');
                        } else {
                            $container.css('height', '');
                        }

                        $this.trigger('display.uk.check');
                    });
                }
            }
        }
    });

    // helper

    function getHeight(ele) {

        var $ele = UI.$(ele),
            height = 'auto';

        if ($ele.is(':visible')) {
            height = $ele.outerHeight();
        } else {

            var tmp = {
                position: $ele.css('position'),
                visibility: $ele.css('visibility'),
                display: $ele.css('display')
            };

            height = $ele.css({ position: 'absolute', visibility: 'hidden', display: 'block' }).outerHeight();

            $ele.css(tmp); // reset element
        }

        return height;
    }
})(UIkit2);

(function (UI) {

    "use strict";

    var scrollpos = { x: window.scrollX, y: window.scrollY },
        $win = UI.$win,
        $doc = UI.$doc,
        $html = UI.$html,
        Offcanvas = {

        show: function show(element, options) {

            element = UI.$(element);

            if (!element.length) return;

            options = UI.$.extend({ mode: 'push' }, options);

            var $body = UI.$('body'),
                bar = element.find('.uk-offcanvas-bar:first'),
                rtl = UI.langdirection == 'right',
                flip = bar.hasClass('uk-offcanvas-bar-flip') ? -1 : 1,
                dir = flip * (rtl ? -1 : 1),
                scrollbarwidth = window.innerWidth - $body.width();

            scrollpos = { x: window.pageXOffset, y: window.pageYOffset };

            bar.attr('mode', options.mode);
            element.addClass('uk-active');

            $body.css({ width: window.innerWidth - scrollbarwidth, height: window.innerHeight }).addClass('uk-offcanvas-page');

            if (options.mode == 'push' || options.mode == 'reveal') {
                $body.css(rtl ? 'margin-right' : 'margin-left', (rtl ? -1 : 1) * (bar.outerWidth() * dir));
            }

            if (options.mode == 'reveal') {
                bar.css('clip', 'rect(0, ' + bar.outerWidth() + 'px, 100vh, 0)');
            }

            $html.css('margin-top', scrollpos.y * -1).width(); // .width() - force redraw


            bar.addClass('uk-offcanvas-bar-show');

            this._initElement(element);

            bar.trigger('show.uk.offcanvas', [element, bar]);

            // Update ARIA
            element.attr('aria-hidden', 'false');
        },

        hide: function hide(force) {

            var $body = UI.$('body'),
                panel = UI.$('.uk-offcanvas.uk-active'),
                rtl = UI.langdirection == 'right',
                bar = panel.find('.uk-offcanvas-bar:first'),
                finalize = function finalize() {
                $body.removeClass('uk-offcanvas-page').css({ width: '', height: '', marginLeft: '', marginRight: '' });
                panel.removeClass('uk-active');

                bar.removeClass('uk-offcanvas-bar-show');
                $html.css('margin-top', '');
                window.scrollTo(scrollpos.x, scrollpos.y);
                bar.trigger('hide.uk.offcanvas', [panel, bar]);

                // Update ARIA
                panel.attr('aria-hidden', 'true');
            };

            if (!panel.length) return;
            if (bar.attr('mode') == 'none') force = true;

            if (UI.support.transition && !force) {

                $body.one(UI.support.transition.end, function () {
                    finalize();
                }).css(rtl ? 'margin-right' : 'margin-left', '');

                if (bar.attr('mode') == 'reveal') {
                    bar.css('clip', '');
                }

                setTimeout(function () {
                    bar.removeClass('uk-offcanvas-bar-show');
                }, 0);
            } else {
                finalize();
            }
        },

        _initElement: function _initElement(element) {

            if (element.data('OffcanvasInit')) return;

            element.on('click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas', function (e) {

                var target = UI.$(e.target);

                if (!e.type.match(/swipe/)) {

                    if (!target.hasClass('uk-offcanvas-close')) {
                        if (target.hasClass('uk-offcanvas-bar')) return;
                        if (target.parents('.uk-offcanvas-bar:first').length) return;
                    }
                }

                e.stopImmediatePropagation();
                Offcanvas.hide();
            });

            element.on('click', 'a[href*="#"]', function (e) {

                var link = UI.$(this),
                    href = link.attr('href');

                if (href == '#') {
                    return;
                }

                UI.$doc.one('hide.uk.offcanvas', function () {

                    var target;

                    try {
                        target = UI.$(link[0].hash);
                    } catch (e) {
                        target = '';
                    }

                    if (!target.length) {
                        target = UI.$('[name="' + link[0].hash.replace('#', '') + '"]');
                    }

                    if (target.length && UI.Utils.scrollToElement) {
                        UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
                    } else {
                        window.location.href = href;
                    }
                });

                Offcanvas.hide();
            });

            element.data('OffcanvasInit', true);
        }
    };

    UI.component('offcanvasTrigger', {

        boot: function boot() {

            // init code
            $html.on('click.offcanvas.uikit', '[data-uk-offcanvas]', function (e) {

                e.preventDefault();

                var ele = UI.$(this);

                if (!ele.data('offcanvasTrigger')) {
                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr('data-uk-offcanvas')));
                    ele.trigger("click");
                }
            });

            $html.on('keydown.uk.offcanvas', function (e) {

                if (e.keyCode === 27) {
                    // ESC
                    Offcanvas.hide();
                }
            });
        },

        init: function init() {

            var $this = this;

            this.options = UI.$.extend({
                target: $this.element.is('a') ? $this.element.attr('href') : false,
                mode: 'push'
            }, this.options);

            this.on('click', function (e) {
                e.preventDefault();
                Offcanvas.show($this.options.target, $this.options);
            });
        }
    });

    UI.offcanvas = Offcanvas;
})(UIkit2);

(function (UI) {

    "use strict";

    var Animations;

    UI.component('switcher', {

        defaults: {
            connect: false,
            toggle: '>*',
            active: 0,
            animation: false,
            duration: 200,
            swiping: true
        },

        animating: false,

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-switcher]', context).each(function () {
                    var switcher = UI.$(this);

                    if (!switcher.data('switcher')) {
                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr('data-uk-switcher')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.on('click.uk.switcher', this.options.toggle, function (e) {
                e.preventDefault();
                $this.show(this);
            });

            if (!this.options.connect) {
                return;
            }

            this.connect = UI.$(this.options.connect);

            if (!this.connect.length) {
                return;
            }

            this.connect.on('click.uk.switcher', '[data-uk-switcher-item]', function (e) {

                e.preventDefault();

                var item = UI.$(this).attr('data-uk-switcher-item');

                if ($this.index == item) return;

                switch (item) {
                    case 'next':
                    case 'previous':
                        $this.show($this.index + (item == 'next' ? 1 : -1));
                        break;
                    default:
                        $this.show(parseInt(item, 10));
                }
            });

            if (this.options.swiping) {

                this.connect.on('swipeRight swipeLeft', function (e) {
                    e.preventDefault();
                    if (!window.getSelection().toString()) {
                        $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
                    }
                });
            }

            this.update();
        },

        update: function update() {

            this.connect.children().removeClass('uk-active').attr('aria-hidden', 'true');

            var toggles = this.find(this.options.toggle),
                active = toggles.filter('.uk-active');

            if (active.length) {
                this.show(active, false);
            } else {

                if (this.options.active === false) return;

                active = toggles.eq(this.options.active);
                this.show(active.length ? active : toggles.eq(0), false);
            }

            // Init ARIA for toggles
            toggles.not(active).attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');
        },

        show: function show(tab, animate) {

            if (this.animating) {
                return;
            }

            var toggles = this.find(this.options.toggle);

            if (isNaN(tab)) {
                tab = UI.$(tab);
            } else {
                tab = tab < 0 ? toggles.length - 1 : tab;
                tab = toggles.eq(toggles[tab] ? tab : 0);
            }

            var $this = this,
                active = UI.$(tab),
                animation = Animations[this.options.animation] || function (current, next) {

                if (!$this.options.animation) {
                    return Animations.none.apply($this);
                }

                var anim = $this.options.animation.split(',');

                if (anim.length == 1) {
                    anim[1] = anim[0];
                }

                anim[0] = anim[0].trim();
                anim[1] = anim[1].trim();

                return coreAnimation.apply($this, [anim, current, next]);
            };

            if (animate === false || !UI.support.animation) {
                animation = Animations.none;
            }

            if (active.hasClass("uk-disabled")) return;

            // Update ARIA for Toggles
            toggles.attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');

            toggles.filter(".uk-active").removeClass("uk-active");
            active.addClass("uk-active");

            if (this.options.connect && this.connect.length) {

                this.index = this.find(this.options.toggle).index(active);

                if (this.index == -1) {
                    this.index = 0;
                }

                this.connect.each(function () {

                    var container = UI.$(this),
                        children = UI.$(container.children()),
                        current = UI.$(children.filter('.uk-active')),
                        next = UI.$(children.eq($this.index));

                    $this.animating = true;

                    animation.apply($this, [current, next]).then(function () {

                        current.removeClass("uk-active");
                        next.addClass("uk-active");

                        // Update ARIA for connect
                        current.attr('aria-hidden', 'true');
                        next.attr('aria-hidden', 'false');

                        UI.Utils.checkDisplay(next, true);

                        $this.animating = false;
                    });
                });
            }

            this.trigger("show.uk.switcher", [active]);
        }
    });

    Animations = {

        'none': function none() {
            var d = UI.$.Deferred();
            d.resolve();
            return d.promise();
        },

        'fade': function fade(current, next) {
            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
        },

        'slide-bottom': function slideBottom(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
        },

        'slide-top': function slideTop(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
        },

        'slide-vertical': function slideVertical(current, next, dir) {

            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];

            if (current && current.index() > next.index()) {
                anim.reverse();
            }

            return coreAnimation.apply(this, [anim, current, next]);
        },

        'slide-left': function slideLeft(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
        },

        'slide-right': function slideRight(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
        },

        'slide-horizontal': function slideHorizontal(current, next, dir) {

            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];

            if (current && current.index() > next.index()) {
                anim.reverse();
            }

            return coreAnimation.apply(this, [anim, current, next]);
        },

        'scale': function scale(current, next) {
            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
        }
    };

    UI.switcher.animations = Animations;

    // helpers

    function coreAnimation(cls, current, next) {

        var d = UI.$.Deferred(),
            clsIn = cls,
            clsOut = cls,
            release;

        if (next[0] === current[0]) {
            d.resolve();
            return d.promise();
        }

        if ((typeof cls === 'undefined' ? 'undefined' : _typeof(cls)) == 'object') {
            clsIn = cls[0];
            clsOut = cls[1] || cls[0];
        }

        UI.$body.css('overflow-x', 'hidden'); // fix scroll jumping in iOS

        release = function release() {

            if (current) current.hide().removeClass('uk-active ' + clsOut + ' uk-animation-reverse');

            next.addClass(clsIn).one(UI.support.animation.end, function () {

                setTimeout(function () {
                    next.removeClass('' + clsIn + '').css({ opacity: '', display: '' });
                }, 0);

                d.resolve();

                UI.$body.css('overflow-x', '');

                if (current) current.css({ opacity: '', display: '' });
            }.bind(this)).show();
        };

        next.css('animation-duration', this.options.duration + 'ms');

        if (current && current.length) {

            current.css('animation-duration', this.options.duration + 'ms');

            current.css('display', 'none').addClass(clsOut + ' uk-animation-reverse').one(UI.support.animation.end, function () {
                release();
            }.bind(this)).css('display', '');
        } else {
            next.addClass('uk-active');
            release();
        }

        return d.promise();
    }
})(UIkit2);

(function (UI) {

    "use strict";

    UI.component('tab', {

        defaults: {
            target: '>li:not(.uk-tab-responsive, .uk-disabled)',
            connect: false,
            active: 0,
            animation: false,
            duration: 200,
            swiping: true
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-tab]', context).each(function () {

                    var tab = UI.$(this);

                    if (!tab.data('tab')) {
                        var obj = UI.tab(tab, UI.Utils.options(tab.attr('data-uk-tab')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.current = false;

            this.on('click.uk.tab', this.options.target, function (e) {

                e.preventDefault();

                if ($this.switcher && $this.switcher.animating) {
                    return;
                }

                var current = $this.find($this.options.target).not(this);

                current.removeClass('uk-active').blur();

                $this.trigger('change.uk.tab', [UI.$(this).addClass('uk-active'), $this.current]);

                $this.current = UI.$(this);

                // Update ARIA
                if (!$this.options.connect) {
                    current.attr('aria-expanded', 'false');
                    UI.$(this).attr('aria-expanded', 'true');
                }
            });

            if (this.options.connect) {
                this.connect = UI.$(this.options.connect);
            }

            // init responsive tab
            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');

            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
            this.responsivetab.lst = this.responsivetab.dropdown.find('ul');
            this.responsivetab.caption = this.responsivetab.find('a:first');

            if (this.element.hasClass('uk-tab-bottom')) this.responsivetab.dropdown.addClass('uk-dropdown-up');

            // handle click
            this.responsivetab.lst.on('click.uk.tab', 'a', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var link = UI.$(this);

                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
            });

            this.on('show.uk.switcher change.uk.tab', function (e, tab) {
                $this.responsivetab.caption.html(tab.text());
            });

            this.element.append(this.responsivetab);

            // init UIkit components
            if (this.options.connect) {

                this.switcher = UI.switcher(this.element, {
                    toggle: '>li:not(.uk-tab-responsive)',
                    connect: this.options.connect,
                    active: this.options.active,
                    animation: this.options.animation,
                    duration: this.options.duration,
                    swiping: this.options.swiping
                });
            }

            UI.dropdown(this.responsivetab, { mode: 'click', preventflip: 'y' });

            // init
            $this.trigger('change.uk.tab', [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);

            this.check();

            UI.$win.on('resize orientationchange', UI.Utils.debounce(function () {
                if ($this.element.is(':visible')) $this.check();
            }, 100));

            this.on('display.uk.check', function () {
                if ($this.element.is(':visible')) $this.check();
            });
        },

        check: function check() {

            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');

            if (!children.length) {
                this.responsivetab.addClass('uk-hidden');
                return;
            }

            var top = children.eq(0).offset().top + Math.ceil(children.eq(0).height() / 2),
                doresponsive = false,
                item,
                link,
                clone;

            this.responsivetab.lst.empty();

            children.each(function () {

                if (UI.$(this).offset().top > top) {
                    doresponsive = true;
                }
            });

            if (doresponsive) {

                for (var i = 0; i < children.length; i++) {

                    item = UI.$(children.eq(i));
                    link = item.find('a');

                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {

                        if (!item.hasClass('uk-disabled')) {

                            clone = UI.$(item[0].outerHTML);
                            clone.find('a').data('index', i);

                            this.responsivetab.lst.append(clone);
                        }

                        item.addClass('uk-hidden');
                    }
                }
            }

            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass' : 'addClass']('uk-hidden');
        }
    });
})(UIkit2);

(function (UI) {

    "use strict";

    UI.component('cover', {

        defaults: {
            automute: true
        },

        boot: function boot() {

            // auto init
            UI.ready(function (context) {

                UI.$('[data-uk-cover]', context).each(function () {

                    var ele = UI.$(this);

                    if (!ele.data('cover')) {
                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr('data-uk-cover')));
                    }
                });
            });
        },

        init: function init() {

            this.parent = this.element.parent();

            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function () {
                this.check();
            }.bind(this), 100));

            this.on('display.uk.check', function (e) {
                if (this.element.is(':visible')) this.check();
            }.bind(this));

            this.check();

            if (this.element.is('iframe') && this.options.automute) {

                var src = this.element.attr('src');

                this.element.attr('src', '').on('load', function () {
                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');
                }).attr('src', [src, src.indexOf('?') > -1 ? '&' : '?', 'enablejsapi=1&api=1'].join(''));
            }
        },

        check: function check() {

            this.element.css({ width: '', height: '' });

            this.dimension = { w: this.element.width(), h: this.element.height() };

            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
                this.dimension.w = this.element.attr('width');
            }

            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
                this.dimension.h = this.element.attr('height');
            }

            this.ratio = this.dimension.w / this.dimension.h;

            var w = this.parent.width(),
                h = this.parent.height(),
                width,
                height;

            // if element height < parent height (gap underneath)
            if (w / this.ratio < h) {

                width = Math.ceil(h * this.ratio);
                height = h;

                // element width < parent width (gap to right)
            } else {

                width = w;
                height = Math.ceil(w / this.ratio);
            }

            this.element.css({ width: width, height: height });
        }
    });
})(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    UI.component('alert', {

        defaults: {
            fade: true,
            duration: 200,
            trigger: '.uk-alert-close'
        },

        boot: function boot() {

            // init code
            UI.$html.on('click.alert.uikit', '[data-uk-alert]', function (e) {

                var ele = UI.$(this);

                if (!ele.data('alert')) {

                    var alert = UI.alert(ele, UI.Utils.options(ele.attr('data-uk-alert')));

                    if (UI.$(e.target).is(alert.options.trigger)) {
                        e.preventDefault();
                        alert.close();
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            this.on('click', this.options.trigger, function (e) {
                e.preventDefault();
                $this.close();
            });
        },

        close: function close() {

            var element = this.trigger('close.uk.alert'),
                removeElement = function () {
                this.trigger('closed.uk.alert').remove();
            }.bind(this);

            if (this.options.fade) {
                element.css('overflow', 'hidden').css("max-height", element.height()).animate({
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }, this.options.duration, removeElement);
            } else {
                removeElement();
            }
        }

    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  t.component("alert", { defaults: { fade: !0, duration: 200, trigger: ".uk-alert-close" }, boot: function boot() {
      t.$html.on("click.alert.uikit", "[data-uk-alert]", function (i) {
        var o = t.$(this);if (!o.data("alert")) {
          var e = t.alert(o, t.Utils.options(o.attr("data-uk-alert")));t.$(i.target).is(e.options.trigger) && (i.preventDefault(), e.close());
        }
      });
    }, init: function init() {
      var t = this;this.on("click", this.options.trigger, function (i) {
        i.preventDefault(), t.close();
      });
    }, close: function close() {
      var t = this.trigger("close.uk.alert"),
          i = function () {
        this.trigger("closed.uk.alert").remove();
      }.bind(this);this.options.fade ? t.css("overflow", "hidden").css("max-height", t.height()).animate({ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 }, this.options.duration, i) : i();
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    UI.component('buttonRadio', {

        defaults: {
            activeClass: 'uk-active',
            target: '.uk-button'
        },

        boot: function boot() {

            // init code
            UI.$html.on('click.buttonradio.uikit', '[data-uk-button-radio]', function (e) {

                var ele = UI.$(this);

                if (!ele.data('buttonRadio')) {

                    var obj = UI.buttonRadio(ele, UI.Utils.options(ele.attr('data-uk-button-radio'))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger('click');
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on('click', this.options.target, function (e) {

                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
                ele.addClass($this.options.activeClass);

                // Update ARIA
                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
                ele.attr('aria-checked', 'true');

                $this.trigger('change.uk.button', [ele]);
            });
        },

        getSelected: function getSelected() {
            return this.find('.' + this.options.activeClass);
        }
    });

    UI.component('buttonCheckbox', {

        defaults: {
            activeClass: 'uk-active',
            target: '.uk-button'
        },

        boot: function boot() {

            UI.$html.on('click.buttoncheckbox.uikit', '[data-uk-button-checkbox]', function (e) {
                var ele = UI.$(this);

                if (!ele.data('buttonCheckbox')) {

                    var obj = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr('data-uk-button-checkbox'))),
                        target = UI.$(e.target);

                    if (target.is(obj.options.target)) {
                        target.trigger('click');
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            // Init ARIA
            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

            this.on('click', this.options.target, function (e) {
                var ele = UI.$(this);

                if (ele.is('a[href="#"]')) e.preventDefault();

                ele.toggleClass($this.options.activeClass).blur();

                // Update ARIA
                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));

                $this.trigger('change.uk.button', [ele]);
            });
        },

        getSelected: function getSelected() {
            return this.find('.' + this.options.activeClass);
        }
    });

    UI.component('button', {

        defaults: {},

        boot: function boot() {

            UI.$html.on('click.button.uikit', '[data-uk-button]', function (e) {
                var ele = UI.$(this);

                if (!ele.data('button')) {

                    var obj = UI.button(ele, UI.Utils.options(ele.attr('data-uk-button')));
                    ele.trigger('click');
                }
            });
        },

        init: function init() {

            var $this = this;

            // Init ARIA
            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));

            this.on('click', function (e) {

                if ($this.element.is('a[href="#"]')) e.preventDefault();

                $this.toggle();
                $this.trigger('change.uk.button', [$this.element.blur().hasClass('uk-active')]);
            });
        },

        toggle: function toggle() {
            this.element.toggleClass('uk-active');

            // Update ARIA
            this.element.attr('aria-pressed', this.element.hasClass('uk-active'));
        }
    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  t.component("buttonRadio", { defaults: { activeClass: "uk-active", target: ".uk-button" }, boot: function boot() {
      t.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function (i) {
        var a = t.$(this);if (!a.data("buttonRadio")) {
          var e = t.buttonRadio(a, t.Utils.options(a.attr("data-uk-button-radio"))),
              o = t.$(i.target);o.is(e.options.target) && o.trigger("click");
        }
      });
    }, init: function init() {
      var i = this;this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (a) {
        var e = t.$(this);e.is('a[href="#"]') && a.preventDefault(), i.find(i.options.target).not(e).removeClass(i.options.activeClass).blur(), e.addClass(i.options.activeClass), i.find(i.options.target).not(e).attr("aria-checked", "false"), e.attr("aria-checked", "true"), i.trigger("change.uk.button", [e]);
      });
    }, getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    } }), t.component("buttonCheckbox", { defaults: { activeClass: "uk-active", target: ".uk-button" }, boot: function boot() {
      t.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function (i) {
        var a = t.$(this);if (!a.data("buttonCheckbox")) {
          var e = t.buttonCheckbox(a, t.Utils.options(a.attr("data-uk-button-checkbox"))),
              o = t.$(i.target);o.is(e.options.target) && o.trigger("click");
        }
      });
    }, init: function init() {
      var i = this;this.find(i.options.target).attr("aria-checked", "false").filter("." + i.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function (a) {
        var e = t.$(this);e.is('a[href="#"]') && a.preventDefault(), e.toggleClass(i.options.activeClass).blur(), e.attr("aria-checked", e.hasClass(i.options.activeClass)), i.trigger("change.uk.button", [e]);
      });
    }, getSelected: function getSelected() {
      return this.find("." + this.options.activeClass);
    } }), t.component("button", { defaults: {}, boot: function boot() {
      t.$html.on("click.button.uikit", "[data-uk-button]", function () {
        var i = t.$(this);if (!i.data("button")) {
          {
            t.button(i, t.Utils.options(i.attr("data-uk-button")));
          }i.trigger("click");
        }
      });
    }, init: function init() {
      var t = this;this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle(), t.trigger("change.uk.button", [t.element.blur().hasClass("uk-active")]);
      });
    }, toggle: function toggle() {
      this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"));
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (core) {

    if (typeof define == 'function' && define.amd) {
        // AMD

        define('uikit', function () {

            var uikit = window.UIkit2 || core(window, window.jQuery, window.document);

            uikit.load = function (res, req, onload, config) {

                var resources = res.split(','),
                    load = [],
                    i,
                    base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : '').replace(/\/+$/g, '');

                if (!base) {
                    throw new Error('Please define base path to UIkit in the requirejs config.');
                }

                for (i = 0; i < resources.length; i += 1) {
                    var resource = resources[i].replace(/\./g, '/');
                    load.push(base + '/components/' + resource);
                }

                req(load, function () {
                    onload(uikit);
                });
            };

            return uikit;
        });
    }

    if (!window.jQuery) {
        throw new Error('UIkit 2.x requires jQuery');
    }

    if (window && window.jQuery && !window.UIkit2) {
        core(window, window.jQuery, window.document);
    }
})(function (global, $, doc) {

    "use strict";

    var UI = {},
        _UI = global.UIkit || undefined;

    UI.version = '2.27.2';

    UI.noConflict = function () {
        // restore UIkit version
        if (_UI) {
            global.UIkit = _UI;
            $.UIkit = _UI;
            $.fn.uk = _UI.fn;
        }

        return UI;
    };

    global.UIkit2 = UI;

    if (!_UI) {
        global.UIkit = UI;
    }

    // cache jQuery
    UI.$ = $;

    UI.$doc = UI.$(document);
    UI.$win = UI.$(window);
    UI.$html = UI.$('html');

    UI.support = {};
    UI.support.transition = function () {

        var transitionEnd = function () {

            var element = doc.body || doc.documentElement,
                transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            },
                name;

            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }();

        return transitionEnd && { end: transitionEnd };
    }();

    UI.support.animation = function () {

        var animationEnd = function () {

            var element = doc.body || doc.documentElement,
                animEndEventNames = {
                WebkitAnimation: 'webkitAnimationEnd',
                MozAnimation: 'animationend',
                OAnimation: 'oAnimationEnd oanimationend',
                animation: 'animationend'
            },
                name;

            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }();

        return animationEnd && { end: animationEnd };
    }();

    // requestAnimationFrame polyfill
    //https://github.com/darius/requestAnimationFrame
    (function () {

        Date.now = Date.now || function () {
            return new Date().getTime();
        };

        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function (callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function () {
                    callback(lastTime = nextTime);
                }, nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
    })();

    UI.support.touch = 'ontouchstart' in document || global.DocumentTouch && document instanceof global.DocumentTouch || global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0 || //IE 10
    global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0 || //IE >=11
    false;

    UI.support.mutationobserver = global.MutationObserver || global.WebKitMutationObserver || null;

    UI.Utils = {};

    UI.Utils.isFullscreen = function () {
        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
    };

    UI.Utils.str2json = function (str, notevil) {
        try {
            if (notevil) {
                return JSON.parse(str
                // wrap keys without quote with valid double quote
                .replace(/([\$\w]+)\s*:/g, function (_, $1) {
                    return '"' + $1 + '":';
                })
                // replacing single quote wrapped ones to double quote
                .replace(/'([^']+)'/g, function (_, $1) {
                    return '"' + $1 + '"';
                }));
            } else {
                return new Function('', 'var json = ' + str + '; return JSON.parse(JSON.stringify(json));')();
            }
        } catch (e) {
            return false;
        }
    };

    UI.Utils.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    UI.Utils.throttle = function (func, limit) {
        var wait = false;
        return function () {
            if (!wait) {
                func.call();
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, limit);
            }
        };
    };

    UI.Utils.removeCssRules = function (selectorRegEx) {
        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

        if (!selectorRegEx) return;

        setTimeout(function () {
            try {
                _ref = document.styleSheets;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    stylesheet = _ref[_i];
                    idxs = [];
                    stylesheet.cssRules = stylesheet.cssRules;
                    for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
                        if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
                            idxs.unshift(idx);
                        }
                    }
                    for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
                        stylesheet.deleteRule(idxs[_k]);
                    }
                }
            } catch (_error) {}
        }, 0);
    };

    UI.Utils.isInView = function (element, options) {

        var $element = $(element);

        if (!$element.is(':visible')) {
            return false;
        }

        var window_left = UI.$win.scrollLeft(),
            window_top = UI.$win.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;

        options = $.extend({ topoffset: 0, leftoffset: 0 }, options);

        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() && left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
            return true;
        } else {
            return false;
        }
    };

    UI.Utils.checkDisplay = function (context, initanimation) {

        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document),
            animated;

        if (context && !elements.length) {
            elements = $(context);
        }

        elements.trigger('display.uk.check');

        // fix firefox / IE animations
        if (initanimation) {

            if (typeof initanimation != 'string') {
                initanimation = '[class*="uk-animation-"]';
            }

            elements.find(initanimation).each(function () {

                var ele = UI.$(this),
                    cls = ele.attr('class'),
                    anim = cls.match(/uk-animation-(.+)/);

                ele.removeClass(anim[0]).width();

                ele.addClass(anim[0]);
            });
        }

        return elements;
    };

    UI.Utils.options = function (string) {

        if ($.type(string) != 'string') return string;

        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
            string = '{' + string + '}';
        }

        var start = string ? string.indexOf("{") : -1,
            options = {};

        if (start != -1) {
            try {
                options = UI.Utils.str2json(string.substr(start));
            } catch (e) {}
        }

        return options;
    };

    UI.Utils.animate = function (element, cls) {

        var d = $.Deferred();

        element = UI.$(element);

        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function () {
            element.removeClass(cls);
            d.resolve();
        });

        element.css('display', '');

        return d.promise();
    };

    UI.Utils.uid = function (prefix) {
        return (prefix || 'id') + new Date().getTime() + "RAND" + Math.ceil(Math.random() * 100000);
    };

    UI.Utils.template = function (str, data) {

        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
            i = 0,
            toc,
            cmd,
            prop,
            val,
            fn,
            output = [],
            openblocks = 0;

        while (i < tokens.length) {

            toc = tokens[i];

            if (toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
                i = i + 1;
                toc = tokens[i];
                cmd = toc[0];
                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0);

                switch (cmd) {
                    case '~':
                        output.push('for(var $i=0;$i<' + prop + '.length;$i++) { var $item = ' + prop + '[$i];');
                        openblocks++;
                        break;
                    case ':':
                        output.push('for(var $key in ' + prop + ') { var $val = ' + prop + '[$key];');
                        openblocks++;
                        break;
                    case '#':
                        output.push('if(' + prop + ') {');
                        openblocks++;
                        break;
                    case '^':
                        output.push('if(!' + prop + ') {');
                        openblocks++;
                        break;
                    case '/':
                        output.push('}');
                        openblocks--;
                        break;
                    case '!':
                        output.push('__ret.push(' + prop + ');');
                        break;
                    default:
                        output.push('__ret.push(escape(' + prop + '));');
                        break;
                }
            } else {
                output.push("__ret.push('" + toc.replace(/\'/g, "\\'") + "');");
            }
            i = i + 1;
        }

        fn = new Function('$data', ['var __ret = [];', 'try {', 'with($data){', !openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]', '};', '}catch(e){__ret = [e.message];}', 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n"));

        return data ? fn(data) : fn;
    };

    UI.Utils.focus = function (element, extra) {

        element = $(element);

        if (!element.length) {
            return element;
        }

        var autofocus = element.find('[autofocus]:first'),
            tabidx;

        if (autofocus.length) {
            return autofocus.focus();
        }

        autofocus = element.find(':input' + (extra && ',' + extra || '')).first();

        if (autofocus.length) {
            return autofocus.focus();
        }

        if (!element.attr('tabindex')) {
            tabidx = 1000;
            element.attr('tabindex', tabidx);
        }

        element[0].focus();

        if (tabidx) {
            element.attr('tabindex', '');
        }

        return element;
    };

    UI.Utils.events = {};
    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

    // deprecated

    UI.fn = function (command, options) {

        var args = arguments,
            cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
            component = cmd[1],
            method = cmd[2];

        if (!UI[component]) {
            $.error('UIkit component [' + component + '] does not exist.');
            return this;
        }

        return this.each(function () {
            var $this = $(this),
                data = $this.data(component);
            if (!data) $this.data(component, data = UI[component](this, method ? undefined : options));
            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
        });
    };

    $.UIkit = UI;
    $.fn.uk = UI.fn;

    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

    UI.components = {};

    UI.component = function (name, def, override) {

        if (UI.components[name] && !override) {
            return UI.components[name];
        }

        var fn = function fn(element, options) {

            var $this = this;

            this.UIkit = UI;
            this.element = element ? UI.$(element) : null;
            this.options = $.extend(true, {}, this.defaults, options);
            this.plugins = {};

            if (this.element) {
                this.element.data(name, this);
            }

            this.init();

            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function (plugin) {

                if (fn.plugins[plugin].init) {
                    fn.plugins[plugin].init($this);
                    $this.plugins[plugin] = true;
                }
            });

            this.trigger('init.uk.component', [name, this]);

            return this;
        };

        fn.plugins = {};

        $.extend(true, fn.prototype, {

            defaults: { plugins: [] },

            boot: function boot() {},
            init: function init() {},

            on: function on(a1, a2, a3) {
                return UI.$(this.element || this).on(a1, a2, a3);
            },

            one: function one(a1, a2, a3) {
                return UI.$(this.element || this).one(a1, a2, a3);
            },

            off: function off(evt) {
                return UI.$(this.element || this).off(evt);
            },

            trigger: function trigger(evt, params) {
                return UI.$(this.element || this).trigger(evt, params);
            },

            find: function find(selector) {
                return UI.$(this.element ? this.element : []).find(selector);
            },

            proxy: function proxy(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function (method) {
                    if (!$this[method]) $this[method] = function () {
                        return obj[method].apply(obj, arguments);
                    };
                });
            },

            mixin: function mixin(obj, methods) {

                var $this = this;

                methods.split(' ').forEach(function (method) {
                    if (!$this[method]) $this[method] = obj[method].bind($this);
                });
            },

            option: function option() {

                if (arguments.length == 1) {
                    return this.options[arguments[0]] || undefined;
                } else if (arguments.length == 2) {
                    this.options[arguments[0]] = arguments[1];
                }
            }

        }, def);

        this.components[name] = fn;

        this[name] = function () {

            var element, options;

            if (arguments.length) {

                switch (arguments.length) {
                    case 1:

                        if (typeof arguments[0] === 'string' || arguments[0].nodeType || arguments[0] instanceof jQuery) {
                            element = $(arguments[0]);
                        } else {
                            options = arguments[0];
                        }

                        break;
                    case 2:

                        element = $(arguments[0]);
                        options = arguments[1];
                        break;
                }
            }

            if (element && element.data(name)) {
                return element.data(name);
            }

            return new UI.components[name](element, options);
        };

        if (UI.domready) {
            UI.component.boot(name);
        }

        return fn;
    };

    UI.plugin = function (component, name, def) {
        this.components[component].plugins[name] = def;
    };

    UI.component.boot = function (name) {

        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
            UI.components[name].prototype.boot.apply(UI, []);
            UI.components[name].booted = true;
        }
    };

    UI.component.bootComponents = function () {

        for (var component in UI.components) {
            UI.component.boot(component);
        }
    };

    // DOM mutation save ready helper function

    UI.domObservers = [];
    UI.domready = false;

    UI.ready = function (fn) {

        UI.domObservers.push(fn);

        if (UI.domready) {
            fn(document);
        }
    };

    UI.on = function (a1, a2, a3) {

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
        }

        return UI.$doc.on(a1, a2, a3);
    };

    UI.one = function (a1, a2, a3) {

        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
            a2.apply(UI.$doc);
            return UI.$doc;
        }

        return UI.$doc.one(a1, a2, a3);
    };

    UI.trigger = function (evt, params) {
        return UI.$doc.trigger(evt, params);
    };

    UI.domObserve = function (selector, fn) {

        if (!UI.support.mutationobserver) return;

        fn = fn || function () {};

        UI.$(selector).each(function () {

            var element = this,
                $element = UI.$(element);

            if ($element.data('observer')) {
                return;
            }

            try {

                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function (mutations) {
                    fn.apply(element, [$element]);
                    $element.trigger('changed.uk.dom');
                }, 50), { childList: true, subtree: true });

                // pass in the target node, as well as the observer options
                observer.observe(element, { childList: true, subtree: true });

                $element.data('observer', observer);
            } catch (e) {}
        });
    };

    UI.init = function (root) {

        root = root || document;

        UI.domObservers.forEach(function (fn) {
            fn(root);
        });
    };

    UI.on('domready.uk.dom', function () {

        UI.init();

        if (UI.domready) UI.Utils.checkDisplay();
    });

    document.addEventListener('DOMContentLoaded', function () {

        var domReady = function domReady() {

            UI.$body = UI.$('body');

            UI.trigger('beforeready.uk.dom');

            UI.component.bootComponents();

            // custom scroll observer
            var rafToken = requestAnimationFrame(function () {

                var memory = { dir: { x: 0, y: 0 }, x: window.pageXOffset, y: window.pageYOffset };

                var fn = function fn() {
                    // reading this (window.page[X|Y]Offset) causes a full page recalc of the layout in Chrome,
                    // so we only want to do this once
                    var wpxo = window.pageXOffset;
                    var wpyo = window.pageYOffset;

                    // Did the scroll position change since the last time we were here?
                    if (memory.x != wpxo || memory.y != wpyo) {

                        // Set the direction of the scroll and store the new position
                        if (wpxo != memory.x) {
                            memory.dir.x = wpxo > memory.x ? 1 : -1;
                        } else {
                            memory.dir.x = 0;
                        }
                        if (wpyo != memory.y) {
                            memory.dir.y = wpyo > memory.y ? 1 : -1;
                        } else {
                            memory.dir.y = 0;
                        }

                        memory.x = wpxo;
                        memory.y = wpyo;

                        // Trigger the scroll event, this could probably be sent using memory.clone() but this is
                        // more explicit and easier to see exactly what is being sent in the event.
                        UI.$doc.trigger('scrolling.uk.document', [{
                            dir: { x: memory.dir.x, y: memory.dir.y }, x: wpxo, y: wpyo
                        }]);
                    }

                    cancelAnimationFrame(rafToken);
                    rafToken = requestAnimationFrame(fn);
                };

                if (UI.support.touch) {
                    UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
                }

                if (memory.x || memory.y) fn();

                return fn;
            }());

            // run component init functions on dom
            UI.trigger('domready.uk.dom');

            if (UI.support.touch) {

                // remove css hover rules for touch devices
                // UI.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/);

                // viewport unit fix for uk-height-viewport - should be fixed in iOS 8
                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

                    UI.$win.on('load orientationchange resize', UI.Utils.debounce(function () {

                        var fn = function fn() {
                            $('.uk-height-viewport').css('height', window.innerHeight);
                            return fn;
                        };

                        return fn();
                    }(), 100));
                }
            }

            UI.trigger('afterready.uk.dom');

            // mark that domready is left behind
            UI.domready = true;

            // auto init js components
            if (UI.support.mutationobserver) {

                var initFn = UI.Utils.debounce(function () {
                    requestAnimationFrame(function () {
                        UI.init(document.body);
                    });
                }, 10);

                new UI.support.mutationobserver(function (mutations) {

                    var init = false;

                    mutations.every(function (mutation) {

                        if (mutation.type != 'childList') return true;

                        for (var i = 0, node; i < mutation.addedNodes.length; ++i) {

                            node = mutation.addedNodes[i];

                            if (node.outerHTML && node.outerHTML.indexOf('data-uk-') !== -1) {
                                return (init = true) && false;
                            }
                        }
                        return true;
                    });

                    if (init) initFn();
                }).observe(document.body, { childList: true, subtree: true });
            }
        };

        if (document.readyState == 'complete' || document.readyState == 'interactive') {
            setTimeout(domReady);
        }

        return domReady;
    }());

    // add touch identifier class
    UI.$html.addClass(UI.support.touch ? 'uk-touch' : 'uk-notouch');

    // add uk-hover class on tap to support overlays on touch devices
    if (UI.support.touch) {

        var hoverset = false,
            exclude,
            hovercls = 'uk-hover',
            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';

        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function () {

            if (hoverset) $('.' + hovercls).removeClass(hovercls);

            hoverset = $(this).addClass(hovercls);
        }).on('mouseleave touchend MSPointerUp pointerup', function (e) {

            exclude = $(e.target).parents(selector);

            if (hoverset) {
                hoverset.not(exclude).removeClass(hovercls);
            }
        });
    }

    return UI;
});
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  if ("function" == typeof define && define.amd && define("uikit", function () {
    var n = window.UIkit2 || t(window, window.jQuery, window.document);return n.load = function (t, e, o, i) {
      var r,
          a = t.split(","),
          s = [],
          u = (i.config && i.config.uikit && i.config.uikit.base ? i.config.uikit.base : "").replace(/\/+$/g, "");if (!u) throw new Error("Please define base path to UIkit in the requirejs config.");for (r = 0; r < a.length; r += 1) {
        var c = a[r].replace(/\./g, "/");s.push(u + "/components/" + c);
      }e(s, function () {
        o(n);
      });
    }, n;
  }), !window.jQuery) throw new Error("UIkit 2.x requires jQuery");window && window.jQuery && !window.UIkit2 && t(window, window.jQuery, window.document);
}(function (t, n, e) {
  "use strict";
  var o = {},
      i = t.UIkit || void 0;if (o.version = "2.27.2", o.noConflict = function () {
    return i && (t.UIkit = i, n.UIkit = i, n.fn.uk = i.fn), o;
  }, t.UIkit2 = o, i || (t.UIkit = o), o.$ = n, o.$doc = o.$(document), o.$win = o.$(window), o.$html = o.$("html"), o.support = {}, o.support.transition = function () {
    var t = function () {
      var t,
          n = e.body || e.documentElement,
          o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (t in o) {
        if (void 0 !== n.style[t]) return o[t];
      }
    }();return t && { end: t };
  }(), o.support.animation = function () {
    var t = function () {
      var t,
          n = e.body || e.documentElement,
          o = { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };for (t in o) {
        if (void 0 !== n.style[t]) return o[t];
      }
    }();return t && { end: t };
  }(), function () {
    Date.now = Date.now || function () {
      return new Date().getTime();
    };for (var t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
      var e = t[n];window.requestAnimationFrame = window[e + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"];
    }if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var o = 0;window.requestAnimationFrame = function (t) {
        var n = Date.now(),
            e = Math.max(o + 16, n);return setTimeout(function () {
          t(o = e);
        }, e - n);
      }, window.cancelAnimationFrame = clearTimeout;
    }
  }(), o.support.touch = "ontouchstart" in document || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, o.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || null, o.Utils = {}, o.Utils.isFullscreen = function () {
    return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1;
  }, o.Utils.str2json = function (t, n) {
    try {
      return n ? JSON.parse(t.replace(/([\$\w]+)\s*:/g, function (t, n) {
        return '"' + n + '":';
      }).replace(/'([^']+)'/g, function (t, n) {
        return '"' + n + '"';
      })) : new Function("", "var json = " + t + "; return JSON.parse(JSON.stringify(json));")();
    } catch (e) {
      return !1;
    }
  }, o.Utils.debounce = function (t, n, e) {
    var o;return function () {
      var i = this,
          r = arguments,
          a = function a() {
        o = null, e || t.apply(i, r);
      },
          s = e && !o;clearTimeout(o), o = setTimeout(a, n), s && t.apply(i, r);
    };
  }, o.Utils.throttle = function (t, n) {
    var e = !1;return function () {
      e || (t.call(), e = !0, setTimeout(function () {
        e = !1;
      }, n));
    };
  }, o.Utils.removeCssRules = function (t) {
    var n, e, o, i, r, a, s, u, c, d;t && setTimeout(function () {
      try {
        for (d = document.styleSheets, i = 0, s = d.length; s > i; i++) {
          for (o = d[i], e = [], o.cssRules = o.cssRules, n = r = 0, u = o.cssRules.length; u > r; n = ++r) {
            o.cssRules[n].type === CSSRule.STYLE_RULE && t.test(o.cssRules[n].selectorText) && e.unshift(n);
          }for (a = 0, c = e.length; c > a; a++) {
            o.deleteRule(e[a]);
          }
        }
      } catch (l) {}
    }, 0);
  }, o.Utils.isInView = function (t, e) {
    var i = n(t);if (!i.is(":visible")) return !1;var r = o.$win.scrollLeft(),
        a = o.$win.scrollTop(),
        s = i.offset(),
        u = s.left,
        c = s.top;return e = n.extend({ topoffset: 0, leftoffset: 0 }, e), c + i.height() >= a && c - e.topoffset <= a + o.$win.height() && u + i.width() >= r && u - e.leftoffset <= r + o.$win.width() ? !0 : !1;
  }, o.Utils.checkDisplay = function (t, e) {
    var i = o.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", t || document);return t && !i.length && (i = n(t)), i.trigger("display.uk.check"), e && ("string" != typeof e && (e = '[class*="uk-animation-"]'), i.find(e).each(function () {
      var t = o.$(this),
          n = t.attr("class"),
          e = n.match(/uk-animation-(.+)/);t.removeClass(e[0]).width(), t.addClass(e[0]);
    })), i;
  }, o.Utils.options = function (t) {
    if ("string" != n.type(t)) return t;-1 != t.indexOf(":") && "}" != t.trim().substr(-1) && (t = "{" + t + "}");var e = t ? t.indexOf("{") : -1,
        i = {};if (-1 != e) try {
      i = o.Utils.str2json(t.substr(e));
    } catch (r) {}return i;
  }, o.Utils.animate = function (t, e) {
    var i = n.Deferred();return t = o.$(t), t.css("display", "none").addClass(e).one(o.support.animation.end, function () {
      t.removeClass(e), i.resolve();
    }), t.css("display", ""), i.promise();
  }, o.Utils.uid = function (t) {
    return (t || "id") + new Date().getTime() + "RAND" + Math.ceil(1e5 * Math.random());
  }, o.Utils.template = function (t, n) {
    for (var e, o, i, r, a = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), s = 0, u = [], c = 0; s < a.length;) {
      if (e = a[s], e.match(/\{\{\s*(.+?)\s*\}\}/)) switch (s += 1, e = a[s], o = e[0], i = e.substring(e.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), o) {case "~":
          u.push("for(var $i=0;$i<" + i + ".length;$i++) { var $item = " + i + "[$i];"), c++;break;case ":":
          u.push("for(var $key in " + i + ") { var $val = " + i + "[$key];"), c++;break;case "#":
          u.push("if(" + i + ") {"), c++;break;case "^":
          u.push("if(!" + i + ") {"), c++;break;case "/":
          u.push("}"), c--;break;case "!":
          u.push("__ret.push(" + i + ");");break;default:
          u.push("__ret.push(escape(" + i + "));");} else u.push("__ret.push('" + e.replace(/\'/g, "\\'") + "');");s += 1;
    }return r = new Function("$data", ["var __ret = [];", "try {", "with($data){", c ? '__ret = ["Not all blocks are closed correctly."]' : u.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), n ? r(n) : r;
  }, o.Utils.focus = function (t, e) {
    if (t = n(t), !t.length) return t;var o,
        i = t.find("[autofocus]:first");return i.length ? i.focus() : (i = t.find(":input" + (e && "," + e || "")).first(), i.length ? i.focus() : (t.attr("tabindex") || (o = 1e3, t.attr("tabindex", o)), t[0].focus(), o && t.attr("tabindex", ""), t));
  }, o.Utils.events = {}, o.Utils.events.click = o.support.touch ? "tap" : "click", o.fn = function (t, e) {
    var i = arguments,
        r = t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
        a = r[1],
        s = r[2];return o[a] ? this.each(function () {
      var t = n(this),
          r = t.data(a);r || t.data(a, r = o[a](this, s ? void 0 : e)), s && r[s].apply(r, Array.prototype.slice.call(i, 1));
    }) : (n.error("UIkit component [" + a + "] does not exist."), this);
  }, n.UIkit = o, n.fn.uk = o.fn, o.langdirection = "rtl" == o.$html.attr("dir") ? "right" : "left", o.components = {}, o.component = function (t, e, i) {
    if (o.components[t] && !i) return o.components[t];var r = function r(e, i) {
      var a = this;return this.UIkit = o, this.element = e ? o.$(e) : null, this.options = n.extend(!0, {}, this.defaults, i), this.plugins = {}, this.element && this.element.data(t, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(r.plugins)).forEach(function (t) {
        r.plugins[t].init && (r.plugins[t].init(a), a.plugins[t] = !0);
      }), this.trigger("init.uk.component", [t, this]), this;
    };return r.plugins = {}, n.extend(!0, r.prototype, { defaults: { plugins: [] }, boot: function boot() {}, init: function init() {}, on: function on(t, n, e) {
        return o.$(this.element || this).on(t, n, e);
      }, one: function one(t, n, e) {
        return o.$(this.element || this).one(t, n, e);
      }, off: function off(t) {
        return o.$(this.element || this).off(t);
      }, trigger: function trigger(t, n) {
        return o.$(this.element || this).trigger(t, n);
      }, find: function find(t) {
        return o.$(this.element ? this.element : []).find(t);
      }, proxy: function proxy(t, n) {
        var e = this;n.split(" ").forEach(function (n) {
          e[n] || (e[n] = function () {
            return t[n].apply(t, arguments);
          });
        });
      }, mixin: function mixin(t, n) {
        var e = this;n.split(" ").forEach(function (n) {
          e[n] || (e[n] = t[n].bind(e));
        });
      }, option: function option() {
        return 1 == arguments.length ? this.options[arguments[0]] || void 0 : (2 == arguments.length && (this.options[arguments[0]] = arguments[1]), void 0);
      } }, e), this.components[t] = r, this[t] = function () {
      var e, i;if (arguments.length) switch (arguments.length) {case 1:
          "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? e = n(arguments[0]) : i = arguments[0];break;case 2:
          e = n(arguments[0]), i = arguments[1];}return e && e.data(t) ? e.data(t) : new o.components[t](e, i);
    }, o.domready && o.component.boot(t), r;
  }, o.plugin = function (t, n, e) {
    this.components[t].plugins[n] = e;
  }, o.component.boot = function (t) {
    o.components[t].prototype && o.components[t].prototype.boot && !o.components[t].booted && (o.components[t].prototype.boot.apply(o, []), o.components[t].booted = !0);
  }, o.component.bootComponents = function () {
    for (var t in o.components) {
      o.component.boot(t);
    }
  }, o.domObservers = [], o.domready = !1, o.ready = function (t) {
    o.domObservers.push(t), o.domready && t(document);
  }, o.on = function (t, n, e) {
    return t && t.indexOf("ready.uk.dom") > -1 && o.domready && n.apply(o.$doc), o.$doc.on(t, n, e);
  }, o.one = function (t, n, e) {
    return t && t.indexOf("ready.uk.dom") > -1 && o.domready ? (n.apply(o.$doc), o.$doc) : o.$doc.one(t, n, e);
  }, o.trigger = function (t, n) {
    return o.$doc.trigger(t, n);
  }, o.domObserve = function (t, n) {
    o.support.mutationobserver && (n = n || function () {}, o.$(t).each(function () {
      var t = this,
          e = o.$(t);if (!e.data("observer")) try {
        var i = new o.support.mutationobserver(o.Utils.debounce(function () {
          n.apply(t, [e]), e.trigger("changed.uk.dom");
        }, 50), { childList: !0, subtree: !0 });i.observe(t, { childList: !0, subtree: !0 }), e.data("observer", i);
      } catch (r) {}
    }));
  }, o.init = function (t) {
    t = t || document, o.domObservers.forEach(function (n) {
      n(t);
    });
  }, o.on("domready.uk.dom", function () {
    o.init(), o.domready && o.Utils.checkDisplay();
  }), document.addEventListener("DOMContentLoaded", function () {
    var t = function t() {
      o.$body = o.$("body"), o.trigger("beforeready.uk.dom"), o.component.bootComponents();var t = requestAnimationFrame(function () {
        var n = { dir: { x: 0, y: 0 }, x: window.pageXOffset, y: window.pageYOffset },
            e = function e() {
          var i = window.pageXOffset,
              r = window.pageYOffset;(n.x != i || n.y != r) && (n.dir.x = i != n.x ? i > n.x ? 1 : -1 : 0, n.dir.y = r != n.y ? r > n.y ? 1 : -1 : 0, n.x = i, n.y = r, o.$doc.trigger("scrolling.uk.document", [{ dir: { x: n.dir.x, y: n.dir.y }, x: i, y: r }])), cancelAnimationFrame(t), t = requestAnimationFrame(e);
        };return o.support.touch && o.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", e), (n.x || n.y) && e(), e;
      }());if (o.trigger("domready.uk.dom"), o.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && o.$win.on("load orientationchange resize", o.Utils.debounce(function () {
        var t = function t() {
          return n(".uk-height-viewport").css("height", window.innerHeight), t;
        };return t();
      }(), 100)), o.trigger("afterready.uk.dom"), o.domready = !0, o.support.mutationobserver) {
        var e = o.Utils.debounce(function () {
          requestAnimationFrame(function () {
            o.init(document.body);
          });
        }, 10);new o.support.mutationobserver(function (t) {
          var n = !1;t.every(function (t) {
            if ("childList" != t.type) return !0;for (var e, o = 0; o < t.addedNodes.length; ++o) {
              if (e = t.addedNodes[o], e.outerHTML && -1 !== e.outerHTML.indexOf("data-uk-")) return (n = !0) && !1;
            }return !0;
          }), n && e();
        }).observe(document.body, { childList: !0, subtree: !0 });
      }
    };return ("complete" == document.readyState || "interactive" == document.readyState) && setTimeout(t), t;
  }()), o.$html.addClass(o.support.touch ? "uk-touch" : "uk-notouch"), o.support.touch) {
    var r,
        a = !1,
        s = "uk-hover",
        u = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";o.$html.on("mouseenter touchstart MSPointerDown pointerdown", u, function () {
      a && n("." + s).removeClass(s), a = n(this).addClass(s);
    }).on("mouseleave touchend MSPointerUp pointerup", function (t) {
      r = n(t.target).parents(u), a && a.not(r).removeClass(s);
    });
  }return o;
});
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    UI.component('cover', {

        defaults: {
            automute: true
        },

        boot: function boot() {

            // auto init
            UI.ready(function (context) {

                UI.$('[data-uk-cover]', context).each(function () {

                    var ele = UI.$(this);

                    if (!ele.data('cover')) {
                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr('data-uk-cover')));
                    }
                });
            });
        },

        init: function init() {

            this.parent = this.element.parent();

            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function () {
                this.check();
            }.bind(this), 100));

            this.on('display.uk.check', function (e) {
                if (this.element.is(':visible')) this.check();
            }.bind(this));

            this.check();

            if (this.element.is('iframe') && this.options.automute) {

                var src = this.element.attr('src');

                this.element.attr('src', '').on('load', function () {
                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');
                }).attr('src', [src, src.indexOf('?') > -1 ? '&' : '?', 'enablejsapi=1&api=1'].join(''));
            }
        },

        check: function check() {

            this.element.css({ width: '', height: '' });

            this.dimension = { w: this.element.width(), h: this.element.height() };

            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
                this.dimension.w = this.element.attr('width');
            }

            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
                this.dimension.h = this.element.attr('height');
            }

            this.ratio = this.dimension.w / this.dimension.h;

            var w = this.parent.width(),
                h = this.parent.height(),
                width,
                height;

            // if element height < parent height (gap underneath)
            if (w / this.ratio < h) {

                width = Math.ceil(h * this.ratio);
                height = h;

                // element width < parent width (gap to right)
            } else {

                width = w;
                height = Math.ceil(w / this.ratio);
            }

            this.element.css({ width: width, height: height });
        }
    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  t.component("cover", { defaults: { automute: !0 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-cover]", i).each(function () {
          var i = t.$(this);if (!i.data("cover")) {
            t.cover(i, t.Utils.options(i.attr("data-uk-cover")));
          }
        });
      });
    }, init: function init() {
      if (this.parent = this.element.parent(), t.$win.on("load resize orientationchange", t.Utils.debounce(function () {
        this.check();
      }.bind(this), 100)), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.check();
      }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
        var i = this.element.attr("src");this.element.attr("src", "").on("load", function () {
          this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*");
        }).attr("src", [i, i.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""));
      }
    }, check: function check() {
      this.element.css({ width: "", height: "" }), this.dimension = { w: this.element.width(), h: this.element.height() }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;var t,
          i,
          e = this.parent.width(),
          n = this.parent.height();e / this.ratio < n ? (t = Math.ceil(n * this.ratio), i = n) : (t = e, i = Math.ceil(e / this.ratio)), this.element.css({ width: t, height: i });
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var active = false,
        hoverIdle,
        flips = {
        x: {
            'bottom-left': 'bottom-right',
            'bottom-right': 'bottom-left',
            'bottom-center': 'bottom-center',
            'top-left': 'top-right',
            'top-right': 'top-left',
            'top-center': 'top-center',
            'left-top': 'right-top',
            'left-bottom': 'right-bottom',
            'left-center': 'right-center',
            'right-top': 'left-top',
            'right-bottom': 'left-bottom',
            'right-center': 'left-center'
        },
        y: {
            'bottom-left': 'top-left',
            'bottom-right': 'top-right',
            'bottom-center': 'top-center',
            'top-left': 'bottom-left',
            'top-right': 'bottom-right',
            'top-center': 'bottom-center',
            'left-top': 'left-bottom',
            'left-bottom': 'left-top',
            'left-center': 'left-center',
            'right-top': 'right-bottom',
            'right-bottom': 'right-top',
            'right-center': 'right-center'
        },
        xy: {
            'bottom-left': 'top-right',
            'bottom-right': 'top-left',
            'bottom-center': 'top-center',
            'top-left': 'bottom-right',
            'top-right': 'bottom-left',
            'top-center': 'bottom-center',
            'left-top': 'right-bottom',
            'left-bottom': 'right-top',
            'left-center': 'right-center',
            'right-top': 'left-bottom',
            'right-bottom': 'left-top',
            'right-center': 'left-center'
        }
    };

    UI.component('dropdown', {

        defaults: {
            mode: 'hover',
            pos: 'bottom-left',
            offset: 0,
            remaintime: 800,
            justify: false,
            boundary: UI.$win,
            delay: 0,
            dropdownSelector: '.uk-dropdown,.uk-dropdown-blank',
            hoverDelayIdle: 250,
            preventflip: false
        },

        remainIdle: false,

        boot: function boot() {

            var triggerevent = UI.support.touch ? 'click' : 'mouseenter';

            // init code
            UI.$html.on(triggerevent + '.dropdown.uikit focus pointerdown', '[data-uk-dropdown]', function (e) {

                var ele = UI.$(this);

                if (!ele.data('dropdown')) {

                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr('data-uk-dropdown')));

                    if (e.type == 'click' || e.type == 'mouseenter' && dropdown.options.mode == 'hover') {
                        dropdown.element.trigger(triggerevent);
                    }

                    if (dropdown.dropdown.length) {
                        e.preventDefault();
                    }
                }
            });
        },

        init: function init() {

            var $this = this;

            this.dropdown = this.find(this.options.dropdownSelector);
            this.offsetParent = this.dropdown.parents().filter(function () {
                return UI.$.inArray(UI.$(this).css('position'), ['relative', 'fixed', 'absolute']) !== -1;
            }).slice(0, 1);

            if (!this.offsetParent.length) {
                this.offsetParent = this.element;
            }

            this.centered = this.dropdown.hasClass('uk-dropdown-center');
            this.justified = this.options.justify ? UI.$(this.options.justify) : false;

            this.boundary = UI.$(this.options.boundary);

            if (!this.boundary.length) {
                this.boundary = UI.$win;
            }

            // legacy DEPRECATED!
            if (this.dropdown.hasClass('uk-dropdown-up')) {
                this.options.pos = 'top-left';
            }
            if (this.dropdown.hasClass('uk-dropdown-flip')) {
                this.options.pos = this.options.pos.replace('left', 'right');
            }
            if (this.dropdown.hasClass('uk-dropdown-center')) {
                this.options.pos = this.options.pos.replace(/(left|right)/, 'center');
            }
            //-- end legacy

            // Init ARIA
            this.element.attr('aria-haspopup', 'true');
            this.element.attr('aria-expanded', this.element.hasClass('uk-open'));
            this.dropdown.attr('aria-hidden', 'true');

            if (this.options.mode == 'click' || UI.support.touch) {

                this.on('click.uk.dropdown', function (e) {

                    var $target = UI.$(e.target);

                    if (!$target.parents($this.options.dropdownSelector).length) {

                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || $this.dropdown.length && !$this.dropdown.is(':visible')) {
                            e.preventDefault();
                        }

                        $target.blur();
                    }

                    if (!$this.element.hasClass('uk-open')) {

                        $this.show();
                    } else {

                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
                            $this.hide();
                        }
                    }
                });
            } else {

                this.on('mouseenter', function (e) {

                    $this.trigger('pointerenter.uk.dropdown', [$this]);

                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    if (active && active == $this) {
                        return;
                    }

                    // pseudo manuAim
                    if (active && active != $this) {

                        hoverIdle = setTimeout(function () {
                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                        }, $this.options.hoverDelayIdle);
                    } else {

                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
                    }
                }).on('mouseleave', function () {

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    $this.remainIdle = setTimeout(function () {
                        if (active && active == $this) $this.hide();
                    }, $this.options.remaintime);

                    $this.trigger('pointerleave.uk.dropdown', [$this]);
                }).on('click', function (e) {

                    var $target = UI.$(e.target);

                    if ($this.remainIdle) {
                        clearTimeout($this.remainIdle);
                    }

                    if (active && active == $this) {
                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
                            $this.hide();
                        }
                        return;
                    }

                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")) {
                        e.preventDefault();
                    }

                    $this.show();
                });
            }
        },

        show: function show() {

            UI.$html.off('click.outer.dropdown');

            if (active && active != this) {
                active.hide(true);
            }

            if (hoverIdle) {
                clearTimeout(hoverIdle);
            }

            this.trigger('beforeshow.uk.dropdown', [this]);

            this.checkDimensions();
            this.element.addClass('uk-open');

            // Update ARIA
            this.element.attr('aria-expanded', 'true');
            this.dropdown.attr('aria-hidden', 'false');

            this.trigger('show.uk.dropdown', [this]);

            UI.Utils.checkDisplay(this.dropdown, true);
            UI.Utils.focus(this.dropdown);
            active = this;

            this.registerOuterClick();
        },

        hide: function hide(force) {

            this.trigger('beforehide.uk.dropdown', [this, force]);

            this.element.removeClass('uk-open');

            if (this.remainIdle) {
                clearTimeout(this.remainIdle);
            }

            this.remainIdle = false;

            // Update ARIA
            this.element.attr('aria-expanded', 'false');
            this.dropdown.attr('aria-hidden', 'true');

            this.trigger('hide.uk.dropdown', [this, force]);

            if (active == this) active = false;
        },

        registerOuterClick: function registerOuterClick() {

            var $this = this;

            UI.$html.off('click.outer.dropdown');

            setTimeout(function () {

                UI.$html.on('click.outer.dropdown', function (e) {

                    if (hoverIdle) {
                        clearTimeout(hoverIdle);
                    }

                    var $target = UI.$(e.target);

                    if (active == $this && !$this.element.find(e.target).length) {
                        $this.hide(true);
                        UI.$html.off('click.outer.dropdown');
                    }
                });
            }, 10);
        },

        checkDimensions: function checkDimensions() {

            if (!this.dropdown.length) return;

            // reset
            this.dropdown.removeClass('uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip').css({
                topLeft: '',
                left: '',
                marginLeft: '',
                marginRight: ''
            });

            if (this.justified && this.justified.length) {
                this.dropdown.css('min-width', '');
            }

            var $this = this,
                pos = UI.$.extend({}, this.offsetParent.offset(), { width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight }),
                posoffset = this.options.offset,
                dropdown = this.dropdown,
                offset = dropdown.show().offset() || { left: 0, top: 0 },
                width = dropdown.outerWidth(),
                height = dropdown.outerHeight(),
                boundarywidth = this.boundary.width(),
                boundaryoffset = this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : { top: 0, left: 0 },
                dpos = this.options.pos;

            var variants = {
                'bottom-left': { top: 0 + pos.height + posoffset, left: 0 },
                'bottom-right': { top: 0 + pos.height + posoffset, left: 0 + pos.width - width },
                'bottom-center': { top: 0 + pos.height + posoffset, left: 0 + pos.width / 2 - width / 2 },
                'top-left': { top: 0 - height - posoffset, left: 0 },
                'top-right': { top: 0 - height - posoffset, left: 0 + pos.width - width },
                'top-center': { top: 0 - height - posoffset, left: 0 + pos.width / 2 - width / 2 },
                'left-top': { top: 0, left: 0 - width - posoffset },
                'left-bottom': { top: 0 + pos.height - height, left: 0 - width - posoffset },
                'left-center': { top: 0 + pos.height / 2 - height / 2, left: 0 - width - posoffset },
                'right-top': { top: 0, left: 0 + pos.width + posoffset },
                'right-bottom': { top: 0 + pos.height - height, left: 0 + pos.width + posoffset },
                'right-center': { top: 0 + pos.height / 2 - height / 2, left: 0 + pos.width + posoffset }
            },
                css = {},
                pp;

            pp = dpos.split('-');
            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];

            // justify dropdown
            if (this.justified && this.justified.length) {
                justify(dropdown.css({ left: 0 }), this.justified, boundarywidth);
            } else {

                if (this.options.preventflip !== true) {

                    var fdpos;

                    switch (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                        case "x":
                            if (this.options.preventflip !== 'x') fdpos = flips['x'][dpos] || 'right-top';
                            break;
                        case "y":
                            if (this.options.preventflip !== 'y') fdpos = flips['y'][dpos] || 'top-left';
                            break;
                        case "xy":
                            if (!this.options.preventflip) fdpos = flips['xy'][dpos] || 'right-bottom';
                            break;
                    }

                    if (fdpos) {

                        pp = fdpos.split('-');
                        css = variants[fdpos] ? variants[fdpos] : variants['bottom-left'];
                        dropdown.addClass('uk-dropdown-autoflip');

                        // check flipped
                        if (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
                            pp = dpos.split('-');
                            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
                        }
                    }
                }
            }

            if (width > boundarywidth) {
                dropdown.addClass('uk-dropdown-stack');
                this.trigger('stack.uk.dropdown', [this]);
            }

            dropdown.css(css).css('display', '').addClass('uk-dropdown-' + pp[0]);
        },

        checkBoundary: function checkBoundary(left, top, width, height, boundarywidth) {

            var axis = "";

            if (left < 0 || left - UI.$win.scrollLeft() + width > boundarywidth) {
                axis += "x";
            }

            if (top - UI.$win.scrollTop() < 0 || top - UI.$win.scrollTop() + height > window.innerHeight) {
                axis += "y";
            }

            return axis;
        }
    });

    UI.component('dropdownOverlay', {

        defaults: {
            justify: false,
            cls: '',
            duration: 200
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-dropdown-overlay]', context).each(function () {
                    var ele = UI.$(this);

                    if (!ele.data('dropdownOverlay')) {
                        UI.dropdownOverlay(ele, UI.Utils.options(ele.attr('data-uk-dropdown-overlay')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
            this.overlay = this.element.find('uk-dropdown-overlay');

            if (!this.overlay.length) {
                this.overlay = UI.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element);
            }

            this.overlay.addClass(this.options.cls);

            this.on({

                'beforeshow.uk.dropdown': function beforeshowUkDropdown(e, dropdown) {
                    $this.dropdown = dropdown;

                    if ($this.justified && $this.justified.length) {
                        justify($this.overlay.css({ display: 'block', marginLeft: '', marginRight: '' }), $this.justified, $this.justified.outerWidth());
                    }
                },

                'show.uk.dropdown': function showUkDropdown(e, dropdown) {

                    var h = $this.dropdown.dropdown.outerHeight(true);

                    $this.dropdown.element.removeClass('uk-open');

                    $this.overlay.stop().css('display', 'block').animate({ height: h }, $this.options.duration, function () {

                        $this.dropdown.dropdown.css('visibility', '');
                        $this.dropdown.element.addClass('uk-open');

                        UI.Utils.checkDisplay($this.dropdown.dropdown, true);
                    });

                    $this.pointerleave = false;
                },

                'hide.uk.dropdown': function hideUkDropdown() {
                    $this.overlay.stop().animate({ height: 0 }, $this.options.duration);
                },

                'pointerenter.uk.dropdown': function pointerenterUkDropdown(e, dropdown) {
                    clearTimeout($this.remainIdle);
                },

                'pointerleave.uk.dropdown': function pointerleaveUkDropdown(e, dropdown) {
                    $this.pointerleave = true;
                }
            });

            this.overlay.on({

                'mouseenter': function mouseenter() {
                    if ($this.remainIdle) {
                        clearTimeout($this.dropdown.remainIdle);
                        clearTimeout($this.remainIdle);
                    }
                },

                'mouseleave': function mouseleave() {

                    if ($this.pointerleave && active) {

                        $this.remainIdle = setTimeout(function () {
                            if (active) active.hide();
                        }, active.options.remaintime);
                    }
                }
            });
        }

    });

    function justify(ele, justifyTo, boundarywidth, offset) {

        ele = UI.$(ele);
        justifyTo = UI.$(justifyTo);
        boundarywidth = boundarywidth || window.innerWidth;
        offset = offset || ele.offset();

        if (justifyTo.length) {

            var jwidth = justifyTo.outerWidth();

            ele.css('min-width', jwidth);

            if (UI.langdirection == 'right') {

                var right1 = boundarywidth - (justifyTo.offset().left + jwidth),
                    right2 = boundarywidth - (ele.offset().left + ele.outerWidth());

                ele.css('margin-right', right1 - right2);
            } else {
                ele.css('margin-left', justifyTo.offset().left - offset.left);
            }
        }
    }
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  function o(o, e, i, n) {
    if (o = t.$(o), e = t.$(e), i = i || window.innerWidth, n = n || o.offset(), e.length) {
      var r = e.outerWidth();if (o.css("min-width", r), "right" == t.langdirection) {
        var s = i - (e.offset().left + r),
            d = i - (o.offset().left + o.outerWidth());o.css("margin-right", s - d);
      } else o.css("margin-left", e.offset().left - n.left);
    }
  }var e,
      i = !1,
      n = { x: { "bottom-left": "bottom-right", "bottom-right": "bottom-left", "bottom-center": "bottom-center", "top-left": "top-right", "top-right": "top-left", "top-center": "top-center", "left-top": "right-top", "left-bottom": "right-bottom", "left-center": "right-center", "right-top": "left-top", "right-bottom": "left-bottom", "right-center": "left-center" }, y: { "bottom-left": "top-left", "bottom-right": "top-right", "bottom-center": "top-center", "top-left": "bottom-left", "top-right": "bottom-right", "top-center": "bottom-center", "left-top": "left-bottom", "left-bottom": "left-top", "left-center": "left-center", "right-top": "right-bottom", "right-bottom": "right-top", "right-center": "right-center" }, xy: { "bottom-left": "top-right", "bottom-right": "top-left", "bottom-center": "top-center", "top-left": "bottom-right", "top-right": "bottom-left", "top-center": "bottom-center", "left-top": "right-bottom", "left-bottom": "right-top", "left-center": "right-center", "right-top": "left-bottom", "right-bottom": "left-top", "right-center": "left-center" } };t.component("dropdown", { defaults: { mode: "hover", pos: "bottom-left", offset: 0, remaintime: 800, justify: !1, boundary: t.$win, delay: 0, dropdownSelector: ".uk-dropdown,.uk-dropdown-blank", hoverDelayIdle: 250, preventflip: !1 }, remainIdle: !1, boot: function boot() {
      var o = t.support.touch ? "click" : "mouseenter";t.$html.on(o + ".dropdown.uikit focus pointerdown", "[data-uk-dropdown]", function (e) {
        var i = t.$(this);if (!i.data("dropdown")) {
          var n = t.dropdown(i, t.Utils.options(i.attr("data-uk-dropdown")));("click" == e.type || "mouseenter" == e.type && "hover" == n.options.mode) && n.element.trigger(o), n.dropdown.length && e.preventDefault();
        }
      });
    }, init: function init() {
      var o = this;this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function () {
        return -1 !== t.$.inArray(t.$(this).css("position"), ["relative", "fixed", "absolute"]);
      }).slice(0, 1), this.offsetParent.length || (this.offsetParent = this.element), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.boundary = t.$(this.options.boundary), this.boundary.length || (this.boundary = t.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), this.dropdown.attr("aria-hidden", "true"), "click" == this.options.mode || t.support.touch ? this.on("click.uk.dropdown", function (e) {
        var i = t.$(e.target);i.parents(o.options.dropdownSelector).length || ((i.is("a[href='#']") || i.parent().is("a[href='#']") || o.dropdown.length && !o.dropdown.is(":visible")) && e.preventDefault(), i.blur()), o.element.hasClass("uk-open") ? (!o.dropdown.find(e.target).length || i.is(".uk-dropdown-close") || i.parents(".uk-dropdown-close").length) && o.hide() : o.show();
      }) : this.on("mouseenter", function () {
        o.trigger("pointerenter.uk.dropdown", [o]), o.remainIdle && clearTimeout(o.remainIdle), e && clearTimeout(e), i && i == o || (e = i && i != o ? setTimeout(function () {
          e = setTimeout(o.show.bind(o), o.options.delay);
        }, o.options.hoverDelayIdle) : setTimeout(o.show.bind(o), o.options.delay));
      }).on("mouseleave", function () {
        e && clearTimeout(e), o.remainIdle = setTimeout(function () {
          i && i == o && o.hide();
        }, o.options.remaintime), o.trigger("pointerleave.uk.dropdown", [o]);
      }).on("click", function (e) {
        var n = t.$(e.target);return o.remainIdle && clearTimeout(o.remainIdle), i && i == o ? ((!o.dropdown.find(e.target).length || n.is(".uk-dropdown-close") || n.parents(".uk-dropdown-close").length) && o.hide(), void 0) : ((n.is("a[href='#']") || n.parent().is("a[href='#']")) && e.preventDefault(), o.show(), void 0);
      });
    }, show: function show() {
      t.$html.off("click.outer.dropdown"), i && i != this && i.hide(!0), e && clearTimeout(e), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.dropdown.attr("aria-hidden", "false"), this.trigger("show.uk.dropdown", [this]), t.Utils.checkDisplay(this.dropdown, !0), t.Utils.focus(this.dropdown), i = this, this.registerOuterClick();
    }, hide: function hide(t) {
      this.trigger("beforehide.uk.dropdown", [this, t]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.dropdown.attr("aria-hidden", "true"), this.trigger("hide.uk.dropdown", [this, t]), i == this && (i = !1);
    }, registerOuterClick: function registerOuterClick() {
      var o = this;t.$html.off("click.outer.dropdown"), setTimeout(function () {
        t.$html.on("click.outer.dropdown", function (n) {
          e && clearTimeout(e);t.$(n.target);i != o || o.element.find(n.target).length || (o.hide(!0), t.$html.off("click.outer.dropdown"));
        });
      }, 10);
    }, checkDimensions: function checkDimensions() {
      if (this.dropdown.length) {
        this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({ topLeft: "", left: "", marginLeft: "", marginRight: "" }), this.justified && this.justified.length && this.dropdown.css("min-width", "");var e,
            i = t.$.extend({}, this.offsetParent.offset(), { width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight }),
            r = this.options.offset,
            s = this.dropdown,
            d = (s.show().offset() || { left: 0, top: 0 }, s.outerWidth()),
            h = s.outerHeight(),
            p = this.boundary.width(),
            l = (this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset() : { top: 0, left: 0 }, this.options.pos),
            a = { "bottom-left": { top: 0 + i.height + r, left: 0 }, "bottom-right": { top: 0 + i.height + r, left: 0 + i.width - d }, "bottom-center": { top: 0 + i.height + r, left: 0 + i.width / 2 - d / 2 }, "top-left": { top: 0 - h - r, left: 0 }, "top-right": { top: 0 - h - r, left: 0 + i.width - d }, "top-center": { top: 0 - h - r, left: 0 + i.width / 2 - d / 2 }, "left-top": { top: 0, left: 0 - d - r }, "left-bottom": { top: 0 + i.height - h, left: 0 - d - r }, "left-center": { top: 0 + i.height / 2 - h / 2, left: 0 - d - r }, "right-top": { top: 0, left: 0 + i.width + r }, "right-bottom": { top: 0 + i.height - h, left: 0 + i.width + r }, "right-center": { top: 0 + i.height / 2 - h / 2, left: 0 + i.width + r } },
            f = {};if (e = l.split("-"), f = a[l] ? a[l] : a["bottom-left"], this.justified && this.justified.length) o(s.css({ left: 0 }), this.justified, p);else if (this.options.preventflip !== !0) {
          var u;switch (this.checkBoundary(i.left + f.left, i.top + f.top, d, h, p)) {case "x":
              "x" !== this.options.preventflip && (u = n.x[l] || "right-top");break;case "y":
              "y" !== this.options.preventflip && (u = n.y[l] || "top-left");break;case "xy":
              this.options.preventflip || (u = n.xy[l] || "right-bottom");}u && (e = u.split("-"), f = a[u] ? a[u] : a["bottom-left"], s.addClass("uk-dropdown-autoflip"), this.checkBoundary(i.left + f.left, i.top + f.top, d, h, p) && (e = l.split("-"), f = a[l] ? a[l] : a["bottom-left"]));
        }d > p && (s.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), s.css(f).css("display", "").addClass("uk-dropdown-" + e[0]);
      }
    }, checkBoundary: function checkBoundary(o, e, i, n, r) {
      var s = "";return (0 > o || o - t.$win.scrollLeft() + i > r) && (s += "x"), (e - t.$win.scrollTop() < 0 || e - t.$win.scrollTop() + n > window.innerHeight) && (s += "y"), s;
    } }), t.component("dropdownOverlay", { defaults: { justify: !1, cls: "", duration: 200 }, boot: function boot() {
      t.ready(function (o) {
        t.$("[data-uk-dropdown-overlay]", o).each(function () {
          var o = t.$(this);o.data("dropdownOverlay") || t.dropdownOverlay(o, t.Utils.options(o.attr("data-uk-dropdown-overlay")));
        });
      });
    }, init: function init() {
      var e = this;this.justified = this.options.justify ? t.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({ "beforeshow.uk.dropdown": function beforeshowUkDropdown(t, i) {
          e.dropdown = i, e.justified && e.justified.length && o(e.overlay.css({ display: "block", marginLeft: "", marginRight: "" }), e.justified, e.justified.outerWidth());
        }, "show.uk.dropdown": function showUkDropdown() {
          var o = e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"), e.overlay.stop().css("display", "block").animate({ height: o }, e.options.duration, function () {
            e.dropdown.dropdown.css("visibility", ""), e.dropdown.element.addClass("uk-open"), t.Utils.checkDisplay(e.dropdown.dropdown, !0);
          }), e.pointerleave = !1;
        }, "hide.uk.dropdown": function hideUkDropdown() {
          e.overlay.stop().animate({ height: 0 }, e.options.duration);
        }, "pointerenter.uk.dropdown": function pointerenterUkDropdown() {
          clearTimeout(e.remainIdle);
        }, "pointerleave.uk.dropdown": function pointerleaveUkDropdown() {
          e.pointerleave = !0;
        } }), this.overlay.on({ mouseenter: function mouseenter() {
          e.remainIdle && (clearTimeout(e.dropdown.remainIdle), clearTimeout(e.remainIdle));
        }, mouseleave: function mouseleave() {
          e.pointerleave && i && (e.remainIdle = setTimeout(function () {
            i && i.hide();
          }, i.options.remaintime));
        } });
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var grids = [];

    UI.component('gridMatchHeight', {

        defaults: {
            target: false,
            row: true,
            ignorestacked: false,
            observe: false
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-grid-match]', context).each(function () {
                    var grid = UI.$(this),
                        obj;

                    if (!grid.data('gridMatchHeight')) {
                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr('data-uk-grid-match')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.columns = this.element.children();
            this.elements = this.options.target ? this.find(this.options.target) : this.columns;

            if (!this.columns.length) return;

            UI.$win.on('load resize orientationchange', function () {

                var fn = function fn() {
                    if ($this.element.is(':visible')) $this.match();
                };

                UI.$(function () {
                    fn();
                });

                return UI.Utils.debounce(fn, 50);
            }());

            if (this.options.observe) {

                UI.domObserve(this.element, function (e) {
                    if ($this.element.is(':visible')) $this.match();
                });
            }

            this.on('display.uk.check', function (e) {
                if (this.element.is(':visible')) this.match();
            }.bind(this));

            grids.push(this);
        },

        match: function match() {

            var firstvisible = this.columns.filter(':visible:first');

            if (!firstvisible.length) return;

            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;

            if (stacked && !this.options.ignorestacked) {
                this.revert();
            } else {
                UI.Utils.matchHeights(this.elements, this.options);
            }

            return this;
        },

        revert: function revert() {
            this.elements.css('min-height', '');
            return this;
        }
    });

    UI.component('gridMargin', {

        defaults: {
            cls: 'uk-grid-margin',
            rowfirst: 'uk-row-first'
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-grid-margin]', context).each(function () {
                    var grid = UI.$(this),
                        obj;

                    if (!grid.data('gridMargin')) {
                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr('data-uk-grid-margin')));
                    }
                });
            });
        },

        init: function init() {

            var stackMargin = UI.stackMargin(this.element, this.options);
        }
    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  var i = [];t.component("gridMatchHeight", { defaults: { target: !1, row: !0, ignorestacked: !1, observe: !1 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-match]", i).each(function () {
          var i,
              n = t.$(this);n.data("gridMatchHeight") || (i = t.gridMatchHeight(n, t.Utils.options(n.attr("data-uk-grid-match"))));
        });
      });
    }, init: function init() {
      var n = this;this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (t.$win.on("load resize orientationchange", function () {
        var i = function i() {
          n.element.is(":visible") && n.match();
        };return t.$(function () {
          i();
        }), t.Utils.debounce(i, 50);
      }()), this.options.observe && t.domObserve(this.element, function () {
        n.element.is(":visible") && n.match();
      }), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.match();
      }.bind(this)), i.push(this));
    }, match: function match() {
      var i = this.columns.filter(":visible:first");if (i.length) {
        var n = Math.ceil(100 * parseFloat(i.css("width")) / parseFloat(i.parent().css("width"))) >= 100;return n && !this.options.ignorestacked ? this.revert() : t.Utils.matchHeights(this.elements, this.options), this;
      }
    }, revert: function revert() {
      return this.elements.css("min-height", ""), this;
    } }), t.component("gridMargin", { defaults: { cls: "uk-grid-margin", rowfirst: "uk-row-first" }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-grid-margin]", i).each(function () {
          var i,
              n = t.$(this);n.data("gridMargin") || (i = t.gridMargin(n, t.Utils.options(n.attr("data-uk-grid-margin"))));
        });
      });
    }, init: function init() {
      t.stackMargin(this.element, this.options);
    } });
}(UIkit2);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var active = false,
        activeCount = 0,
        $html = UI.$html,
        body;

    UI.$win.on('resize orientationchange', UI.Utils.debounce(function () {
        UI.$('.uk-modal.uk-open').each(function () {
            return UI.$(this).data('modal') && UI.$(this).data('modal').resize();
        });
    }, 150));

    UI.component('modal', {

        defaults: {
            keyboard: true,
            bgclose: true,
            minScrollHeight: 150,
            center: false,
            modal: true
        },

        scrollable: false,
        transition: false,
        hasTransitioned: true,

        init: function init() {

            if (!body) body = UI.$('body');

            if (!this.element.length) return;

            var $this = this;

            this.paddingdir = 'padding-' + (UI.langdirection == 'left' ? 'right' : 'left');
            this.dialog = this.find('.uk-modal-dialog');

            this.active = false;

            // Update ARIA
            this.element.attr('aria-hidden', this.element.hasClass('uk-open'));

            this.on('click', '.uk-modal-close', function (e) {
                e.preventDefault();
                $this.hide();
            }).on('click', function (e) {

                var target = UI.$(e.target);

                if (target[0] == $this.element[0] && $this.options.bgclose) {
                    $this.hide();
                }
            });

            UI.domObserve(this.element, function (e) {
                $this.resize();
            });
        },

        toggle: function toggle() {
            return this[this.isActive() ? 'hide' : 'show']();
        },

        show: function show() {

            if (!this.element.length) return;

            var $this = this;

            if (this.isActive()) return;

            if (this.options.modal && active) {
                active.hide(true);
            }

            this.element.removeClass('uk-open').show();
            this.resize(true);

            if (this.options.modal) {
                active = this;
            }

            this.active = true;

            activeCount++;

            if (UI.support.transition) {
                this.hasTransitioned = false;
                this.element.one(UI.support.transition.end, function () {
                    $this.hasTransitioned = true;
                    UI.Utils.focus($this.dialog, 'a[href]');
                }).addClass('uk-open');
            } else {
                this.element.addClass('uk-open');
                UI.Utils.focus(this.dialog, 'a[href]');
            }

            $html.addClass('uk-modal-page').height(); // force browser engine redraw

            // Update ARIA
            this.element.attr('aria-hidden', 'false');

            this.element.trigger('show.uk.modal');

            UI.Utils.checkDisplay(this.dialog, true);

            return this;
        },

        hide: function hide(force) {

            if (!force && UI.support.transition && this.hasTransitioned) {

                var $this = this;

                this.one(UI.support.transition.end, function () {
                    $this._hide();
                }).removeClass('uk-open');
            } else {

                this._hide();
            }

            return this;
        },

        resize: function resize(force) {

            if (!this.isActive() && !force) return;

            var bodywidth = body.width();

            this.scrollbarwidth = window.innerWidth - bodywidth;

            body.css(this.paddingdir, this.scrollbarwidth);

            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');

            if (!this.updateScrollable() && this.options.center) {

                var dh = this.dialog.outerHeight(),
                    pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);

                if (dh + pad < window.innerHeight) {
                    this.dialog.css({ top: window.innerHeight / 2 - dh / 2 - pad });
                } else {
                    this.dialog.css({ top: '' });
                }
            }
        },

        updateScrollable: function updateScrollable() {

            // has scrollable?
            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');

            if (scrollable.length) {

                scrollable.css('height', 0);

                var offset = Math.abs(parseInt(this.dialog.css('margin-top'), 10)),
                    dh = this.dialog.outerHeight(),
                    wh = window.innerHeight,
                    h = wh - 2 * (offset < 20 ? 20 : offset) - dh;

                scrollable.css({
                    maxHeight: h < this.options.minScrollHeight ? '' : h,
                    height: ''
                });

                return true;
            }

            return false;
        },

        _hide: function _hide() {

            this.active = false;
            if (activeCount > 0) activeCount--;else activeCount = 0;

            this.element.hide().removeClass('uk-open');

            // Update ARIA
            this.element.attr('aria-hidden', 'true');

            if (!activeCount) {
                $html.removeClass('uk-modal-page');
                body.css(this.paddingdir, "");
            }

            if (active === this) active = false;

            this.trigger('hide.uk.modal');
        },

        isActive: function isActive() {
            return this.element.hasClass('uk-open');
        }

    });

    UI.component('modalTrigger', {

        boot: function boot() {

            // init code
            UI.$html.on('click.modal.uikit', '[data-uk-modal]', function (e) {

                var ele = UI.$(this);

                if (ele.is('a')) {
                    e.preventDefault();
                }

                if (!ele.data('modalTrigger')) {
                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr('data-uk-modal')));
                    modal.show();
                }
            });

            // close modal on esc button
            UI.$html.on('keydown.modal.uikit', function (e) {

                if (active && e.keyCode === 27 && active.options.keyboard) {
                    // ESC
                    e.preventDefault();
                    active.hide();
                }
            });
        },

        init: function init() {

            var $this = this;

            this.options = UI.$.extend({
                target: $this.element.is('a') ? $this.element.attr('href') : false
            }, this.options);

            this.modal = UI.modal(this.options.target, this.options);

            this.on("click", function (e) {
                e.preventDefault();
                $this.show();
            });

            //methods
            this.proxy(this.modal, 'show hide isActive');
        }
    });

    UI.modal.dialog = function (content, options) {

        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo('body'), options);

        modal.on('hide.uk.modal', function () {
            if (modal.persist) {
                modal.persist.appendTo(modal.persist.data('modalPersistParent'));
                modal.persist = false;
            }
            modal.element.remove();
        });

        setContent(content, modal);

        return modal;
    };

    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';

    UI.modal.alert = function (content, options) {

        options = UI.$.extend(true, { bgclose: false, keyboard: false, modal: false, labels: UI.modal.labels }, options);

        var modal = UI.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(content) + '</div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + options.labels.Ok + '</button></div>'].join(""), options);

        modal.on('show.uk.modal', function () {
            setTimeout(function () {
                modal.element.find('button:first').focus();
            }, 50);
        });

        return modal.show();
    };

    UI.modal.confirm = function (content, onconfirm, oncancel) {

        var options = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};

        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function () {};
        oncancel = UI.$.isFunction(oncancel) ? oncancel : function () {};
        options = UI.$.extend(true, { bgclose: false, keyboard: false, modal: false, labels: UI.modal.labels }, UI.$.isFunction(options) ? {} : options);

        var modal = UI.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(content) + '</div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + options.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + options.labels.Ok + '</button></div>'].join(""), options);

        modal.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
            UI.$(this).is('.js-modal-confirm') ? onconfirm() : oncancel();
            modal.hide();
        });

        modal.on('show.uk.modal', function () {
            setTimeout(function () {
                modal.element.find('.js-modal-confirm').focus();
            }, 50);
        });

        return modal.show();
    };

    UI.modal.prompt = function (text, value, onsubmit, options) {

        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function (value) {};
        options = UI.$.extend(true, { bgclose: false, keyboard: false, modal: false, labels: UI.modal.labels }, options);

        var modal = UI.modal.dialog([text ? '<div class="uk-modal-content uk-form">' + String(text) + '</div>' : '', '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + options.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + options.labels.Ok + '</button></div>'].join(""), options),
            input = modal.element.find("input[type='text']").val(value || '').on('keyup', function (e) {
            if (e.keyCode == 13) {
                modal.element.find('.js-modal-ok').trigger('click');
            }
        });

        modal.element.find('.js-modal-ok').on('click', function () {
            if (onsubmit(input.val()) !== false) {
                modal.hide();
            }
        });

        return modal.show();
    };

    UI.modal.blockUI = function (content, options) {

        var modal = UI.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(content || '<div class="uk-text-center">...</div>') + '</div>'].join(""), UI.$.extend({ bgclose: false, keyboard: false, modal: false }, options));

        modal.content = modal.element.find('.uk-modal-content:first');

        return modal.show();
    };

    UI.modal.labels = {
        Ok: 'Ok',
        Cancel: 'Cancel'
    };

    // helper functions
    function setContent(content, modal) {

        if (!modal) return;

        if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {

            // convert DOM object to a jQuery object
            content = content instanceof jQuery ? content : UI.$(content);

            if (content.parent().length) {
                modal.persist = content;
                modal.persist.data('modalPersistParent', content.parent());
            }
        } else if (typeof content === 'string' || typeof content === 'number') {
            // just insert the data as innerHTML
            content = UI.$('<div></div>').html(content);
        } else {
            // unsupported data type!
            content = UI.$('<div></div>').html('UIkit2.modal Error: Unsupported data type: ' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)));
        }

        content.appendTo(modal.element.find('.uk-modal-dialog'));

        return modal;
    }
})(UIkit2);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  function i(i, e) {
    return e ? ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? (i = i instanceof jQuery ? i : t.$(i), i.parent().length && (e.persist = i, e.persist.data("modalPersistParent", i.parent()))) : i = "string" == typeof i || "number" == typeof i ? t.$("<div></div>").html(i) : t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: " + (typeof i === "undefined" ? "undefined" : _typeof(i))), i.appendTo(e.element.find(".uk-modal-dialog")), e) : void 0;
  }var e,
      o = !1,
      n = 0,
      s = t.$html;t.$win.on("resize orientationchange", t.Utils.debounce(function () {
    t.$(".uk-modal.uk-open").each(function () {
      return t.$(this).data("modal") && t.$(this).data("modal").resize();
    });
  }, 150)), t.component("modal", { defaults: { keyboard: !0, bgclose: !0, minScrollHeight: 150, center: !1, modal: !0 }, scrollable: !1, transition: !1, hasTransitioned: !0, init: function init() {
      if (e || (e = t.$("body")), this.element.length) {
        var i = this;this.paddingdir = "padding-" + ("left" == t.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function (t) {
          t.preventDefault(), i.hide();
        }).on("click", function (e) {
          var o = t.$(e.target);o[0] == i.element[0] && i.options.bgclose && i.hide();
        }), t.domObserve(this.element, function () {
          i.resize();
        });
      }
    }, toggle: function toggle() {
      return this[this.isActive() ? "hide" : "show"]();
    }, show: function show() {
      if (this.element.length) {
        var i = this;if (!this.isActive()) return this.options.modal && o && o.hide(!0), this.element.removeClass("uk-open").show(), this.resize(!0), this.options.modal && (o = this), this.active = !0, n++, t.support.transition ? (this.hasTransitioned = !1, this.element.one(t.support.transition.end, function () {
          i.hasTransitioned = !0, t.Utils.focus(i.dialog, "a[href]");
        }).addClass("uk-open")) : (this.element.addClass("uk-open"), t.Utils.focus(this.dialog, "a[href]")), s.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), t.Utils.checkDisplay(this.dialog, !0), this;
      }
    }, hide: function hide(i) {
      if (!i && t.support.transition && this.hasTransitioned) {
        var e = this;this.one(t.support.transition.end, function () {
          e._hide();
        }).removeClass("uk-open");
      } else this._hide();return this;
    }, resize: function resize(t) {
      if (this.isActive() || t) {
        var i = e.width();if (this.scrollbarwidth = window.innerWidth - i, e.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
          var o = this.dialog.outerHeight(),
              n = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);o + n < window.innerHeight ? this.dialog.css({ top: window.innerHeight / 2 - o / 2 - n }) : this.dialog.css({ top: "" });
        }
      }
    }, updateScrollable: function updateScrollable() {
      var t = this.dialog.find(".uk-overflow-container:visible:first");if (t.length) {
        t.css("height", 0);var i = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
            e = this.dialog.outerHeight(),
            o = window.innerHeight,
            n = o - 2 * (20 > i ? 20 : i) - e;return t.css({ maxHeight: n < this.options.minScrollHeight ? "" : n, height: "" }), !0;
      }return !1;
    }, _hide: function _hide() {
      this.active = !1, n > 0 ? n-- : n = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), n || (s.removeClass("uk-modal-page"), e.css(this.paddingdir, "")), o === this && (o = !1), this.trigger("hide.uk.modal");
    }, isActive: function isActive() {
      return this.element.hasClass("uk-open");
    } }), t.component("modalTrigger", { boot: function boot() {
      t.$html.on("click.modal.uikit", "[data-uk-modal]", function (i) {
        var e = t.$(this);if (e.is("a") && i.preventDefault(), !e.data("modalTrigger")) {
          var o = t.modalTrigger(e, t.Utils.options(e.attr("data-uk-modal")));o.show();
        }
      }), t.$html.on("keydown.modal.uikit", function (t) {
        o && 27 === t.keyCode && o.options.keyboard && (t.preventDefault(), o.hide());
      });
    }, init: function init() {
      var i = this;this.options = t.$.extend({ target: i.element.is("a") ? i.element.attr("href") : !1 }, this.options), this.modal = t.modal(this.options.target, this.options), this.on("click", function (t) {
        t.preventDefault(), i.show();
      }), this.proxy(this.modal, "show hide isActive");
    } }), t.modal.dialog = function (e, o) {
    var n = t.modal(t.$(t.modal.dialog.template).appendTo("body"), o);return n.on("hide.uk.modal", function () {
      n.persist && (n.persist.appendTo(n.persist.data("modalPersistParent")), n.persist = !1), n.element.remove();
    }), i(e, n), n;
  }, t.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', t.modal.alert = function (i, e) {
    e = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, e);var o = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + e.labels.Ok + "</button></div>"].join(""), e);return o.on("show.uk.modal", function () {
      setTimeout(function () {
        o.element.find("button:first").focus();
      }, 50);
    }), o.show();
  }, t.modal.confirm = function (i, e, o) {
    var n = arguments.length > 1 && arguments[arguments.length - 1] ? arguments[arguments.length - 1] : {};e = t.$.isFunction(e) ? e : function () {}, o = t.$.isFunction(o) ? o : function () {}, n = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, t.$.isFunction(n) ? {} : n);var s = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">' + n.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + n.labels.Ok + "</button></div>"].join(""), n);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function () {
      t.$(this).is(".js-modal-confirm") ? e() : o(), s.hide();
    }), s.on("show.uk.modal", function () {
      setTimeout(function () {
        s.element.find(".js-modal-confirm").focus();
      }, 50);
    }), s.show();
  }, t.modal.prompt = function (i, e, o, n) {
    o = t.$.isFunction(o) ? o : function () {}, n = t.$.extend(!0, { bgclose: !1, keyboard: !1, modal: !1, labels: t.modal.labels }, n);var s = t.modal.dialog([i ? '<div class="uk-modal-content uk-form">' + String(i) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + n.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + n.labels.Ok + "</button></div>"].join(""), n),
        a = s.element.find("input[type='text']").val(e || "").on("keyup", function (t) {
      13 == t.keyCode && s.element.find(".js-modal-ok").trigger("click");
    });return s.element.find(".js-modal-ok").on("click", function () {
      o(a.val()) !== !1 && s.hide();
    }), s.show();
  }, t.modal.blockUI = function (i, e) {
    var o = t.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i || '<div class="uk-text-center">...</div>') + "</div>"].join(""), t.$.extend({ bgclose: !1, keyboard: !1, modal: !1 }, e));return o.content = o.element.find(".uk-modal-content:first"), o.show();
  }, t.modal.labels = { Ok: "Ok", Cancel: "Cancel" };
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    UI.component('nav', {

        defaults: {
            toggle: '>li.uk-parent > a[href="#"]',
            lists: '>li.uk-parent > ul',
            multiple: false
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-nav]', context).each(function () {
                    var nav = UI.$(this);

                    if (!nav.data('nav')) {
                        var obj = UI.nav(nav, UI.Utils.options(nav.attr('data-uk-nav')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.on('click.uk.nav', this.options.toggle, function (e) {
                e.preventDefault();
                var ele = UI.$(this);
                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
            });

            this.update();

            UI.domObserve(this.element, function (e) {
                if ($this.element.find($this.options.lists).not('[role]').length) {
                    $this.update();
                }
            });
        },

        update: function update() {

            var $this = this;

            this.find(this.options.lists).each(function () {

                var $ele = UI.$(this).attr('role', 'menu'),
                    parent = $ele.closest('li'),
                    active = parent.hasClass("uk-active");

                if (!parent.data('list-container')) {
                    $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
                    parent.data('list-container', $ele.parent()[active ? 'removeClass' : 'addClass']('uk-hidden'));
                }

                // Init ARIA
                parent.attr('aria-expanded', parent.hasClass("uk-open"));

                if (active) $this.open(parent, true);
            });
        },

        open: function open(li, noanimation) {

            var $this = this,
                element = this.element,
                $li = UI.$(li),
                $container = $li.data('list-container');

            if (!this.options.multiple) {

                element.children('.uk-open').not(li).each(function () {

                    var ele = UI.$(this);

                    if (ele.data('list-container')) {
                        ele.data('list-container').stop().animate({ height: 0 }, function () {
                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
                        });
                    }
                });
            }

            $li.toggleClass('uk-open');

            // Update ARIA
            $li.attr('aria-expanded', $li.hasClass('uk-open'));

            if ($container) {

                if ($li.hasClass('uk-open')) {
                    $container.removeClass('uk-hidden');
                }

                if (noanimation) {

                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

                    if (!$li.hasClass('uk-open')) {
                        $container.addClass('uk-hidden');
                    }

                    this.trigger('display.uk.check');
                } else {

                    $container.stop().animate({
                        height: $li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0
                    }, function () {

                        if (!$li.hasClass('uk-open')) {
                            $container.addClass('uk-hidden');
                        } else {
                            $container.css('height', '');
                        }

                        $this.trigger('display.uk.check');
                    });
                }
            }
        }
    });

    // helper

    function getHeight(ele) {

        var $ele = UI.$(ele),
            height = 'auto';

        if ($ele.is(':visible')) {
            height = $ele.outerHeight();
        } else {

            var tmp = {
                position: $ele.css('position'),
                visibility: $ele.css('visibility'),
                display: $ele.css('display')
            };

            height = $ele.css({ position: 'absolute', visibility: 'hidden', display: 'block' }).outerHeight();

            $ele.css(tmp); // reset element
        }

        return height;
    }
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  function i(i) {
    var s = t.$(i),
        e = "auto";if (s.is(":visible")) e = s.outerHeight();else {
      var a = { position: s.css("position"), visibility: s.css("visibility"), display: s.css("display") };e = s.css({ position: "absolute", visibility: "hidden", display: "block" }).outerHeight(), s.css(a);
    }return e;
  }t.component("nav", { defaults: { toggle: '>li.uk-parent > a[href="#"]', lists: ">li.uk-parent > ul", multiple: !1 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-nav]", i).each(function () {
          var i = t.$(this);if (!i.data("nav")) {
            t.nav(i, t.Utils.options(i.attr("data-uk-nav")));
          }
        });
      });
    }, init: function init() {
      var i = this;this.on("click.uk.nav", this.options.toggle, function (s) {
        s.preventDefault();var e = t.$(this);i.open(e.parent()[0] == i.element[0] ? e : e.parent("li"));
      }), this.update(), t.domObserve(this.element, function () {
        i.element.find(i.options.lists).not("[role]").length && i.update();
      });
    }, update: function update() {
      var i = this;this.find(this.options.lists).each(function () {
        var s = t.$(this).attr("role", "menu"),
            e = s.closest("li"),
            a = e.hasClass("uk-active");e.data("list-container") || (s.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), e.data("list-container", s.parent()[a ? "removeClass" : "addClass"]("uk-hidden"))), e.attr("aria-expanded", e.hasClass("uk-open")), a && i.open(e, !0);
      });
    }, open: function open(s, e) {
      var a = this,
          n = this.element,
          o = t.$(s),
          l = o.data("list-container");this.options.multiple || n.children(".uk-open").not(s).each(function () {
        var i = t.$(this);i.data("list-container") && i.data("list-container").stop().animate({ height: 0 }, function () {
          t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden");
        });
      }), o.toggleClass("uk-open"), o.attr("aria-expanded", o.hasClass("uk-open")), l && (o.hasClass("uk-open") && l.removeClass("uk-hidden"), e ? (l.stop().height(o.hasClass("uk-open") ? "auto" : 0), o.hasClass("uk-open") || l.addClass("uk-hidden"), this.trigger("display.uk.check")) : l.stop().animate({ height: o.hasClass("uk-open") ? i(l.find("ul:first")) : 0 }, function () {
        o.hasClass("uk-open") ? l.css("height", "") : l.addClass("uk-hidden"), a.trigger("display.uk.check");
      }));
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var scrollpos = { x: window.scrollX, y: window.scrollY },
        $win = UI.$win,
        $doc = UI.$doc,
        $html = UI.$html,
        Offcanvas = {

        show: function show(element, options) {

            element = UI.$(element);

            if (!element.length) return;

            options = UI.$.extend({ mode: 'push' }, options);

            var $body = UI.$('body'),
                bar = element.find('.uk-offcanvas-bar:first'),
                rtl = UI.langdirection == 'right',
                flip = bar.hasClass('uk-offcanvas-bar-flip') ? -1 : 1,
                dir = flip * (rtl ? -1 : 1),
                scrollbarwidth = window.innerWidth - $body.width();

            scrollpos = { x: window.pageXOffset, y: window.pageYOffset };

            bar.attr('mode', options.mode);
            element.addClass('uk-active');

            $body.css({ width: window.innerWidth - scrollbarwidth, height: window.innerHeight }).addClass('uk-offcanvas-page');

            if (options.mode == 'push' || options.mode == 'reveal') {
                $body.css(rtl ? 'margin-right' : 'margin-left', (rtl ? -1 : 1) * (bar.outerWidth() * dir));
            }

            if (options.mode == 'reveal') {
                bar.css('clip', 'rect(0, ' + bar.outerWidth() + 'px, 100vh, 0)');
            }

            $html.css('margin-top', scrollpos.y * -1).width(); // .width() - force redraw


            bar.addClass('uk-offcanvas-bar-show');

            this._initElement(element);

            bar.trigger('show.uk.offcanvas', [element, bar]);

            // Update ARIA
            element.attr('aria-hidden', 'false');
        },

        hide: function hide(force) {

            var $body = UI.$('body'),
                panel = UI.$('.uk-offcanvas.uk-active'),
                rtl = UI.langdirection == 'right',
                bar = panel.find('.uk-offcanvas-bar:first'),
                finalize = function finalize() {
                $body.removeClass('uk-offcanvas-page').css({ width: '', height: '', marginLeft: '', marginRight: '' });
                panel.removeClass('uk-active');

                bar.removeClass('uk-offcanvas-bar-show');
                $html.css('margin-top', '');
                window.scrollTo(scrollpos.x, scrollpos.y);
                bar.trigger('hide.uk.offcanvas', [panel, bar]);

                // Update ARIA
                panel.attr('aria-hidden', 'true');
            };

            if (!panel.length) return;
            if (bar.attr('mode') == 'none') force = true;

            if (UI.support.transition && !force) {

                $body.one(UI.support.transition.end, function () {
                    finalize();
                }).css(rtl ? 'margin-right' : 'margin-left', '');

                if (bar.attr('mode') == 'reveal') {
                    bar.css('clip', '');
                }

                setTimeout(function () {
                    bar.removeClass('uk-offcanvas-bar-show');
                }, 0);
            } else {
                finalize();
            }
        },

        _initElement: function _initElement(element) {

            if (element.data('OffcanvasInit')) return;

            element.on('click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas', function (e) {

                var target = UI.$(e.target);

                if (!e.type.match(/swipe/)) {

                    if (!target.hasClass('uk-offcanvas-close')) {
                        if (target.hasClass('uk-offcanvas-bar')) return;
                        if (target.parents('.uk-offcanvas-bar:first').length) return;
                    }
                }

                e.stopImmediatePropagation();
                Offcanvas.hide();
            });

            element.on('click', 'a[href*="#"]', function (e) {

                var link = UI.$(this),
                    href = link.attr('href');

                if (href == '#') {
                    return;
                }

                UI.$doc.one('hide.uk.offcanvas', function () {

                    var target;

                    try {
                        target = UI.$(link[0].hash);
                    } catch (e) {
                        target = '';
                    }

                    if (!target.length) {
                        target = UI.$('[name="' + link[0].hash.replace('#', '') + '"]');
                    }

                    if (target.length && UI.Utils.scrollToElement) {
                        UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
                    } else {
                        window.location.href = href;
                    }
                });

                Offcanvas.hide();
            });

            element.data('OffcanvasInit', true);
        }
    };

    UI.component('offcanvasTrigger', {

        boot: function boot() {

            // init code
            $html.on('click.offcanvas.uikit', '[data-uk-offcanvas]', function (e) {

                e.preventDefault();

                var ele = UI.$(this);

                if (!ele.data('offcanvasTrigger')) {
                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr('data-uk-offcanvas')));
                    ele.trigger("click");
                }
            });

            $html.on('keydown.uk.offcanvas', function (e) {

                if (e.keyCode === 27) {
                    // ESC
                    Offcanvas.hide();
                }
            });
        },

        init: function init() {

            var $this = this;

            this.options = UI.$.extend({
                target: $this.element.is('a') ? $this.element.attr('href') : false,
                mode: 'push'
            }, this.options);

            this.on('click', function (e) {
                e.preventDefault();
                Offcanvas.show($this.options.target, $this.options);
            });
        }
    });

    UI.offcanvas = Offcanvas;
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (a) {
  "use strict";
  var t = { x: window.scrollX, y: window.scrollY },
      n = (a.$win, a.$doc, a.$html),
      i = { show: function show(i, o) {
      if (i = a.$(i), i.length) {
        o = a.$.extend({ mode: "push" }, o);var e = a.$("body"),
            s = i.find(".uk-offcanvas-bar:first"),
            r = "right" == a.langdirection,
            f = s.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
            c = f * (r ? -1 : 1),
            h = window.innerWidth - e.width();t = { x: window.pageXOffset, y: window.pageYOffset }, s.attr("mode", o.mode), i.addClass("uk-active"), e.css({ width: window.innerWidth - h, height: window.innerHeight }).addClass("uk-offcanvas-page"), ("push" == o.mode || "reveal" == o.mode) && e.css(r ? "margin-right" : "margin-left", (r ? -1 : 1) * s.outerWidth() * c), "reveal" == o.mode && s.css("clip", "rect(0, " + s.outerWidth() + "px, 100vh, 0)"), n.css("margin-top", -1 * t.y).width(), s.addClass("uk-offcanvas-bar-show"), this._initElement(i), s.trigger("show.uk.offcanvas", [i, s]), i.attr("aria-hidden", "false");
      }
    }, hide: function hide(i) {
      var o = a.$("body"),
          e = a.$(".uk-offcanvas.uk-active"),
          s = "right" == a.langdirection,
          r = e.find(".uk-offcanvas-bar:first"),
          f = function f() {
        o.removeClass("uk-offcanvas-page").css({ width: "", height: "", marginLeft: "", marginRight: "" }), e.removeClass("uk-active"), r.removeClass("uk-offcanvas-bar-show"), n.css("margin-top", ""), window.scrollTo(t.x, t.y), r.trigger("hide.uk.offcanvas", [e, r]), e.attr("aria-hidden", "true");
      };e.length && ("none" == r.attr("mode") && (i = !0), a.support.transition && !i ? (o.one(a.support.transition.end, function () {
        f();
      }).css(s ? "margin-right" : "margin-left", ""), "reveal" == r.attr("mode") && r.css("clip", ""), setTimeout(function () {
        r.removeClass("uk-offcanvas-bar-show");
      }, 0)) : f());
    }, _initElement: function _initElement(t) {
      t.data("OffcanvasInit") || (t.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function (t) {
        var n = a.$(t.target);if (!t.type.match(/swipe/) && !n.hasClass("uk-offcanvas-close")) {
          if (n.hasClass("uk-offcanvas-bar")) return;if (n.parents(".uk-offcanvas-bar:first").length) return;
        }t.stopImmediatePropagation(), i.hide();
      }), t.on("click", 'a[href*="#"]', function () {
        var t = a.$(this),
            n = t.attr("href");"#" != n && (a.$doc.one("hide.uk.offcanvas", function () {
          var i;try {
            i = a.$(t[0].hash);
          } catch (o) {
            i = "";
          }i.length || (i = a.$('[name="' + t[0].hash.replace("#", "") + '"]')), i.length && a.Utils.scrollToElement ? a.Utils.scrollToElement(i, a.Utils.options(t.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = n;
        }), i.hide());
      }), t.data("OffcanvasInit", !0));
    } };a.component("offcanvasTrigger", { boot: function boot() {
      n.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function (t) {
        t.preventDefault();var n = a.$(this);if (!n.data("offcanvasTrigger")) {
          {
            a.offcanvasTrigger(n, a.Utils.options(n.attr("data-uk-offcanvas")));
          }n.trigger("click");
        }
      }), n.on("keydown.uk.offcanvas", function (a) {
        27 === a.keyCode && i.hide();
      });
    }, init: function init() {
      var t = this;this.options = a.$.extend({ target: t.element.is("a") ? t.element.attr("href") : !1, mode: "push" }, this.options), this.on("click", function (a) {
        a.preventDefault(), i.show(t.options.target, t.options);
      });
    } }), a.offcanvas = i;
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var $win = UI.$win,
        $doc = UI.$doc,
        scrollspies = [],
        checkScrollSpy = function checkScrollSpy() {
        for (var i = 0; i < scrollspies.length; i++) {
            window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
        }
    };

    UI.component('scrollspy', {

        defaults: {
            target: false,
            cls: 'uk-scrollspy-inview',
            initcls: 'uk-scrollspy-init-inview',
            topoffset: 0,
            leftoffset: 0,
            repeat: false,
            delay: 0
        },

        boot: function boot() {

            // listen to scroll and resize
            $doc.on('scrolling.uk.document', checkScrollSpy);
            $win.on('load resize orientationchange', UI.Utils.debounce(checkScrollSpy, 50));

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-scrollspy]', context).each(function () {

                    var element = UI.$(this);

                    if (!element.data('scrollspy')) {
                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr('data-uk-scrollspy')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this,
                inviewstate,
                initinview,
                togglecls = this.options.cls.split(/,/),
                fn = function fn() {

                var elements = $this.options.target ? $this.element.find($this.options.target) : $this.element,
                    delayIdx = elements.length === 1 ? 1 : 0,
                    toggleclsIdx = 0;

                elements.each(function (idx) {

                    var element = UI.$(this),
                        inviewstate = element.data('inviewstate'),
                        inview = UI.Utils.isInView(element, $this.options),
                        toggle = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

                        if (!initinview) {
                            element.addClass($this.options.initcls);
                            $this.offset = element.offset();
                            initinview = true;

                            element.trigger('init.uk.scrollspy');
                        }

                        element.data('scrollspy-idle', setTimeout(function () {

                            element.addClass('uk-scrollspy-inview').toggleClass(toggle).width();
                            element.trigger('inview.uk.scrollspy');

                            element.data('scrollspy-idle', false);
                            element.data('inviewstate', true);
                        }, $this.options.delay * delayIdx));

                        delayIdx++;
                    }

                    if (!inview && inviewstate && $this.options.repeat) {

                        if (element.data('scrollspy-idle')) {
                            clearTimeout(element.data('scrollspy-idle'));
                            element.data('scrollspy-idle', false);
                        }

                        element.removeClass('uk-scrollspy-inview').toggleClass(toggle);
                        element.data('inviewstate', false);

                        element.trigger('outview.uk.scrollspy');
                    }

                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? toggleclsIdx + 1 : 0;
                });
            };

            fn();

            this.check = fn;

            scrollspies.push(this);
        }
    });

    var scrollspynavs = [],
        checkScrollSpyNavs = function checkScrollSpyNavs() {
        for (var i = 0; i < scrollspynavs.length; i++) {
            window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
        }
    };

    UI.component('scrollspynav', {

        defaults: {
            cls: 'uk-active',
            closest: false,
            topoffset: 0,
            leftoffset: 0,
            smoothscroll: false
        },

        boot: function boot() {

            // listen to scroll and resize
            $doc.on('scrolling.uk.document', checkScrollSpyNavs);
            $win.on('resize orientationchange', UI.Utils.debounce(checkScrollSpyNavs, 50));

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-scrollspy-nav]', context).each(function () {

                    var element = UI.$(this);

                    if (!element.data('scrollspynav')) {
                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr('data-uk-scrollspy-nav')));
                    }
                });
            });
        },

        init: function init() {

            var ids = [],
                links = this.find("a[href^='#']").each(function () {
                if (this.getAttribute('href').trim() !== '#') ids.push(this.getAttribute('href'));
            }),
                targets = UI.$(ids.join(",")),
                clsActive = this.options.cls,
                clsClosest = this.options.closest || this.options.closest;

            var $this = this,
                inviews,
                fn = function fn() {

                inviews = [];

                for (var i = 0; i < targets.length; i++) {
                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
                        inviews.push(targets.eq(i));
                    }
                }

                if (inviews.length) {

                    var navitems,
                        scrollTop = $win.scrollTop(),
                        target = function () {
                        for (var i = 0; i < inviews.length; i++) {
                            if (inviews[i].offset().top - $this.options.topoffset >= scrollTop) {
                                return inviews[i];
                            }
                        }
                    }();

                    if (!target) return;

                    if ($this.options.closest) {
                        links.blur().closest(clsClosest).removeClass(clsActive);
                        navitems = links.filter("a[href='#" + target.attr('id') + "']").closest(clsClosest).addClass(clsActive);
                    } else {
                        navitems = links.removeClass(clsActive).filter("a[href='#" + target.attr("id") + "']").addClass(clsActive);
                    }

                    $this.element.trigger('inview.uk.scrollspynav', [target, navitems]);
                }
            };

            if (this.options.smoothscroll && UI.smoothScroll) {
                links.each(function () {
                    UI.smoothScroll(this, $this.options.smoothscroll);
                });
            }

            fn();

            this.element.data('scrollspynav', this);

            this.check = fn;
            scrollspynavs.push(this);
        }
    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  var s = t.$win,
      o = t.$doc,
      i = [],
      e = function e() {
    for (var t = 0; t < i.length; t++) {
      window.requestAnimationFrame.apply(window, [i[t].check]);
    }
  };t.component("scrollspy", { defaults: { target: !1, cls: "uk-scrollspy-inview", initcls: "uk-scrollspy-init-inview", topoffset: 0, leftoffset: 0, repeat: !1, delay: 0 }, boot: function boot() {
      o.on("scrolling.uk.document", e), s.on("load resize orientationchange", t.Utils.debounce(e, 50)), t.ready(function (s) {
        t.$("[data-uk-scrollspy]", s).each(function () {
          var s = t.$(this);if (!s.data("scrollspy")) {
            t.scrollspy(s, t.Utils.options(s.attr("data-uk-scrollspy")));
          }
        });
      });
    }, init: function init() {
      var s,
          o = this,
          e = this.options.cls.split(/,/),
          l = function l() {
        var i = o.options.target ? o.element.find(o.options.target) : o.element,
            l = 1 === i.length ? 1 : 0,
            n = 0;i.each(function () {
          var i = t.$(this),
              a = i.data("inviewstate"),
              r = t.Utils.isInView(i, o.options),
              c = i.data("ukScrollspyCls") || e[n].trim();!r || a || i.data("scrollspy-idle") || (s || (i.addClass(o.options.initcls), o.offset = i.offset(), s = !0, i.trigger("init.uk.scrollspy")), i.data("scrollspy-idle", setTimeout(function () {
            i.addClass("uk-scrollspy-inview").toggleClass(c).width(), i.trigger("inview.uk.scrollspy"), i.data("scrollspy-idle", !1), i.data("inviewstate", !0);
          }, o.options.delay * l)), l++), !r && a && o.options.repeat && (i.data("scrollspy-idle") && (clearTimeout(i.data("scrollspy-idle")), i.data("scrollspy-idle", !1)), i.removeClass("uk-scrollspy-inview").toggleClass(c), i.data("inviewstate", !1), i.trigger("outview.uk.scrollspy")), n = e[n + 1] ? n + 1 : 0;
        });
      };l(), this.check = l, i.push(this);
    } });var l = [],
      n = function n() {
    for (var t = 0; t < l.length; t++) {
      window.requestAnimationFrame.apply(window, [l[t].check]);
    }
  };t.component("scrollspynav", { defaults: { cls: "uk-active", closest: !1, topoffset: 0, leftoffset: 0, smoothscroll: !1 }, boot: function boot() {
      o.on("scrolling.uk.document", n), s.on("resize orientationchange", t.Utils.debounce(n, 50)), t.ready(function (s) {
        t.$("[data-uk-scrollspy-nav]", s).each(function () {
          var s = t.$(this);if (!s.data("scrollspynav")) {
            t.scrollspynav(s, t.Utils.options(s.attr("data-uk-scrollspy-nav")));
          }
        });
      });
    }, init: function init() {
      var o,
          i = [],
          e = this.find("a[href^='#']").each(function () {
        "#" !== this.getAttribute("href").trim() && i.push(this.getAttribute("href"));
      }),
          n = t.$(i.join(",")),
          a = this.options.cls,
          r = this.options.closest || this.options.closest,
          c = this,
          p = function p() {
        o = [];for (var i = 0; i < n.length; i++) {
          t.Utils.isInView(n.eq(i), c.options) && o.push(n.eq(i));
        }if (o.length) {
          var l,
              p = s.scrollTop(),
              f = function () {
            for (var t = 0; t < o.length; t++) {
              if (o[t].offset().top - c.options.topoffset >= p) return o[t];
            }
          }();if (!f) return;c.options.closest ? (e.blur().closest(r).removeClass(a), l = e.filter("a[href='#" + f.attr("id") + "']").closest(r).addClass(a)) : l = e.removeClass(a).filter("a[href='#" + f.attr("id") + "']").addClass(a), c.element.trigger("inview.uk.scrollspynav", [f, l]);
        }
      };this.options.smoothscroll && t.smoothScroll && e.each(function () {
        t.smoothScroll(this, c.options.smoothscroll);
      }), p(), this.element.data("scrollspynav", this), this.check = p, l.push(this);
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    UI.component('smoothScroll', {

        boot: function boot() {

            // init code
            UI.$html.on('click.smooth-scroll.uikit', '[data-uk-smooth-scroll]', function (e) {
                var ele = UI.$(this);

                if (!ele.data('smoothScroll')) {
                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr('data-uk-smooth-scroll')));
                    ele.trigger('click');
                }

                return false;
            });
        },

        init: function init() {

            var $this = this;

            this.on('click', function (e) {
                e.preventDefault();
                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$('body'), $this.options);
            });
        }
    });

    function scrollToElement(ele, options) {

        options = UI.$.extend({
            duration: 1000,
            transition: 'easeOutExpo',
            offset: 0,
            complete: function complete() {}
        }, options);

        // get / set parameters
        var target = ele.offset().top - options.offset,
            docheight = UI.$doc.height(),
            winheight = window.innerHeight;

        if (target + winheight > docheight) {
            target = docheight - winheight;
        }

        // animate to target, fire callback when done
        UI.$('html,body').stop().animate({ scrollTop: target }, options.duration, options.transition).promise().done(options.complete);
    }

    UI.Utils.scrollToElement = scrollToElement;

    if (!UI.$.easing.easeOutExpo) {
        UI.$.easing.easeOutExpo = function (x, t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };
    }
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  function o(o, i) {
    i = t.$.extend({ duration: 1e3, transition: "easeOutExpo", offset: 0, complete: function complete() {} }, i);var n = o.offset().top - i.offset,
        s = t.$doc.height(),
        e = window.innerHeight;n + e > s && (n = s - e), t.$("html,body").stop().animate({ scrollTop: n }, i.duration, i.transition).promise().done(i.complete);
  }t.component("smoothScroll", { boot: function boot() {
      t.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function () {
        var o = t.$(this);if (!o.data("smoothScroll")) {
          {
            t.smoothScroll(o, t.Utils.options(o.attr("data-uk-smooth-scroll")));
          }o.trigger("click");
        }return !1;
      });
    }, init: function init() {
      var i = this;this.on("click", function (n) {
        n.preventDefault(), o(t.$(this.hash).length ? t.$(this.hash) : t.$("body"), i.options);
      });
    } }), t.Utils.scrollToElement = o, t.$.easing.easeOutExpo || (t.$.easing.easeOutExpo = function (t, o, i, n, s) {
    return o == s ? i + n : n * (-Math.pow(2, -10 * o / s) + 1) + i;
  });
}(UIkit2);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var Animations;

    UI.component('switcher', {

        defaults: {
            connect: false,
            toggle: '>*',
            active: 0,
            animation: false,
            duration: 200,
            swiping: true
        },

        animating: false,

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-switcher]', context).each(function () {
                    var switcher = UI.$(this);

                    if (!switcher.data('switcher')) {
                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr('data-uk-switcher')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.on('click.uk.switcher', this.options.toggle, function (e) {
                e.preventDefault();
                $this.show(this);
            });

            if (!this.options.connect) {
                return;
            }

            this.connect = UI.$(this.options.connect);

            if (!this.connect.length) {
                return;
            }

            this.connect.on('click.uk.switcher', '[data-uk-switcher-item]', function (e) {

                e.preventDefault();

                var item = UI.$(this).attr('data-uk-switcher-item');

                if ($this.index == item) return;

                switch (item) {
                    case 'next':
                    case 'previous':
                        $this.show($this.index + (item == 'next' ? 1 : -1));
                        break;
                    default:
                        $this.show(parseInt(item, 10));
                }
            });

            if (this.options.swiping) {

                this.connect.on('swipeRight swipeLeft', function (e) {
                    e.preventDefault();
                    if (!window.getSelection().toString()) {
                        $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
                    }
                });
            }

            this.update();
        },

        update: function update() {

            this.connect.children().removeClass('uk-active').attr('aria-hidden', 'true');

            var toggles = this.find(this.options.toggle),
                active = toggles.filter('.uk-active');

            if (active.length) {
                this.show(active, false);
            } else {

                if (this.options.active === false) return;

                active = toggles.eq(this.options.active);
                this.show(active.length ? active : toggles.eq(0), false);
            }

            // Init ARIA for toggles
            toggles.not(active).attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');
        },

        show: function show(tab, animate) {

            if (this.animating) {
                return;
            }

            var toggles = this.find(this.options.toggle);

            if (isNaN(tab)) {
                tab = UI.$(tab);
            } else {
                tab = tab < 0 ? toggles.length - 1 : tab;
                tab = toggles.eq(toggles[tab] ? tab : 0);
            }

            var $this = this,
                active = UI.$(tab),
                animation = Animations[this.options.animation] || function (current, next) {

                if (!$this.options.animation) {
                    return Animations.none.apply($this);
                }

                var anim = $this.options.animation.split(',');

                if (anim.length == 1) {
                    anim[1] = anim[0];
                }

                anim[0] = anim[0].trim();
                anim[1] = anim[1].trim();

                return coreAnimation.apply($this, [anim, current, next]);
            };

            if (animate === false || !UI.support.animation) {
                animation = Animations.none;
            }

            if (active.hasClass("uk-disabled")) return;

            // Update ARIA for Toggles
            toggles.attr('aria-expanded', 'false');
            active.attr('aria-expanded', 'true');

            toggles.filter(".uk-active").removeClass("uk-active");
            active.addClass("uk-active");

            if (this.options.connect && this.connect.length) {

                this.index = this.find(this.options.toggle).index(active);

                if (this.index == -1) {
                    this.index = 0;
                }

                this.connect.each(function () {

                    var container = UI.$(this),
                        children = UI.$(container.children()),
                        current = UI.$(children.filter('.uk-active')),
                        next = UI.$(children.eq($this.index));

                    $this.animating = true;

                    animation.apply($this, [current, next]).then(function () {

                        current.removeClass("uk-active");
                        next.addClass("uk-active");

                        // Update ARIA for connect
                        current.attr('aria-hidden', 'true');
                        next.attr('aria-hidden', 'false');

                        UI.Utils.checkDisplay(next, true);

                        $this.animating = false;
                    });
                });
            }

            this.trigger("show.uk.switcher", [active]);
        }
    });

    Animations = {

        'none': function none() {
            var d = UI.$.Deferred();
            d.resolve();
            return d.promise();
        },

        'fade': function fade(current, next) {
            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
        },

        'slide-bottom': function slideBottom(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
        },

        'slide-top': function slideTop(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
        },

        'slide-vertical': function slideVertical(current, next, dir) {

            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];

            if (current && current.index() > next.index()) {
                anim.reverse();
            }

            return coreAnimation.apply(this, [anim, current, next]);
        },

        'slide-left': function slideLeft(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
        },

        'slide-right': function slideRight(current, next) {
            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
        },

        'slide-horizontal': function slideHorizontal(current, next, dir) {

            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];

            if (current && current.index() > next.index()) {
                anim.reverse();
            }

            return coreAnimation.apply(this, [anim, current, next]);
        },

        'scale': function scale(current, next) {
            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
        }
    };

    UI.switcher.animations = Animations;

    // helpers

    function coreAnimation(cls, current, next) {

        var d = UI.$.Deferred(),
            clsIn = cls,
            clsOut = cls,
            release;

        if (next[0] === current[0]) {
            d.resolve();
            return d.promise();
        }

        if ((typeof cls === 'undefined' ? 'undefined' : _typeof(cls)) == 'object') {
            clsIn = cls[0];
            clsOut = cls[1] || cls[0];
        }

        UI.$body.css('overflow-x', 'hidden'); // fix scroll jumping in iOS

        release = function release() {

            if (current) current.hide().removeClass('uk-active ' + clsOut + ' uk-animation-reverse');

            next.addClass(clsIn).one(UI.support.animation.end, function () {

                setTimeout(function () {
                    next.removeClass('' + clsIn + '').css({ opacity: '', display: '' });
                }, 0);

                d.resolve();

                UI.$body.css('overflow-x', '');

                if (current) current.css({ opacity: '', display: '' });
            }.bind(this)).show();
        };

        next.css('animation-duration', this.options.duration + 'ms');

        if (current && current.length) {

            current.css('animation-duration', this.options.duration + 'ms');

            current.css('display', 'none').addClass(clsOut + ' uk-animation-reverse').one(UI.support.animation.end, function () {
                release();
            }.bind(this)).css('display', '');
        } else {
            next.addClass('uk-active');
            release();
        }

        return d.promise();
    }
})(UIkit2);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  function i(i, n, e) {
    var s,
        a = t.$.Deferred(),
        o = i,
        r = i;return e[0] === n[0] ? (a.resolve(), a.promise()) : ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (o = i[0], r = i[1] || i[0]), t.$body.css("overflow-x", "hidden"), s = function s() {
      n && n.hide().removeClass("uk-active " + r + " uk-animation-reverse"), e.addClass(o).one(t.support.animation.end, function () {
        setTimeout(function () {
          e.removeClass("" + o).css({ opacity: "", display: "" });
        }, 0), a.resolve(), t.$body.css("overflow-x", ""), n && n.css({ opacity: "", display: "" });
      }.bind(this)).show();
    }, e.css("animation-duration", this.options.duration + "ms"), n && n.length ? (n.css("animation-duration", this.options.duration + "ms"), n.css("display", "none").addClass(r + " uk-animation-reverse").one(t.support.animation.end, function () {
      s();
    }.bind(this)).css("display", "")) : (e.addClass("uk-active"), s()), a.promise());
  }var n;t.component("switcher", { defaults: { connect: !1, toggle: ">*", active: 0, animation: !1, duration: 200, swiping: !0 }, animating: !1, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-switcher]", i).each(function () {
          var i = t.$(this);if (!i.data("switcher")) {
            t.switcher(i, t.Utils.options(i.attr("data-uk-switcher")));
          }
        });
      });
    }, init: function init() {
      var i = this;this.on("click.uk.switcher", this.options.toggle, function (t) {
        t.preventDefault(), i.show(this);
      }), this.options.connect && (this.connect = t.$(this.options.connect), this.connect.length && (this.connect.on("click.uk.switcher", "[data-uk-switcher-item]", function (n) {
        n.preventDefault();var e = t.$(this).attr("data-uk-switcher-item");if (i.index != e) switch (e) {case "next":case "previous":
            i.show(i.index + ("next" == e ? 1 : -1));break;default:
            i.show(parseInt(e, 10));}
      }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function (t) {
        t.preventDefault(), window.getSelection().toString() || i.show(i.index + ("swipeLeft" == t.type ? 1 : -1));
      }), this.update()));
    }, update: function update() {
      this.connect.children().removeClass("uk-active").attr("aria-hidden", "true");var t = this.find(this.options.toggle),
          i = t.filter(".uk-active");if (i.length) this.show(i, !1);else {
        if (this.options.active === !1) return;i = t.eq(this.options.active), this.show(i.length ? i : t.eq(0), !1);
      }t.not(i).attr("aria-expanded", "false"), i.attr("aria-expanded", "true");
    }, show: function show(e, s) {
      if (!this.animating) {
        var a = this.find(this.options.toggle);isNaN(e) ? e = t.$(e) : (e = 0 > e ? a.length - 1 : e, e = a.eq(a[e] ? e : 0));var o = this,
            r = t.$(e),
            c = n[this.options.animation] || function (t, e) {
          if (!o.options.animation) return n.none.apply(o);var s = o.options.animation.split(",");return 1 == s.length && (s[1] = s[0]), s[0] = s[0].trim(), s[1] = s[1].trim(), i.apply(o, [s, t, e]);
        };s !== !1 && t.support.animation || (c = n.none), r.hasClass("uk-disabled") || (a.attr("aria-expanded", "false"), r.attr("aria-expanded", "true"), a.filter(".uk-active").removeClass("uk-active"), r.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(r), -1 == this.index && (this.index = 0), this.connect.each(function () {
          var i = t.$(this),
              n = t.$(i.children()),
              e = t.$(n.filter(".uk-active")),
              s = t.$(n.eq(o.index));o.animating = !0, c.apply(o, [e, s]).then(function () {
            e.removeClass("uk-active"), s.addClass("uk-active"), e.attr("aria-hidden", "true"), s.attr("aria-hidden", "false"), t.Utils.checkDisplay(s, !0), o.animating = !1;
          });
        })), this.trigger("show.uk.switcher", [r]));
      }
    } }), n = { none: function none() {
      var i = t.$.Deferred();return i.resolve(), i.promise();
    }, fade: function fade(t, n) {
      return i.apply(this, ["uk-animation-fade", t, n]);
    }, "slide-bottom": function slideBottom(t, n) {
      return i.apply(this, ["uk-animation-slide-bottom", t, n]);
    }, "slide-top": function slideTop(t, n) {
      return i.apply(this, ["uk-animation-slide-top", t, n]);
    }, "slide-vertical": function slideVertical(t, n) {
      var e = ["uk-animation-slide-top", "uk-animation-slide-bottom"];return t && t.index() > n.index() && e.reverse(), i.apply(this, [e, t, n]);
    }, "slide-left": function slideLeft(t, n) {
      return i.apply(this, ["uk-animation-slide-left", t, n]);
    }, "slide-right": function slideRight(t, n) {
      return i.apply(this, ["uk-animation-slide-right", t, n]);
    }, "slide-horizontal": function slideHorizontal(t, n) {
      var e = ["uk-animation-slide-right", "uk-animation-slide-left"];return t && t.index() > n.index() && e.reverse(), i.apply(this, [e, t, n]);
    }, scale: function scale(t, n) {
      return i.apply(this, ["uk-animation-scale-up", t, n]);
    } }, t.switcher.animations = n;
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    UI.component('tab', {

        defaults: {
            target: '>li:not(.uk-tab-responsive, .uk-disabled)',
            connect: false,
            active: 0,
            animation: false,
            duration: 200,
            swiping: true
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-tab]', context).each(function () {

                    var tab = UI.$(this);

                    if (!tab.data('tab')) {
                        var obj = UI.tab(tab, UI.Utils.options(tab.attr('data-uk-tab')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            this.current = false;

            this.on('click.uk.tab', this.options.target, function (e) {

                e.preventDefault();

                if ($this.switcher && $this.switcher.animating) {
                    return;
                }

                var current = $this.find($this.options.target).not(this);

                current.removeClass('uk-active').blur();

                $this.trigger('change.uk.tab', [UI.$(this).addClass('uk-active'), $this.current]);

                $this.current = UI.$(this);

                // Update ARIA
                if (!$this.options.connect) {
                    current.attr('aria-expanded', 'false');
                    UI.$(this).attr('aria-expanded', 'true');
                }
            });

            if (this.options.connect) {
                this.connect = UI.$(this.options.connect);
            }

            // init responsive tab
            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');

            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
            this.responsivetab.lst = this.responsivetab.dropdown.find('ul');
            this.responsivetab.caption = this.responsivetab.find('a:first');

            if (this.element.hasClass('uk-tab-bottom')) this.responsivetab.dropdown.addClass('uk-dropdown-up');

            // handle click
            this.responsivetab.lst.on('click.uk.tab', 'a', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var link = UI.$(this);

                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
            });

            this.on('show.uk.switcher change.uk.tab', function (e, tab) {
                $this.responsivetab.caption.html(tab.text());
            });

            this.element.append(this.responsivetab);

            // init UIkit components
            if (this.options.connect) {

                this.switcher = UI.switcher(this.element, {
                    toggle: '>li:not(.uk-tab-responsive)',
                    connect: this.options.connect,
                    active: this.options.active,
                    animation: this.options.animation,
                    duration: this.options.duration,
                    swiping: this.options.swiping
                });
            }

            UI.dropdown(this.responsivetab, { mode: 'click', preventflip: 'y' });

            // init
            $this.trigger('change.uk.tab', [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);

            this.check();

            UI.$win.on('resize orientationchange', UI.Utils.debounce(function () {
                if ($this.element.is(':visible')) $this.check();
            }, 100));

            this.on('display.uk.check', function () {
                if ($this.element.is(':visible')) $this.check();
            });
        },

        check: function check() {

            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');

            if (!children.length) {
                this.responsivetab.addClass('uk-hidden');
                return;
            }

            var top = children.eq(0).offset().top + Math.ceil(children.eq(0).height() / 2),
                doresponsive = false,
                item,
                link,
                clone;

            this.responsivetab.lst.empty();

            children.each(function () {

                if (UI.$(this).offset().top > top) {
                    doresponsive = true;
                }
            });

            if (doresponsive) {

                for (var i = 0; i < children.length; i++) {

                    item = UI.$(children.eq(i));
                    link = item.find('a');

                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {

                        if (!item.hasClass('uk-disabled')) {

                            clone = UI.$(item[0].outerHTML);
                            clone.find('a').data('index', i);

                            this.responsivetab.lst.append(clone);
                        }

                        item.addClass('uk-hidden');
                    }
                }
            }

            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass' : 'addClass']('uk-hidden');
        }
    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  t.component("tab", { defaults: { target: ">li:not(.uk-tab-responsive, .uk-disabled)", connect: !1, active: 0, animation: !1, duration: 200, swiping: !0 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-tab]", i).each(function () {
          var i = t.$(this);if (!i.data("tab")) {
            t.tab(i, t.Utils.options(i.attr("data-uk-tab")));
          }
        });
      });
    }, init: function init() {
      var i = this;this.current = !1, this.on("click.uk.tab", this.options.target, function (e) {
        if (e.preventDefault(), !i.switcher || !i.switcher.animating) {
          var n = i.find(i.options.target).not(this);n.removeClass("uk-active").blur(), i.trigger("change.uk.tab", [t.$(this).addClass("uk-active"), i.current]), i.current = t.$(this), i.options.connect || (n.attr("aria-expanded", "false"), t.$(this).attr("aria-expanded", "true"));
        }
      }), this.options.connect && (this.connect = t.$(this.options.connect)), this.responsivetab = t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uk.tab", "a", function (e) {
        e.preventDefault(), e.stopPropagation();var n = t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click");
      }), this.on("show.uk.switcher change.uk.tab", function (t, e) {
        i.responsivetab.caption.html(e.text());
      }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = t.switcher(this.element, { toggle: ">li:not(.uk-tab-responsive)", connect: this.options.connect, active: this.options.active, animation: this.options.animation, duration: this.options.duration, swiping: this.options.swiping })), t.dropdown(this.responsivetab, { mode: "click", preventflip: "y" }), i.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), t.$win.on("resize orientationchange", t.Utils.debounce(function () {
        i.element.is(":visible") && i.check();
      }, 100)), this.on("display.uk.check", function () {
        i.element.is(":visible") && i.check();
      });
    }, check: function check() {
      var i = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if (!i.length) return this.responsivetab.addClass("uk-hidden"), void 0;var e,
          n,
          s,
          a = i.eq(0).offset().top + Math.ceil(i.eq(0).height() / 2),
          o = !1;if (this.responsivetab.lst.empty(), i.each(function () {
        t.$(this).offset().top > a && (o = !0);
      }), o) for (var r = 0; r < i.length; r++) {
        e = t.$(i.eq(r)), n = e.find("a"), "none" == e.css("float") || e.attr("uk-dropdown") || (e.hasClass("uk-disabled") || (s = t.$(e[0].outerHTML), s.find("a").data("index", r), this.responsivetab.lst.append(s)), e.addClass("uk-hidden"));
      }this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden");
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var toggles = [];

    UI.component('toggle', {

        defaults: {
            target: false,
            cls: 'uk-hidden',
            animation: false,
            duration: 200
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-toggle]', context).each(function () {
                    var ele = UI.$(this);

                    if (!ele.data('toggle')) {
                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr('data-uk-toggle')));
                    }
                });

                setTimeout(function () {

                    toggles.forEach(function (toggle) {
                        toggle.getToggles();
                    });
                }, 0);
            });
        },

        init: function init() {

            var $this = this;

            this.aria = this.options.cls.indexOf('uk-hidden') !== -1;

            this.on('click', function (e) {

                if ($this.element.is('a[href="#"]')) {
                    e.preventDefault();
                }

                $this.toggle();
            });

            toggles.push(this);
        },

        toggle: function toggle() {

            this.getToggles();

            if (!this.totoggle.length) return;

            if (this.options.animation && UI.support.animation) {

                var $this = this,
                    animations = this.options.animation.split(',');

                if (animations.length == 1) {
                    animations[1] = animations[0];
                }

                animations[0] = animations[0].trim();
                animations[1] = animations[1].trim();

                this.totoggle.css('animation-duration', this.options.duration + 'ms');

                this.totoggle.each(function () {

                    var ele = UI.$(this);

                    if (ele.hasClass($this.options.cls)) {

                        ele.toggleClass($this.options.cls);

                        UI.Utils.animate(ele, animations[0]).then(function () {
                            ele.css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });
                    } else {

                        UI.Utils.animate(this, animations[1] + ' uk-animation-reverse').then(function () {
                            ele.toggleClass($this.options.cls).css('animation-duration', '');
                            UI.Utils.checkDisplay(ele);
                        });
                    }
                });
            } else {
                this.totoggle.toggleClass(this.options.cls);
                UI.Utils.checkDisplay(this.totoggle);
            }

            this.updateAria();
        },

        getToggles: function getToggles() {
            this.totoggle = this.options.target ? UI.$(this.options.target) : [];
            this.updateAria();
        },

        updateAria: function updateAria() {
            if (this.aria && this.totoggle.length) {
                this.totoggle.not('[aria-hidden]').each(function () {
                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
                });
            }
        }
    });
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  var i = [];t.component("toggle", { defaults: { target: !1, cls: "uk-hidden", animation: !1, duration: 200 }, boot: function boot() {
      t.ready(function (o) {
        t.$("[data-uk-toggle]", o).each(function () {
          var i = t.$(this);if (!i.data("toggle")) {
            t.toggle(i, t.Utils.options(i.attr("data-uk-toggle")));
          }
        }), setTimeout(function () {
          i.forEach(function (t) {
            t.getToggles();
          });
        }, 0);
      });
    }, init: function init() {
      var t = this;this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.on("click", function (i) {
        t.element.is('a[href="#"]') && i.preventDefault(), t.toggle();
      }), i.push(this);
    }, toggle: function toggle() {
      if (this.getToggles(), this.totoggle.length) {
        if (this.options.animation && t.support.animation) {
          var i = this,
              o = this.options.animation.split(",");1 == o.length && (o[1] = o[0]), o[0] = o[0].trim(), o[1] = o[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function () {
            var s = t.$(this);s.hasClass(i.options.cls) ? (s.toggleClass(i.options.cls), t.Utils.animate(s, o[0]).then(function () {
              s.css("animation-duration", ""), t.Utils.checkDisplay(s);
            })) : t.Utils.animate(this, o[1] + " uk-animation-reverse").then(function () {
              s.toggleClass(i.options.cls).css("animation-duration", ""), t.Utils.checkDisplay(s);
            });
          });
        } else this.totoggle.toggleClass(this.options.cls), t.Utils.checkDisplay(this.totoggle);this.updateAria();
      }
    }, getToggles: function getToggles() {
      this.totoggle = this.options.target ? t.$(this.options.target) : [], this.updateAria();
    }, updateAria: function updateAria() {
      this.aria && this.totoggle.length && this.totoggle.not("[aria-hidden]").each(function () {
        t.$(this).attr("aria-hidden", t.$(this).hasClass("uk-hidden"));
      });
    } });
}(UIkit2);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
//  Based on Zeptos touch.js
//  https://raw.github.com/madrobby/zepto/master/src/touch.js
//  Zepto.js may be freely distributed under the MIT license.

;(function ($) {

  if ($.fn.swipeLeft) {
    return;
  }

  var touch = {},
      touchTimeout,
      tapTimeout,
      swipeTimeout,
      longTapTimeout,
      longTapDelay = 750,
      gesture;

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
  }

  function longTap() {
    longTapTimeout = null;
    if (touch.last) {
      if (touch.el !== undefined) touch.el.trigger('longTap');
      touch = {};
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = null;
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout);
    if (tapTimeout) clearTimeout(tapTimeout);
    if (swipeTimeout) clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
    touch = {};
  }

  function isPrimaryTouch(event) {
    return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
  }

  $(function () {
    var now,
        delta,
        deltaX = 0,
        deltaY = 0,
        firstTouch;

    if ('MSGesture' in window) {
      gesture = new MSGesture();
      gesture.target = document.body;
    }

    $(document).on('MSGestureEnd gestureend', function (e) {

      var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;

      if (swipeDirectionFromVelocity && touch.el !== undefined) {
        touch.el.trigger('swipe');
        touch.el.trigger('swipe' + swipeDirectionFromVelocity);
      }
    })
    // MSPointerDown: for IE10
    // pointerdown: for IE11
    .on('touchstart MSPointerDown pointerdown', function (e) {

      if (e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;

      firstTouch = e.type == 'MSPointerDown' || e.type == 'pointerdown' ? e : e.originalEvent.touches[0];

      now = Date.now();
      delta = now - (touch.last || now);
      touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

      if (touchTimeout) clearTimeout(touchTimeout);

      touch.x1 = firstTouch.pageX;
      touch.y1 = firstTouch.pageY;

      if (delta > 0 && delta <= 250) touch.isDoubleTap = true;

      touch.last = now;
      longTapTimeout = setTimeout(longTap, longTapDelay);

      // adds the current touch contact for IE gesture recognition
      if (e.originalEvent && e.originalEvent.pointerId && gesture && (e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart')) {
        gesture.addPointer(e.originalEvent.pointerId);
      }
    })
    // MSPointerMove: for IE10
    // pointermove: for IE11
    .on('touchmove MSPointerMove pointermove', function (e) {

      if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;

      firstTouch = e.type == 'MSPointerMove' || e.type == 'pointermove' ? e : e.originalEvent.touches[0];

      cancelLongTap();
      touch.x2 = firstTouch.pageX;
      touch.y2 = firstTouch.pageY;

      deltaX += Math.abs(touch.x1 - touch.x2);
      deltaY += Math.abs(touch.y1 - touch.y2);
    })
    // MSPointerUp: for IE10
    // pointerup: for IE11
    .on('touchend MSPointerUp pointerup', function (e) {

      if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;

      cancelLongTap();

      // swipe
      if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {

        swipeTimeout = setTimeout(function () {
          if (touch.el !== undefined) {
            touch.el.trigger('swipe');
            touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
          }
          touch = {};
        }, 0);

        // normal tap
      } else if ('last' in touch) {

        // don't fire tap when delta position changed by more than 30 pixels,
        // for instance when moving to a point and back to origin
        if (isNaN(deltaX) || deltaX < 30 && deltaY < 30) {
          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
          // ('tap' fires before 'scroll')
          tapTimeout = setTimeout(function () {

            // trigger universal 'tap' with the option to cancelTouch()
            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
            var event = $.Event('tap');
            event.cancelTouch = cancelAll;
            if (touch.el !== undefined) touch.el.trigger(event);

            // trigger double tap immediately
            if (touch.isDoubleTap) {
              if (touch.el !== undefined) touch.el.trigger('doubleTap');
              touch = {};
            }

            // trigger single tap after 250ms of inactivity
            else {
                touchTimeout = setTimeout(function () {
                  touchTimeout = null;
                  if (touch.el !== undefined) touch.el.trigger('singleTap');
                  touch = {};
                }, 250);
              }
          }, 0);
        } else {
          touch = {};
        }
        deltaX = deltaY = 0;
      }
    })
    // when the browser window loses focus,
    // for example when a modal dialog is shown,
    // cancel all ongoing events
    .on('touchcancel MSPointerCancel pointercancel', cancelAll);

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll);
  });

  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
    $.fn[eventName] = function (callback) {
      return $(this).on(eventName, callback);
    };
  });
})(jQuery);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (e) {
  function t(e, t, n, i) {
    return Math.abs(e - t) >= Math.abs(n - i) ? e - t > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down";
  }function n() {
    p = null, g.last && (void 0 !== g.el && g.el.trigger("longTap"), g = {});
  }function i() {
    p && clearTimeout(p), p = null;
  }function o() {
    a && clearTimeout(a), l && clearTimeout(l), u && clearTimeout(u), p && clearTimeout(p), a = l = u = p = null, g = {};
  }function r(e) {
    return e.pointerType == e.MSPOINTER_TYPE_TOUCH && e.isPrimary;
  }if (!e.fn.swipeLeft) {
    var a,
        l,
        u,
        p,
        c,
        g = {},
        s = 750;e(function () {
      var v,
          y,
          w,
          d = 0,
          f = 0;"MSGesture" in window && (c = new MSGesture(), c.target = document.body), e(document).on("MSGestureEnd gestureend", function (e) {
        var t = e.originalEvent.velocityX > 1 ? "Right" : e.originalEvent.velocityX < -1 ? "Left" : e.originalEvent.velocityY > 1 ? "Down" : e.originalEvent.velocityY < -1 ? "Up" : null;t && void 0 !== g.el && (g.el.trigger("swipe"), g.el.trigger("swipe" + t));
      }).on("touchstart MSPointerDown pointerdown", function (t) {
        ("MSPointerDown" != t.type || r(t.originalEvent)) && (w = "MSPointerDown" == t.type || "pointerdown" == t.type ? t : t.originalEvent.touches[0], v = Date.now(), y = v - (g.last || v), g.el = e("tagName" in w.target ? w.target : w.target.parentNode), a && clearTimeout(a), g.x1 = w.pageX, g.y1 = w.pageY, y > 0 && 250 >= y && (g.isDoubleTap = !0), g.last = v, p = setTimeout(n, s), t.originalEvent && t.originalEvent.pointerId && c && ("MSPointerDown" == t.type || "pointerdown" == t.type || "touchstart" == t.type) && c.addPointer(t.originalEvent.pointerId));
      }).on("touchmove MSPointerMove pointermove", function (e) {
        ("MSPointerMove" != e.type || r(e.originalEvent)) && (w = "MSPointerMove" == e.type || "pointermove" == e.type ? e : e.originalEvent.touches[0], i(), g.x2 = w.pageX, g.y2 = w.pageY, d += Math.abs(g.x1 - g.x2), f += Math.abs(g.y1 - g.y2));
      }).on("touchend MSPointerUp pointerup", function (n) {
        ("MSPointerUp" != n.type || r(n.originalEvent)) && (i(), g.x2 && Math.abs(g.x1 - g.x2) > 30 || g.y2 && Math.abs(g.y1 - g.y2) > 30 ? u = setTimeout(function () {
          void 0 !== g.el && (g.el.trigger("swipe"), g.el.trigger("swipe" + t(g.x1, g.x2, g.y1, g.y2))), g = {};
        }, 0) : "last" in g && (isNaN(d) || 30 > d && 30 > f ? l = setTimeout(function () {
          var t = e.Event("tap");t.cancelTouch = o, void 0 !== g.el && g.el.trigger(t), g.isDoubleTap ? (void 0 !== g.el && g.el.trigger("doubleTap"), g = {}) : a = setTimeout(function () {
            a = null, void 0 !== g.el && g.el.trigger("singleTap"), g = {};
          }, 250);
        }, 0) : g = {}, d = f = 0));
      }).on("touchcancel MSPointerCancel pointercancel", o), e(window).on("scroll", o);
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
      e.fn[t] = function (n) {
        return e(this).on(t, n);
      };
    });
  }
}(jQuery);
'use strict';

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
(function (UI) {

    "use strict";

    var stacks = [];

    UI.component('stackMargin', {

        defaults: {
            cls: 'uk-margin-small-top',
            rowfirst: false,
            observe: false
        },

        boot: function boot() {

            // init code
            UI.ready(function (context) {

                UI.$('[data-uk-margin]', context).each(function () {

                    var ele = UI.$(this);

                    if (!ele.data('stackMargin')) {
                        UI.stackMargin(ele, UI.Utils.options(ele.attr('data-uk-margin')));
                    }
                });
            });
        },

        init: function init() {

            var $this = this;

            UI.$win.on('resize orientationchange', function () {

                var fn = function fn() {
                    $this.process();
                };

                UI.$(function () {
                    fn();
                    UI.$win.on('load', fn);
                });

                return UI.Utils.debounce(fn, 20);
            }());

            this.on('display.uk.check', function (e) {
                if (this.element.is(':visible')) this.process();
            }.bind(this));

            if (this.options.observe) {

                UI.domObserve(this.element, function (e) {
                    if ($this.element.is(':visible')) $this.process();
                });
            }

            stacks.push(this);
        },

        process: function process() {

            var $this = this,
                columns = this.element.children();

            UI.Utils.stackMargin(columns, this.options);

            if (!this.options.rowfirst || !columns.length) {
                return this;
            }

            // Mark first column elements
            var group = {},
                minleft = false;

            columns.removeClass(this.options.rowfirst).each(function (offset, $ele) {

                $ele = UI.$(this);

                if (this.style.display != 'none') {
                    offset = $ele.offset().left;
                    ((group[offset] = group[offset] || []) && group[offset]).push(this);
                    minleft = minleft === false ? offset : Math.min(minleft, offset);
                }
            });

            UI.$(group[minleft]).addClass(this.options.rowfirst);

            return this;
        }

    });

    // responsive element e.g. iframes

    (function () {

        var elements = [],
            check = function check(ele) {

            if (!ele.is(':visible')) return;

            var width = ele.parent().width(),
                iwidth = ele.data('width'),
                ratio = width / iwidth,
                height = Math.floor(ratio * ele.data('height'));

            ele.css({ height: width < iwidth ? height : ele.data('height') });
        };

        UI.component('responsiveElement', {

            defaults: {},

            boot: function boot() {

                // init code
                UI.ready(function (context) {

                    UI.$('iframe.uk-responsive-width, [data-uk-responsive]', context).each(function () {

                        var ele = UI.$(this),
                            obj;

                        if (!ele.data('responsiveElement')) {
                            obj = UI.responsiveElement(ele, {});
                        }
                    });
                });
            },

            init: function init() {

                var ele = this.element;

                if (ele.attr('width') && ele.attr('height')) {

                    ele.data({
                        width: ele.attr('width'),
                        height: ele.attr('height')
                    }).on('display.uk.check', function () {
                        check(ele);
                    });

                    check(ele);

                    elements.push(ele);
                }
            }
        });

        UI.$win.on('resize load', UI.Utils.debounce(function () {

            elements.forEach(function (ele) {
                check(ele);
            });
        }, 15));
    })();

    // helper

    UI.Utils.stackMargin = function (elements, options) {

        options = UI.$.extend({
            cls: 'uk-margin-small-top'
        }, options);

        elements = UI.$(elements).removeClass(options.cls);

        var min = false;

        elements.each(function (offset, height, pos, $ele) {

            $ele = UI.$(this);

            if ($ele.css('display') != 'none') {

                offset = $ele.offset();
                height = $ele.outerHeight();
                pos = offset.top + height;

                $ele.data({
                    ukMarginPos: pos,
                    ukMarginTop: offset.top
                });

                if (min === false || offset.top < min.top) {

                    min = {
                        top: offset.top,
                        left: offset.left,
                        pos: pos
                    };
                }
            }
        }).each(function ($ele) {

            $ele = UI.$(this);

            if ($ele.css('display') != 'none' && $ele.data('ukMarginTop') > min.top && $ele.data('ukMarginPos') > min.pos) {
                $ele.addClass(options.cls);
            }
        });
    };

    UI.Utils.matchHeights = function (elements, options) {

        elements = UI.$(elements).css('min-height', '');
        options = UI.$.extend({ row: true }, options);

        var matchHeights = function matchHeights(group) {

            if (group.length < 2) return;

            var max = 0;

            group.each(function () {
                max = Math.max(max, UI.$(this).outerHeight());
            }).each(function () {

                var element = UI.$(this),
                    height = max - (element.css('box-sizing') == 'border-box' ? 0 : element.outerHeight() - element.height());

                element.css('min-height', height + 'px');
            });
        };

        if (options.row) {

            elements.first().width(); // force redraw

            setTimeout(function () {

                var lastoffset = false,
                    group = [];

                elements.each(function () {

                    var ele = UI.$(this),
                        offset = ele.offset().top;

                    if (offset != lastoffset && group.length) {

                        matchHeights(UI.$(group));
                        group = [];
                        offset = ele.offset().top;
                    }

                    group.push(ele);
                    lastoffset = offset;
                });

                if (group.length) {
                    matchHeights(UI.$(group));
                }
            }, 0);
        } else {
            matchHeights(elements);
        }
    };

    (function (cacheSvgs) {

        UI.Utils.inlineSvg = function (selector, root) {

            var images = UI.$(selector || 'img[src$=".svg"]', root || document).each(function () {

                var img = UI.$(this),
                    src = img.attr('src');

                if (!cacheSvgs[src]) {

                    var d = UI.$.Deferred();

                    UI.$.get(src, { nc: Math.random() }, function (data) {
                        d.resolve(UI.$(data).find('svg'));
                    });

                    cacheSvgs[src] = d.promise();
                }

                cacheSvgs[src].then(function (svg) {

                    var $svg = UI.$(svg).clone();

                    if (img.attr('id')) $svg.attr('id', img.attr('id'));
                    if (img.attr('class')) $svg.attr('class', img.attr('class'));
                    if (img.attr('style')) $svg.attr('style', img.attr('style'));

                    if (img.attr('width')) {
                        $svg.attr('width', img.attr('width'));
                        if (!img.attr('height')) $svg.removeAttr('height');
                    }

                    if (img.attr('height')) {
                        $svg.attr('height', img.attr('height'));
                        if (!img.attr('width')) $svg.removeAttr('width');
                    }

                    img.replaceWith($svg);
                });
            });
        };

        // init code
        UI.ready(function (context) {
            UI.Utils.inlineSvg('[data-uk-svg]', context);
        });
    })({});

    UI.Utils.getCssVar = function (name) {

        /* usage in css:  .var-name:before { content:"xyz" } */

        var val,
            doc = document.documentElement,
            element = doc.appendChild(document.createElement('div'));

        element.classList.add('var-' + name);

        try {
            val = JSON.parse(val = getComputedStyle(element, ':before').content.replace(/^["'](.*)["']$/, '$1'));
        } catch (e) {
            val = undefined;
        }

        doc.removeChild(element);

        return val;
    };
})(UIkit2);
"use strict";

/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function (t) {
  "use strict";
  var i = [];t.component("stackMargin", { defaults: { cls: "uk-margin-small-top", rowfirst: !1, observe: !1 }, boot: function boot() {
      t.ready(function (i) {
        t.$("[data-uk-margin]", i).each(function () {
          var i = t.$(this);i.data("stackMargin") || t.stackMargin(i, t.Utils.options(i.attr("data-uk-margin")));
        });
      });
    }, init: function init() {
      var e = this;t.$win.on("resize orientationchange", function () {
        var i = function i() {
          e.process();
        };return t.$(function () {
          i(), t.$win.on("load", i);
        }), t.Utils.debounce(i, 20);
      }()), this.on("display.uk.check", function () {
        this.element.is(":visible") && this.process();
      }.bind(this)), this.options.observe && t.domObserve(this.element, function () {
        e.element.is(":visible") && e.process();
      }), i.push(this);
    }, process: function process() {
      var i = this.element.children();if (t.Utils.stackMargin(i, this.options), !this.options.rowfirst || !i.length) return this;var e = {},
          n = !1;return i.removeClass(this.options.rowfirst).each(function (i, s) {
        s = t.$(this), "none" != this.style.display && (i = s.offset().left, ((e[i] = e[i] || []) && e[i]).push(this), n = n === !1 ? i : Math.min(n, i));
      }), t.$(e[n]).addClass(this.options.rowfirst), this;
    } }), function () {
    var i = [],
        e = function e(t) {
      if (t.is(":visible")) {
        var i = t.parent().width(),
            e = t.data("width"),
            n = i / e,
            s = Math.floor(n * t.data("height"));t.css({ height: e > i ? s : t.data("height") });
      }
    };t.component("responsiveElement", { defaults: {}, boot: function boot() {
        t.ready(function (i) {
          t.$("iframe.uk-responsive-width, [data-uk-responsive]", i).each(function () {
            var i,
                e = t.$(this);e.data("responsiveElement") || (i = t.responsiveElement(e, {}));
          });
        });
      }, init: function init() {
        var t = this.element;t.attr("width") && t.attr("height") && (t.data({ width: t.attr("width"), height: t.attr("height") }).on("display.uk.check", function () {
          e(t);
        }), e(t), i.push(t));
      } }), t.$win.on("resize load", t.Utils.debounce(function () {
      i.forEach(function (t) {
        e(t);
      });
    }, 15));
  }(), t.Utils.stackMargin = function (i, e) {
    e = t.$.extend({ cls: "uk-margin-small-top" }, e), i = t.$(i).removeClass(e.cls);var n = !1;i.each(function (i, e, s, a) {
      a = t.$(this), "none" != a.css("display") && (i = a.offset(), e = a.outerHeight(), s = i.top + e, a.data({ ukMarginPos: s, ukMarginTop: i.top }), (n === !1 || i.top < n.top) && (n = { top: i.top, left: i.left, pos: s }));
    }).each(function (i) {
      i = t.$(this), "none" != i.css("display") && i.data("ukMarginTop") > n.top && i.data("ukMarginPos") > n.pos && i.addClass(e.cls);
    });
  }, t.Utils.matchHeights = function (i, e) {
    i = t.$(i).css("min-height", ""), e = t.$.extend({ row: !0 }, e);var n = function n(i) {
      if (!(i.length < 2)) {
        var e = 0;i.each(function () {
          e = Math.max(e, t.$(this).outerHeight());
        }).each(function () {
          var i = t.$(this),
              n = e - ("border-box" == i.css("box-sizing") ? 0 : i.outerHeight() - i.height());i.css("min-height", n + "px");
        });
      }
    };e.row ? (i.first().width(), setTimeout(function () {
      var e = !1,
          s = [];i.each(function () {
        var i = t.$(this),
            a = i.offset().top;a != e && s.length && (n(t.$(s)), s = [], a = i.offset().top), s.push(i), e = a;
      }), s.length && n(t.$(s));
    }, 0)) : n(i);
  }, function (i) {
    t.Utils.inlineSvg = function (e, n) {
      t.$(e || 'img[src$=".svg"]', n || document).each(function () {
        var e = t.$(this),
            n = e.attr("src");if (!i[n]) {
          var s = t.$.Deferred();t.$.get(n, { nc: Math.random() }, function (i) {
            s.resolve(t.$(i).find("svg"));
          }), i[n] = s.promise();
        }i[n].then(function (i) {
          var n = t.$(i).clone();e.attr("id") && n.attr("id", e.attr("id")), e.attr("class") && n.attr("class", e.attr("class")), e.attr("style") && n.attr("style", e.attr("style")), e.attr("width") && (n.attr("width", e.attr("width")), e.attr("height") || n.removeAttr("height")), e.attr("height") && (n.attr("height", e.attr("height")), e.attr("width") || n.removeAttr("width")), e.replaceWith(n);
        });
      });
    }, t.ready(function (i) {
      t.Utils.inlineSvg("[data-uk-svg]", i);
    });
  }({}), t.Utils.getCssVar = function (t) {
    var i,
        e = document.documentElement,
        n = e.appendChild(document.createElement("div"));n.classList.add("var-" + t);try {
      i = JSON.parse(i = getComputedStyle(n, ":before").content.replace(/^["'](.*)["']$/, "$1"));
    } catch (s) {
      i = void 0;
    }return e.removeChild(n), i;
  };
}(UIkit2);
'use strict';

// add .js class to html if javascript enabled
if ('querySelector' in document && 'addEventListener' in window) {
  document.documentElement.className += ' js';
}

// add .no-touch class to html if not a touch device
if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch";
}
//# sourceMappingURL=index.js.map
