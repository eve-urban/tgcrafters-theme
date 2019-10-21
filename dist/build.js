(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function accordion() {
	var acc = document.getElementsByClassName("accordion-tabs");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
}

exports.default = accordion;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function sliderInit() {

  var sliderImages = document.querySelectorAll(".slide"),
      arrowLeft = document.querySelector("#arrow-left"),
      arrowRight = document.querySelector("#arrow-right"),
      current = 0;

  // Clear all images
  function reset() {
    for (var i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  // Init slider
  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }

  // Show prev
  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

  // Show next
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }

  // Left arrow click
  arrowLeft.addEventListener("click", function () {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  // Right arrow click
  arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();
}

exports.default = sliderInit;

},{}],3:[function(require,module,exports){
"use strict";

var _start = require("../node_modules/uswds/src/js/start");

var _start2 = _interopRequireDefault(_start);

var _slider = require("./modules/_slider");

var _slider2 = _interopRequireDefault(_slider);

var _accordion = require("./modules/_accordion");

var _accordion2 = _interopRequireDefault(_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Main Javascipt Source
// Example class and DOMContentLoaded listener

(0, _slider2.default)();
(0, _accordion2.default)();

window.uswds = _start2.default;

var App = function App() {
	var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, App);

	console.log('Hello World!');
};

;

// create new App object
var $bs = new App();
window.$bs = $bs;

// Main Javascipt Source
// Example class and DOMContentLoaded listener

},{"../node_modules/uswds/src/js/start":35,"./modules/_accordion":1,"./modules/_slider":2}],4:[function(require,module,exports){

/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;

},{}],5:[function(require,module,exports){
/**
 * array-foreach
 *   Array#forEach ponyfill for older browsers
 *   (Ponyfill: A polyfill that doesn't overwrite the native method)
 * 
 * https://github.com/twada/array-foreach
 *
 * Copyright (c) 2015-2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/array-foreach/blob/master/MIT-LICENSE
 */
'use strict';

module.exports = function forEach (ary, callback, thisArg) {
    if (ary.forEach) {
        ary.forEach(callback, thisArg);
        return;
    }
    for (var i = 0; i < ary.length; i+=1) {
        callback.call(thisArg, ary[i], i, ary);
    }
};

},{}],6:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(window.self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

},{}],7:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}],8:[function(require,module,exports){
'use strict';

// <3 Modernizr
// https://raw.githubusercontent.com/Modernizr/Modernizr/master/feature-detects/dom/dataset.js

function useNative() {
	var elem = document.createElement('div');
	elem.setAttribute('data-a-b', 'c');

	return Boolean(elem.dataset && elem.dataset.aB === 'c');
}

function nativeDataset(element) {
	return element.dataset;
}

module.exports = useNative() ? nativeDataset : function (element) {
	var map = {};
	var attributes = element.attributes;

	function getter() {
		return this.value;
	}

	function setter(name, value) {
		if (typeof value === 'undefined') {
			this.removeAttribute(name);
		} else {
			this.setAttribute(name, value);
		}
	}

	for (var i = 0, j = attributes.length; i < j; i++) {
		var attribute = attributes[i];

		if (attribute) {
			var name = attribute.name;

			if (name.indexOf('data-') === 0) {
				var prop = name.slice(5).replace(/-./g, function (u) {
					return u.charAt(1).toUpperCase();
				});

				var value = attribute.value;

				Object.defineProperty(map, prop, {
					enumerable: true,
					get: getter.bind({ value: value || '' }),
					set: setter.bind(element, name)
				});
			}
		}
	}

	return map;
};


},{}],9:[function(require,module,exports){
// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);

},{}],10:[function(require,module,exports){
/* global define, KeyboardEvent, module */

(function () {

  var keyboardeventKeyPolyfill = {
    polyfill: polyfill,
    keys: {
      3: 'Cancel',
      6: 'Help',
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      28: 'Convert',
      29: 'NonConvert',
      30: 'Accept',
      31: 'ModeChange',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      41: 'Select',
      42: 'Print',
      43: 'Execute',
      44: 'PrintScreen',
      45: 'Insert',
      46: 'Delete',
      48: ['0', ')'],
      49: ['1', '!'],
      50: ['2', '@'],
      51: ['3', '#'],
      52: ['4', '$'],
      53: ['5', '%'],
      54: ['6', '^'],
      55: ['7', '&'],
      56: ['8', '*'],
      57: ['9', '('],
      91: 'OS',
      93: 'ContextMenu',
      144: 'NumLock',
      145: 'ScrollLock',
      181: 'VolumeMute',
      182: 'VolumeDown',
      183: 'VolumeUp',
      186: [';', ':'],
      187: ['=', '+'],
      188: [',', '<'],
      189: ['-', '_'],
      190: ['.', '>'],
      191: ['/', '?'],
      192: ['`', '~'],
      219: ['[', '{'],
      220: ['\\', '|'],
      221: [']', '}'],
      222: ["'", '"'],
      224: 'Meta',
      225: 'AltGraph',
      246: 'Attn',
      247: 'CrSel',
      248: 'ExSel',
      249: 'EraseEof',
      250: 'Play',
      251: 'ZoomOut'
    }
  };

  // Function keys (F1-24).
  var i;
  for (i = 1; i < 25; i++) {
    keyboardeventKeyPolyfill.keys[111 + i] = 'F' + i;
  }

  // Printable ASCII characters.
  var letter = '';
  for (i = 65; i < 91; i++) {
    letter = String.fromCharCode(i);
    keyboardeventKeyPolyfill.keys[i] = [letter.toLowerCase(), letter.toUpperCase()];
  }

  function polyfill () {
    if (!('KeyboardEvent' in window) ||
        'key' in KeyboardEvent.prototype) {
      return false;
    }

    // Polyfill `key` on `KeyboardEvent`.
    var proto = {
      get: function (x) {
        var key = keyboardeventKeyPolyfill.keys[this.which || this.keyCode];

        if (Array.isArray(key)) {
          key = key[+this.shiftKey];
        }

        return key;
      }
    };
    Object.defineProperty(KeyboardEvent.prototype, 'key', proto);
    return proto;
  }

  if (typeof define === 'function' && define.amd) {
    define('keyboardevent-key-polyfill', keyboardeventKeyPolyfill);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    module.exports = keyboardeventKeyPolyfill;
  } else if (window) {
    window.keyboardeventKeyPolyfill = keyboardeventKeyPolyfill;
  }

})();

},{}],11:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],13:[function(require,module,exports){
const assign = require('object-assign');
const delegate = require('../delegate');
const delegateAll = require('../delegateAll');

const DELEGATE_PATTERN = /^(.+):delegate\((.+)\)$/;
const SPACE = ' ';

const getListeners = function(type, handler) {
  var match = type.match(DELEGATE_PATTERN);
  var selector;
  if (match) {
    type = match[1];
    selector = match[2];
  }

  var options;
  if (typeof handler === 'object') {
    options = {
      capture: popKey(handler, 'capture'),
      passive: popKey(handler, 'passive')
    };
  }

  var listener = {
    selector: selector,
    delegate: (typeof handler === 'object')
      ? delegateAll(handler)
      : selector
        ? delegate(selector, handler)
        : handler,
    options: options
  };

  if (type.indexOf(SPACE) > -1) {
    return type.split(SPACE).map(function(_type) {
      return assign({type: _type}, listener);
    });
  } else {
    listener.type = type;
    return [listener];
  }
};

var popKey = function(obj, key) {
  var value = obj[key];
  delete obj[key];
  return value;
};

module.exports = function behavior(events, props) {
  const listeners = Object.keys(events)
    .reduce(function(memo, type) {
      var listeners = getListeners(type, events[type]);
      return memo.concat(listeners);
    }, []);

  return assign({
    add: function addBehavior(element) {
      listeners.forEach(function(listener) {
        element.addEventListener(
          listener.type,
          listener.delegate,
          listener.options
        );
      });
    },
    remove: function removeBehavior(element) {
      listeners.forEach(function(listener) {
        element.removeEventListener(
          listener.type,
          listener.delegate,
          listener.options
        );
      });
    }
  }, props);
};

},{"../delegate":15,"../delegateAll":16,"object-assign":12}],14:[function(require,module,exports){
module.exports = function compose(functions) {
  return function(e) {
    return functions.some(function(fn) {
      return fn.call(this, e) === false;
    }, this);
  };
};

},{}],15:[function(require,module,exports){
// polyfill Element.prototype.closest
require('element-closest');

module.exports = function delegate(selector, fn) {
  return function delegation(event) {
    var target = event.target.closest(selector);
    if (target) {
      return fn.call(target, event);
    }
  }
};

},{"element-closest":9}],16:[function(require,module,exports){
const delegate = require('../delegate');
const compose = require('../compose');

const SPLAT = '*';

module.exports = function delegateAll(selectors) {
  const keys = Object.keys(selectors)

  // XXX optimization: if there is only one handler and it applies to
  // all elements (the "*" CSS selector), then just return that
  // handler
  if (keys.length === 1 && keys[0] === SPLAT) {
    return selectors[SPLAT];
  }

  const delegates = keys.reduce(function(memo, selector) {
    memo.push(delegate(selector, selectors[selector]));
    return memo;
  }, []);
  return compose(delegates);
};

},{"../compose":14,"../delegate":15}],17:[function(require,module,exports){
module.exports = function ignore(element, fn) {
  return function ignorance(e) {
    if (element !== e.target && !element.contains(e.target)) {
      return fn.call(this, e);
    }
  };
};

},{}],18:[function(require,module,exports){
module.exports = {
  behavior:     require('./behavior'),
  delegate:     require('./delegate'),
  delegateAll:  require('./delegateAll'),
  ignore:       require('./ignore'),
  keymap:       require('./keymap'),
};

},{"./behavior":13,"./delegate":15,"./delegateAll":16,"./ignore":17,"./keymap":19}],19:[function(require,module,exports){
require('keyboardevent-key-polyfill');

// these are the only relevant modifiers supported on all platforms,
// according to MDN:
// <https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState>
const MODIFIERS = {
  'Alt':      'altKey',
  'Control':  'ctrlKey',
  'Ctrl':     'ctrlKey',
  'Shift':    'shiftKey'
};

const MODIFIER_SEPARATOR = '+';

const getEventKey = function(event, hasModifiers) {
  var key = event.key;
  if (hasModifiers) {
    for (var modifier in MODIFIERS) {
      if (event[MODIFIERS[modifier]] === true) {
        key = [modifier, key].join(MODIFIER_SEPARATOR);
      }
    }
  }
  return key;
};

module.exports = function keymap(keys) {
  const hasModifiers = Object.keys(keys).some(function(key) {
    return key.indexOf(MODIFIER_SEPARATOR) > -1;
  });
  return function(event) {
    var key = getEventKey(event, hasModifiers);
    return [key, key.toLowerCase()]
      .reduce(function(result, _key) {
        if (_key in keys) {
          result = keys[key].call(this, event);
        }
        return result;
      }, undefined);
  };
};

module.exports.MODIFIERS = MODIFIERS;

},{"keyboardevent-key-polyfill":10}],20:[function(require,module,exports){
module.exports = function once(listener, options) {
  var wrapped = function wrappedOnce(e) {
    e.currentTarget.removeEventListener(e.type, wrapped, options);
    return listener.call(this, e);
  };
  return wrapped;
};


},{}],21:[function(require,module,exports){
'use strict';

var RE_TRIM = /(^\s+)|(\s+$)/g;
var RE_SPLIT = /\s+/;

var trim = String.prototype.trim
  ? function(str) { return str.trim(); }
  : function(str) { return str.replace(RE_TRIM, ''); };

var queryById = function(id) {
  return this.querySelector('[id="' + id.replace(/"/g, '\\"') + '"]');
};

module.exports = function resolveIds(ids, doc) {
  if (typeof ids !== 'string') {
    throw new Error('Expected a string but got ' + (typeof ids));
  }

  if (!doc) {
    doc = window.document;
  }

  var getElementById = doc.getElementById
    ? doc.getElementById.bind(doc)
    : queryById.bind(doc);

  ids = trim(ids).split(RE_SPLIT);

  // XXX we can short-circuit here because trimming and splitting a
  // string of just whitespace produces an array containing a single,
  // empty string
  if (ids.length === 1 && ids[0] === '') {
    return [];
  }

  return ids
    .map(function(id) {
      var el = getElementById(id);
      if (!el) {
        throw new Error('no element with id: "' + id + '"');
      }
      return el;
    });
};

},{}],22:[function(require,module,exports){
const assign = require('object-assign');
const filter = require('array-filter');
const forEach = require('array-foreach');
const behavior = require('../utils/behavior');
const toggle = require('../utils/toggle');
const isElementInViewport = require('../utils/is-in-viewport');
const { CLICK } = require('../events');
const { prefix: PREFIX } = require('../config');

// XXX match .usa-accordion and .usa-accordion-bordered
const ACCORDION = `.${PREFIX}-accordion, .${PREFIX}-accordion-bordered`;
const BUTTON = `.${PREFIX}-accordion-button[aria-controls]`;
const EXPANDED = 'aria-expanded';
const MULTISELECTABLE = 'aria-multiselectable';

/**
 * Get an Array of button elements belonging directly to the given
 * accordion element.
 * @param {HTMLElement} accordion
 * @return {array<HTMLButtonElement>}
 */
const getAccordionButtons = (accordion) => {
  const buttons = accordion.querySelectorAll(BUTTON);

  return filter(buttons, button => button.closest(ACCORDION) === accordion);
};

/**
 * Toggle a button's "pressed" state, optionally providing a target
 * state.
 *
 * @param {HTMLButtonElement} button
 * @param {boolean?} expanded If no state is provided, the current
 * state will be toggled (from false to true, and vice-versa).
 * @return {boolean} the resulting state
 */
const toggleButton = (button, expanded) => {
  const accordion = button.closest(ACCORDION);
  let safeExpanded = expanded;
  if (!accordion) {
    throw new Error(`${BUTTON} is missing outer ${ACCORDION}`);
  }

  safeExpanded = toggle(button, expanded);

  // XXX multiselectable is opt-in, to preserve legacy behavior
  const multiselectable = accordion.getAttribute(MULTISELECTABLE) === 'true';

  if (safeExpanded && !multiselectable) {
    forEach(getAccordionButtons(accordion), (other) => {
      if (other !== button) {
        toggle(other, false);
      }
    });
  }
};

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} true
 */
const showButton = button => toggleButton(button, true);

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} false
 */
const hideButton = button => toggleButton(button, false);

const accordion = behavior({
  [CLICK]: {
    [BUTTON](event) {
      event.preventDefault();
      toggleButton(this);

      if (this.getAttribute(EXPANDED) === 'true') {
        // We were just expanded, but if another accordion was also just
        // collapsed, we may no longer be in the viewport. This ensures
        // that we are still visible, so the user isn't confused.
        if (!isElementInViewport(this)) this.scrollIntoView();
      }
    },
  },
}, {
  init(root) {
    forEach(root.querySelectorAll(BUTTON), (button) => {
      const expanded = button.getAttribute(EXPANDED) === 'true';
      toggleButton(button, expanded);
    });
  },
  ACCORDION,
  BUTTON,
  show: showButton,
  hide: hideButton,
  toggle: toggleButton,
  getButtons: getAccordionButtons,
});

/**
 * TODO: for 2.0, remove everything below this comment and export the
 * behavior directly:
 *
 * module.exports = behavior({...});
 */
const Accordion = function (root) {
  this.root = root;
  accordion.on(this.root);
};

// copy all of the behavior methods and props to Accordion
assign(Accordion, accordion);

Accordion.prototype.show = showButton;
Accordion.prototype.hide = hideButton;

Accordion.prototype.remove = function () {
  accordion.off(this.root);
};

module.exports = Accordion;

},{"../config":31,"../events":32,"../utils/behavior":37,"../utils/is-in-viewport":39,"../utils/toggle":43,"array-filter":4,"array-foreach":5,"object-assign":12}],23:[function(require,module,exports){
const behavior = require('../utils/behavior');

const { CLICK } = require('../events');
const { prefix: PREFIX } = require('../config');

const HEADER = `.${PREFIX}-banner-header`;
const EXPANDED_CLASS = `${PREFIX}-banner-header-expanded`;

const toggleBanner = function toggleEl(event) {
  event.preventDefault();
  this.closest(HEADER).classList.toggle(EXPANDED_CLASS);

  return false;
};

module.exports = behavior({
  [CLICK]: {
    [`${HEADER} [aria-controls]`]: toggleBanner,
  },
});

},{"../config":31,"../events":32,"../utils/behavior":37}],24:[function(require,module,exports){

const debounce = require('lodash.debounce');
const forEach = require('array-foreach');
const behavior = require('../utils/behavior');
const select = require('../utils/select');

const { CLICK } = require('../events');
const { prefix: PREFIX } = require('../config');

const HIDDEN = 'hidden';
const SCOPE = `.${PREFIX}-footer-big`;
const NAV = `${SCOPE} nav`;
const BUTTON = `${NAV} .${PREFIX}-footer-primary-link`;
const LIST = `${NAV} ul`;

const HIDE_MAX_WIDTH = 600;
const DEBOUNCE_RATE = 180;

function showPanel() {
  if (window.innerWidth < HIDE_MAX_WIDTH) {
    const list = this.closest(LIST);
    list.classList.toggle(HIDDEN);

    // NB: this *should* always succeed because the button
    // selector is scoped to ".{prefix}-footer-big nav"
    const lists = list.closest(NAV)
      .querySelectorAll('ul');

    forEach(lists, (el) => {
      if (el !== list) {
        el.classList.add(HIDDEN);
      }
    });
  }
}

const resize = debounce(() => {
  const hidden = window.innerWidth < HIDE_MAX_WIDTH;
  forEach(select(LIST), (list) => {
    list.classList.toggle(HIDDEN, hidden);
  });
}, DEBOUNCE_RATE);

module.exports = behavior({
  [CLICK]: {
    [BUTTON]: showPanel,
  },
}, {
  // export for use elsewhere
  HIDE_MAX_WIDTH,
  DEBOUNCE_RATE,

  init() {
    resize();
    window.addEventListener('resize', resize);
  },

  teardown() {
    window.removeEventListener('resize', resize);
  },
});

},{"../config":31,"../events":32,"../utils/behavior":37,"../utils/select":40,"array-foreach":5,"lodash.debounce":11}],25:[function(require,module,exports){
const accordion = require('./accordion');
const banner = require('./banner');
const footer = require('./footer');
const navigation = require('./navigation');
const password = require('./password');
const search = require('./search');
const skipnav = require('./skipnav');
const validator = require('./validator');

module.exports = {
  accordion,
  banner,
  footer,
  navigation,
  password,
  search,
  skipnav,
  validator,
};

},{"./accordion":22,"./banner":23,"./footer":24,"./navigation":26,"./password":27,"./search":28,"./skipnav":29,"./validator":30}],26:[function(require,module,exports){
const assign = require('object-assign');
const forEach = require('array-foreach');
const behavior = require('../utils/behavior');
const select = require('../utils/select');
const FocusTrap = require('../utils/focus-trap');
const accordion = require('./accordion');

const { CLICK } = require('../events');
const { prefix: PREFIX } = require('../config');

const NAV = `.${PREFIX}-nav`;
const NAV_LINKS = `${NAV} a`;
const OPENERS = `.${PREFIX}-menu-btn`;
const CLOSE_BUTTON = `.${PREFIX}-nav-close`;
const OVERLAY = `.${PREFIX}-overlay`;
const CLOSERS = `${CLOSE_BUTTON}, .${PREFIX}-overlay`;
const TOGGLES = [NAV, OVERLAY].join(', ');

const ACTIVE_CLASS = 'usa-mobile_nav-active';
const VISIBLE_CLASS = 'is-visible';

let navigation;

const isActive = () => document.body.classList.contains(ACTIVE_CLASS);

const toggleNav = function (active) {
  const { body } = document;
  const safeActive = typeof active === 'boolean' ? active : !isActive();

  body.classList.toggle(ACTIVE_CLASS, safeActive);

  forEach(select(TOGGLES), el => el.classList.toggle(VISIBLE_CLASS, safeActive));

  navigation.focusTrap.update(safeActive);

  const closeButton = body.querySelector(CLOSE_BUTTON);
  const menuButton = body.querySelector(OPENERS);

  if (safeActive && closeButton) {
    // The mobile nav was just activated, so focus on the close button,
    // which is just before all the nav elements in the tab order.
    closeButton.focus();
  } else if (!safeActive && document.activeElement === closeButton && menuButton) {
    // The mobile nav was just deactivated, and focus was on the close
    // button, which is no longer visible. We don't want the focus to
    // disappear into the void, so focus on the menu button if it's
    // visible (this may have been what the user was just focused on,
    // if they triggered the mobile nav by mistake).
    menuButton.focus();
  }

  return safeActive;
};

const resize = () => {
  const closer = document.body.querySelector(CLOSE_BUTTON);

  if (isActive() && closer && closer.getBoundingClientRect().width === 0) {
    // The mobile nav is active, but the close box isn't visible, which
    // means the user's viewport has been resized so that it is no longer
    // in mobile mode. Let's make the page state consistent by
    // deactivating the mobile nav.
    navigation.toggleNav.call(closer, false);
  }
};

const onMenuClose = () => navigation.toggleNav.call(navigation, false);

navigation = behavior({
  [CLICK]: {
    [OPENERS]: toggleNav,
    [CLOSERS]: toggleNav,
    [NAV_LINKS]() {
      // A navigation link has been clicked! We want to collapse any
      // hierarchical navigation UI it's a part of, so that the user
      // can focus on whatever they've just selected.

      // Some navigation links are inside accordions; when they're
      // clicked, we want to collapse those accordions.
      const acc = this.closest(accordion.ACCORDION);

      if (acc) {
        accordion.getButtons(acc).forEach(btn => accordion.hide(btn));
      }

      // If the mobile navigation menu is active, we want to hide it.
      if (isActive()) {
        navigation.toggleNav.call(navigation, false);
      }
    },
  },
}, {
  init() {
    const trapContainer = document.querySelector(NAV);

    if (trapContainer) {
      navigation.focusTrap = FocusTrap(trapContainer, {
        Escape: onMenuClose,
      });
    }

    resize();
    window.addEventListener('resize', resize, false);
  },
  teardown() {
    window.removeEventListener('resize', resize, false);
  },
  focusTrap: null,
  toggleNav,
});

/**
 * TODO for 2.0, remove this statement and export `navigation` directly:
 *
 * module.exports = behavior({...});
 */
module.exports = assign(
  el => navigation.on(el),
  navigation
);

},{"../config":31,"../events":32,"../utils/behavior":37,"../utils/focus-trap":38,"../utils/select":40,"./accordion":22,"array-foreach":5,"object-assign":12}],27:[function(require,module,exports){

const behavior = require('../utils/behavior');
const toggleFormInput = require('../utils/toggle-form-input');

const { CLICK } = require('../events');
const { prefix: PREFIX } = require('../config');

const LINK = `.${PREFIX}-show_password, .${PREFIX}-show_multipassword`;

function toggle(event) {
  event.preventDefault();
  toggleFormInput(this);
}

module.exports = behavior({
  [CLICK]: {
    [LINK]: toggle,
  },
});

},{"../config":31,"../events":32,"../utils/behavior":37,"../utils/toggle-form-input":42}],28:[function(require,module,exports){

const assign = require('object-assign');
const forEach = require('array-foreach');
const ignore = require('receptor/ignore');
const behavior = require('../utils/behavior');
const select = require('../utils/select');

const { CLICK } = require('../events');

const BUTTON = '.js-search-button';
const FORM = '.js-search-form';
const INPUT = '[type=search]';
const CONTEXT = 'header'; // XXX

let lastButton;

const getForm = (button) => {
  const context = button.closest(CONTEXT);
  return context
    ? context.querySelector(FORM)
    : document.querySelector(FORM);
};

const toggleSearch = (button, active) => {
  const form = getForm(button);

  if (!form) {
    throw new Error(`No ${FORM} found for search toggle in ${CONTEXT}!`);
  }

  /* eslint-disable no-param-reassign */
  button.hidden = active;
  form.hidden = !active;
  /* eslint-enable*/

  if (!active) {
    return;
  }

  const input = form.querySelector(INPUT);

  if (input) {
    input.focus();
  }
  // when the user clicks _outside_ of the form w/ignore(): hide the
  // search, then remove the listener
  const listener = ignore(form, () => {
    if (lastButton) {
      hideSearch.call(lastButton); // eslint-disable-line no-use-before-define
    }

    document.body.removeEventListener(CLICK, listener);
  });

  // Normally we would just run this code without a timeout, but
  // IE11 and Edge will actually call the listener *immediately* because
  // they are currently handling this exact type of event, so we'll
  // make sure the browser is done handling the current click event,
  // if any, before we attach the listener.
  setTimeout(() => {
    document.body.addEventListener(CLICK, listener);
  }, 0);
};

function showSearch() {
  toggleSearch(this, true);
  lastButton = this;
}

function hideSearch() {
  toggleSearch(this, false);
  lastButton = undefined;
}

const search = behavior({
  [CLICK]: {
    [BUTTON]: showSearch,
  },
}, {
  init(target) {
    forEach(select(BUTTON, target), (button) => {
      toggleSearch(button, false);
    });
  },
  teardown() {
    // forget the last button clicked
    lastButton = undefined;
  },
});

/**
 * TODO for 2.0, remove this statement and export `navigation` directly:
 *
 * module.exports = behavior({...});
 */

module.exports = assign(
  el => search.on(el),
  search
);

},{"../events":32,"../utils/behavior":37,"../utils/select":40,"array-foreach":5,"object-assign":12,"receptor/ignore":17}],29:[function(require,module,exports){

const once = require('receptor/once');
const behavior = require('../utils/behavior');

const { CLICK } = require('../events');
const { prefix: PREFIX } = require('../config');

const LINK = `.${PREFIX}-skipnav[href^="#"], .${PREFIX}-footer-return-to-top [href^="#"]`;
const MAINCONTENT = 'main-content';

function setTabindex() {
  // NB: we know because of the selector we're delegating to below that the
  // href already begins with '#'
  const id = this.getAttribute('href');
  const target = document.getElementById((id === '#') ? MAINCONTENT : id.slice(1));

  if (target) {
    target.style.outline = '0';
    target.setAttribute('tabindex', 0);
    target.focus();
    target.addEventListener('blur', once(() => {
      target.setAttribute('tabindex', -1);
    }));
  } else {
    // throw an error?
  }
}

module.exports = behavior({
  [CLICK]: {
    [LINK]: setTabindex,
  },
});

},{"../config":31,"../events":32,"../utils/behavior":37,"receptor/once":20}],30:[function(require,module,exports){
const assign = require('object-assign');
const behavior = require('../utils/behavior');
const validate = require('../utils/validate-input');

function change() {
  validate(this);
}

const validator = behavior({
  'keyup change': {
    'input[data-validation-element]': change,
  },
});

/**
 * TODO for 2.0, remove this statement and export `navigation` directly:
 *
 * module.exports = behavior({...});
 */

module.exports = assign(
  el => validator.on(el),
  validator
);

},{"../utils/behavior":37,"../utils/validate-input":44,"object-assign":12}],31:[function(require,module,exports){
module.exports = {
  prefix: 'usa',
};

},{}],32:[function(require,module,exports){
module.exports = {
  // This used to be conditionally dependent on whether the
  // browser supported touch events; if it did, `CLICK` was set to
  // `touchstart`.  However, this had downsides:
  //
  // * It pre-empted mobile browsers' default behavior of detecting
  //   whether a touch turned into a scroll, thereby preventing
  //   users from using some of our components as scroll surfaces.
  //
  // * Some devices, such as the Microsoft Surface Pro, support *both*
  //   touch and clicks. This meant the conditional effectively dropped
  //   support for the user's mouse, frustrating users who preferred
  //   it on those systems.
  CLICK: 'click',
};

},{}],33:[function(require,module,exports){

const elproto = window.HTMLElement.prototype;
const HIDDEN = 'hidden';

if (!(HIDDEN in elproto)) {
  Object.defineProperty(elproto, HIDDEN, {
    get() {
      return this.hasAttribute(HIDDEN);
    },
    set(value) {
      if (value) {
        this.setAttribute(HIDDEN, '');
      } else {
        this.removeAttribute(HIDDEN);
      }
    },
  });
}

},{}],34:[function(require,module,exports){

// polyfills HTMLElement.prototype.classList and DOMTokenList
require('classlist-polyfill');
// polyfills HTMLElement.prototype.hidden
require('./element-hidden');

},{"./element-hidden":33,"classlist-polyfill":6}],35:[function(require,module,exports){

const domready = require('domready');

/**
 * The 'polyfills' define key ECMAScript 5 methods that may be missing from
 * older browsers, so must be loaded first.
 */
require('./polyfills');

const uswds = require('./config');

const components = require('./components');

uswds.components = components;

domready(() => {
  const target = document.body;
  Object.keys(components)
    .forEach((key) => {
      const behavior = components[key];
      behavior.on(target);
    });
});

module.exports = uswds;

},{"./components":25,"./config":31,"./polyfills":34,"domready":7}],36:[function(require,module,exports){
module.exports = (htmlDocument = document) => htmlDocument.activeElement;

},{}],37:[function(require,module,exports){
const assign = require('object-assign');
const forEach = require('array-foreach');
const Behavior = require('receptor/behavior');

/**
 * @name sequence
 * @param {...Function} seq an array of functions
 * @return { closure } callHooks
 */
// We use a named function here because we want it to inherit its lexical scope
// from the behavior props object, not from the module
const sequence = (...seq) => function callHooks(target = document.body) {
  forEach(seq, (method) => {
    if (typeof this[method] === 'function') {
      this[method].call(this, target);
    }
  });
};

/**
 * @name behavior
 * @param {object} events
 * @param {object?} props
 * @return {receptor.behavior}
 */
module.exports = (events, props) => Behavior(events, assign({
  on: sequence('init', 'add'),
  off: sequence('teardown', 'remove'),
}, props));

},{"array-foreach":5,"object-assign":12,"receptor/behavior":13}],38:[function(require,module,exports){
const assign = require('object-assign');
const { keymap } = require('receptor');
const behavior = require('./behavior');
const select = require('./select');
const activeElement = require('./active-element');

const FOCUSABLE = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const tabHandler = (context) => {
  const focusableElements = select(FOCUSABLE, context);
  const firstTabStop = focusableElements[0];
  const lastTabStop = focusableElements[focusableElements.length - 1];

  // Special rules for when the user is tabbing forward from the last focusable element,
  // or when tabbing backwards from the first focusable element
  function tabAhead(event) {
    if (activeElement() === lastTabStop) {
      event.preventDefault();
      firstTabStop.focus();
    }
  }

  function tabBack(event) {
    if (activeElement() === firstTabStop) {
      event.preventDefault();
      lastTabStop.focus();
    }
  }

  return {
    firstTabStop,
    lastTabStop,
    tabAhead,
    tabBack,
  };
};

module.exports = (context, additionalKeyBindings = {}) => {
  const tabEventHandler = tabHandler(context);

  //  TODO: In the future, loop over additional keybindings and pass an array
  // of functions, if necessary, to the map keys. Then people implementing
  // the focus trap could pass callbacks to fire when tabbing
  const keyMappings = keymap(assign({
    Tab: tabEventHandler.tabAhead,
    'Shift+Tab': tabEventHandler.tabBack,
  }, additionalKeyBindings));

  const focusTrap = behavior({
    keydown: keyMappings,
  }, {
    init() {
      // TODO: is this desireable behavior? Should the trap always do this by default or should
      // the component getting decorated handle this?
      tabEventHandler.firstTabStop.focus();
    },
    update(isActive) {
      if (isActive) {
        this.on();
      } else {
        this.off();
      }
    },
  });

  return focusTrap;
};

},{"./active-element":36,"./behavior":37,"./select":40,"object-assign":12,"receptor":18}],39:[function(require,module,exports){
// https://stackoverflow.com/a/7557433
function isElementInViewport(el, win = window,
  docEl = document.documentElement) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (win.innerHeight || docEl.clientHeight)
    && rect.right <= (win.innerWidth || docEl.clientWidth)
  );
}

