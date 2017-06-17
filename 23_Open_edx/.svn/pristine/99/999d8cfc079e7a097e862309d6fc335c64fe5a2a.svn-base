(function(global, factory) {
	"use strict";
	if ( typeof module === "object" && typeof module.exports === "object") {
		module.exports = global.document ? factory(global, true) : function(w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}
})( typeof window !== "undefined" ? window : this, function(window, noGlobal) {
	"use strict";
	var arr = [];
	var document = window.document;
	var getProto = Object.getPrototypeOf;
	var slice = arr.slice;
	var concat = arr.concat;
	var push = arr.push;
	var indexOf = arr.indexOf;
	var class2type = {};
	var toString = class2type.toString;
	var hasOwn = class2type.hasOwnProperty;
	var fnToString = hasOwn.toString;
	var ObjectFunctionString = fnToString.call(Object);
	var support = {};
	function DOMEval(code, doc) {
		doc = doc || document;
		var script = doc.createElement("script");
		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}

	var version = "3.1.0",
	    jQuery = function(selector, context) {
		return new jQuery.fn.init(selector, context);
	},
	    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,
	    fcamelCase = function(all, letter) {
		return letter.toUpperCase();
	};
	jQuery.fn = jQuery.prototype = {
		jquery : version,
		constructor : jQuery,
		length : 0,
		toArray : function() {
			return slice.call(this);
		},
		get : function(num) {
			return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
		},
		pushStack : function(elems) {
			var ret = jQuery.merge(this.constructor(), elems);
			ret.prevObject = this;
			return ret;
		},
		each : function(callback) {
			return jQuery.each(this, callback);
		},
		map : function(callback) {
			return this.pushStack(jQuery.map(this, function(elem, i) {
				return callback.call(elem, i, elem);
			}));
		},
		slice : function() {
			return this.pushStack(slice.apply(this, arguments));
		},
		first : function() {
			return this.eq(0);
		},
		last : function() {
			return this.eq(-1);
		},
		eq : function(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},
		end : function() {
			return this.prevObject || this.constructor();
		},
		push : push,
		sort : arr.sort,
		splice : arr.splice
	};
	jQuery.extend = jQuery.fn.extend = function() {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;
		if ( typeof target === "boolean") {
			deep = target;
			target = arguments[i] || {};
			i++;
		}
		if ( typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}
		if (i === length) {
			target = this;
			i--;
		}
		for (; i < length; i++) {
			if (( options = arguments[i]) != null) {
				for (name in options) {
					src = target[name];
					copy = options[name];
					if (target === copy) {
						continue;
					}
					if (deep && copy && (jQuery.isPlainObject(copy) || ( copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
						target[name] = jQuery.extend(deep, clone, copy);
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}
		return target;
	};
	jQuery.extend({
		expando : "jQuery" + (version + Math.random()).replace(/\D/g, ""),
		isReady : true,
		error : function(msg) {
			throw new Error(msg);
		},
		noop : function() {
		},
		isFunction : function(obj) {
			return jQuery.type(obj) === "function";
		},
		isArray : Array.isArray,
		isWindow : function(obj) {
			return obj != null && obj === obj.window;
		},
		isNumeric : function(obj) {
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
		},
		isPlainObject : function(obj) {
			var proto,
			    Ctor;
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}
			proto = getProto(obj);
			if (!proto) {
				return true;
			}
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},
		isEmptyObject : function(obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},
		type : function(obj) {
			if (obj == null) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
		},
		globalEval : function(code) {
			DOMEval(code);
		},
		camelCase : function(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},
		nodeName : function(elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
		each : function(obj, callback) {
			var length,
			    i = 0;
			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}
			return obj;
		},
		trim : function(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},
		makeArray : function(arr, results) {
			var ret = results || [];
			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}
			return ret;
		},
		inArray : function(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},
		merge : function(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;
			for (; j < len; j++) {
				first[i++] = second[j];
			}
			first.length = i;
			return first;
		},
		grep : function(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}
			return matches;
		},
		map : function(elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);
					if (value != null) {
						ret.push(value);
					}
				}
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);
					if (value != null) {
						ret.push(value);
					}
				}
			}
			return concat.apply([], ret);
		},
		guid : 1,
		proxy : function(fn, context) {
			var tmp,
			    args,
			    proxy;
			if ( typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}
			args = slice.call(arguments, 2);
			proxy = function() {
				return fn.apply(context || this, args.concat(slice.call(arguments)));
			};
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
			return proxy;
		},
		now : Date.now,
		support : support
	});
	if ( typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});
	function isArrayLike(obj) {
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);
		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}
		return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	var Sizzle = (function(window) {
		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,
		    setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,
		    expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},
		    hasOwn = ( {}).hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,
		    indexOf = function(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    whitespace = "[\\x20\\t\\r\\n\\f]",
		    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
		    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
		    rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID" : new RegExp("^#(" + identifier + ")"),
			"CLASS" : new RegExp("^\\.(" + identifier + ")"),
			"TAG" : new RegExp("^(" + identifier + "|[*])"),
			"ATTR" : new RegExp("^" + attributes),
			"PSEUDO" : new RegExp("^" + pseudos),
			"CHILD" : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool" : new RegExp("^(?:" + booleans + ")$", "i"),
			"needsContext" : new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,
		    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,
		    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},
		    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		    fcssescape = function(ch, asCodePoint) {
			if (asCodePoint) {
				if (ch === "\0") {
					return "\uFFFD";
				}
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}
			return "\\" + ch;
		},
		    unloadHandler = function() {
			setDocument();
		},
		    disabledAncestor = addCombinator(function(elem) {
			return elem.disabled === true;
		}, {
			dir : "parentNode",
			next : "legend"
		});
		try {
			push.apply(( arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
			arr[preferredDoc.childNodes.length].nodeType
		} catch(e) {
			push = {
				apply : arr.length ? function(target, els) {
					push_native.apply(target, slice.call(els));
				} : function(target, els) {
					var j = target.length,
					    i = 0;
					while ((target[j++] = els[i++])) {
					}
					target.length = j - 1;
				}
			};
		}
		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,
			    nodeType = context ? context.nodeType : 9;
			results = results || [];
			if ( typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
				return results;
			}
			if (!seed) {
				if (( context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;
				if (documentIsHTML) {
					if (nodeType !== 11 && ( match = rquickExpr.exec(selector))) {
						if (( m = match[1])) {
							if (nodeType === 9) {
								if (( elem = context.getElementById(m))) {
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								if (newContext && ( elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;
						} else if (( m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;
						} else if (context.nodeName.toLowerCase() !== "object") {
							if (( nid = context.getAttribute("id"))) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", ( nid = expando));
							}
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}
						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch(qsaError) {
							} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		function createCache() {
			var keys = [];
			function cache(key, value) {
				if (keys.push(key + " ") > Expr.cacheLength) {
					delete cache[keys.shift()];
				}
				return (cache[key + " "] = value);
			}

			return cache;
		}

		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		function assert(fn) {
			var el = document.createElement("fieldset");
			try {
				return !!fn(el);
			} catch(e) {
				return false;
			} finally {
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				el = null;
			}
		}

		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;
			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
			if (diff) {
				return diff;
			}
			if (cur) {
				while (( cur = cur.nextSibling)) {
					if (cur === b) {
						return -1;
					}
				}
			}
			return a ? 1 : -1;
		}

		function createInputPseudo(type) {
			return function(elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		function createButtonPseudo(type) {
			return function(elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		function createDisabledPseudo(disabled) {
			return function(elem) {
				return "label" in elem && elem.disabled === disabled || "form" in elem && elem.disabled === disabled || "form" in elem && elem.disabled === false && (elem.isDisabled === disabled || elem.isDisabled !== !disabled && ("label" in elem || !disabledAncestor(elem)) !== disabled);
			};
		}

		function createPositionalPseudo(fn) {
			return markFunction(function(argument) {
				argument = +argument;
				return markFunction(function(seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;
					while (i--) {
						if (seed[( j = matchIndexes[i])]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		support = Sizzle.support = {};
		isXML = Sizzle.isXML = function(elem) {
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};
		setDocument = Sizzle.setDocument = function(node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);
			if (preferredDoc !== document && ( subWindow = document.defaultView) && subWindow.top !== subWindow) {
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}
			support.attributes = assert(function(el) {
				el.className = "i";
				return !el.getAttribute("className");
			});
			support.getElementsByTagName = assert(function(el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);
			support.getById = assert(function(el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});
			if (support.getById) {
				Expr.find["ID"] = function(id, context) {
					if ( typeof context.getElementById !== "undefined" && documentIsHTML) {
						var m = context.getElementById(id);
						return m ? [m] : [];
					}
				};
				Expr.filter["ID"] = function(id) {
					var attrId = id.replace(runescape, funescape);
					return function(elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				delete Expr.find["ID"];
				Expr.filter["ID"] = function(id) {
					var attrId = id.replace(runescape, funescape);
					return function(elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}
			Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
				if ( typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function(tag, context) {
				var elem,
				    tmp = [],
				    i = 0,
				    results = context.getElementsByTagName(tag);
				if (tag === "*") {
					while (( elem = results[i++])) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}
					return tmp;
				}
				return results;
			};
			Expr.find["CLASS"] = support.getElementsByClassName &&
			function(className, context) {
				if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};
			rbuggyMatches = [];
			rbuggyQSA = [];
			if ((support.qsa = rnative.test(document.querySelectorAll))) {
				assert(function(el) {
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});
				assert(function(el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}
			if ((support.matchesSelector = rnative.test(( matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
				assert(function(el) {
					support.disconnectedMatch = matches.call(el, "*");
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}
			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
			hasCompare = rnative.test(docElem.compareDocumentPosition);
			contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function(a, b) {
				if (b) {
					while (( b = b.parentNode)) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};
			sortOrder = hasCompare ? function(a, b) {
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
				if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}
					return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
				}
				return compare & 4 ? -1 : 1;
			} : function(a, b) {
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}
				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}
				cur = a;
				while (( cur = cur.parentNode)) {
					ap.unshift(cur);
				}
				cur = b;
				while (( cur = cur.parentNode)) {
					bp.unshift(cur);
				}
				while (ap[i] === bp[i]) {
					i++;
				}
				return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};
			return document;
		};
		Sizzle.matches = function(expr, elements) {
			return Sizzle(expr, null, null, elements);
		};
		Sizzle.matchesSelector = function(elem, expr) {
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}
			expr = expr.replace(rattributeQuotes, "='$1']");
			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
				try {
					var ret = matches.call(elem, expr);
					if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch(e) {
				}
			}
			return Sizzle(expr, document, null, [elem]).length > 0;
		};
		Sizzle.contains = function(context, elem) {
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};
		Sizzle.attr = function(elem, name) {
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}
			var fn = Expr.attrHandle[name.toLowerCase()],
			    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : ( val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};
		Sizzle.escape = function(sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};
		Sizzle.error = function(msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};
		Sizzle.uniqueSort = function(results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);
			if (hasDuplicate) {
				while (( elem = results[i++])) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}
			sortInput = null;
			return results;
		};
		getText = Sizzle.getText = function(elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;
			if (!nodeType) {
				while (( node = elem[i++])) {
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				if ( typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			return ret;
		};
		Expr = Sizzle.selectors = {
			cacheLength : 50,
			createPseudo : markFunction,
			match : matchExpr,
			attrHandle : {},
			find : {},
			relative : {
				">" : {
					dir : "parentNode",
					first : true
				},
				" " : {
					dir : "parentNode"
				},
				"+" : {
					dir : "previousSibling",
					first : true
				},
				"~" : {
					dir : "previousSibling"
				}
			},
			preFilter : {
				"ATTR" : function(match) {
					match[1] = match[1].replace(runescape, funescape);
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}
					return match.slice(0, 4);
				},
				"CHILD" : function(match) {
					match[1] = match[1].toLowerCase();
					if (match[1].slice(0, 3) === "nth") {
						if (!match[3]) {
							Sizzle.error(match[0]);
						}
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +((match[7] + match[8]) || match[3] === "odd");
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}
					return match;
				},
				"PSEUDO" : function(match) {
					var excess,
					    unquoted = !match[6] && match[2];
					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}
					if (match[3]) {
						match[2] = match[4] || match[5] || "";
					} else if (unquoted && rpseudo.test(unquoted) && ( excess = tokenize(unquoted, true)) && ( excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}
					return match.slice(0, 3);
				}
			},
			filter : {
				"TAG" : function(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function() {
						return true;
					} : function(elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},
				"CLASS" : function(className) {
					var pattern = classCache[className + " "];
					return pattern || ( pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},
				"ATTR" : function(name, operator, check) {
					return function(elem) {
						var result = Sizzle.attr(elem, name);
						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}
						result += "";
						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},
				"CHILD" : function(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";
					return first === 1 && last === 0 ? function(elem) {
						return !!elem.parentNode;
					} : function(elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;
						if (parent) {
							if (simple) {
								while (dir) {
									node = elem;
									while (( node = node[dir])) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
											return false;
										}
									}
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
							start = [ forward ? parent.firstChild : parent.lastChild];
							if (forward && useCache) {
								node = parent;
								outerCache = node[expando] || (node[expando] = {});
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];
								while (( node = ++nodeIndex && node && node[dir] || ( diff = nodeIndex = 0) || start.pop())) {
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								if (useCache) {
									node = elem;
									outerCache = node[expando] || (node[expando] = {});
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}
								if (diff === false) {
									while (( node = ++nodeIndex && node && node[dir] || ( diff = nodeIndex = 0) || start.pop())) {
										if (( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
												uniqueCache[type] = [dirruns, diff];
											}
											if (node === elem) {
												break;
											}
										}
									}
								}
							}
							diff -= last;
							return diff === first || (diff % first === 0 && diff / first >= 0);
						}
					};
				},
				"PSEUDO" : function(pseudo, argument) {
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
					if (fn[expando]) {
						return fn(argument);
					}
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function(elem) {
							return fn(elem, 0, args);
						};
					}
					return fn;
				}
			},
			pseudos : {
				"not" : markFunction(function(selector) {
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));
					return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;
						while (i--) {
							if (( elem = unmatched[i])) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function(elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						input[0] = null;
						return !results.pop();
					};
				}),
				"has" : markFunction(function(selector) {
					return function(elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),
				"contains" : markFunction(function(text) {
					text = text.replace(runescape, funescape);
					return function(elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),
				"lang" : markFunction(function(lang) {
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function(elem) {
						var elemLang;
						do {
							if (( elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while((elem=elem.parentNode)&&elem.nodeType===1);
						return false;
					};
				}),
				"target" : function(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},
				"root" : function(elem) {
					return elem === docElem;
				},
				"focus" : function(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},
				"enabled" : createDisabledPseudo(false),
				"disabled" : createDisabledPseudo(true),
				"checked" : function(elem) {
					var nodeName = elem.nodeName.toLowerCase();
					return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
				},
				"selected" : function(elem) {
					if (elem.parentNode) {
						elem.parentNode.selectedIndex
					}
					return elem.selected === true;
				},
				"empty" : function(elem) {
					for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},
				"parent" : function(elem) {
					return !Expr.pseudos["empty"](elem);
				},
				"header" : function(elem) {
					return rheader.test(elem.nodeName);
				},
				"input" : function(elem) {
					return rinputs.test(elem.nodeName);
				},
				"button" : function(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},
				"text" : function(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (( attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},
				"first" : createPositionalPseudo(function() {
					return [0];
				}),
				"last" : createPositionalPseudo(function(matchIndexes, length) {
					return [length - 1];
				}),
				"eq" : createPositionalPseudo(function(matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),
				"even" : createPositionalPseudo(function(matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),
				"odd" : createPositionalPseudo(function(matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),
				"lt" : createPositionalPseudo(function(matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0; ) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),
				"gt" : createPositionalPseudo(function(matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length; ) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};
		Expr.pseudos["nth"] = Expr.pseudos["eq"];
		for (i in {
			radio : true,
			checkbox : true,
			file : true,
			password : true,
			image : true
		}) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in {
			submit : true,
			reset : true
		}) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}
		function setFilters() {
		}


		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();
		tokenize = Sizzle.tokenize = function(selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];
			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}
			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;
			while (soFar) {
				if (!matched || ( match = rcomma.exec(soFar))) {
					if (match) {
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(( tokens = []));
				}
				matched = false;
				if (( match = rcombinators.exec(soFar))) {
					matched = match.shift();
					tokens.push({
						value : matched,
						type : match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}
				for (type in Expr.filter) {
					if (( match = matchExpr[type].exec(soFar)) && (!preFilters[type] || ( match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value : matched,
							type : type,
							matches : match
						});
						soFar = soFar.slice(matched.length);
					}
				}
				if (!matched) {
					break;
				}
			}
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
		};
		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;
			return combinator.first ? function(elem, context, xml) {
				while (( elem = elem[dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
			} : function(elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];
				if (xml) {
					while (( elem = elem[dir])) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (( elem = elem[dir])) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if (( oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
								return (newCache[2] = oldCache[2]);
							} else {
								uniqueCache[key] = newCache;
								if ((newCache[2] = matcher(elem, context, xml))) {
									return true;
								}
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function(elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;
			for (; i < len; i++) {
				if (( elem = unmatched[i])) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}
			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function(seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,
				    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
				    matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ? postFinder || ( seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);
					i = temp.length;
					while (i--) {
						if (( elem = temp[i])) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}
				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (( elem = matcherOut[i])) {
									temp.push((matcherIn[i] = elem));
								}
							}
							postFinder(null, ( matcherOut = []), temp, xml);
						}
						i = matcherOut.length;
						while (i--) {
							if (( elem = matcherOut[i]) && ( temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
								seed[temp] = !(results[temp] = elem);
							}
						}
					}
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,
			    matchContext = addCombinator(function(elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function(elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [
			function(elem, context, xml) {
				var ret = (!leadingRelative && (xml || context !== outermostContext)) || (( checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				checkContext = null;
				return ret;
			}];
			for (; i < len; i++) {
				if (( matcher = Expr.relative[tokens[i].type])) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
					if (matcher[expando]) {
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
							value : tokens[i - 2].type === " " ? "*" : ""
						})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(( tokens = tokens.slice(j))), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}
			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup =
				    outermostContext,
				    elems = seed || byElement && Expr.find["TAG"]("*", outermost),
				    dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				    len = elems.length;
				if (outermost) {
					outermostContext = context === document || context || outermost;
				}
				for (; i !== len && ( elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (( matcher = elementMatchers[j++])) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}
					if (bySet) {
						if (( elem = !matcher && elem)) {
							matchedCount--;
						}
						if (seed) {
							unmatched.push(elem);
						}
					}
				}
				matchedCount += i;
				if (bySet && i !== matchedCount) {
					j = 0;
					while (( matcher = setMatchers[j++])) {
						matcher(unmatched, setMatched, context, xml);
					}
					if (seed) {
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}
						setMatched = condense(setMatched);
					}
					push.apply(results, setMatched);
					if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
						Sizzle.uniqueSort(results);
					}
				}
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
				return unmatched;
			};
			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function(selector, match) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];
			if (!cached) {
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
				cached.selector = selector;
			}
			return cached;
		};
		select = Sizzle.select = function(selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(( selector = compiled.selector || selector));
			results = results || [];
			if (match.length === 1) {
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && ( token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
					context = (Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];
					if (!context) {
						return results;
					} else if (compiled) {
						context = context.parentNode;
					}
					selector = selector.slice(tokens.shift().value.length);
				}
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];
					if (Expr.relative[( type = token.type)]) {
						break;
					}
					if (( find = Expr.find[type])) {
						if (( seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}
							break;
						}
					}
				}
			}
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
		support.detectDuplicates = !!hasDuplicate;
		setDocument();
		support.sortDetached = assert(function(el) {
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});
		if (!assert(function(el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function(elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}
		if (!support.attributes || !assert(function(el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function(elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}
		if (!assert(function(el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function(elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : ( val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}
		return Sizzle;
	})(window);
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	var dir = function(elem, dir, until) {
		var matched = [],
		    truncate = until !== undefined;
		while (( elem = elem[dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};
	var siblings = function(n, elem) {
		var matched = [];
		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}
		return matched;
	};
	var rneedsContext = jQuery.expr.match.needsContext;
	var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
	var risSimple = /^.[^:#\[\.,]*$/;
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function(elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function(elem) {
				return (elem === qualifier) !== not;
			});
		}
		if ( typeof qualifier === "string") {
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}
			qualifier = jQuery.filter(qualifier, elements);
		}
		return jQuery.grep(elements, function(elem) {
			return (indexOf.call(qualifier, elem) > -1) !== not && elem.nodeType === 1;
		});
	}


	jQuery.filter = function(expr, elems, not) {
		var elem = elems[0];
		if (not) {
			expr = ":not(" + expr + ")";
		}
		return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
			return elem.nodeType === 1;
		}));
	};
	jQuery.fn.extend({
		find : function(selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;
			if ( typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function() {
					for ( i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}
			ret = this.pushStack([]);
			for ( i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}
			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter : function(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not : function(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is : function(selector) {
			return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});
	var rootjQuery,
	    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function(selector, context, root) {
		var match,
		    elem;
		if (!selector) {
			return this;
		}
		root = root || rootjQuery;
		if ( typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}
			if (match && (match[1] || !context)) {
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);
							} else {
								this.attr(match, context[match]);
							}
						}
					}
					return this;
				} else {
					elem = document.getElementById(match[2]);
					if (elem) {
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}
			} else if (!context || context.jquery) {
				return (context || root).find(selector);
			} else {
				return this.constructor(context).find(selector);
			}
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
		}
		return jQuery.makeArray(selector, this);
	};
	init.prototype = jQuery.fn;
	rootjQuery = jQuery(document);
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	    guaranteedUnique = {
		children : true,
		contents : true,
		next : true,
		prev : true
	};
	jQuery.fn.extend({
		has : function(target) {
			var targets = jQuery(target, this),
			    l = targets.length;
			return this.filter(function() {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},
		closest : function(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						if (cur.nodeType < 11 && ( targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
							matched.push(cur);
							break;
						}
					}
				}
			}
			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},
		index : function(elem) {
			if (!elem) {
				return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
			}
			if ( typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}
			return indexOf.call(this, elem.jquery ? elem[0] : elem);
		},
		add : function(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},
		addBack : function(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});
	function sibling(cur, dir) {
		while (( cur = cur[dir]) && cur.nodeType !== 1) {
		}
		return cur;
	}


	jQuery.each({
		parent : function(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents : function(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil : function(elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next : function(elem) {
			return sibling(elem, "nextSibling");
		},
		prev : function(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll : function(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll : function(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil : function(elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil : function(elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings : function(elem) {
			return siblings((elem.parentNode || {}).firstChild, elem);
		},
		children : function(elem) {
			return siblings(elem.firstChild);
		},
		contents : function(elem) {
			return elem.contentDocument || jQuery.merge([], elem.childNodes);
		}
	}, function(name, fn) {
		jQuery.fn[name] = function(until, selector) {
			var matched = jQuery.map(this, fn, until);
			if (name.slice(-5) !== "Until") {
				selector = until;
			}
			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}
			if (this.length > 1) {
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}
			return this.pushStack(matched);
		};
	});
	var rnotwhite = (/\S+/g);
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
			object[flag] = true;
		});
		return object;
	}


	jQuery.Callbacks = function(options) {
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
		var firing,
		    memory,
		    fired,
		    locked,
		    list = [],
		    queue = [],
		    firingIndex = -1,
		    fire = function() {
			locked = options.once;
			fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
						firingIndex = list.length;
						memory = false;
					}
				}
			}
			if (!options.memory) {
				memory = false;
			}
			firing = false;
			if (locked) {
				if (memory) {
					list = [];
				} else {
					list = "";
				}
			}
		},
		    self = {
			add : function() {
				if (list) {
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}
					(function add(args) {
						jQuery.each(args, function(_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {
								add(arg);
							}
						});
					})(arguments);
					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},
			remove : function() {
				jQuery.each(arguments, function(_, arg) {
					var index;
					while (( index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},
			has : function(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},
			empty : function() {
				if (list) {
					list = [];
				}
				return this;
			},
			disable : function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled : function() {
				return !list;
			},
			lock : function() {
				locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked : function() {
				return !!locked;
			},
			fireWith : function(context, args) {
				if (!locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},
			fire : function() {
				self.fireWith(this, arguments);
				return this;
			},
			fired : function() {
				return !!fired;
			}
		};
		return self;
	};
	function Identity(v) {
		return v;
	}

	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject) {
		var method;
		try {
			if (value && jQuery.isFunction(( method = value.promise))) {
				method.call(value).done(resolve).fail(reject);
			} else if (value && jQuery.isFunction(( method = value.then))) {
				method.call(value, resolve, reject);
			} else {
				resolve.call(undefined, value);
			}
		} catch(value) {
			reject.call(undefined, value);
		}
	}


	jQuery.extend({
		Deferred : function(func) {
			var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    state = "pending",
			    promise = {
				state : function() {
					return state;
				},
				always : function() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch" : function(fn) {
					return promise.then(null, fn);
				},
				pipe : function() {
					var fns = arguments;
					return jQuery.Deferred(function(newDefer) {
						jQuery.each(tuples, function(i, tuple) {
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
							deferred[tuple[1]](function() {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0]+"With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then : function(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function() {
							var that = this,
							    args =
							    arguments,
							    mightThrow = function() {
								var returned,
								    then;
								if (depth < maxDepth) {
									return;
								}
								returned = handler.apply(that, args);
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}
								then = returned && ( typeof returned === "object" || typeof returned === "function") && returned.then;
								if (jQuery.isFunction(then)) {
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
									} else {
										maxDepth++;
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}
								} else {
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}
									(special || deferred.resolveWith)(that, args);
								}
							},
							    process = special ? mightThrow : function() {
								try {
									mightThrow();
								} catch(e) {
									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}
									if (depth + 1 >= maxDepth) {
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}
										deferred.rejectWith(that, args);
									}
								}
							};
							if (depth) {
								process();
							} else {
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function(newDefer) {
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},
				promise : function(obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			},
			    deferred = {};
			jQuery.each(tuples, function(i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];
				promise[tuple[1]] = list.add;
				if (stateString) {
					list.add(function() {
						state = stateString;
					}, tuples[3-i][2].disable, tuples[0][2].lock);
				}
				list.add(tuple[3].fire);
				deferred[tuple[0]] = function() {
					deferred[tuple[0]+"With"](this === deferred ? undefined : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});
			promise.promise(deferred);
			if (func) {
				func.call(deferred, deferred);
			}
			return deferred;
		},
		when : function(singleValue) {
			var remaining = arguments.length,
			    i =
			    remaining,
			    resolveContexts = Array(i),
			    resolveValues = slice.call(arguments),
			    master = jQuery.Deferred(),
			    updateFunc = function(i) {
				return function(value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
					if (!(--remaining)) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
					return master.then();
				}
			}
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}
			return master.promise();
		}
	});
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	jQuery.Deferred.exceptionHook = function(error, stack) {
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};
	jQuery.readyException = function(error) {
		window.setTimeout(function() {
			throw error;
		});
	};
	var readyList = jQuery.Deferred();
	jQuery.fn.ready = function(fn) {
		readyList.then(fn).catch(function(error) {
			jQuery.readyException(error);
		});
		return this;
	};
	jQuery.extend({
		isReady : false,
		readyWait : 1,
		holdReady : function(hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},
		ready : function(wait) {
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}
			jQuery.isReady = true;
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}
			readyList.resolveWith(document, [jQuery]);
		}
	});
	jQuery.ready.then = readyList.then;
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
		window.setTimeout(jQuery.ready);
	} else {
		document.addEventListener("DOMContentLoaded", completed);
		window.addEventListener("load", completed);
	}
	var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}
		} else if (value !== undefined) {
			chainable = true;
			if (!jQuery.isFunction(value)) {
				raw = true;
			}
			if (bulk) {
				if (raw) {
					fn.call(elems, value);
					fn = null;
				} else {
					bulk = fn;
					fn = function(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}
			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}
		return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function(owner) {
		return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
	};
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}


	Data.uid = 1;
	Data.prototype = {
		cache : function(owner) {
			var value = owner[this.expando];
			if (!value) {
				value = {};
				if (acceptData(owner)) {
					if (owner.nodeType) {
						owner[this.expando] = value;
					} else {
						Object.defineProperty(owner, this.expando, {
							value : value,
							configurable : true
						});
					}
				}
			}
			return value;
		},
		set : function(owner, data, value) {
			var prop,
			    cache = this.cache(owner);
			if ( typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;
			} else {
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get : function(owner, key) {
			return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access : function(owner, key, value) {
			if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
				return this.get(owner, key);
			}
			this.set(owner, key, value);
			return value !== undefined ? value : key;
		},
		remove : function(owner, key) {
			var i,
			    cache = owner[this.expando];
			if (cache === undefined) {
				return;
			}
			if (key !== undefined) {
				if (jQuery.isArray(key)) {
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);
					key = key in cache ? [key] : (key.match(rnotwhite) || []);
				}
				i = key.length;
				while (i--) {
					delete cache[key[i]];
				}
			}
			if (key === undefined || jQuery.isEmptyObject(cache)) {
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData : function(owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();
	var dataUser = new Data();
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;
	function dataAttr(elem, key, data) {
		var name;
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);
			if ( typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? JSON.parse(data) : data;
				} catch(e) {
				}
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}


	jQuery.extend({
		hasData : function(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},
		data : function(elem, name, data) {
			return dataUser.access(elem, name, data);
		},
		removeData : function(elem, name) {
			dataUser.remove(elem, name);
		},
		_data : function(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},
		_removeData : function(elem, name) {
			dataPriv.remove(elem, name);
		}
	});
	jQuery.fn.extend({
		data : function(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);
					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}
				return data;
			}
			if ( typeof key === "object") {
				return this.each(function() {
					dataUser.set(this, key);
				});
			}
			return access(this, function(value) {
				var data;
				if (elem && value === undefined) {
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}
					return;
				}
				this.each(function() {
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},
		removeData : function(key) {
			return this.each(function() {
				dataUser.remove(this, key);
			});
		}
	});
	jQuery.extend({
		queue : function(elem, type, data) {
			var queue;
			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},
		dequeue : function(elem, type) {
			type = type || "fx";
			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function() {
				jQuery.dequeue(elem, type);
			};
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}
			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}
			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},
		_queueHooks : function(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty : jQuery.Callbacks("once memory").add(function() {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});
	jQuery.fn.extend({
		queue : function(type, data) {
			var setter = 2;
			if ( typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}
			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}
			return data === undefined ? this : this.each(function() {
				var queue = jQuery.queue(this, type, data);
				jQuery._queueHooks(this, type);
				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue : function(type) {
			return this.each(function() {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue : function(type) {
			return this.queue(type || "fx", []);
		},
		promise : function(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function() {
				if (!(--count)) {
					defer.resolveWith(elements, [elements]);
				}
			};
			if ( typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
	var cssExpand = ["Top", "Right", "Bottom", "Left"];
	var isHiddenWithinTree = function(elem, el) {
		elem = el || elem;
		return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};
	var swap = function(elem, options, callback, args) {
		var ret,
		    name,
		    old = {};
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}
		ret = callback.apply(elem, args || []);
		for (name in options) {
			elem.style[name] = old[name];
		}
		return ret;
	};
	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function() {
			return tween.cur();
		} : function() {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
		    initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
		if (initialInUnit && initialInUnit[3] !== unit) {
			unit = unit || initialInUnit[3];
			valueParts = valueParts || [];
			initialInUnit = +initial || 1;
			do {
				scale = scale || ".5";
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);
			} while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);
		}
		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};
	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];
		if (display) {
			return display;
		}
		temp = doc.body.appendChild(doc.createElement(nodeName)),
		display = jQuery.css(temp, "display");
		temp.parentNode.removeChild(temp);
		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;
		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			display = elem.style.display;
			if (show) {
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";
					dataPriv.set(elem, "display", display);
				}
			}
		}
		for ( index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}
		return elements;
	}


	jQuery.fn.extend({
		show : function() {
			return showHide(this, true);
		},
		hide : function() {
			return showHide(this);
		},
		toggle : function(state) {
			if ( typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}
			return this.each(function() {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
	var rscriptType = (/^$|\/(?:java|ecma)script/i);
	var wrapMap = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		thead : [1, "<table>", "</table>"],
		col : [2, "<table><colgroup>", "</colgroup></table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default : [0, "", ""]
	};
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	function getAll(context, tag) {
		var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : [];
		return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
	}

	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;
		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;
	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;
		for (; i < l; i++) {
			elem = elems[i];
			if (elem || elem === 0) {
				if (jQuery.type(elem) === "object") {
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));
					tag = (rtagName.exec(elem)||["",""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}
					jQuery.merge(nodes, tmp.childNodes);
					tmp = fragment.firstChild;
					tmp.textContent = "";
				}
			}
		}
		fragment.textContent = "";
		i = 0;
		while (( elem = nodes[i++])) {
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}
			contains = jQuery.contains(elem.ownerDocument, elem);
			tmp = getAll(fragment.appendChild(elem), "script");
			if (contains) {
				setGlobalEval(tmp);
			}
			if (scripts) {
				j = 0;
				while (( elem = tmp[j++])) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}
		return fragment;
	}

	(function() {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");
		div.appendChild(input);
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;
	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch(err) {
		}
	}

	function on(elem, types, selector, data, fn, one) {
		var origFn,
		    type;
		if ( typeof types === "object") {
			if ( typeof selector !== "string") {
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}
		if (data == null && fn == null) {
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if ( typeof selector === "string") {
				fn = data;
				data = undefined;
			} else {
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}
		if (one === 1) {
			origFn = fn;
			fn = function(event) {
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function() {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}


	jQuery.event = {
		global : {},
		add : function(elem, types, handler, data, selector) {
			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);
			if (!elemData) {
				return;
			}
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}
			if (!( events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!( eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function(e) {
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();
				if (!type) {
					continue;
				}
				special = jQuery.event.special[type] || {};
				type = ( selector ? special.delegateType : special.bindType) || type;
				special = jQuery.event.special[type] || {};
				handleObj = jQuery.extend({
					type : type,
					origType : origType,
					data : data,
					handler : handler,
					guid : handler.guid,
					selector : selector,
					needsContext : selector && jQuery.expr.match.needsContext.test(selector),
					namespace : namespaces.join(".")
				}, handleObjIn);
				if (!( handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}
				if (special.add) {
					special.add.call(elem, handleObj);
					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}
				jQuery.event.global[type] = true;
			}
		},
		remove : function(elem, types, handler, selector, mappedTypes) {
			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
			if (!elemData || !( events = elemData.events)) {
				return;
			}
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}
				special = jQuery.event.special[type] || {};
				type = ( selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];
					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);
						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}
					delete events[type];
				}
			}
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},
		dispatch : function(nativeEvent) {
			var event = jQuery.event.fix(nativeEvent);
			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this,"events")||{})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};
			args[0] = event;
			for ( i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}
			event.delegateTarget = this;
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);
			i = 0;
			while (( matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;
				j = 0;
				while (( handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
						event.handleObj = handleObj;
						event.data = handleObj.data;
						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}
			return event.result;
		},
		handlers : function(event, handlers) {
			var i,
			    matches,
			    sel,
			    handleObj,
			    handlerQueue = [],
			    delegateCount = handlers.delegateCount,
			    cur = event.target;
			if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
				for (; cur !== this; cur = cur.parentNode || this) {
					if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
						matches = [];
						for ( i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];
							sel = handleObj.selector + " ";
							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({
								elem : cur,
								handlers : matches
							});
						}
					}
				}
			}
			if (delegateCount < handlers.length) {
				handlerQueue.push({
					elem : this,
					handlers : handlers.slice(delegateCount)
				});
			}
			return handlerQueue;
		},
		addProp : function(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable : true,
				configurable : true,
				get : jQuery.isFunction(hook) ? function() {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function() {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},
				set : function(value) {
					Object.defineProperty(this, name, {
						enumerable : true,
						configurable : true,
						writable : true,
						value : value
					});
				}
			});
		},
		fix : function(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},
		special : {
			load : {
				noBubble : true
			},
			focus : {
				trigger : function() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType : "focusin"
			},
			blur : {
				trigger : function() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType : "focusout"
			},
			click : {
				trigger : function() {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
						this.click();
						return false;
					}
				},
				_default : function(event) {
					return jQuery.nodeName(event.target, "a");
				}
			},
			beforeunload : {
				postDispatch : function(event) {
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	jQuery.removeEvent = function(elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};
	jQuery.Event = function(src, props) {
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
			this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
		} else {
			this.type = src;
		}
		if (props) {
			jQuery.extend(this, props);
		}
		this.timeStamp = src && src.timeStamp || jQuery.now();
		this[jQuery.expando] = true;
	};
	jQuery.Event.prototype = {
		constructor : jQuery.Event,
		isDefaultPrevented : returnFalse,
		isPropagationStopped : returnFalse,
		isImmediatePropagationStopped : returnFalse,
		isSimulated : false,
		preventDefault : function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = returnTrue;
			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation : function() {
			var e = this.originalEvent;
			this.isPropagationStopped = returnTrue;
			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation : function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = returnTrue;
			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}
			this.stopPropagation();
		}
	};
	jQuery.each({
		altKey : true,
		bubbles : true,
		cancelable : true,
		changedTouches : true,
		ctrlKey : true,
		detail : true,
		eventPhase : true,
		metaKey : true,
		pageX : true,
		pageY : true,
		shiftKey : true,
		view : true,
		"char" : true,
		charCode : true,
		key : true,
		keyCode : true,
		button : true,
		buttons : true,
		clientX : true,
		clientY : true,
		offsetX : true,
		offsetY : true,
		pointerId : true,
		pointerType : true,
		screenX : true,
		screenY : true,
		targetTouches : true,
		toElement : true,
		touches : true,
		which : function(event) {
			var button = event.button;
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				return (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
			}
			return event.which;
		}
	}, jQuery.event.addProp);
	jQuery.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout",
		pointerenter : "pointerover",
		pointerleave : "pointerout"
	}, function(orig, fix) {
		jQuery.event.special[orig] = {
			delegateType : fix,
			bindType : fix,
			handle : function(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;
				if (!related || (related !== target && !jQuery.contains(target, related))) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});
	jQuery.fn.extend({
		on : function(types, selector, data, fn) {
			return on(this, types, selector, data, fn);
		},
		one : function(types, selector, data, fn) {
			return on(this, types, selector, data, fn, 1);
		},
		off : function(types, selector, fn) {
			var handleObj,
			    type;
			if (types && types.preventDefault && types.handleObj) {
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ( typeof types === "object") {
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});
	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	    rnoInnerhtml = /<script|<style|<link/i,
	    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	function manipulationTarget(elem, content) {
		if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
			return elem.getElementsByTagName("tbody")[0] || elem;
		}
		return elem;
	}

	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}

	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);
		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}
		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i,
		    l,
		    type,
		    pdataOld,
		    pdataCur,
		    udataOld,
		    udataCur,
		    events;
		if (dest.nodeType !== 1) {
			return;
		}
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;
			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};
				for (type in events) {
					for ( i = 0,
					l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);
			dataUser.set(dest, udataCur);
		}
	}

	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {
		args = concat.apply([], args);
		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);
		if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
			return collection.each(function(index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}
		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;
			if (fragment.childNodes.length === 1) {
				fragment = first;
			}
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;
				for (; i < l; i++) {
					node = fragment;
					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);
						if (hasScripts) {
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}
					callback.call(collection[i], node, i);
				}
				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;
					jQuery.map(scripts, restoreScript);
					for ( i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
							if (node.src) {
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}
		return collection;
	}

	function remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;
		for (; ( node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}
			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}
		return elem;
	}


	jQuery.extend({
		htmlPrefilter : function(html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},
		clone : function(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
				destElements = getAll(clone);
				srcElements = getAll(elem);
				for ( i = 0,
				l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);
					for ( i = 0,
					l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}
			return clone;
		},
		cleanData : function(elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;
			for (; ( elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (( data = elem[dataPriv.expando])) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});
	jQuery.fn.extend({
		detach : function(selector) {
			return remove(this, selector, true);
		},
		remove : function(selector) {
			return remove(this, selector);
		},
		text : function(value) {
			return access(this, function(value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function() {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},
		append : function() {
			return domManip(this, arguments, function(elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},
		prepend : function() {
			return domManip(this, arguments, function(elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},
		before : function() {
			return domManip(this, arguments, function(elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},
		after : function() {
			return domManip(this, arguments, function(elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},
		empty : function() {
			var elem,
			    i = 0;
			for (; ( elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem, false));
					elem.textContent = "";
				}
			}
			return this;
		},
		clone : function(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
			return this.map(function() {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},
		html : function(value) {
			return access(this, function(value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;
				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}
				if ( typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]) {
					value = jQuery.htmlPrefilter(value);
					try {
						for (; i < l; i++) {
							elem = this[i] || {};
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}
						elem = 0;
					} catch(e) {
					}
				}
				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},
		replaceWith : function() {
			var ignored = [];
			return domManip(this, arguments, function(elem) {
				var parent = this.parentNode;
				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}
			}, ignored);
		}
	});
	jQuery.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function(name, original) {
		jQuery.fn[name] = function(selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;
			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);
				push.apply(ret, elems.get());
			}
			return this.pushStack(ret);
		};
	});
	var rmargin = (/^margin/);
	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	var getStyles = function(elem) {
		var view = elem.ownerDocument.defaultView;
		if (!view || !view.opener) {
			view = window;
		}
		return view.getComputedStyle(elem);
	};
	(function() {
		function computeStyleTests() {
			if (!div) {
				return;
			}
			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);
			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
			documentElement.removeChild(container);
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");
		if (!div.style) {
			return;
		}
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);
		jQuery.extend(support, {
			pixelPosition : function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable : function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight : function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft : function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();
	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,
		    style = elem.style;
		computed = computed || getStyles(elem);
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];
			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
		return ret !== undefined ? ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {
		return {
			get : function() {
				if (conditionFn()) {
					delete this.get;
					return;
				}
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    cssShow = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	    cssNormalTransform = {
		letterSpacing : "0",
		fontWeight : "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;
	function vendorPropName(name) {
		if ( name in emptyStyle) {
			return name;
		}
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;
		while (i--) {
			name = cssPrefixes[i] + capName;
			if ( name in emptyStyle) {
				return name;
			}
		}
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rcssNum.exec(value);
		return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === ( isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
		    val = 0;
		for (; i < 4; i += 2) {
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}
			if (isBorderBox) {
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}
		return val;
	}

	function getWidthOrHeight(elem, name, extra) {
		var val,
		    valueIsBorderBox = true,
		    styles = getStyles(elem),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
		if (elem.getClientRects().length) {
			val = elem.getBoundingClientRect()[name];
		}
		if (val <= 0 || val == null) {
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}
			if (rnumnonpx.test(val)) {
				return val;
			}
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
			val = parseFloat(val) || 0;
		}
		return (val + augmentWidthOrHeight(elem, name, extra || ( isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
	}


	jQuery.extend({
		cssHooks : {
			opacity : {
				get : function(elem, computed) {
					if (computed) {
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
		cssNumber : {
			"animationIterationCount" : true,
			"columnCount" : true,
			"fillOpacity" : true,
			"flexGrow" : true,
			"flexShrink" : true,
			"fontWeight" : true,
			"lineHeight" : true,
			"opacity" : true,
			"order" : true,
			"orphans" : true,
			"widows" : true,
			"zIndex" : true,
			"zoom" : true
		},
		cssProps : {
			"float" : "cssFloat"
		},
		style : function(elem, name, value, extra) {
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
			if (value !== undefined) {
				type = typeof value;
				if (type === "string" && ( ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);
					type = "number";
				}
				if (value == null || value !== value) {
					return;
				}
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}
				if (!hooks || !("set" in hooks) || ( value = hooks.set(elem, value, extra)) !== undefined) {
					style[name] = value;
				}
			} else {
				if (hooks && "get" in hooks && ( ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}
				return style[name];
			}
		},
		css : function(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name);
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}
			return val;
		}
	});
	jQuery.each(["height", "width"], function(i, name) {
		jQuery.cssHooks[name] = {
			get : function(elem, computed, extra) {
				if (computed) {
					return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},
			set : function(elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
				if (subtract && ( matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}
				return setPositiveNumber(elem, value, subtract);
			}
		};
	});
	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
				marginLeft : 0
			}, function() {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});
	jQuery.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function(prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand : function(value) {
				var i = 0,
				    expanded = {},
				    parts = typeof value === "string" ? value.split(" ") : [value];
				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}
				return expanded;
			}
		};
		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});
	jQuery.fn.extend({
		css : function(name, value) {
			return access(this, function(elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;
				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;
					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}
					return map;
				}
				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});
	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}


	jQuery.Tween = Tween;
	Tween.prototype = {
		constructor : Tween,
		init : function(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur : function() {
			var hooks = Tween.propHooks[this.prop];
			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run : function(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];
			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}
			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};
	Tween.prototype.init.prototype = Tween.prototype;
	Tween.propHooks = {
		_default : {
			get : function(tween) {
				var result;
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}
				result = jQuery.css(tween.elem, tween.prop, "");
				return !result || result === "auto" ? 0 : result;
			},
			set : function(tween) {
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set : function(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};
	jQuery.easing = {
		linear : function(p) {
			return p;
		},
		swing : function(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default : "swing"
	};
	jQuery.fx = Tween.prototype.init;
	jQuery.fx.step = {};
	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;
	function raf() {
		if (timerId) {
			window.requestAnimationFrame(raf);
			jQuery.fx.tick();
		}
	}

	function createFxNow() {
		window.setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now());
	}

	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = {
			height : type
		};
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}
		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}
		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (( tween = collection[index].call(animation, prop, value))) {
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
			anim.always(function() {
				anim.always(function() {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === ( hidden ? "hide" : "show")) {
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}
		if (isBox && elem.nodeType === 1) {
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {
					if (!propTween) {
						anim.done(function() {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}
		propTween = false;
		for (prop in orig) {
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", {
						display : restoreDisplay
					});
				}
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					showHide([elem], true);
				}
				anim.done(function() {
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}
			propTween = createTween( hidden ? dataShow[prop] : 0, prop, anim);
			if (!( prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index,
		    name,
		    easing,
		    value,
		    hooks;
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}
			if (index !== name) {
				props[name] = value;
				delete props[index];
			}
			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];
				for (index in value) {
					if (!( index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function() {
			delete tick.elem;
		}),
		    tick = function() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
			    temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;
			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}
			deferred.notifyWith(elem, [animation, percent, remaining]);
			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem : elem,
			props : jQuery.extend({}, properties),
			opts : jQuery.extend(true, {
				specialEasing : {},
				easing : jQuery.easing._default
			}, options),
			originalProperties : properties,
			originalOptions : options,
			startTime : fxNow || createFxNow(),
			duration : options.duration,
			tweens : [],
			createTween : function(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop : function(gotoEnd) {
				var index = 0,
				    length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;
		propFilter(props, animation.opts.specialEasing);
		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}
		jQuery.map(props, createTween, animation);
		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}
		jQuery.fx.timer(jQuery.extend(tick, {
			elem : elem,
			anim : animation,
			queue : animation.opts.queue
		}));
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}


	jQuery.Animation = jQuery.extend(Animation, {
		tweeners : {
			"*" : [
			function(prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]

		},
		tweener : function(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnotwhite);
			}
			var prop,
			    index = 0,
			    length = props.length;
			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},
		prefilters : [defaultPrefilter],
		prefilter : function(callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});
	jQuery.speed = function(speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete : fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration : speed,
			easing : fn && easing || easing && !jQuery.isFunction(easing) && easing
		};
		if (jQuery.fx.off || document.hidden) {
			opt.duration = 0;
		} else {
			opt.duration = typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
		}
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}
		opt.old = opt.complete;
		opt.complete = function() {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}
			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};
		return opt;
	};
	jQuery.fn.extend({
		fadeTo : function(speed, to, easing, callback) {
			return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
				opacity : to
			}, speed, easing, callback);
		},
		animate : function(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function() {
				var anim = Animation(this, jQuery.extend({}, prop), optall);
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;
			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop : function(type, clearQueue, gotoEnd) {
			var stopQueue = function(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};
			if ( typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}
			return this.each(function() {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);
				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}
				for ( index = timers.length; index--; ) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish : function(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;
				data.finish = true;
				jQuery.queue(this, type, []);
				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}
				for ( index = timers.length; index--; ) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}
				for ( index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}
				delete data.finish;
			});
		}
	});
	jQuery.each(["toggle", "show", "hide"], function(i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function(speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});
	jQuery.each({
		slideDown : genFx("show"),
		slideUp : genFx("hide"),
		slideToggle : genFx("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function(name, props) {
		jQuery.fn[name] = function(speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
		    i = 0,
		    timers = jQuery.timers;
		fxNow = jQuery.now();
		for (; i < timers.length; i++) {
			timer = timers[i];
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}
		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	jQuery.fx.timer = function(timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if (!timerId) {
			timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};
	jQuery.fx.stop = function() {
		if (window.cancelAnimationFrame) {
			window.cancelAnimationFrame(timerId);
		} else {
			window.clearInterval(timerId);
		}
		timerId = null;
	};
	jQuery.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	};
	jQuery.fn.delay = function(time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";
		return this.queue(type, function(next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function() {
				window.clearTimeout(timeout);
			};
		});
	};
	(function() {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));
		input.type = "checkbox";
		support.checkOn = input.value !== "";
		support.optSelected = opt.selected;
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();
	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;
	jQuery.fn.extend({
		attr : function(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},
		removeAttr : function(name) {
			return this.each(function() {
				jQuery.removeAttr(this, name);
			});
		}
	});
	jQuery.extend({
		attr : function(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}
			if ( typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}
			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}
				if (hooks && "set" in hooks && ( ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}
				elem.setAttribute(name, value + "");
				return value;
			}
			if (hooks && "get" in hooks && ( ret = hooks.get(elem, name)) !== null) {
				return ret;
			}
			ret = jQuery.find.attr(elem, name);
			return ret == null ? undefined : ret;
		},
		attrHooks : {
			type : {
				set : function(elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
		removeAttr : function(elem, value) {
			var name,
			    i = 0,
			    attrNames = value && value.match(rnotwhite);
			if (attrNames && elem.nodeType === 1) {
				while (( name = attrNames[i++])) {
					elem.removeAttribute(name);
				}
			}
		}
	});
	boolHook = {
		set : function(elem, value, name) {
			if (value === false) {
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;
		attrHandle[name] = function(elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();
			if (!isXML) {
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});
	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;
	jQuery.fn.extend({
		prop : function(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},
		removeProp : function(name) {
			return this.each(function() {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});
	jQuery.extend({
		prop : function(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}
			if (value !== undefined) {
				if (hooks && "set" in hooks && ( ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}
				return (elem[name] = value);
			}
			if (hooks && "get" in hooks && ( ret = hooks.get(elem, name)) !== null) {
				return ret;
			}
			return elem[name];
		},
		propHooks : {
			tabIndex : {
				get : function(elem) {
					var tabindex = jQuery.find.attr(elem, "tabindex");
					return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
				}
			}
		},
		propFix : {
			"for" : "htmlFor",
			"class" : "className"
		}
	});
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get : function(elem) {
				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex
				}
				return null;
			},
			set : function(elem) {
				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex
					if (parent.parentNode) {
						parent.parentNode.selectedIndex
					}
				}
			}
		};
	}
	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		jQuery.propFix[this.toLowerCase()] = this;
	});
	var rclass = /[\t\r\n\f]/g;
	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}


	jQuery.fn.extend({
		addClass : function(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;
			if (jQuery.isFunction(value)) {
				return this.each(function(j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}
			if ( typeof value === "string" && value) {
				classes = value.match(rnotwhite) || [];
				while (( elem = this[i++])) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
					if (cur) {
						j = 0;
						while (( clazz = classes[j++])) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}
						finalValue = jQuery.trim(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}
			return this;
		},
		removeClass : function(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;
			if (jQuery.isFunction(value)) {
				return this.each(function(j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}
			if (!arguments.length) {
				return this.attr("class", "");
			}
			if ( typeof value === "string" && value) {
				classes = value.match(rnotwhite) || [];
				while (( elem = this[i++])) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
					if (cur) {
						j = 0;
						while (( clazz = classes[j++])) {
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}
						finalValue = jQuery.trim(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}
			return this;
		},
		toggleClass : function(value, stateVal) {
			var type = typeof value;
			if ( typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}
			if (jQuery.isFunction(value)) {
				return this.each(function(i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}
			return this.each(function() {
				var className,
				    i,
				    self,
				    classNames;
				if (type === "string") {
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnotwhite) || [];
					while (( className = classNames[i++])) {
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {
						dataPriv.set(this, "__className__", className);
					}
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},
		hasClass : function(selector) {
			var className,
			    elem,
			    i = 0;
			className = " " + selector + " ";
			while (( elem = this[i++])) {
				if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
					return true;
				}
			}
			return false;
		}
	});
	var rreturn = /\r/g,
	    rspaces = /[\x20\t\r\n\f]+/g;
	jQuery.fn.extend({
		val : function(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];
			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
					if (hooks && "get" in hooks && ( ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}
					ret = elem.value;
					return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
				}
				return;
			}
			isFunction = jQuery.isFunction(value);
			return this.each(function(i) {
				var val;
				if (this.nodeType !== 1) {
					return;
				}
				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}
				if (val == null) {
					val = "";
				} else if ( typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function(value) {
						return value == null ? "" : value + "";
					});
				}
				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});
	jQuery.extend({
		valHooks : {
			option : {
				get : function(elem) {
					var val = jQuery.find.attr(elem, "value");
					return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
				}
			},
			select : {
				get : function(elem) {
					var value,
					    option,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length,
					    i = index < 0 ? max : one ? index : 0;
					for (; i < max; i++) {
						option = options[i];
						if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
							value = jQuery(option).val();
							if (one) {
								return value;
							}
							values.push(value);
						}
					}
					return values;
				},
				set : function(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;
					while (i--) {
						option = options[i];
						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}
					}
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});
	jQuery.each(["radio", "checkbox"], function() {
		jQuery.valHooks[this] = {
			set : function(elem, value) {
				if (jQuery.isArray(value)) {
					return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function(elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	jQuery.extend(jQuery.event, {
		trigger : function(event, data, elem, onlyHandlers) {
			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
			cur = tmp = elem = elem || document;
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}
			if (type.indexOf(".") > -1) {
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}
			data = data == null ? [event] : jQuery.makeArray(data, [event]);
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}
			i = 0;
			while (( cur = eventPath[i++]) && !event.isPropagationStopped()) {
				event.type = i > 1 ? bubbleType : special.bindType || type;
				handle = (dataPriv.get(cur,"events")||{})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
			if (!onlyHandlers && !event.isDefaultPrevented()) {
				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
						tmp = elem[ontype];
						if (tmp) {
							elem[ontype] = null;
						}
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;
						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}
			return event.result;
		},
		simulate : function(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type : type,
				isSimulated : true
			});
			jQuery.event.trigger(e, null, elem);
		}
	});
	jQuery.fn.extend({
		trigger : function(type, data) {
			return this.each(function() {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler : function(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});
	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
		jQuery.fn[name] = function(data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});
	jQuery.fn.extend({
		hover : function(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});
	support.focusin = "onfocusin" in window;
	if (!support.focusin) {
		jQuery.each({
			focus : "focusin",
			blur : "focusout"
		}, function(orig, fix) {
			var handler = function(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};
			jQuery.event.special[fix] = {
				setup : function() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);
					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown : function() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;
					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;
	var nonce = jQuery.now();
	var rquery = (/\?/);
	jQuery.parseXML = function(data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}
		try {
			xml = (new window.DOMParser()).parseFromString(data, "text/xml");
		} catch(e) {
			xml = undefined;
		}
		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};
	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;
	function buildParams(prefix, obj, traditional, add) {
		var name;
		if (jQuery.isArray(obj)) {
			jQuery.each(obj, function(i, v) {
				if (traditional || rbracket.test(prefix)) {
					add(prefix, v);
				} else {
					buildParams(prefix + "[" + ( typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			add(prefix, obj);
		}
	}


	jQuery.param = function(a, traditional) {
		var prefix,
		    s = [],
		    add = function(key, valueOrFunction) {
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};
		if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
			jQuery.each(a, function() {
				add(this.name, this.value);
			});
		} else {
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}
		return s.join("&");
	};
	jQuery.fn.extend({
		serialize : function() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray : function() {
			return this.map(function() {
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function() {
				var type = this.type;
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function(i, elem) {
				var val = jQuery(this).val();
				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
					return {
						name : elem.name,
						value : val.replace(rCRLF, "\r\n")
					};
				}) : {
					name : elem.name,
					value : val.replace(rCRLF, "\r\n")
				};
			}).get();
		}
	});
	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rts = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,
	    prefilters = {},
	    transports = {},
	    allTypes = "*/".concat("*"),
	    originAnchor = document.createElement("a");
	originAnchor.href = location.href;
	function addToPrefiltersOrTransports(structure) {
		return function(dataTypeExpression, func) {
			if ( typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
			if (jQuery.isFunction(func)) {
				while (( dataType = dataTypes[i++])) {
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
		var inspected = {},
		    seekingTransport = (structure === transports);
		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !( selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};
		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key]?target:(deep||(deep={})))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}
		return target;
	}

	function ajaxHandleResponses(s, jqXHR, responses) {
		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			finalDataType = finalDataType || firstDataType;
		}
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},
		    dataTypes = s.dataTypes.slice();
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}
		current = dataTypes.shift();
		while (current) {
			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}
			prev = current;
			current = dataTypes.shift();
			if (current) {
				if (current === "*") {
					current = prev;
				} else if (prev !== "*" && prev !== current) {
					conv = converters[prev + " " + current] || converters["* " + current];
					if (!conv) {
						for (conv2 in converters) {
							tmp = conv2.split(" ");
							if (tmp[1] === current) {
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									if (conv === true) {
										conv = converters[conv2];
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}
					if (conv !== true) {
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch(e) {
								return {
									state : "parsererror",
									error : conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
		return {
			state : "success",
			data : response
		};
	}


	jQuery.extend({
		active : 0,
		lastModified : {},
		etag : {},
		ajaxSettings : {
			url : location.href,
			type : "GET",
			isLocal : rlocalProtocol.test(location.protocol),
			global : true,
			processData : true,
			async : true,
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			accepts : {
				"*" : allTypes,
				text : "text/plain",
				html : "text/html",
				xml : "application/xml, text/xml",
				json : "application/json, text/javascript"
			},
			contents : {
				xml : /\bxml\b/,
				html : /\bhtml/,
				json : /\bjson\b/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText",
				json : "responseJSON"
			},
			converters : {
				"* text" : String,
				"text html" : true,
				"text json" : JSON.parse,
				"text xml" : jQuery.parseXML
			},
			flatOptions : {
				url : true,
				context : true
			}
		},
		ajaxSetup : function(target, settings) {
			return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
		},
		ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
		ajaxTransport : addToPrefiltersOrTransports(transports),
		ajax : function(url, options) {
			if ( typeof url === "object") {
				options = url;
				url = undefined;
			}
			options = options || {};
			var transport,
			    cacheURL,
			    responseHeadersString,
			    responseHeaders,
			    timeoutTimer,
			    urlAnchor,
			    completed,
			    fireGlobals,
			    i,
			    uncached,
			    s = jQuery.ajaxSetup({}, options),
			    callbackContext = s.context || s,
			    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
			    deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),
			    statusCode = s.statusCode || {},
			    requestHeaders = {},
			    requestHeadersNames = {},
			    strAbort = "canceled",
			    jqXHR = {
				readyState : 0,
				getResponseHeader : function(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (( match = rheaders.exec(responseHeadersString))) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},
				getAllResponseHeaders : function() {
					return completed ? responseHeadersString : null;
				},
				setRequestHeader : function(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},
				overrideMimeType : function(type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},
				statusCode : function(map) {
					var code;
					if (map) {
						if (completed) {
							jqXHR.always(map[jqXHR.status]);
						} else {
							for (code in map) {
								statusCode[code] = [statusCode[code], map[code]];
							}
						}
					}
					return this;
				},
				abort : function(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};
			deferred.promise(jqXHR);
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
			s.type = options.method || options.type || s.method || s.type;
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");
				try {
					urlAnchor.href = s.url;
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch(e) {
					s.crossDomain = true;
				}
			}
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
			if (completed) {
				return jqXHR;
			}
			fireGlobals = jQuery.event && s.global;
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}
			s.type = s.type.toUpperCase();
			s.hasContent = !rnoContent.test(s.type);
			cacheURL = s.url.replace(rhash, "");
			if (!s.hasContent) {
				uncached = s.url.slice(cacheURL.length);
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
					delete s.data;
				}
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rts, "");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
				}
				s.url = cacheURL + uncached;
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
				return jqXHR.abort();
			}
			strAbort = "abort";
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				if (completed) {
					return jqXHR;
				}
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout);
				}
				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch(e) {
					if (completed) {
						throw e;
					}
					done(-1, e);
				}
			}
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText =
				    nativeStatusText;
				if (completed) {
					return;
				}
				completed = true;
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}
				transport = undefined;
				responseHeadersString = headers || "";
				jqXHR.readyState = status > 0 ? 4 : 0;
				isSuccess = status >= 200 && status < 300 || status === 304;
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}
				response = ajaxConvert(s, response, jqXHR, isSuccess);
				if (isSuccess) {
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";
					} else if (status === 304) {
						statusText = "notmodified";
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}
				jqXHR.statusCode(statusCode);
				statusCode = undefined;
				if (fireGlobals) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					if (!(--jQuery.active)) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},
		getJSON : function(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},
		getScript : function(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});
	jQuery.each(["get", "post"], function(i, method) {
		jQuery[method] = function(url, data, callback, type) {
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
			return jQuery.ajax(jQuery.extend({
				url : url,
				type : method,
				dataType : type,
				data : data,
				success : callback
			}, jQuery.isPlainObject(url) && url));
		};
	});
	jQuery._evalUrl = function(url) {
		return jQuery.ajax({
			url : url,
			type : "GET",
			dataType : "script",
			cache : true,
			async : false,
			global : false,
			"throws" : true
		});
	};
	jQuery.fn.extend({
		wrapAll : function(html) {
			var wrap;
			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}
				wrap.map(function() {
					var elem = this;
					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}
					return elem;
				}).append(this);
			}
			return this;
		},
		wrapInner : function(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function(i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}
			return this.each(function() {
				var self = jQuery(this),
				    contents = self.contents();
				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},
		wrap : function(html) {
			var isFunction = jQuery.isFunction(html);
			return this.each(function(i) {
				jQuery(this).wrapAll( isFunction ? html.call(this, i) : html);
			});
		},
		unwrap : function(selector) {
			this.parent(selector).not("body").each(function() {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});
	jQuery.expr.pseudos.hidden = function(elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function(elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch(e) {
		}
	};
	var xhrSuccessStatus = {
		0 : 200,
		1223 : 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();
	support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
	support.ajax = xhrSupported = !!xhrSupported;
	jQuery.ajaxTransport(function(options) {
		var callback,
		    errorCallback;
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send : function(headers, complete) {
					var i,
					    xhr = options.xhr();
					xhr.open(options.type, options.url, options.async, options.username, options.password);
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}
					callback = function(type) {
						return function() {
							if (callback) {
								callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {
									if ( typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
										binary : xhr.response
									} : {
										text : xhr.responseText
									}, xhr.getAllResponseHeaders());
								}
							}
						};
					};
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback("error");
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
							if (xhr.readyState === 4) {
								window.setTimeout(function() {
									if (callback) {
										errorCallback();
									}
								});
							}
						};
					}
					callback = callback("abort");
					try {
						xhr.send(options.hasContent && options.data || null);
					} catch(e) {
						if (callback) {
							throw e;
						}
					}
				},
				abort : function() {
					if (callback) {
						callback();
					}
				}
			};
		}
	});
	jQuery.ajaxPrefilter(function(s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});
	jQuery.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /\b(?:java|ecma)script\b/
		},
		converters : {
			"text script" : function(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});
	jQuery.ajaxPrefilter("script", function(s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});
	jQuery.ajaxTransport("script", function(s) {
		if (s.crossDomain) {
			var script,
			    callback;
			return {
				send : function(_, complete) {
					script = jQuery("<script>").prop({
						charset : s.scriptCharset,
						src : s.url
					}).on("load error", callback = function(evt) {
						script.remove();
						callback = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});
					document.head.appendChild(script[0]);
				},
				abort : function() {
					if (callback) {
						callback();
					}
				}
			};
		}
	});
	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;
	jQuery.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function() {
			var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
			this[callback] = true;
			return callback;
		}
	});
	jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
		if (jsonProp || s.dataTypes[0] === "jsonp") {
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}
			s.converters["script json"] = function() {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};
			s.dataTypes[0] = "json";
			overwritten = window[callbackName];
			window[callbackName] = function() {
				responseContainer = arguments;
			};
			jqXHR.always(function() {
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);
				} else {
					window[callbackName] = overwritten;
				}
				if (s[callbackName]) {
					s.jsonpCallback = originalSettings.jsonpCallback;
					oldCallbacks.push(callbackName);
				}
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}
				responseContainer = overwritten = undefined;
			});
			return "script";
		}
	});
	support.createHTMLDocument = (function() {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	})();
	jQuery.parseHTML = function(data, context, keepScripts) {
		if ( typeof data !== "string") {
			return [];
		}
		if ( typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		var base,
		    parsed,
		    scripts;
		if (!context) {
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}
		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];
		if (parsed) {
			return [context.createElement(parsed[1])];
		}
		parsed = buildFragment([data], context, scripts);
		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}
		return jQuery.merge([], parsed.childNodes);
	};
	jQuery.fn.load = function(url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");
		if (off > -1) {
			selector = jQuery.trim(url.slice(off));
			url = url.slice(0, off);
		}
		if (jQuery.isFunction(params)) {
			callback = params;
			params = undefined;
		} else if (params && typeof params === "object") {
			type = "POST";
		}
		if (self.length > 0) {
			jQuery.ajax({
				url : url,
				type : type || "GET",
				dataType : "html",
				data : params
			}).done(function(responseText) {
				response = arguments;
				self.html( selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
			}).always(callback &&
			function(jqXHR, status) {
				self.each(function() {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}
		return this;
	};
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
		jQuery.fn[type] = function(fn) {
			return this.on(type, fn);
		};
	});
	jQuery.expr.pseudos.animated = function(elem) {
		return jQuery.grep(jQuery.timers, function(fn) {
			return elem === fn.elem;
		}).length;
	};
	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}


	jQuery.offset = {
		setOffset : function(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};
			if (position === "static") {
				elem.style.position = "relative";
			}
			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}
			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}
			if (options.top != null) {
				props.top = (options.top - curOffset.top) + curTop;
			}
			if (options.left != null) {
				props.left = (options.left - curOffset.left) + curLeft;
			}
			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};
	jQuery.fn.extend({
		offset : function(options) {
			if (arguments.length) {
				return options === undefined ? this : this.each(function(i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}
			var docElem,
			    win,
			    rect,
			    doc,
			    elem = this[0];
			if (!elem) {
				return;
			}
			if (!elem.getClientRects().length) {
				return {
					top : 0,
					left : 0
				};
			}
			rect = elem.getBoundingClientRect();
			if (rect.width || rect.height) {
				doc = elem.ownerDocument;
				win = getWindow(doc);
				docElem = doc.documentElement;
				return {
					top : rect.top + win.pageYOffset - docElem.clientTop,
					left : rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
			return rect;
		},
		position : function() {
			if (!this[0]) {
				return;
			}
			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = {
				top : 0,
				left : 0
			};
			if (jQuery.css(elem, "position") === "fixed") {
				offset = elem.getBoundingClientRect();
			} else {
				offsetParent = this.offsetParent();
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}
				parentOffset = {
					top : parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left : parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}
			return {
				top : offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left : offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},
		offsetParent : function() {
			return this.map(function() {
				var offsetParent = this.offsetParent;
				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			});
		}
	});
	jQuery.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function(method, prop) {
		var top = "pageYOffset" === prop;
		jQuery.fn[method] = function(val) {
			return access(this, function(elem, method, val) {
				var win = getWindow(elem);
				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}
				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});
	jQuery.each(["top", "left"], function(i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});
	jQuery.each({
		Height : "height",
		Width : "width"
	}, function(name, type) {
		jQuery.each({
			padding : "inner" + name,
			content : type,
			"" : "outer" + name
		}, function(defaultExtra, funcName) {
			jQuery.fn[funcName] = function(margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
				return access(this, function(elem, type, value) {
					var doc;
					if (jQuery.isWindow(elem)) {
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}
					if (elem.nodeType === 9) {
						doc = elem.documentElement;
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}
					return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});
	jQuery.fn.extend({
		bind : function(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind : function(types, fn) {
			return this.off(types, null, fn);
		},
		delegate : function(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate : function(selector, types, fn) {
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});
	jQuery.parseJSON = JSON.parse;
	if ( typeof define === "function" && define.amd) {
		define("jquery", [], function() {
			return jQuery;
		});
	}
	var _jQuery = window.jQuery,
	    _$ = window.$;
	jQuery.noConflict = function(deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}
		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}
		return jQuery;
	};
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}
	return jQuery;
});
+ function($) {
	'use strict';
	var Affix = function(element, options) {
		this.options = $.extend({}, Affix.DEFAULTS, options)
		this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))
		this.$element = $(element)
		this.affixed = this.unpin = this.pinnedOffset = null
		this.checkPosition()
	}
	Affix.VERSION = '3.2.0'
	Affix.RESET = 'affix affix-top affix-bottom'
	Affix.DEFAULTS = {
		offset : 0,
		target : window
	}
	Affix.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset)
			return this.pinnedOffset
		this.$element.removeClass(Affix.RESET).addClass('affix')
		var scrollTop = this.$target.scrollTop()
		var position = this.$element.offset()
		return (this.pinnedOffset = position.top - scrollTop)
	}
	Affix.prototype.checkPositionWithEventLoop = function() {
		setTimeout($.proxy(this.checkPosition, this), 1)
	}
	Affix.prototype.checkPosition = function() {
		if (!this.$element.is(':visible'))
			return
		var scrollHeight = $(document).height()
		var scrollTop = this.$target.scrollTop()
		var position = this.$element.offset()
		var offset = this.options.offset
		var offsetTop = offset.top
		var offsetBottom = offset.bottom
		if ( typeof offset != 'object')
			offsetBottom = offsetTop = offset
		if ( typeof offsetTop == 'function')
			offsetTop = offset.top(this.$element)
		if ( typeof offsetBottom == 'function')
			offsetBottom = offset.bottom(this.$element)
		var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' : offsetTop != null && (scrollTop <= offsetTop) ? 'top' : false
		if (this.affixed === affix)
			return
		if (this.unpin != null)
			this.$element.css('top', '')
		var affixType = 'affix' + ( affix ? '-' + affix : '')
		var e = $.Event(affixType + '.bs.affix')
		this.$element.trigger(e)
		if (e.isDefaultPrevented())
			return this.affixed = affix
		this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
		this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')))
		if (affix == 'bottom') {
			this.$element.offset({
				top : scrollHeight - this.$element.height() - offsetBottom
			})
		}
	}
	function Plugin(option) {
		return this.each(function() {
			var $this = $(this)
			var data = $this.data('bs.affix')
			var options = typeof option == 'object' && option
			if (!data)
				$this.data('bs.affix', ( data = new Affix(this, options)))
			if ( typeof option == 'string')
				data[option]()
		})
	}

	var old = $.fn.affix
	$.fn.affix = Plugin
	$.fn.affix.Constructor = Affix
	$.fn.affix.noConflict = function() {
		$.fn.affix = old
		return this
	}
	$(window).on('load', function() {
		$('[data-spy="affix"]').each(function() {
			var $spy = $(this)
			var data = $spy.data()
			data.offset = data.offset || {}
			if (data.offsetBottom)
				data.offset.bottom = data.offsetBottom
			if (data.offsetTop)
				data.offset.top = data.offsetTop
			Plugin.call($spy, data)
		})
	})
}(jQuery);
+ function($) {
	'use strict';
	var Tooltip = function(element, options) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null
		this.init('tooltip', element, options)
	}
	Tooltip.VERSION = '3.2.0'
	Tooltip.DEFAULTS = {
		animation : true,
		placement : 'top',
		selector : false,
		template : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger : 'hover focus',
		title : '',
		delay : 0,
		html : false,
		container : false,
		viewport : {
			selector : 'body',
			padding : 0
		}
	}
	Tooltip.prototype.init = function(type, element, options) {
		this.enabled = true
		this.type = type
		this.$element = $(element)
		this.options = this.getOptions(options)
		this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)
		var triggers = this.options.trigger.split(' ')
		for (var i = triggers.length; i--; ) {
			var trigger = triggers[i]
			if (trigger == 'click') {
				this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
			} else if (trigger != 'manual') {
				var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
				var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
				this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
				this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
			}
		}
		this.options.selector ? (this._options = $.extend({}, this.options, {
			trigger : 'manual',
			selector : ''
		})) : this.fixTitle()
	}
	Tooltip.prototype.getDefaults = function() {
		return Tooltip.DEFAULTS
	}
	Tooltip.prototype.getOptions = function(options) {
		options = $.extend({}, this.getDefaults(), this.$element.data(), options)
		if (options.delay && typeof options.delay == 'number') {
			options.delay = {
				show : options.delay,
				hide : options.delay
			}
		}
		return options
	}
	Tooltip.prototype.getDelegateOptions = function() {
		var options = {}
		var defaults = this.getDefaults()
		this._options && $.each(this._options, function(key, value) {
			if (defaults[key] != value)
				options[key] = value
		})
		return options
	}
	Tooltip.prototype.enter = function(obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
			$(obj.currentTarget).data('bs.' + this.type, self)
		}
		clearTimeout(self.timeout)
		self.hoverState = 'in'
		if (!self.options.delay || !self.options.delay.show)
			return self.show()
		self.timeout = setTimeout(function() {
			if (self.hoverState == 'in')
				self.show()
		}, self.options.delay.show)
	}
	Tooltip.prototype.leave = function(obj) {
		var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
			$(obj.currentTarget).data('bs.' + this.type, self)
		}
		clearTimeout(self.timeout)
		self.hoverState = 'out'
		if (!self.options.delay || !self.options.delay.hide)
			return self.hide()
		self.timeout = setTimeout(function() {
			if (self.hoverState == 'out')
				self.hide()
		}, self.options.delay.hide)
	}
	Tooltip.prototype.show = function() {
		var e = $.Event('show.bs.' + this.type)
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e)
			var inDom = $.contains(document.documentElement, this.$element[0])
			if (e.isDefaultPrevented() || !inDom)
				return
			var that = this
			var $tip = this.tip()
			var tipId = this.getUID(this.type)
			this.setContent()
			$tip.attr('id', tipId)
			this.$element.attr('aria-describedby', tipId)
			if (this.options.animation)
				$tip.addClass('fade')
			var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
			var autoToken = /\s?auto?\s?/i
			var autoPlace = autoToken.test(placement)
			if (autoPlace)
				placement = placement.replace(autoToken, '') || 'top'
			$tip.detach().css({
				top : 0,
				left : 0,
				display : 'block'
			}).addClass(placement).data('bs.' + this.type, this)
			this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
			var pos = this.getPosition()
			var actualWidth = $tip[0].offsetWidth
			var actualHeight = $tip[0].offsetHeight
			if (autoPlace) {
				var orgPlacement = placement
				var $parent = this.$element.parent()
				var parentDim = this.getPosition($parent)
				placement = placement == 'bottom' && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? 'top' : placement == 'top' && pos.top - parentDim.scroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < parentDim.left ? 'right' : placement
				$tip.removeClass(orgPlacement).addClass(placement)
			}
			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
			this.applyPlacement(calculatedOffset, placement)
			var complete = function() {
				that.$element.trigger('shown.bs.' + that.type)
				that.hoverState = null
			}
			$.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete()
		}
	}
	Tooltip.prototype.applyPlacement = function(offset, placement) {
		var $tip = this.tip()
		var width = $tip[0].offsetWidth
		var height = $tip[0].offsetHeight
		var marginTop = parseInt($tip.css('margin-top'), 10)
		var marginLeft = parseInt($tip.css('margin-left'), 10)
		if (isNaN(marginTop))
			marginTop = 0
		if (isNaN(marginLeft))
			marginLeft = 0
		offset.top = offset.top + marginTop
		offset.left = offset.left + marginLeft
		$.offset.setOffset($tip[0], $.extend({
			using : function(props) {
				$tip.css({
					top : Math.round(props.top),
					left : Math.round(props.left)
				})
			}
		}, offset), 0)
		$tip.addClass('in')
		var actualWidth = $tip[0].offsetWidth
		var actualHeight = $tip[0].offsetHeight
		if (placement == 'top' && actualHeight != height) {
			offset.top = offset.top + height - actualHeight
		}
		var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
		if (delta.left)
			offset.left += delta.left
		else
			offset.top += delta.top
		var arrowDelta = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
		var arrowPosition = delta.left ? 'left' : 'top'
		var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'
		$tip.offset(offset)
		this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
	}
	Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
		this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
	}
	Tooltip.prototype.setContent = function() {
		var $tip = this.tip()
		var title = this.getTitle()
		$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
		$tip.removeClass('fade in top bottom left right')
	}
	Tooltip.prototype.hide = function() {
		var that = this
		var $tip = this.tip()
		var e = $.Event('hide.bs.' + this.type)
		this.$element.removeAttr('aria-describedby')
		function complete() {
			if (that.hoverState != 'in')
				$tip.detach()
			that.$element.trigger('hidden.bs.' + that.type)
		}


		this.$element.trigger(e)
		if (e.isDefaultPrevented())
			return $tip.removeClass('in')
		$.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete()
		this.hoverState = null
		return this
	}
	Tooltip.prototype.fixTitle = function() {
		var $e = this.$element
		if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
			$e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
		}
	}
	Tooltip.prototype.hasContent = function() {
		return this.getTitle()
	}
	Tooltip.prototype.getPosition = function($element) {
		$element = $element || this.$element
		var el = $element[0]
		var isBody = el.tagName == 'BODY'
		return $.extend({}, ( typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
			scroll : isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
			width : isBody ? $(window).width() : $element.outerWidth(),
			height : isBody ? $(window).height() : $element.outerHeight()
		}, isBody ? {
			top : 0,
			left : 0
		} : $element.offset())
	}
	Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
		return placement == 'bottom' ? {
			top : pos.top + pos.height,
			left : pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'top' ? {
			top : pos.top - actualHeight,
			left : pos.left + pos.width / 2 - actualWidth / 2
		} : placement == 'left' ? {
			top : pos.top + pos.height / 2 - actualHeight / 2,
			left : pos.left - actualWidth
		} : {
			top : pos.top + pos.height / 2 - actualHeight / 2,
			left : pos.left + pos.width
		}
	}
	Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
		var delta = {
			top : 0,
			left : 0
		}
		if (!this.$viewport)
			return delta
		var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
		var viewportDimensions = this.getPosition(this.$viewport)
		if (/right|left/.test(placement)) {
			var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
			var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
			if (topEdgeOffset < viewportDimensions.top) {
				delta.top = viewportDimensions.top - topEdgeOffset
			} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
				delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
			}
		} else {
			var leftEdgeOffset = pos.left - viewportPadding
			var rightEdgeOffset = pos.left + viewportPadding + actualWidth
			if (leftEdgeOffset < viewportDimensions.left) {
				delta.left = viewportDimensions.left - leftEdgeOffset
			} else if (rightEdgeOffset > viewportDimensions.width) {
				delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
			}
		}
		return delta
	}
	Tooltip.prototype.getTitle = function() {
		var title
		var $e = this.$element
		var o = this.options
		title = $e.attr('data-original-title') || ( typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
		return title
	}
	Tooltip.prototype.getUID = function(prefix) {
		do
			prefix += ~~(Math.random() * 1000000)
		while(document.getElementById(prefix))
		return prefix
	}
	Tooltip.prototype.tip = function() {
		return (this.$tip = this.$tip || $(this.options.template))
	}
	Tooltip.prototype.arrow = function() {
		return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	}
	Tooltip.prototype.validate = function() {
		if (!this.$element[0].parentNode) {
			this.hide()
			this.$element = null
			this.options = null
		}
	}
	Tooltip.prototype.enable = function() {
		this.enabled = true
	}
	Tooltip.prototype.disable = function() {
		this.enabled = false
	}
	Tooltip.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}
	Tooltip.prototype.toggle = function(e) {
		var self = this
		if (e) {
			self = $(e.currentTarget).data('bs.' + this.type)
			if (!self) {
				self = new this.constructor(e.currentTarget, this.getDelegateOptions())
				$(e.currentTarget).data('bs.' + this.type, self)
			}
		}
		self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	}
	Tooltip.prototype.destroy = function() {
		clearTimeout(this.timeout)
		this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
	}
	function Plugin(option) {
		return this.each(function() {
			var $this = $(this)
			var data = $this.data('bs.tooltip')
			var options = typeof option == 'object' && option
			if (!data && option == 'destroy')
				return
			if (!data)
				$this.data('bs.tooltip', ( data = new Tooltip(this, options)))
			if ( typeof option == 'string')
				data[option]()
		})
	}

	var old = $.fn.tooltip
	$.fn.tooltip = Plugin
	$.fn.tooltip.Constructor = Tooltip
	$.fn.tooltip.noConflict = function() {
		$.fn.tooltip = old
		return this
	}
}(jQuery);
+ function($) {
	'use strict';
	var Popover = function(element, options) {
		this.init('popover', element, options)
	}
	if (!$.fn.tooltip)
		throw new Error('../courses.edraak.org/Popover%20requires%20tooltip.html')
	Popover.VERSION = '3.2.0'
	Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
		placement : 'right',
		trigger : 'click',
		content : '',
		template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	})
	Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
	Popover.prototype.constructor = Popover
	Popover.prototype.getDefaults = function() {
		return Popover.DEFAULTS
	}
	Popover.prototype.setContent = function() {
		var $tip = this.tip()
		var title = this.getTitle()
		var content = this.getContent()
		$tip.find('.popover-title')[this.options.html?'html':'text'](title)
		$tip.find('.popover-content').empty()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
		$tip.removeClass('fade top bottom left right in')
		if (!$tip.find('.popover-title').html())
			$tip.find('.popover-title').hide()
	}
	Popover.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}
	Popover.prototype.getContent = function() {
		var $e = this.$element
		var o = this.options
		return $e.attr('data-content') || ( typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
	}
	Popover.prototype.arrow = function() {
		return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	}
	Popover.prototype.tip = function() {
		if (!this.$tip)
			this.$tip = $(this.options.template)
		return this.$tip
	}
	function Plugin(option) {
		return this.each(function() {
			var $this = $(this)
			var data = $this.data('bs.popover')
			var options = typeof option == 'object' && option
			if (!data && option == 'destroy')
				return
			if (!data)
				$this.data('bs.popover', ( data = new Popover(this, options)))
			if ( typeof option == 'string')
				data[option]()
		})
	}

	var old = $.fn.popover
	$.fn.popover = Plugin
	$.fn.popover.Constructor = Popover
	$.fn.popover.noConflict = function() {
		$.fn.popover = old
		return this
	}
}(jQuery);
+ function($) {
	'use strict';
	var Collapse = function(element, options) {
		this.$element = $(element)
		this.options = $.extend({}, Collapse.DEFAULTS, options)
		this.transitioning = null
		if (this.options.parent)
			this.$parent = $(this.options.parent)
		if (this.options.toggle)
			this.toggle()
	}
	Collapse.VERSION = '3.2.0'
	Collapse.DEFAULTS = {
		toggle : true
	}
	Collapse.prototype.dimension = function() {
		var hasWidth = this.$element.hasClass('width')
		return hasWidth ? 'width' : 'height'
	}
	Collapse.prototype.show = function() {
		if (this.transitioning || this.$element.hasClass('in'))
			return
		var startEvent = $.Event('show.bs.collapse')
		this.$element.trigger(startEvent)
		if (startEvent.isDefaultPrevented())
			return
		var actives = this.$parent && this.$parent.find('> .panel > .in')
		if (actives && actives.length) {
			var hasData = actives.data('bs.collapse')
			if (hasData && hasData.transitioning)
				return Plugin.call(actives, 'hide')
			hasData || actives.data('bs.collapse', null)
		}
		var dimension = this.dimension()
		this.$element.removeClass('collapse').addClass('collapsing')[dimension](0)
		this.transitioning = 1
		var complete = function() {
			this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
			this.transitioning = 0
			this.$element.trigger('shown.bs.collapse')
		}
		if (!$.support.transition)
			return complete.call(this)
		var scrollSize = $.camelCase(['scroll', dimension].join('-'))
		this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
	}
	Collapse.prototype.hide = function() {
		if (this.transitioning || !this.$element.hasClass('in'))
			return
		var startEvent = $.Event('hide.bs.collapse')
		this.$element.trigger(startEvent)
		if (startEvent.isDefaultPrevented())
			return
		var dimension = this.dimension()
		this.$element[dimension](this.$element[dimension]())[0].offsetHeight
		this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
		this.transitioning = 1
		var complete = function() {
			this.transitioning = 0
			this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')
		}
		if (!$.support.transition)
			return complete.call(this)
		this.$element
		[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(350)
	}
	Collapse.prototype.toggle = function() {
		this[this.$element.hasClass('in')?'hide':'show']()
	}
	function Plugin(option) {
		return this.each(function() {
			var $this = $(this)
			var data = $this.data('bs.collapse')
			var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
			if (!data && options.toggle && option == 'show')
				option = !option
			if (!data)
				$this.data('bs.collapse', ( data = new Collapse(this, options)))
			if ( typeof option == 'string')
				data[option]()
		})
	}

	var old = $.fn.collapse
	$.fn.collapse = Plugin
	$.fn.collapse.Constructor = Collapse
	$.fn.collapse.noConflict = function() {
		$.fn.collapse = old
		return this
	}
	$(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
		var href
		var $this = $(this)
		var target = $this.attr('data-target') || e.preventDefault() || ( href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
		var $target = $(target)
		var data = $target.data('bs.collapse')
		var option = data ? 'toggle' : $this.data()
		var parent = $this.attr('data-parent')
		var $parent = parent && $(parent)
		if (!data || !data.transitioning) {
			if ($parent)
				$parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
			$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed')
		}
		Plugin.call($target, option)
	})
}(jQuery);
! function(e, n) {
	var o = e();
	e.fn.dropdownHover = function(t) {
		return "ontouchstart" in document ? this : ( o = o.add(this.parent()), this.each(function() {
			function r() {
				n.clearTimeout(a), n.clearTimeout(i),
				i = n.setTimeout(function() {
					o.find(":focus").blur(), f.instantlyCloseOthers === !0 && o.removeClass("open"), n.clearTimeout(i), d.attr("aria-expanded", "true"), s.addClass("open"), d.trigger(l)
				}, f.hoverDelay)
			}

			var a,
			    i,
			    d = e(this),
			    s = d.parent(),
			    u = {
				delay : 500,
				hoverDelay : 0,
				instantlyCloseOthers : !0
			},
			    h = {
				delay : e(this).data("delay"),
				hoverDelay : e(this).data("hover-delay"),
				instantlyCloseOthers : e(this).data("close-others")
			},
			    l = "show.bs.dropdown",
			    c = "hide.bs.dropdown",
			    f = e.extend(!0, {}, u, t, h);
			s.hover(function(e) {
				return s.hasClass("open") || d.is(e.target) ?
				void  r(e) : !0
			}, function() {
				n.clearTimeout(i),
				a = n.setTimeout(function() {
					d.attr("aria-expanded", "false"), s.removeClass("open"), d.trigger(c)
				}, f.delay)
			}), d.hover(function(e) {
				return s.hasClass("open") || s.is(e.target) ?
				void  r(e) : !0
			}), s.find(".dropdown-submenu").each(function() {
				var o,
				    t = e(this);
				t.hover(function() {
					n.clearTimeout(o), t.children(".dropdown-menu").show(), t.siblings().children(".dropdown-menu").hide()
				}, function() {
					var e = t.children(".dropdown-menu");
					o = n.setTimeout(function() {
						e.hide()
					}, f.delay)
				})
			})
		}))
	}, e(document).ready(function() {
		e('[data-hover="dropdown"]').dropdownHover()
	})
}(jQuery, window);
(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a)
					return a(o, !0);
				if (i)
					return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND", f
			}
			var l = n[o] = {
				exports : {}
			};
			t[o][0].call(l.exports, function(e) {
				var n = t[o][1][e];
				return s( n ? n : e)
			}, l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}

	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++)
		s(r[o]);
	return s
})({
	1 : [
	function(require, module, exports) {
		var throttle = require(4);
		module.exports = function(delay, atBegin, callback) {
			return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
		};
	}, {}],
	2 : [
	function(require, module, exports) {
		module.exports = {
			throttle : require(4),
			debounce : require(1)
		};
	}, {}],
	3 : [
	function(require, module, exports) {
		(function(global) {var package=
			require(2);
			var $ = ( typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null) || global;
			$.throttle=package.throttle;$.debounce=package.debounce;
		}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {}],
	4 : [
	function(require, module, exports) {
		(function(global) {
			var $ = ( typeof window !== "undefined" ? window.$ : typeof global !== "undefined" ? global.$ : null);
			module.exports = function(delay, noTrailing, callback, debounceMode) {
				var timeoutID;
				var lastExec = 0;
				if ( typeof (noTrailing) !== 'boolean') {
					debounceMode = callback;
					callback = noTrailing;
					noTrailing = undefined;
				}
				function wrapper() {
					var self = this;
					var elapsed = Number(new Date()) - lastExec;
					var args = arguments;
					function exec() {
						lastExec = Number(new Date());
						callback.apply(self, args);
					}

					function clear() {
						timeoutID = undefined;
					}

					if (debounceMode && !timeoutID) {
						exec();
					}
					if (timeoutID) {
						clearTimeout(timeoutID);
					}
					if (debounceMode === undefined && elapsed > delay) {
						exec();
					} else if (noTrailing !== true) {
						timeoutID = setTimeout( debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
					}
				}

				if ($ && $.guid) {
					wrapper.guid = callback.guid = callback.guid || $.guid++;
				}
				return wrapper;
			};
		}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	}, {}]
}, {}, [3]);
window.Modernizr = (function(window, document, undefined) {
	var version = '2.8.2',
	    Modernizr = {},
	    enableClasses = true,
	    docElement = document.documentElement,
	    mod = 'modernizr',
	    modElem = document.createElement(mod),
	    mStyle = modElem.style,
	    inputElem = document.createElement('input'),
	    smile = ':)',
	    toString = {}.toString,
	    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
	    omPrefixes = 'Webkit Moz O ms',
	    cssomPrefixes = omPrefixes.split(' '),
	    domPrefixes = omPrefixes.toLowerCase().split(' '),
	    ns = {
		'svg' : 'http://www.w3.org/2000/svg'
	},
	    tests = {},
	    inputs = {},
	    attrs = {},
	    classes = [],
	    slice = classes.slice,
	    featureName,
	    injectElementWithStyles = function(rule, callback, nodes, testnames) {
		var style,
		    ret,
		    node,
		    docOverflow,
		    div = document.createElement('div'),
		    body = document.body,
		    fakeBody = body || document.createElement('body');
		if (parseInt(nodes, 10)) {
			while (nodes--) {
				node = document.createElement('div');
				node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
				div.appendChild(node);
			}
		}
		style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
		div.id = mod;
		( body ? div : fakeBody).innerHTML += style;
		fakeBody.appendChild(div);
		if (!body) {
			fakeBody.style.background = '';
			fakeBody.style.overflow = 'hidden';
			docOverflow = docElement.style.overflow;
			docElement.style.overflow = 'hidden';
			docElement.appendChild(fakeBody);
		}
		ret = callback(div, rule);
		if (!body) {
			fakeBody.parentNode.removeChild(fakeBody);
			docElement.style.overflow = docOverflow;
		} else {
			div.parentNode.removeChild(div);
		}
		return !!ret;
	},
	    testMediaQuery = function(mq) {
		var matchMedia = window.matchMedia || window.msMatchMedia;
		if (matchMedia) {
			return matchMedia(mq) && matchMedia(mq).matches || false;
		}
		var bool;
		injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function(node) {
			bool = (window.getComputedStyle?getComputedStyle(node,null):node.currentStyle)['position'] == 'absolute';
		});
		return bool;
	},
	    isEventSupported = (function() {
		var TAGNAMES = {
			'select' : 'input',
			'change' : 'input',
			'submit' : 'form',
			'reset' : 'form',
			'error' : 'img',
			'load' : 'img',
			'abort' : 'img'
		};
		function isEventSupported(eventName, element) {
			element = element || document.createElement(TAGNAMES[eventName] || 'div');
			eventName = 'on' + eventName;
			var isSupported = eventName in element;
			if (!isSupported) {
				if (!element.setAttribute) {
					element = document.createElement('div');
				}
				if (element.setAttribute && element.removeAttribute) {
					element.setAttribute(eventName, '');
					isSupported = is(element[eventName], 'function');
					if (!is(element[eventName], 'undefined')) {
						element[eventName] = undefined;
					}
					element.removeAttribute(eventName);
				}
			}
			element = null;
			return isSupported;
		}

		return isEventSupported;
	})(),
	    _hasOwnProperty = ( {}).hasOwnProperty,
	    hasOwnProp;
	if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
		hasOwnProp = function(object, property) {
			return _hasOwnProperty.call(object, property);
		};
	} else {
		hasOwnProp = function(object, property) {
			return (( property in object) && is(object.constructor.prototype[property], 'undefined'));
		};
	}
	if (!Function.prototype.bind) {
		Function.prototype.bind = function bind(that) {
			var target = this;
			if ( typeof target != "function") {
				throw new TypeError();
			}
			var args = slice.call(arguments, 1),
			    bound = function() {
				if (this instanceof bound) {
					var F = function() {
					};
					F.prototype = target.prototype;
					var self = new F();
					var result = target.apply(self, args.concat(slice.call(arguments)));
					if (Object(result) === result) {
						return result;
					}
					return self;
				} else {
					return target.apply(that, args.concat(slice.call(arguments)));
				}
			};
			return bound;
		};
	}
	function setCss(str) {
		mStyle.cssText = str;
	}

	function setCssAll(str1, str2) {
		return setCss(prefixes.join(str1 + ';') + (str2 || ''));
	}

	function is(obj, type) {
		return typeof obj === type;
	}

	function contains(str, substr) {
		return !!~('' + str).indexOf(substr);
	}

	function testProps(props, prefixed) {
		for (var i in props) {
			var prop = props[i];
			if (!contains(prop, "-") && mStyle[prop] !== undefined) {
				return prefixed == 'pfx' ? prop : true;
			}
		}
		return false;
	}

	function testDOMProps(props, obj, elem) {
		for (var i in props) {
			var item = obj[props[i]];
			if (item !== undefined) {
				if (elem === false)
					return props[i];
				if (is(item, 'function')) {
					return item.bind(elem || obj);
				}
				return item;
			}
		}
		return false;
	}

	function testPropsAll(prop, prefixed, elem) {
		var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
		    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
		if (is(prefixed, "string") || is(prefixed, "undefined")) {
			return testProps(props, prefixed);
		} else {
			props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
			return testDOMProps(props, prefixed, elem);
		}
	}

	tests['flexbox'] = function() {
		return testPropsAll('flexWrap');
	};
	tests['flexboxlegacy'] = function() {
		return testPropsAll('boxDirection');
	};
	tests['canvas'] = function() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	};
	tests['canvastext'] = function() {
		return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
	};
	tests['webgl'] = function() {
		return !!window.WebGLRenderingContext;
	};
	tests['touch'] = function() {
		var bool;
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			bool = true;
		} else {
			injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function(node) {
				bool = node.offsetTop === 9;
			});
		}
		return bool;
	};
	tests['geolocation'] = function() {
		return 'geolocation' in navigator;
	};
	tests['postmessage'] = function() {
		return !!window.postMessage;
	};
	tests['websqldatabase'] = function() {
		return !!window.openDatabase;
	};
	tests['indexedDB'] = function() {
		return !!testPropsAll("indexedDB", window);
	};
	tests['hashchange'] = function() {
		return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
	};
	tests['history'] = function() {
		return !!(window.history && history.pushState);
	};
	tests['draganddrop'] = function() {
		var div = document.createElement('div');
		return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
	};
	tests['websockets'] = function() {
		return 'WebSocket' in window || 'MozWebSocket' in window;
	};
	tests['rgba'] = function() {
		setCss('background-color:rgba(150,255,150,.5)');
		return contains(mStyle.backgroundColor, 'rgba');
	};
	tests['hsla'] = function() {
		setCss('background-color:hsla(120,40%,100%,.5)');
		return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
	};
	tests['multiplebgs'] = function() {
		setCss('background:url(https://),url(https://),red url(https://)');
		return (/(url\s*\(.*?){3}/).test(mStyle.background);
	};
	tests['backgroundsize'] = function() {
		return testPropsAll('backgroundSize');
	};
	tests['borderimage'] = function() {
		return testPropsAll('borderImage');
	};
	tests['borderradius'] = function() {
		return testPropsAll('borderRadius');
	};
	tests['boxshadow'] = function() {
		return testPropsAll('boxShadow');
	};
	tests['textshadow'] = function() {
		return document.createElement('div').style.textShadow === '';
	};
	tests['opacity'] = function() {
		setCssAll('opacity:.55');
		return (/^0.55$/).test(mStyle.opacity);
	};
	tests['cssanimations'] = function() {
		return testPropsAll('animationName');
	};
	tests['csscolumns'] = function() {
		return testPropsAll('columnCount');
	};
	tests['cssgradients'] = function() {
		var str1 = 'background-image:',
		    str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
		    str3 = 'linear-gradient(left top,#9f9, white);';
		setCss((str1 + '-webkit- '.split(' ').join(str2 + str1) + prefixes.join(str3 + str1)).slice(0, -str1.length));
		return contains(mStyle.backgroundImage, 'gradient');
	};
	tests['cssreflections'] = function() {
		return testPropsAll('boxReflect');
	};
	tests['csstransforms'] = function() {
		return !!testPropsAll('transform');
	};
	tests['csstransforms3d'] = function() {
		var ret = !!testPropsAll('perspective');
		if (ret && 'webkitPerspective' in docElement.style) {
			injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function(node, rule) {
				ret = node.offsetLeft === 9 && node.offsetHeight === 3;
			});
		}
		return ret;
	};
	tests['csstransitions'] = function() {
		return testPropsAll('transition');
	};
	tests['fontface'] = function() {
		var bool;
		injectElementWithStyles('@font-face {font-family:"font";src:url("https:///")}', function(node, rule) {
			var style = document.getElementById('smodernizr'),
			    sheet = style.sheet || style.styleSheet,
			    cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
			bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
		});
		return bool;
	};
	tests['generatedcontent'] = function() {
		var bool;
		injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function(node) {
			bool = node.offsetHeight >= 3;
		});
		return bool;
	};
	tests['video'] = function() {
		var elem = document.createElement('video'),
		    bool = false;
		try {
			if ( bool = !!elem.canPlayType) {
				bool = new Boolean(bool);
				bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
				bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
				bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
			}
		} catch(e) {
		}
		return bool;
	};
	tests['audio'] = function() {
		var elem = document.createElement('audio'),
		    bool = false;
		try {
			if ( bool = !!elem.canPlayType) {
				bool = new Boolean(bool);
				bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
				bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
				bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
				bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
			}
		} catch(e) {
		}
		return bool;
	};
	tests['localstorage'] = function() {
		try {
			localStorage.setItem(mod, mod);
			localStorage.removeItem(mod);
			return true;
		} catch(e) {
			return false;
		}
	};
	tests['sessionstorage'] = function() {
		try {
			sessionStorage.setItem(mod, mod);
			sessionStorage.removeItem(mod);
			return true;
		} catch(e) {
			return false;
		}
	};
	tests['webworkers'] = function() {
		return !!window.Worker;
	};
	tests['applicationcache'] = function() {
		return !!window.applicationCache;
	};
	tests['svg'] = function() {
		return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
	};
	tests['inlinesvg'] = function() {
		var div = document.createElement('div');
		div.innerHTML = '<svg/>';
		return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
	};
	tests['smil'] = function() {
		return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
	};
	tests['svgclippaths'] = function() {
		return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
	};
	function webforms() {
		Modernizr['input'] = (function(props) {
			for (var i = 0,
			    len = props.length; i < len; i++) {
				attrs[props[i]] = !!(props[i] in inputElem);
			}
			if (attrs.list) {
				attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
			}
			return attrs;
		})('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
		Modernizr['inputtypes'] = (function(props) {
			for (var i = 0,
			    bool,
			    inputElemType,
			    defaultView,
			    len = props.length; i < len; i++) {
				inputElem.setAttribute('type', inputElemType = props[i]);
				bool = inputElem.type !== 'text';
				if (bool) {
					inputElem.value = smile;
					inputElem.style.cssText = 'position:absolute;visibility:hidden;';
					if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
						docElement.appendChild(inputElem);
						defaultView = document.defaultView;
						bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && (inputElem.offsetHeight !== 0);
						docElement.removeChild(inputElem);
					} else if (/^(search|tel)$/.test(inputElemType)) {
					} else if (/^(url|email)$/.test(inputElemType)) {
						bool = inputElem.checkValidity && inputElem.checkValidity() === false;
					} else {
						bool = inputElem.value != smile;
					}
				}
				inputs[props[i]] = !!bool;
			}
			return inputs;
		})('search tel url email datetime date month week time datetime-local number range color'.split(' '));
	}

	for (var feature in tests) {
		if (hasOwnProp(tests, feature)) {
			featureName = feature.toLowerCase();
			Modernizr[featureName] = tests[feature]();
			classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
		}
	}
	Modernizr.input || webforms();
	Modernizr.addTest = function(feature, test) {
		if ( typeof feature == 'object') {
			for (var key in feature) {
				if (hasOwnProp(feature, key)) {
					Modernizr.addTest(key, feature[key]);
				}
			}
		} else {
			feature = feature.toLowerCase();
			if (Modernizr[feature] !== undefined) {
				return Modernizr;
			}
			test = typeof test == 'function' ? test() : test;
			if ( typeof enableClasses !== "undefined" && enableClasses) {
				docElement.className += ' ' + ( test ? '' : 'no-') + feature;
			}
			Modernizr[feature] = test;
		}
		return Modernizr;
	};
	setCss('');
	modElem = inputElem = null;
	;( function(window, document) {
			var version = '3.7.0';
			var options = window.html5 || {};
			var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
			var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
			var supportsHtml5Styles;
			var expando = '_html5shiv';
			var expanID = 0;
			var expandoData = {};
			var supportsUnknownElements;
			( function() {
					try {
						var a = document.createElement('a');
						a.innerHTML = '<xyz></xyz>';
						supportsHtml5Styles = ('hidden' in a);
						supportsUnknownElements = a.childNodes.length == 1 || ( function() {
								(document.createElement)('a');
								var frag = document.createDocumentFragment();
								return ( typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined');
							}());
					} catch(e) {
						supportsHtml5Styles = true;
						supportsUnknownElements = true;
					}
				}());
			function addStyleSheet(ownerDocument, cssText) {
				var p = ownerDocument.createElement('p'),
				    parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
				p.innerHTML = 'x<style>' + cssText + '</style>';
				return parent.insertBefore(p.lastChild, parent.firstChild);
			}

			function getElements() {
				var elements = html5.elements;
				return typeof elements == 'string' ? elements.split(' ') : elements;
			}

			function getExpandoData(ownerDocument) {
				var data = expandoData[ownerDocument[expando]];
				if (!data) {
					data = {};
					expanID++;
					ownerDocument[expando] = expanID;
					expandoData[expanID] = data;
				}
				return data;
			}

			function createElement(nodeName, ownerDocument, data) {
				if (!ownerDocument) {
					ownerDocument = document;
				}
				if (supportsUnknownElements) {
					return ownerDocument.createElement(nodeName);
				}
				if (!data) {
					data = getExpandoData(ownerDocument);
				}
				var node;
				if (data.cache[nodeName]) {
					node = data.cache[nodeName].cloneNode();
				} else if (saveClones.test(nodeName)) {
					node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
				} else {
					node = data.createElem(nodeName);
				}
				return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
			}

			function createDocumentFragment(ownerDocument, data) {
				if (!ownerDocument) {
					ownerDocument = document;
				}
				if (supportsUnknownElements) {
					return ownerDocument.createDocumentFragment();
				}
				data = data || getExpandoData(ownerDocument);
				var clone = data.frag.cloneNode(),
				    i = 0,
				    elems = getElements(),
				    l = elems.length;
				for (; i < l; i++) {
					clone.createElement(elems[i]);
				}
				return clone;
			}

			function shivMethods(ownerDocument, data) {
				if (!data.cache) {
					data.cache = {};
					data.createElem = ownerDocument.createElement;
					data.createFrag = ownerDocument.createDocumentFragment;
					data.frag = data.createFrag();
				}
				ownerDocument.createElement = function(nodeName) {
					if (!html5.shivMethods) {
						return data.createElem(nodeName);
					}
					return createElement(nodeName, ownerDocument, data);
				};
				ownerDocument.createDocumentFragment = Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+
				getElements().join().replace(/[\w\-]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")';})+');return n}')(html5, data.frag);
			}

			function shivDocument(ownerDocument) {
				if (!ownerDocument) {
					ownerDocument = document;
				}
				var data = getExpandoData(ownerDocument);
				if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
					data.hasCSS = !!addStyleSheet(ownerDocument, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + 'mark{background:#FF0;color:#000}' + 'template{display:none}');
				}
				if (!supportsUnknownElements) {
					shivMethods(ownerDocument, data);
				}
				return ownerDocument;
			}

			var html5 = {
				'elements' : options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
				'version' : version,
				'shivCSS' : (options.shivCSS !== false),
				'supportsUnknownElements' : supportsUnknownElements,
				'shivMethods' : (options.shivMethods !== false),
				'type' : 'default',
				'shivDocument' : shivDocument,
				createElement : createElement,
				createDocumentFragment : createDocumentFragment
			};
			window.html5 = html5;
			shivDocument(document);
		}(this, document));
	Modernizr._version = version;
	Modernizr._prefixes = prefixes;
	Modernizr._domPrefixes = domPrefixes;
	Modernizr._cssomPrefixes = cssomPrefixes;
	Modernizr.mq = testMediaQuery;
	Modernizr.hasEvent = isEventSupported;
	Modernizr.testProp = function(prop) {
		return testProps([prop]);
	};
	Modernizr.testAllProps = testPropsAll;
	Modernizr.testStyles = injectElementWithStyles;
	Modernizr.prefixed = function(prop, obj, elem) {
		if (!obj) {
			return testPropsAll(prop, 'pfx');
		} else {
			return testPropsAll(prop, obj, elem);
		}
	};
	docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ( enableClasses ? ' js ' + classes.join(' ') : '');
	return Modernizr;
})(this, this.document);
;( function() {
		'use strict';
		var style = document.body.style;
		if ((style['-webkit-mask-size'] !== undefined) || (style['mask-size'] !== undefined)) {
			Modernizr.mask = true;
			$('html').addClass('mask');
		} else {
			Modernizr.mask = false;
			$('html').addClass('no-mask');
		}
	}());
;( function() {
		'use strict';
		$('[data-toggle="tooltip"]').tooltip();
	}());
var EDRAAK = {
	'modules' : []
};
EDRAAK.modules.push(function() {
	'use strict';
	jQuery.fn.edScrollTo = function(scrollTop) {
		var newScrollTop = jQuery.edNormalizeScrollTop(scrollTop);
		$(this).scrollTo(newScrollTop);
	};
	jQuery.edNormalizeScrollTop = function(scrollTop) {
		var headerOffset = 35 + 60;
		return Math.max(scrollTop - headerOffset, 0);
	};
});
EDRAAK.modules.push(function() {
	'use strict';
	var _animateScroll = function(target) {
		var $target = $(target);
		if (!$target.length) {
			return;
		}
		var scrollTop = $target.offset().top + 1;
		scrollTop = $.edNormalizeScrollTop(scrollTop);
		$('html, body').animate({
			scrollTop : scrollTop
		}, 440);
	};
	if (location.hash) {
		setTimeout(function() {
			$('html, body').scrollTop(0);
			$(function() {
				var url = location.toString();
				var hash = url.substring(url.indexOf('#') + 1);
				if (hash) {
					var element = document.getElementById(hash);
					_animateScroll(element);
				}
			});
		}, 1);
	}
	$(function() {
		var $scrollLinks = $('a[href^="#"]').not('[href="#"]');
		$scrollLinks.on('click', function(e) {
			e.preventDefault();
			var targetSelector = $(this).attr('href');
			_animateScroll(targetSelector);
		});
	});
});
EDRAAK.modules.push(function() {
	'use strict';
	$(function() {
		$('.popup-share', '.course-share').on('click', function(event) {
			event.preventDefault();
			var href = $(this).attr('href');
			window.open(href, 'sharer', 'toolbar=0,status=0,width=548,height=325');
		});
	});
});
EDRAAK.modules.push(function() {
	'use strict';
	$(function() {
		$('.datepicker').datetimepicker({
			format : 'DD-MM-YYYY'
		});
	});
});
EDRAAK.modules.push(function() {
	'use strict';
	$(function() {
		var $searchInput = $('.search-form input');
		var _updateHasTextClass = function() {
			if ($searchInput.val()) {
				$searchInput.addClass('has-text');
			} else {
				$searchInput.removeClass('has-text');
			}
		};
		$searchInput.on('change', _updateHasTextClass);
		_updateHasTextClass();
	});
});
! function(a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
	"use strict";
	function a() {
		return md.apply(null, arguments)
	}

	function b(a) {
		md = a
	}

	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		return "[object Object]" === Object.prototype.toString.call(a)
	}

	function e(a) {
		var b;
		for (b in a)
		return !1;
		return !0
	}

	function f(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function g(a, b) {
		var c,
		    d = [];
		for ( c = 0; c < a.length; ++c)
			d.push(b(a[c], c));
		return d
	}

	function h(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function i(a, b) {
		for (var c in b)h(b, c) && (a[c] = b[c]);
		return h(b, "toString") && (a.toString = b.toString), h(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function j(a, b, c, d) {
		return qb(a, b, c, d, !0).utc()
	}

	function k() {
		return {
			empty : !1,
			unusedTokens : [],
			unusedInput : [],
			overflow : -2,
			charsLeftOver : 0,
			nullInput : !1,
			invalidMonth : null,
			invalidFormat : !1,
			userInvalidated : !1,
			iso : !1,
			parsedDateParts : [],
			meridiem : null
		}
	}

	function l(a) {
		return null == a._pf && (a._pf = k()), a._pf
	}

	function m(a) {
		if (null == a._isValid) {
			var b = l(a),
			    c = nd.call(b.parsedDateParts, function(a) {
				return null != a
			});
			a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length &&
			void 0 === b.bigHour)
		}
		return a._isValid
	}

	function n(a) {
		var b = j(NaN);
		return null != a ? i(l(b), a) : l(b).userInvalidated = !0, b
	}

	function o(a) {
		return
		void 0 === a
	}

	function p(a, b) {
		var c,
		    d,
		    e;
		if (o(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), o(b._i) || (a._i = b._i), o(b._f) || (a._f = b._f), o(b._l) || (a._l = b._l), o(b._strict) || (a._strict = b._strict), o(b._tzm) || (a._tzm = b._tzm), o(b._isUTC) || (a._isUTC = b._isUTC), o(b._offset) || (a._offset = b._offset), o(b._pf) || (a._pf = l(b)), o(b._locale) || (a._locale = b._locale), od.length > 0)
			for (c in od) d = od[c],
			e = b[d], o(e) || (a[d] = e);
		return a
	}

	function q(b) {
		p(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), pd === !1 && ( pd = !0, a.updateOffset(this),
		pd = !1)
	}

	function r(a) {
		return a instanceof q || null != a && null != a._isAMomentObject
	}

	function s(a) {
		return 0 > a ? Math.ceil(a) || 0 : Math.floor(a)
	}

	function t(a) {
		var b = +a,
		    c = 0;
		return 0 !== b && isFinite(b) && ( c = s(b)), c
	}

	function u(a, b, c) {
		var d,
		    e = Math.min(a.length, b.length),
		    f = Math.abs(a.length - b.length),
		    g = 0;
		for ( d = 0; e > d; d++)
			(c && a[d] !== b[d] || !c && t(a[d]) !== t(b[d])) && g++;
		return g + f
	}

	function v(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function w(b, c) {
		var d = !0;
		return i(function() {
			return null != a.deprecationHandler && a.deprecationHandler(null, b), d && (v(b + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack),
			d = !1), c.apply(this, arguments)
		}, c)
	}

	function x(b, c) {
		null != a.deprecationHandler && a.deprecationHandler(b, c), qd[b] || (v(c), qd[b] = !0)
	}

	function y(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}

	function z(a) {
		var b,
		    c;
		for (c in a) b = a[c], y(b) ? this[c] = b : this["_" + c] = b;
		this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function A(a, b) {
		var c,
		    e = i({}, a);
		for (c in b)h(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, i(e[c], a[c]), i(e[c], b[c])) : null != b[c] ? e[c] = b[c] :
		delete e[c]);
		for (c in a)h(a, c) && !h(b, c) && d(a[c]) && (e[c] = i({}, e[c]));
		return e
	}

	function B(a) {
		null != a && this.set(a)
	}

	function C(a, b, c) {
		var d = this._calendar[a] || this._calendar.sameElse;
		return y(d) ? d.call(b, c) : d
	}

	function D(a) {
		var b = this._longDateFormat[a],
		    c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}

	function E() {
		return this._invalidDate
	}

	function F(a) {
		return this._ordinal.replace("%d", a)
	}

	function G(a, b, c, d) {
		var e = this._relativeTime[c];
		return y(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function H(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return y(c) ? c(b) : c.replace(/%s/i, b)
	}

	function I(a, b) {
		var c = a.toLowerCase();
		zd[c] = zd[c + "s"] = zd[b] = a
	}

	function J(a) {
		return "string" == typeof a ? zd[a] || zd[a.toLowerCase()] :
		void 0
	}

	function K(a) {
		var b,
		    c,
		    d = {};
		for (c in a)h(a, c) && ( b = J(c), b && (d[b] = a[c]));
		return d
	}

	function L(a, b) {
		Ad[a] = b
	}

	function M(a) {
		var b = [];
		for (var c in a)
		b.push({
			unit : c,
			priority : Ad[c]
		});
		return b.sort(function(a, b) {
			return a.priority - b.priority
		}), b
	}

	function N(b, c) {
		return function(d) {
			return null != d ? (P(this, b, d), a.updateOffset(this, c), this) : O(this, b)
		}
	}

	function O(a, b) {
		return a.isValid() ? a._d["get"+(a._isUTC?"UTC":"")+b]() : NaN
	}

	function P(a, b, c) {
		a.isValid() && a._d["set"+(a._isUTC?"UTC":"")+b](c)
	}

	function Q(a) {
		return a = J(a), y(this[a]) ? this[a]() : this
	}

	function R(a, b) {
		if ("object" == typeof a) {
			a = K(a);
			for (var c = M(a),
			    d = 0; d < c.length; d++)
				this[c[d].unit](a[c[d].unit])
		} else if ( a = J(a), y(this[a]))
			return this[a](b);
		return this
	}

	function S(a, b, c) {
		var d = "" + Math.abs(a),
		    e = b - d.length,
		    f = a >= 0;
		return ( f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}

	function T(a, b, c, d) {
		var e = d;
		"string" == typeof d && ( e = function() {
			return this[d]()
		}), a && (Ed[a] = e), b && (Ed[b[0]] = function() {
			return S(e.apply(this, arguments), b[1], b[2])
		}), c && (Ed[c] = function() {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function U(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function V(a) {
		var b,
		    c,
		    d = a.match(Bd);
		for ( b = 0,
		c = d.length; c > b; b++)
			Ed[d[b]] ? d[b] = Ed[d[b]] : d[b] = U(d[b]);
		return function(b) {
			var e,
			    f = "";
			for ( e = 0; c > e; e++)
				f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
			return f
		}
	}

	function W(a, b) {
		return a.isValid() ? ( b = X(b, a.localeData()), Dd[b] = Dd[b] || V(b), Dd[b](a)) : a.localeData().invalidDate()
	}

	function X(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}

		var d = 5;
		for (Cd.lastIndex = 0; d >= 0 && Cd.test(a); )
			a = a.replace(Cd, c), Cd.lastIndex = 0, d -= 1;
		return a
	}

	function Y(a, b, c) {
		Wd[a] = y(b) ? b : function(a, d) {
			return a && c ? c : b
		}
	}

	function Z(a, b) {
		return h(Wd, a) ? Wd[a](b._strict, b._locale) : new RegExp($(a))
	}

	function $(a) {
		return _(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
			return b || c || d || e
		}))
	}

	function _(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function aa(a, b) {
		var c,
		    d =
		    b;
		for ("string" == typeof a && ( a = [a]), "number" == typeof b && ( d = function(a, c) {
			c[b] = t(a)
		}),
		c = 0; c < a.length; c++)
			Xd[a[c]] = d
	}

	function ba(a, b) {
		aa(a, function(a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function ca(a, b, c) {
		null != b && h(Xd, a) && Xd[a](b, c._a, c, a)
	}

	function da(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function ea(a, b) {
		return c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]
	}

	function fa(a, b) {
		return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]
	}

	function ga(a, b, c) {
		var d,
		    e,
		    f,
		    g = a.toLocaleLowerCase();
		if (!this._monthsParse)
			for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [],
			d = 0; 12 > d; ++d)
				f = j([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
		return c ? "MMM" === b ? ( e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : null) : ( e = sd.call(this._longMonthsParse, g), -1 !== e ? e : null) : "MMM" === b ? ( e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : ( e = sd.call(this._longMonthsParse, g), -1 !== e ? e : null)) : ( e = sd.call(this._longMonthsParse, g), -1 !== e ? e : ( e = sd.call(this._shortMonthsParse, g), -1 !== e ? e : null))
	}

	function ha(a, b, c) {
		var d,
		    e,
		    f;
		if (this._monthsParseExact)
			return ga.call(this, a, b, c);
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []),
		d = 0; 12 > d; d++) {
			if ( e = j([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || ( f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a))
				return d;
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a))
				return d;
			if (!c && this._monthsParse[d].test(a))
				return d
		}
	}

	function ia(a, b) {
		var c;
		if (!a.isValid())
			return a;
		if ("string" == typeof b)
			if (/^\d+$/.test(b))
				b = t(b);
			else if ( b = a.localeData().monthsParse(b), "number" != typeof b)
				return a;
		return c = Math.min(a.date(), da(a.year(), b)), a._d["set"+(a._isUTC?"UTC":"")+"Month"](b, c), a
	}

	function ja(b) {
		return null != b ? (ia(this, b), a.updateOffset(this, !0), this) : O(this, "Month")
	}

	function ka() {
		return da(this.year(), this.month())
	}

	function la(a) {
		return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = ie), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
	}

	function ma(a) {
		return this._monthsParseExact ? (h(this, "_monthsRegex") || na.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = je), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
	}

	function na() {
		function a(a, b) {
			return b.length - a.length
		}

		var b,
		    c,
		    d = [],
		    e = [],
		    f = [];
		for ( b = 0; 12 > b; b++)
			c = j([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
		for (d.sort(a), e.sort(a), f.sort(a),
		b = 0; 12 > b; b++)
			d[b] = _(d[b]), e[b] = _(e[b]);
		for ( b = 0; 24 > b; b++)
			f[b] = _(f[b]);
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
	}

	function oa(a) {
		return pa(a) ? 366 : 365
	}

	function pa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function qa() {
		return pa(this.year())
	}

	function ra(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}

	function sa(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}

	function ta(a, b, c) {
		var d = 7 + b - c,
		    e = (7 + sa(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}

	function ua(a, b, c, d, e) {
		var f,
		    g,
		    h = (7 + c - d) % 7,
		    i = ta(a, d, e),
		    j = 1 + 7 * (b - 1) + h + i;
		return 0 >= j ? ( f = a - 1,
		g = oa(f) + j) : j > oa(a) ? ( f = a + 1,
		g = j - oa(a)) : ( f = a,
		g =
		j), {
			year : f,
			dayOfYear : g
		}
	}

	function va(a, b, c) {
		var d,
		    e,
		    f = ta(a.year(), b, c),
		    g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return 1 > g ? ( e = a.year() - 1,
		d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? ( d = g - wa(a.year(), b, c),
		e = a.year() + 1) : ( e = a.year(),
		d =
		g), {
			week : d,
			year : e
		}
	}

	function wa(a, b, c) {
		var d = ta(a, b, c),
		    e = ta(a + 1, b, c);
		return (oa(a) - d + e) / 7
	}

	function xa(a) {
		return va(a, this._week.dow, this._week.doy).week
	}

	function ya() {
		return this._week.dow
	}

	function za() {
		return this._week.doy
	}

	function Aa(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ba(a) {
		var b = va(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function Ca(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? ( a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}

	function Da(a, b) {
		return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
	}

	function Ea(a, b) {
		return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]
	}

	function Fa(a) {
		return this._weekdaysShort[a.day()]
	}

	function Ga(a) {
		return this._weekdaysMin[a.day()]
	}

	function Ha(a, b, c) {
		var d,
		    e,
		    f,
		    g = a.toLocaleLowerCase();
		if (!this._weekdaysParse)
			for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [],
			d = 0; 7 > d; ++d)
				f = j([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
		return c ? "dddd" === b ? ( e = sd.call(this._weekdaysParse, g), -1 !== e ? e : null) : "ddd" === b ? ( e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : null) : ( e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null) : "dddd" === b ? ( e = sd.call(this._weekdaysParse, g), -1 !== e ? e : ( e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : ( e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : "ddd" === b ? ( e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : ( e = sd.call(this._weekdaysParse, g), -1 !== e ? e : ( e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : ( e = sd.call(this._minWeekdaysParse, g), -1 !== e ? e : ( e = sd.call(this._weekdaysParse, g), -1 !== e ? e : ( e = sd.call(this._shortWeekdaysParse, g), -1 !== e ? e : null)))
	}

	function Ia(a, b, c) {
		var d,
		    e,
		    f;
		if (this._weekdaysParseExact)
			return Ha.call(this, a, b, c);
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []),
		d = 0; 7 > d; d++) {
			if ( e = j([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || ( f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
				return d;
			if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a))
				return d;
			if (c && "dd" === b && this._minWeekdaysParse[d].test(a))
				return d;
			if (!c && this._weekdaysParse[d].test(a))
				return d
		}
	}

	function Ja(a) {
		if (!this.isValid())
			return null != a ? this : NaN;
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? ( a = Ca(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function Ka(a) {
		if (!this.isValid())
			return null != a ? this : NaN;
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function La(a) {
		if (!this.isValid())
			return null != a ? this : NaN;
		if (null != a) {
			var b = Da(a, this.localeData());
			return this.day(this.day() % 7 ? b : b - 7)
		}
		return this.day() || 7
	}

	function Ma(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = pe), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
	}

	function Na(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
	}

	function Oa(a) {
		return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Pa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = re), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
	}

	function Pa() {
		function a(a, b) {
			return b.length - a.length
		}

		var b,
		    c,
		    d,
		    e,
		    f,
		    g = [],
		    h = [],
		    i = [],
		    k = [];
		for ( b = 0; 7 > b; b++)
			c = j([2e3, 1]).day(b),
			d = this.weekdaysMin(c, ""),
			e = this.weekdaysShort(c, ""),
			f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), k.push(d), k.push(e), k.push(f);
		for (g.sort(a), h.sort(a), i.sort(a), k.sort(a),
		b = 0; 7 > b; b++)
			h[b] = _(h[b]), i[b] = _(i[b]), k[b] = _(k[b]);
		this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
	}

	function Qa() {
		return this.hours() % 12 || 12
	}

	function Ra() {
		return this.hours() || 24
	}

	function Sa(a, b) {
		T(a, 0, 0, function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}

	function Ta(a, b) {
		return b._meridiemParse
	}

	function Ua(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Va(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Wa(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function Xa(a) {
		for (var b,
		    c,
		    d,
		    e,
		    f = 0; f < a.length; ) {
			for ( e = Wa(a[f]).split("-"),
			b = e.length,
			c = Wa(a[f + 1]),
			c = c ? c.split("-") : null; b > 0; ) {
				if ( d = Ya(e.slice(0, b).join("-")))
					return d;
				if (c && c.length >= b && u(e, c, !0) >= b - 1)
					break;
				b--
			}
			f++
		}
		return null
	}

	function Ya(a) {
		var b = null;
		if (!we[a] && "undefined" != typeof module && module && module.exports)
			try {
				b = se._abbr, require("./locale/" + a), Za(b)
			} catch(c) {
			}
		return we[a]
	}

	function Za(a, b) {
		var c;
		return a && ( c = o(b) ? ab(a) : $a(a, b), c && ( se = c)), se._abbr
	}

	function $a(a, b) {
		if (null !== b) {
			var c = ve;
			return b.abbr = a, null != we[a] ? (x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
			c = we[a]._config) : null != b.parentLocale && (null != we[b.parentLocale] ? c = we[b.parentLocale]._config : x("parentLocaleUndefined", "specified%20parentLocale%20is%20not%20defined%20yet.%20See%20http_/momentjs.com/guides/index.html#/warnings/parent-locale/")), we[a] = new B(A(c, b)), Za(a), we[a]
		}
		return
		delete we[a], null
	}

	function _a(a, b) {
		if (null != b) {
			var c,
			    d =
			    ve;
			null != we[a] && ( d = we[a]._config),
			b = A(d, b),
			c = new B(b), c.parentLocale = we[a], we[a] =
			c, Za(a)
		} else
			null != we[a] && (null != we[a].parentLocale ? we[a] = we[a].parentLocale : null != we[a] &&
			delete we[a]);
		return we[a]
	}

	function ab(a) {
		var b;
		if (a && a._locale && a._locale._abbr && ( a = a._locale._abbr), !a)
			return se;
		if (!c(a)) {
			if ( b = Ya(a))
				return b;
			a = [a]
		}
		return Xa(a)
	}

	function bb() {
		return rd(we)
	}

	function cb(a) {
		var b,
		    c = a._a;
		return c && -2 === l(a).overflow && ( b = c[Zd] < 0 || c[Zd] > 11 ? Zd : c[$d] < 1 || c[$d] > da(c[Yd], c[Zd]) ? $d : c[_d] < 0 || c[_d] > 24 || 24 === c[_d] && (0 !== c[ae] || 0 !== c[be] || 0 !== c[ce]) ? _d : c[ae] < 0 || c[ae] > 59 ? ae : c[be] < 0 || c[be] > 59 ? be : c[ce] < 0 || c[ce] > 999 ? ce : -1, l(a)._overflowDayOfYear && (Yd > b || b > $d) && ( b = $d), l(a)._overflowWeeks && -1 === b && ( b = de), l(a)._overflowWeekday && -1 === b && ( b = ee), l(a).overflow =
		b), a
	}

	function db(a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h = a._i,
		    i = xe.exec(h) || ye.exec(h);
		if (i) {
			for (l(a).iso = !0,
			b = 0,
			c = Ae.length; c > b; b++)
				if (Ae[b][1].exec(i[1])) {
					e = Ae[b][0],
					d = Ae[b][2] !== !1;
					break
				}
			if (null == e)
				return
				void (a._isValid = !1);
			if (i[3]) {
				for ( b = 0,
				c = Be.length; c > b; b++)
					if (Be[b][1].exec(i[3])) {
						f = (i[2] || " ") + Be[b][0];
						break
					}
				if (null == f)
					return
					void (a._isValid = !1)
			}
			if (!d && null != f)
				return
				void (a._isValid = !1);
			if (i[4]) {
				if (!ze.exec(i[4]))
					return
					void (a._isValid = !1);
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), jb(a)
		} else
			a._isValid = !1
	}

	function eb(b) {
		var c = Ce.exec(b._i);
		return null !== c ?
		void (b._d = new Date(+c[1])) : (db(b),
		void (b._isValid === !1 && (
		delete b._isValid, a.createFromInputFallback(b))))
	}

	function fb(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function gb(b) {
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}

	function hb(a) {
		var b,
		    c,
		    d,
		    e,
		    f = [];
		if (!a._d) {
			for ( d = gb(a), a._w && null == a._a[$d] && null == a._a[Zd] && ib(a), a._dayOfYear && ( e = fb(a._a[Yd], d[Yd]), a._dayOfYear > oa(e) && (l(a)._overflowDayOfYear = !0),
			c = sa(e, 0, a._dayOfYear), a._a[Zd] = c.getUTCMonth(), a._a[$d] = c.getUTCDate()),
			b = 0; 3 > b && null == a._a[b]; ++b)
				a._a[b] = f[b] = d[b];
			for (; 7 > b; b++)
				a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			24 === a._a[_d] && 0 === a._a[ae] && 0 === a._a[be] && 0 === a._a[ce] && (a._nextDay = !0, a._a[_d] = 0), a._d = (a._useUTC ? sa : ra).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[_d] = 24)
		}
	}

	function ib(a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    i;
		b = a._w, null != b.GG || null != b.W || null != b.E ? ( f = 1,
		g = 4,
		c = fb(b.GG, a._a[Yd], va(rb(), 1, 4).year),
		d = fb(b.W, 1),
		e = fb(b.E, 1), (1 > e || e > 7) && ( i = !0)) : ( f = a._locale._week.dow,
		g = a._locale._week.doy,
		c = fb(b.gg, a._a[Yd], va(rb(), f, g).year),
		d = fb(b.w, 1), null != b.d ? ( e = b.d, (0 > e || e > 6) && ( i = !0)) : null != b.e ? ( e = b.e + f, (b.e < 0 || b.e > 6) && ( i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? l(a)._overflowWeeks = !0 : null != i ? l(a)._overflowWeekday = !0 : ( h = ua(c, d, e, f, g), a._a[Yd] = h.year, a._dayOfYear = h.dayOfYear)
	}

	function jb(b) {
		if (b._f === a.ISO_8601)
			return
			void  db(b);
		b._a = [], l(b).empty = !0;
		var c,
		    d,
		    e,
		    f,
		    g,
		    h = "" + b._i,
		    i = h.length,
		    j = 0;
		for ( e = X(b._f, b._locale).match(Bd) || [],
		c = 0; c < e.length; c++)
			f = e[c],
			d = (h.match(Z(f,b))||[])[0], d && ( g = h.substr(0, h.indexOf(d)), g.length > 0 && l(b).unusedInput.push(g),
			h = h.slice(h.indexOf(d) + d.length), j += d.length), Ed[f] ? ( d ? l(b).empty = !1 : l(b).unusedTokens.push(f), ca(f, d, b)) : b._strict && !d && l(b).unusedTokens.push(f);
		l(b).charsLeftOver = i - j, h.length > 0 && l(b).unusedInput.push(h), b._a[_d] <= 12 && l(b).bigHour === !0 && b._a[_d] > 0 && (l(b).bigHour =
		void 0), l(b).parsedDateParts = b._a.slice(0), l(b).meridiem = b._meridiem, b._a[_d] = kb(b._locale, b._a[_d], b._meridiem), hb(b), cb(b)
	}

	function kb(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? ( d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || ( b = 0), b) : b
	}

	function lb(a) {
		var b,
		    c,
		    d,
		    e,
		    f;
		if (0 === a._f.length)
			return l(a).invalidFormat = !0,
			void (a._d = new Date(NaN));
		for ( e = 0; e < a._f.length; e++)
			f = 0,
			b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], jb(b), m(b) && (f += l(b).charsLeftOver, f += 10 * l(b).unusedTokens.length, l(b).score =
			f, (null == d || d > f) && ( d = f,
			c =
			b));
		i(a, c || b)
	}

	function mb(a) {
		if (!a._d) {
			var b = K(a._i);
			a._a = g([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
				return a && parseInt(a, 10)
			}), hb(a)
		}
	}

	function nb(a) {
		var b = new q(cb(ob(a)));
		return b._nextDay && (b.add(1, "d"), b._nextDay =
		void 0), b
	}

	function ob(a) {
		var b = a._i,
		    d = a._f;
		return a._locale = a._locale || ab(a._l), null === b ||
		void 0 === d && "" === b ? n({
			nullInput : !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), r(b) ? new q(cb(b)) : (c(d) ? lb(a) : f(b) ? a._d = b : d ? jb(a) : pb(a), m(a) || (a._d = null), a))
	}

	function pb(b) {
		var d = b._i;
		void 0 === d ? b._d = new Date(a.now()) : f(d) ? b._d = new Date(d.valueOf()) : "string" == typeof d ? eb(b) : c(d) ? (b._a = g(d.slice(0), function(a) {
			return parseInt(a, 10)
		}), hb(b)) : "object" == typeof d ? mb(b) : "number" == typeof d ? b._d = new Date(d) : a.createFromInputFallback(b)
	}

	function qb(a, b, f, g, h) {
		var i = {};
		return "boolean" == typeof f && ( g = f,
		f =
		void 0), (d(a) && e(a) || c(a) && 0 === a.length) && ( a =
		void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l =
		f, i._i =
		a, i._f =
		b, i._strict =
		g, nb(i)
	}

	function rb(a, b, c, d) {
		return qb(a, b, c, d, !1)
	}

	function sb(a, b) {
		var d,
		    e;
		if (1 === b.length && c(b[0]) && ( b = b[0]), !b.length)
			return rb();
		for ( d = b[0],
		e = 1; e < b.length; ++e)
			b[e].isValid() && !b[e][a](d) || ( d = b[e]);
		return d
	}

	function tb() {
		var a = [].slice.call(arguments, 0);
		return sb("isBefore", a)
	}

	function ub() {
		var a = [].slice.call(arguments, 0);
		return sb("isAfter", a)
	}

	function vb(a) {
		var b = K(a),
		    c = b.year || 0,
		    d = b.quarter || 0,
		    e = b.month || 0,
		    f = b.week || 0,
		    g = b.day || 0,
		    h = b.hour || 0,
		    i = b.minute || 0,
		    j = b.second || 0,
		    k = b.millisecond || 0;
		this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = ab(), this._bubble()
	}

	function wb(a) {
		return a instanceof vb
	}

	function xb(a, b) {
		T(a, 0, 0, function() {
			var a = this.utcOffset(),
			    c = "+";
			return 0 > a && ( a = -a,
			c = "-"), c + S(~~(a / 60), 2) + b + S(~~a % 60, 2)
		})
	}

	function yb(a, b) {
		var c = (b || "").match(a) || [],
		    d = c[c.length - 1] || [],
		    e = (d + "").match(Ge) || ["-", 0, 0],
		    f = +(60 * e[1]) + t(e[2]);
		return "+" === e[0] ? f : -f
	}

	function zb(b, c) {
		var d,
		    e;
		return c._isUTC ? ( d = c.clone(),
		e = (r(b) || f(b) ? b.valueOf() : rb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : rb(b).local()
	}

	function Ab(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}

	function Bb(b, c) {
		var d,
		    e = this._offset || 0;
		return this.isValid() ? null != b ? ("string" == typeof b ? b = yb(Td, b) : Math.abs(b) < 16 && ( b = 60 * b), !this._isUTC && c && ( d = Ab(this)), this._offset =
		b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Sb(this, Mb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ab(this) : null != b ? this : NaN
	}

	function Cb(a, b) {
		return null != a ? ("string" != typeof a && ( a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Db(a) {
		return this.utcOffset(0, a)
	}

	function Eb(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ab(this), "m")), this
	}

	function Fb() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(yb(Sd, this._i)), this
	}

	function Gb(a) {
		return this.isValid() ? ( a = a ? rb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
	}

	function Hb() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Ib() {
		if (!o(this._isDSTShifted))
			return this._isDSTShifted;
		var a = {};
		if (p(a, this),
		a = ob(a), a._a) {
			var b = a._isUTC ? j(a._a) : rb(a._a);
			this._isDSTShifted = this.isValid() && u(a._a, b.toArray()) > 0
		} else
			this._isDSTShifted = !1;
		return this._isDSTShifted
	}

	function Jb() {
		return this.isValid() ? !this._isUTC : !1
	}

	function Kb() {
		return this.isValid() ? this._isUTC : !1
	}

	function Lb() {
		return this.isValid() ? this._isUTC && 0 === this._offset : !1
	}

	function Mb(a, b) {
		var c,
		    d,
		    e,
		    f =
		    a,
		    g = null;
		return wb(a) ? f = {
			ms : a._milliseconds,
			d : a._days,
			M : a._months
		} : "number" == typeof a ? ( f = {}, b ? f[b] = a : f.milliseconds = a) : ( g = He.exec(a)) ? ( c = "-" === g[1] ? -1 : 1,
		f = {
			y : 0,
			d : t(g[$d]) * c,
			h : t(g[_d]) * c,
			m : t(g[ae]) * c,
			s : t(g[be]) * c,
			ms : t(g[ce]) * c
		}) : ( g = Ie.exec(a)) ? ( c = "-" === g[1] ? -1 : 1,
		f = {
			y : Nb(g[2], c),
			M : Nb(g[3], c),
			w : Nb(g[4], c),
			d : Nb(g[5], c),
			h : Nb(g[6], c),
			m : Nb(g[7], c),
			s : Nb(g[8], c)
		}) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && ( e = Pb(rb(f.from), rb(f.to)),
		f = {}, f.ms = e.milliseconds, f.M = e.months),
		d = new vb(f), wb(a) && h(a, "_locale") && (d._locale = a._locale), d
	}

	function Nb(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return (isNaN(c) ? 0 : c) * b
	}

	function Ob(a, b) {
		var c = {
			milliseconds : 0,
			months : 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Pb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? ( b = zb(b, a), a.isBefore(b) ? c = Ob(a, b) : ( c = Ob(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds : 0,
			months : 0
		}
	}

	function Qb(a) {
		return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
	}

	function Rb(a, b) {
		return function(c, d) {
			var e,
			    f;
			return null === d || isNaN(+d) || (x(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
			f =
			c,
			c =
			d,
			d =
			f),
			c = "string" == typeof c ? +c : c,
			e = Mb(c, d), Sb(this, e, a), this
		}
	}

	function Sb(b, c, d, e) {
		var f = c._milliseconds,
		    g = Qb(c._days),
		    h = Qb(c._months);
		b.isValid() && ( e = null == e ? !0 : e, f && b._d.setTime(b._d.valueOf() + f * d), g && P(b, "Date", O(b, "Date") + g * d), h && ia(b, O(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}

	function Tb(a, b) {
		var c = a.diff(b, "days", !0);
		return -6 > c ? "sameElse" : -1 > c ? "lastWeek" : 0 > c ? "lastDay" : 1 > c ? "sameDay" : 2 > c ? "nextDay" : 7 > c ? "nextWeek" : "sameElse"
	}

	function Ub(b, c) {
		var d = b || rb(),
		    e = zb(d, this).startOf("day"),
		    f = a.calendarFormat(this, e) || "sameElse",
		    g = c && (y(c[f]) ? c[f].call(this, d) : c[f]);
		return this.format(g || this.localeData().calendar(f, this, rb(d)))
	}

	function Vb() {
		return new q(this)
	}

	function Wb(a, b) {
		var c = r(a) ? a : rb(a);
		return this.isValid() && c.isValid() ? ( b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf()) : !1
	}

	function Xb(a, b) {
		var c = r(a) ? a : rb(a);
		return this.isValid() && c.isValid() ? ( b = J(o(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf()) : !1
	}

	function Yb(a, b, c, d) {
		return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
	}

	function Zb(a, b) {
		var c,
		    d = r(a) ? a : rb(a);
		return this.isValid() && d.isValid() ? ( b = J(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : ( c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf())) : !1
	}

	function $b(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}

	function _b(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}

	function ac(a, b, c) {
		var d,
		    e,
		    f,
		    g;
		return this.isValid() ? ( d = zb(a, this), d.isValid() ? ( e = 6e4 * (d.utcOffset() - this.utcOffset()),
		b = J(b), "year" === b || "month" === b || "quarter" === b ? ( g = bc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : ( f = this - d,
		g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : s(g)) : NaN) : NaN
	}

	function bc(a, b) {
		var c,
		    d,
		    e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
		    f = a.clone().add(e, "months");
		return 0 > b - f ? ( c = a.clone().add(e - 1, "months"),
		d = (b - f) / (f - c)) : ( c = a.clone().add(e + 1, "months"),
		d = (b - f) / (c - f)), -(e + d) || 0
	}

	function cc() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function dc() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? y(Date.prototype.toISOString) ? this.toDate().toISOString() : W(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function ec(b) {
		b || ( b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
		var c = W(this, b);
		return this.localeData().postformat(c)
	}

	function fc(a, b) {
		return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
			to : this,
			from : a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function gc(a) {
		return this.from(rb(), a)
	}

	function hc(a, b) {
		return this.isValid() && (r(a) && a.isValid() || rb(a).isValid()) ? Mb({
			from : this,
			to : a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ic(a) {
		return this.to(rb(), a)
	}

	function jc(a) {
		var b;
		return
		void 0 === a ? this._locale._abbr : ( b = ab(a), null != b && (this._locale = b), this)
	}

	function kc() {
		return this._locale
	}

	function lc(a) {
		switch(a=J(a)) {
		case"year":
			this.month(0);
		case"quarter":
		case"month":
			this.date(1);
		case"week":
		case"isoWeek":
		case"day":
		case"date":
			this.hours(0);
		case"hour":
			this.minutes(0);
		case"minute":
			this.seconds(0);
		case"second":
			this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function mc(a) {
		return a = J(a),
		void 0 === a || "millisecond" === a ? this : ("date" === a && ( a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
	}

	function nc() {
		return this._d.valueOf() - 6e4 * (this._offset || 0)
	}

	function oc() {
		return Math.floor(this.valueOf() / 1e3)
	}

	function pc() {
		return new Date(this.valueOf())
	}

	function qc() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function rc() {
		var a = this;
		return {
			years : a.year(),
			months : a.month(),
			date : a.date(),
			hours : a.hours(),
			minutes : a.minutes(),
			seconds : a.seconds(),
			milliseconds : a.milliseconds()
		}
	}

	function sc() {
		return this.isValid() ? this.toISOString() : null
	}

	function tc() {
		return m(this)
	}

	function uc() {
		return i({}, l(this))
	}

	function vc() {
		return l(this).overflow
	}

	function wc() {
		return {
			input : this._i,
			format : this._f,
			locale : this._locale,
			isUTC : this._isUTC,
			strict : this._strict
		}
	}

	function xc(a, b) {
		T(0, [a, a.length], 0, b)
	}

	function yc(a) {
		return Cc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}

	function zc(a) {
		return Cc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}

	function Ac() {
		return wa(this.year(), 1, 4)
	}

	function Bc() {
		var a = this.localeData()._week;
		return wa(this.year(), a.dow, a.doy)
	}

	function Cc(a, b, c, d, e) {
		var f;
		return null == a ? va(this, d, e).year : ( f = wa(a, d, e), b > f && ( b = f), Dc.call(this, a, b, c, d, e))
	}

	function Dc(a, b, c, d, e) {
		var f = ua(a, b, c, d, e),
		    g = sa(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}

	function Ec(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}

	function Fc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function Gc(a, b) {
		b[ce] = t(1e3 * ("0." + a))
	}

	function Hc() {
		return this._isUTC ? "UTC" : ""
	}

	function Ic() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Jc(a) {
		return rb(1e3 * a)
	}

	function Kc() {
		return rb.apply(null, arguments).parseZone()
	}

	function Lc(a) {
		return a
	}

	function Mc(a, b, c, d) {
		var e = ab(),
		    f = j().set(d, b);
		return e[c](f, a)
	}

	function Nc(a, b, c) {
		if ("number" == typeof a && ( b = a,
			a =
			void 0),
			a = a || "", null != b)
			return Mc(a, b, c, "month");
		var d,
		    e = [];
		for ( d = 0; 12 > d; d++)
			e[d] = Mc(a, d, c, "month");
		return e
	}

	function Oc(a, b, c, d) {
		"boolean" == typeof a ? ("number" == typeof b && ( c = b,
		b =
		void 0),
		b = b || "") : ( b = a,
		c =
		b,
		a = !1, "number" == typeof b && ( c = b,
		b =
		void 0),
		b = b || "");
		var e = ab(),
		    f = a ? e._week.dow : 0;
		if (null != c)
			return Mc(b, (c + f) % 7, d, "day");
		var g,
		    h = [];
		for ( g = 0; 7 > g; g++)
			h[g] = Mc(b, (g + f) % 7, d, "day");
		return h
	}

	function Pc(a, b) {
		return Nc(a, b, "months")
	}

	function Qc(a, b) {
		return Nc(a, b, "monthsShort")
	}

	function Rc(a, b, c) {
		return Oc(a, b, c, "weekdays")
	}

	function Sc(a, b, c) {
		return Oc(a, b, c, "weekdaysShort")
	}

	function Tc(a, b, c) {
		return Oc(a, b, c, "weekdaysMin")
	}

	function Uc() {
		var a = this._data;
		return this._milliseconds = Ue(this._milliseconds), this._days = Ue(this._days), this._months = Ue(this._months), a.milliseconds = Ue(a.milliseconds), a.seconds = Ue(a.seconds), a.minutes = Ue(a.minutes), a.hours = Ue(a.hours), a.months = Ue(a.months), a.years = Ue(a.years), this
	}

	function Vc(a, b, c, d) {
		var e = Mb(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}

	function Wc(a, b) {
		return Vc(this, a, b, 1)
	}

	function Xc(a, b) {
		return Vc(this, a, b, -1)
	}

	function Yc(a) {
		return 0 > a ? Math.floor(a) : Math.ceil(a)
	}

	function Zc() {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f = this._milliseconds,
		    g = this._days,
		    h = this._months,
		    i = this._data;
		return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Yc(_c(h) + g),
		g = 0,
		h = 0), i.milliseconds = f % 1e3,
		a = s(f / 1e3), i.seconds = a % 60,
		b = s(a / 60), i.minutes = b % 60,
		c = s(b / 60), i.hours = c % 24, g += s(c / 24),
		e = s($c(g)), h += e, g -= Yc(_c(e)),
		d = s(h / 12), h %= 12, i.days =
		g, i.months =
		h, i.years =
		d, this
	}

	function $c(a) {
		return 4800 * a / 146097
	}

	function _c(a) {
		return 146097 * a / 4800
	}

	function ad(a) {
		var b,
		    c,
		    d = this._milliseconds;
		if ( a = J(a), "month" === a || "year" === a)
			return b = this._days + d / 864e5,
			c = this._months + $c(b), "month" === a ? c : c / 12;
		switch(b=this._days+Math.round(_c(this._months)),a) {
		case"week":
			return b / 7 + d / 6048e5;
		case"day":
			return b + d / 864e5;
		case"hour":
			return 24 * b + d / 36e5;
		case"minute":
			return 1440 * b + d / 6e4;
		case"second":
			return 86400 * b + d / 1e3;
		case"millisecond":
			return Math.floor(864e5 * b) + d;
		default:
			throw new Error("Unknown unit " + a)
		}
	}

	function bd() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * t(this._months / 12)
	}

	function cd(a) {
		return function() {
			return this.as(a)
		}
	}

	function dd(a) {
		return a = J(a), this[a+"s"]()
	}

	function ed(a) {
		return function() {
			return this._data[a]
		}
	}

	function fd() {
		return s(this.days() / 7)
	}

	function gd(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function hd(a, b, c) {
		var d = Mb(a).abs(),
		    e = jf(d.as("s")),
		    f = jf(d.as("m")),
		    g = jf(d.as("h")),
		    h = jf(d.as("d")),
		    i = jf(d.as("M")),
		    j = jf(d.as("y")),
		    k = e < kf.s && ["s", e] || 1 >= f && ["m"] || f < kf.m && ["mm", f] || 1 >= g && ["h"] || g < kf.h && ["hh", g] || 1 >= h && ["d"] || h < kf.d && ["dd", h] || 1 >= i && ["M"] || i < kf.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] =
		c, gd.apply(null, k)
	}

	function id(a) {
		return
		void 0 === a ? jf : "function" == typeof a ? ( jf = a, !0) : !1
	}

	function jd(a, b) {
		return
		void 0 === kf[a] ? !1 :
		void 0 === b ? kf[a] : (kf[a] = b, !0)
	}

	function kd(a) {
		var b = this.localeData(),
		    c = hd(this, !a, b);
		return a && ( c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function ld() {
		var a,
		    b,
		    c,
		    d = lf(this._milliseconds) / 1e3,
		    e = lf(this._days),
		    f = lf(this._months);
		a = s(d / 60),
		b = s(a / 60), d %= 60, a %= 60,
		c = s(f / 12), f %= 12;
		var g = c,
		    h =
		    f,
		    i =
		    e,
		    j =
		    b,
		    k =
		    a,
		    l =
		    d,
		    m = this.asSeconds();
		return m ? (0 > m ? "-" : "") + "P" + ( g ? g + "Y" : "") + ( h ? h + "M" : "") + ( i ? i + "D" : "") + (j || k || l ? "T" : "") + ( j ? j + "H" : "") + ( k ? k + "M" : "") + ( l ? l + "S" : "") : "P0D"
	}

	var md,
	    nd;
	nd = Array.prototype.some ? Array.prototype.some : function(a) {
		for (var b = Object(this),
		    c = b.length >>> 0,
		    d = 0; c > d; d++)
			if ( d in b && a.call(this, b[d], d, b))
				return !0;
		return !1
	};
	var od = a.momentProperties = [],
	    pd = !1,
	    qd = {};
	a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
	var rd;
	rd = Object.keys ? Object.keys : function(a) {
		var b,
		    c = [];
		for (b in a)h(a, b) && c.push(b);
		return c
	};
	var sd,
	    td = {
		sameDay : "[Today at] LT",
		nextDay : "[Tomorrow at] LT",
		nextWeek : "dddd [at] LT",
		lastDay : "[Yesterday at] LT",
		lastWeek : "[Last] dddd [at] LT",
		sameElse : "L"
	},
	    ud = {
		LTS : "h:mm:ss A",
		LT : "h:mm A",
		L : "MM/DD/YYYY",
		LL : "MMMM D, YYYY",
		LLL : "MMMM D, YYYY h:mm A",
		LLLL : "dddd, MMMM D, YYYY h:mm A"
	},
	    vd = "Invalid date",
	    wd = "%d",
	    xd = /\d{1,2}/,
	    yd = {
		future : "in %s",
		past : "%s ago",
		s : "a few seconds",
		m : "a minute",
		mm : "%d minutes",
		h : "an hour",
		hh : "%d hours",
		d : "a day",
		dd : "%d days",
		M : "a month",
		MM : "%d months",
		y : "a year",
		yy : "%d years"
	},
	    zd = {},
	    Ad = {},
	    Bd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	    Cd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	    Dd = {},
	    Ed = {},
	    Fd = /\d/,
	    Gd = /\d\d/,
	    Hd = /\d{3}/,
	    Id = /\d{4}/,
	    Jd = /[+-]?\d{6}/,
	    Kd = /\d\d?/,
	    Ld = /\d\d\d\d?/,
	    Md = /\d\d\d\d\d\d?/,
	    Nd = /\d{1,3}/,
	    Od = /\d{1,4}/,
	    Pd = /[+-]?\d{1,6}/,
	    Qd = /\d+/,
	    Rd = /[+-]?\d+/,
	    Sd = /Z|[+-]\d\d:?\d\d/gi,
	    Td = /Z|[+-]\d\d(?::?\d\d)?/gi,
	    Ud = /[+-]?\d+(\.\d{1,3})?/,
	    Vd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
	    Wd = {},
	    Xd = {},
	    Yd = 0,
	    Zd = 1,
	    $d = 2,
	    _d = 3,
	    ae = 4,
	    be = 5,
	    ce = 6,
	    de = 7,
	    ee = 8;
	sd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
		var b;
		for ( b = 0; b < this.length; ++b)
			if (this[b] === a)
				return b;
		return -1
	}, T("M", ["MM", 2], "Mo", function() {
		return this.month() + 1
	}), T("MMM", 0, 0, function(a) {
		return this.localeData().monthsShort(this, a)
	}), T("MMMM", 0, 0, function(a) {
		return this.localeData().months(this, a)
	}), I("month", "M"), L("month", 8), Y("M", Kd), Y("MM", Kd, Gd), Y("MMM", function(a, b) {
		return b.monthsShortRegex(a)
	}), Y("MMMM", function(a, b) {
		return b.monthsRegex(a)
	}), aa(["M", "MM"], function(a, b) {
		b[Zd] = t(a) - 1
	}), aa(["MMM", "MMMM"], function(a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[Zd] = e : l(c).invalidMonth = a
	});
	var fe = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
	    ge = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
	    he = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
	    ie =
	    Vd,
	    je =
	    Vd;
	T("Y", 0, 0, function() {
		var a = this.year();
		return 9999 >= a ? "" + a : "+" + a
	}), T(0, ["YY", 2], 0, function() {
		return this.year() % 100
	}), T(0, ["YYYY", 4], 0, "year"), T(0, ["YYYYY", 5], 0, "year"), T(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), L("year", 1), Y("Y", Rd), Y("YY", Kd, Gd), Y("YYYY", Od, Id), Y("YYYYY", Pd, Jd), Y("YYYYYY", Pd, Jd), aa(["YYYYY", "YYYYYY"], Yd), aa("YYYY", function(b, c) {
		c[Yd] = 2 === b.length ? a.parseTwoDigitYear(b) : t(b)
	}), aa("YY", function(b, c) {
		c[Yd] = a.parseTwoDigitYear(b)
	}), aa("Y", function(a, b) {
		b[Yd] = parseInt(a, 10)
	}), a.parseTwoDigitYear = function(a) {
		return t(a) + (t(a) > 68 ? 1900 : 2e3)
	};
	var ke = N("FullYear", !0);
	T("w", ["ww", 2], "wo", "week"), T("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), L("week", 5), L("isoWeek", 5), Y("w", Kd), Y("ww", Kd, Gd), Y("W", Kd), Y("WW", Kd, Gd), ba(["w", "ww", "W", "WW"], function(a, b, c, d) {
		b[d.substr(0, 1)] = t(a)
	});
	var le = {
		dow : 0,
		doy : 6
	};
	T("d", 0, "do", "day"), T("dd", 0, 0, function(a) {
		return this.localeData().weekdaysMin(this, a)
	}), T("ddd", 0, 0, function(a) {
		return this.localeData().weekdaysShort(this, a)
	}), T("dddd", 0, 0, function(a) {
		return this.localeData().weekdays(this, a)
	}), T("e", 0, 0, "weekday"), T("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), Y("d", Kd), Y("e", Kd), Y("E", Kd), Y("dd", function(a, b) {
		return b.weekdaysMinRegex(a)
	}), Y("ddd", function(a, b) {
		return b.weekdaysShortRegex(a)
	}), Y("dddd", function(a, b) {
		return b.weekdaysRegex(a)
	}), ba(["dd", "ddd", "dddd"], function(a, b, c, d) {
		var e = c._locale.weekdaysParse(a, d, c._strict);
		null != e ? b.d = e : l(c).invalidWeekday = a
	}), ba(["d", "e", "E"], function(a, b, c, d) {
		b[d] = t(a)
	});
	var me = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
	    ne = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
	    oe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
	    pe =
	    Vd,
	    qe =
	    Vd,
	    re =
	    Vd;
	T("H", ["HH", 2], 0, "hour"), T("h", ["hh", 2], 0, Qa), T("k", ["kk", 2], 0, Ra), T("hmm", 0, 0, function() {
		return "" + Qa.apply(this) + S(this.minutes(), 2)
	}), T("hmmss", 0, 0, function() {
		return "" + Qa.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2)
	}), T("Hmm", 0, 0, function() {
		return "" + this.hours() + S(this.minutes(), 2)
	}), T("Hmmss", 0, 0, function() {
		return "" + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2)
	}), Sa("a", !0), Sa("A", !1), I("hour", "h"), L("hour", 13), Y("a", Ta), Y("A", Ta), Y("H", Kd), Y("h", Kd), Y("HH", Kd, Gd), Y("hh", Kd, Gd), Y("hmm", Ld), Y("hmmss", Md), Y("Hmm", Ld), Y("Hmmss", Md), aa(["H", "HH"], _d), aa(["a", "A"], function(a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem =
		a
	}), aa(["h", "hh"], function(a, b, c) {
		b[_d] = t(a), l(c).bigHour = !0
	}), aa("hmm", function(a, b, c) {
		var d = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d)), l(c).bigHour = !0
	}), aa("hmmss", function(a, b, c) {
		var d = a.length - 4,
		    e = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d, 2)), b[be] = t(a.substr(e)), l(c).bigHour = !0
	}), aa("Hmm", function(a, b, c) {
		var d = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d))
	}), aa("Hmmss", function(a, b, c) {
		var d = a.length - 4,
		    e = a.length - 2;
		b[_d] = t(a.substr(0, d)), b[ae] = t(a.substr(d, 2)), b[be] = t(a.substr(e))
	});
	var se,
	    te = /[ap]\.?m?\.?/i,
	    ue = N("Hours", !0),
	    ve = {
		calendar : td,
		longDateFormat : ud,
		invalidDate : vd,
		ordinal : wd,
		ordinalParse : xd,
		relativeTime : yd,
		months : ge,
		monthsShort : he,
		week : le,
		weekdays : me,
		weekdaysMin : oe,
		weekdaysShort : ne,
		meridiemParse : te
	},
	    we = {},
	    xe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
	    ye = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
	    ze = /Z|[+-]\d\d(?::?\d\d)?/,
	    Ae = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
	    Be = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
	    Ce = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = w("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), a.ISO_8601 = function() {
	};
	var De = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
		var a = rb.apply(null, arguments);
		return this.isValid() && a.isValid() ? this > a ? this : a : n()
	}),
	    Ee = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
		var a = rb.apply(null, arguments);
		return this.isValid() && a.isValid() ? a > this ? this : a : n()
	}),
	    Fe = function() {
		return Date.now ? Date.now() : +new Date
	};
	xb("Z", ":"), xb("ZZ", ""), Y("Z", Td), Y("ZZ", Td), aa(["Z", "ZZ"], function(a, b, c) {
		c._useUTC = !0, c._tzm = yb(Td, a)
	});
	var Ge = /([\+\-]|\d\d)/gi;
	a.updateOffset = function() {
	};
	var He = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
	    Ie = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
	Mb.fn = vb.prototype;
	var Je = Rb(1, "add"),
	    Ke = Rb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
	var Le = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
		return
		void 0 === a ? this.localeData() : this.locale(a)
	});
	T(0, ["gg", 2], 0, function() {
		return this.weekYear() % 100
	}), T(0, ["GG", 2], 0, function() {
		return this.isoWeekYear() % 100
	}), xc("gggg", "weekYear"), xc("ggggg", "weekYear"), xc("GGGG", "isoWeekYear"), xc("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), Y("G", Rd), Y("g", Rd), Y("GG", Kd, Gd), Y("gg", Kd, Gd), Y("GGGG", Od, Id), Y("gggg", Od, Id), Y("GGGGG", Pd, Jd), Y("ggggg", Pd, Jd), ba(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
		b[d.substr(0, 2)] = t(a)
	}), ba(["gg", "GG"], function(b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), T("Q", 0, "Qo", "quarter"), I("quarter", "Q"), L("quarter", 7), Y("Q", Fd), aa("Q", function(a, b) {
		b[Zd] = 3 * (t(a) - 1)
	}), T("D", ["DD", 2], "Do", "date"), I("date", "D"), L("date", 9), Y("D", Kd), Y("DD", Kd, Gd), Y("Do", function(a, b) {
		return a ? b._ordinalParse : b._ordinalParseLenient
	}), aa(["D", "DD"], $d), aa("Do", function(a, b) {
		b[$d] = t(a.match(Kd)[0], 10)
	});
	var Me = N("Date", !0);
	T("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), L("dayOfYear", 4), Y("DDD", Nd), Y("DDDD", Hd), aa(["DDD", "DDDD"], function(a, b, c) {
		c._dayOfYear = t(a)
	}), T("m", ["mm", 2], 0, "minute"), I("minute", "m"), L("minute", 14), Y("m", Kd), Y("mm", Kd, Gd), aa(["m", "mm"], ae);
	var Ne = N("Minutes", !1);
	T("s", ["ss", 2], 0, "second"), I("second", "s"), L("second", 15), Y("s", Kd), Y("ss", Kd, Gd), aa(["s", "ss"], be);
	var Oe = N("Seconds", !1);
	T("S", 0, 0, function() {
		return ~~(this.millisecond() / 100)
	}), T(0, ["SS", 2], 0, function() {
		return ~~(this.millisecond() / 10)
	}), T(0, ["SSS", 3], 0, "millisecond"), T(0, ["SSSS", 4], 0, function() {
		return 10 * this.millisecond()
	}), T(0, ["SSSSS", 5], 0, function() {
		return 100 * this.millisecond()
	}), T(0, ["SSSSSS", 6], 0, function() {
		return 1e3 * this.millisecond()
	}), T(0, ["SSSSSSS", 7], 0, function() {
		return 1e4 * this.millisecond()
	}), T(0, ["SSSSSSSS", 8], 0, function() {
		return 1e5 * this.millisecond()
	}), T(0, ["SSSSSSSSS", 9], 0, function() {
		return 1e6 * this.millisecond()
	}), I("millisecond", "ms"), L("millisecond", 16), Y("S", Nd, Fd), Y("SS", Nd, Gd), Y("SSS", Nd, Hd);
	var Pe;
	for ( Pe = "SSSS"; Pe.length <= 9; Pe += "S")
		Y(Pe, Qd);
	for ( Pe = "S"; Pe.length <= 9; Pe += "S")
		aa(Pe, Gc);
	var Qe = N("Milliseconds", !1);
	T("z", 0, 0, "zoneAbbr"), T("zz", 0, 0, "zoneName");
	var Re = q.prototype;
	Re.add = Je, Re.calendar =
	Ub, Re.clone =
	Vb, Re.diff =
	ac, Re.endOf =
	mc, Re.format =
	ec, Re.from =
	fc, Re.fromNow =
	gc, Re.to =
	hc, Re.toNow =
	ic, Re.get =
	Q, Re.invalidAt =
	vc, Re.isAfter =
	Wb, Re.isBefore =
	Xb, Re.isBetween =
	Yb, Re.isSame =
	Zb, Re.isSameOrAfter =
	$b, Re.isSameOrBefore =
	_b, Re.isValid =
	tc, Re.lang =
	Le, Re.locale =
	jc, Re.localeData =
	kc, Re.max =
	Ee, Re.min =
	De, Re.parsingFlags =
	uc, Re.set =
	R, Re.startOf =
	lc, Re.subtract =
	Ke, Re.toArray =
	qc, Re.toObject =
	rc, Re.toDate =
	pc, Re.toISOString =
	dc, Re.toJSON =
	sc, Re.toString =
	cc, Re.unix =
	oc, Re.valueOf =
	nc, Re.creationData =
	wc, Re.year =
	ke, Re.isLeapYear =
	qa, Re.weekYear =
	yc, Re.isoWeekYear =
	zc, Re.quarter = Re.quarters = Ec, Re.month =
	ja, Re.daysInMonth =
	ka, Re.week = Re.weeks = Aa, Re.isoWeek = Re.isoWeeks = Ba, Re.weeksInYear =
	Bc, Re.isoWeeksInYear =
	Ac, Re.date =
	Me, Re.day = Re.days = Ja, Re.weekday =
	Ka, Re.isoWeekday =
	La, Re.dayOfYear =
	Fc, Re.hour = Re.hours = ue, Re.minute = Re.minutes = Ne, Re.second = Re.seconds = Oe, Re.millisecond = Re.milliseconds = Qe, Re.utcOffset =
	Bb, Re.utc =
	Db, Re.local =
	Eb, Re.parseZone =
	Fb, Re.hasAlignedHourOffset =
	Gb, Re.isDST =
	Hb, Re.isLocal =
	Jb, Re.isUtcOffset =
	Kb, Re.isUtc =
	Lb, Re.isUTC =
	Lb, Re.zoneAbbr =
	Hc, Re.zoneName =
	Ic, Re.dates = w("dates accessor is deprecated. Use date instead.", Me), Re.months = w("months accessor is deprecated. Use month instead", ja), Re.years = w("years accessor is deprecated. Use year instead", ke), Re.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Cb), Re.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ib);
	var Se = Re,
	    Te = B.prototype;
	Te.calendar = C, Te.longDateFormat =
	D, Te.invalidDate =
	E, Te.ordinal =
	F, Te.preparse =
	Lc, Te.postformat =
	Lc, Te.relativeTime =
	G, Te.pastFuture =
	H, Te.set =
	z, Te.months =
	ea, Te.monthsShort =
	fa, Te.monthsParse =
	ha, Te.monthsRegex =
	ma, Te.monthsShortRegex =
	la, Te.week =
	xa, Te.firstDayOfYear =
	za, Te.firstDayOfWeek =
	ya, Te.weekdays =
	Ea, Te.weekdaysMin =
	Ga, Te.weekdaysShort =
	Fa, Te.weekdaysParse =
	Ia, Te.weekdaysRegex =
	Ma, Te.weekdaysShortRegex =
	Na, Te.weekdaysMinRegex =
	Oa, Te.isPM =
	Ua, Te.meridiem =
	Va, Za("en", {
		ordinalParse : /\d{1,2}(th|st|nd|rd)/,
		ordinal : function(a) {
			var b = a % 10,
			    c = 1 === t(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = w("moment.lang is deprecated. Use moment.locale instead.", Za), a.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ab);
	var Ue = Math.abs,
	    Ve = cd("ms"),
	    We = cd("s"),
	    Xe = cd("m"),
	    Ye = cd("h"),
	    Ze = cd("d"),
	    $e = cd("w"),
	    _e = cd("M"),
	    af = cd("y"),
	    bf = ed("milliseconds"),
	    cf = ed("seconds"),
	    df = ed("minutes"),
	    ef = ed("hours"),
	    ff = ed("days"),
	    gf = ed("months"),
	    hf = ed("years"),
	    jf = Math.round,
	    kf = {
		s : 45,
		m : 45,
		h : 22,
		d : 26,
		M : 11
	},
	    lf = Math.abs,
	    mf = vb.prototype;
	mf.abs = Uc, mf.add =
	Wc, mf.subtract =
	Xc, mf.as =
	ad, mf.asMilliseconds =
	Ve, mf.asSeconds =
	We, mf.asMinutes =
	Xe, mf.asHours =
	Ye, mf.asDays =
	Ze, mf.asWeeks =
	$e, mf.asMonths =
	_e, mf.asYears =
	af, mf.valueOf =
	bd, mf._bubble =
	Zc, mf.get =
	dd, mf.milliseconds =
	bf, mf.seconds =
	cf, mf.minutes =
	df, mf.hours =
	ef, mf.days =
	ff, mf.weeks =
	fd, mf.months =
	gf, mf.years =
	hf, mf.humanize =
	kd, mf.toISOString =
	ld, mf.toString =
	ld, mf.toJSON =
	ld, mf.locale =
	jc, mf.localeData =
	kc, mf.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ld), mf.lang =
	Le, T("X", 0, 0, "unix"), T("x", 0, 0, "valueOf"), Y("x", Rd), Y("X", Ud), aa("X", function(a, b, c) {
		c._d = new Date(1e3 * parseFloat(a, 10))
	}), aa("x", function(a, b, c) {
		c._d = new Date(t(a))
	}), a.version = "2.14.1", b(rb), a.fn =
	Se, a.min =
	tb, a.max =
	ub, a.now =
	Fe, a.utc =
	j, a.unix =
	Jc, a.months =
	Pc, a.isDate =
	f, a.locale =
	Za, a.invalid =
	n, a.duration =
	Mb, a.isMoment =
	r, a.weekdays =
	Rc, a.parseZone =
	Kc, a.localeData =
	ab, a.isDuration =
	wb, a.monthsShort =
	Qc, a.weekdaysMin =
	Tc, a.defineLocale =
	$a, a.updateLocale =
	_a, a.locales =
	bb, a.weekdaysShort =
	Sc, a.normalizeUnits =
	J, a.relativeTimeRounding =
	id, a.relativeTimeThreshold =
	jd, a.calendarFormat =
	Tb, a.prototype =
	Se;
	var nf = a;
	return nf
});
if ("undefined" == typeof jQuery)
	throw new Error("Bootstrap's JavaScript requires jQuery");
+ function(a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3)
		throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
	"use strict";
	function b() {
		var a = document.createElement("bootstrap"),
		    b = {
			WebkitTransition : "webkitTransitionEnd",
			MozTransition : "transitionend",
			OTransition : "oTransitionEnd otransitionend",
			transition : "transitionend"
		};
		for (var c in b)
		if (
			void 0 !== a.style[c])
			return {
				end : b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
		    d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType : a.support.transition.end,
			delegateType : a.support.transition.end,
			handle : function(b) {
				if (a(b.target).is(this))
					return b.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var c = a(this),
			    e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}

	var c = '[data-dismiss="alert"]',
	    d = function(b) {
		a(b).on("click", c, this.close)
	};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}

		var e = a(this),
		    f = e.attr("data-target");
		f || ( f = e.attr("href"),
		f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a("#" === f ? [] : f);
		b && b.preventDefault(), g.length || ( g = e.closest(".alert")), g.trigger( b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor =
	d, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.button"),
			    f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}

	var c = function(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.7", c.DEFAULTS = {
		loadingText : "loading..."
	}, c.prototype.setState = function(b) {
		var c = "disabled",
		    d = this.$element,
		    e = d.is("input") ? "val" : "html",
		    f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
		}, this), 0)
	}, c.prototype.toggle = function() {
		var a = !0,
		    b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && ( a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && ( a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else
			this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor =
	c, a.fn.button.noConflict = function() {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target).closest(".btn");
		b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.carousel"),
			    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
			    g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}

	var c = function(b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options =
		c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval : 5e3,
		pause : "hover",
		wrap : !0,
		keyboard : !0
	}, c.prototype.keydown = function(a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch(a.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function(a, b) {
		var c = this.getItemIndex(b),
		    d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
		if (d && !this.options.wrap)
			return b;
		var e = "prev" == a ? -1 : 1,
		    f = (c + e) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function(a) {
		var b = this,
		    c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(a > this.$items.length - 1 || a < 0))
			return this.sliding ? this.$element.one("slid.bs.carousel", function() {
				b.to(a)
			}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function() {
		if (!this.sliding)
			return this.slide("next")
	}, c.prototype.prev = function() {
		if (!this.sliding)
			return this.slide("prev")
	}, c.prototype.slide = function(b, d) {
		var e = this.$element.find(".item.active"),
		    f = d || this.getItemForDirection(b, e),
		    g = this.interval,
		    h = "next" == b ? "left" : "right",
		    i = this;
		if (f.hasClass("active"))
			return this.sliding = !1;
		var j = f[0],
		    k = a.Event("slide.bs.carousel", {
			relatedTarget : j,
			direction : h
		});
		if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget : j,
				direction : h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor =
	c, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d, this
	};
	var e = function(c) {
		var d,
		    e = a(this),
		    f = a(e.attr("data-target") || ( d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
			    h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		var c,
		    d = b.attr("data-target") || ( c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function() {
			var c = a(this),
			    e = c.data("bs.collapse"),
			    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}

	var d = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle : !0
	}, d.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b,
			    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && ( b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition)
						return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ?
				void  this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function() {
		this[this.$element.hasClass("in")?"hide":"show"]()
	}, d.prototype.getParent = function() {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function(a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor =
	d, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
		    g = f.data("bs.collapse"),
		    h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		var c = b.attr("data-target");
		c || ( c = b.attr("href"),
		c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function() {
			var d = a(this),
			    e = b(d),
			    f = {
				relatedTarget : this
			};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger( c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function d(b) {
		return this.each(function() {
			var c = a(this),
			    d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}

	var e = ".dropdown-backdrop",
	    f = '[data-toggle="dropdown"]',
	    g = function(b) {
		a(b).on("click.bs.dropdown", this.toggle)
	};
	g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
			    g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget : this
				};
				if (f.trigger( d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
					return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
			}
			return !1
		}
	}, g.prototype.keydown = function(c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
				    g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which)
					return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
				    i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || ( j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor =
	g, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
	"use strict";
	function b(b, d) {
		return this.each(function() {
			var e = a(this),
			    f = e.data("bs.modal"),
			    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}

	var c = function(b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop : !0,
		keyboard : !0,
		show : !0
	}, c.prototype.toggle = function(a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function(b) {
		var d = this,
		    e = a.Event("show.bs.modal", {
			relatedTarget : b
		});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			d.$element.one("mouseup.dismiss.bs.modal", function(b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget : b
			});
			e ? d.$dialog.one("bsTransitionEnd", function() {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function(b) {
		b && b.preventDefault(),
		b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function() {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function(b) {
		var d = this,
		    e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
					return this.ignoreBackdropClick ?
					void (this.ignoreBackdropClick = !1) :
					void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
				return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function() {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else
			b && b()
	}, c.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function() {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft : !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight : this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft : "",
			paddingRight : ""
		})
	}, c.prototype.checkScrollbar = function() {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor =
	c, a.fn.modal.noConflict = function() {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
		    e = d.attr("href"),
		    f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
		    g = f.data("bs.modal") ? "toggle" : a.extend({
			remote : !/#/.test(e) && e
		}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.tooltip"),
			    f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}

	var c = function(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation : !0,
		placement : "top",
		selector : !1,
		template : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger : "hover focus",
		title : "",
		delay : 0,
		html : !1,
		container : !1,
		viewport : {
			selector : "body",
			padding : 0
		}
	}, c.prototype.init = function(b, c, d) {
		if (this.enabled = !0, this.type =
			b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click : !1,
				hover : !1,
				focus : !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector)
			throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "),
		    f = e.length; f--; ) {
			var g = e[f];
			if ("click" == g)
				this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
				    i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger : "manual",
			selector : ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show : b.delay,
			hide : b.delay
		}), b
	}, c.prototype.getDelegateOptions = function() {
		var b = {},
		    c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || ( c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ?
		void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ?
		void (c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function() {
		for (var a in this.inState)
		if (this.inState[a])
			return !0;
		return !1
	}, c.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		if (c || ( c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue())
			return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ?
			void (c.timeout = setTimeout(function() {
				"out" == c.hoverState && c.hide()
			}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d)
				return;
			var e = this,
			    f = this.tip(),
			    g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
			    i = /\s?auto?\s?/i,
			    j = i.test(h);
			j && ( h = h.replace(i, "") || "top"), f.detach().css({
				top : 0,
				left : 0,
				display : "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
			    l = f[0].offsetWidth,
			    m = f[0].offsetHeight;
			if (j) {
				var n = h,
				    o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function() {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
		    e = d[0].offsetWidth,
		    f = d[0].offsetHeight,
		    g = parseInt(d.css("margin-top"), 10),
		    h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && ( g = 0), isNaN(h) && ( h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using : function(a) {
				d.css({
					top : Math.round(a.top),
					left : Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
		    j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
		    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
		    n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css( c ? "left" : "top", 50 * (1 - a / b) + "%").css( c ? "top" : "left", "")
	}, c.prototype.setContent = function() {
		var a = this.tip(),
		    b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html?"html":"text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function(b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}

		var e = this,
		    f = a(this.$tip),
		    g = a.Event("hide.bs." + this.type);
		if (this.$element.trigger(g), !g.isDefaultPrevented())
			return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
	}, c.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function() {
		return this.getTitle()
	}, c.prototype.getPosition = function(b) {
		b = b || this.$element;
		var c = b[0],
		    d = "BODY" == c.tagName,
		    e = c.getBoundingClientRect();
		null == e.width && ( e = a.extend({}, e, {
			width : e.right - e.left,
			height : e.bottom - e.top
		}));
		var f = window.SVGElement && c instanceof window.SVGElement,
		    g = d ? {
			top : 0,
			left : 0
		} : f ? null : b.offset(),
		    h = {
			scroll : d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
		},
		    i = d ? {
			width : a(window).width(),
			height : a(window).height()
		} : null;
		return a.extend({}, e, h, i, g)
	}, c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top : b.top + b.height,
			left : b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top : b.top - d,
			left : b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top : b.top + b.height / 2 - d / 2,
			left : b.left - c
		} : {
			top : b.top + b.height / 2 - d / 2,
			left : b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top : 0,
			left : 0
		};
		if (!this.$viewport)
			return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
		    g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
			    i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
			    k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function() {
		var a,
		    b = this.$element,
		    c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function(a) {
		do
			a += ~~(1e6 * Math.random());
		while(document.getElementById(a));
		return a
	}, c.prototype.tip = function() {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))
			throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function() {
		this.enabled = !0
	}, c.prototype.disable = function() {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function(b) {
		var c = this;
		b && ( c = a(b.currentTarget).data("bs." + this.type), c || ( c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function() {
		var a = this;
		clearTimeout(this.timeout), this.hide(function() {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor =
	c, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.popover"),
			    f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}

	var c = function(a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip)
		throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement : "right",
		trigger : "click",
		content : "",
		template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor =
	c, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.setContent = function() {
		var a = this.tip(),
		    b = this.getTitle(),
		    c = this.getContent();
		a.find(".popover-title")[this.options.html?"html":"text"](b), a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function() {
		var a = this.$element,
		    b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor =
	c, a.fn.popover.noConflict = function() {
		return a.fn.popover = d, this
	}
}(jQuery), + function(a) {
	"use strict";
	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.scrollspy"),
			    f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.7", b.DEFAULTS = {
		offset : 10
	}, b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function() {
		var b = this,
		    c = "offset",
		    d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || ( c = "position",
		d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var b = a(this),
			    e = b.data("target") || b.attr("href"),
			    f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a,
		    b = this.$scrollElement.scrollTop() + this.options.offset,
		    c = this.getScrollHeight(),
		    d = this.options.offset + c - this.$scrollElement.height(),
		    e = this.offsets,
		    f = this.targets,
		    g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d)
			return g != ( a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0])
			return this.activeTarget = null, this.clear();
		for ( a = e.length; a--; )
			g != f[a] && b >= e[a] && (
			void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
		    d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && ( d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor =
	b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}

	var c = function(b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
		var b = this.element,
		    c = b.closest("ul:not(.dropdown-menu)"),
		    d = b.data("target");
		if (d || ( d = b.attr("href"),
		d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
			    f = a.Event("hide.bs.tab", {
				relatedTarget : b[0]
			}),
			    g = a.Event("show.bs.tab", {
				relatedTarget : e[0]
			});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
					e.trigger({
						type : "hidden.bs.tab",
						relatedTarget : b[0]
					}), b.trigger({
						type : "shown.bs.tab",
						relatedTarget : e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function(b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}

		var g = d.find("> .active"),
		    h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor =
	c, a.fn.tab.noConflict = function() {
		return a.fn.tab = d, this
	};
	var e = function(c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
			    e = d.data("bs.affix"),
			    f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}

	var c = function(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset : 0,
		target : window
	}, c.prototype.getState = function(a, b, c, d) {
		var e = this.$target.scrollTop(),
		    f = this.$element.offset(),
		    g = this.$target.height();
		if (null != c && "top" == this.affixed)
			return e < c && "top";
		if ("bottom" == this.affixed)
			return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
		var h = null == this.affixed,
		    i = h ? e : f.top,
		    j = h ? g : b;
		return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
	}, c.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset)
			return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
		    b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
			    d = this.options.offset,
			    e = d.top,
			    f = d.bottom,
			    g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && ( f = e = d), "function" == typeof e && ( e = d.top(this.$element)), "function" == typeof f && ( f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + ( h ? "-" + h : ""),
				    j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented())
					return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top : g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor =
	c, a.fn.affix.noConflict = function() {
		return a.fn.affix = d, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
			    d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery);
! function(a) {
	"use strict";
	if ("function" == typeof define && define.amd)
		define(["jquery", "moment"], a);
	else if ("object" == typeof exports)
		a(require("jquery"), require("moment"));
	else {
		if ("undefined" == typeof jQuery)
			throw "bootstrap-datetimepicker requires jQuery to be loaded first";
		if ("undefined" == typeof moment)
			throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
		a(jQuery, moment)
	}
}(function(a, b) {
	"use strict";
	if (!b)
		throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
	var c = function(c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = b().startOf("d"),
		    l = k.clone(),
		    m = !0,
		    n = !1,
		    o = !1,
		    p = 0,
		    q = [{
			clsName : "days",
			navFnc : "M",
			navStep : 1
		}, {
			clsName : "months",
			navFnc : "y",
			navStep : 1
		}, {
			clsName : "years",
			navFnc : "y",
			navStep : 10
		}, {
			clsName : "decades",
			navFnc : "y",
			navStep : 100
		}],
		    r = ["days", "months", "years", "decades"],
		    s = ["top", "bottom", "auto"],
		    t = ["left", "right", "auto"],
		    u = ["default", "top", "bottom"],
		    v = {
			up : 38,
			38 : "up",
			down : 40,
			40 : "down",
			left : 37,
			37 : "left",
			right : 39,
			39 : "right",
			tab : 9,
			9 : "tab",
			escape : 27,
			27 : "escape",
			enter : 13,
			13 : "enter",
			pageUp : 33,
			33 : "pageUp",
			pageDown : 34,
			34 : "pageDown",
			shift : 16,
			16 : "shift",
			control : 17,
			17 : "control",
			space : 32,
			32 : "space",
			t : 84,
			84 : "t",
			"delete" : 46,
			46 : "delete"
		},
		    w = {},
		    x = function(a) {
			if ("string" != typeof a || a.length > 1)
				throw new TypeError("isEnabled expects a single character string parameter");
			switch(a) {
			case"y":
				return -1 !== g.indexOf("Y");
			case"M":
				return -1 !== g.indexOf("M");
			case"d":
				return -1 !== g.toLowerCase().indexOf("d");
			case"h":
			case"H":
				return -1 !== g.toLowerCase().indexOf("h");
			case"m":
				return -1 !== g.indexOf("m");
			case"s":
				return -1 !== g.indexOf("s");
			default:
				return !1
			}
		},
		    y = function() {
			return x("h") || x("m") || x("s")
		},
		    z = function() {
			return x("y") || x("M") || x("d")
		},
		    A = function() {
			var b = a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action", "previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", d.calendarWeeks ? "6" : "5")).append(a("<th>").addClass("next").attr("data-action", "next").append(a("<span>").addClass(d.icons.next)))),
			    c = a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan", d.calendarWeeks ? "8" : "7")));
			return [a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))), a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]
		},
		    B = function() {
			var b = a("<tr>"),
			    c = a("<tr>"),
			    e = a("<tr>");
			return x("h") && (b.append(a("<td>").append(a("<a>").attr({
				href : "#",
				tabindex : "-1",
				title : "Increment Hour"
			}).addClass("btn").attr("data-action", "incrementHours").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({
				"data-time-component" : "hours",
				title : "Pick Hour"
			}).attr("data-action", "showHours"))), e.append(a("<td>").append(a("<a>").attr({
				href : "#",
				tabindex : "-1",
				title : "Decrement Hour"
			}).addClass("btn").attr("data-action", "decrementHours").append(a("<span>").addClass(d.icons.down))))), x("m") && (x("h") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({
				href : "#",
				tabindex : "-1",
				title : "Increment Minute"
			}).addClass("btn").attr("data-action", "incrementMinutes").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({
				"data-time-component" : "minutes",
				title : "Pick Minute"
			}).attr("data-action", "showMinutes"))), e.append(a("<td>").append(a("<a>").attr({
				href : "#",
				tabindex : "-1",
				title : "Decrement Minute"
			}).addClass("btn").attr("data-action", "decrementMinutes").append(a("<span>").addClass(d.icons.down))))), x("s") && (x("m") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({
				href : "#",
				tabindex : "-1",
				title : "Increment Second"
			}).addClass("btn").attr("data-action", "incrementSeconds").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({
				"data-time-component" : "seconds",
				title : "Pick Second"
			}).attr("data-action", "showSeconds"))), e.append(a("<td>").append(a("<a>").attr({
				href : "#",
				tabindex : "-1",
				title : "Decrement Second"
			}).addClass("btn").attr("data-action", "decrementSeconds").append(a("<span>").addClass(d.icons.down))))), f || (b.append(a("<td>").addClass("separator")), c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({
				"data-action" : "togglePeriod",
				tabindex : "-1",
				title : "Toggle Period"
			}))), e.append(a("<td>").addClass("separator"))), a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b, c, e]))
		},
		    C = function() {
			var b = a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),
			    c = a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),
			    d = a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),
			    e = [B()];
			return x("h") && e.push(b), x("m") && e.push(c), x("s") && e.push(d), e
		},
		    D = function() {
			var b = [];
			return d.showTodayButton && b.push(a("<td>").append(a("<a>").attr({
				"data-action" : "today",
				title : "Go to today"
			}).append(a("<span>").addClass(d.icons.today)))), !d.sideBySide && z() && y() && b.push(a("<td>").append(a("<a>").attr({
				"data-action" : "togglePicker",
				title : "Select Time"
			}).append(a("<span>").addClass(d.icons.time)))), d.showClear && b.push(a("<td>").append(a("<a>").attr({
				"data-action" : "clear",
				title : "Clear selection"
			}).append(a("<span>").addClass(d.icons.clear)))), d.showClose && b.push(a("<td>").append(a("<a>").attr({
				"data-action" : "close",
				title : "Close the picker"
			}).append(a("<span>").addClass(d.icons.close)))), a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))
		},
		    E = function() {
			var b = a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
			    c = a("<div>").addClass("datepicker").append(A()),
			    e = a("<div>").addClass("timepicker").append(C()),
			    g = a("<ul>").addClass("list-unstyled"),
			    h = a("<li>").addClass("picker-switch" + (d.collapse ? " accordion-toggle" : "")).append(D());
			return d.inline && b.removeClass("dropdown-menu"), f && b.addClass("usetwentyfour"), x("s") && !f && b.addClass("wider"), d.sideBySide && z() && y() ? (b.addClass("timepicker-sbs"), b.append(a("<div>").addClass("row").append(c.addClass("col-sm-6")).append(e.addClass("col-sm-6"))), b.append(h), b) : ("top" === d.toolbarPlacement && g.append(h), z() && g.append(a("<li>").addClass(d.collapse && y() ? "collapse in" : "").append(c)), "default" === d.toolbarPlacement && g.append(h), y() && g.append(a("<li>").addClass(d.collapse && z() ? "collapse" : "").append(e)), "bottom" === d.toolbarPlacement && g.append(h), b.append(g))
		},
		    F = function() {
			var b,
			    e = {};
			return b = c.is("input") || d.inline ? c.data() : c.find("input").data(), b.dateOptions && b.dateOptions instanceof Object && ( e = a.extend(!0, e, b.dateOptions)), a.each(d, function(a) {
				var c = "date" + a.charAt(0).toUpperCase() + a.slice(1);
				void 0 !== b[c] && (e[a] = b[c])
			}), e
		},
		    G = function() {
			var b,
			    e = (n || c).position(),
			    f = (n || c).offset(),
			    g = d.widgetPositioning.vertical,
			    h = d.widgetPositioning.horizontal;
			if (d.widgetParent)
				b = d.widgetParent.append(o);
			else if (c.is("input"))
				b = c.after(o).parent();
			else {
				if (d.inline)
					return
					void ( b = c.append(o));
				b = c, c.children().first().after(o)
			}
			if ("auto" === g && ( g = f.top + 1.5 * o.height() >= a(window).height() + a(window).scrollTop() && o.height() + c.outerHeight() < f.top ? "top" : "bottom"), "auto" === h && ( h = b.width() < f.left + o.outerWidth() / 2 && f.left + o.outerWidth() > a(window).width() ? "right" : "left"), "top" === g ? o.addClass("top").removeClass("bottom") : o.addClass("bottom").removeClass("top"), "right" === h ? o.addClass("pull-right") : o.removeClass("pull-right"), "relative" !== b.css("position") && ( b = b.parents().filter(function() {
					return "relative" === a(this).css("position")
				}).first()), 0 === b.length)
				throw new Error("datetimepicker component should be placed within a relative positioned container");
			o.css({
				top : "top" === g ? "auto" : e.top + c.outerHeight(),
				bottom : "top" === g ? e.top + c.outerHeight() : "auto",
				left : "left" === h ? b === c ? 0 : e.left : "auto",
				right : "left" === h ? "auto" : b.outerWidth() - c.outerWidth() - (b === c ? 0 : e.left)
			})
		},
		    H = function(a) {
			"dp.change" === a.type && (a.date && a.date.isSame(a.oldDate) || !a.date && !a.oldDate) || c.trigger(a)
		},
		    I = function(a) {
			"y" === a && ( a = "YYYY"), H({
				type : "dp.update",
				change : a,
				viewDate : l.clone()
			})
		},
		    J = function(a) {
			o && (a && ( i = Math.max(p, Math.min(3, i + a))), o.find(".datepicker > div").hide().filter(".datepicker-" + q[i].clsName).show())
		},
		    K = function() {
			var b = a("<tr>"),
			    c = l.clone().startOf("w").startOf("d");
			for (d.calendarWeeks === !0 && b.append(a("<th>").addClass("cw").text("#")); c.isBefore(l.clone().endOf("w")); )
				b.append(a("<th>").addClass("dow").text(c.format("dd"))), c.add(1, "d");
			o.find(".datepicker-days thead").append(b)
		},
		    L = function(a) {
			return d.disabledDates[a.format("YYYY-MM-DD")] === !0
		},
		    M = function(a) {
			return d.enabledDates[a.format("YYYY-MM-DD")] === !0
		},
		    N = function(a) {
			return d.disabledHours[a.format("H")] === !0
		},
		    O = function(a) {
			return d.enabledHours[a.format("H")] === !0
		},
		    P = function(b, c) {
			if (!b.isValid())
				return !1;
			if (d.disabledDates && "d" === c && L(b))
				return !1;
			if (d.enabledDates && "d" === c && !M(b))
				return !1;
			if (d.minDate && b.isBefore(d.minDate, c))
				return !1;
			if (d.maxDate && b.isAfter(d.maxDate, c))
				return !1;
			if (d.daysOfWeekDisabled && "d" === c && -1 !== d.daysOfWeekDisabled.indexOf(b.day()))
				return !1;
			if (d.disabledHours && ("h" === c || "m" === c || "s" === c) && N(b))
				return !1;
			if (d.enabledHours && ("h" === c || "m" === c || "s" === c) && !O(b))
				return !1;
			if (d.disabledTimeIntervals && ("h" === c || "m" === c || "s" === c)) {
				var e = !1;
				if (a.each(d.disabledTimeIntervals, function() {
						return b.isBetween(this[0], this[1]) ? ( e = !0, !1) :
						void 0
					}), e)
					return !1
			}
			return !0
		},
		    Q = function() {
			for (var b = [],
			    c = l.clone().startOf("y").startOf("d"); c.isSame(l, "y"); )
				b.push(a("<span>").attr("data-action", "selectMonth").addClass("month").text(c.format("MMM"))), c.add(1, "M");
			o.find(".datepicker-months td").empty().append(b)
		},
		    R = function() {
			var b = o.find(".datepicker-months"),
			    c = b.find("th"),
			    d = b.find("tbody").find("span");
			c.eq(0).find("span").attr("title", "Previous Year"), c.eq(1).attr("title", "Select Year"), c.eq(2).find("span").attr("title", "Next Year"), b.find(".disabled").removeClass("disabled"), P(l.clone().subtract(1, "y"), "y") || c.eq(0).addClass("disabled"), c.eq(1).text(l.year()), P(l.clone().add(1, "y"), "y") || c.eq(2).addClass("disabled"), d.removeClass("active"), k.isSame(l, "y") && !m && d.eq(k.month()).addClass("active"), d.each(function(b) {
				P(l.clone().month(b), "M") || a(this).addClass("disabled")
			})
		},
		    S = function() {
			var a = o.find(".datepicker-years"),
			    b = a.find("th"),
			    c = l.clone().subtract(5, "y"),
			    e = l.clone().add(6, "y"),
			    f = "";
			for (b.eq(0).find("span").attr("title", "Previous Decade"), b.eq(1).attr("title", "Select Decade"), b.eq(2).find("span").attr("title", "Next Decade"), a.find(".disabled").removeClass("disabled"), d.minDate && d.minDate.isAfter(c, "y") && b.eq(0).addClass("disabled"), b.eq(1).text(c.year() + "-" + e.year()), d.maxDate && d.maxDate.isBefore(e, "y") && b.eq(2).addClass("disabled"); !c.isAfter(e, "y"); )
				f += '<span data-action="selectYear" class="year' + (c.isSame(k, "y") && !m ? " active" : "") + (P(c, "y") ? "" : " disabled") + '">' + c.year() + "</span>", c.add(1, "y");
			a.find("td").html(f)
		},
		    T = function() {
			var a = o.find(".datepicker-decades"),
			    c = a.find("th"),
			    e = b(l.isBefore(b({
				y : 1999
			})) ? {
				y : 1899
			} : {
				y : 1999
			}),
			    f = e.clone().add(100, "y"),
			    g = "";
			for (c.eq(0).find("span").attr("title", "Previous Century"), c.eq(2).find("span").attr("title", "Next Century"), a.find(".disabled").removeClass("disabled"), (e.isSame(b({
				y : 1900
			})) || d.minDate && d.minDate.isAfter(e, "y")) && c.eq(0).addClass("disabled"), c.eq(1).text(e.year() + "-" + f.year()), (e.isSame(b({
				y : 2e3
			})) || d.maxDate && d.maxDate.isBefore(f, "y")) && c.eq(2).addClass("disabled"); !e.isAfter(f, "y"); )
				g += '<span data-action="selectDecade" class="decade' + (e.isSame(k, "y") ? " active" : "") + (P(e, "y") ? "" : " disabled") + '" data-selection="' + (e.year() + 6) + '">' + (e.year() + 1) + " - " + (e.year() + 12) + "</span>", e.add(12, "y");
			g += "<span></span><span></span><span></span>", a.find("td").html(g)
		},
		    U = function() {
			var c,
			    e,
			    f,
			    g,
			    h = o.find(".datepicker-days"),
			    i = h.find("th"),
			    j = [];
			if (z()) {
				for (i.eq(0).find("span").attr("title", "Previous Month"), i.eq(1).attr("title", "Select Month"), i.eq(2).find("span").attr("title", "Next Month"), h.find(".disabled").removeClass("disabled"), i.eq(1).text(l.format(d.dayViewHeaderFormat)), P(l.clone().subtract(1, "M"), "M") || i.eq(0).addClass("disabled"), P(l.clone().add(1, "M"), "M") || i.eq(2).addClass("disabled"),
				c = l.clone().startOf("M").startOf("w").startOf("d"),
				g = 0; 42 > g; g++)
					0 === c.weekday() && ( e = a("<tr>"), d.calendarWeeks && e.append('<td class="cw">' + c.week() + "</td>"), j.push(e)),
					f = "", c.isBefore(l, "M") && (f += " old"), c.isAfter(l, "M") && (f += " new"), c.isSame(k, "d") && !m && (f += " active"), P(c, "d") || (f += " disabled"), c.isSame(b(), "d") && (f += " today"), (0 === c.day() || 6 === c.day()) && (f += " weekend"), e.append('<td data-action="selectDay" data-day="' + c.format("L") + '" class="day' + f + '">' + c.date() + "</td>"), c.add(1, "d");
				h.find("tbody").empty().append(j), R(), S(), T()
			}
		},
		    V = function() {
			var b = o.find(".timepicker-hours table"),
			    c = l.clone().startOf("d"),
			    d = [],
			    e = a("<tr>");
			for (l.hour() > 11 && !f && c.hour(12); c.isSame(l, "d") && (f || l.hour() < 12 && c.hour() < 12 || l.hour() > 11); )
				c.hour() % 4 === 0 && ( e = a("<tr>"), d.push(e)), e.append('<td data-action="selectHour" class="hour' + (P(c, "h") ? "" : " disabled") + '">' + c.format( f ? "HH" : "hh") + "</td>"), c.add(1, "h");
			b.empty().append(d)
		},
		    W = function() {
			for (var b = o.find(".timepicker-minutes table"),
			    c = l.clone().startOf("h"),
			    e = [],
			    f = a("<tr>"),
			    g = 1 === d.stepping ? 5 : d.stepping; l.isSame(c, "h"); )
				c.minute() % (4 * g) === 0 && ( f = a("<tr>"), e.push(f)), f.append('<td data-action="selectMinute" class="minute' + (P(c, "m") ? "" : " disabled") + '">' + c.format("mm") + "</td>"), c.add(g, "m");
			b.empty().append(e)
		},
		    X = function() {
			for (var b = o.find(".timepicker-seconds table"),
			    c = l.clone().startOf("m"),
			    d = [],
			    e = a("<tr>"); l.isSame(c, "m"); )
				c.second() % 20 === 0 && ( e = a("<tr>"), d.push(e)), e.append('<td data-action="selectSecond" class="second' + (P(c, "s") ? "" : " disabled") + '">' + c.format("ss") + "</td>"), c.add(5, "s");
			b.empty().append(d)
		},
		    Y = function() {
			var a,
			    b,
			    c = o.find(".timepicker span[data-time-component]");
			f || ( a = o.find(".timepicker [data-action=togglePeriod]"),
			b = k.clone().add(k.hours() >= 12 ? -12 : 12, "h"), a.text(k.format("A")), P(b, "h") ? a.removeClass("disabled") : a.addClass("disabled")), c.filter("[data-time-component=hours]").text(k.format( f ? "HH" : "hh")), c.filter("[data-time-component=minutes]").text(k.format("mm")), c.filter("[data-time-component=seconds]").text(k.format("ss")), V(), W(), X()
		},
		    Z = function() {
			o && (U(), Y())
		},
		    $ = function(a) {
			var b = m ? null : k;
			return a ? ( a = a.clone().locale(d.locale), 1 !== d.stepping && a.minutes(Math.round(a.minutes() / d.stepping) * d.stepping % 60).seconds(0),
			void (P(a) ? ( k = a,
			l = k.clone(), e.val(k.format(g)), c.data("date", k.format(g)),
			m = !1, Z(), H({
				type : "dp.change",
				date : k.clone(),
				oldDate : b
			})) : (d.keepInvalid || e.val( m ? "" : k.format(g)), H({
				type : "dp.error",
				date : a
			})))) : ( m = !0, e.val(""), c.data("date", ""), H({
				type : "dp.change",
				date : !1,
				oldDate : b
			}),
			void  Z())
		},
		    _ = function() {
			var b = !1;
			return o ? (o.find(".collapse").each(function() {
				var c = a(this).data("collapse");
				return c && c.transitioning ? ( b = !0, !1) : !0
			}), b ? j : (n && n.hasClass("btn") && n.toggleClass("active"), o.hide(), a(window).off("resize", G), o.off("click", "[data-action]"), o.off("mousedown", !1), o.remove(),
			o = !1, H({
				type : "dp.hide",
				date : k.clone()
			}), j)) : j
		},
		    aa = function() {
			$(null)
		},
		    ba = {
			next : function() {
				var a = q[i].navFnc;
				l.add(q[i].navStep, a), U(), I(a)
			},
			previous : function() {
				var a = q[i].navFnc;
				l.subtract(q[i].navStep, a), U(), I(a)
			},
			pickerSwitch : function() {
				J(1)
			},
			selectMonth : function(b) {
				var c = a(b.target).closest("tbody").find("span").index(a(b.target));
				l.month(c), i === p ? ($(k.clone().year(l.year()).month(l.month())), d.inline || _()) : (J(-1), U()), I("M")
			},
			selectYear : function(b) {
				var c = parseInt(a(b.target).text(), 10) || 0;
				l.year(c), i === p ? ($(k.clone().year(l.year())), d.inline || _()) : (J(-1), U()), I("YYYY")
			},
			selectDecade : function(b) {
				var c = parseInt(a(b.target).data("selection"), 10) || 0;
				l.year(c), i === p ? ($(k.clone().year(l.year())), d.inline || _()) : (J(-1), U()), I("YYYY")
			},
			selectDay : function(b) {
				var c = l.clone();
				a(b.target).is(".old") && c.subtract(1, "M"), a(b.target).is(".new") && c.add(1, "M"), $(c.date(parseInt(a(b.target).text(), 10))), y() || d.keepOpen || d.inline || _()
			},
			incrementHours : function() {
				var a = k.clone().add(1, "h");
				P(a, "h") && $(a)
			},
			incrementMinutes : function() {
				var a = k.clone().add(d.stepping, "m");
				P(a, "m") && $(a)
			},
			incrementSeconds : function() {
				var a = k.clone().add(1, "s");
				P(a, "s") && $(a)
			},
			decrementHours : function() {
				var a = k.clone().subtract(1, "h");
				P(a, "h") && $(a)
			},
			decrementMinutes : function() {
				var a = k.clone().subtract(d.stepping, "m");
				P(a, "m") && $(a)
			},
			decrementSeconds : function() {
				var a = k.clone().subtract(1, "s");
				P(a, "s") && $(a)
			},
			togglePeriod : function() {
				$(k.clone().add(k.hours() >= 12 ? -12 : 12, "h"))
			},
			togglePicker : function(b) {
				var c,
				    e = a(b.target),
				    f = e.closest("ul"),
				    g = f.find(".in"),
				    h = f.find(".collapse:not(.in)");
				if (g && g.length) {
					if ( c = g.data("collapse"), c && c.transitioning)
						return;
					g.collapse ? (g.collapse("hide"), h.collapse("show")) : (g.removeClass("in"), h.addClass("in")), e.is("span") ? e.toggleClass(d.icons.time + " " + d.icons.date) : e.find("span").toggleClass(d.icons.time + " " + d.icons.date)
				}
			},
			showPicker : function() {
				o.find(".timepicker > div:not(.timepicker-picker)").hide(), o.find(".timepicker .timepicker-picker").show()
			},
			showHours : function() {
				o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-hours").show()
			},
			showMinutes : function() {
				o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-minutes").show()
			},
			showSeconds : function() {
				o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-seconds").show()
			},
			selectHour : function(b) {
				var c = parseInt(a(b.target).text(), 10);
				f || (k.hours() >= 12 ? 12 !== c && (c += 12) : 12 === c && ( c = 0)), $(k.clone().hours(c)), ba.showPicker.call(j)
			},
			selectMinute : function(b) {
				$(k.clone().minutes(parseInt(a(b.target).text(), 10))), ba.showPicker.call(j)
			},
			selectSecond : function(b) {
				$(k.clone().seconds(parseInt(a(b.target).text(), 10))), ba.showPicker.call(j)
			},
			clear : aa,
			today : function() {
				P(b(), "d") && $(b())
			},
			close : _
		},
		    ca = function(b) {
			return a(b.currentTarget).is(".disabled") ? !1 : (ba[a(b.currentTarget).data("action")].apply(j, arguments), !1)
		},
		    da = function() {
			var c,
			    f = {
				year : function(a) {
					return a.month(0).date(1).hours(0).seconds(0).minutes(0)
				},
				month : function(a) {
					return a.date(1).hours(0).seconds(0).minutes(0)
				},
				day : function(a) {
					return a.hours(0).seconds(0).minutes(0)
				},
				hour : function(a) {
					return a.seconds(0).minutes(0)
				},
				minute : function(a) {
					return a.seconds(0)
				}
			};
			return e.prop("disabled") || !d.ignoreReadonly && e.prop("readonly") || o ? j : (
			void 0 !== e.val() && 0 !== e.val().trim().length ? $(fa(e.val().trim())) : d.useCurrent && m && (e.is("input") && 0 === e.val().trim().length || d.inline) && ( c = b(), "string" == typeof d.useCurrent && ( c = f[d.useCurrent](c)), $(c)),
			o = E(), K(), Q(), o.find(".timepicker-hours").hide(), o.find(".timepicker-minutes").hide(), o.find(".timepicker-seconds").hide(), Z(), J(), a(window).on("resize", G), o.on("click", "[data-action]", ca), o.on("mousedown", !1), n && n.hasClass("btn") && n.toggleClass("active"), o.show(), G(), d.focusOnShow && !e.is(":focus") && e.focus(), H({
				type : "dp.show"
			}), j)
		},
		    ea = function() {
			return o ? _() : da()
		},
		    fa = function(a) {
			return a = b.isMoment(a) || a instanceof Date ? b(a) : b(a, h, d.useStrict), a.locale(d.locale), a
		},
		    ga = function(a) {
			var b,
			    c,
			    e,
			    f,
			    g = null,
			    h = [],
			    i = {},
			    k = a.which,
			    l = "p";
			w[k] = l;
			for (b in w)w.hasOwnProperty(b) && w[b] === l && (h.push(b), parseInt(b, 10) !== k && (i[b] = !0));
			for (b in d.keyBinds)
			if (d.keyBinds.hasOwnProperty(b) && "function" == typeof d.keyBinds[b] && ( e = b.split(" "), e.length === h.length && v[k] === e[e.length - 1])) {
				for ( f = !0,
				c = e.length - 2; c >= 0; c--)
					if (!(v[e[c]] in i)) {
						f = !1;
						break
					}
				if (f) {
					g = d.keyBinds[b];
					break
				}
			}
			g && (g.call(j, o), a.stopPropagation(), a.preventDefault())
		},
		    ha = function(a) {
			w[a.which] = "r", a.stopPropagation(), a.preventDefault()
		},
		    ia = function(b) {
			var c = a(b.target).val().trim(),
			    d = c ? fa(c) : null;
			return $(d), b.stopImmediatePropagation(), !1
		},
		    ja = function() {
			e.on({
				change : ia,
				blur : d.debug ? "" : _,
				keydown : ga,
				keyup : ha,
				focus : d.allowInputToggle ? da : ""
			}), c.is("input") ? e.on({
				focus : da
			}) : n && (n.on("click", ea), n.on("mousedown", !1))
		},
		    ka = function() {
			e.off({
				change : ia,
				blur : _,
				keydown : ga,
				keyup : ha,
				focus : d.allowInputToggle ? _ : ""
			}), c.is("input") ? e.off({
				focus : da
			}) : n && (n.off("click", ea), n.off("mousedown", !1))
		},
		    la = function(b) {
			var c = {};
			return a.each(b, function() {
				var a = fa(this);
				a.isValid() && (c[a.format("YYYY-MM-DD")] = !0)
			}), Object.keys(c).length ? c : !1
		},
		    ma = function(b) {
			var c = {};
			return a.each(b, function() {
				c[this] = !0
			}), Object.keys(c).length ? c : !1
		},
		    na = function() {
			var a = d.format || "L LT";
			g = a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(a) {
				var b = k.localeData().longDateFormat(a) || a;
				return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(a) {
					return k.localeData().longDateFormat(a) || a
				})
			}),
			h = d.extraFormats ? d.extraFormats.slice() : [], h.indexOf(a) < 0 && h.indexOf(g) < 0 && h.push(g),
			f = g.toLowerCase().indexOf("a") < 1 && g.replace(/\[.*?\]/g, "").indexOf("h") < 1, x("y") && ( p = 2), x("M") && ( p = 1), x("d") && ( p = 0),
			i = Math.max(p, i), m || $(k)
		};
		if (j.destroy = function() {
				_(), ka(), c.removeData("DateTimePicker"), c.removeData("date")
			}, j.toggle =
			ea, j.show =
			da, j.hide =
			_, j.disable = function() {
				return _(), n && n.hasClass("btn") && n.addClass("disabled"), e.prop("disabled", !0), j
			}, j.enable = function() {
				return n && n.hasClass("btn") && n.removeClass("disabled"), e.prop("disabled", !1), j
			}, j.ignoreReadonly = function(a) {
				if (0 === arguments.length)
					return d.ignoreReadonly;
				if ("boolean" != typeof a)
					throw new TypeError("ignoreReadonly () expects a boolean parameter");
				return d.ignoreReadonly = a, j
			}, j.options = function(b) {
				if (0 === arguments.length)
					return a.extend(!0, {}, d);
				if (!( b instanceof Object))
					throw new TypeError("options() options parameter should be an object");
				return a.extend(!0, d, b), a.each(d, function(a, b) {
					if (
						void 0 === j[a])
						throw new TypeError("option " + a + " is not recognized!");
					j[a](b)
				}), j
			}, j.date = function(a) {
				if (0 === arguments.length)
					return m ? null : k.clone();
				if (!(null === a || "string" == typeof a || b.isMoment(a) || a instanceof Date))
					throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
				return $(null === a ? null : fa(a)), j
			}, j.format = function(a) {
				if (0 === arguments.length)
					return d.format;
				if ("string" != typeof a && ("boolean" != typeof a || a !== !1))
					throw new TypeError("format() expects a sting or boolean:false parameter " + a);
				return d.format = a, g && na(), j
			}, j.dayViewHeaderFormat = function(a) {
				if (0 === arguments.length)
					return d.dayViewHeaderFormat;
				if ("string" != typeof a)
					throw new TypeError("dayViewHeaderFormat() expects a string parameter");
				return d.dayViewHeaderFormat = a, j
			}, j.extraFormats = function(a) {
				if (0 === arguments.length)
					return d.extraFormats;
				if (a !== !1 && !( a instanceof Array))
					throw new TypeError("extraFormats() expects an array or false parameter");
				return d.extraFormats = a, h && na(), j
			}, j.disabledDates = function(b) {
				if (0 === arguments.length)
					return d.disabledDates ? a.extend({}, d.disabledDates) : d.disabledDates;
				if (!b)
					return d.disabledDates = !1, Z(), j;
				if (!( b instanceof Array))
					throw new TypeError("disabledDates() expects an array parameter");
				return d.disabledDates = la(b), d.enabledDates = !1, Z(), j
			}, j.enabledDates = function(b) {
				if (0 === arguments.length)
					return d.enabledDates ? a.extend({}, d.enabledDates) : d.enabledDates;
				if (!b)
					return d.enabledDates = !1, Z(), j;
				if (!( b instanceof Array))
					throw new TypeError("enabledDates() expects an array parameter");
				return d.enabledDates = la(b), d.disabledDates = !1, Z(), j
			}, j.daysOfWeekDisabled = function(a) {
				if (0 === arguments.length)
					return d.daysOfWeekDisabled.splice(0);
				if ("boolean" == typeof a && !a)
					return d.daysOfWeekDisabled = !1, Z(), j;
				if (!( a instanceof Array))
					throw new TypeError("daysOfWeekDisabled() expects an array parameter");
				if (d.daysOfWeekDisabled = a.reduce(function(a, b) {
					return b = parseInt(b, 10), b > 6 || 0 > b || isNaN(b) ? a : (-1 === a.indexOf(b) && a.push(b), a)
				}, []).sort(), d.useCurrent && !d.keepInvalid) {
					for (var b = 0; !P(k, "d"); ) {
						if (k.add(1, "d"), 7 === b)
							throw "Tried 7 times to find a valid date";
						b++
					}
					$(k)
				}
				return Z(), j
			}, j.maxDate = function(a) {
				if (0 === arguments.length)
					return d.maxDate ? d.maxDate.clone() : d.maxDate;
				if ("boolean" == typeof a && a === !1)
					return d.maxDate = !1, Z(), j;
				"string" == typeof a && ("now" === a || "moment" === a) && ( a = b());
				var c = fa(a);
				if (!c.isValid())
					throw new TypeError("maxDate() Could not parse date parameter: " + a);
				if (d.minDate && c.isBefore(d.minDate))
					throw new TypeError("maxDate() date parameter is before options.minDate: " + c.format(g));
				return d.maxDate = c, d.useCurrent && !d.keepInvalid && k.isAfter(a) && $(d.maxDate), l.isAfter(c) && ( l = c.clone()), Z(), j
			}, j.minDate = function(a) {
				if (0 === arguments.length)
					return d.minDate ? d.minDate.clone() : d.minDate;
				if ("boolean" == typeof a && a === !1)
					return d.minDate = !1, Z(), j;
				"string" == typeof a && ("now" === a || "moment" === a) && ( a = b());
				var c = fa(a);
				if (!c.isValid())
					throw new TypeError("minDate() Could not parse date parameter: " + a);
				if (d.maxDate && c.isAfter(d.maxDate))
					throw new TypeError("minDate() date parameter is after options.maxDate: " + c.format(g));
				return d.minDate = c, d.useCurrent && !d.keepInvalid && k.isBefore(a) && $(d.minDate), l.isBefore(c) && ( l = c.clone()), Z(), j
			}, j.defaultDate = function(a) {
				if (0 === arguments.length)
					return d.defaultDate ? d.defaultDate.clone() : d.defaultDate;
				if (!a)
					return d.defaultDate = !1, j;
				"string" == typeof a && ("now" === a || "moment" === a) && ( a = b());
				var c = fa(a);
				if (!c.isValid())
					throw new TypeError("defaultDate() Could not parse date parameter: " + a);
				if (!P(c))
					throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
				return d.defaultDate = c, (d.defaultDate && d.inline || "" === e.val().trim() &&
				void 0 === e.attr("placeholder")) && $(d.defaultDate), j
			}, j.locale = function(a) {
				if (0 === arguments.length)
					return d.locale;
				if (!b.localeData(a))
					throw new TypeError("locale() locale " + a + " is not loaded from moment locales!");
				return d.locale = a, k.locale(d.locale), l.locale(d.locale), g && na(), o && (_(), da()), j
			}, j.stepping = function(a) {
				return 0 === arguments.length ? d.stepping : ( a = parseInt(a, 10), (isNaN(a) || 1 > a) && ( a = 1), d.stepping =
				a, j)
			}, j.useCurrent = function(a) {
				var b = ["year", "month", "day", "hour", "minute"];
				if (0 === arguments.length)
					return d.useCurrent;
				if ("boolean" != typeof a && "string" != typeof a)
					throw new TypeError("useCurrent() expects a boolean or string parameter");
				if ("string" == typeof a && -1 === b.indexOf(a.toLowerCase()))
					throw new TypeError("useCurrent() expects a string parameter of " + b.join(", "));
				return d.useCurrent = a, j
			}, j.collapse = function(a) {
				if (0 === arguments.length)
					return d.collapse;
				if ("boolean" != typeof a)
					throw new TypeError("collapse() expects a boolean parameter");
				return d.collapse === a ? j : (d.collapse = a, o && (_(), da()), j)
			}, j.icons = function(b) {
				if (0 === arguments.length)
					return a.extend({}, d.icons);
				if (!( b instanceof Object))
					throw new TypeError("icons() expects parameter to be an Object");
				return a.extend(d.icons, b), o && (_(), da()), j
			}, j.useStrict = function(a) {
				if (0 === arguments.length)
					return d.useStrict;
				if ("boolean" != typeof a)
					throw new TypeError("useStrict() expects a boolean parameter");
				return d.useStrict = a, j
			}, j.sideBySide = function(a) {
				if (0 === arguments.length)
					return d.sideBySide;
				if ("boolean" != typeof a)
					throw new TypeError("sideBySide() expects a boolean parameter");
				return d.sideBySide = a, o && (_(), da()), j
			}, j.viewMode = function(a) {
				if (0 === arguments.length)
					return d.viewMode;
				if ("string" != typeof a)
					throw new TypeError("viewMode() expects a string parameter");
				if (-1 === r.indexOf(a))
					throw new TypeError("viewMode() parameter must be one of (" + r.join(", ") + ") value");
				return d.viewMode = a,
				i = Math.max(r.indexOf(a), p), J(), j
			}, j.toolbarPlacement = function(a) {
				if (0 === arguments.length)
					return d.toolbarPlacement;
				if ("string" != typeof a)
					throw new TypeError("toolbarPlacement() expects a string parameter");
				if (-1 === u.indexOf(a))
					throw new TypeError("toolbarPlacement() parameter must be one of (" + u.join(", ") + ") value");
				return d.toolbarPlacement = a, o && (_(), da()), j
			}, j.widgetPositioning = function(b) {
				if (0 === arguments.length)
					return a.extend({}, d.widgetPositioning);
				if ("[object Object]" !== {}.toString.call(b))
					throw new TypeError("widgetPositioning() expects an object variable");
				if (b.horizontal) {
					if ("string" != typeof b.horizontal)
						throw new TypeError("widgetPositioning() horizontal variable must be a string");
					if (b.horizontal = b.horizontal.toLowerCase(), -1 === t.indexOf(b.horizontal))
						throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + t.join(", ") + ")");
					d.widgetPositioning.horizontal = b.horizontal
				}
				if (b.vertical) {
					if ("string" != typeof b.vertical)
						throw new TypeError("widgetPositioning() vertical variable must be a string");
					if (b.vertical = b.vertical.toLowerCase(), -1 === s.indexOf(b.vertical))
						throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + s.join(", ") + ")");
					d.widgetPositioning.vertical = b.vertical
				}
				return Z(), j
			}, j.calendarWeeks = function(a) {
				if (0 === arguments.length)
					return d.calendarWeeks;
				if ("boolean" != typeof a)
					throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
				return d.calendarWeeks = a, Z(), j
			}, j.showTodayButton = function(a) {
				if (0 === arguments.length)
					return d.showTodayButton;
				if ("boolean" != typeof a)
					throw new TypeError("showTodayButton() expects a boolean parameter");
				return d.showTodayButton = a, o && (_(), da()), j
			}, j.showClear = function(a) {
				if (0 === arguments.length)
					return d.showClear;
				if ("boolean" != typeof a)
					throw new TypeError("showClear() expects a boolean parameter");
				return d.showClear = a, o && (_(), da()), j
			}, j.widgetParent = function(b) {
				if (0 === arguments.length)
					return d.widgetParent;
				if ("string" == typeof b && ( b = a(b)), null !== b && "string" != typeof b && !( b instanceof a))
					throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
				return d.widgetParent = b, o && (_(), da()), j
			}, j.keepOpen = function(a) {
				if (0 === arguments.length)
					return d.keepOpen;
				if ("boolean" != typeof a)
					throw new TypeError("keepOpen() expects a boolean parameter");
				return d.keepOpen = a, j
			}, j.focusOnShow = function(a) {
				if (0 === arguments.length)
					return d.focusOnShow;
				if ("boolean" != typeof a)
					throw new TypeError("focusOnShow() expects a boolean parameter");
				return d.focusOnShow = a, j
			}, j.inline = function(a) {
				if (0 === arguments.length)
					return d.inline;
				if ("boolean" != typeof a)
					throw new TypeError("inline() expects a boolean parameter");
				return d.inline = a, j
			}, j.clear = function() {
				return aa(), j
			}, j.keyBinds = function(a) {
				return d.keyBinds = a, j
			}, j.debug = function(a) {
				if ("boolean" != typeof a)
					throw new TypeError("debug() expects a boolean parameter");
				return d.debug = a, j
			}, j.allowInputToggle = function(a) {
				if (0 === arguments.length)
					return d.allowInputToggle;
				if ("boolean" != typeof a)
					throw new TypeError("allowInputToggle() expects a boolean parameter");
				return d.allowInputToggle = a, j
			}, j.showClose = function(a) {
				if (0 === arguments.length)
					return d.showClose;
				if ("boolean" != typeof a)
					throw new TypeError("showClose() expects a boolean parameter");
				return d.showClose = a, j
			}, j.keepInvalid = function(a) {
				if (0 === arguments.length)
					return d.keepInvalid;
				if ("boolean" != typeof a)
					throw new TypeError("keepInvalid() expects a boolean parameter");
				return d.keepInvalid = a, j
			}, j.datepickerInput = function(a) {
				if (0 === arguments.length)
					return d.datepickerInput;
				if ("string" != typeof a)
					throw new TypeError("datepickerInput() expects a string parameter");
				return d.datepickerInput = a, j
			}, j.disabledTimeIntervals = function(b) {
				if (0 === arguments.length)
					return d.disabledTimeIntervals ? a.extend({}, d.disabledTimeIntervals) : d.disabledTimeIntervals;
				if (!b)
					return d.disabledTimeIntervals = !1, Z(), j;
				if (!( b instanceof Array))
					throw new TypeError("disabledTimeIntervals() expects an array parameter");
				return d.disabledTimeIntervals = b, Z(), j
			}, j.disabledHours = function(b) {
				if (0 === arguments.length)
					return d.disabledHours ? a.extend({}, d.disabledHours) : d.disabledHours;
				if (!b)
					return d.disabledHours = !1, Z(), j;
				if (!( b instanceof Array))
					throw new TypeError("disabledHours() expects an array parameter");
				if (d.disabledHours = ma(b), d.enabledHours = !1, d.useCurrent && !d.keepInvalid) {
					for (var c = 0; !P(k, "h"); ) {
						if (k.add(1, "h"), 24 === c)
							throw "Tried 24 times to find a valid date";
						c++
					}
					$(k)
				}
				return Z(), j
			}, j.enabledHours = function(b) {
				if (0 === arguments.length)
					return d.enabledHours ? a.extend({}, d.enabledHours) : d.enabledHours;
				if (!b)
					return d.enabledHours = !1, Z(), j;
				if (!( b instanceof Array))
					throw new TypeError("enabledHours() expects an array parameter");
				if (d.enabledHours = ma(b), d.disabledHours = !1, d.useCurrent && !d.keepInvalid) {
					for (var c = 0; !P(k, "h"); ) {
						if (k.add(1, "h"), 24 === c)
							throw "Tried 24 times to find a valid date";
						c++
					}
					$(k);
				}
				return Z(), j
			}, j.viewDate = function(a) {
				if (0 === arguments.length)
					return l.clone();
				if (!a)
					return l = k.clone(), j;
				if (!("string" == typeof a || b.isMoment(a) || a instanceof Date))
					throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
				return l = fa(a), I(), j
			}, c.is("input"))
			e = c;
		else if ( e = c.find(d.datepickerInput), 0 === e.size())
			e = c.find("input");
		else if (!e.is("input"))
			throw new Error('CSS class "' + d.datepickerInput + '" cannot be applied to non input element');
		if (c.hasClass("input-group") && ( n = 0 === c.find(".datepickerbutton").size() ? c.find('[class^="input-group-"]') : c.find(".datepickerbutton")), !d.inline && !e.is("input"))
			throw new Error("Could not initialize DateTimePicker without an input element");
		return a.extend(!0, d, F()), j.options(d), na(), ja(), e.prop("disabled") && j.disable(), e.is("input") && 0 !== e.val().trim().length ? $(fa(e.val().trim())) : d.defaultDate &&
		void 0 === e.attr("placeholder") && $(d.defaultDate), d.inline && da(), j
	};
	a.fn.datetimepicker = function(b) {
		return this.each(function() {
			var d = a(this);
			d.data("DateTimePicker") || ( b = a.extend(!0, {}, a.fn.datetimepicker.defaults, b), d.data("DateTimePicker", c(d, b)))
		})
	}, a.fn.datetimepicker.defaults = {
		format : !1,
		dayViewHeaderFormat : "MMMM YYYY",
		extraFormats : !1,
		stepping : 1,
		minDate : !1,
		maxDate : !1,
		useCurrent : !0,
		collapse : !0,
		locale : b.locale(),
		defaultDate : !1,
		disabledDates : !1,
		enabledDates : !1,
		icons : {
			time : "glyphicon glyphicon-time",
			date : "glyphicon glyphicon-calendar",
			up : "glyphicon glyphicon-chevron-up",
			down : "glyphicon glyphicon-chevron-down",
			previous : "glyphicon glyphicon-chevron-left",
			next : "glyphicon glyphicon-chevron-right",
			today : "glyphicon glyphicon-screenshot",
			clear : "glyphicon glyphicon-trash",
			close : "glyphicon glyphicon-remove"
		},
		useStrict : !1,
		sideBySide : !1,
		daysOfWeekDisabled : !1,
		calendarWeeks : !1,
		viewMode : "days",
		toolbarPlacement : "default",
		showTodayButton : !1,
		showClear : !1,
		showClose : !1,
		widgetPositioning : {
			horizontal : "auto",
			vertical : "auto"
		},
		widgetParent : null,
		ignoreReadonly : !1,
		keepOpen : !1,
		focusOnShow : !0,
		inline : !1,
		keepInvalid : !1,
		datepickerInput : ".datepickerinput",
		keyBinds : {
			up : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") ? this.date(c.clone().subtract(7, "d")) : this.date(c.clone().add(1, "m"))
				}
			},
			down : function(a) {
				if (!a)
					return
					void  this.show();
				var c = this.date() || b();
				a.find(".datepicker").is(":visible") ? this.date(c.clone().add(7, "d")) : this.date(c.clone().subtract(1, "m"))
			},
			"control up" : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") ? this.date(c.clone().subtract(1, "y")) : this.date(c.clone().add(1, "h"))
				}
			},
			"control down" : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") ? this.date(c.clone().add(1, "y")) : this.date(c.clone().subtract(1, "h"))
				}
			},
			left : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") && this.date(c.clone().subtract(1, "d"))
				}
			},
			right : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") && this.date(c.clone().add(1, "d"))
				}
			},
			pageUp : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") && this.date(c.clone().subtract(1, "M"))
				}
			},
			pageDown : function(a) {
				if (a) {
					var c = this.date() || b();
					a.find(".datepicker").is(":visible") && this.date(c.clone().add(1, "M"))
				}
			},
			enter : function() {
				this.hide()
			},
			escape : function() {
				this.hide()
			},
			"control space" : function(a) {
				a.find(".timepicker").is(":visible") && a.find('.btn[data-action="togglePeriod"]').click()
			},
			t : function() {
				this.date(b())
			},
			"delete" : function() {
				this.clear()
			}
		},
		debug : !1,
		allowInputToggle : !1,
		disabledTimeIntervals : !1,
		disabledHours : !1,
		enabledHours : !1,
		viewDate : !1
	}
}); 