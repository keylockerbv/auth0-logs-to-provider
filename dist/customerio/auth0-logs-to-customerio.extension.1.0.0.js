module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("auth0-extension-tools@1.3.1");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(0).config();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(35);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(106);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const server = __webpack_require__(79);
const urlHelpers = __webpack_require__(39);
const middlewares = __webpack_require__(72);
const routes = __webpack_require__(78);

/*
 * Bootstrap function to run initialize an Express server.
 */
module.exports.createServer = server.createServer;

/*
 * Helpers to figure out the full url and the base path based on the request
 */
module.exports.urlHelpers = urlHelpers;

/*
 * Useful middlewares
 */
module.exports.middlewares = middlewares;

/*
 * Route bundles.
 */
module.exports.routes = routes;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(153);

winston.emitErrs = true;

var logger = new winston.Logger({
  transports: [new winston.transports.Console({
    timestamp: true,
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  })],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: function write(message) {
    logger.info(message.replace(/\n$/, ''));
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(8);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express@4.17.1");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash@4.8.2");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(18);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(21);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("bluebird@3.4.6");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

const url = __webpack_require__(67);

const USE_WILDCARD_DOMAIN = 3;
const USE_CUSTOM_DOMAIN = 2;
const USE_SHARED_DOMAIN = 1;
const SANITIZE_RX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g; // eslint-disable-line no-useless-escape

const getBasePath = function(originalUrl, path) {
  var basePath = url.parse(originalUrl).pathname || '';
  basePath = basePath.replace(path, '')
    .replace(/^\/|\/$/g, '');
  if (!basePath.startsWith('/')) {
    basePath = '/' + basePath;
  }
  if (!basePath.endsWith('/')) {
    basePath += '/';
  }
  return basePath;
};

module.exports.getBasePath = function(req) {
  return getBasePath(req.originalUrl || '', req.path);
};

module.exports.getBaseUrl = function(req, protocol) {
  var urlProtocol = protocol;
  if (!urlProtocol && "production" === 'development') {
    urlProtocol = 'http';
  }

  const originalUrl = url.parse(req.originalUrl || '').pathname || '';
  return url.format({
    protocol: urlProtocol || 'https',
    host: req.headers.host,
    pathname: originalUrl.replace(req.path, '').replace(/\/$/g, '')
  });
};

function createRouteNormalizationRx(claims) {
  if (!claims.container) {
    return null;
  }

  const container = claims.container.replace(SANITIZE_RX, '\\$&');
  const name = claims.jtn
      ? claims.jtn.replace(SANITIZE_RX, '\\$&')
      : '';

  if (claims.url_format === USE_SHARED_DOMAIN) {
    return new RegExp('^/api/run/' + container + '/(?:' + name + '/?)?');
  } else if (claims.url_format === USE_CUSTOM_DOMAIN) {
    return new RegExp('^/' + container + '/(?:' + name + '/?)?');
  } else if (claims.url_format === USE_WILDCARD_DOMAIN) {
    return new RegExp('^/(?:' + name + '/?)?');
  }

  throw new Error('Unsupported webtask URL format.');
}

function getWTRegionalUrl(wtUrl, container) {
  if (!wtUrl) {
    return null;
  }

  const nodeVersion = (wtUrl.indexOf('sandbox8') >= 0) ? '8' : '';
  const firstPart = wtUrl.split('.it.auth0.com')[0];
  const region = firstPart.split('-')[1] || 'us';

  return 'https://' + container + '.' + region + nodeVersion + '.webtask.io/';
}

module.exports.getWebtaskUrl = function(req) {
  const normalizeRouteRx = createRouteNormalizationRx(req.x_wt);
  const requestOriginalUrl = req.url;
  const requestUrl = req.url.replace(normalizeRouteRx, '/');
  const requestPath = url.parse(requestUrl || '').pathname;
  const isIsolatedDomain = (req.x_wt && req.x_wt.ectx && req.x_wt.ectx.ISOLATED_DOMAIN) || false;
  const originalUrl = url.parse(requestOriginalUrl || '').pathname || '';

  var webtaskUrl;
  if (!isIsolatedDomain) {
    webtaskUrl = originalUrl;
  } else {
    webtaskUrl = url.format({
      protocol: 'https',
      host: req.headers.host,
      pathname: originalUrl.replace(requestPath, '').replace(/\/$/g, '')
    });

    const trigger = '.it.auth0.com/api/run/' + req.x_wt.container + '/';
    const regionalUrl = getWTRegionalUrl(webtaskUrl, req.x_wt.container);

    if (webtaskUrl.indexOf(trigger) >= 0) {
      webtaskUrl = webtaskUrl.replace('https://' + req.headers.host + '/api/run/' + req.x_wt.container + '/', regionalUrl);
    }
  }

  return webtaskUrl;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(38);
var request = __webpack_require__(66);
var querystring = __webpack_require__(148);
var tools = __webpack_require__(0);

function LogsApiClient(options) {
  if (options === null || options === undefined) {
    throw new tools.ArgumentError('Must provide an options object');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.clientId === null || options.clientId === undefined) {
    throw new tools.ArgumentError('Must provide a valid clientId');
  }

  if (typeof options.clientId !== 'string' || options.clientId.length === 0) {
    throw new tools.ArgumentError('The provided clientId is invalid: ' + options.clientId);
  }

  if (options.clientSecret === null || options.clientSecret === undefined) {
    throw new tools.ArgumentError('Must provide a valid clientSecret');
  }

  if (typeof options.clientSecret !== 'string' || options.clientSecret.length === 0) {
    throw new tools.ArgumentError('The provided clientSecret is invalid: ' + options.clientSecret);
  }

  this.options = options;
  this.tokenCache = options.tokenCache || {
    getToken: function getToken() {
      return Promise.resolve();
    },
    setToken: function setToken() {
      return Promise.resolve();
    }
  };
}

LogsApiClient.prototype.getAccessToken = function () {
  var self = this;
  return new Promise(function (resolve, reject) {
    request.post('https://' + self.options.domain + '/oauth/token').send({
      audience: 'https://' + self.options.domain + '/api/v2/',
      client_id: self.options.clientId,
      client_secret: self.options.clientSecret,
      grant_type: 'client_credentials'
    }).set('Accept', 'application/json').end(function (err, res) {
      if (err && err.status === 401) {
        return reject(new tools.ManagementApiError('unauthorized', 'Invalid credentials for ' + self.options.clientId, err.status));
      } else if (err && res && res.body && res.body.error) {
        return reject(new tools.ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
      } else if (err) {
        return reject(err);
      }

      if (!res.ok || !res.body.access_token) {
        return reject(new tools.ManagementApiError('unknown_error', 'Unknown error from Management API or no access_token was provided: ' + (res.text || res.status)));
      }

      var expiresAt = new Date();
      return resolve({
        token: res.body.access_token,
        expiresAt: expiresAt.setSeconds(expiresAt.getSeconds() + res.body.expires_in)
      });
    });
  });
};

LogsApiClient.prototype.getAccessTokenCached = function () {
  var self = this;
  return self.tokenCache.getToken().then(function (cached) {
    if (cached && cached.token) {
      var now = new Date().valueOf();
      if (cached.expiresAt - now > 10000) {
        return cached;
      }
    }

    return self.getAccessToken(self.options).then(function (res) {
      return self.tokenCache.setToken(res).then(function () {
        return res;
      });
    });
  });
};

LogsApiClient.prototype.getLogs = function (params) {
  var self = this;
  return new Promise(function (resolve, reject) {
    self.getAccessTokenCached(self.options, self.storage).then(function (data) {
      var query = querystring.stringify(params);
      request.get('https://' + self.options.domain + '/api/v2/logs?' + query).set('Authorization', 'Bearer ' + data.token).set('Content-Type', 'application/json').end(function (err, res) {
        if (err && err.status === 403) {
          var returnError = function returnError() {
            return reject(new tools.ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
          };

          // Clear the cached token.
          self.tokenCache.setToken(null).then(returnError).catch(returnError);
        }

        if (err && res && res.body && res.body.error) {
          return reject(new tools.ManagementApiError(res.body.error, res.body.error_description || res.body.error, err.status));
        }

        if (err) {
          return reject(err);
        }

        if (!res.ok) {
          return reject(new tools.ManagementApiError('unknown_error', 'Unknown error from Management API: ' + (res.text || res.status)));
        }

        return resolve({
          logs: res.body,
          limits: {
            limit: res.headers['x-ratelimit-limit'],
            remaining: res.headers['x-ratelimit-remaining'],
            reset: res.headers['x-ratelimit-reset']
          }
        });
      });
    });
  });
};

module.exports = LogsApiClient;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SlackReporter = __webpack_require__(81);

module.exports.LogsProcessor = __webpack_require__(80);

module.exports.LogsApiClient = __webpack_require__(40);

module.exports.LogsApiStream = __webpack_require__(43);

module.exports.logTypes = __webpack_require__(42);

module.exports.reporters = {
  SlackReporter: SlackReporter
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sev = { success: 'success', error: 'error', warning: 'warning' };
var logTypes = {
  s: {
    name: 'Success Login',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  ssa: {
    name: 'Success Silent Auth',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  fsa: {
    name: 'Failed Silent Auth',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  },
  seacft: {
    name: 'Success Exchange',
    description: 'Authorization Code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feacft: {
    name: 'Failed Exchange',
    description: 'Authorization Code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  seccft: {
    name: 'Success Exchange',
    description: 'Client Credentials for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feccft: {
    name: 'Failed Exchange',
    description: 'Client Credentials for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  sepft: {
    name: 'Success Exchange',
    description: 'Password for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fepft: {
    name: 'Failed Exchange',
    description: 'Password for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  sertft: {
    name: 'Success Exchange',
    description: 'Refresh Token for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fertft: {
    name: 'Failed Exchange',
    description: 'Refresh Token for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  seoobft: {
    name: 'Success Exchange',
    description: 'Password and OOB Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feoobft: {
    name: 'Failed Exchange',
    description: 'Password and OOB Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  seotpft: {
    name: 'Success Exchange',
    description: 'Password and OTP Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  feotpft: {
    name: 'Failed Exchange',
    description: 'Password and OTP Challenge for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  sercft: {
    name: 'Success Exchange',
    description: 'Password and MFA Recovery code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fercft: {
    name: 'Failed Exchange',
    description: 'Password and MFA Recovery code for Access Token',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  f: {
    name: 'Failed Login',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  },
  w: {
    name: 'Warning',
    icon: 'icon-budicon-354',
    severity: sev.warning,
    level: 2
  },
  depnote: {
    name: 'Deprecation Notice',
    icon: 'icon-budicon-354',
    severity: sev.warning,
    level: 2
  },
  du: {
    name: 'Deleted User',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fu: {
    name: 'Failed Login (invalid email/username)',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fp: {
    name: 'Failed Login (wrong password)',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fc: {
    name: 'Failed by Connector',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 3
  },
  fco: {
    name: 'Failed by CORS',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 3
  },
  con: {
    name: 'Connector Online',
    icon: 'icon-budicon-143',
    severity: sev.success,
    level: 1
  },
  coff: {
    name: 'Connector Offline',
    icon: 'icon-budicon-143',
    severity: sev.error,
    level: 3
  },
  fcpro: {
    name: 'Failed Connector Provisioning',
    icon: 'icon-budicon-143',
    severity: sev.error,
    level: 4
  },
  ss: {
    name: 'Success Signup',
    icon: 'icon-budicon-314',
    severity: sev.success,
    level: 1
  },
  fs: {
    name: 'Failed Signup',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  cs: {
    name: 'Code Sent',
    icon: 'icon-budicon-243',
    severity: sev.success,
    level: 1
  },
  cls: {
    name: 'Code/Link Sent',
    icon: 'icon-budicon-781',
    severity: sev.success,
    level: 1
  },
  sv: {
    name: 'Success Verification Email',
    icon: 'icon-budicon-781',
    severity: sev.success,
    level: 1
  },
  fv: {
    name: 'Failed Verification Email',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  scp: {
    name: 'Success Change Password',
    icon: 'icon-budicon-280',
    severity: sev.success,
    level: 1
  },
  fcp: {
    name: 'Failed Change Password',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  scph: {
    name: 'Success Post Change Password Hook',
    icon: 'icon-budicon-280',
    severity: sev.success,
    level: 1
  },
  fcph: {
    name: 'Failed Post Change Password Hook',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  sce: {
    name: 'Success Change Email',
    icon: 'icon-budicon-266',
    severity: sev.success,
    level: 1
  },
  fce: {
    name: 'Failed Change Email',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  scu: {
    name: 'Success Change Username',
    icon: 'icon-budicon-266',
    severity: sev.success,
    level: 1
  },
  fcu: {
    name: 'Failed Change Username',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  scpn: {
    name: 'Success Change Phone Number',
    icon: 'icon-budicon-266',
    severity: sev.success,
    level: 1
  },
  fcpn: {
    name: 'Failed Change Phone Number',
    icon: 'icon-budicon-266',
    severity: sev.error,
    level: 3
  },
  svr: {
    name: 'Success Verification Email Request',
    icon: 'icon-budicon-781',
    severity: sev.success,
    level: 1
  },
  fvr: {
    name: 'Failed Verification Email Request',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  scpr: {
    name: 'Success Change Password Request',
    icon: 'icon-budicon-280',
    severity: sev.success,
    level: 1
  },
  fcpr: {
    name: 'Failed Change Password Request',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  fn: {
    name: 'Failed Sending Notification',
    icon: 'icon-budicon-782',
    severity: sev.error,
    level: 3
  },
  sapi: {
    name: 'API Operation',
    icon: 'icon-budicon-546',
    severity: sev.success,
    level: 1,
    category: 'api'
  },
  fapi: {
    name: 'Failed API Operation',
    icon: 'icon-budicon-546',
    severity: sev.error,
    level: 3,
    category: 'api'
  },
  limit_wc: {
    name: 'Blocked Account',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  limit_mu: {
    name: 'Blocked IP Address',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  limit_ui: {
    name: 'Too Many Calls to /userinfo',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  api_limit: {
    name: 'Rate Limit On API',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  limit_delegation: {
    name: 'Too Many Calls to /delegation',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 4
  },
  sdu: {
    name: 'Successful User Deletion',
    icon: 'icon-budicon-312',
    severity: sev.success,
    level: 1
  },
  fdu: {
    name: 'Failed User Deletion',
    icon: 'icon-budicon-311',
    severity: sev.error,
    level: 3
  },
  admin_update_launch: {
    name: 'Auth0 Update Launched',
    icon: 'icon-budicon-774',
    severity: sev.success,
    level: 1
  },
  sys_os_update_start: {
    name: 'Auth0 OS Update Started',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  sys_os_update_end: {
    name: 'Auth0 OS Update Ended',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  sys_update_start: {
    name: 'Auth0 Update Started',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  sys_update_end: {
    name: 'Auth0 Update Ended',
    icon: 'icon-budicon-661',
    severity: sev.success,
    level: 1
  },
  slo: {
    name: 'Success Logout',
    icon: 'icon-budicon-449',
    severity: sev.success,
    level: 1
  },
  flo: {
    name: 'Failed Logout',
    icon: 'icon-budicon-449',
    severity: sev.error,
    level: 3
  },
  sd: {
    name: 'Success Delegation',
    icon: 'icon-budicon-456',
    severity: sev.success,
    level: 1
  },
  fd: {
    name: 'Failed Delegation',
    icon: 'icon-budicon-456',
    severity: sev.error,
    level: 3
  },
  gd_unenroll: {
    name: 'Unenroll device account',
    icon: 'icon-budicon-298',
    severity: sev.success,
    level: 1
  },
  gd_update_device_account: {
    name: 'Update device account',
    icon: 'icon-budicon-257',
    severity: sev.success,
    level: 1
  },
  gd_module_switch: {
    name: 'Module switch',
    icon: 'icon-budicon-329',
    severity: sev.success,
    level: 1
  },
  gd_tenant_update: {
    name: 'Guardian tenant update',
    icon: 'icon-budicon-170',
    severity: sev.success,
    level: 1
  },
  gd_start_auth: {
    name: 'Second factor started',
    icon: 'icon-budicon-285',
    severity: sev.success,
    level: 1
  },
  gd_start_enroll: {
    name: 'Enroll started',
    icon: 'icon-budicon-299',
    severity: sev.success,
    level: 1
  },
  gd_start_enroll_failed: {
    name: 'MFA Enrollment start failed',
    icon: 'icon-budicon-299',
    severity: sev.error,
    level: 3
  },
  gd_user_delete: {
    name: 'User delete',
    icon: 'icon-budicon-298',
    severity: sev.success,
    level: 1
  },
  gd_auth_succeed: {
    name: 'OTP Auth suceed',
    icon: 'icon-budicon-mfa-login-succeed',
    severity: sev.success,
    level: 1
  },
  gd_auth_failed: {
    name: 'OTP Auth failed',
    icon: 'icon-budicon-mfa-login-failed',
    severity: sev.error,
    level: 3
  },
  gd_send_pn: {
    name: 'Push notification sent',
    icon: 'icon-budicon-mfa-send-pn',
    severity: sev.success,
    level: 1
  },
  gd_send_pn_failure: {
    name: 'Error sending MFA Push Notification',
    icon: 'icon-budicon-mfa-send-pn',
    severity: sev.error,
    level: 3
  },
  gd_auth_rejected: {
    name: 'OTP Auth rejected',
    icon: 'icon-budicon-mfa-login-failed',
    severity: sev.error,
    level: 3
  },
  gd_recovery_succeed: {
    name: 'Recovery succeed',
    icon: 'icon-budicon-mfa-recovery-succeed',
    severity: sev.success,
    level: 1
  },
  gd_recovery_failed: {
    name: 'Recovery failed',
    icon: 'icon-budicon-mfa-recovery-failed',
    severity: sev.error,
    level: 3
  },
  gd_send_sms: {
    name: 'SMS Sent',
    icon: 'icon-budicon-799',
    severity: sev.success,
    level: 1
  },
  gd_send_sms_failure: {
    name: 'Error sending MFA SMS',
    icon: 'icon-budicon-799',
    severity: sev.error,
    level: 3
  },
  gd_otp_rate_limit_exceed: {
    name: 'Too many failures',
    icon: 'icon-budicon-435',
    severity: sev.warning,
    level: 2
  },
  gd_recovery_rate_limit_exceed: {
    name: 'Too many failures',
    icon: 'icon-budicon-435',
    severity: sev.warning,
    level: 2
  },
  gd_enrollment_complete: {
    name: 'Guardian enrollment complete',
    icon: 'icon-budicon-299',
    severity: sev.success,
    level: 1
  },
  fui: {
    name: 'Users import',
    icon: 'icon-budicon-299',
    severity: sev.warning,
    level: 2
  },
  sui: {
    name: 'Users import',
    icon: 'icon-budicon-299',
    severity: sev.success,
    level: 1
  },
  pwd_leak: {
    name: 'Breached password',
    icon: 'icon-budicon-313',
    severity: sev.error,
    level: 3
  },
  fcoa: {
    name: 'Failed cross origin authentication',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  },
  scoa: {
    name: 'Success cross origin authentication',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  ublkdu: {
    name: 'Account unblocked',
    icon: 'icon-budicon-313',
    severity: sev.success,
    level: 1
  },
  sens: {
    name: 'Success Exchange',
    icon: 'icon-budicon-448',
    severity: sev.success,
    level: 1
  },
  fens: {
    name: 'Failed Exchange',
    icon: 'icon-budicon-448',
    severity: sev.error,
    level: 3
  }
};

module.exports = logTypes;
module.exports.get = function (type) {
  return logTypes[type] && logTypes[type].name || 'Unknown Log Type: ' + type;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(151);
var Readable = __webpack_require__(150).Readable;
var tools = __webpack_require__(0);

var LogsApiClient = __webpack_require__(40);

var MS_PER_S = 1000;
var NS_PER_MS = 1000000;

function LogsApiStream(options) {
  if (options === null || options === undefined) {
    throw new tools.ArgumentError('Must provide an options object');
  }

  Readable.call(this, { objectMode: true });

  this.client = new LogsApiClient(options);
  this.options = options;
  this.remaining = 50;
  this.lastBatch = 0;
  this.retries = 0;
  this.previousCheckpoint = options.checkpointId || null;
  this.lastCheckpoint = options.checkpointId || null;
  this.status = {
    startCheckpoint: options.checkpointId || null,
    start: new Date(),
    end: null,
    logsProcessed: 0
  };
}

util.inherits(LogsApiStream, Readable);

LogsApiStream.prototype.getQuery = function (types) {
  if (!types || !types.length) {
    return '';
  }

  return 'type:' + types.join(' OR type:');
};

LogsApiStream.prototype.done = function () {
  this.status.end = new Date();
  this.push(null);
};

LogsApiStream.prototype.next = function (take) {
  var self = this;
  var logger = this.options.logger;
  var perPage = take;

  if (self.remaining < 1) {
    self.status.warning = 'Auth0 Management API rate limit reached.';
    self.done();
  } else {
    var params = self.lastCheckpoint ? { take: perPage, from: self.lastCheckpoint } : { per_page: perPage, page: 0 };
    params.q = self.getQuery(self.options.types);
    params.sort = 'date:1';

    if (logger) {
      var startPoint = params.from ? 'checkpoint ' + params.from : 'page ' + params.page;
      logger.debug('Requesting logs from ' + startPoint);
    }

    var startTime = process.hrtime();
    var getLogs = function getLogs() {
      self.client.getLogs(params).then(function (data) {
        var elapsedTime = process.hrtime(startTime);
        var elapsedMillis = elapsedTime[0] * MS_PER_S + elapsedTime[1] / NS_PER_MS;

        if (logger) {
          logger.debug('Retrieved logs in ' + elapsedMillis + 'ms.');
        }

        var logs = data.logs;
        self.remaining = data.limits.remaining;

        if (logs && logs.length) {
          var filtered = logs;
          if (self.options.types && self.options.types.length) {
            filtered = logs.filter(function (log) {
              return self.options.types.indexOf(log.type) >= 0;
            }).slice(0, take || 100);
          }

          if (filtered.length) {
            self.lastCheckpoint = filtered[filtered.length - 1]._id;
            self.lastBatch += filtered.length;
            self.push({ logs: filtered, limits: data.limits });
          } else {
            self.lastCheckpoint = logs[logs.length - 1]._id;
            self.lastBatch += 0;
            self.push({ logs: [], limits: data.limits });
          }
        } else {
          self.status.end = new Date();
          self.push(null);
        }

        return logs;
      }).catch(function (err) {
        var start = self.options.start;
        var limit = self.options.maxRunTimeSeconds;
        var now = new Date().getTime();
        var hasTime = start + limit * 1000 >= now;

        if (self.options.maxRetries > self.retries && hasTime) {
          self.retries++;
          return getLogs();
        }

        return self.emit('error', err);
      });
    };

    getLogs();
  }
};

LogsApiStream.prototype.batchSaved = function () {
  this.status.logsProcessed += this.lastBatch;
  this.previousCheckpoint = this.lastCheckpoint;
  this.lastBatch = 0;
};

LogsApiStream.prototype._read = function read() {};

module.exports = LogsApiStream;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var once = __webpack_require__(137);

/**
 * Returns a middleware that can be used to conditionally execute another
 * middleware, or alternatively bypass it.
 *
 * @param {(boolean|function)} condition
 *   If true, the middleware will be executed, else the next middleware will be
 *   executed. If the conddition is a function it will be executed with the req,
 *   res, and next arguments. The return of the function will be used as the
 *   conditional.
 * @param {function} success
 *   The middleware to conditionally execute if condition is true.
 * @param {function} fail
 *   The middleware to conditionally execute if condition is false.
 *
 * @return {function}
 *   A middleware wraper to conditionally execute another middleware.
 *
 * @example
 *   // Will enable middleware for requests that use the application/json accept
 *   // header.
 *   app.use(require('express-conditional')(
 *     function (req, res, next) {
 *       return req.get('accept') === 'application/json';
 *     },
 *     function (req, res, next) {
 *       next();
 *     }
 *  ));
 */
module.exports = function (condition, success, fail) {
  return function (req, res, next) {
    var nextOnce = once(next);
    if (condition === true || typeof condition === 'function' && condition(req, res, nextOnce)) {
      return success(req, res, nextOnce);
    }
    if (fail) {
      return fail(req, res, nextOnce);
    }

    return nextOnce();
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(14);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(56);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(110);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(118);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(115);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(47).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(53);
var hiddenKeys = __webpack_require__(28).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(11);
var arrayIndexOf = __webpack_require__(102)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(29);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(18);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(105);
var html = __webpack_require__(47);
var cel = __webpack_require__(27);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(14)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(121)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
var global = __webpack_require__(1);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(136);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("express-jwt@3.1.0");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("superagent@1.2.0");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var url = __webpack_require__(67);
var path = __webpack_require__(65);
var morgan = __webpack_require__(147);
var Express = __webpack_require__(17);
var bodyParser = __webpack_require__(139);
var tools = __webpack_require__(0);
var expressTools = __webpack_require__(12);

var routes = __webpack_require__(87);
var meta = __webpack_require__(88);
var hooks = __webpack_require__(85);
var logger = __webpack_require__(13);
var config = __webpack_require__(5);
var processLogs = __webpack_require__(83);

module.exports = function (configProvider, storageProvider) {
  config.setProvider(configProvider);

  var storage = storageProvider ? new tools.WebtaskStorageContext(storageProvider, { force: 1 }) : new tools.FileStorageContext(path.join(__dirname, './data.json'), { mergeWrites: true });

  var app = new Express();
  app.use(morgan(':method :url :status :response-time ms - :res[content-length]', {
    stream: logger.stream
  }));

  var prepareBody = function prepareBody(middleware) {
    return function (req, res, next) {
      if (req.webtaskContext && req.webtaskContext.body) {
        req.body = req.webtaskContext.body;
        return next();
      }

      return middleware(req, res, next);
    };
  };

  app.use(prepareBody(bodyParser.json()));
  app.use(prepareBody(bodyParser.urlencoded({ extended: false })));

  // Configure routes.
  app.use(expressTools.routes.dashboardAdmins({
    secret: config('EXTENSION_SECRET'),
    audience: 'urn:logs-to-provider',
    rta: config('AUTH0_RTA').replace('https://', ''),
    domain: config('AUTH0_DOMAIN'),
    baseUrl: config('PUBLIC_WT_URL') || config('WT_URL'),
    clientName: 'Logs to Any Provider',
    urlPrefix: '',
    sessionStorageKey: 'logs-to-provider:apiToken'
  }));
  app.use('/meta', meta());
  app.use('/.extensions', hooks());

  app.use('/app', Express.static(path.join(__dirname, '../dist')));

  app.use(processLogs(storage));
  app.use('/', routes(storage));

  // Generic error handler.
  app.use(expressTools.middlewares.errorHandler(logger.error.bind(logger)));
  return app;
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

const decode = __webpack_require__(63);
const expressJwt = __webpack_require__(64);
const tools = __webpack_require__(0);
const conditional = __webpack_require__(44);

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.secret === null || options.secret === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    throw new tools.ArgumentError('The provided secret is invalid: ' + options.secret);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new tools.ArgumentError('Must provide a valid base URL');
  }

  if (typeof options.baseUrl !== 'string' || options.baseUrl.length === 0) {
    throw new tools.ArgumentError('The provided base URL is invalid: ' + options.baseUrl);
  }

  const validateToken = expressJwt({
    audience: options.audience,
    issuer: options.baseUrl,
    secret: options.secret,
    algorithms: [ 'HS256' ],
    credentialsRequired: options.credentialsRequired || true
  });

  return function(req, res, next) {
    validateToken(req, res, function(err) {
      if (err) {
        return next(err);
      }

      if (options.onLoginSuccess) {
        return options.onLoginSuccess(req, res, next);
      }

      return next();
    });
  };
};

module.exports.optional = function(options) {
  const mw = module.exports(options);
  return conditional(
    function(req) {
      if (req && req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        try {
          const decodedToken = decode(req.headers.authorization.split(' ')[1]);
          return decodedToken && decodedToken.iss === options.baseUrl;
        } catch (ex) {
          return false;
        }
      }

      return false;
    },
    mw
  );
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

const decode = __webpack_require__(63);
const jwt = __webpack_require__(64);
const jwksRsa = __webpack_require__(145);
const tools = __webpack_require__(0);
const conditional = __webpack_require__(44);
const UnauthorizedError = __webpack_require__(0).UnauthorizedError;

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid audience');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  const validateToken = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://' + options.domain + '/.well-known/jwks.json',
      handleSigningKeyError: function(err, cb) {
        if (err instanceof jwksRsa.SigningKeyNotFoundError) {
          return cb(new UnauthorizedError('A token was provided with an invalid kid'));
        }

        return cb(err);
      }
    }),

    // Validate the audience and the issuer.
    audience: options.audience,
    issuer: 'https://' + options.domain + '/',
    algorithms: [ 'RS256' ],

    // Optionally require authentication
    credentialsRequired: (options && options.credentialsRequired) || true
  });

  return function(req, res, next) {
    validateToken(req, res, function(err) {
      if (err) {
        return next(err);
      }

      if (options.onLoginSuccess) {
        return options.onLoginSuccess(req, res, next);
      }

      return next();
    });
  };
};

module.exports.optional = function(options) {
  const mw = module.exports(options);
  return conditional(
    function(req) {
      if (req && req.headers && req.headers.authorization && req.headers.authorization.indexOf('Bearer ') === 0) {
        try {
          const decodedToken = decode(req.headers.authorization.split(' ')[1]);
          return decodedToken && decodedToken.iss === 'https://' + options.domain + '/';
        } catch (ex) {
          return false;
        }
      }

      return false;
    },
    mw
  );
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(errorLogger) {
  return function(err, req, res, next) { // eslint-disable-line no-unused-vars
    if (errorLogger) {
      errorLogger(err);
    }

    if (err && err.status) {
      res.status(err.status);
      return res.json({
        error: err.code || err.name,
        message: err.message || err.name
      });
    }

    res.status(err.status || 500);
    if (true) {
      return res.json({
        error: 'InternalServerError',
        message: err.message || err.name
      });
    }

    return res.json({
      error: 'InternalServerError',
      message: err.message || err.name,
      details: {
        message: err.message,
        status: err.status,
        stack: err.stack
      }
    });
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.authenticateAdmins = __webpack_require__(69);
module.exports.authenticateUsers = __webpack_require__(70);
module.exports.requireAuthentication = __webpack_require__(74);
module.exports.errorHandler = __webpack_require__(71);
module.exports.managementApiClient = __webpack_require__(73);
module.exports.validateHookToken = __webpack_require__(75);
module.exports.webtaskConfig = __webpack_require__(76);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

module.exports = function(handlerOptions) {
  return function(req, res, next) {
    const request = req;
    const isAdministrator = req.user && req.user.access_token && req.user.access_token.length;
    const options = !isAdministrator ? handlerOptions : {
      domain: handlerOptions.domain,
      accessToken: req.user.access_token
    };

    tools.managementApi.getClient(options)
      .then(function(auth0) {
        request.auth0 = auth0;
        next();
        return null;
      })
      .catch(function(err) {
        next(err);
      });
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

const UnauthorizedError = __webpack_require__(0).UnauthorizedError;

module.exports = function(req, res, next) {
  if (!req.user) {
    return next(new UnauthorizedError('Authentication required for this endpoint.'));
  }

  return next();
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

module.exports = function(domain, webtaskUrl, extensionSecret) {
  if (domain === null || domain === undefined) {
    throw new tools.ArgumentError('Must provide the domain');
  }

  if (typeof domain !== 'string' || domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + domain);
  }

  if (webtaskUrl === null || webtaskUrl === undefined) {
    throw new tools.ArgumentError('Must provide the webtaskUrl');
  }

  if (typeof webtaskUrl !== 'string' || webtaskUrl.length === 0) {
    throw new tools.ArgumentError('The provided webtaskUrl is invalid: ' + webtaskUrl);
  }

  if (extensionSecret === null || extensionSecret === undefined) {
    throw new tools.ArgumentError('Must provide the extensionSecret');
  }

  if (typeof extensionSecret !== 'string' || extensionSecret.length === 0) {
    throw new tools.ArgumentError('The provided extensionSecret is invalid: ' + extensionSecret);
  }

  return function(hookPath) {
    if (hookPath === null || hookPath === undefined) {
      throw new tools.ArgumentError('Must provide the hookPath');
    }

    if (typeof hookPath !== 'string' || hookPath.length === 0) {
      throw new tools.ArgumentError('The provided hookPath is invalid: ' + hookPath);
    }

    return function(req, res, next) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        const token = req.headers.authorization.split(' ')[1];

        try {
          if (tools.validateHookToken(domain, webtaskUrl, hookPath, extensionSecret, token)) {
            return next();
          }
        } catch (e) {
          return next(e);
        }
      }

      return next(new tools.HookTokenError('Hook token missing for the call to: ' + hookPath));
    };
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

module.exports = function(config) {
  return function(req, res, next) {
    if (req.webtaskContext) {
      config.setProvider(tools.configProvider.fromWebtaskContext(req.webtaskContext));
    }

    return next();
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(17);
const crypto = __webpack_require__(141);
const cookieParser = __webpack_require__(94);
const jwt = __webpack_require__(144);
const tools = __webpack_require__(0);

const urlHelpers = __webpack_require__(39);

module.exports = function(options) {
  if (!options || typeof options !== 'object') {
    throw new tools.ArgumentError('Must provide the options');
  }

  if (options.secret === null || options.secret === undefined) {
    throw new tools.ArgumentError('Must provide a valid secret');
  }

  if (typeof options.secret !== 'string' || options.secret.length === 0) {
    throw new tools.ArgumentError('The provided secret is invalid: ' + options.secret);
  }

  if (options.audience === null || options.audience === undefined) {
    throw new tools.ArgumentError('Must provide a valid audience');
  }

  if (typeof options.audience !== 'string' || options.audience.length === 0) {
    throw new tools.ArgumentError('The provided audience is invalid: ' + options.audience);
  }

  if (options.rta === null || options.rta === undefined) {
    throw new tools.ArgumentError('Must provide a valid rta');
  }

  if (typeof options.rta !== 'string' || options.rta.length === 0) {
    throw new tools.ArgumentError('The provided rta is invalid: ' + options.rta);
  }

  if (options.domain === null || options.domain === undefined) {
    throw new tools.ArgumentError('Must provide a valid domain');
  }

  if (typeof options.domain !== 'string' || options.domain.length === 0) {
    throw new tools.ArgumentError('The provided domain is invalid: ' + options.domain);
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new tools.ArgumentError('Must provide a valid base URL');
  }

  if (typeof options.baseUrl !== 'string' || options.baseUrl.length === 0) {
    throw new tools.ArgumentError('The provided base URL is invalid: ' + options.baseUrl);
  }

  if (options.clientName === null || options.clientName === undefined) {
    throw new tools.ArgumentError('Must provide a valid client name');
  }

  if (typeof options.clientName !== 'string' || options.clientName.length === 0) {
    throw new tools.ArgumentError('The provided client name is invalid: ' + options.clientName);
  }

  if (typeof options.storageType !== 'undefined' && options.storageType !== 'sessionStorage' && options.storageType !== 'localStorage') {
    throw new tools.ArgumentError('The storageType must be either "sessionStorage" or "localStorage". Incorrect storageType: ' + options.storageType);
  }

  const stateKey = options.stateKey || 'state';
  const nonceKey = options.nonceKey || 'nonce';
  const urlPrefix = options.urlPrefix || '';
  const storageType = options.storageType || 'sessionStorage';
  const storageKey = options.storageKey || options.sessionStorageKey || 'apiToken';
  const sessionManager = new tools.SessionManager(options.rta, options.domain, options.baseUrl);

  const router = express.Router();
  router.get(urlPrefix + '/login', function(req, res) {
    const basePath = urlHelpers.getBasePath(req);
    const state = crypto.randomBytes(16).toString('hex');
    const nonce = crypto.randomBytes(16).toString('hex');  
    const basicAttr = {
      httpOnly: true,
      path: basePath
    };

    res.cookie(stateKey, state, Object.assign({}, basicAttr, { sameSite: 'None', secure: true }));
    res.cookie(nonceKey, nonce, Object.assign({}, basicAttr, { sameSite: 'None', secure: true }));

    // create legacy cookie
    res.cookie(stateKey + '_compat', state, basicAttr);
    res.cookie(nonceKey + '_compat', nonce, basicAttr);
    
    const redirectTo = sessionManager.createAuthorizeUrl({
      redirectUri: urlHelpers.getBaseUrl(req) + urlPrefix + '/login/callback',
      scopes: options.scopes,
      expiration: options.expiration,
      nonce: nonce,
      state: state
    });
    res.redirect(redirectTo);
  });

  router.post(urlPrefix + '/login/callback', cookieParser(), function(req, res, next) {
    var decoded;

    try {
      decoded = jwt.decode(req.body.id_token);
    } catch (e) {
      decoded = null;
    }

    if (!decoded) {
      return next(new tools.ValidationError('Login failed. Invalid token.'));
    }

    if ((req.cookies && req.cookies[nonceKey] && req.cookies[nonceKey] !== decoded.nonce) || (req.cookies && req.cookies[nonceKey + '_compat'] && req.cookies[nonceKey + '_compat'] !== decoded.nonce)) {
      return next(new tools.ValidationError('Login failed. Nonce mismatch.'));
    }
    if ((req.cookies && req.cookies[stateKey] && req.cookies[stateKey] !== req.body.state) || (req.cookies && req.cookies[stateKey + '_compat'] && req.cookies[stateKey + '_compat'] !== req.body.state)) {
      return next(new tools.ValidationError('Login failed. State mismatch.'));
    }

    const basePath = urlHelpers.getBasePath(req);
    const session = sessionManager.create(req.body.id_token, req.body.access_token, {
      secret: options.secret,
      issuer: options.baseUrl,
      audience: options.audience,
      noAccessToken: options.noAccessToken
    });

    return session
      .then(function(token) {
        res.clearCookie(stateKey, { path: basePath });
        res.clearCookie(nonceKey, { path: basePath });
        res.clearCookie(stateKey + '_compat', { path: basePath });
        res.clearCookie(nonceKey + '_compat', { path: basePath });
        res.header('Content-Type', 'text/html');
        res.status(200).send('<html>' +
          '<head>' +
          '<script type="text/javascript">' +
          storageType + '.setItem("' + storageKey + '", "' + token + '");' +
          'window.location.href = "' + urlHelpers.getBaseUrl(req) + '";' +
          '</script>' +
          '</head>' +
          '</html>');
      })
      .catch(function(err) {
        next(err);
      });
  });

  router.get(urlPrefix + '/logout', function(req, res) {
    const basePath = urlHelpers.getBasePath(req);
    const encodedBaseUrl = encodeURIComponent(urlHelpers.getBaseUrl(req));
    res.clearCookie(stateKey, { path: basePath });
    res.clearCookie(nonceKey, { path: basePath });
    res.clearCookie(stateKey + '_compat', { path: basePath });
    res.clearCookie(nonceKey + '_compat', { path: basePath });
    res.header('Content-Type', 'text/html');
    res.status(200).send(
      '<html>' +
      '<head>' +
      '<script type="text/javascript">' +
      storageType + '.removeItem("' + storageKey + '");' +
      'window.location.href = "https://' + options.rta + '/v2/logout/?returnTo=' + encodedBaseUrl + '&client_id=' + encodedBaseUrl + '";' +
      '</script>' +
      '</head>' +
      '</html>'
    );
  });

  router.get('/.well-known/oauth2-client-configuration', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.status(200).send({
      redirect_uris: [ urlHelpers.getBaseUrl(req) + urlPrefix + '/login/callback' ],
      client_name: options.clientName,
      post_logout_redirect_uris: [ urlHelpers.getBaseUrl(req) ]
    });
  });

  return router;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.dashboardAdmins = __webpack_require__(77);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);
const Webtask = __webpack_require__(152);

module.exports.createServer = function(cb) {
  const serverFn = tools.createServer(cb);
  var dispatchFn = null;

  return Webtask.fromExpress(function requestHandler(req, res) {
    if (!dispatchFn) {
      dispatchFn = serverFn(req.webtaskContext);
    }

    return dispatchFn(req, res);
  });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(25);
var Promise = __webpack_require__(38);
var tools = __webpack_require__(0);

var logTypes = __webpack_require__(42);
var LogsApiStream = __webpack_require__(43);
var StorageProvider = __webpack_require__(82);

function LogsProcessor(storageContext, options) {
  if (options === null || options === undefined) {
    throw new tools.ArgumentError('Must provide an options object');
  }

  this.start = new Date().getTime();
  this.storage = new StorageProvider(storageContext);
  this.options = _.assign({}, {
    batchSize: 100,
    maxRetries: 5,
    maxRunTimeSeconds: 22
  }, options);
}

LogsProcessor.prototype.hasTimeLeft = function (start, responseCount) {
  var now = new Date().getTime();
  var averageTime = (now - start) / responseCount;
  var limit = this.options.maxRunTimeSeconds;
  var timeLeft = start + limit * 1000 - now;

  if (this.options.logger) {
    this.options.logger.debug(timeLeft / 1000 + ' seconds run time left, average response time is ' + averageTime / 1000 + ' seconds.');
  }

  return timeLeft >= averageTime;
};

LogsProcessor.prototype.getLogFilter = function (options) {
  var types = options.logTypes || [];
  if (options.logLevel) {
    var typesFromLevel = _.map(logTypes, function (data, type) {
      var logType = data;
      logType.type = type;
      return logType;
    });

    types = types.concat(_.map(_.filter(typesFromLevel, function (type) {
      return type.level >= options.logLevel;
    }), 'type'));
  }

  return _.uniq(types);
};

LogsProcessor.prototype.getReport = function (start, end) {
  var startStamp = new Date(start).getTime();
  var endStamp = end ? new Date(end).getTime() : new Date().getTime();

  return this.storage.read().then(function (data) {
    return _.filter(data.logs, function (log) {
      var logStart = new Date(log.start).getTime();
      var logEnd = new Date(log.end).getTime();

      return logStart >= startStamp && logEnd <= endStamp;
    });
  }).then(function (logs) {
    var result = {
      type: 'report',
      processed: 0,
      warnings: 0,
      errors: 0,
      checkpoint: ''
    };

    _.each(logs, function (log) {
      result.processed += log.logsProcessed;
      result.checkpoint = log.checkpoint;

      if (log.error) {
        result.errors += 1;
      }

      if (log.warning) {
        result.warnings += 1;
      }
    });

    return result;
  });
};

LogsProcessor.prototype.createStream = function (options) {
  var _this = this;

  return this.storage.getCheckpoint(options.startFrom).then(function (startCheckpoint) {
    if (options.logger) {
      options.logger.debug('Starting logs processor from checkpoint:', startCheckpoint);
    }

    return new LogsApiStream({
      checkpointId: startCheckpoint,
      types: _this.getLogFilter(options),
      start: _this.start,
      maxRetries: options.maxRetries,
      maxRunTimeSeconds: options.maxRunTimeSeconds,
      domain: options.domain,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      tokenCache: _this.storage,
      logger: options.logger
    });
  });
};

LogsProcessor.prototype.run = function (handler) {
  var _this2 = this;

  var handlerAsync = Promise.promisify(handler);

  return new Promise(function (resolve, reject) {
    var start = _this2.start;
    var responseCount = 0;
    var retries = 0;
    var lastLogDate = 0;
    var logsBatch = [];
    var storage = _this2.storage;
    var options = _this2.options;
    var batchSize = options.batchSize;
    var maxRetries = options.maxRetries;

    // Stop the run because it failed.
    var runFailed = function runFailed(error, status, checkpoint) {
      if (options.logger) {
        options.logger.debug('Processor failed:', error);
      }

      status.error = error;

      storage.done(status, checkpoint).then(function () {
        return resolve({ status: status, checkpoint: checkpoint });
      }).catch(reject);
    };

    // The run ended successfully.
    var runSuccess = function runSuccess(status, checkpoint) {
      if (options.logger) {
        options.logger.debug('Processor run complete. Logs processed:', status.logsProcessed);
      }

      if (checkpoint !== status.startCheckpoint) {
        var week = 604800000;
        var currentDate = new Date().getTime();
        var timeDiff = currentDate - lastLogDate;

        if (timeDiff >= week) {
          status.warning = 'Logs are outdated more than for week. Last processed log has date is ' + new Date(lastLogDate);
        }

        return storage.done(status, checkpoint).then(function () {
          return resolve({ status: status, checkpoint: checkpoint });
        }).catch(reject);
      }

      return resolve({ status: status, checkpoint: checkpoint });
    };

    // Figure out how big we want the batch of logs to be.
    var getNextLimit = function getNextLimit() {
      var limit = batchSize;
      limit -= logsBatch.length;
      if (limit > 1000) {
        limit = 1000;
      }
      return limit;
    };

    // Retry the process if it failed.
    var retryProcess = function retryProcess(err, stream) {
      if (!_this2.hasTimeLeft(start, responseCount)) {
        return Promise.reject({
          err: err,
          status: stream.status,
          checkpoint: stream.previousCheckpoint,
          unrecoverable: true
        });
      }

      if (retries < maxRetries) {
        retries += 1;
        return handlerAsync(logsBatch);
      }

      var error = [err, 'Skipping logs from ' + stream.previousCheckpoint + ' to ' + stream.lastCheckpoint + ' after ' + maxRetries + ' retries.'];

      if (options.logger) {
        options.logger.error(error[0] && error[0].message || error[0], error[1]);
      }

      // We're giving up.
      return Promise.reject({
        err: error,
        status: stream.status,
        checkpoint: stream.lastCheckpoint,
        unrecoverable: true
      });
    };

    _this2.createStream(options).then(function (stream) {
      return new Promise(function (streamResolve, streamReject) {
        var nextLimit = getNextLimit();
        var timedOut = false;

        if (options.logger) {
          options.logger.debug('Loading next batch of logs. Next limit:', nextLimit);
        }

        // Get the first batch.
        stream.next(nextLimit);

        // Process batch of logs.
        stream.on('data', function (data) {
          var logs = data.logs;
          logsBatch = logsBatch.concat(logs);

          responseCount++;

          if (logs && logs.length) {
            lastLogDate = new Date(logs[logs.length - 1].date).getTime();
          }

          // TODO: At some point, even if the batch is too small, we need to ship the logs.
          if (logsBatch.length < batchSize && _this2.hasTimeLeft(start, responseCount)) {
            return stream.next(getNextLimit());
          }

          var processComplete = function processComplete(err) {
            if (err) {
              if (err.unrecoverable) {
                return streamReject(err);
              }

              return retryProcess(err.err || err, stream).then(function () {
                return processComplete();
              }).catch(function (err) {
                return processComplete(err);
              });
            }

            logsBatch = [];

            if (!_this2.hasTimeLeft(start, responseCount)) {
              if (options.logger) {
                options.logger.debug('No time left for additional requests');
              }

              return stream.done();
            }

            stream.batchSaved();
            return stream.next(getNextLimit());
          };

          return handlerAsync(logsBatch).then(function () {
            return processComplete();
          }).catch(function (err) {
            return processComplete(err);
          });
        });

        var handleEnd = function handleEnd() {
          var processComplete = function processComplete(err) {
            if (err) {
              if (err.unrecoverable) {
                return streamReject(err);
              }

              return retryProcess(err.err || err, stream).then(function () {
                return processComplete();
              }).catch(function (err) {
                return processComplete(err);
              });
            }

            stream.batchSaved();
            return streamResolve({
              status: stream.status,
              checkpoint: stream.lastCheckpoint
            });
          };

          return handlerAsync(logsBatch).then(function () {
            return processComplete();
          }).catch(function (err) {
            return processComplete(err);
          });
        };

        new Promise(function (endResolve) {
          stream.on('end', endResolve);
        }).then(handleEnd);

        // An error occured when processing the stream.
        stream.on('error', function (err) {
          return streamReject({
            err: err,
            status: stream.status,
            checkpoint: stream.previousCheckpoint
          });
        });
      });
    }).then(function (result) {
      return runSuccess(result.status, result.checkpoint);
    }).catch(function (result) {
      return runFailed(result.err, result.status, result.checkpoint);
    });
  });
};

module.exports = LogsProcessor;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(45);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(93);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = __webpack_require__(38);
var request = __webpack_require__(66);

function SlackReporter(options) {
  this.options = options || {};
}

SlackReporter.prototype.send = function (status, checkpoint) {
  if (!status || (typeof status === 'undefined' ? 'undefined' : (0, _typeof3.default)(status)) !== 'object') {
    throw new Error('object status is required');
  }

  var options = this.options;
  var msg = this.createMessage(this.options, status, checkpoint);

  return new Promise(function (resolve, reject) {
    if (!options.hook) {
      return resolve();
    }

    return request.post(options.hook).send(msg).set('Accept', 'application/json').end(function (err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
};

SlackReporter.prototype.createMessage = function (options, status, checkpoint) {
  var msg = {
    username: options.username || 'auth0-logger',
    icon_emoji: options.icon || ':rocket:',
    attachments: []
  };

  var title = options.title || 'Auth0 Logger';
  var defaultText = status.type === 'report' ? title + ' Daily Report' : status.error ? title + ' Error' : title + ' Success';
  var error = status.error || null;

  var defaultTemplate = {
    fallback: options.fallback || defaultText,
    text: options.text || defaultText,
    error_field: { title: 'Error', value: (0, _stringify2.default)(error), short: false }
  };

  if (status.type === 'report') {
    defaultTemplate.fields = [{ title: 'Logs processed', value: status.processed, short: true }, { title: 'Warnings', value: status.warnings, short: true }, { title: 'Errors', value: status.errors, short: true }, { title: 'Next checkpoint', value: status.checkpoint, short: true }];
  } else {
    defaultTemplate.fields = [{ title: 'Start time', value: status.start, short: true }, { title: 'End time', value: status.end, short: true }, { title: 'Logs processed', value: status.logsProcessed, short: true }, { title: 'Next checkpoint', value: checkpoint, short: true }];
  }

  var details = options.url ? ' (<' + options.url + '|Details>)' : null;

  var fields = defaultTemplate.fields;

  if (status.error) {
    fields.push(defaultTemplate.error_field);
  }

  // Todo: this should handle error colors/warning colors also.
  msg.attachments.push({
    color: status.error ? '#d13f42' : '#7cd197',
    fallback: defaultTemplate.fallback,
    text: defaultTemplate.fallback + (details || ''),
    fields: fields
  });

  return msg;
};

module.exports = SlackReporter;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(45);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assign = __webpack_require__(25).assign;
var ArgumentError = __webpack_require__(0).ArgumentError;

function StorageProvider(storageContext, options) {
  if (!storageContext) {
    throw new ArgumentError('The storageContext is required');
  }

  this.storageContext = storageContext;
  this.options = assign({}, { limit: 400 }, options);
}

StorageProvider.prototype.read = function () {
  var self = this;
  return self.storageContext.read().then(function (contents) {
    var data = contents || {};
    data.logs = data.logs || [];
    return data;
  });
};

StorageProvider.prototype.write = function (data) {
  var self = this;
  return self.storageContext.write(data);
};

StorageProvider.prototype.getCheckpoint = function (startFrom) {
  var self = this;
  return self.read().then(function (data) {
    if (startFrom && startFrom !== data.startFrom) {
      data.startFrom = startFrom;
      data.checkpointId = startFrom;

      return self.write(data).then(function () {
        return data.checkpointId || startFrom || null;
      });
    }

    return data.checkpointId;
  });
};

StorageProvider.prototype.getToken = function () {
  return this.read().then(function (data) {
    return data.logs_access_token || null;
  });
};

StorageProvider.prototype.setToken = function (token) {
  var self = this;
  return self.read().then(function (data) {
    data.logs_access_token = token;
    return self.write(data);
  });
};

StorageProvider.prototype.done = function (status, checkpointId) {
  var self = this;
  return self.read().then(function (data) {
    var storageSize = Buffer.byteLength((0, _stringify2.default)(data), 'utf8');
    if (storageSize >= self.options.limit * 1024 && data.logs && data.logs.length) {
      data.logs.splice(0, 5);
    }

    status.checkpoint = checkpointId;

    data.logs.push(status);
    data.checkpointId = checkpointId;

    return self.write(data);
  });
};

module.exports = StorageProvider;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(146);
var loggingTools = __webpack_require__(41);

var logger = __webpack_require__(13);
var config = __webpack_require__(5);
var sender = __webpack_require__(84);

var MS_PER_S = 1000;
var NS_PER_MS = 1000000;

module.exports = function (storage) {
  return function (req, res, next) {
    var wtBody = req.webtaskContext && req.webtaskContext.body || req.body || {};
    var wtHead = req.webtaskContext && req.webtaskContext.headers || {};
    var isCron = wtBody.schedule && wtBody.state === 'active' || wtHead.referer === 'https://manage.auth0.com/' && wtHead['if-none-match'];

    if (!isCron) {
      return next();
    }

    var sendLogs = sender();

    var updateLastRun = function updateLastRun() {
      return storage.read().then(function (data) {
        data.lastRun = new Date();
        return storage.write(data);
      });
    };

    var provider = "customerio";

    var onLogsReceived = function onLogsReceived(logs, callback) {
      var startTime = process.hrtime();

      var requestFinished = function requestFinished(err) {
        var elapsedTime = process.hrtime(startTime);
        var elapsedMillis = elapsedTime[0] * MS_PER_S + elapsedTime[1] / NS_PER_MS;

        logger.info('Finished request to \'' + provider + '\' in ' + elapsedMillis + 'ms.');

        callback(err);
      };

      sendLogs(logs, requestFinished);
    };

    var slackConfig = {
      hook: config('SLACK_INCOMING_WEBHOOK_URL'),
      username: 'auth0-logs-to-' + provider,
      title: 'Logs Export'
    };

    if (provider === 'mgmt-webhooks') {
      slackConfig.username = 'auth0-management-api-webhooks';
      slackConfig.title = 'Management API Webhooks';
    } else if (provider === 'auth-webhooks') {
      slackConfig.username = 'auth0-authentication-api-webhooks';
      slackConfig.title = 'Authentication API Webhooks';
    }

    var slack = new loggingTools.reporters.SlackReporter(slackConfig);

    var options = {
      domain: config('AUTH0_DOMAIN'),
      clientId: config('AUTH0_CLIENT_ID'),
      clientSecret: config('AUTH0_CLIENT_SECRET'),
      batchSize: parseInt(config('BATCH_SIZE')),
      startFrom: config('START_FROM'),
      logTypes: config('LOG_TYPES'),
      logLevel: config('LOG_LEVEL'),
      logger: logger
    };

    var maxBatchSize = 100;

    if (provider === 'mixpanel') {
      maxBatchSize = 20;
    } else if (options.batchSize === 1000) {
      maxBatchSize = options.batchSize;
    }

    if (!options.batchSize || options.batchSize > maxBatchSize) {
      options.batchSize = maxBatchSize;
    }

    if (options.logTypes && !Array.isArray(options.logTypes)) {
      options.logTypes = options.logTypes.replace(/\s/g, '').split(',');
    }

    if (provider === 'mgmt-webhooks') {
      options.logTypes = ['sapi', 'fapi'];
    } else if (provider === 'segment') {
      options.logTypes = ['s', 'ss', 'f'];
    }

    var auth0logger = new loggingTools.LogsProcessor(storage, options);

    var sendDailyReport = function sendDailyReport(lastReportDate) {
      var current = new Date();

      var end = current.getTime();
      var start = end - 86400000;
      auth0logger.getReport(start, end).then(function (report) {
        return slack.send(report, report.checkpoint);
      }).then(function () {
        return storage.read();
      }).then(function (data) {
        data.lastReportDate = lastReportDate;
        return storage.write(data);
      });
    };

    var checkReportTime = function checkReportTime() {
      storage.read().then(function (data) {
        var now = moment().format('DD-MM-YYYY');
        var reportTime = config('DAILY_REPORT_TIME') || 16;

        if (data.lastReportDate !== now && new Date().getHours() >= reportTime) {
          sendDailyReport(now);
        }
      });
    };

    return updateLastRun().then(function () {
      return auth0logger.run(onLogsReceived).then(function (result) {
        if (result && result.status && result.status.error) {
          slack.send(result.status, result.checkpoint);
        } else if (config('SLACK_SEND_SUCCESS') === true || config('SLACK_SEND_SUCCESS') === 'true') {
          slack.send(result.status, result.checkpoint);
        }
        checkReportTime();
        res.json(result);
      }).catch(function (err) {
        slack.send({ error: err, logsProcessed: 0 }, null);
        checkReportTime();
        next(err);
      });
    });
  };
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(90);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = __webpack_require__(25);
var async = __webpack_require__(138);
var CIO = __webpack_require__(132);
var loggingTools = __webpack_require__(41);
var managementApi = __webpack_require__(0).managementApi;

var config = __webpack_require__(5);
var logger = __webpack_require__(13);

var eventMap = {
  s: "logged_in_auth0",
  svr: "email_verification_requested",
  limit_wc: "blocked_account_auth0",
  sv: "email_verified"
};

module.exports = function () {
  var cio = new CIO(config("CUSTOMER_IO_SITE_ID"), config("CUSTOMER_IO_API_KEY"), [defaults]);

  return function (logs, callback) {
    if (!logs || !logs.length) {
      return callback();
    }

    logger.info("Sending " + logs.length + " logs to Customer.io.");

    async.eachLimit(logs, 10, function (log, cb) {
      if (!log.user_id) {
        return cb();
      }

      var event = eventMap[log.type];
      if (!event) {
        return callback();
      }

      return managementApi.getClient({
        domain: config("AUTH0_DOMAIN"),
        clientId: config("AUTH0_CLIENT_ID"),
        clientSecret: config("AUTH0_CLIENT_SECRET")
      }).then(function (auth0) {
        return auth0.users.get({ id: log.user_id });
      }).then(function (user) {
        var req = cio.request;
        return req.handler(req.options("https://api.customer.io/v1/api/customers?email=" + user["email"], "GET")), user;
      }).then(function (customers, user) {
        var promises = [];
        customers.forEach(function (customer) {
          promises.push(cio.track(customer["id"], {
            name: event,
            data: {
              email_verified: user["email_verified"]
            }
          }));
        });
        _promise2.default.all(promises).then(cb);
      }).catch(function (err) {
        return cb(err);
      });
    }, callback);
  };
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var router = __webpack_require__(17).Router;
var middlewares = __webpack_require__(12).middlewares;

var config = __webpack_require__(5);
var logger = __webpack_require__(13);

module.exports = function () {
  var hooks = router();
  var hookValidator = middlewares.validateHookToken(config('AUTH0_DOMAIN'), config('WT_URL'), config('EXTENSION_SECRET'));

  hooks.use('/on-uninstall', hookValidator('/.extensions/on-uninstall'));
  hooks.use(middlewares.managementApiClient({
    domain: config('AUTH0_DOMAIN'),
    clientId: config('AUTH0_CLIENT_ID'),
    clientSecret: config('AUTH0_CLIENT_SECRET')
  }));

  hooks.delete('/on-uninstall', function (req, res) {
    var clientId = config('AUTH0_CLIENT_ID');
    req.auth0.clients.delete({ client_id: clientId }).then(function () {
      logger.debug('Deleted client ' + clientId);
      res.sendStatus(204);
    }).catch(function (err) {
      logger.debug('Error deleting client: ' + config('AUTH0_CLIENT_ID'));
      logger.error(err);

      // Even if deleting fails, we need to be able to uninstall the extension.
      res.sendStatus(204);
    });
  });
  return hooks;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var fs = __webpack_require__(143);
var ejs = __webpack_require__(142);
var path = __webpack_require__(65);
var urlHelpers = __webpack_require__(12).urlHelpers;

var config = __webpack_require__(5);

module.exports = function () {
  var template = '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <title><%= config.TITLE %></title>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/4.6.13/lib/logos/img/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.1672/css/index.min.css" />\n    <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/4.6.13/index.min.css" />\n    <% if (assets.style) { %><link rel="stylesheet" type="text/css" href="/app/<%= assets.style %>" /><% } %>\n    <% if (assets.useCdn) { %><link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.css" /><% } %>\n    <% if (assets.customCss) { %><link rel="stylesheet" type="text/css" href="<%= assets.customCss %>" /><% } %>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="text/javascript" src="//cdn.auth0.com/w2/auth0-7.0.4.min.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.1672/js/bundle.js"></script>\n    <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;</script>\n    <% if (assets.vendors) { %><script type="text/javascript" src="/app/<%= assets.vendors %>"></script><% } %>\n    <% if (assets.app) { %><script type="text/javascript" src="<%= assets.app %>"></script><% } %>\n    <% if (assets.useCdn) { %>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.vendors.js"></script>\n    <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-logs-to-provider/assets/auth0-logs-to-provider.ui.js"></script>\n    <% } %>\n  </body>\n  </html>\n  ';

  return function (req, res, next) {
    if (req.url.indexOf('/api') === 0) {
      return next();
    }

    var settings = {
      AUTH0_DOMAIN: config('AUTH0_DOMAIN'),
      AUTH0_CLIENT_ID: config('EXTENSION_CLIENT_ID'),
      AUTH0_MANAGE_URL: config('AUTH0_MANAGE_URL') || 'https://manage.auth0.com',
      BASE_URL: urlHelpers.getBaseUrl(req),
      BASE_PATH: urlHelpers.getBasePath(req),
      TITLE: config('TITLE')
    };

    // Render from CDN.
    if (true) {
      return res.send(ejs.render(template, {
        config: settings,
        assets: {
          customCss: config('CUSTOM_CSS'),
          useCdn: true
        }
      }));
    }

    // Render locally.
    return fs.readFile(path.join(__dirname, '../../dist/manifest.json'), 'utf8', function (err, manifest) {
      var locals = {
        config: settings,
        assets: {
          customCss: config('CUSTOM_CSS'),
          app: 'http://localhost:3000/app/bundle.js'
        }
      };

      if (!err && manifest) {
        locals.assets = JSON.parse(manifest);
        locals.assets.app = '/app/' + locals.assets.app;
        locals.assets.customCss = config('CUSTOM_CSS');
      }

      // Render the HTML page.
      res.send(ejs.render(template, locals));
    });
  };
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(25);
var router = __webpack_require__(17).Router;
var middlewares = __webpack_require__(12).middlewares;

var config = __webpack_require__(5);
var htmlRoute = __webpack_require__(86);

module.exports = function (storage) {
  var app = router();
  var authenticateAdmins = middlewares.authenticateAdmins({
    credentialsRequired: true,
    secret: config('EXTENSION_SECRET'),
    audience: 'urn:logs-to-provider',
    baseUrl: config('PUBLIC_WT_URL') || config('WT_URL'),
    onLoginSuccess: function onLoginSuccess(req, res, next) {
      return next();
    }
  });

  app.get('/', htmlRoute());

  app.get('/api/report', authenticateAdmins, function (req, res, next) {
    return storage.read().then(function (data) {
      var lastRun = data && data.lastRun;
      var allLogs = data && data.logs ? _.orderBy(data.logs, 'start', 'desc') : [];
      var logs = req.query.filter && req.query.filter === 'errors' ? _.filter(allLogs, function (log) {
        return !!log.error;
      }) : allLogs;
      var page = req.query.page && parseInt(req.query.page) ? parseInt(req.query.page) - 1 : 0;
      var perPage = req.query.per_page && parseInt(req.query.per_page) || 10;
      var offset = perPage * page;

      return res.json({ logs: logs.slice(offset, offset + perPage), total: logs.length, lastRun: lastRun });
    }).catch(next);
  });

  return app;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(17);
var metadata = __webpack_require__(134);

module.exports = function () {
  var api = express.Router();
  api.get('/', function (req, res) {
    res.status(200).send(metadata);
  });

  return api;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tools = __webpack_require__(12);

var expressApp = __webpack_require__(68);
var config = __webpack_require__(5);
var logger = __webpack_require__(13);

var createServer = tools.createServer(function (config, storage) {
  logger.info('Starting Auth0 Logging Extension - Version:', "1.0.0");
  return expressApp(config, storage);
});

module.exports = function (context, req, res) {
  var publicUrl = req.x_wt && req.x_wt.ectx && req.x_wt.ectx.PUBLIC_WT_URL || false;
  if (!publicUrl) {
    config.setValue('PUBLIC_WT_URL', tools.urlHelpers.getWebtaskUrl(req));
  }

  createServer(context, req, res);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(92);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(91);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie-parser
 * Copyright(c) 2014 TJ Holowaychuk
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var cookie = __webpack_require__(95)
var signature = __webpack_require__(140)

/**
 * Module exports.
 * @public
 */

module.exports = cookieParser
module.exports.JSONCookie = JSONCookie
module.exports.JSONCookies = JSONCookies
module.exports.signedCookie = signedCookie
module.exports.signedCookies = signedCookies

/**
 * Parse Cookie header and populate `req.cookies`
 * with an object keyed by the cookie names.
 *
 * @param {string|array} [secret] A string (or array of strings) representing cookie signing secret(s).
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function cookieParser (secret, options) {
  var secrets = !secret || Array.isArray(secret)
    ? (secret || [])
    : [secret]

  return function cookieParser (req, res, next) {
    if (req.cookies) {
      return next()
    }

    var cookies = req.headers.cookie

    req.secret = secrets[0]
    req.cookies = Object.create(null)
    req.signedCookies = Object.create(null)

    // no cookies
    if (!cookies) {
      return next()
    }

    req.cookies = cookie.parse(cookies, options)

    // parse signed cookies
    if (secrets.length !== 0) {
      req.signedCookies = signedCookies(req.cookies, secrets)
      req.signedCookies = JSONCookies(req.signedCookies)
    }

    // parse JSON cookies
    req.cookies = JSONCookies(req.cookies)

    next()
  }
}

/**
 * Parse JSON cookie string.
 *
 * @param {String} str
 * @return {Object} Parsed object or undefined if not json cookie
 * @public
 */

function JSONCookie (str) {
  if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {
    return undefined
  }

  try {
    return JSON.parse(str.slice(2))
  } catch (err) {
    return undefined
  }
}

/**
 * Parse JSON cookies.
 *
 * @param {Object} obj
 * @return {Object}
 * @public
 */

function JSONCookies (obj) {
  var cookies = Object.keys(obj)
  var key
  var val

  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i]
    val = JSONCookie(obj[key])

    if (val) {
      obj[key] = val
    }
  }

  return obj
}

/**
 * Parse a signed cookie string, return the decoded value.
 *
 * @param {String} str signed cookie string
 * @param {string|array} secret
 * @return {String} decoded value
 * @public
 */

function signedCookie (str, secret) {
  if (typeof str !== 'string') {
    return undefined
  }

  if (str.substr(0, 2) !== 's:') {
    return str
  }

  var secrets = !secret || Array.isArray(secret)
    ? (secret || [])
    : [secret]

  for (var i = 0; i < secrets.length; i++) {
    var val = signature.unsign(str.slice(2), secrets[i])

    if (val !== false) {
      return val
    }
  }

  return false
}

/**
 * Parse signed cookies, returning an object containing the decoded key/value
 * pairs, while removing the signed key from obj.
 *
 * @param {Object} obj
 * @param {string|array} secret
 * @return {Object}
 * @public
 */

function signedCookies (obj, secret) {
  var cookies = Object.keys(obj)
  var dec
  var key
  var ret = Object.create(null)
  var val

  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i]
    val = obj[key]
    dec = signedCookie(val, secret)

    if (val !== dec) {
      ret[key] = dec
      delete obj[key]
    }
  }

  return ret
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(126);
__webpack_require__(128);
__webpack_require__(129);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
__webpack_require__(60);
__webpack_require__(130);
__webpack_require__(131);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(62);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(11);
var toLength = __webpack_require__(59);
var toAbsoluteIndex = __webpack_require__(122);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(52);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(109);
var isArrayIter = __webpack_require__(107);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(59);
var getIterFn = __webpack_require__(124);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(14);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(50);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(58).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(14)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(30);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(35);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(11);
var gOPN = __webpack_require__(51).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(123);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(46);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(100);
var step = __webpack_require__(112);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(11);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var global = __webpack_require__(1);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(46);
var $export = __webpack_require__(15);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(18);
var anInstance = __webpack_require__(101);
var forOf = __webpack_require__(104);
var speciesConstructor = __webpack_require__(57);
var task = __webpack_require__(58).set;
var microtask = __webpack_require__(114)();
var newPromiseCapabilityModule = __webpack_require__(29);
var perform = __webpack_require__(54);
var promiseResolve = __webpack_require__(55);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(119)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(23)($Promise, PROMISE);
__webpack_require__(120)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(111)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(56);
var META = __webpack_require__(113).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(33);
var setToStringTag = __webpack_require__(23);
var uid = __webpack_require__(24);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(36);
var enumKeys = __webpack_require__(103);
var isArray = __webpack_require__(108);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(35);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(50);
var gOPNExt = __webpack_require__(117);
var $GOPD = __webpack_require__(116);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(30);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(51).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  __webpack_require__(52).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(15);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(57);
var promiseResolve = __webpack_require__(55);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(15);
var newPromiseCapability = __webpack_require__(29);
var perform = __webpack_require__(54);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('asyncIterator');


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36)('observable');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(133)
const trackRoot = 'https://track.customer.io/api/v1'
const apiRoot = 'https://api.customer.io/v1/api'

const BROADCASTS_ALLOWED_RECIPIENT_FIELDS = {
  ids: ['ids', 'id_ignore_missing'],
  emails: ['emails', 'email_ignore_missing', 'email_add_duplicates'],
  per_user_data: ['per_user_data'],
  data_file_url: ['data_file_url']
}

const filterRecipientsDataForField = (recipients, field) => {
  return BROADCASTS_ALLOWED_RECIPIENT_FIELDS[field]
    .reduce((obj, field) => {
      obj[field] = recipients[field]
      return obj
    }, {})
}

module.exports = class CustomerIO {
  constructor(siteid, apikey, defaults) {
    this.siteid = siteid
    this.apikey = apikey
    this.defaults = defaults
    this.request = new Request(this.siteid, this.apikey, this.defaults)
  }

  identify(id, data = {}) {
    return this.request.put(`${trackRoot}/customers/${id}`, data)
  }

  destroy(id) {
    return this.request.destroy(`${trackRoot}/customers/${id}`)
  }

  suppress(id) {
    return this.request.post(`${trackRoot}/customers/${id}/suppress`)
  }

  track(id, data = {}) {
    return this.request.post(`${trackRoot}/customers/${id}/events`, data)
  }

  trackAnonymous(data = {}) {
    return this.request.post(`${trackRoot}/events`, data)
  }

  trackPageView(id, path) {
    return this.request.post(`${trackRoot}/customers/${id}/events`, {
      type: 'page',
      name: path
    })
  }

  addDevice(id, device_id, platform, data = {}) {
    return this.request.put(`${trackRoot}/customers/${id}/devices`, {
      device: Object.assign({ id: device_id, platform }, data)
    })
  }

  deleteDevice(id, token) {
    return this.request.destroy(`${trackRoot}/customers/${id}/devices/${token}`)
  }

  triggerBroadcast(id, data, recipients) {
    let payload = {}
    let customRecipientField =
      Object
      .keys(BROADCASTS_ALLOWED_RECIPIENT_FIELDS)
      .find(field => recipients[field])

    if (customRecipientField) {
      payload = Object.assign({ data }, filterRecipientsDataForField(recipients, customRecipientField))
    } else {
      payload = {
        data,
        recipients
      };
    }

    return this.request.post(`${apiRoot}/campaigns/${id}/triggers`, payload)
  }

  addToSegment(segmentId, customerIds = []) {
    return this.request.post(`${trackRoot}/segments/${segmentId}/add_customers`, {
      ids: customerIds
    })
  }

  removeFromSegment(segmentId, customerIds = []) {
    return this.request.post(`${trackRoot}/segments/${segmentId}/remove_customers`, {
      ids: customerIds
    })
  }
}


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

const request = __webpack_require__(149)
const TIMEOUT = 10000

class Request {
  constructor(siteid, apikey, defaults) {
    this.siteid = siteid
    this.apikey = apikey
    this.defaults = Object.assign({
      timeout: TIMEOUT
    }, defaults)
    this.auth = `Basic ${Buffer.from(
      `${this.siteid}:${this.apikey}`,
      'utf8'
    ).toString('base64')}`
    this._request = request.defaults(this.defaults)
  }

  options(uri, method, data) {
    const headers = {
      Authorization: this.auth,
      'Content-Type': 'application/json'
    }
    const body = data ? JSON.stringify(data) : null
    const options = { method, uri, headers, body }

    if (!body) delete options.body

    return options
  }

  handler(options) {
    return new Promise((resolve, reject) => {
      this._request(options, (error, response, body) => {
        if (error) return reject(error)

        let json = null
        try {
          if (body) json = JSON.parse(body)
        } catch (e) {
          const message = `Unable to parse JSON. Error: ${e} \nBody:\n ${body}`
          return reject(new Error(message))
        }

        if (response.statusCode == 200 || response.statusCode == 201) {
          resolve(json)
        } else {
          reject({
            message: (json && json.meta && json.meta.error) || 'Unknown error',
            statusCode: response.statusCode,
            response: response,
            body: body
          })
        }
      })
    })
  }

  put(uri, data = {}) {
    return this.handler(this.options(uri, 'PUT', data))
  }

  destroy(uri) {
    return this.handler(this.options(uri, 'DELETE'))
  }

  post(uri, data = {}) {
    return this.handler(this.options(uri, 'POST', data))
  }
}

module.exports = Request


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = {"author":"auth0","type":"cron","category":"log_export","initialUrlPath":"/login","repository":"https://github.com/auth0-extensions/auth0-logs-to-provider","keywords":["auth0","extension"],"schedule":"0 */5 * * * *","auth0":{"createClient":true,"onUninstallPath":"/.extensions/on-uninstall","scopes":"read:logs read:users delete:clients"},"secrets":{"BATCH_SIZE":{"description":"The amount of logs to batch before sending. A single cron execution will send multiple batches. The maximum value is 100.","default":100},"START_FROM":{"description":"Checkpoint ID of log to start from."},"SLACK_INCOMING_WEBHOOK_URL":{"description":"Slack Incoming Webhook URL used to report statistics and possible failures"},"SLACK_SEND_SUCCESS":{"description":"This setting will enable verbose notifications to Slack which are useful for troubleshooting","type":"select","allowMultiple":false,"default":"false","options":[{"value":"false","text":"No"},{"value":"true","text":"Yes"}]},"LOG_LEVEL":{"default":1},"CUSTOMERIO_SITE_ID":{"description":"Customer.io site ID","required":true},"CUSTOMERIO_API_KEY":{"description":"Customer.io API key","required":true}},"title":"Auth0 Logs to Customer.io","name":"auth0-logs-to-customerio","version":"1.0.0","preVersion":"0.1.0","description":"This extension will select some of your Auth0 logs and export them to Customer.io"}

/***/ }),
/* 135 */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(135);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(154)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("async@2.1.2");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("body-parser@1.12.4");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("cookie-signature@1.0.6");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("ejs@2.3.1");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken@7.1.9");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("jwks-rsa@1.1.1");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("moment@2.10.3");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("morgan@1.5.3");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("request@2.56.0");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("webtask-tools");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("winston@1.0.0");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("wrappy@1.0.1");

/***/ })
/******/ ]);