module.exports = isElementInViewport;

},{}],40:[function(require,module,exports){


/**
 * @name isElement
 * @desc returns whether or not the given argument is a DOM element.
 * @param {any} value
 * @return {boolean}
 */
const isElement = value => value && typeof value === 'object' && value.nodeType === 1;

/**
 * @name select
 * @desc selects elements from the DOM by class selector or ID selector.
 * @param {string} selector - The selector to traverse the DOM with.
 * @param {Document|HTMLElement?} context - The context to traverse the DOM
 *   in. If not provided, it defaults to the document.
 * @return {HTMLElement[]} - An array of DOM nodes or an empty array.
 */
module.exports = (selector, context) => {
  if (typeof selector !== 'string') {
    return [];
  }

  if (!context || !isElement(context)) {
    context = window.document; // eslint-disable-line no-param-reassign
  }

  const selection = context.querySelectorAll(selector);
  return Array.prototype.slice.call(selection);
};

},{}],41:[function(require,module,exports){
/**
 * Flips given INPUT elements between masked (hiding the field value) and unmasked
 * @param {Array.HTMLElement} fields - An array of INPUT elements
 * @param {Boolean} mask - Whether the mask should be applied, hiding the field value
 */
module.exports = (field, mask) => {
  field.setAttribute('autocapitalize', 'off');
  field.setAttribute('autocorrect', 'off');
  field.setAttribute('type', mask ? 'password' : 'text');
};

},{}],42:[function(require,module,exports){
const forEach = require('array-foreach');
const resolveIdRefs = require('resolve-id-refs');
const toggleFieldMask = require('./toggle-field-mask');

const CONTROLS = 'aria-controls';
const PRESSED = 'aria-pressed';
const SHOW_ATTR = 'data-show-text';
const HIDE_ATTR = 'data-hide-text';

/**
 * Replace the word "Show" (or "show") with "Hide" (or "hide") in a string.
 * @param {string} showText
 * @return {strong} hideText
 */
const getHideText = showText => showText.replace(/\bShow\b/i, show => `${show[0] === 'S' ? 'H' : 'h'}ide`);

/**
 * Component that decorates an HTML element with the ability to toggle the
 * masked state of an input field (like a password) when clicked.
 * The ids of the fields to be masked will be pulled directly from the button's
 * `aria-controls` attribute.
 *
 * @param  {HTMLElement} el    Parent element containing the fields to be masked
 * @return {boolean}
 */
module.exports = (el) => {
  // this is the *target* state:
  // * if the element has the attr and it's !== "true", pressed is true
  // * otherwise, pressed is false
  const pressed = el.hasAttribute(PRESSED)
    && el.getAttribute(PRESSED) !== 'true';

  const fields = resolveIdRefs(el.getAttribute(CONTROLS));
  forEach(fields, field => toggleFieldMask(field, pressed));

  if (!el.hasAttribute(SHOW_ATTR)) {
    el.setAttribute(SHOW_ATTR, el.textContent);
  }

  const showText = el.getAttribute(SHOW_ATTR);
  const hideText = el.getAttribute(HIDE_ATTR) || getHideText(showText);

  el.textContent = pressed ? showText : hideText; // eslint-disable-line no-param-reassign
  el.setAttribute(PRESSED, pressed);
  return pressed;
};

},{"./toggle-field-mask":41,"array-foreach":5,"resolve-id-refs":21}],43:[function(require,module,exports){
const EXPANDED = 'aria-expanded';
const CONTROLS = 'aria-controls';
const HIDDEN = 'aria-hidden';

module.exports = (button, expanded) => {
  let safeExpanded = expanded;

  if (typeof safeExpanded !== 'boolean') {
    safeExpanded = button.getAttribute(EXPANDED) === 'false';
  }

  button.setAttribute(EXPANDED, safeExpanded);

  const id = button.getAttribute(CONTROLS);
  const controls = document.getElementById(id);
  if (!controls) {
    throw new Error(`No toggle target found with id: "${id}"`);
  }

  controls.setAttribute(HIDDEN, !safeExpanded);

  return safeExpanded;
};

},{}],44:[function(require,module,exports){

const dataset = require('elem-dataset');

const { prefix: PREFIX } = require('../config');

const CHECKED = 'aria-checked';
const CHECKED_CLASS = `${PREFIX}-checklist-checked`;

module.exports = function validate(el) {
  const data = dataset(el);
  const id = data.validationElement;
  const checkList = id.charAt(0) === '#'
    ? document.querySelector(id)
    : document.getElementById(id);

  if (!checkList) {
    throw new Error(`No validation element found with id: "${id}"`);
  }

  Object.entries(data).forEach(([key, value]) => {
    if (key.startsWith('validate')) {
      const validatorName = key.substr('validate'.length).toLowerCase();
      const validatorPattern = new RegExp(value);
      const validatorSelector = `[data-validator="${validatorName}"]`;
      const validatorCheckbox = checkList.querySelector(validatorSelector);

      if (!validatorCheckbox) {
        throw new Error(`No validator checkbox found for: "${validatorName}"`);
      }

      const checked = validatorPattern.test(el.value);
      validatorCheckbox.classList.toggle(CHECKED_CLASS, checked);
      validatorCheckbox.setAttribute(CHECKED, checked);
    }
  });
};

},{"../config":31,"elem-dataset":8}]},{},[3]);
