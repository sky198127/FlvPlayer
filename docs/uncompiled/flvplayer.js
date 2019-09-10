(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.FlvPlayer = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var optionValidator = createCommonjsModule(function (module, exports) {
  !function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if(!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw"string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
  });

  function checkWebAssembly() {
    try {
      if (_typeof_1(window.WebAssembly) === 'object' && typeof window.WebAssembly.instantiate === 'function') {
        var module = new window.WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));

        if (module instanceof window.WebAssembly.Module) {
          return new window.WebAssembly.Instance(module) instanceof window.WebAssembly.Instance;
        }
      }

      return false;
    } catch (e) {
      return false;
    }
  }
  function checkWorker() {
    return typeof window.Worker === 'function';
  }
  function checkFetch() {
    return typeof window.fetch === 'function';
  }
  function checkURL() {
    return window.URL && typeof window.URL.createObjectURL === 'function';
  }
  function checkReadableStream() {
    return typeof window.ReadableStream === 'function' && typeof window.Response === 'function' && Object.prototype.hasOwnProperty.call(window.Response.prototype, 'body');
  }
  function checkBlob() {
    return typeof window.Blob === 'function' && function () {
      try {
        return !!new window.Blob();
      } catch (e) {
        return false;
      }
    }();
  }
  function checkArrayBuffer() {
    return typeof window.ArrayBuffer === 'function';
  }
  function checkAACType() {
    var canPlay = new Audio().canPlayType('audio/aac;');
    return canPlay === 'probably' || canPlay === 'maybe';
  }
  function checkAudioContext() {
    return window.AudioContext || window.webkitAudioContext;
  }
  function checkWebGL() {
    if (window.WebGLRenderingContext) {
      var canvas = document.createElement('canvas');
      var names = ['webgl2', 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
      var context = false;

      for (var i = 0; i < names.length; i += 1) {
        try {
          context = canvas.getContext(names[i]);

          if (context && typeof context.getParameter === 'function') {
            return true;
          }
        } catch (e) {//
        }
      }

      return false;
    }

    return false;
  }
  function isSupported() {
    return checkWebAssembly() && checkWorker() && checkFetch() && checkBlob() && checkArrayBuffer() && checkURL() && checkAACType() && checkAudioContext() && checkWebGL();
  }

  var Emitter =
  /*#__PURE__*/
  function () {
    function Emitter() {
      classCallCheck(this, Emitter);
    }

    createClass(Emitter, [{
      key: "on",
      value: function on(name, fn, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
          fn: fn,
          ctx: ctx
        });
        return this;
      }
    }, {
      key: "once",
      value: function once(name, fn, ctx) {
        var self = this;

        function listener() {
          self.off(name, listener);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          fn.apply(ctx, args);
        }

        listener._ = fn;
        return this.on(name, listener, ctx);
      }
    }, {
      key: "emit",
      value: function emit(name) {
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();

        for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          data[_key2 - 1] = arguments[_key2];
        }

        for (var i = 0; i < evtArr.length; i += 1) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];

        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i += 1) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
          }
        }

        if (liveEvents.length) {
          e[name] = liveEvents;
        } else {
          delete e[name];
        }

        return this;
      }
    }]);

    return Emitter;
  }();

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  var FlvPlayerError =
  /*#__PURE__*/
  function (_Error) {
    inherits(FlvPlayerError, _Error);

    function FlvPlayerError(message) {
      var _this;

      classCallCheck(this, FlvPlayerError);

      _this = possibleConstructorReturn(this, getPrototypeOf(FlvPlayerError).call(this, message));
      _this.name = 'FlvPlayerError';
      return _this;
    }

    return FlvPlayerError;
  }(wrapNativeSuper(Error));

  var Debug = function Debug(flv) {
    classCallCheck(this, Debug);

    var debug = flv.options.debug;

    this.log = function (name) {
      if (debug) {
        var _console;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_console = console).log.apply(_console, ["FlvPlayer: [".concat(name, "]")].concat(args));
      }
    };

    this.warn = function (condition) {
      if (!condition && debug) {
        var _console2;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_console2 = console).warn.apply(_console2, args);
      }
    };

    this.error = function (condition, msg) {
      if (!condition) {
        throw new FlvPlayerError(msg);
      }
    };
  };

  var Events =
  /*#__PURE__*/
  function () {
    function Events(flv) {
      var _this = this;

      classCallCheck(this, Events);

      this.destroys = [];
      this.proxy = this.proxy.bind(this);
      flv.on('destroy', function () {
        _this.destroy();
      });
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var _this2 = this;

        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (Array.isArray(name)) {
          return name.map(function (item) {
            return _this2.proxy(target, item, callback, option);
          });
        }

        target.addEventListener(name, callback, option);

        var destroy = function destroy() {
          return target.removeEventListener(name, callback, option);
        };

        this.destroys.push(destroy);
        return destroy;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroys.forEach(function (event) {
          return event();
        });
      }
    }]);

    return Events;
  }();

  function template(flv, player) {
    var options = flv.options;
    var cacheCss = options.container.style.cssText;
    options.container.classList.add('flvplayer-container');
    options.container.innerHTML = "\n        <div class=\"flvplayer-player\">\n            <canvas class=\"flvplayer-canvas\" width=\"".concat(options.width, "\" height=\"").concat(options.height, "\"></canvas>\n        </div>\n    ");
    flv.on('destroy', function () {
      options.container.innerHTML = '';
      options.container.style.cssText = cacheCss;
      options.container.classList.remove('flvplayer-container');
    });
    Object.defineProperty(player, '$container', {
      value: options.container
    });
    Object.defineProperty(player, '$player', {
      value: options.container.querySelector('.flvplayer-player')
    });
    Object.defineProperty(player, '$canvas', {
      value: options.container.querySelector('.flvplayer-canvas')
    });
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  function isWechat() {
    return /MicroMessenger/i.test(navigator.userAgent);
  }
  function hasOwnProperty(obj, name) {
    return Object.prototype.hasOwnProperty.call(obj, name);
  }
  function readBuffer(buffer) {
    var index = 0;

    function read(length) {
      var tempUint8 = new Uint8Array(length);

      for (var i = 0; i < length; i += 1) {
        tempUint8[i] = buffer[index];
        index += 1;
      }

      read.index = index;
      return tempUint8;
    }

    read.index = 0;
    return read;
  }
  function mergeBuffer() {
    for (var _len = arguments.length, buffers = new Array(_len), _key = 0; _key < _len; _key++) {
      buffers[_key] = arguments[_key];
    }

    var Cons = buffers[0].constructor;
    return buffers.reduce(function (pre, val) {
      var merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
      merge.set(pre, 0);
      merge.set(val, pre.byteLength | 0);
      return merge;
    }, new Cons());
  }
  function createWorker(workerString) {
    return new Worker(URL.createObjectURL(new Blob([workerString], {
      type: 'application/javascript'
    })));
  }
  function secondToTime(second) {
    var add0 = function add0(num) {
      return num < 10 ? "0".concat(num) : String(num);
    };

    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  }
  function getNowTime() {
    if (performance && typeof performance.now === 'function') {
      return performance.now();
    }

    return Date.now();
  }
  function debounce(func, wait, context) {
    var timeout;

    function fn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    fn.clearTimeout = function ct() {
      clearTimeout(timeout);
    };

    return fn;
  }
  function throttle(callback, delay) {
    var isThrottled = false;
    var args;
    var context;

    function fn() {
      for (var _len3 = arguments.length, args2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args2[_key3] = arguments[_key3];
      }

      if (isThrottled) {
        args = args2;
        context = this;
        return;
      }

      isThrottled = true;
      callback.apply(this, args2);
      setTimeout(function () {
        isThrottled = false;

        if (args) {
          fn.apply(context, args);
          args = null;
          context = null;
        }
      }, delay);
    }

    return fn;
  }
  function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  }
  function setStyle(element, key, value) {
    if (_typeof_1(key) === 'object') {
      Object.keys(key).forEach(function (item) {
        setStyle(element, item, key[item]);
      });
    }

    element.style[key] = value;
    return element;
  }
  function getStyle(element, key) {
    var numberType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var value = getComputedStyle(element, null).getPropertyValue(key);
    return numberType ? parseFloat(value) : value;
  }
  function loadScript(url, name) {
    return new Promise(function (resolve, reject) {
      var $script = document.createElement('script');
      $script.type = 'text/javascript';

      $script.onload = function () {
        if (window[name]) {
          resolve(window[name]);
        } else {
          reject(new Error("Unable to find global variable '".concat(name, "' from '").concat(url, "'")));
        }
      };

      $script.onerror = function () {
        reject(new Error("Resource loading failed '".concat(url, "'")));
      };

      $script.src = url;
      document.head.appendChild($script);
    });
  }
  function proxyPropertys(target) {
    for (var _len4 = arguments.length, sources = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      sources[_key4 - 1] = arguments[_key4];
    }

    return sources.reduce(function (result, source) {
      Object.getOwnPropertyNames(source).forEach(function (key) {
        if (!hasOwnProperty(result, key)) {
          Object.defineProperty(result, key, Object.getOwnPropertyDescriptor(source, key));
        } else {
          throw new Error("Target attribute name is duplicated: ".concat(key));
        }
      });
      return result;
    }, target);
  }
  function calculationRate(callback) {
    var totalSize = 0;
    var lastTime = getNowTime();
    return function (size) {
      totalSize += size;
      var thisTime = getNowTime();
      var diffTime = thisTime - lastTime;

      if (diffTime >= 1000) {
        callback(totalSize / diffTime * 1000);
        lastTime = thisTime;
        totalSize = 0;
      }
    };
  }

  var utils = /*#__PURE__*/Object.freeze({
    isMobile: isMobile,
    isWechat: isWechat,
    hasOwnProperty: hasOwnProperty,
    readBuffer: readBuffer,
    mergeBuffer: mergeBuffer,
    createWorker: createWorker,
    secondToTime: secondToTime,
    getNowTime: getNowTime,
    debounce: debounce,
    throttle: throttle,
    clamp: clamp,
    setStyle: setStyle,
    getStyle: getStyle,
    loadScript: loadScript,
    proxyPropertys: proxyPropertys,
    calculationRate: calculationRate
  });

  function property(flv, player) {
    Object.defineProperty(player, 'rect', {
      get: function get() {
        return player.$container.getBoundingClientRect();
      }
    });
    ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (key) {
      Object.defineProperty(player, key, {
        get: function get() {
          return player.rect[key];
        }
      });
    });
    Object.defineProperty(player, 'currentTime', {
      get: function get() {
        return flv.decoder.currentTime;
      },
      set: function set(time) {
        if (flv.options.cache) {
          flv.decoder.seeked(clamp(time, 0, player.loaded));
        }
      }
    });
    Object.defineProperty(player, 'streaming', {
      get: function get() {
        return flv.demuxer.streaming;
      }
    });
    Object.defineProperty(player, 'demuxed', {
      get: function get() {
        return flv.demuxer.demuxed;
      }
    });
    Object.defineProperty(player, 'videoDecoding', {
      get: function get() {
        return flv.decoder.video.decoding;
      }
    });
    Object.defineProperty(player, 'audioDecoding', {
      get: function get() {
        return flv.decoder.audio.decoding;
      }
    });
    Object.defineProperty(player, 'duration', {
      get: function get() {
        try {
          return flv.demuxer.scripMeta.amf2.metaData.duration;
        } catch (error) {
          return flv.options.duration || 0;
        }
      }
    });
    Object.defineProperty(player, 'frameRate', {
      get: function get() {
        var defaultFrameRate = Math.round(flv.options.frameRate || 30);

        try {
          return Math.round(flv.demuxer.scripMeta.amf2.metaData.framerate) || defaultFrameRate;
        } catch (error) {
          return defaultFrameRate;
        }
      }
    });
    Object.defineProperty(player, 'frameDuration', {
      get: function get() {
        return 1000 / player.frameRate | 0;
      }
    });
    Object.defineProperty(player, 'muted', {
      get: function get() {
        return flv.decoder.audio.muted;
      },
      set: function set(value) {
        flv.decoder.audio.muted = value;
      }
    });
    Object.defineProperty(player, 'volume', {
      get: function get() {
        try {
          return flv.decoder.audio.volume;
        } catch (error) {
          return 0;
        }
      },
      set: function set(value) {
        try {
          flv.decoder.audio.volume = clamp(value, 0, 1);
          return player.volume;
        } catch (error) {
          return value;
        }
      }
    });
    Object.defineProperty(player, 'loaded', {
      get: function get() {
        return flv.decoder.video.loaded;
      }
    });
    Object.defineProperty(player, 'playing', {
      get: function get() {
        return flv.decoder.playing;
      }
    });
    Object.defineProperty(player, 'ended', {
      get: function get() {
        return flv.decoder.ended;
      }
    });
    Object.defineProperty(player, 'play', {
      value: function value() {
        if (!player.playing) {
          flv.decoder.play();
        }
      }
    });
    Object.defineProperty(player, 'pause', {
      value: function value() {
        flv.decoder.pause();
      }
    });
    Object.defineProperty(player, 'toggle', {
      value: function value() {
        if (player.playing) {
          player.pause();
        } else {
          player.play();
        }
      }
    });
  }

  function events(flv, player) {
    var proxy = flv.events.proxy;
    flv.on('scripMeta', function (scripMeta) {
      var _scripMeta$amf2$metaD = scripMeta.amf2.metaData,
          width = _scripMeta$amf2$metaD.width,
          height = _scripMeta$amf2$metaD.height;

      if (width && height) {
        player.$canvas.width = width;
        player.$canvas.height = height;
      }
    });
    proxy(player.$canvas, 'click', function () {
      player.toggle();
    });
  }

  var Player = function Player(flv) {
    classCallCheck(this, Player);

    template(flv, this);
    property(flv, this);
    events(flv, this);
  };

  var dida = createCommonjsModule(function (module, exports) {
  /*!
   * Dida.js v1.0.0
   * Github: https://github.com/zhw2590582/dida.js#readme
   * (c) 2017-2019 Harvey Zack
   * Released under the MIT License.
   */

  !function(t,e){module.exports=e();}(commonjsGlobal,function(){var o=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};var i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}var t=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t};var e,u=(function(t,e){function n(t){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return t.constructor?t.constructor.name:null}function s(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return c(t,e,n),f(t,e,n),function(i,u,a){var t=d(u),e=d(i);"object"===t&&"object"===e&&Object.keys(u).forEach(function(t){var e=i[t],n=u[t],r=a.slice();r.push(t),c(e,n,r),f(e,n,r),s(e,n,r);}),"array"===t&&"array"===e&&i.forEach(function(t,e){var n=i[e],r=u[e]||u[0],o=a.slice();o.push(e),c(n,r,o),f(n,r,o),s(n,r,o);});}(t,e,n),t}function c(t,e,n){if("string"===d(e)){var r=d(t);if(!(-1<e.indexOf("|")?e.split("|").map(function(t){return t.toLowerCase().trim()}).filter(Boolean).some(function(t){return r===t}):e.toLowerCase().trim()===r))throw new Error("[Type Error]: '".concat(n.join("."),"' require '").concat(e,"' type, but got '").concat(r,"'"))}}function f(t,e,n){if("function"===d(e)){var r=e(t,d(t),n);if(!0!==r){var o=d(r);throw"string"===o?new Error(r):"error"===o?r:new Error("[Validator Error]: The scheme for '".concat(n.join("."),"' validator require return true, but got '").concat(r,"'"))}}}var o,d;t.exports=(o=Object.prototype.toString,s.kindOf=d=function(t){if(void 0===t)return "undefined";if(null===t)return "null";var e=n(t);if("boolean"===e)return "boolean";if("string"===e)return "string";if("number"===e)return "number";if("symbol"===e)return "symbol";if("function"===e)return function(t){return "GeneratorFunction"===r(t)}(t)?"generatorfunction":"function";if(function(t){return Array.isArray?Array.isArray(t):t instanceof Array}(t))return "array";if(function(t){return !(!t.constructor||"function"!=typeof t.constructor.isBuffer)&&t.constructor.isBuffer(t)}(t))return "buffer";if(function(t){try{if("number"==typeof t.length&&"function"==typeof t.callee)return !0}catch(t){if(-1!==t.message.indexOf("callee"))return !0}return !1}(t))return "arguments";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return "date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return "error";if(function(t){return t instanceof RegExp||"string"==typeof t.flags&&"boolean"==typeof t.ignoreCase&&"boolean"==typeof t.multiline&&"boolean"==typeof t.global}(t))return "regexp";switch(r(t)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(t){return "function"==typeof t.throw&&"function"==typeof t.return&&"function"==typeof t.next}(t))return "generator";switch(e=o.call(t)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return e.slice(8,-1).toLowerCase().replace(/\s/g,"")},s);}(e={exports:{}},e.exports),e.exports);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r);}return n}function s(t,e,n){return Math.max(Math.min(t,Math.max(e,n)),Math.min(e,n))}function c(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0].constructor;return e.reduce(function(t,e){var n=new r((0|t.byteLength)+(0|e.byteLength));return n.set(t,0),n.set(e,0|t.byteLength),n},new r)}return function(){function r(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(i(this,r),this.option=u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){o(e,t,n[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));});}return e}({},r.option,{},t),r.scheme),this.option.volume=s(this.option.volume,0,1),this.option.chunk=s(this.option.chunk,0,1/0),this.option.maxTimeDiff=s(this.option.maxTimeDiff,0,1/0),this.option.autoEndTime=s(this.option.autoEndTime,0,1/0),this.context=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.context.createGain(),this.gainNode.gain.value=this.option.volume,this.source=null,this.decoding=!1,this.playing=!1,this.loadLength=0,this.loadByteSize=0,this.audioDuration=0,this.pcmLength=0,this.timestamps=[],this.audiobuffers=[],this.timestampTmp=[],this.decodeErrorBuffer=new Uint8Array,this.decodeWaitingBuffer=new Uint8Array,this.autoEndDebounce=function(r,o,i){var u;return function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];clearTimeout(u),u=setTimeout(function(){u=null,r.apply(i,e);},o);}}(function(){e.end();},this.option.autoEndTime),this.option.touchResume&&"suspended"===this.context.state&&"ontouchstart"in window){var n=function t(){e.context.resume(),e.volume=1,document.body.removeEventListener("touchstart",t,!1),document.body.removeEventListener("click",t,!1);};document.body.addEventListener("touchstart",n,!1),document.body.addEventListener("click",n,!1);}}return t(r,[{key:"destroy",value:function(){return this.stop(),this.context=null,this.gainNode=null,this.source=null,this.timestamps=[],this.audiobuffers=[],this.timestampTmp=[],this.decodeErrorBuffer=new Uint8Array,this.decodeWaitingBuffer=new Uint8Array,this.option.onDestroy(),this}},{key:"load",value:function(t,e){var n=this;if(this.decoding=!0,this.loadLength+=1,this.loadByteSize+=t.byteLength,this.option.onLoad(t,e),this.decodeWaitingBuffer.byteLength>=this.option.chunk){this.timestamps.push(this.timestampTmp[0]),this.timestampTmp=[];var r=c(this.decodeErrorBuffer,this.decodeWaitingBuffer).buffer;this.decodeWaitingBuffer=new Uint8Array,this.context.decodeAudioData(r,function(t){n.audioDuration+=t.duration,n.pcmLength+=t.length,n.audiobuffers.push(t),n.decodeErrorBuffer=new Uint8Array,n.option.onDecodeDone(t);},function(t){n.decodeErrorBuffer=c(n.decodeErrorBuffer,n.decodeWaitingBuffer),n.option.onDecodeError(t);});}else this.timestampTmp.push(e),this.decodeWaitingBuffer=c(this.decodeWaitingBuffer,t);return this.option.autoEnd&&this.autoEndDebounce(),this}},{key:"end",value:function(){var e=this;if(this.decodeWaitingBuffer.length){this.timestamps.push(this.timestampTmp[0]),this.timestampTmp=[];var t=this.decodeWaitingBuffer.buffer;this.decodeWaitingBuffer=new Uint8Array,this.decodeErrorBuffer=new Uint8Array,this.context.decodeAudioData(t,function(t){e.audioDuration+=t.duration,e.pcmLength+=t.length,e.audiobuffers.push(t),e.decoding=!1,e.option.onEnd();});}return this}},{key:"findIndex",value:function(r){var o=this;return this.timestamps.findIndex(function(t,e){var n=o.audiobuffers[e];return n&&t+1e3*n.duration>=r})}},{key:"play",value:function(t){var o=this,e=0<arguments.length&&void 0!==t?t:0;this.source&&(this.source.onended=null,this.source.stop(),this.source=null),e+=1,this.playing=!0;var i=this.findIndex(e),u=this.timestamps[i],n=this.audiobuffers[i];if(void 0===u||void 0===n)return this.stop(i,u);var r=Math.max(0,(e-u)/1e3);return this.source=this.context.createBufferSource(),this.source.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.source.buffer=n,this.option.onPlay(n,e,r),this.source.start(0,r),this.source.onended=function(){var t=o.timestamps[i+1],e=o.audiobuffers[i+1];if(void 0!==t&&void 0!==e){var n=o.option.onNext(t),r=o.findIndex(n);!o.option.cache&&0<r&&(o.option.onFreeMemory({total:o.pcmLength,pcm:o.audiobuffers.reduce(function(t,e){return t+=e.length},0),index:r}),o.audiobuffers.splice(0,r),o.timestamps.splice(0,r)),o.play(n);}else o.stop(i,u);},this}},{key:"stop",value:function(t,e){return this.playing=!1,this.source&&(this.source.onended=null,this.source.stop(),this.source=null),this.option.onStop(t,e),this}},{key:"volume",get:function(){return this.gainNode.gain.value},set:function(t){this.gainNode.gain.value=s(t,0,1),this.option.onVolumeChange(t);}}],[{key:"option",get:function(){return {volume:.7,cache:!0,chunk:65536,maxTimeDiff:200,autoEnd:!0,autoEndTime:5e3,touchResume:!0,onNext:function(t){return t},onLoad:function(){return null},onStop:function(){return null},onPlay:function(){return null},onEnd:function(){return null},onDestroy:function(){return null},onDecodeDone:function(){return null},onDecodeError:function(){return null},onVolumeChange:function(){return null},onFreeMemory:function(){return null}}}},{key:"scheme",get:function(){return {volume:"number",cache:"boolean",chunk:"number",maxTimeDiff:"number",autoEnd:"boolean",autoEndTime:"number",touchResume:"boolean",onNext:"function",onLoad:"function",onStop:"function",onPlay:"function",onEnd:"function",onDestroy:"function",onDecodeDone:"function",onDecodeError:"function",onVolumeChange:"function",onFreeMemory:"function"}}}]),r}()});
  });

  var AudioDecoder =
  /*#__PURE__*/
  function () {
    function AudioDecoder(flv, decoder) {
      var _this = this;

      classCallCheck(this, AudioDecoder);

      this.flv = flv;
      this.dida = new dida({
        volume: flv.options.muted ? 0 : flv.options.volume,
        cache: flv.options.cache,
        maxTimeDiff: flv.options.maxTimeDiff,
        touchResume: flv.options.touchResume,
        onNext: function onNext(timestamp) {
          var currentTime = decoder.currentTime * 1000;
          var timeDiff = timestamp - currentTime;
          flv.debug.log('time-diff', timeDiff);

          if (Math.abs(timeDiff) >= flv.options.maxTimeDiff) {
            flv.debug.log('time-sync', timeDiff);
            return currentTime;
          }

          return timestamp;
        },
        onVolumeChange: function onVolumeChange(value) {
          flv.emit('volumechange', value);
        },
        onFreeMemory: function onFreeMemory(info) {
          flv.debug.log('free-audio-memory', info);
          flv.emit('freeAudioMemory', info);
        }
      });
      flv.on('audioData', function (uint8, timestamp) {
        _this.dida.load(uint8, timestamp);
      });
      flv.on('destroy', function () {
        _this.dida.destroy();
      });
    }

    createClass(AudioDecoder, [{
      key: "play",
      value: function play() {
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.dida.play(startTime * 1000);
      }
    }, {
      key: "stop",
      value: function stop() {
        this.dida.stop();
      }
    }, {
      key: "muted",
      get: function get() {
        return this.volume === 0;
      },
      set: function set(value) {
        if (value) {
          this.volume = 0;
        } else {
          this.volume = 0.7;
        }
      }
    }, {
      key: "volume",
      get: function get() {
        return this.dida.volume;
      },
      set: function set(volume) {
        this.dida.volume = volume;
      }
    }, {
      key: "decoding",
      get: function get() {
        return this.dida.decoding;
      }
    }, {
      key: "playing",
      get: function get() {
        return this.dida.playing;
      }
    }]);

    return AudioDecoder;
  }();

  var Decoder =
  /*#__PURE__*/
  function () {
    function Decoder(flv) {
      var _this = this;

      classCallCheck(this, Decoder);

      this.flv = flv;
      this.ended = false;
      this.playing = false;
      this.waiting = false;
      this.animationFrameTimer = null;
      this.waitingTimer = null;
      this.currentTime = 0;
      this.lastUpdateTime = 0;
      this.video = new window.FlvplayerDecoder(flv, this);

      if (flv.options.hasAudio) {
        this.audio = new AudioDecoder(flv, this);
      } else {
        this.audio = {
          play: function play() {
            return null;
          },
          stop: function stop() {
            return null;
          },
          playing: true,
          decoding: false
        };
      }

      flv.on('ready', function () {
        if (flv.options.autoPlay) {
          _this.play();
        } else {
          _this.video.draw(0);
        }
      });
      flv.on('destroy', function () {
        _this.pause();
      });
      flv.on('timeupdate', function (currentTime) {
        if (!flv.options.live && currentTime >= flv.player.duration) {
          _this.pause();
        }
      });
      var isPlaying = false;
      flv.events.proxy(document, 'visibilitychange', function () {
        if (document.hidden) {
          isPlaying = _this.playing;

          _this.pause();
        } else if (isPlaying) {
          _this.play();
        }
      });
    }

    createClass(Decoder, [{
      key: "play",
      value: function play() {
        this.lastUpdateTime = getNowTime();
        this.video.play(this.currentTime);
        this.audio.play(this.currentTime);
        this.animationFrame();
        this.flv.emit('play');
      }
    }, {
      key: "animationFrame",
      value: function animationFrame() {
        var _this2 = this;

        var _this$flv = this.flv,
            options = _this$flv.options,
            player = _this$flv.player,
            debug = _this$flv.debug;
        this.animationFrameTimer = requestAnimationFrame(function () {
          if (_this2.video.playing && _this2.audio.playing) {
            _this2.ended = false;
            _this2.playing = true;
            _this2.waiting = false;
            var updateTime = getNowTime();
            _this2.currentTime += (updateTime - _this2.lastUpdateTime) / 1000;
            _this2.lastUpdateTime = updateTime;

            _this2.flv.emit('timeupdate', _this2.currentTime);
          } else if (player.streaming || _this2.video.decoding || _this2.audio.decoding) {
            _this2.ended = false;
            _this2.playing = true;
            _this2.waiting = true;

            _this2.flv.emit('waiting', _this2.currentTime);

            _this2.waitingTimer = setTimeout(function () {
              debug.log('play-retry', {
                streaming: player.streaming,
                playing: {
                  video: _this2.video.playing,
                  audio: _this2.audio.playing
                },
                decoding: {
                  video: _this2.video.decoding,
                  audio: _this2.audio.decoding
                }
              });

              _this2.play();
            }, 1000);
            return;
          } else {
            _this2.ended = true;
            _this2.playing = false;
            _this2.waiting = false;

            _this2.pause();

            _this2.flv.emit('ended', _this2.currentTime);

            if (options.loop && options.cache) {
              _this2.currentTime = 0;

              _this2.play();

              _this2.flv.emit('loop');
            }

            return;
          }

          _this2.animationFrame();
        });
      }
    }, {
      key: "pause",
      value: function pause() {
        cancelAnimationFrame(this.animationFrameTimer);
        clearTimeout(this.waitingTimer);
        this.animationFrameTimer = null;
        this.waitingTimer = null;
        this.video.stop();
        this.audio.stop();
        this.ended = false;
        this.playing = false;
        this.waiting = false;
        this.flv.emit('pause');
      }
    }, {
      key: "seeked",
      value: function seeked(time) {
        var _this$flv2 = this.flv,
            player = _this$flv2.player,
            options = _this$flv2.options;
        if (!options.cache) return;
        cancelAnimationFrame(this.animationFrameTimer);
        clearTimeout(this.waitingTimer);
        this.animationFrameTimer = null;
        this.waitingTimer = null;
        this.currentTime = time;
        this.video.draw(Math.floor(time * player.frameRate));

        if (this.playing) {
          this.play();
        }

        this.flv.emit('seeked', time);
      }
    }]);

    return Decoder;
  }();

  function getProfileString(profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline';

      case 77:
        return 'Main';

      case 88:
        return 'Extended';

      case 100:
        return 'High';

      case 110:
        return 'High10';

      case 122:
        return 'High422';

      case 244:
        return 'High444';

      default:
        return 'Unknown';
    }
  }

  function getLevelString(levelIdc) {
    return (levelIdc / 10).toFixed(1);
  }

  var Demuxer = function Demuxer(flv) {
    var _this = this;

    classCallCheck(this, Demuxer);

    var options = flv.options,
        debug = flv.debug;
    this.header = null;
    this.streaming = false;
    this.demuxed = false;
    this.videoDataSize = 0;
    this.audioDataSize = 0;
    this.videoDataLength = 0;
    this.audioDataLength = 0;
    this.streamStartTime = 0;
    this.streamEndTime = 0;
    this.scripMeta = null;
    this.AudioSpecificConfig = null;
    this.AVCDecoderConfigurationRecord = null;
    this.demuxWorker = new Worker(URL.createObjectURL(new Blob(["\"use strict\";\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar FlvPlayerError =\n/*#__PURE__*/\nfunction (_Error) {\n  _inherits(FlvPlayerError, _Error);\n\n  function FlvPlayerError(message) {\n    var _this;\n\n    _classCallCheck(this, FlvPlayerError);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlvPlayerError).call(this, message));\n    _this.name = 'FlvPlayerError';\n    return _this;\n  }\n\n  return FlvPlayerError;\n}(_wrapNativeSuper(Error));\n\nvar debug = {\n  warn: function warn(condition) {\n    if (!condition) {\n      var _console;\n\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      (_console = console).warn.apply(_console, args);\n    }\n  },\n  error: function error(condition, msg) {\n    if (!condition) {\n      throw new FlvPlayerError(msg);\n    }\n  }\n};\n\nfunction mergeBuffer() {\n  for (var _len2 = arguments.length, buffers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    buffers[_key2] = arguments[_key2];\n  }\n\n  var Cons = buffers[0].constructor;\n  return buffers.reduce(function (pre, val) {\n    var merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));\n    merge.set(pre, 0);\n    merge.set(val, pre.byteLength | 0);\n    return merge;\n  }, new Cons());\n}\n\nfunction readBufferSum(array) {\n  var uint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  return array.reduce(function (totle, num, index) {\n    return totle + (uint ? num : num - 128) * Math.pow(256, array.length - index - 1);\n  }, 0);\n}\n\nfunction readString(array) {\n  var _String$fromCharCode;\n\n  return (_String$fromCharCode = String.fromCharCode).call.apply(_String$fromCharCode, [String].concat(_toConsumableArray(array)));\n}\n\nfunction readBuffer(buffer) {\n  var index = 0;\n\n  function read(length) {\n    var tempUint8 = new Uint8Array(length);\n\n    for (var i = 0; i < length; i += 1) {\n      tempUint8[i] = buffer[index];\n      index += 1;\n    }\n\n    read.index = index;\n    return tempUint8;\n  }\n\n  read.index = 0;\n  return read;\n}\n\nfunction readDouble(array) {\n  var view = new DataView(new ArrayBuffer(array.length));\n  array.forEach(function (b, i) {\n    view.setUint8(i, b);\n  });\n  return view.getFloat64(0);\n}\n\nfunction readBoolean(array) {\n  return array[0] !== 0;\n}\n\nvar index = 0;\nvar header = null;\nvar uint8 = new Uint8Array();\nvar scripMeta = null;\nvar AudioSpecificConfig = null;\nvar AVCDecoderConfigurationRecord = null;\nvar nalStart = new Uint8Array([0x00, 0x00, 0x00, 0x01]);\n\nfunction readable(length) {\n  return uint8.length - index >= length;\n}\n\nfunction read(length) {\n  var tempUint8 = new Uint8Array(length);\n\n  for (var i = 0; i < length; i += 1) {\n    tempUint8[i] = uint8[index];\n    index += 1;\n  }\n\n  return tempUint8;\n}\n\nfunction demuxerScripTag(tag) {\n  var readScripTag = readBuffer(tag.body);\n  var amf1 = Object.create(null);\n  var amf2 = Object.create(null);\n  amf1.type = readScripTag(1)[0];\n  debug.error(amf1.type === 2, \"AMF: [amf1] type expect 2, but got \".concat(amf1.type));\n  amf1.size = readBufferSum(readScripTag(2));\n  amf1.string = readString(readScripTag(amf1.size));\n  amf2.type = readScripTag(1)[0];\n  debug.error(amf2.type === 8 || amf2.type === 3, \"AMF: [amf2] type expect 8 or 3, but got \".concat(amf2.type));\n  amf2.size = readBufferSum(readScripTag(4));\n  amf2.metaData = Object.create(null);\n\n  function getValue(type) {\n    var value = null;\n\n    if (type !== undefined) {\n      switch (type) {\n        case 0:\n          value = readDouble(readScripTag(8));\n          break;\n\n        case 1:\n          value = readBoolean(readScripTag(1));\n          break;\n\n        case 2:\n          {\n            var valueLength = readBufferSum(readScripTag(2));\n            value = readString(readScripTag(valueLength));\n            break;\n          }\n\n        case 3:\n          {\n            value = Object.create(null);\n            var lastType = -1;\n\n            while (lastType !== 9) {\n              var nameLength = readBufferSum(readScripTag(2));\n              var name = readString(readScripTag(nameLength));\n              var itemType = readScripTag(1)[0];\n\n              if (name) {\n                value[name] = getValue(itemType);\n              }\n\n              lastType = itemType;\n            }\n\n            break;\n          }\n\n        case 5:\n          value = null;\n          break;\n\n        case 6:\n          value = undefined;\n          break;\n\n        case 7:\n          value = \"Reference #\".concat(readScripTag.index);\n          readScripTag(2);\n          break;\n\n        case 8:\n          {\n            value = Object.create(null);\n\n            var _lastType = -1;\n\n            while (_lastType !== 9) {\n              var _nameLength = readBufferSum(readScripTag(2));\n\n              var _name = readString(readScripTag(_nameLength));\n\n              var _itemType = readScripTag(1)[0];\n\n              if (_name) {\n                value[_name] = getValue(_itemType);\n              }\n\n              _lastType = _itemType;\n            }\n\n            break;\n          }\n\n        case 10:\n          {\n            var _valueLength = readBufferSum(readScripTag(4));\n\n            value = [];\n\n            for (var _index = 0; _index < _valueLength; _index += 1) {\n              var _itemType2 = readScripTag(1)[0];\n              value.push(getValue(_itemType2));\n            }\n\n            break;\n          }\n\n        case 11:\n          value = readDouble(readScripTag(2));\n          break;\n\n        case 12:\n          {\n            var _valueLength2 = readBufferSum(readScripTag(4));\n\n            value = readString(readScripTag(_valueLength2));\n            break;\n          }\n\n        default:\n          debug.error(false, \"AMF: Unknown metaData type: \".concat(type));\n          break;\n      }\n    }\n\n    return value;\n  }\n\n  while (readScripTag.index < tag.body.length) {\n    var nameLength = readBufferSum(readScripTag(2));\n    var name = readString(readScripTag(nameLength));\n    var type = readScripTag(1)[0];\n\n    if (name) {\n      amf2.metaData[name] = getValue(type);\n    }\n  }\n\n  debug.warn(readScripTag.index === tag.body.length, '[AMF] Seems to be incompletely parsed');\n  debug.warn(amf2.size === Object.keys(amf2.metaData).length, '[AMF] [amf2] length does not match');\n  scripMeta = {\n    amf1: amf1,\n    amf2: amf2\n  };\n  postMessage({\n    type: 'scripMeta',\n    data: scripMeta\n  });\n}\n\nfunction demuxerVideoTag(tag) {\n  debug.error(tag.body.length > 1, 'Invalid video packet');\n  var header = {\n    frameType: (tag.body[0] & 0xf0) >> 4,\n    codecID: tag.body[0] & 0x0f\n  };\n  debug.error(header.codecID === 7, \"[videoTrack] Unsupported codec in video frame: \".concat(header.codecID));\n  var packet = tag.body.slice(1, 5);\n  debug.error(packet.length >= 4, '[H264] Invalid AVC packet, missing AVCPacketType or/and CompositionTime');\n  var view = new DataView(packet.buffer);\n  var AVCPacketType = view.getUint8(0);\n  var CompositionTime = (view.getUint32(0) & 0x00ffffff) << 8 >> 8;\n  var pts = CompositionTime + tag.timestamp;\n  var packetData = tag.body.subarray(5);\n\n  if (AVCPacketType === 0) {\n    debug.warn(!AVCDecoderConfigurationRecord, '[h264] Find another one AVCDecoderConfigurationRecord');\n    debug.error(packetData.length >= 7, '[H264] AVCDecoderConfigurationRecord parse length is not enough');\n    var readDcr = readBuffer(packetData);\n    var result = {};\n    result.configurationVersion = readDcr(1)[0];\n    debug.error(result.configurationVersion === 1, \"[H264] Invalid configurationVersion: \".concat(result.configurationVersion));\n    result.AVCProfileIndication = readDcr(1)[0];\n    debug.error(result.AVCProfileIndication !== 0, \"[H264] Invalid AVCProfileIndication: \".concat(result.AVCProfileIndication));\n    result.profile_compatibility = readDcr(1)[0];\n    result.AVCLevelIndication = readDcr(1)[0];\n    result.lengthSizeMinusOne = (readDcr(1)[0] & 3) + 1;\n    debug.error(result.lengthSizeMinusOne === 4 || result.lengthSizeMinusOne !== 3, \"[H264] Invalid lengthSizeMinusOne: \".concat(result.lengthSizeMinusOne));\n    result.numOfSequenceParameterSets = readDcr(1)[0] & 31;\n    debug.error(result.numOfSequenceParameterSets !== 0, \"[H264] Invalid numOfSequenceParameterSets: \".concat(result.numOfSequenceParameterSets));\n    debug.warn(result.numOfSequenceParameterSets === 1, \"[H264] Strange numOfSequenceParameterSets: \".concat(result.numOfSequenceParameterSets));\n\n    for (var _index2 = 0; _index2 < result.numOfSequenceParameterSets; _index2 += 1) {\n      result.sequenceParameterSetLength = readBufferSum(readDcr(2));\n\n      if (result.sequenceParameterSetLength > 0) {\n        var SPS = readDcr(result.sequenceParameterSetLength);\n        postMessage({\n          type: 'videoData',\n          data: mergeBuffer(nalStart, SPS)\n        });\n      }\n    }\n\n    result.numOfPictureParameterSets = readDcr(1)[0];\n    debug.error(result.numOfPictureParameterSets !== 0, \"[H264] Invalid numOfPictureParameterSets: \".concat(result.numOfPictureParameterSets));\n    debug.warn(result.numOfPictureParameterSets === 1, \"[H264] Strange numOfPictureParameterSets: \".concat(result.numOfPictureParameterSets));\n\n    for (var _index3 = 0; _index3 < result.numOfPictureParameterSets; _index3 += 1) {\n      result.pictureParameterSetLength = readBufferSum(readDcr(2));\n\n      if (result.pictureParameterSetLength > 0) {\n        var PPS = readDcr(result.pictureParameterSetLength);\n        postMessage({\n          type: 'videoData',\n          data: mergeBuffer(nalStart, PPS)\n        });\n      }\n    }\n\n    AVCDecoderConfigurationRecord = result;\n    postMessage({\n      type: 'AVCDecoderConfigurationRecord',\n      data: result\n    });\n  } else if (AVCPacketType === 1) {\n    var _AVCDecoderConfigurat = AVCDecoderConfigurationRecord,\n        lengthSizeMinusOne = _AVCDecoderConfigurat.lengthSizeMinusOne;\n    var readVideo = readBuffer(packetData);\n\n    while (readVideo.index < packetData.length) {\n      var length = readBufferSum(readVideo(lengthSizeMinusOne));\n      postMessage({\n        type: 'videoData',\n        data: mergeBuffer(nalStart, readVideo(length)),\n        timestamp: pts\n      });\n    }\n  } else {\n    debug.error(AVCPacketType === 2, \"[H264] Invalid video packet type \".concat(AVCPacketType));\n  }\n}\n\nfunction demuxerAudioTag(tag) {\n  debug.error(tag.body.length > 1, 'Invalid audio packet');\n  var header = {\n    soundFormat: (tag.body[0] & 0xf0) >> 4,\n    soundRate: (tag.body[0] & 0x0c) >> 2,\n    soundSize: (tag.body[0] & 0x02) >> 1,\n    soundType: (tag.body[0] & 0x01) >> 0\n  };\n  debug.error(header.soundFormat === 10, \"[audioTrack] unsupported audio format: \".concat(header.soundFormat));\n  var packet = tag.body.subarray(1);\n  var packetType = packet[0];\n\n  if (packetType === 0) {\n    var packetData = packet.subarray(1);\n    debug.warn(!AudioSpecificConfig, '[AAC] Find another one AudioSpecificConfig');\n    debug.error(packetData.length >= 2, '[AAC] AudioSpecificConfig parse length is not enough');\n    var result = {};\n    result.audioObjectType = (packetData[0] & 0xf8) >> 3;\n    result.samplingFrequencyIndex = ((packetData[0] & 7) << 1) + ((packetData[1] & 0x80) >> 7 & 1);\n    result.channelConfiguration = (packetData[1] & 0x7f) >> 3;\n    AudioSpecificConfig = result;\n    postMessage({\n      type: 'AudioSpecificConfig',\n      data: result\n    });\n  } else {\n    var _AudioSpecificConfig = AudioSpecificConfig,\n        audioObjectType = _AudioSpecificConfig.audioObjectType,\n        samplingFrequencyIndex = _AudioSpecificConfig.samplingFrequencyIndex,\n        channelConfiguration = _AudioSpecificConfig.channelConfiguration;\n    var ADTSLen = tag.dataSize - 2 + 7;\n    var ADTSHeader = new Uint8Array(7);\n    ADTSHeader[0] = 0xff;\n    ADTSHeader[1] = 0xf0;\n    ADTSHeader[1] |= 0 << 3;\n    ADTSHeader[1] |= 0 << 1;\n    ADTSHeader[1] |= 1;\n    ADTSHeader[2] = audioObjectType - 1 << 6;\n    ADTSHeader[2] |= (samplingFrequencyIndex & 0x0f) << 2;\n    ADTSHeader[2] |= 0 << 1;\n    ADTSHeader[2] |= (channelConfiguration & 0x04) >> 2;\n    ADTSHeader[3] = (channelConfiguration & 0x03) << 6;\n    ADTSHeader[3] |= 0 << 5;\n    ADTSHeader[3] |= 0 << 4;\n    ADTSHeader[3] |= 0 << 3;\n    ADTSHeader[3] |= 0 << 2;\n    ADTSHeader[3] |= (ADTSLen & 0x1800) >> 11;\n    ADTSHeader[4] = (ADTSLen & 0x7f8) >> 3;\n    ADTSHeader[5] = (ADTSLen & 0x7) << 5;\n    ADTSHeader[5] |= 0x1f;\n    ADTSHeader[6] = 0xfc;\n    var ADTSBody = tag.body.subarray(2);\n    postMessage({\n      type: 'audioData',\n      data: mergeBuffer(ADTSHeader, ADTSBody),\n      timestamp: tag.timestamp\n    });\n  }\n}\n\nonmessage = function onmessage(event) {\n  uint8 = mergeBuffer(uint8, event.data);\n\n  if (!header && readable(13)) {\n    header = Object.create(null);\n    header.signature = readString(read(3));\n    header.version = read(1)[0];\n    debug.error(header.signature === 'FLV' && header.version === 1, 'FLV header not found');\n    header.flags = read(1)[0];\n    var hasAudio = (header.flags & 4) >>> 2 !== 0;\n    var hasVideo = (header.flags & 1) !== 0;\n    debug.warn(hasVideo, '[FLV header] flags not found video');\n    debug.warn(hasAudio, '[FLV header] flags not found audio');\n    header.headersize = readBufferSum(read(4));\n    var prevTagSize = readBufferSum(read(4));\n    debug.error(prevTagSize === 0, \"PrevTagSize0 should be equal to 0, but got \".concat(prevTagSize));\n    postMessage({\n      type: 'flvHeader',\n      data: header\n    });\n  }\n\n  while (index < uint8.length) {\n    var tag = Object.create(null);\n    var restIndex = index;\n\n    if (readable(11)) {\n      tag.tagType = read(1)[0];\n      tag.dataSize = readBufferSum(read(3));\n      var ts2 = read(1)[0];\n      var ts1 = read(1)[0];\n      var ts0 = read(1)[0];\n      var ts3 = read(1)[0];\n      tag.timestamp = ts0 | ts1 << 8 | ts2 << 16 | ts3 << 24;\n      tag.streamID = readBufferSum(read(3));\n      debug.error(tag.streamID === 0, \"streamID should be equal to 0, but got \".concat(tag.streamID));\n    } else {\n      index = 0;\n      uint8 = uint8.subarray(restIndex);\n      return;\n    }\n\n    if (readable(tag.dataSize + 4)) {\n      tag.body = read(tag.dataSize);\n\n      var _prevTagSize = readBufferSum(read(4));\n\n      debug.error(_prevTagSize === tag.dataSize + 11, \"Invalid PrevTagSize: \".concat(_prevTagSize));\n    } else {\n      index = 0;\n      uint8 = uint8.subarray(restIndex);\n      return;\n    }\n\n    switch (tag.tagType) {\n      case 18:\n        demuxerScripTag(tag);\n        break;\n\n      case 9:\n        demuxerVideoTag(tag);\n        break;\n\n      case 8:\n        demuxerAudioTag(tag);\n        break;\n\n      default:\n        debug.error(false, \"unknown tag type: \".concat(tag.tagType));\n        break;\n    }\n  }\n\n  index = 0;\n  uint8 = new Uint8Array();\n};"])));
    this.demuxRate = calculationRate(function (rate) {
      flv.emit('demuxRate', rate);
    });
    flv.on('destroy', function () {
      _this.demuxWorker.terminate();

      _this.demuxWorker = null;
    });
    flv.on('streamStart', function () {
      _this.streaming = true;
      _this.streamStartTime = getNowTime();

      if (typeof options.url === 'string') {
        var url = Object.assign(document.createElement('a'), {
          href: options.url
        }).href;
        debug.log('stream-url', url);
      }
    });
    flv.on('streaming', function (uint8) {
      _this.demuxWorker.postMessage(uint8);
    });
    flv.on('streamEnd', function (uint8) {
      _this.streaming = false;
      _this.streamEndTime = getNowTime();

      if (uint8) {
        _this.index = 0;

        _this.demuxWorker.postMessage(uint8);
      }

      debug.log('stream-time', "".concat(_this.streamEndTime - _this.streamStartTime, " ms"));
      _this.demuxed = true;
      flv.emit('demuxDone');
      debug.log('demux-done');
    });
    var sps = new Uint8Array();
    var pps = new Uint8Array();

    this.demuxWorker.onmessage = function (event) {
      var message = event.data;

      switch (message.type) {
        case 'flvHeader':
          _this.header = message.data;
          flv.emit('flvHeader', _this.header);
          debug.log('flv-header', _this.header);
          break;

        case 'scripMeta':
          _this.scripMeta = message.data;
          flv.emit('scripMeta', _this.scripMeta);
          debug.log('scrip-meta', _this.scripMeta);
          break;

        case 'AVCDecoderConfigurationRecord':
          _this.AVCDecoderConfigurationRecord = message.data;
          flv.emit('AVCDecoderConfigurationRecord', _this.AVCDecoderConfigurationRecord);
          debug.log('AVCDecoderConfigurationRecord', _this.AVCDecoderConfigurationRecord);
          debug.log('AVC-profile', getProfileString(_this.AVCDecoderConfigurationRecord.AVCProfileIndication));
          debug.log('AVC-level', getLevelString(_this.AVCDecoderConfigurationRecord.AVCLevelIndication));
          break;

        case 'AudioSpecificConfig':
          _this.AudioSpecificConfig = message.data;
          flv.emit('AudioSpecificConfig', _this.AudioSpecificConfig);
          debug.log('AudioSpecificConfig', _this.AudioSpecificConfig);
          break;

        case 'videoData':
          {
            _this.demuxRate(1);

            _this.videoDataLength += 1;
            _this.videoDataSize += message.data.byteLength;
            var readNalu = readBuffer(message.data);
            readNalu(4);
            var naluType = readNalu(1)[0] & 31;

            switch (naluType) {
              case 1:
              case 5:
                {
                  flv.emit('videoData', mergeBuffer(sps, pps, message.data), message.timestamp);
                  break;
                }

              case 7:
                sps = message.data;
                break;

              case 8:
                pps = message.data;
                break;

              default:
                break;
            }

            break;
          }

        case 'audioData':
          _this.audioDataLength += 1;
          _this.audioDataSize += message.data.byteLength;
          flv.emit('audioData', message.data, message.timestamp);
          break;

        default:
          break;
      }
    };
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var FetchLoader =
  /*#__PURE__*/
  function () {
    function FetchLoader(flv) {
      var _this = this;

      classCallCheck(this, FetchLoader);

      this.flv = flv;
      var options = flv.options,
          debug = flv.debug,
          player = flv.player;
      this.byteLength = 0;
      this.reader = null;
      this.chunkStart = 0;
      this.contentLength = 0;
      this.data = new Uint8Array();
      this.readChunk = throttle(this.readChunk, 1000);
      this.streamRate = calculationRate(function (rate) {
        flv.emit('streamRate', rate);
      });
      flv.on('destroy', function () {
        _this.reader.cancel();

        _this.data = null;
      });
      flv.on('timeupdate', function (currentTime) {
        if (!options.live && player.loaded - currentTime <= 5) {
          _this.readChunk();
        }
      });

      if (checkReadableStream()) {
        this.initFetchStream();
      } else {
        fetch(options.url, {
          method: 'head',
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: options.cors ? 'cors' : 'no-cors',
          headers: {
            range: 'bytes=0-1024'
          }
        }).then(function (response) {
          _this.contentLength = Number(response.headers.get('content-length')) || options.filesize;
          var acceptRanges = response.headers.get('accept-ranges');
          debug.error(typeof acceptRanges === 'string' && acceptRanges.includes('bytes'), "Unable to get response header 'accept-ranges'");

          _this.flv.emit('streamStart');

          _this.initFetchRange(0, options.chunkSize);
        }).catch(function (error) {
          flv.emit('streamError', error);
          throw error;
        });
      }
    }

    createClass(FetchLoader, [{
      key: "readChunk",
      value: function readChunk() {
        var options = this.flv.options;
        var chunkEnd = Math.min(this.chunkStart + options.chunkSize, this.data.length);

        if (chunkEnd > this.chunkStart) {
          var chunkData = this.data.subarray(this.chunkStart, chunkEnd);
          this.flv.emit('streaming', chunkData);
          this.chunkStart = chunkEnd;
        }
      }
    }, {
      key: "initFetchStream",
      value: function initFetchStream() {
        var _this$flv = this.flv,
            options = _this$flv.options,
            debug = _this$flv.debug;
        var self = this;
        this.flv.emit('streamStart');
        return fetch(options.url, {
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: options.cors ? 'cors' : 'no-cors',
          headers: options.headers
        }).then(function (response) {
          self.reader = response.body.getReader();
          return function read() {
            return self.reader.read().then(function (_ref) {
              var done = _ref.done,
                  value = _ref.value;

              if (done) {
                self.flv.emit('streamEnd');
                debug.log('stream-end', "".concat(self.byteLength, " byte"));
                return;
              }

              var uint8 = new Uint8Array(value);
              self.byteLength += uint8.byteLength;
              self.streamRate(uint8.byteLength);

              if (options.live) {
                self.flv.emit('streaming', uint8);
              } else {
                self.data = mergeBuffer(self.data, uint8);

                if (self.chunkStart === 0) {
                  self.readChunk();
                }
              } // eslint-disable-next-line consistent-return


              return read();
            }).catch(function (error) {
              self.flv.emit('streamError', error);
              throw error;
            });
          }();
        }).catch(function (error) {
          self.flv.emit('streamError', error);
          throw error;
        });
      }
    }, {
      key: "initFetchRange",
      value: function initFetchRange(rangeStart, rangeEnd) {
        var options = this.flv.options;
        var self = this;
        return fetch(options.url, {
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: options.cors ? 'cors' : 'no-cors',
          headers: _objectSpread({}, options.headers, {
            range: "bytes=".concat(rangeStart, "-").concat(rangeEnd)
          })
        }).then(function (response) {
          return response.arrayBuffer();
        }).then(function (value) {
          var uint8 = new Uint8Array(value);
          self.byteLength += uint8.byteLength;
          self.streamRate(uint8.byteLength);

          if (options.live) {
            self.flv.emit('streaming', uint8);
          } else {
            self.data = mergeBuffer(self.data, uint8);

            if (self.chunkStart === 0) {
              self.readChunk();
            }
          }

          var nextRangeStart = Math.min(self.contentLength, rangeEnd + 1);
          var nextRangeEnd = Math.min(self.contentLength, nextRangeStart + options.chunkSize);

          if (nextRangeEnd > nextRangeStart) {
            self.initFetchRange(nextRangeStart, nextRangeEnd);
          }
        }).catch(function (error) {
          self.flv.emit('streamError', error);
          throw error;
        });
      }
    }]);

    return FetchLoader;
  }();

  var WebsocketLoader = function WebsocketLoader(flv) {
    var _this = this;

    classCallCheck(this, WebsocketLoader);

    var debug = flv.debug,
        options = flv.options,
        proxy = flv.events.proxy;
    this.byteLength = 0;
    this.streamRate = calculationRate(function (rate) {
      flv.emit('streamRate', rate);
    });
    this.socket = new WebSocket(flv.options.url);
    this.socket.binaryType = 'arraybuffer';
    flv.emit('streamStart');
    proxy(this.socket, 'open', function () {
      _this.socket.send(options.socketSend);
    });
    proxy(this.socket, 'message', function (event) {
      var uint8 = new Uint8Array(event.data);
      _this.byteLength += uint8.byteLength;

      _this.streamRate(uint8.byteLength);

      flv.emit('streaming', uint8);
    });
    proxy(this.socket, 'close', function () {
      flv.emit('streamEnd');
      debug.log('stream-end', "".concat(_this.byteLength, " byte"));
    });
    proxy(this.socket, 'error', function (error) {
      flv.emit('streamError', error);
      throw error;
    });
    flv.on('destroy', function () {
      _this.socket.close();
    });
  };

  var FileLoader = function FileLoader(flv) {
    classCallCheck(this, FileLoader);

    var reader = new FileReader();
    var proxy = flv.events.proxy;
    proxy(reader, 'load', function (e) {
      var uint8 = new Uint8Array(e.target.result);
      flv.emit('streamEnd', uint8);
      flv.debug.log('stream-end', "".concat(uint8.byteLength, " byte"));
    });
    proxy(reader, 'error', function (error) {
      flv.emit('streamError', error);
    });
    flv.on('destroy', function () {
      reader.abort();
    });
    flv.emit('streamStart');
    reader.readAsArrayBuffer(flv.options.url);
  };

  var Stream =
  /*#__PURE__*/
  function () {
    function Stream(flv) {
      classCallCheck(this, Stream);

      var Loader = Stream.getLoaderFactory(flv.options.url);
      flv.debug.log('stream-loader', Loader.name);
      return new Loader(flv, this);
    }

    createClass(Stream, null, [{
      key: "getLoaderFactory",
      value: function getLoaderFactory(url) {
        if (url instanceof File) {
          return FileLoader;
        }

        if (/^ws{1,2}:\/\//i.test(url)) {
          return WebsocketLoader;
        }

        return FetchLoader;
      }
    }]);

    return Stream;
  }();

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var id = 0;

  var FlvPlayer =
  /*#__PURE__*/
  function (_Emitter) {
    inherits(FlvPlayer, _Emitter);

    function FlvPlayer(options) {
      var _this;

      classCallCheck(this, FlvPlayer);

      _this = possibleConstructorReturn(this, getPrototypeOf(FlvPlayer).call(this));
      _this.options = optionValidator(_objectSpread$1({}, FlvPlayer.options, {}, options), FlvPlayer.scheme);

      if (_this.options.live) {
        _this.options.cache = false;
        _this.options.hasAudio = false;
      }

      if (typeof _this.options.container === 'string') {
        _this.options.container = document.querySelector(_this.options.container);
      }

      if (window.FlvplayerDecoder) {
        _this.init();
      } else {
        loadScript(_this.options.decoder, 'FlvplayerDecoder').then(function () {
          _this.init();
        });
      }

      console.log('%c FlvPlayer.js %c 1.1.1 %c https://flvplayer.js.org', 'color: #fff; background: #5f5f5f', 'color: #fff; background: #4bc729', '');
      return _this;
    }

    createClass(FlvPlayer, [{
      key: "init",
      value: function init() {
        this.isDestroy = false;
        this.isMobile = isMobile();
        this.isWechat = isWechat();
        this.debug = new Debug(this);
        this.events = new Events(this);
        this.player = new Player(this);
        this.decoder = new Decoder(this);
        this.demuxer = new Demuxer(this);
        this.stream = new Stream(this);
        proxyPropertys(this, this.player);

        if (window.FlvplayerControl && this.options.control) {
          this.control = new window.FlvplayerControl(this);
          proxyPropertys(this, this.control);
        }

        id += 1;
        this.id = id;
        FlvPlayer.instances.push(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.isDestroy = true;
        this.emit('destroy');
        FlvPlayer.instances.splice(FlvPlayer.instances.indexOf(this), 1);
      }
    }], [{
      key: "options",
      get: function get() {
        return {
          url: '',
          container: '',
          debug: false,
          live: false,
          loop: false,
          autoPlay: false,
          hasAudio: true,
          control: true,
          cache: true,
          muted: false,
          cors: true,
          touchResume: true,
          withCredentials: false,
          volume: 0.7,
          frameRate: 30,
          maxTimeDiff: 200,
          chunkSize: 1024 * 1024,
          freeMemory: 64 * 1024 * 1024,
          filesize: Infinity,
          width: 400,
          height: 300,
          socketSend: '',
          headers: {},
          decoder: './flvplayer-decoder-baseline.js'
        };
      }
    }, {
      key: "scheme",
      get: function get() {
        return {
          url: 'string|file',
          container: 'string|htmldivelement',
          debug: 'boolean',
          live: 'boolean',
          loop: 'boolean',
          autoPlay: 'boolean',
          hasAudio: 'boolean',
          control: 'boolean',
          cache: 'boolean',
          muted: 'boolean',
          cors: 'boolean',
          touchResume: 'boolean',
          withCredentials: 'boolean',
          volume: 'number',
          frameRate: 'number',
          maxTimeDiff: 'number',
          chunkSize: 'number',
          freeMemory: 'number',
          filesize: 'number',
          width: 'number',
          height: 'number',
          socketSend: 'string',
          headers: 'object',
          decoder: 'string'
        };
      }
    }, {
      key: "isSupported",
      get: function get() {
        return isSupported;
      }
    }, {
      key: "version",
      get: function get() {
        return '1.1.1';
      }
    }, {
      key: "env",
      get: function get() {
        return '"development"';
      }
    }, {
      key: "utils",
      get: function get() {
        return utils;
      }
    }]);

    return FlvPlayer;
  }(Emitter);

  Object.defineProperty(FlvPlayer, 'instances', {
    value: []
  });

  return FlvPlayer;

}));
//# sourceMappingURL=flvplayer.js.map
